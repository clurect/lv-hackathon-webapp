define(['backbone', 'marionette', 'jquery', 'underscore', 'text!../../html/navMenu.html'], 
	function(Backbone, Marionette, $, _, template){
		'use strict';
		return Backbone.Marionette.ItemView.extend({
			template: _.template(template),
			ui: {
				'menu': '#menu'
			},
			events: {
				'click #close-btn': "closeNavMenu",
				'click a': 'handleSelected'
			},
			closeNavMenu: function() {
				$('body').addClass('nav-open');	
			},
			handleSelected: function(e) {
				return false;
			}
		});
	}
);