'use strict';
app.controller('atomController',['$rootScope','$scope',function($rootScope,$scope){
	//view configuration
	$rootScope.header = false;
	$rootScope.footer = false;
	$rootScope.backDisable = false;
	$rootScope.hamburgerDisable = true;
	$rootScope.titleLeft = true;
	$rootScope.title = 'Add Details';

	$scope.atom = $rootScope.selectedAtom;

	
}]);