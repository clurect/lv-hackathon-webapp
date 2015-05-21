define(function (require) {
  var App = require('app');
  var Post = require('view/post');
  return Backbone.Model.extend({
    childView: Post,
    initialize: function() {

    }
  });
});
