(function () {
    'use strict';

    angular.module('scheduleApp').controller('LocationsCtrl', ['scheduleApi', LocationsCtrl]);

    function LocationsCtrl(scheduleApi) {
        var vm = this;
        
        var data = scheduleApi.getLeagueData();
        vm.locations = data.locations;

    };
})();