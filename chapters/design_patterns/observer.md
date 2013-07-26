---
layout: recipe Observer Pattern
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
  sendNewItemReleased: (item) ->
    subscriber.callback(item) for subscriber in @subscribers when subscriber.item is item
    return
  subscribe: (to, onNewItemReleased) ->
    @subscribers.push({'item':to, 'callback':onNewItemReleased})
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
postOffice.sendNewItemReleased "Times"
postOffice.sendNewItemReleased "Mens Health"
{% endhighlight %}

## Discussion

Here you have an observer object (PostOffice) and observable objects (MagazineSubscriber, NewspaperSubscriber). 
To be notified about an event of publishing new periodical observable object should make subscribtion on PostOffice. 
Every of subscribed objects is stored internaly in the PostOffice array of subscribers. 
Every subscriber is notified on new concrete periodical is published.
