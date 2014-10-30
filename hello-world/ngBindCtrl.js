(function() {
    'use strict';

    angular
        .module('twoWayBindApp')
        .controller('bindCtrl', Ctrl);

    /* @ngInject */
    function Ctrl($scope) {
        /*jshint validthis: true */
        $scope.myModel = '';
        activate();

        function activate() {}
    }
})();
