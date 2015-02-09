'use strict';

var should = require('should');
var tripProvider = require('../lib/tripprovider-memory');

describe("TripProvider", function () {
  it ("should provide prepopulated data", function () {
    tripProvider.findAll(function (err, data) {
      should(err).be.undefined;
      should(data.length).equal(4);
    });
    //expect(tripProvider.findAll().length).to.equal(4);
  });
});