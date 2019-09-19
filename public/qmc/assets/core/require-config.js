/*global requirejs*/

( function () {
	requirejs.config( {
		context: requirejs.s.contexts.sense ? "sense" : null,
		paths: {
			"text": "assets/external/requirejs/text",
			"css": "assets/external/requirejs/css",
			"jquery": "assets/external/jquery/jquery",
			"jqueryoutside": "assets/external/jquery/jquery.ba-outside-events",
			"jqueryui": "assets/external/jquery/jquery-ui",
			"jqueryuitouch": "assets/external/jquery/jquery.ui.touch-punch",
			"eventable": "assets/external/eventable/eventable",
			"sirtrevor": "assets/external/sir-trevor/sir-trevor",
			"angular": "assets/external/angular/angular",
			"angular-animate": "assets/external/angular/angular-animate",
			"angular-route": "assets/external/angular/angular-route",
			"angular-sanitize": "assets/external/angular/angular-sanitize",
			"crossroads": "assets/external/crossroads/crossroads",
			"signals": "assets/external/crossroads/signals",
			"underscore": "assets/external/underscorejs/underscore",
			"touche": "assets/external/touche/touche",
			"d3": "assets/external/d3/d3",
			"element-queries": "assets/external/css-element-queries/ElementQueries",
			"resize-sensor": "assets/external/css-element-queries/ResizeSensor",
			"jszip": "assets/external/JSZip/jszip",
			"filesaver": "assets/external/filesaverjs/FileSaver",

			"mqa": "assets/external/mqa/mqa",
			"lz-string": "assets/external/lz-string/lz-string",
			"moment": "assets/external/moment/moment-with-langs-2.4.0",
			"sha256": "assets/external/js-sha256/sha256",
			"openlayers": "assets/external/openlayers/OpenLayers",
			"dropzone": "assets/external/dropzonejs/dropzone",
			"handlebars": "assets/external/handlebars/handlebars",
			"enigma": "assets/external/enigma/enigma",
			"sensei-codearea": "assets/external/sensei-codearea/sensei-codearea",
			"angular-leonardo-ui": "assets/external/angular-leonardo-ui/angular-leonardo-ui",

			"dragoman": "assets/dragoman/dragoman",
			"qvangular": "assets/qvangular/qvangular",
			"ng": "assets/qvangular/qvangular-injector-require-plugin",
			"ngModule": "assets/qvangular/qvangular-external-module-require-plugin",
			"angular-vs-repeat": "assets/external/angular/angular-vs-repeat",

			"util": "js/lib/util",
			"guid": "js/lib/guid",
			"encoder": "js/lib/encoder",
			"pubsub": "js/lib/pubsub",
			"translator": "js/lib/translator",
			"xsrfplugin": "js/lib/xsrfplugin",

			"widget.loader": "js/widgets/loader",
			"widget.scriptarea": "js/widgets/scriptarea",
			"widget.pager": "js/widgets/pager",

			"general.models": "assets/general/models",
			"general.views": "assets/general/views",
			"general.controllers": "assets/general/controllers",
			"general.utils": "assets/general/utils",
			"general.services": "assets/general/services",
			"general.components": "assets/general/components",
			"general.directives": "assets/general/directives",
			"general.toolbar": "assets/general/views/toolbar",
			"general.scroll": "assets/general/components/scroll",
			"general.sortable": "assets/general/components/sortable",
			"general.support": "assets/general/support",
			"general.enums": "assets/general/enums",

			"core.models": "assets/core/models",
			"core.utils": "assets/core/utils",

			"cm": "assets/external/codemirror_latest/lib/codemirror",
			"cm.runmode": "assets/external/codemirror_latest/addon/runmode/runmode",
			"cm.dialog": "assets/external/codemirror_latest/addon/dialog/dialog",
			"cm.placeholder": "assets/external/codemirror_latest/addon/display/placeholder",
			"cm.foldcode": "assets/external/codemirror_latest/addon/fold/foldcode",
			"cm.foldgutter": "assets/external/codemirror_latest/addon/fold/foldgutter",
			"cm.brace-fold": "assets/external/codemirror_latest/addon/fold/brace-fold",
			"cm.xml-fold": "assets/external/codemirror_latest/addon/fold/xml-fold",
			"cm.active-line": "assets/external/codemirror_latest/addon/selection/active-line",
			"cm.javascript": "assets/external/codemirror_latest/mode/javascript/javascript",
			"cm.css": "assets/external/codemirror_latest/mode/css/css",
			"cm.htmlmixed": "assets/external/codemirror_latest/mode/htmlmixed/htmlmixed",
			"cm.xml": "assets/external/codemirror_latest/mode/xml/xml",
			"cm.matchbrackets": "assets/external/codemirror_latest/addon/edit/matchbrackets",
			"cm.search": "assets/external/codemirror_latest/addon/search/search",
			"cm.annotatescrollbar": "assets/external/codemirror_latest/addon/scroll/annotatescrollbar",
			"cm.matchesonscrollbar": "assets/external/codemirror_latest/addon/search/matchesonscrollbar",
			"cm.match-highlighter": "assets/external/codemirror_latest/addon/search/match-highlighter",
			"cm.searchcursor": "assets/external/codemirror_latest/addon/search/searchcursor",
			"cm.comment": "assets/external/codemirror_latest/addon/comment/comment",
			"cm.matchtags": "assets/external/codemirror_latest/addon/edit/matchtags",
			"cm.closetag": "assets/external/codemirror_latest/addon/edit/closetag",
			"cm.closebrackets": "assets/external/codemirror_latest/addon/edit/closebrackets",
			"cm.show-hint": "assets/external/codemirror_latest/addon/hint/show-hint",
			"cm.javascript-hint": "assets/external/codemirror_latest/addon/hint/javascript-hint",
			"cm.css-hint": "assets/external/codemirror_latest/addon/hint/css-hint",
			"cm.html-hint": "assets/external/codemirror_latest/addon/hint/html-hint",
			"cm.xml-hint": "assets/external/codemirror_latest/addon/hint/xml-hint"
		},
		shim: {
			"angular": {
				deps: ["jquery"],
				exports: 'angular'
			},
			"underscore": {
				"exports": "_"
			},
			"eventable": ["underscore"],
			"sirtrevor": {
				deps: ["eventable", "underscore"],
				exports: "SirTrevor"
			},
			"touche": {
				exports: "Touche"
			},
			// --- Bootstrapping angular
			"angular-route": {
				deps: ["angular"],
				init: function ( angular ) {
					return angular.module( 'ngRoute' );
				}
			},
			"angular-animate": {
				deps: ["angular"],
				init: function ( angular ) {
					return angular.module( 'ngAnimate' );
				}
			},
			"angular-sanitize": {
				deps: ["angular"],
				init: function ( angular ) {
					return angular.module( 'ngSanitize' );
				}
			},
			"angular-vs-repeat": {
				deps: ["angular"]
			},
			// --- END
			"element-queries": {
				deps: ["resize-sensor"],
				exports: "ElementQueries"
			},
			"jqueryui": ["jquery"],
			"jqueryoutside": ["jquery"],
			"jqueryuitouch": {
				deps: ["jquery", "jqueryui"]
			},
			"openlayers": {
				exports: "OpenLayers"
			},
			"handlebars": {
				exports: "Handlebars"
			},
			"dropzone": {
				exports: "Dropzone"
			},

			"cm.dialog": ["cm"],
			"cm.placeholder": ["cm"],
			"cm.foldcode": ["cm"],
			"cm.xml-fold": ["cm"],
			"cm.comment": ["cm"],
			"cm.javascript": ["cm"],
			"cm.htmlmixed": ["cm"],
			"cm.xml": ["cm"],
			"cm.css": ["cm"],
			"cm.show-hint": ["cm"],
			"cm.xml-hint": ["cm"],
			"cm.html-hint": ["cm"],
			"cm.css-hint": ["cm"],
			"cm.javascript-hint": ["cm"],
			"cm.matchbrackets": ["cm"],
			"cm.matchtags": ["cm", "cm.xml-fold"],
			"cm.search": ["cm"],
			"cm.annotatescrollbar": ["cm"],
			"cm.matchesonscrollbar": ["cm"],
			"cm.searchcursor": ["cm"],
			"cm.closetag": ["cm"],
			"cm.closematchtags": ["cm"],
			"cm.closebrackets": ["cm"],
			"cm.brace-fold": ["cm"],
			"cm.foldgutter": ["cm"],
			"cm.active-line": ["cm"]
		}
	} );
} )();
