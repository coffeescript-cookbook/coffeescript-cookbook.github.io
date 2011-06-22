---
layout: recipe
title: Finding Last (or Next) Month
chapter: Dates and Times
---
## Problem

You need to calculate a relative date range like "last month" or "next month".

## Solution

Add or subtract from the current month, secure in the knowledge that JavaScript's Date constructor will fix up the math.

{% highlight coffeescript %}
# these examples were written in GMT-6
# Note that these examples WILL work in January!
now = new Date
# => "Sun, 08 May 2011 05:50:52 GMT"

lastMonthStart = new Date 1900+now.getYear(), now.getMonth()-1, 1
# => "Fri, 01 Apr 2011 06:00:00 GMT"

lastMonthEnd = new Date 1900+now.getYear(), now.getMonth(), 0
# => "Sat, 30 Apr 2011 06:00:00 GMT"
{% endhighlight %}

## Discussion

JavaScript Date objects will cheerfully handle underflows and overflows in the month and day fields, and will adjust the date object accordingly. You can ask for the 42nd of March, for example, and will get the 11th of April.

JavaScript Date objects store the year as the number of years since 1900, the month as an integer from 0 to 11, and the date (day of month) as an integer from 1 to 31. In the solution above, last_month_start is obtained by asking for the first day of a month in the current year, but the month is -1 to 10. If month is -1 the Date object will actually return December of the previous year:

{% highlight coffeescript %}
lastNewYearsEve = new Date 1900+now.getYear(), -1, 31
# => "Fri, 31 Dec 2010 07:00:00 GMT"
{% endhighlight %}

The same is true for overflows:

{% highlight coffeescript %}
thirtyNinthOfFourteember = new Date 1900+now.getYear(), 13, 39
# => "Sat, 10 Mar 2012 07:00:00 GMT"
{% endhighlight %}
