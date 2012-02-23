---
layout: recipe
title: Max Array Value
chapter: Arrays
---
## Problem

You need to find the largest value contained in an array.

## Solution

In ECMAScript 5, you can use `Array#reduce`. For compatibility with older javascripts, use Math.max.apply:

{% highlight coffeescript %}
# ECMAScript 5
[12,32,11,67,1,3].reduce (a,b) -> Math.max a, b
# => 67

# Pre-ES5
Math.max.apply(null, [12,32,11,67,1,3])
# => 67
{% endhighlight %}

## Discussion

`Math.max` compares two numbers and returns the larger of the two; the rest of this recipe (both versions) is just iterating over the array to find the largest one.
