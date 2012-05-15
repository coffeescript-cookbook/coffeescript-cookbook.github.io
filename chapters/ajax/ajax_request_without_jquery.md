---
layout: recipe
title: AJAX Request Without jQuery
chapter: AJAX
---
## Problem

You want to load data from your server via AJAX without using the jQuery library.

## Solution

You will use the native <a href="http://en.wikipedia.org/wiki/XMLHttpRequest" target="_blank">XMLHttpRequest</a> object.

Begin by making sure the XMLHttpRequest object exsits.

{% highlight coffeescript %}
# XMLHttpRequest.coffee

if (typeof @XMLHttpRequest == "undefined")
  console.log 'XMLHttpRequest is undefined'

  @XMLHttpRequest = ->
    try
      return new ActiveXObject("Msxml2.XMLHTTP.6.0")
    catch error
    try
      return new ActiveXObject("Msxml2.XMLHTTP.3.0")
    catch error
    try
      return new ActiveXObject("Microsoft.XMLHTTP")
    catch error
    throw new Error("This browser does not support XMLHttpRequest.")
{% endhighlight %}

We can also set up some status codes.

{% highlight coffeescript %}
READYSTATE_UNINITIALIZED = 0
READYSTATE_LOADING = 1
READYSTATE_LOADED = 2
READYSTATE_INTERACTIVE = 3
READYSTATE_COMPLETE = 4
{% endhighlight %}

Let's set up a simple test HTML page with a button.

{% highlight html %}
<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title>XMLHttpRequest Tester</title>
</head>
<body>
	<h1>XMLHttpRequest Tester</h1>
	<button id="loadDataButton">Load Data</button>
	
	<script type="text/javascript" src="XMLHttpRequest.js"></script>
</body>
</html>
{% endhighlight %}

Let's finish our XMLHttpRequest.coffee by adding a 'click' event listener then create our XMLHttpRequest object.

{% highlight coffeescript linenos %}
loadDataFromServer = ->
  req = new XMLHttpRequest()

  req.addEventListener 'readystatechange', ->
    if req.readyState is READYSTATE_COMPLETE
      if req.status is 200 or req.status is 304
        data = eval '(' + req.responseText + ')'
        console.log 'data message: ', data.message
      else
        console.log 'Error loading data...'
        
  req.open 'GET', 'data.json', false
  req.send()

loadDataButton = document.getElementById 'loadDataButton'
loadDataButton.addEventListener 'click', loadDataFromServer, false
{% endhighlight %}

## Discussion

In the above code, we create a new XMLHttpRequest instance on line 2.  Then, we add an event listener for the readystatechange event.  This fires whenever the XMLHttpRequest readyState changes.

In the event handler we check to see if the readyState = READYSTATE_COMPLETE (value of 4).  Then, we check to see if the status is either 200 or 304, both values are success indicators.

If the request was indeed successful, we eval the JSON returned from the server and assign it to a data variable.  At this point, we can use the returned data in any way we need to.

The last thing we need to do is actually make our request.

Line 12 opens a 'GET' request to retreive the data.json file.

Line 13 sends our request to the server. 
