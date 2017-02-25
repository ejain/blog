---
id: 92
title: Hosting Applets in Google Docs
date: 2010-01-22T15:44:46+00:00
author: Eric Jain
layout: post
guid: http://eric.jain.name/?p=92
permalink: /2010/01/22/hosting-applets-in-google-docs/
categories:
  - Programming
---
Google Docs recently added support for [uploading arbitrary files](http://docs.google.com/support/bin/answer.py?answer=50092) (up to 250MB large). Can this be used to host Java applets?

<!--more-->

I uploaded a jar file containing a simple test applet to Google Docs and referenced it like so:

<div class="wp_syntax">
  <table>
    <tr>
      <td class="code">
        <pre class="html4strict" style="font-family:monospace;"><span style="color: #009900;">&lt;<span style="color: #000000; font-weight: bold;">applet</span></span>
<span style="color: #009900;">  <span style="color: #000066;">width</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">"440"</span> <span style="color: #000066;">height</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">"60"</span></span>
<span style="color: #009900;">  <span style="color: #000066;">code</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">"JavaVersionDisplayApplet.class"</span></span>
<span style="color: #009900;">  <span style="color: #000066;">codebase</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">"http://docs.google.com/"</span></span>
<span style="color: #009900;">  <span style="color: #000066;">archive</span><span style="color: #66cc66;">=</span><span style="color: #ff0000;">"uc?id=0B9ANnqvnRtroOTM5YWE3YmMtMGZkMy00ZGE5LWE2NWUtOGZhNzk5MzA2NzBk"</span>&gt;</span>
<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span><span style="color: #000000; font-weight: bold;">applet</span>&gt;</span></pre>
      </td>
    </tr>
  </table>
</div>

The result:

 <applet width="440" height="60" code="JavaVersionDisplayApplet.class" codebase="http://docs.google.com/" archive="uc?id=0B9ANnqvnRtroOTM5YWE3YmMtMGZkMy00ZGE5LWE2NWUtOGZhNzk5MzA2NzBk"></applet>