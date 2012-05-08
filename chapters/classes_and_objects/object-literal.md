---
layout: recipe
title: Create an Object Literal if It Does Not Already Exist
chapter: Classes and Objects
---
## Problem

You want to initialize an object literal, but you do not want to overwrite the object if it already exists.

## Solution

Use the Existential operator

{% highlight coffeescript %}
window.MY_NAMESPACE ?= {}
{% endhighlight %}

## Discussion

This is equivalent to the following JavaScript:

{% highlight javascript %}
window.MY_NAMESPACE = window.MY_NAMESPACE || {};
{% endhighlight %}

Common JavaScript technique, using object literal to define a namespace. This saves us from clobbering the namespace if it already exists.
