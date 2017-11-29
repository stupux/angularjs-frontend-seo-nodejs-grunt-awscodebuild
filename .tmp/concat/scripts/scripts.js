'use strict';

/**
 * @ngdoc overview
 * @name angularWpApp
 * @description
 * # angularWpApp
 *
 * Main module of the application.
 */
angular
    .module('angularWpApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'infinite-scroll',
        'hljs',
        'seo',
        'timer',
        'ui.bootstrap',
        'mailchimp'
    ])
    .config(["hljsServiceProvider", function(hljsServiceProvider) {
        hljsServiceProvider.setOptions({
            // replace tab with 4 spaces
            tabReplace: '    '
        });
    }])
    .config(["$routeProvider", "$httpProvider", "$locationProvider", function($routeProvider, $httpProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'views/pages/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'home'
            })

            .when('/program', {
                templateUrl: 'views/pages/program.html',
                controller: 'ProgramCtrl',
                controllerAs: 'program'
            })

            .when('/cities', {
                templateUrl: 'views/pages/cities.html',
                controller: 'CitiesCtrl',
                controllerAs: 'cities'
            })

            .when('/community', {
                templateUrl: 'views/pages/community.html',
                controller: 'CommunityCtrl',
                controllerAs: 'community'
            })

            .when('/about', {
                templateUrl: 'views/pages/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })

            .when('/news', {
                templateUrl: 'views/pages/news.html',
                controller: 'NewsCtrl',
                controllerAs: 'news'
            })

            .when('/faq', {
                templateUrl: 'views/pages/faq.html',
                controller: 'FaqCtrl',
                controllerAs: 'faq'
            })

            .when('/applynow', {
                templateUrl: 'views/pages/applynow.html',
                controller: 'ApplynowCtrl',
                controllerAs: 'applynow'
            })

            .when('/:category', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })

            .when('/viewpost/:postId', {
                templateUrl: 'views/viewpost.html',
                controller: 'ViewpostCtrl',
                controllerAs: 'viewpost'
            })

            .when('/main', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })

            .when('/mainpage', {
                templateUrl: 'views/mainpage.html',
                controller: 'MainpageCtrl',
                controllerAs: 'mainpage'
            })

            .otherwise({
                redirectTo: '/all'
            });


        $locationProvider.hashPrefix('!');
        //$locationProvider.html5Mode(true);


        $httpProvider.interceptors.push(["$q", "$injector", function($q, $injector) {
            return {
                'response': function(response) {
                // console.log("interceptor");

                    var $http = $http || $injector.get('$http');
                    var $timeout = $injector.get('$timeout');
                    var $rootScope = $injector.get('$rootScope');

                    if ($http.pendingRequests.length < 1) {
                        $timeout(function() {
                            if ($http.pendingRequests.length < 1) {
                                console.log('HTML READY called');
                                $rootScope.htmlReady();
                            }
                        }, 1000); //an 0.7 seconds safety interval, if there are no requests for 0.7 seconds, it means that the app is through rendering
                    }
                    return response;

                }
            };
        }]);

    }])
'use strict';

/**
 * @ngdoc function
 * @name angularWpApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the angularWpApp
 */

var API_URL = 'http://exosphe.re';

