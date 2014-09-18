---
layout: recipe
title: Class Variables and Instance Variables
chapter: Classes and Objects
---
## Problem

You want to create class variables and instance variables (properties).

## Solution

### Class Variables

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


### Instance Variables

You have to define instance variables (i.e. properties) inside a class' method, initialize your defaults in the constructor.

{% highlight coffeescript %}
class Zoo
  constructor: ->
    @animals = [] # Here the instance variable is defined
    
  addAnimal: (name) ->
    @animals.push name


zoo = new Zoo()
zoo.addAnimal 'elephant'

otherZoo = new Zoo()
otherZoo.addAnimal 'lion'

zoo.animals
# => ['elephant']

otherZoo.animals
# => ['lion']
{% endhighlight %}

#### WARNING!
*Do not add the variable accidently to the prototype, by defining it outside the constructor* (Even if mentioned [elsewhere](http://arcturo.github.io/library/coffeescript/03_classes.html#content), this does not work as intended, due to the underlying JavaScript prototype concept).

{% highlight coffeescript %}
class BadZoo
  animals: []           # Translates to BadZoo.prototype.animals = []; and is thus shared between instances
    
  addAnimal: (name) ->
    @animals.push name  # Works due to the prototype concept of Javascript


zoo = new BadZoo()
zoo.addAnimal 'elephant'

otherZoo = new BadZoo()
otherZoo.addAnimal 'lion'

zoo.animals
# => ['elephant','lion'] # Oops...

otherZoo.animals
# => ['elephant','lion'] # Oops...

BadZoo::animals
# => ['elephant','lion'] # The value is stored in the prototype
{% endhighlight %}

## Discussion

Coffeescript will store the values of class variables on the class itself rather than on the prototype it defines. These are useful for defining variables on classes which can't be overwritten by instance attribute variables.
