var app = angular.module('flickr-potato', []);

app.controller('SearchPictures', function($scope) {
	$scope.querry = "Potato";
	$scope.search = function() {
		alert($scope.querry);
	};
});
