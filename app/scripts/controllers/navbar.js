angular.module('angularWpApp').controller('NavbarCtrl', function($scope, wp, $route, $uibModal) {

    $scope.route = $route;
    console.log($scope.route);

    $scope.applynow = {}

    $scope.applynow.open = function (size, parentSelector) {

        var parentElem = parentSelector ? 
            angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
        var modalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'views/pages/applynow.html',
            controller: 'ApplynowCtrl',
            controllerAs: '$ctrl',
            size: size,
            appendTo: parentElem
        });

    }

	$scope.navbar = [
        {
            name: 'Home',
            alias: 'home',
            link: '#!/'
        }
        // {
        //     name: 'Program',
        //     alias: 'program',
        //     link: '#!/program'
        // },
        // {
        //     name: 'Cities',
        //     alias: 'cities',
        //     link: '#!/cities'
        // },
        // {
        //     name: 'Community',
        //     alias: 'community',
        //     link: '#!/community'
        // },
        // {
        //     name: 'About',
        //     alias: 'about',
        //     link: '#!/about'
        // },
        // {
        //     name: 'News',
        //     alias: 'news',
        //     link: '#!/news'
        // },
        // {
        //     name: 'FAQ',
        //     alias: 'faq',
        //     link: '#!/faq'
        // }
    ]

  	wp.getMenu().then(function(response) {
  		console.log('getMenus', response);
      	// $scope.menus = response.data.categories;
    });

    wp.getCategories().then(function(response) {
      	$scope.categories = response.data.categories;

      	console.log("categories", $scope.categories)
    });


  });
