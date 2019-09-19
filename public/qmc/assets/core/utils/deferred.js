define( ["assets/qvangular/qvangular-core"],
/**
* @exports assets/core/utils/deferred
* @expose module:assets/core/utils/deferred~Deferred
* @owner Tobias Linsefors (tls)
*/
function ( qvangular ) {

	/**
	* Deferred class. A promise library.
	*
	* Right now only wrapping the jQuery.Deferred function. This wrapping is done so
	* that we can change promise library whenever we want.
	*
	* Some well known alternatives might be:
	*
	*  - [Q](http://documentup.com/kriskowal/q/)
	*  - [when](https://github.com/cujojs/when)
	*
	* @class
	* @see http://api.jquery.com/category/deferred-object/
	* @example
	* function thingamajing() {
	*   var deferred = new Deferred();
	*   // Fake async stuff
	*   setTimeout( function() {
	*     deferred.resolve( 5 );
	*   }, 100 );
	*   return deferred.promise;
	* }
	*
	* thingamajing().then( function( value ) {
	*   console.log( value ); // = 5
	* } );
	*
	*/
	var Deferred;

	Deferred = function() {
		var d = qvangular.getService( '$q' ).defer();
		return d;
	};

	/**
	* Helper function to create a resolved promise with an initial value.
	*
	* @example
	* <caption>Quickly resolve with some value.</caption>
	* return Deferred.resolve( someValue );
	*
	* @param {mixed} value The value to resolve the promise with.
	* @returns {module:assets/core/utils/deferred~Promise}
	*/
	Deferred.resolve = function ( value ) {
		var d = qvangular.getService( '$q' ).defer();
		d.resolve( value );
		return d.promise;
	};
	/**
	* Helper function to create a rejected promise with an error.
	*
	* @example
	* <caption>Quickly reject with an error.</caption>
	* return Deferred.reject( new Error("Something went wrong.") );
	*
	* @param {module:assets/core/utils/errors~Error} error
	* @returns {module:assets/core/utils/deferred~Promise}
	*/
	Deferred.reject = function() {
		return qvangular.getService( '$q' ).reject.apply( null, arguments );
	};

	Deferred.all = function() {
		return qvangular.getService( '$q' ).all.apply( null, arguments );
	};

	Deferred.when = function() {
		return qvangular.getService( '$q' ).when.apply( null, arguments );
	};

	Object.defineProperty( Deferred, "Promise", {
		get: function () {
			return qvangular.getService( '$q' );
		}
	} );

	return Deferred;

	/**
	* Returns a promise from this deferred object.
	* @function module:assets/core/utils/deferred~Deferred#promise
	* @returns {module:assets/core/utils/deferred~Promise}
	* @see http://api.jquery.com/deferred.promise/
	*/

	/**
	* @classdesc
	* A promise object. This is the object you get when invoking {@link module:assets/core/utils/deferred~Deferred#promise}.
	*
	* @class module:assets/core/utils/deferred~Promise
	* @see http://api.jquery.com/Types/#Promise
	* @description Don't use the contrustor directly. Use {@link module:assets/core/utils/deferred~Deferred}.
	*/

} );
