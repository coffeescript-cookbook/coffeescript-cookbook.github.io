---
layout: recipe
title: Repeating a String
chapter: Strings
---
## Problem

You want to repeat a string.

## Solution

Create an array of n+1 nulls, and then join it with the repetition string as the glue:

{% highlight coffeescript %}
# create a string of 10 foos
Array(11).join 'foo'

# => "foofoofoofoofoofoofoofoofoofoo"
{% endhighlight %}

## Repeat method for Strings

You could also create a method for this in String prototype. It is as simple as that:

{% highlight coffeescript %}
# add repeat method for all strings, that returns string repeated n times
String::repeat = (n) -> Array(n+1).join(this)
{% endhighlight %}

## Discussion

JavaScript lacks a string repeat function, as does CoffeeScript. List comprehensions and maps can be pressed into service here, but in the case of a simple string repeat it's easier to simply build an array of n+1 nulls and then glue them together.
