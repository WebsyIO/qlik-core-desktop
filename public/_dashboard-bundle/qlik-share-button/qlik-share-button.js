define(["jquery","qlik"], function(__WEBPACK_EXTERNAL_MODULE_jquery__, __WEBPACK_EXTERNAL_MODULE_qlik__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/main.less":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./src/main.less ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dashboardLinkGenerator {\n  display: inline-block;\n  padding: 0px 0px;\n  margin-bottom: 0;\n  font-size: 10px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: normal;\n  vertical-align: middle;\n  width: calc(100%);\n  height: calc(100%);\n  color: #fff;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var qlik__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qlik */ "qlik");
/* harmony import */ var qlik__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qlik__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _paint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paint */ "./src/paint.js");
/* harmony import */ var _main_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.less */ "./src/main.less");
/* harmony import */ var _main_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_main_less__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined;




/* harmony default export */ __webpack_exports__["default"] = ({
  definition: {
    type: "items",
    component: "accordion",
    items: {
      appearance: {
        uses: "settings",
        items: {
          selections: {
            show: false
          },
          general: {
            items: {
              showTitles: {
                defaultValue: false
              },
              details: {
                show: false
              }
            }
          }
        }
      },
      exportSettings: {
        type: "items",
        label: "Export Settings",
        items: {
          outputMethod: {
            ref: "outputMethod",
            component: "radiobuttons",
            type: "string",
            label: "Output Method",
            options: [{
              value: "clipboard",
              label: "Copy To Clipboard Button"
            }, {
              value: "textbox",
              label: "Copy From Textbox"
            }],
            defaultValue: "clipboard"
          },
          maxSelected: {
            ref: "maxSelected",
            type: "integer",
            label: "Max Values Selected in One Field",
            defaultValue: "100",
            min: 1
          }
        }
      },
      about: {
        label: "About",
        component: "items",
        items: {
          header: {
            label: 'Share Button',
            style: 'header',
            component: 'text'
          },
          paragraph1: {
            label: 'A button that creates links so that the current sheet and selections can be shared with others.',
            component: 'text'
          },
          paragraph2: {
            label: 'Share Button is based upon an extension created by Fady Heiba.',
            component: 'text'
          }
        }
      }
    }
  },
  support: {
    exportData: false
  },
  paint: function paint($element, layout) {
    var component = _this;
    var app = qlik__WEBPACK_IMPORTED_MODULE_0___default.a.currApp(_this);
    app.theme.getApplied().then(function (qTheme) {
      Object(_paint__WEBPACK_IMPORTED_MODULE_1__["default"])($element, layout, component, qTheme);
    }).catch(function (exception) {
      console.error(exception); // eslint-disable-line no-console
    });
  }
});

/***/ }),

/***/ "./src/main.less":
/*!***********************!*\
  !*** ./src/main.less ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/less-loader/dist/cjs.js!./main.less */ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/main.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/paint.js":
/*!**********************!*\
  !*** ./src/paint.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var qlik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qlik */ "qlik");
/* harmony import */ var qlik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qlik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");



var RECORD_SEPARATOR = '&@#$^()';
var TAG_SEPARATOR = '::::';
var VALUE_SEPARATOR = ';;;;'; // IE is missing "String.includes"

