Package.describe({
  name: "socially:parties",
  summary: "Socially parties package",
  version: "0.0.1"
});

Package.onUse(function (api) {

  var both = ['client', 'server'];

  api.versionsFrom(['METEOR@1.0']);

  api.use([
    'mongo',
    'angular',
    'angularui:angular-ui-router',
    'socially:core'
  ]);

  api.addFiles('lib/parties.js', both);

  api.addFiles([
    'lib/client/parties.module.js',
    'lib/client/config/routes.js',
    'lib/client/controllers/details.controller.js',
    'lib/client/controllers/list.controller.js'
  ], 'client');

  api.addAssets([
    'lib/client/templates/parties-list.ng.html',
    'lib/client/templates/party-details.ng.html'
  ], 'client');
  
  api.addFiles([
    'lib/server/publications.js',
    'lib/server/startup/loadParties.js',
  ], 'server');

  api.export('Parties');
  
});