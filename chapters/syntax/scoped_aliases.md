---
layout: recipe
title: Scoped Aliases
chapter: Syntax
---
## Problem

You want to create a tiny namespace just to hold some temporary variables.

## Solution

{% highlight coffeescript %}
d = 5
do (d=document,c=console,w=window) ->
  d.createElement 'div'
  c.info 'Hello world'
  w.focus()
console.info d # prints 5
{% endhighlight %}
