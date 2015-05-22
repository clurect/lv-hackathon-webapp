define(function (require) {
  var App = require('app');
  var template = require('text!tmpl/post.html');
  var templateReadOnly = require('text!tmpl/postReadOnly.html');
  var moment = require('moment');

  return Backbone.Marionette.Layout.extend({
  	className: 'post',
    getTemplate: function() {
      var isReadOnly = Backbone.Marionette.getOption(this, 'readOnly');

      if (isReadOnly) {
        return _.template(templateReadOnly);
      } else {
        return _.template(template);
      }
    },
    regions: {
      'commentsRegion': '.comments-section'
    },
  	ui: {
      'favorite': '.add-favorite',
      'readPost': '.read-post',
  		'addComment': '.add-comment'
  	},
    events: {
      'click @ui.favorite': 'onFavoriteClick',
      'click @ui.addComment:not(.btn-primary)': 'showComments',
      'click @ui.addComment.btn-primary': 'hideComments',
      'click @ui.readPost': 'onReadPostClick'
    },
    showComments: function (e) {
      $(e.currentTarget).addClass('btn-primary');
      this.showCommentsRegion();
    },
    showCommentsRegion: function() {
      App.router.controller.showComments(this.model, this.commentsRegion);
    },
    hideComments: function (e) {
      $(e.currentTarget).removeClass('btn-primary');
      this.commentsRegion.close();
    },
    onFavoriteClick: function(e) {
    	e.preventDefault();
      
      var $target = $(e.currentTarget);
      var method = 'PUT';
      
      if (this.model.get('favorite')) {
        this.model.unset('favorite');
        $target.removeClass('btn-primary');
        method = 'DELETE';
      } else {
        this.model.set('favorite', true);
        $target.addClass('btn-primary');
      }
      
      App.service.request({}, method, App.favorites.url + '/' + this.model.get('id'));
    },
    onReadPostClick: function(e) {
      App.router.navigate('#read-post/' + this.model.get('id'), { 
        trigger: true, 
        params: {
          post: this.model
        } 
      });
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
