define(function (require) {
  var BaseController = require('controller/baseController');

  return Backbone.Marionette.AppRouter.extend({
    controller: new BaseController(),
    loggedInRoutes: {
      '': 'showIndex',
      'new-post': 'newPost',
      'new-post/:type': 'newPost'
    },
    loggedOutRoutes: {
      '': 'showLogin',
      'login': 'showLogin'
    }
  });
});