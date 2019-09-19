/*
* Plain javascript object for stubbing the qmc-dialog-service. If needed as an Angularjs service, stub it via qmc-unit-test-stub.
* The stub needs a name property for qmc-stub-factory to identify it.
*/
define(['qmc.modules/qmc-unit-test-stub/qmc-stubs/qmc-defer-stub-builder'], function(qmcDeferStubBuilder) {
	'use strict';

	var stub = {};
	var defaultDialogService = function($q) {
		var deferBuilder = qmcDeferStubBuilder.create($q, true);

		function setupDeferDictionary() {
			deferBuilder.createDeferStub("open");
		}

		function open() {
			var promiseStub = deferBuilder.getPromise("open");
			return promiseStub;
		}

		setupDeferDictionary();
		return {
			open: sinon.spy(open),
			getDefer: function(currentFunctionName) {
				var deferred = deferBuilder.getDefer(currentFunctionName);
				return deferred;
			}
		};
	};


	Object.defineProperties(stub, {
		name: { value: "qmcDialogServiceStub" },
		default: {
			value: defaultDialogService
		}

	});

	return stub;
});
