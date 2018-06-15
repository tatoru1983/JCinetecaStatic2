'use strict';
 
angular.module('Dashboard')

.controller('DashboardController',  ['$scope', '$rootScope', '$location', 'DashboardService', 'DetailService',
function ($scope, $rootScope, $location, DashboardService, DetailService) {
	
	$scope.data= [];
	$scope.detail = [];

	$scope.search = function(){
		var titleNotNull = $scope.titleFilter == undefined ? '' : '%'||$scope.titleFilter.toUpperCase()||'%';
		var dvdNotNull = $scope.dvdFilter == undefined ? '' : $scope.dvdFilter;
		var titleNull = $scope.titleFilter == undefined ? 'NULL' : $scope.titleFilter.toUpperCase();
		var dvdNull = $scope.dvdFilter == undefined ? 'NULL' : $scope.dvdFilter;

		/*
		$scope.data = [{"Title":"Jackie Brown","Year":"1997","Rated":"R","Released":"25 Dec 1997","Runtime":"154 min","Genre":"Crime, Drama, Thriller","Director":"Quentin Tarantino","Writer":"Quentin Tarantino (written for the screen by), Elmore Leonard (novel)","Actors":"Pam Grier, Samuel L. Jackson, Robert Forster, Bridget Fonda","Plot":"A middle-aged woman finds herself in the middle of a huge conflict that will either make her a profit or cost her life.","Language":"English","Country":"USA","Awards":"Nominated for 1 Oscar. Another 8 wins & 21 nominations.","Poster":"https://ia.media-imdb.com/images/M/MV5BNmY5ODRmYTItNWU0Ni00MWE3LTgyYzUtYjZlN2Q5YTcyM2NmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.5/10"},{"Source":"Rotten Tomatoes","Value":"87%"},{"Source":"Metacritic","Value":"64/100"}],"Metascore":"64","imdbRating":"7.5","imdbVotes":"266,498","imdbID":"tt0119396","Type":"movie","DVD":"05 Aug 1998","BoxOffice":"N/A","Production":"Miramax Films","Website":"N/A","Response":"True"}
		,
		{"Title":"Reservoir Dogs","Year":"1992","Rated":"R","Released":"02 Sep 1992","Runtime":"99 min","Genre":"Crime, Drama, Thriller","Director":"Quentin Tarantino","Writer":"Quentin Tarantino, Quentin Tarantino (background radio dialogue written by), Roger Avary (background radio dialogue written by)","Actors":"Harvey Keitel, Tim Roth, Michael Madsen, Chris Penn","Plot":"After a simple jewelry heist goes terribly wrong, the surviving criminals begin to suspect that one of them is a police informant.","Language":"English","Country":"USA","Awards":"12 wins & 22 nominations.","Poster":"https://ia.media-imdb.com/images/M/MV5BZmExNmEwYWItYmQzOS00YjA5LTk2MjktZjEyZDE1Y2QxNjA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.3/10"},{"Source":"Rotten Tomatoes","Value":"91%"},{"Source":"Metacritic","Value":"79/100"}],"Metascore":"79","imdbRating":"8.3","imdbVotes":"770,000","imdbID":"tt0105236","Type":"movie","DVD":"05 Nov 2002","BoxOffice":"N/A","Production":"Miramax Films","Website":"N/A","Response":"True"}
		,
		{"Title":"Pulp Fiction","Year":"1994","Rated":"R","Released":"14 Oct 1994","Runtime":"154 min","Genre":"Crime, Drama","Director":"Quentin Tarantino","Writer":"Quentin Tarantino (stories), Roger Avary (stories), Quentin Tarantino","Actors":"Tim Roth, Amanda Plummer, Laura Lovelace, John Travolta","Plot":"The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.","Language":"English, Spanish, French","Country":"USA","Awards":"Won 1 Oscar. Another 62 wins & 69 nominations.","Poster":"https://ia.media-imdb.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.9/10"},{"Source":"Rotten Tomatoes","Value":"94%"},{"Source":"Metacritic","Value":"94/100"}],"Metascore":"94","imdbRating":"8.9","imdbVotes":"1,514,292","imdbID":"tt0110912","Type":"movie","DVD":"19 May 1998","BoxOffice":"N/A","Production":"Miramax Films","Website":"N/A","Response":"True"}
		];
		*/
		DashboardService.getMovies(dvdNull, dvdNotNull, titleNull, titleNotNull, function(response) {
			$scope.data = response;
		});
	};

	$scope.detail = function (imdbid) {
		//var imdbid = $scope.data[0].IMDBID;
		DashboardService.getMovieByID(imdbid, function(response) {
			$scope.detail = response;
			DetailService.setDetail(response);
			console.log(DetailService.getDetail());
			$location.path('/detailmovie');
		});
	};
}]);