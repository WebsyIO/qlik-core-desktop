/*
* Plain javascript object for stubbing the qmc-capability-service. If needed as an Angularjs service, stub it via qmc-unit-test-stub.
* The stub needs a name property for qmc-stub-factory to identify it.
*/
define(function() {
	'use strict';

	var stub = {},
		capabilityServiceInstance, self;

	var defaultCapabilityService = function(/*enable*/) {
		// Create instance, if not created
		self = self || {

		};
		//Add functions here as you need them
		//self.isFeatureEnabled = enable;
		return self;
	};

	Object.defineProperties(stub, {
		name: {
			value: "qmcCapabilityService"
		},
		build: {
			value: function() {
				if (capabilityServiceInstance == null) {
					stub.default();
				}
				return capabilityServiceInstance;
			}
		},
		default: {
			value: function() {
				capabilityServiceInstance = defaultCapabilityService(false);
				return stub;
			}
		},
		enableFeature: {
			value: function() {
				capabilityServiceInstance = defaultCapabilityService(true);
				return stub;
			}
		},
		disableFeature: {
			value: function() {
				capabilityServiceInstance = defaultCapabilityService(false);
				return stub;
			}
		}
	});
	return stub;
});
