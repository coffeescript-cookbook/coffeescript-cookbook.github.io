---
layout: recipe
title: A Random Integer Function
chapter: Math
---
## Problem

You'd like to get a random integer between two integers, inclusive.

## Solution

Use the following function.

{% highlight coffeescript %}
randomInt = (lower, upper=0) ->
  start = Math.random()
  if not lower?
    [lower, upper] = [0, lower]
  if lower > upper
    [lower, upper] = [upper, lower]
  return Math.floor(start * (upper - lower + 1) + lower)

(randomInt(1) for i in [0...10])
# => [0,1,1,0,0,0,1,1,1,0]

(randomInt(1, 10) for i in [0...10])
# => [7,3,9,1,8,5,4,10,10,8]
{% endhighlight %}

## Discussion

Questions?
