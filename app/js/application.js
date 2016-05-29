/*================================================================
App payMania
==================================================================*/
'use strict';
var app = angular.module('paymania', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    	.when('/login', {
            controller: 'authController',
            templateUrl: 'partials/_login.html'
    	})
    	.when('/dashboard', {
            controller: 'dashboardController',
            templateUrl: 'partials/_dashboard.html'
    	})
    	.when('/atom', {
            controller: 'atomController',
            templateUrl: 'partials/_atomDetail.html'
    	})
    	.otherwise({ redirectTo: '/login' });
}]);


app.run(['$rootScope','$location', function($rootScope, $location) {
     $rootScope.sideMenuActive = false;
     $rootScope.hideOverlay = true;
     $rootScope.hideLoader = true;
    
    $rootScope.overlayHandler = function($event){
        $rootScope.sideMenuActive = false;
        $rootScope.hideOverlay = true;
    };
    $rootScope.loaderHandler = function($event){

    };
    $rootScope.getDataAttr = function($event){
        var currentTarget = $($event.target).closest('[data-attr]'),
            currentAction;

            currentTarget = currentTarget.length ? currentTarget : $($event.target).find('[data-attr]');
            currentAction = currentTarget.attr('data-attr');
        
        return currentAction;
    }

}]);