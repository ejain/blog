---
id: 30
title: Clustering Kiwis
date: 2007-01-22T12:15:21+00:00
author: Eric Jain
layout: post
guid: http://eric.jain.name/2007/01/22/clustering-kiwis/
permalink: /2007/01/22/clustering-kiwis/
categories:
  - Usability
---
Being able to distinguish different meanings of a term may turn out to be the next big step forward for web search engines. There are quite a few people working on this now; here is a quick survey in which I check how well the different efforts handle the term &#8220;Kiwi&#8221;.

<!--more-->

&#8220;Kiwi&#8221; is a problematic term, as it can be used for:

  * a bird
  * a fruit
  * people from New Zealand
  * a name for various products or businesses

Moreover, the different uses of the term &#8220;Kiwi&#8221; are often closely related. For example, the Wikipedia article on &#8220;Kiwi (people)&#8221; contains the word &#8220;bird&#8221; (&#8220;The name derives ultimately from the flightless bird native [&#8230;]&#8221;). But this document shouldn&#8217;t appear (or score high) when we are looking for information about Kiwi birds.

### Google

[Google](http://www.google.com/search?q=kiwi) shows a suggestion to extend the query to &#8220;kiwi fruit&#8221; somewhere half way down in the list of results. The first hit is for some software called &#8220;Kiwi Syslog Daemon&#8221;. There is also a &#8220;definition&#8221; link that points to [Answers.com](http://www.answers.com/kiwi) where you get this:

> **Or did you mean:** kiwifruit , kiwi (bird), Kiwi (Marine lingo), kiwi (people), Kiwi (Dragon Ball), Kiwi (shoe polish), Kiwi (horse), Kiwi (2002 Album by Dim Dim), Kiwi (Gaming Character) 

That&#8217;s nice, but it&#8217;s just definitions, which doesn&#8217;t help us much with our web search (at least not directly).

### Yahoo!

[Yahoo!](http://search.yahoo.com/search?p=kiwi) suggests (at the top of the results page):

> **Also try:** killer kiwi, kiwi fruit, kiwi carpet cleaning, kiwi bird

No comment&#8230;

### Live Search

[Live Search](http://search.live.com/results.aspx?q=kiwi) suggests these &#8220;related searches&#8221;:

> **Related searches:** Kiwi Fruit, Kiwi Bird, Kiwi Plants, Kiwi Casino, Killer Kiwi, Kiwi Bingo, Kiwi Photo Gallery 

Also &#8212; for reasons beyond my comprehension &#8212; there are no less than three ads for buying &#8220;thong bikinis&#8221;&#8230;

### Ask

[Ask](http://www.ask.com/web?q=kiwi) lists matching Wikipedia articles at the top (in a dropdown list). This isn&#8217;t terribly convenient, but in this case it does give a good idea of the different uses of the term. When you select an article the search is redone to match the selected article. Also, there are these suggestions:

> **Narrow Your Search:** Eat a Kiwi, Kiwi Shoe Polish, Kiwi Fruit Facts, Kiwi Recipes, Kiwi Origin, Kiwi Bird Live, Kiwi Fruit Come
  
> **Expand Your Search:** Kiwi Bird, Strawberries, New Zealand, Oranges, Pineapple, Grapes
  
> **Related Names:** Peaches, Rhea 

### Clusty

[Clusty](http://clusty.com/search?query=kiwi) is a &#8220;meta&#8221; search engine, i.e. it collects its results from other search engines, and reorganizes them a bit. This limits the possibilities as they must rely on the first n hits returned by the other search engines, but let&#8217;s see what they do:

> New Zealand (82)
  
> Fruit (11)
  
> Game (8)
  
> Blog (9)
  
> Club (8)
  
> Syslog Daemon (5)
  
> Designs (7)
  
> Cool Kiwi (6)
  
> Holiday (4)
  
> Specializing (4) 

The indication of the number of matches is certainly useful. But why is &#8220;Kiwi&#8221; under &#8220;New Zealand&#8221;?

### WebClust

[WebClust](http://www.webclust.com/cgi-bin/webclust.pl?query=kiwi) is another &#8220;meta&#8221; search engine that tries to organize the output of other search engines better.

> Shop (19)
  
> Kiwi Fruit (19)
  
> Amp (16)
  
> Kiwi Bird (12)
  
> Design (10)
  
> Shipped,Price (10)
  
> Kiwi Alpha (7)
  
> Kiwi Music (5)
  
> Pineapple Kiwi (5)
  
> Version,Available (3)
  
> Body,Bath (3)
  
> Thousands (3)
  
> Other (88) 

Restricting to &#8220;Kiwi Bird&#8221; does get rid of some matches, but still includes &#8220;Kiwi Shoe Polish Reg. Size&#8221;&#8230;

### Mooter

[Mooter](http://www.mooter.com/) doesn&#8217;t return a list of results, but a graph that must be clicked on first:

> fruit
  
> men
  
> book
  
> kiwi
  
> find
  
> shop
  
> accessories 

Hmm&#8230;

### Conclusions

  1. Current automatic clustering methods seem to be unable to produce suggestions that make much sense, for the most part.
  2. None of the search engines seems to be able to understand what a document is talking about, but instead rely on the occurrence of specific terms.
  3. The best you can expect from current search engines is a suggestion to rephrase a query e.g. as &#8220;kiwi bird&#8221; &#8212; something most people with a bit of experience will do on their own.