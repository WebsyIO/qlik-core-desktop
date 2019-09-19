/*
* Plain javascript object for stubbing the qmc-property-edit-utils. If needed as an Angularjs service, stub it via qmc-unit-test-stub.
* The stub needs a name property for qmc-stub-factory to identify it.
*/
define(function() {
	'use strict';

	var stub = {};
	var defaultQmcPropertyEditService = function() {
		return {
			setupPopupEdit: sinon.spy(),
			setupPropertyEdit: sinon.spy(),
			createAssociatedRule: sinon.spy(),
			clearActionAlerts: sinon.spy()
		};
	};

	Object.defineProperties(stub, {
		name: { value: "qmcPropertyEditServiceStub" },
		default: {
			value: defaultQmcPropertyEditService
		}
	});

	return stub;
});
