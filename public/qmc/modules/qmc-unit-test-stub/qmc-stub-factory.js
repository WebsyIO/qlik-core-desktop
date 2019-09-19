/* Factory for creating unit test stubs.
*  All stubs created in the sub folder qmc-stubs should be included in the requirejs list below, to be able to initialize them via this factory
	*/
define([
	'qmc.modules/qmc-unit-test-stub/qmc-stubs/qmc-actor-service-stub',
	'qmc.modules/qmc-unit-test-stub/qmc-stubs/qmc-action-alert-service-stub',
	'qmc.modules/qmc-unit-test-stub/qmc-stubs/qmc-app-api-service-stub',
	'qmc.modules/qmc-unit-test-stub/qmc-stubs/qmc-apply-action-factory-stub',
	'qmc.modules/qmc-unit-test-stub/qmc-stubs/qmc-cancel-action-factory-stub',
	'qmc.modules/qmc-unit-test-stub/qmc-stubs/qmc-content-library-api-service-stub',
	'qmc.modules/qmc-unit-test-stub/qmc-stubs/qmc-debounce-factory-stub',
	'qmc.modules/qmc-unit-test-stub/qmc-stubs/qmc-delete-service-stub',
	'qmc.modules/qmc-unit-test-stub/qmc-stubs/qmc-dialog-service-stub',
	'qmc.modules/qmc-unit-test-stub/qmc-stubs/qmc-edit-model-factory-stub',
	'qmc.modules/qmc-unit-test-stub/qmc-stubs/qmc-error-stub',
	'qmc.modules/qmc-unit-test-stub/qmc-stubs/qmc-guid-stub',
	'qmc.modules/qmc-unit-test-stub/qmc-stubs/qmc-overview-service-stub',
	'qmc.modules/qmc-unit-test-stub/qmc-stubs/qmc-property-edit-utils-stub',
	'qmc.modules/qmc-unit-test-stub/qmc-stubs/qmc-qros-service-stub',
	'qmc.modules/qmc-unit-test-stub/qmc-stubs/qmc-section-service-stub',
	'qmc.modules/qmc-unit-test-stub/qmc-stubs/qmc-selection-set-stub',
	'qmc.modules/qmc-unit-test-stub/qmc-stubs/qmc-stream-api-service-stub',
	'qmc.modules/qmc-unit-test-stub/qmc-stubs/qmc-translate-filter-stub',
	'qmc.modules/qmc-unit-test-stub/qmc-stubs/qmc-throttle-factory-stub',
	'qmc.modules/qmc-unit-test-stub/qmc-stubs/qmc-translation-service-stub',
	'qmc.modules/qmc-unit-test-stub/qmc-stubs/qmc-performance-log-provider-stub',
	'qmc.modules/qmc-unit-test-stub/qmc-stubs/qmc-capability-service-stub'
], function() {
	"use strict";
	var stubsDict,
		requiredArguments = arguments;

	function setupDictionaryOfStubs() {
		var argumentsArray = Array.prototype.slice.call(requiredArguments);
		var dict = {};
		argumentsArray.forEach(function(item) {
			if (item.name == null) {
				throw new Error("Parsing stubs in qmc-stub-factory: Name property was null or undefined");
			}
			dict[item.name] = item;

		});
		return dict;
	}

	stubsDict = setupDictionaryOfStubs();

	var stubFactory = function(name, $q, stubObject) {
		var stub,
			stubReference = stubsDict[name + 'Stub'];

		if (stubObject == null) {
			if (stubReference != null) {
				stub = stubReference.default($q);
				if (stub.build) {
					stub = stub.build();
				}
			} else {
				stub = {};
			}
		} else {
			stub = stubObject;
		}

		return stub;
	};

	return stubFactory;
});
