---
title: 'Google "Subscribed Links" for Enzyme Database'
date: 2006-05-17T18:17:15+00:00
tags:
  - Life Sciences
  - Technology
---

Google [Subscribed Links](http://www.google.com/coop/subscribedlinks/) provide a mechanism for adding information at the top of a Google search results page. I set up an example that can be used to see information from the [Enzyme Nomenclature Database](http://expasy.org/enzyme/) when searching for something like [EC 1.2.3.4](http://google.com/search?q=EC+1.2.3.4).

If you [subscribe](http://www.google.com/coop/trust/add?user=006535421108032988823&sig=__Taczx2Qav_fQJr8Elwn-beZC-pY=) to this additional information, this is what should appear at the top of the results for the query mentioned above:

![](screenshot.png)

Google requires that you provide them with a static document that describes what to show for which queries -- I assume forwarding queries to a server would be a performance and privacy problem. To produce this [document](enzyme.xml) (large!) I used:

-- The `enzymes.rdf.gz` document from the latest [UniProt RDF distribution](http://dev.isb-sib.ch/projects/uniprot-rdf/)
  
-- The [expasy4j](http://dev.isb-sib.ch/projects/expasy4j/) Java library for parsing this document
  
-- A short ([Groovy](http://groovy.codehaus.org/)) [script](enzyme2coop.g)

Once the location of this document was submitted to Google, the document was crawled and (later) updated automatically.
