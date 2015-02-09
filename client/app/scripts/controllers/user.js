angular.module('clientApp')
  .controller('UserCtrl', function ($scope, $http) {
  	$http.get('/api/user')
  	.success( function (response) { 
  		$scope.user = response;  
  	})
  	.error( function(response) {
  		$scope.user = response;
  	})
  });
