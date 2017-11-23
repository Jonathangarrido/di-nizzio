'use strict';

(function () {

  config.$inject = ['$routeProvider','AnalyticsProvider'];
  function config($routeProvider,AnalyticsProvider){
    $routeProvider
      .when('/',{
        template: '<mi-home></mi-home>'
      })
      .when('/receta/:id',{
        template: '<mi-receta></mi-receta>'
      })
      .otherwise({
        redirectTo: '/'
      });

      // initial configuration
        AnalyticsProvider.setAccount('UA-40787317-3');

        // track all routes/states (or not)
        AnalyticsProvider.trackPages(true);
 
        // Use analytics.js instead of ga.js
        AnalyticsProvider.useAnalytics(true);

        AnalyticsProvider.trackPrefix('DiNizzio');

        // change page event name
        AnalyticsProvider.setPageEvent('$stateChangeSuccess');
        
    
  }

  Run.$inject = ['Analytics'];
  function Run(Analytics){
  }

  angular
    .module('dailyApp', [
      'ngRoute',
      'ngAnimate',
      'ngResource',
      'ngSanitize',
      'miMenu',
      'miHome',
      'miReceta',
      'miModal',
      'Modal',
      'apiService',
      'angular-google-analytics'
      ])
    .config(config)
    .run(Run);

})();