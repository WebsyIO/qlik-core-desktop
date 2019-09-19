/*
* Plain javascript object for stubbing the qmc-stream-api-service. If needed as an Angularjs service, stub it via qmc-unit-test-stub.
* The stub needs a name property for qmc-stub-factory to identify it.
* The stub factory creates deferreds for each function and a promise is returned from each function.
* If $q is supplied on creation the deferreds are $q deferreds, otherwise they are simple deferreds resolved immeditaly with the defaultResolveValue.
* The stub also exposes a function for retreiving the deferreds. This enables resolving the deferred from the test with different values and giving
* full control of the resolve and/or reject calls.
* Each exposed functions are wrapped by sinon spies.
*/
define(['qmc.modules/qmc-unit-test-stub/qmc-stubs/qmc-defer-stub-builder'], function(qmcDeferStubBuilder) {
	'use strict';

	var stub = {};

	var defaultStreamApiService = function(defaultResolveValue, $q) {
		var getItemSpy,
			getItemsSpy,
			getMonitoringAppsStreamSpy,
			syncToCloudSpy,
			deferBuilder = qmcDeferStubBuilder.create($q, defaultResolveValue);

		function setupDeferDictionary() {
			deferBuilder.createDeferStub("getItem");
			deferBuilder.createDeferStub("getItems");
			deferBuilder.createDeferStub("getMonitoringAppsStream");
			deferBuilder.createDeferStub("syncToCloud");
		}

		setupDeferDictionary();

		function getItem() {
			return deferBuilder.getPromise("getItem");
		}

		function getItems() {
			return deferBuilder.getPromise("getItems");
		}

		function getMonitoringAppsStream() {
			return deferBuilder.getPromise("getMonitoringAppsStream");
		}

		function syncToCloud() {
			return deferBuilder.getPromise("syncToCloud");
		}

		getItemSpy = sinon.spy(getItem);
		getItemsSpy = sinon.spy(getItems);
		getMonitoringAppsStreamSpy = sinon.spy(getMonitoringAppsStream);
		syncToCloudSpy = sinon.spy(syncToCloud);

		var obj = {
			getDefer: function(currentFunctionName) {
				var deferred = deferBuilder.getDefer(currentFunctionName);
				return deferred;
			}
		};
		Object.defineProperties(obj, {
			getItem: {
				value: getItemSpy
			},
			getItems: {
				value: getItemsSpy
			},
			getMonitoringAppsStream: {
				value: getMonitoringAppsStreamSpy
			},
			syncToCloud: {
				value: syncToCloudSpy
			}
		});
		Object.defineProperties(obj.getItems, {
			asCondensed: {
				value: getItemsSpy
			}
		});
		return obj;
	};

	Object.defineProperties(stub, {
		name: { value: "qmcStreamApiServiceStub" },
		default: {
			value: function($q) {
				var defaultResolveValue =  [{ id: 'stream1', name: 'stream1', privileges: ["read", "publish"] }, { id: 'stream2', name: 'stream2', privileges: ["read", "update"] }];
				return defaultStreamApiService(defaultResolveValue, $q);
			}
		}
	});

	return stub;
});
