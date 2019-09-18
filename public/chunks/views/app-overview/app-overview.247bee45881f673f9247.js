/*!
 * sense-client@6.105.4
 * 
 * Copyright(C) 2019 Qlik International AB
 * All Rights Reserved
 * 
 */
(window["qJsonp"]=window["qJsonp"]||[]).push([[81],{1328:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=t.AppOverviewProvider=void 0;var n=l(r(98));var o=u(r(116));var a=u(r(95));var i=u(r(228));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}t.default=e;return t}function f(e){f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return f(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function d(e,t,r){t&&s(e.prototype,t);r&&s(e,r);return e}function p(e,t){if(t&&("object"===f(t)||"function"===typeof t))return t;return y(e)}function v(e){v=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return v(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});t&&m(e,t)}function m(e,t){m=Object.setPrototypeOf||function e(t,r){t.__proto__=r;return t};return m(e,t)}var O=n.default.createContext(null);var h={sheet:function e(){return i.default.setNavigationMode("sheet")},bookmark:function e(){return i.default.setNavigationMode("bookmark")},story:function e(){return i.default.setNavigationMode("story")}};var w=function e(t){return i.default.setViewMode(t?0:1)};var g=function e(){return a.default.publish("/ao/create-item")};var j=function(e){b(t,e);function t(e){var r;c(this,t);r=p(this,v(t).call(this,e));r.state={navigation:i.default.navigationMode,viewMode:0===i.default.viewMode?"grid":"list",canCreate:{sheet:null,story:null},actions:{changeView:h,showGrid:w,createItem:g}};r.setView=r.setView.bind(y(r));r.setGridOrListView=r.setGridOrListView.bind(y(r));r.setCanCreate=r.setCanCreate.bind(y(r));r.getCanCreate=r.getCanCreate.bind(y(r));return r}d(t,[{key:"componentDidMount",value:function e(){var t=this.state.navigation;this.setCanCreate(this.getCanCreate(t));i.default.NavigationModeChanged.bind(this.setView);i.default.ViewModeChanged.bind(this.setGridOrListView)}},{key:"componentDidUpdate",value:function e(t,r){var n=r.navigation;var o=this.state.navigation;n!==o&&this.setCanCreate(this.getCanCreate(o))}},{key:"componentWillUnmount",value:function e(){i.default.NavigationModeChanged.unbind(this.setView);i.default.ViewModeChanged.unbind(this.setGridOrListView);this.state.actions=null}},{key:"getCanCreate",value:function e(t){var r=this.state.canCreate;var n=Object.assign({},r);if("bookmark"!==t){var o=this.props.appLayout;var a="create".concat(t[0].toUpperCase()).concat(t.substring(1));var i=!!o.permissions[a];n[t]=i}return n}},{key:"setCanCreate",value:function e(t){this.setState({canCreate:t})}},{key:"setView",value:function e(t){this.setState({navigation:t})}},{key:"setGridOrListView",value:function e(t){this.setState({viewMode:0===t?"grid":"list"})}},{key:"render",value:function e(){var t=this.props.children;return n.default.createElement(O.Provider,{value:this.state},t)}}]);return t}(n.PureComponent);t.AppOverviewProvider=j;j.propTypes={children:o.default.oneOfType([o.default.array.isRequired,o.default.element.isRequired]).isRequired,appLayout:o.default.object.isRequired};var _=O.Consumer;t.default=_},1765:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var n=f(r(98));var o=l(r(116));var a=r(171);var i=l(r(91));var u=l(r(1328));r(2227);function l(e){return e&&e.__esModule?e:{default:e}}function f(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}t.default=e;return t}function c(){c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};return c.apply(this,arguments)}function s(e,t){if(null==e)return{};var r=d(e,t);var n,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++){n=a[o];if(t.indexOf(n)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,n))continue;r[n]=e[n]}}return r}function d(e,t){if(null==e)return{};var r={};var n=Object.keys(e);var o,a;for(a=0;a<n.length;a++){o=n[a];if(t.indexOf(o)>=0)continue;r[o]=e[o]}return r}var p=function e(){return{sheet:{t:i.default.get("Common.Sheets"),i:"sheet"},bookmark:{t:i.default.get("Common.Bookmarks"),i:"bookmark"},story:{t:i.default.get("Common.Stories"),i:"slide-show"}}};var v="qs-ao-nav__button";var y=function e(t){var r=t&&["".concat(v,"--active")]||[];return[v].concat(r).join(" ")};var b=(0,n.memo)(function(e){var t=e.view,r=e.name,o=e.mobile,i=s(e,["view","name","mobile"]);var u=p()[r];return n.default.createElement(a.FadeButton,c({className:y(t===r),title:u.t,tid:"nav-".concat(r),variant:o?"inverse":null},i),n.default.createElement(a.Icon,{name:u.i}),!o&&n.default.createElement(a.FadeButton.Text,null,u.t))});b.propTypes={name:o.default.string.isRequired,view:o.default.string.isRequired,mobile:o.default.bool.isRequired};var m=function e(t){var r=t.mobile;return n.default.createElement(u.default,null,function(e){var t=e.navigation,o=e.actions.changeView;return n.default.createElement(n.Fragment,null,n.default.createElement(b,{mobile:r,name:"sheet",view:t,onClick:o.sheet}),n.default.createElement(b,{mobile:r,name:"bookmark",view:t,onClick:o.bookmark}),n.default.createElement(b,{mobile:r,name:"story",view:t,onClick:o.story}))})};m.propTypes={mobile:o.default.bool};m.defaultProps={mobile:false};var O=(0,n.memo)(m);t.default=O;e.exports=t.default},2225:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var n=d(r(98));var o=s(r(116));var a=s(r(11));var i=s(r(1716));var u=s(r(1043));var l=r(1328);var f=s(r(2226));var c=s(r(2231));r(1222);function s(e){return e&&e.__esModule?e:{default:e}}function d(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}t.default=e;return t}function p(e){p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return p(e)}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function b(e,t,r){t&&y(e.prototype,t);r&&y(e,r);return e}function m(e,t){if(t&&("object"===p(t)||"function"===typeof t))return t;return O(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){h=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return h(e)}function w(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});t&&g(e,t)}function g(e,t){g=Object.setPrototypeOf||function e(t,r){t.__proto__=r;return t};return g(e,t)}var j=function(e){w(t,e);function t(){v(this,t);return m(this,h(t).apply(this,arguments))}b(t,[{key:"componentDidMount",value:function e(){this.component=(0,a.default)(this.elem).showComponent(i.default)}},{key:"componentWillUnmount",value:function e(){if(this.component)try{this.component.destroy()}catch(e){console.error(e)}}},{key:"render",value:function e(){var t=this;var r=this.props.appLayout;return n.default.createElement(n.Fragment,null,n.default.createElement(l.AppOverviewProvider,{appLayout:r},n.default.createElement(u.default,null,function(e){return e?n.default.createElement(c.default,null):n.default.createElement(f.default,null)})),n.default.createElement("div",{id:"qv-appview-container",ref:function e(r){t.elem=r}}))}}]);return t}(n.PureComponent);j.propTypes={appLayout:o.default.object.isRequired};var _=j;t.default=_;e.exports=t.default},2226:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var n=l(r(98));var o=u(r(1328));var a=u(r(1765));var i=u(r(2228));r(2230);function u(e){return e&&e.__esModule?e:{default:e}}function l(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}t.default=e;return t}var f=function e(t){if("bookmark"!==t)return n.default.createElement("div",{className:"qs-ao-toolbar-right"},n.default.createElement(i.default,null));return null};var c=function e(){return n.default.createElement("div",{className:"qs-ao-toolbar"},n.default.createElement(o.default,null,function(e){var t=e.navigation;return n.default.createElement(n.Fragment,null,n.default.createElement("div",{className:"qs-ao-toolbar-left"},n.default.createElement(a.default,null)),f(t))}))};var s=(0,n.memo)(c);t.default=s;e.exports=t.default},2227:function(e,t,r){},2228:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var n=f(r(98));var o=l(r(116));var a=r(171);var i=l(r(1328));var u=l(r(91));r(2229);function l(e){return e&&e.__esModule?e:{default:e}}function f(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}t.default=e;return t}function c(e){c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return c(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function p(e,t,r){t&&d(e.prototype,t);r&&d(e,r);return e}function v(e,t){if(t&&("object"===c(t)||"function"===typeof t))return t;return y(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){b=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return b(e)}function m(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});t&&O(e,t)}function O(e,t){O=Object.setPrototypeOf||function e(t,r){t.__proto__=r;return t};return O(e,t)}var h="AppOverview.Toolbar.CreateNew";var w=function e(t){return"".concat(h,"sheet"===t?"Sheet":"Story")};var g=function(e){m(t,e);function t(e){var r;s(this,t);r=v(this,b(t).call(this,e));var n=e.showGrid;r.grid=function(){return n(true)};r.list=function(){return n(false)};return r}p(t,[{key:"render",value:function e(){var t=this.props.viewMode;return n.default.createElement(a.ButtonGroup,{className:"qs-ao-toolbar-right__group"},n.default.createElement(a.ButtonGroup.Button,{active:"grid"===t,title:u.default.get("Tooltip.Grid"),"data-tid":"ao-viewmode-grid",onClick:this.grid},n.default.createElement(a.Icon,{name:"grid"})),n.default.createElement(a.ButtonGroup.Button,{active:"list"===t,title:u.default.get("Tooltip.List"),"data-tid":"ao-viewmode-list",onClick:this.list},n.default.createElement(a.Icon,{name:"list"})))}}]);return t}(n.PureComponent);g.propTypes={showGrid:o.default.func.isRequired,viewMode:o.default.string.isRequired};var j=function e(){return n.default.createElement(i.default,null,function(e){var t=e.navigation,r=e.canCreate,o=e.viewMode,i=e.actions,l=i.showGrid,f=i.createItem;var c=true===r[t];var s=u.default.get(w(t));return n.default.createElement(n.Fragment,null,c&&n.default.createElement(a.Button,{"qva-outside-ignore-for":"expandable",tid:"tlb-add",title:s,onClick:f},s),n.default.createElement(g,{viewMode:o,showGrid:l}))})};t.default=j;e.exports=t.default},2229:function(e,t,r){},2230:function(e,t,r){},2231:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var n=i(r(98));var o=a(r(1765));r(2232);function a(e){return e&&e.__esModule?e:{default:e}}function i(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}t.default=e;return t}var u=function e(){return n.default.createElement("div",{className:"qs-ao-toolbar-s"},n.default.createElement(o.default,{mobile:true}))};var l=(0,n.memo)(u);t.default=l;e.exports=t.default},2232:function(e,t,r){}}]);