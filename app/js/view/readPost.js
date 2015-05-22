define(function (require) {
  var App = require('app');
  var Post = require('view/post');
  var PostModel = require('model/post');
  var template = require('text!tmpl/readPost.html');
  
  return Backbone.Marionette.Layout.extend({
    template: _.template(template),
    regions: {
      'postRegion': '#post-view'
    },
    onShow: function() {
      var post = Backbone.Marionette.getOption(this, 'post');
      var postID = Backbone.Marionette.getOption(this, 'postID');

      App.service.getPost(postID).then(function(post) {
        var post = new PostModel(post);
        var postView = new Post({ model: post, readOnly: true });
        this.postRegion.show(postView);
        postView.showCommentsRegion();
      }.bind(this));
    }
  });
});