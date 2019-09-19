/*
* Plain javascript object for stubbing the qmc-qros-service. If needed as an Angularjs service, stub it via qmc-unit-test-stub.
* The stub needs a name property for qmc-stub-factory to identify it.
*/
define(function() {
	'use strict';

	var stub = {};
	var defaultQROSService = function() {
		return {
			getTypeDefinition: sinon.stub().returns({}), //TODO add qros settings that all entities share
			getTypes: function() {
				return ['app', 'stream', 'user'];
			},
			augmentObject: function(object){
				return object;
			}
		}; //TODO are the any? name?
	};


	Object.defineProperties(stub, {
		name: { value: "qmcQROSServiceStub" },
		default: {
			value: defaultQROSService
		}

	});

	return stub;
});
