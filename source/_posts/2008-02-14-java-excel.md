---
id: 62
title: Using Java to Read Excel Files
date: 2008-02-14T19:06:35+00:00
author: Eric Jain
layout: post
guid: http://eric.jain.name/2008/02/14/java-excel/
permalink: /2008/02/14/java-excel/
categories:
  - Programming
---
I recently needed to add support for extracting data from Excel files (which are still ubiquitous in labs) to a Java application.

<!--more-->

First I tried using [POI-HSSF](http://poi.apache.org/hssf/) (a well-known Apache project). The code is reasonably straightforward &#8212; though I had to get it from tutorials on the Web as I couldn&#8217;t find much in terms of documentation on their site, and the API isn&#8217;t exactly self-evident:

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="java5" style="font-family:monospace;">POIFSFileSystem fs = <span style="color: #000000; font-weight: bold;">new</span> POIFSFileSystem<span style="color: #009900;">&#40;</span>in<span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
HSSFWorkbook wb = <span style="color: #000000; font-weight: bold;">new</span> HSSFWorkbook<span style="color: #009900;">&#40;</span>fs<span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
HSSFSheet sheet = wb.<span style="color: #006633;">getSheetAt</span><span style="color: #009900;">&#40;</span><span style="color: #cc66cc;"></span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
<span style="color: #003399; font-weight: bold;">Iterator</span> rows = sheet.<span style="color: #006633;">rowIterator</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
<span style="color: #000000;  font-weight: bold;">while</span> <span style="color: #009900;">&#40;</span>rows.<span style="color: #006633;">hasNext</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
    HSSFRow row = <span style="color: #009900;">&#40;</span>HSSFRow<span style="color: #009900;">&#41;</span> rows.<span style="color: #006633;">next</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    <span style="color: #003399; font-weight: bold;">Iterator</span> cells = row.<span style="color: #006633;">cellIterator</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    <span style="color: #003399; font-weight: bold;">List</span><span style="color: #339933;">&lt;</span>string<span style="color: #339933;">&gt;</span> fields = <span style="color: #000000; font-weight: bold;">new</span> <span style="color: #003399; font-weight: bold;">ArrayList</span><span style="color: #339933;">&lt;</span>string<span style="color: #339933;">&gt;</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    <span style="color: #000000;  font-weight: bold;">while</span> <span style="color: #009900;">&#40;</span>cells.<span style="color: #006633;">hasNext</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
        HSSFCell cell = <span style="color: #009900;">&#40;</span>HSSFCell<span style="color: #009900;">&#41;</span> cells.<span style="color: #006633;">next</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
        <span style="color: #000000;  font-weight: bold;">switch</span> <span style="color: #009900;">&#40;</span>cell.<span style="color: #006633;">getCellType</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
            <span style="color: #000000;  font-weight: bold;">case</span> HSSFCell.<span style="color: #006633;">CELL_TYPE_STRING</span>:
                fields.<span style="color: #006633;">add</span><span style="color: #009900;">&#40;</span>cell.<span style="color: #006633;">getStringCellValue</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
                <span style="color: #000000; font-weight: bold;">break</span><span style="color: #339933;">;</span>
            <span style="color: #000000;  font-weight: bold;">case</span> HSSFCell.<span style="color: #006633;">CELL_TYPE_NUMERIC</span>:
                fields.<span style="color: #006633;">add</span><span style="color: #009900;">&#40;</span><span style="color: #003399; font-weight: bold;">Double</span>.<span style="color: #006633;">toString</span><span style="color: #009900;">&#40;</span>cell.<span style="color: #006633;">getNumericCellValue</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
                <span style="color: #000000; font-weight: bold;">break</span><span style="color: #339933;">;</span>
            <span style="color: #000000;  font-weight: bold;">default</span>:
                log.<span style="color: #006633;">warn</span><span style="color: #009900;">&#40;</span><span style="color: #0000ff;">"Unsupported cell type: "</span> + cell.<span style="color: #006633;">getCellType</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
                <span style="color: #000000; font-weight: bold;">break</span><span style="color: #339933;">;</span>
        <span style="color: #009900;">&#125;</span>
    <span style="color: #009900;">&#125;</span>
    process<span style="color: #009900;">&#40;</span>fields<span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
<span style="color: #009900;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>

This works fine &#8212; except that there doesn&#8217;t seem to be a way to keep the precision of numbers, i.e. if you don&#8217;t want to convert &#8220;4&#8221; to &#8220;4.0&#8221;! Fortunately POI isn&#8217;t the only game in town. I ended up using [JExcel API](http://jexcelapi.sourceforge.net/) which has a much simpler API (and behaves the way I want it to):

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="java5" style="font-family:monospace;">Workbook workbook = Workbook.<span style="color: #006633;">getWorkbook</span><span style="color: #009900;">&#40;</span>in<span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
Sheet sheet = workbook.<span style="color: #006633;">getSheet</span><span style="color: #009900;">&#40;</span><span style="color: #cc66cc;"></span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
<span style="color: #000000;  font-weight: bold;">for</span> <span style="color: #009900;">&#40;</span><span style="color: #006600; font-weight: bold;">int</span> i = <span style="color: #cc66cc;"></span><span style="color: #339933;">;</span> i <span style="color: #339933;">&lt;</span> sheet.<span style="color: #006633;">getRows</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> ++i<span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
    <span style="color: #003399; font-weight: bold;">List</span><span style="color: #339933;">&lt;</span>string<span style="color: #339933;">&gt;</span> fields = <span style="color: #000000; font-weight: bold;">new</span> <span style="color: #003399; font-weight: bold;">ArrayList</span><span style="color: #339933;">&lt;</span>string<span style="color: #339933;">&gt;</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    <span style="color: #000000;  font-weight: bold;">for</span> <span style="color: #009900;">&#40;</span><span style="color: #006600; font-weight: bold;">int</span> j = <span style="color: #cc66cc;"></span><span style="color: #339933;">;</span> j <span style="color: #339933;">&lt;</span> sheet.<span style="color: #006633;">getColumns</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span> ++j<span style="color: #009900;">&#41;</span> <span style="color: #009900;">&#123;</span>
        fields.<span style="color: #006633;">add</span><span style="color: #009900;">&#40;</span>sheet.<span style="color: #006633;">getCell</span><span style="color: #009900;">&#40;</span>j, i<span style="color: #009900;">&#41;</span>.<span style="color: #006633;">getContents</span><span style="color: #009900;">&#40;</span><span style="color: #009900;">&#41;</span><span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
    <span style="color: #009900;">&#125;</span>
    process<span style="color: #009900;">&#40;</span>fields<span style="color: #009900;">&#41;</span><span style="color: #339933;">;</span>
<span style="color: #009900;">&#125;</span></pre>
      </td>
    </tr>
  </table>
</div>