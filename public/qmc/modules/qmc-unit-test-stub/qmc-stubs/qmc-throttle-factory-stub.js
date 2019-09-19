/*
* Plain javascript object for stubbing the qmcThrottleFactory. If needed as an Angularjs factory, stub it via qmc-unit-test-stub.
* The stub needs a name property for qmc-stub-factory to identify it.
*/
define(function() {
	'use strict';

	var stub = {};

	var defaultThrottleFactory = function() {
		return function(config) {
			return config.callback;
		};
	};


	Object.defineProperties(stub, {
		name: { value: "qmcThrottleFactoryStub" },
		default: {
			value: defaultThrottleFactory
		}
	});

	return stub;
});
