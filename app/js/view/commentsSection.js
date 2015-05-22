define(function (require) {
  var App = require('app');
  var CommentView = require('view/comment');
  var Collection = require('collection/comments');
  var template = require('text!../../html/commentsSection.html');
  
  return Backbone.Marionette.CompositeView.extend({
    template: _.template(template),
    className: 'comments-content',
    itemView: CommentView,
    itemViewContainer: '.comments-list',
    collection: new Collection(),
    ui: {
      newComment: '#new-comment'
    },
    events: {
      'click #new-comment-btn': 'saveComment'
    },
    onShow: function () {
      this.getComments();
    },
    saveComment: function () {
      var comment = this.ui.newComment.val();
      var that = this;
      
      this.ui.newComment.val('');
      
      if (comment) {
        App.service.request({
          "comment": comment,
          "author": "jhillhouse",
          "authorType": "veteran",
          "date": Date.now(),
          "post": this.model.get('id')
        }, 'PUT').then(function() {
          that.getComments();
        });
      }
    },
    getComments: function () {
      this.collection.fetch({
        url: '/ptsd-0.0.1/post/' + this.model.get('id') + '/comments'
      });
    }
  });
});