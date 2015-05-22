define(function (require) {
  var App = require('app');
  var Post = require('view/post');
  var template = require('text!tmpl/readPost.html');
  
  return Backbone.Marionette.Layout.extend({
    template: _.template(template),
    regions: {
      'postRegion': '#post-view',
      'commentsRegion': '#comments-view'
    },
    onShow: function() {
      var post = Backbone.Marionette.getOption(this, 'post');
      var postView = new Post({ model: post, readOnly: true });
      this.postRegion.show(postView);
    }
  });
});