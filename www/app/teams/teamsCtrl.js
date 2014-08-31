(function () {
    'use strict';

    angular.module('scheduleApp').controller('TeamsCtrl', ['scheduleApi', TeamsCtrl]);


    function TeamsCtrl(scheduleApi) {
        var vm = this;
        
        var data = scheduleApi.getLeagueData();
        console.log(data);
        vm.teams = data.teams;

    };
})();