(function() {
    'use strict';

    angular
        .module('ABC')
        .controller('ABCCtrl', Ctrl);

    /* @ngInject */
    function Ctrl($scope) {
        /*jshint validthis: true */
        var vm = this;
        vm.title = 'Ctrl';

       	$scope.helloText = 'Hello World!';
        activate();

        function activate() {
        }
    }
})();

