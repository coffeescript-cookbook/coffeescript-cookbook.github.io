---
layout: default
title: Developer's Guide
---

# Developer's Guide

_Please help out by updating this page_

### Operating System

It works on Mac OS X. Probably works without any changes or issues on Linux.
A masochist could probably get it working on Windows.

## Installation

### Clone the repo

{% highlight bash %}
git clone git://github.com/coffeescript-cookbook/coffeescript-cookbook.github.com.git
{% endhighlight %}

### Ruby environment

You probably want to have [RVM](http://rvm.io/) installed.

The project includes a `.ruby-version` file locked to
*1.9.3* since that is what Github Pages are currently using.

There is also a `.ruby-gemset` that is set to *coffeescript-cookbook*

### Required dependencies

We are using [Bundler](http://bundler.io/) to install the required Ruby dependencies.

{% highlight bash %}
bundle install
{% endhighlight %}

#### Install pygments

You'll need python installed for this.
Macs and most Linuces come with it preinstalled.

{% highlight bash %}
easy_install pygments # for syntax highlighting
{% endhighlight %}

## Building and Viewing the Website

Open a terminal window, cd into the project folder and run `foreman start` from the project root.

{% highlight bash %}
foreman start
{% endhighlight %}

Leave this window running while you work.
Any time you change a file, jekyll will rerender it into the `_site` folder.

Open a browser and visit <http://localhost:4000/> and you should see the site.

## Minutiae and Other Trivialities

Jekyll can take a second or two to catch up when you save a file. 
If you edit a file and don't see the changes in your browser, give it a second or two and try again.
As long as it prints `Successfully generated site` you should be alright.
