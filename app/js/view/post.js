define(function (require) {
  var App = require('app');
  var template = require('text!tmpl/post.html');

  return Backbone.Marionette.ItemView.extend({
  	ui: {
  		'favorite': 'add-favorite-id'
  	},
  	events: {
  		'click @ui.favorite': 'onFavoriteClick'
  	},
  	className: 'post',
    template: _.template(template),
    onFavoriteClick: function(e) {
    	e.preventDefault();
    }
  });
});
