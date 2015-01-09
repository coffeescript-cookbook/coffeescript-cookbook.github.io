---
layout: recipe
title: AJAX
chapter: jQuery
---
## Problem

You want to make AJAX calls using jQuery.

## Solution

{% highlight coffeescript %}
$ ?= require 'jquery' # For Node.js compatibility

$(document).ready ->
	# Basic Examples
	$.get '/', (data) ->
		$('body').append "Successfully got the page."

	$.post '/',
		userName: 'John Doe'
		favoriteFlavor: 'Mint'
		(data) -> $('body').append "Successfully posted to the page."

	# Advanced Settings
	$.ajax '/',
		type: 'GET'
		dataType: 'html'
		error: (jqXHR, textStatus, errorThrown) ->
			$('body').append "AJAX Error: #{textStatus}"
		success: (data, textStatus, jqXHR) ->
			$('body').append "Successful AJAX call: #{data}"

{% endhighlight %}

jQuery 1.5 and later have added a new, supplemental API for handling different callbacks.

{% highlight coffeescript %}
	request = $.get '/'
	request.success (data) -> $('body').append "Successfully got the page again."
	request.error (jqXHR, textStatus, errorThrown) -> $('body').append "AJAX Error: ${textStatus}."
{% endhighlight %}

## Discussion

The jQuery and $ variables can be used interchangeably. See also [Callback bindings]({{ site.baseurl }}/chapters/jquery/callback-bindings-jquery).
