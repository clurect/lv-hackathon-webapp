define(function (require) {
  var App = require('app');
  var template = require('text!tmpl/main.html');
  var Feed = require('view/feed');
  var HeaderView = require('view/header');
  var Resources = require('collection/Resources');
  var Favorites = require('collection/posts');

  return Backbone.Marionette.Layout.extend({
    template: _.template(template),
    regions: {
      'headerRegion': '.header',
      'postListRegion': '.post-list'
    },
    onShow: function() {
      if (!App.favorites) {
        App.router.controller.createFavorites();
      }
      
      App.favorites.url = '/ptsd-0.0.1/user/8/favorites';
      
      var resources = new Resources();
      resources.fetch();
      window.resources = resources;
      var feed = new Feed();
      var headerView = new HeaderView();
      this.headerRegion.show(headerView);
      this.postListRegion.show(feed);
      App.favorites.fetch({
        success: function () {
          feed.collection.fetch();
        }
      });
    }
  });
});