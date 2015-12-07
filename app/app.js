'use strict';

angular.module('beatrizlana.github.io', ['ngRoute', 'ngMaterial'])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/products', {
		templateUrl: 'components/product/product.html',
		controller: 'ProductController',
	})
	.otherwise({
		redirectTo: '/products'
	});
}])
.run(['$rootScope', function($rootScope) {
	$rootScope.title = 'Beatriz\'s project';
}])
.controller('AppController', ['$scope', '$rootScope', function($scope, $rootScope) {
	
}]);
