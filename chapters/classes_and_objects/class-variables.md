---
layout: recipe
title: Class Variables
chapter: Classes and Objects
---
## Problem

You want to create a class variable.

## Solution

{% highlight coffeescript %}
class Zoo
  @MAX_ANIMALS: 50
  MAX_ZOOKEEPERS: 3
  
  helpfulInfo: =>
    "Zoos may contain a maximum of #{@constructor.MAX_ANIMALS} animals and #{@MAX_ZOOKEEPERS} zoo keepers."

Zoo.MAX_ANIMALS
# => 50

Zoo.MAX_ZOOKEEPERS
# => undefined (it is a prototype member)

Zoo::MAX_ZOOKEEPERS
# => 3

zoo = new Zoo
zoo.MAX_ZOOKEEPERS
# => 3
zoo.helpfulInfo()
# => "Zoos may contain a maximum of 50 animals and 3 zoo keepers."

zoo.MAX_ZOOKEEPERS = "smelly"
zoo.MAX_ANIMALS = "seventeen"
zoo.helpfulInfo()
# => "Zoos may contain a maximum of 50 animals and smelly zoo keepers."
{% endhighlight %}

## Discussion

Coffeescript will store these values on the class itself rather than on the prototype it defines. 
These are useful for defining variables on classes which can not be overrided by instance attribute variables.

## Warning

Be aware that for non-primitive (mutable) properties (anything execpt `number`, `string`, `boolean`, `null` or `undefined`)
so (e.g. an array `[]` or a dictionary `{}`)  the variable will be shared among instances.

## Problem

You want to create a class variable for non-primitive type.

## Solution

Create the variable in the constructor


{% highlight coffeescript %}
class Animal 

	# variable is mutable and will be shared across all instances of the prototype
	favoriteFoodShared : []
	
	constructor: ->
		@favoriteFood = []

bear = new Animal()
lion = new Animal()

lion.favoriteFood.push "Zebras"

lion.favoriteFood
# => ["Zebras"]

bear.favoriteFood
# => []

# here is what happens if you would use modify the mutable variable

lion.favoriteFoodShared.push "Zebras"

lion.favoriteFoodShared
# => ["Zebras"]

bear.favoriteFoodShared
# => ["Zebras"]

{% endhighlight %}
