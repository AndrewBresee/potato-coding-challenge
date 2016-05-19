// include an alert that no information was found

var app = angular.module('flickr-potato', []);


app.controller('SearchPictures', function($scope, $http) {
	$scope.querry = "Potato";
	$scope.results; 

	angular.element(document).ready(function () {
			$scope.search();
	});

	$scope.search = function() {

		var url = 'https://api.flickr.com/services/feeds/photos_public.gne?tags='+$scope.querry+'&tagmode=all&format=json&jsoncallback=JSON_CALLBACK';

		$http({
		    method: 'JSONP',
		    url: url
		}).
		success(function(status) {
			console.log("WORKS!")
			console.log(status);
			$scope.results = status.items;
		}).
		error(function(status) {
		  console.log("NO WORKS!")
		});

		
	};
});
