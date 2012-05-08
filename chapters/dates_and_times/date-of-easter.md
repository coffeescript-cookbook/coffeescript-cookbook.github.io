---
layout: recipe
title: Calculate the Date of Easter Sunday
chapter: Dates and Times
---
## Problem

You need to find the month and day of the Easter Sunday for given year.

## Solution

The following function returns array with two elements: month (1-12) and day of the Easter Sunday. If no arguments are given
result is for the current year.
This is an implementation of [Anonymous Gregorian algorithm](http://en.wikipedia.org/wiki/Computus#Anonymous_Gregorian_algorithm) in CoffeeScript.

{% highlight coffeescript %}

gregorianEaster = (year = (new Date).getFullYear()) ->
  a = year % 19
  b = ~~(year / 100)
  c = year % 100
  d = ~~(b / 4)
  e = b % 4
  f = ~~((b + 8) / 25)
  g = ~~((b - f + 1) / 3)
  h = (19 * a + b - d - g + 15) % 30
  i = ~~(c / 4)
  k = c % 4
  l = (32 + 2 * e + 2 * i - h - k) % 7
  m = ~~((a + 11 * h + 22 * l) / 451)
  n = h + l - 7 * m + 114
  month = ~~(n / 31)
  day = (n % 31) + 1
  [month, day]

{% endhighlight %}

## Discussion

NB! Javascript numbers months from 0 to 11 so .getMonth() for date in March will return 2, this function will return 3.
You can modify the function if you want this to be consistent.

The function uses ~~ trick instead of Math.floor().

{% highlight coffeescript %}

gregorianEaster()    # => [4, 24] (April 24th in 2011)
gregorianEaster 1972 # => [4, 2]

{% endhighlight %}
