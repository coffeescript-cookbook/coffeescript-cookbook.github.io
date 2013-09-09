---
layout: recipe
title: Mediator pattern
chapter: Design patterns
---

## Problem

Imagine 100 air planes in the sky in need to land at airport A, which only accept one plane landing at a time.
A first strategy would be for each plane to ask to each of its peers who need to go first, second, etc.
This would be a very time consuming, error prone and quite tedious task.
A better option would be to all planes to report to a control tower, and having it sorting out the landing scheduling.
Each plane would then simply need to tell the control tower it needs to land, and wait for a reply from the control tower.
With this latter approach, a given plane doesn't need to know about other planes up there.
All communication can now be centralized and synchronously broadcasted to all.

Similarly, we can face this problem when developing software.
When an application is made of several modules, each in charge of its own task but depending on the state of some other modules, we can have each module listening directly to each of its dependency, maybe through the Observer pattern, and be notified when a change occur.
The problems with this approach are the same as with the planes all talking directly to each other.
We have tight coupling between modules, if a dependency fails our module fails and each module has to be aware of the existence of its dependencies.
A better approach would introduce loose coupling of modules and would have their communication centralized.
With such an approach, each module doesn't need to know about the existence of other modules, but simply be listening for events some of them may fire.
The mediator pattern is the one that will allow all of that.

## Solution

{% highlight coffeescript %}

# Our mediator class
class Mediator

  constructor: ->
    @channels = {}

  subscribe: (event, context, callback) =>
    @channels[event] or= []
    @channels[event].push callback.bind context

  publish: (event, args...) =>
    return false if not @channels[event]
    callback(args) for callback in @channels[event]

  wrap: (obj) ->
    obj.subscribe = @subscribe
    obj.publish = @publish
    obj

# Instantiate our Mediator
MEDIATOR = new Mediator()

# Module A
class ModuleA

  constructor: ->
    MEDIATOR.wrap @  # We add event capabilities to our module
    @subscribe 'hello', @, (payload) -> console.log "(ModuleA) Received event 'hello' with payload: #{payload}"

# Module B
class ModuleB

  constructor: ->
    MEDIATOR.wrap @ # We add event capabilities to our module
    @publish 'hello', 'I am moduleB and I just published!'

# Instantiate our 2 modules
new ModuleA()
new ModuleB()

{% endhighlight %}


## Discussion

As you can see we now have inter-module communication without having each module dependent on the existence of other.
ModuleA won't fail if ModuleB isn't there and vice-versa.
Such an approach makes a lot of sense when developing applications such as [Netvibes](http://netvibes.com), [Google Ig](http://google.com/ig) or [Chartbeat](https://chartbeat.com/) dashboards.

The `MEDIATOR.wrap` step could also be abstracted away in a mother class for more convenience.
