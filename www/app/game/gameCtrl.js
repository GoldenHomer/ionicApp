(function () {
    'use strict';

    angular.module('ScheduleApp').controller('GameCtrl', ['$stateParams', 'scheduleApi', GameCtrl]);

    function GameCtrl($stateParams, scheduleApi) {
        var vm = this;

        var gameId = Number($stateParams.id);
        eliteApi.getLeagueData().then(function(data){
            vm.game = _.find(data.games, { "id": gameId });
        });
    };
})();