angular.module('angularWpApp')
    .controller('HomeCtrl', ["$document", "$window", "$scope", "$sce", "$rootScope", "$routeParams", "$route", "wp", "$anchorScroll", "$location", "$uibModal", function ( $document, $window, $scope, $sce, $rootScope, $routeParams, $route, wp, $anchorScroll, $location, $uibModal ) {

        $scope.trustSrc = function(src) {
            return $sce.trustAsResourceUrl(src);
        }

        console.log( $scope.trustSrc('//exosphe.us8.list-manage.com/subscribe/post-json') );

        $document.on('scroll', function() {
            // console.log($window.scrollY);

            $scope.$apply(function() {
                $scope.pixelsScrolled = $window.scrollY;
            })
        });

        $scope.endTime = new Date("January 15, 2018 00:00:00");
        $scope.endTimeString = "January 15, 2018";

        $scope.timerRunning = true;

        $scope.startTimer = function (){
            $scope.$broadcast('timer-start');
            $scope.timerRunning = true;
        };

        $scope.stopTimer = function (){
            $scope.$broadcast('timer-stop');
            $scope.timerRunning = false;
        };

        $scope.$on('timer-stopped', function (event, args) {
            console.log('timer-stopped args = ', args);
        });

        $scope.swiper_home_init = function() {

            var swiper = new Swiper('#swiper-home', {
                speed: 800,
                parallax: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                }
            });

            console.log("swiper", swiper);
        }

        $scope.learnmore = function () {
            $location.hash('learnmore');

            $anchorScroll();
        }

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

        $scope.share = function (size, parentSelector) {

            var parentElem = parentSelector ? 
                angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
            var modalInstance = $uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'views/pages/share.html',
                controller: 'ApplynowCtrl',
                controllerAs: '$ctrl',
                size: size,
                appendTo: parentElem
            });
        }

        $scope.goTop = function() {
            $location.hash('home');

            $anchorScroll();
        };

        $scope.swiper = {};
        $scope.swiper.items = [
            {
                id: 1,
                title: "Disturb the universe",
                subtitle: "6 Weeks <span>of Emerging Technology, Philosophy, and Self-Development</span>",
                image: 'https://s3.amazonaws.com/exosphere/home/img/m1-1.jpg',
                text: "Exosphere is the first global institution of lifelong learning. For humans to flourish, our shared future must be rooted in scientific knowledge, artistic expression, and personal growth. Join our Global Cohort.",
                list: [
                    "IMMERSE yourself in the​ <b>​technologies​</b> reshaping the world",
                    "FORGE yourself into a person of <b>conscious​ action</b>",
                    "EMBARK on an​ <b>​adventure​</b> with new friends from around the world & determine your next steps"
                ]
            },
            {
                id: 2,
                title: "EMERGING TECHNOLOGY IMMERSION",
                image: 'https://s3.amazonaws.com/exosphere/home/img/m1-2.jpg',
                text: "Awareness alone is insufficient to thrive in this brave new world of rapid change. Exosphere’s transdisciplinary approach immerses you in Artificial Intelligence, Blockchain, and Synthetic Biology, empowering you to be the change."
            },
            {
                id: 3,
                title: "ARTIFICIAL INTELLIGENCE & MACHINE LEARNING",
                image: 'https://s3.amazonaws.com/exosphere/home/img/m1-3.jpg',
                text: "From self-driving cars to developing new medical treatments, AI is disrupting our world. At Exosphere, you will become fluent in the field and identify some of the 1.5 million career opportunities in AI."
            },
            {
                id: 4,
                title: "BLOCKCHAIN & CRYPTOCURRENCY",
                image: 'https://s3.amazonaws.com/exosphere/home/img/m1-4.jpg',
                text: "Cryptocurrency and blockchain technology have shattered the shattered the limits for building a prosperous, decentralized society. Accelerate your business and​ technical knowledge of Blockchain and meet your future collaborators at Exosphere."
            },
            {
                id: 5,
                title: "BIOHACKING & SYNTHETIC BIOLOGY",
                image: 'https://s3.amazonaws.com/exosphere/home/img/m1-5.jpg',
                text: "Plastic-eating mushrooms, self-repairing concrete, animal-free meat. These are some of the exciting applications of synthetic biology you will learn about at Exosphere, with the tools & techniques to address the world’s greatest challenges."
            }
        ];

        $scope.choose_city = {
            selected: 'europe',
            items: [
                {
                    name: "Europe",
                    alias: "europe",
                    items: [
                        {
                            name: "Italy",
                            alias: "italy",
                            date: "MAY 7 - JUN 15"
                        },
                        {
                            name: "Sweden",
                            alias: "sweden",
                            date: "JUL 2 - AUG 10"
                        },
                        {
                            name: "Ukraine",
                            alias: "ukraine",
                            date: "AUG 20 - SEP 28"
                        }
                    ]
                },
                {
                    name: "Latin America",
                    alias: "latin_america",
                    items: [
                        {
                            name: "Chile",
                            alias: "chile",
                            date: "Apr 30 - Jun 8"
                        },
                        {
                            name: "Brazil",
                            alias: "brazil",
                            date: "Jun 18 – Jul 27"
                        },
                        {
                            name: "Mexico",
                            alias: "mexico",
                            date: "Aug 13 - Sep 21"
                        }
                    ]
                }
            ]
        };

        $scope.choose_city.change = function(index) {

            if ($scope.choose_city.selected) {

                setTimeout(function () {
                    $scope.$apply(function () {
                        $scope.choose_city.selected = index;
                        console.log("$scope.choose_city.change", $scope.choose_city.selected);
                    });
                }, 10);


            }

        } 

        $scope.sections = [
            {
                type: "quote",
                quote: true,
                title: "Nobody ever figures out what life is all about, and it doesn't matter. Explore the world. Nearly\
                        everything is really interesting if you go into it deeply enough. Work as hard and as much as you want to\
                        on the things you like to do the best.",
                subtitle: "-Richard Feynman"
            },
            {
                type: "parallax",
                title: "THE EXOSPHERE ACADEMY",
                image: "https://s3.amazonaws.com/exosphere/home/img/m3.jpg",
                subtitle: "A Personal Development Laboratory",
                text: "Exosphere is a place to learn new skills and emerging technologies for the future, and at the same time to choosing to live a richer, fuller life characterized by Contemplation and Self-Examination in order to actualize a distinctive set of values in our intrapersonal existence:",
                list: [
                    "Self-Reliance",
                    "Discipline",
                    "Antifragility"
                ]
            },
            {
                type: "parallax",
                side: "right",
                image: "https://s3.amazonaws.com/exosphere/home/img/m4.jpg",
                title: "THE EXOSPHERE<br>GLOBAL COMMUNITY",
                subtitle: "Learning and Problem-Solving",
                text: "Exosphere is a global community of individuals dedicated to a life of learning and problem-solving by engaging with the world and its problems, and choosing to live with a distinct set of values in our interpersonal and connected existence:",
                list: [
                    "Collaborative Creation",
                    "Community",
                    "Human-Centered Technology"
                ]
            },
            {
                type: "quote",
                title: "Traditional education teaches you how to conform to reality",
                subtitle: "Exosphere gives you the tools to transform it."
            },
            {
                type: "parallax",
                side: "right",
                title: "LEARNING AS <br>LIFELONG EXPERIMENTATION",
                image: "https://s3.amazonaws.com/exosphere/home/img/m6.jpg",
                text: "Even if the methods of traditional education worked, the underlying assumptions about learning are still broken beyond repair. Few people would deny that learning should be a lifelong endeavor, yet our institutions of education discourage this in practice. Exosphere is building a decentralized, global institution designed to help people engage with their learning challenges regardless of age or past experience."
            },
            {
                type: "parallax",
                image: "https://s3.amazonaws.com/exosphere/home/img/m7.jpg",
                title: "FOSTERING<br>PRACTICAL UNDERSTANDING",
                text: "Knowing about something is not the same as knowing something. Traditional academia uses textbooks and lectures to teach as if every student is the same. Exosphere’s approach is different. We believe you have only learned something when are able to use this knowledge to identify and solve real problems. Whether that problem is abstract and theoretical or concrete and material, it is in the application of knowledge that we achieve understanding, and that is our focus at Exosphere."
            },
            {
                type: "include",
                src: 'https://s3.amazonaws.com/exosphere/home/being-community.html'
            },
            {
                type: "infrograph",
                image: "https://s3.amazonaws.com/exosphere/home/img/m9.jpg",
                title: "Our international community",
                infograph: "images/infographs/our-international-community.png"
            },
            {
                type: "infrograph",
                image: "https://s3.amazonaws.com/exosphere/home/img/m9.jpg",
                title: 'Our 11<small style="vertical-align: text-top;" class="color-black"><b>th</b></small> Program overview',
                subtitle: "Lorem ipsum and more if needed",
                text: "Morning sessions will consist of our core curriculum and lectures from a weekly rotation of visiting fellows who will instruct on exponential technologies, entrepreneurship and leadership. Afternoon sessions will be spent on individual projects working with other students and alumni mentors who will help guide your projects.",
                infograph: "images/infographs/our-11th-program-overview.png",
                button: {
                    title: "Learn more about the program",
                    href: "#!/program"
                }
            },
            {
                type: "quote",
                quote: true,
                title: "To dare causes anxiety, but not to dare is to lose yourself.”",
                subtitle: "― Søren​ ​Kierkegaard"
            },
            {
                type: "include",
                src: 'views/pages/home/join-community.html'
            }
        ]

        $scope.page=0;
        $scope.busy=true;

        var count='10';
        var insertAds=true;

        $scope.init= function(){
          var category='all';

          if($routeParams.category){
            category=$routeParams.category;
          }
            wp.getPosts(count,$scope.page,category).then(function (response){

              $scope.posts = response.data.posts;
              $scope.maxpages=response.data.pages;
              $scope.busy=false;

              if(insertAds){
                $scope.posts.splice( Math.floor((Math.random() * count) + 1),0,{type:100});
                $scope.posts.splice( Math.floor((Math.random() * count) + 1),0,{type:100});
              }

            });
          };

        $scope.init();

     $scope.loadMore = function () {

       if(!$scope.busy){
           var category=$routeParams.category;

        if($scope.page < $scope.maxpages){
            wp.getPosts(count,$scope.page,category).then(function (response){
                $scope.maxpages=response.data.pages;
                angular.forEach(response.data.posts,function(item) {

                 $scope.posts.push(item);
             });
               $scope.busy=false;

           });
        }
       }
     }
    }])

    .filter('digits', function() {
        return function(input) {
            if (input < 10) { 
                input = '0' + input;
            }

            return input;
        }
    })
