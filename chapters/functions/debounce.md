---
layout: recipe
title: Debounce Functions
chapter: Functions
---
## Problem

You want to execute a function only once, coalescing multiple sequential calls into a single execution at the beginning or end.

## Solution

With a named function:

{% highlight coffeescript %}
debounce: (func, threshold, execAsap) ->
  timeout = null
  (args...) ->
    obj = this
    delayed = ->
      func.apply(obj, args) unless execAsap
      timeout = null
    if timeout
      clearTimeout(timeout)
    else if (execAsap)
      func.apply(obj, args)
    timeout = setTimeout delayed, threshold || 100
{% endhighlight %}

{% highlight coffeescript %}
mouseMoveHandler: (e) ->
  @debounce((e) ->
    # Do something here, but only once 300 milliseconds after the mouse cursor stops.
  300)

someOtherHandler: (e) ->
  @debounce((e) ->
    # Do something here, but only once 250 milliseconds after initial execution.
  250, true)
{% endhighlight %}

## Discussion

Learn about [debouncing JavaScript methods](http://unscriptable.com/2009/03/20/debouncing-javascript-methods/) at John Hann's excellent blog article.

