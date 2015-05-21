define(function (require) {
  var App = require('app');
  var template = require('text!../../html/header.html');

  return Backbone.Marionette.ItemView.extend({
    id: 'header',
    tagName: 'div',
    className: '',
    template: _.template(template),

    events: {
    }

  });
});
