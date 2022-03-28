'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', function ($scope) {
        $scope.bgStyle ={
            "width":"0px",
            "height":"0px",
        }
        $scope.getVPDimnsn = function () {
            $scope.bgStyle.width =
                Math.max(document.documentElement.clientWidth,
                    window.innerWidth || 0).toString() + "px";
            $scope.bgStyle.height =
                Math.max(document.documentElement.clientHeight,
                    window.innerHeight || 0) .toString() + "px";
        };
        $scope.getVPDimnsn();
        console.log($scope.bgStyle);
    }]);