if (!String.prototype.includes) {
  String.prototype.includes = function (search, start) {
    'use strict';

    if (typeof start !== 'number') {
      start = 0;
    }

    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}

var suspectedCountCubeId = null;
var suspectedFieldCount = 0;

function paint($element, layout, component, qTheme) {
  var buttonText = '';
  var config = {
    host: window.location.hostname,
    prefix: window.location.pathname.substr(0, window.location.pathname.toLowerCase().lastIndexOf("/extensions") + 1),
    port: window.location.port,
    isSecure: window.location.protocol === "https:"
  }; //Getting the current application

  var app = qlik__WEBPACK_IMPORTED_MODULE_1___default.a.currApp(component);
  var applicationId = app.model.layout.qFileName;

  if (applicationId.substring(applicationId.length - 4) == '.qvf') {
    applicationId = applicationId.slice(0, -4);
  }

  var applicationIdFr = encodeURIComponent(applicationId); //Getting the current sheet

  var CurrentSheet = qlik__WEBPACK_IMPORTED_MODULE_1___default.a.navigation.getCurrentSheetId();
  var SheetID = CurrentSheet.sheetId; //Creating base part of URL including clearing any leftover
  //selections before opening the new page with our selections

  var baseURL = (config.isSecure ? "https://" : "http://") + config.host + (config.port ? ":" + config.port : "") + "/sense/app/" + applicationIdFr + "/sheet/" + SheetID + "/state/analysis/options/clearselections"; //If the user chose to output the link to clipboard only create a button, otherwise create a textbox as well

  var button = jquery__WEBPACK_IMPORTED_MODULE_0___default()("<button name=\"GenerateDashboardLink\" id=\"generateDashboardLink\" class=\"dashboardLinkGenerator\" />");
  button.attr('style', "background-color: ".concat(qTheme.properties.dataColors.primaryColor, ";"));

  if (layout.outputMethod == "clipboard") {
    buttonText = 'Copy Dashboard Link';
    $element.html(button);
  } else if (layout.outputMethod == "textbox") {
    buttonText = 'Generate Link';
    var textboxHTMLCode = '<textarea id="textbox" class="linkTextboxArea" type="text" \
      readOnly="true" style="height: 90%;width: 90%;font-size: 10px;" value="0"/>';
    $element.html("<table style=\"height:100%;text-align: center;\"><tr><td style=\"width:20%;\">       ".concat(button[0].outerHTML, "</td><td style=\"width:80%;\">").concat(textboxHTMLCode, "</td></tr></table>"));
    button = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#generateDashboardLink');
  }

  var setButtonState = function setButtonState(label, disabled) {
    button.text(label);
    button.prop("disabled", disabled);
  };

  setButtonState(buttonText, false); //If in edit mode, do nothing

  var mode = $element.parent().scope().object.getInteractionState();
  if (mode === 2) return;
  var maxValuesSelectedInField = Math.max(1, layout.maxSelected); //Create a hypercube with the GetCurrentSelections expression

  app.createCube({
    qMeasures: [{
      qDef: {
        qDef: "=GetCurrentSelections('" + RECORD_SEPARATOR + "','" + TAG_SEPARATOR + "','" + VALUE_SEPARATOR + "'," + maxValuesSelectedInField + ")"
      }
    }],
    qInitialDataFetch: [{
      qTop: 0,
      qLeft: 0,
      qHeight: 1,
      qWidth: 1
    }]
  }, function (reply) {
    var qMatrix = reply.qHyperCube.qDataPages[0].qMatrix;
    var qText = qMatrix[0][0].qText;
    var fieldSelections = qText && qText != '-' ? qText.split(RECORD_SEPARATOR) : [];

    if (fieldSelections.length === 0) {
      setButtonState(buttonText, false);
      Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["addOnActivateButtonEvent"])($element, config, layout, baseURL);
      return;
    }

    var selectionPartOfURL = Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["createSelectionURLPart"])(fieldSelections, TAG_SEPARATOR, VALUE_SEPARATOR, true);

    if (!selectionPartOfURL.tooManySelectionsPossible) {
      setButtonState(buttonText, false);
      suspectedFieldCount = 0;
      Object(_utilities__WEBPACK_IMPORTED_MODULE_2__["addOnActivateButtonEvent"])($element, config, layout, baseURL + selectionPartOfURL.selectionURLPart);
      return;
    }

    if (suspectedCountCubeId && suspectedFieldCount == selectionPartOfURL.suspectedFields.length) {
      // Already have a selection-count-cube, for these fields, so no need to create a new
      return;
    }

    if (suspectedCountCubeId) {
      // Destroy current select-count-cube before creating a new one
      app.destroySessionObject(suspectedCountCubeId);
      suspectedCountCubeId = null;
      suspectedFieldCount = 0;
    } // Create a new hypercube with the number of selections of the suspected fields


    suspectedFieldCount = selectionPartOfURL.suspectedFields.length;
    app.createCube({
      qMeasures: selectionPartOfURL.suspectedFields.map(function (field) {
        return {
          qDef: {
            qDef: "=GetSelectedCount([" + field + "],True())"
          }
        };
      }),
      qInitialDataFetch: [{
        qTop: 0,
        qLeft: 0,
        qHeight: 1,
        qWidth: suspectedFieldCount
      }]
    }, function (reply) {
      suspectedCountCubeId = reply.qInfo.qId;
      var qMatrix = reply.qHyperCube.qDataPages[0].qMatrix;
      var tooManySelectionsMade = qMatrix[0].some(function (suspectedSelection) {
        return parseInt(suspectedSelection.qText) > layout.maxSelected;
      });

      if (tooManySelectionsMade) {
        // If this is the case for at least one field, disable the button
        setButtonState("Too Many Selections", true);
      }
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (paint);

/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/*! exports provided: createSelectionURLPart, addOnActivateButtonEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSelectionURLPart", function() { return createSelectionURLPart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addOnActivateButtonEvent", function() { return addOnActivateButtonEvent; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

var LISTENER_NAMESPACE = "dashboard-link-generator"; //Helper function for creating App Integration API's URI part responsible for selections

function createSelectionURLPart(fieldSelections, tagSeparator, valueSeparator, checkForTooManySelections) {
  var returnObject = {
    selectionURLPart: "",
    tooManySelectionsPossible: false,
    suspectedFields: []
  };
  fieldSelections.forEach(function (item) {
    //If this function is instructed to check for tooManySelections, it checks if the selection
    // contains the keywords of, ALL, or NOT, indicating that the selection is not in the 'x of y values' format
    if (checkForTooManySelections && (item.includes(" of ") || item.includes("ALL") || item.includes("NOT")) && item.split(valueSeparator).length == 1) {
      returnObject.tooManySelectionsPossible = true;
      returnObject.suspectedFields.push(item.split(tagSeparator)[0]);
    } //Otherwise it just creates the selections part of the URL
    else {
        returnObject.selectionURLPart += "/select/" + encodeURIComponent(item.split(tagSeparator)[0]) + "/" + encodeURIComponent(item.split(tagSeparator)[1].replace(tagSeparator, ";"));
        var splitForBrackets = returnObject.selectionURLPart.split("%3B%3B%3B%3B");
        returnObject.selectionURLPart = splitForBrackets.join("%3B"); // Handle specific characters

        returnObject.selectionURLPart.replace(/\*/g, '%2A');
      }
  });
  return returnObject;
} //Helper funciton for adding on a "qv-activate" event of button/link

