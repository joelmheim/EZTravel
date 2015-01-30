'use strict';
var TripProvider = (function () {
  var tripCounter = 1;

  var dummyData = [];

  return {
    findAll: function (callback) {
      callback( null, dummyData );
    },

    findById: function (id, callback) {
      var result = null;
      for(var i =0;i<dummyData.length;i++) {
        if( dummyData[i]._id == id ) {
          result = dummyData[i];
          break;
        }
      }
      callback(null, result);
    },

    save: function (trips, callback) {
      var trip = null;

      if( typeof(trips.length)=="undefined")
        trips = [trips];

      for( var i =0;i< trips.length;i++ ) {
        trip = trips[i];
        trip._id = tripCounter++;
        trip.created_at = new Date();

        dummyData[dummyData.length]= trip;
      }
      callback(null, trips);
    }
  };
})();

/* Lets bootstrap with dummy data */
TripProvider.save([
  {tripid: '21145000', destination: 'Stavanger, Norway', start: '2015-01-20T05:00:00.000Z', end: '2015-01-21T21:00:00.000Z'},
  {tripid: '21145001', destination: 'Stavanger, Norway', start: '2015-01-29T05:00:00.000Z', end: '2015-01-29T18:00:00.000Z'},
  {tripid: '21145002', destination: 'Stavanger, Norway', start: '2015-02-11T05:00:00.000Z', end: '2015-02-11T18:00:00.000Z'},
  {tripid: '21145003', destination: 'Stavanger, Norway', start: '2015-03-17T05:00:00.000Z', end: '2015-03-19T21:00:00.000Z'}
], function(error, trips){});

exports.TripProvider = TripProvider;
