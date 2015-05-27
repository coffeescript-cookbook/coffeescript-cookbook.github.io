---
layout: recipe
title: Interpreter Pattern
chapter: Design Patterns
---
## Problem

Someone else needs to run parts of your code in a controlled fashion.  Alternately, your language of choice cannot express the problem domain in a concise fashion.

## Solution

Use the Interpreter pattern to create a domain-specific language that you translate into specific code.

Assume, for example, that the user wants to perform math inside of your application.  You could let them forward code to _eval_ but that would let them run arbitrary code.  Instead, you can provide a miniature "stack calculator" language that you parse separately in order to only run mathematical operations while reporting more useful error messages.

{% highlight coffeescript %}
class StackCalculator
	parseString: (string) ->
		@stack = [ ]
		for token in string.split /\s+/
			@parseToken token

		if @stack.length > 1
			throw "Not enough operators: numbers left over"
		else
			@stack[0]

	parseToken: (token, lastNumber) ->
		if isNaN parseFloat(token) # Assume that anything other than a number is an operator
			@parseOperator token
		else
			@stack.push parseFloat(token)

	parseOperator: (operator) ->
		if @stack.length < 2
			throw "Can't operate on a stack without at least 2 items"

		right = @stack.pop()
		left = @stack.pop()

		result = switch operator
			when "+" then left + right
			when "-" then left - right
			when "*" then left * right
			when "/"
				if right is 0
					throw "Can't divide by 0"
				else
					left / right
			else
				throw "Unrecognized operator: #{operator}"

		@stack.push result

calc = new StackCalculator

calc.parseString "5 5 +" # => { result: 10 }

calc.parseString "4.0 5.5 +" # => { result: 9.5 }

calc.parseString "5 5 + 5 5 + *" # => { result: 100 }

try
	calc.parseString "5 0 /"
catch error
	error # => "Can't divide by 0"

try
	calc.parseString "5 -"
catch error
	error # => "Can't operate on a stack without at least 2 items"

try
	calc.parseString "5 5 5 -"
catch error
	error # => "Not enough operators: numbers left over"

try
	calc.parseString "5 5 5 foo"
catch error
	error # => "Unrecognized operator: foo"
{% endhighlight %}

## Discussion

As an alternative to writing our own interpreter, you can co-op the existing CoffeeScript interpreter in a such a way that its normal syntax makes for more natural (and therefore more comprehensible) expressions of your algorithm.

{% highlight coffeescript %}
class Sandwich
	constructor: (@customer, @bread='white', @toppings=[], @toasted=false)->

white = (sw) ->
	sw.bread = 'white'
	sw

wheat = (sw) ->
	sw.bread = 'wheat'
	sw

turkey = (sw) ->
	sw.toppings.push 'turkey'
	sw

ham = (sw) ->
	sw.toppings.push 'ham'
	sw

swiss = (sw) ->
	sw.toppings.push 'swiss'
	sw

mayo = (sw) ->
	sw.toppings.push 'mayo'
	sw

toasted = (sw) ->
	sw.toasted = true
	sw

sandwich = (customer) ->
	new Sandwich customer

to = (customer) ->
	customer

send = (sw) ->
	toastedState = sw.toasted and 'a toasted' or 'an untoasted'

	toppingState = ''
	if sw.toppings.length > 0
		if sw.toppings.length > 1
			toppingState = " with #{sw.toppings[0..sw.toppings.length-2].join ', '} and #{sw.toppings[sw.toppings.length-1]}"
		else
			toppingState = " with #{sw.toppings[0]}"
	"#{sw.customer} requested #{toastedState}, #{sw.bread} bread sandwich#{toppingState}"

send sandwich to 'Charlie' # => "Charlie requested an untoasted, white bread sandwich"
send turkey sandwich to 'Judy' # => "Judy requested an untoasted, white bread sandwich with turkey"
send toasted ham turkey sandwich to 'Rachel' # => "Rachel requested a toasted, white bread sandwich with turkey and ham"
send toasted turkey ham swiss sandwich to 'Matt' # => "Matt requested a toasted, white bread sandwich with swiss, ham and turkey"
{% endhighlight %}

This example allows for layers of functions by how it returns the modified object so that outer functions can modify it in turn.  By borrowing a verb and the preposition _to_, the example lends natural grammar to the construction and ends up reading like an actual sentence when used correctly.  This way, both your CoffeeScript skills and your existing language skills can help catch code problems.
