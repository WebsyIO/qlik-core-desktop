/*
* Plain javascript object for stubbing the qmc-translation-service. If needed as an Angularjs service, stub it via qmc-unit-test-stub.
* The stub needs a name property for qmc-stub-factory to identify it.
*/
define(function() {
	'use strict';

	var stub = {};
	var defaultQmcTranslationService = function() {
		return {
			translate: function(id, arg) {
				return 'translated ' + id + ((arg !== null && arg !== undefined) ? ' (' + arg + ')' : '');
			}
		};
	};


	Object.defineProperties(stub, {
		name: { value: "qmcTranslationServiceStub" },
		default: {
			value: defaultQmcTranslationService
		}

	});

	return stub;
});
