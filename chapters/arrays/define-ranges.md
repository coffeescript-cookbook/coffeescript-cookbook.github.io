---
layout: recipe
title: Define Ranges Array
chapter: Arrays
---
## Problem

You want to define a range in an array.

## Solution

There are two ways to define a range of array elements in CoffeeScript.

{% highlight coffeescript %}

# inclusive
myArray = [1..10]
# => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

{% endhighlight %}

{% highlight coffeescript %}

# exclusive
myArray = [1...10]
# => [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

{% endhighlight %}

We can also reverse the range of element by writing it this way.

{% highlight coffeescript %}

myLargeArray = [10..1]
# => [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]

{% endhighlight %}

{% highlight coffeescript %}
myLargeArray = [10...1]
# => [ 10, 9, 8, 7, 6, 5, 4, 3, 2 ]

{% endhighlight %}

## Discussion

Inclusive ranges are defined by the '..' operator and include the last value.

Exclusive ranges are defined by '...', and always omit the last value.

