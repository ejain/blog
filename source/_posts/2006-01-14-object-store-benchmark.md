---
id: 10
title: Object Store Benchmark
date: 2006-01-14T04:51:22+00:00
author: Eric Jain
layout: post
guid: http://eric.jain.name/2006/01/14/object-store-benchmark/
permalink: /2006/01/14/object-store-benchmark/
categories:
  - Programming
---
[Berkeley DB JE](http://sleepycat.com/products/bdbje.html) and [ehcache](http://ehcache.sourceforge.net/) are two simple libraries for persistent storage of serialized Java objects. How good are they at handling large data sets?

<!--more-->

Here are some benchmark results:

<table>
  <tr>
    <th>
    </th>
    
    <th>
      store 1m objects
    </th>
    
    <th>
      read all objects best/worst
    </th>
    
    <th>
      disk space
    </th>
    
    <th>
      memory
    </th>
  </tr>
  
  <tr>
    <td>
      ehcache 1.2beta2
    </td>
    
    <td>
      6:24 min
    </td>
    
    <td>
      12:33/13:45 min
    </td>
    
    <td>
      2.36 GB
    </td>
    
    <td>
      < 1024 MB
    </td>
  </tr>
  
  <tr>
    <td>
      bdb-je 2.0.90
    </td>
    
    <td>
      3:32 min
    </td>
    
    <td>
      5:46/7:46 min
    </td>
    
    <td>
      2.02 GB
    </td>
    
    <td>
      < 128 MB
    </td>
  </tr>
  
  <tr>
    <td>
      &#8230;with custom serializer
    </td>
    
    <td>
      2:17 min
    </td>
    
    <td>
      5:07/7:00 min
    </td>
    
    <td>
      2.01 GB
    </td>
    
    <td>
      < 128 MB
    </td>
  </tr></table 
  
  <p>
    Berkeley DB seems to scale better, especially in terms of memory use. It is also more flexible, but requires a bit more code to be written, and is distributed under a more restrictive license (GPL). Tests were run on a Linux machine with BEA JRockit 1.5.0_03.
  </p>