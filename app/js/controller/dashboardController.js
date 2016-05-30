'use strict';
app.controller('dashboardController',['$rootScope','$scope','$location',function($rootScope,$scope,$location){
	//view configuration
	$rootScope.header = false;
	$rootScope.footer = false;
	$rootScope.backDisable = true;
	$rootScope.hamburgerDisable = false;
	$rootScope.titleLeft = false;
	$rootScope.title = 'Pay Mania';
	$scope.selectedFilter = 'All';

	$rootScope.atoms = dashboard_model.atoms;

	$scope.filterAtoms = function(filter){

		$scope.atoms = dashboard_model.atoms;
	};
	
	$scope.addDetails = function(atom){
		$rootScope.selectedAtom = atom;

		$location.path('/atom');
	}
	
}]);