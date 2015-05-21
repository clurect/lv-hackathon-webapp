define(function (require) {
  var App = require('app');

  return Backbone.Marionette.Controller.extend({
    login: function() {
      var App = require('app');
      window.location = App.Resources.get('oauth-login').href + App.Resources.getRedirectURI();
    }
  });
});