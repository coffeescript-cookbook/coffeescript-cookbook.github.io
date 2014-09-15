---
layout: recipe
title: Class Methods and Instance Methods
chapter: Classes and Objects
---
## Problem

You want to create class and instance methods.

## Solution

### Class Method

{% highlight coffeescript %}

class Songs
  @_titles: 0    # Although it's directly accessible, the leading _ defines it by convention as private property.

  @get_count: ->
    @_titles

  constructor: (@artist, @title) ->
    @constructor._titles++     # Refers to <Classname>._titles, in this case Songs.titles

Songs.get_count()
# => 0

song = new Songs("Rick Astley", "Never Gonna Give You Up")
Songs.get_count()
# => 1

song.get_count()
# => TypeError: Object <Songs> has no method 'get_count'

{% endhighlight %}

### Instance Method
{% highlight coffeescript %}

class Songs
  _titles: 0    # Although it's directly accessible, the leading _ defines it by convention as private property.

  get_count: ->
    @_titles

  constructor: (@artist, @title) ->
    @_titles++

song = new Songs("Rick Astley", "Never Gonna Give You Up")
song.get_count()
# => 1

Songs.get_count()
# => TypeError: Object function Songs(artist, title) ... has no method 'get_count'

{% endhighlight %}


## Discussion

Coffeescript will store class methods (also called static methods) on the object itself rather than on the object prototype (and thus on individual object instances), which conserves memory and gives a central location to store class-level values.
