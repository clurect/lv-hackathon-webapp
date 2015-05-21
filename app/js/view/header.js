define(function (require) {
  var App = require('app');
  var template = require('text!../../html/header.html');

  return Backbone.Marionette.ItemView.extend({
    className: 'header-content',
    template: _.template(template),

    events: {
    }

  });
});
