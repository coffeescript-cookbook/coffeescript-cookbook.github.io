---
layout: recipe
title: Mixins for classes
chapter: Classes and Objects
---
## Problem

You have a few utility methods that you want to include in a number of different classes.

## Solution

Use a mixOf factory function that generates a mixed superclass for you.

{% highlight coffeescript %}
mixOf = (base, mixins...) ->
  class Mixed extends base
  for mixin in mixins by -1 #earlier mixins override later ones
    for name, method of mixin::
      Mixed::[name] = method
  Mixed

...

class DeepThought
  answer: ->
    42
    
class PhilosopherMixin
  pontificate: ->
    console.log "hmm..."
    @wise = yes

class DeeperThought extends mixOf DeepThought, PhilosopherMixin
  answer: ->
    @pontificate()
    super()
    
earth = new DeeperThought
earth.answer()
# hmm...
# => 42
{% endhighlight %}

## Discussion

This is intended for lightweight mixins. Thus you inherit methods of the
base and its ancestors, and those of the mixins, but not those of the ancestors of 
the mixins. Also, after declaring a mixed class, further changes in the mixins are not 
reflected.
