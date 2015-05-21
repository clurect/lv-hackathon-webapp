define(function (require) {
  var App = require('app');
  var Resource = require('model/Resource');
  return Backbone.Collection.extend({
    model: Resource,
    url: "/ptsd-0.0.1",
    parse: function(response) {
    	/*var arr = [];
    	_.each(response['_links'], function(thing) {
    		arr.push(thing);
    	});
    	return arr;*/
    }
  });
});
