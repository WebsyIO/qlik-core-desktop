/*
* Plain javascript object for stubbing the qmc-app-api-service. If needed as an Angularjs service, stub it via qmc-unit-test-stub.
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

	var defaultAppApiService = function(defaultResolveValue, $q) {
		var copyItemSpy,
			reloadItemSpy,
			importItemSpy,
			importItemAndReplaceSpy,
			exportItemSpy,
			cancelExportItemSpy,
			getItemSpy,
			getItemsCountSpy,
			getDefaultMonitoringAppsSpy,
			countNumberOfNonMigratedAppsSpy,
			deferBuilder = qmcDeferStubBuilder.create($q, defaultResolveValue);

		function setupDeferDictionary() {
			deferBuilder.createDeferStub("copyItem");
			deferBuilder.createDeferStub("reloadItem");
			deferBuilder.createDeferStub("importItem");
			deferBuilder.createDeferStub("importItemAndReplace");
			deferBuilder.createDeferStub("exportItem");
			deferBuilder.createDeferStub("cancelExportItem");
			deferBuilder.createDeferStub("getItem");
			deferBuilder.createDeferStub("getItems.count");
			deferBuilder.createDeferStub("getDefaultMonitoringApps");
			deferBuilder.createDeferStub("countNumberOfNonMigratedApps");
		}

		setupDeferDictionary();

		function copyItem() {
			return deferBuilder.getPromise("copyItem");
		}

		function reloadItem() {
			return deferBuilder.getPromise("reloadItem");
		}

		function importItem() {
			return deferBuilder.getPromise("importItem");
		}

		function importItemAndReplace() {
			return deferBuilder.getPromise("importItemAndReplace");
    }

		function getItem() {
			return deferBuilder.getPromise("getItem");
		}

		function getItemsCount() {
			return deferBuilder.getPromise("getItems.count");
		}

		function exportItem(/*appId, config*/) {
			//var timeoutPromise = config.timeout;
			//timeoutPromise.finally( function () {
			//	deferBuilder.getDefer( "exportItem" ).reject();
			//} );
			return deferBuilder.getPromise("exportItem");
		}

		function cancelExportItem(/*appId, config*/) {
			return deferBuilder.getPromise("cancelExportItem");
		}

		function getDefaultMonitoringApps() {
			return deferBuilder.getPromise("getDefaultMonitoringApps");
		}

		function countNumberOfNonMigratedApps() {
			return deferBuilder.getPromise("countNumberOfNonMigratedApps");
		}

		copyItemSpy = sinon.spy(copyItem);
		reloadItemSpy = sinon.spy(reloadItem);
		importItemSpy = sinon.spy(importItem);
		importItemAndReplaceSpy = sinon.spy(importItemAndReplace);
		exportItemSpy = sinon.spy(exportItem);
		cancelExportItemSpy = sinon.spy(cancelExportItem);
		getItemSpy = sinon.spy(getItem);
		getItemsCountSpy = sinon.spy(getItemsCount);
		getDefaultMonitoringAppsSpy = sinon.spy(getDefaultMonitoringApps);
		countNumberOfNonMigratedAppsSpy = sinon.spy(countNumberOfNonMigratedApps);

		return {
			deleteItems: { inSelectionSet: {} },
			getItem: getItemSpy,
			getItems: { count: getItemsCountSpy },
			copyItem: copyItemSpy,
			reloadItem: reloadItemSpy,
			importItem: importItemSpy,
			importItemAndReplace: importItemAndReplaceSpy,
			exportItem: exportItemSpy,
			cancelExportItem: cancelExportItemSpy,
			getDefaultMonitoringApps: getDefaultMonitoringAppsSpy,
			countNumberOfNonMigratedApps: countNumberOfNonMigratedAppsSpy,
			getDefer: function(currentFunctionName) {
				var deferred = deferBuilder.getDefer(currentFunctionName);
				return deferred;
			}
		};
	};

	Object.defineProperties(stub, {
		name: { value: "qmcAppApiServiceStub" },
		default: {
			value: function($q) {
				var defaultResolveValue = true;
				return defaultAppApiService(defaultResolveValue, $q);
			}
		}
	});

	return stub;
});
