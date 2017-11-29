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
    .config(function(hljsServiceProvider) {
        hljsServiceProvider.setOptions({
            // replace tab with 4 spaces
            tabReplace: '    '
        });
    })
    .config(function($routeProvider, $httpProvider, $locationProvider) {

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


        $httpProvider.interceptors.push(function($q, $injector) {
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
        });

    })