'use strict';

/**
 * @ngdoc function
 * @name angularWpApp.controller:homeCtrl
 * @description
 * # homeCtrl
 * Controller of the angularWpApp
 */
var adSenseTpl = '';

var API_URL = 'http://exosphe.re'

angular.module('angularWpApp')
    .controller('ProgramCtrl', ["$scope", "$rootScope", "$routeParams", "$route", "wp", function ($scope, $rootScope, $routeParams, $route, wp ) {

        console.log("ProgramCtrl");

        $scope.sections = [
            {
                type: "quote",
                title: "Tradional education gives you the tools to confirm reality.",
                subtitle: "Exosphere gives you the tools to transform it."
            },
            {
                type: "infrograph",
                image: "https://s3.amazonaws.com/exosphere/program/img/m3.jpg",
                title: '6-week program',
                subtitle: "Lorem ipsum and more if needed",
                text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                infograph: "images/infographs/6-week-program.png"
            },
            {
                type: "quote",
                title: "Tradional education gives you the tools to confirm reality.",
                subtitle: "Exosphere gives you the tools to transform it."
            },
            {
                type: "parallax",
                title: "Core curriculum",
                image: "https://s3.amazonaws.com/exosphere/program/img/m5.jpg",
                subtitle: "It's explanation anything on it",
                text: 
                "<p>\
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\
                    <br>\
                    <br>\
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum\
                </p>\
                <br>\
                <br>\
                <ul class='list-styled'>\
                    <li>Some bullet points if necessary</li>\
                    <li>If not, use previous module paragraph length</li>\
                </ul>"
            },
            {
                type: "include",
                src: "views/pages/program/core-curriculum.html"
            }
        ]

    }])
