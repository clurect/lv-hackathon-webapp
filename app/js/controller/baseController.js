define(function (require) {
  var App = require('app');
  var HeaderView = require('view/header');
  var MainView = require('view/main');

  return Backbone.Marionette.Controller.extend({

    initialize: function () {
      App.views = {};
      App.views.main = new MainView();
      App.views.header = new HeaderView();
      App.containerRegion.show(App.views.main);
      App.views.main.headerRegion.show(App.views.header);
    },
    showIndex: function () {
      
    },
    showAbout: function () {

    }
  });
});
