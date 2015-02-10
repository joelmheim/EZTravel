'use strict';

var should = require('should');
var tripProvider = require('../lib/tripprovider-memory');

describe("TripProvider", function () {

    it("should find all trips for user", function () {
        var user = 'kwko@statoil.com';
        tripProvider.findAll(user, function (err, data) {
            should(data.length).equal(4);
            should(data[0].user === user);
        });
    });

    it("should find single trip for user", function () {
        var user = 'joe@statoil.com';
        var id = '21145000';
        tripProvider.findById(user, id, function (err, trip) {
            should(trip.tripid).equal(id);
            should(trip.user).equal(user);
        });
    });

    it("should save a new trip for user", function () {
        var user = 'joe@statoil.com';
        var tripid = '21145005';
        var trip = {tripid: tripid, destination: 'Houston, USA', start: '2015-03-11T05:00:00.000Z', end: '2015-03-15T21:00:00.000Z'}
        tripProvider.save(user, trip, function (err, trips) {
            should(trip.user).equal(user);
            should(trip.tripid).equal(tripid);
        })
    });
});