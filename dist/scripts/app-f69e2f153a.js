/**
 * Created by AKDESK17 on 5/17/2017.
 */
!function(){"use strict";angular.module("app",[])}(),function(){"use strict";function t(t,e,n){}t.$inject=["$rootScope","$state","$http"],angular.module("app").run(t)}(),function(){"use strict";function t(t,e){t.state("news",{url:"/news",data:{displayName:"News"},views:{"@":{templateUrl:"app/components/news/news.html",controller:"NewsController",controllerAs:"news"}}}).state("analytics",{url:"/analytics",data:{displayName:"Analytics"},views:{"@":{templateUrl:"app/components/analytics/analytics.html",controller:"AnalyticsController",controllerAs:"analytics"}}}),e.otherwise("/news")}angular.module("app").config(t),t.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){"use strict";function t(t){t.debugEnabled(!0)}t.$inject=["$logProvider"],angular.module("app").config(t)}();
//# sourceMappingURL=../maps/scripts/app-f69e2f153a.js.map
