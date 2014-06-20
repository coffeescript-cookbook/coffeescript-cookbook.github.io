---
layout: recipe
title: Observer Pattern
chapter: Design patterns
---
## Problem

You have to notify some objects about an event happen

## Solution

Use an [Observer Pattern](http://en.wikipedia.org/wiki/Observer_pattern)

{% highlight coffeescript %}

class PostOffice
	constructor: () ->
		@subscribers = []
	notifyNewItemReleased: (item) ->
		subscriber.callback(item) for subscriber in @subscribers when subscriber.item is item
	subscribe: (to, onNewItemReleased) ->
		@subscribers.push {'item':to, 'callback':onNewItemReleased}

class MagazineSubscriber
	onNewMagazine: (item) ->
		alert "I've got new "+item

class NewspaperSubscriber
	onNewNewspaper: (item) ->
		alert "I've got new "+item

postOffice = new PostOffice()
sub1 = new MagazineSubscriber()
sub2 = new NewspaperSubscriber()
postOffice.subscribe "Mens Health", sub1.onNewMagazine
postOffice.subscribe "Times", sub2.onNewNewspaper
postOffice.notifyNewItemReleased "Times"
postOffice.notifyNewItemReleased "Mens Health"

{% endhighlight %}

## Discussion

Here you have an observer object (PostOffice) and observable objects (MagazineSubscriber, NewspaperSubscriber).
To be notified about an event of publishing new periodical observable object should make subscription on PostOffice.
Every of subscribed objects is stored internally in the PostOffice array of subscriptions.
Every subscriber is notified on new concrete periodical is published.
