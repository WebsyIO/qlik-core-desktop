/*!
 * sense-client@6.105.4
 * 
 * Copyright(C) 2019 Qlik International AB
 * All Rights Reserved
 * 
 */
(window["qJsonp"]=window["qJsonp"]||[]).push([[10],{55:function(n,t){n.exports=function(n){if(!n.webpackPolyfill){n.deprecate=function(){};n.paths=[];n.children||(n.children=[]);Object.defineProperty(n,"loaded",{enumerable:true,get:function(){return n.l}});Object.defineProperty(n,"id",{enumerable:true,get:function(){return n.i}});n.webpackPolyfill=1}return n}},60:function(n,t,e){e(62);n.exports="ngAnimate"},62:function(n,t){(function(n,t){"use strict";var e=1;var r=8;var a="-add";var i="-remove";var o="ng-";var s="-active";var u="-prepare";var l="ng-animate";var f="$$ngAnimateChildren";var v="",c,d,m,p;if(void 0===n.ontransitionend&&void 0!==n.onwebkittransitionend){v="-webkit-";c="WebkitTransition";d="webkitTransitionEnd transitionend"}else{c="transition";d="transitionend"}if(void 0===n.onanimationend&&void 0!==n.onwebkitanimationend){v="-webkit-";m="WebkitAnimation";p="webkitAnimationEnd animationend"}else{m="animation";p="animationend"}var h="Duration";var g="Property";var $="Delay";var C="TimingFunction";var y="IterationCount";var D="PlayState";var b=9999;var A=m+$;var k=m+h;var w=c+$;var T=c+h;var S=t.$$minErr("ng");function j(n,t,e){if(!n)throw S("areq","Argument '{0}' is {1}",t||"?",e||"required");return n}function x(n,t){if(!n&&!t)return"";if(!n)return t;if(!t)return n;Tn(n)&&(n=n.join(" "));Tn(t)&&(t=t.join(" "));return n+" "+t}function O(n){var t={};if(n&&(n.to||n.from)){t.to=n.to;t.from=n.from}return t}function P(n,t,e){var r="";n=Tn(n)?n:n&&Pn(n)&&n.length?n.split(/\s+/):[];wn(n,function(n,a){if(n&&n.length>0){r+=a>0?" ":"";r+=e?t+n:n+t}});return r}function N(n,t){var e=n.indexOf(t);t>=0&&n.splice(e,1)}function F(n){if(n instanceof Fn)switch(n.length){case 0:return n;case 1:if(n[0].nodeType===e)return n;break;default:return Fn(M(n))}if(n.nodeType===e)return Fn(n)}function M(n){if(!n[0])return n;for(var t=0;t<n.length;t++){var r=n[t];if(r.nodeType===e)return r}}function q(n,t,e){wn(t,function(t){n.addClass(t,e)})}function E(n,t,e){wn(t,function(t){n.removeClass(t,e)})}function I(n){return function(t,e){if(e.addClass){q(n,t,e.addClass);e.addClass=null}if(e.removeClass){E(n,t,e.removeClass);e.removeClass=null}}}function R(n){n=n||{};if(!n.$$prepared){var t=n.domOperation||Mn;n.domOperation=function(){n.$$domOperationFired=true;t();t=Mn};n.$$prepared=true}return n}function L(n,t){J(n,t);H(n,t)}function J(n,t){if(t.from){n.css(t.from);t.from=null}}function H(n,t){if(t.to){n.css(t.to);t.to=null}}function B(n,t,e){var r=t.options||{};var a=e.options||{};var i=(r.addClass||"")+" "+(a.addClass||"");var o=(r.removeClass||"")+" "+(a.removeClass||"");var s=K(n.attr("class"),i,o);if(a.preparationClasses){r.preparationClasses=X(a.preparationClasses,r.preparationClasses);delete a.preparationClasses}var u=r.domOperation!==Mn?r.domOperation:null;kn(r,a);u&&(r.domOperation=u);s.addClass?r.addClass=s.addClass:r.addClass=null;s.removeClass?r.removeClass=s.removeClass:r.removeClass=null;t.addClass=r.addClass;t.removeClass=r.removeClass;return r}function K(n,t,e){var r=1;var o=-1;var s={};n=l(n);t=l(t);wn(t,function(n,t){s[t]=r});e=l(e);wn(e,function(n,t){s[t]=s[t]===r?null:o});var u={addClass:"",removeClass:""};wn(s,function(t,e){var s,l;if(t===r){s="addClass";l=!n[e]||n[e+i]}else if(t===o){s="removeClass";l=n[e]||n[e+a]}if(l){u[s].length&&(u[s]+=" ");u[s]+=e}});function l(n){Pn(n)&&(n=n.split(" "));var t={};wn(n,function(n){n.length&&(t[n]=true)});return t}return u}function Q(n){return n instanceof Fn?n[0]:n}function U(n,t,e){var r="";t&&(r=P(t,o,true));e.addClass&&(r=X(r,P(e.addClass,a)));e.removeClass&&(r=X(r,P(e.removeClass,i)));if(r.length){e.preparationClasses=r;n.addClass(r)}}function V(n,t){if(t.preparationClasses){n.removeClass(t.preparationClasses);t.preparationClasses=null}if(t.activeClasses){n.removeClass(t.activeClasses);t.activeClasses=null}}function W(n,t){var e=t?"-"+t+"s":"";G(n,[w,e]);return[w,e]}function z(n,t){var e=t?"paused":"";var r=m+D;G(n,[r,e]);return[r,e]}function G(n,t){var e=t[0];var r=t[1];n.style[e]=r}function X(n,t){if(!n)return t;if(!t)return n;return n+" "+t}var Y=["$$rAF",function(n){var t,e;function r(n){t=t.concat(n);a()}t=r.queue=[];r.waitUntilQuiet=function(t){e&&e();e=n(function(){e=null;t();a()})};return r;function a(){if(!t.length)return;var r=t.shift();for(var i=0;i<r.length;i++)r[i]();e||n(function(){e||a()})}}];var Z=["$interpolate",function(n){return{link:function(t,e,r){var a=r.ngAnimateChildren;if(Pn(a)&&0===a.length)e.data(f,true);else{i(n(a)(t));r.$observe("ngAnimateChildren",i)}function i(n){n="on"===n||"true"===n;e.data(f,n)}}}}];var _="$$animateCss";var nn=1e3;var tn=3;var en=1.5;var rn={transitionDuration:T,transitionDelay:w,transitionProperty:c+g,animationDuration:k,animationDelay:A,animationIterationCount:m+y};var an={transitionDuration:T,transitionDelay:w,animationDuration:k,animationDelay:A};function on(n){return[k,n+"s"]}function sn(n,t){var e=t?A:w;return[e,n+"s"]}function un(n,t,e){var r=Object.create(null);var a=n.getComputedStyle(t)||{};wn(e,function(n,t){var e=a[n];if(e){var i=e.charAt(0);("-"===i||"+"===i||i>=0)&&(e=ln(e));0===e&&(e=null);r[t]=e}});return r}function ln(n){var t=0;var e=n.split(/\s*,\s*/);wn(e,function(n){"s"===n.charAt(n.length-1)&&(n=n.substring(0,n.length-1));n=parseFloat(n)||0;t=t?Math.max(n,t):n});return t}function fn(n){return 0===n||null!=n}function vn(n,t){var e=c;var r=n+"s";t?e+=h:r+=" linear all";return[e,r]}function cn(){var n=Object.create(null);return{flush:function(){n=Object.create(null)},count:function(t){var e=n[t];return e?e.total:0},get:function(t){var e=n[t];return e&&e.value},put:function(t,e){n[t]?n[t].total++:n[t]={total:1,value:e}}}}function dn(n,t,e){wn(e,function(e){n[e]=Sn(n[e])?n[e]:t.style.getPropertyValue(e)})}var mn=["$animateProvider",function(n){var t=cn();var e=cn();this.$get=["$window","$$jqLite","$$AnimateRunner","$timeout","$$forceReflow","$sniffer","$$rAFScheduler","$$animateQueue",function(n,r,u,l,f,v,h,$){var y=I(r);var D=0;function A(n,t){var e="$$ngAnimateParentKey";var r=n.parentNode;var a=r[e]||(r[e]=++D);return a+"-"+n.getAttribute("class")+"-"+t}function k(e,r,a,i){var o=t.get(a);if(!o){o=un(n,e,i);"infinite"===o.animationIterationCount&&(o.animationIterationCount=1)}t.put(a,o);return o}function w(a,i,o,s){var u;if(t.count(o)>0){u=e.get(o);if(!u){var l=P(i,"-stagger");r.addClass(a,l);u=un(n,a,s);u.animationDuration=Math.max(u.animationDuration,0);u.transitionDuration=Math.max(u.transitionDuration,0);r.removeClass(a,l);e.put(o,u)}}return u||{}}var T=[];function S(n){T.push(n);h.waitUntilQuiet(function(){t.flush();e.flush();var n=f();for(var r=0;r<T.length;r++)T[r](n);T.length=0})}function j(n,t,e){var r=k(n,t,e,rn);var a=r.animationDelay;var i=r.transitionDelay;r.maxDelay=a&&i?Math.max(a,i):a||i;r.maxDuration=Math.max(r.animationDuration*r.animationIterationCount,r.transitionDuration);return r}return function n(e,f){var h=f||{};h.$$prepared||(h=R(An(h)));var D={};var k=Q(e);if(!k||!k.parentNode||!$.enabled())return Jn();var T=[];var x=e.attr("class");var F=O(h);var M;var q;var E;var I;var B;var K;var U;var V;var X;var Y;var Z=[];if(0===h.duration||!v.animations&&!v.transitions)return Jn();var rn=h.event&&Tn(h.event)?h.event.join(" "):h.event;var un=rn&&h.structural;var ln="";var cn="";un?ln=P(rn,o,true):rn&&(ln=rn);h.addClass&&(cn+=P(h.addClass,a));if(h.removeClass){cn.length&&(cn+=" ");cn+=P(h.removeClass,i)}h.applyClassesEarly&&cn.length&&y(e,h);var mn=[ln,cn].join(" ").trim();var pn=x+" "+mn;var hn=P(mn,s);var gn=F.to&&Object.keys(F.to).length>0;var $n=(h.keyframeStyle||"").length>0;if(!$n&&!gn&&!mn)return Jn();var Cn,yn;if(h.stagger>0){var Dn=parseFloat(h.stagger);yn={transitionDelay:Dn,animationDelay:Dn,transitionDuration:0,animationDuration:0}}else{Cn=A(k,pn);yn=w(k,mn,Cn,an)}h.$$skipPreparationClasses||r.addClass(e,mn);var bn;if(h.transitionStyle){var kn=[c,h.transitionStyle];G(k,kn);T.push(kn)}if(h.duration>=0){bn=k.style[c].length>0;var Sn=vn(h.duration,bn);G(k,Sn);T.push(Sn)}if(h.keyframeStyle){var jn=[m,h.keyframeStyle];G(k,jn);T.push(jn)}var xn=yn?h.staggerIndex>=0?h.staggerIndex:t.count(Cn):0;var On=0===xn;On&&!h.skipBlocking&&W(k,b);var Pn=j(k,pn,Cn);var Nn=Pn.maxDelay;K=Math.max(Nn,0);V=Pn.maxDuration;var Fn={};Fn.hasTransitions=Pn.transitionDuration>0;Fn.hasAnimations=Pn.animationDuration>0;Fn.hasTransitionAll=Fn.hasTransitions&&"all"===Pn.transitionProperty;Fn.applyTransitionDuration=gn&&(Fn.hasTransitions&&!Fn.hasTransitionAll||Fn.hasAnimations&&!Fn.hasTransitions);Fn.applyAnimationDuration=h.duration&&Fn.hasAnimations;Fn.applyTransitionDelay=fn(h.delay)&&(Fn.applyTransitionDuration||Fn.hasTransitions);Fn.applyAnimationDelay=fn(h.delay)&&Fn.hasAnimations;Fn.recalculateTimingStyles=cn.length>0;if(Fn.applyTransitionDuration||Fn.applyAnimationDuration){V=h.duration?parseFloat(h.duration):V;if(Fn.applyTransitionDuration){Fn.hasTransitions=true;Pn.transitionDuration=V;bn=k.style[c+g].length>0;T.push(vn(V,bn))}if(Fn.applyAnimationDuration){Fn.hasAnimations=true;Pn.animationDuration=V;T.push(on(V))}}if(0===V&&!Fn.recalculateTimingStyles)return Jn();if(null!=h.delay){var qn;if("boolean"!==typeof h.delay){qn=parseFloat(h.delay);K=Math.max(qn,0)}Fn.applyTransitionDelay&&T.push(sn(qn));Fn.applyAnimationDelay&&T.push(sn(qn,true))}null==h.duration&&Pn.transitionDuration>0&&(Fn.recalculateTimingStyles=Fn.recalculateTimingStyles||On);U=K*nn;X=V*nn;if(!h.skipBlocking){Fn.blockTransition=Pn.transitionDuration>0;Fn.blockKeyframeAnimation=Pn.animationDuration>0&&yn.animationDelay>0&&0===yn.animationDuration}if(h.from){h.cleanupStyles&&dn(D,k,Object.keys(h.from));J(e,h)}Fn.blockTransition||Fn.blockKeyframeAnimation?Ln(V):h.skipBlocking||W(k,false);return{$$willAnimate:true,end:En,start:function(){if(M)return;B={end:En,cancel:In,resume:null,pause:null};I=new u(B);S(Bn);return I}};function En(){Rn()}function In(){Rn(true)}function Rn(n){if(M||E&&q)return;M=true;q=false;h.$$skipPreparationClasses||r.removeClass(e,mn);r.removeClass(e,hn);z(k,false);W(k,false);wn(T,function(n){k.style[n[0]]=""});y(e,h);L(e,h);Object.keys(D).length&&wn(D,function(n,t){n?k.style.setProperty(t,n):k.style.removeProperty(t)});h.onDone&&h.onDone();Z&&Z.length&&e.off(Z.join(" "),Hn);var t=e.data(_);if(t){l.cancel(t[0].timer);e.removeData(_)}I&&I.complete(!n)}function Ln(n){Fn.blockTransition&&W(k,n);Fn.blockKeyframeAnimation&&z(k,!!n)}function Jn(){I=new u({end:En,cancel:In});S(Mn);Rn();return{$$willAnimate:false,start:function(){return I},end:En}}function Hn(n){n.stopPropagation();var t=n.originalEvent||n;if(t.target!==k)return;var e=t.$manualTimeStamp||Date.now();var r=parseFloat(t.elapsedTime.toFixed(tn));if(Math.max(e-Y,0)>=U&&r>=V){E=true;Rn()}}function Bn(){if(M)return;if(!k.parentNode){Rn();return}var n=function(n){if(E){if(q&&n){q=false;Rn()}}else{q=!n;if(Pn.animationDuration){var t=z(k,q);q?T.push(t):N(T,t)}}};var t=xn>0&&(Pn.transitionDuration&&0===yn.transitionDuration||Pn.animationDuration&&0===yn.animationDuration)&&Math.max(yn.animationDelay,yn.transitionDelay);t?l(a,Math.floor(t*xn*nn),false):a();B.resume=function(){n(true)};B.pause=function(){n(false)};function a(){if(M)return;Ln(false);wn(T,function(n){var t=n[0];var e=n[1];k.style[t]=e});y(e,h);r.addClass(e,hn);if(Fn.recalculateTimingStyles){pn=k.getAttribute("class")+" "+mn;Cn=A(k,pn);Pn=j(k,pn,Cn);Nn=Pn.maxDelay;K=Math.max(Nn,0);V=Pn.maxDuration;if(0===V){Rn();return}Fn.hasTransitions=Pn.transitionDuration>0;Fn.hasAnimations=Pn.animationDuration>0}if(Fn.applyAnimationDelay){Nn="boolean"!==typeof h.delay&&fn(h.delay)?parseFloat(h.delay):Nn;K=Math.max(Nn,0);Pn.animationDelay=Nn;qn=sn(Nn,true);T.push(qn);k.style[qn[0]]=qn[1]}U=K*nn;X=V*nn;if(h.easing){var n,t=h.easing;if(Fn.hasTransitions){n=c+C;T.push([n,t]);k.style[n]=t}if(Fn.hasAnimations){n=m+C;T.push([n,t]);k.style[n]=t}}Pn.transitionDuration&&Z.push(d);Pn.animationDuration&&Z.push(p);Y=Date.now();var a=U+en*X;var o=Y+a;var s=e.data(_)||[];var u=true;if(s.length){var f=s[0];u=o>f.expectedEndTime;u?l.cancel(f.timer):s.push(Rn)}if(u){var v=l(i,a,false);s[0]={timer:v,expectedEndTime:o};s.push(Rn);e.data(_,s)}Z.length&&e.on(Z.join(" "),Hn);if(h.to){h.cleanupStyles&&dn(D,k,Object.keys(h.to));H(e,h)}}function i(){var n=e.data(_);if(n){for(var t=1;t<n.length;t++)n[t]();e.removeData(_)}}}}}]}];var pn=["$$animationProvider",function(n){n.drivers.push("$$animateCssDriver");var t="ng-animate-shim";var e="ng-anchor";var r="ng-anchor-out";var a="ng-anchor-in";function i(n){return n.parentNode&&11===n.parentNode.nodeType}this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$sniffer","$$jqLite","$document",function(n,o,s,u,l,f,v){if(!l.animations&&!l.transitions)return Mn;var c=v[0].body;var d=Q(u);var m=Fn(i(d)||c.contains(d)?d:c);return function n(t){return t.from&&t.to?$(t.from,t.to,t.classes,t.anchors):C(t)};function p(n){return n.replace(/\bng-\S+\b/g,"")}function h(n,t){Pn(n)&&(n=n.split(" "));Pn(t)&&(t=t.split(" "));return n.filter(function(n){return-1===t.indexOf(n)}).join(" ")}function g(i,o,u){var l=Fn(Q(o).cloneNode(true));var f=p(y(l));o.addClass(t);u.addClass(t);l.addClass(e);m.append(l);var v,d=C();if(!d){v=D();if(!v)return b()}var g=d||v;return{start:function(){var n;var t=g.start();t.done(function(){t=null;if(!v){v=D();if(v){t=v.start();t.done(function(){t=null;b();n.complete()});return t}}b();n.complete()});n=new s({end:e,cancel:e});return n;function e(){t&&t.end()}}};function $(n){var t={};var e=Q(n).getBoundingClientRect();wn(["width","height","top","left"],function(n){var r=e[n];switch(n){case"top":r+=c.scrollTop;break;case"left":r+=c.scrollLeft;break}t[n]=Math.floor(r)+"px"});return t}function C(){var t=n(l,{addClass:r,delay:true,from:$(o)});return t.$$willAnimate?t:null}function y(n){return n.attr("class")||""}function D(){var t=p(y(u));var e=h(t,f);var i=h(f,t);var o=n(l,{to:$(u),addClass:a+" "+e,removeClass:r+" "+i,delay:true});return o.$$willAnimate?o:null}function b(){l.remove();o.removeClass(t);u.removeClass(t)}}function $(n,t,e,r){var a=C(n,Mn);var i=C(t,Mn);var o=[];wn(r,function(n){var t=n["out"];var r=n["in"];var a=g(e,t,r);a&&o.push(a)});if(!a&&!i&&0===o.length)return;return{start:function(){var n=[];a&&n.push(a.start());i&&n.push(i.start());wn(o,function(t){n.push(t.start())});var t=new s({end:e,cancel:e});s.all(n,function(n){t.complete(n)});return t;function e(){wn(n,function(n){n.end()})}}}}function C(t){var e=t.element;var r=t.options||{};if(t.structural){r.event=t.event;r.structural=true;r.applyClassesEarly=true;"leave"===t.event&&(r.onDone=r.domOperation)}r.preparationClasses&&(r.event=X(r.event,r.preparationClasses));var a=n(e,r);return a.$$willAnimate?a:null}}]}];var hn=["$animateProvider",function(n){this.$get=["$injector","$$AnimateRunner","$$jqLite",function(t,e,r){var a=I(r);return function(n,t,r,o){var s=false;if(3===arguments.length&&On(r)){o=r;r=null}o=R(o);if(!r){r=n.attr("class")||"";o.addClass&&(r+=" "+o.addClass);o.removeClass&&(r+=" "+o.removeClass)}var u=o.addClass;var l=o.removeClass;var f=i(r);var v,c;if(f.length){var d,m;if("leave"===t){m="leave";d="afterLeave"}else{m="before"+t.charAt(0).toUpperCase()+t.substr(1);d=t}"enter"!==t&&"move"!==t&&(v=y(n,t,o,f,m));c=y(n,t,o,f,d)}if(!v&&!c)return;function p(){o.domOperation();a(n,o)}function h(){s=true;p();L(n,o)}var g;return{$$willAnimate:true,end:function(){if(g)g.end();else{h();g=new e;g.complete(true)}return g},start:function(){if(g)return g;g=new e;var n;var t=[];v&&t.push(function(t){n=v(t)});t.length?t.push(function(n){p();n(true)}):p();c&&t.push(function(t){n=c(t)});g.setHost({end:function(){a()},cancel:function(){a(true)}});e.chain(t,r);return g;function r(n){h(n);g.complete(n)}function a(t){if(!s){(n||Mn)(t);r(t)}}}};function $(n,t,r,a,i){var o;switch(r){case"animate":o=[t,a.from,a.to,i];break;case"setClass":o=[t,u,l,i];break;case"addClass":o=[t,u,i];break;case"removeClass":o=[t,l,i];break;default:o=[t,i];break}o.push(a);var s=n.apply(n,o);if(s){xn(s.start)&&(s=s.start());if(s instanceof e)s.done(i);else if(xn(s))return s}return Mn}function C(n,t,r,a,i){var o=[];wn(a,function(a){var s=a[i];if(!s)return;o.push(function(){var a;var i;var o=false;var u=function(n){if(!o){o=true;(i||Mn)(n);a.complete(!n)}};a=new e({end:function(){u()},cancel:function(){u(true)}});i=$(s,n,t,r,function(n){var t=false===n;u(t)});return a})});return o}function y(n,t,r,a,i){var o=C(n,t,r,a,i);if(0===o.length){var s,u;if("beforeSetClass"===i){s=C(n,"removeClass",r,a,"beforeRemoveClass");u=C(n,"addClass",r,a,"beforeAddClass")}else if("setClass"===i){s=C(n,"removeClass",r,a,"removeClass");u=C(n,"addClass",r,a,"addClass")}s&&(o=o.concat(s));u&&(o=o.concat(u))}if(0===o.length)return;return function n(t){var r=[];o.length&&wn(o,function(n){r.push(n())});r.length?e.all(r,t):t();return function n(t){wn(r,function(n){t?n.cancel():n.end()})}}}};function i(e){e=Tn(e)?e:e.split(" ");var r=[],a={};for(var i=0;i<e.length;i++){var o=e[i],s=n.$$registeredAnimations[o];if(s&&!a[o]){r.push(t.get(s));a[o]=true}}return r}}]}];var gn=["$$animationProvider",function(n){n.drivers.push("$$animateJsDriver");this.$get=["$$animateJs","$$AnimateRunner",function(n,t){return function n(r){if(r.from&&r.to){var a=e(r.from);var i=e(r.to);if(!a&&!i)return;return{start:function(){var n=[];a&&n.push(a.start());i&&n.push(i.start());t.all(n,o);var e=new t({end:r(),cancel:r()});return e;function r(){return function(){wn(n,function(n){n.end()})}}function o(n){e.complete(n)}}}}return e(r)};function e(t){var e=t.element;var r=t.event;var a=t.options;var i=t.classes;return n(e,r,i,a)}}]}];var $n="data-ng-animate";var Cn="$ngAnimatePin";var yn=["$animateProvider",function(t){var r=1;var a=2;var i=" ";var o=this.rules={skip:[],cancel:[],join:[]};function s(n){if(!n)return null;var t=n.split(i);var e=Object.create(null);wn(t,function(n){e[n]=true});return e}function u(n,t){if(n&&t){var e=s(t);return n.split(i).some(function(n){return e[n]})}}function l(n,t,e){return o[n].some(function(n){return n(t,e)})}function v(n,t){var e=(n.addClass||"").length>0;var r=(n.removeClass||"").length>0;return t?e&&r:e||r}o.join.push(function(n,t){return!n.structural&&v(n)});o.skip.push(function(n,t){return!n.structural&&!v(n)});o.skip.push(function(n,t){return"leave"===t.event&&n.structural});o.skip.push(function(n,t){return t.structural&&t.state===a&&!n.structural});o.cancel.push(function(n,t){return t.structural&&n.structural});o.cancel.push(function(n,t){return t.state===a&&n.structural});o.cancel.push(function(n,t){if(t.structural)return false;var e=n.addClass;var r=n.removeClass;var a=t.addClass;var i=t.removeClass;if(Nn(e)&&Nn(r)||Nn(a)&&Nn(i))return false;return u(e,i)||u(r,a)});this.$get=["$$rAF","$rootScope","$rootElement","$document","$$Map","$$animation","$$AnimateRunner","$templateRequest","$$jqLite","$$forceReflow","$$isDocumentHidden",function(i,o,s,u,c,d,m,p,h,g,$){var C=new c;var y=new c;var D=null;function b(){var n=false;return function(t){n?t():o.$$postDigest(function(){n=true;t()})}}var A=o.$watch(function(){return 0===p.totalPendingRequests},function(n){if(!n)return;A();o.$$postDigest(function(){o.$$postDigest(function(){null===D&&(D=true)})})});var k=Object.create(null);var w=t.customFilter();var T=t.classNameFilter();var S=function(){return true};var x=w||S;var O=T?function(n,t){var e=[n.getAttribute("class"),t.addClass,t.removeClass].join(" ");return T.test(e)}:S;var P=I(h);function N(n,t){return B(n,t,{})}var q=n.Node.prototype.contains||function(n){return this===n||!!(16&this.compareDocumentPosition(n))};function E(n,t,e){var r=[];var a=k[e];a&&wn(a,function(a){q.call(a.node,t)?r.push(a.callback):"leave"===e&&q.call(a.node,n)&&r.push(a.callback)});return r}function J(n,t,e){var r=M(t);return n.filter(function(n){var t=n.node===r&&(!e||n.callback===e);return!t})}function H(n,t){"close"!==n||t.parentNode||K.off(t)}var K={on:function(n,t,e){var r=M(t);k[n]=k[n]||[];k[n].push({node:r,callback:e});Fn(t).on("$destroy",function(){var a=C.get(r);a||K.off(n,t,e)})},off:function(n,t,e){if(1===arguments.length&&!Pn(arguments[0])){t=arguments[0];for(var r in k)k[r]=J(k[r],t);return}var a=k[n];if(!a)return;k[n]=1===arguments.length?null:J(a,t,e)},pin:function(n,t){j(jn(n),"element","not an element");j(jn(t),"parentElement","not an element");n.data(Cn,t)},push:function(n,t,e,r){e=e||{};e.domOperation=r;return W(n,t,e)},enabled:function(n,t){var e=arguments.length;if(0===e)t=!!D;else{var r=jn(n);if(r){var a=Q(n);1===e?t=!y.get(a):y.set(a,!t)}else t=D=!!n}return t}};return K;function W(n,t,e){var s=An(e);var u=F(n);var f=Q(u);var c=f&&f.parentNode;s=R(s);var p=new m;var h=b();Tn(s.addClass)&&(s.addClass=s.addClass.join(" "));s.addClass&&!Pn(s.addClass)&&(s.addClass=null);Tn(s.removeClass)&&(s.removeClass=s.removeClass.join(" "));s.removeClass&&!Pn(s.removeClass)&&(s.removeClass=null);s.from&&!On(s.from)&&(s.from=null);s.to&&!On(s.to)&&(s.to=null);if(!D||!f||!x(f,t,e)||!O(f,s)){W();return p}var g=["enter","move","leave"].indexOf(t)>=0;var A=$();var k=A||y.get(f);var w=!k&&C.get(f)||{};var T=!!w.state;k||T&&w.state===r||(k=!X(f,c,t));if(k){A&&K(p,t,"start");W();A&&K(p,t,"close");return p}g&&z(f);var S={structural:g,element:u,event:t,addClass:s.addClass,removeClass:s.removeClass,close:W,options:s,runner:p};if(T){var j=l("skip",S,w);if(j){if(w.state===a){W();return p}B(u,w,S);return w.runner}var M=l("cancel",S,w);if(M)if(w.state===a)w.runner.end();else{if(!w.structural){B(u,w,S);return w.runner}w.close()}else{var q=l("join",S,w);if(q){if(w.state!==a){U(u,g?t:null,s);t=S.event=w.event;s=B(u,w,S);return w.runner}N(u,S)}}}else N(u,S);var I=S.structural;I||(I="animate"===S.event&&Object.keys(S.options.to||{}).length>0||v(S));if(!I){W();G(f);return p}var J=(w.counter||0)+1;S.counter=J;Y(f,r,S);o.$$postDigest(function(){u=F(n);var e=C.get(f);var r=!e;e=e||{};var i=u.parent()||[];var o=i.length>0&&("animate"===e.event||e.structural||v(e));if(r||e.counter!==J||!o){if(r){P(u,s);L(u,s)}if(r||g&&e.event!==t){s.domOperation();p.end()}o||G(f);return}t=!e.structural&&v(e,true)?"setClass":e.event;Y(f,a);var l=d(u,t,e.options);p.setHost(l);K(p,t,"start",{});l.done(function(n){W(!n);var e=C.get(f);e&&e.counter===J&&G(f);K(p,t,"close",{})})});return p;function K(n,t,e,r){h(function(){var n=E(c,f,t);n.length?i(function(){wn(n,function(n){n(u,e,r)});H(e,f)}):H(e,f)});n.progress(t,e,r)}function W(n){V(u,s);P(u,s);L(u,s);s.domOperation();p.complete(!n)}}function z(n){var t=n.querySelectorAll("["+$n+"]");wn(t,function(n){var t=parseInt(n.getAttribute($n),10);var e=C.get(n);if(e)switch(t){case a:e.runner.end();case r:C.delete(n);break}})}function G(n){n.removeAttribute($n);C.delete(n)}function X(n,t,r){var a=u[0].body;var i=Q(s);var o=n===a||"HTML"===n.nodeName;var l=n===i;var v=false;var c=y.get(n);var d;var m=Fn.data(n,Cn);m&&(t=Q(m));while(t){l||(l=t===i);if(t.nodeType!==e)break;var p=C.get(t)||{};if(!v){var h=y.get(t);if(true===h&&false!==c){c=true;break}false===h&&(c=false);v=p.structural}if(Nn(d)||true===d){var g=Fn.data(t,f);Sn(g)&&(d=g)}if(v&&false===d)break;o||(o=t===a);if(o&&l)break;if(!l){m=Fn.data(t,Cn);if(m){t=Q(m);continue}}t=t.parentNode}var $=(!v||d)&&true!==c;return $&&l&&o}function Y(n,t,e){e=e||{};e.state=t;n.setAttribute($n,t);var r=C.get(n);var a=r?kn(r,e):e;C.set(n,a)}}]}];var Dn=["$animateProvider",function(n){var t="ng-animate-ref";var e=this.drivers=[];var r="$$animationRunner";function a(n,t){n.data(r,t)}function i(n){n.removeData(r)}function o(n){return n.data(r)}this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$Map","$$rAFScheduler",function(n,r,s,f,v,c){var d=[];var m=I(n);function p(n){var t={children:[]};var e,r=new v;for(e=0;e<n.length;e++){var a=n[e];r.set(a.domNode,n[e]={domNode:a.domNode,fn:a.fn,children:[]})}for(e=0;e<n.length;e++)i(n[e]);return o(t);function i(n){if(n.processed)return n;n.processed=true;var e=n.domNode;var a=e.parentNode;r.set(e,n);var o;while(a){o=r.get(a);if(o){o.processed||(o=i(o));break}a=a.parentNode}(o||t).children.push(n);return n}function o(n){var t=[];var e=[];var r;for(r=0;r<n.children.length;r++)e.push(n.children[r]);var a=e.length;var i=0;var o=[];for(r=0;r<e.length;r++){var s=e[r];if(a<=0){a=i;i=0;t.push(o);o=[]}o.push(s.fn);s.children.forEach(function(n){i++;e.push(n)});a--}o.length&&t.push(o);return t}}return function(v,h,g){g=R(g);var $=["enter","move","leave"].indexOf(h)>=0;var C=new f({end:function(){P()},cancel:function(){P(true)}});if(!e.length){P();return C}a(v,C);var y=x(v.attr("class"),x(g.addClass,g.removeClass));var D=g.tempClasses;if(D){y+=" "+D;g.tempClasses=null}var b;if($){b="ng-"+h+u;n.addClass(v,b)}d.push({element:v,classes:y,event:h,structural:$,options:g,beforeStart:S,close:P});v.on("$destroy",O);if(d.length>1)return C;r.$$postDigest(function(){var n=[];wn(d,function(t){o(t.element)?n.push(t):t.close()});d.length=0;var t=k(n);var e=[];wn(t,function(n){e.push({domNode:Q(n.from?n.from.element:n.element),fn:function t(){n.beforeStart();var e,r=n.close;var a=n.anchors?n.from.element||n.to.element:n.element;if(o(a)){var i=T(n);i&&(e=i.start)}if(e){var s=e();s.done(function(n){r(!n)});j(n,s)}else r()}})});c(p(e))});return C;function A(n){var e="["+t+"]";var r=n.hasAttribute(t)?[n]:n.querySelectorAll(e);var a=[];wn(r,function(n){var e=n.getAttribute(t);e&&e.length&&a.push(n)});return a}function k(n){var e=[];var r={};wn(n,function(n,a){var i=n.element;var o=Q(i);var s=n.event;var u=["enter","move"].indexOf(s)>=0;var l=n.structural?A(o):[];if(l.length){var f=u?"to":"from";wn(l,function(n){var e=n.getAttribute(t);r[e]=r[e]||{};r[e][f]={animationID:a,element:Fn(n)}})}else e.push(n)});var a={};var i={};wn(r,function(t,r){var o=t.from;var s=t.to;if(!o||!s){var u=o?o.animationID:s.animationID;var l=u.toString();if(!a[l]){a[l]=true;e.push(n[u])}return}var f=n[o.animationID];var v=n[s.animationID];var c=o.animationID.toString();if(!i[c]){var d=i[c]={structural:true,beforeStart:function(){f.beforeStart();v.beforeStart()},close:function(){f.close();v.close()},classes:w(f.classes,v.classes),from:f,to:v,anchors:[]};if(d.classes.length)e.push(d);else{e.push(f);e.push(v)}}i[c].anchors.push({out:o.element,in:s.element})});return e}function w(n,t){n=n.split(" ");t=t.split(" ");var e=[];for(var r=0;r<n.length;r++){var a=n[r];if("ng-"===a.substring(0,3))continue;for(var i=0;i<t.length;i++)if(a===t[i]){e.push(a);break}}return e.join(" ")}function T(n){for(var t=e.length-1;t>=0;t--){var r=e[t];var a=s.get(r);var i=a(n);if(i)return i}}function S(){v.addClass(l);D&&n.addClass(v,D);if(b){n.removeClass(v,b);b=null}}function j(n,t){if(n.from&&n.to){e(n.from.element);e(n.to.element)}else e(n.element);function e(n){var e=o(n);e&&e.setHost(t)}}function O(){var n=o(v);!n||"leave"===h&&g.$$domOperationFired||n.end()}function P(t){v.off("$destroy",O);i(v);m(v,g);L(v,g);g.domOperation();D&&n.removeClass(v,D);v.removeClass(l);C.complete(!t)}}}]}];var bn=["$animate",function(n){return{restrict:"A",transclude:"element",terminal:true,priority:600,link:function(t,e,r,a,i){var o,s;t.$watchCollection(r.ngAnimateSwap||r["for"],function(t){o&&n.leave(o);if(s){s.$destroy();s=null}(t||0===t)&&i(function(t,r){o=t;s=r;n.enter(t,null,e)})})}}}];var An;var kn;var wn;var Tn;var Sn;var jn;var xn;var On;var Pn;var Nn;var Fn;var Mn;t.module("ngAnimate",[],function n(){Mn=t.noop;An=t.copy;kn=t.extend;Fn=t.element;wn=t.forEach;Tn=t.isArray;Pn=t.isString;On=t.isObject;Nn=t.isUndefined;Sn=t.isDefined;xn=t.isFunction;jn=t.isElement}).info({angularVersion:"1.7.2"}).directive("ngAnimateSwap",bn).directive("ngAnimateChildren",Z).factory("$$rAFScheduler",Y).provider("$$animateQueue",yn).provider("$$animation",Dn).provider("$animateCss",mn).provider("$$animateCssDriver",pn).provider("$$animateJs",hn).provider("$$animateJsDriver",gn)})(window,window.angular)}}]);