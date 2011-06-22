---
layout: recipe
title: For Loops
chapter: Syntax
---
## Problem

You need to iterate over an array, object or range with a for loop.

## Solution

{% highlight coffeescript %}
# for(i = 1; i<= 10; i++)
x for x in [1..10]
# => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

# To count by 2
# for(i=1; i<= 10; i=i+2)
x for x in [1..10] by 2
# => [ 1, 3, 5, 7, 9 ]

# Perform a simple operation like squaring each item.
x * x for x in [1..10]
# = > [1,4,9,16,25,36,49,64,81,100]
{% endhighlight %}

## Discussion

Comprehensions replace for loops in CoffeeScript, but they simply compile into the traditional javascript equivalent for-loop.