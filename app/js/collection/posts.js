define(function (require) {
  var App = require('app');
  var Post = require('model/post');
  return Backbone.Collection.extend({
    model: Post,
    onShow: function() {
      console.log('feed collection!');
    }
  });
});
