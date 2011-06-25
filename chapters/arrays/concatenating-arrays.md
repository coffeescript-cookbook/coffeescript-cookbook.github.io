---
layout: recipe
title: Concatenating Arrays
chapter: Arrays
---
## Problem

You want to join two arrays together.

## Solution

Use JavaScript's Array concat() method:

{% highlight coffeescript %}
ray1 = [1,2,3]
ray2 = [4,5,6]
ray3 = ray1.concat ray2
# => [1, 2, 3, 4, 5, 6]
{% endhighlight %}

## Discussion

CoffeeScript lacks a special syntax for joining arrays, but concat is a standard JavaScript method.

Note that ray1 is _not_ modified by the operation. The concatenated array is returned as a new object.
