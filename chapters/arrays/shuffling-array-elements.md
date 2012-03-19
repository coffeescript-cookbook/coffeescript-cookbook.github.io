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

**Note:** Although it's quite common in languages like Ruby, extending native objects is often considered bad practice in JavaScript (see: [Maintainable JavaScript: Don’t modify objects you don’t own](http://www.nczonline.net/blog/2010/03/02/maintainable-javascript-dont-modify-objects-you-down-own/); [Extending built-in native objects. Evil or not?](http://perfectionkills.com/extending-built-in-native-objects-evil-or-not/)).