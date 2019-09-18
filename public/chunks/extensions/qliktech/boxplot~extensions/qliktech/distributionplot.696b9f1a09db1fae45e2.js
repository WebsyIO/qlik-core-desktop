/*!
 * sense-client@6.105.4
 * 
 * Copyright(C) 2019 Qlik International AB
 * All Rights Reserved
 * 
 */
(window["qJsonp"]=window["qJsonp"]||[]).push([[17],{1045:function(e,t,r){"use strict";var n,i;!(n=[r(90),r(94),r(89),r(1121),r(1122),r(1046),r(1123)],i=function(e,t,r,n,i,o,s){function a(){this._generationInProgress=false}a.prototype.isDerivedUpToDate=u;a.prototype.updateDerivedProperties=c;a.prototype.addDefaultHyperCubeHash=l;return a;function u(e){s.validate(e);var t=e.properties,r=n.generateHash(e.hashData);if(!t.qUndoExclude||t.qUndoExclude.hashCode!==r)return false;return true}function c(i){s.validate(i);if(this._generationInProgress)return r.resolve(true);if(u(i)){var a=i.layout.qUndoExclude&&i.layout.qUndoExclude.hashCode===i.properties.qUndoExclude.hashCode;return r.resolve(!a)}var c=this,l=i.model,p=i.layout,d=i.properties,f=e.extend(true,{},d);this._generationInProgress=true;n.updateHash(d,i.hashData);return i.generateDerivedProperties(p,d).then(function(){return o.saveDerivedProperties(l,p,d,f,t).then(function(){c._generationInProgress=false;return r.resolve(true)})})}function l(t,r,n,o){return i.getDefaultHashDataForHyperCube(t,r,n).then(function(t){return e.extend(true,o,t)})}}.apply(t,n),void 0!==i&&(e.exports=i))},1046:function(e,t,r){"use strict";var n,i;!(n=[r(376),r(982)],i=function(e,t){return{saveDerivedProperties:r};function r(r,n,i,o,s){if(t.canModifyHardProperties(s,r,n))return r.setProperties(i);var a=new e(r);return a.saveSoftProperties(o,i)}}.apply(t,n),void 0!==i&&(e.exports=i))},1051:function(e,t,r){"use strict";var n,i;!(n=[r(299)],i=function(e){var t;function r(e,t,r){var n,i,o,s=[];for(i=0;i<t.length;i++)for(n=0;n<e.length;n++){o={qType:r,qCol:t[i],qRow:e[n]};s.push(o)}return s}t=e.extend("StackedApi",{init:function e(){this._super.apply(this,arguments);this.backendStackThrottle.setMethodName("getHyperCubeStackData")},updateCache:function e(t){if(t&&t.qHyperCube&&"S"===t.qHyperCube.qMode){this.cacheCube.set(t.qHyperCube.qDataPages);this.cacheCube.setCubeSize(t.qHyperCube.qSize)}else this.cacheCube.clear();this.backendStackThrottle.clear()},getData:function e(t,r,n){var i=n||this.model.layout.qHyperCube;switch(i.qMode){case"P":return this.model.getHyperCubePivotData(this.path,t);case"S":return this._super(t,r);case"K":return r?this._super(t,r):this.backendStackThrottle.getData(t);default:return this._super(t,r)}},getReducedData:function e(t,r,n){n=void 0!==n?n:"D1";return this.model.getHyperCubeReducedData(this.path,t,r,n)},select:function e(t,n,i){switch(this.model.layout.qHyperCube.qMode){case"P":case"K":return this.model.selectPivotCells(this.path,r(t,n,i));default:return this.model.selectHyperCubeCells(this.path,t,n)}}});return t}.apply(t,n),void 0!==i&&(e.exports=i))},1121:function(e,t,r){"use strict";var n,i;!(n=[r(90)],i=function(e){var t={generateHash:r,updateHash:n};return t;function r(t){return e.hashFromString(JSON.stringify(t))}function n(e,r){e.qUndoExclude||(e.qUndoExclude={});e.qUndoExclude.hashCode=t.generateHash(r)}}.apply(t,n),void 0!==i&&(e.exports=i))},1122:function(e,t,r){"use strict";var n,i;!(n=[r(90),r(89)],i=function(e,t){var r={getDefaultHashDataForHyperCube:n};return r;function n(e,t,r){return i(e,r).then(function(e){return{drillLevel:a(t),dimensionExpressions:s(t),measureExpressions:e}})}function i(e,r){var n=[];if(!e.qMeasures)return t.resolve(n);e.qMeasures.forEach(function(e){e.qLibraryId?n.push(o(e.qLibraryId,r)):n.push(t.resolve())});return t.all(n)}function o(e,t){return t.getMeasure(e).then(function(e){return e.getProperties().then(function(e){return e.qMeasure.qDef})})}function s(e){return e.qDimensionInfo.map(function(e){return e.qGroupFieldDefs})}function a(e){var t=u(e);return t.map(function(e){return e.qGroupPos})}function u(t){return e.getValue(t,"qDimensionInfo",[])}}.apply(t,n),void 0!==i&&(e.exports=i))},1123:function(e,t,r){"use strict";var n,i;!(n=[],i=function(){return{validate:e};function e(e){if(!e||!e.layout||!e.properties||!e.model||!e.hashData||!e.generateDerivedProperties)throw Error("Derived-properties: Missing input")}}.apply(t,n),void 0!==i&&(e.exports=i))},1174:function(e,t,r){"use strict";var n,i;!(n=[r(91),r(96)],i=function(e,t){var r=-2;var n=-3;var i=200;var o=50;return{getLegendData:d,getCategoricalLegendPanGesture:f,onMouseWheel:h};function s(e){return e.label?e.label:e.min&&e.max?e.min+" - "+(e.isMax?"":"<")+e.max:e.max?"<"+e.max:">"+e.min}function a(t){var s=t.colorItems;var a=t.selectionSettings;var u=t.colorMap;var c=t.colorDataInfo;var l=u.getLegendDataProvider()?u.getLegendDataProvider().getLegendMarker():"rect";var p=s.map(function(e){return Array.isArray(e.id)?e.id[0]:e.id});var d=s.map(function(e){return e.color.toRGBA()});var f=function e(t){return u.getColorFromPreScaledValue(t.qElemNo)};var h=function e(t){return f(t).toHex()};var v=function e(t){var n=f(t);return t.qElemNo!==r&&!n.isInvalid()};var g={extract:{source:t.source,field:"qDimensionInfo/"+(t.dimIndex||0),props:{label:function e(t){return t.qText}}}};if(c.hasOthers){var m=e.get("properties.dimensionLimits.others");var y=u.getColorFromPreScaledValue([n],m);g.amend=[{value:n,label:{value:m},color:{value:y},source:{}}];p.push(n);d.push(y)}var S=function e(t){return t.datum.color.value};var b=function e(t){return{data:t.data,context:t.context,style:{inactive:t.style.inactive}}};var q={displayOrder:i,minimumLayoutMode:"MEDIUM",prioOrder:o,renderer:"svg",mounted:function e(t){t.children[0].style.pointerEvents="none"},scale:{type:"categorical-color",data:g,label:function e(t){return t.datum.label.value},trackBy:"id"},settings:{title:t.title,item:{shape:{type:l}}},brush:{trigger:a&&a.trigger||[],consume:(a&&a.consume||[]).map(b)}};if(c.altMode){q.scale.domain=p;q.scale.range=d}else{q.scale.data.extract.props.color=h;q.scale.data.extract.filter=v;q.settings.item.shape.fill=S}return q}function u(e){var t=e.colorItems;var r=e.colorMap;var n=r.getLegendDataProvider()?r.getLegendDataProvider().getLegendMarker():"rect";var a=t.map(s);var u=t.map(function(e){return e.color.toRGBA()});return{displayOrder:i,minimumLayoutMode:"MEDIUM",prioOrder:o,scale:{type:"categorical-color",domain:a,range:u},settings:{title:e.title,item:{shape:{type:n}}}}}function c(e){var t=e.colorItems;var r=[];var n=[];var s=t[t.length-1].id[1];var a=t[0].id[0];var u=t[t.length-1].min;var c=t[0].max;var l=(a-s)/1e6;t.forEach(function(e){r.push(e.id[0]-l);r.push(e.id[1]+l)});t.forEach(function(e){n.push(e.grad[0].toRGBA());n.push(e.grad[1].toRGBA())});return{displayOrder:i,prioOrder:o,settings:{fill:{type:"color",range:n,domain:r,min:s,max:a},major:{type:"linear",min:s,max:a},tick:{label:function e(t){return 0===t?u:c}},title:e.title}}}function l(e,t,r){var n;if(r&&"dimension"===t.colorMode){n=r.map(function(t,r){var n=t[1].qNum;var i=t[0].qText;var o=e.getColorFromPreScaledValue(n,i);return{id:t[0].qElemNumber,index:r,label:i,color:o}});n=n.filter(function(e){return!e.color.isInvalid()}).slice(0,100)}else{n=e.getColorMapping().concat();n=n.filter(function(e){return!e.color.isInvalid()})}return n}function p(e,t){return{show:t.showTitle,text:e.getLegendTitle()}}function d(e){var t=e.colorMap;var r=t.getColorDataInfo();var n=r.legendMode||{};if(!r.valid)return;var i=l(t,n,e.legendData);if(0===i.length)return;var o={colorMap:t,selectionSettings:e.selectionSettings,source:e.source,dimIndex:e.dimIndex,colorDataInfo:r,colorItems:i,title:p(t,n)};return n.discrete?{type:"categorical-legend",settings:"dimension"===n.colorMode?a(o):u(o)}:{type:"sequential-legend",settings:c(o)}}function f(e){var r;function n(t,r){if(!r)return false;var n={x:r.center.x-r.deltaX,y:r.center.y-r.deltaY};var i=this.chart.componentsFromPoint(n);return i.some(function(t){return t.settings.key===e})}function i(){if(r){clearInterval(r);r=null}}return[{type:"Pan",options:{event:"catlegendpan",threshold:1,enable:n},events:{catlegendpanstart:function t(){i();var r=this.chart.component(e);r.emit("panstart")},catlegendpanmove:function t(r){var n=this.chart.component(e);n.emit("panmove",r)},catlegendpanend:function t(){var r=this.chart.component(e);r.emit("panend")},catlegendpancancel:function t(){var r=this.chart.component(e);r.emit("panend")}}},{type:"Press",options:{enable:n},events:{press:function n(o){var s=this.chart.component(e);var a=o.target;var u=a?a.getAttribute("data-action"):"";if(u){i();r=setInterval(function(){s.emit(u)},100);t.preventGestures()}},pressup:function e(){i()}}}]}function h(e,t,r){if(!!r&&t.componentsFromPoint(e).some(function(e){return e.settings.key===r})){var n=t.component(r);n.emit(e.delta>0?"prev":"next");return true}}}.apply(t,n),void 0!==i&&(e.exports=i))},1248:function(e,t,r){"use strict";var n,i;!(n=[r(1525),r(90)],i=function(e,t){var r=[{value:"ascending",translation:"properties.sorting.ascending"},{value:"descending",translation:"properties.sorting.descending"}];function n(e,n,i){return{type:"items",items:{toggled:{type:"boolean",ref:e,translation:n,convertFunctions:i.toggled},order:{type:"string",component:"dropdown",ref:e,options:r,convertFunctions:i.sorting,show:function r(n){return 0!==t.getValue(n,e,0)}}}}}function i(t,r){t=t||"qSortByState";var i={toggled:e.booleanConvertFunctions(r),sorting:e.invertedEnumConvertFunctions(r)};return n(t,"properties.sorting.sortByState",i)}function o(t,r){t=t||"qSortByFrequency";var i={toggled:e.booleanConvertFunctions(r),sorting:e.invertedEnumConvertFunctions(r)};return n(t,"properties.sorting.sortByFrequency",i)}function s(t,r){t=t||"qSortByAscii";var i={toggled:e.booleanConvertFunctions(r),sorting:e.enumConvertFunctions(r)};return n(t,"properties.sorting.sortByAlphabetic",i)}function a(t,r){t=t||"qSortByNumeric";var i={toggled:e.booleanConvertFunctions(r,-1),sorting:e.enumConvertFunctions(r)};return n(t,"properties.sorting.sortByNumeric",i)}function u(r,i){r=r||"qSortByExpression";var o={toggled:e.booleanConvertFunctions(i),sorting:e.enumConvertFunctions(i)};var s=n(r,"properties.sorting.sortByExpression",o);s.items.expression={type:"number",component:"expression",expressionType:"ValueExpr",ref:"qExpression",translation:"Common.Expression",defaultValue:"",show:function e(n){return 0!==t.getValue(n,r,0)}};return s}return{state:i,ascii:s,numeric:a,expression:u,frequency:o}}.apply(t,n),void 0!==i&&(e.exports=i))},1250:function(e,t,r){"use strict";var n,i;!(n=[],i=function(){var e={wrapExpression:t};function t(e){var t=e.replace(/\]/g,"]]");return t?"["+t+"]":""}return e}.apply(t,n),void 0!==i&&(e.exports=i))},1310:function(e,t,r){"use strict";var n,i;!(n=[r(90),r(1530),r(232),r(164),r(96)],i=function(e,t,r,n,i){var o={data:["elemNo"],contexts:["select"],startOnEmptySelection:true,style:{active:{strokeWidth:2,stroke:"#333"},inactive:{opacity:.3}}};var s=27,a=13;function u(u){if(!u||!u.model||!u.chartInstance||!u.selectionsApi)throw Error("Selections-handler: Missing input");var l=u.model;var p=u.chartInstance;var d=u.selectionsApi;var f=u.dataPaths||[""];var h=[];var v;var g;var m={propertiesToRestore:{}};var y=false;var S=t(l,p,d);var b={};function q(e){v=e}function x(e){g=e;d.refreshToolbar()}function E(e){e===s?d.cancel():e===a&&d.confirm()}function _(){var e=f.map(function(e){return p.dataset(e).fields().filter(function(e){return"dimension"===e.type()})});e=[].concat.apply([],e);return e.length&&e.every(function(e){return e.raw().qLocked})}function C(){var e=[];var t=f.map(function(e){return p.dataset(e).fields().filter(function(e){return"dimension"===e.type()})});t=[].concat.apply([],t);for(var r=0;r<t.length;r++)t[r].raw().qLocked&&e.push(t[r].raw());return{fields:e,areAllFieldsLocked:e.length&&e.length===t.length}}function I(){return u.isLassoDisabled&&u.isLassoDisabled()}var D=d.clear.bind(d);d.clear=function(){h.forEach(function(e){e.brush.clear();e.dependentComponents.forEach(function(e){var t=p.component(e.id);t&&t.emit(e.clear)})});D()};b.setUp=function(e){b.tearDown();var t=this.setUpBrush(e);y&&A();return t};b.setUpBrush=function(t){var r=e.extend(true,{},o,t);var i={on:"tap",action:function e(){return v||t.isSingleSelect?"set":"toggle"},contexts:r.contexts,data:r.data,globalPropagation:"stop"};var s={context:r.contexts[0],data:r.data,style:r.style};var a=c(r,p);a.listeners.toggle=function(e){if(!y)return[];var t=C();if(r.startOnEmptySelection&&0===e.length&&t.areAllFieldsLocked){n.showLockedFeedback(t.fields);return[]}return S.toggleValues(e,a.brush,r.startOnEmptySelection)};a.brush.intercept("toggle-values",a.listeners.toggle);a.brush.intercept("add-values",a.listeners.toggle);a.brush.intercept("remove-values",a.listeners.toggle);a.brush.intercept("set-values",a.listeners.toggle);a.listeners.start=function(){if(h.length>1){h.forEach(function(e){e!==a&&e.brush.end()});d.selectionsMade&&l.resetMadeSelections()}};h.push(a);return{trigger:i,consume:s}};b.setUpStart=function(){b.tearDown()};b.setUpDone=function(){y&&A()};b.tearDown=function(){y&&B();h.forEach(function(e){e.brush.removeInterceptor("toggle-values",e.listeners.toggle);e.brush.removeInterceptor("add-values",e.listeners.toggle);e.brush.removeInterceptor("remove-values",e.listeners.toggle);e.brush.removeInterceptor("set-values",e.listeners.toggle)});h=[]};function A(){h.forEach(function(e){e.listeners.update=function(t,r){i.preventGestures();!e.sleep&&S.update(t,r,e.brush)};e.brush.on("update",e.listeners.update);e.brush.on("start",e.listeners.start)})}function B(){h.forEach(function(e){e.brush.removeListener("update",e.listeners.update);e.brush.removeListener("start",e.listeners.start)})}b.pauseEngineCalls=function(e){h.forEach(function(t){t.id===e&&(t.sleep=true)})};b.resumeEngineCalls=function(e,t){h.forEach(function(r){if(r.id===e){r.sleep=false;t&&r.listeners.update([],[])}})};b.addComponent=function(e,t){h.forEach(function(r){r.id===e&&r.dependentComponents.push(t)})};b.on=function(){if(y)return;y=true;A();r.CtrlToggle.bind(q);r.ShiftToggle.bind(x);m.unbindDeactivated=d.watchDeactivated(function(){h.forEach(function(e){e.brush.end()});r.KeyPressed.unbind(E);w=false});m.unbindActivated=d.watchActivated(function(){r.KeyPressed.bind(E)})};b.off=function(){if(!y)return;y=false;B();r.CtrlToggle.unbind(q);r.ShiftToggle.unbind(x);r.KeyPressed.unbind(E);m.unbindActivated();m.unbindDeactivated()};var w=false;b.lassoState=function(){return g&&!I()?!w:w};b.toggleLasso=function(){w=!w};b.allFieldsLocked=function(){return _()};return b}return{create:function e(t){return u(t)}};function c(e,t){return{brush:t.brush(e.contexts[0]),listeners:{},dependentComponents:[],id:e.contexts[0]}}}.apply(t,n),void 0!==i&&(e.exports=i))},1313:function(e,t,r){"use strict";var n,i;!(n=[r(164),r(1174)],i=function(e,t){var r=".scrollHandler";n.prototype.getScrollApi=i;n.prototype.setDisabled=o;n.prototype.getDisabled=s;n.prototype.setItemSize=a;n.prototype.getItemSize=u;n.prototype.getScrollViewSizeInItem=c;n.prototype.on=l;n.prototype.off=p;n.prototype.updateViewState=d;n.prototype.onResize=f;n.prototype.isDataSizeChanged=h;n.prototype.resetScroll=v;n.prototype.getViewData=g;n.prototype.setOptions=S;n.prototype.getScrollState=m;n.prototype.setScrollState=y;return n;function n(e,t,r,n,i,o,s){if(!e||!t||!r||!n)throw Error("Scroll-handler: Missing input");this._chartInstance=e;this._$chartElement=t;this._getSlicedDataFn=n;this._tooltipApi=i;this._on=false;this._itemSize=30;this.options={direction:"vertical"};this._onScrollCallback=o;this._legendKey=s}function i(){this._scrollApi||(this._scrollApi=this._chartInstance.scroll("dimension"));return this._scrollApi}function o(e){this._disabled=e}function s(){return this._disabled}function a(e){if(this._itemSize!==e){this._itemSize=e;b.call(this)}}function u(){return this._itemSize}function c(){this._scrollViewSizeInItem||b.call(this);return this._scrollViewSizeInItem}function l(){if(this._on)return;if(this.getScrollApi()){this._scrollApi.removeAllListeners();this._scrollApi.on("update",x.bind(this))}this._$chartElement.on("mousewheel"+r+" DOMMouseScroll"+r,q.bind(this));this._$chartElement.on("touchstart"+r,function(e){e.preventDefault()});this._on=true}function p(){if(!this._on)return;this.getScrollApi()&&this._scrollApi.removeAllListeners();this._$chartElement.off(r);this._on=false}function d(e){b.call(this);this.getScrollApi()&&this._scrollApi.update({viewSize:this._scrollViewSizeInItem,max:e})}function f(){this._sizeChanged=true;b.call(this);this.getScrollApi()&&this._scrollApi.update({viewSize:this._scrollViewSizeInItem})}function h(e,t){return Math.min(this.getScrollViewSizeInItem(),t)!==e}function v(){this.getScrollApi()&&this._scrollApi.moveTo(0)}function g(){var e=0,t=0;if(this.getScrollApi()){var r=this._scrollApi.getState();e=Math.round(r.start);t=r.viewSize}return this._getSlicedDataFn(e,t)}function m(){return this.getScrollApi().getState().start}function y(e){this.getScrollApi().moveTo(e)}function S(e){this.options.direction!==e.direction&&(this._scrollViewSizeInItem=void 0);this.options=e}function b(){var e=("horizontal"===this.options.direction?this._$chartElement.width():this._$chartElement.height())||0;var t=Math.floor(e/this.getItemSize());this._scrollViewSizeInItem=Math.max(t,1)}function q(r){var n=e.getMouseWheelData(r.originalEvent);if(t.onMouseWheel(n,this._chartInstance,this._legendKey)||this._disabled||!this.getScrollApi())return;r.preventDefault();if(!n.delta)return;var i=3;var o=n.delta<0?i:-i;this._scrollApi.move(o)}function x(){if(this._disabled||this._sizeChanged){this._sizeChanged=false;return}this._tooltipApi&&this._tooltipApi.cancel();var e=this;this.getViewData().then(function(t){e._on&&!e._disabled&&e._onScrollCallback&&e._onScrollCallback(t,void 0,true)}).catch(function(e){false})}}.apply(t,n),void 0!==i&&(e.exports=i))},1525:function(e,t,r){"use strict";var n,i;!(n=[],i=function(){function e(e,t){e=e||function(){return false};t=t||1;return{get:function e(t){return!!t("integer")},set:function r(n,i){if(n){var o=e();var s=o?-1:1;s*=t;i("integer",s)}else i("integer",0)}}}function t(e){e=e||function(){return false};return{get:function t(r){var n=e()?-1:1;var i=r("integer")*n;switch(i){case-1:return"descending";case 1:return"ascending";default:return"disabled"}},set:function t(r,n){var i=e();switch(r){case"descending":n("integer",i?1:-1);break;case"ascending":n("integer",i?-1:1);break;case"disabled":n("integer",0);break;default:n("integer",void 0);break}}}}function r(e){var r=function t(){return!e||!e()};return t(r)}return{booleanConvertFunctions:e,enumConvertFunctions:t,invertedEnumConvertFunctions:r}}.apply(t,n),void 0!==i&&(e.exports=i))},1530:function(e,t,r){"use strict";var n,i;!(n=[r(1531),r(1125),r(164)],i=function(e,t,r){function n(n,i,o){function s(){}function a(e,r,i){var s=t.qBrushHelper(i);if(s.length){if("resetMadeSelections"===s[0].method){n[s[0].method].apply(n).catch(function(e){console.warn("err",e)});return}o.activate();o.selectionsMade=true}s.forEach(function(e){n[e.method].apply(n,e.params).then(function(e){e||n.resetMadeSelections()}).catch(function(e){console.warn("err",e)})})}function u(t,n,s){var a=e.brushInterceptors.filterValues(i,t);var u=a.items;a.itemsAreLocked&&r.showLockedFeedback(a.lockedFields);if(!o.active&&!a.itemsAreLocked&&(s||u.length>0)){o.activate();n.start();n.emit("update",[],[])}return u}s.update=a;s.toggleValues=u;return s}return n}.apply(t,n),void 0!==i&&(e.exports=i))},1531:function(e,t,r){"use strict";var n,i;!(n=[],i=function(){var e={brushInterceptors:{DIM_VALUE_NULL:-2,DIM_VALUE_TOTAL:-3,brushOnlyOne:t,filterValues:n}};return e;function t(e,t){var r=e.brushes().filter(function(e){return"value"===e.type});var n=[];r.length&&r.forEach(function(e){n=n.concat(e.brush.values().map(function(t){return{key:e.id,value:t}}))});return n.concat(t)}function r(e,t){var r=t.key.indexOf("qHyperCube")+"qHyperCube".length;var n=t.key.substr(0,r);var i=t.key.substr(r+1);return e.dataset(n).field(i)}function n(e,t){var n=this,i,o,s=[],a=0,u=[];t.forEach(function(t){if(t.value===n.DIM_VALUE_NULL||t.value===n.DIM_VALUE_TOTAL)return;o=r(e,t);i=o&&o.raw();if(i.qLocked){s.push(i);a++}else u.push({key:t.key,value:t.value})});return{items:u,itemsAreLocked:a>0&&a===t.length,lockedFields:s}}}.apply(t,n),void 0!==i&&(e.exports=i))},1743:function(e,t,r){"use strict";var n,i;!(n=[],i=function(){var e={ASCII:{ELEMENT:void 0,SORT_BY_EXPRESSION:void 0,SORT_BY_ASCII:1,SORT_BY_NUMERIC:1,SORT_BY_LOAD_ORDER:1}};Object.freeze(e.ASCII);Object.freeze(e);return e}.apply(t,n),void 0!==i&&(e.exports=i))},1745:function(e,t,r){"use strict";var n,i;!(n=[r(2092)],i=function(e){var t={create:r};return t;function r(t,r){return new e(t,r)}}.apply(t,n),void 0!==i&&(e.exports=i))},1746:function(e,t,r){"use strict";var n,i;!(n=[],i=function(){var e={applySorting:t};return e;function t(e,t,r){var n=r.autoSort,i=!!r.sortCriteria;n?e.applyAutoSorting(t):i?e.applyCustomSorting(t,r):e.applyDefaultCustomSorting(t,r)}}.apply(t,n),void 0!==i&&(e.exports=i))},1748:function(e,t,r){"use strict";var n,i;!(n=[r(90)],i=function(e){var t={buildDefinition:r};return t;function r(t,r,o,s,a){var u=o+".qDef.qSortCriterias.0.";var c={type:"items",translation:"properties.sorting",icon:"ascending",show:function r(n){return e.getValue(n,t+".qDimensions.length",0)>1},items:{sortingOptions:{component:"radio-list",type:"number",diffs:[u+"qSortByExpression",u+"qSortByNumeric",u+"qSortByAscii"],options:[{value:1,translation:"properties.sorting.ascending"},{value:-1,translation:"properties.sorting.descending"}],setPropertyValue:function t(o,c,l){var p=l.layout,d=n(o,u).chart;d||(d="sortByAscii");var f=e.getValue(o,r);f.sortCriteria||(f.sortCriteria={});if(f.autoSort){var h=s(p);if(h.ELEMENT)f.elementId=h.ELEMENT;else{var v=a(o,p);f.elementId=v[0]}}f.autoSort=false;i(f,d);f.sortCriteria[d]=c},getValue:function t(r){var i=n(r,u).dimension;if(!i)return 0;return e.getValue(r,u+i)}}}};return c}function n(t,r){var n={chart:"",dimension:""};if(0!==e.getValue(t,r+"qSortByExpression",0)){n.chart="sortByExpression";n.dimension="qSortByExpression"}else if(0!==e.getValue(t,r+"qSortByNumeric",0)){n.chart="sortByNumeric";n.dimension="qSortByNumeric"}else if(0!==e.getValue(t,r+"qSortByAscii",0)){n.chart="sortByAscii";n.dimension="qSortByAscii"}return n}function i(e,t){var r=e.sortCriteria;"sortByNumeric"!==t&&"sortByAscii"!==t||(r.sortByExpression=0);"sortByAscii"===t&&(r.sortByNumeric=0)}}.apply(t,n),void 0!==i&&(e.exports=i))},2092:function(e,t,r){"use strict";var n,i;!(n=[r(90)],i=function(e){function t(e,t){this.getSettings=e;this.getElements=t}t.prototype.applyAutoSorting=r;t.prototype.applyDefaultCustomSorting=n;t.prototype.applyCustomSorting=i;return t;function r(t){var r=t.qDef.qSortCriterias;r[0]||r.push({});var n=r[0],i=this.getSettings();e.setValue(n,"qSortByExpression",i.SORT_BY_EXPRESSION);e.setValue(n,"qSortByAscii",i.SORT_BY_ASCII);e.setValue(n,"qSortByNumeric",i.SORT_BY_NUMERIC);e.setValue(n,"qSortByLoadOrder",i.SORT_BY_LOAD_ORDER);n.qExpression||(n.qExpression={});var s=this.getElements(),a=o(s);n.qExpression.qv=a.exp}function n(t,n){r.call(this,t);var i=this.getElements(),s=o(i),a=t.qDef.qSortCriterias[0];n.elementId=s.id;n.sortCriteria={};e.setValue(n.sortCriteria,"sortByExpression",a.qSortByExpression);e.setValue(n.sortCriteria,"sortByAscii",a.qSortByAscii);e.setValue(n.sortCriteria,"sortByNumeric",a.qSortByNumeric);e.setValue(n.sortCriteria,"sortByLoadOrder",a.qSortByLoadOrder)}function i(t,r){var n=t.qDef.qSortCriterias[0];e.setValue(n,"qSortByExpression",r.sortCriteria.sortByExpression);e.setValue(n,"qSortByAscii",r.sortCriteria.sortByAscii);e.setValue(n,"qSortByNumeric",r.sortCriteria.sortByNumeric);e.setValue(n,"qSortByLoadOrder",r.sortCriteria.sortByLoadOrder);if(1!==n.qSortByExpression&&-1!==n.qSortByExpression)return;n.qExpression||(n.qExpression={});if(r.elementId){var i=this.getElements(),o=s(i,r.elementId);n.qExpression.qv=o.exp}else n.qExpression.qv=r.expression.qValueExpression.qExpr}function o(e){var t=e.filter(function(e){return e.isDefault});return 0===t.length?e[0]:t[0]}function s(e,t){var r=e.filter(function(e){return e.id===t});0===r.length&&a("Could not find any element matching the element '"+t+"'");return r[0]}function a(e){throw new Error("Sorter: "+e)}}.apply(t,n),void 0!==i&&(e.exports=i))},376:function(e,t,r){"use strict";var n,i;!(n=[r(92),r(90),r(188),r(89)],i=function(e,t,r,n){var i;i=e.extend({init:function e(t){this._model=t},setModel:function e(t){this._model=t},saveSoftProperties:function e(i,o){if(!this._model)return n.resolve(false);var s=r.generate(i,o);t.extend(true,i,o);if(s&&s.length){s=s.map(function(e){return{qOp:e.op,qValue:JSON.stringify(e.value),qPath:e.path}});return this._model.applyPatches(s,true).then(function(){return true})}return n.resolve(false)},mergeSoftPatches:function e(){if(!this._model)return n.resolve();var t=this;return n.all({properties:this._model.getProperties(),effective:this._model.getEffectiveProperties()}).then(function(e){if(e.properties.qExtendsId)return;var n=r.generate(e.properties,e.effective);r.apply(e.properties,n);t._model.setProperties(e.properties).then(function(){t._model.clearSoftPatches()})})}});return i}.apply(t,n),void 0!==i&&(e.exports=i))},982:function(e,t,r){"use strict";var n,i;!(n=[],i=function(){return{canModifyHardProperties:e};function e(e,t,r){var n=e.Views&&e.Views.sheet;if(r.qHasSoftPatches||r.qExtendsId)return false;if(r.qInfo&&"masterobject"===r.qInfo.qType&&r.permissions)return r.permissions.update;if(e.view===n)return e.model&&e.model.layout.permissions.update;return t.app&&t.app.layout.permissions.update}}.apply(t,n),void 0!==i&&(e.exports=i))}}]);