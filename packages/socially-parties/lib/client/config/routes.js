(function() {
    'use strict';

  // Setting up route
  angular
    .module('parties')
    .config(Routes);

  Routes.$inject = ['$stateProvider'];

  function Routes($stateProvider) {

    $stateProvider
    
      .state('parties', {
        url: '/parties',
        templateUrl: 'client/templates/parties-list.ng.html',
        controller: 'PartiesListCtrl'
      })
      .state('partyDetails', {
        url: '/parties/:partyId',
        templateUrl: 'client/templates/party-details.ng.html',
        controller: 'PartyDetailsCtrl'
      });
  }
})();