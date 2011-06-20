---
layout: recipe
title: Bridge Pattern
chapter: Design Patterns
---
## Problem

You need to maintain a reliable interface for code that can change frequently or change between multiple implementations.

## Solution

Use the Bridge pattern as an intermediate between the different implementations and the rest of the code.

Assume that you developed an in-browser text editor that saves to the cloud.  Now, however, you need to port it to a stand-alone client that saves locally.

{% highlight coffeescript %}
class TextSaver
	constructor: (@filename, @options) ->
	save: (data) ->

class CloudSaver extends TextSaver
	constructor: (@filename, @options) ->
		super @filename, @options
	save: (data) ->
		# Assuming jQuery
		# Note the fat arrows
		$( =>
			$.post "#{@options.url}/#{@filename}", data, =>
				alert "Saved '#{data}' to #{@filename} at #{@options.url}."
		)

class FileSaver extends TextSaver
	constructor: (@filename, @options) ->
		super @filename, @options
		@fs = require 'fs'
	save: (data) ->
		@fs.writeFile @filename, data, (err) => # Note the fat arrow
			if err? then console.log err
			else console.log "Saved '#{data}' to #{@filename} in #{@options.directory}."

filename = "temp.txt"
data = "Example data"

saver = if window?
	new CloudSaver filename, url: 'http://localhost' # => Saved "Example data" to temp.txt at http://localhost
else if root?
	new FileSaver filename, directory: './' # => Saved "Example data" to temp.txt in ./

saver.save data
{% endhighlight %}

## Discussion

The Bridge pattern helps you to move the implementation-specific code out of sight so that you can focus on your program's specific code.  In the above example, the rest of your application can call `saver.save data` without regard for where the file ultimately ends up.
