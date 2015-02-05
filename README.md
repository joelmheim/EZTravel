# EZTravel
Hackathon group 4: Amazing travel receipt recording app

The app:
========
Cloud based web app for recording travel expenses and coupling them with corporate travel entry.

The app consists of:
1. A service for communicating with the corporate travel system
1. A service that stores receipts
1. A web app that lets a user browse planned trips and register receipts

# Installation
The following steps are required to locally install and test this set of services.

## General
* `npm install -g express`
* `npm install -g bower`
* `npm install -g nodemon`
* `npm install -g grunt`

## client

In the client/ directory run
`npm install && bower install`

### Build & development

Run `grunt` for building and `grunt serve` for preview.

### Testing

Running `grunt test` will run the unit tests with karma.

# Server
In the server/ directory run
  * `npm install`
  * To run all tests
    * `grunt`
  * To start the service in "production" mode
    * `npm start`
  * To start the service in "development" mode
    * `npm test`

If you are on a local machine the service will be started on localhost port 3001 as default.
On Cloud 9 the url will be eztravel-_yourusername_>.c9.io

Then with a browser and/or a rest development client go to (GET) _url_/api/trips
Other available routes:
  * Create new trips (POST _url_/api/trips)
  * Get single trip (GET _url_/api/trips/:id)
  * Update trip (PUT _url_/api/trips/:id)
  * Delete trip (DELETE _url_/api/trips/:id)

