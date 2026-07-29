var $1=Object.defineProperty;var P1=o=>{throw TypeError(o)};var I1=(o,n,i)=>n in o?$1(o,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[n]=i;var Fe=(o,n,i)=>I1(o,typeof n!="symbol"?n+"":n,i);var Ql=(o,n,i)=>n.has(o)?P1("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(o):n.set(o,i);function U1(o,n){for(var i=0;i<n.length;i++){const l=n[i];if(typeof l!="string"&&!Array.isArray(l)){for(const c in l)if(c!=="default"&&!(c in o)){const u=Object.getOwnPropertyDescriptor(l,c);u&&Object.defineProperty(o,c,u.get?u:{enumerable:!0,get:()=>l[c]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const u of c)if(u.type==="childList")for(const _ of u.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&l(_)}).observe(document,{childList:!0,subtree:!0});function i(c){const u={};return c.integrity&&(u.integrity=c.integrity),c.referrerPolicy&&(u.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?u.credentials="include":c.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function l(c){if(c.ep)return;c.ep=!0;const u=i(c);fetch(c.href,u)}})();function dh(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var gf={exports:{}},Vl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp;function H1(){if(Lp)return Vl;Lp=1;var o=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function i(l,c,u){var _=null;if(u!==void 0&&(_=""+u),c.key!==void 0&&(_=""+c.key),"key"in c){u={};for(var g in c)g!=="key"&&(u[g]=c[g])}else u=c;return c=u.ref,{$$typeof:o,type:l,key:_,ref:c!==void 0?c:null,props:u}}return Vl.Fragment=n,Vl.jsx=i,Vl.jsxs=i,Vl}var Op;function Y1(){return Op||(Op=1,gf.exports=H1()),gf.exports}var r=Y1(),yf={exports:{}},ht={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function X1(){if(zp)return ht;zp=1;var o=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),_=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),v=Symbol.iterator;function j(A){return A===null||typeof A!="object"?null:(A=v&&A[v]||A["@@iterator"],typeof A=="function"?A:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,O={};function B(A,Z,_e){this.props=A,this.context=Z,this.refs=O,this.updater=_e||k}B.prototype.isReactComponent={},B.prototype.setState=function(A,Z){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,Z,"setState")},B.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function J(){}J.prototype=B.prototype;function F(A,Z,_e){this.props=A,this.context=Z,this.refs=O,this.updater=_e||k}var z=F.prototype=new J;z.constructor=F,T(z,B.prototype),z.isPureReactComponent=!0;var ie=Array.isArray;function ge(){}var Y={H:null,A:null,T:null,S:null},fe=Object.prototype.hasOwnProperty;function ye(A,Z,_e){var je=_e.ref;return{$$typeof:o,type:A,key:Z,ref:je!==void 0?je:null,props:_e}}function xe(A,Z){return ye(A.type,Z,A.props)}function ue(A){return typeof A=="object"&&A!==null&&A.$$typeof===o}function K(A){var Z={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(_e){return Z[_e]})}var Ue=/\/+/g;function me(A,Z){return typeof A=="object"&&A!==null&&A.key!=null?K(""+A.key):Z.toString(36)}function Se(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(ge,ge):(A.status="pending",A.then(function(Z){A.status==="pending"&&(A.status="fulfilled",A.value=Z)},function(Z){A.status==="pending"&&(A.status="rejected",A.reason=Z)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function N(A,Z,_e,je,Xe){var lt=typeof A;(lt==="undefined"||lt==="boolean")&&(A=null);var ct=!1;if(A===null)ct=!0;else switch(lt){case"bigint":case"string":case"number":ct=!0;break;case"object":switch(A.$$typeof){case o:case n:ct=!0;break;case p:return ct=A._init,N(ct(A._payload),Z,_e,je,Xe)}}if(ct)return Xe=Xe(A),ct=je===""?"."+me(A,0):je,ie(Xe)?(_e="",ct!=null&&(_e=ct.replace(Ue,"$&/")+"/"),N(Xe,Z,_e,"",function(nt){return nt})):Xe!=null&&(ue(Xe)&&(Xe=xe(Xe,_e+(Xe.key==null||A&&A.key===Xe.key?"":(""+Xe.key).replace(Ue,"$&/")+"/")+ct)),Z.push(Xe)),1;ct=0;var en=je===""?".":je+":";if(ie(A))for(var Ge=0;Ge<A.length;Ge++)je=A[Ge],lt=en+me(je,Ge),ct+=N(je,Z,_e,lt,Xe);else if(Ge=j(A),typeof Ge=="function")for(A=Ge.call(A),Ge=0;!(je=A.next()).done;)je=je.value,lt=en+me(je,Ge++),ct+=N(je,Z,_e,lt,Xe);else if(lt==="object"){if(typeof A.then=="function")return N(Se(A),Z,_e,je,Xe);throw Z=String(A),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return ct}function ce(A,Z,_e){if(A==null)return A;var je=[],Xe=0;return N(A,je,"","",function(lt){return Z.call(_e,lt,Xe++)}),je}function W(A){if(A._status===-1){var Z=A._result;Z=Z(),Z.then(function(_e){(A._status===0||A._status===-1)&&(A._status=1,A._result=_e)},function(_e){(A._status===0||A._status===-1)&&(A._status=2,A._result=_e)}),A._status===-1&&(A._status=0,A._result=Z)}if(A._status===1)return A._result.default;throw A._result}var be=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)},Ae={map:ce,forEach:function(A,Z,_e){ce(A,function(){Z.apply(this,arguments)},_e)},count:function(A){var Z=0;return ce(A,function(){Z++}),Z},toArray:function(A){return ce(A,function(Z){return Z})||[]},only:function(A){if(!ue(A))throw Error("React.Children.only expected to receive a single React element child.");return A}};return ht.Activity=y,ht.Children=Ae,ht.Component=B,ht.Fragment=i,ht.Profiler=c,ht.PureComponent=F,ht.StrictMode=l,ht.Suspense=h,ht.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Y,ht.__COMPILER_RUNTIME={__proto__:null,c:function(A){return Y.H.useMemoCache(A)}},ht.cache=function(A){return function(){return A.apply(null,arguments)}},ht.cacheSignal=function(){return null},ht.cloneElement=function(A,Z,_e){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var je=T({},A.props),Xe=A.key;if(Z!=null)for(lt in Z.key!==void 0&&(Xe=""+Z.key),Z)!fe.call(Z,lt)||lt==="key"||lt==="__self"||lt==="__source"||lt==="ref"&&Z.ref===void 0||(je[lt]=Z[lt]);var lt=arguments.length-2;if(lt===1)je.children=_e;else if(1<lt){for(var ct=Array(lt),en=0;en<lt;en++)ct[en]=arguments[en+2];je.children=ct}return ye(A.type,Xe,je)},ht.createContext=function(A){return A={$$typeof:_,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:u,_context:A},A},ht.createElement=function(A,Z,_e){var je,Xe={},lt=null;if(Z!=null)for(je in Z.key!==void 0&&(lt=""+Z.key),Z)fe.call(Z,je)&&je!=="key"&&je!=="__self"&&je!=="__source"&&(Xe[je]=Z[je]);var ct=arguments.length-2;if(ct===1)Xe.children=_e;else if(1<ct){for(var en=Array(ct),Ge=0;Ge<ct;Ge++)en[Ge]=arguments[Ge+2];Xe.children=en}if(A&&A.defaultProps)for(je in ct=A.defaultProps,ct)Xe[je]===void 0&&(Xe[je]=ct[je]);return ye(A,lt,Xe)},ht.createRef=function(){return{current:null}},ht.forwardRef=function(A){return{$$typeof:g,render:A}},ht.isValidElement=ue,ht.lazy=function(A){return{$$typeof:p,_payload:{_status:-1,_result:A},_init:W}},ht.memo=function(A,Z){return{$$typeof:m,type:A,compare:Z===void 0?null:Z}},ht.startTransition=function(A){var Z=Y.T,_e={};Y.T=_e;try{var je=A(),Xe=Y.S;Xe!==null&&Xe(_e,je),typeof je=="object"&&je!==null&&typeof je.then=="function"&&je.then(ge,be)}catch(lt){be(lt)}finally{Z!==null&&_e.types!==null&&(Z.types=_e.types),Y.T=Z}},ht.unstable_useCacheRefresh=function(){return Y.H.useCacheRefresh()},ht.use=function(A){return Y.H.use(A)},ht.useActionState=function(A,Z,_e){return Y.H.useActionState(A,Z,_e)},ht.useCallback=function(A,Z){return Y.H.useCallback(A,Z)},ht.useContext=function(A){return Y.H.useContext(A)},ht.useDebugValue=function(){},ht.useDeferredValue=function(A,Z){return Y.H.useDeferredValue(A,Z)},ht.useEffect=function(A,Z){return Y.H.useEffect(A,Z)},ht.useEffectEvent=function(A){return Y.H.useEffectEvent(A)},ht.useId=function(){return Y.H.useId()},ht.useImperativeHandle=function(A,Z,_e){return Y.H.useImperativeHandle(A,Z,_e)},ht.useInsertionEffect=function(A,Z){return Y.H.useInsertionEffect(A,Z)},ht.useLayoutEffect=function(A,Z){return Y.H.useLayoutEffect(A,Z)},ht.useMemo=function(A,Z){return Y.H.useMemo(A,Z)},ht.useOptimistic=function(A,Z){return Y.H.useOptimistic(A,Z)},ht.useReducer=function(A,Z,_e){return Y.H.useReducer(A,Z,_e)},ht.useRef=function(A){return Y.H.useRef(A)},ht.useState=function(A){return Y.H.useState(A)},ht.useSyncExternalStore=function(A,Z,_e){return Y.H.useSyncExternalStore(A,Z,_e)},ht.useTransition=function(){return Y.H.useTransition()},ht.version="19.2.8",ht}var Bp;function fh(){return Bp||(Bp=1,yf.exports=X1()),yf.exports}var b=fh();const Mn=dh(b);var xf={exports:{}},Kl={},bf={exports:{}},vf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function G1(){return $p||($p=1,(function(o){function n(N,ce){var W=N.length;N.push(ce);e:for(;0<W;){var be=W-1>>>1,Ae=N[be];if(0<c(Ae,ce))N[be]=ce,N[W]=Ae,W=be;else break e}}function i(N){return N.length===0?null:N[0]}function l(N){if(N.length===0)return null;var ce=N[0],W=N.pop();if(W!==ce){N[0]=W;e:for(var be=0,Ae=N.length,A=Ae>>>1;be<A;){var Z=2*(be+1)-1,_e=N[Z],je=Z+1,Xe=N[je];if(0>c(_e,W))je<Ae&&0>c(Xe,_e)?(N[be]=Xe,N[je]=W,be=je):(N[be]=_e,N[Z]=W,be=Z);else if(je<Ae&&0>c(Xe,W))N[be]=Xe,N[je]=W,be=je;else break e}}return ce}function c(N,ce){var W=N.sortIndex-ce.sortIndex;return W!==0?W:N.id-ce.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var _=Date,g=_.now();o.unstable_now=function(){return _.now()-g}}var h=[],m=[],p=1,y=null,v=3,j=!1,k=!1,T=!1,O=!1,B=typeof setTimeout=="function"?setTimeout:null,J=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function z(N){for(var ce=i(m);ce!==null;){if(ce.callback===null)l(m);else if(ce.startTime<=N)l(m),ce.sortIndex=ce.expirationTime,n(h,ce);else break;ce=i(m)}}function ie(N){if(T=!1,z(N),!k)if(i(h)!==null)k=!0,ge||(ge=!0,K());else{var ce=i(m);ce!==null&&Se(ie,ce.startTime-N)}}var ge=!1,Y=-1,fe=5,ye=-1;function xe(){return O?!0:!(o.unstable_now()-ye<fe)}function ue(){if(O=!1,ge){var N=o.unstable_now();ye=N;var ce=!0;try{e:{k=!1,T&&(T=!1,J(Y),Y=-1),j=!0;var W=v;try{t:{for(z(N),y=i(h);y!==null&&!(y.expirationTime>N&&xe());){var be=y.callback;if(typeof be=="function"){y.callback=null,v=y.priorityLevel;var Ae=be(y.expirationTime<=N);if(N=o.unstable_now(),typeof Ae=="function"){y.callback=Ae,z(N),ce=!0;break t}y===i(h)&&l(h),z(N)}else l(h);y=i(h)}if(y!==null)ce=!0;else{var A=i(m);A!==null&&Se(ie,A.startTime-N),ce=!1}}break e}finally{y=null,v=W,j=!1}ce=void 0}}finally{ce?K():ge=!1}}}var K;if(typeof F=="function")K=function(){F(ue)};else if(typeof MessageChannel<"u"){var Ue=new MessageChannel,me=Ue.port2;Ue.port1.onmessage=ue,K=function(){me.postMessage(null)}}else K=function(){B(ue,0)};function Se(N,ce){Y=B(function(){N(o.unstable_now())},ce)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(N){N.callback=null},o.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):fe=0<N?Math.floor(1e3/N):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(N){switch(v){case 1:case 2:case 3:var ce=3;break;default:ce=v}var W=v;v=ce;try{return N()}finally{v=W}},o.unstable_requestPaint=function(){O=!0},o.unstable_runWithPriority=function(N,ce){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var W=v;v=N;try{return ce()}finally{v=W}},o.unstable_scheduleCallback=function(N,ce,W){var be=o.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?be+W:be):W=be,N){case 1:var Ae=-1;break;case 2:Ae=250;break;case 5:Ae=1073741823;break;case 4:Ae=1e4;break;default:Ae=5e3}return Ae=W+Ae,N={id:p++,callback:ce,priorityLevel:N,startTime:W,expirationTime:Ae,sortIndex:-1},W>be?(N.sortIndex=W,n(m,N),i(h)===null&&N===i(m)&&(T?(J(Y),Y=-1):T=!0,Se(ie,W-be))):(N.sortIndex=Ae,n(h,N),k||j||(k=!0,ge||(ge=!0,K()))),N},o.unstable_shouldYield=xe,o.unstable_wrapCallback=function(N){var ce=v;return function(){var W=v;v=ce;try{return N.apply(this,arguments)}finally{v=W}}}})(vf)),vf}var Pp;function F1(){return Pp||(Pp=1,bf.exports=G1()),bf.exports}var wf={exports:{}},ns={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ip;function W1(){if(Ip)return ns;Ip=1;var o=fh();function n(h){var m="https://react.dev/errors/"+h;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var p=2;p<arguments.length;p++)m+="&args[]="+encodeURIComponent(arguments[p])}return"Minified React error #"+h+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var l={d:{f:i,r:function(){throw Error(n(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal");function u(h,m,p){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:y==null?null:""+y,children:h,containerInfo:m,implementation:p}}var _=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(h,m){if(h==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return ns.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,ns.createPortal=function(h,m){var p=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(n(299));return u(h,m,null,p)},ns.flushSync=function(h){var m=_.T,p=l.p;try{if(_.T=null,l.p=2,h)return h()}finally{_.T=m,l.p=p,l.d.f()}},ns.preconnect=function(h,m){typeof h=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,l.d.C(h,m))},ns.prefetchDNS=function(h){typeof h=="string"&&l.d.D(h)},ns.preinit=function(h,m){if(typeof h=="string"&&m&&typeof m.as=="string"){var p=m.as,y=g(p,m.crossOrigin),v=typeof m.integrity=="string"?m.integrity:void 0,j=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;p==="style"?l.d.S(h,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:y,integrity:v,fetchPriority:j}):p==="script"&&l.d.X(h,{crossOrigin:y,integrity:v,fetchPriority:j,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},ns.preinitModule=function(h,m){if(typeof h=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var p=g(m.as,m.crossOrigin);l.d.M(h,{crossOrigin:p,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&l.d.M(h)},ns.preload=function(h,m){if(typeof h=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var p=m.as,y=g(p,m.crossOrigin);l.d.L(h,p,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},ns.preloadModule=function(h,m){if(typeof h=="string")if(m){var p=g(m.as,m.crossOrigin);l.d.m(h,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:p,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else l.d.m(h)},ns.requestFormReset=function(h){l.d.r(h)},ns.unstable_batchedUpdates=function(h,m){return h(m)},ns.useFormState=function(h,m,p){return _.H.useFormState(h,m,p)},ns.useFormStatus=function(){return _.H.useHostTransitionStatus()},ns.version="19.2.8",ns}var Up;function D0(){if(Up)return wf.exports;Up=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(n){console.error(n)}}return o(),wf.exports=W1(),wf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp;function q1(){if(Hp)return Kl;Hp=1;var o=F1(),n=fh(),i=D0();function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)t+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var t=e,s=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(s=t.return),e=t.return;while(e)}return t.tag===3?s:null}function _(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(u(e)!==e)throw Error(l(188))}function m(e){var t=e.alternate;if(!t){if(t=u(e),t===null)throw Error(l(188));return t!==e?null:e}for(var s=e,a=t;;){var d=s.return;if(d===null)break;var f=d.alternate;if(f===null){if(a=d.return,a!==null){s=a;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===s)return h(d),e;if(f===a)return h(d),t;f=f.sibling}throw Error(l(188))}if(s.return!==a.return)s=d,a=f;else{for(var x=!1,w=d.child;w;){if(w===s){x=!0,s=d,a=f;break}if(w===a){x=!0,a=d,s=f;break}w=w.sibling}if(!x){for(w=f.child;w;){if(w===s){x=!0,s=f,a=d;break}if(w===a){x=!0,a=f,s=d;break}w=w.sibling}if(!x)throw Error(l(189))}}if(s.alternate!==a)throw Error(l(190))}if(s.tag!==3)throw Error(l(188));return s.stateNode.current===s?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var y=Object.assign,v=Symbol.for("react.element"),j=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),J=Symbol.for("react.consumer"),F=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),ge=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),ye=Symbol.for("react.activity"),xe=Symbol.for("react.memo_cache_sentinel"),ue=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=ue&&e[ue]||e["@@iterator"],typeof e=="function"?e:null)}var Ue=Symbol.for("react.client.reference");function me(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ue?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case B:return"Profiler";case O:return"StrictMode";case ie:return"Suspense";case ge:return"SuspenseList";case ye:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case F:return e.displayName||"Context";case J:return(e._context.displayName||"Context")+".Consumer";case z:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Y:return t=e.displayName||null,t!==null?t:me(e.type)||"Memo";case fe:t=e._payload,e=e._init;try{return me(e(t))}catch{}}return null}var Se=Array.isArray,N=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},be=[],Ae=-1;function A(e){return{current:e}}function Z(e){0>Ae||(e.current=be[Ae],be[Ae]=null,Ae--)}function _e(e,t){Ae++,be[Ae]=e.current,e.current=t}var je=A(null),Xe=A(null),lt=A(null),ct=A(null);function en(e,t){switch(_e(lt,t),_e(Xe,e),_e(je,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?sp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=sp(t),e=op(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Z(je),_e(je,e)}function Ge(){Z(je),Z(Xe),Z(lt)}function nt(e){e.memoizedState!==null&&_e(ct,e);var t=je.current,s=op(t,e.type);t!==s&&(_e(Xe,e),_e(je,s))}function kt(e){Xe.current===e&&(Z(je),Z(Xe)),ct.current===e&&(Z(ct),Gl._currentValue=W)}var _t,Ot;function Pt(e){if(_t===void 0)try{throw Error()}catch(s){var t=s.stack.trim().match(/\n( *(at )?)/);_t=t&&t[1]||"",Ot=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+_t+e+Ot}var In=!1;function is(e,t){if(!e||In)return"";In=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var ae=function(){throw Error()};if(Object.defineProperty(ae.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ae,[])}catch(q){var G=q}Reflect.construct(e,[],ae)}else{try{ae.call()}catch(q){G=q}e.call(ae.prototype)}}else{try{throw Error()}catch(q){G=q}(ae=e())&&typeof ae.catch=="function"&&ae.catch(function(){})}}catch(q){if(q&&G&&typeof q.stack=="string")return[q.stack,G.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=a.DetermineComponentFrameRoot(),x=f[0],w=f[1];if(x&&w){var R=x.split(`
`),H=w.split(`
`);for(d=a=0;a<R.length&&!R[a].includes("DetermineComponentFrameRoot");)a++;for(;d<H.length&&!H[d].includes("DetermineComponentFrameRoot");)d++;if(a===R.length||d===H.length)for(a=R.length-1,d=H.length-1;1<=a&&0<=d&&R[a]!==H[d];)d--;for(;1<=a&&0<=d;a--,d--)if(R[a]!==H[d]){if(a!==1||d!==1)do if(a--,d--,0>d||R[a]!==H[d]){var ee=`
`+R[a].replace(" at new "," at ");return e.displayName&&ee.includes("<anonymous>")&&(ee=ee.replace("<anonymous>",e.displayName)),ee}while(1<=a&&0<=d);break}}}finally{In=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?Pt(s):""}function Un(e,t){switch(e.tag){case 26:case 27:case 5:return Pt(e.type);case 16:return Pt("Lazy");case 13:return e.child!==t&&t!==null?Pt("Suspense Fallback"):Pt("Suspense");case 19:return Pt("SuspenseList");case 0:case 15:return is(e.type,!1);case 11:return is(e.type.render,!1);case 1:return is(e.type,!0);case 31:return Pt("Activity");default:return""}}function V(e){try{var t="",s=null;do t+=Un(e,s),s=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var De=Object.prototype.hasOwnProperty,Ke=o.unstable_scheduleCallback,We=o.unstable_cancelCallback,at=o.unstable_shouldYield,qe=o.unstable_requestPaint,Te=o.unstable_now,rt=o.unstable_getCurrentPriorityLevel,vt=o.unstable_ImmediatePriority,Ht=o.unstable_UserBlockingPriority,ze=o.unstable_NormalPriority,I=o.unstable_LowPriority,X=o.unstable_IdlePriority,oe=o.log,re=o.unstable_setDisableYieldValue,Le=null,ke=null;function he(e){if(typeof oe=="function"&&re(e),ke&&typeof ke.setStrictMode=="function")try{ke.setStrictMode(Le,e)}catch{}}var st=Math.clz32?Math.clz32:et,ut=Math.log,Ct=Math.LN2;function et(e){return e>>>=0,e===0?32:31-(ut(e)/Ct|0)|0}var Re=256,bt=262144,jt=4194304;function Wt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ee(e,t,s){var a=e.pendingLanes;if(a===0)return 0;var d=0,f=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var w=a&134217727;return w!==0?(a=w&~f,a!==0?d=Wt(a):(x&=w,x!==0?d=Wt(x):s||(s=w&~e,s!==0&&(d=Wt(s))))):(w=a&~f,w!==0?d=Wt(w):x!==0?d=Wt(x):s||(s=a&~e,s!==0&&(d=Wt(s)))),d===0?0:t!==0&&t!==d&&(t&f)===0&&(f=d&-d,s=t&-t,f>=s||f===32&&(s&4194048)!==0)?t:d}function pt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function gt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dt(){var e=jt;return jt<<=1,(jt&62914560)===0&&(jt=4194304),e}function dn(e){for(var t=[],s=0;31>s;s++)t.push(e);return t}function He(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Nt(e,t,s,a,d,f){var x=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var w=e.entanglements,R=e.expirationTimes,H=e.hiddenUpdates;for(s=x&~s;0<s;){var ee=31-st(s),ae=1<<ee;w[ee]=0,R[ee]=-1;var G=H[ee];if(G!==null)for(H[ee]=null,ee=0;ee<G.length;ee++){var q=G[ee];q!==null&&(q.lane&=-536870913)}s&=~ae}a!==0&&yn(e,a,0),f!==0&&d===0&&e.tag!==0&&(e.suspendedLanes|=f&~(x&~t))}function yn(e,t,s){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-st(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|s&261930}function Hn(e,t){var s=e.entangledLanes|=t;for(e=e.entanglements;s;){var a=31-st(s),d=1<<a;d&t|e[a]&t&&(e[a]|=t),s&=~d}}function Bn(e,t){var s=t&-t;return s=(s&42)!==0?1:oo(s),(s&(e.suspendedLanes|t))!==0?0:s}function oo(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function vs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Kn(){var e=ce.p;return e!==0?e:(e=window.event,e===void 0?32:Mp(e.type))}function ln(e,t){var s=ce.p;try{return ce.p=e,t()}finally{ce.p=s}}var En=Math.random().toString(36).slice(2),Yt="__reactFiber$"+En,Sn="__reactProps$"+En,Me="__reactContainer$"+En,Zn="__reactEvents$"+En,el="__reactListeners$"+En,tl="__reactHandles$"+En,io="__reactResources$"+En,Mi="__reactMarker$"+En;function oa(e){delete e[Yt],delete e[Sn],delete e[Zn],delete e[el],delete e[tl]}function Xo(e){var t=e[Yt];if(t)return t;for(var s=e.parentNode;s;){if(t=s[Me]||s[Yt]){if(s=t.alternate,t.child!==null||s!==null&&s.child!==null)for(e=dp(e);e!==null;){if(s=e[Yt])return s;e=dp(e)}return t}e=s,s=e.parentNode}return null}function Go(e){if(e=e[Yt]||e[Me]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ti(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(l(33))}function ao(e){var t=e[io];return t||(t=e[io]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Rn(e){e[Mi]=!0}var nl=new Set,Fo={};function Ns(e,t){Yn(e,t),Yn(e+"Capture",t)}function Yn(e,t){for(Fo[e]=t,e=0;e<t.length;e++)nl.add(t[e])}var ia=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),sl={},Wo={};function Ei(e){return De.call(Wo,e)?!0:De.call(sl,e)?!1:ia.test(e)?Wo[e]=!0:(sl[e]=!0,!1)}function lo(e,t,s){if(Ei(t))if(s===null)e.removeAttribute(t);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+s)}}function Jn(e,t,s){if(s===null)e.removeAttribute(t);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+s)}}function ws(e,t,s,a){if(a===null)e.removeAttribute(s);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(t,s,""+a)}}function rn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gr(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function bu(e,t,s){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,f=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return d.call(this)},set:function(x){s=""+x,f.call(this,x)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(x){s=""+x},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function aa(e){if(!e._valueTracker){var t=gr(e)?"checked":"value";e._valueTracker=bu(e,t,""+e[t])}}function vu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var s=t.getValue(),a="";return e&&(a=gr(e)?e.checked?"true":"false":e.value),e=a,e!==s?(t.setValue(e),!0):!1}function qo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var yr=/[\n"\\]/g;function as(e){return e.replace(yr,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ro(e,t,s,a,d,f,x,w){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),t!=null?x==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+rn(t)):e.value!==""+rn(t)&&(e.value=""+rn(t)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),t!=null?co(e,x,rn(t)):s!=null?co(e,x,rn(s)):a!=null&&e.removeAttribute("value"),d==null&&f!=null&&(e.defaultChecked=!!f),d!=null&&(e.checked=d&&typeof d!="function"&&typeof d!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+rn(w):e.removeAttribute("name")}function _n(e,t,s,a,d,f,x,w){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),t!=null||s!=null){if(!(f!=="submit"&&f!=="reset"||t!=null)){aa(e);return}s=s!=null?""+rn(s):"",t=t!=null?""+rn(t):s,w||t===e.value||(e.value=t),e.defaultValue=t}a=a??d,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=w?e.checked:!!a,e.defaultChecked=!!a,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),aa(e)}function co(e,t,s){t==="number"&&qo(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function Gn(e,t,s,a){if(e=e.options,t){t={};for(var d=0;d<s.length;d++)t["$"+s[d]]=!0;for(s=0;s<e.length;s++)d=t.hasOwnProperty("$"+e[s].value),e[s].selected!==d&&(e[s].selected=d),d&&a&&(e[s].defaultSelected=!0)}else{for(s=""+rn(s),t=null,d=0;d<e.length;d++){if(e[d].value===s){e[d].selected=!0,a&&(e[d].defaultSelected=!0);return}t!==null||e[d].disabled||(t=e[d])}t!==null&&(t.selected=!0)}}function $n(e,t,s){if(t!=null&&(t=""+rn(t),t!==e.value&&(e.value=t),s==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=s!=null?""+rn(s):""}function xr(e,t,s,a){if(t==null){if(a!=null){if(s!=null)throw Error(l(92));if(Se(a)){if(1<a.length)throw Error(l(93));a=a[0]}s=a}s==null&&(s=""),t=s}s=rn(t),e.defaultValue=s,a=e.textContent,a===s&&a!==""&&a!==null&&(e.value=a),aa(e)}function Qo(e,t){if(t){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=t;return}}e.textContent=t}var wu=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function wt(e,t,s){var a=t.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,s):typeof s!="number"||s===0||wu.has(t)?t==="float"?e.cssFloat=s:e[t]=(""+s).trim():e[t]=s+"px"}function br(e,t,s){if(t!=null&&typeof t!="object")throw Error(l(62));if(e=e.style,s!=null){for(var a in s)!s.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var d in t)a=t[d],t.hasOwnProperty(d)&&s[d]!==a&&wt(e,d,a)}else for(var f in t)t.hasOwnProperty(f)&&wt(e,f,t[f])}function hs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vr=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),wr=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ri(e){return wr.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Qs(){}var ol=null;function Vs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var on=null,uo=null;function il(e){var t=Go(e);if(t&&(e=t.stateNode)){var s=e[Sn]||null;e:switch(e=t.stateNode,t.type){case"input":if(ro(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),t=s.name,s.type==="radio"&&t!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+as(""+t)+'"][type="radio"]'),t=0;t<s.length;t++){var a=s[t];if(a!==e&&a.form===e.form){var d=a[Sn]||null;if(!d)throw Error(l(90));ro(a,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(t=0;t<s.length;t++)a=s[t],a.form===e.form&&vu(a)}break e;case"textarea":$n(e,s.value,s.defaultValue);break e;case"select":t=s.value,t!=null&&Gn(e,!!s.multiple,t,!1)}}}var ls=!1;function fo(e,t,s){if(ls)return e(t,s);ls=!0;try{var a=e(t);return a}finally{if(ls=!1,(on!==null||uo!==null)&&(gc(),on&&(t=on,e=uo,uo=on=null,il(t),e)))for(t=0;t<e.length;t++)il(e[t])}}function zt(e,t){var s=e.stateNode;if(s===null)return null;var a=s[Sn]||null;if(a===null)return null;s=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(l(231,t,typeof s));return s}var Ss=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ks=!1;if(Ss)try{var Vo={};Object.defineProperty(Vo,"passive",{get:function(){Ks=!0}}),window.addEventListener("test",Vo,Vo),window.removeEventListener("test",Vo,Vo)}catch{Ks=!1}var rs=null,la=null,Ko=null;function al(){if(Ko)return Ko;var e,t=la,s=t.length,a,d="value"in rs?rs.value:rs.textContent,f=d.length;for(e=0;e<s&&t[e]===d[e];e++);var x=s-e;for(a=1;a<=x&&t[s-a]===d[f-a];a++);return Ko=d.slice(e,1<a?1-a:void 0)}function ho(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ai(){return!0}function Di(){return!1}function An(e){function t(s,a,d,f,x){this._reactName=s,this._targetInst=d,this.type=a,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(s=e[w],this[w]=s?s(f):f[w]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ai:Di,this.isPropagationStopped=Di,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Ai)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Ai)},persist:function(){},isPersistent:Ai}),t}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ra=An(Ls),Os=y({},Ls,{view:0,detail:0}),Zs=An(Os),ca,_o,es,mo=y({},Os,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:po,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==es&&(es&&e.type==="mousemove"?(ca=e.screenX-es.screenX,_o=e.screenY-es.screenY):_o=ca=0,es=e),ca)},movementY:function(e){return"movementY"in e?e.movementY:_o}}),Zo=An(mo),ua=y({},mo,{dataTransfer:0}),Sr=An(ua),da=y({},Os,{relatedTarget:0}),fa=An(da),ll=y({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),Su=An(ll),kr=y({},Ls,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cr=An(kr),Ni=y({},Ls,{data:0}),Ze=An(Ni),rl={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jr={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ku={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cl(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ku[e])?!!t[e]:!1}function po(){return cl}var ha=y({},Os,{key:function(e){if(e.key){var t=rl[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ho(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jr[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:po,charCode:function(e){return e.type==="keypress"?ho(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ho(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Mr=An(ha),Tr=y({},mo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Li=An(Tr),ul=y({},Os,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:po}),Er=An(ul),_a=y({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),zs=An(_a),Cu=y({},mo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dl=An(Cu),fl=y({},Ls,{newState:0,oldState:0}),ma=An(fl),ju=[9,13,27,32],hl=Ss&&"CompositionEvent"in window,ks=null;Ss&&"documentMode"in document&&(ks=document.documentMode);var _l=Ss&&"TextEvent"in window&&!ks,pa=Ss&&(!hl||ks&&8<ks&&11>=ks),Rr=" ",Jo=!1;function Co(e,t){switch(e){case"keyup":return ju.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ar(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jo=!1;function Dr(e,t){switch(e){case"compositionend":return Ar(t);case"keypress":return t.which!==32?null:(Jo=!0,Rr);case"textInput":return e=t.data,e===Rr&&Jo?null:e;default:return null}}function Nr(e,t){if(jo)return e==="compositionend"||!hl&&Co(e,t)?(e=al(),Ko=la=rs=null,jo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return pa&&t.locale!=="ko"?null:t.data;default:return null}}var Lr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ml(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Lr[e.type]:t==="textarea"}function pl(e,t,s,a){on?uo?uo.push(a):uo=[a]:on=a,t=kc(t,"onChange"),0<t.length&&(s=new ra("onChange","change",null,s,a),e.push({event:s,listeners:t}))}var ei=null,ti=null;function S(e){Km(e,0)}function M(e){var t=Ti(e);if(vu(t))return e}function D(e,t){if(e==="change")return t}var E=!1;if(Ss){var $;if(Ss){var Q="oninput"in document;if(!Q){var pe=document.createElement("div");pe.setAttribute("oninput","return;"),Q=typeof pe.oninput=="function"}$=Q}else $=!1;E=$&&(!document.documentMode||9<document.documentMode)}function ve(){ei&&(ei.detachEvent("onpropertychange",Ce),ti=ei=null)}function Ce(e){if(e.propertyName==="value"&&M(ti)){var t=[];pl(t,ti,e,Vs(e)),fo(S,t)}}function $e(e,t,s){e==="focusin"?(ve(),ei=t,ti=s,ei.attachEvent("onpropertychange",Ce)):e==="focusout"&&ve()}function Ye(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return M(ti)}function ot(e,t){if(e==="click")return M(t)}function yt(e,t){if(e==="input"||e==="change")return M(t)}function Qe(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var we=typeof Object.is=="function"?Object.is:Qe;function tn(e,t){if(we(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var s=Object.keys(e),a=Object.keys(t);if(s.length!==a.length)return!1;for(a=0;a<s.length;a++){var d=s[a];if(!De.call(t,d)||!we(e[d],t[d]))return!1}return!0}function qt(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mn(e,t){var s=qt(e);e=0;for(var a;s;){if(s.nodeType===3){if(a=e+s.textContent.length,e<=t&&a>=t)return{node:s,offset:t-e};e=a}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=qt(s)}}function Rt(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Rt(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function fn(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=qo(e.document);t instanceof e.HTMLIFrameElement;){try{var s=typeof t.contentWindow.location.href=="string"}catch{s=!1}if(s)e=t.contentWindow;else break;t=qo(e.document)}return t}function tt(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var ft=Ss&&"documentMode"in document&&11>=document.documentMode,an=null,Qt=null,kn=null,Fn=!1;function xn(e,t,s){var a=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Fn||an==null||an!==qo(a)||(a=an,"selectionStart"in a&&tt(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),kn&&tn(kn,a)||(kn=a,a=kc(Qt,"onSelect"),0<a.length&&(t=new ra("onSelect","select",null,t,s),e.push({event:t,listeners:a}),t.target=an)))}function Cs(e,t){var s={};return s[e.toLowerCase()]=t.toLowerCase(),s["Webkit"+e]="webkit"+t,s["Moz"+e]="moz"+t,s}var _s={animationend:Cs("Animation","AnimationEnd"),animationiteration:Cs("Animation","AnimationIteration"),animationstart:Cs("Animation","AnimationStart"),transitionrun:Cs("Transition","TransitionRun"),transitionstart:Cs("Transition","TransitionStart"),transitioncancel:Cs("Transition","TransitionCancel"),transitionend:Cs("Transition","TransitionEnd")},Bs={},pn={};Ss&&(pn=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function ts(e){if(Bs[e])return Bs[e];if(!_s[e])return e;var t=_s[e],s;for(s in t)if(t.hasOwnProperty(s)&&s in pn)return Bs[e]=t[s];return e}var go=ts("animationend"),Or=ts("animationiteration"),zr=ts("animationstart"),Mu=ts("transitionrun"),Tu=ts("transitionstart"),by=ts("transitioncancel"),Rh=ts("transitionend"),Ah=new Map,Eu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Eu.push("scrollEnd");function Js(e,t){Ah.set(e,t),Ns(t,[e])}var Br=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},$s=[],ga=0,Ru=0;function $r(){for(var e=ga,t=Ru=ga=0;t<e;){var s=$s[t];$s[t++]=null;var a=$s[t];$s[t++]=null;var d=$s[t];$s[t++]=null;var f=$s[t];if($s[t++]=null,a!==null&&d!==null){var x=a.pending;x===null?d.next=d:(d.next=x.next,x.next=d),a.pending=d}f!==0&&Dh(s,d,f)}}function Pr(e,t,s,a){$s[ga++]=e,$s[ga++]=t,$s[ga++]=s,$s[ga++]=a,Ru|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Au(e,t,s,a){return Pr(e,t,s,a),Ir(e)}function Oi(e,t){return Pr(e,null,null,t),Ir(e)}function Dh(e,t,s){e.lanes|=s;var a=e.alternate;a!==null&&(a.lanes|=s);for(var d=!1,f=e.return;f!==null;)f.childLanes|=s,a=f.alternate,a!==null&&(a.childLanes|=s),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(d=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,d&&t!==null&&(d=31-st(s),e=f.hiddenUpdates,a=e[d],a===null?e[d]=[t]:a.push(t),t.lane=s|536870912),f):null}function Ir(e){if(50<$l)throw $l=0,Id=null,Error(l(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ya={};function vy(e,t,s,a){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function js(e,t,s,a){return new vy(e,t,s,a)}function Du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Mo(e,t){var s=e.alternate;return s===null?(s=js(e.tag,t,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=t,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,t=e.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function Nh(e,t){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,t=s.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ur(e,t,s,a,d,f){var x=0;if(a=e,typeof e=="function")Du(e)&&(x=1);else if(typeof e=="string")x=j1(e,s,je.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ye:return e=js(31,s,t,d),e.elementType=ye,e.lanes=f,e;case T:return zi(s.children,d,f,t);case O:x=8,d|=24;break;case B:return e=js(12,s,t,d|2),e.elementType=B,e.lanes=f,e;case ie:return e=js(13,s,t,d),e.elementType=ie,e.lanes=f,e;case ge:return e=js(19,s,t,d),e.elementType=ge,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case F:x=10;break e;case J:x=9;break e;case z:x=11;break e;case Y:x=14;break e;case fe:x=16,a=null;break e}x=29,s=Error(l(130,e===null?"null":typeof e,"")),a=null}return t=js(x,s,t,d),t.elementType=e,t.type=a,t.lanes=f,t}function zi(e,t,s,a){return e=js(7,e,a,t),e.lanes=s,e}function Nu(e,t,s){return e=js(6,e,null,t),e.lanes=s,e}function Lh(e){var t=js(18,null,null,0);return t.stateNode=e,t}function Lu(e,t,s){return t=js(4,e.children!==null?e.children:[],e.key,t),t.lanes=s,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Oh=new WeakMap;function Ps(e,t){if(typeof e=="object"&&e!==null){var s=Oh.get(e);return s!==void 0?s:(t={value:e,source:t,stack:V(t)},Oh.set(e,t),t)}return{value:e,source:t,stack:V(t)}}var xa=[],ba=0,Hr=null,gl=0,Is=[],Us=0,ni=null,yo=1,xo="";function To(e,t){xa[ba++]=gl,xa[ba++]=Hr,Hr=e,gl=t}function zh(e,t,s){Is[Us++]=yo,Is[Us++]=xo,Is[Us++]=ni,ni=e;var a=yo;e=xo;var d=32-st(a)-1;a&=~(1<<d),s+=1;var f=32-st(t)+d;if(30<f){var x=d-d%5;f=(a&(1<<x)-1).toString(32),a>>=x,d-=x,yo=1<<32-st(t)+d|s<<d|a,xo=f+e}else yo=1<<f|s<<d|a,xo=e}function Ou(e){e.return!==null&&(To(e,1),zh(e,1,0))}function zu(e){for(;e===Hr;)Hr=xa[--ba],xa[ba]=null,gl=xa[--ba],xa[ba]=null;for(;e===ni;)ni=Is[--Us],Is[Us]=null,xo=Is[--Us],Is[Us]=null,yo=Is[--Us],Is[Us]=null}function Bh(e,t){Is[Us++]=yo,Is[Us++]=xo,Is[Us++]=ni,yo=t.id,xo=t.overflow,ni=e}var Wn=null,cn=null,Lt=!1,si=null,Hs=!1,Bu=Error(l(519));function oi(e){var t=Error(l(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw yl(Ps(t,e)),Bu}function $h(e){var t=e.stateNode,s=e.type,a=e.memoizedProps;switch(t[Yt]=e,t[Sn]=a,s){case"dialog":Tt("cancel",t),Tt("close",t);break;case"iframe":case"object":case"embed":Tt("load",t);break;case"video":case"audio":for(s=0;s<Il.length;s++)Tt(Il[s],t);break;case"source":Tt("error",t);break;case"img":case"image":case"link":Tt("error",t),Tt("load",t);break;case"details":Tt("toggle",t);break;case"input":Tt("invalid",t),_n(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":Tt("invalid",t);break;case"textarea":Tt("invalid",t),xr(t,a.value,a.defaultValue,a.children)}s=a.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||t.textContent===""+s||a.suppressHydrationWarning===!0||tp(t.textContent,s)?(a.popover!=null&&(Tt("beforetoggle",t),Tt("toggle",t)),a.onScroll!=null&&Tt("scroll",t),a.onScrollEnd!=null&&Tt("scrollend",t),a.onClick!=null&&(t.onclick=Qs),t=!0):t=!1,t||oi(e,!0)}function Ph(e){for(Wn=e.return;Wn;)switch(Wn.tag){case 5:case 31:case 13:Hs=!1;return;case 27:case 3:Hs=!0;return;default:Wn=Wn.return}}function va(e){if(e!==Wn)return!1;if(!Lt)return Ph(e),Lt=!0,!1;var t=e.tag,s;if((s=t!==3&&t!==27)&&((s=t===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||tf(e.type,e.memoizedProps)),s=!s),s&&cn&&oi(e),Ph(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));cn=up(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));cn=up(e)}else t===27?(t=cn,yi(e.type)?(e=lf,lf=null,cn=e):cn=t):cn=Wn?Xs(e.stateNode.nextSibling):null;return!0}function Bi(){cn=Wn=null,Lt=!1}function $u(){var e=si;return e!==null&&(ys===null?ys=e:ys.push.apply(ys,e),si=null),e}function yl(e){si===null?si=[e]:si.push(e)}var Pu=A(null),$i=null,Eo=null;function ii(e,t,s){_e(Pu,t._currentValue),t._currentValue=s}function Ro(e){e._currentValue=Pu.current,Z(Pu)}function Iu(e,t,s){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===s)break;e=e.return}}function Uu(e,t,s,a){var d=e.child;for(d!==null&&(d.return=e);d!==null;){var f=d.dependencies;if(f!==null){var x=d.child;f=f.firstContext;e:for(;f!==null;){var w=f;f=d;for(var R=0;R<t.length;R++)if(w.context===t[R]){f.lanes|=s,w=f.alternate,w!==null&&(w.lanes|=s),Iu(f.return,s,e),a||(x=null);break e}f=w.next}}else if(d.tag===18){if(x=d.return,x===null)throw Error(l(341));x.lanes|=s,f=x.alternate,f!==null&&(f.lanes|=s),Iu(x,s,e),x=null}else x=d.child;if(x!==null)x.return=d;else for(x=d;x!==null;){if(x===e){x=null;break}if(d=x.sibling,d!==null){d.return=x.return,x=d;break}x=x.return}d=x}}function wa(e,t,s,a){e=null;for(var d=t,f=!1;d!==null;){if(!f){if((d.flags&524288)!==0)f=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var x=d.alternate;if(x===null)throw Error(l(387));if(x=x.memoizedProps,x!==null){var w=d.type;we(d.pendingProps.value,x.value)||(e!==null?e.push(w):e=[w])}}else if(d===ct.current){if(x=d.alternate,x===null)throw Error(l(387));x.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(e!==null?e.push(Gl):e=[Gl])}d=d.return}e!==null&&Uu(t,e,s,a),t.flags|=262144}function Yr(e){for(e=e.firstContext;e!==null;){if(!we(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Pi(e){$i=e,Eo=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function qn(e){return Ih($i,e)}function Xr(e,t){return $i===null&&Pi(e),Ih(e,t)}function Ih(e,t){var s=t._currentValue;if(t={context:t,memoizedValue:s,next:null},Eo===null){if(e===null)throw Error(l(308));Eo=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Eo=Eo.next=t;return s}var wy=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(s,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(s){return s()})}},Sy=o.unstable_scheduleCallback,ky=o.unstable_NormalPriority,Dn={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hu(){return{controller:new wy,data:new Map,refCount:0}}function xl(e){e.refCount--,e.refCount===0&&Sy(ky,function(){e.controller.abort()})}var bl=null,Yu=0,Sa=0,ka=null;function Cy(e,t){if(bl===null){var s=bl=[];Yu=0,Sa=Fd(),ka={status:"pending",value:void 0,then:function(a){s.push(a)}}}return Yu++,t.then(Uh,Uh),t}function Uh(){if(--Yu===0&&bl!==null){ka!==null&&(ka.status="fulfilled");var e=bl;bl=null,Sa=0,ka=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function jy(e,t){var s=[],a={status:"pending",value:null,reason:null,then:function(d){s.push(d)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var d=0;d<s.length;d++)(0,s[d])(t)},function(d){for(a.status="rejected",a.reason=d,d=0;d<s.length;d++)(0,s[d])(void 0)}),a}var Hh=N.S;N.S=function(e,t){Cm=Te(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Cy(e,t),Hh!==null&&Hh(e,t)};var Ii=A(null);function Xu(){var e=Ii.current;return e!==null?e:nn.pooledCache}function Gr(e,t){t===null?_e(Ii,Ii.current):_e(Ii,t.pool)}function Yh(){var e=Xu();return e===null?null:{parent:Dn._currentValue,pool:e}}var Ca=Error(l(460)),Gu=Error(l(474)),Fr=Error(l(542)),Wr={then:function(){}};function Xh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Gh(e,t,s){switch(s=e[s],s===void 0?e.push(t):s!==t&&(t.then(Qs,Qs),t=s),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Wh(e),e;default:if(typeof t.status=="string")t.then(Qs,Qs);else{if(e=nn,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var d=t;d.status="fulfilled",d.value=a}},function(a){if(t.status==="pending"){var d=t;d.status="rejected",d.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Wh(e),e}throw Hi=t,Ca}}function Ui(e){try{var t=e._init;return t(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Hi=s,Ca):s}}var Hi=null;function Fh(){if(Hi===null)throw Error(l(459));var e=Hi;return Hi=null,e}function Wh(e){if(e===Ca||e===Fr)throw Error(l(483))}var ja=null,vl=0;function qr(e){var t=vl;return vl+=1,ja===null&&(ja=[]),Gh(ja,e,t)}function wl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Qr(e,t){throw t.$$typeof===v?Error(l(525)):(e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function qh(e){function t(P,L){if(e){var U=P.deletions;U===null?(P.deletions=[L],P.flags|=16):U.push(L)}}function s(P,L){if(!e)return null;for(;L!==null;)t(P,L),L=L.sibling;return null}function a(P){for(var L=new Map;P!==null;)P.key!==null?L.set(P.key,P):L.set(P.index,P),P=P.sibling;return L}function d(P,L){return P=Mo(P,L),P.index=0,P.sibling=null,P}function f(P,L,U){return P.index=U,e?(U=P.alternate,U!==null?(U=U.index,U<L?(P.flags|=67108866,L):U):(P.flags|=67108866,L)):(P.flags|=1048576,L)}function x(P){return e&&P.alternate===null&&(P.flags|=67108866),P}function w(P,L,U,se){return L===null||L.tag!==6?(L=Nu(U,P.mode,se),L.return=P,L):(L=d(L,U),L.return=P,L)}function R(P,L,U,se){var Ve=U.type;return Ve===T?ee(P,L,U.props.children,se,U.key):L!==null&&(L.elementType===Ve||typeof Ve=="object"&&Ve!==null&&Ve.$$typeof===fe&&Ui(Ve)===L.type)?(L=d(L,U.props),wl(L,U),L.return=P,L):(L=Ur(U.type,U.key,U.props,null,P.mode,se),wl(L,U),L.return=P,L)}function H(P,L,U,se){return L===null||L.tag!==4||L.stateNode.containerInfo!==U.containerInfo||L.stateNode.implementation!==U.implementation?(L=Lu(U,P.mode,se),L.return=P,L):(L=d(L,U.children||[]),L.return=P,L)}function ee(P,L,U,se,Ve){return L===null||L.tag!==7?(L=zi(U,P.mode,se,Ve),L.return=P,L):(L=d(L,U),L.return=P,L)}function ae(P,L,U){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return L=Nu(""+L,P.mode,U),L.return=P,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case j:return U=Ur(L.type,L.key,L.props,null,P.mode,U),wl(U,L),U.return=P,U;case k:return L=Lu(L,P.mode,U),L.return=P,L;case fe:return L=Ui(L),ae(P,L,U)}if(Se(L)||K(L))return L=zi(L,P.mode,U,null),L.return=P,L;if(typeof L.then=="function")return ae(P,qr(L),U);if(L.$$typeof===F)return ae(P,Xr(P,L),U);Qr(P,L)}return null}function G(P,L,U,se){var Ve=L!==null?L.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return Ve!==null?null:w(P,L,""+U,se);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case j:return U.key===Ve?R(P,L,U,se):null;case k:return U.key===Ve?H(P,L,U,se):null;case fe:return U=Ui(U),G(P,L,U,se)}if(Se(U)||K(U))return Ve!==null?null:ee(P,L,U,se,null);if(typeof U.then=="function")return G(P,L,qr(U),se);if(U.$$typeof===F)return G(P,L,Xr(P,U),se);Qr(P,U)}return null}function q(P,L,U,se,Ve){if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return P=P.get(U)||null,w(L,P,""+se,Ve);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case j:return P=P.get(se.key===null?U:se.key)||null,R(L,P,se,Ve);case k:return P=P.get(se.key===null?U:se.key)||null,H(L,P,se,Ve);case fe:return se=Ui(se),q(P,L,U,se,Ve)}if(Se(se)||K(se))return P=P.get(U)||null,ee(L,P,se,Ve,null);if(typeof se.then=="function")return q(P,L,U,qr(se),Ve);if(se.$$typeof===F)return q(P,L,U,Xr(L,se),Ve);Qr(L,se)}return null}function Be(P,L,U,se){for(var Ve=null,Bt=null,Ie=L,xt=L=0,Dt=null;Ie!==null&&xt<U.length;xt++){Ie.index>xt?(Dt=Ie,Ie=null):Dt=Ie.sibling;var $t=G(P,Ie,U[xt],se);if($t===null){Ie===null&&(Ie=Dt);break}e&&Ie&&$t.alternate===null&&t(P,Ie),L=f($t,L,xt),Bt===null?Ve=$t:Bt.sibling=$t,Bt=$t,Ie=Dt}if(xt===U.length)return s(P,Ie),Lt&&To(P,xt),Ve;if(Ie===null){for(;xt<U.length;xt++)Ie=ae(P,U[xt],se),Ie!==null&&(L=f(Ie,L,xt),Bt===null?Ve=Ie:Bt.sibling=Ie,Bt=Ie);return Lt&&To(P,xt),Ve}for(Ie=a(Ie);xt<U.length;xt++)Dt=q(Ie,P,xt,U[xt],se),Dt!==null&&(e&&Dt.alternate!==null&&Ie.delete(Dt.key===null?xt:Dt.key),L=f(Dt,L,xt),Bt===null?Ve=Dt:Bt.sibling=Dt,Bt=Dt);return e&&Ie.forEach(function(Si){return t(P,Si)}),Lt&&To(P,xt),Ve}function it(P,L,U,se){if(U==null)throw Error(l(151));for(var Ve=null,Bt=null,Ie=L,xt=L=0,Dt=null,$t=U.next();Ie!==null&&!$t.done;xt++,$t=U.next()){Ie.index>xt?(Dt=Ie,Ie=null):Dt=Ie.sibling;var Si=G(P,Ie,$t.value,se);if(Si===null){Ie===null&&(Ie=Dt);break}e&&Ie&&Si.alternate===null&&t(P,Ie),L=f(Si,L,xt),Bt===null?Ve=Si:Bt.sibling=Si,Bt=Si,Ie=Dt}if($t.done)return s(P,Ie),Lt&&To(P,xt),Ve;if(Ie===null){for(;!$t.done;xt++,$t=U.next())$t=ae(P,$t.value,se),$t!==null&&(L=f($t,L,xt),Bt===null?Ve=$t:Bt.sibling=$t,Bt=$t);return Lt&&To(P,xt),Ve}for(Ie=a(Ie);!$t.done;xt++,$t=U.next())$t=q(Ie,P,xt,$t.value,se),$t!==null&&(e&&$t.alternate!==null&&Ie.delete($t.key===null?xt:$t.key),L=f($t,L,xt),Bt===null?Ve=$t:Bt.sibling=$t,Bt=$t);return e&&Ie.forEach(function(B1){return t(P,B1)}),Lt&&To(P,xt),Ve}function Zt(P,L,U,se){if(typeof U=="object"&&U!==null&&U.type===T&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case j:e:{for(var Ve=U.key;L!==null;){if(L.key===Ve){if(Ve=U.type,Ve===T){if(L.tag===7){s(P,L.sibling),se=d(L,U.props.children),se.return=P,P=se;break e}}else if(L.elementType===Ve||typeof Ve=="object"&&Ve!==null&&Ve.$$typeof===fe&&Ui(Ve)===L.type){s(P,L.sibling),se=d(L,U.props),wl(se,U),se.return=P,P=se;break e}s(P,L);break}else t(P,L);L=L.sibling}U.type===T?(se=zi(U.props.children,P.mode,se,U.key),se.return=P,P=se):(se=Ur(U.type,U.key,U.props,null,P.mode,se),wl(se,U),se.return=P,P=se)}return x(P);case k:e:{for(Ve=U.key;L!==null;){if(L.key===Ve)if(L.tag===4&&L.stateNode.containerInfo===U.containerInfo&&L.stateNode.implementation===U.implementation){s(P,L.sibling),se=d(L,U.children||[]),se.return=P,P=se;break e}else{s(P,L);break}else t(P,L);L=L.sibling}se=Lu(U,P.mode,se),se.return=P,P=se}return x(P);case fe:return U=Ui(U),Zt(P,L,U,se)}if(Se(U))return Be(P,L,U,se);if(K(U)){if(Ve=K(U),typeof Ve!="function")throw Error(l(150));return U=Ve.call(U),it(P,L,U,se)}if(typeof U.then=="function")return Zt(P,L,qr(U),se);if(U.$$typeof===F)return Zt(P,L,Xr(P,U),se);Qr(P,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,L!==null&&L.tag===6?(s(P,L.sibling),se=d(L,U),se.return=P,P=se):(s(P,L),se=Nu(U,P.mode,se),se.return=P,P=se),x(P)):s(P,L)}return function(P,L,U,se){try{vl=0;var Ve=Zt(P,L,U,se);return ja=null,Ve}catch(Ie){if(Ie===Ca||Ie===Fr)throw Ie;var Bt=js(29,Ie,null,P.mode);return Bt.lanes=se,Bt.return=P,Bt}finally{}}}var Yi=qh(!0),Qh=qh(!1),ai=!1;function Fu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function li(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ri(e,t,s){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(It&2)!==0){var d=a.pending;return d===null?t.next=t:(t.next=d.next,d.next=t),a.pending=t,t=Ir(e),Dh(e,null,s),t}return Pr(e,a,t,s),Ir(e)}function Sl(e,t,s){if(t=t.updateQueue,t!==null&&(t=t.shared,(s&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,s|=a,t.lanes=s,Hn(e,s)}}function qu(e,t){var s=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,s===a)){var d=null,f=null;if(s=s.firstBaseUpdate,s!==null){do{var x={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};f===null?d=f=x:f=f.next=x,s=s.next}while(s!==null);f===null?d=f=t:f=f.next=t}else d=f=t;s={baseState:a.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:a.shared,callbacks:a.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=t:e.next=t,s.lastBaseUpdate=t}var Qu=!1;function kl(){if(Qu){var e=ka;if(e!==null)throw e}}function Cl(e,t,s,a){Qu=!1;var d=e.updateQueue;ai=!1;var f=d.firstBaseUpdate,x=d.lastBaseUpdate,w=d.shared.pending;if(w!==null){d.shared.pending=null;var R=w,H=R.next;R.next=null,x===null?f=H:x.next=H,x=R;var ee=e.alternate;ee!==null&&(ee=ee.updateQueue,w=ee.lastBaseUpdate,w!==x&&(w===null?ee.firstBaseUpdate=H:w.next=H,ee.lastBaseUpdate=R))}if(f!==null){var ae=d.baseState;x=0,ee=H=R=null,w=f;do{var G=w.lane&-536870913,q=G!==w.lane;if(q?(At&G)===G:(a&G)===G){G!==0&&G===Sa&&(Qu=!0),ee!==null&&(ee=ee.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var Be=e,it=w;G=t;var Zt=s;switch(it.tag){case 1:if(Be=it.payload,typeof Be=="function"){ae=Be.call(Zt,ae,G);break e}ae=Be;break e;case 3:Be.flags=Be.flags&-65537|128;case 0:if(Be=it.payload,G=typeof Be=="function"?Be.call(Zt,ae,G):Be,G==null)break e;ae=y({},ae,G);break e;case 2:ai=!0}}G=w.callback,G!==null&&(e.flags|=64,q&&(e.flags|=8192),q=d.callbacks,q===null?d.callbacks=[G]:q.push(G))}else q={lane:G,tag:w.tag,payload:w.payload,callback:w.callback,next:null},ee===null?(H=ee=q,R=ae):ee=ee.next=q,x|=G;if(w=w.next,w===null){if(w=d.shared.pending,w===null)break;q=w,w=q.next,q.next=null,d.lastBaseUpdate=q,d.shared.pending=null}}while(!0);ee===null&&(R=ae),d.baseState=R,d.firstBaseUpdate=H,d.lastBaseUpdate=ee,f===null&&(d.shared.lanes=0),hi|=x,e.lanes=x,e.memoizedState=ae}}function Vh(e,t){if(typeof e!="function")throw Error(l(191,e));e.call(t)}function Kh(e,t){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)Vh(s[e],t)}var Ma=A(null),Vr=A(0);function Zh(e,t){e=Po,_e(Vr,e),_e(Ma,t),Po=e|t.baseLanes}function Vu(){_e(Vr,Po),_e(Ma,Ma.current)}function Ku(){Po=Vr.current,Z(Ma),Z(Vr)}var Ms=A(null),Ys=null;function ci(e){var t=e.alternate;_e(Cn,Cn.current&1),_e(Ms,e),Ys===null&&(t===null||Ma.current!==null||t.memoizedState!==null)&&(Ys=e)}function Zu(e){_e(Cn,Cn.current),_e(Ms,e),Ys===null&&(Ys=e)}function Jh(e){e.tag===22?(_e(Cn,Cn.current),_e(Ms,e),Ys===null&&(Ys=e)):ui()}function ui(){_e(Cn,Cn.current),_e(Ms,Ms.current)}function Ts(e){Z(Ms),Ys===e&&(Ys=null),Z(Cn)}var Cn=A(0);function Kr(e){for(var t=e;t!==null;){if(t.tag===13){var s=t.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||of(s)||af(s)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ao=0,mt=null,Vt=null,Nn=null,Zr=!1,Ta=!1,Xi=!1,Jr=0,jl=0,Ea=null,My=0;function bn(){throw Error(l(321))}function Ju(e,t){if(t===null)return!1;for(var s=0;s<t.length&&s<e.length;s++)if(!we(e[s],t[s]))return!1;return!0}function ed(e,t,s,a,d,f){return Ao=f,mt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,N.H=e===null||e.memoizedState===null?z_:md,Xi=!1,f=s(a,d),Xi=!1,Ta&&(f=t_(t,s,a,d)),e_(e),f}function e_(e){N.H=El;var t=Vt!==null&&Vt.next!==null;if(Ao=0,Nn=Vt=mt=null,Zr=!1,jl=0,Ea=null,t)throw Error(l(300));e===null||Ln||(e=e.dependencies,e!==null&&Yr(e)&&(Ln=!0))}function t_(e,t,s,a){mt=e;var d=0;do{if(Ta&&(Ea=null),jl=0,Ta=!1,25<=d)throw Error(l(301));if(d+=1,Nn=Vt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}N.H=B_,f=t(s,a)}while(Ta);return f}function Ty(){var e=N.H,t=e.useState()[0];return t=typeof t.then=="function"?Ml(t):t,e=e.useState()[0],(Vt!==null?Vt.memoizedState:null)!==e&&(mt.flags|=1024),t}function td(){var e=Jr!==0;return Jr=0,e}function nd(e,t,s){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s}function sd(e){if(Zr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Zr=!1}Ao=0,Nn=Vt=mt=null,Ta=!1,jl=Jr=0,Ea=null}function cs(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nn===null?mt.memoizedState=Nn=e:Nn=Nn.next=e,Nn}function jn(){if(Vt===null){var e=mt.alternate;e=e!==null?e.memoizedState:null}else e=Vt.next;var t=Nn===null?mt.memoizedState:Nn.next;if(t!==null)Nn=t,Vt=e;else{if(e===null)throw mt.alternate===null?Error(l(467)):Error(l(310));Vt=e,e={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},Nn===null?mt.memoizedState=Nn=e:Nn=Nn.next=e}return Nn}function ec(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ml(e){var t=jl;return jl+=1,Ea===null&&(Ea=[]),e=Gh(Ea,e,t),t=mt,(Nn===null?t.memoizedState:Nn.next)===null&&(t=t.alternate,N.H=t===null||t.memoizedState===null?z_:md),e}function tc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ml(e);if(e.$$typeof===F)return qn(e)}throw Error(l(438,String(e)))}function od(e){var t=null,s=mt.updateQueue;if(s!==null&&(t=s.memoCache),t==null){var a=mt.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(d){return d.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),s===null&&(s=ec(),mt.updateQueue=s),s.memoCache=t,s=t.data[t.index],s===void 0)for(s=t.data[t.index]=Array(e),a=0;a<e;a++)s[a]=xe;return t.index++,s}function Do(e,t){return typeof t=="function"?t(e):t}function nc(e){var t=jn();return id(t,Vt,e)}function id(e,t,s){var a=e.queue;if(a===null)throw Error(l(311));a.lastRenderedReducer=s;var d=e.baseQueue,f=a.pending;if(f!==null){if(d!==null){var x=d.next;d.next=f.next,f.next=x}t.baseQueue=d=f,a.pending=null}if(f=e.baseState,d===null)e.memoizedState=f;else{t=d.next;var w=x=null,R=null,H=t,ee=!1;do{var ae=H.lane&-536870913;if(ae!==H.lane?(At&ae)===ae:(Ao&ae)===ae){var G=H.revertLane;if(G===0)R!==null&&(R=R.next={lane:0,revertLane:0,gesture:null,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null}),ae===Sa&&(ee=!0);else if((Ao&G)===G){H=H.next,G===Sa&&(ee=!0);continue}else ae={lane:0,revertLane:H.revertLane,gesture:null,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},R===null?(w=R=ae,x=f):R=R.next=ae,mt.lanes|=G,hi|=G;ae=H.action,Xi&&s(f,ae),f=H.hasEagerState?H.eagerState:s(f,ae)}else G={lane:ae,revertLane:H.revertLane,gesture:H.gesture,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},R===null?(w=R=G,x=f):R=R.next=G,mt.lanes|=ae,hi|=ae;H=H.next}while(H!==null&&H!==t);if(R===null?x=f:R.next=w,!we(f,e.memoizedState)&&(Ln=!0,ee&&(s=ka,s!==null)))throw s;e.memoizedState=f,e.baseState=x,e.baseQueue=R,a.lastRenderedState=f}return d===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function ad(e){var t=jn(),s=t.queue;if(s===null)throw Error(l(311));s.lastRenderedReducer=e;var a=s.dispatch,d=s.pending,f=t.memoizedState;if(d!==null){s.pending=null;var x=d=d.next;do f=e(f,x.action),x=x.next;while(x!==d);we(f,t.memoizedState)||(Ln=!0),t.memoizedState=f,t.baseQueue===null&&(t.baseState=f),s.lastRenderedState=f}return[f,a]}function n_(e,t,s){var a=mt,d=jn(),f=Lt;if(f){if(s===void 0)throw Error(l(407));s=s()}else s=t();var x=!we((Vt||d).memoizedState,s);if(x&&(d.memoizedState=s,Ln=!0),d=d.queue,cd(i_.bind(null,a,d,e),[e]),d.getSnapshot!==t||x||Nn!==null&&Nn.memoizedState.tag&1){if(a.flags|=2048,Ra(9,{destroy:void 0},o_.bind(null,a,d,s,t),null),nn===null)throw Error(l(349));f||(Ao&127)!==0||s_(a,t,s)}return s}function s_(e,t,s){e.flags|=16384,e={getSnapshot:t,value:s},t=mt.updateQueue,t===null?(t=ec(),mt.updateQueue=t,t.stores=[e]):(s=t.stores,s===null?t.stores=[e]:s.push(e))}function o_(e,t,s,a){t.value=s,t.getSnapshot=a,a_(t)&&l_(e)}function i_(e,t,s){return s(function(){a_(t)&&l_(e)})}function a_(e){var t=e.getSnapshot;e=e.value;try{var s=t();return!we(e,s)}catch{return!0}}function l_(e){var t=Oi(e,2);t!==null&&xs(t,e,2)}function ld(e){var t=cs();if(typeof e=="function"){var s=e;if(e=s(),Xi){he(!0);try{s()}finally{he(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Do,lastRenderedState:e},t}function r_(e,t,s,a){return e.baseState=s,id(e,Vt,typeof a=="function"?a:Do)}function Ey(e,t,s,a,d){if(ic(e))throw Error(l(485));if(e=t.action,e!==null){var f={payload:d,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};N.T!==null?s(!0):f.isTransition=!1,a(f),s=t.pending,s===null?(f.next=t.pending=f,c_(t,f)):(f.next=s.next,t.pending=s.next=f)}}function c_(e,t){var s=t.action,a=t.payload,d=e.state;if(t.isTransition){var f=N.T,x={};N.T=x;try{var w=s(d,a),R=N.S;R!==null&&R(x,w),u_(e,t,w)}catch(H){rd(e,t,H)}finally{f!==null&&x.types!==null&&(f.types=x.types),N.T=f}}else try{f=s(d,a),u_(e,t,f)}catch(H){rd(e,t,H)}}function u_(e,t,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(a){d_(e,t,a)},function(a){return rd(e,t,a)}):d_(e,t,s)}function d_(e,t,s){t.status="fulfilled",t.value=s,f_(t),e.state=s,t=e.pending,t!==null&&(s=t.next,s===t?e.pending=null:(s=s.next,t.next=s,c_(e,s)))}function rd(e,t,s){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=s,f_(t),t=t.next;while(t!==a)}e.action=null}function f_(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function h_(e,t){return t}function __(e,t){if(Lt){var s=nn.formState;if(s!==null){e:{var a=mt;if(Lt){if(cn){t:{for(var d=cn,f=Hs;d.nodeType!==8;){if(!f){d=null;break t}if(d=Xs(d.nextSibling),d===null){d=null;break t}}f=d.data,d=f==="F!"||f==="F"?d:null}if(d){cn=Xs(d.nextSibling),a=d.data==="F!";break e}}oi(a)}a=!1}a&&(t=s[0])}}return s=cs(),s.memoizedState=s.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:h_,lastRenderedState:t},s.queue=a,s=N_.bind(null,mt,a),a.dispatch=s,a=ld(!1),f=_d.bind(null,mt,!1,a.queue),a=cs(),d={state:t,dispatch:null,action:e,pending:null},a.queue=d,s=Ey.bind(null,mt,d,f,s),d.dispatch=s,a.memoizedState=e,[t,s,!1]}function m_(e){var t=jn();return p_(t,Vt,e)}function p_(e,t,s){if(t=id(e,t,h_)[0],e=nc(Do)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Ml(t)}catch(x){throw x===Ca?Fr:x}else a=t;t=jn();var d=t.queue,f=d.dispatch;return s!==t.memoizedState&&(mt.flags|=2048,Ra(9,{destroy:void 0},Ry.bind(null,d,s),null)),[a,f,e]}function Ry(e,t){e.action=t}function g_(e){var t=jn(),s=Vt;if(s!==null)return p_(t,s,e);jn(),t=t.memoizedState,s=jn();var a=s.queue.dispatch;return s.memoizedState=e,[t,a,!1]}function Ra(e,t,s,a){return e={tag:e,create:s,deps:a,inst:t,next:null},t=mt.updateQueue,t===null&&(t=ec(),mt.updateQueue=t),s=t.lastEffect,s===null?t.lastEffect=e.next=e:(a=s.next,s.next=e,e.next=a,t.lastEffect=e),e}function y_(){return jn().memoizedState}function sc(e,t,s,a){var d=cs();mt.flags|=e,d.memoizedState=Ra(1|t,{destroy:void 0},s,a===void 0?null:a)}function oc(e,t,s,a){var d=jn();a=a===void 0?null:a;var f=d.memoizedState.inst;Vt!==null&&a!==null&&Ju(a,Vt.memoizedState.deps)?d.memoizedState=Ra(t,f,s,a):(mt.flags|=e,d.memoizedState=Ra(1|t,f,s,a))}function x_(e,t){sc(8390656,8,e,t)}function cd(e,t){oc(2048,8,e,t)}function Ay(e){mt.flags|=4;var t=mt.updateQueue;if(t===null)t=ec(),mt.updateQueue=t,t.events=[e];else{var s=t.events;s===null?t.events=[e]:s.push(e)}}function b_(e){var t=jn().memoizedState;return Ay({ref:t,nextImpl:e}),function(){if((It&2)!==0)throw Error(l(440));return t.impl.apply(void 0,arguments)}}function v_(e,t){return oc(4,2,e,t)}function w_(e,t){return oc(4,4,e,t)}function S_(e,t){if(typeof t=="function"){e=e();var s=t(e);return function(){typeof s=="function"?s():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function k_(e,t,s){s=s!=null?s.concat([e]):null,oc(4,4,S_.bind(null,t,e),s)}function ud(){}function C_(e,t){var s=jn();t=t===void 0?null:t;var a=s.memoizedState;return t!==null&&Ju(t,a[1])?a[0]:(s.memoizedState=[e,t],e)}function j_(e,t){var s=jn();t=t===void 0?null:t;var a=s.memoizedState;if(t!==null&&Ju(t,a[1]))return a[0];if(a=e(),Xi){he(!0);try{e()}finally{he(!1)}}return s.memoizedState=[a,t],a}function dd(e,t,s){return s===void 0||(Ao&1073741824)!==0&&(At&261930)===0?e.memoizedState=t:(e.memoizedState=s,e=Mm(),mt.lanes|=e,hi|=e,s)}function M_(e,t,s,a){return we(s,t)?s:Ma.current!==null?(e=dd(e,s,a),we(e,t)||(Ln=!0),e):(Ao&42)===0||(Ao&1073741824)!==0&&(At&261930)===0?(Ln=!0,e.memoizedState=s):(e=Mm(),mt.lanes|=e,hi|=e,t)}function T_(e,t,s,a,d){var f=ce.p;ce.p=f!==0&&8>f?f:8;var x=N.T,w={};N.T=w,_d(e,!1,t,s);try{var R=d(),H=N.S;if(H!==null&&H(w,R),R!==null&&typeof R=="object"&&typeof R.then=="function"){var ee=jy(R,a);Tl(e,t,ee,As(e))}else Tl(e,t,a,As(e))}catch(ae){Tl(e,t,{then:function(){},status:"rejected",reason:ae},As())}finally{ce.p=f,x!==null&&w.types!==null&&(x.types=w.types),N.T=x}}function Dy(){}function fd(e,t,s,a){if(e.tag!==5)throw Error(l(476));var d=E_(e).queue;T_(e,d,t,W,s===null?Dy:function(){return R_(e),s(a)})}function E_(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Do,lastRenderedState:W},next:null};var s={};return t.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Do,lastRenderedState:s},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function R_(e){var t=E_(e);t.next===null&&(t=e.alternate.memoizedState),Tl(e,t.next.queue,{},As())}function hd(){return qn(Gl)}function A_(){return jn().memoizedState}function D_(){return jn().memoizedState}function Ny(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var s=As();e=li(s);var a=ri(t,e,s);a!==null&&(xs(a,t,s),Sl(a,t,s)),t={cache:Hu()},e.payload=t;return}t=t.return}}function Ly(e,t,s){var a=As();s={lane:a,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},ic(e)?L_(t,s):(s=Au(e,t,s,a),s!==null&&(xs(s,e,a),O_(s,t,a)))}function N_(e,t,s){var a=As();Tl(e,t,s,a)}function Tl(e,t,s,a){var d={lane:a,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(ic(e))L_(t,d);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=t.lastRenderedReducer,f!==null))try{var x=t.lastRenderedState,w=f(x,s);if(d.hasEagerState=!0,d.eagerState=w,we(w,x))return Pr(e,t,d,0),nn===null&&$r(),!1}catch{}finally{}if(s=Au(e,t,d,a),s!==null)return xs(s,e,a),O_(s,t,a),!0}return!1}function _d(e,t,s,a){if(a={lane:2,revertLane:Fd(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ic(e)){if(t)throw Error(l(479))}else t=Au(e,s,a,2),t!==null&&xs(t,e,2)}function ic(e){var t=e.alternate;return e===mt||t!==null&&t===mt}function L_(e,t){Ta=Zr=!0;var s=e.pending;s===null?t.next=t:(t.next=s.next,s.next=t),e.pending=t}function O_(e,t,s){if((s&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,s|=a,t.lanes=s,Hn(e,s)}}var El={readContext:qn,use:tc,useCallback:bn,useContext:bn,useEffect:bn,useImperativeHandle:bn,useLayoutEffect:bn,useInsertionEffect:bn,useMemo:bn,useReducer:bn,useRef:bn,useState:bn,useDebugValue:bn,useDeferredValue:bn,useTransition:bn,useSyncExternalStore:bn,useId:bn,useHostTransitionStatus:bn,useFormState:bn,useActionState:bn,useOptimistic:bn,useMemoCache:bn,useCacheRefresh:bn};El.useEffectEvent=bn;var z_={readContext:qn,use:tc,useCallback:function(e,t){return cs().memoizedState=[e,t===void 0?null:t],e},useContext:qn,useEffect:x_,useImperativeHandle:function(e,t,s){s=s!=null?s.concat([e]):null,sc(4194308,4,S_.bind(null,t,e),s)},useLayoutEffect:function(e,t){return sc(4194308,4,e,t)},useInsertionEffect:function(e,t){sc(4,2,e,t)},useMemo:function(e,t){var s=cs();t=t===void 0?null:t;var a=e();if(Xi){he(!0);try{e()}finally{he(!1)}}return s.memoizedState=[a,t],a},useReducer:function(e,t,s){var a=cs();if(s!==void 0){var d=s(t);if(Xi){he(!0);try{s(t)}finally{he(!1)}}}else d=t;return a.memoizedState=a.baseState=d,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:d},a.queue=e,e=e.dispatch=Ly.bind(null,mt,e),[a.memoizedState,e]},useRef:function(e){var t=cs();return e={current:e},t.memoizedState=e},useState:function(e){e=ld(e);var t=e.queue,s=N_.bind(null,mt,t);return t.dispatch=s,[e.memoizedState,s]},useDebugValue:ud,useDeferredValue:function(e,t){var s=cs();return dd(s,e,t)},useTransition:function(){var e=ld(!1);return e=T_.bind(null,mt,e.queue,!0,!1),cs().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,s){var a=mt,d=cs();if(Lt){if(s===void 0)throw Error(l(407));s=s()}else{if(s=t(),nn===null)throw Error(l(349));(At&127)!==0||s_(a,t,s)}d.memoizedState=s;var f={value:s,getSnapshot:t};return d.queue=f,x_(i_.bind(null,a,f,e),[e]),a.flags|=2048,Ra(9,{destroy:void 0},o_.bind(null,a,f,s,t),null),s},useId:function(){var e=cs(),t=nn.identifierPrefix;if(Lt){var s=xo,a=yo;s=(a&~(1<<32-st(a)-1)).toString(32)+s,t="_"+t+"R_"+s,s=Jr++,0<s&&(t+="H"+s.toString(32)),t+="_"}else s=My++,t="_"+t+"r_"+s.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:hd,useFormState:__,useActionState:__,useOptimistic:function(e){var t=cs();t.memoizedState=t.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=s,t=_d.bind(null,mt,!0,s),s.dispatch=t,[e,t]},useMemoCache:od,useCacheRefresh:function(){return cs().memoizedState=Ny.bind(null,mt)},useEffectEvent:function(e){var t=cs(),s={impl:e};return t.memoizedState=s,function(){if((It&2)!==0)throw Error(l(440));return s.impl.apply(void 0,arguments)}}},md={readContext:qn,use:tc,useCallback:C_,useContext:qn,useEffect:cd,useImperativeHandle:k_,useInsertionEffect:v_,useLayoutEffect:w_,useMemo:j_,useReducer:nc,useRef:y_,useState:function(){return nc(Do)},useDebugValue:ud,useDeferredValue:function(e,t){var s=jn();return M_(s,Vt.memoizedState,e,t)},useTransition:function(){var e=nc(Do)[0],t=jn().memoizedState;return[typeof e=="boolean"?e:Ml(e),t]},useSyncExternalStore:n_,useId:A_,useHostTransitionStatus:hd,useFormState:m_,useActionState:m_,useOptimistic:function(e,t){var s=jn();return r_(s,Vt,e,t)},useMemoCache:od,useCacheRefresh:D_};md.useEffectEvent=b_;var B_={readContext:qn,use:tc,useCallback:C_,useContext:qn,useEffect:cd,useImperativeHandle:k_,useInsertionEffect:v_,useLayoutEffect:w_,useMemo:j_,useReducer:ad,useRef:y_,useState:function(){return ad(Do)},useDebugValue:ud,useDeferredValue:function(e,t){var s=jn();return Vt===null?dd(s,e,t):M_(s,Vt.memoizedState,e,t)},useTransition:function(){var e=ad(Do)[0],t=jn().memoizedState;return[typeof e=="boolean"?e:Ml(e),t]},useSyncExternalStore:n_,useId:A_,useHostTransitionStatus:hd,useFormState:g_,useActionState:g_,useOptimistic:function(e,t){var s=jn();return Vt!==null?r_(s,Vt,e,t):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:od,useCacheRefresh:D_};B_.useEffectEvent=b_;function pd(e,t,s,a){t=e.memoizedState,s=s(a,t),s=s==null?t:y({},t,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var gd={enqueueSetState:function(e,t,s){e=e._reactInternals;var a=As(),d=li(a);d.payload=t,s!=null&&(d.callback=s),t=ri(e,d,a),t!==null&&(xs(t,e,a),Sl(t,e,a))},enqueueReplaceState:function(e,t,s){e=e._reactInternals;var a=As(),d=li(a);d.tag=1,d.payload=t,s!=null&&(d.callback=s),t=ri(e,d,a),t!==null&&(xs(t,e,a),Sl(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var s=As(),a=li(s);a.tag=2,t!=null&&(a.callback=t),t=ri(e,a,s),t!==null&&(xs(t,e,s),Sl(t,e,s))}};function $_(e,t,s,a,d,f,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,f,x):t.prototype&&t.prototype.isPureReactComponent?!tn(s,a)||!tn(d,f):!0}function P_(e,t,s,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(s,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(s,a),t.state!==e&&gd.enqueueReplaceState(t,t.state,null)}function Gi(e,t){var s=t;if("ref"in t){s={};for(var a in t)a!=="ref"&&(s[a]=t[a])}if(e=e.defaultProps){s===t&&(s=y({},s));for(var d in e)s[d]===void 0&&(s[d]=e[d])}return s}function I_(e){Br(e)}function U_(e){console.error(e)}function H_(e){Br(e)}function ac(e,t){try{var s=e.onUncaughtError;s(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Y_(e,t,s){try{var a=e.onCaughtError;a(s.value,{componentStack:s.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function yd(e,t,s){return s=li(s),s.tag=3,s.payload={element:null},s.callback=function(){ac(e,t)},s}function X_(e){return e=li(e),e.tag=3,e}function G_(e,t,s,a){var d=s.type.getDerivedStateFromError;if(typeof d=="function"){var f=a.value;e.payload=function(){return d(f)},e.callback=function(){Y_(t,s,a)}}var x=s.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){Y_(t,s,a),typeof d!="function"&&(_i===null?_i=new Set([this]):_i.add(this));var w=a.stack;this.componentDidCatch(a.value,{componentStack:w!==null?w:""})})}function Oy(e,t,s,a,d){if(s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=s.alternate,t!==null&&wa(t,s,d,!0),s=Ms.current,s!==null){switch(s.tag){case 31:case 13:return Ys===null?yc():s.alternate===null&&vn===0&&(vn=3),s.flags&=-257,s.flags|=65536,s.lanes=d,a===Wr?s.flags|=16384:(t=s.updateQueue,t===null?s.updateQueue=new Set([a]):t.add(a),Yd(e,a,d)),!1;case 22:return s.flags|=65536,a===Wr?s.flags|=16384:(t=s.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},s.updateQueue=t):(s=t.retryQueue,s===null?t.retryQueue=new Set([a]):s.add(a)),Yd(e,a,d)),!1}throw Error(l(435,s.tag))}return Yd(e,a,d),yc(),!1}if(Lt)return t=Ms.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=d,a!==Bu&&(e=Error(l(422),{cause:a}),yl(Ps(e,s)))):(a!==Bu&&(t=Error(l(423),{cause:a}),yl(Ps(t,s))),e=e.current.alternate,e.flags|=65536,d&=-d,e.lanes|=d,a=Ps(a,s),d=yd(e.stateNode,a,d),qu(e,d),vn!==4&&(vn=2)),!1;var f=Error(l(520),{cause:a});if(f=Ps(f,s),Bl===null?Bl=[f]:Bl.push(f),vn!==4&&(vn=2),t===null)return!0;a=Ps(a,s),s=t;do{switch(s.tag){case 3:return s.flags|=65536,e=d&-d,s.lanes|=e,e=yd(s.stateNode,a,e),qu(s,e),!1;case 1:if(t=s.type,f=s.stateNode,(s.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(_i===null||!_i.has(f))))return s.flags|=65536,d&=-d,s.lanes|=d,d=X_(d),G_(d,e,s,a),qu(s,d),!1}s=s.return}while(s!==null);return!1}var xd=Error(l(461)),Ln=!1;function Qn(e,t,s,a){t.child=e===null?Qh(t,null,s,a):Yi(t,e.child,s,a)}function F_(e,t,s,a,d){s=s.render;var f=t.ref;if("ref"in a){var x={};for(var w in a)w!=="ref"&&(x[w]=a[w])}else x=a;return Pi(t),a=ed(e,t,s,x,f,d),w=td(),e!==null&&!Ln?(nd(e,t,d),No(e,t,d)):(Lt&&w&&Ou(t),t.flags|=1,Qn(e,t,a,d),t.child)}function W_(e,t,s,a,d){if(e===null){var f=s.type;return typeof f=="function"&&!Du(f)&&f.defaultProps===void 0&&s.compare===null?(t.tag=15,t.type=f,q_(e,t,f,a,d)):(e=Ur(s.type,null,a,t,t.mode,d),e.ref=t.ref,e.return=t,t.child=e)}if(f=e.child,!Md(e,d)){var x=f.memoizedProps;if(s=s.compare,s=s!==null?s:tn,s(x,a)&&e.ref===t.ref)return No(e,t,d)}return t.flags|=1,e=Mo(f,a),e.ref=t.ref,e.return=t,t.child=e}function q_(e,t,s,a,d){if(e!==null){var f=e.memoizedProps;if(tn(f,a)&&e.ref===t.ref)if(Ln=!1,t.pendingProps=a=f,Md(e,d))(e.flags&131072)!==0&&(Ln=!0);else return t.lanes=e.lanes,No(e,t,d)}return bd(e,t,s,a,d)}function Q_(e,t,s,a){var d=a.children,f=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(f=f!==null?f.baseLanes|s:s,e!==null){for(a=t.child=e.child,d=0;a!==null;)d=d|a.lanes|a.childLanes,a=a.sibling;a=d&~f}else a=0,t.child=null;return V_(e,t,f,s,a)}if((s&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Gr(t,f!==null?f.cachePool:null),f!==null?Zh(t,f):Vu(),Jh(t);else return a=t.lanes=536870912,V_(e,t,f!==null?f.baseLanes|s:s,s,a)}else f!==null?(Gr(t,f.cachePool),Zh(t,f),ui(),t.memoizedState=null):(e!==null&&Gr(t,null),Vu(),ui());return Qn(e,t,d,s),t.child}function Rl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function V_(e,t,s,a,d){var f=Xu();return f=f===null?null:{parent:Dn._currentValue,pool:f},t.memoizedState={baseLanes:s,cachePool:f},e!==null&&Gr(t,null),Vu(),Jh(t),e!==null&&wa(e,t,a,!0),t.childLanes=d,null}function lc(e,t){return t=cc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function K_(e,t,s){return Yi(t,e.child,null,s),e=lc(t,t.pendingProps),e.flags|=2,Ts(t),t.memoizedState=null,e}function zy(e,t,s){var a=t.pendingProps,d=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Lt){if(a.mode==="hidden")return e=lc(t,a),t.lanes=536870912,Rl(null,e);if(Zu(t),(e=cn)?(e=cp(e,Hs),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ni!==null?{id:yo,overflow:xo}:null,retryLane:536870912,hydrationErrors:null},s=Lh(e),s.return=t,t.child=s,Wn=t,cn=null)):e=null,e===null)throw oi(t);return t.lanes=536870912,null}return lc(t,a)}var f=e.memoizedState;if(f!==null){var x=f.dehydrated;if(Zu(t),d)if(t.flags&256)t.flags&=-257,t=K_(e,t,s);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(l(558));else if(Ln||wa(e,t,s,!1),d=(s&e.childLanes)!==0,Ln||d){if(a=nn,a!==null&&(x=Bn(a,s),x!==0&&x!==f.retryLane))throw f.retryLane=x,Oi(e,x),xs(a,e,x),xd;yc(),t=K_(e,t,s)}else e=f.treeContext,cn=Xs(x.nextSibling),Wn=t,Lt=!0,si=null,Hs=!1,e!==null&&Bh(t,e),t=lc(t,a),t.flags|=4096;return t}return e=Mo(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function rc(e,t){var s=t.ref;if(s===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(l(284));(e===null||e.ref!==s)&&(t.flags|=4194816)}}function bd(e,t,s,a,d){return Pi(t),s=ed(e,t,s,a,void 0,d),a=td(),e!==null&&!Ln?(nd(e,t,d),No(e,t,d)):(Lt&&a&&Ou(t),t.flags|=1,Qn(e,t,s,d),t.child)}function Z_(e,t,s,a,d,f){return Pi(t),t.updateQueue=null,s=t_(t,a,s,d),e_(e),a=td(),e!==null&&!Ln?(nd(e,t,f),No(e,t,f)):(Lt&&a&&Ou(t),t.flags|=1,Qn(e,t,s,f),t.child)}function J_(e,t,s,a,d){if(Pi(t),t.stateNode===null){var f=ya,x=s.contextType;typeof x=="object"&&x!==null&&(f=qn(x)),f=new s(a,f),t.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=gd,t.stateNode=f,f._reactInternals=t,f=t.stateNode,f.props=a,f.state=t.memoizedState,f.refs={},Fu(t),x=s.contextType,f.context=typeof x=="object"&&x!==null?qn(x):ya,f.state=t.memoizedState,x=s.getDerivedStateFromProps,typeof x=="function"&&(pd(t,s,x,a),f.state=t.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&gd.enqueueReplaceState(f,f.state,null),Cl(t,a,f,d),kl(),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){f=t.stateNode;var w=t.memoizedProps,R=Gi(s,w);f.props=R;var H=f.context,ee=s.contextType;x=ya,typeof ee=="object"&&ee!==null&&(x=qn(ee));var ae=s.getDerivedStateFromProps;ee=typeof ae=="function"||typeof f.getSnapshotBeforeUpdate=="function",w=t.pendingProps!==w,ee||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(w||H!==x)&&P_(t,f,a,x),ai=!1;var G=t.memoizedState;f.state=G,Cl(t,a,f,d),kl(),H=t.memoizedState,w||G!==H||ai?(typeof ae=="function"&&(pd(t,s,ae,a),H=t.memoizedState),(R=ai||$_(t,s,R,a,G,H,x))?(ee||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(t.flags|=4194308)):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=H),f.props=a,f.state=H,f.context=x,a=R):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{f=t.stateNode,Wu(e,t),x=t.memoizedProps,ee=Gi(s,x),f.props=ee,ae=t.pendingProps,G=f.context,H=s.contextType,R=ya,typeof H=="object"&&H!==null&&(R=qn(H)),w=s.getDerivedStateFromProps,(H=typeof w=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==ae||G!==R)&&P_(t,f,a,R),ai=!1,G=t.memoizedState,f.state=G,Cl(t,a,f,d),kl();var q=t.memoizedState;x!==ae||G!==q||ai||e!==null&&e.dependencies!==null&&Yr(e.dependencies)?(typeof w=="function"&&(pd(t,s,w,a),q=t.memoizedState),(ee=ai||$_(t,s,ee,a,G,q,R)||e!==null&&e.dependencies!==null&&Yr(e.dependencies))?(H||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(a,q,R),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(a,q,R)),typeof f.componentDidUpdate=="function"&&(t.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&G===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&G===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=q),f.props=a,f.state=q,f.context=R,a=ee):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&G===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&G===e.memoizedState||(t.flags|=1024),a=!1)}return f=a,rc(e,t),a=(t.flags&128)!==0,f||a?(f=t.stateNode,s=a&&typeof s.getDerivedStateFromError!="function"?null:f.render(),t.flags|=1,e!==null&&a?(t.child=Yi(t,e.child,null,d),t.child=Yi(t,null,s,d)):Qn(e,t,s,d),t.memoizedState=f.state,e=t.child):e=No(e,t,d),e}function em(e,t,s,a){return Bi(),t.flags|=256,Qn(e,t,s,a),t.child}var vd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wd(e){return{baseLanes:e,cachePool:Yh()}}function Sd(e,t,s){return e=e!==null?e.childLanes&~s:0,t&&(e|=Rs),e}function tm(e,t,s){var a=t.pendingProps,d=!1,f=(t.flags&128)!==0,x;if((x=f)||(x=e!==null&&e.memoizedState===null?!1:(Cn.current&2)!==0),x&&(d=!0,t.flags&=-129),x=(t.flags&32)!==0,t.flags&=-33,e===null){if(Lt){if(d?ci(t):ui(),(e=cn)?(e=cp(e,Hs),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ni!==null?{id:yo,overflow:xo}:null,retryLane:536870912,hydrationErrors:null},s=Lh(e),s.return=t,t.child=s,Wn=t,cn=null)):e=null,e===null)throw oi(t);return af(e)?t.lanes=32:t.lanes=536870912,null}var w=a.children;return a=a.fallback,d?(ui(),d=t.mode,w=cc({mode:"hidden",children:w},d),a=zi(a,d,s,null),w.return=t,a.return=t,w.sibling=a,t.child=w,a=t.child,a.memoizedState=wd(s),a.childLanes=Sd(e,x,s),t.memoizedState=vd,Rl(null,a)):(ci(t),kd(t,w))}var R=e.memoizedState;if(R!==null&&(w=R.dehydrated,w!==null)){if(f)t.flags&256?(ci(t),t.flags&=-257,t=Cd(e,t,s)):t.memoizedState!==null?(ui(),t.child=e.child,t.flags|=128,t=null):(ui(),w=a.fallback,d=t.mode,a=cc({mode:"visible",children:a.children},d),w=zi(w,d,s,null),w.flags|=2,a.return=t,w.return=t,a.sibling=w,t.child=a,Yi(t,e.child,null,s),a=t.child,a.memoizedState=wd(s),a.childLanes=Sd(e,x,s),t.memoizedState=vd,t=Rl(null,a));else if(ci(t),af(w)){if(x=w.nextSibling&&w.nextSibling.dataset,x)var H=x.dgst;x=H,a=Error(l(419)),a.stack="",a.digest=x,yl({value:a,source:null,stack:null}),t=Cd(e,t,s)}else if(Ln||wa(e,t,s,!1),x=(s&e.childLanes)!==0,Ln||x){if(x=nn,x!==null&&(a=Bn(x,s),a!==0&&a!==R.retryLane))throw R.retryLane=a,Oi(e,a),xs(x,e,a),xd;of(w)||yc(),t=Cd(e,t,s)}else of(w)?(t.flags|=192,t.child=e.child,t=null):(e=R.treeContext,cn=Xs(w.nextSibling),Wn=t,Lt=!0,si=null,Hs=!1,e!==null&&Bh(t,e),t=kd(t,a.children),t.flags|=4096);return t}return d?(ui(),w=a.fallback,d=t.mode,R=e.child,H=R.sibling,a=Mo(R,{mode:"hidden",children:a.children}),a.subtreeFlags=R.subtreeFlags&65011712,H!==null?w=Mo(H,w):(w=zi(w,d,s,null),w.flags|=2),w.return=t,a.return=t,a.sibling=w,t.child=a,Rl(null,a),a=t.child,w=e.child.memoizedState,w===null?w=wd(s):(d=w.cachePool,d!==null?(R=Dn._currentValue,d=d.parent!==R?{parent:R,pool:R}:d):d=Yh(),w={baseLanes:w.baseLanes|s,cachePool:d}),a.memoizedState=w,a.childLanes=Sd(e,x,s),t.memoizedState=vd,Rl(e.child,a)):(ci(t),s=e.child,e=s.sibling,s=Mo(s,{mode:"visible",children:a.children}),s.return=t,s.sibling=null,e!==null&&(x=t.deletions,x===null?(t.deletions=[e],t.flags|=16):x.push(e)),t.child=s,t.memoizedState=null,s)}function kd(e,t){return t=cc({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function cc(e,t){return e=js(22,e,null,t),e.lanes=0,e}function Cd(e,t,s){return Yi(t,e.child,null,s),e=kd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nm(e,t,s){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Iu(e.return,t,s)}function jd(e,t,s,a,d,f){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:s,tailMode:d,treeForkCount:f}:(x.isBackwards=t,x.rendering=null,x.renderingStartTime=0,x.last=a,x.tail=s,x.tailMode=d,x.treeForkCount=f)}function sm(e,t,s){var a=t.pendingProps,d=a.revealOrder,f=a.tail;a=a.children;var x=Cn.current,w=(x&2)!==0;if(w?(x=x&1|2,t.flags|=128):x&=1,_e(Cn,x),Qn(e,t,a,s),a=Lt?gl:0,!w&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nm(e,s,t);else if(e.tag===19)nm(e,s,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(d){case"forwards":for(s=t.child,d=null;s!==null;)e=s.alternate,e!==null&&Kr(e)===null&&(d=s),s=s.sibling;s=d,s===null?(d=t.child,t.child=null):(d=s.sibling,s.sibling=null),jd(t,!1,d,s,f,a);break;case"backwards":case"unstable_legacy-backwards":for(s=null,d=t.child,t.child=null;d!==null;){if(e=d.alternate,e!==null&&Kr(e)===null){t.child=d;break}e=d.sibling,d.sibling=s,s=d,d=e}jd(t,!0,s,null,f,a);break;case"together":jd(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function No(e,t,s){if(e!==null&&(t.dependencies=e.dependencies),hi|=t.lanes,(s&t.childLanes)===0)if(e!==null){if(wa(e,t,s,!1),(s&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,s=Mo(e,e.pendingProps),t.child=s,s.return=t;e.sibling!==null;)e=e.sibling,s=s.sibling=Mo(e,e.pendingProps),s.return=t;s.sibling=null}return t.child}function Md(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Yr(e)))}function By(e,t,s){switch(t.tag){case 3:en(t,t.stateNode.containerInfo),ii(t,Dn,e.memoizedState.cache),Bi();break;case 27:case 5:nt(t);break;case 4:en(t,t.stateNode.containerInfo);break;case 10:ii(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Zu(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(ci(t),t.flags|=128,null):(s&t.child.childLanes)!==0?tm(e,t,s):(ci(t),e=No(e,t,s),e!==null?e.sibling:null);ci(t);break;case 19:var d=(e.flags&128)!==0;if(a=(s&t.childLanes)!==0,a||(wa(e,t,s,!1),a=(s&t.childLanes)!==0),d){if(a)return sm(e,t,s);t.flags|=128}if(d=t.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),_e(Cn,Cn.current),a)break;return null;case 22:return t.lanes=0,Q_(e,t,s,t.pendingProps);case 24:ii(t,Dn,e.memoizedState.cache)}return No(e,t,s)}function om(e,t,s){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ln=!0;else{if(!Md(e,s)&&(t.flags&128)===0)return Ln=!1,By(e,t,s);Ln=(e.flags&131072)!==0}else Ln=!1,Lt&&(t.flags&1048576)!==0&&zh(t,gl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Ui(t.elementType),t.type=e,typeof e=="function")Du(e)?(a=Gi(e,a),t.tag=1,t=J_(null,t,e,a,s)):(t.tag=0,t=bd(null,t,e,a,s));else{if(e!=null){var d=e.$$typeof;if(d===z){t.tag=11,t=F_(null,t,e,a,s);break e}else if(d===Y){t.tag=14,t=W_(null,t,e,a,s);break e}}throw t=me(e)||e,Error(l(306,t,""))}}return t;case 0:return bd(e,t,t.type,t.pendingProps,s);case 1:return a=t.type,d=Gi(a,t.pendingProps),J_(e,t,a,d,s);case 3:e:{if(en(t,t.stateNode.containerInfo),e===null)throw Error(l(387));a=t.pendingProps;var f=t.memoizedState;d=f.element,Wu(e,t),Cl(t,a,null,s);var x=t.memoizedState;if(a=x.cache,ii(t,Dn,a),a!==f.cache&&Uu(t,[Dn],s,!0),kl(),a=x.element,f.isDehydrated)if(f={element:a,isDehydrated:!1,cache:x.cache},t.updateQueue.baseState=f,t.memoizedState=f,t.flags&256){t=em(e,t,a,s);break e}else if(a!==d){d=Ps(Error(l(424)),t),yl(d),t=em(e,t,a,s);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(cn=Xs(e.firstChild),Wn=t,Lt=!0,si=null,Hs=!0,s=Qh(t,null,a,s),t.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Bi(),a===d){t=No(e,t,s);break e}Qn(e,t,a,s)}t=t.child}return t;case 26:return rc(e,t),e===null?(s=mp(t.type,null,t.pendingProps,null))?t.memoizedState=s:Lt||(s=t.type,e=t.pendingProps,a=Cc(lt.current).createElement(s),a[Yt]=t,a[Sn]=e,Vn(a,s,e),Rn(a),t.stateNode=a):t.memoizedState=mp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return nt(t),e===null&&Lt&&(a=t.stateNode=fp(t.type,t.pendingProps,lt.current),Wn=t,Hs=!0,d=cn,yi(t.type)?(lf=d,cn=Xs(a.firstChild)):cn=d),Qn(e,t,t.pendingProps.children,s),rc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Lt&&((d=a=cn)&&(a=h1(a,t.type,t.pendingProps,Hs),a!==null?(t.stateNode=a,Wn=t,cn=Xs(a.firstChild),Hs=!1,d=!0):d=!1),d||oi(t)),nt(t),d=t.type,f=t.pendingProps,x=e!==null?e.memoizedProps:null,a=f.children,tf(d,f)?a=null:x!==null&&tf(d,x)&&(t.flags|=32),t.memoizedState!==null&&(d=ed(e,t,Ty,null,null,s),Gl._currentValue=d),rc(e,t),Qn(e,t,a,s),t.child;case 6:return e===null&&Lt&&((e=s=cn)&&(s=_1(s,t.pendingProps,Hs),s!==null?(t.stateNode=s,Wn=t,cn=null,e=!0):e=!1),e||oi(t)),null;case 13:return tm(e,t,s);case 4:return en(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Yi(t,null,a,s):Qn(e,t,a,s),t.child;case 11:return F_(e,t,t.type,t.pendingProps,s);case 7:return Qn(e,t,t.pendingProps,s),t.child;case 8:return Qn(e,t,t.pendingProps.children,s),t.child;case 12:return Qn(e,t,t.pendingProps.children,s),t.child;case 10:return a=t.pendingProps,ii(t,t.type,a.value),Qn(e,t,a.children,s),t.child;case 9:return d=t.type._context,a=t.pendingProps.children,Pi(t),d=qn(d),a=a(d),t.flags|=1,Qn(e,t,a,s),t.child;case 14:return W_(e,t,t.type,t.pendingProps,s);case 15:return q_(e,t,t.type,t.pendingProps,s);case 19:return sm(e,t,s);case 31:return zy(e,t,s);case 22:return Q_(e,t,s,t.pendingProps);case 24:return Pi(t),a=qn(Dn),e===null?(d=Xu(),d===null&&(d=nn,f=Hu(),d.pooledCache=f,f.refCount++,f!==null&&(d.pooledCacheLanes|=s),d=f),t.memoizedState={parent:a,cache:d},Fu(t),ii(t,Dn,d)):((e.lanes&s)!==0&&(Wu(e,t),Cl(t,null,null,s),kl()),d=e.memoizedState,f=t.memoizedState,d.parent!==a?(d={parent:a,cache:a},t.memoizedState=d,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=d),ii(t,Dn,a)):(a=f.cache,ii(t,Dn,a),a!==d.cache&&Uu(t,[Dn],s,!0))),Qn(e,t,t.pendingProps.children,s),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function Lo(e){e.flags|=4}function Td(e,t,s,a,d){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(d&335544128)===d)if(e.stateNode.complete)e.flags|=8192;else if(Am())e.flags|=8192;else throw Hi=Wr,Gu}else e.flags&=-16777217}function im(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!bp(t))if(Am())e.flags|=8192;else throw Hi=Wr,Gu}function uc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?dt():536870912,e.lanes|=t,La|=t)}function Al(e,t){if(!Lt)switch(e.tailMode){case"hidden":t=e.tail;for(var s=null;t!==null;)t.alternate!==null&&(s=t),t=t.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function un(e){var t=e.alternate!==null&&e.alternate.child===e.child,s=0,a=0;if(t)for(var d=e.child;d!==null;)s|=d.lanes|d.childLanes,a|=d.subtreeFlags&65011712,a|=d.flags&65011712,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)s|=d.lanes|d.childLanes,a|=d.subtreeFlags,a|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=a,e.childLanes=s,t}function $y(e,t,s){var a=t.pendingProps;switch(zu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return un(t),null;case 1:return un(t),null;case 3:return s=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ro(Dn),Ge(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(va(t)?Lo(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,$u())),un(t),null;case 26:var d=t.type,f=t.memoizedState;return e===null?(Lo(t),f!==null?(un(t),im(t,f)):(un(t),Td(t,d,null,a,s))):f?f!==e.memoizedState?(Lo(t),un(t),im(t,f)):(un(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Lo(t),un(t),Td(t,d,e,a,s)),null;case 27:if(kt(t),s=lt.current,d=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Lo(t);else{if(!a){if(t.stateNode===null)throw Error(l(166));return un(t),null}e=je.current,va(t)?$h(t):(e=fp(d,a,s),t.stateNode=e,Lo(t))}return un(t),null;case 5:if(kt(t),d=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Lo(t);else{if(!a){if(t.stateNode===null)throw Error(l(166));return un(t),null}if(f=je.current,va(t))$h(t);else{var x=Cc(lt.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",d);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;default:switch(d){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",d);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof a.is=="string"?x.createElement("select",{is:a.is}):x.createElement("select"),a.multiple?f.multiple=!0:a.size&&(f.size=a.size);break;default:f=typeof a.is=="string"?x.createElement(d,{is:a.is}):x.createElement(d)}}f[Yt]=t,f[Sn]=a;e:for(x=t.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===t)break e;for(;x.sibling===null;){if(x.return===null||x.return===t)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}t.stateNode=f;e:switch(Vn(f,d,a),d){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Lo(t)}}return un(t),Td(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,s),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Lo(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(l(166));if(e=lt.current,va(t)){if(e=t.stateNode,s=t.memoizedProps,a=null,d=Wn,d!==null)switch(d.tag){case 27:case 5:a=d.memoizedProps}e[Yt]=t,e=!!(e.nodeValue===s||a!==null&&a.suppressHydrationWarning===!0||tp(e.nodeValue,s)),e||oi(t,!0)}else e=Cc(e).createTextNode(a),e[Yt]=t,t.stateNode=e}return un(t),null;case 31:if(s=t.memoizedState,e===null||e.memoizedState!==null){if(a=va(t),s!==null){if(e===null){if(!a)throw Error(l(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(557));e[Yt]=t}else Bi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;un(t),e=!1}else s=$u(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return t.flags&256?(Ts(t),t):(Ts(t),null);if((t.flags&128)!==0)throw Error(l(558))}return un(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(d=va(t),a!==null&&a.dehydrated!==null){if(e===null){if(!d)throw Error(l(318));if(d=t.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(l(317));d[Yt]=t}else Bi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;un(t),d=!1}else d=$u(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=d),d=!0;if(!d)return t.flags&256?(Ts(t),t):(Ts(t),null)}return Ts(t),(t.flags&128)!==0?(t.lanes=s,t):(s=a!==null,e=e!==null&&e.memoizedState!==null,s&&(a=t.child,d=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(d=a.alternate.memoizedState.cachePool.pool),f=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(f=a.memoizedState.cachePool.pool),f!==d&&(a.flags|=2048)),s!==e&&s&&(t.child.flags|=8192),uc(t,t.updateQueue),un(t),null);case 4:return Ge(),e===null&&Vd(t.stateNode.containerInfo),un(t),null;case 10:return Ro(t.type),un(t),null;case 19:if(Z(Cn),a=t.memoizedState,a===null)return un(t),null;if(d=(t.flags&128)!==0,f=a.rendering,f===null)if(d)Al(a,!1);else{if(vn!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(f=Kr(e),f!==null){for(t.flags|=128,Al(a,!1),e=f.updateQueue,t.updateQueue=e,uc(t,e),t.subtreeFlags=0,e=s,s=t.child;s!==null;)Nh(s,e),s=s.sibling;return _e(Cn,Cn.current&1|2),Lt&&To(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&Te()>mc&&(t.flags|=128,d=!0,Al(a,!1),t.lanes=4194304)}else{if(!d)if(e=Kr(f),e!==null){if(t.flags|=128,d=!0,e=e.updateQueue,t.updateQueue=e,uc(t,e),Al(a,!0),a.tail===null&&a.tailMode==="hidden"&&!f.alternate&&!Lt)return un(t),null}else 2*Te()-a.renderingStartTime>mc&&s!==536870912&&(t.flags|=128,d=!0,Al(a,!1),t.lanes=4194304);a.isBackwards?(f.sibling=t.child,t.child=f):(e=a.last,e!==null?e.sibling=f:t.child=f,a.last=f)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Te(),e.sibling=null,s=Cn.current,_e(Cn,d?s&1|2:s&1),Lt&&To(t,a.treeForkCount),e):(un(t),null);case 22:case 23:return Ts(t),Ku(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(s&536870912)!==0&&(t.flags&128)===0&&(un(t),t.subtreeFlags&6&&(t.flags|=8192)):un(t),s=t.updateQueue,s!==null&&uc(t,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==s&&(t.flags|=2048),e!==null&&Z(Ii),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),t.memoizedState.cache!==s&&(t.flags|=2048),Ro(Dn),un(t),null;case 25:return null;case 30:return null}throw Error(l(156,t.tag))}function Py(e,t){switch(zu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ro(Dn),Ge(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return kt(t),null;case 31:if(t.memoizedState!==null){if(Ts(t),t.alternate===null)throw Error(l(340));Bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ts(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));Bi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(Cn),null;case 4:return Ge(),null;case 10:return Ro(t.type),null;case 22:case 23:return Ts(t),Ku(),e!==null&&Z(Ii),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ro(Dn),null;case 25:return null;default:return null}}function am(e,t){switch(zu(t),t.tag){case 3:Ro(Dn),Ge();break;case 26:case 27:case 5:kt(t);break;case 4:Ge();break;case 31:t.memoizedState!==null&&Ts(t);break;case 13:Ts(t);break;case 19:Z(Cn);break;case 10:Ro(t.type);break;case 22:case 23:Ts(t),Ku(),e!==null&&Z(Ii);break;case 24:Ro(Dn)}}function Dl(e,t){try{var s=t.updateQueue,a=s!==null?s.lastEffect:null;if(a!==null){var d=a.next;s=d;do{if((s.tag&e)===e){a=void 0;var f=s.create,x=s.inst;a=f(),x.destroy=a}s=s.next}while(s!==d)}}catch(w){Gt(t,t.return,w)}}function di(e,t,s){try{var a=t.updateQueue,d=a!==null?a.lastEffect:null;if(d!==null){var f=d.next;a=f;do{if((a.tag&e)===e){var x=a.inst,w=x.destroy;if(w!==void 0){x.destroy=void 0,d=t;var R=s,H=w;try{H()}catch(ee){Gt(d,R,ee)}}}a=a.next}while(a!==f)}}catch(ee){Gt(t,t.return,ee)}}function lm(e){var t=e.updateQueue;if(t!==null){var s=e.stateNode;try{Kh(t,s)}catch(a){Gt(e,e.return,a)}}}function rm(e,t,s){s.props=Gi(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(a){Gt(e,t,a)}}function Nl(e,t){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof s=="function"?e.refCleanup=s(a):s.current=a}}catch(d){Gt(e,t,d)}}function bo(e,t){var s=e.ref,a=e.refCleanup;if(s!==null)if(typeof a=="function")try{a()}catch(d){Gt(e,t,d)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(d){Gt(e,t,d)}else s.current=null}function cm(e){var t=e.type,s=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":s.autoFocus&&a.focus();break e;case"img":s.src?a.src=s.src:s.srcSet&&(a.srcset=s.srcSet)}}catch(d){Gt(e,e.return,d)}}function Ed(e,t,s){try{var a=e.stateNode;l1(a,e.type,s,t),a[Sn]=t}catch(d){Gt(e,e.return,d)}}function um(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&yi(e.type)||e.tag===4}function Rd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||um(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&yi(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ad(e,t,s){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,t):(t=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,t.appendChild(e),s=s._reactRootContainer,s!=null||t.onclick!==null||(t.onclick=Qs));else if(a!==4&&(a===27&&yi(e.type)&&(s=e.stateNode,t=null),e=e.child,e!==null))for(Ad(e,t,s),e=e.sibling;e!==null;)Ad(e,t,s),e=e.sibling}function dc(e,t,s){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?s.insertBefore(e,t):s.appendChild(e);else if(a!==4&&(a===27&&yi(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(dc(e,t,s),e=e.sibling;e!==null;)dc(e,t,s),e=e.sibling}function dm(e){var t=e.stateNode,s=e.memoizedProps;try{for(var a=e.type,d=t.attributes;d.length;)t.removeAttributeNode(d[0]);Vn(t,a,s),t[Yt]=e,t[Sn]=s}catch(f){Gt(e,e.return,f)}}var Oo=!1,On=!1,Dd=!1,fm=typeof WeakSet=="function"?WeakSet:Set,Xn=null;function Iy(e,t){if(e=e.containerInfo,Jd=Dc,e=fn(e),tt(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var a=s.getSelection&&s.getSelection();if(a&&a.rangeCount!==0){s=a.anchorNode;var d=a.anchorOffset,f=a.focusNode;a=a.focusOffset;try{s.nodeType,f.nodeType}catch{s=null;break e}var x=0,w=-1,R=-1,H=0,ee=0,ae=e,G=null;t:for(;;){for(var q;ae!==s||d!==0&&ae.nodeType!==3||(w=x+d),ae!==f||a!==0&&ae.nodeType!==3||(R=x+a),ae.nodeType===3&&(x+=ae.nodeValue.length),(q=ae.firstChild)!==null;)G=ae,ae=q;for(;;){if(ae===e)break t;if(G===s&&++H===d&&(w=x),G===f&&++ee===a&&(R=x),(q=ae.nextSibling)!==null)break;ae=G,G=ae.parentNode}ae=q}s=w===-1||R===-1?null:{start:w,end:R}}else s=null}s=s||{start:0,end:0}}else s=null;for(ef={focusedElem:e,selectionRange:s},Dc=!1,Xn=t;Xn!==null;)if(t=Xn,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Xn=e;else for(;Xn!==null;){switch(t=Xn,f=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)d=e[s],d.ref.impl=d.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,s=t,d=f.memoizedProps,f=f.memoizedState,a=s.stateNode;try{var Be=Gi(s.type,d);e=a.getSnapshotBeforeUpdate(Be,f),a.__reactInternalSnapshotBeforeUpdate=e}catch(it){Gt(s,s.return,it)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,s=e.nodeType,s===9)sf(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":sf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=t.sibling,e!==null){e.return=t.return,Xn=e;break}Xn=t.return}}function hm(e,t,s){var a=s.flags;switch(s.tag){case 0:case 11:case 15:Bo(e,s),a&4&&Dl(5,s);break;case 1:if(Bo(e,s),a&4)if(e=s.stateNode,t===null)try{e.componentDidMount()}catch(x){Gt(s,s.return,x)}else{var d=Gi(s.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(d,t,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Gt(s,s.return,x)}}a&64&&lm(s),a&512&&Nl(s,s.return);break;case 3:if(Bo(e,s),a&64&&(e=s.updateQueue,e!==null)){if(t=null,s.child!==null)switch(s.child.tag){case 27:case 5:t=s.child.stateNode;break;case 1:t=s.child.stateNode}try{Kh(e,t)}catch(x){Gt(s,s.return,x)}}break;case 27:t===null&&a&4&&dm(s);case 26:case 5:Bo(e,s),t===null&&a&4&&cm(s),a&512&&Nl(s,s.return);break;case 12:Bo(e,s);break;case 31:Bo(e,s),a&4&&pm(e,s);break;case 13:Bo(e,s),a&4&&gm(e,s),a&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=Qy.bind(null,s),m1(e,s))));break;case 22:if(a=s.memoizedState!==null||Oo,!a){t=t!==null&&t.memoizedState!==null||On,d=Oo;var f=On;Oo=a,(On=t)&&!f?$o(e,s,(s.subtreeFlags&8772)!==0):Bo(e,s),Oo=d,On=f}break;case 30:break;default:Bo(e,s)}}function _m(e){var t=e.alternate;t!==null&&(e.alternate=null,_m(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&oa(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var hn=null,ms=!1;function zo(e,t,s){for(s=s.child;s!==null;)mm(e,t,s),s=s.sibling}function mm(e,t,s){if(ke&&typeof ke.onCommitFiberUnmount=="function")try{ke.onCommitFiberUnmount(Le,s)}catch{}switch(s.tag){case 26:On||bo(s,t),zo(e,t,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:On||bo(s,t);var a=hn,d=ms;yi(s.type)&&(hn=s.stateNode,ms=!1),zo(e,t,s),Hl(s.stateNode),hn=a,ms=d;break;case 5:On||bo(s,t);case 6:if(a=hn,d=ms,hn=null,zo(e,t,s),hn=a,ms=d,hn!==null)if(ms)try{(hn.nodeType===9?hn.body:hn.nodeName==="HTML"?hn.ownerDocument.body:hn).removeChild(s.stateNode)}catch(f){Gt(s,t,f)}else try{hn.removeChild(s.stateNode)}catch(f){Gt(s,t,f)}break;case 18:hn!==null&&(ms?(e=hn,lp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Ha(e)):lp(hn,s.stateNode));break;case 4:a=hn,d=ms,hn=s.stateNode.containerInfo,ms=!0,zo(e,t,s),hn=a,ms=d;break;case 0:case 11:case 14:case 15:di(2,s,t),On||di(4,s,t),zo(e,t,s);break;case 1:On||(bo(s,t),a=s.stateNode,typeof a.componentWillUnmount=="function"&&rm(s,t,a)),zo(e,t,s);break;case 21:zo(e,t,s);break;case 22:On=(a=On)||s.memoizedState!==null,zo(e,t,s),On=a;break;default:zo(e,t,s)}}function pm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ha(e)}catch(s){Gt(t,t.return,s)}}}function gm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ha(e)}catch(s){Gt(t,t.return,s)}}function Uy(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new fm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new fm),t;default:throw Error(l(435,e.tag))}}function fc(e,t){var s=Uy(e);t.forEach(function(a){if(!s.has(a)){s.add(a);var d=Vy.bind(null,e,a);a.then(d,d)}})}function ps(e,t){var s=t.deletions;if(s!==null)for(var a=0;a<s.length;a++){var d=s[a],f=e,x=t,w=x;e:for(;w!==null;){switch(w.tag){case 27:if(yi(w.type)){hn=w.stateNode,ms=!1;break e}break;case 5:hn=w.stateNode,ms=!1;break e;case 3:case 4:hn=w.stateNode.containerInfo,ms=!0;break e}w=w.return}if(hn===null)throw Error(l(160));mm(f,x,d),hn=null,ms=!1,f=d.alternate,f!==null&&(f.return=null),d.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ym(t,e),t=t.sibling}var eo=null;function ym(e,t){var s=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ps(t,e),gs(e),a&4&&(di(3,e,e.return),Dl(3,e),di(5,e,e.return));break;case 1:ps(t,e),gs(e),a&512&&(On||s===null||bo(s,s.return)),a&64&&Oo&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?a:s.concat(a))));break;case 26:var d=eo;if(ps(t,e),gs(e),a&512&&(On||s===null||bo(s,s.return)),a&4){var f=s!==null?s.memoizedState:null;if(a=e.memoizedState,s===null)if(a===null)if(e.stateNode===null){e:{a=e.type,s=e.memoizedProps,d=d.ownerDocument||d;t:switch(a){case"title":f=d.getElementsByTagName("title")[0],(!f||f[Mi]||f[Yt]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=d.createElement(a),d.head.insertBefore(f,d.querySelector("head > title"))),Vn(f,a,s),f[Yt]=e,Rn(f),a=f;break e;case"link":var x=yp("link","href",d).get(a+(s.href||""));if(x){for(var w=0;w<x.length;w++)if(f=x[w],f.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&f.getAttribute("rel")===(s.rel==null?null:s.rel)&&f.getAttribute("title")===(s.title==null?null:s.title)&&f.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){x.splice(w,1);break t}}f=d.createElement(a),Vn(f,a,s),d.head.appendChild(f);break;case"meta":if(x=yp("meta","content",d).get(a+(s.content||""))){for(w=0;w<x.length;w++)if(f=x[w],f.getAttribute("content")===(s.content==null?null:""+s.content)&&f.getAttribute("name")===(s.name==null?null:s.name)&&f.getAttribute("property")===(s.property==null?null:s.property)&&f.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&f.getAttribute("charset")===(s.charSet==null?null:s.charSet)){x.splice(w,1);break t}}f=d.createElement(a),Vn(f,a,s),d.head.appendChild(f);break;default:throw Error(l(468,a))}f[Yt]=e,Rn(f),a=f}e.stateNode=a}else xp(d,e.type,e.stateNode);else e.stateNode=gp(d,a,e.memoizedProps);else f!==a?(f===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):f.count--,a===null?xp(d,e.type,e.stateNode):gp(d,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Ed(e,e.memoizedProps,s.memoizedProps)}break;case 27:ps(t,e),gs(e),a&512&&(On||s===null||bo(s,s.return)),s!==null&&a&4&&Ed(e,e.memoizedProps,s.memoizedProps);break;case 5:if(ps(t,e),gs(e),a&512&&(On||s===null||bo(s,s.return)),e.flags&32){d=e.stateNode;try{Qo(d,"")}catch(Be){Gt(e,e.return,Be)}}a&4&&e.stateNode!=null&&(d=e.memoizedProps,Ed(e,d,s!==null?s.memoizedProps:d)),a&1024&&(Dd=!0);break;case 6:if(ps(t,e),gs(e),a&4){if(e.stateNode===null)throw Error(l(162));a=e.memoizedProps,s=e.stateNode;try{s.nodeValue=a}catch(Be){Gt(e,e.return,Be)}}break;case 3:if(Tc=null,d=eo,eo=jc(t.containerInfo),ps(t,e),eo=d,gs(e),a&4&&s!==null&&s.memoizedState.isDehydrated)try{Ha(t.containerInfo)}catch(Be){Gt(e,e.return,Be)}Dd&&(Dd=!1,xm(e));break;case 4:a=eo,eo=jc(e.stateNode.containerInfo),ps(t,e),gs(e),eo=a;break;case 12:ps(t,e),gs(e);break;case 31:ps(t,e),gs(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,fc(e,a)));break;case 13:ps(t,e),gs(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(_c=Te()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,fc(e,a)));break;case 22:d=e.memoizedState!==null;var R=s!==null&&s.memoizedState!==null,H=Oo,ee=On;if(Oo=H||d,On=ee||R,ps(t,e),On=ee,Oo=H,gs(e),a&8192)e:for(t=e.stateNode,t._visibility=d?t._visibility&-2:t._visibility|1,d&&(s===null||R||Oo||On||Fi(e)),s=null,t=e;;){if(t.tag===5||t.tag===26){if(s===null){R=s=t;try{if(f=R.stateNode,d)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{w=R.stateNode;var ae=R.memoizedProps.style,G=ae!=null&&ae.hasOwnProperty("display")?ae.display:null;w.style.display=G==null||typeof G=="boolean"?"":(""+G).trim()}}catch(Be){Gt(R,R.return,Be)}}}else if(t.tag===6){if(s===null){R=t;try{R.stateNode.nodeValue=d?"":R.memoizedProps}catch(Be){Gt(R,R.return,Be)}}}else if(t.tag===18){if(s===null){R=t;try{var q=R.stateNode;d?rp(q,!0):rp(R.stateNode,!1)}catch(Be){Gt(R,R.return,Be)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;s===t&&(s=null),t=t.return}s===t&&(s=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(s=a.retryQueue,s!==null&&(a.retryQueue=null,fc(e,s))));break;case 19:ps(t,e),gs(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,fc(e,a)));break;case 30:break;case 21:break;default:ps(t,e),gs(e)}}function gs(e){var t=e.flags;if(t&2){try{for(var s,a=e.return;a!==null;){if(um(a)){s=a;break}a=a.return}if(s==null)throw Error(l(160));switch(s.tag){case 27:var d=s.stateNode,f=Rd(e);dc(e,f,d);break;case 5:var x=s.stateNode;s.flags&32&&(Qo(x,""),s.flags&=-33);var w=Rd(e);dc(e,w,x);break;case 3:case 4:var R=s.stateNode.containerInfo,H=Rd(e);Ad(e,H,R);break;default:throw Error(l(161))}}catch(ee){Gt(e,e.return,ee)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Bo(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)hm(e,t.alternate,t),t=t.sibling}function Fi(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:di(4,t,t.return),Fi(t);break;case 1:bo(t,t.return);var s=t.stateNode;typeof s.componentWillUnmount=="function"&&rm(t,t.return,s),Fi(t);break;case 27:Hl(t.stateNode);case 26:case 5:bo(t,t.return),Fi(t);break;case 22:t.memoizedState===null&&Fi(t);break;case 30:Fi(t);break;default:Fi(t)}e=e.sibling}}function $o(e,t,s){for(s=s&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,d=e,f=t,x=f.flags;switch(f.tag){case 0:case 11:case 15:$o(d,f,s),Dl(4,f);break;case 1:if($o(d,f,s),a=f,d=a.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(H){Gt(a,a.return,H)}if(a=f,d=a.updateQueue,d!==null){var w=a.stateNode;try{var R=d.shared.hiddenCallbacks;if(R!==null)for(d.shared.hiddenCallbacks=null,d=0;d<R.length;d++)Vh(R[d],w)}catch(H){Gt(a,a.return,H)}}s&&x&64&&lm(f),Nl(f,f.return);break;case 27:dm(f);case 26:case 5:$o(d,f,s),s&&a===null&&x&4&&cm(f),Nl(f,f.return);break;case 12:$o(d,f,s);break;case 31:$o(d,f,s),s&&x&4&&pm(d,f);break;case 13:$o(d,f,s),s&&x&4&&gm(d,f);break;case 22:f.memoizedState===null&&$o(d,f,s),Nl(f,f.return);break;case 30:break;default:$o(d,f,s)}t=t.sibling}}function Nd(e,t){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&xl(s))}function Ld(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&xl(e))}function to(e,t,s,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)bm(e,t,s,a),t=t.sibling}function bm(e,t,s,a){var d=t.flags;switch(t.tag){case 0:case 11:case 15:to(e,t,s,a),d&2048&&Dl(9,t);break;case 1:to(e,t,s,a);break;case 3:to(e,t,s,a),d&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&xl(e)));break;case 12:if(d&2048){to(e,t,s,a),e=t.stateNode;try{var f=t.memoizedProps,x=f.id,w=f.onPostCommit;typeof w=="function"&&w(x,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(R){Gt(t,t.return,R)}}else to(e,t,s,a);break;case 31:to(e,t,s,a);break;case 13:to(e,t,s,a);break;case 23:break;case 22:f=t.stateNode,x=t.alternate,t.memoizedState!==null?f._visibility&2?to(e,t,s,a):Ll(e,t):f._visibility&2?to(e,t,s,a):(f._visibility|=2,Aa(e,t,s,a,(t.subtreeFlags&10256)!==0||!1)),d&2048&&Nd(x,t);break;case 24:to(e,t,s,a),d&2048&&Ld(t.alternate,t);break;default:to(e,t,s,a)}}function Aa(e,t,s,a,d){for(d=d&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var f=e,x=t,w=s,R=a,H=x.flags;switch(x.tag){case 0:case 11:case 15:Aa(f,x,w,R,d),Dl(8,x);break;case 23:break;case 22:var ee=x.stateNode;x.memoizedState!==null?ee._visibility&2?Aa(f,x,w,R,d):Ll(f,x):(ee._visibility|=2,Aa(f,x,w,R,d)),d&&H&2048&&Nd(x.alternate,x);break;case 24:Aa(f,x,w,R,d),d&&H&2048&&Ld(x.alternate,x);break;default:Aa(f,x,w,R,d)}t=t.sibling}}function Ll(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var s=e,a=t,d=a.flags;switch(a.tag){case 22:Ll(s,a),d&2048&&Nd(a.alternate,a);break;case 24:Ll(s,a),d&2048&&Ld(a.alternate,a);break;default:Ll(s,a)}t=t.sibling}}var Ol=8192;function Da(e,t,s){if(e.subtreeFlags&Ol)for(e=e.child;e!==null;)vm(e,t,s),e=e.sibling}function vm(e,t,s){switch(e.tag){case 26:Da(e,t,s),e.flags&Ol&&e.memoizedState!==null&&M1(s,eo,e.memoizedState,e.memoizedProps);break;case 5:Da(e,t,s);break;case 3:case 4:var a=eo;eo=jc(e.stateNode.containerInfo),Da(e,t,s),eo=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Ol,Ol=16777216,Da(e,t,s),Ol=a):Da(e,t,s));break;default:Da(e,t,s)}}function wm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function zl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var s=0;s<t.length;s++){var a=t[s];Xn=a,km(a,e)}wm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Sm(e),e=e.sibling}function Sm(e){switch(e.tag){case 0:case 11:case 15:zl(e),e.flags&2048&&di(9,e,e.return);break;case 3:zl(e);break;case 12:zl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,hc(e)):zl(e);break;default:zl(e)}}function hc(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var s=0;s<t.length;s++){var a=t[s];Xn=a,km(a,e)}wm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:di(8,t,t.return),hc(t);break;case 22:s=t.stateNode,s._visibility&2&&(s._visibility&=-3,hc(t));break;default:hc(t)}e=e.sibling}}function km(e,t){for(;Xn!==null;){var s=Xn;switch(s.tag){case 0:case 11:case 15:di(8,s,t);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var a=s.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:xl(s.memoizedState.cache)}if(a=s.child,a!==null)a.return=s,Xn=a;else e:for(s=e;Xn!==null;){a=Xn;var d=a.sibling,f=a.return;if(_m(a),a===s){Xn=null;break e}if(d!==null){d.return=f,Xn=d;break e}Xn=f}}}var Hy={getCacheForType:function(e){var t=qn(Dn),s=t.data.get(e);return s===void 0&&(s=e(),t.data.set(e,s)),s},cacheSignal:function(){return qn(Dn).controller.signal}},Yy=typeof WeakMap=="function"?WeakMap:Map,It=0,nn=null,Mt=null,At=0,Xt=0,Es=null,fi=!1,Na=!1,Od=!1,Po=0,vn=0,hi=0,Wi=0,zd=0,Rs=0,La=0,Bl=null,ys=null,Bd=!1,_c=0,Cm=0,mc=1/0,pc=null,_i=null,Pn=0,mi=null,Oa=null,Io=0,$d=0,Pd=null,jm=null,$l=0,Id=null;function As(){return(It&2)!==0&&At!==0?At&-At:N.T!==null?Fd():Kn()}function Mm(){if(Rs===0)if((At&536870912)===0||Lt){var e=bt;bt<<=1,(bt&3932160)===0&&(bt=262144),Rs=e}else Rs=536870912;return e=Ms.current,e!==null&&(e.flags|=32),Rs}function xs(e,t,s){(e===nn&&(Xt===2||Xt===9)||e.cancelPendingCommit!==null)&&(za(e,0),pi(e,At,Rs,!1)),He(e,s),((It&2)===0||e!==nn)&&(e===nn&&((It&2)===0&&(Wi|=s),vn===4&&pi(e,At,Rs,!1)),vo(e))}function Tm(e,t,s){if((It&6)!==0)throw Error(l(327));var a=!s&&(t&127)===0&&(t&e.expiredLanes)===0||pt(e,t),d=a?Fy(e,t):Hd(e,t,!0),f=a;do{if(d===0){Na&&!a&&pi(e,t,0,!1);break}else{if(s=e.current.alternate,f&&!Xy(s)){d=Hd(e,t,!1),f=!1;continue}if(d===2){if(f=t,e.errorRecoveryDisabledLanes&f)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){t=x;e:{var w=e;d=Bl;var R=w.current.memoizedState.isDehydrated;if(R&&(za(w,x).flags|=256),x=Hd(w,x,!1),x!==2){if(Od&&!R){w.errorRecoveryDisabledLanes|=f,Wi|=f,d=4;break e}f=ys,ys=d,f!==null&&(ys===null?ys=f:ys.push.apply(ys,f))}d=x}if(f=!1,d!==2)continue}}if(d===1){za(e,0),pi(e,t,0,!0);break}e:{switch(a=e,f=d,f){case 0:case 1:throw Error(l(345));case 4:if((t&4194048)!==t)break;case 6:pi(a,t,Rs,!fi);break e;case 2:ys=null;break;case 3:case 5:break;default:throw Error(l(329))}if((t&62914560)===t&&(d=_c+300-Te(),10<d)){if(pi(a,t,Rs,!fi),Ee(a,0,!0)!==0)break e;Io=t,a.timeoutHandle=ip(Em.bind(null,a,s,ys,pc,Bd,t,Rs,Wi,La,fi,f,"Throttled",-0,0),d);break e}Em(a,s,ys,pc,Bd,t,Rs,Wi,La,fi,f,null,-0,0)}}break}while(!0);vo(e)}function Em(e,t,s,a,d,f,x,w,R,H,ee,ae,G,q){if(e.timeoutHandle=-1,ae=t.subtreeFlags,ae&8192||(ae&16785408)===16785408){ae={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qs},vm(t,f,ae);var Be=(f&62914560)===f?_c-Te():(f&4194048)===f?Cm-Te():0;if(Be=T1(ae,Be),Be!==null){Io=f,e.cancelPendingCommit=Be(Bm.bind(null,e,t,f,s,a,d,x,w,R,ee,ae,null,G,q)),pi(e,f,x,!H);return}}Bm(e,t,f,s,a,d,x,w,R)}function Xy(e){for(var t=e;;){var s=t.tag;if((s===0||s===11||s===15)&&t.flags&16384&&(s=t.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var a=0;a<s.length;a++){var d=s[a],f=d.getSnapshot;d=d.value;try{if(!we(f(),d))return!1}catch{return!1}}if(s=t.child,t.subtreeFlags&16384&&s!==null)s.return=t,t=s;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pi(e,t,s,a){t&=~zd,t&=~Wi,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var d=t;0<d;){var f=31-st(d),x=1<<f;a[f]=-1,d&=~x}s!==0&&yn(e,s,t)}function gc(){return(It&6)===0?(Pl(0),!1):!0}function Ud(){if(Mt!==null){if(Xt===0)var e=Mt.return;else e=Mt,Eo=$i=null,sd(e),ja=null,vl=0,e=Mt;for(;e!==null;)am(e.alternate,e),e=e.return;Mt=null}}function za(e,t){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,u1(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Io=0,Ud(),nn=e,Mt=s=Mo(e.current,null),At=t,Xt=0,Es=null,fi=!1,Na=pt(e,t),Od=!1,La=Rs=zd=Wi=hi=vn=0,ys=Bl=null,Bd=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var d=31-st(a),f=1<<d;t|=e[d],a&=~f}return Po=t,$r(),s}function Rm(e,t){mt=null,N.H=El,t===Ca||t===Fr?(t=Fh(),Xt=3):t===Gu?(t=Fh(),Xt=4):Xt=t===xd?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Es=t,Mt===null&&(vn=1,ac(e,Ps(t,e.current)))}function Am(){var e=Ms.current;return e===null?!0:(At&4194048)===At?Ys===null:(At&62914560)===At||(At&536870912)!==0?e===Ys:!1}function Dm(){var e=N.H;return N.H=El,e===null?El:e}function Nm(){var e=N.A;return N.A=Hy,e}function yc(){vn=4,fi||(At&4194048)!==At&&Ms.current!==null||(Na=!0),(hi&134217727)===0&&(Wi&134217727)===0||nn===null||pi(nn,At,Rs,!1)}function Hd(e,t,s){var a=It;It|=2;var d=Dm(),f=Nm();(nn!==e||At!==t)&&(pc=null,za(e,t)),t=!1;var x=vn;e:do try{if(Xt!==0&&Mt!==null){var w=Mt,R=Es;switch(Xt){case 8:Ud(),x=6;break e;case 3:case 2:case 9:case 6:Ms.current===null&&(t=!0);var H=Xt;if(Xt=0,Es=null,Ba(e,w,R,H),s&&Na){x=0;break e}break;default:H=Xt,Xt=0,Es=null,Ba(e,w,R,H)}}Gy(),x=vn;break}catch(ee){Rm(e,ee)}while(!0);return t&&e.shellSuspendCounter++,Eo=$i=null,It=a,N.H=d,N.A=f,Mt===null&&(nn=null,At=0,$r()),x}function Gy(){for(;Mt!==null;)Lm(Mt)}function Fy(e,t){var s=It;It|=2;var a=Dm(),d=Nm();nn!==e||At!==t?(pc=null,mc=Te()+500,za(e,t)):Na=pt(e,t);e:do try{if(Xt!==0&&Mt!==null){t=Mt;var f=Es;t:switch(Xt){case 1:Xt=0,Es=null,Ba(e,t,f,1);break;case 2:case 9:if(Xh(f)){Xt=0,Es=null,Om(t);break}t=function(){Xt!==2&&Xt!==9||nn!==e||(Xt=7),vo(e)},f.then(t,t);break e;case 3:Xt=7;break e;case 4:Xt=5;break e;case 7:Xh(f)?(Xt=0,Es=null,Om(t)):(Xt=0,Es=null,Ba(e,t,f,7));break;case 5:var x=null;switch(Mt.tag){case 26:x=Mt.memoizedState;case 5:case 27:var w=Mt;if(x?bp(x):w.stateNode.complete){Xt=0,Es=null;var R=w.sibling;if(R!==null)Mt=R;else{var H=w.return;H!==null?(Mt=H,xc(H)):Mt=null}break t}}Xt=0,Es=null,Ba(e,t,f,5);break;case 6:Xt=0,Es=null,Ba(e,t,f,6);break;case 8:Ud(),vn=6;break e;default:throw Error(l(462))}}Wy();break}catch(ee){Rm(e,ee)}while(!0);return Eo=$i=null,N.H=a,N.A=d,It=s,Mt!==null?0:(nn=null,At=0,$r(),vn)}function Wy(){for(;Mt!==null&&!at();)Lm(Mt)}function Lm(e){var t=om(e.alternate,e,Po);e.memoizedProps=e.pendingProps,t===null?xc(e):Mt=t}function Om(e){var t=e,s=t.alternate;switch(t.tag){case 15:case 0:t=Z_(s,t,t.pendingProps,t.type,void 0,At);break;case 11:t=Z_(s,t,t.pendingProps,t.type.render,t.ref,At);break;case 5:sd(t);default:am(s,t),t=Mt=Nh(t,Po),t=om(s,t,Po)}e.memoizedProps=e.pendingProps,t===null?xc(e):Mt=t}function Ba(e,t,s,a){Eo=$i=null,sd(t),ja=null,vl=0;var d=t.return;try{if(Oy(e,d,t,s,At)){vn=1,ac(e,Ps(s,e.current)),Mt=null;return}}catch(f){if(d!==null)throw Mt=d,f;vn=1,ac(e,Ps(s,e.current)),Mt=null;return}t.flags&32768?(Lt||a===1?e=!0:Na||(At&536870912)!==0?e=!1:(fi=e=!0,(a===2||a===9||a===3||a===6)&&(a=Ms.current,a!==null&&a.tag===13&&(a.flags|=16384))),zm(t,e)):xc(t)}function xc(e){var t=e;do{if((t.flags&32768)!==0){zm(t,fi);return}e=t.return;var s=$y(t.alternate,t,Po);if(s!==null){Mt=s;return}if(t=t.sibling,t!==null){Mt=t;return}Mt=t=e}while(t!==null);vn===0&&(vn=5)}function zm(e,t){do{var s=Py(e.alternate,e);if(s!==null){s.flags&=32767,Mt=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!t&&(e=e.sibling,e!==null)){Mt=e;return}Mt=e=s}while(e!==null);vn=6,Mt=null}function Bm(e,t,s,a,d,f,x,w,R){e.cancelPendingCommit=null;do bc();while(Pn!==0);if((It&6)!==0)throw Error(l(327));if(t!==null){if(t===e.current)throw Error(l(177));if(f=t.lanes|t.childLanes,f|=Ru,Nt(e,s,f,x,w,R),e===nn&&(Mt=nn=null,At=0),Oa=t,mi=e,Io=s,$d=f,Pd=d,jm=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ky(ze,function(){return Hm(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=N.T,N.T=null,d=ce.p,ce.p=2,x=It,It|=4;try{Iy(e,t,s)}finally{It=x,ce.p=d,N.T=a}}Pn=1,$m(),Pm(),Im()}}function $m(){if(Pn===1){Pn=0;var e=mi,t=Oa,s=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||s){s=N.T,N.T=null;var a=ce.p;ce.p=2;var d=It;It|=4;try{ym(t,e);var f=ef,x=fn(e.containerInfo),w=f.focusedElem,R=f.selectionRange;if(x!==w&&w&&w.ownerDocument&&Rt(w.ownerDocument.documentElement,w)){if(R!==null&&tt(w)){var H=R.start,ee=R.end;if(ee===void 0&&(ee=H),"selectionStart"in w)w.selectionStart=H,w.selectionEnd=Math.min(ee,w.value.length);else{var ae=w.ownerDocument||document,G=ae&&ae.defaultView||window;if(G.getSelection){var q=G.getSelection(),Be=w.textContent.length,it=Math.min(R.start,Be),Zt=R.end===void 0?it:Math.min(R.end,Be);!q.extend&&it>Zt&&(x=Zt,Zt=it,it=x);var P=mn(w,it),L=mn(w,Zt);if(P&&L&&(q.rangeCount!==1||q.anchorNode!==P.node||q.anchorOffset!==P.offset||q.focusNode!==L.node||q.focusOffset!==L.offset)){var U=ae.createRange();U.setStart(P.node,P.offset),q.removeAllRanges(),it>Zt?(q.addRange(U),q.extend(L.node,L.offset)):(U.setEnd(L.node,L.offset),q.addRange(U))}}}}for(ae=[],q=w;q=q.parentNode;)q.nodeType===1&&ae.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<ae.length;w++){var se=ae[w];se.element.scrollLeft=se.left,se.element.scrollTop=se.top}}Dc=!!Jd,ef=Jd=null}finally{It=d,ce.p=a,N.T=s}}e.current=t,Pn=2}}function Pm(){if(Pn===2){Pn=0;var e=mi,t=Oa,s=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||s){s=N.T,N.T=null;var a=ce.p;ce.p=2;var d=It;It|=4;try{hm(e,t.alternate,t)}finally{It=d,ce.p=a,N.T=s}}Pn=3}}function Im(){if(Pn===4||Pn===3){Pn=0,qe();var e=mi,t=Oa,s=Io,a=jm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Pn=5:(Pn=0,Oa=mi=null,Um(e,e.pendingLanes));var d=e.pendingLanes;if(d===0&&(_i=null),vs(s),t=t.stateNode,ke&&typeof ke.onCommitFiberRoot=="function")try{ke.onCommitFiberRoot(Le,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=N.T,d=ce.p,ce.p=2,N.T=null;try{for(var f=e.onRecoverableError,x=0;x<a.length;x++){var w=a[x];f(w.value,{componentStack:w.stack})}}finally{N.T=t,ce.p=d}}(Io&3)!==0&&bc(),vo(e),d=e.pendingLanes,(s&261930)!==0&&(d&42)!==0?e===Id?$l++:($l=0,Id=e):$l=0,Pl(0)}}function Um(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,xl(t)))}function bc(){return $m(),Pm(),Im(),Hm()}function Hm(){if(Pn!==5)return!1;var e=mi,t=$d;$d=0;var s=vs(Io),a=N.T,d=ce.p;try{ce.p=32>s?32:s,N.T=null,s=Pd,Pd=null;var f=mi,x=Io;if(Pn=0,Oa=mi=null,Io=0,(It&6)!==0)throw Error(l(331));var w=It;if(It|=4,Sm(f.current),bm(f,f.current,x,s),It=w,Pl(0,!1),ke&&typeof ke.onPostCommitFiberRoot=="function")try{ke.onPostCommitFiberRoot(Le,f)}catch{}return!0}finally{ce.p=d,N.T=a,Um(e,t)}}function Ym(e,t,s){t=Ps(s,t),t=yd(e.stateNode,t,2),e=ri(e,t,2),e!==null&&(He(e,2),vo(e))}function Gt(e,t,s){if(e.tag===3)Ym(e,e,s);else for(;t!==null;){if(t.tag===3){Ym(t,e,s);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(_i===null||!_i.has(a))){e=Ps(s,e),s=X_(2),a=ri(t,s,2),a!==null&&(G_(s,a,t,e),He(a,2),vo(a));break}}t=t.return}}function Yd(e,t,s){var a=e.pingCache;if(a===null){a=e.pingCache=new Yy;var d=new Set;a.set(t,d)}else d=a.get(t),d===void 0&&(d=new Set,a.set(t,d));d.has(s)||(Od=!0,d.add(s),e=qy.bind(null,e,t,s),t.then(e,e))}function qy(e,t,s){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,nn===e&&(At&s)===s&&(vn===4||vn===3&&(At&62914560)===At&&300>Te()-_c?(It&2)===0&&za(e,0):zd|=s,La===At&&(La=0)),vo(e)}function Xm(e,t){t===0&&(t=dt()),e=Oi(e,t),e!==null&&(He(e,t),vo(e))}function Qy(e){var t=e.memoizedState,s=0;t!==null&&(s=t.retryLane),Xm(e,s)}function Vy(e,t){var s=0;switch(e.tag){case 31:case 13:var a=e.stateNode,d=e.memoizedState;d!==null&&(s=d.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(l(314))}a!==null&&a.delete(t),Xm(e,s)}function Ky(e,t){return Ke(e,t)}var vc=null,$a=null,Xd=!1,wc=!1,Gd=!1,gi=0;function vo(e){e!==$a&&e.next===null&&($a===null?vc=$a=e:$a=$a.next=e),wc=!0,Xd||(Xd=!0,Jy())}function Pl(e,t){if(!Gd&&wc){Gd=!0;do for(var s=!1,a=vc;a!==null;){if(e!==0){var d=a.pendingLanes;if(d===0)var f=0;else{var x=a.suspendedLanes,w=a.pingedLanes;f=(1<<31-st(42|e)+1)-1,f&=d&~(x&~w),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(s=!0,qm(a,f))}else f=At,f=Ee(a,a===nn?f:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(f&3)===0||pt(a,f)||(s=!0,qm(a,f));a=a.next}while(s);Gd=!1}}function Zy(){Gm()}function Gm(){wc=Xd=!1;var e=0;gi!==0&&c1()&&(e=gi);for(var t=Te(),s=null,a=vc;a!==null;){var d=a.next,f=Fm(a,t);f===0?(a.next=null,s===null?vc=d:s.next=d,d===null&&($a=s)):(s=a,(e!==0||(f&3)!==0)&&(wc=!0)),a=d}Pn!==0&&Pn!==5||Pl(e),gi!==0&&(gi=0)}function Fm(e,t){for(var s=e.suspendedLanes,a=e.pingedLanes,d=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var x=31-st(f),w=1<<x,R=d[x];R===-1?((w&s)===0||(w&a)!==0)&&(d[x]=gt(w,t)):R<=t&&(e.expiredLanes|=w),f&=~w}if(t=nn,s=At,s=Ee(e,e===t?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,s===0||e===t&&(Xt===2||Xt===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&We(a),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||pt(e,s)){if(t=s&-s,t===e.callbackPriority)return t;switch(a!==null&&We(a),vs(s)){case 2:case 8:s=Ht;break;case 32:s=ze;break;case 268435456:s=X;break;default:s=ze}return a=Wm.bind(null,e),s=Ke(s,a),e.callbackPriority=t,e.callbackNode=s,t}return a!==null&&a!==null&&We(a),e.callbackPriority=2,e.callbackNode=null,2}function Wm(e,t){if(Pn!==0&&Pn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(bc()&&e.callbackNode!==s)return null;var a=At;return a=Ee(e,e===nn?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Tm(e,a,t),Fm(e,Te()),e.callbackNode!=null&&e.callbackNode===s?Wm.bind(null,e):null)}function qm(e,t){if(bc())return null;Tm(e,t,!0)}function Jy(){d1(function(){(It&6)!==0?Ke(vt,Zy):Gm()})}function Fd(){if(gi===0){var e=Sa;e===0&&(e=Re,Re<<=1,(Re&261888)===0&&(Re=256)),gi=e}return gi}function Qm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ri(""+e)}function Vm(e,t){var s=t.ownerDocument.createElement("input");return s.name=t.name,s.value=t.value,e.id&&s.setAttribute("form",e.id),t.parentNode.insertBefore(s,t),e=new FormData(e),s.parentNode.removeChild(s),e}function e1(e,t,s,a,d){if(t==="submit"&&s&&s.stateNode===d){var f=Qm((d[Sn]||null).action),x=a.submitter;x&&(t=(t=x[Sn]||null)?Qm(t.formAction):x.getAttribute("formAction"),t!==null&&(f=t,x=null));var w=new ra("action","action",null,a,d);e.push({event:w,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(gi!==0){var R=x?Vm(d,x):new FormData(d);fd(s,{pending:!0,data:R,method:d.method,action:f},null,R)}}else typeof f=="function"&&(w.preventDefault(),R=x?Vm(d,x):new FormData(d),fd(s,{pending:!0,data:R,method:d.method,action:f},f,R))},currentTarget:d}]})}}for(var Wd=0;Wd<Eu.length;Wd++){var qd=Eu[Wd],t1=qd.toLowerCase(),n1=qd[0].toUpperCase()+qd.slice(1);Js(t1,"on"+n1)}Js(go,"onAnimationEnd"),Js(Or,"onAnimationIteration"),Js(zr,"onAnimationStart"),Js("dblclick","onDoubleClick"),Js("focusin","onFocus"),Js("focusout","onBlur"),Js(Mu,"onTransitionRun"),Js(Tu,"onTransitionStart"),Js(by,"onTransitionCancel"),Js(Rh,"onTransitionEnd"),Yn("onMouseEnter",["mouseout","mouseover"]),Yn("onMouseLeave",["mouseout","mouseover"]),Yn("onPointerEnter",["pointerout","pointerover"]),Yn("onPointerLeave",["pointerout","pointerover"]),Ns("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ns("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ns("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ns("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ns("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ns("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),s1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Il));function Km(e,t){t=(t&4)!==0;for(var s=0;s<e.length;s++){var a=e[s],d=a.event;a=a.listeners;e:{var f=void 0;if(t)for(var x=a.length-1;0<=x;x--){var w=a[x],R=w.instance,H=w.currentTarget;if(w=w.listener,R!==f&&d.isPropagationStopped())break e;f=w,d.currentTarget=H;try{f(d)}catch(ee){Br(ee)}d.currentTarget=null,f=R}else for(x=0;x<a.length;x++){if(w=a[x],R=w.instance,H=w.currentTarget,w=w.listener,R!==f&&d.isPropagationStopped())break e;f=w,d.currentTarget=H;try{f(d)}catch(ee){Br(ee)}d.currentTarget=null,f=R}}}}function Tt(e,t){var s=t[Zn];s===void 0&&(s=t[Zn]=new Set);var a=e+"__bubble";s.has(a)||(Zm(t,e,2,!1),s.add(a))}function Qd(e,t,s){var a=0;t&&(a|=4),Zm(s,e,a,t)}var Sc="_reactListening"+Math.random().toString(36).slice(2);function Vd(e){if(!e[Sc]){e[Sc]=!0,nl.forEach(function(s){s!=="selectionchange"&&(s1.has(s)||Qd(s,!1,e),Qd(s,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Sc]||(t[Sc]=!0,Qd("selectionchange",!1,t))}}function Zm(e,t,s,a){switch(Mp(t)){case 2:var d=A1;break;case 8:d=D1;break;default:d=ff}s=d.bind(null,t,s,e),d=void 0,!Ks||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(d=!0),a?d!==void 0?e.addEventListener(t,s,{capture:!0,passive:d}):e.addEventListener(t,s,!0):d!==void 0?e.addEventListener(t,s,{passive:d}):e.addEventListener(t,s,!1)}function Kd(e,t,s,a,d){var f=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var x=a.tag;if(x===3||x===4){var w=a.stateNode.containerInfo;if(w===d)break;if(x===4)for(x=a.return;x!==null;){var R=x.tag;if((R===3||R===4)&&x.stateNode.containerInfo===d)return;x=x.return}for(;w!==null;){if(x=Xo(w),x===null)return;if(R=x.tag,R===5||R===6||R===26||R===27){a=f=x;continue e}w=w.parentNode}}a=a.return}fo(function(){var H=f,ee=Vs(s),ae=[];e:{var G=Ah.get(e);if(G!==void 0){var q=ra,Be=e;switch(e){case"keypress":if(ho(s)===0)break e;case"keydown":case"keyup":q=Mr;break;case"focusin":Be="focus",q=fa;break;case"focusout":Be="blur",q=fa;break;case"beforeblur":case"afterblur":q=fa;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=Zo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=Sr;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=Er;break;case go:case Or:case zr:q=Su;break;case Rh:q=zs;break;case"scroll":case"scrollend":q=Zs;break;case"wheel":q=dl;break;case"copy":case"cut":case"paste":q=Cr;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=Li;break;case"toggle":case"beforetoggle":q=ma}var it=(t&4)!==0,Zt=!it&&(e==="scroll"||e==="scrollend"),P=it?G!==null?G+"Capture":null:G;it=[];for(var L=H,U;L!==null;){var se=L;if(U=se.stateNode,se=se.tag,se!==5&&se!==26&&se!==27||U===null||P===null||(se=zt(L,P),se!=null&&it.push(Ul(L,se,U))),Zt)break;L=L.return}0<it.length&&(G=new q(G,Be,null,s,ee),ae.push({event:G,listeners:it}))}}if((t&7)===0){e:{if(G=e==="mouseover"||e==="pointerover",q=e==="mouseout"||e==="pointerout",G&&s!==ol&&(Be=s.relatedTarget||s.fromElement)&&(Xo(Be)||Be[Me]))break e;if((q||G)&&(G=ee.window===ee?ee:(G=ee.ownerDocument)?G.defaultView||G.parentWindow:window,q?(Be=s.relatedTarget||s.toElement,q=H,Be=Be?Xo(Be):null,Be!==null&&(Zt=u(Be),it=Be.tag,Be!==Zt||it!==5&&it!==27&&it!==6)&&(Be=null)):(q=null,Be=H),q!==Be)){if(it=Zo,se="onMouseLeave",P="onMouseEnter",L="mouse",(e==="pointerout"||e==="pointerover")&&(it=Li,se="onPointerLeave",P="onPointerEnter",L="pointer"),Zt=q==null?G:Ti(q),U=Be==null?G:Ti(Be),G=new it(se,L+"leave",q,s,ee),G.target=Zt,G.relatedTarget=U,se=null,Xo(ee)===H&&(it=new it(P,L+"enter",Be,s,ee),it.target=U,it.relatedTarget=Zt,se=it),Zt=se,q&&Be)t:{for(it=o1,P=q,L=Be,U=0,se=P;se;se=it(se))U++;se=0;for(var Ve=L;Ve;Ve=it(Ve))se++;for(;0<U-se;)P=it(P),U--;for(;0<se-U;)L=it(L),se--;for(;U--;){if(P===L||L!==null&&P===L.alternate){it=P;break t}P=it(P),L=it(L)}it=null}else it=null;q!==null&&Jm(ae,G,q,it,!1),Be!==null&&Zt!==null&&Jm(ae,Zt,Be,it,!0)}}e:{if(G=H?Ti(H):window,q=G.nodeName&&G.nodeName.toLowerCase(),q==="select"||q==="input"&&G.type==="file")var Bt=D;else if(ml(G))if(E)Bt=yt;else{Bt=Ye;var Ie=$e}else q=G.nodeName,!q||q.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?H&&hs(H.elementType)&&(Bt=D):Bt=ot;if(Bt&&(Bt=Bt(e,H))){pl(ae,Bt,s,ee);break e}Ie&&Ie(e,G,H),e==="focusout"&&H&&G.type==="number"&&H.memoizedProps.value!=null&&co(G,"number",G.value)}switch(Ie=H?Ti(H):window,e){case"focusin":(ml(Ie)||Ie.contentEditable==="true")&&(an=Ie,Qt=H,kn=null);break;case"focusout":kn=Qt=an=null;break;case"mousedown":Fn=!0;break;case"contextmenu":case"mouseup":case"dragend":Fn=!1,xn(ae,s,ee);break;case"selectionchange":if(ft)break;case"keydown":case"keyup":xn(ae,s,ee)}var xt;if(hl)e:{switch(e){case"compositionstart":var Dt="onCompositionStart";break e;case"compositionend":Dt="onCompositionEnd";break e;case"compositionupdate":Dt="onCompositionUpdate";break e}Dt=void 0}else jo?Co(e,s)&&(Dt="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(Dt="onCompositionStart");Dt&&(pa&&s.locale!=="ko"&&(jo||Dt!=="onCompositionStart"?Dt==="onCompositionEnd"&&jo&&(xt=al()):(rs=ee,la="value"in rs?rs.value:rs.textContent,jo=!0)),Ie=kc(H,Dt),0<Ie.length&&(Dt=new Ze(Dt,e,null,s,ee),ae.push({event:Dt,listeners:Ie}),xt?Dt.data=xt:(xt=Ar(s),xt!==null&&(Dt.data=xt)))),(xt=_l?Dr(e,s):Nr(e,s))&&(Dt=kc(H,"onBeforeInput"),0<Dt.length&&(Ie=new Ze("onBeforeInput","beforeinput",null,s,ee),ae.push({event:Ie,listeners:Dt}),Ie.data=xt)),e1(ae,e,H,s,ee)}Km(ae,t)})}function Ul(e,t,s){return{instance:e,listener:t,currentTarget:s}}function kc(e,t){for(var s=t+"Capture",a=[];e!==null;){var d=e,f=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||f===null||(d=zt(e,s),d!=null&&a.unshift(Ul(e,d,f)),d=zt(e,t),d!=null&&a.push(Ul(e,d,f))),e.tag===3)return a;e=e.return}return[]}function o1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Jm(e,t,s,a,d){for(var f=t._reactName,x=[];s!==null&&s!==a;){var w=s,R=w.alternate,H=w.stateNode;if(w=w.tag,R!==null&&R===a)break;w!==5&&w!==26&&w!==27||H===null||(R=H,d?(H=zt(s,f),H!=null&&x.unshift(Ul(s,H,R))):d||(H=zt(s,f),H!=null&&x.push(Ul(s,H,R)))),s=s.return}x.length!==0&&e.push({event:t,listeners:x})}var i1=/\r\n?/g,a1=/\u0000|\uFFFD/g;function ep(e){return(typeof e=="string"?e:""+e).replace(i1,`
`).replace(a1,"")}function tp(e,t){return t=ep(t),ep(e)===t}function Kt(e,t,s,a,d,f){switch(s){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Qo(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Qo(e,""+a);break;case"className":Jn(e,"class",a);break;case"tabIndex":Jn(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Jn(e,s,a);break;case"style":br(e,a,f);break;case"data":if(t!=="object"){Jn(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||s!=="href")){e.removeAttribute(s);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(s);break}a=Ri(""+a),e.setAttribute(s,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(s==="formAction"?(t!=="input"&&Kt(e,t,"name",d.name,d,null),Kt(e,t,"formEncType",d.formEncType,d,null),Kt(e,t,"formMethod",d.formMethod,d,null),Kt(e,t,"formTarget",d.formTarget,d,null)):(Kt(e,t,"encType",d.encType,d,null),Kt(e,t,"method",d.method,d,null),Kt(e,t,"target",d.target,d,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(s);break}a=Ri(""+a),e.setAttribute(s,a);break;case"onClick":a!=null&&(e.onclick=Qs);break;case"onScroll":a!=null&&Tt("scroll",e);break;case"onScrollEnd":a!=null&&Tt("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(l(61));if(s=a.__html,s!=null){if(d.children!=null)throw Error(l(60));e.innerHTML=s}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}s=Ri(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(s,""+a):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":a===!0?e.setAttribute(s,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(s,a):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(s,a):e.removeAttribute(s);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(s):e.setAttribute(s,a);break;case"popover":Tt("beforetoggle",e),Tt("toggle",e),lo(e,"popover",a);break;case"xlinkActuate":ws(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":ws(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":ws(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":ws(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":ws(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":ws(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":ws(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":ws(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":ws(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":lo(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=vr.get(s)||s,lo(e,s,a))}}function Zd(e,t,s,a,d,f){switch(s){case"style":br(e,a,f);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(l(61));if(s=a.__html,s!=null){if(d.children!=null)throw Error(l(60));e.innerHTML=s}}break;case"children":typeof a=="string"?Qo(e,a):(typeof a=="number"||typeof a=="bigint")&&Qo(e,""+a);break;case"onScroll":a!=null&&Tt("scroll",e);break;case"onScrollEnd":a!=null&&Tt("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Qs);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Fo.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(d=s.endsWith("Capture"),t=s.slice(2,d?s.length-7:void 0),f=e[Sn]||null,f=f!=null?f[s]:null,typeof f=="function"&&e.removeEventListener(t,f,d),typeof a=="function")){typeof f!="function"&&f!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(t,a,d);break e}s in e?e[s]=a:a===!0?e.setAttribute(s,""):lo(e,s,a)}}}function Vn(e,t,s){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Tt("error",e),Tt("load",e);var a=!1,d=!1,f;for(f in s)if(s.hasOwnProperty(f)){var x=s[f];if(x!=null)switch(f){case"src":a=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Kt(e,t,f,x,s,null)}}d&&Kt(e,t,"srcSet",s.srcSet,s,null),a&&Kt(e,t,"src",s.src,s,null);return;case"input":Tt("invalid",e);var w=f=x=d=null,R=null,H=null;for(a in s)if(s.hasOwnProperty(a)){var ee=s[a];if(ee!=null)switch(a){case"name":d=ee;break;case"type":x=ee;break;case"checked":R=ee;break;case"defaultChecked":H=ee;break;case"value":f=ee;break;case"defaultValue":w=ee;break;case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(l(137,t));break;default:Kt(e,t,a,ee,s,null)}}_n(e,f,w,R,H,x,d,!1);return;case"select":Tt("invalid",e),a=x=f=null;for(d in s)if(s.hasOwnProperty(d)&&(w=s[d],w!=null))switch(d){case"value":f=w;break;case"defaultValue":x=w;break;case"multiple":a=w;default:Kt(e,t,d,w,s,null)}t=f,s=x,e.multiple=!!a,t!=null?Gn(e,!!a,t,!1):s!=null&&Gn(e,!!a,s,!0);return;case"textarea":Tt("invalid",e),f=d=a=null;for(x in s)if(s.hasOwnProperty(x)&&(w=s[x],w!=null))switch(x){case"value":a=w;break;case"defaultValue":d=w;break;case"children":f=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(l(91));break;default:Kt(e,t,x,w,s,null)}xr(e,a,d,f);return;case"option":for(R in s)if(s.hasOwnProperty(R)&&(a=s[R],a!=null))switch(R){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Kt(e,t,R,a,s,null)}return;case"dialog":Tt("beforetoggle",e),Tt("toggle",e),Tt("cancel",e),Tt("close",e);break;case"iframe":case"object":Tt("load",e);break;case"video":case"audio":for(a=0;a<Il.length;a++)Tt(Il[a],e);break;case"image":Tt("error",e),Tt("load",e);break;case"details":Tt("toggle",e);break;case"embed":case"source":case"link":Tt("error",e),Tt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(H in s)if(s.hasOwnProperty(H)&&(a=s[H],a!=null))switch(H){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Kt(e,t,H,a,s,null)}return;default:if(hs(t)){for(ee in s)s.hasOwnProperty(ee)&&(a=s[ee],a!==void 0&&Zd(e,t,ee,a,s,void 0));return}}for(w in s)s.hasOwnProperty(w)&&(a=s[w],a!=null&&Kt(e,t,w,a,s,null))}function l1(e,t,s,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,f=null,x=null,w=null,R=null,H=null,ee=null;for(q in s){var ae=s[q];if(s.hasOwnProperty(q)&&ae!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":R=ae;default:a.hasOwnProperty(q)||Kt(e,t,q,null,a,ae)}}for(var G in a){var q=a[G];if(ae=s[G],a.hasOwnProperty(G)&&(q!=null||ae!=null))switch(G){case"type":f=q;break;case"name":d=q;break;case"checked":H=q;break;case"defaultChecked":ee=q;break;case"value":x=q;break;case"defaultValue":w=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(l(137,t));break;default:q!==ae&&Kt(e,t,G,q,a,ae)}}ro(e,x,w,R,H,ee,f,d);return;case"select":q=x=w=G=null;for(f in s)if(R=s[f],s.hasOwnProperty(f)&&R!=null)switch(f){case"value":break;case"multiple":q=R;default:a.hasOwnProperty(f)||Kt(e,t,f,null,a,R)}for(d in a)if(f=a[d],R=s[d],a.hasOwnProperty(d)&&(f!=null||R!=null))switch(d){case"value":G=f;break;case"defaultValue":w=f;break;case"multiple":x=f;default:f!==R&&Kt(e,t,d,f,a,R)}t=w,s=x,a=q,G!=null?Gn(e,!!s,G,!1):!!a!=!!s&&(t!=null?Gn(e,!!s,t,!0):Gn(e,!!s,s?[]:"",!1));return;case"textarea":q=G=null;for(w in s)if(d=s[w],s.hasOwnProperty(w)&&d!=null&&!a.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Kt(e,t,w,null,a,d)}for(x in a)if(d=a[x],f=s[x],a.hasOwnProperty(x)&&(d!=null||f!=null))switch(x){case"value":G=d;break;case"defaultValue":q=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(l(91));break;default:d!==f&&Kt(e,t,x,d,a,f)}$n(e,G,q);return;case"option":for(var Be in s)if(G=s[Be],s.hasOwnProperty(Be)&&G!=null&&!a.hasOwnProperty(Be))switch(Be){case"selected":e.selected=!1;break;default:Kt(e,t,Be,null,a,G)}for(R in a)if(G=a[R],q=s[R],a.hasOwnProperty(R)&&G!==q&&(G!=null||q!=null))switch(R){case"selected":e.selected=G&&typeof G!="function"&&typeof G!="symbol";break;default:Kt(e,t,R,G,a,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var it in s)G=s[it],s.hasOwnProperty(it)&&G!=null&&!a.hasOwnProperty(it)&&Kt(e,t,it,null,a,G);for(H in a)if(G=a[H],q=s[H],a.hasOwnProperty(H)&&G!==q&&(G!=null||q!=null))switch(H){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(l(137,t));break;default:Kt(e,t,H,G,a,q)}return;default:if(hs(t)){for(var Zt in s)G=s[Zt],s.hasOwnProperty(Zt)&&G!==void 0&&!a.hasOwnProperty(Zt)&&Zd(e,t,Zt,void 0,a,G);for(ee in a)G=a[ee],q=s[ee],!a.hasOwnProperty(ee)||G===q||G===void 0&&q===void 0||Zd(e,t,ee,G,a,q);return}}for(var P in s)G=s[P],s.hasOwnProperty(P)&&G!=null&&!a.hasOwnProperty(P)&&Kt(e,t,P,null,a,G);for(ae in a)G=a[ae],q=s[ae],!a.hasOwnProperty(ae)||G===q||G==null&&q==null||Kt(e,t,ae,G,a,q)}function np(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function r1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,s=performance.getEntriesByType("resource"),a=0;a<s.length;a++){var d=s[a],f=d.transferSize,x=d.initiatorType,w=d.duration;if(f&&w&&np(x)){for(x=0,w=d.responseEnd,a+=1;a<s.length;a++){var R=s[a],H=R.startTime;if(H>w)break;var ee=R.transferSize,ae=R.initiatorType;ee&&np(ae)&&(R=R.responseEnd,x+=ee*(R<w?1:(w-H)/(R-H)))}if(--a,t+=8*(f+x)/(d.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Jd=null,ef=null;function Cc(e){return e.nodeType===9?e:e.ownerDocument}function sp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function op(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function tf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var nf=null;function c1(){var e=window.event;return e&&e.type==="popstate"?e===nf?!1:(nf=e,!0):(nf=null,!1)}var ip=typeof setTimeout=="function"?setTimeout:void 0,u1=typeof clearTimeout=="function"?clearTimeout:void 0,ap=typeof Promise=="function"?Promise:void 0,d1=typeof queueMicrotask=="function"?queueMicrotask:typeof ap<"u"?function(e){return ap.resolve(null).then(e).catch(f1)}:ip;function f1(e){setTimeout(function(){throw e})}function yi(e){return e==="head"}function lp(e,t){var s=t,a=0;do{var d=s.nextSibling;if(e.removeChild(s),d&&d.nodeType===8)if(s=d.data,s==="/$"||s==="/&"){if(a===0){e.removeChild(d),Ha(t);return}a--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")a++;else if(s==="html")Hl(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,Hl(s);for(var f=s.firstChild;f;){var x=f.nextSibling,w=f.nodeName;f[Mi]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&f.rel.toLowerCase()==="stylesheet"||s.removeChild(f),f=x}}else s==="body"&&Hl(e.ownerDocument.body);s=d}while(s);Ha(t)}function rp(e,t){var s=e;e=0;do{var a=s.nextSibling;if(s.nodeType===1?t?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(t?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),a&&a.nodeType===8)if(s=a.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=a}while(s)}function sf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var s=t;switch(t=t.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":sf(s),oa(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function h1(e,t,s,a){for(;e.nodeType===1;){var d=s;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Mi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==d.rel||e.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||e.getAttribute("title")!==(d.title==null?null:d.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(d.src==null?null:d.src)||e.getAttribute("type")!==(d.type==null?null:d.type)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var f=d.name==null?null:""+d.name;if(d.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Xs(e.nextSibling),e===null)break}return null}function _1(e,t,s){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Xs(e.nextSibling),e===null))return null;return e}function cp(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Xs(e.nextSibling),e===null))return null;return e}function of(e){return e.data==="$?"||e.data==="$~"}function af(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function m1(e,t){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||s.readyState!=="loading")t();else{var a=function(){t(),s.removeEventListener("DOMContentLoaded",a)};s.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Xs(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var lf=null;function up(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(t===0)return Xs(e.nextSibling);t--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||t++}e=e.nextSibling}return null}function dp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(t===0)return e;t--}else s!=="/$"&&s!=="/&"||t++}e=e.previousSibling}return null}function fp(e,t,s){switch(t=Cc(s),e){case"html":if(e=t.documentElement,!e)throw Error(l(452));return e;case"head":if(e=t.head,!e)throw Error(l(453));return e;case"body":if(e=t.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function Hl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);oa(e)}var Gs=new Map,hp=new Set;function jc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Uo=ce.d;ce.d={f:p1,r:g1,D:y1,C:x1,L:b1,m:v1,X:S1,S:w1,M:k1};function p1(){var e=Uo.f(),t=gc();return e||t}function g1(e){var t=Go(e);t!==null&&t.tag===5&&t.type==="form"?R_(t):Uo.r(e)}var Pa=typeof document>"u"?null:document;function _p(e,t,s){var a=Pa;if(a&&typeof t=="string"&&t){var d=as(t);d='link[rel="'+e+'"][href="'+d+'"]',typeof s=="string"&&(d+='[crossorigin="'+s+'"]'),hp.has(d)||(hp.add(d),e={rel:e,crossOrigin:s,href:t},a.querySelector(d)===null&&(t=a.createElement("link"),Vn(t,"link",e),Rn(t),a.head.appendChild(t)))}}function y1(e){Uo.D(e),_p("dns-prefetch",e,null)}function x1(e,t){Uo.C(e,t),_p("preconnect",e,t)}function b1(e,t,s){Uo.L(e,t,s);var a=Pa;if(a&&e&&t){var d='link[rel="preload"][as="'+as(t)+'"]';t==="image"&&s&&s.imageSrcSet?(d+='[imagesrcset="'+as(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(d+='[imagesizes="'+as(s.imageSizes)+'"]')):d+='[href="'+as(e)+'"]';var f=d;switch(t){case"style":f=Ia(e);break;case"script":f=Ua(e)}Gs.has(f)||(e=y({rel:"preload",href:t==="image"&&s&&s.imageSrcSet?void 0:e,as:t},s),Gs.set(f,e),a.querySelector(d)!==null||t==="style"&&a.querySelector(Yl(f))||t==="script"&&a.querySelector(Xl(f))||(t=a.createElement("link"),Vn(t,"link",e),Rn(t),a.head.appendChild(t)))}}function v1(e,t){Uo.m(e,t);var s=Pa;if(s&&e){var a=t&&typeof t.as=="string"?t.as:"script",d='link[rel="modulepreload"][as="'+as(a)+'"][href="'+as(e)+'"]',f=d;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Ua(e)}if(!Gs.has(f)&&(e=y({rel:"modulepreload",href:e},t),Gs.set(f,e),s.querySelector(d)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Xl(f)))return}a=s.createElement("link"),Vn(a,"link",e),Rn(a),s.head.appendChild(a)}}}function w1(e,t,s){Uo.S(e,t,s);var a=Pa;if(a&&e){var d=ao(a).hoistableStyles,f=Ia(e);t=t||"default";var x=d.get(f);if(!x){var w={loading:0,preload:null};if(x=a.querySelector(Yl(f)))w.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":t},s),(s=Gs.get(f))&&rf(e,s);var R=x=a.createElement("link");Rn(R),Vn(R,"link",e),R._p=new Promise(function(H,ee){R.onload=H,R.onerror=ee}),R.addEventListener("load",function(){w.loading|=1}),R.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Mc(x,t,a)}x={type:"stylesheet",instance:x,count:1,state:w},d.set(f,x)}}}function S1(e,t){Uo.X(e,t);var s=Pa;if(s&&e){var a=ao(s).hoistableScripts,d=Ua(e),f=a.get(d);f||(f=s.querySelector(Xl(d)),f||(e=y({src:e,async:!0},t),(t=Gs.get(d))&&cf(e,t),f=s.createElement("script"),Rn(f),Vn(f,"link",e),s.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},a.set(d,f))}}function k1(e,t){Uo.M(e,t);var s=Pa;if(s&&e){var a=ao(s).hoistableScripts,d=Ua(e),f=a.get(d);f||(f=s.querySelector(Xl(d)),f||(e=y({src:e,async:!0,type:"module"},t),(t=Gs.get(d))&&cf(e,t),f=s.createElement("script"),Rn(f),Vn(f,"link",e),s.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},a.set(d,f))}}function mp(e,t,s,a){var d=(d=lt.current)?jc(d):null;if(!d)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(t=Ia(s.href),s=ao(d).hoistableStyles,a=s.get(t),a||(a={type:"style",instance:null,count:0,state:null},s.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Ia(s.href);var f=ao(d).hoistableStyles,x=f.get(e);if(x||(d=d.ownerDocument||d,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,x),(f=d.querySelector(Yl(e)))&&!f._p&&(x.instance=f,x.state.loading=5),Gs.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Gs.set(e,s),f||C1(d,e,s,x.state))),t&&a===null)throw Error(l(528,""));return x}if(t&&a!==null)throw Error(l(529,""));return null;case"script":return t=s.async,s=s.src,typeof s=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ua(s),s=ao(d).hoistableScripts,a=s.get(t),a||(a={type:"script",instance:null,count:0,state:null},s.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function Ia(e){return'href="'+as(e)+'"'}function Yl(e){return'link[rel="stylesheet"]['+e+"]"}function pp(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function C1(e,t,s,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Vn(t,"link",s),Rn(t),e.head.appendChild(t))}function Ua(e){return'[src="'+as(e)+'"]'}function Xl(e){return"script[async]"+e}function gp(e,t,s){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+as(s.href)+'"]');if(a)return t.instance=a,Rn(a),a;var d=y({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Rn(a),Vn(a,"style",d),Mc(a,s.precedence,e),t.instance=a;case"stylesheet":d=Ia(s.href);var f=e.querySelector(Yl(d));if(f)return t.state.loading|=4,t.instance=f,Rn(f),f;a=pp(s),(d=Gs.get(d))&&rf(a,d),f=(e.ownerDocument||e).createElement("link"),Rn(f);var x=f;return x._p=new Promise(function(w,R){x.onload=w,x.onerror=R}),Vn(f,"link",a),t.state.loading|=4,Mc(f,s.precedence,e),t.instance=f;case"script":return f=Ua(s.src),(d=e.querySelector(Xl(f)))?(t.instance=d,Rn(d),d):(a=s,(d=Gs.get(f))&&(a=y({},s),cf(a,d)),e=e.ownerDocument||e,d=e.createElement("script"),Rn(d),Vn(d,"link",a),e.head.appendChild(d),t.instance=d);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Mc(a,s.precedence,e));return t.instance}function Mc(e,t,s){for(var a=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=a.length?a[a.length-1]:null,f=d,x=0;x<a.length;x++){var w=a[x];if(w.dataset.precedence===t)f=w;else if(f!==d)break}f?f.parentNode.insertBefore(e,f.nextSibling):(t=s.nodeType===9?s.head:s,t.insertBefore(e,t.firstChild))}function rf(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function cf(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Tc=null;function yp(e,t,s){if(Tc===null){var a=new Map,d=Tc=new Map;d.set(s,a)}else d=Tc,a=d.get(s),a||(a=new Map,d.set(s,a));if(a.has(e))return a;for(a.set(e,null),s=s.getElementsByTagName(e),d=0;d<s.length;d++){var f=s[d];if(!(f[Mi]||f[Yt]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(t)||"";x=e+x;var w=a.get(x);w?w.push(f):a.set(x,[f])}}return a}function xp(e,t,s){e=e.ownerDocument||e,e.head.insertBefore(s,t==="title"?e.querySelector("head > title"):null)}function j1(e,t,s){if(s===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function bp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function M1(e,t,s,a){if(s.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var d=Ia(a.href),f=t.querySelector(Yl(d));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ec.bind(e),t.then(e,e)),s.state.loading|=4,s.instance=f,Rn(f);return}f=t.ownerDocument||t,a=pp(a),(d=Gs.get(d))&&rf(a,d),f=f.createElement("link"),Rn(f);var x=f;x._p=new Promise(function(w,R){x.onload=w,x.onerror=R}),Vn(f,"link",a),s.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,t),(t=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=Ec.bind(e),t.addEventListener("load",s),t.addEventListener("error",s))}}var uf=0;function T1(e,t){return e.stylesheets&&e.count===0&&Ac(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var a=setTimeout(function(){if(e.stylesheets&&Ac(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+t);0<e.imgBytes&&uf===0&&(uf=62500*r1());var d=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ac(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>uf?50:800)+t);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(d)}}:null}function Ec(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ac(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Rc=null;function Ac(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Rc=new Map,t.forEach(E1,e),Rc=null,Ec.call(e))}function E1(e,t){if(!(t.state.loading&4)){var s=Rc.get(e);if(s)var a=s.get(null);else{s=new Map,Rc.set(e,s);for(var d=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<d.length;f++){var x=d[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(s.set(x.dataset.precedence,x),a=x)}a&&s.set(null,a)}d=t.instance,x=d.getAttribute("data-precedence"),f=s.get(x)||a,f===a&&s.set(null,d),s.set(x,d),this.count++,a=Ec.bind(this),d.addEventListener("load",a),d.addEventListener("error",a),f?f.parentNode.insertBefore(d,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(d,e.firstChild)),t.state.loading|=4}}var Gl={$$typeof:F,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function R1(e,t,s,a,d,f,x,w,R){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=dn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dn(0),this.hiddenUpdates=dn(null),this.identifierPrefix=a,this.onUncaughtError=d,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.incompleteTransitions=new Map}function vp(e,t,s,a,d,f,x,w,R,H,ee,ae){return e=new R1(e,t,s,x,R,H,ee,ae,w),t=1,f===!0&&(t|=24),f=js(3,null,null,t),e.current=f,f.stateNode=e,t=Hu(),t.refCount++,e.pooledCache=t,t.refCount++,f.memoizedState={element:a,isDehydrated:s,cache:t},Fu(f),e}function wp(e){return e?(e=ya,e):ya}function Sp(e,t,s,a,d,f){d=wp(d),a.context===null?a.context=d:a.pendingContext=d,a=li(t),a.payload={element:s},f=f===void 0?null:f,f!==null&&(a.callback=f),s=ri(e,a,t),s!==null&&(xs(s,e,t),Sl(s,e,t))}function kp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<t?s:t}}function df(e,t){kp(e,t),(e=e.alternate)&&kp(e,t)}function Cp(e){if(e.tag===13||e.tag===31){var t=Oi(e,67108864);t!==null&&xs(t,e,67108864),df(e,67108864)}}function jp(e){if(e.tag===13||e.tag===31){var t=As();t=oo(t);var s=Oi(e,t);s!==null&&xs(s,e,t),df(e,t)}}var Dc=!0;function A1(e,t,s,a){var d=N.T;N.T=null;var f=ce.p;try{ce.p=2,ff(e,t,s,a)}finally{ce.p=f,N.T=d}}function D1(e,t,s,a){var d=N.T;N.T=null;var f=ce.p;try{ce.p=8,ff(e,t,s,a)}finally{ce.p=f,N.T=d}}function ff(e,t,s,a){if(Dc){var d=hf(a);if(d===null)Kd(e,t,a,Nc,s),Tp(e,a);else if(L1(d,e,t,s,a))a.stopPropagation();else if(Tp(e,a),t&4&&-1<N1.indexOf(e)){for(;d!==null;){var f=Go(d);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Wt(f.pendingLanes);if(x!==0){var w=f;for(w.pendingLanes|=2,w.entangledLanes|=2;x;){var R=1<<31-st(x);w.entanglements[1]|=R,x&=~R}vo(f),(It&6)===0&&(mc=Te()+500,Pl(0))}}break;case 31:case 13:w=Oi(f,2),w!==null&&xs(w,f,2),gc(),df(f,2)}if(f=hf(a),f===null&&Kd(e,t,a,Nc,s),f===d)break;d=f}d!==null&&a.stopPropagation()}else Kd(e,t,a,null,s)}}function hf(e){return e=Vs(e),_f(e)}var Nc=null;function _f(e){if(Nc=null,e=Xo(e),e!==null){var t=u(e);if(t===null)e=null;else{var s=t.tag;if(s===13){if(e=_(t),e!==null)return e;e=null}else if(s===31){if(e=g(t),e!==null)return e;e=null}else if(s===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Nc=e,null}function Mp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(rt()){case vt:return 2;case Ht:return 8;case ze:case I:return 32;case X:return 268435456;default:return 32}default:return 32}}var mf=!1,xi=null,bi=null,vi=null,Fl=new Map,Wl=new Map,wi=[],N1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Tp(e,t){switch(e){case"focusin":case"focusout":xi=null;break;case"dragenter":case"dragleave":bi=null;break;case"mouseover":case"mouseout":vi=null;break;case"pointerover":case"pointerout":Fl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wl.delete(t.pointerId)}}function ql(e,t,s,a,d,f){return e===null||e.nativeEvent!==f?(e={blockedOn:t,domEventName:s,eventSystemFlags:a,nativeEvent:f,targetContainers:[d]},t!==null&&(t=Go(t),t!==null&&Cp(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,d!==null&&t.indexOf(d)===-1&&t.push(d),e)}function L1(e,t,s,a,d){switch(t){case"focusin":return xi=ql(xi,e,t,s,a,d),!0;case"dragenter":return bi=ql(bi,e,t,s,a,d),!0;case"mouseover":return vi=ql(vi,e,t,s,a,d),!0;case"pointerover":var f=d.pointerId;return Fl.set(f,ql(Fl.get(f)||null,e,t,s,a,d)),!0;case"gotpointercapture":return f=d.pointerId,Wl.set(f,ql(Wl.get(f)||null,e,t,s,a,d)),!0}return!1}function Ep(e){var t=Xo(e.target);if(t!==null){var s=u(t);if(s!==null){if(t=s.tag,t===13){if(t=_(s),t!==null){e.blockedOn=t,ln(e.priority,function(){jp(s)});return}}else if(t===31){if(t=g(s),t!==null){e.blockedOn=t,ln(e.priority,function(){jp(s)});return}}else if(t===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var s=hf(e.nativeEvent);if(s===null){s=e.nativeEvent;var a=new s.constructor(s.type,s);ol=a,s.target.dispatchEvent(a),ol=null}else return t=Go(s),t!==null&&Cp(t),e.blockedOn=s,!1;t.shift()}return!0}function Rp(e,t,s){Lc(e)&&s.delete(t)}function O1(){mf=!1,xi!==null&&Lc(xi)&&(xi=null),bi!==null&&Lc(bi)&&(bi=null),vi!==null&&Lc(vi)&&(vi=null),Fl.forEach(Rp),Wl.forEach(Rp)}function Oc(e,t){e.blockedOn===t&&(e.blockedOn=null,mf||(mf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,O1)))}var zc=null;function Ap(e){zc!==e&&(zc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){zc===e&&(zc=null);for(var t=0;t<e.length;t+=3){var s=e[t],a=e[t+1],d=e[t+2];if(typeof a!="function"){if(_f(a||s)===null)continue;break}var f=Go(s);f!==null&&(e.splice(t,3),t-=3,fd(f,{pending:!0,data:d,method:s.method,action:a},a,d))}}))}function Ha(e){function t(R){return Oc(R,e)}xi!==null&&Oc(xi,e),bi!==null&&Oc(bi,e),vi!==null&&Oc(vi,e),Fl.forEach(t),Wl.forEach(t);for(var s=0;s<wi.length;s++){var a=wi[s];a.blockedOn===e&&(a.blockedOn=null)}for(;0<wi.length&&(s=wi[0],s.blockedOn===null);)Ep(s),s.blockedOn===null&&wi.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(a=0;a<s.length;a+=3){var d=s[a],f=s[a+1],x=d[Sn]||null;if(typeof f=="function")x||Ap(s);else if(x){var w=null;if(f&&f.hasAttribute("formAction")){if(d=f,x=f[Sn]||null)w=x.formAction;else if(_f(d)!==null)continue}else w=x.action;typeof w=="function"?s[a+1]=w:(s.splice(a,3),a-=3),Ap(s)}}}function Dp(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return d=x})},focusReset:"manual",scroll:"manual"})}function t(){d!==null&&(d(),d=null),a||setTimeout(s,20)}function s(){if(!a&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,d=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(s,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),d!==null&&(d(),d=null)}}}function pf(e){this._internalRoot=e}Bc.prototype.render=pf.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));var s=t.current,a=As();Sp(s,a,e,t,null,null)},Bc.prototype.unmount=pf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Sp(e.current,2,null,e,null,null),gc(),t[Me]=null}};function Bc(e){this._internalRoot=e}Bc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Kn();e={blockedOn:null,target:e,priority:t};for(var s=0;s<wi.length&&t!==0&&t<wi[s].priority;s++);wi.splice(s,0,e),s===0&&Ep(e)}};var Np=n.version;if(Np!=="19.2.8")throw Error(l(527,Np,"19.2.8"));ce.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=m(t),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var z1={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $c=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$c.isDisabled&&$c.supportsFiber)try{Le=$c.inject(z1),ke=$c}catch{}}return Kl.createRoot=function(e,t){if(!c(e))throw Error(l(299));var s=!1,a="",d=I_,f=U_,x=H_;return t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(d=t.onUncaughtError),t.onCaughtError!==void 0&&(f=t.onCaughtError),t.onRecoverableError!==void 0&&(x=t.onRecoverableError)),t=vp(e,1,!1,null,null,s,a,null,d,f,x,Dp),e[Me]=t.current,Vd(e),new pf(t)},Kl.hydrateRoot=function(e,t,s){if(!c(e))throw Error(l(299));var a=!1,d="",f=I_,x=U_,w=H_,R=null;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(x=s.onCaughtError),s.onRecoverableError!==void 0&&(w=s.onRecoverableError),s.formState!==void 0&&(R=s.formState)),t=vp(e,1,!0,t,s??null,a,d,R,f,x,w,Dp),t.context=wp(null),s=t.current,a=As(),a=oo(a),d=li(a),d.callback=null,ri(s,d,a),s=a,t.current.lanes=s,He(t,s),vo(t),e[Me]=t.current,Vd(e),new Bc(t)},Kl.version="19.2.8",Kl}var Yp;function Q1(){if(Yp)return xf.exports;Yp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(n){console.error(n)}}return o(),xf.exports=q1(),xf.exports}var V1=Q1();const K1=dh(V1);/**
 * react-router v7.18.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var hh=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,N0=/^[\\/]{2}/;function Z1(o,n){return n+o.replace(/\\/g,"/")}var Xp="popstate";function Gp(o){return typeof o=="object"&&o!=null&&"pathname"in o&&"search"in o&&"hash"in o&&"state"in o&&"key"in o}function J1(o={}){function n(l,c){var m;let u=(m=c.state)==null?void 0:m.masked,{pathname:_,search:g,hash:h}=u||l.location;return Hf("",{pathname:_,search:g,hash:h},c.state&&c.state.usr||null,c.state&&c.state.key||"default",u?{pathname:l.location.pathname,search:l.location.search,hash:l.location.hash}:void 0)}function i(l,c){return typeof c=="string"?c:dr(c)}return tx(n,i,null,o)}function gn(o,n){if(o===!1||o===null||typeof o>"u")throw new Error(n)}function So(o,n){if(!o){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function ex(){return Math.random().toString(36).substring(2,10)}function Fp(o,n){return{usr:o.state,key:o.key,idx:n,masked:o.mask?{pathname:o.pathname,search:o.search,hash:o.hash}:void 0}}function Hf(o,n,i=null,l,c){return{pathname:typeof o=="string"?o:o.pathname,search:"",hash:"",...typeof n=="string"?Za(n):n,state:i,key:n&&n.key||l||ex(),mask:c}}function dr({pathname:o="/",search:n="",hash:i=""}){return n&&n!=="?"&&(o+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(o+=i.charAt(0)==="#"?i:"#"+i),o}function Za(o){let n={};if(o){let i=o.indexOf("#");i>=0&&(n.hash=o.substring(i),o=o.substring(0,i));let l=o.indexOf("?");l>=0&&(n.search=o.substring(l),o=o.substring(0,l)),o&&(n.pathname=o)}return n}function tx(o,n,i,l={}){let{window:c=document.defaultView,v5Compat:u=!1}=l,_=c.history,g="POP",h=null,m=p();m==null&&(m=0,_.replaceState({..._.state,idx:m},""));function p(){return(_.state||{idx:null}).idx}function y(){g="POP";let O=p(),B=O==null?null:O-m;m=O,h&&h({action:g,location:T.location,delta:B})}function v(O,B){g="PUSH";let J=Gp(O)?O:Hf(T.location,O,B);m=p()+1;let F=Fp(J,m),z=T.createHref(J.mask||J);try{_.pushState(F,"",z)}catch(ie){if(ie instanceof DOMException&&ie.name==="DataCloneError")throw ie;c.location.assign(z)}u&&h&&h({action:g,location:T.location,delta:1})}function j(O,B){g="REPLACE";let J=Gp(O)?O:Hf(T.location,O,B);m=p();let F=Fp(J,m),z=T.createHref(J.mask||J);_.replaceState(F,"",z),u&&h&&h({action:g,location:T.location,delta:0})}function k(O){return nx(c,O)}let T={get action(){return g},get location(){return o(c,_)},listen(O){if(h)throw new Error("A history only accepts one active listener");return c.addEventListener(Xp,y),h=O,()=>{c.removeEventListener(Xp,y),h=null}},createHref(O){return n(c,O)},createURL:k,encodeLocation(O){let B=k(O);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:v,replace:j,go(O){return _.go(O)}};return T}function nx(o,n,i=!1){let l="http://localhost";o&&(l=o.location.origin!=="null"?o.location.origin:o.location.href),gn(l,"No window.location.(origin|href) available to create URL");let c=typeof n=="string"?n:dr(n);return c=c.replace(/ $/,"%20"),!i&&N0.test(c)&&(c=l+c),new URL(c,l)}function L0(o,n,i="/"){return sx(o,n,i,!1)}function sx(o,n,i,l,c){let u=typeof n=="string"?Za(n):n,_=Ho(u.pathname||"/",i);if(_==null)return null;let g=ox(o),h=null,m=mx(_);for(let p=0;h==null&&p<g.length;++p)h=_x(g[p],m,l);return h}function ox(o){let n=O0(o);return ix(n),n}function O0(o,n=[],i=[],l="",c=!1){let u=(_,g,h=c,m)=>{let p={relativePath:m===void 0?_.path||"":m,caseSensitive:_.caseSensitive===!0,childrenIndex:g,route:_};if(p.relativePath.startsWith("/")){if(!p.relativePath.startsWith(l)&&h)return;gn(p.relativePath.startsWith(l),`Absolute route path "${p.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(l.length)}let y=so([l,p.relativePath]),v=i.concat(p);_.children&&_.children.length>0&&(gn(_.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),O0(_.children,n,v,y,h)),!(_.path==null&&!_.index)&&n.push({path:y,score:fx(y,_.index),routesMeta:v.map((j,k)=>{let[T,O]=$0(j.relativePath,j.caseSensitive,k===v.length-1);return{...j,matcher:T,compiledParams:O}})})};return o.forEach((_,g)=>{var h;if(_.path===""||!((h=_.path)!=null&&h.includes("?")))u(_,g);else for(let m of z0(_.path))u(_,g,!0,m)}),n}function z0(o){let n=o.split("/");if(n.length===0)return[];let[i,...l]=n,c=i.endsWith("?"),u=i.replace(/\?$/,"");if(l.length===0)return c?[u,""]:[u];let _=z0(l.join("/")),g=[];return g.push(..._.map(h=>h===""?u:[u,h].join("/"))),c&&g.push(..._),g.map(h=>o.startsWith("/")&&h===""?"/":h)}function ix(o){o.sort((n,i)=>n.score!==i.score?i.score-n.score:hx(n.routesMeta.map(l=>l.childrenIndex),i.routesMeta.map(l=>l.childrenIndex)))}var ax=/^:[\w-]+$/,lx=3,rx=2,cx=1,ux=10,dx=-2,Wp=o=>o==="*";function fx(o,n){let i=o.split("/"),l=i.length;return i.some(Wp)&&(l+=dx),n&&(l+=rx),i.filter(c=>!Wp(c)).reduce((c,u)=>c+(ax.test(u)?lx:u===""?cx:ux),l)}function hx(o,n){return o.length===n.length&&o.slice(0,-1).every((l,c)=>l===n[c])?o[o.length-1]-n[n.length-1]:0}function _x(o,n,i=!1){let{routesMeta:l}=o,c={},u="/",_=[];for(let g=0;g<l.length;++g){let h=l[g],m=g===l.length-1,p=u==="/"?n:n.slice(u.length)||"/",y={path:h.relativePath,caseSensitive:h.caseSensitive,end:m},v=h.matcher&&h.compiledParams?B0(y,p,h.matcher,h.compiledParams):ru(y,p),j=h.route;if(!v&&m&&i&&!l[l.length-1].route.index&&(v=ru({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},p)),!v)return null;Object.assign(c,v.params),_.push({params:c,pathname:so([u,v.pathname]),pathnameBase:yx(so([u,v.pathnameBase])),route:j}),v.pathnameBase!=="/"&&(u=so([u,v.pathnameBase]))}return _}function ru(o,n){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[i,l]=$0(o.path,o.caseSensitive,o.end);return B0(o,n,i,l)}function B0(o,n,i,l){let c=n.match(i);if(!c)return null;let u=c[0],_=u.replace(/(.)\/+$/,"$1"),g=c.slice(1);return{params:l.reduce((m,{paramName:p,isOptional:y},v)=>{if(p==="*"){let k=g[v]||"";_=u.slice(0,u.length-k.length).replace(/(.)\/+$/,"$1")}const j=g[v];return y&&!j?m[p]=void 0:m[p]=(j||"").replace(/%2F/g,"/"),m},{}),pathname:u,pathnameBase:_,pattern:o}}function $0(o,n=!1,i=!0){So(o==="*"||!o.endsWith("*")||o.endsWith("/*"),`Route path "${o}" will be treated as if it were "${o.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/,"/*")}".`);let l=[],c="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(_,g,h,m,p)=>{if(l.push({paramName:g,isOptional:h!=null}),h){let y=p.charAt(m+_.length);return y&&y!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return o.endsWith("*")?(l.push({paramName:"*"}),c+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?c+="\\/*$":o!==""&&o!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,n?void 0:"i"),l]}function mx(o){try{return o.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return So(!1,`The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`),o}}function Ho(o,n){if(n==="/")return o;if(!o.toLowerCase().startsWith(n.toLowerCase()))return null;let i=n.endsWith("/")?n.length-1:n.length,l=o.charAt(i);return l&&l!=="/"?null:o.slice(i)||"/"}function px(o,n="/"){let{pathname:i,search:l="",hash:c=""}=typeof o=="string"?Za(o):o,u;return i?(i=I0(i),i.startsWith("/")?u=qp(i.substring(1),"/"):u=qp(i,n)):u=n,{pathname:u,search:xx(l),hash:bx(c)}}function qp(o,n){let i=cu(n).split("/");return o.split("/").forEach(c=>{c===".."?i.length>1&&i.pop():c!=="."&&i.push(c)}),i.length>1?i.join("/"):"/"}function Sf(o,n,i,l){return`Cannot include a '${o}' character in a manually specified \`to.${n}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function gx(o){return o.filter((n,i)=>i===0||n.route.path&&n.route.path.length>0)}function P0(o){let n=gx(o);return n.map((i,l)=>l===n.length-1?i.pathname:i.pathnameBase)}function _h(o,n,i,l=!1){let c;typeof o=="string"?c=Za(o):(c={...o},gn(!c.pathname||!c.pathname.includes("?"),Sf("?","pathname","search",c)),gn(!c.pathname||!c.pathname.includes("#"),Sf("#","pathname","hash",c)),gn(!c.search||!c.search.includes("#"),Sf("#","search","hash",c)));let u=o===""||c.pathname==="",_=u?"/":c.pathname,g;if(_==null)g=i;else{let y=n.length-1;if(!l&&_.startsWith("..")){let v=_.split("/");for(;v[0]==="..";)v.shift(),y-=1;c.pathname=v.join("/")}g=y>=0?n[y]:"/"}let h=px(c,g),m=_&&_!=="/"&&_.endsWith("/"),p=(u||_===".")&&i.endsWith("/");return!h.pathname.endsWith("/")&&(m||p)&&(h.pathname+="/"),h}var I0=o=>o.replace(/[\\/]{2,}/g,"/"),so=o=>I0(o.join("/")),cu=o=>o.replace(/\/+$/,""),yx=o=>cu(o).replace(/^\/*/,"/"),xx=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,bx=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o,vx=class{constructor(o,n,i,l=!1){this.status=o,this.statusText=n||"",this.internal=l,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function wx(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}function Sx(o){let n=o.map(i=>i.route.path).filter(Boolean);return so(n)||"/"}var U0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function H0(o,n){let i=o;if(typeof i!="string"||!hh.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let l=i,c=!1;if(U0)try{let u=new URL(window.location.href),_=N0.test(i)?new URL(Z1(i,u.protocol)):new URL(i),g=Ho(_.pathname,n);_.origin===u.origin&&g!=null?i=g+_.search+_.hash:c=!0}catch{So(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:l,isExternal:c,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Y0=["POST","PUT","PATCH","DELETE"];new Set(Y0);var kx=["GET",...Y0];new Set(kx);var Cx=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function jx(o){try{return Cx.includes(new URL(o).protocol)}catch{return!1}}var Ja=b.createContext(null);Ja.displayName="DataRouter";var pu=b.createContext(null);pu.displayName="DataRouterState";var X0=b.createContext(!1);function Mx(){return b.useContext(X0)}var G0=b.createContext({isTransitioning:!1});G0.displayName="ViewTransition";var Tx=b.createContext(new Map);Tx.displayName="Fetchers";var Ex=b.createContext(null);Ex.displayName="Await";var qs=b.createContext(null);qs.displayName="Navigation";var _r=b.createContext(null);_r.displayName="Location";var Yo=b.createContext({outlet:null,matches:[],isDataRoute:!1});Yo.displayName="Route";var mh=b.createContext(null);mh.displayName="RouteError";var F0="REACT_ROUTER_ERROR",Rx="REDIRECT",Ax="ROUTE_ERROR_RESPONSE";function Dx(o){if(o.startsWith(`${F0}:${Rx}:{`))try{let n=JSON.parse(o.slice(28));if(typeof n=="object"&&n&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.location=="string"&&typeof n.reloadDocument=="boolean"&&typeof n.replace=="boolean")return n}catch{}}function Nx(o){if(o.startsWith(`${F0}:${Ax}:{`))try{let n=JSON.parse(o.slice(40));if(typeof n=="object"&&n&&typeof n.status=="number"&&typeof n.statusText=="string")return new vx(n.status,n.statusText,n.data)}catch{}}function Lx(o,{relative:n}={}){gn(mr(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:l}=b.useContext(qs),{hash:c,pathname:u,search:_}=pr(o,{relative:n}),g=u;return i!=="/"&&(g=u==="/"?i:so([i,u])),l.createHref({pathname:g,search:_,hash:c})}function mr(){return b.useContext(_r)!=null}function ko(){return gn(mr(),"useLocation() may be used only in the context of a <Router> component."),b.useContext(_r).location}var W0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function q0(o){b.useContext(qs).static||b.useLayoutEffect(o)}function Ox(){let{isDataRoute:o}=b.useContext(Yo);return o?qx():zx()}function zx(){gn(mr(),"useNavigate() may be used only in the context of a <Router> component.");let o=b.useContext(Ja),{basename:n,navigator:i}=b.useContext(qs),{matches:l}=b.useContext(Yo),{pathname:c}=ko(),u=JSON.stringify(P0(l)),_=b.useRef(!1);return q0(()=>{_.current=!0}),b.useCallback((h,m={})=>{if(So(_.current,W0),!_.current)return;if(typeof h=="number"){i.go(h);return}let p=_h(h,JSON.parse(u),c,m.relative==="path");o==null&&n!=="/"&&(p.pathname=p.pathname==="/"?n:so([n,p.pathname])),(m.replace?i.replace:i.push)(p,m.state,m)},[n,i,u,c,o])}b.createContext(null);function pr(o,{relative:n}={}){let{matches:i}=b.useContext(Yo),{pathname:l}=ko(),c=JSON.stringify(P0(i));return b.useMemo(()=>_h(o,JSON.parse(c),l,n==="path"),[o,c,l,n])}function Bx(o,n){return Q0(o,n)}function Q0(o,n,i){var O;gn(mr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=b.useContext(qs),{matches:c}=b.useContext(Yo),u=c[c.length-1],_=u?u.params:{},g=u?u.pathname:"/",h=u?u.pathnameBase:"/",m=u&&u.route;{let B=m&&m.path||"";K0(g,!m||B.endsWith("*")||B.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${B}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${B}"> to <Route path="${B==="/"?"*":`${B}/*`}">.`)}let p=ko(),y;if(n){let B=typeof n=="string"?Za(n):n;gn(h==="/"||((O=B.pathname)==null?void 0:O.startsWith(h)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${B.pathname}" was given in the \`location\` prop.`),y=B}else y=p;let v=y.pathname||"/",j=v;if(h!=="/"){let B=h.replace(/^\//,"").split("/");j="/"+v.replace(/^\//,"").split("/").slice(B.length).join("/")}let k=i&&i.state.matches.length?i.state.matches.map(B=>Object.assign(B,{route:i.manifest[B.route.id]||B.route})):L0(o,{pathname:j});So(m||k!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),So(k==null||k[k.length-1].route.element!==void 0||k[k.length-1].route.Component!==void 0||k[k.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let T=Hx(k&&k.map(B=>Object.assign({},B,{params:Object.assign({},_,B.params),pathname:so([h,l.encodeLocation?l.encodeLocation(B.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:B.pathname]),pathnameBase:B.pathnameBase==="/"?h:so([h,l.encodeLocation?l.encodeLocation(B.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:B.pathnameBase])})),c,i);return n&&T?b.createElement(_r.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...y},navigationType:"POP"}},T):T}function $x(){let o=Wx(),n=wx(o)?`${o.status} ${o.statusText}`:o instanceof Error?o.message:JSON.stringify(o),i=o instanceof Error?o.stack:null,l="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:l},u={padding:"2px 4px",backgroundColor:l},_=null;return console.error("Error handled by React Router default ErrorBoundary:",o),_=b.createElement(b.Fragment,null,b.createElement("p",null,"💿 Hey developer 👋"),b.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",b.createElement("code",{style:u},"ErrorBoundary")," or"," ",b.createElement("code",{style:u},"errorElement")," prop on your route.")),b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},n),i?b.createElement("pre",{style:c},i):null,_)}var Px=b.createElement($x,null),V0=class extends b.Component{constructor(o){super(o),this.state={location:o.location,revalidation:o.revalidation,error:o.error}}static getDerivedStateFromError(o){return{error:o}}static getDerivedStateFromProps(o,n){return n.location!==o.location||n.revalidation!=="idle"&&o.revalidation==="idle"?{error:o.error,location:o.location,revalidation:o.revalidation}:{error:o.error!==void 0?o.error:n.error,location:n.location,revalidation:o.revalidation||n.revalidation}}componentDidCatch(o,n){this.props.onError?this.props.onError(o,n):console.error("React Router caught the following error during render",o)}render(){let o=this.state.error;if(this.context&&typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){const i=Nx(o.digest);i&&(o=i)}let n=o!==void 0?b.createElement(Yo.Provider,{value:this.props.routeContext},b.createElement(mh.Provider,{value:o,children:this.props.component})):this.props.children;return this.context?b.createElement(Ix,{error:o},n):n}};V0.contextType=X0;var kf=new WeakMap;function Ix({children:o,error:n}){let{basename:i}=b.useContext(qs);if(typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){let l=Dx(n.digest);if(l){let c=kf.get(n);if(c)throw c;let u=H0(l.location,i),_=u.absoluteURL||u.to;if(jx(_))throw new Error("Invalid redirect location");if(U0&&!kf.get(n))if(u.isExternal||l.reloadDocument)window.location.href=_;else{const g=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(u.to,{replace:l.replace}));throw kf.set(n,g),g}return b.createElement("meta",{httpEquiv:"refresh",content:`0;url=${_}`})}}return o}function Ux({routeContext:o,match:n,children:i}){let l=b.useContext(Ja);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Yo.Provider,{value:o},i)}function Hx(o,n=[],i){let l=i==null?void 0:i.state;if(o==null){if(!l)return null;if(l.errors)o=l.matches;else if(n.length===0&&!l.initialized&&l.matches.length>0)o=l.matches;else return null}let c=o,u=l==null?void 0:l.errors;if(u!=null){let p=c.findIndex(y=>y.route.id&&(u==null?void 0:u[y.route.id])!==void 0);gn(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),c=c.slice(0,Math.min(c.length,p+1))}let _=!1,g=-1;if(i&&l){_=l.renderFallback;for(let p=0;p<c.length;p++){let y=c[p];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(g=p),y.route.id){let{loaderData:v,errors:j}=l,k=y.route.loader&&!v.hasOwnProperty(y.route.id)&&(!j||j[y.route.id]===void 0);if(y.route.lazy||k){i.isStatic&&(_=!0),g>=0?c=c.slice(0,g+1):c=[c[0]];break}}}}let h=i==null?void 0:i.onError,m=l&&h?(p,y)=>{var v,j;h(p,{location:l.location,params:((j=(v=l.matches)==null?void 0:v[0])==null?void 0:j.params)??{},pattern:Sx(l.matches),errorInfo:y})}:void 0;return c.reduceRight((p,y,v)=>{let j,k=!1,T=null,O=null;l&&(j=u&&y.route.id?u[y.route.id]:void 0,T=y.route.errorElement||Px,_&&(g<0&&v===0?(K0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),k=!0,O=null):g===v&&(k=!0,O=y.route.hydrateFallbackElement||null)));let B=n.concat(c.slice(0,v+1)),J=()=>{let F;return j?F=T:k?F=O:y.route.Component?F=b.createElement(y.route.Component,null):y.route.element?F=y.route.element:F=p,b.createElement(Ux,{match:y,routeContext:{outlet:p,matches:B,isDataRoute:l!=null},children:F})};return l&&(y.route.ErrorBoundary||y.route.errorElement||v===0)?b.createElement(V0,{location:l.location,revalidation:l.revalidation,component:T,error:j,children:J(),routeContext:{outlet:null,matches:B,isDataRoute:!0},onError:m}):J()},null)}function ph(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Yx(o){let n=b.useContext(Ja);return gn(n,ph(o)),n}function Xx(o){let n=b.useContext(pu);return gn(n,ph(o)),n}function Gx(o){let n=b.useContext(Yo);return gn(n,ph(o)),n}function gh(o){let n=Gx(o),i=n.matches[n.matches.length-1];return gn(i.route.id,`${o} can only be used on routes that contain a unique "id"`),i.route.id}function Fx(){return gh("useRouteId")}function Wx(){var l;let o=b.useContext(mh),n=Xx("useRouteError"),i=gh("useRouteError");return o!==void 0?o:(l=n.errors)==null?void 0:l[i]}function qx(){let{router:o}=Yx("useNavigate"),n=gh("useNavigate"),i=b.useRef(!1);return q0(()=>{i.current=!0}),b.useCallback(async(c,u={})=>{So(i.current,W0),i.current&&(typeof c=="number"?await o.navigate(c):await o.navigate(c,{fromRouteId:n,...u}))},[o,n])}var Qp={};function K0(o,n,i){!n&&!Qp[o]&&(Qp[o]=!0,So(!1,i))}b.memo(Qx);function Qx({routes:o,manifest:n,future:i,state:l,isStatic:c,onError:u}){return Q0(o,void 0,{manifest:n,state:l,isStatic:c,onError:u})}function Yf(o){gn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Vx({basename:o="/",children:n=null,location:i,navigationType:l="POP",navigator:c,static:u=!1,useTransitions:_}){gn(!mr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let g=o.replace(/^\/*/,"/"),h=b.useMemo(()=>({basename:g,navigator:c,static:u,useTransitions:_,future:{}}),[g,c,u,_]);typeof i=="string"&&(i=Za(i));let{pathname:m="/",search:p="",hash:y="",state:v=null,key:j="default",mask:k}=i,T=b.useMemo(()=>{let O=Ho(m,g);return O==null?null:{location:{pathname:O,search:p,hash:y,state:v,key:j,mask:k},navigationType:l}},[g,m,p,y,v,j,l,k]);return So(T!=null,`<Router basename="${g}"> is not able to match the URL "${m}${p}${y}" because it does not start with the basename, so the <Router> won't render anything.`),T==null?null:b.createElement(qs.Provider,{value:h},b.createElement(_r.Provider,{children:n,value:T}))}function Kx({children:o,location:n}){return Bx(Xf(o),n)}function Xf(o,n=[]){let i=[];return b.Children.forEach(o,(l,c)=>{if(!b.isValidElement(l))return;let u=[...n,c];if(l.type===b.Fragment){i.push.apply(i,Xf(l.props.children,u));return}gn(l.type===Yf,`[${typeof l.type=="string"?l.type:l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),gn(!l.props.index||!l.props.children,"An index route cannot have child routes.");let _={id:l.props.id||u.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,middleware:l.props.middleware,loader:l.props.loader,action:l.props.action,hydrateFallbackElement:l.props.hydrateFallbackElement,HydrateFallback:l.props.HydrateFallback,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.hasErrorBoundary===!0||l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(_.children=Xf(l.props.children,u)),i.push(_)}),i}var eu="get",tu="application/x-www-form-urlencoded";function gu(o){return typeof HTMLElement<"u"&&o instanceof HTMLElement}function Zx(o){return gu(o)&&o.tagName.toLowerCase()==="button"}function Jx(o){return gu(o)&&o.tagName.toLowerCase()==="form"}function eb(o){return gu(o)&&o.tagName.toLowerCase()==="input"}function tb(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function nb(o,n){return o.button===0&&(!n||n==="_self")&&!tb(o)}var Pc=null;function sb(){if(Pc===null)try{new FormData(document.createElement("form"),0),Pc=!1}catch{Pc=!0}return Pc}var ob=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Cf(o){return o!=null&&!ob.has(o)?(So(!1,`"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${tu}"`),null):o}function ib(o,n){let i,l,c,u,_;if(Jx(o)){let g=o.getAttribute("action");l=g?Ho(g,n):null,i=o.getAttribute("method")||eu,c=Cf(o.getAttribute("enctype"))||tu,u=new FormData(o)}else if(Zx(o)||eb(o)&&(o.type==="submit"||o.type==="image")){let g=o.form;if(g==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=o.getAttribute("formaction")||g.getAttribute("action");if(l=h?Ho(h,n):null,i=o.getAttribute("formmethod")||g.getAttribute("method")||eu,c=Cf(o.getAttribute("formenctype"))||Cf(g.getAttribute("enctype"))||tu,u=new FormData(g,o),!sb()){let{name:m,type:p,value:y}=o;if(p==="image"){let v=m?`${m}.`:"";u.append(`${v}x`,"0"),u.append(`${v}y`,"0")}else m&&u.append(m,y)}}else{if(gu(o))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=eu,l=null,c=tu,_=o}return u&&c==="text/plain"&&(_=u,u=void 0),{action:l,method:i.toLowerCase(),encType:c,formData:u,body:_}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function yh(o,n){if(o===!1||o===null||typeof o>"u")throw new Error(n)}function Z0(o,n,i,l){let c=typeof o=="string"?new URL(o,typeof window>"u"?"server://singlefetch/":window.location.origin):o;return i?c.pathname.endsWith("/")?c.pathname=`${c.pathname}_.${l}`:c.pathname=`${c.pathname}.${l}`:c.pathname==="/"?c.pathname=`_root.${l}`:n&&Ho(c.pathname,n)==="/"?c.pathname=`${cu(n)}/_root.${l}`:c.pathname=`${cu(c.pathname)}.${l}`,c}async function ab(o,n){if(o.id in n)return n[o.id];try{let i=await import(o.module);return n[o.id]=i,i}catch(i){return console.error(`Error loading route module \`${o.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function lb(o){return o==null?!1:o.href==null?o.rel==="preload"&&typeof o.imageSrcSet=="string"&&typeof o.imageSizes=="string":typeof o.rel=="string"&&typeof o.href=="string"}async function rb(o,n,i){let l=await Promise.all(o.map(async c=>{let u=n.routes[c.route.id];if(u){let _=await ab(u,i);return _.links?_.links():[]}return[]}));return fb(l.flat(1).filter(lb).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function Vp(o,n,i,l,c,u){let _=(h,m)=>i[m]?h.route.id!==i[m].route.id:!0,g=(h,m)=>{var p;return i[m].pathname!==h.pathname||((p=i[m].route.path)==null?void 0:p.endsWith("*"))&&i[m].params["*"]!==h.params["*"]};return u==="assets"?n.filter((h,m)=>_(h,m)||g(h,m)):u==="data"?n.filter((h,m)=>{var y;let p=l.routes[h.route.id];if(!p||!p.hasLoader)return!1;if(_(h,m)||g(h,m))return!0;if(h.route.shouldRevalidate){let v=h.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:((y=i[0])==null?void 0:y.params)||{},nextUrl:new URL(o,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function cb(o,n,{includeHydrateFallback:i}={}){return ub(o.map(l=>{let c=n.routes[l.route.id];if(!c)return[];let u=[c.module];return c.clientActionModule&&(u=u.concat(c.clientActionModule)),c.clientLoaderModule&&(u=u.concat(c.clientLoaderModule)),i&&c.hydrateFallbackModule&&(u=u.concat(c.hydrateFallbackModule)),c.imports&&(u=u.concat(c.imports)),u}).flat(1))}function ub(o){return[...new Set(o)]}function db(o){let n={},i=Object.keys(o).sort();for(let l of i)n[l]=o[l];return n}function fb(o,n){let i=new Set;return new Set(n),o.reduce((l,c)=>{let u=JSON.stringify(db(c));return i.has(u)||(i.add(u),l.push({key:u,link:c})),l},[])}function xh(){let o=b.useContext(Ja);return yh(o,"You must render this element inside a <DataRouterContext.Provider> element"),o}function hb(){let o=b.useContext(pu);return yh(o,"You must render this element inside a <DataRouterStateContext.Provider> element"),o}var bh=b.createContext(void 0);bh.displayName="FrameworkContext";function yu(){let o=b.useContext(bh);return yh(o,"You must render this element inside a <HydratedRouter> element"),o}function _b(o,n){let i=b.useContext(bh),[l,c]=b.useState(!1),[u,_]=b.useState(!1),{onFocus:g,onBlur:h,onMouseEnter:m,onMouseLeave:p,onTouchStart:y}=n,v=b.useRef(null);b.useEffect(()=>{if(o==="render"&&_(!0),o==="viewport"){let T=B=>{B.forEach(J=>{_(J.isIntersecting)})},O=new IntersectionObserver(T,{threshold:.5});return v.current&&O.observe(v.current),()=>{O.disconnect()}}},[o]),b.useEffect(()=>{if(l){let T=setTimeout(()=>{_(!0)},100);return()=>{clearTimeout(T)}}},[l]);let j=()=>{c(!0)},k=()=>{c(!1),_(!1)};return i?o!=="intent"?[u,v,{}]:[u,v,{onFocus:Zl(g,j),onBlur:Zl(h,k),onMouseEnter:Zl(m,j),onMouseLeave:Zl(p,k),onTouchStart:Zl(y,j)}]:[!1,v,{}]}function Zl(o,n){return i=>{o&&o(i),i.defaultPrevented||n(i)}}function mb({page:o,...n}){let i=Mx(),{nonce:l}=yu(),{router:c}=xh(),u=b.useMemo(()=>L0(c.routes,o,c.basename),[c.routes,o,c.basename]);return u?(n.nonce==null&&l&&(n={...n,nonce:l}),i?b.createElement(gb,{page:o,matches:u,...n}):b.createElement(yb,{page:o,matches:u,...n})):null}function pb(o){let{manifest:n,routeModules:i}=yu(),[l,c]=b.useState([]);return b.useEffect(()=>{let u=!1;return rb(o,n,i).then(_=>{u||c(_)}),()=>{u=!0}},[o,n,i]),l}function gb({page:o,matches:n,...i}){let l=ko(),{future:c}=yu(),{basename:u}=xh(),_=b.useMemo(()=>{if(o===l.pathname+l.search+l.hash)return[];let g=Z0(o,u,c.v8_trailingSlashAwareDataRequests,"rsc"),h=!1,m=[];for(let p of n)typeof p.route.shouldRevalidate=="function"?h=!0:m.push(p.route.id);return h&&m.length>0&&g.searchParams.set("_routes",m.join(",")),[g.pathname+g.search]},[u,c.v8_trailingSlashAwareDataRequests,o,l,n]);return b.createElement(b.Fragment,null,_.map(g=>b.createElement("link",{key:g,rel:"prefetch",as:"fetch",href:g,...i})))}function yb({page:o,matches:n,...i}){let l=ko(),{future:c,manifest:u,routeModules:_}=yu(),{basename:g}=xh(),{loaderData:h,matches:m}=hb(),p=b.useMemo(()=>Vp(o,n,m,u,l,"data"),[o,n,m,u,l]),y=b.useMemo(()=>Vp(o,n,m,u,l,"assets"),[o,n,m,u,l]),v=b.useMemo(()=>{if(o===l.pathname+l.search+l.hash)return[];let T=new Set,O=!1;if(n.forEach(J=>{var z;let F=u.routes[J.route.id];!F||!F.hasLoader||(!p.some(ie=>ie.route.id===J.route.id)&&J.route.id in h&&((z=_[J.route.id])!=null&&z.shouldRevalidate)||F.hasClientLoader?O=!0:T.add(J.route.id))}),T.size===0)return[];let B=Z0(o,g,c.v8_trailingSlashAwareDataRequests,"data");return O&&T.size>0&&B.searchParams.set("_routes",n.filter(J=>T.has(J.route.id)).map(J=>J.route.id).join(",")),[B.pathname+B.search]},[g,c.v8_trailingSlashAwareDataRequests,h,l,u,p,n,o,_]),j=b.useMemo(()=>cb(y,u),[y,u]),k=pb(y);return b.createElement(b.Fragment,null,v.map(T=>b.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...i})),j.map(T=>b.createElement("link",{key:T,rel:"modulepreload",href:T,...i})),k.map(({key:T,link:O})=>b.createElement("link",{key:T,nonce:i.nonce,...O,crossOrigin:O.crossOrigin??i.crossOrigin})))}function xb(...o){return n=>{o.forEach(i=>{typeof i=="function"?i(n):i!=null&&(i.current=n)})}}var bb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{bb&&(window.__reactRouterVersion="7.18.2")}catch{}function vb({basename:o,children:n,useTransitions:i,window:l}){let c=b.useRef();c.current==null&&(c.current=J1({window:l,v5Compat:!0}));let u=c.current,[_,g]=b.useState({action:u.action,location:u.location}),h=b.useCallback(m=>{i===!1?g(m):b.startTransition(()=>g(m))},[i]);return b.useLayoutEffect(()=>u.listen(h),[u,h]),b.createElement(Vx,{basename:o,children:n,location:_.location,navigationType:_.action,navigator:u,useTransitions:i})}var lr=b.forwardRef(function({onClick:n,discover:i="render",prefetch:l="none",relative:c,reloadDocument:u,replace:_,mask:g,state:h,target:m,to:p,preventScrollReset:y,viewTransition:v,defaultShouldRevalidate:j,...k},T){let{basename:O,navigator:B,useTransitions:J}=b.useContext(qs),F=typeof p=="string"&&hh.test(p),z=H0(p,O);p=z.to;let ie=Lx(p,{relative:c}),ge=ko(),Y=null;if(g){let Se=_h(g,[],ge.mask?ge.mask.pathname:"/",!0);O!=="/"&&(Se.pathname=Se.pathname==="/"?O:so([O,Se.pathname])),Y=B.createHref(Se)}let[fe,ye,xe]=_b(l,k),ue=Cb(p,{replace:_,mask:g,state:h,target:m,preventScrollReset:y,relative:c,viewTransition:v,defaultShouldRevalidate:j,useTransitions:J});function K(Se){n&&n(Se),Se.defaultPrevented||ue(Se)}let Ue=!(z.isExternal||u),me=b.createElement("a",{...k,...xe,href:(Ue?Y:void 0)||z.absoluteURL||ie,onClick:Ue?K:n,ref:xb(T,ye),target:m,"data-discover":!F&&i==="render"?"true":void 0});return fe&&!F?b.createElement(b.Fragment,null,me,b.createElement(mb,{page:ie})):me});lr.displayName="Link";var wb=b.forwardRef(function({"aria-current":n="page",caseSensitive:i=!1,className:l="",end:c=!1,style:u,to:_,viewTransition:g,children:h,...m},p){let y=pr(_,{relative:m.relative}),v=ko(),j=b.useContext(pu),{navigator:k,basename:T}=b.useContext(qs),O=j!=null&&Rb(y)&&g===!0,B=k.encodeLocation?k.encodeLocation(y).pathname:y.pathname,J=v.pathname,F=j&&j.navigation&&j.navigation.location?j.navigation.location.pathname:null;i||(J=J.toLowerCase(),F=F?F.toLowerCase():null,B=B.toLowerCase()),F&&T&&(F=Ho(F,T)||F);const z=B!=="/"&&B.endsWith("/")?B.length-1:B.length;let ie=J===B||!c&&J.startsWith(B)&&J.charAt(z)==="/",ge=F!=null&&(F===B||!c&&F.startsWith(B)&&F.charAt(B.length)==="/"),Y={isActive:ie,isPending:ge,isTransitioning:O},fe=ie?n:void 0,ye;typeof l=="function"?ye=l(Y):ye=[l,ie?"active":null,ge?"pending":null,O?"transitioning":null].filter(Boolean).join(" ");let xe=typeof u=="function"?u(Y):u;return b.createElement(lr,{...m,"aria-current":fe,className:ye,ref:p,style:xe,to:_,viewTransition:g},typeof h=="function"?h(Y):h)});wb.displayName="NavLink";var Sb=b.forwardRef(({discover:o="render",fetcherKey:n,navigate:i,reloadDocument:l,replace:c,state:u,method:_=eu,action:g,onSubmit:h,relative:m,preventScrollReset:p,viewTransition:y,defaultShouldRevalidate:v,...j},k)=>{let{useTransitions:T}=b.useContext(qs),O=Tb(),B=Eb(g,{relative:m}),J=_.toLowerCase()==="get"?"get":"post",F=typeof g=="string"&&hh.test(g),z=ie=>{if(h&&h(ie),ie.defaultPrevented)return;ie.preventDefault();let ge=ie.nativeEvent.submitter,Y=(ge==null?void 0:ge.getAttribute("formmethod"))||_,fe=()=>O(ge||ie.currentTarget,{fetcherKey:n,method:Y,navigate:i,replace:c,state:u,relative:m,preventScrollReset:p,viewTransition:y,defaultShouldRevalidate:v});T&&i!==!1?b.startTransition(()=>fe()):fe()};return b.createElement("form",{ref:k,method:J,action:B,onSubmit:l?h:z,...j,"data-discover":!F&&o==="render"?"true":void 0})});Sb.displayName="Form";function kb(o){return`${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function J0(o){let n=b.useContext(Ja);return gn(n,kb(o)),n}function Cb(o,{target:n,replace:i,mask:l,state:c,preventScrollReset:u,relative:_,viewTransition:g,defaultShouldRevalidate:h,useTransitions:m}={}){let p=Ox(),y=ko(),v=pr(o,{relative:_});return b.useCallback(j=>{if(nb(j,n)){j.preventDefault();let k=i!==void 0?i:dr(y)===dr(v),T=()=>p(o,{replace:k,mask:l,state:c,preventScrollReset:u,relative:_,viewTransition:g,defaultShouldRevalidate:h});m?b.startTransition(()=>T()):T()}},[y,p,v,i,l,c,n,o,u,_,g,h,m])}var jb=0,Mb=()=>`__${String(++jb)}__`;function Tb(){let{router:o}=J0("useSubmit"),{basename:n}=b.useContext(qs),i=Fx(),l=o.fetch,c=o.navigate;return b.useCallback(async(u,_={})=>{let{action:g,method:h,encType:m,formData:p,body:y}=ib(u,n);if(_.navigate===!1){let v=_.fetcherKey||Mb();await l(v,i,_.action||g,{defaultShouldRevalidate:_.defaultShouldRevalidate,preventScrollReset:_.preventScrollReset,formData:p,body:y,formMethod:_.method||h,formEncType:_.encType||m,flushSync:_.flushSync})}else await c(_.action||g,{defaultShouldRevalidate:_.defaultShouldRevalidate,preventScrollReset:_.preventScrollReset,formData:p,body:y,formMethod:_.method||h,formEncType:_.encType||m,replace:_.replace,state:_.state,fromRouteId:i,flushSync:_.flushSync,viewTransition:_.viewTransition})},[l,c,n,i])}function Eb(o,{relative:n}={}){let{basename:i}=b.useContext(qs),l=b.useContext(Yo);gn(l,"useFormAction must be used inside a RouteContext");let[c]=l.matches.slice(-1),u={...pr(o||".",{relative:n})},_=ko();if(o==null){u.search=_.search;let g=new URLSearchParams(u.search),h=g.getAll("index");if(h.some(p=>p==="")){g.delete("index"),h.filter(y=>y).forEach(y=>g.append("index",y));let p=g.toString();u.search=p?`?${p}`:""}}return(!o||o===".")&&c.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:so([i,u.pathname])),dr(u)}function Rb(o,{relative:n}={}){let i=b.useContext(G0);gn(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:l}=J0("useViewTransitionState"),c=pr(o,{relative:n});if(!i.isTransitioning)return!1;let u=Ho(i.currentLocation.pathname,l)||i.currentLocation.pathname,_=Ho(i.nextLocation.pathname,l)||i.nextLocation.pathname;return ru(c.pathname,_)!=null||ru(c.pathname,u)!=null}var eg=D0();const Ab=.08;function Ic(o){return Math.abs(o)<Ab?0:o}function Db(){const[o,n]=b.useState({}),i=b.useRef(null),l=b.useCallback(()=>{var g,h,m,p,y,v,j,k,T,O,B,J;const u=navigator.getGamepads?navigator.getGamepads():[],_={};for(let F=0;F<u.length;F++){const z=u[F];z&&(_[z.index]={index:z.index,id:z.id,connected:z.connected,axes:{leftStickX:Ic(z.axes[0]||0),leftStickY:Ic(z.axes[1]||0),rightStickX:Ic(z.axes[2]||0),rightStickY:Ic(z.axes[3]||0)},buttons:{a:((g=z.buttons[0])==null?void 0:g.pressed)||!1,b:((h=z.buttons[1])==null?void 0:h.pressed)||!1,x:((m=z.buttons[2])==null?void 0:m.pressed)||!1,y:((p=z.buttons[3])==null?void 0:p.pressed)||!1,lb:((y=z.buttons[4])==null?void 0:y.pressed)||!1,rb:((v=z.buttons[5])==null?void 0:v.pressed)||!1,lt:((j=z.buttons[6])==null?void 0:j.value)||0,rt:((k=z.buttons[7])==null?void 0:k.value)||0,back:((T=z.buttons[8])==null?void 0:T.pressed)||!1,start:((O=z.buttons[9])==null?void 0:O.pressed)||!1,lsClick:((B=z.buttons[10])==null?void 0:B.pressed)||!1,rsClick:((J=z.buttons[11])==null?void 0:J.pressed)||!1}})}n(_),i.current=requestAnimationFrame(l)},[]);return b.useEffect(()=>{const u=g=>{console.log(`[useGamepad] Connected index ${g.gamepad.index}: ${g.gamepad.id}`)},_=g=>{console.log(`[useGamepad] Disconnected index ${g.gamepad.index}`)};return window.addEventListener("gamepadconnected",u),window.addEventListener("gamepaddisconnected",_),i.current=requestAnimationFrame(l),()=>{window.removeEventListener("gamepadconnected",u),window.removeEventListener("gamepaddisconnected",_),i.current!==null&&cancelAnimationFrame(i.current)}},[l]),{gamepads:o,triggerVibration:async(u,_=.5,g=.8,h=400)=>{const p=(navigator.getGamepads?navigator.getGamepads():[])[u];if(p&&p.vibrationActuator&&p.vibrationActuator.playEffect)try{return await p.vibrationActuator.playEffect("dual-rumble",{startDelay:0,duration:h,weakMagnitude:_,strongMagnitude:g}),!0}catch(y){console.warn("Vibration playEffect error:",y)}return!1}}}function Nb(o,n=!0){const i=b.useRef(o),l=b.useRef(null);b.useEffect(()=>{i.current=o},[o]),b.useEffect(()=>{if(!n)return;let c;const u=_=>{if(l.current!==null){const g=(_-l.current)/1e3;i.current(g)}l.current=_,c=requestAnimationFrame(u)};return c=requestAnimationFrame(u),()=>{cancelAnimationFrame(c),l.current=null}},[n])}class Lb{constructor(n=2200,i=1350){Fe(this,"width");Fe(this,"height");Fe(this,"pitchBounds");Fe(this,"goals");this.width=n,this.height=i,this.pitchBounds={left:0,right:n,top:0,bottom:i},this.goals={homeGoal:{x:0,top:0,bottom:0},awayGoal:{x:n,top:0,bottom:0}},this.recalculate(n,i)}recalculate(n,i){this.width=n,this.height=i;const l=n*.07,c=i*.08;this.pitchBounds={left:l,right:n-l,top:c,bottom:i-c};const u=i*.32,_=(i-u)/2,g=_+u;this.goals={homeGoal:{x:l,top:_,bottom:g},awayGoal:{x:n-l,top:_,bottom:g}}}draw(n){const i=this.width,l=this.height,c=this.pitchBounds,u=c.right-c.left,_=c.bottom-c.top;n.fillStyle="#489c46",n.fillRect(0,0,i,l);const g=12,h=u/g,m="#3f8c3d",p="#4ba448";for(let F=0;F<g;F++){n.fillStyle=F%2===0?m:p;const z=c.left+F*h;n.fillRect(z,c.top,h,_)}const y=c.left*.75,v=this.goals.homeGoal.top,j=this.goals.homeGoal.bottom-v;n.fillStyle="#b94b4b",n.fillRect(c.left-y,v,y,j),n.strokeStyle="#ffffff",n.lineWidth=4,n.strokeRect(c.left-y,v,y,j),n.fillStyle="#498eb9",n.fillRect(c.right,v,y,j),n.strokeStyle="#ffffff",n.lineWidth=4,n.strokeRect(c.right,v,y,j),n.strokeStyle="#ffffff",n.lineWidth=4.5,n.beginPath(),n.roundRect(c.left,c.top,u,_,12),n.stroke();const k=c.left+u*.5;n.beginPath(),n.moveTo(k,c.top),n.lineTo(k,c.bottom),n.stroke();const T=Math.min(u,_)*.18;n.beginPath(),n.arc(k,c.top+_*.5,T,0,Math.PI*2),n.stroke(),n.fillStyle="#ffffff",n.beginPath(),n.arc(k,c.top+_*.5,6,0,Math.PI*2),n.fill();const O=u*.16,B=_*.52,J=c.top+(_-B)/2;n.strokeRect(c.left,J,O,B),n.strokeRect(c.right-O,J,O,B)}}class Ob{constructor(n=450,i=275){Fe(this,"pos");Fe(this,"vel");Fe(this,"radius");Fe(this,"friction");Fe(this,"lastTouchedBy");Fe(this,"shiftTimer");Fe(this,"releaseTimer");Fe(this,"rotationAngle");Fe(this,"homingTargetPlayer");Fe(this,"throughPassTargetPos");Fe(this,"passSpeed");this.pos={x:n,y:i},this.vel={x:0,y:0},this.radius=11,this.friction=.98,this.lastTouchedBy=null,this.shiftTimer=0,this.releaseTimer=0,this.rotationAngle=0,this.homingTargetPlayer=null,this.throughPassTargetPos=null,this.passSpeed=0}reset(n=450,i=275){this.pos={x:n,y:i},this.vel={x:0,y:0},this.lastTouchedBy=null,this.shiftTimer=0,this.releaseTimer=0,this.rotationAngle=0,this.homingTargetPlayer=null,this.throughPassTargetPos=null,this.passSpeed=0}update(n,i){if((isNaN(this.pos.x)||isNaN(this.pos.y)||isNaN(this.vel.x)||isNaN(this.vel.y))&&(console.warn("[Ball.ts] NaN detected in ball state, resetting to pitch center"),this.pos={x:i.width*.5,y:i.height*.5},this.vel={x:0,y:0},this.homingTargetPlayer=null,this.throughPassTargetPos=null),this.releaseTimer>0&&(this.releaseTimer-=n),this.shiftTimer>0&&(this.shiftTimer-=n),this.throughPassTargetPos&&this.homingTargetPlayer){const g=this.throughPassTargetPos,h=this.homingTargetPlayer,m=g.x-this.pos.x,p=g.y-this.pos.y,y=Math.hypot(m,p)||1,v=Math.max(this.passSpeed,9.5);this.vel.x=m/y*v,this.vel.y=p/y*v,this.pos.x+=this.vel.x,this.pos.y+=this.vel.y,this.rotationAngle+=v*.08,(Math.hypot(h.pos.x-this.pos.x,h.pos.y-this.pos.y)<h.radius+this.radius+12||y<15)&&this.releaseTimer<=0&&(h.hasPossession=!0,this.attachToPlayer(h.pos,h.facingAngle,h.radius,h.vel,h.id))}else if(this.homingTargetPlayer){const g=this.homingTargetPlayer,h=g.pos.x-this.pos.x,m=g.pos.y-this.pos.y,p=Math.hypot(h,m)||1,y=Math.max(this.passSpeed,7.5),v=h/p*y,j=m/p*y;this.vel.x=this.vel.x*.82+v*.18,this.vel.y=this.vel.y*.82+j*.18,this.pos.x+=this.vel.x,this.pos.y+=this.vel.y;const k=Math.hypot(this.vel.x,this.vel.y);this.rotationAngle+=k*.08;const T=g.radius+this.radius+10;p<T&&this.releaseTimer<=0&&(g.hasPossession=!0,this.attachToPlayer(g.pos,g.facingAngle,g.radius,g.vel,g.id))}else{this.pos.x+=this.vel.x,this.pos.y+=this.vel.y,this.vel.x*=this.friction,this.vel.y*=this.friction;const g=Math.hypot(this.vel.x,this.vel.y);g>.05?this.rotationAngle+=g*.08:(this.vel.x=0,this.vel.y=0)}const l=i.pitchBounds,c=i.goals;this.pos.y-this.radius<l.top?(this.pos.y=l.top+this.radius,this.vel.y*=-.8):this.pos.y+this.radius>l.bottom&&(this.pos.y=l.bottom-this.radius,this.vel.y*=-.8);const u=this.pos.y>c.homeGoal.top&&this.pos.y<c.homeGoal.bottom,_=this.pos.y>c.awayGoal.top&&this.pos.y<c.awayGoal.bottom;!u&&this.pos.x-this.radius<l.left&&(this.pos.x=l.left+this.radius,this.vel.x*=-.8),!_&&this.pos.x+this.radius>l.right&&(this.pos.x=l.right-this.radius,this.vel.x*=-.8)}attachToPlayer(n,i,l,c,u){this.lastTouchedBy=u,this.homingTargetPlayer=null,this.throughPassTargetPos=null;const _=isNaN(i)?0:i,g=l+this.radius+10;this.pos.x=n.x+Math.cos(_)*g,this.pos.y=n.y+Math.sin(_)*g,this.vel.x=c.x||0,this.vel.y=c.y||0;const h=Math.hypot(this.vel.x,this.vel.y);h>.05&&(this.rotationAngle+=h*.08)}kick(n,i,l,c=null,u=null){this.lastTouchedBy=l,this.releaseTimer=.35,this.shiftTimer=.25;const _=isNaN(n.x)?1:n.x,g=isNaN(n.y)?0:n.y;this.vel.x=_*i,this.vel.y=g*i,c?(c.hasPossession=!1,this.homingTargetPlayer=c,this.throughPassTargetPos=u,this.passSpeed=Math.max(i,7.5)):(this.homingTargetPlayer=null,this.throughPassTargetPos=null,this.passSpeed=0)}draw(n){if(isNaN(this.pos.x)||isNaN(this.pos.y))return;n.fillStyle="rgba(0, 0, 0, 0.4)",n.beginPath(),n.ellipse(this.pos.x,this.pos.y+this.radius+2,this.radius,this.radius*.45,0,0,Math.PI*2),n.fill(),n.save(),n.translate(this.pos.x,this.pos.y),n.rotate(this.rotationAngle),n.fillStyle="#000000",n.beginPath(),n.arc(0,0,this.radius,0,Math.PI*2),n.fill();const i=this.radius*.52,l=5,c=this.radius*.32;n.fillStyle="#ffffff";for(let u=0;u<l;u++){const _=u*Math.PI*2/l-Math.PI/2,g=Math.cos(_)*i,h=Math.sin(_)*i;n.beginPath();for(let m=0;m<5;m++){const p=m*Math.PI*2/5-Math.PI/2,y=g+Math.cos(p)*c,v=h+Math.sin(p)*c;m===0?n.moveTo(y,v):n.lineTo(y,v)}n.closePath(),n.fill()}n.restore(),this.throughPassTargetPos&&(n.strokeStyle="#f59e0b",n.lineWidth=2.5,n.setLineDash([4,4]),n.beginPath(),n.arc(this.throughPassTargetPos.x,this.throughPassTargetPos.y,16,0,Math.PI*2),n.stroke(),n.setLineDash([])),this.homingTargetPlayer?(n.strokeStyle=this.throughPassTargetPos?"#f59e0b":"#06b6d4",n.lineWidth=2.5,n.setLineDash([4,4]),n.beginPath(),n.arc(this.pos.x,this.pos.y,this.radius+6,0,Math.PI*2),n.stroke(),n.setLineDash([])):this.shiftTimer>0&&(n.strokeStyle="#38bdf8",n.lineWidth=2.5,n.beginPath(),n.arc(this.pos.x,this.pos.y,this.radius+5,0,Math.PI*2),n.stroke())}}function Ya(o,n,i){let l=n-o;for(;l<-Math.PI;)l+=Math.PI*2;for(;l>Math.PI;)l-=Math.PI*2;return o+l*i}class jf{constructor(n,i,l,c,u,_,g){Fe(this,"id");Fe(this,"name");Fe(this,"team");Fe(this,"controllerIndex");Fe(this,"isAI");Fe(this,"pos");Fe(this,"vel");Fe(this,"radius");Fe(this,"speed");Fe(this,"color");Fe(this,"facingAngle");Fe(this,"isSprinting");Fe(this,"hasPossession");Fe(this,"bodyTiltAngle");Fe(this,"turfParticles");Fe(this,"isTackling");Fe(this,"tackleTimer");Fe(this,"tackleSlideAngle");Fe(this,"isDribbleSkillActive");Fe(this,"skillDodgeInvincibleTimer");Fe(this,"stumbleTimer");Fe(this,"duelFeedbackText");Fe(this,"duelFeedbackTimer");Fe(this,"dribbleSpinAngle");Fe(this,"debugInputString");Fe(this,"walkTimer");Fe(this,"prevX");Fe(this,"prevA");Fe(this,"prevY");Fe(this,"prevRB");Fe(this,"prevLB");Fe(this,"prevStart");this.id=n,this.name=i,this.team=l,this.controllerIndex=c,this.isAI=c===null,this.pos={x:_,y:g},this.vel={x:0,y:0},this.radius=18,this.speed=4.2,this.color=u,this.facingAngle=l==="home"?0:Math.PI,this.isSprinting=!1,this.hasPossession=!1,this.bodyTiltAngle=0,this.turfParticles=[],this.isTackling=!1,this.tackleTimer=0,this.tackleSlideAngle=0,this.isDribbleSkillActive=!1,this.skillDodgeInvincibleTimer=0,this.stumbleTimer=0,this.duelFeedbackText="",this.duelFeedbackTimer=0,this.dribbleSpinAngle=0,this.debugInputString="IDLE - Ready for Input",this.walkTimer=Math.random()*100,this.prevX=!1,this.prevA=!1,this.prevY=!1,this.prevRB=!1,this.prevLB=!1,this.prevStart=!1}reset(n,i){this.pos={x:n,y:i},this.vel={x:0,y:0},this.facingAngle=this.team==="home"?0:Math.PI,this.bodyTiltAngle=0,this.turfParticles=[],this.hasPossession=!1,this.isTackling=!1,this.tackleTimer=0,this.tackleSlideAngle=0,this.isDribbleSkillActive=!1,this.skillDodgeInvincibleTimer=0,this.stumbleTimer=0,this.duelFeedbackText="",this.duelFeedbackTimer=0,this.dribbleSpinAngle=0,this.debugInputString="RESET - Position Cleared",this.prevX=!1,this.prevA=!1,this.prevY=!1,this.prevRB=!1,this.prevLB=!1,this.prevStart=!1}triggerFeedback(n){this.duelFeedbackText=n,this.duelFeedbackTimer=1.2}findBestPassTarget(n,i){const l=n.filter(g=>g.id!==this.id);if(l.length===0)return null;let c=null,u=1/0;const _=Math.PI/5;return l.forEach(g=>{const h=g.pos.x-this.pos.x,m=g.pos.y-this.pos.y,p=Math.hypot(h,m),y=Math.atan2(m,h);let v=Math.abs(y-i);for(;v>Math.PI;)v=Math.abs(v-Math.PI*2);if(v<=_){const j=v*200+p;j<u&&(u=j,c=g)}}),c}updateParticles(){for(let n=this.turfParticles.length-1;n>=0;n--){const i=this.turfParticles[n];i.x+=i.vx,i.y+=i.vy,i.vx*=.9,i.vy*=.9,i.life-=.04,i.life<=0&&this.turfParticles.splice(n,1)}}spawnTurfParticle(n,i=!1){const l=i?4:1;for(let c=0;c<l;c++){const u=(i?this.tackleSlideAngle:this.facingAngle)+Math.PI+(Math.random()-.5)*1.2;this.turfParticles.push({x:this.pos.x+Math.cos(u)*(this.radius*.7),y:this.pos.y+Math.sin(u)*(this.radius*.7),vx:Math.cos(u)*(Math.random()*3.5+1.2)*n,vy:Math.sin(u)*(Math.random()*3.5+1.2)*n,life:1,color:i?Math.random()>.3?"#86efac":"#fef08a":Math.random()>.5?"#15803d":"#86efac",size:i?Math.random()*4+2:Math.random()*2.5+1.2})}}executePassTo(n,i){if(!this.hasPossession)return;this.hasPossession=!1,n.hasPossession=!1;const l=n.pos.x-this.pos.x,c=n.pos.y-this.pos.y,u=Math.hypot(l,c)||1;this.facingAngle=Math.atan2(c,l);const _=Math.min(Math.max(u*.042+4.5,6.5),11.5);i.kick({x:l/u,y:c/u},_,this.id,n)}updateEnemyBotAI(n,i,l){this.updateParticles(),this.tackleTimer>0?(this.tackleTimer-=.016,this.spawnTurfParticle(2.5,!0)):this.isTackling=!1,this.skillDodgeInvincibleTimer>0?(this.skillDodgeInvincibleTimer-=.016,this.dribbleSpinAngle+=.35):(this.isDribbleSkillActive=!1,this.dribbleSpinAngle=0),this.stumbleTimer>0&&(this.stumbleTimer-=.016),this.duelFeedbackTimer>0&&(this.duelFeedbackTimer-=.016);const c=Math.hypot(this.pos.x-n.pos.x,this.pos.y-n.pos.y);if(this.hasPossession){const _=i.goals.homeGoal,g=_.top+(_.bottom-_.top)*.5,h=_.x-this.pos.x,m=g-this.pos.y,p=Math.hypot(h,m)||1,y=this.speed*.45;this.vel.x=h/p*y,this.vel.y=m/p*y;const v=Math.atan2(this.vel.y,this.vel.x);this.facingAngle=Ya(this.facingAngle,v,.22),n.attachToPlayer(this.pos,this.facingAngle,this.radius,this.vel,this.id),l.forEach(j=>{j.isTackling&&Math.hypot(j.pos.x-this.pos.x,j.pos.y-this.pos.y)<95&&this.skillDodgeInvincibleTimer<=0&&Math.random()<.25&&(this.isDribbleSkillActive=!0,this.skillDodgeInvincibleTimer=.45,this.triggerFeedback("🔥 GOCEK!"))})}else{const _=l.find(j=>j.hasPossession),g=_?_.pos:n.pos,h=g.x-this.pos.x,m=g.y-this.pos.y,p=Math.hypot(h,m)||1,y=this.speed*.7;this.vel.x=h/p*y,this.vel.y=m/p*y;const v=Math.atan2(m,h);this.facingAngle=Ya(this.facingAngle,v,.22),_&&p<this.radius+_.radius+45&&!this.isTackling&&Math.random()<.08&&(this.isTackling=!0,this.tackleTimer=.45,this.tackleSlideAngle=this.facingAngle,this.vel.x+=Math.cos(this.facingAngle)*11.5,this.vel.y+=Math.sin(this.facingAngle)*11.5,this.triggerFeedback("⚡ TACKLE!")),n.releaseTimer<=0&&c<this.radius+n.radius+25&&(this.hasPossession=!0)}this.pos.x+=this.vel.x,this.pos.y+=this.vel.y;const u=i.pitchBounds;this.pos.x=Math.max(u.left+this.radius,Math.min(u.right-this.radius,this.pos.x)),this.pos.y=Math.max(u.top+this.radius,Math.min(u.bottom-this.radius,this.pos.y))}updatePassiveReception(n,i){this.walkTimer+=.02,this.updateParticles(),this.tackleTimer>0?(this.tackleTimer-=.016,this.spawnTurfParticle(2.5,!0)):this.isTackling=!1,this.skillDodgeInvincibleTimer>0?(this.skillDodgeInvincibleTimer-=.016,this.dribbleSpinAngle+=.35):(this.isDribbleSkillActive=!1,this.dribbleSpinAngle=0),this.stumbleTimer>0&&(this.stumbleTimer-=.016),this.duelFeedbackTimer>0&&(this.duelFeedbackTimer-=.016);const l=Math.hypot(this.pos.x-n.pos.x,this.pos.y-n.pos.y);if(n.homingTargetPlayer&&n.homingTargetPlayer.id===this.id){this.hasPossession=!1;let u=n.pos.x,_=n.pos.y;n.throughPassTargetPos?(u=n.throughPassTargetPos.x,_=n.throughPassTargetPos.y,this.isSprinting=!0,this.spawnTurfParticle(1.5)):this.isSprinting=!1;const g=u-this.pos.x,h=_-this.pos.y,m=Math.hypot(g,h)||1,p=this.isSprinting?this.speed*1.5:this.speed*.7;this.vel.x=g/m*p,this.vel.y=h/m*p;const y=Math.atan2(h,g);this.facingAngle=Ya(this.facingAngle,y,.25);const v=this.radius+n.radius+14;l<v&&n.releaseTimer<=0&&(this.hasPossession=!0,this.isSprinting=!1,n.attachToPlayer(this.pos,this.facingAngle,this.radius,this.vel,this.id))}else if(this.hasPossession){const u=this.team==="home"?i.goals.awayGoal:i.goals.homeGoal,_=u.top+(u.bottom-u.top)*.5,g=u.x-this.pos.x,h=_-this.pos.y,m=Math.hypot(g,h)||1,p=this.speed*.45;this.vel.x=g/m*p,this.vel.y=h/m*p*.4;const y=Math.atan2(this.vel.y,this.vel.x);this.facingAngle=Ya(this.facingAngle,y,.22),n.attachToPlayer(this.pos,this.facingAngle,this.radius,this.vel,this.id)}else{const u=this.speed*.35,_=Math.cos(this.walkTimer*1.2),g=Math.sin(this.walkTimer*.8);this.vel.x=_*u,this.vel.y=g*u;const h=Math.atan2(this.vel.y,this.vel.x);this.facingAngle=Ya(this.facingAngle,h,.15),n.releaseTimer<=0&&l<this.radius+n.radius+18&&(this.hasPossession=!0)}this.pos.x+=this.vel.x,this.pos.y+=this.vel.y;const c=i.pitchBounds;this.pos.x=Math.max(c.left+this.radius,Math.min(c.right-this.radius,this.pos.x)),this.pos.y=Math.max(c.top+this.radius,Math.min(c.bottom-this.radius,this.pos.y))}updateFromGamepad(n,i,l,c,u){let _=!1;this.updateParticles(),this.tackleTimer>0?(this.tackleTimer-=.016,this.spawnTurfParticle(2.8,!0)):this.isTackling=!1,this.skillDodgeInvincibleTimer>0?(this.skillDodgeInvincibleTimer-=.016,this.dribbleSpinAngle+=.35):(this.isDribbleSkillActive=!1,this.dribbleSpinAngle=0),this.stumbleTimer>0&&(this.stumbleTimer-=.016),this.duelFeedbackTimer>0&&(this.duelFeedbackTimer-=.016);const g=this.stumbleTimer>0?.3:1,h=n.axes.leftStickX,m=n.axes.leftStickY;this.isSprinting=n.buttons.rt>.3;const p=(this.isSprinting?this.speed*1.6:this.speed)*g,y=Math.hypot(h,m);let v=this.facingAngle;if(y>.05){const ge=h*p,Y=m*p;this.vel.x=this.vel.x*.65+ge*.35,this.vel.y=this.vel.y*.65+Y*.35,v=Math.atan2(m,h);const fe=v-this.facingAngle;this.facingAngle=Ya(this.facingAngle,v,.25),this.bodyTiltAngle=Math.max(-.22,Math.min(.22,fe*.35)),this.isSprinting&&this.spawnTurfParticle(p/this.speed)}else this.vel.x*=.76,this.vel.y*=.76,this.bodyTiltAngle*=.8,Math.abs(this.vel.x)<.05&&(this.vel.x=0),Math.abs(this.vel.y)<.05&&(this.vel.y=0);this.pos.x+=this.vel.x,this.pos.y+=this.vel.y;const j=l.pitchBounds;this.pos.x=Math.max(j.left+this.radius,Math.min(j.right-this.radius,this.pos.x)),this.pos.y=Math.max(j.top+this.radius,Math.min(j.bottom-this.radius,this.pos.y));const k=Math.hypot(this.pos.x-i.pos.x,this.pos.y-i.pos.y);i.releaseTimer<=0&&k<this.radius+i.radius+25&&!i.homingTargetPlayer?(this.hasPossession=!0,i.attachToPlayer(this.pos,this.facingAngle,this.radius,this.vel,this.id)):i.homingTargetPlayer&&i.homingTargetPlayer.id!==this.id&&(this.hasPossession=!1);const T=n.buttons.x,O=n.buttons.a,B=n.buttons.y,J=n.buttons.rb,F=n.buttons.lb,z=n.buttons.start;z&&!this.prevStart&&(_=!0);const ie=[];if(this.hasPossession?(O&&ie.push("A (Direct Pass)"),T&&ie.push("X (Shoot)"),B&&ie.push("Y (Through / Gocek)"),J&&ie.push("RB (Gocek Skill)")):(T&&ie.push("X (SLIDE TACKLE!)"),O&&ie.push("A (Switch)"),B&&ie.push("Y (Press)")),this.isSprinting&&ie.push("RT (Sprint)"),z&&ie.push("Start (ToggleHUD)"),this.debugInputString=ie.length>0?`PRESSED: ${ie.join(" + ")}`:`STICK: [${h.toFixed(2)}, ${m.toFixed(2)}]`,this.hasPossession){if(T&&!this.prevX){const Y=this.team==="home"?l.goals.awayGoal:l.goals.homeGoal,fe=Y.top+(Y.bottom-Y.top)*.5,ye=Y.x-this.pos.x,xe=fe-this.pos.y,ue=Math.hypot(ye,xe)||1;this.hasPossession=!1,i.kick({x:ye/ue,y:xe/ue},14.5,this.id,null,null),this.debugInputString="🔥 SHOOT TRIGGERED (Tombol X)!"}if(O&&!this.prevA){this.hasPossession=!1;const Y=this.findBestPassTarget(c,v);if(Y){Y.hasPossession=!1;const fe=Y.pos.x-this.pos.x,ye=Y.pos.y-this.pos.y,xe=Math.hypot(fe,ye)||1,ue=Math.min(Math.max(xe*.042+4.5,6.5),11.5);i.kick({x:fe/xe,y:ye/xe},ue,this.id,Y,null),this.debugInputString=`⚽ SMART ASSIST PASS TO ${Y.name} (Tombol A)!`}else{const fe={x:Math.cos(v),y:Math.sin(v)};i.kick(fe,8.5,this.id,null,null),this.debugInputString="⚽ MANUAL DIRECTION PASS (No Teammate Aimed)!"}}(B&&!this.prevY||J&&!this.prevRB)&&(this.isDribbleSkillActive=!0,this.skillDodgeInvincibleTimer=.45,this.triggerFeedback("🔥 GOCEK!"),this.debugInputString="🔥 DRIBBLE SKILL MOVE / GOCEK TRIGGERED!")}else if(T&&!this.prevX&&(this.isTackling=!0,this.tackleTimer=.45,this.tackleSlideAngle=this.facingAngle,this.vel.x+=Math.cos(this.facingAngle)*12.5,this.vel.y+=Math.sin(this.facingAngle)*12.5,this.triggerFeedback("⚡ SLIDE TACKLE!"),this.debugInputString="⚡ SLIDE TACKLE EXECUTED (Tombol X)!"),J&&!this.prevRB||F&&!this.prevLB){const Y=c.find(fe=>fe.id!==this.id);Y&&(Y.executePassTo(this,i),this.debugInputString="⚡ RB/LB REQUEST PASS -> PLAYER 2 PASSED TO PLAYER 1!")}return this.prevX=T,this.prevA=O,this.prevY=B,this.prevRB=J,this.prevLB=F,this.prevStart=z,{toggleHUDRequested:_}}draw(n){const i=this.id==="p1",l=this.id==="p2",c=i?"#f87171":l?"#60a5fa":"#f59e0b",u=i?"Kamu":l?"Rekan":"Musuh (P3)",_=i?"QI":l?"P2":"P3";this.turfParticles.forEach(y=>{n.fillStyle=y.color,n.globalAlpha=Math.max(0,y.life),n.beginPath(),n.arc(y.x,y.y,y.size,0,Math.PI*2),n.fill()}),n.globalAlpha=1,this.isTackling&&(n.save(),n.translate(this.pos.x,this.pos.y),n.rotate(this.tackleSlideAngle),n.fillStyle="#f87171",n.strokeStyle="#06b6d4",n.lineWidth=3,n.beginPath(),n.roundRect(0,-6,this.radius+28,12,6),n.fill(),n.stroke(),n.strokeStyle="#38bdf8",n.lineWidth=4,n.beginPath(),n.arc(this.radius+28,0,16,-Math.PI/2,Math.PI/2),n.stroke(),n.restore()),this.skillDodgeInvincibleTimer>0&&(n.strokeStyle="#f59e0b",n.lineWidth=4,n.setLineDash([6,4]),n.beginPath(),n.arc(this.pos.x,this.pos.y,this.radius+14,0,Math.PI*2),n.stroke(),n.setLineDash([])),n.save(),n.translate(this.pos.x,this.pos.y),n.rotate(this.bodyTiltAngle+this.dribbleSpinAngle);const g=this.radius+9;n.strokeStyle=this.hasPossession?"#10b981":"rgba(187, 247, 208, 0.85)",n.lineWidth=this.hasPossession?4.5:3.5,n.beginPath(),n.arc(0,0,g,0,Math.PI*2),n.stroke();const h=Math.PI/3,m=this.facingAngle-this.bodyTiltAngle-h/2,p=this.facingAngle-this.bodyTiltAngle+h/2;n.strokeStyle=this.hasPossession?"#047857":"#0a2d12",n.lineWidth=this.hasPossession?6.5:6,n.beginPath(),n.arc(0,0,g,m,p),n.stroke(),n.fillStyle=c,n.beginPath(),n.arc(0,0,this.radius,0,Math.PI*2),n.fill(),n.strokeStyle="#000000",n.lineWidth=3.5,n.stroke(),n.fillStyle="#ffffff",n.font="900 14px sans-serif",n.textAlign="center",n.textBaseline="middle",n.strokeStyle="#000000",n.lineWidth=3,n.strokeText(_,0,1),n.fillText(_,0,1),n.restore(),n.fillStyle="#ffffff",n.font="bold 15px sans-serif",n.textAlign="center",n.textBaseline="alphabetic",n.strokeStyle="rgba(0, 0, 0, 0.7)",n.lineWidth=2.5,n.strokeText(u,this.pos.x,this.pos.y-12-this.radius),n.fillText(u,this.pos.x,this.pos.y-12-this.radius),this.duelFeedbackTimer>0&&(n.fillStyle=this.duelFeedbackText.includes("GOCEK")?"#fbbf24":"#06b6d4",n.font="900 16px sans-serif",n.textAlign="center",n.strokeStyle="#000000",n.lineWidth=3.5,n.strokeText(this.duelFeedbackText,this.pos.x,this.pos.y-32-this.radius),n.fillText(this.duelFeedbackText,this.pos.x,this.pos.y-32-this.radius))}}class zb{constructor(n="1v1_local"){Fe(this,"state");this.state={mode:n,timerSeconds:180,scoreHome:0,scoreAway:0,state:"PLAYING",winnerTitle:"",logMessage:"Arena Match Started! First to 3 Goals or 3-Min Timer Countdown.",debugInputText:"Ready"}}resetMatch(){this.state.timerSeconds=180,this.state.scoreHome=0,this.state.scoreAway=0,this.state.state="PLAYING",this.state.winnerTitle="",this.state.logMessage="Arena Reset! First to 3 Goals or 3-Min Timer Countdown.",this.state.debugInputText="Ready"}setMode(n){this.state.mode=n,this.resetMatch()}update(n,i,l){if(this.state.state==="GAME_OVER")return!1;this.state.timerSeconds>0?this.state.timerSeconds=Math.max(0,this.state.timerSeconds-n):this.state.state==="PLAYING"&&(this.state.scoreHome!==this.state.scoreAway?this.triggerGameOver(this.state.scoreHome>this.state.scoreAway?"HOME TEAM WINS ON TIME!":"AWAY TEAM WINS ON TIME!"):(this.state.state="GOLDEN_GOAL",this.state.logMessage="⏰ TIME EXPIRED! Entering GOLDEN GOAL Overtime (Next goal wins!)"));const c=l.goals;if(i.pos.y>c.homeGoal.top&&i.pos.y<c.homeGoal.bottom){if(i.pos.x-i.radius<c.homeGoal.x-10)return this.state.scoreAway++,this.state.logMessage=`⚽ GOAL FOR AWAY TEAM! (${this.state.scoreHome} - ${this.state.scoreAway})`,this.checkWinCondition("AWAY TEAM"),!0;if(i.pos.x+i.radius>c.awayGoal.x+10)return this.state.scoreHome++,this.state.logMessage=`⚽ GOAL FOR HOME TEAM! (${this.state.scoreHome} - ${this.state.scoreAway})`,this.checkWinCondition("HOME TEAM"),!0}return!1}checkWinCondition(n){if(this.state.state==="GOLDEN_GOAL"){this.triggerGameOver(`🏆 ${n} WINS VIA GOLDEN GOAL!`);return}this.state.scoreHome>=3?this.triggerGameOver("🏆 HOME TEAM VICTORIOUS! (3 Goals Scored)"):this.state.scoreAway>=3&&this.triggerGameOver("🏆 AWAY TEAM VICTORIOUS! (3 Goals Scored)")}triggerGameOver(n){this.state.state="GAME_OVER",this.state.winnerTitle=n,this.state.logMessage=`🏁 GAME OVER! ${n}`}}/**
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
 */var Ji;(o=>{const n=class Et{constructor(h,m,p,y){if(this.version=h,this.errorCorrectionLevel=m,this.modules=[],this.isFunction=[],h<Et.MIN_VERSION||h>Et.MAX_VERSION)throw new RangeError("Version value out of range");if(y<-1||y>7)throw new RangeError("Mask value out of range");this.size=h*4+17;let v=[];for(let k=0;k<this.size;k++)v.push(!1);for(let k=0;k<this.size;k++)this.modules.push(v.slice()),this.isFunction.push(v.slice());this.drawFunctionPatterns();const j=this.addEccAndInterleave(p);if(this.drawCodewords(j),y==-1){let k=1e9;for(let T=0;T<8;T++){this.applyMask(T),this.drawFormatBits(T);const O=this.getPenaltyScore();O<k&&(y=T,k=O),this.applyMask(T)}}c(0<=y&&y<=7),this.mask=y,this.applyMask(y),this.drawFormatBits(y),this.isFunction=[]}static encodeText(h,m){const p=o.QrSegment.makeSegments(h);return Et.encodeSegments(p,m)}static encodeBinary(h,m){const p=o.QrSegment.makeBytes(h);return Et.encodeSegments([p],m)}static encodeSegments(h,m,p=1,y=40,v=-1,j=!0){if(!(Et.MIN_VERSION<=p&&p<=y&&y<=Et.MAX_VERSION)||v<-1||v>7)throw new RangeError("Invalid value");let k,T;for(k=p;;k++){const F=Et.getNumDataCodewords(k,m)*8,z=_.getTotalBits(h,k);if(z<=F){T=z;break}if(k>=y)throw new RangeError("Data too long")}for(const F of[Et.Ecc.MEDIUM,Et.Ecc.QUARTILE,Et.Ecc.HIGH])j&&T<=Et.getNumDataCodewords(k,F)*8&&(m=F);let O=[];for(const F of h){i(F.mode.modeBits,4,O),i(F.numChars,F.mode.numCharCountBits(k),O);for(const z of F.getData())O.push(z)}c(O.length==T);const B=Et.getNumDataCodewords(k,m)*8;c(O.length<=B),i(0,Math.min(4,B-O.length),O),i(0,(8-O.length%8)%8,O),c(O.length%8==0);for(let F=236;O.length<B;F^=253)i(F,8,O);let J=[];for(;J.length*8<O.length;)J.push(0);return O.forEach((F,z)=>J[z>>>3]|=F<<7-(z&7)),new Et(k,m,J,v)}getModule(h,m){return 0<=h&&h<this.size&&0<=m&&m<this.size&&this.modules[m][h]}getModules(){return this.modules}drawFunctionPatterns(){for(let p=0;p<this.size;p++)this.setFunctionModule(6,p,p%2==0),this.setFunctionModule(p,6,p%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const h=this.getAlignmentPatternPositions(),m=h.length;for(let p=0;p<m;p++)for(let y=0;y<m;y++)p==0&&y==0||p==0&&y==m-1||p==m-1&&y==0||this.drawAlignmentPattern(h[p],h[y]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(h){const m=this.errorCorrectionLevel.formatBits<<3|h;let p=m;for(let v=0;v<10;v++)p=p<<1^(p>>>9)*1335;const y=(m<<10|p)^21522;c(y>>>15==0);for(let v=0;v<=5;v++)this.setFunctionModule(8,v,l(y,v));this.setFunctionModule(8,7,l(y,6)),this.setFunctionModule(8,8,l(y,7)),this.setFunctionModule(7,8,l(y,8));for(let v=9;v<15;v++)this.setFunctionModule(14-v,8,l(y,v));for(let v=0;v<8;v++)this.setFunctionModule(this.size-1-v,8,l(y,v));for(let v=8;v<15;v++)this.setFunctionModule(8,this.size-15+v,l(y,v));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let h=this.version;for(let p=0;p<12;p++)h=h<<1^(h>>>11)*7973;const m=this.version<<12|h;c(m>>>18==0);for(let p=0;p<18;p++){const y=l(m,p),v=this.size-11+p%3,j=Math.floor(p/3);this.setFunctionModule(v,j,y),this.setFunctionModule(j,v,y)}}drawFinderPattern(h,m){for(let p=-4;p<=4;p++)for(let y=-4;y<=4;y++){const v=Math.max(Math.abs(y),Math.abs(p)),j=h+y,k=m+p;0<=j&&j<this.size&&0<=k&&k<this.size&&this.setFunctionModule(j,k,v!=2&&v!=4)}}drawAlignmentPattern(h,m){for(let p=-2;p<=2;p++)for(let y=-2;y<=2;y++)this.setFunctionModule(h+y,m+p,Math.max(Math.abs(y),Math.abs(p))!=1)}setFunctionModule(h,m,p){this.modules[m][h]=p,this.isFunction[m][h]=!0}addEccAndInterleave(h){const m=this.version,p=this.errorCorrectionLevel;if(h.length!=Et.getNumDataCodewords(m,p))throw new RangeError("Invalid argument");const y=Et.NUM_ERROR_CORRECTION_BLOCKS[p.ordinal][m],v=Et.ECC_CODEWORDS_PER_BLOCK[p.ordinal][m],j=Math.floor(Et.getNumRawDataModules(m)/8),k=y-j%y,T=Math.floor(j/y);let O=[];const B=Et.reedSolomonComputeDivisor(v);for(let F=0,z=0;F<y;F++){let ie=h.slice(z,z+T-v+(F<k?0:1));z+=ie.length;const ge=Et.reedSolomonComputeRemainder(ie,B);F<k&&ie.push(0),O.push(ie.concat(ge))}let J=[];for(let F=0;F<O[0].length;F++)O.forEach((z,ie)=>{(F!=T-v||ie>=k)&&J.push(z[F])});return c(J.length==j),J}drawCodewords(h){if(h.length!=Math.floor(Et.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let m=0;for(let p=this.size-1;p>=1;p-=2){p==6&&(p=5);for(let y=0;y<this.size;y++)for(let v=0;v<2;v++){const j=p-v,T=(p+1&2)==0?this.size-1-y:y;!this.isFunction[T][j]&&m<h.length*8&&(this.modules[T][j]=l(h[m>>>3],7-(m&7)),m++)}}c(m==h.length*8)}applyMask(h){if(h<0||h>7)throw new RangeError("Mask value out of range");for(let m=0;m<this.size;m++)for(let p=0;p<this.size;p++){let y;switch(h){case 0:y=(p+m)%2==0;break;case 1:y=m%2==0;break;case 2:y=p%3==0;break;case 3:y=(p+m)%3==0;break;case 4:y=(Math.floor(p/3)+Math.floor(m/2))%2==0;break;case 5:y=p*m%2+p*m%3==0;break;case 6:y=(p*m%2+p*m%3)%2==0;break;case 7:y=((p+m)%2+p*m%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[m][p]&&y&&(this.modules[m][p]=!this.modules[m][p])}}getPenaltyScore(){let h=0;for(let v=0;v<this.size;v++){let j=!1,k=0,T=[0,0,0,0,0,0,0];for(let O=0;O<this.size;O++)this.modules[v][O]==j?(k++,k==5?h+=Et.PENALTY_N1:k>5&&h++):(this.finderPenaltyAddHistory(k,T),j||(h+=this.finderPenaltyCountPatterns(T)*Et.PENALTY_N3),j=this.modules[v][O],k=1);h+=this.finderPenaltyTerminateAndCount(j,k,T)*Et.PENALTY_N3}for(let v=0;v<this.size;v++){let j=!1,k=0,T=[0,0,0,0,0,0,0];for(let O=0;O<this.size;O++)this.modules[O][v]==j?(k++,k==5?h+=Et.PENALTY_N1:k>5&&h++):(this.finderPenaltyAddHistory(k,T),j||(h+=this.finderPenaltyCountPatterns(T)*Et.PENALTY_N3),j=this.modules[O][v],k=1);h+=this.finderPenaltyTerminateAndCount(j,k,T)*Et.PENALTY_N3}for(let v=0;v<this.size-1;v++)for(let j=0;j<this.size-1;j++){const k=this.modules[v][j];k==this.modules[v][j+1]&&k==this.modules[v+1][j]&&k==this.modules[v+1][j+1]&&(h+=Et.PENALTY_N2)}let m=0;for(const v of this.modules)m=v.reduce((j,k)=>j+(k?1:0),m);const p=this.size*this.size,y=Math.ceil(Math.abs(m*20-p*10)/p)-1;return c(0<=y&&y<=9),h+=y*Et.PENALTY_N4,c(0<=h&&h<=2568888),h}getAlignmentPatternPositions(){if(this.version==1)return[];{const h=Math.floor(this.version/7)+2,m=this.version==32?26:Math.ceil((this.version*4+4)/(h*2-2))*2;let p=[6];for(let y=this.size-7;p.length<h;y-=m)p.splice(1,0,y);return p}}static getNumRawDataModules(h){if(h<Et.MIN_VERSION||h>Et.MAX_VERSION)throw new RangeError("Version number out of range");let m=(16*h+128)*h+64;if(h>=2){const p=Math.floor(h/7)+2;m-=(25*p-10)*p-55,h>=7&&(m-=36)}return c(208<=m&&m<=29648),m}static getNumDataCodewords(h,m){return Math.floor(Et.getNumRawDataModules(h)/8)-Et.ECC_CODEWORDS_PER_BLOCK[m.ordinal][h]*Et.NUM_ERROR_CORRECTION_BLOCKS[m.ordinal][h]}static reedSolomonComputeDivisor(h){if(h<1||h>255)throw new RangeError("Degree out of range");let m=[];for(let y=0;y<h-1;y++)m.push(0);m.push(1);let p=1;for(let y=0;y<h;y++){for(let v=0;v<m.length;v++)m[v]=Et.reedSolomonMultiply(m[v],p),v+1<m.length&&(m[v]^=m[v+1]);p=Et.reedSolomonMultiply(p,2)}return m}static reedSolomonComputeRemainder(h,m){let p=m.map(y=>0);for(const y of h){const v=y^p.shift();p.push(0),m.forEach((j,k)=>p[k]^=Et.reedSolomonMultiply(j,v))}return p}static reedSolomonMultiply(h,m){if(h>>>8||m>>>8)throw new RangeError("Byte out of range");let p=0;for(let y=7;y>=0;y--)p=p<<1^(p>>>7)*285,p^=(m>>>y&1)*h;return c(p>>>8==0),p}finderPenaltyCountPatterns(h){const m=h[1];c(m<=this.size*3);const p=m>0&&h[2]==m&&h[3]==m*3&&h[4]==m&&h[5]==m;return(p&&h[0]>=m*4&&h[6]>=m?1:0)+(p&&h[6]>=m*4&&h[0]>=m?1:0)}finderPenaltyTerminateAndCount(h,m,p){return h&&(this.finderPenaltyAddHistory(m,p),m=0),m+=this.size,this.finderPenaltyAddHistory(m,p),this.finderPenaltyCountPatterns(p)}finderPenaltyAddHistory(h,m){m[0]==0&&(h+=this.size),m.pop(),m.unshift(h)}};n.MIN_VERSION=1,n.MAX_VERSION=40,n.PENALTY_N1=3,n.PENALTY_N2=3,n.PENALTY_N3=40,n.PENALTY_N4=10,n.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],n.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],o.QrCode=n;function i(g,h,m){if(h<0||h>31||g>>>h)throw new RangeError("Value out of range");for(let p=h-1;p>=0;p--)m.push(g>>>p&1)}function l(g,h){return(g>>>h&1)!=0}function c(g){if(!g)throw new Error("Assertion error")}const u=class wn{constructor(h,m,p){if(this.mode=h,this.numChars=m,this.bitData=p,m<0)throw new RangeError("Invalid argument");this.bitData=p.slice()}static makeBytes(h){let m=[];for(const p of h)i(p,8,m);return new wn(wn.Mode.BYTE,h.length,m)}static makeNumeric(h){if(!wn.isNumeric(h))throw new RangeError("String contains non-numeric characters");let m=[];for(let p=0;p<h.length;){const y=Math.min(h.length-p,3);i(parseInt(h.substring(p,p+y),10),y*3+1,m),p+=y}return new wn(wn.Mode.NUMERIC,h.length,m)}static makeAlphanumeric(h){if(!wn.isAlphanumeric(h))throw new RangeError("String contains unencodable characters in alphanumeric mode");let m=[],p;for(p=0;p+2<=h.length;p+=2){let y=wn.ALPHANUMERIC_CHARSET.indexOf(h.charAt(p))*45;y+=wn.ALPHANUMERIC_CHARSET.indexOf(h.charAt(p+1)),i(y,11,m)}return p<h.length&&i(wn.ALPHANUMERIC_CHARSET.indexOf(h.charAt(p)),6,m),new wn(wn.Mode.ALPHANUMERIC,h.length,m)}static makeSegments(h){return h==""?[]:wn.isNumeric(h)?[wn.makeNumeric(h)]:wn.isAlphanumeric(h)?[wn.makeAlphanumeric(h)]:[wn.makeBytes(wn.toUtf8ByteArray(h))]}static makeEci(h){let m=[];if(h<0)throw new RangeError("ECI assignment value out of range");if(h<128)i(h,8,m);else if(h<16384)i(2,2,m),i(h,14,m);else if(h<1e6)i(6,3,m),i(h,21,m);else throw new RangeError("ECI assignment value out of range");return new wn(wn.Mode.ECI,0,m)}static isNumeric(h){return wn.NUMERIC_REGEX.test(h)}static isAlphanumeric(h){return wn.ALPHANUMERIC_REGEX.test(h)}getData(){return this.bitData.slice()}static getTotalBits(h,m){let p=0;for(const y of h){const v=y.mode.numCharCountBits(m);if(y.numChars>=1<<v)return 1/0;p+=4+v+y.bitData.length}return p}static toUtf8ByteArray(h){h=encodeURI(h);let m=[];for(let p=0;p<h.length;p++)h.charAt(p)!="%"?m.push(h.charCodeAt(p)):(m.push(parseInt(h.substring(p+1,p+3),16)),p+=2);return m}};u.NUMERIC_REGEX=/^[0-9]*$/,u.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,u.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";let _=u;o.QrSegment=u})(Ji||(Ji={}));(o=>{(n=>{const i=class{constructor(c,u){this.ordinal=c,this.formatBits=u}};i.LOW=new i(0,1),i.MEDIUM=new i(1,0),i.QUARTILE=new i(2,3),i.HIGH=new i(3,2),n.Ecc=i})(o.QrCode||(o.QrCode={}))})(Ji||(Ji={}));(o=>{(n=>{const i=class{constructor(c,u){this.modeBits=c,this.numBitsCharCount=u}numCharCountBits(c){return this.numBitsCharCount[Math.floor((c+7)/17)]}};i.NUMERIC=new i(1,[10,12,14]),i.ALPHANUMERIC=new i(2,[9,11,13]),i.BYTE=new i(4,[8,16,16]),i.KANJI=new i(8,[8,10,12]),i.ECI=new i(7,[0,0,0]),n.Mode=i})(o.QrSegment||(o.QrSegment={}))})(Ji||(Ji={}));var Wa=Ji;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var f5={L:Wa.QrCode.Ecc.LOW,M:Wa.QrCode.Ecc.MEDIUM,Q:Wa.QrCode.Ecc.QUARTILE,H:Wa.QrCode.Ecc.HIGH},ig=128,ag="L",lg="#FFFFFF",rg="#000000",cg=!1,ug=1,h5=4,_5=0,m5=.1;function dg(o,n=0){const i=[];return o.forEach(function(l,c){let u=null;l.forEach(function(_,g){if(!_&&u!==null){i.push(`M${u+n} ${c+n}h${g-u}v1H${u+n}z`),u=null;return}if(g===l.length-1){if(!_)return;u===null?i.push(`M${g+n},${c+n} h1v1H${g+n}z`):i.push(`M${u+n},${c+n} h${g+1-u}v1H${u+n}z`);return}_&&u===null&&(u=g)})}),i.join("")}function fg(o,n){return o.slice().map((i,l)=>l<n.y||l>=n.y+n.h?i:i.map((c,u)=>u<n.x||u>=n.x+n.w?c:!1))}function p5(o,n,i,l){if(l==null)return null;const c=o.length+i*2,u=Math.floor(n*m5),_=c/n,g=(l.width||u)*_,h=(l.height||u)*_,m=l.x==null?o.length/2-g/2:l.x*_,p=l.y==null?o.length/2-h/2:l.y*_,y=l.opacity==null?1:l.opacity;let v=null;if(l.excavate){let k=Math.floor(m),T=Math.floor(p),O=Math.ceil(g+m-k),B=Math.ceil(h+p-T);v={x:k,y:T,w:O,h:B}}const j=l.crossOrigin;return{x:m,y:p,h,w:g,excavation:v,opacity:y,crossOrigin:j}}function g5(o,n){return n!=null?Math.max(Math.floor(n),0):o?h5:_5}function hg({value:o,level:n,minVersion:i,includeMargin:l,marginSize:c,imageSettings:u,size:_,boostLevel:g}){let h=Mn.useMemo(()=>{const k=(Array.isArray(o)?o:[o]).reduce((T,O)=>(T.push(...Wa.QrSegment.makeSegments(O)),T),[]);return Wa.QrCode.encodeSegments(k,f5[n],i,void 0,void 0,g)},[o,n,i,g]);const{cells:m,margin:p,numCells:y,calculatedImageSettings:v}=Mn.useMemo(()=>{let j=h.getModules();const k=g5(l,c),T=j.length+k*2,O=p5(j,_,k,u);return{cells:j,margin:k,numCells:T,calculatedImageSettings:O}},[h,_,u,l,c]);return{qrcode:h,margin:p,cells:m,numCells:y,calculatedImageSettings:v}}var y5=(function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0})(),x5=Mn.forwardRef(function(n,i){const l=n,{value:c,size:u=ig,level:_=ag,bgColor:g=lg,fgColor:h=rg,includeMargin:m=cg,minVersion:p=ug,boostLevel:y,marginSize:v,imageSettings:j}=l,T=Ff(l,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","marginSize","imageSettings"]),{style:O}=T,B=Ff(T,["style"]),J=j==null?void 0:j.src,F=Mn.useRef(null),z=Mn.useRef(null),ie=Mn.useCallback(me=>{F.current=me,typeof i=="function"?i(me):i&&(i.current=me)},[i]),[ge,Y]=Mn.useState(!1),{margin:fe,cells:ye,numCells:xe,calculatedImageSettings:ue}=hg({value:c,level:_,minVersion:p,boostLevel:y,includeMargin:m,marginSize:v,imageSettings:j,size:u});Mn.useEffect(()=>{if(F.current!=null){const me=F.current,Se=me.getContext("2d");if(!Se)return;let N=ye;const ce=z.current,W=ue!=null&&ce!==null&&ce.complete&&ce.naturalHeight!==0&&ce.naturalWidth!==0;W&&ue.excavation!=null&&(N=fg(ye,ue.excavation));const be=window.devicePixelRatio||1;me.height=me.width=u*be;const Ae=u/xe*be;Se.scale(Ae,Ae),Se.fillStyle=g,Se.fillRect(0,0,xe,xe),Se.fillStyle=h,y5?Se.fill(new Path2D(dg(N,fe))):ye.forEach(function(A,Z){A.forEach(function(_e,je){_e&&Se.fillRect(je+fe,Z+fe,1,1)})}),ue&&(Se.globalAlpha=ue.opacity),W&&Se.drawImage(ce,ue.x+fe,ue.y+fe,ue.w,ue.h)}}),Mn.useEffect(()=>{Y(!1)},[J]);const K=Gf({height:u,width:u},O);let Ue=null;return J!=null&&(Ue=Mn.createElement("img",{src:J,key:J,style:{display:"none"},onLoad:()=>{Y(!0)},ref:z,crossOrigin:ue==null?void 0:ue.crossOrigin})),Mn.createElement(Mn.Fragment,null,Mn.createElement("canvas",Gf({style:K,height:u,width:u,ref:ie,role:"img"},B)),Ue)});x5.displayName="QRCodeCanvas";var _g=Mn.forwardRef(function(n,i){const l=n,{value:c,size:u=ig,level:_=ag,bgColor:g=lg,fgColor:h=rg,includeMargin:m=cg,minVersion:p=ug,boostLevel:y,title:v,marginSize:j,imageSettings:k}=l,T=Ff(l,["value","size","level","bgColor","fgColor","includeMargin","minVersion","boostLevel","title","marginSize","imageSettings"]),{margin:O,cells:B,numCells:J,calculatedImageSettings:F}=hg({value:c,level:_,minVersion:p,boostLevel:y,includeMargin:m,marginSize:j,imageSettings:k,size:u});let z=B,ie=null;k!=null&&F!=null&&(F.excavation!=null&&(z=fg(B,F.excavation)),ie=Mn.createElement("image",{href:k.src,height:F.h,width:F.w,x:F.x+O,y:F.y+O,preserveAspectRatio:"none",opacity:F.opacity,crossOrigin:F.crossOrigin}));const ge=dg(z,O);return Mn.createElement("svg",Gf({height:u,width:u,viewBox:`0 0 ${J} ${J}`,ref:i,role:"img"},T),!!v&&Mn.createElement("title",null,v),Mn.createElement("path",{fill:g,d:`M0,0 h${J}v${J}H0z`,shapeRendering:"crispEdges"}),Mn.createElement("path",{fill:h,d:ge,shapeRendering:"crispEdges"}),ie)});_g.displayName="QRCodeSVG";const b5=({isOpen:o,onClose:n,roomId:i,isConnected:l})=>{const[c,u]=b.useState(""),[_,g]=b.useState(!1);if(b.useEffect(()=>{if(typeof window<"u"){const m=`${window.location.origin}/controller?room=${i}`;u(m)}},[i]),!o)return null;const h=()=>{navigator.clipboard.writeText(c),g(!0),setTimeout(()=>g(!1),2e3)};return r.jsx("div",{className:"fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200 pointer-events-auto",children:r.jsxs("div",{className:"bg-[#0b0f0c] border border-emerald-500/40 rounded-3xl max-w-md w-full p-6 shadow-2xl flex flex-col items-center gap-5 relative text-slate-100 font-sans",children:[r.jsx("button",{onClick:n,className:"absolute top-4 right-4 p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-100 transition cursor-pointer",children:r.jsx(u5,{className:"w-5 h-5"})}),r.jsxs("div",{className:"flex flex-col items-center gap-1.5 text-center mt-2",children:[r.jsx("div",{className:"w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400",children:r.jsx(ng,{className:"w-6 h-6"})}),r.jsx("h2",{className:"text-xl font-extrabold tracking-tight",children:"Hubungkan HP sebagai Stik Gamepad"}),r.jsx("p",{className:"text-xs text-slate-400 max-w-xs",children:"Pindai QR Code di bawah dengan kamera HP Anda untuk menjadikan HP sebagai stik stik controller virtual!"})]}),r.jsx("div",{className:"w-full flex items-center justify-center",children:l?r.jsxs("div",{className:"bg-emerald-500/15 border border-emerald-500/60 rounded-xl px-4 py-2 flex items-center gap-2 text-emerald-400 text-xs font-bold animate-pulse",children:[r.jsx(Ub,{className:"w-4 h-4"}),r.jsx("span",{children:"🟢 HP Terhubung! (Controller Ready)"})]}):r.jsxs("div",{className:"bg-amber-500/10 border border-amber-500/40 rounded-xl px-4 py-2 flex items-center gap-2 text-amber-400 text-xs font-semibold",children:[r.jsx("span",{className:"w-2 h-2 rounded-full bg-amber-400 animate-ping"}),r.jsx("span",{children:"Menunggu Koneksi dari HP..."})]})}),r.jsx("div",{className:"bg-white p-4 rounded-2xl border-4 border-slate-800 shadow-inner flex items-center justify-center",children:c?r.jsx(_g,{value:c,size:180,level:"M"}):r.jsx("div",{className:"w-[180px] h-[180px] bg-slate-100 flex items-center justify-center text-slate-400 text-xs",children:"Generating QR..."})}),r.jsxs("div",{className:"w-full flex flex-col items-center gap-2",children:[r.jsxs("div",{className:"bg-slate-900 border border-slate-800 rounded-xl px-5 py-2.5 flex items-center justify-between w-full font-mono text-sm",children:[r.jsx("span",{className:"text-slate-400 text-xs font-bold",children:"ROOM CODE:"}),r.jsx("span",{className:"text-cyan-400 font-extrabold text-lg tracking-widest",children:i})]}),r.jsxs("button",{onClick:h,className:"w-full py-2.5 px-4 bg-slate-900 border border-slate-700/80 hover:border-emerald-500/50 rounded-xl text-xs font-bold text-slate-300 hover:text-emerald-400 transition cursor-pointer flex items-center justify-center gap-2",children:[r.jsx(Yb,{className:"w-4 h-4"}),r.jsx("span",{children:_?"Link Tersalin!":"Salin URL Controller"})]})]})]})})},v5=({matchState:o,showHUD:n,onToggleHUD:i,onResetMatch:l,peerRoomId:c="8492",isPeerConnected:u=!1})=>{const[_,g]=b.useState(!1),[h,m]=b.useState(!1);b.useEffect(()=>{const v=()=>{g(!!document.fullscreenElement)};return document.addEventListener("fullscreenchange",v),()=>document.removeEventListener("fullscreenchange",v)},[]);const p=()=>{document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen().catch(v=>{console.warn("Exit fullscreen failed:",v)}):document.documentElement.requestFullscreen().catch(v=>{console.warn("Fullscreen request failed:",v)})},y=v=>{const j=Math.floor(v/60),k=Math.floor(v%60);return`${j}:${k.toString().padStart(2,"0")}`};return r.jsxs(r.Fragment,{children:[r.jsx(b5,{isOpen:h,onClose:()=>m(!1),roomId:c,isConnected:u}),r.jsxs("div",{className:"fixed top-4 left-0 right-0 z-40 pointer-events-none flex flex-col items-center gap-3 px-4",children:[r.jsxs("div",{className:"flex items-center justify-center gap-3 pointer-events-auto",children:[r.jsxs("button",{onClick:()=>m(!0),className:`glass-card h-11 px-3.5 rounded-2xl border transition cursor-pointer shadow-2xl flex items-center gap-2 font-mono text-xs font-bold ${u?"border-emerald-500/80 bg-emerald-950/80 text-emerald-300":"border-cyan-500/40 bg-[#0b0f0c]/90 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950"}`,title:"Hubungkan HP sebagai Gamepad",children:[r.jsx(ng,{className:"w-5 h-5"}),r.jsx("span",{className:"hidden sm:inline",children:u?"HP Connected":"Connect HP"})]}),r.jsx("button",{onClick:p,className:"glass-card w-11 h-11 rounded-2xl border border-emerald-500/40 bg-[#0b0f0c]/90 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 transition cursor-pointer shadow-2xl flex items-center justify-center",title:_?"Exit Fullscreen":"Layar Penuh (Fullscreen)",children:_?r.jsx(Jb,{className:"w-5 h-5"}):r.jsx(Kb,{className:"w-5 h-5"})}),r.jsx("button",{onClick:i,className:"glass-card w-11 h-11 rounded-2xl border border-slate-700/80 bg-[#0b0f0c]/90 text-slate-200 hover:text-cyan-400 hover:border-cyan-500/50 transition cursor-pointer shadow-2xl flex items-center justify-center",title:n?"Sembunyikan HUD Debug":"Tampilkan HUD Debug",children:n?r.jsx(Gb,{className:"w-5 h-5 text-cyan-400"}):r.jsx(Wb,{className:"w-5 h-5 text-slate-400"})}),r.jsxs("div",{className:"bg-[#0b0f0c] border border-slate-800/90 px-6 py-2.5 rounded-[22px] shadow-2xl flex flex-col items-center gap-1 font-sans min-w-[130px] border-emerald-500/20 backdrop-blur-md",children:[r.jsxs("div",{className:"flex items-center gap-3 text-2xl font-black tracking-tight leading-none",children:[r.jsx("span",{className:"text-[#ef4444]",children:o.scoreHome}),r.jsx("span",{className:"text-slate-100 font-bold text-sm",children:"-"}),r.jsx("span",{className:"text-[#60a5fa]",children:o.scoreAway})]}),r.jsxs("div",{className:"flex items-center gap-2 mt-0.5",children:[r.jsx("div",{className:"flex items-center gap-1",children:[1,2,3].map(v=>r.jsx("span",{className:`w-2.5 h-2.5 rounded-full transition-all duration-300 ${o.scoreHome>=v?"bg-[#ef4444] shadow-sm shadow-red-500/80 scale-105":"bg-[#374151]"}`},`home-dot-${v}`))}),r.jsx("div",{className:"flex items-center gap-1",children:[1,2,3].map(v=>r.jsx("span",{className:`w-2.5 h-2.5 rounded-full transition-all duration-300 ${o.scoreAway>=v?"bg-[#60a5fa] shadow-sm shadow-blue-500/80 scale-105":"bg-[#374151]"}`},`away-dot-${v}`))})]}),r.jsx("div",{className:"text-slate-100 text-xs font-bold tracking-wider font-mono mt-0.5",children:y(o.timerSeconds)})]}),r.jsx("button",{onClick:l,className:"w-11 h-11 bg-gradient-to-r from-emerald-500 to-teal-500 hover:brightness-110 text-slate-950 font-bold rounded-2xl shadow-2xl transition cursor-pointer flex items-center justify-center",title:"Reset Match",children:r.jsx(i5,{className:"w-5 h-5"})})]}),n&&r.jsxs("div",{className:"max-w-xl w-full flex flex-col gap-2 mt-1 pointer-events-auto animate-in fade-in slide-in-from-top-2 duration-150",children:[r.jsxs("div",{className:"bg-slate-900/95 border-2 border-cyan-400/80 rounded-xl px-5 py-2.5 font-mono text-xs text-cyan-300 flex items-center justify-between shadow-2xl backdrop-blur-xl",children:[r.jsxs("span",{className:"font-extrabold tracking-wide",children:["⚡ [LIVE INPUT]:"," ",r.jsx("span",{className:"text-emerald-300 font-bold bg-slate-950 border border-emerald-500/50 px-2.5 py-0.5 rounded-md ml-1 shadow-inner",children:o.debugInputText||"Menunggu Tombol Controller..."})]}),r.jsx("span",{className:"text-slate-400 text-[11px] font-semibold",children:u?"📱 HP Remote Connected!":"P1 Ctrl 0 | P2 Teammate"})]}),r.jsxs("div",{className:"bg-slate-900/90 border border-slate-700/80 rounded-xl px-4 py-1.5 font-mono text-[11px] text-slate-300 flex items-center justify-between shadow-xl backdrop-blur-md",children:[r.jsxs("span",{className:"font-semibold text-slate-200",children:["[LOG]: ",o.logMessage]}),r.jsx("span",{className:"text-amber-400 font-bold",children:"RB/R1/LB = ReqPass | Start = HUD"})]})]}),o.state==="GAME_OVER"&&r.jsx("div",{className:"fixed inset-0 bg-slate-950/90 backdrop-blur-lg z-50 flex items-center justify-center p-4 pointer-events-auto",children:r.jsxs("div",{className:"glass-card max-w-md w-full p-8 rounded-2xl border-2 border-emerald-500/50 text-center flex flex-col items-center gap-5 shadow-2xl animate-in fade-in zoom-in duration-200",children:[r.jsx("div",{className:"w-16 h-16 bg-emerald-500/20 border border-emerald-500/50 rounded-full flex items-center justify-center text-3xl shadow-lg",children:"⚽"}),r.jsx("h2",{className:"text-2xl font-extrabold text-slate-100 tracking-tight",children:"GAME OVER"}),r.jsx("p",{className:"text-lg font-bold text-emerald-400 font-mono",children:o.winnerTitle}),r.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-4 w-full text-center font-mono text-sm",children:[r.jsx("div",{className:"text-slate-500 text-xs font-bold",children:"TOTAL GOALS SCORED"}),r.jsx("div",{className:"text-cyan-400 font-extrabold text-3xl mt-1",children:o.scoreHome})]}),r.jsx("button",{onClick:l,className:"w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-extrabold rounded-xl text-sm shadow-xl hover:brightness-110 transition cursor-pointer",children:"🎮 Reset Arena"})]})})]})]})};class w5{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[]}append_buffer(n){this.flush(),this._parts.push(n)}append(n){this._pieces.push(n)}flush(){if(this._pieces.length>0){const n=new Uint8Array(this._pieces);this._parts.push(n),this._pieces=[]}}toArrayBuffer(){const n=[];for(const i of this._parts)n.push(i);return S5(n).buffer}}function S5(o){let n=0;for(const c of o)n+=c.byteLength;const i=new Uint8Array(n);let l=0;for(const c of o){const u=new Uint8Array(c.buffer,c.byteOffset,c.byteLength);i.set(u,l),l+=c.byteLength}return i}function mg(o){return new k5(o).unpack()}function pg(o){const n=new C5,i=n.pack(o);return i instanceof Promise?i.then(()=>n.getBuffer()):n.getBuffer()}class k5{constructor(n){this.index=0,this.dataBuffer=n,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}unpack(){const n=this.unpack_uint8();if(n<128)return n;if((n^224)<32)return(n^224)-32;let i;if((i=n^160)<=15)return this.unpack_raw(i);if((i=n^176)<=15)return this.unpack_string(i);if((i=n^144)<=15)return this.unpack_array(i);if((i=n^128)<=15)return this.unpack_map(i);switch(n){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return i=this.unpack_uint16(),this.unpack_string(i);case 217:return i=this.unpack_uint32(),this.unpack_string(i);case 218:return i=this.unpack_uint16(),this.unpack_raw(i);case 219:return i=this.unpack_uint32(),this.unpack_raw(i);case 220:return i=this.unpack_uint16(),this.unpack_array(i);case 221:return i=this.unpack_uint32(),this.unpack_array(i);case 222:return i=this.unpack_uint16(),this.unpack_map(i);case 223:return i=this.unpack_uint32(),this.unpack_map(i)}}unpack_uint8(){const n=this.dataView[this.index]&255;return this.index++,n}unpack_uint16(){const n=this.read(2),i=(n[0]&255)*256+(n[1]&255);return this.index+=2,i}unpack_uint32(){const n=this.read(4),i=((n[0]*256+n[1])*256+n[2])*256+n[3];return this.index+=4,i}unpack_uint64(){const n=this.read(8),i=((((((n[0]*256+n[1])*256+n[2])*256+n[3])*256+n[4])*256+n[5])*256+n[6])*256+n[7];return this.index+=8,i}unpack_int8(){const n=this.unpack_uint8();return n<128?n:n-256}unpack_int16(){const n=this.unpack_uint16();return n<32768?n:n-65536}unpack_int32(){const n=this.unpack_uint32();return n<2**31?n:n-2**32}unpack_int64(){const n=this.unpack_uint64();return n<2**63?n:n-2**64}unpack_raw(n){if(this.length<this.index+n)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${n} ${this.length}`);const i=this.dataBuffer.slice(this.index,this.index+n);return this.index+=n,i}unpack_string(n){const i=this.read(n);let l=0,c="",u,_;for(;l<n;)u=i[l],u<160?(_=u,l++):(u^192)<32?(_=(u&31)<<6|i[l+1]&63,l+=2):(u^224)<16?(_=(u&15)<<12|(i[l+1]&63)<<6|i[l+2]&63,l+=3):(_=(u&7)<<18|(i[l+1]&63)<<12|(i[l+2]&63)<<6|i[l+3]&63,l+=4),c+=String.fromCodePoint(_);return this.index+=n,c}unpack_array(n){const i=new Array(n);for(let l=0;l<n;l++)i[l]=this.unpack();return i}unpack_map(n){const i={};for(let l=0;l<n;l++){const c=this.unpack();i[c]=this.unpack()}return i}unpack_float(){const n=this.unpack_uint32(),i=n>>31,l=(n>>23&255)-127,c=n&8388607|8388608;return(i===0?1:-1)*c*2**(l-23)}unpack_double(){const n=this.unpack_uint32(),i=this.unpack_uint32(),l=n>>31,c=(n>>20&2047)-1023,_=(n&1048575|1048576)*2**(c-20)+i*2**(c-52);return(l===0?1:-1)*_}read(n){const i=this.index;if(i+n<=this.length)return this.dataView.subarray(i,i+n);throw new Error("BinaryPackFailure: read index out of range")}}class C5{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(n){if(typeof n=="string")this.pack_string(n);else if(typeof n=="number")Math.floor(n)===n?this.pack_integer(n):this.pack_double(n);else if(typeof n=="boolean")n===!0?this._bufferBuilder.append(195):n===!1&&this._bufferBuilder.append(194);else if(n===void 0)this._bufferBuilder.append(192);else if(typeof n=="object")if(n===null)this._bufferBuilder.append(192);else{const i=n.constructor;if(n instanceof Array){const l=this.pack_array(n);if(l instanceof Promise)return l.then(()=>this._bufferBuilder.flush())}else if(n instanceof ArrayBuffer)this.pack_bin(new Uint8Array(n));else if("BYTES_PER_ELEMENT"in n){const l=n;this.pack_bin(new Uint8Array(l.buffer,l.byteOffset,l.byteLength))}else if(n instanceof Date)this.pack_string(n.toString());else{if(n instanceof Blob)return n.arrayBuffer().then(l=>{this.pack_bin(new Uint8Array(l)),this._bufferBuilder.flush()});if(i==Object||i.toString().startsWith("class")){const l=this.pack_object(n);if(l instanceof Promise)return l.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${i.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof n}" not yet supported`);this._bufferBuilder.flush()}pack_bin(n){const i=n.length;if(i<=15)this.pack_uint8(160+i);else if(i<=65535)this._bufferBuilder.append(218),this.pack_uint16(i);else if(i<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(i);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(n)}pack_string(n){const i=this._textEncoder.encode(n),l=i.length;if(l<=15)this.pack_uint8(176+l);else if(l<=65535)this._bufferBuilder.append(216),this.pack_uint16(l);else if(l<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(l);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(i)}pack_array(n){const i=n.length;if(i<=15)this.pack_uint8(144+i);else if(i<=65535)this._bufferBuilder.append(220),this.pack_uint16(i);else if(i<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(i);else throw new Error("Invalid length");const l=c=>{if(c<i){const u=this.pack(n[c]);return u instanceof Promise?u.then(()=>l(c+1)):l(c+1)}};return l(0)}pack_integer(n){if(n>=-32&&n<=127)this._bufferBuilder.append(n&255);else if(n>=0&&n<=255)this._bufferBuilder.append(204),this.pack_uint8(n);else if(n>=-128&&n<=127)this._bufferBuilder.append(208),this.pack_int8(n);else if(n>=0&&n<=65535)this._bufferBuilder.append(205),this.pack_uint16(n);else if(n>=-32768&&n<=32767)this._bufferBuilder.append(209),this.pack_int16(n);else if(n>=0&&n<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(n);else if(n>=-2147483648&&n<=2147483647)this._bufferBuilder.append(210),this.pack_int32(n);else if(n>=-9223372036854776e3&&n<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(n);else if(n>=0&&n<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(n);else throw new Error("Invalid integer")}pack_double(n){let i=0;n<0&&(i=1,n=-n);const l=Math.floor(Math.log(n)/Math.LN2),c=n/2**l-1,u=Math.floor(c*2**52),_=2**32,g=i<<31|l+1023<<20|u/_&1048575,h=u%_;this._bufferBuilder.append(203),this.pack_int32(g),this.pack_int32(h)}pack_object(n){const i=Object.keys(n),l=i.length;if(l<=15)this.pack_uint8(128+l);else if(l<=65535)this._bufferBuilder.append(222),this.pack_uint16(l);else if(l<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(l);else throw new Error("Invalid length");const c=u=>{if(u<i.length){const _=i[u];if(n.hasOwnProperty(_)){this.pack(_);const g=this.pack(n[_]);if(g instanceof Promise)return g.then(()=>c(u+1))}return c(u+1)}};return c(0)}pack_uint8(n){this._bufferBuilder.append(n)}pack_uint16(n){this._bufferBuilder.append(n>>8),this._bufferBuilder.append(n&255)}pack_uint32(n){const i=n&4294967295;this._bufferBuilder.append((i&4278190080)>>>24),this._bufferBuilder.append((i&16711680)>>>16),this._bufferBuilder.append((i&65280)>>>8),this._bufferBuilder.append(i&255)}pack_uint64(n){const i=n/4294967296,l=n%2**32;this._bufferBuilder.append((i&4278190080)>>>24),this._bufferBuilder.append((i&16711680)>>>16),this._bufferBuilder.append((i&65280)>>>8),this._bufferBuilder.append(i&255),this._bufferBuilder.append((l&4278190080)>>>24),this._bufferBuilder.append((l&16711680)>>>16),this._bufferBuilder.append((l&65280)>>>8),this._bufferBuilder.append(l&255)}pack_int8(n){this._bufferBuilder.append(n&255)}pack_int16(n){this._bufferBuilder.append((n&65280)>>8),this._bufferBuilder.append(n&255)}pack_int32(n){this._bufferBuilder.append(n>>>24&255),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255)}pack_int64(n){const i=Math.floor(n/4294967296),l=n%2**32;this._bufferBuilder.append((i&4278190080)>>>24),this._bufferBuilder.append((i&16711680)>>>16),this._bufferBuilder.append((i&65280)>>>8),this._bufferBuilder.append(i&255),this._bufferBuilder.append((l&4278190080)>>>24),this._bufferBuilder.append((l&16711680)>>>16),this._bufferBuilder.append((l&65280)>>>8),this._bufferBuilder.append(l&255)}constructor(){this._bufferBuilder=new w5,this._textEncoder=new TextEncoder}}let gg=!0,yg=!0;function ar(o,n,i){const l=o.match(n);return l&&l.length>=i&&parseFloat(l[i],10)}function ta(o,n,i){if(!o.RTCPeerConnection)return;if(!Object.getOwnPropertyDescriptor(EventTarget.prototype,"addEventListener").writable){vh("Unable to polyfill events");return}const c=o.RTCPeerConnection.prototype,u=c.addEventListener;c.addEventListener=function(g,h){if(g!==n)return u.apply(this,arguments);const m=p=>{const y=i(p);y&&(h.handleEvent?h.handleEvent(y):h(y))};return this._eventMap=this._eventMap||{},this._eventMap[n]||(this._eventMap[n]=new Map),this._eventMap[n].set(h,m),u.apply(this,[g,m])};const _=c.removeEventListener;c.removeEventListener=function(g,h){if(g!==n||!this._eventMap||!this._eventMap[n])return _.apply(this,arguments);if(!this._eventMap[n].has(h))return _.apply(this,arguments);const m=this._eventMap[n].get(h);return this._eventMap[n].delete(h),this._eventMap[n].size===0&&delete this._eventMap[n],Object.keys(this._eventMap).length===0&&delete this._eventMap,_.apply(this,[g,m])},Object.defineProperty(c,"on"+n,{get(){return this["_on"+n]},set(g){this["_on"+n]&&(this.removeEventListener(n,this["_on"+n]),delete this["_on"+n]),g&&this.addEventListener(n,this["_on"+n]=g)},enumerable:!0,configurable:!0})}function j5(o){return typeof o!="boolean"?new Error("Argument type: "+typeof o+". Please use a boolean."):(gg=o,o?"adapter.js logging disabled":"adapter.js logging enabled")}function M5(o){return typeof o!="boolean"?new Error("Argument type: "+typeof o+". Please use a boolean."):(yg=!o,"adapter.js deprecation warnings "+(o?"disabled":"enabled"))}function vh(){if(typeof window=="object"){if(gg)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function wh(o,n){yg&&console.warn(o+" is deprecated, please use "+n+" instead.")}function T5(o){const n={browser:null,version:null};if(typeof o>"u"||!o.navigator||!o.navigator.userAgent)return n.browser="Not a browser.",n;const{navigator:i}=o;if(i.userAgentData&&i.userAgentData.brands){const l=i.userAgentData.brands.find(c=>c.brand==="Chromium");if(l){const c=parseInt(l.version,10);if(c>=90)return{browser:"chrome",version:c}}}if(i.mozGetUserMedia)n.browser="firefox",n.version=parseInt(ar(i.userAgent,/Firefox\/(\d+)\./,1));else if(i.webkitGetUserMedia||o.isSecureContext===!1&&o.webkitRTCPeerConnection)n.browser="chrome",n.version=parseInt(ar(i.userAgent,/Chrom(e|ium)\/(\d+)\./,2))||null;else if(o.RTCPeerConnection&&i.userAgent.match(/AppleWebKit\/(\d+)\./))n.browser="safari",n.version=parseInt(ar(i.userAgent,/AppleWebKit\/(\d+)\./,1)),n.supportsUnifiedPlan=o.RTCRtpTransceiver&&"currentDirection"in o.RTCRtpTransceiver.prototype,n._safariVersion=ar(i.userAgent,/Version\/(\d+(\.?\d+))/,1);else return n.browser="Not a supported browser.",n;return n}function Zp(o){return Object.prototype.toString.call(o)==="[object Object]"}function xg(o){return Zp(o)?Object.keys(o).reduce(function(n,i){const l=Zp(o[i]),c=l?xg(o[i]):o[i],u=l&&!Object.keys(c).length;return c===void 0||u?n:Object.assign(n,{[i]:c})},{}):o}function Wf(o,n,i){!n||i.has(n.id)||(i.set(n.id,n),Object.keys(n).forEach(l=>{l.endsWith("Id")?Wf(o,o.get(n[l]),i):l.endsWith("Ids")&&n[l].forEach(c=>{Wf(o,o.get(c),i)})}))}function Jp(o,n,i){const l=i?"outbound-rtp":"inbound-rtp",c=new Map;if(n===null)return c;const u=[];return o.forEach(_=>{_.type==="track"&&_.trackIdentifier===n.id&&u.push(_)}),u.forEach(_=>{o.forEach(g=>{g.type===l&&g.trackId===_.id&&Wf(o,g,c)})}),c}const e0=vh;function bg(o,n){if(n.version>=64)return;const i=o&&o.navigator;if(!i.mediaDevices)return;const l=function(g){if(typeof g!="object"||g.mandatory||g.optional)return g;const h={};return Object.keys(g).forEach(m=>{if(m==="require"||m==="advanced"||m==="mediaSource")return;const p=typeof g[m]=="object"?g[m]:{ideal:g[m]};p.exact!==void 0&&typeof p.exact=="number"&&(p.min=p.max=p.exact);const y=function(v,j){return v?v+j.charAt(0).toUpperCase()+j.slice(1):j==="deviceId"?"sourceId":j};if(p.ideal!==void 0){h.optional=h.optional||[];let v={};typeof p.ideal=="number"?(v[y("min",m)]=p.ideal,h.optional.push(v),v={},v[y("max",m)]=p.ideal,h.optional.push(v)):(v[y("",m)]=p.ideal,h.optional.push(v))}p.exact!==void 0&&typeof p.exact!="number"?(h.mandatory=h.mandatory||{},h.mandatory[y("",m)]=p.exact):["min","max"].forEach(v=>{p[v]!==void 0&&(h.mandatory=h.mandatory||{},h.mandatory[y(v,m)]=p[v])})}),g.advanced&&(h.optional=(h.optional||[]).concat(g.advanced)),h},c=function(g,h){if(n.version>=61)return h(g);if(g=JSON.parse(JSON.stringify(g)),g&&typeof g.audio=="object"){const m=function(p,y,v){y in p&&!(v in p)&&(p[v]=p[y],delete p[y])};g=JSON.parse(JSON.stringify(g)),m(g.audio,"autoGainControl","googAutoGainControl"),m(g.audio,"noiseSuppression","googNoiseSuppression"),g.audio=l(g.audio)}if(g&&typeof g.video=="object"){let m=g.video.facingMode;m=m&&(typeof m=="object"?m:{ideal:m});const p=n.version<66;if(m&&(m.exact==="user"||m.exact==="environment"||m.ideal==="user"||m.ideal==="environment")&&!(i.mediaDevices.getSupportedConstraints&&i.mediaDevices.getSupportedConstraints().facingMode&&!p)){delete g.video.facingMode;let y;if(m.exact==="environment"||m.ideal==="environment"?y=["back","rear"]:(m.exact==="user"||m.ideal==="user")&&(y=["front"]),y)return i.mediaDevices.enumerateDevices().then(v=>{v=v.filter(k=>k.kind==="videoinput");let j=v.find(k=>y.some(T=>k.label.toLowerCase().includes(T)));return!j&&v.length&&y.includes("back")&&(j=v[v.length-1]),j&&(g.video.deviceId=m.exact?{exact:j.deviceId}:{ideal:j.deviceId}),g.video=l(g.video),e0("chrome: "+JSON.stringify(g)),h(g)})}g.video=l(g.video)}return e0("chrome: "+JSON.stringify(g)),h(g)},u=function(g){return n.version>=64?g:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[g.name]||g.name,message:g.message,constraint:g.constraint||g.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},_=function(g,h,m){c(g,p=>{i.webkitGetUserMedia(p,h,y=>{m&&m(u(y))})})};if(i.getUserMedia=_.bind(i),i.mediaDevices.getUserMedia){const g=i.mediaDevices.getUserMedia.bind(i.mediaDevices);i.mediaDevices.getUserMedia=function(h){return c(h,m=>g(m).then(p=>{if(m.audio&&!p.getAudioTracks().length||m.video&&!p.getVideoTracks().length)throw p.getTracks().forEach(y=>{y.stop()}),new DOMException("","NotFoundError");return p},p=>Promise.reject(u(p))))}}}function vg(o){o.MediaStream=o.MediaStream||o.webkitMediaStream}function wg(o,n){if(!(n.version>102))if(typeof o=="object"&&o.RTCPeerConnection&&!("ontrack"in o.RTCPeerConnection.prototype)){Object.defineProperty(o.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(l){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=l)},enumerable:!0,configurable:!0});const i=o.RTCPeerConnection.prototype.setRemoteDescription;o.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=c=>{c.stream.addEventListener("addtrack",u=>{let _;o.RTCPeerConnection.prototype.getReceivers?_=this.getReceivers().find(h=>h.track&&h.track.id===u.track.id):_={track:u.track};const g=new Event("track");g.track=u.track,g.receiver=_,g.transceiver={receiver:_},g.streams=[c.stream],this.dispatchEvent(g)}),c.stream.getTracks().forEach(u=>{let _;o.RTCPeerConnection.prototype.getReceivers?_=this.getReceivers().find(h=>h.track&&h.track.id===u.id):_={track:u};const g=new Event("track");g.track=u,g.receiver=_,g.transceiver={receiver:_},g.streams=[c.stream],this.dispatchEvent(g)})},this.addEventListener("addstream",this._ontrackpoly)),i.apply(this,arguments)}}else ta(o,"track",i=>(i.transceiver||Object.defineProperty(i,"transceiver",{value:{receiver:i.receiver}}),i))}function Sg(o){if(typeof o=="object"&&o.RTCPeerConnection&&!("getSenders"in o.RTCPeerConnection.prototype)&&"createDTMFSender"in o.RTCPeerConnection.prototype){const n=function(c,u){return{track:u,get dtmf(){return this._dtmf===void 0&&(u.kind==="audio"?this._dtmf=c.createDTMFSender(u):this._dtmf=null),this._dtmf},_pc:c}};if(!o.RTCPeerConnection.prototype.getSenders){o.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const c=o.RTCPeerConnection.prototype.addTrack;o.RTCPeerConnection.prototype.addTrack=function(g,h){let m=c.apply(this,arguments);return m||(m=n(this,g),this._senders.push(m)),m};const u=o.RTCPeerConnection.prototype.removeTrack;o.RTCPeerConnection.prototype.removeTrack=function(g){u.apply(this,arguments);const h=this._senders.indexOf(g);h!==-1&&this._senders.splice(h,1)}}const i=o.RTCPeerConnection.prototype.addStream;o.RTCPeerConnection.prototype.addStream=function(u){this._senders=this._senders||[],i.apply(this,[u]),u.getTracks().forEach(_=>{this._senders.push(n(this,_))})};const l=o.RTCPeerConnection.prototype.removeStream;o.RTCPeerConnection.prototype.removeStream=function(u){this._senders=this._senders||[],l.apply(this,[u]),u.getTracks().forEach(_=>{const g=this._senders.find(h=>h.track===_);g&&this._senders.splice(this._senders.indexOf(g),1)})}}else if(typeof o=="object"&&o.RTCPeerConnection&&"getSenders"in o.RTCPeerConnection.prototype&&"createDTMFSender"in o.RTCPeerConnection.prototype&&o.RTCRtpSender&&!("dtmf"in o.RTCRtpSender.prototype)){const n=o.RTCPeerConnection.prototype.getSenders;o.RTCPeerConnection.prototype.getSenders=function(){const l=n.apply(this,[]);return l.forEach(c=>c._pc=this),l},Object.defineProperty(o.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function kg(o,n){if(n.version>=67||!(typeof o=="object"&&o.RTCPeerConnection&&o.RTCRtpSender&&o.RTCRtpReceiver))return;if(!("getStats"in o.RTCRtpSender.prototype)){const l=o.RTCPeerConnection.prototype.getSenders;l&&(o.RTCPeerConnection.prototype.getSenders=function(){const _=l.apply(this,[]);return _.forEach(g=>g._pc=this),_});const c=o.RTCPeerConnection.prototype.addTrack;c&&(o.RTCPeerConnection.prototype.addTrack=function(){const _=c.apply(this,arguments);return _._pc=this,_}),o.RTCRtpSender.prototype.getStats=function(){const _=this;return this._pc.getStats().then(g=>Jp(g,_.track,!0))}}if(!("getStats"in o.RTCRtpReceiver.prototype)){const l=o.RTCPeerConnection.prototype.getReceivers;l&&(o.RTCPeerConnection.prototype.getReceivers=function(){const u=l.apply(this,[]);return u.forEach(_=>_._pc=this),u}),ta(o,"track",c=>(c.receiver._pc=c.srcElement,c)),o.RTCRtpReceiver.prototype.getStats=function(){const u=this;return this._pc.getStats().then(_=>Jp(_,u.track,!1))}}if(!("getStats"in o.RTCRtpSender.prototype&&"getStats"in o.RTCRtpReceiver.prototype))return;const i=o.RTCPeerConnection.prototype.getStats;o.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof o.MediaStreamTrack){const c=arguments[0];let u,_,g;return this.getSenders().forEach(h=>{h.track===c&&(u?g=!0:u=h)}),this.getReceivers().forEach(h=>(h.track===c&&(_?g=!0:_=h),h.track===c)),g||u&&_?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):u?u.getStats():_?_.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return i.apply(this,arguments)}}function Cg(o){o.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(_=>this._shimmedLocalStreams[_][0])};const n=o.RTCPeerConnection.prototype.addTrack;o.RTCPeerConnection.prototype.addTrack=function(_,g){if(!g)return n.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const h=n.apply(this,arguments);return this._shimmedLocalStreams[g.id]?this._shimmedLocalStreams[g.id].indexOf(h)===-1&&this._shimmedLocalStreams[g.id].push(h):this._shimmedLocalStreams[g.id]=[g,h],h};const i=o.RTCPeerConnection.prototype.addStream;o.RTCPeerConnection.prototype.addStream=function(_){this._shimmedLocalStreams=this._shimmedLocalStreams||{},_.getTracks().forEach(m=>{if(this.getSenders().find(y=>y.track===m))throw new DOMException("Track already exists.","InvalidAccessError")});const g=this.getSenders();i.apply(this,arguments);const h=this.getSenders().filter(m=>g.indexOf(m)===-1);this._shimmedLocalStreams[_.id]=[_].concat(h)};const l=o.RTCPeerConnection.prototype.removeStream;o.RTCPeerConnection.prototype.removeStream=function(_){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[_.id],l.apply(this,arguments)};const c=o.RTCPeerConnection.prototype.removeTrack;o.RTCPeerConnection.prototype.removeTrack=function(_){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},_&&Object.keys(this._shimmedLocalStreams).forEach(g=>{const h=this._shimmedLocalStreams[g].indexOf(_);h!==-1&&this._shimmedLocalStreams[g].splice(h,1),this._shimmedLocalStreams[g].length===1&&delete this._shimmedLocalStreams[g]}),c.apply(this,arguments)}}function jg(o,n){if(!o.RTCPeerConnection)return;if(o.RTCPeerConnection.prototype.addTrack&&n.version>=65)return Cg(o);const i=o.RTCPeerConnection.prototype.getLocalStreams;o.RTCPeerConnection.prototype.getLocalStreams=function(){const p=i.apply(this);return this._reverseStreams=this._reverseStreams||{},p.map(y=>this._reverseStreams[y.id])};const l=o.RTCPeerConnection.prototype.addStream;o.RTCPeerConnection.prototype.addStream=function(p){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},p.getTracks().forEach(y=>{if(this.getSenders().find(j=>j.track===y))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[p.id]){const y=new o.MediaStream(p.getTracks());this._streams[p.id]=y,this._reverseStreams[y.id]=p,p=y}l.apply(this,[p])};const c=o.RTCPeerConnection.prototype.removeStream;o.RTCPeerConnection.prototype.removeStream=function(p){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},c.apply(this,[this._streams[p.id]||p]),delete this._reverseStreams[this._streams[p.id]?this._streams[p.id].id:p.id],delete this._streams[p.id]},o.RTCPeerConnection.prototype.addTrack=function(p,y){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const v=[].slice.call(arguments,1);if(v.length!==1||!v[0].getTracks().find(T=>T===p))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(T=>T.track===p))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const k=this._streams[y.id];if(k)k.addTrack(p),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const T=new o.MediaStream([p]);this._streams[y.id]=T,this._reverseStreams[T.id]=y,this.addStream(T)}return this.getSenders().find(T=>T.track===p)};function u(m,p){let y=p.sdp;return Object.keys(m._reverseStreams||[]).forEach(v=>{const j=m._reverseStreams[v],k=m._streams[j.id];y=y.replace(new RegExp(k.id,"g"),j.id)}),new RTCSessionDescription({type:p.type,sdp:y})}function _(m,p){let y=p.sdp;return Object.keys(m._reverseStreams||[]).forEach(v=>{const j=m._reverseStreams[v],k=m._streams[j.id];y=y.replace(new RegExp(j.id,"g"),k.id)}),new RTCSessionDescription({type:p.type,sdp:y})}["createOffer","createAnswer"].forEach(function(m){const p=o.RTCPeerConnection.prototype[m],y={[m](){const v=arguments;return arguments.length&&typeof arguments[0]=="function"?p.apply(this,[k=>{const T=u(this,k);v[0].apply(null,[T])},k=>{v[1]&&v[1].apply(null,k)},arguments[2]]):p.apply(this,arguments).then(k=>u(this,k))}};o.RTCPeerConnection.prototype[m]=y[m]});const g=o.RTCPeerConnection.prototype.setLocalDescription;o.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?g.apply(this,arguments):(arguments[0]=_(this,arguments[0]),g.apply(this,arguments))};const h=Object.getOwnPropertyDescriptor(o.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(o.RTCPeerConnection.prototype,"localDescription",{get(){const m=h.get.apply(this);return m.type===""?m:u(this,m)}}),o.RTCPeerConnection.prototype.removeTrack=function(p){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!p._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(p._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let v;Object.keys(this._streams).forEach(j=>{this._streams[j].getTracks().find(T=>p.track===T)&&(v=this._streams[j])}),v&&(v.getTracks().length===1?this.removeStream(this._reverseStreams[v.id]):v.removeTrack(p.track),this.dispatchEvent(new Event("negotiationneeded")))}}function qf(o,n){!o.RTCPeerConnection&&o.webkitRTCPeerConnection&&(o.RTCPeerConnection=o.webkitRTCPeerConnection),o.RTCPeerConnection&&n.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(i){const l=o.RTCPeerConnection.prototype[i],c={[i](){return arguments[0]=new(i==="addIceCandidate"?o.RTCIceCandidate:o.RTCSessionDescription)(arguments[0]),l.apply(this,arguments)}};o.RTCPeerConnection.prototype[i]=c[i]})}function Mg(o,n){n.version>102||ta(o,"negotiationneeded",i=>{const l=i.target;if(!((n.version<72||l.getConfiguration&&l.getConfiguration().sdpSemantics==="plan-b")&&l.signalingState!=="stable"))return i})}const t0=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:Mg,shimAddTrackRemoveTrack:jg,shimAddTrackRemoveTrackWithNative:Cg,shimGetSendersWithDtmf:Sg,shimGetUserMedia:bg,shimMediaStream:vg,shimOnTrack:wg,shimPeerConnection:qf,shimSenderReceiverGetStats:kg},Symbol.toStringTag,{value:"Module"}));function Tg(o,n){const i=o&&o.navigator;if(!i.mediaDevices)return;const l=o&&o.MediaStreamTrack;if(i.getUserMedia=function(c,u,_){wh("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),i.mediaDevices.getUserMedia(c).then(u,_)},!(n.version>55&&"autoGainControl"in i.mediaDevices.getSupportedConstraints())){const c=function(_,g,h){g in _&&!(h in _)&&(_[h]=_[g],delete _[g])},u=i.mediaDevices.getUserMedia.bind(i.mediaDevices);if(i.mediaDevices.getUserMedia=function(_){return typeof _=="object"&&typeof _.audio=="object"&&(_=JSON.parse(JSON.stringify(_)),c(_.audio,"autoGainControl","mozAutoGainControl"),c(_.audio,"noiseSuppression","mozNoiseSuppression")),u(_)},l&&l.prototype.getSettings){const _=l.prototype.getSettings;l.prototype.getSettings=function(){const g=_.apply(this,arguments);return c(g,"mozAutoGainControl","autoGainControl"),c(g,"mozNoiseSuppression","noiseSuppression"),g}}if(l&&l.prototype.applyConstraints){const _=l.prototype.applyConstraints;l.prototype.applyConstraints=function(g){return this.kind==="audio"&&typeof g=="object"&&(g=JSON.parse(JSON.stringify(g)),c(g,"autoGainControl","mozAutoGainControl"),c(g,"noiseSuppression","mozNoiseSuppression")),_.apply(this,[g])}}}}function E5(o,n){o.navigator.mediaDevices&&(o.navigator.mediaDevices&&"getDisplayMedia"in o.navigator.mediaDevices||(o.navigator.mediaDevices.getDisplayMedia=function(l){if(!(l&&l.video)){const c=new DOMException("getDisplayMedia without video constraints is undefined");return c.name="NotFoundError",c.code=8,Promise.reject(c)}return l.video===!0?l.video={mediaSource:n}:l.video.mediaSource=n,o.navigator.mediaDevices.getUserMedia(l)}))}function Eg(o){typeof o=="object"&&o.RTCTrackEvent&&"receiver"in o.RTCTrackEvent.prototype&&!("transceiver"in o.RTCTrackEvent.prototype)&&Object.defineProperty(o.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Qf(o,n){typeof o!="object"||!(o.RTCPeerConnection||o.mozRTCPeerConnection)||(!o.RTCPeerConnection&&o.mozRTCPeerConnection&&(o.RTCPeerConnection=o.mozRTCPeerConnection),n.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(i){const l=o.RTCPeerConnection.prototype[i],c={[i](){return arguments[0]=new(i==="addIceCandidate"?o.RTCIceCandidate:o.RTCSessionDescription)(arguments[0]),l.apply(this,arguments)}};o.RTCPeerConnection.prototype[i]=c[i]}))}function Rg(o,n){if(typeof o!="object"||!(o.RTCPeerConnection||o.mozRTCPeerConnection)||n.version>=151)return;const i={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},l=o.RTCPeerConnection.prototype.getStats;o.RTCPeerConnection.prototype.getStats=function(){const[u,_,g]=arguments;return this.signalingState==="closed"?Promise.resolve(new Map):l.apply(this,[u||null]).then(h=>{if(n.version<53&&!_)try{h.forEach(m=>{m.type=i[m.type]||m.type})}catch(m){if(m.name!=="TypeError")throw m;h.forEach((p,y)=>{h.set(y,Object.assign({},p,{type:i[p.type]||p.type}))})}return h}).then(_,g)}}function Ag(o){if(!(typeof o=="object"&&o.RTCPeerConnection&&o.RTCRtpSender)||o.RTCRtpSender&&"getStats"in o.RTCRtpSender.prototype)return;const n=o.RTCPeerConnection.prototype.getSenders;n&&(o.RTCPeerConnection.prototype.getSenders=function(){const c=n.apply(this,[]);return c.forEach(u=>u._pc=this),c});const i=o.RTCPeerConnection.prototype.addTrack;i&&(o.RTCPeerConnection.prototype.addTrack=function(){const c=i.apply(this,arguments);return c._pc=this,c}),o.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function Dg(o){if(!(typeof o=="object"&&o.RTCPeerConnection&&o.RTCRtpSender)||o.RTCRtpSender&&"getStats"in o.RTCRtpReceiver.prototype)return;const n=o.RTCPeerConnection.prototype.getReceivers;n&&(o.RTCPeerConnection.prototype.getReceivers=function(){const l=n.apply(this,[]);return l.forEach(c=>c._pc=this),l}),ta(o,"track",i=>(i.receiver._pc=i.srcElement,i)),o.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function Ng(o){!o.RTCPeerConnection||"removeStream"in o.RTCPeerConnection.prototype||(o.RTCPeerConnection.prototype.removeStream=function(i){wh("removeStream","removeTrack"),this.getSenders().forEach(l=>{l.track&&i.getTracks().includes(l.track)&&this.removeTrack(l)})})}function Lg(o){o.DataChannel&&!o.RTCDataChannel&&(o.RTCDataChannel=o.DataChannel)}function Og(o,n){if(!(typeof o=="object"&&o.RTCPeerConnection)||n.version>=110)return;const i=o.RTCPeerConnection.prototype.addTransceiver;i&&(o.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let c=arguments[1]&&arguments[1].sendEncodings;c===void 0&&(c=[]),c=[...c];const u=c.length>0;u&&c.forEach(g=>{if("rid"in g&&!/^[a-z0-9]{0,16}$/i.test(g.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in g&&!(parseFloat(g.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in g&&!(parseFloat(g.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const _=i.apply(this,arguments);if(u){const{sender:g}=_,h=g.getParameters();(!("encodings"in h)||h.encodings.length===1&&Object.keys(h.encodings[0]).length===0)&&(h.encodings=c,g.sendEncodings=c,this.setParametersPromises.push(g.setParameters(h).then(()=>{delete g.sendEncodings}).catch(()=>{delete g.sendEncodings})))}return _})}function zg(o,n){if(!(typeof o=="object"&&o.RTCRtpSender)||n.version>=110)return;const i=o.RTCRtpSender.prototype.getParameters;i&&(o.RTCRtpSender.prototype.getParameters=function(){const c=i.apply(this,arguments);return"encodings"in c||(c.encodings=[].concat(this.sendEncodings||[{}])),c})}function Bg(o,n){if(!(typeof o=="object"&&o.RTCPeerConnection)||n.version>=110)return;const i=o.RTCPeerConnection.prototype.createOffer;o.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>i.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):i.apply(this,arguments)}}function $g(o,n){if(!(typeof o=="object"&&o.RTCPeerConnection)||n.version>=110)return;const i=o.RTCPeerConnection.prototype.createAnswer;o.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>i.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):i.apply(this,arguments)}}const n0=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:Og,shimCreateAnswer:$g,shimCreateOffer:Bg,shimGetDisplayMedia:E5,shimGetParameters:zg,shimGetStats:Rg,shimGetUserMedia:Tg,shimOnTrack:Eg,shimPeerConnection:Qf,shimRTCDataChannel:Lg,shimReceiverGetStats:Dg,shimRemoveStream:Ng,shimSenderGetStats:Ag},Symbol.toStringTag,{value:"Module"}));function Pg(o){if(!(typeof o!="object"||!o.RTCPeerConnection)){if("getLocalStreams"in o.RTCPeerConnection.prototype||(o.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in o.RTCPeerConnection.prototype)){const n=o.RTCPeerConnection.prototype.addTrack;o.RTCPeerConnection.prototype.addStream=function(l){this._localStreams||(this._localStreams=[]),this._localStreams.includes(l)||this._localStreams.push(l),l.getAudioTracks().forEach(c=>n.call(this,c,l)),l.getVideoTracks().forEach(c=>n.call(this,c,l))},o.RTCPeerConnection.prototype.addTrack=function(l,...c){return c&&c.forEach(u=>{this._localStreams?this._localStreams.includes(u)||this._localStreams.push(u):this._localStreams=[u]}),n.apply(this,arguments)}}"removeStream"in o.RTCPeerConnection.prototype||(o.RTCPeerConnection.prototype.removeStream=function(i){this._localStreams||(this._localStreams=[]);const l=this._localStreams.indexOf(i);if(l===-1)return;this._localStreams.splice(l,1);const c=i.getTracks();this.getSenders().forEach(u=>{c.includes(u.track)&&this.removeTrack(u)})})}}function Ig(o){if(!(typeof o!="object"||!o.RTCPeerConnection)&&("getRemoteStreams"in o.RTCPeerConnection.prototype||(o.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in o.RTCPeerConnection.prototype))){Object.defineProperty(o.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(i){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=i),this.addEventListener("track",this._onaddstreampoly=l=>{l.streams.forEach(c=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(c))return;this._remoteStreams.push(c);const u=new Event("addstream");u.stream=c,this.dispatchEvent(u)})})}});const n=o.RTCPeerConnection.prototype.setRemoteDescription;o.RTCPeerConnection.prototype.setRemoteDescription=function(){const l=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(c){c.streams.forEach(u=>{if(l._remoteStreams||(l._remoteStreams=[]),l._remoteStreams.indexOf(u)>=0)return;l._remoteStreams.push(u);const _=new Event("addstream");_.stream=u,l.dispatchEvent(_)})}),n.apply(l,arguments)}}}function Ug(o){if(typeof o!="object"||!o.RTCPeerConnection)return;const n=o.RTCPeerConnection.prototype,i=n.createOffer,l=n.createAnswer,c=n.setLocalDescription,u=n.setRemoteDescription,_=n.addIceCandidate;n.createOffer=function(m,p){const y=arguments.length>=2?arguments[2]:arguments[0],v=i.apply(this,[y]);return p?(v.then(m,p),Promise.resolve()):v},n.createAnswer=function(m,p){const y=arguments.length>=2?arguments[2]:arguments[0],v=l.apply(this,[y]);return p?(v.then(m,p),Promise.resolve()):v};let g=function(h,m,p){const y=c.apply(this,[h]);return p?(y.then(m,p),Promise.resolve()):y};n.setLocalDescription=g,g=function(h,m,p){const y=u.apply(this,[h]);return p?(y.then(m,p),Promise.resolve()):y},n.setRemoteDescription=g,g=function(h,m,p){const y=_.apply(this,[h]);return p?(y.then(m,p),Promise.resolve()):y},n.addIceCandidate=g}function Hg(o){const n=o&&o.navigator;if(n.mediaDevices&&n.mediaDevices.getUserMedia){const i=n.mediaDevices,l=i.getUserMedia.bind(i);n.mediaDevices.getUserMedia=c=>l(Yg(c))}!n.getUserMedia&&n.mediaDevices&&n.mediaDevices.getUserMedia&&(n.getUserMedia=(function(l,c,u){n.mediaDevices.getUserMedia(l).then(c,u)}).bind(n))}function Yg(o){return o&&o.video!==void 0?Object.assign({},o,{video:xg(o.video)}):o}function Xg(o){if(!o.RTCPeerConnection)return;const n=o.RTCPeerConnection;o.RTCPeerConnection=function(l,c){if(l&&l.iceServers){const u=[];for(let _=0;_<l.iceServers.length;_++){let g=l.iceServers[_];g.urls===void 0&&g.url?(wh("RTCIceServer.url","RTCIceServer.urls"),g=JSON.parse(JSON.stringify(g)),g.urls=g.url,delete g.url,u.push(g)):u.push(l.iceServers[_])}l.iceServers=u}return new n(l,c)},o.RTCPeerConnection.prototype=n.prototype,"generateCertificate"in n&&Object.defineProperty(o.RTCPeerConnection,"generateCertificate",{get(){return n.generateCertificate}})}function Gg(o){typeof o=="object"&&o.RTCTrackEvent&&"receiver"in o.RTCTrackEvent.prototype&&!("transceiver"in o.RTCTrackEvent.prototype)&&Object.defineProperty(o.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Fg(o){const n=o.RTCPeerConnection.prototype.createOffer;o.RTCPeerConnection.prototype.createOffer=function(l){if(l){typeof l.offerToReceiveAudio<"u"&&(l.offerToReceiveAudio=!!l.offerToReceiveAudio);const c=this.getTransceivers().find(_=>_.receiver.track.kind==="audio");l.offerToReceiveAudio===!1&&c?c.direction==="sendrecv"?c.setDirection?c.setDirection("sendonly"):c.direction="sendonly":c.direction==="recvonly"&&(c.setDirection?c.setDirection("inactive"):c.direction="inactive"):l.offerToReceiveAudio===!0&&!c&&this.addTransceiver("audio",{direction:"recvonly"}),typeof l.offerToReceiveVideo<"u"&&(l.offerToReceiveVideo=!!l.offerToReceiveVideo);const u=this.getTransceivers().find(_=>_.receiver.track.kind==="video");l.offerToReceiveVideo===!1&&u?u.direction==="sendrecv"?u.setDirection?u.setDirection("sendonly"):u.direction="sendonly":u.direction==="recvonly"&&(u.setDirection?u.setDirection("inactive"):u.direction="inactive"):l.offerToReceiveVideo===!0&&!u&&this.addTransceiver("video",{direction:"recvonly"})}return n.apply(this,arguments)}}function Wg(o){typeof o!="object"||o.AudioContext||(o.AudioContext=o.webkitAudioContext)}const s0=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:Wg,shimCallbacksAPI:Ug,shimConstraints:Yg,shimCreateOfferLegacy:Fg,shimGetUserMedia:Hg,shimLocalStreamsAPI:Pg,shimRTCIceServerUrls:Xg,shimRemoteStreamsAPI:Ig,shimTrackEventTransceiver:Gg},Symbol.toStringTag,{value:"Module"}));var Mf={exports:{}},o0;function R5(){return o0||(o0=1,(function(o){const n={};n.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)},n.localCName=n.generateIdentifier(),n.splitLines=function(i){return i.trim().split(`
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
`),l.headerExtensions&&l.headerExtensions.forEach(_=>{c+=n.writeExtmap(_)}),c},n.parseRtpEncodingParameters=function(i){const l=[],c=n.parseRtpParameters(i),u=c.fecMechanisms.indexOf("RED")!==-1,_=c.fecMechanisms.indexOf("ULPFEC")!==-1,g=n.matchPrefix(i,"a=ssrc:").map(v=>n.parseSsrcMedia(v)).filter(v=>v.attribute==="cname"),h=g.length>0&&g[0].ssrc;let m;const p=n.matchPrefix(i,"a=ssrc-group:FID").map(v=>v.substring(17).split(" ").map(k=>parseInt(k,10)));p.length>0&&p[0].length>1&&p[0][0]===h&&(m=p[0][1]),c.codecs.forEach(v=>{if(v.name.toUpperCase()==="RTX"&&v.parameters.apt){let j={ssrc:h,codecPayloadType:parseInt(v.parameters.apt,10)};h&&m&&(j.rtx={ssrc:m}),l.push(j),u&&(j=JSON.parse(JSON.stringify(j)),j.fec={ssrc:h,mechanism:_?"red+ulpfec":"red"},l.push(j))}}),l.length===0&&h&&l.push({ssrc:h});let y=n.matchPrefix(i,"b=");return y.length&&(y[0].indexOf("b=TIAS:")===0?y=parseInt(y[0].substring(7),10):y[0].indexOf("b=AS:")===0?y=parseInt(y[0].substring(5),10)*1e3*.95-2e3*8:y=void 0,l.forEach(v=>{v.maxBitrate=y})),l},n.parseRtcpParameters=function(i){const l={},c=n.matchPrefix(i,"a=ssrc:").map(g=>n.parseSsrcMedia(g)).filter(g=>g.attribute==="cname")[0];c&&(l.cname=c.value,l.ssrc=c.ssrc);const u=n.matchPrefix(i,"a=rtcp-rsize");l.reducedSize=u.length>0,l.compound=u.length===0;const _=n.matchPrefix(i,"a=rtcp-mux");return l.mux=_.length>0,l},n.writeRtcpParameters=function(i){let l="";return i.reducedSize&&(l+=`a=rtcp-rsize\r
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
`},n.getDirection=function(i,l){const c=n.splitLines(i);for(let u=0;u<c.length;u++)switch(c[u]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return c[u].substring(2)}return l?n.getDirection(l):"sendrecv"},n.getKind=function(i){return n.splitLines(i)[0].split(" ")[0].substring(2)},n.isRejected=function(i){return i.split(" ",2)[1]==="0"},n.parseMLine=function(i){const c=n.splitLines(i)[0].substring(2).split(" ");return{kind:c[0],port:parseInt(c[1],10),protocol:c[2],fmt:c.slice(3).join(" ")}},n.parseOLine=function(i){const c=n.matchPrefix(i,"o=")[0].substring(2).split(" ");return{username:c[0],sessionId:c[1],sessionVersion:parseInt(c[2],10),netType:c[3],addressType:c[4],address:c[5]}},n.isValidSDP=function(i){if(typeof i!="string"||i.length===0)return!1;const l=n.splitLines(i);for(let c=0;c<l.length;c++)if(l[c].length<2||l[c].charAt(1)!=="=")return!1;return!0},o.exports=n})(Mf)),Mf.exports}var qg=R5();const Qa=dh(qg),A5=U1({__proto__:null,default:Qa},[qg]);function nu(o){if(!o.RTCIceCandidate||o.RTCIceCandidate&&"foundation"in o.RTCIceCandidate.prototype)return;const n=o.RTCIceCandidate;o.RTCIceCandidate=function(l){if(typeof l=="object"&&l.candidate&&l.candidate.indexOf("a=")===0&&(l=JSON.parse(JSON.stringify(l)),l.candidate=l.candidate.substring(2)),l.candidate&&l.candidate.length){const c=new n(l),u=Qa.parseCandidate(l.candidate);for(const _ in u)_ in c||Object.defineProperty(c,_,{value:u[_]});return c.toJSON=function(){return{candidate:c.candidate,sdpMid:c.sdpMid,sdpMLineIndex:c.sdpMLineIndex,usernameFragment:c.usernameFragment}},c}return new n(l)},o.RTCIceCandidate.prototype=n.prototype,ta(o,"icecandidate",i=>(i.candidate&&Object.defineProperty(i,"candidate",{value:new o.RTCIceCandidate(i.candidate),writable:"false"}),i))}function Vf(o){!o.RTCIceCandidate||o.RTCIceCandidate&&"relayProtocol"in o.RTCIceCandidate.prototype||ta(o,"icecandidate",n=>{if(n.candidate){const i=Qa.parseCandidate(n.candidate.candidate);i.type==="relay"&&(n.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[i.priority>>24])}return n})}function su(o,n){if(!o.RTCPeerConnection||n.browser==="chrome"&&n.version>102||n.browser==="firefox"&&n.version>=113)return;"sctp"in o.RTCPeerConnection.prototype||Object.defineProperty(o.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const i=function(g){if(!g||!g.sdp)return!1;const h=Qa.splitSections(g.sdp);return h.shift(),h.some(m=>{const p=Qa.parseMLine(m);return p&&p.kind==="application"&&p.protocol.indexOf("SCTP")!==-1})},l=function(g){const h=g.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(h===null||h.length<2)return-1;const m=parseInt(h[1],10);return m!==m?-1:m},c=function(g){let h=65536;return n.browser==="firefox"&&(n.version<57?g===-1?h=16384:h=2147483637:n.version<60?h=n.version===57?65535:65536:h=2147483637),h},u=function(g,h){let m=65536;n.browser==="firefox"&&n.version===57&&(m=65535);const p=Qa.matchPrefix(g.sdp,"a=max-message-size:");return p.length>0?m=parseInt(p[0].substring(19),10):n.browser==="firefox"&&h!==-1&&(m=2147483637),m},_=o.RTCPeerConnection.prototype.setRemoteDescription;o.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,n.browser==="chrome"&&n.version>=76){const{sdpSemantics:h}=this.getConfiguration();h==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(i(arguments[0])){const h=l(arguments[0]),m=c(h),p=u(arguments[0],h);let y;m===0&&p===0?y=Number.POSITIVE_INFINITY:m===0||p===0?y=Math.max(m,p):y=Math.min(m,p);const v={};Object.defineProperty(v,"maxMessageSize",{get(){return y}}),this._sctp=v}return _.apply(this,arguments)}}function ou(o,n){if(!(o.RTCPeerConnection&&"createDataChannel"in o.RTCPeerConnection.prototype)||n.browser==="chrome"&&n.version>=149||n.browser==="firefox"&&n.version>60)return;function i(c,u){const _=c.send;c.send=function(){const h=arguments[0],m=h.length||h.size||h.byteLength;if(c.readyState==="open"&&u.sctp&&m>u.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+u.sctp.maxMessageSize+" bytes)");return _.apply(c,arguments)}}const l=o.RTCPeerConnection.prototype.createDataChannel;o.RTCPeerConnection.prototype.createDataChannel=function(){const u=l.apply(this,arguments);return i(u,this),u},ta(o,"datachannel",c=>(i(c.channel,c.target),c))}function Kf(o){if(!o.RTCPeerConnection||"connectionState"in o.RTCPeerConnection.prototype)return;const n=o.RTCPeerConnection.prototype;Object.defineProperty(n,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(n,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(i){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),i&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=i)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(i=>{const l=n[i];n[i]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=c=>{const u=c.target;if(u._lastConnectionState!==u.connectionState){u._lastConnectionState=u.connectionState;const _=new Event("connectionstatechange",c);u.dispatchEvent(_)}return c},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),l.apply(this,arguments)}})}function Zf(o,n){if(!o.RTCPeerConnection||n.browser==="chrome"&&n.version>=71||n.browser==="safari"&&n._safariVersion>=13.1)return;const i=o.RTCPeerConnection.prototype.setRemoteDescription;o.RTCPeerConnection.prototype.setRemoteDescription=function(c){if(c&&c.sdp&&c.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const u=c.sdp.split(`
`).filter(_=>_.trim()!=="a=extmap-allow-mixed").join(`
`);o.RTCSessionDescription&&c instanceof o.RTCSessionDescription?arguments[0]=new o.RTCSessionDescription({type:c.type,sdp:u}):c.sdp=u}return i.apply(this,arguments)}}function iu(o,n){if(!(o.RTCPeerConnection&&o.RTCPeerConnection.prototype))return;const i=o.RTCPeerConnection.prototype.addIceCandidate;!i||i.length===0||(o.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(n.browser==="chrome"&&n.version<78||n.browser==="firefox"&&n.version<68||n.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():i.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}function au(o,n){if(!(o.RTCPeerConnection&&o.RTCPeerConnection.prototype))return;const i=o.RTCPeerConnection.prototype.setLocalDescription;!i||i.length===0||(o.RTCPeerConnection.prototype.setLocalDescription=function(){let c=arguments[0]||{};if(typeof c!="object"||c.type&&c.sdp)return i.apply(this,arguments);if(c={type:c.type,sdp:c.sdp},!c.type)switch(this.signalingState){case"stable":case"have-local-offer":case"have-remote-pranswer":c.type="offer";break;default:c.type="answer";break}return c.sdp||c.type!=="offer"&&c.type!=="answer"?i.apply(this,[c]):(c.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(_=>i.apply(this,[_]))})}const D5=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:Zf,shimAddIceCandidateNullOrEmpty:iu,shimConnectionState:Kf,shimMaxMessageSize:su,shimParameterlessSetLocalDescription:au,shimRTCIceCandidate:nu,shimRTCIceCandidateRelayProtocol:Vf,shimSendThrowTypeError:ou},Symbol.toStringTag,{value:"Module"}));function N5({window:o}={},n={shimChrome:!0,shimFirefox:!0,shimSafari:!0}){const i=vh,l=T5(o),c={browserDetails:l,commonShim:D5,extractVersion:ar,disableLog:j5,disableWarnings:M5,sdp:A5};switch(l.browser){case"chrome":if(!t0||!qf||!n.shimChrome)return i("Chrome shim is not included in this adapter release."),c;if(l.version===null)return i("Chrome shim can not determine version, not shimming."),c;i("adapter.js shimming chrome."),c.browserShim=t0,iu(o,l),au(o),bg(o,l),vg(o),qf(o,l),wg(o,l),jg(o,l),Sg(o),kg(o,l),Mg(o,l),nu(o),Vf(o),Kf(o),su(o,l),ou(o,l),Zf(o,l);break;case"firefox":if(!n0||!Qf||!n.shimFirefox)return i("Firefox shim is not included in this adapter release."),c;i("adapter.js shimming firefox."),c.browserShim=n0,iu(o,l),au(o),Tg(o,l),Qf(o,l),Rg(o,l),Eg(o),Ng(o),Ag(o),Dg(o),Lg(o),Og(o,l),zg(o,l),Bg(o,l),$g(o,l),nu(o),Kf(o),su(o,l),ou(o,l);break;case"safari":if(!s0||!n.shimSafari)return i("Safari shim is not included in this adapter release."),c;i("adapter.js shimming safari."),c.browserShim=s0,iu(o,l),au(o),Xg(o),Fg(o),Ug(o),Pg(o),Ig(o),Gg(o),Hg(o),Wg(o),nu(o),Vf(o),su(o,l),ou(o,l),Zf(o,l);break;default:i("Unsupported browser!");break}return c}const i0=N5({window:typeof window>"u"?void 0:window});function na(o,n,i,l){Object.defineProperty(o,n,{get:i,set:l,enumerable:!0,configurable:!0})}class Qg{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=n=>{const i=[],l=n.byteLength,c=Math.ceil(l/this.chunkedMTU);let u=0,_=0;for(;_<l;){const g=Math.min(l,_+this.chunkedMTU),h=n.slice(_,g),m={__peerData:this._dataCount,n:u,data:h,total:c};i.push(m),_=g,u++}return this._dataCount++,i}}}function L5(o){let n=0;for(const c of o)n+=c.byteLength;const i=new Uint8Array(n);let l=0;for(const c of o)i.set(c,l),l+=c.byteLength;return i}const Tf=i0.default||i0,Jl=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){const o=this.getBrowser(),n=this.getVersion();return this.supportedBrowsers.includes(o)?o==="chrome"?n>=this.minChromeVersion:o==="firefox"?n>=this.minFirefoxVersion:o==="safari"?!this.isIOS&&n>=this.minSafariVersion:!1:!1}getBrowser(){return Tf.browserDetails.browser}getVersion(){return Tf.browserDetails.version||0}isUnifiedPlanSupported(){const o=this.getBrowser(),n=Tf.browserDetails.version||0;if(o==="chrome"&&n<this.minChromeVersion)return!1;if(o==="firefox"&&n>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;let i,l=!1;try{i=new RTCPeerConnection,i.addTransceiver("audio"),l=!0}catch{}finally{i&&i.close()}return l}toString(){return`Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):!1,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}},O5=o=>!o||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(o),Vg=()=>Math.random().toString(36).slice(2),a0={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"};class z5 extends Qg{noop(){}blobToArrayBuffer(n,i){const l=new FileReader;return l.onload=function(c){c.target&&i(c.target.result)},l.readAsArrayBuffer(n),l}binaryStringToArrayBuffer(n){const i=new Uint8Array(n.length);for(let l=0;l<n.length;l++)i[l]=n.charCodeAt(l)&255;return i.buffer}isSecure(){return location.protocol==="https:"}constructor(...n){super(...n),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=a0,this.browser=Jl.getBrowser(),this.browserVersion=Jl.getVersion(),this.pack=pg,this.unpack=mg,this.supports=(function(){const i={browser:Jl.isBrowserSupported(),webRTC:Jl.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!i.webRTC)return i;let l;try{l=new RTCPeerConnection(a0),i.audioVideo=!0;let c;try{c=l.createDataChannel("_PEERJSTEST",{ordered:!0}),i.data=!0,i.reliable=!!c.ordered;try{c.binaryType="blob",i.binaryBlob=!Jl.isIOS}catch{}}catch{}finally{c&&c.close()}}catch{}finally{l&&l.close()}return i})(),this.validateId=O5,this.randomToken=Vg}}const bs=new z5,B5="PeerJS: ";class $5{get logLevel(){return this._logLevel}set logLevel(n){this._logLevel=n}log(...n){this._logLevel>=3&&this._print(3,...n)}warn(...n){this._logLevel>=2&&this._print(2,...n)}error(...n){this._logLevel>=1&&this._print(1,...n)}setLogFunction(n){this._print=n}_print(n,...i){const l=[B5,...i];for(const c in l)l[c]instanceof Error&&(l[c]="("+l[c].name+") "+l[c].message);n>=3?console.log(...l):n>=2?console.warn("WARNING",...l):n>=1&&console.error("ERROR",...l)}constructor(){this._logLevel=0}}var Pe=new $5,Sh={},P5=Object.prototype.hasOwnProperty,fs="~";function fr(){}Object.create&&(fr.prototype=Object.create(null),new fr().__proto__||(fs=!1));function I5(o,n,i){this.fn=o,this.context=n,this.once=i||!1}function Kg(o,n,i,l,c){if(typeof i!="function")throw new TypeError("The listener must be a function");var u=new I5(i,l||o,c),_=fs?fs+n:n;return o._events[_]?o._events[_].fn?o._events[_]=[o._events[_],u]:o._events[_].push(u):(o._events[_]=u,o._eventsCount++),o}function lu(o,n){--o._eventsCount===0?o._events=new fr:delete o._events[n]}function os(){this._events=new fr,this._eventsCount=0}os.prototype.eventNames=function(){var n=[],i,l;if(this._eventsCount===0)return n;for(l in i=this._events)P5.call(i,l)&&n.push(fs?l.slice(1):l);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(i)):n};os.prototype.listeners=function(n){var i=fs?fs+n:n,l=this._events[i];if(!l)return[];if(l.fn)return[l.fn];for(var c=0,u=l.length,_=new Array(u);c<u;c++)_[c]=l[c].fn;return _};os.prototype.listenerCount=function(n){var i=fs?fs+n:n,l=this._events[i];return l?l.fn?1:l.length:0};os.prototype.emit=function(n,i,l,c,u,_){var g=fs?fs+n:n;if(!this._events[g])return!1;var h=this._events[g],m=arguments.length,p,y;if(h.fn){switch(h.once&&this.removeListener(n,h.fn,void 0,!0),m){case 1:return h.fn.call(h.context),!0;case 2:return h.fn.call(h.context,i),!0;case 3:return h.fn.call(h.context,i,l),!0;case 4:return h.fn.call(h.context,i,l,c),!0;case 5:return h.fn.call(h.context,i,l,c,u),!0;case 6:return h.fn.call(h.context,i,l,c,u,_),!0}for(y=1,p=new Array(m-1);y<m;y++)p[y-1]=arguments[y];h.fn.apply(h.context,p)}else{var v=h.length,j;for(y=0;y<v;y++)switch(h[y].once&&this.removeListener(n,h[y].fn,void 0,!0),m){case 1:h[y].fn.call(h[y].context);break;case 2:h[y].fn.call(h[y].context,i);break;case 3:h[y].fn.call(h[y].context,i,l);break;case 4:h[y].fn.call(h[y].context,i,l,c);break;default:if(!p)for(j=1,p=new Array(m-1);j<m;j++)p[j-1]=arguments[j];h[y].fn.apply(h[y].context,p)}}return!0};os.prototype.on=function(n,i,l){return Kg(this,n,i,l,!1)};os.prototype.once=function(n,i,l){return Kg(this,n,i,l,!0)};os.prototype.removeListener=function(n,i,l,c){var u=fs?fs+n:n;if(!this._events[u])return this;if(!i)return lu(this,u),this;var _=this._events[u];if(_.fn)_.fn===i&&(!c||_.once)&&(!l||_.context===l)&&lu(this,u);else{for(var g=0,h=[],m=_.length;g<m;g++)(_[g].fn!==i||c&&!_[g].once||l&&_[g].context!==l)&&h.push(_[g]);h.length?this._events[u]=h.length===1?h[0]:h:lu(this,u)}return this};os.prototype.removeAllListeners=function(n){var i;return n?(i=fs?fs+n:n,this._events[i]&&lu(this,i)):(this._events=new fr,this._eventsCount=0),this};os.prototype.off=os.prototype.removeListener;os.prototype.addListener=os.prototype.on;os.prefixed=fs;os.EventEmitter=os;Sh=os;var sa={};na(sa,"ConnectionType",()=>ji);na(sa,"PeerErrorType",()=>zn);na(sa,"BaseConnectionErrorType",()=>Jf);na(sa,"DataConnectionErrorType",()=>kh);na(sa,"SerializationType",()=>xu);na(sa,"SocketEventType",()=>Ci);na(sa,"ServerMessageType",()=>ss);var ji=(function(o){return o.Data="data",o.Media="media",o})({}),zn=(function(o){return o.BrowserIncompatible="browser-incompatible",o.Disconnected="disconnected",o.InvalidID="invalid-id",o.InvalidKey="invalid-key",o.Network="network",o.PeerUnavailable="peer-unavailable",o.SslUnavailable="ssl-unavailable",o.ServerError="server-error",o.SocketError="socket-error",o.SocketClosed="socket-closed",o.UnavailableID="unavailable-id",o.WebRTC="webrtc",o})({}),Jf=(function(o){return o.NegotiationFailed="negotiation-failed",o.ConnectionClosed="connection-closed",o})({}),kh=(function(o){return o.NotOpenYet="not-open-yet",o.MessageToBig="message-too-big",o})({}),xu=(function(o){return o.Binary="binary",o.BinaryUTF8="binary-utf8",o.JSON="json",o.None="raw",o})({}),Ci=(function(o){return o.Message="message",o.Disconnected="disconnected",o.Error="error",o.Close="close",o})({}),ss=(function(o){return o.Heartbeat="HEARTBEAT",o.Candidate="CANDIDATE",o.Offer="OFFER",o.Answer="ANSWER",o.Open="OPEN",o.Error="ERROR",o.IdTaken="ID-TAKEN",o.InvalidKey="INVALID-KEY",o.Leave="LEAVE",o.Expire="EXPIRE",o})({});const Zg="1.5.5";class U5 extends Sh.EventEmitter{constructor(n,i,l,c,u,_=5e3){super(),this.pingInterval=_,this._disconnected=!0,this._messagesQueue=[];const g=n?"wss://":"ws://";this._baseUrl=g+i+":"+l+c+"peerjs?key="+u}start(n,i){this._id=n;const l=`${this._baseUrl}&id=${n}&token=${i}`;this._socket||!this._disconnected||(this._socket=new WebSocket(l+"&version="+Zg),this._disconnected=!1,this._socket.onmessage=c=>{let u;try{u=JSON.parse(c.data),Pe.log("Server message received:",u)}catch{Pe.log("Invalid server message",c.data);return}this.emit(Ci.Message,u)},this._socket.onclose=c=>{this._disconnected||(Pe.log("Socket closed.",c),this._cleanup(),this._disconnected=!0,this.emit(Ci.Disconnected))},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),Pe.log("Socket open"),this._scheduleHeartbeat())})}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat()},this.pingInterval)}_sendHeartbeat(){if(!this._wsOpen()){Pe.log("Cannot send heartbeat, because socket closed");return}const n=JSON.stringify({type:ss.Heartbeat});this._socket.send(n),this._scheduleHeartbeat()}_wsOpen(){return!!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){const n=[...this._messagesQueue];this._messagesQueue=[];for(const i of n)this.send(i)}send(n){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(n);return}if(!n.type){this.emit(Ci.Error,"Invalid message");return}if(!this._wsOpen())return;const i=JSON.stringify(n);this._socket.send(i)}close(){this._disconnected||(this._cleanup(),this._disconnected=!0)}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)}}class Jg{constructor(n){this.connection=n}startConnection(n){const i=this._startPeerConnection();if(this.connection.peerConnection=i,this.connection.type===ji.Media&&n._stream&&this._addTracksToConnection(n._stream,i),n.originator){const l=this.connection,c={ordered:!!n.reliable},u=i.createDataChannel(l.label,c);l._initializeDataChannel(u),this._makeOffer()}else this.handleSDP("OFFER",n.sdp)}_startPeerConnection(){Pe.log("Creating RTCPeerConnection.");const n=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(n),n}_setupListeners(n){const i=this.connection.peer,l=this.connection.connectionId,c=this.connection.type,u=this.connection.provider;Pe.log("Listening for ICE candidates."),n.onicecandidate=_=>{!_.candidate||!_.candidate.candidate||(Pe.log(`Received ICE candidates for ${i}:`,_.candidate),u.socket.send({type:ss.Candidate,payload:{candidate:_.candidate,type:c,connectionId:l},dst:i}))},n.oniceconnectionstatechange=()=>{switch(n.iceConnectionState){case"failed":Pe.log("iceConnectionState is failed, closing connections to "+i),this.connection.emitError(Jf.NegotiationFailed,"Negotiation of connection to "+i+" failed."),this.connection.close();break;case"closed":Pe.log("iceConnectionState is closed, closing connections to "+i),this.connection.emitError(Jf.ConnectionClosed,"Connection to "+i+" closed."),this.connection.close();break;case"disconnected":Pe.log("iceConnectionState changed to disconnected on the connection with "+i);break;case"completed":n.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",n.iceConnectionState)},Pe.log("Listening for data channel"),n.ondatachannel=_=>{Pe.log("Received data channel");const g=_.channel;u.getConnection(i,l)._initializeDataChannel(g)},Pe.log("Listening for remote stream"),n.ontrack=_=>{Pe.log("Received remote stream");const g=_.streams[0],h=u.getConnection(i,l);if(h.type===ji.Media){const m=h;this._addStreamToMediaConnection(g,m)}}}cleanup(){Pe.log("Cleaning up PeerConnection to "+this.connection.peer);const n=this.connection.peerConnection;if(!n)return;this.connection.peerConnection=null,n.onicecandidate=n.oniceconnectionstatechange=n.ondatachannel=n.ontrack=()=>{};const i=n.signalingState!=="closed";let l=!1;const c=this.connection.dataChannel;c&&(l=!!c.readyState&&c.readyState!=="closed"),(i||l)&&n.close()}async _makeOffer(){const n=this.connection.peerConnection,i=this.connection.provider;try{const l=await n.createOffer(this.connection.options.constraints);Pe.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(l.sdp=this.connection.options.sdpTransform(l.sdp)||l.sdp);try{await n.setLocalDescription(l),Pe.log("Set localDescription:",l,`for:${this.connection.peer}`);let c={sdp:l,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===ji.Data){const u=this.connection;c={...c,label:u.label,reliable:u.reliable,serialization:u.serialization}}i.socket.send({type:ss.Offer,payload:c,dst:this.connection.peer})}catch(c){c!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(i.emitError(zn.WebRTC,c),Pe.log("Failed to setLocalDescription, ",c))}}catch(l){i.emitError(zn.WebRTC,l),Pe.log("Failed to createOffer, ",l)}}async _makeAnswer(){const n=this.connection.peerConnection,i=this.connection.provider;try{const l=await n.createAnswer();Pe.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(l.sdp=this.connection.options.sdpTransform(l.sdp)||l.sdp);try{await n.setLocalDescription(l),Pe.log("Set localDescription:",l,`for:${this.connection.peer}`),i.socket.send({type:ss.Answer,payload:{sdp:l,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer})}catch(c){i.emitError(zn.WebRTC,c),Pe.log("Failed to setLocalDescription, ",c)}}catch(l){i.emitError(zn.WebRTC,l),Pe.log("Failed to create answer, ",l)}}async handleSDP(n,i){i=new RTCSessionDescription(i);const l=this.connection.peerConnection,c=this.connection.provider;Pe.log("Setting remote description",i);const u=this;try{await l.setRemoteDescription(i),Pe.log(`Set remoteDescription:${n} for:${this.connection.peer}`),n==="OFFER"&&await u._makeAnswer()}catch(_){c.emitError(zn.WebRTC,_),Pe.log("Failed to setRemoteDescription, ",_)}}async handleCandidate(n){Pe.log("handleCandidate:",n);try{await this.connection.peerConnection.addIceCandidate(n),Pe.log(`Added ICE candidate for:${this.connection.peer}`)}catch(i){this.connection.provider.emitError(zn.WebRTC,i),Pe.log("Failed to handleCandidate, ",i)}}_addTracksToConnection(n,i){if(Pe.log(`add tracks from stream ${n.id} to peer connection`),!i.addTrack)return Pe.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");n.getTracks().forEach(l=>{i.addTrack(l,n)})}_addStreamToMediaConnection(n,i){Pe.log(`add stream ${n.id} to media connection ${i.connectionId}`),i.addStream(n)}}class ey extends Sh.EventEmitter{emitError(n,i){Pe.error("Error:",i),this.emit("error",new H5(`${n}`,i))}}class H5 extends Error{constructor(n,i){typeof i=="string"?super(i):(super(),Object.assign(this,i)),this.type=n}}class ty extends ey{get open(){return this._open}constructor(n,i,l){super(),this.peer=n,this.provider=i,this.options=l,this._open=!1,this.metadata=l.metadata}}var lh;const cr=class cr extends ty{get type(){return ji.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(n,i,l){super(n,i,l),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||cr.ID_PREFIX+bs.randomToken(),this._negotiator=new Jg(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:!0})}_initializeDataChannel(n){this.dataChannel=n,this.dataChannel.onopen=()=>{Pe.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote")},this.dataChannel.onclose=()=>{Pe.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}addStream(n){Pe.log("Receiving stream",n),this._remoteStream=n,super.emit("stream",n)}handleMessage(n){const i=n.type,l=n.payload;switch(n.type){case ss.Answer:this._negotiator.handleSDP(i,l.sdp),this._open=!0;break;case ss.Candidate:this._negotiator.handleCandidate(l.candidate);break;default:Pe.warn(`Unrecognized message type:${i} from peer:${this.peer}`);break}}answer(n,i={}){if(this._localStream){Pe.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=n,i&&i.sdpTransform&&(this.options.sdpTransform=i.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:n});const l=this.provider._getMessages(this.connectionId);for(const c of l)this.handleMessage(c);this._open=!0}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,super.emit("close"))}};lh=new WeakMap,Ql(cr,lh,cr.ID_PREFIX="mc_");let du=cr;class Y5{constructor(n){this._options=n}_buildRequest(n){const i=this._options.secure?"https":"http",{host:l,port:c,path:u,key:_}=this._options,g=new URL(`${i}://${l}:${c}${u}${_}/${n}`);return g.searchParams.set("ts",`${Date.now()}${Math.random()}`),g.searchParams.set("version",Zg),fetch(g.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{const n=await this._buildRequest("id");if(n.status!==200)throw new Error(`Error. Status:${n.status}`);return n.text()}catch(n){Pe.error("Error retrieving ID",n);let i="";throw this._options.path==="/"&&this._options.host!==bs.CLOUD_HOST&&(i=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+i)}}async listAllPeers(){try{const n=await this._buildRequest("peers");if(n.status!==200){if(n.status===401){let i="";throw this._options.host===bs.CLOUD_HOST?i="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":i="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+i)}throw new Error(`Error. Status:${n.status}`)}return n.json()}catch(n){throw Pe.error("Error retrieving list peers",n),new Error("Could not get list peers from the server."+n)}}}var rh,ch;const Zi=class Zi extends ty{get type(){return ji.Data}constructor(n,i,l){super(n,i,l),this.connectionId=this.options.connectionId||Zi.ID_PREFIX+Vg(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new Jg(this),this._negotiator.startConnection(this.options._payload||{originator:!0,reliable:this.reliable})}_initializeDataChannel(n){this.dataChannel=n,this.dataChannel.onopen=()=>{Pe.log(`DC#${this.connectionId} dc connection success`),this._open=!0,this.emit("open")},this.dataChannel.onmessage=i=>{Pe.log(`DC#${this.connectionId} dc onmessage:`,i.data)},this.dataChannel.onclose=()=>{Pe.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close()}}close(n){if(n!=null&&n.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=!1,super.emit("close"))}send(n,i=!1){if(!this.open){this.emitError(kh.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(n,i)}async handleMessage(n){const i=n.payload;switch(n.type){case ss.Answer:await this._negotiator.handleSDP(n.type,i.sdp);break;case ss.Candidate:await this._negotiator.handleCandidate(i.candidate);break;default:Pe.warn("Unrecognized message type:",n.type,"from peer:",this.peer);break}}};rh=new WeakMap,ch=new WeakMap,Ql(Zi,rh,Zi.ID_PREFIX="dc_"),Ql(Zi,ch,Zi.MAX_BUFFERED_AMOUNT=8388608);let fu=Zi;class Ch extends fu{get bufferSize(){return this._bufferSize}_initializeDataChannel(n){super._initializeDataChannel(n),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",i=>this._handleDataMessage(i))}_bufferedSend(n){(this._buffering||!this._trySend(n))&&(this._buffer.push(n),this._bufferSize=this._buffer.length)}_trySend(n){if(!this.open)return!1;if(this.dataChannel.bufferedAmount>fu.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(()=>{this._buffering=!1,this._tryBuffer()},50),!1;try{this.dataChannel.send(n)}catch(i){return Pe.error(`DC#:${this.connectionId} Error when sending:`,i),this._buffering=!0,this.close(),!1}return!0}_tryBuffer(){if(!this.open||this._buffer.length===0)return;const n=this._buffer[0];this._trySend(n)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}close(n){if(n!=null&&n.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close()}constructor(...n){super(...n),this._buffer=[],this._bufferSize=0,this._buffering=!1}}class Ef extends Ch{close(n){super.close(n),this._chunkedData={}}constructor(n,i,l){super(n,i,l),this.chunker=new Qg,this.serialization=xu.Binary,this._chunkedData={}}_handleDataMessage({data:n}){const i=mg(n),l=i.__peerData;if(l){if(l.type==="close"){this.close();return}this._handleChunk(i);return}this.emit("data",i)}_handleChunk(n){const i=n.__peerData,l=this._chunkedData[i]||{data:[],count:0,total:n.total};if(l.data[n.n]=new Uint8Array(n.data),l.count++,this._chunkedData[i]=l,l.total===l.count){delete this._chunkedData[i];const c=L5(l.data);this._handleDataMessage({data:c})}}_send(n,i){const l=pg(n);if(l instanceof Promise)return this._send_blob(l);if(!i&&l.byteLength>this.chunker.chunkedMTU){this._sendChunks(l);return}this._bufferedSend(l)}async _send_blob(n){const i=await n;if(i.byteLength>this.chunker.chunkedMTU){this._sendChunks(i);return}this._bufferedSend(i)}_sendChunks(n){const i=this.chunker.chunk(n);Pe.log(`DC#${this.connectionId} Try to send ${i.length} chunks...`);for(const l of i)this.send(l,!0)}}class X5 extends Ch{_handleDataMessage({data:n}){super.emit("data",n)}_send(n,i){this._bufferedSend(n)}constructor(...n){super(...n),this.serialization=xu.None}}class G5 extends Ch{_handleDataMessage({data:n}){const i=this.parse(this.decoder.decode(n)),l=i.__peerData;if(l&&l.type==="close"){this.close();return}this.emit("data",i)}_send(n,i){const l=this.encoder.encode(this.stringify(n));if(l.byteLength>=bs.chunkedMTU){this.emitError(kh.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(l)}constructor(...n){super(...n),this.serialization=xu.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse}}var uh;const ur=class ur extends ey{get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){const n=Object.create(null);for(const[i,l]of this._connections)n[i]=l;return n}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(n,i){super(),this._serializers={raw:X5,json:G5,binary:Ef,"binary-utf8":Ef,default:Ef},this._id=null,this._lastServerId=null,this._destroyed=!1,this._disconnected=!1,this._open=!1,this._connections=new Map,this._lostMessages=new Map;let l;if(n&&n.constructor==Object?i=n:n&&(l=n.toString()),i={debug:0,host:bs.CLOUD_HOST,port:bs.CLOUD_PORT,path:"/",key:ur.DEFAULT_KEY,token:bs.randomToken(),config:bs.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...i},this._options=i,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==bs.CLOUD_HOST?this._options.secure=bs.isSecure():this._options.host==bs.CLOUD_HOST&&(this._options.secure=!0),this._options.logFunction&&Pe.setLogFunction(this._options.logFunction),Pe.logLevel=this._options.debug||0,this._api=new Y5(i),this._socket=this._createServerConnection(),!bs.supports.audioVideo&&!bs.supports.data){this._delayedAbort(zn.BrowserIncompatible,"The current browser does not support WebRTC");return}if(l&&!bs.validateId(l)){this._delayedAbort(zn.InvalidID,`ID "${l}" is invalid`);return}l?this._initialize(l):this._api.retrieveId().then(c=>this._initialize(c)).catch(c=>this._abort(zn.ServerError,c))}_createServerConnection(){const n=new U5(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return n.on(Ci.Message,i=>{this._handleMessage(i)}),n.on(Ci.Error,i=>{this._abort(zn.SocketError,i)}),n.on(Ci.Disconnected,()=>{this.disconnected||(this.emitError(zn.Network,"Lost connection to server."),this.disconnect())}),n.on(Ci.Close,()=>{this.disconnected||this._abort(zn.SocketClosed,"Underlying socket is already closed.")}),n}_initialize(n){this._id=n,this.socket.start(n,this._options.token)}_handleMessage(n){const i=n.type,l=n.payload,c=n.src;switch(i){case ss.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case ss.Error:this._abort(zn.ServerError,l.msg);break;case ss.IdTaken:this._abort(zn.UnavailableID,`ID "${this.id}" is taken`);break;case ss.InvalidKey:this._abort(zn.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case ss.Leave:Pe.log(`Received leave message from ${c}`),this._cleanupPeer(c),this._connections.delete(c);break;case ss.Expire:this.emitError(zn.PeerUnavailable,`Could not connect to peer ${c}`);break;case ss.Offer:{const u=l.connectionId;let _=this.getConnection(c,u);if(_&&(_.close(),Pe.warn(`Offer received for existing Connection ID:${u}`)),l.type===ji.Media){const h=new du(c,this,{connectionId:u,_payload:l,metadata:l.metadata});_=h,this._addConnection(c,_),this.emit("call",h)}else if(l.type===ji.Data){const h=new this._serializers[l.serialization](c,this,{connectionId:u,_payload:l,metadata:l.metadata,label:l.label,serialization:l.serialization,reliable:l.reliable});_=h,this._addConnection(c,_),this.emit("connection",h)}else{Pe.warn(`Received malformed connection type:${l.type}`);return}const g=this._getMessages(u);for(const h of g)_.handleMessage(h);break}default:{if(!l){Pe.warn(`You received a malformed message from ${c} of type ${i}`);return}const u=l.connectionId,_=this.getConnection(c,u);_&&_.peerConnection?_.handleMessage(n):u?this._storeMessage(u,n):Pe.warn("You received an unrecognized message:",n);break}}}_storeMessage(n,i){this._lostMessages.has(n)||this._lostMessages.set(n,[]),this._lostMessages.get(n).push(i)}_getMessages(n){const i=this._lostMessages.get(n);return i?(this._lostMessages.delete(n),i):[]}connect(n,i={}){if(i={serialization:"default",...i},this.disconnected){Pe.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(zn.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}const l=new this._serializers[i.serialization](n,this,i);return this._addConnection(n,l),l}call(n,i,l={}){if(this.disconnected){Pe.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(zn.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!i){Pe.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}const c=new du(n,this,{...l,_stream:i});return this._addConnection(n,c),c}_addConnection(n,i){Pe.log(`add connection ${i.type}:${i.connectionId} to peerId:${n}`),this._connections.has(n)||this._connections.set(n,[]),this._connections.get(n).push(i)}_removeConnection(n){const i=this._connections.get(n.peer);if(i){const l=i.indexOf(n);l!==-1&&i.splice(l,1)}this._lostMessages.delete(n.connectionId)}getConnection(n,i){const l=this._connections.get(n);if(!l)return null;for(const c of l)if(c.connectionId===i)return c;return null}_delayedAbort(n,i){setTimeout(()=>{this._abort(n,i)},0)}_abort(n,i){Pe.error("Aborting!"),this.emitError(n,i),this._lastServerId?this.disconnect():this.destroy()}destroy(){this.destroyed||(Pe.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))}_cleanup(){for(const n of this._connections.keys())this._cleanupPeer(n),this._connections.delete(n);this.socket.removeAllListeners()}_cleanupPeer(n){const i=this._connections.get(n);if(i)for(const l of i)l.close()}disconnect(){if(this.disconnected)return;const n=this.id;Pe.log(`Disconnect peer with ID:${n}`),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=n,this._id=null,this.emit("disconnected",n)}reconnect(){if(this.disconnected&&!this.destroyed)Pe.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)Pe.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(n=i=>{}){this._api.listAllPeers().then(i=>n(i)).catch(i=>this._abort(zn.ServerError,i))}};uh=new WeakMap,Ql(ur,uh,ur.DEFAULT_KEY="peerjs");let eh=ur;var ny=eh;const sy="soccer-game-room-";class F5{constructor(){Fe(this,"peer",null);Fe(this,"connection",null);Fe(this,"roomId");Fe(this,"onConnectionStateChange");Fe(this,"onInputReceived");this.roomId=Math.floor(1e3+Math.random()*9e3).toString()}init(n){n&&(this.roomId=n);const i=`${sy}${this.roomId}`;return new Promise((l,c)=>{try{this.peer=new ny(i,{debug:1}),this.peer.on("open",u=>{console.log("[HostPeerService] Host Peer open with ID:",u),l(this.roomId)}),this.peer.on("connection",u=>{console.log("[HostPeerService] Client connected:",u.peer),this.connection=u,this.onConnectionStateChange&&this.onConnectionStateChange(!0),u.on("data",_=>{this.onInputReceived&&_&&_.type==="CONTROLLER_INPUT"&&this.onInputReceived(_.input)}),u.on("close",()=>{console.log("[HostPeerService] Client connection closed"),this.connection=null,this.onConnectionStateChange&&this.onConnectionStateChange(!1)}),u.on("error",_=>{console.error("[HostPeerService] Connection error:",_),this.connection=null,this.onConnectionStateChange&&this.onConnectionStateChange(!1)})}),this.peer.on("error",u=>{console.error("[HostPeerService] Peer error:",u),c(u)})}catch(u){c(u)}})}destroy(){this.connection&&(this.connection.close(),this.connection=null),this.peer&&(this.peer.destroy(),this.peer=null)}}class W5{constructor(){Fe(this,"peer",null);Fe(this,"connection",null);Fe(this,"onConnectionStateChange")}connectToHost(n){const i=`${sy}${n}`;return new Promise((l,c)=>{try{this.peer=new ny({debug:1}),this.peer.on("open",()=>{if(console.log("[ControllerPeerService] Controller Peer open, connecting to host:",i),!this.peer)return;const u=this.peer.connect(i,{reliable:!0});this.connection=u,u.on("open",()=>{console.log("[ControllerPeerService] Connected to host!"),this.onConnectionStateChange&&this.onConnectionStateChange(!0),l(!0)}),u.on("close",()=>{console.log("[ControllerPeerService] Host connection closed"),this.connection=null,this.onConnectionStateChange&&this.onConnectionStateChange(!1)}),u.on("error",_=>{console.error("[ControllerPeerService] Connection error:",_),this.connection=null,this.onConnectionStateChange&&this.onConnectionStateChange(!1),c(_)})}),this.peer.on("error",u=>{console.error("[ControllerPeerService] Peer error:",u),c(u)})}catch(u){c(u)}})}sendInput(n){this.connection&&this.connection.open&&this.connection.send({type:"CONTROLLER_INPUT",input:n})}destroy(){this.connection&&(this.connection.close(),this.connection=null),this.peer&&(this.peer.destroy(),this.peer=null)}}const Fs=2200,Ws=1350,Uc=.92,q5=()=>{const o=b.useRef(null),{gamepads:n}=Db(),[i,l]=b.useState({width:window.innerWidth,height:window.innerHeight}),[c,u]=b.useState(!0),[_,g]=b.useState(!1),h=b.useRef(!1),[m,p]=b.useState("8492"),[y,v]=b.useState(!1),j=b.useRef(null),k=b.useRef(null),T=b.useRef({x:Fs*.5,y:Ws*.5}),O=b.useRef(new Lb(Fs,Ws)),B=b.useRef(new Ob(Fs*.5,Ws*.5)),J=b.useRef(new zb("1v1_local")),F=b.useRef([new jf("p1","Player 1 (Kamu)","home",0,"#06b6d4",Fs*.35,Ws*.5),new jf("p2","Player 2 (Rekan)","home",1,"#34d399",Fs*.45,Ws*.38),new jf("p3","Musuh (P3)","away",null,"#f59e0b",Fs*.65,Ws*.5)]),[z,ie]=b.useState(J.current.state);b.useEffect(()=>{const xe=new F5;return j.current=xe,xe.onConnectionStateChange=ue=>{v(ue)},xe.onInputReceived=ue=>{var K,Ue,me,Se,N,ce,W,be,Ae,A;ue&&(k.current={index:99,id:"Smartphone Remote Controller",connected:!0,axes:{leftStickX:((K=ue.axes)==null?void 0:K.leftStickX)||0,leftStickY:((Ue=ue.axes)==null?void 0:Ue.leftStickY)||0,rightStickX:0,rightStickY:0},buttons:{a:((me=ue.buttons)==null?void 0:me.a)||!1,b:((Se=ue.buttons)==null?void 0:Se.b)||!1,x:((N=ue.buttons)==null?void 0:N.x)||!1,y:((ce=ue.buttons)==null?void 0:ce.y)||!1,lb:((W=ue.buttons)==null?void 0:W.lb)||!1,rb:((be=ue.buttons)==null?void 0:be.rb)||!1,lt:0,rt:((Ae=ue.buttons)==null?void 0:Ae.rt)||0,back:!1,start:((A=ue.buttons)==null?void 0:A.start)||!1,lsClick:!1,rsClick:!1}})},xe.init().then(ue=>{p(ue)}),()=>{xe.destroy()}},[]),b.useEffect(()=>{const xe=()=>{l({width:window.innerWidth,height:window.innerHeight})},ue=K=>{(K.key==="Control"||K.ctrlKey)&&g(Ue=>!Ue)};return window.addEventListener("resize",xe),window.addEventListener("keydown",ue),()=>{window.removeEventListener("resize",xe),window.removeEventListener("keydown",ue)}},[]);const ge=b.useCallback(()=>{B.current.reset(Fs*.5,Ws*.5),F.current[0].reset(Fs*.35,Ws*.5),F.current[1].reset(Fs*.45,Ws*.38),F.current[2].reset(Fs*.65,Ws*.5),T.current={x:Fs*.5,y:Ws*.5}},[]),Y=b.useCallback(()=>{J.current.resetMatch(),ge(),ie({...J.current.state})},[ge]),fe=b.useCallback(xe=>{J.current.setMode(xe),ge(),ie({...J.current.state})},[ge]),ye=b.useCallback(()=>{u(xe=>!xe)},[]);return Nb(xe=>{const ue=o.current;if(!ue)return;const K=ue.getContext("2d");if(!K)return;const Ue=O.current,me=B.current,Se=J.current,N=F.current,ce=N[0],W=N[1],be=N[2];if(n[0]){const Ge=n[0].buttons.back;Ge&&!h.current&&g(nt=>!nt),h.current=Ge}if(Se.update(xe,me,Ue)&&ge(),Se.state.state!=="GAME_OVER"){N.forEach(nt=>{const kt=N.filter(Ot=>Ot.team===nt.team&&Ot.id!==nt.id),_t=N.filter(Ot=>Ot.team!==nt.team);if(nt.id==="p1"&&k.current&&y){const Ot=k.current,{toggleHUDRequested:Pt}=nt.updateFromGamepad(Ot,me,Ue,kt,_t);Pt&&u(In=>!In)}else if(nt.controllerIndex!==null&&n[nt.controllerIndex]){const Ot=n[nt.controllerIndex],{toggleHUDRequested:Pt}=nt.updateFromGamepad(Ot,me,Ue,kt,_t);Pt&&u(In=>!In)}else nt.id==="p3"?nt.updateEnemyBotAI(me,Ue,_t):nt.updatePassiveReception(me,Ue)}),N.forEach(nt=>{if(nt.isTackling){const kt=N.find(_t=>_t.id!==nt.id&&_t.hasPossession);if(kt){const _t=Math.hypot(nt.pos.x-kt.pos.x,nt.pos.y-kt.pos.y),Ot=nt.radius+kt.radius+60;_t<Ot&&(kt.skillDodgeInvincibleTimer>0?(kt.triggerFeedback("🔥 GOCEK SUCCESS!"),nt.stumbleTimer=.55,nt.isTackling=!1,nt.triggerFeedback("❌ TACKLE MISSED!")):(kt.hasPossession=!1,nt.hasPossession=!0,me.attachToPlayer(nt.pos,nt.facingAngle,nt.radius,nt.vel,nt.id),nt.triggerFeedback("⚡ BOLA DIREBUT!"),kt.triggerFeedback("💥 REBUT!"),nt.isTackling=!1))}}});const Ge=y?"📱 HP Remote":"P1 Controller 0";Se.state.debugInputText=`${N[0].debugInputString} | SRC: ${Ge}`,me.update(xe,Ue)}ie({...Se.state});const A=ce.pos.x*.4+(be?be.pos.x*.3:0)+me.pos.x*.3,Z=ce.pos.y*.4+(be?be.pos.y*.3:0)+me.pos.y*.3;T.current.x=T.current.x*.88+A*.12,T.current.y=T.current.y*.88+Z*.12;const _e=i.width,je=i.height,Xe=_e/(2*Uc),lt=je/(2*Uc),ct=Math.max(Xe,Math.min(Fs-Xe,T.current.x)),en=Math.max(lt,Math.min(Ws-lt,T.current.y));if(K.clearRect(0,0,_e,je),K.save(),K.translate(_e/2,je/2),K.scale(Uc,Uc),K.translate(-ct,-en),Ue.draw(K),c){const Ge=ce.hasPossession?ce:W.hasPossession?W:null;if(Ge){[140,280,420].forEach((V,De)=>{K.strokeStyle=De===0?"rgba(56, 189, 248, 0.35)":De===1?"rgba(52, 211, 153, 0.25)":"rgba(168, 85, 247, 0.20)",K.lineWidth=1.5,K.setLineDash([6,6]),K.beginPath(),K.arc(Ge.pos.x,Ge.pos.y,V,0,Math.PI*2),K.stroke()}),K.setLineDash([]);const _t=Math.PI/3,Ot=Ge.facingAngle-_t/2,Pt=Ge.facingAngle+_t/2,In=320;K.fillStyle="rgba(6, 182, 212, 0.08)",K.strokeStyle="rgba(6, 182, 212, 0.3)",K.lineWidth=1.5,K.beginPath(),K.moveTo(Ge.pos.x,Ge.pos.y),K.arc(Ge.pos.x,Ge.pos.y,In,Ot,Pt),K.closePath(),K.fill(),K.stroke();const is=N.filter(V=>V.team===Ge.team&&V.id!==Ge.id),Un=Ge.findBestPassTarget(is,Ge.facingAngle);if(Un){const V=Un.pos.x-Ge.pos.x,De=Un.pos.y-Ge.pos.y,Ke=Math.hypot(V,De)||1;K.strokeStyle="#06b6d4",K.lineWidth=2.5,K.setLineDash([8,6]),K.beginPath(),K.moveTo(Ge.pos.x,Ge.pos.y),K.lineTo(Un.pos.x,Un.pos.y),K.stroke(),K.setLineDash([]);const We=Math.floor(Ke/50);K.strokeStyle="#38bdf8",K.lineWidth=2;for(let rt=1;rt<=We;rt++){const vt=Ge.pos.x+V/Ke*(rt*50),Ht=Ge.pos.y+De/Ke*(rt*50),ze=-(De/Ke)*6,I=V/Ke*6;K.beginPath(),K.moveTo(vt-ze,Ht-I),K.lineTo(vt+ze,Ht+I),K.stroke()}const at=Un.pos.x,qe=Un.pos.y,Te=22;K.strokeStyle="#34d399",K.lineWidth=2.5,K.beginPath(),K.moveTo(at-Te,qe-Te+6),K.lineTo(at-Te,qe-Te),K.lineTo(at-Te+6,qe-Te),K.moveTo(at+Te-6,qe-Te),K.lineTo(at+Te,qe-Te),K.lineTo(at+Te,qe-Te+6),K.moveTo(at-Te,qe+Te-6),K.lineTo(at-Te,qe+Te),K.lineTo(at-Te+6,qe+Te),K.moveTo(at+Te-6,qe+Te),K.lineTo(at+Te,qe+Te),K.lineTo(at+Te,qe+Te-6),K.stroke()}}if(me.homingTargetPlayer){const kt=me.homingTargetPlayer;K.strokeStyle=me.throughPassTargetPos?"#f59e0b":"#a855f7",K.lineWidth=3,K.setLineDash([4,4]),K.beginPath(),K.moveTo(me.pos.x,me.pos.y),K.lineTo(kt.pos.x,kt.pos.y),K.stroke(),K.setLineDash([])}const nt=Math.hypot(me.vel.x,me.vel.y);if(nt>.2){const kt=Math.min(nt*8,40),_t=me.pos.x+me.vel.x/nt*kt,Ot=me.pos.y+me.vel.y/nt*kt;K.strokeStyle="#f59e0b",K.lineWidth=3,K.beginPath(),K.moveTo(me.pos.x,me.pos.y),K.lineTo(_t,Ot),K.stroke()}}N.forEach(Ge=>Ge.draw(K)),me.draw(K),K.restore()}),r.jsxs("div",{className:"fixed inset-0 w-screen h-screen overflow-hidden bg-slate-950 flex flex-col items-center justify-center",children:[r.jsx(v5,{matchState:z,showHUD:c,onToggleHUD:ye,onResetMatch:Y,onToggleMode:fe,peerRoomId:m,isPeerConnected:y}),r.jsx("canvas",{ref:o,width:i.width,height:i.height,className:`w-full h-full block ${_?"cursor-default":"cursor-none"}`})]})},Q5=()=>{const[o,n]=b.useState(""),[i,l]=b.useState(!1),[c,u]=b.useState(!1),[_,g]=b.useState(""),h=b.useRef(null),[m,p]=b.useState(null),[y,v]=b.useState({x:0,y:0}),[j,k]=b.useState(!1),T=b.useRef({leftStickX:0,leftStickY:0,a:!1,b:!1,x:!1,y:!1,lb:!1,rb:!1,rt:0,start:!1}),O=()=>{var fe;try{const ye=document.documentElement;ye.requestFullscreen?ye.requestFullscreen().catch(()=>{}):ye.webkitRequestFullscreen&&ye.webkitRequestFullscreen(),(fe=window.screen)!=null&&fe.orientation&&"lock"in window.screen.orientation&&window.screen.orientation.lock("landscape").catch(()=>{})}catch{}};b.useEffect(()=>{const ye=new URLSearchParams(window.location.search).get("room");ye&&(n(ye),J(ye))},[]);const B=(fe=20)=>{if(typeof window<"u"&&"vibrate"in navigator)try{navigator.vibrate(fe)}catch{}},J=async fe=>{const ye=fe||o;if(!ye)return;u(!0),g(""),O(),h.current||(h.current=new W5);const xe=h.current;xe.onConnectionStateChange=ue=>{l(ue),u(!1),ue&&B(50)};try{await xe.connectToHost(ye)}catch(ue){console.error("Failed to connect:",ue),g("Gagal terhubung ke Laptop. Pastikan Room Code benar."),u(!1)}},F=b.useCallback(()=>{h.current&&i&&h.current.sendInput({axes:{leftStickX:T.current.leftStickX,leftStickY:T.current.leftStickY,rightStickX:0,rightStickY:0},buttons:{a:T.current.a,b:T.current.b,x:T.current.x,y:T.current.y,lb:T.current.lb,rb:T.current.rb,lt:0,rt:T.current.rt,back:!1,start:T.current.start,lsClick:!1,rsClick:!1}})},[i]),z=fe=>{fe.preventDefault(),O();const ye=fe.clientX,xe=fe.clientY;p({x:ye,y:xe}),v({x:0,y:0}),k(!0)},ie=fe=>{if(!j||!m)return;fe.preventDefault();const ye=fe.clientX-m.x,xe=fe.clientY-m.y,ue=Math.hypot(ye,xe),K=55,Ue=Math.min(ue,K),me=Math.atan2(xe,ye),Se=Math.cos(me)*Ue,N=Math.sin(me)*Ue;v({x:Se,y:N}),T.current.leftStickX=Number((Se/K).toFixed(2)),T.current.leftStickY=Number((N/K).toFixed(2)),F()},ge=()=>{k(!1),p(null),v({x:0,y:0}),T.current.leftStickX=0,T.current.leftStickY=0,F()},Y=(fe,ye)=>{ye&&B(22),fe==="rt"?T.current.rt=ye?1:0:T.current[fe]=ye,F()};return i?r.jsxs("div",{className:"fixed inset-0 bg-[#4e9a51] text-slate-100 select-none touch-none overflow-hidden font-sans w-screen h-screen",children:[r.jsxs("div",{className:"absolute top-2 left-4 right-4 flex items-center justify-between pointer-events-none z-30",children:[r.jsxs("div",{className:"flex items-center gap-2 bg-black/40 border border-white/20 px-3.5 py-1 rounded-full text-white text-[11px] font-bold shadow-lg backdrop-blur-md",children:[r.jsx(r5,{className:"w-3.5 h-3.5 animate-pulse text-emerald-300"}),r.jsxs("span",{children:["CONNECTED (",o,")"]})]}),r.jsxs("div",{className:"flex items-center gap-2 pointer-events-auto",children:[r.jsx("button",{onClick:O,className:"w-9 h-9 rounded-xl bg-black/40 border border-white/30 text-white flex items-center justify-center hover:bg-black/60 active:scale-90 transition shadow-lg backdrop-blur-md",children:r.jsx(Qb,{className:"w-4 h-4 text-white"})}),r.jsx("button",{onClick:()=>Y("start",!0),onPointerUp:()=>Y("start",!1),className:"w-9 h-9 rounded-xl bg-black/40 border border-white/30 text-white flex items-center justify-center hover:bg-black/60 active:scale-90 transition shadow-lg backdrop-blur-md",children:r.jsx(t5,{className:"w-4 h-4 text-white"})})]})]}),r.jsx("div",{onPointerDown:z,onPointerMove:ie,onPointerUp:ge,onPointerCancel:ge,className:"absolute top-0 left-0 w-1/2 h-full z-10 touch-none",children:m?r.jsxs("div",{className:"absolute w-40 h-40 rounded-full bg-[#1b431d]/70 border-4 border-[#2b662d] flex items-center justify-center shadow-2xl pointer-events-none -translate-x-1/2 -translate-y-1/2",style:{left:`${m.x}px`,top:`${m.y}px`},children:[r.jsx("div",{className:"w-20 h-20 rounded-full border border-white/20 pointer-events-none"}),r.jsx("div",{className:"w-14 h-14 rounded-full bg-gradient-to-b from-slate-100 to-slate-300 border-2 border-slate-400 shadow-2xl absolute pointer-events-none transition-transform duration-75 flex items-center justify-center",style:{transform:`translate(${y.x}px, ${y.y}px)`},children:r.jsx("div",{className:"w-10 h-10 rounded-full border-2 border-slate-300/80 bg-slate-200/50"})})]}):r.jsx("div",{className:"absolute left-8 bottom-8 w-32 h-32 rounded-full bg-[#1b431d]/40 border-4 border-[#2b662d]/60 flex items-center justify-center opacity-40 pointer-events-none",children:r.jsx("div",{className:"w-12 h-12 rounded-full bg-slate-200/80 border-2 border-slate-300"})})}),r.jsx("div",{className:"absolute top-0 right-0 w-1/2 h-full z-20 flex items-end justify-end pb-3 pr-3 pointer-events-none",children:r.jsxs("div",{className:"relative w-[241px] h-[256px] pointer-events-auto",children:[r.jsxs("div",{onPointerDown:()=>Y("a",!0),onPointerUp:()=>Y("a",!1),className:"absolute bottom-0 left-0 w-[80px] h-[80px] rounded-full bg-[#3d7a40]/80 border-2 border-[#6cb870] shadow-xl backdrop-blur-sm active:scale-90 transition flex flex-col items-center justify-center cursor-pointer select-none",children:[r.jsx("div",{className:"absolute top-1 text-[8px] text-white/90",children:"▲"}),r.jsx("div",{className:"absolute bottom-1 text-[8px] text-white/90",children:"▼"}),r.jsx("div",{className:"absolute left-1 text-[8px] text-white/90",children:"◄"}),r.jsx("div",{className:"absolute right-1 text-[8px] text-white/90",children:"►"}),r.jsx("span",{className:"text-white font-bold text-sm",children:"Pass"})]}),r.jsxs("div",{onPointerDown:()=>Y("y",!0),onPointerUp:()=>Y("y",!1),className:"absolute top-[68px] left-[44px] w-[80px] h-[80px] rounded-full bg-[#3d7a40]/80 border-2 border-[#6cb870] shadow-xl backdrop-blur-sm active:scale-90 transition flex flex-col items-center justify-center cursor-pointer select-none",children:[r.jsx("div",{className:"absolute top-1 text-[8px] text-white/90",children:"▲"}),r.jsx("div",{className:"absolute bottom-1 text-[8px] text-white/90",children:"▼"}),r.jsx("div",{className:"absolute left-1 text-[8px] text-white/90",children:"◄"}),r.jsx("div",{className:"absolute right-1 text-[8px] text-white/90",children:"►"}),r.jsx("span",{className:"text-white font-bold text-xs",children:"Through"}),r.jsx("span",{className:"text-amber-300 text-[8px] font-extrabold",children:"(Gocek)"})]}),r.jsx("div",{onPointerDown:()=>Y("x",!0),onPointerUp:()=>Y("x",!1),className:"absolute top-0 right-0 w-[96px] h-[96px] rounded-full bg-[#3d7a40]/80 border-2 border-[#6cb870] shadow-2xl backdrop-blur-sm active:scale-90 transition flex flex-col items-center justify-center cursor-pointer select-none",children:r.jsxs("div",{className:"w-[84px] h-[84px] rounded-full border border-white/25 flex flex-col items-center justify-center pointer-events-none",children:[r.jsx("span",{className:"text-white font-bold text-base",children:"Clear"}),r.jsx("span",{className:"text-cyan-300 text-[9px] font-black uppercase tracking-wider",children:"(Tackle)"})]})}),r.jsx("div",{onPointerDown:()=>Y("rt",!0),onPointerUp:()=>Y("rt",!1),className:"absolute bottom-0 right-0 w-[104px] h-[104px] rounded-full bg-[#3d7a40]/80 border-2 border-[#6cb870] shadow-2xl backdrop-blur-sm active:scale-90 transition flex flex-col items-center justify-center cursor-pointer select-none",children:r.jsx("div",{className:"w-[92px] h-[92px] rounded-full border border-white/25 flex flex-col items-center justify-center pointer-events-none",children:r.jsx("span",{className:"text-white font-bold text-base",children:"Dash"})})})]})})]}):r.jsx("div",{className:"fixed inset-0 bg-[#4e9a51] text-slate-100 flex flex-col items-center justify-center p-6 font-sans select-none",children:r.jsxs("div",{className:"max-w-sm w-full bg-[#1b431d]/90 border border-green-300/30 rounded-3xl p-6 shadow-2xl flex flex-col items-center gap-5 text-center backdrop-blur-md",children:[r.jsx("div",{className:"w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white text-2xl",children:"⚽"}),r.jsxs("div",{children:[r.jsx("h1",{className:"text-xl font-extrabold tracking-tight text-white",children:"Football Mobile Pad"}),r.jsx("p",{className:"text-xs text-green-100/80 mt-1",children:"Masukkan 4-Digit Room Code dari Laptop"})]}),r.jsxs("div",{className:"w-full flex flex-col gap-3",children:[r.jsx("input",{type:"text",maxLength:4,value:o,onChange:fe=>n(fe.target.value.toUpperCase()),placeholder:"ROOM CODE (misal 8492)",className:"w-full text-center tracking-widest text-2xl font-mono font-black py-3 rounded-2xl bg-black/40 border border-white/30 text-emerald-300 focus:outline-none focus:border-white"}),_&&r.jsx("p",{className:"text-xs text-red-300 font-semibold",children:_}),r.jsx("button",{onClick:()=>J(),disabled:c||o.length<4,className:"w-full py-3.5 bg-gradient-to-r from-emerald-400 to-green-300 text-slate-950 font-extrabold rounded-2xl text-sm shadow-xl disabled:opacity-50 transition cursor-pointer flex items-center justify-center gap-2",children:c?r.jsxs(r.Fragment,{children:[r.jsx(s5,{className:"w-4 h-4 animate-spin"}),r.jsx("span",{children:"Menghubungkan..."})]}):r.jsx("span",{children:"🎮 Connect Fullscreen Pad"})})]})]})})};var V5=`.styles-module__popup___IhzrD svg[fill=none] {
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
}`,J5={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let o=document.getElementById("feedback-tool-styles-components-icon-transitions");o||(o=document.createElement("style"),o.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(o)),o.textContent=Z5}var Jt=J5,e2=({size:o=16})=>r.jsx("svg",{width:o,height:o,viewBox:"0 0 16 16",fill:"none",children:r.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),t2=({size:o=24,style:n={}})=>r.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",style:n,children:[r.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[r.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),r.jsx("defs",{children:r.jsx("clipPath",{id:"clip0_list_sparkle",children:r.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),n2=({size:o=20,...n})=>r.jsxs("svg",{width:o,height:o,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:[r.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),r.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),s2=({size:o=24,copied:n=!1,tint:i})=>r.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",style:i?{color:i,transition:"color 0.3s ease"}:void 0,children:[r.jsxs("g",{className:`${Jt.iconState} ${n?Jt.hiddenScaled:Jt.visibleScaled}`,children:[r.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),r.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),r.jsxs("g",{className:`${Jt.iconState} ${n?Jt.visibleScaled:Jt.hiddenScaled}`,children:[r.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),o2=({size:o=24,state:n="idle"})=>{const i=n==="idle",l=n==="sent",c=n==="failed",u=n==="sending";return r.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",children:[r.jsx("g",{className:`${Jt.iconStateFast} ${i?Jt.visibleScaled:u?Jt.sending:Jt.hiddenScaled}`,children:r.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),r.jsxs("g",{className:`${Jt.iconStateFast} ${l?Jt.visibleScaled:Jt.hiddenScaled}`,children:[r.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),r.jsxs("g",{className:`${Jt.iconStateFast} ${c?Jt.visibleScaled:Jt.hiddenScaled}`,children:[r.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),r.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},i2=({size:o=24,isOpen:n=!0})=>r.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",children:[r.jsxs("g",{className:`${Jt.iconFade} ${n?Jt.visible:Jt.hidden}`,children:[r.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),r.jsxs("g",{className:`${Jt.iconFade} ${n?Jt.hidden:Jt.visible}`,children:[r.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),r.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),a2=({size:o=24,isPaused:n=!1})=>r.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",children:[r.jsxs("g",{className:`${Jt.iconFadeFast} ${n?Jt.hidden:Jt.visible}`,children:[r.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),r.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),r.jsx("path",{className:`${Jt.iconFadeFast} ${n?Jt.visible:Jt.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),l2=({size:o=16})=>r.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",children:[r.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),r2=({size:o=16})=>r.jsx("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",children:r.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),oy=({size:o=16})=>r.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",children:[r.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[r.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),r.jsx("defs",{children:r.jsx("clipPath",{id:"clip0_2_53",children:r.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),c2=({size:o=24})=>r.jsx("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",children:r.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),u2=({size:o=16})=>r.jsxs("svg",{width:o,height:o,viewBox:"0 0 20 20",fill:"none",children:[r.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),r.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),d2=({size:o=16})=>r.jsx("svg",{width:o,height:o,viewBox:"0 0 20 20",fill:"none",children:r.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),f2=({size:o=16})=>r.jsx("svg",{width:o,height:o,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),h2=({size:o=24})=>r.jsx("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),_2=({size:o=16})=>r.jsx("svg",{width:o,height:o,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),m2=({size:o=24})=>r.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",children:[r.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),r.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),r.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),iy=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],Rf=iy.flatMap(o=>[`:not([${o}])`,`:not([${o}] *)`]).join(""),th="feedback-freeze-styles",Af="__agentation_freeze";function p2(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:n=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const o=window;return o[Af]||(o[Af]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),o[Af]}var St=p2();typeof window<"u"&&!St.installed&&(St.origSetTimeout=window.setTimeout.bind(window),St.origSetInterval=window.setInterval.bind(window),St.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(o,n,...i)=>typeof o=="string"?St.origSetTimeout(o,n):St.origSetTimeout((...l)=>{St.frozen?St.frozenTimeoutQueue.push(()=>o(...l)):o(...l)},n,...i),window.setInterval=(o,n,...i)=>typeof o=="string"?St.origSetInterval(o,n):St.origSetInterval((...l)=>{St.frozen||o(...l)},n,...i),window.requestAnimationFrame=o=>St.origRAF(n=>{St.frozen?St.frozenRAFQueue.push(o):o(n)}),St.installed=!0);var Je=St.origSetTimeout,g2=St.origSetInterval,qa=St.origRAF;function y2(o){return o?iy.some(n=>{var i;return!!((i=o.closest)!=null&&i.call(o,`[${n}]`))}):!1}function x2(){if(typeof document>"u"||St.frozen)return;St.frozen=!0,St.frozenTimeoutQueue=[],St.frozenRAFQueue=[];let o=document.getElementById(th);o||(o=document.createElement("style"),o.id=th),o.textContent=`
    *${Rf},
    *${Rf}::before,
    *${Rf}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(o),St.pausedAnimations=[];try{document.getAnimations().forEach(n=>{var l;if(n.playState!=="running")return;const i=(l=n.effect)==null?void 0:l.target;y2(i)||(n.pause(),St.pausedAnimations.push(n))})}catch{}document.querySelectorAll("video").forEach(n=>{n.paused||(n.dataset.wasPaused="false",n.pause())})}function l0(){var i;if(typeof document>"u"||!St.frozen)return;St.frozen=!1;const o=St.frozenTimeoutQueue;St.frozenTimeoutQueue=[];for(const l of o)St.origSetTimeout(()=>{if(St.frozen){St.frozenTimeoutQueue.push(l);return}try{l()}catch(c){console.warn("[agentation] Error replaying queued timeout:",c)}},0);const n=St.frozenRAFQueue;St.frozenRAFQueue=[];for(const l of n)St.origRAF(c=>{if(St.frozen){St.frozenRAFQueue.push(l);return}l(c)});for(const l of St.pausedAnimations)try{l.play()}catch(c){console.warn("[agentation] Error resuming animation:",c)}St.pausedAnimations=[],(i=document.getElementById(th))==null||i.remove(),document.querySelectorAll("video").forEach(l=>{l.dataset.wasPaused==="false"&&(l.play().catch(()=>{}),delete l.dataset.wasPaused)})}function Df(o){if(!o)return;const n=i=>i.stopImmediatePropagation();document.addEventListener("focusin",n,!0),document.addEventListener("focusout",n,!0);try{o.focus()}finally{document.removeEventListener("focusin",n,!0),document.removeEventListener("focusout",n,!0)}}var hu=b.forwardRef(function({element:n,timestamp:i,selectedText:l,placeholder:c="What should change?",initialValue:u="",submitLabel:_="Add",onSubmit:g,onCancel:h,onDelete:m,style:p,accentColor:y="#3c82f7",isExiting:v=!1,lightMode:j=!1,computedStyles:k},T){const[O,B]=b.useState(u),[J,F]=b.useState(!1),[z,ie]=b.useState("initial"),[ge,Y]=b.useState(!1),[fe,ye]=b.useState(!1),xe=b.useRef(null),ue=b.useRef(null),K=b.useRef(null),Ue=b.useRef(null);b.useEffect(()=>{v&&z!=="exit"&&ie("exit")},[v,z]),b.useEffect(()=>{Je(()=>{ie("enter")},0);const be=Je(()=>{ie("entered")},200),Ae=Je(()=>{const A=xe.current;A&&(Df(A),A.selectionStart=A.selectionEnd=A.value.length,A.scrollTop=A.scrollHeight)},50);return()=>{clearTimeout(be),clearTimeout(Ae),K.current&&clearTimeout(K.current),Ue.current&&clearTimeout(Ue.current)}},[]);const me=b.useCallback(()=>{Ue.current&&clearTimeout(Ue.current),F(!0),Ue.current=Je(()=>{F(!1),Df(xe.current)},250)},[]);b.useImperativeHandle(T,()=>({shake:me}),[me]);const Se=b.useCallback(()=>{ie("exit"),K.current=Je(()=>{h()},150)},[h]),N=b.useCallback(()=>{O.trim()&&g(O.trim())},[O,g]),ce=b.useCallback(be=>{be.stopPropagation(),!be.nativeEvent.isComposing&&(be.key==="Enter"&&!be.shiftKey&&(be.preventDefault(),N()),be.key==="Escape"&&Se())},[N,Se]),W=[sn.popup,j?sn.light:"",z==="enter"?sn.enter:"",z==="entered"?sn.entered:"",z==="exit"?sn.exit:"",J?sn.shake:""].filter(Boolean).join(" ");return r.jsxs("div",{ref:ue,className:W,"data-annotation-popup":!0,style:p,onClick:be=>be.stopPropagation(),children:[r.jsxs("div",{className:sn.header,children:[k&&Object.keys(k).length>0?r.jsxs("button",{className:sn.headerToggle,onClick:()=>{const be=fe;ye(!fe),be&&Je(()=>Df(xe.current),0)},type:"button",children:[r.jsx("svg",{className:`${sn.chevron} ${fe?sn.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),r.jsx("span",{className:sn.element,children:n})]}):r.jsx("span",{className:sn.element,children:n}),i&&r.jsx("span",{className:sn.timestamp,children:i})]}),k&&Object.keys(k).length>0&&r.jsx("div",{className:`${sn.stylesWrapper} ${fe?sn.expanded:""}`,children:r.jsx("div",{className:sn.stylesInner,children:r.jsx("div",{className:sn.stylesBlock,children:Object.entries(k).map(([be,Ae])=>r.jsxs("div",{className:sn.styleLine,children:[r.jsx("span",{className:sn.styleProperty,children:be.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",r.jsx("span",{className:sn.styleValue,children:Ae}),";"]},be))})})}),l&&r.jsxs("div",{className:sn.quote,children:["“",l.slice(0,80),l.length>80?"...":"","”"]}),r.jsx("textarea",{ref:xe,className:sn.textarea,style:{borderColor:ge?y:void 0},placeholder:c,value:O,onChange:be=>B(be.target.value),onFocus:()=>Y(!0),onBlur:()=>Y(!1),rows:2,onKeyDown:ce}),r.jsxs("div",{className:sn.actions,children:[m&&r.jsx("div",{className:sn.deleteWrapper,children:r.jsx("button",{className:sn.deleteButton,onClick:m,type:"button",children:r.jsx(h2,{size:22})})}),r.jsx("button",{className:sn.cancel,onClick:Se,children:"Cancel"}),r.jsx("button",{className:sn.submit,style:{backgroundColor:y,opacity:O.trim()?1:.4},onClick:N,disabled:!O.trim(),children:_})]})]})}),b2=({content:o,children:n,...i})=>{const[l,c]=b.useState(!1),[u,_]=b.useState(!1),[g,h]=b.useState({top:0,right:0}),m=b.useRef(null),p=b.useRef(null),y=b.useRef(null),v=()=>{if(m.current){const T=m.current.getBoundingClientRect();h({top:T.top+T.height/2,right:window.innerWidth-T.left+8})}},j=()=>{_(!0),y.current&&(clearTimeout(y.current),y.current=null),v(),p.current=Je(()=>{c(!0)},500)},k=()=>{p.current&&(clearTimeout(p.current),p.current=null),c(!1),y.current=Je(()=>{_(!1)},150)};return b.useEffect(()=>()=>{p.current&&clearTimeout(p.current),y.current&&clearTimeout(y.current)},[]),r.jsxs(r.Fragment,{children:[r.jsx("span",{ref:m,onMouseEnter:j,onMouseLeave:k,...i,children:n}),u&&eg.createPortal(r.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:g.top,right:g.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:l?1:0,transition:"opacity 0.15s ease"},children:o}),document.body)]})},v2=`.styles-module__tooltip___mcXL2 {
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
}`,w2={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let o=document.getElementById("feedback-tool-styles-help-tooltip-styles");o||(o=document.createElement("style"),o.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(o)),o.textContent=v2}var r0=w2,Ki=({content:o})=>r.jsx(b2,{className:r0.tooltip,content:o,children:r.jsx(n2,{className:r0.tooltipIcon})}),Ne={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},ay=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...Ne.navigation},{type:"header",label:"Header",...Ne.header},{type:"hero",label:"Hero",...Ne.hero},{type:"section",label:"Section",...Ne.section},{type:"sidebar",label:"Sidebar",...Ne.sidebar},{type:"footer",label:"Footer",...Ne.footer},{type:"modal",label:"Modal",...Ne.modal},{type:"banner",label:"Banner",...Ne.banner},{type:"drawer",label:"Drawer",...Ne.drawer},{type:"popover",label:"Popover",...Ne.popover},{type:"divider",label:"Divider",...Ne.divider}]},{section:"Content",items:[{type:"card",label:"Card",...Ne.card},{type:"text",label:"Text",...Ne.text},{type:"image",label:"Image",...Ne.image},{type:"video",label:"Video",...Ne.video},{type:"table",label:"Table",...Ne.table},{type:"grid",label:"Grid",...Ne.grid},{type:"list",label:"List",...Ne.list},{type:"chart",label:"Chart",...Ne.chart},{type:"codeBlock",label:"Code Block",...Ne.codeBlock},{type:"map",label:"Map",...Ne.map},{type:"timeline",label:"Timeline",...Ne.timeline},{type:"calendar",label:"Calendar",...Ne.calendar},{type:"accordion",label:"Accordion",...Ne.accordion},{type:"carousel",label:"Carousel",...Ne.carousel},{type:"logo",label:"Logo",...Ne.logo},{type:"faq",label:"FAQ",...Ne.faq},{type:"gallery",label:"Gallery",...Ne.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...Ne.button},{type:"input",label:"Input",...Ne.input},{type:"search",label:"Search",...Ne.search},{type:"form",label:"Form",...Ne.form},{type:"tabs",label:"Tabs",...Ne.tabs},{type:"dropdown",label:"Dropdown",...Ne.dropdown},{type:"toggle",label:"Toggle",...Ne.toggle},{type:"stepper",label:"Stepper",...Ne.stepper},{type:"rating",label:"Rating",...Ne.rating},{type:"fileUpload",label:"File Upload",...Ne.fileUpload},{type:"checkbox",label:"Checkbox",...Ne.checkbox},{type:"radio",label:"Radio",...Ne.radio},{type:"slider",label:"Slider",...Ne.slider},{type:"datePicker",label:"Date Picker",...Ne.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...Ne.avatar},{type:"badge",label:"Badge",...Ne.badge},{type:"tag",label:"Tag",...Ne.tag},{type:"breadcrumb",label:"Breadcrumb",...Ne.breadcrumb},{type:"pagination",label:"Pagination",...Ne.pagination},{type:"progress",label:"Progress",...Ne.progress},{type:"alert",label:"Alert",...Ne.alert},{type:"toast",label:"Toast",...Ne.toast},{type:"notification",label:"Notification",...Ne.notification},{type:"tooltip",label:"Tooltip",...Ne.tooltip},{type:"stat",label:"Stat",...Ne.stat},{type:"skeleton",label:"Skeleton",...Ne.skeleton},{type:"chip",label:"Chip",...Ne.chip},{type:"icon",label:"Icon",...Ne.icon},{type:"spinner",label:"Spinner",...Ne.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...Ne.pricing},{type:"testimonial",label:"Testimonial",...Ne.testimonial},{type:"cta",label:"CTA",...Ne.cta},{type:"productCard",label:"Product Card",...Ne.productCard},{type:"profile",label:"Profile",...Ne.profile},{type:"feature",label:"Feature",...Ne.feature},{type:"team",label:"Team",...Ne.team},{type:"login",label:"Login",...Ne.login},{type:"contact",label:"Contact",...Ne.contact}]}],no={};for(const o of ay)for(const n of o.items)no[n.type]=n;function le({w:o,h:n=3,strong:i}){return r.jsx("div",{style:{width:typeof o=="number"?`${o}px`:o,height:n,borderRadius:2,background:i?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function Ft({w:o,h:n,radius:i=3,style:l}){return r.jsx("div",{style:{width:typeof o=="number"?`${o}px`:o,height:typeof n=="number"?`${n}px`:n,borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...l}})}function ds({size:o}){return r.jsx("div",{style:{width:o,height:o,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function S2({width:o,height:n}){const i=Math.max(8,n*.2);return r.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${i}px`,gap:o*.02},children:[r.jsx(Ft,{w:Math.max(20,n*.5),h:Math.max(12,n*.4),radius:2}),r.jsxs("div",{style:{flex:1,display:"flex",gap:o*.03,marginLeft:o*.04},children:[r.jsx(le,{w:o*.06}),r.jsx(le,{w:o*.07}),r.jsx(le,{w:o*.05}),r.jsx(le,{w:o*.06})]}),r.jsx(Ft,{w:o*.1,h:Math.min(28,n*.5),radius:4})]})}function k2({width:o,height:n,text:i}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.05},children:[i?r.jsx("span",{style:{fontSize:Math.min(20,n*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:i}):r.jsx(le,{w:o*.5,h:Math.max(6,n*.04),strong:!0}),r.jsx(le,{w:o*.6}),r.jsx(le,{w:o*.4}),r.jsx(Ft,{w:Math.min(140,o*.2),h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.06}})]})}function C2({width:o,height:n}){const i=Math.max(3,Math.floor(n/36));return r.jsxs("div",{style:{padding:o*.08,display:"flex",flexDirection:"column",gap:n*.03},children:[r.jsx(le,{w:o*.6,h:4,strong:!0}),Array.from({length:i},(l,c)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx(Ft,{w:10,h:10,radius:2}),r.jsx(le,{w:o*(.4+c*17%30/100)})]},c))]})}function j2({width:o,height:n}){const i=Math.max(2,Math.min(4,Math.floor(o/160)));return r.jsx("div",{style:{display:"flex",padding:`${n*.12}px ${o*.03}px`,gap:o*.05},children:Array.from({length:i},(l,c)=>r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[r.jsx(le,{w:"60%",h:3,strong:!0}),r.jsx(le,{w:"80%",h:2}),r.jsx(le,{w:"70%",h:2}),r.jsx(le,{w:"60%",h:2})]},c))})}function M2({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[r.jsx(le,{w:o*.3,h:4,strong:!0}),r.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),r.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[r.jsx(le,{w:"90%"}),r.jsx(le,{w:"70%"}),r.jsx(le,{w:"80%"})]}),r.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[r.jsx(Ft,{w:70,h:26,radius:4}),r.jsx(Ft,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function T2({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),r.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[r.jsx(le,{w:"70%",h:4,strong:!0}),r.jsx(le,{w:"95%",h:2}),r.jsx(le,{w:"85%",h:2}),r.jsx(le,{w:"50%",h:2})]})]})}function E2({width:o,height:n,text:i}){if(i)return r.jsx("div",{style:{padding:4,fontSize:Math.min(14,n*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:i});const l=Math.max(2,Math.floor(n/18));return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[r.jsx(le,{w:o*.6,h:5,strong:!0}),Array.from({length:l},(c,u)=>r.jsx(le,{w:`${70+u*13%25}%`,h:2},u))]})}function R2({width:o,height:n}){return r.jsx("div",{style:{height:"100%",position:"relative"},children:r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${o} ${n}`,preserveAspectRatio:"none",fill:"none",children:[r.jsx("line",{x1:"0",y1:"0",x2:o,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),r.jsx("line",{x1:o,y1:"0",x2:"0",y2:n,stroke:"var(--agd-stroke)",strokeWidth:"1"}),r.jsx("circle",{cx:o*.3,cy:n*.3,r:Math.min(o,n)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function A2({width:o,height:n}){const i=Math.max(2,Math.min(5,Math.floor(o/100))),l=Math.max(2,Math.min(6,Math.floor(n/32)));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:i},(c,u)=>r.jsx("div",{style:{flex:1,padding:"0 8px"},children:r.jsx(le,{w:"70%",h:3,strong:!0})},u))}),Array.from({length:l},(c,u)=>r.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:i},(_,g)=>r.jsx("div",{style:{flex:1,padding:"0 8px"},children:r.jsx(le,{w:`${50+(u*7+g*13)%40}%`,h:2})},g))},u))]})}function D2({width:o,height:n}){const i=Math.max(2,Math.floor(n/28));return r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:i},(l,c)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[r.jsx(ds,{size:8}),r.jsx(le,{w:`${55+c*17%35}%`,h:2})]},c))})}function N2({width:o,height:n,text:i}){return r.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,n/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:i?r.jsx("span",{style:{fontSize:Math.min(13,n*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:i}):r.jsx(le,{w:Math.max(20,o*.5),h:3,strong:!0})})}function L2({width:o,height:n}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[r.jsx(le,{w:Math.min(80,o*.3),h:2}),r.jsx("div",{style:{height:Math.min(36,n*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:r.jsx(le,{w:"40%",h:2})})]})}function O2({width:o,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:n*.04,padding:8},children:[Array.from({length:i},(l,c)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[r.jsx(le,{w:60+c*17%30,h:2}),r.jsx(Ft,{w:"100%",h:28,radius:4})]},c)),r.jsx(Ft,{w:Math.min(120,o*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function z2({width:o,height:n}){const i=Math.max(2,Math.min(4,Math.floor(o/120)));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(l,c)=>r.jsx("div",{style:{padding:"8px 12px",borderBottom:c===0?"2px solid var(--agd-bar-strong)":"none"},children:r.jsx(le,{w:60,h:3,strong:c===0})},c))}),r.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[r.jsx(le,{w:"80%",h:2}),r.jsx(le,{w:"65%",h:2}),r.jsx(le,{w:"75%",h:2})]})]})}function B2({width:o,height:n}){const i=Math.min(o,n)/2;return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${o} ${n}`,fill:"none",children:[r.jsx("circle",{cx:o/2,cy:n/2,r:i-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),r.jsx("circle",{cx:o/2,cy:n*.38,r:i*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),r.jsx("path",{d:`M${o/2-i*.55} ${n*.78} C${o/2-i*.55} ${n*.55} ${o/2+i*.55} ${n*.55} ${o/2+i*.55} ${n*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function $2({width:o,height:n}){return r.jsx("div",{style:{height:"100%",borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(le,{w:Math.max(16,o*.5),h:2,strong:!0})})}function P2({width:o,height:n}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[r.jsx(le,{w:o*.5,h:Math.max(5,n*.06),strong:!0}),r.jsx(le,{w:o*.35})]})}function I2({width:o,height:n}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:n*.04,padding:o*.04},children:[r.jsx(le,{w:o*.3,h:4,strong:!0}),r.jsx(le,{w:o*.7}),r.jsx(le,{w:o*.5}),r.jsxs("div",{style:{flex:1,display:"flex",gap:o*.03,marginTop:n*.06},children:[r.jsx(Ft,{w:"33%",h:"100%",radius:4}),r.jsx(Ft,{w:"33%",h:"100%",radius:4}),r.jsx(Ft,{w:"33%",h:"100%",radius:4})]})]})}function U2({width:o,height:n}){const i=Math.max(2,Math.min(4,Math.floor(o/140))),l=Math.max(1,Math.min(3,Math.floor(n/120)));return r.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${l}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:i*l},(c,u)=>r.jsx(Ft,{w:"100%",h:"100%",radius:4},u))})}function H2({width:o,height:n}){const i=Math.max(2,Math.floor((n-32)/28));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:r.jsx(le,{w:o*.5,h:3,strong:!0})}),r.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:i},(l,c)=>r.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:c===0?"var(--agd-fill)":"transparent"},children:r.jsx(le,{w:`${50+c*17%35}%`,h:2,strong:c===0})},c))})]})}function Y2({width:o,height:n}){const i=Math.min(o,n)/2;return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${o} ${n}`,fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:o-2,height:n-2,rx:i,stroke:"var(--agd-stroke)",strokeWidth:"1"}),r.jsx("circle",{cx:o-i,cy:n/2,r:i*.7,fill:"var(--agd-bar)"})]})}function X2({width:o,height:n}){const i=Math.min(n/2,20);return r.jsxs("div",{style:{height:"100%",borderRadius:i,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${i*.6}px`,gap:6},children:[r.jsx(ds,{size:Math.min(14,n*.4)}),r.jsx(le,{w:"50%",h:2})]})}function G2({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[r.jsx(ds,{size:Math.min(20,n*.5)}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx(le,{w:"60%",h:3,strong:!0}),r.jsx(le,{w:"80%",h:2})]}),r.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function F2({width:o,height:n}){return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${o} ${n}`,fill:"none",children:[r.jsx("rect",{x:"0",y:"0",width:o,height:n,rx:n/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),r.jsx("rect",{x:"1",y:"1",width:o*.65,height:n-2,rx:(n-2)/2,fill:"var(--agd-bar)"})]})}function W2({width:o,height:n}){const i=Math.max(3,Math.min(7,Math.floor(o/50))),l=o/(i*2);return r.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:i},(c,u)=>{const _=30+(u*37+17)%55;return r.jsx(Ft,{w:l,h:`${_}%`,radius:2},u)})})}function q2({width:o,height:n}){const i=Math.min(o,n)*.12;return r.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[r.jsx(Ft,{w:"100%",h:"100%",radius:4}),r.jsx("div",{style:{position:"absolute",width:i*2,height:i*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("div",{style:{width:0,height:0,borderLeft:`${i*.6}px solid var(--agd-bar-strong)`,borderTop:`${i*.4}px solid transparent`,borderBottom:`${i*.4}px solid transparent`,marginLeft:i*.15}})})]})}function Q2({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[r.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx(le,{w:"60%",h:2})}),r.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function V2({width:o,height:n}){const i=Math.max(2,Math.min(4,Math.floor(o/80)));return r.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:i},(l,c)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[c>0&&r.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),r.jsx(le,{w:40+c*13%20,h:2,strong:c===i-1})]},c))})}function K2({width:o,height:n}){const i=Math.max(3,Math.min(5,Math.floor(o/40))),l=Math.min(28,n*.8);return r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:i},(c,u)=>r.jsx(Ft,{w:l,h:l,radius:4,style:u===1?{background:"var(--agd-bar)"}:void 0},u))})}function Z2({width:o}){return r.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:r.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function J2({width:o,height:n}){const i=Math.max(2,Math.min(4,Math.floor(n/40)));return r.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(l,c)=>r.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[r.jsx(le,{w:`${40+c*17%25}%`,h:3,strong:!0}),r.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function ev({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[r.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[r.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),r.jsx(Ft,{w:"100%",h:"100%",radius:4}),r.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[r.jsx(ds,{size:5}),r.jsx(ds,{size:5}),r.jsx(ds,{size:5})]})]})}function tv({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:n*.04},children:[r.jsx(le,{w:o*.4,h:3,strong:!0}),r.jsx(le,{w:o*.3,h:6,strong:!0}),r.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(i,l)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[r.jsx(ds,{size:5}),r.jsx(le,{w:`${50+l*17%35}%`,h:2})]},l))}),r.jsx(Ft,{w:o*.7,h:Math.min(32,n*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function nv({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[r.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[r.jsx(le,{w:"90%",h:2}),r.jsx(le,{w:"75%",h:2}),r.jsx(le,{w:"60%",h:2})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx(ds,{size:20}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[r.jsx(le,{w:60,h:3,strong:!0}),r.jsx(le,{w:40,h:2})]})]})]})}function sv({width:o,height:n}){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:n*.08},children:[r.jsx(le,{w:o*.5,h:Math.max(4,n*.05),strong:!0}),r.jsx(le,{w:o*.35}),r.jsx(Ft,{w:Math.min(140,o*.25),h:Math.min(32,n*.15),radius:6,style:{marginTop:n*.04,background:"var(--agd-bar)"}})]})}function ov({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[r.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:r.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx(le,{w:"40%",h:3,strong:!0}),r.jsx(le,{w:"70%",h:2})]})]})}function iv({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[r.jsx(le,{w:o*.4,h:3,strong:!0}),r.jsx(Ft,{w:60,h:Math.min(24,n*.6),radius:4})]})}function av({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[r.jsx(le,{w:o*.5,h:2}),r.jsx(le,{w:o*.4,h:Math.max(8,n*.18),strong:!0}),r.jsx(le,{w:o*.3,h:2})]})}function lv({width:o,height:n}){const i=Math.max(3,Math.min(5,Math.floor(o/100))),l=Math.min(12,n*.35);return r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:i},(c,u)=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[r.jsx("div",{style:{width:l,height:l,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:u===0?"var(--agd-bar)":"transparent",flexShrink:0}}),u<i-1&&r.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},u))})}function rv({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[r.jsx(le,{w:Math.max(16,o*.5),h:2,strong:!0}),r.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function cv({width:o,height:n}){const l=Math.min(n*.7,o/7.5);return r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:l*.2},children:Array.from({length:5},(c,u)=>r.jsx("svg",{width:l,height:l,viewBox:"0 0 16 16",fill:"none",children:r.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:u<3?"var(--agd-bar)":"none"})},u))})}function uv({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${o} ${n}`,fill:"none",style:{position:"absolute",inset:0},children:[r.jsx("line",{x1:0,y1:n*.3,x2:o,y2:n*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),r.jsx("line",{x1:0,y1:n*.6,x2:o,y2:n*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),r.jsx("line",{x1:o*.4,y1:0,x2:o*.6,y2:n,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),r.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:r.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[r.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),r.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function dv({width:o,height:n}){const i=Math.max(3,Math.min(5,Math.floor(n/60)));return r.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[r.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:i},(l,c)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[r.jsx(ds,{size:8}),c<i-1&&r.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},c))}),r.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:i},(l,c)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[r.jsx(le,{w:`${35+c*13%25}%`,h:3,strong:!0}),r.jsx(le,{w:`${50+c*17%30}%`,h:2})]},c))})]})}function fv({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[r.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[r.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),r.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),r.jsx(le,{w:o*.4,h:2}),r.jsx(le,{w:o*.25,h:2})]})}function hv({width:o,height:n}){const i=Math.max(3,Math.min(8,Math.floor(n/20)));return r.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[r.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[r.jsx(ds,{size:6}),r.jsx(ds,{size:6}),r.jsx(ds,{size:6})]}),Array.from({length:i},(l,c)=>r.jsx("div",{style:{display:"flex",gap:6,paddingLeft:c>0&&c<i-1?12:0},children:r.jsx(le,{w:`${25+c*23%50}%`,h:2,strong:c===0})},c))]})}function _v({width:o,height:n}){const c=Math.min((o-16)/7,(n-40)/6);return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[r.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),r.jsx(le,{w:o*.3,h:3,strong:!0}),r.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(u,_)=>r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c*.6},children:r.jsx(le,{w:c*.5,h:2})},`h${_}`)),Array.from({length:35},(u,_)=>r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:c},children:r.jsx("div",{style:{width:c*.6,height:c*.6,borderRadius:"50%",background:_===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:_===12?1:.3}})})},_))]})]})}function mv({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[r.jsx(ds,{size:Math.min(32,n*.55)}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx(le,{w:"50%",h:3,strong:!0}),r.jsx(le,{w:"75%",h:2})]}),r.jsx(le,{w:30,h:2})]})}function pv({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[r.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),r.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[r.jsx(le,{w:"65%",h:4,strong:!0}),r.jsx(le,{w:"40%",h:3}),r.jsx("div",{style:{flex:1}}),r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[r.jsx(le,{w:"30%",h:5,strong:!0}),r.jsx(Ft,{w:Math.min(70,o*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function gv({width:o,height:n}){const i=Math.min(48,n*.3);return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:n*.06},children:[r.jsx(ds,{size:i}),r.jsx(le,{w:o*.45,h:4,strong:!0}),r.jsx(le,{w:o*.3,h:2}),r.jsxs("div",{style:{display:"flex",gap:o*.08,marginTop:n*.04},children:[r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[r.jsx(le,{w:20,h:3,strong:!0}),r.jsx(le,{w:28,h:2})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[r.jsx(le,{w:20,h:3,strong:!0}),r.jsx(le,{w:28,h:2})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[r.jsx(le,{w:20,h:3,strong:!0}),r.jsx(le,{w:28,h:2})]})]})]})}function yv({width:o,height:n}){const i=Math.max(o*.6,80),l=Math.max(3,Math.floor(n/40));return r.jsxs("div",{style:{height:"100%",display:"flex"},children:[r.jsx("div",{style:{width:o-i,background:"var(--agd-fill)",opacity:.3}}),r.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:o*.04},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:n*.06},children:[r.jsx(le,{w:i*.4,h:4,strong:!0}),r.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:l},(c,u)=>r.jsx("div",{style:{padding:"6px 0"},children:r.jsx(le,{w:`${50+u*17%35}%`,h:2,strong:u===0})},u))]})]})}function xv({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[r.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[r.jsx(le,{w:"70%",h:3,strong:!0}),r.jsx(le,{w:"90%",h:2}),r.jsx(le,{w:"60%",h:2})]}),r.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function bv({width:o,height:n}){const i=Math.min(n*.7,o*.3);return r.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:o*.08},children:[r.jsx(Ft,{w:i,h:i,radius:i*.25}),r.jsx(le,{w:o*.45,h:Math.max(4,n*.2),strong:!0})]})}function vv({width:o,height:n}){const i=Math.max(2,Math.min(5,Math.floor(n/56)));return r.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:i},(l,c)=>r.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:c===0?2:1},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[r.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),r.jsx(le,{w:o*(.3+c*13%25/100),h:3,strong:!0})]}),r.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:c===0?"▼":"▶"})]},c))})}function wv({width:o,height:n}){const i=Math.max(2,Math.min(4,Math.floor(o/120))),l=Math.max(1,Math.min(3,Math.floor(n/120)));return r.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${i}, 1fr)`,gridTemplateRows:`repeat(${l}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:i*l},(c,u)=>r.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:r.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[r.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),r.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},u))})}function Sv({width:o,height:n}){const i=Math.min(o,n);return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${o} ${n}`,fill:"none",children:[r.jsx("rect",{x:"1",y:(n-i+2)/2,width:i-2,height:i-2,rx:i*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),r.jsx("path",{d:`M${i*.25} ${n/2}l${i*.2} ${i*.2} ${i*.3}-${i*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function kv({width:o,height:n}){const i=Math.min(o,n)/2-1;return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${o} ${n}`,fill:"none",children:[r.jsx("circle",{cx:o/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),r.jsx("circle",{cx:o/2,cy:n/2,r:i*.45,fill:"var(--agd-bar)"})]})}function Cv({width:o,height:n}){const i=Math.max(2,n*.12),l=Math.min(n*.35,10),c=o*.55;return r.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[r.jsx("div",{style:{width:"100%",height:i,borderRadius:i/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:r.jsx("div",{style:{width:c,height:"100%",borderRadius:i/2,background:"var(--agd-bar)"}})}),r.jsx("div",{style:{position:"absolute",left:c-l,width:l*2,height:l*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function jv({width:o,height:n}){const i=Math.min(36,n*.15),l=7,c=4,u=Math.min((o-16)/l,(n-i-40)/(c+1));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[r.jsxs("div",{style:{height:i,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[r.jsx(le,{w:"40%",h:2}),r.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[r.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),r.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),r.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[r.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),r.jsx(le,{w:o*.25,h:2,strong:!0}),r.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),r.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${l}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:l*c},(_,g)=>r.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:u},children:r.jsx("div",{style:{width:u*.5,height:u*.5,borderRadius:"50%",background:g===10?"var(--agd-bar)":"transparent"},children:r.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:g===10?1:.25}})})})},g))})]})]})}function Mv({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:n*.08,padding:4},children:[r.jsx("div",{style:{width:"100%",height:n*.2,borderRadius:4,background:"var(--agd-fill)"}}),r.jsx("div",{style:{width:"70%",height:Math.max(6,n*.1),borderRadius:3,background:"var(--agd-fill)"}}),r.jsx("div",{style:{width:"90%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}}),r.jsx("div",{style:{width:"50%",height:Math.max(4,n*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function Tv({width:o,height:n}){return r.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:r.jsxs("div",{style:{height:"100%",flex:1,borderRadius:n/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${n*.3}px`,gap:4},children:[r.jsx(le,{w:"60%",h:2,strong:!0}),r.jsx("div",{style:{width:Math.max(6,n*.3),height:Math.max(6,n*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function Ev({width:o,height:n}){const i=Math.min(o,n);return r.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${o} ${n}`,fill:"none",children:r.jsx("path",{d:`M${o/2} ${(n-i)/2+i*.1}l${i*.12} ${i*.25} ${i*.28} ${i*.04}-${i*.2} ${i*.2} ${i*.05} ${i*.28}-${i*.25}-${i*.12}-${i*.25} ${i*.12} ${i*.05}-${i*.28}-${i*.2}-${i*.2} ${i*.28}-${i*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function Rv({width:o,height:n}){const i=Math.min(o,n)/2-2;return r.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${o} ${n}`,fill:"none",children:[r.jsx("circle",{cx:o/2,cy:n/2,r:i,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),r.jsx("path",{d:`M${o/2} ${n/2-i}a${i} ${i} 0 0 1 ${i} ${i}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function Av({width:o,height:n}){const i=Math.min(36,n*.25,o*.12),l=Math.max(1,Math.min(3,Math.floor(n/80)));return r.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:l},(c,u)=>r.jsxs("div",{style:{display:"flex",gap:o*.04,alignItems:"flex-start"},children:[r.jsx(Ft,{w:i,h:i,radius:i*.25}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[r.jsx(le,{w:`${40+u*13%20}%`,h:3,strong:!0}),r.jsx(le,{w:`${60+u*17%25}%`,h:2})]})]},u))})}function Dv({width:o,height:n}){const i=Math.max(2,Math.min(4,Math.floor(o/120))),l=Math.min(36,n*.25);return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:n*.06,padding:n*.06},children:[r.jsx(le,{w:o*.3,h:4,strong:!0}),r.jsx("div",{style:{display:"flex",gap:o*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:i},(c,u)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[r.jsx(ds,{size:l}),r.jsx(le,{w:o*.12,h:3,strong:!0}),r.jsx(le,{w:o*.08,h:2})]},u))})]})}function Nv({width:o,height:n}){const i=Math.max(2,Math.min(3,Math.floor(n/80)));return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:o*.06,gap:n*.04},children:[r.jsx(le,{w:o*.5,h:Math.max(5,n*.04),strong:!0}),r.jsx(le,{w:o*.35,h:2}),r.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:n*.03,marginTop:n*.04},children:Array.from({length:i},(l,c)=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[r.jsx(le,{w:Math.min(60,o*.2),h:2}),r.jsx(Ft,{w:"100%",h:Math.min(32,n*.1),radius:4})]},c))}),r.jsx(Ft,{w:"100%",h:Math.min(36,n*.12),radius:6,style:{marginTop:n*.03,background:"var(--agd-bar)"}}),r.jsx(le,{w:o*.4,h:2})]})}function Lv({width:o,height:n}){return r.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:o*.04,gap:n*.03},children:[r.jsx(le,{w:o*.4,h:4,strong:!0}),r.jsx(le,{w:o*.6,h:2}),r.jsxs("div",{style:{display:"flex",gap:6,marginTop:n*.03},children:[r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx(le,{w:50,h:2}),r.jsx(Ft,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),r.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[r.jsx(le,{w:40,h:2}),r.jsx(Ft,{w:"100%",h:Math.min(28,n*.1),radius:4})]})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[r.jsx(le,{w:50,h:2}),r.jsx(Ft,{w:"100%",h:Math.min(28,n*.1),radius:4})]}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[r.jsx(le,{w:60,h:2}),r.jsx(Ft,{w:"100%",h:"100%",radius:4})]}),r.jsx(Ft,{w:Math.min(120,o*.3),h:Math.min(30,n*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var Ov={navigation:S2,hero:k2,sidebar:C2,footer:j2,modal:M2,card:T2,text:E2,image:R2,table:A2,list:D2,button:N2,input:L2,form:O2,tabs:z2,avatar:B2,badge:$2,header:P2,section:I2,grid:U2,dropdown:H2,toggle:Y2,search:X2,toast:G2,progress:F2,chart:W2,video:q2,tooltip:Q2,breadcrumb:V2,pagination:K2,divider:Z2,accordion:J2,carousel:ev,pricing:tv,testimonial:nv,cta:sv,alert:ov,banner:iv,stat:av,stepper:lv,tag:rv,rating:cv,map:uv,timeline:dv,fileUpload:fv,codeBlock:hv,calendar:_v,notification:mv,productCard:pv,profile:gv,drawer:yv,popover:xv,logo:bv,faq:vv,gallery:wv,checkbox:Sv,radio:kv,slider:Cv,datePicker:jv,skeleton:Mv,chip:Tv,icon:Ev,spinner:Rv,feature:Av,team:Dv,login:Nv,contact:Lv};function zv({type:o,width:n,height:i,text:l}){const c=Ov[o];return c?r.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:r.jsx(c,{width:n,height:i,text:l})}):r.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:r.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:o})})}var Bv=`svg[fill=none] {
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
}`,$v={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let o=document.getElementById("feedback-tool-styles-design-mode-styles");o||(o=document.createElement("style"),o.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(o)),o.textContent=Bv}var ne=$v,Xa=24,Hc=5;function c0(o,n,i,l,c){let u=1/0,_=1/0;const g=o.x,h=o.x+o.width,m=o.x+o.width/2,p=o.y,y=o.y+o.height,v=o.y+o.height/2,j=!l,k=j?[g,h,m]:[...l.left?[g]:[],...l.right?[h]:[]],T=j?[p,y,v]:[...l.top?[p]:[],...l.bottom?[y]:[]],O=[];for(const ue of n)i.has(ue.id)||O.push(ue);c&&O.push(...c);for(const ue of O){const K=ue.x,Ue=ue.x+ue.width,me=ue.x+ue.width/2,Se=ue.y,N=ue.y+ue.height,ce=ue.y+ue.height/2;for(const W of k)for(const be of[K,Ue,me]){const Ae=be-W;Math.abs(Ae)<Hc&&Math.abs(Ae)<Math.abs(u)&&(u=Ae)}for(const W of T)for(const be of[Se,N,ce]){const Ae=be-W;Math.abs(Ae)<Hc&&Math.abs(Ae)<Math.abs(_)&&(_=Ae)}}const B=Math.abs(u)<Hc?u:0,J=Math.abs(_)<Hc?_:0,F=[],z=new Set,ie=g+B,ge=h+B,Y=m+B,fe=p+J,ye=y+J,xe=v+J;for(const ue of O){const K=ue.x,Ue=ue.x+ue.width,me=ue.x+ue.width/2,Se=ue.y,N=ue.y+ue.height,ce=ue.y+ue.height/2;for(const W of[K,me,Ue])for(const be of[ie,Y,ge])if(Math.abs(be-W)<.5){const Ae=`x:${Math.round(W)}`;z.has(Ae)||(z.add(Ae),F.push({axis:"x",pos:W}))}for(const W of[Se,ce,N])for(const be of[fe,xe,ye])if(Math.abs(be-W)<.5){const Ae=`y:${Math.round(W)}`;z.has(Ae)||(z.add(Ae),F.push({axis:"y",pos:W}))}}return{dx:B,dy:J,guides:F}}function u0(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function Pv({placements:o,onChange:n,activeComponent:i,onActiveComponentChange:l,isDarkMode:c,exiting:u,onInteractionChange:_,className:g,passthrough:h,extraSnapRects:m,onSelectionChange:p,deselectSignal:y,onDragMove:v,onDragEnd:j,clearSignal:k,wireframe:T}){const[O,B]=b.useState(new Set),[J,F]=b.useState(null),[z,ie]=b.useState(null),[ge,Y]=b.useState(null),[fe,ye]=b.useState([]),[xe,ue]=b.useState(null),[K,Ue]=b.useState(!1),me=b.useRef(!1),[Se,N]=b.useState(new Set),ce=b.useRef(new Map),W=b.useRef(null),be=b.useRef(null),Ae=b.useRef(o);Ae.current=o;const A=b.useRef(p);A.current=p;const Z=b.useRef(v);Z.current=v;const _e=b.useRef(j);_e.current=j;const je=b.useRef(y);b.useEffect(()=>{y!==je.current&&(je.current=y,B(new Set))},[y]);const Xe=b.useRef(k);b.useEffect(()=>{if(k!==void 0&&k!==Xe.current){Xe.current=k;const V=new Set(Ae.current.map(De=>De.id));V.size>0&&(N(V),B(new Set),be.current=null,Je(()=>{n([]),N(new Set)},180))}},[k,n]),b.useEffect(()=>{const V=De=>{const Ke=De.target;if(!(Ke.tagName==="INPUT"||Ke.tagName==="TEXTAREA"||Ke.isContentEditable)){if((De.key==="Backspace"||De.key==="Delete")&&O.size>0){De.preventDefault();const at=new Set(O);N(at),B(new Set),Je(()=>{n(Ae.current.filter(qe=>!at.has(qe.id))),N(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(De.key)&&O.size>0){De.preventDefault();const at=De.shiftKey?20:1,qe=De.key==="ArrowLeft"?-at:De.key==="ArrowRight"?at:0,Te=De.key==="ArrowUp"?-at:De.key==="ArrowDown"?at:0;n(o.map(rt=>O.has(rt.id)?{...rt,x:Math.max(0,rt.x+qe),y:Math.max(0,rt.y+Te)}:rt));return}if(De.key==="Escape"){i?l(null):O.size>0&&B(new Set);return}}};return document.addEventListener("keydown",V),()=>document.removeEventListener("keydown",V)},[O,i,o,n,l]);const lt=b.useCallback(V=>{if(V.button!==0||h||V.target.closest(`.${ne.placement}`))return;V.preventDefault(),V.stopPropagation();const Ke=window.scrollY,We=V.clientX,at=V.clientY;if(i){be.current="place",_==null||_(!0);let qe=!1,Te=We,rt=at;const vt=ze=>{Te=ze.clientX,rt=ze.clientY;const I=Math.abs(Te-We),X=Math.abs(rt-at);if((I>5||X>5)&&(qe=!0),qe){const oe=Math.min(We,Te),re=Math.min(at,rt),Le=Math.abs(Te-We),ke=Math.abs(rt-at);F({x:oe,y:re,w:Le,h:ke}),Y({x:ze.clientX+12,y:ze.clientY+12,text:`${Math.round(Le)} × ${Math.round(ke)}`})}},Ht=ze=>{window.removeEventListener("mousemove",vt),window.removeEventListener("mouseup",Ht),F(null),Y(null),be.current=null,_==null||_(!1);const I=Ne[i];let X,oe,re,Le;qe?(X=Math.min(We,Te),oe=Math.min(at,rt)+Ke,re=Math.max(Xa,Math.abs(Te-We)),Le=Math.max(Xa,Math.abs(rt-at))):(re=I.width,Le=I.height,X=We-re/2,oe=at+Ke-Le/2),X=Math.max(0,X),oe=Math.max(0,oe);const ke={id:u0(),type:i,x:X,y:oe,width:re,height:Le,scrollY:Ke,timestamp:Date.now()},he=[...o,ke];n(he),B(new Set([ke.id])),l(null)};window.addEventListener("mousemove",vt),window.addEventListener("mouseup",Ht)}else{V.shiftKey||B(new Set),be.current="select";let qe=!1;const Te=vt=>{const Ht=Math.abs(vt.clientX-We),ze=Math.abs(vt.clientY-at);if((Ht>4||ze>4)&&(qe=!0),qe){const I=Math.min(We,vt.clientX),X=Math.min(at,vt.clientY);ie({x:I,y:X,w:Math.abs(vt.clientX-We),h:Math.abs(vt.clientY-at)})}},rt=vt=>{if(window.removeEventListener("mousemove",Te),window.removeEventListener("mouseup",rt),be.current=null,qe){const Ht=Math.min(We,vt.clientX),ze=Math.min(at,vt.clientY)+Ke,I=Math.abs(vt.clientX-We),X=Math.abs(vt.clientY-at),oe=new Set(V.shiftKey?O:new Set);for(const re of o)re.y-Ke,re.x+re.width>Ht&&re.x<Ht+I&&re.y+re.height>ze&&re.y<ze+X&&oe.add(re.id);B(oe)}ie(null)};window.addEventListener("mousemove",Te),window.addEventListener("mouseup",rt)}},[i,h,o,n,O]),ct=b.useCallback((V,De)=>{var ke;if(V.button!==0)return;const Ke=V.target;if(Ke.closest(`.${ne.handle}`)||Ke.closest(`.${ne.deleteButton}`))return;V.preventDefault(),V.stopPropagation();let We;V.shiftKey?(We=new Set(O),We.has(De)?We.delete(De):We.add(De)):O.has(De)?We=new Set(O):We=new Set([De]),B(We),(We.size!==O.size||[...We].some(he=>!O.has(he)))&&((ke=A.current)==null||ke.call(A,We,V.shiftKey));const qe=V.clientX,Te=V.clientY,rt=new Map;for(const he of o)We.has(he.id)&&rt.set(he.id,{x:he.x,y:he.y});be.current="move",_==null||_(!0);let vt=!1,Ht=!1,ze=o,I=0,X=0;const oe=new Map;for(const he of o)rt.has(he.id)&&oe.set(he.id,{w:he.width,h:he.height});const re=he=>{var dn;const st=he.clientX-qe,ut=he.clientY-Te;if((Math.abs(st)>2||Math.abs(ut)>2)&&(vt=!0),!vt)return;if(he.altKey&&!Ht){Ht=!0;const He=[];for(const Nt of o)rt.has(Nt.id)&&He.push({...Nt,id:u0(),timestamp:Date.now()});ze=[...o,...He]}let Ct=1/0,et=1/0,Re=-1/0,bt=-1/0;for(const[He,Nt]of rt){const yn=oe.get(He);yn&&(Ct=Math.min(Ct,Nt.x+st),et=Math.min(et,Nt.y+ut),Re=Math.max(Re,Nt.x+st+yn.w),bt=Math.max(bt,Nt.y+ut+yn.h))}const jt={x:Ct,y:et,width:Re-Ct,height:bt-et},{dx:Wt,dy:Ee,guides:pt}=c0(jt,ze,new Set(rt.keys()),void 0,m);ye(pt);const gt=st+Wt,dt=ut+Ee;I=gt,X=dt,n(ze.map(He=>{const Nt=rt.get(He.id);return Nt?{...He,x:Math.max(0,Nt.x+gt),y:Math.max(0,Nt.y+dt)}:He})),(dn=Z.current)==null||dn.call(Z,gt,dt)},Le=()=>{var he;window.removeEventListener("mousemove",re),window.removeEventListener("mouseup",Le),be.current=null,_==null||_(!1),ye([]),(he=_e.current)==null||he.call(_e,I,X,vt)};window.addEventListener("mousemove",re),window.addEventListener("mouseup",Le)},[O,o,n,_]),en=b.useCallback((V,De,Ke)=>{V.preventDefault(),V.stopPropagation();const We=o.find(oe=>oe.id===De);if(!We)return;B(new Set([De])),be.current="resize",_==null||_(!0);const at=V.clientX,qe=V.clientY,Te=We.width,rt=We.height,vt=We.x,Ht=We.y,ze={left:Ke.includes("w"),right:Ke.includes("e"),top:Ke.includes("n"),bottom:Ke.includes("s")},I=oe=>{const re=oe.clientX-at,Le=oe.clientY-qe;let ke=Te,he=rt,st=vt,ut=Ht;Ke.includes("e")&&(ke=Math.max(Xa,Te+re)),Ke.includes("w")&&(ke=Math.max(Xa,Te-re),st=vt+Te-ke),Ke.includes("s")&&(he=Math.max(Xa,rt+Le)),Ke.includes("n")&&(he=Math.max(Xa,rt-Le),ut=Ht+rt-he);const Ct={x:st,y:ut,width:ke,height:he},{dx:et,dy:Re,guides:bt}=c0(Ct,Ae.current,new Set([De]),ze,m);ye(bt),et!==0&&(ze.right?ke+=et:ze.left&&(st+=et,ke-=et)),Re!==0&&(ze.bottom?he+=Re:ze.top&&(ut+=Re,he-=Re)),n(Ae.current.map(jt=>jt.id===De?{...jt,x:st,y:ut,width:ke,height:he}:jt)),Y({x:oe.clientX+12,y:oe.clientY+12,text:`${Math.round(ke)} × ${Math.round(he)}`})},X=()=>{window.removeEventListener("mousemove",I),window.removeEventListener("mouseup",X),Y(null),be.current=null,_==null||_(!1),ye([])};window.addEventListener("mousemove",I),window.addEventListener("mouseup",X)},[o,n,_]),Ge=b.useCallback(V=>{be.current=null,N(De=>{const Ke=new Set(De);return Ke.add(V),Ke}),B(De=>{const Ke=new Set(De);return Ke.delete(V),Ke}),Je(()=>{n(Ae.current.filter(De=>De.id!==V)),N(De=>{const Ke=new Set(De);return Ke.delete(V),Ke})},180)},[n]),nt={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},kt=b.useCallback(V=>{const De=o.find(Ke=>Ke.id===V);De&&(me.current=!!De.text,ue(V),Ue(!1))},[o]),_t=b.useCallback(()=>{xe&&(Ue(!0),Je(()=>{ue(null),Ue(!1)},150))},[xe]);b.useEffect(()=>{u&&xe&&_t()},[u]);const Ot=b.useCallback(V=>{xe&&(n(o.map(De=>De.id===xe?{...De,text:V.trim()||void 0}:De)),_t())},[xe,o,n,_t]),Pt=typeof window<"u"?window.scrollY:0,In=["nw","ne","se","sw"],is=T?"#f97316":"#3c82f7",Un=[{dir:"n",cls:ne.edgeN,arrow:r.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:r.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:is})})},{dir:"e",cls:ne.edgeE,arrow:r.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:r.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:is})})},{dir:"s",cls:ne.edgeS,arrow:r.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:r.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:is})})},{dir:"w",cls:ne.edgeW,arrow:r.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:r.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:is})})}];return r.jsxs(r.Fragment,{children:[r.jsx("div",{ref:W,className:`${ne.overlay} ${c?"":ne.light} ${i?ne.placing:""} ${h?ne.passthrough:""} ${u?ne.overlayExiting:""} ${T?ne.wireframe:""}${g?` ${g}`:""}`,"data-feedback-toolbar":!0,onMouseDown:lt,children:o.map(V=>{var at;const De=O.has(V.id),Ke=((at=no[V.type])==null?void 0:at.label)||V.type,We=V.y-Pt;return r.jsxs("div",{"data-design-placement":V.id,className:`${ne.placement} ${De?ne.selected:""} ${Se.has(V.id)?ne.exiting:""}`,style:{left:V.x,top:We,width:V.width,height:V.height,position:"fixed"},onMouseDown:qe=>ct(qe,V.id),onDoubleClick:()=>kt(V.id),children:[r.jsx("span",{className:ne.placementLabel,children:Ke}),r.jsx("span",{className:`${ne.placementAnnotation} ${V.text?ne.annotationVisible:""}`,children:(V.text&&ce.current.set(V.id,V.text),V.text||ce.current.get(V.id)||"")}),r.jsx("div",{className:ne.placementContent,children:r.jsx(zv,{type:V.type,width:V.width,height:V.height,text:V.text})}),r.jsx("div",{className:ne.deleteButton,onMouseDown:qe=>qe.stopPropagation(),onClick:()=>Ge(V.id),children:"✕"}),In.map(qe=>r.jsx("div",{className:`${ne.handle} ${ne[`handle${qe.charAt(0).toUpperCase()}${qe.slice(1)}`]}`,onMouseDown:Te=>en(Te,V.id,qe)},qe)),Un.map(({dir:qe,cls:Te,arrow:rt})=>r.jsx("div",{className:`${ne.edgeHandle} ${Te}`,onMouseDown:vt=>en(vt,V.id,qe),children:rt},qe))]},V.id)})}),xe&&(()=>{var Ht;const V=o.find(ze=>ze.id===xe);if(!V)return null;const De=V.y-Pt,Ke=V.x+V.width/2,We=De-8,at=De+V.height+8,qe=We>200,Te=at<window.innerHeight-100,rt=Math.max(160,Math.min(window.innerWidth-160,Ke));let vt;return qe?vt={left:rt,bottom:window.innerHeight-We}:Te?vt={left:rt,top:at}:vt={left:rt,top:Math.max(80,window.innerHeight/2-80)},r.jsx(hu,{element:((Ht=no[V.type])==null?void 0:Ht.label)||V.type,placeholder:nt[V.type]||"Label or content text",initialValue:V.text??"",submitLabel:me.current?"Save":"Set",onSubmit:Ot,onCancel:_t,onDelete:me.current?()=>{Ot("")}:void 0,isExiting:K,lightMode:!c,style:vt})})(),J&&r.jsx("div",{className:ne.drawBox,style:{left:J.x,top:J.y,width:J.w,height:J.h},"data-feedback-toolbar":!0}),z&&r.jsx("div",{className:ne.selectBox,style:{left:z.x,top:z.y,width:z.w,height:z.h},"data-feedback-toolbar":!0}),ge&&r.jsx("div",{className:ne.sizeIndicator,style:{left:ge.x,top:ge.y},"data-feedback-toolbar":!0,children:ge.text}),fe.map((V,De)=>r.jsx("div",{className:ne.guideLine,style:V.axis==="x"?{position:"fixed",left:V.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:V.pos-Pt,right:0,height:1},"data-feedback-toolbar":!0},`${V.axis}-${V.pos}-${De}`))]})}function Iv(o){if(!o)return"";const n=o.scrollTop>2,i=o.scrollTop+o.clientHeight<o.scrollHeight-2;return`${n?ne.fadeTop:""} ${i?ne.fadeBottom:""}`}var C="currentColor",te="0.5";function Uv({type:o}){switch(o){case"navigation":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:C,opacity:".4"}),r.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:C,opacity:".25"}),r.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:C,opacity:".25"})]});case"header":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:C,opacity:".35"}),r.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:C,opacity:".15"})]});case"hero":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:C,opacity:".35"}),r.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:C,opacity:".15"}),r.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:C,strokeWidth:te})]});case"section":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:C,opacity:".3"}),r.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:C,opacity:".15"}),r.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:C,opacity:".15"})]});case"sidebar":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:C,opacity:".3"}),r.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:C,opacity:".15"}),r.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:C,opacity:".15"})]});case"footer":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:C,opacity:".25"}),r.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:C,opacity:".25"}),r.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:C,opacity:".2"})]});case"modal":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:C,opacity:".3"}),r.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:C,opacity:".15"}),r.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:C,strokeWidth:te})]});case"divider":return r.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:r.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:C,strokeWidth:"0.5",opacity:".3"})});case"card":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:C,opacity:".04"}),r.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:C,opacity:".25"}),r.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:C,opacity:".12"})]});case"text":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:C,opacity:".3"}),r.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:C,opacity:".15"}),r.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:C,opacity:".15"}),r.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:C,opacity:".12"})]});case"image":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:C,strokeWidth:te}),r.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:C,strokeWidth:".3",opacity:".25"}),r.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:C,strokeWidth:".3",opacity:".25"})]});case"video":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:C,strokeWidth:te}),r.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:C,strokeWidth:te,fill:C,opacity:".15"})]});case"table":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:C,strokeWidth:te}),r.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:C,strokeWidth:".3",opacity:".25"}),r.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:C,strokeWidth:".3",opacity:".25"}),r.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:C,strokeWidth:".3",opacity:".25"}),r.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:C,strokeWidth:".3",opacity:".25"})]});case"grid":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:C,strokeWidth:te})]});case"list":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:C,opacity:".2"}),r.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:C,opacity:".2"}),r.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:C,opacity:".2"})]});case"chart":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:C,opacity:".2"}),r.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:C,opacity:".25"}),r.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:C,opacity:".3"}),r.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:C,opacity:".2"})]});case"accordion":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:C,opacity:".25"}),r.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:C,strokeWidth:te})]});case"carousel":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:C,strokeWidth:te}),r.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:C,strokeWidth:te,opacity:".35"}),r.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:C,strokeWidth:te,opacity:".35"}),r.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:C,opacity:".35"}),r.jsx("circle",{cx:"10",cy:"14",r:".6",fill:C,opacity:".15"}),r.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:C,opacity:".15"})]});case"button":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:C,opacity:".25"})]});case"input":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:C,opacity:".25"}),r.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:C,opacity:".12"})]});case"search":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:C,strokeWidth:te}),r.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:C,strokeWidth:te,opacity:".3"}),r.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:C,strokeWidth:te,opacity:".3"}),r.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:C,opacity:".12"})]});case"form":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:C,opacity:".25"}),r.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:C,opacity:".25"}),r.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:C,strokeWidth:te})]});case"tabs":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:C,opacity:".25"}),r.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:C,strokeWidth:te})]});case"dropdown":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:C,opacity:".2"}),r.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:C,strokeWidth:te,opacity:".3"}),r.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:C,strokeWidth:te,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:C,strokeWidth:te}),r.jsx("circle",{cx:"13",cy:"8",r:"2",fill:C,opacity:".3"})]});case"avatar":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:C,strokeWidth:te}),r.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:C,strokeWidth:te}),r.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:C,strokeWidth:te})]});case"badge":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:C,opacity:".25"})]});case"breadcrumb":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:C,opacity:".3"}),r.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:C,strokeWidth:te,opacity:".2"}),r.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:C,opacity:".2"}),r.jsx("path",{d:"M14 7l1 1-1 1",stroke:C,strokeWidth:te,opacity:".2"}),r.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:C,opacity:".15"})]});case"pagination":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:C,opacity:".15",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:C,strokeWidth:te})]});case"progress":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:C,opacity:".2"})]});case"toast":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:C,strokeWidth:te}),r.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:C,strokeWidth:te,opacity:".3"}),r.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:C,opacity:".25"}),r.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:C,opacity:".12"})]});case"tooltip":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:C,opacity:".25"}),r.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:C,strokeWidth:te})]});case"pricing":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:C,opacity:".25"}),r.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:C,opacity:".15"}),r.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:C,opacity:".1"}),r.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:C,opacity:".1"}),r.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:C,opacity:".2"})]});case"testimonial":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:C,strokeWidth:te}),r.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:C,opacity:".2",fontFamily:"serif",children:"“"}),r.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:C,opacity:".15"}),r.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:C,opacity:".12"}),r.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:C,strokeWidth:te,opacity:".25"}),r.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:C,opacity:".15"})]});case"cta":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:C,opacity:".3"}),r.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:C,opacity:".15"}),r.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:C,strokeWidth:te})]});case"alert":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:C,strokeWidth:te}),r.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:C,strokeWidth:te,opacity:".3"}),r.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:C,strokeWidth:"0.6",opacity:".5"}),r.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:C,opacity:".5"}),r.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:C,opacity:".2"})]});case"banner":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:C,opacity:".25"}),r.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:C,strokeWidth:te})]});case"stat":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:C,opacity:".15"}),r.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:C,opacity:".3"}),r.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:C,opacity:".12"})]});case"stepper":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"4",cy:"8",r:"2",fill:C,opacity:".2",stroke:C,strokeWidth:te}),r.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:C,strokeWidth:".4",opacity:".3"}),r.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:C,strokeWidth:te}),r.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:C,strokeWidth:".4",opacity:".3"}),r.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:C,strokeWidth:te})]});case"tag":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:C,opacity:".25"}),r.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:C,strokeWidth:te,opacity:".2"}),r.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:C,strokeWidth:te,opacity:".2"})]});case"rating":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:C,opacity:".25"}),r.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:C,opacity:".25"}),r.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:C,strokeWidth:te,opacity:".25"})]});case"map":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:C,strokeWidth:te}),r.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:C,strokeWidth:".3",opacity:".15"}),r.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:C,strokeWidth:".3",opacity:".15"}),r.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:C,opacity:".15",stroke:C,strokeWidth:te})]});case"timeline":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:C,strokeWidth:".4",opacity:".25"}),r.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:C,opacity:".2",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:C,opacity:".25"}),r.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:C,opacity:".15"}),r.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:C,opacity:".15"})]});case"fileUpload":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:C,strokeWidth:te,strokeDasharray:"2 1"}),r.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:C,strokeWidth:te,opacity:".3"}),r.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:C,opacity:".15"})]});case"codeBlock":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:C,strokeWidth:te}),r.jsx("circle",{cx:"4",cy:"4",r:".6",fill:C,opacity:".3"}),r.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:C,opacity:".3"}),r.jsx("circle",{cx:"7",cy:"4",r:".6",fill:C,opacity:".3"}),r.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:C,opacity:".2"}),r.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:C,opacity:".15"}),r.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:C,opacity:".12"})]});case"calendar":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:C,strokeWidth:te}),r.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:C,strokeWidth:".4",opacity:".25"}),r.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:C,opacity:".2"}),r.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:C,opacity:".2"}),r.jsx("circle",{cx:"7",cy:"9",r:".6",fill:C,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"9",r:".6",fill:C,opacity:".2"}),r.jsx("circle",{cx:"13",cy:"9",r:".6",fill:C,opacity:".3"}),r.jsx("circle",{cx:"7",cy:"12",r:".6",fill:C,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"12",r:".6",fill:C,opacity:".2"})]});case"notification":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:C,strokeWidth:te}),r.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:C,strokeWidth:te,opacity:".25"}),r.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:C,opacity:".25"}),r.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:C,opacity:".12"}),r.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:C,opacity:".25"})]});case"productCard":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:C,opacity:".04"}),r.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:C,opacity:".25"}),r.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:C,opacity:".15"}),r.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:C,strokeWidth:te})]});case"profile":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:C,opacity:".25"}),r.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:C,opacity:".12"})]});case"drawer":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:C,opacity:".25"}),r.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:C,opacity:".15"}),r.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:C,opacity:".15"}),r.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:C,strokeWidth:te,opacity:".15"})]});case"popover":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:C,opacity:".25"}),r.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:C,opacity:".15"}),r.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:C,strokeWidth:te})]});case"logo":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:C,strokeWidth:te}),r.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:C,strokeWidth:te,opacity:".3"}),r.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:C,opacity:".2"}),r.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:C,opacity:".12"})]});case"faq":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:C,opacity:".3",fontWeight:"bold",children:"?"}),r.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:C,opacity:".25"}),r.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:C,opacity:".12"}),r.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:C,opacity:".3",fontWeight:"bold",children:"?"}),r.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:C,opacity:".25"}),r.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:C,opacity:".12"})]});case"gallery":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:C,strokeWidth:te})]});case"checkbox":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:C,strokeWidth:te}),r.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:C,strokeWidth:te,opacity:".35"})]});case"radio":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:C,strokeWidth:te}),r.jsx("circle",{cx:"10",cy:"8",r:"2",fill:C,opacity:".3"})]});case"slider":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:C,opacity:".15"}),r.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:C,opacity:".25"}),r.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:C,strokeWidth:te})]});case"datePicker":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:C,opacity:".2"}),r.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:C,opacity:".12"}),r.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:C,strokeWidth:te,strokeDasharray:"2 1",opacity:".3"}),r.jsx("circle",{cx:"6",cy:"10",r:".6",fill:C,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"10",r:".6",fill:C,opacity:".3"}),r.jsx("circle",{cx:"14",cy:"10",r:".6",fill:C,opacity:".2"}),r.jsx("circle",{cx:"6",cy:"13",r:".6",fill:C,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"13",r:".6",fill:C,opacity:".2"})]});case"skeleton":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:C,opacity:".08"}),r.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:C,opacity:".08"}),r.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:C,opacity:".08"})]});case"chip":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:C,opacity:".08",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:C,opacity:".25"}),r.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:C,strokeWidth:te,opacity:".2"}),r.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:C,strokeWidth:te,opacity:".2"}),r.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:C,strokeWidth:te,opacity:".25"})]});case"icon":return r.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:r.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:C,strokeWidth:te,opacity:".3"})});case"spinner":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:C,strokeWidth:te,opacity:".12"}),r.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:C,strokeWidth:te,opacity:".35",strokeLinecap:"round"})]});case"feature":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:C,strokeWidth:te}),r.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:C,strokeWidth:te,opacity:".25"}),r.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:C,opacity:".25"}),r.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:C,opacity:".12"}),r.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:C,opacity:".25"}),r.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:C,opacity:".12"})]});case"team":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:C,opacity:".2"}),r.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:C,opacity:".2"}),r.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:C,strokeWidth:te,opacity:".5"}),r.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:C,opacity:".15"}),r.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:C,opacity:".1"})]});case"login":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:C,opacity:".25"}),r.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:C,opacity:".2"})]});case"contact":return r.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[r.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:C,opacity:".2"}),r.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:C,strokeWidth:te}),r.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:C,opacity:".2"})]});default:return null}}function Hv({activeType:o,onSelect:n,onDragStart:i,scrollRef:l,fadeClass:c,blankCanvas:u}){return r.jsx("div",{ref:l,className:`${ne.placeScroll} ${c||""}`,children:ay.map(_=>r.jsxs("div",{className:ne.paletteSection,children:[r.jsx("div",{className:ne.paletteSectionTitle,children:_.section}),_.items.map(g=>r.jsxs("div",{className:`${ne.paletteItem} ${o===g.type?ne.active:""} ${u?ne.wireframe:""}`,onClick:()=>n(g.type),onMouseDown:h=>{h.button===0&&i(g.type,h)},children:[r.jsx("div",{className:ne.paletteItemIcon,children:r.jsx(Uv,{type:g.type})}),r.jsx("span",{className:ne.paletteItemLabel,children:g.label})]},g.type))]},_.section))})}function Yv({value:o,suffix:n}){const[i,l]=b.useState(null),[c,u]=b.useState(n),[_,g]=b.useState("up"),h=b.useRef(o),m=b.useRef(n),p=b.useRef(),y=i!==null&&c!==n;return b.useEffect(()=>{if(o!==h.current){if(o===0){h.current=o,m.current=n,l(null);return}g(o>h.current?"up":"down"),l(h.current),u(m.current),h.current=o,m.current=n,clearTimeout(p.current),p.current=Je(()=>l(null),250)}else m.current=n},[o,n]),i===null?r.jsxs(r.Fragment,{children:[o,n?` ${n}`:""]}):y?r.jsxs("span",{className:ne.rollingWrap,children:[r.jsxs("span",{style:{visibility:"hidden"},children:[o," ",n]}),r.jsxs("span",{className:`${ne.rollingNum} ${_==="up"?ne.exitUp:ne.exitDown}`,children:[i," ",c]},`o${i}-${o}`),r.jsxs("span",{className:`${ne.rollingNum} ${_==="up"?ne.enterUp:ne.enterDown}`,children:[o," ",n]},`n${o}`)]}):r.jsxs(r.Fragment,{children:[r.jsxs("span",{className:ne.rollingWrap,children:[r.jsx("span",{style:{visibility:"hidden"},children:o}),r.jsx("span",{className:`${ne.rollingNum} ${_==="up"?ne.exitUp:ne.exitDown}`,children:i},`o${i}-${o}`),r.jsx("span",{className:`${ne.rollingNum} ${_==="up"?ne.enterUp:ne.enterDown}`,children:o},`n${o}`)]}),n?` ${n}`:""]})}function Xv({activeType:o,onSelect:n,isDarkMode:i,sectionCount:l,onDetectSections:c,visible:u,onExited:_,placementCount:g,onClearPlacements:h,onDragStart:m,blankCanvas:p,onBlankCanvasChange:y,wireframePurpose:v,onWireframePurposeChange:j,Tooltip:k}){const[T,O]=b.useState(!1),[B,J]=b.useState("exit"),[F,z]=b.useState(!1),[ie,ge]=b.useState(!0),Y=b.useRef(0),fe=b.useRef(""),ye=b.useRef(0),xe=b.useRef(),ue=b.useRef(null),[K,Ue]=b.useState("");b.useEffect(()=>(u?(O(!0),clearTimeout(xe.current),cancelAnimationFrame(ye.current),ye.current=qa(()=>{ye.current=qa(()=>{J("enter")})})):(cancelAnimationFrame(ye.current),J("exit"),clearTimeout(xe.current),xe.current=Je(()=>{O(!1),_==null||_()},200)),()=>cancelAnimationFrame(ye.current)),[u]);const me=g>0||l>0,Se=g+l;return Se>0&&(Y.current=Se,fe.current=p?Se===1?"Component":"Components":Se===1?"Change":"Changes"),b.useEffect(()=>{if(me)F?ge(!1):(ge(!0),z(!0),qa(()=>{qa(()=>{ge(!1)})}));else{ge(!0);const N=Je(()=>z(!1),300);return()=>clearTimeout(N)}},[me]),b.useEffect(()=>{if(!T)return;const N=ue.current;if(!N)return;const ce=()=>Ue(Iv(N));ce(),N.addEventListener("scroll",ce,{passive:!0});const W=new ResizeObserver(ce);return W.observe(N),()=>{N.removeEventListener("scroll",ce),W.disconnect()}},[T]),T?r.jsxs("div",{className:`${ne.palette} ${ne[B]} ${i?"":ne.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:N=>N.stopPropagation(),onMouseDown:N=>N.stopPropagation(),onTransitionEnd:N=>{N.target===N.currentTarget&&(u||(clearTimeout(xe.current),O(!1),J("exit"),_==null||_()))},children:[r.jsxs("div",{className:ne.paletteHeader,children:[r.jsx("div",{className:ne.paletteHeaderTitle,children:"Layout Mode"}),r.jsxs("div",{className:ne.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",r.jsx("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),r.jsxs("div",{className:`${ne.canvasToggle} ${p?ne.active:""}`,onClick:()=>y(!p),children:[r.jsx("span",{className:ne.canvasToggleIcon,children:r.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[r.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),r.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),r.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),r.jsx("span",{className:ne.canvasToggleLabel,children:"Wireframe New Page"})]}),r.jsx("div",{className:`${ne.wireframePurposeWrap} ${p?"":ne.collapsed}`,children:r.jsx("div",{className:ne.wireframePurposeInner,children:r.jsx("textarea",{className:ne.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:v,onChange:N=>j(N.target.value),rows:2})})}),r.jsx(Hv,{activeType:o,onSelect:n,onDragStart:m,scrollRef:ue,fadeClass:K,blankCanvas:p}),F&&r.jsx("div",{className:`${ne.paletteFooterWrap} ${ie?ne.footerHidden:""}`,children:r.jsx("div",{className:ne.paletteFooterInner,children:r.jsx("div",{className:ne.paletteFooterInnerContent,children:r.jsxs("div",{className:ne.paletteFooter,children:[r.jsx("span",{className:ne.paletteFooterCount,children:r.jsx(Yv,{value:Y.current,suffix:fe.current})}),r.jsx("button",{className:ne.paletteFooterClear,onClick:h,children:"Clear"})]})})})})]}):null}function Ka(o){if(o.parentElement)return o.parentElement;const n=o.getRootNode();return n instanceof ShadowRoot?n.host:null}function us(o,n){let i=o;for(;i;){if(i.matches(n))return i;i=Ka(i)}return null}function Gv(o,n=4){const i=[];let l=o,c=0;for(;l&&c<n;){const u=l.tagName.toLowerCase();if(u==="html"||u==="body")break;let _=u;if(l.id)_=`#${l.id}`;else if(l.className&&typeof l.className=="string"){const h=l.className.split(/\s+/).find(m=>m.length>2&&!m.match(/^[a-z]{1,2}$/)&&!m.match(/[A-Z0-9]{5,}/));h&&(_=`.${h.split("_")[0]}`)}const g=Ka(l);!l.parentElement&&g&&(_=`⟨shadow⟩ ${_}`),i.unshift(_),l=g,c++}return i.join(" > ")}function Va(o){var l,c,u,_,g,h,m,p;const n=Gv(o);if(o.dataset.element)return{name:o.dataset.element,path:n};const i=o.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(i)){const y=us(o,"svg");if(y){const v=Ka(y);if(v instanceof HTMLElement)return{name:`graphic in ${Va(v).name}`,path:n}}return{name:"graphic element",path:n}}if(i==="svg"){const y=Ka(o);if((y==null?void 0:y.tagName.toLowerCase())==="button"){const v=(l=y.textContent)==null?void 0:l.trim();return{name:v?`icon in "${v}" button`:"button icon",path:n}}return{name:"icon",path:n}}if(i==="button"){const y=(c=o.textContent)==null?void 0:c.trim(),v=o.getAttribute("aria-label");return v?{name:`button [${v}]`,path:n}:{name:y?`button "${y.slice(0,25)}"`:"button",path:n}}if(i==="a"){const y=(u=o.textContent)==null?void 0:u.trim(),v=o.getAttribute("href");return y?{name:`link "${y.slice(0,25)}"`,path:n}:v?{name:`link to ${v.slice(0,30)}`,path:n}:{name:"link",path:n}}if(i==="input"){const y=o.getAttribute("type")||"text",v=o.getAttribute("placeholder"),j=o.getAttribute("name");return v?{name:`input "${v}"`,path:n}:j?{name:`input [${j}]`,path:n}:{name:`${y} input`,path:n}}if(["h1","h2","h3","h4","h5","h6"].includes(i)){const y=(_=o.textContent)==null?void 0:_.trim();return{name:y?`${i} "${y.slice(0,35)}"`:i,path:n}}if(i==="p"){const y=(g=o.textContent)==null?void 0:g.trim();return y?{name:`paragraph: "${y.slice(0,40)}${y.length>40?"...":""}"`,path:n}:{name:"paragraph",path:n}}if(i==="span"||i==="label"){const y=(h=o.textContent)==null?void 0:h.trim();return y&&y.length<40?{name:`"${y}"`,path:n}:{name:i,path:n}}if(i==="li"){const y=(m=o.textContent)==null?void 0:m.trim();return y&&y.length<40?{name:`list item: "${y.slice(0,35)}"`,path:n}:{name:"list item",path:n}}if(i==="blockquote")return{name:"blockquote",path:n};if(i==="code"){const y=(p=o.textContent)==null?void 0:p.trim();return y&&y.length<30?{name:`code: \`${y}\``,path:n}:{name:"code",path:n}}if(i==="pre")return{name:"code block",path:n};if(i==="img"){const y=o.getAttribute("alt");return{name:y?`image "${y.slice(0,30)}"`:"image",path:n}}if(i==="video")return{name:"video",path:n};if(["div","section","article","nav","header","footer","aside","main"].includes(i)){const y=o.className,v=o.getAttribute("role"),j=o.getAttribute("aria-label");if(j)return{name:`${i} [${j}]`,path:n};if(v)return{name:`${v}`,path:n};if(typeof y=="string"&&y){const k=y.split(/[\s_-]+/).map(T=>T.replace(/[A-Z0-9]{5,}.*$/,"")).filter(T=>T.length>2&&!/^[a-z]{1,2}$/.test(T)).slice(0,2);if(k.length>0)return{name:k.join(" "),path:n}}return{name:i==="div"?"container":i,path:n}}return{name:i,path:n}}function er(o){var u,_,g;const n=[],i=(u=o.textContent)==null?void 0:u.trim();i&&i.length<100&&n.push(i);const l=o.previousElementSibling;if(l){const h=(_=l.textContent)==null?void 0:_.trim();h&&h.length<50&&n.unshift(`[before: "${h.slice(0,40)}"]`)}const c=o.nextElementSibling;if(c){const h=(g=c.textContent)==null?void 0:g.trim();h&&h.length<50&&n.push(`[after: "${h.slice(0,40)}"]`)}return n.join(" ")}function Yc(o){const n=Ka(o);if(!n)return"";const c=(o.getRootNode()instanceof ShadowRoot&&o.parentElement?Array.from(o.parentElement.children):Array.from(n.children)).filter(p=>p!==o&&p instanceof HTMLElement);if(c.length===0)return"";const u=c.slice(0,4).map(p=>{var k;const y=p.tagName.toLowerCase(),v=p.className;let j="";if(typeof v=="string"&&v){const T=v.split(/\s+/).map(O=>O.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(O=>O.length>2&&!/^[a-z]{1,2}$/.test(O));T&&(j=`.${T}`)}if(y==="button"||y==="a"){const T=(k=p.textContent)==null?void 0:k.trim().slice(0,15);if(T)return`${y}${j} "${T}"`}return`${y}${j}`});let g=n.tagName.toLowerCase();if(typeof n.className=="string"&&n.className){const p=n.className.split(/\s+/).map(y=>y.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(y=>y.length>2&&!/^[a-z]{1,2}$/.test(y));p&&(g=`.${p}`)}const h=n.children.length,m=h>u.length+1?` (${h} total in ${g})`:"";return u.join(", ")+m}function tr(o){const n=o.className;return typeof n!="string"||!n?"":n.split(/\s+/).filter(l=>l.length>0).map(l=>{const c=l.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return c?c[1]:l}).filter((l,c,u)=>u.indexOf(l)===c).join(", ")}var ly=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),Fv=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),Wv=new Set(["input","textarea","select"]),qv=new Set(["img","video","canvas","svg"]),Qv=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function Xc(o){if(typeof window>"u")return{};const n=window.getComputedStyle(o),i={},l=o.tagName.toLowerCase();let c;Fv.has(l)?c=["color","fontSize","fontWeight","fontFamily","lineHeight"]:l==="button"||l==="a"&&o.getAttribute("role")==="button"?c=["backgroundColor","color","padding","borderRadius","fontSize"]:Wv.has(l)?c=["backgroundColor","color","padding","borderRadius","fontSize"]:qv.has(l)?c=["width","height","objectFit","borderRadius"]:Qv.has(l)?c=["display","padding","margin","gap","backgroundColor"]:c=["color","fontSize","margin","padding","backgroundColor"];for(const u of c){const _=u.replace(/([A-Z])/g,"-$1").toLowerCase(),g=n.getPropertyValue(_);g&&!ly.has(g)&&(i[u]=g)}return i}var Vv=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function Gc(o){if(typeof window>"u")return"";const n=window.getComputedStyle(o),i=[];for(const l of Vv){const c=l.replace(/([A-Z])/g,"-$1").toLowerCase(),u=n.getPropertyValue(c);u&&!ly.has(u)&&i.push(`${c}: ${u}`)}return i.join("; ")}function Kv(o){if(!o)return;const n={},i=o.split(";").map(l=>l.trim()).filter(Boolean);for(const l of i){const c=l.indexOf(":");if(c>0){const u=l.slice(0,c).trim(),_=l.slice(c+1).trim();u&&_&&(n[u]=_)}}return Object.keys(n).length>0?n:void 0}function Fc(o){const n=[],i=o.getAttribute("role"),l=o.getAttribute("aria-label"),c=o.getAttribute("aria-describedby"),u=o.getAttribute("tabindex"),_=o.getAttribute("aria-hidden");return i&&n.push(`role="${i}"`),l&&n.push(`aria-label="${l}"`),c&&n.push(`aria-describedby="${c}"`),u&&n.push(`tabindex=${u}`),_==="true"&&n.push("aria-hidden"),o.matches("a, button, input, select, textarea, [tabindex]")&&n.push("focusable"),n.join(", ")}function Wc(o){const n=[];let i=o;for(;i&&i.tagName.toLowerCase()!=="html";){const l=i.tagName.toLowerCase();let c=l;if(i.id)c=`${l}#${i.id}`;else if(i.className&&typeof i.className=="string"){const _=i.className.split(/\s+/).map(g=>g.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(g=>g.length>2);_&&(c=`${l}.${_}`)}const u=Ka(i);!i.parentElement&&u&&(c=`⟨shadow⟩ ${c}`),n.unshift(c),i=u}return n.join(" > ")}var Zv=new Set(["nav","header","main","section","article","footer","aside"]),nh={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},d0={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},Jv=new Set(["script","style","noscript","link","meta"]),ew=40;function ry(o){let n=o;for(;n&&n!==document.body&&n!==document.documentElement;){const i=window.getComputedStyle(n).position;if(i==="fixed"||i==="sticky")return!0;n=n.parentElement}return!1}function ea(o){const n=o.tagName.toLowerCase();if(["nav","header","footer","main"].includes(n)&&document.querySelectorAll(n).length===1)return n;if(o.id)return`#${CSS.escape(o.id)}`;if(o.className&&typeof o.className=="string"){const c=o.className.split(/\s+/).filter(u=>u.length>0).find(u=>u.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(u)&&!/^[a-z]{1,2}$/.test(u));if(c){const u=`${n}.${CSS.escape(c)}`;if(document.querySelectorAll(u).length===1)return u}}const i=o.parentElement;if(i){const c=Array.from(i.children).indexOf(o)+1;return`${i===document.body?"body":ea(i)} > ${n}:nth-child(${c})`}return n}function _u(o){var _;const n=o.tagName.toLowerCase(),i=o.getAttribute("aria-label");if(i)return i;const l=o.getAttribute("role");if(l&&nh[l])return nh[l];if(d0[n])return d0[n];const c=o.querySelector("h1, h2, h3, h4, h5, h6");if(c){const g=(_=c.textContent)==null?void 0:_.trim();if(g&&g.length<=50)return g;if(g)return g.slice(0,47)+"..."}const{name:u}=Va(o);return u.charAt(0).toUpperCase()+u.slice(1)}function cy(o){const n=o.className;return typeof n!="string"||!n?null:n.split(/\s+/).map(l=>l.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(l=>l.length>2&&!/^[a-z]{1,2}$/.test(l))||null}function uy(o){var l;const n=(l=o.textContent)==null?void 0:l.trim();if(!n)return null;const i=n.replace(/\s+/g," ");return i.length<=30?i:i.slice(0,30)+"…"}function tw(){const o=document.querySelector("main")||document.body,n=Array.from(o.children);let i=n;o!==document.body&&n.length<3&&(i=Array.from(document.body.children));const l=[];return i.forEach((c,u)=>{if(!(c instanceof HTMLElement))return;const _=c.tagName.toLowerCase();if(Jv.has(_)||c.hasAttribute("data-feedback-toolbar")||c.closest("[data-feedback-toolbar]"))return;const g=window.getComputedStyle(c);if(g.display==="none"||g.visibility==="hidden")return;const h=c.getBoundingClientRect();if(h.height<ew)return;const m=Zv.has(_),p=c.getAttribute("role")&&nh[c.getAttribute("role")],y=_==="div"&&h.height>=60;if(!m&&!p&&!y)return;const v=window.scrollY,j=ry(c),k={x:h.x,y:j?h.y:h.y+v,width:h.width,height:h.height};l.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:_u(c),tagName:_,selector:ea(c),role:c.getAttribute("role"),className:cy(c),textSnippet:uy(c),originalRect:k,currentRect:{...k},originalIndex:u,isFixed:j})}),l}function nw(o){const n=window.scrollY,i=o.getBoundingClientRect(),l=ry(o),c={x:i.x,y:l?i.y:i.y+n,width:i.width,height:i.height},u=o.parentElement;let _=0;return u&&(_=Array.from(u.children).indexOf(o)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:_u(o),tagName:o.tagName.toLowerCase(),selector:ea(o),role:o.getAttribute("role"),className:cy(o),textSnippet:uy(o),originalRect:c,currentRect:{...c},originalIndex:_,isFixed:l}}var f0={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},h0=["nw","n","ne","e","se","s","sw","w"],qc=24,_0=16,Qc=5;function m0(o,n,i,l){let c=1/0,u=1/0;const _=o.x,g=o.x+o.width,h=o.x+o.width/2,m=o.y,p=o.y+o.height,y=o.y+o.height/2,v=[];for(const Y of n)i.has(Y.id)||v.push(Y.currentRect);l&&v.push(...l);for(const Y of v){const fe=Y.x,ye=Y.x+Y.width,xe=Y.x+Y.width/2,ue=Y.y,K=Y.y+Y.height,Ue=Y.y+Y.height/2;for(const me of[_,g,h])for(const Se of[fe,ye,xe]){const N=Se-me;Math.abs(N)<Qc&&Math.abs(N)<Math.abs(c)&&(c=N)}for(const me of[m,p,y])for(const Se of[ue,K,Ue]){const N=Se-me;Math.abs(N)<Qc&&Math.abs(N)<Math.abs(u)&&(u=N)}}const j=Math.abs(c)<Qc?c:0,k=Math.abs(u)<Qc?u:0,T=[],O=new Set,B=_+j,J=g+j,F=h+j,z=m+k,ie=p+k,ge=y+k;for(const Y of v){const fe=Y.x,ye=Y.x+Y.width,xe=Y.x+Y.width/2,ue=Y.y,K=Y.y+Y.height,Ue=Y.y+Y.height/2;for(const me of[fe,xe,ye])for(const Se of[B,F,J])if(Math.abs(Se-me)<.5){const N=`x:${Math.round(me)}`;O.has(N)||(O.add(N),T.push({axis:"x",pos:me}))}for(const me of[ue,Ue,K])for(const Se of[z,ge,ie])if(Math.abs(Se-me)<.5){const N=`y:${Math.round(me)}`;O.has(N)||(O.add(N),T.push({axis:"y",pos:me}))}}return{dx:j,dy:k,guides:T}}var sw=new Set(["script","style","noscript","link","meta","br","hr"]);function p0(o){let n=o;for(;n&&n!==document.body&&n!==document.documentElement;){if(n.closest("[data-feedback-toolbar]"))return null;if(sw.has(n.tagName.toLowerCase())){n=n.parentElement;continue}const i=n.getBoundingClientRect();if(i.width>=_0&&i.height>=_0)return n;n=n.parentElement}return null}function ow({rearrangeState:o,onChange:n,isDarkMode:i,exiting:l,className:c,blankCanvas:u,extraSnapRects:_,onSelectionChange:g,deselectSignal:h,onDragMove:m,onDragEnd:p,clearSignal:y}){const{sections:v}=o,j=b.useRef(o);j.current=o;const[k,T]=b.useState(new Set),[O,B]=b.useState(!1),J=b.useRef(y);b.useEffect(()=>{y!==void 0&&y!==J.current&&(J.current=y,v.length>0&&B(!0))},[y,v.length]);const F=b.useRef(h);b.useEffect(()=>{h!==F.current&&(F.current=h,T(new Set))},[h]);const[z,ie]=b.useState(null),[ge,Y]=b.useState(!1),fe=b.useRef(!1),ye=b.useCallback(I=>{const X=v.find(oe=>oe.id===I);X&&(fe.current=!!X.note,ie(I),Y(!1))},[v]),xe=b.useCallback(()=>{z&&(Y(!0),Je(()=>{ie(null),Y(!1)},150))},[z]),ue=b.useCallback(I=>{z&&(n({...o,sections:v.map(X=>X.id===z?{...X,note:I.trim()||void 0}:X)}),xe())},[z,v,o,n,xe]);b.useEffect(()=>{l&&z&&xe()},[l]);const[K,Ue]=b.useState(new Set),me=b.useRef(new Map),[Se,N]=b.useState(null),[ce,W]=b.useState(null),[be,Ae]=b.useState([]),[A,Z]=b.useState(0),_e=b.useRef(null),je=b.useRef(new Set),Xe=b.useRef(new Map),[lt,ct]=b.useState(new Map),[en,Ge]=b.useState(new Map),nt=b.useRef(new Set),kt=b.useRef(new Map),_t=b.useRef(g);_t.current=g;const Ot=b.useRef(m);Ot.current=m;const Pt=b.useRef(p);Pt.current=p,b.useEffect(()=>{u&&T(new Set)},[u]);const[In,is]=b.useState(()=>!o.sections.some(I=>{const X=I.originalRect,oe=I.currentRect;return Math.abs(X.x-oe.x)>1||Math.abs(X.y-oe.y)>1||Math.abs(X.width-oe.width)>1||Math.abs(X.height-oe.height)>1}));b.useEffect(()=>{if(!In){const I=Je(()=>is(!0),380);return()=>clearTimeout(I)}},[]);const Un=b.useRef(new Set);b.useEffect(()=>{Un.current=new Set(v.map(I=>I.selector))},[v]),b.useEffect(()=>{const I=()=>Z(window.scrollY);return I(),window.addEventListener("scroll",I,{passive:!0}),window.addEventListener("resize",I,{passive:!0}),()=>{window.removeEventListener("scroll",I),window.removeEventListener("resize",I)}},[]),b.useEffect(()=>{const I=X=>{if(_e.current){N(null);return}const oe=document.elementFromPoint(X.clientX,X.clientY);if(!oe){N(null);return}if(oe.closest("[data-feedback-toolbar]")){N(null);return}if(oe.closest("[data-design-placement]")){N(null);return}if(oe.closest("[data-annotation-popup]")){N(null);return}const re=p0(oe);if(!re){N(null);return}for(const ke of Un.current)try{const he=document.querySelector(ke);if(he&&(he===re||re.contains(he))){N(null);return}}catch{}const Le=re.getBoundingClientRect();N({x:Le.x,y:Le.y,w:Le.width,h:Le.height})};return document.addEventListener("mousemove",I,{passive:!0}),()=>document.removeEventListener("mousemove",I)},[v]),b.useEffect(()=>{const I=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=I}},[]),b.useEffect(()=>{const I=X=>{var he,st,ut,Ct;if(_e.current||X.button!==0)return;const oe=X.target;if(!oe||oe.closest("[data-feedback-toolbar]")||oe.closest("[data-design-placement]")||oe.closest("[data-annotation-popup]"))return;const re=p0(oe);let Le=!1;if(re)for(const et of Un.current)try{const Re=document.querySelector(et);if(Re&&(Re===re||re.contains(Re))){Le=!0;break}}catch{}const ke=!!(X.shiftKey||X.metaKey||X.ctrlKey);if(re&&!Le){X.preventDefault(),X.stopPropagation();const et=nw(re),Re=[...v,et],bt=[...o.originalOrder,et.id];n({...o,sections:Re,originalOrder:bt});const jt=new Set([et.id]);T(jt),(he=_t.current)==null||he.call(_t,jt,ke),N(null);const Wt=X.clientX,Ee=X.clientY,pt={x:et.currentRect.x,y:et.currentRect.y};et.originalRect;let gt=!1,dt=0,dn=0;_e.current="move";const He=yn=>{var Yt;const Hn=yn.clientX-Wt,Bn=yn.clientY-Ee;if(!gt&&(Math.abs(Hn)>2||Math.abs(Bn)>2)&&(gt=!0),!gt)return;const oo={x:pt.x+Hn,y:pt.y+Bn,width:et.currentRect.width,height:et.currentRect.height},vs=m0(oo,Re,new Set([et.id]),_);Ae(vs.guides);const Kn=Hn+vs.dx,ln=Bn+vs.dy;dt=Kn,dn=ln;const En=document.querySelector(`[data-rearrange-section="${et.id}"]`);En&&(En.style.transform=`translate(${Kn}px, ${ln}px)`),ct(new Map([[et.id,{x:pt.x+Kn,y:pt.y+ln,width:et.currentRect.width,height:et.currentRect.height}]])),(Yt=Ot.current)==null||Yt.call(Ot,Kn,ln)},Nt=()=>{var Hn;window.removeEventListener("mousemove",He),window.removeEventListener("mouseup",Nt),_e.current=null,Ae([]),ct(new Map);const yn=document.querySelector(`[data-rearrange-section="${et.id}"]`);yn&&(yn.style.transform=""),gt&&n({...o,sections:Re.map(Bn=>Bn.id===et.id?{...Bn,currentRect:{...Bn.currentRect,x:Math.max(0,pt.x+dt),y:Math.max(0,pt.y+dn)}}:Bn),originalOrder:bt}),(Hn=Pt.current)==null||Hn.call(Pt,dt,dn,gt)};window.addEventListener("mousemove",He),window.addEventListener("mouseup",Nt)}else if(Le&&re){X.preventDefault();for(const et of v)try{const Re=document.querySelector(et.selector);if(Re&&Re===re){const bt=new Set([et.id]);T(bt),(st=_t.current)==null||st.call(_t,bt,ke);return}}catch{}ke||(T(new Set),(ut=_t.current)==null||ut.call(_t,new Set,!1))}else ke||(T(new Set),(Ct=_t.current)==null||Ct.call(_t,new Set,!1))};return document.addEventListener("mousedown",I,!0),()=>document.removeEventListener("mousedown",I,!0)},[v,o,n]),b.useEffect(()=>{const I=X=>{const oe=X.target;if(!(oe.tagName==="INPUT"||oe.tagName==="TEXTAREA"||oe.isContentEditable)){if((X.key==="Backspace"||X.key==="Delete")&&k.size>0){X.preventDefault();const re=new Set(k);Ue(Le=>{const ke=new Set(Le);for(const he of re)ke.add(he);return ke}),T(new Set),Je(()=>{const Le=j.current;n({...Le,sections:Le.sections.filter(ke=>!re.has(ke.id)),originalOrder:Le.originalOrder.filter(ke=>!re.has(ke))}),Ue(ke=>{const he=new Set(ke);for(const st of re)he.delete(st);return he})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(X.key)&&k.size>0){X.preventDefault();const re=X.shiftKey?20:1,Le=X.key==="ArrowLeft"?-re:X.key==="ArrowRight"?re:0,ke=X.key==="ArrowUp"?-re:X.key==="ArrowDown"?re:0;n({...o,sections:v.map(he=>k.has(he.id)?{...he,currentRect:{...he.currentRect,x:Math.max(0,he.currentRect.x+Le),y:Math.max(0,he.currentRect.y+ke)}}:he)});return}X.key==="Escape"&&k.size>0&&T(new Set)}};return document.addEventListener("keydown",I),()=>document.removeEventListener("keydown",I)},[k,v,o,n]);const V=b.useCallback((I,X)=>{var Wt;if(I.button!==0)return;const oe=I.target;if(oe.closest(`.${ne.handle}`)||oe.closest(`.${ne.deleteButton}`))return;I.preventDefault(),I.stopPropagation();let re;I.shiftKey||I.metaKey||I.ctrlKey?(re=new Set(k),re.has(X)?re.delete(X):re.add(X)):k.has(X)?re=new Set(k):re=new Set([X]),T(re),(re.size!==k.size||[...re].some(Ee=>!k.has(Ee)))&&((Wt=_t.current)==null||Wt.call(_t,re,!!(I.shiftKey||I.metaKey||I.ctrlKey)));const ke=I.clientX,he=I.clientY,st=new Map;for(const Ee of v)re.has(Ee.id)&&st.set(Ee.id,{x:Ee.currentRect.x,y:Ee.currentRect.y});_e.current="move";let ut=!1,Ct=0,et=0;const Re=new Map;for(const Ee of v)if(re.has(Ee.id)){const pt=document.querySelector(`[data-rearrange-section="${Ee.id}"]`);Re.set(Ee.id,{outlineEl:pt,curW:Ee.currentRect.width,curH:Ee.currentRect.height})}const bt=Ee=>{var vs;const pt=Ee.clientX-ke,gt=Ee.clientY-he;if(pt===0&&gt===0)return;ut=!0;let dt=1/0,dn=1/0,He=-1/0,Nt=-1/0;for(const[Kn,{curW:ln,curH:En}]of Re){const Yt=st.get(Kn);if(!Yt)continue;const Sn=Yt.x+pt,Me=Yt.y+gt;dt=Math.min(dt,Sn),dn=Math.min(dn,Me),He=Math.max(He,Sn+ln),Nt=Math.max(Nt,Me+En)}const yn=m0({x:dt,y:dn,width:He-dt,height:Nt-dn},v,re,_),Hn=pt+yn.dx,Bn=gt+yn.dy;Ct=Hn,et=Bn,Ae(yn.guides);for(const[,{outlineEl:Kn}]of Re)Kn&&(Kn.style.transform=`translate(${Hn}px, ${Bn}px)`);const oo=new Map;for(const[Kn,{curW:ln,curH:En}]of Re){const Yt=st.get(Kn);if(Yt){const Sn={x:Math.max(0,Yt.x+Hn),y:Math.max(0,Yt.y+Bn),width:ln,height:En};oo.set(Kn,Sn)}}ct(oo),(vs=Ot.current)==null||vs.call(Ot,Hn,Bn)},jt=Ee=>{var pt,gt;window.removeEventListener("mousemove",bt),window.removeEventListener("mouseup",jt),_e.current=null,Ae([]),ct(new Map);for(const[,{outlineEl:dt}]of Re)dt&&(dt.style.transform="");if(ut){const dt=Ee.clientX-ke,dn=Ee.clientY-he;if(Math.abs(dt)<5&&Math.abs(dn)<5)n({...o,sections:v.map(He=>{const Nt=st.get(He.id);return Nt?{...He,currentRect:{...He.currentRect,x:Nt.x,y:Nt.y}}:He})});else{n({...o,sections:v.map(He=>{const Nt=st.get(He.id);return Nt?{...He,currentRect:{...He.currentRect,x:Math.max(0,Nt.x+Ct),y:Math.max(0,Nt.y+et)}}:He})}),(pt=Pt.current)==null||pt.call(Pt,Ct,et,!0);return}}(gt=Pt.current)==null||gt.call(Pt,0,0,!1)};window.addEventListener("mousemove",bt),window.addEventListener("mouseup",jt)},[k,v,o,n]),De=b.useCallback((I,X,oe)=>{I.preventDefault(),I.stopPropagation();const re=v.find(bt=>bt.id===X);if(!re)return;T(new Set([X])),_e.current="resize";const Le=I.clientX,ke=I.clientY,he={...re.currentRect};re.originalRect;const st=he.width/he.height;let ut={...he};const Ct=document.querySelector(`[data-rearrange-section="${X}"]`),et=bt=>{const jt=bt.clientX-Le,Wt=bt.clientY-ke;let Ee=he.x,pt=he.y,gt=he.width,dt=he.height;if(oe.includes("e")&&(gt=Math.max(qc,he.width+jt)),oe.includes("w")&&(gt=Math.max(qc,he.width-jt),Ee=he.x+he.width-gt),oe.includes("s")&&(dt=Math.max(qc,he.height+Wt)),oe.includes("n")&&(dt=Math.max(qc,he.height-Wt),pt=he.y+he.height-dt),bt.shiftKey)if(oe.length===2){const He=Math.abs(gt-he.width),Nt=Math.abs(dt-he.height);He>Nt?dt=gt/st:gt=dt*st,oe.includes("w")&&(Ee=he.x+he.width-gt),oe.includes("n")&&(pt=he.y+he.height-dt)}else oe==="e"||oe==="w"?dt=gt/st:gt=dt*st,oe==="w"&&(Ee=he.x+he.width-gt),oe==="n"&&(pt=he.y+he.height-dt);ut={x:Ee,y:pt,width:gt,height:dt},Ct&&(Ct.style.left=`${Ee}px`,Ct.style.top=`${pt-A}px`,Ct.style.width=`${gt}px`,Ct.style.height=`${dt}px`),W({x:bt.clientX+12,y:bt.clientY+12,text:`${Math.round(gt)} × ${Math.round(dt)}`}),ct(new Map([[X,ut]]))},Re=()=>{window.removeEventListener("mousemove",et),window.removeEventListener("mouseup",Re),W(null),_e.current=null,ct(new Map),n({...o,sections:v.map(bt=>bt.id===X?{...bt,currentRect:ut}:bt)})};window.addEventListener("mousemove",et),window.addEventListener("mouseup",Re)},[v,o,n,A]),Ke=b.useCallback(I=>{Ue(X=>{const oe=new Set(X);return oe.add(I),oe}),T(X=>{const oe=new Set(X);return oe.delete(I),oe}),Je(()=>{const X=j.current;n({...X,sections:X.sections.filter(oe=>oe.id!==I),originalOrder:X.originalOrder.filter(oe=>oe!==I)}),Ue(oe=>{const re=new Set(oe);return re.delete(I),re})},180)},[n]),We=I=>{const X=I.originalRect,oe=I.currentRect;return Math.abs(X.x-oe.x)>1||Math.abs(X.y-oe.y)>1||Math.abs(X.width-oe.width)>1||Math.abs(X.height-oe.height)>1},at=I=>{const X=I.originalRect,oe=I.currentRect;return Math.abs(X.x-oe.x)>1||Math.abs(X.y-oe.y)>1},qe=I=>{const X=I.originalRect,oe=I.currentRect;return Math.abs(X.width-oe.width)>1||Math.abs(X.height-oe.height)>1};for(const I of v)Xe.current.has(I.id)||(at(I)?Xe.current.set(I.id,"move"):qe(I)&&Xe.current.set(I.id,"resize"));for(const I of Xe.current.keys())v.some(X=>X.id===I)||Xe.current.delete(I);const Te=v.filter(I=>{try{if(K.has(I.id)||k.has(I.id))return!0;const X=document.querySelector(I.selector);if(!X)return!1;const oe=X.getBoundingClientRect(),re=I.originalRect;return Math.abs(oe.width-re.width)+Math.abs(oe.height-re.height)<200}catch{return!1}}),rt=Te.filter(I=>We(I)),vt=Te.filter(I=>!We(I)),Ht=new Set(rt.map(I=>I.id));for(const I of je.current)Ht.has(I)||je.current.delete(I);const ze=[...Ht].sort().join(",");for(const I of rt)kt.current.set(I.id,{currentRect:I.currentRect,originalRect:I.originalRect,isFixed:I.isFixed});return b.useEffect(()=>{const I=nt.current;nt.current=Ht;const X=new Map;for(const oe of I)if(!Ht.has(oe)){if(!v.some(Le=>Le.id===oe))continue;const re=kt.current.get(oe);re&&(X.set(oe,{orig:re.originalRect,target:re.currentRect,isFixed:re.isFixed}),kt.current.delete(oe))}if(X.size>0){Ge(re=>{const Le=new Map(re);for(const[ke,he]of X)Le.set(ke,he);return Le});const oe=Je(()=>{Ge(re=>{const Le=new Map(re);for(const ke of X.keys())Le.delete(ke);return Le})},250);return()=>clearTimeout(oe)}},[ze,v]),r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:`${ne.rearrangeOverlay} ${i?"":ne.light} ${l?ne.overlayExiting:""}${c?` ${c}`:""}`,"data-feedback-toolbar":!0,children:[Se&&r.jsx("div",{className:ne.hoverHighlight,style:{left:Se.x,top:Se.y,width:Se.w,height:Se.h}}),vt.map(I=>{const X=I.currentRect,oe=I.isFixed?X.y:X.y-A,re=f0,Le=k.has(I.id);return r.jsxs("div",{"data-rearrange-section":I.id,className:`${ne.sectionOutline} ${Le?ne.selected:""} ${O||l||K.has(I.id)?ne.exiting:""}`,style:{left:X.x,top:oe,width:X.width,height:X.height,borderColor:re.border,backgroundColor:re.bg,...In?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:ke=>V(ke,I.id),onDoubleClick:()=>ye(I.id),children:[r.jsx("span",{className:ne.sectionLabel,style:{backgroundColor:re.pill},children:I.label}),r.jsx("span",{className:`${ne.sectionAnnotation} ${I.note?ne.annotationVisible:""}`,children:(I.note&&me.current.set(I.id,I.note),I.note||me.current.get(I.id)||"")}),r.jsxs("span",{className:ne.sectionDimensions,children:[Math.round(X.width)," × ",Math.round(X.height)]}),r.jsx("div",{className:ne.deleteButton,onMouseDown:ke=>ke.stopPropagation(),onClick:()=>Ke(I.id),children:"✕"}),h0.map(ke=>r.jsx("div",{className:`${ne.handle} ${ne[`handle${ke.charAt(0).toUpperCase()}${ke.slice(1)}`]}`,onMouseDown:he=>De(he,I.id,ke)},ke))]},I.id)}),rt.map(I=>{const X=I.currentRect,oe=I.isFixed?X.y:X.y-A,re=k.has(I.id),Le=at(I),ke=qe(I);if(u&&!re)return null;const st=!je.current.has(I.id);return st&&je.current.add(I.id),r.jsxs("div",{"data-rearrange-section":I.id,className:`${ne.ghostOutline} ${re?ne.selected:""} ${O||l||K.has(I.id)?ne.exiting:""}`,style:{left:X.x,top:oe,width:X.width,height:X.height,...In?{}:{opacity:0,animation:"none",transition:"none"},...st?{}:{animation:"none"}},onMouseDown:ut=>V(ut,I.id),onDoubleClick:()=>ye(I.id),children:[r.jsx("span",{className:ne.sectionLabel,style:{backgroundColor:f0.pill},children:I.label}),r.jsx("span",{className:`${ne.sectionAnnotation} ${I.note?ne.annotationVisible:""}`,children:(I.note&&me.current.set(I.id,I.note),I.note||me.current.get(I.id)||"")}),r.jsxs("span",{className:ne.sectionDimensions,children:[Math.round(X.width)," × ",Math.round(X.height)]}),r.jsx("div",{className:ne.deleteButton,onMouseDown:ut=>ut.stopPropagation(),onClick:()=>Ke(I.id),children:"✕"}),h0.map(ut=>r.jsx("div",{className:`${ne.handle} ${ne[`handle${ut.charAt(0).toUpperCase()}${ut.slice(1)}`]}`,onMouseDown:Ct=>De(Ct,I.id,ut)},ut)),r.jsx("span",{className:ne.ghostBadge,children:(()=>{const ut=Xe.current.get(I.id);if(Le&&ke){const[Ct,et]=ut==="resize"?["Resize","Move"]:["Move","Resize"];return r.jsxs(r.Fragment,{children:["Suggested ",Ct," ",r.jsxs("span",{className:ne.ghostBadgeExtra,children:["& ",et]})]})}return`Suggested ${ke?"Resize":"Move"}`})()})]},I.id)})]}),!u&&(()=>{const I=[];for(const X of rt){const oe=lt.get(X.id);I.push({id:X.id,orig:X.originalRect,target:oe||X.currentRect,isFixed:X.isFixed,isSelected:k.has(X.id),isExiting:K.has(X.id)})}for(const[X,oe]of lt)if(!I.some(re=>re.id===X)){const re=v.find(Le=>Le.id===X);re&&I.push({id:X,orig:re.originalRect,target:oe,isFixed:re.isFixed,isSelected:k.has(X)})}for(const[X,oe]of en)I.some(re=>re.id===X)||I.push({id:X,orig:oe.orig,target:oe.target,isFixed:oe.isFixed,isSelected:!1,isExiting:!0});return I.length===0?null:r.jsxs("svg",{className:`${ne.connectorSvg} ${O||l?ne.connectorExiting:""}`,children:[I.map(({id:X,orig:oe,target:re,isFixed:Le,isSelected:ke,isExiting:he})=>{const st=oe.x+oe.width/2,ut=(Le?oe.y:oe.y-A)+oe.height/2,Ct=re.x+re.width/2,et=(Le?re.y:re.y-A)+re.height/2,Re=Ct-st,bt=et-ut,jt=Math.sqrt(Re*Re+bt*bt);if(jt<2)return null;const Wt=Math.min(1,jt/40),Ee=Math.min(jt*.3,60),pt=jt>0?-bt/jt:0,gt=jt>0?Re/jt:0,dt=(st+Ct)/2+pt*Ee,dn=(ut+et)/2+gt*Ee,He=lt.has(X),Nt=He||ke?1:.4,yn=He||ke?1:.5;return r.jsxs("g",{className:he?ne.connectorExiting:"",children:[r.jsx("path",{className:ne.connectorLine,d:`M ${st} ${ut} Q ${dt} ${dn} ${Ct} ${et}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:Nt*Wt}),r.jsx("circle",{className:ne.connectorDot,cx:st,cy:ut,r:4*Wt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:yn*Wt,filter:"url(#connDotShadow)"}),r.jsx("circle",{className:ne.connectorDot,cx:Ct,cy:et,r:4*Wt,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:yn*Wt,filter:"url(#connDotShadow)"})]},`conn-${X}`)}),r.jsx("defs",{children:r.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:r.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),z&&(()=>{const I=v.find(et=>et.id===z);if(!I)return null;const X=I.currentRect,oe=I.isFixed?X.y:X.y-A,re=X.x+X.width/2,Le=oe-8,ke=oe+X.height+8,he=Le>200,st=ke<window.innerHeight-100,ut=Math.max(160,Math.min(window.innerWidth-160,re));let Ct;return he?Ct={left:ut,bottom:window.innerHeight-Le}:st?Ct={left:ut,top:ke}:Ct={left:ut,top:Math.max(80,window.innerHeight/2-80)},r.jsx(hu,{element:I.label,placeholder:"Add a note about this section",initialValue:I.note??"",submitLabel:fe.current?"Save":"Set",onSubmit:ue,onCancel:xe,onDelete:fe.current?()=>{ue("")}:void 0,isExiting:ge,lightMode:!i,style:Ct})})(),ce&&r.jsx("div",{className:ne.sizeIndicator,style:{left:ce.x,top:ce.y},"data-feedback-toolbar":!0,children:ce.text}),be.map((I,X)=>r.jsx("div",{className:ne.guideLine,style:I.axis==="x"?{position:"fixed",left:I.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:I.pos-A,width:"100vw",height:1}},`${I.axis}-${I.pos}-${X}`))]})}var sh=new Set(["script","style","noscript","link","meta","br","hr"]);function iw(){const o=document.querySelector("main")||document.body,n=[],i=Array.from(o.children),l=o!==document.body&&i.length<3?Array.from(document.body.children):i;for(const c of l){if(!(c instanceof HTMLElement)||sh.has(c.tagName.toLowerCase())||c.hasAttribute("data-feedback-toolbar"))continue;const u=window.getComputedStyle(c);if(u.display==="none"||u.visibility==="hidden")continue;const _=c.getBoundingClientRect();if(!(_.height<10||_.width<10)){n.push({label:_u(c),selector:ea(c),top:_.top,bottom:_.bottom,left:_.left,right:_.right,area:_.width*_.height});for(const g of Array.from(c.children)){if(!(g instanceof HTMLElement)||sh.has(g.tagName.toLowerCase())||g.hasAttribute("data-feedback-toolbar"))continue;const h=window.getComputedStyle(g);if(h.display==="none"||h.visibility==="hidden")continue;const m=g.getBoundingClientRect();m.height<10||m.width<10||n.push({label:_u(g),selector:ea(g),top:m.top,bottom:m.bottom,left:m.left,right:m.right,area:m.width*m.height})}}}return n}function aw(o){const n=window.scrollY;return o.map(({label:i,selector:l,rect:c})=>{const u=c.y-n;return{label:i,selector:l,top:u,bottom:u+c.height,left:c.x,right:c.x+c.width,area:c.width*c.height}})}function lw(o){const n=window.scrollY,i=o.y-n,l=o.x;return{top:i,bottom:i+o.height,left:l,right:l+o.width,area:o.width*o.height}}function oh(o,n){const i=n?aw(n):iw(),l=lw(o);let c=null,u=null,_=null,g=null,h=null;for(const k of i){if(Math.abs(k.left-l.left)<2&&Math.abs(k.top-l.top)<2&&Math.abs(k.right-k.left-o.width)<2&&Math.abs(k.bottom-k.top-o.height)<2)continue;k.left<=l.left+2&&k.right>=l.right-2&&k.top<=l.top+2&&k.bottom>=l.bottom-2&&k.area>l.area*1.5&&(!h||k.area<h._area)&&(h={label:k.label,selector:k.selector,_area:k.area});const T=l.right>k.left+5&&l.left<k.right-5,O=l.bottom>k.top+5&&l.top<k.bottom-5;if(T&&k.bottom<=l.top+5){const B=Math.round(l.top-k.bottom);(!c||B<c._dist)&&(c={label:k.label,selector:k.selector,gap:Math.max(0,B),_dist:B})}if(T&&k.top>=l.bottom-5){const B=Math.round(k.top-l.bottom);(!u||B<u._dist)&&(u={label:k.label,selector:k.selector,gap:Math.max(0,B),_dist:B})}if(O&&k.right<=l.left+5){const B=Math.round(l.left-k.right);(!_||B<_._dist)&&(_={label:k.label,selector:k.selector,gap:Math.max(0,B),_dist:B})}if(O&&k.left>=l.right-5){const B=Math.round(k.left-l.right);(!g||B<g._dist)&&(g={label:k.label,selector:k.selector,gap:Math.max(0,B),_dist:B})}}const m=window.innerWidth,p=window.innerHeight,y=cw(o,m),v=k=>k?{label:k.label,selector:k.selector,gap:k.gap}:null,j=rw(l,o,m,p,h?{label:h.label,selector:h.selector,_area:h._area}:null,i);return{above:v(c),below:v(u),left:v(_),right:v(g),alignment:y,containedIn:h?{label:h.label,selector:h.selector}:null,outOfBounds:j}}function rw(o,n,i,l,c,u){const _={};let g=!1;const h=[];if(o.left<-2&&h.push("left"),o.right>i+2&&h.push("right"),o.top<-2&&h.push("top"),o.bottom>l+2&&h.push("bottom"),h.length>0&&(_.viewport=h,g=!0),c){const m=u.find(p=>p.label===c.label&&p.selector===c.selector&&Math.abs(p.area-c._area)<10);if(m){const p=[];o.left<m.left-2&&p.push("left"),o.right>m.right+2&&p.push("right"),o.top<m.top-2&&p.push("top"),o.bottom>m.bottom+2&&p.push("bottom"),p.length>0&&(_.container={label:c.label,edges:p},g=!0)}}return g?_:null}function cw(o,n){if(o.width/n>.85)return"full-width";const l=o.x+o.width/2,c=n/2,u=l-c,_=n*.08;return Math.abs(u)<_?"center":u<0?"left":"right"}function dy(o){switch(o){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function fy(o,n={}){const i=[];o.above&&i.push(`Below \`${o.above.label}\`${o.above.gap>0?` (${o.above.gap}px gap)`:""}`),o.below&&i.push(`Above \`${o.below.label}\`${o.below.gap>0?` (${o.below.gap}px gap)`:""}`),n.includeLeftRight&&(o.left&&i.push(`Right of \`${o.left.label}\`${o.left.gap>0?` (${o.left.gap}px gap)`:""}`),o.right&&i.push(`Left of \`${o.right.label}\`${o.right.gap>0?` (${o.right.gap}px gap)`:""}`));const l=dy(o.alignment);return o.containedIn?i.push(`${l.charAt(0).toUpperCase()+l.slice(1)} in \`${o.containedIn.label}\``):i.push(`${l.charAt(0).toUpperCase()+l.slice(1)} in page`),n.includePixelRef&&n.pixelRef&&i.push(`Pixel ref: \`${n.pixelRef}\``),o.outOfBounds&&(o.outOfBounds.viewport&&i.push(`**Outside viewport** (${o.outOfBounds.viewport.join(", ")} edge${o.outOfBounds.viewport.length>1?"s":""})`),o.outOfBounds.container&&i.push(`**Outside \`${o.outOfBounds.container.label}\`** (${o.outOfBounds.container.edges.join(", ")} edge${o.outOfBounds.container.edges.length>1?"s":""})`)),i}function uw(o,n,i){var u,_;const l=[];o.above&&l.push(`below \`${o.above.label}\``),o.below&&l.push(`above \`${o.below.label}\``),o.left&&l.push(`right of \`${o.left.label}\``),o.right&&l.push(`left of \`${o.right.label}\``),o.containedIn&&l.push(`inside \`${o.containedIn.label}\``),l.push(dy(o.alignment)),(u=o.outOfBounds)!=null&&u.viewport&&l.push(`**outside viewport** (${o.outOfBounds.viewport.join(", ")})`),(_=o.outOfBounds)!=null&&_.container&&l.push(`**outside \`${o.outOfBounds.container.label}\`** (${o.outOfBounds.container.edges.join(", ")})`);const c=i?`, ${Math.round(i.width)}×${Math.round(i.height)}px`:"";return`at (${Math.round(n.x)}, ${Math.round(n.y)})${c}: ${l.join(", ")}`}var g0=15;function y0(o){if(o.length<2)return[];const n=[],i=new Set;for(let l=0;l<o.length;l++){if(i.has(l))continue;const c=[l];for(let u=l+1;u<o.length;u++)i.has(u)||Math.abs(o[l].rect.y-o[u].rect.y)<g0&&c.push(u);if(c.length>=2){const u=c.map(h=>o[h]);u.sort((h,m)=>h.rect.x-m.rect.x);const _=[];for(let h=0;h<u.length-1;h++)_.push(Math.round(u[h+1].rect.x-(u[h].rect.x+u[h].rect.width)));const g=Math.round(u.reduce((h,m)=>h+m.rect.y,0)/u.length);n.push({labels:u.map(h=>h.label),type:"row",sharedEdge:g,gaps:_,avgGap:_.length?Math.round(_.reduce((h,m)=>h+m,0)/_.length):0}),c.forEach(h=>i.add(h))}}for(let l=0;l<o.length;l++){if(i.has(l))continue;const c=[l];for(let u=l+1;u<o.length;u++)i.has(u)||Math.abs(o[l].rect.x-o[u].rect.x)<g0&&c.push(u);if(c.length>=2){const u=c.map(h=>o[h]);u.sort((h,m)=>h.rect.y-m.rect.y);const _=[];for(let h=0;h<u.length-1;h++)_.push(Math.round(u[h+1].rect.y-(u[h].rect.y+u[h].rect.height)));const g=Math.round(u.reduce((h,m)=>h+m.rect.x,0)/u.length);n.push({labels:u.map(h=>h.label),type:"column",sharedEdge:g,gaps:_,avgGap:_.length?Math.round(_.reduce((h,m)=>h+m,0)/_.length):0}),c.forEach(h=>i.add(h))}}return n}function dw(o){if(o.length<2)return[];const n=y0(o.map(_=>({label:_.label,rect:_.originalRect}))),i=y0(o.map(_=>({label:_.label,rect:_.currentRect}))),l=[],c=new Set;for(const _ of n){const g=new Set(_.labels);let h=null,m=0;for(const p of i){const y=p.labels.filter(v=>g.has(v)).length;y>=2&&y>m&&(h=p,m=y)}if(h){const p=h.labels.filter(v=>g.has(v)),y=p.join(", ");if(h.type!==_.type){const v=_.type==="row"?"y":"x",j=h.type==="row"?"y":"x";l.push(`**${y}**: ${_.type} (${v}≈${_.sharedEdge}, ${_.avgGap}px gaps) → ${h.type} (${j}≈${h.sharedEdge}, ${h.avgGap}px gaps)`)}else if(Math.abs(_.sharedEdge-h.sharedEdge)>20||Math.abs(_.avgGap-h.avgGap)>5){const v=_.type==="row"?"y":"x",j=Math.abs(_.sharedEdge-h.sharedEdge)>20?` ${v}: ${_.sharedEdge} → ${h.sharedEdge}`:"",k=Math.abs(_.avgGap-h.avgGap)>5?` gaps: ${_.avgGap}px → ${h.avgGap}px`:"";l.push(`**${y}**: ${_.type} shifted —${j}${k}`)}p.forEach(v=>c.add(v))}else{const p=_.labels.join(", "),y=_.type==="row"?"y":"x";l.push(`**${p}**: ${_.type} (${y}≈${_.sharedEdge}) dissolved`),_.labels.forEach(v=>c.add(v))}}for(const _ of i){if(_.labels.every(m=>c.has(m))||_.labels.filter(m=>!c.has(m)).length<2)continue;if(!n.some(m=>m.labels.filter(y=>_.labels.includes(y)).length>=2)){const m=_.type==="row"?"y":"x";l.push(`**${_.labels.join(", ")}**: new ${_.type} (${m}≈${_.sharedEdge}, ${_.avgGap}px gaps)`),_.labels.forEach(p=>c.add(p))}}const u=o.filter(_=>!c.has(_.label));if(u.length>=2){const _={};for(const g of u){const h=Math.round(g.currentRect.x/5)*5;(_[h]??(_[h]=[])).push(g.label)}for(const[g,h]of Object.entries(_))h.length>=2&&l.push(`**${h.join(", ")}**: shared left edge at x≈${g}`)}return l}function hy(o){if(typeof document>"u")return{viewport:o,contentArea:null};const n=[],i=new Set,l=g=>{i.has(g)||g instanceof HTMLElement&&(g.hasAttribute("data-feedback-toolbar")||sh.has(g.tagName.toLowerCase())||(i.add(g),n.push(g)))},c=document.querySelector("main");c&&l(c);const u=document.querySelector("[role='main']");u&&l(u);for(const g of Array.from(document.body.children))if(l(g),g.children){for(const h of Array.from(g.children))if(l(h),h.children)for(const m of Array.from(h.children))l(m)}let _=null;for(const g of n){const h=g.getBoundingClientRect();if(h.height<50)continue;const m=getComputedStyle(g);if(m.maxWidth&&m.maxWidth!=="none"&&m.maxWidth!=="0px"){(!_||h.width<_.rect.width)&&(_={el:g,rect:h});continue}!_&&h.width<o.width-20&&h.width>100&&(_={el:g,rect:h})}if(_){const{el:g,rect:h}=_;return{viewport:o,contentArea:{width:Math.round(h.width),left:Math.round(h.left),right:Math.round(h.right),centerX:Math.round(h.left+h.width/2),selector:ea(g)}}}return{viewport:o,contentArea:null}}function fw(o){if(typeof document>"u")return null;const n=document.querySelector(o);if(!(n!=null&&n.parentElement))return null;const i=getComputedStyle(n.parentElement),l={parentDisplay:i.display,parentSelector:ea(n.parentElement)};return i.display.includes("flex")&&(l.flexDirection=i.flexDirection),i.display.includes("grid")&&i.gridTemplateColumns!=="none"&&(l.gridCols=i.gridTemplateColumns),i.gap&&i.gap!=="normal"&&i.gap!=="0px"&&(l.gap=i.gap),l}function _y(o,n){const i=n.contentArea,l=i?i.width:n.viewport.width,c=i?i.left:0,u=i?i.centerX:Math.round(n.viewport.width/2),_=Math.round(o.x-c),g=Math.round(c+l-(o.x+o.width)),h=(o.width/l*100).toFixed(1),m=o.x+o.width/2,p=Math.abs(m-u)<20,y=o.width/l>.95,v=[];return y?v.push("`width: 100%` of container"):v.push(`left \`${_}px\` in container, right \`${g}px\`, width \`${h}%\` (\`${Math.round(o.width)}px\`)`),p&&!y&&v.push("centered — `margin-inline: auto`"),v.join(" — ")}function my(o){const{viewport:n,contentArea:i}=o;let l=`### Reference Frame
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
`,l}function hw(o){const n=fw(o);if(!n)return null;let i=`\`${n.parentDisplay}\``;return n.flexDirection&&(i+=`, flex-direction: \`${n.flexDirection}\``),n.gridCols&&(i+=`, grid-template-columns: \`${n.gridCols}\``),n.gap&&(i+=`, gap: \`${n.gap}\``),`Parent: ${i} (\`${n.parentSelector}\`)`}function x0(o,n,i,l="standard"){var O,B,J,F;if(o.length===0)return"";const c=[...o].sort((z,ie)=>Math.abs(z.y-ie.y)<20?z.x-ie.x:z.y-ie.y);let u="";if(i!=null&&i.blankCanvas?(u+=`## Wireframe: New Page

`,i.wireframePurpose&&(u+=`> **Purpose:** ${i.wireframePurpose}
>
`),u+=`> ${o.length} component${o.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):u+=`## Design Layout

> ${o.length} component${o.length!==1?"s":""} placed

`,l==="compact")return u+=`### Components
`,c.forEach((z,ie)=>{var Y;const ge=((Y=no[z.type])==null?void 0:Y.label)||z.type;u+=`${ie+1}. **${ge}** — \`${Math.round(z.width)}×${Math.round(z.height)}px\` at \`(${Math.round(z.x)}, ${Math.round(z.y)})\`
`}),u;const _=hy(n);u+=my(_),u+=`### Components
`,c.forEach((z,ie)=>{var K;const ge=((K=no[z.type])==null?void 0:K.label)||z.type,Y={x:z.x,y:z.y,width:z.width,height:z.height};u+=`${ie+1}. **${ge}** — \`${Math.round(z.width)}×${Math.round(z.height)}px\` at \`(${Math.round(z.x)}, ${Math.round(z.y)})\`
`;const fe=oh(Y),xe=fy(fe,{includeLeftRight:l==="detailed"||l==="forensic"});for(const Ue of xe)u+=`   - ${Ue}
`;const ue=_y(Y,_);ue&&(u+=`   - CSS: ${ue}
`)}),u+=`
### Layout Analysis
`;const g=[];for(const z of c){const ie=g.find(ge=>Math.abs(ge.y-z.y)<30);ie?ie.items.push(z):g.push({y:z.y,items:[z]})}if(g.sort((z,ie)=>z.y-ie.y),g.forEach((z,ie)=>{z.items.sort((Y,fe)=>Y.x-fe.x);const ge=z.items.map(Y=>{var fe;return((fe=no[Y.type])==null?void 0:fe.label)||Y.type});if(z.items.length===1){const fe=z.items[0].width>n.width*.8;u+=`- Row ${ie+1} (y≈${Math.round(z.y)}): ${ge[0]}${fe?" — full width":""}
`}else u+=`- Row ${ie+1} (y≈${Math.round(z.y)}): ${ge.join(" | ")} — ${z.items.length} items side by side
`}),l==="detailed"||l==="forensic"){u+=`
### Spacing & Gaps
`;for(let z=0;z<c.length-1;z++){const ie=c[z],ge=c[z+1],Y=((O=no[ie.type])==null?void 0:O.label)||ie.type,fe=((B=no[ge.type])==null?void 0:B.label)||ge.type,ye=Math.round(ge.y-(ie.y+ie.height)),xe=Math.round(ge.x-(ie.x+ie.width));Math.abs(ie.y-ge.y)<30?u+=`- ${Y} → ${fe}: \`${xe}px\` horizontal gap
`:u+=`- ${Y} → ${fe}: \`${ye}px\` vertical gap
`}if(l==="forensic"&&c.length>2){u+=`
### All Pairwise Gaps
`;for(let z=0;z<c.length;z++)for(let ie=z+1;ie<c.length;ie++){const ge=c[z],Y=c[ie],fe=((J=no[ge.type])==null?void 0:J.label)||ge.type,ye=((F=no[Y.type])==null?void 0:F.label)||Y.type,xe=Math.round(Y.y-(ge.y+ge.height)),ue=Math.round(Y.x-(ge.x+ge.width));u+=`- ${fe} ↔ ${ye}: h=\`${ue}px\` v=\`${xe}px\`
`}}l==="forensic"&&(u+=`
### Z-Order (placement order)
`,o.forEach((z,ie)=>{var Y;const ge=((Y=no[z.type])==null?void 0:Y.label)||z.type;u+=`${ie}. ${ge} at \`(${Math.round(z.x)}, ${Math.round(z.y)})\`
`}))}u+=`
### Suggested Implementation
`;const h=c.some(z=>z.type==="navigation"),m=c.some(z=>z.type==="hero"),p=c.some(z=>z.type==="sidebar"),y=c.some(z=>z.type==="footer"),v=c.filter(z=>z.type==="card"),j=c.filter(z=>z.type==="form"),k=c.filter(z=>z.type==="table"),T=c.filter(z=>z.type==="modal");if(h&&(u+=`- Top navigation bar with logo + nav links + CTA
`),m&&(u+=`- Hero section with heading, subtext, and call-to-action
`),p&&(u+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`),v.length>1?u+=`- ${v.length}-column card grid — use CSS Grid or Flexbox
`:v.length===1&&(u+=`- Card component with image + content area
`),j.length>0&&(u+=`- ${j.length} form${j.length>1?"s":""} — add proper labels, validation, and submit handling
`),k.length>0&&(u+=`- Data table — consider sortable columns and pagination
`),T.length>0&&(u+=`- Modal dialog — add overlay backdrop and focus trapping
`),y&&(u+=`- Multi-column footer with links
`),l==="detailed"||l==="forensic"){if(u+=`
### CSS Suggestions
`,p){const z=c.find(ie=>ie.type==="sidebar");u+=`- \`display: grid; grid-template-columns: ${Math.round(z.width)}px 1fr;\`
`}if(v.length>1){const z=Math.round(v[0].width);u+=`- \`display: grid; grid-template-columns: repeat(${v.length}, ${z}px); gap: 16px;\`
`}h&&(u+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return u}function b0(o,n="standard",i){const{sections:l}=o,c=[];for(const p of l){const y=p.originalRect,v=p.currentRect,j=Math.abs(y.x-v.x)>1||Math.abs(y.y-v.y)>1,k=Math.abs(y.width-v.width)>1||Math.abs(y.height-v.height)>1;if(!j&&!k){n==="forensic"&&c.push({section:p,posMoved:!1,sizeChanged:!1});continue}c.push({section:p,posMoved:j,sizeChanged:k})}if(c.length===0||n!=="forensic"&&c.every(p=>!p.posMoved&&!p.sizeChanged))return"";let u=`## Suggested Layout Changes

`;const _=i?i.width:typeof window<"u"?window.innerWidth:0,g=i?i.height:typeof window<"u"?window.innerHeight:0,h=hy({width:_,height:g});n!=="compact"&&(u+=my(h)),n==="forensic"&&(u+=`> Detected at: \`${new Date(o.detectedAt).toISOString()}\`
`,u+=`> Total sections: ${l.length}

`);const m=p=>l.map(y=>({label:y.label,selector:y.selector,rect:p==="original"?y.originalRect:y.currentRect}));u+=`**Changes:**
`;for(const{section:p,posMoved:y,sizeChanged:v}of c){const j=p.originalRect,k=p.currentRect;if(!y&&!v){u+=`- ${p.label} — unchanged at (${Math.round(k.x)}, ${Math.round(k.y)}) ${Math.round(k.width)}×${Math.round(k.height)}px
`;continue}if(n==="compact"){y&&v?u+=`- Suggested: move **${p.label}** to (${Math.round(k.x)}, ${Math.round(k.y)}) ${Math.round(k.width)}×${Math.round(k.height)}px
`:y?u+=`- Suggested: move **${p.label}** to (${Math.round(k.x)}, ${Math.round(k.y)})
`:u+=`- Suggested: resize **${p.label}** to ${Math.round(k.width)}×${Math.round(k.height)}px
`;continue}if(y&&v?u+=`- Suggested: move and resize **${p.label}**
`:y?u+=`- Suggested: move **${p.label}**
`:u+=`- Suggested: resize **${p.label}** from ${Math.round(j.width)}×${Math.round(j.height)}px to ${Math.round(k.width)}×${Math.round(k.height)}px
`,y){const O=oh(j,m("original")),B=oh(k,m("current")),J=v?{width:j.width,height:j.height}:void 0;u+=`  - Currently ${uw(O,{x:j.x,y:j.y},J)}
`;const F=v?{width:k.width,height:k.height}:void 0,z=`at (${Math.round(k.x)}, ${Math.round(k.y)})`,ie=F?`, ${Math.round(F.width)}×${Math.round(F.height)}px`:"",Y=fy(B,{includeLeftRight:n==="detailed"||n==="forensic"});if(Y.length>0){u+=`  - Suggested position ${z}${ie}: ${Y[0]}
`;for(let ye=1;ye<Y.length;ye++)u+=`    ${Y[ye]}
`}else u+=`  - Suggested position ${z}${ie}
`;const fe=_y(k,h);fe&&(u+=`  - CSS: ${fe}
`)}const T=hw(p.selector);if(T&&(u+=`  - ${T}
`),u+=`  - Selector: \`${p.selector}\`
`,n==="detailed"||n==="forensic"){const O=p.className?`${p.tagName}.${p.className.split(" ")[0]}`:p.tagName;O!==p.selector&&(u+=`  - Element: \`${O}\`
`),p.role&&(u+=`  - Role: \`${p.role}\`
`),n==="forensic"&&p.textSnippet&&(u+=`  - Text: "${p.textSnippet}"
`)}n==="forensic"&&(u+=`  - Original rect: \`{ x: ${Math.round(j.x)}, y: ${Math.round(j.y)}, w: ${Math.round(j.width)}, h: ${Math.round(j.height)} }\`
`,u+=`  - Current rect: \`{ x: ${Math.round(k.x)}, y: ${Math.round(k.y)}, w: ${Math.round(k.width)}, h: ${Math.round(k.height)} }\`
`)}if(n!=="compact"){const p=c.filter(v=>v.posMoved).map(v=>({label:v.section.label,originalRect:v.section.originalRect,currentRect:v.section.currentRect})),y=dw(p);if(y.length>0){u+=`
### Layout Summary
`;for(const v of y)u+=`- ${v}
`}}if(n!=="compact"&&l.length>1){u+=`
### All Sections (current positions)
`;const p=[...l].sort((y,v)=>Math.abs(y.currentRect.y-v.currentRect.y)<20?y.currentRect.x-v.currentRect.x:y.currentRect.y-v.currentRect.y);for(const y of p){const v=y.currentRect,j=Math.abs(v.x-y.originalRect.x)>1||Math.abs(v.y-y.originalRect.y)>1||Math.abs(v.width-y.originalRect.width)>1||Math.abs(v.height-y.originalRect.height)>1;u+=`- ${y.label}: \`${Math.round(v.width)}×${Math.round(v.height)}px\` at \`(${Math.round(v.x)}, ${Math.round(v.y)})\`${j?" ← suggested":""}
`}}return u}var ih="feedback-annotations-",py=7;function mu(o){return`${ih}${o}`}function Nf(o){if(typeof window>"u")return[];try{const n=localStorage.getItem(mu(o));if(!n)return[];const i=JSON.parse(n),l=Date.now()-py*24*60*60*1e3;return i.filter(c=>!c.timestamp||c.timestamp>l)}catch{return[]}}function gy(o,n){if(!(typeof window>"u"))try{localStorage.setItem(mu(o),JSON.stringify(n))}catch{}}function _w(){const o=new Map;if(typeof window>"u")return o;try{const n=Date.now()-py*24*60*60*1e3;for(let i=0;i<localStorage.length;i++){const l=localStorage.key(i);if(l!=null&&l.startsWith(ih)){const c=l.slice(ih.length),u=localStorage.getItem(l);if(u){const g=JSON.parse(u).filter(h=>!h.timestamp||h.timestamp>n);g.length>0&&o.set(c,g)}}}}catch{}return o}function nr(o,n,i){const l=n.map(c=>({...c,_syncedTo:i}));gy(o,l)}var jh="agentation-design-";function mw(o){if(typeof window>"u")return[];try{const n=localStorage.getItem(`${jh}${o}`);return n?JSON.parse(n):[]}catch{return[]}}function pw(o,n){if(!(typeof window>"u"))try{localStorage.setItem(`${jh}${o}`,JSON.stringify(n))}catch{}}function gw(o){if(!(typeof window>"u"))try{localStorage.removeItem(`${jh}${o}`)}catch{}}var Mh="agentation-rearrange-";function yw(o){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${Mh}${o}`);return n?JSON.parse(n):null}catch{return null}}function xw(o,n){if(!(typeof window>"u"))try{localStorage.setItem(`${Mh}${o}`,JSON.stringify(n))}catch{}}function bw(o){if(!(typeof window>"u"))try{localStorage.removeItem(`${Mh}${o}`)}catch{}}var Th="agentation-wireframe-";function vw(o){if(typeof window>"u")return null;try{const n=localStorage.getItem(`${Th}${o}`);return n?JSON.parse(n):null}catch{return null}}function v0(o,n){if(!(typeof window>"u"))try{localStorage.setItem(`${Th}${o}`,JSON.stringify(n))}catch{}}function Vc(o){if(!(typeof window>"u"))try{localStorage.removeItem(`${Th}${o}`)}catch{}}var yy="agentation-session-";function Eh(o){return`${yy}${o}`}function ww(o){if(typeof window>"u")return null;try{return localStorage.getItem(Eh(o))}catch{return null}}function Lf(o,n){if(!(typeof window>"u"))try{localStorage.setItem(Eh(o),n)}catch{}}function Sw(o){if(!(typeof window>"u"))try{localStorage.removeItem(Eh(o))}catch{}}var xy=`${yy}toolbar-hidden`;function kw(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(xy)==="1"}catch{return!1}}function Cw(o){if(!(typeof window>"u"))try{o&&sessionStorage.setItem(xy,"1")}catch{}}async function Of(o,n){const i=await fetch(`${o}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(!i.ok)throw new Error(`Failed to create session: ${i.status}`);return i.json()}async function w0(o,n){const i=await fetch(`${o}/sessions/${n}`);if(!i.ok)throw new Error(`Failed to get session: ${i.status}`);return i.json()}async function Ga(o,n,i){const l=await fetch(`${o}/sessions/${n}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!l.ok)throw new Error(`Failed to sync annotation: ${l.status}`);return l.json()}async function S0(o,n,i){const l=await fetch(`${o}/annotations/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!l.ok)throw new Error(`Failed to update annotation: ${l.status}`);return l.json()}async function ki(o,n){const i=await fetch(`${o}/annotations/${n}`,{method:"DELETE"});if(!i.ok)throw new Error(`Failed to delete annotation: ${i.status}`)}var Ut={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},k0=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),C0=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],jw=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function Mw(o){const n=(o==null?void 0:o.mode)??"filtered";let i=k0;if(o!=null&&o.skipExact){const l=o.skipExact instanceof Set?o.skipExact:new Set(o.skipExact);i=new Set([...k0,...l])}return{maxComponents:(o==null?void 0:o.maxComponents)??6,maxDepth:(o==null?void 0:o.maxDepth)??30,mode:n,skipExact:i,skipPatterns:o!=null&&o.skipPatterns?[...C0,...o.skipPatterns]:C0,userPatterns:(o==null?void 0:o.userPatterns)??jw,filter:o==null?void 0:o.filter}}function Tw(o){return o.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function Ew(o,n=10){const i=new Set;let l=o,c=0;for(;l&&c<n;)l.className&&typeof l.className=="string"&&l.className.split(/\s+/).forEach(u=>{if(u.length>1){const _=u.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();_.length>1&&i.add(_)}}),l=l.parentElement,c++;return i}function Rw(o,n){const i=Tw(o);for(const l of n){if(l===i)return!0;const c=i.split("-").filter(_=>_.length>2),u=l.split("-").filter(_=>_.length>2);for(const _ of c)for(const g of u)if(_===g||_.includes(g)||g.includes(_))return!0}return!1}function Aw(o,n,i,l){if(i.filter)return i.filter(o,n);switch(i.mode){case"all":return!0;case"filtered":return!(i.skipExact.has(o)||i.skipPatterns.some(c=>c.test(o)));case"smart":return i.skipExact.has(o)||i.skipPatterns.some(c=>c.test(o))?!1:!!(l&&Rw(o,l)||i.userPatterns.some(c=>c.test(o)));default:return!0}}var Fa=null,Dw=new WeakMap;function zf(o){return Object.keys(o).some(n=>n.startsWith("__reactFiber$")||n.startsWith("__reactInternalInstance$")||n.startsWith("__reactProps$"))}function Nw(){if(Fa!==null)return Fa;if(typeof document>"u")return!1;if(document.body&&zf(document.body))return Fa=!0,!0;const o=["#root","#app","#__next","[data-reactroot]"];for(const n of o){const i=document.querySelector(n);if(i&&zf(i))return Fa=!0,!0}if(document.body){for(const n of document.body.children)if(zf(n))return Fa=!0,!0}return Fa=!1,!1}var sr={map:Dw};function Lw(o){return Object.keys(o).find(i=>i.startsWith("__reactFiber$")||i.startsWith("__reactInternalInstance$"))||null}function Ow(o){const n=Lw(o);return n?o[n]:null}function qi(o){return o?o.displayName?o.displayName:o.name?o.name:null:null}function zw(o){var c;const{tag:n,type:i,elementType:l}=o;if(n===Ut.HostComponent||n===Ut.HostText||n===Ut.HostHoistable||n===Ut.HostSingleton||n===Ut.Fragment||n===Ut.Mode||n===Ut.Profiler||n===Ut.DehydratedFragment||n===Ut.HostRoot||n===Ut.HostPortal||n===Ut.ScopeComponent||n===Ut.OffscreenComponent||n===Ut.LegacyHiddenComponent||n===Ut.CacheComponent||n===Ut.TracingMarkerComponent||n===Ut.Throw||n===Ut.ViewTransitionComponent||n===Ut.ActivityComponent)return null;if(n===Ut.ForwardRef){const u=l;if(u!=null&&u.render){const _=qi(u.render);if(_)return _}return u!=null&&u.displayName?u.displayName:qi(i)}if(n===Ut.MemoComponent||n===Ut.SimpleMemoComponent){const u=l;if(u!=null&&u.type){const _=qi(u.type);if(_)return _}return u!=null&&u.displayName?u.displayName:qi(i)}if(n===Ut.ContextProvider){const u=i;return(c=u==null?void 0:u._context)!=null&&c.displayName?`${u._context.displayName}.Provider`:null}if(n===Ut.ContextConsumer){const u=i;return u!=null&&u.displayName?`${u.displayName}.Consumer`:null}if(n===Ut.LazyComponent){const u=l;return(u==null?void 0:u._status)===1&&u._result?qi(u._result):null}return n===Ut.SuspenseComponent||n===Ut.SuspenseListComponent?null:n===Ut.IncompleteClassComponent||n===Ut.IncompleteFunctionComponent||n===Ut.FunctionComponent||n===Ut.ClassComponent||n===Ut.IndeterminateComponent?qi(i):null}function Bw(o){return o.length<=2||o.length<=3&&o===o.toLowerCase()}function $w(o,n){const i=Mw(n),l=i.mode==="all";if(l){const h=sr.map.get(o);if(h!==void 0)return h}if(!Nw()){const h={path:null,components:[]};return l&&sr.map.set(o,h),h}const c=i.mode==="smart"?Ew(o):void 0,u=[];try{let h=Ow(o),m=0;for(;h&&m<i.maxDepth&&u.length<i.maxComponents;){const p=zw(h);p&&!Bw(p)&&Aw(p,m,i,c)&&u.push(p),h=h.return,m++}}catch{const h={path:null,components:[]};return l&&sr.map.set(o,h),h}if(u.length===0){const h={path:null,components:[]};return l&&sr.map.set(o,h),h}const g={path:u.slice().reverse().map(h=>`<${h}>`).join(" "),components:u};return l&&sr.map.set(o,g),g}var or={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function Pw(o){if(!o||typeof o!="object")return null;const n=Object.keys(o),i=n.find(u=>u.startsWith("__reactFiber$"));if(i)return o[i]||null;const l=n.find(u=>u.startsWith("__reactInternalInstance$"));if(l)return o[l]||null;const c=n.find(u=>{if(!u.startsWith("__react"))return!1;const _=o[u];return _&&typeof _=="object"&&"_debugSource"in _});return c&&o[c]||null}function hr(o){if(!o.type||typeof o.type=="string")return null;if(typeof o.type=="object"||typeof o.type=="function"){const n=o.type;if(n.displayName)return n.displayName;if(n.name)return n.name}return null}function Iw(o,n=50){var c;let i=o,l=0;for(;i&&l<n;){if(i._debugSource)return{source:i._debugSource,componentName:hr(i)};if((c=i._debugOwner)!=null&&c._debugSource)return{source:i._debugOwner._debugSource,componentName:hr(i._debugOwner)};i=i.return,l++}return null}function Uw(o){let n=o,i=0;const l=50;for(;n&&i<l;){const c=n,u=["_debugSource","__source","_source","debugSource"];for(const _ of u){const g=c[_];if(g&&typeof g=="object"&&"fileName"in g)return{source:g,componentName:hr(n)}}if(n.memoizedProps){const _=n.memoizedProps;if(_.__source&&typeof _.__source=="object"){const g=_.__source;if(g.fileName&&g.lineNumber)return{source:{fileName:g.fileName,lineNumber:g.lineNumber,columnNumber:g.columnNumber},componentName:hr(n)}}}n=n.return,i++}return null}var Kc=new Map;function Hw(o){var c;const n=o.tag,i=o.type,l=o.elementType;if(typeof i=="string"||i==null||typeof i=="function"&&((c=i.prototype)!=null&&c.isReactComponent))return null;if((n===or.FunctionComponent||n===or.IndeterminateComponent)&&typeof i=="function")return i;if(n===or.ForwardRef&&l){const u=l.render;if(typeof u=="function")return u}if((n===or.MemoComponent||n===or.SimpleMemoComponent)&&l){const u=l.type;if(typeof u=="function")return u}return typeof i=="function"?i:null}function Yw(){const o=Mn,n=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(n&&"H"in n)return{get:()=>n.H,set:l=>{n.H=l}};const i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(i){const l=i.ReactCurrentDispatcher;if(l&&"current"in l)return{get:()=>l.current,set:c=>{l.current=c}}}return null}function Xw(o){const n=o.split(`
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
}`,Kw={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let o=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");o||(o=document.createElement("style"),o.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(o)),o.textContent=Vw}var de=Kw,ir=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function j0(o,n,i="standard"){if(o.length===0)return"";const l=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let c=`## Page Feedback: ${n}
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
}`,Jw={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",markerTooltip:"styles-module__markerTooltip___-VUm-",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let o=document.getElementById("feedback-tool-styles-annotation-marker-styles");o||(o=document.createElement("style"),o.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(o)),o.textContent=Zw}var Tn=Jw;function M0({annotation:o,globalIndex:n,layerIndex:i,layerSize:l,isExiting:c,isClearing:u,isAnimated:_,isHovered:g,isDeleting:h,isEditingAny:m,renumberFrom:p,markerClickBehavior:y,tooltipStyle:v,onHoverEnter:j,onHoverLeave:k,onClick:T,onContextMenu:O}){const B=(g||h)&&!m,J=B&&y==="delete",F=o.isMultiSelect,z=F?"var(--agentation-color-green)":"var(--agentation-color-accent)",ie=c?Tn.exit:u?Tn.clearing:_?"":Tn.enter,ge=c?`${(l-1-i)*20}ms`:`${i*20}ms`;return r.jsxs("div",{className:`${Tn.marker} ${F?Tn.multiSelect:""} ${ie} ${J?Tn.hovered:""}`,"data-annotation-marker":!0,style:{left:`${o.x}%`,top:o.y,backgroundColor:J?void 0:z,animationDelay:ge},onMouseEnter:()=>j(o),onMouseLeave:k,onClick:Y=>{Y.stopPropagation(),c||T(o)},onContextMenu:O?Y=>{y==="delete"&&(Y.preventDefault(),Y.stopPropagation(),c||O(o))}:void 0,children:[B?J?r.jsx(oy,{size:F?18:16}):r.jsx(f2,{size:16}):r.jsx("span",{className:p!==null&&n>=p?Tn.renumber:void 0,children:n+1}),g&&!m&&r.jsxs("div",{className:`${Tn.markerTooltip} ${Tn.enter}`,style:v,children:[r.jsxs("span",{className:Tn.markerQuote,children:[o.element,o.selectedText&&` "${o.selectedText.slice(0,30)}${o.selectedText.length>30?"...":""}"`]}),r.jsx("span",{className:Tn.markerNote,children:o.comment})]})]})}function e4({x:o,y:n,isMultiSelect:i,isExiting:l}){return r.jsx("div",{className:`${Tn.marker} ${Tn.pending} ${i?Tn.multiSelect:""} ${l?Tn.exit:Tn.enter}`,style:{left:`${o}%`,top:n,backgroundColor:i?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:r.jsx(e2,{size:12})})}function T0({annotation:o,fixed:n}){const i=o.isMultiSelect;return r.jsx("div",{className:`${Tn.marker} ${n?Tn.fixed:""} ${Tn.hovered} ${i?Tn.multiSelect:""} ${Tn.exit}`,"data-annotation-marker":!0,style:{left:`${o.x}%`,top:o.y},children:r.jsx(oy,{size:i?12:10})})}var t4=`.styles-module__switchContainer___Ka-AB {
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
}`,l4={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let o=document.getElementById("feedback-tool-styles-checkbox-field-styles");o||(o=document.createElement("style"),o.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(o)),o.textContent=a4}var E0=l4,R0=({className:o="",label:n,tooltip:i,checked:l,onChange:c,...u})=>{const _=b.useId();return r.jsxs("div",{className:`${E0.container} ${o}`,...u,children:[r.jsx(i4,{id:_,onChange:c,checked:l}),r.jsx("label",{className:E0.label,htmlFor:_,children:n}),i&&r.jsx(Ki,{content:i})]})},r4=`@keyframes styles-module__cycleTextIn___VBNTi {
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
}`,c4={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let o=document.getElementById("feedback-tool-styles-settings-panel-styles");o||(o=document.createElement("style"),o.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(o)),o.textContent=r4}var Oe=c4;function u4({settings:o,onSettingsChange:n,isDarkMode:i,onToggleTheme:l,isDevMode:c,connectionStatus:u,endpoint:_,isVisible:g,toolbarNearBottom:h,settingsPage:m,onSettingsPageChange:p,onHideToolbar:y}){var v;return r.jsx("div",{className:`${Oe.settingsPanel} ${g?Oe.enter:Oe.exit}`,style:h?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:r.jsxs("div",{className:Oe.settingsPanelContainer,children:[r.jsxs("div",{className:`${Oe.settingsPage} ${m==="automations"?Oe.slideLeft:""}`,children:[r.jsxs("div",{className:Oe.settingsHeader,children:[r.jsx("a",{className:Oe.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:r.jsx("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),r.jsxs("p",{className:Oe.settingsVersion,children:["v","3.0.2"]}),r.jsx("button",{className:Oe.themeToggle,onClick:l,title:i?"Switch to light mode":"Switch to dark mode",children:r.jsx("span",{className:Oe.themeIconWrapper,children:r.jsx("span",{className:Oe.themeIcon,children:i?r.jsx(u2,{size:20}):r.jsx(d2,{size:20})},i?"sun":"moon")})})]}),r.jsx("div",{className:Oe.divider}),r.jsxs("div",{className:Oe.settingsSection,children:[r.jsxs("div",{className:Oe.settingsRow,children:[r.jsxs("div",{className:Oe.settingsLabel,children:["Output Detail",r.jsx(Ki,{content:"Controls how much detail is included in the copied output"})]}),r.jsxs("button",{className:Oe.cycleButton,onClick:()=>{const k=(ir.findIndex(T=>T.value===o.outputDetail)+1)%ir.length;n({outputDetail:ir[k].value})},children:[r.jsx("span",{className:Oe.cycleButtonText,children:(v=ir.find(j=>j.value===o.outputDetail))==null?void 0:v.label},o.outputDetail),r.jsx("span",{className:Oe.cycleDots,children:ir.map(j=>r.jsx("span",{className:`${Oe.cycleDot} ${o.outputDetail===j.value?Oe.active:""}`},j.value))})]})]}),r.jsxs("div",{className:`${Oe.settingsRow} ${Oe.settingsRowMarginTop} ${c?"":Oe.settingsRowDisabled}`,children:[r.jsxs("div",{className:Oe.settingsLabel,children:["React Components",r.jsx(Ki,{content:c?"Include React component names in annotations":"Disabled — production builds minify component names, making detection unreliable. Use in development mode."})]}),r.jsx($f,{checked:c&&o.reactEnabled,onChange:j=>n({reactEnabled:j.target.checked}),disabled:!c})]}),r.jsxs("div",{className:`${Oe.settingsRow} ${Oe.settingsRowMarginTop}`,children:[r.jsxs("div",{className:Oe.settingsLabel,children:["Hide Until Restart",r.jsx(Ki,{content:"Hides the toolbar until you open a new tab"})]}),r.jsx($f,{checked:!1,onChange:j=>{j.target.checked&&y()}})]})]}),r.jsx("div",{className:Oe.divider}),r.jsxs("div",{className:Oe.settingsSection,children:[r.jsx("div",{className:`${Oe.settingsLabel} ${Oe.settingsLabelMarker}`,children:"Marker Color"}),r.jsx("div",{className:Oe.colorOptions,children:rr.map(j=>r.jsx("button",{className:`${Oe.colorOption} ${o.annotationColorId===j.id?Oe.selected:""}`,style:{"--swatch":j.srgb,"--swatch-p3":j.p3},onClick:()=>n({annotationColorId:j.id}),title:j.label,type:"button"},j.id))})]}),r.jsx("div",{className:Oe.divider}),r.jsxs("div",{className:Oe.settingsSection,children:[r.jsx(R0,{className:"checkbox-field",label:"Clear on copy/send",checked:o.autoClearAfterCopy,onChange:j=>n({autoClearAfterCopy:j.target.checked}),tooltip:"Automatically clear annotations after copying"}),r.jsx(R0,{className:Oe.checkboxField,label:"Block page interactions",checked:o.blockInteractions,onChange:j=>n({blockInteractions:j.target.checked})})]}),r.jsx("div",{className:Oe.divider}),r.jsxs("button",{className:Oe.settingsNavLink,onClick:()=>p("automations"),children:[r.jsx("span",{children:"Manage MCP & Webhooks"}),r.jsxs("span",{className:Oe.settingsNavLinkRight,children:[_&&u!=="disconnected"&&r.jsx("span",{className:`${Oe.mcpNavIndicator} ${Oe[u]}`}),r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),r.jsxs("div",{className:`${Oe.settingsPage} ${Oe.automationsPage} ${m==="automations"?Oe.slideIn:""}`,children:[r.jsxs("button",{className:Oe.settingsBackButton,onClick:()=>p("main"),children:[r.jsx(_2,{size:16}),r.jsx("span",{children:"Manage MCP & Webhooks"})]}),r.jsx("div",{className:Oe.divider}),r.jsxs("div",{className:Oe.settingsSection,children:[r.jsxs("div",{className:Oe.settingsRow,children:[r.jsxs("span",{className:Oe.automationHeader,children:["MCP Connection",r.jsx(Ki,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),_&&r.jsx("div",{className:`${Oe.mcpStatusDot} ${Oe[u]}`,title:u==="connected"?"Connected":u==="connecting"?"Connecting...":"Disconnected"})]}),r.jsxs("p",{className:Oe.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",r.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:Oe.learnMoreLink,children:"Learn more"})]})]}),r.jsx("div",{className:Oe.divider}),r.jsxs("div",{className:`${Oe.settingsSection} ${Oe.settingsSectionGrow}`,children:[r.jsxs("div",{className:Oe.settingsRow,children:[r.jsxs("span",{className:Oe.automationHeader,children:["Webhooks",r.jsx(Ki,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),r.jsxs("div",{className:Oe.autoSendContainer,children:[r.jsx("label",{htmlFor:"agentation-auto-send",className:`${Oe.autoSendLabel} ${o.webhooksEnabled?Oe.active:""} ${o.webhookUrl?"":Oe.disabled}`,children:"Auto-Send"}),r.jsx($f,{id:"agentation-auto-send",checked:o.webhooksEnabled,onChange:j=>n({webhooksEnabled:j.target.checked}),disabled:!o.webhookUrl})]})]}),r.jsx("p",{className:Oe.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),r.jsx("textarea",{className:Oe.webhookUrlInput,placeholder:"Webhook URL",value:o.webhookUrl,onKeyDown:j=>j.stopPropagation(),onChange:j=>n({webhookUrl:j.target.value})})]})]})]})})}function Pf(o,n="filtered"){const{name:i,path:l}=Va(o);if(n==="off")return{name:i,elementName:i,path:l,reactComponents:null};const c=$w(o,{mode:n});return{name:c.path?`${c.path} ${i}`:i,elementName:i,path:l,reactComponents:c.path}}var A0=!1,If={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},wo=o=>{if(!o||!o.trim())return!1;try{const n=new URL(o.trim());return n.protocol==="http:"||n.protocol==="https:"}catch{return!1}},rr=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],d4=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;const o=document.createElement("style");o.id="agentation-color-tokens",o.textContent=[...rr.map(n=>`
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
    }`].join(""),document.head.appendChild(o)};d4();function Qi(o,n){let i=document.elementFromPoint(o,n);if(!i)return null;for(;i!=null&&i.shadowRoot;){const l=i.shadowRoot.elementFromPoint(o,n);if(!l||l===i)break;i=l}return i}function Uf(o){let n=o;for(;n&&n!==document.body;){const l=window.getComputedStyle(n).position;if(l==="fixed"||l==="sticky")return!0;n=n.parentElement}return!1}function Vi(o){return o.status!=="resolved"&&o.status!=="dismissed"}function Jc(o){const n=ah(o),i=n.found?n:Qw(o);if(i.found&&i.source)return qw(i.source,"path")}function f4({demoAnnotations:o,demoDelay:n=1e3,enableDemoMode:i=!1,onAnnotationAdd:l,onAnnotationDelete:c,onAnnotationUpdate:u,onAnnotationsClear:_,onCopy:g,onSubmit:h,copyToClipboard:m=!0,endpoint:p,sessionId:y,onSessionCreated:v,webhookUrl:j,className:k}={}){var Nr,Lr,ml,pl,ei,ti;const[T,O]=b.useState(!1),[B,J]=b.useState([]),[F,z]=b.useState(!0),[ie,ge]=b.useState(()=>kw()),[Y,fe]=b.useState(!1),ye=b.useRef(null);b.useEffect(()=>{const S=D=>{const E=ye.current;E&&E.contains(D.target)&&D.stopPropagation()},M=["mousedown","click","pointerdown"];return M.forEach(D=>document.body.addEventListener(D,S)),()=>{M.forEach(D=>document.body.removeEventListener(D,S))}},[]);const[xe,ue]=b.useState(!1),[K,Ue]=b.useState(!1),[me,Se]=b.useState(null),[N,ce]=b.useState({x:0,y:0}),[W,be]=b.useState(null),[Ae,A]=b.useState(!1),[Z,_e]=b.useState("idle"),[je,Xe]=b.useState(!1),[lt,ct]=b.useState(!1),[en,Ge]=b.useState(null),[nt,kt]=b.useState(null),[_t,Ot]=b.useState([]),[Pt,In]=b.useState(null),[is,Un]=b.useState(null),[V,De]=b.useState(null),[Ke,We]=b.useState(null),[at,qe]=b.useState([]),[Te,rt]=b.useState(0),[vt,Ht]=b.useState(!1),[ze,I]=b.useState(!1),[X,oe]=b.useState(!1),[re,Le]=b.useState(!1),[ke,he]=b.useState(!1),[st,ut]=b.useState("main"),[Ct,et]=b.useState(!1),[Re,bt]=b.useState(!1),[jt,Wt]=b.useState(!1),[Ee,pt]=b.useState([]),[gt,dt]=b.useState(null),dn=b.useRef(!1),[He,Nt]=b.useState(!1),[yn,Hn]=b.useState(!1),[Bn,oo]=b.useState(1),[vs,Kn]=b.useState("new-page"),[ln,En]=b.useState(""),[Yt,Sn]=b.useState(!1),[Me,Zn]=b.useState(null),el=b.useRef(!1),tl=b.useRef({rearrange:null,placements:[]}),io=b.useRef({rearrange:null,placements:[]}),[Mi,oa]=b.useState(0),[Xo,Go]=b.useState(0),[Ti,ao]=b.useState(0),[Rn,nl]=b.useState(0),Fo=b.useRef(new Set),Ns=b.useRef(new Set),Yn=b.useRef(null),ia=b.useRef(),sl=Re&&T&&!jt&&He;b.useEffect(()=>{if(sl){Hn(!1);const S=qa(()=>{Hn(!0)});return()=>cancelAnimationFrame(S)}else Hn(!1)},[sl]);const Wo=b.useRef(new Map),Ei=b.useRef(new Map),lo=b.useRef(),[Jn,ws]=b.useState(!1),[rn,gr]=b.useState([]),bu=b.useRef(rn);bu.current=rn;const[aa,vu]=b.useState(null),qo=b.useRef(null);b.useRef(!1),b.useRef([]),b.useRef(0),b.useRef(null),b.useRef(null),b.useRef(1);const[yr,as]=b.useState(!1),ro=b.useRef(null),[_n,co]=b.useState([]),Gn=b.useRef({cmd:!1,shift:!1}),$n=()=>{et(!0)},xr=()=>{et(!1)},Qo=()=>{yr||(ro.current=Je(()=>as(!0),850))},wu=()=>{ro.current&&(clearTimeout(ro.current),ro.current=null),as(!1),xr()};b.useEffect(()=>()=>{ro.current&&clearTimeout(ro.current)},[]);const[wt,br]=b.useState(()=>{try{const S=JSON.parse(localStorage.getItem("feedback-toolbar-settings")??"");return{...If,...S,annotationColorId:rr.find(M=>M.id===S.annotationColorId)?S.annotationColorId:If.annotationColorId}}catch{return If}}),[hs,vr]=b.useState(!0),[wr,Ri]=b.useState(!1),Qs=()=>{var S;(S=ye.current)==null||S.classList.add(de.disableTransitions),vr(M=>!M),qa(()=>{var M;(M=ye.current)==null||M.classList.remove(de.disableTransitions)})},ol=!1,Vs="off",[on,uo]=b.useState(y??null),il=b.useRef(!1),[ls,fo]=b.useState(p?"connecting":"disconnected"),[zt,Ss]=b.useState(null),[Ks,Vo]=b.useState(!1),[rs,la]=b.useState(null),Ko=b.useRef(!1),[al,ho]=b.useState(new Set),[Ai,Di]=b.useState(new Set),[An,Ls]=b.useState(!1),[ra,Os]=b.useState(!1),[Zs,ca]=b.useState(!1),_o=b.useRef(null),es=b.useRef(null),mo=b.useRef(null),Zo=b.useRef(null),ua=b.useRef(!1),Sr=b.useRef(0),da=b.useRef(null),fa=b.useRef(null),ll=8,Su=50,kr=b.useRef(null),Cr=b.useRef(null),Ni=b.useRef(null),Ze=typeof window<"u"?window.location.pathname:"/";b.useEffect(()=>{if(re)he(!0);else{et(!1),ut("main");const S=Je(()=>he(!1),0);return()=>clearTimeout(S)}},[re]);const rl=T&&F&&!Re;b.useEffect(()=>{if(rl){Ue(!1),ue(!0),ho(new Set);const S=Je(()=>{ho(M=>{const D=new Set(M);return B.forEach(E=>D.add(E.id)),D})},350);return()=>clearTimeout(S)}else if(xe){Ue(!0);const S=Je(()=>{ue(!1),Ue(!1)},250);return()=>clearTimeout(S)}},[rl]),b.useEffect(()=>{I(!0),rt(window.scrollY);const S=Nf(Ze);J(S.filter(Vi)),A0||(Ri(!0),A0=!0,Je(()=>Ri(!1),750));try{const M=localStorage.getItem("feedback-toolbar-theme");M!==null&&vr(M==="dark")}catch{}try{const M=localStorage.getItem("feedback-toolbar-position");if(M){const D=JSON.parse(M);typeof D.x=="number"&&typeof D.y=="number"&&Ss(D)}}catch{}},[Ze]),b.useEffect(()=>{ze&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(wt))},[wt,ze]),b.useEffect(()=>{ze&&localStorage.setItem("feedback-toolbar-theme",hs?"dark":"light")},[hs,ze]);const jr=b.useRef(!1);b.useEffect(()=>{const S=jr.current;jr.current=Ks,S&&!Ks&&zt&&ze&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(zt))},[Ks,zt,ze]),b.useEffect(()=>{if(!p||!ze||il.current)return;il.current=!0,fo("connecting"),(async()=>{try{const M=ww(Ze),D=y||M;let E=!1;if(D)try{const $=await w0(p,D);uo($.id),fo("connected"),Lf(Ze,$.id),E=!0;const Q=Nf(Ze),pe=new Set($.annotations.map(Ce=>Ce.id)),ve=Q.filter(Ce=>!pe.has(Ce.id));if(ve.length>0){const $e=`${typeof window<"u"?window.location.origin:""}${Ze}`,ot=(await Promise.allSettled(ve.map(Qe=>Ga(p,$.id,{...Qe,sessionId:$.id,url:$e})))).map((Qe,we)=>Qe.status==="fulfilled"?Qe.value:(console.warn("[Agentation] Failed to sync annotation:",Qe.reason),ve[we])),yt=[...$.annotations,...ot];J(yt.filter(Vi)),nr(Ze,yt.filter(Vi),$.id)}else J($.annotations.filter(Vi)),nr(Ze,$.annotations.filter(Vi),$.id)}catch($){console.warn("[Agentation] Could not join session, creating new:",$),Sw(Ze)}if(!E){const $=typeof window<"u"?window.location.href:"/",Q=await Of(p,$);uo(Q.id),fo("connected"),Lf(Ze,Q.id),v==null||v(Q.id);const pe=_w(),ve=typeof window<"u"?window.location.origin:"",Ce=[];for(const[$e,Ye]of pe){const ot=Ye.filter(we=>!we._syncedTo);if(ot.length===0)continue;const yt=`${ve}${$e}`,Qe=$e===Ze;Ce.push((async()=>{try{const we=Qe?Q:await Of(p,yt),mn=(await Promise.allSettled(ot.map(Rt=>Ga(p,we.id,{...Rt,sessionId:we.id,url:yt})))).map((Rt,fn)=>Rt.status==="fulfilled"?Rt.value:(console.warn("[Agentation] Failed to sync annotation:",Rt.reason),ot[fn])).filter(Vi);if(nr($e,mn,we.id),Qe){const Rt=new Set(ot.map(fn=>fn.id));J(fn=>{const tt=fn.filter(ft=>!Rt.has(ft.id));return[...mn,...tt]})}}catch(we){console.warn(`[Agentation] Failed to sync annotations for ${$e}:`,we)}})())}await Promise.allSettled(Ce)}}catch(M){fo("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",M)}})()},[p,y,ze,v,Ze]),b.useEffect(()=>{if(!p||!ze)return;const S=async()=>{try{(await fetch(`${p}/health`)).ok?fo("connected"):fo("disconnected")}catch{fo("disconnected")}};S();const M=g2(S,1e4);return()=>clearInterval(M)},[p,ze]),b.useEffect(()=>{if(!p||!ze||!on)return;const S=new EventSource(`${p}/sessions/${on}/events`),M=["resolved","dismissed"],D=E=>{var $;try{const Q=JSON.parse(E.data);if(M.includes(($=Q.payload)==null?void 0:$.status)){const pe=Q.payload.id,ve=Q.payload.kind;if(ve==="placement"){for(const[Ce,$e]of Wo.current)if($e===pe){Wo.current.delete(Ce),pt(Ye=>Ye.filter(ot=>ot.id!==Ce));break}}else if(ve==="rearrange"){for(const[Ce,$e]of Ei.current)if($e===pe){Ei.current.delete(Ce),Zn(Ye=>{if(!Ye)return null;const ot=Ye.sections.filter(yt=>yt.id!==Ce);return ot.length===0?null:{...Ye,sections:ot}});break}}else Di(Ce=>new Set(Ce).add(pe)),Je(()=>{J(Ce=>Ce.filter($e=>$e.id!==pe)),Di(Ce=>{const $e=new Set(Ce);return $e.delete(pe),$e})},150)}}catch{}};return S.addEventListener("annotation.updated",D),()=>{S.removeEventListener("annotation.updated",D),S.close()}},[p,ze,on]),b.useEffect(()=>{if(!p||!ze)return;const S=fa.current==="disconnected",M=ls==="connected";fa.current=ls,S&&M&&(async()=>{try{const E=Nf(Ze);if(E.length===0)return;const Q=`${typeof window<"u"?window.location.origin:""}${Ze}`;let pe=on,ve=[];if(pe)try{ve=(await w0(p,pe)).annotations}catch{pe=null}pe||(pe=(await Of(p,Q)).id,uo(pe),Lf(Ze,pe));const Ce=new Set(ve.map(Ye=>Ye.id)),$e=E.filter(Ye=>!Ce.has(Ye.id));if($e.length>0){const ot=(await Promise.allSettled($e.map(we=>Ga(p,pe,{...we,sessionId:pe,url:Q})))).map((we,tn)=>we.status==="fulfilled"?we.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",we.reason),$e[tn])),Qe=[...ve,...ot].filter(Vi);J(Qe),nr(Ze,Qe,pe)}}catch(E){console.warn("[Agentation] Failed to sync on reconnect:",E)}})()},[ls,p,ze,on,Ze]);const ku=b.useCallback(()=>{Y||(fe(!0),Le(!1),O(!1),Je(()=>{Cw(!0),ge(!0),fe(!1)},400))},[Y]);b.useEffect(()=>{if(!i||!ze||!o||o.length===0||B.length>0)return;const S=[];return S.push(Je(()=>{O(!0)},n-200)),o.forEach((M,D)=>{const E=n+D*300;S.push(Je(()=>{const $=document.querySelector(M.selector);if(!$)return;const Q=$.getBoundingClientRect(),{name:pe,path:ve}=Va($),Ce={id:`demo-${Date.now()}-${D}`,x:(Q.left+Q.width/2)/window.innerWidth*100,y:Q.top+Q.height/2+window.scrollY,comment:M.comment,element:pe,elementPath:ve,timestamp:Date.now(),selectedText:M.selectedText,boundingBox:{x:Q.left,y:Q.top+window.scrollY,width:Q.width,height:Q.height},nearbyText:er($),cssClasses:tr($)};J($e=>[...$e,Ce])},E))}),()=>{S.forEach(clearTimeout)}},[i,ze,o,n]),b.useEffect(()=>{const S=()=>{rt(window.scrollY),Ht(!0),Ni.current&&clearTimeout(Ni.current),Ni.current=Je(()=>{Ht(!1)},150)};return window.addEventListener("scroll",S,{passive:!0}),()=>{window.removeEventListener("scroll",S),Ni.current&&clearTimeout(Ni.current)}},[]),b.useEffect(()=>{ze&&B.length>0?on?nr(Ze,B,on):gy(Ze,B):ze&&B.length===0&&localStorage.removeItem(mu(Ze))},[B,Ze,ze,on]),b.useEffect(()=>{if(ze&&!dn.current){dn.current=!0;const S=mw(Ze);S.length>0&&pt(S)}},[ze,Ze]),b.useEffect(()=>{ze&&dn.current&&!He&&(Ee.length>0?pw(Ze,Ee):gw(Ze))},[Ee,Ze,ze,He]),b.useEffect(()=>{if(ze&&!el.current){el.current=!0;const S=yw(Ze);if(S){const M={...S,sections:S.sections.map(D=>({...D,currentRect:D.currentRect??{...D.originalRect}}))};Zn(M)}}},[ze,Ze]),b.useEffect(()=>{ze&&el.current&&!He&&(Me?xw(Ze,Me):bw(Ze))},[Me,Ze,ze,He]);const cl=b.useRef(!1);b.useEffect(()=>{if(ze&&!cl.current){cl.current=!0;const S=vw(Ze);S&&(io.current={rearrange:S.rearrange,placements:S.placements||[]},S.purpose&&En(S.purpose))}},[ze,Ze]),b.useEffect(()=>{var M,D,E;if(!ze||!cl.current)return;const S=io.current;He?(((M=Me==null?void 0:Me.sections)==null?void 0:M.length)??0)>0||Ee.length>0||ln?v0(Ze,{rearrange:Me,placements:Ee,purpose:ln}):Vc(Ze):(((E=(D=S.rearrange)==null?void 0:D.sections)==null?void 0:E.length)??0)>0||S.placements.length>0||ln?v0(Ze,{rearrange:S.rearrange,placements:S.placements,purpose:ln}):Vc(Ze)},[Me,Ee,ln,He,Ze,ze]),b.useEffect(()=>{Re&&!Me&&Zn({sections:[],originalOrder:[],detectedAt:Date.now()})},[Re,Me]),b.useEffect(()=>{if(!p||!on)return;const S=Wo.current,M=new Set(Ee.map(D=>D.id));for(const D of Ee){if(S.has(D.id))continue;S.set(D.id,"");const E=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Ze;Ga(p,on,{id:D.id,x:D.x/window.innerWidth*100,y:D.y,comment:`Place ${D.type} at (${Math.round(D.x)}, ${Math.round(D.y)}), ${D.width}×${D.height}px${D.text?` — "${D.text}"`:""}`,element:`[design:${D.type}]`,elementPath:"[placement]",timestamp:D.timestamp,url:E,intent:"change",severity:"important",kind:"placement",placement:{componentType:D.type,width:D.width,height:D.height,scrollY:D.scrollY,text:D.text}}).then($=>{S.has(D.id)&&S.set(D.id,$.id)}).catch($=>{console.warn("[Agentation] Failed to sync placement annotation:",$),S.delete(D.id)})}for(const[D,E]of S)M.has(D)||(S.delete(D),E&&ki(p,E).catch(()=>{}))},[Ee,p,on,Ze]),b.useEffect(()=>{if(!(!p||!on))return lo.current&&clearTimeout(lo.current),lo.current=Je(()=>{const S=Ei.current;if(!Me||Me.sections.length===0){for(const[,E]of S)E&&ki(p,E).catch(()=>{});S.clear();return}const M=new Set(Me.sections.map(E=>E.id)),D=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Ze;for(const E of Me.sections){const $=E.originalRect,Q=E.currentRect;if(!(Math.abs($.x-Q.x)>1||Math.abs($.y-Q.y)>1||Math.abs($.width-Q.width)>1||Math.abs($.height-Q.height)>1)){const Ce=S.get(E.id);Ce&&(S.delete(E.id),ki(p,Ce).catch(()=>{}));continue}const ve=S.get(E.id);ve?S0(p,ve,{comment:`Move ${E.label} section (${E.tagName}) — from (${Math.round($.x)},${Math.round($.y)}) ${Math.round($.width)}×${Math.round($.height)} to (${Math.round(Q.x)},${Math.round(Q.y)}) ${Math.round(Q.width)}×${Math.round(Q.height)}`}).catch(Ce=>{console.warn("[Agentation] Failed to update rearrange annotation:",Ce)}):(S.set(E.id,""),Ga(p,on,{id:E.id,x:Q.x/window.innerWidth*100,y:Q.y,comment:`Move ${E.label} section (${E.tagName}) — from (${Math.round($.x)},${Math.round($.y)}) ${Math.round($.width)}×${Math.round($.height)} to (${Math.round(Q.x)},${Math.round(Q.y)}) ${Math.round(Q.width)}×${Math.round(Q.height)}`,element:E.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:D,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:E.selector,label:E.label,tagName:E.tagName,originalRect:$,currentRect:Q}}).then(Ce=>{S.has(E.id)&&S.set(E.id,Ce.id)}).catch(Ce=>{console.warn("[Agentation] Failed to sync rearrange annotation:",Ce),S.delete(E.id)}))}for(const[E,$]of S)M.has(E)||(S.delete(E),$&&ki(p,$).catch(()=>{}))},300),()=>{lo.current&&clearTimeout(lo.current)}},[Me,p,on,Ze]);const po=b.useRef(new Map);b.useLayoutEffect(()=>{const S=(Me==null?void 0:Me.sections)??[],M=new Set;if((Re||jt)&&T)for(const D of S){M.add(D.id);try{const E=document.querySelector(D.selector);if(!E)continue;if(!po.current.has(D.id)){const $={transform:E.style.transform,transformOrigin:E.style.transformOrigin,opacity:E.style.opacity,position:E.style.position,zIndex:E.style.zIndex,display:E.style.display},Q=[];let pe=E.parentElement;for(;pe&&pe!==document.body;){const Ce=getComputedStyle(pe);(Ce.overflow!=="visible"||Ce.overflowX!=="visible"||Ce.overflowY!=="visible")&&(Q.push({el:pe,overflow:pe.style.overflow}),pe.style.overflow="visible"),pe=pe.parentElement}getComputedStyle(E).display==="inline"&&(E.style.display="inline-block"),po.current.set(D.id,{el:E,origStyles:$,ancestors:Q}),E.style.transformOrigin="top left",E.style.zIndex="9999"}}catch{}}for(const[D,E]of po.current)if(!M.has(D)){const{el:$,origStyles:Q,ancestors:pe}=E;$.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",$.style.transform=Q.transform,$.style.transformOrigin=Q.transformOrigin,$.style.opacity=Q.opacity,$.style.position=Q.position,$.style.zIndex=Q.zIndex,po.current.delete(D),Je(()=>{$.style.transition="",$.style.display=Q.display;for(const ve of pe)ve.el.style.overflow=ve.overflow},450)}},[Me,Re,jt,T]),b.useEffect(()=>()=>{for(const[,S]of po.current){const{el:M,origStyles:D,ancestors:E}=S;M.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",M.style.transform=D.transform,M.style.transformOrigin=D.transformOrigin,M.style.opacity=D.opacity,M.style.position=D.position,M.style.zIndex=D.zIndex,Je(()=>{M.style.transition="",M.style.display=D.display;for(const $ of E)$.el.style.overflow=$.overflow},450)}po.current.clear()},[]);const ha=b.useCallback(()=>{Wt(!0),bt(!1),dt(null),clearTimeout(ia.current),ia.current=Je(()=>{Wt(!1)},300)},[]),Mr=b.useCallback(()=>{Re&&(Wt(!0),bt(!1),dt(null),clearTimeout(ia.current),ia.current=Je(()=>{Wt(!1)},300)),O(!1)},[Re]),Tr=b.useCallback(()=>{X||(x2(),oe(!0))},[X]),Li=b.useCallback(()=>{X&&(l0(),oe(!1))},[X]),ul=b.useCallback(()=>{X?Li():Tr()},[X,Tr,Li]),Er=b.useCallback(()=>{if(_n.length===0)return;const S=_n[0],M=S.element,D=_n.length>1,E=_n.map($=>$.element.getBoundingClientRect());if(D){const $={left:Math.min(...E.map(we=>we.left)),top:Math.min(...E.map(we=>we.top)),right:Math.max(...E.map(we=>we.right)),bottom:Math.max(...E.map(we=>we.bottom))},Q=_n.slice(0,5).map(we=>we.name).join(", "),pe=_n.length>5?` +${_n.length-5} more`:"",ve=E.map(we=>({x:we.left,y:we.top+window.scrollY,width:we.width,height:we.height})),$e=_n[_n.length-1].element,Ye=E[E.length-1],ot=Ye.left+Ye.width/2,yt=Ye.top+Ye.height/2,Qe=Uf($e);be({x:ot/window.innerWidth*100,y:Qe?yt:yt+window.scrollY,clientY:yt,element:`${_n.length} elements: ${Q}${pe}`,elementPath:"multi-select",boundingBox:{x:$.left,y:$.top+window.scrollY,width:$.right-$.left,height:$.bottom-$.top},isMultiSelect:!0,isFixed:Qe,elementBoundingBoxes:ve,multiSelectElements:_n.map(we=>we.element),targetElement:$e,fullPath:Wc(M),accessibility:Fc(M),computedStyles:Gc(M),computedStylesObj:Xc(M),nearbyElements:Yc(M),cssClasses:tr(M),nearbyText:er(M),sourceFile:Jc(M)})}else{const $=E[0],Q=Uf(M);be({x:$.left/window.innerWidth*100,y:Q?$.top:$.top+window.scrollY,clientY:$.top,element:S.name,elementPath:S.path,boundingBox:{x:$.left,y:Q?$.top:$.top+window.scrollY,width:$.width,height:$.height},isFixed:Q,fullPath:Wc(M),accessibility:Fc(M),computedStyles:Gc(M),computedStylesObj:Xc(M),nearbyElements:Yc(M),cssClasses:tr(M),nearbyText:er(M),reactComponents:S.reactComponents,sourceFile:Jc(M)})}co([]),Se(null)},[_n]);b.useEffect(()=>{T||(be(null),De(null),We(null),qe([]),Se(null),Le(!1),co([]),Gn.current={cmd:!1,shift:!1},X&&Li())},[T,X,Li]),b.useEffect(()=>()=>{l0()},[]),b.useEffect(()=>{if(!T)return;const S=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),M=":not([data-agentation-root]):not([data-agentation-root] *)",D=document.createElement("style");return D.id="feedback-cursor-styles",D.textContent=`
      body ${M} {
        cursor: crosshair !important;
      }

      body :is(${S})${M} {
        cursor: text !important;
      }
    `,document.head.appendChild(D),()=>{const E=document.getElementById("feedback-cursor-styles");E&&E.remove()}},[T]),b.useEffect(()=>{if(aa!==null&&T)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[aa,T]),b.useEffect(()=>{if(!T||W||Jn||Re)return;const S=M=>{const D=M.composedPath()[0]||M.target;if(us(D,"[data-feedback-toolbar]")){Se(null);return}const E=Qi(M.clientX,M.clientY);if(!E||us(E,"[data-feedback-toolbar]")){Se(null);return}const{name:$,elementName:Q,path:pe,reactComponents:ve}=Pf(E,Vs),Ce=E.getBoundingClientRect();Se({element:$,elementName:Q,elementPath:pe,rect:Ce,reactComponents:ve}),ce({x:M.clientX,y:M.clientY})};return document.addEventListener("mousemove",S),()=>document.removeEventListener("mousemove",S)},[T,W,Jn,Re,Vs,rn]);const _a=b.useCallback(S=>{var M;if(De(S),Ge(null),kt(null),Ot([]),(M=S.elementBoundingBoxes)!=null&&M.length){const D=[];for(const E of S.elementBoundingBoxes){const $=E.x+E.width/2,Q=E.y+E.height/2-window.scrollY,pe=Qi($,Q);pe&&D.push(pe)}qe(D),We(null)}else if(S.boundingBox){const D=S.boundingBox,E=D.x+D.width/2,$=S.isFixed?D.y+D.height/2:D.y+D.height/2-window.scrollY,Q=Qi(E,$);if(Q){const pe=Q.getBoundingClientRect(),ve=pe.width/D.width,Ce=pe.height/D.height;ve<.5||Ce<.5?We(null):We(Q)}else We(null);qe([])}else We(null),qe([])},[]);b.useEffect(()=>{if(!T||Jn||Re)return;const S=M=>{var qt,mn;if(ua.current){ua.current=!1;return}const D=M.composedPath()[0]||M.target;if(us(D,"[data-feedback-toolbar]")||us(D,"[data-annotation-popup]")||us(D,"[data-annotation-marker]"))return;if(M.metaKey&&M.shiftKey&&!W&&!V){M.preventDefault(),M.stopPropagation();const Rt=Qi(M.clientX,M.clientY);if(!Rt)return;const fn=Rt.getBoundingClientRect(),{name:tt,path:ft,reactComponents:an}=Pf(Rt,Vs),Qt=_n.findIndex(kn=>kn.element===Rt);Qt>=0?co(kn=>kn.filter((Fn,xn)=>xn!==Qt)):co(kn=>[...kn,{element:Rt,rect:fn,name:tt,path:ft,reactComponents:an??void 0}]);return}const E=us(D,"button, a, input, select, textarea, [role='button'], [onclick]");if(wt.blockInteractions&&E&&(M.preventDefault(),M.stopPropagation()),W){if(E&&!wt.blockInteractions)return;M.preventDefault(),(qt=kr.current)==null||qt.shake();return}if(V){if(E&&!wt.blockInteractions)return;M.preventDefault(),(mn=Cr.current)==null||mn.shake();return}M.preventDefault();const $=Qi(M.clientX,M.clientY);if(!$)return;const{name:Q,path:pe,reactComponents:ve}=Pf($,Vs),Ce=$.getBoundingClientRect(),$e=M.clientX/window.innerWidth*100,Ye=Uf($),ot=Ye?M.clientY:M.clientY+window.scrollY,yt=window.getSelection();let Qe;yt&&yt.toString().trim().length>0&&(Qe=yt.toString().trim().slice(0,500));const we=Xc($),tn=Gc($);be({x:$e,y:ot,clientY:M.clientY,element:Q,elementPath:pe,selectedText:Qe,boundingBox:{x:Ce.left,y:Ye?Ce.top:Ce.top+window.scrollY,width:Ce.width,height:Ce.height},nearbyText:er($),cssClasses:tr($),isFixed:Ye,fullPath:Wc($),accessibility:Fc($),computedStyles:tn,computedStylesObj:we,nearbyElements:Yc($),reactComponents:ve??void 0,sourceFile:Jc($),targetElement:$}),Se(null)};return document.addEventListener("click",S,!0),()=>document.removeEventListener("click",S,!0)},[T,Jn,Re,W,V,wt.blockInteractions,Vs,_n]),b.useEffect(()=>{if(!T)return;const S=E=>{E.key==="Meta"&&(Gn.current.cmd=!0),E.key==="Shift"&&(Gn.current.shift=!0)},M=E=>{const $=Gn.current.cmd&&Gn.current.shift;E.key==="Meta"&&(Gn.current.cmd=!1),E.key==="Shift"&&(Gn.current.shift=!1);const Q=Gn.current.cmd&&Gn.current.shift;$&&!Q&&_n.length>0&&Er()},D=()=>{Gn.current={cmd:!1,shift:!1},co([])};return document.addEventListener("keydown",S),document.addEventListener("keyup",M),window.addEventListener("blur",D),()=>{document.removeEventListener("keydown",S),document.removeEventListener("keyup",M),window.removeEventListener("blur",D)}},[T,_n,Er]),b.useEffect(()=>{if(!T||W||Jn||Re)return;const S=M=>{const D=M.composedPath()[0]||M.target;us(D,"[data-feedback-toolbar]")||us(D,"[data-annotation-marker]")||us(D,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(D.tagName)||D.isContentEditable||(M.preventDefault(),_o.current={x:M.clientX,y:M.clientY})};return document.addEventListener("mousedown",S),()=>document.removeEventListener("mousedown",S)},[T,W,Jn,Re]),b.useEffect(()=>{if(!T||W)return;const S=M=>{if(!_o.current)return;const D=M.clientX-_o.current.x,E=M.clientY-_o.current.y,$=D*D+E*E,Q=ll*ll;if(!Zs&&$>=Q&&(es.current=_o.current,ca(!0),M.preventDefault()),(Zs||$>=Q)&&es.current){if(mo.current){const tt=Math.min(es.current.x,M.clientX),ft=Math.min(es.current.y,M.clientY),an=Math.abs(M.clientX-es.current.x),Qt=Math.abs(M.clientY-es.current.y);mo.current.style.transform=`translate(${tt}px, ${ft}px)`,mo.current.style.width=`${an}px`,mo.current.style.height=`${Qt}px`}const pe=Date.now();if(pe-Sr.current<Su)return;Sr.current=pe;const ve=es.current.x,Ce=es.current.y,$e=Math.min(ve,M.clientX),Ye=Math.min(Ce,M.clientY),ot=Math.max(ve,M.clientX),yt=Math.max(Ce,M.clientY),Qe=($e+ot)/2,we=(Ye+yt)/2,tn=new Set,qt=[[$e,Ye],[ot,Ye],[$e,yt],[ot,yt],[Qe,we],[Qe,Ye],[Qe,yt],[$e,we],[ot,we]];for(const[tt,ft]of qt){const an=document.elementsFromPoint(tt,ft);for(const Qt of an)Qt instanceof HTMLElement&&tn.add(Qt)}const mn=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const tt of mn)if(tt instanceof HTMLElement){const ft=tt.getBoundingClientRect(),an=ft.left+ft.width/2,Qt=ft.top+ft.height/2,kn=an>=$e&&an<=ot&&Qt>=Ye&&Qt<=yt,Fn=Math.min(ft.right,ot)-Math.max(ft.left,$e),xn=Math.min(ft.bottom,yt)-Math.max(ft.top,Ye),Cs=Fn>0&&xn>0?Fn*xn:0,_s=ft.width*ft.height,Bs=_s>0?Cs/_s:0;(kn||Bs>.5)&&tn.add(tt)}const Rt=[],fn=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const tt of tn){if(us(tt,"[data-feedback-toolbar]")||us(tt,"[data-annotation-marker]"))continue;const ft=tt.getBoundingClientRect();if(!(ft.width>window.innerWidth*.8&&ft.height>window.innerHeight*.5)&&!(ft.width<10||ft.height<10)&&ft.left<ot&&ft.right>$e&&ft.top<yt&&ft.bottom>Ye){const an=tt.tagName;let Qt=fn.has(an);if(!Qt&&(an==="DIV"||an==="SPAN")){const kn=tt.textContent&&tt.textContent.trim().length>0,Fn=tt.onclick!==null||tt.getAttribute("role")==="button"||tt.getAttribute("role")==="link"||tt.classList.contains("clickable")||tt.hasAttribute("data-clickable");(kn||Fn)&&!tt.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(Qt=!0)}if(Qt){let kn=!1;for(const Fn of Rt)if(Fn.left<=ft.left&&Fn.right>=ft.right&&Fn.top<=ft.top&&Fn.bottom>=ft.bottom){kn=!0;break}kn||Rt.push(ft)}}}if(Zo.current){const tt=Zo.current;for(;tt.children.length>Rt.length;)tt.removeChild(tt.lastChild);Rt.forEach((ft,an)=>{let Qt=tt.children[an];Qt||(Qt=document.createElement("div"),Qt.className=de.selectedElementHighlight,tt.appendChild(Qt)),Qt.style.transform=`translate(${ft.left}px, ${ft.top}px)`,Qt.style.width=`${ft.width}px`,Qt.style.height=`${ft.height}px`})}}};return document.addEventListener("mousemove",S,{passive:!0}),()=>document.removeEventListener("mousemove",S)},[T,W,Zs,ll]),b.useEffect(()=>{if(!T)return;const S=M=>{const D=Zs,E=es.current;if(Zs&&E){ua.current=!0;const $=Math.min(E.x,M.clientX),Q=Math.min(E.y,M.clientY),pe=Math.max(E.x,M.clientX),ve=Math.max(E.y,M.clientY),Ce=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(Qe=>{if(!(Qe instanceof HTMLElement)||us(Qe,"[data-feedback-toolbar]")||us(Qe,"[data-annotation-marker]"))return;const we=Qe.getBoundingClientRect();we.width>window.innerWidth*.8&&we.height>window.innerHeight*.5||we.width<10||we.height<10||we.left<pe&&we.right>$&&we.top<ve&&we.bottom>Q&&Ce.push({element:Qe,rect:we})});const Ye=Ce.filter(({element:Qe})=>!Ce.some(({element:we})=>we!==Qe&&Qe.contains(we))),ot=M.clientX/window.innerWidth*100,yt=M.clientY+window.scrollY;if(Ye.length>0){const Qe=Ye.reduce((fn,{rect:tt})=>({left:Math.min(fn.left,tt.left),top:Math.min(fn.top,tt.top),right:Math.max(fn.right,tt.right),bottom:Math.max(fn.bottom,tt.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),we=Ye.slice(0,5).map(({element:fn})=>Va(fn).name).join(", "),tn=Ye.length>5?` +${Ye.length-5} more`:"",qt=Ye[0].element,mn=Xc(qt),Rt=Gc(qt);be({x:ot,y:yt,clientY:M.clientY,element:`${Ye.length} elements: ${we}${tn}`,elementPath:"multi-select",boundingBox:{x:Qe.left,y:Qe.top+window.scrollY,width:Qe.right-Qe.left,height:Qe.bottom-Qe.top},isMultiSelect:!0,fullPath:Wc(qt),accessibility:Fc(qt),computedStyles:Rt,computedStylesObj:mn,nearbyElements:Yc(qt),cssClasses:tr(qt),nearbyText:er(qt),sourceFile:Jc(qt)})}else{const Qe=Math.abs(pe-$),we=Math.abs(ve-Q);Qe>20&&we>20&&be({x:ot,y:yt,clientY:M.clientY,element:"Area selection",elementPath:`region at (${Math.round($)}, ${Math.round(Q)})`,boundingBox:{x:$,y:Q+window.scrollY,width:Qe,height:we},isMultiSelect:!0})}Se(null)}else D&&(ua.current=!0);_o.current=null,es.current=null,ca(!1),Zo.current&&(Zo.current.innerHTML="")};return document.addEventListener("mouseup",S),()=>document.removeEventListener("mouseup",S)},[T,Zs]);const zs=b.useCallback(async(S,M,D)=>{const E=wt.webhookUrl||j;if(!E||!wt.webhooksEnabled&&!D)return!1;try{return(await fetch(E,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:S,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...M})})).ok}catch($){return console.warn("[Agentation] Webhook failed:",$),!1}},[j,wt.webhookUrl,wt.webhooksEnabled]),Cu=b.useCallback(S=>{var D;if(!W)return;const M={id:Date.now().toString(),x:W.x,y:W.y,comment:S,element:W.element,elementPath:W.elementPath,timestamp:Date.now(),selectedText:W.selectedText,boundingBox:W.boundingBox,nearbyText:W.nearbyText,cssClasses:W.cssClasses,isMultiSelect:W.isMultiSelect,isFixed:W.isFixed,fullPath:W.fullPath,accessibility:W.accessibility,computedStyles:W.computedStyles,nearbyElements:W.nearbyElements,reactComponents:W.reactComponents,sourceFile:W.sourceFile,elementBoundingBoxes:W.elementBoundingBoxes,...p&&on?{sessionId:on,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};J(E=>[...E,M]),da.current=M.id,Je(()=>{da.current=null},300),Je(()=>{ho(E=>new Set(E).add(M.id))},250),l==null||l(M),zs("annotation.add",{annotation:M}),Ls(!0),Je(()=>{be(null),Ls(!1)},150),(D=window.getSelection())==null||D.removeAllRanges(),p&&on&&Ga(p,on,M).then(E=>{E.id!==M.id&&(J($=>$.map(Q=>Q.id===M.id?{...Q,id:E.id}:Q)),ho($=>{const Q=new Set($);return Q.delete(M.id),Q.add(E.id),Q}))}).catch(E=>{console.warn("[Agentation] Failed to sync annotation:",E)})},[W,l,zs,p,on]),dl=b.useCallback(()=>{Ls(!0),Je(()=>{be(null),Ls(!1)},150)},[]),fl=b.useCallback(S=>{const M=B.findIndex(E=>E.id===S),D=B[M];(V==null?void 0:V.id)===S&&(Os(!0),Je(()=>{De(null),We(null),qe([]),Os(!1)},150)),In(S),Di(E=>new Set(E).add(S)),D&&(c==null||c(D),zs("annotation.delete",{annotation:D})),p&&ki(p,S).catch(E=>{console.warn("[Agentation] Failed to delete annotation from server:",E)}),Je(()=>{J(E=>E.filter($=>$.id!==S)),Di(E=>{const $=new Set(E);return $.delete(S),$}),In(null),M<B.length-1&&(Un(M),Je(()=>Un(null),200))},150)},[B,V,c,zs,p]),ma=b.useCallback(S=>{var M;if(!S){Ge(null),kt(null),Ot([]);return}if(Ge(S.id),(M=S.elementBoundingBoxes)!=null&&M.length){const D=[];for(const E of S.elementBoundingBoxes){const $=E.x+E.width/2,Q=E.y+E.height/2-window.scrollY,ve=document.elementsFromPoint($,Q).find(Ce=>!Ce.closest("[data-annotation-marker]")&&!Ce.closest("[data-agentation-root]"));ve&&D.push(ve)}Ot(D),kt(null)}else if(S.boundingBox){const D=S.boundingBox,E=D.x+D.width/2,$=S.isFixed?D.y+D.height/2:D.y+D.height/2-window.scrollY,Q=Qi(E,$);if(Q){const pe=Q.getBoundingClientRect(),ve=pe.width/D.width,Ce=pe.height/D.height;ve<.5||Ce<.5?kt(null):kt(Q)}else kt(null);Ot([])}else kt(null),Ot([])},[]),ju=b.useCallback(S=>{if(!V)return;const M={...V,comment:S};J(D=>D.map(E=>E.id===V.id?M:E)),u==null||u(M),zs("annotation.update",{annotation:M}),p&&S0(p,V.id,{comment:S}).catch(D=>{console.warn("[Agentation] Failed to update annotation on server:",D)}),Os(!0),Je(()=>{De(null),We(null),qe([]),Os(!1)},150)},[V,u,zs,p]),hl=b.useCallback(()=>{Os(!0),Je(()=>{De(null),We(null),qe([]),Os(!1)},150)},[]),ks=b.useCallback(()=>{const S=B.length,M=Ee.length>0||!!Me;if(S===0&&rn.length===0&&!M)return;if(_==null||_(B),zs("annotations.clear",{annotations:B}),p){Promise.all(B.map($=>ki(p,$.id).catch(Q=>{console.warn("[Agentation] Failed to delete annotation from server:",Q)})));for(const[,$]of Wo.current)$&&ki(p,$).catch(()=>{});Wo.current.clear();for(const[,$]of Ei.current)$&&ki(p,$).catch(()=>{});Ei.current.clear()}ct(!0),Xe(!0),gr([]);const D=qo.current;if(D){const $=D.getContext("2d");$&&$.clearRect(0,0,D.width,D.height)}(Ee.length>0||Me)&&(ao($=>$+1),nl($=>$+1),Je(()=>{pt([]),Zn(null)},200)),He&&Nt(!1),ln&&En(""),io.current={rearrange:null,placements:[]},Vc(Ze);const E=S*30+200;Je(()=>{J([]),ho(new Set),localStorage.removeItem(mu(Ze)),ct(!1)},E),Je(()=>Xe(!1),1500)},[Ze,B,rn,Ee,Me,He,ln,_,zs,p]),_l=b.useCallback(async()=>{const S=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Ze,M=Re&&He;let D;if(M){if(Ee.length===0&&!Me&&!ln)return;D=""}else{if(D=j0(B,S,wt.outputDetail),!D&&rn.length===0&&Ee.length===0&&!Me)return;D||(D=`## Page Feedback: ${S}
`)}if(!M&&rn.length>0){const E=new Set;for(const ve of B)ve.drawingIndex!=null&&E.add(ve.drawingIndex);const $=qo.current;$&&($.style.visibility="hidden");const Q=[],pe=window.scrollY;for(let ve=0;ve<rn.length;ve++){if(E.has(ve))continue;const Ce=rn[ve];if(Ce.points.length<2)continue;const $e=Ce.fixed?Ce.points:Ce.points.map(pn=>({x:pn.x,y:pn.y-pe}));let Ye=1/0,ot=1/0,yt=-1/0,Qe=-1/0;for(const pn of $e)Ye=Math.min(Ye,pn.x),ot=Math.min(ot,pn.y),yt=Math.max(yt,pn.x),Qe=Math.max(Qe,pn.y);const we=yt-Ye,tn=Qe-ot,qt=Math.hypot(we,tn),mn=$e[0],Rt=$e[$e.length-1],fn=Math.hypot(Rt.x-mn.x,Rt.y-mn.y);let tt;const ft=fn<qt*.35,an=we/Math.max(tn,1);if(ft&&qt>20){const pn=Math.max(we,tn)*.15;let ts=0;for(const go of $e){const Or=go.x-Ye<pn,zr=yt-go.x<pn,Mu=go.y-ot<pn,Tu=Qe-go.y<pn;(Or||zr)&&(Mu||Tu)&&ts++}tt=ts>$e.length*.15?"box":"circle"}else an>3&&tn<40?tt="underline":fn>qt*.5?tt="arrow":tt="drawing";const Qt=Math.min(10,$e.length),kn=Math.max(1,Math.floor($e.length/Qt)),Fn=new Set,xn=[],Cs=[mn];for(let pn=kn;pn<$e.length-1;pn+=kn)Cs.push($e[pn]);Cs.push(Rt);for(const pn of Cs){const ts=Qi(pn.x,pn.y);if(!ts||Fn.has(ts)||us(ts,"[data-feedback-toolbar]"))continue;Fn.add(ts);const{name:go}=Va(ts);xn.includes(go)||xn.push(go)}const _s=`${Math.round(Ye)},${Math.round(ot)} → ${Math.round(yt)},${Math.round(Qe)}`;let Bs;(tt==="circle"||tt==="box")&&xn.length>0?Bs=`${tt==="box"?"Boxed":"Circled"} **${xn[0]}**${xn.length>1?` (and ${xn.slice(1).join(", ")})`:""} (region: ${_s})`:tt==="underline"&&xn.length>0?Bs=`Underlined **${xn[0]}** (${_s})`:tt==="arrow"&&xn.length>=2?Bs=`Arrow from **${xn[0]}** to **${xn[xn.length-1]}** (${Math.round(mn.x)},${Math.round(mn.y)} → ${Math.round(Rt.x)},${Math.round(Rt.y)})`:xn.length>0?Bs=`${tt==="arrow"?"Arrow":"Drawing"} near **${xn.join("**, **")}** (region: ${_s})`:Bs=`Drawing at ${_s}`,Q.push(Bs)}$&&($.style.visibility=""),Q.length>0&&(D+=`
**Drawings:**
`,Q.forEach((ve,Ce)=>{D+=`${Ce+1}. ${ve}
`}))}if((Ee.length>0||M&&ln)&&(D+=`
`+x0(Ee,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:He,wireframePurpose:ln||void 0},wt.outputDetail)),Me){const E=b0(Me,wt.outputDetail,{width:window.innerWidth,height:window.innerHeight});E&&(D+=`
`+E)}if(m)try{await navigator.clipboard.writeText(D)}catch{}g==null||g(D),A(!0),Je(()=>A(!1),2e3),wt.autoClearAfterCopy&&Je(()=>ks(),500)},[B,rn,Ee,Me,He,Re,vs,ln,Ze,wt.outputDetail,Vs,wt.autoClearAfterCopy,ks,m,g]),pa=b.useCallback(async()=>{const S=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Ze;let M=j0(B,S,wt.outputDetail);if(!M&&Ee.length===0&&!Me)return;if(M||(M=`## Page Feedback: ${S}
`),Ee.length>0&&(M+=`
`+x0(Ee,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:He,wireframePurpose:ln||void 0},wt.outputDetail)),Me){const E=b0(Me,wt.outputDetail,{width:window.innerWidth,height:window.innerHeight});E&&(M+=`
`+E)}h&&h(M,B),_e("sending"),await new Promise(E=>Je(E,150));const D=await zs("submit",{output:M,annotations:B},!0);_e(D?"sent":"failed"),Je(()=>_e("idle"),2500),D&&wt.autoClearAfterCopy&&Je(()=>ks(),500)},[h,zs,B,Ee,Me,He,vs,Ze,wt.outputDetail,Vs,wt.autoClearAfterCopy,ks]);b.useEffect(()=>{if(!rs)return;const S=10,M=E=>{const $=E.clientX-rs.x,Q=E.clientY-rs.y,pe=Math.sqrt($*$+Q*Q);if(!Ks&&pe>S&&Vo(!0),Ks||pe>S){let ve=rs.toolbarX+$,Ce=rs.toolbarY+Q;const $e=20,Ye=337,ot=44,Qe=Ye-(T?ls==="connected"?297:257:44),we=$e-Qe,tn=window.innerWidth-$e-Ye;ve=Math.max(we,Math.min(tn,ve)),Ce=Math.max($e,Math.min(window.innerHeight-ot-$e,Ce)),Ss({x:ve,y:Ce})}},D=()=>{Ks&&(Ko.current=!0),Vo(!1),la(null)};return document.addEventListener("mousemove",M),document.addEventListener("mouseup",D),()=>{document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",D)}},[rs,Ks,T,ls]);const Rr=b.useCallback(S=>{if(S.target.closest("button")||S.target.closest("[data-agentation-settings-panel]"))return;const M=S.currentTarget.parentElement;if(!M)return;const D=M.getBoundingClientRect(),E=(zt==null?void 0:zt.x)??D.left,$=(zt==null?void 0:zt.y)??D.top;la({x:S.clientX,y:S.clientY,toolbarX:E,toolbarY:$})},[zt]);if(b.useEffect(()=>{if(!zt)return;const S=()=>{let $=zt.x,Q=zt.y;const Ce=20-(337-(T?ls==="connected"?297:257:44)),$e=window.innerWidth-20-337;$=Math.max(Ce,Math.min($e,$)),Q=Math.max(20,Math.min(window.innerHeight-44-20,Q)),($!==zt.x||Q!==zt.y)&&Ss({x:$,y:Q})};return S(),window.addEventListener("resize",S),()=>window.removeEventListener("resize",S)},[zt,T,ls]),b.useEffect(()=>{const S=M=>{const D=M.target,E=D.tagName==="INPUT"||D.tagName==="TEXTAREA"||D.isContentEditable;if(M.key==="Escape"){if(Re){gt?dt(null):ha();return}if(Jn){ws(!1);return}if(_n.length>0){co([]);return}W||T&&($n(),O(!1))}if((M.metaKey||M.ctrlKey)&&M.shiftKey&&(M.key==="f"||M.key==="F")){M.preventDefault(),$n(),T?Mr():O(!0);return}if(!(E||M.metaKey||M.ctrlKey)&&((M.key==="p"||M.key==="P")&&(M.preventDefault(),$n(),ul()),(M.key==="l"||M.key==="L")&&(M.preventDefault(),$n(),Jn&&ws(!1),re&&Le(!1),W&&dl(),Re?ha():bt(!0)),(M.key==="h"||M.key==="H")&&B.length>0&&(M.preventDefault(),$n(),z($=>!$)),(M.key==="c"||M.key==="C")&&(B.length>0||Ee.length>0||Me)&&(M.preventDefault(),$n(),_l()),(M.key==="x"||M.key==="X")&&(B.length>0||Ee.length>0||Me)&&(M.preventDefault(),$n(),ks(),Ee.length>0&&pt([]),Me&&Zn(null)),M.key==="s"||M.key==="S")){const $=wo(wt.webhookUrl)||wo(j||"");B.length>0&&$&&Z==="idle"&&(M.preventDefault(),$n(),pa())}};return document.addEventListener("keydown",S),()=>document.removeEventListener("keydown",S)},[T,Jn,Re,gt,Ee,Me,W,B.length,wt.webhookUrl,j,Z,pa,ul,_l,ks,_n]),!ze||ie)return null;const Jo=B.length>0,Co=B.filter(S=>!Ai.has(S.id)&&S.kind!=="placement"&&S.kind!=="rearrange"),Ar=Co.length>0,jo=B.filter(S=>Ai.has(S.id)),Dr=S=>{const Q=S.x/100*window.innerWidth,pe=typeof S.y=="string"?parseFloat(S.y):S.y,ve={};window.innerHeight-pe-22-10<80&&(ve.top="auto",ve.bottom="calc(100% + 10px)");const $e=Q-200/2,Ye=10;if($e<Ye){const ot=Ye-$e;ve.left=`calc(50% + ${ot}px)`}else if($e+200>window.innerWidth-Ye){const ot=$e+200-(window.innerWidth-Ye);ve.left=`calc(50% - ${ot}px)`}return ve};return eg.createPortal(r.jsxs("div",{ref:ye,style:{display:"contents"},"data-agentation-theme":hs?"dark":"light","data-agentation-accent":wt.annotationColorId,"data-agentation-root":"",children:[r.jsx("div",{className:`${de.toolbar}${k?` ${k}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:zt?{left:zt.x,top:zt.y,right:"auto",bottom:"auto"}:void 0,children:r.jsxs("div",{className:`${de.toolbarContainer} ${T?de.expanded:de.collapsed} ${wr?de.entrance:""} ${Y?de.hiding:""} ${!wt.webhooksEnabled&&(wo(wt.webhookUrl)||wo(j||""))?de.serverConnected:""}`,onClick:T?void 0:S=>{if(Ko.current){Ko.current=!1,S.preventDefault();return}O(!0)},onMouseDown:Rr,role:T?void 0:"button",tabIndex:T?-1:0,title:T?void 0:"Start feedback mode",children:[r.jsxs("div",{className:`${de.toggleContent} ${T?de.hidden:de.visible}`,children:[r.jsx(t2,{size:24}),Ar&&r.jsx("span",{className:`${de.badge} ${T?de.fadeOut:""} ${wr?de.entrance:""}`,children:Co.length})]}),r.jsxs("div",{className:`${de.controlsContent} ${T?de.visible:de.hidden} ${zt&&zt.y<100?de.tooltipBelow:""} ${Ct||re?de.tooltipsHidden:""} ${yr?de.tooltipsInSession:""}`,onMouseEnter:Qo,onMouseLeave:wu,children:[r.jsxs("div",{className:`${de.buttonWrapper} ${zt&&zt.x<120?de.buttonWrapperAlignLeft:""}`,children:[r.jsx("button",{className:de.controlButton,onClick:S=>{S.stopPropagation(),$n(),ul()},"data-active":X,children:r.jsx(a2,{size:24,isPaused:X})}),r.jsxs("span",{className:de.buttonTooltip,children:[X?"Resume animations":"Pause animations",r.jsx("span",{className:de.shortcut,children:"P"})]})]}),r.jsxs("div",{className:de.buttonWrapper,children:[r.jsx("button",{className:`${de.controlButton} ${hs?"":de.light}`,onClick:S=>{S.stopPropagation(),$n(),Jn&&ws(!1),re&&Le(!1),W&&dl(),Re?ha():bt(!0)},"data-active":Re,style:Re&&He?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:r.jsx(m2,{size:21})}),r.jsxs("span",{className:de.buttonTooltip,children:[Re?"Exit layout mode":"Layout mode",r.jsx("span",{className:de.shortcut,children:"L"})]})]}),r.jsxs("div",{className:de.buttonWrapper,children:[r.jsx("button",{className:de.controlButton,onClick:S=>{S.stopPropagation(),$n(),z(!F)},disabled:!Jo||Re,children:r.jsx(i2,{size:24,isOpen:F})}),r.jsxs("span",{className:de.buttonTooltip,children:[F?"Hide markers":"Show markers",r.jsx("span",{className:de.shortcut,children:"H"})]})]}),r.jsxs("div",{className:de.buttonWrapper,children:[r.jsx("button",{className:`${de.controlButton} ${Ae?de.statusShowing:""}`,onClick:S=>{S.stopPropagation(),$n(),_l()},disabled:Re&&He?Ee.length===0&&!((Nr=Me==null?void 0:Me.sections)!=null&&Nr.length):!Jo&&rn.length===0&&Ee.length===0&&!((Lr=Me==null?void 0:Me.sections)!=null&&Lr.length),"data-active":Ae,children:r.jsx(s2,{size:24,copied:Ae,tint:Re&&He&&(Ee.length>0||(ml=Me==null?void 0:Me.sections)!=null&&ml.length)?"#f97316":void 0})}),r.jsxs("span",{className:de.buttonTooltip,children:[Re&&He?"Copy layout":"Copy feedback",r.jsx("span",{className:de.shortcut,children:"C"})]})]}),r.jsxs("div",{className:`${de.buttonWrapper} ${de.sendButtonWrapper} ${T&&!wt.webhooksEnabled&&(wo(wt.webhookUrl)||wo(j||""))?de.sendButtonVisible:""}`,children:[r.jsxs("button",{className:`${de.controlButton} ${Z==="sent"||Z==="failed"?de.statusShowing:""}`,onClick:S=>{S.stopPropagation(),$n(),pa()},disabled:!Jo||!wo(wt.webhookUrl)&&!wo(j||"")||Z==="sending","data-no-hover":Z==="sent"||Z==="failed",tabIndex:wo(wt.webhookUrl)||wo(j||"")?0:-1,children:[r.jsx(o2,{size:24,state:Z}),Jo&&Z==="idle"&&r.jsx("span",{className:de.buttonBadge,children:B.length})]}),r.jsxs("span",{className:de.buttonTooltip,children:["Send Annotations",r.jsx("span",{className:de.shortcut,children:"S"})]})]}),r.jsxs("div",{className:de.buttonWrapper,children:[r.jsx("button",{className:de.controlButton,onClick:S=>{S.stopPropagation(),$n(),ks()},disabled:!Jo&&rn.length===0&&Ee.length===0&&!((pl=Me==null?void 0:Me.sections)!=null&&pl.length),"data-danger":!0,children:r.jsx(r2,{size:24})}),r.jsxs("span",{className:de.buttonTooltip,children:["Clear all",r.jsx("span",{className:de.shortcut,children:"X"})]})]}),r.jsxs("div",{className:de.buttonWrapper,children:[r.jsx("button",{className:de.controlButton,onClick:S=>{S.stopPropagation(),$n(),Re&&ha(),Le(!re)},children:r.jsx(l2,{size:24})}),p&&ls!=="disconnected"&&r.jsx("span",{className:`${de.mcpIndicator} ${de[ls]} ${re?de.hidden:""}`,title:ls==="connected"?"MCP Connected":"MCP Connecting..."}),r.jsx("span",{className:de.buttonTooltip,children:"Settings"})]}),r.jsx("div",{className:de.divider}),r.jsxs("div",{className:`${de.buttonWrapper} ${zt&&typeof window<"u"&&zt.x>window.innerWidth-120?de.buttonWrapperAlignRight:""}`,children:[r.jsx("button",{className:de.controlButton,onClick:S=>{S.stopPropagation(),$n(),Mr()},children:r.jsx(c2,{size:24})}),r.jsxs("span",{className:de.buttonTooltip,children:["Exit",r.jsx("span",{className:de.shortcut,children:"Esc"})]})]})]}),r.jsx(Xv,{visible:Re&&T,activeType:gt,onSelect:S=>{dt(gt===S?null:S)},isDarkMode:hs,sectionCount:(Me==null?void 0:Me.sections.length)??0,onDetectSections:()=>{const S=tw(),M=(Me==null?void 0:Me.sections)??[],D=new Set(M.map(pe=>pe.selector)),E=S.filter(pe=>!D.has(pe.selector)),$=[...M,...E],Q=[...(Me==null?void 0:Me.originalOrder)??[],...E.map(pe=>pe.id)];Zn({sections:$,originalOrder:Q,detectedAt:Date.now()})},placementCount:Ee.length,onClearPlacements:()=>{ao(S=>S+1),nl(S=>S+1),Je(()=>{Zn({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:He,onBlankCanvasChange:S=>{const M={sections:[],originalOrder:[],detectedAt:Date.now()};S?(tl.current={rearrange:Me,placements:Ee},Zn(io.current.rearrange||M),pt(io.current.placements),dt(null)):(io.current={rearrange:Me,placements:Ee},Zn(tl.current.rearrange||M),pt(tl.current.placements)),Nt(S)},wireframePurpose:ln,onWireframePurposeChange:En,Tooltip:Ki,onDragStart:(S,M)=>{M.preventDefault();const D=Ne[S];let E=null,$=!1;const Q=M.clientX,pe=M.clientY,ve=M.target.closest("[data-feedback-toolbar]"),Ce=(ve==null?void 0:ve.getBoundingClientRect().top)??window.innerHeight,$e=ot=>{const yt=ot.clientX-Q,Qe=ot.clientY-pe;if(!$&&(Math.abs(yt)>4||Math.abs(Qe)>4)&&($=!0,E=document.createElement("div"),E.className=`${ne.dragPreview}${He?` ${ne.dragPreviewWireframe}`:""}`,document.body.appendChild(E)),!E)return;const we=Math.max(0,Ce-ot.clientY),tn=Math.min(1,we/180),qt=1-Math.pow(1-tn,2),mn=28,Rt=20,fn=Math.min(140,D.width*.18),tt=Math.min(90,D.height*.18),ft=mn+(fn-mn)*qt,an=Rt+(tt-Rt)*qt;E.style.width=`${ft}px`,E.style.height=`${an}px`,E.style.left=`${ot.clientX-ft/2}px`,E.style.top=`${ot.clientY-an/2}px`,E.style.opacity=`${.5+.5*qt}`,E.textContent=qt>.25?S:""},Ye=ot=>{if(window.removeEventListener("mousemove",$e),window.removeEventListener("mouseup",Ye),E&&document.body.removeChild(E),$){const yt=D.width,Qe=D.height,we=window.scrollY,tn=Math.max(0,ot.clientX-yt/2),qt=Math.max(0,ot.clientY+we-Qe/2),mn={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:S,x:tn,y:qt,width:yt,height:Qe,scrollY:we,timestamp:Date.now()};pt(Rt=>[...Rt,mn]),dt(null),Fo.current=new Set,oa(Rt=>Rt+1)}};window.addEventListener("mousemove",$e),window.addEventListener("mouseup",Ye)}}),r.jsx(u4,{settings:wt,onSettingsChange:S=>br(M=>({...M,...S})),isDarkMode:hs,onToggleTheme:Qs,isDevMode:ol,connectionStatus:ls,endpoint:p,isVisible:ke,toolbarNearBottom:!!zt&&zt.y<230,settingsPage:st,onSettingsPageChange:ut,onHideToolbar:ku})]})}),(Re||jt)&&r.jsx("div",{className:`${ne.blankCanvas} ${yn?ne.visible:""} ${Yt?ne.gridActive:""}`,style:{"--canvas-opacity":Bn},"data-feedback-toolbar":!0}),Re&&He&&yn&&r.jsxs("div",{className:ne.wireframeNotice,"data-feedback-toolbar":!0,children:[r.jsxs("div",{className:ne.wireframeOpacityRow,children:[r.jsx("span",{className:ne.wireframeOpacityLabel,children:"Toggle Opacity"}),r.jsx("input",{type:"range",className:ne.wireframeOpacitySlider,min:0,max:1,step:.01,value:Bn,onChange:S=>oo(Number(S.target.value))})]}),r.jsxs("div",{className:ne.wireframeNoticeTitleRow,children:[r.jsx("span",{className:ne.wireframeNoticeTitle,children:"Wireframe Mode"}),r.jsx("span",{className:ne.wireframeNoticeDivider}),r.jsx("button",{className:ne.wireframeStartOver,onClick:()=>{ao(S=>S+1),Zn({sections:[],originalOrder:[],detectedAt:Date.now()}),io.current={rearrange:null,placements:[]},En(""),Vc(Ze)},children:"Start Over"})]}),"Drag components onto the canvas.",r.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(Re||jt)&&r.jsx(Pv,{placements:Ee,onChange:pt,activeComponent:jt?null:gt,onActiveComponentChange:dt,isDarkMode:hs,exiting:jt,onInteractionChange:Sn,passthrough:!gt,extraSnapRects:Me==null?void 0:Me.sections.map(S=>S.currentRect),deselectSignal:Mi,clearSignal:Ti,wireframe:He,onSelectionChange:(S,M)=>{Fo.current=S,M||(Ns.current=new Set,Go(D=>D+1))},onDragMove:(S,M)=>{const D=Ns.current;if(!(!D.size||!Me)){if(!Yn.current){Yn.current=new Map;for(const E of Me.sections)D.has(E.id)&&Yn.current.set(E.id,{x:E.currentRect.x,y:E.currentRect.y})}for(const E of Me.sections){if(!D.has(E.id)||!Yn.current.get(E.id))continue;const Q=document.querySelector(`[data-rearrange-section="${E.id}"]`);Q&&(Q.style.transform=`translate(${S}px, ${M}px)`)}}},onDragEnd:(S,M,D)=>{const E=Ns.current,$=Yn.current;if(Yn.current=null,!(!E.size||!Me||!$)){for(const Q of E){const pe=document.querySelector(`[data-rearrange-section="${Q}"]`);pe&&(pe.style.transform="")}D&&Zn(Q=>Q&&{...Q,sections:Q.sections.map(pe=>{const ve=$.get(pe.id);return ve?{...pe,currentRect:{...pe.currentRect,x:Math.max(0,ve.x+S),y:Math.max(0,ve.y+M)}}:pe})})}}}),(Re||jt)&&Me&&r.jsx(ow,{rearrangeState:Me,onChange:Zn,isDarkMode:hs,exiting:jt,blankCanvas:He,extraSnapRects:Ee.map(S=>({x:S.x,y:S.y,width:S.width,height:S.height})),clearSignal:Rn,deselectSignal:Xo,onSelectionChange:(S,M)=>{Ns.current=S,M||(Fo.current=new Set,oa(D=>D+1))},onDragMove:(S,M)=>{const D=Fo.current;if(D.size){if(!Yn.current){Yn.current=new Map;for(const E of Ee)D.has(E.id)&&Yn.current.set(E.id,{x:E.x,y:E.y})}for(const E of D){const $=document.querySelector(`[data-design-placement="${E}"]`);$&&($.style.transform=`translate(${S}px, ${M}px)`)}}},onDragEnd:(S,M,D)=>{const E=Fo.current,$=Yn.current;if(Yn.current=null,!(!E.size||!$)){for(const Q of E){const pe=document.querySelector(`[data-design-placement="${Q}"]`);pe&&(pe.style.transform="")}D&&pt(Q=>Q.map(pe=>{const ve=$.get(pe.id);return ve?{...pe,x:Math.max(0,ve.x+S),y:Math.max(0,ve.y+M)}:pe}))}}}),r.jsx("canvas",{ref:qo,className:`${de.drawCanvas} ${Jn?de.active:""}`,style:{opacity:rl?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),r.jsxs("div",{className:de.markersLayer,"data-feedback-toolbar":!0,children:[xe&&Co.filter(S=>!S.isFixed).map((S,M,D)=>r.jsx(M0,{annotation:S,globalIndex:Co.findIndex(E=>E.id===S.id),layerIndex:M,layerSize:D.length,isExiting:K,isClearing:lt,isAnimated:al.has(S.id),isHovered:!K&&en===S.id,isDeleting:Pt===S.id,isEditingAny:!!V,renumberFrom:is,markerClickBehavior:wt.markerClickBehavior,tooltipStyle:Dr(S),onHoverEnter:E=>!K&&E.id!==da.current&&ma(E),onHoverLeave:()=>ma(null),onClick:E=>wt.markerClickBehavior==="delete"?fl(E.id):_a(E),onContextMenu:_a},S.id)),xe&&!K&&jo.filter(S=>!S.isFixed).map(S=>r.jsx(T0,{annotation:S},S.id))]}),r.jsxs("div",{className:de.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[xe&&Co.filter(S=>S.isFixed).map((S,M,D)=>r.jsx(M0,{annotation:S,globalIndex:Co.findIndex(E=>E.id===S.id),layerIndex:M,layerSize:D.length,isExiting:K,isClearing:lt,isAnimated:al.has(S.id),isHovered:!K&&en===S.id,isDeleting:Pt===S.id,isEditingAny:!!V,renumberFrom:is,markerClickBehavior:wt.markerClickBehavior,tooltipStyle:Dr(S),onHoverEnter:E=>!K&&E.id!==da.current&&ma(E),onHoverLeave:()=>ma(null),onClick:E=>wt.markerClickBehavior==="delete"?fl(E.id):_a(E),onContextMenu:_a},S.id)),xe&&!K&&jo.filter(S=>S.isFixed).map(S=>r.jsx(T0,{annotation:S,fixed:!0},S.id))]}),T&&r.jsxs("div",{className:de.overlay,"data-feedback-toolbar":!0,style:W||V?{zIndex:99999}:void 0,children:[(me==null?void 0:me.rect)&&!W&&!vt&&!Zs&&r.jsx("div",{className:`${de.hoverHighlight} ${de.enter}`,style:{left:me.rect.left,top:me.rect.top,width:me.rect.width,height:me.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),_n.filter(S=>document.contains(S.element)).map((S,M)=>{const D=S.element.getBoundingClientRect(),E=_n.length>1;return r.jsx("div",{className:E?de.multiSelectOutline:de.singleSelectOutline,style:{position:"fixed",left:D.left,top:D.top,width:D.width,height:D.height,...E?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},M)}),en&&!W&&(()=>{var $;const S=B.find(Q=>Q.id===en);if(!(S!=null&&S.boundingBox))return null;if(($=S.elementBoundingBoxes)!=null&&$.length)return _t.length>0?_t.filter(Q=>document.contains(Q)).map((Q,pe)=>{const ve=Q.getBoundingClientRect();return r.jsx("div",{className:`${de.multiSelectOutline} ${de.enter}`,style:{left:ve.left,top:ve.top,width:ve.width,height:ve.height}},`hover-outline-live-${pe}`)}):S.elementBoundingBoxes.map((Q,pe)=>r.jsx("div",{className:`${de.multiSelectOutline} ${de.enter}`,style:{left:Q.x,top:Q.y-Te,width:Q.width,height:Q.height}},`hover-outline-${pe}`));const M=nt&&document.contains(nt)?nt.getBoundingClientRect():null,D=M?{x:M.left,y:M.top,width:M.width,height:M.height}:{x:S.boundingBox.x,y:S.isFixed?S.boundingBox.y:S.boundingBox.y-Te,width:S.boundingBox.width,height:S.boundingBox.height},E=S.isMultiSelect;return r.jsx("div",{className:`${E?de.multiSelectOutline:de.singleSelectOutline} ${de.enter}`,style:{left:D.x,top:D.y,width:D.width,height:D.height,...E?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),me&&!W&&!vt&&!Zs&&r.jsxs("div",{className:`${de.hoverTooltip} ${de.enter}`,style:{left:Math.max(8,Math.min(N.x,window.innerWidth-100)),top:Math.max(N.y-(me.reactComponents?48:32),8)},children:[me.reactComponents&&r.jsx("div",{className:de.hoverReactPath,children:me.reactComponents}),r.jsx("div",{className:de.hoverElementName,children:me.elementName})]}),W&&r.jsxs(r.Fragment,{children:[(ei=W.multiSelectElements)!=null&&ei.length?W.multiSelectElements.filter(S=>document.contains(S)).map((S,M)=>{const D=S.getBoundingClientRect();return r.jsx("div",{className:`${de.multiSelectOutline} ${An?de.exit:de.enter}`,style:{left:D.left,top:D.top,width:D.width,height:D.height}},`pending-multi-${M}`)}):W.targetElement&&document.contains(W.targetElement)?(()=>{const S=W.targetElement.getBoundingClientRect();return r.jsx("div",{className:`${de.singleSelectOutline} ${An?de.exit:de.enter}`,style:{left:S.left,top:S.top,width:S.width,height:S.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():W.boundingBox&&r.jsx("div",{className:`${W.isMultiSelect?de.multiSelectOutline:de.singleSelectOutline} ${An?de.exit:de.enter}`,style:{left:W.boundingBox.x,top:W.boundingBox.y-Te,width:W.boundingBox.width,height:W.boundingBox.height,...W.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{const S=W.x,M=W.isFixed?W.y:W.y-Te;return r.jsxs(r.Fragment,{children:[r.jsx(e4,{x:S,y:M,isMultiSelect:W.isMultiSelect,isExiting:An}),r.jsx(hu,{ref:kr,element:W.element,selectedText:W.selectedText,computedStyles:W.computedStylesObj,placeholder:W.element==="Area selection"?"What should change in this area?":W.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:Cu,onCancel:dl,isExiting:An,lightMode:!hs,accentColor:W.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,S/100*window.innerWidth)),...M>window.innerHeight-290?{bottom:window.innerHeight-M+20}:{top:M+20}}})]})})()]}),V&&r.jsxs(r.Fragment,{children:[(ti=V.elementBoundingBoxes)!=null&&ti.length?at.length>0?at.filter(S=>document.contains(S)).map((S,M)=>{const D=S.getBoundingClientRect();return r.jsx("div",{className:`${de.multiSelectOutline} ${de.enter}`,style:{left:D.left,top:D.top,width:D.width,height:D.height}},`edit-multi-live-${M}`)}):V.elementBoundingBoxes.map((S,M)=>r.jsx("div",{className:`${de.multiSelectOutline} ${de.enter}`,style:{left:S.x,top:S.y-Te,width:S.width,height:S.height}},`edit-multi-${M}`)):(()=>{const S=Ke&&document.contains(Ke)?Ke.getBoundingClientRect():null,M=S?{x:S.left,y:S.top,width:S.width,height:S.height}:V.boundingBox?{x:V.boundingBox.x,y:V.isFixed?V.boundingBox.y:V.boundingBox.y-Te,width:V.boundingBox.width,height:V.boundingBox.height}:null;return M?r.jsx("div",{className:`${V.isMultiSelect?de.multiSelectOutline:de.singleSelectOutline} ${de.enter}`,style:{left:M.x,top:M.y,width:M.width,height:M.height,...V.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),r.jsx(hu,{ref:Cr,element:V.element,selectedText:V.selectedText,computedStyles:Kv(V.computedStyles),placeholder:"Edit your feedback...",initialValue:V.comment,submitLabel:"Save",onSubmit:ju,onCancel:hl,onDelete:()=>fl(V.id),isExiting:ra,lightMode:!hs,accentColor:V.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{const S=V.isFixed?V.y:V.y-Te;return{left:Math.max(160,Math.min(window.innerWidth-160,V.x/100*window.innerWidth)),...S>window.innerHeight-290?{bottom:window.innerHeight-S+20}:{top:S+20}}})()})]}),Zs&&r.jsxs(r.Fragment,{children:[r.jsx("div",{ref:mo,className:de.dragSelection}),r.jsx("div",{ref:Zo,className:de.highlightsContainer})]})]})]}),document.body)}const h4=()=>{const o=ko();return o.pathname==="/"||o.pathname==="/controller"?null:r.jsx("nav",{className:"bg-slate-900 border-b border-slate-800 text-slate-100 p-4 flex items-center justify-between shadow-lg",children:r.jsxs("div",{className:"flex items-center gap-6",children:[r.jsx(lr,{to:"/",className:"font-extrabold text-xl tracking-tight text-cyan-400 hover:text-cyan-300",children:"⚽ Soccer Web Game"}),r.jsx(lr,{to:"/",className:"text-sm font-semibold hover:text-cyan-400 transition",children:"Arena Game"}),r.jsx(lr,{to:"/controller",className:"text-sm font-semibold hover:text-cyan-400 transition",children:"📱 Mobile Remote"})]})})};function _4(){return r.jsx(vb,{children:r.jsxs("div",{className:"min-h-screen bg-slate-950 text-slate-100 flex flex-col select-none",children:[r.jsx(h4,{}),r.jsxs(Kx,{children:[r.jsx(Yf,{path:"/",element:r.jsx(q5,{})}),r.jsx(Yf,{path:"/controller",element:r.jsx(Q5,{})})]}),r.jsx(f4,{})]})})}K1.createRoot(document.getElementById("root")).render(r.jsx(Mn.StrictMode,{children:r.jsx(_4,{})}));
