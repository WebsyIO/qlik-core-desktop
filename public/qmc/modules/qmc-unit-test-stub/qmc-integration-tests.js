/**
* QMC integration test file
* Each test-module (qmc-xxx-test.spec.js) needed should run the register function where the module is registered along with any mockups
* (see qmc-common-test.spec.js for example). Test shuld then run 'setup' in 'beforeEach' stage and 'finish' in afterEach stage
* (see qmc-stream-test.spec.js for example).
*/
define([
		'angular',
		'chai',
		'qmc.modules/qmc-unit-test-stub/qmc-unit-test-stub',
		'qmc.modules/qmc-section/qmc-section-module',
		'qmc.modules/qmc-common/qmc-common-module',
		'qmc.modules/qmc-unit-test-stub/qmc-stubs/qmc-feature-toggle-constant-stub',
		'qmc.modules/qmc-unit-test-stub/qmc-stubs/qmc-stream-api-service-stub',
		'angular-route'
	],
	function integrationTests(angular, chai, qmcUnitTestStub, qmcSectionModule, qmcCommonModule, qmcFeatureToggleConstantStub, qmcStreamApiServiceStub) {
		var testModules = [],
			dialogResponse = { success: null, error: null, "finally": null },
			rootModule = angular.module('qmcIntegrationTest', []),
			providerModule = angular.module('providerModuleIntegrationTests', [], function() {
			});

		function returnTrue() {
			return true;
		}

		function initTestEnvironment(test) {
			test.dialogResponse.successCallback = sinon.spy();
			test.messages = [];
			test.deregisterActionAlertListener = test.scope.$on("add-action-alert", function(event, data) {
				test.messages.push(data.message);
			});
			test.deregisterClearListener = test.scope.$on("clear-action-alerts", function() {
				test.messages = [];
			});

			test.tableRenderStub = function() {
				return sinon.stub().returns(test.$q.resolve());
			};
		}

		function setupDirective(test, selection, directiveString, response) {
			var expect = chai.expect,
				directiveScope = test.compile(directiveString)(test.scope).isolateScope();
			directiveScope.$apply();
			expect(directiveScope.selectionSet.id).to.equal(selection.id);
			// Load associated table
			if (response) {
				directiveScope.tableController.render = test.tableRenderStub();
				test.httpBackend['when' + response.type](response.url).respond(response.data);
				test.httpBackend['expect' + response.type](response.url, response.verifyFunc || returnTrue);
				directiveScope.tableController.refresh();
				test.httpBackend.flush();
			}
			test.scope.$apply();
			return directiveScope;
		}

		function makeTableSelection(rows, selectionSet, model) {
			(rows || []).forEach(function(rowId) {
				selectionSet.add(model.set(rowId).id, model.value);
			});
		}

		return {
			// Used to prepare test pages with synthetic edit operations
			syntheticEditSetup: function(test, synthetic, updatedValue, updateProperty, callback, ctrlDir) {
				var self = this,
					isSynthetic = synthetic.schemaPath === "SyntheticRootEntity",
					expect = test.chai.expect,
					resourceType = synthetic[isSynthetic ? 'type' : 'schemaPath'].replace('.', '/'),
					url = isSynthetic ? '/qrs/Selection/DBID' + test.selection.id + '/' + resourceType + '/synthetic' :
						'/qrs/' + resourceType + '/' + test.selection.items()[0].id;
				updateProperty = updateProperty || 'name';
				if (ctrlDir) {
					var directiveString = '<' + ctrlDir + ' selection-set="selectionSet" qmc-routing-message="qmcRoutingMessage"></' + ctrlDir + '>';
					test.directiveScope = test.compile(directiveString)(test.scope).isolateScope();
				}
				test.httpBackend.when('POST', '/qrs/Selection/DBID' + test.selection.id + '/' + resourceType + '/table').respond({ columnNames: ["id", "privileges", "name"], rows: [['old_test_id', 15, 'old_test_name']] });
				test.httpBackend.expectPOST('/qrs/Selection/DBID' + test.selection.id + '/' + resourceType + '/table');
				test.httpBackend.whenGET(url + '?privileges=true').respond(synthetic);
				test.httpBackend.expectGET(url + '?privileges=true');
				if (ctrlDir) {
					test.directiveScope.$apply();
				}
				test.scope.$apply();
				test.httpBackend.flush();
				test.timeout.flush();
				if (updatedValue) {
					var testScope = ctrlDir != null ? test.directiveScope : test.scope;
					//expect(testScope.editModel.isValid).to.equal(true);
					expect(testScope.editModel.isNew).to.equal(false);
					expect(testScope.emptyWarning).to.equal(false);
					expect(JSON.stringify(testScope.editModel.property[updateProperty].value)).to.equal(JSON.stringify(isSynthetic ? self.getSyntheticProperty(synthetic, updateProperty).value : synthetic[updateProperty || 'name']));
					testScope.editModel.property[updateProperty].value = updatedValue;
					expect(testScope.selectionSet.id).to.equal(test.selection.id);
					test.httpBackend.whenPUT(url + isSynthetic ? '' : '?privileges=true').respond({ id: 'new_test_id', name: testScope.editModel.baseObject[updateProperty] });
					test.httpBackend.expectPUT(url + isSynthetic ? '' : '?privileges=true', self.verifyRequest(updateProperty, updatedValue));
					if (callback) {
						callback(testScope.editModel);
					}
					testScope.actionDefinition[0].onClick();
					testScope.$apply();
					test.httpBackend.flush();
				}
			},
			// find a property in an object or synthetic object and verifya it against a value
			verifyRequest: function(property, value, isChild) {
				var self = this;
				return function(data) {
					var obj = (typeof data === "object") ? data : JSON.parse(data),
						propVal = (obj[property] || self.getSyntheticProperty(isChild ? obj.children[0] : obj, property).value);
					return propVal === value;
				};
			},
			// retrieve property from synthetic object
			getSyntheticProperty: function(syntheticObject, propertyName) {
				var property = { value: null };
				(syntheticObject.properties || []).some(function(prop) {
					if (prop.name === propertyName) {
						property = prop;
						return true;
					}
				});
				return property;
			},
			setupOverviewTable: function(test, controller, url, data) {
				test.httpBackend.expectPOST(url).respond(data);
				test.controller(controller, { $scope: test.scope });
				test.scope.tableController.render = test.tableRenderStub();
				test.scope.tableController.refresh();
				test.scope.$apply();
				test.httpBackend.flush();
			},
			getTableModel: function(test, controller, url, data) {
				this.setupOverviewTable(test, controller, url, data);
				return test.scope.tableController.tableModel;
			},
			getTableColumns: function(test) {
				if (test.scope.tableController == null) {
					throw new Error("TableController needs to be setup using the function setupOverviewTable");
				}
				return test.scope.tableController.columns;
			},
			getTableController: function(test) {
				if (test.scope.tableController == null) {
					throw new Error("TableController needs to be setup using the function setupOverviewTable");
				}
				return test.scope.tableController;
			},
			// set up test to verify a selection delete operation
			testDeleteAction: function(test, actionDefinition, selection, model, rowsOk, rowsNoPriv, deleteUrl, singleDelete) {
				var resourceType = selection.type.replace('.', '/'),
					expect = chai.expect;
				expect(actionDefinition.isDisabled).to.equal(true); // nothing selected

				makeTableSelection(rowsNoPriv, selection, model);
				expect(actionDefinition.isDisabled).to.equal(true); // no privilege

				makeTableSelection(rowsOk, selection, model);
				expect(actionDefinition.isDisabled).to.equal(singleDelete && selection.length > 1 ? true : false); // single delete only ?
				if (singleDelete) {
					selection.clear();
					selection.add(model.set(rowsOk[0]).id, model.value);
					expect(actionDefinition.isDisabled).to.equal(false);
				}
				actionDefinition.onClick();
				if (deleteUrl !== false) {
					test.httpBackend.whenDELETE(deleteUrl || ('/qrs/Selection/DBID' + selection.id + '/' + resourceType)).respond({ value: true });
					test.httpBackend.expectDELETE(deleteUrl || ('/qrs/Selection/DBID' + selection.id + '/' + resourceType));
					test.httpBackend.flush();
				}
				test.scope.$apply();
			},
			testEditAction: function(test, actionDefinition, selection, model, rowsOk, rowsNoPriv, editPath, singleEdit) {
				var expect = chai.expect;
				expect(actionDefinition.isDisabled).to.equal(true); // nothing selected

				makeTableSelection(rowsNoPriv, selection, model);
				expect(actionDefinition.label).to.equal((rowsNoPriv.length > 1) & !singleEdit ? 'View (' + rowsNoPriv.length + ')' : 'View');

				makeTableSelection(rowsOk, selection, model);
				expect(actionDefinition.isDisabled).to.equal(singleEdit && selection.length > 1 ? true : false); // single edit only ?
				expect(actionDefinition.label).to.equal((rowsOk.length > 1) && !singleEdit ? 'Edit (' + rowsOk.length + ')' : 'Edit');
				if (singleEdit) {
					selection.clear();
					selection.add(model.set(rowsOk[0]).id, model.value);
					expect(actionDefinition.isDisabled).to.equal(false);
				}
				actionDefinition.onClick();
				if (editPath !== false) {
					expect(test.location).to.equal(editPath);
				}
				test.scope.$apply();
			},
			// compile a directive a optionally load table on directive tablecontroller (if any)
			setupDirective: function(test, selection, directiveString, response) {
				return setupDirective(test, selection, directiveString, response);
			},
			// compile a directive and load table on directive tablecontroller. Genrate table model with a spy on render function
			getAssociationOverview: function(test, selection, directiveString, response) {
				if (!response) {
					throw Error("must give response for the tableModel to load");
				}
				var directiveScope = setupDirective(test, selection, directiveString, response);
				return directiveScope;
			},
			//Used in at least overview pages to select items from the table and put in the selectionSet. Rows is an array of id's. The id's must be present in the model object.
			makeTableSelection: function(rows, selectionSet, model) {
				makeTableSelection(rows, selectionSet, model);
			},
			// used on all module test to register them self in integration test environment
			register: function(callback) {
				testModules.push(callback);
				return { chai: chai, rootModule: rootModule };
			},
			// promis that is return from stubbed qmcDialogService.open function
			dialogPromise: function() {
				return {
					then: function(callback) {
						dialogResponse.successCallback(dialogResponse.success);
						callback(dialogResponse.success);
						return {
							"catch": function(errCallback) {
								errCallback(dialogResponse.error);
								return {
									"finally": function(finCallback) {
										finCallback(dialogResponse.finally);
									}
								};
							},
							"finally": function(finCallback) {
								finCallback(dialogResponse.finally);
							}
						};
					}
				};
			},
			// setup test environment variable (test) to holad various injects and usefull functionality
			// to be used by connected module integration tests. only first test in test-sequence needs a full setup
			setup: function(test) {

				//test.routingMessageService = {};
				providerModule.config(function(_qmcSectionServiceProvider_) {
					test.qmcSectionServiceProvider = _qmcSectionServiceProvider_;
				});
				module('qmcIntegrationTest', qmcCommonModule.name, qmcSectionModule.name, providerModule.name, function($provide) {

					//Monkey patch the $window.history API methods that is used by qmcStateService
					$provide.decorator('$window', function($delegate) {
						$delegate.history = {
							pushState: function() {
							},
							replaceState: function() {
							}
						};
						return $delegate;
					});
					//TODO Replace below with decorators as well!?
					qmcUnitTestStub($provide, 'provider', '$location', {
						path: function(url) {
							test.location = url;
							return test.location || '/test/';
						},
						absUrl: function() {
							return window.location.href;
						}
					});
					qmcUnitTestStub($provide, 'provider', '$routeParams', {
						get selectionSetId() {
							return test.selection.id;
						}
					});
					qmcUnitTestStub($provide, 'provider', 'qmcRoutingMessage', { isNew: test.isNew });
					qmcUnitTestStub($provide, 'service', 'qmcRoutingMessageService', {});
					qmcUnitTestStub($provide, 'provider', 'qmcPerformanceLog', { record: angular.noop, log: angular.noop });
					qmcUnitTestStub($provide, 'provider', '$route', {
						reload: function() {
						}
					});
					qmcUnitTestStub($provide, 'service', 'qmcDragomanService');
					qmcUnitTestStub($provide, 'service', 'qmcConfigurationApiService');
					qmcUnitTestStub($provide, 'service', 'qmcStreamApiService', qmcStreamApiServiceStub);
					qmcUnitTestStub($provide, 'service', 'qmcServiceClusterService', {
						adjustTableDefs: function() {}
					});
					qmcUnitTestStub($provide, 'constant', 'qmcFeatureToggleConstant',
						qmcFeatureToggleConstantStub.disableFeatureToggle().build());
				});

				testModules.forEach(function(module) {
					module(test);
				});

				inject(function($rootScope, $controller, $httpBackend, $compile, $timeout,
					qmcSelectionSetFactory, $q, qmcRoutingMessageService, qmcSettingsService, qmcCapabilityService) {
					test.qmcSelectionSetFactory = qmcSelectionSetFactory;
					test.selection = qmcSelectionSetFactory(test.type || 'Test');
					(test.selItems || []).forEach(function(item) {
						test.selection.add(item.id, item);
					});
					test.dialogResponse = dialogResponse;
					test.httpBackend = $httpBackend;
					test.controller = $controller;
					test.compile = $compile;
					test.timeout = $timeout;
					test.scope = $rootScope.$new();
					test.$q = $q;
					test.qmcCapabilityService = qmcCapabilityService;
					test.routingMessageService = qmcRoutingMessageService;
					test.settingsService = qmcSettingsService;

					test.addIdProp = function(id, object) {
						return angular.extend({ id: id }, object);
					};
					initTestEnvironment(test);
				});
			},
			// cleanup after each test
			finish: function(test) {
				test.deregisterActionAlertListener();
				test.deregisterClearListener();
				test.httpBackend.verifyNoOutstandingExpectation();
				test.httpBackend.verifyNoOutstandingRequest();

				test.scope.selectionSet = {};
				test.selection.clear();
			}
		};
	}
);
