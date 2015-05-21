define(function (require) {
  var App = require('app');
  var template = require('text!tmpl/header.html');

  return Backbone.Marionette.ItemView.extend({
    className: 'header-content',
    template: _.template(template),
    events: {
      'click #new-post': 'newPost'
    },
    newPost: function(e) {
      e.preventDefault();
      App.router.navigate('#newPost', { trigger: true });
    }
  });
});