---
layout: recipe
title: Adapter pattern
chapter: Design patterns
---
## Problem

Imagine you are traveling to a foreign country and once at your hotel room you realize your power cord socket is not compatible with the wall socket.
Luckily, you remembered you've brought your power adapter with you.
It will connect your power cord socket on one side and wall socket on the other side, allowing for communication between them.

The same situation may arise in code, when 2 (or more) instances (of classes, modules, etc.) want to talk to each other, but whose communication protocol (e.i. the language they use to communicate) is different from each other.
In such a situation, the [Adapter Pattern]({{ site.baseurl }}//en.wikipedia.org/wiki/Adapter_pattern) comes in handy. It will do the translation, from one side to the other.

## Solution

{% highlight coffeescript %}
# a fragment of 3-rd party grid component
class AwesomeGrid
	constructor: (@datasource)->
		@sort_order = 'ASC' 
		@sorter = new NullSorter # in this place we use NullObject pattern (another useful pattern)
	setCustomSorter: (@customSorter) ->
		@sorter = customSorter
	sort: () ->
		@datasource = @sorter.sort @datasource, @sort_order
		# don't forget to change sort order


class NullSorter
	sort: (data, order) -> # do nothing; it is just a stub
	
class RandomSorter
	sort: (data)->
		for i in [data.length-1..1] #let's shuffle the data a bit
    			j = Math.floor Math.random() * (i + 1)
    			[data[i], data[j]] = [data[j], data[i]]
		return data

class RandomSorterAdapter
	constructor: (@sorter) ->
	sort: (data, order) ->
		@sorter.sort data

agrid = new AwesomeGrid ['a','b','c','d','e','f']
agrid.setCustomSorter new RandomSorterAdapter(new RandomSorter)
agrid.sort() # sort data with custom sorter through adapter

{% endhighlight %}

## Discussion

Adapter is useful when you have to organize an interaction between two objects with different interfaces. It can happen when you use 3rd party libraries  or you work with legacy code. 
In any case be careful with adapter: it can be helpful but it can instigate design errors. 
