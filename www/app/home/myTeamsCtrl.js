(function () {
	'use strict';

	angular.module('scheduleApp').controller('MyTeamsCtrl', ['$state', 'myTeamsService', 'scheduleApi', MyTeamsCtrl]);

	function myTeamsCtrl($state, myTeamsService, scheduleApi){
		var vm = this;

		vm.myTeams = myTeamsService.getFollowedTeams();

		vm.goToTeam = function(team){
			scheduleApi.setLeagueId(team.leagueId);
			$state.go("app.teamDetail", {id: team.id});
		};
	};
})();