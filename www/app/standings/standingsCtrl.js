(function () {
    'use strict';

    angular.module('scheduleApp').controller('StandingsCtrl', ['scheduleApi', StandingsCtrl]);

    function StandingsCtrl(scheduleApi) {
        var vm = this;
        
        var data = scheduleApi.getLeagueData();

        vm.standings = data.standings;

    };
})();