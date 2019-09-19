/*
* Plain javascript object for stubbing the qmc-actor-service. If needed as an Angularjs service, stub it via qmc-unit-test-stub.
* The stub needs a name property for qmc-stub-factory to identify it.
*/
define(['qmc.modules/qmc-unit-test-stub/qmc-stubs/qmc-defer-stub-builder'], function(qmcDeferStubBuilder) {
	'use strict';

	var stub = {},
		_accessCount = 0,
		_sectionAccess = true,
		_canCreateResourceType = true,
		actorServiceInstance = null;

	var defaultActorService = function(accessCount, canCreateResourceType, $q) {
		var deferBuilder = qmcDeferStubBuilder.create($q, canCreateResourceType);

		function setupDeferDictionary() {
			deferBuilder.createDeferStub("canCreateResourceType");
			deferBuilder.createDeferStub("ready");
		}

		setupDeferDictionary();

		_accessCount = accessCount;
		_canCreateResourceType = canCreateResourceType;
		var self = {
			hasSectionAccess: function() {
				return _sectionAccess;
			},
			accessCount: sinon.spy(function() {
				return _accessCount;
			}),
			hasAccess: sinon.spy(function() {
				return _accessCount > 0;
			}),
			canCreateResourceType: function() {
				var promiseStub = deferBuilder.getPromise("canCreateResourceType");
				return promiseStub;
			},
			getDefer: function(currentFunctionName) {
				var deferred = deferBuilder.getDefer(currentFunctionName);
				return deferred;
			}
		};
		Object.defineProperties(self, {
			ready: {
				enumerable: true,
				get: function() {
					var promiseStub = deferBuilder.getPromise("ready");
					return promiseStub;
				}
			},
			name: { value: "testName" }
		});
		return self;
	};


	Object.defineProperties(stub, {
		name: { value: "qmcActorServiceStub" },
		build: {
			value: function() {
				return actorServiceInstance;
			}
		},
		default: {
			value: function($q) {
				actorServiceInstance = defaultActorService(0, _canCreateResourceType, $q);
				return stub;
			}
		},
		setAccessCount: {
			value: function(noOfAccess) {
				_accessCount = noOfAccess;
				return stub;
			}
		},
		setSectionAccess: {
			value: function(sectionAccess) {
				_sectionAccess = sectionAccess;
			}
		},
		setCanCreateResourceType: {
			value: function(canCreate) {
				actorServiceInstance.canCreateResourceType = sinon.spy(function() {
					var promiseStub = {
						then: function(callback) {
							callback(canCreate);
							return {
								'finally': function(callback2) {
									callback2();
								}
							};
						}
					};
					return promiseStub;
				});
				return stub;
			}
		}
	});

	return stub;
});
