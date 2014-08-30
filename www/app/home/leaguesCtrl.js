(function () {
    'use strict';

    angular.module('scheduleApp').controller('LeaguesCtrl', ['$state', 'scheduleApi', LeaguesCtrl]);

    function LeaguesCtrl($state, scheduleApi) {
        var vm = this;
        
        var data = scheduleApi.getLeagues();

        console.log(data);
        vm.leagues = data;

        vm.selectLeague = function(id){
            $state.go("app.teams");
        }

    };
})();