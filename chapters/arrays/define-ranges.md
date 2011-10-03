---
layout: recipe
title: Define Ranges Array
chapter: Arrays
---
## Problem

You want to define range in array.

## Solution

There are two method to define range of an array element in CoffeeScript.

{% highlight coffeescript %}

myArray = [1..10]
# => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

{% endhighlight %}

{% highlight coffeescript %}

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

Inclusive range always define by '..' operator.

Exclusive range difine by '...', and always omit the last value. 
