/**
* module for providing stubbable services/providers/factories
*/
define(['qmc.modules/qmc-unit-test-stub/qmc-stub-factory'],
	function moduleFactory(qmcStubFactory) {
		'use strict';

		var qmcUnitTestStub = function($provide, type, providerName, predefinedStub) {

			var stub;


			switch (type) {
				case 'service':
					$provide.provider(providerName, function() {
						this.$get = [
							'$q', function($q) {
								stub = qmcStubFactory(providerName, $q, predefinedStub);
								return stub;
							}
						];
					});
					break;
				case 'factory':
					$provide.factory(providerName, [
						'$q', function($q) {
							var factory;
							stub = qmcStubFactory(providerName, $q, predefinedStub);
							if (typeof stub === 'function') {
								factory = stub;
							} else {
								factory = function() {
									return stub;
								};
							}
							return factory;
						}
					]);
					break;
				case 'constant':
					$provide.constant(providerName, qmcStubFactory(providerName, null, predefinedStub));
					break;
				default:
					$provide.provider(providerName, function() {
						this.$get = [
							'$q', function($q) {
								stub = qmcStubFactory(providerName, $q, predefinedStub);
								return stub;
							}
						];
					});
			}
		};

		return qmcUnitTestStub;
	}
);
