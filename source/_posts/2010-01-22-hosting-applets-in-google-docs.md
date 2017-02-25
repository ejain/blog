---
title: Hosting Applets in Google Docs
tags:
  - Tech
---

Google Docs recently added support for [uploading arbitrary files](http://docs.google.com/support/bin/answer.py?answer=50092) (up to 250MB large). Can this be used to host Java applets?

I uploaded a jar file containing a simple test applet to Google Docs and referenced it like so:

```
<applet width="440" height="60" code="JavaVersionDisplayApplet.class" codebase="http://docs.google.com/" archive="uc?id=0B9ANnqvnRtroOTM5YWE3YmMtMGZkMy00ZGE5LWE2NWUtOGZhNzk5MzA2NzBk"></applet>
```

The result:

<applet width="440" height="60" code="JavaVersionDisplayApplet.class" codebase="http://docs.google.com/" archive="uc?id=0B9ANnqvnRtroOTM5YWE3YmMtMGZkMy00ZGE5LWE2NWUtOGZhNzk5MzA2NzBk"></applet>