---
layout: recipe
title: Template Method Pattern
chapter: Design Patterns
---
## Problem

Define the structure of an algorithm as a series of high-level steps, making it possible to specify the behaviour of each step, giving rise to a family of algorithms that have the same structure but different behaviours.

## Solution

Use the Template Method to describe the algorithm structure in a superclass, delegating the implementation of some steps to one or more concrete subclasses.

For example, imagine you wish to model the production of various types of document and each one may contain a header and a body.

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

docs = [new DocWithHeader, new DocWithoutHeader]
doc.produceDocument() for doc in docs
{% endhighlight %}

## Discussion

In this example, the algorithm consists of two steps describing document production: one for producing a document header and the second for producing the document body. An empty method implementation for each step is present in the superclass and polymorphism is exploited such that each concrete subclass can provide a different implementation for a step by overriding a step method. In this example,the DocWithHeader implements both the body and header steps, whereas the DocWithoutHeader only implements the body step.

The production of different types of document is then straightforward when document objects are stored in an array, and it is then a simple of matter of iterating over each document object and calling its produceDocument method.