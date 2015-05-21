define([
	'backbone',
	'communicator',
	'hbs!tmpl/welcome',
	'routers/router'
],

function( Backbone, Communicator, Welcome_tmpl, router) {
    'use strict';

	var welcomeTmpl = Welcome_tmpl;

	var App = new Backbone.Marionette.Application();

	/* Add application regions here */
	App.addRegions({});

	/* Add initializers here */
	App.addInitializer( function () {
		document.body.innerHTML = welcomeTmpl({ success: "CONGRATS!" });
		Communicator.mediator.trigger("APP:START");
		App.router = new router();
	});

	Backbone.history.start();

	return App;
});
