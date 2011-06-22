---
layout: recipe
title: Memento Pattern
chapter: Design Patterns
---
## Problem

You want to anticipate the reversion of changes to an object.

## Solution

Use the [Memento pattern](http://en.wikipedia.org/wiki/Memento_pattern) to track changes to an object.  The class using the pattern will export a `memento` object stored elsewhere.

If you have application where the user can edit a text file, for example, they may want to undo their last action.  You can save the current state of the file before the user changes it and then roll back to that at a later point.

{% highlight coffeescript %}
class PreserveableText
	class Memento
		constructor: (@text) ->

	constructor: (@text) ->
	save: (newText) ->
		memento = new Memento @text
		@text = newText
		memento
	restore: (memento) ->
		@text = memento.text

pt = new PreserveableText "The original string"
pt.text # => "The original string"

memento = pt.save "A new string"
pt.text # => "A new string"

pt.save "Yet another string"
pt.text # => "Yet another string"

pt.restore memento
pt.text # => "The original string"
{% endhighlight %}

## Discussion

The Memento object returned by `PreserveableText#save` stores the important state information separately for safe-keeping.  You could even serialize this Memento in order to maintain an "undo" buffer on the hard disk or remotely for such data-intensive objects as edited images.
