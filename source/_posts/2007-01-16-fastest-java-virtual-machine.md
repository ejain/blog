---
title: Fastest Java Virtual Machine?
tags:
  - Programming
---

The best choice of virtual machine is of course dependent both on the application and on the hardware the application is running on; here are the conclusions of a performance comparison with the latest batch of Java virtual machines for a web application that makes heavy use of [BerkeleyDB](http://www.oracle.com/database/berkeley-db.html) and [Lucene](http://lucene.apache.org/java/) on an off-the-shelf Intel machine with 64-bit extensions.

The test consisted of running a set of a hundred requests several times. The first few runs were ignored (though it could also have been interesting to compare how fast a virtual machine warms up). I allocated 0.5GB of heap but didn't bother fine tuning further as [jconsole](http://java.sun.com/javase/6/docs/technotes/guides/management/jconsole.html) didn't show any pathological garbage collector behavior in any case. JRockit was run with both `-Xgcprio:throughput` and `-Xgcprio:pausetime`. Former produces slightly better times but can have long pauses.

The following virtual machines were tested:

* [Sun Java HotSpot(TM) Server VM](http://java.sun.com/javase/6/) (build 1.6.0-b105, mixed mode)
* [BEA JRockit(R)](http://dev2dev.bea.com/jrockit/) (build R27.1.0-109-73164-1.5.0_08-20061129-1418-linux-ia32, compiled mode)
* [IBM J9 VM](https://www14.software.ibm.com/iwm/web/cc/earlyprograms/ibm/java6/) (build 2.4, J2RE 1.6.0 IBM J9 2.4 Linux x86-32 jvmxi3260-20061218_10446 (JIT enabled)

The first observation is that all of the current virtual machines are significantly (up to 50%) faster than any of the previous generation.

The second observation is that I could no longer find any significant differences between the different virtual machines.

...except when using 64-bit versions of the virtual machines. Having to manage 64-bit pointers seems to introduce some overhead (up to 20%), so unless you need to allocate >4GB of heap memory or memory-map large files (or run on a pure 64-bit machine, not tested), sticking with a 32-bit virtual machine seems like a good idea. JRockit uses [pointer compression](http://e-docs.bea.com/jrockit/jrdocs/refman/optionXX.html#wp1021022) to avoid this problem (as long as you don't need to allocate >4GB of memory).

All virtual machines were trivial to setup, I only had some trouble getting the web application to deploy (in Jetty) with the IBM VM (still in beta), fixed by copying Xerces to `lib/ext/`:

```
WEB-INF/lib/standard.jar!/META-INF/fmt-1_0.tld line:1 col:5 :
  org.xml.sax.SAXParseException: White space is required between the processing instruction target and data.
```
