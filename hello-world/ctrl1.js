(function() {
    'use strict';

    angular
        .module('ABC')
        .controller('FirstCtrl', Ctrl);

    /* @ngInject */
    function Ctrl($scope) {
        $scope.message = 'Hello World!';

    }
})();


(function() {
    'use strict';

    angular
        .module('ABC')
        .controller('ExampleController', Ctrl);

    /* @ngInject */
    function Ctrl($window,$scope) {
        $scope.name = 'World';

        $scope.greet = function() {
            $window.alert('Hello ' + $scope.name);
        };
    }
})();
