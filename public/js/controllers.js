var fishkillControllers = angular.module('fishkillControllers', []);


/*
 * Main Controller
 */
fishkillControllers.controller('mainController', ['$scope',
	function ($scope){

	}
]);



/*
 * New Report Controller
 */
fishkillControllers.controller('NewReportCtrl', ['$scope',
	function ($scope){

		//Array to store fish features checkboxes
		$scope.fish_status = [];
		$scope.fish_features = [];
		$scope.water_features = [];

		//Show contact data information 
		$scope.showFormData = function(){
			console.log($scope.user);
			console.log($scope.water_type);
			console.log($scope.fish_status);
			console.log($scope.fish_features);
			console.log($scope.water_features);
		};

		$scope.resetForm = function(){

		};

	}
]);


/*
 * Search Results Controller
 */
fishkillControllers.controller('SearchResultsCtrl', ['$scope',
	function ($scope){


	}
]);