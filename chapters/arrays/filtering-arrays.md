---
layout: recipe
title: Filtering Arrays
chapter: Arrays
---
## Problem

You want to be able to filter arrays based on a boolean condition.

## Solution

Use Array.filter (ECMAScript 5):

{% highlight coffeescript %}
array = [1..10]

array.filter (x) -> x > 5
# => [6,7,8,9,10]
{% endhighlight %}

In pre-EC5 implementations, extend the Array prototype to add a filter function which will take a callback and perform a comprehension over itself, collecting all elements for which the callback is true. Be sure to check if the function is already implemented before overwriting it:

{% highlight coffeescript %}
# Extending Array's prototype
unless Array::filter
  Array::filter = (callback) ->
    element for element in this when callback(element)

array = [1..10]

# Filter odd elements
filtered_array = array.filter (x) -> x % 2 == 0
# => [2,4,6,8,10]

# Filter elements less than or equal to 5:
gt_five = (x) -> x > 5
filtered_array = array.filter gt_five
# => [6,7,8,9,10]
{% endhighlight %}

## Discussion

This is similar to using ruby's Array#select method.
