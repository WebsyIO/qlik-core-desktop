/*
* Plain javascript object for stubbing the qmc-section-service. If needed as an Angularjs service, stub it via qmc-unit-test-stub.
* The stub needs a name property for qmc-stub-factory to identify it.
*/
define(function() {
	'use strict';

	var stub = {};
	var defaultQmcServiceService = function() {
		return {
			getSection: sinon.spy(),
			getAllSections: sinon.spy()
		};
	};


	Object.defineProperties(stub, {
		name: { value: "qmcSectionServiceStub" },
		default: {
			value: defaultQmcServiceService
		}

	});

	return stub;
});
