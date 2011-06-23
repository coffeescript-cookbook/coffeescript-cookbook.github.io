---
layout: recipe
title: Command Pattern
chapter: Design Patterns
---
## Problem

You need to let another object handle when your private code is executed.

## Solution

Use the [Command pattern](http://en.wikipedia.org/wiki/Command_pattern) to pass along references to your functions.

{% highlight coffeescript %}
# Using a private variable to simulate external scripts or modules
incrementers = (() ->
	privateVar = 0

	singleIncrementer = () ->
		privateVar += 1

	doubleIncrementer = () ->
		privateVar += 2
	
	commands = 
		single: singleIncrementer
		double: doubleIncrementer
		value: -> privateVar
)()

class RunsAll
	constructor: (@commands...) ->
	run: -> command() for command in @commands

runner = new RunsAll(incrementers.single, incrementers.double, incrementers.single, incrementers.double)
runner.run()
incrementers.value() # => 6
{% endhighlight %}

## Discussion

With functions as first-class objects and with the function-bound variable scope inherited from Javascript, the CoffeeScript language makes the pattern nearly invisible.  In fact, any function passed along as callbacks can act as a *Command*.

The `jqXHR` object returned by jQuery AJAX methods uses this pattern.

{% highlight coffeescript %}
jqxhr = $.ajax
	url: "/"

logMessages = ""

jqxhr.success -> logMessages += "Success!\n"
jqxhr.error -> logMessages += "Error!\n"
jqxhr.complete -> logMessages += "Completed!\n"

# On a valid AJAX request:
# logMessages == "Success!\nCompleted!\n"
{% endhighlight %}

