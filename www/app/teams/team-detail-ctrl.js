(function () {
    'use strict';

    angular.module('ScheduleApp').controller('TeamDetailCtrl', ['$stateParams', TeamDetailCtrl]);

    function TeamDetailCtrl($stateParams) {
        var vm = this;
        
        console.log("$stateParams", $stateParams);

    };
})();