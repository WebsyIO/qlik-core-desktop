/* eslint-env amd */

define( {
	load: function (name, req, onload) {
		function onError(err) {
			if (onload.error) {
				onload.error(err);
			}
		}
		window.qlikMashupLoader().then(function() {
			req(['qlik'], function(qlik) {
				onload(qlik);
			}, onError);
		}).catch(onError);
	}
});
