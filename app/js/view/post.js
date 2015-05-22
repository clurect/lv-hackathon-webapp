define(function (require) {
  var App = require('app');
  var template = require('text!tmpl/post.html');
  var moment = require('moment');

  return Backbone.Marionette.Layout.extend({
  	className: 'post',
    template: _.template(template),
    regions: {
      'commentsRegion': '.comments-section'
    },
  	ui: {
  		'favorite': 'add-favorite'
  	},
    events: {
      'click @ui.favorite': 'onFavoriteClick',
      'click #add-comment:not(.btn-primary)': 'showComments',
      'click #add-comment.btn-primary': 'hideComments'
    },
    showComments: function (e) {
      $(e.currentTarget).addClass('btn-primary');
      App.router.controller.showComments(this.model, this.commentsRegion);
    },
    hideComments: function (e) {
      $(e.currentTarget).removeClass('btn-primary');
      this.commentsRegion.close();
    },
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
