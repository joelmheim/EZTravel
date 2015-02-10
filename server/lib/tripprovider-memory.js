'use strict';
var TripProvider = (function () {
  var tripCounter = 1;

  var dummyData = [];

  return {
    findAll: function (user, callback) {
      callback( null, dummyData.filter(function(elem, index) {
        return elem.user === user;
      }));
    },

    findById: function (user, id, callback) {
      var result = dummyData.filter(function(elem, index) {
        return (elem.user === user && elem.tripid === id);
      });
      if (result.length === 0) {
        callback("Not found", null);
      } else {
        callback(null, result[0]);
      }
    },

    save: function (user, trips, callback) {
      var trip = null;

      if( typeof(trips.length)=="undefined")
        trips = [trips];

      for( var i =0;i< trips.length;i++ ) {
        trip = trips[i];
        trip.user = user;
        trip._id = tripCounter++;
        trip.created_at = new Date();

        dummyData[dummyData.length]= trip;
      }
      callback(null, trips);
    }
  };
})();

/* Lets bootstrap with dummy data */
TripProvider.save('joe@statoil.com', [
  {tripid: '21145000', destination: 'Stavanger, Norway', start: '2015-01-20T05:00:00.000Z', end: '2015-01-21T21:00:00.000Z'},
  {tripid: '21145001', destination: 'Stavanger, Norway', start: '2015-01-29T05:00:00.000Z', end: '2015-01-29T18:00:00.000Z'},
  {tripid: '21145002', destination: 'Stavanger, Norway', start: '2015-02-11T05:00:00.000Z', end: '2015-02-11T18:00:00.000Z'},
  {tripid: '21145003', destination: 'Stavanger, Norway', start: '2015-03-17T05:00:00.000Z', end: '2015-03-19T21:00:00.000Z'}
], function(error, trips){});
TripProvider.save('inod@statoil.com', [
  {tripid: '21146000', destination: 'Bergen, Norway', start: '2015-01-20T05:00:00.000Z', end: '2015-01-21T21:00:00.000Z'},
  {tripid: '21146001', destination: 'Bergen, Norway', start: '2015-01-29T05:00:00.000Z', end: '2015-01-29T18:00:00.000Z'},
  {tripid: '21146002', destination: 'Trondheim, Norway', start: '2015-02-11T05:00:00.000Z', end: '2015-02-11T18:00:00.000Z'},
  {tripid: '21146003', destination: 'Bergen, Norway', start: '2015-03-17T05:00:00.000Z', end: '2015-03-19T21:00:00.000Z'}
], function(error, trips){});
TripProvider.save('kwko@statoil.com', [
  {tripid: '21147000', destination: 'Trondheim, Norway', start: '2015-01-20T05:00:00.000Z', end: '2015-01-21T21:00:00.000Z'},
  {tripid: '21147001', destination: 'Trondheim, Norway', start: '2015-01-29T05:00:00.000Z', end: '2015-01-29T18:00:00.000Z'},
  {tripid: '21147002', destination: 'Trondheim, Norway', start: '2015-02-11T05:00:00.000Z', end: '2015-02-11T18:00:00.000Z'},
  {tripid: '21147003', destination: 'Trondheim, Norway', start: '2015-03-17T05:00:00.000Z', end: '2015-03-19T21:00:00.000Z'}
], function(error, trips){});
TripProvider.save('kflik@statoil.com', [
  {tripid: '21148000', destination: 'Stavanger, Norway', start: '2015-01-20T05:00:00.000Z', end: '2015-01-21T21:00:00.000Z'},
  {tripid: '21148001', destination: 'Stavanger, Norway', start: '2015-01-29T05:00:00.000Z', end: '2015-01-29T18:00:00.000Z'},
  {tripid: '21148002', destination: 'Stavanger, Norway', start: '2015-02-11T05:00:00.000Z', end: '2015-02-11T18:00:00.000Z'},
  {tripid: '21148003', destination: 'Stavanger, Norway', start: '2015-03-17T05:00:00.000Z', end: '2015-03-19T21:00:00.000Z'}
], function(error, trips){});
TripProvider.save('kneh@statoil.com', [
  {tripid: '21149000', destination: 'Utlandet, Norway', start: '2015-01-20T05:00:00.000Z', end: '2015-01-21T21:00:00.000Z'},
  {tripid: '21149001', destination: 'Innlandet, Norway', start: '2015-01-29T05:00:00.000Z', end: '2015-01-29T18:00:00.000Z'},
  {tripid: '21149002', destination: 'Baklandet, Norway', start: '2015-02-11T05:00:00.000Z', end: '2015-02-11T18:00:00.000Z'},
  {tripid: '21149003', destination: 'Fremlandet, Norway', start: '2015-03-17T05:00:00.000Z', end: '2015-03-19T21:00:00.000Z'}
], function(error, trips){});

module.exports = TripProvider;