'use strict';

/**
 * @ngdoc function
 * @name angularWpApp.controller:homeCtrl
 * @description
 * # homeCtrl
 * Controller of the angularWpApp
 */
var adSenseTpl = '';

var API_URL = 'http://exosphe.re'

angular.module('angularWpApp')
    .controller('CitiesCtrl', ["$scope", "$rootScope", "$routeParams", "$route", "wp", function ($scope, $rootScope, $routeParams, $route, wp ) {

        console.log("CitiesCtrl");

    }])
'use strict';

/**
 * @ngdoc function
 * @name angularWpApp.controller:homeCtrl
 * @description
 * # homeCtrl
 * Controller of the angularWpApp
 */
var adSenseTpl = '';

var API_URL = 'http://exosphe.re'

angular.module('angularWpApp')
    .controller('CommunityCtrl', ["$scope", "$rootScope", "$routeParams", "$route", "wp", function ($scope, $rootScope, $routeParams, $route, wp ) {

        console.log("CommunityCtrl");

    }])
angular.module('angularWpApp')
    .controller('AboutCtrl', ["$scope", "$rootScope", "$routeParams", "$route", "wp", function ($scope, $rootScope, $routeParams, $route, wp ) {

        console.log("AboutCtrl");

    }])
'use strict';

/**
 * @ngdoc function
 * @name angularWpApp.controller:homeCtrl
 * @description
 * # homeCtrl
 * Controller of the angularWpApp
 */
var adSenseTpl = '';

var API_URL = 'http://exosphe.re'

angular.module('angularWpApp')
    .controller('NewsCtrl', ["$scope", "$rootScope", "$routeParams", "$route", "wp", function ($scope, $rootScope, $routeParams, $route, wp ) {

        console.log("NewsCtrl");

    }])
'use strict';

/**
 * @ngdoc function
 * @name angularWpApp.controller:homeCtrl
 * @description
 * # homeCtrl
 * Controller of the angularWpApp
 */
var adSenseTpl = '';

var API_URL = 'http://exosphe.re'

angular.module('angularWpApp')
    .controller('FaqCtrl', ["$scope", "$rootScope", "$routeParams", "$route", "wp", function ($scope, $rootScope, $routeParams, $route, wp ) {

        console.log("FaqCtrl");

    }])
angular.module('angularWpApp')
    .controller('ApplynowCtrl', ["$scope", "$rootScope", "$routeParams", "$route", "wp", "$uibModalInstance", function ($scope, $rootScope, $routeParams, $route, wp, $uibModalInstance ) {
		
	  	$scope.close = function () {
			$uibModalInstance.close();
	    };

    }])
'use strict';

/**
 * @ngdoc function
 * @name angularWpApp.controller:ViewpostCtrl
 * @description
 * # ViewpostCtrl
 * Controller of the angularWpApp
 */


var API_URL = 'http://exosphe.re/api'

angular.module('angularWpApp')
  .controller('ViewpostCtrl', ["$scope", "$routeParams", "wp", function ($scope,$routeParams,wp  ) {

    wp.getPost($routeParams.postId).then(function (response){

      $scope.title =response.data.post.title;

      var rendered = angular.element('<div></div>');
      rendered.append(response.data.post.content);

      rendered.find('.crayon-syntax').each(function(i,val){
         var content = $(this).find('textarea').val();
         var id =  $(this).attr('id');
           rendered.find("#"+id).replaceWith('<div hljs>'+content+'</div>');
      });

      rendered.find('div').removeClass();

      rendered.find('img').removeClass().addClass('img-responsive center-block').wrap( "<div class='article-image' layout='row' layout-align='center'></div>" );

      $scope.content = rendered.html();

    });
  }])
  .directive('bindHtmlCompile', ['$compile', function ($compile) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        scope.$watch(function () {

          return scope.$eval(attrs.bindHtmlCompile);
        }, function (value) {
          // In case value is a TrustedValueHolderType, sometimes it
          // needs to be explicitly called into a string in order to
          // get the HTML string.
          element.html(value && value.toString());
          // If scope is provided use it, otherwise use parent scope
          var compileScope = scope;
          if (attrs.bindHtmlScope) {
            compileScope = scope.$eval(attrs.bindHtmlScope);
          }
          $compile(element.contents())(compileScope);
        });
      }
    }
  }]);

angular.module('angularWpApp').controller('NavbarCtrl', ["$scope", "wp", "$route", "$uibModal", function($scope, wp, $route, $uibModal) {

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


  }]);

'use strict';


