---
layout: recipe
title: Finding the Last Day of the Month
chapter: Dates and Times
---
## Problem

You need to find the last day of the month, but don't want to keep a lookup table of the number of days in each month of the year.

## Solution

Use JavaScript's Date underflow to find the -1th day of the following month:

{% highlight coffeescript %}
now = new Date
lastDayOfTheMonth = new Date(1900+now.getYear(), now.getMonth()+1, 0)
{% endhighlight %}

## Discussion

JavaScript's Date constructor cheerfully handles overflow and underflow conditions, which makes date math very easy. Given this ease of manipulation, it doesn't make sense to worry about how many days are in a given month; just nudge the math around. In December, the solution above will actually ask for the 0th day of the 13th month of the current year, which works out to the day before the 1st day of January of NEXT year, which works out to the 31st day of December of the current year.
