---
layout: recipe
title: Bi-Directional Client
chapter: Networking
---
## Problem

You want to a persistent service over a network, one which maintains an on-going connection with its clients.

## Solution

Create a bi-directional TCP client.

### In Node.js

{% highlight coffeescript %}
net = require 'net'

domain = 'localhost'
port = 9001

ping = (socket, delay) ->
	console.log "Pinging server"
	socket.write "Ping"
	nextPing = -> ping(socket, delay)
	setTimeout nextPing, delay

connection = net.createConnection port, domain

connection.on 'connect', () ->
	console.log "Opened connection to #{domain}:#{port}"
	ping connection, 2000

connection.on 'data', (data) ->
	console.log "Received: #{data}"

connection.on 'end', (data) ->
	console.log "Connection closed"
	process.exit()
{% endhighlight %}

### Example Usage

Accessing the [Bi-Directional Server]({{ site.baseurl }}/chapters/networking/bi-directional-server):

{% highlight console %}
$ coffee bi-directional-client.coffee
Opened connection to localhost:9001
Pinging server
Received: You have 0 peers on this server
Pinging server
Received: You have 0 peers on this server
Pinging server
Received: You have 1 peer on this server
[...]
Connection closed
{% endhighlight %}

## Discussion

This particular example initiates contact with the server and starts the conversation in the @connection.on 'connect'@ handler.  The bulk of the work in a real client, however, will lie in the @connection.on 'data'@ handler, which processes output from the server.  The @ping@  function only recurses in order to illustrate continuous communication with the server and can be removed from a real client.

See also the [Bi-Directional Server]({{ site.baseurl }}/chapters/networking/bi-directional-server), [Basic Client]({{ site.baseurl }}/chapters/networking/basic-client), and [Basic Server]({{ site.baseurl }}/chapters/networking/basic-server) recipes.

### Exercises

* Add support for choosing the target domain and port based on command-line arguments or from a configuration file.
