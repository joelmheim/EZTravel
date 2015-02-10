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
    	$http.get("/api/trips").success(function(response) {$scope.trips = response;});
    });

