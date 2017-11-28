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
    .controller('ProgramCtrl', function ($scope, $rootScope, $routeParams, $route, wp ) {

        console.log("ProgramCtrl");

        $scope.sections = [
            {
                type: "quote",
                title: "Tradional education gives you the tools to confirm reality.",
                subtitle: "Exosphere gives you the tools to transform it."
            },
            {
                type: "infrograph",
                image: "views/pages/program/img/m3.jpg",
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
                image: "views/pages/program/img/m5.jpg",
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

    })