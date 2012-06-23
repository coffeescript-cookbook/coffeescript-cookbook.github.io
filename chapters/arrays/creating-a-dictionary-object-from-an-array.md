---
layout: recipe
title: Creating a dictionary Object from an Array
chapter: Arrays
---
## Problem

You have an Array of Objects, such as:

{% highlight coffeescript %}
cats = [
  {
    name: "Bubbles"
    age: 1
  },
  {
    name: "Sparkle"
    favoriteFood: "tuna"
  }
]
{% endhighlight %}

But you want to access it as a dictionary by key, like `cats["Bubbles"]`.

## Solution

You need to convert your array into an Object. Use reduce for this.

{% highlight coffeescript %}
# key = The key by which to index the dictionary
Array::toDict = (key) ->
  @reduce ((dict, obj) -> dict[ obj[key] ] = obj if obj[key]?; return dict), {}
{% endhighlight %}

To use this:

{% highlight coffeescript %}
  catsDict = cats.toDict('name')
  catsDict["Bubbles"]
  # => { age: 1, name: "Bubbles" }
{% endhighlight %}

## Discussion

Alternatively, you can use an Array comprehension:

{% highlight coffeescript %}
Array::toDict = (key) ->
  dict = {}
  dict[obj[key]] = obj for obj in this when obj[key]?
  dict
{% endhighlight %}

If you use Underscore.js, you can create a mixin:

{% highlight coffeescript %}
_.mixin toDict: (arr, key) ->
    throw new Error('_.toDict takes an Array') unless _.isArray arr
    _.reduce arr, ((dict, obj) -> dict[ obj[key] ] = obj if obj[key]?; return dict), {}
catsDict = _.toDict(cats, 'name')
catsDict["Sparkle"]
# => { favoriteFood: "tuna", name: "Sparkle" }
{% endhighlight %}