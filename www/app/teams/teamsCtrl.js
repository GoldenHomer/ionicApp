(function () {
    'use strict';

    angular.module('scheduleApp').controller('TeamsCtrl', ['scheduleApi', TeamsCtrl]);


    function TeamsCtrl(scheduleApi) {
        var vm = this;
        
       	scheduleApi.getLeagueData().then(function(data){
       		vm.teams = data.teams;
       	});
    };
})();