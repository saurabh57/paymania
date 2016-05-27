'use strict';
app.controller('dashboardController',['$rootScope','$scope','$location',function($rootScope,$scope,$location){
	//view configuration
	$rootScope.header = false;
	$rootScope.footer = false;
	$rootScope.backDisable = true;
	$rootScope.hamburgerDisable = false;
	$rootScope.titleLeft = false;
	$rootScope.title = 'Pay Mania';


	$scope.addDetails = function(){


		$location.path('/atom');
	}
	
}]);