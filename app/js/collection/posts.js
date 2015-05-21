define(function (require) {
  var App = require('app');
  var Post = require('model/post');
  return Backbone.Collection.extend({
    model: Post,
    url: "http://localhost:8080/ptsd-0.0.1/posts",
    onShow: function() {
      console.log('feed collection!');
    }
  });
});
