define(function (require) {
  var BaseController = require('controller/baseController');

  return Backbone.Marionette.AppRouter.extend({

    routeGroups: {
      controller: new BaseController(),
      loggedInRoutes: {
        '': 'showIndex'
      },
      loggedOutRoutes: {
        '': 'showLogin',
        'login': 'showLogin'
      }
    },

    initialize: function () {
      _.each(this.routeGroups, function (router) {
        this.processAppRoutes(router.controller, router.routes);
      }, this);
    },
    getController: function (id) {
      return this.routeGroups[id].controller;
    }
  });
});