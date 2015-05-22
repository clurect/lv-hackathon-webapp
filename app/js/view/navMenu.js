define(['backbone', 'marionette', 'jquery', 'underscore', 'text!../../html/navMenu.html'], 
	function(Backbone, Marionette, $, _, template){
		'use strict';
		return Backbone.Marionette.ItemView.extend({
			template: _.template(template),
			ui: {
				'menu': '#menu'
			},
			events: {
				'click #close-menu-btn, #open-menu-btn': "toggleNavMenu",
				'click a': 'handleSelected'
			},
			toggleNavMenu: function(e) {
				if ($('.nav-open').length > 0) {
					$('body').removeClass('nav-open');						
				} else {
					$('body').addClass('nav-open');
				}
			}
		});
	}
);