/**
* Calls the capability service for feature flags
*
* @owner Johan Frennesson (jfo)
*
* How to use: 
* 1 require in "core.utils/capability"
* 2 run capability.get()
*	.then( function( flags ) {
*		var yourFlagObject = flags;
*	});
* Then you are ready to use yourFlagObject
*/
define( [
	"angular",
	"core.utils/basepath"
],
function ( angular, basepath ) {

	var capabilityFlags; //Global so we only fetch on reload

	//QMC cant use qvangular so use this notation
	var getCapabilities = angular.injector(["ng"]).invoke(["$http", function($http) {

		function ensureHeaders( config ) {
			if ( !config.headers ) {
				config.headers = {};
			}
		}

		function ensureParams( config ) {
			if ( !config.params ) {
				config.params = {};
			}
		}

		function setVirtualProxy( config ) {
			var basePath = basepath.getServerRootPath(), 
			pos = basePath.indexOf( "/resources" );
			if ( pos > -1 ) {
				basePath = basePath.substring( 0, pos );
			}
			config.url = basePath + config.url;

			return config;
		}

		function request( config ) {

			ensureHeaders( config );
			ensureParams( config );
			setVirtualProxy( config );

			return $http( config );

		}

		function getContent() {

			var config = {
				method: "GET",
				url: "/api/capability/v1/list"
			};

			return capabilityFlags = request( config )
				.then( function ( response ) {
					var data = response.data,
						flags = {};
					data.forEach( function( item ) {
						if( item.flag && item.enabled !== undefined ) {
							flags[item.flag] = item.enabled;
						}
					} );
					return angular.extend( {}, flags );
				} )
				.catch( function ( error ) {
					return error; 
				} );
		}

		return getContent;

	}]);

	return {
		get: function() {
			if( !capabilityFlags ) {
				return getCapabilities();
			}
			return capabilityFlags;
		}
	};
} );
