---
layout: recipe
title: Embedding JavaScript
chapter: Syntax
---
## Problem

You want to include some found/pre-written JavaScript code inline with your CoffeeScript.

## Solution

Wrap the JavaScript with backticks:

{% highlight coffeescript %}
`function greet(name) {
return "Hello "+name;
}`

# Back to CoffeeScript
greet "Coffee"
# => "Hello Coffee"
{% endhighlight %}

## Discussion

This is a simple way to integrate small snippets of JavaScript code into your CoffeeScript without converting it over to use CoffeeScript syntax. As shown in the [CoffeeScript Language Reference](http://jashkenas.github.com/coffee-script/#embedded) you can mix the two languages to a certain extent:

{% highlight coffeescript %}
hello = `function (name) {
return "Hello "+name
}`
hello "Coffee"
# => "Hello Coffee"

{% endhighlight %}

Here the `hello` variable is still in CoffeeScript, but is assigned a function written in JavaScript.
