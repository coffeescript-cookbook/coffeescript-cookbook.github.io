---
layout: recipe
title: Generating Random Numbers
chapter: Math
---
## Problem

You need to generate a random number in a certain range.

## Solution

Use JavaScript's Math.random() to get floating-point numbers from 0 <= x < 1.0. Use multiplication and Math.floor to get a number in a certain range.

{% highlight coffeescript %}
probability = Math.random()
0.0 <= probability < 1.0
# => true

# Note that percentile does NOT ever reach 100. A full range of 0 to 100 is actually a span of 101.
percentile = Math.floor(Math.random() * 100)
0 <= percentile < 100
# => true

dice = Math.floor(Math.random() * 6) + 1
1 <= dice <= 6
# => true

max = 42
min = -13
range = Math.random() * (max - min) + min
-13 <= range < 42
# => true
{% endhighlight %}

## Discussion

This is a straight lift from JavaScript.

Note that JavaScript's Math.random() does not allow you to seed the random number generator to force certain values. See [Generating Predictable Random Numbers]({{ site.baseurl }}/chapters/math/generating-predictable-random-numbers) for that.

To generate a number from 0 up to (but not including) n, multiply by n. To generate a number from 1 to n (inclusive), multiply by n and add 1.
