/*
* Plain javascript object for stubbing the qmc-cancel-action-factory. If needed as an Angularjs service, stub it via qmc-unit-test-stub.
* The stub needs a name property for qmc-stub-factory to identify it.
*/
define([], function() {
	'use strict';

	var stub = {}, cancelActionInstance;

	var defaultCancelAction = function() {

		var self = {
			id: "cancel"
		};

		return self;
	};


	Object.defineProperties(stub, {
		name: { value: "qmcCancelActionFactoryStub" },
		build: {
			value: function() {
				return cancelActionInstance;
			}
		},
		default: {
			value: function() {
				cancelActionInstance = defaultCancelAction();
				return stub;
			}
		}
	});

	return stub;
});
