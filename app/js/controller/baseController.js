define(function (require) {
  var App = require('app');
  var MainView = require('view/main');
  var LoginView = require('view/login');
  var NewPostView = require('view/newPost');
  var NavMenu = require('view/navMenu');

  return Backbone.Marionette.Controller.extend({

    initialize: function() {
      App.views = {};
      App.views.main = new MainView();
      App.views.navMenu = new NavMenu();
      App.views.loginView = new LoginView();
    },
    showLogin: function() {
      App.containerRegion.show(App.views.loginView);
    },
    showIndex: function() {
      App.menuRegion.show(App.views.navMenu);
      App.containerRegion.show(App.views.main);
    },
    newPost: function(type) {
      var newPostView = new NewPostView({
        type: type
      });
      App.containerRegion.show(App.views.navMenu);
      App.containerRegion.show(newPostView);
    }
  });
});