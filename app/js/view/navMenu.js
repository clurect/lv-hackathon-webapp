define(['backbone', 'marionette', 'jquery', 'underscore', 'text!../../html/navMenu.html'], 
	function(Backbone, Marionette, $, _, template){
		'use strict';
		return Backbone.Marionette.ItemView.extend({
			template: _.template(template),
			ui: {
				'menu': '#menu'
			},
			events: {
				'click #close-menu-btn': "closeNavMenu",
				'click #open-menu-btn': 'showNavMenu',
				'click a': 'handleSelected'
			},
			closeNavMenu: function() {
				$('body').removeClass('nav-open');	
			},
		    showNavMenu: function() {
		      	$('body').addClass('nav-open');
		    }
		});
	}
);