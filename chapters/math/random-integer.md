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
randomInt = (lower, upper) ->
  [lower, upper] = [0, lower]     unless upper?           # Called with one argument
  [lower, upper] = [upper, lower] if lower > upper        # Lower must be less then upper
  Math.floor(Math.random() * (upper - lower + 1) + lower) # Last statement is a return value

(randomInt(1) for i in [0...10])
# => [0,1,1,0,0,0,1,1,1,0]

(randomInt(1, 10) for i in [0...10])
# => [7,3,9,1,8,5,4,10,10,8]
{% endhighlight %}

## Discussion

Questions?
