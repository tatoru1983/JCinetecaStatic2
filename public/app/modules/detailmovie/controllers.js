'use strict';
 
angular.module('Detail')

.controller('DetailController',  ['$scope', '$rootScope', '$location', '$window', 'DetailService',
function ($scope, $rootScope, $location, $window, DetailService) {

	$scope.detail = DetailService.getDetail();
	$scope.ratings = DetailService.getRatings();
	window.scrollTo(0, 0);

	$scope.back = function(){
		$window.history.back();
	};
}]);