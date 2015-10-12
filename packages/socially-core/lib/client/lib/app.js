/**
 * The global namespace for Core.
 * @namespace ApplicationConfiguration
 */
// Init the application configuration module for AngularJS application
ApplicationConfiguration = (function() {
  // Init module configuration options
  var applicationModuleName = 'socially';
  var applicationModuleVendorDependencies = ['angular-meteor', 'ui.router', 'ngMaterial'];

  // Add a new vertical module
  var registerModule = function(moduleName, dependencies) {
    // Create angular module
    angular.module(moduleName, dependencies || []);

    // Add the module to the AngularJS configuration file
    angular.module(applicationModuleName).requires.push(moduleName);
  };

  return {
    applicationModuleName: applicationModuleName,
    applicationModuleVendorDependencies: applicationModuleVendorDependencies,
    registerModule: registerModule
  };
})();

angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);

// Setting HTML5 Location Mode
angular.module(ApplicationConfiguration.applicationModuleName).config(['$locationProvider',
  function($locationProvider) {
    $locationProvider.html5Mode(true);
  }
]);

function onReady() {

  //Init the app
  angular.bootstrap(document, ['socially']);

}

if (Meteor.isCordova)
  angular.element(document).on("deviceready", onReady);
else
  angular.element(document).ready(onReady);