angular.module('angularWpApp')
  .factory('wp', ["$q", "$http", function ($q,$http) {

    var API_URL = 'http://exosphe.re';
    var API_V2  = 'http://exosphe.re/wp-json';
    var wp={};

      wp.getCategories =  function() {
        return $http.get(API_URL + '/api/get_category_index/');
      };

      wp.getMenu = function(id) {
        return $http.get(API_V2+ '/menus/v1/get_menu/?menu_id=' + id);
        // return {
        //     data: [
        //         {
        //             "name": "Home"
        //         },
        //         {
        //             "name": "Cities"
        //         },
        //         {
        //             "name": "Program"
        //         }
        //     ]
        // }
      }

      wp.getPost = function(postId){
        return $http.get(API_URL+'/api/get_post/?post_id='+postId);
      };

      wp.getPosts = function(count,page,category){

        var apiurl='';
        if(category!='all'){
          apiurl=API_URL+'/api/get_category_posts/?slug='+category+'&count='+count+'&page='+page.toString();
        }else{
          apiurl=API_URL+'/api/get_posts/?count='+count+'&page='+page.toString();
        }

        return $http.get(apiurl);

      };

    return wp;

  }]);

'use strict';

/**
 * @ngdoc service
 * @name angularWpApp.wpfact
 * @description
 * # wpfact
 * Factory in the angularWpApp.
 */
angular.module('angularWpApp')
  .factory('wpfact', function() {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
        someMethod: function() {
            return meaningOfLife;
        }
    };
  });

'use strict';

/**
 * @ngdoc function
 * @name angularWpApp.controller:MainpageCtrl
 * @description
 * # MainpageCtrl
 * Controller of the angularWpApp
 */
