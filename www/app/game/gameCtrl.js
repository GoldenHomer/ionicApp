(function () {
    'use strict';

    angular.module('scheduleApp').controller('GameCtrl', ['$stateParams', 'scheduleApi', GameCtrl]);

    function GameCtrl($stateParams, scheduleApi) {
        var vm = this;

        var gameId = Number($stateParams.id);
        var data = scheduleApi.getLeagueData();

        vm.game = _.find(data.games, { "id": gameId });

        console.log("game", vm.game);

    };
})();