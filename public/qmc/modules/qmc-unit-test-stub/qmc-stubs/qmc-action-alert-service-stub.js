/*
* Plain javascript object for stubbing the qmc-action-alert-service. If needed as an Angularjs service, stub it via qmc-unit-test-stub.
* The stub needs a name property for qmc-stub-factory to identify it.
*/
define(["sinon"], function(sinon) {
	'use strict';

	var stub = {},
		actionAlertServiceInstance = null;

	var defaultActionAlertService = function() {

		var self = {
			triggerActionAlert: sinon.spy()
		};

		return self;
	};


	Object.defineProperties(stub, {
		name: { value: "qmcActionAlertServiceStub" },
		build: {
			value: function() {
				return actionAlertServiceInstance;
			}
		},
		default: {
			value: function() {
				actionAlertServiceInstance = defaultActionAlertService();
				return stub;
			}
		}
		//add methods for configuring the stub before clling build, which will return the stub
	});

	return stub;
});
