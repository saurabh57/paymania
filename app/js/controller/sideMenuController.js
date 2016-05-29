/****Side menu controller***/
'use strict';
app.controller('sideMenuController',['$rootScope','$scope','$location',function($rootScope,$scope,$location){
	$scope.actions = menu_action_model.actions;


	$scope.actionHandler = function($event){
		var currentAction = $rootScope.getDataAttr($event);
		
		console.log(currentAction);
	}
}]);
