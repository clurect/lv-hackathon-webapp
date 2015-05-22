define(function (require) {
  var App = require('app');
  return Backbone.Model.extend({
    parse: function (response) {
      if (App.favorites.get(response.id)) {
        response.favorite = true;
      }
      
      return response;
    }
  });
});
