/**
* Defines the package for supporting debugging of the QMC
*/
(function() {
	'use strict';

	define(
		[
			'./qmc-debug-module',
			'./decorator/qmc-translation-usage'
		],
		function(qmcDebugModule) {

			qmcDebugModule.run([
				'$log',
				function(
					$log
				) {
					$log.warn(qmcDebugModule.name + ' module has been installed. THIS MODULE SHOULD NOT BE SHIPPED WITH PRODUCTION CODE!');
				}
			]);

			return qmcDebugModule;
		}
	);

}());
