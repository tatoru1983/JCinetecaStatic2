'use strict';
 
angular.module('Detail')

.controller('DetailController',  ['$scope', '$rootScope', '$location', 'DetailService',
function ($scope, $rootScope, $location, DetailService) {

	$scope.detail = DetailService.getDetail();
	$scope.ratings = DetailService.getRatings();

}]);