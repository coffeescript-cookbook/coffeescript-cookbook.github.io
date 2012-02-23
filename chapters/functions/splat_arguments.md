---
layout: recipe
title: Splat Arguments
chapter: Functions
---
## Problem

Your function will be called with a varying number of arguments.

## Solution

Use _splats_.

{% highlight coffeescript %}
loadTruck = (firstDibs, secondDibs, tooSlow...) ->
	truck:
		driversSeat: firstDibs
		passengerSeat: secondDibs
		trunkBed: tooSlow

loadTruck("Amanda", "Joel")
# => { truck: { driversSeat: "Amanda", passengerSeat: "Joel", trunkBed: [] } }

loadTruck("Amanda", "Joel", "Bob", "Mary", "Phillip")
# => { truck: { driversSeat: "Amanda", passengerSeat: "Joel", trunkBed: ["Bob", "Mary", "Phillip"] } }
{% endhighlight %}

With a trailing argument:

{% highlight coffeescript %}
loadTruck = (firstDibs, secondDibs, tooSlow..., leftAtHome) ->
	truck:
		driversSeat: firstDibs
		passengerSeat: secondDibs
		trunkBed: tooSlow
	taxi:
		passengerSeat: leftAtHome

loadTruck("Amanda", "Joel", "Bob", "Mary", "Phillip", "Austin")
# => { truck: { driversSeat: 'Amanda', passengerSeat: 'Joel', trunkBed: [ 'Bob', 'Mary', 'Phillip' ] }, taxi: { passengerSeat: 'Austin' } }

loadTruck("Amanda")
# => { truck: { driversSeat: "Amanda", passengerSeat: undefined, trunkBed: [] }, taxi: undefined }
{% endhighlight %}

## Discussion

By adding an ellipsis (`...`) next to no more than one of a function's arguments, CoffeeScript will combine all of the argument values not captured by other named arguments into a list.  It will serve up an empty list even if some of the named arguments were not supplied.
