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
    'tmpl':'../html',

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

require(['app', 'router', 'controller/popupController', 'controller/serviceController'], function (App, Router, PopupController, ServiceController) {
  App.addInitializer(function () {
    this.router = new Router();
    this.popups = new PopupController();
    this.service = new ServiceController();
    this.vent.trigger('route:startup');
  });
  App.start();
});