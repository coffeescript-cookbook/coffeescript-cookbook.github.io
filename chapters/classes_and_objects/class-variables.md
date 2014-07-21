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

Coffeescript will store these values on the class itself rather than on the prototype it defines.  These are useful for defining variables on classes which can't be overwritten by instance attribute variables.
