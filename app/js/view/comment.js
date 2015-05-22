define(function (require) {
  var App = require('app');
  var template = require('text!../../html/comment.html');
  
  return Backbone.Marionette.ItemView.extend({
    template: _.template(template),
    className: 'comment'
  });
});