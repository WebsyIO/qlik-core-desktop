/*
* Plain javascript object for stubbing the qmc-delete-service. If needed as an Angularjs service, stub it via qmc-unit-test-stub.
* The stub needs a name property for qmc-stub-factory to identify it.
*/
define(function() {
	'use strict';

	var stub = {};

	var defaultDeleteService = function() {
		return {
			deleteBySelectionSet: sinon.stub().returns({
					then: function() {
						return {
							finally: function() {
							}
						};
					}
				})
		};
	};

	Object.defineProperties(stub, {
		name: { value: "qmcDeleteServiceStub" },
		default: {
			value: defaultDeleteService
		}

	});

	return stub;
});
