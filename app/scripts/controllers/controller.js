define([
	'backbone'
],
function( Backbone ) {
    'use strict';

	return Backbone.Marionette.Controller.extend({

		initialize: function( options ) {
			console.log("initialize a Controller Controller");
		},
		mainRoute: function() {
			console.log('navigated to main');
		}
	});

});
