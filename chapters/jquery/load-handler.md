---
layout: recipe
title: Create a Document Load Handler
chapter: jQuery
---
## Problem

You'd like a function to execute as soon as your HTML document is loaded.

## Solution

This is wickedly terse in coffeescript:

{% highlight coffeescript %}
$ ->
  console.info 'Page is loaded.'
  # do stuff...
{% endhighlight %}

## Discussion

This is equivalent to:

{% highlight javascript %}
$(document).ready(function() {
  console.info('Page is loaded');
  // do stuff...
});
{% endhighlight %}
