---
layout: recipe
title: Max Array Value
chapter: Arrays
---
## Problem

You need to find the largest value contained in an array.

## Solution

In ECMAScript 5, use `Array#reduce`. In older javascripts, use Math.max:

{% highlight coffeescript %}
# ECMAScript 5
[12,32,11,67,1,3].reduce (a,b) -> Math.max a, b
# => 67

# Pre-EC5
max = Math.max.apply(null, [12,32,11,67,1,3])
# => [ 12, 32, 32, 67, 67, 67 ]
max
# => 67
{% endhighlight %}

## Discussion

`Math.max` compares two numbers and returns the larger of the two; the rest of this recipe (both versions) is just iterating over the array to find the largest one.
