---
layout: recipe
title: Detecting and Creating Missing Functions
chapter: Metaprogramming
---
## Problem

You want to detect if a function exists and create it if it does not (such as an ECMAScript 5 function in Internet Explorer 8).

## Solution

Use `::` to detect the function, and assign to it if it does not exist.

{% highlight coffeescript %}
unless Array::filter
  Array::filter = (callback) ->
    element for element in this when callback element

array = [1..10]

array.filter (x) -> x > 5
# => [6,7,8,9,10]
{% endhighlight %}

## Discussion

Objects in JavaScript (and thus, in CoffeeScript) have a prototype member that defines what member functions should be available on all objects based on that prototype. In CoffeeScript, you can access the prototype directly via the `::` operator.
