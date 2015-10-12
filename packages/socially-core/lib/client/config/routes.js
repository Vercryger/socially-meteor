(function() {
  'use strict';

  // Setting up route
  angular
    .module('core')
    .config(Routes);

  Routes.$inject = ['$stateProvider', '$urlRouterProvider'];

  function Routes($stateProvider, $urlRouterProvider) {
    // Redirect to home view when route not found
    $urlRouterProvider.otherwise('/');

    // Home state routing
    $stateProvider.
    state('home', {
      url: '/',
      templateUrl: 'lib/client/templates/home.client.view.ng.html',
      controller: 'HomeController'
    });
  }
})();