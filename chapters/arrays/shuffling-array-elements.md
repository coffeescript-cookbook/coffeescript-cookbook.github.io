---
layout: recipe
title: Shuffling Array Elements
chapter: Arrays
---
## Problem

You want to shuffle the elements in an array.

## Solution

The JavaScript Array `sort()` method accepts a custom sort function. We can write a `shuffle()` method to add some convenience.

{% highlight coffeescript %}
Array::shuffle = -> @sort -> 0.5 - Math.random()

[1..9].shuffle()
# => [ 3, 1, 5, 6, 4, 8, 2, 9, 7 ]
{% endhighlight %}

## Discussion

For more background on how this shuffle logic works, see this [discussion at StackOverflow](http://stackoverflow.com/questions/962802/is-it-correct-to-use-javascript-array-sort-method-for-shuffling).
