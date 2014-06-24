---
layout: recipe
title: Decorator Pattern
chapter: Design Patterns
---
## Problem

You have a set of data that you need to process in multiple, possibly varying ways.

## Solution

Use the Decorator pattern in order to structure how you apply the changes.

{% highlight coffeescript %}
miniMarkdown = (line) ->
    if match = line.match /^(#+)\s*(.*)$/
        headerLevel = match[1].length
        headerText = match[2]
        "<h#{headerLevel}>#{headerText}</h#{headerLevel}>"
    else
        if line.length > 0
            "<p>#{line}</p>"
        else
            ''

stripComments = (line) ->
    line.replace /\s*\/\/.*$/, '' # Removes one-line, double-slash C-style comments

class TextProcessor
    constructor: (@processors) ->

    reducer: (existing, processor) ->
        if processor
            processor(existing or '')
        else
            existing
    processLine: (text) ->
        @processors.reduce @reducer, text
    processString: (text) ->
        (@processLine(line) for line in text.split("\n")).join("\n")

exampleText = '''
              # A level 1 header
              A regular line
              // a comment
              ## A level 2 header
              A line // with a comment
              '''

processor = new TextProcessor [stripComments, miniMarkdown]

processor.processString exampleText

# => "<h1>A level 1 header</h1>\n<p>A regular line</p>\n\n<h2>A level 2 header</h2>\n<p>A line</p>"
{% endhighlight %}

### Results

{% highlight html %}
<h1>A level 1 header</h1>
<p>A regular line</p>

<h2>A level 1 header</h2>
<p>A line</p>
{% endhighlight %}

## Discussion

The TextProcessor serves the role of Decorator by binding the individual, specialized text processors together.  This frees up the miniMarkdown and stripComments components to focus on handling nothing but a single line of text.  Future developers only have to write functions that return a string and add it to the array of processors.

We can even modify the existing Decorator object on the fly:

{% highlight coffeescript %}
smilies =
    ':)' : "smile"
    ':D' : "huge_grin"
    ':(' : "frown"
    ';)' : "wink"

smilieExpander = (line) ->
    if line
        (line = line.replace symbol, "<img src='#{text}.png' alt='#{text}' />") for symbol, text of smilies
    line

processor.processors.unshift smilieExpander

processor.processString "# A header that makes you :) // you may even laugh"

# => "<h1>A header that makes you <img src='smile.png' alt='smile' /></h1>"

processor.processors.shift()

# => "<h1>A header that makes you :)</h1>"
{% endhighlight %}
