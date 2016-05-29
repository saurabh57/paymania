/****Side menu controller***/
'use strict';
app.controller('sideMenuController',['$rootScope','$scope','$location',function($rootScope,$scope,$location){
	$scope.actions = menu_action_model.actions;


	$scope.actionHandler = function($event){
		var currentTarget = $($event.target).closest('[data-attr]'),
			currentAction;
			

			currentTarget = currentTarget.length ? currentTarget : $($event.target).find('[data-attr]');
			currentAction = currentTarget.attr('data-attr');
		
		console.log(currentAction);
	}
}]);
