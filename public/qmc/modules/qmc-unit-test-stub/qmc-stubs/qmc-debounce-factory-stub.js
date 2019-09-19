/*
* Plain javascript object for stubbing the qmcDebounceFactory. If needed as an Angularjs factory, stub it via qmc-unit-test-stub.
* The stub needs a name property for qmc-stub-factory to identify it.
*/
define(function() {
	'use strict';

	var stub = {};

	var defaultDebounceFactory = function() {
		return function(config) {
			return config.callback;
		};
	};


	Object.defineProperties(stub, {
		name: { value: "qmcDebounceFactoryStub" },
		default: {
			value: defaultDebounceFactory
		}
	});

	return stub;
});
