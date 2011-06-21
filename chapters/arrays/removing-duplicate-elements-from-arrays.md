---
layout: recipe
title: Removing duplicate elements from Arrays
chapter: Arrays
---
## Problem

You want to remove duplicate elements from an array.

## Solution

{% highlight coffeescript %}
Array::unique = ->
  output = {}
  output[@[key]] = @[key] for key in [1...@length]
  value for key, value of output

[1,1,2,2,2,3,4,5,6,6,6,"a","a","b","d","b","c"].unique()
# => [ 1, 2, 3, 4, 5, 6, 'a', 'b', 'd', 'c' ]
{% endhighlight %}

## Discussion

There are many implementations of the `unique` method in JavaScript. This one is based on "The fastest method to find unique items in array" found [here](http://www.shamasis.net/2009/09/fast-algorithm-to-find-unique-items-in-javascript-array/).
