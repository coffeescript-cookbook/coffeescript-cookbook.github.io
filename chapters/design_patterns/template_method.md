---
layout: recipe
title: Template Method Pattern
chapter: Design Patterns
---
## Problem

You need to execute a series of steps according to some algorithm or recipe and wish to provide the implementation for any of the steps.

## Solution

Use the Template Method to describe each step in a superclass, delegating the implementation of each step to a subclass.

For example, imagine you wish to model various types of document and each one may contain a header and a body.

{% highlight coffeescript %}
class Document
	produceDocument: ->
		@produceHeader()
		@produceBody()

	produceHeader: ->
	produceBody: ->

class DocWithHeader extends Document
	produceHeader: ->
		console.log "Producing header for DocWithHeader"

	produceBody: ->
		console.log "Producing body for DocWithHeader"

class DocWithoutHeader extends Document
	produceBody: ->
		console.log "Producing body for DocWithoutHeader"

doc1 = new DocWithHeader
doc1.produceDocument()

doc2 = new DocWithoutHeader
doc2.produceDocument()
{% endhighlight %}

## Discussion

In this example, there are two steps, one for producing a document header and the second for producing the document body; these two steps are given empty implementations in the superclass. The DocWithHeader implements both the body and header steps, whereas the DocWithoutHeader only impements the body step.
