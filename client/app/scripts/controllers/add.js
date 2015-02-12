'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clientApp
 */
angular.module('eztravelApp')
  .controller('AddCtrl', function ($scope, $http) {
    // Grab elements, create settings, etc.
	var canvas = $("#canvas")[0],
		context = canvas.getContext("2d"),
		video = $("#video")[0],
		videoObj = { "video": true },
		errBack = function(error) {
			console.log("Video capture error: ", error.code);
		};

	// Put video listeners into place
	if(navigator.getUserMedia) { // Standard
		navigator.getUserMedia(videoObj, function(stream) {
			video.src = stream;
			video.play();
		}, errBack);
	} else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
		navigator.webkitGetUserMedia(videoObj, function(stream){
			video.src = window.webkitURL.createObjectURL(stream);
			video.play();
		}, errBack);
	}
	else if(navigator.mozGetUserMedia) { // Firefox-prefixed
		navigator.mozGetUserMedia(videoObj, function(stream){
			video.src = window.URL.createObjectURL(stream);
			video.play();
		}, errBack);
	}

	// Trigger photo take
	$("#snap").on("click", function() {
		context.drawImage(video, 0, 0, 640, 480);
		$http.post('/api/receipts',  { "tripId": 1, description:"Receipt saved: "+Date.now, "receipt":canvas.toDataURL('image/jpeg')})
      .success(function(data, status, headers, config) {
        $scope.response = {
          type: "success",
          message: data.message
        };
      })
      .error(function(data, status, headers, config) {
        $scope.response = {
          type: "failure",
          message: data.message
        };
      });
  });
});


