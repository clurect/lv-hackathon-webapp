define(function (require) {
  var App = require('app');
  var template = require('text!tmpl/main.html');
  var Feed = require('view/feed');
  var Post = require('model/post');
  var NavMenu = require('view/navMenu');
  return Backbone.Marionette.Layout.extend({
    className: '',
    template: _.template(template),
    regions: {
      'menuRegion': '#menu',
      'headerRegion': '.header',
      'postListRegion': '.post-list'
    },
    events: {
      'click #menu-btn': 'showNavMenu'
    },  
    showNavMenu: function () {
      var navMenu = new NavMenu();
      this.menuRegion.show(navMenu);
    },
    onShow: function() {
      var feed = new Feed();
      var that = this;
      /*var post = new Post({text:'fun post'});
      feed.collection.add(post);
      var post2 = new Post({text:'fun post is fun and in another place'});
      feed.collection.add(post2);*/
      feed.collection.fetch({
        success: function() {
          
        }
      });
      that.postListRegion.show(feed);
    }

  });
});
