define(['backbone', 'marionette', 'jquery', 'underscore', 'text!../../html/navMenu.html'], 
	function(Backbone, Marionette, $, _, template){
		'use strict';
		return Backbone.Marionette.ItemView.extend({
			tagName: 'div',
			className: 'nav-wrapper',
			template: _.template(template),
			events: {
				'click a': 'handleSelected'
			},
			handleSelected: function(e){
				return true;
			}
		});
	}
);