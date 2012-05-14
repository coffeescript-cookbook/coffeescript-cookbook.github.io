---
layout: recipe
title: Removing Duplicate Elements from Arrays
chapter: Arrays
---
## Problem

You want to remove duplicate elements from an array.

## Solution

{% highlight coffeescript %}
Array::unique = ->
  output = {}
  output[@[key]] = @[key] for key in [0...@length]
  value for key, value of output

[1,1,2,2,2,3,4,5,6,6,6,"a","a","b","d","b","c"].unique()
# => [ 1, 2, 3, 4, 5, 6, 'a', 'b', 'd', 'c' ]
{% endhighlight %}

## Discussion

There are many implementations of the `unique` method in JavaScript. This one is based on "The fastest method to find unique items in array" found [here](http://www.shamasis.net/2009/09/fast-algorithm-to-find-unique-items-in-javascript-array/).

**Note:** Although it's quite common in languages like Ruby, extending native objects is often considered bad practice in JavaScript (see: [Maintainable JavaScript: Don’t modify objects you don’t own](http://www.nczonline.net/blog/2010/03/02/maintainable-javascript-dont-modify-objects-you-down-own/); [Extending built-in native objects. Evil or not?](http://perfectionkills.com/extending-built-in-native-objects-evil-or-not/)).


