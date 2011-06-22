---
layout: recipe
title: Basic HTTP Client
chapter: Networking
---

## Problem

You want to create a HTTP client.

## Solution

In this recipe, we'll use [node.js](http://nodejs.org/)'s HTTP library. We'll go from a simple GET request example to a client which returns the external IP of a computer.

### GET something

{% highlight coffeescript %}
http = require 'http'

http.get { host: 'www.google.com' }, (res) ->
    console.log res.statusCode
{% endhighlight %}

The `get` function, from node.js's `http` module, issues a GET request to a HTTP server. The response comes in the form of a callback, which we can handle in a function. This example merely prints the response status code. Check it out:

{% highlight console %}
$ coffee http-client.coffee 
200

{% endhighlight %}

### What's my IP?

If you are inside a network which relies on [NAT](http://en.wikipedia.org/wiki/Network_address_translation) such as a LAN, you probably have faced the issue of finding out what's your external IP address. Let's write a small coffeescript for this.

{% highlight coffeescript %}
http = require 'http'

http.get { host: 'checkip.dyndns.org' }, (res) ->
    data = ''
    res.on 'data', (chunk) ->
        data += chunk.toString()
    res.on 'end', () ->
        console.log data.match(/([0-9]+\.){3}[0-9]+/)[0]
{% endhighlight %}

We can get the data from the result object by listening on its `'data'` event; and know that it has come to an end once the `'end'` event has been fired. When that happens, we can do a simple regular expression match to extract our IP address. Try it:

{% highlight console %}
$ coffee http-client.coffee 
123.123.123.123
{% endhighlight %}

## Discussion

Note that `http.get` is a shortcut of `http.request`. The latter allows you to issue HTTP requests with different methods, such as POST or PUT.

For API and overall information on this subject, check node.js's [http](http://nodejs.org/docs/latest/api/http.html) and [https](http://nodejs.org/docs/latest/api/https.html) documentation pages. Also, the [HTTP spec](http://www.ietf.org/rfc/rfc2616.txt) might come in handy.

### Exercises

* Create a client for the key-value store HTTP server, from the [Basic HTTP Server](basic-http-server) recipe.

