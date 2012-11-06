---
layout: recipe
title: Python-like Zip Function
chapter: Arrays
---
## Problem

You want to zip together multiple arrays into an array of arrays, similar to Python's zip function.  Python's zip function returns an array of tuples, where each tuple contains the i-th element from each of the argument arrays.

## Solution

Use the following CoffeeScript code:

{% highlight coffeescript %}
# Usage: zip(arr1, arr2, arr3, ...)
zip = () ->
  lengthArray = (arr.length for arr in arguments)
  length = Math.min(lengthArray...)
  for i in [0...length]
    arr[i] for arr in arguments

zip([0, 1, 2, 3], [0, -1, -2, -3])
# => [[0, 0], [1, -1], [2, -2], [3, -3]]
{% endhighlight %}
