---
title: No Fluff Just Stuff
tags:
  - Programming
---

Spent this weekend at the [Spring 2008 Pacific Northwest Software Symposium](https://nofluffjuststuff.com/conference/seattle/2008/04/home). Here are my notes (trimmed down to whatever I felt was new & noteworthy to me) and some general comments about the event.

### Sessions

These are the sessions I attended:

  * TestNG with Code Coverage (Howard Lewis Ship)
  * Groovy: Metaprogramming (Scott Davis)
  * Professional Java UI Development with Eclipse RCP (Brian Sam-Bodden)
  * The Busy Java Developers Guide to Concurrency (Ted Neward)
  * Code Metrics & Analysis for Agile Projects (Neal Ford)
  * Building Web Apps with Spring OSGi (Craig Walls)
  * The Busy Developer's Guide to Debugging (Ted Neward)
  * The Busy Developer's Guide to Monitoring (Ted Neward)
  * The Busy Developer's Guide to Scala (Ted Neward)
  * The Busy Developer's Guide to Hacking on the JVM (Ted Neward)

### Notes

Test coverage should at least be 85% as there is often a significant number of bugs that are flushed out when you cross that threshold. But if you don't aim for 100% coverage, there is the risk that you start copping out on testing the most difficult code!

When using the [EclEmma](http://www.eclemma.org/) Eclipse plug-in for gathering code coverage statistics, set up separate build output folders -- otherwise unit tests are included in the statistics (even if the unit test source folder is not selected).

[Cobertura](http://cobertura.sourceforge.net/) generates somewhat better code coverage statistics than [EMMA](http://emma.sourceforge.net/), but lacks an IDE plug-in.

[Maven](http://maven.apache.org/) is a great idea, but using it for your project can be "like living with a dangerous psychopath" -- it behaves when showing it to other people, but you never know when it will turn on you....

Ant has a [presetdef](http://ant.apache.org/manual/CoreTasks/presetdef.html) task that allows you to create an alias for a task, and set default attribute values.

[TestNG](http://testng.org/doc/) can be used both for unit and for functional tests. Test "groups" can distinguish the two (quirk: can't directly select all tests that are not in a group). TestNG creates only one instance of each test class. TestNG can run tests in parallel (either at the class or at the method level). There is an @DataProvider mechanism that can return either an array of test data or an iterator. TestNG can run JUnit tests! Can also run Selenium RC from TestNG -- check the Tapestry test code.

New [Groovy](http://groovy.codehaus.org/) language features don't require new Java versions. This may be attractive for people who are stuck with old versions of Java. Groovy even allows addition and modification of all methods at runtime via its [ExpandoMetaClass](http://groovy.codehaus.org/ExpandoMetaClass), e.g. `String.metaClass.foo = { -> delegate.toUppercase() }`

A JVM may map threads n:m at the OS level.

Schedulers may do "priority inversion" when a low priority thread holds a lock required by a high priority thread.

Build-specific deltas are more interesting than absolute numbers when looking at code metrics.

The "teddy bear" debugging technique: Explain the problem to a teddy bear! Often you'll realize what the problem is before you need to go bother a colleague...

Should declare unchecked exceptions.

`-XX:OnOutOfMemoryError=cmd` sets a command that is run when we run out of memory.

`-XX:TraceClassLoading` shows where classes are loaded from.

The `extconflict` tool (shipped with Sun's Java) detects duplicate classes in lib/ext.

Heisenberg principal: Monitoring a system always influences it (e.g. garbage collection activity due to jconsole connection).

jconsole has a scripting plugin. Also consider using Groovy for scripting tasks.

[Scala](http://www.scala-lang.org/) is an (impure) functional language. Functional languages are great for concurrent programming (immutable objects, use of "actors" etc). But Scala won't be ready for production use this year (or even next year). Get the [book](http://www.artima.com/shop/forsale)!

Reflection can be used to read (and set) private fields, even in core classes such as java.lang.String! Going one step further: We can provide our own String implementation (use `-Xbootclasspath=...`).

### Comments

Most of the talks were at a level of detail that if you happened to have read a book on the topic you weren't likely to learn a lot. Nevertheless you were bound to pick up some useful stuff as (most of) the speakers were clearly not only quite experienced but also great speakers. Ideally you'd have the number one expert on each topic give the talk, but I realize that isn't practical... Despite the "No Fluff" branding there was a lot of talk about how we all need to be "agile" etc. Nevertheless I think everyone managed to keep their feet on the ground, and in any case their were sufficient technical talks. Not to mention the food and free stuff :-)
