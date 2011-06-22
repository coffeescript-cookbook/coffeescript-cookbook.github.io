---
layout: recipe
title: Factory Method Pattern
chapter: Design Patterns
---
## Problem

You don't know what kind of object you will need until runtime.

## Solution

Use the [Factory Method](http://en.wikipedia.org/wiki/Factory_method_pattern) pattern and choose the object to be generated dynamically.

Say that you need to load a file into an editor but you don't know its format until the user chooses the file.  A class using the [Factory Method](http://en.wikipedia.org/wiki/Factory_method_pattern) pattern can serve up different parsers depending on the file's extension.

{% highlight coffeescript %}
class HTMLParser
	constructor: ->
		@type = "HTML parser"
class MarkdownParser
	constructor: ->
		@type = "Markdown parser"
class JSONParser
	constructor: ->
		@type = "JSON parser"

class ParserFactory
	makeParser: (filename) ->
		matches = filename.match /\.(\w*)$/
		extension = matches[1]
		switch extension
			when "html" then new HTMLParser
			when "htm" then new HTMLParser
			when "markdown" then new MarkdownParser
			when "md" then new MarkdownParser
			when "json" then new JSONParser

factory = new ParserFactory

factory.makeParser("example.html").type # => "HTML parser"

factory.makeParser("example.md").type # => "Markdown parser"

factory.makeParser("example.json").type # => "JSON parser"
{% endhighlight %}

## Discussion

In the example, you can ignore the specifics of the file's format and focus on the parsed content.  A more advanced Factory Method might, for instance, also search for versioning data within the file itself before returning a more precise parser (e.g. an HTML5 parser instead of an HTML v4 parser).
