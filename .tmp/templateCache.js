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
