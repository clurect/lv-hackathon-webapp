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
  });
});