---
title: Information Dashboard Design
tags:
  - Review
  - Usability
---

Brief review of [Information Dashboard Design : The Effective Visual Communication of Data](http://www.amazon.com/gp/product/0596100167/) by Stephen Few.

What is a "dashboard"?

> A dashboard is a visual display of the most important information needed to achieve one or more objectives; consolidated and arranged on a single screen so the information can be monitored at a glance.

The author identifies a wide range of uses for dashboards ranging from sales to server monitoring. Both Confluence and Jira have simple dashboards. Dashboards could also be useful for keeping track of web server or annotation statistics.

There is a lot of advice on design issues beyond dashboards:

> Customers are expert in knowing what they need to accomplish, but not in knowing how software ought to be designed to support their needs. Allowing customers to design software through feature requests is the worst form of disaster by committee.

Three kinds of dashboards are distinguished:

  * strategic (read only summaries)
  * analytical (drill down summaries) 
  * operation (real-time alerts)

One of the main tasks all dashboards must support are comparisons across time or related categories.

There are quite a few dashboard products in the market. The author doesn't seem to be enthusiastic about any of them and uses plenty of screenshots to illustrate his points.

> Another common problem on the dashboards that I find on vendor web sites is the abundance of useless decoration. They either hope that we will be drawn in by the artistry or assume that the decorative flourishes are necessary to entertain us. I assure you, however, that even people who enjoy the decoration upon first sight will grow weary of it in a few days. [...] Blank space is better than meaningless decoration.

Other pitfalls include:

  * data doesn't fit on a single screen
  * not enough context information is given to help determine if data is problematic or not
  * excessive detail which slows down comprehension (decimal digits etc)
  * important data is not highlighted

There is a chapter on the basics of visual perception because:

> You don't need to be a graphic artist to design an attractive dashboard, but you do need to understand a few basic principles about visual perception.

For example, one should use soft colors unless one wants to focus attention on something. Colors should variate in intensity rather than hue to ensure that people who have problems with color vision can make the distinctions, too. Characteristics such as size or shape are suitable for representing either qualitative or quantitative data to different degrees.

To clean up a dashboard the author recommends going through the following steps:

  1. Reduce the amount of "non-data" pixels. This includes 3D effects, unnecessary grid lines in graphs, borders, background decorations and color gradients.
  2. De-emphasize remaining "non-data" pixels. Reduce thickness, tone down color etc.

Another issue are navigation items:

> place [navigation items] in an out-of-the-way location such as the bottom-right corner of the screen and mute them visually, so they won't compete with the data for attention

Instructions should be made available through pop-ups rather than be displayed directly. This is what we do in the niceprot view. Also, general help is not accessed during normal use and should therefore be reduced to a single help link.

The author is critical of many frequently used chart types such as gauges (waste of space), pie charts (difficult to make quantitative comparisons) and 3D graphs (for non-3D data).

Regarding bar and line graphs:

  * Don't use line graphs to display data along a nominal (e.g. category) or ordinal (e.g. rank) scale, only for intervals (e.g. time), unless grouped (e.g. by month).
  * Use stacked bar graphs only when the emphasis is on the sum, not to visualize the differences within.

Icons can also be useful, but all you usually need are:

  * alert
  * up/down
  * on/off

Meaningful comparisons should be encouraged and meaningless comparisons discouraged through spatial separation and colors.

The book ends with several case studies, showing both good and bad solutions.
