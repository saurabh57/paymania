'use strict';
app.controller('authController',['$rootScope','$scope','$location',function($rootScope, $scope, $location){
	//view configuration
	$rootScope.header = true;
	$rootScope.footer = true;


	$scope.authLogin = function(formData){

		if($scope.authForm.$invalid){
			console.log('login form invalid');

			return;
		}

		console.log('login called');

		$location.path('/dashboard');

	};

}]);