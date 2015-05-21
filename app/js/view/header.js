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
      App.router.navigate('#new-post', { trigger: true });
      e.preventDefault();
    }
    askADoctor: function(e) {
      App.router.navigate('#new-post/ask-a-doctor', { trigger: true });
      e.preventDefault();
    }
  });
});