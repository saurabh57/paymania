/****Title bar controller***/
'use strict';
app.controller('titlebarController',['$rootScope','$scope','$location',function($rootScope,$scope,$location){
		/**Hamburger menu control*/
	$rootScope.sideMenuActive = false;

	$scope.openSideMenu = function(){

		$rootScope.sideMenuActive = true;
		$rootScope.hideOverlay = false;
	}
	$rootScope.back = function(){
        window.history.back();
    }
}]);