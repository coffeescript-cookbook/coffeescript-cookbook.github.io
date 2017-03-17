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
if(window.MY_NAMESPACE === null || window.MY_NAMESPACE === undefined) {
  window.MY_NAMESPACE = {};
}
{% endhighlight %}

## Problem

You want to make a conditonal assignment if it does not exists or if it is falsy (empty, 0, null, false)

## Solution

Use the Conditional assignment operator

{% highlight coffeescript %}
window.my_variable ||= {}
{% endhighlight %}

## Discussion

This is equivalent to the following JavaScript:

{% highlight javascript %}
window.my_variable = window.my_variable || {};
{% endhighlight %}

Common JavaScript technique, using conditional assignment to ensure that we have an object that is not falsy
