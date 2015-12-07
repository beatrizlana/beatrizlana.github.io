angular.module('beatrizlana.github.io')
.controller('ProductController', ['$scope', '$rootScope', function($scope, $rootScope) {
	$scope.products = [{
		name: 'product 1',
		type: 't1'
	}, {
		name: 'product 2',
		type: 't1',
	}, {
		name: 'product 3',
		type: 't2'
	}];
}]);