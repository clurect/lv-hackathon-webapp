define(function (require) {
  var App = require('app');
  var template = require('text!../../html/main.html');

  return Backbone.Marionette.Layout.extend({
    className: '',
    template: _.template(template),
    regions: {
      'menuRegion': '#menu',
      'headerRegion': '.header',
      'postListRegion': '.post-list'
    },
    events: {
      
    }

  });
});
