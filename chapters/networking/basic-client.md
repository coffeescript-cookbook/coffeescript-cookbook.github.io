---
layout: recipe
title: Basic Client
chapter: Networking
---
## Problem

You want to access a service provided over the network.

## Solution

Create a basic TCP client.

### In Node.js

{% highlight coffeescript %}
net = require 'net'

domain = 'localhost'
port = 9001

connection = net.createConnection port, domain

connection.on 'connect', () ->
	console.log "Opened connection to #{domain}:#{port}."

connection.on 'data', (data) ->
	console.log "Received: #{data}"
	connection.end()
{% endhighlight %}

### Example Usage

Accessing the [Basic Server]({{ site.baseurl }}/chapters/networking/basic-server):

{% highlight console %}
$ coffee basic-client.coffee
Opened connection to localhost:9001
Received: Hello, World!
{% endhighlight %}

## Discussion

The most important work takes place in the _connection.on 'data'_ handler, where the client receives its response from the server and would most likely arrange for responses to it.

See also the [Basic Server]({{ site.baseurl }}/chapters/networking/basic-server), [Bi-Directional Client]({{ site.baseurl }}/chapters/networking/bi-directional-client), and [Bi-Directional Server]({{ site.baseurl }}/chapters/networking/bi-directional-server) recipes.

### Exercises

* Add support for choosing the target domain and port based on command-line arguments or from a configuration file.
