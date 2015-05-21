define(function (require) {
  var App = require('app');
  var MainView = require('view/main');
  var LoginView = require('view/login');
  var NavMenu = require('view/navMenu');

  return Backbone.Marionette.Controller.extend({

    initialize: function() {
      App.views = {};
      App.views.main = new MainView();
      App.views.navMenu = new NavMenu();
      App.views.loginView = new LoginView();
    },
    showIndex: function() {
      App.menuRegion.show(App.views.navMenu);
      App.containerRegion.show(App.views.main);
    },
    showLogin: function() {
      App.containerRegion.show(App.views.loginView);
    }
  });
});