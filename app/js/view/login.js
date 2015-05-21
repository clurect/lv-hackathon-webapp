define(function (require) {
  var App = require('app');
  var template = require('text!templates/login.html');

  return Backbone.Marionette.Layout.extend({
    id: 'page-login',
    template: _.template(template)
  });
});