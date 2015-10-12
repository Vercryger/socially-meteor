(function() {
  'use strict';

  //
  angular
    .module('parties')
    .controller('PartyDetailsCtrl', PartyDetailsCtrl);

  PartyDetailsCtrl.$inject = ['$scope', '$stateParams', '$meteor'];

  function PartyDetailsCtrl($scope, $stateParams, $meteor) {
    $scope.party = $meteor.object(Parties, $stateParams.partyId, false);

    $scope.save = function() {
      $scope.party.save().then(function(numberOfDocs){
        console.log('save success doc affected ', numberOfDocs);
      }, function(error){
        console.log('save error', error);
      });
    };

    $scope.reset = function() {
      $scope.party.reset();
    };
  }

})();