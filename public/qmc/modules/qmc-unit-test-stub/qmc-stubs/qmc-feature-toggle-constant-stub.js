/*
* Plain javascript object for stubbing the qmc-feature-toggle-constant. If needed as an Angularjs constant, stub it via qmc-unit-test-stub.
* The stub needs a name property for qmc-stub-factory to identify it.
*/
define([], function() {
	'use strict';

	var stub = {}, featureToggleInstance;

	var defaultFeatureToggleConstant = function(enable) {


		var self = {
			toggleFeature: {
				GMC: enable,
				EXAMPLE: enable
				//Add keys here as you need them
			}
		};
		return self;
	};


	Object.defineProperties(stub, {
		name: { value: "qmcFeatureToggleConstant" },
		build: {
			value: function() {
				if (featureToggleInstance == null) {
					stub.default();
				}
				return featureToggleInstance;
			}
		},
		default: {
			value: function() {
				featureToggleInstance = defaultFeatureToggleConstant(false);
				return stub;
			}
		},
		enableFeatureToggle: {
			value: function() {
				featureToggleInstance = defaultFeatureToggleConstant(true);
				return stub;
			}
		},
		disableFeatureToggle: {
			value: function() {
				featureToggleInstance = defaultFeatureToggleConstant(false);
				return stub;
			}
		}
	});

	return stub;
});
