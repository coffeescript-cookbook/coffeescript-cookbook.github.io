---
layout: recipe
title: MongoDB
chapter: Databases
---
## Problem

You need to interface with a MongoDB database.

## Solution

### For Node.js

### Setup
* [Install MongoDB](http://www.mongodb.org/display/DOCS/Quickstart) on your computer if you have not already.

* [Install the native MongoDB module](https://github.com/christkv/node-mongodb-native).

#### Saving Records

{% highlight coffeescript %}
mongo = require 'mongodb'

server = new mongo.Server "127.0.0.1", 27017, {}

client = new mongo.Db 'test', server, {w:1}

# save() updates existing records or inserts new ones as needed
exampleSave = (dbErr, collection) ->
	console.log "Unable to access database: #{dbErr}" if dbErr
	collection.save { _id: "my_favorite_latte", flavor: "honeysuckle" }, (err, docs) ->
		console.log "Unable to save record: #{err}" if err
		client.close()

client.open (err, database) ->
	client.collection 'coffeescript_example', exampleSave
{% endhighlight %}

#### Finding Records

{% highlight coffeescript %}
mongo = require 'mongodb'

server = new mongo.Server "127.0.0.1", 27017, {}

client = new mongo.Db 'test', server, {w:1}

exampleFind = (dbErr, collection) ->
	console.log "Unable to access database: #{dbErr}" if dbErr
	collection.find({ _id: "my_favorite_latte" }).nextObject (err, result) ->
		if err
			console.log "Unable to find record: #{err}"
		else
			console.log result # => {  id: "my_favorite_latte", flavor: "honeysuckle" }
		client.close()

client.open (err, database) ->
	client.collection 'coffeescript_example', exampleFind
{% endhighlight %}

### For Browsers

A [REST-based interface](https://github.com/tdegrunt/mongodb-rest) is in the works.  This will provide AJAX-based access.

## Discussion

This recipe breaks the *save* and *find* into separate examples in order to separate the MongoDB-specific concerns from the task of connection and callback management.  The [async module](https://github.com/caolan/async) can help with that.
