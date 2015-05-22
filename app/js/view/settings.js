define(function (require) {
  var App = require('app');
  var template = require('text!tmpl/settings.html');

  return Backbone.Marionette.Layout.extend({
    id: 'page-settings',
    className: 'settings-page',
    template: _.template(template)
  });
});