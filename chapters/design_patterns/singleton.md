---
layout: recipe
title: Singleton Pattern
chapter: Design Patterns
---
## Problem

Many times you only want one, and only one, instance of a class. For example, you may only need one class that creates server resources and you want to ensure that the one object can control those resources. Beware, however, because the singleton pattern can be easily abused to mimic unwanted global variables.

## Solution

The publicly available class only contains the method to get the one true instance. The instance is kept within the closure of that public object and is always returned.

The actual definition of the singleton class follows.

Note that I am using the idiomatic module export feature to emphasize the publicly accessible portion of the module. Remember coffeescript wraps all files in a function block to protect the global namespace.

{% highlight coffeescript %}
root = exports ? this # http://stackoverflow.com/questions/4214731/coffeescript-global-variables

# The publicly accessible Singleton fetcher
class root.Singleton
  _instance = undefined # Must be declared here to force the closure on the class
  @get: (args) -> # Must be a static method
    _instance ?= new _Singleton args

# The actual Singleton class
class _Singleton
  constructor: (@args) ->

  echo: ->
    @args

a = root.Singleton.get 'Hello A'
a.echo()
# => 'Hello A'

b = root.Singleton.get 'Hello B'
a.echo()
# => 'Hello A'

b.echo()
# => 'Hello A'

root.Singleton._instance
# => undefined

root.Singleton._instance = 'foo'

root.Singleton._instance
# => 'foo'

c = root.Singleton.get 'Hello C'
c.foo()
# => 'Hello A'

a.foo()
# => 'Hello A'
{% endhighlight %}

## Discussion

See in the above example how all instances are outputting from the same instance of the Singleton class.

Note how incredibly simple coffeescript makes this design pattern. For reference and discussion on nice javascript implementations, check out [Essential JavaScript Design Patterns For Beginners](http://addyosmani.com/resources/essentialjsdesignpatterns/book/).
