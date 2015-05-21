(function() {
	'use strict';

	var root = this;

	root.define([
		'controllers/controller'
		],
		function( Controller ) {

			describe('Controller Controller', function () {

				it('should be an instance of Controller Controller', function () {
					var controller = new Controller();
					expect( controller ).to.be.an.instanceof( Controller );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );