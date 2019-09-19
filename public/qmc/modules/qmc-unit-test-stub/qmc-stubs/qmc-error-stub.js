/*
* Plain javascript object for stubbing the QmcError. If needed as an Angularjs factory, stub it via qmc-unit-test-stub.
* The stub needs a name property for qmc-stub-factory to identify it.
*/
define(function() {
	'use strict';

	var stub = {};

	var defaultError = function(message) {
		this.message = message;
	};

	defaultError.AuthorizationError = function(message) {
		this.message = message;
	};
	defaultError.ConflictError = function(message) {
		this.message = message;
	};
	defaultError.GenericClientError = function(message) {
		this.message = message;
	};
	defaultError.AbortError = function(message) {
		this.message = message;
	};
	defaultError.GenericServerError = function(message) {
		this.message = message;
	};
	defaultError.RequestAbortError = function(message) {
		this.message = message;
	};
	defaultError.RequestTimeoutError = function(message) {
		this.message = message;
	};
	defaultError.RequestUnsentError = function(message) {
		this.message = message;
	};
	defaultError.SessionTimeoutError = function(message) {
		this.message = message;
	};
	defaultError.ValidationError = function(message) {
		this.message = message;
	};
	defaultError.SchemaValidationError = function(message) {
		this.message = message;
	};
	defaultError.NotFoundError = function(message) {
		this.message = message;
	};
	defaultError.RoutingError = function(message) {
		this.message = message;
	};
	defaultError.InitializationError = function(message) {
		this.message = message;
	};
	defaultError.ServiceUnavailableError = function(message) {
		this.message = message;
	};
	defaultError.UnsupportedBrowserError = function(message) {
		this.message = message;
	};


	Object.defineProperties(stub, {
		name: { value: "QmcErrorStub" },
		default: {
			value: function() {
				return defaultError;
			}
		}
	});

	return stub;
});
