define(function (require) {
  var App = require('app');

  return Backbone.Marionette.Controller.extend({
    login: function() {
      var App = require('app');
      window.location = App.Resources.get('oauth-login').href + App.Resources.getRedirectURI();
    },
    logout: function() {
      var App = require('app');
      App.Resources.logout();
    },
    newPost: function(payload) {
      var endpoint = 'ptsd-0.0.1/posts';

      var promise = $.ajax({
        type: 'POST',
        contentType: 'application/json; charset=UTF-8',
        url: endpoint,
        data: payload,
        dataType: 'json'
      });

      return promise;
    }
  });
});