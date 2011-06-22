---
layout: recipe
title: Using Arrays to Swap Variables
chapter: Arrays
---
## Problem

You want to use an array to swap variables.

## Solution

Use CoffeeScript's [destructuring assignment](http://jashkenas.github.com/coffee-script/#destructuring) syntax:

{% highlight coffeescript %}
a = 1
b = 3

[a, b] = [b, a]

a
# => 3

b
# => 1
{% endhighlight %}

## Discussion

Destructuring assignment allows swapping two values without the use of a temporary variable.

This can be useful when traversing arrays and ensuring iteration only happens over the shortest one:

{% highlight coffeescript %}

ray1 = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
ray2 = [ 5, 9, 14, 20 ]

intersection = (a, b) ->
  [a, b] = [b, a] if a.length > b.length
  value for value in a when value in b

intersection ray1, ray2
# => [ 5, 9 ]

intersection ray2, ray1
# => [ 5, 9 ]

{% endhighlight %}
