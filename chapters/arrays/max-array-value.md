---
layout: recipe
title: Max Array Value
chapter: Arrays
---
## Problem

You need to find the largest value contained in an array.

## Solution

In ECMAScript 5, use `Array#reduce`. In older javascripts, use Math.max over a list comprehension:

{% highlight coffeescript %}
# ECMAScript 5
[12,32,11,67,1,3].reduce (a,b) -> Math.max a, b
# => 67

# Pre-EC5
max = Math.max(max or= num, num) for num in [12,32,11,67,1,3]
# => [ 12, 32, 32, 67, 67, 67 ]
max
# => 67
{% endhighlight %}

## Discussion

`Math.max` compares two numbers and returns the larger of the two; the rest of this recipe (both versions) is just iterating over the array to find the largest one. It is interesting to note that when assigning from a list comprehension, the last item evaluated will be returned to the assignment but the expression itself (such as in the node.js coffeescript interpreter) evaluates to the list comprehension's complete mapping. This means that the Pre-EC5 version will duplicate the array.

For very large arrays in ECMAScript 4, a more memory efficient approach might be to initialize `max` to the first element of the array, and then loop over it with a traditional for loop. Since non-idiomatic CoffeeScript is discouraged in the Cookbook, this approach is left as an exercise to the reader.
