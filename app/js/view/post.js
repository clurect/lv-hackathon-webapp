define(function (require) {
  var App = require('app');
  var template = require('text!tmpl/post.html');

  return Backbone.Marionette.Layout.extend({
  	className: 'post',
    template: _.template(template),
    regions: {
      'commentsRegion': '.comments-section'
    },
    events: {
      'click #add-comment:not(.btn-primary)': 'showComments',
      'click #add-comment.btn-primary': 'hideComments'
    },
    showComments: function (e) {
      $(e.currentTarget).addClass('btn-primary');
      App.router.controller.showComments(this.model, this.commentsRegion);
    },
    hideComments: function (e) {
      $(e.currentTarget).removeClass('btn-primary');
      this.commentsRegion.close();     
    }
  });
});
