define(function (require) {
  var App = require('app');
  var HeaderView = require('view/header');
  var FooterView = require('view/footer');
  var LoginView = require('view/login');

  return Backbone.Marionette.Controller.extend({

    initialize: function () {
      App.views = {};
      App.views.header = new HeaderView();
      App.views.footer = new FooterView();
      App.headerRegion.show(App.views.header);
      App.footerRegion.show(App.views.footer);
    },
    showIndex: function () {
      App.Resources.checkROA();
    },
    showAbout: function () {

    },
    showLogin: function() {
      console.log("showing login");
      App.contentRegion.show(new LoginView());
    }
  });
});