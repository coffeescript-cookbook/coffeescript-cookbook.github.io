---
layout: recipe
title: Ajax Request Without jQuery
chapter: Ajax
---
## Problem

You want to load data from your server via AJAX without using the jQuery library.

## Solution

You will use the native <a href="http://en.wikipedia.org/wiki/XMLHttpRequest" target="_blank">XMLHttpRequest</a> object.

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

When the button is clicked, we want to send an Ajax request to the server to retrieve some data.  For this sample, we have a small JSON file.

{% highlight javascript %}
// data.json
{
  message: "Hello World"
}
{% endhighlight %}

Next, create the CoffeeScript file to hold the page logic.  The code in this file creates a function to be called when the Load Data button is clicked.

{% highlight coffeescript linenos %}
# XMLHttpRequest.coffee
loadDataFromServer = ->
  req = new XMLHttpRequest()

  req.addEventListener 'readystatechange', ->
    if req.readyState is 4                        # ReadyState Complete
      successResultCodes = [200, 304]
      if req.status in successResultCodes
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

In the above code we grab a handle to the button in our HTML (line 16) and add a *click* event listener (line 17).  In our event listener, we define our callback function as loadDataFromServer.

We define our loadDataFromServer callback beginning on line 2.

We create a XMLHttpRequest request object (line 3) and add a *readystatechange* event handler.  This fires whenever the request's readyState changes.

In the event handler we check to see if the readyState = 4, indicating the request has completed.  Then, we check the request status value.  Both 200 or 304 represent a successful request.  Anything else represents an error condition.

If the request was indeed successful, we eval the JSON returned from the server and assign it to a data variable.  At this point, we can use the returned data in any way we need to.

The last thing we need to do is actually make our request.

Line 13 opens a 'GET' request to retrieve the data.json file.

Line 14 sends our request to the server.

## Older Browser Support

If your application needs to target older versions of Internet Explorer, you will need to ensure the XMLHttpRequest object exists.  You can do this by including this code before creating the XMLHttpRequest instance.

{% highlight coffeescript %}
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

This code ensures the XMLHttpRequest object is available in the global namespace.
