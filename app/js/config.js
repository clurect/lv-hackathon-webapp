require.config({
  paths: {
    //Libraries
    'bootstrap': '../lib/sass-bootstrap/dist/js/bootstrap',
    'jquery': '../lib/jquery/dist/jquery',
    'underscore': '../lib/underscore/underscore',
    'backbone': '../lib/backbone/backbone',
    'backbone.wreqr': '../lib/backbone.wreqr/lib/backbone.wreqr',
    'backbone.babysitter': '../lib/backbone.babysitter/lib/backbone.babysitter',
    'marionette': '../lib/marionette/lib/core/amd/backbone.marionette',
    'lv-widgets': '../lib/lv-widgets/dist/lv-widgets',
    'moment': '../lib/moment/moment',
    'tmpl':'../html',
    
    //Views
    'navMenu': 'view/navMenu',

    //Plugins
    'text': '../lib/requirejs-text/text'
  },
  shim: {
    'bootstrap': {
      deps: ['jquery'],
      exports: 'jquery'
    }
  }
});

require([
  'app', 
  'router', 
  'controller/popupController', 
  'controller/serviceController'
  ], function (App, Router, PopupController, ServiceController) {

    App.processRoutes = function() {
      var routes = App.Resources.isLoggedIn() ? App.router.loggedInRoutes : App.router.loggedOutRoutes;
      App.router.processAppRoutes(App.router.controller, routes);
    }

    App.addInitializer(function () {
      this.router = new Router();
      this.popups = new PopupController();
      this.service = new ServiceController();
      App.processRoutes();
      this.vent.trigger('route:startup');
    });
    App.start();
});