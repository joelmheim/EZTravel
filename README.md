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

## client

In the client/ directory run

### Build & development

Run `grunt` for building and `grunt serve` for preview.

### Testing

Running `grunt test` will run the unit tests with karma.

# Server
In the server/ directory run
  * npm install
  * To run all tests
    * grunt
  * To start the service
    * npm start

If you are on a local machine the service will be started on localhost port 3001 as default.
On Cloud 9 the url will be eztravel-__yourusername__>.c9.io

Then with a browser and/or a rest development client go to (GET) __url__/api/trips
Other available routes:
  * Create new trips (POST __url__/api/trips)
  * Get single trip (GET __url__/api/trips/:id)
  * Update trip (PUT __url__/api/trips/:id)
  * Delete trip (DELETE __url__/api/trips/:id)

