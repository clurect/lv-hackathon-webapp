define(function (require) {
  var BaseController = require('controller/baseController');

  return Backbone.Marionette.AppRouter.extend({
    controller: new BaseController(),
    loggedInRoutes: {
      '': 'showIndex',
      'new-post': 'newPost',
      'new-post/:type': 'newPost',
      'read-post/:id': 'readPost',
      'settings': 'settings'
    },
    loggedOutRoutes: {
      '': 'showLogin',
      'login': 'showLogin'
    },
    routeParams: {},
    navigate: function(route, options) {
      var routeOption = {
        trigger: true
      },
      params = (options && options.params) ? options.params : null;
      _.extend(routeOption, options);
      delete routeOption.params;

      //set the params for the route
      this.routeParams = params;
      Backbone.Router.prototype.navigate(route, routeOption);
    },
    params: function(key) {
      return (key) ? this.routeParams[key] : this.routeParams;
    }
  });
});