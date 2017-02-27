---
title: Some Java Benchmarks
tags:
  - Tech
---

During the last two weeks I ran some tests to answer a few questions that had been accumulating:

1. Should I disable [hyper-threading](http://en.wikipedia.org/wiki/Hyper-threading) (ht)?
2. How much does doubling the available memory improve performance?
3. Mirror, mirror on the wall, who has the fastest JVM of them all?

### Method

The machine in question has a single 2.8GHz Intel Xeon processor with 2GB RAM and is running Linux (2.6.9-42.0.3.ELsmp).

The application is a web application with a large (several gigabytes) [Lucene](http://lucene.apache.org/java/) index and [Berkeley DB](http://www.oracle.com/technology/products/berkeley-db/je/) for storing data. The main interest was the performance of the data import procedure, though I also had a brief look at the search and retrieval performance.

The following (Java 6) VMs were tested:
* [BEA JRockit](http://dev2dev.bea.com/jrockit/) build R27.3.1-1-85830-1.6.0_01-20070716-1248-linux-ia32
* [Sun Java HotSpot Server VM](http://java.sun.com/) build 1.6.0_02-b05
* [IBM J9 VM](http://www.ibm.com/developerworks/java/jdk/) build 2.4, J2RE 1.6.0 IBM J9 2.4 Linux x86-32 jvmxi3260-20070817_13537</small>

Note that even though the machine has a 64-bit processor, I used the 32-bit versions of the JVMs as these are faster than (or the same speed as) the corresponding 64-bit versions (depending on whether the JVM is smart enough to always use 32-bit pointers whenever the heap size is small enough).

Some of the tests were repeated with some of the JVM parameters [described by Henrik Stahl](http://dev2dev.bea.com/blog/hstahl/archive/2007/08/a_second_look_a.html). But I never managed to beat the default configuration! So I ended up using only `-Xms` and `-Xmx` for all tests.

### Results

Median response time (s) for running 1'000 queries sequentially:

![](search_1.png)

Median response time (s) for running 1'000 queries from 10 parallel clients each:

![](search_10.png)

Total time (h) for loading and indexing (in a single thread) all data (UniProt release 12.2):

![](load.png)

### Discussion

Hyper-threading can slow down single-threaded applications a bit (perhaps depending on whether the bottleneck is garbage collection, which can be done in a separate thread, or IO). But as soon as there are lots of threads there appears to be a clear benefit in keeping hyper-threading enabled.

More memory is better (surprise)... Doubling the memory in the system from 2 to 4gb (and increasing the heap size from 1 to 2gb) improved performance by about a third for some configurations. Doubling again however may not be worth the expense (diminishing returns).

The latest version of Sun's JVM appears to be a bit ahead of the others... for now!
