---
layout: recipe
title: Recursive Functions
chapter: Functions
---
## Problem

You want to call a function from within that same function.

## Solution

With a named function:

{% highlight coffeescript %}
ping = ->
	console.log "Pinged"
	setTimeout ping, 1000
{% endhighlight %}

With an unnamed function, using @arguments.callee@:

{% highlight coffeescript %}
delay = 1000

setTimeout((->
	console.log "Pinged"
	setTimeout arguments.callee, delay
	), delay)
{% endhighlight %}

## Discussion

While `arguments.callee` allows for the recursion of anonymous functions and might have the advantage in a very memory-intensive application, named functions keep their purpose more explicit and make for more maintainable code.
