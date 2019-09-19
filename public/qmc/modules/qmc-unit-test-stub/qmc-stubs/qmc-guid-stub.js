/*
* Plain javascript object for stubbing the qmc-guid. If needed as an Angularjs factory, stub it via qmc-unit-test-stub.
* The stub needs a name property for qmc-stub-factory to identify it.
*/
define(function() {
	'use strict';

	var stub = {};

	var defaultGUID = function() {
		return {
			empty: sinon.stub().returns('00000000-0000-0000-0000-000000000000')
		};
	};

	Object.defineProperties(stub, {
		name: { value: "QmcGUIDStub" },
		default: {
			value: defaultGUID
		}

	});

	return stub;
});
