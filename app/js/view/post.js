define(function (require) {
  var App = require('app');
  var template = require('text!tmpl/post.html');

  return Backbone.Marionette.ItemView.extend({
  	className: '',
    template: _.template(template)
  });
});