define(function (require) {
  var App = require('app');
  var template = require('text!tmpl/login.html');

  return Backbone.Marionette.Layout.extend({
    id: 'page-login',
    template: _.template(template),
    events: {
      'click #login-button': 'onLogin'
    },
    onLogin: function(e) {
      e.preventDefault();
      App.service.login();
    }
  });
});