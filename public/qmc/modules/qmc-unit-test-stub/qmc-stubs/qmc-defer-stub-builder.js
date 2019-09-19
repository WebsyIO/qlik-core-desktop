/*
* Plain javascript object for stubbing a defer. Constructed with either a $q object or a defaultResolveValue.
* @constructor: @param $q: An Angular object. If this is present the stub will create angular defer objects, resolvable from outside.
*			  : @param defaultResolveValue: will be returned by simple promise objects. Can be overriden with argument to function createSimplePromise.
* @method createSimplePromise: creates a fake promise object with faked promise functions which acts as immediately resolved. Not resolvable from outside.
*					 @param customResolveValue: if present it overrides the default resolve value.
* @method createDeferStub: creates either a $q defer or a simple defer based on the arguments supplied to constructor. Adds defer objects to a dictionary which enables
*                          user to retreive resolvable deferreds.
* @method getPromise: Gets a promise from the dictionary. To be used from the stub functions.
*                    @param currentFunctionName: Dictionary key, named after the stub function.
* @method getDefer: Gets a defer from the dictionary. To be resolved from the test.
					@param currentFunctionName: Dictionary key, named after the stub function.
* @Example: See qmc-app-api-service-stub for usage example.
*/
define(function() {
	'use strict';

	var deferStubBuilder = {
		create: function($q, defaultResolveValue) {
			var buildAngularDefer, angularDeferStubDictionary;
			validate();

			buildAngularDefer = false;
			angularDeferStubDictionary = {};

			if ($q) {
				buildAngularDefer = true;
			}

			function validate() {
				if ($q === undefined || $q === null) {
					if (defaultResolveValue === null || defaultResolveValue === undefined) {
						throw new Error("qmc-defer-stub-builder: If $q is not defined you should define a default resolve value");
					}
				}
			}

			function createSimplePromise(customResolveValue) {//TODO: ela: wrap this in sinon spy for convenience?
				var resolveValue = (customResolveValue != null) ? customResolveValue : defaultResolveValue;
				var promise = {
					then: function(callback) {
						callback(resolveValue);
						return {
							'finally': function(callback2) {
								callback2();
							},
							'catch': function(){}
						};
					},
					'catch': function() {
					}
				};
				return promise;
			}

			function addToDictionary(currentFunctionName, obj) {
				angularDeferStubDictionary[currentFunctionName] = obj;
			}

			function createAngularStub(currentFunctionName) {
				if (currentFunctionName === null || currentFunctionName === undefined) {
					throw new Error("qmc-defer-stub-builder: Can't create an Angularjs defer object without a function name key.");
				}

				var deferred = $q.defer(),
					promise = deferred.promise,
					obj = { deferred: deferred, promise: promise };
				addToDictionary(currentFunctionName, obj);
				return obj;

			}

			function createDeferStub(currentFunctionName) {
				if (buildAngularDefer === true) {
					return createAngularStub(currentFunctionName);
				}
				var obj = { deferred: {}, promise: createSimplePromise() };
				addToDictionary(currentFunctionName, obj);
				return obj;
			}

			function getPromise(currentFunctionName) {
				return angularDeferStubDictionary[currentFunctionName].promise;
			}

			function getDefer(currentFunctionName) {
				return angularDeferStubDictionary[currentFunctionName].deferred;
			}

			return {
				createSimplePromise: createSimplePromise,
				createDeferStub: createDeferStub,
				getPromise: getPromise,
				getDefer: getDefer
			};
		}

	};
	return deferStubBuilder;
});
