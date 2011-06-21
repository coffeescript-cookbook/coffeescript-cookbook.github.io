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
  o = {}
  r = []
  o[this[i]] = this[i] for i in [1...@length]
  r.push(v) for k,v of o
  r

[1,1,2,2,2,3,4,5,6,6,6,"a","a","b","d","b","c"].unique()
# => [ 1, 2, 3, 4, 5, 6, 'a', 'b', 'd', 'c' ]
{% endhighlight %}

## Discussion

There are many implementations of the `unique` method in JavaScript. This one is based on "The fastest method to find unique items in array" found [here](http://www.shamasis.net/2009/09/fast-algorithm-to-find-unique-items-in-javascript-array/).
