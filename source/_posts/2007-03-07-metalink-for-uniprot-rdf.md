---
title: Metalink for UniProt RDF
tags:
  - Life Sciences
  - Technology
  - Semantic Web
---

The [UniProt RDF](http://dev.isb-sib.ch/projects/uniprot-rdf/) distribution is over 5GB large. To help people retrieve the data more efficiently, we now mirror the data and provide a [Metalink](ftp://ftp.uniprot.org/pub/databases/uniprot/current_release/rdf/RELEASE.metalink) file that describes all the file locations.

Using [aria2](http://aria2.sourceforge.net/) -- a command line download client that supports the [Metalink standard](http://www.metalinker.org/) -- you can do:

```shell
aria2c ftp://ftp.uniprot.org/pub/databases/uniprot/current_release/rdf/RELEASE.metalink
```

This will retrieve the data from all available mirrors in parallel, piece the files together, and verify the transferred data with checksums.

If you prefer graphical user interfaces, there is another tool called [wxDownload Fast](http://dfast.sourceforge.net/). Be sure to use the latest version (0.5.5) -- previous versions wouldn't do parallel downloads from some servers due to a small [bug](http://sourceforge.net/tracker/index.php?func=detail&aid=1674258&group_id=106901&atid=645951).
