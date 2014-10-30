var myApp = angular.module('myApp', []);
myApp.controller('MainCtrl', ['$scope', function($scope) {

    $scope.greeting = 'KaVi';


    $scope.numbers = [10, 25, 35, 45, 60, 80, 100];

    $scope.lowerBound = 42;

    $scope.greaterThanNum = function(item) {
        return item > $scope.lowerBound;
    }
}]);

myApp.filter('reverse', function() {
    return function(input, uppercase) {
        var out = "";

        for (var i = 0; i < input.length; i++) {
            out = input.charAt(i) + out;
        }

        if (uppercase) {
            out = out.toUpperCase();
        }
        return out;
    }
});
