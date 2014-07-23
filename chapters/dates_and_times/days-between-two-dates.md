---
layout: recipe
title: Get Days Between Two Dates
chapter: Dates and Times
---
## Problem

You need to find how much seconds minutes, hours, days, months or years has passed between two dates.

## Solution

Use JavaScript's Date function  getTime(). Which provides how much time in milliseconds has passed since 01/01/1970:

{% highlight coffeescript %}
DAY = 1000 * 60 * 60  * 24

d1 = new Date('02/01/2011')
d2 = new Date('02/06/2011')

days_passed = Math.round((d2.getTime() - d1.getTime()) / DAY)
{% endhighlight %}

## Discussion

Using milliseconds makes the life easier to avoid overflow mistakes with Dates. So we first calculate how much milliseconds has a day.
Then, given two distinct dates, just get the difference in milliseconds between two dates and then divide by how much milliseconds has a
day. It will get you the days between two distinct dates.

If you'd like to calculate the hours between two date objects, you can do that just by dividing the difference in milliseconds by the
conversion of milliseconds to hours. The same goes for minutes and seconds.

{% highlight coffeescript %}
HOUR = 1000 * 60 * 60

d1 = new Date('02/01/2011 02:20')
d2 = new Date('02/06/2011 05:20')

hour_passed = Math.round((d2.getTime() - d1.getTime()) / HOUR)
{% endhighlight %}
