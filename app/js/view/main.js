define(function (require) {
  var App = require('app');
  var template = require('text!tmpl/main.html');
  var Feed = require('view/feed');
  var HeaderView = require('view/header');
  var Resources = require('collection/Resources');
  var Post = require('model/post');

  return Backbone.Marionette.Layout.extend({
    template: _.template(template),
    regions: {
      'headerRegion': '.header',
      'postListRegion': '.post-list'
    },
    onShow: function() {
      var resources = new Resources();
      resources.fetch();
      window.resources = resources;
      var feed = new Feed();
      var headerView = new HeaderView();
      this.headerRegion.show(headerView);
      this.postListRegion.show(feed);
      feed.collection.fetch({
        success: function() {
          
        }
      });
    }
  });
});