function addOnActivateButtonEvent($element, config, layout, url) {
  var encodedURL = encodeURIComponent(url);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#generateDashboardLink").off("qv-activate.".concat(LISTENER_NAMESPACE));
  jquery__WEBPACK_IMPORTED_MODULE_0___default()("#generateDashboardLink").on("qv-activate.".concat(LISTENER_NAMESPACE), function () {
    var finalURL = encodedURL;
    var tempSuccessButtonLabel = "Copied To Clipboard!";

    if (layout.outputMethod == "clipboard") {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dashboardLinkGenerator').off("click.".concat(LISTENER_NAMESPACE));
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dashboardLinkGenerator').on("click.".concat(LISTENER_NAMESPACE), function () {
        copyTextToClipboard(url);
      }); // Changing the button's text temporarily to mark success

      document.getElementById('generateDashboardLink').innerHTML = tempSuccessButtonLabel; // Waiting for 1.5 seconds and resetting the button's text so that users are not discouraged
      // to make new selections and generate new links

      setTimeout(function () {
        var labelElement = document.getElementById('generateDashboardLink');

        if (labelElement.innerHTML == tempSuccessButtonLabel) {
          // Label hasn't changed because of selection change, so remove success label
          labelElement.innerHTML = "Generate Link";
        }
      }, 1500);
    } else if (layout.outputMethod == "textbox") {
      //Adding the dashboard generated link to the textbox
      document.getElementById('textbox').value = decodeURIComponent(finalURL); //Copying the textbox's text (which we just added the generated link to)

      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dashboardLinkGenerator').off("click.".concat(LISTENER_NAMESPACE));
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.dashboardLinkGenerator').on("click.".concat(LISTENER_NAMESPACE), function () {
        var copyTextarea = document.querySelector('.linkTextboxArea');
        copyTextarea.select();

        try {
          document.execCommand('copy');
        } catch (err) {
          console.log(err); // eslint-disable-line no-console
        }
      }); //Changing the button's text temporarily to mark success

      document.getElementById('generateDashboardLink').innerHTML = tempSuccessButtonLabel; // Waiting for 1.5 seconds and resetting the button's text so that users are not discouraged
      // to make new selections and generate new links

      setTimeout(function () {
        var labelElement = document.getElementById('generateDashboardLink');

        if (labelElement.innerHTML == tempSuccessButtonLabel) {
          // Label hasn't changed because of selection change, so remove success label
          labelElement.innerHTML = "Generate Link";
        }
      }, 1500);
    }

    window.onbeforeunload = null;
    return false;
  });
}

function copyTextToClipboard(text) {
  var textArea = document.createElement("textarea"); // *** This styling is an extra step which is likely not required. ***
  //
  // Why is it here? To ensure:
  // 1. the element is able to have focus and selection.
  // 2. if element was to flash render it has minimal visual impact.
  // 3. less flakyness with selection and copying which **might** occur if
  //    the textarea element is not visible.
  //
  // The likelihood is the element won't even render, not even a flash,
  // so some of these are just precautions. However in IE the element
  // is visible whilst the popup box asking the user for permission for
  // the web page to copy to the clipboard.
  //
  // Place in top-left corner of screen regardless of scroll position.

  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0; // Ensure it has a small width and height. Setting to 1px / 1em
  // doesn't work as this gives a negative w/h on some browsers.

  textArea.style.width = '2em';
  textArea.style.height = '2em'; // We don't need padding, reducing the size if it does flash render.

  textArea.style.padding = 0; // Clean up any borders.

  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none'; // Avoid flash of white box if rendered for any reason.

  textArea.style.background = 'transparent';
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();

  try {
    document.execCommand('copy');
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
  }

  document.body.removeChild(textArea);
}

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ }),

/***/ "jquery":
/*!*************************************************************************************!*\
  !*** external {"amd":"jquery","commonjs":"jquery","commonjs2":"jquery","root":"_"} ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;

/***/ }),

/***/ "qlik":
/*!*******************************************************************************!*\
  !*** external {"amd":"qlik","commonjs":"qlik","commonjs2":"qlik","root":"_"} ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_qlik__;

/***/ })

/******/ })});;
//# sourceMappingURL=qlik-share-button.js.map