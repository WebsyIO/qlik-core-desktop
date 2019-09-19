/*global define, require*/

/**
 * @owner Johan Frennesson (jfo)
 * 
 * Provides basepath for requests
 * 
 */

define([],
function( ) {
	"use strict";
		//* getDocument and getServerRootPath are duplicated from es2015/angular/factory/paths/paths.js to avoid dependence on qvangular *
		function _getDocument () {
			return ( window && window.document && window.document.baseURI ) ? window.document : {
				baseURI: "./"
			};
		}

		//* getDocument and getServerRootPath are duplicated from es2015/angular/factory/paths/paths.js to avoid dependence on qvangular *
		function getServerRootPath () {
			var
				url_array,
				baseURI = _getDocument().baseURI;
			if ( baseURI.length - 1 === baseURI.lastIndexOf( "/" ) ) {
				baseURI = baseURI.substring( 0, baseURI.lastIndexOf( "/" ) );
			}
			url_array = baseURI.split( "/" );
			/*
			 * Pop to remove the end-point
			 * //HUB
			 * Ex: http://localhost/virtual/proxy/to/hub/ => http://localhost/virtual/proxy/to
			 * Ex: http://localhost/virtual/proxy/to/sense/ => http://localhost/virtual/proxy/to
			 * //SENSE-client
			 * Ex: http://localhost:4848/hub/ => http://localhost:4848
			 * Ex: http://localhost:4848/sense/ => http://localhost:4848
			 */
			url_array.pop();
			return url_array.join( "/" );
		}

	return {
		getServerRootPath: getServerRootPath
	};
} );