define(function() {
	'use strict';
	var stub = {};
	Object.defineProperties(stub, {
		name: { value: "qmcPerformanceLogStub" },
		default: {
			value: function() {
				return {
					record: function() {
					},
					log: function() {
					}
				};
			}
		}
	});
	return stub;
});
