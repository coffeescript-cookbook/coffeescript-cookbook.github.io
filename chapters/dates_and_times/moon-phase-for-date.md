---
layout: recipe
title: Calculate Phase of the Moon for a Date
chapter: Dates and Times
---
## Problem

You want to find the current phase of the moon.

## Solution

The following code provides a method to calculate the phase of the moon for a given date.

{% highlight coffeescript %}
# moonPhase.coffee

# Moon-phase calculator
# Roger W. Sinnott, Sky & Telescope, June 16, 2006
# http://www.skyandtelescope.com/observing/objects/javascript/moon_phases
#
# Translated to CoffeeScript by Mike Hatfield @WebCoding4Fun

proper_ang = (big) ->
	tmp = 0
	if big > 0
		tmp = big / 360.0
		tmp = (tmp - (~~tmp)) * 360.0
	else
		tmp = Math.ceil(Math.abs(big / 360.0))
		tmp = big + tmp * 360.0

	tmp

jdn = (date) ->	
	month = date.getMonth()
	day = date.getDate()
	year = date.getFullYear()
	zone = date.getTimezoneOffset() / 1440

	mm = month
	dd = day
	yy = year

	yyy = yy
	mmm = mm
	if mm < 3
		yyy = yyy - 1
		mmm = mm + 12
     
	day = dd + zone + 0.5
	a = ~~( yyy / 100 )
	b = 2 - a + ~~( a / 4 )
	jd = ~~( 365.25 * yyy ) + ~~( 30.6001 * ( mmm+ 1 ) ) + day + 1720994.5
	jd + b if jd > 2299160.4999999
    
moonElong = (jd) ->
	dr    = Math.PI / 180
	rd    = 1 / dr
	meeDT = Math.pow((jd - 2382148), 2) / (41048480 * 86400)
	meeT  = (jd + meeDT - 2451545.0) / 36525
	meeT2 = Math.pow(meeT, 2)
	meeT3 = Math.pow(meeT, 3)
	meeD  = 297.85 + (445267.1115 * meeT) - (0.0016300 * meeT2) + (meeT3 / 545868)
	meeD  = (proper_ang meeD) * dr
	meeM1 = 134.96 + (477198.8676 * meeT) + (0.0089970 * meeT2) + (meeT3 / 69699)
	meeM1 = (proper_ang meeM1) * dr
	meeM  = 357.53 + (35999.0503 * meeT)
	meeM  = (proper_ang meeM) * dr

	elong = meeD * rd + 6.29 * Math.sin( meeM1 )
	elong = elong     - 2.10 * Math.sin( meeM )
	elong = elong     + 1.27 * Math.sin( 2*meeD - meeM1 )
	elong = elong     + 0.66 * Math.sin( 2*meeD )
	elong = proper_ang elong
	elong = Math.round elong

	moonNum = ( ( elong + 6.43 ) / 360 ) * 28
	moonNum = ~~( moonNum )

	if moonNum is 28 then 0 else moonNum

getMoonPhase = (age) ->
	moonPhase = "new Moon"
	moonPhase = "first quarter" if age > 3 and age < 11 
	moonPhase = "full Moon"     if age > 10 and age < 18
	moonPhase = "last quarter"  if age > 17 and age < 25

	if ((age is 1) or (age is 8) or (age is 15) or (age is 22))
		moonPhase = "1 day past " + moonPhase

	if ((age is 2) or (age is 9) or (age is 16) or (age is 23))
		moonPhase = "2 days past " + moonPhase

	if ((age is 3) or (age is 1) or (age is 17) or (age is 24))
		moonPhase = "3 days past " + moonPhase
	
	if ((age is 4) or (age is 11) or (age is 18) or (age is 25))
		moonPhase = "3 days before " + moonPhase
	
	if ((age is 5) or (age is 12) or (age is 19) or (age is 26))
		moonPhase = "2 days before " + moonPhase
	
	if ((age is 6) or (age is 13) or (age is 20) or (age is 27))
		moonPhase = "1 day before " + moonPhase
	
	moonPhase

MoonPhase = exports? and exports or @MoonPhase = {}

class MoonPhase.Calculator
	getMoonDays: (date) ->
		jd = jdn date 
		moonElong jd

	getMoonPhase: (date) ->		
		jd = jdn date 
		getMoonPhase( moonElong jd )
{% endhighlight %}

## Discussion

This code exposes a MoonPhase Calculator object with two methods.  Calculator -> getMoonPhase will return a text representation of the lunar phase for the date provided.

This can be used in both the browser and Node.js.

{% highlight console %}
$ node
> var MoonPhase = require('./moonPhase.js');
 undefined
> var calc = new MoonPhase.Calculator();
 undefined
> calc.getMoonPhase(new Date());
 'full moon'
> calc.getMoonPhase(new Date(1972, 6, 30));
 '3 days before last quarter'
{% endhighlight %}