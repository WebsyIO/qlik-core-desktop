/*
* Plain javascript object for stubbing the qmc-system-rule-edit-service. If needed as an Angularjs service, stub it via qmc-unit-test-stub.
* The stub needs a name property for qmc-stub-factory to identify it.
*/
define(['qmc.modules/qmc-unit-test-stub/qmc-stubs/qmc-defer-stub-builder'], function(qmcDeferStubBuilder) {
	'use strict';

	var stub = {};
	var defaultSystemRuleEditService = function(resourceFilter, $q) {
		var defaultResolveValue = true, deferBuilder = qmcDeferStubBuilder.create($q, defaultResolveValue);
		return {
			canBacktrack: function() {
				return true;
			},
			getAccessibleAttributes: function() {
				var promiseStub = deferBuilder.createSimplePromise(['name', 'id', '@org']);
				return promiseStub;
			},
			getAvailableActions: function() {
				return ['create', 'read', 'update', 'delete'];
			},
			getInitialObject: function() {
				return {};
			},
			get: function() {
				var promiseStub = deferBuilder.createSimplePromise({
					baseObject: { name: 'TestName' },
					property: {
						name: { value: 'TestName' },
						rule: { value: 'user.name="TestUser"' },
						resourceFilter: { value: resourceFilter }
					},
					isBacktracked: true
				});
				return promiseStub;
			}
		};

	};

	Object.defineProperties(stub, {
		name: { value: "qmcSystemRuleEditServiceStub" },
		default: {
			value: function($q) {
				return defaultSystemRuleEditService('App_*', $q);
			}
		},
		custom: {
			value: function(resourceFilter, $q) {
				return defaultSystemRuleEditService(resourceFilter, $q);
			}
		}
	});

	return stub;
});
