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
    .controller('HomeCtrl', function ( $document, $window, $scope, $sce, $rootScope, $routeParams, $route, wp, $anchorScroll, $location, $uibModal ) {

        $scope.route = $route;

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
    })

    .filter('digits', function() {
        return function(input) {
            if (input < 10) { 
                input = '0' + input;
            }

            return input;
        }
    })