'use strict';


angular.module('angularWpApp')
  .factory('wp', function ($q,$http) {

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

  });
