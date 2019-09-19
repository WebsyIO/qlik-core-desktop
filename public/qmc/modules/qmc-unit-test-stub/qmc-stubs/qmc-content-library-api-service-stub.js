/*
* Plain javascript object for stubbing the qmc-content-library-api-service. If needed as an Angularjs service, stub it via qmc-unit-test-stub.
* The stub needs a name property for qmc-stub-factory to identify it.
*/
define(function() {
	'use strict';

	var stub = {};
	var defaultContentLibraryApiService = function() {
		return {
			deleteItems: { inSelectionSet: sinon.spy() }
		};
	};


	Object.defineProperties(stub, {
		name: { value: "qmcContentLibraryApiServiceStub" },
		default: {
			value: defaultContentLibraryApiService
		}

	});

	return stub;
});
