var fishkillControllers = angular.module('fishkillControllers', []);

fishkillControllers.controller('NewReportCtrl', ['$scope',
	function ($scope){

		//Array to store fish features checkboxes
		$scope.fish_features = [];
		$scope.water_features = [];

		//Show contact data information 
		$scope.showFormData = function(){
			console.log($scope.user);
			console.log($scope.fish_features);
		};

	}
]);