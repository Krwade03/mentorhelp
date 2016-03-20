var app = angular.module("myApp", []);

app.controller("MyController", ["$scope",function($scope){

	$scope.show = true;
	$scope.toggleshow = function(){
		$scope.show = !$scope.show

	}
}

	]);