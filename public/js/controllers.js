var fishkillControllers = angular.module('fishkillControllers', []);


/*
 * Main Controller
 */
fishkillControllers.controller('mainController', ['$scope',
	function ($scope){

	}
]);

/*
 * DatePicker Controller - Form Field
 */
fishkillControllers.controller('DatePickerCtrl', ['$scope',
	function ($scope){
		$scope.today = function() {
			$scope.date = new Date();
		};

		$scope.today();

		$scope.clear = function () {
			$scope.date = null;
		};

		$scope.open = function($event) {
			$event.preventDefault();
			$event.stopPropagation();

			$scope.opened = true;
		};

		$scope.dateOptions = {
			'year-format': "'yy'",
			'starting-day': 1,
			'show-weeks': false
		};

		$scope.formats = ['dd/MMMM/yyyy', 'mm-dd-yyyy', 'shortDate'];
		$scope.format = $scope.formats[0];

	}
]);

/*
 * New Report Controller
 */
fishkillControllers.controller('NewReportCtrl', ['$scope', '$filter',
	function ($scope, $filter){

		//Array to store fish features checkboxes
		$scope.fish_status = [];
		$scope.fish_features = [];
		$scope.water_features = [];

		// Watch affiliation field
		$scope.$watch('affiliation', function(aVal){
			if (angular.isUndefined($scope.affiliation)) return; 

			if(aVal === 'other'){
		   		$scope.custom_affiliation = $scope.tmVar;
			} else {
			  	if($scope.custom_affiliation !== null){
			    	$scope.tmVar = $scope.custom_affiliation;
			   		$scope.custom_affiliation = null;
			  	}
			}
		});

		//Show contact data information 
		$scope.showFormData = function(){
			console.log($scope.user);
			console.log($scope.water_type);
			console.log($scope.fish_status);
			console.log($scope.fish_features);
			console.log($scope.water_features);
			console.log($filter('date')($scope.$$childHead.date, 'mm-dd-yyyy'));
			console.log($scope.affiliation);
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