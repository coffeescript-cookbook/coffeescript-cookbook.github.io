---
layout: recipe
title: Callback bindings # using => instead of ->
chapter: jQuery
---
## Problem

You want to bind a callback function to an object.

## Solution

{% highlight coffeescript %}
$ ->
  class Basket
    constructor: () ->
      @products = []

      $('.product').click (event) =>
        @add $(event.target).attr 'id'

    add: (product) ->
      @products.push product
      console.log @products

  new Basket()
{% endhighlight %}

## Discussion

By using the fat arrow (`=>`) instead of the normal arrow (`->`) the function gets
automatically bound to the object and can access the `@-variable`.
