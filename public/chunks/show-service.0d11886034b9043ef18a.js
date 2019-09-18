/*!
 * sense-client@6.105.4
 * 
 * Copyright(C) 2019 Qlik International AB
 * All Rights Reserved
 * 
 */
(window["qJsonp"]=window["qJsonp"]||[]).push([[69],{118:function(e,t,r){"use strict";var n,i;!(n=[r(11)],i=function(){var e=1;var t=256;var r=166/26;var n=12;var i=11;var o=12;var a=o/i;function s(r){var n=/^[^\\/:*?"<>|\x00-\x1f]+$/;return"undefined"!==typeof r&&!f(r,"_")&&!f(r,"$$")&&n.test(r)&&r.length>=e&&r.length<=t}function u(e){return!/[\\*?"()<>|' &$£¤^/+-]+/.test(e)}function l(e){return/^(ftp|http|https):\/\/[^ "]+$/.test(e.toLowerCase())}function c(e){if(/^.*:\/\//.test(e))return e;return"http://"+e}function f(e,t){return 0===e.indexOf(t)}function h(e,t){return-1!==e.indexOf(t,e.length-t.length)}function v(e,t){t||(t="");return e.length>0?e.reduce(function(e,r){return e+t+r}):""}function d(e){var t=e.replace(/.*\[|\]/gi,""),r=t.match(/"[^=]*"|[^;]+/g);return r}function p(e,t){var r=d(e),n;if(r)for(n=0;n<r.length;n++)if(-1!==r[n].toLowerCase().indexOf(t.toLowerCase()))return r[n].split("=")[1];return""}function g(e,t){function r(){return(e+"\\"+t).replace("\\\\","\\")}function n(){if("\\\\"===e.substring(0,2))return"\\"+r()}return n()||r()}function m(e){var t=d(e),r=[],n;t&&t.forEach(function(e){n=e.split("=");n&&r.push({key:n[0],value:n.length>1?n[1]:""})});return r}function y(e){"\\"===e.charAt(0)&&(e=e.substring(1));"\\"===e.charAt(e.length-1)&&(e=e.slice(0,-1));return e}function w(e){"\\"!==e.charAt(e.length-1)&&(e+="\\");return e}function b(e){var t;if("\\\\"===e.substring(0,2)){t=y(e.substring(2)).split("\\");t.pop();return"\\\\"+v(t,"\\")}t=y(e).split("\\");t.pop();return 1===t.length?t[0]+"\\":v(t,"\\")}function x(e){return e.replace(/[0-9]+/g,function(e){var t=e.length,r=""+t,n="000",i=n.substring(0,n.length-r.length)+r;return i+""+e})}function k(e,t,r){e.sort(function(e,n){return S(e[t],n[t],r)})}function S(e,t,r){var n=x(e).toLowerCase(),i=x(t).toLowerCase();return n.localeCompare(i,r)}function E(e,t){if(!e)throw new Error("Haystack is undefined.");if(!t)throw new Error("Needle is undefined.");return-1!==e.indexOf(t)}function T(e,t,r){e+="";t+="";if(!t)return 0;var n=t.match(/^\/(.*)\/([a-z]*)$/);if(!n){if(!r){e=e.toLowerCase();t=t.toLowerCase()}var i=0,o=0;var a=t.length;var s=false;while(!s){o=e.indexOf(t,o);if(o>=0){i++;o+=a}else s=true}return i}try{var u=new RegExp(n[1],-1===n[2].indexOf("i")?"":"i");return e.split(u).length-1}catch(e){return 0}}function C(e){return e.substring(e.lastIndexOf("\\")+1,e.length)}function N(e){return e.substring(0,e.lastIndexOf("\\")+1)}function L(e){var t=e.match(/.*\\(.*)\\.*$/);t||(t=e.match(/^(.*)\\.*$/));return t?t[1]:null}function O(e){return!(!e||"false"===e)}function $(e){var t=3;return(Math.min(e,t)*n+Math.max(e-t,0)*r)/i}function A(e){if(!e)return{latin:0,cjk:0};var t=e.match(/[\u4E00-\u9FFF]/g);var r=e.match(/[\u3040-\u309F]/g);var n=e.match(/[\u30A0-\u30FF]/g);t=t?t.length:0;r=r?r.length:0;n=n?n.length:0;var i=t+r+n;return{latin:e.length-i,cjk:i}}function F(e,t){var r={latin:0,cjk:0};void 0===t?e.forEach(function(e){var t=A(e.qText);r.latin+=t.latin;r.cjk+=t.cjk}):e.forEach(function(e){var n=A(e[t].qText);r.latin+=n.latin;r.cjk+=n.cjk});var n=Math.max(1,r.latin+r.cjk);r.latinRatio=r.latin/n;r.cjkRatio=r.cjk/n;return r}function M(e,t,r){var n=F(t,r);var i=n.latinRatio*e;var o=n.cjkRatio*e;var s=Math.ceil($(i)+o*a);return s}function j(e,t,r){var n=e<=24?t:r;return e*n}function q(e,t,r,n,i){return e*r+j(t,n,i)}return{MIN_CONNECTION_NAME_LENGTH:e,MAX_CONNECTION_NAME_LENGTH:t,isValidConnectionName:s,isValidFieldName:u,isValidUrl:l,prefixHttpToUrl:c,endsWith:h,startsWith:f,goUpOneFolderLevel:b,removeSurroundingSlashes:y,arrayToString:v,formatDirectoryPathForEngine:w,sortSlightlyMoreNaturallyArray:k,sortSlightlyMoreNaturallySingle:S,_expandNumbersForNaturalSorting:x,getValueFromConnectionString:p,tokenizeConnectionString:m,contains:E,occurrencesRE:T,combinePath:g,fileNameFromPath:C,fileDirectoryFromPath:N,lastFolderFromPath:L,bool:O,stringWidthOverMWidth:$,getCharacterRatios:A,getTotalCharacterRatios:F,getAdjustedMaxGlyphCount:M,estimateLatinLabelWidth:j,estimateLabelWidth:q}}.apply(t,n),void 0!==i&&(e.exports=i))},197:function(e,t,r){"use strict";var n,i;!(n=[r(54),r(118)],i=function(e,t){var r="localstorageservice";function n(t){if(!e.isString(t))throw new Error('The key "'+t+'" is not a String.');return r+"."+t}function i(t,r,i){var o=(new Date).getTime(),a,s;if(!e.isString(t))throw new Error('The key "'+t+'" is not a String.');if(!e.isObject(r))throw new Error('The value "'+r+'" for the key "'+t+'" is not valid object.');if(i){if(!e.isNumber(i))throw new Error('The time to live value "'+i+'" is not numeric.');i+=o}s={timeToLive:i,value:r};a=JSON.stringify(s);localStorage[n(t)]=a}function o(t){if(!e.isString(t))throw new Error('The key "'+t+'" is not a String.');var r=e.isEmpty(localStorage[n(t)]);return!r}function a(t,r){if(!e.isString(t))throw new Error('The key "'+t+'" is not a String.');if(!o(t)){if(void 0!==r)return r;throw new Error('There is no data set for the key "'+t+'". Please use contains() first to verify you should actually do a get().')}var n=s(t);return n.value}function s(e){var t=JSON.parse(localStorage[n(e)]);return t}function u(t){if(!e.isString(t))throw new Error('The key "'+t+'" is not a String.');if(!o(t))throw new Error('There is no data set for the key "'+t+'". Please use contains() first to verify you should actually do a get().');delete localStorage[n(t)]}function l(){var n,i,o;for(n in localStorage)if(t.startsWith(n,r)){n=n.substring(r.length+1);i=s(n);o=(new Date).getTime();e.isNumber(i.timeToLive&&o>i.timeToLive)&&u(n)}}return{set:i,get:a,contains:o,clean:l,remove:u}}.apply(t,n),void 0!==i&&(e.exports=i))},308:function(e,t,r){"use strict";var n,i;!(n=[r(197)],i=function(e){var t=e.get("deviceType",{value:"auto"}).value;return{deviceType:t}}.apply(t,n),void 0!==i&&(e.exports=i))},51:function(e,t,r){"use strict";var n,i;!(n=[r(11),r(119),r(89)],i=function(e,t,r){var n=[],i;t.componentDirective("qvShowServiceView",{destroyComponent:"&",input:"=",deferredResult:"=",exposedApi:"="});var o={template:"<div><div ng-repeat='view in views' qv-show-service-view component='view.component' data-input='view.input' data-deferred-result='view.deferredResult' destroy-component='unshow(view)' data-exposed-api='view.exposedApi'></div></div>",controller:["$scope",function(e){e.unshow=function(t){var r=e.views.indexOf(t);r>=0&&e.views.splice(r,1)}}]};function a(){if(!i){var t=e("<div id='show-service-popup-dialog'></div>");e("body").append(t);t.showComponent(o,{views:n});i=true}}function s(e,t){a();var i=new r;var o={component:e,input:t,keepOpen:t.input&&t.input.keepOpen,deferredResult:i,exposedApi:{destroy:s,resultPromise:i.promise}};n.push(o);function s(){var e=n.indexOf(o);e>=0&&n.splice(e,1)}return o.exposedApi}function u(r,n){var i={$element:e("body"),input:n};for(var o in n)n.hasOwnProperty(o)&&(i[o]=n[o]);return t.$injector.invoke(r,{},i)}var l=null;function c(e){l=e}function f(e,t){if(l)return l(e,t);return"function"===typeof e||Array.isArray(e)?u(e,t):s(e,t)}function h(){return n.length>0}function v(){n.forEach(function(e){e.keepOpen||e.exposedApi.destroy()})}return{show:f,isViewShowing:h,closeAll:v,setShowFn:c}}.apply(t,n),void 0!==i&&(e.exports=i))},57:function(e,t,r){var n=r(10);(function(e,t){"use strict";var r=t.$$minErr("$sanitize");var n;var i;var o;var a;var s;var u;var l;var c;var f;var h;function v(){var v=false;var d=false;this.$get=["$$sanitizeUri",function(e){v=true;d&&i(T,S);return function(t){var r=[];f(t,h(r,function(t,r){return!/^unsafe:/.test(e(t,r))}));return r.join("")}}];this.enableSvg=function(e){if(s(e)){d=e;return this}return d};this.addValidElements=function(e){if(!v){a(e)&&(e={htmlElements:e});F(S,e.svgElements);F(m,e.htmlVoidElements);F(T,e.htmlVoidElements);F(T,e.htmlElements)}return this};this.addValidAttrs=function(e){v||i(O,A(e,true));return this};n=t.bind;i=t.extend;o=t.forEach;a=t.isArray;s=t.isDefined;u=t.$$lowercase;l=t.noop;f=j;h=z;c=e.Node.prototype.contains||function(e){return!!(16&this.compareDocumentPosition(e))};var p=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,g=/([^#-~ |!])/g;var m=$("area,br,col,hr,img,wbr");var y=$("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),w=$("rp,rt"),b=i({},w,y);var x=i({},y,$("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul"));var k=i({},w,$("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var"));var S=$("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan");var E=$("script,style");var T=i({},m,x,k,b);var C=$("background,cite,href,longdesc,src,xlink:href,xml:base");var N=$("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width,style");var L=$("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",true);var O=i({},C,L,N);function $(e,t){return A(e.split(","),t)}function A(e,t){var r={},n;for(n=0;n<e.length;n++)r[t?u(e[n]):e[n]]=true;return r}function F(e,t){t&&t.length&&i(e,A(t))}var M=function(e,t){var n;if(!t||!t.implementation)throw r("noinert","Can't create an inert html document");n=t.implementation.createHTMLDocument("inert");var i=(n.documentElement||n.getDocumentElement()).querySelector("body");i.innerHTML='<svg><g onload="this.parentNode.remove()"></g></svg>';if(i.querySelector("svg")){i.innerHTML='<svg><p><style><img src="</style><img src=x onerror=alert(1)//">';return i.querySelector("svg img")?a:s}return o;function o(t){t="<remove></remove>"+t;try{t=encodeURI(t)}catch(e){return}var r=new e.XMLHttpRequest;r.responseType="document";r.open("GET","data:text/html;charset=utf-8,"+t,false);r.send(null);var n=r.response.body;n.firstChild.remove();return n}function a(t){t="<remove></remove>"+t;try{var r=(new e.DOMParser).parseFromString(t,"text/html").body;r.firstChild.remove();return r}catch(e){return}}function s(e){i.innerHTML=e;t.documentMode&&P(i);return i}}(e,e.document);function j(e,t){null===e||void 0===e?e="":"string"!==typeof e&&(e=""+e);var n=M(e);if(!n)return"";var i=5;do{if(0===i)throw r("uinput","Failed to sanitize html because the input is unstable");i--;e=n.innerHTML;n=M(e)}while(e!==n.innerHTML);var o=n.firstChild;while(o){switch(o.nodeType){case 1:t.start(o.nodeName.toLowerCase(),q(o.attributes));break;case 3:t.chars(o.textContent);break}var a;if(!(a=o.firstChild)){1===o.nodeType&&t.end(o.nodeName.toLowerCase());a=R("nextSibling",o);if(!a)while(null==a){o=R("parentNode",o);if(o===n)break;a=R("nextSibling",o);1===o.nodeType&&t.end(o.nodeName.toLowerCase())}}o=a}while(o=n.firstChild)n.removeChild(o)}function q(e){var t={};for(var r=0,n=e.length;r<n;r++){var i=e[r];t[i.name]=i.value}return t}function D(e){return e.replace(/&/g,"&amp;").replace(p,function(e){var t=e.charCodeAt(0);var r=e.charCodeAt(1);return"&#"+(1024*(t-55296)+(r-56320)+65536)+";"}).replace(g,function(e){return"&#"+e.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function z(e,t){var r=false;var i=n(e,e.push);return{start:function(e,n){e=u(e);!r&&E[e]&&(r=e);if(!r&&true===T[e]){i("<");i(e);o(n,function(r,n){var o=u(n);var a="img"===e&&"src"===o||"background"===o;if(0===o.indexOf("data-")||true===O[o]&&(true!==C[o]||t(r,a))){i(" ");i(n);i('="');i(D(r));i('"')}});i(">")}},end:function(e){e=u(e);if(!r&&true===T[e]&&true!==m[e]){i("</");i(e);i(">")}e==r&&(r=false)},chars:function(e){r||i(D(e))}}}function P(t){while(t){if(t.nodeType===e.Node.ELEMENT_NODE){var r=t.attributes;for(var n=0,i=r.length;n<i;n++){var o=r[n];var a=o.name.toLowerCase();if("xmlns:ns1"===a||0===a.lastIndexOf("ns1:",0)){t.removeAttributeNode(o);n--;i--}}}var s=t.firstChild;s&&P(s);t=R("nextSibling",t)}}function R(e,t){var n=t[e];if(n&&c.call(t,n))throw r("elclob","Failed to sanitize html because the element is clobbered: {0}",t.outerHTML||t.outerText);return n}}function d(e){var t=[];var r=h(t,l);r.chars(e);return t.join("")}t.module("ngSanitize",[]).provider("$sanitize",v).info({angularVersion:"1.7.2"});t.module("ngSanitize").filter("linky",["$sanitize",function(e){var r=/((s?ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,n=/^mailto:/i;var i=t.$$minErr("linky");var o=t.isDefined;var a=t.isFunction;var s=t.isObject;var u=t.isString;return function(t,l,c){if(null==t||""===t)return t;if(!u(t))throw i("notstring","Expected string but received: {0}",t);var f=a(c)?c:s(c)?function e(){return c}:function e(){return{}};var h;var v=t;var p=[];var g;var m;while(h=v.match(r)){g=h[0];h[2]||h[4]||(g=(h[3]?"http://":"mailto:")+g);m=h.index;y(v.substr(0,m));w(g,h[0].replace(n,""));v=v.substring(m+h[0].length)}y(v);return e(p.join(""));function y(e){if(!e)return;p.push(d(e))}function w(e,t){var r,n=f(e);p.push("<a ");for(r in n)p.push(r+'="'+n[r]+'" ');!o(l)||"target"in n||p.push('target="',l,'" ');p.push('href="',e.replace(/"/g,"&quot;"),'">');y(t);p.push("</a>")}}}])})(window,window.angular)},89:function(e,t,r){"use strict";var n,i;!(n=[r(119)],i=function(e){var t;t=function t(){var r=e.getService("$q").defer();return r};t.resolve=function(t){var r=e.getService("$q").defer();r.resolve(t);return r.promise};t.reject=function(){return e.getService("$q").reject.apply(null,arguments)};t.all=function(){return e.getService("$q").all.apply(null,arguments)};t.when=function(){return e.getService("$q").when.apply(null,arguments)};Object.defineProperty(t,"Promise",{get:function t(){return e.getService("$q")}});return t}.apply(t,n),void 0!==i&&(e.exports=i))}}]);