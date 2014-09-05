(function () {
    'use strict';

    angular.module('ScheduleApp').controller('StandingsCtrl', ['scheduleApi', StandingsCtrl]);

    function StandingsCtrl(scheduleApi) {
        var vm = this;
        
        scheduleApi.getLeagueData().then(function(data){
			vm.standings = data.standings;
        });
    };
})();