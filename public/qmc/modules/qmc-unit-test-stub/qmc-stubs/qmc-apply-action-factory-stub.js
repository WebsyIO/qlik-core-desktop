/*
* Plain javascript object for stubbing the qmc-apply-action-factory. If needed as an Angularjs service, stub it via qmc-unit-test-stub.
* The stub needs a name property for qmc-stub-factory to identify it.
*/
define([], function() {
	'use strict';

	var stub = {}, applyActionInstance;

	var defaultApplyAction = function() {

		var self = {
			id: "apply"
		};


	return self;
	};


	Object.defineProperties(stub, {
		name: { value: "qmcApplyActionFactoryStub" },
		build: {
			value: function() {
				return applyActionInstance;
			}
		},
		default: {
			value: function() {
				applyActionInstance = defaultApplyAction();
				return stub;
			}
		}
	});

	return stub;
});
