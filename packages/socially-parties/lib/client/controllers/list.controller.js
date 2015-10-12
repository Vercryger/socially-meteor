(function() {
  'use strict';

  //
  angular
    .module('parties')
    .controller('PartiesListCtrl', PartiesListCtrl);

  PartiesListCtrl.$inject = ['$rootScope', '$scope', '$meteor'];

  function PartiesListCtrl($rootScope, $scope, $meteor) {
    $scope.parties = $meteor.collection(Parties);

    $scope.add = function(party) {
      party.owner = $rootScope.currentUser._id;
      $scope.parties.save(party); 
      $scope.newParty = '';
    };

    $scope.remove = function(party) {
      $scope.parties.remove(party);
    };

    $scope.removeAll = function() {
      $scope.parties.remove();
    };
  }

})();