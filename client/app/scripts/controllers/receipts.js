'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp').
	controller('ReceiptsCtrl', function ($scope, $http) {
    	$http.get("/api/receipts").success(function(response) {$scope.receipts = response;});
    });

