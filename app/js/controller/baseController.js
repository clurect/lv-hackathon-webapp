define(function (require) {
  var App = require('app');
  var MainView = require('view/main');
  var LoginView = require('view/login');
  var NewPostView = require('view/newPost');
  var ReadPostView = require('view/readPost');
  var NavMenu = require('view/navMenu');
  var SettingsView = require('view/settings');
  var CommentsView = require('view/commentsSection');
  var Feed = require('view/feed');

  return Backbone.Marionette.Controller.extend({

    initialize: function() {
      App.views = {};
      App.views.main = new MainView();
      App.views.navMenu = new NavMenu();
      App.views.loginView = new LoginView();
    },
    showLogin: function() {
      App.containerRegion.show(App.views.loginView);
    },
    showIndex: function() {
      //App.views.navMenu = new NavMenu();
      App.menuRegion.show(App.views.navMenu);
      App.containerRegion.show(App.views.main);
    },
    newPost: function(type) {
      var newPostView = new NewPostView({
        type: type
      });
      App.menuRegion.show(App.views.navMenu);
      App.containerRegion.show(newPostView);
    },
    readPost: function(id) {
      var post = App.router.params('post');
      App.menuRegion.show(App.views.navMenu);
      var readPostView = new ReadPostView({
        post: post,
        postID: id
      });
      App.containerRegion.show(readPostView);
    },
    settings: function() {
      var settingsView = new SettingsView();
      App.menuRegion.show(App.views.navMenu);
      App.containerRegion.show(settingsView);
    },
    showComments: function (model, region) {
      var commentsView = new CommentsView({model: model});
      region.show(commentsView);
    },
    showFavorites: function () {
      var feed = new Feed({collection: App.favorites});
      
      App.menuRegion.show(App.views.navMenu);
      App.containerRegion.show(feed);
      App.favorites.fetch();
    }
  });
});