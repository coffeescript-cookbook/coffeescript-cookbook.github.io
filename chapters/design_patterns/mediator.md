---
layout: recipe
title: Mediator pattern
chapter: Design patterns
---

## Problem

Imagine 100 airplanes that need to land in airport A, which only accept one airplane landing at a time.
First strategy is to have every plane asking all its peers for landing order. This would be a very time consuming, error prone and quite tedious task.
A better option is to have all airplanes report directly to a control tower, which determines the landing schedule for all airplanes.
Each plane then simply request landing permission from the control tower, and wait for a reply.
With the latter approach, a given plane doesn't need to know about all other planes.
All communication can now be centralized and synchronously broadcasted to all.

Similarly, we can face this problem when developing software.
When an application is composed of several modules, each module is in charge of its own task but  also dependent on the state of other modules. We can have each module listening directly to each of its dependencies, maybe through the Observer pattern, and be notified when a change occur.
The problems with this approach are the same as having airplanes listening to each other. When we have tight coupling between modules, every module has to watch out for its dependencies.
A better approach would be to introduce loose coupling of modules and centralize inter-module communication. With such an approach, each module doesn't need to know about the existence of other modules, but simply listen for events they fire. This is the mediator pattern.

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
    # The 2 lines above could also have been written:
    # MEDIATOR.subscribe 'hello', @, (payload) -> console.log "Received event 'hello' with payload: #{payload}"

# Module B
class ModuleB

  constructor: ->
    MEDIATOR.wrap @ # We add event capabilities to our module
    @publish 'hello', 'I am moduleB and I just published!'
    # The 2 lines above could also have been written:
    # MEDIATOR.subscribe 'hello', @, (payload) -> console.log "Received event 'hello' with payload: #{payload}"

# Instantiate our 2 modules
new ModuleA()
new ModuleB()

{% endhighlight %}


## Discussion

As you can see we now have inter-module communication without having modules looking out for their dependencies. Hence, ModuleA won't fail if ModuleB isn't there and vice-versa.
Such an approach makes a lot of sense when developing applications such as [Netvibes](http://netvibes.com), [Google Ig](http://google.com/ig) or [Chartbeat](https://chartbeat.com/) dashboards.

The `MEDIATOR.wrap` step could also be abstracted into a parent class for convenience.
