/**
 * Created by AKDESK17 on 5/17/2017.
 */
!function(){"use strict";angular.module("app",["ui.router"])}(),function(){function s(s,a,e,t){var i=this;i.hola="prueba"}s.$inject=["$scope","$rootScope","$state","$stateParams"],angular.module("app").controller("NewsController",s)}(),function(){function s(s,a,e,t){alert("Hola AnalyticsController"),s.myDataSource={chart:{ciudad:"Speed Zone",subCaption:"",numberPrefix:"$",theme:"ocean"},data:[{zoneId:"Calle 85",data:{count:1,speed:10,time:1466781876681}},{zoneId:"Salitre plaza",data:{count:2,speed:8.5,time:1466781876681}},{zoneId:"Parque 93",data:{count:4,speed:15,time:1466781876681}},{zoneId:"Calle 80",data:{count:3,speed:13.5,time:1466781876681}},{zoneId:"Centro",data:{count:1,speed:9,time:1466781876681}}]}}s.$inject=["$scope","$rootScope","$state","$stateParams"],angular.module("app").controller("AnalyticsController",s)}(),function(){"use strict";function s(s,a,e){}s.$inject=["$rootScope","$state","$http"],angular.module("app").run(s)}(),function(){"use strict";function s(s,a){s.state("news",{url:"/news",data:{displayName:"News"},views:{"@":{templateUrl:"app/components/news/news.html",controller:"NewsController",controllerAs:"news"}}}).state("analytics",{url:"/analytics",data:{displayName:"Analytics"},views:{"@":{templateUrl:"app/components/analytics/analytics.html",controller:"AnalyticsController",controllerAs:"analytics"}}}),a.otherwise("/news")}s.$inject=["$stateProvider","$urlRouterProvider"],angular.module("app").config(s)}(),function(){"use strict";function s(s){s.debugEnabled(!0)}s.$inject=["$logProvider"],angular.module("app").config(s)}(),angular.module("app").run(["$templateCache",function(s){s.put("app/components/analytics/analytics.html",'<div><div class="barra-lateral"><ul><li>Navigates</li><li>Analytics</li><li>Navigates</li><li>Navigates</li><li>Navigates</li></ul></div><div><fusioncharts width="600" height="400" type="column2d" datasource="{{myDataSource}}"></fusioncharts></div><div><fusioncharts width="600" height="400" type="pie3d" datasource="{{myDataSource}}"></fusioncharts></div></div>'),s.put("app/components/news/news.html",'<div><div class="top"><div class="Rectangle-2189-Copy"><img src="C:\\Users\\AKDESK01\\Desktop\\rokk3rlabsTest\\src\\assets\\img\\r-3-l-logo-application-02.png" srcset="assets/img/r-3-l-logo-application-02@2x.png 2x, assets/img/r-3-l-logo-application-02@3x.png 3x" class="R3L_Logo_Application_02"></div></div><div class="left_menu"><p class="Navigate">NAVIGATE</p><div class="Line"></div><div class="Rectangle-vacio"><img src="assets/img/analitycs.png" srcset="assets/img/analitycs@2x.png 2x, assets/img/analitycs@3x.png 3x" class="analitycs"><p class="Analytics">Analytics</p></div><div class="Rectangle-vacio"><img src="assets/img/newspaper-o.png" srcset="assets/img/newspaper-o@2x.png 2x, assets/img/newspaper-o@3x.png 3x" class="newspaper-o"><p class="News">News</p></div><div class="Rectangle-vacio"><img src="assets/img/board-brief.png" srcset="assets/img/board-brief@2x.png 2x, assets/img/board-brief@3x.png 3x" class="board-brief"><p class="Board-Brief">Board Brief</p></div><div class="Rectangle-vacio"><img src="assets/img/briefcase.png" srcset="assets/img/briefcase@2x.png 2x, assets/img/briefcase@3x.png 3x" class="briefcase"><p class="Briefcase">Briefcase</p></div><div class="Rectangle-vacio"><img src="assets/img/briefcase.png" srcset="assets/img/briefcase@2x.png 2x, assets/img/briefcase@3x.png 3x" class="briefcase"><p class="Briefcase">BClose Menu</p></div></div></div>')}]);
//# sourceMappingURL=../maps/scripts/app-2163d1376d.js.map
