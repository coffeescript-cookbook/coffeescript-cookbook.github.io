---
layout: recipe
title: where for arrays of objects
chapter: Arrays
---
## Problem

You want to get an array of objects that match your request for some properties

You have an Array of Objects, such as:

{% highlight coffeescript %}
cats = [
  {
    name: "Bubbles"
    favoriteFood: "mice"
    age: 1
  },
  {
    name: "Sparkle"
    favoriteFood: "tuna"
  },
  {
    name: "flyingCat"
    favoriteFood: "mice"
    age: 1
  }
]
{% endhighlight %}

You want to filter with some properties, like cats.where({ age: 1}) or cats.where({ age: 1, favoriteFood: "mice"})

## Solution

You can extend Array like this : 

{% highlight coffeescript %}
Array::where = (query) ->
    return [] if typeof query isnt "object"
    hit = Object.keys(query).length
    @filter (item) ->
        match = 0
        for key, val of query
            match += 1 if item[key] is val
        if match is hit then true else false

cats.where age:1
# => [ { name: 'Bubbles', favoriteFood: 'mice', age: 1 },{ name: 'flyingCat', favoriteFood: 'mice', age: 1 } ]

cats.where age:1, name: "Bubbles"
# => [ { name: 'Bubbles', favoriteFood: 'mice', age: 1 } ]

cats.where age:1, favoriteFood:"tuna"
# => []
{% endhighlight %}

## Discussion

This is an exact match. we could make it more flexible with a matcher function :

{% highlight coffeescript %}
Array::where = (query, matcher = (a,b) -> a is b) ->
    return [] if typeof query isnt "object"
    hit = Object.keys(query).length
    @filter (item) ->
        match = 0
        for key, val of query
            match += 1 if matcher(item[key], val)
        if match is hit then true else false

cats.where name:"bubbles"
# => []
# it's case sensitive

cats.where name:"bubbles", (a, b) -> "#{ a }".toLowerCase() is "#{ b }".toLowerCase()
# => [ { name: 'Bubbles', favoriteFood: 'mice', age: 1 } ]
# now it's case insensitive
{% endhighlight %}

it's more a method to deal with collection and it could be rename as "find" but popular libraries like underscore or lodash name it "where". 
