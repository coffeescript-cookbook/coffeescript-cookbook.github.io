---
layout: recipe
title: Calculate the Date of Thanksgiving (USA and Canada)
chapter: Dates and Times
---
## Problem

You need to calculate when Thanksgiving is in a given year.

## Solution

The following functions return the day of Thanksgiving for a given year. If no year is given then current year is used.

In the USA Thanksgiving is celebrated on the fourth Thursday in November:

{% highlight coffeescript %}

thanksgivingDayUSA = (year = (new Date).getFullYear()) ->
  first = new Date year, 10, 1
  day_of_week = first.getDay()
  22 + (11 - day_of_week) % 7

{% endhighlight %}

In Canada it is the second Monday in October:

{% highlight coffeescript %}

thanksgivingDayCA = (year = (new Date).getFullYear()) ->
    first = new Date year, 9, 1
    day_of_week = first.getDay()
    8 + (8 - day_of_week) % 7

{% endhighlight %}

## Discussion

{% highlight coffeescript %}

thanksgivingDayUSA() #=> 24 (November 24th, 2011)

thanksgivingDayCA() # => 10 (October 10th, 2011)

thanksgivingDayUSA(2012) # => 22 (November 22nd)

thanksgivingDayCA(2012) # => 8 (October 8th)

{% endhighlight %}

The idea is very simple:
1. Find out what day of the week is the first day of respective month (November for USA, October for Canada).
2. Calculate offset from that day to the next occurrence of weekday required (Thursday for USA, Monday for Canada).
3. Add that offset to the first possible date of the holiday (22nd for USA Thanksgiving, 8th for Canada).
