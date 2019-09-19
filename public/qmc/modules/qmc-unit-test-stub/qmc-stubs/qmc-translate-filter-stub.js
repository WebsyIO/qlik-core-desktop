/*
* Plain javascript object for stubbing the qmc-translate-filter-service. If needed as an Angularjs service, stub it via qmc-unit-test-stub.
* The stub needs a name property for qmc-stub-factory to identify it.
*/
define(function() {
	'use strict';

	var stub = {};
	var defaultTranslateFilter = function() {
		return sinon.spy();
	};


	Object.defineProperties(stub, {
		name: { value: "qmcTranslateFilterStub" },
		default: {
			value: defaultTranslateFilter
		}

	});

	return stub;
});
