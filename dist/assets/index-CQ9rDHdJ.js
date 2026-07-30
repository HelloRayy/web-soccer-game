var U1=Object.defineProperty;var H1=o=>{throw TypeError(o)};var Y1=(o,n,i)=>n in o?U1(o,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[n]=i;var Be=(o,n,i)=>Y1(o,typeof n!="symbol"?n+"":n,i);var Vl=(o,n,i)=>n.has(o)?H1("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(o):n.set(o,i);function X1(o,n){for(var i=0;i<n.length;i++){const l=n[i];if(typeof l!="string"&&!Array.isArray(l)){for(const c in l)if(c!=="default"&&!(c in o)){const u=Object.getOwnPropertyDescriptor(l,c);u&&Object.defineProperty(o,c,u.get?u:{enumerable:!0,get:()=>l[c]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const _ of u.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&l(_)}).observe(document,{childList:!0,subtree:!0});function i(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function l(c){if(c.ep)return;c.ep=!0;const u=i(c);fetch(c.href,u)}})();function hh(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var yf={exports:{}},Kl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zm;function F1(){if(zm)return Kl;zm=1;var o=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function i(l,c,u){var _=null;if(u!==void 0&&(_=""+u),c.key!==void 0&&(_=""+c.key),"key"in c){u={};for(var g in c)g!=="key"&&(u[g]=c[g])}else u=c;return c=u.ref,{$$typeof:o,type:l,key:_,ref:c!==void 0?c:null,props:u}}return Kl.Fragment=n,Kl.jsx=i,Kl.jsxs=i,Kl}var Bm;function G1(){return Bm||(Bm=1,yf.exports=F1()),yf.exports}var r=G1(),xf={exports:{}},pt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $m;function W1(){if($m)return pt;$m=1;var o=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),_=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),v=Symbol.iterator;function C(D){return D===null||typeof D!="object"?null:(D=v&&D[v]||D["@@iterator"],typeof D=="function"?D:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,O={};function B(D,Z,pe){this.props=D,this.context=Z,this.refs=O,this.updater=pe||k}B.prototype.isReactComponent={},B.prototype.setState=function(D,Z){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,Z,"setState")},B.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function J(){}J.prototype=B.prototype;function F(D,Z,pe){this.props=D,this.context=Z,this.refs=O,this.updater=pe||k}var z=F.prototype=new J;z.constructor=F,E(z,B.prototype),z.isPureReactComponent=!0;var de=Array.isArray;function ye(){}var G={H:null,A:null,T:null,S:null},fe=Object.prototype.hasOwnProperty;function xe(D,Z,pe){var Me=pe.ref;return{$$typeof:o,type:D,key:Z,ref:Me!==void 0?Me:null,props:pe}}function he(D,Z){return xe(D.type,Z,D.props)}function re(D){return typeof D=="object"&&D!==null&&D.$$typeof===o}function Q(D){var Z={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(pe){return Z[pe]})}var Oe=/\/+/g;function oe(D,Z){return typeof D=="object"&&D!==null&&D.key!=null?Q(""+D.key):Z.toString(36)}function ke(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(ye,ye):(D.status="pending",D.then(function(Z){D.status==="pending"&&(D.status="fulfilled",D.value=Z)},function(Z){D.status==="pending"&&(D.status="rejected",D.reason=Z)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function N(D,Z,pe,Me,qe){var rt=typeof D;(rt==="undefined"||rt==="boolean")&&(D=null);var dt=!1;if(D===null)dt=!0;else switch(rt){case"bigint":case"string":case"number":dt=!0;break;case"object":switch(D.$$typeof){case o:case n:dt=!0;break;case p:return dt=D._init,N(dt(D._payload),Z,pe,Me,qe)}}if(dt)return qe=qe(D),dt=Me===""?"."+oe(D,0):Me,de(qe)?(pe="",dt!=null&&(pe=dt.replace(Oe,"$&/")+"/"),N(qe,Z,pe,"",function(ve){return ve})):qe!=null&&(re(qe)&&(qe=he(qe,pe+(qe.key==null||D&&D.key===qe.key?"":(""+qe.key).replace(Oe,"$&/")+"/")+dt)),Z.push(qe)),1;dt=0;var en=Me===""?".":Me+":";if(de(D))for(var Qe=0;Qe<D.length;Qe++)Me=D[Qe],rt=en+oe(Me,Qe),dt+=N(Me,Z,pe,rt,qe);else if(Qe=C(D),typeof Qe=="function")for(D=Qe.call(D),Qe=0;!(Me=D.next()).done;)Me=Me.value,rt=en+oe(Me,Qe++),dt+=N(Me,Z,pe,rt,qe);else if(rt==="object"){if(typeof D.then=="function")return N(ke(D),Z,pe,Me,qe);throw Z=String(D),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return dt}function ue(D,Z,pe){if(D==null)return D;var Me=[],qe=0;return N(D,Me,"","",function(rt){return Z.call(pe,rt,qe++)}),Me}function W(D){if(D._status===-1){var Z=D._result;Z=Z(),Z.then(function(pe){(D._status===0||D._status===-1)&&(D._status=1,D._result=pe)},function(pe){(D._status===0||D._status===-1)&&(D._status=2,D._result=pe)}),D._status===-1&&(D._status=0,D._result=Z)}if(D._status===1)return D._result.default;throw D._result}var be=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)},Ne={map:ue,forEach:function(D,Z,pe){ue(D,function(){Z.apply(this,arguments)},pe)},count:function(D){var Z=0;return ue(D,function(){Z++}),Z},toArray:function(D){return ue(D,function(Z){return Z})||[]},only:function(D){if(!re(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return pt.Activity=y,pt.Children=Ne,pt.Component=B,pt.Fragment=i,pt.Profiler=c,pt.PureComponent=F,pt.StrictMode=l,pt.Suspense=h,pt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,pt.__COMPILER_RUNTIME={__proto__:null,c:function(D){return G.H.useMemoCache(D)}},pt.cache=function(D){return function(){return D.apply(null,arguments)}},pt.cacheSignal=function(){return null},pt.cloneElement=function(D,Z,pe){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var Me=E({},D.props),qe=D.key;if(Z!=null)for(rt in Z.key!==void 0&&(qe=""+Z.key),Z)!fe.call(Z,rt)||rt==="key"||rt==="__self"||rt==="__source"||rt==="ref"&&Z.ref===void 0||(Me[rt]=Z[rt]);var rt=arguments.length-2;if(rt===1)Me.children=pe;else if(1<rt){for(var dt=Array(rt),en=0;en<rt;en++)dt[en]=arguments[en+2];Me.children=dt}return xe(D.type,qe,Me)},pt.createContext=function(D){return D={$$typeof:_,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},pt.createElement=function(D,Z,pe){var Me,qe={},rt=null;if(Z!=null)for(Me in Z.key!==void 0&&(rt=""+Z.key),Z)fe.call(Z,Me)&&Me!=="key"&&Me!=="__self"&&Me!=="__source"&&(qe[Me]=Z[Me]);var dt=arguments.length-2;if(dt===1)qe.children=pe;else if(1<dt){for(var en=Array(dt),Qe=0;Qe<dt;Qe++)en[Qe]=arguments[Qe+2];qe.children=en}if(D&&D.defaultProps)for(Me in dt=D.defaultProps,dt)qe[Me]===void 0&&(qe[Me]=dt[Me]);return xe(D,rt,qe)},pt.createRef=function(){return{current:null}},pt.forwardRef=function(D){return{$$typeof:g,render:D}},pt.isValidElement=re,pt.lazy=function(D){return{$$typeof:p,_payload:{_status:-1,_result:D},_init:W}},pt.memo=function(D,Z){return{$$typeof:m,type:D,compare:Z===void 0?null:Z}},pt.startTransition=function(D){var Z=G.T,pe={};G.T=pe;try{var Me=D(),qe=G.S;qe!==null&&qe(pe,Me),typeof Me=="object"&&Me!==null&&typeof Me.then=="function"&&Me.then(ye,be)}catch(rt){be(rt)}finally{Z!==null&&pe.types!==null&&(Z.types=pe.types),G.T=Z}},pt.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},pt.use=function(D){return G.H.use(D)},pt.useActionState=function(D,Z,pe){return G.H.useActionState(D,Z,pe)},pt.useCallback=function(D,Z){return G.H.useCallback(D,Z)},pt.useContext=function(D){return G.H.useContext(D)},pt.useDebugValue=function(){},pt.useDeferredValue=function(D,Z){return G.H.useDeferredValue(D,Z)},pt.useEffect=function(D,Z){return G.H.useEffect(D,Z)},pt.useEffectEvent=function(D){return G.H.useEffectEvent(D)},pt.useId=function(){return G.H.useId()},pt.useImperativeHandle=function(D,Z,pe){return G.H.useImperativeHandle(D,Z,pe)},pt.useInsertionEffect=function(D,Z){return G.H.useInsertionEffect(D,Z)},pt.useLayoutEffect=function(D,Z){return G.H.useLayoutEffect(D,Z)},pt.useMemo=function(D,Z){return G.H.useMemo(D,Z)},pt.useOptimistic=function(D,Z){return G.H.useOptimistic(D,Z)},pt.useReducer=function(D,Z,pe){return G.H.useReducer(D,Z,pe)},pt.useRef=function(D){return G.H.useRef(D)},pt.useState=function(D){return G.H.useState(D)},pt.useSyncExternalStore=function(D,Z,pe){return G.H.useSyncExternalStore(D,Z,pe)},pt.useTransition=function(){return G.H.useTransition()},pt.version="19.2.8",pt}var Pm;function _h(){return Pm||(Pm=1,xf.exports=W1()),xf.exports}var b=_h();const Rn=hh(b);var bf={exports:{}},Zl={},vf={exports:{}},wf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Im;function q1(){return Im||(Im=1,(function(o){function n(N,ue){var W=N.length;N.push(ue);e:for(;0<W;){var be=W-1>>>1,Ne=N[be];if(0<c(Ne,ue))N[be]=ue,N[W]=Ne,W=be;else break e}}function i(N){return N.length===0?null:N[0]}function l(N){if(N.length===0)return null;var ue=N[0],W=N.pop();if(W!==ue){N[0]=W;e:for(var be=0,Ne=N.length,D=Ne>>>1;be<D;){var Z=2*(be+1)-1,pe=N[Z],Me=Z+1,qe=N[Me];if(0>c(pe,W))Me<Ne&&0>c(qe,pe)?(N[be]=qe,N[Me]=W,be=Me):(N[be]=pe,N[Z]=W,be=Z);else if(Me<Ne&&0>c(qe,W))N[be]=qe,N[Me]=W,be=Me;else break e}}return ue}function c(N,ue){var W=N.sortIndex-ue.sortIndex;return W!==0?W:N.id-ue.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var _=Date,g=_.now();o.unstable_now=function(){return _.now()-g}}var h=[],m=[],p=1,y=null,v=3,C=!1,k=!1,E=!1,O=!1,B=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function z(N){for(var ue=i(m);ue!==null;){if(ue.callback===null)l(m);else if(ue.startTime<=N)l(m),ue.sortIndex=ue.expirationTime,n(h,ue);else break;ue=i(m)}}function de(N){if(E=!1,z(N),!k)if(i(h)!==null)k=!0,ye||(ye=!0,Q());else{var ue=i(m);ue!==null&&ke(de,ue.startTime-N)}}var ye=!1,G=-1,fe=5,xe=-1;function he(){return O?!0:!(o.unstable_now()-xe<fe)}function re(){if(O=!1,ye){var N=o.unstable_now();xe=N;var ue=!0;try{e:{k=!1,E&&(E=!1,J(G),G=-1),C=!0;var W=v;try{t:{for(z(N),y=i(h);y!==null&&!(y.expirationTime>N&&he());){var be=y.callback;if(typeof be=="function"){y.callback=null,v=y.priorityLevel;var Ne=be(y.expirationTime<=N);if(N=o.unstable_now(),typeof Ne=="function"){y.callback=Ne,z(N),ue=!0;break t}y===i(h)&&l(h),z(N)}else l(h);y=i(h)}if(y!==null)ue=!0;else{var D=i(m);D!==null&&ke(de,D.startTime-N),ue=!1}}break e}finally{y=null,v=W,C=!1}ue=void 0}}finally{ue?Q():ye=!1}}}var Q;if(typeof F=="function")Q=function(){F(re)};else if(typeof MessageChannel<"u"){var Oe=new MessageChannel,oe=Oe.port2;Oe.port1.onmessage=re,Q=function(){oe.postMessage(null)}}else Q=function(){B(re,0)};function ke(N,ue){G=B(function(){N(o.unstable_now())},ue)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(N){N.callback=null},o.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):fe=0<N?Math.floor(1e3/N):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(N){switch(v){case 1:case 2:case 3:var ue=3;break;default:ue=v}var W=v;v=ue;try{return N()}finally{v=W}},o.unstable_requestPaint=function(){O=!0},o.unstable_runWithPriority=function(N,ue){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var W=v;v=N;try{return ue()}finally{v=W}},o.unstable_scheduleCallback=function(N,ue,W){var be=o.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?be+W:be):W=be,N){case 1:var Ne=-1;break;case 2:Ne=250;break;case 5:Ne=1073741823;break;case 4:Ne=1e4;break;default:Ne=5e3}return Ne=W+Ne,N={id:p++,callback:ue,priorityLevel:N,startTime:W,expirationTime:Ne,sortIndex:-1},W>be?(N.sortIndex=W,n(m,N),i(h)===null&&N===i(m)&&(E?(J(G),G=-1):E=!0,ke(de,W-be))):(N.sortIndex=Ne,n(h,N),k||C||(k=!0,ye||(ye=!0,Q()))),N},o.unstable_shouldYield=he,o.unstable_wrapCallback=function(N){var ue=v;return function(){var W=v;v=ue;try{return N.apply(this,arguments)}finally{v=W}}}})(wf)),wf}var Um;function Q1(){return Um||(Um=1,vf.exports=q1()),vf.exports}var Sf={exports:{}},ss={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hm;function V1(){if(Hm)return ss;Hm=1;var o=_h();function n(h){var m="https://react.dev/errors/"+h;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var p=2;p<arguments.length;p++)m+="&args[]="+encodeURIComponent(arguments[p])}return"Minified React error #"+h+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var l={d:{f:i,r:function(){throw Error(n(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function u(h,m,p){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:y==null?null:""+y,children:h,containerInfo:m,implementation:p}}var _=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(h,m){if(h==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return ss.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,ss.createPortal=function(h,m){var p=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(n(299));return u(h,m,null,p)},ss.flushSync=function(h){var m=_.T,p=l.p;try{if(_.T=null,l.p=2,h)return h()}finally{_.T=m,l.p=p,l.d.f()}},ss.preconnect=function(h,m){typeof h=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,l.d.C(h,m))},ss.prefetchDNS=function(h){typeof h=="string"&&l.d.D(h)},ss.preinit=function(h,m){if(typeof h=="string"&&m&&typeof m.as=="string"){var p=m.as,y=g(p,m.crossOrigin),v=typeof m.integrity=="string"?m.integrity:void 0,C=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;p==="style"?l.d.S(h,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:y,integrity:v,fetchPriority:C}):p==="script"&&l.d.X(h,{crossOrigin:y,integrity:v,fetchPriority:C,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},ss.preinitModule=function(h,m){if(typeof h=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var p=g(m.as,m.crossOrigin);l.d.M(h,{crossOrigin:p,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&l.d.M(h)},ss.preload=function(h,m){if(typeof h=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var p=m.as,y=g(p,m.crossOrigin);l.d.L(h,p,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},ss.preloadModule=function(h,m){if(typeof h=="string")if(m){var p=g(m.as,m.crossOrigin);l.d.m(h,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:p,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else l.d.m(h)},ss.requestFormReset=function(h){l.d.r(h)},ss.unstable_batchedUpdates=function(h,m){return h(m)},ss.useFormState=function(h,m,p){return _.H.useFormState(h,m,p)},ss.useFormStatus=function(){return _.H.useHostTransitionStatus()},ss.version="19.2.8",ss}var Ym;function Lp(){if(Ym)return Sf.exports;Ym=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(n){console.error(n)}}return o(),Sf.exports=V1(),Sf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xm;function K1(){if(Xm)return Zl;Xm=1;var o=Q1(),n=_h(),i=Lp();function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)t+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var t=e,s=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(s=t.return),e=t.return;while(e)}return t.tag===3?s:null}function _(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(u(e)!==e)throw Error(l(188))}function m(e){var t=e.alternate;if(!t){if(t=u(e),t===null)throw Error(l(188));return t!==e?null:e}for(var s=e,a=t;;){var d=s.return;if(d===null)break;var f=d.alternate;if(f===null){if(a=d.return,a!==null){s=a;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===s)return h(d),e;if(f===a)return h(d),t;f=f.sibling}throw Error(l(188))}if(s.return!==a.return)s=d,a=f;else{for(var x=!1,w=d.child;w;){if(w===s){x=!0,s=d,a=f;break}if(w===a){x=!0,a=d,s=f;break}w=w.sibling}if(!x){for(w=f.child;w;){if(w===s){x=!0,s=f,a=d;break}if(w===a){x=!0,a=f,s=d;break}w=w.sibling}if(!x)throw Error(l(189))}}if(s.alternate!==a)throw Error(l(190))}if(s.tag!==3)throw Error(l(188));return s.stateNode.current===s?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var y=Object.assign,v=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),J=Symbol.for("react.consumer"),F=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),de=Symbol.for("react.suspense"),ye=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),xe=Symbol.for("react.activity"),he=Symbol.for("react.memo_cache_sentinel"),re=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=re&&e[re]||e["@@iterator"],typeof e=="function"?e:null)}var Oe=Symbol.for("react.client.reference");function oe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Oe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case B:return"Profiler";case O:return"StrictMode";case de:return"Suspense";case ye:return"SuspenseList";case xe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case F:return e.displayName||"Context";case J:return(e._context.displayName||"Context")+".Consumer";case z:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case G:return t=e.displayName||null,t!==null?t:oe(e.type)||"Memo";case fe:t=e._payload,e=e._init;try{return oe(e(t))}catch{}}return null}var ke=Array.isArray,N=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},be=[],Ne=-1;function D(e){return{current:e}}function Z(e){0>Ne||(e.current=be[Ne],be[Ne]=null,Ne--)}function pe(e,t){Ne++,be[Ne]=e.current,e.current=t}var Me=D(null),qe=D(null),rt=D(null),dt=D(null);function en(e,t){switch(pe(rt,t),pe(qe,e),pe(Me,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?im(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=im(t),e=am(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Z(Me),pe(Me,e)}function Qe(){Z(Me),Z(qe),Z(rt)}function ve(e){e.memoizedState!==null&&pe(dt,e);var t=Me.current,s=am(t,e.type);t!==s&&(pe(qe,e),pe(Me,s))}function ft(e){qe.current===e&&(Z(Me),Z(qe)),dt.current===e&&(Z(dt),Gl._currentValue=W)}var Ke,ct;function Dt(e){if(Ke===void 0)try{throw Error()}catch(s){var t=s.stack.trim().match(/\n( *(at )?)/);Ke=t&&t[1]||"",ct=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ke+e+ct}var dn=!1;function bn(e,t){if(!e||dn)return"";dn=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var ae=function(){throw Error()};if(Object.defineProperty(ae.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ae,[])}catch(q){var X=q}Reflect.construct(e,[],ae)}else{try{ae.call()}catch(q){X=q}e.call(ae.prototype)}}else{try{throw Error()}catch(q){X=q}(ae=e())&&typeof ae.catch=="function"&&ae.catch(function(){})}}catch(q){if(q&&X&&typeof q.stack=="string")return[q.stack,X.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=a.DetermineComponentFrameRoot(),x=f[0],w=f[1];if(x&&w){var R=x.split(`
`),H=w.split(`
`);for(d=a=0;a<R.length&&!R[a].includes("DetermineComponentFrameRoot");)a++;for(;d<H.length&&!H[d].includes("DetermineComponentFrameRoot");)d++;if(a===R.length||d===H.length)for(a=R.length-1,d=H.length-1;1<=a&&0<=d&&R[a]!==H[d];)d--;for(;1<=a&&0<=d;a--,d--)if(R[a]!==H[d]){if(a!==1||d!==1)do if(a--,d--,0>d||R[a]!==H[d]){var ee=`
`+R[a].replace(" at new "," at ");return e.displayName&&ee.includes("<anonymous>")&&(ee=ee.replace("<anonymous>",e.displayName)),ee}while(1<=a&&0<=d);break}}}finally{dn=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?Dt(s):""}function mn(e,t){switch(e.tag){case 26:case 27:case 5:return Dt(e.type);case 16:return Dt("Lazy");case 13:return e.child!==t&&t!==null?Dt("Suspense Fallback"):Dt("Suspense");case 19:return Dt("SuspenseList");case 0:case 15:return bn(e.type,!1);case 11:return bn(e.type.render,!1);case 1:return bn(e.type,!0);case 31:return Dt("Activity");default:return""}}function V(e){try{var t="",s=null;do t+=mn(e,s),s=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Te=Object.prototype.hasOwnProperty,Ge=o.unstable_scheduleCallback,Ve=o.unstable_cancelCallback,nt=o.unstable_shouldYield,Ye=o.unstable_requestPaint,Re=o.unstable_now,ut=o.unstable_getCurrentPriorityLevel,St=o.unstable_ImmediatePriority,Ht=o.unstable_UserBlockingPriority,Pe=o.unstable_NormalPriority,I=o.unstable_LowPriority,Y=o.unstable_IdlePriority,ie=o.log,ce=o.unstable_setDisableYieldValue,ze=null,Ce=null;function me(e){if(typeof ie=="function"&&ce(e),Ce&&typeof Ce.setStrictMode=="function")try{Ce.setStrictMode(ze,e)}catch{}}var it=Math.clz32?Math.clz32:st,ht=Math.log,jt=Math.LN2;function st(e){return e>>>=0,e===0?32:31-(ht(e)/jt|0)|0}var Ae=256,wt=262144,Mt=4194304;function Wt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function De(e,t,s){var a=e.pendingLanes;if(a===0)return 0;var d=0,f=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var w=a&134217727;return w!==0?(a=w&~f,a!==0?d=Wt(a):(x&=w,x!==0?d=Wt(x):s||(s=w&~e,s!==0&&(d=Wt(s))))):(w=a&~f,w!==0?d=Wt(w):x!==0?d=Wt(x):s||(s=a&~e,s!==0&&(d=Wt(s)))),d===0?0:t!==0&&t!==d&&(t&f)===0&&(f=d&-d,s=t&-t,f>=s||f===32&&(s&4194048)!==0)?t:d}function yt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function xt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _t(){var e=Mt;return Mt<<=1,(Mt&62914560)===0&&(Mt=4194304),e}function fn(e){for(var t=[],s=0;31>s;s++)t.push(e);return t}function Fe(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ot(e,t,s,a,d,f){var x=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var w=e.entanglements,R=e.expirationTimes,H=e.hiddenUpdates;for(s=x&~s;0<s;){var ee=31-it(s),ae=1<<ee;w[ee]=0,R[ee]=-1;var X=H[ee];if(X!==null)for(H[ee]=null,ee=0;ee<X.length;ee++){var q=X[ee];q!==null&&(q.lane&=-536870913)}s&=~ae}a!==0&&vn(e,a,0),f!==0&&d===0&&e.tag!==0&&(e.suspendedLanes|=f&~(x&~t))}function vn(e,t,s){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-it(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|s&261930}function Yn(e,t){var s=e.entangledLanes|=t;for(e=e.entanglements;s;){var a=31-it(s),d=1<<a;d&t|e[a]&t&&(e[a]|=t),s&=~d}}function In(e,t){var s=t&-t;return s=(s&42)!==0?1:oo(s),(s&(e.suspendedLanes|t))!==0?0:s}function oo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function vs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Zn(){var e=ue.p;return e!==0?e:(e=window.event,e===void 0?32:Tm(e.type))}function ln(e,t){var s=ue.p;try{return ue.p=e,t()}finally{ue.p=s}}var An=Math.random().toString(36).slice(2),Yt="__reactFiber$"+An,jn="__reactProps$"+An,Ee="__reactContainer$"+An,Jn="__reactEvents$"+An,tl="__reactListeners$"+An,nl="__reactHandles$"+An,io="__reactResources$"+An,Ei="__reactMarker$"+An;function ia(e){delete e[Yt],delete e[jn],delete e[Jn],delete e[tl],delete e[nl]}function Fo(e){var t=e[Yt];if(t)return t;for(var s=e.parentNode;s;){if(t=s[Ee]||s[Yt]){if(s=t.alternate,t.child!==null||s!==null&&s.child!==null)for(e=hm(e);e!==null;){if(s=e[Yt])return s;e=hm(e)}return t}e=s,s=e.parentNode}return null}function Go(e){if(e=e[Yt]||e[Ee]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ti(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(l(33))}function ao(e){var t=e[io];return t||(t=e[io]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Nn(e){e[Ei]=!0}var sl=new Set,Wo={};function Ns(e,t){Xn(e,t),Xn(e+"Capture",t)}function Xn(e,t){for(Wo[e]=t,e=0;e<t.length;e++)sl.add(t[e])}var aa=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ol={},qo={};function Ri(e){return Te.call(qo,e)?!0:Te.call(ol,e)?!1:aa.test(e)?qo[e]=!0:(ol[e]=!0,!1)}function lo(e,t,s){if(Ri(t))if(s===null)e.removeAttribute(t);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+s)}}function es(e,t,s){if(s===null)e.removeAttribute(t);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+s)}}function ws(e,t,s,a){if(a===null)e.removeAttribute(s);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(t,s,""+a)}}function rn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function yr(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function vu(e,t,s){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,f=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return d.call(this)},set:function(x){s=""+x,f.call(this,x)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(x){s=""+x},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function la(e){if(!e._valueTracker){var t=yr(e)?"checked":"value";e._valueTracker=vu(e,t,""+e[t])}}function wu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var s=t.getValue(),a="";return e&&(a=yr(e)?e.checked?"true":"false":e.value),e=a,e!==s?(t.setValue(e),!0):!1}function Qo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var xr=/[\n"\\]/g;function as(e){return e.replace(xr,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ro(e,t,s,a,d,f,x,w){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),t!=null?x==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+rn(t)):e.value!==""+rn(t)&&(e.value=""+rn(t)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),t!=null?co(e,x,rn(t)):s!=null?co(e,x,rn(s)):a!=null&&e.removeAttribute("value"),d==null&&f!=null&&(e.defaultChecked=!!f),d!=null&&(e.checked=d&&typeof d!="function"&&typeof d!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+rn(w):e.removeAttribute("name")}function pn(e,t,s,a,d,f,x,w){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),t!=null||s!=null){if(!(f!=="submit"&&f!=="reset"||t!=null)){la(e);return}s=s!=null?""+rn(s):"",t=t!=null?""+rn(t):s,w||t===e.value||(e.value=t),e.defaultValue=t}a=a??d,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=w?e.checked:!!a,e.defaultChecked=!!a,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),la(e)}function co(e,t,s){t==="number"&&Qo(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function Gn(e,t,s,a){if(e=e.options,t){t={};for(var d=0;d<s.length;d++)t["$"+s[d]]=!0;for(s=0;s<e.length;s++)d=t.hasOwnProperty("$"+e[s].value),e[s].selected!==d&&(e[s].selected=d),d&&a&&(e[s].defaultSelected=!0)}else{for(s=""+rn(s),t=null,d=0;d<e.length;d++){if(e[d].value===s){e[d].selected=!0,a&&(e[d].defaultSelected=!0);return}t!==null||e[d].disabled||(t=e[d])}t!==null&&(t.selected=!0)}}function Un(e,t,s){if(t!=null&&(t=""+rn(t),t!==e.value&&(e.value=t),s==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=s!=null?""+rn(s):""}function br(e,t,s,a){if(t==null){if(a!=null){if(s!=null)throw Error(l(92));if(ke(a)){if(1<a.length)throw Error(l(93));a=a[0]}s=a}s==null&&(s=""),t=s}s=rn(t),e.defaultValue=s,a=e.textContent,a===s&&a!==""&&a!==null&&(e.value=a),la(e)}function Vo(e,t){if(t){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=t;return}}e.textContent=t}var Su=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function kt(e,t,s){var a=t.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,s):typeof s!="number"||s===0||Su.has(t)?t==="float"?e.cssFloat=s:e[t]=(""+s).trim():e[t]=s+"px"}function vr(e,t,s){if(t!=null&&typeof t!="object")throw Error(l(62));if(e=e.style,s!=null){for(var a in s)!s.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var d in t)a=t[d],t.hasOwnProperty(d)&&s[d]!==a&&kt(e,d,a)}else for(var f in t)t.hasOwnProperty(f)&&kt(e,f,t[f])}function hs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wr=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Sr=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Di(e){return Sr.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Qs(){}var il=null;function Vs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var on=null,uo=null;function al(e){var t=Go(e);if(t&&(e=t.stateNode)){var s=e[jn]||null;e:switch(e=t.stateNode,t.type){case"input":if(ro(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),t=s.name,s.type==="radio"&&t!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+as(""+t)+'"][type="radio"]'),t=0;t<s.length;t++){var a=s[t];if(a!==e&&a.form===e.form){var d=a[jn]||null;if(!d)throw Error(l(90));ro(a,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(t=0;t<s.length;t++)a=s[t],a.form===e.form&&wu(a)}break e;case"textarea":Un(e,s.value,s.defaultValue);break e;case"select":t=s.value,t!=null&&Gn(e,!!s.multiple,t,!1)}}}var ls=!1;function fo(e,t,s){if(ls)return e(t,s);ls=!0;try{var a=e(t);return a}finally{if(ls=!1,(on!==null||uo!==null)&&(yc(),on&&(t=on,e=uo,uo=on=null,al(t),e)))for(t=0;t<e.length;t++)al(e[t])}}function Bt(e,t){var s=e.stateNode;if(s===null)return null;var a=s[jn]||null;if(a===null)return null;s=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(l(231,t,typeof s));return s}var Ss=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ks=!1;if(Ss)try{var Ko={};Object.defineProperty(Ko,"passive",{get:function(){Ks=!0}}),window.addEventListener("test",Ko,Ko),window.removeEventListener("test",Ko,Ko)}catch{Ks=!1}var rs=null,ra=null,Zo=null;function ll(){if(Zo)return Zo;var e,t=ra,s=t.length,a,d="value"in rs?rs.value:rs.textContent,f=d.length;for(e=0;e<s&&t[e]===d[e];e++);var x=s-e;for(a=1;a<=x&&t[s-a]===d[f-a];a++);return Zo=d.slice(e,1<a?1-a:void 0)}function ho(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ai(){return!0}function Ni(){return!1}function Ln(e){function t(s,a,d,f,x){this._reactName=s,this._targetInst=d,this.type=a,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(s=e[w],this[w]=s?s(f):f[w]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ai:Ni,this.isPropagationStopped=Ni,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Ai)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Ai)},persist:function(){},isPersistent:Ai}),t}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ca=Ln(Ls),Os=y({},Ls,{view:0,detail:0}),Zs=Ln(Os),ua,_o,ts,mo=y({},Os,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:po,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ts&&(ts&&e.type==="mousemove"?(ua=e.screenX-ts.screenX,_o=e.screenY-ts.screenY):_o=ua=0,ts=e),ua)},movementY:function(e){return"movementY"in e?e.movementY:_o}}),Jo=Ln(mo),da=y({},mo,{dataTransfer:0}),kr=Ln(da),fa=y({},Os,{relatedTarget:0}),ha=Ln(fa),rl=y({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),ku=Ln(rl),Cr=y({},Ls,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jr=Ln(Cr),Li=y({},Ls,{data:0}),et=Ln(Li),cl={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mr={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ul(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Cu[e])?!!t[e]:!1}function po(){return ul}var _a=y({},Os,{key:function(e){if(e.key){var t=cl[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ho(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mr[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:po,charCode:function(e){return e.type==="keypress"?ho(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ho(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Er=Ln(_a),Tr=y({},mo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oi=Ln(Tr),dl=y({},Os,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:po}),Rr=Ln(dl),ma=y({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),zs=Ln(ma),ju=y({},mo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fl=Ln(ju),hl=y({},Ls,{newState:0,oldState:0}),pa=Ln(hl),Mu=[9,13,27,32],_l=Ss&&"CompositionEvent"in window,ks=null;Ss&&"documentMode"in document&&(ks=document.documentMode);var ml=Ss&&"TextEvent"in window&&!ks,ga=Ss&&(!_l||ks&&8<ks&&11>=ks),Dr=" ",ei=!1;function jo(e,t){switch(e){case"keyup":return Mu.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ar(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Mo=!1;function Nr(e,t){switch(e){case"compositionend":return Ar(t);case"keypress":return t.which!==32?null:(ei=!0,Dr);case"textInput":return e=t.data,e===Dr&&ei?null:e;default:return null}}function Lr(e,t){if(Mo)return e==="compositionend"||!_l&&jo(e,t)?(e=ll(),Zo=ra=rs=null,Mo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ga&&t.locale!=="ko"?null:t.data;default:return null}}var Or={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Or[e.type]:t==="textarea"}function gl(e,t,s,a){on?uo?uo.push(a):uo=[a]:on=a,t=Cc(t,"onChange"),0<t.length&&(s=new ca("onChange","change",null,s,a),e.push({event:s,listeners:t}))}var ti=null,ni=null;function S(e){J0(e,0)}function M(e){var t=Ti(e);if(wu(t))return e}function A(e,t){if(e==="change")return t}var T=!1;if(Ss){var $;if(Ss){var K="oninput"in document;if(!K){var ge=document.createElement("div");ge.setAttribute("oninput","return;"),K=typeof ge.oninput=="function"}$=K}else $=!1;T=$&&(!document.documentMode||9<document.documentMode)}function we(){ti&&(ti.detachEvent("onpropertychange",je),ni=ti=null)}function je(e){if(e.propertyName==="value"&&M(ni)){var t=[];gl(t,ni,e,Vs(e)),fo(S,t)}}function Ue(e,t,s){e==="focusin"?(we(),ti=t,ni=s,ti.attachEvent("onpropertychange",je)):e==="focusout"&&we()}function We(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return M(ni)}function at(e,t){if(e==="click")return M(t)}function bt(e,t){if(e==="input"||e==="change")return M(t)}function Ze(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Se=typeof Object.is=="function"?Object.is:Ze;function tn(e,t){if(Se(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var s=Object.keys(e),a=Object.keys(t);if(s.length!==a.length)return!1;for(a=0;a<s.length;a++){var d=s[a];if(!Te.call(t,d)||!Se(e[d],t[d]))return!1}return!0}function qt(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gn(e,t){var s=qt(e);e=0;for(var a;s;){if(s.nodeType===3){if(a=e+s.textContent.length,e<=t&&a>=t)return{node:s,offset:t-e};e=a}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=qt(s)}}function At(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?At(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function hn(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Qo(e.document);t instanceof e.HTMLIFrameElement;){try{var s=typeof t.contentWindow.location.href=="string"}catch{s=!1}if(s)e=t.contentWindow;else break;t=Qo(e.document)}return t}function ot(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var mt=Ss&&"documentMode"in document&&11>=document.documentMode,an=null,Qt=null,Mn=null,Wn=!1;function wn(e,t,s){var a=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Wn||an==null||an!==Qo(a)||(a=an,"selectionStart"in a&&ot(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Mn&&tn(Mn,a)||(Mn=a,a=Cc(Qt,"onSelect"),0<a.length&&(t=new ca("onSelect","select",null,t,s),e.push({event:t,listeners:a}),t.target=an)))}function Cs(e,t){var s={};return s[e.toLowerCase()]=t.toLowerCase(),s["Webkit"+e]="webkit"+t,s["Moz"+e]="moz"+t,s}var _s={animationend:Cs("Animation","AnimationEnd"),animationiteration:Cs("Animation","AnimationIteration"),animationstart:Cs("Animation","AnimationStart"),transitionrun:Cs("Transition","TransitionRun"),transitionstart:Cs("Transition","TransitionStart"),transitioncancel:Cs("Transition","TransitionCancel"),transitionend:Cs("Transition","TransitionEnd")},Bs={},yn={};Ss&&(yn=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function ns(e){if(Bs[e])return Bs[e];if(!_s[e])return e;var t=_s[e],s;for(s in t)if(t.hasOwnProperty(s)&&s in yn)return Bs[e]=t[s];return e}var go=ns("animationend"),zr=ns("animationiteration"),Br=ns("animationstart"),Eu=ns("transitionrun"),Tu=ns("transitionstart"),Sy=ns("transitioncancel"),Ah=ns("transitionend"),Nh=new Map,Ru="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ru.push("scrollEnd");function Js(e,t){Nh.set(e,t),Ns(t,[e])}var $r=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},$s=[],ya=0,Du=0;function Pr(){for(var e=ya,t=Du=ya=0;t<e;){var s=$s[t];$s[t++]=null;var a=$s[t];$s[t++]=null;var d=$s[t];$s[t++]=null;var f=$s[t];if($s[t++]=null,a!==null&&d!==null){var x=a.pending;x===null?d.next=d:(d.next=x.next,x.next=d),a.pending=d}f!==0&&Lh(s,d,f)}}function Ir(e,t,s,a){$s[ya++]=e,$s[ya++]=t,$s[ya++]=s,$s[ya++]=a,Du|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Au(e,t,s,a){return Ir(e,t,s,a),Ur(e)}function zi(e,t){return Ir(e,null,null,t),Ur(e)}function Lh(e,t,s){e.lanes|=s;var a=e.alternate;a!==null&&(a.lanes|=s);for(var d=!1,f=e.return;f!==null;)f.childLanes|=s,a=f.alternate,a!==null&&(a.childLanes|=s),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(d=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,d&&t!==null&&(d=31-it(s),e=f.hiddenUpdates,a=e[d],a===null?e[d]=[t]:a.push(t),t.lane=s|536870912),f):null}function Ur(e){if(50<Pl)throw Pl=0,Ud=null,Error(l(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var xa={};function ky(e,t,s,a){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function js(e,t,s,a){return new ky(e,t,s,a)}function Nu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Eo(e,t){var s=e.alternate;return s===null?(s=js(e.tag,t,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=t,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,t=e.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function Oh(e,t){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,t=s.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Hr(e,t,s,a,d,f){var x=0;if(a=e,typeof e=="function")Nu(e)&&(x=1);else if(typeof e=="string")x=T1(e,s,Me.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case xe:return e=js(31,s,t,d),e.elementType=xe,e.lanes=f,e;case E:return Bi(s.children,d,f,t);case O:x=8,d|=24;break;case B:return e=js(12,s,t,d|2),e.elementType=B,e.lanes=f,e;case de:return e=js(13,s,t,d),e.elementType=de,e.lanes=f,e;case ye:return e=js(19,s,t,d),e.elementType=ye,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case F:x=10;break e;case J:x=9;break e;case z:x=11;break e;case G:x=14;break e;case fe:x=16,a=null;break e}x=29,s=Error(l(130,e===null?"null":typeof e,"")),a=null}return t=js(x,s,t,d),t.elementType=e,t.type=a,t.lanes=f,t}function Bi(e,t,s,a){return e=js(7,e,a,t),e.lanes=s,e}function Lu(e,t,s){return e=js(6,e,null,t),e.lanes=s,e}function zh(e){var t=js(18,null,null,0);return t.stateNode=e,t}function Ou(e,t,s){return t=js(4,e.children!==null?e.children:[],e.key,t),t.lanes=s,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Bh=new WeakMap;function Ps(e,t){if(typeof e=="object"&&e!==null){var s=Bh.get(e);return s!==void 0?s:(t={value:e,source:t,stack:V(t)},Bh.set(e,t),t)}return{value:e,source:t,stack:V(t)}}var ba=[],va=0,Yr=null,yl=0,Is=[],Us=0,si=null,yo=1,xo="";function To(e,t){ba[va++]=yl,ba[va++]=Yr,Yr=e,yl=t}function $h(e,t,s){Is[Us++]=yo,Is[Us++]=xo,Is[Us++]=si,si=e;var a=yo;e=xo;var d=32-it(a)-1;a&=~(1<<d),s+=1;var f=32-it(t)+d;if(30<f){var x=d-d%5;f=(a&(1<<x)-1).toString(32),a>>=x,d-=x,yo=1<<32-it(t)+d|s<<d|a,xo=f+e}else yo=1<<f|s<<d|a,xo=e}function zu(e){e.return!==null&&(To(e,1),$h(e,1,0))}function Bu(e){for(;e===Yr;)Yr=ba[--va],ba[va]=null,yl=ba[--va],ba[va]=null;for(;e===si;)si=Is[--Us],Is[Us]=null,xo=Is[--Us],Is[Us]=null,yo=Is[--Us],Is[Us]=null}function Ph(e,t){Is[Us++]=yo,Is[Us++]=xo,Is[Us++]=si,yo=t.id,xo=t.overflow,si=e}var qn=null,cn=null,zt=!1,oi=null,Hs=!1,$u=Error(l(519));function ii(e){var t=Error(l(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw xl(Ps(t,e)),$u}function Ih(e){var t=e.stateNode,s=e.type,a=e.memoizedProps;switch(t[Yt]=e,t[jn]=a,s){case"dialog":Tt("cancel",t),Tt("close",t);break;case"iframe":case"object":case"embed":Tt("load",t);break;case"video":case"audio":for(s=0;s<Ul.length;s++)Tt(Ul[s],t);break;case"source":Tt("error",t);break;case"img":case"image":case"link":Tt("error",t),Tt("load",t);break;case"details":Tt("toggle",t);break;case"input":Tt("invalid",t),pn(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Tt("invalid",t);break;case"textarea":Tt("invalid",t),br(t,a.value,a.defaultValue,a.children)}s=a.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||t.textContent===""+s||a.suppressHydrationWarning===!0||sm(t.textContent,s)?(a.popover!=null&&(Tt("beforetoggle",t),Tt("toggle",t)),a.onScroll!=null&&Tt("scroll",t),a.onScrollEnd!=null&&Tt("scrollend",t),a.onClick!=null&&(t.onclick=Qs),t=!0):t=!1,t||ii(e,!0)}function Uh(e){for(qn=e.return;qn;)switch(qn.tag){case 5:case 31:case 13:Hs=!1;return;case 27:case 3:Hs=!0;return;default:qn=qn.return}}function wa(e){if(e!==qn)return!1;if(!zt)return Uh(e),zt=!0,!1;var t=e.tag,s;if((s=t!==3&&t!==27)&&((s=t===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||nf(e.type,e.memoizedProps)),s=!s),s&&cn&&ii(e),Uh(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));cn=fm(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));cn=fm(e)}else t===27?(t=cn,xi(e.type)?(e=rf,rf=null,cn=e):cn=t):cn=qn?Xs(e.stateNode.nextSibling):null;return!0}function $i(){cn=qn=null,zt=!1}function Pu(){var e=oi;return e!==null&&(ys===null?ys=e:ys.push.apply(ys,e),oi=null),e}function xl(e){oi===null?oi=[e]:oi.push(e)}var Iu=D(null),Pi=null,Ro=null;function ai(e,t,s){pe(Iu,t._currentValue),t._currentValue=s}function Do(e){e._currentValue=Iu.current,Z(Iu)}function Uu(e,t,s){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===s)break;e=e.return}}function Hu(e,t,s,a){var d=e.child;for(d!==null&&(d.return=e);d!==null;){var f=d.dependencies;if(f!==null){var x=d.child;f=f.firstContext;e:for(;f!==null;){var w=f;f=d;for(var R=0;R<t.length;R++)if(w.context===t[R]){f.lanes|=s,w=f.alternate,w!==null&&(w.lanes|=s),Uu(f.return,s,e),a||(x=null);break e}f=w.next}}else if(d.tag===18){if(x=d.return,x===null)throw Error(l(341));x.lanes|=s,f=x.alternate,f!==null&&(f.lanes|=s),Uu(x,s,e),x=null}else x=d.child;if(x!==null)x.return=d;else for(x=d;x!==null;){if(x===e){x=null;break}if(d=x.sibling,d!==null){d.return=x.return,x=d;break}x=x.return}d=x}}function Sa(e,t,s,a){e=null;for(var d=t,f=!1;d!==null;){if(!f){if((d.flags&524288)!==0)f=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var x=d.alternate;if(x===null)throw Error(l(387));if(x=x.memoizedProps,x!==null){var w=d.type;Se(d.pendingProps.value,x.value)||(e!==null?e.push(w):e=[w])}}else if(d===dt.current){if(x=d.alternate,x===null)throw Error(l(387));x.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(e!==null?e.push(Gl):e=[Gl])}d=d.return}e!==null&&Hu(t,e,s,a),t.flags|=262144}function Xr(e){for(e=e.firstContext;e!==null;){if(!Se(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ii(e){Pi=e,Ro=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Qn(e){return Hh(Pi,e)}function Fr(e,t){return Pi===null&&Ii(e),Hh(e,t)}function Hh(e,t){var s=t._currentValue;if(t={context:t,memoizedValue:s,next:null},Ro===null){if(e===null)throw Error(l(308));Ro=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ro=Ro.next=t;return s}var Cy=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(s,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(s){return s()})}},jy=o.unstable_scheduleCallback,My=o.unstable_NormalPriority,On={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yu(){return{controller:new Cy,data:new Map,refCount:0}}function bl(e){e.refCount--,e.refCount===0&&jy(My,function(){e.controller.abort()})}var vl=null,Xu=0,ka=0,Ca=null;function Ey(e,t){if(vl===null){var s=vl=[];Xu=0,ka=Wd(),Ca={status:"pending",value:void 0,then:function(a){s.push(a)}}}return Xu++,t.then(Yh,Yh),t}function Yh(){if(--Xu===0&&vl!==null){Ca!==null&&(Ca.status="fulfilled");var e=vl;vl=null,ka=0,Ca=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ty(e,t){var s=[],a={status:"pending",value:null,reason:null,then:function(d){s.push(d)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var d=0;d<s.length;d++)(0,s[d])(t)},function(d){for(a.status="rejected",a.reason=d,d=0;d<s.length;d++)(0,s[d])(void 0)}),a}var Xh=N.S;N.S=function(e,t){M0=Re(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Ey(e,t),Xh!==null&&Xh(e,t)};var Ui=D(null);function Fu(){var e=Ui.current;return e!==null?e:nn.pooledCache}function Gr(e,t){t===null?pe(Ui,Ui.current):pe(Ui,t.pool)}function Fh(){var e=Fu();return e===null?null:{parent:On._currentValue,pool:e}}var ja=Error(l(460)),Gu=Error(l(474)),Wr=Error(l(542)),qr={then:function(){}};function Gh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Wh(e,t,s){switch(s=e[s],s===void 0?e.push(t):s!==t&&(t.then(Qs,Qs),t=s),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Qh(e),e;default:if(typeof t.status=="string")t.then(Qs,Qs);else{if(e=nn,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var d=t;d.status="fulfilled",d.value=a}},function(a){if(t.status==="pending"){var d=t;d.status="rejected",d.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Qh(e),e}throw Yi=t,ja}}function Hi(e){try{var t=e._init;return t(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Yi=s,ja):s}}var Yi=null;function qh(){if(Yi===null)throw Error(l(459));var e=Yi;return Yi=null,e}function Qh(e){if(e===ja||e===Wr)throw Error(l(483))}var Ma=null,wl=0;function Qr(e){var t=wl;return wl+=1,Ma===null&&(Ma=[]),Wh(Ma,e,t)}function Sl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Vr(e,t){throw t.$$typeof===v?Error(l(525)):(e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Vh(e){function t(P,L){if(e){var U=P.deletions;U===null?(P.deletions=[L],P.flags|=16):U.push(L)}}function s(P,L){if(!e)return null;for(;L!==null;)t(P,L),L=L.sibling;return null}function a(P){for(var L=new Map;P!==null;)P.key!==null?L.set(P.key,P):L.set(P.index,P),P=P.sibling;return L}function d(P,L){return P=Eo(P,L),P.index=0,P.sibling=null,P}function f(P,L,U){return P.index=U,e?(U=P.alternate,U!==null?(U=U.index,U<L?(P.flags|=67108866,L):U):(P.flags|=67108866,L)):(P.flags|=1048576,L)}function x(P){return e&&P.alternate===null&&(P.flags|=67108866),P}function w(P,L,U,se){return L===null||L.tag!==6?(L=Lu(U,P.mode,se),L.return=P,L):(L=d(L,U),L.return=P,L)}function R(P,L,U,se){var Je=U.type;return Je===E?ee(P,L,U.props.children,se,U.key):L!==null&&(L.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===fe&&Hi(Je)===L.type)?(L=d(L,U.props),Sl(L,U),L.return=P,L):(L=Hr(U.type,U.key,U.props,null,P.mode,se),Sl(L,U),L.return=P,L)}function H(P,L,U,se){return L===null||L.tag!==4||L.stateNode.containerInfo!==U.containerInfo||L.stateNode.implementation!==U.implementation?(L=Ou(U,P.mode,se),L.return=P,L):(L=d(L,U.children||[]),L.return=P,L)}function ee(P,L,U,se,Je){return L===null||L.tag!==7?(L=Bi(U,P.mode,se,Je),L.return=P,L):(L=d(L,U),L.return=P,L)}function ae(P,L,U){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return L=Lu(""+L,P.mode,U),L.return=P,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case C:return U=Hr(L.type,L.key,L.props,null,P.mode,U),Sl(U,L),U.return=P,U;case k:return L=Ou(L,P.mode,U),L.return=P,L;case fe:return L=Hi(L),ae(P,L,U)}if(ke(L)||Q(L))return L=Bi(L,P.mode,U,null),L.return=P,L;if(typeof L.then=="function")return ae(P,Qr(L),U);if(L.$$typeof===F)return ae(P,Fr(P,L),U);Vr(P,L)}return null}function X(P,L,U,se){var Je=L!==null?L.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return Je!==null?null:w(P,L,""+U,se);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case C:return U.key===Je?R(P,L,U,se):null;case k:return U.key===Je?H(P,L,U,se):null;case fe:return U=Hi(U),X(P,L,U,se)}if(ke(U)||Q(U))return Je!==null?null:ee(P,L,U,se,null);if(typeof U.then=="function")return X(P,L,Qr(U),se);if(U.$$typeof===F)return X(P,L,Fr(P,U),se);Vr(P,U)}return null}function q(P,L,U,se,Je){if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return P=P.get(U)||null,w(L,P,""+se,Je);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case C:return P=P.get(se.key===null?U:se.key)||null,R(L,P,se,Je);case k:return P=P.get(se.key===null?U:se.key)||null,H(L,P,se,Je);case fe:return se=Hi(se),q(P,L,U,se,Je)}if(ke(se)||Q(se))return P=P.get(U)||null,ee(L,P,se,Je,null);if(typeof se.then=="function")return q(P,L,U,Qr(se),Je);if(se.$$typeof===F)return q(P,L,U,Fr(L,se),Je);Vr(L,se)}return null}function Ie(P,L,U,se){for(var Je=null,$t=null,Xe=L,vt=L=0,Lt=null;Xe!==null&&vt<U.length;vt++){Xe.index>vt?(Lt=Xe,Xe=null):Lt=Xe.sibling;var Pt=X(P,Xe,U[vt],se);if(Pt===null){Xe===null&&(Xe=Lt);break}e&&Xe&&Pt.alternate===null&&t(P,Xe),L=f(Pt,L,vt),$t===null?Je=Pt:$t.sibling=Pt,$t=Pt,Xe=Lt}if(vt===U.length)return s(P,Xe),zt&&To(P,vt),Je;if(Xe===null){for(;vt<U.length;vt++)Xe=ae(P,U[vt],se),Xe!==null&&(L=f(Xe,L,vt),$t===null?Je=Xe:$t.sibling=Xe,$t=Xe);return zt&&To(P,vt),Je}for(Xe=a(Xe);vt<U.length;vt++)Lt=q(Xe,P,vt,U[vt],se),Lt!==null&&(e&&Lt.alternate!==null&&Xe.delete(Lt.key===null?vt:Lt.key),L=f(Lt,L,vt),$t===null?Je=Lt:$t.sibling=Lt,$t=Lt);return e&&Xe.forEach(function(ki){return t(P,ki)}),zt&&To(P,vt),Je}function lt(P,L,U,se){if(U==null)throw Error(l(151));for(var Je=null,$t=null,Xe=L,vt=L=0,Lt=null,Pt=U.next();Xe!==null&&!Pt.done;vt++,Pt=U.next()){Xe.index>vt?(Lt=Xe,Xe=null):Lt=Xe.sibling;var ki=X(P,Xe,Pt.value,se);if(ki===null){Xe===null&&(Xe=Lt);break}e&&Xe&&ki.alternate===null&&t(P,Xe),L=f(ki,L,vt),$t===null?Je=ki:$t.sibling=ki,$t=ki,Xe=Lt}if(Pt.done)return s(P,Xe),zt&&To(P,vt),Je;if(Xe===null){for(;!Pt.done;vt++,Pt=U.next())Pt=ae(P,Pt.value,se),Pt!==null&&(L=f(Pt,L,vt),$t===null?Je=Pt:$t.sibling=Pt,$t=Pt);return zt&&To(P,vt),Je}for(Xe=a(Xe);!Pt.done;vt++,Pt=U.next())Pt=q(Xe,P,vt,Pt.value,se),Pt!==null&&(e&&Pt.alternate!==null&&Xe.delete(Pt.key===null?vt:Pt.key),L=f(Pt,L,vt),$t===null?Je=Pt:$t.sibling=Pt,$t=Pt);return e&&Xe.forEach(function(I1){return t(P,I1)}),zt&&To(P,vt),Je}function Zt(P,L,U,se){if(typeof U=="object"&&U!==null&&U.type===E&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case C:e:{for(var Je=U.key;L!==null;){if(L.key===Je){if(Je=U.type,Je===E){if(L.tag===7){s(P,L.sibling),se=d(L,U.props.children),se.return=P,P=se;break e}}else if(L.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===fe&&Hi(Je)===L.type){s(P,L.sibling),se=d(L,U.props),Sl(se,U),se.return=P,P=se;break e}s(P,L);break}else t(P,L);L=L.sibling}U.type===E?(se=Bi(U.props.children,P.mode,se,U.key),se.return=P,P=se):(se=Hr(U.type,U.key,U.props,null,P.mode,se),Sl(se,U),se.return=P,P=se)}return x(P);case k:e:{for(Je=U.key;L!==null;){if(L.key===Je)if(L.tag===4&&L.stateNode.containerInfo===U.containerInfo&&L.stateNode.implementation===U.implementation){s(P,L.sibling),se=d(L,U.children||[]),se.return=P,P=se;break e}else{s(P,L);break}else t(P,L);L=L.sibling}se=Ou(U,P.mode,se),se.return=P,P=se}return x(P);case fe:return U=Hi(U),Zt(P,L,U,se)}if(ke(U))return Ie(P,L,U,se);if(Q(U)){if(Je=Q(U),typeof Je!="function")throw Error(l(150));return U=Je.call(U),lt(P,L,U,se)}if(typeof U.then=="function")return Zt(P,L,Qr(U),se);if(U.$$typeof===F)return Zt(P,L,Fr(P,U),se);Vr(P,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,L!==null&&L.tag===6?(s(P,L.sibling),se=d(L,U),se.return=P,P=se):(s(P,L),se=Lu(U,P.mode,se),se.return=P,P=se),x(P)):s(P,L)}return function(P,L,U,se){try{wl=0;var Je=Zt(P,L,U,se);return Ma=null,Je}catch(Xe){if(Xe===ja||Xe===Wr)throw Xe;var $t=js(29,Xe,null,P.mode);return $t.lanes=se,$t.return=P,$t}finally{}}}var Xi=Vh(!0),Kh=Vh(!1),li=!1;function Wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ri(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ci(e,t,s){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(It&2)!==0){var d=a.pending;return d===null?t.next=t:(t.next=d.next,d.next=t),a.pending=t,t=Ur(e),Lh(e,null,s),t}return Ir(e,a,t,s),Ur(e)}function kl(e,t,s){if(t=t.updateQueue,t!==null&&(t=t.shared,(s&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,s|=a,t.lanes=s,Yn(e,s)}}function Qu(e,t){var s=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,s===a)){var d=null,f=null;if(s=s.firstBaseUpdate,s!==null){do{var x={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};f===null?d=f=x:f=f.next=x,s=s.next}while(s!==null);f===null?d=f=t:f=f.next=t}else d=f=t;s={baseState:a.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:a.shared,callbacks:a.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=t:e.next=t,s.lastBaseUpdate=t}var Vu=!1;function Cl(){if(Vu){var e=Ca;if(e!==null)throw e}}function jl(e,t,s,a){Vu=!1;var d=e.updateQueue;li=!1;var f=d.firstBaseUpdate,x=d.lastBaseUpdate,w=d.shared.pending;if(w!==null){d.shared.pending=null;var R=w,H=R.next;R.next=null,x===null?f=H:x.next=H,x=R;var ee=e.alternate;ee!==null&&(ee=ee.updateQueue,w=ee.lastBaseUpdate,w!==x&&(w===null?ee.firstBaseUpdate=H:w.next=H,ee.lastBaseUpdate=R))}if(f!==null){var ae=d.baseState;x=0,ee=H=R=null,w=f;do{var X=w.lane&-536870913,q=X!==w.lane;if(q?(Nt&X)===X:(a&X)===X){X!==0&&X===ka&&(Vu=!0),ee!==null&&(ee=ee.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var Ie=e,lt=w;X=t;var Zt=s;switch(lt.tag){case 1:if(Ie=lt.payload,typeof Ie=="function"){ae=Ie.call(Zt,ae,X);break e}ae=Ie;break e;case 3:Ie.flags=Ie.flags&-65537|128;case 0:if(Ie=lt.payload,X=typeof Ie=="function"?Ie.call(Zt,ae,X):Ie,X==null)break e;ae=y({},ae,X);break e;case 2:li=!0}}X=w.callback,X!==null&&(e.flags|=64,q&&(e.flags|=8192),q=d.callbacks,q===null?d.callbacks=[X]:q.push(X))}else q={lane:X,tag:w.tag,payload:w.payload,callback:w.callback,next:null},ee===null?(H=ee=q,R=ae):ee=ee.next=q,x|=X;if(w=w.next,w===null){if(w=d.shared.pending,w===null)break;q=w,w=q.next,q.next=null,d.lastBaseUpdate=q,d.shared.pending=null}}while(!0);ee===null&&(R=ae),d.baseState=R,d.firstBaseUpdate=H,d.lastBaseUpdate=ee,f===null&&(d.shared.lanes=0),_i|=x,e.lanes=x,e.memoizedState=ae}}function Zh(e,t){if(typeof e!="function")throw Error(l(191,e));e.call(t)}function Jh(e,t){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)Zh(s[e],t)}var Ea=D(null),Kr=D(0);function e_(e,t){e=Io,pe(Kr,e),pe(Ea,t),Io=e|t.baseLanes}function Ku(){pe(Kr,Io),pe(Ea,Ea.current)}function Zu(){Io=Kr.current,Z(Ea),Z(Kr)}var Ms=D(null),Ys=null;function ui(e){var t=e.alternate;pe(En,En.current&1),pe(Ms,e),Ys===null&&(t===null||Ea.current!==null||t.memoizedState!==null)&&(Ys=e)}function Ju(e){pe(En,En.current),pe(Ms,e),Ys===null&&(Ys=e)}function t_(e){e.tag===22?(pe(En,En.current),pe(Ms,e),Ys===null&&(Ys=e)):di()}function di(){pe(En,En.current),pe(Ms,Ms.current)}function Es(e){Z(Ms),Ys===e&&(Ys=null),Z(En)}var En=D(0);function Zr(e){for(var t=e;t!==null;){if(t.tag===13){var s=t.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||af(s)||lf(s)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ao=0,gt=null,Vt=null,zn=null,Jr=!1,Ta=!1,Fi=!1,ec=0,Ml=0,Ra=null,Ry=0;function Sn(){throw Error(l(321))}function ed(e,t){if(t===null)return!1;for(var s=0;s<t.length&&s<e.length;s++)if(!Se(e[s],t[s]))return!1;return!0}function td(e,t,s,a,d,f){return Ao=f,gt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,N.H=e===null||e.memoizedState===null?$_:pd,Fi=!1,f=s(a,d),Fi=!1,Ta&&(f=s_(t,s,a,d)),n_(e),f}function n_(e){N.H=Rl;var t=Vt!==null&&Vt.next!==null;if(Ao=0,zn=Vt=gt=null,Jr=!1,Ml=0,Ra=null,t)throw Error(l(300));e===null||Bn||(e=e.dependencies,e!==null&&Xr(e)&&(Bn=!0))}function s_(e,t,s,a){gt=e;var d=0;do{if(Ta&&(Ra=null),Ml=0,Ta=!1,25<=d)throw Error(l(301));if(d+=1,zn=Vt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}N.H=P_,f=t(s,a)}while(Ta);return f}function Dy(){var e=N.H,t=e.useState()[0];return t=typeof t.then=="function"?El(t):t,e=e.useState()[0],(Vt!==null?Vt.memoizedState:null)!==e&&(gt.flags|=1024),t}function nd(){var e=ec!==0;return ec=0,e}function sd(e,t,s){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s}function od(e){if(Jr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Jr=!1}Ao=0,zn=Vt=gt=null,Ta=!1,Ml=ec=0,Ra=null}function cs(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zn===null?gt.memoizedState=zn=e:zn=zn.next=e,zn}function Tn(){if(Vt===null){var e=gt.alternate;e=e!==null?e.memoizedState:null}else e=Vt.next;var t=zn===null?gt.memoizedState:zn.next;if(t!==null)zn=t,Vt=e;else{if(e===null)throw gt.alternate===null?Error(l(467)):Error(l(310));Vt=e,e={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},zn===null?gt.memoizedState=zn=e:zn=zn.next=e}return zn}function tc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function El(e){var t=Ml;return Ml+=1,Ra===null&&(Ra=[]),e=Wh(Ra,e,t),t=gt,(zn===null?t.memoizedState:zn.next)===null&&(t=t.alternate,N.H=t===null||t.memoizedState===null?$_:pd),e}function nc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return El(e);if(e.$$typeof===F)return Qn(e)}throw Error(l(438,String(e)))}function id(e){var t=null,s=gt.updateQueue;if(s!==null&&(t=s.memoCache),t==null){var a=gt.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(d){return d.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),s===null&&(s=tc(),gt.updateQueue=s),s.memoCache=t,s=t.data[t.index],s===void 0)for(s=t.data[t.index]=Array(e),a=0;a<e;a++)s[a]=he;return t.index++,s}function No(e,t){return typeof t=="function"?t(e):t}function sc(e){var t=Tn();return ad(t,Vt,e)}function ad(e,t,s){var a=e.queue;if(a===null)throw Error(l(311));a.lastRenderedReducer=s;var d=e.baseQueue,f=a.pending;if(f!==null){if(d!==null){var x=d.next;d.next=f.next,f.next=x}t.baseQueue=d=f,a.pending=null}if(f=e.baseState,d===null)e.memoizedState=f;else{t=d.next;var w=x=null,R=null,H=t,ee=!1;do{var ae=H.lane&-536870913;if(ae!==H.lane?(Nt&ae)===ae:(Ao&ae)===ae){var X=H.revertLane;if(X===0)R!==null&&(R=R.next={lane:0,revertLane:0,gesture:null,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null}),ae===ka&&(ee=!0);else if((Ao&X)===X){H=H.next,X===ka&&(ee=!0);continue}else ae={lane:0,revertLane:H.revertLane,gesture:null,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},R===null?(w=R=ae,x=f):R=R.next=ae,gt.lanes|=X,_i|=X;ae=H.action,Fi&&s(f,ae),f=H.hasEagerState?H.eagerState:s(f,ae)}else X={lane:ae,revertLane:H.revertLane,gesture:H.gesture,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},R===null?(w=R=X,x=f):R=R.next=X,gt.lanes|=ae,_i|=ae;H=H.next}while(H!==null&&H!==t);if(R===null?x=f:R.next=w,!Se(f,e.memoizedState)&&(Bn=!0,ee&&(s=Ca,s!==null)))throw s;e.memoizedState=f,e.baseState=x,e.baseQueue=R,a.lastRenderedState=f}return d===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function ld(e){var t=Tn(),s=t.queue;if(s===null)throw Error(l(311));s.lastRenderedReducer=e;var a=s.dispatch,d=s.pending,f=t.memoizedState;if(d!==null){s.pending=null;var x=d=d.next;do f=e(f,x.action),x=x.next;while(x!==d);Se(f,t.memoizedState)||(Bn=!0),t.memoizedState=f,t.baseQueue===null&&(t.baseState=f),s.lastRenderedState=f}return[f,a]}function o_(e,t,s){var a=gt,d=Tn(),f=zt;if(f){if(s===void 0)throw Error(l(407));s=s()}else s=t();var x=!Se((Vt||d).memoizedState,s);if(x&&(d.memoizedState=s,Bn=!0),d=d.queue,ud(l_.bind(null,a,d,e),[e]),d.getSnapshot!==t||x||zn!==null&&zn.memoizedState.tag&1){if(a.flags|=2048,Da(9,{destroy:void 0},a_.bind(null,a,d,s,t),null),nn===null)throw Error(l(349));f||(Ao&127)!==0||i_(a,t,s)}return s}function i_(e,t,s){e.flags|=16384,e={getSnapshot:t,value:s},t=gt.updateQueue,t===null?(t=tc(),gt.updateQueue=t,t.stores=[e]):(s=t.stores,s===null?t.stores=[e]:s.push(e))}function a_(e,t,s,a){t.value=s,t.getSnapshot=a,r_(t)&&c_(e)}function l_(e,t,s){return s(function(){r_(t)&&c_(e)})}function r_(e){var t=e.getSnapshot;e=e.value;try{var s=t();return!Se(e,s)}catch{return!0}}function c_(e){var t=zi(e,2);t!==null&&xs(t,e,2)}function rd(e){var t=cs();if(typeof e=="function"){var s=e;if(e=s(),Fi){me(!0);try{s()}finally{me(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:e},t}function u_(e,t,s,a){return e.baseState=s,ad(e,Vt,typeof a=="function"?a:No)}function Ay(e,t,s,a,d){if(ac(e))throw Error(l(485));if(e=t.action,e!==null){var f={payload:d,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};N.T!==null?s(!0):f.isTransition=!1,a(f),s=t.pending,s===null?(f.next=t.pending=f,d_(t,f)):(f.next=s.next,t.pending=s.next=f)}}function d_(e,t){var s=t.action,a=t.payload,d=e.state;if(t.isTransition){var f=N.T,x={};N.T=x;try{var w=s(d,a),R=N.S;R!==null&&R(x,w),f_(e,t,w)}catch(H){cd(e,t,H)}finally{f!==null&&x.types!==null&&(f.types=x.types),N.T=f}}else try{f=s(d,a),f_(e,t,f)}catch(H){cd(e,t,H)}}function f_(e,t,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(a){h_(e,t,a)},function(a){return cd(e,t,a)}):h_(e,t,s)}function h_(e,t,s){t.status="fulfilled",t.value=s,__(t),e.state=s,t=e.pending,t!==null&&(s=t.next,s===t?e.pending=null:(s=s.next,t.next=s,d_(e,s)))}function cd(e,t,s){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=s,__(t),t=t.next;while(t!==a)}e.action=null}function __(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function m_(e,t){return t}function p_(e,t){if(zt){var s=nn.formState;if(s!==null){e:{var a=gt;if(zt){if(cn){t:{for(var d=cn,f=Hs;d.nodeType!==8;){if(!f){d=null;break t}if(d=Xs(d.nextSibling),d===null){d=null;break t}}f=d.data,d=f==="F!"||f==="F"?d:null}if(d){cn=Xs(d.nextSibling),a=d.data==="F!";break e}}ii(a)}a=!1}a&&(t=s[0])}}return s=cs(),s.memoizedState=s.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:m_,lastRenderedState:t},s.queue=a,s=O_.bind(null,gt,a),a.dispatch=s,a=rd(!1),f=md.bind(null,gt,!1,a.queue),a=cs(),d={state:t,dispatch:null,action:e,pending:null},a.queue=d,s=Ay.bind(null,gt,d,f,s),d.dispatch=s,a.memoizedState=e,[t,s,!1]}function g_(e){var t=Tn();return y_(t,Vt,e)}function y_(e,t,s){if(t=ad(e,t,m_)[0],e=sc(No)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=El(t)}catch(x){throw x===ja?Wr:x}else a=t;t=Tn();var d=t.queue,f=d.dispatch;return s!==t.memoizedState&&(gt.flags|=2048,Da(9,{destroy:void 0},Ny.bind(null,d,s),null)),[a,f,e]}function Ny(e,t){e.action=t}function x_(e){var t=Tn(),s=Vt;if(s!==null)return y_(t,s,e);Tn(),t=t.memoizedState,s=Tn();var a=s.queue.dispatch;return s.memoizedState=e,[t,a,!1]}function Da(e,t,s,a){return e={tag:e,create:s,deps:a,inst:t,next:null},t=gt.updateQueue,t===null&&(t=tc(),gt.updateQueue=t),s=t.lastEffect,s===null?t.lastEffect=e.next=e:(a=s.next,s.next=e,e.next=a,t.lastEffect=e),e}function b_(){return Tn().memoizedState}function oc(e,t,s,a){var d=cs();gt.flags|=e,d.memoizedState=Da(1|t,{destroy:void 0},s,a===void 0?null:a)}function ic(e,t,s,a){var d=Tn();a=a===void 0?null:a;var f=d.memoizedState.inst;Vt!==null&&a!==null&&ed(a,Vt.memoizedState.deps)?d.memoizedState=Da(t,f,s,a):(gt.flags|=e,d.memoizedState=Da(1|t,f,s,a))}function v_(e,t){oc(8390656,8,e,t)}function ud(e,t){ic(2048,8,e,t)}function Ly(e){gt.flags|=4;var t=gt.updateQueue;if(t===null)t=tc(),gt.updateQueue=t,t.events=[e];else{var s=t.events;s===null?t.events=[e]:s.push(e)}}function w_(e){var t=Tn().memoizedState;return Ly({ref:t,nextImpl:e}),function(){if((It&2)!==0)throw Error(l(440));return t.impl.apply(void 0,arguments)}}function S_(e,t){return ic(4,2,e,t)}function k_(e,t){return ic(4,4,e,t)}function C_(e,t){if(typeof t=="function"){e=e();var s=t(e);return function(){typeof s=="function"?s():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function j_(e,t,s){s=s!=null?s.concat([e]):null,ic(4,4,C_.bind(null,t,e),s)}function dd(){}function M_(e,t){var s=Tn();t=t===void 0?null:t;var a=s.memoizedState;return t!==null&&ed(t,a[1])?a[0]:(s.memoizedState=[e,t],e)}function E_(e,t){var s=Tn();t=t===void 0?null:t;var a=s.memoizedState;if(t!==null&&ed(t,a[1]))return a[0];if(a=e(),Fi){me(!0);try{e()}finally{me(!1)}}return s.memoizedState=[a,t],a}function fd(e,t,s){return s===void 0||(Ao&1073741824)!==0&&(Nt&261930)===0?e.memoizedState=t:(e.memoizedState=s,e=T0(),gt.lanes|=e,_i|=e,s)}function T_(e,t,s,a){return Se(s,t)?s:Ea.current!==null?(e=fd(e,s,a),Se(e,t)||(Bn=!0),e):(Ao&42)===0||(Ao&1073741824)!==0&&(Nt&261930)===0?(Bn=!0,e.memoizedState=s):(e=T0(),gt.lanes|=e,_i|=e,t)}function R_(e,t,s,a,d){var f=ue.p;ue.p=f!==0&&8>f?f:8;var x=N.T,w={};N.T=w,md(e,!1,t,s);try{var R=d(),H=N.S;if(H!==null&&H(w,R),R!==null&&typeof R=="object"&&typeof R.then=="function"){var ee=Ty(R,a);Tl(e,t,ee,Ds(e))}else Tl(e,t,a,Ds(e))}catch(ae){Tl(e,t,{then:function(){},status:"rejected",reason:ae},Ds())}finally{ue.p=f,x!==null&&w.types!==null&&(x.types=w.types),N.T=x}}function Oy(){}function hd(e,t,s,a){if(e.tag!==5)throw Error(l(476));var d=D_(e).queue;R_(e,d,t,W,s===null?Oy:function(){return A_(e),s(a)})}function D_(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:W},next:null};var s={};return t.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:s},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function A_(e){var t=D_(e);t.next===null&&(t=e.alternate.memoizedState),Tl(e,t.next.queue,{},Ds())}function _d(){return Qn(Gl)}function N_(){return Tn().memoizedState}function L_(){return Tn().memoizedState}function zy(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var s=Ds();e=ri(s);var a=ci(t,e,s);a!==null&&(xs(a,t,s),kl(a,t,s)),t={cache:Yu()},e.payload=t;return}t=t.return}}function By(e,t,s){var a=Ds();s={lane:a,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},ac(e)?z_(t,s):(s=Au(e,t,s,a),s!==null&&(xs(s,e,a),B_(s,t,a)))}function O_(e,t,s){var a=Ds();Tl(e,t,s,a)}function Tl(e,t,s,a){var d={lane:a,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(ac(e))z_(t,d);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=t.lastRenderedReducer,f!==null))try{var x=t.lastRenderedState,w=f(x,s);if(d.hasEagerState=!0,d.eagerState=w,Se(w,x))return Ir(e,t,d,0),nn===null&&Pr(),!1}catch{}finally{}if(s=Au(e,t,d,a),s!==null)return xs(s,e,a),B_(s,t,a),!0}return!1}function md(e,t,s,a){if(a={lane:2,revertLane:Wd(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ac(e)){if(t)throw Error(l(479))}else t=Au(e,s,a,2),t!==null&&xs(t,e,2)}function ac(e){var t=e.alternate;return e===gt||t!==null&&t===gt}function z_(e,t){Ta=Jr=!0;var s=e.pending;s===null?t.next=t:(t.next=s.next,s.next=t),e.pending=t}function B_(e,t,s){if((s&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,s|=a,t.lanes=s,Yn(e,s)}}var Rl={readContext:Qn,use:nc,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useLayoutEffect:Sn,useInsertionEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useSyncExternalStore:Sn,useId:Sn,useHostTransitionStatus:Sn,useFormState:Sn,useActionState:Sn,useOptimistic:Sn,useMemoCache:Sn,useCacheRefresh:Sn};Rl.useEffectEvent=Sn;var $_={readContext:Qn,use:nc,useCallback:function(e,t){return cs().memoizedState=[e,t===void 0?null:t],e},useContext:Qn,useEffect:v_,useImperativeHandle:function(e,t,s){s=s!=null?s.concat([e]):null,oc(4194308,4,C_.bind(null,t,e),s)},useLayoutEffect:function(e,t){return oc(4194308,4,e,t)},useInsertionEffect:function(e,t){oc(4,2,e,t)},useMemo:function(e,t){var s=cs();t=t===void 0?null:t;var a=e();if(Fi){me(!0);try{e()}finally{me(!1)}}return s.memoizedState=[a,t],a},useReducer:function(e,t,s){var a=cs();if(s!==void 0){var d=s(t);if(Fi){me(!0);try{s(t)}finally{me(!1)}}}else d=t;return a.memoizedState=a.baseState=d,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:d},a.queue=e,e=e.dispatch=By.bind(null,gt,e),[a.memoizedState,e]},useRef:function(e){var t=cs();return e={current:e},t.memoizedState=e},useState:function(e){e=rd(e);var t=e.queue,s=O_.bind(null,gt,t);return t.dispatch=s,[e.memoizedState,s]},useDebugValue:dd,useDeferredValue:function(e,t){var s=cs();return fd(s,e,t)},useTransition:function(){var e=rd(!1);return e=R_.bind(null,gt,e.queue,!0,!1),cs().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,s){var a=gt,d=cs();if(zt){if(s===void 0)throw Error(l(407));s=s()}else{if(s=t(),nn===null)throw Error(l(349));(Nt&127)!==0||i_(a,t,s)}d.memoizedState=s;var f={value:s,getSnapshot:t};return d.queue=f,v_(l_.bind(null,a,f,e),[e]),a.flags|=2048,Da(9,{destroy:void 0},a_.bind(null,a,f,s,t),null),s},useId:function(){var e=cs(),t=nn.identifierPrefix;if(zt){var s=xo,a=yo;s=(a&~(1<<32-it(a)-1)).toString(32)+s,t="_"+t+"R_"+s,s=ec++,0<s&&(t+="H"+s.toString(32)),t+="_"}else s=Ry++,t="_"+t+"r_"+s.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:_d,useFormState:p_,useActionState:p_,useOptimistic:function(e){var t=cs();t.memoizedState=t.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=s,t=md.bind(null,gt,!0,s),s.dispatch=t,[e,t]},useMemoCache:id,useCacheRefresh:function(){return cs().memoizedState=zy.bind(null,gt)},useEffectEvent:function(e){var t=cs(),s={impl:e};return t.memoizedState=s,function(){if((It&2)!==0)throw Error(l(440));return s.impl.apply(void 0,arguments)}}},pd={readContext:Qn,use:nc,useCallback:M_,useContext:Qn,useEffect:ud,useImperativeHandle:j_,useInsertionEffect:S_,useLayoutEffect:k_,useMemo:E_,useReducer:sc,useRef:b_,useState:function(){return sc(No)},useDebugValue:dd,useDeferredValue:function(e,t){var s=Tn();return T_(s,Vt.memoizedState,e,t)},useTransition:function(){var e=sc(No)[0],t=Tn().memoizedState;return[typeof e=="boolean"?e:El(e),t]},useSyncExternalStore:o_,useId:N_,useHostTransitionStatus:_d,useFormState:g_,useActionState:g_,useOptimistic:function(e,t){var s=Tn();return u_(s,Vt,e,t)},useMemoCache:id,useCacheRefresh:L_};pd.useEffectEvent=w_;var P_={readContext:Qn,use:nc,useCallback:M_,useContext:Qn,useEffect:ud,useImperativeHandle:j_,useInsertionEffect:S_,useLayoutEffect:k_,useMemo:E_,useReducer:ld,useRef:b_,useState:function(){return ld(No)},useDebugValue:dd,useDeferredValue:function(e,t){var s=Tn();return Vt===null?fd(s,e,t):T_(s,Vt.memoizedState,e,t)},useTransition:function(){var e=ld(No)[0],t=Tn().memoizedState;return[typeof e=="boolean"?e:El(e),t]},useSyncExternalStore:o_,useId:N_,useHostTransitionStatus:_d,useFormState:x_,useActionState:x_,useOptimistic:function(e,t){var s=Tn();return Vt!==null?u_(s,Vt,e,t):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:id,useCacheRefresh:L_};P_.useEffectEvent=w_;function gd(e,t,s,a){t=e.memoizedState,s=s(a,t),s=s==null?t:y({},t,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var yd={enqueueSetState:function(e,t,s){e=e._reactInternals;var a=Ds(),d=ri(a);d.payload=t,s!=null&&(d.callback=s),t=ci(e,d,a),t!==null&&(xs(t,e,a),kl(t,e,a))},enqueueReplaceState:function(e,t,s){e=e._reactInternals;var a=Ds(),d=ri(a);d.tag=1,d.payload=t,s!=null&&(d.callback=s),t=ci(e,d,a),t!==null&&(xs(t,e,a),kl(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var s=Ds(),a=ri(s);a.tag=2,t!=null&&(a.callback=t),t=ci(e,a,s),t!==null&&(xs(t,e,s),kl(t,e,s))}};function I_(e,t,s,a,d,f,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,f,x):t.prototype&&t.prototype.isPureReactComponent?!tn(s,a)||!tn(d,f):!0}function U_(e,t,s,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(s,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(s,a),t.state!==e&&yd.enqueueReplaceState(t,t.state,null)}function Gi(e,t){var s=t;if("ref"in t){s={};for(var a in t)a!=="ref"&&(s[a]=t[a])}if(e=e.defaultProps){s===t&&(s=y({},s));for(var d in e)s[d]===void 0&&(s[d]=e[d])}return s}function H_(e){$r(e)}function Y_(e){console.error(e)}function X_(e){$r(e)}function lc(e,t){try{var s=e.onUncaughtError;s(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function F_(e,t,s){try{var a=e.onCaughtError;a(s.value,{componentStack:s.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function xd(e,t,s){return s=ri(s),s.tag=3,s.payload={element:null},s.callback=function(){lc(e,t)},s}function G_(e){return e=ri(e),e.tag=3,e}function W_(e,t,s,a){var d=s.type.getDerivedStateFromError;if(typeof d=="function"){var f=a.value;e.payload=function(){return d(f)},e.callback=function(){F_(t,s,a)}}var x=s.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){F_(t,s,a),typeof d!="function"&&(mi===null?mi=new Set([this]):mi.add(this));var w=a.stack;this.componentDidCatch(a.value,{componentStack:w!==null?w:""})})}function $y(e,t,s,a,d){if(s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=s.alternate,t!==null&&Sa(t,s,d,!0),s=Ms.current,s!==null){switch(s.tag){case 31:case 13:return Ys===null?xc():s.alternate===null&&kn===0&&(kn=3),s.flags&=-257,s.flags|=65536,s.lanes=d,a===qr?s.flags|=16384:(t=s.updateQueue,t===null?s.updateQueue=new Set([a]):t.add(a),Xd(e,a,d)),!1;case 22:return s.flags|=65536,a===qr?s.flags|=16384:(t=s.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},s.updateQueue=t):(s=t.retryQueue,s===null?t.retryQueue=new Set([a]):s.add(a)),Xd(e,a,d)),!1}throw Error(l(435,s.tag))}return Xd(e,a,d),xc(),!1}if(zt)return t=Ms.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=d,a!==$u&&(e=Error(l(422),{cause:a}),xl(Ps(e,s)))):(a!==$u&&(t=Error(l(423),{cause:a}),xl(Ps(t,s))),e=e.current.alternate,e.flags|=65536,d&=-d,e.lanes|=d,a=Ps(a,s),d=xd(e.stateNode,a,d),Qu(e,d),kn!==4&&(kn=2)),!1;var f=Error(l(520),{cause:a});if(f=Ps(f,s),$l===null?$l=[f]:$l.push(f),kn!==4&&(kn=2),t===null)return!0;a=Ps(a,s),s=t;do{switch(s.tag){case 3:return s.flags|=65536,e=d&-d,s.lanes|=e,e=xd(s.stateNode,a,e),Qu(s,e),!1;case 1:if(t=s.type,f=s.stateNode,(s.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(mi===null||!mi.has(f))))return s.flags|=65536,d&=-d,s.lanes|=d,d=G_(d),W_(d,e,s,a),Qu(s,d),!1}s=s.return}while(s!==null);return!1}var bd=Error(l(461)),Bn=!1;function Vn(e,t,s,a){t.child=e===null?Kh(t,null,s,a):Xi(t,e.child,s,a)}function q_(e,t,s,a,d){s=s.render;var f=t.ref;if("ref"in a){var x={};for(var w in a)w!=="ref"&&(x[w]=a[w])}else x=a;return Ii(t),a=td(e,t,s,x,f,d),w=nd(),e!==null&&!Bn?(sd(e,t,d),Lo(e,t,d)):(zt&&w&&zu(t),t.flags|=1,Vn(e,t,a,d),t.child)}function Q_(e,t,s,a,d){if(e===null){var f=s.type;return typeof f=="function"&&!Nu(f)&&f.defaultProps===void 0&&s.compare===null?(t.tag=15,t.type=f,V_(e,t,f,a,d)):(e=Hr(s.type,null,a,t,t.mode,d),e.ref=t.ref,e.return=t,t.child=e)}if(f=e.child,!Ed(e,d)){var x=f.memoizedProps;if(s=s.compare,s=s!==null?s:tn,s(x,a)&&e.ref===t.ref)return Lo(e,t,d)}return t.flags|=1,e=Eo(f,a),e.ref=t.ref,e.return=t,t.child=e}function V_(e,t,s,a,d){if(e!==null){var f=e.memoizedProps;if(tn(f,a)&&e.ref===t.ref)if(Bn=!1,t.pendingProps=a=f,Ed(e,d))(e.flags&131072)!==0&&(Bn=!0);else return t.lanes=e.lanes,Lo(e,t,d)}return vd(e,t,s,a,d)}function K_(e,t,s,a){var d=a.children,f=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(f=f!==null?f.baseLanes|s:s,e!==null){for(a=t.child=e.child,d=0;a!==null;)d=d|a.lanes|a.childLanes,a=a.sibling;a=d&~f}else a=0,t.child=null;return Z_(e,t,f,s,a)}if((s&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Gr(t,f!==null?f.cachePool:null),f!==null?e_(t,f):Ku(),t_(t);else return a=t.lanes=536870912,Z_(e,t,f!==null?f.baseLanes|s:s,s,a)}else f!==null?(Gr(t,f.cachePool),e_(t,f),di(),t.memoizedState=null):(e!==null&&Gr(t,null),Ku(),di());return Vn(e,t,d,s),t.child}function Dl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Z_(e,t,s,a,d){var f=Fu();return f=f===null?null:{parent:On._currentValue,pool:f},t.memoizedState={baseLanes:s,cachePool:f},e!==null&&Gr(t,null),Ku(),t_(t),e!==null&&Sa(e,t,a,!0),t.childLanes=d,null}function rc(e,t){return t=uc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function J_(e,t,s){return Xi(t,e.child,null,s),e=rc(t,t.pendingProps),e.flags|=2,Es(t),t.memoizedState=null,e}function Py(e,t,s){var a=t.pendingProps,d=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(zt){if(a.mode==="hidden")return e=rc(t,a),t.lanes=536870912,Dl(null,e);if(Ju(t),(e=cn)?(e=dm(e,Hs),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:si!==null?{id:yo,overflow:xo}:null,retryLane:536870912,hydrationErrors:null},s=zh(e),s.return=t,t.child=s,qn=t,cn=null)):e=null,e===null)throw ii(t);return t.lanes=536870912,null}return rc(t,a)}var f=e.memoizedState;if(f!==null){var x=f.dehydrated;if(Ju(t),d)if(t.flags&256)t.flags&=-257,t=J_(e,t,s);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(l(558));else if(Bn||Sa(e,t,s,!1),d=(s&e.childLanes)!==0,Bn||d){if(a=nn,a!==null&&(x=In(a,s),x!==0&&x!==f.retryLane))throw f.retryLane=x,zi(e,x),xs(a,e,x),bd;xc(),t=J_(e,t,s)}else e=f.treeContext,cn=Xs(x.nextSibling),qn=t,zt=!0,oi=null,Hs=!1,e!==null&&Ph(t,e),t=rc(t,a),t.flags|=4096;return t}return e=Eo(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function cc(e,t){var s=t.ref;if(s===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(l(284));(e===null||e.ref!==s)&&(t.flags|=4194816)}}function vd(e,t,s,a,d){return Ii(t),s=td(e,t,s,a,void 0,d),a=nd(),e!==null&&!Bn?(sd(e,t,d),Lo(e,t,d)):(zt&&a&&zu(t),t.flags|=1,Vn(e,t,s,d),t.child)}function e0(e,t,s,a,d,f){return Ii(t),t.updateQueue=null,s=s_(t,a,s,d),n_(e),a=nd(),e!==null&&!Bn?(sd(e,t,f),Lo(e,t,f)):(zt&&a&&zu(t),t.flags|=1,Vn(e,t,s,f),t.child)}function t0(e,t,s,a,d){if(Ii(t),t.stateNode===null){var f=xa,x=s.contextType;typeof x=="object"&&x!==null&&(f=Qn(x)),f=new s(a,f),t.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=yd,t.stateNode=f,f._reactInternals=t,f=t.stateNode,f.props=a,f.state=t.memoizedState,f.refs={},Wu(t),x=s.contextType,f.context=typeof x=="object"&&x!==null?Qn(x):xa,f.state=t.memoizedState,x=s.getDerivedStateFromProps,typeof x=="function"&&(gd(t,s,x,a),f.state=t.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&yd.enqueueReplaceState(f,f.state,null),jl(t,a,f,d),Cl(),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){f=t.stateNode;var w=t.memoizedProps,R=Gi(s,w);f.props=R;var H=f.context,ee=s.contextType;x=xa,typeof ee=="object"&&ee!==null&&(x=Qn(ee));var ae=s.getDerivedStateFromProps;ee=typeof ae=="function"||typeof f.getSnapshotBeforeUpdate=="function",w=t.pendingProps!==w,ee||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(w||H!==x)&&U_(t,f,a,x),li=!1;var X=t.memoizedState;f.state=X,jl(t,a,f,d),Cl(),H=t.memoizedState,w||X!==H||li?(typeof ae=="function"&&(gd(t,s,ae,a),H=t.memoizedState),(R=li||I_(t,s,R,a,X,H,x))?(ee||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(t.flags|=4194308)):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=H),f.props=a,f.state=H,f.context=x,a=R):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{f=t.stateNode,qu(e,t),x=t.memoizedProps,ee=Gi(s,x),f.props=ee,ae=t.pendingProps,X=f.context,H=s.contextType,R=xa,typeof H=="object"&&H!==null&&(R=Qn(H)),w=s.getDerivedStateFromProps,(H=typeof w=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==ae||X!==R)&&U_(t,f,a,R),li=!1,X=t.memoizedState,f.state=X,jl(t,a,f,d),Cl();var q=t.memoizedState;x!==ae||X!==q||li||e!==null&&e.dependencies!==null&&Xr(e.dependencies)?(typeof w=="function"&&(gd(t,s,w,a),q=t.memoizedState),(ee=li||I_(t,s,ee,a,X,q,R)||e!==null&&e.dependencies!==null&&Xr(e.dependencies))?(H||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(a,q,R),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(a,q,R)),typeof f.componentDidUpdate=="function"&&(t.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&X===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&X===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=q),f.props=a,f.state=q,f.context=R,a=ee):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&X===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&X===e.memoizedState||(t.flags|=1024),a=!1)}return f=a,cc(e,t),a=(t.flags&128)!==0,f||a?(f=t.stateNode,s=a&&typeof s.getDerivedStateFromError!="function"?null:f.render(),t.flags|=1,e!==null&&a?(t.child=Xi(t,e.child,null,d),t.child=Xi(t,null,s,d)):Vn(e,t,s,d),t.memoizedState=f.state,e=t.child):e=Lo(e,t,d),e}function n0(e,t,s,a){return $i(),t.flags|=256,Vn(e,t,s,a),t.child}var wd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sd(e){return{baseLanes:e,cachePool:Fh()}}function kd(e,t,s){return e=e!==null?e.childLanes&~s:0,t&&(e|=Rs),e}function s0(e,t,s){var a=t.pendingProps,d=!1,f=(t.flags&128)!==0,x;if((x=f)||(x=e!==null&&e.memoizedState===null?!1:(En.current&2)!==0),x&&(d=!0,t.flags&=-129),x=(t.flags&32)!==0,t.flags&=-33,e===null){if(zt){if(d?ui(t):di(),(e=cn)?(e=dm(e,Hs),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:si!==null?{id:yo,overflow:xo}:null,retryLane:536870912,hydrationErrors:null},s=zh(e),s.return=t,t.child=s,qn=t,cn=null)):e=null,e===null)throw ii(t);return lf(e)?t.lanes=32:t.lanes=536870912,null}var w=a.children;return a=a.fallback,d?(di(),d=t.mode,w=uc({mode:"hidden",children:w},d),a=Bi(a,d,s,null),w.return=t,a.return=t,w.sibling=a,t.child=w,a=t.child,a.memoizedState=Sd(s),a.childLanes=kd(e,x,s),t.memoizedState=wd,Dl(null,a)):(ui(t),Cd(t,w))}var R=e.memoizedState;if(R!==null&&(w=R.dehydrated,w!==null)){if(f)t.flags&256?(ui(t),t.flags&=-257,t=jd(e,t,s)):t.memoizedState!==null?(di(),t.child=e.child,t.flags|=128,t=null):(di(),w=a.fallback,d=t.mode,a=uc({mode:"visible",children:a.children},d),w=Bi(w,d,s,null),w.flags|=2,a.return=t,w.return=t,a.sibling=w,t.child=a,Xi(t,e.child,null,s),a=t.child,a.memoizedState=Sd(s),a.childLanes=kd(e,x,s),t.memoizedState=wd,t=Dl(null,a));else if(ui(t),lf(w)){if(x=w.nextSibling&&w.nextSibling.dataset,x)var H=x.dgst;x=H,a=Error(l(419)),a.stack="",a.digest=x,xl({value:a,source:null,stack:null}),t=jd(e,t,s)}else if(Bn||Sa(e,t,s,!1),x=(s&e.childLanes)!==0,Bn||x){if(x=nn,x!==null&&(a=In(x,s),a!==0&&a!==R.retryLane))throw R.retryLane=a,zi(e,a),xs(x,e,a),bd;af(w)||xc(),t=jd(e,t,s)}else af(w)?(t.flags|=192,t.child=e.child,t=null):(e=R.treeContext,cn=Xs(w.nextSibling),qn=t,zt=!0,oi=null,Hs=!1,e!==null&&Ph(t,e),t=Cd(t,a.children),t.flags|=4096);return t}return d?(di(),w=a.fallback,d=t.mode,R=e.child,H=R.sibling,a=Eo(R,{mode:"hidden",children:a.children}),a.subtreeFlags=R.subtreeFlags&65011712,H!==null?w=Eo(H,w):(w=Bi(w,d,s,null),w.flags|=2),w.return=t,a.return=t,a.sibling=w,t.child=a,Dl(null,a),a=t.child,w=e.child.memoizedState,w===null?w=Sd(s):(d=w.cachePool,d!==null?(R=On._currentValue,d=d.parent!==R?{parent:R,pool:R}:d):d=Fh(),w={baseLanes:w.baseLanes|s,cachePool:d}),a.memoizedState=w,a.childLanes=kd(e,x,s),t.memoizedState=wd,Dl(e.child,a)):(ui(t),s=e.child,e=s.sibling,s=Eo(s,{mode:"visible",children:a.children}),s.return=t,s.sibling=null,e!==null&&(x=t.deletions,x===null?(t.deletions=[e],t.flags|=16):x.push(e)),t.child=s,t.memoizedState=null,s)}function Cd(e,t){return t=uc({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function uc(e,t){return e=js(22,e,null,t),e.lanes=0,e}function jd(e,t,s){return Xi(t,e.child,null,s),e=Cd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function o0(e,t,s){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Uu(e.return,t,s)}function Md(e,t,s,a,d,f){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:s,tailMode:d,treeForkCount:f}:(x.isBackwards=t,x.rendering=null,x.renderingStartTime=0,x.last=a,x.tail=s,x.tailMode=d,x.treeForkCount=f)}function i0(e,t,s){var a=t.pendingProps,d=a.revealOrder,f=a.tail;a=a.children;var x=En.current,w=(x&2)!==0;if(w?(x=x&1|2,t.flags|=128):x&=1,pe(En,x),Vn(e,t,a,s),a=zt?yl:0,!w&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&o0(e,s,t);else if(e.tag===19)o0(e,s,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(d){case"forwards":for(s=t.child,d=null;s!==null;)e=s.alternate,e!==null&&Zr(e)===null&&(d=s),s=s.sibling;s=d,s===null?(d=t.child,t.child=null):(d=s.sibling,s.sibling=null),Md(t,!1,d,s,f,a);break;case"backwards":case"unstable_legacy-backwards":for(s=null,d=t.child,t.child=null;d!==null;){if(e=d.alternate,e!==null&&Zr(e)===null){t.child=d;break}e=d.sibling,d.sibling=s,s=d,d=e}Md(t,!0,s,null,f,a);break;case"together":Md(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Lo(e,t,s){if(e!==null&&(t.dependencies=e.dependencies),_i|=t.lanes,(s&t.childLanes)===0)if(e!==null){if(Sa(e,t,s,!1),(s&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,s=Eo(e,e.pendingProps),t.child=s,s.return=t;e.sibling!==null;)e=e.sibling,s=s.sibling=Eo(e,e.pendingProps),s.return=t;s.sibling=null}return t.child}function Ed(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Xr(e)))}function Iy(e,t,s){switch(t.tag){case 3:en(t,t.stateNode.containerInfo),ai(t,On,e.memoizedState.cache),$i();break;case 27:case 5:ve(t);break;case 4:en(t,t.stateNode.containerInfo);break;case 10:ai(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ju(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(ui(t),t.flags|=128,null):(s&t.child.childLanes)!==0?s0(e,t,s):(ui(t),e=Lo(e,t,s),e!==null?e.sibling:null);ui(t);break;case 19:var d=(e.flags&128)!==0;if(a=(s&t.childLanes)!==0,a||(Sa(e,t,s,!1),a=(s&t.childLanes)!==0),d){if(a)return i0(e,t,s);t.flags|=128}if(d=t.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),pe(En,En.current),a)break;return null;case 22:return t.lanes=0,K_(e,t,s,t.pendingProps);case 24:ai(t,On,e.memoizedState.cache)}return Lo(e,t,s)}function a0(e,t,s){if(e!==null)if(e.memoizedProps!==t.pendingProps)Bn=!0;else{if(!Ed(e,s)&&(t.flags&128)===0)return Bn=!1,Iy(e,t,s);Bn=(e.flags&131072)!==0}else Bn=!1,zt&&(t.flags&1048576)!==0&&$h(t,yl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Hi(t.elementType),t.type=e,typeof e=="function")Nu(e)?(a=Gi(e,a),t.tag=1,t=t0(null,t,e,a,s)):(t.tag=0,t=vd(null,t,e,a,s));else{if(e!=null){var d=e.$$typeof;if(d===z){t.tag=11,t=q_(null,t,e,a,s);break e}else if(d===G){t.tag=14,t=Q_(null,t,e,a,s);break e}}throw t=oe(e)||e,Error(l(306,t,""))}}return t;case 0:return vd(e,t,t.type,t.pendingProps,s);case 1:return a=t.type,d=Gi(a,t.pendingProps),t0(e,t,a,d,s);case 3:e:{if(en(t,t.stateNode.containerInfo),e===null)throw Error(l(387));a=t.pendingProps;var f=t.memoizedState;d=f.element,qu(e,t),jl(t,a,null,s);var x=t.memoizedState;if(a=x.cache,ai(t,On,a),a!==f.cache&&Hu(t,[On],s,!0),Cl(),a=x.element,f.isDehydrated)if(f={element:a,isDehydrated:!1,cache:x.cache},t.updateQueue.baseState=f,t.memoizedState=f,t.flags&256){t=n0(e,t,a,s);break e}else if(a!==d){d=Ps(Error(l(424)),t),xl(d),t=n0(e,t,a,s);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(cn=Xs(e.firstChild),qn=t,zt=!0,oi=null,Hs=!0,s=Kh(t,null,a,s),t.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if($i(),a===d){t=Lo(e,t,s);break e}Vn(e,t,a,s)}t=t.child}return t;case 26:return cc(e,t),e===null?(s=gm(t.type,null,t.pendingProps,null))?t.memoizedState=s:zt||(s=t.type,e=t.pendingProps,a=jc(rt.current).createElement(s),a[Yt]=t,a[jn]=e,Kn(a,s,e),Nn(a),t.stateNode=a):t.memoizedState=gm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ve(t),e===null&&zt&&(a=t.stateNode=_m(t.type,t.pendingProps,rt.current),qn=t,Hs=!0,d=cn,xi(t.type)?(rf=d,cn=Xs(a.firstChild)):cn=d),Vn(e,t,t.pendingProps.children,s),cc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&zt&&((d=a=cn)&&(a=p1(a,t.type,t.pendingProps,Hs),a!==null?(t.stateNode=a,qn=t,cn=Xs(a.firstChild),Hs=!1,d=!0):d=!1),d||ii(t)),ve(t),d=t.type,f=t.pendingProps,x=e!==null?e.memoizedProps:null,a=f.children,nf(d,f)?a=null:x!==null&&nf(d,x)&&(t.flags|=32),t.memoizedState!==null&&(d=td(e,t,Dy,null,null,s),Gl._currentValue=d),cc(e,t),Vn(e,t,a,s),t.child;case 6:return e===null&&zt&&((e=s=cn)&&(s=g1(s,t.pendingProps,Hs),s!==null?(t.stateNode=s,qn=t,cn=null,e=!0):e=!1),e||ii(t)),null;case 13:return s0(e,t,s);case 4:return en(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Xi(t,null,a,s):Vn(e,t,a,s),t.child;case 11:return q_(e,t,t.type,t.pendingProps,s);case 7:return Vn(e,t,t.pendingProps,s),t.child;case 8:return Vn(e,t,t.pendingProps.children,s),t.child;case 12:return Vn(e,t,t.pendingProps.children,s),t.child;case 10:return a=t.pendingProps,ai(t,t.type,a.value),Vn(e,t,a.children,s),t.child;case 9:return d=t.type._context,a=t.pendingProps.children,Ii(t),d=Qn(d),a=a(d),t.flags|=1,Vn(e,t,a,s),t.child;case 14:return Q_(e,t,t.type,t.pendingProps,s);case 15:return V_(e,t,t.type,t.pendingProps,s);case 19:return i0(e,t,s);case 31:return Py(e,t,s);case 22:return K_(e,t,s,t.pendingProps);case 24:return Ii(t),a=Qn(On),e===null?(d=Fu(),d===null&&(d=nn,f=Yu(),d.pooledCache=f,f.refCount++,f!==null&&(d.pooledCacheLanes|=s),d=f),t.memoizedState={parent:a,cache:d},Wu(t),ai(t,On,d)):((e.lanes&s)!==0&&(qu(e,t),jl(t,null,null,s),Cl()),d=e.memoizedState,f=t.memoizedState,d.parent!==a?(d={parent:a,cache:a},t.memoizedState=d,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=d),ai(t,On,a)):(a=f.cache,ai(t,On,a),a!==d.cache&&Hu(t,[On],s,!0))),Vn(e,t,t.pendingProps.children,s),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function Oo(e){e.flags|=4}function Td(e,t,s,a,d){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(d&335544128)===d)if(e.stateNode.complete)e.flags|=8192;else if(N0())e.flags|=8192;else throw Yi=qr,Gu}else e.flags&=-16777217}function l0(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!wm(t))if(N0())e.flags|=8192;else throw Yi=qr,Gu}function dc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?_t():536870912,e.lanes|=t,Oa|=t)}function Al(e,t){if(!zt)switch(e.tailMode){case"hidden":t=e.tail;for(var s=null;t!==null;)t.alternate!==null&&(s=t),t=t.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function un(e){var t=e.alternate!==null&&e.alternate.child===e.child,s=0,a=0;if(t)for(var d=e.child;d!==null;)s|=d.lanes|d.childLanes,a|=d.subtreeFlags&65011712,a|=d.flags&65011712,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)s|=d.lanes|d.childLanes,a|=d.subtreeFlags,a|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=a,e.childLanes=s,t}function Uy(e,t,s){var a=t.pendingProps;switch(Bu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return un(t),null;case 1:return un(t),null;case 3:return s=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Do(On),Qe(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(wa(t)?Oo(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Pu())),un(t),null;case 26:var d=t.type,f=t.memoizedState;return e===null?(Oo(t),f!==null?(un(t),l0(t,f)):(un(t),Td(t,d,null,a,s))):f?f!==e.memoizedState?(Oo(t),un(t),l0(t,f)):(un(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Oo(t),un(t),Td(t,d,e,a,s)),null;case 27:if(ft(t),s=rt.current,d=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Oo(t);else{if(!a){if(t.stateNode===null)throw Error(l(166));return un(t),null}e=Me.current,wa(t)?Ih(t):(e=_m(d,a,s),t.stateNode=e,Oo(t))}return un(t),null;case 5:if(ft(t),d=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Oo(t);else{if(!a){if(t.stateNode===null)throw Error(l(166));return un(t),null}if(f=Me.current,wa(t))Ih(t);else{var x=jc(rt.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",d);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;default:switch(d){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",d);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof a.is=="string"?x.createElement("select",{is:a.is}):x.createElement("select"),a.multiple?f.multiple=!0:a.size&&(f.size=a.size);break;default:f=typeof a.is=="string"?x.createElement(d,{is:a.is}):x.createElement(d)}}f[Yt]=t,f[jn]=a;e:for(x=t.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===t)break e;for(;x.sibling===null;){if(x.return===null||x.return===t)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}t.stateNode=f;e:switch(Kn(f,d,a),d){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Oo(t)}}return un(t),Td(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,s),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Oo(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(l(166));if(e=rt.current,wa(t)){if(e=t.stateNode,s=t.memoizedProps,a=null,d=qn,d!==null)switch(d.tag){case 27:case 5:a=d.memoizedProps}e[Yt]=t,e=!!(e.nodeValue===s||a!==null&&a.suppressHydrationWarning===!0||sm(e.nodeValue,s)),e||ii(t,!0)}else e=jc(e).createTextNode(a),e[Yt]=t,t.stateNode=e}return un(t),null;case 31:if(s=t.memoizedState,e===null||e.memoizedState!==null){if(a=wa(t),s!==null){if(e===null){if(!a)throw Error(l(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(557));e[Yt]=t}else $i(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;un(t),e=!1}else s=Pu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return t.flags&256?(Es(t),t):(Es(t),null);if((t.flags&128)!==0)throw Error(l(558))}return un(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(d=wa(t),a!==null&&a.dehydrated!==null){if(e===null){if(!d)throw Error(l(318));if(d=t.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(l(317));d[Yt]=t}else $i(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;un(t),d=!1}else d=Pu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=d),d=!0;if(!d)return t.flags&256?(Es(t),t):(Es(t),null)}return Es(t),(t.flags&128)!==0?(t.lanes=s,t):(s=a!==null,e=e!==null&&e.memoizedState!==null,s&&(a=t.child,d=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(d=a.alternate.memoizedState.cachePool.pool),f=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(f=a.memoizedState.cachePool.pool),f!==d&&(a.flags|=2048)),s!==e&&s&&(t.child.flags|=8192),dc(t,t.updateQueue),un(t),null);case 4:return Qe(),e===null&&Kd(t.stateNode.containerInfo),un(t),null;case 10:return Do(t.type),un(t),null;case 19:if(Z(En),a=t.memoizedState,a===null)return un(t),null;if(d=(t.flags&128)!==0,f=a.rendering,f===null)if(d)Al(a,!1);else{if(kn!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(f=Zr(e),f!==null){for(t.flags|=128,Al(a,!1),e=f.updateQueue,t.updateQueue=e,dc(t,e),t.subtreeFlags=0,e=s,s=t.child;s!==null;)Oh(s,e),s=s.sibling;return pe(En,En.current&1|2),zt&&To(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&Re()>pc&&(t.flags|=128,d=!0,Al(a,!1),t.lanes=4194304)}else{if(!d)if(e=Zr(f),e!==null){if(t.flags|=128,d=!0,e=e.updateQueue,t.updateQueue=e,dc(t,e),Al(a,!0),a.tail===null&&a.tailMode==="hidden"&&!f.alternate&&!zt)return un(t),null}else 2*Re()-a.renderingStartTime>pc&&s!==536870912&&(t.flags|=128,d=!0,Al(a,!1),t.lanes=4194304);a.isBackwards?(f.sibling=t.child,t.child=f):(e=a.last,e!==null?e.sibling=f:t.child=f,a.last=f)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Re(),e.sibling=null,s=En.current,pe(En,d?s&1|2:s&1),zt&&To(t,a.treeForkCount),e):(un(t),null);case 22:case 23:return Es(t),Zu(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(s&536870912)!==0&&(t.flags&128)===0&&(un(t),t.subtreeFlags&6&&(t.flags|=8192)):un(t),s=t.updateQueue,s!==null&&dc(t,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==s&&(t.flags|=2048),e!==null&&Z(Ui),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),t.memoizedState.cache!==s&&(t.flags|=2048),Do(On),un(t),null;case 25:return null;case 30:return null}throw Error(l(156,t.tag))}function Hy(e,t){switch(Bu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Do(On),Qe(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ft(t),null;case 31:if(t.memoizedState!==null){if(Es(t),t.alternate===null)throw Error(l(340));$i()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Es(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));$i()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(En),null;case 4:return Qe(),null;case 10:return Do(t.type),null;case 22:case 23:return Es(t),Zu(),e!==null&&Z(Ui),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Do(On),null;case 25:return null;default:return null}}function r0(e,t){switch(Bu(t),t.tag){case 3:Do(On),Qe();break;case 26:case 27:case 5:ft(t);break;case 4:Qe();break;case 31:t.memoizedState!==null&&Es(t);break;case 13:Es(t);break;case 19:Z(En);break;case 10:Do(t.type);break;case 22:case 23:Es(t),Zu(),e!==null&&Z(Ui);break;case 24:Do(On)}}function Nl(e,t){try{var s=t.updateQueue,a=s!==null?s.lastEffect:null;if(a!==null){var d=a.next;s=d;do{if((s.tag&e)===e){a=void 0;var f=s.create,x=s.inst;a=f(),x.destroy=a}s=s.next}while(s!==d)}}catch(w){Ft(t,t.return,w)}}function fi(e,t,s){try{var a=t.updateQueue,d=a!==null?a.lastEffect:null;if(d!==null){var f=d.next;a=f;do{if((a.tag&e)===e){var x=a.inst,w=x.destroy;if(w!==void 0){x.destroy=void 0,d=t;var R=s,H=w;try{H()}catch(ee){Ft(d,R,ee)}}}a=a.next}while(a!==f)}}catch(ee){Ft(t,t.return,ee)}}function c0(e){var t=e.updateQueue;if(t!==null){var s=e.stateNode;try{Jh(t,s)}catch(a){Ft(e,e.return,a)}}}function u0(e,t,s){s.props=Gi(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(a){Ft(e,t,a)}}function Ll(e,t){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof s=="function"?e.refCleanup=s(a):s.current=a}}catch(d){Ft(e,t,d)}}function bo(e,t){var s=e.ref,a=e.refCleanup;if(s!==null)if(typeof a=="function")try{a()}catch(d){Ft(e,t,d)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(d){Ft(e,t,d)}else s.current=null}function d0(e){var t=e.type,s=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":s.autoFocus&&a.focus();break e;case"img":s.src?a.src=s.src:s.srcSet&&(a.srcset=s.srcSet)}}catch(d){Ft(e,e.return,d)}}function Rd(e,t,s){try{var a=e.stateNode;u1(a,e.type,s,t),a[jn]=t}catch(d){Ft(e,e.return,d)}}function f0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&xi(e.type)||e.tag===4}function Dd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||f0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&xi(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ad(e,t,s){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,t):(t=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,t.appendChild(e),s=s._reactRootContainer,s!=null||t.onclick!==null||(t.onclick=Qs));else if(a!==4&&(a===27&&xi(e.type)&&(s=e.stateNode,t=null),e=e.child,e!==null))for(Ad(e,t,s),e=e.sibling;e!==null;)Ad(e,t,s),e=e.sibling}function fc(e,t,s){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?s.insertBefore(e,t):s.appendChild(e);else if(a!==4&&(a===27&&xi(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(fc(e,t,s),e=e.sibling;e!==null;)fc(e,t,s),e=e.sibling}function h0(e){var t=e.stateNode,s=e.memoizedProps;try{for(var a=e.type,d=t.attributes;d.length;)t.removeAttributeNode(d[0]);Kn(t,a,s),t[Yt]=e,t[jn]=s}catch(f){Ft(e,e.return,f)}}var zo=!1,$n=!1,Nd=!1,_0=typeof WeakSet=="function"?WeakSet:Set,Fn=null;function Yy(e,t){if(e=e.containerInfo,ef=Nc,e=hn(e),ot(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var a=s.getSelection&&s.getSelection();if(a&&a.rangeCount!==0){s=a.anchorNode;var d=a.anchorOffset,f=a.focusNode;a=a.focusOffset;try{s.nodeType,f.nodeType}catch{s=null;break e}var x=0,w=-1,R=-1,H=0,ee=0,ae=e,X=null;t:for(;;){for(var q;ae!==s||d!==0&&ae.nodeType!==3||(w=x+d),ae!==f||a!==0&&ae.nodeType!==3||(R=x+a),ae.nodeType===3&&(x+=ae.nodeValue.length),(q=ae.firstChild)!==null;)X=ae,ae=q;for(;;){if(ae===e)break t;if(X===s&&++H===d&&(w=x),X===f&&++ee===a&&(R=x),(q=ae.nextSibling)!==null)break;ae=X,X=ae.parentNode}ae=q}s=w===-1||R===-1?null:{start:w,end:R}}else s=null}s=s||{start:0,end:0}}else s=null;for(tf={focusedElem:e,selectionRange:s},Nc=!1,Fn=t;Fn!==null;)if(t=Fn,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Fn=e;else for(;Fn!==null;){switch(t=Fn,f=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)d=e[s],d.ref.impl=d.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,s=t,d=f.memoizedProps,f=f.memoizedState,a=s.stateNode;try{var Ie=Gi(s.type,d);e=a.getSnapshotBeforeUpdate(Ie,f),a.__reactInternalSnapshotBeforeUpdate=e}catch(lt){Ft(s,s.return,lt)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,s=e.nodeType,s===9)of(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":of(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=t.sibling,e!==null){e.return=t.return,Fn=e;break}Fn=t.return}}function m0(e,t,s){var a=s.flags;switch(s.tag){case 0:case 11:case 15:$o(e,s),a&4&&Nl(5,s);break;case 1:if($o(e,s),a&4)if(e=s.stateNode,t===null)try{e.componentDidMount()}catch(x){Ft(s,s.return,x)}else{var d=Gi(s.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(d,t,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Ft(s,s.return,x)}}a&64&&c0(s),a&512&&Ll(s,s.return);break;case 3:if($o(e,s),a&64&&(e=s.updateQueue,e!==null)){if(t=null,s.child!==null)switch(s.child.tag){case 27:case 5:t=s.child.stateNode;break;case 1:t=s.child.stateNode}try{Jh(e,t)}catch(x){Ft(s,s.return,x)}}break;case 27:t===null&&a&4&&h0(s);case 26:case 5:$o(e,s),t===null&&a&4&&d0(s),a&512&&Ll(s,s.return);break;case 12:$o(e,s);break;case 31:$o(e,s),a&4&&y0(e,s);break;case 13:$o(e,s),a&4&&x0(e,s),a&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=Zy.bind(null,s),y1(e,s))));break;case 22:if(a=s.memoizedState!==null||zo,!a){t=t!==null&&t.memoizedState!==null||$n,d=zo;var f=$n;zo=a,($n=t)&&!f?Po(e,s,(s.subtreeFlags&8772)!==0):$o(e,s),zo=d,$n=f}break;case 30:break;default:$o(e,s)}}function p0(e){var t=e.alternate;t!==null&&(e.alternate=null,p0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ia(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var _n=null,ms=!1;function Bo(e,t,s){for(s=s.child;s!==null;)g0(e,t,s),s=s.sibling}function g0(e,t,s){if(Ce&&typeof Ce.onCommitFiberUnmount=="function")try{Ce.onCommitFiberUnmount(ze,s)}catch{}switch(s.tag){case 26:$n||bo(s,t),Bo(e,t,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:$n||bo(s,t);var a=_n,d=ms;xi(s.type)&&(_n=s.stateNode,ms=!1),Bo(e,t,s),Yl(s.stateNode),_n=a,ms=d;break;case 5:$n||bo(s,t);case 6:if(a=_n,d=ms,_n=null,Bo(e,t,s),_n=a,ms=d,_n!==null)if(ms)try{(_n.nodeType===9?_n.body:_n.nodeName==="HTML"?_n.ownerDocument.body:_n).removeChild(s.stateNode)}catch(f){Ft(s,t,f)}else try{_n.removeChild(s.stateNode)}catch(f){Ft(s,t,f)}break;case 18:_n!==null&&(ms?(e=_n,cm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Ya(e)):cm(_n,s.stateNode));break;case 4:a=_n,d=ms,_n=s.stateNode.containerInfo,ms=!0,Bo(e,t,s),_n=a,ms=d;break;case 0:case 11:case 14:case 15:fi(2,s,t),$n||fi(4,s,t),Bo(e,t,s);break;case 1:$n||(bo(s,t),a=s.stateNode,typeof a.componentWillUnmount=="function"&&u0(s,t,a)),Bo(e,t,s);break;case 21:Bo(e,t,s);break;case 22:$n=(a=$n)||s.memoizedState!==null,Bo(e,t,s),$n=a;break;default:Bo(e,t,s)}}function y0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ya(e)}catch(s){Ft(t,t.return,s)}}}function x0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ya(e)}catch(s){Ft(t,t.return,s)}}function Xy(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new _0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new _0),t;default:throw Error(l(435,e.tag))}}function hc(e,t){var s=Xy(e);t.forEach(function(a){if(!s.has(a)){s.add(a);var d=Jy.bind(null,e,a);a.then(d,d)}})}function ps(e,t){var s=t.deletions;if(s!==null)for(var a=0;a<s.length;a++){var d=s[a],f=e,x=t,w=x;e:for(;w!==null;){switch(w.tag){case 27:if(xi(w.type)){_n=w.stateNode,ms=!1;break e}break;case 5:_n=w.stateNode,ms=!1;break e;case 3:case 4:_n=w.stateNode.containerInfo,ms=!0;break e}w=w.return}if(_n===null)throw Error(l(160));g0(f,x,d),_n=null,ms=!1,f=d.alternate,f!==null&&(f.return=null),d.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)b0(t,e),t=t.sibling}var eo=null;function b0(e,t){var s=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ps(t,e),gs(e),a&4&&(fi(3,e,e.return),Nl(3,e),fi(5,e,e.return));break;case 1:ps(t,e),gs(e),a&512&&($n||s===null||bo(s,s.return)),a&64&&zo&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?a:s.concat(a))));break;case 26:var d=eo;if(ps(t,e),gs(e),a&512&&($n||s===null||bo(s,s.return)),a&4){var f=s!==null?s.memoizedState:null;if(a=e.memoizedState,s===null)if(a===null)if(e.stateNode===null){e:{a=e.type,s=e.memoizedProps,d=d.ownerDocument||d;t:switch(a){case"title":f=d.getElementsByTagName("title")[0],(!f||f[Ei]||f[Yt]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=d.createElement(a),d.head.insertBefore(f,d.querySelector("head > title"))),Kn(f,a,s),f[Yt]=e,Nn(f),a=f;break e;case"link":var x=bm("link","href",d).get(a+(s.href||""));if(x){for(var w=0;w<x.length;w++)if(f=x[w],f.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&f.getAttribute("rel")===(s.rel==null?null:s.rel)&&f.getAttribute("title")===(s.title==null?null:s.title)&&f.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){x.splice(w,1);break t}}f=d.createElement(a),Kn(f,a,s),d.head.appendChild(f);break;case"meta":if(x=bm("meta","content",d).get(a+(s.content||""))){for(w=0;w<x.length;w++)if(f=x[w],f.getAttribute("content")===(s.content==null?null:""+s.content)&&f.getAttribute("name")===(s.name==null?null:s.name)&&f.getAttribute("property")===(s.property==null?null:s.property)&&f.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&f.getAttribute("charset")===(s.charSet==null?null:s.charSet)){x.splice(w,1);break t}}f=d.createElement(a),Kn(f,a,s),d.head.appendChild(f);break;default:throw Error(l(468,a))}f[Yt]=e,Nn(f),a=f}e.stateNode=a}else vm(d,e.type,e.stateNode);else e.stateNode=xm(d,a,e.memoizedProps);else f!==a?(f===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):f.count--,a===null?vm(d,e.type,e.stateNode):xm(d,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Rd(e,e.memoizedProps,s.memoizedProps)}break;case 27:ps(t,e),gs(e),a&512&&($n||s===null||bo(s,s.return)),s!==null&&a&4&&Rd(e,e.memoizedProps,s.memoizedProps);break;case 5:if(ps(t,e),gs(e),a&512&&($n||s===null||bo(s,s.return)),e.flags&32){d=e.stateNode;try{Vo(d,"")}catch(Ie){Ft(e,e.return,Ie)}}a&4&&e.stateNode!=null&&(d=e.memoizedProps,Rd(e,d,s!==null?s.memoizedProps:d)),a&1024&&(Nd=!0);break;case 6:if(ps(t,e),gs(e),a&4){if(e.stateNode===null)throw Error(l(162));a=e.memoizedProps,s=e.stateNode;try{s.nodeValue=a}catch(Ie){Ft(e,e.return,Ie)}}break;case 3:if(Tc=null,d=eo,eo=Mc(t.containerInfo),ps(t,e),eo=d,gs(e),a&4&&s!==null&&s.memoizedState.isDehydrated)try{Ya(t.containerInfo)}catch(Ie){Ft(e,e.return,Ie)}Nd&&(Nd=!1,v0(e));break;case 4:a=eo,eo=Mc(e.stateNode.containerInfo),ps(t,e),gs(e),eo=a;break;case 12:ps(t,e),gs(e);break;case 31:ps(t,e),gs(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,hc(e,a)));break;case 13:ps(t,e),gs(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(mc=Re()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,hc(e,a)));break;case 22:d=e.memoizedState!==null;var R=s!==null&&s.memoizedState!==null,H=zo,ee=$n;if(zo=H||d,$n=ee||R,ps(t,e),$n=ee,zo=H,gs(e),a&8192)e:for(t=e.stateNode,t._visibility=d?t._visibility&-2:t._visibility|1,d&&(s===null||R||zo||$n||Wi(e)),s=null,t=e;;){if(t.tag===5||t.tag===26){if(s===null){R=s=t;try{if(f=R.stateNode,d)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{w=R.stateNode;var ae=R.memoizedProps.style,X=ae!=null&&ae.hasOwnProperty("display")?ae.display:null;w.style.display=X==null||typeof X=="boolean"?"":(""+X).trim()}}catch(Ie){Ft(R,R.return,Ie)}}}else if(t.tag===6){if(s===null){R=t;try{R.stateNode.nodeValue=d?"":R.memoizedProps}catch(Ie){Ft(R,R.return,Ie)}}}else if(t.tag===18){if(s===null){R=t;try{var q=R.stateNode;d?um(q,!0):um(R.stateNode,!1)}catch(Ie){Ft(R,R.return,Ie)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;s===t&&(s=null),t=t.return}s===t&&(s=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(s=a.retryQueue,s!==null&&(a.retryQueue=null,hc(e,s))));break;case 19:ps(t,e),gs(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,hc(e,a)));break;case 30:break;case 21:break;default:ps(t,e),gs(e)}}function gs(e){var t=e.flags;if(t&2){try{for(var s,a=e.return;a!==null;){if(f0(a)){s=a;break}a=a.return}if(s==null)throw Error(l(160));switch(s.tag){case 27:var d=s.stateNode,f=Dd(e);fc(e,f,d);break;case 5:var x=s.stateNode;s.flags&32&&(Vo(x,""),s.flags&=-33);var w=Dd(e);fc(e,w,x);break;case 3:case 4:var R=s.stateNode.containerInfo,H=Dd(e);Ad(e,H,R);break;default:throw Error(l(161))}}catch(ee){Ft(e,e.return,ee)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function v0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;v0(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function $o(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)m0(e,t.alternate,t),t=t.sibling}function Wi(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:fi(4,t,t.return),Wi(t);break;case 1:bo(t,t.return);var s=t.stateNode;typeof s.componentWillUnmount=="function"&&u0(t,t.return,s),Wi(t);break;case 27:Yl(t.stateNode);case 26:case 5:bo(t,t.return),Wi(t);break;case 22:t.memoizedState===null&&Wi(t);break;case 30:Wi(t);break;default:Wi(t)}e=e.sibling}}function Po(e,t,s){for(s=s&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,d=e,f=t,x=f.flags;switch(f.tag){case 0:case 11:case 15:Po(d,f,s),Nl(4,f);break;case 1:if(Po(d,f,s),a=f,d=a.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(H){Ft(a,a.return,H)}if(a=f,d=a.updateQueue,d!==null){var w=a.stateNode;try{var R=d.shared.hiddenCallbacks;if(R!==null)for(d.shared.hiddenCallbacks=null,d=0;d<R.length;d++)Zh(R[d],w)}catch(H){Ft(a,a.return,H)}}s&&x&64&&c0(f),Ll(f,f.return);break;case 27:h0(f);case 26:case 5:Po(d,f,s),s&&a===null&&x&4&&d0(f),Ll(f,f.return);break;case 12:Po(d,f,s);break;case 31:Po(d,f,s),s&&x&4&&y0(d,f);break;case 13:Po(d,f,s),s&&x&4&&x0(d,f);break;case 22:f.memoizedState===null&&Po(d,f,s),Ll(f,f.return);break;case 30:break;default:Po(d,f,s)}t=t.sibling}}function Ld(e,t){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&bl(s))}function Od(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&bl(e))}function to(e,t,s,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)w0(e,t,s,a),t=t.sibling}function w0(e,t,s,a){var d=t.flags;switch(t.tag){case 0:case 11:case 15:to(e,t,s,a),d&2048&&Nl(9,t);break;case 1:to(e,t,s,a);break;case 3:to(e,t,s,a),d&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&bl(e)));break;case 12:if(d&2048){to(e,t,s,a),e=t.stateNode;try{var f=t.memoizedProps,x=f.id,w=f.onPostCommit;typeof w=="function"&&w(x,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(R){Ft(t,t.return,R)}}else to(e,t,s,a);break;case 31:to(e,t,s,a);break;case 13:to(e,t,s,a);break;case 23:break;case 22:f=t.stateNode,x=t.alternate,t.memoizedState!==null?f._visibility&2?to(e,t,s,a):Ol(e,t):f._visibility&2?to(e,t,s,a):(f._visibility|=2,Aa(e,t,s,a,(t.subtreeFlags&10256)!==0||!1)),d&2048&&Ld(x,t);break;case 24:to(e,t,s,a),d&2048&&Od(t.alternate,t);break;default:to(e,t,s,a)}}function Aa(e,t,s,a,d){for(d=d&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var f=e,x=t,w=s,R=a,H=x.flags;switch(x.tag){case 0:case 11:case 15:Aa(f,x,w,R,d),Nl(8,x);break;case 23:break;case 22:var ee=x.stateNode;x.memoizedState!==null?ee._visibility&2?Aa(f,x,w,R,d):Ol(f,x):(ee._visibility|=2,Aa(f,x,w,R,d)),d&&H&2048&&Ld(x.alternate,x);break;case 24:Aa(f,x,w,R,d),d&&H&2048&&Od(x.alternate,x);break;default:Aa(f,x,w,R,d)}t=t.sibling}}function Ol(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var s=e,a=t,d=a.flags;switch(a.tag){case 22:Ol(s,a),d&2048&&Ld(a.alternate,a);break;case 24:Ol(s,a),d&2048&&Od(a.alternate,a);break;default:Ol(s,a)}t=t.sibling}}var zl=8192;function Na(e,t,s){if(e.subtreeFlags&zl)for(e=e.child;e!==null;)S0(e,t,s),e=e.sibling}function S0(e,t,s){switch(e.tag){case 26:Na(e,t,s),e.flags&zl&&e.memoizedState!==null&&R1(s,eo,e.memoizedState,e.memoizedProps);break;case 5:Na(e,t,s);break;case 3:case 4:var a=eo;eo=Mc(e.stateNode.containerInfo),Na(e,t,s),eo=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=zl,zl=16777216,Na(e,t,s),zl=a):Na(e,t,s));break;default:Na(e,t,s)}}function k0(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Bl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var s=0;s<t.length;s++){var a=t[s];Fn=a,j0(a,e)}k0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)C0(e),e=e.sibling}function C0(e){switch(e.tag){case 0:case 11:case 15:Bl(e),e.flags&2048&&fi(9,e,e.return);break;case 3:Bl(e);break;case 12:Bl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,_c(e)):Bl(e);break;default:Bl(e)}}function _c(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var s=0;s<t.length;s++){var a=t[s];Fn=a,j0(a,e)}k0(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:fi(8,t,t.return),_c(t);break;case 22:s=t.stateNode,s._visibility&2&&(s._visibility&=-3,_c(t));break;default:_c(t)}e=e.sibling}}function j0(e,t){for(;Fn!==null;){var s=Fn;switch(s.tag){case 0:case 11:case 15:fi(8,s,t);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var a=s.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:bl(s.memoizedState.cache)}if(a=s.child,a!==null)a.return=s,Fn=a;else e:for(s=e;Fn!==null;){a=Fn;var d=a.sibling,f=a.return;if(p0(a),a===s){Fn=null;break e}if(d!==null){d.return=f,Fn=d;break e}Fn=f}}}var Fy={getCacheForType:function(e){var t=Qn(On),s=t.data.get(e);return s===void 0&&(s=e(),t.data.set(e,s)),s},cacheSignal:function(){return Qn(On).controller.signal}},Gy=typeof WeakMap=="function"?WeakMap:Map,It=0,nn=null,Et=null,Nt=0,Xt=0,Ts=null,hi=!1,La=!1,zd=!1,Io=0,kn=0,_i=0,qi=0,Bd=0,Rs=0,Oa=0,$l=null,ys=null,$d=!1,mc=0,M0=0,pc=1/0,gc=null,mi=null,Hn=0,pi=null,za=null,Uo=0,Pd=0,Id=null,E0=null,Pl=0,Ud=null;function Ds(){return(It&2)!==0&&Nt!==0?Nt&-Nt:N.T!==null?Wd():Zn()}function T0(){if(Rs===0)if((Nt&536870912)===0||zt){var e=wt;wt<<=1,(wt&3932160)===0&&(wt=262144),Rs=e}else Rs=536870912;return e=Ms.current,e!==null&&(e.flags|=32),Rs}function xs(e,t,s){(e===nn&&(Xt===2||Xt===9)||e.cancelPendingCommit!==null)&&(Ba(e,0),gi(e,Nt,Rs,!1)),Fe(e,s),((It&2)===0||e!==nn)&&(e===nn&&((It&2)===0&&(qi|=s),kn===4&&gi(e,Nt,Rs,!1)),vo(e))}function R0(e,t,s){if((It&6)!==0)throw Error(l(327));var a=!s&&(t&127)===0&&(t&e.expiredLanes)===0||yt(e,t),d=a?Qy(e,t):Yd(e,t,!0),f=a;do{if(d===0){La&&!a&&gi(e,t,0,!1);break}else{if(s=e.current.alternate,f&&!Wy(s)){d=Yd(e,t,!1),f=!1;continue}if(d===2){if(f=t,e.errorRecoveryDisabledLanes&f)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){t=x;e:{var w=e;d=$l;var R=w.current.memoizedState.isDehydrated;if(R&&(Ba(w,x).flags|=256),x=Yd(w,x,!1),x!==2){if(zd&&!R){w.errorRecoveryDisabledLanes|=f,qi|=f,d=4;break e}f=ys,ys=d,f!==null&&(ys===null?ys=f:ys.push.apply(ys,f))}d=x}if(f=!1,d!==2)continue}}if(d===1){Ba(e,0),gi(e,t,0,!0);break}e:{switch(a=e,f=d,f){case 0:case 1:throw Error(l(345));case 4:if((t&4194048)!==t)break;case 6:gi(a,t,Rs,!hi);break e;case 2:ys=null;break;case 3:case 5:break;default:throw Error(l(329))}if((t&62914560)===t&&(d=mc+300-Re(),10<d)){if(gi(a,t,Rs,!hi),De(a,0,!0)!==0)break e;Uo=t,a.timeoutHandle=lm(D0.bind(null,a,s,ys,gc,$d,t,Rs,qi,Oa,hi,f,"Throttled",-0,0),d);break e}D0(a,s,ys,gc,$d,t,Rs,qi,Oa,hi,f,null,-0,0)}}break}while(!0);vo(e)}function D0(e,t,s,a,d,f,x,w,R,H,ee,ae,X,q){if(e.timeoutHandle=-1,ae=t.subtreeFlags,ae&8192||(ae&16785408)===16785408){ae={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qs},S0(t,f,ae);var Ie=(f&62914560)===f?mc-Re():(f&4194048)===f?M0-Re():0;if(Ie=D1(ae,Ie),Ie!==null){Uo=f,e.cancelPendingCommit=Ie(P0.bind(null,e,t,f,s,a,d,x,w,R,ee,ae,null,X,q)),gi(e,f,x,!H);return}}P0(e,t,f,s,a,d,x,w,R)}function Wy(e){for(var t=e;;){var s=t.tag;if((s===0||s===11||s===15)&&t.flags&16384&&(s=t.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var a=0;a<s.length;a++){var d=s[a],f=d.getSnapshot;d=d.value;try{if(!Se(f(),d))return!1}catch{return!1}}if(s=t.child,t.subtreeFlags&16384&&s!==null)s.return=t,t=s;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gi(e,t,s,a){t&=~Bd,t&=~qi,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var d=t;0<d;){var f=31-it(d),x=1<<f;a[f]=-1,d&=~x}s!==0&&vn(e,s,t)}function yc(){return(It&6)===0?(Il(0),!1):!0}function Hd(){if(Et!==null){if(Xt===0)var e=Et.return;else e=Et,Ro=Pi=null,od(e),Ma=null,wl=0,e=Et;for(;e!==null;)r0(e.alternate,e),e=e.return;Et=null}}function Ba(e,t){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,h1(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Uo=0,Hd(),nn=e,Et=s=Eo(e.current,null),Nt=t,Xt=0,Ts=null,hi=!1,La=yt(e,t),zd=!1,Oa=Rs=Bd=qi=_i=kn=0,ys=$l=null,$d=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var d=31-it(a),f=1<<d;t|=e[d],a&=~f}return Io=t,Pr(),s}function A0(e,t){gt=null,N.H=Rl,t===ja||t===Wr?(t=qh(),Xt=3):t===Gu?(t=qh(),Xt=4):Xt=t===bd?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ts=t,Et===null&&(kn=1,lc(e,Ps(t,e.current)))}function N0(){var e=Ms.current;return e===null?!0:(Nt&4194048)===Nt?Ys===null:(Nt&62914560)===Nt||(Nt&536870912)!==0?e===Ys:!1}function L0(){var e=N.H;return N.H=Rl,e===null?Rl:e}function O0(){var e=N.A;return N.A=Fy,e}function xc(){kn=4,hi||(Nt&4194048)!==Nt&&Ms.current!==null||(La=!0),(_i&134217727)===0&&(qi&134217727)===0||nn===null||gi(nn,Nt,Rs,!1)}function Yd(e,t,s){var a=It;It|=2;var d=L0(),f=O0();(nn!==e||Nt!==t)&&(gc=null,Ba(e,t)),t=!1;var x=kn;e:do try{if(Xt!==0&&Et!==null){var w=Et,R=Ts;switch(Xt){case 8:Hd(),x=6;break e;case 3:case 2:case 9:case 6:Ms.current===null&&(t=!0);var H=Xt;if(Xt=0,Ts=null,$a(e,w,R,H),s&&La){x=0;break e}break;default:H=Xt,Xt=0,Ts=null,$a(e,w,R,H)}}qy(),x=kn;break}catch(ee){A0(e,ee)}while(!0);return t&&e.shellSuspendCounter++,Ro=Pi=null,It=a,N.H=d,N.A=f,Et===null&&(nn=null,Nt=0,Pr()),x}function qy(){for(;Et!==null;)z0(Et)}function Qy(e,t){var s=It;It|=2;var a=L0(),d=O0();nn!==e||Nt!==t?(gc=null,pc=Re()+500,Ba(e,t)):La=yt(e,t);e:do try{if(Xt!==0&&Et!==null){t=Et;var f=Ts;t:switch(Xt){case 1:Xt=0,Ts=null,$a(e,t,f,1);break;case 2:case 9:if(Gh(f)){Xt=0,Ts=null,B0(t);break}t=function(){Xt!==2&&Xt!==9||nn!==e||(Xt=7),vo(e)},f.then(t,t);break e;case 3:Xt=7;break e;case 4:Xt=5;break e;case 7:Gh(f)?(Xt=0,Ts=null,B0(t)):(Xt=0,Ts=null,$a(e,t,f,7));break;case 5:var x=null;switch(Et.tag){case 26:x=Et.memoizedState;case 5:case 27:var w=Et;if(x?wm(x):w.stateNode.complete){Xt=0,Ts=null;var R=w.sibling;if(R!==null)Et=R;else{var H=w.return;H!==null?(Et=H,bc(H)):Et=null}break t}}Xt=0,Ts=null,$a(e,t,f,5);break;case 6:Xt=0,Ts=null,$a(e,t,f,6);break;case 8:Hd(),kn=6;break e;default:throw Error(l(462))}}Vy();break}catch(ee){A0(e,ee)}while(!0);return Ro=Pi=null,N.H=a,N.A=d,It=s,Et!==null?0:(nn=null,Nt=0,Pr(),kn)}function Vy(){for(;Et!==null&&!nt();)z0(Et)}function z0(e){var t=a0(e.alternate,e,Io);e.memoizedProps=e.pendingProps,t===null?bc(e):Et=t}function B0(e){var t=e,s=t.alternate;switch(t.tag){case 15:case 0:t=e0(s,t,t.pendingProps,t.type,void 0,Nt);break;case 11:t=e0(s,t,t.pendingProps,t.type.render,t.ref,Nt);break;case 5:od(t);default:r0(s,t),t=Et=Oh(t,Io),t=a0(s,t,Io)}e.memoizedProps=e.pendingProps,t===null?bc(e):Et=t}function $a(e,t,s,a){Ro=Pi=null,od(t),Ma=null,wl=0;var d=t.return;try{if($y(e,d,t,s,Nt)){kn=1,lc(e,Ps(s,e.current)),Et=null;return}}catch(f){if(d!==null)throw Et=d,f;kn=1,lc(e,Ps(s,e.current)),Et=null;return}t.flags&32768?(zt||a===1?e=!0:La||(Nt&536870912)!==0?e=!1:(hi=e=!0,(a===2||a===9||a===3||a===6)&&(a=Ms.current,a!==null&&a.tag===13&&(a.flags|=16384))),$0(t,e)):bc(t)}function bc(e){var t=e;do{if((t.flags&32768)!==0){$0(t,hi);return}e=t.return;var s=Uy(t.alternate,t,Io);if(s!==null){Et=s;return}if(t=t.sibling,t!==null){Et=t;return}Et=t=e}while(t!==null);kn===0&&(kn=5)}function $0(e,t){do{var s=Hy(e.alternate,e);if(s!==null){s.flags&=32767,Et=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!t&&(e=e.sibling,e!==null)){Et=e;return}Et=e=s}while(e!==null);kn=6,Et=null}function P0(e,t,s,a,d,f,x,w,R){e.cancelPendingCommit=null;do vc();while(Hn!==0);if((It&6)!==0)throw Error(l(327));if(t!==null){if(t===e.current)throw Error(l(177));if(f=t.lanes|t.childLanes,f|=Du,Ot(e,s,f,x,w,R),e===nn&&(Et=nn=null,Nt=0),za=t,pi=e,Uo=s,Pd=f,Id=d,E0=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,e1(Pe,function(){return X0(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=N.T,N.T=null,d=ue.p,ue.p=2,x=It,It|=4;try{Yy(e,t,s)}finally{It=x,ue.p=d,N.T=a}}Hn=1,I0(),U0(),H0()}}function I0(){if(Hn===1){Hn=0;var e=pi,t=za,s=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||s){s=N.T,N.T=null;var a=ue.p;ue.p=2;var d=It;It|=4;try{b0(t,e);var f=tf,x=hn(e.containerInfo),w=f.focusedElem,R=f.selectionRange;if(x!==w&&w&&w.ownerDocument&&At(w.ownerDocument.documentElement,w)){if(R!==null&&ot(w)){var H=R.start,ee=R.end;if(ee===void 0&&(ee=H),"selectionStart"in w)w.selectionStart=H,w.selectionEnd=Math.min(ee,w.value.length);else{var ae=w.ownerDocument||document,X=ae&&ae.defaultView||window;if(X.getSelection){var q=X.getSelection(),Ie=w.textContent.length,lt=Math.min(R.start,Ie),Zt=R.end===void 0?lt:Math.min(R.end,Ie);!q.extend&&lt>Zt&&(x=Zt,Zt=lt,lt=x);var P=gn(w,lt),L=gn(w,Zt);if(P&&L&&(q.rangeCount!==1||q.anchorNode!==P.node||q.anchorOffset!==P.offset||q.focusNode!==L.node||q.focusOffset!==L.offset)){var U=ae.createRange();U.setStart(P.node,P.offset),q.removeAllRanges(),lt>Zt?(q.addRange(U),q.extend(L.node,L.offset)):(U.setEnd(L.node,L.offset),q.addRange(U))}}}}for(ae=[],q=w;q=q.parentNode;)q.nodeType===1&&ae.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<ae.length;w++){var se=ae[w];se.element.scrollLeft=se.left,se.element.scrollTop=se.top}}Nc=!!ef,tf=ef=null}finally{It=d,ue.p=a,N.T=s}}e.current=t,Hn=2}}function U0(){if(Hn===2){Hn=0;var e=pi,t=za,s=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||s){s=N.T,N.T=null;var a=ue.p;ue.p=2;var d=It;It|=4;try{m0(e,t.alternate,t)}finally{It=d,ue.p=a,N.T=s}}Hn=3}}function H0(){if(Hn===4||Hn===3){Hn=0,Ye();var e=pi,t=za,s=Uo,a=E0;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Hn=5:(Hn=0,za=pi=null,Y0(e,e.pendingLanes));var d=e.pendingLanes;if(d===0&&(mi=null),vs(s),t=t.stateNode,Ce&&typeof Ce.onCommitFiberRoot=="function")try{Ce.onCommitFiberRoot(ze,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=N.T,d=ue.p,ue.p=2,N.T=null;try{for(var f=e.onRecoverableError,x=0;x<a.length;x++){var w=a[x];f(w.value,{componentStack:w.stack})}}finally{N.T=t,ue.p=d}}(Uo&3)!==0&&vc(),vo(e),d=e.pendingLanes,(s&261930)!==0&&(d&42)!==0?e===Ud?Pl++:(Pl=0,Ud=e):Pl=0,Il(0)}}function Y0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,bl(t)))}function vc(){return I0(),U0(),H0(),X0()}function X0(){if(Hn!==5)return!1;var e=pi,t=Pd;Pd=0;var s=vs(Uo),a=N.T,d=ue.p;try{ue.p=32>s?32:s,N.T=null,s=Id,Id=null;var f=pi,x=Uo;if(Hn=0,za=pi=null,Uo=0,(It&6)!==0)throw Error(l(331));var w=It;if(It|=4,C0(f.current),w0(f,f.current,x,s),It=w,Il(0,!1),Ce&&typeof Ce.onPostCommitFiberRoot=="function")try{Ce.onPostCommitFiberRoot(ze,f)}catch{}return!0}finally{ue.p=d,N.T=a,Y0(e,t)}}function F0(e,t,s){t=Ps(s,t),t=xd(e.stateNode,t,2),e=ci(e,t,2),e!==null&&(Fe(e,2),vo(e))}function Ft(e,t,s){if(e.tag===3)F0(e,e,s);else for(;t!==null;){if(t.tag===3){F0(t,e,s);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(mi===null||!mi.has(a))){e=Ps(s,e),s=G_(2),a=ci(t,s,2),a!==null&&(W_(s,a,t,e),Fe(a,2),vo(a));break}}t=t.return}}function Xd(e,t,s){var a=e.pingCache;if(a===null){a=e.pingCache=new Gy;var d=new Set;a.set(t,d)}else d=a.get(t),d===void 0&&(d=new Set,a.set(t,d));d.has(s)||(zd=!0,d.add(s),e=Ky.bind(null,e,t,s),t.then(e,e))}function Ky(e,t,s){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,nn===e&&(Nt&s)===s&&(kn===4||kn===3&&(Nt&62914560)===Nt&&300>Re()-mc?(It&2)===0&&Ba(e,0):Bd|=s,Oa===Nt&&(Oa=0)),vo(e)}function G0(e,t){t===0&&(t=_t()),e=zi(e,t),e!==null&&(Fe(e,t),vo(e))}function Zy(e){var t=e.memoizedState,s=0;t!==null&&(s=t.retryLane),G0(e,s)}function Jy(e,t){var s=0;switch(e.tag){case 31:case 13:var a=e.stateNode,d=e.memoizedState;d!==null&&(s=d.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(l(314))}a!==null&&a.delete(t),G0(e,s)}function e1(e,t){return Ge(e,t)}var wc=null,Pa=null,Fd=!1,Sc=!1,Gd=!1,yi=0;function vo(e){e!==Pa&&e.next===null&&(Pa===null?wc=Pa=e:Pa=Pa.next=e),Sc=!0,Fd||(Fd=!0,n1())}function Il(e,t){if(!Gd&&Sc){Gd=!0;do for(var s=!1,a=wc;a!==null;){if(e!==0){var d=a.pendingLanes;if(d===0)var f=0;else{var x=a.suspendedLanes,w=a.pingedLanes;f=(1<<31-it(42|e)+1)-1,f&=d&~(x&~w),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(s=!0,V0(a,f))}else f=Nt,f=De(a,a===nn?f:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(f&3)===0||yt(a,f)||(s=!0,V0(a,f));a=a.next}while(s);Gd=!1}}function t1(){W0()}function W0(){Sc=Fd=!1;var e=0;yi!==0&&f1()&&(e=yi);for(var t=Re(),s=null,a=wc;a!==null;){var d=a.next,f=q0(a,t);f===0?(a.next=null,s===null?wc=d:s.next=d,d===null&&(Pa=s)):(s=a,(e!==0||(f&3)!==0)&&(Sc=!0)),a=d}Hn!==0&&Hn!==5||Il(e),yi!==0&&(yi=0)}function q0(e,t){for(var s=e.suspendedLanes,a=e.pingedLanes,d=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var x=31-it(f),w=1<<x,R=d[x];R===-1?((w&s)===0||(w&a)!==0)&&(d[x]=xt(w,t)):R<=t&&(e.expiredLanes|=w),f&=~w}if(t=nn,s=Nt,s=De(e,e===t?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,s===0||e===t&&(Xt===2||Xt===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Ve(a),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||yt(e,s)){if(t=s&-s,t===e.callbackPriority)return t;switch(a!==null&&Ve(a),vs(s)){case 2:case 8:s=Ht;break;case 32:s=Pe;break;case 268435456:s=Y;break;default:s=Pe}return a=Q0.bind(null,e),s=Ge(s,a),e.callbackPriority=t,e.callbackNode=s,t}return a!==null&&a!==null&&Ve(a),e.callbackPriority=2,e.callbackNode=null,2}function Q0(e,t){if(Hn!==0&&Hn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(vc()&&e.callbackNode!==s)return null;var a=Nt;return a=De(e,e===nn?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(R0(e,a,t),q0(e,Re()),e.callbackNode!=null&&e.callbackNode===s?Q0.bind(null,e):null)}function V0(e,t){if(vc())return null;R0(e,t,!0)}function n1(){_1(function(){(It&6)!==0?Ge(St,t1):W0()})}function Wd(){if(yi===0){var e=ka;e===0&&(e=Ae,Ae<<=1,(Ae&261888)===0&&(Ae=256)),yi=e}return yi}function K0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Di(""+e)}function Z0(e,t){var s=t.ownerDocument.createElement("input");return s.name=t.name,s.value=t.value,e.id&&s.setAttribute("form",e.id),t.parentNode.insertBefore(s,t),e=new FormData(e),s.parentNode.removeChild(s),e}function s1(e,t,s,a,d){if(t==="submit"&&s&&s.stateNode===d){var f=K0((d[jn]||null).action),x=a.submitter;x&&(t=(t=x[jn]||null)?K0(t.formAction):x.getAttribute("formAction"),t!==null&&(f=t,x=null));var w=new ca("action","action",null,a,d);e.push({event:w,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(yi!==0){var R=x?Z0(d,x):new FormData(d);hd(s,{pending:!0,data:R,method:d.method,action:f},null,R)}}else typeof f=="function"&&(w.preventDefault(),R=x?Z0(d,x):new FormData(d),hd(s,{pending:!0,data:R,method:d.method,action:f},f,R))},currentTarget:d}]})}}for(var qd=0;qd<Ru.length;qd++){var Qd=Ru[qd],o1=Qd.toLowerCase(),i1=Qd[0].toUpperCase()+Qd.slice(1);Js(o1,"on"+i1)}Js(go,"onAnimationEnd"),Js(zr,"onAnimationIteration"),Js(Br,"onAnimationStart"),Js("dblclick","onDoubleClick"),Js("focusin","onFocus"),Js("focusout","onBlur"),Js(Eu,"onTransitionRun"),Js(Tu,"onTransitionStart"),Js(Sy,"onTransitionCancel"),Js(Ah,"onTransitionEnd"),Xn("onMouseEnter",["mouseout","mouseover"]),Xn("onMouseLeave",["mouseout","mouseover"]),Xn("onPointerEnter",["pointerout","pointerover"]),Xn("onPointerLeave",["pointerout","pointerover"]),Ns("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ns("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ns("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ns("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ns("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ns("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ul="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),a1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ul));function J0(e,t){t=(t&4)!==0;for(var s=0;s<e.length;s++){var a=e[s],d=a.event;a=a.listeners;e:{var f=void 0;if(t)for(var x=a.length-1;0<=x;x--){var w=a[x],R=w.instance,H=w.currentTarget;if(w=w.listener,R!==f&&d.isPropagationStopped())break e;f=w,d.currentTarget=H;try{f(d)}catch(ee){$r(ee)}d.currentTarget=null,f=R}else for(x=0;x<a.length;x++){if(w=a[x],R=w.instance,H=w.currentTarget,w=w.listener,R!==f&&d.isPropagationStopped())break e;f=w,d.currentTarget=H;try{f(d)}catch(ee){$r(ee)}d.currentTarget=null,f=R}}}}function Tt(e,t){var s=t[Jn];s===void 0&&(s=t[Jn]=new Set);var a=e+"__bubble";s.has(a)||(em(t,e,2,!1),s.add(a))}function Vd(e,t,s){var a=0;t&&(a|=4),em(s,e,a,t)}var kc="_reactListening"+Math.random().toString(36).slice(2);function Kd(e){if(!e[kc]){e[kc]=!0,sl.forEach(function(s){s!=="selectionchange"&&(a1.has(s)||Vd(s,!1,e),Vd(s,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[kc]||(t[kc]=!0,Vd("selectionchange",!1,t))}}function em(e,t,s,a){switch(Tm(t)){case 2:var d=L1;break;case 8:d=O1;break;default:d=hf}s=d.bind(null,t,s,e),d=void 0,!Ks||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(d=!0),a?d!==void 0?e.addEventListener(t,s,{capture:!0,passive:d}):e.addEventListener(t,s,!0):d!==void 0?e.addEventListener(t,s,{passive:d}):e.addEventListener(t,s,!1)}function Zd(e,t,s,a,d){var f=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var x=a.tag;if(x===3||x===4){var w=a.stateNode.containerInfo;if(w===d)break;if(x===4)for(x=a.return;x!==null;){var R=x.tag;if((R===3||R===4)&&x.stateNode.containerInfo===d)return;x=x.return}for(;w!==null;){if(x=Fo(w),x===null)return;if(R=x.tag,R===5||R===6||R===26||R===27){a=f=x;continue e}w=w.parentNode}}a=a.return}fo(function(){var H=f,ee=Vs(s),ae=[];e:{var X=Nh.get(e);if(X!==void 0){var q=ca,Ie=e;switch(e){case"keypress":if(ho(s)===0)break e;case"keydown":case"keyup":q=Er;break;case"focusin":Ie="focus",q=ha;break;case"focusout":Ie="blur",q=ha;break;case"beforeblur":case"afterblur":q=ha;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=Jo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=kr;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=Rr;break;case go:case zr:case Br:q=ku;break;case Ah:q=zs;break;case"scroll":case"scrollend":q=Zs;break;case"wheel":q=fl;break;case"copy":case"cut":case"paste":q=jr;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=Oi;break;case"toggle":case"beforetoggle":q=pa}var lt=(t&4)!==0,Zt=!lt&&(e==="scroll"||e==="scrollend"),P=lt?X!==null?X+"Capture":null:X;lt=[];for(var L=H,U;L!==null;){var se=L;if(U=se.stateNode,se=se.tag,se!==5&&se!==26&&se!==27||U===null||P===null||(se=Bt(L,P),se!=null&&lt.push(Hl(L,se,U))),Zt)break;L=L.return}0<lt.length&&(X=new q(X,Ie,null,s,ee),ae.push({event:X,listeners:lt}))}}if((t&7)===0){e:{if(X=e==="mouseover"||e==="pointerover",q=e==="mouseout"||e==="pointerout",X&&s!==il&&(Ie=s.relatedTarget||s.fromElement)&&(Fo(Ie)||Ie[Ee]))break e;if((q||X)&&(X=ee.window===ee?ee:(X=ee.ownerDocument)?X.defaultView||X.parentWindow:window,q?(Ie=s.relatedTarget||s.toElement,q=H,Ie=Ie?Fo(Ie):null,Ie!==null&&(Zt=u(Ie),lt=Ie.tag,Ie!==Zt||lt!==5&&lt!==27&&lt!==6)&&(Ie=null)):(q=null,Ie=H),q!==Ie)){if(lt=Jo,se="onMouseLeave",P="onMouseEnter",L="mouse",(e==="pointerout"||e==="pointerover")&&(lt=Oi,se="onPointerLeave",P="onPointerEnter",L="pointer"),Zt=q==null?X:Ti(q),U=Ie==null?X:Ti(Ie),X=new lt(se,L+"leave",q,s,ee),X.target=Zt,X.relatedTarget=U,se=null,Fo(ee)===H&&(lt=new lt(P,L+"enter",Ie,s,ee),lt.target=U,lt.relatedTarget=Zt,se=lt),Zt=se,q&&Ie)t:{for(lt=l1,P=q,L=Ie,U=0,se=P;se;se=lt(se))U++;se=0;for(var Je=L;Je;Je=lt(Je))se++;for(;0<U-se;)P=lt(P),U--;for(;0<se-U;)L=lt(L),se--;for(;U--;){if(P===L||L!==null&&P===L.alternate){lt=P;break t}P=lt(P),L=lt(L)}lt=null}else lt=null;q!==null&&tm(ae,X,q,lt,!1),Ie!==null&&Zt!==null&&tm(ae,Zt,Ie,lt,!0)}}e:{if(X=H?Ti(H):window,q=X.nodeName&&X.nodeName.toLowerCase(),q==="select"||q==="input"&&X.type==="file")var $t=A;else if(pl(X))if(T)$t=bt;else{$t=We;var Xe=Ue}else q=X.nodeName,!q||q.toLowerCase()!=="input"||X.type!=="checkbox"&&X.type!=="radio"?H&&hs(H.elementType)&&($t=A):$t=at;if($t&&($t=$t(e,H))){gl(ae,$t,s,ee);break e}Xe&&Xe(e,X,H),e==="focusout"&&H&&X.type==="number"&&H.memoizedProps.value!=null&&co(X,"number",X.value)}switch(Xe=H?Ti(H):window,e){case"focusin":(pl(Xe)||Xe.contentEditable==="true")&&(an=Xe,Qt=H,Mn=null);break;case"focusout":Mn=Qt=an=null;break;case"mousedown":Wn=!0;break;case"contextmenu":case"mouseup":case"dragend":Wn=!1,wn(ae,s,ee);break;case"selectionchange":if(mt)break;case"keydown":case"keyup":wn(ae,s,ee)}var vt;if(_l)e:{switch(e){case"compositionstart":var Lt="onCompositionStart";break e;case"compositionend":Lt="onCompositionEnd";break e;case"compositionupdate":Lt="onCompositionUpdate";break e}Lt=void 0}else Mo?jo(e,s)&&(Lt="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(Lt="onCompositionStart");Lt&&(ga&&s.locale!=="ko"&&(Mo||Lt!=="onCompositionStart"?Lt==="onCompositionEnd"&&Mo&&(vt=ll()):(rs=ee,ra="value"in rs?rs.value:rs.textContent,Mo=!0)),Xe=Cc(H,Lt),0<Xe.length&&(Lt=new et(Lt,e,null,s,ee),ae.push({event:Lt,listeners:Xe}),vt?Lt.data=vt:(vt=Ar(s),vt!==null&&(Lt.data=vt)))),(vt=ml?Nr(e,s):Lr(e,s))&&(Lt=Cc(H,"onBeforeInput"),0<Lt.length&&(Xe=new et("onBeforeInput","beforeinput",null,s,ee),ae.push({event:Xe,listeners:Lt}),Xe.data=vt)),s1(ae,e,H,s,ee)}J0(ae,t)})}function Hl(e,t,s){return{instance:e,listener:t,currentTarget:s}}function Cc(e,t){for(var s=t+"Capture",a=[];e!==null;){var d=e,f=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||f===null||(d=Bt(e,s),d!=null&&a.unshift(Hl(e,d,f)),d=Bt(e,t),d!=null&&a.push(Hl(e,d,f))),e.tag===3)return a;e=e.return}return[]}function l1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function tm(e,t,s,a,d){for(var f=t._reactName,x=[];s!==null&&s!==a;){var w=s,R=w.alternate,H=w.stateNode;if(w=w.tag,R!==null&&R===a)break;w!==5&&w!==26&&w!==27||H===null||(R=H,d?(H=Bt(s,f),H!=null&&x.unshift(Hl(s,H,R))):d||(H=Bt(s,f),H!=null&&x.push(Hl(s,H,R)))),s=s.return}x.length!==0&&e.push({event:t,listeners:x})}var r1=/\r\n?/g,c1=/\u0000|\uFFFD/g;function nm(e){return(typeof e=="string"?e:""+e).replace(r1,`
`).replace(c1,"")}function sm(e,t){return t=nm(t),nm(e)===t}function Kt(e,t,s,a,d,f){switch(s){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Vo(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Vo(e,""+a);break;case"className":es(e,"class",a);break;case"tabIndex":es(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":es(e,s,a);break;case"style":vr(e,a,f);break;case"data":if(t!=="object"){es(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||s!=="href")){e.removeAttribute(s);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(s);break}a=Di(""+a),e.setAttribute(s,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(s==="formAction"?(t!=="input"&&Kt(e,t,"name",d.name,d,null),Kt(e,t,"formEncType",d.formEncType,d,null),Kt(e,t,"formMethod",d.formMethod,d,null),Kt(e,t,"formTarget",d.formTarget,d,null)):(Kt(e,t,"encType",d.encType,d,null),Kt(e,t,"method",d.method,d,null),Kt(e,t,"target",d.target,d,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(s);break}a=Di(""+a),e.setAttribute(s,a);break;case"onClick":a!=null&&(e.onclick=Qs);break;case"onScroll":a!=null&&Tt("scroll",e);break;case"onScrollEnd":a!=null&&Tt("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(l(61));if(s=a.__html,s!=null){if(d.children!=null)throw Error(l(60));e.innerHTML=s}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}s=Di(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(s,""+a):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":a===!0?e.setAttribute(s,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(s,a):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(s,a):e.removeAttribute(s);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(s):e.setAttribute(s,a);break;case"popover":Tt("beforetoggle",e),Tt("toggle",e),lo(e,"popover",a);break;case"xlinkActuate":ws(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":ws(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":ws(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":ws(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":ws(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":ws(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":ws(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":ws(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":ws(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":lo(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=wr.get(s)||s,lo(e,s,a))}}function Jd(e,t,s,a,d,f){switch(s){case"style":vr(e,a,f);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(l(61));if(s=a.__html,s!=null){if(d.children!=null)throw Error(l(60));e.innerHTML=s}}break;case"children":typeof a=="string"?Vo(e,a):(typeof a=="number"||typeof a=="bigint")&&Vo(e,""+a);break;case"onScroll":a!=null&&Tt("scroll",e);break;case"onScrollEnd":a!=null&&Tt("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Qs);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Wo.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(d=s.endsWith("Capture"),t=s.slice(2,d?s.length-7:void 0),f=e[jn]||null,f=f!=null?f[s]:null,typeof f=="function"&&e.removeEventListener(t,f,d),typeof a=="function")){typeof f!="function"&&f!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(t,a,d);break e}s in e?e[s]=a:a===!0?e.setAttribute(s,""):lo(e,s,a)}}}function Kn(e,t,s){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Tt("error",e),Tt("load",e);var a=!1,d=!1,f;for(f in s)if(s.hasOwnProperty(f)){var x=s[f];if(x!=null)switch(f){case"src":a=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Kt(e,t,f,x,s,null)}}d&&Kt(e,t,"srcSet",s.srcSet,s,null),a&&Kt(e,t,"src",s.src,s,null);return;case"input":Tt("invalid",e);var w=f=x=d=null,R=null,H=null;for(a in s)if(s.hasOwnProperty(a)){var ee=s[a];if(ee!=null)switch(a){case"name":d=ee;break;case"type":x=ee;break;case"checked":R=ee;break;case"defaultChecked":H=ee;break;case"value":f=ee;break;case"defaultValue":w=ee;break;case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(l(137,t));break;default:Kt(e,t,a,ee,s,null)}}pn(e,f,w,R,H,x,d,!1);return;case"select":Tt("invalid",e),a=x=f=null;for(d in s)if(s.hasOwnProperty(d)&&(w=s[d],w!=null))switch(d){case"value":f=w;break;case"defaultValue":x=w;break;case"multiple":a=w;default:Kt(e,t,d,w,s,null)}t=f,s=x,e.multiple=!!a,t!=null?Gn(e,!!a,t,!1):s!=null&&Gn(e,!!a,s,!0);return;case"textarea":Tt("invalid",e),f=d=a=null;for(x in s)if(s.hasOwnProperty(x)&&(w=s[x],w!=null))switch(x){case"value":a=w;break;case"defaultValue":d=w;break;case"children":f=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(l(91));break;default:Kt(e,t,x,w,s,null)}br(e,a,d,f);return;case"option":for(R in s)if(s.hasOwnProperty(R)&&(a=s[R],a!=null))switch(R){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Kt(e,t,R,a,s,null)}return;case"dialog":Tt("beforetoggle",e),Tt("toggle",e),Tt("cancel",e),Tt("close",e);break;case"iframe":case"object":Tt("load",e);break;case"video":case"audio":for(a=0;a<Ul.length;a++)Tt(Ul[a],e);break;case"image":Tt("error",e),Tt("load",e);break;case"details":Tt("toggle",e);break;case"embed":case"source":case"link":Tt("error",e),Tt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(H in s)if(s.hasOwnProperty(H)&&(a=s[H],a!=null))switch(H){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Kt(e,t,H,a,s,null)}return;default:if(hs(t)){for(ee in s)s.hasOwnProperty(ee)&&(a=s[ee],a!==void 0&&Jd(e,t,ee,a,s,void 0));return}}for(w in s)s.hasOwnProperty(w)&&(a=s[w],a!=null&&Kt(e,t,w,a,s,null))}function u1(e,t,s,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,f=null,x=null,w=null,R=null,H=null,ee=null;for(q in s){var ae=s[q];if(s.hasOwnProperty(q)&&ae!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":R=ae;default:a.hasOwnProperty(q)||Kt(e,t,q,null,a,ae)}}for(var X in a){var q=a[X];if(ae=s[X],a.hasOwnProperty(X)&&(q!=null||ae!=null))switch(X){case"type":f=q;break;case"name":d=q;break;case"checked":H=q;break;case"defaultChecked":ee=q;break;case"value":x=q;break;case"defaultValue":w=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(l(137,t));break;default:q!==ae&&Kt(e,t,X,q,a,ae)}}ro(e,x,w,R,H,ee,f,d);return;case"select":q=x=w=X=null;for(f in s)if(R=s[f],s.hasOwnProperty(f)&&R!=null)switch(f){case"value":break;case"multiple":q=R;default:a.hasOwnProperty(f)||Kt(e,t,f,null,a,R)}for(d in a)if(f=a[d],R=s[d],a.hasOwnProperty(d)&&(f!=null||R!=null))switch(d){case"value":X=f;break;case"defaultValue":w=f;break;case"multiple":x=f;default:f!==R&&Kt(e,t,d,f,a,R)}t=w,s=x,a=q,X!=null?Gn(e,!!s,X,!1):!!a!=!!s&&(t!=null?Gn(e,!!s,t,!0):Gn(e,!!s,s?[]:"",!1));return;case"textarea":q=X=null;for(w in s)if(d=s[w],s.hasOwnProperty(w)&&d!=null&&!a.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Kt(e,t,w,null,a,d)}for(x in a)if(d=a[x],f=s[x],a.hasOwnProperty(x)&&(d!=null||f!=null))switch(x){case"value":X=d;break;case"defaultValue":q=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(l(91));break;default:d!==f&&Kt(e,t,x,d,a,f)}Un(e,X,q);return;case"option":for(var Ie in s)if(X=s[Ie],s.hasOwnProperty(Ie)&&X!=null&&!a.hasOwnProperty(Ie))switch(Ie){case"selected":e.selected=!1;break;default:Kt(e,t,Ie,null,a,X)}for(R in a)if(X=a[R],q=s[R],a.hasOwnProperty(R)&&X!==q&&(X!=null||q!=null))switch(R){case"selected":e.selected=X&&typeof X!="function"&&typeof X!="symbol";break;default:Kt(e,t,R,X,a,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var lt in s)X=s[lt],s.hasOwnProperty(lt)&&X!=null&&!a.hasOwnProperty(lt)&&Kt(e,t,lt,null,a,X);for(H in a)if(X=a[H],q=s[H],a.hasOwnProperty(H)&&X!==q&&(X!=null||q!=null))switch(H){case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(l(137,t));break;default:Kt(e,t,H,X,a,q)}return;default:if(hs(t)){for(var Zt in s)X=s[Zt],s.hasOwnProperty(Zt)&&X!==void 0&&!a.hasOwnProperty(Zt)&&Jd(e,t,Zt,void 0,a,X);for(ee in a)X=a[ee],q=s[ee],!a.hasOwnProperty(ee)||X===q||X===void 0&&q===void 0||Jd(e,t,ee,X,a,q);return}}for(var P in s)X=s[P],s.hasOwnProperty(P)&&X!=null&&!a.hasOwnProperty(P)&&Kt(e,t,P,null,a,X);for(ae in a)X=a[ae],q=s[ae],!a.hasOwnProperty(ae)||X===q||X==null&&q==null||Kt(e,t,ae,X,a,q)}function om(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function d1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,s=performance.getEntriesByType("resource"),a=0;a<s.length;a++){var d=s[a],f=d.transferSize,x=d.initiatorType,w=d.duration;if(f&&w&&om(x)){for(x=0,w=d.responseEnd,a+=1;a<s.length;a++){var R=s[a],H=R.startTime;if(H>w)break;var ee=R.transferSize,ae=R.initiatorType;ee&&om(ae)&&(R=R.responseEnd,x+=ee*(R<w?1:(w-H)/(R-H)))}if(--a,t+=8*(f+x)/(d.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ef=null,tf=null;function jc(e){return e.nodeType===9?e:e.ownerDocument}function im(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function am(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function nf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var sf=null;function f1(){var e=window.event;return e&&e.type==="popstate"?e===sf?!1:(sf=e,!0):(sf=null,!1)}var lm=typeof setTimeout=="function"?setTimeout:void 0,h1=typeof clearTimeout=="function"?clearTimeout:void 0,rm=typeof Promise=="function"?Promise:void 0,_1=typeof queueMicrotask=="function"?queueMicrotask:typeof rm<"u"?function(e){return rm.resolve(null).then(e).catch(m1)}:lm;function m1(e){setTimeout(function(){throw e})}function xi(e){return e==="head"}function cm(e,t){var s=t,a=0;do{var d=s.nextSibling;if(e.removeChild(s),d&&d.nodeType===8)if(s=d.data,s==="/$"||s==="/&"){if(a===0){e.removeChild(d),Ya(t);return}a--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")a++;else if(s==="html")Yl(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,Yl(s);for(var f=s.firstChild;f;){var x=f.nextSibling,w=f.nodeName;f[Ei]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&f.rel.toLowerCase()==="stylesheet"||s.removeChild(f),f=x}}else s==="body"&&Yl(e.ownerDocument.body);s=d}while(s);Ya(t)}function um(e,t){var s=e;e=0;do{var a=s.nextSibling;if(s.nodeType===1?t?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(t?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),a&&a.nodeType===8)if(s=a.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=a}while(s)}function of(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var s=t;switch(t=t.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":of(s),ia(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function p1(e,t,s,a){for(;e.nodeType===1;){var d=s;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Ei])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==d.rel||e.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||e.getAttribute("title")!==(d.title==null?null:d.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(d.src==null?null:d.src)||e.getAttribute("type")!==(d.type==null?null:d.type)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var f=d.name==null?null:""+d.name;if(d.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Xs(e.nextSibling),e===null)break}return null}function g1(e,t,s){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Xs(e.nextSibling),e===null))return null;return e}function dm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Xs(e.nextSibling),e===null))return null;return e}function af(e){return e.data==="$?"||e.data==="$~"}function lf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function y1(e,t){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||s.readyState!=="loading")t();else{var a=function(){t(),s.removeEventListener("DOMContentLoaded",a)};s.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Xs(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var rf=null;function fm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(t===0)return Xs(e.nextSibling);t--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||t++}e=e.nextSibling}return null}function hm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(t===0)return e;t--}else s!=="/$"&&s!=="/&"||t++}e=e.previousSibling}return null}function _m(e,t,s){switch(t=jc(s),e){case"html":if(e=t.documentElement,!e)throw Error(l(452));return e;case"head":if(e=t.head,!e)throw Error(l(453));return e;case"body":if(e=t.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function Yl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ia(e)}var Fs=new Map,mm=new Set;function Mc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ho=ue.d;ue.d={f:x1,r:b1,D:v1,C:w1,L:S1,m:k1,X:j1,S:C1,M:M1};function x1(){var e=Ho.f(),t=yc();return e||t}function b1(e){var t=Go(e);t!==null&&t.tag===5&&t.type==="form"?A_(t):Ho.r(e)}var Ia=typeof document>"u"?null:document;function pm(e,t,s){var a=Ia;if(a&&typeof t=="string"&&t){var d=as(t);d='link[rel="'+e+'"][href="'+d+'"]',typeof s=="string"&&(d+='[crossorigin="'+s+'"]'),mm.has(d)||(mm.add(d),e={rel:e,crossOrigin:s,href:t},a.querySelector(d)===null&&(t=a.createElement("link"),Kn(t,"link",e),Nn(t),a.head.appendChild(t)))}}function v1(e){Ho.D(e),pm("dns-prefetch",e,null)}function w1(e,t){Ho.C(e,t),pm("preconnect",e,t)}function S1(e,t,s){Ho.L(e,t,s);var a=Ia;if(a&&e&&t){var d='link[rel="preload"][as="'+as(t)+'"]';t==="image"&&s&&s.imageSrcSet?(d+='[imagesrcset="'+as(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(d+='[imagesizes="'+as(s.imageSizes)+'"]')):d+='[href="'+as(e)+'"]';var f=d;switch(t){case"style":f=Ua(e);break;case"script":f=Ha(e)}Fs.has(f)||(e=y({rel:"preload",href:t==="image"&&s&&s.imageSrcSet?void 0:e,as:t},s),Fs.set(f,e),a.querySelector(d)!==null||t==="style"&&a.querySelector(Xl(f))||t==="script"&&a.querySelector(Fl(f))||(t=a.createElement("link"),Kn(t,"link",e),Nn(t),a.head.appendChild(t)))}}function k1(e,t){Ho.m(e,t);var s=Ia;if(s&&e){var a=t&&typeof t.as=="string"?t.as:"script",d='link[rel="modulepreload"][as="'+as(a)+'"][href="'+as(e)+'"]',f=d;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Ha(e)}if(!Fs.has(f)&&(e=y({rel:"modulepreload",href:e},t),Fs.set(f,e),s.querySelector(d)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Fl(f)))return}a=s.createElement("link"),Kn(a,"link",e),Nn(a),s.head.appendChild(a)}}}function C1(e,t,s){Ho.S(e,t,s);var a=Ia;if(a&&e){var d=ao(a).hoistableStyles,f=Ua(e);t=t||"default";var x=d.get(f);if(!x){var w={loading:0,preload:null};if(x=a.querySelector(Xl(f)))w.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":t},s),(s=Fs.get(f))&&cf(e,s);var R=x=a.createElement("link");Nn(R),Kn(R,"link",e),R._p=new Promise(function(H,ee){R.onload=H,R.onerror=ee}),R.addEventListener("load",function(){w.loading|=1}),R.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Ec(x,t,a)}x={type:"stylesheet",instance:x,count:1,state:w},d.set(f,x)}}}function j1(e,t){Ho.X(e,t);var s=Ia;if(s&&e){var a=ao(s).hoistableScripts,d=Ha(e),f=a.get(d);f||(f=s.querySelector(Fl(d)),f||(e=y({src:e,async:!0},t),(t=Fs.get(d))&&uf(e,t),f=s.createElement("script"),Nn(f),Kn(f,"link",e),s.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},a.set(d,f))}}function M1(e,t){Ho.M(e,t);var s=Ia;if(s&&e){var a=ao(s).hoistableScripts,d=Ha(e),f=a.get(d);f||(f=s.querySelector(Fl(d)),f||(e=y({src:e,async:!0,type:"module"},t),(t=Fs.get(d))&&uf(e,t),f=s.createElement("script"),Nn(f),Kn(f,"link",e),s.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},a.set(d,f))}}function gm(e,t,s,a){var d=(d=rt.current)?Mc(d):null;if(!d)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(t=Ua(s.href),s=ao(d).hoistableStyles,a=s.get(t),a||(a={type:"style",instance:null,count:0,state:null},s.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Ua(s.href);var f=ao(d).hoistableStyles,x=f.get(e);if(x||(d=d.ownerDocument||d,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,x),(f=d.querySelector(Xl(e)))&&!f._p&&(x.instance=f,x.state.loading=5),Fs.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Fs.set(e,s),f||E1(d,e,s,x.state))),t&&a===null)throw Error(l(528,""));return x}if(t&&a!==null)throw Error(l(529,""));return null;case"script":return t=s.async,s=s.src,typeof s=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ha(s),s=ao(d).hoistableScripts,a=s.get(t),a||(a={type:"script",instance:null,count:0,state:null},s.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function Ua(e){return'href="'+as(e)+'"'}function Xl(e){return'link[rel="stylesheet"]['+e+"]"}function ym(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function E1(e,t,s,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Kn(t,"link",s),Nn(t),e.head.appendChild(t))}function Ha(e){return'[src="'+as(e)+'"]'}function Fl(e){return"script[async]"+e}function xm(e,t,s){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+as(s.href)+'"]');if(a)return t.instance=a,Nn(a),a;var d=y({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Nn(a),Kn(a,"style",d),Ec(a,s.precedence,e),t.instance=a;case"stylesheet":d=Ua(s.href);var f=e.querySelector(Xl(d));if(f)return t.state.loading|=4,t.instance=f,Nn(f),f;a=ym(s),(d=Fs.get(d))&&cf(a,d),f=(e.ownerDocument||e).createElement("link"),Nn(f);var x=f;return x._p=new Promise(function(w,R){x.onload=w,x.onerror=R}),Kn(f,"link",a),t.state.loading|=4,Ec(f,s.precedence,e),t.instance=f;case"script":return f=Ha(s.src),(d=e.querySelector(Fl(f)))?(t.instance=d,Nn(d),d):(a=s,(d=Fs.get(f))&&(a=y({},s),uf(a,d)),e=e.ownerDocument||e,d=e.createElement("script"),Nn(d),Kn(d,"link",a),e.head.appendChild(d),t.instance=d);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Ec(a,s.precedence,e));return t.instance}function Ec(e,t,s){for(var a=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=a.length?a[a.length-1]:null,f=d,x=0;x<a.length;x++){var w=a[x];if(w.dataset.precedence===t)f=w;else if(f!==d)break}f?f.parentNode.insertBefore(e,f.nextSibling):(t=s.nodeType===9?s.head:s,t.insertBefore(e,t.firstChild))}function cf(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function uf(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Tc=null;function bm(e,t,s){if(Tc===null){var a=new Map,d=Tc=new Map;d.set(s,a)}else d=Tc,a=d.get(s),a||(a=new Map,d.set(s,a));if(a.has(e))return a;for(a.set(e,null),s=s.getElementsByTagName(e),d=0;d<s.length;d++){var f=s[d];if(!(f[Ei]||f[Yt]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(t)||"";x=e+x;var w=a.get(x);w?w.push(f):a.set(x,[f])}}return a}function vm(e,t,s){e=e.ownerDocument||e,e.head.insertBefore(s,t==="title"?e.querySelector("head > title"):null)}function T1(e,t,s){if(s===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function wm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function R1(e,t,s,a){if(s.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var d=Ua(a.href),f=t.querySelector(Xl(d));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Rc.bind(e),t.then(e,e)),s.state.loading|=4,s.instance=f,Nn(f);return}f=t.ownerDocument||t,a=ym(a),(d=Fs.get(d))&&cf(a,d),f=f.createElement("link"),Nn(f);var x=f;x._p=new Promise(function(w,R){x.onload=w,x.onerror=R}),Kn(f,"link",a),s.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,t),(t=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=Rc.bind(e),t.addEventListener("load",s),t.addEventListener("error",s))}}var df=0;function D1(e,t){return e.stylesheets&&e.count===0&&Ac(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var a=setTimeout(function(){if(e.stylesheets&&Ac(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+t);0<e.imgBytes&&df===0&&(df=62500*d1());var d=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ac(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>df?50:800)+t);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(d)}}:null}function Rc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ac(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Dc=null;function Ac(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Dc=new Map,t.forEach(A1,e),Dc=null,Rc.call(e))}function A1(e,t){if(!(t.state.loading&4)){var s=Dc.get(e);if(s)var a=s.get(null);else{s=new Map,Dc.set(e,s);for(var d=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<d.length;f++){var x=d[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(s.set(x.dataset.precedence,x),a=x)}a&&s.set(null,a)}d=t.instance,x=d.getAttribute("data-precedence"),f=s.get(x)||a,f===a&&s.set(null,d),s.set(x,d),this.count++,a=Rc.bind(this),d.addEventListener("load",a),d.addEventListener("error",a),f?f.parentNode.insertBefore(d,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(d,e.firstChild)),t.state.loading|=4}}var Gl={$$typeof:F,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function N1(e,t,s,a,d,f,x,w,R){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=fn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fn(0),this.hiddenUpdates=fn(null),this.identifierPrefix=a,this.onUncaughtError=d,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.incompleteTransitions=new Map}function Sm(e,t,s,a,d,f,x,w,R,H,ee,ae){return e=new N1(e,t,s,x,R,H,ee,ae,w),t=1,f===!0&&(t|=24),f=js(3,null,null,t),e.current=f,f.stateNode=e,t=Yu(),t.refCount++,e.pooledCache=t,t.refCount++,f.memoizedState={element:a,isDehydrated:s,cache:t},Wu(f),e}function km(e){return e?(e=xa,e):xa}function Cm(e,t,s,a,d,f){d=km(d),a.context===null?a.context=d:a.pendingContext=d,a=ri(t),a.payload={element:s},f=f===void 0?null:f,f!==null&&(a.callback=f),s=ci(e,a,t),s!==null&&(xs(s,e,t),kl(s,e,t))}function jm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<t?s:t}}function ff(e,t){jm(e,t),(e=e.alternate)&&jm(e,t)}function Mm(e){if(e.tag===13||e.tag===31){var t=zi(e,67108864);t!==null&&xs(t,e,67108864),ff(e,67108864)}}function Em(e){if(e.tag===13||e.tag===31){var t=Ds();t=oo(t);var s=zi(e,t);s!==null&&xs(s,e,t),ff(e,t)}}var Nc=!0;function L1(e,t,s,a){var d=N.T;N.T=null;var f=ue.p;try{ue.p=2,hf(e,t,s,a)}finally{ue.p=f,N.T=d}}function O1(e,t,s,a){var d=N.T;N.T=null;var f=ue.p;try{ue.p=8,hf(e,t,s,a)}finally{ue.p=f,N.T=d}}function hf(e,t,s,a){if(Nc){var d=_f(a);if(d===null)Zd(e,t,a,Lc,s),Rm(e,a);else if(B1(d,e,t,s,a))a.stopPropagation();else if(Rm(e,a),t&4&&-1<z1.indexOf(e)){for(;d!==null;){var f=Go(d);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Wt(f.pendingLanes);if(x!==0){var w=f;for(w.pendingLanes|=2,w.entangledLanes|=2;x;){var R=1<<31-it(x);w.entanglements[1]|=R,x&=~R}vo(f),(It&6)===0&&(pc=Re()+500,Il(0))}}break;case 31:case 13:w=zi(f,2),w!==null&&xs(w,f,2),yc(),ff(f,2)}if(f=_f(a),f===null&&Zd(e,t,a,Lc,s),f===d)break;d=f}d!==null&&a.stopPropagation()}else Zd(e,t,a,null,s)}}function _f(e){return e=Vs(e),mf(e)}var Lc=null;function mf(e){if(Lc=null,e=Fo(e),e!==null){var t=u(e);if(t===null)e=null;else{var s=t.tag;if(s===13){if(e=_(t),e!==null)return e;e=null}else if(s===31){if(e=g(t),e!==null)return e;e=null}else if(s===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Lc=e,null}function Tm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ut()){case St:return 2;case Ht:return 8;case Pe:case I:return 32;case Y:return 268435456;default:return 32}default:return 32}}var pf=!1,bi=null,vi=null,wi=null,Wl=new Map,ql=new Map,Si=[],z1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Rm(e,t){switch(e){case"focusin":case"focusout":bi=null;break;case"dragenter":case"dragleave":vi=null;break;case"mouseover":case"mouseout":wi=null;break;case"pointerover":case"pointerout":Wl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ql.delete(t.pointerId)}}function Ql(e,t,s,a,d,f){return e===null||e.nativeEvent!==f?(e={blockedOn:t,domEventName:s,eventSystemFlags:a,nativeEvent:f,targetContainers:[d]},t!==null&&(t=Go(t),t!==null&&Mm(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,d!==null&&t.indexOf(d)===-1&&t.push(d),e)}function B1(e,t,s,a,d){switch(t){case"focusin":return bi=Ql(bi,e,t,s,a,d),!0;case"dragenter":return vi=Ql(vi,e,t,s,a,d),!0;case"mouseover":return wi=Ql(wi,e,t,s,a,d),!0;case"pointerover":var f=d.pointerId;return Wl.set(f,Ql(Wl.get(f)||null,e,t,s,a,d)),!0;case"gotpointercapture":return f=d.pointerId,ql.set(f,Ql(ql.get(f)||null,e,t,s,a,d)),!0}return!1}function Dm(e){var t=Fo(e.target);if(t!==null){var s=u(t);if(s!==null){if(t=s.tag,t===13){if(t=_(s),t!==null){e.blockedOn=t,ln(e.priority,function(){Em(s)});return}}else if(t===31){if(t=g(s),t!==null){e.blockedOn=t,ln(e.priority,function(){Em(s)});return}}else if(t===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Oc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var s=_f(e.nativeEvent);if(s===null){s=e.nativeEvent;var a=new s.constructor(s.type,s);il=a,s.target.dispatchEvent(a),il=null}else return t=Go(s),t!==null&&Mm(t),e.blockedOn=s,!1;t.shift()}return!0}function Am(e,t,s){Oc(e)&&s.delete(t)}function $1(){pf=!1,bi!==null&&Oc(bi)&&(bi=null),vi!==null&&Oc(vi)&&(vi=null),wi!==null&&Oc(wi)&&(wi=null),Wl.forEach(Am),ql.forEach(Am)}function zc(e,t){e.blockedOn===t&&(e.blockedOn=null,pf||(pf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,$1)))}var Bc=null;function Nm(e){Bc!==e&&(Bc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Bc===e&&(Bc=null);for(var t=0;t<e.length;t+=3){var s=e[t],a=e[t+1],d=e[t+2];if(typeof a!="function"){if(mf(a||s)===null)continue;break}var f=Go(s);f!==null&&(e.splice(t,3),t-=3,hd(f,{pending:!0,data:d,method:s.method,action:a},a,d))}}))}function Ya(e){function t(R){return zc(R,e)}bi!==null&&zc(bi,e),vi!==null&&zc(vi,e),wi!==null&&zc(wi,e),Wl.forEach(t),ql.forEach(t);for(var s=0;s<Si.length;s++){var a=Si[s];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Si.length&&(s=Si[0],s.blockedOn===null);)Dm(s),s.blockedOn===null&&Si.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(a=0;a<s.length;a+=3){var d=s[a],f=s[a+1],x=d[jn]||null;if(typeof f=="function")x||Nm(s);else if(x){var w=null;if(f&&f.hasAttribute("formAction")){if(d=f,x=f[jn]||null)w=x.formAction;else if(mf(d)!==null)continue}else w=x.action;typeof w=="function"?s[a+1]=w:(s.splice(a,3),a-=3),Nm(s)}}}function Lm(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return d=x})},focusReset:"manual",scroll:"manual"})}function t(){d!==null&&(d(),d=null),a||setTimeout(s,20)}function s(){if(!a&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,d=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(s,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),d!==null&&(d(),d=null)}}}function gf(e){this._internalRoot=e}$c.prototype.render=gf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));var s=t.current,a=Ds();Cm(s,a,e,t,null,null)},$c.prototype.unmount=gf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Cm(e.current,2,null,e,null,null),yc(),t[Ee]=null}};function $c(e){this._internalRoot=e}$c.prototype.unstable_scheduleHydration=function(e){if(e){var t=Zn();e={blockedOn:null,target:e,priority:t};for(var s=0;s<Si.length&&t!==0&&t<Si[s].priority;s++);Si.splice(s,0,e),s===0&&Dm(e)}};var Om=n.version;if(Om!=="19.2.8")throw Error(l(527,Om,"19.2.8"));ue.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=m(t),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var P1={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pc.isDisabled&&Pc.supportsFiber)try{ze=Pc.inject(P1),Ce=Pc}catch{}}return Zl.createRoot=function(e,t){if(!c(e))throw Error(l(299));var s=!1,a="",d=H_,f=Y_,x=X_;return t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(d=t.onUncaughtError),t.onCaughtError!==void 0&&(f=t.onCaughtError),t.onRecoverableError!==void 0&&(x=t.onRecoverableError)),t=Sm(e,1,!1,null,null,s,a,null,d,f,x,Lm),e[Ee]=t.current,Kd(e),new gf(t)},Zl.hydrateRoot=function(e,t,s){if(!c(e))throw Error(l(299));var a=!1,d="",f=H_,x=Y_,w=X_,R=null;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(x=s.onCaughtError),s.onRecoverableError!==void 0&&(w=s.onRecoverableError),s.formState!==void 0&&(R=s.formState)),t=Sm(e,1,!0,t,s??null,a,d,R,f,x,w,Lm),t.context=km(null),s=t.current,a=Ds(),a=oo(a),d=ri(a),d.callback=null,ci(s,d,a),s=a,t.current.lanes=s,Fe(t,s),vo(t),e[Ee]=t.current,Kd(e),new $c(t)},Zl.version="19.2.8",Zl}var Fm;function Z1(){if(Fm)return bf.exports;Fm=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(n){console.error(n)}}return o(),bf.exports=K1(),bf.exports}var J1=Z1();const ex=hh(J1);/**
 * react-router v7.18.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var mh=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Op=/^[\\/]{2}/;function tx(o,n){return n+o.replace(/\\/g,"/")}var Gm="popstate";function Wm(o){return typeof o=="object"&&o!=null&&"pathname"in o&&"search"in o&&"hash"in o&&"state"in o&&"key"in o}function nx(o={}){function n(l,c){var m;let u=(m=c.state)==null?void 0:m.masked,{pathname:_,search:g,hash:h}=u||l.location;return Yf("",{pathname:_,search:g,hash:h},c.state&&c.state.usr||null,c.state&&c.state.key||"default",u?{pathname:l.location.pathname,search:l.location.search,hash:l.location.hash}:void 0)}function i(l,c){return typeof c=="string"?c:fr(c)}return ox(n,i,null,o)}function xn(o,n){if(o===!1||o===null||typeof o>"u")throw new Error(n)}function ko(o,n){if(!o){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function sx(){return Math.random().toString(36).substring(2,10)}function qm(o,n){return{usr:o.state,key:o.key,idx:n,masked:o.mask?{pathname:o.pathname,search:o.search,hash:o.hash}:void 0}}function Yf(o,n,i=null,l,c){return{pathname:typeof o=="string"?o:o.pathname,search:"",hash:"",...typeof n=="string"?Ja(n):n,state:i,key:n&&n.key||l||sx(),mask:c}}function fr({pathname:o="/",search:n="",hash:i=""}){return n&&n!=="?"&&(o+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(o+=i.charAt(0)==="#"?i:"#"+i),o}function Ja(o){let n={};if(o){let i=o.indexOf("#");i>=0&&(n.hash=o.substring(i),o=o.substring(0,i));let l=o.indexOf("?");l>=0&&(n.search=o.substring(l),o=o.substring(0,l)),o&&(n.pathname=o)}return n}function ox(o,n,i,l={}){let{window:c=document.defaultView,v5Compat:u=!1}=l,_=c.history,g="POP",h=null,m=p();m==null&&(m=0,_.replaceState({..._.state,idx:m},""));function p(){return(_.state||{idx:null}).idx}function y(){g="POP";let O=p(),B=O==null?null:O-m;m=O,h&&h({action:g,location:E.location,delta:B})}function v(O,B){g="PUSH";let J=Wm(O)?O:Yf(E.location,O,B);m=p()+1;let F=qm(J,m),z=E.createHref(J.mask||J);try{_.pushState(F,"",z)}catch(de){if(de instanceof DOMException&&de.name==="DataCloneError")throw de;c.location.assign(z)}u&&h&&h({action:g,location:E.location,delta:1})}function C(O,B){g="REPLACE";let J=Wm(O)?O:Yf(E.location,O,B);m=p();let F=qm(J,m),z=E.createHref(J.mask||J);_.replaceState(F,"",z),u&&h&&h({action:g,location:E.location,delta:0})}function k(O){return ix(c,O)}let E={get action(){return g},get location(){return o(c,_)},listen(O){if(h)throw new Error("A history only accepts one active listener");return c.addEventListener(Gm,y),h=O,()=>{c.removeEventListener(Gm,y),h=null}},createHref(O){return n(c,O)},createURL:k,encodeLocation(O){let B=k(O);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:v,replace:C,go(O){return _.go(O)}};return E}function ix(o,n,i=!1){let l="http://localhost";o&&(l=o.location.origin!=="null"?o.location.origin:o.location.href),xn(l,"No window.location.(origin|href) available to create URL");let c=typeof n=="string"?n:fr(n);return c=c.replace(/ $/,"%20"),!i&&Op.test(c)&&(c=l+c),new URL(c,l)}function zp(o,n,i="/"){return ax(o,n,i,!1)}function ax(o,n,i,l,c){let u=typeof n=="string"?Ja(n):n,_=Yo(u.pathname||"/",i);if(_==null)return null;let g=lx(o),h=null,m=yx(_);for(let p=0;h==null&&p<g.length;++p)h=gx(g[p],m,l);return h}function lx(o){let n=Bp(o);return rx(n),n}function Bp(o,n=[],i=[],l="",c=!1){let u=(_,g,h=c,m)=>{let p={relativePath:m===void 0?_.path||"":m,caseSensitive:_.caseSensitive===!0,childrenIndex:g,route:_};if(p.relativePath.startsWith("/")){if(!p.relativePath.startsWith(l)&&h)return;xn(p.relativePath.startsWith(l),`Absolute route path "${p.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(l.length)}let y=so([l,p.relativePath]),v=i.concat(p);_.children&&_.children.length>0&&(xn(_.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),Bp(_.children,n,v,y,h)),!(_.path==null&&!_.index)&&n.push({path:y,score:mx(y,_.index),routesMeta:v.map((C,k)=>{let[E,O]=Ip(C.relativePath,C.caseSensitive,k===v.length-1);return{...C,matcher:E,compiledParams:O}})})};return o.forEach((_,g)=>{var h;if(_.path===""||!((h=_.path)!=null&&h.includes("?")))u(_,g);else for(let m of $p(_.path))u(_,g,!0,m)}),n}function $p(o){let n=o.split("/");if(n.length===0)return[];let[i,...l]=n,c=i.endsWith("?"),u=i.replace(/\?$/,"");if(l.length===0)return c?[u,""]:[u];let _=$p(l.join("/")),g=[];return g.push(..._.map(h=>h===""?u:[u,h].join("/"))),c&&g.push(..._),g.map(h=>o.startsWith("/")&&h===""?"/":h)}function rx(o){o.sort((n,i)=>n.score!==i.score?i.score-n.score:px(n.routesMeta.map(l=>l.childrenIndex),i.routesMeta.map(l=>l.childrenIndex)))}var cx=/^:[\w-]+$/,ux=3,dx=2,fx=1,hx=10,_x=-2,Qm=o=>o==="*";function mx(o,n){let i=o.split("/"),l=i.length;return i.some(Qm)&&(l+=_x),n&&(l+=dx),i.filter(c=>!Qm(c)).reduce((c,u)=>c+(cx.test(u)?ux:u===""?fx:hx),l)}function px(o,n){return o.length===n.length&&o.slice(0,-1).every((l,c)=>l===n[c])?o[o.length-1]-n[n.length-1]:0}function gx(o,n,i=!1){let{routesMeta:l}=o,c={},u="/",_=[];for(let g=0;g<l.length;++g){let h=l[g],m=g===l.length-1,p=u==="/"?n:n.slice(u.length)||"/",y={path:h.relativePath,caseSensitive:h.caseSensitive,end:m},v=h.matcher&&h.compiledParams?Pp(y,p,h.matcher,h.compiledParams):cu(y,p),C=h.route;if(!v&&m&&i&&!l[l.length-1].route.index&&(v=cu({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},p)),!v)return null;Object.assign(c,v.params),_.push({params:c,pathname:so([u,v.pathname]),pathnameBase:vx(so([u,v.pathnameBase])),route:C}),v.pathnameBase!=="/"&&(u=so([u,v.pathnameBase]))}return _}function cu(o,n){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[i,l]=Ip(o.path,o.caseSensitive,o.end);return Pp(o,n,i,l)}function Pp(o,n,i,l){let c=n.match(i);if(!c)return null;let u=c[0],_=u.replace(/(.)\/+$/,"$1"),g=c.slice(1);return{params:l.reduce((m,{paramName:p,isOptional:y},v)=>{if(p==="*"){let k=g[v]||"";_=u.slice(0,u.length-k.length).replace(/(.)\/+$/,"$1")}const C=g[v];return y&&!C?m[p]=void 0:m[p]=(C||"").replace(/%2F/g,"/"),m},{}),pathname:u,pathnameBase:_,pattern:o}}function Ip(o,n=!1,i=!0){ko(o==="*"||!o.endsWith("*")||o.endsWith("/*"),`Route path "${o}" will be treated as if it were "${o.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/,"/*")}".`);let l=[],c="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(_,g,h,m,p)=>{if(l.push({paramName:g,isOptional:h!=null}),h){let y=p.charAt(m+_.length);return y&&y!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return o.endsWith("*")?(l.push({paramName:"*"}),c+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?c+="\\/*$":o!==""&&o!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,n?void 0:"i"),l]}function yx(o){try{return o.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return ko(!1,`The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`),o}}function Yo(o,n){if(n==="/")return o;if(!o.toLowerCase().startsWith(n.toLowerCase()))return null;let i=n.endsWith("/")?n.length-1:n.length,l=o.charAt(i);return l&&l!=="/"?null:o.slice(i)||"/"}function xx(o,n="/"){let{pathname:i,search:l="",hash:c=""}=typeof o=="string"?Ja(o):o,u;return i?(i=Hp(i),i.startsWith("/")?u=Vm(i.substring(1),"/"):u=Vm(i,n)):u=n,{pathname:u,search:wx(l),hash:Sx(c)}}function Vm(o,n){let i=uu(n).split("/");return o.split("/").forEach(c=>{c===".."?i.length>1&&i.pop():c!=="."&&i.push(c)}),i.length>1?i.join("/"):"/"}function kf(o,n,i,l){return`Cannot include a '${o}' character in a manually specified \`to.${n}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function bx(o){return o.filter((n,i)=>i===0||n.route.path&&n.route.path.length>0)}function Up(o){let n=bx(o);return n.map((i,l)=>l===n.length-1?i.pathname:i.pathnameBase)}function ph(o,n,i,l=!1){let c;typeof o=="string"?c=Ja(o):(c={...o},xn(!c.pathname||!c.pathname.includes("?"),kf("?","pathname","search",c)),xn(!c.pathname||!c.pathname.includes("#"),kf("#","pathname","hash",c)),xn(!c.search||!c.search.includes("#"),kf("#","search","hash",c)));let u=o===""||c.pathname==="",_=u?"/":c.pathname,g;if(_==null)g=i;else{let y=n.length-1;if(!l&&_.startsWith("..")){let v=_.split("/");for(;v[0]==="..";)v.shift(),y-=1;c.pathname=v.join("/")}g=y>=0?n[y]:"/"}let h=xx(c,g),m=_&&_!=="/"&&_.endsWith("/"),p=(u||_===".")&&i.endsWith("/");return!h.pathname.endsWith("/")&&(m||p)&&(h.pathname+="/"),h}var Hp=o=>o.replace(/[\\/]{2,}/g,"/"),so=o=>Hp(o.join("/")),uu=o=>o.replace(/\/+$/,""),vx=o=>uu(o).replace(/^\/*/,"/"),wx=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,Sx=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o,kx=class{constructor(o,n,i,l=!1){this.status=o,this.statusText=n||"",this.internal=l,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function Cx(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}function jx(o){let n=o.map(i=>i.route.path).filter(Boolean);return so(n)||"/"}var Yp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Xp(o,n){let i=o;if(typeof i!="string"||!mh.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let l=i,c=!1;if(Yp)try{let u=new URL(window.location.href),_=Op.test(i)?new URL(tx(i,u.protocol)):new URL(i),g=Yo(_.pathname,n);_.origin===u.origin&&g!=null?i=g+_.search+_.hash:c=!0}catch{ko(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:l,isExternal:c,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Fp=["POST","PUT","PATCH","DELETE"];new Set(Fp);var Mx=["GET",...Fp];new Set(Mx);var Ex=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function Tx(o){try{return Ex.includes(new URL(o).protocol)}catch{return!1}}var el=b.createContext(null);el.displayName="DataRouter";var gu=b.createContext(null);gu.displayName="DataRouterState";var Gp=b.createContext(!1);function Rx(){return b.useContext(Gp)}var Wp=b.createContext({isTransitioning:!1});Wp.displayName="ViewTransition";var Dx=b.createContext(new Map);Dx.displayName="Fetchers";var Ax=b.createContext(null);Ax.displayName="Await";var qs=b.createContext(null);qs.displayName="Navigation";var mr=b.createContext(null);mr.displayName="Location";var Xo=b.createContext({outlet:null,matches:[],isDataRoute:!1});Xo.displayName="Route";var gh=b.createContext(null);gh.displayName="RouteError";var qp="REACT_ROUTER_ERROR",Nx="REDIRECT",Lx="ROUTE_ERROR_RESPONSE";function Ox(o){if(o.startsWith(`${qp}:${Nx}:{`))try{let n=JSON.parse(o.slice(28));if(typeof n=="object"&&n&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.location=="string"&&typeof n.reloadDocument=="boolean"&&typeof n.replace=="boolean")return n}catch{}}function zx(o){if(o.startsWith(`${qp}:${Lx}:{`))try{let n=JSON.parse(o.slice(40));if(typeof n=="object"&&n&&typeof n.status=="number"&&typeof n.statusText=="string")return new kx(n.status,n.statusText,n.data)}catch{}}function Bx(o,{relative:n}={}){xn(pr(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:l}=b.useContext(qs),{hash:c,pathname:u,search:_}=gr(o,{relative:n}),g=u;return i!=="/"&&(g=u==="/"?i:so([i,u])),l.createHref({pathname:g,search:_,hash:c})}function pr(){return b.useContext(mr)!=null}function Co(){return xn(pr(),"useLocation() may be used only in the context of a <Router> component."),b.useContext(mr).location}var Qp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Vp(o){b.useContext(qs).static||b.useLayoutEffect(o)}function $x(){let{isDataRoute:o}=b.useContext(Xo);return o?Kx():Px()}function Px(){xn(pr(),"useNavigate() may be used only in the context of a <Router> component.");let o=b.useContext(el),{basename:n,navigator:i}=b.useContext(qs),{matches:l}=b.useContext(Xo),{pathname:c}=Co(),u=JSON.stringify(Up(l)),_=b.useRef(!1);return Vp(()=>{_.current=!0}),b.useCallback((h,m={})=>{if(ko(_.current,Qp),!_.current)return;if(typeof h=="number"){i.go(h);return}let p=ph(h,JSON.parse(u),c,m.relative==="path");o==null&&n!=="/"&&(p.pathname=p.pathname==="/"?n:so([n,p.pathname])),(m.replace?i.replace:i.push)(p,m.state,m)},[n,i,u,c,o])}b.createContext(null);function gr(o,{relative:n}={}){let{matches:i}=b.useContext(Xo),{pathname:l}=Co(),c=JSON.stringify(Up(i));return b.useMemo(()=>ph(o,JSON.parse(c),l,n==="path"),[o,c,l,n])}function Ix(o,n){return Kp(o,n)}function Kp(o,n,i){var O;xn(pr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=b.useContext(qs),{matches:c}=b.useContext(Xo),u=c[c.length-1],_=u?u.params:{},g=u?u.pathname:"/",h=u?u.pathnameBase:"/",m=u&&u.route;{let B=m&&m.path||"";Jp(g,!m||B.endsWith("*")||B.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${B}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${B}"> to <Route path="${B==="/"?"*":`${B}/*`}">.`)}let p=Co(),y;if(n){let B=typeof n=="string"?Ja(n):n;xn(h==="/"||((O=B.pathname)==null?void 0:O.startsWith(h)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${B.pathname}" was given in the \`location\` prop.`),y=B}else y=p;let v=y.pathname||"/",C=v;if(h!=="/"){let B=h.replace(/^\//,"").split("/");C="/"+v.replace(/^\//,"").split("/").slice(B.length).join("/")}let k=i&&i.state.matches.length?i.state.matches.map(B=>Object.assign(B,{route:i.manifest[B.route.id]||B.route})):zp(o,{pathname:C});ko(m||k!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),ko(k==null||k[k.length-1].route.element!==void 0||k[k.length-1].route.Component!==void 0||k[k.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let E=Fx(k&&k.map(B=>Object.assign({},B,{params:Object.assign({},_,B.params),pathname:so([h,l.encodeLocation?l.encodeLocation(B.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:B.pathname]),pathnameBase:B.pathnameBase==="/"?h:so([h,l.encodeLocation?l.encodeLocation(B.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:B.pathnameBase])})),c,i);return n&&E?b.createElement(mr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...y},navigationType:"POP"}},E):E}function Ux(){let o=Vx(),n=Cx(o)?`${o.status} ${o.statusText}`:o instanceof Error?o.message:JSON.stringify(o),i=o instanceof Error?o.stack:null,l="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:l},u={padding:"2px 4px",backgroundColor:l},_=null;return console.error("Error handled by React Router default ErrorBoundary:",o),_=b.createElement(b.Fragment,null,b.createElement("p",null,"💿 Hey developer 👋"),b.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",b.createElement("code",{style:u},"ErrorBoundary")," or"," ",b.createElement("code",{style:u},"errorElement")," prop on your route.")),b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},n),i?b.createElement("pre",{style:c},i):null,_)}var Hx=b.createElement(Ux,null),Zp=class extends b.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,n){return n.location!==o.location||n.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:n.error,location:n.location,revalidation:o.revalidation||n.revalidation}}componentDidCatch(o,n){this.props.onError?this.props.onError(o,n):console.error("React Router caught the following error during render",o)}render(){let o=this.state.error;if(this.context&&typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){const i=zx(o.digest);i&&(o=i)}let n=o!==void 0?b.createElement(Xo.Provider,{value:this.props.routeContext},b.createElement(gh.Provider,{value:o,children:this.props.component})):this.props.children;return this.context?b.createElement(Yx,{error:o},n):n}};Zp.contextType=Gp;var Cf=new WeakMap;function Yx({children:o,error:n}){let{basename:i}=b.useContext(qs);if(typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){let l=Ox(n.digest);if(l){let c=Cf.get(n);if(c)throw c;let u=Xp(l.location,i),_=u.absoluteURL||u.to;if(Tx(_))throw new Error("Invalid redirect location");if(Yp&&!Cf.get(n))if(u.isExternal||l.reloadDocument)window.location.href=_;else{const g=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(u.to,{replace:l.replace}));throw Cf.set(n,g),g}return b.createElement("meta",{httpEquiv:"refresh",content:`0;url=${_}`})}}return o}function Xx({routeContext:o,match:n,children:i}){let l=b.useContext(el);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Xo.Provider,{value:o},i)}function Fx(o,n=[],i){let l=i==null?void 0:i.state;if(o==null){if(!l)return null;if(l.errors)o=l.matches;else if(n.length===0&&!l.initialized&&l.matches.length>0)o=l.matches;else return null}let c=o,u=l==null?void 0:l.errors;if(u!=null){let p=c.findIndex(y=>y.route.id&&(u==null?void 0:u[y.route.id])!==void 0);xn(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),c=c.slice(0,Math.min(c.length,p+1))}let _=!1,g=-1;if(i&&l){_=l.renderFallback;for(let p=0;p<c.length;p++){let y=c[p];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(g=p),y.route.id){let{loaderData:v,errors:C}=l,k=y.route.loader&&!v.hasOwnProperty(y.route.id)&&(!C||C[y.route.id]===void 0);if(y.route.lazy||k){i.isStatic&&(_=!0),g>=0?c=c.slice(0,g+1):c=[c[0]];break}}}}let h=i==null?void 0:i.onError,m=l&&h?(p,y)=>{var v,C;h(p,{location:l.location,params:((C=(v=l.matches)==null?void 0:v[0])==null?void 0:C.params)??{},pattern:jx(l.matches),errorInfo:y})}:void 0;return c.reduceRight((p,y,v)=>{let C,k=!1,E=null,O=null;l&&(C=u&&y.route.id?u[y.route.id]:void 0,E=y.route.errorElement||Hx,_&&(g<0&&v===0?(Jp("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),k=!0,O=null):g===v&&(k=!0,O=y.route.hydrateFallbackElement||null)));let B=n.concat(c.slice(0,v+1)),J=()=>{let F;return C?F=E:k?F=O:y.route.Component?F=b.createElement(y.route.Component,null):y.route.element?F=y.route.element:F=p,b.createElement(Xx,{match:y,routeContext:{outlet:p,matches:B,isDataRoute:l!=null},children:F})};return l&&(y.route.ErrorBoundary||y.route.errorElement||v===0)?b.createElement(Zp,{location:l.location,revalidation:l.revalidation,component:E,error:C,children:J(),routeContext:{outlet:null,matches:B,isDataRoute:!0},onError:m}):J()},null)}function yh(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Gx(o){let n=b.useContext(el);return xn(n,yh(o)),n}function Wx(o){let n=b.useContext(gu);return xn(n,yh(o)),n}function qx(o){let n=b.useContext(Xo);return xn(n,yh(o)),n}function xh(o){let n=qx(o),i=n.matches[n.matches.length-1];return xn(i.route.id,`${o} can only be used on routes that contain a unique "id"`),i.route.id}function Qx(){return xh("useRouteId")}function Vx(){var l;let o=b.useContext(gh),n=Wx("useRouteError"),i=xh("useRouteError");return o!==void 0?o:(l=n.errors)==null?void 0:l[i]}function Kx(){let{router:o}=Gx("useNavigate"),n=xh("useNavigate"),i=b.useRef(!1);return Vp(()=>{i.current=!0}),b.useCallback(async(c,u={})=>{ko(i.current,Qp),i.current&&(typeof c=="number"?await o.navigate(c):await o.navigate(c,{fromRouteId:n,...u}))},[o,n])}var Km={};function Jp(o,n,i){!n&&!Km[o]&&(Km[o]=!0,ko(!1,i))}b.memo(Zx);function Zx({routes:o,manifest:n,future:i,state:l,isStatic:c,onError:u}){return Kp(o,void 0,{manifest:n,state:l,isStatic:c,onError:u})}function Xf(o){xn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Jx({basename:o="/",children:n=null,location:i,navigationType:l="POP",navigator:c,static:u=!1,useTransitions:_}){xn(!pr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let g=o.replace(/^\/*/,"/"),h=b.useMemo(()=>({basename:g,navigator:c,static:u,useTransitions:_,future:{}}),[g,c,u,_]);typeof i=="string"&&(i=Ja(i));let{pathname:m="/",search:p="",hash:y="",state:v=null,key:C="default",mask:k}=i,E=b.useMemo(()=>{let O=Yo(m,g);return O==null?null:{location:{pathname:O,search:p,hash:y,state:v,key:C,mask:k},navigationType:l}},[g,m,p,y,v,C,l,k]);return ko(E!=null,`<Router basename="${g}"> is not able to match the URL "${m}${p}${y}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:b.createElement(qs.Provider,{value:h},b.createElement(mr.Provider,{children:n,value:E}))}function e2({children:o,location:n}){return Ix(Ff(o),n)}function Ff(o,n=[]){let i=[];return b.Children.forEach(o,(l,c)=>{if(!b.isValidElement(l))return;let u=[...n,c];if(l.type===b.Fragment){i.push.apply(i,Ff(l.props.children,u));return}xn(l.type===Xf,`[${typeof l.type=="string"?l.type:l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),xn(!l.props.index||!l.props.children,"An index route cannot have child routes.");let _={id:l.props.id||u.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,middleware:l.props.middleware,loader:l.props.loader,action:l.props.action,hydrateFallbackElement:l.props.hydrateFallbackElement,HydrateFallback:l.props.HydrateFallback,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.hasErrorBoundary===!0||l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(_.children=Ff(l.props.children,u)),i.push(_)}),i}var tu="get",nu="application/x-www-form-urlencoded";function yu(o){return typeof HTMLElement<"u"&&o instanceof HTMLElement}function t2(o){return yu(o)&&o.tagName.toLowerCase()==="button"}function n2(o){return yu(o)&&o.tagName.toLowerCase()==="form"}function s2(o){return yu(o)&&o.tagName.toLowerCase()==="input"}function o2(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function i2(o,n){return o.button===0&&(!n||n==="_self")&&!o2(o)}var Ic=null;function a2(){if(Ic===null)try{new FormData(document.createElement("form"),0),Ic=!1}catch{Ic=!0}return Ic}var l2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function jf(o){return o!=null&&!l2.has(o)?(ko(!1,`"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${nu}"`),null):o}function r2(o,n){let i,l,c,u,_;if(n2(o)){let g=o.getAttribute("action");l=g?Yo(g,n):null,i=o.getAttribute("method")||tu,c=jf(o.getAttribute("enctype"))||nu,u=new FormData(o)}else if(t2(o)||s2(o)&&(o.type==="submit"||o.type==="image")){let g=o.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=o.getAttribute("formaction")||g.getAttribute("action");if(l=h?Yo(h,n):null,i=o.getAttribute("formmethod")||g.getAttribute("method")||tu,c=jf(o.getAttribute("formenctype"))||jf(g.getAttribute("enctype"))||nu,u=new FormData(g,o),!a2()){let{name:m,type:p,value:y}=o;if(p==="image"){let v=m?`${m}.`:"";u.append(`${v}x`,"0"),u.append(`${v}y`,"0")}else m&&u.append(m,y)}}else{if(yu(o))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=tu,l=null,c=nu,_=o}return u&&c==="text/plain"&&(_=u,u=void 0),{action:l,method:i.toLowerCase(),encType:c,formData:u,body:_}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function bh(o,n){if(o===!1||o===null||typeof o>"u")throw new Error(n)}function eg(o,n,i,l){let c=typeof o=="string"?new URL(o,typeof window>"u"?"server://singlefetch/":window.location.origin):o;return i?c.pathname.endsWith("/")?c.pathname=`${c.pathname}_.${l}`:c.pathname=`${c.pathname}.${l}`:c.pathname==="/"?c.pathname=`_root.${l}`:n&&Yo(c.pathname,n)==="/"?c.pathname=`${uu(n)}/_root.${l}`:c.pathname=`${uu(c.pathname)}.${l}`,c}async function c2(o,n){if(o.id in n)return n[o.id];try{let i=await import(o.module);return n[o.id]=i,i}catch(i){return console.error(`Error loading route module \`${o.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function u2(o){return o==null?!1:o.href==null?o.rel==="preload"&&typeof o.imageSrcSet=="string"&&typeof o.imageSizes=="string":typeof o.rel=="string"&&typeof o.href=="string"}async function d2(o,n,i){let l=await Promise.all(o.map(async c=>{let u=n.routes[c.route.id];if(u){let _=await c2(u,i);return _.links?_.links():[]}return[]}));return m2(l.flat(1).filter(u2).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function Zm(o,n,i,l,c,u){let _=(h,m)=>i[m]?h.route.id!==i[m].route.id:!0,g=(h,m)=>{var p;return i[m].pathname!==h.pathname||((p=i[m].route.path)==null?void 0:p.endsWith("*"))&&i[m].params["*"]!==h.params["*"]};return u==="assets"?n.filter((h,m)=>_(h,m)||g(h,m)):u==="data"?n.filter((h,m)=>{var y;let p=l.routes[h.route.id];if(!p||!p.hasLoader)return!1;if(_(h,m)||g(h,m))return!0;if(h.route.shouldRevalidate){let v=h.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:((y=i[0])==null?void 0:y.params)||{},nextUrl:new URL(o,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function f2(o,n,{includeHydrateFallback:i}={}){return h2(o.map(l=>{let c=n.routes[l.route.id];if(!c)return[];let u=[c.module];return c.clientActionModule&&(u=u.concat(c.clientActionModule)),c.clientLoaderModule&&(u=u.concat(c.clientLoaderModule)),i&&c.hydrateFallbackModule&&(u=u.concat(c.hydrateFallbackModule)),c.imports&&(u=u.concat(c.imports)),u}).flat(1))}function h2(o){return[...new Set(o)]}function _2(o){let n={},i=Object.keys(o).sort();for(let l of i)n[l]=o[l];return n}function m2(o,n){let i=new Set;return new Set(n),o.reduce((l,c)=>{let u=JSON.stringify(_2(c));return i.has(u)||(i.add(u),l.push({key:u,link:c})),l},[])}function vh(){let o=b.useContext(el);return bh(o,"You must render this element inside a <DataRouterContext.Provider> element"),o}function p2(){let o=b.useContext(gu);return bh(o,"You must render this element inside a <DataRouterStateContext.Provider> element"),o}var wh=b.createContext(void 0);wh.displayName="FrameworkContext";function xu(){let o=b.useContext(wh);return bh(o,"You must render this element inside a <HydratedRouter> element"),o}function g2(o,n){let i=b.useContext(wh),[l,c]=b.useState(!1),[u,_]=b.useState(!1),{onFocus:g,onBlur:h,onMouseEnter:m,onMouseLeave:p,onTouchStart:y}=n,v=b.useRef(null);b.useEffect(()=>{if(o==="render"&&_(!0),o==="viewport"){let E=B=>{B.forEach(J=>{_(J.isIntersecting)})},O=new IntersectionObserver(E,{threshold:.5});return v.current&&O.observe(v.current),()=>{O.disconnect()}}},[o]),b.useEffect(()=>{if(l){let E=setTimeout(()=>{_(!0)},100);return()=>{clearTimeout(E)}}},[l]);let C=()=>{c(!0)},k=()=>{c(!1),_(!1)};return i?o!=="intent"?[u,v,{}]:[u,v,{onFocus:Jl(g,C),onBlur:Jl(h,k),onMouseEnter:Jl(m,C),onMouseLeave:Jl(p,k),onTouchStart:Jl(y,C)}]:[!1,v,{}]}function Jl(o,n){return i=>{o&&o(i),i.defaultPrevented||n(i)}}function y2({page:o,...n}){let i=Rx(),{nonce:l}=xu(),{router:c}=vh(),u=b.useMemo(()=>zp(c.routes,o,c.basename),[c.routes,o,c.basename]);return u?(n.nonce==null&&l&&(n={...n,nonce:l}),i?b.createElement(b2,{page:o,matches:u,...n}):b.createElement(v2,{page:o,matches:u,...n})):null}function x2(o){let{manifest:n,routeModules:i}=xu(),[l,c]=b.useState([]);return b.useEffect(()=>{let u=!1;return d2(o,n,i).then(_=>{u||c(_)}),()=>{u=!0}},[o,n,i]),l}function b2({page:o,matches:n,...i}){let l=Co(),{future:c}=xu(),{basename:u}=vh(),_=b.useMemo(()=>{if(o===l.pathname+l.search+l.hash)return[];let g=eg(o,u,c.v8_trailingSlashAwareDataRequests,"rsc"),h=!1,m=[];for(let p of n)typeof p.route.shouldRevalidate=="function"?h=!0:m.push(p.route.id);return h&&m.length>0&&g.searchParams.set("_routes",m.join(",")),[g.pathname+g.search]},[u,c.v8_trailingSlashAwareDataRequests,o,l,n]);return b.createElement(b.Fragment,null,_.map(g=>b.createElement("link",{key:g,rel:"prefetch",as:"fetch",href:g,...i})))}function v2({page:o,matches:n,...i}){let l=Co(),{future:c,manifest:u,routeModules:_}=xu(),{basename:g}=vh(),{loaderData:h,matches:m}=p2(),p=b.useMemo(()=>Zm(o,n,m,u,l,"data"),[o,n,m,u,l]),y=b.useMemo(()=>Zm(o,n,m,u,l,"assets"),[o,n,m,u,l]),v=b.useMemo(()=>{if(o===l.pathname+l.search+l.hash)return[];let E=new Set,O=!1;if(n.forEach(J=>{var z;let F=u.routes[J.route.id];!F||!F.hasLoader||(!p.some(de=>de.route.id===J.route.id)&&J.route.id in h&&((z=_[J.route.id])!=null&&z.shouldRevalidate)||F.hasClientLoader?O=!0:E.add(J.route.id))}),E.size===0)return[];let B=eg(o,g,c.v8_trailingSlashAwareDataRequests,"data");return O&&E.size>0&&B.searchParams.set("_routes",n.filter(J=>E.has(J.route.id)).map(J=>J.route.id).join(",")),[B.pathname+B.search]},[g,c.v8_trailingSlashAwareDataRequests,h,l,u,p,n,o,_]),C=b.useMemo(()=>f2(y,u),[y,u]),k=x2(y);return b.createElement(b.Fragment,null,v.map(E=>b.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...i})),C.map(E=>b.createElement("link",{key:E,rel:"modulepreload",href:E,...i})),k.map(({key:E,link:O})=>b.createElement("link",{key:E,nonce:i.nonce,...O,crossOrigin:O.crossOrigin??i.crossOrigin})))}function w2(...o){return n=>{o.forEach(i=>{typeof i=="function"?i(n):i!=null&&(i.current=n)})}}var S2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{S2&&(window.__reactRouterVersion="7.18.2")}catch{}function k2({basename:o,children:n,useTransitions:i,window:l}){let c=b.useRef();c.current==null&&(c.current=nx({window:l,v5Compat:!0}));let u=c.current,[_,g]=b.useState({action:u.action,location:u.location}),h=b.useCallback(m=>{i===!1?g(m):b.startTransition(()=>g(m))},[i]);return b.useLayoutEffect(()=>u.listen(h),[u,h]),b.createElement(Jx,{basename:o,children:n,location:_.location,navigationType:_.action,navigator:u,useTransitions:i})}var rr=b.forwardRef(function({onClick:n,discover:i="render",prefetch:l="none",relative:c,reloadDocument:u,replace:_,mask:g,state:h,target:m,to:p,preventScrollReset:y,viewTransition:v,defaultShouldRevalidate:C,...k},E){let{basename:O,navigator:B,useTransitions:J}=b.useContext(qs),F=typeof p=="string"&&mh.test(p),z=Xp(p,O);p=z.to;let de=Bx(p,{relative:c}),ye=Co(),G=null;if(g){let ke=ph(g,[],ye.mask?ye.mask.pathname:"/",!0);O!=="/"&&(ke.pathname=ke.pathname==="/"?O:so([O,ke.pathname])),G=B.createHref(ke)}let[fe,xe,he]=g2(l,k),re=E2(p,{replace:_,mask:g,state:h,target:m,preventScrollReset:y,relative:c,viewTransition:v,defaultShouldRevalidate:C,useTransitions:J});function Q(ke){n&&n(ke),ke.defaultPrevented||re(ke)}let Oe=!(z.isExternal||u),oe=b.createElement("a",{...k,...he,href:(Oe?G:void 0)||z.absoluteURL||de,onClick:Oe?Q:n,ref:w2(E,xe),target:m,"data-discover":!F&&i==="render"?"true":void 0});return fe&&!F?b.createElement(b.Fragment,null,oe,b.createElement(y2,{page:de})):oe});rr.displayName="Link";var C2=b.forwardRef(function({"aria-current":n="page",caseSensitive:i=!1,className:l="",end:c=!1,style:u,to:_,viewTransition:g,children:h,...m},p){let y=gr(_,{relative:m.relative}),v=Co(),C=b.useContext(gu),{navigator:k,basename:E}=b.useContext(qs),O=C!=null&&N2(y)&&g===!0,B=k.encodeLocation?k.encodeLocation(y).pathname:y.pathname,J=v.pathname,F=C&&C.navigation&&C.navigation.location?C.navigation.location.pathname:null;i||(J=J.toLowerCase(),F=F?F.toLowerCase():null,B=B.toLowerCase()),F&&E&&(F=Yo(F,E)||F);const z=B!=="/"&&B.endsWith("/")?B.length-1:B.length;let de=J===B||!c&&J.startsWith(B)&&J.charAt(z)==="/",ye=F!=null&&(F===B||!c&&F.startsWith(B)&&F.charAt(B.length)==="/"),G={isActive:de,isPending:ye,isTransitioning:O},fe=de?n:void 0,xe;typeof l=="function"?xe=l(G):xe=[l,de?"active":null,ye?"pending":null,O?"transitioning":null].filter(Boolean).join(" ");let he=typeof u=="function"?u(G):u;return b.createElement(rr,{...m,"aria-current":fe,className:xe,ref:p,style:he,to:_,viewTransition:g},typeof h=="function"?h(G):h)});C2.displayName="NavLink";var j2=b.forwardRef(({discover:o="render",fetcherKey:n,navigate:i,reloadDocument:l,replace:c,state:u,method:_=tu,action:g,onSubmit:h,relative:m,preventScrollReset:p,viewTransition:y,defaultShouldRevalidate:v,...C},k)=>{let{useTransitions:E}=b.useContext(qs),O=D2(),B=A2(g,{relative:m}),J=_.toLowerCase()==="get"?"get":"post",F=typeof g=="string"&&mh.test(g),z=de=>{if(h&&h(de),de.defaultPrevented)return;de.preventDefault();let ye=de.nativeEvent.submitter,G=(ye==null?void 0:ye.getAttribute("formmethod"))||_,fe=()=>O(ye||de.currentTarget,{fetcherKey:n,method:G,navigate:i,replace:c,state:u,relative:m,preventScrollReset:p,viewTransition:y,defaultShouldRevalidate:v});E&&i!==!1?b.startTransition(()=>fe()):fe()};return b.createElement("form",{ref:k,method:J,action:B,onSubmit:l?h:z,...C,"data-discover":!F&&o==="render"?"true":void 0})});j2.displayName="Form";function M2(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function tg(o){let n=b.useContext(el);return xn(n,M2(o)),n}function E2(o,{target:n,replace:i,mask:l,state:c,preventScrollReset:u,relative:_,viewTransition:g,defaultShouldRevalidate:h,useTransitions:m}={}){let p=$x(),y=Co(),v=gr(o,{relative:_});return b.useCallback(C=>{if(i2(C,n)){C.preventDefault();let k=i!==void 0?i:fr(y)===fr(v),E=()=>p(o,{replace:k,mask:l,state:c,preventScrollReset:u,relative:_,viewTransition:g,defaultShouldRevalidate:h});m?b.startTransition(()=>E()):E()}},[y,p,v,i,l,c,n,o,u,_,g,h,m])}var T2=0,R2=()=>`__${String(++T2)}__`;function D2(){let{router:o}=tg("useSubmit"),{basename:n}=b.useContext(qs),i=Qx(),l=o.fetch,c=o.navigate;return b.useCallback(async(u,_={})=>{let{action:g,method:h,encType:m,formData:p,body:y}=r2(u,n);if(_.navigate===!1){let v=_.fetcherKey||R2();await l(v,i,_.action||g,{defaultShouldRevalidate:_.defaultShouldRevalidate,preventScrollReset:_.preventScrollReset,formData:p,body:y,formMethod:_.method||h,formEncType:_.encType||m,flushSync:_.flushSync})}else await c(_.action||g,{defaultShouldRevalidate:_.defaultShouldRevalidate,preventScrollReset:_.preventScrollReset,formData:p,body:y,formMethod:_.method||h,formEncType:_.encType||m,replace:_.replace,state:_.state,fromRouteId:i,flushSync:_.flushSync,viewTransition:_.viewTransition})},[l,c,n,i])}function A2(o,{relative:n}={}){let{basename:i}=b.useContext(qs),l=b.useContext(Xo);xn(l,"useFormAction must be used inside a RouteContext");let[c]=l.matches.slice(-1),u={...gr(o||".",{relative:n})},_=Co();if(o==null){u.search=_.search;let g=new URLSearchParams(u.search),h=g.getAll("index");if(h.some(p=>p==="")){g.delete("index"),h.filter(y=>y).forEach(y=>g.append("index",y));let p=g.toString();u.search=p?`?${p}`:""}}return(!o||o===".")&&c.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:so([i,u.pathname])),fr(u)}function N2(o,{relative:n}={}){let i=b.useContext(Wp);xn(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:l}=tg("useViewTransitionState"),c=gr(o,{relative:n});if(!i.isTransitioning)return!1;let u=Yo(i.currentLocation.pathname,l)||i.currentLocation.pathname,_=Yo(i.nextLocation.pathname,l)||i.nextLocation.pathname;return cu(c.pathname,_)!=null||cu(c.pathname,u)!=null}var ng=Lp();const L2=.08;function Uc(o){return Math.abs(o)<L2?0:o}function O2(){const[o,n]=b.useState({}),i=b.useRef(null),l=b.useCallback(()=>{var g,h,m,p,y,v,C,k,E,O,B,J;const u=navigator.getGamepads?navigator.getGamepads():[],_={};for(let F=0;F<u.length;F++){const z=u[F];z&&(_[z.index]={index:z.index,id:z.id,connected:z.connected,axes:{leftStickX:Uc(z.axes[0]||0),leftStickY:Uc(z.axes[1]||0),rightStickX:Uc(z.axes[2]||0),rightStickY:Uc(z.axes[3]||0)},buttons:{a:((g=z.buttons[0])==null?void 0:g.pressed)||!1,b:((h=z.buttons[1])==null?void 0:h.pressed)||!1,x:((m=z.buttons[2])==null?void 0:m.pressed)||!1,y:((p=z.buttons[3])==null?void 0:p.pressed)||!1,lb:((y=z.buttons[4])==null?void 0:y.pressed)||!1,rb:((v=z.buttons[5])==null?void 0:v.pressed)||!1,lt:((C=z.buttons[6])==null?void 0:C.value)||0,rt:((k=z.buttons[7])==null?void 0:k.value)||0,back:((E=z.buttons[8])==null?void 0:E.pressed)||!1,start:((O=z.buttons[9])==null?void 0:O.pressed)||!1,lsClick:((B=z.buttons[10])==null?void 0:B.pressed)||!1,rsClick:((J=z.buttons[11])==null?void 0:J.pressed)||!1}})}n(_),i.current=requestAnimationFrame(l)},[]);return b.useEffect(()=>{const u=g=>{console.log(`[useGamepad] Connected index ${g.gamepad.index}: ${g.gamepad.id}`)},_=g=>{console.log(`[useGamepad] Disconnected index ${g.gamepad.index}`)};return window.addEventListener("gamepadconnected",u),window.addEventListener("gamepaddisconnected",_),i.current=requestAnimationFrame(l),()=>{window.removeEventListener("gamepadconnected",u),window.removeEventListener("gamepaddisconnected",_),i.current!==null&&cancelAnimationFrame(i.current)}},[l]),{gamepads:o,triggerVibration:async(u,_=.5,g=.8,h=400)=>{const p=(navigator.getGamepads?navigator.getGamepads():[])[u];if(p&&p.vibrationActuator&&p.vibrationActuator.playEffect)try{return await p.vibrationActuator.playEffect("dual-rumble",{startDelay:0,duration:h,weakMagnitude:_,strongMagnitude:g}),!0}catch(y){console.warn("Vibration playEffect error:",y)}return!1}}}function z2(o,n=!0){const i=b.useRef(o),l=b.useRef(null);b.useEffect(()=>{i.current=o},[o]),b.useEffect(()=>{if(!n)return;let c;const u=_=>{if(l.current!==null){const g=(_-l.current)/1e3;i.current(g)}l.current=_,c=requestAnimationFrame(u)};return c=requestAnimationFrame(u),()=>{cancelAnimationFrame(c),l.current=null}},[n])}class B2{constructor(n=2200,i=1350){Be(this,"width");Be(this,"height");Be(this,"pitchBounds");Be(this,"goals");this.width=n,this.height=i,this.pitchBounds={left:0,right:n,top:0,bottom:i},this.goals={homeGoal:{x:0,top:0,bottom:0},awayGoal:{x:n,top:0,bottom:0}},this.recalculate(n,i)}recalculate(n,i){this.width=n,this.height=i;const l=n*.07,c=i*.08;this.pitchBounds={left:l,right:n-l,top:c,bottom:i-c};const u=i*.32,_=(i-u)/2,g=_+u;this.goals={homeGoal:{x:l,top:_,bottom:g},awayGoal:{x:n-l,top:_,bottom:g}}}draw(n){const i=this.width,l=this.height,c=this.pitchBounds,u=c.right-c.left,_=c.bottom-c.top;n.fillStyle="#489c46",n.fillRect(0,0,i,l);const g=12,h=u/g,m="#3f8c3d",p="#4ba448";for(let F=0;F<g;F++){n.fillStyle=F%2===0?m:p;const z=c.left+F*h;n.fillRect(z,c.top,h,_)}const y=c.left*.75,v=this.goals.homeGoal.top,C=this.goals.homeGoal.bottom-v;n.fillStyle="#b94b4b",n.fillRect(c.left-y,v,y,C),n.strokeStyle="#ffffff",n.lineWidth=4,n.strokeRect(c.left-y,v,y,C),n.fillStyle="#498eb9",n.fillRect(c.right,v,y,C),n.strokeStyle="#ffffff",n.lineWidth=4,n.strokeRect(c.right,v,y,C),n.strokeStyle="#ffffff",n.lineWidth=4.5,n.beginPath(),n.roundRect(c.left,c.top,u,_,12),n.stroke();const k=c.left+u*.5;n.beginPath(),n.moveTo(k,c.top),n.lineTo(k,c.bottom),n.stroke();const E=Math.min(u,_)*.18;n.beginPath(),n.arc(k,c.top+_*.5,E,0,Math.PI*2),n.stroke(),n.fillStyle="#ffffff",n.beginPath(),n.arc(k,c.top+_*.5,6,0,Math.PI*2),n.fill();const O=u*.16,B=_*.52,J=c.top+(_-B)/2;n.strokeRect(c.left,J,O,B),n.strokeRect(c.right-O,J,O,B)}}const $2="data:image/svg+xml,%3csvg%20width='122'%20height='122'%20viewBox='0%200%20122%20122'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_6_39)'%3e%3ccircle%20cx='65.0826'%20cy='65.0826'%20r='57.0826'%20fill='white'/%3e%3cpath%20d='M65.6422%207C33.8586%207%208%2032.8586%208%2064.6422C8%2096.4258%2033.8586%20122.284%2065.6422%20122.284C97.4258%20122.284%20123.284%2096.4258%20123.284%2064.6422C123.284%2032.8586%2097.4258%207%2065.6422%207ZM105.271%2091.2463H92.7396C92.3513%2091.2454%2091.97%2091.1425%2091.6339%2090.948C91.2979%2090.7535%2091.0188%2090.4741%2090.8246%2090.1378L86.3518%2082.4669C86.0574%2081.9654%2085.9718%2081.3682%2086.1135%2080.8042L90.2316%2064.1988C90.3142%2063.8642%2090.4737%2063.5535%2090.6974%2063.2913C90.9211%2063.0291%2091.2028%2062.8227%2091.5202%2062.6885L99.3075%2059.3907C99.688%2059.2293%20100.106%2059.1775%20100.514%2059.2412C100.923%2059.3048%20101.305%2059.4814%20101.619%2059.7509L113.155%2069.6776C113.44%2069.9224%20113.657%2070.2355%20113.788%2070.5874C113.918%2070.9392%20113.957%2071.3185%20113.901%2071.6895C112.945%2078.2445%20110.655%2084.5337%20107.172%2090.1683C106.976%2090.4969%20106.697%2090.7689%20106.364%2090.9578C106.031%2091.1467%20105.654%2091.2461%20105.271%2091.2463ZM31.9769%2059.4128L39.7642%2062.7106C40.0816%2062.8449%2040.3633%2063.0513%2040.587%2063.3135C40.8107%2063.5757%2040.9702%2063.8864%2041.0528%2064.221L45.1709%2080.8264C45.3126%2081.3904%2045.227%2081.9876%2044.9326%2082.4891L40.4598%2090.1378C40.2656%2090.4741%2039.9865%2090.7535%2039.6505%2090.948C39.3144%2091.1425%2038.9331%2091.2454%2038.5448%2091.2463H26.0132C25.6342%2091.2465%2025.2614%2091.1496%2024.9305%2090.9648C24.5997%2090.7799%2024.3217%2090.5133%2024.1232%2090.1904C20.6401%2084.5559%2018.35%2078.2666%2017.3946%2071.7117C17.3384%2071.3406%2017.3773%2070.9614%2017.5077%2070.6095C17.6381%2070.2576%2017.8557%2069.9446%2018.14%2069.6997L29.6768%2059.7731C29.9891%2059.5057%2030.3696%2059.3304%2030.7758%2059.2667C31.182%2059.2031%2031.5978%2059.2537%2031.9769%2059.4128ZM103.182%2035.2364L98.174%2049.4751C98.0734%2049.7661%2097.9132%2050.0329%2097.7038%2050.2586C97.4943%2050.4843%2097.2401%2050.6639%2096.9574%2050.7859L88.76%2054.2583C88.3839%2054.4174%2087.971%2054.4696%2087.5671%2054.4089C87.1632%2054.3483%2086.7839%2054.1772%2086.471%2053.9146L70.8799%2040.8371C70.6307%2040.631%2070.4297%2040.3728%2070.2909%2040.0808C70.1521%2039.7888%2070.0788%2039.4699%2070.0762%2039.1466V29.8407C70.0764%2029.4761%2070.1666%2029.1172%2070.3387%2028.7957C70.5108%2028.4742%2070.7595%2028.2002%2071.0628%2027.9978L82.9321%2020.0887C83.2419%2019.8819%2083.5987%2019.7565%2083.9697%2019.7241C84.3407%2019.6916%2084.7139%2019.7531%2085.0549%2019.903C91.8846%2022.8815%2097.9455%2027.3777%20102.777%2033.0498C103.031%2033.3464%20103.202%2033.7048%20103.273%2034.0887C103.344%2034.4727%20103.313%2034.8686%20103.182%2035.2364ZM48.3495%2020.0887L60.2216%2027.9978C60.5249%2028.2002%2060.7736%2028.4742%2060.9457%2028.7957C61.1178%2029.1172%2061.208%2029.4761%2061.2082%2029.8407V39.1466C61.2082%2039.4705%2061.1372%2039.7904%2061.0003%2040.0839C60.8633%2040.3774%2060.6638%2040.6373%2060.4156%2040.8454L44.8245%2053.923C44.5116%2054.1856%2044.1323%2054.3566%2043.7284%2054.4172C43.3244%2054.4779%2042.9116%2054.4257%2042.5354%2054.2666L34.327%2050.7859C34.0425%2050.6654%2033.7863%2050.4869%2033.5749%2050.2616C33.3635%2050.0363%2033.2015%2049.7694%2033.0993%2049.4779L28.0916%2035.2391C27.9615%2034.87%2027.9314%2034.473%2028.0044%2034.0885C28.0774%2033.7039%2028.2509%2033.3456%2028.5073%2033.0498C33.3416%2027.372%2039.4076%2022.8719%2046.2434%2019.8919C46.583%2019.7466%2046.9536%2019.6885%2047.3214%2019.7229C47.6893%2019.7573%2048.0427%2019.883%2048.3495%2020.0887ZM53.1466%20110.836L47.6789%2097.0659C47.5539%2096.7529%2047.5019%2096.4155%2047.5268%2096.0793C47.5518%2095.7432%2047.6531%2095.4172%2047.823%2095.1261L52.027%2087.9208C52.2212%2087.5845%2052.5002%2087.3051%2052.8363%2087.1106C53.1724%2086.916%2053.5536%2086.8132%2053.9419%2086.8123H77.3425C77.7308%2086.8132%2078.112%2086.916%2078.4481%2087.1106C78.7842%2087.3051%2079.0632%2087.5845%2079.2574%2087.9208L83.4642%2095.1261C83.6345%2095.417%2083.7363%2095.7429%2083.7617%2096.079C83.7872%2096.4152%2083.7357%2096.7527%2083.611%2097.0659L78.1822%20110.831C78.0494%20111.167%2077.8363%20111.466%2077.5614%20111.702C77.2866%20111.937%2076.9583%20112.101%2076.6053%20112.18C69.4013%20113.834%2061.9164%20113.834%2054.7123%20112.18C54.3619%20112.1%2054.0363%20111.936%2053.7636%20111.702C53.4908%20111.467%2053.2791%20111.171%2053.1466%20110.836Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_6_39'%3e%3crect%20width='122'%20height='122'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",So=class So{constructor(n,i){Be(this,"pos");Be(this,"vel");Be(this,"radius");Be(this,"friction");Be(this,"attachedPlayerId");Be(this,"releaseTimer");Be(this,"homingTargetPlayer");Be(this,"throughPassTargetPos");Be(this,"rotationAngle");Be(this,"rollDirAngle");Be(this,"dribblePhase");if(this.pos={x:n,y:i},this.vel={x:0,y:0},this.radius=10,this.friction=.968,this.attachedPlayerId=null,this.releaseTimer=0,this.homingTargetPlayer=null,this.throughPassTargetPos=null,this.rotationAngle=0,this.rollDirAngle=0,this.dribblePhase=0,!So.ballImage&&typeof window<"u"){const l=new Image;l.src=$2,l.onload=()=>{So.isImageLoaded=!0},So.ballImage=l}}reset(n,i){this.pos={x:n,y:i},this.vel={x:0,y:0},this.attachedPlayerId=null,this.releaseTimer=0,this.homingTargetPlayer=null,this.throughPassTargetPos=null,this.rotationAngle=0,this.rollDirAngle=0,this.dribblePhase=0}attachToPlayer(n,i,l,c,u){this.attachedPlayerId=u,this.dribblePhase+=.25;const _=Math.hypot(c.x,c.y);_>.1&&(this.rollDirAngle=Math.atan2(c.y,c.x),this.rotationAngle+=Math.min(.08,_*.025));const g=l+this.radius+6+Math.sin(this.dribblePhase)*2,h=n.x+Math.cos(i)*g,m=n.y+Math.sin(i)*g;this.pos.x=this.pos.x*.4+h*.6,this.pos.y=this.pos.y*.4+m*.6,this.vel.x=c.x,this.vel.y=c.y}kick(n,i,l,c=null,u=null){this.attachedPlayerId=null,this.releaseTimer=.15,this.homingTargetPlayer=c,this.throughPassTargetPos=u,this.vel.x=n.x*i,this.vel.y=n.y*i,this.rollDirAngle=Math.atan2(n.y,n.x)}checkPlayerCollision(n){if(this.attachedPlayerId===n.id)return!1;const i=this.pos.x-n.pos.x,l=this.pos.y-n.pos.y,c=Math.hypot(i,l)||1,u=this.radius+n.radius+2;if(c<u){const _=u-c,g=i/c,h=l/c;this.pos.x+=g*_,this.pos.y+=h*_;const m=Math.max(5.5,Math.hypot(n.vel.x,n.vel.y)*1.5);return this.vel.x=g*m+n.vel.x*.5,this.vel.y=h*m+n.vel.y*.5,this.rollDirAngle=Math.atan2(this.vel.y,this.vel.x),!0}return!1}update(n,i){this.releaseTimer>0&&(this.releaseTimer-=n);const l=Math.hypot(this.vel.x,this.vel.y);if(l>.1&&(this.rollDirAngle=Math.atan2(this.vel.y,this.vel.x),this.rotationAngle+=Math.min(.08,l/this.radius*.06)),this.homingTargetPlayer){const h=this.homingTargetPlayer,m={x:this.throughPassTargetPos?this.throughPassTargetPos.x:h.pos.x+h.vel.x*8,y:this.throughPassTargetPos?this.throughPassTargetPos.y:h.pos.y+h.vel.y*8},p=m.x-this.pos.x,y=m.y-this.pos.y,v=Math.hypot(p,y)||1,C=Math.hypot(h.pos.x-this.pos.x,h.pos.y-this.pos.y),k=Math.hypot(h.vel.x,h.vel.y),E=Math.max(8.8,k*1.35),O=l*.9+E*.1,B=p/v,J=y/v;this.vel.x=this.vel.x*.7+B*O*.3,this.vel.y=this.vel.y*.7+J*O*.3,this.pos.x+=this.vel.x,this.pos.y+=this.vel.y,(C<this.radius+h.radius+20||v<22)&&(h.hasPossession=!0,this.attachToPlayer(h.pos,h.facingAngle,h.radius,h.vel,h.id),this.homingTargetPlayer=null,this.throughPassTargetPos=null)}else this.attachedPlayerId||(this.pos.x+=this.vel.x,this.pos.y+=this.vel.y,this.vel.x*=this.friction,this.vel.y*=this.friction,Math.abs(this.vel.x)<.05&&(this.vel.x=0),Math.abs(this.vel.y)<.05&&(this.vel.y=0));const c=i.pitchBounds,u=i.goals,_=this.pos.y>=u.homeGoal.top&&this.pos.y<=u.homeGoal.bottom,g=this.pos.y>=u.awayGoal.top&&this.pos.y<=u.awayGoal.bottom;!_&&this.pos.x-this.radius<c.left&&(this.pos.x=c.left+this.radius,this.vel.x=-this.vel.x*.65),!g&&this.pos.x+this.radius>c.right&&(this.pos.x=c.right-this.radius,this.vel.x=-this.vel.x*.65),this.pos.y-this.radius<c.top&&(this.pos.y=c.top+this.radius,this.vel.y=-this.vel.y*.65),this.pos.y+this.radius>c.bottom&&(this.pos.y=c.bottom-this.radius,this.vel.y=-this.vel.y*.65)}draw(n){if(n.save(),n.fillStyle="rgba(0, 0, 0, 0.35)",n.beginPath(),n.ellipse(this.pos.x+3,this.pos.y+4,this.radius,this.radius*.6,0,0,Math.PI*2),n.fill(),n.save(),n.translate(this.pos.x,this.pos.y),n.rotate(this.rollDirAngle),n.rotate(this.rotationAngle),So.ballImage&&So.isImageLoaded){const i=this.radius*2.2;n.drawImage(So.ballImage,-i/2,-i/2,i,i)}else n.fillStyle="#ffffff",n.beginPath(),n.arc(0,0,this.radius,0,Math.PI*2),n.fill(),n.strokeStyle="#0f172a",n.lineWidth=2,n.stroke(),n.fillStyle="#0f172a",n.beginPath(),n.arc(0,0,this.radius*.38,0,Math.PI*2),n.fill();n.restore(),n.restore()}};Be(So,"ballImage",null),Be(So,"isImageLoaded",!1);let Gf=So;function Xa(o,n,i){let l=n-o;for(;l<-Math.PI;)l+=Math.PI*2;for(;l>Math.PI;)l-=Math.PI*2;return o+l*i}class Mf{constructor(n,i,l,c,u,_,g){Be(this,"id");Be(this,"name");Be(this,"team");Be(this,"controllerIndex");Be(this,"isAI");Be(this,"pos");Be(this,"vel");Be(this,"radius");Be(this,"speed");Be(this,"color");Be(this,"facingAngle");Be(this,"isSprinting");Be(this,"hasPossession");Be(this,"stamina");Be(this,"isExhausted");Be(this,"bodyTiltAngle");Be(this,"turfParticles");Be(this,"isChargingSlide");Be(this,"slidePower");Be(this,"isTackling");Be(this,"tackleTimer");Be(this,"tackleSlideAngle");Be(this,"isDribbleSkillActive");Be(this,"skillDodgeInvincibleTimer");Be(this,"stumbleTimer");Be(this,"duelFeedbackText");Be(this,"duelFeedbackTimer");Be(this,"duelFeedbackYOffset");Be(this,"dribbleSpinAngle");Be(this,"debugInputString");Be(this,"walkTimer");Be(this,"prevX");Be(this,"prevA");Be(this,"prevB");Be(this,"prevY");Be(this,"prevRB");Be(this,"prevLB");Be(this,"prevStart");this.id=n,this.name=i,this.team=l,this.controllerIndex=c,this.isAI=c===null,this.pos={x:_,y:g},this.vel={x:0,y:0},this.radius=18,this.speed=4.2,this.color=u,this.facingAngle=l==="home"?0:Math.PI,this.isSprinting=!1,this.hasPossession=!1,this.stamina=1,this.isExhausted=!1,this.bodyTiltAngle=0,this.turfParticles=[],this.isChargingSlide=!1,this.slidePower=0,this.isTackling=!1,this.tackleTimer=0,this.tackleSlideAngle=0,this.isDribbleSkillActive=!1,this.skillDodgeInvincibleTimer=0,this.stumbleTimer=0,this.duelFeedbackText="",this.duelFeedbackTimer=0,this.duelFeedbackYOffset=0,this.dribbleSpinAngle=0,this.debugInputString="IDLE - Ready for Input",this.walkTimer=Math.random()*100,this.prevX=!1,this.prevA=!1,this.prevB=!1,this.prevY=!1,this.prevRB=!1,this.prevLB=!1,this.prevStart=!1}reset(n,i){this.pos={x:n,y:i},this.vel={x:0,y:0},this.facingAngle=this.team==="home"?0:Math.PI,this.stamina=1,this.isExhausted=!1,this.bodyTiltAngle=0,this.turfParticles=[],this.hasPossession=!1,this.isChargingSlide=!1,this.slidePower=0,this.isTackling=!1,this.tackleTimer=0,this.tackleSlideAngle=0,this.isDribbleSkillActive=!1,this.skillDodgeInvincibleTimer=0,this.stumbleTimer=0,this.duelFeedbackText="",this.duelFeedbackTimer=0,this.duelFeedbackYOffset=0,this.dribbleSpinAngle=0,this.debugInputString="RESET - Position Cleared",this.prevX=!1,this.prevA=!1,this.prevB=!1,this.prevY=!1,this.prevRB=!1,this.prevLB=!1,this.prevStart=!1}triggerFeedback(n){this.duelFeedbackText=n,this.duelFeedbackTimer=1.2,this.duelFeedbackYOffset=0}findBestPassTarget(n,i){const l=n.filter(g=>g.id!==this.id);if(l.length===0)return null;let c=null,u=1/0;const _=Math.PI/5;return l.forEach(g=>{const h=g.pos.x-this.pos.x,m=g.pos.y-this.pos.y,p=Math.hypot(h,m),y=Math.atan2(m,h);let v=Math.abs(y-i);for(;v>Math.PI;)v=Math.abs(v-Math.PI*2);if(v<=_){const C=v*200+p;C<u&&(u=C,c=g)}}),c}updateParticles(){for(let n=this.turfParticles.length-1;n>=0;n--){const i=this.turfParticles[n];i.x+=i.vx,i.y+=i.vy,i.vx*=.92,i.vy*=.92,i.life-=.025,i.life<=0&&this.turfParticles.splice(n,1)}}spawnTurfParticle(n,i=!1){const l=i?4:1;for(let c=0;c<l;c++){const u=(i?this.tackleSlideAngle:this.facingAngle)+Math.PI+(Math.random()-.5)*1.1;this.turfParticles.push({x:this.pos.x+Math.cos(u)*(this.radius*.7),y:this.pos.y+Math.sin(u)*(this.radius*.7),vx:Math.cos(u)*(Math.random()*4+1.2)*n,vy:Math.sin(u)*(Math.random()*4+1.2)*n,life:1,color:i?Math.random()>.4?"#e0f2fe":Math.random()>.5?"#86efac":"#38bdf8":Math.random()>.5?"#15803d":"#86efac",size:i?Math.random()*4.5+2:Math.random()*2.5+1.2})}}executePassTo(n,i){if(!this.hasPossession)return;this.hasPossession=!1,n.hasPossession=!1;const l=n.pos.x-this.pos.x,c=n.pos.y-this.pos.y,u=Math.hypot(l,c)||1;this.facingAngle=Math.atan2(c,l);const _=Math.min(Math.max(u*.042+4.5,6.5),11.5);i.kick({x:l/u,y:c/u},_,this.id,n)}updateEnemyBotAI(n,i,l){this.updateParticles(),this.isSprinting||(this.stamina=Math.min(1,this.stamina+.0025),this.isExhausted&&this.stamina>=.2&&(this.isExhausted=!1)),this.tackleTimer>0?(this.tackleTimer-=.016,this.vel.x*=.94,this.vel.y*=.94,this.spawnTurfParticle(2.5,!0)):this.isTackling=!1,this.skillDodgeInvincibleTimer>0?(this.skillDodgeInvincibleTimer-=.016,this.dribbleSpinAngle+=.35):(this.isDribbleSkillActive=!1,this.dribbleSpinAngle=0),this.stumbleTimer>0&&(this.stumbleTimer-=.016),this.duelFeedbackTimer>0&&(this.duelFeedbackTimer-=.016,this.duelFeedbackYOffset+=.4);const c=Math.hypot(this.pos.x-n.pos.x,this.pos.y-n.pos.y);if(this.hasPossession){const _=i.goals.homeGoal,g=_.top+(_.bottom-_.top)*.5,h=_.x-this.pos.x,m=g-this.pos.y,p=Math.hypot(h,m)||1,y=this.speed*.4;this.vel.x=h/p*y,this.vel.y=m/p*y;const v=Math.atan2(this.vel.y,this.vel.x);this.facingAngle=Xa(this.facingAngle,v,.22),n.attachToPlayer(this.pos,this.facingAngle,this.radius,this.vel,this.id)}else{const _=l.find(C=>C.hasPossession),g=_?_.pos:n.pos,h=g.x-this.pos.x,m=g.y-this.pos.y,p=Math.hypot(h,m)||1,y=this.speed*.65;this.vel.x=h/p*y,this.vel.y=m/p*y;const v=Math.atan2(m,h);this.facingAngle=Xa(this.facingAngle,v,.22),n.releaseTimer<=0&&c<this.radius+n.radius+25&&(this.hasPossession=!0)}this.pos.x+=this.vel.x,this.pos.y+=this.vel.y;const u=i.pitchBounds;this.pos.x=Math.max(u.left+this.radius,Math.min(u.right-this.radius,this.pos.x)),this.pos.y=Math.max(u.top+this.radius,Math.min(u.bottom-this.radius,this.pos.y))}updatePassiveReception(n,i){this.walkTimer+=.02,this.updateParticles(),this.isSprinting||(this.stamina=Math.min(1,this.stamina+.0025),this.isExhausted&&this.stamina>=.2&&(this.isExhausted=!1)),this.tackleTimer>0?(this.tackleTimer-=.016,this.vel.x*=.94,this.vel.y*=.94,this.spawnTurfParticle(2.5,!0)):this.isTackling=!1,this.skillDodgeInvincibleTimer>0?(this.skillDodgeInvincibleTimer-=.016,this.dribbleSpinAngle+=.35):(this.isDribbleSkillActive=!1,this.dribbleSpinAngle=0),this.stumbleTimer>0&&(this.stumbleTimer-=.016),this.duelFeedbackTimer>0&&(this.duelFeedbackTimer-=.016,this.duelFeedbackYOffset+=.4);const l=Math.hypot(this.pos.x-n.pos.x,this.pos.y-n.pos.y);if(n.homingTargetPlayer&&n.homingTargetPlayer.id===this.id){this.hasPossession=!1;let u=n.pos.x,_=n.pos.y;n.throughPassTargetPos?(u=n.throughPassTargetPos.x,_=n.throughPassTargetPos.y,!this.isExhausted&&this.stamina>0?(this.isSprinting=!0,this.stamina=Math.max(0,this.stamina-.004),this.stamina===0&&(this.isExhausted=!0,this.isSprinting=!1,this.triggerFeedback("⚠️ EXHAUSTED!"))):this.isSprinting=!1,this.spawnTurfParticle(1.5)):this.isSprinting=!1;const g=u-this.pos.x,h=_-this.pos.y,m=Math.hypot(g,h)||1,p=this.isSprinting?this.speed*1.5:this.speed*.7;this.vel.x=g/m*p,this.vel.y=h/m*p;const y=Math.atan2(h,g);this.facingAngle=Xa(this.facingAngle,y,.25);const v=this.radius+n.radius+14;l<v&&n.releaseTimer<=0&&(this.hasPossession=!0,this.isSprinting=!1,n.attachToPlayer(this.pos,this.facingAngle,this.radius,this.vel,this.id))}else if(this.hasPossession){const u=this.team==="home"?i.goals.awayGoal:i.goals.homeGoal,_=u.top+(u.bottom-u.top)*.5,g=u.x-this.pos.x,h=_-this.pos.y,m=Math.hypot(g,h)||1,p=this.speed*.45;this.vel.x=g/m*p,this.vel.y=h/m*p*.4;const y=Math.atan2(this.vel.y,this.vel.x);this.facingAngle=Xa(this.facingAngle,y,.22),n.attachToPlayer(this.pos,this.facingAngle,this.radius,this.vel,this.id)}else{const u=this.speed*.35,_=Math.cos(this.walkTimer*1.2),g=Math.sin(this.walkTimer*.8);this.vel.x=_*u,this.vel.y=g*u;const h=Math.atan2(this.vel.y,this.vel.x);this.facingAngle=Xa(this.facingAngle,h,.15),n.releaseTimer<=0&&l<this.radius+n.radius+18&&(this.hasPossession=!0)}this.pos.x+=this.vel.x,this.pos.y+=this.vel.y;const c=i.pitchBounds;this.pos.x=Math.max(c.left+this.radius,Math.min(c.right-this.radius,this.pos.x)),this.pos.y=Math.max(c.top+this.radius,Math.min(c.bottom-this.radius,this.pos.y))}updateFromGamepad(n,i,l,c,u){let _=!1;this.updateParticles(),this.tackleTimer>0?(this.tackleTimer-=.016,this.vel.x*=.94,this.vel.y*=.94,this.spawnTurfParticle(2.8,!0)):this.isTackling=!1,this.skillDodgeInvincibleTimer>0?(this.skillDodgeInvincibleTimer-=.016,this.dribbleSpinAngle+=.35):(this.isDribbleSkillActive=!1,this.dribbleSpinAngle=0),this.stumbleTimer>0&&(this.stumbleTimer-=.016),this.duelFeedbackTimer>0&&(this.duelFeedbackTimer-=.016,this.duelFeedbackYOffset+=.4);const g=this.stumbleTimer>0?.3:1,h=n.axes.leftStickX,m=n.axes.leftStickY;n.buttons.rt>.3?this.isExhausted?this.isSprinting=!1:(this.isSprinting=!0,this.stamina=Math.max(0,this.stamina-.004),this.stamina===0&&(this.isExhausted=!0,this.isSprinting=!1,this.triggerFeedback("⚠️ EXHAUSTED!"))):(this.isSprinting=!1,this.stamina=Math.min(1,this.stamina+.0025),this.isExhausted&&this.stamina>=.2&&(this.isExhausted=!1));const y=(this.isSprinting?this.speed*1.6:this.speed)*g,v=Math.hypot(h,m);let C=this.facingAngle;if(v>.05){const xe=h*y,he=m*y;this.vel.x=this.vel.x*.65+xe*.35,this.vel.y=this.vel.y*.65+he*.35,C=Math.atan2(m,h);const re=C-this.facingAngle;this.facingAngle=Xa(this.facingAngle,C,.25),this.bodyTiltAngle=Math.max(-.22,Math.min(.22,re*.35)),this.isSprinting&&this.spawnTurfParticle(y/this.speed)}else this.vel.x*=.76,this.vel.y*=.76,this.bodyTiltAngle*=.8,Math.abs(this.vel.x)<.05&&(this.vel.x=0),Math.abs(this.vel.y)<.05&&(this.vel.y=0);this.pos.x+=this.vel.x,this.pos.y+=this.vel.y;const k=l.pitchBounds;this.pos.x=Math.max(k.left+this.radius,Math.min(k.right-this.radius,this.pos.x)),this.pos.y=Math.max(k.top+this.radius,Math.min(k.bottom-this.radius,this.pos.y));const E=Math.hypot(this.pos.x-i.pos.x,this.pos.y-i.pos.y);i.releaseTimer<=0&&E<this.radius+i.radius+25&&!i.homingTargetPlayer?(this.hasPossession=!0,i.attachToPlayer(this.pos,this.facingAngle,this.radius,this.vel,this.id)):i.homingTargetPlayer&&i.homingTargetPlayer.id!==this.id&&(this.hasPossession=!1);const O=n.buttons.a,B=n.buttons.b,J=n.buttons.x,F=n.buttons.y,z=n.buttons.rb,de=n.buttons.lb,ye=n.buttons.start;if(ye&&!this.prevStart&&(_=!0),z&&!this.prevRB||de&&!this.prevLB){const xe=c.find(he=>he.id!==this.id);xe&&xe.hasPossession?(xe.executePassTo(this,i),this.triggerFeedback("⚡ REQUEST BALL!"),this.debugInputString=`⚡ R1 (RB) REQUEST BALL -> TEAMMATE PASSED TO ${this.name}!`):this.triggerFeedback("⚡ REQUEST BALL!")}const fe=[];if(this.hasPossession?(O&&fe.push("A (Passing)"),J&&fe.push("X (Shoot Goal)"),F&&fe.push("Y (Through / Gocek)"),z&&fe.push("R1 (Gocek Skill)")):(this.isChargingSlide?fe.push(`B (SLIDE CHARGE: ${(this.slidePower*100).toFixed(0)}%)`):B&&fe.push("B (SLIDE TACKLE!)"),O&&fe.push("A (Switch Defender)"),F&&fe.push("Y (Press / Pressure)"),z&&fe.push("R1 (Request Ball)")),this.isSprinting&&fe.push(`R2 (Sprint Stamina: ${Math.round(this.stamina*100)}%)`),this.isExhausted&&fe.push("⚠️ EXHAUSTED!"),ye&&fe.push("Start (ToggleHUD)"),this.debugInputString=fe.length>0?`PRESSED: ${fe.join(" + ")}`:`STICK: [${h.toFixed(2)}, ${m.toFixed(2)}]`,this.hasPossession){if(this.isChargingSlide=!1,this.slidePower=0,J&&!this.prevX){const he=this.team==="home"?l.goals.awayGoal:l.goals.homeGoal,re=he.top+(he.bottom-he.top)*.5,Q=he.x-this.pos.x,Oe=re-this.pos.y,oe=Math.hypot(Q,Oe)||1;this.hasPossession=!1,i.kick({x:Q/oe,y:Oe/oe},14.5,this.id,null,null),this.debugInputString="🔥 GOAL SHOOT TRIGGERED (Tombol X)!"}if(O&&!this.prevA){this.hasPossession=!1;const he=this.findBestPassTarget(c,C);if(he){he.hasPossession=!1;const re=he.pos.x-this.pos.x,Q=he.pos.y-this.pos.y,Oe=Math.hypot(re,Q)||1,oe=Math.min(Math.max(Oe*.042+4.5,6.5),11.5);i.kick({x:re/Oe,y:Q/Oe},oe,this.id,he,null),this.debugInputString=`⚽ SMART ASSIST PASS TO ${he.name} (Tombol A)!`}else{const re={x:Math.cos(C),y:Math.sin(C)};i.kick(re,8.5,this.id,null,null),this.debugInputString="⚽ MANUAL DIRECTION PASS (No Teammate Aimed)!"}}F&&!this.prevY&&(this.isDribbleSkillActive=!0,this.skillDodgeInvincibleTimer=.45,this.triggerFeedback("🔥 GOCEK!"),this.debugInputString="🔥 THROUGH / DRIBBLE GOCEK TRIGGERED (Tombol Y)!")}else if(B)this.isChargingSlide=!0,this.slidePower=Math.min(1,this.slidePower+.035);else if(this.prevB&&this.isChargingSlide){this.isChargingSlide=!1,this.isTackling=!0;const xe=8+this.slidePower*14;this.tackleTimer=.4+this.slidePower*.35,this.tackleSlideAngle=this.facingAngle,this.vel.x+=Math.cos(this.facingAngle)*xe,this.vel.y+=Math.sin(this.facingAngle)*xe;const he=Math.round(this.slidePower*100);this.triggerFeedback(`⚡ SLIDE ${he}%!`),this.slidePower=0}else this.isChargingSlide=!1,this.slidePower=0;return this.prevX=J,this.prevA=O,this.prevB=B,this.prevY=F,this.prevRB=z,this.prevLB=de,this.prevStart=ye,{toggleHUDRequested:_}}draw(n){const i=this.id==="p1",l=this.id==="p2",c=i?"#f87171":l?"#60a5fa":"#f59e0b",u=i?"Kamu":l?"Rekan":"Musuh (P3)",_=i?"QI":l?"P2":"P3";this.turfParticles.forEach(C=>{n.fillStyle=C.color,n.globalAlpha=Math.max(0,C.life),n.beginPath(),n.arc(C.x,C.y,C.size,0,Math.PI*2),n.fill()}),n.globalAlpha=1;const g=this.radius+14,h=this.isExhausted?"#ef4444":this.stamina>.5?"#10b981":this.stamina>.2?"#f59e0b":"#ef4444";if(n.strokeStyle="rgba(0, 0, 0, 0.4)",n.lineWidth=3.5,n.beginPath(),n.arc(this.pos.x,this.pos.y,g,0,Math.PI*2),n.stroke(),this.stamina>0){const C=-Math.PI/2,k=C+this.stamina*Math.PI*2;n.strokeStyle=h,n.lineWidth=3.5,n.beginPath(),n.arc(this.pos.x,this.pos.y,g,C,k),n.stroke()}if(this.isChargingSlide){const E=this.pos.x-26,O=this.pos.y-this.radius-28;n.fillStyle="rgba(15, 23, 42, 0.90)",n.strokeStyle="rgba(255, 255, 255, 0.8)",n.lineWidth=1.5,n.beginPath(),n.roundRect(E,O,52,9,4),n.fill(),n.stroke();const B=Math.max(2,50*this.slidePower),J=this.slidePower<.5?"#06b6d4":this.slidePower<.85?"#f59e0b":"#ef4444";n.fillStyle=J,n.beginPath(),n.roundRect(E+1,O+1,B,7,3),n.fill()}this.isTackling&&(n.save(),n.translate(this.pos.x,this.pos.y),n.rotate(this.tackleSlideAngle),n.fillStyle="#f87171",n.strokeStyle="#06b6d4",n.lineWidth=3.5,n.beginPath(),n.roundRect(0,-7,this.radius+38,14,7),n.fill(),n.stroke(),n.strokeStyle="#38bdf8",n.lineWidth=4.5,n.beginPath(),n.arc(this.radius+38,0,20,-Math.PI/2,Math.PI/2),n.stroke(),n.restore()),this.skillDodgeInvincibleTimer>0&&(n.strokeStyle="#f59e0b",n.lineWidth=4,n.setLineDash([6,4]),n.beginPath(),n.arc(this.pos.x,this.pos.y,this.radius+14,0,Math.PI*2),n.stroke(),n.setLineDash([])),n.save(),n.translate(this.pos.x,this.pos.y),n.rotate(this.bodyTiltAngle+this.dribbleSpinAngle);const m=this.radius+8;n.strokeStyle=this.hasPossession?"#10b981":"rgba(187, 247, 208, 0.85)",n.lineWidth=this.hasPossession?4.5:3.5,n.beginPath(),n.arc(0,0,m,0,Math.PI*2),n.stroke();const p=Math.PI/3,y=this.facingAngle-this.bodyTiltAngle-p/2,v=this.facingAngle-this.bodyTiltAngle+p/2;if(n.strokeStyle=this.hasPossession?"#047857":"#0a2d12",n.lineWidth=this.hasPossession?6.5:6,n.beginPath(),n.arc(0,0,m,y,v),n.stroke(),n.fillStyle=c,n.beginPath(),n.arc(0,0,this.radius,0,Math.PI*2),n.fill(),n.strokeStyle="#000000",n.lineWidth=3.5,n.stroke(),n.fillStyle="#ffffff",n.font="900 14px sans-serif",n.textAlign="center",n.textBaseline="middle",n.strokeStyle="#000000",n.lineWidth=3,n.strokeText(_,0,1),n.fillText(_,0,1),n.restore(),n.fillStyle="#ffffff",n.font="bold 15px sans-serif",n.textAlign="center",n.textBaseline="alphabetic",n.strokeStyle="rgba(0, 0, 0, 0.7)",n.lineWidth=2.5,n.strokeText(u,this.pos.x,this.pos.y-12-this.radius),n.fillText(u,this.pos.x,this.pos.y-12-this.radius),this.duelFeedbackTimer>0){n.save(),n.globalAlpha=Math.min(1,this.duelFeedbackTimer*1.5),n.fillStyle=this.duelFeedbackText.includes("EXHAUSTED")?"#ef4444":this.duelFeedbackText.includes("GOCEK")?"#fbbf24":"#06b6d4",n.font="900 16px sans-serif",n.textAlign="center",n.strokeStyle="#000000",n.lineWidth=3.5;const C=this.pos.y-32-this.radius-this.duelFeedbackYOffset;n.strokeText(this.duelFeedbackText,this.pos.x,C),n.fillText(this.duelFeedbackText,this.pos.x,C),n.restore()}}}class P2{constructor(n="1v1_local"){Be(this,"state");Be(this,"isDebugMode");this.isDebugMode=!0,this.state={mode:n,timerSeconds:999,scoreHome:0,scoreAway:0,state:"PLAYING",winnerTitle:"",logMessage:"🛠️ DEBUGGING MODE - Goal Resets Positions (Score Disabled)",debugInputText:"Ready"}}resetMatch(){this.state.timerSeconds=999,this.state.scoreHome=0,this.state.scoreAway=0,this.state.state="PLAYING",this.state.winnerTitle="",this.state.logMessage="🛠️ DEBUGGING MODE - Positions Reset",this.state.debugInputText="Ready"}setMode(n){this.state.mode=n,this.resetMatch()}update(n,i,l){if(this.state.state==="GAME_OVER")return!1;const c=l.goals;if(i.pos.y>c.homeGoal.top&&i.pos.y<c.homeGoal.bottom){if(i.pos.x-i.radius<c.homeGoal.x-10)return this.state.logMessage="⚽ GOAL SCORED IN HOME GOAL! Resetting Kickoff Positions...",!0;if(i.pos.x+i.radius>c.awayGoal.x+10)return this.state.logMessage="⚽ GOAL SCORED IN AWAY GOAL! Resetting Kickoff Positions...",!0}return!1}}/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),sg=(...o)=>o.filter((n,i,l)=>!!n&&n.trim()!==""&&l.indexOf(n)===i).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var U2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=b.forwardRef(({color:o="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:l,className:c="",children:u,iconNode:_,...g},h)=>b.createElement("svg",{ref:h,...U2,width:n,height:n,stroke:o,strokeWidth:l?Number(i)*24/Number(n):i,className:sg("lucide",c),...g},[..._.map(([m,p])=>b.createElement(m,p)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const As=(o,n)=>{const i=b.forwardRef(({className:l,...c},u)=>b.createElement(H2,{ref:u,iconNode:n,className:sg(`lucide-${I2(o)}`,l),...c}));return i.displayName=`${o}`,i};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],X2=As("CircleCheckBig",Y2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],G2=As("Copy",F2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],q2=As("EyeOff",W2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],V2=As("Eye",Q2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]],Z2=As("Maximize2",K2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],e5=As("Maximize",J2);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t5=[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]],n5=As("Minimize",t5);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s5=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]],o5=As("Pause",s5);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i5=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],a5=As("RefreshCw",i5);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l5=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],r5=As("RotateCcw",l5);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c5=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],og=As("Smartphone",c5);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u5=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],d5=As("Wifi",u5);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f5=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],h5=As("X",f5);var _5=Object.defineProperty,du=Object.getOwnPropertySymbols,ig=Object.prototype.hasOwnProperty,ag=Object.prototype.propertyIsEnumerable,Jm=(o,n,i)=>n in o?_5(o,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[n]=i,Wf=(o,n)=>{for(var i in n||(n={}))ig.call(n,i)&&Jm(o,i,n[i]);if(du)for(var i of du(n))ag.call(n,i)&&Jm(o,i,n[i]);return o},qf=(o,n)=>{var i={};for(var l in o)ig.call(o,l)&&n.indexOf(l)<0&&(i[l]=o[l]);if(o!=null&&du)for(var l of du(o))n.indexOf(l)<0&&ag.call(o,l)&&(i[l]=o[l]);return i};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var ea;(o=>{const n=class Rt{constructor(h,m,p,y){if(this.version=h,this.errorCorrectionLevel=m,this.modules=[],this.isFunction=[],h<Rt.MIN_VERSION||h>Rt.MAX_VERSION)throw new RangeError("Version value out of range");if(y<-1||y>7)throw new RangeError("Mask value out of range");this.size=h*4+17;let v=[];for(let k=0;k<this.size;k++)v.push(!1);for(let k=0;k<this.size;k++)this.modules.push(v.slice()),this.isFunction.push(v.slice());this.drawFunctionPatterns();const C=this.addEccAndInterleave(p);if(this.drawCodewords(C),y==-1){let k=1e9;for(let E=0;E<8;E++){this.applyMask(E),this.drawFormatBits(E);const O=this.getPenaltyScore();O<k&&(y=E,k=O),this.applyMask(E)}}c(0<=y&&y<=7),this.mask=y,this.applyMask(y),this.drawFormatBits(y),this.isFunction=[]}static encodeText(h,m){const p=o.QrSegment.makeSegments(h);return Rt.encodeSegments(p,m)}static encodeBinary(h,m){const p=o.QrSegment.makeBytes(h);return Rt.encodeSegments([p],m)}static encodeSegments(h,m,p=1,y=40,v=-1,C=!0){if(!(Rt.MIN_VERSION<=p&&p<=y&&y<=Rt.MAX_VERSION)||v<-1||v>7)throw new RangeError("Invalid value");let k,E;for(k=p;;k++){const F=Rt.getNumDataCodewords(k,m)*8,z=_.getTotalBits(h,k);if(z<=F){E=z;break}if(k>=y)throw new RangeError("Data too long")}for(const F of[Rt.Ecc.MEDIUM,Rt.Ecc.QUARTILE,Rt.Ecc.HIGH])C&&E<=Rt.getNumDataCodewords(k,F)*8&&(m=F);let O=[];for(const F of h){i(F.mode.modeBits,4,O),i(F.numChars,F.mode.numCharCountBits(k),O);for(const z of F.getData())O.push(z)}c(O.length==E);const B=Rt.getNumDataCodewords(k,m)*8;c(O.length<=B),i(0,Math.min(4,B-O.length),O),i(0,(8-O.length%8)%8,O),c(O.length%8==0);for(let F=236;O.length<B;F^=253)i(F,8,O);let J=[];for(;J.length*8<O.length;)J.push(0);return O.forEach((F,z)=>J[z>>>3]|=F<<7-(z&7)),new Rt(k,m,J,v)}getModule(h,m){return 0<=h&&h<this.size&&0<=m&&m<this.size&&this.modules[m][h]}getModules(){return this.modules}drawFunctionPatterns(){for(let p=0;p<this.size;p++)this.setFunctionModule(6,p,p%2==0),this.setFunctionModule(p,6,p%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const h=this.getAlignmentPatternPositions(),m=h.length;for(let p=0;p<m;p++)for(let y=0;y<m;y++)p==0&&y==0||p==0&&y==m-1||p==m-1&&y==0||this.drawAlignmentPattern(h[p],h[y]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(h){const m=this.errorCorrectionLevel.formatBits<<3|h;let p=m;for(let v=0;v<10;v++)p=p<<1^(p>>>9)*1335;const y=(m<<10|p)^21522;c(y>>>15==0);for(let v=0;v<=5;v++)this.setFunctionModule(8,v,l(y,v));this.setFunctionModule(8,7,l(y,6)),this.setFunctionModule(8,8,l(y,7)),this.setFunctionModule(7,8,l(y,8));for(let v=9;v<15;v++)this.setFunctionModule(14-v,8,l(y,v));for(let v=0;v<8;v++)this.setFunctionModule(this.size-1-v,8,l(y,v));for(let v=8;v<15;v++)this.setFunctionModule(8,this.size-15+v,l(y,v));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let h=this.version;for(let p=0;p<12;p++)h=h<<1^(h>>>11)*7973;const m=this.version<<12|h;c(m>>>18==0);for(let p=0;p<18;p++){const y=l(m,p),v=this.size-11+p%3,C=Math.floor(p/3);this.setFunctionModule(v,C,y),this.setFunctionModule(C,v,y)}}drawFinderPattern(h,m){for(let p=-4;p<=4;p++)for(let y=-4;y<=4;y++){const v=Math.max(Math.abs(y),Math.abs(p)),C=h+y,k=m+p;0<=C&&C<this.size&&0<=k&&k<this.size&&this.setFunctionModule(C,k,v!=2&&v!=4)}}drawAlignmentPattern(h,m){for(let p=-2;p<=2;p++)for(let y=-2;y<=2;y++)this.setFunctionModule(h+y,m+p,Math.max(Math.abs(y),Math.abs(p))!=1)}setFunctionModule(h,m,p){this.modules[m][h]=p,this.isFunction[m][h]=!0}addEccAndInterleave(h){const m=this.version,p=this.errorCorrectionLevel;if(h.length!=Rt.getNumDataCodewords(m,p))throw new RangeError("Invalid argument");const y=Rt.NUM_ERROR_CORRECTION_BLOCKS[p.ordinal][m],v=Rt.ECC_CODEWORDS_PER_BLOCK[p.ordinal][m],C=Math.floor(Rt.getNumRawDataModules(m)/8),k=y-C%y,E=Math.floor(C/y);let O=[];const B=Rt.reedSolomonComputeDivisor(v);for(let F=0,z=0;F<y;F++){let de=h.slice(z,z+E-v+(F<k?0:1));z+=de.length;const ye=Rt.reedSolomonComputeRemainder(de,B);F<k&&de.push(0),O.push(de.concat(ye))}let J=[];for(let F=0;F<O[0].length;F++)O.forEach((z,de)=>{(F!=E-v||de>=k)&&J.push(z[F])});return c(J.length==C),J}drawCodewords(h){if(h.length!=Math.floor(Rt.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let m=0;for(let p=this.size-1;p>=1;p-=2){p==6&&(p=5);for(let y=0;y<this.size;y++)for(let v=0;v<2;v++){const C=p-v,E=(p+1&2)==0?this.size-1-y:y;!this.isFunction[E][C]&&m<h.length*8&&(this.modules[E][C]=l(h[m>>>3],7-(m&7)),m++)}}c(m==h.length*8)}applyMask(h){if(h<0||h>7)throw new RangeError("Mask value out of range");for(let m=0;m<this.size;m++)for(let p=0;p<this.size;p++){let y;switch(h){case 0:y=(p+m)%2==0;break;case 1:y=m%2==0;break;case 2:y=p%3==0;break;case 3:y=(p+m)%3==0;break;case 4:y=(Math.floor(p/3)+Math.floor(m/2))%2==0;break;case 5:y=p*m%2+p*m%3==0;break;case 6:y=(p*m%2+p*m%3)%2==0;break;case 7:y=((p+m)%2+p*m%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[m][p]&&y&&(this.modules[m][p]=!this.modules[m][p])}}getPenaltyScore(){let h=0;for(let v=0;v<this.size;v++){let C=!1,k=0,E=[0,0,0,0,0,0,0];for(let O=0;O<this.size;O++)this.modules[v][O]==C?(k++,k==5?h+=Rt.PENALTY_N1:k>5&&h++):(this.finderPenaltyAddHistory(k,E),C||(h+=this.finderPenaltyCountPatterns(E)*Rt.PENALTY_N3),C=this.modules[v][O],k=1);h+=this.finderPenaltyTerminateAndCount(C,k,E)*Rt.PENALTY_N3}for(let v=0;v<this.size;v++){let C=!1,k=0,E=[0,0,0,0,0,0,0];for(let O=0;O<this.size;O++)this.modules[O][v]==C?(k++,k==5?h+=Rt.PENALTY_N1:k>5&&h++):(this.finderPenaltyAddHistory(k,E),C||(h+=this.finderPenaltyCountPatterns(E)*Rt.PENALTY_N3),C=this.modules[O][v],k=1);h+=this.finderPenaltyTerminateAndCount(C,k,E)*Rt.PENALTY_N3}for(let v=0;v<this.size-1;v++)for(let C=0;C<this.size-1;C++){const k=this.modules[v][C];k==this.modules[v][C+1]&&k==this.modules[v+1][C]&&k==this.modules[v+1][C+1]&&(h+=Rt.PENALTY_N2)}let m=0;for(const v of this.modules)m=v.reduce((C,k)=>C+(k?1:0),m);const p=this.size*this.size,y=Math.ceil(Math.abs(m*20-p*10)/p)-1;return c(0<=y&&y<=9),h+=y*Rt.PENALTY_N4,c(0<=h&&h<=2568888),h}getAlignmentPatternPositions(){if(this.version==1)return[];{const h=Math.floor(this.version/7)+2,m=this.version==32?26:Math.ceil((this.version*4+4)/(h*2-2))*2;let p=[6];for(let y=this.size-7;p.length<h;y-=m)p.splice(1,0,y);return p}}static getNumRawDataModules(h){if(h<Rt.MIN_VERSION||h>Rt.MAX_VERSION)throw new RangeError("Version number out of range");let m=(16*h+128)*h+64;if(h>=2){const p=Math.floor(h/7)+2;m-=(25*p-10)*p-55,h>=7&&(m-=36)}return c(208<=m&&m<=29648),m}static getNumDataCodewords(h,m){return Math.floor(Rt.getNumRawDataModules(h)/8)-Rt.ECC_CODEWORDS_PER_BLOCK[m.ordinal][h]*Rt.NUM_ERROR_CORRECTION_BLOCKS[m.ordinal][h]}static reedSolomonComputeDivisor(h){if(h<1||h>255)throw new RangeError("Degree out of range");let m=[];for(let y=0;y<h-1;y++)m.push(0);m.push(1);let p=1;for(let y=0;y<h;y++){for(let v=0;v<m.length;v++)m[v]=Rt.reedSolomonMultiply(m[v],p),v+1<m.length&&(m[v]^=m[v+1]);p=Rt.reedSolomonMultiply(p,2)}return m}static reedSolomonComputeRemainder(h,m){let p=m.map(y=>0);for(const y of h){const v=y^p.shift();p.push(0),m.forEach((C,k)=>p[k]^=Rt.reedSolomonMultiply(C,v))}return p}static reedSolomonMultiply(h,m){if(h>>>8||m>>>8)throw new RangeError("Byte out of range");let p=0;for(let y=7;y>=0;y--)p=p<<1^(p>>>7)*285,p^=(m>>>y&1)*h;return c(p>>>8==0),p}finderPenaltyCountPatterns(h){const m=h[1];c(m<=this.size*3);const p=m>0&&h[2]==m&&h[3]==m*3&&h[4]==m&&h[5]==m;return(p&&h[0]>=m*4&&h[6]>=m?1:0)+(p&&h[6]>=m*4&&h[0]>=m?1:0)}finderPenaltyTerminateAndCount(h,m,p){return h&&(this.finderPenaltyAddHistory(m,p),m=0),m+=this.size,this.finderPenaltyAddHistory(m,p),this.finderPenaltyCountPatterns(p)}finderPenaltyAddHistory(h,m){m[0]==0&&(h+=this.size),m.pop(),m.unshift(h)}};n.MIN_VERSION=1,n.MAX_VERSION=40,n.PENALTY_N1=3,n.PENALTY_N2=3,n.PENALTY_N3=40,n.PENALTY_N4=10,n.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],n.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],o.QrCode=n;function i(g,h,m){if(h<0||h>31||g>>>h)throw new RangeError("Value out of range");for(let p=h-1;p>=0;p--)m.push(g>>>p&1)}function l(g,h){return(g>>>h&1)!=0}function c(g){if(!g)throw new Error("Assertion error")}const u=class Cn{constructor(h,m,p){if(this.mode=h,this.numChars=m,this.bitData=p,m<0)throw new RangeError("Invalid argument");this.bitData=p.slice()}static makeBytes(h){let m=[];for(const p of h)i(p,8,m);return new Cn(Cn.Mode.BYTE,h.length,m)}static makeNumeric(h){if(!Cn.isNumeric(h))throw new RangeError("String contains non-numeric characters");let m=[];for(let p=0;p<h.length;){const y=Math.min(h.length-p,3);i(parseInt(h.substring(p,p+y),10),y*3+1,m),p+=y}return new Cn(Cn.Mode.NUMERIC,h.length,m)}static makeAlphanumeric(h){if(!Cn.isAlphanumeric(h))throw new RangeError("String contains unencodable characters in alphanumeric mode");let m=[],p;for(p=0;p+2<=h.length;p+=2){let y=Cn.ALPHANUMERIC_CHARSET.indexOf(h.charAt(p))*45;y+=Cn.ALPHANUMERIC_CHARSET.indexOf(h.charAt(p+1)),i(y,11,m)}return p<h.length&&i(Cn.ALPHANUMERIC_CHARSET.indexOf(h.charAt(p)),6,m),new Cn(Cn.Mode.ALPHANUMERIC,h.length,m)}static makeSegments(h){return h==""?[]:Cn.isNumeric(h)?[Cn.makeNumeric(h)]:Cn.isAlphanumeric(h)?[Cn.makeAlphanumeric(h)]:[Cn.makeBytes(Cn.toUtf8ByteArray(h))]}static makeEci(h){let m=[];if(h<0)throw new RangeError("ECI assignment value out of range");if(h<128)i(h,8,m);else if(h<16384)i(2,2,m),i(h,14,m);else if(h<1e6)i(6,3,m),i(h,21,m);else throw new RangeError("ECI assignment value out of range");return new Cn(Cn.Mode.ECI,0,m)}static isNumeric(h){return Cn.NUMERIC_REGEX.test(h)}static isAlphanumeric(h){return Cn.ALPHANUMERIC_REGEX.test(h)}getData(){return this.bitData.slice()}static getTotalBits(h,m){let p=0;for(const y of h){const v=y.mode.numCharCountBits(m);if(y.numChars>=1<<v)return 1/0;p+=4+v+y.bitData.length}return p}static toUtf8ByteArray(h){h=encodeURI(h);let m=[];for(let p=0;p<h.length;p++)h.charAt(p)!="%"?m.push(h.charCodeAt(p)):(m.push(parseInt(h.substring(p+1,p+3),16)),p+=2);return m}};u.NUMERIC_REGEX=/^[0-9]*$/,u.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,u.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let _=u;o.QrSegment=u})(ea||(ea={}));(o=>{(n=>{const i=class{constructor(c,u){this.ordinal=c,this.formatBits=u}};i.LOW=new i(0,1),i.MEDIUM=new i(1,0),i.QUARTILE=new i(2,3),i.HIGH=new i(3,2),n.Ecc=i})(o.QrCode||(o.QrCode={}))})(ea||(ea={}));(o=>{(n=>{const i=class{constructor(c,u){this.modeBits=c,this.numBitsCharCount=u}numCharCountBits(c){return this.numBitsCharCount[Math.floor((c+7)/17)]}};i.NUMERIC=new i(1,[10,12,14]),i.ALPHANUMERIC=new i(2,[9,11,13]),i.BYTE=new i(4,[8,16,16]),i.KANJI=new i(8,[8,10,12]),i.ECI=new i(7,[0,0,0]),n.Mode=i})(o.QrSegment||(o.QrSegment={}))})(ea||(ea={}));var qa=ea;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var m5={L:qa.QrCode.Ecc.LOW,M:qa.QrCode.Ecc.MEDIUM,Q:qa.QrCode.Ecc.QUARTILE,H:qa.QrCode.Ecc.HIGH},lg=128,rg="L",cg="#FFFFFF",ug="#000000",dg=!1,fg=1,p5=4,g5=0,y5=.1;function hg(o,n=0){const i=[];return o.forEach(function(l,c){let u=null;l.forEach(function(_,g){if(!_&&u!==null){i.push(`M${u+n} ${c+n}h${g-u}v1H${u+n}z`),u=null;return}if(g===l.length-1){if(!_)return;u===null?i.push(`M${g+n},${c+n} h1v1H${g+n}z`):i.push(`M${u+n},${c+n} h${g+1-u}v1H${u+n}z`);return}_&&u===null&&(u=g)})}),i.join("")}function _g(o,n){return o.slice().map((i,l)=>l<n.y||l>=n.y+n.h?i:i.map((c,u)=>u<n.x||u>=n.x+n.w?c:!1))}function x5(o,n,i,l){if(l==null)return null;const c=o.length+i*2,u=Math.floor(n*y5),_=c/n,g=(l.width||u)*_,h=(l.height||u)*_,m=l.x==null?o.length/2-g/2:l.x*_,p=l.y==null?o.length/2-h/2:l.y*_,y=l.opacity==null?1:l.opacity;let v=null;if(l.excavate){let k=Math.floor(m),E=Math.floor(p),O=Math.ceil(g+m-k),B=Math.ceil(h+p-E);v={x:k,y:E,w:O,h:B}}const C=l.crossOrigin;return{x:m,y:p,h,w:g,excavation:v,opacity:y,crossOrigin:C}}function b5(o,n){return n!=null?Math.max(Math.floor(n),0):o?p5:g5}function mg({value:o,level:n,minVersion:i,includeMargin:l,marginSize:c,imageSettings:u,size:_,boostLevel:g}){let h=Rn.useMemo(()=>{const k=(Array.isArray(o)?o:[o]).reduce((E,O)=>(E.push(...qa.QrSegment.makeSegments(O)),E),[]);return qa.QrCode.encodeSegments(k,m5[n],i,void 0,void 0,g)},[o,n,i,g]);const{cells:m,margin:p,numCells:y,calculatedImageSettings:v}=Rn.useMemo(()=>{let C=h.getModules();const k=b5(l,c),E=C.length+k*2,O=x5(C,_,k,u);return{cells:C,margin:k,numCells:E,calculatedImageSettings:O}},[h,_,u,l,c]);return{qrcode:h,margin:p,cells:m,numCells:y,calculatedImageSettings:v}}var v5=(function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0})(),w5=Rn.forwardRef(function(n,i){const l=n,{value:c,size:u=lg,level:_=rg,bgColor:g=cg,fgColor:h=ug,includeMargin:m=dg,minVersion:p=fg,boostLevel:y,marginSize:v,imageSettings:C}=l,E=qf(l,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:O}=E,B=qf(E,["style"]),J=C==null?void 0:C.src,F=Rn.useRef(null),z=Rn.useRef(null),de=Rn.useCallback(oe=>{F.current=oe,typeof i=="function"?i(oe):i&&(i.current=oe)},[i]),[ye,G]=Rn.useState(!1),{margin:fe,cells:xe,numCells:he,calculatedImageSettings:re}=mg({value:c,level:_,minVersion:p,boostLevel:y,includeMargin:m,marginSize:v,imageSettings:C,size:u});Rn.useEffect(()=>{if(F.current!=null){const oe=F.current,ke=oe.getContext("2d");if(!ke)return;let N=xe;const ue=z.current,W=re!=null&&ue!==null&&ue.complete&&ue.naturalHeight!==0&&ue.naturalWidth!==0;W&&re.excavation!=null&&(N=_g(xe,re.excavation));const be=window.devicePixelRatio||1;oe.height=oe.width=u*be;const Ne=u/he*be;ke.scale(Ne,Ne),ke.fillStyle=g,ke.fillRect(0,0,he,he),ke.fillStyle=h,v5?ke.fill(new Path2D(hg(N,fe))):xe.forEach(function(D,Z){D.forEach(function(pe,Me){pe&&ke.fillRect(Me+fe,Z+fe,1,1)})}),re&&(ke.globalAlpha=re.opacity),W&&ke.drawImage(ue,re.x+fe,re.y+fe,re.w,re.h)}}),Rn.useEffect(()=>{G(!1)},[J]);const Q=Wf({height:u,width:u},O);let Oe=null;return J!=null&&(Oe=Rn.createElement("img",{src:J,key:J,style:{display:"none"},onLoad:()=>{G(!0)},ref:z,crossOrigin:re==null?void 0:re.crossOrigin})),Rn.createElement(Rn.Fragment,null,Rn.createElement("canvas",Wf({style:Q,height:u,width:u,ref:de,role:"img"},B)),Oe)});w5.displayName="QRCodeCanvas";var pg=Rn.forwardRef(function(n,i){const l=n,{value:c,size:u=lg,level:_=rg,bgColor:g=cg,fgColor:h=ug,includeMargin:m=dg,minVersion:p=fg,boostLevel:y,title:v,marginSize:C,imageSettings:k}=l,E=qf(l,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:O,cells:B,numCells:J,calculatedImageSettings:F}=mg({value:c,level:_,minVersion:p,boostLevel:y,includeMargin:m,marginSize:C,imageSettings:k,size:u});let z=B,de=null;k!=null&&F!=null&&(F.excavation!=null&&(z=_g(B,F.excavation)),de=Rn.createElement("image",{href:k.src,height:F.h,width:F.w,x:F.x+O,y:F.y+O,preserveAspectRatio:"none",opacity:F.opacity,crossOrigin:F.crossOrigin}));const ye=hg(z,O);return Rn.createElement("svg",Wf({height:u,width:u,viewBox:`0 0 ${J} ${J}`,ref:i,role:"img"},E),!!v&&Rn.createElement("title",null,v),Rn.createElement("path",{fill:g,d:`M0,0 h${J}v${J}H0z`,shapeRendering:"crispEdges"}),Rn.createElement("path",{fill:h,d:ye,shapeRendering:"crispEdges"}),de)});pg.displayName="QRCodeSVG";const S5=({isOpen:o,onClose:n,roomId:i,isConnected:l})=>{const[c,u]=b.useState(""),[_,g]=b.useState(!1);if(b.useEffect(()=>{if(typeof window<"u"){const m=`${window.location.origin}/controller?room=${i}`;u(m)}},[i]),!o)return null;const h=()=>{navigator.clipboard.writeText(c),g(!0),setTimeout(()=>g(!1),2e3)};return r.jsx("div",{className:"fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200 pointer-events-auto",children:r.jsxs("div",{className:"bg-[#0b0f0c] border border-emerald-500/40 rounded-3xl max-w-md w-full p-6 shadow-2xl flex flex-col items-center gap-5 relative text-slate-100 font-sans",children:[r.jsx("button",{onClick:n,className:"absolute top-4 right-4 p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-100 transition cursor-pointer",children:r.jsx(h5,{className:"w-5 h-5"})}),r.jsxs("div",{className:"flex flex-col items-center gap-1.5 text-center mt-2",children:[r.jsx("div",{className:"w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400",children:r.jsx(og,{className:"w-6 h-6"})}),r.jsx("h2",{className:"text-xl font-extrabold tracking-tight",children:"Hubungkan HP sebagai Stik Gamepad"}),r.jsx("p",{className:"text-xs text-slate-400 max-w-xs",children:"Pindai QR Code di bawah dengan kamera HP Anda untuk menjadikan HP sebagai stik stik controller virtual!"})]}),r.jsx("div",{className:"w-full flex items-center justify-center",children:l?r.jsxs("div",{className:"bg-emerald-500/15 border border-emerald-500/60 rounded-xl px-4 py-2 flex items-center gap-2 text-emerald-400 text-xs font-bold animate-pulse",children:[r.jsx(X2,{className:"w-4 h-4"}),r.jsx("span",{children:"🟢 HP Terhubung! (Controller Ready)"})]}):r.jsxs("div",{className:"bg-amber-500/10 border border-amber-500/40 rounded-xl px-4 py-2 flex items-center gap-2 text-amber-400 text-xs font-semibold",children:[r.jsx("span",{className:"w-2 h-2 rounded-full bg-amber-400 animate-ping"}),r.jsx("span",{children:"Menunggu Koneksi dari HP..."})]})}),r.jsx("div",{className:"bg-white p-4 rounded-2xl border-4 border-slate-800 shadow-inner flex items-center justify-center",children:c?r.jsx(pg,{value:c,size:180,level:"M"}):r.jsx("div",{className:"w-[180px] h-[180px] bg-slate-100 flex items-center justify-center text-slate-400 text-xs",children:"Generating QR..."})}),r.jsxs("div",{className:"w-full flex flex-col items-center gap-2",children:[r.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl px-5 py-2.5 flex items-center justify-between w-full font-mono text-sm",children:[r.jsx("span",{className:"text-slate-400 text-xs font-bold",children:"ROOM CODE:"}),r.jsx("span",{className:"text-cyan-400 font-extrabold text-lg tracking-widest",children:i})]}),r.jsxs("button",{onClick:h,className:"w-full py-2.5 px-4 bg-slate-900 border border-slate-700/80 hover:border-emerald-500/50 rounded-xl text-xs font-bold text-slate-300 hover:text-emerald-400 transition cursor-pointer flex items-center justify-center gap-2",children:[r.jsx(G2,{className:"w-4 h-4"}),r.jsx("span",{children:_?"Link Tersalin!":"Salin URL Controller"})]})]})]})})},k5=({matchState:o,showHUD:n,onToggleHUD:i,onResetMatch:l,peerRoomId:c="8492",isPeerConnected:u=!1})=>{const[_,g]=b.useState(!1),[h,m]=b.useState(!1);b.useEffect(()=>{const v=()=>{g(!!document.fullscreenElement)};return document.addEventListener("fullscreenchange",v),()=>document.removeEventListener("fullscreenchange",v)},[]);const p=()=>{document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen().catch(v=>{console.warn("Exit fullscreen failed:",v)}):document.documentElement.requestFullscreen().catch(v=>{console.warn("Fullscreen request failed:",v)})},y=v=>{const C=Math.floor(v/60),k=Math.floor(v%60);return`${C}:${k.toString().padStart(2,"0")}`};return r.jsxs(r.Fragment,{children:[r.jsx(S5,{isOpen:h,onClose:()=>m(!1),roomId:c,isConnected:u}),r.jsxs("div",{className:"fixed top-4 left-0 right-0 z-40 pointer-events-none flex flex-col items-center gap-3 px-4",children:[r.jsxs("div",{className:"flex items-center justify-center gap-3 pointer-events-auto",children:[r.jsxs("button",{onClick:()=>m(!0),className:`glass-card h-11 px-3.5 rounded-2xl border transition cursor-pointer shadow-2xl flex items-center gap-2 font-mono text-xs font-bold ${u?"border-emerald-500/80 bg-emerald-950/80 text-emerald-300":"border-cyan-500/40 bg-[#0b0f0c]/90 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950"}`,title:"Hubungkan HP sebagai Gamepad",children:[r.jsx(og,{className:"w-5 h-5"}),r.jsx("span",{className:"hidden sm:inline",children:u?"HP Connected":"Connect HP"})]}),r.jsx("button",{onClick:p,className:"glass-card w-11 h-11 rounded-2xl border border-emerald-500/40 bg-[#0b0f0c]/90 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 transition cursor-pointer shadow-2xl flex items-center justify-center",title:_?"Exit Fullscreen":"Layar Penuh (Fullscreen)",children:_?r.jsx(n5,{className:"w-5 h-5"}):r.jsx(e5,{className:"w-5 h-5"})}),r.jsx("button",{onClick:i,className:"glass-card w-11 h-11 rounded-2xl border border-slate-700/80 bg-[#0b0f0c]/90 text-slate-200 hover:text-cyan-400 hover:border-cyan-500/50 transition cursor-pointer shadow-2xl flex items-center justify-center",title:n?"Sembunyikan HUD Debug":"Tampilkan HUD Debug",children:n?r.jsx(q2,{className:"w-5 h-5 text-cyan-400"}):r.jsx(V2,{className:"w-5 h-5 text-slate-400"})}),r.jsxs("div",{className:"bg-[#0b0f0c] border border-slate-800/90 px-6 py-2.5 rounded-[22px] shadow-2xl flex flex-col items-center gap-1 font-sans min-w-[130px] border-emerald-500/20 backdrop-blur-md",children:[r.jsxs("div",{className:"flex items-center gap-3 text-2xl font-black tracking-tight leading-none",children:[r.jsx("span",{className:"text-[#ef4444]",children:o.scoreHome}),r.jsx("span",{className:"text-slate-100 font-bold text-sm",children:"-"}),r.jsx("span",{className:"text-[#60a5fa]",children:o.scoreAway})]}),r.jsxs("div",{className:"flex items-center gap-2 mt-0.5",children:[r.jsx("div",{className:"flex items-center gap-1",children:[1,2,3].map(v=>r.jsx("span",{className:`w-2.5 h-2.5 rounded-full transition-all duration-300 ${o.scoreHome>=v?"bg-[#ef4444] shadow-sm shadow-red-500/80 scale-105":"bg-[#374151]"}`},`home-dot-${v}`))}),r.jsx("div",{className:"flex items-center gap-1",children:[1,2,3].map(v=>r.jsx("span",{className:`w-2.5 h-2.5 rounded-full transition-all duration-300 ${o.scoreAway>=v?"bg-[#60a5fa] shadow-sm shadow-blue-500/80 scale-105":"bg-[#374151]"}`},`away-dot-${v}`))})]}),r.jsx("div",{className:"text-slate-100 text-xs font-bold tracking-wider font-mono mt-0.5",children:y(o.timerSeconds)})]}),r.jsx("button",{onClick:l,className:"w-11 h-11 bg-gradient-to-r from-emerald-500 to-teal-500 hover:brightness-110 text-slate-950 font-bold rounded-2xl shadow-2xl transition cursor-pointer flex items-center justify-center",title:"Reset Match",children:r.jsx(r5,{className:"w-5 h-5"})})]}),n&&r.jsxs("div",{className:"max-w-xl w-full flex flex-col gap-2 mt-1 pointer-events-auto animate-in fade-in slide-in-from-top-2 duration-150",children:[r.jsxs("div",{className:"bg-slate-900/95 border-2 border-cyan-400/80 rounded-xl px-5 py-2.5 font-mono text-xs text-cyan-300 flex items-center justify-between shadow-2xl backdrop-blur-xl",children:[r.jsxs("span",{className:"font-extrabold tracking-wide",children:["⚡ [LIVE INPUT]:"," ",r.jsx("span",{className:"text-emerald-300 font-bold bg-slate-950 border border-emerald-500/50 px-2.5 py-0.5 rounded-md ml-1 shadow-inner",children:o.debugInputText||"Menunggu Tombol Controller..."})]}),r.jsx("span",{className:"text-slate-400 text-[11px] font-semibold",children:u?"📱 HP Remote Connected!":"P1 Ctrl 0 | P2 Teammate"})]}),r.jsxs("div",{className:"bg-slate-900/90 border border-slate-700/80 rounded-xl px-4 py-1.5 font-mono text-[11px] text-slate-300 flex items-center justify-between shadow-xl backdrop-blur-md",children:[r.jsxs("span",{className:"font-semibold text-slate-200",children:["[LOG]: ",o.logMessage]}),r.jsx("span",{className:"text-amber-400 font-bold",children:"RB/R1/LB = ReqPass | Start = HUD"})]})]}),o.state==="GAME_OVER"&&r.jsx("div",{className:"fixed inset-0 bg-slate-950/90 backdrop-blur-lg z-50 flex items-center justify-center p-4 pointer-events-auto",children:r.jsxs("div",{className:"glass-card max-w-md w-full p-8 rounded-2xl border-2 border-emerald-500/50 text-center flex flex-col items-center gap-5 shadow-2xl animate-in fade-in zoom-in duration-200",children:[r.jsx("div",{className:"w-16 h-16 bg-emerald-500/20 border border-emerald-500/50 rounded-full flex items-center justify-center text-3xl shadow-lg",children:"⚽"}),r.jsx("h2",{className:"text-2xl font-extrabold text-slate-100 tracking-tight",children:"GAME OVER"}),r.jsx("p",{className:"text-lg font-bold text-emerald-400 font-mono",children:o.winnerTitle}),r.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-4 w-full text-center font-mono text-sm",children:[r.jsx("div",{className:"text-slate-500 text-xs font-bold",children:"TOTAL GOALS SCORED"}),r.jsx("div",{className:"text-cyan-400 font-extrabold text-3xl mt-1",children:o.scoreHome})]}),r.jsx("button",{onClick:l,className:"w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-extrabold rounded-xl text-sm shadow-xl hover:brightness-110 transition cursor-pointer",children:"🎮 Reset Arena"})]})})]})]})};class C5{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(n){this.flush(),this._parts.push(n)}append(n){this._pieces.push(n)}flush(){if(this._pieces.length>0){const n=new Uint8Array(this._pieces);this._parts.push(n),this._pieces=[]}}toArrayBuffer(){const n=[];for(const i of this._parts)n.push(i);return j5(n).buffer}}function j5(o){let n=0;for(const c of o)n+=c.byteLength;const i=new Uint8Array(n);let l=0;for(const c of o){const u=new Uint8Array(c.buffer,c.byteOffset,c.byteLength);i.set(u,l),l+=c.byteLength}return i}function gg(o){return new M5(o).unpack()}function yg(o){const n=new E5,i=n.pack(o);return i instanceof Promise?i.then(()=>n.getBuffer()):n.getBuffer()}class M5{constructor(n){this.index=0,this.dataBuffer=n,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){const n=this.unpack_uint8();if(n<128)return n;if((n^224)<32)return(n^224)-32;let i;if((i=n^160)<=15)return this.unpack_raw(i);if((i=n^176)<=15)return this.unpack_string(i);if((i=n^144)<=15)return this.unpack_array(i);if((i=n^128)<=15)return this.unpack_map(i);switch(n){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return i=this.unpack_uint16(),this.unpack_string(i);case 217:return i=this.unpack_uint32(),this.unpack_string(i);case 218:return i=this.unpack_uint16(),this.unpack_raw(i);case 219:return i=this.unpack_uint32(),this.unpack_raw(i);case 220:return i=this.unpack_uint16(),this.unpack_array(i);case 221:return i=this.unpack_uint32(),this.unpack_array(i);case 222:return i=this.unpack_uint16(),this.unpack_map(i);case 223:return i=this.unpack_uint32(),this.unpack_map(i)}}unpack_uint8(){const n=this.dataView[this.index]&255;return this.index++,n}unpack_uint16(){const n=this.read(2),i=(n[0]&255)*256+(n[1]&255);return this.index+=2,i}unpack_uint32(){const n=this.read(4),i=((n[0]*256+n[1])*256+n[2])*256+n[3];return this.index+=4,i}unpack_uint64(){const n=this.read(8),i=((((((n[0]*256+n[1])*256+n[2])*256+n[3])*256+n[4])*256+n[5])*256+n[6])*256+n[7];return this.index+=8,i}unpack_int8(){const n=this.unpack_uint8();return n<128?n:n-256}unpack_int16(){const n=this.unpack_uint16();return n<32768?n:n-65536}unpack_int32(){const n=this.unpack_uint32();return n<2**31?n:n-2**32}unpack_int64(){const n=this.unpack_uint64();return n<2**63?n:n-2**64}unpack_raw(n){if(this.length<this.index+n)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${n} ${this.length}`);const i=this.dataBuffer.slice(this.index,this.index+n);return this.index+=n,i}unpack_string(n){const i=this.read(n);let l=0,c="",u,_;for(;l<n;)u=i[l],u<160?(_=u,l++):(u^192)<32?(_=(u&31)<<6|i[l+1]&63,l+=2):(u^224)<16?(_=(u&15)<<12|(i[l+1]&63)<<6|i[l+2]&63,l+=3):(_=(u&7)<<18|(i[l+1]&63)<<12|(i[l+2]&63)<<6|i[l+3]&63,l+=4),c+=String.fromCodePoint(_);return this.index+=n,c}unpack_array(n){const i=new Array(n);for(let l=0;l<n;l++)i[l]=this.unpack();return i}unpack_map(n){const i={};for(let l=0;l<n;l++){const c=this.unpack();i[c]=this.unpack()}return i}unpack_float(){const n=this.unpack_uint32(),i=n>>31,l=(n>>23&255)-127,c=n&8388607|8388608;return(i===0?1:-1)*c*2**(l-23)}unpack_double(){const n=this.unpack_uint32(),i=this.unpack_uint32(),l=n>>31,c=(n>>20&2047)-1023,_=(n&1048575|1048576)*2**(c-20)+i*2**(c-52);return(l===0?1:-1)*_}read(n){const i=this.index;if(i+n<=this.length)return this.dataView.subarray(i,i+n);throw new Error("BinaryPackFailure: read index out of range")}}class E5{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(n){if(typeof n=="string")this.pack_string(n);else if(typeof n=="number")Math.floor(n)===n?this.pack_integer(n):this.pack_double(n);else if(typeof n=="boolean")n===!0?this._bufferBuilder.append(195):n===!1&&this._bufferBuilder.append(194);else if(n===void 0)this._bufferBuilder.append(192);else if(typeof n=="object")if(n===null)this._bufferBuilder.append(192);else{const i=n.constructor;if(n instanceof Array){const l=this.pack_array(n);if(l instanceof Promise)return l.then(()=>this._bufferBuilder.flush())}else if(n instanceof ArrayBuffer)this.pack_bin(new Uint8Array(n));else if("BYTES_PER_ELEMENT"in n){const l=n;this.pack_bin(new Uint8Array(l.buffer,l.byteOffset,l.byteLength))}else if(n instanceof Date)this.pack_string(n.toString());else{if(n instanceof Blob)return n.arrayBuffer().then(l=>{this.pack_bin(new Uint8Array(l)),this._bufferBuilder.flush()});if(i==Object||i.toString().startsWith("class")){const l=this.pack_object(n);if(l instanceof Promise)return l.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${i.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof n}" not yet supported`);this._bufferBuilder.flush()}pack_bin(n){const i=n.length;if(i<=15)this.pack_uint8(160+i);else if(i<=65535)this._bufferBuilder.append(218),this.pack_uint16(i);else if(i<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(i);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(n)}pack_string(n){const i=this._textEncoder.encode(n),l=i.length;if(l<=15)this.pack_uint8(176+l);else if(l<=65535)this._bufferBuilder.append(216),this.pack_uint16(l);else if(l<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(l);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(i)}pack_array(n){const i=n.length;if(i<=15)this.pack_uint8(144+i);else if(i<=65535)this._bufferBuilder.append(220),this.pack_uint16(i);else if(i<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(i);else throw new Error("Invalid length");const l=c=>{if(c<i){const u=this.pack(n[c]);return u instanceof Promise?u.then(()=>l(c+1)):l(c+1)}};return l(0)}pack_integer(n){if(n>=-32&&n<=127)this._bufferBuilder.append(n&255);else if(n>=0&&n<=255)this._bufferBuilder.append(204),this.pack_uint8(n);else if(n>=-128&&n<=127)this._bufferBuilder.append(208),this.pack_int8(n);else if(n>=0&&n<=65535)this._bufferBuilder.append(205),this.pack_uint16(n);else if(n>=-32768&&n<=32767)this._bufferBuilder.append(209),this.pack_int16(n);else if(n>=0&&n<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(n);else if(n>=-2147483648&&n<=2147483647)this._bufferBuilder.append(210),this.pack_int32(n);else if(n>=-9223372036854776e3&&n<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(n);else if(n>=0&&n<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(n);else throw new Error("Invalid integer")}pack_double(n){let i=0;n<0&&(i=1,n=-n);const l=Math.floor(Math.log(n)/Math.LN2),c=n/2**l-1,u=Math.floor(c*2**52),_=2**32,g=i<<31|l+1023<<20|u/_&1048575,h=u%_;this._bufferBuilder.append(203),this.pack_int32(g),this.pack_int32(h)}pack_object(n){const i=Object.keys(n),l=i.length;if(l<=15)this.pack_uint8(128+l);else if(l<=65535)this._bufferBuilder.append(222),this.pack_uint16(l);else if(l<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(l);else throw new Error("Invalid length");const c=u=>{if(u<i.length){const _=i[u];if(n.hasOwnProperty(_)){this.pack(_);const g=this.pack(n[_]);if(g instanceof Promise)return g.then(()=>c(u+1))}return c(u+1)}};return c(0)}pack_uint8(n){this._bufferBuilder.append(n)}pack_uint16(n){this._bufferBuilder.append(n>>8),this._bufferBuilder.append(n&255)}pack_uint32(n){const i=n&4294967295;this._bufferBuilder.append((i&4278190080)>>>24),this._bufferBuilder.append((i&16711680)>>>16),this._bufferBuilder.append((i&65280)>>>8),this._bufferBuilder.append(i&255)}pack_uint64(n){const i=n/4294967296,l=n%2**32;this._bufferBuilder.append((i&4278190080)>>>24),this._bufferBuilder.append((i&16711680)>>>16),this._bufferBuilder.append((i&65280)>>>8),this._bufferBuilder.append(i&255),this._bufferBuilder.append((l&4278190080)>>>24),this._bufferBuilder.append((l&16711680)>>>16),this._bufferBuilder.append((l&65280)>>>8),this._bufferBuilder.append(l&255)}pack_int8(n){this._bufferBuilder.append(n&255)}pack_int16(n){this._bufferBuilder.append((n&65280)>>8),this._bufferBuilder.append(n&255)}pack_int32(n){this._bufferBuilder.append(n>>>24&255),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}pack_int64(n){const i=Math.floor(n/4294967296),l=n%2**32;this._bufferBuilder.append((i&4278190080)>>>24),this._bufferBuilder.append((i&16711680)>>>16),this._bufferBuilder.append((i&65280)>>>8),this._bufferBuilder.append(i&255),this._bufferBuilder.append((l&4278190080)>>>24),this._bufferBuilder.append((l&16711680)>>>16),this._bufferBuilder.append((l&65280)>>>8),this._bufferBuilder.append(l&255)}constructor(){this._bufferBuilder=new C5,this._textEncoder=new TextEncoder}}let xg=!0,bg=!0;function lr(o,n,i){const l=o.match(n);return l&&l.length>=i&&parseFloat(l[i],10)}function na(o,n,i){if(!o.RTCPeerConnection)return;if(!Object.getOwnPropertyDescriptor(EventTarget.prototype,"addEventListener").writable){Sh("Unable to polyfill events");return}const c=o.RTCPeerConnection.prototype,u=c.addEventListener;c.addEventListener=function(g,h){if(g!==n)return u.apply(this,arguments);const m=p=>{const y=i(p);y&&(h.handleEvent?h.handleEvent(y):h(y))};return this._eventMap=this._eventMap||{},this._eventMap[n]||(this._eventMap[n]=new Map),this._eventMap[n].set(h,m),u.apply(this,[g,m])};const _=c.removeEventListener;c.removeEventListener=function(g,h){if(g!==n||!this._eventMap||!this._eventMap[n])return _.apply(this,arguments);if(!this._eventMap[n].has(h))return _.apply(this,arguments);const m=this._eventMap[n].get(h);return this._eventMap[n].delete(h),this._eventMap[n].size===0&&delete this._eventMap[n],Object.keys(this._eventMap).length===0&&delete this._eventMap,_.apply(this,[g,m])},Object.defineProperty(c,"on"+n,{get(){return this["_on"+n]},set(g){this["_on"+n]&&(this.removeEventListener(n,this["_on"+n]),delete this["_on"+n]),g&&this.addEventListener(n,this["_on"+n]=g)},enumerable:!0,configurable:!0})}function T5(o){return typeof o!="boolean"?new Error("Argument type: "+typeof o+". Please use a boolean."):(xg=o,o?"adapter.js logging disabled":"adapter.js logging enabled")}function R5(o){return typeof o!="boolean"?new Error("Argument type: "+typeof o+". Please use a boolean."):(bg=!o,"adapter.js deprecation warnings "+(o?"disabled":"enabled"))}function Sh(){if(typeof window=="object"){if(xg)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function kh(o,n){bg&&console.warn(o+" is deprecated, please use "+n+" instead.")}function D5(o){const n={browser:null,version:null};if(typeof o>"u"||!o.navigator||!o.navigator.userAgent)return n.browser="Not a browser.",n;const{navigator:i}=o;if(i.userAgentData&&i.userAgentData.brands){const l=i.userAgentData.brands.find(c=>c.brand==="Chromium");if(l){const c=parseInt(l.version,10);if(c>=90)return{browser:"chrome",version:c}}}if(i.mozGetUserMedia)n.browser="firefox",n.version=parseInt(lr(i.userAgent,/Firefox\/(\d+)\./,1));else if(i.webkitGetUserMedia||o.isSecureContext===!1&&o.webkitRTCPeerConnection)n.browser="chrome",n.version=parseInt(lr(i.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(o.RTCPeerConnection&&i.userAgent.match(/AppleWebKit\/(\d+)\./))n.browser="safari",n.version=parseInt(lr(i.userAgent,/AppleWebKit\/(\d+)\./,1)),n.supportsUnifiedPlan=o.RTCRtpTransceiver&&"currentDirection"in o.RTCRtpTransceiver.prototype,n._safariVersion=lr(i.userAgent,/Version\/(\d+(\.?\d+))/,1);else return n.browser="Not a supported browser.",n;return n}function ep(o){return Object.prototype.toString.call(o)==="[object Object]"}function vg(o){return ep(o)?Object.keys(o).reduce(function(n,i){const l=ep(o[i]),c=l?vg(o[i]):o[i],u=l&&!Object.keys(c).length;return c===void 0||u?n:Object.assign(n,{[i]:c})},{}):o}function Qf(o,n,i){!n||i.has(n.id)||(i.set(n.id,n),Object.keys(n).forEach(l=>{l.endsWith("Id")?Qf(o,o.get(n[l]),i):l.endsWith("Ids")&&n[l].forEach(c=>{Qf(o,o.get(c),i)})}))}function tp(o,n,i){const l=i?"outbound-rtp":"inbound-rtp",c=new Map;if(n===null)return c;const u=[];return o.forEach(_=>{_.type==="track"&&_.trackIdentifier===n.id&&u.push(_)}),u.forEach(_=>{o.forEach(g=>{g.type===l&&g.trackId===_.id&&Qf(o,g,c)})}),c}const np=Sh;function wg(o,n){if(n.version>=64)return;const i=o&&o.navigator;if(!i.mediaDevices)return;const l=function(g){if(typeof g!="object"||g.mandatory||g.optional)return g;const h={};return Object.keys(g).forEach(m=>{if(m==="require"||m==="advanced"||m==="mediaSource")return;const p=typeof g[m]=="object"?g[m]:{ideal:g[m]};p.exact!==void 0&&typeof p.exact=="number"&&(p.min=p.max=p.exact);const y=function(v,C){return v?v+C.charAt(0).toUpperCase()+C.slice(1):C==="deviceId"?"sourceId":C};if(p.ideal!==void 0){h.optional=h.optional||[];let v={};typeof p.ideal=="number"?(v[y("min",m)]=p.ideal,h.optional.push(v),v={},v[y("max",m)]=p.ideal,h.optional.push(v)):(v[y("",m)]=p.ideal,h.optional.push(v))}p.exact!==void 0&&typeof p.exact!="number"?(h.mandatory=h.mandatory||{},h.mandatory[y("",m)]=p.exact):["min","max"].forEach(v=>{p[v]!==void 0&&(h.mandatory=h.mandatory||{},h.mandatory[y(v,m)]=p[v])})}),g.advanced&&(h.optional=(h.optional||[]).concat(g.advanced)),h},c=function(g,h){if(n.version>=61)return h(g);if(g=JSON.parse(JSON.stringify(g)),g&&typeof g.audio=="object"){const m=function(p,y,v){y in p&&!(v in p)&&(p[v]=p[y],delete p[y])};g=JSON.parse(JSON.stringify(g)),m(g.audio,"autoGainControl","googAutoGainControl"),m(g.audio,"noiseSuppression","googNoiseSuppression"),g.audio=l(g.audio)}if(g&&typeof g.video=="object"){let m=g.video.facingMode;m=m&&(typeof m=="object"?m:{ideal:m});const p=n.version<66;if(m&&(m.exact==="user"||m.exact==="environment"||m.ideal==="user"||m.ideal==="environment")&&!(i.mediaDevices.getSupportedConstraints&&i.mediaDevices.getSupportedConstraints().facingMode&&!p)){delete g.video.facingMode;let y;if(m.exact==="environment"||m.ideal==="environment"?y=["back","rear"]:(m.exact==="user"||m.ideal==="user")&&(y=["front"]),y)return i.mediaDevices.enumerateDevices().then(v=>{v=v.filter(k=>k.kind==="videoinput");let C=v.find(k=>y.some(E=>k.label.toLowerCase().includes(E)));return!C&&v.length&&y.includes("back")&&(C=v[v.length-1]),C&&(g.video.deviceId=m.exact?{exact:C.deviceId}:{ideal:C.deviceId}),g.video=l(g.video),np("chrome: "+JSON.stringify(g)),h(g)})}g.video=l(g.video)}return np("chrome: "+JSON.stringify(g)),h(g)},u=function(g){return n.version>=64?g:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[g.name]||g.name,message:g.message,constraint:g.constraint||g.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},_=function(g,h,m){c(g,p=>{i.webkitGetUserMedia(p,h,y=>{m&&m(u(y))})})};if(i.getUserMedia=_.bind(i),i.mediaDevices.getUserMedia){const g=i.mediaDevices.getUserMedia.bind(i.mediaDevices);i.mediaDevices.getUserMedia=function(h){return c(h,m=>g(m).then(p=>{if(m.audio&&!p.getAudioTracks().length||m.video&&!p.getVideoTracks().length)throw p.getTracks().forEach(y=>{y.stop()}),new DOMException("","NotFoundError");return p},p=>Promise.reject(u(p))))}}}function Sg(o){o.MediaStream=o.MediaStream||o.webkitMediaStream}function kg(o,n){if(!(n.version>102))if(typeof o=="object"&&o.RTCPeerConnection&&!("ontrack"in o.RTCPeerConnection.prototype)){Object.defineProperty(o.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(l){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=l)},enumerable:!0,configurable:!0});const i=o.RTCPeerConnection.prototype.setRemoteDescription;o.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=c=>{c.stream.addEventListener("addtrack",u=>{let _;o.RTCPeerConnection.prototype.getReceivers?_=this.getReceivers().find(h=>h.track&&h.track.id===u.track.id):_={track:u.track};const g=new Event("track");g.track=u.track,g.receiver=_,g.transceiver={receiver:_},g.streams=[c.stream],this.dispatchEvent(g)}),c.stream.getTracks().forEach(u=>{let _;o.RTCPeerConnection.prototype.getReceivers?_=this.getReceivers().find(h=>h.track&&h.track.id===u.id):_={track:u};const g=new Event("track");g.track=u,g.receiver=_,g.transceiver={receiver:_},g.streams=[c.stream],this.dispatchEvent(g)})},this.addEventListener("addstream",this._ontrackpoly)),i.apply(this,arguments)}}else na(o,"track",i=>(i.transceiver||Object.defineProperty(i,"transceiver",{value:{receiver:i.receiver}}),i))}function Cg(o){if(typeof o=="object"&&o.RTCPeerConnection&&!("getSenders"in o.RTCPeerConnection.prototype)&&"createDTMFSender"in o.RTCPeerConnection.prototype){const n=function(c,u){return{track:u,get dtmf(){return this._dtmf===void 0&&(u.kind==="audio"?this._dtmf=c.createDTMFSender(u):this._dtmf=null),this._dtmf},_pc:c}};if(!o.RTCPeerConnection.prototype.getSenders){o.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const c=o.RTCPeerConnection.prototype.addTrack;o.RTCPeerConnection.prototype.addTrack=function(g,h){let m=c.apply(this,arguments);return m||(m=n(this,g),this._senders.push(m)),m};const u=o.RTCPeerConnection.prototype.removeTrack;o.RTCPeerConnection.prototype.removeTrack=function(g){u.apply(this,arguments);const h=this._senders.indexOf(g);h!==-1&&this._senders.splice(h,1)}}const i=o.RTCPeerConnection.prototype.addStream;o.RTCPeerConnection.prototype.addStream=function(u){this._senders=this._senders||[],i.apply(this,[u]),u.getTracks().forEach(_=>{this._senders.push(n(this,_))})};const l=o.RTCPeerConnection.prototype.removeStream;o.RTCPeerConnection.prototype.removeStream=function(u){this._senders=this._senders||[],l.apply(this,[u]),u.getTracks().forEach(_=>{const g=this._senders.find(h=>h.track===_);g&&this._senders.splice(this._senders.indexOf(g),1)})}}else if(typeof o=="object"&&o.RTCPeerConnection&&"getSenders"in o.RTCPeerConnection.prototype&&"createDTMFSender"in o.RTCPeerConnection.prototype&&o.RTCRtpSender&&!("dtmf"in o.RTCRtpSender.prototype)){const n=o.RTCPeerConnection.prototype.getSenders;o.RTCPeerConnection.prototype.getSenders=function(){const l=n.apply(this,[]);return l.forEach(c=>c._pc=this),l},Object.defineProperty(o.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function jg(o,n){if(n.version>=67||!(typeof o=="object"&&o.RTCPeerConnection&&o.RTCRtpSender&&o.RTCRtpReceiver))return;if(!("getStats"in o.RTCRtpSender.prototype)){const l=o.RTCPeerConnection.prototype.getSenders;l&&(o.RTCPeerConnection.prototype.getSenders=function(){const _=l.apply(this,[]);return _.forEach(g=>g._pc=this),_});const c=o.RTCPeerConnection.prototype.addTrack;c&&(o.RTCPeerConnection.prototype.addTrack=function(){const _=c.apply(this,arguments);return _._pc=this,_}),o.RTCRtpSender.prototype.getStats=function(){const _=this;return this._pc.getStats().then(g=>tp(g,_.track,!0))}}if(!("getStats"in o.RTCRtpReceiver.prototype)){const l=o.RTCPeerConnection.prototype.getReceivers;l&&(o.RTCPeerConnection.prototype.getReceivers=function(){const u=l.apply(this,[]);return u.forEach(_=>_._pc=this),u}),na(o,"track",c=>(c.receiver._pc=c.srcElement,c)),o.RTCRtpReceiver.prototype.getStats=function(){const u=this;return this._pc.getStats().then(_=>tp(_,u.track,!1))}}if(!("getStats"in o.RTCRtpSender.prototype&&"getStats"in o.RTCRtpReceiver.prototype))return;const i=o.RTCPeerConnection.prototype.getStats;o.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof o.MediaStreamTrack){const c=arguments[0];let u,_,g;return this.getSenders().forEach(h=>{h.track===c&&(u?g=!0:u=h)}),this.getReceivers().forEach(h=>(h.track===c&&(_?g=!0:_=h),h.track===c)),g||u&&_?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):u?u.getStats():_?_.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return i.apply(this,arguments)}}function Mg(o){o.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(_=>this._shimmedLocalStreams[_][0])};const n=o.RTCPeerConnection.prototype.addTrack;o.RTCPeerConnection.prototype.addTrack=function(_,g){if(!g)return n.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const h=n.apply(this,arguments);return this._shimmedLocalStreams[g.id]?this._shimmedLocalStreams[g.id].indexOf(h)===-1&&this._shimmedLocalStreams[g.id].push(h):this._shimmedLocalStreams[g.id]=[g,h],h};const i=o.RTCPeerConnection.prototype.addStream;o.RTCPeerConnection.prototype.addStream=function(_){this._shimmedLocalStreams=this._shimmedLocalStreams||{},_.getTracks().forEach(m=>{if(this.getSenders().find(y=>y.track===m))throw new DOMException("Track already exists.","InvalidAccessError")});const g=this.getSenders();i.apply(this,arguments);const h=this.getSenders().filter(m=>g.indexOf(m)===-1);this._shimmedLocalStreams[_.id]=[_].concat(h)};const l=o.RTCPeerConnection.prototype.removeStream;o.RTCPeerConnection.prototype.removeStream=function(_){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[_.id],l.apply(this,arguments)};const c=o.RTCPeerConnection.prototype.removeTrack;o.RTCPeerConnection.prototype.removeTrack=function(_){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},_&&Object.keys(this._shimmedLocalStreams).forEach(g=>{const h=this._shimmedLocalStreams[g].indexOf(_);h!==-1&&this._shimmedLocalStreams[g].splice(h,1),this._shimmedLocalStreams[g].length===1&&delete this._shimmedLocalStreams[g]}),c.apply(this,arguments)}}function Eg(o,n){if(!o.RTCPeerConnection)return;if(o.RTCPeerConnection.prototype.addTrack&&n.version>=65)return Mg(o);const i=o.RTCPeerConnection.prototype.getLocalStreams;o.RTCPeerConnection.prototype.getLocalStreams=function(){const p=i.apply(this);return this._reverseStreams=this._reverseStreams||{},p.map(y=>this._reverseStreams[y.id])};const l=o.RTCPeerConnection.prototype.addStream;o.RTCPeerConnection.prototype.addStream=function(p){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},p.getTracks().forEach(y=>{if(this.getSenders().find(C=>C.track===y))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[p.id]){const y=new o.MediaStream(p.getTracks());this._streams[p.id]=y,this._reverseStreams[y.id]=p,p=y}l.apply(this,[p])};const c=o.RTCPeerConnection.prototype.removeStream;o.RTCPeerConnection.prototype.removeStream=function(p){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},c.apply(this,[this._streams[p.id]||p]),delete this._reverseStreams[this._streams[p.id]?this._streams[p.id].id:p.id],delete this._streams[p.id]},o.RTCPeerConnection.prototype.addTrack=function(p,y){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const v=[].slice.call(arguments,1);if(v.length!==1||!v[0].getTracks().find(E=>E===p))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(E=>E.track===p))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const k=this._streams[y.id];if(k)k.addTrack(p),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const E=new o.MediaStream([p]);this._streams[y.id]=E,this._reverseStreams[E.id]=y,this.addStream(E)}return this.getSenders().find(E=>E.track===p)};function u(m,p){let y=p.sdp;return Object.keys(m._reverseStreams||[]).forEach(v=>{const C=m._reverseStreams[v],k=m._streams[C.id];y=y.replace(new RegExp(k.id,"g"),C.id)}),new RTCSessionDescription({type:p.type,sdp:y})}function _(m,p){let y=p.sdp;return Object.keys(m._reverseStreams||[]).forEach(v=>{const C=m._reverseStreams[v],k=m._streams[C.id];y=y.replace(new RegExp(C.id,"g"),k.id)}),new RTCSessionDescription({type:p.type,sdp:y})}["createOffer","createAnswer"].forEach(function(m){const p=o.RTCPeerConnection.prototype[m],y={[m](){const v=arguments;return arguments.length&&typeof arguments[0]=="function"?p.apply(this,[k=>{const E=u(this,k);v[0].apply(null,[E])},k=>{v[1]&&v[1].apply(null,k)},arguments[2]]):p.apply(this,arguments).then(k=>u(this,k))}};o.RTCPeerConnection.prototype[m]=y[m]});const g=o.RTCPeerConnection.prototype.setLocalDescription;o.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?g.apply(this,arguments):(arguments[0]=_(this,arguments[0]),g.apply(this,arguments))};const h=Object.getOwnPropertyDescriptor(o.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(o.RTCPeerConnection.prototype,"localDescription",{get(){const m=h.get.apply(this);return m.type===""?m:u(this,m)}}),o.RTCPeerConnection.prototype.removeTrack=function(p){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!p._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(p._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let v;Object.keys(this._streams).forEach(C=>{this._streams[C].getTracks().find(E=>p.track===E)&&(v=this._streams[C])}),v&&(v.getTracks().length===1?this.removeStream(this._reverseStreams[v.id]):v.removeTrack(p.track),this.dispatchEvent(new Event("negotiationneeded")))}}function Vf(o,n){!o.RTCPeerConnection&&o.webkitRTCPeerConnection&&(o.RTCPeerConnection=o.webkitRTCPeerConnection),o.RTCPeerConnection&&n.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(i){const l=o.RTCPeerConnection.prototype[i],c={[i](){return arguments[0]=new(i==="addIceCandidate"?o.RTCIceCandidate:o.RTCSessionDescription)(arguments[0]),l.apply(this,arguments)}};o.RTCPeerConnection.prototype[i]=c[i]})}function Tg(o,n){n.version>102||na(o,"negotiationneeded",i=>{const l=i.target;if(!((n.version<72||l.getConfiguration&&l.getConfiguration().sdpSemantics==="plan-b")&&l.signalingState!=="stable"))return i})}const sp=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:Tg,shimAddTrackRemoveTrack:Eg,shimAddTrackRemoveTrackWithNative:Mg,shimGetSendersWithDtmf:Cg,shimGetUserMedia:wg,shimMediaStream:Sg,shimOnTrack:kg,shimPeerConnection:Vf,shimSenderReceiverGetStats:jg},Symbol.toStringTag,{value:"Module"}));function Rg(o,n){const i=o&&o.navigator;if(!i.mediaDevices)return;const l=o&&o.MediaStreamTrack;if(i.getUserMedia=function(c,u,_){kh("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),i.mediaDevices.getUserMedia(c).then(u,_)},!(n.version>55&&"autoGainControl"in i.mediaDevices.getSupportedConstraints())){const c=function(_,g,h){g in _&&!(h in _)&&(_[h]=_[g],delete _[g])},u=i.mediaDevices.getUserMedia.bind(i.mediaDevices);if(i.mediaDevices.getUserMedia=function(_){return typeof _=="object"&&typeof _.audio=="object"&&(_=JSON.parse(JSON.stringify(_)),c(_.audio,"autoGainControl","mozAutoGainControl"),c(_.audio,"noiseSuppression","mozNoiseSuppression")),u(_)},l&&l.prototype.getSettings){const _=l.prototype.getSettings;l.prototype.getSettings=function(){const g=_.apply(this,arguments);return c(g,"mozAutoGainControl","autoGainControl"),c(g,"mozNoiseSuppression","noiseSuppression"),g}}if(l&&l.prototype.applyConstraints){const _=l.prototype.applyConstraints;l.prototype.applyConstraints=function(g){return this.kind==="audio"&&typeof g=="object"&&(g=JSON.parse(JSON.stringify(g)),c(g,"autoGainControl","mozAutoGainControl"),c(g,"noiseSuppression","mozNoiseSuppression")),_.apply(this,[g])}}}}function A5(o,n){o.navigator.mediaDevices&&(o.navigator.mediaDevices&&"getDisplayMedia"in o.navigator.mediaDevices||(o.navigator.mediaDevices.getDisplayMedia=function(l){if(!(l&&l.video)){const c=new DOMException("getDisplayMedia without video constraints is undefined");return c.name="NotFoundError",c.code=8,Promise.reject(c)}return l.video===!0?l.video={mediaSource:n}:l.video.mediaSource=n,o.navigator.mediaDevices.getUserMedia(l)}))}function Dg(o){typeof o=="object"&&o.RTCTrackEvent&&"receiver"in o.RTCTrackEvent.prototype&&!("transceiver"in o.RTCTrackEvent.prototype)&&Object.defineProperty(o.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Kf(o,n){typeof o!="object"||!(o.RTCPeerConnection||o.mozRTCPeerConnection)||(!o.RTCPeerConnection&&o.mozRTCPeerConnection&&(o.RTCPeerConnection=o.mozRTCPeerConnection),n.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(i){const l=o.RTCPeerConnection.prototype[i],c={[i](){return arguments[0]=new(i==="addIceCandidate"?o.RTCIceCandidate:o.RTCSessionDescription)(arguments[0]),l.apply(this,arguments)}};o.RTCPeerConnection.prototype[i]=c[i]}))}function Ag(o,n){if(typeof o!="object"||!(o.RTCPeerConnection||o.mozRTCPeerConnection)||n.version>=151)return;const i={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},l=o.RTCPeerConnection.prototype.getStats;o.RTCPeerConnection.prototype.getStats=function(){const[u,_,g]=arguments;return this.signalingState==="closed"?Promise.resolve(new Map):l.apply(this,[u||null]).then(h=>{if(n.version<53&&!_)try{h.forEach(m=>{m.type=i[m.type]||m.type})}catch(m){if(m.name!=="TypeError")throw m;h.forEach((p,y)=>{h.set(y,Object.assign({},p,{type:i[p.type]||p.type}))})}return h}).then(_,g)}}function Ng(o){if(!(typeof o=="object"&&o.RTCPeerConnection&&o.RTCRtpSender)||o.RTCRtpSender&&"getStats"in o.RTCRtpSender.prototype)return;const n=o.RTCPeerConnection.prototype.getSenders;n&&(o.RTCPeerConnection.prototype.getSenders=function(){const c=n.apply(this,[]);return c.forEach(u=>u._pc=this),c});const i=o.RTCPeerConnection.prototype.addTrack;i&&(o.RTCPeerConnection.prototype.addTrack=function(){const c=i.apply(this,arguments);return c._pc=this,c}),o.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function Lg(o){if(!(typeof o=="object"&&o.RTCPeerConnection&&o.RTCRtpSender)||o.RTCRtpSender&&"getStats"in o.RTCRtpReceiver.prototype)return;const n=o.RTCPeerConnection.prototype.getReceivers;n&&(o.RTCPeerConnection.prototype.getReceivers=function(){const l=n.apply(this,[]);return l.forEach(c=>c._pc=this),l}),na(o,"track",i=>(i.receiver._pc=i.srcElement,i)),o.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function Og(o){!o.RTCPeerConnection||"removeStream"in o.RTCPeerConnection.prototype||(o.RTCPeerConnection.prototype.removeStream=function(i){kh("removeStream","removeTrack"),this.getSenders().forEach(l=>{l.track&&i.getTracks().includes(l.track)&&this.removeTrack(l)})})}function zg(o){o.DataChannel&&!o.RTCDataChannel&&(o.RTCDataChannel=o.DataChannel)}function Bg(o,n){if(!(typeof o=="object"&&o.RTCPeerConnection)||n.version>=110)return;const i=o.RTCPeerConnection.prototype.addTransceiver;i&&(o.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let c=arguments[1]&&arguments[1].sendEncodings;c===void 0&&(c=[]),c=[...c];const u=c.length>0;u&&c.forEach(g=>{if("rid"in g&&!/^[a-z0-9]{0,16}$/i.test(g.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in g&&!(parseFloat(g.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in g&&!(parseFloat(g.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const _=i.apply(this,arguments);if(u){const{sender:g}=_,h=g.getParameters();(!("encodings"in h)||h.encodings.length===1&&Object.keys(h.encodings[0]).length===0)&&(h.encodings=c,g.sendEncodings=c,this.setParametersPromises.push(g.setParameters(h).then(()=>{delete g.sendEncodings}).catch(()=>{delete g.sendEncodings})))}return _})}function $g(o,n){if(!(typeof o=="object"&&o.RTCRtpSender)||n.version>=110)return;const i=o.RTCRtpSender.prototype.getParameters;i&&(o.RTCRtpSender.prototype.getParameters=function(){const c=i.apply(this,arguments);return"encodings"in c||(c.encodings=[].concat(this.sendEncodings||[{}])),c})}function Pg(o,n){if(!(typeof o=="object"&&o.RTCPeerConnection)||n.version>=110)return;const i=o.RTCPeerConnection.prototype.createOffer;o.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>i.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):i.apply(this,arguments)}}function Ig(o,n){if(!(typeof o=="object"&&o.RTCPeerConnection)||n.version>=110)return;const i=o.RTCPeerConnection.prototype.createAnswer;o.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>i.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):i.apply(this,arguments)}}const op=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:Bg,shimCreateAnswer:Ig,shimCreateOffer:Pg,shimGetDisplayMedia:A5,shimGetParameters:$g,shimGetStats:Ag,shimGetUserMedia:Rg,shimOnTrack:Dg,shimPeerConnection:Kf,shimRTCDataChannel:zg,shimReceiverGetStats:Lg,shimRemoveStream:Og,shimSenderGetStats:Ng},Symbol.toStringTag,{value:"Module"}));function Ug(o){if(!(typeof o!="object"||!o.RTCPeerConnection)){if("getLocalStreams"in o.RTCPeerConnection.prototype||(o.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in o.RTCPeerConnection.prototype)){const n=o.RTCPeerConnection.prototype.addTrack;o.RTCPeerConnection.prototype.addStream=function(l){this._localStreams||(this._localStreams=[]),this._localStreams.includes(l)||this._localStreams.push(l),l.getAudioTracks().forEach(c=>n.call(this,c,l)),l.getVideoTracks().forEach(c=>n.call(this,c,l))},o.RTCPeerConnection.prototype.addTrack=function(l,...c){return c&&c.forEach(u=>{this._localStreams?this._localStreams.includes(u)||this._localStreams.push(u):this._localStreams=[u]}),n.apply(this,arguments)}}"removeStream"in o.RTCPeerConnection.prototype||(o.RTCPeerConnection.prototype.removeStream=function(i){this._localStreams||(this._localStreams=[]);const l=this._localStreams.indexOf(i);if(l===-1)return;this._localStreams.splice(l,1);const c=i.getTracks();this.getSenders().forEach(u=>{c.includes(u.track)&&this.removeTrack(u)})})}}function Hg(o){if(!(typeof o!="object"||!o.RTCPeerConnection)&&("getRemoteStreams"in o.RTCPeerConnection.prototype||(o.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in o.RTCPeerConnection.prototype))){Object.defineProperty(o.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(i){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=i),this.addEventListener("track",this._onaddstreampoly=l=>{l.streams.forEach(c=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(c))return;this._remoteStreams.push(c);const u=new Event("addstream");u.stream=c,this.dispatchEvent(u)})})}});const n=o.RTCPeerConnection.prototype.setRemoteDescription;o.RTCPeerConnection.prototype.setRemoteDescription=function(){const l=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(c){c.streams.forEach(u=>{if(l._remoteStreams||(l._remoteStreams=[]),l._remoteStreams.indexOf(u)>=0)return;l._remoteStreams.push(u);const _=new Event("addstream");_.stream=u,l.dispatchEvent(_)})}),n.apply(l,arguments)}}}function Yg(o){if(typeof o!="object"||!o.RTCPeerConnection)return;const n=o.RTCPeerConnection.prototype,i=n.createOffer,l=n.createAnswer,c=n.setLocalDescription,u=n.setRemoteDescription,_=n.addIceCandidate;n.createOffer=function(m,p){const y=arguments.length>=2?arguments[2]:arguments[0],v=i.apply(this,[y]);return p?(v.then(m,p),Promise.resolve()):v},n.createAnswer=function(m,p){const y=arguments.length>=2?arguments[2]:arguments[0],v=l.apply(this,[y]);return p?(v.then(m,p),Promise.resolve()):v};let g=function(h,m,p){const y=c.apply(this,[h]);return p?(y.then(m,p),Promise.resolve()):y};n.setLocalDescription=g,g=function(h,m,p){const y=u.apply(this,[h]);return p?(y.then(m,p),Promise.resolve()):y},n.setRemoteDescription=g,g=function(h,m,p){const y=_.apply(this,[h]);return p?(y.then(m,p),Promise.resolve()):y},n.addIceCandidate=g}function Xg(o){const n=o&&o.navigator;if(n.mediaDevices&&n.mediaDevices.getUserMedia){const i=n.mediaDevices,l=i.getUserMedia.bind(i);n.mediaDevices.getUserMedia=c=>l(Fg(c))}!n.getUserMedia&&n.mediaDevices&&n.mediaDevices.getUserMedia&&(n.getUserMedia=(function(l,c,u){n.mediaDevices.getUserMedia(l).then(c,u)}).bind(n))}function Fg(o){return o&&o.video!==void 0?Object.assign({},o,{video:vg(o.video)}):o}function Gg(o){if(!o.RTCPeerConnection)return;const n=o.RTCPeerConnection;o.RTCPeerConnection=function(l,c){if(l&&l.iceServers){const u=[];for(let _=0;_<l.iceServers.length;_++){let g=l.iceServers[_];g.urls===void 0&&g.url?(kh("RTCIceServer.url","RTCIceServer.urls"),g=JSON.parse(JSON.stringify(g)),g.urls=g.url,delete g.url,u.push(g)):u.push(l.iceServers[_])}l.iceServers=u}return new n(l,c)},o.RTCPeerConnection.prototype=n.prototype,"generateCertificate"in n&&Object.defineProperty(o.RTCPeerConnection,"generateCertificate",{get(){return n.generateCertificate}})}function Wg(o){typeof o=="object"&&o.RTCTrackEvent&&"receiver"in o.RTCTrackEvent.prototype&&!("transceiver"in o.RTCTrackEvent.prototype)&&Object.defineProperty(o.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function qg(o){const n=o.RTCPeerConnection.prototype.createOffer;o.RTCPeerConnection.prototype.createOffer=function(l){if(l){typeof l.offerToReceiveAudio<"u"&&(l.offerToReceiveAudio=!!l.offerToReceiveAudio);const c=this.getTransceivers().find(_=>_.receiver.track.kind==="audio");l.offerToReceiveAudio===!1&&c?c.direction==="sendrecv"?c.setDirection?c.setDirection("sendonly"):c.direction="sendonly":c.direction==="recvonly"&&(c.setDirection?c.setDirection("inactive"):c.direction="inactive"):l.offerToReceiveAudio===!0&&!c&&this.addTransceiver("audio",{direction:"recvonly"}),typeof l.offerToReceiveVideo<"u"&&(l.offerToReceiveVideo=!!l.offerToReceiveVideo);const u=this.getTransceivers().find(_=>_.receiver.track.kind==="video");l.offerToReceiveVideo===!1&&u?u.direction==="sendrecv"?u.setDirection?u.setDirection("sendonly"):u.direction="sendonly":u.direction==="recvonly"&&(u.setDirection?u.setDirection("inactive"):u.direction="inactive"):l.offerToReceiveVideo===!0&&!u&&this.addTransceiver("video",{direction:"recvonly"})}return n.apply(this,arguments)}}function Qg(o){typeof o!="object"||o.AudioContext||(o.AudioContext=o.webkitAudioContext)}const ip=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:Qg,shimCallbacksAPI:Yg,shimConstraints:Fg,shimCreateOfferLegacy:qg,shimGetUserMedia:Xg,shimLocalStreamsAPI:Ug,shimRTCIceServerUrls:Gg,shimRemoteStreamsAPI:Hg,shimTrackEventTransceiver:Wg},Symbol.toStringTag,{value:"Module"}));var Ef={exports:{}},ap;function N5(){return ap||(ap=1,(function(o){const n={};n.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},n.localCName=n.generateIdentifier(),n.splitLines=function(i){return i.trim().split(`
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
`},n.getDirection=function(i,l){const c=n.splitLines(i);for(let u=0;u<c.length;u++)switch(c[u]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return c[u].substring(2)}return l?n.getDirection(l):"sendrecv"},n.getKind=function(i){return n.splitLines(i)[0].split(" ")[0].substring(2)},n.isRejected=function(i){return i.split(" ",2)[1]==="0"},n.parseMLine=function(i){const c=n.splitLines(i)[0].substring(2).split(" ");return{kind:c[0],port:parseInt(c[1],10),protocol:c[2],fmt:c.slice(3).join(" ")}},n.parseOLine=function(i){const c=n.matchPrefix(i,"o=")[0].substring(2).split(" ");return{username:c[0],sessionId:c[1],sessionVersion:parseInt(c[2],10),netType:c[3],addressType:c[4],address:c[5]}},n.isValidSDP=function(i){if(typeof i!="string"||i.length===0)return!1;const l=n.splitLines(i);for(let c=0;c<l.length;c++)if(l[c].length<2||l[c].charAt(1)!=="=")return!1;return!0},o.exports=n})(Ef)),Ef.exports}var Vg=N5();const Va=hh(Vg),L5=X1({__proto__:null,default:Va},[Vg]);function su(o){if(!o.RTCIceCandidate||o.RTCIceCandidate&&"foundation"in o.RTCIceCandidate.prototype)return;const n=o.RTCIceCandidate;o.RTCIceCandidate=function(l){if(typeof l=="object"&&l.candidate&&l.candidate.indexOf("a=")===0&&(l=JSON.parse(JSON.stringify(l)),l.candidate=l.candidate.substring(2)),l.candidate&&l.candidate.length){const c=new n(l),u=Va.parseCandidate(l.candidate);for(const _ in u)_ in c||Object.defineProperty(c,_,{value:u[_]});return c.toJSON=function(){return{candidate:c.candidate,sdpMid:c.sdpMid,sdpMLineIndex:c.sdpMLineIndex,usernameFragment:c.usernameFragment}},c}return new n(l)},o.RTCIceCandidate.prototype=n.prototype,na(o,"icecandidate",i=>(i.candidate&&Object.defineProperty(i,"candidate",{value:new o.RTCIceCandidate(i.candidate),writable:"false"}),i))}function Zf(o){!o.RTCIceCandidate||o.RTCIceCandidate&&"relayProtocol"in o.RTCIceCandidate.prototype||na(o,"icecandidate",n=>{if(n.candidate){const i=Va.parseCandidate(n.candidate.candidate);i.type==="relay"&&(n.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[i.priority>>24])}return n})}function ou(o,n){if(!o.RTCPeerConnection||n.browser==="chrome"&&n.version>102||n.browser==="firefox"&&n.version>=113)return;"sctp"in o.RTCPeerConnection.prototype||Object.defineProperty(o.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const i=function(g){if(!g||!g.sdp)return!1;const h=Va.splitSections(g.sdp);return h.shift(),h.some(m=>{const p=Va.parseMLine(m);return p&&p.kind==="application"&&p.protocol.indexOf("SCTP")!==-1})},l=function(g){const h=g.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(h===null||h.length<2)return-1;const m=parseInt(h[1],10);return m!==m?-1:m},c=function(g){let h=65536;return n.browser==="firefox"&&(n.version<57?g===-1?h=16384:h=2147483637:n.version<60?h=n.version===57?65535:65536:h=2147483637),h},u=function(g,h){let m=65536;n.browser==="firefox"&&n.version===57&&(m=65535);const p=Va.matchPrefix(g.sdp,"a=max-message-size:");return p.length>0?m=parseInt(p[0].substring(19),10):n.browser==="firefox"&&h!==-1&&(m=2147483637),m},_=o.RTCPeerConnection.prototype.setRemoteDescription;o.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,n.browser==="chrome"&&n.version>=76){const{sdpSemantics:h}=this.getConfiguration();h==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(i(arguments[0])){const h=l(arguments[0]),m=c(h),p=u(arguments[0],h);let y;m===0&&p===0?y=Number.POSITIVE_INFINITY:m===0||p===0?y=Math.max(m,p):y=Math.min(m,p);const v={};Object.defineProperty(v,"maxMessageSize",{get(){return y}}),this._sctp=v}return _.apply(this,arguments)}}function iu(o,n){if(!(o.RTCPeerConnection&&"createDataChannel"in o.RTCPeerConnection.prototype)||n.browser==="chrome"&&n.version>=149||n.browser==="firefox"&&n.version>60)return;function i(c,u){const _=c.send;c.send=function(){const h=arguments[0],m=h.length||h.size||h.byteLength;if(c.readyState==="open"&&u.sctp&&m>u.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+u.sctp.maxMessageSize+" bytes)");return _.apply(c,arguments)}}const l=o.RTCPeerConnection.prototype.createDataChannel;o.RTCPeerConnection.prototype.createDataChannel=function(){const u=l.apply(this,arguments);return i(u,this),u},na(o,"datachannel",c=>(i(c.channel,c.target),c))}function Jf(o){if(!o.RTCPeerConnection||"connectionState"in o.RTCPeerConnection.prototype)return;const n=o.RTCPeerConnection.prototype;Object.defineProperty(n,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(n,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(i){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),i&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=i)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(i=>{const l=n[i];n[i]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=c=>{const u=c.target;if(u._lastConnectionState!==u.connectionState){u._lastConnectionState=u.connectionState;const _=new Event("connectionstatechange",c);u.dispatchEvent(_)}return c},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),l.apply(this,arguments)}})}function eh(o,n){if(!o.RTCPeerConnection||n.browser==="chrome"&&n.version>=71||n.browser==="safari"&&n._safariVersion>=13.1)return;const i=o.RTCPeerConnection.prototype.setRemoteDescription;o.RTCPeerConnection.prototype.setRemoteDescription=function(c){if(c&&c.sdp&&c.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const u=c.sdp.split(`
`).filter(_=>_.trim()!=="a=extmap-allow-mixed").join(`
`);o.RTCSessionDescription&&c instanceof o.RTCSessionDescription?arguments[0]=new o.RTCSessionDescription({type:c.type,sdp:u}):c.sdp=u}return i.apply(this,arguments)}}function au(o,n){if(!(o.RTCPeerConnection&&o.RTCPeerConnection.prototype))return;const i=o.RTCPeerConnection.prototype.addIceCandidate;!i||i.length===0||(o.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(n.browser==="chrome"&&n.version<78||n.browser==="firefox"&&n.version<68||n.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():i.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function lu(o,n){if(!(o.RTCPeerConnection&&o.RTCPeerConnection.prototype))return;const i=o.RTCPeerConnection.prototype.setLocalDescription;!i||i.length===0||(o.RTCPeerConnection.prototype.setLocalDescription=function(){let c=arguments[0]||{};if(typeof c!="object"||c.type&&c.sdp)return i.apply(this,arguments);if(c={type:c.type,sdp:c.sdp},!c.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":c.type="offer";break;default:c.type="answer";break}return c.sdp||c.type!=="offer"&&c.type!=="answer"?i.apply(this,[c]):(c.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(_=>i.apply(this,[_]))})}const O5=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:eh,shimAddIceCandidateNullOrEmpty:au,shimConnectionState:Jf,shimMaxMessageSize:ou,shimParameterlessSetLocalDescription:lu,shimRTCIceCandidate:su,shimRTCIceCandidateRelayProtocol:Zf,shimSendThrowTypeError:iu},Symbol.toStringTag,{value:"Module"}));function z5({window:o}={},n={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){const i=Sh,l=D5(o),c={browserDetails:l,commonShim:O5,extractVersion:lr,disableLog:T5,disableWarnings:R5,sdp:L5};switch(l.browser){case"chrome":if(!sp||!Vf||!n.shimChrome)return i("Chrome shim is not included in this adapter release."),c;if(l.version===null)return i("Chrome shim can not determine version, not shimming."),c;i("adapter.js shimming chrome."),c.browserShim=sp,au(o,l),lu(o),wg(o,l),Sg(o),Vf(o,l),kg(o,l),Eg(o,l),Cg(o),jg(o,l),Tg(o,l),su(o),Zf(o),Jf(o),ou(o,l),iu(o,l),eh(o,l);break;case"firefox":if(!op||!Kf||!n.shimFirefox)return i("Firefox shim is not included in this adapter release."),c;i("adapter.js shimming firefox."),c.browserShim=op,au(o,l),lu(o),Rg(o,l),Kf(o,l),Ag(o,l),Dg(o),Og(o),Ng(o),Lg(o),zg(o),Bg(o,l),$g(o,l),Pg(o,l),Ig(o,l),su(o),Jf(o),ou(o,l),iu(o,l);break;case"safari":if(!ip||!n.shimSafari)return i("Safari shim is not included in this adapter release."),c;i("adapter.js shimming safari."),c.browserShim=ip,au(o,l),lu(o),Gg(o),qg(o),Yg(o),Ug(o),Hg(o),Wg(o),Xg(o),Qg(o),su(o),Zf(o),ou(o,l),iu(o,l),eh(o,l);break;default:i("Unsupported browser!");break}return c}const lp=z5({window:typeof window>"u"?void 0:window});function sa(o,n,i,l){Object.defineProperty(o,n,{get:i,set:l,enumerable:!0,configurable:!0})}class Kg{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=n=>{const i=[],l=n.byteLength,c=Math.ceil(l/this.chunkedMTU);let u=0,_=0;for(;_<l;){const g=Math.min(l,_+this.chunkedMTU),h=n.slice(_,g),m={__peerData:this._dataCount,n:u,data:h,total:c};i.push(m),_=g,u++}return this._dataCount++,i}}}function B5(o){let n=0;for(const c of o)n+=c.byteLength;const i=new Uint8Array(n);let l=0;for(const c of o)i.set(c,l),l+=c.byteLength;return i}const Tf=lp.default||lp,er=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){const o=this.getBrowser(),n=this.getVersion();return this.supportedBrowsers.includes(o)?o==="chrome"?n>=this.minChromeVersion:o==="firefox"?n>=this.minFirefoxVersion:o==="safari"?!this.isIOS&&n>=this.minSafariVersion:!1:!1}getBrowser(){return Tf.browserDetails.browser}getVersion(){return Tf.browserDetails.version||0}isUnifiedPlanSupported(){const o=this.getBrowser(),n=Tf.browserDetails.version||0;if(o==="chrome"&&n<this.minChromeVersion)return!1;if(o==="firefox"&&n>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let i,l=!1;try{i=new RTCPeerConnection,i.addTransceiver("audio"),l=!0}catch{}finally{i&&i.close()}return l}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},$5=o=>!o||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(o),Zg=()=>Math.random().toString(36).slice(2),rp={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};class P5 extends Kg{noop(){}blobToArrayBuffer(n,i){const l=new FileReader;return l.onload=function(c){c.target&&i(c.target.result)},l.readAsArrayBuffer(n),l}binaryStringToArrayBuffer(n){const i=new Uint8Array(n.length);for(let l=0;l<n.length;l++)i[l]=n.charCodeAt(l)&255;return i.buffer}isSecure(){return location.protocol==="https:"}constructor(...n){super(...n),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=rp,this.browser=er.getBrowser(),this.browserVersion=er.getVersion(),this.pack=yg,this.unpack=gg,this.supports=(function(){const i={browser:er.isBrowserSupported(),webRTC:er.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!i.webRTC)return i;let l;try{l=new RTCPeerConnection(rp),i.audioVideo=!0;let c;try{c=l.createDataChannel("_PEERJSTEST",{ordered:!0}),i.data=!0,i.reliable=!!c.ordered;try{c.binaryType="blob",i.binaryBlob=!er.isIOS}catch{}}catch{}finally{c&&c.close()}}catch{}finally{l&&l.close()}return i})(),this.validateId=$5,this.randomToken=Zg}}const bs=new P5,I5="PeerJS: ";class U5{get logLevel(){return this._logLevel}set logLevel(n){this._logLevel=n}log(...n){this._logLevel>=3&&this._print(3,...n)}warn(...n){this._logLevel>=2&&this._print(2,...n)}error(...n){this._logLevel>=1&&this._print(1,...n)}setLogFunction(n){this._print=n}_print(n,...i){const l=[I5,...i];for(const c in l)l[c]instanceof Error&&(l[c]="("+l[c].name+") "+l[c].message);n>=3?console.log(...l):n>=2?console.warn("WARNING",...l):n>=1&&console.error("ERROR",...l)}constructor(){this._logLevel=0}}var He=new U5,Ch={},H5=Object.prototype.hasOwnProperty,fs="~";function hr(){}Object.create&&(hr.prototype=Object.create(null),new hr().__proto__||(fs=!1));function Y5(o,n,i){this.fn=o,this.context=n,this.once=i||!1}function Jg(o,n,i,l,c){if(typeof i!="function")throw new TypeError("The listener must be a function");var u=new Y5(i,l||o,c),_=fs?fs+n:n;return o._events[_]?o._events[_].fn?o._events[_]=[o._events[_],u]:o._events[_].push(u):(o._events[_]=u,o._eventsCount++),o}function ru(o,n){--o._eventsCount===0?o._events=new hr:delete o._events[n]}function is(){this._events=new hr,this._eventsCount=0}is.prototype.eventNames=function(){var n=[],i,l;if(this._eventsCount===0)return n;for(l in i=this._events)H5.call(i,l)&&n.push(fs?l.slice(1):l);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(i)):n};is.prototype.listeners=function(n){var i=fs?fs+n:n,l=this._events[i];if(!l)return[];if(l.fn)return[l.fn];for(var c=0,u=l.length,_=new Array(u);c<u;c++)_[c]=l[c].fn;return _};is.prototype.listenerCount=function(n){var i=fs?fs+n:n,l=this._events[i];return l?l.fn?1:l.length:0};is.prototype.emit=function(n,i,l,c,u,_){var g=fs?fs+n:n;if(!this._events[g])return!1;var h=this._events[g],m=arguments.length,p,y;if(h.fn){switch(h.once&&this.removeListener(n,h.fn,void 0,!0),m){case 1:return h.fn.call(h.context),!0;case 2:return h.fn.call(h.context,i),!0;case 3:return h.fn.call(h.context,i,l),!0;case 4:return h.fn.call(h.context,i,l,c),!0;case 5:return h.fn.call(h.context,i,l,c,u),!0;case 6:return h.fn.call(h.context,i,l,c,u,_),!0}for(y=1,p=new Array(m-1);y<m;y++)p[y-1]=arguments[y];h.fn.apply(h.context,p)}else{var v=h.length,C;for(y=0;y<v;y++)switch(h[y].once&&this.removeListener(n,h[y].fn,void 0,!0),m){case 1:h[y].fn.call(h[y].context);break;case 2:h[y].fn.call(h[y].context,i);break;case 3:h[y].fn.call(h[y].context,i,l);break;case 4:h[y].fn.call(h[y].context,i,l,c);break;default:if(!p)for(C=1,p=new Array(m-1);C<m;C++)p[C-1]=arguments[C];h[y].fn.apply(h[y].context,p)}}return!0};is.prototype.on=function(n,i,l){return Jg(this,n,i,l,!1)};is.prototype.once=function(n,i,l){return Jg(this,n,i,l,!0)};is.prototype.removeListener=function(n,i,l,c){var u=fs?fs+n:n;if(!this._events[u])return this;if(!i)return ru(this,u),this;var _=this._events[u];if(_.fn)_.fn===i&&(!c||_.once)&&(!l||_.context===l)&&ru(this,u);else{for(var g=0,h=[],m=_.length;g<m;g++)(_[g].fn!==i||c&&!_[g].once||l&&_[g].context!==l)&&h.push(_[g]);h.length?this._events[u]=h.length===1?h[0]:h:ru(this,u)}return this};is.prototype.removeAllListeners=function(n){var i;return n?(i=fs?fs+n:n,this._events[i]&&ru(this,i)):(this._events=new hr,this._eventsCount=0),this};is.prototype.off=is.prototype.removeListener;is.prototype.addListener=is.prototype.on;is.prefixed=fs;is.EventEmitter=is;Ch=is;var oa={};sa(oa,"ConnectionType",()=>Mi);sa(oa,"PeerErrorType",()=>Pn);sa(oa,"BaseConnectionErrorType",()=>th);sa(oa,"DataConnectionErrorType",()=>jh);sa(oa,"SerializationType",()=>bu);sa(oa,"SocketEventType",()=>ji);sa(oa,"ServerMessageType",()=>os);var Mi=(function(o){return o.Data="data",o.Media="media",o})({}),Pn=(function(o){return o.BrowserIncompatible="browser-incompatible",o.Disconnected="disconnected",o.InvalidID="invalid-id",o.InvalidKey="invalid-key",o.Network="network",o.PeerUnavailable="peer-unavailable",o.SslUnavailable="ssl-unavailable",o.ServerError="server-error",o.SocketError="socket-error",o.SocketClosed="socket-closed",o.UnavailableID="unavailable-id",o.WebRTC="webrtc",o})({}),th=(function(o){return o.NegotiationFailed="negotiation-failed",o.ConnectionClosed="connection-closed",o})({}),jh=(function(o){return o.NotOpenYet="not-open-yet",o.MessageToBig="message-too-big",o})({}),bu=(function(o){return o.Binary="binary",o.BinaryUTF8="binary-utf8",o.JSON="json",o.None="raw",o})({}),ji=(function(o){return o.Message="message",o.Disconnected="disconnected",o.Error="error",o.Close="close",o})({}),os=(function(o){return o.Heartbeat="HEARTBEAT",o.Candidate="CANDIDATE",o.Offer="OFFER",o.Answer="ANSWER",o.Open="OPEN",o.Error="ERROR",o.IdTaken="ID-TAKEN",o.InvalidKey="INVALID-KEY",o.Leave="LEAVE",o.Expire="EXPIRE",o})({});const ey="1.5.5";class X5 extends Ch.EventEmitter{constructor(n,i,l,c,u,_=5e3){super(),this.pingInterval=_,this._disconnected=!0,this._messagesQueue=[];const g=n?"wss://":"ws://";this._baseUrl=g+i+":"+l+c+"peerjs?key="+u}start(n,i){this._id=n;const l=`${this._baseUrl}&id=${n}&token=${i}`;this._socket||!this._disconnected||(this._socket=new WebSocket(l+"&version="+ey),this._disconnected=!1,this._socket.onmessage=c=>{let u;try{u=JSON.parse(c.data),He.log("Server message received:",u)}catch{He.log("Invalid server message",c.data);return}this.emit(ji.Message,u)},this._socket.onclose=c=>{this._disconnected||(He.log("Socket closed.",c),this._cleanup(),this._disconnected=!0,this.emit(ji.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),He.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){He.log("Cannot send heartbeat, because socket closed");return}const n=JSON.stringify({type:os.Heartbeat});this._socket.send(n),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){const n=[...this._messagesQueue];this._messagesQueue=[];for(const i of n)this.send(i)}send(n){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(n);return}if(!n.type){this.emit(ji.Error,"Invalid message");return}if(!this._wsOpen())return;const i=JSON.stringify(n);this._socket.send(i)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class ty{constructor(n){this.connection=n}startConnection(n){const i=this._startPeerConnection();if(this.connection.peerConnection=i,this.connection.type===Mi.Media&&n._stream&&this._addTracksToConnection(n._stream,i),n.originator){const l=this.connection,c={ordered:!!n.reliable},u=i.createDataChannel(l.label,c);l._initializeDataChannel(u),this._makeOffer()}else this.handleSDP("OFFER",n.sdp)}_startPeerConnection(){He.log("Creating RTCPeerConnection.");const n=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(n),n}_setupListeners(n){const i=this.connection.peer,l=this.connection.connectionId,c=this.connection.type,u=this.connection.provider;He.log("Listening for ICE candidates."),n.onicecandidate=_=>{!_.candidate||!_.candidate.candidate||(He.log(`Received ICE candidates for ${i}:`,_.candidate),u.socket.send({type:os.Candidate,payload:{candidate:_.candidate,type:c,connectionId:l},dst:i}))},n.oniceconnectionstatechange=()=>{switch(n.iceConnectionState){case"failed":He.log("iceConnectionState is failed, closing connections to "+i),this.connection.emitError(th.NegotiationFailed,"Negotiation of connection to "+i+" failed."),this.connection.close();break;case"closed":He.log("iceConnectionState is closed, closing connections to "+i),this.connection.emitError(th.ConnectionClosed,"Connection to "+i+" closed."),this.connection.close();break;case"disconnected":He.log("iceConnectionState changed to disconnected on the connection with "+i);break;case"completed":n.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",n.iceConnectionState)},He.log("Listening for data channel"),n.ondatachannel=_=>{He.log("Received data channel");const g=_.channel;u.getConnection(i,l)._initializeDataChannel(g)},He.log("Listening for remote stream"),n.ontrack=_=>{He.log("Received remote stream");const g=_.streams[0],h=u.getConnection(i,l);if(h.type===Mi.Media){const m=h;this._addStreamToMediaConnection(g,m)}}}cleanup(){He.log("Cleaning up PeerConnection to "+this.connection.peer);const n=this.connection.peerConnection;if(!n)return;this.connection.peerConnection=null,n.onicecandidate=n.oniceconnectionstatechange=n.ondatachannel=n.ontrack=()=>{};const i=n.signalingState!=="closed";let l=!1;const c=this.connection.dataChannel;c&&(l=!!c.readyState&&c.readyState!=="closed"),(i||l)&&n.close()}async _makeOffer(){const n=this.connection.peerConnection,i=this.connection.provider;try{const l=await n.createOffer(this.connection.options.constraints);He.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(l.sdp=this.connection.options.sdpTransform(l.sdp)||l.sdp);try{await n.setLocalDescription(l),He.log("Set localDescription:",l,`for:${this.connection.peer}`);let c={sdp:l,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===Mi.Data){const u=this.connection;c={...c,label:u.label,reliable:u.reliable,serialization:u.serialization}}i.socket.send({type:os.Offer,payload:c,dst:this.connection.peer})}catch(c){c!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(i.emitError(Pn.WebRTC,c),He.log("Failed to setLocalDescription, ",c))}}catch(l){i.emitError(Pn.WebRTC,l),He.log("Failed to createOffer, ",l)}}async _makeAnswer(){const n=this.connection.peerConnection,i=this.connection.provider;try{const l=await n.createAnswer();He.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(l.sdp=this.connection.options.sdpTransform(l.sdp)||l.sdp);try{await n.setLocalDescription(l),He.log("Set localDescription:",l,`for:${this.connection.peer}`),i.socket.send({type:os.Answer,payload:{sdp:l,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(c){i.emitError(Pn.WebRTC,c),He.log("Failed to setLocalDescription, ",c)}}catch(l){i.emitError(Pn.WebRTC,l),He.log("Failed to create answer, ",l)}}async handleSDP(n,i){i=new RTCSessionDescription(i);const l=this.connection.peerConnection,c=this.connection.provider;He.log("Setting remote description",i);const u=this;try{await l.setRemoteDescription(i),He.log(`Set remoteDescription:${n} for:${this.connection.peer}`),n==="OFFER"&&await u._makeAnswer()}catch(_){c.emitError(Pn.WebRTC,_),He.log("Failed to setRemoteDescription, ",_)}}async handleCandidate(n){He.log("handleCandidate:",n);try{await this.connection.peerConnection.addIceCandidate(n),He.log(`Added ICE candidate for:${this.connection.peer}`)}catch(i){this.connection.provider.emitError(Pn.WebRTC,i),He.log("Failed to handleCandidate, ",i)}}_addTracksToConnection(n,i){if(He.log(`add tracks from stream ${n.id} to peer connection`),!i.addTrack)return He.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");n.getTracks().forEach(l=>{i.addTrack(l,n)})}_addStreamToMediaConnection(n,i){He.log(`add stream ${n.id} to media connection ${i.connectionId}`),i.addStream(n)}}class ny extends Ch.EventEmitter{emitError(n,i){He.error("Error:",i),this.emit("error",new F5(`${n}`,i))}}class F5 extends Error{constructor(n,i){typeof i=="string"?super(i):(super(),Object.assign(this,i)),this.type=n}}class sy extends ny{get open(){return this._open}constructor(n,i,l){super(),this.peer=n,this.provider=i,this.options=l,this._open=!1,this.metadata=l.metadata}}var ch;const ur=class ur extends sy{get type(){return Mi.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(n,i,l){super(n,i,l),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||ur.ID_PREFIX+bs.randomToken(),this._negotiator=new ty(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(n){this.dataChannel=n,this.dataChannel.onopen=()=>{He.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{He.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(n){He.log("Receiving stream",n),this._remoteStream=n,super.emit("stream",n)}handleMessage(n){const i=n.type,l=n.payload;switch(n.type){case os.Answer:this._negotiator.handleSDP(i,l.sdp),this._open=!0;break;case os.Candidate:this._negotiator.handleCandidate(l.candidate);break;default:He.warn(`Unrecognized message type:${i} from peer:${this.peer}`);break}}answer(n,i={}){if(this._localStream){He.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=n,i&&i.sdpTransform&&(this.options.sdpTransform=i.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:n});const l=this.provider._getMessages(this.connectionId);for(const c of l)this.handleMessage(c);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}};ch=new WeakMap,Vl(ur,ch,ur.ID_PREFIX="mc_");let fu=ur;class G5{constructor(n){this._options=n}_buildRequest(n){const i=this._options.secure?"https":"http",{host:l,port:c,path:u,key:_}=this._options,g=new URL(`${i}://${l}:${c}${u}${_}/${n}`);return g.searchParams.set("ts",`${Date.now()}${Math.random()}`),g.searchParams.set("version",ey),fetch(g.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const n=await this._buildRequest("id");if(n.status!==200)throw new Error(`Error. Status:${n.status}`);return n.text()}catch(n){He.error("Error retrieving ID",n);let i="";throw this._options.path==="/"&&this._options.host!==bs.CLOUD_HOST&&(i=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+i)}}async listAllPeers(){try{const n=await this._buildRequest("peers");if(n.status!==200){if(n.status===401){let i="";throw this._options.host===bs.CLOUD_HOST?i="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":i="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+i)}throw new Error(`Error. Status:${n.status}`)}return n.json()}catch(n){throw He.error("Error retrieving list peers",n),new Error("Could not get list peers from the server."+n)}}}var uh,dh;const Ji=class Ji extends sy{get type(){return Mi.Data}constructor(n,i,l){super(n,i,l),this.connectionId=this.options.connectionId||Ji.ID_PREFIX+Zg(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new ty(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(n){this.dataChannel=n,this.dataChannel.onopen=()=>{He.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=i=>{He.log(`DC#${this.connectionId} dc onmessage:`,i.data)},this.dataChannel.onclose=()=>{He.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(n){if(n!=null&&n.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(n,i=!1){if(!this.open){this.emitError(jh.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(n,i)}async handleMessage(n){const i=n.payload;switch(n.type){case os.Answer:await this._negotiator.handleSDP(n.type,i.sdp);break;case os.Candidate:await this._negotiator.handleCandidate(i.candidate);break;default:He.warn("Unrecognized message type:",n.type,"from peer:",this.peer);break}}};uh=new WeakMap,dh=new WeakMap,Vl(Ji,uh,Ji.ID_PREFIX="dc_"),Vl(Ji,dh,Ji.MAX_BUFFERED_AMOUNT=8388608);let hu=Ji;class Mh extends hu{get bufferSize(){return this._bufferSize}_initializeDataChannel(n){super._initializeDataChannel(n),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",i=>this._handleDataMessage(i))}_bufferedSend(n){(this._buffering||!this._trySend(n))&&(this._buffer.push(n),this._bufferSize=this._buffer.length)}_trySend(n){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>hu.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(n)}catch(i){return He.error(`DC#:${this.connectionId} Error when sending:`,i),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;const n=this._buffer[0];this._trySend(n)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(n){if(n!=null&&n.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...n){super(...n),this._buffer=[],this._bufferSize=0,this._buffering=!1}}class Rf extends Mh{close(n){super.close(n),this._chunkedData={}}constructor(n,i,l){super(n,i,l),this.chunker=new Kg,this.serialization=bu.Binary,this._chunkedData={}}_handleDataMessage({data:n}){const i=gg(n),l=i.__peerData;if(l){if(l.type==="close"){this.close();return}this._handleChunk(i);return}this.emit("data",i)}_handleChunk(n){const i=n.__peerData,l=this._chunkedData[i]||{data:[],count:0,total:n.total};if(l.data[n.n]=new Uint8Array(n.data),l.count++,this._chunkedData[i]=l,l.total===l.count){delete this._chunkedData[i];const c=B5(l.data);this._handleDataMessage({data:c})}}_send(n,i){const l=yg(n);if(l instanceof Promise)return this._send_blob(l);if(!i&&l.byteLength>this.chunker.chunkedMTU){this._sendChunks(l);return}this._bufferedSend(l)}async _send_blob(n){const i=await n;if(i.byteLength>this.chunker.chunkedMTU){this._sendChunks(i);return}this._bufferedSend(i)}_sendChunks(n){const i=this.chunker.chunk(n);He.log(`DC#${this.connectionId} Try to send ${i.length} chunks...`);for(const l of i)this.send(l,!0)}}class W5 extends Mh{_handleDataMessage({data:n}){super.emit("data",n)}_send(n,i){this._bufferedSend(n)}constructor(...n){super(...n),this.serialization=bu.None}}class q5 extends Mh{_handleDataMessage({data:n}){const i=this.parse(this.decoder.decode(n)),l=i.__peerData;if(l&&l.type==="close"){this.close();return}this.emit("data",i)}_send(n,i){const l=this.encoder.encode(this.stringify(n));if(l.byteLength>=bs.chunkedMTU){this.emitError(jh.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(l)}constructor(...n){super(...n),this.serialization=bu.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}}var fh;const dr=class dr extends ny{get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const n=Object.create(null);for(const[i,l]of this._connections)n[i]=l;return n}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(n,i){super(),this._serializers={raw:W5,json:q5,binary:Rf,"binary-utf8":Rf,default:Rf},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let l;if(n&&n.constructor==Object?i=n:n&&(l=n.toString()),i={debug:0,host:bs.CLOUD_HOST,port:bs.CLOUD_PORT,path:"/",key:dr.DEFAULT_KEY,token:bs.randomToken(),config:bs.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...i},this._options=i,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==bs.CLOUD_HOST?this._options.secure=bs.isSecure():this._options.host==bs.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&He.setLogFunction(this._options.logFunction),He.logLevel=this._options.debug||0,this._api=new G5(i),this._socket=this._createServerConnection(),!bs.supports.audioVideo&&!bs.supports.data){this._delayedAbort(Pn.BrowserIncompatible,"The current browser does not support WebRTC");return}if(l&&!bs.validateId(l)){this._delayedAbort(Pn.InvalidID,`ID "${l}" is invalid`);return}l?this._initialize(l):this._api.retrieveId().then(c=>this._initialize(c)).catch(c=>this._abort(Pn.ServerError,c))}_createServerConnection(){const n=new X5(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return n.on(ji.Message,i=>{this._handleMessage(i)}),n.on(ji.Error,i=>{this._abort(Pn.SocketError,i)}),n.on(ji.Disconnected,()=>{this.disconnected||(this.emitError(Pn.Network,"Lost connection to server."),this.disconnect())}),n.on(ji.Close,()=>{this.disconnected||this._abort(Pn.SocketClosed,"Underlying socket is already closed.")}),n}_initialize(n){this._id=n,this.socket.start(n,this._options.token)}_handleMessage(n){const i=n.type,l=n.payload,c=n.src;switch(i){case os.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case os.Error:this._abort(Pn.ServerError,l.msg);break;case os.IdTaken:this._abort(Pn.UnavailableID,`ID "${this.id}" is taken`);break;case os.InvalidKey:this._abort(Pn.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case os.Leave:He.log(`Received leave message from ${c}`),this._cleanupPeer(c),this._connections.delete(c);break;case os.Expire:this.emitError(Pn.PeerUnavailable,`Could not connect to peer ${c}`);break;case os.Offer:{const u=l.connectionId;let _=this.getConnection(c,u);if(_&&(_.close(),He.warn(`Offer received for existing Connection ID:${u}`)),l.type===Mi.Media){const h=new fu(c,this,{connectionId:u,_payload:l,metadata:l.metadata});_=h,this._addConnection(c,_),this.emit("call",h)}else if(l.type===Mi.Data){const h=new this._serializers[l.serialization](c,this,{connectionId:u,_payload:l,metadata:l.metadata,label:l.label,serialization:l.serialization,reliable:l.reliable});_=h,this._addConnection(c,_),this.emit("connection",h)}else{He.warn(`Received malformed connection type:${l.type}`);return}const g=this._getMessages(u);for(const h of g)_.handleMessage(h);break}default:{if(!l){He.warn(`You received a malformed message from ${c} of type ${i}`);return}const u=l.connectionId,_=this.getConnection(c,u);_&&_.peerConnection?_.handleMessage(n):u?this._storeMessage(u,n):He.warn("You received an unrecognized message:",n);break}}}_storeMessage(n,i){this._lostMessages.has(n)||this._lostMessages.set(n,[]),this._lostMessages.get(n).push(i)}_getMessages(n){const i=this._lostMessages.get(n);return i?(this._lostMessages.delete(n),i):[]}connect(n,i={}){if(i={serialization:"default",...i},this.disconnected){He.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(Pn.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}const l=new this._serializers[i.serialization](n,this,i);return this._addConnection(n,l),l}call(n,i,l={}){if(this.disconnected){He.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(Pn.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!i){He.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}const c=new fu(n,this,{...l,_stream:i});return this._addConnection(n,c),c}_addConnection(n,i){He.log(`add connection ${i.type}:${i.connectionId} to peerId:${n}`),this._connections.has(n)||this._connections.set(n,[]),this._connections.get(n).push(i)}_removeConnection(n){const i=this._connections.get(n.peer);if(i){const l=i.indexOf(n);l!==-1&&i.splice(l,1)}this._lostMessages.delete(n.connectionId)}getConnection(n,i){const l=this._connections.get(n);if(!l)return null;for(const c of l)if(c.connectionId===i)return c;return null}_delayedAbort(n,i){setTimeout(()=>{this._abort(n,i)},0)}_abort(n,i){He.error("Aborting!"),this.emitError(n,i),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(He.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(const n of this._connections.keys())this._cleanupPeer(n),this._connections.delete(n);this.socket.removeAllListeners()}_cleanupPeer(n){const i=this._connections.get(n);if(i)for(const l of i)l.close()}disconnect(){if(this.disconnected)return;const n=this.id;He.log(`Disconnect peer with ID:${n}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=n,this._id=null,this.emit("disconnected",n)}reconnect(){if(this.disconnected&&!this.destroyed)He.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)He.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(n=i=>{}){this._api.listAllPeers().then(i=>n(i)).catch(i=>this._abort(Pn.ServerError,i))}};fh=new WeakMap,Vl(dr,fh,dr.DEFAULT_KEY="peerjs");let nh=dr;var oy=nh;const iy="soccer-game-room-",ay={debug:1,config:{iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"},{urls:"stun:stun2.l.google.com:19302"},{urls:"stun:stun3.l.google.com:19302"},{urls:"stun:stun4.l.google.com:19302"}]}};class Q5{constructor(){Be(this,"peer",null);Be(this,"connection",null);Be(this,"roomId");Be(this,"onConnectionStateChange");Be(this,"onInputReceived");this.roomId=Math.floor(1e3+Math.random()*9e3).toString()}init(n){n&&(this.roomId=n);const i=`${iy}${this.roomId}`;return new Promise((l,c)=>{try{this.peer=new oy(i,ay),this.peer.on("open",u=>{console.log("[HostPeerService] Host Peer open with ID:",u),l(this.roomId)}),this.peer.on("connection",u=>{console.log("[HostPeerService] Client connected:",u.peer),this.connection=u,this.onConnectionStateChange&&this.onConnectionStateChange(!0),u.on("data",_=>{this.onInputReceived&&_&&_.type==="CONTROLLER_INPUT"&&this.onInputReceived(_.input)}),u.on("close",()=>{console.log("[HostPeerService] Client connection closed"),this.connection=null,this.onConnectionStateChange&&this.onConnectionStateChange(!1)}),u.on("error",_=>{console.error("[HostPeerService] Connection error:",_),this.connection=null,this.onConnectionStateChange&&this.onConnectionStateChange(!1)})}),this.peer.on("error",u=>{console.error("[HostPeerService] Peer error:",u),c(u)})}catch(u){c(u)}})}destroy(){this.connection&&(this.connection.close(),this.connection=null),this.peer&&(this.peer.destroy(),this.peer=null)}}class V5{constructor(){Be(this,"peer",null);Be(this,"connection",null);Be(this,"onConnectionStateChange")}connectToHost(n){const i=`${iy}${n}`;return new Promise((l,c)=>{try{this.peer=new oy(ay),this.peer.on("open",()=>{if(console.log("[ControllerPeerService] Controller Peer open, connecting to host:",i),!this.peer)return;const u=this.peer.connect(i,{reliable:!0});this.connection=u,u.on("open",()=>{console.log("[ControllerPeerService] Connected to host!"),this.onConnectionStateChange&&this.onConnectionStateChange(!0),l(!0)}),u.on("close",()=>{console.log("[ControllerPeerService] Host connection closed"),this.connection=null,this.onConnectionStateChange&&this.onConnectionStateChange(!1)}),u.on("error",_=>{console.error("[ControllerPeerService] Connection error:",_),this.connection=null,this.onConnectionStateChange&&this.onConnectionStateChange(!1),c(_)})}),this.peer.on("error",u=>{console.error("[ControllerPeerService] Peer error:",u),c(u)})}catch(u){c(u)}})}sendInput(n){this.connection&&this.connection.open&&this.connection.send({type:"CONTROLLER_INPUT",input:n})}destroy(){this.connection&&(this.connection.close(),this.connection=null),this.peer&&(this.peer.destroy(),this.peer=null)}}const Gs=2200,Ws=1350,Hc=.92,K5=()=>{const o=b.useRef(null),{gamepads:n}=O2(),[i,l]=b.useState({width:window.innerWidth,height:window.innerHeight}),[c,u]=b.useState(!0),[_,g]=b.useState(!1),h=b.useRef(!1),[m,p]=b.useState("8492"),[y,v]=b.useState(!1),C=b.useRef(null),k=b.useRef(null),E=b.useRef({x:Gs*.5,y:Ws*.5}),O=b.useRef(new B2(Gs,Ws)),B=b.useRef(new Gf(Gs*.5,Ws*.5)),J=b.useRef(new P2("1v1_local")),F=b.useRef([new Mf("p1","Player 1 (Kamu)","home",0,"#06b6d4",Gs*.35,Ws*.5),new Mf("p2","Player 2 (Rekan)","home",1,"#34d399",Gs*.35,Ws*.35),new Mf("p3","Musuh (P3)","away",null,"#f59e0b",Gs*.46,Ws*.5)]),[z,de]=b.useState(J.current.state);b.useEffect(()=>{const he=new Q5;return C.current=he,he.onConnectionStateChange=re=>{v(re)},he.onInputReceived=re=>{var Q,Oe,oe,ke,N,ue,W,be,Ne,D;re&&(k.current={index:99,id:"Smartphone Remote Controller",connected:!0,axes:{leftStickX:((Q=re.axes)==null?void 0:Q.leftStickX)||0,leftStickY:((Oe=re.axes)==null?void 0:Oe.leftStickY)||0,rightStickX:0,rightStickY:0},buttons:{a:((oe=re.buttons)==null?void 0:oe.a)||!1,b:((ke=re.buttons)==null?void 0:ke.b)||!1,x:((N=re.buttons)==null?void 0:N.x)||!1,y:((ue=re.buttons)==null?void 0:ue.y)||!1,lb:((W=re.buttons)==null?void 0:W.lb)||!1,rb:((be=re.buttons)==null?void 0:be.rb)||!1,lt:0,rt:((Ne=re.buttons)==null?void 0:Ne.rt)||0,back:!1,start:((D=re.buttons)==null?void 0:D.start)||!1,lsClick:!1,rsClick:!1}})},he.init().then(re=>{p(re)}),()=>{he.destroy()}},[]),b.useEffect(()=>{const he=()=>{l({width:window.innerWidth,height:window.innerHeight})},re=Q=>{(Q.key==="Control"||Q.ctrlKey)&&g(Oe=>!Oe)};return window.addEventListener("resize",he),window.addEventListener("keydown",re),()=>{window.removeEventListener("resize",he),window.removeEventListener("keydown",re)}},[]);const ye=b.useCallback(()=>{B.current.reset(Gs*.46,Ws*.5),F.current[0].reset(Gs*.35,Ws*.5),F.current[1].reset(Gs*.35,Ws*.35);const he=F.current[2];he.reset(Gs*.46,Ws*.5),he.hasPossession=!0,B.current.attachToPlayer(he.pos,he.facingAngle,he.radius,he.vel,"p3"),E.current={x:Gs*.5,y:Ws*.5}},[]);b.useEffect(()=>{ye()},[ye]);const G=b.useCallback(()=>{J.current.resetMatch(),ye(),de({...J.current.state})},[ye]),fe=b.useCallback(he=>{J.current.setMode(he),ye(),de({...J.current.state})},[ye]),xe=b.useCallback(()=>{u(he=>!he)},[]);return z2(he=>{const re=o.current;if(!re)return;const Q=re.getContext("2d");if(!Q)return;const Oe=O.current,oe=B.current,ke=J.current,N=F.current,ue=N[0],W=N[1],be=N[2];if(n[0]){const Qe=n[0].buttons.back;Qe&&!h.current&&g(ve=>!ve),h.current=Qe}if(ke.update(he,oe,Oe)&&ye(),ke.state.state!=="GAME_OVER"){N.forEach(ve=>{const ft=N.filter(ct=>ct.team===ve.team&&ct.id!==ve.id),Ke=N.filter(ct=>ct.team!==ve.team);if(ve.id==="p1"&&k.current&&y){const ct=k.current,{toggleHUDRequested:Dt}=ve.updateFromGamepad(ct,oe,Oe,ft,Ke);Dt&&u(dn=>!dn)}else if(ve.controllerIndex!==null&&n[ve.controllerIndex]){const ct=n[ve.controllerIndex],{toggleHUDRequested:Dt}=ve.updateFromGamepad(ct,oe,Oe,ft,Ke);Dt&&u(dn=>!dn)}else ve.id==="p3"?ve.updateEnemyBotAI(oe,Oe,Ke):ve.updatePassiveReception(oe,Oe)}),N.forEach(ve=>{const ft=Math.hypot(ve.pos.x-oe.pos.x,ve.pos.y-oe.pos.y),Ke=ve.radius+oe.radius+22;oe.releaseTimer<=0&&ft<Ke&&(oe.homingTargetPlayer&&oe.homingTargetPlayer.id===ve.id?(ve.hasPossession=!0,oe.homingTargetPlayer=null,oe.throughPassTargetPos=null,oe.attachToPlayer(ve.pos,ve.facingAngle,ve.radius,ve.vel,ve.id)):!oe.homingTargetPlayer&&!N.some(ct=>ct.id!==ve.id&&ct.hasPossession)&&(ve.hasPossession=!0,oe.attachToPlayer(ve.pos,ve.facingAngle,ve.radius,ve.vel,ve.id)))});for(let ve=0;ve<N.length;ve++)for(let ft=ve+1;ft<N.length;ft++){const Ke=N[ve],ct=N[ft],Dt=ct.pos.x-Ke.pos.x,dn=ct.pos.y-Ke.pos.y,bn=Math.hypot(Dt,dn)||1,mn=Ke.radius+ct.radius;if(bn<mn){const V=mn-bn,Te=Dt/bn,Ge=dn/bn;Ke.pos.x-=Te*V*.5,Ke.pos.y-=Ge*V*.5,ct.pos.x+=Te*V*.5,ct.pos.y+=Ge*V*.5;const Ve=Ke.vel.x-ct.vel.x,nt=Ke.vel.y-ct.vel.y,Ye=Te*Ve+Ge*nt;Ye>0&&(Ke.vel.x-=Ye*Te*.5,Ke.vel.y-=Ye*Ge*.5,ct.vel.x+=Ye*Te*.5,ct.vel.y+=Ye*Ge*.5)}}N.forEach(ve=>{const ft=N.find(Ke=>Ke.id!==ve.id&&Ke.hasPossession);if(ft){const Ke=Math.hypot(ve.pos.x-ft.pos.x,ve.pos.y-ft.pos.y),ct=Math.hypot(ve.pos.x-oe.pos.x,ve.pos.y-oe.pos.y),Dt=ve.radius+ft.radius+18,dn=ve.radius+ft.radius+75,bn=Ke<Dt||ct<ve.radius+oe.radius+18,mn=ve.isTackling&&(Ke<dn||ct<dn);(bn||mn)&&(ft.skillDodgeInvincibleTimer>0?(ft.triggerFeedback("🔥 GOCEK SUCCESS!"),ve.stumbleTimer=.55,ve.isTackling=!1,ve.triggerFeedback("❌ TACKLE MISSED!")):(ft.hasPossession=!1,ve.hasPossession=!0,oe.releaseTimer=0,oe.homingTargetPlayer=null,oe.throughPassTargetPos=null,oe.attachToPlayer(ve.pos,ve.facingAngle,ve.radius,ve.vel,ve.id),ve.triggerFeedback("⚡ BOLA DIREBUT!"),ft.triggerFeedback("💥 REBUT!"),ve.isTackling=!1))}}),N.forEach(ve=>{!ve.hasPossession&&oe.releaseTimer<=0&&oe.checkPlayerCollision(ve)});const Qe=y?"📱 HP Remote":"P1 Controller 0";ke.state.debugInputText=`${N[0].debugInputString} | SRC: ${Qe}`,oe.update(he,Oe)}de({...ke.state});const D=ue.pos.x*.4+(be?be.pos.x*.3:0)+oe.pos.x*.3,Z=ue.pos.y*.4+(be?be.pos.y*.3:0)+oe.pos.y*.3;E.current.x=E.current.x*.88+D*.12,E.current.y=E.current.y*.88+Z*.12;const pe=i.width,Me=i.height,qe=pe/(2*Hc),rt=Me/(2*Hc),dt=Math.max(qe,Math.min(Gs-qe,E.current.x)),en=Math.max(rt,Math.min(Ws-rt,E.current.y));if(Q.clearRect(0,0,pe,Me),Q.save(),Q.translate(pe/2,Me/2),Q.scale(Hc,Hc),Q.translate(-dt,-en),Oe.draw(Q),c){const Qe=ue.hasPossession?ue:W.hasPossession?W:null;if(Qe){[140,280,420].forEach((V,Te)=>{Q.strokeStyle=Te===0?"rgba(56, 189, 248, 0.35)":Te===1?"rgba(52, 211, 153, 0.25)":"rgba(168, 85, 247, 0.20)",Q.lineWidth=1.5,Q.setLineDash([6,6]),Q.beginPath(),Q.arc(Qe.pos.x,Qe.pos.y,V,0,Math.PI*2),Q.stroke()}),Q.setLineDash([]);const Ke=Math.PI/3,ct=Qe.facingAngle-Ke/2,Dt=Qe.facingAngle+Ke/2,dn=320;Q.fillStyle="rgba(6, 182, 212, 0.08)",Q.strokeStyle="rgba(6, 182, 212, 0.3)",Q.lineWidth=1.5,Q.beginPath(),Q.moveTo(Qe.pos.x,Qe.pos.y),Q.arc(Qe.pos.x,Qe.pos.y,dn,ct,Dt),Q.closePath(),Q.fill(),Q.stroke();const bn=N.filter(V=>V.team===Qe.team&&V.id!==Qe.id),mn=Qe.findBestPassTarget(bn,Qe.facingAngle);if(mn){const V=mn.pos.x-Qe.pos.x,Te=mn.pos.y-Qe.pos.y,Ge=Math.hypot(V,Te)||1;Q.strokeStyle="#06b6d4",Q.lineWidth=2.5,Q.setLineDash([8,6]),Q.beginPath(),Q.moveTo(Qe.pos.x,Qe.pos.y),Q.lineTo(mn.pos.x,mn.pos.y),Q.stroke(),Q.setLineDash([]);const Ve=Math.floor(Ge/50);Q.strokeStyle="#38bdf8",Q.lineWidth=2;for(let ut=1;ut<=Ve;ut++){const St=Qe.pos.x+V/Ge*(ut*50),Ht=Qe.pos.y+Te/Ge*(ut*50),Pe=-(Te/Ge)*6,I=V/Ge*6;Q.beginPath(),Q.moveTo(St-Pe,Ht-I),Q.lineTo(St+Pe,Ht+I),Q.stroke()}const nt=mn.pos.x,Ye=mn.pos.y,Re=22;Q.strokeStyle="#34d399",Q.lineWidth=2.5,Q.beginPath(),Q.moveTo(nt-Re,Ye-Re+6),Q.lineTo(nt-Re,Ye-Re),Q.lineTo(nt-Re+6,Ye-Re),Q.moveTo(nt+Re-6,Ye-Re),Q.lineTo(nt+Re,Ye-Re),Q.lineTo(nt+Re,Ye-Re+6),Q.moveTo(nt-Re,Ye+Re-6),Q.lineTo(nt-Re,Ye+Re),Q.lineTo(nt-Re+6,Ye+Re),Q.moveTo(nt+Re-6,Ye+Re),Q.lineTo(nt+Re,Ye+Re),Q.lineTo(nt+Re,Ye+Re-6),Q.stroke()}}if(oe.homingTargetPlayer){const ft=oe.homingTargetPlayer;Q.strokeStyle=oe.throughPassTargetPos?"#f59e0b":"#a855f7",Q.lineWidth=3,Q.setLineDash([4,4]),Q.beginPath(),Q.moveTo(oe.pos.x,oe.pos.y),Q.lineTo(ft.pos.x,ft.pos.y),Q.stroke(),Q.setLineDash([])}const ve=Math.hypot(oe.vel.x,oe.vel.y);if(ve>.2){const ft=Math.min(ve*8,40),Ke=oe.pos.x+oe.vel.x/ve*ft,ct=oe.pos.y+oe.vel.y/ve*ft;Q.strokeStyle="#f59e0b",Q.lineWidth=3,Q.beginPath(),Q.moveTo(oe.pos.x,oe.pos.y),Q.lineTo(Ke,ct),Q.stroke()}}N.forEach(Qe=>Qe.draw(Q)),oe.draw(Q),Q.restore()}),r.jsxs("div",{className:"fixed inset-0 w-screen h-screen overflow-hidden bg-slate-950 flex flex-col items-center justify-center",children:[r.jsx(k5,{matchState:z,showHUD:c,onToggleHUD:xe,onResetMatch:G,onToggleMode:fe,peerRoomId:m,isPeerConnected:y}),r.jsx("canvas",{ref:o,width:i.width,height:i.height,className:`w-full h-full block ${_?"cursor-default":"cursor-none"}`})]})},Z5=()=>{const[o,n]=b.useState(""),[i,l]=b.useState(!1),[c,u]=b.useState(!1),[_,g]=b.useState(""),h=b.useRef(null),[m,p]=b.useState(null),[y,v]=b.useState({x:0,y:0}),[C,k]=b.useState(!1),E=b.useRef({leftStickX:0,leftStickY:0,a:!1,b:!1,x:!1,y:!1,lb:!1,rb:!1,rt:0,start:!1}),O=()=>{var fe;try{const xe=document.documentElement;xe.requestFullscreen?xe.requestFullscreen().catch(()=>{}):xe.webkitRequestFullscreen&&xe.webkitRequestFullscreen(),(fe=window.screen)!=null&&fe.orientation&&"lock"in window.screen.orientation&&window.screen.orientation.lock("landscape").catch(()=>{})}catch{}};b.useEffect(()=>{const xe=new URLSearchParams(window.location.search).get("room");xe&&(n(xe),J(xe))},[]);const B=(fe=20)=>{if(typeof window<"u"&&"vibrate"in navigator)try{navigator.vibrate(fe)}catch{}},J=async fe=>{const xe=fe||o;if(!xe)return;u(!0),g(""),O(),h.current||(h.current=new V5);const he=h.current;he.onConnectionStateChange=re=>{l(re),u(!1),re&&B(50)};try{await he.connectToHost(xe)}catch(re){console.error("Failed to connect:",re),g("Gagal terhubung ke Laptop. Pastikan Room Code benar."),u(!1)}},F=b.useCallback(()=>{h.current&&i&&h.current.sendInput({axes:{leftStickX:E.current.leftStickX,leftStickY:E.current.leftStickY,rightStickX:0,rightStickY:0},buttons:{a:E.current.a,b:E.current.b,x:E.current.x,y:E.current.y,lb:E.current.lb,rb:E.current.rb,lt:0,rt:E.current.rt,back:!1,start:E.current.start,lsClick:!1,rsClick:!1}})},[i]),z=fe=>{fe.preventDefault(),O();const xe=fe.clientX,he=fe.clientY;p({x:xe,y:he}),v({x:0,y:0}),k(!0)},de=fe=>{if(!C||!m)return;fe.preventDefault();const xe=fe.clientX-m.x,he=fe.clientY-m.y,re=Math.hypot(xe,he),Q=55,Oe=Math.min(re,Q),oe=Math.atan2(he,xe),ke=Math.cos(oe)*Oe,N=Math.sin(oe)*Oe;v({x:ke,y:N}),E.current.leftStickX=Number((ke/Q).toFixed(2)),E.current.leftStickY=Number((N/Q).toFixed(2)),F()},ye=()=>{k(!1),p(null),v({x:0,y:0}),E.current.leftStickX=0,E.current.leftStickY=0,F()},G=(fe,xe)=>{xe&&B(22),fe==="rt"?E.current.rt=xe?1:0:E.current[fe]=xe,F()};return i?r.jsxs("div",{className:"fixed inset-0 bg-[#4e9a51] text-slate-100 select-none touch-none overflow-hidden font-sans w-screen h-screen",children:[r.jsxs("div",{className:"absolute top-2 left-4 right-4 flex items-center justify-between pointer-events-none z-30",children:[r.jsxs("div",{className:"flex items-center gap-2 bg-black/40 border border-white/20 px-3.5 py-1 rounded-full text-white text-[11px] font-bold shadow-lg backdrop-blur-md",children:[r.jsx(d5,{className:"w-3.5 h-3.5 animate-pulse text-emerald-300"}),r.jsxs("span",{children:["CONNECTED (",o,")"]})]}),r.jsxs("div",{className:"flex items-center gap-2 pointer-events-auto",children:[r.jsx("button",{onPointerDown:()=>G("rb",!0),onPointerUp:()=>G("rb",!1),className:"px-3 py-1.5 rounded-xl bg-[#3d7a40]/90 border border-[#6cb870] text-amber-300 font-black text-xs shadow-lg active:scale-95 transition backdrop-blur-md",children:"R1 (Request Ball)"}),r.jsx("button",{onClick:O,className:"w-9 h-9 rounded-xl bg-black/40 border border-white/30 text-white flex items-center justify-center hover:bg-black/60 active:scale-90 transition shadow-lg backdrop-blur-md",children:r.jsx(Z2,{className:"w-4 h-4 text-white"})}),r.jsx("button",{onClick:()=>G("start",!0),onPointerUp:()=>G("start",!1),className:"w-9 h-9 rounded-xl bg-black/40 border border-white/30 text-white flex items-center justify-center hover:bg-black/60 active:scale-90 transition shadow-lg backdrop-blur-md",children:r.jsx(o5,{className:"w-4 h-4 text-white"})})]})]}),r.jsx("div",{onPointerDown:z,onPointerMove:de,onPointerUp:ye,onPointerCancel:ye,className:"absolute top-0 left-0 w-1/2 h-full z-10 touch-none",children:m?r.jsxs("div",{className:"absolute w-40 h-40 rounded-full bg-[#1b431d]/70 border-4 border-[#2b662d] flex items-center justify-center shadow-2xl pointer-events-none -translate-x-1/2 -translate-y-1/2",style:{left:`${m.x}px`,top:`${m.y}px`},children:[r.jsx("div",{className:"w-20 h-20 rounded-full border border-white/20 pointer-events-none"}),r.jsx("div",{className:"w-14 h-14 rounded-full bg-gradient-to-b from-slate-100 to-slate-300 border-2 border-slate-400 shadow-2xl absolute pointer-events-none transition-transform duration-75 flex items-center justify-center",style:{transform:`translate(${y.x}px, ${y.y}px)`},children:r.jsx("div",{className:"w-10 h-10 rounded-full border-2 border-slate-300/80 bg-slate-200/50"})})]}):r.jsx("div",{className:"absolute left-8 bottom-8 w-32 h-32 rounded-full bg-[#1b431d]/40 border-4 border-[#2b662d]/60 flex items-center justify-center opacity-40 pointer-events-none",children:r.jsx("div",{className:"w-12 h-12 rounded-full bg-slate-200/80 border-2 border-slate-300"})})}),r.jsx("div",{className:"absolute top-0 right-0 w-1/2 h-full z-20 flex items-end justify-end pb-3 pr-3 pointer-events-none",children:r.jsxs("div",{className:"relative w-[241px] h-[256px] pointer-events-auto",children:[r.jsx("div",{onPointerDown:()=>G("a",!0),onPointerUp:()=>G("a",!1),className:"absolute bottom-0 left-0 w-[80px] h-[80px] rounded-full bg-[#3d7a40]/80 border-2 border-[#6cb870] shadow-xl backdrop-blur-sm active:scale-90 transition flex flex-col items-center justify-center cursor-pointer select-none",children:r.jsx("span",{className:"text-white font-black text-sm",children:"A (Pass)"})}),r.jsxs("div",{onPointerDown:()=>G("y",!0),onPointerUp:()=>G("y",!1),className:"absolute top-[68px] left-[44px] w-[80px] h-[80px] rounded-full bg-[#3d7a40]/80 border-2 border-[#6cb870] shadow-xl backdrop-blur-sm active:scale-90 transition flex flex-col items-center justify-center cursor-pointer select-none",children:[r.jsx("span",{className:"text-white font-black text-xs",children:"Y (Through)"}),r.jsx("span",{className:"text-amber-300 text-[8px] font-extrabold",children:"(Gocek)"})]}),r.jsx("div",{onPointerDown:()=>G("x",!0),onPointerUp:()=>G("x",!1),className:"absolute top-0 right-0 w-[96px] h-[96px] rounded-full bg-[#3d7a40]/80 border-2 border-[#6cb870] shadow-2xl backdrop-blur-sm active:scale-90 transition flex flex-col items-center justify-center cursor-pointer select-none",children:r.jsx("div",{className:"w-[84px] h-[84px] rounded-full border border-white/25 flex flex-col items-center justify-center pointer-events-none",children:r.jsx("span",{className:"text-white font-black text-base",children:"X (Shoot)"})})}),r.jsx("div",{onPointerDown:()=>G("b",!0),onPointerUp:()=>G("b",!1),className:"absolute bottom-0 right-[100px] w-[80px] h-[80px] rounded-full bg-[#3d7a40]/80 border-2 border-[#6cb870] shadow-2xl backdrop-blur-sm active:scale-90 transition flex flex-col items-center justify-center cursor-pointer select-none",children:r.jsx("span",{className:"text-cyan-300 font-black text-xs",children:"B (Tackle)"})}),r.jsx("div",{onPointerDown:()=>G("rt",!0),onPointerUp:()=>G("rt",!1),className:"absolute bottom-0 right-0 w-[96px] h-[96px] rounded-full bg-[#3d7a40]/80 border-2 border-[#6cb870] shadow-2xl backdrop-blur-sm active:scale-90 transition flex flex-col items-center justify-center cursor-pointer select-none",children:r.jsx("div",{className:"w-[84px] h-[84px] rounded-full border border-white/25 flex flex-col items-center justify-center pointer-events-none",children:r.jsx("span",{className:"text-white font-black text-sm",children:"R2 (Sprint)"})})})]})})]}):r.jsx("div",{className:"fixed inset-0 bg-[#4e9a51] text-slate-100 flex flex-col items-center justify-center p-6 font-sans select-none",children:r.jsxs("div",{className:"max-w-sm w-full bg-[#1b431d]/90 border border-green-300/30 rounded-3xl p-6 shadow-2xl flex flex-col items-center gap-5 text-center backdrop-blur-md",children:[r.jsx("div",{className:"w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white text-2xl",children:"⚽"}),r.jsxs("div",{children:[r.jsx("h1",{className:"text-xl font-extrabold tracking-tight text-white",children:"Football Mobile Pad"}),r.jsx("p",{className:"text-xs text-green-100/80 mt-1",children:"Masukkan 4-Digit Room Code dari Laptop"})]}),r.jsxs("div",{className:"w-full flex flex-col gap-3",children:[r.jsx("input",{type:"text",maxLength:4,value:o,onChange:fe=>n(fe.target.value.toUpperCase()),placeholder:"ROOM CODE (misal 8492)",className:"w-full text-center tracking-widest text-2xl font-mono font-black py-3 rounded-2xl bg-black/40 border border-white/30 text-emerald-300 focus:outline-none focus:border-white"}),_&&r.jsx("p",{className:"text-xs text-red-300 font-semibold",children:_}),r.jsx("button",{onClick:()=>J(),disabled:c||o.length<4,className:"w-full py-3.5 bg-gradient-to-r from-emerald-400 to-green-300 text-slate-950 font-extrabold rounded-2xl text-sm shadow-xl disabled:opacity-50 transition cursor-pointer flex items-center justify-center gap-2",children:c?r.jsxs(r.Fragment,{children:[r.jsx(a5,{className:"w-4 h-4 animate-spin"}),r.jsx("span",{children:"Menghubungkan..."})]}):r.jsx("span",{children:"🎮 Connect Fullscreen Pad"})})]})]})})};var J5=`.styles-module__popup___IhzrD svg[fill=none] {
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
}`,eb={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let o=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");o||(o=document.createElement("style"),o.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(o)),o.textContent=J5}var sn=eb,tb=`.icon-transitions-module__iconState___uqK9J {
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
}`,nb={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let o=document.getElementById("feedback-tool-styles-components-icon-transitions");o||(o=document.createElement("style"),o.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(o)),o.textContent=tb}var Jt=nb,sb=({size:o=16})=>r.jsx("svg",{width:o,height:o,viewBox:"0 0 16 16",fill:"none",children:r.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),ob=({size:o=24,style:n={}})=>r.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",style:n,children:[r.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[r.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),r.jsx("defs",{children:r.jsx("clipPath",{id:"clip0_list_sparkle",children:r.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),ib=({size:o=20,...n})=>r.jsxs("svg",{width:o,height:o,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:[r.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),r.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),ab=({size:o=24,copied:n=!1,tint:i})=>r.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",style:i?{color:i,transition:"color 0.3s ease"}:void 0,children:[r.jsxs("g",{className:`${Jt.iconState} ${n?Jt.hiddenScaled:Jt.visibleScaled}`,children:[r.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),r.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),r.jsxs("g",{className:`${Jt.iconState} ${n?Jt.visibleScaled:Jt.hiddenScaled}`,children:[r.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),lb=({size:o=24,state:n="idle"})=>{const i=n==="idle",l=n==="sent",c=n==="failed",u=n==="sending";return r.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",children:[r.jsx("g",{className:`${Jt.iconStateFast} ${i?Jt.visibleScaled:u?Jt.sending:Jt.hiddenScaled}`,children:r.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),r.jsxs("g",{className:`${Jt.iconStateFast} ${l?Jt.visibleScaled:Jt.hiddenScaled}`,children:[r.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),r.jsxs("g",{className:`${Jt.iconStateFast} ${c?Jt.visibleScaled:Jt.hiddenScaled}`,children:[r.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),r.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},rb=({size:o=24,isOpen:n=!0})=>r.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",children:[r.jsxs("g",{className:`${Jt.iconFade} ${n?Jt.visible:Jt.hidden}`,children:[r.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),r.jsxs("g",{className:`${Jt.iconFade} ${n?Jt.hidden:Jt.visible}`,children:[r.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),r.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),cb=({size:o=24,isPaused:n=!1})=>r.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",children:[r.jsxs("g",{className:`${Jt.iconFadeFast} ${n?Jt.hidden:Jt.visible}`,children:[r.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),r.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),r.jsx("path",{className:`${Jt.iconFadeFast} ${n?Jt.visible:Jt.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),ub=({size:o=16})=>r.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",children:[r.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),db=({size:o=16})=>r.jsx("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",children:r.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),ly=({size:o=16})=>r.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",children:[r.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[r.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),r.jsx("defs",{children:r.jsx("clipPath",{id:"clip0_2_53",children:r.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),fb=({size:o=24})=>r.jsx("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",children:r.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),hb=({size:o=16})=>r.jsxs("svg",{width:o,height:o,viewBox:"0 0 20 20",fill:"none",children:[r.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),_b=({size:o=16})=>r.jsx("svg",{width:o,height:o,viewBox:"0 0 20 20",fill:"none",children:r.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),mb=({size:o=16})=>r.jsx("svg",{width:o,height:o,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),pb=({size:o=24})=>r.jsx("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),gb=({size:o=16})=>r.jsx("svg",{width:o,height:o,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),yb=({size:o=24})=>r.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",children:[r.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),r.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),r.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),ry=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],Df=ry.flatMap(o=>[`:not([${o}])`,`:not([${o}] *)`]).join(""),sh="feedback-freeze-styles",Af="__agentation_freeze";function xb(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:n=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const o=window;return o[Af]||(o[Af]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),o[Af]}var Ct=xb();typeof window<"u"&&!Ct.installed&&(Ct.origSetTimeout=window.setTimeout.bind(window),Ct.origSetInterval=window.setInterval.bind(window),Ct.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(o,n,...i)=>typeof o=="string"?Ct.origSetTimeout(o,n):Ct.origSetTimeout((...l)=>{Ct.frozen?Ct.frozenTimeoutQueue.push(()=>o(...l)):o(...l)},n,...i),window.setInterval=(o,n,...i)=>typeof o=="string"?Ct.origSetInterval(o,n):Ct.origSetInterval((...l)=>{Ct.frozen||o(...l)},n,...i),window.requestAnimationFrame=o=>Ct.origRAF(n=>{Ct.frozen?Ct.frozenRAFQueue.push(o):o(n)}),Ct.installed=!0);var tt=Ct.origSetTimeout,bb=Ct.origSetInterval,Qa=Ct.origRAF;function vb(o){return o?ry.some(n=>{var i;return!!((i=o.closest)!=null&&i.call(o,`[${n}]`))}):!1}function wb(){if(typeof document>"u"||Ct.frozen)return;Ct.frozen=!0,Ct.frozenTimeoutQueue=[],Ct.frozenRAFQueue=[];let o=document.getElementById(sh);o||(o=document.createElement("style"),o.id=sh),o.textContent=`
    *${Df},
    *${Df}::before,
    *${Df}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(o),Ct.pausedAnimations=[];try{document.getAnimations().forEach(n=>{var l;if(n.playState!=="running")return;const i=(l=n.effect)==null?void 0:l.target;vb(i)||(n.pause(),Ct.pausedAnimations.push(n))})}catch{}document.querySelectorAll("video").forEach(n=>{n.paused||(n.dataset.wasPaused="false",n.pause())})}function cp(){var i;if(typeof document>"u"||!Ct.frozen)return;Ct.frozen=!1;const o=Ct.frozenTimeoutQueue;Ct.frozenTimeoutQueue=[];for(const l of o)Ct.origSetTimeout(()=>{if(Ct.frozen){Ct.frozenTimeoutQueue.push(l);return}try{l()}catch(c){console.warn("[agentation] Error replaying queued timeout:",c)}},0);const n=Ct.frozenRAFQueue;Ct.frozenRAFQueue=[];for(const l of n)Ct.origRAF(c=>{if(Ct.frozen){Ct.frozenRAFQueue.push(l);return}l(c)});for(const l of Ct.pausedAnimations)try{l.play()}catch(c){console.warn("[agentation] Error resuming animation:",c)}Ct.pausedAnimations=[],(i=document.getElementById(sh))==null||i.remove(),document.querySelectorAll("video").forEach(l=>{l.dataset.wasPaused==="false"&&(l.play().catch(()=>{}),delete l.dataset.wasPaused)})}function Nf(o){if(!o)return;const n=i=>i.stopImmediatePropagation();document.addEventListener("focusin",n,!0),document.addEventListener("focusout",n,!0);try{o.focus()}finally{document.removeEventListener("focusin",n,!0),document.removeEventListener("focusout",n,!0)}}var _u=b.forwardRef(function({element:n,timestamp:i,selectedText:l,placeholder:c="What should change?",initialValue:u="",submitLabel:_="Add",onSubmit:g,onCancel:h,onDelete:m,style:p,accentColor:y="#3c82f7",isExiting:v=!1,lightMode:C=!1,computedStyles:k},E){const[O,B]=b.useState(u),[J,F]=b.useState(!1),[z,de]=b.useState("initial"),[ye,G]=b.useState(!1),[fe,xe]=b.useState(!1),he=b.useRef(null),re=b.useRef(null),Q=b.useRef(null),Oe=b.useRef(null);b.useEffect(()=>{v&&z!=="exit"&&de("exit")},[v,z]),b.useEffect(()=>{tt(()=>{de("enter")},0);const be=tt(()=>{de("entered")},200),Ne=tt(()=>{const D=he.current;D&&(Nf(D),D.selectionStart=D.selectionEnd=D.value.length,D.scrollTop=D.scrollHeight)},50);return()=>{clearTimeout(be),clearTimeout(Ne),Q.current&&clearTimeout(Q.current),Oe.current&&clearTimeout(Oe.current)}},[]);const oe=b.useCallback(()=>{Oe.current&&clearTimeout(Oe.current),F(!0),Oe.current=tt(()=>{F(!1),Nf(he.current)},250)},[]);b.useImperativeHandle(E,()=>({shake:oe}),[oe]);const ke=b.useCallback(()=>{de("exit"),Q.current=tt(()=>{h()},150)},[h]),N=b.useCallback(()=>{O.trim()&&g(O.trim())},[O,g]),ue=b.useCallback(be=>{be.stopPropagation(),!be.nativeEvent.isComposing&&(be.key==="Enter"&&!be.shiftKey&&(be.preventDefault(),N()),be.key==="Escape"&&ke())},[N,ke]),W=[sn.popup,C?sn.light:"",z==="enter"?sn.enter:"",z==="entered"?sn.entered:"",z==="exit"?sn.exit:"",J?sn.shake:""].filter(Boolean).join(" ");return r.jsxs("div",{ref:re,className:W,"data-annotation-popup":!0,style:p,onClick:be=>be.stopPropagation(),children:[r.jsxs("div",{className:sn.header,children:[k&&Object.keys(k).length>0?r.jsxs("button",{className:sn.headerToggle,onClick:()=>{const be=fe;xe(!fe),be&&tt(()=>Nf(he.current),0)},type:"button",children:[r.jsx("svg",{className:`${sn.chevron} ${fe?sn.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),r.jsx("span",{className:sn.element,children:n})]}):r.jsx("span",{className:sn.element,children:n}),i&&r.jsx("span",{className:sn.timestamp,children:i})]}),k&&Object.keys(k).length>0&&r.jsx("div",{className:`${sn.stylesWrapper} ${fe?sn.expanded:""}`,children:r.jsx("div",{className:sn.stylesInner,children:r.jsx("div",{className:sn.stylesBlock,children:Object.entries(k).map(([be,Ne])=>r.jsxs("div",{className:sn.styleLine,children:[r.jsx("span",{className:sn.styleProperty,children:be.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",r.jsx("span",{className:sn.styleValue,children:Ne}),";"]},be))})})}),l&&r.jsxs("div",{className:sn.quote,children:["“",l.slice(0,80),l.length>80?"...":"","”"]}),r.jsx("textarea",{ref:he,className:sn.textarea,style:{borderColor:ye?y:void 0},placeholder:c,value:O,onChange:be=>B(be.target.value),onFocus:()=>G(!0),onBlur:()=>G(!1),rows:2,onKeyDown:ue}),r.jsxs("div",{className:sn.actions,children:[m&&r.jsx("div",{className:sn.deleteWrapper,children:r.jsx("button",{className:sn.deleteButton,onClick:m,type:"button",children:r.jsx(pb,{size:22})})}),r.jsx("button",{className:sn.cancel,onClick:ke,children:"Cancel"}),r.jsx("button",{className:sn.submit,style:{backgroundColor:y,opacity:O.trim()?1:.4},onClick:N,disabled:!O.trim(),children:_})]})]})}),Sb=({content:o,children:n,...i})=>{const[l,c]=b.useState(!1),[u,_]=b.useState(!1),[g,h]=b.useState({top:0,right:0}),m=b.useRef(null),p=b.useRef(null),y=b.useRef(null),v=()=>{if(m.current){const E=m.current.getBoundingClientRect();h({top:E.top+E.height/2,right:window.innerWidth-E.left+8})}},C=()=>{_(!0),y.current&&(clearTimeout(y.current),y.current=null),v(),p.current=tt(()=>{c(!0)},500)},k=()=>{p.current&&(clearTimeout(p.current),p.current=null),c(!1),y.current=tt(()=>{_(!1)},150)};return b.useEffect(()=>()=>{p.current&&clearTimeout(p.current),y.current&&clearTimeout(y.current)},[]),r.jsxs(r.Fragment,{children:[r.jsx("span",{ref:m,onMouseEnter:C,onMouseLeave:k,...i,children:n}),u&&ng.createPortal(r.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:g.top,right:g.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:l?1:0,transition:"opacity 0.15s ease"},children:o}),document.body)]})},kb=`.styles-module__tooltip___mcXL2 {
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
}`,Cb={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let o=document.getElementById("feedback-tool-styles-help-tooltip-styles");o||(o=document.createElement("style"),o.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(o)),o.textContent=kb}var up=Cb,Zi=({content:o})=>r.jsx(Sb,{className:up.tooltip,content:o,children:r.jsx(ib,{className:up.tooltipIcon})}),Le={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},cy=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...Le.navigation},{type:"header",label:"Header",...Le.header},{type:"hero",label:"Hero",...Le.hero},{type:"section",label:"Section",...Le.section},{type:"sidebar",label:"Sidebar",...Le.sidebar},{type:"footer",label:"Footer",...Le.footer},{type:"modal",label:"Modal",...Le.modal},{type:"banner",label:"Banner",...Le.banner},{type:"drawer",label:"Drawer",...Le.drawer},{type:"popover",label:"Popover",...Le.popover},{type:"divider",label:"Divider",...Le.divider}]},{section:"Content",items:[{type:"card",label:"Card",...Le.card},{type:"text",label:"Text",...Le.text},{type:"image",label:"Image",...Le.image},{type:"video",label:"Video",...Le.video},{type:"table",label:"Table",...Le.table},{type:"grid",label:"Grid",...Le.grid},{type:"list",label:"List",...Le.list},{type:"chart",label:"Chart",...Le.chart},{type:"codeBlock",label:"Code Block",...Le.codeBlock},{type:"map",label:"Map",...Le.map},{type:"timeline",label:"Timeline",...Le.timeline},{type:"calendar",label:"Calendar",...Le.calendar},{type:"accordion",label:"Accordion",...Le.accordion},{type:"carousel",label:"Carousel",...Le.carousel},{type:"logo",label:"Logo",...Le.logo},{type:"faq",label:"FAQ",...Le.faq},{type:"gallery",label:"Gallery",...Le.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...Le.button},{type:"input",label:"Input",...Le.input},{type:"search",label:"Search",...Le.search},{type:"form",label:"Form",...Le.form},{type:"tabs",label:"Tabs",...Le.tabs},{type:"dropdown",label:"Dropdown",...Le.dropdown},{type:"toggle",label:"Toggle",...Le.toggle},{type:"stepper",label:"Stepper",...Le.stepper},{type:"rating",label:"Rating",...Le.rating},{type:"fileUpload",label:"File Upload",...Le.fileUpload},{type:"checkbox",label:"Checkbox",...Le.checkbox},{type:"radio",label:"Radio",...Le.radio},{type:"slider",label:"Slider",...Le.slider},{type:"datePicker",label:"Date Picker",...Le.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...Le.avatar},{type:"badge",label:"Badge",...Le.badge},{type:"tag",label:"Tag",...Le.tag},{type:"breadcrumb",label:"Breadcrumb",...Le.breadcrumb},{type:"pagination",label:"Pagination",...Le.pagination},{type:"progress",label:"Progress",...Le.progress},{type:"alert",label:"Alert",...Le.alert},{type:"toast",label:"Toast",...Le.toast},{type:"notification",label:"Notification",...Le.notification},{type:"tooltip",label:"Tooltip",...Le.tooltip},{type:"stat",label:"Stat",...Le.stat},{type:"skeleton",label:"Skeleton",...Le.skeleton},{type:"chip",label:"Chip",...Le.chip},{type:"icon",label:"Icon",...Le.icon},{type:"spinner",label:"Spinner",...Le.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...Le.pricing},{type:"testimonial",label:"Testimonial",...Le.testimonial},{type:"cta",label:"CTA",...Le.cta},{type:"productCard",label:"Product Card",...Le.productCard},{type:"profile",label:"Profile",...Le.profile},{type:"feature",label:"Feature",...Le.feature},{type:"team",label:"Team",...Le.team},{type:"login",label:"Login",...Le.login},{type:"contact",label:"Contact",...Le.contact}]}],no={};for(const o of cy)for(const n of o.items)no[n.type]=n;function le({w:o,h:n=3,strong:i}){return r.jsx("div",{style:{width:typeof o=="number"?`${o}px`:o,height:n,borderRadius:2,background:i?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function Gt({w:o,h:n,radius:i=3,style:l}){return r.jsx("div",{style:{width:typeof o=="number"?`${o}px`:o,height:typeof n=="number"?`${n}px`:n,borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...l}})}function ds({size:o}){return r.jsx("div",{style:{width:o,height:o,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function jb({width:o,height:n}){const i=Math.max(8,n*.2);return r.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${i}px`,gap:o*.02},children:[r.jsx(Gt,{w:Math.max(20,n*.5),h:Math.max(12,n*.4),radius:2}),r.jsxs("div",{style:{flex:1,display:"flex",gap:o*.03,marginLeft:o*.04},children:[r.jsx(le,{w:o*.06}),r.jsx(le,{w:o*.07}),r.jsx(le,{w:o*.05}),r.jsx(le,{w:o*.06})]}),r.jsx(Gt,{w:o*.1,h:Math.min(28,n*.5),radius:4})]})}function Mb({width:o,height:n,text:i}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.05},children:[i?r.jsx("span",{style:{fontSize:Math.min(20,n*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:i}):r.jsx(le,{w:o*.5,h:Math.max(6,n*.04),strong:!0}),r.jsx(le,{w:o*.6}),r.jsx(le,{w:o*.4}),r.jsx(Gt,{w:Math.min(140,o*.2),h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.06}})]})}function Eb({width:o,height:n}){const i=Math.max(3,Math.floor(n/36));return r.jsxs("div",{style:{padding:o*.08,display:"flex",flexDirection:"column",gap:n*.03},children:[r.jsx(le,{w:o*.6,h:4,strong:!0}),Array.from({length:i},(l,c)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx(Gt,{w:10,h:10,radius:2}),r.jsx(le,{w:o*(.4+c*17%30/100)})]},c))]})}function Tb({width:o,height:n}){const i=Math.max(2,Math.min(4,Math.floor(o/160)));return r.jsx("div",{style:{display:"flex",padding:`${n*.12}px ${o*.03}px`,gap:o*.05},children:Array.from({length:i},(l,c)=>r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[r.jsx(le,{w:"60%",h:3,strong:!0}),r.jsx(le,{w:"80%",h:2}),r.jsx(le,{w:"70%",h:2}),r.jsx(le,{w:"60%",h:2})]},c))})}function Rb({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[r.jsx(le,{w:o*.3,h:4,strong:!0}),r.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),r.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[r.jsx(le,{w:"90%"}),r.jsx(le,{w:"70%"}),r.jsx(le,{w:"80%"})]}),r.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[r.jsx(Gt,{w:70,h:26,radius:4}),r.jsx(Gt,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function Db({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),r.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[r.jsx(le,{w:"70%",h:4,strong:!0}),r.jsx(le,{w:"95%",h:2}),r.jsx(le,{w:"85%",h:2}),r.jsx(le,{w:"50%",h:2})]})]})}function Ab({width:o,height:n,text:i}){if(i)return r.jsx("div",{style:{padding:4,fontSize:Math.min(14,n*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:i});const l=Math.max(2,Math.floor(n/18));return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[r.jsx(le,{w:o*.6,h:5,strong:!0}),Array.from({length:l},(c,u)=>r.jsx(le,{w:`${70+u*13%25}%`,h:2},u))]})}function Nb({width:o,height:n}){return r.jsx("div",{style:{height:"100%",position:"relative"},children:r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${o} ${n}`,preserveAspectRatio:"none",fill:"none",children:[r.jsx("line",{x1:"0",y1:"0",x2:o,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),r.jsx("line",{x1:o,y1:"0",x2:"0",y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),r.jsx("circle",{cx:o*.3,cy:n*.3,r:Math.min(o,n)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function Lb({width:o,height:n}){const i=Math.max(2,Math.min(5,Math.floor(o/100))),l=Math.max(2,Math.min(6,Math.floor(n/32)));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:i},(c,u)=>r.jsx("div",{style:{flex:1,padding:"0 8px"},children:r.jsx(le,{w:"70%",h:3,strong:!0})},u))}),Array.from({length:l},(c,u)=>r.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:i},(_,g)=>r.jsx("div",{style:{flex:1,padding:"0 8px"},children:r.jsx(le,{w:`${50+(u*7+g*13)%40}%`,h:2})},g))},u))]})}function Ob({width:o,height:n}){const i=Math.max(2,Math.floor(n/28));return r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:i},(l,c)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[r.jsx(ds,{size:8}),r.jsx(le,{w:`${55+c*17%35}%`,h:2})]},c))})}function zb({width:o,height:n,text:i}){return r.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,n/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:i?r.jsx("span",{style:{fontSize:Math.min(13,n*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:i}):r.jsx(le,{w:Math.max(20,o*.5),h:3,strong:!0})})}function Bb({width:o,height:n}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[r.jsx(le,{w:Math.min(80,o*.3),h:2}),r.jsx("div",{style:{height:Math.min(36,n*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:r.jsx(le,{w:"40%",h:2})})]})}function $b({width:o,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:n*.04,padding:8},children:[Array.from({length:i},(l,c)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[r.jsx(le,{w:60+c*17%30,h:2}),r.jsx(Gt,{w:"100%",h:28,radius:4})]},c)),r.jsx(Gt,{w:Math.min(120,o*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function Pb({width:o,height:n}){const i=Math.max(2,Math.min(4,Math.floor(o/120)));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(l,c)=>r.jsx("div",{style:{padding:"8px 12px",borderBottom:c===0?"2px solid var(--agd-bar-strong)":"none"},children:r.jsx(le,{w:60,h:3,strong:c===0})},c))}),r.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[r.jsx(le,{w:"80%",h:2}),r.jsx(le,{w:"65%",h:2}),r.jsx(le,{w:"75%",h:2})]})]})}function Ib({width:o,height:n}){const i=Math.min(o,n)/2;return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${o} ${n}`,fill:"none",children:[r.jsx("circle",{cx:o/2,cy:n/2,r:i-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),r.jsx("circle",{cx:o/2,cy:n*.38,r:i*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),r.jsx("path",{d:`M${o/2-i*.55} ${n*.78} C${o/2-i*.55} ${n*.55} ${o/2+i*.55} ${n*.55} ${o/2+i*.55} ${n*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function Ub({width:o,height:n}){return r.jsx("div",{style:{height:"100%",borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(le,{w:Math.max(16,o*.5),h:2,strong:!0})})}function Hb({width:o,height:n}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[r.jsx(le,{w:o*.5,h:Math.max(5,n*.06),strong:!0}),r.jsx(le,{w:o*.35})]})}function Yb({width:o,height:n}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:n*.04,padding:o*.04},children:[r.jsx(le,{w:o*.3,h:4,strong:!0}),r.jsx(le,{w:o*.7}),r.jsx(le,{w:o*.5}),r.jsxs("div",{style:{flex:1,display:"flex",gap:o*.03,marginTop:n*.06},children:[r.jsx(Gt,{w:"33%",h:"100%",radius:4}),r.jsx(Gt,{w:"33%",h:"100%",radius:4}),r.jsx(Gt,{w:"33%",h:"100%",radius:4})]})]})}function Xb({width:o,height:n}){const i=Math.max(2,Math.min(4,Math.floor(o/140))),l=Math.max(1,Math.min(3,Math.floor(n/120)));return r.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${l}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:i*l},(c,u)=>r.jsx(Gt,{w:"100%",h:"100%",radius:4},u))})}function Fb({width:o,height:n}){const i=Math.max(2,Math.floor((n-32)/28));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:r.jsx(le,{w:o*.5,h:3,strong:!0})}),r.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:i},(l,c)=>r.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:c===0?"var(--agd-fill)":"transparent"},children:r.jsx(le,{w:`${50+c*17%35}%`,h:2,strong:c===0})},c))})]})}function Gb({width:o,height:n}){const i=Math.min(o,n)/2;return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${o} ${n}`,fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:o-2,height:n-2,rx:i,stroke:"var(--agd-stroke)",strokeWidth:"1"}),r.jsx("circle",{cx:o-i,cy:n/2,r:i*.7,fill:"var(--agd-bar)"})]})}function Wb({width:o,height:n}){const i=Math.min(n/2,20);return r.jsxs("div",{style:{height:"100%",borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${i*.6}px`,gap:6},children:[r.jsx(ds,{size:Math.min(14,n*.4)}),r.jsx(le,{w:"50%",h:2})]})}function qb({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[r.jsx(ds,{size:Math.min(20,n*.5)}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx(le,{w:"60%",h:3,strong:!0}),r.jsx(le,{w:"80%",h:2})]}),r.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function Qb({width:o,height:n}){return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${o} ${n}`,fill:"none",children:[r.jsx("rect",{x:"0",y:"0",width:o,height:n,rx:n/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),r.jsx("rect",{x:"1",y:"1",width:o*.65,height:n-2,rx:(n-2)/2,fill:"var(--agd-bar)"})]})}function Vb({width:o,height:n}){const i=Math.max(3,Math.min(7,Math.floor(o/50))),l=o/(i*2);return r.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(c,u)=>{const _=30+(u*37+17)%55;return r.jsx(Gt,{w:l,h:`${_}%`,radius:2},u)})})}function Kb({width:o,height:n}){const i=Math.min(o,n)*.12;return r.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[r.jsx(Gt,{w:"100%",h:"100%",radius:4}),r.jsx("div",{style:{position:"absolute",width:i*2,height:i*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("div",{style:{width:0,height:0,borderLeft:`${i*.6}px solid var(--agd-bar-strong)`,borderTop:`${i*.4}px solid transparent`,borderBottom:`${i*.4}px solid transparent`,marginLeft:i*.15}})})]})}function Zb({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[r.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(le,{w:"60%",h:2})}),r.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function Jb({width:o,height:n}){const i=Math.max(2,Math.min(4,Math.floor(o/80)));return r.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:i},(l,c)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[c>0&&r.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),r.jsx(le,{w:40+c*13%20,h:2,strong:c===i-1})]},c))})}function ev({width:o,height:n}){const i=Math.max(3,Math.min(5,Math.floor(o/40))),l=Math.min(28,n*.8);return r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:i},(c,u)=>r.jsx(Gt,{w:l,h:l,radius:4,style:u===1?{background:"var(--agd-bar)"}:void 0},u))})}function tv({width:o}){return r.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:r.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function nv({width:o,height:n}){const i=Math.max(2,Math.min(4,Math.floor(n/40)));return r.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(l,c)=>r.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[r.jsx(le,{w:`${40+c*17%25}%`,h:3,strong:!0}),r.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function sv({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[r.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[r.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),r.jsx(Gt,{w:"100%",h:"100%",radius:4}),r.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[r.jsx(ds,{size:5}),r.jsx(ds,{size:5}),r.jsx(ds,{size:5})]})]})}function ov({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:n*.04},children:[r.jsx(le,{w:o*.4,h:3,strong:!0}),r.jsx(le,{w:o*.3,h:6,strong:!0}),r.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(i,l)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[r.jsx(ds,{size:5}),r.jsx(le,{w:`${50+l*17%35}%`,h:2})]},l))}),r.jsx(Gt,{w:o*.7,h:Math.min(32,n*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function iv({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[r.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[r.jsx(le,{w:"90%",h:2}),r.jsx(le,{w:"75%",h:2}),r.jsx(le,{w:"60%",h:2})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx(ds,{size:20}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[r.jsx(le,{w:60,h:3,strong:!0}),r.jsx(le,{w:40,h:2})]})]})]})}function av({width:o,height:n}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[r.jsx(le,{w:o*.5,h:Math.max(4,n*.05),strong:!0}),r.jsx(le,{w:o*.35}),r.jsx(Gt,{w:Math.min(140,o*.25),h:Math.min(32,n*.15),radius:6,style:{marginTop:n*.04,background:"var(--agd-bar)"}})]})}function lv({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[r.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:r.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx(le,{w:"40%",h:3,strong:!0}),r.jsx(le,{w:"70%",h:2})]})]})}function rv({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[r.jsx(le,{w:o*.4,h:3,strong:!0}),r.jsx(Gt,{w:60,h:Math.min(24,n*.6),radius:4})]})}function cv({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[r.jsx(le,{w:o*.5,h:2}),r.jsx(le,{w:o*.4,h:Math.max(8,n*.18),strong:!0}),r.jsx(le,{w:o*.3,h:2})]})}function uv({width:o,height:n}){const i=Math.max(3,Math.min(5,Math.floor(o/100))),l=Math.min(12,n*.35);return r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:i},(c,u)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[r.jsx("div",{style:{width:l,height:l,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:u===0?"var(--agd-bar)":"transparent",flexShrink:0}}),u<i-1&&r.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},u))})}function dv({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[r.jsx(le,{w:Math.max(16,o*.5),h:2,strong:!0}),r.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function fv({width:o,height:n}){const l=Math.min(n*.7,o/7.5);return r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:l*.2},children:Array.from({length:5},(c,u)=>r.jsx("svg",{width:l,height:l,viewBox:"0 0 16 16",fill:"none",children:r.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:u<3?"var(--agd-bar)":"none"})},u))})}function hv({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${o} ${n}`,fill:"none",style:{position:"absolute",inset:0},children:[r.jsx("line",{x1:0,y1:n*.3,x2:o,y2:n*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),r.jsx("line",{x1:0,y1:n*.6,x2:o,y2:n*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),r.jsx("line",{x1:o*.4,y1:0,x2:o*.6,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),r.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:r.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[r.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),r.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function _v({width:o,height:n}){const i=Math.max(3,Math.min(5,Math.floor(n/60)));return r.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[r.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:i},(l,c)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[r.jsx(ds,{size:8}),c<i-1&&r.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},c))}),r.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:i},(l,c)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[r.jsx(le,{w:`${35+c*13%25}%`,h:3,strong:!0}),r.jsx(le,{w:`${50+c*17%30}%`,h:2})]},c))})]})}function mv({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[r.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[r.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),r.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),r.jsx(le,{w:o*.4,h:2}),r.jsx(le,{w:o*.25,h:2})]})}function pv({width:o,height:n}){const i=Math.max(3,Math.min(8,Math.floor(n/20)));return r.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[r.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[r.jsx(ds,{size:6}),r.jsx(ds,{size:6}),r.jsx(ds,{size:6})]}),Array.from({length:i},(l,c)=>r.jsx("div",{style:{display:"flex",gap:6,paddingLeft:c>0&&c<i-1?12:0},children:r.jsx(le,{w:`${25+c*23%50}%`,h:2,strong:c===0})},c))]})}function gv({width:o,height:n}){const c=Math.min((o-16)/7,(n-40)/6);return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[r.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),r.jsx(le,{w:o*.3,h:3,strong:!0}),r.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(u,_)=>r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c*.6},children:r.jsx(le,{w:c*.5,h:2})},`h${_}`)),Array.from({length:35},(u,_)=>r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c},children:r.jsx("div",{style:{width:c*.6,height:c*.6,borderRadius:"50%",background:_===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:_===12?1:.3}})})},_))]})]})}function yv({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[r.jsx(ds,{size:Math.min(32,n*.55)}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx(le,{w:"50%",h:3,strong:!0}),r.jsx(le,{w:"75%",h:2})]}),r.jsx(le,{w:30,h:2})]})}function xv({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),r.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[r.jsx(le,{w:"65%",h:4,strong:!0}),r.jsx(le,{w:"40%",h:3}),r.jsx("div",{style:{flex:1}}),r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[r.jsx(le,{w:"30%",h:5,strong:!0}),r.jsx(Gt,{w:Math.min(70,o*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function bv({width:o,height:n}){const i=Math.min(48,n*.3);return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[r.jsx(ds,{size:i}),r.jsx(le,{w:o*.45,h:4,strong:!0}),r.jsx(le,{w:o*.3,h:2}),r.jsxs("div",{style:{display:"flex",gap:o*.08,marginTop:n*.04},children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[r.jsx(le,{w:20,h:3,strong:!0}),r.jsx(le,{w:28,h:2})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[r.jsx(le,{w:20,h:3,strong:!0}),r.jsx(le,{w:28,h:2})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[r.jsx(le,{w:20,h:3,strong:!0}),r.jsx(le,{w:28,h:2})]})]})]})}function vv({width:o,height:n}){const i=Math.max(o*.6,80),l=Math.max(3,Math.floor(n/40));return r.jsxs("div",{style:{height:"100%",display:"flex"},children:[r.jsx("div",{style:{width:o-i,background:"var(--agd-fill)",opacity:.3}}),r.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:o*.04},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:n*.06},children:[r.jsx(le,{w:i*.4,h:4,strong:!0}),r.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:l},(c,u)=>r.jsx("div",{style:{padding:"6px 0"},children:r.jsx(le,{w:`${50+u*17%35}%`,h:2,strong:u===0})},u))]})]})}function wv({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[r.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[r.jsx(le,{w:"70%",h:3,strong:!0}),r.jsx(le,{w:"90%",h:2}),r.jsx(le,{w:"60%",h:2})]}),r.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function Sv({width:o,height:n}){const i=Math.min(n*.7,o*.3);return r.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:o*.08},children:[r.jsx(Gt,{w:i,h:i,radius:i*.25}),r.jsx(le,{w:o*.45,h:Math.max(4,n*.2),strong:!0})]})}function kv({width:o,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return r.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(l,c)=>r.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),r.jsx(le,{w:o*(.3+c*13%25/100),h:3,strong:!0})]}),r.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function Cv({width:o,height:n}){const i=Math.max(2,Math.min(4,Math.floor(o/120))),l=Math.max(1,Math.min(3,Math.floor(n/120)));return r.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${l}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:i*l},(c,u)=>r.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:r.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[r.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),r.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},u))})}function jv({width:o,height:n}){const i=Math.min(o,n);return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${o} ${n}`,fill:"none",children:[r.jsx("rect",{x:"1",y:(n-i+2)/2,width:i-2,height:i-2,rx:i*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),r.jsx("path",{d:`M${i*.25} ${n/2}l${i*.2} ${i*.2} ${i*.3}-${i*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function Mv({width:o,height:n}){const i=Math.min(o,n)/2-1;return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${o} ${n}`,fill:"none",children:[r.jsx("circle",{cx:o/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),r.jsx("circle",{cx:o/2,cy:n/2,r:i*.45,fill:"var(--agd-bar)"})]})}function Ev({width:o,height:n}){const i=Math.max(2,n*.12),l=Math.min(n*.35,10),c=o*.55;return r.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[r.jsx("div",{style:{width:"100%",height:i,borderRadius:i/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:r.jsx("div",{style:{width:c,height:"100%",borderRadius:i/2,background:"var(--agd-bar)"}})}),r.jsx("div",{style:{position:"absolute",left:c-l,width:l*2,height:l*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function Tv({width:o,height:n}){const i=Math.min(36,n*.15),l=7,c=4,u=Math.min((o-16)/l,(n-i-40)/(c+1));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[r.jsxs("div",{style:{height:i,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[r.jsx(le,{w:"40%",h:2}),r.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[r.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),r.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),r.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[r.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),r.jsx(le,{w:o*.25,h:2,strong:!0}),r.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${l}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:l*c},(_,g)=>r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:u},children:r.jsx("div",{style:{width:u*.5,height:u*.5,borderRadius:"50%",background:g===10?"var(--agd-bar)":"transparent"},children:r.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:g===10?1:.25}})})})},g))})]})]})}function Rv({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:n*.08,padding:4},children:[r.jsx("div",{style:{width:"100%",height:n*.2,borderRadius:4,background:"var(--agd-fill)"}}),r.jsx("div",{style:{width:"70%",height:Math.max(6,n*.1),borderRadius:3,background:"var(--agd-fill)"}}),r.jsx("div",{style:{width:"90%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}}),r.jsx("div",{style:{width:"50%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function Dv({width:o,height:n}){return r.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:r.jsxs("div",{style:{height:"100%",flex:1,borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.3}px`,gap:4},children:[r.jsx(le,{w:"60%",h:2,strong:!0}),r.jsx("div",{style:{width:Math.max(6,n*.3),height:Math.max(6,n*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function Av({width:o,height:n}){const i=Math.min(o,n);return r.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${o} ${n}`,fill:"none",children:r.jsx("path",{d:`M${o/2} ${(n-i)/2+i*.1}l${i*.12} ${i*.25} ${i*.28} ${i*.04}-${i*.2} ${i*.2} ${i*.05} ${i*.28}-${i*.25}-${i*.12}-${i*.25} ${i*.12} ${i*.05}-${i*.28}-${i*.2}-${i*.2} ${i*.28}-${i*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function Nv({width:o,height:n}){const i=Math.min(o,n)/2-2;return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${o} ${n}`,fill:"none",children:[r.jsx("circle",{cx:o/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),r.jsx("path",{d:`M${o/2} ${n/2-i}a${i} ${i} 0 0 1 ${i} ${i}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function Lv({width:o,height:n}){const i=Math.min(36,n*.25,o*.12),l=Math.max(1,Math.min(3,Math.floor(n/80)));return r.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:l},(c,u)=>r.jsxs("div",{style:{display:"flex",gap:o*.04,alignItems:"flex-start"},children:[r.jsx(Gt,{w:i,h:i,radius:i*.25}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[r.jsx(le,{w:`${40+u*13%20}%`,h:3,strong:!0}),r.jsx(le,{w:`${60+u*17%25}%`,h:2})]})]},u))})}function Ov({width:o,height:n}){const i=Math.max(2,Math.min(4,Math.floor(o/120))),l=Math.min(36,n*.25);return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:n*.06,padding:n*.06},children:[r.jsx(le,{w:o*.3,h:4,strong:!0}),r.jsx("div",{style:{display:"flex",gap:o*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:i},(c,u)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[r.jsx(ds,{size:l}),r.jsx(le,{w:o*.12,h:3,strong:!0}),r.jsx(le,{w:o*.08,h:2})]},u))})]})}function zv({width:o,height:n}){const i=Math.max(2,Math.min(3,Math.floor(n/80)));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:o*.06,gap:n*.04},children:[r.jsx(le,{w:o*.5,h:Math.max(5,n*.04),strong:!0}),r.jsx(le,{w:o*.35,h:2}),r.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:n*.03,marginTop:n*.04},children:Array.from({length:i},(l,c)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[r.jsx(le,{w:Math.min(60,o*.2),h:2}),r.jsx(Gt,{w:"100%",h:Math.min(32,n*.1),radius:4})]},c))}),r.jsx(Gt,{w:"100%",h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.03,background:"var(--agd-bar)"}}),r.jsx(le,{w:o*.4,h:2})]})}function Bv({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:o*.04,gap:n*.03},children:[r.jsx(le,{w:o*.4,h:4,strong:!0}),r.jsx(le,{w:o*.6,h:2}),r.jsxs("div",{style:{display:"flex",gap:6,marginTop:n*.03},children:[r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx(le,{w:50,h:2}),r.jsx(Gt,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx(le,{w:40,h:2}),r.jsx(Gt,{w:"100%",h:Math.min(28,n*.1),radius:4})]})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[r.jsx(le,{w:50,h:2}),r.jsx(Gt,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[r.jsx(le,{w:60,h:2}),r.jsx(Gt,{w:"100%",h:"100%",radius:4})]}),r.jsx(Gt,{w:Math.min(120,o*.3),h:Math.min(30,n*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var $v={navigation:jb,hero:Mb,sidebar:Eb,footer:Tb,modal:Rb,card:Db,text:Ab,image:Nb,table:Lb,list:Ob,button:zb,input:Bb,form:$b,tabs:Pb,avatar:Ib,badge:Ub,header:Hb,section:Yb,grid:Xb,dropdown:Fb,toggle:Gb,search:Wb,toast:qb,progress:Qb,chart:Vb,video:Kb,tooltip:Zb,breadcrumb:Jb,pagination:ev,divider:tv,accordion:nv,carousel:sv,pricing:ov,testimonial:iv,cta:av,alert:lv,banner:rv,stat:cv,stepper:uv,tag:dv,rating:fv,map:hv,timeline:_v,fileUpload:mv,codeBlock:pv,calendar:gv,notification:yv,productCard:xv,profile:bv,drawer:vv,popover:wv,logo:Sv,faq:kv,gallery:Cv,checkbox:jv,radio:Mv,slider:Ev,datePicker:Tv,skeleton:Rv,chip:Dv,icon:Av,spinner:Nv,feature:Lv,team:Ov,login:zv,contact:Bv};function Pv({type:o,width:n,height:i,text:l}){const c=$v[o];return c?r.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:r.jsx(c,{width:n,height:i,text:l})}):r.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:o})})}var Iv=`svg[fill=none] {
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
}`,Uv={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let o=document.getElementById("feedback-tool-styles-design-mode-styles");o||(o=document.createElement("style"),o.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(o)),o.textContent=Iv}var ne=Uv,Fa=24,Yc=5;function dp(o,n,i,l,c){let u=1/0,_=1/0;const g=o.x,h=o.x+o.width,m=o.x+o.width/2,p=o.y,y=o.y+o.height,v=o.y+o.height/2,C=!l,k=C?[g,h,m]:[...l.left?[g]:[],...l.right?[h]:[]],E=C?[p,y,v]:[...l.top?[p]:[],...l.bottom?[y]:[]],O=[];for(const re of n)i.has(re.id)||O.push(re);c&&O.push(...c);for(const re of O){const Q=re.x,Oe=re.x+re.width,oe=re.x+re.width/2,ke=re.y,N=re.y+re.height,ue=re.y+re.height/2;for(const W of k)for(const be of[Q,Oe,oe]){const Ne=be-W;Math.abs(Ne)<Yc&&Math.abs(Ne)<Math.abs(u)&&(u=Ne)}for(const W of E)for(const be of[ke,N,ue]){const Ne=be-W;Math.abs(Ne)<Yc&&Math.abs(Ne)<Math.abs(_)&&(_=Ne)}}const B=Math.abs(u)<Yc?u:0,J=Math.abs(_)<Yc?_:0,F=[],z=new Set,de=g+B,ye=h+B,G=m+B,fe=p+J,xe=y+J,he=v+J;for(const re of O){const Q=re.x,Oe=re.x+re.width,oe=re.x+re.width/2,ke=re.y,N=re.y+re.height,ue=re.y+re.height/2;for(const W of[Q,oe,Oe])for(const be of[de,G,ye])if(Math.abs(be-W)<.5){const Ne=`x:${Math.round(W)}`;z.has(Ne)||(z.add(Ne),F.push({axis:"x",pos:W}))}for(const W of[ke,ue,N])for(const be of[fe,he,xe])if(Math.abs(be-W)<.5){const Ne=`y:${Math.round(W)}`;z.has(Ne)||(z.add(Ne),F.push({axis:"y",pos:W}))}}return{dx:B,dy:J,guides:F}}function fp(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function Hv({placements:o,onChange:n,activeComponent:i,onActiveComponentChange:l,isDarkMode:c,exiting:u,onInteractionChange:_,className:g,passthrough:h,extraSnapRects:m,onSelectionChange:p,deselectSignal:y,onDragMove:v,onDragEnd:C,clearSignal:k,wireframe:E}){const[O,B]=b.useState(new Set),[J,F]=b.useState(null),[z,de]=b.useState(null),[ye,G]=b.useState(null),[fe,xe]=b.useState([]),[he,re]=b.useState(null),[Q,Oe]=b.useState(!1),oe=b.useRef(!1),[ke,N]=b.useState(new Set),ue=b.useRef(new Map),W=b.useRef(null),be=b.useRef(null),Ne=b.useRef(o);Ne.current=o;const D=b.useRef(p);D.current=p;const Z=b.useRef(v);Z.current=v;const pe=b.useRef(C);pe.current=C;const Me=b.useRef(y);b.useEffect(()=>{y!==Me.current&&(Me.current=y,B(new Set))},[y]);const qe=b.useRef(k);b.useEffect(()=>{if(k!==void 0&&k!==qe.current){qe.current=k;const V=new Set(Ne.current.map(Te=>Te.id));V.size>0&&(N(V),B(new Set),be.current=null,tt(()=>{n([]),N(new Set)},180))}},[k,n]),b.useEffect(()=>{const V=Te=>{const Ge=Te.target;if(!(Ge.tagName==="INPUT"||Ge.tagName==="TEXTAREA"||Ge.isContentEditable)){if((Te.key==="Backspace"||Te.key==="Delete")&&O.size>0){Te.preventDefault();const nt=new Set(O);N(nt),B(new Set),tt(()=>{n(Ne.current.filter(Ye=>!nt.has(Ye.id))),N(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(Te.key)&&O.size>0){Te.preventDefault();const nt=Te.shiftKey?20:1,Ye=Te.key==="ArrowLeft"?-nt:Te.key==="ArrowRight"?nt:0,Re=Te.key==="ArrowUp"?-nt:Te.key==="ArrowDown"?nt:0;n(o.map(ut=>O.has(ut.id)?{...ut,x:Math.max(0,ut.x+Ye),y:Math.max(0,ut.y+Re)}:ut));return}if(Te.key==="Escape"){i?l(null):O.size>0&&B(new Set);return}}};return document.addEventListener("keydown",V),()=>document.removeEventListener("keydown",V)},[O,i,o,n,l]);const rt=b.useCallback(V=>{if(V.button!==0||h||V.target.closest(`.${ne.placement}`))return;V.preventDefault(),V.stopPropagation();const Ge=window.scrollY,Ve=V.clientX,nt=V.clientY;if(i){be.current="place",_==null||_(!0);let Ye=!1,Re=Ve,ut=nt;const St=Pe=>{Re=Pe.clientX,ut=Pe.clientY;const I=Math.abs(Re-Ve),Y=Math.abs(ut-nt);if((I>5||Y>5)&&(Ye=!0),Ye){const ie=Math.min(Ve,Re),ce=Math.min(nt,ut),ze=Math.abs(Re-Ve),Ce=Math.abs(ut-nt);F({x:ie,y:ce,w:ze,h:Ce}),G({x:Pe.clientX+12,y:Pe.clientY+12,text:`${Math.round(ze)} × ${Math.round(Ce)}`})}},Ht=Pe=>{window.removeEventListener("mousemove",St),window.removeEventListener("mouseup",Ht),F(null),G(null),be.current=null,_==null||_(!1);const I=Le[i];let Y,ie,ce,ze;Ye?(Y=Math.min(Ve,Re),ie=Math.min(nt,ut)+Ge,ce=Math.max(Fa,Math.abs(Re-Ve)),ze=Math.max(Fa,Math.abs(ut-nt))):(ce=I.width,ze=I.height,Y=Ve-ce/2,ie=nt+Ge-ze/2),Y=Math.max(0,Y),ie=Math.max(0,ie);const Ce={id:fp(),type:i,x:Y,y:ie,width:ce,height:ze,scrollY:Ge,timestamp:Date.now()},me=[...o,Ce];n(me),B(new Set([Ce.id])),l(null)};window.addEventListener("mousemove",St),window.addEventListener("mouseup",Ht)}else{V.shiftKey||B(new Set),be.current="select";let Ye=!1;const Re=St=>{const Ht=Math.abs(St.clientX-Ve),Pe=Math.abs(St.clientY-nt);if((Ht>4||Pe>4)&&(Ye=!0),Ye){const I=Math.min(Ve,St.clientX),Y=Math.min(nt,St.clientY);de({x:I,y:Y,w:Math.abs(St.clientX-Ve),h:Math.abs(St.clientY-nt)})}},ut=St=>{if(window.removeEventListener("mousemove",Re),window.removeEventListener("mouseup",ut),be.current=null,Ye){const Ht=Math.min(Ve,St.clientX),Pe=Math.min(nt,St.clientY)+Ge,I=Math.abs(St.clientX-Ve),Y=Math.abs(St.clientY-nt),ie=new Set(V.shiftKey?O:new Set);for(const ce of o)ce.y-Ge,ce.x+ce.width>Ht&&ce.x<Ht+I&&ce.y+ce.height>Pe&&ce.y<Pe+Y&&ie.add(ce.id);B(ie)}de(null)};window.addEventListener("mousemove",Re),window.addEventListener("mouseup",ut)}},[i,h,o,n,O]),dt=b.useCallback((V,Te)=>{var Ce;if(V.button!==0)return;const Ge=V.target;if(Ge.closest(`.${ne.handle}`)||Ge.closest(`.${ne.deleteButton}`))return;V.preventDefault(),V.stopPropagation();let Ve;V.shiftKey?(Ve=new Set(O),Ve.has(Te)?Ve.delete(Te):Ve.add(Te)):O.has(Te)?Ve=new Set(O):Ve=new Set([Te]),B(Ve),(Ve.size!==O.size||[...Ve].some(me=>!O.has(me)))&&((Ce=D.current)==null||Ce.call(D,Ve,V.shiftKey));const Ye=V.clientX,Re=V.clientY,ut=new Map;for(const me of o)Ve.has(me.id)&&ut.set(me.id,{x:me.x,y:me.y});be.current="move",_==null||_(!0);let St=!1,Ht=!1,Pe=o,I=0,Y=0;const ie=new Map;for(const me of o)ut.has(me.id)&&ie.set(me.id,{w:me.width,h:me.height});const ce=me=>{var fn;const it=me.clientX-Ye,ht=me.clientY-Re;if((Math.abs(it)>2||Math.abs(ht)>2)&&(St=!0),!St)return;if(me.altKey&&!Ht){Ht=!0;const Fe=[];for(const Ot of o)ut.has(Ot.id)&&Fe.push({...Ot,id:fp(),timestamp:Date.now()});Pe=[...o,...Fe]}let jt=1/0,st=1/0,Ae=-1/0,wt=-1/0;for(const[Fe,Ot]of ut){const vn=ie.get(Fe);vn&&(jt=Math.min(jt,Ot.x+it),st=Math.min(st,Ot.y+ht),Ae=Math.max(Ae,Ot.x+it+vn.w),wt=Math.max(wt,Ot.y+ht+vn.h))}const Mt={x:jt,y:st,width:Ae-jt,height:wt-st},{dx:Wt,dy:De,guides:yt}=dp(Mt,Pe,new Set(ut.keys()),void 0,m);xe(yt);const xt=it+Wt,_t=ht+De;I=xt,Y=_t,n(Pe.map(Fe=>{const Ot=ut.get(Fe.id);return Ot?{...Fe,x:Math.max(0,Ot.x+xt),y:Math.max(0,Ot.y+_t)}:Fe})),(fn=Z.current)==null||fn.call(Z,xt,_t)},ze=()=>{var me;window.removeEventListener("mousemove",ce),window.removeEventListener("mouseup",ze),be.current=null,_==null||_(!1),xe([]),(me=pe.current)==null||me.call(pe,I,Y,St)};window.addEventListener("mousemove",ce),window.addEventListener("mouseup",ze)},[O,o,n,_]),en=b.useCallback((V,Te,Ge)=>{V.preventDefault(),V.stopPropagation();const Ve=o.find(ie=>ie.id===Te);if(!Ve)return;B(new Set([Te])),be.current="resize",_==null||_(!0);const nt=V.clientX,Ye=V.clientY,Re=Ve.width,ut=Ve.height,St=Ve.x,Ht=Ve.y,Pe={left:Ge.includes("w"),right:Ge.includes("e"),top:Ge.includes("n"),bottom:Ge.includes("s")},I=ie=>{const ce=ie.clientX-nt,ze=ie.clientY-Ye;let Ce=Re,me=ut,it=St,ht=Ht;Ge.includes("e")&&(Ce=Math.max(Fa,Re+ce)),Ge.includes("w")&&(Ce=Math.max(Fa,Re-ce),it=St+Re-Ce),Ge.includes("s")&&(me=Math.max(Fa,ut+ze)),Ge.includes("n")&&(me=Math.max(Fa,ut-ze),ht=Ht+ut-me);const jt={x:it,y:ht,width:Ce,height:me},{dx:st,dy:Ae,guides:wt}=dp(jt,Ne.current,new Set([Te]),Pe,m);xe(wt),st!==0&&(Pe.right?Ce+=st:Pe.left&&(it+=st,Ce-=st)),Ae!==0&&(Pe.bottom?me+=Ae:Pe.top&&(ht+=Ae,me-=Ae)),n(Ne.current.map(Mt=>Mt.id===Te?{...Mt,x:it,y:ht,width:Ce,height:me}:Mt)),G({x:ie.clientX+12,y:ie.clientY+12,text:`${Math.round(Ce)} × ${Math.round(me)}`})},Y=()=>{window.removeEventListener("mousemove",I),window.removeEventListener("mouseup",Y),G(null),be.current=null,_==null||_(!1),xe([])};window.addEventListener("mousemove",I),window.addEventListener("mouseup",Y)},[o,n,_]),Qe=b.useCallback(V=>{be.current=null,N(Te=>{const Ge=new Set(Te);return Ge.add(V),Ge}),B(Te=>{const Ge=new Set(Te);return Ge.delete(V),Ge}),tt(()=>{n(Ne.current.filter(Te=>Te.id!==V)),N(Te=>{const Ge=new Set(Te);return Ge.delete(V),Ge})},180)},[n]),ve={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},ft=b.useCallback(V=>{const Te=o.find(Ge=>Ge.id===V);Te&&(oe.current=!!Te.text,re(V),Oe(!1))},[o]),Ke=b.useCallback(()=>{he&&(Oe(!0),tt(()=>{re(null),Oe(!1)},150))},[he]);b.useEffect(()=>{u&&he&&Ke()},[u]);const ct=b.useCallback(V=>{he&&(n(o.map(Te=>Te.id===he?{...Te,text:V.trim()||void 0}:Te)),Ke())},[he,o,n,Ke]),Dt=typeof window<"u"?window.scrollY:0,dn=["nw","ne","se","sw"],bn=E?"#f97316":"#3c82f7",mn=[{dir:"n",cls:ne.edgeN,arrow:r.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:r.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:bn})})},{dir:"e",cls:ne.edgeE,arrow:r.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:r.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:bn})})},{dir:"s",cls:ne.edgeS,arrow:r.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:r.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:bn})})},{dir:"w",cls:ne.edgeW,arrow:r.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:r.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:bn})})}];return r.jsxs(r.Fragment,{children:[r.jsx("div",{ref:W,className:`${ne.overlay} ${c?"":ne.light} ${i?ne.placing:""} ${h?ne.passthrough:""} ${u?ne.overlayExiting:""} ${E?ne.wireframe:""}${g?` ${g}`:""}`,"data-feedback-toolbar":!0,onMouseDown:rt,children:o.map(V=>{var nt;const Te=O.has(V.id),Ge=((nt=no[V.type])==null?void 0:nt.label)||V.type,Ve=V.y-Dt;return r.jsxs("div",{"data-design-placement":V.id,className:`${ne.placement} ${Te?ne.selected:""} ${ke.has(V.id)?ne.exiting:""}`,style:{left:V.x,top:Ve,width:V.width,height:V.height,position:"fixed"},onMouseDown:Ye=>dt(Ye,V.id),onDoubleClick:()=>ft(V.id),children:[r.jsx("span",{className:ne.placementLabel,children:Ge}),r.jsx("span",{className:`${ne.placementAnnotation} ${V.text?ne.annotationVisible:""}`,children:(V.text&&ue.current.set(V.id,V.text),V.text||ue.current.get(V.id)||"")}),r.jsx("div",{className:ne.placementContent,children:r.jsx(Pv,{type:V.type,width:V.width,height:V.height,text:V.text})}),r.jsx("div",{className:ne.deleteButton,onMouseDown:Ye=>Ye.stopPropagation(),onClick:()=>Qe(V.id),children:"✕"}),dn.map(Ye=>r.jsx("div",{className:`${ne.handle} ${ne[`handle${Ye.charAt(0).toUpperCase()}${Ye.slice(1)}`]}`,onMouseDown:Re=>en(Re,V.id,Ye)},Ye)),mn.map(({dir:Ye,cls:Re,arrow:ut})=>r.jsx("div",{className:`${ne.edgeHandle} ${Re}`,onMouseDown:St=>en(St,V.id,Ye),children:ut},Ye))]},V.id)})}),he&&(()=>{var Ht;const V=o.find(Pe=>Pe.id===he);if(!V)return null;const Te=V.y-Dt,Ge=V.x+V.width/2,Ve=Te-8,nt=Te+V.height+8,Ye=Ve>200,Re=nt<window.innerHeight-100,ut=Math.max(160,Math.min(window.innerWidth-160,Ge));let St;return Ye?St={left:ut,bottom:window.innerHeight-Ve}:Re?St={left:ut,top:nt}:St={left:ut,top:Math.max(80,window.innerHeight/2-80)},r.jsx(_u,{element:((Ht=no[V.type])==null?void 0:Ht.label)||V.type,placeholder:ve[V.type]||"Label or content text",initialValue:V.text??"",submitLabel:oe.current?"Save":"Set",onSubmit:ct,onCancel:Ke,onDelete:oe.current?()=>{ct("")}:void 0,isExiting:Q,lightMode:!c,style:St})})(),J&&r.jsx("div",{className:ne.drawBox,style:{left:J.x,top:J.y,width:J.w,height:J.h},"data-feedback-toolbar":!0}),z&&r.jsx("div",{className:ne.selectBox,style:{left:z.x,top:z.y,width:z.w,height:z.h},"data-feedback-toolbar":!0}),ye&&r.jsx("div",{className:ne.sizeIndicator,style:{left:ye.x,top:ye.y},"data-feedback-toolbar":!0,children:ye.text}),fe.map((V,Te)=>r.jsx("div",{className:ne.guideLine,style:V.axis==="x"?{position:"fixed",left:V.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:V.pos-Dt,right:0,height:1},"data-feedback-toolbar":!0},`${V.axis}-${V.pos}-${Te}`))]})}function Yv(o){if(!o)return"";const n=o.scrollTop>2,i=o.scrollTop+o.clientHeight<o.scrollHeight-2;return`${n?ne.fadeTop:""} ${i?ne.fadeBottom:""}`}var j="currentColor",te="0.5";function Xv({type:o}){switch(o){case"navigation":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:j,opacity:".4"}),r.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:j,opacity:".25"}),r.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:j,opacity:".25"})]});case"header":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:j,opacity:".35"}),r.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:j,opacity:".15"})]});case"hero":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:j,opacity:".35"}),r.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:j,opacity:".15"}),r.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:j,strokeWidth:te})]});case"section":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:j,opacity:".3"}),r.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:j,opacity:".15"}),r.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:j,opacity:".15"})]});case"sidebar":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:j,opacity:".3"}),r.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:j,opacity:".15"}),r.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:j,opacity:".15"})]});case"footer":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:j,opacity:".25"}),r.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:j,opacity:".25"}),r.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:j,opacity:".2"})]});case"modal":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:j,opacity:".3"}),r.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:j,opacity:".15"}),r.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:j,strokeWidth:te})]});case"divider":return r.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:r.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:j,strokeWidth:"0.5",opacity:".3"})});case"card":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:j,opacity:".04"}),r.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:j,opacity:".25"}),r.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:j,opacity:".12"})]});case"text":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:j,opacity:".3"}),r.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:j,opacity:".15"}),r.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:j,opacity:".15"}),r.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:j,opacity:".12"})]});case"image":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:j,strokeWidth:te}),r.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:j,strokeWidth:".3",opacity:".25"}),r.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:j,strokeWidth:".3",opacity:".25"})]});case"video":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:j,strokeWidth:te}),r.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:j,strokeWidth:te,fill:j,opacity:".15"})]});case"table":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:j,strokeWidth:te}),r.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:j,strokeWidth:".3",opacity:".25"}),r.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:j,strokeWidth:".3",opacity:".25"}),r.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:j,strokeWidth:".3",opacity:".25"}),r.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:j,strokeWidth:".3",opacity:".25"})]});case"grid":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:j,strokeWidth:te})]});case"list":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:j,opacity:".2"}),r.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:j,opacity:".2"}),r.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:j,opacity:".2"})]});case"chart":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:j,opacity:".2"}),r.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:j,opacity:".25"}),r.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:j,opacity:".3"}),r.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:j,opacity:".2"})]});case"accordion":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:j,opacity:".25"}),r.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:j,strokeWidth:te})]});case"carousel":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:j,strokeWidth:te}),r.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:j,strokeWidth:te,opacity:".35"}),r.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:j,strokeWidth:te,opacity:".35"}),r.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:j,opacity:".35"}),r.jsx("circle",{cx:"10",cy:"14",r:".6",fill:j,opacity:".15"}),r.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:j,opacity:".15"})]});case"button":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:j,opacity:".25"})]});case"input":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:j,opacity:".25"}),r.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:j,opacity:".12"})]});case"search":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:j,strokeWidth:te}),r.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:j,strokeWidth:te,opacity:".3"}),r.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:j,strokeWidth:te,opacity:".3"}),r.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:j,opacity:".12"})]});case"form":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:j,opacity:".25"}),r.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:j,opacity:".25"}),r.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:j,strokeWidth:te})]});case"tabs":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:j,opacity:".25"}),r.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:j,strokeWidth:te})]});case"dropdown":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:j,opacity:".2"}),r.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:j,strokeWidth:te,opacity:".3"}),r.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:j,strokeWidth:te,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:j,strokeWidth:te}),r.jsx("circle",{cx:"13",cy:"8",r:"2",fill:j,opacity:".3"})]});case"avatar":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:j,strokeWidth:te}),r.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:j,strokeWidth:te}),r.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:j,strokeWidth:te})]});case"badge":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:j,opacity:".25"})]});case"breadcrumb":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:j,opacity:".3"}),r.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:j,strokeWidth:te,opacity:".2"}),r.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:j,opacity:".2"}),r.jsx("path",{d:"M14 7l1 1-1 1",stroke:j,strokeWidth:te,opacity:".2"}),r.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:j,opacity:".15"})]});case"pagination":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:j,opacity:".15",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:j,strokeWidth:te})]});case"progress":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:j,opacity:".2"})]});case"toast":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:j,strokeWidth:te}),r.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:j,strokeWidth:te,opacity:".3"}),r.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:j,opacity:".25"}),r.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:j,opacity:".12"})]});case"tooltip":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:j,opacity:".25"}),r.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:j,strokeWidth:te})]});case"pricing":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:j,opacity:".25"}),r.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:j,opacity:".15"}),r.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:j,opacity:".1"}),r.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:j,opacity:".1"}),r.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:j,opacity:".2"})]});case"testimonial":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:j,strokeWidth:te}),r.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:j,opacity:".2",fontFamily:"serif",children:"“"}),r.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:j,opacity:".15"}),r.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:j,opacity:".12"}),r.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:j,strokeWidth:te,opacity:".25"}),r.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:j,opacity:".15"})]});case"cta":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:j,opacity:".3"}),r.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:j,opacity:".15"}),r.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:j,strokeWidth:te})]});case"alert":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:j,strokeWidth:te}),r.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:j,strokeWidth:te,opacity:".3"}),r.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:j,strokeWidth:"0.6",opacity:".5"}),r.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:j,opacity:".5"}),r.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:j,opacity:".2"})]});case"banner":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:j,opacity:".25"}),r.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:j,strokeWidth:te})]});case"stat":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:j,opacity:".15"}),r.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:j,opacity:".3"}),r.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:j,opacity:".12"})]});case"stepper":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"4",cy:"8",r:"2",fill:j,opacity:".2",stroke:j,strokeWidth:te}),r.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:j,strokeWidth:".4",opacity:".3"}),r.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:j,strokeWidth:te}),r.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:j,strokeWidth:".4",opacity:".3"}),r.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:j,strokeWidth:te})]});case"tag":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:j,opacity:".25"}),r.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:j,strokeWidth:te,opacity:".2"}),r.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:j,strokeWidth:te,opacity:".2"})]});case"rating":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:j,opacity:".25"}),r.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:j,opacity:".25"}),r.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:j,strokeWidth:te,opacity:".25"})]});case"map":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:j,strokeWidth:te}),r.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:j,strokeWidth:".3",opacity:".15"}),r.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:j,strokeWidth:".3",opacity:".15"}),r.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:j,opacity:".15",stroke:j,strokeWidth:te})]});case"timeline":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:j,strokeWidth:".4",opacity:".25"}),r.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:j,opacity:".2",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:j,opacity:".25"}),r.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:j,opacity:".15"}),r.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:j,opacity:".15"})]});case"fileUpload":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:j,strokeWidth:te,strokeDasharray:"2 1"}),r.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:j,strokeWidth:te,opacity:".3"}),r.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:j,opacity:".15"})]});case"codeBlock":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:j,strokeWidth:te}),r.jsx("circle",{cx:"4",cy:"4",r:".6",fill:j,opacity:".3"}),r.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:j,opacity:".3"}),r.jsx("circle",{cx:"7",cy:"4",r:".6",fill:j,opacity:".3"}),r.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:j,opacity:".2"}),r.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:j,opacity:".15"}),r.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:j,opacity:".12"})]});case"calendar":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:j,strokeWidth:te}),r.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:j,strokeWidth:".4",opacity:".25"}),r.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:j,opacity:".2"}),r.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:j,opacity:".2"}),r.jsx("circle",{cx:"7",cy:"9",r:".6",fill:j,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"9",r:".6",fill:j,opacity:".2"}),r.jsx("circle",{cx:"13",cy:"9",r:".6",fill:j,opacity:".3"}),r.jsx("circle",{cx:"7",cy:"12",r:".6",fill:j,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"12",r:".6",fill:j,opacity:".2"})]});case"notification":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:j,strokeWidth:te}),r.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:j,strokeWidth:te,opacity:".25"}),r.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:j,opacity:".25"}),r.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:j,opacity:".12"}),r.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:j,opacity:".25"})]});case"productCard":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:j,opacity:".04"}),r.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:j,opacity:".25"}),r.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:j,opacity:".15"}),r.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:j,strokeWidth:te})]});case"profile":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:j,opacity:".25"}),r.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:j,opacity:".12"})]});case"drawer":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:j,opacity:".25"}),r.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:j,opacity:".15"}),r.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:j,opacity:".15"}),r.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:j,strokeWidth:te,opacity:".15"})]});case"popover":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:j,opacity:".25"}),r.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:j,opacity:".15"}),r.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:j,strokeWidth:te})]});case"logo":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:j,strokeWidth:te}),r.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:j,strokeWidth:te,opacity:".3"}),r.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:j,opacity:".2"}),r.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:j,opacity:".12"})]});case"faq":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:j,opacity:".3",fontWeight:"bold",children:"?"}),r.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:j,opacity:".25"}),r.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:j,opacity:".12"}),r.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:j,opacity:".3",fontWeight:"bold",children:"?"}),r.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:j,opacity:".25"}),r.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:j,opacity:".12"})]});case"gallery":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:j,strokeWidth:te})]});case"checkbox":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:j,strokeWidth:te}),r.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:j,strokeWidth:te,opacity:".35"})]});case"radio":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:j,strokeWidth:te}),r.jsx("circle",{cx:"10",cy:"8",r:"2",fill:j,opacity:".3"})]});case"slider":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:j,opacity:".15"}),r.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:j,opacity:".25"}),r.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:j,strokeWidth:te})]});case"datePicker":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:j,opacity:".2"}),r.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:j,opacity:".12"}),r.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:j,strokeWidth:te,strokeDasharray:"2 1",opacity:".3"}),r.jsx("circle",{cx:"6",cy:"10",r:".6",fill:j,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"10",r:".6",fill:j,opacity:".3"}),r.jsx("circle",{cx:"14",cy:"10",r:".6",fill:j,opacity:".2"}),r.jsx("circle",{cx:"6",cy:"13",r:".6",fill:j,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"13",r:".6",fill:j,opacity:".2"})]});case"skeleton":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:j,opacity:".08"}),r.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:j,opacity:".08"}),r.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:j,opacity:".08"})]});case"chip":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:j,opacity:".08",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:j,opacity:".25"}),r.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:j,strokeWidth:te,opacity:".2"}),r.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:j,strokeWidth:te,opacity:".2"}),r.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:j,strokeWidth:te,opacity:".25"})]});case"icon":return r.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:r.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:j,strokeWidth:te,opacity:".3"})});case"spinner":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:j,strokeWidth:te,opacity:".12"}),r.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:j,strokeWidth:te,opacity:".35",strokeLinecap:"round"})]});case"feature":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:j,strokeWidth:te}),r.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:j,strokeWidth:te,opacity:".25"}),r.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:j,opacity:".25"}),r.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:j,opacity:".12"}),r.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:j,opacity:".25"}),r.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:j,opacity:".12"})]});case"team":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:j,opacity:".2"}),r.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:j,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:j,strokeWidth:te,opacity:".5"}),r.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:j,opacity:".15"}),r.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:j,opacity:".1"})]});case"login":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:j,opacity:".25"}),r.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:j,opacity:".2"})]});case"contact":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:j,opacity:".2"}),r.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:j,strokeWidth:te}),r.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:j,opacity:".2"})]});default:return null}}function Fv({activeType:o,onSelect:n,onDragStart:i,scrollRef:l,fadeClass:c,blankCanvas:u}){return r.jsx("div",{ref:l,className:`${ne.placeScroll} ${c||""}`,children:cy.map(_=>r.jsxs("div",{className:ne.paletteSection,children:[r.jsx("div",{className:ne.paletteSectionTitle,children:_.section}),_.items.map(g=>r.jsxs("div",{className:`${ne.paletteItem} ${o===g.type?ne.active:""} ${u?ne.wireframe:""}`,onClick:()=>n(g.type),onMouseDown:h=>{h.button===0&&i(g.type,h)},children:[r.jsx("div",{className:ne.paletteItemIcon,children:r.jsx(Xv,{type:g.type})}),r.jsx("span",{className:ne.paletteItemLabel,children:g.label})]},g.type))]},_.section))})}function Gv({value:o,suffix:n}){const[i,l]=b.useState(null),[c,u]=b.useState(n),[_,g]=b.useState("up"),h=b.useRef(o),m=b.useRef(n),p=b.useRef(),y=i!==null&&c!==n;return b.useEffect(()=>{if(o!==h.current){if(o===0){h.current=o,m.current=n,l(null);return}g(o>h.current?"up":"down"),l(h.current),u(m.current),h.current=o,m.current=n,clearTimeout(p.current),p.current=tt(()=>l(null),250)}else m.current=n},[o,n]),i===null?r.jsxs(r.Fragment,{children:[o,n?` ${n}`:""]}):y?r.jsxs("span",{className:ne.rollingWrap,children:[r.jsxs("span",{style:{visibility:"hidden"},children:[o," ",n]}),r.jsxs("span",{className:`${ne.rollingNum} ${_==="up"?ne.exitUp:ne.exitDown}`,children:[i," ",c]},`o${i}-${o}`),r.jsxs("span",{className:`${ne.rollingNum} ${_==="up"?ne.enterUp:ne.enterDown}`,children:[o," ",n]},`n${o}`)]}):r.jsxs(r.Fragment,{children:[r.jsxs("span",{className:ne.rollingWrap,children:[r.jsx("span",{style:{visibility:"hidden"},children:o}),r.jsx("span",{className:`${ne.rollingNum} ${_==="up"?ne.exitUp:ne.exitDown}`,children:i},`o${i}-${o}`),r.jsx("span",{className:`${ne.rollingNum} ${_==="up"?ne.enterUp:ne.enterDown}`,children:o},`n${o}`)]}),n?` ${n}`:""]})}function Wv({activeType:o,onSelect:n,isDarkMode:i,sectionCount:l,onDetectSections:c,visible:u,onExited:_,placementCount:g,onClearPlacements:h,onDragStart:m,blankCanvas:p,onBlankCanvasChange:y,wireframePurpose:v,onWireframePurposeChange:C,Tooltip:k}){const[E,O]=b.useState(!1),[B,J]=b.useState("exit"),[F,z]=b.useState(!1),[de,ye]=b.useState(!0),G=b.useRef(0),fe=b.useRef(""),xe=b.useRef(0),he=b.useRef(),re=b.useRef(null),[Q,Oe]=b.useState("");b.useEffect(()=>(u?(O(!0),clearTimeout(he.current),cancelAnimationFrame(xe.current),xe.current=Qa(()=>{xe.current=Qa(()=>{J("enter")})})):(cancelAnimationFrame(xe.current),J("exit"),clearTimeout(he.current),he.current=tt(()=>{O(!1),_==null||_()},200)),()=>cancelAnimationFrame(xe.current)),[u]);const oe=g>0||l>0,ke=g+l;return ke>0&&(G.current=ke,fe.current=p?ke===1?"Component":"Components":ke===1?"Change":"Changes"),b.useEffect(()=>{if(oe)F?ye(!1):(ye(!0),z(!0),Qa(()=>{Qa(()=>{ye(!1)})}));else{ye(!0);const N=tt(()=>z(!1),300);return()=>clearTimeout(N)}},[oe]),b.useEffect(()=>{if(!E)return;const N=re.current;if(!N)return;const ue=()=>Oe(Yv(N));ue(),N.addEventListener("scroll",ue,{passive:!0});const W=new ResizeObserver(ue);return W.observe(N),()=>{N.removeEventListener("scroll",ue),W.disconnect()}},[E]),E?r.jsxs("div",{className:`${ne.palette} ${ne[B]} ${i?"":ne.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:N=>N.stopPropagation(),onMouseDown:N=>N.stopPropagation(),onTransitionEnd:N=>{N.target===N.currentTarget&&(u||(clearTimeout(he.current),O(!1),J("exit"),_==null||_()))},children:[r.jsxs("div",{className:ne.paletteHeader,children:[r.jsx("div",{className:ne.paletteHeaderTitle,children:"Layout Mode"}),r.jsxs("div",{className:ne.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",r.jsx("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),r.jsxs("div",{className:`${ne.canvasToggle} ${p?ne.active:""}`,onClick:()=>y(!p),children:[r.jsx("span",{className:ne.canvasToggleIcon,children:r.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),r.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),r.jsx("span",{className:ne.canvasToggleLabel,children:"Wireframe New Page"})]}),r.jsx("div",{className:`${ne.wireframePurposeWrap} ${p?"":ne.collapsed}`,children:r.jsx("div",{className:ne.wireframePurposeInner,children:r.jsx("textarea",{className:ne.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:v,onChange:N=>C(N.target.value),rows:2})})}),r.jsx(Fv,{activeType:o,onSelect:n,onDragStart:m,scrollRef:re,fadeClass:Q,blankCanvas:p}),F&&r.jsx("div",{className:`${ne.paletteFooterWrap} ${de?ne.footerHidden:""}`,children:r.jsx("div",{className:ne.paletteFooterInner,children:r.jsx("div",{className:ne.paletteFooterInnerContent,children:r.jsxs("div",{className:ne.paletteFooter,children:[r.jsx("span",{className:ne.paletteFooterCount,children:r.jsx(Gv,{value:G.current,suffix:fe.current})}),r.jsx("button",{className:ne.paletteFooterClear,onClick:h,children:"Clear"})]})})})})]}):null}function Za(o){if(o.parentElement)return o.parentElement;const n=o.getRootNode();return n instanceof ShadowRoot?n.host:null}function us(o,n){let i=o;for(;i;){if(i.matches(n))return i;i=Za(i)}return null}function qv(o,n=4){const i=[];let l=o,c=0;for(;l&&c<n;){const u=l.tagName.toLowerCase();if(u==="html"||u==="body")break;let _=u;if(l.id)_=`#${l.id}`;else if(l.className&&typeof l.className=="string"){const h=l.className.split(/\s+/).find(m=>m.length>2&&!m.match(/^[a-z]{1,2}$/)&&!m.match(/[A-Z0-9]{5,}/));h&&(_=`.${h.split("_")[0]}`)}const g=Za(l);!l.parentElement&&g&&(_=`⟨shadow⟩ ${_}`),i.unshift(_),l=g,c++}return i.join(" > ")}function Ka(o){var l,c,u,_,g,h,m,p;const n=qv(o);if(o.dataset.element)return{name:o.dataset.element,path:n};const i=o.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(i)){const y=us(o,"svg");if(y){const v=Za(y);if(v instanceof HTMLElement)return{name:`graphic in ${Ka(v).name}`,path:n}}return{name:"graphic element",path:n}}if(i==="svg"){const y=Za(o);if((y==null?void 0:y.tagName.toLowerCase())==="button"){const v=(l=y.textContent)==null?void 0:l.trim();return{name:v?`icon in "${v}" button`:"button icon",path:n}}return{name:"icon",path:n}}if(i==="button"){const y=(c=o.textContent)==null?void 0:c.trim(),v=o.getAttribute("aria-label");return v?{name:`button [${v}]`,path:n}:{name:y?`button "${y.slice(0,25)}"`:"button",path:n}}if(i==="a"){const y=(u=o.textContent)==null?void 0:u.trim(),v=o.getAttribute("href");return y?{name:`link "${y.slice(0,25)}"`,path:n}:v?{name:`link to ${v.slice(0,30)}`,path:n}:{name:"link",path:n}}if(i==="input"){const y=o.getAttribute("type")||"text",v=o.getAttribute("placeholder"),C=o.getAttribute("name");return v?{name:`input "${v}"`,path:n}:C?{name:`input [${C}]`,path:n}:{name:`${y} input`,path:n}}if(["h1","h2","h3","h4","h5","h6"].includes(i)){const y=(_=o.textContent)==null?void 0:_.trim();return{name:y?`${i} "${y.slice(0,35)}"`:i,path:n}}if(i==="p"){const y=(g=o.textContent)==null?void 0:g.trim();return y?{name:`paragraph: "${y.slice(0,40)}${y.length>40?"...":""}"`,path:n}:{name:"paragraph",path:n}}if(i==="span"||i==="label"){const y=(h=o.textContent)==null?void 0:h.trim();return y&&y.length<40?{name:`"${y}"`,path:n}:{name:i,path:n}}if(i==="li"){const y=(m=o.textContent)==null?void 0:m.trim();return y&&y.length<40?{name:`list item: "${y.slice(0,35)}"`,path:n}:{name:"list item",path:n}}if(i==="blockquote")return{name:"blockquote",path:n};if(i==="code"){const y=(p=o.textContent)==null?void 0:p.trim();return y&&y.length<30?{name:`code: \`${y}\``,path:n}:{name:"code",path:n}}if(i==="pre")return{name:"code block",path:n};if(i==="img"){const y=o.getAttribute("alt");return{name:y?`image "${y.slice(0,30)}"`:"image",path:n}}if(i==="video")return{name:"video",path:n};if(["div","section","article","nav","header","footer","aside","main"].includes(i)){const y=o.className,v=o.getAttribute("role"),C=o.getAttribute("aria-label");if(C)return{name:`${i} [${C}]`,path:n};if(v)return{name:`${v}`,path:n};if(typeof y=="string"&&y){const k=y.split(/[\s_-]+/).map(E=>E.replace(/[A-Z0-9]{5,}.*$/,"")).filter(E=>E.length>2&&!/^[a-z]{1,2}$/.test(E)).slice(0,2);if(k.length>0)return{name:k.join(" "),path:n}}return{name:i==="div"?"container":i,path:n}}return{name:i,path:n}}function tr(o){var u,_,g;const n=[],i=(u=o.textContent)==null?void 0:u.trim();i&&i.length<100&&n.push(i);const l=o.previousElementSibling;if(l){const h=(_=l.textContent)==null?void 0:_.trim();h&&h.length<50&&n.unshift(`[before: "${h.slice(0,40)}"]`)}const c=o.nextElementSibling;if(c){const h=(g=c.textContent)==null?void 0:g.trim();h&&h.length<50&&n.push(`[after: "${h.slice(0,40)}"]`)}return n.join(" ")}function Xc(o){const n=Za(o);if(!n)return"";const c=(o.getRootNode()instanceof ShadowRoot&&o.parentElement?Array.from(o.parentElement.children):Array.from(n.children)).filter(p=>p!==o&&p instanceof HTMLElement);if(c.length===0)return"";const u=c.slice(0,4).map(p=>{var k;const y=p.tagName.toLowerCase(),v=p.className;let C="";if(typeof v=="string"&&v){const E=v.split(/\s+/).map(O=>O.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(O=>O.length>2&&!/^[a-z]{1,2}$/.test(O));E&&(C=`.${E}`)}if(y==="button"||y==="a"){const E=(k=p.textContent)==null?void 0:k.trim().slice(0,15);if(E)return`${y}${C} "${E}"`}return`${y}${C}`});let g=n.tagName.toLowerCase();if(typeof n.className=="string"&&n.className){const p=n.className.split(/\s+/).map(y=>y.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(y=>y.length>2&&!/^[a-z]{1,2}$/.test(y));p&&(g=`.${p}`)}const h=n.children.length,m=h>u.length+1?` (${h} total in ${g})`:"";return u.join(", ")+m}function nr(o){const n=o.className;return typeof n!="string"||!n?"":n.split(/\s+/).filter(l=>l.length>0).map(l=>{const c=l.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return c?c[1]:l}).filter((l,c,u)=>u.indexOf(l)===c).join(", ")}var uy=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),Qv=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),Vv=new Set(["input","textarea","select"]),Kv=new Set(["img","video","canvas","svg"]),Zv=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function Fc(o){if(typeof window>"u")return{};const n=window.getComputedStyle(o),i={},l=o.tagName.toLowerCase();let c;Qv.has(l)?c=["color","fontSize","fontWeight","fontFamily","lineHeight"]:l==="button"||l==="a"&&o.getAttribute("role")==="button"?c=["backgroundColor","color","padding","borderRadius","fontSize"]:Vv.has(l)?c=["backgroundColor","color","padding","borderRadius","fontSize"]:Kv.has(l)?c=["width","height","objectFit","borderRadius"]:Zv.has(l)?c=["display","padding","margin","gap","backgroundColor"]:c=["color","fontSize","margin","padding","backgroundColor"];for(const u of c){const _=u.replace(/([A-Z])/g,"-$1").toLowerCase(),g=n.getPropertyValue(_);g&&!uy.has(g)&&(i[u]=g)}return i}var Jv=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function Gc(o){if(typeof window>"u")return"";const n=window.getComputedStyle(o),i=[];for(const l of Jv){const c=l.replace(/([A-Z])/g,"-$1").toLowerCase(),u=n.getPropertyValue(c);u&&!uy.has(u)&&i.push(`${c}: ${u}`)}return i.join("; ")}function e4(o){if(!o)return;const n={},i=o.split(";").map(l=>l.trim()).filter(Boolean);for(const l of i){const c=l.indexOf(":");if(c>0){const u=l.slice(0,c).trim(),_=l.slice(c+1).trim();u&&_&&(n[u]=_)}}return Object.keys(n).length>0?n:void 0}function Wc(o){const n=[],i=o.getAttribute("role"),l=o.getAttribute("aria-label"),c=o.getAttribute("aria-describedby"),u=o.getAttribute("tabindex"),_=o.getAttribute("aria-hidden");return i&&n.push(`role="${i}"`),l&&n.push(`aria-label="${l}"`),c&&n.push(`aria-describedby="${c}"`),u&&n.push(`tabindex=${u}`),_==="true"&&n.push("aria-hidden"),o.matches("a, button, input, select, textarea, [tabindex]")&&n.push("focusable"),n.join(", ")}function qc(o){const n=[];let i=o;for(;i&&i.tagName.toLowerCase()!=="html";){const l=i.tagName.toLowerCase();let c=l;if(i.id)c=`${l}#${i.id}`;else if(i.className&&typeof i.className=="string"){const _=i.className.split(/\s+/).map(g=>g.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(g=>g.length>2);_&&(c=`${l}.${_}`)}const u=Za(i);!i.parentElement&&u&&(c=`⟨shadow⟩ ${c}`),n.unshift(c),i=u}return n.join(" > ")}var t4=new Set(["nav","header","main","section","article","footer","aside"]),oh={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},hp={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},n4=new Set(["script","style","noscript","link","meta"]),s4=40;function dy(o){let n=o;for(;n&&n!==document.body&&n!==document.documentElement;){const i=window.getComputedStyle(n).position;if(i==="fixed"||i==="sticky")return!0;n=n.parentElement}return!1}function ta(o){const n=o.tagName.toLowerCase();if(["nav","header","footer","main"].includes(n)&&document.querySelectorAll(n).length===1)return n;if(o.id)return`#${CSS.escape(o.id)}`;if(o.className&&typeof o.className=="string"){const c=o.className.split(/\s+/).filter(u=>u.length>0).find(u=>u.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(u)&&!/^[a-z]{1,2}$/.test(u));if(c){const u=`${n}.${CSS.escape(c)}`;if(document.querySelectorAll(u).length===1)return u}}const i=o.parentElement;if(i){const c=Array.from(i.children).indexOf(o)+1;return`${i===document.body?"body":ta(i)} > ${n}:nth-child(${c})`}return n}function mu(o){var _;const n=o.tagName.toLowerCase(),i=o.getAttribute("aria-label");if(i)return i;const l=o.getAttribute("role");if(l&&oh[l])return oh[l];if(hp[n])return hp[n];const c=o.querySelector("h1, h2, h3, h4, h5, h6");if(c){const g=(_=c.textContent)==null?void 0:_.trim();if(g&&g.length<=50)return g;if(g)return g.slice(0,47)+"..."}const{name:u}=Ka(o);return u.charAt(0).toUpperCase()+u.slice(1)}function fy(o){const n=o.className;return typeof n!="string"||!n?null:n.split(/\s+/).map(l=>l.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(l=>l.length>2&&!/^[a-z]{1,2}$/.test(l))||null}function hy(o){var l;const n=(l=o.textContent)==null?void 0:l.trim();if(!n)return null;const i=n.replace(/\s+/g," ");return i.length<=30?i:i.slice(0,30)+"…"}function o4(){const o=document.querySelector("main")||document.body,n=Array.from(o.children);let i=n;o!==document.body&&n.length<3&&(i=Array.from(document.body.children));const l=[];return i.forEach((c,u)=>{if(!(c instanceof HTMLElement))return;const _=c.tagName.toLowerCase();if(n4.has(_)||c.hasAttribute("data-feedback-toolbar")||c.closest("[data-feedback-toolbar]"))return;const g=window.getComputedStyle(c);if(g.display==="none"||g.visibility==="hidden")return;const h=c.getBoundingClientRect();if(h.height<s4)return;const m=t4.has(_),p=c.getAttribute("role")&&oh[c.getAttribute("role")],y=_==="div"&&h.height>=60;if(!m&&!p&&!y)return;const v=window.scrollY,C=dy(c),k={x:h.x,y:C?h.y:h.y+v,width:h.width,height:h.height};l.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:mu(c),tagName:_,selector:ta(c),role:c.getAttribute("role"),className:fy(c),textSnippet:hy(c),originalRect:k,currentRect:{...k},originalIndex:u,isFixed:C})}),l}function i4(o){const n=window.scrollY,i=o.getBoundingClientRect(),l=dy(o),c={x:i.x,y:l?i.y:i.y+n,width:i.width,height:i.height},u=o.parentElement;let _=0;return u&&(_=Array.from(u.children).indexOf(o)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:mu(o),tagName:o.tagName.toLowerCase(),selector:ta(o),role:o.getAttribute("role"),className:fy(o),textSnippet:hy(o),originalRect:c,currentRect:{...c},originalIndex:_,isFixed:l}}var _p={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},mp=["nw","n","ne","e","se","s","sw","w"],Qc=24,pp=16,Vc=5;function gp(o,n,i,l){let c=1/0,u=1/0;const _=o.x,g=o.x+o.width,h=o.x+o.width/2,m=o.y,p=o.y+o.height,y=o.y+o.height/2,v=[];for(const G of n)i.has(G.id)||v.push(G.currentRect);l&&v.push(...l);for(const G of v){const fe=G.x,xe=G.x+G.width,he=G.x+G.width/2,re=G.y,Q=G.y+G.height,Oe=G.y+G.height/2;for(const oe of[_,g,h])for(const ke of[fe,xe,he]){const N=ke-oe;Math.abs(N)<Vc&&Math.abs(N)<Math.abs(c)&&(c=N)}for(const oe of[m,p,y])for(const ke of[re,Q,Oe]){const N=ke-oe;Math.abs(N)<Vc&&Math.abs(N)<Math.abs(u)&&(u=N)}}const C=Math.abs(c)<Vc?c:0,k=Math.abs(u)<Vc?u:0,E=[],O=new Set,B=_+C,J=g+C,F=h+C,z=m+k,de=p+k,ye=y+k;for(const G of v){const fe=G.x,xe=G.x+G.width,he=G.x+G.width/2,re=G.y,Q=G.y+G.height,Oe=G.y+G.height/2;for(const oe of[fe,he,xe])for(const ke of[B,F,J])if(Math.abs(ke-oe)<.5){const N=`x:${Math.round(oe)}`;O.has(N)||(O.add(N),E.push({axis:"x",pos:oe}))}for(const oe of[re,Oe,Q])for(const ke of[z,ye,de])if(Math.abs(ke-oe)<.5){const N=`y:${Math.round(oe)}`;O.has(N)||(O.add(N),E.push({axis:"y",pos:oe}))}}return{dx:C,dy:k,guides:E}}var a4=new Set(["script","style","noscript","link","meta","br","hr"]);function yp(o){let n=o;for(;n&&n!==document.body&&n!==document.documentElement;){if(n.closest("[data-feedback-toolbar]"))return null;if(a4.has(n.tagName.toLowerCase())){n=n.parentElement;continue}const i=n.getBoundingClientRect();if(i.width>=pp&&i.height>=pp)return n;n=n.parentElement}return null}function l4({rearrangeState:o,onChange:n,isDarkMode:i,exiting:l,className:c,blankCanvas:u,extraSnapRects:_,onSelectionChange:g,deselectSignal:h,onDragMove:m,onDragEnd:p,clearSignal:y}){const{sections:v}=o,C=b.useRef(o);C.current=o;const[k,E]=b.useState(new Set),[O,B]=b.useState(!1),J=b.useRef(y);b.useEffect(()=>{y!==void 0&&y!==J.current&&(J.current=y,v.length>0&&B(!0))},[y,v.length]);const F=b.useRef(h);b.useEffect(()=>{h!==F.current&&(F.current=h,E(new Set))},[h]);const[z,de]=b.useState(null),[ye,G]=b.useState(!1),fe=b.useRef(!1),xe=b.useCallback(I=>{const Y=v.find(ie=>ie.id===I);Y&&(fe.current=!!Y.note,de(I),G(!1))},[v]),he=b.useCallback(()=>{z&&(G(!0),tt(()=>{de(null),G(!1)},150))},[z]),re=b.useCallback(I=>{z&&(n({...o,sections:v.map(Y=>Y.id===z?{...Y,note:I.trim()||void 0}:Y)}),he())},[z,v,o,n,he]);b.useEffect(()=>{l&&z&&he()},[l]);const[Q,Oe]=b.useState(new Set),oe=b.useRef(new Map),[ke,N]=b.useState(null),[ue,W]=b.useState(null),[be,Ne]=b.useState([]),[D,Z]=b.useState(0),pe=b.useRef(null),Me=b.useRef(new Set),qe=b.useRef(new Map),[rt,dt]=b.useState(new Map),[en,Qe]=b.useState(new Map),ve=b.useRef(new Set),ft=b.useRef(new Map),Ke=b.useRef(g);Ke.current=g;const ct=b.useRef(m);ct.current=m;const Dt=b.useRef(p);Dt.current=p,b.useEffect(()=>{u&&E(new Set)},[u]);const[dn,bn]=b.useState(()=>!o.sections.some(I=>{const Y=I.originalRect,ie=I.currentRect;return Math.abs(Y.x-ie.x)>1||Math.abs(Y.y-ie.y)>1||Math.abs(Y.width-ie.width)>1||Math.abs(Y.height-ie.height)>1}));b.useEffect(()=>{if(!dn){const I=tt(()=>bn(!0),380);return()=>clearTimeout(I)}},[]);const mn=b.useRef(new Set);b.useEffect(()=>{mn.current=new Set(v.map(I=>I.selector))},[v]),b.useEffect(()=>{const I=()=>Z(window.scrollY);return I(),window.addEventListener("scroll",I,{passive:!0}),window.addEventListener("resize",I,{passive:!0}),()=>{window.removeEventListener("scroll",I),window.removeEventListener("resize",I)}},[]),b.useEffect(()=>{const I=Y=>{if(pe.current){N(null);return}const ie=document.elementFromPoint(Y.clientX,Y.clientY);if(!ie){N(null);return}if(ie.closest("[data-feedback-toolbar]")){N(null);return}if(ie.closest("[data-design-placement]")){N(null);return}if(ie.closest("[data-annotation-popup]")){N(null);return}const ce=yp(ie);if(!ce){N(null);return}for(const Ce of mn.current)try{const me=document.querySelector(Ce);if(me&&(me===ce||ce.contains(me))){N(null);return}}catch{}const ze=ce.getBoundingClientRect();N({x:ze.x,y:ze.y,w:ze.width,h:ze.height})};return document.addEventListener("mousemove",I,{passive:!0}),()=>document.removeEventListener("mousemove",I)},[v]),b.useEffect(()=>{const I=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=I}},[]),b.useEffect(()=>{const I=Y=>{var me,it,ht,jt;if(pe.current||Y.button!==0)return;const ie=Y.target;if(!ie||ie.closest("[data-feedback-toolbar]")||ie.closest("[data-design-placement]")||ie.closest("[data-annotation-popup]"))return;const ce=yp(ie);let ze=!1;if(ce)for(const st of mn.current)try{const Ae=document.querySelector(st);if(Ae&&(Ae===ce||ce.contains(Ae))){ze=!0;break}}catch{}const Ce=!!(Y.shiftKey||Y.metaKey||Y.ctrlKey);if(ce&&!ze){Y.preventDefault(),Y.stopPropagation();const st=i4(ce),Ae=[...v,st],wt=[...o.originalOrder,st.id];n({...o,sections:Ae,originalOrder:wt});const Mt=new Set([st.id]);E(Mt),(me=Ke.current)==null||me.call(Ke,Mt,Ce),N(null);const Wt=Y.clientX,De=Y.clientY,yt={x:st.currentRect.x,y:st.currentRect.y};st.originalRect;let xt=!1,_t=0,fn=0;pe.current="move";const Fe=vn=>{var Yt;const Yn=vn.clientX-Wt,In=vn.clientY-De;if(!xt&&(Math.abs(Yn)>2||Math.abs(In)>2)&&(xt=!0),!xt)return;const oo={x:yt.x+Yn,y:yt.y+In,width:st.currentRect.width,height:st.currentRect.height},vs=gp(oo,Ae,new Set([st.id]),_);Ne(vs.guides);const Zn=Yn+vs.dx,ln=In+vs.dy;_t=Zn,fn=ln;const An=document.querySelector(`[data-rearrange-section="${st.id}"]`);An&&(An.style.transform=`translate(${Zn}px, ${ln}px)`),dt(new Map([[st.id,{x:yt.x+Zn,y:yt.y+ln,width:st.currentRect.width,height:st.currentRect.height}]])),(Yt=ct.current)==null||Yt.call(ct,Zn,ln)},Ot=()=>{var Yn;window.removeEventListener("mousemove",Fe),window.removeEventListener("mouseup",Ot),pe.current=null,Ne([]),dt(new Map);const vn=document.querySelector(`[data-rearrange-section="${st.id}"]`);vn&&(vn.style.transform=""),xt&&n({...o,sections:Ae.map(In=>In.id===st.id?{...In,currentRect:{...In.currentRect,x:Math.max(0,yt.x+_t),y:Math.max(0,yt.y+fn)}}:In),originalOrder:wt}),(Yn=Dt.current)==null||Yn.call(Dt,_t,fn,xt)};window.addEventListener("mousemove",Fe),window.addEventListener("mouseup",Ot)}else if(ze&&ce){Y.preventDefault();for(const st of v)try{const Ae=document.querySelector(st.selector);if(Ae&&Ae===ce){const wt=new Set([st.id]);E(wt),(it=Ke.current)==null||it.call(Ke,wt,Ce);return}}catch{}Ce||(E(new Set),(ht=Ke.current)==null||ht.call(Ke,new Set,!1))}else Ce||(E(new Set),(jt=Ke.current)==null||jt.call(Ke,new Set,!1))};return document.addEventListener("mousedown",I,!0),()=>document.removeEventListener("mousedown",I,!0)},[v,o,n]),b.useEffect(()=>{const I=Y=>{const ie=Y.target;if(!(ie.tagName==="INPUT"||ie.tagName==="TEXTAREA"||ie.isContentEditable)){if((Y.key==="Backspace"||Y.key==="Delete")&&k.size>0){Y.preventDefault();const ce=new Set(k);Oe(ze=>{const Ce=new Set(ze);for(const me of ce)Ce.add(me);return Ce}),E(new Set),tt(()=>{const ze=C.current;n({...ze,sections:ze.sections.filter(Ce=>!ce.has(Ce.id)),originalOrder:ze.originalOrder.filter(Ce=>!ce.has(Ce))}),Oe(Ce=>{const me=new Set(Ce);for(const it of ce)me.delete(it);return me})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(Y.key)&&k.size>0){Y.preventDefault();const ce=Y.shiftKey?20:1,ze=Y.key==="ArrowLeft"?-ce:Y.key==="ArrowRight"?ce:0,Ce=Y.key==="ArrowUp"?-ce:Y.key==="ArrowDown"?ce:0;n({...o,sections:v.map(me=>k.has(me.id)?{...me,currentRect:{...me.currentRect,x:Math.max(0,me.currentRect.x+ze),y:Math.max(0,me.currentRect.y+Ce)}}:me)});return}Y.key==="Escape"&&k.size>0&&E(new Set)}};return document.addEventListener("keydown",I),()=>document.removeEventListener("keydown",I)},[k,v,o,n]);const V=b.useCallback((I,Y)=>{var Wt;if(I.button!==0)return;const ie=I.target;if(ie.closest(`.${ne.handle}`)||ie.closest(`.${ne.deleteButton}`))return;I.preventDefault(),I.stopPropagation();let ce;I.shiftKey||I.metaKey||I.ctrlKey?(ce=new Set(k),ce.has(Y)?ce.delete(Y):ce.add(Y)):k.has(Y)?ce=new Set(k):ce=new Set([Y]),E(ce),(ce.size!==k.size||[...ce].some(De=>!k.has(De)))&&((Wt=Ke.current)==null||Wt.call(Ke,ce,!!(I.shiftKey||I.metaKey||I.ctrlKey)));const Ce=I.clientX,me=I.clientY,it=new Map;for(const De of v)ce.has(De.id)&&it.set(De.id,{x:De.currentRect.x,y:De.currentRect.y});pe.current="move";let ht=!1,jt=0,st=0;const Ae=new Map;for(const De of v)if(ce.has(De.id)){const yt=document.querySelector(`[data-rearrange-section="${De.id}"]`);Ae.set(De.id,{outlineEl:yt,curW:De.currentRect.width,curH:De.currentRect.height})}const wt=De=>{var vs;const yt=De.clientX-Ce,xt=De.clientY-me;if(yt===0&&xt===0)return;ht=!0;let _t=1/0,fn=1/0,Fe=-1/0,Ot=-1/0;for(const[Zn,{curW:ln,curH:An}]of Ae){const Yt=it.get(Zn);if(!Yt)continue;const jn=Yt.x+yt,Ee=Yt.y+xt;_t=Math.min(_t,jn),fn=Math.min(fn,Ee),Fe=Math.max(Fe,jn+ln),Ot=Math.max(Ot,Ee+An)}const vn=gp({x:_t,y:fn,width:Fe-_t,height:Ot-fn},v,ce,_),Yn=yt+vn.dx,In=xt+vn.dy;jt=Yn,st=In,Ne(vn.guides);for(const[,{outlineEl:Zn}]of Ae)Zn&&(Zn.style.transform=`translate(${Yn}px, ${In}px)`);const oo=new Map;for(const[Zn,{curW:ln,curH:An}]of Ae){const Yt=it.get(Zn);if(Yt){const jn={x:Math.max(0,Yt.x+Yn),y:Math.max(0,Yt.y+In),width:ln,height:An};oo.set(Zn,jn)}}dt(oo),(vs=ct.current)==null||vs.call(ct,Yn,In)},Mt=De=>{var yt,xt;window.removeEventListener("mousemove",wt),window.removeEventListener("mouseup",Mt),pe.current=null,Ne([]),dt(new Map);for(const[,{outlineEl:_t}]of Ae)_t&&(_t.style.transform="");if(ht){const _t=De.clientX-Ce,fn=De.clientY-me;if(Math.abs(_t)<5&&Math.abs(fn)<5)n({...o,sections:v.map(Fe=>{const Ot=it.get(Fe.id);return Ot?{...Fe,currentRect:{...Fe.currentRect,x:Ot.x,y:Ot.y}}:Fe})});else{n({...o,sections:v.map(Fe=>{const Ot=it.get(Fe.id);return Ot?{...Fe,currentRect:{...Fe.currentRect,x:Math.max(0,Ot.x+jt),y:Math.max(0,Ot.y+st)}}:Fe})}),(yt=Dt.current)==null||yt.call(Dt,jt,st,!0);return}}(xt=Dt.current)==null||xt.call(Dt,0,0,!1)};window.addEventListener("mousemove",wt),window.addEventListener("mouseup",Mt)},[k,v,o,n]),Te=b.useCallback((I,Y,ie)=>{I.preventDefault(),I.stopPropagation();const ce=v.find(wt=>wt.id===Y);if(!ce)return;E(new Set([Y])),pe.current="resize";const ze=I.clientX,Ce=I.clientY,me={...ce.currentRect};ce.originalRect;const it=me.width/me.height;let ht={...me};const jt=document.querySelector(`[data-rearrange-section="${Y}"]`),st=wt=>{const Mt=wt.clientX-ze,Wt=wt.clientY-Ce;let De=me.x,yt=me.y,xt=me.width,_t=me.height;if(ie.includes("e")&&(xt=Math.max(Qc,me.width+Mt)),ie.includes("w")&&(xt=Math.max(Qc,me.width-Mt),De=me.x+me.width-xt),ie.includes("s")&&(_t=Math.max(Qc,me.height+Wt)),ie.includes("n")&&(_t=Math.max(Qc,me.height-Wt),yt=me.y+me.height-_t),wt.shiftKey)if(ie.length===2){const Fe=Math.abs(xt-me.width),Ot=Math.abs(_t-me.height);Fe>Ot?_t=xt/it:xt=_t*it,ie.includes("w")&&(De=me.x+me.width-xt),ie.includes("n")&&(yt=me.y+me.height-_t)}else ie==="e"||ie==="w"?_t=xt/it:xt=_t*it,ie==="w"&&(De=me.x+me.width-xt),ie==="n"&&(yt=me.y+me.height-_t);ht={x:De,y:yt,width:xt,height:_t},jt&&(jt.style.left=`${De}px`,jt.style.top=`${yt-D}px`,jt.style.width=`${xt}px`,jt.style.height=`${_t}px`),W({x:wt.clientX+12,y:wt.clientY+12,text:`${Math.round(xt)} × ${Math.round(_t)}`}),dt(new Map([[Y,ht]]))},Ae=()=>{window.removeEventListener("mousemove",st),window.removeEventListener("mouseup",Ae),W(null),pe.current=null,dt(new Map),n({...o,sections:v.map(wt=>wt.id===Y?{...wt,currentRect:ht}:wt)})};window.addEventListener("mousemove",st),window.addEventListener("mouseup",Ae)},[v,o,n,D]),Ge=b.useCallback(I=>{Oe(Y=>{const ie=new Set(Y);return ie.add(I),ie}),E(Y=>{const ie=new Set(Y);return ie.delete(I),ie}),tt(()=>{const Y=C.current;n({...Y,sections:Y.sections.filter(ie=>ie.id!==I),originalOrder:Y.originalOrder.filter(ie=>ie!==I)}),Oe(ie=>{const ce=new Set(ie);return ce.delete(I),ce})},180)},[n]),Ve=I=>{const Y=I.originalRect,ie=I.currentRect;return Math.abs(Y.x-ie.x)>1||Math.abs(Y.y-ie.y)>1||Math.abs(Y.width-ie.width)>1||Math.abs(Y.height-ie.height)>1},nt=I=>{const Y=I.originalRect,ie=I.currentRect;return Math.abs(Y.x-ie.x)>1||Math.abs(Y.y-ie.y)>1},Ye=I=>{const Y=I.originalRect,ie=I.currentRect;return Math.abs(Y.width-ie.width)>1||Math.abs(Y.height-ie.height)>1};for(const I of v)qe.current.has(I.id)||(nt(I)?qe.current.set(I.id,"move"):Ye(I)&&qe.current.set(I.id,"resize"));for(const I of qe.current.keys())v.some(Y=>Y.id===I)||qe.current.delete(I);const Re=v.filter(I=>{try{if(Q.has(I.id)||k.has(I.id))return!0;const Y=document.querySelector(I.selector);if(!Y)return!1;const ie=Y.getBoundingClientRect(),ce=I.originalRect;return Math.abs(ie.width-ce.width)+Math.abs(ie.height-ce.height)<200}catch{return!1}}),ut=Re.filter(I=>Ve(I)),St=Re.filter(I=>!Ve(I)),Ht=new Set(ut.map(I=>I.id));for(const I of Me.current)Ht.has(I)||Me.current.delete(I);const Pe=[...Ht].sort().join(",");for(const I of ut)ft.current.set(I.id,{currentRect:I.currentRect,originalRect:I.originalRect,isFixed:I.isFixed});return b.useEffect(()=>{const I=ve.current;ve.current=Ht;const Y=new Map;for(const ie of I)if(!Ht.has(ie)){if(!v.some(ze=>ze.id===ie))continue;const ce=ft.current.get(ie);ce&&(Y.set(ie,{orig:ce.originalRect,target:ce.currentRect,isFixed:ce.isFixed}),ft.current.delete(ie))}if(Y.size>0){Qe(ce=>{const ze=new Map(ce);for(const[Ce,me]of Y)ze.set(Ce,me);return ze});const ie=tt(()=>{Qe(ce=>{const ze=new Map(ce);for(const Ce of Y.keys())ze.delete(Ce);return ze})},250);return()=>clearTimeout(ie)}},[Pe,v]),r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:`${ne.rearrangeOverlay} ${i?"":ne.light} ${l?ne.overlayExiting:""}${c?` ${c}`:""}`,"data-feedback-toolbar":!0,children:[ke&&r.jsx("div",{className:ne.hoverHighlight,style:{left:ke.x,top:ke.y,width:ke.w,height:ke.h}}),St.map(I=>{const Y=I.currentRect,ie=I.isFixed?Y.y:Y.y-D,ce=_p,ze=k.has(I.id);return r.jsxs("div",{"data-rearrange-section":I.id,className:`${ne.sectionOutline} ${ze?ne.selected:""} ${O||l||Q.has(I.id)?ne.exiting:""}`,style:{left:Y.x,top:ie,width:Y.width,height:Y.height,borderColor:ce.border,backgroundColor:ce.bg,...dn?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:Ce=>V(Ce,I.id),onDoubleClick:()=>xe(I.id),children:[r.jsx("span",{className:ne.sectionLabel,style:{backgroundColor:ce.pill},children:I.label}),r.jsx("span",{className:`${ne.sectionAnnotation} ${I.note?ne.annotationVisible:""}`,children:(I.note&&oe.current.set(I.id,I.note),I.note||oe.current.get(I.id)||"")}),r.jsxs("span",{className:ne.sectionDimensions,children:[Math.round(Y.width)," × ",Math.round(Y.height)]}),r.jsx("div",{className:ne.deleteButton,onMouseDown:Ce=>Ce.stopPropagation(),onClick:()=>Ge(I.id),children:"✕"}),mp.map(Ce=>r.jsx("div",{className:`${ne.handle} ${ne[`handle${Ce.charAt(0).toUpperCase()}${Ce.slice(1)}`]}`,onMouseDown:me=>Te(me,I.id,Ce)},Ce))]},I.id)}),ut.map(I=>{const Y=I.currentRect,ie=I.isFixed?Y.y:Y.y-D,ce=k.has(I.id),ze=nt(I),Ce=Ye(I);if(u&&!ce)return null;const it=!Me.current.has(I.id);return it&&Me.current.add(I.id),r.jsxs("div",{"data-rearrange-section":I.id,className:`${ne.ghostOutline} ${ce?ne.selected:""} ${O||l||Q.has(I.id)?ne.exiting:""}`,style:{left:Y.x,top:ie,width:Y.width,height:Y.height,...dn?{}:{opacity:0,animation:"none",transition:"none"},...it?{}:{animation:"none"}},onMouseDown:ht=>V(ht,I.id),onDoubleClick:()=>xe(I.id),children:[r.jsx("span",{className:ne.sectionLabel,style:{backgroundColor:_p.pill},children:I.label}),r.jsx("span",{className:`${ne.sectionAnnotation} ${I.note?ne.annotationVisible:""}`,children:(I.note&&oe.current.set(I.id,I.note),I.note||oe.current.get(I.id)||"")}),r.jsxs("span",{className:ne.sectionDimensions,children:[Math.round(Y.width)," × ",Math.round(Y.height)]}),r.jsx("div",{className:ne.deleteButton,onMouseDown:ht=>ht.stopPropagation(),onClick:()=>Ge(I.id),children:"✕"}),mp.map(ht=>r.jsx("div",{className:`${ne.handle} ${ne[`handle${ht.charAt(0).toUpperCase()}${ht.slice(1)}`]}`,onMouseDown:jt=>Te(jt,I.id,ht)},ht)),r.jsx("span",{className:ne.ghostBadge,children:(()=>{const ht=qe.current.get(I.id);if(ze&&Ce){const[jt,st]=ht==="resize"?["Resize","Move"]:["Move","Resize"];return r.jsxs(r.Fragment,{children:["Suggested ",jt," ",r.jsxs("span",{className:ne.ghostBadgeExtra,children:["& ",st]})]})}return`Suggested ${Ce?"Resize":"Move"}`})()})]},I.id)})]}),!u&&(()=>{const I=[];for(const Y of ut){const ie=rt.get(Y.id);I.push({id:Y.id,orig:Y.originalRect,target:ie||Y.currentRect,isFixed:Y.isFixed,isSelected:k.has(Y.id),isExiting:Q.has(Y.id)})}for(const[Y,ie]of rt)if(!I.some(ce=>ce.id===Y)){const ce=v.find(ze=>ze.id===Y);ce&&I.push({id:Y,orig:ce.originalRect,target:ie,isFixed:ce.isFixed,isSelected:k.has(Y)})}for(const[Y,ie]of en)I.some(ce=>ce.id===Y)||I.push({id:Y,orig:ie.orig,target:ie.target,isFixed:ie.isFixed,isSelected:!1,isExiting:!0});return I.length===0?null:r.jsxs("svg",{className:`${ne.connectorSvg} ${O||l?ne.connectorExiting:""}`,children:[I.map(({id:Y,orig:ie,target:ce,isFixed:ze,isSelected:Ce,isExiting:me})=>{const it=ie.x+ie.width/2,ht=(ze?ie.y:ie.y-D)+ie.height/2,jt=ce.x+ce.width/2,st=(ze?ce.y:ce.y-D)+ce.height/2,Ae=jt-it,wt=st-ht,Mt=Math.sqrt(Ae*Ae+wt*wt);if(Mt<2)return null;const Wt=Math.min(1,Mt/40),De=Math.min(Mt*.3,60),yt=Mt>0?-wt/Mt:0,xt=Mt>0?Ae/Mt:0,_t=(it+jt)/2+yt*De,fn=(ht+st)/2+xt*De,Fe=rt.has(Y),Ot=Fe||Ce?1:.4,vn=Fe||Ce?1:.5;return r.jsxs("g",{className:me?ne.connectorExiting:"",children:[r.jsx("path",{className:ne.connectorLine,d:`M ${it} ${ht} Q ${_t} ${fn} ${jt} ${st}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:Ot*Wt}),r.jsx("circle",{className:ne.connectorDot,cx:it,cy:ht,r:4*Wt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:vn*Wt,filter:"url(#connDotShadow)"}),r.jsx("circle",{className:ne.connectorDot,cx:jt,cy:st,r:4*Wt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:vn*Wt,filter:"url(#connDotShadow)"})]},`conn-${Y}`)}),r.jsx("defs",{children:r.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:r.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),z&&(()=>{const I=v.find(st=>st.id===z);if(!I)return null;const Y=I.currentRect,ie=I.isFixed?Y.y:Y.y-D,ce=Y.x+Y.width/2,ze=ie-8,Ce=ie+Y.height+8,me=ze>200,it=Ce<window.innerHeight-100,ht=Math.max(160,Math.min(window.innerWidth-160,ce));let jt;return me?jt={left:ht,bottom:window.innerHeight-ze}:it?jt={left:ht,top:Ce}:jt={left:ht,top:Math.max(80,window.innerHeight/2-80)},r.jsx(_u,{element:I.label,placeholder:"Add a note about this section",initialValue:I.note??"",submitLabel:fe.current?"Save":"Set",onSubmit:re,onCancel:he,onDelete:fe.current?()=>{re("")}:void 0,isExiting:ye,lightMode:!i,style:jt})})(),ue&&r.jsx("div",{className:ne.sizeIndicator,style:{left:ue.x,top:ue.y},"data-feedback-toolbar":!0,children:ue.text}),be.map((I,Y)=>r.jsx("div",{className:ne.guideLine,style:I.axis==="x"?{position:"fixed",left:I.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:I.pos-D,width:"100vw",height:1}},`${I.axis}-${I.pos}-${Y}`))]})}var ih=new Set(["script","style","noscript","link","meta","br","hr"]);function r4(){const o=document.querySelector("main")||document.body,n=[],i=Array.from(o.children),l=o!==document.body&&i.length<3?Array.from(document.body.children):i;for(const c of l){if(!(c instanceof HTMLElement)||ih.has(c.tagName.toLowerCase())||c.hasAttribute("data-feedback-toolbar"))continue;const u=window.getComputedStyle(c);if(u.display==="none"||u.visibility==="hidden")continue;const _=c.getBoundingClientRect();if(!(_.height<10||_.width<10)){n.push({label:mu(c),selector:ta(c),top:_.top,bottom:_.bottom,left:_.left,right:_.right,area:_.width*_.height});for(const g of Array.from(c.children)){if(!(g instanceof HTMLElement)||ih.has(g.tagName.toLowerCase())||g.hasAttribute("data-feedback-toolbar"))continue;const h=window.getComputedStyle(g);if(h.display==="none"||h.visibility==="hidden")continue;const m=g.getBoundingClientRect();m.height<10||m.width<10||n.push({label:mu(g),selector:ta(g),top:m.top,bottom:m.bottom,left:m.left,right:m.right,area:m.width*m.height})}}}return n}function c4(o){const n=window.scrollY;return o.map(({label:i,selector:l,rect:c})=>{const u=c.y-n;return{label:i,selector:l,top:u,bottom:u+c.height,left:c.x,right:c.x+c.width,area:c.width*c.height}})}function u4(o){const n=window.scrollY,i=o.y-n,l=o.x;return{top:i,bottom:i+o.height,left:l,right:l+o.width,area:o.width*o.height}}function ah(o,n){const i=n?c4(n):r4(),l=u4(o);let c=null,u=null,_=null,g=null,h=null;for(const k of i){if(Math.abs(k.left-l.left)<2&&Math.abs(k.top-l.top)<2&&Math.abs(k.right-k.left-o.width)<2&&Math.abs(k.bottom-k.top-o.height)<2)continue;k.left<=l.left+2&&k.right>=l.right-2&&k.top<=l.top+2&&k.bottom>=l.bottom-2&&k.area>l.area*1.5&&(!h||k.area<h._area)&&(h={label:k.label,selector:k.selector,_area:k.area});const E=l.right>k.left+5&&l.left<k.right-5,O=l.bottom>k.top+5&&l.top<k.bottom-5;if(E&&k.bottom<=l.top+5){const B=Math.round(l.top-k.bottom);(!c||B<c._dist)&&(c={label:k.label,selector:k.selector,gap:Math.max(0,B),_dist:B})}if(E&&k.top>=l.bottom-5){const B=Math.round(k.top-l.bottom);(!u||B<u._dist)&&(u={label:k.label,selector:k.selector,gap:Math.max(0,B),_dist:B})}if(O&&k.right<=l.left+5){const B=Math.round(l.left-k.right);(!_||B<_._dist)&&(_={label:k.label,selector:k.selector,gap:Math.max(0,B),_dist:B})}if(O&&k.left>=l.right-5){const B=Math.round(k.left-l.right);(!g||B<g._dist)&&(g={label:k.label,selector:k.selector,gap:Math.max(0,B),_dist:B})}}const m=window.innerWidth,p=window.innerHeight,y=f4(o,m),v=k=>k?{label:k.label,selector:k.selector,gap:k.gap}:null,C=d4(l,o,m,p,h?{label:h.label,selector:h.selector,_area:h._area}:null,i);return{above:v(c),below:v(u),left:v(_),right:v(g),alignment:y,containedIn:h?{label:h.label,selector:h.selector}:null,outOfBounds:C}}function d4(o,n,i,l,c,u){const _={};let g=!1;const h=[];if(o.left<-2&&h.push("left"),o.right>i+2&&h.push("right"),o.top<-2&&h.push("top"),o.bottom>l+2&&h.push("bottom"),h.length>0&&(_.viewport=h,g=!0),c){const m=u.find(p=>p.label===c.label&&p.selector===c.selector&&Math.abs(p.area-c._area)<10);if(m){const p=[];o.left<m.left-2&&p.push("left"),o.right>m.right+2&&p.push("right"),o.top<m.top-2&&p.push("top"),o.bottom>m.bottom+2&&p.push("bottom"),p.length>0&&(_.container={label:c.label,edges:p},g=!0)}}return g?_:null}function f4(o,n){if(o.width/n>.85)return"full-width";const l=o.x+o.width/2,c=n/2,u=l-c,_=n*.08;return Math.abs(u)<_?"center":u<0?"left":"right"}function _y(o){switch(o){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function my(o,n={}){const i=[];o.above&&i.push(`Below \`${o.above.label}\`${o.above.gap>0?` (${o.above.gap}px gap)`:""}`),o.below&&i.push(`Above \`${o.below.label}\`${o.below.gap>0?` (${o.below.gap}px gap)`:""}`),n.includeLeftRight&&(o.left&&i.push(`Right of \`${o.left.label}\`${o.left.gap>0?` (${o.left.gap}px gap)`:""}`),o.right&&i.push(`Left of \`${o.right.label}\`${o.right.gap>0?` (${o.right.gap}px gap)`:""}`));const l=_y(o.alignment);return o.containedIn?i.push(`${l.charAt(0).toUpperCase()+l.slice(1)} in \`${o.containedIn.label}\``):i.push(`${l.charAt(0).toUpperCase()+l.slice(1)} in page`),n.includePixelRef&&n.pixelRef&&i.push(`Pixel ref: \`${n.pixelRef}\``),o.outOfBounds&&(o.outOfBounds.viewport&&i.push(`**Outside viewport** (${o.outOfBounds.viewport.join(", ")} edge${o.outOfBounds.viewport.length>1?"s":""})`),o.outOfBounds.container&&i.push(`**Outside \`${o.outOfBounds.container.label}\`** (${o.outOfBounds.container.edges.join(", ")} edge${o.outOfBounds.container.edges.length>1?"s":""})`)),i}function h4(o,n,i){var u,_;const l=[];o.above&&l.push(`below \`${o.above.label}\``),o.below&&l.push(`above \`${o.below.label}\``),o.left&&l.push(`right of \`${o.left.label}\``),o.right&&l.push(`left of \`${o.right.label}\``),o.containedIn&&l.push(`inside \`${o.containedIn.label}\``),l.push(_y(o.alignment)),(u=o.outOfBounds)!=null&&u.viewport&&l.push(`**outside viewport** (${o.outOfBounds.viewport.join(", ")})`),(_=o.outOfBounds)!=null&&_.container&&l.push(`**outside \`${o.outOfBounds.container.label}\`** (${o.outOfBounds.container.edges.join(", ")})`);const c=i?`, ${Math.round(i.width)}×${Math.round(i.height)}px`:"";return`at (${Math.round(n.x)}, ${Math.round(n.y)})${c}: ${l.join(", ")}`}var xp=15;function bp(o){if(o.length<2)return[];const n=[],i=new Set;for(let l=0;l<o.length;l++){if(i.has(l))continue;const c=[l];for(let u=l+1;u<o.length;u++)i.has(u)||Math.abs(o[l].rect.y-o[u].rect.y)<xp&&c.push(u);if(c.length>=2){const u=c.map(h=>o[h]);u.sort((h,m)=>h.rect.x-m.rect.x);const _=[];for(let h=0;h<u.length-1;h++)_.push(Math.round(u[h+1].rect.x-(u[h].rect.x+u[h].rect.width)));const g=Math.round(u.reduce((h,m)=>h+m.rect.y,0)/u.length);n.push({labels:u.map(h=>h.label),type:"row",sharedEdge:g,gaps:_,avgGap:_.length?Math.round(_.reduce((h,m)=>h+m,0)/_.length):0}),c.forEach(h=>i.add(h))}}for(let l=0;l<o.length;l++){if(i.has(l))continue;const c=[l];for(let u=l+1;u<o.length;u++)i.has(u)||Math.abs(o[l].rect.x-o[u].rect.x)<xp&&c.push(u);if(c.length>=2){const u=c.map(h=>o[h]);u.sort((h,m)=>h.rect.y-m.rect.y);const _=[];for(let h=0;h<u.length-1;h++)_.push(Math.round(u[h+1].rect.y-(u[h].rect.y+u[h].rect.height)));const g=Math.round(u.reduce((h,m)=>h+m.rect.x,0)/u.length);n.push({labels:u.map(h=>h.label),type:"column",sharedEdge:g,gaps:_,avgGap:_.length?Math.round(_.reduce((h,m)=>h+m,0)/_.length):0}),c.forEach(h=>i.add(h))}}return n}function _4(o){if(o.length<2)return[];const n=bp(o.map(_=>({label:_.label,rect:_.originalRect}))),i=bp(o.map(_=>({label:_.label,rect:_.currentRect}))),l=[],c=new Set;for(const _ of n){const g=new Set(_.labels);let h=null,m=0;for(const p of i){const y=p.labels.filter(v=>g.has(v)).length;y>=2&&y>m&&(h=p,m=y)}if(h){const p=h.labels.filter(v=>g.has(v)),y=p.join(", ");if(h.type!==_.type){const v=_.type==="row"?"y":"x",C=h.type==="row"?"y":"x";l.push(`**${y}**: ${_.type} (${v}≈${_.sharedEdge}, ${_.avgGap}px gaps) → ${h.type} (${C}≈${h.sharedEdge}, ${h.avgGap}px gaps)`)}else if(Math.abs(_.sharedEdge-h.sharedEdge)>20||Math.abs(_.avgGap-h.avgGap)>5){const v=_.type==="row"?"y":"x",C=Math.abs(_.sharedEdge-h.sharedEdge)>20?` ${v}: ${_.sharedEdge} → ${h.sharedEdge}`:"",k=Math.abs(_.avgGap-h.avgGap)>5?` gaps: ${_.avgGap}px → ${h.avgGap}px`:"";l.push(`**${y}**: ${_.type} shifted —${C}${k}`)}p.forEach(v=>c.add(v))}else{const p=_.labels.join(", "),y=_.type==="row"?"y":"x";l.push(`**${p}**: ${_.type} (${y}≈${_.sharedEdge}) dissolved`),_.labels.forEach(v=>c.add(v))}}for(const _ of i){if(_.labels.every(m=>c.has(m))||_.labels.filter(m=>!c.has(m)).length<2)continue;if(!n.some(m=>m.labels.filter(y=>_.labels.includes(y)).length>=2)){const m=_.type==="row"?"y":"x";l.push(`**${_.labels.join(", ")}**: new ${_.type} (${m}≈${_.sharedEdge}, ${_.avgGap}px gaps)`),_.labels.forEach(p=>c.add(p))}}const u=o.filter(_=>!c.has(_.label));if(u.length>=2){const _={};for(const g of u){const h=Math.round(g.currentRect.x/5)*5;(_[h]??(_[h]=[])).push(g.label)}for(const[g,h]of Object.entries(_))h.length>=2&&l.push(`**${h.join(", ")}**: shared left edge at x≈${g}`)}return l}function py(o){if(typeof document>"u")return{viewport:o,contentArea:null};const n=[],i=new Set,l=g=>{i.has(g)||g instanceof HTMLElement&&(g.hasAttribute("data-feedback-toolbar")||ih.has(g.tagName.toLowerCase())||(i.add(g),n.push(g)))},c=document.querySelector("main");c&&l(c);const u=document.querySelector("[role='main']");u&&l(u);for(const g of Array.from(document.body.children))if(l(g),g.children){for(const h of Array.from(g.children))if(l(h),h.children)for(const m of Array.from(h.children))l(m)}let _=null;for(const g of n){const h=g.getBoundingClientRect();if(h.height<50)continue;const m=getComputedStyle(g);if(m.maxWidth&&m.maxWidth!=="none"&&m.maxWidth!=="0px"){(!_||h.width<_.rect.width)&&(_={el:g,rect:h});continue}!_&&h.width<o.width-20&&h.width>100&&(_={el:g,rect:h})}if(_){const{el:g,rect:h}=_;return{viewport:o,contentArea:{width:Math.round(h.width),left:Math.round(h.left),right:Math.round(h.right),centerX:Math.round(h.left+h.width/2),selector:ta(g)}}}return{viewport:o,contentArea:null}}function m4(o){if(typeof document>"u")return null;const n=document.querySelector(o);if(!(n!=null&&n.parentElement))return null;const i=getComputedStyle(n.parentElement),l={parentDisplay:i.display,parentSelector:ta(n.parentElement)};return i.display.includes("flex")&&(l.flexDirection=i.flexDirection),i.display.includes("grid")&&i.gridTemplateColumns!=="none"&&(l.gridCols=i.gridTemplateColumns),i.gap&&i.gap!=="normal"&&i.gap!=="0px"&&(l.gap=i.gap),l}function gy(o,n){const i=n.contentArea,l=i?i.width:n.viewport.width,c=i?i.left:0,u=i?i.centerX:Math.round(n.viewport.width/2),_=Math.round(o.x-c),g=Math.round(c+l-(o.x+o.width)),h=(o.width/l*100).toFixed(1),m=o.x+o.width/2,p=Math.abs(m-u)<20,y=o.width/l>.95,v=[];return y?v.push("`width: 100%` of container"):v.push(`left \`${_}px\` in container, right \`${g}px\`, width \`${h}%\` (\`${Math.round(o.width)}px\`)`),p&&!y&&v.push("centered — `margin-inline: auto`"),v.join(" — ")}function yy(o){const{viewport:n,contentArea:i}=o;let l=`### Reference Frame
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
`,l}function p4(o){const n=m4(o);if(!n)return null;let i=`\`${n.parentDisplay}\``;return n.flexDirection&&(i+=`, flex-direction: \`${n.flexDirection}\``),n.gridCols&&(i+=`, grid-template-columns: \`${n.gridCols}\``),n.gap&&(i+=`, gap: \`${n.gap}\``),`Parent: ${i} (\`${n.parentSelector}\`)`}function vp(o,n,i,l="standard"){var O,B,J,F;if(o.length===0)return"";const c=[...o].sort((z,de)=>Math.abs(z.y-de.y)<20?z.x-de.x:z.y-de.y);let u="";if(i!=null&&i.blankCanvas?(u+=`## Wireframe: New Page

`,i.wireframePurpose&&(u+=`> **Purpose:** ${i.wireframePurpose}
>
`),u+=`> ${o.length} component${o.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):u+=`## Design Layout

> ${o.length} component${o.length!==1?"s":""} placed

`,l==="compact")return u+=`### Components
`,c.forEach((z,de)=>{var G;const ye=((G=no[z.type])==null?void 0:G.label)||z.type;u+=`${de+1}. **${ye}** — \`${Math.round(z.width)}×${Math.round(z.height)}px\` at \`(${Math.round(z.x)}, ${Math.round(z.y)})\`
`}),u;const _=py(n);u+=yy(_),u+=`### Components
`,c.forEach((z,de)=>{var Q;const ye=((Q=no[z.type])==null?void 0:Q.label)||z.type,G={x:z.x,y:z.y,width:z.width,height:z.height};u+=`${de+1}. **${ye}** — \`${Math.round(z.width)}×${Math.round(z.height)}px\` at \`(${Math.round(z.x)}, ${Math.round(z.y)})\`
`;const fe=ah(G),he=my(fe,{includeLeftRight:l==="detailed"||l==="forensic"});for(const Oe of he)u+=`   - ${Oe}
`;const re=gy(G,_);re&&(u+=`   - CSS: ${re}
`)}),u+=`
### Layout Analysis
`;const g=[];for(const z of c){const de=g.find(ye=>Math.abs(ye.y-z.y)<30);de?de.items.push(z):g.push({y:z.y,items:[z]})}if(g.sort((z,de)=>z.y-de.y),g.forEach((z,de)=>{z.items.sort((G,fe)=>G.x-fe.x);const ye=z.items.map(G=>{var fe;return((fe=no[G.type])==null?void 0:fe.label)||G.type});if(z.items.length===1){const fe=z.items[0].width>n.width*.8;u+=`- Row ${de+1} (y≈${Math.round(z.y)}): ${ye[0]}${fe?" — full width":""}
`}else u+=`- Row ${de+1} (y≈${Math.round(z.y)}): ${ye.join(" | ")} — ${z.items.length} items side by side
`}),l==="detailed"||l==="forensic"){u+=`
### Spacing & Gaps
`;for(let z=0;z<c.length-1;z++){const de=c[z],ye=c[z+1],G=((O=no[de.type])==null?void 0:O.label)||de.type,fe=((B=no[ye.type])==null?void 0:B.label)||ye.type,xe=Math.round(ye.y-(de.y+de.height)),he=Math.round(ye.x-(de.x+de.width));Math.abs(de.y-ye.y)<30?u+=`- ${G} → ${fe}: \`${he}px\` horizontal gap
`:u+=`- ${G} → ${fe}: \`${xe}px\` vertical gap
`}if(l==="forensic"&&c.length>2){u+=`
### All Pairwise Gaps
`;for(let z=0;z<c.length;z++)for(let de=z+1;de<c.length;de++){const ye=c[z],G=c[de],fe=((J=no[ye.type])==null?void 0:J.label)||ye.type,xe=((F=no[G.type])==null?void 0:F.label)||G.type,he=Math.round(G.y-(ye.y+ye.height)),re=Math.round(G.x-(ye.x+ye.width));u+=`- ${fe} ↔ ${xe}: h=\`${re}px\` v=\`${he}px\`
`}}l==="forensic"&&(u+=`
### Z-Order (placement order)
`,o.forEach((z,de)=>{var G;const ye=((G=no[z.type])==null?void 0:G.label)||z.type;u+=`${de}. ${ye} at \`(${Math.round(z.x)}, ${Math.round(z.y)})\`
`}))}u+=`
### Suggested Implementation
`;const h=c.some(z=>z.type==="navigation"),m=c.some(z=>z.type==="hero"),p=c.some(z=>z.type==="sidebar"),y=c.some(z=>z.type==="footer"),v=c.filter(z=>z.type==="card"),C=c.filter(z=>z.type==="form"),k=c.filter(z=>z.type==="table"),E=c.filter(z=>z.type==="modal");if(h&&(u+=`- Top navigation bar with logo + nav links + CTA
`),m&&(u+=`- Hero section with heading, subtext, and call-to-action
`),p&&(u+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`),v.length>1?u+=`- ${v.length}-column card grid — use CSS Grid or Flexbox
`:v.length===1&&(u+=`- Card component with image + content area
`),C.length>0&&(u+=`- ${C.length} form${C.length>1?"s":""} — add proper labels, validation, and submit handling
`),k.length>0&&(u+=`- Data table — consider sortable columns and pagination
`),E.length>0&&(u+=`- Modal dialog — add overlay backdrop and focus trapping
`),y&&(u+=`- Multi-column footer with links
`),l==="detailed"||l==="forensic"){if(u+=`
### CSS Suggestions
`,p){const z=c.find(de=>de.type==="sidebar");u+=`- \`display: grid; grid-template-columns: ${Math.round(z.width)}px 1fr;\`
`}if(v.length>1){const z=Math.round(v[0].width);u+=`- \`display: grid; grid-template-columns: repeat(${v.length}, ${z}px); gap: 16px;\`
`}h&&(u+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return u}function wp(o,n="standard",i){const{sections:l}=o,c=[];for(const p of l){const y=p.originalRect,v=p.currentRect,C=Math.abs(y.x-v.x)>1||Math.abs(y.y-v.y)>1,k=Math.abs(y.width-v.width)>1||Math.abs(y.height-v.height)>1;if(!C&&!k){n==="forensic"&&c.push({section:p,posMoved:!1,sizeChanged:!1});continue}c.push({section:p,posMoved:C,sizeChanged:k})}if(c.length===0||n!=="forensic"&&c.every(p=>!p.posMoved&&!p.sizeChanged))return"";let u=`## Suggested Layout Changes

`;const _=i?i.width:typeof window<"u"?window.innerWidth:0,g=i?i.height:typeof window<"u"?window.innerHeight:0,h=py({width:_,height:g});n!=="compact"&&(u+=yy(h)),n==="forensic"&&(u+=`> Detected at: \`${new Date(o.detectedAt).toISOString()}\`
`,u+=`> Total sections: ${l.length}

`);const m=p=>l.map(y=>({label:y.label,selector:y.selector,rect:p==="original"?y.originalRect:y.currentRect}));u+=`**Changes:**
`;for(const{section:p,posMoved:y,sizeChanged:v}of c){const C=p.originalRect,k=p.currentRect;if(!y&&!v){u+=`- ${p.label} — unchanged at (${Math.round(k.x)}, ${Math.round(k.y)}) ${Math.round(k.width)}×${Math.round(k.height)}px
`;continue}if(n==="compact"){y&&v?u+=`- Suggested: move **${p.label}** to (${Math.round(k.x)}, ${Math.round(k.y)}) ${Math.round(k.width)}×${Math.round(k.height)}px
`:y?u+=`- Suggested: move **${p.label}** to (${Math.round(k.x)}, ${Math.round(k.y)})
`:u+=`- Suggested: resize **${p.label}** to ${Math.round(k.width)}×${Math.round(k.height)}px
`;continue}if(y&&v?u+=`- Suggested: move and resize **${p.label}**
`:y?u+=`- Suggested: move **${p.label}**
`:u+=`- Suggested: resize **${p.label}** from ${Math.round(C.width)}×${Math.round(C.height)}px to ${Math.round(k.width)}×${Math.round(k.height)}px
`,y){const O=ah(C,m("original")),B=ah(k,m("current")),J=v?{width:C.width,height:C.height}:void 0;u+=`  - Currently ${h4(O,{x:C.x,y:C.y},J)}
`;const F=v?{width:k.width,height:k.height}:void 0,z=`at (${Math.round(k.x)}, ${Math.round(k.y)})`,de=F?`, ${Math.round(F.width)}×${Math.round(F.height)}px`:"",G=my(B,{includeLeftRight:n==="detailed"||n==="forensic"});if(G.length>0){u+=`  - Suggested position ${z}${de}: ${G[0]}
`;for(let xe=1;xe<G.length;xe++)u+=`    ${G[xe]}
`}else u+=`  - Suggested position ${z}${de}
`;const fe=gy(k,h);fe&&(u+=`  - CSS: ${fe}
`)}const E=p4(p.selector);if(E&&(u+=`  - ${E}
`),u+=`  - Selector: \`${p.selector}\`
`,n==="detailed"||n==="forensic"){const O=p.className?`${p.tagName}.${p.className.split(" ")[0]}`:p.tagName;O!==p.selector&&(u+=`  - Element: \`${O}\`
`),p.role&&(u+=`  - Role: \`${p.role}\`
`),n==="forensic"&&p.textSnippet&&(u+=`  - Text: "${p.textSnippet}"
`)}n==="forensic"&&(u+=`  - Original rect: \`{ x: ${Math.round(C.x)}, y: ${Math.round(C.y)}, w: ${Math.round(C.width)}, h: ${Math.round(C.height)} }\`
`,u+=`  - Current rect: \`{ x: ${Math.round(k.x)}, y: ${Math.round(k.y)}, w: ${Math.round(k.width)}, h: ${Math.round(k.height)} }\`
`)}if(n!=="compact"){const p=c.filter(v=>v.posMoved).map(v=>({label:v.section.label,originalRect:v.section.originalRect,currentRect:v.section.currentRect})),y=_4(p);if(y.length>0){u+=`
### Layout Summary
`;for(const v of y)u+=`- ${v}
`}}if(n!=="compact"&&l.length>1){u+=`
### All Sections (current positions)
`;const p=[...l].sort((y,v)=>Math.abs(y.currentRect.y-v.currentRect.y)<20?y.currentRect.x-v.currentRect.x:y.currentRect.y-v.currentRect.y);for(const y of p){const v=y.currentRect,C=Math.abs(v.x-y.originalRect.x)>1||Math.abs(v.y-y.originalRect.y)>1||Math.abs(v.width-y.originalRect.width)>1||Math.abs(v.height-y.originalRect.height)>1;u+=`- ${y.label}: \`${Math.round(v.width)}×${Math.round(v.height)}px\` at \`(${Math.round(v.x)}, ${Math.round(v.y)})\`${C?" ← suggested":""}
`}}return u}var lh="feedback-annotations-",xy=7;function pu(o){return`${lh}${o}`}function Lf(o){if(typeof window>"u")return[];try{const n=localStorage.getItem(pu(o));if(!n)return[];const i=JSON.parse(n),l=Date.now()-xy*24*60*60*1e3;return i.filter(c=>!c.timestamp||c.timestamp>l)}catch{return[]}}function by(o,n){if(!(typeof window>"u"))try{localStorage.setItem(pu(o),JSON.stringify(n))}catch{}}function g4(){const o=new Map;if(typeof window>"u")return o;try{const n=Date.now()-xy*24*60*60*1e3;for(let i=0;i<localStorage.length;i++){const l=localStorage.key(i);if(l!=null&&l.startsWith(lh)){const c=l.slice(lh.length),u=localStorage.getItem(l);if(u){const g=JSON.parse(u).filter(h=>!h.timestamp||h.timestamp>n);g.length>0&&o.set(c,g)}}}}catch{}return o}function sr(o,n,i){const l=n.map(c=>({...c,_syncedTo:i}));by(o,l)}var Eh="agentation-design-";function y4(o){if(typeof window>"u")return[];try{const n=localStorage.getItem(`${Eh}${o}`);return n?JSON.parse(n):[]}catch{return[]}}function x4(o,n){if(!(typeof window>"u"))try{localStorage.setItem(`${Eh}${o}`,JSON.stringify(n))}catch{}}function b4(o){if(!(typeof window>"u"))try{localStorage.removeItem(`${Eh}${o}`)}catch{}}var Th="agentation-rearrange-";function v4(o){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${Th}${o}`);return n?JSON.parse(n):null}catch{return null}}function w4(o,n){if(!(typeof window>"u"))try{localStorage.setItem(`${Th}${o}`,JSON.stringify(n))}catch{}}function S4(o){if(!(typeof window>"u"))try{localStorage.removeItem(`${Th}${o}`)}catch{}}var Rh="agentation-wireframe-";function k4(o){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${Rh}${o}`);return n?JSON.parse(n):null}catch{return null}}function Sp(o,n){if(!(typeof window>"u"))try{localStorage.setItem(`${Rh}${o}`,JSON.stringify(n))}catch{}}function Kc(o){if(!(typeof window>"u"))try{localStorage.removeItem(`${Rh}${o}`)}catch{}}var vy="agentation-session-";function Dh(o){return`${vy}${o}`}function C4(o){if(typeof window>"u")return null;try{return localStorage.getItem(Dh(o))}catch{return null}}function Of(o,n){if(!(typeof window>"u"))try{localStorage.setItem(Dh(o),n)}catch{}}function j4(o){if(!(typeof window>"u"))try{localStorage.removeItem(Dh(o))}catch{}}var wy=`${vy}toolbar-hidden`;function M4(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(wy)==="1"}catch{return!1}}function E4(o){if(!(typeof window>"u"))try{o&&sessionStorage.setItem(wy,"1")}catch{}}async function zf(o,n){const i=await fetch(`${o}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(!i.ok)throw new Error(`Failed to create session: ${i.status}`);return i.json()}async function kp(o,n){const i=await fetch(`${o}/sessions/${n}`);if(!i.ok)throw new Error(`Failed to get session: ${i.status}`);return i.json()}async function Ga(o,n,i){const l=await fetch(`${o}/sessions/${n}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!l.ok)throw new Error(`Failed to sync annotation: ${l.status}`);return l.json()}async function Cp(o,n,i){const l=await fetch(`${o}/annotations/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!l.ok)throw new Error(`Failed to update annotation: ${l.status}`);return l.json()}async function Ci(o,n){const i=await fetch(`${o}/annotations/${n}`,{method:"DELETE"});if(!i.ok)throw new Error(`Failed to delete annotation: ${i.status}`)}var Ut={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},jp=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),Mp=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],T4=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function R4(o){const n=(o==null?void 0:o.mode)??"filtered";let i=jp;if(o!=null&&o.skipExact){const l=o.skipExact instanceof Set?o.skipExact:new Set(o.skipExact);i=new Set([...jp,...l])}return{maxComponents:(o==null?void 0:o.maxComponents)??6,maxDepth:(o==null?void 0:o.maxDepth)??30,mode:n,skipExact:i,skipPatterns:o!=null&&o.skipPatterns?[...Mp,...o.skipPatterns]:Mp,userPatterns:(o==null?void 0:o.userPatterns)??T4,filter:o==null?void 0:o.filter}}function D4(o){return o.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function A4(o,n=10){const i=new Set;let l=o,c=0;for(;l&&c<n;)l.className&&typeof l.className=="string"&&l.className.split(/\s+/).forEach(u=>{if(u.length>1){const _=u.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();_.length>1&&i.add(_)}}),l=l.parentElement,c++;return i}function N4(o,n){const i=D4(o);for(const l of n){if(l===i)return!0;const c=i.split("-").filter(_=>_.length>2),u=l.split("-").filter(_=>_.length>2);for(const _ of c)for(const g of u)if(_===g||_.includes(g)||g.includes(_))return!0}return!1}function L4(o,n,i,l){if(i.filter)return i.filter(o,n);switch(i.mode){case"all":return!0;case"filtered":return!(i.skipExact.has(o)||i.skipPatterns.some(c=>c.test(o)));case"smart":return i.skipExact.has(o)||i.skipPatterns.some(c=>c.test(o))?!1:!!(l&&N4(o,l)||i.userPatterns.some(c=>c.test(o)));default:return!0}}var Wa=null,O4=new WeakMap;function Bf(o){return Object.keys(o).some(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$")||n.startsWith("__reactProps$"))}function z4(){if(Wa!==null)return Wa;if(typeof document>"u")return!1;if(document.body&&Bf(document.body))return Wa=!0,!0;const o=["#root","#app","#__next","[data-reactroot]"];for(const n of o){const i=document.querySelector(n);if(i&&Bf(i))return Wa=!0,!0}if(document.body){for(const n of document.body.children)if(Bf(n))return Wa=!0,!0}return Wa=!1,!1}var or={map:O4};function B4(o){return Object.keys(o).find(i=>i.startsWith("__reactFiber$")||i.startsWith("__reactInternalInstance$"))||null}function $4(o){const n=B4(o);return n?o[n]:null}function Qi(o){return o?o.displayName?o.displayName:o.name?o.name:null:null}function P4(o){var c;const{tag:n,type:i,elementType:l}=o;if(n===Ut.HostComponent||n===Ut.HostText||n===Ut.HostHoistable||n===Ut.HostSingleton||n===Ut.Fragment||n===Ut.Mode||n===Ut.Profiler||n===Ut.DehydratedFragment||n===Ut.HostRoot||n===Ut.HostPortal||n===Ut.ScopeComponent||n===Ut.OffscreenComponent||n===Ut.LegacyHiddenComponent||n===Ut.CacheComponent||n===Ut.TracingMarkerComponent||n===Ut.Throw||n===Ut.ViewTransitionComponent||n===Ut.ActivityComponent)return null;if(n===Ut.ForwardRef){const u=l;if(u!=null&&u.render){const _=Qi(u.render);if(_)return _}return u!=null&&u.displayName?u.displayName:Qi(i)}if(n===Ut.MemoComponent||n===Ut.SimpleMemoComponent){const u=l;if(u!=null&&u.type){const _=Qi(u.type);if(_)return _}return u!=null&&u.displayName?u.displayName:Qi(i)}if(n===Ut.ContextProvider){const u=i;return(c=u==null?void 0:u._context)!=null&&c.displayName?`${u._context.displayName}.Provider`:null}if(n===Ut.ContextConsumer){const u=i;return u!=null&&u.displayName?`${u.displayName}.Consumer`:null}if(n===Ut.LazyComponent){const u=l;return(u==null?void 0:u._status)===1&&u._result?Qi(u._result):null}return n===Ut.SuspenseComponent||n===Ut.SuspenseListComponent?null:n===Ut.IncompleteClassComponent||n===Ut.IncompleteFunctionComponent||n===Ut.FunctionComponent||n===Ut.ClassComponent||n===Ut.IndeterminateComponent?Qi(i):null}function I4(o){return o.length<=2||o.length<=3&&o===o.toLowerCase()}function U4(o,n){const i=R4(n),l=i.mode==="all";if(l){const h=or.map.get(o);if(h!==void 0)return h}if(!z4()){const h={path:null,components:[]};return l&&or.map.set(o,h),h}const c=i.mode==="smart"?A4(o):void 0,u=[];try{let h=$4(o),m=0;for(;h&&m<i.maxDepth&&u.length<i.maxComponents;){const p=P4(h);p&&!I4(p)&&L4(p,m,i,c)&&u.push(p),h=h.return,m++}}catch{const h={path:null,components:[]};return l&&or.map.set(o,h),h}if(u.length===0){const h={path:null,components:[]};return l&&or.map.set(o,h),h}const g={path:u.slice().reverse().map(h=>`<${h}>`).join(" "),components:u};return l&&or.map.set(o,g),g}var ir={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function H4(o){if(!o||typeof o!="object")return null;const n=Object.keys(o),i=n.find(u=>u.startsWith("__reactFiber$"));if(i)return o[i]||null;const l=n.find(u=>u.startsWith("__reactInternalInstance$"));if(l)return o[l]||null;const c=n.find(u=>{if(!u.startsWith("__react"))return!1;const _=o[u];return _&&typeof _=="object"&&"_debugSource"in _});return c&&o[c]||null}function _r(o){if(!o.type||typeof o.type=="string")return null;if(typeof o.type=="object"||typeof o.type=="function"){const n=o.type;if(n.displayName)return n.displayName;if(n.name)return n.name}return null}function Y4(o,n=50){var c;let i=o,l=0;for(;i&&l<n;){if(i._debugSource)return{source:i._debugSource,componentName:_r(i)};if((c=i._debugOwner)!=null&&c._debugSource)return{source:i._debugOwner._debugSource,componentName:_r(i._debugOwner)};i=i.return,l++}return null}function X4(o){let n=o,i=0;const l=50;for(;n&&i<l;){const c=n,u=["_debugSource","__source","_source","debugSource"];for(const _ of u){const g=c[_];if(g&&typeof g=="object"&&"fileName"in g)return{source:g,componentName:_r(n)}}if(n.memoizedProps){const _=n.memoizedProps;if(_.__source&&typeof _.__source=="object"){const g=_.__source;if(g.fileName&&g.lineNumber)return{source:{fileName:g.fileName,lineNumber:g.lineNumber,columnNumber:g.columnNumber},componentName:_r(n)}}}n=n.return,i++}return null}var Zc=new Map;function F4(o){var c;const n=o.tag,i=o.type,l=o.elementType;if(typeof i=="string"||i==null||typeof i=="function"&&((c=i.prototype)!=null&&c.isReactComponent))return null;if((n===ir.FunctionComponent||n===ir.IndeterminateComponent)&&typeof i=="function")return i;if(n===ir.ForwardRef&&l){const u=l.render;if(typeof u=="function")return u}if((n===ir.MemoComponent||n===ir.SimpleMemoComponent)&&l){const u=l.type;if(typeof u=="function")return u}return typeof i=="function"?i:null}function G4(){const o=Rn,n=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(n&&"H"in n)return{get:()=>n.H,set:l=>{n.H=l}};const i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(i){const l=i.ReactCurrentDispatcher;if(l&&"current"in l)return{get:()=>l.current,set:c=>{l.current=c}}}return null}function W4(o){const n=o.split(`
`),i=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],l=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,c=/^[^@]*@(.+?):(\d+):(\d+)$/;for(const u of n){const _=u.trim();if(!_||i.some(h=>h.test(_)))continue;const g=l.exec(_)||c.exec(_);if(g)return{fileName:g[1],line:parseInt(g[2],10),column:parseInt(g[3],10)}}return null}function q4(o){let n=o;return n=n.replace(/[?#].*$/,""),n=n.replace(/^turbopack:\/\/\/\[project\]\//,""),n=n.replace(/^webpack-internal:\/\/\/\.\//,""),n=n.replace(/^webpack-internal:\/\/\//,""),n=n.replace(/^webpack:\/\/\/\.\//,""),n=n.replace(/^webpack:\/\/\//,""),n=n.replace(/^turbopack:\/\/\//,""),n=n.replace(/^https?:\/\/[^/]+\//,""),n=n.replace(/^file:\/\/\//,"/"),n=n.replace(/^\([^)]+\)\/\.\//,""),n=n.replace(/^\.\//,""),n}function Q4(o){const n=F4(o);if(!n)return null;if(Zc.has(n))return Zc.get(n);const i=G4();if(!i)return Zc.set(n,null),null;const l=i.get();let c=null;try{const u=new Proxy({},{get(){throw new Error("probe")}});i.set(u);try{n({})}catch(_){if(_ instanceof Error&&_.message==="probe"&&_.stack){const g=W4(_.stack);g&&(c={fileName:q4(g.fileName),lineNumber:g.line,columnNumber:g.column,componentName:_r(o)||void 0})}}}finally{i.set(l)}return Zc.set(n,c),c}function V4(o,n=15){let i=o,l=0;for(;i&&l<n;){const c=Q4(i);if(c)return c;i=i.return,l++}return null}function rh(o){const n=H4(o);if(!n)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let i=Y4(n);if(i||(i=X4(n)),i!=null&&i.source)return{found:!0,source:{fileName:i.source.fileName,lineNumber:i.source.lineNumber,columnNumber:i.source.columnNumber,componentName:i.componentName||void 0},isReactApp:!0,isProduction:!1};const l=V4(n);return l?{found:!0,source:l,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function K4(o,n="path"){const{fileName:i,lineNumber:l,columnNumber:c}=o;let u=`${i}:${l}`;return c!==void 0&&(u+=`:${c}`),n==="vscode"?`vscode://file${i.startsWith("/")?"":"/"}${u}`:u}function Z4(o,n=10){let i=o,l=0;for(;i&&l<n;){const c=rh(i);if(c.found)return c;i=i.parentElement,l++}return rh(o)}var J4=`.styles-module__toolbar___wNsdK svg[fill=none],
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
}`,e3={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let o=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");o||(o=document.createElement("style"),o.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(o)),o.textContent=J4}var _e=e3,ar=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function Ep(o,n,i="standard"){if(o.length===0)return"";const l=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let c=`## Page Feedback: ${n}
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

`)}),c.trim()}var t3=`@keyframes styles-module__markerIn___x4G8D {
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
}`,n3={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",markerTooltip:"styles-module__markerTooltip___-VUm-",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let o=document.getElementById("feedback-tool-styles-annotation-marker-styles");o||(o=document.createElement("style"),o.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(o)),o.textContent=t3}var Dn=n3;function Tp({annotation:o,globalIndex:n,layerIndex:i,layerSize:l,isExiting:c,isClearing:u,isAnimated:_,isHovered:g,isDeleting:h,isEditingAny:m,renumberFrom:p,markerClickBehavior:y,tooltipStyle:v,onHoverEnter:C,onHoverLeave:k,onClick:E,onContextMenu:O}){const B=(g||h)&&!m,J=B&&y==="delete",F=o.isMultiSelect,z=F?"var(--agentation-color-green)":"var(--agentation-color-accent)",de=c?Dn.exit:u?Dn.clearing:_?"":Dn.enter,ye=c?`${(l-1-i)*20}ms`:`${i*20}ms`;return r.jsxs("div",{className:`${Dn.marker} ${F?Dn.multiSelect:""} ${de} ${J?Dn.hovered:""}`,"data-annotation-marker":!0,style:{left:`${o.x}%`,top:o.y,backgroundColor:J?void 0:z,animationDelay:ye},onMouseEnter:()=>C(o),onMouseLeave:k,onClick:G=>{G.stopPropagation(),c||E(o)},onContextMenu:O?G=>{y==="delete"&&(G.preventDefault(),G.stopPropagation(),c||O(o))}:void 0,children:[B?J?r.jsx(ly,{size:F?18:16}):r.jsx(mb,{size:16}):r.jsx("span",{className:p!==null&&n>=p?Dn.renumber:void 0,children:n+1}),g&&!m&&r.jsxs("div",{className:`${Dn.markerTooltip} ${Dn.enter}`,style:v,children:[r.jsxs("span",{className:Dn.markerQuote,children:[o.element,o.selectedText&&` "${o.selectedText.slice(0,30)}${o.selectedText.length>30?"...":""}"`]}),r.jsx("span",{className:Dn.markerNote,children:o.comment})]})]})}function s3({x:o,y:n,isMultiSelect:i,isExiting:l}){return r.jsx("div",{className:`${Dn.marker} ${Dn.pending} ${i?Dn.multiSelect:""} ${l?Dn.exit:Dn.enter}`,style:{left:`${o}%`,top:n,backgroundColor:i?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:r.jsx(sb,{size:12})})}function Rp({annotation:o,fixed:n}){const i=o.isMultiSelect;return r.jsx("div",{className:`${Dn.marker} ${n?Dn.fixed:""} ${Dn.hovered} ${i?Dn.multiSelect:""} ${Dn.exit}`,"data-annotation-marker":!0,style:{left:`${o.x}%`,top:o.y},children:r.jsx(ly,{size:i?12:10})})}var o3=`.styles-module__switchContainer___Ka-AB {
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
}`,i3={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let o=document.getElementById("feedback-tool-styles-switch-styles");o||(o=document.createElement("style"),o.id="feedback-tool-styles-switch-styles",document.head.appendChild(o)),o.textContent=o3}var $f=i3,Pf=({className:o="",...n})=>r.jsxs("div",{className:`${$f.switchContainer} ${o}`,children:[r.jsx("input",{className:$f.switchInput,type:"checkbox",...n}),r.jsx("div",{className:$f.switchThumb})]}),a3=`.styles-module__checkboxContainer___joqZk {
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
}`,l3={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let o=document.getElementById("feedback-tool-styles-checkbox-styles");o||(o=document.createElement("style"),o.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(o)),o.textContent=a3}var Jc=l3,r3=({className:o="",...n})=>r.jsxs("div",{className:`${Jc.checkboxContainer} ${o}`,children:[r.jsx("input",{className:Jc.checkboxInput,type:"checkbox",...n}),r.jsx("svg",{className:Jc.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:r.jsx("path",{className:Jc.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),c3=`.styles-module__container___w8eAF {
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
}`,u3={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let o=document.getElementById("feedback-tool-styles-checkbox-field-styles");o||(o=document.createElement("style"),o.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(o)),o.textContent=c3}var Dp=u3,Ap=({className:o="",label:n,tooltip:i,checked:l,onChange:c,...u})=>{const _=b.useId();return r.jsxs("div",{className:`${Dp.container} ${o}`,...u,children:[r.jsx(r3,{id:_,onChange:c,checked:l}),r.jsx("label",{className:Dp.label,htmlFor:_,children:n}),i&&r.jsx(Zi,{content:i})]})},d3=`@keyframes styles-module__cycleTextIn___VBNTi {
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
}`,f3={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let o=document.getElementById("feedback-tool-styles-settings-panel-styles");o||(o=document.createElement("style"),o.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(o)),o.textContent=d3}var $e=f3;function h3({settings:o,onSettingsChange:n,isDarkMode:i,onToggleTheme:l,isDevMode:c,connectionStatus:u,endpoint:_,isVisible:g,toolbarNearBottom:h,settingsPage:m,onSettingsPageChange:p,onHideToolbar:y}){var v;return r.jsx("div",{className:`${$e.settingsPanel} ${g?$e.enter:$e.exit}`,style:h?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:r.jsxs("div",{className:$e.settingsPanelContainer,children:[r.jsxs("div",{className:`${$e.settingsPage} ${m==="automations"?$e.slideLeft:""}`,children:[r.jsxs("div",{className:$e.settingsHeader,children:[r.jsx("a",{className:$e.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:r.jsx("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),r.jsxs("p",{className:$e.settingsVersion,children:["v","3.0.2"]}),r.jsx("button",{className:$e.themeToggle,onClick:l,title:i?"Switch to light mode":"Switch to dark mode",children:r.jsx("span",{className:$e.themeIconWrapper,children:r.jsx("span",{className:$e.themeIcon,children:i?r.jsx(hb,{size:20}):r.jsx(_b,{size:20})},i?"sun":"moon")})})]}),r.jsx("div",{className:$e.divider}),r.jsxs("div",{className:$e.settingsSection,children:[r.jsxs("div",{className:$e.settingsRow,children:[r.jsxs("div",{className:$e.settingsLabel,children:["Output Detail",r.jsx(Zi,{content:"Controls how much detail is included in the copied output"})]}),r.jsxs("button",{className:$e.cycleButton,onClick:()=>{const k=(ar.findIndex(E=>E.value===o.outputDetail)+1)%ar.length;n({outputDetail:ar[k].value})},children:[r.jsx("span",{className:$e.cycleButtonText,children:(v=ar.find(C=>C.value===o.outputDetail))==null?void 0:v.label},o.outputDetail),r.jsx("span",{className:$e.cycleDots,children:ar.map(C=>r.jsx("span",{className:`${$e.cycleDot} ${o.outputDetail===C.value?$e.active:""}`},C.value))})]})]}),r.jsxs("div",{className:`${$e.settingsRow} ${$e.settingsRowMarginTop} ${c?"":$e.settingsRowDisabled}`,children:[r.jsxs("div",{className:$e.settingsLabel,children:["React Components",r.jsx(Zi,{content:c?"Include React component names in annotations":"Disabled — production builds minify component names, making detection unreliable. Use in development mode."})]}),r.jsx(Pf,{checked:c&&o.reactEnabled,onChange:C=>n({reactEnabled:C.target.checked}),disabled:!c})]}),r.jsxs("div",{className:`${$e.settingsRow} ${$e.settingsRowMarginTop}`,children:[r.jsxs("div",{className:$e.settingsLabel,children:["Hide Until Restart",r.jsx(Zi,{content:"Hides the toolbar until you open a new tab"})]}),r.jsx(Pf,{checked:!1,onChange:C=>{C.target.checked&&y()}})]})]}),r.jsx("div",{className:$e.divider}),r.jsxs("div",{className:$e.settingsSection,children:[r.jsx("div",{className:`${$e.settingsLabel} ${$e.settingsLabelMarker}`,children:"Marker Color"}),r.jsx("div",{className:$e.colorOptions,children:cr.map(C=>r.jsx("button",{className:`${$e.colorOption} ${o.annotationColorId===C.id?$e.selected:""}`,style:{"--swatch":C.srgb,"--swatch-p3":C.p3},onClick:()=>n({annotationColorId:C.id}),title:C.label,type:"button"},C.id))})]}),r.jsx("div",{className:$e.divider}),r.jsxs("div",{className:$e.settingsSection,children:[r.jsx(Ap,{className:"checkbox-field",label:"Clear on copy/send",checked:o.autoClearAfterCopy,onChange:C=>n({autoClearAfterCopy:C.target.checked}),tooltip:"Automatically clear annotations after copying"}),r.jsx(Ap,{className:$e.checkboxField,label:"Block page interactions",checked:o.blockInteractions,onChange:C=>n({blockInteractions:C.target.checked})})]}),r.jsx("div",{className:$e.divider}),r.jsxs("button",{className:$e.settingsNavLink,onClick:()=>p("automations"),children:[r.jsx("span",{children:"Manage MCP & Webhooks"}),r.jsxs("span",{className:$e.settingsNavLinkRight,children:[_&&u!=="disconnected"&&r.jsx("span",{className:`${$e.mcpNavIndicator} ${$e[u]}`}),r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),r.jsxs("div",{className:`${$e.settingsPage} ${$e.automationsPage} ${m==="automations"?$e.slideIn:""}`,children:[r.jsxs("button",{className:$e.settingsBackButton,onClick:()=>p("main"),children:[r.jsx(gb,{size:16}),r.jsx("span",{children:"Manage MCP & Webhooks"})]}),r.jsx("div",{className:$e.divider}),r.jsxs("div",{className:$e.settingsSection,children:[r.jsxs("div",{className:$e.settingsRow,children:[r.jsxs("span",{className:$e.automationHeader,children:["MCP Connection",r.jsx(Zi,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),_&&r.jsx("div",{className:`${$e.mcpStatusDot} ${$e[u]}`,title:u==="connected"?"Connected":u==="connecting"?"Connecting...":"Disconnected"})]}),r.jsxs("p",{className:$e.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",r.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:$e.learnMoreLink,children:"Learn more"})]})]}),r.jsx("div",{className:$e.divider}),r.jsxs("div",{className:`${$e.settingsSection} ${$e.settingsSectionGrow}`,children:[r.jsxs("div",{className:$e.settingsRow,children:[r.jsxs("span",{className:$e.automationHeader,children:["Webhooks",r.jsx(Zi,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),r.jsxs("div",{className:$e.autoSendContainer,children:[r.jsx("label",{htmlFor:"agentation-auto-send",className:`${$e.autoSendLabel} ${o.webhooksEnabled?$e.active:""} ${o.webhookUrl?"":$e.disabled}`,children:"Auto-Send"}),r.jsx(Pf,{id:"agentation-auto-send",checked:o.webhooksEnabled,onChange:C=>n({webhooksEnabled:C.target.checked}),disabled:!o.webhookUrl})]})]}),r.jsx("p",{className:$e.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),r.jsx("textarea",{className:$e.webhookUrlInput,placeholder:"Webhook URL",value:o.webhookUrl,onKeyDown:C=>C.stopPropagation(),onChange:C=>n({webhookUrl:C.target.value})})]})]})]})})}function If(o,n="filtered"){const{name:i,path:l}=Ka(o);if(n==="off")return{name:i,elementName:i,path:l,reactComponents:null};const c=U4(o,{mode:n});return{name:c.path?`${c.path} ${i}`:i,elementName:i,path:l,reactComponents:c.path}}var Np=!1,Uf={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},wo=o=>{if(!o||!o.trim())return!1;try{const n=new URL(o.trim());return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}},cr=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],_3=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;const o=document.createElement("style");o.id="agentation-color-tokens",o.textContent=[...cr.map(n=>`
      [data-agentation-accent="${n.id}"] {
        --agentation-color-accent: ${n.srgb};
      }

      @supports (color: color(display-p3 0 0 0)) {
        [data-agentation-accent="${n.id}"] {
          --agentation-color-accent: ${n.p3};
        }
      }
    `),`:root {
      ${cr.map(n=>`--agentation-color-${n.id}: ${n.srgb};`).join(`
`)}
    }`,`@supports (color: color(display-p3 0 0 0)) {
      :root {
        ${cr.map(n=>`--agentation-color-${n.id}: ${n.p3};`).join(`
`)}
      }
    }`].join(""),document.head.appendChild(o)};_3();function Vi(o,n){let i=document.elementFromPoint(o,n);if(!i)return null;for(;i!=null&&i.shadowRoot;){const l=i.shadowRoot.elementFromPoint(o,n);if(!l||l===i)break;i=l}return i}function Hf(o){let n=o;for(;n&&n!==document.body;){const l=window.getComputedStyle(n).position;if(l==="fixed"||l==="sticky")return!0;n=n.parentElement}return!1}function Ki(o){return o.status!=="resolved"&&o.status!=="dismissed"}function eu(o){const n=rh(o),i=n.found?n:Z4(o);if(i.found&&i.source)return K4(i.source,"path")}function m3({demoAnnotations:o,demoDelay:n=1e3,enableDemoMode:i=!1,onAnnotationAdd:l,onAnnotationDelete:c,onAnnotationUpdate:u,onAnnotationsClear:_,onCopy:g,onSubmit:h,copyToClipboard:m=!0,endpoint:p,sessionId:y,onSessionCreated:v,webhookUrl:C,className:k}={}){var Lr,Or,pl,gl,ti,ni;const[E,O]=b.useState(!1),[B,J]=b.useState([]),[F,z]=b.useState(!0),[de,ye]=b.useState(()=>M4()),[G,fe]=b.useState(!1),xe=b.useRef(null);b.useEffect(()=>{const S=A=>{const T=xe.current;T&&T.contains(A.target)&&A.stopPropagation()},M=["mousedown","click","pointerdown"];return M.forEach(A=>document.body.addEventListener(A,S)),()=>{M.forEach(A=>document.body.removeEventListener(A,S))}},[]);const[he,re]=b.useState(!1),[Q,Oe]=b.useState(!1),[oe,ke]=b.useState(null),[N,ue]=b.useState({x:0,y:0}),[W,be]=b.useState(null),[Ne,D]=b.useState(!1),[Z,pe]=b.useState("idle"),[Me,qe]=b.useState(!1),[rt,dt]=b.useState(!1),[en,Qe]=b.useState(null),[ve,ft]=b.useState(null),[Ke,ct]=b.useState([]),[Dt,dn]=b.useState(null),[bn,mn]=b.useState(null),[V,Te]=b.useState(null),[Ge,Ve]=b.useState(null),[nt,Ye]=b.useState([]),[Re,ut]=b.useState(0),[St,Ht]=b.useState(!1),[Pe,I]=b.useState(!1),[Y,ie]=b.useState(!1),[ce,ze]=b.useState(!1),[Ce,me]=b.useState(!1),[it,ht]=b.useState("main"),[jt,st]=b.useState(!1),[Ae,wt]=b.useState(!1),[Mt,Wt]=b.useState(!1),[De,yt]=b.useState([]),[xt,_t]=b.useState(null),fn=b.useRef(!1),[Fe,Ot]=b.useState(!1),[vn,Yn]=b.useState(!1),[In,oo]=b.useState(1),[vs,Zn]=b.useState("new-page"),[ln,An]=b.useState(""),[Yt,jn]=b.useState(!1),[Ee,Jn]=b.useState(null),tl=b.useRef(!1),nl=b.useRef({rearrange:null,placements:[]}),io=b.useRef({rearrange:null,placements:[]}),[Ei,ia]=b.useState(0),[Fo,Go]=b.useState(0),[Ti,ao]=b.useState(0),[Nn,sl]=b.useState(0),Wo=b.useRef(new Set),Ns=b.useRef(new Set),Xn=b.useRef(null),aa=b.useRef(),ol=Ae&&E&&!Mt&&Fe;b.useEffect(()=>{if(ol){Yn(!1);const S=Qa(()=>{Yn(!0)});return()=>cancelAnimationFrame(S)}else Yn(!1)},[ol]);const qo=b.useRef(new Map),Ri=b.useRef(new Map),lo=b.useRef(),[es,ws]=b.useState(!1),[rn,yr]=b.useState([]),vu=b.useRef(rn);vu.current=rn;const[la,wu]=b.useState(null),Qo=b.useRef(null);b.useRef(!1),b.useRef([]),b.useRef(0),b.useRef(null),b.useRef(null),b.useRef(1);const[xr,as]=b.useState(!1),ro=b.useRef(null),[pn,co]=b.useState([]),Gn=b.useRef({cmd:!1,shift:!1}),Un=()=>{st(!0)},br=()=>{st(!1)},Vo=()=>{xr||(ro.current=tt(()=>as(!0),850))},Su=()=>{ro.current&&(clearTimeout(ro.current),ro.current=null),as(!1),br()};b.useEffect(()=>()=>{ro.current&&clearTimeout(ro.current)},[]);const[kt,vr]=b.useState(()=>{try{const S=JSON.parse(localStorage.getItem("feedback-toolbar-settings")??"");return{...Uf,...S,annotationColorId:cr.find(M=>M.id===S.annotationColorId)?S.annotationColorId:Uf.annotationColorId}}catch{return Uf}}),[hs,wr]=b.useState(!0),[Sr,Di]=b.useState(!1),Qs=()=>{var S;(S=xe.current)==null||S.classList.add(_e.disableTransitions),wr(M=>!M),Qa(()=>{var M;(M=xe.current)==null||M.classList.remove(_e.disableTransitions)})},il=!1,Vs="off",[on,uo]=b.useState(y??null),al=b.useRef(!1),[ls,fo]=b.useState(p?"connecting":"disconnected"),[Bt,Ss]=b.useState(null),[Ks,Ko]=b.useState(!1),[rs,ra]=b.useState(null),Zo=b.useRef(!1),[ll,ho]=b.useState(new Set),[Ai,Ni]=b.useState(new Set),[Ln,Ls]=b.useState(!1),[ca,Os]=b.useState(!1),[Zs,ua]=b.useState(!1),_o=b.useRef(null),ts=b.useRef(null),mo=b.useRef(null),Jo=b.useRef(null),da=b.useRef(!1),kr=b.useRef(0),fa=b.useRef(null),ha=b.useRef(null),rl=8,ku=50,Cr=b.useRef(null),jr=b.useRef(null),Li=b.useRef(null),et=typeof window<"u"?window.location.pathname:"/";b.useEffect(()=>{if(ce)me(!0);else{st(!1),ht("main");const S=tt(()=>me(!1),0);return()=>clearTimeout(S)}},[ce]);const cl=E&&F&&!Ae;b.useEffect(()=>{if(cl){Oe(!1),re(!0),ho(new Set);const S=tt(()=>{ho(M=>{const A=new Set(M);return B.forEach(T=>A.add(T.id)),A})},350);return()=>clearTimeout(S)}else if(he){Oe(!0);const S=tt(()=>{re(!1),Oe(!1)},250);return()=>clearTimeout(S)}},[cl]),b.useEffect(()=>{I(!0),ut(window.scrollY);const S=Lf(et);J(S.filter(Ki)),Np||(Di(!0),Np=!0,tt(()=>Di(!1),750));try{const M=localStorage.getItem("feedback-toolbar-theme");M!==null&&wr(M==="dark")}catch{}try{const M=localStorage.getItem("feedback-toolbar-position");if(M){const A=JSON.parse(M);typeof A.x=="number"&&typeof A.y=="number"&&Ss(A)}}catch{}},[et]),b.useEffect(()=>{Pe&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(kt))},[kt,Pe]),b.useEffect(()=>{Pe&&localStorage.setItem("feedback-toolbar-theme",hs?"dark":"light")},[hs,Pe]);const Mr=b.useRef(!1);b.useEffect(()=>{const S=Mr.current;Mr.current=Ks,S&&!Ks&&Bt&&Pe&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(Bt))},[Ks,Bt,Pe]),b.useEffect(()=>{if(!p||!Pe||al.current)return;al.current=!0,fo("connecting"),(async()=>{try{const M=C4(et),A=y||M;let T=!1;if(A)try{const $=await kp(p,A);uo($.id),fo("connected"),Of(et,$.id),T=!0;const K=Lf(et),ge=new Set($.annotations.map(je=>je.id)),we=K.filter(je=>!ge.has(je.id));if(we.length>0){const Ue=`${typeof window<"u"?window.location.origin:""}${et}`,at=(await Promise.allSettled(we.map(Ze=>Ga(p,$.id,{...Ze,sessionId:$.id,url:Ue})))).map((Ze,Se)=>Ze.status==="fulfilled"?Ze.value:(console.warn("[Agentation] Failed to sync annotation:",Ze.reason),we[Se])),bt=[...$.annotations,...at];J(bt.filter(Ki)),sr(et,bt.filter(Ki),$.id)}else J($.annotations.filter(Ki)),sr(et,$.annotations.filter(Ki),$.id)}catch($){console.warn("[Agentation] Could not join session, creating new:",$),j4(et)}if(!T){const $=typeof window<"u"?window.location.href:"/",K=await zf(p,$);uo(K.id),fo("connected"),Of(et,K.id),v==null||v(K.id);const ge=g4(),we=typeof window<"u"?window.location.origin:"",je=[];for(const[Ue,We]of ge){const at=We.filter(Se=>!Se._syncedTo);if(at.length===0)continue;const bt=`${we}${Ue}`,Ze=Ue===et;je.push((async()=>{try{const Se=Ze?K:await zf(p,bt),gn=(await Promise.allSettled(at.map(At=>Ga(p,Se.id,{...At,sessionId:Se.id,url:bt})))).map((At,hn)=>At.status==="fulfilled"?At.value:(console.warn("[Agentation] Failed to sync annotation:",At.reason),at[hn])).filter(Ki);if(sr(Ue,gn,Se.id),Ze){const At=new Set(at.map(hn=>hn.id));J(hn=>{const ot=hn.filter(mt=>!At.has(mt.id));return[...gn,...ot]})}}catch(Se){console.warn(`[Agentation] Failed to sync annotations for ${Ue}:`,Se)}})())}await Promise.allSettled(je)}}catch(M){fo("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",M)}})()},[p,y,Pe,v,et]),b.useEffect(()=>{if(!p||!Pe)return;const S=async()=>{try{(await fetch(`${p}/health`)).ok?fo("connected"):fo("disconnected")}catch{fo("disconnected")}};S();const M=bb(S,1e4);return()=>clearInterval(M)},[p,Pe]),b.useEffect(()=>{if(!p||!Pe||!on)return;const S=new EventSource(`${p}/sessions/${on}/events`),M=["resolved","dismissed"],A=T=>{var $;try{const K=JSON.parse(T.data);if(M.includes(($=K.payload)==null?void 0:$.status)){const ge=K.payload.id,we=K.payload.kind;if(we==="placement"){for(const[je,Ue]of qo.current)if(Ue===ge){qo.current.delete(je),yt(We=>We.filter(at=>at.id!==je));break}}else if(we==="rearrange"){for(const[je,Ue]of Ri.current)if(Ue===ge){Ri.current.delete(je),Jn(We=>{if(!We)return null;const at=We.sections.filter(bt=>bt.id!==je);return at.length===0?null:{...We,sections:at}});break}}else Ni(je=>new Set(je).add(ge)),tt(()=>{J(je=>je.filter(Ue=>Ue.id!==ge)),Ni(je=>{const Ue=new Set(je);return Ue.delete(ge),Ue})},150)}}catch{}};return S.addEventListener("annotation.updated",A),()=>{S.removeEventListener("annotation.updated",A),S.close()}},[p,Pe,on]),b.useEffect(()=>{if(!p||!Pe)return;const S=ha.current==="disconnected",M=ls==="connected";ha.current=ls,S&&M&&(async()=>{try{const T=Lf(et);if(T.length===0)return;const K=`${typeof window<"u"?window.location.origin:""}${et}`;let ge=on,we=[];if(ge)try{we=(await kp(p,ge)).annotations}catch{ge=null}ge||(ge=(await zf(p,K)).id,uo(ge),Of(et,ge));const je=new Set(we.map(We=>We.id)),Ue=T.filter(We=>!je.has(We.id));if(Ue.length>0){const at=(await Promise.allSettled(Ue.map(Se=>Ga(p,ge,{...Se,sessionId:ge,url:K})))).map((Se,tn)=>Se.status==="fulfilled"?Se.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",Se.reason),Ue[tn])),Ze=[...we,...at].filter(Ki);J(Ze),sr(et,Ze,ge)}}catch(T){console.warn("[Agentation] Failed to sync on reconnect:",T)}})()},[ls,p,Pe,on,et]);const Cu=b.useCallback(()=>{G||(fe(!0),ze(!1),O(!1),tt(()=>{E4(!0),ye(!0),fe(!1)},400))},[G]);b.useEffect(()=>{if(!i||!Pe||!o||o.length===0||B.length>0)return;const S=[];return S.push(tt(()=>{O(!0)},n-200)),o.forEach((M,A)=>{const T=n+A*300;S.push(tt(()=>{const $=document.querySelector(M.selector);if(!$)return;const K=$.getBoundingClientRect(),{name:ge,path:we}=Ka($),je={id:`demo-${Date.now()}-${A}`,x:(K.left+K.width/2)/window.innerWidth*100,y:K.top+K.height/2+window.scrollY,comment:M.comment,element:ge,elementPath:we,timestamp:Date.now(),selectedText:M.selectedText,boundingBox:{x:K.left,y:K.top+window.scrollY,width:K.width,height:K.height},nearbyText:tr($),cssClasses:nr($)};J(Ue=>[...Ue,je])},T))}),()=>{S.forEach(clearTimeout)}},[i,Pe,o,n]),b.useEffect(()=>{const S=()=>{ut(window.scrollY),Ht(!0),Li.current&&clearTimeout(Li.current),Li.current=tt(()=>{Ht(!1)},150)};return window.addEventListener("scroll",S,{passive:!0}),()=>{window.removeEventListener("scroll",S),Li.current&&clearTimeout(Li.current)}},[]),b.useEffect(()=>{Pe&&B.length>0?on?sr(et,B,on):by(et,B):Pe&&B.length===0&&localStorage.removeItem(pu(et))},[B,et,Pe,on]),b.useEffect(()=>{if(Pe&&!fn.current){fn.current=!0;const S=y4(et);S.length>0&&yt(S)}},[Pe,et]),b.useEffect(()=>{Pe&&fn.current&&!Fe&&(De.length>0?x4(et,De):b4(et))},[De,et,Pe,Fe]),b.useEffect(()=>{if(Pe&&!tl.current){tl.current=!0;const S=v4(et);if(S){const M={...S,sections:S.sections.map(A=>({...A,currentRect:A.currentRect??{...A.originalRect}}))};Jn(M)}}},[Pe,et]),b.useEffect(()=>{Pe&&tl.current&&!Fe&&(Ee?w4(et,Ee):S4(et))},[Ee,et,Pe,Fe]);const ul=b.useRef(!1);b.useEffect(()=>{if(Pe&&!ul.current){ul.current=!0;const S=k4(et);S&&(io.current={rearrange:S.rearrange,placements:S.placements||[]},S.purpose&&An(S.purpose))}},[Pe,et]),b.useEffect(()=>{var M,A,T;if(!Pe||!ul.current)return;const S=io.current;Fe?(((M=Ee==null?void 0:Ee.sections)==null?void 0:M.length)??0)>0||De.length>0||ln?Sp(et,{rearrange:Ee,placements:De,purpose:ln}):Kc(et):(((T=(A=S.rearrange)==null?void 0:A.sections)==null?void 0:T.length)??0)>0||S.placements.length>0||ln?Sp(et,{rearrange:S.rearrange,placements:S.placements,purpose:ln}):Kc(et)},[Ee,De,ln,Fe,et,Pe]),b.useEffect(()=>{Ae&&!Ee&&Jn({sections:[],originalOrder:[],detectedAt:Date.now()})},[Ae,Ee]),b.useEffect(()=>{if(!p||!on)return;const S=qo.current,M=new Set(De.map(A=>A.id));for(const A of De){if(S.has(A.id))continue;S.set(A.id,"");const T=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:et;Ga(p,on,{id:A.id,x:A.x/window.innerWidth*100,y:A.y,comment:`Place ${A.type} at (${Math.round(A.x)}, ${Math.round(A.y)}), ${A.width}×${A.height}px${A.text?` — "${A.text}"`:""}`,element:`[design:${A.type}]`,elementPath:"[placement]",timestamp:A.timestamp,url:T,intent:"change",severity:"important",kind:"placement",placement:{componentType:A.type,width:A.width,height:A.height,scrollY:A.scrollY,text:A.text}}).then($=>{S.has(A.id)&&S.set(A.id,$.id)}).catch($=>{console.warn("[Agentation] Failed to sync placement annotation:",$),S.delete(A.id)})}for(const[A,T]of S)M.has(A)||(S.delete(A),T&&Ci(p,T).catch(()=>{}))},[De,p,on,et]),b.useEffect(()=>{if(!(!p||!on))return lo.current&&clearTimeout(lo.current),lo.current=tt(()=>{const S=Ri.current;if(!Ee||Ee.sections.length===0){for(const[,T]of S)T&&Ci(p,T).catch(()=>{});S.clear();return}const M=new Set(Ee.sections.map(T=>T.id)),A=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:et;for(const T of Ee.sections){const $=T.originalRect,K=T.currentRect;if(!(Math.abs($.x-K.x)>1||Math.abs($.y-K.y)>1||Math.abs($.width-K.width)>1||Math.abs($.height-K.height)>1)){const je=S.get(T.id);je&&(S.delete(T.id),Ci(p,je).catch(()=>{}));continue}const we=S.get(T.id);we?Cp(p,we,{comment:`Move ${T.label} section (${T.tagName}) — from (${Math.round($.x)},${Math.round($.y)}) ${Math.round($.width)}×${Math.round($.height)} to (${Math.round(K.x)},${Math.round(K.y)}) ${Math.round(K.width)}×${Math.round(K.height)}`}).catch(je=>{console.warn("[Agentation] Failed to update rearrange annotation:",je)}):(S.set(T.id,""),Ga(p,on,{id:T.id,x:K.x/window.innerWidth*100,y:K.y,comment:`Move ${T.label} section (${T.tagName}) — from (${Math.round($.x)},${Math.round($.y)}) ${Math.round($.width)}×${Math.round($.height)} to (${Math.round(K.x)},${Math.round(K.y)}) ${Math.round(K.width)}×${Math.round(K.height)}`,element:T.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:A,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:T.selector,label:T.label,tagName:T.tagName,originalRect:$,currentRect:K}}).then(je=>{S.has(T.id)&&S.set(T.id,je.id)}).catch(je=>{console.warn("[Agentation] Failed to sync rearrange annotation:",je),S.delete(T.id)}))}for(const[T,$]of S)M.has(T)||(S.delete(T),$&&Ci(p,$).catch(()=>{}))},300),()=>{lo.current&&clearTimeout(lo.current)}},[Ee,p,on,et]);const po=b.useRef(new Map);b.useLayoutEffect(()=>{const S=(Ee==null?void 0:Ee.sections)??[],M=new Set;if((Ae||Mt)&&E)for(const A of S){M.add(A.id);try{const T=document.querySelector(A.selector);if(!T)continue;if(!po.current.has(A.id)){const $={transform:T.style.transform,transformOrigin:T.style.transformOrigin,opacity:T.style.opacity,position:T.style.position,zIndex:T.style.zIndex,display:T.style.display},K=[];let ge=T.parentElement;for(;ge&&ge!==document.body;){const je=getComputedStyle(ge);(je.overflow!=="visible"||je.overflowX!=="visible"||je.overflowY!=="visible")&&(K.push({el:ge,overflow:ge.style.overflow}),ge.style.overflow="visible"),ge=ge.parentElement}getComputedStyle(T).display==="inline"&&(T.style.display="inline-block"),po.current.set(A.id,{el:T,origStyles:$,ancestors:K}),T.style.transformOrigin="top left",T.style.zIndex="9999"}}catch{}}for(const[A,T]of po.current)if(!M.has(A)){const{el:$,origStyles:K,ancestors:ge}=T;$.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",$.style.transform=K.transform,$.style.transformOrigin=K.transformOrigin,$.style.opacity=K.opacity,$.style.position=K.position,$.style.zIndex=K.zIndex,po.current.delete(A),tt(()=>{$.style.transition="",$.style.display=K.display;for(const we of ge)we.el.style.overflow=we.overflow},450)}},[Ee,Ae,Mt,E]),b.useEffect(()=>()=>{for(const[,S]of po.current){const{el:M,origStyles:A,ancestors:T}=S;M.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",M.style.transform=A.transform,M.style.transformOrigin=A.transformOrigin,M.style.opacity=A.opacity,M.style.position=A.position,M.style.zIndex=A.zIndex,tt(()=>{M.style.transition="",M.style.display=A.display;for(const $ of T)$.el.style.overflow=$.overflow},450)}po.current.clear()},[]);const _a=b.useCallback(()=>{Wt(!0),wt(!1),_t(null),clearTimeout(aa.current),aa.current=tt(()=>{Wt(!1)},300)},[]),Er=b.useCallback(()=>{Ae&&(Wt(!0),wt(!1),_t(null),clearTimeout(aa.current),aa.current=tt(()=>{Wt(!1)},300)),O(!1)},[Ae]),Tr=b.useCallback(()=>{Y||(wb(),ie(!0))},[Y]),Oi=b.useCallback(()=>{Y&&(cp(),ie(!1))},[Y]),dl=b.useCallback(()=>{Y?Oi():Tr()},[Y,Tr,Oi]),Rr=b.useCallback(()=>{if(pn.length===0)return;const S=pn[0],M=S.element,A=pn.length>1,T=pn.map($=>$.element.getBoundingClientRect());if(A){const $={left:Math.min(...T.map(Se=>Se.left)),top:Math.min(...T.map(Se=>Se.top)),right:Math.max(...T.map(Se=>Se.right)),bottom:Math.max(...T.map(Se=>Se.bottom))},K=pn.slice(0,5).map(Se=>Se.name).join(", "),ge=pn.length>5?` +${pn.length-5} more`:"",we=T.map(Se=>({x:Se.left,y:Se.top+window.scrollY,width:Se.width,height:Se.height})),Ue=pn[pn.length-1].element,We=T[T.length-1],at=We.left+We.width/2,bt=We.top+We.height/2,Ze=Hf(Ue);be({x:at/window.innerWidth*100,y:Ze?bt:bt+window.scrollY,clientY:bt,element:`${pn.length} elements: ${K}${ge}`,elementPath:"multi-select",boundingBox:{x:$.left,y:$.top+window.scrollY,width:$.right-$.left,height:$.bottom-$.top},isMultiSelect:!0,isFixed:Ze,elementBoundingBoxes:we,multiSelectElements:pn.map(Se=>Se.element),targetElement:Ue,fullPath:qc(M),accessibility:Wc(M),computedStyles:Gc(M),computedStylesObj:Fc(M),nearbyElements:Xc(M),cssClasses:nr(M),nearbyText:tr(M),sourceFile:eu(M)})}else{const $=T[0],K=Hf(M);be({x:$.left/window.innerWidth*100,y:K?$.top:$.top+window.scrollY,clientY:$.top,element:S.name,elementPath:S.path,boundingBox:{x:$.left,y:K?$.top:$.top+window.scrollY,width:$.width,height:$.height},isFixed:K,fullPath:qc(M),accessibility:Wc(M),computedStyles:Gc(M),computedStylesObj:Fc(M),nearbyElements:Xc(M),cssClasses:nr(M),nearbyText:tr(M),reactComponents:S.reactComponents,sourceFile:eu(M)})}co([]),ke(null)},[pn]);b.useEffect(()=>{E||(be(null),Te(null),Ve(null),Ye([]),ke(null),ze(!1),co([]),Gn.current={cmd:!1,shift:!1},Y&&Oi())},[E,Y,Oi]),b.useEffect(()=>()=>{cp()},[]),b.useEffect(()=>{if(!E)return;const S=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),M=":not([data-agentation-root]):not([data-agentation-root] *)",A=document.createElement("style");return A.id="feedback-cursor-styles",A.textContent=`
      body ${M} {
        cursor: crosshair !important;
      }

      body :is(${S})${M} {
        cursor: text !important;
      }
    `,document.head.appendChild(A),()=>{const T=document.getElementById("feedback-cursor-styles");T&&T.remove()}},[E]),b.useEffect(()=>{if(la!==null&&E)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[la,E]),b.useEffect(()=>{if(!E||W||es||Ae)return;const S=M=>{const A=M.composedPath()[0]||M.target;if(us(A,"[data-feedback-toolbar]")){ke(null);return}const T=Vi(M.clientX,M.clientY);if(!T||us(T,"[data-feedback-toolbar]")){ke(null);return}const{name:$,elementName:K,path:ge,reactComponents:we}=If(T,Vs),je=T.getBoundingClientRect();ke({element:$,elementName:K,elementPath:ge,rect:je,reactComponents:we}),ue({x:M.clientX,y:M.clientY})};return document.addEventListener("mousemove",S),()=>document.removeEventListener("mousemove",S)},[E,W,es,Ae,Vs,rn]);const ma=b.useCallback(S=>{var M;if(Te(S),Qe(null),ft(null),ct([]),(M=S.elementBoundingBoxes)!=null&&M.length){const A=[];for(const T of S.elementBoundingBoxes){const $=T.x+T.width/2,K=T.y+T.height/2-window.scrollY,ge=Vi($,K);ge&&A.push(ge)}Ye(A),Ve(null)}else if(S.boundingBox){const A=S.boundingBox,T=A.x+A.width/2,$=S.isFixed?A.y+A.height/2:A.y+A.height/2-window.scrollY,K=Vi(T,$);if(K){const ge=K.getBoundingClientRect(),we=ge.width/A.width,je=ge.height/A.height;we<.5||je<.5?Ve(null):Ve(K)}else Ve(null);Ye([])}else Ve(null),Ye([])},[]);b.useEffect(()=>{if(!E||es||Ae)return;const S=M=>{var qt,gn;if(da.current){da.current=!1;return}const A=M.composedPath()[0]||M.target;if(us(A,"[data-feedback-toolbar]")||us(A,"[data-annotation-popup]")||us(A,"[data-annotation-marker]"))return;if(M.metaKey&&M.shiftKey&&!W&&!V){M.preventDefault(),M.stopPropagation();const At=Vi(M.clientX,M.clientY);if(!At)return;const hn=At.getBoundingClientRect(),{name:ot,path:mt,reactComponents:an}=If(At,Vs),Qt=pn.findIndex(Mn=>Mn.element===At);Qt>=0?co(Mn=>Mn.filter((Wn,wn)=>wn!==Qt)):co(Mn=>[...Mn,{element:At,rect:hn,name:ot,path:mt,reactComponents:an??void 0}]);return}const T=us(A,"button, a, input, select, textarea, [role='button'], [onclick]");if(kt.blockInteractions&&T&&(M.preventDefault(),M.stopPropagation()),W){if(T&&!kt.blockInteractions)return;M.preventDefault(),(qt=Cr.current)==null||qt.shake();return}if(V){if(T&&!kt.blockInteractions)return;M.preventDefault(),(gn=jr.current)==null||gn.shake();return}M.preventDefault();const $=Vi(M.clientX,M.clientY);if(!$)return;const{name:K,path:ge,reactComponents:we}=If($,Vs),je=$.getBoundingClientRect(),Ue=M.clientX/window.innerWidth*100,We=Hf($),at=We?M.clientY:M.clientY+window.scrollY,bt=window.getSelection();let Ze;bt&&bt.toString().trim().length>0&&(Ze=bt.toString().trim().slice(0,500));const Se=Fc($),tn=Gc($);be({x:Ue,y:at,clientY:M.clientY,element:K,elementPath:ge,selectedText:Ze,boundingBox:{x:je.left,y:We?je.top:je.top+window.scrollY,width:je.width,height:je.height},nearbyText:tr($),cssClasses:nr($),isFixed:We,fullPath:qc($),accessibility:Wc($),computedStyles:tn,computedStylesObj:Se,nearbyElements:Xc($),reactComponents:we??void 0,sourceFile:eu($),targetElement:$}),ke(null)};return document.addEventListener("click",S,!0),()=>document.removeEventListener("click",S,!0)},[E,es,Ae,W,V,kt.blockInteractions,Vs,pn]),b.useEffect(()=>{if(!E)return;const S=T=>{T.key==="Meta"&&(Gn.current.cmd=!0),T.key==="Shift"&&(Gn.current.shift=!0)},M=T=>{const $=Gn.current.cmd&&Gn.current.shift;T.key==="Meta"&&(Gn.current.cmd=!1),T.key==="Shift"&&(Gn.current.shift=!1);const K=Gn.current.cmd&&Gn.current.shift;$&&!K&&pn.length>0&&Rr()},A=()=>{Gn.current={cmd:!1,shift:!1},co([])};return document.addEventListener("keydown",S),document.addEventListener("keyup",M),window.addEventListener("blur",A),()=>{document.removeEventListener("keydown",S),document.removeEventListener("keyup",M),window.removeEventListener("blur",A)}},[E,pn,Rr]),b.useEffect(()=>{if(!E||W||es||Ae)return;const S=M=>{const A=M.composedPath()[0]||M.target;us(A,"[data-feedback-toolbar]")||us(A,"[data-annotation-marker]")||us(A,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(A.tagName)||A.isContentEditable||(M.preventDefault(),_o.current={x:M.clientX,y:M.clientY})};return document.addEventListener("mousedown",S),()=>document.removeEventListener("mousedown",S)},[E,W,es,Ae]),b.useEffect(()=>{if(!E||W)return;const S=M=>{if(!_o.current)return;const A=M.clientX-_o.current.x,T=M.clientY-_o.current.y,$=A*A+T*T,K=rl*rl;if(!Zs&&$>=K&&(ts.current=_o.current,ua(!0),M.preventDefault()),(Zs||$>=K)&&ts.current){if(mo.current){const ot=Math.min(ts.current.x,M.clientX),mt=Math.min(ts.current.y,M.clientY),an=Math.abs(M.clientX-ts.current.x),Qt=Math.abs(M.clientY-ts.current.y);mo.current.style.transform=`translate(${ot}px, ${mt}px)`,mo.current.style.width=`${an}px`,mo.current.style.height=`${Qt}px`}const ge=Date.now();if(ge-kr.current<ku)return;kr.current=ge;const we=ts.current.x,je=ts.current.y,Ue=Math.min(we,M.clientX),We=Math.min(je,M.clientY),at=Math.max(we,M.clientX),bt=Math.max(je,M.clientY),Ze=(Ue+at)/2,Se=(We+bt)/2,tn=new Set,qt=[[Ue,We],[at,We],[Ue,bt],[at,bt],[Ze,Se],[Ze,We],[Ze,bt],[Ue,Se],[at,Se]];for(const[ot,mt]of qt){const an=document.elementsFromPoint(ot,mt);for(const Qt of an)Qt instanceof HTMLElement&&tn.add(Qt)}const gn=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const ot of gn)if(ot instanceof HTMLElement){const mt=ot.getBoundingClientRect(),an=mt.left+mt.width/2,Qt=mt.top+mt.height/2,Mn=an>=Ue&&an<=at&&Qt>=We&&Qt<=bt,Wn=Math.min(mt.right,at)-Math.max(mt.left,Ue),wn=Math.min(mt.bottom,bt)-Math.max(mt.top,We),Cs=Wn>0&&wn>0?Wn*wn:0,_s=mt.width*mt.height,Bs=_s>0?Cs/_s:0;(Mn||Bs>.5)&&tn.add(ot)}const At=[],hn=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const ot of tn){if(us(ot,"[data-feedback-toolbar]")||us(ot,"[data-annotation-marker]"))continue;const mt=ot.getBoundingClientRect();if(!(mt.width>window.innerWidth*.8&&mt.height>window.innerHeight*.5)&&!(mt.width<10||mt.height<10)&&mt.left<at&&mt.right>Ue&&mt.top<bt&&mt.bottom>We){const an=ot.tagName;let Qt=hn.has(an);if(!Qt&&(an==="DIV"||an==="SPAN")){const Mn=ot.textContent&&ot.textContent.trim().length>0,Wn=ot.onclick!==null||ot.getAttribute("role")==="button"||ot.getAttribute("role")==="link"||ot.classList.contains("clickable")||ot.hasAttribute("data-clickable");(Mn||Wn)&&!ot.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(Qt=!0)}if(Qt){let Mn=!1;for(const Wn of At)if(Wn.left<=mt.left&&Wn.right>=mt.right&&Wn.top<=mt.top&&Wn.bottom>=mt.bottom){Mn=!0;break}Mn||At.push(mt)}}}if(Jo.current){const ot=Jo.current;for(;ot.children.length>At.length;)ot.removeChild(ot.lastChild);At.forEach((mt,an)=>{let Qt=ot.children[an];Qt||(Qt=document.createElement("div"),Qt.className=_e.selectedElementHighlight,ot.appendChild(Qt)),Qt.style.transform=`translate(${mt.left}px, ${mt.top}px)`,Qt.style.width=`${mt.width}px`,Qt.style.height=`${mt.height}px`})}}};return document.addEventListener("mousemove",S,{passive:!0}),()=>document.removeEventListener("mousemove",S)},[E,W,Zs,rl]),b.useEffect(()=>{if(!E)return;const S=M=>{const A=Zs,T=ts.current;if(Zs&&T){da.current=!0;const $=Math.min(T.x,M.clientX),K=Math.min(T.y,M.clientY),ge=Math.max(T.x,M.clientX),we=Math.max(T.y,M.clientY),je=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(Ze=>{if(!(Ze instanceof HTMLElement)||us(Ze,"[data-feedback-toolbar]")||us(Ze,"[data-annotation-marker]"))return;const Se=Ze.getBoundingClientRect();Se.width>window.innerWidth*.8&&Se.height>window.innerHeight*.5||Se.width<10||Se.height<10||Se.left<ge&&Se.right>$&&Se.top<we&&Se.bottom>K&&je.push({element:Ze,rect:Se})});const We=je.filter(({element:Ze})=>!je.some(({element:Se})=>Se!==Ze&&Ze.contains(Se))),at=M.clientX/window.innerWidth*100,bt=M.clientY+window.scrollY;if(We.length>0){const Ze=We.reduce((hn,{rect:ot})=>({left:Math.min(hn.left,ot.left),top:Math.min(hn.top,ot.top),right:Math.max(hn.right,ot.right),bottom:Math.max(hn.bottom,ot.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),Se=We.slice(0,5).map(({element:hn})=>Ka(hn).name).join(", "),tn=We.length>5?` +${We.length-5} more`:"",qt=We[0].element,gn=Fc(qt),At=Gc(qt);be({x:at,y:bt,clientY:M.clientY,element:`${We.length} elements: ${Se}${tn}`,elementPath:"multi-select",boundingBox:{x:Ze.left,y:Ze.top+window.scrollY,width:Ze.right-Ze.left,height:Ze.bottom-Ze.top},isMultiSelect:!0,fullPath:qc(qt),accessibility:Wc(qt),computedStyles:At,computedStylesObj:gn,nearbyElements:Xc(qt),cssClasses:nr(qt),nearbyText:tr(qt),sourceFile:eu(qt)})}else{const Ze=Math.abs(ge-$),Se=Math.abs(we-K);Ze>20&&Se>20&&be({x:at,y:bt,clientY:M.clientY,element:"Area selection",elementPath:`region at (${Math.round($)}, ${Math.round(K)})`,boundingBox:{x:$,y:K+window.scrollY,width:Ze,height:Se},isMultiSelect:!0})}ke(null)}else A&&(da.current=!0);_o.current=null,ts.current=null,ua(!1),Jo.current&&(Jo.current.innerHTML="")};return document.addEventListener("mouseup",S),()=>document.removeEventListener("mouseup",S)},[E,Zs]);const zs=b.useCallback(async(S,M,A)=>{const T=kt.webhookUrl||C;if(!T||!kt.webhooksEnabled&&!A)return!1;try{return(await fetch(T,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:S,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...M})})).ok}catch($){return console.warn("[Agentation] Webhook failed:",$),!1}},[C,kt.webhookUrl,kt.webhooksEnabled]),ju=b.useCallback(S=>{var A;if(!W)return;const M={id:Date.now().toString(),x:W.x,y:W.y,comment:S,element:W.element,elementPath:W.elementPath,timestamp:Date.now(),selectedText:W.selectedText,boundingBox:W.boundingBox,nearbyText:W.nearbyText,cssClasses:W.cssClasses,isMultiSelect:W.isMultiSelect,isFixed:W.isFixed,fullPath:W.fullPath,accessibility:W.accessibility,computedStyles:W.computedStyles,nearbyElements:W.nearbyElements,reactComponents:W.reactComponents,sourceFile:W.sourceFile,elementBoundingBoxes:W.elementBoundingBoxes,...p&&on?{sessionId:on,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};J(T=>[...T,M]),fa.current=M.id,tt(()=>{fa.current=null},300),tt(()=>{ho(T=>new Set(T).add(M.id))},250),l==null||l(M),zs("annotation.add",{annotation:M}),Ls(!0),tt(()=>{be(null),Ls(!1)},150),(A=window.getSelection())==null||A.removeAllRanges(),p&&on&&Ga(p,on,M).then(T=>{T.id!==M.id&&(J($=>$.map(K=>K.id===M.id?{...K,id:T.id}:K)),ho($=>{const K=new Set($);return K.delete(M.id),K.add(T.id),K}))}).catch(T=>{console.warn("[Agentation] Failed to sync annotation:",T)})},[W,l,zs,p,on]),fl=b.useCallback(()=>{Ls(!0),tt(()=>{be(null),Ls(!1)},150)},[]),hl=b.useCallback(S=>{const M=B.findIndex(T=>T.id===S),A=B[M];(V==null?void 0:V.id)===S&&(Os(!0),tt(()=>{Te(null),Ve(null),Ye([]),Os(!1)},150)),dn(S),Ni(T=>new Set(T).add(S)),A&&(c==null||c(A),zs("annotation.delete",{annotation:A})),p&&Ci(p,S).catch(T=>{console.warn("[Agentation] Failed to delete annotation from server:",T)}),tt(()=>{J(T=>T.filter($=>$.id!==S)),Ni(T=>{const $=new Set(T);return $.delete(S),$}),dn(null),M<B.length-1&&(mn(M),tt(()=>mn(null),200))},150)},[B,V,c,zs,p]),pa=b.useCallback(S=>{var M;if(!S){Qe(null),ft(null),ct([]);return}if(Qe(S.id),(M=S.elementBoundingBoxes)!=null&&M.length){const A=[];for(const T of S.elementBoundingBoxes){const $=T.x+T.width/2,K=T.y+T.height/2-window.scrollY,we=document.elementsFromPoint($,K).find(je=>!je.closest("[data-annotation-marker]")&&!je.closest("[data-agentation-root]"));we&&A.push(we)}ct(A),ft(null)}else if(S.boundingBox){const A=S.boundingBox,T=A.x+A.width/2,$=S.isFixed?A.y+A.height/2:A.y+A.height/2-window.scrollY,K=Vi(T,$);if(K){const ge=K.getBoundingClientRect(),we=ge.width/A.width,je=ge.height/A.height;we<.5||je<.5?ft(null):ft(K)}else ft(null);ct([])}else ft(null),ct([])},[]),Mu=b.useCallback(S=>{if(!V)return;const M={...V,comment:S};J(A=>A.map(T=>T.id===V.id?M:T)),u==null||u(M),zs("annotation.update",{annotation:M}),p&&Cp(p,V.id,{comment:S}).catch(A=>{console.warn("[Agentation] Failed to update annotation on server:",A)}),Os(!0),tt(()=>{Te(null),Ve(null),Ye([]),Os(!1)},150)},[V,u,zs,p]),_l=b.useCallback(()=>{Os(!0),tt(()=>{Te(null),Ve(null),Ye([]),Os(!1)},150)},[]),ks=b.useCallback(()=>{const S=B.length,M=De.length>0||!!Ee;if(S===0&&rn.length===0&&!M)return;if(_==null||_(B),zs("annotations.clear",{annotations:B}),p){Promise.all(B.map($=>Ci(p,$.id).catch(K=>{console.warn("[Agentation] Failed to delete annotation from server:",K)})));for(const[,$]of qo.current)$&&Ci(p,$).catch(()=>{});qo.current.clear();for(const[,$]of Ri.current)$&&Ci(p,$).catch(()=>{});Ri.current.clear()}dt(!0),qe(!0),yr([]);const A=Qo.current;if(A){const $=A.getContext("2d");$&&$.clearRect(0,0,A.width,A.height)}(De.length>0||Ee)&&(ao($=>$+1),sl($=>$+1),tt(()=>{yt([]),Jn(null)},200)),Fe&&Ot(!1),ln&&An(""),io.current={rearrange:null,placements:[]},Kc(et);const T=S*30+200;tt(()=>{J([]),ho(new Set),localStorage.removeItem(pu(et)),dt(!1)},T),tt(()=>qe(!1),1500)},[et,B,rn,De,Ee,Fe,ln,_,zs,p]),ml=b.useCallback(async()=>{const S=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:et,M=Ae&&Fe;let A;if(M){if(De.length===0&&!Ee&&!ln)return;A=""}else{if(A=Ep(B,S,kt.outputDetail),!A&&rn.length===0&&De.length===0&&!Ee)return;A||(A=`## Page Feedback: ${S}
`)}if(!M&&rn.length>0){const T=new Set;for(const we of B)we.drawingIndex!=null&&T.add(we.drawingIndex);const $=Qo.current;$&&($.style.visibility="hidden");const K=[],ge=window.scrollY;for(let we=0;we<rn.length;we++){if(T.has(we))continue;const je=rn[we];if(je.points.length<2)continue;const Ue=je.fixed?je.points:je.points.map(yn=>({x:yn.x,y:yn.y-ge}));let We=1/0,at=1/0,bt=-1/0,Ze=-1/0;for(const yn of Ue)We=Math.min(We,yn.x),at=Math.min(at,yn.y),bt=Math.max(bt,yn.x),Ze=Math.max(Ze,yn.y);const Se=bt-We,tn=Ze-at,qt=Math.hypot(Se,tn),gn=Ue[0],At=Ue[Ue.length-1],hn=Math.hypot(At.x-gn.x,At.y-gn.y);let ot;const mt=hn<qt*.35,an=Se/Math.max(tn,1);if(mt&&qt>20){const yn=Math.max(Se,tn)*.15;let ns=0;for(const go of Ue){const zr=go.x-We<yn,Br=bt-go.x<yn,Eu=go.y-at<yn,Tu=Ze-go.y<yn;(zr||Br)&&(Eu||Tu)&&ns++}ot=ns>Ue.length*.15?"box":"circle"}else an>3&&tn<40?ot="underline":hn>qt*.5?ot="arrow":ot="drawing";const Qt=Math.min(10,Ue.length),Mn=Math.max(1,Math.floor(Ue.length/Qt)),Wn=new Set,wn=[],Cs=[gn];for(let yn=Mn;yn<Ue.length-1;yn+=Mn)Cs.push(Ue[yn]);Cs.push(At);for(const yn of Cs){const ns=Vi(yn.x,yn.y);if(!ns||Wn.has(ns)||us(ns,"[data-feedback-toolbar]"))continue;Wn.add(ns);const{name:go}=Ka(ns);wn.includes(go)||wn.push(go)}const _s=`${Math.round(We)},${Math.round(at)} → ${Math.round(bt)},${Math.round(Ze)}`;let Bs;(ot==="circle"||ot==="box")&&wn.length>0?Bs=`${ot==="box"?"Boxed":"Circled"} **${wn[0]}**${wn.length>1?` (and ${wn.slice(1).join(", ")})`:""} (region: ${_s})`:ot==="underline"&&wn.length>0?Bs=`Underlined **${wn[0]}** (${_s})`:ot==="arrow"&&wn.length>=2?Bs=`Arrow from **${wn[0]}** to **${wn[wn.length-1]}** (${Math.round(gn.x)},${Math.round(gn.y)} → ${Math.round(At.x)},${Math.round(At.y)})`:wn.length>0?Bs=`${ot==="arrow"?"Arrow":"Drawing"} near **${wn.join("**, **")}** (region: ${_s})`:Bs=`Drawing at ${_s}`,K.push(Bs)}$&&($.style.visibility=""),K.length>0&&(A+=`
**Drawings:**
`,K.forEach((we,je)=>{A+=`${je+1}. ${we}
`}))}if((De.length>0||M&&ln)&&(A+=`
`+vp(De,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:Fe,wireframePurpose:ln||void 0},kt.outputDetail)),Ee){const T=wp(Ee,kt.outputDetail,{width:window.innerWidth,height:window.innerHeight});T&&(A+=`
`+T)}if(m)try{await navigator.clipboard.writeText(A)}catch{}g==null||g(A),D(!0),tt(()=>D(!1),2e3),kt.autoClearAfterCopy&&tt(()=>ks(),500)},[B,rn,De,Ee,Fe,Ae,vs,ln,et,kt.outputDetail,Vs,kt.autoClearAfterCopy,ks,m,g]),ga=b.useCallback(async()=>{const S=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:et;let M=Ep(B,S,kt.outputDetail);if(!M&&De.length===0&&!Ee)return;if(M||(M=`## Page Feedback: ${S}
`),De.length>0&&(M+=`
`+vp(De,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:Fe,wireframePurpose:ln||void 0},kt.outputDetail)),Ee){const T=wp(Ee,kt.outputDetail,{width:window.innerWidth,height:window.innerHeight});T&&(M+=`
`+T)}h&&h(M,B),pe("sending"),await new Promise(T=>tt(T,150));const A=await zs("submit",{output:M,annotations:B},!0);pe(A?"sent":"failed"),tt(()=>pe("idle"),2500),A&&kt.autoClearAfterCopy&&tt(()=>ks(),500)},[h,zs,B,De,Ee,Fe,vs,et,kt.outputDetail,Vs,kt.autoClearAfterCopy,ks]);b.useEffect(()=>{if(!rs)return;const S=10,M=T=>{const $=T.clientX-rs.x,K=T.clientY-rs.y,ge=Math.sqrt($*$+K*K);if(!Ks&&ge>S&&Ko(!0),Ks||ge>S){let we=rs.toolbarX+$,je=rs.toolbarY+K;const Ue=20,We=337,at=44,Ze=We-(E?ls==="connected"?297:257:44),Se=Ue-Ze,tn=window.innerWidth-Ue-We;we=Math.max(Se,Math.min(tn,we)),je=Math.max(Ue,Math.min(window.innerHeight-at-Ue,je)),Ss({x:we,y:je})}},A=()=>{Ks&&(Zo.current=!0),Ko(!1),ra(null)};return document.addEventListener("mousemove",M),document.addEventListener("mouseup",A),()=>{document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",A)}},[rs,Ks,E,ls]);const Dr=b.useCallback(S=>{if(S.target.closest("button")||S.target.closest("[data-agentation-settings-panel]"))return;const M=S.currentTarget.parentElement;if(!M)return;const A=M.getBoundingClientRect(),T=(Bt==null?void 0:Bt.x)??A.left,$=(Bt==null?void 0:Bt.y)??A.top;ra({x:S.clientX,y:S.clientY,toolbarX:T,toolbarY:$})},[Bt]);if(b.useEffect(()=>{if(!Bt)return;const S=()=>{let $=Bt.x,K=Bt.y;const je=20-(337-(E?ls==="connected"?297:257:44)),Ue=window.innerWidth-20-337;$=Math.max(je,Math.min(Ue,$)),K=Math.max(20,Math.min(window.innerHeight-44-20,K)),($!==Bt.x||K!==Bt.y)&&Ss({x:$,y:K})};return S(),window.addEventListener("resize",S),()=>window.removeEventListener("resize",S)},[Bt,E,ls]),b.useEffect(()=>{const S=M=>{const A=M.target,T=A.tagName==="INPUT"||A.tagName==="TEXTAREA"||A.isContentEditable;if(M.key==="Escape"){if(Ae){xt?_t(null):_a();return}if(es){ws(!1);return}if(pn.length>0){co([]);return}W||E&&(Un(),O(!1))}if((M.metaKey||M.ctrlKey)&&M.shiftKey&&(M.key==="f"||M.key==="F")){M.preventDefault(),Un(),E?Er():O(!0);return}if(!(T||M.metaKey||M.ctrlKey)&&((M.key==="p"||M.key==="P")&&(M.preventDefault(),Un(),dl()),(M.key==="l"||M.key==="L")&&(M.preventDefault(),Un(),es&&ws(!1),ce&&ze(!1),W&&fl(),Ae?_a():wt(!0)),(M.key==="h"||M.key==="H")&&B.length>0&&(M.preventDefault(),Un(),z($=>!$)),(M.key==="c"||M.key==="C")&&(B.length>0||De.length>0||Ee)&&(M.preventDefault(),Un(),ml()),(M.key==="x"||M.key==="X")&&(B.length>0||De.length>0||Ee)&&(M.preventDefault(),Un(),ks(),De.length>0&&yt([]),Ee&&Jn(null)),M.key==="s"||M.key==="S")){const $=wo(kt.webhookUrl)||wo(C||"");B.length>0&&$&&Z==="idle"&&(M.preventDefault(),Un(),ga())}};return document.addEventListener("keydown",S),()=>document.removeEventListener("keydown",S)},[E,es,Ae,xt,De,Ee,W,B.length,kt.webhookUrl,C,Z,ga,dl,ml,ks,pn]),!Pe||de)return null;const ei=B.length>0,jo=B.filter(S=>!Ai.has(S.id)&&S.kind!=="placement"&&S.kind!=="rearrange"),Ar=jo.length>0,Mo=B.filter(S=>Ai.has(S.id)),Nr=S=>{const K=S.x/100*window.innerWidth,ge=typeof S.y=="string"?parseFloat(S.y):S.y,we={};window.innerHeight-ge-22-10<80&&(we.top="auto",we.bottom="calc(100% + 10px)");const Ue=K-200/2,We=10;if(Ue<We){const at=We-Ue;we.left=`calc(50% + ${at}px)`}else if(Ue+200>window.innerWidth-We){const at=Ue+200-(window.innerWidth-We);we.left=`calc(50% - ${at}px)`}return we};return ng.createPortal(r.jsxs("div",{ref:xe,style:{display:"contents"},"data-agentation-theme":hs?"dark":"light","data-agentation-accent":kt.annotationColorId,"data-agentation-root":"",children:[r.jsx("div",{className:`${_e.toolbar}${k?` ${k}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:Bt?{left:Bt.x,top:Bt.y,right:"auto",bottom:"auto"}:void 0,children:r.jsxs("div",{className:`${_e.toolbarContainer} ${E?_e.expanded:_e.collapsed} ${Sr?_e.entrance:""} ${G?_e.hiding:""} ${!kt.webhooksEnabled&&(wo(kt.webhookUrl)||wo(C||""))?_e.serverConnected:""}`,onClick:E?void 0:S=>{if(Zo.current){Zo.current=!1,S.preventDefault();return}O(!0)},onMouseDown:Dr,role:E?void 0:"button",tabIndex:E?-1:0,title:E?void 0:"Start feedback mode",children:[r.jsxs("div",{className:`${_e.toggleContent} ${E?_e.hidden:_e.visible}`,children:[r.jsx(ob,{size:24}),Ar&&r.jsx("span",{className:`${_e.badge} ${E?_e.fadeOut:""} ${Sr?_e.entrance:""}`,children:jo.length})]}),r.jsxs("div",{className:`${_e.controlsContent} ${E?_e.visible:_e.hidden} ${Bt&&Bt.y<100?_e.tooltipBelow:""} ${jt||ce?_e.tooltipsHidden:""} ${xr?_e.tooltipsInSession:""}`,onMouseEnter:Vo,onMouseLeave:Su,children:[r.jsxs("div",{className:`${_e.buttonWrapper} ${Bt&&Bt.x<120?_e.buttonWrapperAlignLeft:""}`,children:[r.jsx("button",{className:_e.controlButton,onClick:S=>{S.stopPropagation(),Un(),dl()},"data-active":Y,children:r.jsx(cb,{size:24,isPaused:Y})}),r.jsxs("span",{className:_e.buttonTooltip,children:[Y?"Resume animations":"Pause animations",r.jsx("span",{className:_e.shortcut,children:"P"})]})]}),r.jsxs("div",{className:_e.buttonWrapper,children:[r.jsx("button",{className:`${_e.controlButton} ${hs?"":_e.light}`,onClick:S=>{S.stopPropagation(),Un(),es&&ws(!1),ce&&ze(!1),W&&fl(),Ae?_a():wt(!0)},"data-active":Ae,style:Ae&&Fe?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:r.jsx(yb,{size:21})}),r.jsxs("span",{className:_e.buttonTooltip,children:[Ae?"Exit layout mode":"Layout mode",r.jsx("span",{className:_e.shortcut,children:"L"})]})]}),r.jsxs("div",{className:_e.buttonWrapper,children:[r.jsx("button",{className:_e.controlButton,onClick:S=>{S.stopPropagation(),Un(),z(!F)},disabled:!ei||Ae,children:r.jsx(rb,{size:24,isOpen:F})}),r.jsxs("span",{className:_e.buttonTooltip,children:[F?"Hide markers":"Show markers",r.jsx("span",{className:_e.shortcut,children:"H"})]})]}),r.jsxs("div",{className:_e.buttonWrapper,children:[r.jsx("button",{className:`${_e.controlButton} ${Ne?_e.statusShowing:""}`,onClick:S=>{S.stopPropagation(),Un(),ml()},disabled:Ae&&Fe?De.length===0&&!((Lr=Ee==null?void 0:Ee.sections)!=null&&Lr.length):!ei&&rn.length===0&&De.length===0&&!((Or=Ee==null?void 0:Ee.sections)!=null&&Or.length),"data-active":Ne,children:r.jsx(ab,{size:24,copied:Ne,tint:Ae&&Fe&&(De.length>0||(pl=Ee==null?void 0:Ee.sections)!=null&&pl.length)?"#f97316":void 0})}),r.jsxs("span",{className:_e.buttonTooltip,children:[Ae&&Fe?"Copy layout":"Copy feedback",r.jsx("span",{className:_e.shortcut,children:"C"})]})]}),r.jsxs("div",{className:`${_e.buttonWrapper} ${_e.sendButtonWrapper} ${E&&!kt.webhooksEnabled&&(wo(kt.webhookUrl)||wo(C||""))?_e.sendButtonVisible:""}`,children:[r.jsxs("button",{className:`${_e.controlButton} ${Z==="sent"||Z==="failed"?_e.statusShowing:""}`,onClick:S=>{S.stopPropagation(),Un(),ga()},disabled:!ei||!wo(kt.webhookUrl)&&!wo(C||"")||Z==="sending","data-no-hover":Z==="sent"||Z==="failed",tabIndex:wo(kt.webhookUrl)||wo(C||"")?0:-1,children:[r.jsx(lb,{size:24,state:Z}),ei&&Z==="idle"&&r.jsx("span",{className:_e.buttonBadge,children:B.length})]}),r.jsxs("span",{className:_e.buttonTooltip,children:["Send Annotations",r.jsx("span",{className:_e.shortcut,children:"S"})]})]}),r.jsxs("div",{className:_e.buttonWrapper,children:[r.jsx("button",{className:_e.controlButton,onClick:S=>{S.stopPropagation(),Un(),ks()},disabled:!ei&&rn.length===0&&De.length===0&&!((gl=Ee==null?void 0:Ee.sections)!=null&&gl.length),"data-danger":!0,children:r.jsx(db,{size:24})}),r.jsxs("span",{className:_e.buttonTooltip,children:["Clear all",r.jsx("span",{className:_e.shortcut,children:"X"})]})]}),r.jsxs("div",{className:_e.buttonWrapper,children:[r.jsx("button",{className:_e.controlButton,onClick:S=>{S.stopPropagation(),Un(),Ae&&_a(),ze(!ce)},children:r.jsx(ub,{size:24})}),p&&ls!=="disconnected"&&r.jsx("span",{className:`${_e.mcpIndicator} ${_e[ls]} ${ce?_e.hidden:""}`,title:ls==="connected"?"MCP Connected":"MCP Connecting..."}),r.jsx("span",{className:_e.buttonTooltip,children:"Settings"})]}),r.jsx("div",{className:_e.divider}),r.jsxs("div",{className:`${_e.buttonWrapper} ${Bt&&typeof window<"u"&&Bt.x>window.innerWidth-120?_e.buttonWrapperAlignRight:""}`,children:[r.jsx("button",{className:_e.controlButton,onClick:S=>{S.stopPropagation(),Un(),Er()},children:r.jsx(fb,{size:24})}),r.jsxs("span",{className:_e.buttonTooltip,children:["Exit",r.jsx("span",{className:_e.shortcut,children:"Esc"})]})]})]}),r.jsx(Wv,{visible:Ae&&E,activeType:xt,onSelect:S=>{_t(xt===S?null:S)},isDarkMode:hs,sectionCount:(Ee==null?void 0:Ee.sections.length)??0,onDetectSections:()=>{const S=o4(),M=(Ee==null?void 0:Ee.sections)??[],A=new Set(M.map(ge=>ge.selector)),T=S.filter(ge=>!A.has(ge.selector)),$=[...M,...T],K=[...(Ee==null?void 0:Ee.originalOrder)??[],...T.map(ge=>ge.id)];Jn({sections:$,originalOrder:K,detectedAt:Date.now()})},placementCount:De.length,onClearPlacements:()=>{ao(S=>S+1),sl(S=>S+1),tt(()=>{Jn({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:Fe,onBlankCanvasChange:S=>{const M={sections:[],originalOrder:[],detectedAt:Date.now()};S?(nl.current={rearrange:Ee,placements:De},Jn(io.current.rearrange||M),yt(io.current.placements),_t(null)):(io.current={rearrange:Ee,placements:De},Jn(nl.current.rearrange||M),yt(nl.current.placements)),Ot(S)},wireframePurpose:ln,onWireframePurposeChange:An,Tooltip:Zi,onDragStart:(S,M)=>{M.preventDefault();const A=Le[S];let T=null,$=!1;const K=M.clientX,ge=M.clientY,we=M.target.closest("[data-feedback-toolbar]"),je=(we==null?void 0:we.getBoundingClientRect().top)??window.innerHeight,Ue=at=>{const bt=at.clientX-K,Ze=at.clientY-ge;if(!$&&(Math.abs(bt)>4||Math.abs(Ze)>4)&&($=!0,T=document.createElement("div"),T.className=`${ne.dragPreview}${Fe?` ${ne.dragPreviewWireframe}`:""}`,document.body.appendChild(T)),!T)return;const Se=Math.max(0,je-at.clientY),tn=Math.min(1,Se/180),qt=1-Math.pow(1-tn,2),gn=28,At=20,hn=Math.min(140,A.width*.18),ot=Math.min(90,A.height*.18),mt=gn+(hn-gn)*qt,an=At+(ot-At)*qt;T.style.width=`${mt}px`,T.style.height=`${an}px`,T.style.left=`${at.clientX-mt/2}px`,T.style.top=`${at.clientY-an/2}px`,T.style.opacity=`${.5+.5*qt}`,T.textContent=qt>.25?S:""},We=at=>{if(window.removeEventListener("mousemove",Ue),window.removeEventListener("mouseup",We),T&&document.body.removeChild(T),$){const bt=A.width,Ze=A.height,Se=window.scrollY,tn=Math.max(0,at.clientX-bt/2),qt=Math.max(0,at.clientY+Se-Ze/2),gn={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:S,x:tn,y:qt,width:bt,height:Ze,scrollY:Se,timestamp:Date.now()};yt(At=>[...At,gn]),_t(null),Wo.current=new Set,ia(At=>At+1)}};window.addEventListener("mousemove",Ue),window.addEventListener("mouseup",We)}}),r.jsx(h3,{settings:kt,onSettingsChange:S=>vr(M=>({...M,...S})),isDarkMode:hs,onToggleTheme:Qs,isDevMode:il,connectionStatus:ls,endpoint:p,isVisible:Ce,toolbarNearBottom:!!Bt&&Bt.y<230,settingsPage:it,onSettingsPageChange:ht,onHideToolbar:Cu})]})}),(Ae||Mt)&&r.jsx("div",{className:`${ne.blankCanvas} ${vn?ne.visible:""} ${Yt?ne.gridActive:""}`,style:{"--canvas-opacity":In},"data-feedback-toolbar":!0}),Ae&&Fe&&vn&&r.jsxs("div",{className:ne.wireframeNotice,"data-feedback-toolbar":!0,children:[r.jsxs("div",{className:ne.wireframeOpacityRow,children:[r.jsx("span",{className:ne.wireframeOpacityLabel,children:"Toggle Opacity"}),r.jsx("input",{type:"range",className:ne.wireframeOpacitySlider,min:0,max:1,step:.01,value:In,onChange:S=>oo(Number(S.target.value))})]}),r.jsxs("div",{className:ne.wireframeNoticeTitleRow,children:[r.jsx("span",{className:ne.wireframeNoticeTitle,children:"Wireframe Mode"}),r.jsx("span",{className:ne.wireframeNoticeDivider}),r.jsx("button",{className:ne.wireframeStartOver,onClick:()=>{ao(S=>S+1),Jn({sections:[],originalOrder:[],detectedAt:Date.now()}),io.current={rearrange:null,placements:[]},An(""),Kc(et)},children:"Start Over"})]}),"Drag components onto the canvas.",r.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(Ae||Mt)&&r.jsx(Hv,{placements:De,onChange:yt,activeComponent:Mt?null:xt,onActiveComponentChange:_t,isDarkMode:hs,exiting:Mt,onInteractionChange:jn,passthrough:!xt,extraSnapRects:Ee==null?void 0:Ee.sections.map(S=>S.currentRect),deselectSignal:Ei,clearSignal:Ti,wireframe:Fe,onSelectionChange:(S,M)=>{Wo.current=S,M||(Ns.current=new Set,Go(A=>A+1))},onDragMove:(S,M)=>{const A=Ns.current;if(!(!A.size||!Ee)){if(!Xn.current){Xn.current=new Map;for(const T of Ee.sections)A.has(T.id)&&Xn.current.set(T.id,{x:T.currentRect.x,y:T.currentRect.y})}for(const T of Ee.sections){if(!A.has(T.id)||!Xn.current.get(T.id))continue;const K=document.querySelector(`[data-rearrange-section="${T.id}"]`);K&&(K.style.transform=`translate(${S}px, ${M}px)`)}}},onDragEnd:(S,M,A)=>{const T=Ns.current,$=Xn.current;if(Xn.current=null,!(!T.size||!Ee||!$)){for(const K of T){const ge=document.querySelector(`[data-rearrange-section="${K}"]`);ge&&(ge.style.transform="")}A&&Jn(K=>K&&{...K,sections:K.sections.map(ge=>{const we=$.get(ge.id);return we?{...ge,currentRect:{...ge.currentRect,x:Math.max(0,we.x+S),y:Math.max(0,we.y+M)}}:ge})})}}}),(Ae||Mt)&&Ee&&r.jsx(l4,{rearrangeState:Ee,onChange:Jn,isDarkMode:hs,exiting:Mt,blankCanvas:Fe,extraSnapRects:De.map(S=>({x:S.x,y:S.y,width:S.width,height:S.height})),clearSignal:Nn,deselectSignal:Fo,onSelectionChange:(S,M)=>{Ns.current=S,M||(Wo.current=new Set,ia(A=>A+1))},onDragMove:(S,M)=>{const A=Wo.current;if(A.size){if(!Xn.current){Xn.current=new Map;for(const T of De)A.has(T.id)&&Xn.current.set(T.id,{x:T.x,y:T.y})}for(const T of A){const $=document.querySelector(`[data-design-placement="${T}"]`);$&&($.style.transform=`translate(${S}px, ${M}px)`)}}},onDragEnd:(S,M,A)=>{const T=Wo.current,$=Xn.current;if(Xn.current=null,!(!T.size||!$)){for(const K of T){const ge=document.querySelector(`[data-design-placement="${K}"]`);ge&&(ge.style.transform="")}A&&yt(K=>K.map(ge=>{const we=$.get(ge.id);return we?{...ge,x:Math.max(0,we.x+S),y:Math.max(0,we.y+M)}:ge}))}}}),r.jsx("canvas",{ref:Qo,className:`${_e.drawCanvas} ${es?_e.active:""}`,style:{opacity:cl?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),r.jsxs("div",{className:_e.markersLayer,"data-feedback-toolbar":!0,children:[he&&jo.filter(S=>!S.isFixed).map((S,M,A)=>r.jsx(Tp,{annotation:S,globalIndex:jo.findIndex(T=>T.id===S.id),layerIndex:M,layerSize:A.length,isExiting:Q,isClearing:rt,isAnimated:ll.has(S.id),isHovered:!Q&&en===S.id,isDeleting:Dt===S.id,isEditingAny:!!V,renumberFrom:bn,markerClickBehavior:kt.markerClickBehavior,tooltipStyle:Nr(S),onHoverEnter:T=>!Q&&T.id!==fa.current&&pa(T),onHoverLeave:()=>pa(null),onClick:T=>kt.markerClickBehavior==="delete"?hl(T.id):ma(T),onContextMenu:ma},S.id)),he&&!Q&&Mo.filter(S=>!S.isFixed).map(S=>r.jsx(Rp,{annotation:S},S.id))]}),r.jsxs("div",{className:_e.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[he&&jo.filter(S=>S.isFixed).map((S,M,A)=>r.jsx(Tp,{annotation:S,globalIndex:jo.findIndex(T=>T.id===S.id),layerIndex:M,layerSize:A.length,isExiting:Q,isClearing:rt,isAnimated:ll.has(S.id),isHovered:!Q&&en===S.id,isDeleting:Dt===S.id,isEditingAny:!!V,renumberFrom:bn,markerClickBehavior:kt.markerClickBehavior,tooltipStyle:Nr(S),onHoverEnter:T=>!Q&&T.id!==fa.current&&pa(T),onHoverLeave:()=>pa(null),onClick:T=>kt.markerClickBehavior==="delete"?hl(T.id):ma(T),onContextMenu:ma},S.id)),he&&!Q&&Mo.filter(S=>S.isFixed).map(S=>r.jsx(Rp,{annotation:S,fixed:!0},S.id))]}),E&&r.jsxs("div",{className:_e.overlay,"data-feedback-toolbar":!0,style:W||V?{zIndex:99999}:void 0,children:[(oe==null?void 0:oe.rect)&&!W&&!St&&!Zs&&r.jsx("div",{className:`${_e.hoverHighlight} ${_e.enter}`,style:{left:oe.rect.left,top:oe.rect.top,width:oe.rect.width,height:oe.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),pn.filter(S=>document.contains(S.element)).map((S,M)=>{const A=S.element.getBoundingClientRect(),T=pn.length>1;return r.jsx("div",{className:T?_e.multiSelectOutline:_e.singleSelectOutline,style:{position:"fixed",left:A.left,top:A.top,width:A.width,height:A.height,...T?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},M)}),en&&!W&&(()=>{var $;const S=B.find(K=>K.id===en);if(!(S!=null&&S.boundingBox))return null;if(($=S.elementBoundingBoxes)!=null&&$.length)return Ke.length>0?Ke.filter(K=>document.contains(K)).map((K,ge)=>{const we=K.getBoundingClientRect();return r.jsx("div",{className:`${_e.multiSelectOutline} ${_e.enter}`,style:{left:we.left,top:we.top,width:we.width,height:we.height}},`hover-outline-live-${ge}`)}):S.elementBoundingBoxes.map((K,ge)=>r.jsx("div",{className:`${_e.multiSelectOutline} ${_e.enter}`,style:{left:K.x,top:K.y-Re,width:K.width,height:K.height}},`hover-outline-${ge}`));const M=ve&&document.contains(ve)?ve.getBoundingClientRect():null,A=M?{x:M.left,y:M.top,width:M.width,height:M.height}:{x:S.boundingBox.x,y:S.isFixed?S.boundingBox.y:S.boundingBox.y-Re,width:S.boundingBox.width,height:S.boundingBox.height},T=S.isMultiSelect;return r.jsx("div",{className:`${T?_e.multiSelectOutline:_e.singleSelectOutline} ${_e.enter}`,style:{left:A.x,top:A.y,width:A.width,height:A.height,...T?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),oe&&!W&&!St&&!Zs&&r.jsxs("div",{className:`${_e.hoverTooltip} ${_e.enter}`,style:{left:Math.max(8,Math.min(N.x,window.innerWidth-100)),top:Math.max(N.y-(oe.reactComponents?48:32),8)},children:[oe.reactComponents&&r.jsx("div",{className:_e.hoverReactPath,children:oe.reactComponents}),r.jsx("div",{className:_e.hoverElementName,children:oe.elementName})]}),W&&r.jsxs(r.Fragment,{children:[(ti=W.multiSelectElements)!=null&&ti.length?W.multiSelectElements.filter(S=>document.contains(S)).map((S,M)=>{const A=S.getBoundingClientRect();return r.jsx("div",{className:`${_e.multiSelectOutline} ${Ln?_e.exit:_e.enter}`,style:{left:A.left,top:A.top,width:A.width,height:A.height}},`pending-multi-${M}`)}):W.targetElement&&document.contains(W.targetElement)?(()=>{const S=W.targetElement.getBoundingClientRect();return r.jsx("div",{className:`${_e.singleSelectOutline} ${Ln?_e.exit:_e.enter}`,style:{left:S.left,top:S.top,width:S.width,height:S.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():W.boundingBox&&r.jsx("div",{className:`${W.isMultiSelect?_e.multiSelectOutline:_e.singleSelectOutline} ${Ln?_e.exit:_e.enter}`,style:{left:W.boundingBox.x,top:W.boundingBox.y-Re,width:W.boundingBox.width,height:W.boundingBox.height,...W.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{const S=W.x,M=W.isFixed?W.y:W.y-Re;return r.jsxs(r.Fragment,{children:[r.jsx(s3,{x:S,y:M,isMultiSelect:W.isMultiSelect,isExiting:Ln}),r.jsx(_u,{ref:Cr,element:W.element,selectedText:W.selectedText,computedStyles:W.computedStylesObj,placeholder:W.element==="Area selection"?"What should change in this area?":W.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:ju,onCancel:fl,isExiting:Ln,lightMode:!hs,accentColor:W.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,S/100*window.innerWidth)),...M>window.innerHeight-290?{bottom:window.innerHeight-M+20}:{top:M+20}}})]})})()]}),V&&r.jsxs(r.Fragment,{children:[(ni=V.elementBoundingBoxes)!=null&&ni.length?nt.length>0?nt.filter(S=>document.contains(S)).map((S,M)=>{const A=S.getBoundingClientRect();return r.jsx("div",{className:`${_e.multiSelectOutline} ${_e.enter}`,style:{left:A.left,top:A.top,width:A.width,height:A.height}},`edit-multi-live-${M}`)}):V.elementBoundingBoxes.map((S,M)=>r.jsx("div",{className:`${_e.multiSelectOutline} ${_e.enter}`,style:{left:S.x,top:S.y-Re,width:S.width,height:S.height}},`edit-multi-${M}`)):(()=>{const S=Ge&&document.contains(Ge)?Ge.getBoundingClientRect():null,M=S?{x:S.left,y:S.top,width:S.width,height:S.height}:V.boundingBox?{x:V.boundingBox.x,y:V.isFixed?V.boundingBox.y:V.boundingBox.y-Re,width:V.boundingBox.width,height:V.boundingBox.height}:null;return M?r.jsx("div",{className:`${V.isMultiSelect?_e.multiSelectOutline:_e.singleSelectOutline} ${_e.enter}`,style:{left:M.x,top:M.y,width:M.width,height:M.height,...V.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),r.jsx(_u,{ref:jr,element:V.element,selectedText:V.selectedText,computedStyles:e4(V.computedStyles),placeholder:"Edit your feedback...",initialValue:V.comment,submitLabel:"Save",onSubmit:Mu,onCancel:_l,onDelete:()=>hl(V.id),isExiting:ca,lightMode:!hs,accentColor:V.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{const S=V.isFixed?V.y:V.y-Re;return{left:Math.max(160,Math.min(window.innerWidth-160,V.x/100*window.innerWidth)),...S>window.innerHeight-290?{bottom:window.innerHeight-S+20}:{top:S+20}}})()})]}),Zs&&r.jsxs(r.Fragment,{children:[r.jsx("div",{ref:mo,className:_e.dragSelection}),r.jsx("div",{ref:Jo,className:_e.highlightsContainer})]})]})]}),document.body)}const p3=()=>{const o=Co();return o.pathname==="/"||o.pathname==="/controller"?null:r.jsx("nav",{className:"bg-slate-900 border-b border-slate-800 text-slate-100 p-4 flex items-center justify-between shadow-lg",children:r.jsxs("div",{className:"flex items-center gap-6",children:[r.jsx(rr,{to:"/",className:"font-extrabold text-xl tracking-tight text-cyan-400 hover:text-cyan-300",children:"⚽ Soccer Web Game"}),r.jsx(rr,{to:"/",className:"text-sm font-semibold hover:text-cyan-400 transition",children:"Arena Game"}),r.jsx(rr,{to:"/controller",className:"text-sm font-semibold hover:text-cyan-400 transition",children:"📱 Mobile Remote"})]})})};function g3(){return r.jsx(k2,{children:r.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 flex flex-col select-none",children:[r.jsx(p3,{}),r.jsxs(e2,{children:[r.jsx(Xf,{path:"/",element:r.jsx(K5,{})}),r.jsx(Xf,{path:"/controller",element:r.jsx(Z5,{})})]}),r.jsx(m3,{})]})})}ex.createRoot(document.getElementById("root")).render(r.jsx(Rn.StrictMode,{children:r.jsx(g3,{})}));
