---
layout: recipe
title: Code Reuse on Client and Server
chapter: Syntax
---
## Problem

You have created some functionality in CoffeeScript that you wish to use on the client with a web browser and on the server with Node.js.

## Solution

Export the functionality in the following manner:

{% highlight coffeescript %}

# simpleMath.coffee

# these methods are private
add = (a, b) ->
	a + b

subtract = (a, b) ->
	a - b

square = (x) ->
	x * x

# create a namespace to export our public methods
SimpleMath = exports? and exports or @SimpleMath = {}

# items attached to our namespace are available in Node.js as well as client browsers
class SimpleMath.Calculator
	add: add
	subtract: subtract
	square: square

{% endhighlight %}

## Discussion

In the above example, we create a new namespace called SimpleMath.  If `export` is available, our class is exported as a Node.js module.  If `export` is *not* available, then SimpleMath is added to the global namespace and available to our web page.

In Node.js, we can include our module using the `require` command.

{% highlight console %}

$ node

> var SimpleMath = require('./simpleMath');
undefined
> var Calc = new SimpleMath.Calculator();
undefined
> console.log("5 + 6 = ", Calc.add(5, 6));
5 + 6 =  11
undefined
> 

{% endhighlight %}

In our web page, we can include our module by including it as a script.

{% highlight html %}

<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title>SimpleMath Module Example</title>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	<script src="simpleMath.js"></script>
	<script>
		jQuery(document).ready(function	(){
			var Calculator = new SimpleMath.Calculator();
			var result = $('<li>').html("5 + 6 = " + Calculator.add(5, 6));
			$('#SampleResults').append(result);	
		});
	</script>
</head>
<body>
	<h1>A SimpleMath Example</h1>
	<ul id="SampleResults"></ul>
</body>
</html>

{% endhighlight %}

Result:

#A SimpleMath Example
* 5 + 6 = 11