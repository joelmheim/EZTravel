'use strict';

/**
 * @ngdoc overview
 * @name eztravelApp
 * @description
 * # eztravelApp
 *
 * Main module of the application.
 */
angular
  .module('eztravelApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/add', {
        templateUrl: 'views/add.html',
        controller: 'AddCtrl'
      })
      .when('/trips', {
        templateUrl: 'views/trips.html',
        controller: 'TripsCtrl'
      })
      .when('/receipts', {
        templateUrl: 'views/receipts.html',
        controller: 'ReceiptsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
