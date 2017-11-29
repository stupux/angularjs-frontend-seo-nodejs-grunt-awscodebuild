angular.module('angularWpApp')
    .controller('ApplynowCtrl', function ($scope, $rootScope, $routeParams, $route, wp, $uibModalInstance ) {
		
	  	$scope.close = function () {
			$uibModalInstance.close();
	    };

    })