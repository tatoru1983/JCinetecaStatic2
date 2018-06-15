'use strict';
 
angular.module('Detail')

.controller('DetailController',  ['$scope', '$rootScope', '$location', 'DetailService',
function ($scope, $rootScope, $location, DetailService) {

	$scope.detail = DetailService.getDetail();
	console.log("detail - "+$scope.detail.TITLE);

	$scope.init = function(){
            console.log('init');
	};

}]);