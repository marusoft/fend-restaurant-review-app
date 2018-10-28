# Restaurant Review App
---

![Restaurant](./img/1.jpg)

#### _Restaurant Reviews_

## Table of Contents
* Restaurant Reviews App Overview
* Responsive Design
* Accessibility
* Offline Availability
* Dependencies
* Installation
* App link
* Author

## Restaurant Reviews App Overview
I incrementally convert a static webpage to a mobile-ready web application. And I take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. I also add a service worker to begin the process of creating a seamless offline experience for your users.

## Responsive Design
* All content is responsive and displays on a range of display sizes.
* Content make use of available screen real estate and display correctly at all screen sizes.
* Images in the site are sized appropriate to the viewport and do not crowd or overlap other elements in the
  browser, regardless of viewport size.
* Restaurants and Images are displayed in all viewports. The detail page includes a map, hours
  elements and reviews in all viewports.  

## Accessibility
* All content-related images include appropriate alternate text that clearly describes the content of the image.
* Focus is appropriately managed allowing users to noticeably tab through each of the important elements of the page.
* Elements on the page use the appropriate semantic elements. For those elements in which a semantic element is not available, appropriate ARIA roles are defined.

## Offline Availability
 The site uses a service worker to cache responses to requests for site assets. Visited pages are rendered when there is no network access.

## Dependencies
The following were the dependencies that was used during the implementation of the **Restaurant Reviews** projects :

**Restaurant Reviews Starter Code**
[Starter Code](https://github.com/udacity/mws-restaurant-stage-1)

**Leaflet.js and Mapbox**:
This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information. 

**ES6**
Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code. 

**Mobile Web Specialist-walkthrough**
[MWS](https://alexandroperez.github.io/mws-walkthrough/)

## Installation

```
$ git clone https://github.com/marusoft/fend-restaurant-review-app.git

```

```
$ cd fend-restaurant-review-app

```

### Start up a simple HTTP server to serve up the site files on your local computer using Python

In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, 
spin up the server with `python -m SimpleHTTPServer 8000` 
(or some other port, if port 8000 is already in use.) 
For Python 3.x, you can use `python3 -m http.server 8000`. 
If you don't have Python installed, [Download and Install Python](https://www.python.org/) 

### With your server running, visit the site: 

`http://localhost:8000`


## App link

[Load](https://marusoft.github.io/fend-restaurant-review-app/)

## Author

**Alimi Kehinde Maruf**