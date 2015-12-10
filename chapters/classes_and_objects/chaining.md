---
layout: recipe
title: Chaining Calls to an Object
chapter: Classes and Objects
---
## Problem

You want to call multiple methods on a single object without having to reference that object each time.

## Solution

Return the `this` (i.e. `@`) object after every chained method.

{% highlight coffeescript %}
class CoffeeCup
	constructor:  ->
		@properties=
			strength: 'medium'
			cream: false
			sugar: false
	strength: (newStrength) ->
		@properties.strength = newStrength
		this
	cream: (newCream) ->
		@properties.cream = newCream
		this
	sugar: (newSugar) ->
		@properties.sugar = newSugar
		this

morningCup = new CoffeeCup()

morningCup.properties # => { strength: 'medium', cream: false, sugar: false }

eveningCup = new CoffeeCup().strength('dark').cream(true).sugar(true)

eveningCup.properties # => { strength: 'dark', cream: true, sugar: true }

{% endhighlight %}

## Discussion

The jQuery library uses a similar approach by returning a selector object from every relevant method, modifying it as subsequent methods tweak the selection:

{% highlight coffeescript %}
$('p').filter('.topic').first()
{% endhighlight %}

For your own objects, a touch of metaprogramming can automate the setup process and explicitly state the purpose of returning *this*.

{% highlight coffeescript %}
addChainedAttributeAccessor = (obj, propertyAttr, attr) ->
	obj[attr] = (newValues...) ->
		if newValues.length == 0
			obj[propertyAttr][attr]
		else
			obj[propertyAttr][attr] = newValues[0]
			obj

class TeaCup
	constructor:  ->
		@properties=
			size: 'medium'
			type: 'black'
			sugar: false
			cream: false
		addChainedAttributeAccessor(this, 'properties', attr) for attr of @properties

earlgrey = new TeaCup().size('small').type('Earl Grey').sugar(false)

earlgrey.properties # => { size: 'small', type: 'Earl Grey', sugar: false, cream: false }

earlgrey.sugar true

earlgrey.sugar() # => true
{% endhighlight %}
