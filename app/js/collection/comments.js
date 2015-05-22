define(function (require) {
  var App = require('app');
  var Comment = require('model/comment');
  return Backbone.Collection.extend({
    model: Comment,
    url: "http://localhost:8080/ptsd-0.0.1/comments"
  });
});