(function () {
    'use strict';

    angular.module('scheduleApp').controller('LocationsCtrl', ['scheduleApi', LocationsCtrl]);

    function LocationsCtrl(scheduleApi) {
        var vm = this;
        
        scheduleApi.getLeagueData().then(function(data){
        	vm.locations = data.locations;
        });
    };
})();