var $1=Object.defineProperty;var P1=o=>{throw TypeError(o)};var I1=(o,n,i)=>n in o?$1(o,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[n]=i;var Ye=(o,n,i)=>I1(o,typeof n!="symbol"?n+"":n,i);var Ql=(o,n,i)=>n.has(o)?P1("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(o):n.set(o,i);function U1(o,n){for(var i=0;i<n.length;i++){const l=n[i];if(typeof l!="string"&&!Array.isArray(l)){for(const c in l)if(c!=="default"&&!(c in o)){const u=Object.getOwnPropertyDescriptor(l,c);u&&Object.defineProperty(o,c,u.get?u:{enumerable:!0,get:()=>l[c]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const _ of u.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&l(_)}).observe(document,{childList:!0,subtree:!0});function i(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function l(c){if(c.ep)return;c.ep=!0;const u=i(c);fetch(c.href,u)}})();function dh(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var gf={exports:{}},Vl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op;function H1(){if(Op)return Vl;Op=1;var o=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function i(l,c,u){var _=null;if(u!==void 0&&(_=""+u),c.key!==void 0&&(_=""+c.key),"key"in c){u={};for(var g in c)g!=="key"&&(u[g]=c[g])}else u=c;return c=u.ref,{$$typeof:o,type:l,key:_,ref:c!==void 0?c:null,props:u}}return Vl.Fragment=n,Vl.jsx=i,Vl.jsxs=i,Vl}var Lp;function Y1(){return Lp||(Lp=1,gf.exports=H1()),gf.exports}var r=Y1(),yf={exports:{}},mt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function X1(){if(zp)return mt;zp=1;var o=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),_=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),v=Symbol.iterator;function C(A){return A===null||typeof A!="object"?null:(A=v&&A[v]||A["@@iterator"],typeof A=="function"?A:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,L={};function B(A,Z,pe){this.props=A,this.context=Z,this.refs=L,this.updater=pe||k}B.prototype.isReactComponent={},B.prototype.setState=function(A,Z){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,Z,"setState")},B.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function J(){}J.prototype=B.prototype;function G(A,Z,pe){this.props=A,this.context=Z,this.refs=L,this.updater=pe||k}var z=G.prototype=new J;z.constructor=G,M(z,B.prototype),z.isPureReactComponent=!0;var de=Array.isArray;function he(){}var F={H:null,A:null,T:null,S:null},le=Object.prototype.hasOwnProperty;function ge(A,Z,pe){var je=pe.ref;return{$$typeof:o,type:A,key:Z,ref:je!==void 0?je:null,props:pe}}function xe(A,Z){return ge(A.type,Z,A.props)}function ue(A){return typeof A=="object"&&A!==null&&A.$$typeof===o}function K(A){var Z={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(pe){return Z[pe]})}var Xe=/\/+/g;function _e(A,Z){return typeof A=="object"&&A!==null&&A.key!=null?K(""+A.key):Z.toString(36)}function Se(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(he,he):(A.status="pending",A.then(function(Z){A.status==="pending"&&(A.status="fulfilled",A.value=Z)},function(Z){A.status==="pending"&&(A.status="rejected",A.reason=Z)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function N(A,Z,pe,je,qe){var rt=typeof A;(rt==="undefined"||rt==="boolean")&&(A=null);var dt=!1;if(A===null)dt=!0;else switch(rt){case"bigint":case"string":case"number":dt=!0;break;case"object":switch(A.$$typeof){case o:case n:dt=!0;break;case p:return dt=A._init,N(dt(A._payload),Z,pe,je,qe)}}if(dt)return qe=qe(A),dt=je===""?"."+_e(A,0):je,de(qe)?(pe="",dt!=null&&(pe=dt.replace(Xe,"$&/")+"/"),N(qe,Z,pe,"",function($e){return $e})):qe!=null&&(ue(qe)&&(qe=xe(qe,pe+(qe.key==null||A&&A.key===qe.key?"":(""+qe.key).replace(Xe,"$&/")+"/")+dt)),Z.push(qe)),1;dt=0;var en=je===""?".":je+":";if(de(A))for(var Qe=0;Qe<A.length;Qe++)je=A[Qe],rt=en+_e(je,Qe),dt+=N(je,Z,pe,rt,qe);else if(Qe=C(A),typeof Qe=="function")for(A=Qe.call(A),Qe=0;!(je=A.next()).done;)je=je.value,rt=en+_e(je,Qe++),dt+=N(je,Z,pe,rt,qe);else if(rt==="object"){if(typeof A.then=="function")return N(Se(A),Z,pe,je,qe);throw Z=String(A),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return dt}function ce(A,Z,pe){if(A==null)return A;var je=[],qe=0;return N(A,je,"","",function(rt){return Z.call(pe,rt,qe++)}),je}function W(A){if(A._status===-1){var Z=A._result;Z=Z(),Z.then(function(pe){(A._status===0||A._status===-1)&&(A._status=1,A._result=pe)},function(pe){(A._status===0||A._status===-1)&&(A._status=2,A._result=pe)}),A._status===-1&&(A._status=0,A._result=Z)}if(A._status===1)return A._result.default;throw A._result}var be=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)},De={map:ce,forEach:function(A,Z,pe){ce(A,function(){Z.apply(this,arguments)},pe)},count:function(A){var Z=0;return ce(A,function(){Z++}),Z},toArray:function(A){return ce(A,function(Z){return Z})||[]},only:function(A){if(!ue(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};return mt.Activity=y,mt.Children=De,mt.Component=B,mt.Fragment=i,mt.Profiler=c,mt.PureComponent=G,mt.StrictMode=l,mt.Suspense=h,mt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,mt.__COMPILER_RUNTIME={__proto__:null,c:function(A){return F.H.useMemoCache(A)}},mt.cache=function(A){return function(){return A.apply(null,arguments)}},mt.cacheSignal=function(){return null},mt.cloneElement=function(A,Z,pe){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var je=M({},A.props),qe=A.key;if(Z!=null)for(rt in Z.key!==void 0&&(qe=""+Z.key),Z)!le.call(Z,rt)||rt==="key"||rt==="__self"||rt==="__source"||rt==="ref"&&Z.ref===void 0||(je[rt]=Z[rt]);var rt=arguments.length-2;if(rt===1)je.children=pe;else if(1<rt){for(var dt=Array(rt),en=0;en<rt;en++)dt[en]=arguments[en+2];je.children=dt}return ge(A.type,qe,je)},mt.createContext=function(A){return A={$$typeof:_,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:u,_context:A},A},mt.createElement=function(A,Z,pe){var je,qe={},rt=null;if(Z!=null)for(je in Z.key!==void 0&&(rt=""+Z.key),Z)le.call(Z,je)&&je!=="key"&&je!=="__self"&&je!=="__source"&&(qe[je]=Z[je]);var dt=arguments.length-2;if(dt===1)qe.children=pe;else if(1<dt){for(var en=Array(dt),Qe=0;Qe<dt;Qe++)en[Qe]=arguments[Qe+2];qe.children=en}if(A&&A.defaultProps)for(je in dt=A.defaultProps,dt)qe[je]===void 0&&(qe[je]=dt[je]);return ge(A,rt,qe)},mt.createRef=function(){return{current:null}},mt.forwardRef=function(A){return{$$typeof:g,render:A}},mt.isValidElement=ue,mt.lazy=function(A){return{$$typeof:p,_payload:{_status:-1,_result:A},_init:W}},mt.memo=function(A,Z){return{$$typeof:m,type:A,compare:Z===void 0?null:Z}},mt.startTransition=function(A){var Z=F.T,pe={};F.T=pe;try{var je=A(),qe=F.S;qe!==null&&qe(pe,je),typeof je=="object"&&je!==null&&typeof je.then=="function"&&je.then(he,be)}catch(rt){be(rt)}finally{Z!==null&&pe.types!==null&&(Z.types=pe.types),F.T=Z}},mt.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},mt.use=function(A){return F.H.use(A)},mt.useActionState=function(A,Z,pe){return F.H.useActionState(A,Z,pe)},mt.useCallback=function(A,Z){return F.H.useCallback(A,Z)},mt.useContext=function(A){return F.H.useContext(A)},mt.useDebugValue=function(){},mt.useDeferredValue=function(A,Z){return F.H.useDeferredValue(A,Z)},mt.useEffect=function(A,Z){return F.H.useEffect(A,Z)},mt.useEffectEvent=function(A){return F.H.useEffectEvent(A)},mt.useId=function(){return F.H.useId()},mt.useImperativeHandle=function(A,Z,pe){return F.H.useImperativeHandle(A,Z,pe)},mt.useInsertionEffect=function(A,Z){return F.H.useInsertionEffect(A,Z)},mt.useLayoutEffect=function(A,Z){return F.H.useLayoutEffect(A,Z)},mt.useMemo=function(A,Z){return F.H.useMemo(A,Z)},mt.useOptimistic=function(A,Z){return F.H.useOptimistic(A,Z)},mt.useReducer=function(A,Z,pe){return F.H.useReducer(A,Z,pe)},mt.useRef=function(A){return F.H.useRef(A)},mt.useState=function(A){return F.H.useState(A)},mt.useSyncExternalStore=function(A,Z,pe){return F.H.useSyncExternalStore(A,Z,pe)},mt.useTransition=function(){return F.H.useTransition()},mt.version="19.2.8",mt}var Bp;function fh(){return Bp||(Bp=1,yf.exports=X1()),yf.exports}var b=fh();const Rn=dh(b);var xf={exports:{}},Kl={},bf={exports:{}},vf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function G1(){return $p||($p=1,(function(o){function n(N,ce){var W=N.length;N.push(ce);e:for(;0<W;){var be=W-1>>>1,De=N[be];if(0<c(De,ce))N[be]=ce,N[W]=De,W=be;else break e}}function i(N){return N.length===0?null:N[0]}function l(N){if(N.length===0)return null;var ce=N[0],W=N.pop();if(W!==ce){N[0]=W;e:for(var be=0,De=N.length,A=De>>>1;be<A;){var Z=2*(be+1)-1,pe=N[Z],je=Z+1,qe=N[je];if(0>c(pe,W))je<De&&0>c(qe,pe)?(N[be]=qe,N[je]=W,be=je):(N[be]=pe,N[Z]=W,be=Z);else if(je<De&&0>c(qe,W))N[be]=qe,N[je]=W,be=je;else break e}}return ce}function c(N,ce){var W=N.sortIndex-ce.sortIndex;return W!==0?W:N.id-ce.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var _=Date,g=_.now();o.unstable_now=function(){return _.now()-g}}var h=[],m=[],p=1,y=null,v=3,C=!1,k=!1,M=!1,L=!1,B=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function z(N){for(var ce=i(m);ce!==null;){if(ce.callback===null)l(m);else if(ce.startTime<=N)l(m),ce.sortIndex=ce.expirationTime,n(h,ce);else break;ce=i(m)}}function de(N){if(M=!1,z(N),!k)if(i(h)!==null)k=!0,he||(he=!0,K());else{var ce=i(m);ce!==null&&Se(de,ce.startTime-N)}}var he=!1,F=-1,le=5,ge=-1;function xe(){return L?!0:!(o.unstable_now()-ge<le)}function ue(){if(L=!1,he){var N=o.unstable_now();ge=N;var ce=!0;try{e:{k=!1,M&&(M=!1,J(F),F=-1),C=!0;var W=v;try{t:{for(z(N),y=i(h);y!==null&&!(y.expirationTime>N&&xe());){var be=y.callback;if(typeof be=="function"){y.callback=null,v=y.priorityLevel;var De=be(y.expirationTime<=N);if(N=o.unstable_now(),typeof De=="function"){y.callback=De,z(N),ce=!0;break t}y===i(h)&&l(h),z(N)}else l(h);y=i(h)}if(y!==null)ce=!0;else{var A=i(m);A!==null&&Se(de,A.startTime-N),ce=!1}}break e}finally{y=null,v=W,C=!1}ce=void 0}}finally{ce?K():he=!1}}}var K;if(typeof G=="function")K=function(){G(ue)};else if(typeof MessageChannel<"u"){var Xe=new MessageChannel,_e=Xe.port2;Xe.port1.onmessage=ue,K=function(){_e.postMessage(null)}}else K=function(){B(ue,0)};function Se(N,ce){F=B(function(){N(o.unstable_now())},ce)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(N){N.callback=null},o.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):le=0<N?Math.floor(1e3/N):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(N){switch(v){case 1:case 2:case 3:var ce=3;break;default:ce=v}var W=v;v=ce;try{return N()}finally{v=W}},o.unstable_requestPaint=function(){L=!0},o.unstable_runWithPriority=function(N,ce){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var W=v;v=N;try{return ce()}finally{v=W}},o.unstable_scheduleCallback=function(N,ce,W){var be=o.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?be+W:be):W=be,N){case 1:var De=-1;break;case 2:De=250;break;case 5:De=1073741823;break;case 4:De=1e4;break;default:De=5e3}return De=W+De,N={id:p++,callback:ce,priorityLevel:N,startTime:W,expirationTime:De,sortIndex:-1},W>be?(N.sortIndex=W,n(m,N),i(h)===null&&N===i(m)&&(M?(J(F),F=-1):M=!0,Se(de,W-be))):(N.sortIndex=De,n(h,N),k||C||(k=!0,he||(he=!0,K()))),N},o.unstable_shouldYield=xe,o.unstable_wrapCallback=function(N){var ce=v;return function(){var W=v;v=ce;try{return N.apply(this,arguments)}finally{v=W}}}})(vf)),vf}var Pp;function F1(){return Pp||(Pp=1,bf.exports=G1()),bf.exports}var wf={exports:{}},ss={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ip;function W1(){if(Ip)return ss;Ip=1;var o=fh();function n(h){var m="https://react.dev/errors/"+h;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var p=2;p<arguments.length;p++)m+="&args[]="+encodeURIComponent(arguments[p])}return"Minified React error #"+h+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var l={d:{f:i,r:function(){throw Error(n(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function u(h,m,p){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:y==null?null:""+y,children:h,containerInfo:m,implementation:p}}var _=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(h,m){if(h==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return ss.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,ss.createPortal=function(h,m){var p=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(n(299));return u(h,m,null,p)},ss.flushSync=function(h){var m=_.T,p=l.p;try{if(_.T=null,l.p=2,h)return h()}finally{_.T=m,l.p=p,l.d.f()}},ss.preconnect=function(h,m){typeof h=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,l.d.C(h,m))},ss.prefetchDNS=function(h){typeof h=="string"&&l.d.D(h)},ss.preinit=function(h,m){if(typeof h=="string"&&m&&typeof m.as=="string"){var p=m.as,y=g(p,m.crossOrigin),v=typeof m.integrity=="string"?m.integrity:void 0,C=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;p==="style"?l.d.S(h,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:y,integrity:v,fetchPriority:C}):p==="script"&&l.d.X(h,{crossOrigin:y,integrity:v,fetchPriority:C,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},ss.preinitModule=function(h,m){if(typeof h=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var p=g(m.as,m.crossOrigin);l.d.M(h,{crossOrigin:p,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&l.d.M(h)},ss.preload=function(h,m){if(typeof h=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var p=m.as,y=g(p,m.crossOrigin);l.d.L(h,p,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},ss.preloadModule=function(h,m){if(typeof h=="string")if(m){var p=g(m.as,m.crossOrigin);l.d.m(h,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:p,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else l.d.m(h)},ss.requestFormReset=function(h){l.d.r(h)},ss.unstable_batchedUpdates=function(h,m){return h(m)},ss.useFormState=function(h,m,p){return _.H.useFormState(h,m,p)},ss.useFormStatus=function(){return _.H.useHostTransitionStatus()},ss.version="19.2.8",ss}var Up;function D0(){if(Up)return wf.exports;Up=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(n){console.error(n)}}return o(),wf.exports=W1(),wf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp;function q1(){if(Hp)return Kl;Hp=1;var o=F1(),n=fh(),i=D0();function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)t+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var t=e,s=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(s=t.return),e=t.return;while(e)}return t.tag===3?s:null}function _(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(u(e)!==e)throw Error(l(188))}function m(e){var t=e.alternate;if(!t){if(t=u(e),t===null)throw Error(l(188));return t!==e?null:e}for(var s=e,a=t;;){var d=s.return;if(d===null)break;var f=d.alternate;if(f===null){if(a=d.return,a!==null){s=a;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===s)return h(d),e;if(f===a)return h(d),t;f=f.sibling}throw Error(l(188))}if(s.return!==a.return)s=d,a=f;else{for(var x=!1,w=d.child;w;){if(w===s){x=!0,s=d,a=f;break}if(w===a){x=!0,a=d,s=f;break}w=w.sibling}if(!x){for(w=f.child;w;){if(w===s){x=!0,s=f,a=d;break}if(w===a){x=!0,a=f,s=d;break}w=w.sibling}if(!x)throw Error(l(189))}}if(s.alternate!==a)throw Error(l(190))}if(s.tag!==3)throw Error(l(188));return s.stateNode.current===s?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var y=Object.assign,v=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),J=Symbol.for("react.consumer"),G=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),de=Symbol.for("react.suspense"),he=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),ge=Symbol.for("react.activity"),xe=Symbol.for("react.memo_cache_sentinel"),ue=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=ue&&e[ue]||e["@@iterator"],typeof e=="function"?e:null)}var Xe=Symbol.for("react.client.reference");function _e(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Xe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case M:return"Fragment";case B:return"Profiler";case L:return"StrictMode";case de:return"Suspense";case he:return"SuspenseList";case ge:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case G:return e.displayName||"Context";case J:return(e._context.displayName||"Context")+".Consumer";case z:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return t=e.displayName||null,t!==null?t:_e(e.type)||"Memo";case le:t=e._payload,e=e._init;try{return _e(e(t))}catch{}}return null}var Se=Array.isArray,N=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},be=[],De=-1;function A(e){return{current:e}}function Z(e){0>De||(e.current=be[De],be[De]=null,De--)}function pe(e,t){De++,be[De]=e.current,e.current=t}var je=A(null),qe=A(null),rt=A(null),dt=A(null);function en(e,t){switch(pe(rt,t),pe(qe,e),pe(je,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?sp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=sp(t),e=op(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Z(je),pe(je,e)}function Qe(){Z(je),Z(qe),Z(rt)}function $e(e){e.memoizedState!==null&&pe(dt,e);var t=je.current,s=op(t,e.type);t!==s&&(pe(qe,e),pe(je,s))}function pt(e){qe.current===e&&(Z(je),Z(qe)),dt.current===e&&(Z(dt),Gl._currentValue=W)}var Je,ut;function At(e){if(Je===void 0)try{throw Error()}catch(s){var t=s.stack.trim().match(/\n( *(at )?)/);Je=t&&t[1]||"",ut=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Je+e+ut}var dn=!1;function bn(e,t){if(!e||dn)return"";dn=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var ie=function(){throw Error()};if(Object.defineProperty(ie.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ie,[])}catch(q){var X=q}Reflect.construct(e,[],ie)}else{try{ie.call()}catch(q){X=q}e.call(ie.prototype)}}else{try{throw Error()}catch(q){X=q}(ie=e())&&typeof ie.catch=="function"&&ie.catch(function(){})}}catch(q){if(q&&X&&typeof q.stack=="string")return[q.stack,X.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=a.DetermineComponentFrameRoot(),x=f[0],w=f[1];if(x&&w){var R=x.split(`
`),H=w.split(`
`);for(d=a=0;a<R.length&&!R[a].includes("DetermineComponentFrameRoot");)a++;for(;d<H.length&&!H[d].includes("DetermineComponentFrameRoot");)d++;if(a===R.length||d===H.length)for(a=R.length-1,d=H.length-1;1<=a&&0<=d&&R[a]!==H[d];)d--;for(;1<=a&&0<=d;a--,d--)if(R[a]!==H[d]){if(a!==1||d!==1)do if(a--,d--,0>d||R[a]!==H[d]){var ee=`
`+R[a].replace(" at new "," at ");return e.displayName&&ee.includes("<anonymous>")&&(ee=ee.replace("<anonymous>",e.displayName)),ee}while(1<=a&&0<=d);break}}}finally{dn=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?At(s):""}function mn(e,t){switch(e.tag){case 26:case 27:case 5:return At(e.type);case 16:return At("Lazy");case 13:return e.child!==t&&t!==null?At("Suspense Fallback"):At("Suspense");case 19:return At("SuspenseList");case 0:case 15:return bn(e.type,!1);case 11:return bn(e.type.render,!1);case 1:return bn(e.type,!0);case 31:return At("Activity");default:return""}}function Q(e){try{var t="",s=null;do t+=mn(e,s),s=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Me=Object.prototype.hasOwnProperty,Fe=o.unstable_scheduleCallback,Ve=o.unstable_cancelCallback,nt=o.unstable_shouldYield,Ue=o.unstable_requestPaint,Te=o.unstable_now,ct=o.unstable_getCurrentPriorityLevel,St=o.unstable_ImmediatePriority,Ht=o.unstable_UserBlockingPriority,ze=o.unstable_NormalPriority,I=o.unstable_LowPriority,Y=o.unstable_IdlePriority,oe=o.log,re=o.unstable_setDisableYieldValue,Oe=null,ke=null;function me(e){if(typeof oe=="function"&&re(e),ke&&typeof ke.setStrictMode=="function")try{ke.setStrictMode(Oe,e)}catch{}}var it=Math.clz32?Math.clz32:st,ft=Math.log,jt=Math.LN2;function st(e){return e>>>=0,e===0?32:31-(ft(e)/jt|0)|0}var Ae=256,wt=262144,Et=4194304;function Wt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Re(e,t,s){var a=e.pendingLanes;if(a===0)return 0;var d=0,f=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var w=a&134217727;return w!==0?(a=w&~f,a!==0?d=Wt(a):(x&=w,x!==0?d=Wt(x):s||(s=w&~e,s!==0&&(d=Wt(s))))):(w=a&~f,w!==0?d=Wt(w):x!==0?d=Wt(x):s||(s=a&~e,s!==0&&(d=Wt(s)))),d===0?0:t!==0&&t!==d&&(t&f)===0&&(f=d&-d,s=t&-t,f>=s||f===32&&(s&4194048)!==0)?t:d}function yt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function xt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ht(){var e=Et;return Et<<=1,(Et&62914560)===0&&(Et=4194304),e}function fn(e){for(var t=[],s=0;31>s;s++)t.push(e);return t}function Ge(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Lt(e,t,s,a,d,f){var x=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var w=e.entanglements,R=e.expirationTimes,H=e.hiddenUpdates;for(s=x&~s;0<s;){var ee=31-it(s),ie=1<<ee;w[ee]=0,R[ee]=-1;var X=H[ee];if(X!==null)for(H[ee]=null,ee=0;ee<X.length;ee++){var q=X[ee];q!==null&&(q.lane&=-536870913)}s&=~ie}a!==0&&vn(e,a,0),f!==0&&d===0&&e.tag!==0&&(e.suspendedLanes|=f&~(x&~t))}function vn(e,t,s){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-it(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|s&261930}function Yn(e,t){var s=e.entangledLanes|=t;for(e=e.entanglements;s;){var a=31-it(s),d=1<<a;d&t|e[a]&t&&(e[a]|=t),s&=~d}}function In(e,t){var s=t&-t;return s=(s&42)!==0?1:oo(s),(s&(e.suspendedLanes|t))!==0?0:s}function oo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function vs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Zn(){var e=ce.p;return e!==0?e:(e=window.event,e===void 0?32:Ep(e.type))}function ln(e,t){var s=ce.p;try{return ce.p=e,t()}finally{ce.p=s}}var Dn=Math.random().toString(36).slice(2),Yt="__reactFiber$"+Dn,jn="__reactProps$"+Dn,Ee="__reactContainer$"+Dn,Jn="__reactEvents$"+Dn,el="__reactListeners$"+Dn,tl="__reactHandles$"+Dn,io="__reactResources$"+Dn,Ei="__reactMarker$"+Dn;function oa(e){delete e[Yt],delete e[jn],delete e[Jn],delete e[el],delete e[tl]}function Xo(e){var t=e[Yt];if(t)return t;for(var s=e.parentNode;s;){if(t=s[Ee]||s[Yt]){if(s=t.alternate,t.child!==null||s!==null&&s.child!==null)for(e=dp(e);e!==null;){if(s=e[Yt])return s;e=dp(e)}return t}e=s,s=e.parentNode}return null}function Go(e){if(e=e[Yt]||e[Ee]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Mi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(l(33))}function ao(e){var t=e[io];return t||(t=e[io]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Nn(e){e[Ei]=!0}var nl=new Set,Fo={};function Ns(e,t){Xn(e,t),Xn(e+"Capture",t)}function Xn(e,t){for(Fo[e]=t,e=0;e<t.length;e++)nl.add(t[e])}var ia=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),sl={},Wo={};function Ti(e){return Me.call(Wo,e)?!0:Me.call(sl,e)?!1:ia.test(e)?Wo[e]=!0:(sl[e]=!0,!1)}function lo(e,t,s){if(Ti(t))if(s===null)e.removeAttribute(t);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+s)}}function es(e,t,s){if(s===null)e.removeAttribute(t);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+s)}}function ws(e,t,s,a){if(a===null)e.removeAttribute(s);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(t,s,""+a)}}function rn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gr(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function bu(e,t,s){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,f=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return d.call(this)},set:function(x){s=""+x,f.call(this,x)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(x){s=""+x},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function aa(e){if(!e._valueTracker){var t=gr(e)?"checked":"value";e._valueTracker=bu(e,t,""+e[t])}}function vu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var s=t.getValue(),a="";return e&&(a=gr(e)?e.checked?"true":"false":e.value),e=a,e!==s?(t.setValue(e),!0):!1}function qo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var yr=/[\n"\\]/g;function as(e){return e.replace(yr,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ro(e,t,s,a,d,f,x,w){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),t!=null?x==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+rn(t)):e.value!==""+rn(t)&&(e.value=""+rn(t)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),t!=null?co(e,x,rn(t)):s!=null?co(e,x,rn(s)):a!=null&&e.removeAttribute("value"),d==null&&f!=null&&(e.defaultChecked=!!f),d!=null&&(e.checked=d&&typeof d!="function"&&typeof d!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+rn(w):e.removeAttribute("name")}function pn(e,t,s,a,d,f,x,w){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),t!=null||s!=null){if(!(f!=="submit"&&f!=="reset"||t!=null)){aa(e);return}s=s!=null?""+rn(s):"",t=t!=null?""+rn(t):s,w||t===e.value||(e.value=t),e.defaultValue=t}a=a??d,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=w?e.checked:!!a,e.defaultChecked=!!a,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),aa(e)}function co(e,t,s){t==="number"&&qo(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function Fn(e,t,s,a){if(e=e.options,t){t={};for(var d=0;d<s.length;d++)t["$"+s[d]]=!0;for(s=0;s<e.length;s++)d=t.hasOwnProperty("$"+e[s].value),e[s].selected!==d&&(e[s].selected=d),d&&a&&(e[s].defaultSelected=!0)}else{for(s=""+rn(s),t=null,d=0;d<e.length;d++){if(e[d].value===s){e[d].selected=!0,a&&(e[d].defaultSelected=!0);return}t!==null||e[d].disabled||(t=e[d])}t!==null&&(t.selected=!0)}}function Un(e,t,s){if(t!=null&&(t=""+rn(t),t!==e.value&&(e.value=t),s==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=s!=null?""+rn(s):""}function xr(e,t,s,a){if(t==null){if(a!=null){if(s!=null)throw Error(l(92));if(Se(a)){if(1<a.length)throw Error(l(93));a=a[0]}s=a}s==null&&(s=""),t=s}s=rn(t),e.defaultValue=s,a=e.textContent,a===s&&a!==""&&a!==null&&(e.value=a),aa(e)}function Qo(e,t){if(t){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=t;return}}e.textContent=t}var wu=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function kt(e,t,s){var a=t.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,s):typeof s!="number"||s===0||wu.has(t)?t==="float"?e.cssFloat=s:e[t]=(""+s).trim():e[t]=s+"px"}function br(e,t,s){if(t!=null&&typeof t!="object")throw Error(l(62));if(e=e.style,s!=null){for(var a in s)!s.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var d in t)a=t[d],t.hasOwnProperty(d)&&s[d]!==a&&kt(e,d,a)}else for(var f in t)t.hasOwnProperty(f)&&kt(e,f,t[f])}function hs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vr=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),wr=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ri(e){return wr.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Qs(){}var ol=null;function Vs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var on=null,uo=null;function il(e){var t=Go(e);if(t&&(e=t.stateNode)){var s=e[jn]||null;e:switch(e=t.stateNode,t.type){case"input":if(ro(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),t=s.name,s.type==="radio"&&t!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+as(""+t)+'"][type="radio"]'),t=0;t<s.length;t++){var a=s[t];if(a!==e&&a.form===e.form){var d=a[jn]||null;if(!d)throw Error(l(90));ro(a,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(t=0;t<s.length;t++)a=s[t],a.form===e.form&&vu(a)}break e;case"textarea":Un(e,s.value,s.defaultValue);break e;case"select":t=s.value,t!=null&&Fn(e,!!s.multiple,t,!1)}}}var ls=!1;function fo(e,t,s){if(ls)return e(t,s);ls=!0;try{var a=e(t);return a}finally{if(ls=!1,(on!==null||uo!==null)&&(gc(),on&&(t=on,e=uo,uo=on=null,il(t),e)))for(t=0;t<e.length;t++)il(e[t])}}function Bt(e,t){var s=e.stateNode;if(s===null)return null;var a=s[jn]||null;if(a===null)return null;s=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(l(231,t,typeof s));return s}var Ss=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ks=!1;if(Ss)try{var Vo={};Object.defineProperty(Vo,"passive",{get:function(){Ks=!0}}),window.addEventListener("test",Vo,Vo),window.removeEventListener("test",Vo,Vo)}catch{Ks=!1}var rs=null,la=null,Ko=null;function al(){if(Ko)return Ko;var e,t=la,s=t.length,a,d="value"in rs?rs.value:rs.textContent,f=d.length;for(e=0;e<s&&t[e]===d[e];e++);var x=s-e;for(a=1;a<=x&&t[s-a]===d[f-a];a++);return Ko=d.slice(e,1<a?1-a:void 0)}function ho(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ai(){return!0}function Di(){return!1}function On(e){function t(s,a,d,f,x){this._reactName=s,this._targetInst=d,this.type=a,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(s=e[w],this[w]=s?s(f):f[w]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ai:Di,this.isPropagationStopped=Di,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Ai)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Ai)},persist:function(){},isPersistent:Ai}),t}var Os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ra=On(Os),Ls=y({},Os,{view:0,detail:0}),Zs=On(Ls),ca,_o,ts,mo=y({},Ls,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:po,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ts&&(ts&&e.type==="mousemove"?(ca=e.screenX-ts.screenX,_o=e.screenY-ts.screenY):_o=ca=0,ts=e),ca)},movementY:function(e){return"movementY"in e?e.movementY:_o}}),Zo=On(mo),ua=y({},mo,{dataTransfer:0}),Sr=On(ua),da=y({},Ls,{relatedTarget:0}),fa=On(da),ll=y({},Os,{animationName:0,elapsedTime:0,pseudoElement:0}),Su=On(ll),kr=y({},Os,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cr=On(kr),Ni=y({},Os,{data:0}),et=On(Ni),rl={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jr={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ku={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cl(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ku[e])?!!t[e]:!1}function po(){return cl}var ha=y({},Ls,{key:function(e){if(e.key){var t=rl[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ho(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jr[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:po,charCode:function(e){return e.type==="keypress"?ho(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ho(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Er=On(ha),Mr=y({},mo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oi=On(Mr),ul=y({},Ls,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:po}),Tr=On(ul),_a=y({},Os,{propertyName:0,elapsedTime:0,pseudoElement:0}),zs=On(_a),Cu=y({},mo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dl=On(Cu),fl=y({},Os,{newState:0,oldState:0}),ma=On(fl),ju=[9,13,27,32],hl=Ss&&"CompositionEvent"in window,ks=null;Ss&&"documentMode"in document&&(ks=document.documentMode);var _l=Ss&&"TextEvent"in window&&!ks,pa=Ss&&(!hl||ks&&8<ks&&11>=ks),Rr=" ",Jo=!1;function Co(e,t){switch(e){case"keyup":return ju.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ar(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jo=!1;function Dr(e,t){switch(e){case"compositionend":return Ar(t);case"keypress":return t.which!==32?null:(Jo=!0,Rr);case"textInput":return e=t.data,e===Rr&&Jo?null:e;default:return null}}function Nr(e,t){if(jo)return e==="compositionend"||!hl&&Co(e,t)?(e=al(),Ko=la=rs=null,jo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return pa&&t.locale!=="ko"?null:t.data;default:return null}}var Or={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ml(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Or[e.type]:t==="textarea"}function pl(e,t,s,a){on?uo?uo.push(a):uo=[a]:on=a,t=kc(t,"onChange"),0<t.length&&(s=new ra("onChange","change",null,s,a),e.push({event:s,listeners:t}))}var ei=null,ti=null;function S(e){Km(e,0)}function E(e){var t=Mi(e);if(vu(t))return e}function D(e,t){if(e==="change")return t}var T=!1;if(Ss){var $;if(Ss){var V="oninput"in document;if(!V){var ye=document.createElement("div");ye.setAttribute("oninput","return;"),V=typeof ye.oninput=="function"}$=V}else $=!1;T=$&&(!document.documentMode||9<document.documentMode)}function ve(){ei&&(ei.detachEvent("onpropertychange",Ce),ti=ei=null)}function Ce(e){if(e.propertyName==="value"&&E(ti)){var t=[];pl(t,ti,e,Vs(e)),fo(S,t)}}function Pe(e,t,s){e==="focusin"?(ve(),ei=t,ti=s,ei.attachEvent("onpropertychange",Ce)):e==="focusout"&&ve()}function We(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return E(ti)}function at(e,t){if(e==="click")return E(t)}function bt(e,t){if(e==="input"||e==="change")return E(t)}function Ke(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var we=typeof Object.is=="function"?Object.is:Ke;function tn(e,t){if(we(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var s=Object.keys(e),a=Object.keys(t);if(s.length!==a.length)return!1;for(a=0;a<s.length;a++){var d=s[a];if(!Me.call(t,d)||!we(e[d],t[d]))return!1}return!0}function qt(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gn(e,t){var s=qt(e);e=0;for(var a;s;){if(s.nodeType===3){if(a=e+s.textContent.length,e<=t&&a>=t)return{node:s,offset:t-e};e=a}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=qt(s)}}function Dt(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Dt(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function hn(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=qo(e.document);t instanceof e.HTMLIFrameElement;){try{var s=typeof t.contentWindow.location.href=="string"}catch{s=!1}if(s)e=t.contentWindow;else break;t=qo(e.document)}return t}function ot(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var _t=Ss&&"documentMode"in document&&11>=document.documentMode,an=null,Qt=null,En=null,Wn=!1;function wn(e,t,s){var a=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Wn||an==null||an!==qo(a)||(a=an,"selectionStart"in a&&ot(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),En&&tn(En,a)||(En=a,a=kc(Qt,"onSelect"),0<a.length&&(t=new ra("onSelect","select",null,t,s),e.push({event:t,listeners:a}),t.target=an)))}function Cs(e,t){var s={};return s[e.toLowerCase()]=t.toLowerCase(),s["Webkit"+e]="webkit"+t,s["Moz"+e]="moz"+t,s}var _s={animationend:Cs("Animation","AnimationEnd"),animationiteration:Cs("Animation","AnimationIteration"),animationstart:Cs("Animation","AnimationStart"),transitionrun:Cs("Transition","TransitionRun"),transitionstart:Cs("Transition","TransitionStart"),transitioncancel:Cs("Transition","TransitionCancel"),transitionend:Cs("Transition","TransitionEnd")},Bs={},yn={};Ss&&(yn=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function ns(e){if(Bs[e])return Bs[e];if(!_s[e])return e;var t=_s[e],s;for(s in t)if(t.hasOwnProperty(s)&&s in yn)return Bs[e]=t[s];return e}var go=ns("animationend"),Lr=ns("animationiteration"),zr=ns("animationstart"),Eu=ns("transitionrun"),Mu=ns("transitionstart"),by=ns("transitioncancel"),Rh=ns("transitionend"),Ah=new Map,Tu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Tu.push("scrollEnd");function Js(e,t){Ah.set(e,t),Ns(t,[e])}var Br=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},$s=[],ga=0,Ru=0;function $r(){for(var e=ga,t=Ru=ga=0;t<e;){var s=$s[t];$s[t++]=null;var a=$s[t];$s[t++]=null;var d=$s[t];$s[t++]=null;var f=$s[t];if($s[t++]=null,a!==null&&d!==null){var x=a.pending;x===null?d.next=d:(d.next=x.next,x.next=d),a.pending=d}f!==0&&Dh(s,d,f)}}function Pr(e,t,s,a){$s[ga++]=e,$s[ga++]=t,$s[ga++]=s,$s[ga++]=a,Ru|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Au(e,t,s,a){return Pr(e,t,s,a),Ir(e)}function Li(e,t){return Pr(e,null,null,t),Ir(e)}function Dh(e,t,s){e.lanes|=s;var a=e.alternate;a!==null&&(a.lanes|=s);for(var d=!1,f=e.return;f!==null;)f.childLanes|=s,a=f.alternate,a!==null&&(a.childLanes|=s),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(d=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,d&&t!==null&&(d=31-it(s),e=f.hiddenUpdates,a=e[d],a===null?e[d]=[t]:a.push(t),t.lane=s|536870912),f):null}function Ir(e){if(50<$l)throw $l=0,Id=null,Error(l(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ya={};function vy(e,t,s,a){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function js(e,t,s,a){return new vy(e,t,s,a)}function Du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Eo(e,t){var s=e.alternate;return s===null?(s=js(e.tag,t,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=t,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,t=e.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function Nh(e,t){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,t=s.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ur(e,t,s,a,d,f){var x=0;if(a=e,typeof e=="function")Du(e)&&(x=1);else if(typeof e=="string")x=j1(e,s,je.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ge:return e=js(31,s,t,d),e.elementType=ge,e.lanes=f,e;case M:return zi(s.children,d,f,t);case L:x=8,d|=24;break;case B:return e=js(12,s,t,d|2),e.elementType=B,e.lanes=f,e;case de:return e=js(13,s,t,d),e.elementType=de,e.lanes=f,e;case he:return e=js(19,s,t,d),e.elementType=he,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case G:x=10;break e;case J:x=9;break e;case z:x=11;break e;case F:x=14;break e;case le:x=16,a=null;break e}x=29,s=Error(l(130,e===null?"null":typeof e,"")),a=null}return t=js(x,s,t,d),t.elementType=e,t.type=a,t.lanes=f,t}function zi(e,t,s,a){return e=js(7,e,a,t),e.lanes=s,e}function Nu(e,t,s){return e=js(6,e,null,t),e.lanes=s,e}function Oh(e){var t=js(18,null,null,0);return t.stateNode=e,t}function Ou(e,t,s){return t=js(4,e.children!==null?e.children:[],e.key,t),t.lanes=s,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Lh=new WeakMap;function Ps(e,t){if(typeof e=="object"&&e!==null){var s=Lh.get(e);return s!==void 0?s:(t={value:e,source:t,stack:Q(t)},Lh.set(e,t),t)}return{value:e,source:t,stack:Q(t)}}var xa=[],ba=0,Hr=null,gl=0,Is=[],Us=0,ni=null,yo=1,xo="";function Mo(e,t){xa[ba++]=gl,xa[ba++]=Hr,Hr=e,gl=t}function zh(e,t,s){Is[Us++]=yo,Is[Us++]=xo,Is[Us++]=ni,ni=e;var a=yo;e=xo;var d=32-it(a)-1;a&=~(1<<d),s+=1;var f=32-it(t)+d;if(30<f){var x=d-d%5;f=(a&(1<<x)-1).toString(32),a>>=x,d-=x,yo=1<<32-it(t)+d|s<<d|a,xo=f+e}else yo=1<<f|s<<d|a,xo=e}function Lu(e){e.return!==null&&(Mo(e,1),zh(e,1,0))}function zu(e){for(;e===Hr;)Hr=xa[--ba],xa[ba]=null,gl=xa[--ba],xa[ba]=null;for(;e===ni;)ni=Is[--Us],Is[Us]=null,xo=Is[--Us],Is[Us]=null,yo=Is[--Us],Is[Us]=null}function Bh(e,t){Is[Us++]=yo,Is[Us++]=xo,Is[Us++]=ni,yo=t.id,xo=t.overflow,ni=e}var qn=null,cn=null,zt=!1,si=null,Hs=!1,Bu=Error(l(519));function oi(e){var t=Error(l(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw yl(Ps(t,e)),Bu}function $h(e){var t=e.stateNode,s=e.type,a=e.memoizedProps;switch(t[Yt]=e,t[jn]=a,s){case"dialog":Tt("cancel",t),Tt("close",t);break;case"iframe":case"object":case"embed":Tt("load",t);break;case"video":case"audio":for(s=0;s<Il.length;s++)Tt(Il[s],t);break;case"source":Tt("error",t);break;case"img":case"image":case"link":Tt("error",t),Tt("load",t);break;case"details":Tt("toggle",t);break;case"input":Tt("invalid",t),pn(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Tt("invalid",t);break;case"textarea":Tt("invalid",t),xr(t,a.value,a.defaultValue,a.children)}s=a.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||t.textContent===""+s||a.suppressHydrationWarning===!0||tp(t.textContent,s)?(a.popover!=null&&(Tt("beforetoggle",t),Tt("toggle",t)),a.onScroll!=null&&Tt("scroll",t),a.onScrollEnd!=null&&Tt("scrollend",t),a.onClick!=null&&(t.onclick=Qs),t=!0):t=!1,t||oi(e,!0)}function Ph(e){for(qn=e.return;qn;)switch(qn.tag){case 5:case 31:case 13:Hs=!1;return;case 27:case 3:Hs=!0;return;default:qn=qn.return}}function va(e){if(e!==qn)return!1;if(!zt)return Ph(e),zt=!0,!1;var t=e.tag,s;if((s=t!==3&&t!==27)&&((s=t===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||tf(e.type,e.memoizedProps)),s=!s),s&&cn&&oi(e),Ph(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));cn=up(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));cn=up(e)}else t===27?(t=cn,yi(e.type)?(e=lf,lf=null,cn=e):cn=t):cn=qn?Xs(e.stateNode.nextSibling):null;return!0}function Bi(){cn=qn=null,zt=!1}function $u(){var e=si;return e!==null&&(ys===null?ys=e:ys.push.apply(ys,e),si=null),e}function yl(e){si===null?si=[e]:si.push(e)}var Pu=A(null),$i=null,To=null;function ii(e,t,s){pe(Pu,t._currentValue),t._currentValue=s}function Ro(e){e._currentValue=Pu.current,Z(Pu)}function Iu(e,t,s){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===s)break;e=e.return}}function Uu(e,t,s,a){var d=e.child;for(d!==null&&(d.return=e);d!==null;){var f=d.dependencies;if(f!==null){var x=d.child;f=f.firstContext;e:for(;f!==null;){var w=f;f=d;for(var R=0;R<t.length;R++)if(w.context===t[R]){f.lanes|=s,w=f.alternate,w!==null&&(w.lanes|=s),Iu(f.return,s,e),a||(x=null);break e}f=w.next}}else if(d.tag===18){if(x=d.return,x===null)throw Error(l(341));x.lanes|=s,f=x.alternate,f!==null&&(f.lanes|=s),Iu(x,s,e),x=null}else x=d.child;if(x!==null)x.return=d;else for(x=d;x!==null;){if(x===e){x=null;break}if(d=x.sibling,d!==null){d.return=x.return,x=d;break}x=x.return}d=x}}function wa(e,t,s,a){e=null;for(var d=t,f=!1;d!==null;){if(!f){if((d.flags&524288)!==0)f=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var x=d.alternate;if(x===null)throw Error(l(387));if(x=x.memoizedProps,x!==null){var w=d.type;we(d.pendingProps.value,x.value)||(e!==null?e.push(w):e=[w])}}else if(d===dt.current){if(x=d.alternate,x===null)throw Error(l(387));x.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(e!==null?e.push(Gl):e=[Gl])}d=d.return}e!==null&&Uu(t,e,s,a),t.flags|=262144}function Yr(e){for(e=e.firstContext;e!==null;){if(!we(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Pi(e){$i=e,To=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Qn(e){return Ih($i,e)}function Xr(e,t){return $i===null&&Pi(e),Ih(e,t)}function Ih(e,t){var s=t._currentValue;if(t={context:t,memoizedValue:s,next:null},To===null){if(e===null)throw Error(l(308));To=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else To=To.next=t;return s}var wy=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(s,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(s){return s()})}},Sy=o.unstable_scheduleCallback,ky=o.unstable_NormalPriority,Ln={$$typeof:G,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hu(){return{controller:new wy,data:new Map,refCount:0}}function xl(e){e.refCount--,e.refCount===0&&Sy(ky,function(){e.controller.abort()})}var bl=null,Yu=0,Sa=0,ka=null;function Cy(e,t){if(bl===null){var s=bl=[];Yu=0,Sa=Fd(),ka={status:"pending",value:void 0,then:function(a){s.push(a)}}}return Yu++,t.then(Uh,Uh),t}function Uh(){if(--Yu===0&&bl!==null){ka!==null&&(ka.status="fulfilled");var e=bl;bl=null,Sa=0,ka=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function jy(e,t){var s=[],a={status:"pending",value:null,reason:null,then:function(d){s.push(d)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var d=0;d<s.length;d++)(0,s[d])(t)},function(d){for(a.status="rejected",a.reason=d,d=0;d<s.length;d++)(0,s[d])(void 0)}),a}var Hh=N.S;N.S=function(e,t){Cm=Te(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Cy(e,t),Hh!==null&&Hh(e,t)};var Ii=A(null);function Xu(){var e=Ii.current;return e!==null?e:nn.pooledCache}function Gr(e,t){t===null?pe(Ii,Ii.current):pe(Ii,t.pool)}function Yh(){var e=Xu();return e===null?null:{parent:Ln._currentValue,pool:e}}var Ca=Error(l(460)),Gu=Error(l(474)),Fr=Error(l(542)),Wr={then:function(){}};function Xh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Gh(e,t,s){switch(s=e[s],s===void 0?e.push(t):s!==t&&(t.then(Qs,Qs),t=s),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Wh(e),e;default:if(typeof t.status=="string")t.then(Qs,Qs);else{if(e=nn,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var d=t;d.status="fulfilled",d.value=a}},function(a){if(t.status==="pending"){var d=t;d.status="rejected",d.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Wh(e),e}throw Hi=t,Ca}}function Ui(e){try{var t=e._init;return t(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Hi=s,Ca):s}}var Hi=null;function Fh(){if(Hi===null)throw Error(l(459));var e=Hi;return Hi=null,e}function Wh(e){if(e===Ca||e===Fr)throw Error(l(483))}var ja=null,vl=0;function qr(e){var t=vl;return vl+=1,ja===null&&(ja=[]),Gh(ja,e,t)}function wl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Qr(e,t){throw t.$$typeof===v?Error(l(525)):(e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function qh(e){function t(P,O){if(e){var U=P.deletions;U===null?(P.deletions=[O],P.flags|=16):U.push(O)}}function s(P,O){if(!e)return null;for(;O!==null;)t(P,O),O=O.sibling;return null}function a(P){for(var O=new Map;P!==null;)P.key!==null?O.set(P.key,P):O.set(P.index,P),P=P.sibling;return O}function d(P,O){return P=Eo(P,O),P.index=0,P.sibling=null,P}function f(P,O,U){return P.index=U,e?(U=P.alternate,U!==null?(U=U.index,U<O?(P.flags|=67108866,O):U):(P.flags|=67108866,O)):(P.flags|=1048576,O)}function x(P){return e&&P.alternate===null&&(P.flags|=67108866),P}function w(P,O,U,se){return O===null||O.tag!==6?(O=Nu(U,P.mode,se),O.return=P,O):(O=d(O,U),O.return=P,O)}function R(P,O,U,se){var Ze=U.type;return Ze===M?ee(P,O,U.props.children,se,U.key):O!==null&&(O.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===le&&Ui(Ze)===O.type)?(O=d(O,U.props),wl(O,U),O.return=P,O):(O=Ur(U.type,U.key,U.props,null,P.mode,se),wl(O,U),O.return=P,O)}function H(P,O,U,se){return O===null||O.tag!==4||O.stateNode.containerInfo!==U.containerInfo||O.stateNode.implementation!==U.implementation?(O=Ou(U,P.mode,se),O.return=P,O):(O=d(O,U.children||[]),O.return=P,O)}function ee(P,O,U,se,Ze){return O===null||O.tag!==7?(O=zi(U,P.mode,se,Ze),O.return=P,O):(O=d(O,U),O.return=P,O)}function ie(P,O,U){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=Nu(""+O,P.mode,U),O.return=P,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case C:return U=Ur(O.type,O.key,O.props,null,P.mode,U),wl(U,O),U.return=P,U;case k:return O=Ou(O,P.mode,U),O.return=P,O;case le:return O=Ui(O),ie(P,O,U)}if(Se(O)||K(O))return O=zi(O,P.mode,U,null),O.return=P,O;if(typeof O.then=="function")return ie(P,qr(O),U);if(O.$$typeof===G)return ie(P,Xr(P,O),U);Qr(P,O)}return null}function X(P,O,U,se){var Ze=O!==null?O.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return Ze!==null?null:w(P,O,""+U,se);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case C:return U.key===Ze?R(P,O,U,se):null;case k:return U.key===Ze?H(P,O,U,se):null;case le:return U=Ui(U),X(P,O,U,se)}if(Se(U)||K(U))return Ze!==null?null:ee(P,O,U,se,null);if(typeof U.then=="function")return X(P,O,qr(U),se);if(U.$$typeof===G)return X(P,O,Xr(P,U),se);Qr(P,U)}return null}function q(P,O,U,se,Ze){if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return P=P.get(U)||null,w(O,P,""+se,Ze);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case C:return P=P.get(se.key===null?U:se.key)||null,R(O,P,se,Ze);case k:return P=P.get(se.key===null?U:se.key)||null,H(O,P,se,Ze);case le:return se=Ui(se),q(P,O,U,se,Ze)}if(Se(se)||K(se))return P=P.get(U)||null,ee(O,P,se,Ze,null);if(typeof se.then=="function")return q(P,O,U,qr(se),Ze);if(se.$$typeof===G)return q(P,O,U,Xr(O,se),Ze);Qr(O,se)}return null}function Be(P,O,U,se){for(var Ze=null,$t=null,He=O,vt=O=0,Ot=null;He!==null&&vt<U.length;vt++){He.index>vt?(Ot=He,He=null):Ot=He.sibling;var Pt=X(P,He,U[vt],se);if(Pt===null){He===null&&(He=Ot);break}e&&He&&Pt.alternate===null&&t(P,He),O=f(Pt,O,vt),$t===null?Ze=Pt:$t.sibling=Pt,$t=Pt,He=Ot}if(vt===U.length)return s(P,He),zt&&Mo(P,vt),Ze;if(He===null){for(;vt<U.length;vt++)He=ie(P,U[vt],se),He!==null&&(O=f(He,O,vt),$t===null?Ze=He:$t.sibling=He,$t=He);return zt&&Mo(P,vt),Ze}for(He=a(He);vt<U.length;vt++)Ot=q(He,P,vt,U[vt],se),Ot!==null&&(e&&Ot.alternate!==null&&He.delete(Ot.key===null?vt:Ot.key),O=f(Ot,O,vt),$t===null?Ze=Ot:$t.sibling=Ot,$t=Ot);return e&&He.forEach(function(Si){return t(P,Si)}),zt&&Mo(P,vt),Ze}function lt(P,O,U,se){if(U==null)throw Error(l(151));for(var Ze=null,$t=null,He=O,vt=O=0,Ot=null,Pt=U.next();He!==null&&!Pt.done;vt++,Pt=U.next()){He.index>vt?(Ot=He,He=null):Ot=He.sibling;var Si=X(P,He,Pt.value,se);if(Si===null){He===null&&(He=Ot);break}e&&He&&Si.alternate===null&&t(P,He),O=f(Si,O,vt),$t===null?Ze=Si:$t.sibling=Si,$t=Si,He=Ot}if(Pt.done)return s(P,He),zt&&Mo(P,vt),Ze;if(He===null){for(;!Pt.done;vt++,Pt=U.next())Pt=ie(P,Pt.value,se),Pt!==null&&(O=f(Pt,O,vt),$t===null?Ze=Pt:$t.sibling=Pt,$t=Pt);return zt&&Mo(P,vt),Ze}for(He=a(He);!Pt.done;vt++,Pt=U.next())Pt=q(He,P,vt,Pt.value,se),Pt!==null&&(e&&Pt.alternate!==null&&He.delete(Pt.key===null?vt:Pt.key),O=f(Pt,O,vt),$t===null?Ze=Pt:$t.sibling=Pt,$t=Pt);return e&&He.forEach(function(B1){return t(P,B1)}),zt&&Mo(P,vt),Ze}function Zt(P,O,U,se){if(typeof U=="object"&&U!==null&&U.type===M&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case C:e:{for(var Ze=U.key;O!==null;){if(O.key===Ze){if(Ze=U.type,Ze===M){if(O.tag===7){s(P,O.sibling),se=d(O,U.props.children),se.return=P,P=se;break e}}else if(O.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===le&&Ui(Ze)===O.type){s(P,O.sibling),se=d(O,U.props),wl(se,U),se.return=P,P=se;break e}s(P,O);break}else t(P,O);O=O.sibling}U.type===M?(se=zi(U.props.children,P.mode,se,U.key),se.return=P,P=se):(se=Ur(U.type,U.key,U.props,null,P.mode,se),wl(se,U),se.return=P,P=se)}return x(P);case k:e:{for(Ze=U.key;O!==null;){if(O.key===Ze)if(O.tag===4&&O.stateNode.containerInfo===U.containerInfo&&O.stateNode.implementation===U.implementation){s(P,O.sibling),se=d(O,U.children||[]),se.return=P,P=se;break e}else{s(P,O);break}else t(P,O);O=O.sibling}se=Ou(U,P.mode,se),se.return=P,P=se}return x(P);case le:return U=Ui(U),Zt(P,O,U,se)}if(Se(U))return Be(P,O,U,se);if(K(U)){if(Ze=K(U),typeof Ze!="function")throw Error(l(150));return U=Ze.call(U),lt(P,O,U,se)}if(typeof U.then=="function")return Zt(P,O,qr(U),se);if(U.$$typeof===G)return Zt(P,O,Xr(P,U),se);Qr(P,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,O!==null&&O.tag===6?(s(P,O.sibling),se=d(O,U),se.return=P,P=se):(s(P,O),se=Nu(U,P.mode,se),se.return=P,P=se),x(P)):s(P,O)}return function(P,O,U,se){try{vl=0;var Ze=Zt(P,O,U,se);return ja=null,Ze}catch(He){if(He===Ca||He===Fr)throw He;var $t=js(29,He,null,P.mode);return $t.lanes=se,$t.return=P,$t}finally{}}}var Yi=qh(!0),Qh=qh(!1),ai=!1;function Fu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function li(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ri(e,t,s){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(It&2)!==0){var d=a.pending;return d===null?t.next=t:(t.next=d.next,d.next=t),a.pending=t,t=Ir(e),Dh(e,null,s),t}return Pr(e,a,t,s),Ir(e)}function Sl(e,t,s){if(t=t.updateQueue,t!==null&&(t=t.shared,(s&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,s|=a,t.lanes=s,Yn(e,s)}}function qu(e,t){var s=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,s===a)){var d=null,f=null;if(s=s.firstBaseUpdate,s!==null){do{var x={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};f===null?d=f=x:f=f.next=x,s=s.next}while(s!==null);f===null?d=f=t:f=f.next=t}else d=f=t;s={baseState:a.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:a.shared,callbacks:a.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=t:e.next=t,s.lastBaseUpdate=t}var Qu=!1;function kl(){if(Qu){var e=ka;if(e!==null)throw e}}function Cl(e,t,s,a){Qu=!1;var d=e.updateQueue;ai=!1;var f=d.firstBaseUpdate,x=d.lastBaseUpdate,w=d.shared.pending;if(w!==null){d.shared.pending=null;var R=w,H=R.next;R.next=null,x===null?f=H:x.next=H,x=R;var ee=e.alternate;ee!==null&&(ee=ee.updateQueue,w=ee.lastBaseUpdate,w!==x&&(w===null?ee.firstBaseUpdate=H:w.next=H,ee.lastBaseUpdate=R))}if(f!==null){var ie=d.baseState;x=0,ee=H=R=null,w=f;do{var X=w.lane&-536870913,q=X!==w.lane;if(q?(Nt&X)===X:(a&X)===X){X!==0&&X===Sa&&(Qu=!0),ee!==null&&(ee=ee.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var Be=e,lt=w;X=t;var Zt=s;switch(lt.tag){case 1:if(Be=lt.payload,typeof Be=="function"){ie=Be.call(Zt,ie,X);break e}ie=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=lt.payload,X=typeof Be=="function"?Be.call(Zt,ie,X):Be,X==null)break e;ie=y({},ie,X);break e;case 2:ai=!0}}X=w.callback,X!==null&&(e.flags|=64,q&&(e.flags|=8192),q=d.callbacks,q===null?d.callbacks=[X]:q.push(X))}else q={lane:X,tag:w.tag,payload:w.payload,callback:w.callback,next:null},ee===null?(H=ee=q,R=ie):ee=ee.next=q,x|=X;if(w=w.next,w===null){if(w=d.shared.pending,w===null)break;q=w,w=q.next,q.next=null,d.lastBaseUpdate=q,d.shared.pending=null}}while(!0);ee===null&&(R=ie),d.baseState=R,d.firstBaseUpdate=H,d.lastBaseUpdate=ee,f===null&&(d.shared.lanes=0),hi|=x,e.lanes=x,e.memoizedState=ie}}function Vh(e,t){if(typeof e!="function")throw Error(l(191,e));e.call(t)}function Kh(e,t){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)Vh(s[e],t)}var Ea=A(null),Vr=A(0);function Zh(e,t){e=Po,pe(Vr,e),pe(Ea,t),Po=e|t.baseLanes}function Vu(){pe(Vr,Po),pe(Ea,Ea.current)}function Ku(){Po=Vr.current,Z(Ea),Z(Vr)}var Es=A(null),Ys=null;function ci(e){var t=e.alternate;pe(Mn,Mn.current&1),pe(Es,e),Ys===null&&(t===null||Ea.current!==null||t.memoizedState!==null)&&(Ys=e)}function Zu(e){pe(Mn,Mn.current),pe(Es,e),Ys===null&&(Ys=e)}function Jh(e){e.tag===22?(pe(Mn,Mn.current),pe(Es,e),Ys===null&&(Ys=e)):ui()}function ui(){pe(Mn,Mn.current),pe(Es,Es.current)}function Ms(e){Z(Es),Ys===e&&(Ys=null),Z(Mn)}var Mn=A(0);function Kr(e){for(var t=e;t!==null;){if(t.tag===13){var s=t.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||of(s)||af(s)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ao=0,gt=null,Vt=null,zn=null,Zr=!1,Ma=!1,Xi=!1,Jr=0,jl=0,Ta=null,Ey=0;function Sn(){throw Error(l(321))}function Ju(e,t){if(t===null)return!1;for(var s=0;s<t.length&&s<e.length;s++)if(!we(e[s],t[s]))return!1;return!0}function ed(e,t,s,a,d,f){return Ao=f,gt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,N.H=e===null||e.memoizedState===null?z_:md,Xi=!1,f=s(a,d),Xi=!1,Ma&&(f=t_(t,s,a,d)),e_(e),f}function e_(e){N.H=Tl;var t=Vt!==null&&Vt.next!==null;if(Ao=0,zn=Vt=gt=null,Zr=!1,jl=0,Ta=null,t)throw Error(l(300));e===null||Bn||(e=e.dependencies,e!==null&&Yr(e)&&(Bn=!0))}function t_(e,t,s,a){gt=e;var d=0;do{if(Ma&&(Ta=null),jl=0,Ma=!1,25<=d)throw Error(l(301));if(d+=1,zn=Vt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}N.H=B_,f=t(s,a)}while(Ma);return f}function My(){var e=N.H,t=e.useState()[0];return t=typeof t.then=="function"?El(t):t,e=e.useState()[0],(Vt!==null?Vt.memoizedState:null)!==e&&(gt.flags|=1024),t}function td(){var e=Jr!==0;return Jr=0,e}function nd(e,t,s){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s}function sd(e){if(Zr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Zr=!1}Ao=0,zn=Vt=gt=null,Ma=!1,jl=Jr=0,Ta=null}function cs(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zn===null?gt.memoizedState=zn=e:zn=zn.next=e,zn}function Tn(){if(Vt===null){var e=gt.alternate;e=e!==null?e.memoizedState:null}else e=Vt.next;var t=zn===null?gt.memoizedState:zn.next;if(t!==null)zn=t,Vt=e;else{if(e===null)throw gt.alternate===null?Error(l(467)):Error(l(310));Vt=e,e={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},zn===null?gt.memoizedState=zn=e:zn=zn.next=e}return zn}function ec(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function El(e){var t=jl;return jl+=1,Ta===null&&(Ta=[]),e=Gh(Ta,e,t),t=gt,(zn===null?t.memoizedState:zn.next)===null&&(t=t.alternate,N.H=t===null||t.memoizedState===null?z_:md),e}function tc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return El(e);if(e.$$typeof===G)return Qn(e)}throw Error(l(438,String(e)))}function od(e){var t=null,s=gt.updateQueue;if(s!==null&&(t=s.memoCache),t==null){var a=gt.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(d){return d.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),s===null&&(s=ec(),gt.updateQueue=s),s.memoCache=t,s=t.data[t.index],s===void 0)for(s=t.data[t.index]=Array(e),a=0;a<e;a++)s[a]=xe;return t.index++,s}function Do(e,t){return typeof t=="function"?t(e):t}function nc(e){var t=Tn();return id(t,Vt,e)}function id(e,t,s){var a=e.queue;if(a===null)throw Error(l(311));a.lastRenderedReducer=s;var d=e.baseQueue,f=a.pending;if(f!==null){if(d!==null){var x=d.next;d.next=f.next,f.next=x}t.baseQueue=d=f,a.pending=null}if(f=e.baseState,d===null)e.memoizedState=f;else{t=d.next;var w=x=null,R=null,H=t,ee=!1;do{var ie=H.lane&-536870913;if(ie!==H.lane?(Nt&ie)===ie:(Ao&ie)===ie){var X=H.revertLane;if(X===0)R!==null&&(R=R.next={lane:0,revertLane:0,gesture:null,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null}),ie===Sa&&(ee=!0);else if((Ao&X)===X){H=H.next,X===Sa&&(ee=!0);continue}else ie={lane:0,revertLane:H.revertLane,gesture:null,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},R===null?(w=R=ie,x=f):R=R.next=ie,gt.lanes|=X,hi|=X;ie=H.action,Xi&&s(f,ie),f=H.hasEagerState?H.eagerState:s(f,ie)}else X={lane:ie,revertLane:H.revertLane,gesture:H.gesture,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},R===null?(w=R=X,x=f):R=R.next=X,gt.lanes|=ie,hi|=ie;H=H.next}while(H!==null&&H!==t);if(R===null?x=f:R.next=w,!we(f,e.memoizedState)&&(Bn=!0,ee&&(s=ka,s!==null)))throw s;e.memoizedState=f,e.baseState=x,e.baseQueue=R,a.lastRenderedState=f}return d===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function ad(e){var t=Tn(),s=t.queue;if(s===null)throw Error(l(311));s.lastRenderedReducer=e;var a=s.dispatch,d=s.pending,f=t.memoizedState;if(d!==null){s.pending=null;var x=d=d.next;do f=e(f,x.action),x=x.next;while(x!==d);we(f,t.memoizedState)||(Bn=!0),t.memoizedState=f,t.baseQueue===null&&(t.baseState=f),s.lastRenderedState=f}return[f,a]}function n_(e,t,s){var a=gt,d=Tn(),f=zt;if(f){if(s===void 0)throw Error(l(407));s=s()}else s=t();var x=!we((Vt||d).memoizedState,s);if(x&&(d.memoizedState=s,Bn=!0),d=d.queue,cd(i_.bind(null,a,d,e),[e]),d.getSnapshot!==t||x||zn!==null&&zn.memoizedState.tag&1){if(a.flags|=2048,Ra(9,{destroy:void 0},o_.bind(null,a,d,s,t),null),nn===null)throw Error(l(349));f||(Ao&127)!==0||s_(a,t,s)}return s}function s_(e,t,s){e.flags|=16384,e={getSnapshot:t,value:s},t=gt.updateQueue,t===null?(t=ec(),gt.updateQueue=t,t.stores=[e]):(s=t.stores,s===null?t.stores=[e]:s.push(e))}function o_(e,t,s,a){t.value=s,t.getSnapshot=a,a_(t)&&l_(e)}function i_(e,t,s){return s(function(){a_(t)&&l_(e)})}function a_(e){var t=e.getSnapshot;e=e.value;try{var s=t();return!we(e,s)}catch{return!0}}function l_(e){var t=Li(e,2);t!==null&&xs(t,e,2)}function ld(e){var t=cs();if(typeof e=="function"){var s=e;if(e=s(),Xi){me(!0);try{s()}finally{me(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Do,lastRenderedState:e},t}function r_(e,t,s,a){return e.baseState=s,id(e,Vt,typeof a=="function"?a:Do)}function Ty(e,t,s,a,d){if(ic(e))throw Error(l(485));if(e=t.action,e!==null){var f={payload:d,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};N.T!==null?s(!0):f.isTransition=!1,a(f),s=t.pending,s===null?(f.next=t.pending=f,c_(t,f)):(f.next=s.next,t.pending=s.next=f)}}function c_(e,t){var s=t.action,a=t.payload,d=e.state;if(t.isTransition){var f=N.T,x={};N.T=x;try{var w=s(d,a),R=N.S;R!==null&&R(x,w),u_(e,t,w)}catch(H){rd(e,t,H)}finally{f!==null&&x.types!==null&&(f.types=x.types),N.T=f}}else try{f=s(d,a),u_(e,t,f)}catch(H){rd(e,t,H)}}function u_(e,t,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(a){d_(e,t,a)},function(a){return rd(e,t,a)}):d_(e,t,s)}function d_(e,t,s){t.status="fulfilled",t.value=s,f_(t),e.state=s,t=e.pending,t!==null&&(s=t.next,s===t?e.pending=null:(s=s.next,t.next=s,c_(e,s)))}function rd(e,t,s){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=s,f_(t),t=t.next;while(t!==a)}e.action=null}function f_(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function h_(e,t){return t}function __(e,t){if(zt){var s=nn.formState;if(s!==null){e:{var a=gt;if(zt){if(cn){t:{for(var d=cn,f=Hs;d.nodeType!==8;){if(!f){d=null;break t}if(d=Xs(d.nextSibling),d===null){d=null;break t}}f=d.data,d=f==="F!"||f==="F"?d:null}if(d){cn=Xs(d.nextSibling),a=d.data==="F!";break e}}oi(a)}a=!1}a&&(t=s[0])}}return s=cs(),s.memoizedState=s.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:h_,lastRenderedState:t},s.queue=a,s=N_.bind(null,gt,a),a.dispatch=s,a=ld(!1),f=_d.bind(null,gt,!1,a.queue),a=cs(),d={state:t,dispatch:null,action:e,pending:null},a.queue=d,s=Ty.bind(null,gt,d,f,s),d.dispatch=s,a.memoizedState=e,[t,s,!1]}function m_(e){var t=Tn();return p_(t,Vt,e)}function p_(e,t,s){if(t=id(e,t,h_)[0],e=nc(Do)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=El(t)}catch(x){throw x===Ca?Fr:x}else a=t;t=Tn();var d=t.queue,f=d.dispatch;return s!==t.memoizedState&&(gt.flags|=2048,Ra(9,{destroy:void 0},Ry.bind(null,d,s),null)),[a,f,e]}function Ry(e,t){e.action=t}function g_(e){var t=Tn(),s=Vt;if(s!==null)return p_(t,s,e);Tn(),t=t.memoizedState,s=Tn();var a=s.queue.dispatch;return s.memoizedState=e,[t,a,!1]}function Ra(e,t,s,a){return e={tag:e,create:s,deps:a,inst:t,next:null},t=gt.updateQueue,t===null&&(t=ec(),gt.updateQueue=t),s=t.lastEffect,s===null?t.lastEffect=e.next=e:(a=s.next,s.next=e,e.next=a,t.lastEffect=e),e}function y_(){return Tn().memoizedState}function sc(e,t,s,a){var d=cs();gt.flags|=e,d.memoizedState=Ra(1|t,{destroy:void 0},s,a===void 0?null:a)}function oc(e,t,s,a){var d=Tn();a=a===void 0?null:a;var f=d.memoizedState.inst;Vt!==null&&a!==null&&Ju(a,Vt.memoizedState.deps)?d.memoizedState=Ra(t,f,s,a):(gt.flags|=e,d.memoizedState=Ra(1|t,f,s,a))}function x_(e,t){sc(8390656,8,e,t)}function cd(e,t){oc(2048,8,e,t)}function Ay(e){gt.flags|=4;var t=gt.updateQueue;if(t===null)t=ec(),gt.updateQueue=t,t.events=[e];else{var s=t.events;s===null?t.events=[e]:s.push(e)}}function b_(e){var t=Tn().memoizedState;return Ay({ref:t,nextImpl:e}),function(){if((It&2)!==0)throw Error(l(440));return t.impl.apply(void 0,arguments)}}function v_(e,t){return oc(4,2,e,t)}function w_(e,t){return oc(4,4,e,t)}function S_(e,t){if(typeof t=="function"){e=e();var s=t(e);return function(){typeof s=="function"?s():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function k_(e,t,s){s=s!=null?s.concat([e]):null,oc(4,4,S_.bind(null,t,e),s)}function ud(){}function C_(e,t){var s=Tn();t=t===void 0?null:t;var a=s.memoizedState;return t!==null&&Ju(t,a[1])?a[0]:(s.memoizedState=[e,t],e)}function j_(e,t){var s=Tn();t=t===void 0?null:t;var a=s.memoizedState;if(t!==null&&Ju(t,a[1]))return a[0];if(a=e(),Xi){me(!0);try{e()}finally{me(!1)}}return s.memoizedState=[a,t],a}function dd(e,t,s){return s===void 0||(Ao&1073741824)!==0&&(Nt&261930)===0?e.memoizedState=t:(e.memoizedState=s,e=Em(),gt.lanes|=e,hi|=e,s)}function E_(e,t,s,a){return we(s,t)?s:Ea.current!==null?(e=dd(e,s,a),we(e,t)||(Bn=!0),e):(Ao&42)===0||(Ao&1073741824)!==0&&(Nt&261930)===0?(Bn=!0,e.memoizedState=s):(e=Em(),gt.lanes|=e,hi|=e,t)}function M_(e,t,s,a,d){var f=ce.p;ce.p=f!==0&&8>f?f:8;var x=N.T,w={};N.T=w,_d(e,!1,t,s);try{var R=d(),H=N.S;if(H!==null&&H(w,R),R!==null&&typeof R=="object"&&typeof R.then=="function"){var ee=jy(R,a);Ml(e,t,ee,As(e))}else Ml(e,t,a,As(e))}catch(ie){Ml(e,t,{then:function(){},status:"rejected",reason:ie},As())}finally{ce.p=f,x!==null&&w.types!==null&&(x.types=w.types),N.T=x}}function Dy(){}function fd(e,t,s,a){if(e.tag!==5)throw Error(l(476));var d=T_(e).queue;M_(e,d,t,W,s===null?Dy:function(){return R_(e),s(a)})}function T_(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Do,lastRenderedState:W},next:null};var s={};return t.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Do,lastRenderedState:s},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function R_(e){var t=T_(e);t.next===null&&(t=e.alternate.memoizedState),Ml(e,t.next.queue,{},As())}function hd(){return Qn(Gl)}function A_(){return Tn().memoizedState}function D_(){return Tn().memoizedState}function Ny(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var s=As();e=li(s);var a=ri(t,e,s);a!==null&&(xs(a,t,s),Sl(a,t,s)),t={cache:Hu()},e.payload=t;return}t=t.return}}function Oy(e,t,s){var a=As();s={lane:a,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},ic(e)?O_(t,s):(s=Au(e,t,s,a),s!==null&&(xs(s,e,a),L_(s,t,a)))}function N_(e,t,s){var a=As();Ml(e,t,s,a)}function Ml(e,t,s,a){var d={lane:a,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(ic(e))O_(t,d);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=t.lastRenderedReducer,f!==null))try{var x=t.lastRenderedState,w=f(x,s);if(d.hasEagerState=!0,d.eagerState=w,we(w,x))return Pr(e,t,d,0),nn===null&&$r(),!1}catch{}finally{}if(s=Au(e,t,d,a),s!==null)return xs(s,e,a),L_(s,t,a),!0}return!1}function _d(e,t,s,a){if(a={lane:2,revertLane:Fd(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ic(e)){if(t)throw Error(l(479))}else t=Au(e,s,a,2),t!==null&&xs(t,e,2)}function ic(e){var t=e.alternate;return e===gt||t!==null&&t===gt}function O_(e,t){Ma=Zr=!0;var s=e.pending;s===null?t.next=t:(t.next=s.next,s.next=t),e.pending=t}function L_(e,t,s){if((s&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,s|=a,t.lanes=s,Yn(e,s)}}var Tl={readContext:Qn,use:tc,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useLayoutEffect:Sn,useInsertionEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useSyncExternalStore:Sn,useId:Sn,useHostTransitionStatus:Sn,useFormState:Sn,useActionState:Sn,useOptimistic:Sn,useMemoCache:Sn,useCacheRefresh:Sn};Tl.useEffectEvent=Sn;var z_={readContext:Qn,use:tc,useCallback:function(e,t){return cs().memoizedState=[e,t===void 0?null:t],e},useContext:Qn,useEffect:x_,useImperativeHandle:function(e,t,s){s=s!=null?s.concat([e]):null,sc(4194308,4,S_.bind(null,t,e),s)},useLayoutEffect:function(e,t){return sc(4194308,4,e,t)},useInsertionEffect:function(e,t){sc(4,2,e,t)},useMemo:function(e,t){var s=cs();t=t===void 0?null:t;var a=e();if(Xi){me(!0);try{e()}finally{me(!1)}}return s.memoizedState=[a,t],a},useReducer:function(e,t,s){var a=cs();if(s!==void 0){var d=s(t);if(Xi){me(!0);try{s(t)}finally{me(!1)}}}else d=t;return a.memoizedState=a.baseState=d,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:d},a.queue=e,e=e.dispatch=Oy.bind(null,gt,e),[a.memoizedState,e]},useRef:function(e){var t=cs();return e={current:e},t.memoizedState=e},useState:function(e){e=ld(e);var t=e.queue,s=N_.bind(null,gt,t);return t.dispatch=s,[e.memoizedState,s]},useDebugValue:ud,useDeferredValue:function(e,t){var s=cs();return dd(s,e,t)},useTransition:function(){var e=ld(!1);return e=M_.bind(null,gt,e.queue,!0,!1),cs().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,s){var a=gt,d=cs();if(zt){if(s===void 0)throw Error(l(407));s=s()}else{if(s=t(),nn===null)throw Error(l(349));(Nt&127)!==0||s_(a,t,s)}d.memoizedState=s;var f={value:s,getSnapshot:t};return d.queue=f,x_(i_.bind(null,a,f,e),[e]),a.flags|=2048,Ra(9,{destroy:void 0},o_.bind(null,a,f,s,t),null),s},useId:function(){var e=cs(),t=nn.identifierPrefix;if(zt){var s=xo,a=yo;s=(a&~(1<<32-it(a)-1)).toString(32)+s,t="_"+t+"R_"+s,s=Jr++,0<s&&(t+="H"+s.toString(32)),t+="_"}else s=Ey++,t="_"+t+"r_"+s.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:hd,useFormState:__,useActionState:__,useOptimistic:function(e){var t=cs();t.memoizedState=t.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=s,t=_d.bind(null,gt,!0,s),s.dispatch=t,[e,t]},useMemoCache:od,useCacheRefresh:function(){return cs().memoizedState=Ny.bind(null,gt)},useEffectEvent:function(e){var t=cs(),s={impl:e};return t.memoizedState=s,function(){if((It&2)!==0)throw Error(l(440));return s.impl.apply(void 0,arguments)}}},md={readContext:Qn,use:tc,useCallback:C_,useContext:Qn,useEffect:cd,useImperativeHandle:k_,useInsertionEffect:v_,useLayoutEffect:w_,useMemo:j_,useReducer:nc,useRef:y_,useState:function(){return nc(Do)},useDebugValue:ud,useDeferredValue:function(e,t){var s=Tn();return E_(s,Vt.memoizedState,e,t)},useTransition:function(){var e=nc(Do)[0],t=Tn().memoizedState;return[typeof e=="boolean"?e:El(e),t]},useSyncExternalStore:n_,useId:A_,useHostTransitionStatus:hd,useFormState:m_,useActionState:m_,useOptimistic:function(e,t){var s=Tn();return r_(s,Vt,e,t)},useMemoCache:od,useCacheRefresh:D_};md.useEffectEvent=b_;var B_={readContext:Qn,use:tc,useCallback:C_,useContext:Qn,useEffect:cd,useImperativeHandle:k_,useInsertionEffect:v_,useLayoutEffect:w_,useMemo:j_,useReducer:ad,useRef:y_,useState:function(){return ad(Do)},useDebugValue:ud,useDeferredValue:function(e,t){var s=Tn();return Vt===null?dd(s,e,t):E_(s,Vt.memoizedState,e,t)},useTransition:function(){var e=ad(Do)[0],t=Tn().memoizedState;return[typeof e=="boolean"?e:El(e),t]},useSyncExternalStore:n_,useId:A_,useHostTransitionStatus:hd,useFormState:g_,useActionState:g_,useOptimistic:function(e,t){var s=Tn();return Vt!==null?r_(s,Vt,e,t):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:od,useCacheRefresh:D_};B_.useEffectEvent=b_;function pd(e,t,s,a){t=e.memoizedState,s=s(a,t),s=s==null?t:y({},t,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var gd={enqueueSetState:function(e,t,s){e=e._reactInternals;var a=As(),d=li(a);d.payload=t,s!=null&&(d.callback=s),t=ri(e,d,a),t!==null&&(xs(t,e,a),Sl(t,e,a))},enqueueReplaceState:function(e,t,s){e=e._reactInternals;var a=As(),d=li(a);d.tag=1,d.payload=t,s!=null&&(d.callback=s),t=ri(e,d,a),t!==null&&(xs(t,e,a),Sl(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var s=As(),a=li(s);a.tag=2,t!=null&&(a.callback=t),t=ri(e,a,s),t!==null&&(xs(t,e,s),Sl(t,e,s))}};function $_(e,t,s,a,d,f,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,f,x):t.prototype&&t.prototype.isPureReactComponent?!tn(s,a)||!tn(d,f):!0}function P_(e,t,s,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(s,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(s,a),t.state!==e&&gd.enqueueReplaceState(t,t.state,null)}function Gi(e,t){var s=t;if("ref"in t){s={};for(var a in t)a!=="ref"&&(s[a]=t[a])}if(e=e.defaultProps){s===t&&(s=y({},s));for(var d in e)s[d]===void 0&&(s[d]=e[d])}return s}function I_(e){Br(e)}function U_(e){console.error(e)}function H_(e){Br(e)}function ac(e,t){try{var s=e.onUncaughtError;s(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Y_(e,t,s){try{var a=e.onCaughtError;a(s.value,{componentStack:s.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function yd(e,t,s){return s=li(s),s.tag=3,s.payload={element:null},s.callback=function(){ac(e,t)},s}function X_(e){return e=li(e),e.tag=3,e}function G_(e,t,s,a){var d=s.type.getDerivedStateFromError;if(typeof d=="function"){var f=a.value;e.payload=function(){return d(f)},e.callback=function(){Y_(t,s,a)}}var x=s.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){Y_(t,s,a),typeof d!="function"&&(_i===null?_i=new Set([this]):_i.add(this));var w=a.stack;this.componentDidCatch(a.value,{componentStack:w!==null?w:""})})}function Ly(e,t,s,a,d){if(s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=s.alternate,t!==null&&wa(t,s,d,!0),s=Es.current,s!==null){switch(s.tag){case 31:case 13:return Ys===null?yc():s.alternate===null&&kn===0&&(kn=3),s.flags&=-257,s.flags|=65536,s.lanes=d,a===Wr?s.flags|=16384:(t=s.updateQueue,t===null?s.updateQueue=new Set([a]):t.add(a),Yd(e,a,d)),!1;case 22:return s.flags|=65536,a===Wr?s.flags|=16384:(t=s.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},s.updateQueue=t):(s=t.retryQueue,s===null?t.retryQueue=new Set([a]):s.add(a)),Yd(e,a,d)),!1}throw Error(l(435,s.tag))}return Yd(e,a,d),yc(),!1}if(zt)return t=Es.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=d,a!==Bu&&(e=Error(l(422),{cause:a}),yl(Ps(e,s)))):(a!==Bu&&(t=Error(l(423),{cause:a}),yl(Ps(t,s))),e=e.current.alternate,e.flags|=65536,d&=-d,e.lanes|=d,a=Ps(a,s),d=yd(e.stateNode,a,d),qu(e,d),kn!==4&&(kn=2)),!1;var f=Error(l(520),{cause:a});if(f=Ps(f,s),Bl===null?Bl=[f]:Bl.push(f),kn!==4&&(kn=2),t===null)return!0;a=Ps(a,s),s=t;do{switch(s.tag){case 3:return s.flags|=65536,e=d&-d,s.lanes|=e,e=yd(s.stateNode,a,e),qu(s,e),!1;case 1:if(t=s.type,f=s.stateNode,(s.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(_i===null||!_i.has(f))))return s.flags|=65536,d&=-d,s.lanes|=d,d=X_(d),G_(d,e,s,a),qu(s,d),!1}s=s.return}while(s!==null);return!1}var xd=Error(l(461)),Bn=!1;function Vn(e,t,s,a){t.child=e===null?Qh(t,null,s,a):Yi(t,e.child,s,a)}function F_(e,t,s,a,d){s=s.render;var f=t.ref;if("ref"in a){var x={};for(var w in a)w!=="ref"&&(x[w]=a[w])}else x=a;return Pi(t),a=ed(e,t,s,x,f,d),w=td(),e!==null&&!Bn?(nd(e,t,d),No(e,t,d)):(zt&&w&&Lu(t),t.flags|=1,Vn(e,t,a,d),t.child)}function W_(e,t,s,a,d){if(e===null){var f=s.type;return typeof f=="function"&&!Du(f)&&f.defaultProps===void 0&&s.compare===null?(t.tag=15,t.type=f,q_(e,t,f,a,d)):(e=Ur(s.type,null,a,t,t.mode,d),e.ref=t.ref,e.return=t,t.child=e)}if(f=e.child,!Ed(e,d)){var x=f.memoizedProps;if(s=s.compare,s=s!==null?s:tn,s(x,a)&&e.ref===t.ref)return No(e,t,d)}return t.flags|=1,e=Eo(f,a),e.ref=t.ref,e.return=t,t.child=e}function q_(e,t,s,a,d){if(e!==null){var f=e.memoizedProps;if(tn(f,a)&&e.ref===t.ref)if(Bn=!1,t.pendingProps=a=f,Ed(e,d))(e.flags&131072)!==0&&(Bn=!0);else return t.lanes=e.lanes,No(e,t,d)}return bd(e,t,s,a,d)}function Q_(e,t,s,a){var d=a.children,f=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(f=f!==null?f.baseLanes|s:s,e!==null){for(a=t.child=e.child,d=0;a!==null;)d=d|a.lanes|a.childLanes,a=a.sibling;a=d&~f}else a=0,t.child=null;return V_(e,t,f,s,a)}if((s&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Gr(t,f!==null?f.cachePool:null),f!==null?Zh(t,f):Vu(),Jh(t);else return a=t.lanes=536870912,V_(e,t,f!==null?f.baseLanes|s:s,s,a)}else f!==null?(Gr(t,f.cachePool),Zh(t,f),ui(),t.memoizedState=null):(e!==null&&Gr(t,null),Vu(),ui());return Vn(e,t,d,s),t.child}function Rl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function V_(e,t,s,a,d){var f=Xu();return f=f===null?null:{parent:Ln._currentValue,pool:f},t.memoizedState={baseLanes:s,cachePool:f},e!==null&&Gr(t,null),Vu(),Jh(t),e!==null&&wa(e,t,a,!0),t.childLanes=d,null}function lc(e,t){return t=cc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function K_(e,t,s){return Yi(t,e.child,null,s),e=lc(t,t.pendingProps),e.flags|=2,Ms(t),t.memoizedState=null,e}function zy(e,t,s){var a=t.pendingProps,d=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(zt){if(a.mode==="hidden")return e=lc(t,a),t.lanes=536870912,Rl(null,e);if(Zu(t),(e=cn)?(e=cp(e,Hs),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ni!==null?{id:yo,overflow:xo}:null,retryLane:536870912,hydrationErrors:null},s=Oh(e),s.return=t,t.child=s,qn=t,cn=null)):e=null,e===null)throw oi(t);return t.lanes=536870912,null}return lc(t,a)}var f=e.memoizedState;if(f!==null){var x=f.dehydrated;if(Zu(t),d)if(t.flags&256)t.flags&=-257,t=K_(e,t,s);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(l(558));else if(Bn||wa(e,t,s,!1),d=(s&e.childLanes)!==0,Bn||d){if(a=nn,a!==null&&(x=In(a,s),x!==0&&x!==f.retryLane))throw f.retryLane=x,Li(e,x),xs(a,e,x),xd;yc(),t=K_(e,t,s)}else e=f.treeContext,cn=Xs(x.nextSibling),qn=t,zt=!0,si=null,Hs=!1,e!==null&&Bh(t,e),t=lc(t,a),t.flags|=4096;return t}return e=Eo(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function rc(e,t){var s=t.ref;if(s===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(l(284));(e===null||e.ref!==s)&&(t.flags|=4194816)}}function bd(e,t,s,a,d){return Pi(t),s=ed(e,t,s,a,void 0,d),a=td(),e!==null&&!Bn?(nd(e,t,d),No(e,t,d)):(zt&&a&&Lu(t),t.flags|=1,Vn(e,t,s,d),t.child)}function Z_(e,t,s,a,d,f){return Pi(t),t.updateQueue=null,s=t_(t,a,s,d),e_(e),a=td(),e!==null&&!Bn?(nd(e,t,f),No(e,t,f)):(zt&&a&&Lu(t),t.flags|=1,Vn(e,t,s,f),t.child)}function J_(e,t,s,a,d){if(Pi(t),t.stateNode===null){var f=ya,x=s.contextType;typeof x=="object"&&x!==null&&(f=Qn(x)),f=new s(a,f),t.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=gd,t.stateNode=f,f._reactInternals=t,f=t.stateNode,f.props=a,f.state=t.memoizedState,f.refs={},Fu(t),x=s.contextType,f.context=typeof x=="object"&&x!==null?Qn(x):ya,f.state=t.memoizedState,x=s.getDerivedStateFromProps,typeof x=="function"&&(pd(t,s,x,a),f.state=t.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&gd.enqueueReplaceState(f,f.state,null),Cl(t,a,f,d),kl(),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){f=t.stateNode;var w=t.memoizedProps,R=Gi(s,w);f.props=R;var H=f.context,ee=s.contextType;x=ya,typeof ee=="object"&&ee!==null&&(x=Qn(ee));var ie=s.getDerivedStateFromProps;ee=typeof ie=="function"||typeof f.getSnapshotBeforeUpdate=="function",w=t.pendingProps!==w,ee||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(w||H!==x)&&P_(t,f,a,x),ai=!1;var X=t.memoizedState;f.state=X,Cl(t,a,f,d),kl(),H=t.memoizedState,w||X!==H||ai?(typeof ie=="function"&&(pd(t,s,ie,a),H=t.memoizedState),(R=ai||$_(t,s,R,a,X,H,x))?(ee||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(t.flags|=4194308)):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=H),f.props=a,f.state=H,f.context=x,a=R):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{f=t.stateNode,Wu(e,t),x=t.memoizedProps,ee=Gi(s,x),f.props=ee,ie=t.pendingProps,X=f.context,H=s.contextType,R=ya,typeof H=="object"&&H!==null&&(R=Qn(H)),w=s.getDerivedStateFromProps,(H=typeof w=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==ie||X!==R)&&P_(t,f,a,R),ai=!1,X=t.memoizedState,f.state=X,Cl(t,a,f,d),kl();var q=t.memoizedState;x!==ie||X!==q||ai||e!==null&&e.dependencies!==null&&Yr(e.dependencies)?(typeof w=="function"&&(pd(t,s,w,a),q=t.memoizedState),(ee=ai||$_(t,s,ee,a,X,q,R)||e!==null&&e.dependencies!==null&&Yr(e.dependencies))?(H||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(a,q,R),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(a,q,R)),typeof f.componentDidUpdate=="function"&&(t.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&X===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&X===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=q),f.props=a,f.state=q,f.context=R,a=ee):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&X===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&X===e.memoizedState||(t.flags|=1024),a=!1)}return f=a,rc(e,t),a=(t.flags&128)!==0,f||a?(f=t.stateNode,s=a&&typeof s.getDerivedStateFromError!="function"?null:f.render(),t.flags|=1,e!==null&&a?(t.child=Yi(t,e.child,null,d),t.child=Yi(t,null,s,d)):Vn(e,t,s,d),t.memoizedState=f.state,e=t.child):e=No(e,t,d),e}function em(e,t,s,a){return Bi(),t.flags|=256,Vn(e,t,s,a),t.child}var vd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wd(e){return{baseLanes:e,cachePool:Yh()}}function Sd(e,t,s){return e=e!==null?e.childLanes&~s:0,t&&(e|=Rs),e}function tm(e,t,s){var a=t.pendingProps,d=!1,f=(t.flags&128)!==0,x;if((x=f)||(x=e!==null&&e.memoizedState===null?!1:(Mn.current&2)!==0),x&&(d=!0,t.flags&=-129),x=(t.flags&32)!==0,t.flags&=-33,e===null){if(zt){if(d?ci(t):ui(),(e=cn)?(e=cp(e,Hs),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ni!==null?{id:yo,overflow:xo}:null,retryLane:536870912,hydrationErrors:null},s=Oh(e),s.return=t,t.child=s,qn=t,cn=null)):e=null,e===null)throw oi(t);return af(e)?t.lanes=32:t.lanes=536870912,null}var w=a.children;return a=a.fallback,d?(ui(),d=t.mode,w=cc({mode:"hidden",children:w},d),a=zi(a,d,s,null),w.return=t,a.return=t,w.sibling=a,t.child=w,a=t.child,a.memoizedState=wd(s),a.childLanes=Sd(e,x,s),t.memoizedState=vd,Rl(null,a)):(ci(t),kd(t,w))}var R=e.memoizedState;if(R!==null&&(w=R.dehydrated,w!==null)){if(f)t.flags&256?(ci(t),t.flags&=-257,t=Cd(e,t,s)):t.memoizedState!==null?(ui(),t.child=e.child,t.flags|=128,t=null):(ui(),w=a.fallback,d=t.mode,a=cc({mode:"visible",children:a.children},d),w=zi(w,d,s,null),w.flags|=2,a.return=t,w.return=t,a.sibling=w,t.child=a,Yi(t,e.child,null,s),a=t.child,a.memoizedState=wd(s),a.childLanes=Sd(e,x,s),t.memoizedState=vd,t=Rl(null,a));else if(ci(t),af(w)){if(x=w.nextSibling&&w.nextSibling.dataset,x)var H=x.dgst;x=H,a=Error(l(419)),a.stack="",a.digest=x,yl({value:a,source:null,stack:null}),t=Cd(e,t,s)}else if(Bn||wa(e,t,s,!1),x=(s&e.childLanes)!==0,Bn||x){if(x=nn,x!==null&&(a=In(x,s),a!==0&&a!==R.retryLane))throw R.retryLane=a,Li(e,a),xs(x,e,a),xd;of(w)||yc(),t=Cd(e,t,s)}else of(w)?(t.flags|=192,t.child=e.child,t=null):(e=R.treeContext,cn=Xs(w.nextSibling),qn=t,zt=!0,si=null,Hs=!1,e!==null&&Bh(t,e),t=kd(t,a.children),t.flags|=4096);return t}return d?(ui(),w=a.fallback,d=t.mode,R=e.child,H=R.sibling,a=Eo(R,{mode:"hidden",children:a.children}),a.subtreeFlags=R.subtreeFlags&65011712,H!==null?w=Eo(H,w):(w=zi(w,d,s,null),w.flags|=2),w.return=t,a.return=t,a.sibling=w,t.child=a,Rl(null,a),a=t.child,w=e.child.memoizedState,w===null?w=wd(s):(d=w.cachePool,d!==null?(R=Ln._currentValue,d=d.parent!==R?{parent:R,pool:R}:d):d=Yh(),w={baseLanes:w.baseLanes|s,cachePool:d}),a.memoizedState=w,a.childLanes=Sd(e,x,s),t.memoizedState=vd,Rl(e.child,a)):(ci(t),s=e.child,e=s.sibling,s=Eo(s,{mode:"visible",children:a.children}),s.return=t,s.sibling=null,e!==null&&(x=t.deletions,x===null?(t.deletions=[e],t.flags|=16):x.push(e)),t.child=s,t.memoizedState=null,s)}function kd(e,t){return t=cc({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function cc(e,t){return e=js(22,e,null,t),e.lanes=0,e}function Cd(e,t,s){return Yi(t,e.child,null,s),e=kd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nm(e,t,s){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Iu(e.return,t,s)}function jd(e,t,s,a,d,f){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:s,tailMode:d,treeForkCount:f}:(x.isBackwards=t,x.rendering=null,x.renderingStartTime=0,x.last=a,x.tail=s,x.tailMode=d,x.treeForkCount=f)}function sm(e,t,s){var a=t.pendingProps,d=a.revealOrder,f=a.tail;a=a.children;var x=Mn.current,w=(x&2)!==0;if(w?(x=x&1|2,t.flags|=128):x&=1,pe(Mn,x),Vn(e,t,a,s),a=zt?gl:0,!w&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nm(e,s,t);else if(e.tag===19)nm(e,s,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(d){case"forwards":for(s=t.child,d=null;s!==null;)e=s.alternate,e!==null&&Kr(e)===null&&(d=s),s=s.sibling;s=d,s===null?(d=t.child,t.child=null):(d=s.sibling,s.sibling=null),jd(t,!1,d,s,f,a);break;case"backwards":case"unstable_legacy-backwards":for(s=null,d=t.child,t.child=null;d!==null;){if(e=d.alternate,e!==null&&Kr(e)===null){t.child=d;break}e=d.sibling,d.sibling=s,s=d,d=e}jd(t,!0,s,null,f,a);break;case"together":jd(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function No(e,t,s){if(e!==null&&(t.dependencies=e.dependencies),hi|=t.lanes,(s&t.childLanes)===0)if(e!==null){if(wa(e,t,s,!1),(s&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,s=Eo(e,e.pendingProps),t.child=s,s.return=t;e.sibling!==null;)e=e.sibling,s=s.sibling=Eo(e,e.pendingProps),s.return=t;s.sibling=null}return t.child}function Ed(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Yr(e)))}function By(e,t,s){switch(t.tag){case 3:en(t,t.stateNode.containerInfo),ii(t,Ln,e.memoizedState.cache),Bi();break;case 27:case 5:$e(t);break;case 4:en(t,t.stateNode.containerInfo);break;case 10:ii(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Zu(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(ci(t),t.flags|=128,null):(s&t.child.childLanes)!==0?tm(e,t,s):(ci(t),e=No(e,t,s),e!==null?e.sibling:null);ci(t);break;case 19:var d=(e.flags&128)!==0;if(a=(s&t.childLanes)!==0,a||(wa(e,t,s,!1),a=(s&t.childLanes)!==0),d){if(a)return sm(e,t,s);t.flags|=128}if(d=t.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),pe(Mn,Mn.current),a)break;return null;case 22:return t.lanes=0,Q_(e,t,s,t.pendingProps);case 24:ii(t,Ln,e.memoizedState.cache)}return No(e,t,s)}function om(e,t,s){if(e!==null)if(e.memoizedProps!==t.pendingProps)Bn=!0;else{if(!Ed(e,s)&&(t.flags&128)===0)return Bn=!1,By(e,t,s);Bn=(e.flags&131072)!==0}else Bn=!1,zt&&(t.flags&1048576)!==0&&zh(t,gl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Ui(t.elementType),t.type=e,typeof e=="function")Du(e)?(a=Gi(e,a),t.tag=1,t=J_(null,t,e,a,s)):(t.tag=0,t=bd(null,t,e,a,s));else{if(e!=null){var d=e.$$typeof;if(d===z){t.tag=11,t=F_(null,t,e,a,s);break e}else if(d===F){t.tag=14,t=W_(null,t,e,a,s);break e}}throw t=_e(e)||e,Error(l(306,t,""))}}return t;case 0:return bd(e,t,t.type,t.pendingProps,s);case 1:return a=t.type,d=Gi(a,t.pendingProps),J_(e,t,a,d,s);case 3:e:{if(en(t,t.stateNode.containerInfo),e===null)throw Error(l(387));a=t.pendingProps;var f=t.memoizedState;d=f.element,Wu(e,t),Cl(t,a,null,s);var x=t.memoizedState;if(a=x.cache,ii(t,Ln,a),a!==f.cache&&Uu(t,[Ln],s,!0),kl(),a=x.element,f.isDehydrated)if(f={element:a,isDehydrated:!1,cache:x.cache},t.updateQueue.baseState=f,t.memoizedState=f,t.flags&256){t=em(e,t,a,s);break e}else if(a!==d){d=Ps(Error(l(424)),t),yl(d),t=em(e,t,a,s);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(cn=Xs(e.firstChild),qn=t,zt=!0,si=null,Hs=!0,s=Qh(t,null,a,s),t.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Bi(),a===d){t=No(e,t,s);break e}Vn(e,t,a,s)}t=t.child}return t;case 26:return rc(e,t),e===null?(s=mp(t.type,null,t.pendingProps,null))?t.memoizedState=s:zt||(s=t.type,e=t.pendingProps,a=Cc(rt.current).createElement(s),a[Yt]=t,a[jn]=e,Kn(a,s,e),Nn(a),t.stateNode=a):t.memoizedState=mp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return $e(t),e===null&&zt&&(a=t.stateNode=fp(t.type,t.pendingProps,rt.current),qn=t,Hs=!0,d=cn,yi(t.type)?(lf=d,cn=Xs(a.firstChild)):cn=d),Vn(e,t,t.pendingProps.children,s),rc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&zt&&((d=a=cn)&&(a=h1(a,t.type,t.pendingProps,Hs),a!==null?(t.stateNode=a,qn=t,cn=Xs(a.firstChild),Hs=!1,d=!0):d=!1),d||oi(t)),$e(t),d=t.type,f=t.pendingProps,x=e!==null?e.memoizedProps:null,a=f.children,tf(d,f)?a=null:x!==null&&tf(d,x)&&(t.flags|=32),t.memoizedState!==null&&(d=ed(e,t,My,null,null,s),Gl._currentValue=d),rc(e,t),Vn(e,t,a,s),t.child;case 6:return e===null&&zt&&((e=s=cn)&&(s=_1(s,t.pendingProps,Hs),s!==null?(t.stateNode=s,qn=t,cn=null,e=!0):e=!1),e||oi(t)),null;case 13:return tm(e,t,s);case 4:return en(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Yi(t,null,a,s):Vn(e,t,a,s),t.child;case 11:return F_(e,t,t.type,t.pendingProps,s);case 7:return Vn(e,t,t.pendingProps,s),t.child;case 8:return Vn(e,t,t.pendingProps.children,s),t.child;case 12:return Vn(e,t,t.pendingProps.children,s),t.child;case 10:return a=t.pendingProps,ii(t,t.type,a.value),Vn(e,t,a.children,s),t.child;case 9:return d=t.type._context,a=t.pendingProps.children,Pi(t),d=Qn(d),a=a(d),t.flags|=1,Vn(e,t,a,s),t.child;case 14:return W_(e,t,t.type,t.pendingProps,s);case 15:return q_(e,t,t.type,t.pendingProps,s);case 19:return sm(e,t,s);case 31:return zy(e,t,s);case 22:return Q_(e,t,s,t.pendingProps);case 24:return Pi(t),a=Qn(Ln),e===null?(d=Xu(),d===null&&(d=nn,f=Hu(),d.pooledCache=f,f.refCount++,f!==null&&(d.pooledCacheLanes|=s),d=f),t.memoizedState={parent:a,cache:d},Fu(t),ii(t,Ln,d)):((e.lanes&s)!==0&&(Wu(e,t),Cl(t,null,null,s),kl()),d=e.memoizedState,f=t.memoizedState,d.parent!==a?(d={parent:a,cache:a},t.memoizedState=d,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=d),ii(t,Ln,a)):(a=f.cache,ii(t,Ln,a),a!==d.cache&&Uu(t,[Ln],s,!0))),Vn(e,t,t.pendingProps.children,s),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function Oo(e){e.flags|=4}function Md(e,t,s,a,d){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(d&335544128)===d)if(e.stateNode.complete)e.flags|=8192;else if(Am())e.flags|=8192;else throw Hi=Wr,Gu}else e.flags&=-16777217}function im(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!bp(t))if(Am())e.flags|=8192;else throw Hi=Wr,Gu}function uc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ht():536870912,e.lanes|=t,Oa|=t)}function Al(e,t){if(!zt)switch(e.tailMode){case"hidden":t=e.tail;for(var s=null;t!==null;)t.alternate!==null&&(s=t),t=t.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function un(e){var t=e.alternate!==null&&e.alternate.child===e.child,s=0,a=0;if(t)for(var d=e.child;d!==null;)s|=d.lanes|d.childLanes,a|=d.subtreeFlags&65011712,a|=d.flags&65011712,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)s|=d.lanes|d.childLanes,a|=d.subtreeFlags,a|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=a,e.childLanes=s,t}function $y(e,t,s){var a=t.pendingProps;switch(zu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return un(t),null;case 1:return un(t),null;case 3:return s=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ro(Ln),Qe(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(va(t)?Oo(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,$u())),un(t),null;case 26:var d=t.type,f=t.memoizedState;return e===null?(Oo(t),f!==null?(un(t),im(t,f)):(un(t),Md(t,d,null,a,s))):f?f!==e.memoizedState?(Oo(t),un(t),im(t,f)):(un(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Oo(t),un(t),Md(t,d,e,a,s)),null;case 27:if(pt(t),s=rt.current,d=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Oo(t);else{if(!a){if(t.stateNode===null)throw Error(l(166));return un(t),null}e=je.current,va(t)?$h(t):(e=fp(d,a,s),t.stateNode=e,Oo(t))}return un(t),null;case 5:if(pt(t),d=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Oo(t);else{if(!a){if(t.stateNode===null)throw Error(l(166));return un(t),null}if(f=je.current,va(t))$h(t);else{var x=Cc(rt.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",d);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;default:switch(d){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",d);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof a.is=="string"?x.createElement("select",{is:a.is}):x.createElement("select"),a.multiple?f.multiple=!0:a.size&&(f.size=a.size);break;default:f=typeof a.is=="string"?x.createElement(d,{is:a.is}):x.createElement(d)}}f[Yt]=t,f[jn]=a;e:for(x=t.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===t)break e;for(;x.sibling===null;){if(x.return===null||x.return===t)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}t.stateNode=f;e:switch(Kn(f,d,a),d){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Oo(t)}}return un(t),Md(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,s),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Oo(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(l(166));if(e=rt.current,va(t)){if(e=t.stateNode,s=t.memoizedProps,a=null,d=qn,d!==null)switch(d.tag){case 27:case 5:a=d.memoizedProps}e[Yt]=t,e=!!(e.nodeValue===s||a!==null&&a.suppressHydrationWarning===!0||tp(e.nodeValue,s)),e||oi(t,!0)}else e=Cc(e).createTextNode(a),e[Yt]=t,t.stateNode=e}return un(t),null;case 31:if(s=t.memoizedState,e===null||e.memoizedState!==null){if(a=va(t),s!==null){if(e===null){if(!a)throw Error(l(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(557));e[Yt]=t}else Bi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;un(t),e=!1}else s=$u(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return t.flags&256?(Ms(t),t):(Ms(t),null);if((t.flags&128)!==0)throw Error(l(558))}return un(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(d=va(t),a!==null&&a.dehydrated!==null){if(e===null){if(!d)throw Error(l(318));if(d=t.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(l(317));d[Yt]=t}else Bi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;un(t),d=!1}else d=$u(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=d),d=!0;if(!d)return t.flags&256?(Ms(t),t):(Ms(t),null)}return Ms(t),(t.flags&128)!==0?(t.lanes=s,t):(s=a!==null,e=e!==null&&e.memoizedState!==null,s&&(a=t.child,d=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(d=a.alternate.memoizedState.cachePool.pool),f=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(f=a.memoizedState.cachePool.pool),f!==d&&(a.flags|=2048)),s!==e&&s&&(t.child.flags|=8192),uc(t,t.updateQueue),un(t),null);case 4:return Qe(),e===null&&Vd(t.stateNode.containerInfo),un(t),null;case 10:return Ro(t.type),un(t),null;case 19:if(Z(Mn),a=t.memoizedState,a===null)return un(t),null;if(d=(t.flags&128)!==0,f=a.rendering,f===null)if(d)Al(a,!1);else{if(kn!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(f=Kr(e),f!==null){for(t.flags|=128,Al(a,!1),e=f.updateQueue,t.updateQueue=e,uc(t,e),t.subtreeFlags=0,e=s,s=t.child;s!==null;)Nh(s,e),s=s.sibling;return pe(Mn,Mn.current&1|2),zt&&Mo(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&Te()>mc&&(t.flags|=128,d=!0,Al(a,!1),t.lanes=4194304)}else{if(!d)if(e=Kr(f),e!==null){if(t.flags|=128,d=!0,e=e.updateQueue,t.updateQueue=e,uc(t,e),Al(a,!0),a.tail===null&&a.tailMode==="hidden"&&!f.alternate&&!zt)return un(t),null}else 2*Te()-a.renderingStartTime>mc&&s!==536870912&&(t.flags|=128,d=!0,Al(a,!1),t.lanes=4194304);a.isBackwards?(f.sibling=t.child,t.child=f):(e=a.last,e!==null?e.sibling=f:t.child=f,a.last=f)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Te(),e.sibling=null,s=Mn.current,pe(Mn,d?s&1|2:s&1),zt&&Mo(t,a.treeForkCount),e):(un(t),null);case 22:case 23:return Ms(t),Ku(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(s&536870912)!==0&&(t.flags&128)===0&&(un(t),t.subtreeFlags&6&&(t.flags|=8192)):un(t),s=t.updateQueue,s!==null&&uc(t,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==s&&(t.flags|=2048),e!==null&&Z(Ii),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),t.memoizedState.cache!==s&&(t.flags|=2048),Ro(Ln),un(t),null;case 25:return null;case 30:return null}throw Error(l(156,t.tag))}function Py(e,t){switch(zu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ro(Ln),Qe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return pt(t),null;case 31:if(t.memoizedState!==null){if(Ms(t),t.alternate===null)throw Error(l(340));Bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ms(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));Bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(Mn),null;case 4:return Qe(),null;case 10:return Ro(t.type),null;case 22:case 23:return Ms(t),Ku(),e!==null&&Z(Ii),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ro(Ln),null;case 25:return null;default:return null}}function am(e,t){switch(zu(t),t.tag){case 3:Ro(Ln),Qe();break;case 26:case 27:case 5:pt(t);break;case 4:Qe();break;case 31:t.memoizedState!==null&&Ms(t);break;case 13:Ms(t);break;case 19:Z(Mn);break;case 10:Ro(t.type);break;case 22:case 23:Ms(t),Ku(),e!==null&&Z(Ii);break;case 24:Ro(Ln)}}function Dl(e,t){try{var s=t.updateQueue,a=s!==null?s.lastEffect:null;if(a!==null){var d=a.next;s=d;do{if((s.tag&e)===e){a=void 0;var f=s.create,x=s.inst;a=f(),x.destroy=a}s=s.next}while(s!==d)}}catch(w){Gt(t,t.return,w)}}function di(e,t,s){try{var a=t.updateQueue,d=a!==null?a.lastEffect:null;if(d!==null){var f=d.next;a=f;do{if((a.tag&e)===e){var x=a.inst,w=x.destroy;if(w!==void 0){x.destroy=void 0,d=t;var R=s,H=w;try{H()}catch(ee){Gt(d,R,ee)}}}a=a.next}while(a!==f)}}catch(ee){Gt(t,t.return,ee)}}function lm(e){var t=e.updateQueue;if(t!==null){var s=e.stateNode;try{Kh(t,s)}catch(a){Gt(e,e.return,a)}}}function rm(e,t,s){s.props=Gi(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(a){Gt(e,t,a)}}function Nl(e,t){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof s=="function"?e.refCleanup=s(a):s.current=a}}catch(d){Gt(e,t,d)}}function bo(e,t){var s=e.ref,a=e.refCleanup;if(s!==null)if(typeof a=="function")try{a()}catch(d){Gt(e,t,d)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(d){Gt(e,t,d)}else s.current=null}function cm(e){var t=e.type,s=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":s.autoFocus&&a.focus();break e;case"img":s.src?a.src=s.src:s.srcSet&&(a.srcset=s.srcSet)}}catch(d){Gt(e,e.return,d)}}function Td(e,t,s){try{var a=e.stateNode;l1(a,e.type,s,t),a[jn]=t}catch(d){Gt(e,e.return,d)}}function um(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&yi(e.type)||e.tag===4}function Rd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||um(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&yi(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ad(e,t,s){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,t):(t=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,t.appendChild(e),s=s._reactRootContainer,s!=null||t.onclick!==null||(t.onclick=Qs));else if(a!==4&&(a===27&&yi(e.type)&&(s=e.stateNode,t=null),e=e.child,e!==null))for(Ad(e,t,s),e=e.sibling;e!==null;)Ad(e,t,s),e=e.sibling}function dc(e,t,s){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?s.insertBefore(e,t):s.appendChild(e);else if(a!==4&&(a===27&&yi(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(dc(e,t,s),e=e.sibling;e!==null;)dc(e,t,s),e=e.sibling}function dm(e){var t=e.stateNode,s=e.memoizedProps;try{for(var a=e.type,d=t.attributes;d.length;)t.removeAttributeNode(d[0]);Kn(t,a,s),t[Yt]=e,t[jn]=s}catch(f){Gt(e,e.return,f)}}var Lo=!1,$n=!1,Dd=!1,fm=typeof WeakSet=="function"?WeakSet:Set,Gn=null;function Iy(e,t){if(e=e.containerInfo,Jd=Dc,e=hn(e),ot(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var a=s.getSelection&&s.getSelection();if(a&&a.rangeCount!==0){s=a.anchorNode;var d=a.anchorOffset,f=a.focusNode;a=a.focusOffset;try{s.nodeType,f.nodeType}catch{s=null;break e}var x=0,w=-1,R=-1,H=0,ee=0,ie=e,X=null;t:for(;;){for(var q;ie!==s||d!==0&&ie.nodeType!==3||(w=x+d),ie!==f||a!==0&&ie.nodeType!==3||(R=x+a),ie.nodeType===3&&(x+=ie.nodeValue.length),(q=ie.firstChild)!==null;)X=ie,ie=q;for(;;){if(ie===e)break t;if(X===s&&++H===d&&(w=x),X===f&&++ee===a&&(R=x),(q=ie.nextSibling)!==null)break;ie=X,X=ie.parentNode}ie=q}s=w===-1||R===-1?null:{start:w,end:R}}else s=null}s=s||{start:0,end:0}}else s=null;for(ef={focusedElem:e,selectionRange:s},Dc=!1,Gn=t;Gn!==null;)if(t=Gn,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Gn=e;else for(;Gn!==null;){switch(t=Gn,f=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)d=e[s],d.ref.impl=d.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,s=t,d=f.memoizedProps,f=f.memoizedState,a=s.stateNode;try{var Be=Gi(s.type,d);e=a.getSnapshotBeforeUpdate(Be,f),a.__reactInternalSnapshotBeforeUpdate=e}catch(lt){Gt(s,s.return,lt)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,s=e.nodeType,s===9)sf(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":sf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=t.sibling,e!==null){e.return=t.return,Gn=e;break}Gn=t.return}}function hm(e,t,s){var a=s.flags;switch(s.tag){case 0:case 11:case 15:Bo(e,s),a&4&&Dl(5,s);break;case 1:if(Bo(e,s),a&4)if(e=s.stateNode,t===null)try{e.componentDidMount()}catch(x){Gt(s,s.return,x)}else{var d=Gi(s.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(d,t,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Gt(s,s.return,x)}}a&64&&lm(s),a&512&&Nl(s,s.return);break;case 3:if(Bo(e,s),a&64&&(e=s.updateQueue,e!==null)){if(t=null,s.child!==null)switch(s.child.tag){case 27:case 5:t=s.child.stateNode;break;case 1:t=s.child.stateNode}try{Kh(e,t)}catch(x){Gt(s,s.return,x)}}break;case 27:t===null&&a&4&&dm(s);case 26:case 5:Bo(e,s),t===null&&a&4&&cm(s),a&512&&Nl(s,s.return);break;case 12:Bo(e,s);break;case 31:Bo(e,s),a&4&&pm(e,s);break;case 13:Bo(e,s),a&4&&gm(e,s),a&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=Qy.bind(null,s),m1(e,s))));break;case 22:if(a=s.memoizedState!==null||Lo,!a){t=t!==null&&t.memoizedState!==null||$n,d=Lo;var f=$n;Lo=a,($n=t)&&!f?$o(e,s,(s.subtreeFlags&8772)!==0):Bo(e,s),Lo=d,$n=f}break;case 30:break;default:Bo(e,s)}}function _m(e){var t=e.alternate;t!==null&&(e.alternate=null,_m(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&oa(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var _n=null,ms=!1;function zo(e,t,s){for(s=s.child;s!==null;)mm(e,t,s),s=s.sibling}function mm(e,t,s){if(ke&&typeof ke.onCommitFiberUnmount=="function")try{ke.onCommitFiberUnmount(Oe,s)}catch{}switch(s.tag){case 26:$n||bo(s,t),zo(e,t,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:$n||bo(s,t);var a=_n,d=ms;yi(s.type)&&(_n=s.stateNode,ms=!1),zo(e,t,s),Hl(s.stateNode),_n=a,ms=d;break;case 5:$n||bo(s,t);case 6:if(a=_n,d=ms,_n=null,zo(e,t,s),_n=a,ms=d,_n!==null)if(ms)try{(_n.nodeType===9?_n.body:_n.nodeName==="HTML"?_n.ownerDocument.body:_n).removeChild(s.stateNode)}catch(f){Gt(s,t,f)}else try{_n.removeChild(s.stateNode)}catch(f){Gt(s,t,f)}break;case 18:_n!==null&&(ms?(e=_n,lp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Ha(e)):lp(_n,s.stateNode));break;case 4:a=_n,d=ms,_n=s.stateNode.containerInfo,ms=!0,zo(e,t,s),_n=a,ms=d;break;case 0:case 11:case 14:case 15:di(2,s,t),$n||di(4,s,t),zo(e,t,s);break;case 1:$n||(bo(s,t),a=s.stateNode,typeof a.componentWillUnmount=="function"&&rm(s,t,a)),zo(e,t,s);break;case 21:zo(e,t,s);break;case 22:$n=(a=$n)||s.memoizedState!==null,zo(e,t,s),$n=a;break;default:zo(e,t,s)}}function pm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ha(e)}catch(s){Gt(t,t.return,s)}}}function gm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ha(e)}catch(s){Gt(t,t.return,s)}}function Uy(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new fm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new fm),t;default:throw Error(l(435,e.tag))}}function fc(e,t){var s=Uy(e);t.forEach(function(a){if(!s.has(a)){s.add(a);var d=Vy.bind(null,e,a);a.then(d,d)}})}function ps(e,t){var s=t.deletions;if(s!==null)for(var a=0;a<s.length;a++){var d=s[a],f=e,x=t,w=x;e:for(;w!==null;){switch(w.tag){case 27:if(yi(w.type)){_n=w.stateNode,ms=!1;break e}break;case 5:_n=w.stateNode,ms=!1;break e;case 3:case 4:_n=w.stateNode.containerInfo,ms=!0;break e}w=w.return}if(_n===null)throw Error(l(160));mm(f,x,d),_n=null,ms=!1,f=d.alternate,f!==null&&(f.return=null),d.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ym(t,e),t=t.sibling}var eo=null;function ym(e,t){var s=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ps(t,e),gs(e),a&4&&(di(3,e,e.return),Dl(3,e),di(5,e,e.return));break;case 1:ps(t,e),gs(e),a&512&&($n||s===null||bo(s,s.return)),a&64&&Lo&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?a:s.concat(a))));break;case 26:var d=eo;if(ps(t,e),gs(e),a&512&&($n||s===null||bo(s,s.return)),a&4){var f=s!==null?s.memoizedState:null;if(a=e.memoizedState,s===null)if(a===null)if(e.stateNode===null){e:{a=e.type,s=e.memoizedProps,d=d.ownerDocument||d;t:switch(a){case"title":f=d.getElementsByTagName("title")[0],(!f||f[Ei]||f[Yt]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=d.createElement(a),d.head.insertBefore(f,d.querySelector("head > title"))),Kn(f,a,s),f[Yt]=e,Nn(f),a=f;break e;case"link":var x=yp("link","href",d).get(a+(s.href||""));if(x){for(var w=0;w<x.length;w++)if(f=x[w],f.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&f.getAttribute("rel")===(s.rel==null?null:s.rel)&&f.getAttribute("title")===(s.title==null?null:s.title)&&f.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){x.splice(w,1);break t}}f=d.createElement(a),Kn(f,a,s),d.head.appendChild(f);break;case"meta":if(x=yp("meta","content",d).get(a+(s.content||""))){for(w=0;w<x.length;w++)if(f=x[w],f.getAttribute("content")===(s.content==null?null:""+s.content)&&f.getAttribute("name")===(s.name==null?null:s.name)&&f.getAttribute("property")===(s.property==null?null:s.property)&&f.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&f.getAttribute("charset")===(s.charSet==null?null:s.charSet)){x.splice(w,1);break t}}f=d.createElement(a),Kn(f,a,s),d.head.appendChild(f);break;default:throw Error(l(468,a))}f[Yt]=e,Nn(f),a=f}e.stateNode=a}else xp(d,e.type,e.stateNode);else e.stateNode=gp(d,a,e.memoizedProps);else f!==a?(f===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):f.count--,a===null?xp(d,e.type,e.stateNode):gp(d,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Td(e,e.memoizedProps,s.memoizedProps)}break;case 27:ps(t,e),gs(e),a&512&&($n||s===null||bo(s,s.return)),s!==null&&a&4&&Td(e,e.memoizedProps,s.memoizedProps);break;case 5:if(ps(t,e),gs(e),a&512&&($n||s===null||bo(s,s.return)),e.flags&32){d=e.stateNode;try{Qo(d,"")}catch(Be){Gt(e,e.return,Be)}}a&4&&e.stateNode!=null&&(d=e.memoizedProps,Td(e,d,s!==null?s.memoizedProps:d)),a&1024&&(Dd=!0);break;case 6:if(ps(t,e),gs(e),a&4){if(e.stateNode===null)throw Error(l(162));a=e.memoizedProps,s=e.stateNode;try{s.nodeValue=a}catch(Be){Gt(e,e.return,Be)}}break;case 3:if(Mc=null,d=eo,eo=jc(t.containerInfo),ps(t,e),eo=d,gs(e),a&4&&s!==null&&s.memoizedState.isDehydrated)try{Ha(t.containerInfo)}catch(Be){Gt(e,e.return,Be)}Dd&&(Dd=!1,xm(e));break;case 4:a=eo,eo=jc(e.stateNode.containerInfo),ps(t,e),gs(e),eo=a;break;case 12:ps(t,e),gs(e);break;case 31:ps(t,e),gs(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,fc(e,a)));break;case 13:ps(t,e),gs(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(_c=Te()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,fc(e,a)));break;case 22:d=e.memoizedState!==null;var R=s!==null&&s.memoizedState!==null,H=Lo,ee=$n;if(Lo=H||d,$n=ee||R,ps(t,e),$n=ee,Lo=H,gs(e),a&8192)e:for(t=e.stateNode,t._visibility=d?t._visibility&-2:t._visibility|1,d&&(s===null||R||Lo||$n||Fi(e)),s=null,t=e;;){if(t.tag===5||t.tag===26){if(s===null){R=s=t;try{if(f=R.stateNode,d)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{w=R.stateNode;var ie=R.memoizedProps.style,X=ie!=null&&ie.hasOwnProperty("display")?ie.display:null;w.style.display=X==null||typeof X=="boolean"?"":(""+X).trim()}}catch(Be){Gt(R,R.return,Be)}}}else if(t.tag===6){if(s===null){R=t;try{R.stateNode.nodeValue=d?"":R.memoizedProps}catch(Be){Gt(R,R.return,Be)}}}else if(t.tag===18){if(s===null){R=t;try{var q=R.stateNode;d?rp(q,!0):rp(R.stateNode,!1)}catch(Be){Gt(R,R.return,Be)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;s===t&&(s=null),t=t.return}s===t&&(s=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(s=a.retryQueue,s!==null&&(a.retryQueue=null,fc(e,s))));break;case 19:ps(t,e),gs(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,fc(e,a)));break;case 30:break;case 21:break;default:ps(t,e),gs(e)}}function gs(e){var t=e.flags;if(t&2){try{for(var s,a=e.return;a!==null;){if(um(a)){s=a;break}a=a.return}if(s==null)throw Error(l(160));switch(s.tag){case 27:var d=s.stateNode,f=Rd(e);dc(e,f,d);break;case 5:var x=s.stateNode;s.flags&32&&(Qo(x,""),s.flags&=-33);var w=Rd(e);dc(e,w,x);break;case 3:case 4:var R=s.stateNode.containerInfo,H=Rd(e);Ad(e,H,R);break;default:throw Error(l(161))}}catch(ee){Gt(e,e.return,ee)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Bo(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)hm(e,t.alternate,t),t=t.sibling}function Fi(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:di(4,t,t.return),Fi(t);break;case 1:bo(t,t.return);var s=t.stateNode;typeof s.componentWillUnmount=="function"&&rm(t,t.return,s),Fi(t);break;case 27:Hl(t.stateNode);case 26:case 5:bo(t,t.return),Fi(t);break;case 22:t.memoizedState===null&&Fi(t);break;case 30:Fi(t);break;default:Fi(t)}e=e.sibling}}function $o(e,t,s){for(s=s&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,d=e,f=t,x=f.flags;switch(f.tag){case 0:case 11:case 15:$o(d,f,s),Dl(4,f);break;case 1:if($o(d,f,s),a=f,d=a.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(H){Gt(a,a.return,H)}if(a=f,d=a.updateQueue,d!==null){var w=a.stateNode;try{var R=d.shared.hiddenCallbacks;if(R!==null)for(d.shared.hiddenCallbacks=null,d=0;d<R.length;d++)Vh(R[d],w)}catch(H){Gt(a,a.return,H)}}s&&x&64&&lm(f),Nl(f,f.return);break;case 27:dm(f);case 26:case 5:$o(d,f,s),s&&a===null&&x&4&&cm(f),Nl(f,f.return);break;case 12:$o(d,f,s);break;case 31:$o(d,f,s),s&&x&4&&pm(d,f);break;case 13:$o(d,f,s),s&&x&4&&gm(d,f);break;case 22:f.memoizedState===null&&$o(d,f,s),Nl(f,f.return);break;case 30:break;default:$o(d,f,s)}t=t.sibling}}function Nd(e,t){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&xl(s))}function Od(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&xl(e))}function to(e,t,s,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)bm(e,t,s,a),t=t.sibling}function bm(e,t,s,a){var d=t.flags;switch(t.tag){case 0:case 11:case 15:to(e,t,s,a),d&2048&&Dl(9,t);break;case 1:to(e,t,s,a);break;case 3:to(e,t,s,a),d&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&xl(e)));break;case 12:if(d&2048){to(e,t,s,a),e=t.stateNode;try{var f=t.memoizedProps,x=f.id,w=f.onPostCommit;typeof w=="function"&&w(x,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(R){Gt(t,t.return,R)}}else to(e,t,s,a);break;case 31:to(e,t,s,a);break;case 13:to(e,t,s,a);break;case 23:break;case 22:f=t.stateNode,x=t.alternate,t.memoizedState!==null?f._visibility&2?to(e,t,s,a):Ol(e,t):f._visibility&2?to(e,t,s,a):(f._visibility|=2,Aa(e,t,s,a,(t.subtreeFlags&10256)!==0||!1)),d&2048&&Nd(x,t);break;case 24:to(e,t,s,a),d&2048&&Od(t.alternate,t);break;default:to(e,t,s,a)}}function Aa(e,t,s,a,d){for(d=d&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var f=e,x=t,w=s,R=a,H=x.flags;switch(x.tag){case 0:case 11:case 15:Aa(f,x,w,R,d),Dl(8,x);break;case 23:break;case 22:var ee=x.stateNode;x.memoizedState!==null?ee._visibility&2?Aa(f,x,w,R,d):Ol(f,x):(ee._visibility|=2,Aa(f,x,w,R,d)),d&&H&2048&&Nd(x.alternate,x);break;case 24:Aa(f,x,w,R,d),d&&H&2048&&Od(x.alternate,x);break;default:Aa(f,x,w,R,d)}t=t.sibling}}function Ol(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var s=e,a=t,d=a.flags;switch(a.tag){case 22:Ol(s,a),d&2048&&Nd(a.alternate,a);break;case 24:Ol(s,a),d&2048&&Od(a.alternate,a);break;default:Ol(s,a)}t=t.sibling}}var Ll=8192;function Da(e,t,s){if(e.subtreeFlags&Ll)for(e=e.child;e!==null;)vm(e,t,s),e=e.sibling}function vm(e,t,s){switch(e.tag){case 26:Da(e,t,s),e.flags&Ll&&e.memoizedState!==null&&E1(s,eo,e.memoizedState,e.memoizedProps);break;case 5:Da(e,t,s);break;case 3:case 4:var a=eo;eo=jc(e.stateNode.containerInfo),Da(e,t,s),eo=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Ll,Ll=16777216,Da(e,t,s),Ll=a):Da(e,t,s));break;default:Da(e,t,s)}}function wm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function zl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var s=0;s<t.length;s++){var a=t[s];Gn=a,km(a,e)}wm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Sm(e),e=e.sibling}function Sm(e){switch(e.tag){case 0:case 11:case 15:zl(e),e.flags&2048&&di(9,e,e.return);break;case 3:zl(e);break;case 12:zl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,hc(e)):zl(e);break;default:zl(e)}}function hc(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var s=0;s<t.length;s++){var a=t[s];Gn=a,km(a,e)}wm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:di(8,t,t.return),hc(t);break;case 22:s=t.stateNode,s._visibility&2&&(s._visibility&=-3,hc(t));break;default:hc(t)}e=e.sibling}}function km(e,t){for(;Gn!==null;){var s=Gn;switch(s.tag){case 0:case 11:case 15:di(8,s,t);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var a=s.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:xl(s.memoizedState.cache)}if(a=s.child,a!==null)a.return=s,Gn=a;else e:for(s=e;Gn!==null;){a=Gn;var d=a.sibling,f=a.return;if(_m(a),a===s){Gn=null;break e}if(d!==null){d.return=f,Gn=d;break e}Gn=f}}}var Hy={getCacheForType:function(e){var t=Qn(Ln),s=t.data.get(e);return s===void 0&&(s=e(),t.data.set(e,s)),s},cacheSignal:function(){return Qn(Ln).controller.signal}},Yy=typeof WeakMap=="function"?WeakMap:Map,It=0,nn=null,Mt=null,Nt=0,Xt=0,Ts=null,fi=!1,Na=!1,Ld=!1,Po=0,kn=0,hi=0,Wi=0,zd=0,Rs=0,Oa=0,Bl=null,ys=null,Bd=!1,_c=0,Cm=0,mc=1/0,pc=null,_i=null,Hn=0,mi=null,La=null,Io=0,$d=0,Pd=null,jm=null,$l=0,Id=null;function As(){return(It&2)!==0&&Nt!==0?Nt&-Nt:N.T!==null?Fd():Zn()}function Em(){if(Rs===0)if((Nt&536870912)===0||zt){var e=wt;wt<<=1,(wt&3932160)===0&&(wt=262144),Rs=e}else Rs=536870912;return e=Es.current,e!==null&&(e.flags|=32),Rs}function xs(e,t,s){(e===nn&&(Xt===2||Xt===9)||e.cancelPendingCommit!==null)&&(za(e,0),pi(e,Nt,Rs,!1)),Ge(e,s),((It&2)===0||e!==nn)&&(e===nn&&((It&2)===0&&(Wi|=s),kn===4&&pi(e,Nt,Rs,!1)),vo(e))}function Mm(e,t,s){if((It&6)!==0)throw Error(l(327));var a=!s&&(t&127)===0&&(t&e.expiredLanes)===0||yt(e,t),d=a?Fy(e,t):Hd(e,t,!0),f=a;do{if(d===0){Na&&!a&&pi(e,t,0,!1);break}else{if(s=e.current.alternate,f&&!Xy(s)){d=Hd(e,t,!1),f=!1;continue}if(d===2){if(f=t,e.errorRecoveryDisabledLanes&f)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){t=x;e:{var w=e;d=Bl;var R=w.current.memoizedState.isDehydrated;if(R&&(za(w,x).flags|=256),x=Hd(w,x,!1),x!==2){if(Ld&&!R){w.errorRecoveryDisabledLanes|=f,Wi|=f,d=4;break e}f=ys,ys=d,f!==null&&(ys===null?ys=f:ys.push.apply(ys,f))}d=x}if(f=!1,d!==2)continue}}if(d===1){za(e,0),pi(e,t,0,!0);break}e:{switch(a=e,f=d,f){case 0:case 1:throw Error(l(345));case 4:if((t&4194048)!==t)break;case 6:pi(a,t,Rs,!fi);break e;case 2:ys=null;break;case 3:case 5:break;default:throw Error(l(329))}if((t&62914560)===t&&(d=_c+300-Te(),10<d)){if(pi(a,t,Rs,!fi),Re(a,0,!0)!==0)break e;Io=t,a.timeoutHandle=ip(Tm.bind(null,a,s,ys,pc,Bd,t,Rs,Wi,Oa,fi,f,"Throttled",-0,0),d);break e}Tm(a,s,ys,pc,Bd,t,Rs,Wi,Oa,fi,f,null,-0,0)}}break}while(!0);vo(e)}function Tm(e,t,s,a,d,f,x,w,R,H,ee,ie,X,q){if(e.timeoutHandle=-1,ie=t.subtreeFlags,ie&8192||(ie&16785408)===16785408){ie={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qs},vm(t,f,ie);var Be=(f&62914560)===f?_c-Te():(f&4194048)===f?Cm-Te():0;if(Be=M1(ie,Be),Be!==null){Io=f,e.cancelPendingCommit=Be(Bm.bind(null,e,t,f,s,a,d,x,w,R,ee,ie,null,X,q)),pi(e,f,x,!H);return}}Bm(e,t,f,s,a,d,x,w,R)}function Xy(e){for(var t=e;;){var s=t.tag;if((s===0||s===11||s===15)&&t.flags&16384&&(s=t.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var a=0;a<s.length;a++){var d=s[a],f=d.getSnapshot;d=d.value;try{if(!we(f(),d))return!1}catch{return!1}}if(s=t.child,t.subtreeFlags&16384&&s!==null)s.return=t,t=s;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pi(e,t,s,a){t&=~zd,t&=~Wi,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var d=t;0<d;){var f=31-it(d),x=1<<f;a[f]=-1,d&=~x}s!==0&&vn(e,s,t)}function gc(){return(It&6)===0?(Pl(0),!1):!0}function Ud(){if(Mt!==null){if(Xt===0)var e=Mt.return;else e=Mt,To=$i=null,sd(e),ja=null,vl=0,e=Mt;for(;e!==null;)am(e.alternate,e),e=e.return;Mt=null}}function za(e,t){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,u1(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Io=0,Ud(),nn=e,Mt=s=Eo(e.current,null),Nt=t,Xt=0,Ts=null,fi=!1,Na=yt(e,t),Ld=!1,Oa=Rs=zd=Wi=hi=kn=0,ys=Bl=null,Bd=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var d=31-it(a),f=1<<d;t|=e[d],a&=~f}return Po=t,$r(),s}function Rm(e,t){gt=null,N.H=Tl,t===Ca||t===Fr?(t=Fh(),Xt=3):t===Gu?(t=Fh(),Xt=4):Xt=t===xd?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ts=t,Mt===null&&(kn=1,ac(e,Ps(t,e.current)))}function Am(){var e=Es.current;return e===null?!0:(Nt&4194048)===Nt?Ys===null:(Nt&62914560)===Nt||(Nt&536870912)!==0?e===Ys:!1}function Dm(){var e=N.H;return N.H=Tl,e===null?Tl:e}function Nm(){var e=N.A;return N.A=Hy,e}function yc(){kn=4,fi||(Nt&4194048)!==Nt&&Es.current!==null||(Na=!0),(hi&134217727)===0&&(Wi&134217727)===0||nn===null||pi(nn,Nt,Rs,!1)}function Hd(e,t,s){var a=It;It|=2;var d=Dm(),f=Nm();(nn!==e||Nt!==t)&&(pc=null,za(e,t)),t=!1;var x=kn;e:do try{if(Xt!==0&&Mt!==null){var w=Mt,R=Ts;switch(Xt){case 8:Ud(),x=6;break e;case 3:case 2:case 9:case 6:Es.current===null&&(t=!0);var H=Xt;if(Xt=0,Ts=null,Ba(e,w,R,H),s&&Na){x=0;break e}break;default:H=Xt,Xt=0,Ts=null,Ba(e,w,R,H)}}Gy(),x=kn;break}catch(ee){Rm(e,ee)}while(!0);return t&&e.shellSuspendCounter++,To=$i=null,It=a,N.H=d,N.A=f,Mt===null&&(nn=null,Nt=0,$r()),x}function Gy(){for(;Mt!==null;)Om(Mt)}function Fy(e,t){var s=It;It|=2;var a=Dm(),d=Nm();nn!==e||Nt!==t?(pc=null,mc=Te()+500,za(e,t)):Na=yt(e,t);e:do try{if(Xt!==0&&Mt!==null){t=Mt;var f=Ts;t:switch(Xt){case 1:Xt=0,Ts=null,Ba(e,t,f,1);break;case 2:case 9:if(Xh(f)){Xt=0,Ts=null,Lm(t);break}t=function(){Xt!==2&&Xt!==9||nn!==e||(Xt=7),vo(e)},f.then(t,t);break e;case 3:Xt=7;break e;case 4:Xt=5;break e;case 7:Xh(f)?(Xt=0,Ts=null,Lm(t)):(Xt=0,Ts=null,Ba(e,t,f,7));break;case 5:var x=null;switch(Mt.tag){case 26:x=Mt.memoizedState;case 5:case 27:var w=Mt;if(x?bp(x):w.stateNode.complete){Xt=0,Ts=null;var R=w.sibling;if(R!==null)Mt=R;else{var H=w.return;H!==null?(Mt=H,xc(H)):Mt=null}break t}}Xt=0,Ts=null,Ba(e,t,f,5);break;case 6:Xt=0,Ts=null,Ba(e,t,f,6);break;case 8:Ud(),kn=6;break e;default:throw Error(l(462))}}Wy();break}catch(ee){Rm(e,ee)}while(!0);return To=$i=null,N.H=a,N.A=d,It=s,Mt!==null?0:(nn=null,Nt=0,$r(),kn)}function Wy(){for(;Mt!==null&&!nt();)Om(Mt)}function Om(e){var t=om(e.alternate,e,Po);e.memoizedProps=e.pendingProps,t===null?xc(e):Mt=t}function Lm(e){var t=e,s=t.alternate;switch(t.tag){case 15:case 0:t=Z_(s,t,t.pendingProps,t.type,void 0,Nt);break;case 11:t=Z_(s,t,t.pendingProps,t.type.render,t.ref,Nt);break;case 5:sd(t);default:am(s,t),t=Mt=Nh(t,Po),t=om(s,t,Po)}e.memoizedProps=e.pendingProps,t===null?xc(e):Mt=t}function Ba(e,t,s,a){To=$i=null,sd(t),ja=null,vl=0;var d=t.return;try{if(Ly(e,d,t,s,Nt)){kn=1,ac(e,Ps(s,e.current)),Mt=null;return}}catch(f){if(d!==null)throw Mt=d,f;kn=1,ac(e,Ps(s,e.current)),Mt=null;return}t.flags&32768?(zt||a===1?e=!0:Na||(Nt&536870912)!==0?e=!1:(fi=e=!0,(a===2||a===9||a===3||a===6)&&(a=Es.current,a!==null&&a.tag===13&&(a.flags|=16384))),zm(t,e)):xc(t)}function xc(e){var t=e;do{if((t.flags&32768)!==0){zm(t,fi);return}e=t.return;var s=$y(t.alternate,t,Po);if(s!==null){Mt=s;return}if(t=t.sibling,t!==null){Mt=t;return}Mt=t=e}while(t!==null);kn===0&&(kn=5)}function zm(e,t){do{var s=Py(e.alternate,e);if(s!==null){s.flags&=32767,Mt=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!t&&(e=e.sibling,e!==null)){Mt=e;return}Mt=e=s}while(e!==null);kn=6,Mt=null}function Bm(e,t,s,a,d,f,x,w,R){e.cancelPendingCommit=null;do bc();while(Hn!==0);if((It&6)!==0)throw Error(l(327));if(t!==null){if(t===e.current)throw Error(l(177));if(f=t.lanes|t.childLanes,f|=Ru,Lt(e,s,f,x,w,R),e===nn&&(Mt=nn=null,Nt=0),La=t,mi=e,Io=s,$d=f,Pd=d,jm=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ky(ze,function(){return Hm(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=N.T,N.T=null,d=ce.p,ce.p=2,x=It,It|=4;try{Iy(e,t,s)}finally{It=x,ce.p=d,N.T=a}}Hn=1,$m(),Pm(),Im()}}function $m(){if(Hn===1){Hn=0;var e=mi,t=La,s=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||s){s=N.T,N.T=null;var a=ce.p;ce.p=2;var d=It;It|=4;try{ym(t,e);var f=ef,x=hn(e.containerInfo),w=f.focusedElem,R=f.selectionRange;if(x!==w&&w&&w.ownerDocument&&Dt(w.ownerDocument.documentElement,w)){if(R!==null&&ot(w)){var H=R.start,ee=R.end;if(ee===void 0&&(ee=H),"selectionStart"in w)w.selectionStart=H,w.selectionEnd=Math.min(ee,w.value.length);else{var ie=w.ownerDocument||document,X=ie&&ie.defaultView||window;if(X.getSelection){var q=X.getSelection(),Be=w.textContent.length,lt=Math.min(R.start,Be),Zt=R.end===void 0?lt:Math.min(R.end,Be);!q.extend&&lt>Zt&&(x=Zt,Zt=lt,lt=x);var P=gn(w,lt),O=gn(w,Zt);if(P&&O&&(q.rangeCount!==1||q.anchorNode!==P.node||q.anchorOffset!==P.offset||q.focusNode!==O.node||q.focusOffset!==O.offset)){var U=ie.createRange();U.setStart(P.node,P.offset),q.removeAllRanges(),lt>Zt?(q.addRange(U),q.extend(O.node,O.offset)):(U.setEnd(O.node,O.offset),q.addRange(U))}}}}for(ie=[],q=w;q=q.parentNode;)q.nodeType===1&&ie.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<ie.length;w++){var se=ie[w];se.element.scrollLeft=se.left,se.element.scrollTop=se.top}}Dc=!!Jd,ef=Jd=null}finally{It=d,ce.p=a,N.T=s}}e.current=t,Hn=2}}function Pm(){if(Hn===2){Hn=0;var e=mi,t=La,s=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||s){s=N.T,N.T=null;var a=ce.p;ce.p=2;var d=It;It|=4;try{hm(e,t.alternate,t)}finally{It=d,ce.p=a,N.T=s}}Hn=3}}function Im(){if(Hn===4||Hn===3){Hn=0,Ue();var e=mi,t=La,s=Io,a=jm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Hn=5:(Hn=0,La=mi=null,Um(e,e.pendingLanes));var d=e.pendingLanes;if(d===0&&(_i=null),vs(s),t=t.stateNode,ke&&typeof ke.onCommitFiberRoot=="function")try{ke.onCommitFiberRoot(Oe,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=N.T,d=ce.p,ce.p=2,N.T=null;try{for(var f=e.onRecoverableError,x=0;x<a.length;x++){var w=a[x];f(w.value,{componentStack:w.stack})}}finally{N.T=t,ce.p=d}}(Io&3)!==0&&bc(),vo(e),d=e.pendingLanes,(s&261930)!==0&&(d&42)!==0?e===Id?$l++:($l=0,Id=e):$l=0,Pl(0)}}function Um(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,xl(t)))}function bc(){return $m(),Pm(),Im(),Hm()}function Hm(){if(Hn!==5)return!1;var e=mi,t=$d;$d=0;var s=vs(Io),a=N.T,d=ce.p;try{ce.p=32>s?32:s,N.T=null,s=Pd,Pd=null;var f=mi,x=Io;if(Hn=0,La=mi=null,Io=0,(It&6)!==0)throw Error(l(331));var w=It;if(It|=4,Sm(f.current),bm(f,f.current,x,s),It=w,Pl(0,!1),ke&&typeof ke.onPostCommitFiberRoot=="function")try{ke.onPostCommitFiberRoot(Oe,f)}catch{}return!0}finally{ce.p=d,N.T=a,Um(e,t)}}function Ym(e,t,s){t=Ps(s,t),t=yd(e.stateNode,t,2),e=ri(e,t,2),e!==null&&(Ge(e,2),vo(e))}function Gt(e,t,s){if(e.tag===3)Ym(e,e,s);else for(;t!==null;){if(t.tag===3){Ym(t,e,s);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(_i===null||!_i.has(a))){e=Ps(s,e),s=X_(2),a=ri(t,s,2),a!==null&&(G_(s,a,t,e),Ge(a,2),vo(a));break}}t=t.return}}function Yd(e,t,s){var a=e.pingCache;if(a===null){a=e.pingCache=new Yy;var d=new Set;a.set(t,d)}else d=a.get(t),d===void 0&&(d=new Set,a.set(t,d));d.has(s)||(Ld=!0,d.add(s),e=qy.bind(null,e,t,s),t.then(e,e))}function qy(e,t,s){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,nn===e&&(Nt&s)===s&&(kn===4||kn===3&&(Nt&62914560)===Nt&&300>Te()-_c?(It&2)===0&&za(e,0):zd|=s,Oa===Nt&&(Oa=0)),vo(e)}function Xm(e,t){t===0&&(t=ht()),e=Li(e,t),e!==null&&(Ge(e,t),vo(e))}function Qy(e){var t=e.memoizedState,s=0;t!==null&&(s=t.retryLane),Xm(e,s)}function Vy(e,t){var s=0;switch(e.tag){case 31:case 13:var a=e.stateNode,d=e.memoizedState;d!==null&&(s=d.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(l(314))}a!==null&&a.delete(t),Xm(e,s)}function Ky(e,t){return Fe(e,t)}var vc=null,$a=null,Xd=!1,wc=!1,Gd=!1,gi=0;function vo(e){e!==$a&&e.next===null&&($a===null?vc=$a=e:$a=$a.next=e),wc=!0,Xd||(Xd=!0,Jy())}function Pl(e,t){if(!Gd&&wc){Gd=!0;do for(var s=!1,a=vc;a!==null;){if(e!==0){var d=a.pendingLanes;if(d===0)var f=0;else{var x=a.suspendedLanes,w=a.pingedLanes;f=(1<<31-it(42|e)+1)-1,f&=d&~(x&~w),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(s=!0,qm(a,f))}else f=Nt,f=Re(a,a===nn?f:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(f&3)===0||yt(a,f)||(s=!0,qm(a,f));a=a.next}while(s);Gd=!1}}function Zy(){Gm()}function Gm(){wc=Xd=!1;var e=0;gi!==0&&c1()&&(e=gi);for(var t=Te(),s=null,a=vc;a!==null;){var d=a.next,f=Fm(a,t);f===0?(a.next=null,s===null?vc=d:s.next=d,d===null&&($a=s)):(s=a,(e!==0||(f&3)!==0)&&(wc=!0)),a=d}Hn!==0&&Hn!==5||Pl(e),gi!==0&&(gi=0)}function Fm(e,t){for(var s=e.suspendedLanes,a=e.pingedLanes,d=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var x=31-it(f),w=1<<x,R=d[x];R===-1?((w&s)===0||(w&a)!==0)&&(d[x]=xt(w,t)):R<=t&&(e.expiredLanes|=w),f&=~w}if(t=nn,s=Nt,s=Re(e,e===t?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,s===0||e===t&&(Xt===2||Xt===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Ve(a),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||yt(e,s)){if(t=s&-s,t===e.callbackPriority)return t;switch(a!==null&&Ve(a),vs(s)){case 2:case 8:s=Ht;break;case 32:s=ze;break;case 268435456:s=Y;break;default:s=ze}return a=Wm.bind(null,e),s=Fe(s,a),e.callbackPriority=t,e.callbackNode=s,t}return a!==null&&a!==null&&Ve(a),e.callbackPriority=2,e.callbackNode=null,2}function Wm(e,t){if(Hn!==0&&Hn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(bc()&&e.callbackNode!==s)return null;var a=Nt;return a=Re(e,e===nn?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Mm(e,a,t),Fm(e,Te()),e.callbackNode!=null&&e.callbackNode===s?Wm.bind(null,e):null)}function qm(e,t){if(bc())return null;Mm(e,t,!0)}function Jy(){d1(function(){(It&6)!==0?Fe(St,Zy):Gm()})}function Fd(){if(gi===0){var e=Sa;e===0&&(e=Ae,Ae<<=1,(Ae&261888)===0&&(Ae=256)),gi=e}return gi}function Qm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ri(""+e)}function Vm(e,t){var s=t.ownerDocument.createElement("input");return s.name=t.name,s.value=t.value,e.id&&s.setAttribute("form",e.id),t.parentNode.insertBefore(s,t),e=new FormData(e),s.parentNode.removeChild(s),e}function e1(e,t,s,a,d){if(t==="submit"&&s&&s.stateNode===d){var f=Qm((d[jn]||null).action),x=a.submitter;x&&(t=(t=x[jn]||null)?Qm(t.formAction):x.getAttribute("formAction"),t!==null&&(f=t,x=null));var w=new ra("action","action",null,a,d);e.push({event:w,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(gi!==0){var R=x?Vm(d,x):new FormData(d);fd(s,{pending:!0,data:R,method:d.method,action:f},null,R)}}else typeof f=="function"&&(w.preventDefault(),R=x?Vm(d,x):new FormData(d),fd(s,{pending:!0,data:R,method:d.method,action:f},f,R))},currentTarget:d}]})}}for(var Wd=0;Wd<Tu.length;Wd++){var qd=Tu[Wd],t1=qd.toLowerCase(),n1=qd[0].toUpperCase()+qd.slice(1);Js(t1,"on"+n1)}Js(go,"onAnimationEnd"),Js(Lr,"onAnimationIteration"),Js(zr,"onAnimationStart"),Js("dblclick","onDoubleClick"),Js("focusin","onFocus"),Js("focusout","onBlur"),Js(Eu,"onTransitionRun"),Js(Mu,"onTransitionStart"),Js(by,"onTransitionCancel"),Js(Rh,"onTransitionEnd"),Xn("onMouseEnter",["mouseout","mouseover"]),Xn("onMouseLeave",["mouseout","mouseover"]),Xn("onPointerEnter",["pointerout","pointerover"]),Xn("onPointerLeave",["pointerout","pointerover"]),Ns("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ns("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ns("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ns("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ns("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ns("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),s1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Il));function Km(e,t){t=(t&4)!==0;for(var s=0;s<e.length;s++){var a=e[s],d=a.event;a=a.listeners;e:{var f=void 0;if(t)for(var x=a.length-1;0<=x;x--){var w=a[x],R=w.instance,H=w.currentTarget;if(w=w.listener,R!==f&&d.isPropagationStopped())break e;f=w,d.currentTarget=H;try{f(d)}catch(ee){Br(ee)}d.currentTarget=null,f=R}else for(x=0;x<a.length;x++){if(w=a[x],R=w.instance,H=w.currentTarget,w=w.listener,R!==f&&d.isPropagationStopped())break e;f=w,d.currentTarget=H;try{f(d)}catch(ee){Br(ee)}d.currentTarget=null,f=R}}}}function Tt(e,t){var s=t[Jn];s===void 0&&(s=t[Jn]=new Set);var a=e+"__bubble";s.has(a)||(Zm(t,e,2,!1),s.add(a))}function Qd(e,t,s){var a=0;t&&(a|=4),Zm(s,e,a,t)}var Sc="_reactListening"+Math.random().toString(36).slice(2);function Vd(e){if(!e[Sc]){e[Sc]=!0,nl.forEach(function(s){s!=="selectionchange"&&(s1.has(s)||Qd(s,!1,e),Qd(s,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Sc]||(t[Sc]=!0,Qd("selectionchange",!1,t))}}function Zm(e,t,s,a){switch(Ep(t)){case 2:var d=A1;break;case 8:d=D1;break;default:d=ff}s=d.bind(null,t,s,e),d=void 0,!Ks||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(d=!0),a?d!==void 0?e.addEventListener(t,s,{capture:!0,passive:d}):e.addEventListener(t,s,!0):d!==void 0?e.addEventListener(t,s,{passive:d}):e.addEventListener(t,s,!1)}function Kd(e,t,s,a,d){var f=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var x=a.tag;if(x===3||x===4){var w=a.stateNode.containerInfo;if(w===d)break;if(x===4)for(x=a.return;x!==null;){var R=x.tag;if((R===3||R===4)&&x.stateNode.containerInfo===d)return;x=x.return}for(;w!==null;){if(x=Xo(w),x===null)return;if(R=x.tag,R===5||R===6||R===26||R===27){a=f=x;continue e}w=w.parentNode}}a=a.return}fo(function(){var H=f,ee=Vs(s),ie=[];e:{var X=Ah.get(e);if(X!==void 0){var q=ra,Be=e;switch(e){case"keypress":if(ho(s)===0)break e;case"keydown":case"keyup":q=Er;break;case"focusin":Be="focus",q=fa;break;case"focusout":Be="blur",q=fa;break;case"beforeblur":case"afterblur":q=fa;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=Zo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=Sr;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=Tr;break;case go:case Lr:case zr:q=Su;break;case Rh:q=zs;break;case"scroll":case"scrollend":q=Zs;break;case"wheel":q=dl;break;case"copy":case"cut":case"paste":q=Cr;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=Oi;break;case"toggle":case"beforetoggle":q=ma}var lt=(t&4)!==0,Zt=!lt&&(e==="scroll"||e==="scrollend"),P=lt?X!==null?X+"Capture":null:X;lt=[];for(var O=H,U;O!==null;){var se=O;if(U=se.stateNode,se=se.tag,se!==5&&se!==26&&se!==27||U===null||P===null||(se=Bt(O,P),se!=null&&lt.push(Ul(O,se,U))),Zt)break;O=O.return}0<lt.length&&(X=new q(X,Be,null,s,ee),ie.push({event:X,listeners:lt}))}}if((t&7)===0){e:{if(X=e==="mouseover"||e==="pointerover",q=e==="mouseout"||e==="pointerout",X&&s!==ol&&(Be=s.relatedTarget||s.fromElement)&&(Xo(Be)||Be[Ee]))break e;if((q||X)&&(X=ee.window===ee?ee:(X=ee.ownerDocument)?X.defaultView||X.parentWindow:window,q?(Be=s.relatedTarget||s.toElement,q=H,Be=Be?Xo(Be):null,Be!==null&&(Zt=u(Be),lt=Be.tag,Be!==Zt||lt!==5&&lt!==27&&lt!==6)&&(Be=null)):(q=null,Be=H),q!==Be)){if(lt=Zo,se="onMouseLeave",P="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(lt=Oi,se="onPointerLeave",P="onPointerEnter",O="pointer"),Zt=q==null?X:Mi(q),U=Be==null?X:Mi(Be),X=new lt(se,O+"leave",q,s,ee),X.target=Zt,X.relatedTarget=U,se=null,Xo(ee)===H&&(lt=new lt(P,O+"enter",Be,s,ee),lt.target=U,lt.relatedTarget=Zt,se=lt),Zt=se,q&&Be)t:{for(lt=o1,P=q,O=Be,U=0,se=P;se;se=lt(se))U++;se=0;for(var Ze=O;Ze;Ze=lt(Ze))se++;for(;0<U-se;)P=lt(P),U--;for(;0<se-U;)O=lt(O),se--;for(;U--;){if(P===O||O!==null&&P===O.alternate){lt=P;break t}P=lt(P),O=lt(O)}lt=null}else lt=null;q!==null&&Jm(ie,X,q,lt,!1),Be!==null&&Zt!==null&&Jm(ie,Zt,Be,lt,!0)}}e:{if(X=H?Mi(H):window,q=X.nodeName&&X.nodeName.toLowerCase(),q==="select"||q==="input"&&X.type==="file")var $t=D;else if(ml(X))if(T)$t=bt;else{$t=We;var He=Pe}else q=X.nodeName,!q||q.toLowerCase()!=="input"||X.type!=="checkbox"&&X.type!=="radio"?H&&hs(H.elementType)&&($t=D):$t=at;if($t&&($t=$t(e,H))){pl(ie,$t,s,ee);break e}He&&He(e,X,H),e==="focusout"&&H&&X.type==="number"&&H.memoizedProps.value!=null&&co(X,"number",X.value)}switch(He=H?Mi(H):window,e){case"focusin":(ml(He)||He.contentEditable==="true")&&(an=He,Qt=H,En=null);break;case"focusout":En=Qt=an=null;break;case"mousedown":Wn=!0;break;case"contextmenu":case"mouseup":case"dragend":Wn=!1,wn(ie,s,ee);break;case"selectionchange":if(_t)break;case"keydown":case"keyup":wn(ie,s,ee)}var vt;if(hl)e:{switch(e){case"compositionstart":var Ot="onCompositionStart";break e;case"compositionend":Ot="onCompositionEnd";break e;case"compositionupdate":Ot="onCompositionUpdate";break e}Ot=void 0}else jo?Co(e,s)&&(Ot="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(Ot="onCompositionStart");Ot&&(pa&&s.locale!=="ko"&&(jo||Ot!=="onCompositionStart"?Ot==="onCompositionEnd"&&jo&&(vt=al()):(rs=ee,la="value"in rs?rs.value:rs.textContent,jo=!0)),He=kc(H,Ot),0<He.length&&(Ot=new et(Ot,e,null,s,ee),ie.push({event:Ot,listeners:He}),vt?Ot.data=vt:(vt=Ar(s),vt!==null&&(Ot.data=vt)))),(vt=_l?Dr(e,s):Nr(e,s))&&(Ot=kc(H,"onBeforeInput"),0<Ot.length&&(He=new et("onBeforeInput","beforeinput",null,s,ee),ie.push({event:He,listeners:Ot}),He.data=vt)),e1(ie,e,H,s,ee)}Km(ie,t)})}function Ul(e,t,s){return{instance:e,listener:t,currentTarget:s}}function kc(e,t){for(var s=t+"Capture",a=[];e!==null;){var d=e,f=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||f===null||(d=Bt(e,s),d!=null&&a.unshift(Ul(e,d,f)),d=Bt(e,t),d!=null&&a.push(Ul(e,d,f))),e.tag===3)return a;e=e.return}return[]}function o1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Jm(e,t,s,a,d){for(var f=t._reactName,x=[];s!==null&&s!==a;){var w=s,R=w.alternate,H=w.stateNode;if(w=w.tag,R!==null&&R===a)break;w!==5&&w!==26&&w!==27||H===null||(R=H,d?(H=Bt(s,f),H!=null&&x.unshift(Ul(s,H,R))):d||(H=Bt(s,f),H!=null&&x.push(Ul(s,H,R)))),s=s.return}x.length!==0&&e.push({event:t,listeners:x})}var i1=/\r\n?/g,a1=/\u0000|\uFFFD/g;function ep(e){return(typeof e=="string"?e:""+e).replace(i1,`
`).replace(a1,"")}function tp(e,t){return t=ep(t),ep(e)===t}function Kt(e,t,s,a,d,f){switch(s){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Qo(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Qo(e,""+a);break;case"className":es(e,"class",a);break;case"tabIndex":es(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":es(e,s,a);break;case"style":br(e,a,f);break;case"data":if(t!=="object"){es(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||s!=="href")){e.removeAttribute(s);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(s);break}a=Ri(""+a),e.setAttribute(s,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(s==="formAction"?(t!=="input"&&Kt(e,t,"name",d.name,d,null),Kt(e,t,"formEncType",d.formEncType,d,null),Kt(e,t,"formMethod",d.formMethod,d,null),Kt(e,t,"formTarget",d.formTarget,d,null)):(Kt(e,t,"encType",d.encType,d,null),Kt(e,t,"method",d.method,d,null),Kt(e,t,"target",d.target,d,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(s);break}a=Ri(""+a),e.setAttribute(s,a);break;case"onClick":a!=null&&(e.onclick=Qs);break;case"onScroll":a!=null&&Tt("scroll",e);break;case"onScrollEnd":a!=null&&Tt("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(l(61));if(s=a.__html,s!=null){if(d.children!=null)throw Error(l(60));e.innerHTML=s}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}s=Ri(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(s,""+a):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":a===!0?e.setAttribute(s,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(s,a):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(s,a):e.removeAttribute(s);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(s):e.setAttribute(s,a);break;case"popover":Tt("beforetoggle",e),Tt("toggle",e),lo(e,"popover",a);break;case"xlinkActuate":ws(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":ws(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":ws(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":ws(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":ws(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":ws(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":ws(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":ws(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":ws(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":lo(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=vr.get(s)||s,lo(e,s,a))}}function Zd(e,t,s,a,d,f){switch(s){case"style":br(e,a,f);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(l(61));if(s=a.__html,s!=null){if(d.children!=null)throw Error(l(60));e.innerHTML=s}}break;case"children":typeof a=="string"?Qo(e,a):(typeof a=="number"||typeof a=="bigint")&&Qo(e,""+a);break;case"onScroll":a!=null&&Tt("scroll",e);break;case"onScrollEnd":a!=null&&Tt("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Qs);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Fo.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(d=s.endsWith("Capture"),t=s.slice(2,d?s.length-7:void 0),f=e[jn]||null,f=f!=null?f[s]:null,typeof f=="function"&&e.removeEventListener(t,f,d),typeof a=="function")){typeof f!="function"&&f!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(t,a,d);break e}s in e?e[s]=a:a===!0?e.setAttribute(s,""):lo(e,s,a)}}}function Kn(e,t,s){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Tt("error",e),Tt("load",e);var a=!1,d=!1,f;for(f in s)if(s.hasOwnProperty(f)){var x=s[f];if(x!=null)switch(f){case"src":a=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Kt(e,t,f,x,s,null)}}d&&Kt(e,t,"srcSet",s.srcSet,s,null),a&&Kt(e,t,"src",s.src,s,null);return;case"input":Tt("invalid",e);var w=f=x=d=null,R=null,H=null;for(a in s)if(s.hasOwnProperty(a)){var ee=s[a];if(ee!=null)switch(a){case"name":d=ee;break;case"type":x=ee;break;case"checked":R=ee;break;case"defaultChecked":H=ee;break;case"value":f=ee;break;case"defaultValue":w=ee;break;case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(l(137,t));break;default:Kt(e,t,a,ee,s,null)}}pn(e,f,w,R,H,x,d,!1);return;case"select":Tt("invalid",e),a=x=f=null;for(d in s)if(s.hasOwnProperty(d)&&(w=s[d],w!=null))switch(d){case"value":f=w;break;case"defaultValue":x=w;break;case"multiple":a=w;default:Kt(e,t,d,w,s,null)}t=f,s=x,e.multiple=!!a,t!=null?Fn(e,!!a,t,!1):s!=null&&Fn(e,!!a,s,!0);return;case"textarea":Tt("invalid",e),f=d=a=null;for(x in s)if(s.hasOwnProperty(x)&&(w=s[x],w!=null))switch(x){case"value":a=w;break;case"defaultValue":d=w;break;case"children":f=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(l(91));break;default:Kt(e,t,x,w,s,null)}xr(e,a,d,f);return;case"option":for(R in s)if(s.hasOwnProperty(R)&&(a=s[R],a!=null))switch(R){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Kt(e,t,R,a,s,null)}return;case"dialog":Tt("beforetoggle",e),Tt("toggle",e),Tt("cancel",e),Tt("close",e);break;case"iframe":case"object":Tt("load",e);break;case"video":case"audio":for(a=0;a<Il.length;a++)Tt(Il[a],e);break;case"image":Tt("error",e),Tt("load",e);break;case"details":Tt("toggle",e);break;case"embed":case"source":case"link":Tt("error",e),Tt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(H in s)if(s.hasOwnProperty(H)&&(a=s[H],a!=null))switch(H){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Kt(e,t,H,a,s,null)}return;default:if(hs(t)){for(ee in s)s.hasOwnProperty(ee)&&(a=s[ee],a!==void 0&&Zd(e,t,ee,a,s,void 0));return}}for(w in s)s.hasOwnProperty(w)&&(a=s[w],a!=null&&Kt(e,t,w,a,s,null))}function l1(e,t,s,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,f=null,x=null,w=null,R=null,H=null,ee=null;for(q in s){var ie=s[q];if(s.hasOwnProperty(q)&&ie!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":R=ie;default:a.hasOwnProperty(q)||Kt(e,t,q,null,a,ie)}}for(var X in a){var q=a[X];if(ie=s[X],a.hasOwnProperty(X)&&(q!=null||ie!=null))switch(X){case"type":f=q;break;case"name":d=q;break;case"checked":H=q;break;case"defaultChecked":ee=q;break;case"value":x=q;break;case"defaultValue":w=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(l(137,t));break;default:q!==ie&&Kt(e,t,X,q,a,ie)}}ro(e,x,w,R,H,ee,f,d);return;case"select":q=x=w=X=null;for(f in s)if(R=s[f],s.hasOwnProperty(f)&&R!=null)switch(f){case"value":break;case"multiple":q=R;default:a.hasOwnProperty(f)||Kt(e,t,f,null,a,R)}for(d in a)if(f=a[d],R=s[d],a.hasOwnProperty(d)&&(f!=null||R!=null))switch(d){case"value":X=f;break;case"defaultValue":w=f;break;case"multiple":x=f;default:f!==R&&Kt(e,t,d,f,a,R)}t=w,s=x,a=q,X!=null?Fn(e,!!s,X,!1):!!a!=!!s&&(t!=null?Fn(e,!!s,t,!0):Fn(e,!!s,s?[]:"",!1));return;case"textarea":q=X=null;for(w in s)if(d=s[w],s.hasOwnProperty(w)&&d!=null&&!a.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Kt(e,t,w,null,a,d)}for(x in a)if(d=a[x],f=s[x],a.hasOwnProperty(x)&&(d!=null||f!=null))switch(x){case"value":X=d;break;case"defaultValue":q=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(l(91));break;default:d!==f&&Kt(e,t,x,d,a,f)}Un(e,X,q);return;case"option":for(var Be in s)if(X=s[Be],s.hasOwnProperty(Be)&&X!=null&&!a.hasOwnProperty(Be))switch(Be){case"selected":e.selected=!1;break;default:Kt(e,t,Be,null,a,X)}for(R in a)if(X=a[R],q=s[R],a.hasOwnProperty(R)&&X!==q&&(X!=null||q!=null))switch(R){case"selected":e.selected=X&&typeof X!="function"&&typeof X!="symbol";break;default:Kt(e,t,R,X,a,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var lt in s)X=s[lt],s.hasOwnProperty(lt)&&X!=null&&!a.hasOwnProperty(lt)&&Kt(e,t,lt,null,a,X);for(H in a)if(X=a[H],q=s[H],a.hasOwnProperty(H)&&X!==q&&(X!=null||q!=null))switch(H){case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(l(137,t));break;default:Kt(e,t,H,X,a,q)}return;default:if(hs(t)){for(var Zt in s)X=s[Zt],s.hasOwnProperty(Zt)&&X!==void 0&&!a.hasOwnProperty(Zt)&&Zd(e,t,Zt,void 0,a,X);for(ee in a)X=a[ee],q=s[ee],!a.hasOwnProperty(ee)||X===q||X===void 0&&q===void 0||Zd(e,t,ee,X,a,q);return}}for(var P in s)X=s[P],s.hasOwnProperty(P)&&X!=null&&!a.hasOwnProperty(P)&&Kt(e,t,P,null,a,X);for(ie in a)X=a[ie],q=s[ie],!a.hasOwnProperty(ie)||X===q||X==null&&q==null||Kt(e,t,ie,X,a,q)}function np(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function r1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,s=performance.getEntriesByType("resource"),a=0;a<s.length;a++){var d=s[a],f=d.transferSize,x=d.initiatorType,w=d.duration;if(f&&w&&np(x)){for(x=0,w=d.responseEnd,a+=1;a<s.length;a++){var R=s[a],H=R.startTime;if(H>w)break;var ee=R.transferSize,ie=R.initiatorType;ee&&np(ie)&&(R=R.responseEnd,x+=ee*(R<w?1:(w-H)/(R-H)))}if(--a,t+=8*(f+x)/(d.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Jd=null,ef=null;function Cc(e){return e.nodeType===9?e:e.ownerDocument}function sp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function op(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function tf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var nf=null;function c1(){var e=window.event;return e&&e.type==="popstate"?e===nf?!1:(nf=e,!0):(nf=null,!1)}var ip=typeof setTimeout=="function"?setTimeout:void 0,u1=typeof clearTimeout=="function"?clearTimeout:void 0,ap=typeof Promise=="function"?Promise:void 0,d1=typeof queueMicrotask=="function"?queueMicrotask:typeof ap<"u"?function(e){return ap.resolve(null).then(e).catch(f1)}:ip;function f1(e){setTimeout(function(){throw e})}function yi(e){return e==="head"}function lp(e,t){var s=t,a=0;do{var d=s.nextSibling;if(e.removeChild(s),d&&d.nodeType===8)if(s=d.data,s==="/$"||s==="/&"){if(a===0){e.removeChild(d),Ha(t);return}a--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")a++;else if(s==="html")Hl(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,Hl(s);for(var f=s.firstChild;f;){var x=f.nextSibling,w=f.nodeName;f[Ei]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&f.rel.toLowerCase()==="stylesheet"||s.removeChild(f),f=x}}else s==="body"&&Hl(e.ownerDocument.body);s=d}while(s);Ha(t)}function rp(e,t){var s=e;e=0;do{var a=s.nextSibling;if(s.nodeType===1?t?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(t?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),a&&a.nodeType===8)if(s=a.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=a}while(s)}function sf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var s=t;switch(t=t.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":sf(s),oa(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function h1(e,t,s,a){for(;e.nodeType===1;){var d=s;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Ei])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==d.rel||e.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||e.getAttribute("title")!==(d.title==null?null:d.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(d.src==null?null:d.src)||e.getAttribute("type")!==(d.type==null?null:d.type)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var f=d.name==null?null:""+d.name;if(d.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Xs(e.nextSibling),e===null)break}return null}function _1(e,t,s){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Xs(e.nextSibling),e===null))return null;return e}function cp(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Xs(e.nextSibling),e===null))return null;return e}function of(e){return e.data==="$?"||e.data==="$~"}function af(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function m1(e,t){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||s.readyState!=="loading")t();else{var a=function(){t(),s.removeEventListener("DOMContentLoaded",a)};s.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Xs(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var lf=null;function up(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(t===0)return Xs(e.nextSibling);t--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||t++}e=e.nextSibling}return null}function dp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(t===0)return e;t--}else s!=="/$"&&s!=="/&"||t++}e=e.previousSibling}return null}function fp(e,t,s){switch(t=Cc(s),e){case"html":if(e=t.documentElement,!e)throw Error(l(452));return e;case"head":if(e=t.head,!e)throw Error(l(453));return e;case"body":if(e=t.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function Hl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);oa(e)}var Gs=new Map,hp=new Set;function jc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Uo=ce.d;ce.d={f:p1,r:g1,D:y1,C:x1,L:b1,m:v1,X:S1,S:w1,M:k1};function p1(){var e=Uo.f(),t=gc();return e||t}function g1(e){var t=Go(e);t!==null&&t.tag===5&&t.type==="form"?R_(t):Uo.r(e)}var Pa=typeof document>"u"?null:document;function _p(e,t,s){var a=Pa;if(a&&typeof t=="string"&&t){var d=as(t);d='link[rel="'+e+'"][href="'+d+'"]',typeof s=="string"&&(d+='[crossorigin="'+s+'"]'),hp.has(d)||(hp.add(d),e={rel:e,crossOrigin:s,href:t},a.querySelector(d)===null&&(t=a.createElement("link"),Kn(t,"link",e),Nn(t),a.head.appendChild(t)))}}function y1(e){Uo.D(e),_p("dns-prefetch",e,null)}function x1(e,t){Uo.C(e,t),_p("preconnect",e,t)}function b1(e,t,s){Uo.L(e,t,s);var a=Pa;if(a&&e&&t){var d='link[rel="preload"][as="'+as(t)+'"]';t==="image"&&s&&s.imageSrcSet?(d+='[imagesrcset="'+as(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(d+='[imagesizes="'+as(s.imageSizes)+'"]')):d+='[href="'+as(e)+'"]';var f=d;switch(t){case"style":f=Ia(e);break;case"script":f=Ua(e)}Gs.has(f)||(e=y({rel:"preload",href:t==="image"&&s&&s.imageSrcSet?void 0:e,as:t},s),Gs.set(f,e),a.querySelector(d)!==null||t==="style"&&a.querySelector(Yl(f))||t==="script"&&a.querySelector(Xl(f))||(t=a.createElement("link"),Kn(t,"link",e),Nn(t),a.head.appendChild(t)))}}function v1(e,t){Uo.m(e,t);var s=Pa;if(s&&e){var a=t&&typeof t.as=="string"?t.as:"script",d='link[rel="modulepreload"][as="'+as(a)+'"][href="'+as(e)+'"]',f=d;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Ua(e)}if(!Gs.has(f)&&(e=y({rel:"modulepreload",href:e},t),Gs.set(f,e),s.querySelector(d)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Xl(f)))return}a=s.createElement("link"),Kn(a,"link",e),Nn(a),s.head.appendChild(a)}}}function w1(e,t,s){Uo.S(e,t,s);var a=Pa;if(a&&e){var d=ao(a).hoistableStyles,f=Ia(e);t=t||"default";var x=d.get(f);if(!x){var w={loading:0,preload:null};if(x=a.querySelector(Yl(f)))w.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":t},s),(s=Gs.get(f))&&rf(e,s);var R=x=a.createElement("link");Nn(R),Kn(R,"link",e),R._p=new Promise(function(H,ee){R.onload=H,R.onerror=ee}),R.addEventListener("load",function(){w.loading|=1}),R.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Ec(x,t,a)}x={type:"stylesheet",instance:x,count:1,state:w},d.set(f,x)}}}function S1(e,t){Uo.X(e,t);var s=Pa;if(s&&e){var a=ao(s).hoistableScripts,d=Ua(e),f=a.get(d);f||(f=s.querySelector(Xl(d)),f||(e=y({src:e,async:!0},t),(t=Gs.get(d))&&cf(e,t),f=s.createElement("script"),Nn(f),Kn(f,"link",e),s.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},a.set(d,f))}}function k1(e,t){Uo.M(e,t);var s=Pa;if(s&&e){var a=ao(s).hoistableScripts,d=Ua(e),f=a.get(d);f||(f=s.querySelector(Xl(d)),f||(e=y({src:e,async:!0,type:"module"},t),(t=Gs.get(d))&&cf(e,t),f=s.createElement("script"),Nn(f),Kn(f,"link",e),s.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},a.set(d,f))}}function mp(e,t,s,a){var d=(d=rt.current)?jc(d):null;if(!d)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(t=Ia(s.href),s=ao(d).hoistableStyles,a=s.get(t),a||(a={type:"style",instance:null,count:0,state:null},s.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Ia(s.href);var f=ao(d).hoistableStyles,x=f.get(e);if(x||(d=d.ownerDocument||d,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,x),(f=d.querySelector(Yl(e)))&&!f._p&&(x.instance=f,x.state.loading=5),Gs.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Gs.set(e,s),f||C1(d,e,s,x.state))),t&&a===null)throw Error(l(528,""));return x}if(t&&a!==null)throw Error(l(529,""));return null;case"script":return t=s.async,s=s.src,typeof s=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ua(s),s=ao(d).hoistableScripts,a=s.get(t),a||(a={type:"script",instance:null,count:0,state:null},s.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function Ia(e){return'href="'+as(e)+'"'}function Yl(e){return'link[rel="stylesheet"]['+e+"]"}function pp(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function C1(e,t,s,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Kn(t,"link",s),Nn(t),e.head.appendChild(t))}function Ua(e){return'[src="'+as(e)+'"]'}function Xl(e){return"script[async]"+e}function gp(e,t,s){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+as(s.href)+'"]');if(a)return t.instance=a,Nn(a),a;var d=y({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Nn(a),Kn(a,"style",d),Ec(a,s.precedence,e),t.instance=a;case"stylesheet":d=Ia(s.href);var f=e.querySelector(Yl(d));if(f)return t.state.loading|=4,t.instance=f,Nn(f),f;a=pp(s),(d=Gs.get(d))&&rf(a,d),f=(e.ownerDocument||e).createElement("link"),Nn(f);var x=f;return x._p=new Promise(function(w,R){x.onload=w,x.onerror=R}),Kn(f,"link",a),t.state.loading|=4,Ec(f,s.precedence,e),t.instance=f;case"script":return f=Ua(s.src),(d=e.querySelector(Xl(f)))?(t.instance=d,Nn(d),d):(a=s,(d=Gs.get(f))&&(a=y({},s),cf(a,d)),e=e.ownerDocument||e,d=e.createElement("script"),Nn(d),Kn(d,"link",a),e.head.appendChild(d),t.instance=d);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Ec(a,s.precedence,e));return t.instance}function Ec(e,t,s){for(var a=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=a.length?a[a.length-1]:null,f=d,x=0;x<a.length;x++){var w=a[x];if(w.dataset.precedence===t)f=w;else if(f!==d)break}f?f.parentNode.insertBefore(e,f.nextSibling):(t=s.nodeType===9?s.head:s,t.insertBefore(e,t.firstChild))}function rf(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function cf(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Mc=null;function yp(e,t,s){if(Mc===null){var a=new Map,d=Mc=new Map;d.set(s,a)}else d=Mc,a=d.get(s),a||(a=new Map,d.set(s,a));if(a.has(e))return a;for(a.set(e,null),s=s.getElementsByTagName(e),d=0;d<s.length;d++){var f=s[d];if(!(f[Ei]||f[Yt]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(t)||"";x=e+x;var w=a.get(x);w?w.push(f):a.set(x,[f])}}return a}function xp(e,t,s){e=e.ownerDocument||e,e.head.insertBefore(s,t==="title"?e.querySelector("head > title"):null)}function j1(e,t,s){if(s===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function bp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function E1(e,t,s,a){if(s.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var d=Ia(a.href),f=t.querySelector(Yl(d));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Tc.bind(e),t.then(e,e)),s.state.loading|=4,s.instance=f,Nn(f);return}f=t.ownerDocument||t,a=pp(a),(d=Gs.get(d))&&rf(a,d),f=f.createElement("link"),Nn(f);var x=f;x._p=new Promise(function(w,R){x.onload=w,x.onerror=R}),Kn(f,"link",a),s.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,t),(t=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=Tc.bind(e),t.addEventListener("load",s),t.addEventListener("error",s))}}var uf=0;function M1(e,t){return e.stylesheets&&e.count===0&&Ac(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var a=setTimeout(function(){if(e.stylesheets&&Ac(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+t);0<e.imgBytes&&uf===0&&(uf=62500*r1());var d=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ac(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>uf?50:800)+t);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(d)}}:null}function Tc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ac(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Rc=null;function Ac(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Rc=new Map,t.forEach(T1,e),Rc=null,Tc.call(e))}function T1(e,t){if(!(t.state.loading&4)){var s=Rc.get(e);if(s)var a=s.get(null);else{s=new Map,Rc.set(e,s);for(var d=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<d.length;f++){var x=d[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(s.set(x.dataset.precedence,x),a=x)}a&&s.set(null,a)}d=t.instance,x=d.getAttribute("data-precedence"),f=s.get(x)||a,f===a&&s.set(null,d),s.set(x,d),this.count++,a=Tc.bind(this),d.addEventListener("load",a),d.addEventListener("error",a),f?f.parentNode.insertBefore(d,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(d,e.firstChild)),t.state.loading|=4}}var Gl={$$typeof:G,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function R1(e,t,s,a,d,f,x,w,R){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=fn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fn(0),this.hiddenUpdates=fn(null),this.identifierPrefix=a,this.onUncaughtError=d,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.incompleteTransitions=new Map}function vp(e,t,s,a,d,f,x,w,R,H,ee,ie){return e=new R1(e,t,s,x,R,H,ee,ie,w),t=1,f===!0&&(t|=24),f=js(3,null,null,t),e.current=f,f.stateNode=e,t=Hu(),t.refCount++,e.pooledCache=t,t.refCount++,f.memoizedState={element:a,isDehydrated:s,cache:t},Fu(f),e}function wp(e){return e?(e=ya,e):ya}function Sp(e,t,s,a,d,f){d=wp(d),a.context===null?a.context=d:a.pendingContext=d,a=li(t),a.payload={element:s},f=f===void 0?null:f,f!==null&&(a.callback=f),s=ri(e,a,t),s!==null&&(xs(s,e,t),Sl(s,e,t))}function kp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<t?s:t}}function df(e,t){kp(e,t),(e=e.alternate)&&kp(e,t)}function Cp(e){if(e.tag===13||e.tag===31){var t=Li(e,67108864);t!==null&&xs(t,e,67108864),df(e,67108864)}}function jp(e){if(e.tag===13||e.tag===31){var t=As();t=oo(t);var s=Li(e,t);s!==null&&xs(s,e,t),df(e,t)}}var Dc=!0;function A1(e,t,s,a){var d=N.T;N.T=null;var f=ce.p;try{ce.p=2,ff(e,t,s,a)}finally{ce.p=f,N.T=d}}function D1(e,t,s,a){var d=N.T;N.T=null;var f=ce.p;try{ce.p=8,ff(e,t,s,a)}finally{ce.p=f,N.T=d}}function ff(e,t,s,a){if(Dc){var d=hf(a);if(d===null)Kd(e,t,a,Nc,s),Mp(e,a);else if(O1(d,e,t,s,a))a.stopPropagation();else if(Mp(e,a),t&4&&-1<N1.indexOf(e)){for(;d!==null;){var f=Go(d);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Wt(f.pendingLanes);if(x!==0){var w=f;for(w.pendingLanes|=2,w.entangledLanes|=2;x;){var R=1<<31-it(x);w.entanglements[1]|=R,x&=~R}vo(f),(It&6)===0&&(mc=Te()+500,Pl(0))}}break;case 31:case 13:w=Li(f,2),w!==null&&xs(w,f,2),gc(),df(f,2)}if(f=hf(a),f===null&&Kd(e,t,a,Nc,s),f===d)break;d=f}d!==null&&a.stopPropagation()}else Kd(e,t,a,null,s)}}function hf(e){return e=Vs(e),_f(e)}var Nc=null;function _f(e){if(Nc=null,e=Xo(e),e!==null){var t=u(e);if(t===null)e=null;else{var s=t.tag;if(s===13){if(e=_(t),e!==null)return e;e=null}else if(s===31){if(e=g(t),e!==null)return e;e=null}else if(s===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Nc=e,null}function Ep(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ct()){case St:return 2;case Ht:return 8;case ze:case I:return 32;case Y:return 268435456;default:return 32}default:return 32}}var mf=!1,xi=null,bi=null,vi=null,Fl=new Map,Wl=new Map,wi=[],N1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Mp(e,t){switch(e){case"focusin":case"focusout":xi=null;break;case"dragenter":case"dragleave":bi=null;break;case"mouseover":case"mouseout":vi=null;break;case"pointerover":case"pointerout":Fl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wl.delete(t.pointerId)}}function ql(e,t,s,a,d,f){return e===null||e.nativeEvent!==f?(e={blockedOn:t,domEventName:s,eventSystemFlags:a,nativeEvent:f,targetContainers:[d]},t!==null&&(t=Go(t),t!==null&&Cp(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,d!==null&&t.indexOf(d)===-1&&t.push(d),e)}function O1(e,t,s,a,d){switch(t){case"focusin":return xi=ql(xi,e,t,s,a,d),!0;case"dragenter":return bi=ql(bi,e,t,s,a,d),!0;case"mouseover":return vi=ql(vi,e,t,s,a,d),!0;case"pointerover":var f=d.pointerId;return Fl.set(f,ql(Fl.get(f)||null,e,t,s,a,d)),!0;case"gotpointercapture":return f=d.pointerId,Wl.set(f,ql(Wl.get(f)||null,e,t,s,a,d)),!0}return!1}function Tp(e){var t=Xo(e.target);if(t!==null){var s=u(t);if(s!==null){if(t=s.tag,t===13){if(t=_(s),t!==null){e.blockedOn=t,ln(e.priority,function(){jp(s)});return}}else if(t===31){if(t=g(s),t!==null){e.blockedOn=t,ln(e.priority,function(){jp(s)});return}}else if(t===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Oc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var s=hf(e.nativeEvent);if(s===null){s=e.nativeEvent;var a=new s.constructor(s.type,s);ol=a,s.target.dispatchEvent(a),ol=null}else return t=Go(s),t!==null&&Cp(t),e.blockedOn=s,!1;t.shift()}return!0}function Rp(e,t,s){Oc(e)&&s.delete(t)}function L1(){mf=!1,xi!==null&&Oc(xi)&&(xi=null),bi!==null&&Oc(bi)&&(bi=null),vi!==null&&Oc(vi)&&(vi=null),Fl.forEach(Rp),Wl.forEach(Rp)}function Lc(e,t){e.blockedOn===t&&(e.blockedOn=null,mf||(mf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,L1)))}var zc=null;function Ap(e){zc!==e&&(zc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){zc===e&&(zc=null);for(var t=0;t<e.length;t+=3){var s=e[t],a=e[t+1],d=e[t+2];if(typeof a!="function"){if(_f(a||s)===null)continue;break}var f=Go(s);f!==null&&(e.splice(t,3),t-=3,fd(f,{pending:!0,data:d,method:s.method,action:a},a,d))}}))}function Ha(e){function t(R){return Lc(R,e)}xi!==null&&Lc(xi,e),bi!==null&&Lc(bi,e),vi!==null&&Lc(vi,e),Fl.forEach(t),Wl.forEach(t);for(var s=0;s<wi.length;s++){var a=wi[s];a.blockedOn===e&&(a.blockedOn=null)}for(;0<wi.length&&(s=wi[0],s.blockedOn===null);)Tp(s),s.blockedOn===null&&wi.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(a=0;a<s.length;a+=3){var d=s[a],f=s[a+1],x=d[jn]||null;if(typeof f=="function")x||Ap(s);else if(x){var w=null;if(f&&f.hasAttribute("formAction")){if(d=f,x=f[jn]||null)w=x.formAction;else if(_f(d)!==null)continue}else w=x.action;typeof w=="function"?s[a+1]=w:(s.splice(a,3),a-=3),Ap(s)}}}function Dp(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return d=x})},focusReset:"manual",scroll:"manual"})}function t(){d!==null&&(d(),d=null),a||setTimeout(s,20)}function s(){if(!a&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,d=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(s,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),d!==null&&(d(),d=null)}}}function pf(e){this._internalRoot=e}Bc.prototype.render=pf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));var s=t.current,a=As();Sp(s,a,e,t,null,null)},Bc.prototype.unmount=pf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Sp(e.current,2,null,e,null,null),gc(),t[Ee]=null}};function Bc(e){this._internalRoot=e}Bc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Zn();e={blockedOn:null,target:e,priority:t};for(var s=0;s<wi.length&&t!==0&&t<wi[s].priority;s++);wi.splice(s,0,e),s===0&&Tp(e)}};var Np=n.version;if(Np!=="19.2.8")throw Error(l(527,Np,"19.2.8"));ce.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=m(t),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var z1={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $c=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$c.isDisabled&&$c.supportsFiber)try{Oe=$c.inject(z1),ke=$c}catch{}}return Kl.createRoot=function(e,t){if(!c(e))throw Error(l(299));var s=!1,a="",d=I_,f=U_,x=H_;return t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(d=t.onUncaughtError),t.onCaughtError!==void 0&&(f=t.onCaughtError),t.onRecoverableError!==void 0&&(x=t.onRecoverableError)),t=vp(e,1,!1,null,null,s,a,null,d,f,x,Dp),e[Ee]=t.current,Vd(e),new pf(t)},Kl.hydrateRoot=function(e,t,s){if(!c(e))throw Error(l(299));var a=!1,d="",f=I_,x=U_,w=H_,R=null;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(x=s.onCaughtError),s.onRecoverableError!==void 0&&(w=s.onRecoverableError),s.formState!==void 0&&(R=s.formState)),t=vp(e,1,!0,t,s??null,a,d,R,f,x,w,Dp),t.context=wp(null),s=t.current,a=As(),a=oo(a),d=li(a),d.callback=null,ri(s,d,a),s=a,t.current.lanes=s,Ge(t,s),vo(t),e[Ee]=t.current,Vd(e),new Bc(t)},Kl.version="19.2.8",Kl}var Yp;function Q1(){if(Yp)return xf.exports;Yp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(n){console.error(n)}}return o(),xf.exports=q1(),xf.exports}var V1=Q1();const K1=dh(V1);/**
 * react-router v7.18.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var hh=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,N0=/^[\\/]{2}/;function Z1(o,n){return n+o.replace(/\\/g,"/")}var Xp="popstate";function Gp(o){return typeof o=="object"&&o!=null&&"pathname"in o&&"search"in o&&"hash"in o&&"state"in o&&"key"in o}function J1(o={}){function n(l,c){var m;let u=(m=c.state)==null?void 0:m.masked,{pathname:_,search:g,hash:h}=u||l.location;return Hf("",{pathname:_,search:g,hash:h},c.state&&c.state.usr||null,c.state&&c.state.key||"default",u?{pathname:l.location.pathname,search:l.location.search,hash:l.location.hash}:void 0)}function i(l,c){return typeof c=="string"?c:dr(c)}return tx(n,i,null,o)}function xn(o,n){if(o===!1||o===null||typeof o>"u")throw new Error(n)}function So(o,n){if(!o){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function ex(){return Math.random().toString(36).substring(2,10)}function Fp(o,n){return{usr:o.state,key:o.key,idx:n,masked:o.mask?{pathname:o.pathname,search:o.search,hash:o.hash}:void 0}}function Hf(o,n,i=null,l,c){return{pathname:typeof o=="string"?o:o.pathname,search:"",hash:"",...typeof n=="string"?Za(n):n,state:i,key:n&&n.key||l||ex(),mask:c}}function dr({pathname:o="/",search:n="",hash:i=""}){return n&&n!=="?"&&(o+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(o+=i.charAt(0)==="#"?i:"#"+i),o}function Za(o){let n={};if(o){let i=o.indexOf("#");i>=0&&(n.hash=o.substring(i),o=o.substring(0,i));let l=o.indexOf("?");l>=0&&(n.search=o.substring(l),o=o.substring(0,l)),o&&(n.pathname=o)}return n}function tx(o,n,i,l={}){let{window:c=document.defaultView,v5Compat:u=!1}=l,_=c.history,g="POP",h=null,m=p();m==null&&(m=0,_.replaceState({..._.state,idx:m},""));function p(){return(_.state||{idx:null}).idx}function y(){g="POP";let L=p(),B=L==null?null:L-m;m=L,h&&h({action:g,location:M.location,delta:B})}function v(L,B){g="PUSH";let J=Gp(L)?L:Hf(M.location,L,B);m=p()+1;let G=Fp(J,m),z=M.createHref(J.mask||J);try{_.pushState(G,"",z)}catch(de){if(de instanceof DOMException&&de.name==="DataCloneError")throw de;c.location.assign(z)}u&&h&&h({action:g,location:M.location,delta:1})}function C(L,B){g="REPLACE";let J=Gp(L)?L:Hf(M.location,L,B);m=p();let G=Fp(J,m),z=M.createHref(J.mask||J);_.replaceState(G,"",z),u&&h&&h({action:g,location:M.location,delta:0})}function k(L){return nx(c,L)}let M={get action(){return g},get location(){return o(c,_)},listen(L){if(h)throw new Error("A history only accepts one active listener");return c.addEventListener(Xp,y),h=L,()=>{c.removeEventListener(Xp,y),h=null}},createHref(L){return n(c,L)},createURL:k,encodeLocation(L){let B=k(L);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:v,replace:C,go(L){return _.go(L)}};return M}function nx(o,n,i=!1){let l="http://localhost";o&&(l=o.location.origin!=="null"?o.location.origin:o.location.href),xn(l,"No window.location.(origin|href) available to create URL");let c=typeof n=="string"?n:dr(n);return c=c.replace(/ $/,"%20"),!i&&N0.test(c)&&(c=l+c),new URL(c,l)}function O0(o,n,i="/"){return sx(o,n,i,!1)}function sx(o,n,i,l,c){let u=typeof n=="string"?Za(n):n,_=Ho(u.pathname||"/",i);if(_==null)return null;let g=ox(o),h=null,m=mx(_);for(let p=0;h==null&&p<g.length;++p)h=_x(g[p],m,l);return h}function ox(o){let n=L0(o);return ix(n),n}function L0(o,n=[],i=[],l="",c=!1){let u=(_,g,h=c,m)=>{let p={relativePath:m===void 0?_.path||"":m,caseSensitive:_.caseSensitive===!0,childrenIndex:g,route:_};if(p.relativePath.startsWith("/")){if(!p.relativePath.startsWith(l)&&h)return;xn(p.relativePath.startsWith(l),`Absolute route path "${p.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(l.length)}let y=so([l,p.relativePath]),v=i.concat(p);_.children&&_.children.length>0&&(xn(_.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),L0(_.children,n,v,y,h)),!(_.path==null&&!_.index)&&n.push({path:y,score:fx(y,_.index),routesMeta:v.map((C,k)=>{let[M,L]=$0(C.relativePath,C.caseSensitive,k===v.length-1);return{...C,matcher:M,compiledParams:L}})})};return o.forEach((_,g)=>{var h;if(_.path===""||!((h=_.path)!=null&&h.includes("?")))u(_,g);else for(let m of z0(_.path))u(_,g,!0,m)}),n}function z0(o){let n=o.split("/");if(n.length===0)return[];let[i,...l]=n,c=i.endsWith("?"),u=i.replace(/\?$/,"");if(l.length===0)return c?[u,""]:[u];let _=z0(l.join("/")),g=[];return g.push(..._.map(h=>h===""?u:[u,h].join("/"))),c&&g.push(..._),g.map(h=>o.startsWith("/")&&h===""?"/":h)}function ix(o){o.sort((n,i)=>n.score!==i.score?i.score-n.score:hx(n.routesMeta.map(l=>l.childrenIndex),i.routesMeta.map(l=>l.childrenIndex)))}var ax=/^:[\w-]+$/,lx=3,rx=2,cx=1,ux=10,dx=-2,Wp=o=>o==="*";function fx(o,n){let i=o.split("/"),l=i.length;return i.some(Wp)&&(l+=dx),n&&(l+=rx),i.filter(c=>!Wp(c)).reduce((c,u)=>c+(ax.test(u)?lx:u===""?cx:ux),l)}function hx(o,n){return o.length===n.length&&o.slice(0,-1).every((l,c)=>l===n[c])?o[o.length-1]-n[n.length-1]:0}function _x(o,n,i=!1){let{routesMeta:l}=o,c={},u="/",_=[];for(let g=0;g<l.length;++g){let h=l[g],m=g===l.length-1,p=u==="/"?n:n.slice(u.length)||"/",y={path:h.relativePath,caseSensitive:h.caseSensitive,end:m},v=h.matcher&&h.compiledParams?B0(y,p,h.matcher,h.compiledParams):ru(y,p),C=h.route;if(!v&&m&&i&&!l[l.length-1].route.index&&(v=ru({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},p)),!v)return null;Object.assign(c,v.params),_.push({params:c,pathname:so([u,v.pathname]),pathnameBase:yx(so([u,v.pathnameBase])),route:C}),v.pathnameBase!=="/"&&(u=so([u,v.pathnameBase]))}return _}function ru(o,n){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[i,l]=$0(o.path,o.caseSensitive,o.end);return B0(o,n,i,l)}function B0(o,n,i,l){let c=n.match(i);if(!c)return null;let u=c[0],_=u.replace(/(.)\/+$/,"$1"),g=c.slice(1);return{params:l.reduce((m,{paramName:p,isOptional:y},v)=>{if(p==="*"){let k=g[v]||"";_=u.slice(0,u.length-k.length).replace(/(.)\/+$/,"$1")}const C=g[v];return y&&!C?m[p]=void 0:m[p]=(C||"").replace(/%2F/g,"/"),m},{}),pathname:u,pathnameBase:_,pattern:o}}function $0(o,n=!1,i=!0){So(o==="*"||!o.endsWith("*")||o.endsWith("/*"),`Route path "${o}" will be treated as if it were "${o.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/,"/*")}".`);let l=[],c="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(_,g,h,m,p)=>{if(l.push({paramName:g,isOptional:h!=null}),h){let y=p.charAt(m+_.length);return y&&y!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return o.endsWith("*")?(l.push({paramName:"*"}),c+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?c+="\\/*$":o!==""&&o!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,n?void 0:"i"),l]}function mx(o){try{return o.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return So(!1,`The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`),o}}function Ho(o,n){if(n==="/")return o;if(!o.toLowerCase().startsWith(n.toLowerCase()))return null;let i=n.endsWith("/")?n.length-1:n.length,l=o.charAt(i);return l&&l!=="/"?null:o.slice(i)||"/"}function px(o,n="/"){let{pathname:i,search:l="",hash:c=""}=typeof o=="string"?Za(o):o,u;return i?(i=I0(i),i.startsWith("/")?u=qp(i.substring(1),"/"):u=qp(i,n)):u=n,{pathname:u,search:xx(l),hash:bx(c)}}function qp(o,n){let i=cu(n).split("/");return o.split("/").forEach(c=>{c===".."?i.length>1&&i.pop():c!=="."&&i.push(c)}),i.length>1?i.join("/"):"/"}function Sf(o,n,i,l){return`Cannot include a '${o}' character in a manually specified \`to.${n}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function gx(o){return o.filter((n,i)=>i===0||n.route.path&&n.route.path.length>0)}function P0(o){let n=gx(o);return n.map((i,l)=>l===n.length-1?i.pathname:i.pathnameBase)}function _h(o,n,i,l=!1){let c;typeof o=="string"?c=Za(o):(c={...o},xn(!c.pathname||!c.pathname.includes("?"),Sf("?","pathname","search",c)),xn(!c.pathname||!c.pathname.includes("#"),Sf("#","pathname","hash",c)),xn(!c.search||!c.search.includes("#"),Sf("#","search","hash",c)));let u=o===""||c.pathname==="",_=u?"/":c.pathname,g;if(_==null)g=i;else{let y=n.length-1;if(!l&&_.startsWith("..")){let v=_.split("/");for(;v[0]==="..";)v.shift(),y-=1;c.pathname=v.join("/")}g=y>=0?n[y]:"/"}let h=px(c,g),m=_&&_!=="/"&&_.endsWith("/"),p=(u||_===".")&&i.endsWith("/");return!h.pathname.endsWith("/")&&(m||p)&&(h.pathname+="/"),h}var I0=o=>o.replace(/[\\/]{2,}/g,"/"),so=o=>I0(o.join("/")),cu=o=>o.replace(/\/+$/,""),yx=o=>cu(o).replace(/^\/*/,"/"),xx=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,bx=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o,vx=class{constructor(o,n,i,l=!1){this.status=o,this.statusText=n||"",this.internal=l,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function wx(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}function Sx(o){let n=o.map(i=>i.route.path).filter(Boolean);return so(n)||"/"}var U0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function H0(o,n){let i=o;if(typeof i!="string"||!hh.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let l=i,c=!1;if(U0)try{let u=new URL(window.location.href),_=N0.test(i)?new URL(Z1(i,u.protocol)):new URL(i),g=Ho(_.pathname,n);_.origin===u.origin&&g!=null?i=g+_.search+_.hash:c=!0}catch{So(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:l,isExternal:c,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Y0=["POST","PUT","PATCH","DELETE"];new Set(Y0);var kx=["GET",...Y0];new Set(kx);var Cx=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function jx(o){try{return Cx.includes(new URL(o).protocol)}catch{return!1}}var Ja=b.createContext(null);Ja.displayName="DataRouter";var pu=b.createContext(null);pu.displayName="DataRouterState";var X0=b.createContext(!1);function Ex(){return b.useContext(X0)}var G0=b.createContext({isTransitioning:!1});G0.displayName="ViewTransition";var Mx=b.createContext(new Map);Mx.displayName="Fetchers";var Tx=b.createContext(null);Tx.displayName="Await";var qs=b.createContext(null);qs.displayName="Navigation";var _r=b.createContext(null);_r.displayName="Location";var Yo=b.createContext({outlet:null,matches:[],isDataRoute:!1});Yo.displayName="Route";var mh=b.createContext(null);mh.displayName="RouteError";var F0="REACT_ROUTER_ERROR",Rx="REDIRECT",Ax="ROUTE_ERROR_RESPONSE";function Dx(o){if(o.startsWith(`${F0}:${Rx}:{`))try{let n=JSON.parse(o.slice(28));if(typeof n=="object"&&n&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.location=="string"&&typeof n.reloadDocument=="boolean"&&typeof n.replace=="boolean")return n}catch{}}function Nx(o){if(o.startsWith(`${F0}:${Ax}:{`))try{let n=JSON.parse(o.slice(40));if(typeof n=="object"&&n&&typeof n.status=="number"&&typeof n.statusText=="string")return new vx(n.status,n.statusText,n.data)}catch{}}function Ox(o,{relative:n}={}){xn(mr(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:l}=b.useContext(qs),{hash:c,pathname:u,search:_}=pr(o,{relative:n}),g=u;return i!=="/"&&(g=u==="/"?i:so([i,u])),l.createHref({pathname:g,search:_,hash:c})}function mr(){return b.useContext(_r)!=null}function ko(){return xn(mr(),"useLocation() may be used only in the context of a <Router> component."),b.useContext(_r).location}var W0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function q0(o){b.useContext(qs).static||b.useLayoutEffect(o)}function Lx(){let{isDataRoute:o}=b.useContext(Yo);return o?qx():zx()}function zx(){xn(mr(),"useNavigate() may be used only in the context of a <Router> component.");let o=b.useContext(Ja),{basename:n,navigator:i}=b.useContext(qs),{matches:l}=b.useContext(Yo),{pathname:c}=ko(),u=JSON.stringify(P0(l)),_=b.useRef(!1);return q0(()=>{_.current=!0}),b.useCallback((h,m={})=>{if(So(_.current,W0),!_.current)return;if(typeof h=="number"){i.go(h);return}let p=_h(h,JSON.parse(u),c,m.relative==="path");o==null&&n!=="/"&&(p.pathname=p.pathname==="/"?n:so([n,p.pathname])),(m.replace?i.replace:i.push)(p,m.state,m)},[n,i,u,c,o])}b.createContext(null);function pr(o,{relative:n}={}){let{matches:i}=b.useContext(Yo),{pathname:l}=ko(),c=JSON.stringify(P0(i));return b.useMemo(()=>_h(o,JSON.parse(c),l,n==="path"),[o,c,l,n])}function Bx(o,n){return Q0(o,n)}function Q0(o,n,i){var L;xn(mr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=b.useContext(qs),{matches:c}=b.useContext(Yo),u=c[c.length-1],_=u?u.params:{},g=u?u.pathname:"/",h=u?u.pathnameBase:"/",m=u&&u.route;{let B=m&&m.path||"";K0(g,!m||B.endsWith("*")||B.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${B}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${B}"> to <Route path="${B==="/"?"*":`${B}/*`}">.`)}let p=ko(),y;if(n){let B=typeof n=="string"?Za(n):n;xn(h==="/"||((L=B.pathname)==null?void 0:L.startsWith(h)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${B.pathname}" was given in the \`location\` prop.`),y=B}else y=p;let v=y.pathname||"/",C=v;if(h!=="/"){let B=h.replace(/^\//,"").split("/");C="/"+v.replace(/^\//,"").split("/").slice(B.length).join("/")}let k=i&&i.state.matches.length?i.state.matches.map(B=>Object.assign(B,{route:i.manifest[B.route.id]||B.route})):O0(o,{pathname:C});So(m||k!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),So(k==null||k[k.length-1].route.element!==void 0||k[k.length-1].route.Component!==void 0||k[k.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let M=Hx(k&&k.map(B=>Object.assign({},B,{params:Object.assign({},_,B.params),pathname:so([h,l.encodeLocation?l.encodeLocation(B.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:B.pathname]),pathnameBase:B.pathnameBase==="/"?h:so([h,l.encodeLocation?l.encodeLocation(B.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:B.pathnameBase])})),c,i);return n&&M?b.createElement(_r.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...y},navigationType:"POP"}},M):M}function $x(){let o=Wx(),n=wx(o)?`${o.status} ${o.statusText}`:o instanceof Error?o.message:JSON.stringify(o),i=o instanceof Error?o.stack:null,l="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:l},u={padding:"2px 4px",backgroundColor:l},_=null;return console.error("Error handled by React Router default ErrorBoundary:",o),_=b.createElement(b.Fragment,null,b.createElement("p",null,"💿 Hey developer 👋"),b.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",b.createElement("code",{style:u},"ErrorBoundary")," or"," ",b.createElement("code",{style:u},"errorElement")," prop on your route.")),b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},n),i?b.createElement("pre",{style:c},i):null,_)}var Px=b.createElement($x,null),V0=class extends b.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,n){return n.location!==o.location||n.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:n.error,location:n.location,revalidation:o.revalidation||n.revalidation}}componentDidCatch(o,n){this.props.onError?this.props.onError(o,n):console.error("React Router caught the following error during render",o)}render(){let o=this.state.error;if(this.context&&typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){const i=Nx(o.digest);i&&(o=i)}let n=o!==void 0?b.createElement(Yo.Provider,{value:this.props.routeContext},b.createElement(mh.Provider,{value:o,children:this.props.component})):this.props.children;return this.context?b.createElement(Ix,{error:o},n):n}};V0.contextType=X0;var kf=new WeakMap;function Ix({children:o,error:n}){let{basename:i}=b.useContext(qs);if(typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){let l=Dx(n.digest);if(l){let c=kf.get(n);if(c)throw c;let u=H0(l.location,i),_=u.absoluteURL||u.to;if(jx(_))throw new Error("Invalid redirect location");if(U0&&!kf.get(n))if(u.isExternal||l.reloadDocument)window.location.href=_;else{const g=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(u.to,{replace:l.replace}));throw kf.set(n,g),g}return b.createElement("meta",{httpEquiv:"refresh",content:`0;url=${_}`})}}return o}function Ux({routeContext:o,match:n,children:i}){let l=b.useContext(Ja);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Yo.Provider,{value:o},i)}function Hx(o,n=[],i){let l=i==null?void 0:i.state;if(o==null){if(!l)return null;if(l.errors)o=l.matches;else if(n.length===0&&!l.initialized&&l.matches.length>0)o=l.matches;else return null}let c=o,u=l==null?void 0:l.errors;if(u!=null){let p=c.findIndex(y=>y.route.id&&(u==null?void 0:u[y.route.id])!==void 0);xn(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),c=c.slice(0,Math.min(c.length,p+1))}let _=!1,g=-1;if(i&&l){_=l.renderFallback;for(let p=0;p<c.length;p++){let y=c[p];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(g=p),y.route.id){let{loaderData:v,errors:C}=l,k=y.route.loader&&!v.hasOwnProperty(y.route.id)&&(!C||C[y.route.id]===void 0);if(y.route.lazy||k){i.isStatic&&(_=!0),g>=0?c=c.slice(0,g+1):c=[c[0]];break}}}}let h=i==null?void 0:i.onError,m=l&&h?(p,y)=>{var v,C;h(p,{location:l.location,params:((C=(v=l.matches)==null?void 0:v[0])==null?void 0:C.params)??{},pattern:Sx(l.matches),errorInfo:y})}:void 0;return c.reduceRight((p,y,v)=>{let C,k=!1,M=null,L=null;l&&(C=u&&y.route.id?u[y.route.id]:void 0,M=y.route.errorElement||Px,_&&(g<0&&v===0?(K0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),k=!0,L=null):g===v&&(k=!0,L=y.route.hydrateFallbackElement||null)));let B=n.concat(c.slice(0,v+1)),J=()=>{let G;return C?G=M:k?G=L:y.route.Component?G=b.createElement(y.route.Component,null):y.route.element?G=y.route.element:G=p,b.createElement(Ux,{match:y,routeContext:{outlet:p,matches:B,isDataRoute:l!=null},children:G})};return l&&(y.route.ErrorBoundary||y.route.errorElement||v===0)?b.createElement(V0,{location:l.location,revalidation:l.revalidation,component:M,error:C,children:J(),routeContext:{outlet:null,matches:B,isDataRoute:!0},onError:m}):J()},null)}function ph(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Yx(o){let n=b.useContext(Ja);return xn(n,ph(o)),n}function Xx(o){let n=b.useContext(pu);return xn(n,ph(o)),n}function Gx(o){let n=b.useContext(Yo);return xn(n,ph(o)),n}function gh(o){let n=Gx(o),i=n.matches[n.matches.length-1];return xn(i.route.id,`${o} can only be used on routes that contain a unique "id"`),i.route.id}function Fx(){return gh("useRouteId")}function Wx(){var l;let o=b.useContext(mh),n=Xx("useRouteError"),i=gh("useRouteError");return o!==void 0?o:(l=n.errors)==null?void 0:l[i]}function qx(){let{router:o}=Yx("useNavigate"),n=gh("useNavigate"),i=b.useRef(!1);return q0(()=>{i.current=!0}),b.useCallback(async(c,u={})=>{So(i.current,W0),i.current&&(typeof c=="number"?await o.navigate(c):await o.navigate(c,{fromRouteId:n,...u}))},[o,n])}var Qp={};function K0(o,n,i){!n&&!Qp[o]&&(Qp[o]=!0,So(!1,i))}b.memo(Qx);function Qx({routes:o,manifest:n,future:i,state:l,isStatic:c,onError:u}){return Q0(o,void 0,{manifest:n,state:l,isStatic:c,onError:u})}function Yf(o){xn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Vx({basename:o="/",children:n=null,location:i,navigationType:l="POP",navigator:c,static:u=!1,useTransitions:_}){xn(!mr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let g=o.replace(/^\/*/,"/"),h=b.useMemo(()=>({basename:g,navigator:c,static:u,useTransitions:_,future:{}}),[g,c,u,_]);typeof i=="string"&&(i=Za(i));let{pathname:m="/",search:p="",hash:y="",state:v=null,key:C="default",mask:k}=i,M=b.useMemo(()=>{let L=Ho(m,g);return L==null?null:{location:{pathname:L,search:p,hash:y,state:v,key:C,mask:k},navigationType:l}},[g,m,p,y,v,C,l,k]);return So(M!=null,`<Router basename="${g}"> is not able to match the URL "${m}${p}${y}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:b.createElement(qs.Provider,{value:h},b.createElement(_r.Provider,{children:n,value:M}))}function Kx({children:o,location:n}){return Bx(Xf(o),n)}function Xf(o,n=[]){let i=[];return b.Children.forEach(o,(l,c)=>{if(!b.isValidElement(l))return;let u=[...n,c];if(l.type===b.Fragment){i.push.apply(i,Xf(l.props.children,u));return}xn(l.type===Yf,`[${typeof l.type=="string"?l.type:l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),xn(!l.props.index||!l.props.children,"An index route cannot have child routes.");let _={id:l.props.id||u.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,middleware:l.props.middleware,loader:l.props.loader,action:l.props.action,hydrateFallbackElement:l.props.hydrateFallbackElement,HydrateFallback:l.props.HydrateFallback,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.hasErrorBoundary===!0||l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(_.children=Xf(l.props.children,u)),i.push(_)}),i}var eu="get",tu="application/x-www-form-urlencoded";function gu(o){return typeof HTMLElement<"u"&&o instanceof HTMLElement}function Zx(o){return gu(o)&&o.tagName.toLowerCase()==="button"}function Jx(o){return gu(o)&&o.tagName.toLowerCase()==="form"}function eb(o){return gu(o)&&o.tagName.toLowerCase()==="input"}function tb(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function nb(o,n){return o.button===0&&(!n||n==="_self")&&!tb(o)}var Pc=null;function sb(){if(Pc===null)try{new FormData(document.createElement("form"),0),Pc=!1}catch{Pc=!0}return Pc}var ob=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Cf(o){return o!=null&&!ob.has(o)?(So(!1,`"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${tu}"`),null):o}function ib(o,n){let i,l,c,u,_;if(Jx(o)){let g=o.getAttribute("action");l=g?Ho(g,n):null,i=o.getAttribute("method")||eu,c=Cf(o.getAttribute("enctype"))||tu,u=new FormData(o)}else if(Zx(o)||eb(o)&&(o.type==="submit"||o.type==="image")){let g=o.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=o.getAttribute("formaction")||g.getAttribute("action");if(l=h?Ho(h,n):null,i=o.getAttribute("formmethod")||g.getAttribute("method")||eu,c=Cf(o.getAttribute("formenctype"))||Cf(g.getAttribute("enctype"))||tu,u=new FormData(g,o),!sb()){let{name:m,type:p,value:y}=o;if(p==="image"){let v=m?`${m}.`:"";u.append(`${v}x`,"0"),u.append(`${v}y`,"0")}else m&&u.append(m,y)}}else{if(gu(o))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=eu,l=null,c=tu,_=o}return u&&c==="text/plain"&&(_=u,u=void 0),{action:l,method:i.toLowerCase(),encType:c,formData:u,body:_}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function yh(o,n){if(o===!1||o===null||typeof o>"u")throw new Error(n)}function Z0(o,n,i,l){let c=typeof o=="string"?new URL(o,typeof window>"u"?"server://singlefetch/":window.location.origin):o;return i?c.pathname.endsWith("/")?c.pathname=`${c.pathname}_.${l}`:c.pathname=`${c.pathname}.${l}`:c.pathname==="/"?c.pathname=`_root.${l}`:n&&Ho(c.pathname,n)==="/"?c.pathname=`${cu(n)}/_root.${l}`:c.pathname=`${cu(c.pathname)}.${l}`,c}async function ab(o,n){if(o.id in n)return n[o.id];try{let i=await import(o.module);return n[o.id]=i,i}catch(i){return console.error(`Error loading route module \`${o.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function lb(o){return o==null?!1:o.href==null?o.rel==="preload"&&typeof o.imageSrcSet=="string"&&typeof o.imageSizes=="string":typeof o.rel=="string"&&typeof o.href=="string"}async function rb(o,n,i){let l=await Promise.all(o.map(async c=>{let u=n.routes[c.route.id];if(u){let _=await ab(u,i);return _.links?_.links():[]}return[]}));return fb(l.flat(1).filter(lb).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function Vp(o,n,i,l,c,u){let _=(h,m)=>i[m]?h.route.id!==i[m].route.id:!0,g=(h,m)=>{var p;return i[m].pathname!==h.pathname||((p=i[m].route.path)==null?void 0:p.endsWith("*"))&&i[m].params["*"]!==h.params["*"]};return u==="assets"?n.filter((h,m)=>_(h,m)||g(h,m)):u==="data"?n.filter((h,m)=>{var y;let p=l.routes[h.route.id];if(!p||!p.hasLoader)return!1;if(_(h,m)||g(h,m))return!0;if(h.route.shouldRevalidate){let v=h.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:((y=i[0])==null?void 0:y.params)||{},nextUrl:new URL(o,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function cb(o,n,{includeHydrateFallback:i}={}){return ub(o.map(l=>{let c=n.routes[l.route.id];if(!c)return[];let u=[c.module];return c.clientActionModule&&(u=u.concat(c.clientActionModule)),c.clientLoaderModule&&(u=u.concat(c.clientLoaderModule)),i&&c.hydrateFallbackModule&&(u=u.concat(c.hydrateFallbackModule)),c.imports&&(u=u.concat(c.imports)),u}).flat(1))}function ub(o){return[...new Set(o)]}function db(o){let n={},i=Object.keys(o).sort();for(let l of i)n[l]=o[l];return n}function fb(o,n){let i=new Set;return new Set(n),o.reduce((l,c)=>{let u=JSON.stringify(db(c));return i.has(u)||(i.add(u),l.push({key:u,link:c})),l},[])}function xh(){let o=b.useContext(Ja);return yh(o,"You must render this element inside a <DataRouterContext.Provider> element"),o}function hb(){let o=b.useContext(pu);return yh(o,"You must render this element inside a <DataRouterStateContext.Provider> element"),o}var bh=b.createContext(void 0);bh.displayName="FrameworkContext";function yu(){let o=b.useContext(bh);return yh(o,"You must render this element inside a <HydratedRouter> element"),o}function _b(o,n){let i=b.useContext(bh),[l,c]=b.useState(!1),[u,_]=b.useState(!1),{onFocus:g,onBlur:h,onMouseEnter:m,onMouseLeave:p,onTouchStart:y}=n,v=b.useRef(null);b.useEffect(()=>{if(o==="render"&&_(!0),o==="viewport"){let M=B=>{B.forEach(J=>{_(J.isIntersecting)})},L=new IntersectionObserver(M,{threshold:.5});return v.current&&L.observe(v.current),()=>{L.disconnect()}}},[o]),b.useEffect(()=>{if(l){let M=setTimeout(()=>{_(!0)},100);return()=>{clearTimeout(M)}}},[l]);let C=()=>{c(!0)},k=()=>{c(!1),_(!1)};return i?o!=="intent"?[u,v,{}]:[u,v,{onFocus:Zl(g,C),onBlur:Zl(h,k),onMouseEnter:Zl(m,C),onMouseLeave:Zl(p,k),onTouchStart:Zl(y,C)}]:[!1,v,{}]}function Zl(o,n){return i=>{o&&o(i),i.defaultPrevented||n(i)}}function mb({page:o,...n}){let i=Ex(),{nonce:l}=yu(),{router:c}=xh(),u=b.useMemo(()=>O0(c.routes,o,c.basename),[c.routes,o,c.basename]);return u?(n.nonce==null&&l&&(n={...n,nonce:l}),i?b.createElement(gb,{page:o,matches:u,...n}):b.createElement(yb,{page:o,matches:u,...n})):null}function pb(o){let{manifest:n,routeModules:i}=yu(),[l,c]=b.useState([]);return b.useEffect(()=>{let u=!1;return rb(o,n,i).then(_=>{u||c(_)}),()=>{u=!0}},[o,n,i]),l}function gb({page:o,matches:n,...i}){let l=ko(),{future:c}=yu(),{basename:u}=xh(),_=b.useMemo(()=>{if(o===l.pathname+l.search+l.hash)return[];let g=Z0(o,u,c.v8_trailingSlashAwareDataRequests,"rsc"),h=!1,m=[];for(let p of n)typeof p.route.shouldRevalidate=="function"?h=!0:m.push(p.route.id);return h&&m.length>0&&g.searchParams.set("_routes",m.join(",")),[g.pathname+g.search]},[u,c.v8_trailingSlashAwareDataRequests,o,l,n]);return b.createElement(b.Fragment,null,_.map(g=>b.createElement("link",{key:g,rel:"prefetch",as:"fetch",href:g,...i})))}function yb({page:o,matches:n,...i}){let l=ko(),{future:c,manifest:u,routeModules:_}=yu(),{basename:g}=xh(),{loaderData:h,matches:m}=hb(),p=b.useMemo(()=>Vp(o,n,m,u,l,"data"),[o,n,m,u,l]),y=b.useMemo(()=>Vp(o,n,m,u,l,"assets"),[o,n,m,u,l]),v=b.useMemo(()=>{if(o===l.pathname+l.search+l.hash)return[];let M=new Set,L=!1;if(n.forEach(J=>{var z;let G=u.routes[J.route.id];!G||!G.hasLoader||(!p.some(de=>de.route.id===J.route.id)&&J.route.id in h&&((z=_[J.route.id])!=null&&z.shouldRevalidate)||G.hasClientLoader?L=!0:M.add(J.route.id))}),M.size===0)return[];let B=Z0(o,g,c.v8_trailingSlashAwareDataRequests,"data");return L&&M.size>0&&B.searchParams.set("_routes",n.filter(J=>M.has(J.route.id)).map(J=>J.route.id).join(",")),[B.pathname+B.search]},[g,c.v8_trailingSlashAwareDataRequests,h,l,u,p,n,o,_]),C=b.useMemo(()=>cb(y,u),[y,u]),k=pb(y);return b.createElement(b.Fragment,null,v.map(M=>b.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...i})),C.map(M=>b.createElement("link",{key:M,rel:"modulepreload",href:M,...i})),k.map(({key:M,link:L})=>b.createElement("link",{key:M,nonce:i.nonce,...L,crossOrigin:L.crossOrigin??i.crossOrigin})))}function xb(...o){return n=>{o.forEach(i=>{typeof i=="function"?i(n):i!=null&&(i.current=n)})}}var bb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{bb&&(window.__reactRouterVersion="7.18.2")}catch{}function vb({basename:o,children:n,useTransitions:i,window:l}){let c=b.useRef();c.current==null&&(c.current=J1({window:l,v5Compat:!0}));let u=c.current,[_,g]=b.useState({action:u.action,location:u.location}),h=b.useCallback(m=>{i===!1?g(m):b.startTransition(()=>g(m))},[i]);return b.useLayoutEffect(()=>u.listen(h),[u,h]),b.createElement(Vx,{basename:o,children:n,location:_.location,navigationType:_.action,navigator:u,useTransitions:i})}var lr=b.forwardRef(function({onClick:n,discover:i="render",prefetch:l="none",relative:c,reloadDocument:u,replace:_,mask:g,state:h,target:m,to:p,preventScrollReset:y,viewTransition:v,defaultShouldRevalidate:C,...k},M){let{basename:L,navigator:B,useTransitions:J}=b.useContext(qs),G=typeof p=="string"&&hh.test(p),z=H0(p,L);p=z.to;let de=Ox(p,{relative:c}),he=ko(),F=null;if(g){let Se=_h(g,[],he.mask?he.mask.pathname:"/",!0);L!=="/"&&(Se.pathname=Se.pathname==="/"?L:so([L,Se.pathname])),F=B.createHref(Se)}let[le,ge,xe]=_b(l,k),ue=Cb(p,{replace:_,mask:g,state:h,target:m,preventScrollReset:y,relative:c,viewTransition:v,defaultShouldRevalidate:C,useTransitions:J});function K(Se){n&&n(Se),Se.defaultPrevented||ue(Se)}let Xe=!(z.isExternal||u),_e=b.createElement("a",{...k,...xe,href:(Xe?F:void 0)||z.absoluteURL||de,onClick:Xe?K:n,ref:xb(M,ge),target:m,"data-discover":!G&&i==="render"?"true":void 0});return le&&!G?b.createElement(b.Fragment,null,_e,b.createElement(mb,{page:de})):_e});lr.displayName="Link";var wb=b.forwardRef(function({"aria-current":n="page",caseSensitive:i=!1,className:l="",end:c=!1,style:u,to:_,viewTransition:g,children:h,...m},p){let y=pr(_,{relative:m.relative}),v=ko(),C=b.useContext(pu),{navigator:k,basename:M}=b.useContext(qs),L=C!=null&&Rb(y)&&g===!0,B=k.encodeLocation?k.encodeLocation(y).pathname:y.pathname,J=v.pathname,G=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;i||(J=J.toLowerCase(),G=G?G.toLowerCase():null,B=B.toLowerCase()),G&&M&&(G=Ho(G,M)||G);const z=B!=="/"&&B.endsWith("/")?B.length-1:B.length;let de=J===B||!c&&J.startsWith(B)&&J.charAt(z)==="/",he=G!=null&&(G===B||!c&&G.startsWith(B)&&G.charAt(B.length)==="/"),F={isActive:de,isPending:he,isTransitioning:L},le=de?n:void 0,ge;typeof l=="function"?ge=l(F):ge=[l,de?"active":null,he?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let xe=typeof u=="function"?u(F):u;return b.createElement(lr,{...m,"aria-current":le,className:ge,ref:p,style:xe,to:_,viewTransition:g},typeof h=="function"?h(F):h)});wb.displayName="NavLink";var Sb=b.forwardRef(({discover:o="render",fetcherKey:n,navigate:i,reloadDocument:l,replace:c,state:u,method:_=eu,action:g,onSubmit:h,relative:m,preventScrollReset:p,viewTransition:y,defaultShouldRevalidate:v,...C},k)=>{let{useTransitions:M}=b.useContext(qs),L=Mb(),B=Tb(g,{relative:m}),J=_.toLowerCase()==="get"?"get":"post",G=typeof g=="string"&&hh.test(g),z=de=>{if(h&&h(de),de.defaultPrevented)return;de.preventDefault();let he=de.nativeEvent.submitter,F=(he==null?void 0:he.getAttribute("formmethod"))||_,le=()=>L(he||de.currentTarget,{fetcherKey:n,method:F,navigate:i,replace:c,state:u,relative:m,preventScrollReset:p,viewTransition:y,defaultShouldRevalidate:v});M&&i!==!1?b.startTransition(()=>le()):le()};return b.createElement("form",{ref:k,method:J,action:B,onSubmit:l?h:z,...C,"data-discover":!G&&o==="render"?"true":void 0})});Sb.displayName="Form";function kb(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function J0(o){let n=b.useContext(Ja);return xn(n,kb(o)),n}function Cb(o,{target:n,replace:i,mask:l,state:c,preventScrollReset:u,relative:_,viewTransition:g,defaultShouldRevalidate:h,useTransitions:m}={}){let p=Lx(),y=ko(),v=pr(o,{relative:_});return b.useCallback(C=>{if(nb(C,n)){C.preventDefault();let k=i!==void 0?i:dr(y)===dr(v),M=()=>p(o,{replace:k,mask:l,state:c,preventScrollReset:u,relative:_,viewTransition:g,defaultShouldRevalidate:h});m?b.startTransition(()=>M()):M()}},[y,p,v,i,l,c,n,o,u,_,g,h,m])}var jb=0,Eb=()=>`__${String(++jb)}__`;function Mb(){let{router:o}=J0("useSubmit"),{basename:n}=b.useContext(qs),i=Fx(),l=o.fetch,c=o.navigate;return b.useCallback(async(u,_={})=>{let{action:g,method:h,encType:m,formData:p,body:y}=ib(u,n);if(_.navigate===!1){let v=_.fetcherKey||Eb();await l(v,i,_.action||g,{defaultShouldRevalidate:_.defaultShouldRevalidate,preventScrollReset:_.preventScrollReset,formData:p,body:y,formMethod:_.method||h,formEncType:_.encType||m,flushSync:_.flushSync})}else await c(_.action||g,{defaultShouldRevalidate:_.defaultShouldRevalidate,preventScrollReset:_.preventScrollReset,formData:p,body:y,formMethod:_.method||h,formEncType:_.encType||m,replace:_.replace,state:_.state,fromRouteId:i,flushSync:_.flushSync,viewTransition:_.viewTransition})},[l,c,n,i])}function Tb(o,{relative:n}={}){let{basename:i}=b.useContext(qs),l=b.useContext(Yo);xn(l,"useFormAction must be used inside a RouteContext");let[c]=l.matches.slice(-1),u={...pr(o||".",{relative:n})},_=ko();if(o==null){u.search=_.search;let g=new URLSearchParams(u.search),h=g.getAll("index");if(h.some(p=>p==="")){g.delete("index"),h.filter(y=>y).forEach(y=>g.append("index",y));let p=g.toString();u.search=p?`?${p}`:""}}return(!o||o===".")&&c.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:so([i,u.pathname])),dr(u)}function Rb(o,{relative:n}={}){let i=b.useContext(G0);xn(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:l}=J0("useViewTransitionState"),c=pr(o,{relative:n});if(!i.isTransitioning)return!1;let u=Ho(i.currentLocation.pathname,l)||i.currentLocation.pathname,_=Ho(i.nextLocation.pathname,l)||i.nextLocation.pathname;return ru(c.pathname,_)!=null||ru(c.pathname,u)!=null}var eg=D0();const Ab=.08;function Ic(o){return Math.abs(o)<Ab?0:o}function Db(){const[o,n]=b.useState({}),i=b.useRef(null),l=b.useCallback(()=>{var g,h,m,p,y,v,C,k,M,L,B,J;const u=navigator.getGamepads?navigator.getGamepads():[],_={};for(let G=0;G<u.length;G++){const z=u[G];z&&(_[z.index]={index:z.index,id:z.id,connected:z.connected,axes:{leftStickX:Ic(z.axes[0]||0),leftStickY:Ic(z.axes[1]||0),rightStickX:Ic(z.axes[2]||0),rightStickY:Ic(z.axes[3]||0)},buttons:{a:((g=z.buttons[0])==null?void 0:g.pressed)||!1,b:((h=z.buttons[1])==null?void 0:h.pressed)||!1,x:((m=z.buttons[2])==null?void 0:m.pressed)||!1,y:((p=z.buttons[3])==null?void 0:p.pressed)||!1,lb:((y=z.buttons[4])==null?void 0:y.pressed)||!1,rb:((v=z.buttons[5])==null?void 0:v.pressed)||!1,lt:((C=z.buttons[6])==null?void 0:C.value)||0,rt:((k=z.buttons[7])==null?void 0:k.value)||0,back:((M=z.buttons[8])==null?void 0:M.pressed)||!1,start:((L=z.buttons[9])==null?void 0:L.pressed)||!1,lsClick:((B=z.buttons[10])==null?void 0:B.pressed)||!1,rsClick:((J=z.buttons[11])==null?void 0:J.pressed)||!1}})}n(_),i.current=requestAnimationFrame(l)},[]);return b.useEffect(()=>{const u=g=>{console.log(`[useGamepad] Connected index ${g.gamepad.index}: ${g.gamepad.id}`)},_=g=>{console.log(`[useGamepad] Disconnected index ${g.gamepad.index}`)};return window.addEventListener("gamepadconnected",u),window.addEventListener("gamepaddisconnected",_),i.current=requestAnimationFrame(l),()=>{window.removeEventListener("gamepadconnected",u),window.removeEventListener("gamepaddisconnected",_),i.current!==null&&cancelAnimationFrame(i.current)}},[l]),{gamepads:o,triggerVibration:async(u,_=.5,g=.8,h=400)=>{const p=(navigator.getGamepads?navigator.getGamepads():[])[u];if(p&&p.vibrationActuator&&p.vibrationActuator.playEffect)try{return await p.vibrationActuator.playEffect("dual-rumble",{startDelay:0,duration:h,weakMagnitude:_,strongMagnitude:g}),!0}catch(y){console.warn("Vibration playEffect error:",y)}return!1}}}function Nb(o,n=!0){const i=b.useRef(o),l=b.useRef(null);b.useEffect(()=>{i.current=o},[o]),b.useEffect(()=>{if(!n)return;let c;const u=_=>{if(l.current!==null){const g=(_-l.current)/1e3;i.current(g)}l.current=_,c=requestAnimationFrame(u)};return c=requestAnimationFrame(u),()=>{cancelAnimationFrame(c),l.current=null}},[n])}class Ob{constructor(n=2200,i=1350){Ye(this,"width");Ye(this,"height");Ye(this,"pitchBounds");Ye(this,"goals");this.width=n,this.height=i,this.pitchBounds={left:0,right:n,top:0,bottom:i},this.goals={homeGoal:{x:0,top:0,bottom:0},awayGoal:{x:n,top:0,bottom:0}},this.recalculate(n,i)}recalculate(n,i){this.width=n,this.height=i;const l=n*.07,c=i*.08;this.pitchBounds={left:l,right:n-l,top:c,bottom:i-c};const u=i*.32,_=(i-u)/2,g=_+u;this.goals={homeGoal:{x:l,top:_,bottom:g},awayGoal:{x:n-l,top:_,bottom:g}}}draw(n){const i=this.width,l=this.height,c=this.pitchBounds,u=c.right-c.left,_=c.bottom-c.top;n.fillStyle="#489c46",n.fillRect(0,0,i,l);const g=12,h=u/g,m="#3f8c3d",p="#4ba448";for(let G=0;G<g;G++){n.fillStyle=G%2===0?m:p;const z=c.left+G*h;n.fillRect(z,c.top,h,_)}const y=c.left*.75,v=this.goals.homeGoal.top,C=this.goals.homeGoal.bottom-v;n.fillStyle="#b94b4b",n.fillRect(c.left-y,v,y,C),n.strokeStyle="#ffffff",n.lineWidth=4,n.strokeRect(c.left-y,v,y,C),n.fillStyle="#498eb9",n.fillRect(c.right,v,y,C),n.strokeStyle="#ffffff",n.lineWidth=4,n.strokeRect(c.right,v,y,C),n.strokeStyle="#ffffff",n.lineWidth=4.5,n.beginPath(),n.roundRect(c.left,c.top,u,_,12),n.stroke();const k=c.left+u*.5;n.beginPath(),n.moveTo(k,c.top),n.lineTo(k,c.bottom),n.stroke();const M=Math.min(u,_)*.18;n.beginPath(),n.arc(k,c.top+_*.5,M,0,Math.PI*2),n.stroke(),n.fillStyle="#ffffff",n.beginPath(),n.arc(k,c.top+_*.5,6,0,Math.PI*2),n.fill();const L=u*.16,B=_*.52,J=c.top+(_-B)/2;n.strokeRect(c.left,J,L,B),n.strokeRect(c.right-L,J,L,B)}}class Lb{constructor(n,i){Ye(this,"pos");Ye(this,"vel");Ye(this,"radius");Ye(this,"friction");Ye(this,"attachedPlayerId");Ye(this,"releaseTimer");Ye(this,"homingTargetPlayer");Ye(this,"throughPassTargetPos");Ye(this,"dribblePhase");this.pos={x:n,y:i},this.vel={x:0,y:0},this.radius=8,this.friction=.968,this.attachedPlayerId=null,this.releaseTimer=0,this.homingTargetPlayer=null,this.throughPassTargetPos=null,this.dribblePhase=0}reset(n,i){this.pos={x:n,y:i},this.vel={x:0,y:0},this.attachedPlayerId=null,this.releaseTimer=0,this.homingTargetPlayer=null,this.throughPassTargetPos=null,this.dribblePhase=0}attachToPlayer(n,i,l,c,u){this.attachedPlayerId=u,this.dribblePhase+=.25;const _=l+this.radius+6+Math.sin(this.dribblePhase)*2,g=n.x+Math.cos(i)*_,h=n.y+Math.sin(i)*_;this.pos.x=this.pos.x*.4+g*.6,this.pos.y=this.pos.y*.4+h*.6,this.vel.x=c.x,this.vel.y=c.y}kick(n,i,l,c=null,u=null){this.attachedPlayerId=null,this.releaseTimer=.2,this.homingTargetPlayer=c,this.throughPassTargetPos=u,this.vel.x=n.x*i,this.vel.y=n.y*i}checkPlayerCollision(n){if(this.attachedPlayerId===n.id)return!1;const i=this.pos.x-n.pos.x,l=this.pos.y-n.pos.y,c=Math.hypot(i,l)||1,u=this.radius+n.radius+2;if(c<u){const _=u-c,g=i/c,h=l/c;this.pos.x+=g*_,this.pos.y+=h*_;const m=Math.max(5.5,Math.hypot(n.vel.x,n.vel.y)*1.5);return this.vel.x=g*m+n.vel.x*.5,this.vel.y=h*m+n.vel.y*.5,!0}return!1}update(n,i){if(this.releaseTimer>0&&(this.releaseTimer-=n),this.homingTargetPlayer){const g=this.throughPassTargetPos?this.throughPassTargetPos:this.homingTargetPlayer.pos,h=g.x-this.pos.x,m=g.y-this.pos.y,p=Math.hypot(h,m);if(p<22)this.homingTargetPlayer=null,this.throughPassTargetPos=null;else{const y=h/p,v=m/p,C=Math.hypot(this.vel.x,this.vel.y),k=Math.max(C,6.5);this.vel.x=this.vel.x*.85+y*k*.15,this.vel.y=this.vel.y*.85+v*k*.15}}this.attachedPlayerId||(this.pos.x+=this.vel.x,this.pos.y+=this.vel.y,this.vel.x*=this.friction,this.vel.y*=this.friction,Math.abs(this.vel.x)<.05&&(this.vel.x=0),Math.abs(this.vel.y)<.05&&(this.vel.y=0));const l=i.pitchBounds,c=i.goals,u=this.pos.y>=c.homeGoal.top&&this.pos.y<=c.homeGoal.bottom,_=this.pos.y>=c.awayGoal.top&&this.pos.y<=c.awayGoal.bottom;!u&&this.pos.x-this.radius<l.left&&(this.pos.x=l.left+this.radius,this.vel.x=-this.vel.x*.65),!_&&this.pos.x+this.radius>l.right&&(this.pos.x=l.right-this.radius,this.vel.x=-this.vel.x*.65),this.pos.y-this.radius<l.top&&(this.pos.y=l.top+this.radius,this.vel.y=-this.vel.y*.65),this.pos.y+this.radius>l.bottom&&(this.pos.y=l.bottom-this.radius,this.vel.y=-this.vel.y*.65)}draw(n){n.save(),n.fillStyle="rgba(0, 0, 0, 0.35)",n.beginPath(),n.ellipse(this.pos.x+3,this.pos.y+4,this.radius,this.radius*.6,0,0,Math.PI*2),n.fill(),n.fillStyle="#ffffff",n.beginPath(),n.arc(this.pos.x,this.pos.y,this.radius,0,Math.PI*2),n.fill(),n.strokeStyle="#0f172a",n.lineWidth=2,n.stroke(),n.fillStyle="#0f172a",n.beginPath(),n.arc(this.pos.x,this.pos.y,this.radius*.38,0,Math.PI*2),n.fill(),n.restore()}}function Ya(o,n,i){let l=n-o;for(;l<-Math.PI;)l+=Math.PI*2;for(;l>Math.PI;)l-=Math.PI*2;return o+l*i}class jf{constructor(n,i,l,c,u,_,g){Ye(this,"id");Ye(this,"name");Ye(this,"team");Ye(this,"controllerIndex");Ye(this,"isAI");Ye(this,"pos");Ye(this,"vel");Ye(this,"radius");Ye(this,"speed");Ye(this,"color");Ye(this,"facingAngle");Ye(this,"isSprinting");Ye(this,"hasPossession");Ye(this,"stamina");Ye(this,"isExhausted");Ye(this,"bodyTiltAngle");Ye(this,"turfParticles");Ye(this,"isChargingSlide");Ye(this,"slidePower");Ye(this,"isTackling");Ye(this,"tackleTimer");Ye(this,"tackleSlideAngle");Ye(this,"isDribbleSkillActive");Ye(this,"skillDodgeInvincibleTimer");Ye(this,"stumbleTimer");Ye(this,"duelFeedbackText");Ye(this,"duelFeedbackTimer");Ye(this,"duelFeedbackYOffset");Ye(this,"dribbleSpinAngle");Ye(this,"debugInputString");Ye(this,"walkTimer");Ye(this,"prevX");Ye(this,"prevA");Ye(this,"prevY");Ye(this,"prevRB");Ye(this,"prevLB");Ye(this,"prevStart");this.id=n,this.name=i,this.team=l,this.controllerIndex=c,this.isAI=c===null,this.pos={x:_,y:g},this.vel={x:0,y:0},this.radius=18,this.speed=4.2,this.color=u,this.facingAngle=l==="home"?0:Math.PI,this.isSprinting=!1,this.hasPossession=!1,this.stamina=1,this.isExhausted=!1,this.bodyTiltAngle=0,this.turfParticles=[],this.isChargingSlide=!1,this.slidePower=0,this.isTackling=!1,this.tackleTimer=0,this.tackleSlideAngle=0,this.isDribbleSkillActive=!1,this.skillDodgeInvincibleTimer=0,this.stumbleTimer=0,this.duelFeedbackText="",this.duelFeedbackTimer=0,this.duelFeedbackYOffset=0,this.dribbleSpinAngle=0,this.debugInputString="IDLE - Ready for Input",this.walkTimer=Math.random()*100,this.prevX=!1,this.prevA=!1,this.prevY=!1,this.prevRB=!1,this.prevLB=!1,this.prevStart=!1}reset(n,i){this.pos={x:n,y:i},this.vel={x:0,y:0},this.facingAngle=this.team==="home"?0:Math.PI,this.stamina=1,this.isExhausted=!1,this.bodyTiltAngle=0,this.turfParticles=[],this.hasPossession=!1,this.isChargingSlide=!1,this.slidePower=0,this.isTackling=!1,this.tackleTimer=0,this.tackleSlideAngle=0,this.isDribbleSkillActive=!1,this.skillDodgeInvincibleTimer=0,this.stumbleTimer=0,this.duelFeedbackText="",this.duelFeedbackTimer=0,this.duelFeedbackYOffset=0,this.dribbleSpinAngle=0,this.debugInputString="RESET - Position Cleared",this.prevX=!1,this.prevA=!1,this.prevY=!1,this.prevRB=!1,this.prevLB=!1,this.prevStart=!1}triggerFeedback(n){this.duelFeedbackText=n,this.duelFeedbackTimer=1.2,this.duelFeedbackYOffset=0}findBestPassTarget(n,i){const l=n.filter(g=>g.id!==this.id);if(l.length===0)return null;let c=null,u=1/0;const _=Math.PI/5;return l.forEach(g=>{const h=g.pos.x-this.pos.x,m=g.pos.y-this.pos.y,p=Math.hypot(h,m),y=Math.atan2(m,h);let v=Math.abs(y-i);for(;v>Math.PI;)v=Math.abs(v-Math.PI*2);if(v<=_){const C=v*200+p;C<u&&(u=C,c=g)}}),c}updateParticles(){for(let n=this.turfParticles.length-1;n>=0;n--){const i=this.turfParticles[n];i.x+=i.vx,i.y+=i.vy,i.vx*=.92,i.vy*=.92,i.life-=.025,i.life<=0&&this.turfParticles.splice(n,1)}}spawnTurfParticle(n,i=!1){const l=i?4:1;for(let c=0;c<l;c++){const u=(i?this.tackleSlideAngle:this.facingAngle)+Math.PI+(Math.random()-.5)*1.1;this.turfParticles.push({x:this.pos.x+Math.cos(u)*(this.radius*.7),y:this.pos.y+Math.sin(u)*(this.radius*.7),vx:Math.cos(u)*(Math.random()*4+1.2)*n,vy:Math.sin(u)*(Math.random()*4+1.2)*n,life:1,color:i?Math.random()>.4?"#e0f2fe":Math.random()>.5?"#86efac":"#38bdf8":Math.random()>.5?"#15803d":"#86efac",size:i?Math.random()*4.5+2:Math.random()*2.5+1.2})}}executePassTo(n,i){if(!this.hasPossession)return;this.hasPossession=!1,n.hasPossession=!1;const l=n.pos.x-this.pos.x,c=n.pos.y-this.pos.y,u=Math.hypot(l,c)||1;this.facingAngle=Math.atan2(c,l);const _=Math.min(Math.max(u*.042+4.5,6.5),11.5);i.kick({x:l/u,y:c/u},_,this.id,n)}updateEnemyBotAI(n,i,l){this.updateParticles(),this.isSprinting||(this.stamina=Math.min(1,this.stamina+.0025),this.isExhausted&&this.stamina>=.2&&(this.isExhausted=!1)),this.tackleTimer>0?(this.tackleTimer-=.016,this.vel.x*=.94,this.vel.y*=.94,this.spawnTurfParticle(2.5,!0)):this.isTackling=!1,this.skillDodgeInvincibleTimer>0?(this.skillDodgeInvincibleTimer-=.016,this.dribbleSpinAngle+=.35):(this.isDribbleSkillActive=!1,this.dribbleSpinAngle=0),this.stumbleTimer>0&&(this.stumbleTimer-=.016),this.duelFeedbackTimer>0&&(this.duelFeedbackTimer-=.016,this.duelFeedbackYOffset+=.4);const c=Math.hypot(this.pos.x-n.pos.x,this.pos.y-n.pos.y);if(this.hasPossession){const _=i.goals.homeGoal,g=_.top+(_.bottom-_.top)*.5,h=_.x-this.pos.x,m=g-this.pos.y,p=Math.hypot(h,m)||1,y=this.speed*.4;this.vel.x=h/p*y,this.vel.y=m/p*y;const v=Math.atan2(this.vel.y,this.vel.x);this.facingAngle=Ya(this.facingAngle,v,.22),n.attachToPlayer(this.pos,this.facingAngle,this.radius,this.vel,this.id)}else{const _=l.find(C=>C.hasPossession),g=_?_.pos:n.pos,h=g.x-this.pos.x,m=g.y-this.pos.y,p=Math.hypot(h,m)||1,y=this.speed*.65;this.vel.x=h/p*y,this.vel.y=m/p*y;const v=Math.atan2(m,h);this.facingAngle=Ya(this.facingAngle,v,.22),n.releaseTimer<=0&&c<this.radius+n.radius+25&&(this.hasPossession=!0)}this.pos.x+=this.vel.x,this.pos.y+=this.vel.y;const u=i.pitchBounds;this.pos.x=Math.max(u.left+this.radius,Math.min(u.right-this.radius,this.pos.x)),this.pos.y=Math.max(u.top+this.radius,Math.min(u.bottom-this.radius,this.pos.y))}updatePassiveReception(n,i){this.walkTimer+=.02,this.updateParticles(),this.isSprinting||(this.stamina=Math.min(1,this.stamina+.0025),this.isExhausted&&this.stamina>=.2&&(this.isExhausted=!1)),this.tackleTimer>0?(this.tackleTimer-=.016,this.vel.x*=.94,this.vel.y*=.94,this.spawnTurfParticle(2.5,!0)):this.isTackling=!1,this.skillDodgeInvincibleTimer>0?(this.skillDodgeInvincibleTimer-=.016,this.dribbleSpinAngle+=.35):(this.isDribbleSkillActive=!1,this.dribbleSpinAngle=0),this.stumbleTimer>0&&(this.stumbleTimer-=.016),this.duelFeedbackTimer>0&&(this.duelFeedbackTimer-=.016,this.duelFeedbackYOffset+=.4);const l=Math.hypot(this.pos.x-n.pos.x,this.pos.y-n.pos.y);if(n.homingTargetPlayer&&n.homingTargetPlayer.id===this.id){this.hasPossession=!1;let u=n.pos.x,_=n.pos.y;n.throughPassTargetPos?(u=n.throughPassTargetPos.x,_=n.throughPassTargetPos.y,!this.isExhausted&&this.stamina>0?(this.isSprinting=!0,this.stamina=Math.max(0,this.stamina-.004),this.stamina===0&&(this.isExhausted=!0,this.isSprinting=!1,this.triggerFeedback("⚠️ EXHAUSTED!"))):this.isSprinting=!1,this.spawnTurfParticle(1.5)):this.isSprinting=!1;const g=u-this.pos.x,h=_-this.pos.y,m=Math.hypot(g,h)||1,p=this.isSprinting?this.speed*1.5:this.speed*.7;this.vel.x=g/m*p,this.vel.y=h/m*p;const y=Math.atan2(h,g);this.facingAngle=Ya(this.facingAngle,y,.25);const v=this.radius+n.radius+14;l<v&&n.releaseTimer<=0&&(this.hasPossession=!0,this.isSprinting=!1,n.attachToPlayer(this.pos,this.facingAngle,this.radius,this.vel,this.id))}else if(this.hasPossession){const u=this.team==="home"?i.goals.awayGoal:i.goals.homeGoal,_=u.top+(u.bottom-u.top)*.5,g=u.x-this.pos.x,h=_-this.pos.y,m=Math.hypot(g,h)||1,p=this.speed*.45;this.vel.x=g/m*p,this.vel.y=h/m*p*.4;const y=Math.atan2(this.vel.y,this.vel.x);this.facingAngle=Ya(this.facingAngle,y,.22),n.attachToPlayer(this.pos,this.facingAngle,this.radius,this.vel,this.id)}else{const u=this.speed*.35,_=Math.cos(this.walkTimer*1.2),g=Math.sin(this.walkTimer*.8);this.vel.x=_*u,this.vel.y=g*u;const h=Math.atan2(this.vel.y,this.vel.x);this.facingAngle=Ya(this.facingAngle,h,.15),n.releaseTimer<=0&&l<this.radius+n.radius+18&&(this.hasPossession=!0)}this.pos.x+=this.vel.x,this.pos.y+=this.vel.y;const c=i.pitchBounds;this.pos.x=Math.max(c.left+this.radius,Math.min(c.right-this.radius,this.pos.x)),this.pos.y=Math.max(c.top+this.radius,Math.min(c.bottom-this.radius,this.pos.y))}updateFromGamepad(n,i,l,c,u){let _=!1;this.updateParticles(),this.tackleTimer>0?(this.tackleTimer-=.016,this.vel.x*=.94,this.vel.y*=.94,this.spawnTurfParticle(2.8,!0)):this.isTackling=!1,this.skillDodgeInvincibleTimer>0?(this.skillDodgeInvincibleTimer-=.016,this.dribbleSpinAngle+=.35):(this.isDribbleSkillActive=!1,this.dribbleSpinAngle=0),this.stumbleTimer>0&&(this.stumbleTimer-=.016),this.duelFeedbackTimer>0&&(this.duelFeedbackTimer-=.016,this.duelFeedbackYOffset+=.4);const g=this.stumbleTimer>0?.3:1,h=n.axes.leftStickX,m=n.axes.leftStickY;n.buttons.rt>.3?this.isExhausted?this.isSprinting=!1:(this.isSprinting=!0,this.stamina=Math.max(0,this.stamina-.004),this.stamina===0&&(this.isExhausted=!0,this.isSprinting=!1,this.triggerFeedback("⚠️ EXHAUSTED!"))):(this.isSprinting=!1,this.stamina=Math.min(1,this.stamina+.0025),this.isExhausted&&this.stamina>=.2&&(this.isExhausted=!1));const y=(this.isSprinting?this.speed*1.6:this.speed)*g,v=Math.hypot(h,m);let C=this.facingAngle;if(v>.05){const F=h*y,le=m*y;this.vel.x=this.vel.x*.65+F*.35,this.vel.y=this.vel.y*.65+le*.35,C=Math.atan2(m,h);const ge=C-this.facingAngle;this.facingAngle=Ya(this.facingAngle,C,.25),this.bodyTiltAngle=Math.max(-.22,Math.min(.22,ge*.35)),this.isSprinting&&this.spawnTurfParticle(y/this.speed)}else this.vel.x*=.76,this.vel.y*=.76,this.bodyTiltAngle*=.8,Math.abs(this.vel.x)<.05&&(this.vel.x=0),Math.abs(this.vel.y)<.05&&(this.vel.y=0);this.pos.x+=this.vel.x,this.pos.y+=this.vel.y;const k=l.pitchBounds;this.pos.x=Math.max(k.left+this.radius,Math.min(k.right-this.radius,this.pos.x)),this.pos.y=Math.max(k.top+this.radius,Math.min(k.bottom-this.radius,this.pos.y));const M=Math.hypot(this.pos.x-i.pos.x,this.pos.y-i.pos.y);i.releaseTimer<=0&&M<this.radius+i.radius+25&&!i.homingTargetPlayer?(this.hasPossession=!0,i.attachToPlayer(this.pos,this.facingAngle,this.radius,this.vel,this.id)):i.homingTargetPlayer&&i.homingTargetPlayer.id!==this.id&&(this.hasPossession=!1);const L=n.buttons.x,B=n.buttons.a,J=n.buttons.y,G=n.buttons.rb,z=n.buttons.lb,de=n.buttons.start;de&&!this.prevStart&&(_=!0);const he=[];if(this.hasPossession?(B&&he.push("A (Direct Pass)"),L&&he.push("X (Shoot)"),J&&he.push("Y (Through / Gocek)"),G&&he.push("RB (Gocek Skill)")):(this.isChargingSlide?he.push(`X (SLIDE CHARGE: ${(this.slidePower*100).toFixed(0)}%)`):L&&he.push("X (SLIDE TACKLE!)"),B&&he.push("A (Switch)"),J&&he.push("Y (Press)")),this.isSprinting&&he.push(`RT (Sprint Stamina: ${Math.round(this.stamina*100)}%)`),this.isExhausted&&he.push("⚠️ EXHAUSTED!"),de&&he.push("Start (ToggleHUD)"),this.debugInputString=he.length>0?`PRESSED: ${he.join(" + ")}`:`STICK: [${h.toFixed(2)}, ${m.toFixed(2)}]`,this.hasPossession){if(this.isChargingSlide=!1,this.slidePower=0,L&&!this.prevX){const le=this.team==="home"?l.goals.awayGoal:l.goals.homeGoal,ge=le.top+(le.bottom-le.top)*.5,xe=le.x-this.pos.x,ue=ge-this.pos.y,K=Math.hypot(xe,ue)||1;this.hasPossession=!1,i.kick({x:xe/K,y:ue/K},14.5,this.id,null,null),this.debugInputString="🔥 SHOOT TRIGGERED (Tombol X)!"}if(B&&!this.prevA){this.hasPossession=!1;const le=this.findBestPassTarget(c,C);if(le){le.hasPossession=!1;const ge=le.pos.x-this.pos.x,xe=le.pos.y-this.pos.y,ue=Math.hypot(ge,xe)||1,K=Math.min(Math.max(ue*.042+4.5,6.5),11.5);i.kick({x:ge/ue,y:xe/ue},K,this.id,le,null),this.debugInputString=`⚽ SMART ASSIST PASS TO ${le.name} (Tombol A)!`}else{const ge={x:Math.cos(C),y:Math.sin(C)};i.kick(ge,8.5,this.id,null,null),this.debugInputString="⚽ MANUAL DIRECTION PASS (No Teammate Aimed)!"}}(J&&!this.prevY||G&&!this.prevRB)&&(this.isDribbleSkillActive=!0,this.skillDodgeInvincibleTimer=.45,this.triggerFeedback("🔥 GOCEK!"),this.debugInputString="🔥 DRIBBLE SKILL MOVE / GOCEK TRIGGERED!")}else{if(L)this.isChargingSlide=!0,this.slidePower=Math.min(1,this.slidePower+.035);else if(this.prevX&&this.isChargingSlide){this.isChargingSlide=!1,this.isTackling=!0;const le=8+this.slidePower*14;this.tackleTimer=.4+this.slidePower*.35,this.tackleSlideAngle=this.facingAngle,this.vel.x+=Math.cos(this.facingAngle)*le,this.vel.y+=Math.sin(this.facingAngle)*le;const ge=Math.round(this.slidePower*100);this.triggerFeedback(`⚡ SLIDE ${ge}%!`),this.slidePower=0}else this.isChargingSlide=!1,this.slidePower=0;if(G&&!this.prevRB||z&&!this.prevLB){const le=c.find(ge=>ge.id!==this.id);le&&(le.executePassTo(this,i),this.debugInputString="⚡ RB/LB REQUEST PASS -> PLAYER 2 PASSED TO PLAYER 1!")}}return this.prevX=L,this.prevA=B,this.prevY=J,this.prevRB=G,this.prevLB=z,this.prevStart=de,{toggleHUDRequested:_}}draw(n){const i=this.id==="p1",l=this.id==="p2",c=i?"#f87171":l?"#60a5fa":"#f59e0b",u=i?"Kamu":l?"Rekan":"Musuh (P3)",_=i?"QI":l?"P2":"P3";this.turfParticles.forEach(C=>{n.fillStyle=C.color,n.globalAlpha=Math.max(0,C.life),n.beginPath(),n.arc(C.x,C.y,C.size,0,Math.PI*2),n.fill()}),n.globalAlpha=1;const g=this.radius+14,h=this.isExhausted?"#ef4444":this.stamina>.5?"#10b981":this.stamina>.2?"#f59e0b":"#ef4444";if(n.strokeStyle="rgba(0, 0, 0, 0.4)",n.lineWidth=3.5,n.beginPath(),n.arc(this.pos.x,this.pos.y,g,0,Math.PI*2),n.stroke(),this.stamina>0){const C=-Math.PI/2,k=C+this.stamina*Math.PI*2;n.strokeStyle=h,n.lineWidth=3.5,n.beginPath(),n.arc(this.pos.x,this.pos.y,g,C,k),n.stroke()}if(this.isChargingSlide){const M=this.pos.x-26,L=this.pos.y-this.radius-28;n.fillStyle="rgba(15, 23, 42, 0.90)",n.strokeStyle="rgba(255, 255, 255, 0.8)",n.lineWidth=1.5,n.beginPath(),n.roundRect(M,L,52,9,4),n.fill(),n.stroke();const B=Math.max(2,50*this.slidePower),J=this.slidePower<.5?"#06b6d4":this.slidePower<.85?"#f59e0b":"#ef4444";n.fillStyle=J,n.beginPath(),n.roundRect(M+1,L+1,B,7,3),n.fill()}this.isTackling&&(n.save(),n.translate(this.pos.x,this.pos.y),n.rotate(this.tackleSlideAngle),n.fillStyle="#f87171",n.strokeStyle="#06b6d4",n.lineWidth=3.5,n.beginPath(),n.roundRect(0,-7,this.radius+38,14,7),n.fill(),n.stroke(),n.strokeStyle="#38bdf8",n.lineWidth=4.5,n.beginPath(),n.arc(this.radius+38,0,20,-Math.PI/2,Math.PI/2),n.stroke(),n.restore()),this.skillDodgeInvincibleTimer>0&&(n.strokeStyle="#f59e0b",n.lineWidth=4,n.setLineDash([6,4]),n.beginPath(),n.arc(this.pos.x,this.pos.y,this.radius+14,0,Math.PI*2),n.stroke(),n.setLineDash([])),n.save(),n.translate(this.pos.x,this.pos.y),n.rotate(this.bodyTiltAngle+this.dribbleSpinAngle);const m=this.radius+8;n.strokeStyle=this.hasPossession?"#10b981":"rgba(187, 247, 208, 0.85)",n.lineWidth=this.hasPossession?4.5:3.5,n.beginPath(),n.arc(0,0,m,0,Math.PI*2),n.stroke();const p=Math.PI/3,y=this.facingAngle-this.bodyTiltAngle-p/2,v=this.facingAngle-this.bodyTiltAngle+p/2;if(n.strokeStyle=this.hasPossession?"#047857":"#0a2d12",n.lineWidth=this.hasPossession?6.5:6,n.beginPath(),n.arc(0,0,m,y,v),n.stroke(),n.fillStyle=c,n.beginPath(),n.arc(0,0,this.radius,0,Math.PI*2),n.fill(),n.strokeStyle="#000000",n.lineWidth=3.5,n.stroke(),n.fillStyle="#ffffff",n.font="900 14px sans-serif",n.textAlign="center",n.textBaseline="middle",n.strokeStyle="#000000",n.lineWidth=3,n.strokeText(_,0,1),n.fillText(_,0,1),n.restore(),n.fillStyle="#ffffff",n.font="bold 15px sans-serif",n.textAlign="center",n.textBaseline="alphabetic",n.strokeStyle="rgba(0, 0, 0, 0.7)",n.lineWidth=2.5,n.strokeText(u,this.pos.x,this.pos.y-12-this.radius),n.fillText(u,this.pos.x,this.pos.y-12-this.radius),this.duelFeedbackTimer>0){n.save(),n.globalAlpha=Math.min(1,this.duelFeedbackTimer*1.5),n.fillStyle=this.duelFeedbackText.includes("EXHAUSTED")?"#ef4444":this.duelFeedbackText.includes("GOCEK")?"#fbbf24":"#06b6d4",n.font="900 16px sans-serif",n.textAlign="center",n.strokeStyle="#000000",n.lineWidth=3.5;const C=this.pos.y-32-this.radius-this.duelFeedbackYOffset;n.strokeText(this.duelFeedbackText,this.pos.x,C),n.fillText(this.duelFeedbackText,this.pos.x,C),n.restore()}}}class zb{constructor(n="1v1_local"){Ye(this,"state");Ye(this,"isDebugMode");this.isDebugMode=!0,this.state={mode:n,timerSeconds:999,scoreHome:0,scoreAway:0,state:"PLAYING",winnerTitle:"",logMessage:"🛠️ DEBUGGING MODE ACTIVE - Scoring & Game Over Disabled",debugInputText:"Ready"}}resetMatch(){this.state.timerSeconds=999,this.state.scoreHome=0,this.state.scoreAway=0,this.state.state="PLAYING",this.state.winnerTitle="",this.state.logMessage="🛠️ DEBUGGING MODE - Arena Reset",this.state.debugInputText="Ready"}setMode(n){this.state.mode=n,this.resetMatch()}update(n,i,l){if(this.isDebugMode)return this.state.state="PLAYING",this.state.logMessage="🛠️ DEBUGGING MODE - Free Sandbox Play (Scoring Off)",!1;if(this.state.state==="GAME_OVER")return!1;this.state.timerSeconds>0?this.state.timerSeconds=Math.max(0,this.state.timerSeconds-n):this.state.state==="PLAYING"&&(this.state.scoreHome!==this.state.scoreAway?this.triggerGameOver(this.state.scoreHome>this.state.scoreAway?"HOME TEAM WINS ON TIME!":"AWAY TEAM WINS ON TIME!"):(this.state.state="GOLDEN_GOAL",this.state.logMessage="⏰ TIME EXPIRED! Entering GOLDEN GOAL Overtime (Next goal wins!)"));const c=l.goals;if(i.pos.y>c.homeGoal.top&&i.pos.y<c.homeGoal.bottom){if(i.pos.x-i.radius<c.homeGoal.x-10)return this.state.scoreAway++,this.state.logMessage=`⚽ GOAL FOR AWAY TEAM! (${this.state.scoreHome} - ${this.state.scoreAway})`,this.checkWinCondition("AWAY TEAM"),!0;if(i.pos.x+i.radius>c.awayGoal.x+10)return this.state.scoreHome++,this.state.logMessage=`⚽ GOAL FOR HOME TEAM! (${this.state.scoreHome} - ${this.state.scoreAway})`,this.checkWinCondition("HOME TEAM"),!0}return!1}checkWinCondition(n){if(this.state.state==="GOLDEN_GOAL"){this.triggerGameOver(`🏆 ${n} WINS VIA GOLDEN GOAL!`);return}this.state.scoreHome>=3?this.triggerGameOver("🏆 HOME TEAM VICTORIOUS! (3 Goals Scored)"):this.state.scoreAway>=3&&this.triggerGameOver("🏆 AWAY TEAM VICTORIOUS! (3 Goals Scored)")}triggerGameOver(n){this.state.state="GAME_OVER",this.state.winnerTitle=n,this.state.logMessage=`🏁 GAME OVER! ${n}`}}/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),tg=(...o)=>o.filter((n,i,l)=>!!n&&n.trim()!==""&&l.indexOf(n)===i).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $b={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pb=b.forwardRef(({color:o="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:l,className:c="",children:u,iconNode:_,...g},h)=>b.createElement("svg",{ref:h,...$b,width:n,height:n,stroke:o,strokeWidth:l?Number(i)*24/Number(n):i,className:tg("lucide",c),...g},[..._.map(([m,p])=>b.createElement(m,p)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ds=(o,n)=>{const i=b.forwardRef(({className:l,...c},u)=>b.createElement(Pb,{ref:u,iconNode:n,className:tg(`lucide-${Bb(o)}`,l),...c}));return i.displayName=`${o}`,i};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Ub=Ds("CircleCheckBig",Ib);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Yb=Ds("Copy",Hb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Gb=Ds("EyeOff",Xb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Wb=Ds("Eye",Fb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]],Qb=Ds("Maximize2",qb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],Kb=Ds("Maximize",Vb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]],Jb=Ds("Minimize",Zb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e5=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]],t5=Ds("Pause",e5);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n5=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],s5=Ds("RefreshCw",n5);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o5=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],i5=Ds("RotateCcw",o5);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a5=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],ng=Ds("Smartphone",a5);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l5=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],r5=Ds("Wifi",l5);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c5=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],u5=Ds("X",c5);var d5=Object.defineProperty,uu=Object.getOwnPropertySymbols,sg=Object.prototype.hasOwnProperty,og=Object.prototype.propertyIsEnumerable,Kp=(o,n,i)=>n in o?d5(o,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[n]=i,Gf=(o,n)=>{for(var i in n||(n={}))sg.call(n,i)&&Kp(o,i,n[i]);if(uu)for(var i of uu(n))og.call(n,i)&&Kp(o,i,n[i]);return o},Ff=(o,n)=>{var i={};for(var l in o)sg.call(o,l)&&n.indexOf(l)<0&&(i[l]=o[l]);if(o!=null&&uu)for(var l of uu(o))n.indexOf(l)<0&&og.call(o,l)&&(i[l]=o[l]);return i};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var Ji;(o=>{const n=class Rt{constructor(h,m,p,y){if(this.version=h,this.errorCorrectionLevel=m,this.modules=[],this.isFunction=[],h<Rt.MIN_VERSION||h>Rt.MAX_VERSION)throw new RangeError("Version value out of range");if(y<-1||y>7)throw new RangeError("Mask value out of range");this.size=h*4+17;let v=[];for(let k=0;k<this.size;k++)v.push(!1);for(let k=0;k<this.size;k++)this.modules.push(v.slice()),this.isFunction.push(v.slice());this.drawFunctionPatterns();const C=this.addEccAndInterleave(p);if(this.drawCodewords(C),y==-1){let k=1e9;for(let M=0;M<8;M++){this.applyMask(M),this.drawFormatBits(M);const L=this.getPenaltyScore();L<k&&(y=M,k=L),this.applyMask(M)}}c(0<=y&&y<=7),this.mask=y,this.applyMask(y),this.drawFormatBits(y),this.isFunction=[]}static encodeText(h,m){const p=o.QrSegment.makeSegments(h);return Rt.encodeSegments(p,m)}static encodeBinary(h,m){const p=o.QrSegment.makeBytes(h);return Rt.encodeSegments([p],m)}static encodeSegments(h,m,p=1,y=40,v=-1,C=!0){if(!(Rt.MIN_VERSION<=p&&p<=y&&y<=Rt.MAX_VERSION)||v<-1||v>7)throw new RangeError("Invalid value");let k,M;for(k=p;;k++){const G=Rt.getNumDataCodewords(k,m)*8,z=_.getTotalBits(h,k);if(z<=G){M=z;break}if(k>=y)throw new RangeError("Data too long")}for(const G of[Rt.Ecc.MEDIUM,Rt.Ecc.QUARTILE,Rt.Ecc.HIGH])C&&M<=Rt.getNumDataCodewords(k,G)*8&&(m=G);let L=[];for(const G of h){i(G.mode.modeBits,4,L),i(G.numChars,G.mode.numCharCountBits(k),L);for(const z of G.getData())L.push(z)}c(L.length==M);const B=Rt.getNumDataCodewords(k,m)*8;c(L.length<=B),i(0,Math.min(4,B-L.length),L),i(0,(8-L.length%8)%8,L),c(L.length%8==0);for(let G=236;L.length<B;G^=253)i(G,8,L);let J=[];for(;J.length*8<L.length;)J.push(0);return L.forEach((G,z)=>J[z>>>3]|=G<<7-(z&7)),new Rt(k,m,J,v)}getModule(h,m){return 0<=h&&h<this.size&&0<=m&&m<this.size&&this.modules[m][h]}getModules(){return this.modules}drawFunctionPatterns(){for(let p=0;p<this.size;p++)this.setFunctionModule(6,p,p%2==0),this.setFunctionModule(p,6,p%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const h=this.getAlignmentPatternPositions(),m=h.length;for(let p=0;p<m;p++)for(let y=0;y<m;y++)p==0&&y==0||p==0&&y==m-1||p==m-1&&y==0||this.drawAlignmentPattern(h[p],h[y]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(h){const m=this.errorCorrectionLevel.formatBits<<3|h;let p=m;for(let v=0;v<10;v++)p=p<<1^(p>>>9)*1335;const y=(m<<10|p)^21522;c(y>>>15==0);for(let v=0;v<=5;v++)this.setFunctionModule(8,v,l(y,v));this.setFunctionModule(8,7,l(y,6)),this.setFunctionModule(8,8,l(y,7)),this.setFunctionModule(7,8,l(y,8));for(let v=9;v<15;v++)this.setFunctionModule(14-v,8,l(y,v));for(let v=0;v<8;v++)this.setFunctionModule(this.size-1-v,8,l(y,v));for(let v=8;v<15;v++)this.setFunctionModule(8,this.size-15+v,l(y,v));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let h=this.version;for(let p=0;p<12;p++)h=h<<1^(h>>>11)*7973;const m=this.version<<12|h;c(m>>>18==0);for(let p=0;p<18;p++){const y=l(m,p),v=this.size-11+p%3,C=Math.floor(p/3);this.setFunctionModule(v,C,y),this.setFunctionModule(C,v,y)}}drawFinderPattern(h,m){for(let p=-4;p<=4;p++)for(let y=-4;y<=4;y++){const v=Math.max(Math.abs(y),Math.abs(p)),C=h+y,k=m+p;0<=C&&C<this.size&&0<=k&&k<this.size&&this.setFunctionModule(C,k,v!=2&&v!=4)}}drawAlignmentPattern(h,m){for(let p=-2;p<=2;p++)for(let y=-2;y<=2;y++)this.setFunctionModule(h+y,m+p,Math.max(Math.abs(y),Math.abs(p))!=1)}setFunctionModule(h,m,p){this.modules[m][h]=p,this.isFunction[m][h]=!0}addEccAndInterleave(h){const m=this.version,p=this.errorCorrectionLevel;if(h.length!=Rt.getNumDataCodewords(m,p))throw new RangeError("Invalid argument");const y=Rt.NUM_ERROR_CORRECTION_BLOCKS[p.ordinal][m],v=Rt.ECC_CODEWORDS_PER_BLOCK[p.ordinal][m],C=Math.floor(Rt.getNumRawDataModules(m)/8),k=y-C%y,M=Math.floor(C/y);let L=[];const B=Rt.reedSolomonComputeDivisor(v);for(let G=0,z=0;G<y;G++){let de=h.slice(z,z+M-v+(G<k?0:1));z+=de.length;const he=Rt.reedSolomonComputeRemainder(de,B);G<k&&de.push(0),L.push(de.concat(he))}let J=[];for(let G=0;G<L[0].length;G++)L.forEach((z,de)=>{(G!=M-v||de>=k)&&J.push(z[G])});return c(J.length==C),J}drawCodewords(h){if(h.length!=Math.floor(Rt.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let m=0;for(let p=this.size-1;p>=1;p-=2){p==6&&(p=5);for(let y=0;y<this.size;y++)for(let v=0;v<2;v++){const C=p-v,M=(p+1&2)==0?this.size-1-y:y;!this.isFunction[M][C]&&m<h.length*8&&(this.modules[M][C]=l(h[m>>>3],7-(m&7)),m++)}}c(m==h.length*8)}applyMask(h){if(h<0||h>7)throw new RangeError("Mask value out of range");for(let m=0;m<this.size;m++)for(let p=0;p<this.size;p++){let y;switch(h){case 0:y=(p+m)%2==0;break;case 1:y=m%2==0;break;case 2:y=p%3==0;break;case 3:y=(p+m)%3==0;break;case 4:y=(Math.floor(p/3)+Math.floor(m/2))%2==0;break;case 5:y=p*m%2+p*m%3==0;break;case 6:y=(p*m%2+p*m%3)%2==0;break;case 7:y=((p+m)%2+p*m%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[m][p]&&y&&(this.modules[m][p]=!this.modules[m][p])}}getPenaltyScore(){let h=0;for(let v=0;v<this.size;v++){let C=!1,k=0,M=[0,0,0,0,0,0,0];for(let L=0;L<this.size;L++)this.modules[v][L]==C?(k++,k==5?h+=Rt.PENALTY_N1:k>5&&h++):(this.finderPenaltyAddHistory(k,M),C||(h+=this.finderPenaltyCountPatterns(M)*Rt.PENALTY_N3),C=this.modules[v][L],k=1);h+=this.finderPenaltyTerminateAndCount(C,k,M)*Rt.PENALTY_N3}for(let v=0;v<this.size;v++){let C=!1,k=0,M=[0,0,0,0,0,0,0];for(let L=0;L<this.size;L++)this.modules[L][v]==C?(k++,k==5?h+=Rt.PENALTY_N1:k>5&&h++):(this.finderPenaltyAddHistory(k,M),C||(h+=this.finderPenaltyCountPatterns(M)*Rt.PENALTY_N3),C=this.modules[L][v],k=1);h+=this.finderPenaltyTerminateAndCount(C,k,M)*Rt.PENALTY_N3}for(let v=0;v<this.size-1;v++)for(let C=0;C<this.size-1;C++){const k=this.modules[v][C];k==this.modules[v][C+1]&&k==this.modules[v+1][C]&&k==this.modules[v+1][C+1]&&(h+=Rt.PENALTY_N2)}let m=0;for(const v of this.modules)m=v.reduce((C,k)=>C+(k?1:0),m);const p=this.size*this.size,y=Math.ceil(Math.abs(m*20-p*10)/p)-1;return c(0<=y&&y<=9),h+=y*Rt.PENALTY_N4,c(0<=h&&h<=2568888),h}getAlignmentPatternPositions(){if(this.version==1)return[];{const h=Math.floor(this.version/7)+2,m=this.version==32?26:Math.ceil((this.version*4+4)/(h*2-2))*2;let p=[6];for(let y=this.size-7;p.length<h;y-=m)p.splice(1,0,y);return p}}static getNumRawDataModules(h){if(h<Rt.MIN_VERSION||h>Rt.MAX_VERSION)throw new RangeError("Version number out of range");let m=(16*h+128)*h+64;if(h>=2){const p=Math.floor(h/7)+2;m-=(25*p-10)*p-55,h>=7&&(m-=36)}return c(208<=m&&m<=29648),m}static getNumDataCodewords(h,m){return Math.floor(Rt.getNumRawDataModules(h)/8)-Rt.ECC_CODEWORDS_PER_BLOCK[m.ordinal][h]*Rt.NUM_ERROR_CORRECTION_BLOCKS[m.ordinal][h]}static reedSolomonComputeDivisor(h){if(h<1||h>255)throw new RangeError("Degree out of range");let m=[];for(let y=0;y<h-1;y++)m.push(0);m.push(1);let p=1;for(let y=0;y<h;y++){for(let v=0;v<m.length;v++)m[v]=Rt.reedSolomonMultiply(m[v],p),v+1<m.length&&(m[v]^=m[v+1]);p=Rt.reedSolomonMultiply(p,2)}return m}static reedSolomonComputeRemainder(h,m){let p=m.map(y=>0);for(const y of h){const v=y^p.shift();p.push(0),m.forEach((C,k)=>p[k]^=Rt.reedSolomonMultiply(C,v))}return p}static reedSolomonMultiply(h,m){if(h>>>8||m>>>8)throw new RangeError("Byte out of range");let p=0;for(let y=7;y>=0;y--)p=p<<1^(p>>>7)*285,p^=(m>>>y&1)*h;return c(p>>>8==0),p}finderPenaltyCountPatterns(h){const m=h[1];c(m<=this.size*3);const p=m>0&&h[2]==m&&h[3]==m*3&&h[4]==m&&h[5]==m;return(p&&h[0]>=m*4&&h[6]>=m?1:0)+(p&&h[6]>=m*4&&h[0]>=m?1:0)}finderPenaltyTerminateAndCount(h,m,p){return h&&(this.finderPenaltyAddHistory(m,p),m=0),m+=this.size,this.finderPenaltyAddHistory(m,p),this.finderPenaltyCountPatterns(p)}finderPenaltyAddHistory(h,m){m[0]==0&&(h+=this.size),m.pop(),m.unshift(h)}};n.MIN_VERSION=1,n.MAX_VERSION=40,n.PENALTY_N1=3,n.PENALTY_N2=3,n.PENALTY_N3=40,n.PENALTY_N4=10,n.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],n.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],o.QrCode=n;function i(g,h,m){if(h<0||h>31||g>>>h)throw new RangeError("Value out of range");for(let p=h-1;p>=0;p--)m.push(g>>>p&1)}function l(g,h){return(g>>>h&1)!=0}function c(g){if(!g)throw new Error("Assertion error")}const u=class Cn{constructor(h,m,p){if(this.mode=h,this.numChars=m,this.bitData=p,m<0)throw new RangeError("Invalid argument");this.bitData=p.slice()}static makeBytes(h){let m=[];for(const p of h)i(p,8,m);return new Cn(Cn.Mode.BYTE,h.length,m)}static makeNumeric(h){if(!Cn.isNumeric(h))throw new RangeError("String contains non-numeric characters");let m=[];for(let p=0;p<h.length;){const y=Math.min(h.length-p,3);i(parseInt(h.substring(p,p+y),10),y*3+1,m),p+=y}return new Cn(Cn.Mode.NUMERIC,h.length,m)}static makeAlphanumeric(h){if(!Cn.isAlphanumeric(h))throw new RangeError("String contains unencodable characters in alphanumeric mode");let m=[],p;for(p=0;p+2<=h.length;p+=2){let y=Cn.ALPHANUMERIC_CHARSET.indexOf(h.charAt(p))*45;y+=Cn.ALPHANUMERIC_CHARSET.indexOf(h.charAt(p+1)),i(y,11,m)}return p<h.length&&i(Cn.ALPHANUMERIC_CHARSET.indexOf(h.charAt(p)),6,m),new Cn(Cn.Mode.ALPHANUMERIC,h.length,m)}static makeSegments(h){return h==""?[]:Cn.isNumeric(h)?[Cn.makeNumeric(h)]:Cn.isAlphanumeric(h)?[Cn.makeAlphanumeric(h)]:[Cn.makeBytes(Cn.toUtf8ByteArray(h))]}static makeEci(h){let m=[];if(h<0)throw new RangeError("ECI assignment value out of range");if(h<128)i(h,8,m);else if(h<16384)i(2,2,m),i(h,14,m);else if(h<1e6)i(6,3,m),i(h,21,m);else throw new RangeError("ECI assignment value out of range");return new Cn(Cn.Mode.ECI,0,m)}static isNumeric(h){return Cn.NUMERIC_REGEX.test(h)}static isAlphanumeric(h){return Cn.ALPHANUMERIC_REGEX.test(h)}getData(){return this.bitData.slice()}static getTotalBits(h,m){let p=0;for(const y of h){const v=y.mode.numCharCountBits(m);if(y.numChars>=1<<v)return 1/0;p+=4+v+y.bitData.length}return p}static toUtf8ByteArray(h){h=encodeURI(h);let m=[];for(let p=0;p<h.length;p++)h.charAt(p)!="%"?m.push(h.charCodeAt(p)):(m.push(parseInt(h.substring(p+1,p+3),16)),p+=2);return m}};u.NUMERIC_REGEX=/^[0-9]*$/,u.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,u.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let _=u;o.QrSegment=u})(Ji||(Ji={}));(o=>{(n=>{const i=class{constructor(c,u){this.ordinal=c,this.formatBits=u}};i.LOW=new i(0,1),i.MEDIUM=new i(1,0),i.QUARTILE=new i(2,3),i.HIGH=new i(3,2),n.Ecc=i})(o.QrCode||(o.QrCode={}))})(Ji||(Ji={}));(o=>{(n=>{const i=class{constructor(c,u){this.modeBits=c,this.numBitsCharCount=u}numCharCountBits(c){return this.numBitsCharCount[Math.floor((c+7)/17)]}};i.NUMERIC=new i(1,[10,12,14]),i.ALPHANUMERIC=new i(2,[9,11,13]),i.BYTE=new i(4,[8,16,16]),i.KANJI=new i(8,[8,10,12]),i.ECI=new i(7,[0,0,0]),n.Mode=i})(o.QrSegment||(o.QrSegment={}))})(Ji||(Ji={}));var Wa=Ji;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var f5={L:Wa.QrCode.Ecc.LOW,M:Wa.QrCode.Ecc.MEDIUM,Q:Wa.QrCode.Ecc.QUARTILE,H:Wa.QrCode.Ecc.HIGH},ig=128,ag="L",lg="#FFFFFF",rg="#000000",cg=!1,ug=1,h5=4,_5=0,m5=.1;function dg(o,n=0){const i=[];return o.forEach(function(l,c){let u=null;l.forEach(function(_,g){if(!_&&u!==null){i.push(`M${u+n} ${c+n}h${g-u}v1H${u+n}z`),u=null;return}if(g===l.length-1){if(!_)return;u===null?i.push(`M${g+n},${c+n} h1v1H${g+n}z`):i.push(`M${u+n},${c+n} h${g+1-u}v1H${u+n}z`);return}_&&u===null&&(u=g)})}),i.join("")}function fg(o,n){return o.slice().map((i,l)=>l<n.y||l>=n.y+n.h?i:i.map((c,u)=>u<n.x||u>=n.x+n.w?c:!1))}function p5(o,n,i,l){if(l==null)return null;const c=o.length+i*2,u=Math.floor(n*m5),_=c/n,g=(l.width||u)*_,h=(l.height||u)*_,m=l.x==null?o.length/2-g/2:l.x*_,p=l.y==null?o.length/2-h/2:l.y*_,y=l.opacity==null?1:l.opacity;let v=null;if(l.excavate){let k=Math.floor(m),M=Math.floor(p),L=Math.ceil(g+m-k),B=Math.ceil(h+p-M);v={x:k,y:M,w:L,h:B}}const C=l.crossOrigin;return{x:m,y:p,h,w:g,excavation:v,opacity:y,crossOrigin:C}}function g5(o,n){return n!=null?Math.max(Math.floor(n),0):o?h5:_5}function hg({value:o,level:n,minVersion:i,includeMargin:l,marginSize:c,imageSettings:u,size:_,boostLevel:g}){let h=Rn.useMemo(()=>{const k=(Array.isArray(o)?o:[o]).reduce((M,L)=>(M.push(...Wa.QrSegment.makeSegments(L)),M),[]);return Wa.QrCode.encodeSegments(k,f5[n],i,void 0,void 0,g)},[o,n,i,g]);const{cells:m,margin:p,numCells:y,calculatedImageSettings:v}=Rn.useMemo(()=>{let C=h.getModules();const k=g5(l,c),M=C.length+k*2,L=p5(C,_,k,u);return{cells:C,margin:k,numCells:M,calculatedImageSettings:L}},[h,_,u,l,c]);return{qrcode:h,margin:p,cells:m,numCells:y,calculatedImageSettings:v}}var y5=(function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0})(),x5=Rn.forwardRef(function(n,i){const l=n,{value:c,size:u=ig,level:_=ag,bgColor:g=lg,fgColor:h=rg,includeMargin:m=cg,minVersion:p=ug,boostLevel:y,marginSize:v,imageSettings:C}=l,M=Ff(l,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:L}=M,B=Ff(M,["style"]),J=C==null?void 0:C.src,G=Rn.useRef(null),z=Rn.useRef(null),de=Rn.useCallback(_e=>{G.current=_e,typeof i=="function"?i(_e):i&&(i.current=_e)},[i]),[he,F]=Rn.useState(!1),{margin:le,cells:ge,numCells:xe,calculatedImageSettings:ue}=hg({value:c,level:_,minVersion:p,boostLevel:y,includeMargin:m,marginSize:v,imageSettings:C,size:u});Rn.useEffect(()=>{if(G.current!=null){const _e=G.current,Se=_e.getContext("2d");if(!Se)return;let N=ge;const ce=z.current,W=ue!=null&&ce!==null&&ce.complete&&ce.naturalHeight!==0&&ce.naturalWidth!==0;W&&ue.excavation!=null&&(N=fg(ge,ue.excavation));const be=window.devicePixelRatio||1;_e.height=_e.width=u*be;const De=u/xe*be;Se.scale(De,De),Se.fillStyle=g,Se.fillRect(0,0,xe,xe),Se.fillStyle=h,y5?Se.fill(new Path2D(dg(N,le))):ge.forEach(function(A,Z){A.forEach(function(pe,je){pe&&Se.fillRect(je+le,Z+le,1,1)})}),ue&&(Se.globalAlpha=ue.opacity),W&&Se.drawImage(ce,ue.x+le,ue.y+le,ue.w,ue.h)}}),Rn.useEffect(()=>{F(!1)},[J]);const K=Gf({height:u,width:u},L);let Xe=null;return J!=null&&(Xe=Rn.createElement("img",{src:J,key:J,style:{display:"none"},onLoad:()=>{F(!0)},ref:z,crossOrigin:ue==null?void 0:ue.crossOrigin})),Rn.createElement(Rn.Fragment,null,Rn.createElement("canvas",Gf({style:K,height:u,width:u,ref:de,role:"img"},B)),Xe)});x5.displayName="QRCodeCanvas";var _g=Rn.forwardRef(function(n,i){const l=n,{value:c,size:u=ig,level:_=ag,bgColor:g=lg,fgColor:h=rg,includeMargin:m=cg,minVersion:p=ug,boostLevel:y,title:v,marginSize:C,imageSettings:k}=l,M=Ff(l,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:L,cells:B,numCells:J,calculatedImageSettings:G}=hg({value:c,level:_,minVersion:p,boostLevel:y,includeMargin:m,marginSize:C,imageSettings:k,size:u});let z=B,de=null;k!=null&&G!=null&&(G.excavation!=null&&(z=fg(B,G.excavation)),de=Rn.createElement("image",{href:k.src,height:G.h,width:G.w,x:G.x+L,y:G.y+L,preserveAspectRatio:"none",opacity:G.opacity,crossOrigin:G.crossOrigin}));const he=dg(z,L);return Rn.createElement("svg",Gf({height:u,width:u,viewBox:`0 0 ${J} ${J}`,ref:i,role:"img"},M),!!v&&Rn.createElement("title",null,v),Rn.createElement("path",{fill:g,d:`M0,0 h${J}v${J}H0z`,shapeRendering:"crispEdges"}),Rn.createElement("path",{fill:h,d:he,shapeRendering:"crispEdges"}),de)});_g.displayName="QRCodeSVG";const b5=({isOpen:o,onClose:n,roomId:i,isConnected:l})=>{const[c,u]=b.useState(""),[_,g]=b.useState(!1);if(b.useEffect(()=>{if(typeof window<"u"){const m=`${window.location.origin}/controller?room=${i}`;u(m)}},[i]),!o)return null;const h=()=>{navigator.clipboard.writeText(c),g(!0),setTimeout(()=>g(!1),2e3)};return r.jsx("div",{className:"fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200 pointer-events-auto",children:r.jsxs("div",{className:"bg-[#0b0f0c] border border-emerald-500/40 rounded-3xl max-w-md w-full p-6 shadow-2xl flex flex-col items-center gap-5 relative text-slate-100 font-sans",children:[r.jsx("button",{onClick:n,className:"absolute top-4 right-4 p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-100 transition cursor-pointer",children:r.jsx(u5,{className:"w-5 h-5"})}),r.jsxs("div",{className:"flex flex-col items-center gap-1.5 text-center mt-2",children:[r.jsx("div",{className:"w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400",children:r.jsx(ng,{className:"w-6 h-6"})}),r.jsx("h2",{className:"text-xl font-extrabold tracking-tight",children:"Hubungkan HP sebagai Stik Gamepad"}),r.jsx("p",{className:"text-xs text-slate-400 max-w-xs",children:"Pindai QR Code di bawah dengan kamera HP Anda untuk menjadikan HP sebagai stik stik controller virtual!"})]}),r.jsx("div",{className:"w-full flex items-center justify-center",children:l?r.jsxs("div",{className:"bg-emerald-500/15 border border-emerald-500/60 rounded-xl px-4 py-2 flex items-center gap-2 text-emerald-400 text-xs font-bold animate-pulse",children:[r.jsx(Ub,{className:"w-4 h-4"}),r.jsx("span",{children:"🟢 HP Terhubung! (Controller Ready)"})]}):r.jsxs("div",{className:"bg-amber-500/10 border border-amber-500/40 rounded-xl px-4 py-2 flex items-center gap-2 text-amber-400 text-xs font-semibold",children:[r.jsx("span",{className:"w-2 h-2 rounded-full bg-amber-400 animate-ping"}),r.jsx("span",{children:"Menunggu Koneksi dari HP..."})]})}),r.jsx("div",{className:"bg-white p-4 rounded-2xl border-4 border-slate-800 shadow-inner flex items-center justify-center",children:c?r.jsx(_g,{value:c,size:180,level:"M"}):r.jsx("div",{className:"w-[180px] h-[180px] bg-slate-100 flex items-center justify-center text-slate-400 text-xs",children:"Generating QR..."})}),r.jsxs("div",{className:"w-full flex flex-col items-center gap-2",children:[r.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl px-5 py-2.5 flex items-center justify-between w-full font-mono text-sm",children:[r.jsx("span",{className:"text-slate-400 text-xs font-bold",children:"ROOM CODE:"}),r.jsx("span",{className:"text-cyan-400 font-extrabold text-lg tracking-widest",children:i})]}),r.jsxs("button",{onClick:h,className:"w-full py-2.5 px-4 bg-slate-900 border border-slate-700/80 hover:border-emerald-500/50 rounded-xl text-xs font-bold text-slate-300 hover:text-emerald-400 transition cursor-pointer flex items-center justify-center gap-2",children:[r.jsx(Yb,{className:"w-4 h-4"}),r.jsx("span",{children:_?"Link Tersalin!":"Salin URL Controller"})]})]})]})})},v5=({matchState:o,showHUD:n,onToggleHUD:i,onResetMatch:l,peerRoomId:c="8492",isPeerConnected:u=!1})=>{const[_,g]=b.useState(!1),[h,m]=b.useState(!1);b.useEffect(()=>{const v=()=>{g(!!document.fullscreenElement)};return document.addEventListener("fullscreenchange",v),()=>document.removeEventListener("fullscreenchange",v)},[]);const p=()=>{document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen().catch(v=>{console.warn("Exit fullscreen failed:",v)}):document.documentElement.requestFullscreen().catch(v=>{console.warn("Fullscreen request failed:",v)})},y=v=>{const C=Math.floor(v/60),k=Math.floor(v%60);return`${C}:${k.toString().padStart(2,"0")}`};return r.jsxs(r.Fragment,{children:[r.jsx(b5,{isOpen:h,onClose:()=>m(!1),roomId:c,isConnected:u}),r.jsxs("div",{className:"fixed top-4 left-0 right-0 z-40 pointer-events-none flex flex-col items-center gap-3 px-4",children:[r.jsxs("div",{className:"flex items-center justify-center gap-3 pointer-events-auto",children:[r.jsxs("button",{onClick:()=>m(!0),className:`glass-card h-11 px-3.5 rounded-2xl border transition cursor-pointer shadow-2xl flex items-center gap-2 font-mono text-xs font-bold ${u?"border-emerald-500/80 bg-emerald-950/80 text-emerald-300":"border-cyan-500/40 bg-[#0b0f0c]/90 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950"}`,title:"Hubungkan HP sebagai Gamepad",children:[r.jsx(ng,{className:"w-5 h-5"}),r.jsx("span",{className:"hidden sm:inline",children:u?"HP Connected":"Connect HP"})]}),r.jsx("button",{onClick:p,className:"glass-card w-11 h-11 rounded-2xl border border-emerald-500/40 bg-[#0b0f0c]/90 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 transition cursor-pointer shadow-2xl flex items-center justify-center",title:_?"Exit Fullscreen":"Layar Penuh (Fullscreen)",children:_?r.jsx(Jb,{className:"w-5 h-5"}):r.jsx(Kb,{className:"w-5 h-5"})}),r.jsx("button",{onClick:i,className:"glass-card w-11 h-11 rounded-2xl border border-slate-700/80 bg-[#0b0f0c]/90 text-slate-200 hover:text-cyan-400 hover:border-cyan-500/50 transition cursor-pointer shadow-2xl flex items-center justify-center",title:n?"Sembunyikan HUD Debug":"Tampilkan HUD Debug",children:n?r.jsx(Gb,{className:"w-5 h-5 text-cyan-400"}):r.jsx(Wb,{className:"w-5 h-5 text-slate-400"})}),r.jsxs("div",{className:"bg-[#0b0f0c] border border-slate-800/90 px-6 py-2.5 rounded-[22px] shadow-2xl flex flex-col items-center gap-1 font-sans min-w-[130px] border-emerald-500/20 backdrop-blur-md",children:[r.jsxs("div",{className:"flex items-center gap-3 text-2xl font-black tracking-tight leading-none",children:[r.jsx("span",{className:"text-[#ef4444]",children:o.scoreHome}),r.jsx("span",{className:"text-slate-100 font-bold text-sm",children:"-"}),r.jsx("span",{className:"text-[#60a5fa]",children:o.scoreAway})]}),r.jsxs("div",{className:"flex items-center gap-2 mt-0.5",children:[r.jsx("div",{className:"flex items-center gap-1",children:[1,2,3].map(v=>r.jsx("span",{className:`w-2.5 h-2.5 rounded-full transition-all duration-300 ${o.scoreHome>=v?"bg-[#ef4444] shadow-sm shadow-red-500/80 scale-105":"bg-[#374151]"}`},`home-dot-${v}`))}),r.jsx("div",{className:"flex items-center gap-1",children:[1,2,3].map(v=>r.jsx("span",{className:`w-2.5 h-2.5 rounded-full transition-all duration-300 ${o.scoreAway>=v?"bg-[#60a5fa] shadow-sm shadow-blue-500/80 scale-105":"bg-[#374151]"}`},`away-dot-${v}`))})]}),r.jsx("div",{className:"text-slate-100 text-xs font-bold tracking-wider font-mono mt-0.5",children:y(o.timerSeconds)})]}),r.jsx("button",{onClick:l,className:"w-11 h-11 bg-gradient-to-r from-emerald-500 to-teal-500 hover:brightness-110 text-slate-950 font-bold rounded-2xl shadow-2xl transition cursor-pointer flex items-center justify-center",title:"Reset Match",children:r.jsx(i5,{className:"w-5 h-5"})})]}),n&&r.jsxs("div",{className:"max-w-xl w-full flex flex-col gap-2 mt-1 pointer-events-auto animate-in fade-in slide-in-from-top-2 duration-150",children:[r.jsxs("div",{className:"bg-slate-900/95 border-2 border-cyan-400/80 rounded-xl px-5 py-2.5 font-mono text-xs text-cyan-300 flex items-center justify-between shadow-2xl backdrop-blur-xl",children:[r.jsxs("span",{className:"font-extrabold tracking-wide",children:["⚡ [LIVE INPUT]:"," ",r.jsx("span",{className:"text-emerald-300 font-bold bg-slate-950 border border-emerald-500/50 px-2.5 py-0.5 rounded-md ml-1 shadow-inner",children:o.debugInputText||"Menunggu Tombol Controller..."})]}),r.jsx("span",{className:"text-slate-400 text-[11px] font-semibold",children:u?"📱 HP Remote Connected!":"P1 Ctrl 0 | P2 Teammate"})]}),r.jsxs("div",{className:"bg-slate-900/90 border border-slate-700/80 rounded-xl px-4 py-1.5 font-mono text-[11px] text-slate-300 flex items-center justify-between shadow-xl backdrop-blur-md",children:[r.jsxs("span",{className:"font-semibold text-slate-200",children:["[LOG]: ",o.logMessage]}),r.jsx("span",{className:"text-amber-400 font-bold",children:"RB/R1/LB = ReqPass | Start = HUD"})]})]}),o.state==="GAME_OVER"&&r.jsx("div",{className:"fixed inset-0 bg-slate-950/90 backdrop-blur-lg z-50 flex items-center justify-center p-4 pointer-events-auto",children:r.jsxs("div",{className:"glass-card max-w-md w-full p-8 rounded-2xl border-2 border-emerald-500/50 text-center flex flex-col items-center gap-5 shadow-2xl animate-in fade-in zoom-in duration-200",children:[r.jsx("div",{className:"w-16 h-16 bg-emerald-500/20 border border-emerald-500/50 rounded-full flex items-center justify-center text-3xl shadow-lg",children:"⚽"}),r.jsx("h2",{className:"text-2xl font-extrabold text-slate-100 tracking-tight",children:"GAME OVER"}),r.jsx("p",{className:"text-lg font-bold text-emerald-400 font-mono",children:o.winnerTitle}),r.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-4 w-full text-center font-mono text-sm",children:[r.jsx("div",{className:"text-slate-500 text-xs font-bold",children:"TOTAL GOALS SCORED"}),r.jsx("div",{className:"text-cyan-400 font-extrabold text-3xl mt-1",children:o.scoreHome})]}),r.jsx("button",{onClick:l,className:"w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-extrabold rounded-xl text-sm shadow-xl hover:brightness-110 transition cursor-pointer",children:"🎮 Reset Arena"})]})})]})]})};class w5{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(n){this.flush(),this._parts.push(n)}append(n){this._pieces.push(n)}flush(){if(this._pieces.length>0){const n=new Uint8Array(this._pieces);this._parts.push(n),this._pieces=[]}}toArrayBuffer(){const n=[];for(const i of this._parts)n.push(i);return S5(n).buffer}}function S5(o){let n=0;for(const c of o)n+=c.byteLength;const i=new Uint8Array(n);let l=0;for(const c of o){const u=new Uint8Array(c.buffer,c.byteOffset,c.byteLength);i.set(u,l),l+=c.byteLength}return i}function mg(o){return new k5(o).unpack()}function pg(o){const n=new C5,i=n.pack(o);return i instanceof Promise?i.then(()=>n.getBuffer()):n.getBuffer()}class k5{constructor(n){this.index=0,this.dataBuffer=n,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){const n=this.unpack_uint8();if(n<128)return n;if((n^224)<32)return(n^224)-32;let i;if((i=n^160)<=15)return this.unpack_raw(i);if((i=n^176)<=15)return this.unpack_string(i);if((i=n^144)<=15)return this.unpack_array(i);if((i=n^128)<=15)return this.unpack_map(i);switch(n){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return i=this.unpack_uint16(),this.unpack_string(i);case 217:return i=this.unpack_uint32(),this.unpack_string(i);case 218:return i=this.unpack_uint16(),this.unpack_raw(i);case 219:return i=this.unpack_uint32(),this.unpack_raw(i);case 220:return i=this.unpack_uint16(),this.unpack_array(i);case 221:return i=this.unpack_uint32(),this.unpack_array(i);case 222:return i=this.unpack_uint16(),this.unpack_map(i);case 223:return i=this.unpack_uint32(),this.unpack_map(i)}}unpack_uint8(){const n=this.dataView[this.index]&255;return this.index++,n}unpack_uint16(){const n=this.read(2),i=(n[0]&255)*256+(n[1]&255);return this.index+=2,i}unpack_uint32(){const n=this.read(4),i=((n[0]*256+n[1])*256+n[2])*256+n[3];return this.index+=4,i}unpack_uint64(){const n=this.read(8),i=((((((n[0]*256+n[1])*256+n[2])*256+n[3])*256+n[4])*256+n[5])*256+n[6])*256+n[7];return this.index+=8,i}unpack_int8(){const n=this.unpack_uint8();return n<128?n:n-256}unpack_int16(){const n=this.unpack_uint16();return n<32768?n:n-65536}unpack_int32(){const n=this.unpack_uint32();return n<2**31?n:n-2**32}unpack_int64(){const n=this.unpack_uint64();return n<2**63?n:n-2**64}unpack_raw(n){if(this.length<this.index+n)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${n} ${this.length}`);const i=this.dataBuffer.slice(this.index,this.index+n);return this.index+=n,i}unpack_string(n){const i=this.read(n);let l=0,c="",u,_;for(;l<n;)u=i[l],u<160?(_=u,l++):(u^192)<32?(_=(u&31)<<6|i[l+1]&63,l+=2):(u^224)<16?(_=(u&15)<<12|(i[l+1]&63)<<6|i[l+2]&63,l+=3):(_=(u&7)<<18|(i[l+1]&63)<<12|(i[l+2]&63)<<6|i[l+3]&63,l+=4),c+=String.fromCodePoint(_);return this.index+=n,c}unpack_array(n){const i=new Array(n);for(let l=0;l<n;l++)i[l]=this.unpack();return i}unpack_map(n){const i={};for(let l=0;l<n;l++){const c=this.unpack();i[c]=this.unpack()}return i}unpack_float(){const n=this.unpack_uint32(),i=n>>31,l=(n>>23&255)-127,c=n&8388607|8388608;return(i===0?1:-1)*c*2**(l-23)}unpack_double(){const n=this.unpack_uint32(),i=this.unpack_uint32(),l=n>>31,c=(n>>20&2047)-1023,_=(n&1048575|1048576)*2**(c-20)+i*2**(c-52);return(l===0?1:-1)*_}read(n){const i=this.index;if(i+n<=this.length)return this.dataView.subarray(i,i+n);throw new Error("BinaryPackFailure: read index out of range")}}class C5{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(n){if(typeof n=="string")this.pack_string(n);else if(typeof n=="number")Math.floor(n)===n?this.pack_integer(n):this.pack_double(n);else if(typeof n=="boolean")n===!0?this._bufferBuilder.append(195):n===!1&&this._bufferBuilder.append(194);else if(n===void 0)this._bufferBuilder.append(192);else if(typeof n=="object")if(n===null)this._bufferBuilder.append(192);else{const i=n.constructor;if(n instanceof Array){const l=this.pack_array(n);if(l instanceof Promise)return l.then(()=>this._bufferBuilder.flush())}else if(n instanceof ArrayBuffer)this.pack_bin(new Uint8Array(n));else if("BYTES_PER_ELEMENT"in n){const l=n;this.pack_bin(new Uint8Array(l.buffer,l.byteOffset,l.byteLength))}else if(n instanceof Date)this.pack_string(n.toString());else{if(n instanceof Blob)return n.arrayBuffer().then(l=>{this.pack_bin(new Uint8Array(l)),this._bufferBuilder.flush()});if(i==Object||i.toString().startsWith("class")){const l=this.pack_object(n);if(l instanceof Promise)return l.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${i.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof n}" not yet supported`);this._bufferBuilder.flush()}pack_bin(n){const i=n.length;if(i<=15)this.pack_uint8(160+i);else if(i<=65535)this._bufferBuilder.append(218),this.pack_uint16(i);else if(i<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(i);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(n)}pack_string(n){const i=this._textEncoder.encode(n),l=i.length;if(l<=15)this.pack_uint8(176+l);else if(l<=65535)this._bufferBuilder.append(216),this.pack_uint16(l);else if(l<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(l);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(i)}pack_array(n){const i=n.length;if(i<=15)this.pack_uint8(144+i);else if(i<=65535)this._bufferBuilder.append(220),this.pack_uint16(i);else if(i<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(i);else throw new Error("Invalid length");const l=c=>{if(c<i){const u=this.pack(n[c]);return u instanceof Promise?u.then(()=>l(c+1)):l(c+1)}};return l(0)}pack_integer(n){if(n>=-32&&n<=127)this._bufferBuilder.append(n&255);else if(n>=0&&n<=255)this._bufferBuilder.append(204),this.pack_uint8(n);else if(n>=-128&&n<=127)this._bufferBuilder.append(208),this.pack_int8(n);else if(n>=0&&n<=65535)this._bufferBuilder.append(205),this.pack_uint16(n);else if(n>=-32768&&n<=32767)this._bufferBuilder.append(209),this.pack_int16(n);else if(n>=0&&n<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(n);else if(n>=-2147483648&&n<=2147483647)this._bufferBuilder.append(210),this.pack_int32(n);else if(n>=-9223372036854776e3&&n<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(n);else if(n>=0&&n<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(n);else throw new Error("Invalid integer")}pack_double(n){let i=0;n<0&&(i=1,n=-n);const l=Math.floor(Math.log(n)/Math.LN2),c=n/2**l-1,u=Math.floor(c*2**52),_=2**32,g=i<<31|l+1023<<20|u/_&1048575,h=u%_;this._bufferBuilder.append(203),this.pack_int32(g),this.pack_int32(h)}pack_object(n){const i=Object.keys(n),l=i.length;if(l<=15)this.pack_uint8(128+l);else if(l<=65535)this._bufferBuilder.append(222),this.pack_uint16(l);else if(l<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(l);else throw new Error("Invalid length");const c=u=>{if(u<i.length){const _=i[u];if(n.hasOwnProperty(_)){this.pack(_);const g=this.pack(n[_]);if(g instanceof Promise)return g.then(()=>c(u+1))}return c(u+1)}};return c(0)}pack_uint8(n){this._bufferBuilder.append(n)}pack_uint16(n){this._bufferBuilder.append(n>>8),this._bufferBuilder.append(n&255)}pack_uint32(n){const i=n&4294967295;this._bufferBuilder.append((i&4278190080)>>>24),this._bufferBuilder.append((i&16711680)>>>16),this._bufferBuilder.append((i&65280)>>>8),this._bufferBuilder.append(i&255)}pack_uint64(n){const i=n/4294967296,l=n%2**32;this._bufferBuilder.append((i&4278190080)>>>24),this._bufferBuilder.append((i&16711680)>>>16),this._bufferBuilder.append((i&65280)>>>8),this._bufferBuilder.append(i&255),this._bufferBuilder.append((l&4278190080)>>>24),this._bufferBuilder.append((l&16711680)>>>16),this._bufferBuilder.append((l&65280)>>>8),this._bufferBuilder.append(l&255)}pack_int8(n){this._bufferBuilder.append(n&255)}pack_int16(n){this._bufferBuilder.append((n&65280)>>8),this._bufferBuilder.append(n&255)}pack_int32(n){this._bufferBuilder.append(n>>>24&255),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}pack_int64(n){const i=Math.floor(n/4294967296),l=n%2**32;this._bufferBuilder.append((i&4278190080)>>>24),this._bufferBuilder.append((i&16711680)>>>16),this._bufferBuilder.append((i&65280)>>>8),this._bufferBuilder.append(i&255),this._bufferBuilder.append((l&4278190080)>>>24),this._bufferBuilder.append((l&16711680)>>>16),this._bufferBuilder.append((l&65280)>>>8),this._bufferBuilder.append(l&255)}constructor(){this._bufferBuilder=new w5,this._textEncoder=new TextEncoder}}let gg=!0,yg=!0;function ar(o,n,i){const l=o.match(n);return l&&l.length>=i&&parseFloat(l[i],10)}function ta(o,n,i){if(!o.RTCPeerConnection)return;if(!Object.getOwnPropertyDescriptor(EventTarget.prototype,"addEventListener").writable){vh("Unable to polyfill events");return}const c=o.RTCPeerConnection.prototype,u=c.addEventListener;c.addEventListener=function(g,h){if(g!==n)return u.apply(this,arguments);const m=p=>{const y=i(p);y&&(h.handleEvent?h.handleEvent(y):h(y))};return this._eventMap=this._eventMap||{},this._eventMap[n]||(this._eventMap[n]=new Map),this._eventMap[n].set(h,m),u.apply(this,[g,m])};const _=c.removeEventListener;c.removeEventListener=function(g,h){if(g!==n||!this._eventMap||!this._eventMap[n])return _.apply(this,arguments);if(!this._eventMap[n].has(h))return _.apply(this,arguments);const m=this._eventMap[n].get(h);return this._eventMap[n].delete(h),this._eventMap[n].size===0&&delete this._eventMap[n],Object.keys(this._eventMap).length===0&&delete this._eventMap,_.apply(this,[g,m])},Object.defineProperty(c,"on"+n,{get(){return this["_on"+n]},set(g){this["_on"+n]&&(this.removeEventListener(n,this["_on"+n]),delete this["_on"+n]),g&&this.addEventListener(n,this["_on"+n]=g)},enumerable:!0,configurable:!0})}function j5(o){return typeof o!="boolean"?new Error("Argument type: "+typeof o+". Please use a boolean."):(gg=o,o?"adapter.js logging disabled":"adapter.js logging enabled")}function E5(o){return typeof o!="boolean"?new Error("Argument type: "+typeof o+". Please use a boolean."):(yg=!o,"adapter.js deprecation warnings "+(o?"disabled":"enabled"))}function vh(){if(typeof window=="object"){if(gg)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function wh(o,n){yg&&console.warn(o+" is deprecated, please use "+n+" instead.")}function M5(o){const n={browser:null,version:null};if(typeof o>"u"||!o.navigator||!o.navigator.userAgent)return n.browser="Not a browser.",n;const{navigator:i}=o;if(i.userAgentData&&i.userAgentData.brands){const l=i.userAgentData.brands.find(c=>c.brand==="Chromium");if(l){const c=parseInt(l.version,10);if(c>=90)return{browser:"chrome",version:c}}}if(i.mozGetUserMedia)n.browser="firefox",n.version=parseInt(ar(i.userAgent,/Firefox\/(\d+)\./,1));else if(i.webkitGetUserMedia||o.isSecureContext===!1&&o.webkitRTCPeerConnection)n.browser="chrome",n.version=parseInt(ar(i.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(o.RTCPeerConnection&&i.userAgent.match(/AppleWebKit\/(\d+)\./))n.browser="safari",n.version=parseInt(ar(i.userAgent,/AppleWebKit\/(\d+)\./,1)),n.supportsUnifiedPlan=o.RTCRtpTransceiver&&"currentDirection"in o.RTCRtpTransceiver.prototype,n._safariVersion=ar(i.userAgent,/Version\/(\d+(\.?\d+))/,1);else return n.browser="Not a supported browser.",n;return n}function Zp(o){return Object.prototype.toString.call(o)==="[object Object]"}function xg(o){return Zp(o)?Object.keys(o).reduce(function(n,i){const l=Zp(o[i]),c=l?xg(o[i]):o[i],u=l&&!Object.keys(c).length;return c===void 0||u?n:Object.assign(n,{[i]:c})},{}):o}function Wf(o,n,i){!n||i.has(n.id)||(i.set(n.id,n),Object.keys(n).forEach(l=>{l.endsWith("Id")?Wf(o,o.get(n[l]),i):l.endsWith("Ids")&&n[l].forEach(c=>{Wf(o,o.get(c),i)})}))}function Jp(o,n,i){const l=i?"outbound-rtp":"inbound-rtp",c=new Map;if(n===null)return c;const u=[];return o.forEach(_=>{_.type==="track"&&_.trackIdentifier===n.id&&u.push(_)}),u.forEach(_=>{o.forEach(g=>{g.type===l&&g.trackId===_.id&&Wf(o,g,c)})}),c}const e0=vh;function bg(o,n){if(n.version>=64)return;const i=o&&o.navigator;if(!i.mediaDevices)return;const l=function(g){if(typeof g!="object"||g.mandatory||g.optional)return g;const h={};return Object.keys(g).forEach(m=>{if(m==="require"||m==="advanced"||m==="mediaSource")return;const p=typeof g[m]=="object"?g[m]:{ideal:g[m]};p.exact!==void 0&&typeof p.exact=="number"&&(p.min=p.max=p.exact);const y=function(v,C){return v?v+C.charAt(0).toUpperCase()+C.slice(1):C==="deviceId"?"sourceId":C};if(p.ideal!==void 0){h.optional=h.optional||[];let v={};typeof p.ideal=="number"?(v[y("min",m)]=p.ideal,h.optional.push(v),v={},v[y("max",m)]=p.ideal,h.optional.push(v)):(v[y("",m)]=p.ideal,h.optional.push(v))}p.exact!==void 0&&typeof p.exact!="number"?(h.mandatory=h.mandatory||{},h.mandatory[y("",m)]=p.exact):["min","max"].forEach(v=>{p[v]!==void 0&&(h.mandatory=h.mandatory||{},h.mandatory[y(v,m)]=p[v])})}),g.advanced&&(h.optional=(h.optional||[]).concat(g.advanced)),h},c=function(g,h){if(n.version>=61)return h(g);if(g=JSON.parse(JSON.stringify(g)),g&&typeof g.audio=="object"){const m=function(p,y,v){y in p&&!(v in p)&&(p[v]=p[y],delete p[y])};g=JSON.parse(JSON.stringify(g)),m(g.audio,"autoGainControl","googAutoGainControl"),m(g.audio,"noiseSuppression","googNoiseSuppression"),g.audio=l(g.audio)}if(g&&typeof g.video=="object"){let m=g.video.facingMode;m=m&&(typeof m=="object"?m:{ideal:m});const p=n.version<66;if(m&&(m.exact==="user"||m.exact==="environment"||m.ideal==="user"||m.ideal==="environment")&&!(i.mediaDevices.getSupportedConstraints&&i.mediaDevices.getSupportedConstraints().facingMode&&!p)){delete g.video.facingMode;let y;if(m.exact==="environment"||m.ideal==="environment"?y=["back","rear"]:(m.exact==="user"||m.ideal==="user")&&(y=["front"]),y)return i.mediaDevices.enumerateDevices().then(v=>{v=v.filter(k=>k.kind==="videoinput");let C=v.find(k=>y.some(M=>k.label.toLowerCase().includes(M)));return!C&&v.length&&y.includes("back")&&(C=v[v.length-1]),C&&(g.video.deviceId=m.exact?{exact:C.deviceId}:{ideal:C.deviceId}),g.video=l(g.video),e0("chrome: "+JSON.stringify(g)),h(g)})}g.video=l(g.video)}return e0("chrome: "+JSON.stringify(g)),h(g)},u=function(g){return n.version>=64?g:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[g.name]||g.name,message:g.message,constraint:g.constraint||g.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},_=function(g,h,m){c(g,p=>{i.webkitGetUserMedia(p,h,y=>{m&&m(u(y))})})};if(i.getUserMedia=_.bind(i),i.mediaDevices.getUserMedia){const g=i.mediaDevices.getUserMedia.bind(i.mediaDevices);i.mediaDevices.getUserMedia=function(h){return c(h,m=>g(m).then(p=>{if(m.audio&&!p.getAudioTracks().length||m.video&&!p.getVideoTracks().length)throw p.getTracks().forEach(y=>{y.stop()}),new DOMException("","NotFoundError");return p},p=>Promise.reject(u(p))))}}}function vg(o){o.MediaStream=o.MediaStream||o.webkitMediaStream}function wg(o,n){if(!(n.version>102))if(typeof o=="object"&&o.RTCPeerConnection&&!("ontrack"in o.RTCPeerConnection.prototype)){Object.defineProperty(o.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(l){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=l)},enumerable:!0,configurable:!0});const i=o.RTCPeerConnection.prototype.setRemoteDescription;o.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=c=>{c.stream.addEventListener("addtrack",u=>{let _;o.RTCPeerConnection.prototype.getReceivers?_=this.getReceivers().find(h=>h.track&&h.track.id===u.track.id):_={track:u.track};const g=new Event("track");g.track=u.track,g.receiver=_,g.transceiver={receiver:_},g.streams=[c.stream],this.dispatchEvent(g)}),c.stream.getTracks().forEach(u=>{let _;o.RTCPeerConnection.prototype.getReceivers?_=this.getReceivers().find(h=>h.track&&h.track.id===u.id):_={track:u};const g=new Event("track");g.track=u,g.receiver=_,g.transceiver={receiver:_},g.streams=[c.stream],this.dispatchEvent(g)})},this.addEventListener("addstream",this._ontrackpoly)),i.apply(this,arguments)}}else ta(o,"track",i=>(i.transceiver||Object.defineProperty(i,"transceiver",{value:{receiver:i.receiver}}),i))}function Sg(o){if(typeof o=="object"&&o.RTCPeerConnection&&!("getSenders"in o.RTCPeerConnection.prototype)&&"createDTMFSender"in o.RTCPeerConnection.prototype){const n=function(c,u){return{track:u,get dtmf(){return this._dtmf===void 0&&(u.kind==="audio"?this._dtmf=c.createDTMFSender(u):this._dtmf=null),this._dtmf},_pc:c}};if(!o.RTCPeerConnection.prototype.getSenders){o.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const c=o.RTCPeerConnection.prototype.addTrack;o.RTCPeerConnection.prototype.addTrack=function(g,h){let m=c.apply(this,arguments);return m||(m=n(this,g),this._senders.push(m)),m};const u=o.RTCPeerConnection.prototype.removeTrack;o.RTCPeerConnection.prototype.removeTrack=function(g){u.apply(this,arguments);const h=this._senders.indexOf(g);h!==-1&&this._senders.splice(h,1)}}const i=o.RTCPeerConnection.prototype.addStream;o.RTCPeerConnection.prototype.addStream=function(u){this._senders=this._senders||[],i.apply(this,[u]),u.getTracks().forEach(_=>{this._senders.push(n(this,_))})};const l=o.RTCPeerConnection.prototype.removeStream;o.RTCPeerConnection.prototype.removeStream=function(u){this._senders=this._senders||[],l.apply(this,[u]),u.getTracks().forEach(_=>{const g=this._senders.find(h=>h.track===_);g&&this._senders.splice(this._senders.indexOf(g),1)})}}else if(typeof o=="object"&&o.RTCPeerConnection&&"getSenders"in o.RTCPeerConnection.prototype&&"createDTMFSender"in o.RTCPeerConnection.prototype&&o.RTCRtpSender&&!("dtmf"in o.RTCRtpSender.prototype)){const n=o.RTCPeerConnection.prototype.getSenders;o.RTCPeerConnection.prototype.getSenders=function(){const l=n.apply(this,[]);return l.forEach(c=>c._pc=this),l},Object.defineProperty(o.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function kg(o,n){if(n.version>=67||!(typeof o=="object"&&o.RTCPeerConnection&&o.RTCRtpSender&&o.RTCRtpReceiver))return;if(!("getStats"in o.RTCRtpSender.prototype)){const l=o.RTCPeerConnection.prototype.getSenders;l&&(o.RTCPeerConnection.prototype.getSenders=function(){const _=l.apply(this,[]);return _.forEach(g=>g._pc=this),_});const c=o.RTCPeerConnection.prototype.addTrack;c&&(o.RTCPeerConnection.prototype.addTrack=function(){const _=c.apply(this,arguments);return _._pc=this,_}),o.RTCRtpSender.prototype.getStats=function(){const _=this;return this._pc.getStats().then(g=>Jp(g,_.track,!0))}}if(!("getStats"in o.RTCRtpReceiver.prototype)){const l=o.RTCPeerConnection.prototype.getReceivers;l&&(o.RTCPeerConnection.prototype.getReceivers=function(){const u=l.apply(this,[]);return u.forEach(_=>_._pc=this),u}),ta(o,"track",c=>(c.receiver._pc=c.srcElement,c)),o.RTCRtpReceiver.prototype.getStats=function(){const u=this;return this._pc.getStats().then(_=>Jp(_,u.track,!1))}}if(!("getStats"in o.RTCRtpSender.prototype&&"getStats"in o.RTCRtpReceiver.prototype))return;const i=o.RTCPeerConnection.prototype.getStats;o.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof o.MediaStreamTrack){const c=arguments[0];let u,_,g;return this.getSenders().forEach(h=>{h.track===c&&(u?g=!0:u=h)}),this.getReceivers().forEach(h=>(h.track===c&&(_?g=!0:_=h),h.track===c)),g||u&&_?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):u?u.getStats():_?_.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return i.apply(this,arguments)}}function Cg(o){o.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(_=>this._shimmedLocalStreams[_][0])};const n=o.RTCPeerConnection.prototype.addTrack;o.RTCPeerConnection.prototype.addTrack=function(_,g){if(!g)return n.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const h=n.apply(this,arguments);return this._shimmedLocalStreams[g.id]?this._shimmedLocalStreams[g.id].indexOf(h)===-1&&this._shimmedLocalStreams[g.id].push(h):this._shimmedLocalStreams[g.id]=[g,h],h};const i=o.RTCPeerConnection.prototype.addStream;o.RTCPeerConnection.prototype.addStream=function(_){this._shimmedLocalStreams=this._shimmedLocalStreams||{},_.getTracks().forEach(m=>{if(this.getSenders().find(y=>y.track===m))throw new DOMException("Track already exists.","InvalidAccessError")});const g=this.getSenders();i.apply(this,arguments);const h=this.getSenders().filter(m=>g.indexOf(m)===-1);this._shimmedLocalStreams[_.id]=[_].concat(h)};const l=o.RTCPeerConnection.prototype.removeStream;o.RTCPeerConnection.prototype.removeStream=function(_){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[_.id],l.apply(this,arguments)};const c=o.RTCPeerConnection.prototype.removeTrack;o.RTCPeerConnection.prototype.removeTrack=function(_){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},_&&Object.keys(this._shimmedLocalStreams).forEach(g=>{const h=this._shimmedLocalStreams[g].indexOf(_);h!==-1&&this._shimmedLocalStreams[g].splice(h,1),this._shimmedLocalStreams[g].length===1&&delete this._shimmedLocalStreams[g]}),c.apply(this,arguments)}}function jg(o,n){if(!o.RTCPeerConnection)return;if(o.RTCPeerConnection.prototype.addTrack&&n.version>=65)return Cg(o);const i=o.RTCPeerConnection.prototype.getLocalStreams;o.RTCPeerConnection.prototype.getLocalStreams=function(){const p=i.apply(this);return this._reverseStreams=this._reverseStreams||{},p.map(y=>this._reverseStreams[y.id])};const l=o.RTCPeerConnection.prototype.addStream;o.RTCPeerConnection.prototype.addStream=function(p){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},p.getTracks().forEach(y=>{if(this.getSenders().find(C=>C.track===y))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[p.id]){const y=new o.MediaStream(p.getTracks());this._streams[p.id]=y,this._reverseStreams[y.id]=p,p=y}l.apply(this,[p])};const c=o.RTCPeerConnection.prototype.removeStream;o.RTCPeerConnection.prototype.removeStream=function(p){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},c.apply(this,[this._streams[p.id]||p]),delete this._reverseStreams[this._streams[p.id]?this._streams[p.id].id:p.id],delete this._streams[p.id]},o.RTCPeerConnection.prototype.addTrack=function(p,y){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const v=[].slice.call(arguments,1);if(v.length!==1||!v[0].getTracks().find(M=>M===p))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(M=>M.track===p))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const k=this._streams[y.id];if(k)k.addTrack(p),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const M=new o.MediaStream([p]);this._streams[y.id]=M,this._reverseStreams[M.id]=y,this.addStream(M)}return this.getSenders().find(M=>M.track===p)};function u(m,p){let y=p.sdp;return Object.keys(m._reverseStreams||[]).forEach(v=>{const C=m._reverseStreams[v],k=m._streams[C.id];y=y.replace(new RegExp(k.id,"g"),C.id)}),new RTCSessionDescription({type:p.type,sdp:y})}function _(m,p){let y=p.sdp;return Object.keys(m._reverseStreams||[]).forEach(v=>{const C=m._reverseStreams[v],k=m._streams[C.id];y=y.replace(new RegExp(C.id,"g"),k.id)}),new RTCSessionDescription({type:p.type,sdp:y})}["createOffer","createAnswer"].forEach(function(m){const p=o.RTCPeerConnection.prototype[m],y={[m](){const v=arguments;return arguments.length&&typeof arguments[0]=="function"?p.apply(this,[k=>{const M=u(this,k);v[0].apply(null,[M])},k=>{v[1]&&v[1].apply(null,k)},arguments[2]]):p.apply(this,arguments).then(k=>u(this,k))}};o.RTCPeerConnection.prototype[m]=y[m]});const g=o.RTCPeerConnection.prototype.setLocalDescription;o.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?g.apply(this,arguments):(arguments[0]=_(this,arguments[0]),g.apply(this,arguments))};const h=Object.getOwnPropertyDescriptor(o.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(o.RTCPeerConnection.prototype,"localDescription",{get(){const m=h.get.apply(this);return m.type===""?m:u(this,m)}}),o.RTCPeerConnection.prototype.removeTrack=function(p){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!p._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(p._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let v;Object.keys(this._streams).forEach(C=>{this._streams[C].getTracks().find(M=>p.track===M)&&(v=this._streams[C])}),v&&(v.getTracks().length===1?this.removeStream(this._reverseStreams[v.id]):v.removeTrack(p.track),this.dispatchEvent(new Event("negotiationneeded")))}}function qf(o,n){!o.RTCPeerConnection&&o.webkitRTCPeerConnection&&(o.RTCPeerConnection=o.webkitRTCPeerConnection),o.RTCPeerConnection&&n.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(i){const l=o.RTCPeerConnection.prototype[i],c={[i](){return arguments[0]=new(i==="addIceCandidate"?o.RTCIceCandidate:o.RTCSessionDescription)(arguments[0]),l.apply(this,arguments)}};o.RTCPeerConnection.prototype[i]=c[i]})}function Eg(o,n){n.version>102||ta(o,"negotiationneeded",i=>{const l=i.target;if(!((n.version<72||l.getConfiguration&&l.getConfiguration().sdpSemantics==="plan-b")&&l.signalingState!=="stable"))return i})}const t0=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:Eg,shimAddTrackRemoveTrack:jg,shimAddTrackRemoveTrackWithNative:Cg,shimGetSendersWithDtmf:Sg,shimGetUserMedia:bg,shimMediaStream:vg,shimOnTrack:wg,shimPeerConnection:qf,shimSenderReceiverGetStats:kg},Symbol.toStringTag,{value:"Module"}));function Mg(o,n){const i=o&&o.navigator;if(!i.mediaDevices)return;const l=o&&o.MediaStreamTrack;if(i.getUserMedia=function(c,u,_){wh("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),i.mediaDevices.getUserMedia(c).then(u,_)},!(n.version>55&&"autoGainControl"in i.mediaDevices.getSupportedConstraints())){const c=function(_,g,h){g in _&&!(h in _)&&(_[h]=_[g],delete _[g])},u=i.mediaDevices.getUserMedia.bind(i.mediaDevices);if(i.mediaDevices.getUserMedia=function(_){return typeof _=="object"&&typeof _.audio=="object"&&(_=JSON.parse(JSON.stringify(_)),c(_.audio,"autoGainControl","mozAutoGainControl"),c(_.audio,"noiseSuppression","mozNoiseSuppression")),u(_)},l&&l.prototype.getSettings){const _=l.prototype.getSettings;l.prototype.getSettings=function(){const g=_.apply(this,arguments);return c(g,"mozAutoGainControl","autoGainControl"),c(g,"mozNoiseSuppression","noiseSuppression"),g}}if(l&&l.prototype.applyConstraints){const _=l.prototype.applyConstraints;l.prototype.applyConstraints=function(g){return this.kind==="audio"&&typeof g=="object"&&(g=JSON.parse(JSON.stringify(g)),c(g,"autoGainControl","mozAutoGainControl"),c(g,"noiseSuppression","mozNoiseSuppression")),_.apply(this,[g])}}}}function T5(o,n){o.navigator.mediaDevices&&(o.navigator.mediaDevices&&"getDisplayMedia"in o.navigator.mediaDevices||(o.navigator.mediaDevices.getDisplayMedia=function(l){if(!(l&&l.video)){const c=new DOMException("getDisplayMedia without video constraints is undefined");return c.name="NotFoundError",c.code=8,Promise.reject(c)}return l.video===!0?l.video={mediaSource:n}:l.video.mediaSource=n,o.navigator.mediaDevices.getUserMedia(l)}))}function Tg(o){typeof o=="object"&&o.RTCTrackEvent&&"receiver"in o.RTCTrackEvent.prototype&&!("transceiver"in o.RTCTrackEvent.prototype)&&Object.defineProperty(o.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Qf(o,n){typeof o!="object"||!(o.RTCPeerConnection||o.mozRTCPeerConnection)||(!o.RTCPeerConnection&&o.mozRTCPeerConnection&&(o.RTCPeerConnection=o.mozRTCPeerConnection),n.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(i){const l=o.RTCPeerConnection.prototype[i],c={[i](){return arguments[0]=new(i==="addIceCandidate"?o.RTCIceCandidate:o.RTCSessionDescription)(arguments[0]),l.apply(this,arguments)}};o.RTCPeerConnection.prototype[i]=c[i]}))}function Rg(o,n){if(typeof o!="object"||!(o.RTCPeerConnection||o.mozRTCPeerConnection)||n.version>=151)return;const i={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},l=o.RTCPeerConnection.prototype.getStats;o.RTCPeerConnection.prototype.getStats=function(){const[u,_,g]=arguments;return this.signalingState==="closed"?Promise.resolve(new Map):l.apply(this,[u||null]).then(h=>{if(n.version<53&&!_)try{h.forEach(m=>{m.type=i[m.type]||m.type})}catch(m){if(m.name!=="TypeError")throw m;h.forEach((p,y)=>{h.set(y,Object.assign({},p,{type:i[p.type]||p.type}))})}return h}).then(_,g)}}function Ag(o){if(!(typeof o=="object"&&o.RTCPeerConnection&&o.RTCRtpSender)||o.RTCRtpSender&&"getStats"in o.RTCRtpSender.prototype)return;const n=o.RTCPeerConnection.prototype.getSenders;n&&(o.RTCPeerConnection.prototype.getSenders=function(){const c=n.apply(this,[]);return c.forEach(u=>u._pc=this),c});const i=o.RTCPeerConnection.prototype.addTrack;i&&(o.RTCPeerConnection.prototype.addTrack=function(){const c=i.apply(this,arguments);return c._pc=this,c}),o.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function Dg(o){if(!(typeof o=="object"&&o.RTCPeerConnection&&o.RTCRtpSender)||o.RTCRtpSender&&"getStats"in o.RTCRtpReceiver.prototype)return;const n=o.RTCPeerConnection.prototype.getReceivers;n&&(o.RTCPeerConnection.prototype.getReceivers=function(){const l=n.apply(this,[]);return l.forEach(c=>c._pc=this),l}),ta(o,"track",i=>(i.receiver._pc=i.srcElement,i)),o.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function Ng(o){!o.RTCPeerConnection||"removeStream"in o.RTCPeerConnection.prototype||(o.RTCPeerConnection.prototype.removeStream=function(i){wh("removeStream","removeTrack"),this.getSenders().forEach(l=>{l.track&&i.getTracks().includes(l.track)&&this.removeTrack(l)})})}function Og(o){o.DataChannel&&!o.RTCDataChannel&&(o.RTCDataChannel=o.DataChannel)}function Lg(o,n){if(!(typeof o=="object"&&o.RTCPeerConnection)||n.version>=110)return;const i=o.RTCPeerConnection.prototype.addTransceiver;i&&(o.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let c=arguments[1]&&arguments[1].sendEncodings;c===void 0&&(c=[]),c=[...c];const u=c.length>0;u&&c.forEach(g=>{if("rid"in g&&!/^[a-z0-9]{0,16}$/i.test(g.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in g&&!(parseFloat(g.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in g&&!(parseFloat(g.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const _=i.apply(this,arguments);if(u){const{sender:g}=_,h=g.getParameters();(!("encodings"in h)||h.encodings.length===1&&Object.keys(h.encodings[0]).length===0)&&(h.encodings=c,g.sendEncodings=c,this.setParametersPromises.push(g.setParameters(h).then(()=>{delete g.sendEncodings}).catch(()=>{delete g.sendEncodings})))}return _})}function zg(o,n){if(!(typeof o=="object"&&o.RTCRtpSender)||n.version>=110)return;const i=o.RTCRtpSender.prototype.getParameters;i&&(o.RTCRtpSender.prototype.getParameters=function(){const c=i.apply(this,arguments);return"encodings"in c||(c.encodings=[].concat(this.sendEncodings||[{}])),c})}function Bg(o,n){if(!(typeof o=="object"&&o.RTCPeerConnection)||n.version>=110)return;const i=o.RTCPeerConnection.prototype.createOffer;o.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>i.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):i.apply(this,arguments)}}function $g(o,n){if(!(typeof o=="object"&&o.RTCPeerConnection)||n.version>=110)return;const i=o.RTCPeerConnection.prototype.createAnswer;o.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>i.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):i.apply(this,arguments)}}const n0=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:Lg,shimCreateAnswer:$g,shimCreateOffer:Bg,shimGetDisplayMedia:T5,shimGetParameters:zg,shimGetStats:Rg,shimGetUserMedia:Mg,shimOnTrack:Tg,shimPeerConnection:Qf,shimRTCDataChannel:Og,shimReceiverGetStats:Dg,shimRemoveStream:Ng,shimSenderGetStats:Ag},Symbol.toStringTag,{value:"Module"}));function Pg(o){if(!(typeof o!="object"||!o.RTCPeerConnection)){if("getLocalStreams"in o.RTCPeerConnection.prototype||(o.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in o.RTCPeerConnection.prototype)){const n=o.RTCPeerConnection.prototype.addTrack;o.RTCPeerConnection.prototype.addStream=function(l){this._localStreams||(this._localStreams=[]),this._localStreams.includes(l)||this._localStreams.push(l),l.getAudioTracks().forEach(c=>n.call(this,c,l)),l.getVideoTracks().forEach(c=>n.call(this,c,l))},o.RTCPeerConnection.prototype.addTrack=function(l,...c){return c&&c.forEach(u=>{this._localStreams?this._localStreams.includes(u)||this._localStreams.push(u):this._localStreams=[u]}),n.apply(this,arguments)}}"removeStream"in o.RTCPeerConnection.prototype||(o.RTCPeerConnection.prototype.removeStream=function(i){this._localStreams||(this._localStreams=[]);const l=this._localStreams.indexOf(i);if(l===-1)return;this._localStreams.splice(l,1);const c=i.getTracks();this.getSenders().forEach(u=>{c.includes(u.track)&&this.removeTrack(u)})})}}function Ig(o){if(!(typeof o!="object"||!o.RTCPeerConnection)&&("getRemoteStreams"in o.RTCPeerConnection.prototype||(o.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in o.RTCPeerConnection.prototype))){Object.defineProperty(o.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(i){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=i),this.addEventListener("track",this._onaddstreampoly=l=>{l.streams.forEach(c=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(c))return;this._remoteStreams.push(c);const u=new Event("addstream");u.stream=c,this.dispatchEvent(u)})})}});const n=o.RTCPeerConnection.prototype.setRemoteDescription;o.RTCPeerConnection.prototype.setRemoteDescription=function(){const l=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(c){c.streams.forEach(u=>{if(l._remoteStreams||(l._remoteStreams=[]),l._remoteStreams.indexOf(u)>=0)return;l._remoteStreams.push(u);const _=new Event("addstream");_.stream=u,l.dispatchEvent(_)})}),n.apply(l,arguments)}}}function Ug(o){if(typeof o!="object"||!o.RTCPeerConnection)return;const n=o.RTCPeerConnection.prototype,i=n.createOffer,l=n.createAnswer,c=n.setLocalDescription,u=n.setRemoteDescription,_=n.addIceCandidate;n.createOffer=function(m,p){const y=arguments.length>=2?arguments[2]:arguments[0],v=i.apply(this,[y]);return p?(v.then(m,p),Promise.resolve()):v},n.createAnswer=function(m,p){const y=arguments.length>=2?arguments[2]:arguments[0],v=l.apply(this,[y]);return p?(v.then(m,p),Promise.resolve()):v};let g=function(h,m,p){const y=c.apply(this,[h]);return p?(y.then(m,p),Promise.resolve()):y};n.setLocalDescription=g,g=function(h,m,p){const y=u.apply(this,[h]);return p?(y.then(m,p),Promise.resolve()):y},n.setRemoteDescription=g,g=function(h,m,p){const y=_.apply(this,[h]);return p?(y.then(m,p),Promise.resolve()):y},n.addIceCandidate=g}function Hg(o){const n=o&&o.navigator;if(n.mediaDevices&&n.mediaDevices.getUserMedia){const i=n.mediaDevices,l=i.getUserMedia.bind(i);n.mediaDevices.getUserMedia=c=>l(Yg(c))}!n.getUserMedia&&n.mediaDevices&&n.mediaDevices.getUserMedia&&(n.getUserMedia=(function(l,c,u){n.mediaDevices.getUserMedia(l).then(c,u)}).bind(n))}function Yg(o){return o&&o.video!==void 0?Object.assign({},o,{video:xg(o.video)}):o}function Xg(o){if(!o.RTCPeerConnection)return;const n=o.RTCPeerConnection;o.RTCPeerConnection=function(l,c){if(l&&l.iceServers){const u=[];for(let _=0;_<l.iceServers.length;_++){let g=l.iceServers[_];g.urls===void 0&&g.url?(wh("RTCIceServer.url","RTCIceServer.urls"),g=JSON.parse(JSON.stringify(g)),g.urls=g.url,delete g.url,u.push(g)):u.push(l.iceServers[_])}l.iceServers=u}return new n(l,c)},o.RTCPeerConnection.prototype=n.prototype,"generateCertificate"in n&&Object.defineProperty(o.RTCPeerConnection,"generateCertificate",{get(){return n.generateCertificate}})}function Gg(o){typeof o=="object"&&o.RTCTrackEvent&&"receiver"in o.RTCTrackEvent.prototype&&!("transceiver"in o.RTCTrackEvent.prototype)&&Object.defineProperty(o.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Fg(o){const n=o.RTCPeerConnection.prototype.createOffer;o.RTCPeerConnection.prototype.createOffer=function(l){if(l){typeof l.offerToReceiveAudio<"u"&&(l.offerToReceiveAudio=!!l.offerToReceiveAudio);const c=this.getTransceivers().find(_=>_.receiver.track.kind==="audio");l.offerToReceiveAudio===!1&&c?c.direction==="sendrecv"?c.setDirection?c.setDirection("sendonly"):c.direction="sendonly":c.direction==="recvonly"&&(c.setDirection?c.setDirection("inactive"):c.direction="inactive"):l.offerToReceiveAudio===!0&&!c&&this.addTransceiver("audio",{direction:"recvonly"}),typeof l.offerToReceiveVideo<"u"&&(l.offerToReceiveVideo=!!l.offerToReceiveVideo);const u=this.getTransceivers().find(_=>_.receiver.track.kind==="video");l.offerToReceiveVideo===!1&&u?u.direction==="sendrecv"?u.setDirection?u.setDirection("sendonly"):u.direction="sendonly":u.direction==="recvonly"&&(u.setDirection?u.setDirection("inactive"):u.direction="inactive"):l.offerToReceiveVideo===!0&&!u&&this.addTransceiver("video",{direction:"recvonly"})}return n.apply(this,arguments)}}function Wg(o){typeof o!="object"||o.AudioContext||(o.AudioContext=o.webkitAudioContext)}const s0=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:Wg,shimCallbacksAPI:Ug,shimConstraints:Yg,shimCreateOfferLegacy:Fg,shimGetUserMedia:Hg,shimLocalStreamsAPI:Pg,shimRTCIceServerUrls:Xg,shimRemoteStreamsAPI:Ig,shimTrackEventTransceiver:Gg},Symbol.toStringTag,{value:"Module"}));var Ef={exports:{}},o0;function R5(){return o0||(o0=1,(function(o){const n={};n.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},n.localCName=n.generateIdentifier(),n.splitLines=function(i){return i.trim().split(`
`).map(l=>l.trim())},n.splitSections=function(i){return i.split(`
m=`).map((c,u)=>(u>0?"m="+c:c).trim()+`\r
`)},n.getDescription=function(i){const l=n.splitSections(i);return l&&l[0]},n.getMediaSections=function(i){const l=n.splitSections(i);return l.shift(),l},n.matchPrefix=function(i,l){return n.splitLines(i).filter(c=>c.indexOf(l)===0)},n.parseCandidate=function(i){let l;i.indexOf("a=candidate:")===0?l=i.substring(12).split(" "):l=i.substring(10).split(" ");const c={foundation:l[0],component:{1:"rtp",2:"rtcp"}[l[1]]||l[1],protocol:l[2].toLowerCase(),priority:parseInt(l[3],10),ip:l[4],address:l[4],port:parseInt(l[5],10),type:l[7]};for(let u=8;u<l.length;u+=2)switch(l[u]){case"raddr":c.relatedAddress=l[u+1];break;case"rport":c.relatedPort=parseInt(l[u+1],10);break;case"tcptype":c.tcpType=l[u+1];break;case"ufrag":c.ufrag=l[u+1],c.usernameFragment=l[u+1];break;default:c[l[u]]===void 0&&(c[l[u]]=l[u+1]);break}return c},n.writeCandidate=function(i){const l=[];l.push(i.foundation);const c=i.component;c==="rtp"?l.push(1):c==="rtcp"?l.push(2):l.push(c),l.push(i.protocol.toUpperCase()),l.push(i.priority),l.push(i.address||i.ip),l.push(i.port);const u=i.type;return l.push("typ"),l.push(u),u!=="host"&&i.relatedAddress&&i.relatedPort!==void 0&&(l.push("raddr"),l.push(i.relatedAddress),l.push("rport"),l.push(i.relatedPort)),i.tcpType&&i.protocol.toLowerCase()==="tcp"&&(l.push("tcptype"),l.push(i.tcpType)),(i.usernameFragment||i.ufrag)&&(l.push("ufrag"),l.push(i.usernameFragment||i.ufrag)),"candidate:"+l.join(" ")},n.parseIceOptions=function(i){return i.substring(14).split(" ")},n.parseRtpMap=function(i){let l=i.substring(9).split(" ");const c={payloadType:parseInt(l.shift(),10)};return l=l[0].split("/"),c.name=l[0],c.clockRate=parseInt(l[1],10),c.channels=l.length===3?parseInt(l[2],10):1,c.numChannels=c.channels,c},n.writeRtpMap=function(i){let l=i.payloadType;i.preferredPayloadType!==void 0&&(l=i.preferredPayloadType);const c=i.channels||i.numChannels||1;return"a=rtpmap:"+l+" "+i.name+"/"+i.clockRate+(c!==1?"/"+c:"")+`\r
`},n.parseExtmap=function(i){const l=i.substring(9).split(" ");return{id:parseInt(l[0],10),direction:l[0].indexOf("/")>0?l[0].split("/")[1]:"sendrecv",uri:l[1],attributes:l.slice(2).join(" ")}},n.writeExtmap=function(i){return"a=extmap:"+(i.id||i.preferredId)+(i.direction&&i.direction!=="sendrecv"?"/"+i.direction:"")+" "+i.uri+(i.attributes?" "+i.attributes:"")+`\r
`},n.parseFmtp=function(i){const l={};let c;const u=i.substring(i.indexOf(" ")+1).split(";");for(let _=0;_<u.length;_++)c=u[_].trim().split("="),l[c[0].trim()]=c[1];return l},n.writeFmtp=function(i){let l="",c=i.payloadType;if(i.preferredPayloadType!==void 0&&(c=i.preferredPayloadType),i.parameters&&Object.keys(i.parameters).length){const u=[];Object.keys(i.parameters).forEach(_=>{i.parameters[_]!==void 0?u.push(_+"="+i.parameters[_]):u.push(_)}),l+="a=fmtp:"+c+" "+u.join(";")+`\r
`}return l},n.parseRtcpFb=function(i){const l=i.substring(i.indexOf(" ")+1).split(" ");return{type:l.shift(),parameter:l.join(" ")}},n.writeRtcpFb=function(i){let l="",c=i.payloadType;return i.preferredPayloadType!==void 0&&(c=i.preferredPayloadType),i.rtcpFeedback&&i.rtcpFeedback.length&&i.rtcpFeedback.forEach(u=>{l+="a=rtcp-fb:"+c+" "+u.type+(u.parameter&&u.parameter.length?" "+u.parameter:"")+`\r
`}),l},n.parseSsrcMedia=function(i){const l=i.indexOf(" "),c={ssrc:parseInt(i.substring(7,l),10)},u=i.indexOf(":",l);return u>-1?(c.attribute=i.substring(l+1,u),c.value=i.substring(u+1)):c.attribute=i.substring(l+1),c},n.parseSsrcGroup=function(i){const l=i.substring(13).split(" ");return{semantics:l.shift(),ssrcs:l.map(c=>parseInt(c,10))}},n.getMid=function(i){const l=n.matchPrefix(i,"a=mid:")[0];if(l)return l.substring(6)},n.parseFingerprint=function(i){const l=i.substring(14).split(" ");return{algorithm:l[0].toLowerCase(),value:l[1].toUpperCase()}},n.getDtlsParameters=function(i,l){return{role:"auto",fingerprints:n.matchPrefix(i+l,"a=fingerprint:").map(n.parseFingerprint)}},n.writeDtlsParameters=function(i,l){let c="a=setup:"+l+`\r
`;return i.fingerprints.forEach(u=>{c+="a=fingerprint:"+u.algorithm+" "+u.value+`\r
`}),c},n.parseCryptoLine=function(i){const l=i.substring(9).split(" ");return{tag:parseInt(l[0],10),cryptoSuite:l[1],keyParams:l[2],sessionParams:l.slice(3)}},n.writeCryptoLine=function(i){return"a=crypto:"+i.tag+" "+i.cryptoSuite+" "+(typeof i.keyParams=="object"?n.writeCryptoKeyParams(i.keyParams):i.keyParams)+(i.sessionParams?" "+i.sessionParams.join(" "):"")+`\r
`},n.parseCryptoKeyParams=function(i){if(i.indexOf("inline:")!==0)return null;const l=i.substring(7).split("|");return{keyMethod:"inline",keySalt:l[0],lifeTime:l[1],mkiValue:l[2]?l[2].split(":")[0]:void 0,mkiLength:l[2]?l[2].split(":")[1]:void 0}},n.writeCryptoKeyParams=function(i){return i.keyMethod+":"+i.keySalt+(i.lifeTime?"|"+i.lifeTime:"")+(i.mkiValue&&i.mkiLength?"|"+i.mkiValue+":"+i.mkiLength:"")},n.getCryptoParameters=function(i,l){return n.matchPrefix(i+l,"a=crypto:").map(n.parseCryptoLine)},n.getIceParameters=function(i,l){const c=n.matchPrefix(i+l,"a=ice-ufrag:")[0],u=n.matchPrefix(i+l,"a=ice-pwd:")[0];return c&&u?{usernameFragment:c.substring(12),password:u.substring(10)}:null},n.writeIceParameters=function(i){let l="a=ice-ufrag:"+i.usernameFragment+`\r
a=ice-pwd:`+i.password+`\r
`;return i.iceLite&&(l+=`a=ice-lite\r
`),l},n.parseRtpParameters=function(i){const l={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},u=n.splitLines(i)[0].split(" ");l.profile=u[2];for(let g=3;g<u.length;g++){const h=u[g],m=n.matchPrefix(i,"a=rtpmap:"+h+" ")[0];if(m){const p=n.parseRtpMap(m),y=n.matchPrefix(i,"a=fmtp:"+h+" ");switch(p.parameters=y.length?n.parseFmtp(y[0]):{},p.rtcpFeedback=n.matchPrefix(i,"a=rtcp-fb:"+h+" ").map(n.parseRtcpFb),l.codecs.push(p),p.name.toUpperCase()){case"RED":case"ULPFEC":l.fecMechanisms.push(p.name.toUpperCase());break}}}n.matchPrefix(i,"a=extmap:").forEach(g=>{l.headerExtensions.push(n.parseExtmap(g))});const _=n.matchPrefix(i,"a=rtcp-fb:* ").map(n.parseRtcpFb);return l.codecs.forEach(g=>{_.forEach(h=>{g.rtcpFeedback.find(p=>p.type===h.type&&p.parameter===h.parameter)||g.rtcpFeedback.push(h)})}),l},n.writeRtpDescription=function(i,l){let c="";c+="m="+i+" ",c+=l.codecs.length>0?"9":"0",c+=" "+(l.profile||"UDP/TLS/RTP/SAVPF")+" ",c+=l.codecs.map(_=>_.preferredPayloadType!==void 0?_.preferredPayloadType:_.payloadType).join(" ")+`\r
`,c+=`c=IN IP4 0.0.0.0\r
`,c+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,l.codecs.forEach(_=>{c+=n.writeRtpMap(_),c+=n.writeFmtp(_),c+=n.writeRtcpFb(_)});let u=0;return l.codecs.forEach(_=>{_.maxptime>u&&(u=_.maxptime)}),u>0&&(c+="a=maxptime:"+u+`\r
`),l.headerExtensions&&l.headerExtensions.forEach(_=>{c+=n.writeExtmap(_)}),c},n.parseRtpEncodingParameters=function(i){const l=[],c=n.parseRtpParameters(i),u=c.fecMechanisms.indexOf("RED")!==-1,_=c.fecMechanisms.indexOf("ULPFEC")!==-1,g=n.matchPrefix(i,"a=ssrc:").map(v=>n.parseSsrcMedia(v)).filter(v=>v.attribute==="cname"),h=g.length>0&&g[0].ssrc;let m;const p=n.matchPrefix(i,"a=ssrc-group:FID").map(v=>v.substring(17).split(" ").map(k=>parseInt(k,10)));p.length>0&&p[0].length>1&&p[0][0]===h&&(m=p[0][1]),c.codecs.forEach(v=>{if(v.name.toUpperCase()==="RTX"&&v.parameters.apt){let C={ssrc:h,codecPayloadType:parseInt(v.parameters.apt,10)};h&&m&&(C.rtx={ssrc:m}),l.push(C),u&&(C=JSON.parse(JSON.stringify(C)),C.fec={ssrc:h,mechanism:_?"red+ulpfec":"red"},l.push(C))}}),l.length===0&&h&&l.push({ssrc:h});let y=n.matchPrefix(i,"b=");return y.length&&(y[0].indexOf("b=TIAS:")===0?y=parseInt(y[0].substring(7),10):y[0].indexOf("b=AS:")===0?y=parseInt(y[0].substring(5),10)*1e3*.95-2e3*8:y=void 0,l.forEach(v=>{v.maxBitrate=y})),l},n.parseRtcpParameters=function(i){const l={},c=n.matchPrefix(i,"a=ssrc:").map(g=>n.parseSsrcMedia(g)).filter(g=>g.attribute==="cname")[0];c&&(l.cname=c.value,l.ssrc=c.ssrc);const u=n.matchPrefix(i,"a=rtcp-rsize");l.reducedSize=u.length>0,l.compound=u.length===0;const _=n.matchPrefix(i,"a=rtcp-mux");return l.mux=_.length>0,l},n.writeRtcpParameters=function(i){let l="";return i.reducedSize&&(l+=`a=rtcp-rsize\r
`),i.mux&&(l+=`a=rtcp-mux\r
`),i.ssrc!==void 0&&i.cname&&(l+="a=ssrc:"+i.ssrc+" cname:"+i.cname+`\r
`),l},n.parseMsid=function(i){let l;const c=n.matchPrefix(i,"a=msid:");if(c.length===1)return l=c[0].substring(7).split(" "),{stream:l[0],track:l[1]};const u=n.matchPrefix(i,"a=ssrc:").map(_=>n.parseSsrcMedia(_)).filter(_=>_.attribute==="msid");if(u.length>0)return l=u[0].value.split(" "),{stream:l[0],track:l[1]}},n.parseSctpDescription=function(i){const l=n.parseMLine(i),c=n.matchPrefix(i,"a=max-message-size:");let u;c.length>0&&(u=parseInt(c[0].substring(19),10)),isNaN(u)&&(u=65536);const _=n.matchPrefix(i,"a=sctp-port:");if(_.length>0)return{port:parseInt(_[0].substring(12),10),protocol:l.fmt,maxMessageSize:u};const g=n.matchPrefix(i,"a=sctpmap:");if(g.length>0){const h=g[0].substring(10).split(" ");return{port:parseInt(h[0],10),protocol:h[1],maxMessageSize:u}}},n.writeSctpDescription=function(i,l){let c=[];return i.protocol!=="DTLS/SCTP"?c=["m="+i.kind+" 9 "+i.protocol+" "+l.protocol+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctp-port:"+l.port+`\r
`]:c=["m="+i.kind+" 9 "+i.protocol+" "+l.port+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctpmap:"+l.port+" "+l.protocol+` 65535\r
`],l.maxMessageSize!==void 0&&c.push("a=max-message-size:"+l.maxMessageSize+`\r
`),c.join("")},n.generateSessionId=function(){return Math.random().toString().substr(2,22)},n.writeSessionBoilerplate=function(i,l,c){let u;const _=l!==void 0?l:2;return i?u=i:u=n.generateSessionId(),`v=0\r
o=`+(c||"thisisadapterortc")+" "+u+" "+_+` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`},n.getDirection=function(i,l){const c=n.splitLines(i);for(let u=0;u<c.length;u++)switch(c[u]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return c[u].substring(2)}return l?n.getDirection(l):"sendrecv"},n.getKind=function(i){return n.splitLines(i)[0].split(" ")[0].substring(2)},n.isRejected=function(i){return i.split(" ",2)[1]==="0"},n.parseMLine=function(i){const c=n.splitLines(i)[0].substring(2).split(" ");return{kind:c[0],port:parseInt(c[1],10),protocol:c[2],fmt:c.slice(3).join(" ")}},n.parseOLine=function(i){const c=n.matchPrefix(i,"o=")[0].substring(2).split(" ");return{username:c[0],sessionId:c[1],sessionVersion:parseInt(c[2],10),netType:c[3],addressType:c[4],address:c[5]}},n.isValidSDP=function(i){if(typeof i!="string"||i.length===0)return!1;const l=n.splitLines(i);for(let c=0;c<l.length;c++)if(l[c].length<2||l[c].charAt(1)!=="=")return!1;return!0},o.exports=n})(Ef)),Ef.exports}var qg=R5();const Qa=dh(qg),A5=U1({__proto__:null,default:Qa},[qg]);function nu(o){if(!o.RTCIceCandidate||o.RTCIceCandidate&&"foundation"in o.RTCIceCandidate.prototype)return;const n=o.RTCIceCandidate;o.RTCIceCandidate=function(l){if(typeof l=="object"&&l.candidate&&l.candidate.indexOf("a=")===0&&(l=JSON.parse(JSON.stringify(l)),l.candidate=l.candidate.substring(2)),l.candidate&&l.candidate.length){const c=new n(l),u=Qa.parseCandidate(l.candidate);for(const _ in u)_ in c||Object.defineProperty(c,_,{value:u[_]});return c.toJSON=function(){return{candidate:c.candidate,sdpMid:c.sdpMid,sdpMLineIndex:c.sdpMLineIndex,usernameFragment:c.usernameFragment}},c}return new n(l)},o.RTCIceCandidate.prototype=n.prototype,ta(o,"icecandidate",i=>(i.candidate&&Object.defineProperty(i,"candidate",{value:new o.RTCIceCandidate(i.candidate),writable:"false"}),i))}function Vf(o){!o.RTCIceCandidate||o.RTCIceCandidate&&"relayProtocol"in o.RTCIceCandidate.prototype||ta(o,"icecandidate",n=>{if(n.candidate){const i=Qa.parseCandidate(n.candidate.candidate);i.type==="relay"&&(n.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[i.priority>>24])}return n})}function su(o,n){if(!o.RTCPeerConnection||n.browser==="chrome"&&n.version>102||n.browser==="firefox"&&n.version>=113)return;"sctp"in o.RTCPeerConnection.prototype||Object.defineProperty(o.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const i=function(g){if(!g||!g.sdp)return!1;const h=Qa.splitSections(g.sdp);return h.shift(),h.some(m=>{const p=Qa.parseMLine(m);return p&&p.kind==="application"&&p.protocol.indexOf("SCTP")!==-1})},l=function(g){const h=g.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(h===null||h.length<2)return-1;const m=parseInt(h[1],10);return m!==m?-1:m},c=function(g){let h=65536;return n.browser==="firefox"&&(n.version<57?g===-1?h=16384:h=2147483637:n.version<60?h=n.version===57?65535:65536:h=2147483637),h},u=function(g,h){let m=65536;n.browser==="firefox"&&n.version===57&&(m=65535);const p=Qa.matchPrefix(g.sdp,"a=max-message-size:");return p.length>0?m=parseInt(p[0].substring(19),10):n.browser==="firefox"&&h!==-1&&(m=2147483637),m},_=o.RTCPeerConnection.prototype.setRemoteDescription;o.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,n.browser==="chrome"&&n.version>=76){const{sdpSemantics:h}=this.getConfiguration();h==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(i(arguments[0])){const h=l(arguments[0]),m=c(h),p=u(arguments[0],h);let y;m===0&&p===0?y=Number.POSITIVE_INFINITY:m===0||p===0?y=Math.max(m,p):y=Math.min(m,p);const v={};Object.defineProperty(v,"maxMessageSize",{get(){return y}}),this._sctp=v}return _.apply(this,arguments)}}function ou(o,n){if(!(o.RTCPeerConnection&&"createDataChannel"in o.RTCPeerConnection.prototype)||n.browser==="chrome"&&n.version>=149||n.browser==="firefox"&&n.version>60)return;function i(c,u){const _=c.send;c.send=function(){const h=arguments[0],m=h.length||h.size||h.byteLength;if(c.readyState==="open"&&u.sctp&&m>u.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+u.sctp.maxMessageSize+" bytes)");return _.apply(c,arguments)}}const l=o.RTCPeerConnection.prototype.createDataChannel;o.RTCPeerConnection.prototype.createDataChannel=function(){const u=l.apply(this,arguments);return i(u,this),u},ta(o,"datachannel",c=>(i(c.channel,c.target),c))}function Kf(o){if(!o.RTCPeerConnection||"connectionState"in o.RTCPeerConnection.prototype)return;const n=o.RTCPeerConnection.prototype;Object.defineProperty(n,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(n,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(i){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),i&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=i)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(i=>{const l=n[i];n[i]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=c=>{const u=c.target;if(u._lastConnectionState!==u.connectionState){u._lastConnectionState=u.connectionState;const _=new Event("connectionstatechange",c);u.dispatchEvent(_)}return c},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),l.apply(this,arguments)}})}function Zf(o,n){if(!o.RTCPeerConnection||n.browser==="chrome"&&n.version>=71||n.browser==="safari"&&n._safariVersion>=13.1)return;const i=o.RTCPeerConnection.prototype.setRemoteDescription;o.RTCPeerConnection.prototype.setRemoteDescription=function(c){if(c&&c.sdp&&c.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const u=c.sdp.split(`
`).filter(_=>_.trim()!=="a=extmap-allow-mixed").join(`
`);o.RTCSessionDescription&&c instanceof o.RTCSessionDescription?arguments[0]=new o.RTCSessionDescription({type:c.type,sdp:u}):c.sdp=u}return i.apply(this,arguments)}}function iu(o,n){if(!(o.RTCPeerConnection&&o.RTCPeerConnection.prototype))return;const i=o.RTCPeerConnection.prototype.addIceCandidate;!i||i.length===0||(o.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(n.browser==="chrome"&&n.version<78||n.browser==="firefox"&&n.version<68||n.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():i.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function au(o,n){if(!(o.RTCPeerConnection&&o.RTCPeerConnection.prototype))return;const i=o.RTCPeerConnection.prototype.setLocalDescription;!i||i.length===0||(o.RTCPeerConnection.prototype.setLocalDescription=function(){let c=arguments[0]||{};if(typeof c!="object"||c.type&&c.sdp)return i.apply(this,arguments);if(c={type:c.type,sdp:c.sdp},!c.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":c.type="offer";break;default:c.type="answer";break}return c.sdp||c.type!=="offer"&&c.type!=="answer"?i.apply(this,[c]):(c.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(_=>i.apply(this,[_]))})}const D5=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:Zf,shimAddIceCandidateNullOrEmpty:iu,shimConnectionState:Kf,shimMaxMessageSize:su,shimParameterlessSetLocalDescription:au,shimRTCIceCandidate:nu,shimRTCIceCandidateRelayProtocol:Vf,shimSendThrowTypeError:ou},Symbol.toStringTag,{value:"Module"}));function N5({window:o}={},n={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){const i=vh,l=M5(o),c={browserDetails:l,commonShim:D5,extractVersion:ar,disableLog:j5,disableWarnings:E5,sdp:A5};switch(l.browser){case"chrome":if(!t0||!qf||!n.shimChrome)return i("Chrome shim is not included in this adapter release."),c;if(l.version===null)return i("Chrome shim can not determine version, not shimming."),c;i("adapter.js shimming chrome."),c.browserShim=t0,iu(o,l),au(o),bg(o,l),vg(o),qf(o,l),wg(o,l),jg(o,l),Sg(o),kg(o,l),Eg(o,l),nu(o),Vf(o),Kf(o),su(o,l),ou(o,l),Zf(o,l);break;case"firefox":if(!n0||!Qf||!n.shimFirefox)return i("Firefox shim is not included in this adapter release."),c;i("adapter.js shimming firefox."),c.browserShim=n0,iu(o,l),au(o),Mg(o,l),Qf(o,l),Rg(o,l),Tg(o),Ng(o),Ag(o),Dg(o),Og(o),Lg(o,l),zg(o,l),Bg(o,l),$g(o,l),nu(o),Kf(o),su(o,l),ou(o,l);break;case"safari":if(!s0||!n.shimSafari)return i("Safari shim is not included in this adapter release."),c;i("adapter.js shimming safari."),c.browserShim=s0,iu(o,l),au(o),Xg(o),Fg(o),Ug(o),Pg(o),Ig(o),Gg(o),Hg(o),Wg(o),nu(o),Vf(o),su(o,l),ou(o,l),Zf(o,l);break;default:i("Unsupported browser!");break}return c}const i0=N5({window:typeof window>"u"?void 0:window});function na(o,n,i,l){Object.defineProperty(o,n,{get:i,set:l,enumerable:!0,configurable:!0})}class Qg{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=n=>{const i=[],l=n.byteLength,c=Math.ceil(l/this.chunkedMTU);let u=0,_=0;for(;_<l;){const g=Math.min(l,_+this.chunkedMTU),h=n.slice(_,g),m={__peerData:this._dataCount,n:u,data:h,total:c};i.push(m),_=g,u++}return this._dataCount++,i}}}function O5(o){let n=0;for(const c of o)n+=c.byteLength;const i=new Uint8Array(n);let l=0;for(const c of o)i.set(c,l),l+=c.byteLength;return i}const Mf=i0.default||i0,Jl=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){const o=this.getBrowser(),n=this.getVersion();return this.supportedBrowsers.includes(o)?o==="chrome"?n>=this.minChromeVersion:o==="firefox"?n>=this.minFirefoxVersion:o==="safari"?!this.isIOS&&n>=this.minSafariVersion:!1:!1}getBrowser(){return Mf.browserDetails.browser}getVersion(){return Mf.browserDetails.version||0}isUnifiedPlanSupported(){const o=this.getBrowser(),n=Mf.browserDetails.version||0;if(o==="chrome"&&n<this.minChromeVersion)return!1;if(o==="firefox"&&n>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let i,l=!1;try{i=new RTCPeerConnection,i.addTransceiver("audio"),l=!0}catch{}finally{i&&i.close()}return l}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},L5=o=>!o||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(o),Vg=()=>Math.random().toString(36).slice(2),a0={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};class z5 extends Qg{noop(){}blobToArrayBuffer(n,i){const l=new FileReader;return l.onload=function(c){c.target&&i(c.target.result)},l.readAsArrayBuffer(n),l}binaryStringToArrayBuffer(n){const i=new Uint8Array(n.length);for(let l=0;l<n.length;l++)i[l]=n.charCodeAt(l)&255;return i.buffer}isSecure(){return location.protocol==="https:"}constructor(...n){super(...n),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=a0,this.browser=Jl.getBrowser(),this.browserVersion=Jl.getVersion(),this.pack=pg,this.unpack=mg,this.supports=(function(){const i={browser:Jl.isBrowserSupported(),webRTC:Jl.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!i.webRTC)return i;let l;try{l=new RTCPeerConnection(a0),i.audioVideo=!0;let c;try{c=l.createDataChannel("_PEERJSTEST",{ordered:!0}),i.data=!0,i.reliable=!!c.ordered;try{c.binaryType="blob",i.binaryBlob=!Jl.isIOS}catch{}}catch{}finally{c&&c.close()}}catch{}finally{l&&l.close()}return i})(),this.validateId=L5,this.randomToken=Vg}}const bs=new z5,B5="PeerJS: ";class $5{get logLevel(){return this._logLevel}set logLevel(n){this._logLevel=n}log(...n){this._logLevel>=3&&this._print(3,...n)}warn(...n){this._logLevel>=2&&this._print(2,...n)}error(...n){this._logLevel>=1&&this._print(1,...n)}setLogFunction(n){this._print=n}_print(n,...i){const l=[B5,...i];for(const c in l)l[c]instanceof Error&&(l[c]="("+l[c].name+") "+l[c].message);n>=3?console.log(...l):n>=2?console.warn("WARNING",...l):n>=1&&console.error("ERROR",...l)}constructor(){this._logLevel=0}}var Ie=new $5,Sh={},P5=Object.prototype.hasOwnProperty,fs="~";function fr(){}Object.create&&(fr.prototype=Object.create(null),new fr().__proto__||(fs=!1));function I5(o,n,i){this.fn=o,this.context=n,this.once=i||!1}function Kg(o,n,i,l,c){if(typeof i!="function")throw new TypeError("The listener must be a function");var u=new I5(i,l||o,c),_=fs?fs+n:n;return o._events[_]?o._events[_].fn?o._events[_]=[o._events[_],u]:o._events[_].push(u):(o._events[_]=u,o._eventsCount++),o}function lu(o,n){--o._eventsCount===0?o._events=new fr:delete o._events[n]}function is(){this._events=new fr,this._eventsCount=0}is.prototype.eventNames=function(){var n=[],i,l;if(this._eventsCount===0)return n;for(l in i=this._events)P5.call(i,l)&&n.push(fs?l.slice(1):l);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(i)):n};is.prototype.listeners=function(n){var i=fs?fs+n:n,l=this._events[i];if(!l)return[];if(l.fn)return[l.fn];for(var c=0,u=l.length,_=new Array(u);c<u;c++)_[c]=l[c].fn;return _};is.prototype.listenerCount=function(n){var i=fs?fs+n:n,l=this._events[i];return l?l.fn?1:l.length:0};is.prototype.emit=function(n,i,l,c,u,_){var g=fs?fs+n:n;if(!this._events[g])return!1;var h=this._events[g],m=arguments.length,p,y;if(h.fn){switch(h.once&&this.removeListener(n,h.fn,void 0,!0),m){case 1:return h.fn.call(h.context),!0;case 2:return h.fn.call(h.context,i),!0;case 3:return h.fn.call(h.context,i,l),!0;case 4:return h.fn.call(h.context,i,l,c),!0;case 5:return h.fn.call(h.context,i,l,c,u),!0;case 6:return h.fn.call(h.context,i,l,c,u,_),!0}for(y=1,p=new Array(m-1);y<m;y++)p[y-1]=arguments[y];h.fn.apply(h.context,p)}else{var v=h.length,C;for(y=0;y<v;y++)switch(h[y].once&&this.removeListener(n,h[y].fn,void 0,!0),m){case 1:h[y].fn.call(h[y].context);break;case 2:h[y].fn.call(h[y].context,i);break;case 3:h[y].fn.call(h[y].context,i,l);break;case 4:h[y].fn.call(h[y].context,i,l,c);break;default:if(!p)for(C=1,p=new Array(m-1);C<m;C++)p[C-1]=arguments[C];h[y].fn.apply(h[y].context,p)}}return!0};is.prototype.on=function(n,i,l){return Kg(this,n,i,l,!1)};is.prototype.once=function(n,i,l){return Kg(this,n,i,l,!0)};is.prototype.removeListener=function(n,i,l,c){var u=fs?fs+n:n;if(!this._events[u])return this;if(!i)return lu(this,u),this;var _=this._events[u];if(_.fn)_.fn===i&&(!c||_.once)&&(!l||_.context===l)&&lu(this,u);else{for(var g=0,h=[],m=_.length;g<m;g++)(_[g].fn!==i||c&&!_[g].once||l&&_[g].context!==l)&&h.push(_[g]);h.length?this._events[u]=h.length===1?h[0]:h:lu(this,u)}return this};is.prototype.removeAllListeners=function(n){var i;return n?(i=fs?fs+n:n,this._events[i]&&lu(this,i)):(this._events=new fr,this._eventsCount=0),this};is.prototype.off=is.prototype.removeListener;is.prototype.addListener=is.prototype.on;is.prefixed=fs;is.EventEmitter=is;Sh=is;var sa={};na(sa,"ConnectionType",()=>ji);na(sa,"PeerErrorType",()=>Pn);na(sa,"BaseConnectionErrorType",()=>Jf);na(sa,"DataConnectionErrorType",()=>kh);na(sa,"SerializationType",()=>xu);na(sa,"SocketEventType",()=>Ci);na(sa,"ServerMessageType",()=>os);var ji=(function(o){return o.Data="data",o.Media="media",o})({}),Pn=(function(o){return o.BrowserIncompatible="browser-incompatible",o.Disconnected="disconnected",o.InvalidID="invalid-id",o.InvalidKey="invalid-key",o.Network="network",o.PeerUnavailable="peer-unavailable",o.SslUnavailable="ssl-unavailable",o.ServerError="server-error",o.SocketError="socket-error",o.SocketClosed="socket-closed",o.UnavailableID="unavailable-id",o.WebRTC="webrtc",o})({}),Jf=(function(o){return o.NegotiationFailed="negotiation-failed",o.ConnectionClosed="connection-closed",o})({}),kh=(function(o){return o.NotOpenYet="not-open-yet",o.MessageToBig="message-too-big",o})({}),xu=(function(o){return o.Binary="binary",o.BinaryUTF8="binary-utf8",o.JSON="json",o.None="raw",o})({}),Ci=(function(o){return o.Message="message",o.Disconnected="disconnected",o.Error="error",o.Close="close",o})({}),os=(function(o){return o.Heartbeat="HEARTBEAT",o.Candidate="CANDIDATE",o.Offer="OFFER",o.Answer="ANSWER",o.Open="OPEN",o.Error="ERROR",o.IdTaken="ID-TAKEN",o.InvalidKey="INVALID-KEY",o.Leave="LEAVE",o.Expire="EXPIRE",o})({});const Zg="1.5.5";class U5 extends Sh.EventEmitter{constructor(n,i,l,c,u,_=5e3){super(),this.pingInterval=_,this._disconnected=!0,this._messagesQueue=[];const g=n?"wss://":"ws://";this._baseUrl=g+i+":"+l+c+"peerjs?key="+u}start(n,i){this._id=n;const l=`${this._baseUrl}&id=${n}&token=${i}`;this._socket||!this._disconnected||(this._socket=new WebSocket(l+"&version="+Zg),this._disconnected=!1,this._socket.onmessage=c=>{let u;try{u=JSON.parse(c.data),Ie.log("Server message received:",u)}catch{Ie.log("Invalid server message",c.data);return}this.emit(Ci.Message,u)},this._socket.onclose=c=>{this._disconnected||(Ie.log("Socket closed.",c),this._cleanup(),this._disconnected=!0,this.emit(Ci.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),Ie.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){Ie.log("Cannot send heartbeat, because socket closed");return}const n=JSON.stringify({type:os.Heartbeat});this._socket.send(n),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){const n=[...this._messagesQueue];this._messagesQueue=[];for(const i of n)this.send(i)}send(n){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(n);return}if(!n.type){this.emit(Ci.Error,"Invalid message");return}if(!this._wsOpen())return;const i=JSON.stringify(n);this._socket.send(i)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class Jg{constructor(n){this.connection=n}startConnection(n){const i=this._startPeerConnection();if(this.connection.peerConnection=i,this.connection.type===ji.Media&&n._stream&&this._addTracksToConnection(n._stream,i),n.originator){const l=this.connection,c={ordered:!!n.reliable},u=i.createDataChannel(l.label,c);l._initializeDataChannel(u),this._makeOffer()}else this.handleSDP("OFFER",n.sdp)}_startPeerConnection(){Ie.log("Creating RTCPeerConnection.");const n=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(n),n}_setupListeners(n){const i=this.connection.peer,l=this.connection.connectionId,c=this.connection.type,u=this.connection.provider;Ie.log("Listening for ICE candidates."),n.onicecandidate=_=>{!_.candidate||!_.candidate.candidate||(Ie.log(`Received ICE candidates for ${i}:`,_.candidate),u.socket.send({type:os.Candidate,payload:{candidate:_.candidate,type:c,connectionId:l},dst:i}))},n.oniceconnectionstatechange=()=>{switch(n.iceConnectionState){case"failed":Ie.log("iceConnectionState is failed, closing connections to "+i),this.connection.emitError(Jf.NegotiationFailed,"Negotiation of connection to "+i+" failed."),this.connection.close();break;case"closed":Ie.log("iceConnectionState is closed, closing connections to "+i),this.connection.emitError(Jf.ConnectionClosed,"Connection to "+i+" closed."),this.connection.close();break;case"disconnected":Ie.log("iceConnectionState changed to disconnected on the connection with "+i);break;case"completed":n.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",n.iceConnectionState)},Ie.log("Listening for data channel"),n.ondatachannel=_=>{Ie.log("Received data channel");const g=_.channel;u.getConnection(i,l)._initializeDataChannel(g)},Ie.log("Listening for remote stream"),n.ontrack=_=>{Ie.log("Received remote stream");const g=_.streams[0],h=u.getConnection(i,l);if(h.type===ji.Media){const m=h;this._addStreamToMediaConnection(g,m)}}}cleanup(){Ie.log("Cleaning up PeerConnection to "+this.connection.peer);const n=this.connection.peerConnection;if(!n)return;this.connection.peerConnection=null,n.onicecandidate=n.oniceconnectionstatechange=n.ondatachannel=n.ontrack=()=>{};const i=n.signalingState!=="closed";let l=!1;const c=this.connection.dataChannel;c&&(l=!!c.readyState&&c.readyState!=="closed"),(i||l)&&n.close()}async _makeOffer(){const n=this.connection.peerConnection,i=this.connection.provider;try{const l=await n.createOffer(this.connection.options.constraints);Ie.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(l.sdp=this.connection.options.sdpTransform(l.sdp)||l.sdp);try{await n.setLocalDescription(l),Ie.log("Set localDescription:",l,`for:${this.connection.peer}`);let c={sdp:l,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===ji.Data){const u=this.connection;c={...c,label:u.label,reliable:u.reliable,serialization:u.serialization}}i.socket.send({type:os.Offer,payload:c,dst:this.connection.peer})}catch(c){c!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(i.emitError(Pn.WebRTC,c),Ie.log("Failed to setLocalDescription, ",c))}}catch(l){i.emitError(Pn.WebRTC,l),Ie.log("Failed to createOffer, ",l)}}async _makeAnswer(){const n=this.connection.peerConnection,i=this.connection.provider;try{const l=await n.createAnswer();Ie.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(l.sdp=this.connection.options.sdpTransform(l.sdp)||l.sdp);try{await n.setLocalDescription(l),Ie.log("Set localDescription:",l,`for:${this.connection.peer}`),i.socket.send({type:os.Answer,payload:{sdp:l,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(c){i.emitError(Pn.WebRTC,c),Ie.log("Failed to setLocalDescription, ",c)}}catch(l){i.emitError(Pn.WebRTC,l),Ie.log("Failed to create answer, ",l)}}async handleSDP(n,i){i=new RTCSessionDescription(i);const l=this.connection.peerConnection,c=this.connection.provider;Ie.log("Setting remote description",i);const u=this;try{await l.setRemoteDescription(i),Ie.log(`Set remoteDescription:${n} for:${this.connection.peer}`),n==="OFFER"&&await u._makeAnswer()}catch(_){c.emitError(Pn.WebRTC,_),Ie.log("Failed to setRemoteDescription, ",_)}}async handleCandidate(n){Ie.log("handleCandidate:",n);try{await this.connection.peerConnection.addIceCandidate(n),Ie.log(`Added ICE candidate for:${this.connection.peer}`)}catch(i){this.connection.provider.emitError(Pn.WebRTC,i),Ie.log("Failed to handleCandidate, ",i)}}_addTracksToConnection(n,i){if(Ie.log(`add tracks from stream ${n.id} to peer connection`),!i.addTrack)return Ie.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");n.getTracks().forEach(l=>{i.addTrack(l,n)})}_addStreamToMediaConnection(n,i){Ie.log(`add stream ${n.id} to media connection ${i.connectionId}`),i.addStream(n)}}class ey extends Sh.EventEmitter{emitError(n,i){Ie.error("Error:",i),this.emit("error",new H5(`${n}`,i))}}class H5 extends Error{constructor(n,i){typeof i=="string"?super(i):(super(),Object.assign(this,i)),this.type=n}}class ty extends ey{get open(){return this._open}constructor(n,i,l){super(),this.peer=n,this.provider=i,this.options=l,this._open=!1,this.metadata=l.metadata}}var lh;const cr=class cr extends ty{get type(){return ji.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(n,i,l){super(n,i,l),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||cr.ID_PREFIX+bs.randomToken(),this._negotiator=new Jg(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(n){this.dataChannel=n,this.dataChannel.onopen=()=>{Ie.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{Ie.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(n){Ie.log("Receiving stream",n),this._remoteStream=n,super.emit("stream",n)}handleMessage(n){const i=n.type,l=n.payload;switch(n.type){case os.Answer:this._negotiator.handleSDP(i,l.sdp),this._open=!0;break;case os.Candidate:this._negotiator.handleCandidate(l.candidate);break;default:Ie.warn(`Unrecognized message type:${i} from peer:${this.peer}`);break}}answer(n,i={}){if(this._localStream){Ie.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=n,i&&i.sdpTransform&&(this.options.sdpTransform=i.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:n});const l=this.provider._getMessages(this.connectionId);for(const c of l)this.handleMessage(c);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}};lh=new WeakMap,Ql(cr,lh,cr.ID_PREFIX="mc_");let du=cr;class Y5{constructor(n){this._options=n}_buildRequest(n){const i=this._options.secure?"https":"http",{host:l,port:c,path:u,key:_}=this._options,g=new URL(`${i}://${l}:${c}${u}${_}/${n}`);return g.searchParams.set("ts",`${Date.now()}${Math.random()}`),g.searchParams.set("version",Zg),fetch(g.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const n=await this._buildRequest("id");if(n.status!==200)throw new Error(`Error. Status:${n.status}`);return n.text()}catch(n){Ie.error("Error retrieving ID",n);let i="";throw this._options.path==="/"&&this._options.host!==bs.CLOUD_HOST&&(i=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+i)}}async listAllPeers(){try{const n=await this._buildRequest("peers");if(n.status!==200){if(n.status===401){let i="";throw this._options.host===bs.CLOUD_HOST?i="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":i="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+i)}throw new Error(`Error. Status:${n.status}`)}return n.json()}catch(n){throw Ie.error("Error retrieving list peers",n),new Error("Could not get list peers from the server."+n)}}}var rh,ch;const Zi=class Zi extends ty{get type(){return ji.Data}constructor(n,i,l){super(n,i,l),this.connectionId=this.options.connectionId||Zi.ID_PREFIX+Vg(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new Jg(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(n){this.dataChannel=n,this.dataChannel.onopen=()=>{Ie.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=i=>{Ie.log(`DC#${this.connectionId} dc onmessage:`,i.data)},this.dataChannel.onclose=()=>{Ie.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(n){if(n!=null&&n.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(n,i=!1){if(!this.open){this.emitError(kh.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(n,i)}async handleMessage(n){const i=n.payload;switch(n.type){case os.Answer:await this._negotiator.handleSDP(n.type,i.sdp);break;case os.Candidate:await this._negotiator.handleCandidate(i.candidate);break;default:Ie.warn("Unrecognized message type:",n.type,"from peer:",this.peer);break}}};rh=new WeakMap,ch=new WeakMap,Ql(Zi,rh,Zi.ID_PREFIX="dc_"),Ql(Zi,ch,Zi.MAX_BUFFERED_AMOUNT=8388608);let fu=Zi;class Ch extends fu{get bufferSize(){return this._bufferSize}_initializeDataChannel(n){super._initializeDataChannel(n),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",i=>this._handleDataMessage(i))}_bufferedSend(n){(this._buffering||!this._trySend(n))&&(this._buffer.push(n),this._bufferSize=this._buffer.length)}_trySend(n){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>fu.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(n)}catch(i){return Ie.error(`DC#:${this.connectionId} Error when sending:`,i),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;const n=this._buffer[0];this._trySend(n)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(n){if(n!=null&&n.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...n){super(...n),this._buffer=[],this._bufferSize=0,this._buffering=!1}}class Tf extends Ch{close(n){super.close(n),this._chunkedData={}}constructor(n,i,l){super(n,i,l),this.chunker=new Qg,this.serialization=xu.Binary,this._chunkedData={}}_handleDataMessage({data:n}){const i=mg(n),l=i.__peerData;if(l){if(l.type==="close"){this.close();return}this._handleChunk(i);return}this.emit("data",i)}_handleChunk(n){const i=n.__peerData,l=this._chunkedData[i]||{data:[],count:0,total:n.total};if(l.data[n.n]=new Uint8Array(n.data),l.count++,this._chunkedData[i]=l,l.total===l.count){delete this._chunkedData[i];const c=O5(l.data);this._handleDataMessage({data:c})}}_send(n,i){const l=pg(n);if(l instanceof Promise)return this._send_blob(l);if(!i&&l.byteLength>this.chunker.chunkedMTU){this._sendChunks(l);return}this._bufferedSend(l)}async _send_blob(n){const i=await n;if(i.byteLength>this.chunker.chunkedMTU){this._sendChunks(i);return}this._bufferedSend(i)}_sendChunks(n){const i=this.chunker.chunk(n);Ie.log(`DC#${this.connectionId} Try to send ${i.length} chunks...`);for(const l of i)this.send(l,!0)}}class X5 extends Ch{_handleDataMessage({data:n}){super.emit("data",n)}_send(n,i){this._bufferedSend(n)}constructor(...n){super(...n),this.serialization=xu.None}}class G5 extends Ch{_handleDataMessage({data:n}){const i=this.parse(this.decoder.decode(n)),l=i.__peerData;if(l&&l.type==="close"){this.close();return}this.emit("data",i)}_send(n,i){const l=this.encoder.encode(this.stringify(n));if(l.byteLength>=bs.chunkedMTU){this.emitError(kh.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(l)}constructor(...n){super(...n),this.serialization=xu.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}}var uh;const ur=class ur extends ey{get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const n=Object.create(null);for(const[i,l]of this._connections)n[i]=l;return n}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(n,i){super(),this._serializers={raw:X5,json:G5,binary:Tf,"binary-utf8":Tf,default:Tf},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let l;if(n&&n.constructor==Object?i=n:n&&(l=n.toString()),i={debug:0,host:bs.CLOUD_HOST,port:bs.CLOUD_PORT,path:"/",key:ur.DEFAULT_KEY,token:bs.randomToken(),config:bs.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...i},this._options=i,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==bs.CLOUD_HOST?this._options.secure=bs.isSecure():this._options.host==bs.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&Ie.setLogFunction(this._options.logFunction),Ie.logLevel=this._options.debug||0,this._api=new Y5(i),this._socket=this._createServerConnection(),!bs.supports.audioVideo&&!bs.supports.data){this._delayedAbort(Pn.BrowserIncompatible,"The current browser does not support WebRTC");return}if(l&&!bs.validateId(l)){this._delayedAbort(Pn.InvalidID,`ID "${l}" is invalid`);return}l?this._initialize(l):this._api.retrieveId().then(c=>this._initialize(c)).catch(c=>this._abort(Pn.ServerError,c))}_createServerConnection(){const n=new U5(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return n.on(Ci.Message,i=>{this._handleMessage(i)}),n.on(Ci.Error,i=>{this._abort(Pn.SocketError,i)}),n.on(Ci.Disconnected,()=>{this.disconnected||(this.emitError(Pn.Network,"Lost connection to server."),this.disconnect())}),n.on(Ci.Close,()=>{this.disconnected||this._abort(Pn.SocketClosed,"Underlying socket is already closed.")}),n}_initialize(n){this._id=n,this.socket.start(n,this._options.token)}_handleMessage(n){const i=n.type,l=n.payload,c=n.src;switch(i){case os.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case os.Error:this._abort(Pn.ServerError,l.msg);break;case os.IdTaken:this._abort(Pn.UnavailableID,`ID "${this.id}" is taken`);break;case os.InvalidKey:this._abort(Pn.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case os.Leave:Ie.log(`Received leave message from ${c}`),this._cleanupPeer(c),this._connections.delete(c);break;case os.Expire:this.emitError(Pn.PeerUnavailable,`Could not connect to peer ${c}`);break;case os.Offer:{const u=l.connectionId;let _=this.getConnection(c,u);if(_&&(_.close(),Ie.warn(`Offer received for existing Connection ID:${u}`)),l.type===ji.Media){const h=new du(c,this,{connectionId:u,_payload:l,metadata:l.metadata});_=h,this._addConnection(c,_),this.emit("call",h)}else if(l.type===ji.Data){const h=new this._serializers[l.serialization](c,this,{connectionId:u,_payload:l,metadata:l.metadata,label:l.label,serialization:l.serialization,reliable:l.reliable});_=h,this._addConnection(c,_),this.emit("connection",h)}else{Ie.warn(`Received malformed connection type:${l.type}`);return}const g=this._getMessages(u);for(const h of g)_.handleMessage(h);break}default:{if(!l){Ie.warn(`You received a malformed message from ${c} of type ${i}`);return}const u=l.connectionId,_=this.getConnection(c,u);_&&_.peerConnection?_.handleMessage(n):u?this._storeMessage(u,n):Ie.warn("You received an unrecognized message:",n);break}}}_storeMessage(n,i){this._lostMessages.has(n)||this._lostMessages.set(n,[]),this._lostMessages.get(n).push(i)}_getMessages(n){const i=this._lostMessages.get(n);return i?(this._lostMessages.delete(n),i):[]}connect(n,i={}){if(i={serialization:"default",...i},this.disconnected){Ie.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(Pn.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}const l=new this._serializers[i.serialization](n,this,i);return this._addConnection(n,l),l}call(n,i,l={}){if(this.disconnected){Ie.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(Pn.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!i){Ie.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}const c=new du(n,this,{...l,_stream:i});return this._addConnection(n,c),c}_addConnection(n,i){Ie.log(`add connection ${i.type}:${i.connectionId} to peerId:${n}`),this._connections.has(n)||this._connections.set(n,[]),this._connections.get(n).push(i)}_removeConnection(n){const i=this._connections.get(n.peer);if(i){const l=i.indexOf(n);l!==-1&&i.splice(l,1)}this._lostMessages.delete(n.connectionId)}getConnection(n,i){const l=this._connections.get(n);if(!l)return null;for(const c of l)if(c.connectionId===i)return c;return null}_delayedAbort(n,i){setTimeout(()=>{this._abort(n,i)},0)}_abort(n,i){Ie.error("Aborting!"),this.emitError(n,i),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(Ie.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(const n of this._connections.keys())this._cleanupPeer(n),this._connections.delete(n);this.socket.removeAllListeners()}_cleanupPeer(n){const i=this._connections.get(n);if(i)for(const l of i)l.close()}disconnect(){if(this.disconnected)return;const n=this.id;Ie.log(`Disconnect peer with ID:${n}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=n,this._id=null,this.emit("disconnected",n)}reconnect(){if(this.disconnected&&!this.destroyed)Ie.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)Ie.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(n=i=>{}){this._api.listAllPeers().then(i=>n(i)).catch(i=>this._abort(Pn.ServerError,i))}};uh=new WeakMap,Ql(ur,uh,ur.DEFAULT_KEY="peerjs");let eh=ur;var ny=eh;const sy="soccer-game-room-";class F5{constructor(){Ye(this,"peer",null);Ye(this,"connection",null);Ye(this,"roomId");Ye(this,"onConnectionStateChange");Ye(this,"onInputReceived");this.roomId=Math.floor(1e3+Math.random()*9e3).toString()}init(n){n&&(this.roomId=n);const i=`${sy}${this.roomId}`;return new Promise((l,c)=>{try{this.peer=new ny(i,{debug:1}),this.peer.on("open",u=>{console.log("[HostPeerService] Host Peer open with ID:",u),l(this.roomId)}),this.peer.on("connection",u=>{console.log("[HostPeerService] Client connected:",u.peer),this.connection=u,this.onConnectionStateChange&&this.onConnectionStateChange(!0),u.on("data",_=>{this.onInputReceived&&_&&_.type==="CONTROLLER_INPUT"&&this.onInputReceived(_.input)}),u.on("close",()=>{console.log("[HostPeerService] Client connection closed"),this.connection=null,this.onConnectionStateChange&&this.onConnectionStateChange(!1)}),u.on("error",_=>{console.error("[HostPeerService] Connection error:",_),this.connection=null,this.onConnectionStateChange&&this.onConnectionStateChange(!1)})}),this.peer.on("error",u=>{console.error("[HostPeerService] Peer error:",u),c(u)})}catch(u){c(u)}})}destroy(){this.connection&&(this.connection.close(),this.connection=null),this.peer&&(this.peer.destroy(),this.peer=null)}}class W5{constructor(){Ye(this,"peer",null);Ye(this,"connection",null);Ye(this,"onConnectionStateChange")}connectToHost(n){const i=`${sy}${n}`;return new Promise((l,c)=>{try{this.peer=new ny({debug:1}),this.peer.on("open",()=>{if(console.log("[ControllerPeerService] Controller Peer open, connecting to host:",i),!this.peer)return;const u=this.peer.connect(i,{reliable:!0});this.connection=u,u.on("open",()=>{console.log("[ControllerPeerService] Connected to host!"),this.onConnectionStateChange&&this.onConnectionStateChange(!0),l(!0)}),u.on("close",()=>{console.log("[ControllerPeerService] Host connection closed"),this.connection=null,this.onConnectionStateChange&&this.onConnectionStateChange(!1)}),u.on("error",_=>{console.error("[ControllerPeerService] Connection error:",_),this.connection=null,this.onConnectionStateChange&&this.onConnectionStateChange(!1),c(_)})}),this.peer.on("error",u=>{console.error("[ControllerPeerService] Peer error:",u),c(u)})}catch(u){c(u)}})}sendInput(n){this.connection&&this.connection.open&&this.connection.send({type:"CONTROLLER_INPUT",input:n})}destroy(){this.connection&&(this.connection.close(),this.connection=null),this.peer&&(this.peer.destroy(),this.peer=null)}}const Fs=2200,Ws=1350,Uc=.92,q5=()=>{const o=b.useRef(null),{gamepads:n}=Db(),[i,l]=b.useState({width:window.innerWidth,height:window.innerHeight}),[c,u]=b.useState(!0),[_,g]=b.useState(!1),h=b.useRef(!1),[m,p]=b.useState("8492"),[y,v]=b.useState(!1),C=b.useRef(null),k=b.useRef(null),M=b.useRef({x:Fs*.5,y:Ws*.5}),L=b.useRef(new Ob(Fs,Ws)),B=b.useRef(new Lb(Fs*.5,Ws*.5)),J=b.useRef(new zb("1v1_local")),G=b.useRef([new jf("p1","Player 1 (Kamu)","home",0,"#06b6d4",Fs*.35,Ws*.5),new jf("p2","Player 2 (Rekan)","home",1,"#34d399",Fs*.35,Ws*.35),new jf("p3","Musuh (P3)","away",null,"#f59e0b",Fs*.46,Ws*.5)]),[z,de]=b.useState(J.current.state);b.useEffect(()=>{const xe=new F5;return C.current=xe,xe.onConnectionStateChange=ue=>{v(ue)},xe.onInputReceived=ue=>{var K,Xe,_e,Se,N,ce,W,be,De,A;ue&&(k.current={index:99,id:"Smartphone Remote Controller",connected:!0,axes:{leftStickX:((K=ue.axes)==null?void 0:K.leftStickX)||0,leftStickY:((Xe=ue.axes)==null?void 0:Xe.leftStickY)||0,rightStickX:0,rightStickY:0},buttons:{a:((_e=ue.buttons)==null?void 0:_e.a)||!1,b:((Se=ue.buttons)==null?void 0:Se.b)||!1,x:((N=ue.buttons)==null?void 0:N.x)||!1,y:((ce=ue.buttons)==null?void 0:ce.y)||!1,lb:((W=ue.buttons)==null?void 0:W.lb)||!1,rb:((be=ue.buttons)==null?void 0:be.rb)||!1,lt:0,rt:((De=ue.buttons)==null?void 0:De.rt)||0,back:!1,start:((A=ue.buttons)==null?void 0:A.start)||!1,lsClick:!1,rsClick:!1}})},xe.init().then(ue=>{p(ue)}),()=>{xe.destroy()}},[]),b.useEffect(()=>{const xe=()=>{l({width:window.innerWidth,height:window.innerHeight})},ue=K=>{(K.key==="Control"||K.ctrlKey)&&g(Xe=>!Xe)};return window.addEventListener("resize",xe),window.addEventListener("keydown",ue),()=>{window.removeEventListener("resize",xe),window.removeEventListener("keydown",ue)}},[]);const he=b.useCallback(()=>{B.current.reset(Fs*.46,Ws*.5),G.current[0].reset(Fs*.35,Ws*.5),G.current[1].reset(Fs*.35,Ws*.35);const xe=G.current[2];xe.reset(Fs*.46,Ws*.5),xe.hasPossession=!0,B.current.attachToPlayer(xe.pos,xe.facingAngle,xe.radius,xe.vel,"p3"),M.current={x:Fs*.5,y:Ws*.5}},[]);b.useEffect(()=>{he()},[he]);const F=b.useCallback(()=>{J.current.resetMatch(),he(),de({...J.current.state})},[he]),le=b.useCallback(xe=>{J.current.setMode(xe),he(),de({...J.current.state})},[he]),ge=b.useCallback(()=>{u(xe=>!xe)},[]);return Nb(xe=>{const ue=o.current;if(!ue)return;const K=ue.getContext("2d");if(!K)return;const Xe=L.current,_e=B.current,Se=J.current,N=G.current,ce=N[0],W=N[1],be=N[2];if(n[0]){const Qe=n[0].buttons.back;Qe&&!h.current&&g($e=>!$e),h.current=Qe}if(Se.update(xe,_e,Xe)&&he(),Se.state.state!=="GAME_OVER"){N.forEach($e=>{const pt=N.filter(ut=>ut.team===$e.team&&ut.id!==$e.id),Je=N.filter(ut=>ut.team!==$e.team);if($e.id==="p1"&&k.current&&y){const ut=k.current,{toggleHUDRequested:At}=$e.updateFromGamepad(ut,_e,Xe,pt,Je);At&&u(dn=>!dn)}else if($e.controllerIndex!==null&&n[$e.controllerIndex]){const ut=n[$e.controllerIndex],{toggleHUDRequested:At}=$e.updateFromGamepad(ut,_e,Xe,pt,Je);At&&u(dn=>!dn)}else $e.id==="p3"?$e.updateEnemyBotAI(_e,Xe,Je):$e.updatePassiveReception(_e,Xe)});for(let $e=0;$e<N.length;$e++)for(let pt=$e+1;pt<N.length;pt++){const Je=N[$e],ut=N[pt],At=ut.pos.x-Je.pos.x,dn=ut.pos.y-Je.pos.y,bn=Math.hypot(At,dn)||1,mn=Je.radius+ut.radius;if(bn<mn){const Q=mn-bn,Me=At/bn,Fe=dn/bn;Je.pos.x-=Me*Q*.5,Je.pos.y-=Fe*Q*.5,ut.pos.x+=Me*Q*.5,ut.pos.y+=Fe*Q*.5;const Ve=Je.vel.x-ut.vel.x,nt=Je.vel.y-ut.vel.y,Ue=Me*Ve+Fe*nt;Ue>0&&(Je.vel.x-=Ue*Me*.5,Je.vel.y-=Ue*Fe*.5,ut.vel.x+=Ue*Me*.5,ut.vel.y+=Ue*Fe*.5)}}N.forEach($e=>{const pt=N.find(Je=>Je.id!==$e.id&&Je.hasPossession);if(pt){const Je=Math.hypot($e.pos.x-pt.pos.x,$e.pos.y-pt.pos.y),ut=Math.hypot($e.pos.x-_e.pos.x,$e.pos.y-_e.pos.y),At=$e.radius+pt.radius+18,dn=$e.radius+pt.radius+75,bn=Je<At||ut<$e.radius+_e.radius+18,mn=$e.isTackling&&(Je<dn||ut<dn);(bn||mn)&&(pt.skillDodgeInvincibleTimer>0?(pt.triggerFeedback("🔥 GOCEK SUCCESS!"),$e.stumbleTimer=.55,$e.isTackling=!1,$e.triggerFeedback("❌ TACKLE MISSED!")):(pt.hasPossession=!1,$e.hasPossession=!0,_e.releaseTimer=0,_e.homingTargetPlayer=null,_e.throughPassTargetPos=null,_e.attachToPlayer($e.pos,$e.facingAngle,$e.radius,$e.vel,$e.id),$e.triggerFeedback("⚡ BOLA DIREBUT!"),pt.triggerFeedback("💥 REBUT!"),$e.isTackling=!1))}}),N.forEach($e=>{!$e.hasPossession&&_e.releaseTimer<=0&&_e.checkPlayerCollision($e)});const Qe=y?"📱 HP Remote":"P1 Controller 0";Se.state.debugInputText=`${N[0].debugInputString} | SRC: ${Qe}`,_e.update(xe,Xe)}de({...Se.state});const A=ce.pos.x*.4+(be?be.pos.x*.3:0)+_e.pos.x*.3,Z=ce.pos.y*.4+(be?be.pos.y*.3:0)+_e.pos.y*.3;M.current.x=M.current.x*.88+A*.12,M.current.y=M.current.y*.88+Z*.12;const pe=i.width,je=i.height,qe=pe/(2*Uc),rt=je/(2*Uc),dt=Math.max(qe,Math.min(Fs-qe,M.current.x)),en=Math.max(rt,Math.min(Ws-rt,M.current.y));if(K.clearRect(0,0,pe,je),K.save(),K.translate(pe/2,je/2),K.scale(Uc,Uc),K.translate(-dt,-en),Xe.draw(K),c){const Qe=ce.hasPossession?ce:W.hasPossession?W:null;if(Qe){[140,280,420].forEach((Q,Me)=>{K.strokeStyle=Me===0?"rgba(56, 189, 248, 0.35)":Me===1?"rgba(52, 211, 153, 0.25)":"rgba(168, 85, 247, 0.20)",K.lineWidth=1.5,K.setLineDash([6,6]),K.beginPath(),K.arc(Qe.pos.x,Qe.pos.y,Q,0,Math.PI*2),K.stroke()}),K.setLineDash([]);const Je=Math.PI/3,ut=Qe.facingAngle-Je/2,At=Qe.facingAngle+Je/2,dn=320;K.fillStyle="rgba(6, 182, 212, 0.08)",K.strokeStyle="rgba(6, 182, 212, 0.3)",K.lineWidth=1.5,K.beginPath(),K.moveTo(Qe.pos.x,Qe.pos.y),K.arc(Qe.pos.x,Qe.pos.y,dn,ut,At),K.closePath(),K.fill(),K.stroke();const bn=N.filter(Q=>Q.team===Qe.team&&Q.id!==Qe.id),mn=Qe.findBestPassTarget(bn,Qe.facingAngle);if(mn){const Q=mn.pos.x-Qe.pos.x,Me=mn.pos.y-Qe.pos.y,Fe=Math.hypot(Q,Me)||1;K.strokeStyle="#06b6d4",K.lineWidth=2.5,K.setLineDash([8,6]),K.beginPath(),K.moveTo(Qe.pos.x,Qe.pos.y),K.lineTo(mn.pos.x,mn.pos.y),K.stroke(),K.setLineDash([]);const Ve=Math.floor(Fe/50);K.strokeStyle="#38bdf8",K.lineWidth=2;for(let ct=1;ct<=Ve;ct++){const St=Qe.pos.x+Q/Fe*(ct*50),Ht=Qe.pos.y+Me/Fe*(ct*50),ze=-(Me/Fe)*6,I=Q/Fe*6;K.beginPath(),K.moveTo(St-ze,Ht-I),K.lineTo(St+ze,Ht+I),K.stroke()}const nt=mn.pos.x,Ue=mn.pos.y,Te=22;K.strokeStyle="#34d399",K.lineWidth=2.5,K.beginPath(),K.moveTo(nt-Te,Ue-Te+6),K.lineTo(nt-Te,Ue-Te),K.lineTo(nt-Te+6,Ue-Te),K.moveTo(nt+Te-6,Ue-Te),K.lineTo(nt+Te,Ue-Te),K.lineTo(nt+Te,Ue-Te+6),K.moveTo(nt-Te,Ue+Te-6),K.lineTo(nt-Te,Ue+Te),K.lineTo(nt-Te+6,Ue+Te),K.moveTo(nt+Te-6,Ue+Te),K.lineTo(nt+Te,Ue+Te),K.lineTo(nt+Te,Ue+Te-6),K.stroke()}}if(_e.homingTargetPlayer){const pt=_e.homingTargetPlayer;K.strokeStyle=_e.throughPassTargetPos?"#f59e0b":"#a855f7",K.lineWidth=3,K.setLineDash([4,4]),K.beginPath(),K.moveTo(_e.pos.x,_e.pos.y),K.lineTo(pt.pos.x,pt.pos.y),K.stroke(),K.setLineDash([])}const $e=Math.hypot(_e.vel.x,_e.vel.y);if($e>.2){const pt=Math.min($e*8,40),Je=_e.pos.x+_e.vel.x/$e*pt,ut=_e.pos.y+_e.vel.y/$e*pt;K.strokeStyle="#f59e0b",K.lineWidth=3,K.beginPath(),K.moveTo(_e.pos.x,_e.pos.y),K.lineTo(Je,ut),K.stroke()}}N.forEach(Qe=>Qe.draw(K)),_e.draw(K),K.restore()}),r.jsxs("div",{className:"fixed inset-0 w-screen h-screen overflow-hidden bg-slate-950 flex flex-col items-center justify-center",children:[r.jsx(v5,{matchState:z,showHUD:c,onToggleHUD:ge,onResetMatch:F,onToggleMode:le,peerRoomId:m,isPeerConnected:y}),r.jsx("canvas",{ref:o,width:i.width,height:i.height,className:`w-full h-full block ${_?"cursor-default":"cursor-none"}`})]})},Q5=()=>{const[o,n]=b.useState(""),[i,l]=b.useState(!1),[c,u]=b.useState(!1),[_,g]=b.useState(""),h=b.useRef(null),[m,p]=b.useState(null),[y,v]=b.useState({x:0,y:0}),[C,k]=b.useState(!1),M=b.useRef({leftStickX:0,leftStickY:0,a:!1,b:!1,x:!1,y:!1,lb:!1,rb:!1,rt:0,start:!1}),L=()=>{var le;try{const ge=document.documentElement;ge.requestFullscreen?ge.requestFullscreen().catch(()=>{}):ge.webkitRequestFullscreen&&ge.webkitRequestFullscreen(),(le=window.screen)!=null&&le.orientation&&"lock"in window.screen.orientation&&window.screen.orientation.lock("landscape").catch(()=>{})}catch{}};b.useEffect(()=>{const ge=new URLSearchParams(window.location.search).get("room");ge&&(n(ge),J(ge))},[]);const B=(le=20)=>{if(typeof window<"u"&&"vibrate"in navigator)try{navigator.vibrate(le)}catch{}},J=async le=>{const ge=le||o;if(!ge)return;u(!0),g(""),L(),h.current||(h.current=new W5);const xe=h.current;xe.onConnectionStateChange=ue=>{l(ue),u(!1),ue&&B(50)};try{await xe.connectToHost(ge)}catch(ue){console.error("Failed to connect:",ue),g("Gagal terhubung ke Laptop. Pastikan Room Code benar."),u(!1)}},G=b.useCallback(()=>{h.current&&i&&h.current.sendInput({axes:{leftStickX:M.current.leftStickX,leftStickY:M.current.leftStickY,rightStickX:0,rightStickY:0},buttons:{a:M.current.a,b:M.current.b,x:M.current.x,y:M.current.y,lb:M.current.lb,rb:M.current.rb,lt:0,rt:M.current.rt,back:!1,start:M.current.start,lsClick:!1,rsClick:!1}})},[i]),z=le=>{le.preventDefault(),L();const ge=le.clientX,xe=le.clientY;p({x:ge,y:xe}),v({x:0,y:0}),k(!0)},de=le=>{if(!C||!m)return;le.preventDefault();const ge=le.clientX-m.x,xe=le.clientY-m.y,ue=Math.hypot(ge,xe),K=55,Xe=Math.min(ue,K),_e=Math.atan2(xe,ge),Se=Math.cos(_e)*Xe,N=Math.sin(_e)*Xe;v({x:Se,y:N}),M.current.leftStickX=Number((Se/K).toFixed(2)),M.current.leftStickY=Number((N/K).toFixed(2)),G()},he=()=>{k(!1),p(null),v({x:0,y:0}),M.current.leftStickX=0,M.current.leftStickY=0,G()},F=(le,ge)=>{ge&&B(22),le==="rt"?M.current.rt=ge?1:0:M.current[le]=ge,G()};return i?r.jsxs("div",{className:"fixed inset-0 bg-[#4e9a51] text-slate-100 select-none touch-none overflow-hidden font-sans w-screen h-screen",children:[r.jsxs("div",{className:"absolute top-2 left-4 right-4 flex items-center justify-between pointer-events-none z-30",children:[r.jsxs("div",{className:"flex items-center gap-2 bg-black/40 border border-white/20 px-3.5 py-1 rounded-full text-white text-[11px] font-bold shadow-lg backdrop-blur-md",children:[r.jsx(r5,{className:"w-3.5 h-3.5 animate-pulse text-emerald-300"}),r.jsxs("span",{children:["CONNECTED (",o,")"]})]}),r.jsxs("div",{className:"flex items-center gap-2 pointer-events-auto",children:[r.jsx("button",{onClick:L,className:"w-9 h-9 rounded-xl bg-black/40 border border-white/30 text-white flex items-center justify-center hover:bg-black/60 active:scale-90 transition shadow-lg backdrop-blur-md",children:r.jsx(Qb,{className:"w-4 h-4 text-white"})}),r.jsx("button",{onClick:()=>F("start",!0),onPointerUp:()=>F("start",!1),className:"w-9 h-9 rounded-xl bg-black/40 border border-white/30 text-white flex items-center justify-center hover:bg-black/60 active:scale-90 transition shadow-lg backdrop-blur-md",children:r.jsx(t5,{className:"w-4 h-4 text-white"})})]})]}),r.jsx("div",{onPointerDown:z,onPointerMove:de,onPointerUp:he,onPointerCancel:he,className:"absolute top-0 left-0 w-1/2 h-full z-10 touch-none",children:m?r.jsxs("div",{className:"absolute w-40 h-40 rounded-full bg-[#1b431d]/70 border-4 border-[#2b662d] flex items-center justify-center shadow-2xl pointer-events-none -translate-x-1/2 -translate-y-1/2",style:{left:`${m.x}px`,top:`${m.y}px`},children:[r.jsx("div",{className:"w-20 h-20 rounded-full border border-white/20 pointer-events-none"}),r.jsx("div",{className:"w-14 h-14 rounded-full bg-gradient-to-b from-slate-100 to-slate-300 border-2 border-slate-400 shadow-2xl absolute pointer-events-none transition-transform duration-75 flex items-center justify-center",style:{transform:`translate(${y.x}px, ${y.y}px)`},children:r.jsx("div",{className:"w-10 h-10 rounded-full border-2 border-slate-300/80 bg-slate-200/50"})})]}):r.jsx("div",{className:"absolute left-8 bottom-8 w-32 h-32 rounded-full bg-[#1b431d]/40 border-4 border-[#2b662d]/60 flex items-center justify-center opacity-40 pointer-events-none",children:r.jsx("div",{className:"w-12 h-12 rounded-full bg-slate-200/80 border-2 border-slate-300"})})}),r.jsx("div",{className:"absolute top-0 right-0 w-1/2 h-full z-20 flex items-end justify-end pb-3 pr-3 pointer-events-none",children:r.jsxs("div",{className:"relative w-[241px] h-[256px] pointer-events-auto",children:[r.jsxs("div",{onPointerDown:()=>F("a",!0),onPointerUp:()=>F("a",!1),className:"absolute bottom-0 left-0 w-[80px] h-[80px] rounded-full bg-[#3d7a40]/80 border-2 border-[#6cb870] shadow-xl backdrop-blur-sm active:scale-90 transition flex flex-col items-center justify-center cursor-pointer select-none",children:[r.jsx("div",{className:"absolute top-1 text-[8px] text-white/90",children:"▲"}),r.jsx("div",{className:"absolute bottom-1 text-[8px] text-white/90",children:"▼"}),r.jsx("div",{className:"absolute left-1 text-[8px] text-white/90",children:"◄"}),r.jsx("div",{className:"absolute right-1 text-[8px] text-white/90",children:"►"}),r.jsx("span",{className:"text-white font-bold text-sm",children:"Pass"})]}),r.jsxs("div",{onPointerDown:()=>F("y",!0),onPointerUp:()=>F("y",!1),className:"absolute top-[68px] left-[44px] w-[80px] h-[80px] rounded-full bg-[#3d7a40]/80 border-2 border-[#6cb870] shadow-xl backdrop-blur-sm active:scale-90 transition flex flex-col items-center justify-center cursor-pointer select-none",children:[r.jsx("div",{className:"absolute top-1 text-[8px] text-white/90",children:"▲"}),r.jsx("div",{className:"absolute bottom-1 text-[8px] text-white/90",children:"▼"}),r.jsx("div",{className:"absolute left-1 text-[8px] text-white/90",children:"◄"}),r.jsx("div",{className:"absolute right-1 text-[8px] text-white/90",children:"►"}),r.jsx("span",{className:"text-white font-bold text-xs",children:"Through"}),r.jsx("span",{className:"text-amber-300 text-[8px] font-extrabold",children:"(Gocek)"})]}),r.jsx("div",{onPointerDown:()=>F("x",!0),onPointerUp:()=>F("x",!1),className:"absolute top-0 right-0 w-[96px] h-[96px] rounded-full bg-[#3d7a40]/80 border-2 border-[#6cb870] shadow-2xl backdrop-blur-sm active:scale-90 transition flex flex-col items-center justify-center cursor-pointer select-none",children:r.jsxs("div",{className:"w-[84px] h-[84px] rounded-full border border-white/25 flex flex-col items-center justify-center pointer-events-none",children:[r.jsx("span",{className:"text-white font-bold text-base",children:"Clear"}),r.jsx("span",{className:"text-cyan-300 text-[9px] font-black uppercase tracking-wider",children:"(Tackle)"})]})}),r.jsx("div",{onPointerDown:()=>F("rt",!0),onPointerUp:()=>F("rt",!1),className:"absolute bottom-0 right-0 w-[104px] h-[104px] rounded-full bg-[#3d7a40]/80 border-2 border-[#6cb870] shadow-2xl backdrop-blur-sm active:scale-90 transition flex flex-col items-center justify-center cursor-pointer select-none",children:r.jsx("div",{className:"w-[92px] h-[92px] rounded-full border border-white/25 flex flex-col items-center justify-center pointer-events-none",children:r.jsx("span",{className:"text-white font-bold text-base",children:"Dash"})})})]})})]}):r.jsx("div",{className:"fixed inset-0 bg-[#4e9a51] text-slate-100 flex flex-col items-center justify-center p-6 font-sans select-none",children:r.jsxs("div",{className:"max-w-sm w-full bg-[#1b431d]/90 border border-green-300/30 rounded-3xl p-6 shadow-2xl flex flex-col items-center gap-5 text-center backdrop-blur-md",children:[r.jsx("div",{className:"w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white text-2xl",children:"⚽"}),r.jsxs("div",{children:[r.jsx("h1",{className:"text-xl font-extrabold tracking-tight text-white",children:"Football Mobile Pad"}),r.jsx("p",{className:"text-xs text-green-100/80 mt-1",children:"Masukkan 4-Digit Room Code dari Laptop"})]}),r.jsxs("div",{className:"w-full flex flex-col gap-3",children:[r.jsx("input",{type:"text",maxLength:4,value:o,onChange:le=>n(le.target.value.toUpperCase()),placeholder:"ROOM CODE (misal 8492)",className:"w-full text-center tracking-widest text-2xl font-mono font-black py-3 rounded-2xl bg-black/40 border border-white/30 text-emerald-300 focus:outline-none focus:border-white"}),_&&r.jsx("p",{className:"text-xs text-red-300 font-semibold",children:_}),r.jsx("button",{onClick:()=>J(),disabled:c||o.length<4,className:"w-full py-3.5 bg-gradient-to-r from-emerald-400 to-green-300 text-slate-950 font-extrabold rounded-2xl text-sm shadow-xl disabled:opacity-50 transition cursor-pointer flex items-center justify-center gap-2",children:c?r.jsxs(r.Fragment,{children:[r.jsx(s5,{className:"w-4 h-4 animate-spin"}),r.jsx("span",{children:"Menghubungkan..."})]}):r.jsx("span",{children:"🎮 Connect Fullscreen Pad"})})]})]})})};var V5=`.styles-module__popup___IhzrD svg[fill=none] {
  fill: none !important;
}
.styles-module__popup___IhzrD svg[fill=none] :not([fill]) {
  fill: none !important;
}

@keyframes styles-module__popupEnter___AuQDN {
  from {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
}
@keyframes styles-module__popupExit___JJKQX {
  from {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
}
@keyframes styles-module__shake___jdbWe {
  0%, 100% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(0);
  }
  20% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-3px);
  }
  40% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(3px);
  }
  60% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-2px);
  }
  80% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(2px);
  }
}
.styles-module__popup___IhzrD {
  position: fixed;
  transform: translateX(-50%);
  width: 280px;
  padding: 0.75rem 1rem 14px;
  background: #1a1a1a;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  z-index: 100001;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  will-change: transform, opacity;
  opacity: 0;
}
.styles-module__popup___IhzrD.styles-module__enter___L7U7N {
  animation: styles-module__popupEnter___AuQDN 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w {
  opacity: 1;
  transform: translateX(-50%) scale(1) translateY(0);
}
.styles-module__popup___IhzrD.styles-module__exit___5eGjE {
  animation: styles-module__popupExit___JJKQX 0.15s ease-in forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w.styles-module__shake___jdbWe {
  animation: styles-module__shake___jdbWe 0.25s ease-out;
}

.styles-module__header___wWsSi {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5625rem;
}

.styles-module__element___fTV2z {
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}

.styles-module__headerToggle___WpW0b {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  flex: 1;
  min-width: 0;
  text-align: left;
}
.styles-module__headerToggle___WpW0b .styles-module__element___fTV2z {
  flex: 1;
}

.styles-module__chevron___ZZJlR {
  color: rgba(255, 255, 255, 0.5);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  flex-shrink: 0;
}
.styles-module__chevron___ZZJlR.styles-module__expanded___2Hxgv {
  transform: rotate(90deg);
}

.styles-module__stylesWrapper___pnHgy {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.styles-module__stylesWrapper___pnHgy.styles-module__expanded___2Hxgv {
  grid-template-rows: 1fr;
}

.styles-module__stylesInner___YYZe2 {
  overflow: hidden;
}

.styles-module__stylesBlock___VfQKn {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.375rem;
  padding: 0.5rem 0.625rem;
  margin-bottom: 0.5rem;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.6875rem;
  line-height: 1.5;
}

.styles-module__styleLine___1YQiD {
  color: rgba(255, 255, 255, 0.85);
  word-break: break-word;
}

.styles-module__styleProperty___84L1i {
  color: #c792ea;
}

.styles-module__styleValue___q51-h {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__timestamp___Dtpsv {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.35);
  font-variant-numeric: tabular-nums;
  margin-left: 0.5rem;
  flex-shrink: 0;
}

.styles-module__quote___mcMmQ {
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
  padding: 0.4rem 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.25rem;
  line-height: 1.45;
}

.styles-module__textarea___jrSae {
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem 0.625rem;
  font-size: 0.8125rem;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
}
.styles-module__textarea___jrSae:focus {
  border-color: var(--agentation-color-blue);
}
.styles-module__textarea___jrSae.styles-module__green___99l3h:focus {
  border-color: var(--agentation-color-green);
}
.styles-module__textarea___jrSae::placeholder {
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__textarea___jrSae::-webkit-scrollbar {
  width: 6px;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-track {
  background: transparent;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.styles-module__actions___D6x3f {
  display: flex;
  justify-content: flex-end;
  gap: 0.375rem;
  margin-top: 0.5rem;
}

.styles-module__cancel___hRjnL,
.styles-module__submit___K-mIR {
  padding: 0.4rem 0.875rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
}

.styles-module__cancel___hRjnL {
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__cancel___hRjnL:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}

.styles-module__submit___K-mIR {
  color: white;
}
.styles-module__submit___K-mIR:hover:not(:disabled) {
  filter: brightness(0.9);
}
.styles-module__submit___K-mIR:disabled {
  cursor: not-allowed;
}

.styles-module__deleteWrapper___oSjdo {
  margin-right: auto;
}

.styles-module__deleteButton___4VuAE {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease;
}
.styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__deleteButton___4VuAE:active {
  transform: scale(0.92);
}

.styles-module__light___6AaSQ.styles-module__popup___IhzrD {
  background: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.styles-module__light___6AaSQ .styles-module__element___fTV2z {
  color: rgba(0, 0, 0, 0.6);
}
.styles-module__light___6AaSQ .styles-module__timestamp___Dtpsv {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__chevron___ZZJlR {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__stylesBlock___VfQKn {
  background: rgba(0, 0, 0, 0.03);
}
.styles-module__light___6AaSQ .styles-module__styleLine___1YQiD {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__styleProperty___84L1i {
  color: #7c3aed;
}
.styles-module__light___6AaSQ .styles-module__styleValue___q51-h {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__quote___mcMmQ {
  color: rgba(0, 0, 0, 0.55);
  background: rgba(0, 0, 0, 0.04);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae {
  background: rgba(0, 0, 0, 0.03);
  color: #1a1a1a;
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::placeholder {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}`,K5={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let o=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");o||(o=document.createElement("style"),o.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(o)),o.textContent=V5}var sn=K5,Z5=`.icon-transitions-module__iconState___uqK9J {
  transition: opacity 0.2s ease, transform 0.2s ease;
  transform-origin: center;
}

.icon-transitions-module__iconStateFast___HxlMm {
  transition: opacity 0.15s ease, transform 0.15s ease;
  transform-origin: center;
}

.icon-transitions-module__iconFade___nPwXg {
  transition: opacity 0.2s ease;
}

.icon-transitions-module__iconFadeFast___Ofb2t {
  transition: opacity 0.15s ease;
}

.icon-transitions-module__visible___PlHsU {
  opacity: 1 !important;
}

.icon-transitions-module__visibleScaled___8Qog- {
  opacity: 1 !important;
  transform: scale(1);
}

.icon-transitions-module__hidden___ETykt {
  opacity: 0 !important;
}

.icon-transitions-module__hiddenScaled___JXn-m {
  opacity: 0 !important;
  transform: scale(0.8);
}

.icon-transitions-module__sending___uaLN- {
  opacity: 0.5 !important;
  transform: scale(0.8);
}`,J5={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let o=document.getElementById("feedback-tool-styles-components-icon-transitions");o||(o=document.createElement("style"),o.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(o)),o.textContent=Z5}var Jt=J5,e2=({size:o=16})=>r.jsx("svg",{width:o,height:o,viewBox:"0 0 16 16",fill:"none",children:r.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),t2=({size:o=24,style:n={}})=>r.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",style:n,children:[r.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[r.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),r.jsx("defs",{children:r.jsx("clipPath",{id:"clip0_list_sparkle",children:r.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),n2=({size:o=20,...n})=>r.jsxs("svg",{width:o,height:o,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:[r.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),r.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),s2=({size:o=24,copied:n=!1,tint:i})=>r.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",style:i?{color:i,transition:"color 0.3s ease"}:void 0,children:[r.jsxs("g",{className:`${Jt.iconState} ${n?Jt.hiddenScaled:Jt.visibleScaled}`,children:[r.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),r.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),r.jsxs("g",{className:`${Jt.iconState} ${n?Jt.visibleScaled:Jt.hiddenScaled}`,children:[r.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),o2=({size:o=24,state:n="idle"})=>{const i=n==="idle",l=n==="sent",c=n==="failed",u=n==="sending";return r.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",children:[r.jsx("g",{className:`${Jt.iconStateFast} ${i?Jt.visibleScaled:u?Jt.sending:Jt.hiddenScaled}`,children:r.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),r.jsxs("g",{className:`${Jt.iconStateFast} ${l?Jt.visibleScaled:Jt.hiddenScaled}`,children:[r.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),r.jsxs("g",{className:`${Jt.iconStateFast} ${c?Jt.visibleScaled:Jt.hiddenScaled}`,children:[r.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),r.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},i2=({size:o=24,isOpen:n=!0})=>r.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",children:[r.jsxs("g",{className:`${Jt.iconFade} ${n?Jt.visible:Jt.hidden}`,children:[r.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),r.jsxs("g",{className:`${Jt.iconFade} ${n?Jt.hidden:Jt.visible}`,children:[r.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),r.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),a2=({size:o=24,isPaused:n=!1})=>r.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",children:[r.jsxs("g",{className:`${Jt.iconFadeFast} ${n?Jt.hidden:Jt.visible}`,children:[r.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),r.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),r.jsx("path",{className:`${Jt.iconFadeFast} ${n?Jt.visible:Jt.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),l2=({size:o=16})=>r.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",children:[r.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),r2=({size:o=16})=>r.jsx("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",children:r.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),oy=({size:o=16})=>r.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",children:[r.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[r.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),r.jsx("defs",{children:r.jsx("clipPath",{id:"clip0_2_53",children:r.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),c2=({size:o=24})=>r.jsx("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",children:r.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),u2=({size:o=16})=>r.jsxs("svg",{width:o,height:o,viewBox:"0 0 20 20",fill:"none",children:[r.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),d2=({size:o=16})=>r.jsx("svg",{width:o,height:o,viewBox:"0 0 20 20",fill:"none",children:r.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),f2=({size:o=16})=>r.jsx("svg",{width:o,height:o,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),h2=({size:o=24})=>r.jsx("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),_2=({size:o=16})=>r.jsx("svg",{width:o,height:o,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),m2=({size:o=24})=>r.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",children:[r.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),r.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),r.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),iy=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],Rf=iy.flatMap(o=>[`:not([${o}])`,`:not([${o}] *)`]).join(""),th="feedback-freeze-styles",Af="__agentation_freeze";function p2(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:n=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const o=window;return o[Af]||(o[Af]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),o[Af]}var Ct=p2();typeof window<"u"&&!Ct.installed&&(Ct.origSetTimeout=window.setTimeout.bind(window),Ct.origSetInterval=window.setInterval.bind(window),Ct.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(o,n,...i)=>typeof o=="string"?Ct.origSetTimeout(o,n):Ct.origSetTimeout((...l)=>{Ct.frozen?Ct.frozenTimeoutQueue.push(()=>o(...l)):o(...l)},n,...i),window.setInterval=(o,n,...i)=>typeof o=="string"?Ct.origSetInterval(o,n):Ct.origSetInterval((...l)=>{Ct.frozen||o(...l)},n,...i),window.requestAnimationFrame=o=>Ct.origRAF(n=>{Ct.frozen?Ct.frozenRAFQueue.push(o):o(n)}),Ct.installed=!0);var tt=Ct.origSetTimeout,g2=Ct.origSetInterval,qa=Ct.origRAF;function y2(o){return o?iy.some(n=>{var i;return!!((i=o.closest)!=null&&i.call(o,`[${n}]`))}):!1}function x2(){if(typeof document>"u"||Ct.frozen)return;Ct.frozen=!0,Ct.frozenTimeoutQueue=[],Ct.frozenRAFQueue=[];let o=document.getElementById(th);o||(o=document.createElement("style"),o.id=th),o.textContent=`
    *${Rf},
    *${Rf}::before,
    *${Rf}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(o),Ct.pausedAnimations=[];try{document.getAnimations().forEach(n=>{var l;if(n.playState!=="running")return;const i=(l=n.effect)==null?void 0:l.target;y2(i)||(n.pause(),Ct.pausedAnimations.push(n))})}catch{}document.querySelectorAll("video").forEach(n=>{n.paused||(n.dataset.wasPaused="false",n.pause())})}function l0(){var i;if(typeof document>"u"||!Ct.frozen)return;Ct.frozen=!1;const o=Ct.frozenTimeoutQueue;Ct.frozenTimeoutQueue=[];for(const l of o)Ct.origSetTimeout(()=>{if(Ct.frozen){Ct.frozenTimeoutQueue.push(l);return}try{l()}catch(c){console.warn("[agentation] Error replaying queued timeout:",c)}},0);const n=Ct.frozenRAFQueue;Ct.frozenRAFQueue=[];for(const l of n)Ct.origRAF(c=>{if(Ct.frozen){Ct.frozenRAFQueue.push(l);return}l(c)});for(const l of Ct.pausedAnimations)try{l.play()}catch(c){console.warn("[agentation] Error resuming animation:",c)}Ct.pausedAnimations=[],(i=document.getElementById(th))==null||i.remove(),document.querySelectorAll("video").forEach(l=>{l.dataset.wasPaused==="false"&&(l.play().catch(()=>{}),delete l.dataset.wasPaused)})}function Df(o){if(!o)return;const n=i=>i.stopImmediatePropagation();document.addEventListener("focusin",n,!0),document.addEventListener("focusout",n,!0);try{o.focus()}finally{document.removeEventListener("focusin",n,!0),document.removeEventListener("focusout",n,!0)}}var hu=b.forwardRef(function({element:n,timestamp:i,selectedText:l,placeholder:c="What should change?",initialValue:u="",submitLabel:_="Add",onSubmit:g,onCancel:h,onDelete:m,style:p,accentColor:y="#3c82f7",isExiting:v=!1,lightMode:C=!1,computedStyles:k},M){const[L,B]=b.useState(u),[J,G]=b.useState(!1),[z,de]=b.useState("initial"),[he,F]=b.useState(!1),[le,ge]=b.useState(!1),xe=b.useRef(null),ue=b.useRef(null),K=b.useRef(null),Xe=b.useRef(null);b.useEffect(()=>{v&&z!=="exit"&&de("exit")},[v,z]),b.useEffect(()=>{tt(()=>{de("enter")},0);const be=tt(()=>{de("entered")},200),De=tt(()=>{const A=xe.current;A&&(Df(A),A.selectionStart=A.selectionEnd=A.value.length,A.scrollTop=A.scrollHeight)},50);return()=>{clearTimeout(be),clearTimeout(De),K.current&&clearTimeout(K.current),Xe.current&&clearTimeout(Xe.current)}},[]);const _e=b.useCallback(()=>{Xe.current&&clearTimeout(Xe.current),G(!0),Xe.current=tt(()=>{G(!1),Df(xe.current)},250)},[]);b.useImperativeHandle(M,()=>({shake:_e}),[_e]);const Se=b.useCallback(()=>{de("exit"),K.current=tt(()=>{h()},150)},[h]),N=b.useCallback(()=>{L.trim()&&g(L.trim())},[L,g]),ce=b.useCallback(be=>{be.stopPropagation(),!be.nativeEvent.isComposing&&(be.key==="Enter"&&!be.shiftKey&&(be.preventDefault(),N()),be.key==="Escape"&&Se())},[N,Se]),W=[sn.popup,C?sn.light:"",z==="enter"?sn.enter:"",z==="entered"?sn.entered:"",z==="exit"?sn.exit:"",J?sn.shake:""].filter(Boolean).join(" ");return r.jsxs("div",{ref:ue,className:W,"data-annotation-popup":!0,style:p,onClick:be=>be.stopPropagation(),children:[r.jsxs("div",{className:sn.header,children:[k&&Object.keys(k).length>0?r.jsxs("button",{className:sn.headerToggle,onClick:()=>{const be=le;ge(!le),be&&tt(()=>Df(xe.current),0)},type:"button",children:[r.jsx("svg",{className:`${sn.chevron} ${le?sn.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),r.jsx("span",{className:sn.element,children:n})]}):r.jsx("span",{className:sn.element,children:n}),i&&r.jsx("span",{className:sn.timestamp,children:i})]}),k&&Object.keys(k).length>0&&r.jsx("div",{className:`${sn.stylesWrapper} ${le?sn.expanded:""}`,children:r.jsx("div",{className:sn.stylesInner,children:r.jsx("div",{className:sn.stylesBlock,children:Object.entries(k).map(([be,De])=>r.jsxs("div",{className:sn.styleLine,children:[r.jsx("span",{className:sn.styleProperty,children:be.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",r.jsx("span",{className:sn.styleValue,children:De}),";"]},be))})})}),l&&r.jsxs("div",{className:sn.quote,children:["“",l.slice(0,80),l.length>80?"...":"","”"]}),r.jsx("textarea",{ref:xe,className:sn.textarea,style:{borderColor:he?y:void 0},placeholder:c,value:L,onChange:be=>B(be.target.value),onFocus:()=>F(!0),onBlur:()=>F(!1),rows:2,onKeyDown:ce}),r.jsxs("div",{className:sn.actions,children:[m&&r.jsx("div",{className:sn.deleteWrapper,children:r.jsx("button",{className:sn.deleteButton,onClick:m,type:"button",children:r.jsx(h2,{size:22})})}),r.jsx("button",{className:sn.cancel,onClick:Se,children:"Cancel"}),r.jsx("button",{className:sn.submit,style:{backgroundColor:y,opacity:L.trim()?1:.4},onClick:N,disabled:!L.trim(),children:_})]})]})}),b2=({content:o,children:n,...i})=>{const[l,c]=b.useState(!1),[u,_]=b.useState(!1),[g,h]=b.useState({top:0,right:0}),m=b.useRef(null),p=b.useRef(null),y=b.useRef(null),v=()=>{if(m.current){const M=m.current.getBoundingClientRect();h({top:M.top+M.height/2,right:window.innerWidth-M.left+8})}},C=()=>{_(!0),y.current&&(clearTimeout(y.current),y.current=null),v(),p.current=tt(()=>{c(!0)},500)},k=()=>{p.current&&(clearTimeout(p.current),p.current=null),c(!1),y.current=tt(()=>{_(!1)},150)};return b.useEffect(()=>()=>{p.current&&clearTimeout(p.current),y.current&&clearTimeout(y.current)},[]),r.jsxs(r.Fragment,{children:[r.jsx("span",{ref:m,onMouseEnter:C,onMouseLeave:k,...i,children:n}),u&&eg.createPortal(r.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:g.top,right:g.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:l?1:0,transition:"opacity 0.15s ease"},children:o}),document.body)]})},v2=`.styles-module__tooltip___mcXL2 {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: help;
}

.styles-module__tooltipIcon___Nq2nD {
  transform: translateY(0.5px);
  color: #fff;
  opacity: 0.2;
  transition: opacity 0.15s ease;
  will-change: transform;
}
.styles-module__tooltip___mcXL2:hover .styles-module__tooltipIcon___Nq2nD {
  opacity: 0.5;
}
[data-agentation-theme=light] .styles-module__tooltipIcon___Nq2nD {
  color: #000;
}`,w2={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let o=document.getElementById("feedback-tool-styles-help-tooltip-styles");o||(o=document.createElement("style"),o.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(o)),o.textContent=v2}var r0=w2,Ki=({content:o})=>r.jsx(b2,{className:r0.tooltip,content:o,children:r.jsx(n2,{className:r0.tooltipIcon})}),Ne={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},ay=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...Ne.navigation},{type:"header",label:"Header",...Ne.header},{type:"hero",label:"Hero",...Ne.hero},{type:"section",label:"Section",...Ne.section},{type:"sidebar",label:"Sidebar",...Ne.sidebar},{type:"footer",label:"Footer",...Ne.footer},{type:"modal",label:"Modal",...Ne.modal},{type:"banner",label:"Banner",...Ne.banner},{type:"drawer",label:"Drawer",...Ne.drawer},{type:"popover",label:"Popover",...Ne.popover},{type:"divider",label:"Divider",...Ne.divider}]},{section:"Content",items:[{type:"card",label:"Card",...Ne.card},{type:"text",label:"Text",...Ne.text},{type:"image",label:"Image",...Ne.image},{type:"video",label:"Video",...Ne.video},{type:"table",label:"Table",...Ne.table},{type:"grid",label:"Grid",...Ne.grid},{type:"list",label:"List",...Ne.list},{type:"chart",label:"Chart",...Ne.chart},{type:"codeBlock",label:"Code Block",...Ne.codeBlock},{type:"map",label:"Map",...Ne.map},{type:"timeline",label:"Timeline",...Ne.timeline},{type:"calendar",label:"Calendar",...Ne.calendar},{type:"accordion",label:"Accordion",...Ne.accordion},{type:"carousel",label:"Carousel",...Ne.carousel},{type:"logo",label:"Logo",...Ne.logo},{type:"faq",label:"FAQ",...Ne.faq},{type:"gallery",label:"Gallery",...Ne.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...Ne.button},{type:"input",label:"Input",...Ne.input},{type:"search",label:"Search",...Ne.search},{type:"form",label:"Form",...Ne.form},{type:"tabs",label:"Tabs",...Ne.tabs},{type:"dropdown",label:"Dropdown",...Ne.dropdown},{type:"toggle",label:"Toggle",...Ne.toggle},{type:"stepper",label:"Stepper",...Ne.stepper},{type:"rating",label:"Rating",...Ne.rating},{type:"fileUpload",label:"File Upload",...Ne.fileUpload},{type:"checkbox",label:"Checkbox",...Ne.checkbox},{type:"radio",label:"Radio",...Ne.radio},{type:"slider",label:"Slider",...Ne.slider},{type:"datePicker",label:"Date Picker",...Ne.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...Ne.avatar},{type:"badge",label:"Badge",...Ne.badge},{type:"tag",label:"Tag",...Ne.tag},{type:"breadcrumb",label:"Breadcrumb",...Ne.breadcrumb},{type:"pagination",label:"Pagination",...Ne.pagination},{type:"progress",label:"Progress",...Ne.progress},{type:"alert",label:"Alert",...Ne.alert},{type:"toast",label:"Toast",...Ne.toast},{type:"notification",label:"Notification",...Ne.notification},{type:"tooltip",label:"Tooltip",...Ne.tooltip},{type:"stat",label:"Stat",...Ne.stat},{type:"skeleton",label:"Skeleton",...Ne.skeleton},{type:"chip",label:"Chip",...Ne.chip},{type:"icon",label:"Icon",...Ne.icon},{type:"spinner",label:"Spinner",...Ne.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...Ne.pricing},{type:"testimonial",label:"Testimonial",...Ne.testimonial},{type:"cta",label:"CTA",...Ne.cta},{type:"productCard",label:"Product Card",...Ne.productCard},{type:"profile",label:"Profile",...Ne.profile},{type:"feature",label:"Feature",...Ne.feature},{type:"team",label:"Team",...Ne.team},{type:"login",label:"Login",...Ne.login},{type:"contact",label:"Contact",...Ne.contact}]}],no={};for(const o of ay)for(const n of o.items)no[n.type]=n;function ae({w:o,h:n=3,strong:i}){return r.jsx("div",{style:{width:typeof o=="number"?`${o}px`:o,height:n,borderRadius:2,background:i?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function Ft({w:o,h:n,radius:i=3,style:l}){return r.jsx("div",{style:{width:typeof o=="number"?`${o}px`:o,height:typeof n=="number"?`${n}px`:n,borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...l}})}function ds({size:o}){return r.jsx("div",{style:{width:o,height:o,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function S2({width:o,height:n}){const i=Math.max(8,n*.2);return r.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${i}px`,gap:o*.02},children:[r.jsx(Ft,{w:Math.max(20,n*.5),h:Math.max(12,n*.4),radius:2}),r.jsxs("div",{style:{flex:1,display:"flex",gap:o*.03,marginLeft:o*.04},children:[r.jsx(ae,{w:o*.06}),r.jsx(ae,{w:o*.07}),r.jsx(ae,{w:o*.05}),r.jsx(ae,{w:o*.06})]}),r.jsx(Ft,{w:o*.1,h:Math.min(28,n*.5),radius:4})]})}function k2({width:o,height:n,text:i}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.05},children:[i?r.jsx("span",{style:{fontSize:Math.min(20,n*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:i}):r.jsx(ae,{w:o*.5,h:Math.max(6,n*.04),strong:!0}),r.jsx(ae,{w:o*.6}),r.jsx(ae,{w:o*.4}),r.jsx(Ft,{w:Math.min(140,o*.2),h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.06}})]})}function C2({width:o,height:n}){const i=Math.max(3,Math.floor(n/36));return r.jsxs("div",{style:{padding:o*.08,display:"flex",flexDirection:"column",gap:n*.03},children:[r.jsx(ae,{w:o*.6,h:4,strong:!0}),Array.from({length:i},(l,c)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx(Ft,{w:10,h:10,radius:2}),r.jsx(ae,{w:o*(.4+c*17%30/100)})]},c))]})}function j2({width:o,height:n}){const i=Math.max(2,Math.min(4,Math.floor(o/160)));return r.jsx("div",{style:{display:"flex",padding:`${n*.12}px ${o*.03}px`,gap:o*.05},children:Array.from({length:i},(l,c)=>r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[r.jsx(ae,{w:"60%",h:3,strong:!0}),r.jsx(ae,{w:"80%",h:2}),r.jsx(ae,{w:"70%",h:2}),r.jsx(ae,{w:"60%",h:2})]},c))})}function E2({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[r.jsx(ae,{w:o*.3,h:4,strong:!0}),r.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),r.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[r.jsx(ae,{w:"90%"}),r.jsx(ae,{w:"70%"}),r.jsx(ae,{w:"80%"})]}),r.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[r.jsx(Ft,{w:70,h:26,radius:4}),r.jsx(Ft,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function M2({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),r.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[r.jsx(ae,{w:"70%",h:4,strong:!0}),r.jsx(ae,{w:"95%",h:2}),r.jsx(ae,{w:"85%",h:2}),r.jsx(ae,{w:"50%",h:2})]})]})}function T2({width:o,height:n,text:i}){if(i)return r.jsx("div",{style:{padding:4,fontSize:Math.min(14,n*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:i});const l=Math.max(2,Math.floor(n/18));return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[r.jsx(ae,{w:o*.6,h:5,strong:!0}),Array.from({length:l},(c,u)=>r.jsx(ae,{w:`${70+u*13%25}%`,h:2},u))]})}function R2({width:o,height:n}){return r.jsx("div",{style:{height:"100%",position:"relative"},children:r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${o} ${n}`,preserveAspectRatio:"none",fill:"none",children:[r.jsx("line",{x1:"0",y1:"0",x2:o,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),r.jsx("line",{x1:o,y1:"0",x2:"0",y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),r.jsx("circle",{cx:o*.3,cy:n*.3,r:Math.min(o,n)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function A2({width:o,height:n}){const i=Math.max(2,Math.min(5,Math.floor(o/100))),l=Math.max(2,Math.min(6,Math.floor(n/32)));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:i},(c,u)=>r.jsx("div",{style:{flex:1,padding:"0 8px"},children:r.jsx(ae,{w:"70%",h:3,strong:!0})},u))}),Array.from({length:l},(c,u)=>r.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:i},(_,g)=>r.jsx("div",{style:{flex:1,padding:"0 8px"},children:r.jsx(ae,{w:`${50+(u*7+g*13)%40}%`,h:2})},g))},u))]})}function D2({width:o,height:n}){const i=Math.max(2,Math.floor(n/28));return r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:i},(l,c)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[r.jsx(ds,{size:8}),r.jsx(ae,{w:`${55+c*17%35}%`,h:2})]},c))})}function N2({width:o,height:n,text:i}){return r.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,n/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:i?r.jsx("span",{style:{fontSize:Math.min(13,n*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:i}):r.jsx(ae,{w:Math.max(20,o*.5),h:3,strong:!0})})}function O2({width:o,height:n}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[r.jsx(ae,{w:Math.min(80,o*.3),h:2}),r.jsx("div",{style:{height:Math.min(36,n*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:r.jsx(ae,{w:"40%",h:2})})]})}function L2({width:o,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:n*.04,padding:8},children:[Array.from({length:i},(l,c)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[r.jsx(ae,{w:60+c*17%30,h:2}),r.jsx(Ft,{w:"100%",h:28,radius:4})]},c)),r.jsx(Ft,{w:Math.min(120,o*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function z2({width:o,height:n}){const i=Math.max(2,Math.min(4,Math.floor(o/120)));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(l,c)=>r.jsx("div",{style:{padding:"8px 12px",borderBottom:c===0?"2px solid var(--agd-bar-strong)":"none"},children:r.jsx(ae,{w:60,h:3,strong:c===0})},c))}),r.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[r.jsx(ae,{w:"80%",h:2}),r.jsx(ae,{w:"65%",h:2}),r.jsx(ae,{w:"75%",h:2})]})]})}function B2({width:o,height:n}){const i=Math.min(o,n)/2;return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${o} ${n}`,fill:"none",children:[r.jsx("circle",{cx:o/2,cy:n/2,r:i-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),r.jsx("circle",{cx:o/2,cy:n*.38,r:i*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),r.jsx("path",{d:`M${o/2-i*.55} ${n*.78} C${o/2-i*.55} ${n*.55} ${o/2+i*.55} ${n*.55} ${o/2+i*.55} ${n*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function $2({width:o,height:n}){return r.jsx("div",{style:{height:"100%",borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(ae,{w:Math.max(16,o*.5),h:2,strong:!0})})}function P2({width:o,height:n}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[r.jsx(ae,{w:o*.5,h:Math.max(5,n*.06),strong:!0}),r.jsx(ae,{w:o*.35})]})}function I2({width:o,height:n}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:n*.04,padding:o*.04},children:[r.jsx(ae,{w:o*.3,h:4,strong:!0}),r.jsx(ae,{w:o*.7}),r.jsx(ae,{w:o*.5}),r.jsxs("div",{style:{flex:1,display:"flex",gap:o*.03,marginTop:n*.06},children:[r.jsx(Ft,{w:"33%",h:"100%",radius:4}),r.jsx(Ft,{w:"33%",h:"100%",radius:4}),r.jsx(Ft,{w:"33%",h:"100%",radius:4})]})]})}function U2({width:o,height:n}){const i=Math.max(2,Math.min(4,Math.floor(o/140))),l=Math.max(1,Math.min(3,Math.floor(n/120)));return r.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${l}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:i*l},(c,u)=>r.jsx(Ft,{w:"100%",h:"100%",radius:4},u))})}function H2({width:o,height:n}){const i=Math.max(2,Math.floor((n-32)/28));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:r.jsx(ae,{w:o*.5,h:3,strong:!0})}),r.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:i},(l,c)=>r.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:c===0?"var(--agd-fill)":"transparent"},children:r.jsx(ae,{w:`${50+c*17%35}%`,h:2,strong:c===0})},c))})]})}function Y2({width:o,height:n}){const i=Math.min(o,n)/2;return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${o} ${n}`,fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:o-2,height:n-2,rx:i,stroke:"var(--agd-stroke)",strokeWidth:"1"}),r.jsx("circle",{cx:o-i,cy:n/2,r:i*.7,fill:"var(--agd-bar)"})]})}function X2({width:o,height:n}){const i=Math.min(n/2,20);return r.jsxs("div",{style:{height:"100%",borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${i*.6}px`,gap:6},children:[r.jsx(ds,{size:Math.min(14,n*.4)}),r.jsx(ae,{w:"50%",h:2})]})}function G2({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[r.jsx(ds,{size:Math.min(20,n*.5)}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx(ae,{w:"60%",h:3,strong:!0}),r.jsx(ae,{w:"80%",h:2})]}),r.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function F2({width:o,height:n}){return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${o} ${n}`,fill:"none",children:[r.jsx("rect",{x:"0",y:"0",width:o,height:n,rx:n/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),r.jsx("rect",{x:"1",y:"1",width:o*.65,height:n-2,rx:(n-2)/2,fill:"var(--agd-bar)"})]})}function W2({width:o,height:n}){const i=Math.max(3,Math.min(7,Math.floor(o/50))),l=o/(i*2);return r.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(c,u)=>{const _=30+(u*37+17)%55;return r.jsx(Ft,{w:l,h:`${_}%`,radius:2},u)})})}function q2({width:o,height:n}){const i=Math.min(o,n)*.12;return r.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[r.jsx(Ft,{w:"100%",h:"100%",radius:4}),r.jsx("div",{style:{position:"absolute",width:i*2,height:i*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("div",{style:{width:0,height:0,borderLeft:`${i*.6}px solid var(--agd-bar-strong)`,borderTop:`${i*.4}px solid transparent`,borderBottom:`${i*.4}px solid transparent`,marginLeft:i*.15}})})]})}function Q2({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[r.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(ae,{w:"60%",h:2})}),r.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function V2({width:o,height:n}){const i=Math.max(2,Math.min(4,Math.floor(o/80)));return r.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:i},(l,c)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[c>0&&r.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),r.jsx(ae,{w:40+c*13%20,h:2,strong:c===i-1})]},c))})}function K2({width:o,height:n}){const i=Math.max(3,Math.min(5,Math.floor(o/40))),l=Math.min(28,n*.8);return r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:i},(c,u)=>r.jsx(Ft,{w:l,h:l,radius:4,style:u===1?{background:"var(--agd-bar)"}:void 0},u))})}function Z2({width:o}){return r.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:r.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function J2({width:o,height:n}){const i=Math.max(2,Math.min(4,Math.floor(n/40)));return r.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(l,c)=>r.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[r.jsx(ae,{w:`${40+c*17%25}%`,h:3,strong:!0}),r.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function ev({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[r.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[r.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),r.jsx(Ft,{w:"100%",h:"100%",radius:4}),r.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[r.jsx(ds,{size:5}),r.jsx(ds,{size:5}),r.jsx(ds,{size:5})]})]})}function tv({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:n*.04},children:[r.jsx(ae,{w:o*.4,h:3,strong:!0}),r.jsx(ae,{w:o*.3,h:6,strong:!0}),r.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(i,l)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[r.jsx(ds,{size:5}),r.jsx(ae,{w:`${50+l*17%35}%`,h:2})]},l))}),r.jsx(Ft,{w:o*.7,h:Math.min(32,n*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function nv({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[r.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[r.jsx(ae,{w:"90%",h:2}),r.jsx(ae,{w:"75%",h:2}),r.jsx(ae,{w:"60%",h:2})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx(ds,{size:20}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[r.jsx(ae,{w:60,h:3,strong:!0}),r.jsx(ae,{w:40,h:2})]})]})]})}function sv({width:o,height:n}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[r.jsx(ae,{w:o*.5,h:Math.max(4,n*.05),strong:!0}),r.jsx(ae,{w:o*.35}),r.jsx(Ft,{w:Math.min(140,o*.25),h:Math.min(32,n*.15),radius:6,style:{marginTop:n*.04,background:"var(--agd-bar)"}})]})}function ov({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[r.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:r.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx(ae,{w:"40%",h:3,strong:!0}),r.jsx(ae,{w:"70%",h:2})]})]})}function iv({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[r.jsx(ae,{w:o*.4,h:3,strong:!0}),r.jsx(Ft,{w:60,h:Math.min(24,n*.6),radius:4})]})}function av({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[r.jsx(ae,{w:o*.5,h:2}),r.jsx(ae,{w:o*.4,h:Math.max(8,n*.18),strong:!0}),r.jsx(ae,{w:o*.3,h:2})]})}function lv({width:o,height:n}){const i=Math.max(3,Math.min(5,Math.floor(o/100))),l=Math.min(12,n*.35);return r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:i},(c,u)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[r.jsx("div",{style:{width:l,height:l,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:u===0?"var(--agd-bar)":"transparent",flexShrink:0}}),u<i-1&&r.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},u))})}function rv({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[r.jsx(ae,{w:Math.max(16,o*.5),h:2,strong:!0}),r.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function cv({width:o,height:n}){const l=Math.min(n*.7,o/7.5);return r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:l*.2},children:Array.from({length:5},(c,u)=>r.jsx("svg",{width:l,height:l,viewBox:"0 0 16 16",fill:"none",children:r.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:u<3?"var(--agd-bar)":"none"})},u))})}function uv({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${o} ${n}`,fill:"none",style:{position:"absolute",inset:0},children:[r.jsx("line",{x1:0,y1:n*.3,x2:o,y2:n*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),r.jsx("line",{x1:0,y1:n*.6,x2:o,y2:n*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),r.jsx("line",{x1:o*.4,y1:0,x2:o*.6,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),r.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:r.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[r.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),r.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function dv({width:o,height:n}){const i=Math.max(3,Math.min(5,Math.floor(n/60)));return r.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[r.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:i},(l,c)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[r.jsx(ds,{size:8}),c<i-1&&r.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},c))}),r.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:i},(l,c)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[r.jsx(ae,{w:`${35+c*13%25}%`,h:3,strong:!0}),r.jsx(ae,{w:`${50+c*17%30}%`,h:2})]},c))})]})}function fv({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[r.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[r.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),r.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),r.jsx(ae,{w:o*.4,h:2}),r.jsx(ae,{w:o*.25,h:2})]})}function hv({width:o,height:n}){const i=Math.max(3,Math.min(8,Math.floor(n/20)));return r.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[r.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[r.jsx(ds,{size:6}),r.jsx(ds,{size:6}),r.jsx(ds,{size:6})]}),Array.from({length:i},(l,c)=>r.jsx("div",{style:{display:"flex",gap:6,paddingLeft:c>0&&c<i-1?12:0},children:r.jsx(ae,{w:`${25+c*23%50}%`,h:2,strong:c===0})},c))]})}function _v({width:o,height:n}){const c=Math.min((o-16)/7,(n-40)/6);return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[r.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),r.jsx(ae,{w:o*.3,h:3,strong:!0}),r.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(u,_)=>r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c*.6},children:r.jsx(ae,{w:c*.5,h:2})},`h${_}`)),Array.from({length:35},(u,_)=>r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c},children:r.jsx("div",{style:{width:c*.6,height:c*.6,borderRadius:"50%",background:_===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:_===12?1:.3}})})},_))]})]})}function mv({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[r.jsx(ds,{size:Math.min(32,n*.55)}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx(ae,{w:"50%",h:3,strong:!0}),r.jsx(ae,{w:"75%",h:2})]}),r.jsx(ae,{w:30,h:2})]})}function pv({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),r.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[r.jsx(ae,{w:"65%",h:4,strong:!0}),r.jsx(ae,{w:"40%",h:3}),r.jsx("div",{style:{flex:1}}),r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[r.jsx(ae,{w:"30%",h:5,strong:!0}),r.jsx(Ft,{w:Math.min(70,o*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function gv({width:o,height:n}){const i=Math.min(48,n*.3);return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[r.jsx(ds,{size:i}),r.jsx(ae,{w:o*.45,h:4,strong:!0}),r.jsx(ae,{w:o*.3,h:2}),r.jsxs("div",{style:{display:"flex",gap:o*.08,marginTop:n*.04},children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[r.jsx(ae,{w:20,h:3,strong:!0}),r.jsx(ae,{w:28,h:2})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[r.jsx(ae,{w:20,h:3,strong:!0}),r.jsx(ae,{w:28,h:2})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[r.jsx(ae,{w:20,h:3,strong:!0}),r.jsx(ae,{w:28,h:2})]})]})]})}function yv({width:o,height:n}){const i=Math.max(o*.6,80),l=Math.max(3,Math.floor(n/40));return r.jsxs("div",{style:{height:"100%",display:"flex"},children:[r.jsx("div",{style:{width:o-i,background:"var(--agd-fill)",opacity:.3}}),r.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:o*.04},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:n*.06},children:[r.jsx(ae,{w:i*.4,h:4,strong:!0}),r.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:l},(c,u)=>r.jsx("div",{style:{padding:"6px 0"},children:r.jsx(ae,{w:`${50+u*17%35}%`,h:2,strong:u===0})},u))]})]})}function xv({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[r.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[r.jsx(ae,{w:"70%",h:3,strong:!0}),r.jsx(ae,{w:"90%",h:2}),r.jsx(ae,{w:"60%",h:2})]}),r.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function bv({width:o,height:n}){const i=Math.min(n*.7,o*.3);return r.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:o*.08},children:[r.jsx(Ft,{w:i,h:i,radius:i*.25}),r.jsx(ae,{w:o*.45,h:Math.max(4,n*.2),strong:!0})]})}function vv({width:o,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return r.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(l,c)=>r.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),r.jsx(ae,{w:o*(.3+c*13%25/100),h:3,strong:!0})]}),r.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function wv({width:o,height:n}){const i=Math.max(2,Math.min(4,Math.floor(o/120))),l=Math.max(1,Math.min(3,Math.floor(n/120)));return r.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${l}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:i*l},(c,u)=>r.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:r.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[r.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),r.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},u))})}function Sv({width:o,height:n}){const i=Math.min(o,n);return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${o} ${n}`,fill:"none",children:[r.jsx("rect",{x:"1",y:(n-i+2)/2,width:i-2,height:i-2,rx:i*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),r.jsx("path",{d:`M${i*.25} ${n/2}l${i*.2} ${i*.2} ${i*.3}-${i*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function kv({width:o,height:n}){const i=Math.min(o,n)/2-1;return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${o} ${n}`,fill:"none",children:[r.jsx("circle",{cx:o/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),r.jsx("circle",{cx:o/2,cy:n/2,r:i*.45,fill:"var(--agd-bar)"})]})}function Cv({width:o,height:n}){const i=Math.max(2,n*.12),l=Math.min(n*.35,10),c=o*.55;return r.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[r.jsx("div",{style:{width:"100%",height:i,borderRadius:i/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:r.jsx("div",{style:{width:c,height:"100%",borderRadius:i/2,background:"var(--agd-bar)"}})}),r.jsx("div",{style:{position:"absolute",left:c-l,width:l*2,height:l*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function jv({width:o,height:n}){const i=Math.min(36,n*.15),l=7,c=4,u=Math.min((o-16)/l,(n-i-40)/(c+1));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[r.jsxs("div",{style:{height:i,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[r.jsx(ae,{w:"40%",h:2}),r.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[r.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),r.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),r.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[r.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),r.jsx(ae,{w:o*.25,h:2,strong:!0}),r.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${l}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:l*c},(_,g)=>r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:u},children:r.jsx("div",{style:{width:u*.5,height:u*.5,borderRadius:"50%",background:g===10?"var(--agd-bar)":"transparent"},children:r.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:g===10?1:.25}})})})},g))})]})]})}function Ev({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:n*.08,padding:4},children:[r.jsx("div",{style:{width:"100%",height:n*.2,borderRadius:4,background:"var(--agd-fill)"}}),r.jsx("div",{style:{width:"70%",height:Math.max(6,n*.1),borderRadius:3,background:"var(--agd-fill)"}}),r.jsx("div",{style:{width:"90%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}}),r.jsx("div",{style:{width:"50%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function Mv({width:o,height:n}){return r.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:r.jsxs("div",{style:{height:"100%",flex:1,borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.3}px`,gap:4},children:[r.jsx(ae,{w:"60%",h:2,strong:!0}),r.jsx("div",{style:{width:Math.max(6,n*.3),height:Math.max(6,n*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function Tv({width:o,height:n}){const i=Math.min(o,n);return r.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${o} ${n}`,fill:"none",children:r.jsx("path",{d:`M${o/2} ${(n-i)/2+i*.1}l${i*.12} ${i*.25} ${i*.28} ${i*.04}-${i*.2} ${i*.2} ${i*.05} ${i*.28}-${i*.25}-${i*.12}-${i*.25} ${i*.12} ${i*.05}-${i*.28}-${i*.2}-${i*.2} ${i*.28}-${i*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function Rv({width:o,height:n}){const i=Math.min(o,n)/2-2;return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${o} ${n}`,fill:"none",children:[r.jsx("circle",{cx:o/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),r.jsx("path",{d:`M${o/2} ${n/2-i}a${i} ${i} 0 0 1 ${i} ${i}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function Av({width:o,height:n}){const i=Math.min(36,n*.25,o*.12),l=Math.max(1,Math.min(3,Math.floor(n/80)));return r.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:l},(c,u)=>r.jsxs("div",{style:{display:"flex",gap:o*.04,alignItems:"flex-start"},children:[r.jsx(Ft,{w:i,h:i,radius:i*.25}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[r.jsx(ae,{w:`${40+u*13%20}%`,h:3,strong:!0}),r.jsx(ae,{w:`${60+u*17%25}%`,h:2})]})]},u))})}function Dv({width:o,height:n}){const i=Math.max(2,Math.min(4,Math.floor(o/120))),l=Math.min(36,n*.25);return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:n*.06,padding:n*.06},children:[r.jsx(ae,{w:o*.3,h:4,strong:!0}),r.jsx("div",{style:{display:"flex",gap:o*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:i},(c,u)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[r.jsx(ds,{size:l}),r.jsx(ae,{w:o*.12,h:3,strong:!0}),r.jsx(ae,{w:o*.08,h:2})]},u))})]})}function Nv({width:o,height:n}){const i=Math.max(2,Math.min(3,Math.floor(n/80)));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:o*.06,gap:n*.04},children:[r.jsx(ae,{w:o*.5,h:Math.max(5,n*.04),strong:!0}),r.jsx(ae,{w:o*.35,h:2}),r.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:n*.03,marginTop:n*.04},children:Array.from({length:i},(l,c)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[r.jsx(ae,{w:Math.min(60,o*.2),h:2}),r.jsx(Ft,{w:"100%",h:Math.min(32,n*.1),radius:4})]},c))}),r.jsx(Ft,{w:"100%",h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.03,background:"var(--agd-bar)"}}),r.jsx(ae,{w:o*.4,h:2})]})}function Ov({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:o*.04,gap:n*.03},children:[r.jsx(ae,{w:o*.4,h:4,strong:!0}),r.jsx(ae,{w:o*.6,h:2}),r.jsxs("div",{style:{display:"flex",gap:6,marginTop:n*.03},children:[r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx(ae,{w:50,h:2}),r.jsx(Ft,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx(ae,{w:40,h:2}),r.jsx(Ft,{w:"100%",h:Math.min(28,n*.1),radius:4})]})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[r.jsx(ae,{w:50,h:2}),r.jsx(Ft,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[r.jsx(ae,{w:60,h:2}),r.jsx(Ft,{w:"100%",h:"100%",radius:4})]}),r.jsx(Ft,{w:Math.min(120,o*.3),h:Math.min(30,n*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var Lv={navigation:S2,hero:k2,sidebar:C2,footer:j2,modal:E2,card:M2,text:T2,image:R2,table:A2,list:D2,button:N2,input:O2,form:L2,tabs:z2,avatar:B2,badge:$2,header:P2,section:I2,grid:U2,dropdown:H2,toggle:Y2,search:X2,toast:G2,progress:F2,chart:W2,video:q2,tooltip:Q2,breadcrumb:V2,pagination:K2,divider:Z2,accordion:J2,carousel:ev,pricing:tv,testimonial:nv,cta:sv,alert:ov,banner:iv,stat:av,stepper:lv,tag:rv,rating:cv,map:uv,timeline:dv,fileUpload:fv,codeBlock:hv,calendar:_v,notification:mv,productCard:pv,profile:gv,drawer:yv,popover:xv,logo:bv,faq:vv,gallery:wv,checkbox:Sv,radio:kv,slider:Cv,datePicker:jv,skeleton:Ev,chip:Mv,icon:Tv,spinner:Rv,feature:Av,team:Dv,login:Nv,contact:Ov};function zv({type:o,width:n,height:i,text:l}){const c=Lv[o];return c?r.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:r.jsx(c,{width:n,height:i,text:l})}):r.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:o})})}var Bv=`svg[fill=none] {
  fill: none !important;
}

.styles-module__overlayExiting___iEmYr {
  opacity: 0 !important;
  transition: opacity 0.25s ease !important;
  pointer-events: none !important;
}

.styles-module__overlay___aWh-q {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: auto;
  cursor: default;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
  --agd-stroke: rgba(59, 130, 246, 0.35);
  --agd-fill: rgba(59, 130, 246, 0.06);
  --agd-bar: rgba(59, 130, 246, 0.18);
  --agd-bar-strong: rgba(59, 130, 246, 0.28);
  --agd-text-3: rgba(255, 255, 255, 0.6);
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q.styles-module__light___ORIft {
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) {
  --agd-surface: #141414;
}
.styles-module__overlay___aWh-q.styles-module__wireframe___itvQU {
  --agd-stroke: rgba(249, 115, 22, 0.35);
  --agd-fill: rgba(249, 115, 22, 0.06);
  --agd-bar: rgba(249, 115, 22, 0.18);
  --agd-bar-strong: rgba(249, 115, 22, 0.28);
}
.styles-module__overlay___aWh-q.styles-module__placing___45yD8 {
  cursor: crosshair;
}
.styles-module__overlay___aWh-q.styles-module__passthrough___xaFeE {
  pointer-events: none;
}

.styles-module__blankCanvas___t2Eue {
  position: fixed;
  inset: 0;
  z-index: 99994;
  background: #fff;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__visible___OKKqX {
  opacity: var(--canvas-opacity, 1);
  pointer-events: auto;
}
.styles-module__blankCanvas___t2Eue::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.08) 1px, transparent 1px);
  background-size: 24px 24px;
  background-position: 12px 12px;
  pointer-events: none;
  transition: opacity 0.2s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__gridActive___OZ-cf::after {
  opacity: 1;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.22) 1px, transparent 1px);
}

.styles-module__paletteHeader___-Q5gQ {
  padding: 0 1rem 0.375rem;
}

.styles-module__paletteHeaderTitle___oHqZC {
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  letter-spacing: -0.0094em;
}
.styles-module__light___ORIft .styles-module__paletteHeaderTitle___oHqZC {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__paletteHeaderDesc___6i74T {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.45);
  margin-top: 2px;
  line-height: 14px;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T {
  color: rgba(0, 0, 0, 0.45);
}
.styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__paletteHeaderDesc___6i74T a:hover {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__wireframePurposeWrap___To-tS {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__wireframePurposeWrap___To-tS.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__wireframePurposeInner___Lrahs {
  overflow: hidden;
}

.styles-module__wireframePurposeInput___7EtBN {
  display: block;
  width: calc(100% - 2rem);
  margin: 0.25rem 1rem 0.375rem;
  padding: 0.375rem 0.5rem;
  font-size: 0.8125rem;
  font-family: inherit;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.375rem;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN {
  color: rgba(0, 0, 0, 0.7);
  background: rgba(0, 0, 0, 0.03);
  border-color: rgba(0, 0, 0, 0.1);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__canvasToggle___-QqSy {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  margin: 0.25rem 1rem 0.25rem;
  padding: 0.375rem 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 1px dashed rgba(255, 255, 255, 0.1);
  background: transparent;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.styles-module__canvasToggle___-QqSy:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.15);
}
.styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy {
  border-color: rgba(0, 0, 0, 0.08);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy:hover {
  background: rgba(0, 0, 0, 0.02);
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}

.styles-module__canvasToggleIcon___7pJ82 {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}
.styles-module__light___ORIft .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(0, 0, 0, 0.25);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__canvasToggleLabel___OanpY {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: -0.0094em;
}
.styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__canvasToggleLabel___OanpY {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}

.styles-module__canvasPurposeWrap___hj6zk {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__canvasPurposeWrap___hj6zk.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__canvasPurposeInner___VWiyu {
  overflow: hidden;
}

.styles-module__canvasPurposeToggle___byDH2 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  margin: 0.375rem 1rem 0.375rem 1.1875rem;
}
.styles-module__canvasPurposeToggle___byDH2 input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.styles-module__canvasPurposeCheck___xqd7l {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.25s ease, border-color 0.25s ease;
}
.styles-module__canvasPurposeCheck___xqd7l svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
.styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH svg {
  color: #fff;
}

.styles-module__canvasPurposeLabel___Zu-tD {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.styles-module__light___ORIft .styles-module__canvasPurposeLabel___Zu-tD {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__canvasPurposeHelp___jijwR {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: help;
}
.styles-module__canvasPurposeHelp___jijwR svg {
  color: rgba(255, 255, 255, 0.2);
  transform: translateY(2px);
  transition: color 0.15s ease;
}
.styles-module__canvasPurposeHelp___jijwR:hover svg {
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__canvasPurposeHelp___jijwR svg {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__canvasPurposeHelp___jijwR:hover svg {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__placement___zcxv8 {
  position: absolute;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.08);
  cursor: grab;
  transition: box-shadow 0.15s, border-color 0.15s, opacity 0.15s ease, transform 0.15s ease;
  user-select: none;
  pointer-events: auto;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  animation: styles-module__placementEnter___TdRhf 0.25s cubic-bezier(0.34, 1.2, 0.64, 1);
}
.styles-module__placement___zcxv8:active {
  cursor: grabbing;
}
.styles-module__placement___zcxv8:hover {
  border-color: rgba(59, 130, 246, 0.5);
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.12);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #3c82f7;
  border-style: solid;
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8 {
  border-color: rgba(249, 115, 22, 0.4);
  background: rgba(249, 115, 22, 0.08);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8:hover {
  border-color: rgba(249, 115, 22, 0.5);
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.12);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__placement___zcxv8.styles-module__dragging___le6KZ {
  opacity: 0.85;
  z-index: 50;
}
.styles-module__placement___zcxv8.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__placementContent___f64A4 {
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.styles-module__placementLabel___0KvWl {
  position: absolute;
  top: -18px;
  left: 0;
  font-size: 10px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.7);
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.8), 0 0 8px rgba(255, 255, 255, 0.5);
}
.styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__placementLabel___0KvWl {
  color: rgba(249, 115, 22, 0.7);
}
.styles-module__wireframe___itvQU .styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #f97316;
}

.styles-module__placementAnnotation___78pTr {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(0, 0, 0, 0.5);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__placementAnnotation___78pTr.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__sectionAnnotation___aUIs0 {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(59, 130, 246, 0.6);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__sectionAnnotation___aUIs0.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__handle___Ikbxm {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #fff;
  border: 1.5px solid #3c82f7;
  border-radius: 2px;
  z-index: 12;
  box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.12);
  opacity: 0;
  transform: scale(0.3);
  pointer-events: none;
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.styles-module__placement___zcxv8:hover .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:hover .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:hover .styles-module__handle___Ikbxm, .styles-module__placement___zcxv8:active .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:active .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:active .styles-module__handle___Ikbxm, .styles-module__selected___6yrp6 .styles-module__handle___Ikbxm {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__sectionOutline___s0hy- .styles-module__handle___Ikbxm {
  border-color: inherit;
}
.styles-module__wireframe___itvQU .styles-module__handle___Ikbxm {
  border-color: #f97316;
}

.styles-module__handleNw___4TMIj {
  top: -4px;
  left: -4px;
  cursor: nw-resize;
}

.styles-module__handleNe___mnsTh {
  top: -4px;
  right: -4px;
  cursor: ne-resize;
}

.styles-module__handleSe___oSFnk {
  bottom: -4px;
  right: -4px;
  cursor: se-resize;
}

.styles-module__handleSw___pi--Z {
  bottom: -4px;
  left: -4px;
  cursor: sw-resize;
}

.styles-module__handleN___aBA-Q, .styles-module__handleE___0hM5u, .styles-module__handleS___JjDRv, .styles-module__handleW___ERWGQ {
  opacity: 0 !important;
  pointer-events: none !important;
}

.styles-module__edgeHandle___XxXdT {
  position: absolute;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__edgeHandle___XxXdT::after {
  content: "";
  position: absolute;
  border-radius: 4px;
  background: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__edgeHandle___XxXdT::after {
  background: #f97316;
}
.styles-module__edgeHandle___XxXdT::after {
  opacity: 0;
  transition: opacity 0.1s ease, transform 0.1s ease;
  transform: scale(0.8);
}
.styles-module__edgeHandle___XxXdT:hover::after {
  opacity: 0.85;
  transform: scale(1);
}
.styles-module__edgeHandle___XxXdT svg {
  position: relative;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.1s ease;
  filter: drop-shadow(0 0 2px var(--agd-surface));
}
.styles-module__edgeHandle___XxXdT:hover svg {
  opacity: 1;
}

.styles-module__edgeN___-JJDj, .styles-module__edgeS___66lMX {
  left: 12px;
  right: 12px;
  height: 12px;
  cursor: n-resize;
}
.styles-module__edgeN___-JJDj::after, .styles-module__edgeS___66lMX::after {
  width: 24px;
  height: 4px;
}

.styles-module__edgeN___-JJDj {
  top: -6px;
}

.styles-module__edgeS___66lMX {
  bottom: -6px;
  cursor: s-resize;
}

.styles-module__edgeE___1bGDa, .styles-module__edgeW___lHQNo {
  top: 12px;
  bottom: 12px;
  width: 12px;
  cursor: e-resize;
}
.styles-module__edgeE___1bGDa::after, .styles-module__edgeW___lHQNo::after {
  width: 4px;
  height: 24px;
}

.styles-module__edgeE___1bGDa {
  right: -6px;
}

.styles-module__edgeW___lHQNo {
  left: -6px;
  cursor: w-resize;
}

.styles-module__deleteButton___LkGCb {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  line-height: 1;
  z-index: 15;
  pointer-events: none;
  opacity: 0;
  transform: scale(0.8);
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.12s ease, color 0.12s ease, border-color 0.12s ease, box-shadow 0.12s ease;
}
.styles-module__placement___zcxv8:hover .styles-module__deleteButton___LkGCb, .styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-:hover .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO:hover .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
  box-shadow: 0 1px 4px rgba(239, 68, 68, 0.3);
  transform: scale(1.1);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb {
  background: rgba(40, 40, 40, 0.9);
  border-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
}

.styles-module__drawBox___BrVAa {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 2px solid #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.15);
}

.styles-module__selectBox___Iu8kB {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 1px dashed #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  border-radius: 2px;
}

.styles-module__sizeIndicator___7zJ4y {
  position: fixed;
  pointer-events: none;
  z-index: 100001;
  font-size: 10px;
  color: #fff;
  background: #3c82f7;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.styles-module__guideLine___DUQY2 {
  pointer-events: none;
  z-index: 100001;
  background: #f0f;
  opacity: 0.5;
}

.styles-module__dragPreview___onPbU {
  position: fixed;
  z-index: 100002;
  pointer-events: none;
  border: 1.5px dashed #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.1);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: 600;
  color: #3c82f7;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.15);
  transition: width 0.08s ease, height 0.08s ease, opacity 0.08s ease;
}

.styles-module__dragPreviewWireframe___jsg0G {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  color: #f97316;
  box-shadow: 0 4px 16px rgba(249, 115, 22, 0.15);
}

.styles-module__palette___C7iSH {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  width: 256px;
  overflow: hidden;
  background: #1c1c1c;
  border: none;
  border-radius: 1rem;
  padding: 13px 0 16px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  z-index: 100001;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  cursor: default;
  opacity: 0;
  filter: blur(5px);
}
.styles-module__palette___C7iSH .styles-module__paletteItem___6TlnA,
.styles-module__palette___C7iSH .styles-module__paletteItemLabel___6ncO4,
.styles-module__palette___C7iSH .styles-module__paletteSectionTitle___PqnjX,
.styles-module__palette___C7iSH .styles-module__paletteFooter___QYnAG {
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__palette___C7iSH.styles-module__enter___6LYk5 {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__palette___C7iSH.styles-module__exit___iSGRw {
  opacity: 0;
  transform: translateY(6px);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
.styles-module__palette___C7iSH.styles-module__light___ORIft {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}

.styles-module__paletteSection___V8DEA {
  padding: 0 1rem;
}
.styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteSectionTitle___PqnjX {
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  padding: 0 0 3px 3px;
}
.styles-module__light___ORIft .styles-module__paletteSectionTitle___PqnjX {
  color: rgba(0, 0, 0, 0.4);
}

.styles-module__paletteItem___6TlnA {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.25rem;
  margin-bottom: 1px;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease;
  border: 1px solid transparent;
  user-select: none;
  min-height: 24px;
}
.styles-module__paletteItem___6TlnA:hover {
  background: rgba(255, 255, 255, 0.1);
}
.styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}

.styles-module__paletteItemIcon___0NPQK {
  width: 20px;
  height: 16px;
  border-radius: 2px;
  border: 1px dashed rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.45);
}
.styles-module__paletteItemIcon___0NPQK svg {
  display: block;
  width: 20px;
  height: 16px;
}
.styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(0, 0, 0, 0.12);
  background: rgba(0, 0, 0, 0.02);
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__paletteItemLabel___6ncO4 {
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: -0.0094em;
  line-height: 1;
  min-width: 0;
}
.styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}
.styles-module__light___ORIft .styles-module__paletteItemLabel___6ncO4 {
  color: rgba(0, 0, 0, 0.7);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}

.styles-module__placeScroll___7sClM {
  max-height: 240px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 0.25rem;
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px);
}
.styles-module__placeScroll___7sClM.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar {
  width: 3px;
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 2px;
}
.styles-module__light___ORIft .styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
}

.styles-module__paletteFooterWrap___71-fI {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.25s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__paletteFooterWrap___71-fI.styles-module__footerHidden___fJUik {
  grid-template-rows: 0fr;
}

.styles-module__paletteFooterInnerContent___VC26h {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__footerHidden___fJUik .styles-module__paletteFooterInnerContent___VC26h {
  opacity: 0;
  transform: translateY(4px);
}

.styles-module__paletteFooterInner___dfylY {
  overflow: hidden;
}

.styles-module__paletteFooter___QYnAG {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  padding: 0 1rem;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteFooter___QYnAG {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteFooterCount___D3Fia {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterCount___D3Fia {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__paletteFooterClear___ybBoa {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  transition: color 0.15s ease;
}
.styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__paletteFooterActions___fLzv8 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.styles-module__rollingWrap___S75jM {
  display: inline-block;
  overflow: hidden;
  height: 1.15em;
  position: relative;
  vertical-align: bottom;
}

.styles-module__rollingNum___1RKDx {
  position: absolute;
  left: 0;
  top: 0;
}

.styles-module__exitUp___AFDRW {
  animation: styles-module__numExitUp___FRQqx 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterUp___CPlXb {
  animation: styles-module__numEnterUp___2Yd-w 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__exitDown___-1yAy {
  animation: styles-module__numExitDown___xm5by 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterDown___DDuFR {
  animation: styles-module__numEnterDown___hpxBk 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

@keyframes styles-module__numExitUp___FRQqx {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterUp___2Yd-w {
  from {
    transform: translateY(110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes styles-module__numExitDown___xm5by {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterDown___hpxBk {
  from {
    transform: translateY(-110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.styles-module__rearrangeOverlay___-3R3t {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: none;
  cursor: default;
  user-select: none;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
}

.styles-module__hoverHighlight___8eT-v {
  position: fixed;
  pointer-events: none;
  z-index: 99994;
  border: 2px dashed rgba(59, 130, 246, 0.5);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.06);
  animation: styles-module__highlightFadeIn___Lg7KY 0.12s ease;
}

.styles-module__sectionOutline___s0hy- {
  position: fixed;
  border: 2px solid;
  border-radius: 4px;
  cursor: grab;
}
.styles-module__sectionOutline___s0hy-:active {
  cursor: grabbing;
}
.styles-module__sectionOutline___s0hy- {
  transition: box-shadow 0.15s, border-color 0.3s, background-color 0.3s, border-style 0s;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}
.styles-module__sectionOutline___s0hy-:hover {
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 4px 12px rgba(0, 0, 0, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 {
  border-style: solid;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) {
  border: 1.5px dashed rgba(150, 150, 150, 0.35);
  background-color: transparent !important;
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover {
  border-color: rgba(150, 150, 150, 0.6);
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionLabel___F80HQ {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionLabel___F80HQ {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__movedBadge___s8z-q,
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionDimensions___RcJSL {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionDimensions___RcJSL {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__sectionLabel___F80HQ {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 10px;
  font-weight: 600;
  color: #fff;
  padding: 2px 8px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  max-width: calc(100% - 8px);
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__movedBadge___s8z-q {
  position: absolute;
  bottom: 22px;
  right: 4px;
  font-size: 9px;
  font-weight: 700;
  color: #fff;
  background: #22c55e;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__movedBadge___s8z-q.styles-module__badgeVisible___npbdS {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.2s cubic-bezier(0.34, 1.2, 0.64, 1), transform 0.2s cubic-bezier(0.34, 1.2, 0.64, 1);
}

.styles-module__resizedBadge___u51V8 {
  background: #3c82f7;
  bottom: 40px;
}

.styles-module__sectionDimensions___RcJSL {
  position: absolute;
  bottom: 4px;
  right: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(0, 0, 0, 0.5);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
.styles-module__light___ORIft .styles-module__sectionDimensions___RcJSL {
  color: rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.7);
}

.styles-module__wireframeNotice___4GJyB {
  position: fixed;
  bottom: 16px;
  left: 24px;
  z-index: 99995;
  font-size: 9.5px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: auto;
  animation: styles-module__overlayFadeIn___aECVy 0.3s ease;
  line-height: 1.5;
  max-width: 280px;
}

.styles-module__wireframeOpacityRow___CJXzi {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.styles-module__wireframeOpacityLabel___afkfT {
  font-size: 9px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.32);
  letter-spacing: 0.02em;
  white-space: nowrap;
  user-select: none;
}

.styles-module__wireframeOpacitySlider___YcoEs {
  -webkit-appearance: none;
  appearance: none;
  width: 56px;
  height: 4px;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs:hover {
  background: rgba(0, 0, 0, 0.13);
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  cursor: pointer;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb:hover {
  background: rgb(224.4209205021, 95.3548117155, 5.7790794979);
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-thumb {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  border: none;
  cursor: pointer;
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-track {
  background: rgba(0, 0, 0, 0.08);
  height: 4px;
  border-radius: 2px;
}

.styles-module__wireframeNoticeTitleRow___PJqyG {
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 2px;
}

.styles-module__wireframeNoticeTitle___okr08 {
  font-weight: 600;
  color: rgba(0, 0, 0, 0.55);
}

.styles-module__wireframeNoticeDivider___PNKQ6 {
  width: 1px;
  height: 8px;
  background: rgba(0, 0, 0, 0.12);
  margin: 0 8px;
  flex-shrink: 0;
}

.styles-module__wireframeStartOver___YFk-I {
  font-size: 9.5px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
  text-decoration: none;
  transition: color 0.12s ease;
  white-space: nowrap;
}
.styles-module__wireframeStartOver___YFk-I:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__ghostOutline___po-kO {
  position: fixed;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.04);
  cursor: grab;
  opacity: 0.5;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__ghostEnter___EC3Mb 0.25s ease;
  transition: box-shadow 0.15s, border-color 0.3s, opacity 0.25s;
}
.styles-module__ghostOutline___po-kO:active {
  cursor: grabbing;
}
.styles-module__ghostOutline___po-kO:hover {
  opacity: 0.7;
  box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.1), 0 4px 12px rgba(0, 0, 0, 0.08);
}
.styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 {
  opacity: 1;
  border-style: solid;
  border-width: 2px;
  border-color: #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__ghostOutline___po-kO.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__ghostBadge___tsQUK {
  position: absolute;
  bottom: calc(100% + 4px);
  left: -1px;
  font-size: 9px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.9);
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.2);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  letter-spacing: 0.02em;
  line-height: 1.2;
  animation: styles-module__badgeSlideIn___typJ7 0.2s ease both;
}

@keyframes styles-module__badgeSlideIn___typJ7 {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__ghostBadgeExtra___6CVoD {
  display: inline;
  animation: styles-module__badgeExtraIn___i4W8F 0.2s ease both;
}

@keyframes styles-module__badgeExtraIn___i4W8F {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.styles-module__originalOutline___Y6DD1 {
  position: fixed;
  border: 1.5px dashed rgba(150, 150, 150, 0.3);
  border-radius: 4px;
  background: transparent;
  pointer-events: none;
  user-select: none;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}

.styles-module__originalLabel___HqI9g {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(150, 150, 150, 0.5);
  padding: 1px 6px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: rgba(150, 150, 150, 0.08);
}

.styles-module__connectorSvg___Lovld {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__connectorLine___XeWh- {
  transition: opacity 0.2s ease;
  animation: styles-module__connectorDraw___8sK5I 0.3s ease both;
}

.styles-module__connectorDot___yvf7C {
  transform-box: fill-box;
  transform-origin: center;
  animation: styles-module__connectorDotIn___NwTUq 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s both;
}

@keyframes styles-module__connectorDraw___8sK5I {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__connectorDotIn___NwTUq {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.styles-module__connectorExiting___2lLOs {
  animation: styles-module__connectorOut___5QoPl 0.2s ease forwards;
}
.styles-module__connectorExiting___2lLOs .styles-module__connectorDot___yvf7C {
  animation: styles-module__connectorDotOut___FEq7e 0.2s ease forwards;
}

@keyframes styles-module__connectorOut___5QoPl {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__connectorDotOut___FEq7e {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
}
@keyframes styles-module__placementEnter___TdRhf {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__sectionEnter___-8BXT {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__highlightFadeIn___Lg7KY {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__overlayFadeIn___aECVy {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__ghostEnter___EC3Mb {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 0.6;
    transform: scale(1);
  }
}`,$v={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let o=document.getElementById("feedback-tool-styles-design-mode-styles");o||(o=document.createElement("style"),o.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(o)),o.textContent=Bv}var ne=$v,Xa=24,Hc=5;function c0(o,n,i,l,c){let u=1/0,_=1/0;const g=o.x,h=o.x+o.width,m=o.x+o.width/2,p=o.y,y=o.y+o.height,v=o.y+o.height/2,C=!l,k=C?[g,h,m]:[...l.left?[g]:[],...l.right?[h]:[]],M=C?[p,y,v]:[...l.top?[p]:[],...l.bottom?[y]:[]],L=[];for(const ue of n)i.has(ue.id)||L.push(ue);c&&L.push(...c);for(const ue of L){const K=ue.x,Xe=ue.x+ue.width,_e=ue.x+ue.width/2,Se=ue.y,N=ue.y+ue.height,ce=ue.y+ue.height/2;for(const W of k)for(const be of[K,Xe,_e]){const De=be-W;Math.abs(De)<Hc&&Math.abs(De)<Math.abs(u)&&(u=De)}for(const W of M)for(const be of[Se,N,ce]){const De=be-W;Math.abs(De)<Hc&&Math.abs(De)<Math.abs(_)&&(_=De)}}const B=Math.abs(u)<Hc?u:0,J=Math.abs(_)<Hc?_:0,G=[],z=new Set,de=g+B,he=h+B,F=m+B,le=p+J,ge=y+J,xe=v+J;for(const ue of L){const K=ue.x,Xe=ue.x+ue.width,_e=ue.x+ue.width/2,Se=ue.y,N=ue.y+ue.height,ce=ue.y+ue.height/2;for(const W of[K,_e,Xe])for(const be of[de,F,he])if(Math.abs(be-W)<.5){const De=`x:${Math.round(W)}`;z.has(De)||(z.add(De),G.push({axis:"x",pos:W}))}for(const W of[Se,ce,N])for(const be of[le,xe,ge])if(Math.abs(be-W)<.5){const De=`y:${Math.round(W)}`;z.has(De)||(z.add(De),G.push({axis:"y",pos:W}))}}return{dx:B,dy:J,guides:G}}function u0(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function Pv({placements:o,onChange:n,activeComponent:i,onActiveComponentChange:l,isDarkMode:c,exiting:u,onInteractionChange:_,className:g,passthrough:h,extraSnapRects:m,onSelectionChange:p,deselectSignal:y,onDragMove:v,onDragEnd:C,clearSignal:k,wireframe:M}){const[L,B]=b.useState(new Set),[J,G]=b.useState(null),[z,de]=b.useState(null),[he,F]=b.useState(null),[le,ge]=b.useState([]),[xe,ue]=b.useState(null),[K,Xe]=b.useState(!1),_e=b.useRef(!1),[Se,N]=b.useState(new Set),ce=b.useRef(new Map),W=b.useRef(null),be=b.useRef(null),De=b.useRef(o);De.current=o;const A=b.useRef(p);A.current=p;const Z=b.useRef(v);Z.current=v;const pe=b.useRef(C);pe.current=C;const je=b.useRef(y);b.useEffect(()=>{y!==je.current&&(je.current=y,B(new Set))},[y]);const qe=b.useRef(k);b.useEffect(()=>{if(k!==void 0&&k!==qe.current){qe.current=k;const Q=new Set(De.current.map(Me=>Me.id));Q.size>0&&(N(Q),B(new Set),be.current=null,tt(()=>{n([]),N(new Set)},180))}},[k,n]),b.useEffect(()=>{const Q=Me=>{const Fe=Me.target;if(!(Fe.tagName==="INPUT"||Fe.tagName==="TEXTAREA"||Fe.isContentEditable)){if((Me.key==="Backspace"||Me.key==="Delete")&&L.size>0){Me.preventDefault();const nt=new Set(L);N(nt),B(new Set),tt(()=>{n(De.current.filter(Ue=>!nt.has(Ue.id))),N(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(Me.key)&&L.size>0){Me.preventDefault();const nt=Me.shiftKey?20:1,Ue=Me.key==="ArrowLeft"?-nt:Me.key==="ArrowRight"?nt:0,Te=Me.key==="ArrowUp"?-nt:Me.key==="ArrowDown"?nt:0;n(o.map(ct=>L.has(ct.id)?{...ct,x:Math.max(0,ct.x+Ue),y:Math.max(0,ct.y+Te)}:ct));return}if(Me.key==="Escape"){i?l(null):L.size>0&&B(new Set);return}}};return document.addEventListener("keydown",Q),()=>document.removeEventListener("keydown",Q)},[L,i,o,n,l]);const rt=b.useCallback(Q=>{if(Q.button!==0||h||Q.target.closest(`.${ne.placement}`))return;Q.preventDefault(),Q.stopPropagation();const Fe=window.scrollY,Ve=Q.clientX,nt=Q.clientY;if(i){be.current="place",_==null||_(!0);let Ue=!1,Te=Ve,ct=nt;const St=ze=>{Te=ze.clientX,ct=ze.clientY;const I=Math.abs(Te-Ve),Y=Math.abs(ct-nt);if((I>5||Y>5)&&(Ue=!0),Ue){const oe=Math.min(Ve,Te),re=Math.min(nt,ct),Oe=Math.abs(Te-Ve),ke=Math.abs(ct-nt);G({x:oe,y:re,w:Oe,h:ke}),F({x:ze.clientX+12,y:ze.clientY+12,text:`${Math.round(Oe)} × ${Math.round(ke)}`})}},Ht=ze=>{window.removeEventListener("mousemove",St),window.removeEventListener("mouseup",Ht),G(null),F(null),be.current=null,_==null||_(!1);const I=Ne[i];let Y,oe,re,Oe;Ue?(Y=Math.min(Ve,Te),oe=Math.min(nt,ct)+Fe,re=Math.max(Xa,Math.abs(Te-Ve)),Oe=Math.max(Xa,Math.abs(ct-nt))):(re=I.width,Oe=I.height,Y=Ve-re/2,oe=nt+Fe-Oe/2),Y=Math.max(0,Y),oe=Math.max(0,oe);const ke={id:u0(),type:i,x:Y,y:oe,width:re,height:Oe,scrollY:Fe,timestamp:Date.now()},me=[...o,ke];n(me),B(new Set([ke.id])),l(null)};window.addEventListener("mousemove",St),window.addEventListener("mouseup",Ht)}else{Q.shiftKey||B(new Set),be.current="select";let Ue=!1;const Te=St=>{const Ht=Math.abs(St.clientX-Ve),ze=Math.abs(St.clientY-nt);if((Ht>4||ze>4)&&(Ue=!0),Ue){const I=Math.min(Ve,St.clientX),Y=Math.min(nt,St.clientY);de({x:I,y:Y,w:Math.abs(St.clientX-Ve),h:Math.abs(St.clientY-nt)})}},ct=St=>{if(window.removeEventListener("mousemove",Te),window.removeEventListener("mouseup",ct),be.current=null,Ue){const Ht=Math.min(Ve,St.clientX),ze=Math.min(nt,St.clientY)+Fe,I=Math.abs(St.clientX-Ve),Y=Math.abs(St.clientY-nt),oe=new Set(Q.shiftKey?L:new Set);for(const re of o)re.y-Fe,re.x+re.width>Ht&&re.x<Ht+I&&re.y+re.height>ze&&re.y<ze+Y&&oe.add(re.id);B(oe)}de(null)};window.addEventListener("mousemove",Te),window.addEventListener("mouseup",ct)}},[i,h,o,n,L]),dt=b.useCallback((Q,Me)=>{var ke;if(Q.button!==0)return;const Fe=Q.target;if(Fe.closest(`.${ne.handle}`)||Fe.closest(`.${ne.deleteButton}`))return;Q.preventDefault(),Q.stopPropagation();let Ve;Q.shiftKey?(Ve=new Set(L),Ve.has(Me)?Ve.delete(Me):Ve.add(Me)):L.has(Me)?Ve=new Set(L):Ve=new Set([Me]),B(Ve),(Ve.size!==L.size||[...Ve].some(me=>!L.has(me)))&&((ke=A.current)==null||ke.call(A,Ve,Q.shiftKey));const Ue=Q.clientX,Te=Q.clientY,ct=new Map;for(const me of o)Ve.has(me.id)&&ct.set(me.id,{x:me.x,y:me.y});be.current="move",_==null||_(!0);let St=!1,Ht=!1,ze=o,I=0,Y=0;const oe=new Map;for(const me of o)ct.has(me.id)&&oe.set(me.id,{w:me.width,h:me.height});const re=me=>{var fn;const it=me.clientX-Ue,ft=me.clientY-Te;if((Math.abs(it)>2||Math.abs(ft)>2)&&(St=!0),!St)return;if(me.altKey&&!Ht){Ht=!0;const Ge=[];for(const Lt of o)ct.has(Lt.id)&&Ge.push({...Lt,id:u0(),timestamp:Date.now()});ze=[...o,...Ge]}let jt=1/0,st=1/0,Ae=-1/0,wt=-1/0;for(const[Ge,Lt]of ct){const vn=oe.get(Ge);vn&&(jt=Math.min(jt,Lt.x+it),st=Math.min(st,Lt.y+ft),Ae=Math.max(Ae,Lt.x+it+vn.w),wt=Math.max(wt,Lt.y+ft+vn.h))}const Et={x:jt,y:st,width:Ae-jt,height:wt-st},{dx:Wt,dy:Re,guides:yt}=c0(Et,ze,new Set(ct.keys()),void 0,m);ge(yt);const xt=it+Wt,ht=ft+Re;I=xt,Y=ht,n(ze.map(Ge=>{const Lt=ct.get(Ge.id);return Lt?{...Ge,x:Math.max(0,Lt.x+xt),y:Math.max(0,Lt.y+ht)}:Ge})),(fn=Z.current)==null||fn.call(Z,xt,ht)},Oe=()=>{var me;window.removeEventListener("mousemove",re),window.removeEventListener("mouseup",Oe),be.current=null,_==null||_(!1),ge([]),(me=pe.current)==null||me.call(pe,I,Y,St)};window.addEventListener("mousemove",re),window.addEventListener("mouseup",Oe)},[L,o,n,_]),en=b.useCallback((Q,Me,Fe)=>{Q.preventDefault(),Q.stopPropagation();const Ve=o.find(oe=>oe.id===Me);if(!Ve)return;B(new Set([Me])),be.current="resize",_==null||_(!0);const nt=Q.clientX,Ue=Q.clientY,Te=Ve.width,ct=Ve.height,St=Ve.x,Ht=Ve.y,ze={left:Fe.includes("w"),right:Fe.includes("e"),top:Fe.includes("n"),bottom:Fe.includes("s")},I=oe=>{const re=oe.clientX-nt,Oe=oe.clientY-Ue;let ke=Te,me=ct,it=St,ft=Ht;Fe.includes("e")&&(ke=Math.max(Xa,Te+re)),Fe.includes("w")&&(ke=Math.max(Xa,Te-re),it=St+Te-ke),Fe.includes("s")&&(me=Math.max(Xa,ct+Oe)),Fe.includes("n")&&(me=Math.max(Xa,ct-Oe),ft=Ht+ct-me);const jt={x:it,y:ft,width:ke,height:me},{dx:st,dy:Ae,guides:wt}=c0(jt,De.current,new Set([Me]),ze,m);ge(wt),st!==0&&(ze.right?ke+=st:ze.left&&(it+=st,ke-=st)),Ae!==0&&(ze.bottom?me+=Ae:ze.top&&(ft+=Ae,me-=Ae)),n(De.current.map(Et=>Et.id===Me?{...Et,x:it,y:ft,width:ke,height:me}:Et)),F({x:oe.clientX+12,y:oe.clientY+12,text:`${Math.round(ke)} × ${Math.round(me)}`})},Y=()=>{window.removeEventListener("mousemove",I),window.removeEventListener("mouseup",Y),F(null),be.current=null,_==null||_(!1),ge([])};window.addEventListener("mousemove",I),window.addEventListener("mouseup",Y)},[o,n,_]),Qe=b.useCallback(Q=>{be.current=null,N(Me=>{const Fe=new Set(Me);return Fe.add(Q),Fe}),B(Me=>{const Fe=new Set(Me);return Fe.delete(Q),Fe}),tt(()=>{n(De.current.filter(Me=>Me.id!==Q)),N(Me=>{const Fe=new Set(Me);return Fe.delete(Q),Fe})},180)},[n]),$e={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},pt=b.useCallback(Q=>{const Me=o.find(Fe=>Fe.id===Q);Me&&(_e.current=!!Me.text,ue(Q),Xe(!1))},[o]),Je=b.useCallback(()=>{xe&&(Xe(!0),tt(()=>{ue(null),Xe(!1)},150))},[xe]);b.useEffect(()=>{u&&xe&&Je()},[u]);const ut=b.useCallback(Q=>{xe&&(n(o.map(Me=>Me.id===xe?{...Me,text:Q.trim()||void 0}:Me)),Je())},[xe,o,n,Je]),At=typeof window<"u"?window.scrollY:0,dn=["nw","ne","se","sw"],bn=M?"#f97316":"#3c82f7",mn=[{dir:"n",cls:ne.edgeN,arrow:r.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:r.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:bn})})},{dir:"e",cls:ne.edgeE,arrow:r.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:r.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:bn})})},{dir:"s",cls:ne.edgeS,arrow:r.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:r.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:bn})})},{dir:"w",cls:ne.edgeW,arrow:r.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:r.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:bn})})}];return r.jsxs(r.Fragment,{children:[r.jsx("div",{ref:W,className:`${ne.overlay} ${c?"":ne.light} ${i?ne.placing:""} ${h?ne.passthrough:""} ${u?ne.overlayExiting:""} ${M?ne.wireframe:""}${g?` ${g}`:""}`,"data-feedback-toolbar":!0,onMouseDown:rt,children:o.map(Q=>{var nt;const Me=L.has(Q.id),Fe=((nt=no[Q.type])==null?void 0:nt.label)||Q.type,Ve=Q.y-At;return r.jsxs("div",{"data-design-placement":Q.id,className:`${ne.placement} ${Me?ne.selected:""} ${Se.has(Q.id)?ne.exiting:""}`,style:{left:Q.x,top:Ve,width:Q.width,height:Q.height,position:"fixed"},onMouseDown:Ue=>dt(Ue,Q.id),onDoubleClick:()=>pt(Q.id),children:[r.jsx("span",{className:ne.placementLabel,children:Fe}),r.jsx("span",{className:`${ne.placementAnnotation} ${Q.text?ne.annotationVisible:""}`,children:(Q.text&&ce.current.set(Q.id,Q.text),Q.text||ce.current.get(Q.id)||"")}),r.jsx("div",{className:ne.placementContent,children:r.jsx(zv,{type:Q.type,width:Q.width,height:Q.height,text:Q.text})}),r.jsx("div",{className:ne.deleteButton,onMouseDown:Ue=>Ue.stopPropagation(),onClick:()=>Qe(Q.id),children:"✕"}),dn.map(Ue=>r.jsx("div",{className:`${ne.handle} ${ne[`handle${Ue.charAt(0).toUpperCase()}${Ue.slice(1)}`]}`,onMouseDown:Te=>en(Te,Q.id,Ue)},Ue)),mn.map(({dir:Ue,cls:Te,arrow:ct})=>r.jsx("div",{className:`${ne.edgeHandle} ${Te}`,onMouseDown:St=>en(St,Q.id,Ue),children:ct},Ue))]},Q.id)})}),xe&&(()=>{var Ht;const Q=o.find(ze=>ze.id===xe);if(!Q)return null;const Me=Q.y-At,Fe=Q.x+Q.width/2,Ve=Me-8,nt=Me+Q.height+8,Ue=Ve>200,Te=nt<window.innerHeight-100,ct=Math.max(160,Math.min(window.innerWidth-160,Fe));let St;return Ue?St={left:ct,bottom:window.innerHeight-Ve}:Te?St={left:ct,top:nt}:St={left:ct,top:Math.max(80,window.innerHeight/2-80)},r.jsx(hu,{element:((Ht=no[Q.type])==null?void 0:Ht.label)||Q.type,placeholder:$e[Q.type]||"Label or content text",initialValue:Q.text??"",submitLabel:_e.current?"Save":"Set",onSubmit:ut,onCancel:Je,onDelete:_e.current?()=>{ut("")}:void 0,isExiting:K,lightMode:!c,style:St})})(),J&&r.jsx("div",{className:ne.drawBox,style:{left:J.x,top:J.y,width:J.w,height:J.h},"data-feedback-toolbar":!0}),z&&r.jsx("div",{className:ne.selectBox,style:{left:z.x,top:z.y,width:z.w,height:z.h},"data-feedback-toolbar":!0}),he&&r.jsx("div",{className:ne.sizeIndicator,style:{left:he.x,top:he.y},"data-feedback-toolbar":!0,children:he.text}),le.map((Q,Me)=>r.jsx("div",{className:ne.guideLine,style:Q.axis==="x"?{position:"fixed",left:Q.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:Q.pos-At,right:0,height:1},"data-feedback-toolbar":!0},`${Q.axis}-${Q.pos}-${Me}`))]})}function Iv(o){if(!o)return"";const n=o.scrollTop>2,i=o.scrollTop+o.clientHeight<o.scrollHeight-2;return`${n?ne.fadeTop:""} ${i?ne.fadeBottom:""}`}var j="currentColor",te="0.5";function Uv({type:o}){switch(o){case"navigation":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:j,opacity:".4"}),r.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:j,opacity:".25"}),r.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:j,opacity:".25"})]});case"header":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:j,opacity:".35"}),r.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:j,opacity:".15"})]});case"hero":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:j,opacity:".35"}),r.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:j,opacity:".15"}),r.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:j,strokeWidth:te})]});case"section":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:j,opacity:".3"}),r.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:j,opacity:".15"}),r.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:j,opacity:".15"})]});case"sidebar":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:j,opacity:".3"}),r.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:j,opacity:".15"}),r.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:j,opacity:".15"})]});case"footer":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:j,opacity:".25"}),r.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:j,opacity:".25"}),r.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:j,opacity:".2"})]});case"modal":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:j,opacity:".3"}),r.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:j,opacity:".15"}),r.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:j,strokeWidth:te})]});case"divider":return r.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:r.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:j,strokeWidth:"0.5",opacity:".3"})});case"card":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:j,opacity:".04"}),r.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:j,opacity:".25"}),r.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:j,opacity:".12"})]});case"text":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:j,opacity:".3"}),r.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:j,opacity:".15"}),r.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:j,opacity:".15"}),r.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:j,opacity:".12"})]});case"image":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:j,strokeWidth:te}),r.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:j,strokeWidth:".3",opacity:".25"}),r.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:j,strokeWidth:".3",opacity:".25"})]});case"video":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:j,strokeWidth:te}),r.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:j,strokeWidth:te,fill:j,opacity:".15"})]});case"table":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:j,strokeWidth:te}),r.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:j,strokeWidth:".3",opacity:".25"}),r.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:j,strokeWidth:".3",opacity:".25"}),r.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:j,strokeWidth:".3",opacity:".25"}),r.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:j,strokeWidth:".3",opacity:".25"})]});case"grid":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:j,strokeWidth:te})]});case"list":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:j,opacity:".2"}),r.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:j,opacity:".2"}),r.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:j,opacity:".2"})]});case"chart":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:j,opacity:".2"}),r.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:j,opacity:".25"}),r.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:j,opacity:".3"}),r.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:j,opacity:".2"})]});case"accordion":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:j,opacity:".25"}),r.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:j,strokeWidth:te})]});case"carousel":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:j,strokeWidth:te}),r.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:j,strokeWidth:te,opacity:".35"}),r.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:j,strokeWidth:te,opacity:".35"}),r.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:j,opacity:".35"}),r.jsx("circle",{cx:"10",cy:"14",r:".6",fill:j,opacity:".15"}),r.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:j,opacity:".15"})]});case"button":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:j,opacity:".25"})]});case"input":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:j,opacity:".25"}),r.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:j,opacity:".12"})]});case"search":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:j,strokeWidth:te}),r.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:j,strokeWidth:te,opacity:".3"}),r.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:j,strokeWidth:te,opacity:".3"}),r.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:j,opacity:".12"})]});case"form":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:j,opacity:".25"}),r.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:j,opacity:".25"}),r.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:j,strokeWidth:te})]});case"tabs":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:j,opacity:".25"}),r.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:j,strokeWidth:te})]});case"dropdown":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:j,opacity:".2"}),r.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:j,strokeWidth:te,opacity:".3"}),r.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:j,strokeWidth:te,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:j,strokeWidth:te}),r.jsx("circle",{cx:"13",cy:"8",r:"2",fill:j,opacity:".3"})]});case"avatar":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:j,strokeWidth:te}),r.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:j,strokeWidth:te}),r.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:j,strokeWidth:te})]});case"badge":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:j,opacity:".25"})]});case"breadcrumb":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:j,opacity:".3"}),r.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:j,strokeWidth:te,opacity:".2"}),r.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:j,opacity:".2"}),r.jsx("path",{d:"M14 7l1 1-1 1",stroke:j,strokeWidth:te,opacity:".2"}),r.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:j,opacity:".15"})]});case"pagination":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:j,opacity:".15",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:j,strokeWidth:te})]});case"progress":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:j,opacity:".2"})]});case"toast":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:j,strokeWidth:te}),r.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:j,strokeWidth:te,opacity:".3"}),r.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:j,opacity:".25"}),r.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:j,opacity:".12"})]});case"tooltip":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:j,opacity:".25"}),r.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:j,strokeWidth:te})]});case"pricing":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:j,opacity:".25"}),r.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:j,opacity:".15"}),r.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:j,opacity:".1"}),r.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:j,opacity:".1"}),r.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:j,opacity:".2"})]});case"testimonial":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:j,strokeWidth:te}),r.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:j,opacity:".2",fontFamily:"serif",children:"“"}),r.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:j,opacity:".15"}),r.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:j,opacity:".12"}),r.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:j,strokeWidth:te,opacity:".25"}),r.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:j,opacity:".15"})]});case"cta":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:j,opacity:".3"}),r.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:j,opacity:".15"}),r.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:j,strokeWidth:te})]});case"alert":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:j,strokeWidth:te}),r.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:j,strokeWidth:te,opacity:".3"}),r.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:j,strokeWidth:"0.6",opacity:".5"}),r.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:j,opacity:".5"}),r.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:j,opacity:".2"})]});case"banner":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:j,opacity:".25"}),r.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:j,strokeWidth:te})]});case"stat":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:j,opacity:".15"}),r.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:j,opacity:".3"}),r.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:j,opacity:".12"})]});case"stepper":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"4",cy:"8",r:"2",fill:j,opacity:".2",stroke:j,strokeWidth:te}),r.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:j,strokeWidth:".4",opacity:".3"}),r.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:j,strokeWidth:te}),r.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:j,strokeWidth:".4",opacity:".3"}),r.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:j,strokeWidth:te})]});case"tag":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:j,opacity:".25"}),r.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:j,strokeWidth:te,opacity:".2"}),r.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:j,strokeWidth:te,opacity:".2"})]});case"rating":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:j,opacity:".25"}),r.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:j,opacity:".25"}),r.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:j,strokeWidth:te,opacity:".25"})]});case"map":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:j,strokeWidth:te}),r.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:j,strokeWidth:".3",opacity:".15"}),r.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:j,strokeWidth:".3",opacity:".15"}),r.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:j,opacity:".15",stroke:j,strokeWidth:te})]});case"timeline":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:j,strokeWidth:".4",opacity:".25"}),r.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:j,opacity:".2",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:j,opacity:".25"}),r.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:j,opacity:".15"}),r.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:j,opacity:".15"})]});case"fileUpload":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:j,strokeWidth:te,strokeDasharray:"2 1"}),r.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:j,strokeWidth:te,opacity:".3"}),r.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:j,opacity:".15"})]});case"codeBlock":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:j,strokeWidth:te}),r.jsx("circle",{cx:"4",cy:"4",r:".6",fill:j,opacity:".3"}),r.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:j,opacity:".3"}),r.jsx("circle",{cx:"7",cy:"4",r:".6",fill:j,opacity:".3"}),r.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:j,opacity:".2"}),r.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:j,opacity:".15"}),r.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:j,opacity:".12"})]});case"calendar":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:j,strokeWidth:te}),r.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:j,strokeWidth:".4",opacity:".25"}),r.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:j,opacity:".2"}),r.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:j,opacity:".2"}),r.jsx("circle",{cx:"7",cy:"9",r:".6",fill:j,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"9",r:".6",fill:j,opacity:".2"}),r.jsx("circle",{cx:"13",cy:"9",r:".6",fill:j,opacity:".3"}),r.jsx("circle",{cx:"7",cy:"12",r:".6",fill:j,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"12",r:".6",fill:j,opacity:".2"})]});case"notification":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:j,strokeWidth:te}),r.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:j,strokeWidth:te,opacity:".25"}),r.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:j,opacity:".25"}),r.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:j,opacity:".12"}),r.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:j,opacity:".25"})]});case"productCard":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:j,opacity:".04"}),r.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:j,opacity:".25"}),r.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:j,opacity:".15"}),r.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:j,strokeWidth:te})]});case"profile":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:j,opacity:".25"}),r.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:j,opacity:".12"})]});case"drawer":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:j,opacity:".25"}),r.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:j,opacity:".15"}),r.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:j,opacity:".15"}),r.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:j,strokeWidth:te,opacity:".15"})]});case"popover":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:j,opacity:".25"}),r.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:j,opacity:".15"}),r.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:j,strokeWidth:te})]});case"logo":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:j,strokeWidth:te}),r.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:j,strokeWidth:te,opacity:".3"}),r.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:j,opacity:".2"}),r.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:j,opacity:".12"})]});case"faq":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:j,opacity:".3",fontWeight:"bold",children:"?"}),r.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:j,opacity:".25"}),r.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:j,opacity:".12"}),r.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:j,opacity:".3",fontWeight:"bold",children:"?"}),r.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:j,opacity:".25"}),r.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:j,opacity:".12"})]});case"gallery":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:j,strokeWidth:te})]});case"checkbox":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:j,strokeWidth:te}),r.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:j,strokeWidth:te,opacity:".35"})]});case"radio":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:j,strokeWidth:te}),r.jsx("circle",{cx:"10",cy:"8",r:"2",fill:j,opacity:".3"})]});case"slider":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:j,opacity:".15"}),r.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:j,opacity:".25"}),r.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:j,strokeWidth:te})]});case"datePicker":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:j,opacity:".2"}),r.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:j,opacity:".12"}),r.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:j,strokeWidth:te,strokeDasharray:"2 1",opacity:".3"}),r.jsx("circle",{cx:"6",cy:"10",r:".6",fill:j,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"10",r:".6",fill:j,opacity:".3"}),r.jsx("circle",{cx:"14",cy:"10",r:".6",fill:j,opacity:".2"}),r.jsx("circle",{cx:"6",cy:"13",r:".6",fill:j,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"13",r:".6",fill:j,opacity:".2"})]});case"skeleton":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:j,opacity:".08"}),r.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:j,opacity:".08"}),r.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:j,opacity:".08"})]});case"chip":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:j,opacity:".08",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:j,opacity:".25"}),r.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:j,strokeWidth:te,opacity:".2"}),r.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:j,strokeWidth:te,opacity:".2"}),r.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:j,strokeWidth:te,opacity:".25"})]});case"icon":return r.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:r.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:j,strokeWidth:te,opacity:".3"})});case"spinner":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:j,strokeWidth:te,opacity:".12"}),r.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:j,strokeWidth:te,opacity:".35",strokeLinecap:"round"})]});case"feature":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:j,strokeWidth:te}),r.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:j,strokeWidth:te,opacity:".25"}),r.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:j,opacity:".25"}),r.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:j,opacity:".12"}),r.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:j,opacity:".25"}),r.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:j,opacity:".12"})]});case"team":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:j,opacity:".2"}),r.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:j,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:j,strokeWidth:te,opacity:".5"}),r.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:j,opacity:".15"}),r.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:j,opacity:".1"})]});case"login":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:j,opacity:".25"}),r.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:j,opacity:".2"})]});case"contact":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:j,opacity:".2"}),r.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:j,opacity:".2"})]});default:return null}}function Hv({activeType:o,onSelect:n,onDragStart:i,scrollRef:l,fadeClass:c,blankCanvas:u}){return r.jsx("div",{ref:l,className:`${ne.placeScroll} ${c||""}`,children:ay.map(_=>r.jsxs("div",{className:ne.paletteSection,children:[r.jsx("div",{className:ne.paletteSectionTitle,children:_.section}),_.items.map(g=>r.jsxs("div",{className:`${ne.paletteItem} ${o===g.type?ne.active:""} ${u?ne.wireframe:""}`,onClick:()=>n(g.type),onMouseDown:h=>{h.button===0&&i(g.type,h)},children:[r.jsx("div",{className:ne.paletteItemIcon,children:r.jsx(Uv,{type:g.type})}),r.jsx("span",{className:ne.paletteItemLabel,children:g.label})]},g.type))]},_.section))})}function Yv({value:o,suffix:n}){const[i,l]=b.useState(null),[c,u]=b.useState(n),[_,g]=b.useState("up"),h=b.useRef(o),m=b.useRef(n),p=b.useRef(),y=i!==null&&c!==n;return b.useEffect(()=>{if(o!==h.current){if(o===0){h.current=o,m.current=n,l(null);return}g(o>h.current?"up":"down"),l(h.current),u(m.current),h.current=o,m.current=n,clearTimeout(p.current),p.current=tt(()=>l(null),250)}else m.current=n},[o,n]),i===null?r.jsxs(r.Fragment,{children:[o,n?` ${n}`:""]}):y?r.jsxs("span",{className:ne.rollingWrap,children:[r.jsxs("span",{style:{visibility:"hidden"},children:[o," ",n]}),r.jsxs("span",{className:`${ne.rollingNum} ${_==="up"?ne.exitUp:ne.exitDown}`,children:[i," ",c]},`o${i}-${o}`),r.jsxs("span",{className:`${ne.rollingNum} ${_==="up"?ne.enterUp:ne.enterDown}`,children:[o," ",n]},`n${o}`)]}):r.jsxs(r.Fragment,{children:[r.jsxs("span",{className:ne.rollingWrap,children:[r.jsx("span",{style:{visibility:"hidden"},children:o}),r.jsx("span",{className:`${ne.rollingNum} ${_==="up"?ne.exitUp:ne.exitDown}`,children:i},`o${i}-${o}`),r.jsx("span",{className:`${ne.rollingNum} ${_==="up"?ne.enterUp:ne.enterDown}`,children:o},`n${o}`)]}),n?` ${n}`:""]})}function Xv({activeType:o,onSelect:n,isDarkMode:i,sectionCount:l,onDetectSections:c,visible:u,onExited:_,placementCount:g,onClearPlacements:h,onDragStart:m,blankCanvas:p,onBlankCanvasChange:y,wireframePurpose:v,onWireframePurposeChange:C,Tooltip:k}){const[M,L]=b.useState(!1),[B,J]=b.useState("exit"),[G,z]=b.useState(!1),[de,he]=b.useState(!0),F=b.useRef(0),le=b.useRef(""),ge=b.useRef(0),xe=b.useRef(),ue=b.useRef(null),[K,Xe]=b.useState("");b.useEffect(()=>(u?(L(!0),clearTimeout(xe.current),cancelAnimationFrame(ge.current),ge.current=qa(()=>{ge.current=qa(()=>{J("enter")})})):(cancelAnimationFrame(ge.current),J("exit"),clearTimeout(xe.current),xe.current=tt(()=>{L(!1),_==null||_()},200)),()=>cancelAnimationFrame(ge.current)),[u]);const _e=g>0||l>0,Se=g+l;return Se>0&&(F.current=Se,le.current=p?Se===1?"Component":"Components":Se===1?"Change":"Changes"),b.useEffect(()=>{if(_e)G?he(!1):(he(!0),z(!0),qa(()=>{qa(()=>{he(!1)})}));else{he(!0);const N=tt(()=>z(!1),300);return()=>clearTimeout(N)}},[_e]),b.useEffect(()=>{if(!M)return;const N=ue.current;if(!N)return;const ce=()=>Xe(Iv(N));ce(),N.addEventListener("scroll",ce,{passive:!0});const W=new ResizeObserver(ce);return W.observe(N),()=>{N.removeEventListener("scroll",ce),W.disconnect()}},[M]),M?r.jsxs("div",{className:`${ne.palette} ${ne[B]} ${i?"":ne.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:N=>N.stopPropagation(),onMouseDown:N=>N.stopPropagation(),onTransitionEnd:N=>{N.target===N.currentTarget&&(u||(clearTimeout(xe.current),L(!1),J("exit"),_==null||_()))},children:[r.jsxs("div",{className:ne.paletteHeader,children:[r.jsx("div",{className:ne.paletteHeaderTitle,children:"Layout Mode"}),r.jsxs("div",{className:ne.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",r.jsx("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),r.jsxs("div",{className:`${ne.canvasToggle} ${p?ne.active:""}`,onClick:()=>y(!p),children:[r.jsx("span",{className:ne.canvasToggleIcon,children:r.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),r.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),r.jsx("span",{className:ne.canvasToggleLabel,children:"Wireframe New Page"})]}),r.jsx("div",{className:`${ne.wireframePurposeWrap} ${p?"":ne.collapsed}`,children:r.jsx("div",{className:ne.wireframePurposeInner,children:r.jsx("textarea",{className:ne.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:v,onChange:N=>C(N.target.value),rows:2})})}),r.jsx(Hv,{activeType:o,onSelect:n,onDragStart:m,scrollRef:ue,fadeClass:K,blankCanvas:p}),G&&r.jsx("div",{className:`${ne.paletteFooterWrap} ${de?ne.footerHidden:""}`,children:r.jsx("div",{className:ne.paletteFooterInner,children:r.jsx("div",{className:ne.paletteFooterInnerContent,children:r.jsxs("div",{className:ne.paletteFooter,children:[r.jsx("span",{className:ne.paletteFooterCount,children:r.jsx(Yv,{value:F.current,suffix:le.current})}),r.jsx("button",{className:ne.paletteFooterClear,onClick:h,children:"Clear"})]})})})})]}):null}function Ka(o){if(o.parentElement)return o.parentElement;const n=o.getRootNode();return n instanceof ShadowRoot?n.host:null}function us(o,n){let i=o;for(;i;){if(i.matches(n))return i;i=Ka(i)}return null}function Gv(o,n=4){const i=[];let l=o,c=0;for(;l&&c<n;){const u=l.tagName.toLowerCase();if(u==="html"||u==="body")break;let _=u;if(l.id)_=`#${l.id}`;else if(l.className&&typeof l.className=="string"){const h=l.className.split(/\s+/).find(m=>m.length>2&&!m.match(/^[a-z]{1,2}$/)&&!m.match(/[A-Z0-9]{5,}/));h&&(_=`.${h.split("_")[0]}`)}const g=Ka(l);!l.parentElement&&g&&(_=`⟨shadow⟩ ${_}`),i.unshift(_),l=g,c++}return i.join(" > ")}function Va(o){var l,c,u,_,g,h,m,p;const n=Gv(o);if(o.dataset.element)return{name:o.dataset.element,path:n};const i=o.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(i)){const y=us(o,"svg");if(y){const v=Ka(y);if(v instanceof HTMLElement)return{name:`graphic in ${Va(v).name}`,path:n}}return{name:"graphic element",path:n}}if(i==="svg"){const y=Ka(o);if((y==null?void 0:y.tagName.toLowerCase())==="button"){const v=(l=y.textContent)==null?void 0:l.trim();return{name:v?`icon in "${v}" button`:"button icon",path:n}}return{name:"icon",path:n}}if(i==="button"){const y=(c=o.textContent)==null?void 0:c.trim(),v=o.getAttribute("aria-label");return v?{name:`button [${v}]`,path:n}:{name:y?`button "${y.slice(0,25)}"`:"button",path:n}}if(i==="a"){const y=(u=o.textContent)==null?void 0:u.trim(),v=o.getAttribute("href");return y?{name:`link "${y.slice(0,25)}"`,path:n}:v?{name:`link to ${v.slice(0,30)}`,path:n}:{name:"link",path:n}}if(i==="input"){const y=o.getAttribute("type")||"text",v=o.getAttribute("placeholder"),C=o.getAttribute("name");return v?{name:`input "${v}"`,path:n}:C?{name:`input [${C}]`,path:n}:{name:`${y} input`,path:n}}if(["h1","h2","h3","h4","h5","h6"].includes(i)){const y=(_=o.textContent)==null?void 0:_.trim();return{name:y?`${i} "${y.slice(0,35)}"`:i,path:n}}if(i==="p"){const y=(g=o.textContent)==null?void 0:g.trim();return y?{name:`paragraph: "${y.slice(0,40)}${y.length>40?"...":""}"`,path:n}:{name:"paragraph",path:n}}if(i==="span"||i==="label"){const y=(h=o.textContent)==null?void 0:h.trim();return y&&y.length<40?{name:`"${y}"`,path:n}:{name:i,path:n}}if(i==="li"){const y=(m=o.textContent)==null?void 0:m.trim();return y&&y.length<40?{name:`list item: "${y.slice(0,35)}"`,path:n}:{name:"list item",path:n}}if(i==="blockquote")return{name:"blockquote",path:n};if(i==="code"){const y=(p=o.textContent)==null?void 0:p.trim();return y&&y.length<30?{name:`code: \`${y}\``,path:n}:{name:"code",path:n}}if(i==="pre")return{name:"code block",path:n};if(i==="img"){const y=o.getAttribute("alt");return{name:y?`image "${y.slice(0,30)}"`:"image",path:n}}if(i==="video")return{name:"video",path:n};if(["div","section","article","nav","header","footer","aside","main"].includes(i)){const y=o.className,v=o.getAttribute("role"),C=o.getAttribute("aria-label");if(C)return{name:`${i} [${C}]`,path:n};if(v)return{name:`${v}`,path:n};if(typeof y=="string"&&y){const k=y.split(/[\s_-]+/).map(M=>M.replace(/[A-Z0-9]{5,}.*$/,"")).filter(M=>M.length>2&&!/^[a-z]{1,2}$/.test(M)).slice(0,2);if(k.length>0)return{name:k.join(" "),path:n}}return{name:i==="div"?"container":i,path:n}}return{name:i,path:n}}function er(o){var u,_,g;const n=[],i=(u=o.textContent)==null?void 0:u.trim();i&&i.length<100&&n.push(i);const l=o.previousElementSibling;if(l){const h=(_=l.textContent)==null?void 0:_.trim();h&&h.length<50&&n.unshift(`[before: "${h.slice(0,40)}"]`)}const c=o.nextElementSibling;if(c){const h=(g=c.textContent)==null?void 0:g.trim();h&&h.length<50&&n.push(`[after: "${h.slice(0,40)}"]`)}return n.join(" ")}function Yc(o){const n=Ka(o);if(!n)return"";const c=(o.getRootNode()instanceof ShadowRoot&&o.parentElement?Array.from(o.parentElement.children):Array.from(n.children)).filter(p=>p!==o&&p instanceof HTMLElement);if(c.length===0)return"";const u=c.slice(0,4).map(p=>{var k;const y=p.tagName.toLowerCase(),v=p.className;let C="";if(typeof v=="string"&&v){const M=v.split(/\s+/).map(L=>L.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(L=>L.length>2&&!/^[a-z]{1,2}$/.test(L));M&&(C=`.${M}`)}if(y==="button"||y==="a"){const M=(k=p.textContent)==null?void 0:k.trim().slice(0,15);if(M)return`${y}${C} "${M}"`}return`${y}${C}`});let g=n.tagName.toLowerCase();if(typeof n.className=="string"&&n.className){const p=n.className.split(/\s+/).map(y=>y.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(y=>y.length>2&&!/^[a-z]{1,2}$/.test(y));p&&(g=`.${p}`)}const h=n.children.length,m=h>u.length+1?` (${h} total in ${g})`:"";return u.join(", ")+m}function tr(o){const n=o.className;return typeof n!="string"||!n?"":n.split(/\s+/).filter(l=>l.length>0).map(l=>{const c=l.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return c?c[1]:l}).filter((l,c,u)=>u.indexOf(l)===c).join(", ")}var ly=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),Fv=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),Wv=new Set(["input","textarea","select"]),qv=new Set(["img","video","canvas","svg"]),Qv=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function Xc(o){if(typeof window>"u")return{};const n=window.getComputedStyle(o),i={},l=o.tagName.toLowerCase();let c;Fv.has(l)?c=["color","fontSize","fontWeight","fontFamily","lineHeight"]:l==="button"||l==="a"&&o.getAttribute("role")==="button"?c=["backgroundColor","color","padding","borderRadius","fontSize"]:Wv.has(l)?c=["backgroundColor","color","padding","borderRadius","fontSize"]:qv.has(l)?c=["width","height","objectFit","borderRadius"]:Qv.has(l)?c=["display","padding","margin","gap","backgroundColor"]:c=["color","fontSize","margin","padding","backgroundColor"];for(const u of c){const _=u.replace(/([A-Z])/g,"-$1").toLowerCase(),g=n.getPropertyValue(_);g&&!ly.has(g)&&(i[u]=g)}return i}var Vv=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function Gc(o){if(typeof window>"u")return"";const n=window.getComputedStyle(o),i=[];for(const l of Vv){const c=l.replace(/([A-Z])/g,"-$1").toLowerCase(),u=n.getPropertyValue(c);u&&!ly.has(u)&&i.push(`${c}: ${u}`)}return i.join("; ")}function Kv(o){if(!o)return;const n={},i=o.split(";").map(l=>l.trim()).filter(Boolean);for(const l of i){const c=l.indexOf(":");if(c>0){const u=l.slice(0,c).trim(),_=l.slice(c+1).trim();u&&_&&(n[u]=_)}}return Object.keys(n).length>0?n:void 0}function Fc(o){const n=[],i=o.getAttribute("role"),l=o.getAttribute("aria-label"),c=o.getAttribute("aria-describedby"),u=o.getAttribute("tabindex"),_=o.getAttribute("aria-hidden");return i&&n.push(`role="${i}"`),l&&n.push(`aria-label="${l}"`),c&&n.push(`aria-describedby="${c}"`),u&&n.push(`tabindex=${u}`),_==="true"&&n.push("aria-hidden"),o.matches("a, button, input, select, textarea, [tabindex]")&&n.push("focusable"),n.join(", ")}function Wc(o){const n=[];let i=o;for(;i&&i.tagName.toLowerCase()!=="html";){const l=i.tagName.toLowerCase();let c=l;if(i.id)c=`${l}#${i.id}`;else if(i.className&&typeof i.className=="string"){const _=i.className.split(/\s+/).map(g=>g.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(g=>g.length>2);_&&(c=`${l}.${_}`)}const u=Ka(i);!i.parentElement&&u&&(c=`⟨shadow⟩ ${c}`),n.unshift(c),i=u}return n.join(" > ")}var Zv=new Set(["nav","header","main","section","article","footer","aside"]),nh={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},d0={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},Jv=new Set(["script","style","noscript","link","meta"]),ew=40;function ry(o){let n=o;for(;n&&n!==document.body&&n!==document.documentElement;){const i=window.getComputedStyle(n).position;if(i==="fixed"||i==="sticky")return!0;n=n.parentElement}return!1}function ea(o){const n=o.tagName.toLowerCase();if(["nav","header","footer","main"].includes(n)&&document.querySelectorAll(n).length===1)return n;if(o.id)return`#${CSS.escape(o.id)}`;if(o.className&&typeof o.className=="string"){const c=o.className.split(/\s+/).filter(u=>u.length>0).find(u=>u.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(u)&&!/^[a-z]{1,2}$/.test(u));if(c){const u=`${n}.${CSS.escape(c)}`;if(document.querySelectorAll(u).length===1)return u}}const i=o.parentElement;if(i){const c=Array.from(i.children).indexOf(o)+1;return`${i===document.body?"body":ea(i)} > ${n}:nth-child(${c})`}return n}function _u(o){var _;const n=o.tagName.toLowerCase(),i=o.getAttribute("aria-label");if(i)return i;const l=o.getAttribute("role");if(l&&nh[l])return nh[l];if(d0[n])return d0[n];const c=o.querySelector("h1, h2, h3, h4, h5, h6");if(c){const g=(_=c.textContent)==null?void 0:_.trim();if(g&&g.length<=50)return g;if(g)return g.slice(0,47)+"..."}const{name:u}=Va(o);return u.charAt(0).toUpperCase()+u.slice(1)}function cy(o){const n=o.className;return typeof n!="string"||!n?null:n.split(/\s+/).map(l=>l.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(l=>l.length>2&&!/^[a-z]{1,2}$/.test(l))||null}function uy(o){var l;const n=(l=o.textContent)==null?void 0:l.trim();if(!n)return null;const i=n.replace(/\s+/g," ");return i.length<=30?i:i.slice(0,30)+"…"}function tw(){const o=document.querySelector("main")||document.body,n=Array.from(o.children);let i=n;o!==document.body&&n.length<3&&(i=Array.from(document.body.children));const l=[];return i.forEach((c,u)=>{if(!(c instanceof HTMLElement))return;const _=c.tagName.toLowerCase();if(Jv.has(_)||c.hasAttribute("data-feedback-toolbar")||c.closest("[data-feedback-toolbar]"))return;const g=window.getComputedStyle(c);if(g.display==="none"||g.visibility==="hidden")return;const h=c.getBoundingClientRect();if(h.height<ew)return;const m=Zv.has(_),p=c.getAttribute("role")&&nh[c.getAttribute("role")],y=_==="div"&&h.height>=60;if(!m&&!p&&!y)return;const v=window.scrollY,C=ry(c),k={x:h.x,y:C?h.y:h.y+v,width:h.width,height:h.height};l.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:_u(c),tagName:_,selector:ea(c),role:c.getAttribute("role"),className:cy(c),textSnippet:uy(c),originalRect:k,currentRect:{...k},originalIndex:u,isFixed:C})}),l}function nw(o){const n=window.scrollY,i=o.getBoundingClientRect(),l=ry(o),c={x:i.x,y:l?i.y:i.y+n,width:i.width,height:i.height},u=o.parentElement;let _=0;return u&&(_=Array.from(u.children).indexOf(o)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:_u(o),tagName:o.tagName.toLowerCase(),selector:ea(o),role:o.getAttribute("role"),className:cy(o),textSnippet:uy(o),originalRect:c,currentRect:{...c},originalIndex:_,isFixed:l}}var f0={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},h0=["nw","n","ne","e","se","s","sw","w"],qc=24,_0=16,Qc=5;function m0(o,n,i,l){let c=1/0,u=1/0;const _=o.x,g=o.x+o.width,h=o.x+o.width/2,m=o.y,p=o.y+o.height,y=o.y+o.height/2,v=[];for(const F of n)i.has(F.id)||v.push(F.currentRect);l&&v.push(...l);for(const F of v){const le=F.x,ge=F.x+F.width,xe=F.x+F.width/2,ue=F.y,K=F.y+F.height,Xe=F.y+F.height/2;for(const _e of[_,g,h])for(const Se of[le,ge,xe]){const N=Se-_e;Math.abs(N)<Qc&&Math.abs(N)<Math.abs(c)&&(c=N)}for(const _e of[m,p,y])for(const Se of[ue,K,Xe]){const N=Se-_e;Math.abs(N)<Qc&&Math.abs(N)<Math.abs(u)&&(u=N)}}const C=Math.abs(c)<Qc?c:0,k=Math.abs(u)<Qc?u:0,M=[],L=new Set,B=_+C,J=g+C,G=h+C,z=m+k,de=p+k,he=y+k;for(const F of v){const le=F.x,ge=F.x+F.width,xe=F.x+F.width/2,ue=F.y,K=F.y+F.height,Xe=F.y+F.height/2;for(const _e of[le,xe,ge])for(const Se of[B,G,J])if(Math.abs(Se-_e)<.5){const N=`x:${Math.round(_e)}`;L.has(N)||(L.add(N),M.push({axis:"x",pos:_e}))}for(const _e of[ue,Xe,K])for(const Se of[z,he,de])if(Math.abs(Se-_e)<.5){const N=`y:${Math.round(_e)}`;L.has(N)||(L.add(N),M.push({axis:"y",pos:_e}))}}return{dx:C,dy:k,guides:M}}var sw=new Set(["script","style","noscript","link","meta","br","hr"]);function p0(o){let n=o;for(;n&&n!==document.body&&n!==document.documentElement;){if(n.closest("[data-feedback-toolbar]"))return null;if(sw.has(n.tagName.toLowerCase())){n=n.parentElement;continue}const i=n.getBoundingClientRect();if(i.width>=_0&&i.height>=_0)return n;n=n.parentElement}return null}function ow({rearrangeState:o,onChange:n,isDarkMode:i,exiting:l,className:c,blankCanvas:u,extraSnapRects:_,onSelectionChange:g,deselectSignal:h,onDragMove:m,onDragEnd:p,clearSignal:y}){const{sections:v}=o,C=b.useRef(o);C.current=o;const[k,M]=b.useState(new Set),[L,B]=b.useState(!1),J=b.useRef(y);b.useEffect(()=>{y!==void 0&&y!==J.current&&(J.current=y,v.length>0&&B(!0))},[y,v.length]);const G=b.useRef(h);b.useEffect(()=>{h!==G.current&&(G.current=h,M(new Set))},[h]);const[z,de]=b.useState(null),[he,F]=b.useState(!1),le=b.useRef(!1),ge=b.useCallback(I=>{const Y=v.find(oe=>oe.id===I);Y&&(le.current=!!Y.note,de(I),F(!1))},[v]),xe=b.useCallback(()=>{z&&(F(!0),tt(()=>{de(null),F(!1)},150))},[z]),ue=b.useCallback(I=>{z&&(n({...o,sections:v.map(Y=>Y.id===z?{...Y,note:I.trim()||void 0}:Y)}),xe())},[z,v,o,n,xe]);b.useEffect(()=>{l&&z&&xe()},[l]);const[K,Xe]=b.useState(new Set),_e=b.useRef(new Map),[Se,N]=b.useState(null),[ce,W]=b.useState(null),[be,De]=b.useState([]),[A,Z]=b.useState(0),pe=b.useRef(null),je=b.useRef(new Set),qe=b.useRef(new Map),[rt,dt]=b.useState(new Map),[en,Qe]=b.useState(new Map),$e=b.useRef(new Set),pt=b.useRef(new Map),Je=b.useRef(g);Je.current=g;const ut=b.useRef(m);ut.current=m;const At=b.useRef(p);At.current=p,b.useEffect(()=>{u&&M(new Set)},[u]);const[dn,bn]=b.useState(()=>!o.sections.some(I=>{const Y=I.originalRect,oe=I.currentRect;return Math.abs(Y.x-oe.x)>1||Math.abs(Y.y-oe.y)>1||Math.abs(Y.width-oe.width)>1||Math.abs(Y.height-oe.height)>1}));b.useEffect(()=>{if(!dn){const I=tt(()=>bn(!0),380);return()=>clearTimeout(I)}},[]);const mn=b.useRef(new Set);b.useEffect(()=>{mn.current=new Set(v.map(I=>I.selector))},[v]),b.useEffect(()=>{const I=()=>Z(window.scrollY);return I(),window.addEventListener("scroll",I,{passive:!0}),window.addEventListener("resize",I,{passive:!0}),()=>{window.removeEventListener("scroll",I),window.removeEventListener("resize",I)}},[]),b.useEffect(()=>{const I=Y=>{if(pe.current){N(null);return}const oe=document.elementFromPoint(Y.clientX,Y.clientY);if(!oe){N(null);return}if(oe.closest("[data-feedback-toolbar]")){N(null);return}if(oe.closest("[data-design-placement]")){N(null);return}if(oe.closest("[data-annotation-popup]")){N(null);return}const re=p0(oe);if(!re){N(null);return}for(const ke of mn.current)try{const me=document.querySelector(ke);if(me&&(me===re||re.contains(me))){N(null);return}}catch{}const Oe=re.getBoundingClientRect();N({x:Oe.x,y:Oe.y,w:Oe.width,h:Oe.height})};return document.addEventListener("mousemove",I,{passive:!0}),()=>document.removeEventListener("mousemove",I)},[v]),b.useEffect(()=>{const I=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=I}},[]),b.useEffect(()=>{const I=Y=>{var me,it,ft,jt;if(pe.current||Y.button!==0)return;const oe=Y.target;if(!oe||oe.closest("[data-feedback-toolbar]")||oe.closest("[data-design-placement]")||oe.closest("[data-annotation-popup]"))return;const re=p0(oe);let Oe=!1;if(re)for(const st of mn.current)try{const Ae=document.querySelector(st);if(Ae&&(Ae===re||re.contains(Ae))){Oe=!0;break}}catch{}const ke=!!(Y.shiftKey||Y.metaKey||Y.ctrlKey);if(re&&!Oe){Y.preventDefault(),Y.stopPropagation();const st=nw(re),Ae=[...v,st],wt=[...o.originalOrder,st.id];n({...o,sections:Ae,originalOrder:wt});const Et=new Set([st.id]);M(Et),(me=Je.current)==null||me.call(Je,Et,ke),N(null);const Wt=Y.clientX,Re=Y.clientY,yt={x:st.currentRect.x,y:st.currentRect.y};st.originalRect;let xt=!1,ht=0,fn=0;pe.current="move";const Ge=vn=>{var Yt;const Yn=vn.clientX-Wt,In=vn.clientY-Re;if(!xt&&(Math.abs(Yn)>2||Math.abs(In)>2)&&(xt=!0),!xt)return;const oo={x:yt.x+Yn,y:yt.y+In,width:st.currentRect.width,height:st.currentRect.height},vs=m0(oo,Ae,new Set([st.id]),_);De(vs.guides);const Zn=Yn+vs.dx,ln=In+vs.dy;ht=Zn,fn=ln;const Dn=document.querySelector(`[data-rearrange-section="${st.id}"]`);Dn&&(Dn.style.transform=`translate(${Zn}px, ${ln}px)`),dt(new Map([[st.id,{x:yt.x+Zn,y:yt.y+ln,width:st.currentRect.width,height:st.currentRect.height}]])),(Yt=ut.current)==null||Yt.call(ut,Zn,ln)},Lt=()=>{var Yn;window.removeEventListener("mousemove",Ge),window.removeEventListener("mouseup",Lt),pe.current=null,De([]),dt(new Map);const vn=document.querySelector(`[data-rearrange-section="${st.id}"]`);vn&&(vn.style.transform=""),xt&&n({...o,sections:Ae.map(In=>In.id===st.id?{...In,currentRect:{...In.currentRect,x:Math.max(0,yt.x+ht),y:Math.max(0,yt.y+fn)}}:In),originalOrder:wt}),(Yn=At.current)==null||Yn.call(At,ht,fn,xt)};window.addEventListener("mousemove",Ge),window.addEventListener("mouseup",Lt)}else if(Oe&&re){Y.preventDefault();for(const st of v)try{const Ae=document.querySelector(st.selector);if(Ae&&Ae===re){const wt=new Set([st.id]);M(wt),(it=Je.current)==null||it.call(Je,wt,ke);return}}catch{}ke||(M(new Set),(ft=Je.current)==null||ft.call(Je,new Set,!1))}else ke||(M(new Set),(jt=Je.current)==null||jt.call(Je,new Set,!1))};return document.addEventListener("mousedown",I,!0),()=>document.removeEventListener("mousedown",I,!0)},[v,o,n]),b.useEffect(()=>{const I=Y=>{const oe=Y.target;if(!(oe.tagName==="INPUT"||oe.tagName==="TEXTAREA"||oe.isContentEditable)){if((Y.key==="Backspace"||Y.key==="Delete")&&k.size>0){Y.preventDefault();const re=new Set(k);Xe(Oe=>{const ke=new Set(Oe);for(const me of re)ke.add(me);return ke}),M(new Set),tt(()=>{const Oe=C.current;n({...Oe,sections:Oe.sections.filter(ke=>!re.has(ke.id)),originalOrder:Oe.originalOrder.filter(ke=>!re.has(ke))}),Xe(ke=>{const me=new Set(ke);for(const it of re)me.delete(it);return me})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(Y.key)&&k.size>0){Y.preventDefault();const re=Y.shiftKey?20:1,Oe=Y.key==="ArrowLeft"?-re:Y.key==="ArrowRight"?re:0,ke=Y.key==="ArrowUp"?-re:Y.key==="ArrowDown"?re:0;n({...o,sections:v.map(me=>k.has(me.id)?{...me,currentRect:{...me.currentRect,x:Math.max(0,me.currentRect.x+Oe),y:Math.max(0,me.currentRect.y+ke)}}:me)});return}Y.key==="Escape"&&k.size>0&&M(new Set)}};return document.addEventListener("keydown",I),()=>document.removeEventListener("keydown",I)},[k,v,o,n]);const Q=b.useCallback((I,Y)=>{var Wt;if(I.button!==0)return;const oe=I.target;if(oe.closest(`.${ne.handle}`)||oe.closest(`.${ne.deleteButton}`))return;I.preventDefault(),I.stopPropagation();let re;I.shiftKey||I.metaKey||I.ctrlKey?(re=new Set(k),re.has(Y)?re.delete(Y):re.add(Y)):k.has(Y)?re=new Set(k):re=new Set([Y]),M(re),(re.size!==k.size||[...re].some(Re=>!k.has(Re)))&&((Wt=Je.current)==null||Wt.call(Je,re,!!(I.shiftKey||I.metaKey||I.ctrlKey)));const ke=I.clientX,me=I.clientY,it=new Map;for(const Re of v)re.has(Re.id)&&it.set(Re.id,{x:Re.currentRect.x,y:Re.currentRect.y});pe.current="move";let ft=!1,jt=0,st=0;const Ae=new Map;for(const Re of v)if(re.has(Re.id)){const yt=document.querySelector(`[data-rearrange-section="${Re.id}"]`);Ae.set(Re.id,{outlineEl:yt,curW:Re.currentRect.width,curH:Re.currentRect.height})}const wt=Re=>{var vs;const yt=Re.clientX-ke,xt=Re.clientY-me;if(yt===0&&xt===0)return;ft=!0;let ht=1/0,fn=1/0,Ge=-1/0,Lt=-1/0;for(const[Zn,{curW:ln,curH:Dn}]of Ae){const Yt=it.get(Zn);if(!Yt)continue;const jn=Yt.x+yt,Ee=Yt.y+xt;ht=Math.min(ht,jn),fn=Math.min(fn,Ee),Ge=Math.max(Ge,jn+ln),Lt=Math.max(Lt,Ee+Dn)}const vn=m0({x:ht,y:fn,width:Ge-ht,height:Lt-fn},v,re,_),Yn=yt+vn.dx,In=xt+vn.dy;jt=Yn,st=In,De(vn.guides);for(const[,{outlineEl:Zn}]of Ae)Zn&&(Zn.style.transform=`translate(${Yn}px, ${In}px)`);const oo=new Map;for(const[Zn,{curW:ln,curH:Dn}]of Ae){const Yt=it.get(Zn);if(Yt){const jn={x:Math.max(0,Yt.x+Yn),y:Math.max(0,Yt.y+In),width:ln,height:Dn};oo.set(Zn,jn)}}dt(oo),(vs=ut.current)==null||vs.call(ut,Yn,In)},Et=Re=>{var yt,xt;window.removeEventListener("mousemove",wt),window.removeEventListener("mouseup",Et),pe.current=null,De([]),dt(new Map);for(const[,{outlineEl:ht}]of Ae)ht&&(ht.style.transform="");if(ft){const ht=Re.clientX-ke,fn=Re.clientY-me;if(Math.abs(ht)<5&&Math.abs(fn)<5)n({...o,sections:v.map(Ge=>{const Lt=it.get(Ge.id);return Lt?{...Ge,currentRect:{...Ge.currentRect,x:Lt.x,y:Lt.y}}:Ge})});else{n({...o,sections:v.map(Ge=>{const Lt=it.get(Ge.id);return Lt?{...Ge,currentRect:{...Ge.currentRect,x:Math.max(0,Lt.x+jt),y:Math.max(0,Lt.y+st)}}:Ge})}),(yt=At.current)==null||yt.call(At,jt,st,!0);return}}(xt=At.current)==null||xt.call(At,0,0,!1)};window.addEventListener("mousemove",wt),window.addEventListener("mouseup",Et)},[k,v,o,n]),Me=b.useCallback((I,Y,oe)=>{I.preventDefault(),I.stopPropagation();const re=v.find(wt=>wt.id===Y);if(!re)return;M(new Set([Y])),pe.current="resize";const Oe=I.clientX,ke=I.clientY,me={...re.currentRect};re.originalRect;const it=me.width/me.height;let ft={...me};const jt=document.querySelector(`[data-rearrange-section="${Y}"]`),st=wt=>{const Et=wt.clientX-Oe,Wt=wt.clientY-ke;let Re=me.x,yt=me.y,xt=me.width,ht=me.height;if(oe.includes("e")&&(xt=Math.max(qc,me.width+Et)),oe.includes("w")&&(xt=Math.max(qc,me.width-Et),Re=me.x+me.width-xt),oe.includes("s")&&(ht=Math.max(qc,me.height+Wt)),oe.includes("n")&&(ht=Math.max(qc,me.height-Wt),yt=me.y+me.height-ht),wt.shiftKey)if(oe.length===2){const Ge=Math.abs(xt-me.width),Lt=Math.abs(ht-me.height);Ge>Lt?ht=xt/it:xt=ht*it,oe.includes("w")&&(Re=me.x+me.width-xt),oe.includes("n")&&(yt=me.y+me.height-ht)}else oe==="e"||oe==="w"?ht=xt/it:xt=ht*it,oe==="w"&&(Re=me.x+me.width-xt),oe==="n"&&(yt=me.y+me.height-ht);ft={x:Re,y:yt,width:xt,height:ht},jt&&(jt.style.left=`${Re}px`,jt.style.top=`${yt-A}px`,jt.style.width=`${xt}px`,jt.style.height=`${ht}px`),W({x:wt.clientX+12,y:wt.clientY+12,text:`${Math.round(xt)} × ${Math.round(ht)}`}),dt(new Map([[Y,ft]]))},Ae=()=>{window.removeEventListener("mousemove",st),window.removeEventListener("mouseup",Ae),W(null),pe.current=null,dt(new Map),n({...o,sections:v.map(wt=>wt.id===Y?{...wt,currentRect:ft}:wt)})};window.addEventListener("mousemove",st),window.addEventListener("mouseup",Ae)},[v,o,n,A]),Fe=b.useCallback(I=>{Xe(Y=>{const oe=new Set(Y);return oe.add(I),oe}),M(Y=>{const oe=new Set(Y);return oe.delete(I),oe}),tt(()=>{const Y=C.current;n({...Y,sections:Y.sections.filter(oe=>oe.id!==I),originalOrder:Y.originalOrder.filter(oe=>oe!==I)}),Xe(oe=>{const re=new Set(oe);return re.delete(I),re})},180)},[n]),Ve=I=>{const Y=I.originalRect,oe=I.currentRect;return Math.abs(Y.x-oe.x)>1||Math.abs(Y.y-oe.y)>1||Math.abs(Y.width-oe.width)>1||Math.abs(Y.height-oe.height)>1},nt=I=>{const Y=I.originalRect,oe=I.currentRect;return Math.abs(Y.x-oe.x)>1||Math.abs(Y.y-oe.y)>1},Ue=I=>{const Y=I.originalRect,oe=I.currentRect;return Math.abs(Y.width-oe.width)>1||Math.abs(Y.height-oe.height)>1};for(const I of v)qe.current.has(I.id)||(nt(I)?qe.current.set(I.id,"move"):Ue(I)&&qe.current.set(I.id,"resize"));for(const I of qe.current.keys())v.some(Y=>Y.id===I)||qe.current.delete(I);const Te=v.filter(I=>{try{if(K.has(I.id)||k.has(I.id))return!0;const Y=document.querySelector(I.selector);if(!Y)return!1;const oe=Y.getBoundingClientRect(),re=I.originalRect;return Math.abs(oe.width-re.width)+Math.abs(oe.height-re.height)<200}catch{return!1}}),ct=Te.filter(I=>Ve(I)),St=Te.filter(I=>!Ve(I)),Ht=new Set(ct.map(I=>I.id));for(const I of je.current)Ht.has(I)||je.current.delete(I);const ze=[...Ht].sort().join(",");for(const I of ct)pt.current.set(I.id,{currentRect:I.currentRect,originalRect:I.originalRect,isFixed:I.isFixed});return b.useEffect(()=>{const I=$e.current;$e.current=Ht;const Y=new Map;for(const oe of I)if(!Ht.has(oe)){if(!v.some(Oe=>Oe.id===oe))continue;const re=pt.current.get(oe);re&&(Y.set(oe,{orig:re.originalRect,target:re.currentRect,isFixed:re.isFixed}),pt.current.delete(oe))}if(Y.size>0){Qe(re=>{const Oe=new Map(re);for(const[ke,me]of Y)Oe.set(ke,me);return Oe});const oe=tt(()=>{Qe(re=>{const Oe=new Map(re);for(const ke of Y.keys())Oe.delete(ke);return Oe})},250);return()=>clearTimeout(oe)}},[ze,v]),r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:`${ne.rearrangeOverlay} ${i?"":ne.light} ${l?ne.overlayExiting:""}${c?` ${c}`:""}`,"data-feedback-toolbar":!0,children:[Se&&r.jsx("div",{className:ne.hoverHighlight,style:{left:Se.x,top:Se.y,width:Se.w,height:Se.h}}),St.map(I=>{const Y=I.currentRect,oe=I.isFixed?Y.y:Y.y-A,re=f0,Oe=k.has(I.id);return r.jsxs("div",{"data-rearrange-section":I.id,className:`${ne.sectionOutline} ${Oe?ne.selected:""} ${L||l||K.has(I.id)?ne.exiting:""}`,style:{left:Y.x,top:oe,width:Y.width,height:Y.height,borderColor:re.border,backgroundColor:re.bg,...dn?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:ke=>Q(ke,I.id),onDoubleClick:()=>ge(I.id),children:[r.jsx("span",{className:ne.sectionLabel,style:{backgroundColor:re.pill},children:I.label}),r.jsx("span",{className:`${ne.sectionAnnotation} ${I.note?ne.annotationVisible:""}`,children:(I.note&&_e.current.set(I.id,I.note),I.note||_e.current.get(I.id)||"")}),r.jsxs("span",{className:ne.sectionDimensions,children:[Math.round(Y.width)," × ",Math.round(Y.height)]}),r.jsx("div",{className:ne.deleteButton,onMouseDown:ke=>ke.stopPropagation(),onClick:()=>Fe(I.id),children:"✕"}),h0.map(ke=>r.jsx("div",{className:`${ne.handle} ${ne[`handle${ke.charAt(0).toUpperCase()}${ke.slice(1)}`]}`,onMouseDown:me=>Me(me,I.id,ke)},ke))]},I.id)}),ct.map(I=>{const Y=I.currentRect,oe=I.isFixed?Y.y:Y.y-A,re=k.has(I.id),Oe=nt(I),ke=Ue(I);if(u&&!re)return null;const it=!je.current.has(I.id);return it&&je.current.add(I.id),r.jsxs("div",{"data-rearrange-section":I.id,className:`${ne.ghostOutline} ${re?ne.selected:""} ${L||l||K.has(I.id)?ne.exiting:""}`,style:{left:Y.x,top:oe,width:Y.width,height:Y.height,...dn?{}:{opacity:0,animation:"none",transition:"none"},...it?{}:{animation:"none"}},onMouseDown:ft=>Q(ft,I.id),onDoubleClick:()=>ge(I.id),children:[r.jsx("span",{className:ne.sectionLabel,style:{backgroundColor:f0.pill},children:I.label}),r.jsx("span",{className:`${ne.sectionAnnotation} ${I.note?ne.annotationVisible:""}`,children:(I.note&&_e.current.set(I.id,I.note),I.note||_e.current.get(I.id)||"")}),r.jsxs("span",{className:ne.sectionDimensions,children:[Math.round(Y.width)," × ",Math.round(Y.height)]}),r.jsx("div",{className:ne.deleteButton,onMouseDown:ft=>ft.stopPropagation(),onClick:()=>Fe(I.id),children:"✕"}),h0.map(ft=>r.jsx("div",{className:`${ne.handle} ${ne[`handle${ft.charAt(0).toUpperCase()}${ft.slice(1)}`]}`,onMouseDown:jt=>Me(jt,I.id,ft)},ft)),r.jsx("span",{className:ne.ghostBadge,children:(()=>{const ft=qe.current.get(I.id);if(Oe&&ke){const[jt,st]=ft==="resize"?["Resize","Move"]:["Move","Resize"];return r.jsxs(r.Fragment,{children:["Suggested ",jt," ",r.jsxs("span",{className:ne.ghostBadgeExtra,children:["& ",st]})]})}return`Suggested ${ke?"Resize":"Move"}`})()})]},I.id)})]}),!u&&(()=>{const I=[];for(const Y of ct){const oe=rt.get(Y.id);I.push({id:Y.id,orig:Y.originalRect,target:oe||Y.currentRect,isFixed:Y.isFixed,isSelected:k.has(Y.id),isExiting:K.has(Y.id)})}for(const[Y,oe]of rt)if(!I.some(re=>re.id===Y)){const re=v.find(Oe=>Oe.id===Y);re&&I.push({id:Y,orig:re.originalRect,target:oe,isFixed:re.isFixed,isSelected:k.has(Y)})}for(const[Y,oe]of en)I.some(re=>re.id===Y)||I.push({id:Y,orig:oe.orig,target:oe.target,isFixed:oe.isFixed,isSelected:!1,isExiting:!0});return I.length===0?null:r.jsxs("svg",{className:`${ne.connectorSvg} ${L||l?ne.connectorExiting:""}`,children:[I.map(({id:Y,orig:oe,target:re,isFixed:Oe,isSelected:ke,isExiting:me})=>{const it=oe.x+oe.width/2,ft=(Oe?oe.y:oe.y-A)+oe.height/2,jt=re.x+re.width/2,st=(Oe?re.y:re.y-A)+re.height/2,Ae=jt-it,wt=st-ft,Et=Math.sqrt(Ae*Ae+wt*wt);if(Et<2)return null;const Wt=Math.min(1,Et/40),Re=Math.min(Et*.3,60),yt=Et>0?-wt/Et:0,xt=Et>0?Ae/Et:0,ht=(it+jt)/2+yt*Re,fn=(ft+st)/2+xt*Re,Ge=rt.has(Y),Lt=Ge||ke?1:.4,vn=Ge||ke?1:.5;return r.jsxs("g",{className:me?ne.connectorExiting:"",children:[r.jsx("path",{className:ne.connectorLine,d:`M ${it} ${ft} Q ${ht} ${fn} ${jt} ${st}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:Lt*Wt}),r.jsx("circle",{className:ne.connectorDot,cx:it,cy:ft,r:4*Wt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:vn*Wt,filter:"url(#connDotShadow)"}),r.jsx("circle",{className:ne.connectorDot,cx:jt,cy:st,r:4*Wt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:vn*Wt,filter:"url(#connDotShadow)"})]},`conn-${Y}`)}),r.jsx("defs",{children:r.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:r.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),z&&(()=>{const I=v.find(st=>st.id===z);if(!I)return null;const Y=I.currentRect,oe=I.isFixed?Y.y:Y.y-A,re=Y.x+Y.width/2,Oe=oe-8,ke=oe+Y.height+8,me=Oe>200,it=ke<window.innerHeight-100,ft=Math.max(160,Math.min(window.innerWidth-160,re));let jt;return me?jt={left:ft,bottom:window.innerHeight-Oe}:it?jt={left:ft,top:ke}:jt={left:ft,top:Math.max(80,window.innerHeight/2-80)},r.jsx(hu,{element:I.label,placeholder:"Add a note about this section",initialValue:I.note??"",submitLabel:le.current?"Save":"Set",onSubmit:ue,onCancel:xe,onDelete:le.current?()=>{ue("")}:void 0,isExiting:he,lightMode:!i,style:jt})})(),ce&&r.jsx("div",{className:ne.sizeIndicator,style:{left:ce.x,top:ce.y},"data-feedback-toolbar":!0,children:ce.text}),be.map((I,Y)=>r.jsx("div",{className:ne.guideLine,style:I.axis==="x"?{position:"fixed",left:I.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:I.pos-A,width:"100vw",height:1}},`${I.axis}-${I.pos}-${Y}`))]})}var sh=new Set(["script","style","noscript","link","meta","br","hr"]);function iw(){const o=document.querySelector("main")||document.body,n=[],i=Array.from(o.children),l=o!==document.body&&i.length<3?Array.from(document.body.children):i;for(const c of l){if(!(c instanceof HTMLElement)||sh.has(c.tagName.toLowerCase())||c.hasAttribute("data-feedback-toolbar"))continue;const u=window.getComputedStyle(c);if(u.display==="none"||u.visibility==="hidden")continue;const _=c.getBoundingClientRect();if(!(_.height<10||_.width<10)){n.push({label:_u(c),selector:ea(c),top:_.top,bottom:_.bottom,left:_.left,right:_.right,area:_.width*_.height});for(const g of Array.from(c.children)){if(!(g instanceof HTMLElement)||sh.has(g.tagName.toLowerCase())||g.hasAttribute("data-feedback-toolbar"))continue;const h=window.getComputedStyle(g);if(h.display==="none"||h.visibility==="hidden")continue;const m=g.getBoundingClientRect();m.height<10||m.width<10||n.push({label:_u(g),selector:ea(g),top:m.top,bottom:m.bottom,left:m.left,right:m.right,area:m.width*m.height})}}}return n}function aw(o){const n=window.scrollY;return o.map(({label:i,selector:l,rect:c})=>{const u=c.y-n;return{label:i,selector:l,top:u,bottom:u+c.height,left:c.x,right:c.x+c.width,area:c.width*c.height}})}function lw(o){const n=window.scrollY,i=o.y-n,l=o.x;return{top:i,bottom:i+o.height,left:l,right:l+o.width,area:o.width*o.height}}function oh(o,n){const i=n?aw(n):iw(),l=lw(o);let c=null,u=null,_=null,g=null,h=null;for(const k of i){if(Math.abs(k.left-l.left)<2&&Math.abs(k.top-l.top)<2&&Math.abs(k.right-k.left-o.width)<2&&Math.abs(k.bottom-k.top-o.height)<2)continue;k.left<=l.left+2&&k.right>=l.right-2&&k.top<=l.top+2&&k.bottom>=l.bottom-2&&k.area>l.area*1.5&&(!h||k.area<h._area)&&(h={label:k.label,selector:k.selector,_area:k.area});const M=l.right>k.left+5&&l.left<k.right-5,L=l.bottom>k.top+5&&l.top<k.bottom-5;if(M&&k.bottom<=l.top+5){const B=Math.round(l.top-k.bottom);(!c||B<c._dist)&&(c={label:k.label,selector:k.selector,gap:Math.max(0,B),_dist:B})}if(M&&k.top>=l.bottom-5){const B=Math.round(k.top-l.bottom);(!u||B<u._dist)&&(u={label:k.label,selector:k.selector,gap:Math.max(0,B),_dist:B})}if(L&&k.right<=l.left+5){const B=Math.round(l.left-k.right);(!_||B<_._dist)&&(_={label:k.label,selector:k.selector,gap:Math.max(0,B),_dist:B})}if(L&&k.left>=l.right-5){const B=Math.round(k.left-l.right);(!g||B<g._dist)&&(g={label:k.label,selector:k.selector,gap:Math.max(0,B),_dist:B})}}const m=window.innerWidth,p=window.innerHeight,y=cw(o,m),v=k=>k?{label:k.label,selector:k.selector,gap:k.gap}:null,C=rw(l,o,m,p,h?{label:h.label,selector:h.selector,_area:h._area}:null,i);return{above:v(c),below:v(u),left:v(_),right:v(g),alignment:y,containedIn:h?{label:h.label,selector:h.selector}:null,outOfBounds:C}}function rw(o,n,i,l,c,u){const _={};let g=!1;const h=[];if(o.left<-2&&h.push("left"),o.right>i+2&&h.push("right"),o.top<-2&&h.push("top"),o.bottom>l+2&&h.push("bottom"),h.length>0&&(_.viewport=h,g=!0),c){const m=u.find(p=>p.label===c.label&&p.selector===c.selector&&Math.abs(p.area-c._area)<10);if(m){const p=[];o.left<m.left-2&&p.push("left"),o.right>m.right+2&&p.push("right"),o.top<m.top-2&&p.push("top"),o.bottom>m.bottom+2&&p.push("bottom"),p.length>0&&(_.container={label:c.label,edges:p},g=!0)}}return g?_:null}function cw(o,n){if(o.width/n>.85)return"full-width";const l=o.x+o.width/2,c=n/2,u=l-c,_=n*.08;return Math.abs(u)<_?"center":u<0?"left":"right"}function dy(o){switch(o){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function fy(o,n={}){const i=[];o.above&&i.push(`Below \`${o.above.label}\`${o.above.gap>0?` (${o.above.gap}px gap)`:""}`),o.below&&i.push(`Above \`${o.below.label}\`${o.below.gap>0?` (${o.below.gap}px gap)`:""}`),n.includeLeftRight&&(o.left&&i.push(`Right of \`${o.left.label}\`${o.left.gap>0?` (${o.left.gap}px gap)`:""}`),o.right&&i.push(`Left of \`${o.right.label}\`${o.right.gap>0?` (${o.right.gap}px gap)`:""}`));const l=dy(o.alignment);return o.containedIn?i.push(`${l.charAt(0).toUpperCase()+l.slice(1)} in \`${o.containedIn.label}\``):i.push(`${l.charAt(0).toUpperCase()+l.slice(1)} in page`),n.includePixelRef&&n.pixelRef&&i.push(`Pixel ref: \`${n.pixelRef}\``),o.outOfBounds&&(o.outOfBounds.viewport&&i.push(`**Outside viewport** (${o.outOfBounds.viewport.join(", ")} edge${o.outOfBounds.viewport.length>1?"s":""})`),o.outOfBounds.container&&i.push(`**Outside \`${o.outOfBounds.container.label}\`** (${o.outOfBounds.container.edges.join(", ")} edge${o.outOfBounds.container.edges.length>1?"s":""})`)),i}function uw(o,n,i){var u,_;const l=[];o.above&&l.push(`below \`${o.above.label}\``),o.below&&l.push(`above \`${o.below.label}\``),o.left&&l.push(`right of \`${o.left.label}\``),o.right&&l.push(`left of \`${o.right.label}\``),o.containedIn&&l.push(`inside \`${o.containedIn.label}\``),l.push(dy(o.alignment)),(u=o.outOfBounds)!=null&&u.viewport&&l.push(`**outside viewport** (${o.outOfBounds.viewport.join(", ")})`),(_=o.outOfBounds)!=null&&_.container&&l.push(`**outside \`${o.outOfBounds.container.label}\`** (${o.outOfBounds.container.edges.join(", ")})`);const c=i?`, ${Math.round(i.width)}×${Math.round(i.height)}px`:"";return`at (${Math.round(n.x)}, ${Math.round(n.y)})${c}: ${l.join(", ")}`}var g0=15;function y0(o){if(o.length<2)return[];const n=[],i=new Set;for(let l=0;l<o.length;l++){if(i.has(l))continue;const c=[l];for(let u=l+1;u<o.length;u++)i.has(u)||Math.abs(o[l].rect.y-o[u].rect.y)<g0&&c.push(u);if(c.length>=2){const u=c.map(h=>o[h]);u.sort((h,m)=>h.rect.x-m.rect.x);const _=[];for(let h=0;h<u.length-1;h++)_.push(Math.round(u[h+1].rect.x-(u[h].rect.x+u[h].rect.width)));const g=Math.round(u.reduce((h,m)=>h+m.rect.y,0)/u.length);n.push({labels:u.map(h=>h.label),type:"row",sharedEdge:g,gaps:_,avgGap:_.length?Math.round(_.reduce((h,m)=>h+m,0)/_.length):0}),c.forEach(h=>i.add(h))}}for(let l=0;l<o.length;l++){if(i.has(l))continue;const c=[l];for(let u=l+1;u<o.length;u++)i.has(u)||Math.abs(o[l].rect.x-o[u].rect.x)<g0&&c.push(u);if(c.length>=2){const u=c.map(h=>o[h]);u.sort((h,m)=>h.rect.y-m.rect.y);const _=[];for(let h=0;h<u.length-1;h++)_.push(Math.round(u[h+1].rect.y-(u[h].rect.y+u[h].rect.height)));const g=Math.round(u.reduce((h,m)=>h+m.rect.x,0)/u.length);n.push({labels:u.map(h=>h.label),type:"column",sharedEdge:g,gaps:_,avgGap:_.length?Math.round(_.reduce((h,m)=>h+m,0)/_.length):0}),c.forEach(h=>i.add(h))}}return n}function dw(o){if(o.length<2)return[];const n=y0(o.map(_=>({label:_.label,rect:_.originalRect}))),i=y0(o.map(_=>({label:_.label,rect:_.currentRect}))),l=[],c=new Set;for(const _ of n){const g=new Set(_.labels);let h=null,m=0;for(const p of i){const y=p.labels.filter(v=>g.has(v)).length;y>=2&&y>m&&(h=p,m=y)}if(h){const p=h.labels.filter(v=>g.has(v)),y=p.join(", ");if(h.type!==_.type){const v=_.type==="row"?"y":"x",C=h.type==="row"?"y":"x";l.push(`**${y}**: ${_.type} (${v}≈${_.sharedEdge}, ${_.avgGap}px gaps) → ${h.type} (${C}≈${h.sharedEdge}, ${h.avgGap}px gaps)`)}else if(Math.abs(_.sharedEdge-h.sharedEdge)>20||Math.abs(_.avgGap-h.avgGap)>5){const v=_.type==="row"?"y":"x",C=Math.abs(_.sharedEdge-h.sharedEdge)>20?` ${v}: ${_.sharedEdge} → ${h.sharedEdge}`:"",k=Math.abs(_.avgGap-h.avgGap)>5?` gaps: ${_.avgGap}px → ${h.avgGap}px`:"";l.push(`**${y}**: ${_.type} shifted —${C}${k}`)}p.forEach(v=>c.add(v))}else{const p=_.labels.join(", "),y=_.type==="row"?"y":"x";l.push(`**${p}**: ${_.type} (${y}≈${_.sharedEdge}) dissolved`),_.labels.forEach(v=>c.add(v))}}for(const _ of i){if(_.labels.every(m=>c.has(m))||_.labels.filter(m=>!c.has(m)).length<2)continue;if(!n.some(m=>m.labels.filter(y=>_.labels.includes(y)).length>=2)){const m=_.type==="row"?"y":"x";l.push(`**${_.labels.join(", ")}**: new ${_.type} (${m}≈${_.sharedEdge}, ${_.avgGap}px gaps)`),_.labels.forEach(p=>c.add(p))}}const u=o.filter(_=>!c.has(_.label));if(u.length>=2){const _={};for(const g of u){const h=Math.round(g.currentRect.x/5)*5;(_[h]??(_[h]=[])).push(g.label)}for(const[g,h]of Object.entries(_))h.length>=2&&l.push(`**${h.join(", ")}**: shared left edge at x≈${g}`)}return l}function hy(o){if(typeof document>"u")return{viewport:o,contentArea:null};const n=[],i=new Set,l=g=>{i.has(g)||g instanceof HTMLElement&&(g.hasAttribute("data-feedback-toolbar")||sh.has(g.tagName.toLowerCase())||(i.add(g),n.push(g)))},c=document.querySelector("main");c&&l(c);const u=document.querySelector("[role='main']");u&&l(u);for(const g of Array.from(document.body.children))if(l(g),g.children){for(const h of Array.from(g.children))if(l(h),h.children)for(const m of Array.from(h.children))l(m)}let _=null;for(const g of n){const h=g.getBoundingClientRect();if(h.height<50)continue;const m=getComputedStyle(g);if(m.maxWidth&&m.maxWidth!=="none"&&m.maxWidth!=="0px"){(!_||h.width<_.rect.width)&&(_={el:g,rect:h});continue}!_&&h.width<o.width-20&&h.width>100&&(_={el:g,rect:h})}if(_){const{el:g,rect:h}=_;return{viewport:o,contentArea:{width:Math.round(h.width),left:Math.round(h.left),right:Math.round(h.right),centerX:Math.round(h.left+h.width/2),selector:ea(g)}}}return{viewport:o,contentArea:null}}function fw(o){if(typeof document>"u")return null;const n=document.querySelector(o);if(!(n!=null&&n.parentElement))return null;const i=getComputedStyle(n.parentElement),l={parentDisplay:i.display,parentSelector:ea(n.parentElement)};return i.display.includes("flex")&&(l.flexDirection=i.flexDirection),i.display.includes("grid")&&i.gridTemplateColumns!=="none"&&(l.gridCols=i.gridTemplateColumns),i.gap&&i.gap!=="normal"&&i.gap!=="0px"&&(l.gap=i.gap),l}function _y(o,n){const i=n.contentArea,l=i?i.width:n.viewport.width,c=i?i.left:0,u=i?i.centerX:Math.round(n.viewport.width/2),_=Math.round(o.x-c),g=Math.round(c+l-(o.x+o.width)),h=(o.width/l*100).toFixed(1),m=o.x+o.width/2,p=Math.abs(m-u)<20,y=o.width/l>.95,v=[];return y?v.push("`width: 100%` of container"):v.push(`left \`${_}px\` in container, right \`${g}px\`, width \`${h}%\` (\`${Math.round(o.width)}px\`)`),p&&!y&&v.push("centered — `margin-inline: auto`"),v.join(" — ")}function my(o){const{viewport:n,contentArea:i}=o;let l=`### Reference Frame
`;if(l+=`- Viewport: \`${n.width}×${n.height}px\`
`,i){const c=i;l+=`- Content area: \`${c.width}px\` wide, left edge at \`x=${c.left}\`, right at \`x=${c.right}\` (\`${c.selector}\`)
`,l+=`- Pixel → CSS translation:
`,l+=`  - **Horizontal position in container**: \`element.x - ${c.left}\` → use as \`margin-left\` or \`left\`
`,l+=`  - **Width as % of container**: \`element.width / ${c.width} × 100\` → use as \`width: X%\`
`,l+="  - **Vertical gap between elements**: `nextElement.y - (prevElement.y + prevElement.height)` → use as `margin-top` or `gap`\n",l+=`  - **Centered**: if \`|element.centerX - ${c.centerX}| < 20px\` → use \`margin-inline: auto\`
`}else l+=`- No distinct content container — elements positioned relative to full viewport
`,l+=`- Pixel → CSS translation:
`,l+=`  - **Width as % of viewport**: \`element.width / ${n.width} × 100\` → use as \`width: X%\`
`,l+=`  - **Centered**: if \`|(element.x + element.width/2) - ${Math.round(n.width/2)}| < 20px\` → use \`margin-inline: auto\`
`;return l+=`
`,l}function hw(o){const n=fw(o);if(!n)return null;let i=`\`${n.parentDisplay}\``;return n.flexDirection&&(i+=`, flex-direction: \`${n.flexDirection}\``),n.gridCols&&(i+=`, grid-template-columns: \`${n.gridCols}\``),n.gap&&(i+=`, gap: \`${n.gap}\``),`Parent: ${i} (\`${n.parentSelector}\`)`}function x0(o,n,i,l="standard"){var L,B,J,G;if(o.length===0)return"";const c=[...o].sort((z,de)=>Math.abs(z.y-de.y)<20?z.x-de.x:z.y-de.y);let u="";if(i!=null&&i.blankCanvas?(u+=`## Wireframe: New Page

`,i.wireframePurpose&&(u+=`> **Purpose:** ${i.wireframePurpose}
>
`),u+=`> ${o.length} component${o.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):u+=`## Design Layout

> ${o.length} component${o.length!==1?"s":""} placed

`,l==="compact")return u+=`### Components
`,c.forEach((z,de)=>{var F;const he=((F=no[z.type])==null?void 0:F.label)||z.type;u+=`${de+1}. **${he}** — \`${Math.round(z.width)}×${Math.round(z.height)}px\` at \`(${Math.round(z.x)}, ${Math.round(z.y)})\`
`}),u;const _=hy(n);u+=my(_),u+=`### Components
`,c.forEach((z,de)=>{var K;const he=((K=no[z.type])==null?void 0:K.label)||z.type,F={x:z.x,y:z.y,width:z.width,height:z.height};u+=`${de+1}. **${he}** — \`${Math.round(z.width)}×${Math.round(z.height)}px\` at \`(${Math.round(z.x)}, ${Math.round(z.y)})\`
`;const le=oh(F),xe=fy(le,{includeLeftRight:l==="detailed"||l==="forensic"});for(const Xe of xe)u+=`   - ${Xe}
`;const ue=_y(F,_);ue&&(u+=`   - CSS: ${ue}
`)}),u+=`
### Layout Analysis
`;const g=[];for(const z of c){const de=g.find(he=>Math.abs(he.y-z.y)<30);de?de.items.push(z):g.push({y:z.y,items:[z]})}if(g.sort((z,de)=>z.y-de.y),g.forEach((z,de)=>{z.items.sort((F,le)=>F.x-le.x);const he=z.items.map(F=>{var le;return((le=no[F.type])==null?void 0:le.label)||F.type});if(z.items.length===1){const le=z.items[0].width>n.width*.8;u+=`- Row ${de+1} (y≈${Math.round(z.y)}): ${he[0]}${le?" — full width":""}
`}else u+=`- Row ${de+1} (y≈${Math.round(z.y)}): ${he.join(" | ")} — ${z.items.length} items side by side
`}),l==="detailed"||l==="forensic"){u+=`
### Spacing & Gaps
`;for(let z=0;z<c.length-1;z++){const de=c[z],he=c[z+1],F=((L=no[de.type])==null?void 0:L.label)||de.type,le=((B=no[he.type])==null?void 0:B.label)||he.type,ge=Math.round(he.y-(de.y+de.height)),xe=Math.round(he.x-(de.x+de.width));Math.abs(de.y-he.y)<30?u+=`- ${F} → ${le}: \`${xe}px\` horizontal gap
`:u+=`- ${F} → ${le}: \`${ge}px\` vertical gap
`}if(l==="forensic"&&c.length>2){u+=`
### All Pairwise Gaps
`;for(let z=0;z<c.length;z++)for(let de=z+1;de<c.length;de++){const he=c[z],F=c[de],le=((J=no[he.type])==null?void 0:J.label)||he.type,ge=((G=no[F.type])==null?void 0:G.label)||F.type,xe=Math.round(F.y-(he.y+he.height)),ue=Math.round(F.x-(he.x+he.width));u+=`- ${le} ↔ ${ge}: h=\`${ue}px\` v=\`${xe}px\`
`}}l==="forensic"&&(u+=`
### Z-Order (placement order)
`,o.forEach((z,de)=>{var F;const he=((F=no[z.type])==null?void 0:F.label)||z.type;u+=`${de}. ${he} at \`(${Math.round(z.x)}, ${Math.round(z.y)})\`
`}))}u+=`
### Suggested Implementation
`;const h=c.some(z=>z.type==="navigation"),m=c.some(z=>z.type==="hero"),p=c.some(z=>z.type==="sidebar"),y=c.some(z=>z.type==="footer"),v=c.filter(z=>z.type==="card"),C=c.filter(z=>z.type==="form"),k=c.filter(z=>z.type==="table"),M=c.filter(z=>z.type==="modal");if(h&&(u+=`- Top navigation bar with logo + nav links + CTA
`),m&&(u+=`- Hero section with heading, subtext, and call-to-action
`),p&&(u+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`),v.length>1?u+=`- ${v.length}-column card grid — use CSS Grid or Flexbox
`:v.length===1&&(u+=`- Card component with image + content area
`),C.length>0&&(u+=`- ${C.length} form${C.length>1?"s":""} — add proper labels, validation, and submit handling
`),k.length>0&&(u+=`- Data table — consider sortable columns and pagination
`),M.length>0&&(u+=`- Modal dialog — add overlay backdrop and focus trapping
`),y&&(u+=`- Multi-column footer with links
`),l==="detailed"||l==="forensic"){if(u+=`
### CSS Suggestions
`,p){const z=c.find(de=>de.type==="sidebar");u+=`- \`display: grid; grid-template-columns: ${Math.round(z.width)}px 1fr;\`
`}if(v.length>1){const z=Math.round(v[0].width);u+=`- \`display: grid; grid-template-columns: repeat(${v.length}, ${z}px); gap: 16px;\`
`}h&&(u+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return u}function b0(o,n="standard",i){const{sections:l}=o,c=[];for(const p of l){const y=p.originalRect,v=p.currentRect,C=Math.abs(y.x-v.x)>1||Math.abs(y.y-v.y)>1,k=Math.abs(y.width-v.width)>1||Math.abs(y.height-v.height)>1;if(!C&&!k){n==="forensic"&&c.push({section:p,posMoved:!1,sizeChanged:!1});continue}c.push({section:p,posMoved:C,sizeChanged:k})}if(c.length===0||n!=="forensic"&&c.every(p=>!p.posMoved&&!p.sizeChanged))return"";let u=`## Suggested Layout Changes

`;const _=i?i.width:typeof window<"u"?window.innerWidth:0,g=i?i.height:typeof window<"u"?window.innerHeight:0,h=hy({width:_,height:g});n!=="compact"&&(u+=my(h)),n==="forensic"&&(u+=`> Detected at: \`${new Date(o.detectedAt).toISOString()}\`
`,u+=`> Total sections: ${l.length}

`);const m=p=>l.map(y=>({label:y.label,selector:y.selector,rect:p==="original"?y.originalRect:y.currentRect}));u+=`**Changes:**
`;for(const{section:p,posMoved:y,sizeChanged:v}of c){const C=p.originalRect,k=p.currentRect;if(!y&&!v){u+=`- ${p.label} — unchanged at (${Math.round(k.x)}, ${Math.round(k.y)}) ${Math.round(k.width)}×${Math.round(k.height)}px
`;continue}if(n==="compact"){y&&v?u+=`- Suggested: move **${p.label}** to (${Math.round(k.x)}, ${Math.round(k.y)}) ${Math.round(k.width)}×${Math.round(k.height)}px
`:y?u+=`- Suggested: move **${p.label}** to (${Math.round(k.x)}, ${Math.round(k.y)})
`:u+=`- Suggested: resize **${p.label}** to ${Math.round(k.width)}×${Math.round(k.height)}px
`;continue}if(y&&v?u+=`- Suggested: move and resize **${p.label}**
`:y?u+=`- Suggested: move **${p.label}**
`:u+=`- Suggested: resize **${p.label}** from ${Math.round(C.width)}×${Math.round(C.height)}px to ${Math.round(k.width)}×${Math.round(k.height)}px
`,y){const L=oh(C,m("original")),B=oh(k,m("current")),J=v?{width:C.width,height:C.height}:void 0;u+=`  - Currently ${uw(L,{x:C.x,y:C.y},J)}
`;const G=v?{width:k.width,height:k.height}:void 0,z=`at (${Math.round(k.x)}, ${Math.round(k.y)})`,de=G?`, ${Math.round(G.width)}×${Math.round(G.height)}px`:"",F=fy(B,{includeLeftRight:n==="detailed"||n==="forensic"});if(F.length>0){u+=`  - Suggested position ${z}${de}: ${F[0]}
`;for(let ge=1;ge<F.length;ge++)u+=`    ${F[ge]}
`}else u+=`  - Suggested position ${z}${de}
`;const le=_y(k,h);le&&(u+=`  - CSS: ${le}
`)}const M=hw(p.selector);if(M&&(u+=`  - ${M}
`),u+=`  - Selector: \`${p.selector}\`
`,n==="detailed"||n==="forensic"){const L=p.className?`${p.tagName}.${p.className.split(" ")[0]}`:p.tagName;L!==p.selector&&(u+=`  - Element: \`${L}\`
`),p.role&&(u+=`  - Role: \`${p.role}\`
`),n==="forensic"&&p.textSnippet&&(u+=`  - Text: "${p.textSnippet}"
`)}n==="forensic"&&(u+=`  - Original rect: \`{ x: ${Math.round(C.x)}, y: ${Math.round(C.y)}, w: ${Math.round(C.width)}, h: ${Math.round(C.height)} }\`
`,u+=`  - Current rect: \`{ x: ${Math.round(k.x)}, y: ${Math.round(k.y)}, w: ${Math.round(k.width)}, h: ${Math.round(k.height)} }\`
`)}if(n!=="compact"){const p=c.filter(v=>v.posMoved).map(v=>({label:v.section.label,originalRect:v.section.originalRect,currentRect:v.section.currentRect})),y=dw(p);if(y.length>0){u+=`
### Layout Summary
`;for(const v of y)u+=`- ${v}
`}}if(n!=="compact"&&l.length>1){u+=`
### All Sections (current positions)
`;const p=[...l].sort((y,v)=>Math.abs(y.currentRect.y-v.currentRect.y)<20?y.currentRect.x-v.currentRect.x:y.currentRect.y-v.currentRect.y);for(const y of p){const v=y.currentRect,C=Math.abs(v.x-y.originalRect.x)>1||Math.abs(v.y-y.originalRect.y)>1||Math.abs(v.width-y.originalRect.width)>1||Math.abs(v.height-y.originalRect.height)>1;u+=`- ${y.label}: \`${Math.round(v.width)}×${Math.round(v.height)}px\` at \`(${Math.round(v.x)}, ${Math.round(v.y)})\`${C?" ← suggested":""}
`}}return u}var ih="feedback-annotations-",py=7;function mu(o){return`${ih}${o}`}function Nf(o){if(typeof window>"u")return[];try{const n=localStorage.getItem(mu(o));if(!n)return[];const i=JSON.parse(n),l=Date.now()-py*24*60*60*1e3;return i.filter(c=>!c.timestamp||c.timestamp>l)}catch{return[]}}function gy(o,n){if(!(typeof window>"u"))try{localStorage.setItem(mu(o),JSON.stringify(n))}catch{}}function _w(){const o=new Map;if(typeof window>"u")return o;try{const n=Date.now()-py*24*60*60*1e3;for(let i=0;i<localStorage.length;i++){const l=localStorage.key(i);if(l!=null&&l.startsWith(ih)){const c=l.slice(ih.length),u=localStorage.getItem(l);if(u){const g=JSON.parse(u).filter(h=>!h.timestamp||h.timestamp>n);g.length>0&&o.set(c,g)}}}}catch{}return o}function nr(o,n,i){const l=n.map(c=>({...c,_syncedTo:i}));gy(o,l)}var jh="agentation-design-";function mw(o){if(typeof window>"u")return[];try{const n=localStorage.getItem(`${jh}${o}`);return n?JSON.parse(n):[]}catch{return[]}}function pw(o,n){if(!(typeof window>"u"))try{localStorage.setItem(`${jh}${o}`,JSON.stringify(n))}catch{}}function gw(o){if(!(typeof window>"u"))try{localStorage.removeItem(`${jh}${o}`)}catch{}}var Eh="agentation-rearrange-";function yw(o){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${Eh}${o}`);return n?JSON.parse(n):null}catch{return null}}function xw(o,n){if(!(typeof window>"u"))try{localStorage.setItem(`${Eh}${o}`,JSON.stringify(n))}catch{}}function bw(o){if(!(typeof window>"u"))try{localStorage.removeItem(`${Eh}${o}`)}catch{}}var Mh="agentation-wireframe-";function vw(o){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${Mh}${o}`);return n?JSON.parse(n):null}catch{return null}}function v0(o,n){if(!(typeof window>"u"))try{localStorage.setItem(`${Mh}${o}`,JSON.stringify(n))}catch{}}function Vc(o){if(!(typeof window>"u"))try{localStorage.removeItem(`${Mh}${o}`)}catch{}}var yy="agentation-session-";function Th(o){return`${yy}${o}`}function ww(o){if(typeof window>"u")return null;try{return localStorage.getItem(Th(o))}catch{return null}}function Of(o,n){if(!(typeof window>"u"))try{localStorage.setItem(Th(o),n)}catch{}}function Sw(o){if(!(typeof window>"u"))try{localStorage.removeItem(Th(o))}catch{}}var xy=`${yy}toolbar-hidden`;function kw(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(xy)==="1"}catch{return!1}}function Cw(o){if(!(typeof window>"u"))try{o&&sessionStorage.setItem(xy,"1")}catch{}}async function Lf(o,n){const i=await fetch(`${o}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(!i.ok)throw new Error(`Failed to create session: ${i.status}`);return i.json()}async function w0(o,n){const i=await fetch(`${o}/sessions/${n}`);if(!i.ok)throw new Error(`Failed to get session: ${i.status}`);return i.json()}async function Ga(o,n,i){const l=await fetch(`${o}/sessions/${n}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!l.ok)throw new Error(`Failed to sync annotation: ${l.status}`);return l.json()}async function S0(o,n,i){const l=await fetch(`${o}/annotations/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!l.ok)throw new Error(`Failed to update annotation: ${l.status}`);return l.json()}async function ki(o,n){const i=await fetch(`${o}/annotations/${n}`,{method:"DELETE"});if(!i.ok)throw new Error(`Failed to delete annotation: ${i.status}`)}var Ut={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},k0=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),C0=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],jw=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function Ew(o){const n=(o==null?void 0:o.mode)??"filtered";let i=k0;if(o!=null&&o.skipExact){const l=o.skipExact instanceof Set?o.skipExact:new Set(o.skipExact);i=new Set([...k0,...l])}return{maxComponents:(o==null?void 0:o.maxComponents)??6,maxDepth:(o==null?void 0:o.maxDepth)??30,mode:n,skipExact:i,skipPatterns:o!=null&&o.skipPatterns?[...C0,...o.skipPatterns]:C0,userPatterns:(o==null?void 0:o.userPatterns)??jw,filter:o==null?void 0:o.filter}}function Mw(o){return o.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function Tw(o,n=10){const i=new Set;let l=o,c=0;for(;l&&c<n;)l.className&&typeof l.className=="string"&&l.className.split(/\s+/).forEach(u=>{if(u.length>1){const _=u.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();_.length>1&&i.add(_)}}),l=l.parentElement,c++;return i}function Rw(o,n){const i=Mw(o);for(const l of n){if(l===i)return!0;const c=i.split("-").filter(_=>_.length>2),u=l.split("-").filter(_=>_.length>2);for(const _ of c)for(const g of u)if(_===g||_.includes(g)||g.includes(_))return!0}return!1}function Aw(o,n,i,l){if(i.filter)return i.filter(o,n);switch(i.mode){case"all":return!0;case"filtered":return!(i.skipExact.has(o)||i.skipPatterns.some(c=>c.test(o)));case"smart":return i.skipExact.has(o)||i.skipPatterns.some(c=>c.test(o))?!1:!!(l&&Rw(o,l)||i.userPatterns.some(c=>c.test(o)));default:return!0}}var Fa=null,Dw=new WeakMap;function zf(o){return Object.keys(o).some(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$")||n.startsWith("__reactProps$"))}function Nw(){if(Fa!==null)return Fa;if(typeof document>"u")return!1;if(document.body&&zf(document.body))return Fa=!0,!0;const o=["#root","#app","#__next","[data-reactroot]"];for(const n of o){const i=document.querySelector(n);if(i&&zf(i))return Fa=!0,!0}if(document.body){for(const n of document.body.children)if(zf(n))return Fa=!0,!0}return Fa=!1,!1}var sr={map:Dw};function Ow(o){return Object.keys(o).find(i=>i.startsWith("__reactFiber$")||i.startsWith("__reactInternalInstance$"))||null}function Lw(o){const n=Ow(o);return n?o[n]:null}function qi(o){return o?o.displayName?o.displayName:o.name?o.name:null:null}function zw(o){var c;const{tag:n,type:i,elementType:l}=o;if(n===Ut.HostComponent||n===Ut.HostText||n===Ut.HostHoistable||n===Ut.HostSingleton||n===Ut.Fragment||n===Ut.Mode||n===Ut.Profiler||n===Ut.DehydratedFragment||n===Ut.HostRoot||n===Ut.HostPortal||n===Ut.ScopeComponent||n===Ut.OffscreenComponent||n===Ut.LegacyHiddenComponent||n===Ut.CacheComponent||n===Ut.TracingMarkerComponent||n===Ut.Throw||n===Ut.ViewTransitionComponent||n===Ut.ActivityComponent)return null;if(n===Ut.ForwardRef){const u=l;if(u!=null&&u.render){const _=qi(u.render);if(_)return _}return u!=null&&u.displayName?u.displayName:qi(i)}if(n===Ut.MemoComponent||n===Ut.SimpleMemoComponent){const u=l;if(u!=null&&u.type){const _=qi(u.type);if(_)return _}return u!=null&&u.displayName?u.displayName:qi(i)}if(n===Ut.ContextProvider){const u=i;return(c=u==null?void 0:u._context)!=null&&c.displayName?`${u._context.displayName}.Provider`:null}if(n===Ut.ContextConsumer){const u=i;return u!=null&&u.displayName?`${u.displayName}.Consumer`:null}if(n===Ut.LazyComponent){const u=l;return(u==null?void 0:u._status)===1&&u._result?qi(u._result):null}return n===Ut.SuspenseComponent||n===Ut.SuspenseListComponent?null:n===Ut.IncompleteClassComponent||n===Ut.IncompleteFunctionComponent||n===Ut.FunctionComponent||n===Ut.ClassComponent||n===Ut.IndeterminateComponent?qi(i):null}function Bw(o){return o.length<=2||o.length<=3&&o===o.toLowerCase()}function $w(o,n){const i=Ew(n),l=i.mode==="all";if(l){const h=sr.map.get(o);if(h!==void 0)return h}if(!Nw()){const h={path:null,components:[]};return l&&sr.map.set(o,h),h}const c=i.mode==="smart"?Tw(o):void 0,u=[];try{let h=Lw(o),m=0;for(;h&&m<i.maxDepth&&u.length<i.maxComponents;){const p=zw(h);p&&!Bw(p)&&Aw(p,m,i,c)&&u.push(p),h=h.return,m++}}catch{const h={path:null,components:[]};return l&&sr.map.set(o,h),h}if(u.length===0){const h={path:null,components:[]};return l&&sr.map.set(o,h),h}const g={path:u.slice().reverse().map(h=>`<${h}>`).join(" "),components:u};return l&&sr.map.set(o,g),g}var or={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function Pw(o){if(!o||typeof o!="object")return null;const n=Object.keys(o),i=n.find(u=>u.startsWith("__reactFiber$"));if(i)return o[i]||null;const l=n.find(u=>u.startsWith("__reactInternalInstance$"));if(l)return o[l]||null;const c=n.find(u=>{if(!u.startsWith("__react"))return!1;const _=o[u];return _&&typeof _=="object"&&"_debugSource"in _});return c&&o[c]||null}function hr(o){if(!o.type||typeof o.type=="string")return null;if(typeof o.type=="object"||typeof o.type=="function"){const n=o.type;if(n.displayName)return n.displayName;if(n.name)return n.name}return null}function Iw(o,n=50){var c;let i=o,l=0;for(;i&&l<n;){if(i._debugSource)return{source:i._debugSource,componentName:hr(i)};if((c=i._debugOwner)!=null&&c._debugSource)return{source:i._debugOwner._debugSource,componentName:hr(i._debugOwner)};i=i.return,l++}return null}function Uw(o){let n=o,i=0;const l=50;for(;n&&i<l;){const c=n,u=["_debugSource","__source","_source","debugSource"];for(const _ of u){const g=c[_];if(g&&typeof g=="object"&&"fileName"in g)return{source:g,componentName:hr(n)}}if(n.memoizedProps){const _=n.memoizedProps;if(_.__source&&typeof _.__source=="object"){const g=_.__source;if(g.fileName&&g.lineNumber)return{source:{fileName:g.fileName,lineNumber:g.lineNumber,columnNumber:g.columnNumber},componentName:hr(n)}}}n=n.return,i++}return null}var Kc=new Map;function Hw(o){var c;const n=o.tag,i=o.type,l=o.elementType;if(typeof i=="string"||i==null||typeof i=="function"&&((c=i.prototype)!=null&&c.isReactComponent))return null;if((n===or.FunctionComponent||n===or.IndeterminateComponent)&&typeof i=="function")return i;if(n===or.ForwardRef&&l){const u=l.render;if(typeof u=="function")return u}if((n===or.MemoComponent||n===or.SimpleMemoComponent)&&l){const u=l.type;if(typeof u=="function")return u}return typeof i=="function"?i:null}function Yw(){const o=Rn,n=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(n&&"H"in n)return{get:()=>n.H,set:l=>{n.H=l}};const i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(i){const l=i.ReactCurrentDispatcher;if(l&&"current"in l)return{get:()=>l.current,set:c=>{l.current=c}}}return null}function Xw(o){const n=o.split(`
`),i=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],l=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,c=/^[^@]*@(.+?):(\d+):(\d+)$/;for(const u of n){const _=u.trim();if(!_||i.some(h=>h.test(_)))continue;const g=l.exec(_)||c.exec(_);if(g)return{fileName:g[1],line:parseInt(g[2],10),column:parseInt(g[3],10)}}return null}function Gw(o){let n=o;return n=n.replace(/[?#].*$/,""),n=n.replace(/^turbopack:\/\/\/\[project\]\//,""),n=n.replace(/^webpack-internal:\/\/\/\.\//,""),n=n.replace(/^webpack-internal:\/\/\//,""),n=n.replace(/^webpack:\/\/\/\.\//,""),n=n.replace(/^webpack:\/\/\//,""),n=n.replace(/^turbopack:\/\/\//,""),n=n.replace(/^https?:\/\/[^/]+\//,""),n=n.replace(/^file:\/\/\//,"/"),n=n.replace(/^\([^)]+\)\/\.\//,""),n=n.replace(/^\.\//,""),n}function Fw(o){const n=Hw(o);if(!n)return null;if(Kc.has(n))return Kc.get(n);const i=Yw();if(!i)return Kc.set(n,null),null;const l=i.get();let c=null;try{const u=new Proxy({},{get(){throw new Error("probe")}});i.set(u);try{n({})}catch(_){if(_ instanceof Error&&_.message==="probe"&&_.stack){const g=Xw(_.stack);g&&(c={fileName:Gw(g.fileName),lineNumber:g.line,columnNumber:g.column,componentName:hr(o)||void 0})}}}finally{i.set(l)}return Kc.set(n,c),c}function Ww(o,n=15){let i=o,l=0;for(;i&&l<n;){const c=Fw(i);if(c)return c;i=i.return,l++}return null}function ah(o){const n=Pw(o);if(!n)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let i=Iw(n);if(i||(i=Uw(n)),i!=null&&i.source)return{found:!0,source:{fileName:i.source.fileName,lineNumber:i.source.lineNumber,columnNumber:i.source.columnNumber,componentName:i.componentName||void 0},isReactApp:!0,isProduction:!1};const l=Ww(n);return l?{found:!0,source:l,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function qw(o,n="path"){const{fileName:i,lineNumber:l,columnNumber:c}=o;let u=`${i}:${l}`;return c!==void 0&&(u+=`:${c}`),n==="vscode"?`vscode://file${i.startsWith("/")?"":"/"}${u}`:u}function Qw(o,n=10){let i=o,l=0;for(;i&&l<n;){const c=ah(i);if(c.found)return c;i=i.parentElement,l++}return ah(o)}var Vw=`.styles-module__toolbar___wNsdK svg[fill=none],
.styles-module__markersLayer___-25j1 svg[fill=none],
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] {
  fill: none !important;
}
.styles-module__toolbar___wNsdK svg[fill=none] :not([fill]),
.styles-module__markersLayer___-25j1 svg[fill=none] :not([fill]),
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] :not([fill]) {
  fill: none !important;
}

.styles-module__controlsContent___9GJWU :where(button, input, select, textarea, label) {
  background: unset;
  border: unset;
  border-radius: unset;
  padding: unset;
  margin: unset;
  color: unset;
  font-family: unset;
  font-weight: unset;
  font-style: unset;
  line-height: unset;
  letter-spacing: unset;
  text-transform: unset;
  text-decoration: unset;
  box-shadow: unset;
  outline: unset;
}

@keyframes styles-module__toolbarEnter___u8RRu {
  from {
    opacity: 0;
    transform: scale(0.5) rotate(90deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
@keyframes styles-module__toolbarHide___y8kaT {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.8);
  }
}
@keyframes styles-module__badgeEnter___mVQLj {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleIn___c-r1K {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleOut___Wctwz {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.85);
  }
}
@keyframes styles-module__slideUp___kgD36 {
  from {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes styles-module__slideDown___zcdje {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
}
@keyframes styles-module__fadeIn___b9qmf {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__fadeOut___6Ut6- {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__hoverHighlightIn___6WYHY {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__hoverTooltipIn___FYGQx {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
.styles-module__disableTransitions___EopxO :is(*, *::before, *::after) {
  transition: none !important;
}

.styles-module__toolbar___wNsdK {
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  width: 337px;
  z-index: 100000;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: none;
  transition: left 0s, top 0s, right 0s, bottom 0s;
}

:where(.styles-module__toolbar___wNsdK) {
  bottom: 1.25rem;
  right: 1.25rem;
}

.styles-module__toolbarContainer___dIhma {
  position: relative;
  user-select: none;
  margin-left: auto;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  color: #fff;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toolbarContainer___dIhma.styles-module__entrance___sgHd8 {
  animation: styles-module__toolbarEnter___u8RRu 0.5s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
}
.styles-module__toolbarContainer___dIhma.styles-module__hiding___1td44 {
  animation: styles-module__toolbarHide___y8kaT 0.4s cubic-bezier(0.4, 0, 1, 1) forwards;
  pointer-events: none;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn {
  width: 44px;
  height: 44px;
  border-radius: 22px;
  padding: 0;
  cursor: pointer;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn svg {
  margin-top: -1px;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #2a2a2a;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:active {
  transform: scale(0.95);
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx {
  height: 44px;
  border-radius: 1.5rem;
  padding: 0.375rem;
  width: 297px;
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx.styles-module__serverConnected___Gfbou {
  width: 337px;
}

.styles-module__toggleContent___0yfyP {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.1s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toggleContent___0yfyP.styles-module__visible___KHwEW {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.styles-module__toggleContent___0yfyP.styles-module__hidden___Ae8H4 {
  opacity: 0;
  pointer-events: none;
}

.styles-module__controlsContent___9GJWU {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  transition: filter 0.8s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.8s cubic-bezier(0.19, 1, 0.22, 1), transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW {
  opacity: 1;
  filter: blur(0px);
  transform: scale(1);
  visibility: visible;
  pointer-events: auto;
}
.styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {
  pointer-events: none;
  opacity: 0;
  filter: blur(10px);
  transform: scale(0.4);
}

.styles-module__badge___2XsgF {
  position: absolute;
  top: -13px;
  right: -13px;
  user-select: none;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.04);
  opacity: 1;
  transition: transform 0.3s ease, opacity 0.2s ease;
  transform: scale(1);
}
.styles-module__badge___2XsgF.styles-module__fadeOut___6Ut6- {
  opacity: 0;
  transform: scale(0);
  pointer-events: none;
}
.styles-module__badge___2XsgF.styles-module__entrance___sgHd8 {
  animation: styles-module__badgeEnter___mVQLj 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) 0.4s both;
}

.styles-module__controlButton___8Q0jc {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease, opacity 0.2s ease;
}
.styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}
.styles-module__controlButton___8Q0jc:active:not(:disabled) {
  transform: scale(0.92);
}
.styles-module__controlButton___8Q0jc:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background-color: color-mix(in srgb, var(--agentation-color-blue) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__controlButton___8Q0jc[data-no-hover=true], .styles-module__controlButton___8Q0jc.styles-module__statusShowing___te6iu {
  cursor: default;
  pointer-events: none;
  background: transparent !important;
}
.styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
  cursor: default;
}
.styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}

.styles-module__buttonBadge___NeFWb {
  position: absolute;
  top: 0px;
  right: 0px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 8px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px #1a1a1a, 0 1px 3px rgba(0, 0, 0, 0.2);
  pointer-events: none;
}
[data-agentation-theme=light] .styles-module__buttonBadge___NeFWb {
  box-shadow: 0 0 0 2px #fff, 0 1px 3px rgba(0, 0, 0, 0.2);
}

@keyframes styles-module__mcpIndicatorPulseConnected___EDodZ {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpIndicatorPulseConnecting___cCYte {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-yellow) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-yellow) 0%, transparent);
  }
}
.styles-module__mcpIndicator___zGJeL {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  pointer-events: none;
  transition: background-color 0.3s ease, opacity 0.15s ease, transform 0.15s ease;
  opacity: 1;
  transform: scale(1);
}
.styles-module__mcpIndicator___zGJeL.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpIndicatorPulseConnected___EDodZ 2.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpIndicatorPulseConnecting___cCYte 1.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__hidden___Ae8H4 {
  opacity: 0;
  transform: scale(0);
  animation: none;
}

@keyframes styles-module__connectionPulse___-Zycw {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.9);
  }
}
.styles-module__connectionIndicatorWrapper___L-e-3 {
  width: 8px;
  height: 34px;
  margin-left: 6px;
  margin-right: 6px;
}

.styles-module__connectionIndicator___afk9p {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease, background-color 0.3s ease;
  cursor: default;
}

.styles-module__connectionIndicatorVisible___C-i5B {
  opacity: 1;
}

.styles-module__connectionIndicatorConnected___IY8pR {
  background-color: var(--agentation-color-green);
  animation: styles-module__connectionPulse___-Zycw 2.5s ease-in-out infinite;
}

.styles-module__connectionIndicatorDisconnected___kmpaZ {
  background-color: var(--agentation-color-red);
  animation: none;
}

.styles-module__connectionIndicatorConnecting___QmSLH {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__connectionPulse___-Zycw 1s ease-in-out infinite;
}

.styles-module__buttonWrapper___rBcdv {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) scale(1);
  transition-delay: 0.85s;
}
.styles-module__buttonWrapper___rBcdv:has(.styles-module__controlButton___8Q0jc:disabled):hover .styles-module__buttonTooltip___Burd9 {
  opacity: 0;
  visibility: hidden;
}

.styles-module__tooltipsInSession___-0lHH .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transition-delay: 0s;
}

.styles-module__sendButtonWrapper___UUxG6 {
  width: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  margin-left: -0.375rem;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.3s cubic-bezier(0.19, 1, 0.22, 1), margin 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6 .styles-module__controlButton___8Q0jc {
  transform: scale(0.8);
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU {
  width: 34px;
  opacity: 1;
  overflow: visible;
  pointer-events: auto;
  margin-left: 0;
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU .styles-module__controlButton___8Q0jc {
  transform: scale(1);
}

.styles-module__buttonTooltip___Burd9 {
  position: absolute;
  bottom: calc(100% + 14px);
  left: 50%;
  transform: translateX(-50%) scale(0.95);
  padding: 6px 10px;
  background: #1a1a1a;
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 100001;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: opacity 0.135s ease, transform 0.135s ease, visibility 0.135s ease;
}
.styles-module__buttonTooltip___Burd9::after {
  content: "";
  position: absolute;
  top: calc(100% - 4px);
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 8px;
  height: 8px;
  background: #1a1a1a;
  border-radius: 0 0 2px 0;
}

.styles-module__shortcut___lEAQk {
  margin-left: 4px;
  opacity: 0.5;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9 {
  bottom: auto;
  top: calc(100% + 14px);
  transform: translateX(-50%) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9::after {
  top: -4px;
  bottom: auto;
  border-radius: 2px 0 0 0;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-50%) scale(1);
}

.styles-module__tooltipsHidden___VtLJG .styles-module__buttonTooltip___Burd9 {
  opacity: 0 !important;
  visibility: hidden !important;
  transition: none !important;
}

.styles-module__tooltipVisible___0jcCv,
.styles-module__tooltipsHidden___VtLJG .styles-module__tooltipVisible___0jcCv {
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateX(-50%) scale(1) !important;
  transition-delay: 0s !important;
}

.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(-12px) scale(0.95);
}
.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9::after {
  left: 16px;
}
.styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9::after {
  left: auto;
  right: 8px;
}
.styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__divider___c--s1 {
  width: 1px;
  height: 12px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 0.125rem;
}

.styles-module__overlay___Q1O9y {
  position: fixed;
  inset: 0;
  z-index: 99997;
  pointer-events: none;
}
.styles-module__overlay___Q1O9y > * {
  pointer-events: auto;
}

.styles-module__hoverHighlight___ogakW {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-accent) 50%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-accent) 4%, transparent);
  pointer-events: none !important;
  box-sizing: border-box;
  will-change: opacity;
  contain: layout style;
}
.styles-module__hoverHighlight___ogakW.styles-module__enter___WFIki {
  animation: styles-module__hoverHighlightIn___6WYHY 0.12s ease-out forwards;
}

.styles-module__multiSelectOutline___cSJ-m {
  position: fixed;
  border: 2px dashed color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-green) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__singleSelectOutline___QhX-O {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-blue) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-blue) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__hoverTooltip___bvLk7 {
  position: fixed;
  font-size: 0.6875rem;
  font-weight: 500;
  color: #fff;
  background: rgba(0, 0, 0, 0.85);
  padding: 0.35rem 0.6rem;
  border-radius: 0.375rem;
  pointer-events: none !important;
  white-space: nowrap;
  max-width: 280px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.styles-module__hoverTooltip___bvLk7.styles-module__enter___WFIki {
  animation: styles-module__hoverTooltipIn___FYGQx 0.1s ease-out forwards;
}

.styles-module__hoverReactPath___gx1IJ {
  font-size: 0.625rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__hoverElementName___QMLMl {
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markersLayer___-25j1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__markersLayer___-25j1 > * {
  pointer-events: auto;
}

.styles-module__fixedMarkersLayer___ffyX6 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__fixedMarkersLayer___ffyX6 > * {
  pointer-events: auto;
}

.styles-module__marker___6sQrs {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___6sQrs:hover {
  z-index: 2;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___6sQrs.styles-module__enter___WFIki {
  animation: styles-module__markerIn___5FaAP 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___6sQrs.styles-module__exit___fyOJ0 {
  animation: styles-module__markerOut___GU5jX 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs.styles-module__clearing___FQ--7 {
  animation: styles-module__markerOut___GU5jX 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___6sQrs.styles-module__pending___2IHLC {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___6sQrs.styles-module__fixed___dBMHC {
  position: fixed;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz.styles-module__pending___2IHLC {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___6sQrs.styles-module__hovered___ZgXIy {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___nCTxD {
  display: block;
  animation: styles-module__renumberRoll___Wgbq3 0.2s ease-out;
}

@keyframes styles-module__renumberRoll___Wgbq3 {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__markerTooltip___aLJID {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___aLJID.styles-module__enter___WFIki {
  animation: styles-module__tooltipIn___0N31w 0.1s ease-out forwards;
}

.styles-module__markerQuote___FHmrz {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___QkrrS {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

.styles-module__markerHint___2iF-6 {
  display: block;
  font-size: 0.625rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.375rem;
  white-space: nowrap;
}

.styles-module__settingsPanel___OxX3Y {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 1rem;
  padding: 13px 0 16px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y::before, .styles-module__settingsPanel___OxX3Y::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___OxX3Y::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrandSlash___uTG18,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY,
.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz,
.styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa,
.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax,
.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr,
.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp,
.styles-module__settingsPanel___OxX3Y .styles-module__themeToggle___2rUjA {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__enter___WFIki {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__exit___fyOJ0 {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12 {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__settingsPanelContainer___Xksv8 {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 1rem;
}

.styles-module__settingsPage___6YfHH {
  min-width: 100%;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___6YfHH.styles-module__slideLeft___Ps01J {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 3px 1rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6.styles-module__slideIn___4-qXe {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsNavLink___wCzJt {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(255, 255, 255, 0.9);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(0, 0, 0, 0.8);
}
.styles-module__settingsNavLink___wCzJt svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___ZWwhj {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__mcpNavIndicator___cl9pO {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s ease-in-out infinite;
}

.styles-module__settingsBackButton___bIe2j {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 0 12px 0;
  margin: -6px 0 0.5rem 0;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 0;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(255, 255, 255, 0.07);
}
.styles-module__settingsBackButton___bIe2j:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___InP0r {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___InP0r {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___NKlmo {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___NKlmo {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___8xv-x {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___8xv-x:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendRow___UblX5 {
  display: flex;
  align-items: center;
  gap: 8px;
}

.styles-module__autoSendLabel___icDc2 {
  font-size: 0.6875rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: var(--agentation-color-blue);
}

.styles-module__webhookUrlInput___2375C {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__settingsHeader___pwDY9 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  margin-bottom: 0.5rem;
  padding-bottom: 9px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.styles-module__settingsBrand___0gJeM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___uTG18 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___TUcFq {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__settingsSection___m-YM2 + .styles-module__settingsSection___m-YM2 {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__settingsSection___m-YM2.styles-module__settingsSectionExtraPadding___jdhFV {
  padding-top: calc(0.5rem + 4px);
}

.styles-module__settingsSectionGrow___h-5HZ {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___3sdhc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___3sdhc.styles-module__settingsRowMarginTop___zA0Sp {
  margin-top: 8px;
}

.styles-module__dropdownContainer___BVnxe {
  position: relative;
}

.styles-module__dropdownButton___16NPz {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownButton___16NPz:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownButton___16NPz svg {
  opacity: 0.6;
}

.styles-module__cycleButton___FMKfw {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___FMKfw {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___FMKfw:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__settingsRowDisabled___EgS0V .styles-module__toggleSwitch___l4Ygm {
  opacity: 0.4;
  cursor: not-allowed;
}

@keyframes styles-module__cycleTextIn___Q6zJf {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__cycleButtonText___fD1LR {
  display: inline-block;
  animation: styles-module__cycleTextIn___Q6zJf 0.2s ease-out;
}

.styles-module__cycleDots___LWuoQ {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___nPgLY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__dropdownMenu___k73ER {
  position: absolute;
  right: 0;
  top: calc(100% + 0.25rem);
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 0.25rem;
  min-width: 120px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
  z-index: 10;
  animation: styles-module__scaleIn___c-r1K 0.15s ease-out;
}

.styles-module__dropdownItem___ylsLj {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.625rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  text-align: left;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownItem___ylsLj:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownItem___ylsLj.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-weight: 600;
}

.styles-module__settingsLabel___8UjfX {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  gap: 0.125rem;
}
[data-agentation-theme=light] .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__settingsLabelMarker___ewdtV {
  padding-top: 3px;
  margin-bottom: 10px;
}

.styles-module__settingsOptions___LyrBA {
  display: flex;
  gap: 0.25rem;
}

.styles-module__settingsOption___UNa12 {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.styles-module__settingsOption___UNa12:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
  color: var(--agentation-color-blue);
}

.styles-module__sliderContainer___ducXj {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.styles-module__slider___GLdxp {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}
.styles-module__slider___GLdxp::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp:hover::-webkit-slider-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}
.styles-module__slider___GLdxp:hover::-moz-range-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

.styles-module__sliderLabels___FhLDB {
  display: flex;
  justify-content: space-between;
}

.styles-module__sliderLabel___U8sPr {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__sliderLabel___U8sPr:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {
  color: rgba(255, 255, 255, 0.9);
}

.styles-module__colorOptions___iHCNX {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.375rem;
  margin-bottom: 1px;
}

.styles-module__colorOption___IodiY {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid transparent;
  background-color: var(--swatch);
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___IodiY {
    background-color: var(--swatch-p3);
  }
}
.styles-module__colorOption___IodiY:hover {
  transform: scale(1.15);
}
.styles-module__colorOption___IodiY.styles-module__selected___OwRqP {
  transform: scale(0.83);
}

.styles-module__colorOptionRing___U2xpo {
  display: flex;
  width: 24px;
  height: 24px;
  border: 2px solid transparent;
  border-radius: 50%;
  transition: border-color 0.3s ease;
}
.styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
  border-color: var(--swatch);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
    border-color: var(--swatch-p3);
  }
}

.styles-module__settingsToggle___fBrFn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}
.styles-module__settingsToggle___fBrFn + .styles-module__settingsToggle___fBrFn {
  margin-top: calc(0.5rem + 6px);
}
.styles-module__settingsToggle___fBrFn input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__settingsToggle___fBrFn.styles-module__settingsToggleMarginBottom___MZUyF {
  margin-bottom: calc(0.5rem + 6px);
}

.styles-module__customCheckbox___U39ax {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background-color 0.25s ease, border-color 0.25s ease;
}
.styles-module__customCheckbox___U39ax svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
input[type=checkbox]:checked + .styles-module__customCheckbox___U39ax {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo svg {
  color: #fff;
}

.styles-module__toggleLabel___Xm8Aa {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
[data-agentation-theme=light] .styles-module__toggleLabel___Xm8Aa {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__toggleSwitch___l4Ygm {
  position: relative;
  display: inline-block;
  width: 24px;
  height: 16px;
  flex-shrink: 0;
  cursor: pointer;
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.styles-module__toggleSwitch___l4Ygm input {
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn {
  background-color: var(--agentation-color-blue);
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn::before {
  transform: translateX(8px);
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw {
  opacity: 0.4;
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw .styles-module__toggleSlider___wprIn {
  cursor: not-allowed;
}

.styles-module__toggleSlider___wprIn {
  position: absolute;
  cursor: pointer;
  inset: 0;
  border-radius: 16px;
  background: #484848;
}
[data-agentation-theme=light] .styles-module__toggleSlider___wprIn {
  background: #dddddd;
}
.styles-module__toggleSlider___wprIn::before {
  content: "";
  position: absolute;
  height: 12px;
  width: 12px;
  left: 2px;
  bottom: 2px;
  background: white;
  border-radius: 50%;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes styles-module__mcpPulse___uNggr {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___fov9B {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
.styles-module__mcpStatusDot___ibgkc {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__disconnected___cHPxR {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___fov9B 2s infinite;
}

.styles-module__drawCanvas___7cG9U {
  position: fixed;
  inset: 0;
  z-index: 99996;
  pointer-events: none !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6 {
  pointer-events: auto !important;
  cursor: crosshair !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6[data-stroke-hover] {
  cursor: pointer !important;
}

.styles-module__dragSelection___kZLq2 {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-green) 8%, transparent);
  pointer-events: none;
  z-index: 99997;
  will-change: transform, width, height;
  contain: layout style;
}

.styles-module__dragCount___KM90j {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--agentation-color-green);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  min-width: 1.5rem;
  text-align: center;
}

.styles-module__highlightsContainer___-0xzG {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__selectedElementHighlight___fyVlI {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  border-radius: 4px;
  background: color-mix(in srgb, var(--agentation-color-green) 6%, transparent);
  pointer-events: none;
  will-change: transform, width, height;
  contain: layout style;
}

[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #f5f5f5;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9 {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9::after {
  background: #fff;
}
[data-agentation-theme=light] .styles-module__divider___c--s1 {
  background: rgba(0, 0, 0, 0.1);
}`,Kw={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let o=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");o||(o=document.createElement("style"),o.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(o)),o.textContent=Vw}var fe=Kw,ir=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function j0(o,n,i="standard"){if(o.length===0)return"";const l=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let c=`## Page Feedback: ${n}
`;return i==="forensic"?(c+=`
**Environment:**
`,c+=`- Viewport: ${l}
`,typeof window<"u"&&(c+=`- URL: ${window.location.href}
`,c+=`- User Agent: ${navigator.userAgent}
`,c+=`- Timestamp: ${new Date().toISOString()}
`,c+=`- Device Pixel Ratio: ${window.devicePixelRatio}
`),c+=`
---
`):i!=="compact"&&(c+=`**Viewport:** ${l}
`),c+=`
`,o.forEach((u,_)=>{i==="compact"?(c+=`${_+1}. **${u.element}**${u.sourceFile?` (${u.sourceFile})`:""}: ${u.comment}`,u.selectedText&&(c+=` (re: "${u.selectedText.slice(0,30)}${u.selectedText.length>30?"...":""}")`),c+=`
`):i==="forensic"?(c+=`### ${_+1}. ${u.element}
`,u.isMultiSelect&&u.fullPath&&(c+=`*Forensic data shown for first element of selection*
`),u.fullPath&&(c+=`**Full DOM Path:** ${u.fullPath}
`),u.cssClasses&&(c+=`**CSS Classes:** ${u.cssClasses}
`),u.boundingBox&&(c+=`**Position:** x:${Math.round(u.boundingBox.x)}, y:${Math.round(u.boundingBox.y)} (${Math.round(u.boundingBox.width)}×${Math.round(u.boundingBox.height)}px)
`),c+=`**Annotation at:** ${u.x.toFixed(1)}% from left, ${Math.round(u.y)}px from top
`,u.selectedText&&(c+=`**Selected text:** "${u.selectedText}"
`),u.nearbyText&&!u.selectedText&&(c+=`**Context:** ${u.nearbyText.slice(0,100)}
`),u.computedStyles&&(c+=`**Computed Styles:** ${u.computedStyles}
`),u.accessibility&&(c+=`**Accessibility:** ${u.accessibility}
`),u.nearbyElements&&(c+=`**Nearby Elements:** ${u.nearbyElements}
`),u.sourceFile&&(c+=`**Source:** ${u.sourceFile}
`),u.reactComponents&&(c+=`**React:** ${u.reactComponents}
`),c+=`**Feedback:** ${u.comment}

`):(c+=`### ${_+1}. ${u.element}
`,c+=`**Location:** ${u.elementPath}
`,u.sourceFile&&(c+=`**Source:** ${u.sourceFile}
`),u.reactComponents&&(c+=`**React:** ${u.reactComponents}
`),i==="detailed"&&(u.cssClasses&&(c+=`**Classes:** ${u.cssClasses}
`),u.boundingBox&&(c+=`**Position:** ${Math.round(u.boundingBox.x)}px, ${Math.round(u.boundingBox.y)}px (${Math.round(u.boundingBox.width)}×${Math.round(u.boundingBox.height)}px)
`)),u.selectedText&&(c+=`**Selected text:** "${u.selectedText}"
`),i==="detailed"&&u.nearbyText&&!u.selectedText&&(c+=`**Context:** ${u.nearbyText.slice(0,100)}
`),c+=`**Feedback:** ${u.comment}

`)}),c.trim()}var Zw=`@keyframes styles-module__markerIn___x4G8D {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes styles-module__markerOut___6VhQN {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
}
@keyframes styles-module__tooltipIn___aJslQ {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(2px) scale(0.891);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(0.909);
  }
}
@keyframes styles-module__renumberRoll___akV9B {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__marker___9CKF7 {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___9CKF7:hover {
  z-index: 2;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___9CKF7.styles-module__enter___8kI3q {
  animation: styles-module__markerIn___x4G8D 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___9CKF7.styles-module__exit___KBdR3 {
  animation: styles-module__markerOut___6VhQN 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7.styles-module__clearing___8rM7K {
  animation: styles-module__markerOut___6VhQN 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___9CKF7.styles-module__pending___BiY-U {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___9CKF7.styles-module__fixed___aKrQO {
  position: fixed;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC.styles-module__pending___BiY-U {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___9CKF7.styles-module__hovered___-mg2N {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___16lvD {
  display: block;
  animation: styles-module__renumberRoll___akV9B 0.2s ease-out;
}

.styles-module__markerTooltip___-VUm- {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___-VUm-.styles-module__enter___8kI3q {
  animation: styles-module__tooltipIn___aJslQ 0.1s ease-out forwards;
}

.styles-module__markerQuote___tQake {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___Rh4eI {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- {
  background: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- .styles-module__markerQuote___tQake {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- .styles-module__markerNote___Rh4eI {
  color: rgba(0, 0, 0, 0.85);
}`,Jw={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",markerTooltip:"styles-module__markerTooltip___-VUm-",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let o=document.getElementById("feedback-tool-styles-annotation-marker-styles");o||(o=document.createElement("style"),o.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(o)),o.textContent=Zw}var An=Jw;function E0({annotation:o,globalIndex:n,layerIndex:i,layerSize:l,isExiting:c,isClearing:u,isAnimated:_,isHovered:g,isDeleting:h,isEditingAny:m,renumberFrom:p,markerClickBehavior:y,tooltipStyle:v,onHoverEnter:C,onHoverLeave:k,onClick:M,onContextMenu:L}){const B=(g||h)&&!m,J=B&&y==="delete",G=o.isMultiSelect,z=G?"var(--agentation-color-green)":"var(--agentation-color-accent)",de=c?An.exit:u?An.clearing:_?"":An.enter,he=c?`${(l-1-i)*20}ms`:`${i*20}ms`;return r.jsxs("div",{className:`${An.marker} ${G?An.multiSelect:""} ${de} ${J?An.hovered:""}`,"data-annotation-marker":!0,style:{left:`${o.x}%`,top:o.y,backgroundColor:J?void 0:z,animationDelay:he},onMouseEnter:()=>C(o),onMouseLeave:k,onClick:F=>{F.stopPropagation(),c||M(o)},onContextMenu:L?F=>{y==="delete"&&(F.preventDefault(),F.stopPropagation(),c||L(o))}:void 0,children:[B?J?r.jsx(oy,{size:G?18:16}):r.jsx(f2,{size:16}):r.jsx("span",{className:p!==null&&n>=p?An.renumber:void 0,children:n+1}),g&&!m&&r.jsxs("div",{className:`${An.markerTooltip} ${An.enter}`,style:v,children:[r.jsxs("span",{className:An.markerQuote,children:[o.element,o.selectedText&&` "${o.selectedText.slice(0,30)}${o.selectedText.length>30?"...":""}"`]}),r.jsx("span",{className:An.markerNote,children:o.comment})]})]})}function e4({x:o,y:n,isMultiSelect:i,isExiting:l}){return r.jsx("div",{className:`${An.marker} ${An.pending} ${i?An.multiSelect:""} ${l?An.exit:An.enter}`,style:{left:`${o}%`,top:n,backgroundColor:i?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:r.jsx(e2,{size:12})})}function M0({annotation:o,fixed:n}){const i=o.isMultiSelect;return r.jsx("div",{className:`${An.marker} ${n?An.fixed:""} ${An.hovered} ${i?An.multiSelect:""} ${An.exit}`,"data-annotation-marker":!0,style:{left:`${o.x}%`,top:o.y},children:r.jsx(oy,{size:i?12:10})})}var t4=`.styles-module__switchContainer___Ka-AB {
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px;
  width: 24px;
  height: 16px;
  border-radius: 8px;
  background-color: #cdcdcd;
  transition: background-color 0.15s, opacity 0.15s;
}
[data-agentation-theme=dark] .styles-module__switchContainer___Ka-AB {
  background-color: #484848;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) {
  background-color: var(--agentation-color-blue);
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:disabled) {
  opacity: 0.3;
}

.styles-module__switchInput___kYDSD {
  position: absolute;
  z-index: 1;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}
.styles-module__switchInput___kYDSD:disabled {
  cursor: not-allowed;
}

.styles-module__switchThumb___4sCPH {
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: #fff;
  transition: transform 0.15s;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) .styles-module__switchThumb___4sCPH {
  transform: translateX(8px);
}`,n4={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let o=document.getElementById("feedback-tool-styles-switch-styles");o||(o=document.createElement("style"),o.id="feedback-tool-styles-switch-styles",document.head.appendChild(o)),o.textContent=t4}var Bf=n4,$f=({className:o="",...n})=>r.jsxs("div",{className:`${Bf.switchContainer} ${o}`,children:[r.jsx("input",{className:Bf.switchInput,type:"checkbox",...n}),r.jsx("div",{className:Bf.switchThumb})]}),s4=`.styles-module__checkboxContainer___joqZk {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid rgba(26, 26, 26, 0.2);
  border-radius: 4px;
  width: 14px;
  height: 14px;
  background-color: #fff;
  transition: background-color 0.2s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk {
  border-color: rgba(255, 255, 255, 0.2);
  background-color: #252525;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #1a1a1a;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #fff;
}

.styles-module__checkboxInput___ECzzO {
  position: absolute;
  z-index: 1;
  inset: -1px;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}

.styles-module__checkboxCheck___fUXpr {
  color: #fafafa;
}
[data-agentation-theme=dark] .styles-module__checkboxCheck___fUXpr {
  color: #1a1a1a;
}

.styles-module__checkboxCheckPath___cDyh8 {
  stroke-dasharray: 9.29px;
  stroke-dashoffset: 9.29px;
  color: #fafafa;
  transition: stroke-dashoffset 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxCheckPath___cDyh8 {
  color: #1a1a1a;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) .styles-module__checkboxCheckPath___cDyh8 {
  transition-duration: 0.2s;
  stroke-dashoffset: 0;
}`,o4={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let o=document.getElementById("feedback-tool-styles-checkbox-styles");o||(o=document.createElement("style"),o.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(o)),o.textContent=s4}var Zc=o4,i4=({className:o="",...n})=>r.jsxs("div",{className:`${Zc.checkboxContainer} ${o}`,children:[r.jsx("input",{className:Zc.checkboxInput,type:"checkbox",...n}),r.jsx("svg",{className:Zc.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:r.jsx("path",{className:Zc.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),a4=`.styles-module__container___w8eAF {
  display: flex;
  align-items: center;
  height: 24px;
}

.styles-module__label___J5mxE {
  padding-inline: 8px 2px;
  line-height: 20px;
  font-size: 13px;
  letter-spacing: -0.15px;
  color: rgba(26, 26, 26, 0.5);
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__label___J5mxE {
  color: rgba(255, 255, 255, 0.5);
}`,l4={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let o=document.getElementById("feedback-tool-styles-checkbox-field-styles");o||(o=document.createElement("style"),o.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(o)),o.textContent=a4}var T0=l4,R0=({className:o="",label:n,tooltip:i,checked:l,onChange:c,...u})=>{const _=b.useId();return r.jsxs("div",{className:`${T0.container} ${o}`,...u,children:[r.jsx(i4,{id:_,onChange:c,checked:l}),r.jsx("label",{className:T0.label,htmlFor:_,children:n}),i&&r.jsx(Ki,{content:i})]})},r4=`@keyframes styles-module__cycleTextIn___VBNTi {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes styles-module__scaleIn___QpQ8E {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__mcpPulse___5Q3Jj {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___VHxhx {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
@keyframes styles-module__themeIconIn___qUWMV {
  0% {
    opacity: 0;
    transform: scale(0.8) rotate(-30deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
.styles-module__settingsPanel___qNkn- {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 16px;
  padding: 12px 0;
  width: 100%;
  max-width: 253px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___qNkn-::before, .styles-module__settingsPanel___qNkn-::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___qNkn-::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn-::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrandSlash___Q-AU9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4,
.styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ,
.styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3,
.styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY,
.styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8,
.styles-module__settingsPanel___qNkn- .styles-module__sliderLabel___6K5v1,
.styles-module__settingsPanel___qNkn- .styles-module__slider___v5z-c,
.styles-module__settingsPanel___qNkn- .styles-module__themeToggle___3imlT {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___qNkn-.styles-module__enter___wginS {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___qNkn-.styles-module__exit___A4iJc {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH- {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-.styles-module__selected___k1-Vq {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__settingsPanelContainer___5it-H {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 16px;
}

.styles-module__settingsPage___BMn-3 {
  min-width: 100%;
  flex-basis: 0;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___BMn-3.styles-module__slideLeft___qUvW4 {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 0 16px 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0.styles-module__slideIn___uXDSu {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsHeader___Fn1DP {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
}

.styles-module__settingsBrand___OoKlM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___Q-AU9 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___rXmL9 {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__themeToggle___3imlT {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-left: 8px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease;
  cursor: pointer;
}
.styles-module__themeToggle___3imlT:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.7);
}

.styles-module__themeIconWrapper___pyaYa {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 20px;
  height: 20px;
}

.styles-module__themeIcon___w7lAm {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: styles-module__themeIconIn___qUWMV 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.styles-module__settingsSectionGrow___eZTRw {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___y-tDE {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___y-tDE.styles-module__settingsRowMarginTop___uLpGb {
  margin-top: 8px;
}

.styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.2);
}

.styles-module__settingsLabel___VCVOQ {
  display: flex;
  align-items: center;
  column-gap: 2px;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.15px;
  color: rgba(255, 255, 255, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__cycleButton___XMBx3 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___XMBx3:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__cycleButtonText___mbbnD {
  display: inline-block;
  animation: styles-module__cycleTextIn___VBNTi 0.2s ease-out;
}

.styles-module__cycleDots___ehp6i {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___zgSXY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__colorOptions___pbxZx {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
  height: 26px;
}

.styles-module__colorOption___Co955 {
  padding: 0;
  position: relative;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: #fff;
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__colorOption___Co955 {
  background-color: #1a1a1a;
}
.styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background-color: var(--swatch);
  transition: opacity 0.2s, transform 0.2s;
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
    --color: var(--swatch-p3);
  }
}
.styles-module__colorOption___Co955::after {
  z-index: -1;
  transform: scale(1.2);
  opacity: 0;
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::before {
  transform: scale(0.8);
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::after {
  opacity: 1;
}

.styles-module__settingsNavLink___uYIwM {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.15s ease;
  cursor: pointer;
}
.styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(255, 255, 255, 0.9);
}
.styles-module__settingsNavLink___uYIwM svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___uYIwM:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(0, 0, 0, 0.8);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___XBUzC {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__settingsBackButton___fflll {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 24px;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___fflll {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___Avra9 {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___Avra9 {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___vFTmJ {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___vFTmJ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___cG7OI {
  color: rgba(255, 255, 255, 0.8);
  text-decoration-line: underline;
  text-decoration-style: dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___cG7OI:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendContainer___VpkXk {
  display: flex;
  align-items: center;
}

.styles-module__autoSendLabel___ngNdC {
  padding-inline-end: 8px;
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s, opacity 0.15s;
  cursor: pointer;
}
.styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: var(--agentation-color-blue);
}
.styles-module__autoSendLabel___ngNdC.styles-module__disabled___9AZYS {
  opacity: 0.3;
  cursor: not-allowed;
}

.styles-module__mcpStatusDot___8AMxP {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__disconnected___mvmvQ {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___VHxhx 2s infinite;
}

.styles-module__mcpNavIndicator___auBHI {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s ease-in-out infinite;
}

.styles-module__webhookUrlInput___WDDDC {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::before {
  background: linear-gradient(to right, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::after {
  background: linear-gradient(to left, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM {
  color: #E5484D;
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4 {
  border-top-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8:hover {
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__checkboxField___ZrSqv:not(:first-child) {
  margin-top: 8px;
}

.styles-module__divider___h6Yux {
  margin-block: 8px;
  width: 100%;
  height: 1px;
  background-color: rgba(26, 26, 26, 0.07);
}
[data-agentation-theme=dark] .styles-module__divider___h6Yux {
  background-color: rgba(255, 255, 255, 0.07);
}`,c4={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let o=document.getElementById("feedback-tool-styles-settings-panel-styles");o||(o=document.createElement("style"),o.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(o)),o.textContent=r4}var Le=c4;function u4({settings:o,onSettingsChange:n,isDarkMode:i,onToggleTheme:l,isDevMode:c,connectionStatus:u,endpoint:_,isVisible:g,toolbarNearBottom:h,settingsPage:m,onSettingsPageChange:p,onHideToolbar:y}){var v;return r.jsx("div",{className:`${Le.settingsPanel} ${g?Le.enter:Le.exit}`,style:h?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:r.jsxs("div",{className:Le.settingsPanelContainer,children:[r.jsxs("div",{className:`${Le.settingsPage} ${m==="automations"?Le.slideLeft:""}`,children:[r.jsxs("div",{className:Le.settingsHeader,children:[r.jsx("a",{className:Le.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:r.jsx("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),r.jsxs("p",{className:Le.settingsVersion,children:["v","3.0.2"]}),r.jsx("button",{className:Le.themeToggle,onClick:l,title:i?"Switch to light mode":"Switch to dark mode",children:r.jsx("span",{className:Le.themeIconWrapper,children:r.jsx("span",{className:Le.themeIcon,children:i?r.jsx(u2,{size:20}):r.jsx(d2,{size:20})},i?"sun":"moon")})})]}),r.jsx("div",{className:Le.divider}),r.jsxs("div",{className:Le.settingsSection,children:[r.jsxs("div",{className:Le.settingsRow,children:[r.jsxs("div",{className:Le.settingsLabel,children:["Output Detail",r.jsx(Ki,{content:"Controls how much detail is included in the copied output"})]}),r.jsxs("button",{className:Le.cycleButton,onClick:()=>{const k=(ir.findIndex(M=>M.value===o.outputDetail)+1)%ir.length;n({outputDetail:ir[k].value})},children:[r.jsx("span",{className:Le.cycleButtonText,children:(v=ir.find(C=>C.value===o.outputDetail))==null?void 0:v.label},o.outputDetail),r.jsx("span",{className:Le.cycleDots,children:ir.map(C=>r.jsx("span",{className:`${Le.cycleDot} ${o.outputDetail===C.value?Le.active:""}`},C.value))})]})]}),r.jsxs("div",{className:`${Le.settingsRow} ${Le.settingsRowMarginTop} ${c?"":Le.settingsRowDisabled}`,children:[r.jsxs("div",{className:Le.settingsLabel,children:["React Components",r.jsx(Ki,{content:c?"Include React component names in annotations":"Disabled — production builds minify component names, making detection unreliable. Use in development mode."})]}),r.jsx($f,{checked:c&&o.reactEnabled,onChange:C=>n({reactEnabled:C.target.checked}),disabled:!c})]}),r.jsxs("div",{className:`${Le.settingsRow} ${Le.settingsRowMarginTop}`,children:[r.jsxs("div",{className:Le.settingsLabel,children:["Hide Until Restart",r.jsx(Ki,{content:"Hides the toolbar until you open a new tab"})]}),r.jsx($f,{checked:!1,onChange:C=>{C.target.checked&&y()}})]})]}),r.jsx("div",{className:Le.divider}),r.jsxs("div",{className:Le.settingsSection,children:[r.jsx("div",{className:`${Le.settingsLabel} ${Le.settingsLabelMarker}`,children:"Marker Color"}),r.jsx("div",{className:Le.colorOptions,children:rr.map(C=>r.jsx("button",{className:`${Le.colorOption} ${o.annotationColorId===C.id?Le.selected:""}`,style:{"--swatch":C.srgb,"--swatch-p3":C.p3},onClick:()=>n({annotationColorId:C.id}),title:C.label,type:"button"},C.id))})]}),r.jsx("div",{className:Le.divider}),r.jsxs("div",{className:Le.settingsSection,children:[r.jsx(R0,{className:"checkbox-field",label:"Clear on copy/send",checked:o.autoClearAfterCopy,onChange:C=>n({autoClearAfterCopy:C.target.checked}),tooltip:"Automatically clear annotations after copying"}),r.jsx(R0,{className:Le.checkboxField,label:"Block page interactions",checked:o.blockInteractions,onChange:C=>n({blockInteractions:C.target.checked})})]}),r.jsx("div",{className:Le.divider}),r.jsxs("button",{className:Le.settingsNavLink,onClick:()=>p("automations"),children:[r.jsx("span",{children:"Manage MCP & Webhooks"}),r.jsxs("span",{className:Le.settingsNavLinkRight,children:[_&&u!=="disconnected"&&r.jsx("span",{className:`${Le.mcpNavIndicator} ${Le[u]}`}),r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),r.jsxs("div",{className:`${Le.settingsPage} ${Le.automationsPage} ${m==="automations"?Le.slideIn:""}`,children:[r.jsxs("button",{className:Le.settingsBackButton,onClick:()=>p("main"),children:[r.jsx(_2,{size:16}),r.jsx("span",{children:"Manage MCP & Webhooks"})]}),r.jsx("div",{className:Le.divider}),r.jsxs("div",{className:Le.settingsSection,children:[r.jsxs("div",{className:Le.settingsRow,children:[r.jsxs("span",{className:Le.automationHeader,children:["MCP Connection",r.jsx(Ki,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),_&&r.jsx("div",{className:`${Le.mcpStatusDot} ${Le[u]}`,title:u==="connected"?"Connected":u==="connecting"?"Connecting...":"Disconnected"})]}),r.jsxs("p",{className:Le.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",r.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:Le.learnMoreLink,children:"Learn more"})]})]}),r.jsx("div",{className:Le.divider}),r.jsxs("div",{className:`${Le.settingsSection} ${Le.settingsSectionGrow}`,children:[r.jsxs("div",{className:Le.settingsRow,children:[r.jsxs("span",{className:Le.automationHeader,children:["Webhooks",r.jsx(Ki,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),r.jsxs("div",{className:Le.autoSendContainer,children:[r.jsx("label",{htmlFor:"agentation-auto-send",className:`${Le.autoSendLabel} ${o.webhooksEnabled?Le.active:""} ${o.webhookUrl?"":Le.disabled}`,children:"Auto-Send"}),r.jsx($f,{id:"agentation-auto-send",checked:o.webhooksEnabled,onChange:C=>n({webhooksEnabled:C.target.checked}),disabled:!o.webhookUrl})]})]}),r.jsx("p",{className:Le.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),r.jsx("textarea",{className:Le.webhookUrlInput,placeholder:"Webhook URL",value:o.webhookUrl,onKeyDown:C=>C.stopPropagation(),onChange:C=>n({webhookUrl:C.target.value})})]})]})]})})}function Pf(o,n="filtered"){const{name:i,path:l}=Va(o);if(n==="off")return{name:i,elementName:i,path:l,reactComponents:null};const c=$w(o,{mode:n});return{name:c.path?`${c.path} ${i}`:i,elementName:i,path:l,reactComponents:c.path}}var A0=!1,If={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},wo=o=>{if(!o||!o.trim())return!1;try{const n=new URL(o.trim());return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}},rr=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],d4=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;const o=document.createElement("style");o.id="agentation-color-tokens",o.textContent=[...rr.map(n=>`
      [data-agentation-accent="${n.id}"] {
        --agentation-color-accent: ${n.srgb};
      }

      @supports (color: color(display-p3 0 0 0)) {
        [data-agentation-accent="${n.id}"] {
          --agentation-color-accent: ${n.p3};
        }
      }
    `),`:root {
      ${rr.map(n=>`--agentation-color-${n.id}: ${n.srgb};`).join(`
`)}
    }`,`@supports (color: color(display-p3 0 0 0)) {
      :root {
        ${rr.map(n=>`--agentation-color-${n.id}: ${n.p3};`).join(`
`)}
      }
    }`].join(""),document.head.appendChild(o)};d4();function Qi(o,n){let i=document.elementFromPoint(o,n);if(!i)return null;for(;i!=null&&i.shadowRoot;){const l=i.shadowRoot.elementFromPoint(o,n);if(!l||l===i)break;i=l}return i}function Uf(o){let n=o;for(;n&&n!==document.body;){const l=window.getComputedStyle(n).position;if(l==="fixed"||l==="sticky")return!0;n=n.parentElement}return!1}function Vi(o){return o.status!=="resolved"&&o.status!=="dismissed"}function Jc(o){const n=ah(o),i=n.found?n:Qw(o);if(i.found&&i.source)return qw(i.source,"path")}function f4({demoAnnotations:o,demoDelay:n=1e3,enableDemoMode:i=!1,onAnnotationAdd:l,onAnnotationDelete:c,onAnnotationUpdate:u,onAnnotationsClear:_,onCopy:g,onSubmit:h,copyToClipboard:m=!0,endpoint:p,sessionId:y,onSessionCreated:v,webhookUrl:C,className:k}={}){var Nr,Or,ml,pl,ei,ti;const[M,L]=b.useState(!1),[B,J]=b.useState([]),[G,z]=b.useState(!0),[de,he]=b.useState(()=>kw()),[F,le]=b.useState(!1),ge=b.useRef(null);b.useEffect(()=>{const S=D=>{const T=ge.current;T&&T.contains(D.target)&&D.stopPropagation()},E=["mousedown","click","pointerdown"];return E.forEach(D=>document.body.addEventListener(D,S)),()=>{E.forEach(D=>document.body.removeEventListener(D,S))}},[]);const[xe,ue]=b.useState(!1),[K,Xe]=b.useState(!1),[_e,Se]=b.useState(null),[N,ce]=b.useState({x:0,y:0}),[W,be]=b.useState(null),[De,A]=b.useState(!1),[Z,pe]=b.useState("idle"),[je,qe]=b.useState(!1),[rt,dt]=b.useState(!1),[en,Qe]=b.useState(null),[$e,pt]=b.useState(null),[Je,ut]=b.useState([]),[At,dn]=b.useState(null),[bn,mn]=b.useState(null),[Q,Me]=b.useState(null),[Fe,Ve]=b.useState(null),[nt,Ue]=b.useState([]),[Te,ct]=b.useState(0),[St,Ht]=b.useState(!1),[ze,I]=b.useState(!1),[Y,oe]=b.useState(!1),[re,Oe]=b.useState(!1),[ke,me]=b.useState(!1),[it,ft]=b.useState("main"),[jt,st]=b.useState(!1),[Ae,wt]=b.useState(!1),[Et,Wt]=b.useState(!1),[Re,yt]=b.useState([]),[xt,ht]=b.useState(null),fn=b.useRef(!1),[Ge,Lt]=b.useState(!1),[vn,Yn]=b.useState(!1),[In,oo]=b.useState(1),[vs,Zn]=b.useState("new-page"),[ln,Dn]=b.useState(""),[Yt,jn]=b.useState(!1),[Ee,Jn]=b.useState(null),el=b.useRef(!1),tl=b.useRef({rearrange:null,placements:[]}),io=b.useRef({rearrange:null,placements:[]}),[Ei,oa]=b.useState(0),[Xo,Go]=b.useState(0),[Mi,ao]=b.useState(0),[Nn,nl]=b.useState(0),Fo=b.useRef(new Set),Ns=b.useRef(new Set),Xn=b.useRef(null),ia=b.useRef(),sl=Ae&&M&&!Et&&Ge;b.useEffect(()=>{if(sl){Yn(!1);const S=qa(()=>{Yn(!0)});return()=>cancelAnimationFrame(S)}else Yn(!1)},[sl]);const Wo=b.useRef(new Map),Ti=b.useRef(new Map),lo=b.useRef(),[es,ws]=b.useState(!1),[rn,gr]=b.useState([]),bu=b.useRef(rn);bu.current=rn;const[aa,vu]=b.useState(null),qo=b.useRef(null);b.useRef(!1),b.useRef([]),b.useRef(0),b.useRef(null),b.useRef(null),b.useRef(1);const[yr,as]=b.useState(!1),ro=b.useRef(null),[pn,co]=b.useState([]),Fn=b.useRef({cmd:!1,shift:!1}),Un=()=>{st(!0)},xr=()=>{st(!1)},Qo=()=>{yr||(ro.current=tt(()=>as(!0),850))},wu=()=>{ro.current&&(clearTimeout(ro.current),ro.current=null),as(!1),xr()};b.useEffect(()=>()=>{ro.current&&clearTimeout(ro.current)},[]);const[kt,br]=b.useState(()=>{try{const S=JSON.parse(localStorage.getItem("feedback-toolbar-settings")??"");return{...If,...S,annotationColorId:rr.find(E=>E.id===S.annotationColorId)?S.annotationColorId:If.annotationColorId}}catch{return If}}),[hs,vr]=b.useState(!0),[wr,Ri]=b.useState(!1),Qs=()=>{var S;(S=ge.current)==null||S.classList.add(fe.disableTransitions),vr(E=>!E),qa(()=>{var E;(E=ge.current)==null||E.classList.remove(fe.disableTransitions)})},ol=!1,Vs="off",[on,uo]=b.useState(y??null),il=b.useRef(!1),[ls,fo]=b.useState(p?"connecting":"disconnected"),[Bt,Ss]=b.useState(null),[Ks,Vo]=b.useState(!1),[rs,la]=b.useState(null),Ko=b.useRef(!1),[al,ho]=b.useState(new Set),[Ai,Di]=b.useState(new Set),[On,Os]=b.useState(!1),[ra,Ls]=b.useState(!1),[Zs,ca]=b.useState(!1),_o=b.useRef(null),ts=b.useRef(null),mo=b.useRef(null),Zo=b.useRef(null),ua=b.useRef(!1),Sr=b.useRef(0),da=b.useRef(null),fa=b.useRef(null),ll=8,Su=50,kr=b.useRef(null),Cr=b.useRef(null),Ni=b.useRef(null),et=typeof window<"u"?window.location.pathname:"/";b.useEffect(()=>{if(re)me(!0);else{st(!1),ft("main");const S=tt(()=>me(!1),0);return()=>clearTimeout(S)}},[re]);const rl=M&&G&&!Ae;b.useEffect(()=>{if(rl){Xe(!1),ue(!0),ho(new Set);const S=tt(()=>{ho(E=>{const D=new Set(E);return B.forEach(T=>D.add(T.id)),D})},350);return()=>clearTimeout(S)}else if(xe){Xe(!0);const S=tt(()=>{ue(!1),Xe(!1)},250);return()=>clearTimeout(S)}},[rl]),b.useEffect(()=>{I(!0),ct(window.scrollY);const S=Nf(et);J(S.filter(Vi)),A0||(Ri(!0),A0=!0,tt(()=>Ri(!1),750));try{const E=localStorage.getItem("feedback-toolbar-theme");E!==null&&vr(E==="dark")}catch{}try{const E=localStorage.getItem("feedback-toolbar-position");if(E){const D=JSON.parse(E);typeof D.x=="number"&&typeof D.y=="number"&&Ss(D)}}catch{}},[et]),b.useEffect(()=>{ze&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(kt))},[kt,ze]),b.useEffect(()=>{ze&&localStorage.setItem("feedback-toolbar-theme",hs?"dark":"light")},[hs,ze]);const jr=b.useRef(!1);b.useEffect(()=>{const S=jr.current;jr.current=Ks,S&&!Ks&&Bt&&ze&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(Bt))},[Ks,Bt,ze]),b.useEffect(()=>{if(!p||!ze||il.current)return;il.current=!0,fo("connecting"),(async()=>{try{const E=ww(et),D=y||E;let T=!1;if(D)try{const $=await w0(p,D);uo($.id),fo("connected"),Of(et,$.id),T=!0;const V=Nf(et),ye=new Set($.annotations.map(Ce=>Ce.id)),ve=V.filter(Ce=>!ye.has(Ce.id));if(ve.length>0){const Pe=`${typeof window<"u"?window.location.origin:""}${et}`,at=(await Promise.allSettled(ve.map(Ke=>Ga(p,$.id,{...Ke,sessionId:$.id,url:Pe})))).map((Ke,we)=>Ke.status==="fulfilled"?Ke.value:(console.warn("[Agentation] Failed to sync annotation:",Ke.reason),ve[we])),bt=[...$.annotations,...at];J(bt.filter(Vi)),nr(et,bt.filter(Vi),$.id)}else J($.annotations.filter(Vi)),nr(et,$.annotations.filter(Vi),$.id)}catch($){console.warn("[Agentation] Could not join session, creating new:",$),Sw(et)}if(!T){const $=typeof window<"u"?window.location.href:"/",V=await Lf(p,$);uo(V.id),fo("connected"),Of(et,V.id),v==null||v(V.id);const ye=_w(),ve=typeof window<"u"?window.location.origin:"",Ce=[];for(const[Pe,We]of ye){const at=We.filter(we=>!we._syncedTo);if(at.length===0)continue;const bt=`${ve}${Pe}`,Ke=Pe===et;Ce.push((async()=>{try{const we=Ke?V:await Lf(p,bt),gn=(await Promise.allSettled(at.map(Dt=>Ga(p,we.id,{...Dt,sessionId:we.id,url:bt})))).map((Dt,hn)=>Dt.status==="fulfilled"?Dt.value:(console.warn("[Agentation] Failed to sync annotation:",Dt.reason),at[hn])).filter(Vi);if(nr(Pe,gn,we.id),Ke){const Dt=new Set(at.map(hn=>hn.id));J(hn=>{const ot=hn.filter(_t=>!Dt.has(_t.id));return[...gn,...ot]})}}catch(we){console.warn(`[Agentation] Failed to sync annotations for ${Pe}:`,we)}})())}await Promise.allSettled(Ce)}}catch(E){fo("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",E)}})()},[p,y,ze,v,et]),b.useEffect(()=>{if(!p||!ze)return;const S=async()=>{try{(await fetch(`${p}/health`)).ok?fo("connected"):fo("disconnected")}catch{fo("disconnected")}};S();const E=g2(S,1e4);return()=>clearInterval(E)},[p,ze]),b.useEffect(()=>{if(!p||!ze||!on)return;const S=new EventSource(`${p}/sessions/${on}/events`),E=["resolved","dismissed"],D=T=>{var $;try{const V=JSON.parse(T.data);if(E.includes(($=V.payload)==null?void 0:$.status)){const ye=V.payload.id,ve=V.payload.kind;if(ve==="placement"){for(const[Ce,Pe]of Wo.current)if(Pe===ye){Wo.current.delete(Ce),yt(We=>We.filter(at=>at.id!==Ce));break}}else if(ve==="rearrange"){for(const[Ce,Pe]of Ti.current)if(Pe===ye){Ti.current.delete(Ce),Jn(We=>{if(!We)return null;const at=We.sections.filter(bt=>bt.id!==Ce);return at.length===0?null:{...We,sections:at}});break}}else Di(Ce=>new Set(Ce).add(ye)),tt(()=>{J(Ce=>Ce.filter(Pe=>Pe.id!==ye)),Di(Ce=>{const Pe=new Set(Ce);return Pe.delete(ye),Pe})},150)}}catch{}};return S.addEventListener("annotation.updated",D),()=>{S.removeEventListener("annotation.updated",D),S.close()}},[p,ze,on]),b.useEffect(()=>{if(!p||!ze)return;const S=fa.current==="disconnected",E=ls==="connected";fa.current=ls,S&&E&&(async()=>{try{const T=Nf(et);if(T.length===0)return;const V=`${typeof window<"u"?window.location.origin:""}${et}`;let ye=on,ve=[];if(ye)try{ve=(await w0(p,ye)).annotations}catch{ye=null}ye||(ye=(await Lf(p,V)).id,uo(ye),Of(et,ye));const Ce=new Set(ve.map(We=>We.id)),Pe=T.filter(We=>!Ce.has(We.id));if(Pe.length>0){const at=(await Promise.allSettled(Pe.map(we=>Ga(p,ye,{...we,sessionId:ye,url:V})))).map((we,tn)=>we.status==="fulfilled"?we.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",we.reason),Pe[tn])),Ke=[...ve,...at].filter(Vi);J(Ke),nr(et,Ke,ye)}}catch(T){console.warn("[Agentation] Failed to sync on reconnect:",T)}})()},[ls,p,ze,on,et]);const ku=b.useCallback(()=>{F||(le(!0),Oe(!1),L(!1),tt(()=>{Cw(!0),he(!0),le(!1)},400))},[F]);b.useEffect(()=>{if(!i||!ze||!o||o.length===0||B.length>0)return;const S=[];return S.push(tt(()=>{L(!0)},n-200)),o.forEach((E,D)=>{const T=n+D*300;S.push(tt(()=>{const $=document.querySelector(E.selector);if(!$)return;const V=$.getBoundingClientRect(),{name:ye,path:ve}=Va($),Ce={id:`demo-${Date.now()}-${D}`,x:(V.left+V.width/2)/window.innerWidth*100,y:V.top+V.height/2+window.scrollY,comment:E.comment,element:ye,elementPath:ve,timestamp:Date.now(),selectedText:E.selectedText,boundingBox:{x:V.left,y:V.top+window.scrollY,width:V.width,height:V.height},nearbyText:er($),cssClasses:tr($)};J(Pe=>[...Pe,Ce])},T))}),()=>{S.forEach(clearTimeout)}},[i,ze,o,n]),b.useEffect(()=>{const S=()=>{ct(window.scrollY),Ht(!0),Ni.current&&clearTimeout(Ni.current),Ni.current=tt(()=>{Ht(!1)},150)};return window.addEventListener("scroll",S,{passive:!0}),()=>{window.removeEventListener("scroll",S),Ni.current&&clearTimeout(Ni.current)}},[]),b.useEffect(()=>{ze&&B.length>0?on?nr(et,B,on):gy(et,B):ze&&B.length===0&&localStorage.removeItem(mu(et))},[B,et,ze,on]),b.useEffect(()=>{if(ze&&!fn.current){fn.current=!0;const S=mw(et);S.length>0&&yt(S)}},[ze,et]),b.useEffect(()=>{ze&&fn.current&&!Ge&&(Re.length>0?pw(et,Re):gw(et))},[Re,et,ze,Ge]),b.useEffect(()=>{if(ze&&!el.current){el.current=!0;const S=yw(et);if(S){const E={...S,sections:S.sections.map(D=>({...D,currentRect:D.currentRect??{...D.originalRect}}))};Jn(E)}}},[ze,et]),b.useEffect(()=>{ze&&el.current&&!Ge&&(Ee?xw(et,Ee):bw(et))},[Ee,et,ze,Ge]);const cl=b.useRef(!1);b.useEffect(()=>{if(ze&&!cl.current){cl.current=!0;const S=vw(et);S&&(io.current={rearrange:S.rearrange,placements:S.placements||[]},S.purpose&&Dn(S.purpose))}},[ze,et]),b.useEffect(()=>{var E,D,T;if(!ze||!cl.current)return;const S=io.current;Ge?(((E=Ee==null?void 0:Ee.sections)==null?void 0:E.length)??0)>0||Re.length>0||ln?v0(et,{rearrange:Ee,placements:Re,purpose:ln}):Vc(et):(((T=(D=S.rearrange)==null?void 0:D.sections)==null?void 0:T.length)??0)>0||S.placements.length>0||ln?v0(et,{rearrange:S.rearrange,placements:S.placements,purpose:ln}):Vc(et)},[Ee,Re,ln,Ge,et,ze]),b.useEffect(()=>{Ae&&!Ee&&Jn({sections:[],originalOrder:[],detectedAt:Date.now()})},[Ae,Ee]),b.useEffect(()=>{if(!p||!on)return;const S=Wo.current,E=new Set(Re.map(D=>D.id));for(const D of Re){if(S.has(D.id))continue;S.set(D.id,"");const T=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:et;Ga(p,on,{id:D.id,x:D.x/window.innerWidth*100,y:D.y,comment:`Place ${D.type} at (${Math.round(D.x)}, ${Math.round(D.y)}), ${D.width}×${D.height}px${D.text?` — "${D.text}"`:""}`,element:`[design:${D.type}]`,elementPath:"[placement]",timestamp:D.timestamp,url:T,intent:"change",severity:"important",kind:"placement",placement:{componentType:D.type,width:D.width,height:D.height,scrollY:D.scrollY,text:D.text}}).then($=>{S.has(D.id)&&S.set(D.id,$.id)}).catch($=>{console.warn("[Agentation] Failed to sync placement annotation:",$),S.delete(D.id)})}for(const[D,T]of S)E.has(D)||(S.delete(D),T&&ki(p,T).catch(()=>{}))},[Re,p,on,et]),b.useEffect(()=>{if(!(!p||!on))return lo.current&&clearTimeout(lo.current),lo.current=tt(()=>{const S=Ti.current;if(!Ee||Ee.sections.length===0){for(const[,T]of S)T&&ki(p,T).catch(()=>{});S.clear();return}const E=new Set(Ee.sections.map(T=>T.id)),D=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:et;for(const T of Ee.sections){const $=T.originalRect,V=T.currentRect;if(!(Math.abs($.x-V.x)>1||Math.abs($.y-V.y)>1||Math.abs($.width-V.width)>1||Math.abs($.height-V.height)>1)){const Ce=S.get(T.id);Ce&&(S.delete(T.id),ki(p,Ce).catch(()=>{}));continue}const ve=S.get(T.id);ve?S0(p,ve,{comment:`Move ${T.label} section (${T.tagName}) — from (${Math.round($.x)},${Math.round($.y)}) ${Math.round($.width)}×${Math.round($.height)} to (${Math.round(V.x)},${Math.round(V.y)}) ${Math.round(V.width)}×${Math.round(V.height)}`}).catch(Ce=>{console.warn("[Agentation] Failed to update rearrange annotation:",Ce)}):(S.set(T.id,""),Ga(p,on,{id:T.id,x:V.x/window.innerWidth*100,y:V.y,comment:`Move ${T.label} section (${T.tagName}) — from (${Math.round($.x)},${Math.round($.y)}) ${Math.round($.width)}×${Math.round($.height)} to (${Math.round(V.x)},${Math.round(V.y)}) ${Math.round(V.width)}×${Math.round(V.height)}`,element:T.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:D,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:T.selector,label:T.label,tagName:T.tagName,originalRect:$,currentRect:V}}).then(Ce=>{S.has(T.id)&&S.set(T.id,Ce.id)}).catch(Ce=>{console.warn("[Agentation] Failed to sync rearrange annotation:",Ce),S.delete(T.id)}))}for(const[T,$]of S)E.has(T)||(S.delete(T),$&&ki(p,$).catch(()=>{}))},300),()=>{lo.current&&clearTimeout(lo.current)}},[Ee,p,on,et]);const po=b.useRef(new Map);b.useLayoutEffect(()=>{const S=(Ee==null?void 0:Ee.sections)??[],E=new Set;if((Ae||Et)&&M)for(const D of S){E.add(D.id);try{const T=document.querySelector(D.selector);if(!T)continue;if(!po.current.has(D.id)){const $={transform:T.style.transform,transformOrigin:T.style.transformOrigin,opacity:T.style.opacity,position:T.style.position,zIndex:T.style.zIndex,display:T.style.display},V=[];let ye=T.parentElement;for(;ye&&ye!==document.body;){const Ce=getComputedStyle(ye);(Ce.overflow!=="visible"||Ce.overflowX!=="visible"||Ce.overflowY!=="visible")&&(V.push({el:ye,overflow:ye.style.overflow}),ye.style.overflow="visible"),ye=ye.parentElement}getComputedStyle(T).display==="inline"&&(T.style.display="inline-block"),po.current.set(D.id,{el:T,origStyles:$,ancestors:V}),T.style.transformOrigin="top left",T.style.zIndex="9999"}}catch{}}for(const[D,T]of po.current)if(!E.has(D)){const{el:$,origStyles:V,ancestors:ye}=T;$.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",$.style.transform=V.transform,$.style.transformOrigin=V.transformOrigin,$.style.opacity=V.opacity,$.style.position=V.position,$.style.zIndex=V.zIndex,po.current.delete(D),tt(()=>{$.style.transition="",$.style.display=V.display;for(const ve of ye)ve.el.style.overflow=ve.overflow},450)}},[Ee,Ae,Et,M]),b.useEffect(()=>()=>{for(const[,S]of po.current){const{el:E,origStyles:D,ancestors:T}=S;E.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",E.style.transform=D.transform,E.style.transformOrigin=D.transformOrigin,E.style.opacity=D.opacity,E.style.position=D.position,E.style.zIndex=D.zIndex,tt(()=>{E.style.transition="",E.style.display=D.display;for(const $ of T)$.el.style.overflow=$.overflow},450)}po.current.clear()},[]);const ha=b.useCallback(()=>{Wt(!0),wt(!1),ht(null),clearTimeout(ia.current),ia.current=tt(()=>{Wt(!1)},300)},[]),Er=b.useCallback(()=>{Ae&&(Wt(!0),wt(!1),ht(null),clearTimeout(ia.current),ia.current=tt(()=>{Wt(!1)},300)),L(!1)},[Ae]),Mr=b.useCallback(()=>{Y||(x2(),oe(!0))},[Y]),Oi=b.useCallback(()=>{Y&&(l0(),oe(!1))},[Y]),ul=b.useCallback(()=>{Y?Oi():Mr()},[Y,Mr,Oi]),Tr=b.useCallback(()=>{if(pn.length===0)return;const S=pn[0],E=S.element,D=pn.length>1,T=pn.map($=>$.element.getBoundingClientRect());if(D){const $={left:Math.min(...T.map(we=>we.left)),top:Math.min(...T.map(we=>we.top)),right:Math.max(...T.map(we=>we.right)),bottom:Math.max(...T.map(we=>we.bottom))},V=pn.slice(0,5).map(we=>we.name).join(", "),ye=pn.length>5?` +${pn.length-5} more`:"",ve=T.map(we=>({x:we.left,y:we.top+window.scrollY,width:we.width,height:we.height})),Pe=pn[pn.length-1].element,We=T[T.length-1],at=We.left+We.width/2,bt=We.top+We.height/2,Ke=Uf(Pe);be({x:at/window.innerWidth*100,y:Ke?bt:bt+window.scrollY,clientY:bt,element:`${pn.length} elements: ${V}${ye}`,elementPath:"multi-select",boundingBox:{x:$.left,y:$.top+window.scrollY,width:$.right-$.left,height:$.bottom-$.top},isMultiSelect:!0,isFixed:Ke,elementBoundingBoxes:ve,multiSelectElements:pn.map(we=>we.element),targetElement:Pe,fullPath:Wc(E),accessibility:Fc(E),computedStyles:Gc(E),computedStylesObj:Xc(E),nearbyElements:Yc(E),cssClasses:tr(E),nearbyText:er(E),sourceFile:Jc(E)})}else{const $=T[0],V=Uf(E);be({x:$.left/window.innerWidth*100,y:V?$.top:$.top+window.scrollY,clientY:$.top,element:S.name,elementPath:S.path,boundingBox:{x:$.left,y:V?$.top:$.top+window.scrollY,width:$.width,height:$.height},isFixed:V,fullPath:Wc(E),accessibility:Fc(E),computedStyles:Gc(E),computedStylesObj:Xc(E),nearbyElements:Yc(E),cssClasses:tr(E),nearbyText:er(E),reactComponents:S.reactComponents,sourceFile:Jc(E)})}co([]),Se(null)},[pn]);b.useEffect(()=>{M||(be(null),Me(null),Ve(null),Ue([]),Se(null),Oe(!1),co([]),Fn.current={cmd:!1,shift:!1},Y&&Oi())},[M,Y,Oi]),b.useEffect(()=>()=>{l0()},[]),b.useEffect(()=>{if(!M)return;const S=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),E=":not([data-agentation-root]):not([data-agentation-root] *)",D=document.createElement("style");return D.id="feedback-cursor-styles",D.textContent=`
      body ${E} {
        cursor: crosshair !important;
      }

      body :is(${S})${E} {
        cursor: text !important;
      }
    `,document.head.appendChild(D),()=>{const T=document.getElementById("feedback-cursor-styles");T&&T.remove()}},[M]),b.useEffect(()=>{if(aa!==null&&M)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[aa,M]),b.useEffect(()=>{if(!M||W||es||Ae)return;const S=E=>{const D=E.composedPath()[0]||E.target;if(us(D,"[data-feedback-toolbar]")){Se(null);return}const T=Qi(E.clientX,E.clientY);if(!T||us(T,"[data-feedback-toolbar]")){Se(null);return}const{name:$,elementName:V,path:ye,reactComponents:ve}=Pf(T,Vs),Ce=T.getBoundingClientRect();Se({element:$,elementName:V,elementPath:ye,rect:Ce,reactComponents:ve}),ce({x:E.clientX,y:E.clientY})};return document.addEventListener("mousemove",S),()=>document.removeEventListener("mousemove",S)},[M,W,es,Ae,Vs,rn]);const _a=b.useCallback(S=>{var E;if(Me(S),Qe(null),pt(null),ut([]),(E=S.elementBoundingBoxes)!=null&&E.length){const D=[];for(const T of S.elementBoundingBoxes){const $=T.x+T.width/2,V=T.y+T.height/2-window.scrollY,ye=Qi($,V);ye&&D.push(ye)}Ue(D),Ve(null)}else if(S.boundingBox){const D=S.boundingBox,T=D.x+D.width/2,$=S.isFixed?D.y+D.height/2:D.y+D.height/2-window.scrollY,V=Qi(T,$);if(V){const ye=V.getBoundingClientRect(),ve=ye.width/D.width,Ce=ye.height/D.height;ve<.5||Ce<.5?Ve(null):Ve(V)}else Ve(null);Ue([])}else Ve(null),Ue([])},[]);b.useEffect(()=>{if(!M||es||Ae)return;const S=E=>{var qt,gn;if(ua.current){ua.current=!1;return}const D=E.composedPath()[0]||E.target;if(us(D,"[data-feedback-toolbar]")||us(D,"[data-annotation-popup]")||us(D,"[data-annotation-marker]"))return;if(E.metaKey&&E.shiftKey&&!W&&!Q){E.preventDefault(),E.stopPropagation();const Dt=Qi(E.clientX,E.clientY);if(!Dt)return;const hn=Dt.getBoundingClientRect(),{name:ot,path:_t,reactComponents:an}=Pf(Dt,Vs),Qt=pn.findIndex(En=>En.element===Dt);Qt>=0?co(En=>En.filter((Wn,wn)=>wn!==Qt)):co(En=>[...En,{element:Dt,rect:hn,name:ot,path:_t,reactComponents:an??void 0}]);return}const T=us(D,"button, a, input, select, textarea, [role='button'], [onclick]");if(kt.blockInteractions&&T&&(E.preventDefault(),E.stopPropagation()),W){if(T&&!kt.blockInteractions)return;E.preventDefault(),(qt=kr.current)==null||qt.shake();return}if(Q){if(T&&!kt.blockInteractions)return;E.preventDefault(),(gn=Cr.current)==null||gn.shake();return}E.preventDefault();const $=Qi(E.clientX,E.clientY);if(!$)return;const{name:V,path:ye,reactComponents:ve}=Pf($,Vs),Ce=$.getBoundingClientRect(),Pe=E.clientX/window.innerWidth*100,We=Uf($),at=We?E.clientY:E.clientY+window.scrollY,bt=window.getSelection();let Ke;bt&&bt.toString().trim().length>0&&(Ke=bt.toString().trim().slice(0,500));const we=Xc($),tn=Gc($);be({x:Pe,y:at,clientY:E.clientY,element:V,elementPath:ye,selectedText:Ke,boundingBox:{x:Ce.left,y:We?Ce.top:Ce.top+window.scrollY,width:Ce.width,height:Ce.height},nearbyText:er($),cssClasses:tr($),isFixed:We,fullPath:Wc($),accessibility:Fc($),computedStyles:tn,computedStylesObj:we,nearbyElements:Yc($),reactComponents:ve??void 0,sourceFile:Jc($),targetElement:$}),Se(null)};return document.addEventListener("click",S,!0),()=>document.removeEventListener("click",S,!0)},[M,es,Ae,W,Q,kt.blockInteractions,Vs,pn]),b.useEffect(()=>{if(!M)return;const S=T=>{T.key==="Meta"&&(Fn.current.cmd=!0),T.key==="Shift"&&(Fn.current.shift=!0)},E=T=>{const $=Fn.current.cmd&&Fn.current.shift;T.key==="Meta"&&(Fn.current.cmd=!1),T.key==="Shift"&&(Fn.current.shift=!1);const V=Fn.current.cmd&&Fn.current.shift;$&&!V&&pn.length>0&&Tr()},D=()=>{Fn.current={cmd:!1,shift:!1},co([])};return document.addEventListener("keydown",S),document.addEventListener("keyup",E),window.addEventListener("blur",D),()=>{document.removeEventListener("keydown",S),document.removeEventListener("keyup",E),window.removeEventListener("blur",D)}},[M,pn,Tr]),b.useEffect(()=>{if(!M||W||es||Ae)return;const S=E=>{const D=E.composedPath()[0]||E.target;us(D,"[data-feedback-toolbar]")||us(D,"[data-annotation-marker]")||us(D,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(D.tagName)||D.isContentEditable||(E.preventDefault(),_o.current={x:E.clientX,y:E.clientY})};return document.addEventListener("mousedown",S),()=>document.removeEventListener("mousedown",S)},[M,W,es,Ae]),b.useEffect(()=>{if(!M||W)return;const S=E=>{if(!_o.current)return;const D=E.clientX-_o.current.x,T=E.clientY-_o.current.y,$=D*D+T*T,V=ll*ll;if(!Zs&&$>=V&&(ts.current=_o.current,ca(!0),E.preventDefault()),(Zs||$>=V)&&ts.current){if(mo.current){const ot=Math.min(ts.current.x,E.clientX),_t=Math.min(ts.current.y,E.clientY),an=Math.abs(E.clientX-ts.current.x),Qt=Math.abs(E.clientY-ts.current.y);mo.current.style.transform=`translate(${ot}px, ${_t}px)`,mo.current.style.width=`${an}px`,mo.current.style.height=`${Qt}px`}const ye=Date.now();if(ye-Sr.current<Su)return;Sr.current=ye;const ve=ts.current.x,Ce=ts.current.y,Pe=Math.min(ve,E.clientX),We=Math.min(Ce,E.clientY),at=Math.max(ve,E.clientX),bt=Math.max(Ce,E.clientY),Ke=(Pe+at)/2,we=(We+bt)/2,tn=new Set,qt=[[Pe,We],[at,We],[Pe,bt],[at,bt],[Ke,we],[Ke,We],[Ke,bt],[Pe,we],[at,we]];for(const[ot,_t]of qt){const an=document.elementsFromPoint(ot,_t);for(const Qt of an)Qt instanceof HTMLElement&&tn.add(Qt)}const gn=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const ot of gn)if(ot instanceof HTMLElement){const _t=ot.getBoundingClientRect(),an=_t.left+_t.width/2,Qt=_t.top+_t.height/2,En=an>=Pe&&an<=at&&Qt>=We&&Qt<=bt,Wn=Math.min(_t.right,at)-Math.max(_t.left,Pe),wn=Math.min(_t.bottom,bt)-Math.max(_t.top,We),Cs=Wn>0&&wn>0?Wn*wn:0,_s=_t.width*_t.height,Bs=_s>0?Cs/_s:0;(En||Bs>.5)&&tn.add(ot)}const Dt=[],hn=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const ot of tn){if(us(ot,"[data-feedback-toolbar]")||us(ot,"[data-annotation-marker]"))continue;const _t=ot.getBoundingClientRect();if(!(_t.width>window.innerWidth*.8&&_t.height>window.innerHeight*.5)&&!(_t.width<10||_t.height<10)&&_t.left<at&&_t.right>Pe&&_t.top<bt&&_t.bottom>We){const an=ot.tagName;let Qt=hn.has(an);if(!Qt&&(an==="DIV"||an==="SPAN")){const En=ot.textContent&&ot.textContent.trim().length>0,Wn=ot.onclick!==null||ot.getAttribute("role")==="button"||ot.getAttribute("role")==="link"||ot.classList.contains("clickable")||ot.hasAttribute("data-clickable");(En||Wn)&&!ot.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(Qt=!0)}if(Qt){let En=!1;for(const Wn of Dt)if(Wn.left<=_t.left&&Wn.right>=_t.right&&Wn.top<=_t.top&&Wn.bottom>=_t.bottom){En=!0;break}En||Dt.push(_t)}}}if(Zo.current){const ot=Zo.current;for(;ot.children.length>Dt.length;)ot.removeChild(ot.lastChild);Dt.forEach((_t,an)=>{let Qt=ot.children[an];Qt||(Qt=document.createElement("div"),Qt.className=fe.selectedElementHighlight,ot.appendChild(Qt)),Qt.style.transform=`translate(${_t.left}px, ${_t.top}px)`,Qt.style.width=`${_t.width}px`,Qt.style.height=`${_t.height}px`})}}};return document.addEventListener("mousemove",S,{passive:!0}),()=>document.removeEventListener("mousemove",S)},[M,W,Zs,ll]),b.useEffect(()=>{if(!M)return;const S=E=>{const D=Zs,T=ts.current;if(Zs&&T){ua.current=!0;const $=Math.min(T.x,E.clientX),V=Math.min(T.y,E.clientY),ye=Math.max(T.x,E.clientX),ve=Math.max(T.y,E.clientY),Ce=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(Ke=>{if(!(Ke instanceof HTMLElement)||us(Ke,"[data-feedback-toolbar]")||us(Ke,"[data-annotation-marker]"))return;const we=Ke.getBoundingClientRect();we.width>window.innerWidth*.8&&we.height>window.innerHeight*.5||we.width<10||we.height<10||we.left<ye&&we.right>$&&we.top<ve&&we.bottom>V&&Ce.push({element:Ke,rect:we})});const We=Ce.filter(({element:Ke})=>!Ce.some(({element:we})=>we!==Ke&&Ke.contains(we))),at=E.clientX/window.innerWidth*100,bt=E.clientY+window.scrollY;if(We.length>0){const Ke=We.reduce((hn,{rect:ot})=>({left:Math.min(hn.left,ot.left),top:Math.min(hn.top,ot.top),right:Math.max(hn.right,ot.right),bottom:Math.max(hn.bottom,ot.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),we=We.slice(0,5).map(({element:hn})=>Va(hn).name).join(", "),tn=We.length>5?` +${We.length-5} more`:"",qt=We[0].element,gn=Xc(qt),Dt=Gc(qt);be({x:at,y:bt,clientY:E.clientY,element:`${We.length} elements: ${we}${tn}`,elementPath:"multi-select",boundingBox:{x:Ke.left,y:Ke.top+window.scrollY,width:Ke.right-Ke.left,height:Ke.bottom-Ke.top},isMultiSelect:!0,fullPath:Wc(qt),accessibility:Fc(qt),computedStyles:Dt,computedStylesObj:gn,nearbyElements:Yc(qt),cssClasses:tr(qt),nearbyText:er(qt),sourceFile:Jc(qt)})}else{const Ke=Math.abs(ye-$),we=Math.abs(ve-V);Ke>20&&we>20&&be({x:at,y:bt,clientY:E.clientY,element:"Area selection",elementPath:`region at (${Math.round($)}, ${Math.round(V)})`,boundingBox:{x:$,y:V+window.scrollY,width:Ke,height:we},isMultiSelect:!0})}Se(null)}else D&&(ua.current=!0);_o.current=null,ts.current=null,ca(!1),Zo.current&&(Zo.current.innerHTML="")};return document.addEventListener("mouseup",S),()=>document.removeEventListener("mouseup",S)},[M,Zs]);const zs=b.useCallback(async(S,E,D)=>{const T=kt.webhookUrl||C;if(!T||!kt.webhooksEnabled&&!D)return!1;try{return(await fetch(T,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:S,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...E})})).ok}catch($){return console.warn("[Agentation] Webhook failed:",$),!1}},[C,kt.webhookUrl,kt.webhooksEnabled]),Cu=b.useCallback(S=>{var D;if(!W)return;const E={id:Date.now().toString(),x:W.x,y:W.y,comment:S,element:W.element,elementPath:W.elementPath,timestamp:Date.now(),selectedText:W.selectedText,boundingBox:W.boundingBox,nearbyText:W.nearbyText,cssClasses:W.cssClasses,isMultiSelect:W.isMultiSelect,isFixed:W.isFixed,fullPath:W.fullPath,accessibility:W.accessibility,computedStyles:W.computedStyles,nearbyElements:W.nearbyElements,reactComponents:W.reactComponents,sourceFile:W.sourceFile,elementBoundingBoxes:W.elementBoundingBoxes,...p&&on?{sessionId:on,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};J(T=>[...T,E]),da.current=E.id,tt(()=>{da.current=null},300),tt(()=>{ho(T=>new Set(T).add(E.id))},250),l==null||l(E),zs("annotation.add",{annotation:E}),Os(!0),tt(()=>{be(null),Os(!1)},150),(D=window.getSelection())==null||D.removeAllRanges(),p&&on&&Ga(p,on,E).then(T=>{T.id!==E.id&&(J($=>$.map(V=>V.id===E.id?{...V,id:T.id}:V)),ho($=>{const V=new Set($);return V.delete(E.id),V.add(T.id),V}))}).catch(T=>{console.warn("[Agentation] Failed to sync annotation:",T)})},[W,l,zs,p,on]),dl=b.useCallback(()=>{Os(!0),tt(()=>{be(null),Os(!1)},150)},[]),fl=b.useCallback(S=>{const E=B.findIndex(T=>T.id===S),D=B[E];(Q==null?void 0:Q.id)===S&&(Ls(!0),tt(()=>{Me(null),Ve(null),Ue([]),Ls(!1)},150)),dn(S),Di(T=>new Set(T).add(S)),D&&(c==null||c(D),zs("annotation.delete",{annotation:D})),p&&ki(p,S).catch(T=>{console.warn("[Agentation] Failed to delete annotation from server:",T)}),tt(()=>{J(T=>T.filter($=>$.id!==S)),Di(T=>{const $=new Set(T);return $.delete(S),$}),dn(null),E<B.length-1&&(mn(E),tt(()=>mn(null),200))},150)},[B,Q,c,zs,p]),ma=b.useCallback(S=>{var E;if(!S){Qe(null),pt(null),ut([]);return}if(Qe(S.id),(E=S.elementBoundingBoxes)!=null&&E.length){const D=[];for(const T of S.elementBoundingBoxes){const $=T.x+T.width/2,V=T.y+T.height/2-window.scrollY,ve=document.elementsFromPoint($,V).find(Ce=>!Ce.closest("[data-annotation-marker]")&&!Ce.closest("[data-agentation-root]"));ve&&D.push(ve)}ut(D),pt(null)}else if(S.boundingBox){const D=S.boundingBox,T=D.x+D.width/2,$=S.isFixed?D.y+D.height/2:D.y+D.height/2-window.scrollY,V=Qi(T,$);if(V){const ye=V.getBoundingClientRect(),ve=ye.width/D.width,Ce=ye.height/D.height;ve<.5||Ce<.5?pt(null):pt(V)}else pt(null);ut([])}else pt(null),ut([])},[]),ju=b.useCallback(S=>{if(!Q)return;const E={...Q,comment:S};J(D=>D.map(T=>T.id===Q.id?E:T)),u==null||u(E),zs("annotation.update",{annotation:E}),p&&S0(p,Q.id,{comment:S}).catch(D=>{console.warn("[Agentation] Failed to update annotation on server:",D)}),Ls(!0),tt(()=>{Me(null),Ve(null),Ue([]),Ls(!1)},150)},[Q,u,zs,p]),hl=b.useCallback(()=>{Ls(!0),tt(()=>{Me(null),Ve(null),Ue([]),Ls(!1)},150)},[]),ks=b.useCallback(()=>{const S=B.length,E=Re.length>0||!!Ee;if(S===0&&rn.length===0&&!E)return;if(_==null||_(B),zs("annotations.clear",{annotations:B}),p){Promise.all(B.map($=>ki(p,$.id).catch(V=>{console.warn("[Agentation] Failed to delete annotation from server:",V)})));for(const[,$]of Wo.current)$&&ki(p,$).catch(()=>{});Wo.current.clear();for(const[,$]of Ti.current)$&&ki(p,$).catch(()=>{});Ti.current.clear()}dt(!0),qe(!0),gr([]);const D=qo.current;if(D){const $=D.getContext("2d");$&&$.clearRect(0,0,D.width,D.height)}(Re.length>0||Ee)&&(ao($=>$+1),nl($=>$+1),tt(()=>{yt([]),Jn(null)},200)),Ge&&Lt(!1),ln&&Dn(""),io.current={rearrange:null,placements:[]},Vc(et);const T=S*30+200;tt(()=>{J([]),ho(new Set),localStorage.removeItem(mu(et)),dt(!1)},T),tt(()=>qe(!1),1500)},[et,B,rn,Re,Ee,Ge,ln,_,zs,p]),_l=b.useCallback(async()=>{const S=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:et,E=Ae&&Ge;let D;if(E){if(Re.length===0&&!Ee&&!ln)return;D=""}else{if(D=j0(B,S,kt.outputDetail),!D&&rn.length===0&&Re.length===0&&!Ee)return;D||(D=`## Page Feedback: ${S}
`)}if(!E&&rn.length>0){const T=new Set;for(const ve of B)ve.drawingIndex!=null&&T.add(ve.drawingIndex);const $=qo.current;$&&($.style.visibility="hidden");const V=[],ye=window.scrollY;for(let ve=0;ve<rn.length;ve++){if(T.has(ve))continue;const Ce=rn[ve];if(Ce.points.length<2)continue;const Pe=Ce.fixed?Ce.points:Ce.points.map(yn=>({x:yn.x,y:yn.y-ye}));let We=1/0,at=1/0,bt=-1/0,Ke=-1/0;for(const yn of Pe)We=Math.min(We,yn.x),at=Math.min(at,yn.y),bt=Math.max(bt,yn.x),Ke=Math.max(Ke,yn.y);const we=bt-We,tn=Ke-at,qt=Math.hypot(we,tn),gn=Pe[0],Dt=Pe[Pe.length-1],hn=Math.hypot(Dt.x-gn.x,Dt.y-gn.y);let ot;const _t=hn<qt*.35,an=we/Math.max(tn,1);if(_t&&qt>20){const yn=Math.max(we,tn)*.15;let ns=0;for(const go of Pe){const Lr=go.x-We<yn,zr=bt-go.x<yn,Eu=go.y-at<yn,Mu=Ke-go.y<yn;(Lr||zr)&&(Eu||Mu)&&ns++}ot=ns>Pe.length*.15?"box":"circle"}else an>3&&tn<40?ot="underline":hn>qt*.5?ot="arrow":ot="drawing";const Qt=Math.min(10,Pe.length),En=Math.max(1,Math.floor(Pe.length/Qt)),Wn=new Set,wn=[],Cs=[gn];for(let yn=En;yn<Pe.length-1;yn+=En)Cs.push(Pe[yn]);Cs.push(Dt);for(const yn of Cs){const ns=Qi(yn.x,yn.y);if(!ns||Wn.has(ns)||us(ns,"[data-feedback-toolbar]"))continue;Wn.add(ns);const{name:go}=Va(ns);wn.includes(go)||wn.push(go)}const _s=`${Math.round(We)},${Math.round(at)} → ${Math.round(bt)},${Math.round(Ke)}`;let Bs;(ot==="circle"||ot==="box")&&wn.length>0?Bs=`${ot==="box"?"Boxed":"Circled"} **${wn[0]}**${wn.length>1?` (and ${wn.slice(1).join(", ")})`:""} (region: ${_s})`:ot==="underline"&&wn.length>0?Bs=`Underlined **${wn[0]}** (${_s})`:ot==="arrow"&&wn.length>=2?Bs=`Arrow from **${wn[0]}** to **${wn[wn.length-1]}** (${Math.round(gn.x)},${Math.round(gn.y)} → ${Math.round(Dt.x)},${Math.round(Dt.y)})`:wn.length>0?Bs=`${ot==="arrow"?"Arrow":"Drawing"} near **${wn.join("**, **")}** (region: ${_s})`:Bs=`Drawing at ${_s}`,V.push(Bs)}$&&($.style.visibility=""),V.length>0&&(D+=`
**Drawings:**
`,V.forEach((ve,Ce)=>{D+=`${Ce+1}. ${ve}
`}))}if((Re.length>0||E&&ln)&&(D+=`
`+x0(Re,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:Ge,wireframePurpose:ln||void 0},kt.outputDetail)),Ee){const T=b0(Ee,kt.outputDetail,{width:window.innerWidth,height:window.innerHeight});T&&(D+=`
`+T)}if(m)try{await navigator.clipboard.writeText(D)}catch{}g==null||g(D),A(!0),tt(()=>A(!1),2e3),kt.autoClearAfterCopy&&tt(()=>ks(),500)},[B,rn,Re,Ee,Ge,Ae,vs,ln,et,kt.outputDetail,Vs,kt.autoClearAfterCopy,ks,m,g]),pa=b.useCallback(async()=>{const S=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:et;let E=j0(B,S,kt.outputDetail);if(!E&&Re.length===0&&!Ee)return;if(E||(E=`## Page Feedback: ${S}
`),Re.length>0&&(E+=`
`+x0(Re,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:Ge,wireframePurpose:ln||void 0},kt.outputDetail)),Ee){const T=b0(Ee,kt.outputDetail,{width:window.innerWidth,height:window.innerHeight});T&&(E+=`
`+T)}h&&h(E,B),pe("sending"),await new Promise(T=>tt(T,150));const D=await zs("submit",{output:E,annotations:B},!0);pe(D?"sent":"failed"),tt(()=>pe("idle"),2500),D&&kt.autoClearAfterCopy&&tt(()=>ks(),500)},[h,zs,B,Re,Ee,Ge,vs,et,kt.outputDetail,Vs,kt.autoClearAfterCopy,ks]);b.useEffect(()=>{if(!rs)return;const S=10,E=T=>{const $=T.clientX-rs.x,V=T.clientY-rs.y,ye=Math.sqrt($*$+V*V);if(!Ks&&ye>S&&Vo(!0),Ks||ye>S){let ve=rs.toolbarX+$,Ce=rs.toolbarY+V;const Pe=20,We=337,at=44,Ke=We-(M?ls==="connected"?297:257:44),we=Pe-Ke,tn=window.innerWidth-Pe-We;ve=Math.max(we,Math.min(tn,ve)),Ce=Math.max(Pe,Math.min(window.innerHeight-at-Pe,Ce)),Ss({x:ve,y:Ce})}},D=()=>{Ks&&(Ko.current=!0),Vo(!1),la(null)};return document.addEventListener("mousemove",E),document.addEventListener("mouseup",D),()=>{document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",D)}},[rs,Ks,M,ls]);const Rr=b.useCallback(S=>{if(S.target.closest("button")||S.target.closest("[data-agentation-settings-panel]"))return;const E=S.currentTarget.parentElement;if(!E)return;const D=E.getBoundingClientRect(),T=(Bt==null?void 0:Bt.x)??D.left,$=(Bt==null?void 0:Bt.y)??D.top;la({x:S.clientX,y:S.clientY,toolbarX:T,toolbarY:$})},[Bt]);if(b.useEffect(()=>{if(!Bt)return;const S=()=>{let $=Bt.x,V=Bt.y;const Ce=20-(337-(M?ls==="connected"?297:257:44)),Pe=window.innerWidth-20-337;$=Math.max(Ce,Math.min(Pe,$)),V=Math.max(20,Math.min(window.innerHeight-44-20,V)),($!==Bt.x||V!==Bt.y)&&Ss({x:$,y:V})};return S(),window.addEventListener("resize",S),()=>window.removeEventListener("resize",S)},[Bt,M,ls]),b.useEffect(()=>{const S=E=>{const D=E.target,T=D.tagName==="INPUT"||D.tagName==="TEXTAREA"||D.isContentEditable;if(E.key==="Escape"){if(Ae){xt?ht(null):ha();return}if(es){ws(!1);return}if(pn.length>0){co([]);return}W||M&&(Un(),L(!1))}if((E.metaKey||E.ctrlKey)&&E.shiftKey&&(E.key==="f"||E.key==="F")){E.preventDefault(),Un(),M?Er():L(!0);return}if(!(T||E.metaKey||E.ctrlKey)&&((E.key==="p"||E.key==="P")&&(E.preventDefault(),Un(),ul()),(E.key==="l"||E.key==="L")&&(E.preventDefault(),Un(),es&&ws(!1),re&&Oe(!1),W&&dl(),Ae?ha():wt(!0)),(E.key==="h"||E.key==="H")&&B.length>0&&(E.preventDefault(),Un(),z($=>!$)),(E.key==="c"||E.key==="C")&&(B.length>0||Re.length>0||Ee)&&(E.preventDefault(),Un(),_l()),(E.key==="x"||E.key==="X")&&(B.length>0||Re.length>0||Ee)&&(E.preventDefault(),Un(),ks(),Re.length>0&&yt([]),Ee&&Jn(null)),E.key==="s"||E.key==="S")){const $=wo(kt.webhookUrl)||wo(C||"");B.length>0&&$&&Z==="idle"&&(E.preventDefault(),Un(),pa())}};return document.addEventListener("keydown",S),()=>document.removeEventListener("keydown",S)},[M,es,Ae,xt,Re,Ee,W,B.length,kt.webhookUrl,C,Z,pa,ul,_l,ks,pn]),!ze||de)return null;const Jo=B.length>0,Co=B.filter(S=>!Ai.has(S.id)&&S.kind!=="placement"&&S.kind!=="rearrange"),Ar=Co.length>0,jo=B.filter(S=>Ai.has(S.id)),Dr=S=>{const V=S.x/100*window.innerWidth,ye=typeof S.y=="string"?parseFloat(S.y):S.y,ve={};window.innerHeight-ye-22-10<80&&(ve.top="auto",ve.bottom="calc(100% + 10px)");const Pe=V-200/2,We=10;if(Pe<We){const at=We-Pe;ve.left=`calc(50% + ${at}px)`}else if(Pe+200>window.innerWidth-We){const at=Pe+200-(window.innerWidth-We);ve.left=`calc(50% - ${at}px)`}return ve};return eg.createPortal(r.jsxs("div",{ref:ge,style:{display:"contents"},"data-agentation-theme":hs?"dark":"light","data-agentation-accent":kt.annotationColorId,"data-agentation-root":"",children:[r.jsx("div",{className:`${fe.toolbar}${k?` ${k}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:Bt?{left:Bt.x,top:Bt.y,right:"auto",bottom:"auto"}:void 0,children:r.jsxs("div",{className:`${fe.toolbarContainer} ${M?fe.expanded:fe.collapsed} ${wr?fe.entrance:""} ${F?fe.hiding:""} ${!kt.webhooksEnabled&&(wo(kt.webhookUrl)||wo(C||""))?fe.serverConnected:""}`,onClick:M?void 0:S=>{if(Ko.current){Ko.current=!1,S.preventDefault();return}L(!0)},onMouseDown:Rr,role:M?void 0:"button",tabIndex:M?-1:0,title:M?void 0:"Start feedback mode",children:[r.jsxs("div",{className:`${fe.toggleContent} ${M?fe.hidden:fe.visible}`,children:[r.jsx(t2,{size:24}),Ar&&r.jsx("span",{className:`${fe.badge} ${M?fe.fadeOut:""} ${wr?fe.entrance:""}`,children:Co.length})]}),r.jsxs("div",{className:`${fe.controlsContent} ${M?fe.visible:fe.hidden} ${Bt&&Bt.y<100?fe.tooltipBelow:""} ${jt||re?fe.tooltipsHidden:""} ${yr?fe.tooltipsInSession:""}`,onMouseEnter:Qo,onMouseLeave:wu,children:[r.jsxs("div",{className:`${fe.buttonWrapper} ${Bt&&Bt.x<120?fe.buttonWrapperAlignLeft:""}`,children:[r.jsx("button",{className:fe.controlButton,onClick:S=>{S.stopPropagation(),Un(),ul()},"data-active":Y,children:r.jsx(a2,{size:24,isPaused:Y})}),r.jsxs("span",{className:fe.buttonTooltip,children:[Y?"Resume animations":"Pause animations",r.jsx("span",{className:fe.shortcut,children:"P"})]})]}),r.jsxs("div",{className:fe.buttonWrapper,children:[r.jsx("button",{className:`${fe.controlButton} ${hs?"":fe.light}`,onClick:S=>{S.stopPropagation(),Un(),es&&ws(!1),re&&Oe(!1),W&&dl(),Ae?ha():wt(!0)},"data-active":Ae,style:Ae&&Ge?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:r.jsx(m2,{size:21})}),r.jsxs("span",{className:fe.buttonTooltip,children:[Ae?"Exit layout mode":"Layout mode",r.jsx("span",{className:fe.shortcut,children:"L"})]})]}),r.jsxs("div",{className:fe.buttonWrapper,children:[r.jsx("button",{className:fe.controlButton,onClick:S=>{S.stopPropagation(),Un(),z(!G)},disabled:!Jo||Ae,children:r.jsx(i2,{size:24,isOpen:G})}),r.jsxs("span",{className:fe.buttonTooltip,children:[G?"Hide markers":"Show markers",r.jsx("span",{className:fe.shortcut,children:"H"})]})]}),r.jsxs("div",{className:fe.buttonWrapper,children:[r.jsx("button",{className:`${fe.controlButton} ${De?fe.statusShowing:""}`,onClick:S=>{S.stopPropagation(),Un(),_l()},disabled:Ae&&Ge?Re.length===0&&!((Nr=Ee==null?void 0:Ee.sections)!=null&&Nr.length):!Jo&&rn.length===0&&Re.length===0&&!((Or=Ee==null?void 0:Ee.sections)!=null&&Or.length),"data-active":De,children:r.jsx(s2,{size:24,copied:De,tint:Ae&&Ge&&(Re.length>0||(ml=Ee==null?void 0:Ee.sections)!=null&&ml.length)?"#f97316":void 0})}),r.jsxs("span",{className:fe.buttonTooltip,children:[Ae&&Ge?"Copy layout":"Copy feedback",r.jsx("span",{className:fe.shortcut,children:"C"})]})]}),r.jsxs("div",{className:`${fe.buttonWrapper} ${fe.sendButtonWrapper} ${M&&!kt.webhooksEnabled&&(wo(kt.webhookUrl)||wo(C||""))?fe.sendButtonVisible:""}`,children:[r.jsxs("button",{className:`${fe.controlButton} ${Z==="sent"||Z==="failed"?fe.statusShowing:""}`,onClick:S=>{S.stopPropagation(),Un(),pa()},disabled:!Jo||!wo(kt.webhookUrl)&&!wo(C||"")||Z==="sending","data-no-hover":Z==="sent"||Z==="failed",tabIndex:wo(kt.webhookUrl)||wo(C||"")?0:-1,children:[r.jsx(o2,{size:24,state:Z}),Jo&&Z==="idle"&&r.jsx("span",{className:fe.buttonBadge,children:B.length})]}),r.jsxs("span",{className:fe.buttonTooltip,children:["Send Annotations",r.jsx("span",{className:fe.shortcut,children:"S"})]})]}),r.jsxs("div",{className:fe.buttonWrapper,children:[r.jsx("button",{className:fe.controlButton,onClick:S=>{S.stopPropagation(),Un(),ks()},disabled:!Jo&&rn.length===0&&Re.length===0&&!((pl=Ee==null?void 0:Ee.sections)!=null&&pl.length),"data-danger":!0,children:r.jsx(r2,{size:24})}),r.jsxs("span",{className:fe.buttonTooltip,children:["Clear all",r.jsx("span",{className:fe.shortcut,children:"X"})]})]}),r.jsxs("div",{className:fe.buttonWrapper,children:[r.jsx("button",{className:fe.controlButton,onClick:S=>{S.stopPropagation(),Un(),Ae&&ha(),Oe(!re)},children:r.jsx(l2,{size:24})}),p&&ls!=="disconnected"&&r.jsx("span",{className:`${fe.mcpIndicator} ${fe[ls]} ${re?fe.hidden:""}`,title:ls==="connected"?"MCP Connected":"MCP Connecting..."}),r.jsx("span",{className:fe.buttonTooltip,children:"Settings"})]}),r.jsx("div",{className:fe.divider}),r.jsxs("div",{className:`${fe.buttonWrapper} ${Bt&&typeof window<"u"&&Bt.x>window.innerWidth-120?fe.buttonWrapperAlignRight:""}`,children:[r.jsx("button",{className:fe.controlButton,onClick:S=>{S.stopPropagation(),Un(),Er()},children:r.jsx(c2,{size:24})}),r.jsxs("span",{className:fe.buttonTooltip,children:["Exit",r.jsx("span",{className:fe.shortcut,children:"Esc"})]})]})]}),r.jsx(Xv,{visible:Ae&&M,activeType:xt,onSelect:S=>{ht(xt===S?null:S)},isDarkMode:hs,sectionCount:(Ee==null?void 0:Ee.sections.length)??0,onDetectSections:()=>{const S=tw(),E=(Ee==null?void 0:Ee.sections)??[],D=new Set(E.map(ye=>ye.selector)),T=S.filter(ye=>!D.has(ye.selector)),$=[...E,...T],V=[...(Ee==null?void 0:Ee.originalOrder)??[],...T.map(ye=>ye.id)];Jn({sections:$,originalOrder:V,detectedAt:Date.now()})},placementCount:Re.length,onClearPlacements:()=>{ao(S=>S+1),nl(S=>S+1),tt(()=>{Jn({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:Ge,onBlankCanvasChange:S=>{const E={sections:[],originalOrder:[],detectedAt:Date.now()};S?(tl.current={rearrange:Ee,placements:Re},Jn(io.current.rearrange||E),yt(io.current.placements),ht(null)):(io.current={rearrange:Ee,placements:Re},Jn(tl.current.rearrange||E),yt(tl.current.placements)),Lt(S)},wireframePurpose:ln,onWireframePurposeChange:Dn,Tooltip:Ki,onDragStart:(S,E)=>{E.preventDefault();const D=Ne[S];let T=null,$=!1;const V=E.clientX,ye=E.clientY,ve=E.target.closest("[data-feedback-toolbar]"),Ce=(ve==null?void 0:ve.getBoundingClientRect().top)??window.innerHeight,Pe=at=>{const bt=at.clientX-V,Ke=at.clientY-ye;if(!$&&(Math.abs(bt)>4||Math.abs(Ke)>4)&&($=!0,T=document.createElement("div"),T.className=`${ne.dragPreview}${Ge?` ${ne.dragPreviewWireframe}`:""}`,document.body.appendChild(T)),!T)return;const we=Math.max(0,Ce-at.clientY),tn=Math.min(1,we/180),qt=1-Math.pow(1-tn,2),gn=28,Dt=20,hn=Math.min(140,D.width*.18),ot=Math.min(90,D.height*.18),_t=gn+(hn-gn)*qt,an=Dt+(ot-Dt)*qt;T.style.width=`${_t}px`,T.style.height=`${an}px`,T.style.left=`${at.clientX-_t/2}px`,T.style.top=`${at.clientY-an/2}px`,T.style.opacity=`${.5+.5*qt}`,T.textContent=qt>.25?S:""},We=at=>{if(window.removeEventListener("mousemove",Pe),window.removeEventListener("mouseup",We),T&&document.body.removeChild(T),$){const bt=D.width,Ke=D.height,we=window.scrollY,tn=Math.max(0,at.clientX-bt/2),qt=Math.max(0,at.clientY+we-Ke/2),gn={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:S,x:tn,y:qt,width:bt,height:Ke,scrollY:we,timestamp:Date.now()};yt(Dt=>[...Dt,gn]),ht(null),Fo.current=new Set,oa(Dt=>Dt+1)}};window.addEventListener("mousemove",Pe),window.addEventListener("mouseup",We)}}),r.jsx(u4,{settings:kt,onSettingsChange:S=>br(E=>({...E,...S})),isDarkMode:hs,onToggleTheme:Qs,isDevMode:ol,connectionStatus:ls,endpoint:p,isVisible:ke,toolbarNearBottom:!!Bt&&Bt.y<230,settingsPage:it,onSettingsPageChange:ft,onHideToolbar:ku})]})}),(Ae||Et)&&r.jsx("div",{className:`${ne.blankCanvas} ${vn?ne.visible:""} ${Yt?ne.gridActive:""}`,style:{"--canvas-opacity":In},"data-feedback-toolbar":!0}),Ae&&Ge&&vn&&r.jsxs("div",{className:ne.wireframeNotice,"data-feedback-toolbar":!0,children:[r.jsxs("div",{className:ne.wireframeOpacityRow,children:[r.jsx("span",{className:ne.wireframeOpacityLabel,children:"Toggle Opacity"}),r.jsx("input",{type:"range",className:ne.wireframeOpacitySlider,min:0,max:1,step:.01,value:In,onChange:S=>oo(Number(S.target.value))})]}),r.jsxs("div",{className:ne.wireframeNoticeTitleRow,children:[r.jsx("span",{className:ne.wireframeNoticeTitle,children:"Wireframe Mode"}),r.jsx("span",{className:ne.wireframeNoticeDivider}),r.jsx("button",{className:ne.wireframeStartOver,onClick:()=>{ao(S=>S+1),Jn({sections:[],originalOrder:[],detectedAt:Date.now()}),io.current={rearrange:null,placements:[]},Dn(""),Vc(et)},children:"Start Over"})]}),"Drag components onto the canvas.",r.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(Ae||Et)&&r.jsx(Pv,{placements:Re,onChange:yt,activeComponent:Et?null:xt,onActiveComponentChange:ht,isDarkMode:hs,exiting:Et,onInteractionChange:jn,passthrough:!xt,extraSnapRects:Ee==null?void 0:Ee.sections.map(S=>S.currentRect),deselectSignal:Ei,clearSignal:Mi,wireframe:Ge,onSelectionChange:(S,E)=>{Fo.current=S,E||(Ns.current=new Set,Go(D=>D+1))},onDragMove:(S,E)=>{const D=Ns.current;if(!(!D.size||!Ee)){if(!Xn.current){Xn.current=new Map;for(const T of Ee.sections)D.has(T.id)&&Xn.current.set(T.id,{x:T.currentRect.x,y:T.currentRect.y})}for(const T of Ee.sections){if(!D.has(T.id)||!Xn.current.get(T.id))continue;const V=document.querySelector(`[data-rearrange-section="${T.id}"]`);V&&(V.style.transform=`translate(${S}px, ${E}px)`)}}},onDragEnd:(S,E,D)=>{const T=Ns.current,$=Xn.current;if(Xn.current=null,!(!T.size||!Ee||!$)){for(const V of T){const ye=document.querySelector(`[data-rearrange-section="${V}"]`);ye&&(ye.style.transform="")}D&&Jn(V=>V&&{...V,sections:V.sections.map(ye=>{const ve=$.get(ye.id);return ve?{...ye,currentRect:{...ye.currentRect,x:Math.max(0,ve.x+S),y:Math.max(0,ve.y+E)}}:ye})})}}}),(Ae||Et)&&Ee&&r.jsx(ow,{rearrangeState:Ee,onChange:Jn,isDarkMode:hs,exiting:Et,blankCanvas:Ge,extraSnapRects:Re.map(S=>({x:S.x,y:S.y,width:S.width,height:S.height})),clearSignal:Nn,deselectSignal:Xo,onSelectionChange:(S,E)=>{Ns.current=S,E||(Fo.current=new Set,oa(D=>D+1))},onDragMove:(S,E)=>{const D=Fo.current;if(D.size){if(!Xn.current){Xn.current=new Map;for(const T of Re)D.has(T.id)&&Xn.current.set(T.id,{x:T.x,y:T.y})}for(const T of D){const $=document.querySelector(`[data-design-placement="${T}"]`);$&&($.style.transform=`translate(${S}px, ${E}px)`)}}},onDragEnd:(S,E,D)=>{const T=Fo.current,$=Xn.current;if(Xn.current=null,!(!T.size||!$)){for(const V of T){const ye=document.querySelector(`[data-design-placement="${V}"]`);ye&&(ye.style.transform="")}D&&yt(V=>V.map(ye=>{const ve=$.get(ye.id);return ve?{...ye,x:Math.max(0,ve.x+S),y:Math.max(0,ve.y+E)}:ye}))}}}),r.jsx("canvas",{ref:qo,className:`${fe.drawCanvas} ${es?fe.active:""}`,style:{opacity:rl?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),r.jsxs("div",{className:fe.markersLayer,"data-feedback-toolbar":!0,children:[xe&&Co.filter(S=>!S.isFixed).map((S,E,D)=>r.jsx(E0,{annotation:S,globalIndex:Co.findIndex(T=>T.id===S.id),layerIndex:E,layerSize:D.length,isExiting:K,isClearing:rt,isAnimated:al.has(S.id),isHovered:!K&&en===S.id,isDeleting:At===S.id,isEditingAny:!!Q,renumberFrom:bn,markerClickBehavior:kt.markerClickBehavior,tooltipStyle:Dr(S),onHoverEnter:T=>!K&&T.id!==da.current&&ma(T),onHoverLeave:()=>ma(null),onClick:T=>kt.markerClickBehavior==="delete"?fl(T.id):_a(T),onContextMenu:_a},S.id)),xe&&!K&&jo.filter(S=>!S.isFixed).map(S=>r.jsx(M0,{annotation:S},S.id))]}),r.jsxs("div",{className:fe.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[xe&&Co.filter(S=>S.isFixed).map((S,E,D)=>r.jsx(E0,{annotation:S,globalIndex:Co.findIndex(T=>T.id===S.id),layerIndex:E,layerSize:D.length,isExiting:K,isClearing:rt,isAnimated:al.has(S.id),isHovered:!K&&en===S.id,isDeleting:At===S.id,isEditingAny:!!Q,renumberFrom:bn,markerClickBehavior:kt.markerClickBehavior,tooltipStyle:Dr(S),onHoverEnter:T=>!K&&T.id!==da.current&&ma(T),onHoverLeave:()=>ma(null),onClick:T=>kt.markerClickBehavior==="delete"?fl(T.id):_a(T),onContextMenu:_a},S.id)),xe&&!K&&jo.filter(S=>S.isFixed).map(S=>r.jsx(M0,{annotation:S,fixed:!0},S.id))]}),M&&r.jsxs("div",{className:fe.overlay,"data-feedback-toolbar":!0,style:W||Q?{zIndex:99999}:void 0,children:[(_e==null?void 0:_e.rect)&&!W&&!St&&!Zs&&r.jsx("div",{className:`${fe.hoverHighlight} ${fe.enter}`,style:{left:_e.rect.left,top:_e.rect.top,width:_e.rect.width,height:_e.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),pn.filter(S=>document.contains(S.element)).map((S,E)=>{const D=S.element.getBoundingClientRect(),T=pn.length>1;return r.jsx("div",{className:T?fe.multiSelectOutline:fe.singleSelectOutline,style:{position:"fixed",left:D.left,top:D.top,width:D.width,height:D.height,...T?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},E)}),en&&!W&&(()=>{var $;const S=B.find(V=>V.id===en);if(!(S!=null&&S.boundingBox))return null;if(($=S.elementBoundingBoxes)!=null&&$.length)return Je.length>0?Je.filter(V=>document.contains(V)).map((V,ye)=>{const ve=V.getBoundingClientRect();return r.jsx("div",{className:`${fe.multiSelectOutline} ${fe.enter}`,style:{left:ve.left,top:ve.top,width:ve.width,height:ve.height}},`hover-outline-live-${ye}`)}):S.elementBoundingBoxes.map((V,ye)=>r.jsx("div",{className:`${fe.multiSelectOutline} ${fe.enter}`,style:{left:V.x,top:V.y-Te,width:V.width,height:V.height}},`hover-outline-${ye}`));const E=$e&&document.contains($e)?$e.getBoundingClientRect():null,D=E?{x:E.left,y:E.top,width:E.width,height:E.height}:{x:S.boundingBox.x,y:S.isFixed?S.boundingBox.y:S.boundingBox.y-Te,width:S.boundingBox.width,height:S.boundingBox.height},T=S.isMultiSelect;return r.jsx("div",{className:`${T?fe.multiSelectOutline:fe.singleSelectOutline} ${fe.enter}`,style:{left:D.x,top:D.y,width:D.width,height:D.height,...T?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),_e&&!W&&!St&&!Zs&&r.jsxs("div",{className:`${fe.hoverTooltip} ${fe.enter}`,style:{left:Math.max(8,Math.min(N.x,window.innerWidth-100)),top:Math.max(N.y-(_e.reactComponents?48:32),8)},children:[_e.reactComponents&&r.jsx("div",{className:fe.hoverReactPath,children:_e.reactComponents}),r.jsx("div",{className:fe.hoverElementName,children:_e.elementName})]}),W&&r.jsxs(r.Fragment,{children:[(ei=W.multiSelectElements)!=null&&ei.length?W.multiSelectElements.filter(S=>document.contains(S)).map((S,E)=>{const D=S.getBoundingClientRect();return r.jsx("div",{className:`${fe.multiSelectOutline} ${On?fe.exit:fe.enter}`,style:{left:D.left,top:D.top,width:D.width,height:D.height}},`pending-multi-${E}`)}):W.targetElement&&document.contains(W.targetElement)?(()=>{const S=W.targetElement.getBoundingClientRect();return r.jsx("div",{className:`${fe.singleSelectOutline} ${On?fe.exit:fe.enter}`,style:{left:S.left,top:S.top,width:S.width,height:S.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():W.boundingBox&&r.jsx("div",{className:`${W.isMultiSelect?fe.multiSelectOutline:fe.singleSelectOutline} ${On?fe.exit:fe.enter}`,style:{left:W.boundingBox.x,top:W.boundingBox.y-Te,width:W.boundingBox.width,height:W.boundingBox.height,...W.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{const S=W.x,E=W.isFixed?W.y:W.y-Te;return r.jsxs(r.Fragment,{children:[r.jsx(e4,{x:S,y:E,isMultiSelect:W.isMultiSelect,isExiting:On}),r.jsx(hu,{ref:kr,element:W.element,selectedText:W.selectedText,computedStyles:W.computedStylesObj,placeholder:W.element==="Area selection"?"What should change in this area?":W.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:Cu,onCancel:dl,isExiting:On,lightMode:!hs,accentColor:W.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,S/100*window.innerWidth)),...E>window.innerHeight-290?{bottom:window.innerHeight-E+20}:{top:E+20}}})]})})()]}),Q&&r.jsxs(r.Fragment,{children:[(ti=Q.elementBoundingBoxes)!=null&&ti.length?nt.length>0?nt.filter(S=>document.contains(S)).map((S,E)=>{const D=S.getBoundingClientRect();return r.jsx("div",{className:`${fe.multiSelectOutline} ${fe.enter}`,style:{left:D.left,top:D.top,width:D.width,height:D.height}},`edit-multi-live-${E}`)}):Q.elementBoundingBoxes.map((S,E)=>r.jsx("div",{className:`${fe.multiSelectOutline} ${fe.enter}`,style:{left:S.x,top:S.y-Te,width:S.width,height:S.height}},`edit-multi-${E}`)):(()=>{const S=Fe&&document.contains(Fe)?Fe.getBoundingClientRect():null,E=S?{x:S.left,y:S.top,width:S.width,height:S.height}:Q.boundingBox?{x:Q.boundingBox.x,y:Q.isFixed?Q.boundingBox.y:Q.boundingBox.y-Te,width:Q.boundingBox.width,height:Q.boundingBox.height}:null;return E?r.jsx("div",{className:`${Q.isMultiSelect?fe.multiSelectOutline:fe.singleSelectOutline} ${fe.enter}`,style:{left:E.x,top:E.y,width:E.width,height:E.height,...Q.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),r.jsx(hu,{ref:Cr,element:Q.element,selectedText:Q.selectedText,computedStyles:Kv(Q.computedStyles),placeholder:"Edit your feedback...",initialValue:Q.comment,submitLabel:"Save",onSubmit:ju,onCancel:hl,onDelete:()=>fl(Q.id),isExiting:ra,lightMode:!hs,accentColor:Q.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{const S=Q.isFixed?Q.y:Q.y-Te;return{left:Math.max(160,Math.min(window.innerWidth-160,Q.x/100*window.innerWidth)),...S>window.innerHeight-290?{bottom:window.innerHeight-S+20}:{top:S+20}}})()})]}),Zs&&r.jsxs(r.Fragment,{children:[r.jsx("div",{ref:mo,className:fe.dragSelection}),r.jsx("div",{ref:Zo,className:fe.highlightsContainer})]})]})]}),document.body)}const h4=()=>{const o=ko();return o.pathname==="/"||o.pathname==="/controller"?null:r.jsx("nav",{className:"bg-slate-900 border-b border-slate-800 text-slate-100 p-4 flex items-center justify-between shadow-lg",children:r.jsxs("div",{className:"flex items-center gap-6",children:[r.jsx(lr,{to:"/",className:"font-extrabold text-xl tracking-tight text-cyan-400 hover:text-cyan-300",children:"⚽ Soccer Web Game"}),r.jsx(lr,{to:"/",className:"text-sm font-semibold hover:text-cyan-400 transition",children:"Arena Game"}),r.jsx(lr,{to:"/controller",className:"text-sm font-semibold hover:text-cyan-400 transition",children:"📱 Mobile Remote"})]})})};function _4(){return r.jsx(vb,{children:r.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 flex flex-col select-none",children:[r.jsx(h4,{}),r.jsxs(Kx,{children:[r.jsx(Yf,{path:"/",element:r.jsx(q5,{})}),r.jsx(Yf,{path:"/controller",element:r.jsx(Q5,{})})]}),r.jsx(f4,{})]})})}K1.createRoot(document.getElementById("root")).render(r.jsx(Rn.StrictMode,{children:r.jsx(_4,{})}));
