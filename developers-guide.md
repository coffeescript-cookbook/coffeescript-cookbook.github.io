---
layout: default
title: Developer's Guide
---

# Developer's Guide

_Please help out by updating this page_

### Operating System

It works on Mac OSX. Probably works without any changes or issues on linux. A masochist could probably get it working on Windows.

## Installation

### Clone the repo

{% highlight bash %}
git clone git://github.com/coffeescript-cookbook/coffeescript-cookbook.github.com.git
{% endhighlight %}

### Create a Ruby Gemset

Optional, but highly recommended.

{% highlight bash %}
$ rvm gemset create jekyll
$ echo 'rvm gemset use jekyll' >> .rvmrc
{% endhighlight %}

### Install Required Gems

{% highlight bash %}
gem install jekyll   # needed for testing building the site
gem install RedCloth # needed for .md rendering
gem install serve    # needed for resolving .html files w/o extension
gem install thin     # optional; more efficient webserver than Webrick but not strictly necessary
{% endhighlight %}

### Install pygments

You'll need python installed for this. Macs and most linuces come with it preinstalled.

{% highlight bash %}
easy_install pygments   # for syntax highlighting
{% endhighlight %}

## Building and Viewing the Website

### Run jekyll

Open a terminal window, cd into the project folder and run jekyll from the project root.

{% highlight bash %}
jekyll --auto
{% endhighlight %}

Leave this window running while you work. Any time you change a file, jekyll will rerender it into the `_site` folder.

### Run serve

Open another terminal window, cd into the project folder, then cd into the `_site` subfolder, and run

{% highlight bash %}
serve
{% endhighlight %}

This will start a webserver in the `_site` folder. Open a browser and visit `http://localhost:4000/` and you should see the site.

## Minutiae and Other Trivialities

jekyll can take a second or two to catch up when you save a file. If you edit a file and don't see the changes in your browser, give it a second or two and try again. You may also see Maruku warnings, but as long as it prints `Successfully generated site` you should be alright.
