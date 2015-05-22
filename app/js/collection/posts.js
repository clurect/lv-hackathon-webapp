define(function (require) {
  var App = require('app');
  var Post = require('model/post');
  return Backbone.Collection.extend({
    model: Post,
    url: "/ptsd-0.0.1/posts"
  });
});
