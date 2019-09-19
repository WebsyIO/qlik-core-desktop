/**
* Module containing debugging support for QMC
*
* THIS MODULE SHOULD NOT BE SHIPPED WITH PRODUCTION CODE!
*/
(function() {
	'use strict';

	define(['angular'],
		function(angular) {

			var requirements = Array.prototype.slice.call(arguments, 1).map(function(module) {
				return module.name;
			});

			return angular.module('qmcDebug', requirements);

		});
}());
