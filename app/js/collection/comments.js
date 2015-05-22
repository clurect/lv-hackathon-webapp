define(function (require) {
  var App = require('app');
  var Comment = require('model/comment');
  return Backbone.Collection.extend({
    model: Comment
  });
});