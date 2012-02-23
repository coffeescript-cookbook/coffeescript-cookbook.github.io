---
layout: recipe
title: Creating a String from an Array
chapter: Arrays
---
## Problem

You want to create a string from an array.

## Solution

Use JavaScript's Array toString() method:

{% highlight coffeescript %}
["one", "two", "three"].toString()
# => 'one,two,three'
{% endhighlight %}

## Discussion

`toString()` is a standard JavaScript method. Don't forget the parentheses.
