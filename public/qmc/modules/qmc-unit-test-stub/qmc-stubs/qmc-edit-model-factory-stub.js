/**
* Plain javascript object for stubbing the qmc-edit-model-factory. If needed as an Angularjs factory, stub it via qmc-unit-test-stub.
* The stub needs a name property for qmc-stub-factory to identify it.
*/
define(
	function editModelFactoryStub() {
		'use strict';

		var stub = {};

		function defaultEditModelFactory() {
			return {
				disable: sinon.spy(),
				applyBusinessRules: sinon.spy(),
				property: {
					name: {
						value: String.empty,
						addBusinessRule: sinon.spy()
					},
					file: {
						value: String.empty,
						addBusinessRule: sinon.spy(),
						addValidator: sinon.spy()
					},
					maxRetries: {}, //TODO not generic, remove to somwhere else
					taskSessionTimeout: {} //TODO not generic, remove to somwhere else
				}
			};
		}

		function editModelFactoryForPublishApp(name, streams) {
			return {
				disable: sinon.spy(),
				validate: sinon.spy(),
				applyBusinessRules: sinon.spy(),
				property: {
					name: {
						value: name,
						placeholder: null,
						addBusinessRule: sinon.spy(),
						validate: sinon.spy()
					},
					stream: {
						value: null,
						placeholder: null,
						choices: streams || [],
						addBusinessRule: sinon.spy(),
						validate: sinon.spy()
					},
					replace: {
						value: null,
						placeholder: null,
						addBusinessRule: sinon.spy(),
						validate: sinon.spy()
					},
					appToReplace: {
						value: null,
						placeholder: null,
						addBusinessRule: sinon.spy(),
						validate: sinon.spy()
					}
				}
			};
		}

		function editModelFactoryForMoveApp(value, isValid) {
			return {
				disable: sinon.spy(),
				validate: sinon.spy(),
				applyBusinessRules: sinon.spy(),
				property: {
					id: {
						value: value
					}
				},
				isValid: isValid
			};
		}

		function editModelFactoryWithName(name) {
			var obj = defaultEditModelFactory();
			obj.name.value = name;
			return obj;
		}

		Object.defineProperties(stub, {
			name: { value: "qmcEditModelFactoryStub" },
			default: {
				value: function() {
					return sinon.stub().returns(defaultEditModelFactory());
				}
			},
			defaultWithName: {
				value: function(name) {
					return sinon.stub().returns(editModelFactoryWithName(name));
				}
			},
			editModelFactoryForPublishApp: {
				value: function(name, streams) {
					return sinon.stub().returns(editModelFactoryForPublishApp(name, streams));
				}
			},
			editModelFactoryForMoveApp: {
				value: function(value, isValid) {
					return sinon.stub().returns(editModelFactoryForMoveApp(value, isValid));
				}
			}
		});

		return stub;
	}
);
