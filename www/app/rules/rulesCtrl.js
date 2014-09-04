(function () {
    'use strict';

    angular.module('ScheduleApp').controller('RulesCtrl', ['scheduleApi', RulesCtrl]);

    function RulesCtrl(scheduleApi) {
        var vm = this;
        
        scheduleApi.getLeagueData().then(function(data){
            console.log("rulesctrl: ", data);
            vm.mainContent = data.league.rulesScreen;
            console.log("rulesctrl: ", data, vm.mainContent);
        });

    };
})();