'use strict';
 
angular.module('Detail')
 
.factory('DetailService',
    ['$http', '$cookieStore', '$rootScope', '$timeout',
    function ($http, $cookieStore, $rootScope, $timeout) {
        var service = {};

        var detail;
        var ratings;

        service.setDetail = function (detailInput) {
            detail = detailInput[0];
            //console.log("setDetail - "+detail.TITLE);
        }

        service.getDetail = function(){
            //console.log("getDetail - "+detail.TITLE);
            return detail;
        };

        service.setRatings = function (ratingsInput) {
            ratings = ratingsInput;
            console.log("setRatings - "+ratings);
        }

        service.getRatings = function(){
            //console.log("getRatings - "+ratings);
            return ratings;
        };

        return service;
    }]);