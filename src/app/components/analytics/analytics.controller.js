(function () {

    angular.module('app')
        .controller('AnalyticsController', AnalyticsController);
    

    function AnalyticsController( $scope, $rootScope, $state, $stateParams, $timeout) {
        alert("Hola AnalyticsController");

        $scope.myDataSource = {
            chart: {
                ciudad: "Speed Zone",
                subCaption: "",
                numberPrefix: "$",
                theme: "ocean"
            },
            data:[
                {"zoneId":"Calle 85", "data":{"count":1,"speed":10,"time":1466781876681}},
                {"zoneId":"Salitre plaza", "data":{"count":2,"speed":8.5,"time":1466781876681}},
                {"zoneId":"Parque 93", "data":{"count":4,"speed":15,"time":1466781876681}},
                {"zoneId":"Calle 80", "data":{"count":3,"speed":13.5,"time":1466781876681}},
                {"zoneId":"Centro", "data":{"count":1,"speed": 9 ,"time":1466781876681}}
            ]
        };

        $timeout(function () {
            $scope.cityAsync = [
                {"zoneId":"Calle 85", "data":{"count":1,"speed":10,"time":1466781876681}},
                {"zoneId":"Salitre plaza", "data":{"count":2,"speed":8.5,"time":1466781876681}},
                {"zoneId":"Parque 93", "data":{"count":4,"speed":15,"time":1466781876681}},
                {"zoneId":"Calle 80", "data":{"count":3,"speed":13.5,"time":1466781876681}},
                {"zoneId":"Centro", "data":{"count":1,"speed": 9 ,"time":1466781876681}}
            ];
        }, 3000);

    }



})();
