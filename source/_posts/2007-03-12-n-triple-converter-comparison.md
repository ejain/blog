---
title: N-Triple Converter Comparison
tags:
  - Tech
  - Semantic Web
---

In order to bulk-load RDF data into Oracle (Spatial) 11g, the data needs to be converted to [N-Triples](http://www.w3.org/2001/sw/RDFCore/ntriples/) first. If the data set is large, this step can add quite a bit of overhead, which is why I decided to benchmark and compare several options.

For the comparison, the `<a href="ftp://ftp.uniprot.org/pub/databases/uniprot/current_release/rdf/taxonomy.rdf.gz">taxonomy.rdf.gz</a>` file from UniProt release 10.0 was used. This file is about 127M large (uncompressed). The machine on which the comparison was run is a (slightly obsolete) Itanium machine, with plenty of RAM.

### Raptor

The first tool I tried was [Raptor](http://librdf.org/raptor/) (1.4.14). After the usual `configure` -- `make` -- `make install` the conversion can be run like so:

    zcat taxonomy.rdf.gz | rapper -e -o ntriples - file://taxonomy.rdf.gz# > taxonomy.nt

This completed in 38.9, 38.8 and 38.9 seconds (in subsequent runs).

The `-e` flag turns off validation. This doesn't seem to have a measurable impact on performance, but is necessary to avoid erroneous "Duplicated rdf:ID value" errors (at least in another, larger file).

The data is decompressed on the fly to save time (and disk space).

### Jena

Next I tried [Jena](http://jena.sourceforge.net/) (2.5.2). After adding all the jars to the classpath, the conversion was run like so:

    zcat taxonomy.rdf.gz | java jena.rdfparse -b file://taxonomy.rdf.gz# -x - > taxonomy.nt

This completed in 2:38, 2:40 and 2:38 min.

This is too slow if I wanted to convert the entire [UniProt RDF data set](http://dev.isb-sib.ch/projects/uniprot-rdf/) within reasonable time, but at least I got a (correct) warning about a bad URI that I hadn't been aware of...

The JVM is [JRockit](http://dev2dev.bea.com/jrockit/) (5.0 R27.1) with default parameters (I tried some variations such as adding `-Xgcprio:throughput`, but didn't see any significant change).

### Rio

Last, I tried [Rio](http://www.openrdf.org/) (1.0.9), another Java parser. Rio doesn't seem to include a command line tool for conversion, but it's not a lot of code:

```
import java.io.IOException;
import org.openrdf.model.Resource;
import org.openrdf.model.URI;
import org.openrdf.model.Value;
import org.openrdf.rio.Parser;
import org.openrdf.rio.StatementHandler;
import org.openrdf.rio.StatementHandlerException;
import org.openrdf.rio.ntriples.NTriplesWriter;
import org.openrdf.rio.rdfxml.RdfXmlParser;

public class Converter
{
	public static void main(String[] args)
		throws Exception
	{
		Parser parser = new RdfXmlParser();
		final NTriplesWriter writer = new NTriplesWriter(System.out);
		writer.startDocument();
		parser.setStatementHandler(new StatementHandler()
		{
			public void handleStatement(Resource s, URI p, Value o)
				throws StatementHandlerException
			{
				try
				{
					writer.writeStatement(s, p, o);
				}

				catch (IOException e)
				{
					throw new StatementHandlerException(e);
				}
			}
		});
		parser.parse(System.in, args[0]);
		writer.endDocument();
	}

}
```

    zcat taxonomy.rdf.gz | java Converter file://taxonomy.rdf.gz# > taxonomy.nt

This ran in 49.8, 49.5 and 50.0 seconds.

Using buffered readers or writers seemed to decrease performance slightly, so I assume the streams are already being buffered.

### Conclusion

The conversion can be done fastest with Raptor. Rio is the best choice if you need to set up a platform-independent procedure (e.g. integrated into an Ant build). Jena is best if you also need to check the data :-)
