define(function (require) {
  var App = require('app');
  var HeaderView = require('view/header');
  var MainView = require('view/main');
  var LoginView = require('view/login');

  return Backbone.Marionette.Controller.extend({

    initialize: function () {
      App.views = {};
      App.views.main = new MainView();
      App.views.header = new HeaderView();
    },
    showIndex: function () {
      App.containerRegion.show(App.views.main);
      App.views.main.headerRegion.show(App.views.header);
    },
    showAbout: function () {

    },
    showLogin: function() {
      console.log("showing login");
      App.containerRegion.show(new LoginView());
    }
  });
});