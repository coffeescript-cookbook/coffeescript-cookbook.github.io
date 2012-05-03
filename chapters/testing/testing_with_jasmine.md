---
layout: recipe
title: With Jasmine
chapter: Testing
---
## Problem

You have some CoffeeScript and you want to verify that it is working correctly.  You decide to the use
Jasmine test framework for your tests.

{% highlight coffeescript %}

# calculatorSpec.coffee

describe 'Calculator', ->

	calculator = null

	beforeEach ->
		calculator = new Calculator()

	it 'can add two positive numbers', ->
		result = calculator.add 2, 3
		expect(result).toBe 5

	it 'can handle negative number addition', ->
		result = calculator.add -10, 5
		expect(result).toBe -5

	it 'can subtract two positive numbers', ->
		result = calculator.subtract 10, 6
		expect(result).toBe 4

	it 'can handle negative number subtraction', ->
		result = calculator.subtract 4, -6
		expect(result).toBe 10

{% endhighlight %}

## Discussion

This test describes our Calculator and tests that it can add and subtract positive and negative numbers.

To test our specification (spec), we need to set up our test framework.  Refer to the <a href="http://pivotal.github.com/jasmine/" target="_blank">Jasmine</a> website to download the framework.  It's super easy.  In the following example, we have our SpecRunner.html set up referencing the Jasmine JavaScript llibrary and css files.  Our tests are also referenced.  You can see the result of running out tests below.
<img src="images/jasmine_failing_all.jpg" alt="All failing tests" />

The tests are all failing, complaining that Calculator does not exist.  Of course it doesn't, we haven't created it yet.  Let's do that now.

{% highlight coffeescript %}

# calculator.coffee

window.Calculator = class Calculator

{% endhighlight %}

When we re-run we see the following.

<img src="images/jasmine_failing_better.jpg" alt="Still failing, but better" />

We now have 4 failures instead of our previous 8.  That's a 50% improvment with 1 line of code.  Not bad.

Let's implement our methods and see if we can get these tests to pass.

{% highlight coffeescript %}

# calculator.coffee

window.Calculator = class Calculator
	add: (a, b) ->
		a + b

	subtract: (a, b) ->
		a - b 

{% endhighlight %}

When we refresh we see they all pass.

<img src="images/jasmine_passing.jpg" alt="All passing" />