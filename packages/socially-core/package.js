Package.describe({
  name: "socially:core",
  summary: "Socially core package",
  version: "0.0.1"
});

Package.onUse(function (api) {

  api.versionsFrom(['METEOR@1.0']);
  
  api.use([
    'angular',
    'angularui:angular-ui-router'
  ]);

  api.addFiles([
    'lib/client/lib/app.js',
    'lib/client/core.module.js',
    'lib/client/config/routes.js',
    'lib/client/controllers/home.controller.js'
  ], 'client');

  api.addAssets([
    'lib/public/css/materialize-icons.css',
    'lib/public/css/materialize.min.css',
    'lib/public/font/roboto/Roboto-Bold.ttf',
    'lib/public/font/roboto/Roboto-Bold.woff',
    'lib/public/font/roboto/Roboto-Bold.woff2',
    'lib/public/font/roboto/Roboto-Light.ttf',
    'lib/public/font/roboto/Roboto-Light.woff',
    'lib/public/font/roboto/Roboto-Light.woff2',
    'lib/public/font/roboto/Roboto-Medium.ttf',
    'lib/public/font/roboto/Roboto-Medium.woff',
    'lib/public/font/roboto/Roboto-Medium.woff2',
    'lib/public/font/roboto/Roboto-Regular.ttf',
    'lib/public/font/roboto/Roboto-Regular.woff',
    'lib/public/font/roboto/Roboto-Regular.woff2',
    'lib/public/font/roboto/Roboto-Thin.ttf',
    'lib/public/font/roboto/Roboto-Thin.woff',
    'lib/public/font/roboto/Roboto-Thin.woff2',
    'lib/public/js/materialize.min.js',
    'lib/client/templates/home.client.view.ng.html',
    'lib/client/index.html'
  ], 'client');
  
  // api.addFiles([
  //   'lib/server/startup/loadParties.js',
  // ], 'server');

  api.export('ApplicationConfiguration');
  
});