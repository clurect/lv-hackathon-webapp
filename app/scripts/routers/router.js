define([
	'backbone', 'backbone.marionette', 'controllers/controller'
],
function(Backbone, Marionette, controller){
    'use strict';

	return Marionette.AppRouter.extend({
		controller: new controller(),
		appRoutes: {'main':'mainRoute'}
	});
});
