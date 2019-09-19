/*
* Plain javascript object for stubbing the qmc-overview-service. If needed as an Angularjs service, stub it via qmc-unit-test-stub.
* The stub needs a name property for qmc-stub-factory to identify it.
*/
define([], function() {
	'use strict';

	var stub = {}, overviewServiceInstance;


	var defaultOverviewService = function() {
		var self = {
			setupAssociation: function() {
			},
			setupCallBacks: function() {
				return {
					deteleSuccess: function() {
					}
				};
			},
			getTableController: function() {
			},
			setupStandardShortcuts: function() {
			},
			setupOverview: function(){}
		};

		return self;
	};


	Object.defineProperties(stub, {
		name: { value: "qmcOverviewServiceStub" },
		build: {
			value: function() {
				return overviewServiceInstance;
			}
		},
		default: {
			value: function() {
				overviewServiceInstance = defaultOverviewService();
				return stub;
			}
		}
		//setTableController: {
		//	value: function () {
		//		return stub;
		//	}
		//}, ........or other setter functions to setup the stub before calling build()
	});

	return stub;
});
