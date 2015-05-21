define(function (require) {
  var App = require('app');
  var HeaderView = require('view/header');
  var FooterView = require('view/footer');
  var MainView = require('view/main');

  return Backbone.Marionette.Controller.extend({

    initialize: function () {
      App.views = {};
      App.views.main = new MainView();
      App.views.header = new HeaderView();
      App.views.footer = new FooterView();
      App.containerRegion.show(App.views.main);
    },
    showIndex: function () {
      
    },
    showAbout: function () {

    }
  });
});
