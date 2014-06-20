---
layout: recipe
title: Singleton Pattern
chapter: Design Patterns
---
## Problem

Many times you only want one, and only one, instance of a class. For example, you may only need one class that creates server resources and you want to ensure that the one object can control those resources. Beware, however, because the singleton pattern can be easily abused to mimic unwanted global variables.


## Solution

The publicly available class only contains the method to get the one true instance. The instance is kept within the closure of that public object and is always returned.

This works because CoffeeScript allows you to define executable statements inside a class definition. However, because most CoffeeScript compiles into a [IIFE][] wrapper you do not have to place the private class inside the class definition if this style suits you. The later might be useful when developing modular code such as found in [CommonJS][] (Node.js) or [Require.js][] (See the discussion for an example).

[IIFE]: http://benalman.com/news/2010/11/immediately-invoked-function-expression/
[CommonJS]: http://www.commonjs.org/
[Require.js]: http://requirejs.org/

{% highlight coffeescript %}
class Singleton
  # You can add statements inside the class definition
  # which helps establish private scope (due to closures)
  # instance is defined as null to force correct scope
  instance = null
  # Create a private class that we can initialize however
  # defined inside this scope to force the use of the
  # singleton class.
  class PrivateClass
    constructor: (@message) ->
    echo: -> @message
  # This is a static method used to either retrieve the
  # instance or create a new one.
  @get: (message) ->
    instance ?= new PrivateClass(message)

a = Singleton.get "Hello A"
a.echo() # => "Hello A"

b = Singleton.get "Hello B"
b.echo() # => "Hello A"

Singleton.instance # => undefined
a.instance # => undefined
Singleton.PrivateClass # => undefined
{% endhighlight %}


## Discussion

See in the above example how all instances are outputting from the same instance of the Singleton class. You can also see that the PrivateClass and instance variable are not accessible outside the Singleton class. In essence the Singleton class provides a static method get which returns only one instance of PrivateClass and only one. It also hides the PrivateClass from the world so that you can not create your own.

The idea of hiding or making private the inner workings is preference. Especially since by default CoffeeScript wraps the compiled code inside it's own IIFE (closure) allowing you to define classes without worry that it might be accessible from outside the file. In this example, note that I am using the idiomatic module export feature to emphasize the publicly accessible portion of the module. (See this discussion for further explanation on [exporting to the global namespace][1]).

[1]: http://stackoverflow.com/questions/4214731/coffeescript-global-variables

{% highlight coffeescript %}
root = exports ? this

# Create a private class that we can initialize however
# defined inside the wrapper scope.
class ProtectedClass
  constructor: (@message) ->
  echo: -> @message

class Singleton
  # You can add statements inside the class definition
  # which helps establish private scope (due to closures)
  # instance is defined as null to force correct scope
  instance = null
  # This is a static method used to either retrieve the
  # instance or create a new one.
  @get: (message) ->
    instance ?= new ProtectedClass(message)

# Export Singleton as a module
root.Singleton = Singleton
{% endhighlight %}

Note how incredibly simple coffeescript makes this design pattern. For reference and discussion on nice javascript implementations, check out [Essential JavaScript Design Patterns For Beginners](http://addyosmani.com/resources/essentialjsdesignpatterns/book/).
