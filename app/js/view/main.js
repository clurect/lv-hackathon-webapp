define(function (require) {
  var App = require('app');
  var template = require('text!tmpl/main.html');
  var Feed = require('view/feed');
  var Post = require('model/post');
  var HeaderView = require('view/header');

  return Backbone.Marionette.Layout.extend({
    className: '',
    template: _.template(template),
    regions: {
      'headerRegion': '.header',
      'postListRegion': '.post-list'
    },
    onShow: function() {
      var feed = new Feed();
      var that = this;

      var headerView = new HeaderView();
      this.headerRegion.show(headerView);

      feed.collection.fetch({
        success: function() {
          
        }
      });
      that.postListRegion.show(feed);
    }

  });
});
