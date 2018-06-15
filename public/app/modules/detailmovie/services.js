'use strict';
 
angular.module('Detail')
 
.factory('DetailService',
    ['$http', '$cookieStore', '$rootScope', '$timeout',
    function ($http, $cookieStore, $rootScope, $timeout) {
        var service = {};

        var detail;

        service.setDetail = function (detailInput) {
            detail = detailInput[0];
            //console.log("setDetail - "+detail.TITLE);
        }

        service.getDetail = function(){
            //console.log("getDetail - "+detail.TITLE);
            return detail;
        };

        return service;
    }]);