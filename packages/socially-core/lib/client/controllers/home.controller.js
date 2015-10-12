(function() {
  'use strict';

  //
  angular
    .module('core')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope'];

  function HomeController($scope) {
    $scope.currentUser = $rootScope.currentUser;
    console.log('HomeController');
  }

})();