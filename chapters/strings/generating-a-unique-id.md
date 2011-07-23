---
layout: recipe
title: Generating a Unique ID
chapter: Strings
---
## Problem

You want to generate a random unique identifier.

## Solution

You can create a Base 36 encoded string from a random number.

{% highlight coffeescript %}
uniqueId = (length=8) ->
  id = ""
  id += Math.random().toString(36).substr(2) while id.length < length
  id.substr 0, length

uniqueId()    # => n5yjla3b
uniqueId(2)   # => 0d
uniqueId(20)  # => ox9eo7rt3ej0pb9kqlke
uniqueId(40)  # => xu2vo4xjn4g0t3xr74zmndshrqlivn291d584alj
{% endhighlight %}

## Discussion

There are other possible techniques, but this is relatively performant and flexible.
