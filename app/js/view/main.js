define(function (require) {
  var App = require('app');
  var template = require('text!tmpl/main.html');
  var Feed = require('view/feed');
  var Post = require('model/post');
  return Backbone.Marionette.Layout.extend({
    className: '',
    template: _.template(template),
    regions: {
      'menuRegion': '#menu',
      'headerRegion': '.header',
      'postListRegion': '.post-list'
    },
    events: {
      
    },
    onShow: function() {
      var feed = new Feed();
      var post = new Post({text:'fun post'});
      feed.collection.add(post);
      this.postListRegion.show(feed);
    }

  });
});
