---
id: 39
title: 'Google &quot;Subscribed Links&quot; for Enzyme Database'
date: 2006-05-17T18:17:15+00:00
author: Eric Jain
layout: post
guid: http://eric.jain.name/2006/05/17/enzyme-google-subscribed-links/
permalink: /2006/05/17/enzyme-google-subscribed-links/
categories:
  - Life Science
  - Programming
---
Google [Subscribed Links](http://www.google.com/coop/subscribedlinks/) provide a mechanism for adding information at the top of a Google search results page. I set up an example that can be used to see information from the [Enzyme Nomenclature Database](http://expasy.org/enzyme/) when searching for something like [EC 1.2.3.4](http://google.com/search?q=EC+1.2.3.4).

<!--more-->

If you [subscribe](http://www.google.com/coop/trust/add?user=006535421108032988823&sig=__Taczx2Qav_fQJr8Elwn-beZC-pY=) to this additional information, this is what should appear at the top of the results for the query mentioned above:

![](screenshot.png)

Google requires that you provide them with a static document that describes what to show for which queries &#8212; I assume forwarding queries to a server would be a performance and privacy problem. To produce this [document](enzyme.xml) (large!) I used:

&#8211; The `enzymes.rdf.gz` document from the latest [UniProt RDF distribution](http://dev.isb-sib.ch/projects/uniprot-rdf/)
  
&#8211; The [expasy4j](http://dev.isb-sib.ch/projects/expasy4j/) Java library for parsing this document
  
&#8211; A short ([Groovy](http://groovy.codehaus.org/)) [script](/2006/15/17/enzyme-google-subscribed-links/enzyme2coop.g)

Once the location of this document was submitted to Google, the document was crawled and (later) updated automatically.