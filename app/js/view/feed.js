define(function (require) {
  var App = require('app');
  var Post = require('view/post');
  var Collection = require('collection/posts');
  return Backbone.Marionette.CollectionView.extend({
    itemView: Post,
    collection: new Collection(),
    onShow: function() {
      console.log('show feed');
    }
  });
});
