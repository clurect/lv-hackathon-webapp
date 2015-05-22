define(function (require) {
  var App = require('app');
  var template = require('text!tmpl/post.html');
  var moment = require('moment');
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
    },
    templateHelpers:function() {
    	var momentDate = moment(this.model.get('date'))
    	var newDate = {};
    	newDate.day = momentDate.format('D');
    	newDate.month = momentDate.format('MMM');
    	newDate.year = momentDate.format('YYYY');
    	return {dateObj:newDate};
    }
  });
});
