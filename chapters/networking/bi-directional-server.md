---
layout: recipe
title: Bi-Directional Server
chapter: Networking
---
## Problem

You want to provide a persistent service over a network, one which maintains an on-going connection with a client.

## Solution

Create a bi-directional TCP server.

### In Node.js

{% highlight coffeescript %}
net = require 'net'

domain = 'localhost'
port = 9001

server = net.createServer (socket) ->
	console.log "New connection from #{socket.remoteAddress}"

	socket.on 'data', (data) ->
		console.log "#{socket.remoteAddress} sent: #{data}"
		others = server.connections - 1
		socket.write "You have #{others} #{others == 1 and "peer" or "peers"} on this server"

console.log "Listening to #{domain}:#{port}"
server.listen port, domain
{% endhighlight %}

### Example Usage

Accessed by the [Bi-Directional Client]({{ site.baseurl }}/chapters/networking/bi-directional-client):

{% highlight console %}
$ coffee bi-directional-server.coffee
Listening to localhost:9001
New connection from 127.0.0.1
127.0.0.1 sent: Ping
127.0.0.1 sent: Ping
127.0.0.1 sent: Ping
[...]
{% endhighlight %}

## Discussion

The bulk of the work lies in the @socket.on 'data'@ handler, which processes all of the input from the client.  A real server would likely pass the data onto another function to process it and generate any responses so that the original handler.

See also the [Bi-Directional Client]({{ site.baseurl }}/chapters/networking/bi-directional-client), [Basic Client]({{ site.baseurl }}/chapters/networking/basic-client), and [Basic Server]({{ site.baseurl }}/chapters/networking/basic-server) recipes.

### Exercises

* Add support for choosing the target domain and port based on command-line arguments or on a configuration file.
