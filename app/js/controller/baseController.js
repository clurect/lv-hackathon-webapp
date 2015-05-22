define(function (require) {
  var App = require('app');
  var MainView = require('view/main');
  var LoginView = require('view/login');
  var NewPostView = require('view/newPost');
  var ReadPostView = require('view/readPost');
  var NavMenu = require('view/navMenu');
  var CommentsView = require('view/commentsSection');

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
        post: post
      });
      App.containerRegion.show(readPostView);
    },
    showComments: function (model, region) {
      region.show(new CommentsView({model: model}));
    }
  });
});