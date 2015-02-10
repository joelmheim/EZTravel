'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp').
	controller('TripsCtrl', function ($scope, $http) {
    	$http.get("/api/trips").success(function(response) {
    		$scope.trips = response;
    		$scope.trips.forEach(function(trip) {
    			trip.start = Date.parse(trip.start);
    			trip.end = Date.parse(trip.end);
    			trip.created_at = Date.parse(trip.created_at);
    		}
    		);
    	});
    });

