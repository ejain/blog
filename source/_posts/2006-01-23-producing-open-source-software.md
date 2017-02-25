---
id: 5
title: Producing Open Source Software
date: 2006-01-23T04:10:54+00:00
author: Eric Jain
layout: post
guid: http://eric.jain.name/2006/02/05/producing-open-source-software/
permalink: /2006/01/23/producing-open-source-software/
categories:
  - Programming
  - Review
---
Here are some notes on the book [Producing Open Source Software](http://amazon.com/gp/product/0596007590). The book does an excellent job of explaining how open source projects work and how they deal with typical problems.

<!--more-->

### How to motivate people to contribute to your project?

> People should feel that their connection to a project, and influence over it, is directly proportional to their contributions. 

> As slow and cumbersome as public discussions can be, they&#8217;re almost always preferable in the long run. Making important decisions in private is like spraying contributor repellent on your project. No serious volunteer would stick around for long in an environment where a secret council makes all the big decisions. 

Also, first impressions count. The project web site should make it clear what the project is about and what the status of the project is. Downloading a project snapshot and getting started should not require a lot of fiddling around.

### How to get people to work together?

> One of the best ways to foster a productive development community is to get people looking at each others&#8217; code. 

### What infrastructure is required?

The minimum infrastructure almost any project will need is:

  * a web site
  * archived and searchable mailing lists
  * a version control system containing everything except generated files
  * a bug tracking system
  * some kind of real-time chat

If you also have a Wiki take care of duplicate content and inconsistent style:

> have editorial standards, and demonstrate them not only by posting them, but by editing pages to adhere to them. 

This is important because:

> wikis will amplify any failings in their original material. 

Proper discussions should take place on mailing lists, not in the bug tracker.

### Who makes the decisions?

Most projects either have a &#8220;benevolent dictator&#8221; or a some kind of decentralized decision making process. &#8220;Benevolent&#8221;, because:

> quality developers won&#8217;t stay around unless they have some influence on the project&#8217;s direction 

> Forks, are the reason there are no true dictators in free software projects. 

The &#8220;benevolent dictator&#8221; is often the founder of the project:

> if it&#8217;s simply obvious to everyone who should be the [benevolent dictator], then that&#8217;s the way to go. But if no candidate for [benevolent dictator] is immediately obvious, then the project should probably use a decentralized decision-making process 

> The [benevolent dictator] position is neither acquired nor held by virtue of intimidating coding skills. What is important is experience and overall design sense &mdash; not necessarily the ability to produce good design on demand, but the ability to recognize good design, whatever its source. 

> As projects get older, they tend to move away from the benevolent dictatorship model and toward more openly democratic systems. 

How does this work?

> Most conversation in a project is on technical topics [&#8230;] Consensus-based governance works well because it blends seamlessly with the technical discussion itself. By the end of a discussion, there is often general agreement on what course to take. 

Consensus has its limits, though:

> Consensus merely means an agreement that everyone is willing to live with. 

> When Consensus Cannot Be Reached, Vote 

But voting should be rare:

> Don&#8217;t think of voting as a great way to resolve debates. It isn&#8217;t. It ends discussion, and thereby ends creative thinking about the problem. As long as discussion continues, there is the possibility that someone will come up with a new solution everyone likes. This happens surprisingly often 

Better decisions can be made by using &#8220;approval voting&#8221;, where each participant can vote for several proposals.

Who gets to vote? Use an existing distinction, e.g. everyone with commit rights.

### How to participate as a company?

First of all, &#8220;play by the same rules as everyone else&#8221;.

> &#8220;credibility is a valuable currency to have in technical discussions: it&#8217;s immunization against having one&#8217;s motives questioned later. In the heat of argument, people will sometimes look for non-technical ways to win the battle.&#8221; 

### What about communication skills?

> The ability to write clearly is perhaps the most important skill one can have in an open source environment. 

Some tips:

> Write in complete sentences, capitalizing the first word of each sentence, and use paragraph breaks where needed. 

> In IRC or similarly ephemeral forums, it&#8217;s generally okay to leave out capitalization, use compressed forms of common expressions, etc. 

Always take care to choose a good subject line in e-mail messages.

Observation on the communication style of the typical open source project participant:

> No greeting, no sign-off other than his name, and the message itself is just a series of questions phrased as compactly as possible. [&#8230;] A degree of terseness that would be unacceptable in normal social interactions is simply the default for free software hackers. 

Nevertheless you should consider that

> by being sensitive to the tone of your own writing, you can have a surprising amount of influence over how others feel, to the ultimate benefit of the project. 

### How to keep discussions on topic?

> It is unfortunately very easy, and all too typical, for constructive discussions to lapse into destructive flame wars. 

Bad behavior should be &#8220;consistently called out&#8221; but:

> never make the meta-discussion the main topic. It should always be an aside, a brief preface to the main portion of your response. Point out in passing that &#8220;we don&#8217;t do things that way around here,&#8221; but then move on to the real content, so that you&#8217;re giving people something on-topic to respond to. 

Regarding &#8220;rudeness&#8221;:

> One of the defining characteristics of open source culture is its distinctive notions of what does and does not constitute rudeness. While the conventions described below are not unique to free software development, nor even to software in general &mdash; they would be familiar to anyone working in mathematics, the hard sciences, or engineering disciplines. 

> Technical criticism, even when direct and unpadded, is not rude. Indeed, it can be a form of flattery: the critic is saying, by implication, that the target is worth taking seriously, and is worth spending some time on.&#8221; Also: Blunt, unadorned questions, are not rude either. Questions that in other contexts might seem cold, rhetorical, or even mocking, are often intended seriously, and have no hidden agenda other than eliciting information as quickly as possible. 

How to deal with truly rude people:

> comment on the rudeness the first time, and from then on, either ignore them or treat them the same as anyone else. If they continue being rude, they will usually make themselves so unpopular as to have no influence on others in the project, so they are a self-containing problem. 

Discussions are unproductive when they are not concrete enough:

> consensus is hardest to achieve in technical questions that are simple to understand and easy to have an opinion about [&#8230;] People can participate in those arguments forever, because there are no qualifications necessary for doing so and no clear ways to decide (even afterward) if a decision was right or wrong 

There are also a few &#8220;holy war&#8221; topics on which it is unlikely that agreement can ever be reached. Simply saying &#8220;Can we please just drop it?&#8221; will not help. Consider giving up unless you really care, but remember that &#8220;giving up is effective only when done gracefully&#8221; (i.e. don&#8217;t say things like &#8220;I never though this was a good idea anyway&#8221;). If you feel that giving in would delay the project too much, justify your choice as &#8220;practical&#8221;, rather than as the &#8220;academic best&#8221;.

Once in a while there are &#8220;difficult people&#8221;, i.e. people &#8220;who are not overtly rude, but who manipulate or abuse the project&#8217;s processes in a way that ends up costing other people time and energy, yet do not bring any benefit to the project.&#8221; Before you attempt to kick anyone out of a project, be sure to gather evidence and get support from other participants, or your actions will backfire.

### How to handle growth?

> The more a project grows, the more important this sort of consistency becomes. Consistency means that everywhere people look, they see the same patterns being followed, so they know to follow those patterns themselves. This, in turn, reduces the number of questions they need to ask. The burden of having a million readers is no greater than that of having one; scalability problems start to arise only when a certain percentage of those readers ask questions. As a project grows, therefore, it must reduce that percentage by increasing the density and accessibility of information, so that any given person is more likely to find what she needs without having to ask. 

### How to deal with versioning?

> Those three labels &mdash; Alpha, Beta, and RC &mdash; are pretty widely known now, and I don&#8217;t recommend using any of the others, even though the others might at first glance seem like better choices [&#8230;] But people who install software from releases are already familiar with the big three, and there&#8217;s no reason to do things gratuitously differently from the way everyone else does them. 

Starting from the 1.0 release it makes sense to distinguish:

  * major releases: new features, may be backwards-incompatible
  * minor releases: some new features
  * micro releases: bug fixes, small improvements

If you don&#8217;t want to halt all development while a release is being prepared you will need to [branch](http://cvsbook.red-bean.com/cvsbook.html#Branches).

### How to deal with politics?

> The distaste for politics is especially strong in engineers because engineers are bought into the idea that some solutions are objectively superior to others. Thus, when someone acts in a way that seems motivated by outside considerations &mdash; say, the maintenance of his own position of influence, the lessening of someone else&#8217;s influence, outright horse-trading, or avoiding hurting someone&#8217;s feelings &mdash; other participants in the project may get annoyed. 

But &#8220;no one is above politics&#8221; because &#8220;politics is simply what happens when people disagree, and successful projects are those that evolve political mechanisms for managing disagreement constructively.&#8221;

If you delegate a task, always follow up!

> If someone does not improve in response to criticism, the solution is not more or stronger criticism. The solution is for the group to remove that person from the position of incompetence, in a way that minimizes hurt feelings as much as possible 

> Watch out for participants who try to stake out exclusive ownership of certain areas of the project, and who seem to want to do all the work in those areas, to the extent of aggressively taking over work that others start. Such behavior may even seem healthy at first. After all, on the surface it looks like the person is taking on more responsibility, and showing increased activity within a given area. But in the long run, it is destructive. 

Finally, remember to credit people, but always be specific.