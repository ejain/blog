---
title: Object Store Benchmark
tags:
  - Programming
---

[Berkeley DB JE](http://sleepycat.com/products/bdbje.html) and [ehcache](http://ehcache.sourceforge.net/) are two simple libraries for persistent storage of serialized Java objects. How good are they at handling large data sets?

Here are some benchmark results:

|                           | store 1m objects | read all objects best/worst | disk space |     memory |
| ------------------------- | ---------------- | --------------------------- | ----------:| ----------:|
| ehcache 1.2beta2          | 6:24 min         | 12:33/13:45 min             |    2.36 GB |  < 1024 MB |
| bdb-je 2.0.90             | 3:32 min         | 5:46/7:46 min               |    2.02 GB |   < 128 MB |
| ...with custom serializer | 2:17 min         | 5:07/7:00 min               |    2.01 GB |   < 128 MB |
  
Berkeley DB seems to scale better, especially in terms of memory use. It is also more flexible, but requires a bit more code to be written, and is distributed under a more restrictive license (GPL). Tests were run on a Linux machine with BEA JRockit 1.5.0_03.
