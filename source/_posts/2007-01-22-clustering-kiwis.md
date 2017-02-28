---
title: Clustering Kiwis
tags:
  - Usability
---

Being able to distinguish different meanings of a term may turn out to be the next big step forward for web search engines. There are quite a few people working on this now; here is a quick survey in which I check how well the different efforts handle the term "Kiwi".

"Kiwi" is a problematic term, as it can be used for:

* a bird
* a fruit
* people from New Zealand
* a name for various products or businesses

Moreover, the different uses of the term "Kiwi" are often closely related. For example, the Wikipedia article on "Kiwi (people)" contains the word "bird" ("The name derives ultimately from the flightless bird native [...]"). But this document shouldn't appear (or score high) when we are looking for information about Kiwi birds.

### Google

[Google](http://www.google.com/search?q=kiwi) shows a suggestion to extend the query to "kiwi fruit" somewhere half way down in the list of results. The first hit is for some software called "Kiwi Syslog Daemon". There is also a "definition" link that points to [Answers.com](http://www.answers.com/kiwi) where you get this:

> **Or did you mean:** kiwifruit , kiwi (bird), Kiwi (Marine lingo), kiwi (people), Kiwi (Dragon Ball), Kiwi (shoe polish), Kiwi (horse), Kiwi (2002 Album by Dim Dim), Kiwi (Gaming Character) 

That's nice, but it's just definitions, which doesn't help us much with our web search (at least not directly).

### Yahoo!

[Yahoo!](http://search.yahoo.com/search?p=kiwi) suggests (at the top of the results page):

> **Also try:** killer kiwi, kiwi fruit, kiwi carpet cleaning, kiwi bird

No comment...

### Live Search

[Live Search](http://search.live.com/results.aspx?q=kiwi) suggests these "related searches":

> **Related searches:** Kiwi Fruit, Kiwi Bird, Kiwi Plants, Kiwi Casino, Killer Kiwi, Kiwi Bingo, Kiwi Photo Gallery 

Also--for reasons beyond my comprehension -- there are no less than three ads for buying "thong bikinis"...

### Ask

[Ask](http://www.ask.com/web?q=kiwi) lists matching Wikipedia articles at the top (in a dropdown list). This isn't terribly convenient, but in this case it does give a good idea of the different uses of the term. When you select an article the search is redone to match the selected article. Also, there are these suggestions:

> **Narrow Your Search:** Eat a Kiwi, Kiwi Shoe Polish, Kiwi Fruit Facts, Kiwi Recipes, Kiwi Origin, Kiwi Bird Live, Kiwi Fruit Come
> **Expand Your Search:** Kiwi Bird, Strawberries, New Zealand, Oranges, Pineapple, Grapes
> **Related Names:** Peaches, Rhea 

### Clusty

[Clusty](http://clusty.com/search?query=kiwi) is a "meta" search engine, i.e. it collects its results from other search engines, and reorganizes them a bit. This limits the possibilities as they must rely on the first n hits returned by the other search engines, but let's see what they do:

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

The indication of the number of matches is certainly useful. But why is "Kiwi" under "New Zealand"?

### WebClust

[WebClust](http://www.webclust.com/cgi-bin/webclust.pl?query=kiwi) is another "meta" search engine that tries to organize the output of other search engines better.

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

Restricting to "Kiwi Bird" does get rid of some matches, but still includes "Kiwi Shoe Polish Reg. Size"...

### Mooter

[Mooter](http://www.mooter.com/) doesn't return a list of results, but a graph that must be clicked on first:

> fruit
> men
> book
> kiwi
> find
> shop
> accessories 

Hmm...

### Conclusions

Current automatic clustering methods seem to be unable to produce suggestions that make much sense, for the most part.

None of the search engines seems to be able to understand what a document is talking about, but instead rely on the occurrence of specific terms.

The best you can expect from current search engines is a suggestion to rephrase a query e.g. as "kiwi bird"--something most people with a bit of experience will do on their own.
