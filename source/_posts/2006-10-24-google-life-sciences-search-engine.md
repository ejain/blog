---
id: 40
title: Google Life Sciences Search Engine
date: 2006-10-24T19:31:40+00:00
author: Eric Jain
layout: post
guid: http://eric.jain.name/2006/10/24/google-life-sciences-search-engine/
permalink: /2006/10/24/google-life-sciences-search-engine/
categories:
  - Life Science
  - Programming
---
Google now allows you to create [custom search engines](http://www.google.com/coop/cse/). I used this to set up a [search engine that searches in well know life sciences sites](http://www.google.com/coop/cse?cx=006535421108032988823%3Aqawq0v20t0e).

<!--more-->

In most cases normal web searches work fine. But sometimes you have terms that are frequently used in other contexts, e.g. [hedgehog](http://google.com/search?q=hedgehog) or [ada](http://google.com/search?q=ada)&#8230;

Google&#8217;s custom search engines are based on lists of URLs (or URL patterns) of sites that should be included. I suppose that behind the scene Google runs a normal web search, but filters out sites that are not included in the list.

The initial list of sites for the life sciences search engine was based on a [file](ftp://ftp.uniprot.org/pub/databases/uniprot/knowledgebase/docs/dbxref.txt) that lists all sites that are referenced from a [popular, well-linked life sciences database](http://uniprot.org/).

<pre>grep ^Server dbxref.txt | perl -lne 'print $1 if m{http://(.+?)/}' | sort | uniq
</pre>

If you&#8217;d like to add any sites, let me know (you can also request to participate in this search engine via Google).