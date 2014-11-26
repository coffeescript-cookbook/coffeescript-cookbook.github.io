---
layout: recipe
title: Concatenating Arrays
chapter: Arrays
---
## Problem

You want to join two arrays together.

## Solution

There are two standard options for concatenating arrays in JavaScript.

The first is to use JavaScript's Array `concat()` method:

{% highlight coffeescript %}
array1 = [1, 2, 3]
array2 = [4, 5, 6]
array3 = array1.concat array2
# => [1, 2, 3, 4, 5, 6]
{% endhighlight %}

Note that `array1` is _not_ modified by the operation. The concatenated array is returned as a new object.

If you want to merge two arrays without creating a new object, you can use the following technique:

{% highlight coffeescript %}
array1 = [1, 2, 3]
array2 = [4, 5, 6]
Array::push.apply array1, array2
array1
# => [1, 2, 3, 4, 5, 6]
{% endhighlight %}

In the example above, the `Array.prototype.push.apply(a, b)` approach modifies `array1` in place without creating a new array object.

We can simplify the pattern above using CoffeeScript by creating a new `merge()` method for Arrays.

{% highlight coffeescript %}
Array::merge = (other) -> Array::push.apply @, other

array1 = [1, 2, 3]
array2 = [4, 5, 6]
array1.merge array2
array1
# => [1, 2, 3, 4, 5, 6]
{% endhighlight %}

Alternatively, we can pass a CoffeeScript splat (`array2...`) directly into `push()`, avoiding the Array prototype.

{% highlight coffeescript %}
array1 = [1, 2, 3]
array2 = [4, 5, 6]
array1.push array2...
array1
# => [1, 2, 3, 4, 5, 6]
{% endhighlight %}

A more idiomatic approach is to use the splat operator (`...`) directly in an array literal. This can be used to concatenate any number of arrays.

{% highlight coffeescript %}
array1 = [1, 2, 3]
array2 = [4, 5, 6]
array3 = [array1..., array2...]
array3
# => [1, 2, 3, 4, 5, 6]
{% endhighlight %}

## Discussion

CoffeeScript lacks a special syntax for joining arrays, but `concat()` and `push()` are standard JavaScript methods.
