/****Filter tab controller***/
'use strict';
app.controller('filterTabController',['$rootScope','$scope','$location','$document',function($rootScope,$scope,$location,$document){
	//Adding model to scope
	$scope.filters = filter_model.filters;

	$scope.filterTabHandler = function($event){
		window.document.getElementsByClassName('active-bar')[0].style.transform = 'translateX('+$event.target.offsetLeft+'px)';
		window.document.getElementsByClassName('active-bar')[0].style.webkitTransform = 'translateX('+$event.target.offsetLeft+'px)';
		window.document.getElementsByClassName('active-bar')[0].style.width = $event.target.clientWidth+'px';

		//calling filter action
		this.filterAction($event);
	};
	$scope.filterAction = function($event){
		var dataAttr = $rootScope.getDataAttr($event);
		console.log(dataAttr);

		_.mixin({
          'nestedWhere': function(parent, childTarget, searchOptions) {
            
            // reduce the parent with an intial state set to an empty array that we push a parent
            // to if a child where clause is matched
            return _.reduce(parent, function(memo, parentElement) {
              if (parentElement[childTarget] && parentElement[childTarget].indexOf(searchOptions.category)!=-1){
                memo.push(parentElement);
                return memo;
              }
              return memo;
            }, []);
          }
        });

		$rootScope.atoms = _.nestedWhere(dashboard_model.atoms,'category',{'category':dataAttr});
	}

	//bind scroll event 

	angular.element($document).on("scroll",function(e){
		var top = window.scrollY > 50 ? 50 : window.scrollY,
			opacity = window.scrollY > 50 ? 50 : window.scrollY;

		window.document.getElementsByClassName('filter-tab-container')[0].style.top =  -top+'px';
		window.document.getElementsByClassName('filter-tab-container')[0].style.opacity =  1 - (opacity/50);

		if(window.scrollY > 0){
			angular.element(window.document.getElementsByClassName('wheel-menu-action')).removeClass('hide');
		}else{
			angular.element(window.document.getElementsByClassName('wheel-menu-action')).addClass('hide');
		}

		window.document.getElementsByClassName('wheel-menu-action')[0].style.opacity =  (opacity/50);
	});
}]);