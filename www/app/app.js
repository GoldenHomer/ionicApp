angular.module("ScheduleApp", ["ionic"])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('home', {
      url: "/home",
      templateUrl: "app/home/home.html"
    })

    .state('home.leagues',{ // dot notation signifies league state is inheriting from home state above
      url:"/leagues", // /home/leagues
      views: {
        "tab-leagues": {
          templateUrl:"app/home/leagues.html"
        }
      }
    })

    .state('home.myteams',{ // same here.
      url:"/myteams",
      views: {
        "tab-myteams": {
          templateUrl:"app/home/myteams.html"
        }
      }
    })

    .state('app',{
      url:"/app",
      templateUrl:"app/layout/menu-layout.html"
    });

    // If no above states are matched, fallback to...
  $urlRouterProvider.otherwise('/home/leagues');
  
});