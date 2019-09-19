/*
* Plain javascript object for stubbing the qmc-custom-properties-service. If needed as an Angularjs service, stub it via qmc-unit-test-stub.
* The stub needs a name property for qmc-stub-factory to identify it.
*/
define(function() {
	'use strict';

	var stub = {};
	var defaultCustomPropertiesService = function() {
		return {
			getDefinitionsForType: sinon.stub().returns([])
		};
	};


	Object.defineProperties(stub, {
		name: { value: "qmcCustomPropertiesServiceStub" },
		default: {
			value: defaultCustomPropertiesService
		}

	});

	return stub;
});
