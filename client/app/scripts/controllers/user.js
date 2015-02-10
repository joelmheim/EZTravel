angular.module('clientApp')
  .controller('UserCtrl', function ($scope, $http) {
    $('.nav a').on('click', function(){
      $('.nav').find('.active').removeClass('active');
      $(this).parent().addClass('active');
    });

    $('.navbar-brand').on('click', function () {
      $('.nav').find('.active').removeClass('active');
      $('.nav').find('a').first().parent().addClass('active');
    });

  	$http.get('/api/user')
  	.success( function (response) {
  		$scope.user = response;
  	})
  	.error( function(response) {
  		$scope.user = response;
  	});
  });