angular.module('angularWpApp')
  .controller('MainpageCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

angular.module('angularWpApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/about.html',
    "<p>This is the about view.</p>"
  );


  $templateCache.put('views/card.html',
    "<article class=\"card\"> <div class=\"card_thumb\"> <img src=\"http://lorempicsum.com/futurama/350/225/1\" alt=\"\"> </div> <div class=\"card_body\"> <div class=\"card_title\"> <div class=\"card_category\"> AngularJS </div> <h2>AngularJS and Laravel 5 working togheter</h2> </div> </div> </article>"
  );


  $templateCache.put('views/main.html',
    "<!-- <div infinite-scroll=\"loadMore()\" infinite-scroll-distance=\"0\" class=\"row row-eq-height\"> --> <div class=\"row row-eq-height\"> <div class=\"col-md-4 col-sm-12\" ng-repeat=\"post in posts\"> <div ng-if=\"post.type==100\" class=\"card\"> <div> </div> </div> <article class=\"card\" ng-if=\"post.type!=100\"> <div class=\"card_thumb\"> <div class=\"card_favorite\"> <i class=\"fa fa-heart-o\"></i> Favorite </div> <img src=\"{{post.attachments[0].url}}\" style=\"min-height: 130px\" class=\"img-responsive\" alt=\"\"> </div> <div class=\"card_body\"> <div class=\"card_title\"> <div class=\"card_list_category\"> <div ng-repeat=\"categ in post.categories | filter:{ title: '!Tutorial' } | limitTo:3\" class=\"card_category {{categ.slug}}\" ng-class=\"{'last':$last}\"> {{categ.title}} </div> </div> <h2><a ng-href=\"/#!/viewpost/{{post.id}}\" ng-bind-html=\"post.title\"></a></h2> </div> </div> <div class=\"card_footer\"> <div class=\"foot-comment\"><i class=\"fa fa-comments\"></i> {{post.comment_count}} Comments</div> </div> </article> </div> </div> <div class=\"row\"> <div ng-if=\"busy\" class=\"col-md-12\" style=\"display: block\"> <img src=\"images/ajax-loader.gif\" class=\"center-block\"> </div> </div>"
  );


  $templateCache.put('views/mainpage.html',
    "<p>This is the mainpage view.</p>"
  );


  $templateCache.put('views/navbar.html',
    ""
  );


  $templateCache.put('views/pages/about.html',
    "<h1>About</h1>"
  );


  $templateCache.put('views/pages/applynow.html',
    "<button type=\"button\" class=\"btn-close close\" data-dismiss=\"modal\" ng-click=\"close()\"> <img src=\"images/close-menu.png\" alt=\"\"> </button> <div class=\"row\"> <div class=\"col-xs-12\"> <div class=\"xs-p-60px\"> <div id=\"wufoo-m1rrklq00v81qgk\"> Fill out my <a href=\"http://exosphere.wufoo.com/forms/m1rrklq00v81qgk\">online form</a>. </div> <script type=\"text/javascript\">var m1rrklq00v81qgk;(function(d, t) {\n" +
    "\t\t\tvar s = d.createElement(t), options = {\n" +
    "\t\t\t'userName'      : 'exosphere',    \n" +
    "\t\t\t'formHash'      : 'm1rrklq00v81qgk',    \n" +
    "\t\t\t'autoResize'    :  true,   \n" +
    "\t\t\t'height'        : '3180',      \n" +
    "\t\t\t'async'         :  true,          \n" +
    "\t\t\t'header'        : 'show',      \n" +
    "\t\t\t'host'          : 'wufoo.com',    \n" +
    "\t\t\t'entSource'     : 'wordpress',   \n" +
    "\t\t\t'defaultValues' : ''     \n" +
    "\t\t\t,'ssl'          :  true           };\n" +
    "\t\t\ts.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'wufoo.com/scripts/embed/form.js';\n" +
    "\t\t\ts.onload = s.onreadystatechange = function() {\n" +
    "\t\t\tvar rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;\n" +
    "\t\t\ttry { m1rrklq00v81qgk = new WufooForm();m1rrklq00v81qgk.initialize(options);m1rrklq00v81qgk.display(); } catch (e) {}}\n" +
    "\t\t\tvar scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);\n" +
    "\t\t\t})(document, 'script');</script> <noscript><iframe height=\"3180\" allowTransparency=\"true\" frameborder=\"0\" scrolling=\"no\" style=\"width:100%;border:none;\"src=\"https://exosphere.wufoo.com/embed/m1rrklq00v81qgk/def/entsource=wordpress\"><a href=\"https://exosphere.wufoo.com/forms/m1rrklq00v81qgk/def/entsource=wordpress\" rel=\"nofollow\">Fill out my Wufoo form!</a></iframe></noscript> <form></form> </div> </div> </div>"
  );


  $templateCache.put('views/pages/cities.html',
    "<h1>Cities</h1>"
  );


  $templateCache.put('views/pages/community.html',
    "<h1>Community</h1>"
  );


  $templateCache.put('views/pages/faq.html',
    "<h1>FAQ</h1>"
  );


  $templateCache.put('views/pages/home.html',
    "<section id=\"home\"> <div class=\"hero-header home-header hidden-xs hidden-sm\"> <div class=\"swiper-container\" id=\"swiper-home\"> <div class=\"swiper-wrapper\"> <div class=\"swiper-slide\" ng-repeat=\"item in swiper.items\" ng-init=\"$last ? swiper_home_init() : null\"> <div class=\"container\"> <div class=\"parallax-bg\" style=\"background-image:url({{item.image}})\" data-swiper-parallax=\"-5%\"></div> <div class=\"row\"> <div class=\"xs-pb-30px xs-pt-30px md-pt-60px md-pb-60px col-md-6 col-xs-12\"> <div class=\"title uppercase color-white\" ng-if=\"item.title\" data-swiper-parallax=\"-200\" ng-class=\"{'just-title' : !item.subtitle}\"> <span class=\"underline-yellow\"> {{item.title}} </span> <h5 class=\"subtitle color-white uppercase\" data-swiper-parallax=\"-250\" ng-if=\"item.subtitle\" ng-bind-html=\"item.subtitle\"></h5> </div> <div class=\"text\" data-swiper-parallax=\"-400\"> <p ng-bind-html=\"item.text\"> </p> <br><br> <ul class=\"list-styled\" ng-if=\"item.list\"> <li ng-repeat=\"item in item.list\" ng-bind-html=\"item\"></li> </ul> </div> <!-- <h1 ng-if=\"item.title\" data-swiper-parallax=\"-200\">\n" +
    "\t\t\t\t\t\t\t\t\t<span class=\"underline-yellow color-white\">\n" +
    "\t\t\t\t\t\t\t\t\t\t<b>\n" +
    "\t\t\t\t\t\t\t\t\t\t\t{{item.title}}\n" +
    "\t\t\t\t\t\t\t\t\t\t</b>\n" +
    "\t\t\t\t\t\t\t\t\t</span>\n" +
    "\t\t\t\t\t\t\t\t</h1>\n" +
    "\t\t\t\t\t\t\t\t<h5 data-swiper-parallax=\"-300\" ng-if=\"item.subtitle\" ng-bind-html=\"item.subtitle\"></h5>\n" +
    "\t\t\t\t\t\t\t\t<div class=\"text\" data-swiper-parallax=\"-400\">\n" +
    "\t\t\t\t\t\t\t\t\t<p ng-bind-html=\"item.text\">\n" +
    "\t\t\t                        </p>\n" +
    "\t\t\t                        <br><br>\n" +
    "\t\t\t                        <ul class='list-styled' ng-if=\"item.list\">\n" +
    "\t\t\t                            <li ng-repeat=\"item in item.list\" ng-bind-html=\"item\"></li>\n" +
    "\t\t\t                        </ul>\n" +
    "\t\t\t\t\t\t\t\t</div> --> </div> </div> </div> </div> </div> <div class=\"swiper-buttons\"> <div class=\"container\"> <a href=\"\" ng-click=\"applynow.open()\" class=\"btn btn-white\"> Apply now </a> <a href=\"\" ng-click=\"learnmore()\" class=\"btn btn-default btn-inline color-white\" style=\"margin-left: 30px\"> Learn more </a> </div> </div> <div class=\"swiper-pagination swiper-pagination-white\"></div> </div> <div class=\"fixed-badges\"> <div class=\"badge-rounded\"> <div class=\"badge-content\"> <timer end-time=\"endTime\"> <div class=\"clock\"> <div class=\"clock-item\"> <h2 class=\"color-white\"> {{days | digits}} </h2> <p> days </p> </div> <div class=\"clock-item\"> <h2 class=\"color-white\"> {{hours | digits}} </h2> <p> hours </p> </div> <div class=\"clock-item\"> <h2 class=\"color-white\"> {{minutes | digits}} </h2> <p> min </p> </div> </div> </timer> <p class=\"text-right\" style=\"font-size: 14px\"> Buy your spot <span class=\"color-yellow\">before {{endTimeString}}</span> <br> for the early bird benefits package </p> </div> <a ng-click=\"applynow.open()\" class=\"badge-button\"> <img src=\"images/early-apply.png\" alt=\"\"> </a> </div> <div class=\"badge-rounded\"> <div class=\"badge-content\"> <h4 class=\"color-white\" style=\"margin-top: 10px\"> Share with your friends and join the community </h4> </div> <a ng-click=\"share()\" class=\"badge-button\"> <img src=\"images/share.png\" alt=\"\"> </a> </div> </div> <div class=\"sub-home-header\" ng-include=\"'views/pages/home/choose-city.html'\"> </div> </div> <div class=\"mobile-header home-header visible-xs visible-sm\"> <div class=\"container\"> <div class=\"row\"> <div class=\"col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1\"> <h1 class=\"title color-white\"> Disturb the universe </h1> <p class=\"uppercase subtitle color-yellow\"> Join our 11th <br> 6-week program <br> in 1 of 6 countries </p> </div> <div class=\"xs-mt-30px col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1 text-center\"> <div class=\"panel panel-black text-center\"> <div class=\"panel-body\"> <div class=\"row\"> <div class=\"col-xs-12\"> <timer end-time=\"endTime\"> <div class=\"clock\"> <div class=\"clock-item\"> <h2 class=\"color-white\"> {{days | digits}} </h2> <p> days </p> </div> <div class=\"clock-item\"> <h2 class=\"color-white\"> {{hours | digits}} </h2> <p> hours </p> </div> <div class=\"clock-item\"> <h2 class=\"color-white\"> {{minutes | digits}} </h2> <p> min </p> </div> </div> </timer> </div> <div class=\"col-xs-12\"> <p class=\"color-white\"> Buy your spot <b class=\"color-yellow\">before {{endTimeString}}</b> for the early bird benefits package </p> </div> </div> </div> </div> <a href=\"\" ng-click=\"applynow.open()\" class=\"btn btn-white xs-mt-45px xs-mb-45px\">Apply now</a> </div> </div> </div> <div class=\"sub-mobile-header\"> <div class=\"divisor-selector\" ng-repeat=\"item in choose_city.items\"> <div class=\"divisor\" ng-repeat=\"city in item.items\"> <h4 class=\"color-white\"> {{city.name}} </h4> <p class=\"color-yellow\"> {{city.date}} </p> </div> </div> </div> </div> </section> <button class=\"btn btn-go-top\" ng-click=\"goTop()\" ng-class=\"{'active' : pixelsScrolled > 1920}\"></button> <div id=\"learnmore\" ng-repeat=\"item in sections\" ng-switch=\"item.type\"> <section class=\"exosphere-block\" ng-switch-when=\"quote\"> <div class=\"container\"> <div class=\"row\"> <div class=\"col-md-8 col-md-offset-2 col-xs-10 col-xs-offset-1\"> <p ng-class=\"{'quote-text' : item.quote}\"> {{item.title}} </p> <p class=\"color-yellow\"> {{item.subtitle}} </p> </div> </div> </div> </section> <section class=\"parallax-background\" ng-switch-when=\"parallax\" style=\"background: url({{item.image}}) center/cover no-repeat\"> <div class=\"container\"> <div class=\"row\"> <div class=\"col-md-10 col-md-offset-1 col-xs-12\"> <div class=\"row\"> <div class=\"col-md-6 col-xs-12\" ng-class=\"{'float-right' : item.side == 'right'}\"> <div class=\"content\"> <h1 class=\"color-white\" ng-class=\"{'just-title' : !item.subtitle}\" ng-bind-html=\"item.title\"></h1> <h4 class=\"color-yellow uppercase\"> <span class=\"underline\" ng-bind-html=\"item.subtitle\"></span> </h4> <div class=\"text\"> <p ng-bind-html=\"item.text\"></p> <ul class=\"list-styled\" ng-if=\"item.list\"> <li ng-repeat=\"item in item.list\" ng-bind-html=\"item\"></li> </ul> </div> </div> </div> </div> </div> </div> </div> </section> <section class=\"xs-pt-0px xs-pb-0px md-pt-90px md-pb-90px parallax-background\" ng-switch-when=\"infrograph\" style=\"background: url({{item.image}}) center/cover no-repeat\"> <!-- <img ng-if=\"item.image\" ng-src=\"{{item.image}}\" alt=\"\" width=\"100%\" class=\"parallax-image\"> --> <div class=\"container\"> <div class=\"row\"> <div class=\"col-lg-10 col-lg-offset-1 col-md-8 col-md-offset-2 col-xs-12\"> <div class=\"panel md-p-60px xs-p-0px xs-pt-30px xs-pb-30px\"> <div class=\"row\"> <div class=\"col-lg-10 col-lg-offset-1 col-md-8 col-md-offset-2 col-xs-10 col-xs-offset-1\"> <h2 class=\"color-black uppercase text-center\" ng-if=\"item.title\" ng-bind-html=\"item.title\"></h2> <h4 class=\"text-center color-yellow uppercase\" ng-if=\"item.subtitle\" ng-bind-html=\"item.subtitle\"></h4> <p class=\"text-center color-black-light xs-mt-50px xs-mb-60px\" ng-if=\"item.text\" ng-bind-html=\"item.text\"></p> </div> </div> <img ng-if=\"item.infograph\" ng-src=\"{{item.infograph}}\" alt=\"\" width=\"100%\"> <div class=\"row\" ng-if=\"item.button\"> <div class=\"col-xs-12\"> <center> <a ng-href=\"{{item.button.href}}\" class=\"btn btn-default text-center xs-mt-60px xs-mb-30px\"> {{item.button.title}} </a> </center> </div> </div> </div> </div> </div> </div> </section> <div ng-switch-when=\"include\"> <ng-include src=\"item.src\"></ng-include> </div> </div> <footer ng-include=\"'includes/footer.html'\"></footer>"
  );


  $templateCache.put('views/pages/news.html',
    "<h1>News</h1>"
  );


  $templateCache.put('views/pages/program.html',
    "<section> <div class=\"hero-header centered-header\" style=\"background: url('views/pages/program/img/m1.jpg') center/cover no-repeat\"> <div class=\"container\"> <div class=\"row\"> <div class=\"col-xs-12 text-center\"> <div class=\"title uppercase color-white\"> <span class=\"underline-yellow\"> <b> International program </b> </span> <h5 class=\"subtitle color-white uppercase\"> Learn <span class=\"color-yellow\">more about what is included in the 6-week program</span> </h5> </div> </div> <div class=\"col-xs-12 xs-mt-60px text-center\"> <div class=\"row\"> <div class=\"col-md-2 col-md-offset-5 col-xs-12\"> <a href=\"\" class=\"btn btn-white btn-block btn-inline\"> Curriculum </a> </div> <div class=\"col-md-2 col-md-offset-5 col-xs-12 xs-mt-20px\"> <a href=\"\" class=\"btn btn-white btn-block btn-inline\"> Streams </a> </div> <div class=\"col-md-2 col-md-offset-5 col-xs-12 xs-mt-20px\"> <a href=\"\" class=\"btn btn-white btn-block btn-inline\"> Projects </a> </div> <div class=\"col-md-2 col-md-offset-5 col-xs-12 xs-mt-60px\"> <a href=\"\" class=\"btn btn-block btn-white\"> Apply now </a> </div> </div> </div> </div> </div> </div> </section> <div ng-repeat=\"item in sections\" ng-switch=\"item.type\"> <section class=\"exosphere-block\" ng-switch-when=\"quote\"> <div class=\"container\"> <p> {{item.title}} </p> <p class=\"color-yellow\"> {{item.subtitle}} </p> </div> </section> <section class=\"parallax-background\" ng-switch-when=\"parallax\"> <img ng-if=\"item.image\" ng-src=\"{{item.image}}\" alt=\"\" width=\"100%\" class=\"parallax-image\"> <div class=\"container\"> <div class=\"row\"> <div class=\"col-md-5 col-xs-12\" ng-class=\"{'float-right' : item.side == 'right'}\"> <div class=\"content\"> <h1 class=\"color-white\"> {{item.title}} </h1> <h4 class=\"color-yellow uppercase\"> <span class=\"underline\"> {{item.subtitle}} </span> </h4> <div ng-bind-html=\"item.text\"></div> </div> </div> </div> </div> </section> <section class=\"xs-pt-90px xs-pb-90px parallax-background\" ng-switch-when=\"infrograph\"> <img ng-if=\"item.image\" ng-src=\"{{item.image}}\" alt=\"\" width=\"100%\" class=\"parallax-image\"> <div class=\"container\"> <div class=\"row\"> <div class=\"col-lg-10 col-lg-offset-1 col-md-8 col-md-offset-2 col-xs-12\"> <div class=\"panel xs-p-60px\"> <div class=\"row\"> <div class=\"col-lg-10 col-lg-offset-1 col-md-8 col-md-offset-2 col-xs-12\"> <h2 class=\"color-black uppercase text-center\" ng-if=\"item.title\" ng-bind-html=\"item.title\"></h2> <h4 class=\"text-center color-yellow uppercase\" ng-if=\"item.subtitle\" ng-bind-html=\"item.subtitle\"></h4> <p class=\"text-center color-black-light xs-mt-50px xs-mb-60px\" ng-if=\"item.text\" ng-bind-html=\"item.text\"></p> </div> </div> <img ng-if=\"item.infograph\" ng-src=\"{{item.infograph}}\" alt=\"\" width=\"100%\"> <div class=\"row\" ng-if=\"item.button\"> <div class=\"col-xs-12\"> <center> <a ng-href=\"{{item.button.href}}\" class=\"btn btn-default text-center xs-mt-60px xs-mb-30px\"> {{item.button.title}} </a> </center> </div> </div> </div> </div> </div> </div> </section> <div ng-switch-when=\"include\"> <ng-include src=\"item.src\"></ng-include> </div> </div> <footer ng-include=\"'includes/footer.html'\"></footer>"
  );


  $templateCache.put('views/viewpost.html',
    "<div class=\"row\"> <div class=\"col-md-12\"> <h1 ng-bind-html=\"title\"></h1> <div class=\"content\" bind-html-compile=\"content\"></div> </div> </div>"
  );

}]);
