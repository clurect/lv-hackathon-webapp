define(function (require) {
  var BaseController = require('controller/baseController');

  return Backbone.Marionette.AppRouter.extend({
    controller: new BaseController(),
    loggedInRoutes: {
      '': 'showIndex'
    },
    loggedOutRoutes: {
      '': 'showLogin',
      'login': 'showLogin'
    }
  });
});