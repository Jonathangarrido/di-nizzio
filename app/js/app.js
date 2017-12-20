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
      .when('/producto/:id',{
        template: '<mi-producto></mi-producto>'
      })
      .otherwise({
        redirectTo: '/'
      });

      // initial configuration
        AnalyticsProvider.setAccount('UA-110161951-1');

        // track all routes/states (or not)
        AnalyticsProvider.trackPages(true);
 
        // Use analytics.js instead of ga.js
        AnalyticsProvider.useAnalytics(true);

        AnalyticsProvider.trackPrefix('Di Nizzio');

        // change page event name
        AnalyticsProvider.setPageEvent('$stateChangeSuccess');
        
    
  }

  Run.$inject = ['Analytics'];
  function Run(Analytics){
  }

  angular
    .module('dinizzio', [
      'ngRoute',
      'ngSanitize',
      'miMenu',
      'miHome',
      'miReceta',
      'miProducto',
      'miModal',
      'Modal',
      'apiService',
      'angular-google-analytics'
      ])
    .config(config)
    .run(Run);

})();