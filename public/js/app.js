//app.js

var fishkillApp = angular.module('fishkillApp', [
	'ngRoute',
	'fishkillControllers',
	'fishkillDirectives'
]);


// App router

fishkillApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    	when('/', {
	        templateUrl: 'main.html',
	        controller: 'mainController'
	   	}).
	   	when('/new', {
	    	templateUrl: 'new.html',
	        controller: 'NewReportCtrl'
	   	}).
	   	when('/search', {
	        templateUrl: 'search.html',
	        controller: 'SearchResultsCtrl'
	   	}).
	   	otherwise({
	        redirectTo: '/'
	    });
  }]);