---
layout: recipe
title: A CoffeeScript Type Function
chapter: Classes and Objects
---
## Problem

You'd like to know the type of a function without using typeof. (See http://javascript.crockford.com/remedial.html for more information on why typeof is pretty inferior.)

## Solution

Use the following function:

{% highlight coffeescript %}
type = (obj) ->
  if obj == undefined or obj == null
    return String obj
  classToType = new Object
  for name in "Boolean Number String Function Array Date RegExp".split(" ")
    classToType["[object " + name + "]"] = name.toLowerCase()
  myClass = Object.prototype.toString.call obj
  if myClass of classToType
    return classToType[myClass]
  return "object"
{% endhighlight %}

## Discussion

This function was modeled on jQuery's $.type function. (http://api.jquery.com/jQuery.type/)

Note that, as an alternative to type checking, you can often use duck typing and the existential operator together to eliminating the need to examine an object's type, in certain cases.  For example, here is exception-free code that pushes an element to an array, if myArray is in fact an array (or array-like, with a push function), and does nothing otherwise.

{% highlight coffeescript %}
myArray?.push? myValue
{% endhighlight %}
