(function () {
    'use strict';

    angular.module('ScheduleApp').controller('LocationScheduleCtrl', ['$stateParams', 'scheduleApi', LocationScheduleCtrl]);

    function LocationScheduleCtrl($stateParams, scheduleApi) {
        var vm = this;
        
        vm.locationId = Number($stateParams.id);

        scheduleApi.getLeagueData().then(function(data){
            vm.location = _.find(data.locations, { id: vm.locationId });
            vm.games = _.filter(data.games, function (item) { return item.location === vm.location.name; });
        });

        vm.setScoreCss = function(firstScore, secondScore){
            return (Number(firstScore) > Number(secondScore) ? "positive bold" : "");
        }
    };
})();