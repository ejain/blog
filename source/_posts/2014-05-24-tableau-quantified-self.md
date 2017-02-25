---
title: Tableau & Quantified Self
tags:
  - Quantified Self
---

Tableau has a [contest](http://www.tableausoftware.com/public/contest/QS) going on for visualizing Quantified Self data. I happen to have a fair amount of such of data from all kinds of sources on [zenobase.com](https://zenobase.com/), so I decided to give it a shot.

I was curious about Tableau's geo features, and how well Tableau would handle slightly larger data sets. So I chose some outdoor/fitness activity data (which includes coordinates), and some hour-resolution energy expenditure data (~10K records).

Getting the data into Tableau was straightforward, as Zenobase exports data in <acronym>CSV</acronym> format. Tableau didn't detect any data types (timestamps, coordinates, or even numbers), but that was easy to fix after the import had completed. Working with the larger data set was not a problem, either, even if the experience wasn't exactly snappy.

You can find the result embedded below. The "dashboard" is interactive, so you can select one or more days of the week (and/or hours of the day), and the map will update to show activities that started at the corresponding time. Or you can select an activity type, or a region on the map.* Note the different patterns on week days and week ends.

<p><script type='text/javascript' src='http://public.tableausoftware.com/javascripts/api/viz_v1.js'></script></p>
<div class='tableauPlaceholder' style='width: 654px; height: 879px;'><noscript><a href='#'><img alt='Dashboard ' src='http:&#47;&#47;public.tableausoftware.com&#47;static&#47;images&#47;Ac&#47;ActivitiesCaloriesBurned&#47;Dashboard&#47;1_rss.png' style='border: none' /></a></noscript><object class='tableauViz' width='654' height='879' style='display:none;'><param name='host_url' value='http%3A%2F%2Fpublic.tableausoftware.com%2F' /><param name='site_root' value='' /><param name='name' value='ActivitiesCaloriesBurned&#47;Dashboard' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='static_image' value='http:&#47;&#47;public.tableausoftware.com&#47;static&#47;images&#47;Ac&#47;ActivitiesCaloriesBurned&#47;Dashboard&#47;1.png' /><param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' /><param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' /><param name='display_count' value='yes' /><param name='filter' value='amp;:showVizHome=no' /></object></div>
<div style='width:654px;height:22px;padding:0px 10px 0px 0px;color:black;font:normal 8pt verdana,helvetica,arial,sans-serif;'></div>

\* If the submission deadline wasn't this Sunday evening, and I wasn't on my way out to "collect more data", perhaps I could try to show the energy expenditure on the map, and let selections on the map update the energy expenditure data below as well...
