(function () {
    'use strict';

    angular.module('scheduleApp').controller('LocationMapCtrl', ['$stateParams', 'scheduleApi', LocationMapCtrl]);

    function LocationMapCtrl($stateParams, scheduleApi) {
        var vm = this;
        
        vm.locationId = Number($stateParams.id);

        vm.map = {
            center: {
                latitude: 33.557876,
                longitude: -101.837433 // Good times.
            },
            zoom: 12
        };
        vm.marker = { }

        scheduleApi.getLeagueData().then(function(data){

            vm.location = _.find(data.locations, { id: vm.locationId });
            vm.marker = {
                latitude: vm.location.latitude,
                longitude: vm.location.longitude,
                title: vm.location.name + "<br/>(Tap for directions)",
                showWindow: true
            };

            vm.map.center.latitude = vm.location.latitude;
            vm.map.center.longitude = vm.location.longitude;
        });

        vm.locationClicked = function(marker){
            window.location = "geo:" + marker.latitude + "," + marker.longitude + ";u=35";
        };

    };
})();