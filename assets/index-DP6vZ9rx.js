(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();function Pi(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Hc={exports:{}},al={},Wc={exports:{}},fn={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ti=Symbol.for("react.element"),m0=Symbol.for("react.portal"),g0=Symbol.for("react.fragment"),h0=Symbol.for("react.strict_mode"),v0=Symbol.for("react.profiler"),w0=Symbol.for("react.provider"),y0=Symbol.for("react.context"),x0=Symbol.for("react.forward_ref"),k0=Symbol.for("react.suspense"),D0=Symbol.for("react.memo"),E0=Symbol.for("react.lazy"),Vs=Symbol.iterator;function C0(n){return n===null||typeof n!="object"?null:(n=Vs&&n[Vs]||n["@@iterator"],typeof n=="function"?n:null)}var Vc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zc=Object.assign,Qc={};function xo(n,e,t){this.props=n,this.context=e,this.refs=Qc,this.updater=t||Vc}xo.prototype.isReactComponent={};xo.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};xo.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Yc(){}Yc.prototype=xo.prototype;function Rp(n,e,t){this.props=n,this.context=e,this.refs=Qc,this.updater=t||Vc}var Lp=Rp.prototype=new Yc;Lp.constructor=Rp;Zc(Lp,xo.prototype);Lp.isPureReactComponent=!0;var Zs=Array.isArray,Kc=Object.prototype.hasOwnProperty,jp={current:null},Xc={key:!0,ref:!0,__self:!0,__source:!0};function Gc(n,e,t){var r,o={},i=null,a=null;if(e!=null)for(r in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(i=""+e.key),e)Kc.call(e,r)&&!Xc.hasOwnProperty(r)&&(o[r]=e[r]);var l=arguments.length-2;if(l===1)o.children=t;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];o.children=u}if(n&&n.defaultProps)for(r in l=n.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:Ti,type:n,key:i,ref:a,props:o,_owner:jp.current}}function S0(n,e){return{$$typeof:Ti,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function qp(n){return typeof n=="object"&&n!==null&&n.$$typeof===Ti}function A0(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Qs=/\/+/g;function Ll(n,e){return typeof n=="object"&&n!==null&&n.key!=null?A0(""+n.key):e.toString(36)}function da(n,e,t,r,o){var i=typeof n;(i==="undefined"||i==="boolean")&&(n=null);var a=!1;if(n===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(n.$$typeof){case Ti:case m0:a=!0}}if(a)return a=n,o=o(a),n=r===""?"."+Ll(a,0):r,Zs(o)?(t="",n!=null&&(t=n.replace(Qs,"$&/")+"/"),da(o,e,t,"",function(d){return d})):o!=null&&(qp(o)&&(o=S0(o,t+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(Qs,"$&/")+"/")+n)),e.push(o)),1;if(a=0,r=r===""?".":r+":",Zs(n))for(var l=0;l<n.length;l++){i=n[l];var u=r+Ll(i,l);a+=da(i,e,t,u,o)}else if(u=C0(n),typeof u=="function")for(n=u.call(n),l=0;!(i=n.next()).done;)i=i.value,u=r+Ll(i,l++),a+=da(i,e,t,u,o);else if(i==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Ui(n,e,t){if(n==null)return n;var r=[],o=0;return da(n,r,"","",function(i){return e.call(t,i,o++)}),r}function F0(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var ye={current:null},ca={transition:null},_0={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:ca,ReactCurrentOwner:jp};fn.Children={map:Ui,forEach:function(n,e,t){Ui(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Ui(n,function(){e++}),e},toArray:function(n){return Ui(n,function(e){return e})||[]},only:function(n){if(!qp(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};fn.Component=xo;fn.Fragment=g0;fn.Profiler=v0;fn.PureComponent=Rp;fn.StrictMode=h0;fn.Suspense=k0;fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_0;fn.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var r=Zc({},n.props),o=n.key,i=n.ref,a=n._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,a=jp.current),e.key!==void 0&&(o=""+e.key),n.type&&n.type.defaultProps)var l=n.type.defaultProps;for(u in e)Kc.call(e,u)&&!Xc.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=t;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:Ti,type:n.type,key:o,ref:i,props:r,_owner:a}};fn.createContext=function(n){return n={$$typeof:y0,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:w0,_context:n},n.Consumer=n};fn.createElement=Gc;fn.createFactory=function(n){var e=Gc.bind(null,n);return e.type=n,e};fn.createRef=function(){return{current:null}};fn.forwardRef=function(n){return{$$typeof:x0,render:n}};fn.isValidElement=qp;fn.lazy=function(n){return{$$typeof:E0,_payload:{_status:-1,_result:n},_init:F0}};fn.memo=function(n,e){return{$$typeof:D0,type:n,compare:e===void 0?null:e}};fn.startTransition=function(n){var e=ca.transition;ca.transition={};try{n()}finally{ca.transition=e}};fn.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};fn.useCallback=function(n,e){return ye.current.useCallback(n,e)};fn.useContext=function(n){return ye.current.useContext(n)};fn.useDebugValue=function(){};fn.useDeferredValue=function(n){return ye.current.useDeferredValue(n)};fn.useEffect=function(n,e){return ye.current.useEffect(n,e)};fn.useId=function(){return ye.current.useId()};fn.useImperativeHandle=function(n,e,t){return ye.current.useImperativeHandle(n,e,t)};fn.useInsertionEffect=function(n,e){return ye.current.useInsertionEffect(n,e)};fn.useLayoutEffect=function(n,e){return ye.current.useLayoutEffect(n,e)};fn.useMemo=function(n,e){return ye.current.useMemo(n,e)};fn.useReducer=function(n,e,t){return ye.current.useReducer(n,e,t)};fn.useRef=function(n){return ye.current.useRef(n)};fn.useState=function(n){return ye.current.useState(n)};fn.useSyncExternalStore=function(n,e,t){return ye.current.useSyncExternalStore(n,e,t)};fn.useTransition=function(){return ye.current.useTransition()};fn.version="18.2.0";Wc.exports=fn;var j=Wc.exports;const ee=Pi(j);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N0=j,P0=Symbol.for("react.element"),T0=Symbol.for("react.fragment"),O0=Object.prototype.hasOwnProperty,M0=N0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,B0={key:!0,ref:!0,__self:!0,__source:!0};function Jc(n,e,t){var r,o={},i=null,a=null;t!==void 0&&(i=""+t),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)O0.call(e,r)&&!B0.hasOwnProperty(r)&&(o[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:P0,type:n,key:i,ref:a,props:o,_owner:M0.current}}al.Fragment=T0;al.jsx=Jc;al.jsxs=Jc;Hc.exports=al;var Cn=Hc.exports,Du={},nf={exports:{}},Ze={},ef={exports:{}},tf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(U,Q){var J=U.length;U.push(Q);n:for(;0<J;){var un=J-1>>>1,dn=U[un];if(0<o(dn,Q))U[un]=Q,U[J]=dn,J=un;else break n}}function t(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var Q=U[0],J=U.pop();if(J!==Q){U[0]=J;n:for(var un=0,dn=U.length,Y=dn>>>1;un<Y;){var Sn=2*(un+1)-1,An=U[Sn],Un=Sn+1,bn=U[Un];if(0>o(An,J))Un<dn&&0>o(bn,An)?(U[un]=bn,U[Un]=J,un=Un):(U[un]=An,U[Sn]=J,un=Sn);else if(Un<dn&&0>o(bn,J))U[un]=bn,U[Un]=J,un=Un;else break n}}return Q}function o(U,Q){var J=U.sortIndex-Q.sortIndex;return J!==0?J:U.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;n.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();n.unstable_now=function(){return a.now()-l}}var u=[],d=[],s=1,p=null,c=3,m=!1,w=!1,b=!1,v=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(U){for(var Q=t(d);Q!==null;){if(Q.callback===null)r(d);else if(Q.startTime<=U)r(d),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=t(d)}}function y(U){if(b=!1,h(U),!w)if(t(u)!==null)w=!0,$(k);else{var Q=t(d);Q!==null&&on(y,Q.startTime-U)}}function k(U,Q){w=!1,b&&(b=!1,f(A),A=-1),m=!0;var J=c;try{for(h(Q),p=t(u);p!==null&&(!(p.expirationTime>Q)||U&&!O());){var un=p.callback;if(typeof un=="function"){p.callback=null,c=p.priorityLevel;var dn=un(p.expirationTime<=Q);Q=n.unstable_now(),typeof dn=="function"?p.callback=dn:p===t(u)&&r(u),h(Q)}else r(u);p=t(u)}if(p!==null)var Y=!0;else{var Sn=t(d);Sn!==null&&on(y,Sn.startTime-Q),Y=!1}return Y}finally{p=null,c=J,m=!1}}var S=!1,E=null,A=-1,M=5,B=-1;function O(){return!(n.unstable_now()-B<M)}function z(){if(E!==null){var U=n.unstable_now();B=U;var Q=!0;try{Q=E(!0,U)}finally{Q?K():(S=!1,E=null)}}else S=!1}var K;if(typeof g=="function")K=function(){g(z)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,X=L.port2;L.port1.onmessage=z,K=function(){X.postMessage(null)}}else K=function(){v(z,0)};function $(U){E=U,S||(S=!0,K())}function on(U,Q){A=v(function(){U(n.unstable_now())},Q)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(U){U.callback=null},n.unstable_continueExecution=function(){w||m||(w=!0,$(k))},n.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<U?Math.floor(1e3/U):5},n.unstable_getCurrentPriorityLevel=function(){return c},n.unstable_getFirstCallbackNode=function(){return t(u)},n.unstable_next=function(U){switch(c){case 1:case 2:case 3:var Q=3;break;default:Q=c}var J=c;c=Q;try{return U()}finally{c=J}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(U,Q){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var J=c;c=U;try{return Q()}finally{c=J}},n.unstable_scheduleCallback=function(U,Q,J){var un=n.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?un+J:un):J=un,U){case 1:var dn=-1;break;case 2:dn=250;break;case 5:dn=1073741823;break;case 4:dn=1e4;break;default:dn=5e3}return dn=J+dn,U={id:s++,callback:Q,priorityLevel:U,startTime:J,expirationTime:dn,sortIndex:-1},J>un?(U.sortIndex=J,e(d,U),t(u)===null&&U===t(d)&&(b?(f(A),A=-1):b=!0,on(y,J-un))):(U.sortIndex=dn,e(u,U),w||m||(w=!0,$(k))),U},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(U){var Q=c;return function(){var J=c;c=Q;try{return U.apply(this,arguments)}finally{c=J}}}})(tf);ef.exports=tf;var z0=ef.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rf=j,Ve=z0;function Z(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var of=new Set,oi={};function _r(n,e){lo(n,e),lo(n+"Capture",e)}function lo(n,e){for(oi[n]=e,n=0;n<e.length;n++)of.add(e[n])}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eu=Object.prototype.hasOwnProperty,I0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ys={},Ks={};function $0(n){return Eu.call(Ks,n)?!0:Eu.call(Ys,n)?!1:I0.test(n)?Ks[n]=!0:(Ys[n]=!0,!1)}function R0(n,e,t,r){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function L0(n,e,t,r){if(e===null||typeof e>"u"||R0(n,e,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xe(n,e,t,r,o,i,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=i,this.removeEmptyString=a}var ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){ue[n]=new xe(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];ue[e]=new xe(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){ue[n]=new xe(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){ue[n]=new xe(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){ue[n]=new xe(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){ue[n]=new xe(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){ue[n]=new xe(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){ue[n]=new xe(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){ue[n]=new xe(n,5,!1,n.toLowerCase(),null,!1,!1)});var Up=/[\-:]([a-z])/g;function Hp(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Up,Hp);ue[e]=new xe(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Up,Hp);ue[e]=new xe(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Up,Hp);ue[e]=new xe(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){ue[n]=new xe(n,1,!1,n.toLowerCase(),null,!1,!1)});ue.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){ue[n]=new xe(n,1,!1,n.toLowerCase(),null,!0,!0)});function Wp(n,e,t,r){var o=ue.hasOwnProperty(e)?ue[e]:null;(o!==null?o.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(L0(e,t,o,r)&&(t=null),r||o===null?$0(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):o.mustUseProperty?n[o.propertyName]=t===null?o.type===3?!1:"":t:(e=o.attributeName,r=o.attributeNamespace,t===null?n.removeAttribute(e):(o=o.type,t=o===3||o===4&&t===!0?"":""+t,r?n.setAttributeNS(r,e,t):n.setAttribute(e,t))))}var It=rf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Hi=Symbol.for("react.element"),Lr=Symbol.for("react.portal"),jr=Symbol.for("react.fragment"),Vp=Symbol.for("react.strict_mode"),Cu=Symbol.for("react.profiler"),af=Symbol.for("react.provider"),lf=Symbol.for("react.context"),Zp=Symbol.for("react.forward_ref"),Su=Symbol.for("react.suspense"),Au=Symbol.for("react.suspense_list"),Qp=Symbol.for("react.memo"),jt=Symbol.for("react.lazy"),uf=Symbol.for("react.offscreen"),Xs=Symbol.iterator;function Po(n){return n===null||typeof n!="object"?null:(n=Xs&&n[Xs]||n["@@iterator"],typeof n=="function"?n:null)}var Rn=Object.assign,jl;function Ro(n){if(jl===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);jl=e&&e[1]||""}return`
`+jl+n}var ql=!1;function Ul(n,e){if(!n||ql)return"";ql=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(n,[],e)}else{try{e.call()}catch(d){r=d}n.call(e.prototype)}else{try{throw Error()}catch(d){r=d}n()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var u=`
`+o[a].replace(" at new "," at ");return n.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",n.displayName)),u}while(1<=a&&0<=l);break}}}finally{ql=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Ro(n):""}function j0(n){switch(n.tag){case 5:return Ro(n.type);case 16:return Ro("Lazy");case 13:return Ro("Suspense");case 19:return Ro("SuspenseList");case 0:case 2:case 15:return n=Ul(n.type,!1),n;case 11:return n=Ul(n.type.render,!1),n;case 1:return n=Ul(n.type,!0),n;default:return""}}function Fu(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case jr:return"Fragment";case Lr:return"Portal";case Cu:return"Profiler";case Vp:return"StrictMode";case Su:return"Suspense";case Au:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case lf:return(n.displayName||"Context")+".Consumer";case af:return(n._context.displayName||"Context")+".Provider";case Zp:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Qp:return e=n.displayName||null,e!==null?e:Fu(n.type)||"Memo";case jt:e=n._payload,n=n._init;try{return Fu(n(e))}catch{}}return null}function q0(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fu(e);case 8:return e===Vp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ir(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function pf(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function U0(n){var e=pf(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),r=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var o=t.get,i=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Wi(n){n._valueTracker||(n._valueTracker=U0(n))}function sf(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),r="";return n&&(r=pf(n)?n.checked?"true":"false":n.value),n=r,n!==t?(e.setValue(n),!0):!1}function Aa(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function _u(n,e){var t=e.checked;return Rn({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Gs(n,e){var t=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;t=ir(e.value!=null?e.value:t),n._wrapperState={initialChecked:r,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function df(n,e){e=e.checked,e!=null&&Wp(n,"checked",e,!1)}function Nu(n,e){df(n,e);var t=ir(e.value),r=e.type;if(t!=null)r==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(r==="submit"||r==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Pu(n,e.type,t):e.hasOwnProperty("defaultValue")&&Pu(n,e.type,ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Js(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Pu(n,e,t){(e!=="number"||Aa(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Lo=Array.isArray;function no(n,e,t,r){if(n=n.options,e){e={};for(var o=0;o<t.length;o++)e["$"+t[o]]=!0;for(t=0;t<n.length;t++)o=e.hasOwnProperty("$"+n[t].value),n[t].selected!==o&&(n[t].selected=o),o&&r&&(n[t].defaultSelected=!0)}else{for(t=""+ir(t),e=null,o=0;o<n.length;o++){if(n[o].value===t){n[o].selected=!0,r&&(n[o].defaultSelected=!0);return}e!==null||n[o].disabled||(e=n[o])}e!==null&&(e.selected=!0)}}function Tu(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Z(91));return Rn({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function nd(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(Z(92));if(Lo(t)){if(1<t.length)throw Error(Z(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:ir(t)}}function cf(n,e){var t=ir(e.value),r=ir(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),r!=null&&(n.defaultValue=""+r)}function ed(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function ff(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ou(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?ff(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Vi,bf=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,r,o){MSApp.execUnsafeLocalFunction(function(){return n(e,t,r,o)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Vi=Vi||document.createElement("div"),Vi.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Vi.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function ii(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Qo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},H0=["Webkit","ms","Moz","O"];Object.keys(Qo).forEach(function(n){H0.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Qo[e]=Qo[n]})});function mf(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Qo.hasOwnProperty(n)&&Qo[n]?(""+e).trim():e+"px"}function gf(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var r=t.indexOf("--")===0,o=mf(t,e[t],r);t==="float"&&(t="cssFloat"),r?n.setProperty(t,o):n[t]=o}}var W0=Rn({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mu(n,e){if(e){if(W0[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Z(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Z(62))}}function Bu(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zu=null;function Yp(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Iu=null,eo=null,to=null;function td(n){if(n=Bi(n)){if(typeof Iu!="function")throw Error(Z(280));var e=n.stateNode;e&&(e=dl(e),Iu(n.stateNode,n.type,e))}}function hf(n){eo?to?to.push(n):to=[n]:eo=n}function vf(){if(eo){var n=eo,e=to;if(to=eo=null,td(n),e)for(n=0;n<e.length;n++)td(e[n])}}function wf(n,e){return n(e)}function yf(){}var Hl=!1;function xf(n,e,t){if(Hl)return n(e,t);Hl=!0;try{return wf(n,e,t)}finally{Hl=!1,(eo!==null||to!==null)&&(yf(),vf())}}function ai(n,e){var t=n.stateNode;if(t===null)return null;var r=dl(t);if(r===null)return null;t=r[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(n=n.type,r=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!r;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(Z(231,e,typeof t));return t}var $u=!1;if(Ot)try{var To={};Object.defineProperty(To,"passive",{get:function(){$u=!0}}),window.addEventListener("test",To,To),window.removeEventListener("test",To,To)}catch{$u=!1}function V0(n,e,t,r,o,i,a,l,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(t,d)}catch(s){this.onError(s)}}var Yo=!1,Fa=null,_a=!1,Ru=null,Z0={onError:function(n){Yo=!0,Fa=n}};function Q0(n,e,t,r,o,i,a,l,u){Yo=!1,Fa=null,V0.apply(Z0,arguments)}function Y0(n,e,t,r,o,i,a,l,u){if(Q0.apply(this,arguments),Yo){if(Yo){var d=Fa;Yo=!1,Fa=null}else throw Error(Z(198));_a||(_a=!0,Ru=d)}}function Nr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function kf(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function rd(n){if(Nr(n)!==n)throw Error(Z(188))}function K0(n){var e=n.alternate;if(!e){if(e=Nr(n),e===null)throw Error(Z(188));return e!==n?null:n}for(var t=n,r=e;;){var o=t.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){t=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===t)return rd(o),n;if(i===r)return rd(o),e;i=i.sibling}throw Error(Z(188))}if(t.return!==r.return)t=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===t){a=!0,t=o,r=i;break}if(l===r){a=!0,r=o,t=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===t){a=!0,t=i,r=o;break}if(l===r){a=!0,r=i,t=o;break}l=l.sibling}if(!a)throw Error(Z(189))}}if(t.alternate!==r)throw Error(Z(190))}if(t.tag!==3)throw Error(Z(188));return t.stateNode.current===t?n:e}function Df(n){return n=K0(n),n!==null?Ef(n):null}function Ef(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Ef(n);if(e!==null)return e;n=n.sibling}return null}var Cf=Ve.unstable_scheduleCallback,od=Ve.unstable_cancelCallback,X0=Ve.unstable_shouldYield,G0=Ve.unstable_requestPaint,Wn=Ve.unstable_now,J0=Ve.unstable_getCurrentPriorityLevel,Kp=Ve.unstable_ImmediatePriority,Sf=Ve.unstable_UserBlockingPriority,Na=Ve.unstable_NormalPriority,ng=Ve.unstable_LowPriority,Af=Ve.unstable_IdlePriority,ll=null,yt=null;function eg(n){if(yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(ll,n,void 0,(n.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:og,tg=Math.log,rg=Math.LN2;function og(n){return n>>>=0,n===0?32:31-(tg(n)/rg|0)|0}var Zi=64,Qi=4194304;function jo(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Pa(n,e){var t=n.pendingLanes;if(t===0)return 0;var r=0,o=n.suspendedLanes,i=n.pingedLanes,a=t&268435455;if(a!==0){var l=a&~o;l!==0?r=jo(l):(i&=a,i!==0&&(r=jo(i)))}else a=t&~o,a!==0?r=jo(a):i!==0&&(r=jo(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&o)&&(o=r&-r,i=e&-e,o>=i||o===16&&(i&4194240)!==0))return e;if(r&4&&(r|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=r;0<e;)t=31-dt(e),o=1<<t,r|=n[t],e&=~o;return r}function ig(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ag(n,e){for(var t=n.suspendedLanes,r=n.pingedLanes,o=n.expirationTimes,i=n.pendingLanes;0<i;){var a=31-dt(i),l=1<<a,u=o[a];u===-1?(!(l&t)||l&r)&&(o[a]=ig(l,e)):u<=e&&(n.expiredLanes|=l),i&=~l}}function Lu(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ff(){var n=Zi;return Zi<<=1,!(Zi&4194240)&&(Zi=64),n}function Wl(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Oi(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-dt(e),n[e]=t}function lg(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var r=n.eventTimes;for(n=n.expirationTimes;0<t;){var o=31-dt(t),i=1<<o;e[o]=0,r[o]=-1,n[o]=-1,t&=~i}}function Xp(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var r=31-dt(t),o=1<<r;o&e|n[r]&e&&(n[r]|=e),t&=~o}}var En=0;function _f(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Nf,Gp,Pf,Tf,Of,ju=!1,Yi=[],Kt=null,Xt=null,Gt=null,li=new Map,ui=new Map,Ht=[],ug="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function id(n,e){switch(n){case"focusin":case"focusout":Kt=null;break;case"dragenter":case"dragleave":Xt=null;break;case"mouseover":case"mouseout":Gt=null;break;case"pointerover":case"pointerout":li.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ui.delete(e.pointerId)}}function Oo(n,e,t,r,o,i){return n===null||n.nativeEvent!==i?(n={blockedOn:e,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},e!==null&&(e=Bi(e),e!==null&&Gp(e)),n):(n.eventSystemFlags|=r,e=n.targetContainers,o!==null&&e.indexOf(o)===-1&&e.push(o),n)}function pg(n,e,t,r,o){switch(e){case"focusin":return Kt=Oo(Kt,n,e,t,r,o),!0;case"dragenter":return Xt=Oo(Xt,n,e,t,r,o),!0;case"mouseover":return Gt=Oo(Gt,n,e,t,r,o),!0;case"pointerover":var i=o.pointerId;return li.set(i,Oo(li.get(i)||null,n,e,t,r,o)),!0;case"gotpointercapture":return i=o.pointerId,ui.set(i,Oo(ui.get(i)||null,n,e,t,r,o)),!0}return!1}function Mf(n){var e=hr(n.target);if(e!==null){var t=Nr(e);if(t!==null){if(e=t.tag,e===13){if(e=kf(t),e!==null){n.blockedOn=e,Of(n.priority,function(){Pf(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function fa(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=qu(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var r=new t.constructor(t.type,t);zu=r,t.target.dispatchEvent(r),zu=null}else return e=Bi(t),e!==null&&Gp(e),n.blockedOn=t,!1;e.shift()}return!0}function ad(n,e,t){fa(n)&&t.delete(e)}function sg(){ju=!1,Kt!==null&&fa(Kt)&&(Kt=null),Xt!==null&&fa(Xt)&&(Xt=null),Gt!==null&&fa(Gt)&&(Gt=null),li.forEach(ad),ui.forEach(ad)}function Mo(n,e){n.blockedOn===e&&(n.blockedOn=null,ju||(ju=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,sg)))}function pi(n){function e(o){return Mo(o,n)}if(0<Yi.length){Mo(Yi[0],n);for(var t=1;t<Yi.length;t++){var r=Yi[t];r.blockedOn===n&&(r.blockedOn=null)}}for(Kt!==null&&Mo(Kt,n),Xt!==null&&Mo(Xt,n),Gt!==null&&Mo(Gt,n),li.forEach(e),ui.forEach(e),t=0;t<Ht.length;t++)r=Ht[t],r.blockedOn===n&&(r.blockedOn=null);for(;0<Ht.length&&(t=Ht[0],t.blockedOn===null);)Mf(t),t.blockedOn===null&&Ht.shift()}var ro=It.ReactCurrentBatchConfig,Ta=!0;function dg(n,e,t,r){var o=En,i=ro.transition;ro.transition=null;try{En=1,Jp(n,e,t,r)}finally{En=o,ro.transition=i}}function cg(n,e,t,r){var o=En,i=ro.transition;ro.transition=null;try{En=4,Jp(n,e,t,r)}finally{En=o,ro.transition=i}}function Jp(n,e,t,r){if(Ta){var o=qu(n,e,t,r);if(o===null)eu(n,e,r,Oa,t),id(n,r);else if(pg(o,n,e,t,r))r.stopPropagation();else if(id(n,r),e&4&&-1<ug.indexOf(n)){for(;o!==null;){var i=Bi(o);if(i!==null&&Nf(i),i=qu(n,e,t,r),i===null&&eu(n,e,r,Oa,t),i===o)break;o=i}o!==null&&r.stopPropagation()}else eu(n,e,r,null,t)}}var Oa=null;function qu(n,e,t,r){if(Oa=null,n=Yp(r),n=hr(n),n!==null)if(e=Nr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=kf(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Oa=n,null}function Bf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(J0()){case Kp:return 1;case Sf:return 4;case Na:case ng:return 16;case Af:return 536870912;default:return 16}default:return 16}}var Vt=null,ns=null,ba=null;function zf(){if(ba)return ba;var n,e=ns,t=e.length,r,o="value"in Vt?Vt.value:Vt.textContent,i=o.length;for(n=0;n<t&&e[n]===o[n];n++);var a=t-n;for(r=1;r<=a&&e[t-r]===o[i-r];r++);return ba=o.slice(n,1<r?1-r:void 0)}function ma(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Ki(){return!0}function ld(){return!1}function Qe(n){function e(t,r,o,i,a){this._reactName=t,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in n)n.hasOwnProperty(l)&&(t=n[l],this[l]=t?t(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ki:ld,this.isPropagationStopped=ld,this}return Rn(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ki)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ki)},persist:function(){},isPersistent:Ki}),e}var ko={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},es=Qe(ko),Mi=Rn({},ko,{view:0,detail:0}),fg=Qe(Mi),Vl,Zl,Bo,ul=Rn({},Mi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ts,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Bo&&(Bo&&n.type==="mousemove"?(Vl=n.screenX-Bo.screenX,Zl=n.screenY-Bo.screenY):Zl=Vl=0,Bo=n),Vl)},movementY:function(n){return"movementY"in n?n.movementY:Zl}}),ud=Qe(ul),bg=Rn({},ul,{dataTransfer:0}),mg=Qe(bg),gg=Rn({},Mi,{relatedTarget:0}),Ql=Qe(gg),hg=Rn({},ko,{animationName:0,elapsedTime:0,pseudoElement:0}),vg=Qe(hg),wg=Rn({},ko,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),yg=Qe(wg),xg=Rn({},ko,{data:0}),pd=Qe(xg),kg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Eg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cg(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Eg[n])?!!e[n]:!1}function ts(){return Cg}var Sg=Rn({},Mi,{key:function(n){if(n.key){var e=kg[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=ma(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Dg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ts,charCode:function(n){return n.type==="keypress"?ma(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ma(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Ag=Qe(Sg),Fg=Rn({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sd=Qe(Fg),_g=Rn({},Mi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ts}),Ng=Qe(_g),Pg=Rn({},ko,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tg=Qe(Pg),Og=Rn({},ul,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Mg=Qe(Og),Bg=[9,13,27,32],rs=Ot&&"CompositionEvent"in window,Ko=null;Ot&&"documentMode"in document&&(Ko=document.documentMode);var zg=Ot&&"TextEvent"in window&&!Ko,If=Ot&&(!rs||Ko&&8<Ko&&11>=Ko),dd=" ",cd=!1;function $f(n,e){switch(n){case"keyup":return Bg.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var qr=!1;function Ig(n,e){switch(n){case"compositionend":return Rf(e);case"keypress":return e.which!==32?null:(cd=!0,dd);case"textInput":return n=e.data,n===dd&&cd?null:n;default:return null}}function $g(n,e){if(qr)return n==="compositionend"||!rs&&$f(n,e)?(n=zf(),ba=ns=Vt=null,qr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return If&&e.locale!=="ko"?null:e.data;default:return null}}var Rg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fd(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Rg[n.type]:e==="textarea"}function Lf(n,e,t,r){hf(r),e=Ma(e,"onChange"),0<e.length&&(t=new es("onChange","change",null,t,r),n.push({event:t,listeners:e}))}var Xo=null,si=null;function Lg(n){Xf(n,0)}function pl(n){var e=Wr(n);if(sf(e))return n}function jg(n,e){if(n==="change")return e}var jf=!1;if(Ot){var Yl;if(Ot){var Kl="oninput"in document;if(!Kl){var bd=document.createElement("div");bd.setAttribute("oninput","return;"),Kl=typeof bd.oninput=="function"}Yl=Kl}else Yl=!1;jf=Yl&&(!document.documentMode||9<document.documentMode)}function md(){Xo&&(Xo.detachEvent("onpropertychange",qf),si=Xo=null)}function qf(n){if(n.propertyName==="value"&&pl(si)){var e=[];Lf(e,si,n,Yp(n)),xf(Lg,e)}}function qg(n,e,t){n==="focusin"?(md(),Xo=e,si=t,Xo.attachEvent("onpropertychange",qf)):n==="focusout"&&md()}function Ug(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return pl(si)}function Hg(n,e){if(n==="click")return pl(e)}function Wg(n,e){if(n==="input"||n==="change")return pl(e)}function Vg(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var bt=typeof Object.is=="function"?Object.is:Vg;function di(n,e){if(bt(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),r=Object.keys(e);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var o=t[r];if(!Eu.call(e,o)||!bt(n[o],e[o]))return!1}return!0}function gd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function hd(n,e){var t=gd(n);n=0;for(var r;t;){if(t.nodeType===3){if(r=n+t.textContent.length,n<=e&&r>=e)return{node:t,offset:e-n};n=r}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=gd(t)}}function Uf(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Uf(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Hf(){for(var n=window,e=Aa();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Aa(n.document)}return e}function os(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function Zg(n){var e=Hf(),t=n.focusedElem,r=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Uf(t.ownerDocument.documentElement,t)){if(r!==null&&os(t)){if(e=r.start,n=r.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var o=t.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!n.extend&&i>r&&(o=r,r=i,i=o),o=hd(t,i);var a=hd(t,r);o&&a&&(n.rangeCount!==1||n.anchorNode!==o.node||n.anchorOffset!==o.offset||n.focusNode!==a.node||n.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(o.node,o.offset),n.removeAllRanges(),i>r?(n.addRange(e),n.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Qg=Ot&&"documentMode"in document&&11>=document.documentMode,Ur=null,Uu=null,Go=null,Hu=!1;function vd(n,e,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Hu||Ur==null||Ur!==Aa(r)||(r=Ur,"selectionStart"in r&&os(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Go&&di(Go,r)||(Go=r,r=Ma(Uu,"onSelect"),0<r.length&&(e=new es("onSelect","select",null,e,t),n.push({event:e,listeners:r}),e.target=Ur)))}function Xi(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Hr={animationend:Xi("Animation","AnimationEnd"),animationiteration:Xi("Animation","AnimationIteration"),animationstart:Xi("Animation","AnimationStart"),transitionend:Xi("Transition","TransitionEnd")},Xl={},Wf={};Ot&&(Wf=document.createElement("div").style,"AnimationEvent"in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),"TransitionEvent"in window||delete Hr.transitionend.transition);function sl(n){if(Xl[n])return Xl[n];if(!Hr[n])return n;var e=Hr[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Wf)return Xl[n]=e[t];return n}var Vf=sl("animationend"),Zf=sl("animationiteration"),Qf=sl("animationstart"),Yf=sl("transitionend"),Kf=new Map,wd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(n,e){Kf.set(n,e),_r(e,[n])}for(var Gl=0;Gl<wd.length;Gl++){var Jl=wd[Gl],Yg=Jl.toLowerCase(),Kg=Jl[0].toUpperCase()+Jl.slice(1);ur(Yg,"on"+Kg)}ur(Vf,"onAnimationEnd");ur(Zf,"onAnimationIteration");ur(Qf,"onAnimationStart");ur("dblclick","onDoubleClick");ur("focusin","onFocus");ur("focusout","onBlur");ur(Yf,"onTransitionEnd");lo("onMouseEnter",["mouseout","mouseover"]);lo("onMouseLeave",["mouseout","mouseover"]);lo("onPointerEnter",["pointerout","pointerover"]);lo("onPointerLeave",["pointerout","pointerover"]);_r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_r("onBeforeInput",["compositionend","keypress","textInput","paste"]);_r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xg=new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));function yd(n,e,t){var r=n.type||"unknown-event";n.currentTarget=t,Y0(r,e,void 0,n),n.currentTarget=null}function Xf(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var r=n[t],o=r.event;r=r.listeners;n:{var i=void 0;if(e)for(var a=r.length-1;0<=a;a--){var l=r[a],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==i&&o.isPropagationStopped())break n;yd(o,l,d),i=u}else for(a=0;a<r.length;a++){if(l=r[a],u=l.instance,d=l.currentTarget,l=l.listener,u!==i&&o.isPropagationStopped())break n;yd(o,l,d),i=u}}}if(_a)throw n=Ru,_a=!1,Ru=null,n}function Nn(n,e){var t=e[Yu];t===void 0&&(t=e[Yu]=new Set);var r=n+"__bubble";t.has(r)||(Gf(e,n,2,!1),t.add(r))}function nu(n,e,t){var r=0;e&&(r|=4),Gf(t,n,r,e)}var Gi="_reactListening"+Math.random().toString(36).slice(2);function ci(n){if(!n[Gi]){n[Gi]=!0,of.forEach(function(t){t!=="selectionchange"&&(Xg.has(t)||nu(t,!1,n),nu(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Gi]||(e[Gi]=!0,nu("selectionchange",!1,e))}}function Gf(n,e,t,r){switch(Bf(e)){case 1:var o=dg;break;case 4:o=cg;break;default:o=Jp}t=o.bind(null,e,t,n),o=void 0,!$u||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(o=!0),r?o!==void 0?n.addEventListener(e,t,{capture:!0,passive:o}):n.addEventListener(e,t,!0):o!==void 0?n.addEventListener(e,t,{passive:o}):n.addEventListener(e,t,!1)}function eu(n,e,t,r,o){var i=r;if(!(e&1)&&!(e&2)&&r!==null)n:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;a=a.return}for(;l!==null;){if(a=hr(l),a===null)return;if(u=a.tag,u===5||u===6){r=i=a;continue n}l=l.parentNode}}r=r.return}xf(function(){var d=i,s=Yp(t),p=[];n:{var c=Kf.get(n);if(c!==void 0){var m=es,w=n;switch(n){case"keypress":if(ma(t)===0)break n;case"keydown":case"keyup":m=Ag;break;case"focusin":w="focus",m=Ql;break;case"focusout":w="blur",m=Ql;break;case"beforeblur":case"afterblur":m=Ql;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=ud;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=mg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Ng;break;case Vf:case Zf:case Qf:m=vg;break;case Yf:m=Tg;break;case"scroll":m=fg;break;case"wheel":m=Mg;break;case"copy":case"cut":case"paste":m=yg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=sd}var b=(e&4)!==0,v=!b&&n==="scroll",f=b?c!==null?c+"Capture":null:c;b=[];for(var g=d,h;g!==null;){h=g;var y=h.stateNode;if(h.tag===5&&y!==null&&(h=y,f!==null&&(y=ai(g,f),y!=null&&b.push(fi(g,y,h)))),v)break;g=g.return}0<b.length&&(c=new m(c,w,null,t,s),p.push({event:c,listeners:b}))}}if(!(e&7)){n:{if(c=n==="mouseover"||n==="pointerover",m=n==="mouseout"||n==="pointerout",c&&t!==zu&&(w=t.relatedTarget||t.fromElement)&&(hr(w)||w[Mt]))break n;if((m||c)&&(c=s.window===s?s:(c=s.ownerDocument)?c.defaultView||c.parentWindow:window,m?(w=t.relatedTarget||t.toElement,m=d,w=w?hr(w):null,w!==null&&(v=Nr(w),w!==v||w.tag!==5&&w.tag!==6)&&(w=null)):(m=null,w=d),m!==w)){if(b=ud,y="onMouseLeave",f="onMouseEnter",g="mouse",(n==="pointerout"||n==="pointerover")&&(b=sd,y="onPointerLeave",f="onPointerEnter",g="pointer"),v=m==null?c:Wr(m),h=w==null?c:Wr(w),c=new b(y,g+"leave",m,t,s),c.target=v,c.relatedTarget=h,y=null,hr(s)===d&&(b=new b(f,g+"enter",w,t,s),b.target=h,b.relatedTarget=v,y=b),v=y,m&&w)e:{for(b=m,f=w,g=0,h=b;h;h=Br(h))g++;for(h=0,y=f;y;y=Br(y))h++;for(;0<g-h;)b=Br(b),g--;for(;0<h-g;)f=Br(f),h--;for(;g--;){if(b===f||f!==null&&b===f.alternate)break e;b=Br(b),f=Br(f)}b=null}else b=null;m!==null&&xd(p,c,m,b,!1),w!==null&&v!==null&&xd(p,v,w,b,!0)}}n:{if(c=d?Wr(d):window,m=c.nodeName&&c.nodeName.toLowerCase(),m==="select"||m==="input"&&c.type==="file")var k=jg;else if(fd(c))if(jf)k=Wg;else{k=Ug;var S=qg}else(m=c.nodeName)&&m.toLowerCase()==="input"&&(c.type==="checkbox"||c.type==="radio")&&(k=Hg);if(k&&(k=k(n,d))){Lf(p,k,t,s);break n}S&&S(n,c,d),n==="focusout"&&(S=c._wrapperState)&&S.controlled&&c.type==="number"&&Pu(c,"number",c.value)}switch(S=d?Wr(d):window,n){case"focusin":(fd(S)||S.contentEditable==="true")&&(Ur=S,Uu=d,Go=null);break;case"focusout":Go=Uu=Ur=null;break;case"mousedown":Hu=!0;break;case"contextmenu":case"mouseup":case"dragend":Hu=!1,vd(p,t,s);break;case"selectionchange":if(Qg)break;case"keydown":case"keyup":vd(p,t,s)}var E;if(rs)n:{switch(n){case"compositionstart":var A="onCompositionStart";break n;case"compositionend":A="onCompositionEnd";break n;case"compositionupdate":A="onCompositionUpdate";break n}A=void 0}else qr?$f(n,t)&&(A="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(A="onCompositionStart");A&&(If&&t.locale!=="ko"&&(qr||A!=="onCompositionStart"?A==="onCompositionEnd"&&qr&&(E=zf()):(Vt=s,ns="value"in Vt?Vt.value:Vt.textContent,qr=!0)),S=Ma(d,A),0<S.length&&(A=new pd(A,n,null,t,s),p.push({event:A,listeners:S}),E?A.data=E:(E=Rf(t),E!==null&&(A.data=E)))),(E=zg?Ig(n,t):$g(n,t))&&(d=Ma(d,"onBeforeInput"),0<d.length&&(s=new pd("onBeforeInput","beforeinput",null,t,s),p.push({event:s,listeners:d}),s.data=E))}Xf(p,e)})}function fi(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Ma(n,e){for(var t=e+"Capture",r=[];n!==null;){var o=n,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=ai(n,t),i!=null&&r.unshift(fi(n,i,o)),i=ai(n,e),i!=null&&r.push(fi(n,i,o))),n=n.return}return r}function Br(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function xd(n,e,t,r,o){for(var i=e._reactName,a=[];t!==null&&t!==r;){var l=t,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,o?(u=ai(t,i),u!=null&&a.unshift(fi(t,u,l))):o||(u=ai(t,i),u!=null&&a.push(fi(t,u,l)))),t=t.return}a.length!==0&&n.push({event:e,listeners:a})}var Gg=/\r\n?/g,Jg=/\u0000|\uFFFD/g;function kd(n){return(typeof n=="string"?n:""+n).replace(Gg,`
`).replace(Jg,"")}function Ji(n,e,t){if(e=kd(e),kd(n)!==e&&t)throw Error(Z(425))}function Ba(){}var Wu=null,Vu=null;function Zu(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Qu=typeof setTimeout=="function"?setTimeout:void 0,nh=typeof clearTimeout=="function"?clearTimeout:void 0,Dd=typeof Promise=="function"?Promise:void 0,eh=typeof queueMicrotask=="function"?queueMicrotask:typeof Dd<"u"?function(n){return Dd.resolve(null).then(n).catch(th)}:Qu;function th(n){setTimeout(function(){throw n})}function tu(n,e){var t=e,r=0;do{var o=t.nextSibling;if(n.removeChild(t),o&&o.nodeType===8)if(t=o.data,t==="/$"){if(r===0){n.removeChild(o),pi(e);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=o}while(t);pi(e)}function Jt(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Ed(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Do=Math.random().toString(36).slice(2),vt="__reactFiber$"+Do,bi="__reactProps$"+Do,Mt="__reactContainer$"+Do,Yu="__reactEvents$"+Do,rh="__reactListeners$"+Do,oh="__reactHandles$"+Do;function hr(n){var e=n[vt];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Mt]||t[vt]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Ed(n);n!==null;){if(t=n[vt])return t;n=Ed(n)}return e}n=t,t=n.parentNode}return null}function Bi(n){return n=n[vt]||n[Mt],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Wr(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(Z(33))}function dl(n){return n[bi]||null}var Ku=[],Vr=-1;function pr(n){return{current:n}}function Pn(n){0>Vr||(n.current=Ku[Vr],Ku[Vr]=null,Vr--)}function _n(n,e){Vr++,Ku[Vr]=n.current,n.current=e}var ar={},fe=pr(ar),Oe=pr(!1),kr=ar;function uo(n,e){var t=n.type.contextTypes;if(!t)return ar;var r=n.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in t)o[i]=e[i];return r&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=o),o}function Me(n){return n=n.childContextTypes,n!=null}function za(){Pn(Oe),Pn(fe)}function Cd(n,e,t){if(fe.current!==ar)throw Error(Z(168));_n(fe,e),_n(Oe,t)}function Jf(n,e,t){var r=n.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var o in r)if(!(o in e))throw Error(Z(108,q0(n)||"Unknown",o));return Rn({},t,r)}function Ia(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ar,kr=fe.current,_n(fe,n),_n(Oe,Oe.current),!0}function Sd(n,e,t){var r=n.stateNode;if(!r)throw Error(Z(169));t?(n=Jf(n,e,kr),r.__reactInternalMemoizedMergedChildContext=n,Pn(Oe),Pn(fe),_n(fe,n)):Pn(Oe),_n(Oe,t)}var At=null,cl=!1,ru=!1;function nb(n){At===null?At=[n]:At.push(n)}function ih(n){cl=!0,nb(n)}function sr(){if(!ru&&At!==null){ru=!0;var n=0,e=En;try{var t=At;for(En=1;n<t.length;n++){var r=t[n];do r=r(!0);while(r!==null)}At=null,cl=!1}catch(o){throw At!==null&&(At=At.slice(n+1)),Cf(Kp,sr),o}finally{En=e,ru=!1}}return null}var Zr=[],Qr=0,$a=null,Ra=0,Ge=[],Je=0,Dr=null,Ft=1,_t="";function fr(n,e){Zr[Qr++]=Ra,Zr[Qr++]=$a,$a=n,Ra=e}function eb(n,e,t){Ge[Je++]=Ft,Ge[Je++]=_t,Ge[Je++]=Dr,Dr=n;var r=Ft;n=_t;var o=32-dt(r)-1;r&=~(1<<o),t+=1;var i=32-dt(e)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Ft=1<<32-dt(e)+o|t<<o|r,_t=i+n}else Ft=1<<i|t<<o|r,_t=n}function is(n){n.return!==null&&(fr(n,1),eb(n,1,0))}function as(n){for(;n===$a;)$a=Zr[--Qr],Zr[Qr]=null,Ra=Zr[--Qr],Zr[Qr]=null;for(;n===Dr;)Dr=Ge[--Je],Ge[Je]=null,_t=Ge[--Je],Ge[Je]=null,Ft=Ge[--Je],Ge[Je]=null}var We=null,He=null,Mn=!1,ut=null;function tb(n,e){var t=nt(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Ad(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,We=n,He=Jt(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,We=n,He=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Dr!==null?{id:Ft,overflow:_t}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=nt(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,We=n,He=null,!0):!1;default:return!1}}function Xu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Gu(n){if(Mn){var e=He;if(e){var t=e;if(!Ad(n,e)){if(Xu(n))throw Error(Z(418));e=Jt(t.nextSibling);var r=We;e&&Ad(n,e)?tb(r,t):(n.flags=n.flags&-4097|2,Mn=!1,We=n)}}else{if(Xu(n))throw Error(Z(418));n.flags=n.flags&-4097|2,Mn=!1,We=n}}}function Fd(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;We=n}function na(n){if(n!==We)return!1;if(!Mn)return Fd(n),Mn=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Zu(n.type,n.memoizedProps)),e&&(e=He)){if(Xu(n))throw rb(),Error(Z(418));for(;e;)tb(n,e),e=Jt(e.nextSibling)}if(Fd(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(Z(317));n:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){He=Jt(n.nextSibling);break n}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}He=null}}else He=We?Jt(n.stateNode.nextSibling):null;return!0}function rb(){for(var n=He;n;)n=Jt(n.nextSibling)}function po(){He=We=null,Mn=!1}function ls(n){ut===null?ut=[n]:ut.push(n)}var ah=It.ReactCurrentBatchConfig;function at(n,e){if(n&&n.defaultProps){e=Rn({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var La=pr(null),ja=null,Yr=null,us=null;function ps(){us=Yr=ja=null}function ss(n){var e=La.current;Pn(La),n._currentValue=e}function Ju(n,e,t){for(;n!==null;){var r=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),n===t)break;n=n.return}}function oo(n,e){ja=n,us=Yr=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Pe=!0),n.firstContext=null)}function rt(n){var e=n._currentValue;if(us!==n)if(n={context:n,memoizedValue:e,next:null},Yr===null){if(ja===null)throw Error(Z(308));Yr=n,ja.dependencies={lanes:0,firstContext:n}}else Yr=Yr.next=n;return e}var vr=null;function ds(n){vr===null?vr=[n]:vr.push(n)}function ob(n,e,t,r){var o=e.interleaved;return o===null?(t.next=t,ds(e)):(t.next=o.next,o.next=t),e.interleaved=t,Bt(n,r)}function Bt(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var qt=!1;function cs(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ib(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Pt(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function nr(n,e,t){var r=n.updateQueue;if(r===null)return null;if(r=r.shared,vn&2){var o=r.pending;return o===null?e.next=e:(e.next=o.next,o.next=e),r.pending=e,Bt(n,t)}return o=r.interleaved,o===null?(e.next=e,ds(r)):(e.next=o.next,o.next=e),r.interleaved=e,Bt(n,t)}function ga(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,Xp(n,t)}}function _d(n,e){var t=n.updateQueue,r=n.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var o=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?o=i=a:i=i.next=a,t=t.next}while(t!==null);i===null?o=i=e:i=i.next=e}else o=i=e;t={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function qa(n,e,t,r){var o=n.updateQueue;qt=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var u=l,d=u.next;u.next=null,a===null?i=d:a.next=d,a=u;var s=n.alternate;s!==null&&(s=s.updateQueue,l=s.lastBaseUpdate,l!==a&&(l===null?s.firstBaseUpdate=d:l.next=d,s.lastBaseUpdate=u))}if(i!==null){var p=o.baseState;a=0,s=d=u=null,l=i;do{var c=l.lane,m=l.eventTime;if((r&c)===c){s!==null&&(s=s.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});n:{var w=n,b=l;switch(c=e,m=t,b.tag){case 1:if(w=b.payload,typeof w=="function"){p=w.call(m,p,c);break n}p=w;break n;case 3:w.flags=w.flags&-65537|128;case 0:if(w=b.payload,c=typeof w=="function"?w.call(m,p,c):w,c==null)break n;p=Rn({},p,c);break n;case 2:qt=!0}}l.callback!==null&&l.lane!==0&&(n.flags|=64,c=o.effects,c===null?o.effects=[l]:c.push(l))}else m={eventTime:m,lane:c,tag:l.tag,payload:l.payload,callback:l.callback,next:null},s===null?(d=s=m,u=p):s=s.next=m,a|=c;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;c=l,l=c.next,c.next=null,o.lastBaseUpdate=c,o.shared.pending=null}}while(!0);if(s===null&&(u=p),o.baseState=u,o.firstBaseUpdate=d,o.lastBaseUpdate=s,e=o.shared.interleaved,e!==null){o=e;do a|=o.lane,o=o.next;while(o!==e)}else i===null&&(o.shared.lanes=0);Cr|=a,n.lanes=a,n.memoizedState=p}}function Nd(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var r=n[e],o=r.callback;if(o!==null){if(r.callback=null,r=t,typeof o!="function")throw Error(Z(191,o));o.call(r)}}}var ab=new rf.Component().refs;function np(n,e,t,r){e=n.memoizedState,t=t(r,e),t=t==null?e:Rn({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var fl={isMounted:function(n){return(n=n._reactInternals)?Nr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var r=we(),o=tr(n),i=Pt(r,o);i.payload=e,t!=null&&(i.callback=t),e=nr(n,i,o),e!==null&&(ct(e,n,o,r),ga(e,n,o))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var r=we(),o=tr(n),i=Pt(r,o);i.tag=1,i.payload=e,t!=null&&(i.callback=t),e=nr(n,i,o),e!==null&&(ct(e,n,o,r),ga(e,n,o))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=we(),r=tr(n),o=Pt(t,r);o.tag=2,e!=null&&(o.callback=e),e=nr(n,o,r),e!==null&&(ct(e,n,r,t),ga(e,n,r))}};function Pd(n,e,t,r,o,i,a){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(r,i,a):e.prototype&&e.prototype.isPureReactComponent?!di(t,r)||!di(o,i):!0}function lb(n,e,t){var r=!1,o=ar,i=e.contextType;return typeof i=="object"&&i!==null?i=rt(i):(o=Me(e)?kr:fe.current,r=e.contextTypes,i=(r=r!=null)?uo(n,o):ar),e=new e(t,i),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=fl,n.stateNode=e,e._reactInternals=n,r&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=o,n.__reactInternalMemoizedMaskedChildContext=i),e}function Td(n,e,t,r){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,r),e.state!==n&&fl.enqueueReplaceState(e,e.state,null)}function ep(n,e,t,r){var o=n.stateNode;o.props=t,o.state=n.memoizedState,o.refs=ab,cs(n);var i=e.contextType;typeof i=="object"&&i!==null?o.context=rt(i):(i=Me(e)?kr:fe.current,o.context=uo(n,i)),o.state=n.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(np(n,e,i,t),o.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(e=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),e!==o.state&&fl.enqueueReplaceState(o,o.state,null),qa(n,t,o,r),o.state=n.memoizedState),typeof o.componentDidMount=="function"&&(n.flags|=4194308)}function zo(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(Z(309));var r=t.stateNode}if(!r)throw Error(Z(147,n));var o=r,i=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(a){var l=o.refs;l===ab&&(l=o.refs={}),a===null?delete l[i]:l[i]=a},e._stringRef=i,e)}if(typeof n!="string")throw Error(Z(284));if(!t._owner)throw Error(Z(290,n))}return n}function ea(n,e){throw n=Object.prototype.toString.call(e),Error(Z(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Od(n){var e=n._init;return e(n._payload)}function ub(n){function e(f,g){if(n){var h=f.deletions;h===null?(f.deletions=[g],f.flags|=16):h.push(g)}}function t(f,g){if(!n)return null;for(;g!==null;)e(f,g),g=g.sibling;return null}function r(f,g){for(f=new Map;g!==null;)g.key!==null?f.set(g.key,g):f.set(g.index,g),g=g.sibling;return f}function o(f,g){return f=rr(f,g),f.index=0,f.sibling=null,f}function i(f,g,h){return f.index=h,n?(h=f.alternate,h!==null?(h=h.index,h<g?(f.flags|=2,g):h):(f.flags|=2,g)):(f.flags|=1048576,g)}function a(f){return n&&f.alternate===null&&(f.flags|=2),f}function l(f,g,h,y){return g===null||g.tag!==6?(g=su(h,f.mode,y),g.return=f,g):(g=o(g,h),g.return=f,g)}function u(f,g,h,y){var k=h.type;return k===jr?s(f,g,h.props.children,y,h.key):g!==null&&(g.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===jt&&Od(k)===g.type)?(y=o(g,h.props),y.ref=zo(f,g,h),y.return=f,y):(y=ka(h.type,h.key,h.props,null,f.mode,y),y.ref=zo(f,g,h),y.return=f,y)}function d(f,g,h,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==h.containerInfo||g.stateNode.implementation!==h.implementation?(g=du(h,f.mode,y),g.return=f,g):(g=o(g,h.children||[]),g.return=f,g)}function s(f,g,h,y,k){return g===null||g.tag!==7?(g=xr(h,f.mode,y,k),g.return=f,g):(g=o(g,h),g.return=f,g)}function p(f,g,h){if(typeof g=="string"&&g!==""||typeof g=="number")return g=su(""+g,f.mode,h),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Hi:return h=ka(g.type,g.key,g.props,null,f.mode,h),h.ref=zo(f,null,g),h.return=f,h;case Lr:return g=du(g,f.mode,h),g.return=f,g;case jt:var y=g._init;return p(f,y(g._payload),h)}if(Lo(g)||Po(g))return g=xr(g,f.mode,h,null),g.return=f,g;ea(f,g)}return null}function c(f,g,h,y){var k=g!==null?g.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return k!==null?null:l(f,g,""+h,y);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Hi:return h.key===k?u(f,g,h,y):null;case Lr:return h.key===k?d(f,g,h,y):null;case jt:return k=h._init,c(f,g,k(h._payload),y)}if(Lo(h)||Po(h))return k!==null?null:s(f,g,h,y,null);ea(f,h)}return null}function m(f,g,h,y,k){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(h)||null,l(g,f,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Hi:return f=f.get(y.key===null?h:y.key)||null,u(g,f,y,k);case Lr:return f=f.get(y.key===null?h:y.key)||null,d(g,f,y,k);case jt:var S=y._init;return m(f,g,h,S(y._payload),k)}if(Lo(y)||Po(y))return f=f.get(h)||null,s(g,f,y,k,null);ea(g,y)}return null}function w(f,g,h,y){for(var k=null,S=null,E=g,A=g=0,M=null;E!==null&&A<h.length;A++){E.index>A?(M=E,E=null):M=E.sibling;var B=c(f,E,h[A],y);if(B===null){E===null&&(E=M);break}n&&E&&B.alternate===null&&e(f,E),g=i(B,g,A),S===null?k=B:S.sibling=B,S=B,E=M}if(A===h.length)return t(f,E),Mn&&fr(f,A),k;if(E===null){for(;A<h.length;A++)E=p(f,h[A],y),E!==null&&(g=i(E,g,A),S===null?k=E:S.sibling=E,S=E);return Mn&&fr(f,A),k}for(E=r(f,E);A<h.length;A++)M=m(E,f,A,h[A],y),M!==null&&(n&&M.alternate!==null&&E.delete(M.key===null?A:M.key),g=i(M,g,A),S===null?k=M:S.sibling=M,S=M);return n&&E.forEach(function(O){return e(f,O)}),Mn&&fr(f,A),k}function b(f,g,h,y){var k=Po(h);if(typeof k!="function")throw Error(Z(150));if(h=k.call(h),h==null)throw Error(Z(151));for(var S=k=null,E=g,A=g=0,M=null,B=h.next();E!==null&&!B.done;A++,B=h.next()){E.index>A?(M=E,E=null):M=E.sibling;var O=c(f,E,B.value,y);if(O===null){E===null&&(E=M);break}n&&E&&O.alternate===null&&e(f,E),g=i(O,g,A),S===null?k=O:S.sibling=O,S=O,E=M}if(B.done)return t(f,E),Mn&&fr(f,A),k;if(E===null){for(;!B.done;A++,B=h.next())B=p(f,B.value,y),B!==null&&(g=i(B,g,A),S===null?k=B:S.sibling=B,S=B);return Mn&&fr(f,A),k}for(E=r(f,E);!B.done;A++,B=h.next())B=m(E,f,A,B.value,y),B!==null&&(n&&B.alternate!==null&&E.delete(B.key===null?A:B.key),g=i(B,g,A),S===null?k=B:S.sibling=B,S=B);return n&&E.forEach(function(z){return e(f,z)}),Mn&&fr(f,A),k}function v(f,g,h,y){if(typeof h=="object"&&h!==null&&h.type===jr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Hi:n:{for(var k=h.key,S=g;S!==null;){if(S.key===k){if(k=h.type,k===jr){if(S.tag===7){t(f,S.sibling),g=o(S,h.props.children),g.return=f,f=g;break n}}else if(S.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===jt&&Od(k)===S.type){t(f,S.sibling),g=o(S,h.props),g.ref=zo(f,S,h),g.return=f,f=g;break n}t(f,S);break}else e(f,S);S=S.sibling}h.type===jr?(g=xr(h.props.children,f.mode,y,h.key),g.return=f,f=g):(y=ka(h.type,h.key,h.props,null,f.mode,y),y.ref=zo(f,g,h),y.return=f,f=y)}return a(f);case Lr:n:{for(S=h.key;g!==null;){if(g.key===S)if(g.tag===4&&g.stateNode.containerInfo===h.containerInfo&&g.stateNode.implementation===h.implementation){t(f,g.sibling),g=o(g,h.children||[]),g.return=f,f=g;break n}else{t(f,g);break}else e(f,g);g=g.sibling}g=du(h,f.mode,y),g.return=f,f=g}return a(f);case jt:return S=h._init,v(f,g,S(h._payload),y)}if(Lo(h))return w(f,g,h,y);if(Po(h))return b(f,g,h,y);ea(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,g!==null&&g.tag===6?(t(f,g.sibling),g=o(g,h),g.return=f,f=g):(t(f,g),g=su(h,f.mode,y),g.return=f,f=g),a(f)):t(f,g)}return v}var so=ub(!0),pb=ub(!1),zi={},xt=pr(zi),mi=pr(zi),gi=pr(zi);function wr(n){if(n===zi)throw Error(Z(174));return n}function fs(n,e){switch(_n(gi,e),_n(mi,n),_n(xt,zi),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ou(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Ou(e,n)}Pn(xt),_n(xt,e)}function co(){Pn(xt),Pn(mi),Pn(gi)}function sb(n){wr(gi.current);var e=wr(xt.current),t=Ou(e,n.type);e!==t&&(_n(mi,n),_n(xt,t))}function bs(n){mi.current===n&&(Pn(xt),Pn(mi))}var In=pr(0);function Ua(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ou=[];function ms(){for(var n=0;n<ou.length;n++)ou[n]._workInProgressVersionPrimary=null;ou.length=0}var ha=It.ReactCurrentDispatcher,iu=It.ReactCurrentBatchConfig,Er=0,$n=null,Qn=null,Jn=null,Ha=!1,Jo=!1,hi=0,lh=0;function se(){throw Error(Z(321))}function gs(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!bt(n[t],e[t]))return!1;return!0}function hs(n,e,t,r,o,i){if(Er=i,$n=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ha.current=n===null||n.memoizedState===null?dh:ch,n=t(r,o),Jo){i=0;do{if(Jo=!1,hi=0,25<=i)throw Error(Z(301));i+=1,Jn=Qn=null,e.updateQueue=null,ha.current=fh,n=t(r,o)}while(Jo)}if(ha.current=Wa,e=Qn!==null&&Qn.next!==null,Er=0,Jn=Qn=$n=null,Ha=!1,e)throw Error(Z(300));return n}function vs(){var n=hi!==0;return hi=0,n}function gt(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jn===null?$n.memoizedState=Jn=n:Jn=Jn.next=n,Jn}function ot(){if(Qn===null){var n=$n.alternate;n=n!==null?n.memoizedState:null}else n=Qn.next;var e=Jn===null?$n.memoizedState:Jn.next;if(e!==null)Jn=e,Qn=n;else{if(n===null)throw Error(Z(310));Qn=n,n={memoizedState:Qn.memoizedState,baseState:Qn.baseState,baseQueue:Qn.baseQueue,queue:Qn.queue,next:null},Jn===null?$n.memoizedState=Jn=n:Jn=Jn.next=n}return Jn}function vi(n,e){return typeof e=="function"?e(n):e}function au(n){var e=ot(),t=e.queue;if(t===null)throw Error(Z(311));t.lastRenderedReducer=n;var r=Qn,o=r.baseQueue,i=t.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,t.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=a=null,u=null,d=i;do{var s=d.lane;if((Er&s)===s)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:n(r,d.action);else{var p={lane:s,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=p,a=r):u=u.next=p,$n.lanes|=s,Cr|=s}d=d.next}while(d!==null&&d!==i);u===null?a=r:u.next=l,bt(r,e.memoizedState)||(Pe=!0),e.memoizedState=r,e.baseState=a,e.baseQueue=u,t.lastRenderedState=r}if(n=t.interleaved,n!==null){o=n;do i=o.lane,$n.lanes|=i,Cr|=i,o=o.next;while(o!==n)}else o===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function lu(n){var e=ot(),t=e.queue;if(t===null)throw Error(Z(311));t.lastRenderedReducer=n;var r=t.dispatch,o=t.pending,i=e.memoizedState;if(o!==null){t.pending=null;var a=o=o.next;do i=n(i,a.action),a=a.next;while(a!==o);bt(i,e.memoizedState)||(Pe=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),t.lastRenderedState=i}return[i,r]}function db(){}function cb(n,e){var t=$n,r=ot(),o=e(),i=!bt(r.memoizedState,o);if(i&&(r.memoizedState=o,Pe=!0),r=r.queue,ws(mb.bind(null,t,r,n),[n]),r.getSnapshot!==e||i||Jn!==null&&Jn.memoizedState.tag&1){if(t.flags|=2048,wi(9,bb.bind(null,t,r,o,e),void 0,null),te===null)throw Error(Z(349));Er&30||fb(t,e,o)}return o}function fb(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=$n.updateQueue,e===null?(e={lastEffect:null,stores:null},$n.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function bb(n,e,t,r){e.value=t,e.getSnapshot=r,gb(e)&&hb(n)}function mb(n,e,t){return t(function(){gb(e)&&hb(n)})}function gb(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!bt(n,t)}catch{return!0}}function hb(n){var e=Bt(n,1);e!==null&&ct(e,n,1,-1)}function Md(n){var e=gt();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vi,lastRenderedState:n},e.queue=n,n=n.dispatch=sh.bind(null,$n,n),[e.memoizedState,n]}function wi(n,e,t,r){return n={tag:n,create:e,destroy:t,deps:r,next:null},e=$n.updateQueue,e===null?(e={lastEffect:null,stores:null},$n.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(r=t.next,t.next=n,n.next=r,e.lastEffect=n)),n}function vb(){return ot().memoizedState}function va(n,e,t,r){var o=gt();$n.flags|=n,o.memoizedState=wi(1|e,t,void 0,r===void 0?null:r)}function bl(n,e,t,r){var o=ot();r=r===void 0?null:r;var i=void 0;if(Qn!==null){var a=Qn.memoizedState;if(i=a.destroy,r!==null&&gs(r,a.deps)){o.memoizedState=wi(e,t,i,r);return}}$n.flags|=n,o.memoizedState=wi(1|e,t,i,r)}function Bd(n,e){return va(8390656,8,n,e)}function ws(n,e){return bl(2048,8,n,e)}function wb(n,e){return bl(4,2,n,e)}function yb(n,e){return bl(4,4,n,e)}function xb(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function kb(n,e,t){return t=t!=null?t.concat([n]):null,bl(4,4,xb.bind(null,e,n),t)}function ys(){}function Db(n,e){var t=ot();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&gs(e,r[1])?r[0]:(t.memoizedState=[n,e],n)}function Eb(n,e){var t=ot();e=e===void 0?null:e;var r=t.memoizedState;return r!==null&&e!==null&&gs(e,r[1])?r[0]:(n=n(),t.memoizedState=[n,e],n)}function Cb(n,e,t){return Er&21?(bt(t,e)||(t=Ff(),$n.lanes|=t,Cr|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Pe=!0),n.memoizedState=t)}function uh(n,e){var t=En;En=t!==0&&4>t?t:4,n(!0);var r=iu.transition;iu.transition={};try{n(!1),e()}finally{En=t,iu.transition=r}}function Sb(){return ot().memoizedState}function ph(n,e,t){var r=tr(n);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Ab(n))Fb(e,t);else if(t=ob(n,e,t,r),t!==null){var o=we();ct(t,n,r,o),_b(t,e,r)}}function sh(n,e,t){var r=tr(n),o={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ab(n))Fb(e,o);else{var i=n.alternate;if(n.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var a=e.lastRenderedState,l=i(a,t);if(o.hasEagerState=!0,o.eagerState=l,bt(l,a)){var u=e.interleaved;u===null?(o.next=o,ds(e)):(o.next=u.next,u.next=o),e.interleaved=o;return}}catch{}finally{}t=ob(n,e,o,r),t!==null&&(o=we(),ct(t,n,r,o),_b(t,e,r))}}function Ab(n){var e=n.alternate;return n===$n||e!==null&&e===$n}function Fb(n,e){Jo=Ha=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function _b(n,e,t){if(t&4194240){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,Xp(n,t)}}var Wa={readContext:rt,useCallback:se,useContext:se,useEffect:se,useImperativeHandle:se,useInsertionEffect:se,useLayoutEffect:se,useMemo:se,useReducer:se,useRef:se,useState:se,useDebugValue:se,useDeferredValue:se,useTransition:se,useMutableSource:se,useSyncExternalStore:se,useId:se,unstable_isNewReconciler:!1},dh={readContext:rt,useCallback:function(n,e){return gt().memoizedState=[n,e===void 0?null:e],n},useContext:rt,useEffect:Bd,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,va(4194308,4,xb.bind(null,e,n),t)},useLayoutEffect:function(n,e){return va(4194308,4,n,e)},useInsertionEffect:function(n,e){return va(4,2,n,e)},useMemo:function(n,e){var t=gt();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var r=gt();return e=t!==void 0?t(e):e,r.memoizedState=r.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},r.queue=n,n=n.dispatch=ph.bind(null,$n,n),[r.memoizedState,n]},useRef:function(n){var e=gt();return n={current:n},e.memoizedState=n},useState:Md,useDebugValue:ys,useDeferredValue:function(n){return gt().memoizedState=n},useTransition:function(){var n=Md(!1),e=n[0];return n=uh.bind(null,n[1]),gt().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var r=$n,o=gt();if(Mn){if(t===void 0)throw Error(Z(407));t=t()}else{if(t=e(),te===null)throw Error(Z(349));Er&30||fb(r,e,t)}o.memoizedState=t;var i={value:t,getSnapshot:e};return o.queue=i,Bd(mb.bind(null,r,i,n),[n]),r.flags|=2048,wi(9,bb.bind(null,r,i,t,e),void 0,null),t},useId:function(){var n=gt(),e=te.identifierPrefix;if(Mn){var t=_t,r=Ft;t=(r&~(1<<32-dt(r)-1)).toString(32)+t,e=":"+e+"R"+t,t=hi++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=lh++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},ch={readContext:rt,useCallback:Db,useContext:rt,useEffect:ws,useImperativeHandle:kb,useInsertionEffect:wb,useLayoutEffect:yb,useMemo:Eb,useReducer:au,useRef:vb,useState:function(){return au(vi)},useDebugValue:ys,useDeferredValue:function(n){var e=ot();return Cb(e,Qn.memoizedState,n)},useTransition:function(){var n=au(vi)[0],e=ot().memoizedState;return[n,e]},useMutableSource:db,useSyncExternalStore:cb,useId:Sb,unstable_isNewReconciler:!1},fh={readContext:rt,useCallback:Db,useContext:rt,useEffect:ws,useImperativeHandle:kb,useInsertionEffect:wb,useLayoutEffect:yb,useMemo:Eb,useReducer:lu,useRef:vb,useState:function(){return lu(vi)},useDebugValue:ys,useDeferredValue:function(n){var e=ot();return Qn===null?e.memoizedState=n:Cb(e,Qn.memoizedState,n)},useTransition:function(){var n=lu(vi)[0],e=ot().memoizedState;return[n,e]},useMutableSource:db,useSyncExternalStore:cb,useId:Sb,unstable_isNewReconciler:!1};function fo(n,e){try{var t="",r=e;do t+=j0(r),r=r.return;while(r);var o=t}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:n,source:e,stack:o,digest:null}}function uu(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function tp(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var bh=typeof WeakMap=="function"?WeakMap:Map;function Nb(n,e,t){t=Pt(-1,t),t.tag=3,t.payload={element:null};var r=e.value;return t.callback=function(){Za||(Za=!0,cp=r),tp(n,e)},t}function Pb(n,e,t){t=Pt(-1,t),t.tag=3;var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var o=e.value;t.payload=function(){return r(o)},t.callback=function(){tp(n,e)}}var i=n.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){tp(n,e),typeof r!="function"&&(er===null?er=new Set([this]):er.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),t}function zd(n,e,t){var r=n.pingCache;if(r===null){r=n.pingCache=new bh;var o=new Set;r.set(e,o)}else o=r.get(e),o===void 0&&(o=new Set,r.set(e,o));o.has(t)||(o.add(t),n=Fh.bind(null,n,e,t),e.then(n,n))}function Id(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function $d(n,e,t,r,o){return n.mode&1?(n.flags|=65536,n.lanes=o,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Pt(-1,1),e.tag=2,nr(t,e,1))),t.lanes|=1),n)}var mh=It.ReactCurrentOwner,Pe=!1;function he(n,e,t,r){e.child=n===null?pb(e,null,t,r):so(e,n.child,t,r)}function Rd(n,e,t,r,o){t=t.render;var i=e.ref;return oo(e,o),r=hs(n,e,t,r,i,o),t=vs(),n!==null&&!Pe?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~o,zt(n,e,o)):(Mn&&t&&is(e),e.flags|=1,he(n,e,r,o),e.child)}function Ld(n,e,t,r,o){if(n===null){var i=t.type;return typeof i=="function"&&!Fs(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=i,Tb(n,e,i,r,o)):(n=ka(t.type,null,r,e,e.mode,o),n.ref=e.ref,n.return=e,e.child=n)}if(i=n.child,!(n.lanes&o)){var a=i.memoizedProps;if(t=t.compare,t=t!==null?t:di,t(a,r)&&n.ref===e.ref)return zt(n,e,o)}return e.flags|=1,n=rr(i,r),n.ref=e.ref,n.return=e,e.child=n}function Tb(n,e,t,r,o){if(n!==null){var i=n.memoizedProps;if(di(i,r)&&n.ref===e.ref)if(Pe=!1,e.pendingProps=r=i,(n.lanes&o)!==0)n.flags&131072&&(Pe=!0);else return e.lanes=n.lanes,zt(n,e,o)}return rp(n,e,t,r,o)}function Ob(n,e,t){var r=e.pendingProps,o=r.children,i=n!==null?n.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_n(Xr,Ue),Ue|=t;else{if(!(t&1073741824))return n=i!==null?i.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,_n(Xr,Ue),Ue|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:t,_n(Xr,Ue),Ue|=r}else i!==null?(r=i.baseLanes|t,e.memoizedState=null):r=t,_n(Xr,Ue),Ue|=r;return he(n,e,o,t),e.child}function Mb(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function rp(n,e,t,r,o){var i=Me(t)?kr:fe.current;return i=uo(e,i),oo(e,o),t=hs(n,e,t,r,i,o),r=vs(),n!==null&&!Pe?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~o,zt(n,e,o)):(Mn&&r&&is(e),e.flags|=1,he(n,e,t,o),e.child)}function jd(n,e,t,r,o){if(Me(t)){var i=!0;Ia(e)}else i=!1;if(oo(e,o),e.stateNode===null)wa(n,e),lb(e,t,r),ep(e,t,r,o),r=!0;else if(n===null){var a=e.stateNode,l=e.memoizedProps;a.props=l;var u=a.context,d=t.contextType;typeof d=="object"&&d!==null?d=rt(d):(d=Me(t)?kr:fe.current,d=uo(e,d));var s=t.getDerivedStateFromProps,p=typeof s=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||u!==d)&&Td(e,a,r,d),qt=!1;var c=e.memoizedState;a.state=c,qa(e,r,a,o),u=e.memoizedState,l!==r||c!==u||Oe.current||qt?(typeof s=="function"&&(np(e,t,s,r),u=e.memoizedState),(l=qt||Pd(e,t,l,r,c,u,d))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),a.props=r,a.state=u,a.context=d,r=l):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{a=e.stateNode,ib(n,e),l=e.memoizedProps,d=e.type===e.elementType?l:at(e.type,l),a.props=d,p=e.pendingProps,c=a.context,u=t.contextType,typeof u=="object"&&u!==null?u=rt(u):(u=Me(t)?kr:fe.current,u=uo(e,u));var m=t.getDerivedStateFromProps;(s=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||c!==u)&&Td(e,a,r,u),qt=!1,c=e.memoizedState,a.state=c,qa(e,r,a,o);var w=e.memoizedState;l!==p||c!==w||Oe.current||qt?(typeof m=="function"&&(np(e,t,m,r),w=e.memoizedState),(d=qt||Pd(e,t,d,r,c,w,u)||!1)?(s||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,w,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,w,u)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===n.memoizedProps&&c===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===n.memoizedProps&&c===n.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=w),a.props=r,a.state=w,a.context=u,r=d):(typeof a.componentDidUpdate!="function"||l===n.memoizedProps&&c===n.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===n.memoizedProps&&c===n.memoizedState||(e.flags|=1024),r=!1)}return op(n,e,t,r,i,o)}function op(n,e,t,r,o,i){Mb(n,e);var a=(e.flags&128)!==0;if(!r&&!a)return o&&Sd(e,t,!1),zt(n,e,i);r=e.stateNode,mh.current=e;var l=a&&typeof t.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,n!==null&&a?(e.child=so(e,n.child,null,i),e.child=so(e,null,l,i)):he(n,e,l,i),e.memoizedState=r.state,o&&Sd(e,t,!0),e.child}function Bb(n){var e=n.stateNode;e.pendingContext?Cd(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Cd(n,e.context,!1),fs(n,e.containerInfo)}function qd(n,e,t,r,o){return po(),ls(o),e.flags|=256,he(n,e,t,r),e.child}var ip={dehydrated:null,treeContext:null,retryLane:0};function ap(n){return{baseLanes:n,cachePool:null,transitions:null}}function zb(n,e,t){var r=e.pendingProps,o=In.current,i=!1,a=(e.flags&128)!==0,l;if((l=a)||(l=n!==null&&n.memoizedState===null?!1:(o&2)!==0),l?(i=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(o|=1),_n(In,o&1),n===null)return Gu(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=r.children,n=r.fallback,i?(r=e.mode,i=e.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=hl(a,r,0,null),n=xr(n,r,t,null),i.return=e,n.return=e,i.sibling=n,e.child=i,e.child.memoizedState=ap(t),e.memoizedState=ip,n):xs(e,a));if(o=n.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return gh(n,e,a,r,l,o,t);if(i){i=r.fallback,a=e.mode,o=n.child,l=o.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&e.child!==o?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=rr(o,u),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=rr(l,i):(i=xr(i,a,t,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,a=n.child.memoizedState,a=a===null?ap(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=n.childLanes&~t,e.memoizedState=ip,r}return i=n.child,n=i.sibling,r=rr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=t),r.return=e,r.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=r,e.memoizedState=null,r}function xs(n,e){return e=hl({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function ta(n,e,t,r){return r!==null&&ls(r),so(e,n.child,null,t),n=xs(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function gh(n,e,t,r,o,i,a){if(t)return e.flags&256?(e.flags&=-257,r=uu(Error(Z(422))),ta(n,e,a,r)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(i=r.fallback,o=e.mode,r=hl({mode:"visible",children:r.children},o,0,null),i=xr(i,o,a,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&so(e,n.child,null,a),e.child.memoizedState=ap(a),e.memoizedState=ip,i);if(!(e.mode&1))return ta(n,e,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(Z(419)),r=uu(i,r,void 0),ta(n,e,a,r)}if(l=(a&n.childLanes)!==0,Pe||l){if(r=te,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Bt(n,o),ct(r,n,o,-1))}return As(),r=uu(Error(Z(421))),ta(n,e,a,r)}return o.data==="$?"?(e.flags|=128,e.child=n.child,e=_h.bind(null,n),o._reactRetry=e,null):(n=i.treeContext,He=Jt(o.nextSibling),We=e,Mn=!0,ut=null,n!==null&&(Ge[Je++]=Ft,Ge[Je++]=_t,Ge[Je++]=Dr,Ft=n.id,_t=n.overflow,Dr=e),e=xs(e,r.children),e.flags|=4096,e)}function Ud(n,e,t){n.lanes|=e;var r=n.alternate;r!==null&&(r.lanes|=e),Ju(n.return,e,t)}function pu(n,e,t,r,o){var i=n.memoizedState;i===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:o}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=o)}function Ib(n,e,t){var r=e.pendingProps,o=r.revealOrder,i=r.tail;if(he(n,e,r.children,t),r=In.current,r&2)r=r&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Ud(n,t,e);else if(n.tag===19)Ud(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}r&=1}if(_n(In,r),!(e.mode&1))e.memoizedState=null;else switch(o){case"forwards":for(t=e.child,o=null;t!==null;)n=t.alternate,n!==null&&Ua(n)===null&&(o=t),t=t.sibling;t=o,t===null?(o=e.child,e.child=null):(o=t.sibling,t.sibling=null),pu(e,!1,o,t,i);break;case"backwards":for(t=null,o=e.child,e.child=null;o!==null;){if(n=o.alternate,n!==null&&Ua(n)===null){e.child=o;break}n=o.sibling,o.sibling=t,t=o,o=n}pu(e,!0,t,null,i);break;case"together":pu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function wa(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function zt(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Cr|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(Z(153));if(e.child!==null){for(n=e.child,t=rr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=rr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function hh(n,e,t){switch(e.tag){case 3:Bb(e),po();break;case 5:sb(e);break;case 1:Me(e.type)&&Ia(e);break;case 4:fs(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,o=e.memoizedProps.value;_n(La,r._currentValue),r._currentValue=o;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(_n(In,In.current&1),e.flags|=128,null):t&e.child.childLanes?zb(n,e,t):(_n(In,In.current&1),n=zt(n,e,t),n!==null?n.sibling:null);_n(In,In.current&1);break;case 19:if(r=(t&e.childLanes)!==0,n.flags&128){if(r)return Ib(n,e,t);e.flags|=128}if(o=e.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),_n(In,In.current),r)break;return null;case 22:case 23:return e.lanes=0,Ob(n,e,t)}return zt(n,e,t)}var $b,lp,Rb,Lb;$b=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};lp=function(){};Rb=function(n,e,t,r){var o=n.memoizedProps;if(o!==r){n=e.stateNode,wr(xt.current);var i=null;switch(t){case"input":o=_u(n,o),r=_u(n,r),i=[];break;case"select":o=Rn({},o,{value:void 0}),r=Rn({},r,{value:void 0}),i=[];break;case"textarea":o=Tu(n,o),r=Tu(n,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(n.onclick=Ba)}Mu(t,r);var a;t=null;for(d in o)if(!r.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var l=o[d];for(a in l)l.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(oi.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(l=o!=null?o[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(t||(t={}),t[a]=u[a])}else t||(i||(i=[]),i.push(d,t)),t=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(oi.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&Nn("scroll",n),i||l===u||(i=[])):(i=i||[]).push(d,u))}t&&(i=i||[]).push("style",t);var d=i;(e.updateQueue=d)&&(e.flags|=4)}};Lb=function(n,e,t,r){t!==r&&(e.flags|=4)};function Io(n,e){if(!Mn)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:r.sibling=null}}function de(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,r=0;if(e)for(var o=n.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=n,o=o.sibling;else for(o=n.child;o!==null;)t|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=n,o=o.sibling;return n.subtreeFlags|=r,n.childLanes=t,e}function vh(n,e,t){var r=e.pendingProps;switch(as(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(e),null;case 1:return Me(e.type)&&za(),de(e),null;case 3:return r=e.stateNode,co(),Pn(Oe),Pn(fe),ms(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(n===null||n.child===null)&&(na(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ut!==null&&(mp(ut),ut=null))),lp(n,e),de(e),null;case 5:bs(e);var o=wr(gi.current);if(t=e.type,n!==null&&e.stateNode!=null)Rb(n,e,t,r,o),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(Z(166));return de(e),null}if(n=wr(xt.current),na(e)){r=e.stateNode,t=e.type;var i=e.memoizedProps;switch(r[vt]=e,r[bi]=i,n=(e.mode&1)!==0,t){case"dialog":Nn("cancel",r),Nn("close",r);break;case"iframe":case"object":case"embed":Nn("load",r);break;case"video":case"audio":for(o=0;o<qo.length;o++)Nn(qo[o],r);break;case"source":Nn("error",r);break;case"img":case"image":case"link":Nn("error",r),Nn("load",r);break;case"details":Nn("toggle",r);break;case"input":Gs(r,i),Nn("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Nn("invalid",r);break;case"textarea":nd(r,i),Nn("invalid",r)}Mu(t,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Ji(r.textContent,l,n),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Ji(r.textContent,l,n),o=["children",""+l]):oi.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Nn("scroll",r)}switch(t){case"input":Wi(r),Js(r,i,!0);break;case"textarea":Wi(r),ed(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ba)}r=o,e.updateQueue=r,r!==null&&(e.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ff(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=a.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof r.is=="string"?n=a.createElement(t,{is:r.is}):(n=a.createElement(t),t==="select"&&(a=n,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):n=a.createElementNS(n,t),n[vt]=e,n[bi]=r,$b(n,e,!1,!1),e.stateNode=n;n:{switch(a=Bu(t,r),t){case"dialog":Nn("cancel",n),Nn("close",n),o=r;break;case"iframe":case"object":case"embed":Nn("load",n),o=r;break;case"video":case"audio":for(o=0;o<qo.length;o++)Nn(qo[o],n);o=r;break;case"source":Nn("error",n),o=r;break;case"img":case"image":case"link":Nn("error",n),Nn("load",n),o=r;break;case"details":Nn("toggle",n),o=r;break;case"input":Gs(n,r),o=_u(n,r),Nn("invalid",n);break;case"option":o=r;break;case"select":n._wrapperState={wasMultiple:!!r.multiple},o=Rn({},r,{value:void 0}),Nn("invalid",n);break;case"textarea":nd(n,r),o=Tu(n,r),Nn("invalid",n);break;default:o=r}Mu(t,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?gf(n,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&bf(n,u)):i==="children"?typeof u=="string"?(t!=="textarea"||u!=="")&&ii(n,u):typeof u=="number"&&ii(n,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(oi.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Nn("scroll",n):u!=null&&Wp(n,i,u,a))}switch(t){case"input":Wi(n),Js(n,r,!1);break;case"textarea":Wi(n),ed(n);break;case"option":r.value!=null&&n.setAttribute("value",""+ir(r.value));break;case"select":n.multiple=!!r.multiple,i=r.value,i!=null?no(n,!!r.multiple,i,!1):r.defaultValue!=null&&no(n,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(n.onclick=Ba)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break n;case"img":r=!0;break n;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return de(e),null;case 6:if(n&&e.stateNode!=null)Lb(n,e,n.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(Z(166));if(t=wr(gi.current),wr(xt.current),na(e)){if(r=e.stateNode,t=e.memoizedProps,r[vt]=e,(i=r.nodeValue!==t)&&(n=We,n!==null))switch(n.tag){case 3:Ji(r.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ji(r.nodeValue,t,(n.mode&1)!==0)}i&&(e.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[vt]=e,e.stateNode=r}return de(e),null;case 13:if(Pn(In),r=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Mn&&He!==null&&e.mode&1&&!(e.flags&128))rb(),po(),e.flags|=98560,i=!1;else if(i=na(e),r!==null&&r.dehydrated!==null){if(n===null){if(!i)throw Error(Z(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(Z(317));i[vt]=e}else po(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;de(e),i=!1}else ut!==null&&(mp(ut),ut=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(r=r!==null,r!==(n!==null&&n.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(n===null||In.current&1?Kn===0&&(Kn=3):As())),e.updateQueue!==null&&(e.flags|=4),de(e),null);case 4:return co(),lp(n,e),n===null&&ci(e.stateNode.containerInfo),de(e),null;case 10:return ss(e.type._context),de(e),null;case 17:return Me(e.type)&&za(),de(e),null;case 19:if(Pn(In),i=e.memoizedState,i===null)return de(e),null;if(r=(e.flags&128)!==0,a=i.rendering,a===null)if(r)Io(i,!1);else{if(Kn!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(a=Ua(n),a!==null){for(e.flags|=128,Io(i,!1),r=a.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=t,t=e.child;t!==null;)i=t,n=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=n,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,n=a.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return _n(In,In.current&1|2),e.child}n=n.sibling}i.tail!==null&&Wn()>bo&&(e.flags|=128,r=!0,Io(i,!1),e.lanes=4194304)}else{if(!r)if(n=Ua(a),n!==null){if(e.flags|=128,r=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Io(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!Mn)return de(e),null}else 2*Wn()-i.renderingStartTime>bo&&t!==1073741824&&(e.flags|=128,r=!0,Io(i,!1),e.lanes=4194304);i.isBackwards?(a.sibling=e.child,e.child=a):(t=i.last,t!==null?t.sibling=a:e.child=a,i.last=a)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Wn(),e.sibling=null,t=In.current,_n(In,r?t&1|2:t&1),e):(de(e),null);case 22:case 23:return Ss(),r=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ue&1073741824&&(de(e),e.subtreeFlags&6&&(e.flags|=8192)):de(e),null;case 24:return null;case 25:return null}throw Error(Z(156,e.tag))}function wh(n,e){switch(as(e),e.tag){case 1:return Me(e.type)&&za(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return co(),Pn(Oe),Pn(fe),ms(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return bs(e),null;case 13:if(Pn(In),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(Z(340));po()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Pn(In),null;case 4:return co(),null;case 10:return ss(e.type._context),null;case 22:case 23:return Ss(),null;case 24:return null;default:return null}}var ra=!1,ce=!1,yh=typeof WeakSet=="function"?WeakSet:Set,nn=null;function Kr(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){jn(n,e,r)}else t.current=null}function up(n,e,t){try{t()}catch(r){jn(n,e,r)}}var Hd=!1;function xh(n,e){if(Wu=Ta,n=Hf(),os(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else n:{t=(t=n.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break n}var a=0,l=-1,u=-1,d=0,s=0,p=n,c=null;e:for(;;){for(var m;p!==t||o!==0&&p.nodeType!==3||(l=a+o),p!==i||r!==0&&p.nodeType!==3||(u=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)c=p,p=m;for(;;){if(p===n)break e;if(c===t&&++d===o&&(l=a),c===i&&++s===r&&(u=a),(m=p.nextSibling)!==null)break;p=c,c=p.parentNode}p=m}t=l===-1||u===-1?null:{start:l,end:u}}else t=null}t=t||{start:0,end:0}}else t=null;for(Vu={focusedElem:n,selectionRange:t},Ta=!1,nn=e;nn!==null;)if(e=nn,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,nn=n;else for(;nn!==null;){e=nn;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var b=w.memoizedProps,v=w.memoizedState,f=e.stateNode,g=f.getSnapshotBeforeUpdate(e.elementType===e.type?b:at(e.type,b),v);f.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var h=e.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Z(163))}}catch(y){jn(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,nn=n;break}nn=e.return}return w=Hd,Hd=!1,w}function ni(n,e,t){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&n)===n){var i=o.destroy;o.destroy=void 0,i!==void 0&&up(e,t,i)}o=o.next}while(o!==r)}}function ml(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}}function pp(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function jb(n){var e=n.alternate;e!==null&&(n.alternate=null,jb(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[vt],delete e[bi],delete e[Yu],delete e[rh],delete e[oh])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function qb(n){return n.tag===5||n.tag===3||n.tag===4}function Wd(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||qb(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function sp(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Ba));else if(r!==4&&(n=n.child,n!==null))for(sp(n,e,t),n=n.sibling;n!==null;)sp(n,e,t),n=n.sibling}function dp(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(r!==4&&(n=n.child,n!==null))for(dp(n,e,t),n=n.sibling;n!==null;)dp(n,e,t),n=n.sibling}var ie=null,lt=!1;function Lt(n,e,t){for(t=t.child;t!==null;)Ub(n,e,t),t=t.sibling}function Ub(n,e,t){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(ll,t)}catch{}switch(t.tag){case 5:ce||Kr(t,e);case 6:var r=ie,o=lt;ie=null,Lt(n,e,t),ie=r,lt=o,ie!==null&&(lt?(n=ie,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):ie.removeChild(t.stateNode));break;case 18:ie!==null&&(lt?(n=ie,t=t.stateNode,n.nodeType===8?tu(n.parentNode,t):n.nodeType===1&&tu(n,t),pi(n)):tu(ie,t.stateNode));break;case 4:r=ie,o=lt,ie=t.stateNode.containerInfo,lt=!0,Lt(n,e,t),ie=r,lt=o;break;case 0:case 11:case 14:case 15:if(!ce&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&up(t,e,a),o=o.next}while(o!==r)}Lt(n,e,t);break;case 1:if(!ce&&(Kr(t,e),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(l){jn(t,e,l)}Lt(n,e,t);break;case 21:Lt(n,e,t);break;case 22:t.mode&1?(ce=(r=ce)||t.memoizedState!==null,Lt(n,e,t),ce=r):Lt(n,e,t);break;default:Lt(n,e,t)}}function Vd(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new yh),e.forEach(function(r){var o=Nh.bind(null,n,r);t.has(r)||(t.add(r),r.then(o,o))})}}function it(n,e){var t=e.deletions;if(t!==null)for(var r=0;r<t.length;r++){var o=t[r];try{var i=n,a=e,l=a;n:for(;l!==null;){switch(l.tag){case 5:ie=l.stateNode,lt=!1;break n;case 3:ie=l.stateNode.containerInfo,lt=!0;break n;case 4:ie=l.stateNode.containerInfo,lt=!0;break n}l=l.return}if(ie===null)throw Error(Z(160));Ub(i,a,o),ie=null,lt=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(d){jn(o,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Hb(e,n),e=e.sibling}function Hb(n,e){var t=n.alternate,r=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(it(e,n),mt(n),r&4){try{ni(3,n,n.return),ml(3,n)}catch(b){jn(n,n.return,b)}try{ni(5,n,n.return)}catch(b){jn(n,n.return,b)}}break;case 1:it(e,n),mt(n),r&512&&t!==null&&Kr(t,t.return);break;case 5:if(it(e,n),mt(n),r&512&&t!==null&&Kr(t,t.return),n.flags&32){var o=n.stateNode;try{ii(o,"")}catch(b){jn(n,n.return,b)}}if(r&4&&(o=n.stateNode,o!=null)){var i=n.memoizedProps,a=t!==null?t.memoizedProps:i,l=n.type,u=n.updateQueue;if(n.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&df(o,i),Bu(l,a);var d=Bu(l,i);for(a=0;a<u.length;a+=2){var s=u[a],p=u[a+1];s==="style"?gf(o,p):s==="dangerouslySetInnerHTML"?bf(o,p):s==="children"?ii(o,p):Wp(o,s,p,d)}switch(l){case"input":Nu(o,i);break;case"textarea":cf(o,i);break;case"select":var c=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var m=i.value;m!=null?no(o,!!i.multiple,m,!1):c!==!!i.multiple&&(i.defaultValue!=null?no(o,!!i.multiple,i.defaultValue,!0):no(o,!!i.multiple,i.multiple?[]:"",!1))}o[bi]=i}catch(b){jn(n,n.return,b)}}break;case 6:if(it(e,n),mt(n),r&4){if(n.stateNode===null)throw Error(Z(162));o=n.stateNode,i=n.memoizedProps;try{o.nodeValue=i}catch(b){jn(n,n.return,b)}}break;case 3:if(it(e,n),mt(n),r&4&&t!==null&&t.memoizedState.isDehydrated)try{pi(e.containerInfo)}catch(b){jn(n,n.return,b)}break;case 4:it(e,n),mt(n);break;case 13:it(e,n),mt(n),o=n.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Es=Wn())),r&4&&Vd(n);break;case 22:if(s=t!==null&&t.memoizedState!==null,n.mode&1?(ce=(d=ce)||s,it(e,n),ce=d):it(e,n),mt(n),r&8192){if(d=n.memoizedState!==null,(n.stateNode.isHidden=d)&&!s&&n.mode&1)for(nn=n,s=n.child;s!==null;){for(p=nn=s;nn!==null;){switch(c=nn,m=c.child,c.tag){case 0:case 11:case 14:case 15:ni(4,c,c.return);break;case 1:Kr(c,c.return);var w=c.stateNode;if(typeof w.componentWillUnmount=="function"){r=c,t=c.return;try{e=r,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(b){jn(r,t,b)}}break;case 5:Kr(c,c.return);break;case 22:if(c.memoizedState!==null){Qd(p);continue}}m!==null?(m.return=c,nn=m):Qd(p)}s=s.sibling}n:for(s=null,p=n;;){if(p.tag===5){if(s===null){s=p;try{o=p.stateNode,d?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,u=p.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=mf("display",a))}catch(b){jn(n,n.return,b)}}}else if(p.tag===6){if(s===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(b){jn(n,n.return,b)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===n)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===n)break n;for(;p.sibling===null;){if(p.return===null||p.return===n)break n;s===p&&(s=null),p=p.return}s===p&&(s=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:it(e,n),mt(n),r&4&&Vd(n);break;case 21:break;default:it(e,n),mt(n)}}function mt(n){var e=n.flags;if(e&2){try{n:{for(var t=n.return;t!==null;){if(qb(t)){var r=t;break n}t=t.return}throw Error(Z(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(ii(o,""),r.flags&=-33);var i=Wd(n);dp(n,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Wd(n);sp(n,l,a);break;default:throw Error(Z(161))}}catch(u){jn(n,n.return,u)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function kh(n,e,t){nn=n,Wb(n)}function Wb(n,e,t){for(var r=(n.mode&1)!==0;nn!==null;){var o=nn,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||ra;if(!a){var l=o.alternate,u=l!==null&&l.memoizedState!==null||ce;l=ra;var d=ce;if(ra=a,(ce=u)&&!d)for(nn=o;nn!==null;)a=nn,u=a.child,a.tag===22&&a.memoizedState!==null?Yd(o):u!==null?(u.return=a,nn=u):Yd(o);for(;i!==null;)nn=i,Wb(i),i=i.sibling;nn=o,ra=l,ce=d}Zd(n)}else o.subtreeFlags&8772&&i!==null?(i.return=o,nn=i):Zd(n)}}function Zd(n){for(;nn!==null;){var e=nn;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ce||ml(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ce)if(t===null)r.componentDidMount();else{var o=e.elementType===e.type?t.memoizedProps:at(e.type,t.memoizedProps);r.componentDidUpdate(o,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Nd(e,i,r);break;case 3:var a=e.updateQueue;if(a!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Nd(e,a,t)}break;case 5:var l=e.stateNode;if(t===null&&e.flags&4){t=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&t.focus();break;case"img":u.src&&(t.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var s=d.memoizedState;if(s!==null){var p=s.dehydrated;p!==null&&pi(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Z(163))}ce||e.flags&512&&pp(e)}catch(c){jn(e,e.return,c)}}if(e===n){nn=null;break}if(t=e.sibling,t!==null){t.return=e.return,nn=t;break}nn=e.return}}function Qd(n){for(;nn!==null;){var e=nn;if(e===n){nn=null;break}var t=e.sibling;if(t!==null){t.return=e.return,nn=t;break}nn=e.return}}function Yd(n){for(;nn!==null;){var e=nn;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{ml(4,e)}catch(u){jn(e,t,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var o=e.return;try{r.componentDidMount()}catch(u){jn(e,o,u)}}var i=e.return;try{pp(e)}catch(u){jn(e,i,u)}break;case 5:var a=e.return;try{pp(e)}catch(u){jn(e,a,u)}}}catch(u){jn(e,e.return,u)}if(e===n){nn=null;break}var l=e.sibling;if(l!==null){l.return=e.return,nn=l;break}nn=e.return}}var Dh=Math.ceil,Va=It.ReactCurrentDispatcher,ks=It.ReactCurrentOwner,et=It.ReactCurrentBatchConfig,vn=0,te=null,Zn=null,le=0,Ue=0,Xr=pr(0),Kn=0,yi=null,Cr=0,gl=0,Ds=0,ei=null,Ne=null,Es=0,bo=1/0,St=null,Za=!1,cp=null,er=null,oa=!1,Zt=null,Qa=0,ti=0,fp=null,ya=-1,xa=0;function we(){return vn&6?Wn():ya!==-1?ya:ya=Wn()}function tr(n){return n.mode&1?vn&2&&le!==0?le&-le:ah.transition!==null?(xa===0&&(xa=Ff()),xa):(n=En,n!==0||(n=window.event,n=n===void 0?16:Bf(n.type)),n):1}function ct(n,e,t,r){if(50<ti)throw ti=0,fp=null,Error(Z(185));Oi(n,t,r),(!(vn&2)||n!==te)&&(n===te&&(!(vn&2)&&(gl|=t),Kn===4&&Wt(n,le)),Be(n,r),t===1&&vn===0&&!(e.mode&1)&&(bo=Wn()+500,cl&&sr()))}function Be(n,e){var t=n.callbackNode;ag(n,e);var r=Pa(n,n===te?le:0);if(r===0)t!==null&&od(t),n.callbackNode=null,n.callbackPriority=0;else if(e=r&-r,n.callbackPriority!==e){if(t!=null&&od(t),e===1)n.tag===0?ih(Kd.bind(null,n)):nb(Kd.bind(null,n)),eh(function(){!(vn&6)&&sr()}),t=null;else{switch(_f(r)){case 1:t=Kp;break;case 4:t=Sf;break;case 16:t=Na;break;case 536870912:t=Af;break;default:t=Na}t=Jb(t,Vb.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Vb(n,e){if(ya=-1,xa=0,vn&6)throw Error(Z(327));var t=n.callbackNode;if(io()&&n.callbackNode!==t)return null;var r=Pa(n,n===te?le:0);if(r===0)return null;if(r&30||r&n.expiredLanes||e)e=Ya(n,r);else{e=r;var o=vn;vn|=2;var i=Qb();(te!==n||le!==e)&&(St=null,bo=Wn()+500,yr(n,e));do try{Sh();break}catch(l){Zb(n,l)}while(!0);ps(),Va.current=i,vn=o,Zn!==null?e=0:(te=null,le=0,e=Kn)}if(e!==0){if(e===2&&(o=Lu(n),o!==0&&(r=o,e=bp(n,o))),e===1)throw t=yi,yr(n,0),Wt(n,r),Be(n,Wn()),t;if(e===6)Wt(n,r);else{if(o=n.current.alternate,!(r&30)&&!Eh(o)&&(e=Ya(n,r),e===2&&(i=Lu(n),i!==0&&(r=i,e=bp(n,i))),e===1))throw t=yi,yr(n,0),Wt(n,r),Be(n,Wn()),t;switch(n.finishedWork=o,n.finishedLanes=r,e){case 0:case 1:throw Error(Z(345));case 2:br(n,Ne,St);break;case 3:if(Wt(n,r),(r&130023424)===r&&(e=Es+500-Wn(),10<e)){if(Pa(n,0)!==0)break;if(o=n.suspendedLanes,(o&r)!==r){we(),n.pingedLanes|=n.suspendedLanes&o;break}n.timeoutHandle=Qu(br.bind(null,n,Ne,St),e);break}br(n,Ne,St);break;case 4:if(Wt(n,r),(r&4194240)===r)break;for(e=n.eventTimes,o=-1;0<r;){var a=31-dt(r);i=1<<a,a=e[a],a>o&&(o=a),r&=~i}if(r=o,r=Wn()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Dh(r/1960))-r,10<r){n.timeoutHandle=Qu(br.bind(null,n,Ne,St),r);break}br(n,Ne,St);break;case 5:br(n,Ne,St);break;default:throw Error(Z(329))}}}return Be(n,Wn()),n.callbackNode===t?Vb.bind(null,n):null}function bp(n,e){var t=ei;return n.current.memoizedState.isDehydrated&&(yr(n,e).flags|=256),n=Ya(n,e),n!==2&&(e=Ne,Ne=t,e!==null&&mp(e)),n}function mp(n){Ne===null?Ne=n:Ne.push.apply(Ne,n)}function Eh(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var o=t[r],i=o.getSnapshot;o=o.value;try{if(!bt(i(),o))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wt(n,e){for(e&=~Ds,e&=~gl,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-dt(e),r=1<<t;n[t]=-1,e&=~r}}function Kd(n){if(vn&6)throw Error(Z(327));io();var e=Pa(n,0);if(!(e&1))return Be(n,Wn()),null;var t=Ya(n,e);if(n.tag!==0&&t===2){var r=Lu(n);r!==0&&(e=r,t=bp(n,r))}if(t===1)throw t=yi,yr(n,0),Wt(n,e),Be(n,Wn()),t;if(t===6)throw Error(Z(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,br(n,Ne,St),Be(n,Wn()),null}function Cs(n,e){var t=vn;vn|=1;try{return n(e)}finally{vn=t,vn===0&&(bo=Wn()+500,cl&&sr())}}function Sr(n){Zt!==null&&Zt.tag===0&&!(vn&6)&&io();var e=vn;vn|=1;var t=et.transition,r=En;try{if(et.transition=null,En=1,n)return n()}finally{En=r,et.transition=t,vn=e,!(vn&6)&&sr()}}function Ss(){Ue=Xr.current,Pn(Xr)}function yr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,nh(t)),Zn!==null)for(t=Zn.return;t!==null;){var r=t;switch(as(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&za();break;case 3:co(),Pn(Oe),Pn(fe),ms();break;case 5:bs(r);break;case 4:co();break;case 13:Pn(In);break;case 19:Pn(In);break;case 10:ss(r.type._context);break;case 22:case 23:Ss()}t=t.return}if(te=n,Zn=n=rr(n.current,null),le=Ue=e,Kn=0,yi=null,Ds=gl=Cr=0,Ne=ei=null,vr!==null){for(e=0;e<vr.length;e++)if(t=vr[e],r=t.interleaved,r!==null){t.interleaved=null;var o=r.next,i=t.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}t.pending=r}vr=null}return n}function Zb(n,e){do{var t=Zn;try{if(ps(),ha.current=Wa,Ha){for(var r=$n.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ha=!1}if(Er=0,Jn=Qn=$n=null,Jo=!1,hi=0,ks.current=null,t===null||t.return===null){Kn=1,yi=e,Zn=null;break}n:{var i=n,a=t.return,l=t,u=e;if(e=le,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,s=l,p=s.tag;if(!(s.mode&1)&&(p===0||p===11||p===15)){var c=s.alternate;c?(s.updateQueue=c.updateQueue,s.memoizedState=c.memoizedState,s.lanes=c.lanes):(s.updateQueue=null,s.memoizedState=null)}var m=Id(a);if(m!==null){m.flags&=-257,$d(m,a,l,i,e),m.mode&1&&zd(i,d,e),e=m,u=d;var w=e.updateQueue;if(w===null){var b=new Set;b.add(u),e.updateQueue=b}else w.add(u);break n}else{if(!(e&1)){zd(i,d,e),As();break n}u=Error(Z(426))}}else if(Mn&&l.mode&1){var v=Id(a);if(v!==null){!(v.flags&65536)&&(v.flags|=256),$d(v,a,l,i,e),ls(fo(u,l));break n}}i=u=fo(u,l),Kn!==4&&(Kn=2),ei===null?ei=[i]:ei.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var f=Nb(i,u,e);_d(i,f);break n;case 1:l=u;var g=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof g.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(er===null||!er.has(h)))){i.flags|=65536,e&=-e,i.lanes|=e;var y=Pb(i,l,e);_d(i,y);break n}}i=i.return}while(i!==null)}Kb(t)}catch(k){e=k,Zn===t&&t!==null&&(Zn=t=t.return);continue}break}while(!0)}function Qb(){var n=Va.current;return Va.current=Wa,n===null?Wa:n}function As(){(Kn===0||Kn===3||Kn===2)&&(Kn=4),te===null||!(Cr&268435455)&&!(gl&268435455)||Wt(te,le)}function Ya(n,e){var t=vn;vn|=2;var r=Qb();(te!==n||le!==e)&&(St=null,yr(n,e));do try{Ch();break}catch(o){Zb(n,o)}while(!0);if(ps(),vn=t,Va.current=r,Zn!==null)throw Error(Z(261));return te=null,le=0,Kn}function Ch(){for(;Zn!==null;)Yb(Zn)}function Sh(){for(;Zn!==null&&!X0();)Yb(Zn)}function Yb(n){var e=Gb(n.alternate,n,Ue);n.memoizedProps=n.pendingProps,e===null?Kb(n):Zn=e,ks.current=null}function Kb(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=wh(t,e),t!==null){t.flags&=32767,Zn=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Kn=6,Zn=null;return}}else if(t=vh(t,e,Ue),t!==null){Zn=t;return}if(e=e.sibling,e!==null){Zn=e;return}Zn=e=n}while(e!==null);Kn===0&&(Kn=5)}function br(n,e,t){var r=En,o=et.transition;try{et.transition=null,En=1,Ah(n,e,t,r)}finally{et.transition=o,En=r}return null}function Ah(n,e,t,r){do io();while(Zt!==null);if(vn&6)throw Error(Z(327));t=n.finishedWork;var o=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(Z(177));n.callbackNode=null,n.callbackPriority=0;var i=t.lanes|t.childLanes;if(lg(n,i),n===te&&(Zn=te=null,le=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||oa||(oa=!0,Jb(Na,function(){return io(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=et.transition,et.transition=null;var a=En;En=1;var l=vn;vn|=4,ks.current=null,xh(n,t),Hb(t,n),Zg(Vu),Ta=!!Wu,Vu=Wu=null,n.current=t,kh(t),G0(),vn=l,En=a,et.transition=i}else n.current=t;if(oa&&(oa=!1,Zt=n,Qa=o),i=n.pendingLanes,i===0&&(er=null),eg(t.stateNode),Be(n,Wn()),e!==null)for(r=n.onRecoverableError,t=0;t<e.length;t++)o=e[t],r(o.value,{componentStack:o.stack,digest:o.digest});if(Za)throw Za=!1,n=cp,cp=null,n;return Qa&1&&n.tag!==0&&io(),i=n.pendingLanes,i&1?n===fp?ti++:(ti=0,fp=n):ti=0,sr(),null}function io(){if(Zt!==null){var n=_f(Qa),e=et.transition,t=En;try{if(et.transition=null,En=16>n?16:n,Zt===null)var r=!1;else{if(n=Zt,Zt=null,Qa=0,vn&6)throw Error(Z(331));var o=vn;for(vn|=4,nn=n.current;nn!==null;){var i=nn,a=i.child;if(nn.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(nn=d;nn!==null;){var s=nn;switch(s.tag){case 0:case 11:case 15:ni(8,s,i)}var p=s.child;if(p!==null)p.return=s,nn=p;else for(;nn!==null;){s=nn;var c=s.sibling,m=s.return;if(jb(s),s===d){nn=null;break}if(c!==null){c.return=m,nn=c;break}nn=m}}}var w=i.alternate;if(w!==null){var b=w.child;if(b!==null){w.child=null;do{var v=b.sibling;b.sibling=null,b=v}while(b!==null)}}nn=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,nn=a;else n:for(;nn!==null;){if(i=nn,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ni(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,nn=f;break n}nn=i.return}}var g=n.current;for(nn=g;nn!==null;){a=nn;var h=a.child;if(a.subtreeFlags&2064&&h!==null)h.return=a,nn=h;else n:for(a=g;nn!==null;){if(l=nn,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ml(9,l)}}catch(k){jn(l,l.return,k)}if(l===a){nn=null;break n}var y=l.sibling;if(y!==null){y.return=l.return,nn=y;break n}nn=l.return}}if(vn=o,sr(),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(ll,n)}catch{}r=!0}return r}finally{En=t,et.transition=e}}return!1}function Xd(n,e,t){e=fo(t,e),e=Nb(n,e,1),n=nr(n,e,1),e=we(),n!==null&&(Oi(n,1,e),Be(n,e))}function jn(n,e,t){if(n.tag===3)Xd(n,n,t);else for(;e!==null;){if(e.tag===3){Xd(e,n,t);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(er===null||!er.has(r))){n=fo(t,n),n=Pb(e,n,1),e=nr(e,n,1),n=we(),e!==null&&(Oi(e,1,n),Be(e,n));break}}e=e.return}}function Fh(n,e,t){var r=n.pingCache;r!==null&&r.delete(e),e=we(),n.pingedLanes|=n.suspendedLanes&t,te===n&&(le&t)===t&&(Kn===4||Kn===3&&(le&130023424)===le&&500>Wn()-Es?yr(n,0):Ds|=t),Be(n,e)}function Xb(n,e){e===0&&(n.mode&1?(e=Qi,Qi<<=1,!(Qi&130023424)&&(Qi=4194304)):e=1);var t=we();n=Bt(n,e),n!==null&&(Oi(n,e,t),Be(n,t))}function _h(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Xb(n,t)}function Nh(n,e){var t=0;switch(n.tag){case 13:var r=n.stateNode,o=n.memoizedState;o!==null&&(t=o.retryLane);break;case 19:r=n.stateNode;break;default:throw Error(Z(314))}r!==null&&r.delete(e),Xb(n,t)}var Gb;Gb=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Oe.current)Pe=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Pe=!1,hh(n,e,t);Pe=!!(n.flags&131072)}else Pe=!1,Mn&&e.flags&1048576&&eb(e,Ra,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;wa(n,e),n=e.pendingProps;var o=uo(e,fe.current);oo(e,t),o=hs(null,e,r,n,o,t);var i=vs();return e.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Me(r)?(i=!0,Ia(e)):i=!1,e.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,cs(e),o.updater=fl,e.stateNode=o,o._reactInternals=e,ep(e,r,n,t),e=op(null,e,r,!0,i,t)):(e.tag=0,Mn&&i&&is(e),he(null,e,o,t),e=e.child),e;case 16:r=e.elementType;n:{switch(wa(n,e),n=e.pendingProps,o=r._init,r=o(r._payload),e.type=r,o=e.tag=Th(r),n=at(r,n),o){case 0:e=rp(null,e,r,n,t);break n;case 1:e=jd(null,e,r,n,t);break n;case 11:e=Rd(null,e,r,n,t);break n;case 14:e=Ld(null,e,r,at(r.type,n),t);break n}throw Error(Z(306,r,""))}return e;case 0:return r=e.type,o=e.pendingProps,o=e.elementType===r?o:at(r,o),rp(n,e,r,o,t);case 1:return r=e.type,o=e.pendingProps,o=e.elementType===r?o:at(r,o),jd(n,e,r,o,t);case 3:n:{if(Bb(e),n===null)throw Error(Z(387));r=e.pendingProps,i=e.memoizedState,o=i.element,ib(n,e),qa(e,r,null,t);var a=e.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){o=fo(Error(Z(423)),e),e=qd(n,e,r,t,o);break n}else if(r!==o){o=fo(Error(Z(424)),e),e=qd(n,e,r,t,o);break n}else for(He=Jt(e.stateNode.containerInfo.firstChild),We=e,Mn=!0,ut=null,t=pb(e,null,r,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(po(),r===o){e=zt(n,e,t);break n}he(n,e,r,t)}e=e.child}return e;case 5:return sb(e),n===null&&Gu(e),r=e.type,o=e.pendingProps,i=n!==null?n.memoizedProps:null,a=o.children,Zu(r,o)?a=null:i!==null&&Zu(r,i)&&(e.flags|=32),Mb(n,e),he(n,e,a,t),e.child;case 6:return n===null&&Gu(e),null;case 13:return zb(n,e,t);case 4:return fs(e,e.stateNode.containerInfo),r=e.pendingProps,n===null?e.child=so(e,null,r,t):he(n,e,r,t),e.child;case 11:return r=e.type,o=e.pendingProps,o=e.elementType===r?o:at(r,o),Rd(n,e,r,o,t);case 7:return he(n,e,e.pendingProps,t),e.child;case 8:return he(n,e,e.pendingProps.children,t),e.child;case 12:return he(n,e,e.pendingProps.children,t),e.child;case 10:n:{if(r=e.type._context,o=e.pendingProps,i=e.memoizedProps,a=o.value,_n(La,r._currentValue),r._currentValue=a,i!==null)if(bt(i.value,a)){if(i.children===o.children&&!Oe.current){e=zt(n,e,t);break n}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Pt(-1,t&-t),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var s=d.pending;s===null?u.next=u:(u.next=s.next,s.next=u),d.pending=u}}i.lanes|=t,u=i.alternate,u!==null&&(u.lanes|=t),Ju(i.return,t,e),l.lanes|=t;break}u=u.next}}else if(i.tag===10)a=i.type===e.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(Z(341));a.lanes|=t,l=a.alternate,l!==null&&(l.lanes|=t),Ju(a,t,e),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===e){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}he(n,e,o.children,t),e=e.child}return e;case 9:return o=e.type,r=e.pendingProps.children,oo(e,t),o=rt(o),r=r(o),e.flags|=1,he(n,e,r,t),e.child;case 14:return r=e.type,o=at(r,e.pendingProps),o=at(r.type,o),Ld(n,e,r,o,t);case 15:return Tb(n,e,e.type,e.pendingProps,t);case 17:return r=e.type,o=e.pendingProps,o=e.elementType===r?o:at(r,o),wa(n,e),e.tag=1,Me(r)?(n=!0,Ia(e)):n=!1,oo(e,t),lb(e,r,o),ep(e,r,o,t),op(null,e,r,!0,n,t);case 19:return Ib(n,e,t);case 22:return Ob(n,e,t)}throw Error(Z(156,e.tag))};function Jb(n,e){return Cf(n,e)}function Ph(n,e,t,r){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(n,e,t,r){return new Ph(n,e,t,r)}function Fs(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Th(n){if(typeof n=="function")return Fs(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Zp)return 11;if(n===Qp)return 14}return 2}function rr(n,e){var t=n.alternate;return t===null?(t=nt(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function ka(n,e,t,r,o,i){var a=2;if(r=n,typeof n=="function")Fs(n)&&(a=1);else if(typeof n=="string")a=5;else n:switch(n){case jr:return xr(t.children,o,i,e);case Vp:a=8,o|=8;break;case Cu:return n=nt(12,t,e,o|2),n.elementType=Cu,n.lanes=i,n;case Su:return n=nt(13,t,e,o),n.elementType=Su,n.lanes=i,n;case Au:return n=nt(19,t,e,o),n.elementType=Au,n.lanes=i,n;case uf:return hl(t,o,i,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case af:a=10;break n;case lf:a=9;break n;case Zp:a=11;break n;case Qp:a=14;break n;case jt:a=16,r=null;break n}throw Error(Z(130,n==null?n:typeof n,""))}return e=nt(a,t,e,o),e.elementType=n,e.type=r,e.lanes=i,e}function xr(n,e,t,r){return n=nt(7,n,r,e),n.lanes=t,n}function hl(n,e,t,r){return n=nt(22,n,r,e),n.elementType=uf,n.lanes=t,n.stateNode={isHidden:!1},n}function su(n,e,t){return n=nt(6,n,null,e),n.lanes=t,n}function du(n,e,t){return e=nt(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Oh(n,e,t,r,o){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wl(0),this.expirationTimes=Wl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function _s(n,e,t,r,o,i,a,l,u){return n=new Oh(n,e,t,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=nt(3,null,null,e),n.current=i,i.stateNode=n,i.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},cs(i),n}function Mh(n,e,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Lr,key:r==null?null:""+r,children:n,containerInfo:e,implementation:t}}function nm(n){if(!n)return ar;n=n._reactInternals;n:{if(Nr(n)!==n||n.tag!==1)throw Error(Z(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break n;case 1:if(Me(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break n}}e=e.return}while(e!==null);throw Error(Z(171))}if(n.tag===1){var t=n.type;if(Me(t))return Jf(n,t,e)}return e}function em(n,e,t,r,o,i,a,l,u){return n=_s(t,r,!0,n,o,i,a,l,u),n.context=nm(null),t=n.current,r=we(),o=tr(t),i=Pt(r,o),i.callback=e??null,nr(t,i,o),n.current.lanes=o,Oi(n,o,r),Be(n,r),n}function vl(n,e,t,r){var o=e.current,i=we(),a=tr(o);return t=nm(t),e.context===null?e.context=t:e.pendingContext=t,e=Pt(i,a),e.payload={element:n},r=r===void 0?null:r,r!==null&&(e.callback=r),n=nr(o,e,a),n!==null&&(ct(n,o,a,i),ga(n,o,a)),a}function Ka(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Gd(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Ns(n,e){Gd(n,e),(n=n.alternate)&&Gd(n,e)}function Bh(){return null}var tm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ps(n){this._internalRoot=n}wl.prototype.render=Ps.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(Z(409));vl(n,e,null,null)};wl.prototype.unmount=Ps.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Sr(function(){vl(null,n,null,null)}),e[Mt]=null}};function wl(n){this._internalRoot=n}wl.prototype.unstable_scheduleHydration=function(n){if(n){var e=Tf();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Ht.length&&e!==0&&e<Ht[t].priority;t++);Ht.splice(t,0,n),t===0&&Mf(n)}};function Ts(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function yl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Jd(){}function zh(n,e,t,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var d=Ka(a);i.call(d)}}var a=em(e,r,n,0,null,!1,!1,"",Jd);return n._reactRootContainer=a,n[Mt]=a.current,ci(n.nodeType===8?n.parentNode:n),Sr(),a}for(;o=n.lastChild;)n.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var d=Ka(u);l.call(d)}}var u=_s(n,0,!1,null,null,!1,!1,"",Jd);return n._reactRootContainer=u,n[Mt]=u.current,ci(n.nodeType===8?n.parentNode:n),Sr(function(){vl(e,u,t,r)}),u}function xl(n,e,t,r,o){var i=t._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var u=Ka(a);l.call(u)}}vl(e,a,n,o)}else a=zh(t,e,n,o,r);return Ka(a)}Nf=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=jo(e.pendingLanes);t!==0&&(Xp(e,t|1),Be(e,Wn()),!(vn&6)&&(bo=Wn()+500,sr()))}break;case 13:Sr(function(){var r=Bt(n,1);if(r!==null){var o=we();ct(r,n,1,o)}}),Ns(n,1)}};Gp=function(n){if(n.tag===13){var e=Bt(n,134217728);if(e!==null){var t=we();ct(e,n,134217728,t)}Ns(n,134217728)}};Pf=function(n){if(n.tag===13){var e=tr(n),t=Bt(n,e);if(t!==null){var r=we();ct(t,n,e,r)}Ns(n,e)}};Tf=function(){return En};Of=function(n,e){var t=En;try{return En=n,e()}finally{En=t}};Iu=function(n,e,t){switch(e){case"input":if(Nu(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var r=t[e];if(r!==n&&r.form===n.form){var o=dl(r);if(!o)throw Error(Z(90));sf(r),Nu(r,o)}}}break;case"textarea":cf(n,t);break;case"select":e=t.value,e!=null&&no(n,!!t.multiple,e,!1)}};wf=Cs;yf=Sr;var Ih={usingClientEntryPoint:!1,Events:[Bi,Wr,dl,hf,vf,Cs]},$o={findFiberByHostInstance:hr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},$h={bundleType:$o.bundleType,version:$o.version,rendererPackageName:$o.rendererPackageName,rendererConfig:$o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:It.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Df(n),n===null?null:n.stateNode},findFiberByHostInstance:$o.findFiberByHostInstance||Bh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ia=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ia.isDisabled&&ia.supportsFiber)try{ll=ia.inject($h),yt=ia}catch{}}Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ih;Ze.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ts(e))throw Error(Z(200));return Mh(n,e,null,t)};Ze.createRoot=function(n,e){if(!Ts(n))throw Error(Z(299));var t=!1,r="",o=tm;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(o=e.onRecoverableError)),e=_s(n,1,!1,null,null,t,!1,r,o),n[Mt]=e.current,ci(n.nodeType===8?n.parentNode:n),new Ps(e)};Ze.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(Z(188)):(n=Object.keys(n).join(","),Error(Z(268,n)));return n=Df(e),n=n===null?null:n.stateNode,n};Ze.flushSync=function(n){return Sr(n)};Ze.hydrate=function(n,e,t){if(!yl(e))throw Error(Z(200));return xl(null,n,e,!0,t)};Ze.hydrateRoot=function(n,e,t){if(!Ts(n))throw Error(Z(405));var r=t!=null&&t.hydratedSources||null,o=!1,i="",a=tm;if(t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),e=em(e,null,n,1,t??null,o,!1,i,a),n[Mt]=e.current,ci(n),r)for(n=0;n<r.length;n++)t=r[n],o=t._getVersion,o=o(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,o]:e.mutableSourceEagerHydrationData.push(t,o);return new wl(e)};Ze.render=function(n,e,t){if(!yl(e))throw Error(Z(200));return xl(null,n,e,!1,t)};Ze.unmountComponentAtNode=function(n){if(!yl(n))throw Error(Z(40));return n._reactRootContainer?(Sr(function(){xl(null,null,n,!1,function(){n._reactRootContainer=null,n[Mt]=null})}),!0):!1};Ze.unstable_batchedUpdates=Cs;Ze.unstable_renderSubtreeIntoContainer=function(n,e,t,r){if(!yl(t))throw Error(Z(200));if(n==null||n._reactInternals===void 0)throw Error(Z(38));return xl(n,e,t,!1,r)};Ze.version="18.2.0-next-9e3b772b8-20220608";function rm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rm)}catch(n){console.error(n)}}rm(),nf.exports=Ze;var om=nf.exports;const Uo=Pi(om);var nc=om;Du.createRoot=nc.createRoot,Du.hydrateRoot=nc.hydrateRoot;var im={exports:{}},Rh="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Lh=Rh,jh=Lh;function am(){}function lm(){}lm.resetWarningCache=am;var qh=function(){function n(r,o,i,a,l,u){if(u!==jh){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}n.isRequired=n;function e(){return n}var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:lm,resetWarningCache:am};return t.PropTypes=t,t};im.exports=qh();var Uh=im.exports;const aa=Pi(Uh);function Hh(n){return isNaN(n)?n:parseInt(Number(n),2).toString(16)}class Wh extends ee.Component{constructor(e){super(e),this.outerRef=ee.createRef(),this.canvasRef=ee.createRef(),this.value_lbls=[]}drawBinaryValue(e,t,r,o,i,a=!1){const l=o*20,u=r*20,d=20;if(t>1||t<0)throw"Expected binary value.";e.lineWidth=2,e.moveTo(l,i),t==1?(e.lineTo(l,i-d),e.lineTo(l+u,i-d),a||e.lineTo(l+u,i),e.fillRect(l,i,u,-d)):e.lineTo(l+u,i)}drawValue(e,t,r,o,i){const a=o*20,l=r*20,u=20;i=i-u/2,e.moveTo(a,i),e.lineTo(a+3,i-u/2),e.lineTo(a+l-3,i-u/2),e.lineTo(a+l,i),e.moveTo(a,i),e.lineTo(a+3,i+u/2),e.lineTo(a+l-3,i+u/2),e.lineTo(a+r*20,i);const d=document.createElement("label"),s=l-6;a+l>this.props.canvasWidth||(d.style=`position:absolute; left:${a+3}px; top:${i-u/2}px; width:${s}px;overflow:hidden; text-align:center`,d.innerHTML=Hh(t),this.value_lbls.push(d),this.outerRef.current.appendChild(d))}drawWave(e,t,r,{waveform:o,width:i},{time_scale:a,sim_end_time:l}){e.fillStyle="#228022",e.globalAlpha=.8,e.strokeStyle="LightGreen",e.beginPath(),l=l/a;for(let u=0;u<o.length;u++){let{time:d,value:s}=o[u];if(d=d/a,d*20>=this.canvasWidth||d>=l)break;let p=l-d;u+1<o.length&&(p=o[u+1].time/a-d),i==1?this.drawBinaryValue(e,s,p,d,r,u==o.length-1):this.drawValue(e,s,p,d,r)}e.stroke()}drawWaveformWindow(){if(this.props.data==null)return;const e=this.canvasRef.current;if(e==null)return;const t=e.getContext("2d");t.clearRect(0,0,e.width,e.height);for(let r=0;r<this.value_lbls.length;r++)this.value_lbls[r].remove();for(let r=0;r<this.props.data.signals.length&&!(r*50+100>=this.props.canvasHeight);r++){let o=this.props.data.signals[r];this.drawWave(t,0,30+r*50,o,this.props.data)}console.log("Canvas drawn.")}componentDidMount(){this.drawWaveformWindow()}componentDidUpdate(){this.drawWaveformWindow()}render(){console.log("Canvas rendered.");const e=`${this.props.canvasWidth}px`,t=`${this.props.canvasHeight}px`;return Cn.jsx("div",{ref:this.outerRef,style:{position:"relative",width:e,height:t,overflow:"hidden"},children:Cn.jsx("canvas",{style:{},width:e,height:t,ref:this.canvasRef,children:"Unsupported browser."})})}}var Vh={};function Zh(n){if(Array.isArray(n))return n}function Qh(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,o,i,a,l=[],u=!0,d=!1;try{if(i=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;u=!1}else for(;!(u=(r=i.call(t)).done)&&(l.push(r.value),l.length!==e);u=!0);}catch(s){d=!0,o=s}finally{try{if(!u&&t.return!=null&&(a=t.return(),Object(a)!==a))return}finally{if(d)throw o}}return l}}function gp(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function um(n,e){if(n){if(typeof n=="string")return gp(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return gp(n,e)}}function Yh(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Da(n,e){return Zh(n)||Qh(n,e)||um(n,e)||Yh()}function ne(n){"@babel/helpers - typeof";return ne=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ne(n)}function pt(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];if(e){for(var r=[],o=0;o<e.length;o++){var i=e[o];if(i){var a=ne(i);if(a==="string"||a==="number")r.push(i);else if(a==="object"){var l=Array.isArray(i)?i:Object.entries(i).map(function(u){var d=Da(u,2),s=d[0],p=d[1];return p?s:null});r=l.length?r.concat(l.filter(function(u){return!!u})):r}}}return r.join(" ").trim()}}function Kh(n){if(Array.isArray(n))return gp(n)}function Xh(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Gh(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xa(n){return Kh(n)||Xh(n)||um(n)||Gh()}function Os(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function Jh(n,e){if(ne(n)!=="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(ne(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function pm(n){var e=Jh(n,"string");return ne(e)==="symbol"?e:String(e)}function ec(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,pm(r.key),r)}}function Ms(n,e,t){return e&&ec(n.prototype,e),t&&ec(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function kl(n,e,t){return e=pm(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function cu(n,e){var t=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=n5(n))||e&&n&&typeof n.length=="number"){t&&(n=t);var r=0,o=function(){};return{s:o,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(d){throw d},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i=!0,a=!1,l;return{s:function(){t=t.call(n)},n:function(){var d=t.next();return i=d.done,d},e:function(d){a=!0,l=d},f:function(){try{!i&&t.return!=null&&t.return()}finally{if(a)throw l}}}}function n5(n,e){if(n){if(typeof n=="string")return tc(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return tc(n,e)}}function tc(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var an=function(){function n(){Os(this,n)}return Ms(n,null,[{key:"innerWidth",value:function(t){if(t){var r=t.offsetWidth,o=getComputedStyle(t);return r+=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),r}return 0}},{key:"width",value:function(t){if(t){var r=t.offsetWidth,o=getComputedStyle(t);return r-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),r}return 0}},{key:"getBrowserLanguage",value:function(){return navigator.userLanguage||navigator.languages&&navigator.languages.length&&navigator.languages[0]||navigator.language||navigator.browserLanguage||navigator.systemLanguage||"en"}},{key:"getWindowScrollTop",value:function(){var t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}},{key:"getWindowScrollLeft",value:function(){var t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}},{key:"getOuterWidth",value:function(t,r){if(t){var o=t.getBoundingClientRect().width||t.offsetWidth;if(r){var i=getComputedStyle(t);o+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return o}return 0}},{key:"getOuterHeight",value:function(t,r){if(t){var o=t.getBoundingClientRect().height||t.offsetHeight;if(r){var i=getComputedStyle(t);o+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return o}return 0}},{key:"getClientHeight",value:function(t,r){if(t){var o=t.clientHeight;if(r){var i=getComputedStyle(t);o+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return o}return 0}},{key:"getClientWidth",value:function(t,r){if(t){var o=t.clientWidth;if(r){var i=getComputedStyle(t);o+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return o}return 0}},{key:"getViewport",value:function(){var t=window,r=document,o=r.documentElement,i=r.getElementsByTagName("body")[0],a=t.innerWidth||o.clientWidth||i.clientWidth,l=t.innerHeight||o.clientHeight||i.clientHeight;return{width:a,height:l}}},{key:"getOffset",value:function(t){if(t){var r=t.getBoundingClientRect();return{top:r.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:r.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}},{key:"index",value:function(t){if(t)for(var r=t.parentNode.childNodes,o=0,i=0;i<r.length;i++){if(r[i]===t)return o;r[i].nodeType===1&&o++}return-1}},{key:"addMultipleClasses",value:function(t,r){if(t&&r)if(t.classList)for(var o=r.split(" "),i=0;i<o.length;i++)t.classList.add(o[i]);else for(var a=r.split(" "),l=0;l<a.length;l++)t.className+=" "+a[l]}},{key:"removeMultipleClasses",value:function(t,r){if(t&&r)if(t.classList)for(var o=r.split(" "),i=0;i<o.length;i++)t.classList.remove(o[i]);else for(var a=r.split(" "),l=0;l<a.length;l++)t.className=t.className.replace(new RegExp("(^|\\b)"+a[l].split(" ").join("|")+"(\\b|$)","gi")," ")}},{key:"addClass",value:function(t,r){t&&r&&(t.classList?t.classList.add(r):t.className+=" "+r)}},{key:"removeClass",value:function(t,r){t&&r&&(t.classList?t.classList.remove(r):t.className=t.className.replace(new RegExp("(^|\\b)"+r.split(" ").join("|")+"(\\b|$)","gi")," "))}},{key:"hasClass",value:function(t,r){return t?t.classList?t.classList.contains(r):new RegExp("(^| )"+r+"( |$)","gi").test(t.className):!1}},{key:"addStyles",value:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};t&&Object.entries(r).forEach(function(o){var i=Da(o,2),a=i[0],l=i[1];return t.style[a]=l})}},{key:"find",value:function(t,r){return t?Array.from(t.querySelectorAll(r)):[]}},{key:"findSingle",value:function(t,r){return t?t.querySelector(r):null}},{key:"setAttributes",value:function(t){var r=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(t){var i=function a(l,u){var d,s,p=t!=null&&(d=t.$attrs)!==null&&d!==void 0&&d[l]?[t==null||(s=t.$attrs)===null||s===void 0?void 0:s[l]]:[];return[u].flat().reduce(function(c,m){if(m!=null){var w=ne(m);if(w==="string"||w==="number")c.push(m);else if(w==="object"){var b=Array.isArray(m)?a(l,m):Object.entries(m).map(function(v){var f=Da(v,2),g=f[0],h=f[1];return l==="style"&&(h||h===0)?"".concat(g.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),":").concat(h):h?g:void 0});c=b.length?c.concat(b.filter(function(v){return!!v})):c}}return c},p)};Object.entries(o).forEach(function(a){var l=Da(a,2),u=l[0],d=l[1];if(d!=null){var s=u.match(/^on(.+)/);s?t.addEventListener(s[1].toLowerCase(),d):u==="p-bind"?r.setAttributes(t,d):(d=u==="class"?Xa(new Set(i("class",d))).join(" ").trim():u==="style"?i("style",d).join(";").trim():d,(t.$attrs=t.$attrs||{})&&(t.$attrs[u]=d),t.setAttribute(u,d))}})}}},{key:"getAttribute",value:function(t,r){if(t){var o=t.getAttribute(r);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}},{key:"isAttributeEquals",value:function(t,r,o){return t?this.getAttribute(t,r)===o:!1}},{key:"isAttributeNotEquals",value:function(t,r,o){return!this.isAttributeEquals(t,r,o)}},{key:"getHeight",value:function(t){if(t){var r=t.offsetHeight,o=getComputedStyle(t);return r-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),r}return 0}},{key:"getWidth",value:function(t){if(t){var r=t.offsetWidth,o=getComputedStyle(t);return r-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth),r}return 0}},{key:"alignOverlay",value:function(t,r,o){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0;t&&r&&(o==="self"?this.relativePosition(t,r):(i&&(t.style.minWidth=n.getOuterWidth(r)+"px"),this.absolutePosition(t,r)))}},{key:"absolutePosition",value:function(t,r){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"left";if(t&&r){var i=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),a=i.height,l=i.width,u=r.offsetHeight,d=r.offsetWidth,s=r.getBoundingClientRect(),p=this.getWindowScrollTop(),c=this.getWindowScrollLeft(),m=this.getViewport(),w,b;s.top+u+a>m.height?(w=s.top+p-a,w<0&&(w=p),t.style.transformOrigin="bottom"):(w=u+s.top+p,t.style.transformOrigin="top");var v=s.left,f=o==="left"?0:l-d;v+d+l>m.width?b=Math.max(0,v+c+d-l):b=v-f+c,t.style.top=w+"px",t.style.left=b+"px"}}},{key:"relativePosition",value:function(t,r){if(t&&r){var o=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),i=r.offsetHeight,a=r.getBoundingClientRect(),l=this.getViewport(),u,d;a.top+i+o.height>l.height?(u=-1*o.height,a.top+u<0&&(u=-1*a.top),t.style.transformOrigin="bottom"):(u=i,t.style.transformOrigin="top"),o.width>l.width?d=a.left*-1:a.left+o.width>l.width?d=(a.left+o.width-l.width)*-1:d=0,t.style.top=u+"px",t.style.left=d+"px"}}},{key:"flipfitCollision",value:function(t,r){var o=this,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"left top",a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"left bottom",l=arguments.length>4?arguments[4]:void 0;if(t&&r){var u=r.getBoundingClientRect(),d=this.getViewport(),s=i.split(" "),p=a.split(" "),c=function(f,g){return g?+f.substring(f.search(/(\+|-)/g))||0:f.substring(0,f.search(/(\+|-)/g))||f},m={my:{x:c(s[0]),y:c(s[1]||s[0]),offsetX:c(s[0],!0),offsetY:c(s[1]||s[0],!0)},at:{x:c(p[0]),y:c(p[1]||p[0]),offsetX:c(p[0],!0),offsetY:c(p[1]||p[0],!0)}},w={left:function(){var f=m.my.offsetX+m.at.offsetX;return f+u.left+(m.my.x==="left"?0:-1*(m.my.x==="center"?o.getOuterWidth(t)/2:o.getOuterWidth(t)))},top:function(){var f=m.my.offsetY+m.at.offsetY;return f+u.top+(m.my.y==="top"?0:-1*(m.my.y==="center"?o.getOuterHeight(t)/2:o.getOuterHeight(t)))}},b={count:{x:0,y:0},left:function(){var f=w.left(),g=n.getWindowScrollLeft();t.style.left=f+g+"px",this.count.x===2?(t.style.left=g+"px",this.count.x=0):f<0&&(this.count.x++,m.my.x="left",m.at.x="right",m.my.offsetX*=-1,m.at.offsetX*=-1,this.right())},right:function(){var f=w.left()+n.getOuterWidth(r),g=n.getWindowScrollLeft();t.style.left=f+g+"px",this.count.x===2?(t.style.left=d.width-n.getOuterWidth(t)+g+"px",this.count.x=0):f+n.getOuterWidth(t)>d.width&&(this.count.x++,m.my.x="right",m.at.x="left",m.my.offsetX*=-1,m.at.offsetX*=-1,this.left())},top:function(){var f=w.top(),g=n.getWindowScrollTop();t.style.top=f+g+"px",this.count.y===2?(t.style.left=g+"px",this.count.y=0):f<0&&(this.count.y++,m.my.y="top",m.at.y="bottom",m.my.offsetY*=-1,m.at.offsetY*=-1,this.bottom())},bottom:function(){var f=w.top()+n.getOuterHeight(r),g=n.getWindowScrollTop();t.style.top=f+g+"px",this.count.y===2?(t.style.left=d.height-n.getOuterHeight(t)+g+"px",this.count.y=0):f+n.getOuterHeight(r)>d.height&&(this.count.y++,m.my.y="bottom",m.at.y="top",m.my.offsetY*=-1,m.at.offsetY*=-1,this.top())},center:function(f){if(f==="y"){var g=w.top()+n.getOuterHeight(r)/2;t.style.top=g+n.getWindowScrollTop()+"px",g<0?this.bottom():g+n.getOuterHeight(r)>d.height&&this.top()}else{var h=w.left()+n.getOuterWidth(r)/2;t.style.left=h+n.getWindowScrollLeft()+"px",h<0?this.left():h+n.getOuterWidth(t)>d.width&&this.right()}}};b[m.at.x]("x"),b[m.at.y]("y"),this.isFunction(l)&&l(m)}}},{key:"findCollisionPosition",value:function(t){if(t){var r=t==="top"||t==="bottom",o=t==="left"?"right":"left",i=t==="top"?"bottom":"top";return r?{axis:"y",my:"center ".concat(i),at:"center ".concat(t)}:{axis:"x",my:"".concat(o," center"),at:"".concat(t," center")}}}},{key:"getParents",value:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return t.parentNode===null?r:this.getParents(t.parentNode,r.concat([t.parentNode]))}},{key:"getScrollableParents",value:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=[];if(t){var i=this.getParents(t),a=/(auto|scroll)/,l=function(h){var y=h?getComputedStyle(h):null;return y&&(a.test(y.getPropertyValue("overflow"))||a.test(y.getPropertyValue("overflowX"))||a.test(y.getPropertyValue("overflowY")))},u=function(h){r?o.push(h.nodeName==="BODY"||h.nodeName==="HTML"||h.nodeType===9?window:h):o.push(h)},d=cu(i),s;try{for(d.s();!(s=d.n()).done;){var p=s.value,c=p.nodeType===1&&p.dataset.scrollselectors;if(c){var m=c.split(","),w=cu(m),b;try{for(w.s();!(b=w.n()).done;){var v=b.value,f=this.findSingle(p,v);f&&l(f)&&u(f)}}catch(g){w.e(g)}finally{w.f()}}p.nodeType===1&&l(p)&&u(p)}}catch(g){d.e(g)}finally{d.f()}}return o.some(function(g){return g===document.body||g===window})||o.push(window),o}},{key:"getHiddenElementOuterHeight",value:function(t){if(t){t.style.visibility="hidden",t.style.display="block";var r=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",r}return 0}},{key:"getHiddenElementOuterWidth",value:function(t){if(t){t.style.visibility="hidden",t.style.display="block";var r=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",r}return 0}},{key:"getHiddenElementDimensions",value:function(t){var r={};return t&&(t.style.visibility="hidden",t.style.display="block",r.width=t.offsetWidth,r.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible"),r}},{key:"fadeIn",value:function(t,r){if(t){t.style.opacity=0;var o=+new Date,i=0,a=function l(){i=+t.style.opacity+(new Date().getTime()-o)/r,t.style.opacity=i,o=+new Date,+i<1&&(window.requestAnimationFrame&&requestAnimationFrame(l)||setTimeout(l,16))};a()}}},{key:"fadeOut",value:function(t,r){if(t)var o=1,i=50,a=i/r,l=setInterval(function(){o-=a,o<=0&&(o=0,clearInterval(l)),t.style.opacity=o},i)}},{key:"getUserAgent",value:function(){return navigator.userAgent}},{key:"isIOS",value:function(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}},{key:"isAndroid",value:function(){return/(android)/i.test(navigator.userAgent)}},{key:"isChrome",value:function(){return/(chrome)/i.test(navigator.userAgent)}},{key:"isClient",value:function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}},{key:"isTouchDevice",value:function(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}},{key:"isFunction",value:function(t){return!!(t&&t.constructor&&t.call&&t.apply)}},{key:"appendChild",value:function(t,r){if(this.isElement(r))r.appendChild(t);else if(r.el&&r.el.nativeElement)r.el.nativeElement.appendChild(t);else throw new Error("Cannot append "+r+" to "+t)}},{key:"removeChild",value:function(t,r){if(this.isElement(r))r.removeChild(t);else if(r.el&&r.el.nativeElement)r.el.nativeElement.removeChild(t);else throw new Error("Cannot remove "+t+" from "+r)}},{key:"isElement",value:function(t){return(typeof HTMLElement>"u"?"undefined":ne(HTMLElement))==="object"?t instanceof HTMLElement:t&&ne(t)==="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}},{key:"scrollInView",value:function(t,r){var o=getComputedStyle(t).getPropertyValue("borderTopWidth"),i=o?parseFloat(o):0,a=getComputedStyle(t).getPropertyValue("paddingTop"),l=a?parseFloat(a):0,u=t.getBoundingClientRect(),d=r.getBoundingClientRect(),s=d.top+document.body.scrollTop-(u.top+document.body.scrollTop)-i-l,p=t.scrollTop,c=t.clientHeight,m=this.getOuterHeight(r);s<0?t.scrollTop=p+s:s+m>c&&(t.scrollTop=p+s-c+m)}},{key:"clearSelection",value:function(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}},{key:"calculateScrollbarWidth",value:function(t){if(t){var r=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(r.borderLeftWidth)-parseFloat(r.borderRightWidth)}else{if(this.calculatedScrollbarWidth!=null)return this.calculatedScrollbarWidth;var o=document.createElement("div");o.className="p-scrollbar-measure",document.body.appendChild(o);var i=o.offsetWidth-o.clientWidth;return document.body.removeChild(o),this.calculatedScrollbarWidth=i,i}}},{key:"calculateBodyScrollbarWidth",value:function(){return window.innerWidth-document.documentElement.offsetWidth}},{key:"getBrowser",value:function(){if(!this.browser){var t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}},{key:"resolveUserAgent",value:function(){var t=navigator.userAgent.toLowerCase(),r=/(chrome)[ ]([\w.]+)/.exec(t)||/(webkit)[ ]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ ]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:r[1]||"",version:r[2]||"0"}}},{key:"blockBodyScroll",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"p-overflow-hidden",r=!!document.body.style.getPropertyValue("--scrollbar-width");!r&&document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}},{key:"unblockBodyScroll",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"p-overflow-hidden";document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}},{key:"isVisible",value:function(t){return t&&(t.clientHeight!==0||t.getClientRects().length!==0||getComputedStyle(t).display!=="none")}},{key:"isExist",value:function(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode)}},{key:"getFocusableElements",value:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=n.find(t,'button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'.concat(r,`,
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(r,`,
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(r,`,
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(r,`,
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(r,`,
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(r,`,
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(r)),i=[],a=cu(o),l;try{for(a.s();!(l=a.n()).done;){var u=l.value;getComputedStyle(u).display!=="none"&&getComputedStyle(u).visibility!=="hidden"&&i.push(u)}}catch(d){a.e(d)}finally{a.f()}return i}},{key:"getFirstFocusableElement",value:function(t,r){var o=n.getFocusableElements(t,r);return o.length>0?o[0]:null}},{key:"getLastFocusableElement",value:function(t,r){var o=n.getFocusableElements(t,r);return o.length>0?o[o.length-1]:null}},{key:"focus",value:function(t,r){var o=r===void 0?!0:!r;t&&document.activeElement!==t&&t.focus({preventScroll:o})}},{key:"focusFirstElement",value:function(t,r){if(t){var o=n.getFirstFocusableElement(t);return o&&n.focus(o,r),o}}},{key:"getCursorOffset",value:function(t,r,o,i){if(t){var a=getComputedStyle(t),l=document.createElement("div");l.style.position="absolute",l.style.top="0px",l.style.left="0px",l.style.visibility="hidden",l.style.pointerEvents="none",l.style.overflow=a.overflow,l.style.width=a.width,l.style.height=a.height,l.style.padding=a.padding,l.style.border=a.border,l.style.overflowWrap=a.overflowWrap,l.style.whiteSpace=a.whiteSpace,l.style.lineHeight=a.lineHeight,l.innerHTML=r.replace(/\r\n|\r|\n/g,"<br />");var u=document.createElement("span");u.textContent=i,l.appendChild(u);var d=document.createTextNode(o);l.appendChild(d),document.body.appendChild(l);var s=u.offsetLeft,p=u.offsetTop,c=u.clientHeight;return document.body.removeChild(l),{left:Math.abs(s-t.scrollLeft),top:Math.abs(p-t.scrollTop)+c}}return{top:"auto",left:"auto"}}},{key:"invokeElementMethod",value:function(t,r,o){t[r].apply(t,o)}},{key:"isClickable",value:function(t){var r=t.nodeName,o=t.parentElement&&t.parentElement.nodeName;return r==="INPUT"||r==="TEXTAREA"||r==="BUTTON"||r==="A"||o==="INPUT"||o==="TEXTAREA"||o==="BUTTON"||o==="A"||this.hasClass(t,"p-button")||this.hasClass(t.parentElement,"p-button")||this.hasClass(t.parentElement,"p-checkbox")||this.hasClass(t.parentElement,"p-radiobutton")}},{key:"applyStyle",value:function(t,r){if(typeof r=="string")t.style.cssText=this.style;else for(var o in this.style)t.style[o]=r[o]}},{key:"exportCSV",value:function(t,r){var o=new Blob([t],{type:"application/csv;charset=utf-8;"});if(window.navigator.msSaveOrOpenBlob)navigator.msSaveOrOpenBlob(o,r+".csv");else{var i=n.saveAs({name:r+".csv",src:URL.createObjectURL(o)});i||(t="data:text/csv;charset=utf-8,"+t,window.open(encodeURI(t)))}}},{key:"saveAs",value:function(t){if(t){var r=document.createElement("a");if(r.download!==void 0){var o=t.name,i=t.src;return r.setAttribute("href",i),r.setAttribute("download",o),r.style.display="none",document.body.appendChild(r),r.click(),document.body.removeChild(r),!0}}return!1}},{key:"createInlineStyle",value:function(t){var r=document.createElement("style");return n.addNonce(r,t),document.head.appendChild(r),r}},{key:"removeInlineStyle",value:function(t){if(this.isExist(t)){try{document.head.removeChild(t)}catch{}t=null}return t}},{key:"addNonce",value:function(t,r){try{r||(r=Vh.REACT_APP_CSS_NONCE)}catch{}r&&t.setAttribute("nonce",r)}},{key:"getTargetElement",value:function(t){if(!t)return null;if(t==="document")return document;if(t==="window")return window;if(ne(t)==="object"&&t.hasOwnProperty("current"))return this.isExist(t.current)?t.current:null;var r=function(a){return!!(a&&a.constructor&&a.call&&a.apply)},o=r(t)?t():t;return o&&o.nodeType===9||this.isExist(o)?o:null}},{key:"getAttributeNames",value:function(t){var r,o,i;for(o=[],i=t.attributes,r=0;r<i.length;++r)o.push(i[r].nodeName);return o.sort(),o}},{key:"isEqualElement",value:function(t,r){var o,i,a,l,u;if(o=n.getAttributeNames(t),i=n.getAttributeNames(r),o.join(",")!==i.join(","))return!1;for(var d=0;d<o.length;++d)if(a=o[d],a==="style")for(var s=t.style,p=r.style,c=/^\d+$/,m=0,w=Object.keys(s);m<w.length;m++){var b=w[m];if(!c.test(b)&&s[b]!==p[b])return!1}else if(t.getAttribute(a)!==r.getAttribute(a))return!1;for(l=t.firstChild,u=r.firstChild;l&&u;l=l.nextSibling,u=u.nextSibling){if(l.nodeType!==u.nodeType)return!1;if(l.nodeType===1){if(!n.isEqualElement(l,u))return!1}else if(l.nodeValue!==u.nodeValue)return!1}return!(l||u)}}]),n}();kl(an,"DATA_PROPS",["data-"]);kl(an,"ARIA_PROPS",["aria","focus-target"]);function hp(){return hp=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},hp.apply(this,arguments)}function e5(n,e){var t=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=t5(n))||e&&n&&typeof n.length=="number"){t&&(n=t);var r=0,o=function(){};return{s:o,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(d){throw d},f:o}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i=!0,a=!1,l;return{s:function(){t=t.call(n)},n:function(){var d=t.next();return i=d.done,d},e:function(d){a=!0,l=d},f:function(){try{!i&&t.return!=null&&t.return()}finally{if(a)throw l}}}}function t5(n,e){if(n){if(typeof n=="string")return rc(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return rc(n,e)}}function rc(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var pn=function(){function n(){Os(this,n)}return Ms(n,null,[{key:"equals",value:function(t,r,o){return o&&t&&ne(t)==="object"&&r&&ne(r)==="object"?this.resolveFieldData(t,o)===this.resolveFieldData(r,o):this.deepEquals(t,r)}},{key:"deepEquals",value:function(t,r){if(t===r)return!0;if(t&&r&&ne(t)=="object"&&ne(r)=="object"){var o=Array.isArray(t),i=Array.isArray(r),a,l,u;if(o&&i){if(l=t.length,l!==r.length)return!1;for(a=l;a--!==0;)if(!this.deepEquals(t[a],r[a]))return!1;return!0}if(o!==i)return!1;var d=t instanceof Date,s=r instanceof Date;if(d!==s)return!1;if(d&&s)return t.getTime()===r.getTime();var p=t instanceof RegExp,c=r instanceof RegExp;if(p!==c)return!1;if(p&&c)return t.toString()===r.toString();var m=Object.keys(t);if(l=m.length,l!==Object.keys(r).length)return!1;for(a=l;a--!==0;)if(!Object.prototype.hasOwnProperty.call(r,m[a]))return!1;for(a=l;a--!==0;)if(u=m[a],!this.deepEquals(t[u],r[u]))return!1;return!0}return t!==t&&r!==r}},{key:"resolveFieldData",value:function(t,r){if(!t||!r)return null;try{var o=t[r];if(this.isNotEmpty(o))return o}catch{}if(Object.keys(t).length){if(this.isFunction(r))return r(t);if(this.isNotEmpty(t[r]))return t[r];if(r.indexOf(".")===-1)return t[r];for(var i=r.split("."),a=t,l=0,u=i.length;l<u;++l){if(a==null)return null;a=a[i[l]]}return a}return null}},{key:"findDiffKeys",value:function(t,r){return!t||!r?{}:Object.keys(t).filter(function(o){return!r.hasOwnProperty(o)}).reduce(function(o,i){return o[i]=t[i],o},{})}},{key:"reduceKeys",value:function(t,r){var o={};return!t||!r||r.length===0||Object.keys(t).filter(function(i){return r.some(function(a){return i.startsWith(a)})}).forEach(function(i){o[i]=t[i],delete t[i]}),o}},{key:"reorderArray",value:function(t,r,o){t&&r!==o&&(o>=t.length&&(o%=t.length,r%=t.length),t.splice(o,0,t.splice(r,1)[0]))}},{key:"findIndexInList",value:function(t,r,o){var i=this;return r?o?r.findIndex(function(a){return i.equals(a,t,o)}):r.findIndex(function(a){return a===t}):-1}},{key:"getJSXElement",value:function(t){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return this.isFunction(t)?t.apply(void 0,o):t}},{key:"getItemValue",value:function(t){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return this.isFunction(t)?t.apply(void 0,o):t}},{key:"getProp",value:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=t?t[r]:void 0;return i===void 0?o[r]:i}},{key:"getPropCaseInsensitive",value:function(t,r){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=this.toFlatCase(r);for(var a in t)if(t.hasOwnProperty(a)&&this.toFlatCase(a)===i)return t[a];for(var l in o)if(o.hasOwnProperty(l)&&this.toFlatCase(l)===i)return o[l]}},{key:"getMergedProps",value:function(t,r){return Object.assign({},r,t)}},{key:"getDiffProps",value:function(t,r){return this.findDiffKeys(t,r)}},{key:"getPropValue",value:function(t){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return this.isFunction(t)?t.apply(void 0,o):t}},{key:"getComponentProp",value:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.isNotEmpty(t)?this.getProp(t.props,r,o):void 0}},{key:"getComponentProps",value:function(t,r){return this.isNotEmpty(t)?this.getMergedProps(t.props,r):void 0}},{key:"getComponentDiffProps",value:function(t,r){return this.isNotEmpty(t)?this.getDiffProps(t.props,r):void 0}},{key:"isValidChild",value:function(t,r,o){if(t){var i=this.getComponentProp(t,"__TYPE")||(t.type?t.type.displayName:void 0),a=i===r;try{var l}catch{}return a}return!1}},{key:"getRefElement",value:function(t){return t?ne(t)==="object"&&t.hasOwnProperty("current")?t.current:t:null}},{key:"combinedRefs",value:function(t,r){t&&r&&(typeof r=="function"?r(t.current):r.current=t.current)}},{key:"removeAccents",value:function(t){return t&&t.search(/[\xC0-\xFF]/g)>-1&&(t=t.replace(/[\xC0-\xC5]/g,"A").replace(/[\xC6]/g,"AE").replace(/[\xC7]/g,"C").replace(/[\xC8-\xCB]/g,"E").replace(/[\xCC-\xCF]/g,"I").replace(/[\xD0]/g,"D").replace(/[\xD1]/g,"N").replace(/[\xD2-\xD6\xD8]/g,"O").replace(/[\xD9-\xDC]/g,"U").replace(/[\xDD]/g,"Y").replace(/[\xDE]/g,"P").replace(/[\xE0-\xE5]/g,"a").replace(/[\xE6]/g,"ae").replace(/[\xE7]/g,"c").replace(/[\xE8-\xEB]/g,"e").replace(/[\xEC-\xEF]/g,"i").replace(/[\xF1]/g,"n").replace(/[\xF2-\xF6\xF8]/g,"o").replace(/[\xF9-\xFC]/g,"u").replace(/[\xFE]/g,"p").replace(/[\xFD\xFF]/g,"y")),t}},{key:"toFlatCase",value:function(t){return this.isNotEmpty(t)&&this.isString(t)?t.replace(/(-|_)/g,"").toLowerCase():t}},{key:"toCapitalCase",value:function(t){return this.isNotEmpty(t)&&this.isString(t)?t[0].toUpperCase()+t.slice(1):t}},{key:"trim",value:function(t){return this.isNotEmpty(t)&&this.isString(t)?t.trim():t}},{key:"isEmpty",value:function(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&ne(t)==="object"&&Object.keys(t).length===0}},{key:"isNotEmpty",value:function(t){return!this.isEmpty(t)}},{key:"isFunction",value:function(t){return!!(t&&t.constructor&&t.call&&t.apply)}},{key:"isObject",value:function(t){return t!==null&&t instanceof Object&&t.constructor===Object}},{key:"isDate",value:function(t){return t!==null&&t instanceof Date&&t.constructor===Date}},{key:"isArray",value:function(t){return t!==null&&Array.isArray(t)}},{key:"isString",value:function(t){return t!==null&&typeof t=="string"}},{key:"isPrintableCharacter",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return this.isNotEmpty(t)&&t.length===1&&t.match(/\S| /)}},{key:"isLetter",value:function(t){return t&&(t.toUpperCase()!=t.toLowerCase()||t.codePointAt(0)>127)}},{key:"findLast",value:function(t,r){var o;if(this.isNotEmpty(t))try{o=t.findLast(r)}catch{o=Xa(t).reverse().find(r)}return o}},{key:"findLastIndex",value:function(t,r){var o=-1;if(this.isNotEmpty(t))try{o=t.findLastIndex(r)}catch{o=t.lastIndexOf(Xa(t).reverse().find(r))}return o}},{key:"sort",value:function(t,r){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,i=arguments.length>3?arguments[3]:void 0,a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:1,l=this.compare(t,r,i,o),u=o;return(this.isEmpty(t)||this.isEmpty(r))&&(u=a===1?o:a),u*l}},{key:"compare",value:function(t,r,o){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,a=-1,l=this.isEmpty(t),u=this.isEmpty(r);return l&&u?a=0:l?a=i:u?a=-i:typeof t=="string"&&typeof r=="string"?a=o(t,r):a=t<r?-1:t>r?1:0,a}},{key:"localeComparator",value:function(t){return new Intl.Collator(t,{numeric:!0}).compare}},{key:"findChildrenByKey",value:function(t,r){var o=e5(t),i;try{for(o.s();!(i=o.n()).done;){var a=i.value;if(a.key===r)return a.children||[];if(a.children){var l=this.findChildrenByKey(a.children,r);if(l.length>0)return l}}}catch(u){o.e(u)}finally{o.f()}return[]}},{key:"mutateFieldData",value:function(t,r,o){if(!(ne(t)!=="object"||typeof r!="string"))for(var i=r.split("."),a=t,l=0,u=i.length;l<u;++l){if(l+1-u===0){a[i[l]]=o;break}a[i[l]]||(a[i[l]]={}),a=a[i[l]]}}}]),n}();function oc(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function r5(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?oc(Object(t),!0).forEach(function(r){kl(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):oc(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}var ic=function(){function n(){Os(this,n)}return Ms(n,null,[{key:"getJSXIcon",value:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=null;if(t!==null){var a=ne(t),l=pt(r.className,a==="string"&&t);if(i=j.createElement("span",hp({},r,{className:l})),a!=="string"){var u=r5({iconProps:r,element:i},o);return pn.getJSXElement(t,u)}}return i}}]),n}();function ac(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function lc(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?ac(Object(t),!0).forEach(function(r){kl(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):ac(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function ve(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];if(e){var r=function(i){return!!(i&&i.constructor&&i.call&&i.apply)};return e.reduce(function(o,i){var a=function(){var d=i[l];if(l==="style")o.style=lc(lc({},o.style),i.style);else if(l==="className"){var s=[o.className,i.className].join(" ").trim(),p=s==null||s==="";o.className=p?void 0:s}else if(r(d)){var c=o[l];o[l]=c?function(){c.apply(void 0,arguments),d.apply(void 0,arguments)}:d}else o[l]=d};for(var l in i)a();return o},{})}}var uc=0;function o5(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"pr_id_";return uc++,"".concat(n).concat(uc)}function i5(){var n=[],e=function(l,u){var d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:999,s=o(l,u,d),p=s.value+(s.key===l?0:d)+1;return n.push({key:l,value:p}),p},t=function(l){n=n.filter(function(u){return u.value!==l})},r=function(l,u){return o(l,u).value},o=function(l,u){var d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;return Xa(n).reverse().find(function(s){return u?!0:s.key===l})||{key:l,value:d}},i=function(l){return l&&parseInt(l.style.zIndex,10)||0};return{get:i,set:function(l,u,d,s){u&&(u.style.zIndex=String(e(l,d,s)))},clear:function(l){l&&(t(Ho.get(l)),l.style.zIndex="")},getCurrent:function(l,u){return r(l,u)}}}var Ho=i5(),wn=Object.freeze({STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter",CUSTOM:"custom"});function xi(n){"@babel/helpers - typeof";return xi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},xi(n)}function a5(n,e){if(xi(n)!=="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(xi(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function sm(n){var e=a5(n,"string");return xi(e)==="symbol"?e:String(e)}function Ye(n,e,t){return e=sm(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function pc(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,sm(r.key),r)}}function l5(n,e,t){return e&&pc(n.prototype,e),t&&pc(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function u5(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}var Ie=l5(function n(){u5(this,n)});Ye(Ie,"ripple",!1);Ye(Ie,"inputStyle","outlined");Ye(Ie,"locale","en");Ye(Ie,"appendTo",null);Ye(Ie,"cssTransition",!0);Ye(Ie,"autoZIndex",!0);Ye(Ie,"hideOverlaysOnDocumentScrolling",!1);Ye(Ie,"nonce",null);Ye(Ie,"nullSortOrder",1);Ye(Ie,"zIndex",{modal:1100,overlay:1e3,menu:1e3,tooltip:1100,toast:1200});Ye(Ie,"pt",void 0);Ye(Ie,"filterMatchModeOptions",{text:[wn.STARTS_WITH,wn.CONTAINS,wn.NOT_CONTAINS,wn.ENDS_WITH,wn.EQUALS,wn.NOT_EQUALS],numeric:[wn.EQUALS,wn.NOT_EQUALS,wn.LESS_THAN,wn.LESS_THAN_OR_EQUAL_TO,wn.GREATER_THAN,wn.GREATER_THAN_OR_EQUAL_TO],date:[wn.DATE_IS,wn.DATE_IS_NOT,wn.DATE_BEFORE,wn.DATE_AFTER]});Ye(Ie,"changeTheme",function(n,e,t,r){var o,i=document.getElementById(t),a=i.cloneNode(!0),l=i.getAttribute("href").replace(n,e);a.setAttribute("id",t+"-clone"),a.setAttribute("href",l),a.addEventListener("load",function(){i.remove(),a.setAttribute("id",t),r&&r()}),(o=i.parentNode)===null||o===void 0||o.insertBefore(a,i.nextSibling)});function p5(n){if(Array.isArray(n))return n}function s5(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,o,i,a,l=[],u=!0,d=!1;try{if(i=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;u=!1}else for(;!(u=(r=i.call(t)).done)&&(l.push(r.value),l.length!==e);u=!0);}catch(s){d=!0,o=s}finally{try{if(!u&&t.return!=null&&(a=t.return(),Object(a)!==a))return}finally{if(d)throw o}}return l}}function sc(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function d5(n,e){if(n){if(typeof n=="string")return sc(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return sc(n,e)}}function c5(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fe(n,e){return p5(n)||s5(n,e)||d5(n,e)||c5()}var Pr=ee.createContext(),f5=function(e){var t=e.value||{},r=j.useState(t.ripple||!1),o=Fe(r,2),i=o[0],a=o[1],l=j.useState(t.inputStyle||"outlined"),u=Fe(l,2),d=u[0],s=u[1],p=j.useState(t.locale||"en"),c=Fe(p,2),m=c[0],w=c[1],b=j.useState(t.appendTo||null),v=Fe(b,2),f=v[0],g=v[1],h=j.useState(t.cssTransition||!0),y=Fe(h,2),k=y[0],S=y[1],E=j.useState(t.autoZIndex||!0),A=Fe(E,2),M=A[0],B=A[1],O=j.useState(t.hideOverlaysOnDocumentScrolling||!1),z=Fe(O,2),K=z[0],L=z[1],X=j.useState(t.nonce||null),$=Fe(X,2),on=$[0],U=$[1],Q=j.useState(t.nullSortOrder||1),J=Fe(Q,2),un=J[0],dn=J[1],Y=j.useState(t.zIndex||{modal:1100,overlay:1e3,menu:1e3,tooltip:1100,toast:1200}),Sn=Fe(Y,2),An=Sn[0],Un=Sn[1],bn=j.useState(t.ptOptions||{mergeSections:!0,mergeProps:!0}),Vn=Fe(bn,2),Tn=Vn[0],pe=Vn[1],me=j.useState(t.pt||void 0),ge=Fe(me,2),$e=ge[0],ke=ge[1],kn=j.useState(t.unstyled||!1),De=Fe(kn,2),Re=De[0],Le=De[1],Ee=j.useState(t.filterMatchModeOptions||{text:[wn.STARTS_WITH,wn.CONTAINS,wn.NOT_CONTAINS,wn.ENDS_WITH,wn.EQUALS,wn.NOT_EQUALS],numeric:[wn.EQUALS,wn.NOT_EQUALS,wn.LESS_THAN,wn.LESS_THAN_OR_EQUAL_TO,wn.GREATER_THAN,wn.GREATER_THAN_OR_EQUAL_TO],date:[wn.DATE_IS,wn.DATE_IS_NOT,wn.DATE_BEFORE,wn.DATE_AFTER]}),Ce=Fe(Ee,2),je=Ce[0],Ke=Ce[1],C=function(N,D,F,T){var I,W=document.getElementById(F),q=W.cloneNode(!0),mn=W.getAttribute("href").replace(N,D);q.setAttribute("id",F+"-clone"),q.setAttribute("href",mn),q.addEventListener("load",function(){W.remove(),q.setAttribute("id",F),T&&T()}),(I=W.parentNode)===null||I===void 0||I.insertBefore(q,W.nextSibling)},_={changeTheme:C,ripple:i,setRipple:a,inputStyle:d,setInputStyle:s,locale:m,setLocale:w,appendTo:f,setAppendTo:g,cssTransition:k,setCssTransition:S,autoZIndex:M,setAutoZIndex:B,hideOverlaysOnDocumentScrolling:K,setHideOverlaysOnDocumentScrolling:L,nonce:on,setNonce:U,nullSortOrder:un,setNullSortOrder:dn,zIndex:An,setZIndex:Un,ptOptions:Tn,setPtOptions:pe,pt:$e,setPt:ke,filterMatchModeOptions:je,setFilterMatchModeOptions:Ke,unstyled:Re,setUnstyled:Le};return ee.createElement(Pr.Provider,{value:_},e.children)},tt=Ie;function b5(n){if(Array.isArray(n))return n}function m5(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,o,i,a,l=[],u=!0,d=!1;try{if(i=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;u=!1}else for(;!(u=(r=i.call(t)).done)&&(l.push(r.value),l.length!==e);u=!0);}catch(s){d=!0,o=s}finally{try{if(!u&&t.return!=null&&(a=t.return(),Object(a)!==a))return}finally{if(d)throw o}}return l}}function dc(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function g5(n,e){if(n){if(typeof n=="string")return dc(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return dc(n,e)}}function h5(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dm(n,e){return b5(n)||m5(n,e)||g5(n,e)||h5()}var v5=function(e){var t=j.useRef(void 0);return j.useEffect(function(){t.current=e}),t.current},Ii=function(e){return j.useEffect(function(){return e},[])},ki=function(e){var t=e.target,r=t===void 0?"document":t,o=e.type,i=e.listener,a=e.options,l=e.when,u=l===void 0?!0:l,d=j.useRef(null),s=j.useRef(null),p=v5(a),c=function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};pn.isNotEmpty(b.target)&&(m(),(b.when||u)&&(d.current=an.getTargetElement(b.target))),!s.current&&d.current&&(s.current=function(v){return i&&i(v)},d.current.addEventListener(o,s.current,a))},m=function(){s.current&&(d.current.removeEventListener(o,s.current,a),s.current=null)};return j.useEffect(function(){u?d.current=an.getTargetElement(r):(m(),d.current=null)},[r,u]),j.useEffect(function(){s.current&&(s.current!==i||p!==a)&&(m(),u&&c())},[i,a]),Ii(function(){m()}),[c,m]},w5=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,r=j.useState(!1),o=dm(r,2),i=o[0],a=o[1],l=j.useRef(null),u=function(c){return a(c.matches)},d=function(){return l.current&&l.current.addEventListener("change",u)},s=function(){return l.current&&l.current.removeEventListener("change",u)&&(l.current=null)};return j.useEffect(function(){return t&&(l.current=window.matchMedia(e),a(l.current.matches),d()),s},[e,t]),i},Dl=function(e){var t=j.useRef(!1);return j.useEffect(function(){if(!t.current)return t.current=!0,e&&e()},[])},y5=function(e){var t=e.listener,r=e.when,o=r===void 0?!0:r;return ki({target:"window",type:"resize",listener:t,when:o})},or=function(e,t){var r=j.useRef(!1);return j.useEffect(function(){if(!r.current){r.current=!0;return}return e&&e()},t)},x5=0,Wo=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=j.useState(!1),o=dm(r,2),i=o[0],a=o[1],l=j.useRef(null),u=j.useContext(Pr),d=an.isClient()?window.document:void 0,s=t.document,p=s===void 0?d:s,c=t.manual,m=c===void 0?!1:c,w=t.name,b=w===void 0?"style_".concat(++x5):w,v=t.id,f=v===void 0?void 0:v,g=t.media,h=g===void 0?void 0:g,y=function(A){i&&e!==A&&(l.current.textContent=A)},k=function(){p&&(l.current=p.querySelector('style[data-primereact-style-id="'.concat(b,'"]'))||p.getElementById(f)||p.createElement("style"),l.current.isConnected||(l.current.type="text/css",f&&(l.current.id=f),h&&(l.current.media=h),an.addNonce(l.current,u&&u.nonce||tt.nonce),p.head.appendChild(l.current),b&&l.current.setAttribute("data-primereact-style-id",b)),!i&&(l.current.textContent=e,a(!0)))},S=function(){!p||!l.current||(an.removeInlineStyle(l.current),a(!1))};return j.useEffect(function(){m||k()},[]),{id:f,name:b,update:y,unload:S,load:k,isLoaded:i}};function Di(n){"@babel/helpers - typeof";return Di=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Di(n)}function k5(n,e){if(Di(n)!=="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Di(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function D5(n){var e=k5(n,"string");return Di(e)==="symbol"?e:String(e)}function Ga(n,e,t){return e=D5(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function cc(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function fc(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?cc(Object(t),!0).forEach(function(r){Ga(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):cc(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function vp(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];if(e){var r=function(i){return!!(i&&i.constructor&&i.call&&i.apply)};return e.reduce(function(o,i){var a=function(){var d=i[l];if(l==="style")o.style=fc(fc({},o.style),i.style);else if(l==="className"){var s=[o.className,i.className].join(" ").trim(),p=s==null||s==="";o.className=p?void 0:s}else if(r(d)){var c=o[l];o[l]=c?function(){c.apply(void 0,arguments),d.apply(void 0,arguments)}:d}else o[l]=d};for(var l in i)a();return o},{})}}function bc(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function Xn(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?bc(Object(t),!0).forEach(function(r){Ga(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):bc(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}var E5=`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: var(--scrollbar-width);
}
`,C5=`
.p-button {
    margin: 0;
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    vertical-align: bottom;
    text-align: center;
    overflow: hidden;
    position: relative;
}

.p-button-label {
    flex: 1 1 auto;
}

.p-button-icon-right {
    order: 1;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-only {
    justify-content: center;
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
    flex: 0 0 auto;
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-icon-bottom {
    order: 2;
}

.p-buttonset .p-button {
    margin: 0;
}

.p-buttonset .p-button:not(:last-child) {
    border-right: 0 none;
}

.p-buttonset .p-button:not(:first-of-type):not(:last-of-type) {
    border-radius: 0;
}

.p-buttonset .p-button:first-of-type {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.p-buttonset .p-button:last-of-type {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.p-buttonset .p-button:focus {
    position: relative;
    z-index: 1;
}
`,S5=`
.p-checkbox {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    vertical-align: bottom;
    position: relative;
}

.p-checkbox.p-checkbox-disabled {
    cursor: auto;
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
}
`,A5=`
.p-inputtext {
    margin: 0;
}

.p-fluid .p-inputtext {
    width: 100%;
}

/* InputGroup */
.p-inputgroup {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup-addon {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-inputgroup .p-float-label {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-fluid .p-inputgroup .p-inputtext,
.p-inputgroup .p-inputwrapper,
.p-fluid .p-inputgroup .p-input {
    flex: 1 1 auto;
    width: 1%;
}

/* Floating Label */
.p-float-label {
    display: block;
    position: relative;
}

.p-float-label label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    margin-top: -0.5rem;
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
}

.p-float-label textarea ~ label,
.p-float-label .p-mention ~ label {
    top: 1rem;
}

.p-float-label input:focus ~ label,
.p-float-label input:-webkit-autofill ~ label,
.p-float-label input.p-filled ~ label,
.p-float-label textarea:focus ~ label,
.p-float-label textarea.p-filled ~ label,
.p-float-label .p-inputwrapper-focus ~ label,
.p-float-label .p-inputwrapper-filled ~ label,
.p-float-label .p-tooltip-target-wrapper ~ label {
    top: -0.75rem;
    font-size: 12px;
}

.p-float-label .p-placeholder,
.p-float-label input::placeholder,
.p-float-label .p-inputtext::placeholder {
    opacity: 0;
    transition-property: all;
    transition-timing-function: ease;
}

.p-float-label .p-focus .p-placeholder,
.p-float-label input:focus::placeholder,
.p-float-label .p-inputtext:focus::placeholder {
    opacity: 1;
    transition-property: all;
    transition-timing-function: ease;
}

.p-input-icon-left,
.p-input-icon-right {
    position: relative;
    display: inline-block;
}

.p-input-icon-left > i,
.p-input-icon-right > i,
.p-input-icon-left > svg,
.p-input-icon-right > svg,
.p-input-icon-left > .p-input-prefix,
.p-input-icon-right > .p-input-suffix {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
}

.p-fluid .p-input-icon-left,
.p-fluid .p-input-icon-right {
    display: block;
    width: 100%;
}
`,F5=`
.p-radiobutton {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    vertical-align: bottom;
}

.p-radiobutton-box {
    display: flex;
    justify-content: center;
    align-items: center;
}

.p-radiobutton-icon {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform: translateZ(0) scale(.1);
    border-radius: 50%;
    visibility: hidden;
}

.p-radiobutton-box.p-highlight .p-radiobutton-icon {
    transform: translateZ(0) scale(1.0, 1.0);
    visibility: visible;
}

`,_5=`
.p-icon {
    display: inline-block;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

svg.p-icon {
    pointer-events: auto;
}

svg.p-icon g {
    pointer-events: none;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,N5=`
@layer primereact {
    .p-component, .p-component * {
        box-sizing: border-box;
    }

    .p-hidden {
        display: none;
    }

    .p-hidden-space {
        visibility: hidden;
    }

    .p-reset {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        text-decoration: none;
        font-size: 100%;
        list-style: none;
    }

    .p-disabled, .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-component-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-unselectable-text {
        user-select: none;
    }

    .p-scrollbar-measure {
        width: 100px;
        height: 100px;
        overflow: scroll;
        position: absolute;
        top: -9999px;
    }

    @-webkit-keyframes p-fadein {
      0%   { opacity: 0; }
      100% { opacity: 1; }
    }
    @keyframes p-fadein {
      0%   { opacity: 0; }
      100% { opacity: 1; }
    }

    .p-link {
        text-align: left;
        background-color: transparent;
        margin: 0;
        padding: 0;
        border: none;
        cursor: pointer;
        user-select: none;
    }

    .p-link:disabled {
        cursor: default;
    }

    /* Non react overlay animations */
    .p-connected-overlay {
        opacity: 0;
        transform: scaleY(0.8);
        transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-visible {
        opacity: 1;
        transform: scaleY(1);
    }

    .p-connected-overlay-hidden {
        opacity: 0;
        transform: scaleY(1);
        transition: opacity .1s linear;
    }

    /* React based overlay animations */
    .p-connected-overlay-enter {
        opacity: 0;
        transform: scaleY(0.8);
    }

    .p-connected-overlay-enter-active {
        opacity: 1;
        transform: scaleY(1);
        transition: transform .12s cubic-bezier(0, 0, 0.2, 1), opacity .12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-enter-done {
        transform: none;
    }

    .p-connected-overlay-exit {
        opacity: 1;
    }

    .p-connected-overlay-exit-active {
        opacity: 0;
        transition: opacity .1s linear;
    }

    /* Toggleable Content */
    .p-toggleable-content-enter {
        max-height: 0;
    }

    .p-toggleable-content-enter-active {
        overflow: hidden;
        max-height: 1000px;
        transition: max-height 1s ease-in-out;
    }

    .p-toggleable-content-enter-done {
        transform: none;
    }

    .p-toggleable-content-exit {
        max-height: 1000px;
    }

    .p-toggleable-content-exit-active {
        overflow: hidden;
        max-height: 0;
        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
    }

    .p-sr-only {
        border: 0;
        clip: rect(1px, 1px, 1px, 1px);
        clip-path: inset(50%);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
        word-wrap: normal;
    }

    /* @todo Refactor */
    .p-menu .p-menuitem-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }

    `.concat(C5,`
    `).concat(S5,`
    `).concat(A5,`
    `).concat(F5,`
    `).concat(_5,`
}
`),Hn={cProps:void 0,cParams:void 0,cName:void 0,defaultProps:{pt:void 0,ptOptions:void 0,unstyled:!1},context:{},globalCSS:void 0,classes:{},styles:"",extend:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.css,r=Xn(Xn({},e.defaultProps),Hn.defaultProps),o={},i=function(s){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Hn.context=p,Hn.cProps=s,pn.getMergedProps(s,r)},a=function(s){return pn.getDiffProps(s,r)},l=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},m=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0;s.hasOwnProperty("pt")&&s.pt!==void 0&&(s=s.pt);var w=c.hostName&&pn.toFlatCase(c.hostName),b=w||c.props&&c.props.__TYPE&&pn.toFlatCase(c.props.__TYPE)||"",v=/./g.test(p)&&!!c[p.split(".")[0]],f=p==="transition"||/./g.test(p)&&p.split(".")[1]==="transition",g="data-pc-",h=v?pn.toFlatCase(p.split(".")[1]):pn.toFlatCase(p),y=function X($){return $!=null&&$.props?$.hostName?$.props.__TYPE===$.hostName?$.props:X($.parent):$.parent:void 0},k=function($){var on,U;return((on=c.props)===null||on===void 0?void 0:on[$])||((U=y(c))===null||U===void 0?void 0:U[$])};Hn.cParams=c,Hn.cName=b;var S=k("ptOptions")||Hn.context.ptOptions||{},E=S.mergeSections,A=E===void 0?!0:E,M=S.mergeProps,B=M===void 0?!1:M,O=function(){var $=Qt.apply(void 0,arguments);return pn.isString($)?{className:$}:$},z=m?v?cm(O,p,c):fm(O,p,c):void 0,K=v?void 0:Cl(El(s,b),O,p,c),L=!f&&Xn(Xn({},h==="root"&&Ga({},"".concat(g,"name"),c.props&&c.props.__parentMetadata?pn.toFlatCase(c.props.__TYPE):b)),{},Ga({},"".concat(g,"section"),h));return A||!A&&K?B?vp(z,K,Object.keys(L).length?L:{}):Xn(Xn(Xn({},z),K),Object.keys(L).length?L:{}):Xn(Xn({},K),Object.keys(L).length?L:{})},u=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},p=s.props,c=s.state,m=function(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return l((p||{}).pt,h,Xn(Xn({},s),y))},w=function(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",k=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return l(h,y,k,!1)},b=function(){return Hn.context.unstyled||tt.unstyled||p.unstyled},v=function(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return b()?void 0:Qt(t&&t.classes,h,Xn({props:p,state:c},y))},f=function(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},k=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(k){var S=Qt(t&&t.inlineStyles,h,Xn({props:p,state:c},y)),E=Qt(o,h,Xn({props:p,state:c},y));return vp(E,S)}};return{ptm:m,ptmo:w,sx:f,cx:v,isUnstyled:b}};return Xn(Xn({getProps:i,getOtherProps:a,setMetaData:u},e),{},{defaultProps:r})}},Qt=function n(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=String(pn.toFlatCase(t)).split("."),i=o.shift(),a=pn.isNotEmpty(e)?Object.keys(e).find(function(l){return pn.toFlatCase(l)===i}):"";return i?pn.isObject(e)?n(pn.getItemValue(e[a],r),o.join("."),r):void 0:pn.getItemValue(e,r)},El=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,o=e==null?void 0:e._usept,i=function(l){var u,d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=r?r(l):l,p=pn.toFlatCase(t);return(u=d?p!==Hn.cName?s==null?void 0:s[p]:void 0:s==null?void 0:s[p])!==null&&u!==void 0?u:s};return pn.isNotEmpty(o)?{_usept:o,originalValue:i(e.originalValue),value:i(e.value)}:i(e,!0)},Cl=function(e,t,r,o){var i=function(w){return t(w,r,o)};if(e!=null&&e.hasOwnProperty("_usept")){var a=e._usept||Hn.context.ptOptions||{},l=a.mergeSections,u=l===void 0?!0:l,d=a.mergeProps,s=d===void 0?!1:d,p=i(e.originalValue),c=i(e.value);return p===void 0&&c===void 0?void 0:pn.isString(c)?c:pn.isString(p)?p:u||!u&&c?s?vp(p,c):Xn(Xn({},p),c):c}return i(e)},P5=function(){return El(Hn.context.pt||tt.pt,void 0,function(e){return pn.getItemValue(e,Hn.cParams)})},T5=function(){return El(Hn.context.pt||tt.pt,void 0,function(e){return Qt(e,Hn.cName,Hn.cParams)||pn.getItemValue(e,Hn.cParams)})},cm=function(e,t,r){return Cl(P5(),e,t,r)},fm=function(e,t,r){return Cl(T5(),e,t,r)},bm=function(e){var t=arguments.length>2?arguments[2]:void 0,r=t.name,o=t.styled,i=o===void 0?!1:o,a=t.hostName,l=a===void 0?"":a,u=cm(Qt,"global.css",Hn.cParams),d=pn.toFlatCase(r),s=Wo(E5,{name:"base",manual:!0}),p=s.load,c=Wo(N5,{name:"common",manual:!0}),m=c.load,w=Wo(u,{name:"global",manual:!0}),b=w.load,v=Wo(e,{name:r,manual:!0}),f=v.load,g=function(y){if(!l){var k=Cl(El((Hn.cProps||{}).pt,d),Qt,"hooks.".concat(y)),S=fm(Qt,"hooks.".concat(y));k==null||k(),S==null||S()}};g("useMountEffect"),Dl(function(){p(),b(),m(),i||f()}),or(function(){g("useUpdateEffect")}),Ii(function(){g("useUnmountEffect")})};function wp(){return wp=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},wp.apply(this,arguments)}function yp(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function O5(n){if(Array.isArray(n))return yp(n)}function M5(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function mm(n,e){if(n){if(typeof n=="string")return yp(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return yp(n,e)}}function B5(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function z5(n){return O5(n)||M5(n)||mm(n)||B5()}function Ei(n){"@babel/helpers - typeof";return Ei=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ei(n)}function I5(n,e){if(Ei(n)!=="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Ei(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function $5(n){var e=I5(n,"string");return Ei(e)==="symbol"?e:String(e)}function R5(n,e,t){return e=$5(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function L5(n){if(Array.isArray(n))return n}function j5(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,o,i,a,l=[],u=!0,d=!1;try{if(i=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;u=!1}else for(;!(u=(r=i.call(t)).done)&&(l.push(r.value),l.length!==e);u=!0);}catch(s){d=!0,o=s}finally{try{if(!u&&t.return!=null&&(a=t.return(),Object(a)!==a))return}finally{if(d)throw o}}return l}}function q5(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function la(n,e){return L5(n)||j5(n,e)||mm(n,e)||q5()}var U5={root:function(e){var t=e.props;return pt("p-splitter p-component p-splitter-".concat(t.layout))},gutter:"p-splitter-gutter",gutterHandler:"p-splitter-gutter-handle",panel:{root:"p-splitter-panel"}},H5=`
@layer primereact {
    .p-splitter {
        display: flex;
        flex-wrap: nowrap;
    }
    
    .p-splitter-vertical {
        flex-direction: column;
    }
    
    .p-splitter-panel {
        flex-grow: 1;
    }
    
    .p-splitter-panel-nested {
        display: flex;
    }
    
    .p-splitter-panel .p-splitter {
        flex-grow: 1;
        border: 0 none;
    }
    
    .p-splitter-gutter {
        flex-grow: 0;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: col-resize;
    }
    
    .p-splitter-horizontal.p-splitter-resizing {
        cursor: col-resize;
        user-select: none;
    }
    
    .p-splitter-horizontal > .p-splitter-gutter > .p-splitter-gutter-handle {
        height: 24px;
        width: 100%;
    }
    
    .p-splitter-horizontal > .p-splitter-gutter {
        cursor: col-resize;
    }
    
    .p-splitter-vertical.p-splitter-resizing {
        cursor: row-resize;
        user-select: none;
    }
    
    .p-splitter-vertical > .p-splitter-gutter {
        cursor: row-resize;
    }
    
    .p-splitter-vertical > .p-splitter-gutter > .p-splitter-gutter-handle {
        width: 24px;
        height: 100%;
    }
}

`,ua=Hn.extend({defaultProps:{__TYPE:"Splitter",className:null,gutterSize:4,id:null,layout:"horizontal",onResizeEnd:null,stateKey:null,stateStorage:"session",style:null,children:void 0},css:{classes:U5,styles:H5}}),Ea=Hn.extend({defaultProps:{__TYPE:"SplitterPanel",className:null,minSize:null,size:null,style:null,children:void 0},getCProps:function(e){return pn.getComponentProps(e,Ea.defaultProps)},getCOtherProps:function(e){return pn.getComponentDiffProps(e,Ea.defaultProps)},getCProp:function(e,t){return pn.getComponentProp(e,t,Ea.defaultProps)}});function mc(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function fu(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?mc(Object(t),!0).forEach(function(r){R5(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):mc(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}var Vo=function(){},xp=j.memo(j.forwardRef(function(n,e){var t=j.useContext(Pr),r=ua.getProps(n,t),o=j.useRef(null),i=j.useRef(),a=j.useRef({}),l=j.useRef(null),u=j.useRef(null),d=j.useRef(null),s=j.useRef(null),p=j.useRef(null),c=j.useRef(null),m=j.useRef(null),w=j.useRef(null),b=j.useRef(null),v=j.useRef(null),f=j.useState([]),g=la(f,2),h=g[0],y=g[1],k=j.useState(!1),S=la(k,2),E=S[0],A=S[1],M=r.stateKey!=null,B=r.children&&r.children.length||1,O=function(N,D){return D in N?N[D]:r.children&&[].concat(r.children)[D].props.size||100/B},z={props:r,state:{panelSizes:h,nested:an.getAttribute(o.current&&o.current.parentElement,"data-p-splitter-panel-nested")===!0}},K=ua.setMetaData(fu({},z)),L=K.ptm,X=K.cx,$=K.isUnstyled;bm(ua.css.styles,$,{name:"splitter"});var on=function(N){return L(N,{context:{nested:E}})},U=ki({type:"mousemove",listener:function(N){return kn(N)}}),Q=la(U,2),J=Q[0],un=Q[1],dn=ki({type:"mouseup",listener:function(N){De(N),bn()}}),Y=la(dn,2),Sn=Y[0],An=Y[1],Un=function(){J(),Sn()},bn=function(){un(),An()},Vn=function(N,D){return Ea.getCProp(N,D)},Tn=function(N,D){return!(N>100||N<0||D>100||D<0||r.children[v.current].props&&r.children[v.current].props.minSize&&r.children[v.current].props.minSize>N||r.children[v.current+1].props&&r.children[v.current+1].props.minSize&&r.children[v.current+1].props.minSize>D)},pe=function(){u.current=!1,l.current=null,d.current=null,s.current=null,p.current=null,c.current=null,m.current=null,w.current=null,b.current=null,v.current=null},me=j.useCallback(function(){switch(r.stateStorage){case"local":return window.localStorage;case"session":return window.sessionStorage;default:throw new Error(r.stateStorage+' is not a valid value for the state storage, supported values are "local" and "session".')}},[r.stateStorage]),ge=function(N){pn.isArray(N)&&me().setItem(r.stateKey,JSON.stringify(N))},$e=j.useCallback(function(){var x=me().getItem(r.stateKey);x&&y(JSON.parse(x))},[me,r.stateKey]),ke=function(N,D){i.current=a.current[D];var F=N.type==="touchstart"?N.touches[0].pageX:N.pageX,T=N.type==="touchstart"?N.touches[0].pageY:N.pageY;l.current=r.layout==="horizontal"?an.getWidth(o.current):an.getHeight(o.current),u.current=!0,d.current=r.layout==="horizontal"?F:T,s.current=i.current.previousElementSibling,p.current=i.current.nextElementSibling,c.current=100*(r.layout==="horizontal"?an.getOuterWidth(s.current,!0):an.getOuterHeight(s.current,!0))/l.current,m.current=c.current,w.current=100*(r.layout==="horizontal"?an.getOuterWidth(p.current,!0):an.getOuterHeight(p.current,!0))/l.current,b.current=w.current,v.current=D,!$()&&an.addClass(i.current,"p-splitter-gutter-resizing"),i.current.setAttribute("data-p-splitter-gutter-resizing",!0),!$()&&an.addClass(o.current,"p-splitter-resizing"),o.current.setAttribute("data-p-splitter-resizing",!0)},kn=function(N){var D,F=N.type==="touchmove"?N.touches[0].pageX:N.pageX,T=N.type==="touchmove"?N.touches[0].pageY:N.pageY;r.layout==="horizontal"?D=F*100/l.current-d.current*100/l.current:D=T*100/l.current-d.current*100/l.current;var I=c.current+D,W=w.current-D;Tn(I,W)&&(m.current=I,b.current=W,s.current.style.flexBasis="calc("+I+"% - "+(r.children.length-1)*r.gutterSize+"px)",p.current.style.flexBasis="calc("+W+"% - "+(r.children.length-1)*r.gutterSize+"px)")},De=function(N){y(function(D){for(var F=[],T=0;T<r.children.length;T++)F[T]=O(D,T);return F[v.current]=m.current,F[v.current+1]=b.current,r.onResizeEnd&&r.onResizeEnd({originalEvent:N,sizes:F}),M&&ge(F),F}),!$()&&an.removeClass(i.current,"p-splitter-gutter-resizing"),i.current.setAttribute("data-p-splitter-gutter-resizing",!1),!$()&&an.removeClass(o.current,"p-splitter-resizing"),o.current.setAttribute("data-p-splitter-resizing",!1),pe()},Re=function(N,D){ke(N,D),Un()},Le=function(N,D){ke(N,D),window.addEventListener("touchmove",Ee,{passive:!1,cancelable:!1}),window.addEventListener("touchend",Ce)},Ee=function(N){kn(N)},Ce=function x(N){De(N),window.removeEventListener("touchmove",Ee),window.removeEventListener("touchend",x)};j.useImperativeHandle(e,function(){return{props:r,getElement:function(){return o.current}}}),j.useEffect(function(){var x=z5(o.current.children).filter(function(N){return an.getAttribute(N,"data-pc-section")==="splitterpanel.root"});x.map(function(N){N.childNodes&&pn.isNotEmpty(an.find(N,"[data-pc-name='splitter']")&&an.find(N,"[data-pc-section='root']"))&&(!$()&&an.addClass(N,"p-splitter-panel-nested"),N.setAttribute("data-p-splitter-panel-nested",!0),A(!0))})},[]),j.useEffect(function(){M&&$e()},[$e,M]);var je=function(N,D){var F=pt(Vn(N,"className"),X("panel.root")),T=ve({ref:function(hn){return a.current[D]=hn},className:X("gutter"),style:r.layout==="horizontal"?{width:r.gutterSize+"px"}:{height:r.gutterSize+"px"},onMouseDown:function(hn){return Re(hn,D)},onTouchStart:function(hn){return Le(hn,D)},onTouchMove:function(hn){return Ee(hn)},onTouchEnd:function(hn){return Ce(hn)},"data-p-splitter-gutter-resizing":!1},L("gutter")),I=ve({className:X("gutterHandler")},L("gutterHandler")),W=D!==r.children.length-1&&j.createElement("div",T,j.createElement("div",I)),q="calc("+O(h,D)+"% - "+(B-1)*r.gutterSize+"px)",mn=ve({key:D,id:Vn(N,"id"),className:F,style:fu(fu({},Vn(N,"style")),{},{flexBasis:q}),role:"presentation","data-p-splitter-panel-nested":!1},on("splitterpanel.root"));return j.createElement(j.Fragment,null,j.createElement("div",mn,Vn(N,"children")),W)},Ke=function(){return j.Children.map(r.children,je)},C=ve({id:r.id,style:r.style,className:pt(r.className,X("root")),"data-p-splitter-resizing":!1},ua.getOtherProps(r),L("root")),_=Ke();return j.createElement("div",wp({ref:o},C),_)}));Vo.displayName="SplitterPanel";xp.displayName="Splitter";class gm extends ee.Component{constructor(e){super(e),this.nameRef=ee.createRef(),this.canvasRef=ee.createRef(),this.names=[],this.value_lbls=[],this.insideDiv=!1,this.canvasWidth=this.props.width*.85-5,this.canvasHeight=this.props.height-5,this.state={split:15},this.style={position:"absolute",top:`${this.props.top}px`,left:`${this.props.left}px`,height:`${this.props.height}px`,width:`${this.props.width}px`},this.panel_style={position:"relative",height:`${this.props.height-5}px`,overflow:"auto"}}drawNames(){if(this.props.data!=null){this.names=[];for(let e=0;e<this.props.data.signals.length&&!(e*50+100>=this.canvasHeight);e++){const t={position:"absolute",top:`${10+50*e}px`,left:"10px"},r=this.props.data.signals[e].name.slice(-1),o=Cn.jsxs("label",{style:t,children:[" ",`${r}`]},`k${e}`);this.names.push(o)}}}render(){const e=r=>{this.insideDiv=!this.insideDiv,this.setState({split:35})};if(this.props.data==null)return Cn.jsxs(xp,{style:this.style,pt:{gutter:{onDoubleClick:e}},children:[Cn.jsx(Vo,{className:"flex align-items-center justify-content-center",size:this.state.split,minSize:10}),Cn.jsx(Vo,{className:"flex align-items-center justify-content-center",size:100-this.state.split,minSize:10,children:"Right click to select VCD file."})]});this.props.data!=null&&(this.canvasWidth=20*this.props.data.sim_end_time/this.props.data.time_scale+40,this.canvasWidth=Math.min(this.canvasWidth,15e3),this.canvasHeight=50*this.props.data.signals.length+100,this.canvasHeight=Math.min(this.canvasHeight,1e4)),`${this.canvasHeight}`,this.drawNames();function t(r,o){return i=>{r.current.scrollTop!=o.current.scrollTop&&(r.current.scrollTop=o.current.scrollTop)}}return console.log("WaveformWindow rendered. Split = ",this.state.split),Cn.jsxs(xp,{style:this.style,pt:{gutter:{onDoubleClick:e}},children:[Cn.jsx(Vo,{size:this.state.split,minSize:10,style:{overflow:"hidden"},className:"flex align-items-center justify-content-center",children:Cn.jsx("div",{ref:this.nameRef,style:this.panel_style,onScroll:t(this.canvasRef,this.nameRef),children:Cn.jsx("div",{style:{height:this.canvasHeight},children:this.names})})}),Cn.jsx(Vo,{size:100-this.state.split,minSize:10,style:{overflow:"hidden"},className:"flex align-items-center justify-content-center",children:Cn.jsx("div",{ref:this.canvasRef,style:this.panel_style,onScroll:t(this.nameRef,this.canvasRef),children:Cn.jsx(Wh,{data:this.props.data,canvasWidth:this.canvasWidth,canvasHeight:this.canvasHeight})})})]})}}gm.propTypes={width:aa.number.isRequired,height:aa.number.isRequired,left:aa.number.isRequired,top:aa.number.isRequired};function W5(n,e,t){const r=new FileReader;return e&&(t==null&&(t=n.size-e-1),n=n.slice(e,e+t)),r.readAsText(n),new Promise((o,i)=>{r.onload=a=>{o(a.target.result)},r.onerror=a=>i()})}function V5(n=null){let e=document.createElement("input");return e.type="file",n&&(e.accept=n),new Promise((t,r)=>{e.onchange=o=>{if(e.files.length==0){r();return}let i=Array.from(e.files)[0];W5(i).then(t)},e.click()})}function Z5(n,e){function t(){this.constructor=n}t.prototype=e.prototype,n.prototype=new t}function mo(n,e,t,r){var o=Error.call(this,n);return Object.setPrototypeOf&&Object.setPrototypeOf(o,mo.prototype),o.expected=e,o.found=t,o.location=r,o.name="SyntaxError",o}Z5(mo,Error);function bu(n,e,t){return t=t||" ",n.length>e?n:(e-=n.length,t+=t.repeat(e),n+t.slice(0,e))}mo.prototype.format=function(n){var e="Error: "+this.message;if(this.location){var t=null,r;for(r=0;r<n.length;r++)if(n[r].source===this.location.source){t=n[r].text.split(/\r\n|\n|\r/g);break}var o=this.location.start,i=this.location.source&&typeof this.location.source.offset=="function"?this.location.source.offset(o):o,a=this.location.source+":"+i.line+":"+i.column;if(t){var l=this.location.end,u=bu("",i.line.toString().length," "),d=t[o.line-1],s=o.line===l.line?l.column:d.length+1,p=s-o.column||1;e+=`
 --> `+a+`
`+u+` |
`+i.line+" | "+d+`
`+u+" | "+bu("",o.column-1," ")+bu("",p,"^")}else e+=`
 at `+a}return e};mo.buildMessage=function(n,e){var t={literal:function(d){return'"'+o(d.text)+'"'},class:function(d){var s=d.parts.map(function(p){return Array.isArray(p)?i(p[0])+"-"+i(p[1]):i(p)});return"["+(d.inverted?"^":"")+s.join("")+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(d){return d.description}};function r(d){return d.charCodeAt(0).toString(16).toUpperCase()}function o(d){return d.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(s){return"\\x0"+r(s)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(s){return"\\x"+r(s)})}function i(d){return d.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(s){return"\\x0"+r(s)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(s){return"\\x"+r(s)})}function a(d){return t[d.type](d)}function l(d){var s=d.map(a),p,c;if(s.sort(),s.length>0){for(p=1,c=1;p<s.length;p++)s[p-1]!==s[p]&&(s[c]=s[p],c++);s.length=c}switch(s.length){case 1:return s[0];case 2:return s[0]+" or "+s[1];default:return s.slice(0,-1).join(", ")+", or "+s[s.length-1]}}function u(d){return d?'"'+o(d)+'"':"end of input"}return"Expected "+l(n)+" but "+u(e)+" found."};function Q5(n,e){e=e!==void 0?e:{};var t={},r=e.grammarSource,o={top:Se},i=Se,a="$date",l="$end",u="$version",d="$comment",s="$timescale",p="$scope",c="$upscope",m="$var",w="$enddefinitions",b="wire",v="reg",f="integer",g="[",h=":",y="]",k=/^[a-zA-Z]/,S=/^[^$]/,E=/^[0-9]/,A=/^[^ ]/,M=/^[ \t\n\r]/,B=W("$date",!1),O=W("$end",!1),z=W("$version",!1),K=W("$comment",!1),L=W("$timescale",!1),X=W("$scope",!1),$=q([["a","z"],["A","Z"]],!1,!1),on=W("$upscope",!1),U=W("$var",!1),Q=W("$enddefinitions",!1),J=q(["$"],!0,!1),un=q([["0","9"]],!1,!1),dn=W("wire",!1),Y=W("reg",!1),Sn=W("integer",!1),An=q([" "],!0,!1),Un=W("[",!1),bn=W(":",!1),Vn=W("]",!1),Tn=gn("whitespace"),pe=q([" ","	",`
`,"\r"],!1,!1),me=function(P,R,V,G,sn){return{date:P,version:R,comment:V,timescale:G,scopes:sn.scopes}},ge=function(P){return P},$e=function(P){return P},ke=function(P){return P},kn=function(P){return P},De=function(P,R){return{type:P.join(""),name:R}},Re=function(){},Le=function(P,R,V,G,sn){return{kind:"var",width:R,name:G,ref:V,type:P,range:sn}},Ee=function(P){let R=[],V=[];function G(sn){sn=sn[0],sn.kind=="var"?(delete sn.kind,R.push(sn)):sn.kind=="scope"&&(delete sn.kind,V.push(sn))}return P.forEach(G),{vars:R,scopes:V}},Ce=function(P,R){return{kind:"scope",type:P.type,name:P.name,scopes:R.scopes,vars:R.vars}},je=function(P){return P.join("").replace(`
`," ").trim()},Ke=function(P){return Number(P.join())},C=function(P){return P.join("")},_=function(P,R){return R},x=0,N=[{line:1,column:1}],D=0,F=[],T=0,I;if("startRule"in e){if(!(e.startRule in o))throw new Error(`Can't start parsing from rule "`+e.startRule+'".');i=o[e.startRule]}function W(P,R){return{type:"literal",text:P,ignoreCase:R}}function q(P,R,V){return{type:"class",parts:P,inverted:R,ignoreCase:V}}function mn(){return{type:"end"}}function gn(P){return{type:"other",description:P}}function hn(P){var R=N[P],V;if(R)return R;for(V=P-1;!N[V];)V--;for(R=N[V],R={line:R.line,column:R.column};V<P;)n.charCodeAt(V)===10?(R.line++,R.column=1):R.column++,V++;return N[P]=R,R}function re(P,R,V){var G=hn(P),sn=hn(R),Ln={source:r,start:{offset:P,line:G.line,column:G.column},end:{offset:R,line:sn.line,column:sn.column}};return V&&r&&typeof r.offset=="function"&&(Ln.start=r.offset(Ln.start),Ln.end=r.offset(Ln.end)),Ln}function rn(P){x<D||(x>D&&(D=x,F=[]),F.push(P))}function qe(P,R,V){return new mo(mo.buildMessage(P,R),P,R,V)}function Se(){var P,R,V,G,sn,Ln,Dt;return P=x,R=Rt(),R===t&&(R=null),cn(),V=Or(),V===t&&(V=null),cn(),G=Co(),G===t&&(G=null),cn(),sn=Ml(),sn!==t?(cn(),Ln=Li(),cn(),Dt=Il(),Dt!==t?(cn(),P=me(R,V,G,sn,Ln)):(x=P,P=t)):(x=P,P=t),P}function Rt(){var P,R,V,G;return P=x,n.substr(x,5)===a?(R=a,x+=5):(R=t,T===0&&rn(B)),R!==t?(cn(),V=Mr(),cn(),n.substr(x,4)===l?(G=l,x+=4):(G=t,T===0&&rn(O)),G!==t?P=ge(V):(x=P,P=t)):(x=P,P=t),P}function Or(){var P,R,V,G;return P=x,n.substr(x,8)===u?(R=u,x+=8):(R=t,T===0&&rn(z)),R!==t?(cn(),V=Mr(),cn(),n.substr(x,4)===l?(G=l,x+=4):(G=t,T===0&&rn(O)),G!==t?P=$e(V):(x=P,P=t)):(x=P,P=t),P}function Co(){var P,R,V,G;return P=x,n.substr(x,8)===d?(R=d,x+=8):(R=t,T===0&&rn(K)),R!==t?(cn(),V=Mr(),cn(),n.substr(x,4)===l?(G=l,x+=4):(G=t,T===0&&rn(O)),G!==t?P=ke(V):(x=P,P=t)):(x=P,P=t),P}function Ml(){var P,R,V,G;return P=x,n.substr(x,10)===s?(R=s,x+=10):(R=t,T===0&&rn(L)),R!==t?(cn(),V=Mr(),cn(),n.substr(x,4)===l?(G=l,x+=4):(G=t,T===0&&rn(O)),G!==t?P=kn(V):(x=P,P=t)):(x=P,P=t),P}function Bl(){var P,R,V,G,sn,Ln;if(P=x,n.substr(x,6)===p?(R=p,x+=6):(R=t,T===0&&rn(X)),R!==t){if(cn(),V=[],k.test(n.charAt(x))?(G=n.charAt(x),x++):(G=t,T===0&&rn($)),G!==t)for(;G!==t;)V.push(G),k.test(n.charAt(x))?(G=n.charAt(x),x++):(G=t,T===0&&rn($));else V=t;V!==t?(G=cn(),sn=Ao(),sn!==t?(cn(),n.substr(x,4)===l?(Ln=l,x+=4):(Ln=t,T===0&&rn(O)),Ln!==t?P=De(V,sn):(x=P,P=t)):(x=P,P=t)):(x=P,P=t)}else x=P,P=t;return P}function zl(){var P,R,V;return P=x,n.substr(x,8)===c?(R=c,x+=8):(R=t,T===0&&rn(on)),R!==t?(cn(),n.substr(x,4)===l?(V=l,x+=4):(V=t,T===0&&rn(O)),V!==t?P=Re():(x=P,P=t)):(x=P,P=t),P}function Ri(){var P,R,V,G,sn,Ln,Dt,Fo;return P=x,n.substr(x,4)===m?(R=m,x+=4):(R=t,T===0&&rn(U)),R!==t?(cn(),V=$l(),V!==t?(cn(),G=So(),G!==t?(cn(),sn=Ao(),sn!==t?(cn(),Ln=Ao(),Ln!==t?(cn(),Dt=Rl(),Dt===t&&(Dt=null),cn(),n.substr(x,4)===l?(Fo=l,x+=4):(Fo=t,T===0&&rn(O)),Fo!==t?(cn(),P=Le(V,G,sn,Ln,Dt)):(x=P,P=t)):(x=P,P=t)):(x=P,P=t)):(x=P,P=t)):(x=P,P=t)):(x=P,P=t),P}function Li(){var P,R,V,G,sn;for(P=x,R=[],V=x,G=Ri(),G===t&&(G=ji(),G===t&&(G=Co())),G!==t?(sn=cn(),G=[G,sn],V=G):(x=V,V=t);V!==t;)R.push(V),V=x,G=Ri(),G===t&&(G=ji(),G===t&&(G=Co())),G!==t?(sn=cn(),G=[G,sn],V=G):(x=V,V=t);return R=Ee(R),P=R,P}function ji(){var P,R,V,G;return P=x,R=Bl(),R!==t?(cn(),V=Li(),V!==t?(cn(),G=zl(),G!==t?P=Ce(R,V):(x=P,P=t)):(x=P,P=t)):(x=P,P=t),P}function Il(){var P,R,V,G;return P=x,n.substr(x,15)===w?(R=w,x+=15):(R=t,T===0&&rn(Q)),R!==t?(V=cn(),n.substr(x,4)===l?(G=l,x+=4):(G=t,T===0&&rn(O)),G!==t?(R=[R,V,G],P=R):(x=P,P=t)):(x=P,P=t),P}function Mr(){var P,R,V;for(P=x,R=[],S.test(n.charAt(x))?(V=n.charAt(x),x++):(V=t,T===0&&rn(J));V!==t;)R.push(V),S.test(n.charAt(x))?(V=n.charAt(x),x++):(V=t,T===0&&rn(J));return R=je(R),P=R,P}function So(){var P,R,V;if(P=x,R=[],E.test(n.charAt(x))?(V=n.charAt(x),x++):(V=t,T===0&&rn(un)),V!==t)for(;V!==t;)R.push(V),E.test(n.charAt(x))?(V=n.charAt(x),x++):(V=t,T===0&&rn(un));else R=t;return R!==t&&(R=Ke(R)),P=R,P}function $l(){var P;return n.substr(x,4)===b?(P=b,x+=4):(P=t,T===0&&rn(dn)),P===t&&(n.substr(x,3)===v?(P=v,x+=3):(P=t,T===0&&rn(Y)),P===t&&(n.substr(x,7)===f?(P=f,x+=7):(P=t,T===0&&rn(Sn)))),P}function Ao(){var P,R,V;if(P=x,R=[],A.test(n.charAt(x))?(V=n.charAt(x),x++):(V=t,T===0&&rn(An)),V!==t)for(;V!==t;)R.push(V),A.test(n.charAt(x))?(V=n.charAt(x),x++):(V=t,T===0&&rn(An));else R=t;return R!==t&&(R=C(R)),P=R,P}function Rl(){var P,R,V,G,sn,Ln;return P=x,n.charCodeAt(x)===91?(R=g,x++):(R=t,T===0&&rn(Un)),R!==t?(cn(),V=So(),V!==t?(cn(),n.charCodeAt(x)===58?(G=h,x++):(G=t,T===0&&rn(bn)),G!==t?(cn(),sn=So(),sn!==t?(cn(),n.charCodeAt(x)===93?(Ln=y,x++):(Ln=t,T===0&&rn(Vn)),Ln!==t?P=_(V,sn):(x=P,P=t)):(x=P,P=t)):(x=P,P=t)):(x=P,P=t)):(x=P,P=t),P}function cn(){var P,R;for(T++,P=[],M.test(n.charAt(x))?(R=n.charAt(x),x++):(R=t,T===0&&rn(pe));R!==t;)P.push(R),M.test(n.charAt(x))?(R=n.charAt(x),x++):(R=t,T===0&&rn(pe));return T--,R=t,T===0&&rn(Tn),P}if(I=i(),I!==t&&x===n.length)return I;throw I!==t&&x<n.length&&rn(mn()),qe(F,D<n.length?n.charAt(D):null,D<n.length?re(D,D+1):re(D,D))}function Y5(n,e){function t(){this.constructor=n}t.prototype=e.prototype,n.prototype=new t}function Ar(n,e,t,r){var o=Error.call(this,n);return Object.setPrototypeOf&&Object.setPrototypeOf(o,Ar.prototype),o.expected=e,o.found=t,o.location=r,o.name="SyntaxError",o}Y5(Ar,Error);function mu(n,e,t){return t=t||" ",n.length>e?n:(e-=n.length,t+=t.repeat(e),n+t.slice(0,e))}Ar.prototype.format=function(n){var e="Error: "+this.message;if(this.location){var t=null,r;for(r=0;r<n.length;r++)if(n[r].source===this.location.source){t=n[r].text.split(/\r\n|\n|\r/g);break}var o=this.location.start,i=this.location.source&&typeof this.location.source.offset=="function"?this.location.source.offset(o):o,a=this.location.source+":"+i.line+":"+i.column;if(t){var l=this.location.end,u=mu("",i.line.toString().length," "),d=t[o.line-1],s=o.line===l.line?l.column:d.length+1,p=s-o.column||1;e+=`
 --> `+a+`
`+u+` |
`+i.line+" | "+d+`
`+u+" | "+mu("",o.column-1," ")+mu("",p,"^")}else e+=`
 at `+a}return e};Ar.buildMessage=function(n,e){var t={literal:function(d){return'"'+o(d.text)+'"'},class:function(d){var s=d.parts.map(function(p){return Array.isArray(p)?i(p[0])+"-"+i(p[1]):i(p)});return"["+(d.inverted?"^":"")+s.join("")+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(d){return d.description}};function r(d){return d.charCodeAt(0).toString(16).toUpperCase()}function o(d){return d.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(s){return"\\x0"+r(s)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(s){return"\\x"+r(s)})}function i(d){return d.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,function(s){return"\\x0"+r(s)}).replace(/[\x10-\x1F\x7F-\x9F]/g,function(s){return"\\x"+r(s)})}function a(d){return t[d.type](d)}function l(d){var s=d.map(a),p,c;if(s.sort(),s.length>0){for(p=1,c=1;p<s.length;p++)s[p-1]!==s[p]&&(s[c]=s[p],c++);s.length=c}switch(s.length){case 1:return s[0];case 2:return s[0]+" or "+s[1];default:return s.slice(0,-1).join(", ")+", or "+s[s.length-1]}}function u(d){return d?'"'+o(d)+'"':"end of input"}return"Expected "+l(n)+" but "+u(e)+" found."};function hm(n,e){e=e!==void 0?e:{};var t={},r=e.grammarSource,o={body:Re},i=Re,a="0",l="1",u="x",d="X",s="z",p="Z",c="b",m="B",w="#",b=/^[^\n]/,v=/^[ \n\r\t]/,f=/^[0-9]/,g=pe([`
`],!0,!1),h=Tn("0",!1),y=Tn("1",!1),k=Tn("x",!1),S=Tn("X",!1),E=Tn("z",!1),A=Tn("Z",!1),M=ge("whitespace"),B=pe([" ",`
`,"\r","	"],!1,!1),O=Tn("b",!1),z=Tn("B",!1),K=Tn("#",!1),L=pe([["0","9"]],!1,!1),X=function(D){return D},$=function(D,F){return{time:D,rows:F}},on=function(D){return D},U=function(D){return D.join("")},Q=function(D){return D.join("")},J=function(D,F){return{ref:F,value:D}},un=function(D,F){return{ref:F,value:D}},dn=function(D){return Number(D.join(""))},Y=0,Sn=[{line:1,column:1}],An=0,Un=[],bn=0,Vn;if("startRule"in e){if(!(e.startRule in o))throw new Error(`Can't start parsing from rule "`+e.startRule+'".');i=o[e.startRule]}function Tn(D,F){return{type:"literal",text:D,ignoreCase:F}}function pe(D,F,T){return{type:"class",parts:D,inverted:F,ignoreCase:T}}function me(){return{type:"end"}}function ge(D){return{type:"other",description:D}}function $e(D){var F=Sn[D],T;if(F)return F;for(T=D-1;!Sn[T];)T--;for(F=Sn[T],F={line:F.line,column:F.column};T<D;)n.charCodeAt(T)===10?(F.line++,F.column=1):F.column++,T++;return Sn[D]=F,F}function ke(D,F,T){var I=$e(D),W=$e(F),q={source:r,start:{offset:D,line:I.line,column:I.column},end:{offset:F,line:W.line,column:W.column}};return T&&r&&typeof r.offset=="function"&&(q.start=r.offset(q.start),q.end=r.offset(q.end)),q}function kn(D){Y<An||(Y>An&&(An=Y,Un=[]),Un.push(D))}function De(D,F,T){return new Ar(Ar.buildMessage(D,F),D,F,T)}function Re(){var D,F,T;if(D=Y,F=[],T=Le(),T!==t)for(;T!==t;)F.push(T),T=Le();else F=t;return F!==t?(T=C(),N(),D=X(F)):(Y=D,D=t),D}function Le(){var D,F,T,I;if(D=Y,C(),F=N(),F===t&&(F=null),C(),T=[],I=Ee(),I!==t)for(;I!==t;)T.push(I),I=Ee();else T=t;return T!==t?D=$(F,T):(Y=D,D=t),D}function Ee(){var D,F;return D=Y,C(),F=_(),F===t&&(F=x()),F!==t?(C(),D=on(F)):(Y=D,D=t),D}function Ce(){var D,F,T;if(D=Y,F=[],b.test(n.charAt(Y))?(T=n.charAt(Y),Y++):(T=t,bn===0&&kn(g)),T!==t)for(;T!==t;)F.push(T),b.test(n.charAt(Y))?(T=n.charAt(Y),Y++):(T=t,bn===0&&kn(g));else F=t;return F!==t&&(F=U(F)),D=F,D}function je(){var D;return n.charCodeAt(Y)===48?(D=a,Y++):(D=t,bn===0&&kn(h)),D===t&&(n.charCodeAt(Y)===49?(D=l,Y++):(D=t,bn===0&&kn(y)),D===t&&(n.charCodeAt(Y)===120?(D=u,Y++):(D=t,bn===0&&kn(k)),D===t&&(n.charCodeAt(Y)===88?(D=d,Y++):(D=t,bn===0&&kn(S)),D===t&&(n.charCodeAt(Y)===122?(D=s,Y++):(D=t,bn===0&&kn(E)),D===t&&(n.charCodeAt(Y)===90?(D=p,Y++):(D=t,bn===0&&kn(A))))))),D}function Ke(){var D,F,T;if(D=Y,F=[],T=je(),T!==t)for(;T!==t;)F.push(T),T=je();else F=t;return F!==t&&(F=Q(F)),D=F,D}function C(){var D,F;for(bn++,D=[],v.test(n.charAt(Y))?(F=n.charAt(Y),Y++):(F=t,bn===0&&kn(B));F!==t;)D.push(F),v.test(n.charAt(Y))?(F=n.charAt(Y),Y++):(F=t,bn===0&&kn(B));return bn--,F=t,bn===0&&kn(M),D}function _(){var D,F,T;return D=Y,F=je(),F!==t?(T=Ce(),T!==t?D=J(F,T):(Y=D,D=t)):(Y=D,D=t),D}function x(){var D,F,T,I;return D=Y,n.charCodeAt(Y)===98?(F=c,Y++):(F=t,bn===0&&kn(O)),F===t&&(n.charCodeAt(Y)===66?(F=m,Y++):(F=t,bn===0&&kn(z))),F!==t?(T=Ke(),T!==t?(C(),I=Ce(),I!==t?D=un(T,I):(Y=D,D=t)):(Y=D,D=t)):(Y=D,D=t),D}function N(){var D,F,T,I;if(D=Y,n.charCodeAt(Y)===35?(F=w,Y++):(F=t,bn===0&&kn(K)),F!==t){if(T=[],f.test(n.charAt(Y))?(I=n.charAt(Y),Y++):(I=t,bn===0&&kn(L)),I!==t)for(;I!==t;)T.push(I),f.test(n.charAt(Y))?(I=n.charAt(Y),Y++):(I=t,bn===0&&kn(L));else T=t;T!==t?D=dn(T):(Y=D,D=t)}else Y=D,D=t;return D}if(Vn=i(),Vn!==t&&Y===n.length)return Vn;throw Vn!==t&&Y<n.length&&kn(me()),De(Un,An<n.length?n.charAt(An):null,An<n.length?ke(An,An+1):ke(An,An))}const K5=Object.freeze(Object.defineProperty({__proto__:null,SyntaxError:Ar,parse:hm},Symbol.toStringTag,{value:"Module"}));function Ci(){return Ci=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Ci.apply(this,arguments)}var vm={epsilon:1e-12,matrix:"Matrix",number:"number",precision:64,predictable:!1,randomSeed:null};function On(n){return typeof n=="number"}function Te(n){return!n||typeof n!="object"||typeof n.constructor!="function"?!1:n.isBigNumber===!0&&typeof n.constructor.prototype=="object"&&n.constructor.prototype.isBigNumber===!0||typeof n.constructor.isDecimal=="function"&&n.constructor.isDecimal(n)===!0}function wm(n){return n&&typeof n=="object"&&Object.getPrototypeOf(n).isComplex===!0||!1}function ym(n){return n&&typeof n=="object"&&Object.getPrototypeOf(n).isFraction===!0||!1}function xm(n){return n&&n.constructor.prototype.isUnit===!0||!1}function ht(n){return typeof n=="string"}var Bn=Array.isArray;function wt(n){return n&&n.constructor.prototype.isMatrix===!0||!1}function Ja(n){return Array.isArray(n)||wt(n)}function X5(n){return n&&n.isDenseMatrix&&n.constructor.prototype.isMatrix===!0||!1}function G5(n){return n&&n.isSparseMatrix&&n.constructor.prototype.isMatrix===!0||!1}function J5(n){return n&&n.constructor.prototype.isRange===!0||!1}function Bs(n){return n&&n.constructor.prototype.isIndex===!0||!1}function n1(n){return typeof n=="boolean"}function e1(n){return n&&n.constructor.prototype.isResultSet===!0||!1}function t1(n){return n&&n.constructor.prototype.isHelp===!0||!1}function r1(n){return typeof n=="function"}function o1(n){return n instanceof Date}function i1(n){return n instanceof RegExp}function km(n){return!!(n&&typeof n=="object"&&n.constructor===Object&&!wm(n)&&!ym(n))}function a1(n){return n===null}function l1(n){return n===void 0}function u1(n){return n&&n.isAccessorNode===!0&&n.constructor.prototype.isNode===!0||!1}function p1(n){return n&&n.isArrayNode===!0&&n.constructor.prototype.isNode===!0||!1}function s1(n){return n&&n.isAssignmentNode===!0&&n.constructor.prototype.isNode===!0||!1}function d1(n){return n&&n.isBlockNode===!0&&n.constructor.prototype.isNode===!0||!1}function c1(n){return n&&n.isConditionalNode===!0&&n.constructor.prototype.isNode===!0||!1}function f1(n){return n&&n.isConstantNode===!0&&n.constructor.prototype.isNode===!0||!1}function b1(n){return n&&n.isFunctionAssignmentNode===!0&&n.constructor.prototype.isNode===!0||!1}function m1(n){return n&&n.isFunctionNode===!0&&n.constructor.prototype.isNode===!0||!1}function g1(n){return n&&n.isIndexNode===!0&&n.constructor.prototype.isNode===!0||!1}function h1(n){return n&&n.isNode===!0&&n.constructor.prototype.isNode===!0||!1}function v1(n){return n&&n.isObjectNode===!0&&n.constructor.prototype.isNode===!0||!1}function w1(n){return n&&n.isOperatorNode===!0&&n.constructor.prototype.isNode===!0||!1}function y1(n){return n&&n.isParenthesisNode===!0&&n.constructor.prototype.isNode===!0||!1}function x1(n){return n&&n.isRangeNode===!0&&n.constructor.prototype.isNode===!0||!1}function k1(n){return n&&n.isRelationalNode===!0&&n.constructor.prototype.isNode===!0||!1}function D1(n){return n&&n.isSymbolNode===!0&&n.constructor.prototype.isNode===!0||!1}function E1(n){return n&&n.constructor.prototype.isChain===!0||!1}function ri(n){var e=typeof n;return e==="object"?n===null?"null":Te(n)?"BigNumber":n.constructor&&n.constructor.name?n.constructor.name:"Object":e}function Gn(n){var e=typeof n;if(e==="number"||e==="string"||e==="boolean"||n===null||n===void 0)return n;if(typeof n.clone=="function")return n.clone();if(Array.isArray(n))return n.map(function(t){return Gn(t)});if(n instanceof Date)return new Date(n.valueOf());if(Te(n))return n;if(km(n))return C1(n,Gn);throw new TypeError("Cannot clone: unknown type of value (value: ".concat(n,")"))}function C1(n,e){var t={};for(var r in n)Si(n,r)&&(t[r]=e(n[r]));return t}function S1(n,e){for(var t in e)Si(e,t)&&(n[t]=e[t]);return n}function go(n,e){var t,r,o;if(Array.isArray(n)){if(!Array.isArray(e)||n.length!==e.length)return!1;for(r=0,o=n.length;r<o;r++)if(!go(n[r],e[r]))return!1;return!0}else{if(typeof n=="function")return n===e;if(n instanceof Object){if(Array.isArray(e)||!(e instanceof Object))return!1;for(t in n)if(!(t in e)||!go(n[t],e[t]))return!1;for(t in e)if(!(t in n))return!1;return!0}else return n===e}}function Si(n,e){return n&&Object.hasOwnProperty.call(n,e)}function A1(n,e){for(var t={},r=0;r<e.length;r++){var o=e[r],i=n[o];i!==void 0&&(t[o]=i)}return t}var F1=["Matrix","Array"],_1=["number","BigNumber","Fraction"],$i=function(e){if(e)throw new Error(`The global config is readonly. 
Please create a mathjs instance if you want to change the default configuration. 
Example:

  import { create, all } from 'mathjs';
  const mathjs = create(all);
  mathjs.config({ number: 'BigNumber' });
`);return Object.freeze(vm)};Ci($i,vm,{MATRIX_OPTIONS:F1,NUMBER_OPTIONS:_1});function gc(){return!0}function Xe(){return!1}function zr(){}const hc="Argument is not a typed-function.";function Dm(){function n(C){return typeof C=="object"&&C!==null&&C.constructor===Object}const e=[{name:"number",test:function(C){return typeof C=="number"}},{name:"string",test:function(C){return typeof C=="string"}},{name:"boolean",test:function(C){return typeof C=="boolean"}},{name:"Function",test:function(C){return typeof C=="function"}},{name:"Array",test:Array.isArray},{name:"Date",test:function(C){return C instanceof Date}},{name:"RegExp",test:function(C){return C instanceof RegExp}},{name:"Object",test:n},{name:"null",test:function(C){return C===null}},{name:"undefined",test:function(C){return C===void 0}}],t={name:"any",test:gc,isAny:!0};let r,o,i=0,a={createCount:0};function l(C){const _=r.get(C);if(_)return _;let x='Unknown type "'+C+'"';const N=C.toLowerCase();let D;for(D of o)if(D.toLowerCase()===N){x+='. Did you mean "'+D+'" ?';break}throw new TypeError(x)}function u(C){let _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"any";const x=_?l(_).index:o.length,N=[];for(let F=0;F<C.length;++F){if(!C[F]||typeof C[F].name!="string"||typeof C[F].test!="function")throw new TypeError("Object with properties {name: string, test: function} expected");const T=C[F].name;if(r.has(T))throw new TypeError('Duplicate type name "'+T+'"');N.push(T),r.set(T,{name:T,test:C[F].test,isAny:C[F].isAny,index:x+F,conversionsTo:[]})}const D=o.slice(x);o=o.slice(0,x).concat(N).concat(D);for(let F=x+N.length;F<o.length;++F)r.get(o[F]).index=F}function d(){r=new Map,o=[],i=0,u([t],!1)}d(),u(e);function s(){let C;for(C of o)r.get(C).conversionsTo=[];i=0}function p(C){const _=o.filter(x=>{const N=r.get(x);return!N.isAny&&N.test(C)});return _.length?_:["any"]}function c(C){return C&&typeof C=="function"&&"_typedFunctionData"in C}function m(C,_,x){if(!c(C))throw new TypeError(hc);const N=x&&x.exact,D=Array.isArray(_)?_.join(","):_,F=y(D),T=v(F);if(!N||T in C.signatures){const mn=C._typedFunctionData.signatureMap.get(T);if(mn)return mn}const I=F.length;let W;if(N){W=[];let mn;for(mn in C.signatures)W.push(C._typedFunctionData.signatureMap.get(mn))}else W=C._typedFunctionData.signatures;for(let mn=0;mn<I;++mn){const gn=F[mn],hn=[];let re;for(re of W){const rn=A(re.params,mn);if(!(!rn||gn.restParam&&!rn.restParam)){if(!rn.hasAny){const qe=h(rn);if(gn.types.some(Se=>!qe.has(Se.name)))continue}hn.push(re)}}if(W=hn,W.length===0)break}let q;for(q of W)if(q.params.length<=I)return q;throw new TypeError("Signature not found (signature: "+(C.name||"unnamed")+"("+v(F,", ")+"))")}function w(C,_,x){return m(C,_,x).implementation}function b(C,_){const x=l(_);if(x.test(C))return C;const N=x.conversionsTo;if(N.length===0)throw new Error("There are no conversions to "+_+" defined.");for(let D=0;D<N.length;D++)if(l(N[D].from).test(C))return N[D].convert(C);throw new Error("Cannot convert "+C+" to "+_)}function v(C){let _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:",";return C.map(x=>x.name).join(_)}function f(C){const _=C.indexOf("...")===0,N=(_?C.length>3?C.slice(3):"any":C).split("|").map(I=>l(I.trim()));let D=!1,F=_?"...":"";return{types:N.map(function(I){return D=I.isAny||D,F+=I.name+"|",{name:I.name,typeIndex:I.index,test:I.test,isAny:I.isAny,conversion:null,conversionIndex:-1}}),name:F.slice(0,-1),hasAny:D,hasConversion:!1,restParam:_}}function g(C){const _=C.types.map(T=>T.name),x=on(_);let N=C.hasAny,D=C.name;const F=x.map(function(T){const I=l(T.from);return N=I.isAny||N,D+="|"+T.from,{name:T.from,typeIndex:I.index,test:I.test,isAny:I.isAny,conversion:T,conversionIndex:T.index}});return{types:C.types.concat(F),name:D,hasAny:N,hasConversion:F.length>0,restParam:C.restParam}}function h(C){return C.typeSet||(C.typeSet=new Set,C.types.forEach(_=>C.typeSet.add(_.name))),C.typeSet}function y(C){const _=[];if(typeof C!="string")throw new TypeError("Signatures must be strings");const x=C.trim();if(x==="")return _;const N=x.split(",");for(let D=0;D<N.length;++D){const F=f(N[D].trim());if(F.restParam&&D!==N.length-1)throw new SyntaxError('Unexpected rest parameter "'+N[D]+'": only allowed for the last parameter');if(F.types.length===0)return null;_.push(F)}return _}function k(C){const _=Tn(C);return _?_.restParam:!1}function S(C){if(!C||C.types.length===0)return gc;if(C.types.length===1)return l(C.types[0].name).test;if(C.types.length===2){const _=l(C.types[0].name).test,x=l(C.types[1].name).test;return function(D){return _(D)||x(D)}}else{const _=C.types.map(function(x){return l(x.name).test});return function(N){for(let D=0;D<_.length;D++)if(_[D](N))return!0;return!1}}}function E(C){let _,x,N;if(k(C)){_=Vn(C).map(S);const D=_.length,F=S(Tn(C)),T=function(I){for(let W=D;W<I.length;W++)if(!F(I[W]))return!1;return!0};return function(W){for(let q=0;q<_.length;q++)if(!_[q](W[q]))return!1;return T(W)&&W.length>=D+1}}else return C.length===0?function(F){return F.length===0}:C.length===1?(x=S(C[0]),function(F){return x(F[0])&&F.length===1}):C.length===2?(x=S(C[0]),N=S(C[1]),function(F){return x(F[0])&&N(F[1])&&F.length===2}):(_=C.map(S),function(F){for(let T=0;T<_.length;T++)if(!_[T](F[T]))return!1;return F.length===_.length})}function A(C,_){return _<C.length?C[_]:k(C)?Tn(C):null}function M(C,_){const x=A(C,_);return x?h(x):new Set}function B(C){return C.conversion===null||C.conversion===void 0}function O(C,_){const x=new Set;return C.forEach(N=>{const D=M(N.params,_);let F;for(F of D)x.add(F)}),x.has("any")?["any"]:Array.from(x)}function z(C,_,x){let N,D;const F=C||"unnamed";let T=x,I;for(I=0;I<_.length;I++){const gn=[];if(T.forEach(hn=>{const re=A(hn.params,I),rn=S(re);(I<hn.params.length||k(hn.params))&&rn(_[I])&&gn.push(hn)}),gn.length===0){if(D=O(T,I),D.length>0){const hn=p(_[I]);return N=new TypeError("Unexpected type of argument in function "+F+" (expected: "+D.join(" or ")+", actual: "+hn.join(" | ")+", index: "+I+")"),N.data={category:"wrongType",fn:F,index:I,actual:hn,expected:D},N}}else T=gn}const W=T.map(function(gn){return k(gn.params)?1/0:gn.params.length});if(_.length<Math.min.apply(null,W))return D=O(T,I),N=new TypeError("Too few arguments in function "+F+" (expected: "+D.join(" or ")+", index: "+_.length+")"),N.data={category:"tooFewArgs",fn:F,index:_.length,expected:D},N;const q=Math.max.apply(null,W);if(_.length>q)return N=new TypeError("Too many arguments in function "+F+" (expected: "+q+", actual: "+_.length+")"),N.data={category:"tooManyArgs",fn:F,index:_.length,expectedLength:q},N;const mn=[];for(let gn=0;gn<_.length;++gn)mn.push(p(_[gn]).join("|"));return N=new TypeError('Arguments of type "'+mn.join(", ")+'" do not match any of the defined signatures of function '+F+"."),N.data={category:"mismatch",actual:mn},N}function K(C){let _=o.length+1;for(let x=0;x<C.types.length;x++)B(C.types[x])&&(_=Math.min(_,C.types[x].typeIndex));return _}function L(C){let _=i+1;for(let x=0;x<C.types.length;x++)B(C.types[x])||(_=Math.min(_,C.types[x].conversionIndex));return _}function X(C,_){if(C.hasAny){if(!_.hasAny)return 1}else if(_.hasAny)return-1;if(C.restParam){if(!_.restParam)return 1}else if(_.restParam)return-1;if(C.hasConversion){if(!_.hasConversion)return 1}else if(_.hasConversion)return-1;const x=K(C)-K(_);if(x<0)return-1;if(x>0)return 1;const N=L(C)-L(_);return N<0?-1:N>0?1:0}function $(C,_){const x=C.params,N=_.params,D=Tn(x),F=Tn(N),T=k(x),I=k(N);if(T&&D.hasAny){if(!I||!F.hasAny)return 1}else if(I&&F.hasAny)return-1;let W=0,q=0,mn;for(mn of x)mn.hasAny&&++W,mn.hasConversion&&++q;let gn=0,hn=0;for(mn of N)mn.hasAny&&++gn,mn.hasConversion&&++hn;if(W!==gn)return W-gn;if(T&&D.hasConversion){if(!I||!F.hasConversion)return 1}else if(I&&F.hasConversion)return-1;if(q!==hn)return q-hn;if(T){if(!I)return 1}else if(I)return-1;const re=(x.length-N.length)*(T?-1:1);if(re!==0)return re;const rn=[];let qe=0;for(let Rt=0;Rt<x.length;++Rt){const Or=X(x[Rt],N[Rt]);rn.push(Or),qe+=Or}if(qe!==0)return qe;let Se;for(Se of rn)if(Se!==0)return Se;return 0}function on(C){if(C.length===0)return[];const _=C.map(l);C.length>1&&_.sort((D,F)=>D.index-F.index);let x=_[0].conversionsTo;if(C.length===1)return x;x=x.concat([]);const N=new Set(C);for(let D=1;D<_.length;++D){let F;for(F of _[D].conversionsTo)N.has(F.from)||(x.push(F),N.add(F.from))}return x}function U(C,_){let x=_;if(C.some(D=>D.hasConversion)){const D=k(C),F=C.map(Q);x=function(){const I=[],W=D?arguments.length-1:arguments.length;for(let q=0;q<W;q++)I[q]=F[q](arguments[q]);return D&&(I[W]=arguments[W].map(F[W])),_.apply(this,I)}}let N=x;if(k(C)){const D=C.length-1;N=function(){return x.apply(this,pe(arguments,0,D).concat([pe(arguments,D)]))}}return N}function Q(C){let _,x,N,D;const F=[],T=[];switch(C.types.forEach(function(I){I.conversion&&(F.push(l(I.conversion.from).test),T.push(I.conversion.convert))}),T.length){case 0:return function(W){return W};case 1:return _=F[0],N=T[0],function(W){return _(W)?N(W):W};case 2:return _=F[0],x=F[1],N=T[0],D=T[1],function(W){return _(W)?N(W):x(W)?D(W):W};default:return function(W){for(let q=0;q<T.length;q++)if(F[q](W))return T[q](W);return W}}}function J(C){function _(x,N,D){if(N<x.length){const F=x[N];let T=[];if(F.restParam){const I=F.types.filter(B);I.length<F.types.length&&T.push({types:I,name:"..."+I.map(W=>W.name).join("|"),hasAny:I.some(W=>W.isAny),hasConversion:!1,restParam:!0}),T.push(F)}else T=F.types.map(function(I){return{types:[I],name:I.name,hasAny:I.isAny,hasConversion:I.conversion,restParam:!1}});return ge(T,function(I){return _(x,N+1,D.concat([I]))})}else return[D]}return _(C,0,[])}function un(C,_){const x=Math.max(C.length,_.length);for(let I=0;I<x;I++){const W=M(C,I),q=M(_,I);let mn=!1,gn;for(gn of q)if(W.has(gn)){mn=!0;break}if(!mn)return!1}const N=C.length,D=_.length,F=k(C),T=k(_);return F?T?N===D:D>=N:T?N>=D:N===D}function dn(C){return C.map(_=>Re(_)?kn(_.referToSelf.callback):De(_)?ke(_.referTo.references,_.referTo.callback):_)}function Y(C,_,x){const N=[];let D;for(D of C){let F=x[D];if(typeof F!="number")throw new TypeError('No definition for referenced signature "'+D+'"');if(F=_[F],typeof F!="function")return!1;N.push(F)}return N}function Sn(C,_,x){const N=dn(C),D=new Array(N.length).fill(!1);let F=!0;for(;F;){F=!1;let T=!0;for(let I=0;I<N.length;++I){if(D[I])continue;const W=N[I];if(Re(W))N[I]=W.referToSelf.callback(x),N[I].referToSelf=W.referToSelf,D[I]=!0,T=!1;else if(De(W)){const q=Y(W.referTo.references,N,_);q?(N[I]=W.referTo.callback.apply(this,q),N[I].referTo=W.referTo,D[I]=!0,T=!1):F=!0}}if(T&&F)throw new SyntaxError("Circular reference detected in resolving typed.referTo")}return N}function An(C){const _=/\bthis(\(|\.signatures\b)/;Object.keys(C).forEach(x=>{const N=C[x];if(_.test(N.toString()))throw new SyntaxError("Using `this` to self-reference a function is deprecated since typed-function@3. Use typed.referTo and typed.referToSelf instead.")})}function Un(C,_){if(a.createCount++,Object.keys(_).length===0)throw new SyntaxError("No signatures provided");a.warnAgainstDeprecatedThis&&An(_);const x=[],N=[],D={},F=[];let T;for(T in _){if(!Object.prototype.hasOwnProperty.call(_,T))continue;const Dn=y(T);if(!Dn)continue;x.forEach(function(No){if(un(No,Dn))throw new TypeError('Conflicting signatures "'+v(No)+'" and "'+v(Dn)+'".')}),x.push(Dn);const Ae=N.length;N.push(_[T]);const f0=Dn.map(g);let qi;for(qi of J(f0)){const No=v(qi);F.push({params:qi,name:No,fn:Ae}),qi.every(b0=>!b0.hasConversion)&&(D[No]=Ae)}}F.sort($);const I=Sn(N,D,_o);let W;for(W in D)Object.prototype.hasOwnProperty.call(D,W)&&(D[W]=I[D[W]]);const q=[],mn=new Map;for(W of F)mn.has(W.name)||(W.fn=I[W.fn],q.push(W),mn.set(W.name,W));const gn=q[0]&&q[0].params.length<=2&&!k(q[0].params),hn=q[1]&&q[1].params.length<=2&&!k(q[1].params),re=q[2]&&q[2].params.length<=2&&!k(q[2].params),rn=q[3]&&q[3].params.length<=2&&!k(q[3].params),qe=q[4]&&q[4].params.length<=2&&!k(q[4].params),Se=q[5]&&q[5].params.length<=2&&!k(q[5].params),Rt=gn&&hn&&re&&rn&&qe&&Se;for(let Dn=0;Dn<q.length;++Dn)q[Dn].test=E(q[Dn].params);const Or=gn?S(q[0].params[0]):Xe,Co=hn?S(q[1].params[0]):Xe,Ml=re?S(q[2].params[0]):Xe,Bl=rn?S(q[3].params[0]):Xe,zl=qe?S(q[4].params[0]):Xe,Ri=Se?S(q[5].params[0]):Xe,Li=gn?S(q[0].params[1]):Xe,ji=hn?S(q[1].params[1]):Xe,Il=re?S(q[2].params[1]):Xe,Mr=rn?S(q[3].params[1]):Xe,So=qe?S(q[4].params[1]):Xe,$l=Se?S(q[5].params[1]):Xe;for(let Dn=0;Dn<q.length;++Dn)q[Dn].implementation=U(q[Dn].params,q[Dn].fn);const Ao=gn?q[0].implementation:zr,Rl=hn?q[1].implementation:zr,cn=re?q[2].implementation:zr,P=rn?q[3].implementation:zr,R=qe?q[4].implementation:zr,V=Se?q[5].implementation:zr,G=gn?q[0].params.length:-1,sn=hn?q[1].params.length:-1,Ln=re?q[2].params.length:-1,Dt=rn?q[3].params.length:-1,Fo=qe?q[4].params.length:-1,l0=Se?q[5].params.length:-1,u0=Rt?6:0,p0=q.length,s0=q.map(Dn=>Dn.test),d0=q.map(Dn=>Dn.implementation),c0=function(){for(let Ae=u0;Ae<p0;Ae++)if(s0[Ae](arguments))return d0[Ae].apply(this,arguments);return a.onMismatch(C,arguments,q)};function _o(Dn,Ae){return arguments.length===G&&Or(Dn)&&Li(Ae)?Ao.apply(this,arguments):arguments.length===sn&&Co(Dn)&&ji(Ae)?Rl.apply(this,arguments):arguments.length===Ln&&Ml(Dn)&&Il(Ae)?cn.apply(this,arguments):arguments.length===Dt&&Bl(Dn)&&Mr(Ae)?P.apply(this,arguments):arguments.length===Fo&&zl(Dn)&&So(Ae)?R.apply(this,arguments):arguments.length===l0&&Ri(Dn)&&$l(Ae)?V.apply(this,arguments):c0.apply(this,arguments)}try{Object.defineProperty(_o,"name",{value:C})}catch{}return _o.signatures=D,_o._typedFunctionData={signatures:q,signatureMap:mn},_o}function bn(C,_,x){throw z(C,_,x)}function Vn(C){return pe(C,0,C.length-1)}function Tn(C){return C[C.length-1]}function pe(C,_,x){return Array.prototype.slice.call(C,_,x)}function me(C,_){for(let x=0;x<C.length;x++)if(_(C[x]))return C[x]}function ge(C,_){return Array.prototype.concat.apply([],C.map(_))}function $e(){const C=Vn(arguments).map(x=>v(y(x))),_=Tn(arguments);if(typeof _!="function")throw new TypeError("Callback function expected as last argument");return ke(C,_)}function ke(C,_){return{referTo:{references:C,callback:_}}}function kn(C){if(typeof C!="function")throw new TypeError("Callback function expected as first argument");return{referToSelf:{callback:C}}}function De(C){return C&&typeof C.referTo=="object"&&Array.isArray(C.referTo.references)&&typeof C.referTo.callback=="function"}function Re(C){return C&&typeof C.referToSelf=="object"&&typeof C.referToSelf.callback=="function"}function Le(C,_){if(!C)return _;if(_&&_!==C){const x=new Error("Function names do not match (expected: "+C+", actual: "+_+")");throw x.data={actual:_,expected:C},x}return C}function Ee(C){let _;for(const x in C)Object.prototype.hasOwnProperty.call(C,x)&&(c(C[x])||typeof C[x].signature=="string")&&(_=Le(_,C[x].name));return _}function Ce(C,_){let x;for(x in _)if(Object.prototype.hasOwnProperty.call(_,x)){if(x in C&&_[x]!==C[x]){const N=new Error('Signature "'+x+'" is defined twice');throw N.data={signature:x,sourceFunction:_[x],destFunction:C[x]},N}C[x]=_[x]}}const je=a;a=function(C){const _=typeof C=="string",x=_?1:0;let N=_?C:"";const D={};for(let F=x;F<arguments.length;++F){const T=arguments[F];let I={},W;if(typeof T=="function"?(W=T.name,typeof T.signature=="string"?I[T.signature]=T:c(T)&&(I=T.signatures)):n(T)&&(I=T,_||(W=Ee(T))),Object.keys(I).length===0){const q=new TypeError("Argument to 'typed' at index "+F+" is not a (typed) function, nor an object with signatures as keys and functions as values.");throw q.data={index:F,argument:T},q}_||(N=Le(N,W)),Ce(D,I)}return Un(N||"",D)},a.create=Dm,a.createCount=je.createCount,a.onMismatch=bn,a.throwMismatchError=bn,a.createError=z,a.clear=d,a.clearConversions=s,a.addTypes=u,a._findType=l,a.referTo=$e,a.referToSelf=kn,a.convert=b,a.findSignature=m,a.find=w,a.isTypedFunction=c,a.warnAgainstDeprecatedThis=!0,a.addType=function(C,_){let x="any";_!==!1&&r.has("Object")&&(x="Object"),a.addTypes([C],x)};function Ke(C){if(!C||typeof C.from!="string"||typeof C.to!="string"||typeof C.convert!="function")throw new TypeError("Object with properties {from: string, to: string, convert: function} expected");if(C.to===C.from)throw new SyntaxError('Illegal to define conversion from "'+C.from+'" to itself.')}return a.addConversion=function(C){Ke(C);const _=l(C.to);if(_.conversionsTo.every(function(x){return x.from!==C.from}))_.conversionsTo.push({from:C.from,convert:C.convert,index:i++});else throw new Error('There is already a conversion from "'+C.from+'" to "'+_.name+'"')},a.addConversions=function(C){C.forEach(a.addConversion)},a.removeConversion=function(C){Ke(C);const _=l(C.to),x=me(_.conversionsTo,D=>D.from===C.from);if(!x)throw new Error("Attempt to remove nonexistent conversion from "+C.from+" to "+C.to);if(x.convert!==C.convert)throw new Error("Conversion to remove does not match existing conversion");const N=_.conversionsTo.indexOf(x);_.conversionsTo.splice(N,1)},a.resolve=function(C,_){if(!c(C))throw new TypeError(hc);const x=C._typedFunctionData.signatures;for(let N=0;N<x.length;++N)if(x[N].test(_))return x[N];return null},a}const vc=Dm();function qn(n){return typeof n=="boolean"?!0:isFinite(n)?n===Math.round(n):!1}function gu(n,e,t){var r={2:"0b",8:"0o",16:"0x"},o=r[e],i="";if(t){if(t<1)throw new Error("size must be in greater than 0");if(!qn(t))throw new Error("size must be an integer");if(n>2**(t-1)-1||n<-(2**(t-1)))throw new Error("Value must be in range [-2^".concat(t-1,", 2^").concat(t-1,"-1]"));if(!qn(n))throw new Error("Value must be an integer");n<0&&(n=n+2**t),i="i".concat(t)}var a="";return n<0&&(n=-n,a="-"),"".concat(a).concat(o).concat(n.toString(e)).concat(i)}function kp(n,e){if(typeof e=="function")return e(n);if(n===1/0)return"Infinity";if(n===-1/0)return"-Infinity";if(isNaN(n))return"NaN";var t="auto",r,o;if(e&&(e.notation&&(t=e.notation),On(e)?r=e:On(e.precision)&&(r=e.precision),e.wordSize&&(o=e.wordSize,typeof o!="number")))throw new Error('Option "wordSize" must be a number');switch(t){case"fixed":return Em(n,r);case"exponential":return Cm(n,r);case"engineering":return N1(n,r);case"bin":return gu(n,2,o);case"oct":return gu(n,8,o);case"hex":return gu(n,16,o);case"auto":return P1(n,r,e&&e).replace(/((\.\d*?)(0+))($|e)/,function(){var i=arguments[2],a=arguments[4];return i!=="."?i+a:a});default:throw new Error('Unknown notation "'+t+'". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.')}}function Sl(n){var e=String(n).toLowerCase().match(/^(-?)(\d+\.?\d*)(e([+-]?\d+))?$/);if(!e)throw new SyntaxError("Invalid number "+n);var t=e[1],r=e[2],o=parseFloat(e[4]||"0"),i=r.indexOf(".");o+=i!==-1?i-1:r.length-1;var a=r.replace(".","").replace(/^0*/,function(l){return o-=l.length,""}).replace(/0*$/,"").split("").map(function(l){return parseInt(l)});return a.length===0&&(a.push(0),o++),{sign:t,coefficients:a,exponent:o}}function N1(n,e){if(isNaN(n)||!isFinite(n))return String(n);var t=Sl(n),r=Al(t,e),o=r.exponent,i=r.coefficients,a=o%3===0?o:o<0?o-3-o%3:o-o%3;if(On(e))for(;e>i.length||o-a+1>i.length;)i.push(0);else for(var l=Math.abs(o-a)-(i.length-1),u=0;u<l;u++)i.push(0);for(var d=Math.abs(o-a),s=1;d>0;)s++,d--;var p=i.slice(s).join(""),c=On(e)&&p.length||p.match(/[1-9]/)?"."+p:"",m=i.slice(0,s).join("")+c+"e"+(o>=0?"+":"")+a.toString();return r.sign+m}function Em(n,e){if(isNaN(n)||!isFinite(n))return String(n);var t=Sl(n),r=typeof e=="number"?Al(t,t.exponent+1+e):t,o=r.coefficients,i=r.exponent+1,a=i+(e||0);return o.length<a&&(o=o.concat(ao(a-o.length))),i<0&&(o=ao(-i+1).concat(o),i=1),i<o.length&&o.splice(i,0,i===0?"0.":"."),r.sign+o.join("")}function Cm(n,e){if(isNaN(n)||!isFinite(n))return String(n);var t=Sl(n),r=e?Al(t,e):t,o=r.coefficients,i=r.exponent;o.length<e&&(o=o.concat(ao(e-o.length)));var a=o.shift();return r.sign+a+(o.length>0?"."+o.join(""):"")+"e"+(i>=0?"+":"")+i}function P1(n,e,t){if(isNaN(n)||!isFinite(n))return String(n);var r=t&&t.lowerExp!==void 0?t.lowerExp:-3,o=t&&t.upperExp!==void 0?t.upperExp:5,i=Sl(n),a=e?Al(i,e):i;if(a.exponent<r||a.exponent>=o)return Cm(n,e);var l=a.coefficients,u=a.exponent;l.length<e&&(l=l.concat(ao(e-l.length))),l=l.concat(ao(u-l.length+1+(l.length<e?e-l.length:0))),l=ao(-u).concat(l);var d=u>0?u:0;return d<l.length-1&&l.splice(d+1,0,"."),a.sign+l.join("")}function Al(n,e){for(var t={sign:n.sign,coefficients:n.coefficients,exponent:n.exponent},r=t.coefficients;e<=0;)r.unshift(0),t.exponent++,e++;if(r.length>e){var o=r.splice(e,r.length-e);if(o[0]>=5){var i=e-1;for(r[i]++;r[i]===10;)r.pop(),i===0&&(r.unshift(0),t.exponent++,i++),i--,r[i]++}}return t}function ao(n){for(var e=[],t=0;t<n;t++)e.push(0);return e}function T1(n){return n.toExponential().replace(/e.*$/,"").replace(/^0\.?0*|\./,"").length}var O1=Number.EPSILON||2220446049250313e-31;function ho(n,e,t){if(t==null)return n===e;if(n===e)return!0;if(isNaN(n)||isNaN(e))return!1;if(isFinite(n)&&isFinite(e)){var r=Math.abs(n-e);return r<=O1?!0:r<=Math.max(Math.abs(n),Math.abs(e))*t}return!1}function hu(n,e,t){var r=n.constructor,o=new r(2),i="";if(t){if(t<1)throw new Error("size must be in greater than 0");if(!qn(t))throw new Error("size must be an integer");if(n.greaterThan(o.pow(t-1).sub(1))||n.lessThan(o.pow(t-1).mul(-1)))throw new Error("Value must be in range [-2^".concat(t-1,", 2^").concat(t-1,"-1]"));if(!n.isInteger())throw new Error("Value must be an integer");n.lessThan(0)&&(n=n.add(o.pow(t))),i="i".concat(t)}switch(e){case 2:return"".concat(n.toBinary()).concat(i);case 8:return"".concat(n.toOctal()).concat(i);case 16:return"".concat(n.toHexadecimal()).concat(i);default:throw new Error("Base ".concat(e," not supported "))}}function M1(n,e){if(typeof e=="function")return e(n);if(!n.isFinite())return n.isNaN()?"NaN":n.gt(0)?"Infinity":"-Infinity";var t="auto",r,o;if(e!==void 0&&(e.notation&&(t=e.notation),typeof e=="number"?r=e:e.precision!==void 0&&(r=e.precision),e.wordSize&&(o=e.wordSize,typeof o!="number")))throw new Error('Option "wordSize" must be a number');switch(t){case"fixed":return z1(n,r);case"exponential":return wc(n,r);case"engineering":return B1(n,r);case"bin":return hu(n,2,o);case"oct":return hu(n,8,o);case"hex":return hu(n,16,o);case"auto":{var i=e&&e.lowerExp!==void 0?e.lowerExp:-3,a=e&&e.upperExp!==void 0?e.upperExp:5;if(n.isZero())return"0";var l,u=n.toSignificantDigits(r),d=u.e;return d>=i&&d<a?l=u.toFixed():l=wc(n,r),l.replace(/((\.\d*?)(0+))($|e)/,function(){var s=arguments[2],p=arguments[4];return s!=="."?s+p:p})}default:throw new Error('Unknown notation "'+t+'". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.')}}function B1(n,e){var t=n.e,r=t%3===0?t:t<0?t-3-t%3:t-t%3,o=n.mul(Math.pow(10,-r)),i=o.toPrecision(e);if(i.indexOf("e")!==-1){var a=n.constructor;i=new a(i).toFixed()}return i+"e"+(t>=0?"+":"")+r.toString()}function wc(n,e){return e!==void 0?n.toExponential(e-1):n.toExponential()}function z1(n,e){return n.toFixed(e)}function _e(n,e){var t=I1(n,e);return e&&typeof e=="object"&&"truncate"in e&&t.length>e.truncate?t.substring(0,e.truncate-3)+"...":t}function I1(n,e){if(typeof n=="number")return kp(n,e);if(Te(n))return M1(n,e);if($1(n))return!e||e.fraction!=="decimal"?n.s*n.n+"/"+n.d:n.toString();if(Array.isArray(n))return Sm(n,e);if(ht(n))return yc(n);if(typeof n=="function")return n.syntax?String(n.syntax):"function";if(n&&typeof n=="object"){if(typeof n.format=="function")return n.format(e);if(n&&n.toString(e)!=={}.toString())return n.toString(e);var t=Object.keys(n).map(r=>yc(r)+": "+_e(n[r],e));return"{"+t.join(", ")+"}"}return String(n)}function yc(n){for(var e=String(n),t="",r=0;r<e.length;){var o=e.charAt(r);t+=o in xc?xc[o]:o,r++}return'"'+t+'"'}var xc={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"};function Sm(n,e){if(Array.isArray(n)){for(var t="[",r=n.length,o=0;o<r;o++)o!==0&&(t+=", "),t+=Sm(n[o],e);return t+="]",t}else return _e(n,e)}function $1(n){return n&&typeof n=="object"&&typeof n.s=="number"&&typeof n.n=="number"&&typeof n.d=="number"||!1}function yn(n,e,t){if(!(this instanceof yn))throw new SyntaxError("Constructor must be called with the new operator");this.actual=n,this.expected=e,this.relation=t,this.message="Dimension mismatch ("+(Array.isArray(n)?"["+n.join(", ")+"]":n)+" "+(this.relation||"!=")+" "+(Array.isArray(e)?"["+e.join(", ")+"]":e)+")",this.stack=new Error().stack}yn.prototype=new RangeError;yn.prototype.constructor=RangeError;yn.prototype.name="DimensionError";yn.prototype.isDimensionError=!0;function Tr(n,e,t){if(!(this instanceof Tr))throw new SyntaxError("Constructor must be called with the new operator");this.index=n,arguments.length<3?(this.min=0,this.max=e):(this.min=e,this.max=t),this.min!==void 0&&this.index<this.min?this.message="Index out of range ("+this.index+" < "+this.min+")":this.max!==void 0&&this.index>=this.max?this.message="Index out of range ("+this.index+" > "+(this.max-1)+")":this.message="Index out of range ("+this.index+")",this.stack=new Error().stack}Tr.prototype=new RangeError;Tr.prototype.constructor=RangeError;Tr.prototype.name="IndexError";Tr.prototype.isIndexError=!0;function Tt(n){for(var e=[];Array.isArray(n);)e.push(n.length),n=n[0];return e}function Am(n,e,t){var r,o=n.length;if(o!==e[t])throw new yn(o,e[t]);if(t<e.length-1){var i=t+1;for(r=0;r<o;r++){var a=n[r];if(!Array.isArray(a))throw new yn(e.length-1,e.length,"<");Am(n[r],e,i)}}else for(r=0;r<o;r++)if(Array.isArray(n[r]))throw new yn(e.length+1,e.length,">")}function kc(n,e){var t=e.length===0;if(t){if(Array.isArray(n))throw new yn(n.length,0)}else Am(n,e,0)}function zn(n,e){if(n!==void 0){if(!On(n)||!qn(n))throw new TypeError("Index must be an integer (value: "+n+")");if(n<0||typeof e=="number"&&n>=e)throw new Tr(n,e)}}function Dp(n,e,t){if(!Array.isArray(e))throw new TypeError("Array expected");if(e.length===0)throw new Error("Resizing to scalar is not supported");e.forEach(function(o){if(!On(o)||!qn(o)||o<0)throw new TypeError("Invalid size, must contain positive integers (size: "+_e(e)+")")}),(On(n)||Te(n))&&(n=[n]);var r=t!==void 0?t:0;return Ep(n,e,0,r),n}function Ep(n,e,t,r){var o,i,a=n.length,l=e[t],u=Math.min(a,l);if(n.length=l,t<e.length-1){var d=t+1;for(o=0;o<u;o++)i=n[o],Array.isArray(i)||(i=[i],n[o]=i),Ep(i,e,d,r);for(o=u;o<l;o++)i=[],n[o]=i,Ep(i,e,d,r)}else{for(o=0;o<u;o++)for(;Array.isArray(n[o]);)n[o]=n[o][0];for(o=u;o<l;o++)n[o]=r}}function Fm(n,e){var t=L1(n),r=t.length;if(!Array.isArray(n)||!Array.isArray(e))throw new TypeError("Array expected");if(e.length===0)throw new yn(0,r,"!=");e=zs(e,r);var o=_m(e);if(r!==o)throw new yn(o,r,"!=");try{return R1(t,e)}catch(i){throw i instanceof yn?new yn(o,r,"!="):i}}function zs(n,e){var t=_m(n),r=n.slice(),o=-1,i=n.indexOf(o),a=n.indexOf(o,i+1)>=0;if(a)throw new Error("More than one wildcard in sizes");var l=i>=0,u=e%t===0;if(l)if(u)r[i]=-e/t;else throw new Error("Could not replace wildcard, since "+e+" is no multiple of "+-t);return r}function _m(n){return n.reduce((e,t)=>e*t,1)}function R1(n,e){for(var t=n,r,o=e.length-1;o>0;o--){var i=e[o];r=[];for(var a=t.length/i,l=0;l<a;l++)r.push(t.slice(l*i,(l+1)*i));t=r}return t}function Nm(n,e,t,r){var o=r||Tt(n);if(t)for(var i=0;i<t;i++)n=[n],o.unshift(1);for(n=Pm(n,e,0);o.length<e;)o.push(1);return n}function Pm(n,e,t){var r,o;if(Array.isArray(n)){var i=t+1;for(r=0,o=n.length;r<o;r++)n[r]=Pm(n[r],e,i)}else for(var a=t;a<e;a++)n=[n];return n}function L1(n){if(!Array.isArray(n))return n;var e=[];return n.forEach(function t(r){Array.isArray(r)?r.forEach(t):e.push(r)}),e}function nl(n,e){for(var t,r=0,o=0;o<n.length;o++){var i=n[o],a=Array.isArray(i);if(o===0&&a&&(r=i.length),a&&i.length!==r)return;var l=a?nl(i,e):e(i);if(t===void 0)t=l;else if(t!==l)return"mixed"}return t}function Tm(n,e,t,r){if(r<t){if(n.length!==e.length)throw new yn(n.length,e.length);for(var o=[],i=0;i<n.length;i++)o[i]=Tm(n[i],e[i],t,r+1);return o}else return n.concat(e)}function Om(){var n=Array.prototype.slice.call(arguments,0,-1),e=Array.prototype.slice.call(arguments,-1);if(n.length===1)return n[0];if(n.length>1)return n.slice(1).reduce(function(t,r){return Tm(t,r,e,0)},n[0]);throw new Error("Wrong number of arguments in function concat")}function j1(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];for(var r=e.map(c=>c.length),o=Math.max(...r),i=new Array(o).fill(null),a=0;a<e.length;a++)for(var l=e[a],u=r[a],d=0;d<u;d++){var s=o-u+d;l[d]>i[s]&&(i[s]=l[d])}for(var p=0;p<e.length;p++)el(e[p],i);return i}function el(n,e){for(var t=e.length,r=n.length,o=0;o<r;o++){var i=t-r+o;if(n[o]<e[i]&&n[o]>1||n[o]>e[i])throw new Error("shape missmatch: missmatch is found in arg with shape (".concat(n,") not possible to broadcast dimension ").concat(r," with size ").concat(n[o]," to size ").concat(e[i]))}}function Dc(n,e){var t=Tt(n);if(go(t,e))return n;el(t,e);var r=j1(t,e),o=r.length,i=[...Array(o-t.length).fill(1),...t],a=U1(n);t.length<o&&(a=Fm(a,i),t=Tt(a));for(var l=0;l<o;l++)t[l]<r[l]&&(a=q1(a,r[l],l),t=Tt(a));return a}function q1(n,e,t){return Om(...Array(e).fill(n),t)}function U1(n){return Ci([],n)}function xn(n,e,t,r){function o(i){var a=A1(i,e.map(V1));return H1(n,e,i),t(a)}return o.isFactory=!0,o.fn=n,o.dependencies=e.slice().sort(),r&&(o.meta=r),o}function H1(n,e,t){var r=e.filter(i=>!W1(i)).every(i=>t[i]!==void 0);if(!r){var o=e.filter(i=>t[i]===void 0);throw new Error('Cannot create function "'.concat(n,'", ')+"some dependencies are missing: ".concat(o.map(i=>'"'.concat(i,'"')).join(", "),"."))}}function W1(n){return n&&n[0]==="?"}function V1(n){return n&&n[0]==="?"?n.slice(1):n}function Z1(n,e){if(Bm(n)&&Mm(n,e))return n[e];throw typeof n[e]=="function"&&K1(n,e)?new Error('Cannot access method "'+e+'" as a property'):new Error('No access to property "'+e+'"')}function Q1(n,e,t){if(Bm(n)&&Mm(n,e))return n[e]=t,t;throw new Error('No access to property "'+e+'"')}function Y1(n,e){return e in n}function Mm(n,e){return!n||typeof n!="object"?!1:Si(X1,e)?!0:!(e in Object.prototype||e in Function.prototype)}function K1(n,e){return n==null||typeof n[e]!="function"||Si(n,e)&&Object.getPrototypeOf&&e in Object.getPrototypeOf(n)?!1:Si(G1,e)?!0:!(e in Object.prototype||e in Function.prototype)}function Bm(n){return typeof n=="object"&&n&&n.constructor===Object}var X1={length:!0,name:!0},G1={toString:!0,valueOf:!0,toLocaleString:!0};class J1{constructor(e){this.wrappedObject=e}keys(){return Object.keys(this.wrappedObject)}get(e){return Z1(this.wrappedObject,e)}set(e,t){return Q1(this.wrappedObject,e,t),this}has(e){return Y1(this.wrappedObject,e)}}function nv(n){return n?n instanceof Map||n instanceof J1||typeof n.set=="function"&&typeof n.get=="function"&&typeof n.keys=="function"&&typeof n.has=="function":!1}var zm=function(){return zm=vc.create,vc},ev=["?BigNumber","?Complex","?DenseMatrix","?Fraction"],tv=xn("typed",ev,function(e){var{BigNumber:t,Complex:r,DenseMatrix:o,Fraction:i}=e,a=zm();return a.clear(),a.addTypes([{name:"number",test:On},{name:"Complex",test:wm},{name:"BigNumber",test:Te},{name:"Fraction",test:ym},{name:"Unit",test:xm},{name:"identifier",test:l=>ht&&/^(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])*$/.test(l)},{name:"string",test:ht},{name:"Chain",test:E1},{name:"Array",test:Bn},{name:"Matrix",test:wt},{name:"DenseMatrix",test:X5},{name:"SparseMatrix",test:G5},{name:"Range",test:J5},{name:"Index",test:Bs},{name:"boolean",test:n1},{name:"ResultSet",test:e1},{name:"Help",test:t1},{name:"function",test:r1},{name:"Date",test:o1},{name:"RegExp",test:i1},{name:"null",test:a1},{name:"undefined",test:l1},{name:"AccessorNode",test:u1},{name:"ArrayNode",test:p1},{name:"AssignmentNode",test:s1},{name:"BlockNode",test:d1},{name:"ConditionalNode",test:c1},{name:"ConstantNode",test:f1},{name:"FunctionNode",test:m1},{name:"FunctionAssignmentNode",test:b1},{name:"IndexNode",test:g1},{name:"Node",test:h1},{name:"ObjectNode",test:v1},{name:"OperatorNode",test:w1},{name:"ParenthesisNode",test:y1},{name:"RangeNode",test:x1},{name:"RelationalNode",test:k1},{name:"SymbolNode",test:D1},{name:"Map",test:nv},{name:"Object",test:km}]),a.addConversions([{from:"number",to:"BigNumber",convert:function(u){if(t||vu(u),T1(u)>15)throw new TypeError("Cannot implicitly convert a number with >15 significant digits to BigNumber (value: "+u+"). Use function bignumber(x) to convert to BigNumber.");return new t(u)}},{from:"number",to:"Complex",convert:function(u){return r||pa(u),new r(u,0)}},{from:"BigNumber",to:"Complex",convert:function(u){return r||pa(u),new r(u.toNumber(),0)}},{from:"Fraction",to:"BigNumber",convert:function(u){throw new TypeError("Cannot implicitly convert a Fraction to BigNumber or vice versa. Use function bignumber(x) to convert to BigNumber or fraction(x) to convert to Fraction.")}},{from:"Fraction",to:"Complex",convert:function(u){return r||pa(u),new r(u.valueOf(),0)}},{from:"number",to:"Fraction",convert:function(u){i||wu(u);var d=new i(u);if(d.valueOf()!==u)throw new TypeError("Cannot implicitly convert a number to a Fraction when there will be a loss of precision (value: "+u+"). Use function fraction(x) to convert to Fraction.");return d}},{from:"string",to:"number",convert:function(u){var d=Number(u);if(isNaN(d))throw new Error('Cannot convert "'+u+'" to a number');return d}},{from:"string",to:"BigNumber",convert:function(u){t||vu(u);try{return new t(u)}catch{throw new Error('Cannot convert "'+u+'" to BigNumber')}}},{from:"string",to:"Fraction",convert:function(u){i||wu(u);try{return new i(u)}catch{throw new Error('Cannot convert "'+u+'" to Fraction')}}},{from:"string",to:"Complex",convert:function(u){r||pa(u);try{return new r(u)}catch{throw new Error('Cannot convert "'+u+'" to Complex')}}},{from:"boolean",to:"number",convert:function(u){return+u}},{from:"boolean",to:"BigNumber",convert:function(u){return t||vu(u),new t(+u)}},{from:"boolean",to:"Fraction",convert:function(u){return i||wu(u),new i(+u)}},{from:"boolean",to:"string",convert:function(u){return String(u)}},{from:"Array",to:"Matrix",convert:function(u){return o||rv(),new o(u)}},{from:"Matrix",to:"Array",convert:function(u){return u.valueOf()}}]),a.onMismatch=(l,u,d)=>{var s=a.createError(l,u,d);if(["wrongType","mismatch"].includes(s.data.category)&&u.length===1&&Ja(u[0])&&d.some(c=>!c.params.includes(","))){var p=new TypeError("Function '".concat(l,"' doesn't apply to matrices. To call it ")+"elementwise on a matrix 'M', try 'map(M, ".concat(l,")'."));throw p.data=s.data,p}throw s},a.onMismatch=(l,u,d)=>{var s=a.createError(l,u,d);if(["wrongType","mismatch"].includes(s.data.category)&&u.length===1&&Ja(u[0])&&d.some(c=>!c.params.includes(","))){var p=new TypeError("Function '".concat(l,"' doesn't apply to matrices. To call it ")+"elementwise on a matrix 'M', try 'map(M, ".concat(l,")'."));throw p.data=s.data,p}throw s},a});function vu(n){throw new Error("Cannot convert value ".concat(n," into a BigNumber: no class 'BigNumber' provided"))}function pa(n){throw new Error("Cannot convert value ".concat(n," into a Complex number: no class 'Complex' provided"))}function rv(){throw new Error("Cannot convert array into a Matrix: no class 'DenseMatrix' provided")}function wu(n){throw new Error("Cannot convert value ".concat(n," into a Fraction, no class 'Fraction' provided."))}/*!
 *  decimal.js v10.4.3
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */var Gr=9e15,dr=1e9,Cp="0123456789abcdef",tl="2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",rl="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",Sp={precision:20,rounding:4,modulo:1,toExpNeg:-7,toExpPos:21,minE:-Gr,maxE:Gr,crypto:!1},Im,Nt,ln=!0,Fl="[DecimalError] ",lr=Fl+"Invalid argument: ",$m=Fl+"Precision limit exceeded",Rm=Fl+"crypto unavailable",Lm="[object Decimal]",be=Math.floor,Yn=Math.pow,ov=/^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,iv=/^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,av=/^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,jm=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,ft=1e7,tn=7,lv=9007199254740991,uv=tl.length-1,Ap=rl.length-1,H={toStringTag:Lm};H.absoluteValue=H.abs=function(){var n=new this.constructor(this);return n.s<0&&(n.s=1),en(n)};H.ceil=function(){return en(new this.constructor(this),this.e+1,2)};H.clampedTo=H.clamp=function(n,e){var t,r=this,o=r.constructor;if(n=new o(n),e=new o(e),!n.s||!e.s)return new o(NaN);if(n.gt(e))throw Error(lr+e);return t=r.cmp(n),t<0?n:r.cmp(e)>0?e:new o(r)};H.comparedTo=H.cmp=function(n){var e,t,r,o,i=this,a=i.d,l=(n=new i.constructor(n)).d,u=i.s,d=n.s;if(!a||!l)return!u||!d?NaN:u!==d?u:a===l?0:!a^u<0?1:-1;if(!a[0]||!l[0])return a[0]?u:l[0]?-d:0;if(u!==d)return u;if(i.e!==n.e)return i.e>n.e^u<0?1:-1;for(r=a.length,o=l.length,e=0,t=r<o?r:o;e<t;++e)if(a[e]!==l[e])return a[e]>l[e]^u<0?1:-1;return r===o?0:r>o^u<0?1:-1};H.cosine=H.cos=function(){var n,e,t=this,r=t.constructor;return t.d?t.d[0]?(n=r.precision,e=r.rounding,r.precision=n+Math.max(t.e,t.sd())+tn,r.rounding=1,t=pv(r,Vm(r,t)),r.precision=n,r.rounding=e,en(Nt==2||Nt==3?t.neg():t,n,e,!0)):new r(1):new r(NaN)};H.cubeRoot=H.cbrt=function(){var n,e,t,r,o,i,a,l,u,d,s=this,p=s.constructor;if(!s.isFinite()||s.isZero())return new p(s);for(ln=!1,i=s.s*Yn(s.s*s,1/3),!i||Math.abs(i)==1/0?(t=ae(s.d),n=s.e,(i=(n-t.length+1)%3)&&(t+=i==1||i==-2?"0":"00"),i=Yn(t,1/3),n=be((n+1)/3)-(n%3==(n<0?-1:2)),i==1/0?t="5e"+n:(t=i.toExponential(),t=t.slice(0,t.indexOf("e")+1)+n),r=new p(t),r.s=s.s):r=new p(i.toString()),a=(n=p.precision)+3;;)if(l=r,u=l.times(l).times(l),d=u.plus(s),r=Fn(d.plus(s).times(l),d.plus(u),a+2,1),ae(l.d).slice(0,a)===(t=ae(r.d)).slice(0,a))if(t=t.slice(a-3,a+1),t=="9999"||!o&&t=="4999"){if(!o&&(en(l,n+1,0),l.times(l).times(l).eq(s))){r=l;break}a+=4,o=1}else{(!+t||!+t.slice(1)&&t.charAt(0)=="5")&&(en(r,n+1,1),e=!r.times(r).times(r).eq(s));break}return ln=!0,en(r,n,p.rounding,e)};H.decimalPlaces=H.dp=function(){var n,e=this.d,t=NaN;if(e){if(n=e.length-1,t=(n-be(this.e/tn))*tn,n=e[n],n)for(;n%10==0;n/=10)t--;t<0&&(t=0)}return t};H.dividedBy=H.div=function(n){return Fn(this,new this.constructor(n))};H.dividedToIntegerBy=H.divToInt=function(n){var e=this,t=e.constructor;return en(Fn(e,new t(n),0,1,1),t.precision,t.rounding)};H.equals=H.eq=function(n){return this.cmp(n)===0};H.floor=function(){return en(new this.constructor(this),this.e+1,3)};H.greaterThan=H.gt=function(n){return this.cmp(n)>0};H.greaterThanOrEqualTo=H.gte=function(n){var e=this.cmp(n);return e==1||e===0};H.hyperbolicCosine=H.cosh=function(){var n,e,t,r,o,i=this,a=i.constructor,l=new a(1);if(!i.isFinite())return new a(i.s?1/0:NaN);if(i.isZero())return l;t=a.precision,r=a.rounding,a.precision=t+Math.max(i.e,i.sd())+4,a.rounding=1,o=i.d.length,o<32?(n=Math.ceil(o/3),e=(1/Nl(4,n)).toString()):(n=16,e="2.3283064365386962890625e-10"),i=vo(a,1,i.times(e),new a(1),!0);for(var u,d=n,s=new a(8);d--;)u=i.times(i),i=l.minus(u.times(s.minus(u.times(s))));return en(i,a.precision=t,a.rounding=r,!0)};H.hyperbolicSine=H.sinh=function(){var n,e,t,r,o=this,i=o.constructor;if(!o.isFinite()||o.isZero())return new i(o);if(e=i.precision,t=i.rounding,i.precision=e+Math.max(o.e,o.sd())+4,i.rounding=1,r=o.d.length,r<3)o=vo(i,2,o,o,!0);else{n=1.4*Math.sqrt(r),n=n>16?16:n|0,o=o.times(1/Nl(5,n)),o=vo(i,2,o,o,!0);for(var a,l=new i(5),u=new i(16),d=new i(20);n--;)a=o.times(o),o=o.times(l.plus(a.times(u.times(a).plus(d))))}return i.precision=e,i.rounding=t,en(o,e,t,!0)};H.hyperbolicTangent=H.tanh=function(){var n,e,t=this,r=t.constructor;return t.isFinite()?t.isZero()?new r(t):(n=r.precision,e=r.rounding,r.precision=n+7,r.rounding=1,Fn(t.sinh(),t.cosh(),r.precision=n,r.rounding=e)):new r(t.s)};H.inverseCosine=H.acos=function(){var n,e=this,t=e.constructor,r=e.abs().cmp(1),o=t.precision,i=t.rounding;return r!==-1?r===0?e.isNeg()?st(t,o,i):new t(0):new t(NaN):e.isZero()?st(t,o+4,i).times(.5):(t.precision=o+6,t.rounding=1,e=e.asin(),n=st(t,o+4,i).times(.5),t.precision=o,t.rounding=i,n.minus(e))};H.inverseHyperbolicCosine=H.acosh=function(){var n,e,t=this,r=t.constructor;return t.lte(1)?new r(t.eq(1)?0:NaN):t.isFinite()?(n=r.precision,e=r.rounding,r.precision=n+Math.max(Math.abs(t.e),t.sd())+4,r.rounding=1,ln=!1,t=t.times(t).minus(1).sqrt().plus(t),ln=!0,r.precision=n,r.rounding=e,t.ln()):new r(t)};H.inverseHyperbolicSine=H.asinh=function(){var n,e,t=this,r=t.constructor;return!t.isFinite()||t.isZero()?new r(t):(n=r.precision,e=r.rounding,r.precision=n+2*Math.max(Math.abs(t.e),t.sd())+6,r.rounding=1,ln=!1,t=t.times(t).plus(1).sqrt().plus(t),ln=!0,r.precision=n,r.rounding=e,t.ln())};H.inverseHyperbolicTangent=H.atanh=function(){var n,e,t,r,o=this,i=o.constructor;return o.isFinite()?o.e>=0?new i(o.abs().eq(1)?o.s/0:o.isZero()?o:NaN):(n=i.precision,e=i.rounding,r=o.sd(),Math.max(r,n)<2*-o.e-1?en(new i(o),n,e,!0):(i.precision=t=r-o.e,o=Fn(o.plus(1),new i(1).minus(o),t+n,1),i.precision=n+4,i.rounding=1,o=o.ln(),i.precision=n,i.rounding=e,o.times(.5))):new i(NaN)};H.inverseSine=H.asin=function(){var n,e,t,r,o=this,i=o.constructor;return o.isZero()?new i(o):(e=o.abs().cmp(1),t=i.precision,r=i.rounding,e!==-1?e===0?(n=st(i,t+4,r).times(.5),n.s=o.s,n):new i(NaN):(i.precision=t+6,i.rounding=1,o=o.div(new i(1).minus(o.times(o)).sqrt().plus(1)).atan(),i.precision=t,i.rounding=r,o.times(2)))};H.inverseTangent=H.atan=function(){var n,e,t,r,o,i,a,l,u,d=this,s=d.constructor,p=s.precision,c=s.rounding;if(d.isFinite()){if(d.isZero())return new s(d);if(d.abs().eq(1)&&p+4<=Ap)return a=st(s,p+4,c).times(.25),a.s=d.s,a}else{if(!d.s)return new s(NaN);if(p+4<=Ap)return a=st(s,p+4,c).times(.5),a.s=d.s,a}for(s.precision=l=p+10,s.rounding=1,t=Math.min(28,l/tn+2|0),n=t;n;--n)d=d.div(d.times(d).plus(1).sqrt().plus(1));for(ln=!1,e=Math.ceil(l/tn),r=1,u=d.times(d),a=new s(d),o=d;n!==-1;)if(o=o.times(u),i=a.minus(o.div(r+=2)),o=o.times(u),a=i.plus(o.div(r+=2)),a.d[e]!==void 0)for(n=e;a.d[n]===i.d[n]&&n--;);return t&&(a=a.times(2<<t-1)),ln=!0,en(a,s.precision=p,s.rounding=c,!0)};H.isFinite=function(){return!!this.d};H.isInteger=H.isInt=function(){return!!this.d&&be(this.e/tn)>this.d.length-2};H.isNaN=function(){return!this.s};H.isNegative=H.isNeg=function(){return this.s<0};H.isPositive=H.isPos=function(){return this.s>0};H.isZero=function(){return!!this.d&&this.d[0]===0};H.lessThan=H.lt=function(n){return this.cmp(n)<0};H.lessThanOrEqualTo=H.lte=function(n){return this.cmp(n)<1};H.logarithm=H.log=function(n){var e,t,r,o,i,a,l,u,d=this,s=d.constructor,p=s.precision,c=s.rounding,m=5;if(n==null)n=new s(10),e=!0;else{if(n=new s(n),t=n.d,n.s<0||!t||!t[0]||n.eq(1))return new s(NaN);e=n.eq(10)}if(t=d.d,d.s<0||!t||!t[0]||d.eq(1))return new s(t&&!t[0]?-1/0:d.s!=1?NaN:t?0:1/0);if(e)if(t.length>1)i=!0;else{for(o=t[0];o%10===0;)o/=10;i=o!==1}if(ln=!1,l=p+m,a=Yt(d,l),r=e?ol(s,l+10):Yt(n,l),u=Fn(a,r,l,1),Ai(u.d,o=p,c))do if(l+=10,a=Yt(d,l),r=e?ol(s,l+10):Yt(n,l),u=Fn(a,r,l,1),!i){+ae(u.d).slice(o+1,o+15)+1==1e14&&(u=en(u,p+1,0));break}while(Ai(u.d,o+=10,c));return ln=!0,en(u,p,c)};H.minus=H.sub=function(n){var e,t,r,o,i,a,l,u,d,s,p,c,m=this,w=m.constructor;if(n=new w(n),!m.d||!n.d)return!m.s||!n.s?n=new w(NaN):m.d?n.s=-n.s:n=new w(n.d||m.s!==n.s?m:NaN),n;if(m.s!=n.s)return n.s=-n.s,m.plus(n);if(d=m.d,c=n.d,l=w.precision,u=w.rounding,!d[0]||!c[0]){if(c[0])n.s=-n.s;else if(d[0])n=new w(m);else return new w(u===3?-0:0);return ln?en(n,l,u):n}if(t=be(n.e/tn),s=be(m.e/tn),d=d.slice(),i=s-t,i){for(p=i<0,p?(e=d,i=-i,a=c.length):(e=c,t=s,a=d.length),r=Math.max(Math.ceil(l/tn),a)+2,i>r&&(i=r,e.length=1),e.reverse(),r=i;r--;)e.push(0);e.reverse()}else{for(r=d.length,a=c.length,p=r<a,p&&(a=r),r=0;r<a;r++)if(d[r]!=c[r]){p=d[r]<c[r];break}i=0}for(p&&(e=d,d=c,c=e,n.s=-n.s),a=d.length,r=c.length-a;r>0;--r)d[a++]=0;for(r=c.length;r>i;){if(d[--r]<c[r]){for(o=r;o&&d[--o]===0;)d[o]=ft-1;--d[o],d[r]+=ft}d[r]-=c[r]}for(;d[--a]===0;)d.pop();for(;d[0]===0;d.shift())--t;return d[0]?(n.d=d,n.e=_l(d,t),ln?en(n,l,u):n):new w(u===3?-0:0)};H.modulo=H.mod=function(n){var e,t=this,r=t.constructor;return n=new r(n),!t.d||!n.s||n.d&&!n.d[0]?new r(NaN):!n.d||t.d&&!t.d[0]?en(new r(t),r.precision,r.rounding):(ln=!1,r.modulo==9?(e=Fn(t,n.abs(),0,3,1),e.s*=n.s):e=Fn(t,n,0,r.modulo,1),e=e.times(n),ln=!0,t.minus(e))};H.naturalExponential=H.exp=function(){return Fp(this)};H.naturalLogarithm=H.ln=function(){return Yt(this)};H.negated=H.neg=function(){var n=new this.constructor(this);return n.s=-n.s,en(n)};H.plus=H.add=function(n){var e,t,r,o,i,a,l,u,d,s,p=this,c=p.constructor;if(n=new c(n),!p.d||!n.d)return!p.s||!n.s?n=new c(NaN):p.d||(n=new c(n.d||p.s===n.s?p:NaN)),n;if(p.s!=n.s)return n.s=-n.s,p.minus(n);if(d=p.d,s=n.d,l=c.precision,u=c.rounding,!d[0]||!s[0])return s[0]||(n=new c(p)),ln?en(n,l,u):n;if(i=be(p.e/tn),r=be(n.e/tn),d=d.slice(),o=i-r,o){for(o<0?(t=d,o=-o,a=s.length):(t=s,r=i,a=d.length),i=Math.ceil(l/tn),a=i>a?i+1:a+1,o>a&&(o=a,t.length=1),t.reverse();o--;)t.push(0);t.reverse()}for(a=d.length,o=s.length,a-o<0&&(o=a,t=s,s=d,d=t),e=0;o;)e=(d[--o]=d[o]+s[o]+e)/ft|0,d[o]%=ft;for(e&&(d.unshift(e),++r),a=d.length;d[--a]==0;)d.pop();return n.d=d,n.e=_l(d,r),ln?en(n,l,u):n};H.precision=H.sd=function(n){var e,t=this;if(n!==void 0&&n!==!!n&&n!==1&&n!==0)throw Error(lr+n);return t.d?(e=qm(t.d),n&&t.e+1>e&&(e=t.e+1)):e=NaN,e};H.round=function(){var n=this,e=n.constructor;return en(new e(n),n.e+1,e.rounding)};H.sine=H.sin=function(){var n,e,t=this,r=t.constructor;return t.isFinite()?t.isZero()?new r(t):(n=r.precision,e=r.rounding,r.precision=n+Math.max(t.e,t.sd())+tn,r.rounding=1,t=dv(r,Vm(r,t)),r.precision=n,r.rounding=e,en(Nt>2?t.neg():t,n,e,!0)):new r(NaN)};H.squareRoot=H.sqrt=function(){var n,e,t,r,o,i,a=this,l=a.d,u=a.e,d=a.s,s=a.constructor;if(d!==1||!l||!l[0])return new s(!d||d<0&&(!l||l[0])?NaN:l?a:1/0);for(ln=!1,d=Math.sqrt(+a),d==0||d==1/0?(e=ae(l),(e.length+u)%2==0&&(e+="0"),d=Math.sqrt(e),u=be((u+1)/2)-(u<0||u%2),d==1/0?e="5e"+u:(e=d.toExponential(),e=e.slice(0,e.indexOf("e")+1)+u),r=new s(e)):r=new s(d.toString()),t=(u=s.precision)+3;;)if(i=r,r=i.plus(Fn(a,i,t+2,1)).times(.5),ae(i.d).slice(0,t)===(e=ae(r.d)).slice(0,t))if(e=e.slice(t-3,t+1),e=="9999"||!o&&e=="4999"){if(!o&&(en(i,u+1,0),i.times(i).eq(a))){r=i;break}t+=4,o=1}else{(!+e||!+e.slice(1)&&e.charAt(0)=="5")&&(en(r,u+1,1),n=!r.times(r).eq(a));break}return ln=!0,en(r,u,s.rounding,n)};H.tangent=H.tan=function(){var n,e,t=this,r=t.constructor;return t.isFinite()?t.isZero()?new r(t):(n=r.precision,e=r.rounding,r.precision=n+10,r.rounding=1,t=t.sin(),t.s=1,t=Fn(t,new r(1).minus(t.times(t)).sqrt(),n+10,0),r.precision=n,r.rounding=e,en(Nt==2||Nt==4?t.neg():t,n,e,!0)):new r(NaN)};H.times=H.mul=function(n){var e,t,r,o,i,a,l,u,d,s=this,p=s.constructor,c=s.d,m=(n=new p(n)).d;if(n.s*=s.s,!c||!c[0]||!m||!m[0])return new p(!n.s||c&&!c[0]&&!m||m&&!m[0]&&!c?NaN:!c||!m?n.s/0:n.s*0);for(t=be(s.e/tn)+be(n.e/tn),u=c.length,d=m.length,u<d&&(i=c,c=m,m=i,a=u,u=d,d=a),i=[],a=u+d,r=a;r--;)i.push(0);for(r=d;--r>=0;){for(e=0,o=u+r;o>r;)l=i[o]+m[r]*c[o-r-1]+e,i[o--]=l%ft|0,e=l/ft|0;i[o]=(i[o]+e)%ft|0}for(;!i[--a];)i.pop();return e?++t:i.shift(),n.d=i,n.e=_l(i,t),ln?en(n,p.precision,p.rounding):n};H.toBinary=function(n,e){return Is(this,2,n,e)};H.toDecimalPlaces=H.toDP=function(n,e){var t=this,r=t.constructor;return t=new r(t),n===void 0?t:(ze(n,0,dr),e===void 0?e=r.rounding:ze(e,0,8),en(t,n+t.e+1,e))};H.toExponential=function(n,e){var t,r=this,o=r.constructor;return n===void 0?t=kt(r,!0):(ze(n,0,dr),e===void 0?e=o.rounding:ze(e,0,8),r=en(new o(r),n+1,e),t=kt(r,!0,n+1)),r.isNeg()&&!r.isZero()?"-"+t:t};H.toFixed=function(n,e){var t,r,o=this,i=o.constructor;return n===void 0?t=kt(o):(ze(n,0,dr),e===void 0?e=i.rounding:ze(e,0,8),r=en(new i(o),n+o.e+1,e),t=kt(r,!1,n+r.e+1)),o.isNeg()&&!o.isZero()?"-"+t:t};H.toFraction=function(n){var e,t,r,o,i,a,l,u,d,s,p,c,m=this,w=m.d,b=m.constructor;if(!w)return new b(m);if(d=t=new b(1),r=u=new b(0),e=new b(r),i=e.e=qm(w)-m.e-1,a=i%tn,e.d[0]=Yn(10,a<0?tn+a:a),n==null)n=i>0?e:d;else{if(l=new b(n),!l.isInt()||l.lt(d))throw Error(lr+l);n=l.gt(e)?i>0?e:d:l}for(ln=!1,l=new b(ae(w)),s=b.precision,b.precision=i=w.length*tn*2;p=Fn(l,e,0,1,1),o=t.plus(p.times(r)),o.cmp(n)!=1;)t=r,r=o,o=d,d=u.plus(p.times(o)),u=o,o=e,e=l.minus(p.times(o)),l=o;return o=Fn(n.minus(t),r,0,1,1),u=u.plus(o.times(d)),t=t.plus(o.times(r)),u.s=d.s=m.s,c=Fn(d,r,i,1).minus(m).abs().cmp(Fn(u,t,i,1).minus(m).abs())<1?[d,r]:[u,t],b.precision=s,ln=!0,c};H.toHexadecimal=H.toHex=function(n,e){return Is(this,16,n,e)};H.toNearest=function(n,e){var t=this,r=t.constructor;if(t=new r(t),n==null){if(!t.d)return t;n=new r(1),e=r.rounding}else{if(n=new r(n),e===void 0?e=r.rounding:ze(e,0,8),!t.d)return n.s?t:n;if(!n.d)return n.s&&(n.s=t.s),n}return n.d[0]?(ln=!1,t=Fn(t,n,0,e,1).times(n),ln=!0,en(t)):(n.s=t.s,t=n),t};H.toNumber=function(){return+this};H.toOctal=function(n,e){return Is(this,8,n,e)};H.toPower=H.pow=function(n){var e,t,r,o,i,a,l=this,u=l.constructor,d=+(n=new u(n));if(!l.d||!n.d||!l.d[0]||!n.d[0])return new u(Yn(+l,d));if(l=new u(l),l.eq(1))return l;if(r=u.precision,i=u.rounding,n.eq(1))return en(l,r,i);if(e=be(n.e/tn),e>=n.d.length-1&&(t=d<0?-d:d)<=lv)return o=Um(u,l,t,r),n.s<0?new u(1).div(o):en(o,r,i);if(a=l.s,a<0){if(e<n.d.length-1)return new u(NaN);if(n.d[e]&1||(a=1),l.e==0&&l.d[0]==1&&l.d.length==1)return l.s=a,l}return t=Yn(+l,d),e=t==0||!isFinite(t)?be(d*(Math.log("0."+ae(l.d))/Math.LN10+l.e+1)):new u(t+"").e,e>u.maxE+1||e<u.minE-1?new u(e>0?a/0:0):(ln=!1,u.rounding=l.s=1,t=Math.min(12,(e+"").length),o=Fp(n.times(Yt(l,r+t)),r),o.d&&(o=en(o,r+5,1),Ai(o.d,r,i)&&(e=r+10,o=en(Fp(n.times(Yt(l,e+t)),e),e+5,1),+ae(o.d).slice(r+1,r+15)+1==1e14&&(o=en(o,r+1,0)))),o.s=a,ln=!0,u.rounding=i,en(o,r,i))};H.toPrecision=function(n,e){var t,r=this,o=r.constructor;return n===void 0?t=kt(r,r.e<=o.toExpNeg||r.e>=o.toExpPos):(ze(n,1,dr),e===void 0?e=o.rounding:ze(e,0,8),r=en(new o(r),n,e),t=kt(r,n<=r.e||r.e<=o.toExpNeg,n)),r.isNeg()&&!r.isZero()?"-"+t:t};H.toSignificantDigits=H.toSD=function(n,e){var t=this,r=t.constructor;return n===void 0?(n=r.precision,e=r.rounding):(ze(n,1,dr),e===void 0?e=r.rounding:ze(e,0,8)),en(new r(t),n,e)};H.toString=function(){var n=this,e=n.constructor,t=kt(n,n.e<=e.toExpNeg||n.e>=e.toExpPos);return n.isNeg()&&!n.isZero()?"-"+t:t};H.truncated=H.trunc=function(){return en(new this.constructor(this),this.e+1,1)};H.valueOf=H.toJSON=function(){var n=this,e=n.constructor,t=kt(n,n.e<=e.toExpNeg||n.e>=e.toExpPos);return n.isNeg()?"-"+t:t};function ae(n){var e,t,r,o=n.length-1,i="",a=n[0];if(o>0){for(i+=a,e=1;e<o;e++)r=n[e]+"",t=tn-r.length,t&&(i+=Ut(t)),i+=r;a=n[e],r=a+"",t=tn-r.length,t&&(i+=Ut(t))}else if(a===0)return"0";for(;a%10===0;)a/=10;return i+a}function ze(n,e,t){if(n!==~~n||n<e||n>t)throw Error(lr+n)}function Ai(n,e,t,r){var o,i,a,l;for(i=n[0];i>=10;i/=10)--e;return--e<0?(e+=tn,o=0):(o=Math.ceil((e+1)/tn),e%=tn),i=Yn(10,tn-e),l=n[o]%i|0,r==null?e<3?(e==0?l=l/100|0:e==1&&(l=l/10|0),a=t<4&&l==99999||t>3&&l==49999||l==5e4||l==0):a=(t<4&&l+1==i||t>3&&l+1==i/2)&&(n[o+1]/i/100|0)==Yn(10,e-2)-1||(l==i/2||l==0)&&(n[o+1]/i/100|0)==0:e<4?(e==0?l=l/1e3|0:e==1?l=l/100|0:e==2&&(l=l/10|0),a=(r||t<4)&&l==9999||!r&&t>3&&l==4999):a=((r||t<4)&&l+1==i||!r&&t>3&&l+1==i/2)&&(n[o+1]/i/1e3|0)==Yn(10,e-3)-1,a}function Ca(n,e,t){for(var r,o=[0],i,a=0,l=n.length;a<l;){for(i=o.length;i--;)o[i]*=e;for(o[0]+=Cp.indexOf(n.charAt(a++)),r=0;r<o.length;r++)o[r]>t-1&&(o[r+1]===void 0&&(o[r+1]=0),o[r+1]+=o[r]/t|0,o[r]%=t)}return o.reverse()}function pv(n,e){var t,r,o;if(e.isZero())return e;r=e.d.length,r<32?(t=Math.ceil(r/3),o=(1/Nl(4,t)).toString()):(t=16,o="2.3283064365386962890625e-10"),n.precision+=t,e=vo(n,1,e.times(o),new n(1));for(var i=t;i--;){var a=e.times(e);e=a.times(a).minus(a).times(8).plus(1)}return n.precision-=t,e}var Fn=function(){function n(r,o,i){var a,l=0,u=r.length;for(r=r.slice();u--;)a=r[u]*o+l,r[u]=a%i|0,l=a/i|0;return l&&r.unshift(l),r}function e(r,o,i,a){var l,u;if(i!=a)u=i>a?1:-1;else for(l=u=0;l<i;l++)if(r[l]!=o[l]){u=r[l]>o[l]?1:-1;break}return u}function t(r,o,i,a){for(var l=0;i--;)r[i]-=l,l=r[i]<o[i]?1:0,r[i]=l*a+r[i]-o[i];for(;!r[0]&&r.length>1;)r.shift()}return function(r,o,i,a,l,u){var d,s,p,c,m,w,b,v,f,g,h,y,k,S,E,A,M,B,O,z,K=r.constructor,L=r.s==o.s?1:-1,X=r.d,$=o.d;if(!X||!X[0]||!$||!$[0])return new K(!r.s||!o.s||(X?$&&X[0]==$[0]:!$)?NaN:X&&X[0]==0||!$?L*0:L/0);for(u?(m=1,s=r.e-o.e):(u=ft,m=tn,s=be(r.e/m)-be(o.e/m)),O=$.length,M=X.length,f=new K(L),g=f.d=[],p=0;$[p]==(X[p]||0);p++);if($[p]>(X[p]||0)&&s--,i==null?(S=i=K.precision,a=K.rounding):l?S=i+(r.e-o.e)+1:S=i,S<0)g.push(1),w=!0;else{if(S=S/m+2|0,p=0,O==1){for(c=0,$=$[0],S++;(p<M||c)&&S--;p++)E=c*u+(X[p]||0),g[p]=E/$|0,c=E%$|0;w=c||p<M}else{for(c=u/($[0]+1)|0,c>1&&($=n($,c,u),X=n(X,c,u),O=$.length,M=X.length),A=O,h=X.slice(0,O),y=h.length;y<O;)h[y++]=0;z=$.slice(),z.unshift(0),B=$[0],$[1]>=u/2&&++B;do c=0,d=e($,h,O,y),d<0?(k=h[0],O!=y&&(k=k*u+(h[1]||0)),c=k/B|0,c>1?(c>=u&&(c=u-1),b=n($,c,u),v=b.length,y=h.length,d=e(b,h,v,y),d==1&&(c--,t(b,O<v?z:$,v,u))):(c==0&&(d=c=1),b=$.slice()),v=b.length,v<y&&b.unshift(0),t(h,b,y,u),d==-1&&(y=h.length,d=e($,h,O,y),d<1&&(c++,t(h,O<y?z:$,y,u))),y=h.length):d===0&&(c++,h=[0]),g[p++]=c,d&&h[0]?h[y++]=X[A]||0:(h=[X[A]],y=1);while((A++<M||h[0]!==void 0)&&S--);w=h[0]!==void 0}g[0]||g.shift()}if(m==1)f.e=s,Im=w;else{for(p=1,c=g[0];c>=10;c/=10)p++;f.e=p+s*m-1,en(f,l?i+f.e+1:i,a,w)}return f}}();function en(n,e,t,r){var o,i,a,l,u,d,s,p,c,m=n.constructor;n:if(e!=null){if(p=n.d,!p)return n;for(o=1,l=p[0];l>=10;l/=10)o++;if(i=e-o,i<0)i+=tn,a=e,s=p[c=0],u=s/Yn(10,o-a-1)%10|0;else if(c=Math.ceil((i+1)/tn),l=p.length,c>=l)if(r){for(;l++<=c;)p.push(0);s=u=0,o=1,i%=tn,a=i-tn+1}else break n;else{for(s=l=p[c],o=1;l>=10;l/=10)o++;i%=tn,a=i-tn+o,u=a<0?0:s/Yn(10,o-a-1)%10|0}if(r=r||e<0||p[c+1]!==void 0||(a<0?s:s%Yn(10,o-a-1)),d=t<4?(u||r)&&(t==0||t==(n.s<0?3:2)):u>5||u==5&&(t==4||r||t==6&&(i>0?a>0?s/Yn(10,o-a):0:p[c-1])%10&1||t==(n.s<0?8:7)),e<1||!p[0])return p.length=0,d?(e-=n.e+1,p[0]=Yn(10,(tn-e%tn)%tn),n.e=-e||0):p[0]=n.e=0,n;if(i==0?(p.length=c,l=1,c--):(p.length=c+1,l=Yn(10,tn-i),p[c]=a>0?(s/Yn(10,o-a)%Yn(10,a)|0)*l:0),d)for(;;)if(c==0){for(i=1,a=p[0];a>=10;a/=10)i++;for(a=p[0]+=l,l=1;a>=10;a/=10)l++;i!=l&&(n.e++,p[0]==ft&&(p[0]=1));break}else{if(p[c]+=l,p[c]!=ft)break;p[c--]=0,l=1}for(i=p.length;p[--i]===0;)p.pop()}return ln&&(n.e>m.maxE?(n.d=null,n.e=NaN):n.e<m.minE&&(n.e=0,n.d=[0])),n}function kt(n,e,t){if(!n.isFinite())return Wm(n);var r,o=n.e,i=ae(n.d),a=i.length;return e?(t&&(r=t-a)>0?i=i.charAt(0)+"."+i.slice(1)+Ut(r):a>1&&(i=i.charAt(0)+"."+i.slice(1)),i=i+(n.e<0?"e":"e+")+n.e):o<0?(i="0."+Ut(-o-1)+i,t&&(r=t-a)>0&&(i+=Ut(r))):o>=a?(i+=Ut(o+1-a),t&&(r=t-o-1)>0&&(i=i+"."+Ut(r))):((r=o+1)<a&&(i=i.slice(0,r)+"."+i.slice(r)),t&&(r=t-a)>0&&(o+1===a&&(i+="."),i+=Ut(r))),i}function _l(n,e){var t=n[0];for(e*=tn;t>=10;t/=10)e++;return e}function ol(n,e,t){if(e>uv)throw ln=!0,t&&(n.precision=t),Error($m);return en(new n(tl),e,1,!0)}function st(n,e,t){if(e>Ap)throw Error($m);return en(new n(rl),e,t,!0)}function qm(n){var e=n.length-1,t=e*tn+1;if(e=n[e],e){for(;e%10==0;e/=10)t--;for(e=n[0];e>=10;e/=10)t++}return t}function Ut(n){for(var e="";n--;)e+="0";return e}function Um(n,e,t,r){var o,i=new n(1),a=Math.ceil(r/tn+4);for(ln=!1;;){if(t%2&&(i=i.times(e),Cc(i.d,a)&&(o=!0)),t=be(t/2),t===0){t=i.d.length-1,o&&i.d[t]===0&&++i.d[t];break}e=e.times(e),Cc(e.d,a)}return ln=!0,i}function Ec(n){return n.d[n.d.length-1]&1}function Hm(n,e,t){for(var r,o=new n(e[0]),i=0;++i<e.length;)if(r=new n(e[i]),r.s)o[t](r)&&(o=r);else{o=r;break}return o}function Fp(n,e){var t,r,o,i,a,l,u,d=0,s=0,p=0,c=n.constructor,m=c.rounding,w=c.precision;if(!n.d||!n.d[0]||n.e>17)return new c(n.d?n.d[0]?n.s<0?0:1/0:1:n.s?n.s<0?0:n:NaN);for(e==null?(ln=!1,u=w):u=e,l=new c(.03125);n.e>-2;)n=n.times(l),p+=5;for(r=Math.log(Yn(2,p))/Math.LN10*2+5|0,u+=r,t=i=a=new c(1),c.precision=u;;){if(i=en(i.times(n),u,1),t=t.times(++s),l=a.plus(Fn(i,t,u,1)),ae(l.d).slice(0,u)===ae(a.d).slice(0,u)){for(o=p;o--;)a=en(a.times(a),u,1);if(e==null)if(d<3&&Ai(a.d,u-r,m,d))c.precision=u+=10,t=i=l=new c(1),s=0,d++;else return en(a,c.precision=w,m,ln=!0);else return c.precision=w,a}a=l}}function Yt(n,e){var t,r,o,i,a,l,u,d,s,p,c,m=1,w=10,b=n,v=b.d,f=b.constructor,g=f.rounding,h=f.precision;if(b.s<0||!v||!v[0]||!b.e&&v[0]==1&&v.length==1)return new f(v&&!v[0]?-1/0:b.s!=1?NaN:v?0:b);if(e==null?(ln=!1,s=h):s=e,f.precision=s+=w,t=ae(v),r=t.charAt(0),Math.abs(i=b.e)<15e14){for(;r<7&&r!=1||r==1&&t.charAt(1)>3;)b=b.times(n),t=ae(b.d),r=t.charAt(0),m++;i=b.e,r>1?(b=new f("0."+t),i++):b=new f(r+"."+t.slice(1))}else return d=ol(f,s+2,h).times(i+""),b=Yt(new f(r+"."+t.slice(1)),s-w).plus(d),f.precision=h,e==null?en(b,h,g,ln=!0):b;for(p=b,u=a=b=Fn(b.minus(1),b.plus(1),s,1),c=en(b.times(b),s,1),o=3;;){if(a=en(a.times(c),s,1),d=u.plus(Fn(a,new f(o),s,1)),ae(d.d).slice(0,s)===ae(u.d).slice(0,s))if(u=u.times(2),i!==0&&(u=u.plus(ol(f,s+2,h).times(i+""))),u=Fn(u,new f(m),s,1),e==null)if(Ai(u.d,s-w,g,l))f.precision=s+=w,d=a=b=Fn(p.minus(1),p.plus(1),s,1),c=en(b.times(b),s,1),o=l=1;else return en(u,f.precision=h,g,ln=!0);else return f.precision=h,u;u=d,o+=2}}function Wm(n){return String(n.s*n.s/0)}function _p(n,e){var t,r,o;for((t=e.indexOf("."))>-1&&(e=e.replace(".","")),(r=e.search(/e/i))>0?(t<0&&(t=r),t+=+e.slice(r+1),e=e.substring(0,r)):t<0&&(t=e.length),r=0;e.charCodeAt(r)===48;r++);for(o=e.length;e.charCodeAt(o-1)===48;--o);if(e=e.slice(r,o),e){if(o-=r,n.e=t=t-r-1,n.d=[],r=(t+1)%tn,t<0&&(r+=tn),r<o){for(r&&n.d.push(+e.slice(0,r)),o-=tn;r<o;)n.d.push(+e.slice(r,r+=tn));e=e.slice(r),r=tn-e.length}else r-=o;for(;r--;)e+="0";n.d.push(+e),ln&&(n.e>n.constructor.maxE?(n.d=null,n.e=NaN):n.e<n.constructor.minE&&(n.e=0,n.d=[0]))}else n.e=0,n.d=[0];return n}function sv(n,e){var t,r,o,i,a,l,u,d,s;if(e.indexOf("_")>-1){if(e=e.replace(/(\d)_(?=\d)/g,"$1"),jm.test(e))return _p(n,e)}else if(e==="Infinity"||e==="NaN")return+e||(n.s=NaN),n.e=NaN,n.d=null,n;if(iv.test(e))t=16,e=e.toLowerCase();else if(ov.test(e))t=2;else if(av.test(e))t=8;else throw Error(lr+e);for(i=e.search(/p/i),i>0?(u=+e.slice(i+1),e=e.substring(2,i)):e=e.slice(2),i=e.indexOf("."),a=i>=0,r=n.constructor,a&&(e=e.replace(".",""),l=e.length,i=l-i,o=Um(r,new r(t),i,i*2)),d=Ca(e,t,ft),s=d.length-1,i=s;d[i]===0;--i)d.pop();return i<0?new r(n.s*0):(n.e=_l(d,s),n.d=d,ln=!1,a&&(n=Fn(n,o,l*4)),u&&(n=n.times(Math.abs(u)<54?Yn(2,u):Fr.pow(2,u))),ln=!0,n)}function dv(n,e){var t,r=e.d.length;if(r<3)return e.isZero()?e:vo(n,2,e,e);t=1.4*Math.sqrt(r),t=t>16?16:t|0,e=e.times(1/Nl(5,t)),e=vo(n,2,e,e);for(var o,i=new n(5),a=new n(16),l=new n(20);t--;)o=e.times(e),e=e.times(i.plus(o.times(a.times(o).minus(l))));return e}function vo(n,e,t,r,o){var i,a,l,u,d=n.precision,s=Math.ceil(d/tn);for(ln=!1,u=t.times(t),l=new n(r);;){if(a=Fn(l.times(u),new n(e++*e++),d,1),l=o?r.plus(a):r.minus(a),r=Fn(a.times(u),new n(e++*e++),d,1),a=l.plus(r),a.d[s]!==void 0){for(i=s;a.d[i]===l.d[i]&&i--;);if(i==-1)break}i=l,l=r,r=a,a=i}return ln=!0,a.d.length=s+1,a}function Nl(n,e){for(var t=n;--e;)t*=n;return t}function Vm(n,e){var t,r=e.s<0,o=st(n,n.precision,1),i=o.times(.5);if(e=e.abs(),e.lte(i))return Nt=r?4:1,e;if(t=e.divToInt(o),t.isZero())Nt=r?3:2;else{if(e=e.minus(t.times(o)),e.lte(i))return Nt=Ec(t)?r?2:3:r?4:1,e;Nt=Ec(t)?r?1:4:r?3:2}return e.minus(o).abs()}function Is(n,e,t,r){var o,i,a,l,u,d,s,p,c,m=n.constructor,w=t!==void 0;if(w?(ze(t,1,dr),r===void 0?r=m.rounding:ze(r,0,8)):(t=m.precision,r=m.rounding),!n.isFinite())s=Wm(n);else{for(s=kt(n),a=s.indexOf("."),w?(o=2,e==16?t=t*4-3:e==8&&(t=t*3-2)):o=e,a>=0&&(s=s.replace(".",""),c=new m(1),c.e=s.length-a,c.d=Ca(kt(c),10,o),c.e=c.d.length),p=Ca(s,10,o),i=u=p.length;p[--u]==0;)p.pop();if(!p[0])s=w?"0p+0":"0";else{if(a<0?i--:(n=new m(n),n.d=p,n.e=i,n=Fn(n,c,t,r,0,o),p=n.d,i=n.e,d=Im),a=p[t],l=o/2,d=d||p[t+1]!==void 0,d=r<4?(a!==void 0||d)&&(r===0||r===(n.s<0?3:2)):a>l||a===l&&(r===4||d||r===6&&p[t-1]&1||r===(n.s<0?8:7)),p.length=t,d)for(;++p[--t]>o-1;)p[t]=0,t||(++i,p.unshift(1));for(u=p.length;!p[u-1];--u);for(a=0,s="";a<u;a++)s+=Cp.charAt(p[a]);if(w){if(u>1)if(e==16||e==8){for(a=e==16?4:3,--u;u%a;u++)s+="0";for(p=Ca(s,o,e),u=p.length;!p[u-1];--u);for(a=1,s="1.";a<u;a++)s+=Cp.charAt(p[a])}else s=s.charAt(0)+"."+s.slice(1);s=s+(i<0?"p":"p+")+i}else if(i<0){for(;++i;)s="0"+s;s="0."+s}else if(++i>u)for(i-=u;i--;)s+="0";else i<u&&(s=s.slice(0,i)+"."+s.slice(i))}s=(e==16?"0x":e==2?"0b":e==8?"0o":"")+s}return n.s<0?"-"+s:s}function Cc(n,e){if(n.length>e)return n.length=e,!0}function cv(n){return new this(n).abs()}function fv(n){return new this(n).acos()}function bv(n){return new this(n).acosh()}function mv(n,e){return new this(n).plus(e)}function gv(n){return new this(n).asin()}function hv(n){return new this(n).asinh()}function vv(n){return new this(n).atan()}function wv(n){return new this(n).atanh()}function yv(n,e){n=new this(n),e=new this(e);var t,r=this.precision,o=this.rounding,i=r+4;return!n.s||!e.s?t=new this(NaN):!n.d&&!e.d?(t=st(this,i,1).times(e.s>0?.25:.75),t.s=n.s):!e.d||n.isZero()?(t=e.s<0?st(this,r,o):new this(0),t.s=n.s):!n.d||e.isZero()?(t=st(this,i,1).times(.5),t.s=n.s):e.s<0?(this.precision=i,this.rounding=1,t=this.atan(Fn(n,e,i,1)),e=st(this,i,1),this.precision=r,this.rounding=o,t=n.s<0?t.minus(e):t.plus(e)):t=this.atan(Fn(n,e,i,1)),t}function xv(n){return new this(n).cbrt()}function kv(n){return en(n=new this(n),n.e+1,2)}function Dv(n,e,t){return new this(n).clamp(e,t)}function Ev(n){if(!n||typeof n!="object")throw Error(Fl+"Object expected");var e,t,r,o=n.defaults===!0,i=["precision",1,dr,"rounding",0,8,"toExpNeg",-Gr,0,"toExpPos",0,Gr,"maxE",0,Gr,"minE",-Gr,0,"modulo",0,9];for(e=0;e<i.length;e+=3)if(t=i[e],o&&(this[t]=Sp[t]),(r=n[t])!==void 0)if(be(r)===r&&r>=i[e+1]&&r<=i[e+2])this[t]=r;else throw Error(lr+t+": "+r);if(t="crypto",o&&(this[t]=Sp[t]),(r=n[t])!==void 0)if(r===!0||r===!1||r===0||r===1)if(r)if(typeof crypto<"u"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))this[t]=!0;else throw Error(Rm);else this[t]=!1;else throw Error(lr+t+": "+r);return this}function Cv(n){return new this(n).cos()}function Sv(n){return new this(n).cosh()}function Zm(n){var e,t,r;function o(i){var a,l,u,d=this;if(!(d instanceof o))return new o(i);if(d.constructor=o,Sc(i)){d.s=i.s,ln?!i.d||i.e>o.maxE?(d.e=NaN,d.d=null):i.e<o.minE?(d.e=0,d.d=[0]):(d.e=i.e,d.d=i.d.slice()):(d.e=i.e,d.d=i.d?i.d.slice():i.d);return}if(u=typeof i,u==="number"){if(i===0){d.s=1/i<0?-1:1,d.e=0,d.d=[0];return}if(i<0?(i=-i,d.s=-1):d.s=1,i===~~i&&i<1e7){for(a=0,l=i;l>=10;l/=10)a++;ln?a>o.maxE?(d.e=NaN,d.d=null):a<o.minE?(d.e=0,d.d=[0]):(d.e=a,d.d=[i]):(d.e=a,d.d=[i]);return}else if(i*0!==0){i||(d.s=NaN),d.e=NaN,d.d=null;return}return _p(d,i.toString())}else if(u!=="string")throw Error(lr+i);return(l=i.charCodeAt(0))===45?(i=i.slice(1),d.s=-1):(l===43&&(i=i.slice(1)),d.s=1),jm.test(i)?_p(d,i):sv(d,i)}if(o.prototype=H,o.ROUND_UP=0,o.ROUND_DOWN=1,o.ROUND_CEIL=2,o.ROUND_FLOOR=3,o.ROUND_HALF_UP=4,o.ROUND_HALF_DOWN=5,o.ROUND_HALF_EVEN=6,o.ROUND_HALF_CEIL=7,o.ROUND_HALF_FLOOR=8,o.EUCLID=9,o.config=o.set=Ev,o.clone=Zm,o.isDecimal=Sc,o.abs=cv,o.acos=fv,o.acosh=bv,o.add=mv,o.asin=gv,o.asinh=hv,o.atan=vv,o.atanh=wv,o.atan2=yv,o.cbrt=xv,o.ceil=kv,o.clamp=Dv,o.cos=Cv,o.cosh=Sv,o.div=Av,o.exp=Fv,o.floor=_v,o.hypot=Nv,o.ln=Pv,o.log=Tv,o.log10=Mv,o.log2=Ov,o.max=Bv,o.min=zv,o.mod=Iv,o.mul=$v,o.pow=Rv,o.random=Lv,o.round=jv,o.sign=qv,o.sin=Uv,o.sinh=Hv,o.sqrt=Wv,o.sub=Vv,o.sum=Zv,o.tan=Qv,o.tanh=Yv,o.trunc=Kv,n===void 0&&(n={}),n&&n.defaults!==!0)for(r=["precision","rounding","toExpNeg","toExpPos","maxE","minE","modulo","crypto"],e=0;e<r.length;)n.hasOwnProperty(t=r[e++])||(n[t]=this[t]);return o.config(n),o}function Av(n,e){return new this(n).div(e)}function Fv(n){return new this(n).exp()}function _v(n){return en(n=new this(n),n.e+1,3)}function Nv(){var n,e,t=new this(0);for(ln=!1,n=0;n<arguments.length;)if(e=new this(arguments[n++]),e.d)t.d&&(t=t.plus(e.times(e)));else{if(e.s)return ln=!0,new this(1/0);t=e}return ln=!0,t.sqrt()}function Sc(n){return n instanceof Fr||n&&n.toStringTag===Lm||!1}function Pv(n){return new this(n).ln()}function Tv(n,e){return new this(n).log(e)}function Ov(n){return new this(n).log(2)}function Mv(n){return new this(n).log(10)}function Bv(){return Hm(this,arguments,"lt")}function zv(){return Hm(this,arguments,"gt")}function Iv(n,e){return new this(n).mod(e)}function $v(n,e){return new this(n).mul(e)}function Rv(n,e){return new this(n).pow(e)}function Lv(n){var e,t,r,o,i=0,a=new this(1),l=[];if(n===void 0?n=this.precision:ze(n,1,dr),r=Math.ceil(n/tn),this.crypto)if(crypto.getRandomValues)for(e=crypto.getRandomValues(new Uint32Array(r));i<r;)o=e[i],o>=429e7?e[i]=crypto.getRandomValues(new Uint32Array(1))[0]:l[i++]=o%1e7;else if(crypto.randomBytes){for(e=crypto.randomBytes(r*=4);i<r;)o=e[i]+(e[i+1]<<8)+(e[i+2]<<16)+((e[i+3]&127)<<24),o>=214e7?crypto.randomBytes(4).copy(e,i):(l.push(o%1e7),i+=4);i=r/4}else throw Error(Rm);else for(;i<r;)l[i++]=Math.random()*1e7|0;for(r=l[--i],n%=tn,r&&n&&(o=Yn(10,tn-n),l[i]=(r/o|0)*o);l[i]===0;i--)l.pop();if(i<0)t=0,l=[0];else{for(t=-1;l[0]===0;t-=tn)l.shift();for(r=1,o=l[0];o>=10;o/=10)r++;r<tn&&(t-=tn-r)}return a.e=t,a.d=l,a}function jv(n){return en(n=new this(n),n.e+1,this.rounding)}function qv(n){return n=new this(n),n.d?n.d[0]?n.s:0*n.s:n.s||NaN}function Uv(n){return new this(n).sin()}function Hv(n){return new this(n).sinh()}function Wv(n){return new this(n).sqrt()}function Vv(n,e){return new this(n).sub(e)}function Zv(){var n=0,e=arguments,t=new this(e[n]);for(ln=!1;t.s&&++n<e.length;)t=t.plus(e[n]);return ln=!0,en(t,this.precision,this.rounding)}function Qv(n){return new this(n).tan()}function Yv(n){return new this(n).tanh()}function Kv(n){return en(n=new this(n),n.e+1,1)}H[Symbol.for("nodejs.util.inspect.custom")]=H.toString;H[Symbol.toStringTag]="Decimal";var Fr=H.constructor=Zm(Sp);tl=new Fr(tl);rl=new Fr(rl);var Xv="BigNumber",Gv=["?on","config"],Jv=xn(Xv,Gv,n=>{var{on:e,config:t}=n,r=Fr.clone({precision:t.precision,modulo:Fr.EUCLID});return r.prototype=Object.create(r.prototype),r.prototype.type="BigNumber",r.prototype.isBigNumber=!0,r.prototype.toJSON=function(){return{mathjs:"BigNumber",value:this.toString()}},r.fromJSON=function(o){return new r(o.value)},e&&e("config",function(o,i){o.precision!==i.precision&&r.config({precision:o.precision})}),r},{isClass:!0}),Qm={exports:{}};/**
 * @license Complex.js v2.1.1 12/05/2020
 *
 * Copyright (c) 2020, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/(function(n,e){(function(t){var r=Math.cosh||function(p){return Math.abs(p)<1e-9?1-p:(Math.exp(p)+Math.exp(-p))*.5},o=Math.sinh||function(p){return Math.abs(p)<1e-9?p:(Math.exp(p)-Math.exp(-p))*.5},i=function(p){var c=Math.PI/4;if(-c>p||p>c)return Math.cos(p)-1;var m=p*p;return m*(m*(m*(m*(m*(m*(m*(m/20922789888e3-1/87178291200)+1/479001600)-1/3628800)+1/40320)-1/720)+1/24)-1/2)},a=function(p,c){var m=Math.abs(p),w=Math.abs(c);return m<3e3&&w<3e3?Math.sqrt(m*m+w*w):(m<w?(m=w,w=p/c):w=c/p,m*Math.sqrt(1+w*w))},l=function(){throw SyntaxError("Invalid Param")};function u(p,c){var m=Math.abs(p),w=Math.abs(c);return p===0?Math.log(w):c===0?Math.log(m):m<3e3&&w<3e3?Math.log(p*p+c*c)*.5:(p=p/2,c=c/2,.5*Math.log(p*p+c*c)+Math.LN2)}var d=function(p,c){var m={re:0,im:0};if(p==null)m.re=m.im=0;else if(c!==void 0)m.re=p,m.im=c;else switch(typeof p){case"object":if("im"in p&&"re"in p)m.re=p.re,m.im=p.im;else if("abs"in p&&"arg"in p){if(!Number.isFinite(p.abs)&&Number.isFinite(p.arg))return s.INFINITY;m.re=p.abs*Math.cos(p.arg),m.im=p.abs*Math.sin(p.arg)}else if("r"in p&&"phi"in p){if(!Number.isFinite(p.r)&&Number.isFinite(p.phi))return s.INFINITY;m.re=p.r*Math.cos(p.phi),m.im=p.r*Math.sin(p.phi)}else p.length===2?(m.re=p[0],m.im=p[1]):l();break;case"string":m.im=m.re=0;var w=p.match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g),b=1,v=0;w===null&&l();for(var f=0;f<w.length;f++){var g=w[f];g===" "||g==="	"||g===`
`||(g==="+"?b++:g==="-"?v++:g==="i"||g==="I"?(b+v===0&&l(),w[f+1]!==" "&&!isNaN(w[f+1])?(m.im+=parseFloat((v%2?"-":"")+w[f+1]),f++):m.im+=parseFloat((v%2?"-":"")+"1"),b=v=0):((b+v===0||isNaN(g))&&l(),w[f+1]==="i"||w[f+1]==="I"?(m.im+=parseFloat((v%2?"-":"")+g),f++):m.re+=parseFloat((v%2?"-":"")+g),b=v=0))}b+v>0&&l();break;case"number":m.im=0,m.re=p;break;default:l()}return isNaN(m.re)||isNaN(m.im),m};function s(p,c){if(!(this instanceof s))return new s(p,c);var m=d(p,c);this.re=m.re,this.im=m.im}s.prototype={re:0,im:0,sign:function(){var p=this.abs();return new s(this.re/p,this.im/p)},add:function(p,c){var m=new s(p,c);return this.isInfinite()&&m.isInfinite()?s.NAN:this.isInfinite()||m.isInfinite()?s.INFINITY:new s(this.re+m.re,this.im+m.im)},sub:function(p,c){var m=new s(p,c);return this.isInfinite()&&m.isInfinite()?s.NAN:this.isInfinite()||m.isInfinite()?s.INFINITY:new s(this.re-m.re,this.im-m.im)},mul:function(p,c){var m=new s(p,c);return this.isInfinite()&&m.isZero()||this.isZero()&&m.isInfinite()?s.NAN:this.isInfinite()||m.isInfinite()?s.INFINITY:m.im===0&&this.im===0?new s(this.re*m.re,0):new s(this.re*m.re-this.im*m.im,this.re*m.im+this.im*m.re)},div:function(p,c){var m=new s(p,c);if(this.isZero()&&m.isZero()||this.isInfinite()&&m.isInfinite())return s.NAN;if(this.isInfinite()||m.isZero())return s.INFINITY;if(this.isZero()||m.isInfinite())return s.ZERO;p=this.re,c=this.im;var w=m.re,b=m.im,v,f;return b===0?new s(p/w,c/w):Math.abs(w)<Math.abs(b)?(f=w/b,v=w*f+b,new s((p*f+c)/v,(c*f-p)/v)):(f=b/w,v=b*f+w,new s((p+c*f)/v,(c-p*f)/v))},pow:function(p,c){var m=new s(p,c);if(p=this.re,c=this.im,m.isZero())return s.ONE;if(m.im===0){if(c===0&&p>0)return new s(Math.pow(p,m.re),0);if(p===0)switch((m.re%4+4)%4){case 0:return new s(Math.pow(c,m.re),0);case 1:return new s(0,Math.pow(c,m.re));case 2:return new s(-Math.pow(c,m.re),0);case 3:return new s(0,-Math.pow(c,m.re))}}if(p===0&&c===0&&m.re>0&&m.im>=0)return s.ZERO;var w=Math.atan2(c,p),b=u(p,c);return p=Math.exp(m.re*b-m.im*w),c=m.im*b+m.re*w,new s(p*Math.cos(c),p*Math.sin(c))},sqrt:function(){var p=this.re,c=this.im,m=this.abs(),w,b;if(p>=0){if(c===0)return new s(Math.sqrt(p),0);w=.5*Math.sqrt(2*(m+p))}else w=Math.abs(c)/Math.sqrt(2*(m-p));return p<=0?b=.5*Math.sqrt(2*(m-p)):b=Math.abs(c)/Math.sqrt(2*(m+p)),new s(w,c<0?-b:b)},exp:function(){var p=Math.exp(this.re);return this.im,new s(p*Math.cos(this.im),p*Math.sin(this.im))},expm1:function(){var p=this.re,c=this.im;return new s(Math.expm1(p)*Math.cos(c)+i(c),Math.exp(p)*Math.sin(c))},log:function(){var p=this.re,c=this.im;return new s(u(p,c),Math.atan2(c,p))},abs:function(){return a(this.re,this.im)},arg:function(){return Math.atan2(this.im,this.re)},sin:function(){var p=this.re,c=this.im;return new s(Math.sin(p)*r(c),Math.cos(p)*o(c))},cos:function(){var p=this.re,c=this.im;return new s(Math.cos(p)*r(c),-Math.sin(p)*o(c))},tan:function(){var p=2*this.re,c=2*this.im,m=Math.cos(p)+r(c);return new s(Math.sin(p)/m,o(c)/m)},cot:function(){var p=2*this.re,c=2*this.im,m=Math.cos(p)-r(c);return new s(-Math.sin(p)/m,o(c)/m)},sec:function(){var p=this.re,c=this.im,m=.5*r(2*c)+.5*Math.cos(2*p);return new s(Math.cos(p)*r(c)/m,Math.sin(p)*o(c)/m)},csc:function(){var p=this.re,c=this.im,m=.5*r(2*c)-.5*Math.cos(2*p);return new s(Math.sin(p)*r(c)/m,-Math.cos(p)*o(c)/m)},asin:function(){var p=this.re,c=this.im,m=new s(c*c-p*p+1,-2*p*c).sqrt(),w=new s(m.re-c,m.im+p).log();return new s(w.im,-w.re)},acos:function(){var p=this.re,c=this.im,m=new s(c*c-p*p+1,-2*p*c).sqrt(),w=new s(m.re-c,m.im+p).log();return new s(Math.PI/2-w.im,w.re)},atan:function(){var p=this.re,c=this.im;if(p===0){if(c===1)return new s(0,1/0);if(c===-1)return new s(0,-1/0)}var m=p*p+(1-c)*(1-c),w=new s((1-c*c-p*p)/m,-2*p/m).log();return new s(-.5*w.im,.5*w.re)},acot:function(){var p=this.re,c=this.im;if(c===0)return new s(Math.atan2(1,p),0);var m=p*p+c*c;return m!==0?new s(p/m,-c/m).atan():new s(p!==0?p/0:0,c!==0?-c/0:0).atan()},asec:function(){var p=this.re,c=this.im;if(p===0&&c===0)return new s(0,1/0);var m=p*p+c*c;return m!==0?new s(p/m,-c/m).acos():new s(p!==0?p/0:0,c!==0?-c/0:0).acos()},acsc:function(){var p=this.re,c=this.im;if(p===0&&c===0)return new s(Math.PI/2,1/0);var m=p*p+c*c;return m!==0?new s(p/m,-c/m).asin():new s(p!==0?p/0:0,c!==0?-c/0:0).asin()},sinh:function(){var p=this.re,c=this.im;return new s(o(p)*Math.cos(c),r(p)*Math.sin(c))},cosh:function(){var p=this.re,c=this.im;return new s(r(p)*Math.cos(c),o(p)*Math.sin(c))},tanh:function(){var p=2*this.re,c=2*this.im,m=r(p)+Math.cos(c);return new s(o(p)/m,Math.sin(c)/m)},coth:function(){var p=2*this.re,c=2*this.im,m=r(p)-Math.cos(c);return new s(o(p)/m,-Math.sin(c)/m)},csch:function(){var p=this.re,c=this.im,m=Math.cos(2*c)-r(2*p);return new s(-2*o(p)*Math.cos(c)/m,2*r(p)*Math.sin(c)/m)},sech:function(){var p=this.re,c=this.im,m=Math.cos(2*c)+r(2*p);return new s(2*r(p)*Math.cos(c)/m,-2*o(p)*Math.sin(c)/m)},asinh:function(){var p=this.im;this.im=-this.re,this.re=p;var c=this.asin();return this.re=-this.im,this.im=p,p=c.re,c.re=-c.im,c.im=p,c},acosh:function(){var p=this.acos();if(p.im<=0){var c=p.re;p.re=-p.im,p.im=c}else{var c=p.im;p.im=-p.re,p.re=c}return p},atanh:function(){var p=this.re,c=this.im,m=p>1&&c===0,w=1-p,b=1+p,v=w*w+c*c,f=v!==0?new s((b*w-c*c)/v,(c*w+b*c)/v):new s(p!==-1?p/0:0,c!==0?c/0:0),g=f.re;return f.re=u(f.re,f.im)/2,f.im=Math.atan2(f.im,g)/2,m&&(f.im=-f.im),f},acoth:function(){var p=this.re,c=this.im;if(p===0&&c===0)return new s(0,Math.PI/2);var m=p*p+c*c;return m!==0?new s(p/m,-c/m).atanh():new s(p!==0?p/0:0,c!==0?-c/0:0).atanh()},acsch:function(){var p=this.re,c=this.im;if(c===0)return new s(p!==0?Math.log(p+Math.sqrt(p*p+1)):1/0,0);var m=p*p+c*c;return m!==0?new s(p/m,-c/m).asinh():new s(p!==0?p/0:0,c!==0?-c/0:0).asinh()},asech:function(){var p=this.re,c=this.im;if(this.isZero())return s.INFINITY;var m=p*p+c*c;return m!==0?new s(p/m,-c/m).acosh():new s(p!==0?p/0:0,c!==0?-c/0:0).acosh()},inverse:function(){if(this.isZero())return s.INFINITY;if(this.isInfinite())return s.ZERO;var p=this.re,c=this.im,m=p*p+c*c;return new s(p/m,-c/m)},conjugate:function(){return new s(this.re,-this.im)},neg:function(){return new s(-this.re,-this.im)},ceil:function(p){return p=Math.pow(10,p||0),new s(Math.ceil(this.re*p)/p,Math.ceil(this.im*p)/p)},floor:function(p){return p=Math.pow(10,p||0),new s(Math.floor(this.re*p)/p,Math.floor(this.im*p)/p)},round:function(p){return p=Math.pow(10,p||0),new s(Math.round(this.re*p)/p,Math.round(this.im*p)/p)},equals:function(p,c){var m=new s(p,c);return Math.abs(m.re-this.re)<=s.EPSILON&&Math.abs(m.im-this.im)<=s.EPSILON},clone:function(){return new s(this.re,this.im)},toString:function(){var p=this.re,c=this.im,m="";return this.isNaN()?"NaN":this.isInfinite()?"Infinity":(Math.abs(p)<s.EPSILON&&(p=0),Math.abs(c)<s.EPSILON&&(c=0),c===0?m+p:(p!==0?(m+=p,m+=" ",c<0?(c=-c,m+="-"):m+="+",m+=" "):c<0&&(c=-c,m+="-"),c!==1&&(m+=c),m+"i"))},toVector:function(){return[this.re,this.im]},valueOf:function(){return this.im===0?this.re:null},isNaN:function(){return isNaN(this.re)||isNaN(this.im)},isZero:function(){return this.im===0&&this.re===0},isFinite:function(){return isFinite(this.re)&&isFinite(this.im)},isInfinite:function(){return!(this.isNaN()||this.isFinite())}},s.ZERO=new s(0,0),s.ONE=new s(1,0),s.I=new s(0,1),s.PI=new s(Math.PI,0),s.E=new s(Math.E,0),s.INFINITY=new s(1/0,1/0),s.NAN=new s(NaN,NaN),s.EPSILON=1e-15,Object.defineProperty(s,"__esModule",{value:!0}),s.default=s,s.Complex=s,n.exports=s})()})(Qm);var n2=Qm.exports;const oe=Pi(n2);var e2="Complex",t2=[],r2=xn(e2,t2,()=>(Object.defineProperty(oe,"name",{value:"Complex"}),oe.prototype.constructor=oe,oe.prototype.type="Complex",oe.prototype.isComplex=!0,oe.prototype.toJSON=function(){return{mathjs:"Complex",re:this.re,im:this.im}},oe.prototype.toPolar=function(){return{r:this.abs(),phi:this.arg()}},oe.prototype.format=function(n){var e="",t=this.im,r=this.re,o=kp(this.re,n),i=kp(this.im,n),a=On(n)?n:n?n.precision:null;if(a!==null){var l=Math.pow(10,-a);Math.abs(r/t)<l&&(r=0),Math.abs(t/r)<l&&(t=0)}return t===0?e=o:r===0?t===1?e="i":t===-1?e="-i":e=i+"i":t<0?t===-1?e=o+" - i":e=o+" - "+i.substring(1)+"i":t===1?e=o+" + i":e=o+" + "+i+"i",e},oe.fromPolar=function(n){switch(arguments.length){case 1:{var e=arguments[0];if(typeof e=="object")return oe(e);throw new TypeError("Input has to be an object with r and phi keys.")}case 2:{var t=arguments[0],r=arguments[1];if(On(t)){if(xm(r)&&r.hasBase("ANGLE")&&(r=r.toNumber("rad")),On(r))return new oe({r:t,phi:r});throw new TypeError("Phi is not a number nor an angle unit.")}else throw new TypeError("Radius r is not a number.")}default:throw new SyntaxError("Wrong number of arguments in function fromPolar")}},oe.prototype.valueOf=oe.prototype.toString,oe.fromJSON=function(n){return new oe(n)},oe.compare=function(n,e){return n.re>e.re?1:n.re<e.re?-1:n.im>e.im?1:n.im<e.im?-1:0},oe),{isClass:!0}),Ym={exports:{}};/**
 * @license Fraction.js v4.3.0 20/08/2023
 * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
 *
 * Copyright (c) 2023, Robert Eisele (robert@raw.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/(function(n,e){(function(t){var r=2e3,o={s:1,n:0,d:1};function i(f,g){if(isNaN(f=parseInt(f,10)))throw b();return f*g}function a(f,g){if(g===0)throw w();var h=Object.create(m.prototype);h.s=f<0?-1:1,f=f<0?-f:f;var y=c(f,g);return h.n=f/y,h.d=g/y,h}function l(f){for(var g={},h=f,y=2,k=4;k<=h;){for(;h%y===0;)h/=y,g[y]=(g[y]||0)+1;k+=1+2*y++}return h!==f?h>1&&(g[h]=(g[h]||0)+1):g[f]=(g[f]||0)+1,g}var u=function(f,g){var h=0,y=1,k=1,S=0,E=0,A=0,M=1,B=1,O=0,z=1,K=1,L=1,X=1e7,$;if(f!=null)if(g!==void 0){if(h=f,y=g,k=h*y,h%1!==0||y%1!==0)throw v()}else switch(typeof f){case"object":{if("d"in f&&"n"in f)h=f.n,y=f.d,"s"in f&&(h*=f.s);else if(0 in f)h=f[0],1 in f&&(y=f[1]);else throw b();k=h*y;break}case"number":{if(f<0&&(k=f,f=-f),f%1===0)h=f;else if(f>0){for(f>=1&&(B=Math.pow(10,Math.floor(1+Math.log(f)/Math.LN10)),f/=B);z<=X&&L<=X;)if($=(O+K)/(z+L),f===$){z+L<=X?(h=O+K,y=z+L):L>z?(h=K,y=L):(h=O,y=z);break}else f>$?(O+=K,z+=L):(K+=O,L+=z),z>X?(h=K,y=L):(h=O,y=z);h*=B}else(isNaN(f)||isNaN(g))&&(y=h=NaN);break}case"string":{if(z=f.match(/\d+|./g),z===null)throw b();if(z[O]==="-"?(k=-1,O++):z[O]==="+"&&O++,z.length===O+1?E=i(z[O++],k):z[O+1]==="."||z[O]==="."?(z[O]!=="."&&(S=i(z[O++],k)),O++,(O+1===z.length||z[O+1]==="("&&z[O+3]===")"||z[O+1]==="'"&&z[O+3]==="'")&&(E=i(z[O],k),M=Math.pow(10,z[O].length),O++),(z[O]==="("&&z[O+2]===")"||z[O]==="'"&&z[O+2]==="'")&&(A=i(z[O+1],k),B=Math.pow(10,z[O+1].length)-1,O+=3)):z[O+1]==="/"||z[O+1]===":"?(E=i(z[O],k),M=i(z[O+2],1),O+=3):z[O+3]==="/"&&z[O+1]===" "&&(S=i(z[O],k),E=i(z[O+2],k),M=i(z[O+4],1),O+=5),z.length<=O){y=M*B,k=h=A+y*S+B*E;break}}default:throw b()}if(y===0)throw w();o.s=k<0?-1:1,o.n=Math.abs(h),o.d=Math.abs(y)};function d(f,g,h){for(var y=1;g>0;f=f*f%h,g>>=1)g&1&&(y=y*f%h);return y}function s(f,g){for(;g%2===0;g/=2);for(;g%5===0;g/=5);if(g===1)return 0;for(var h=10%g,y=1;h!==1;y++)if(h=h*10%g,y>r)return 0;return y}function p(f,g,h){for(var y=1,k=d(10,h,g),S=0;S<300;S++){if(y===k)return S;y=y*10%g,k=k*10%g}return 0}function c(f,g){if(!f)return g;if(!g)return f;for(;;){if(f%=g,!f)return g;if(g%=f,!g)return f}}function m(f,g){if(u(f,g),this instanceof m)f=c(o.d,o.n),this.s=o.s,this.n=o.n/f,this.d=o.d/f;else return a(o.s*o.n,o.d)}var w=function(){return new Error("Division by Zero")},b=function(){return new Error("Invalid argument")},v=function(){return new Error("Parameters must be integer")};m.prototype={s:1,n:0,d:1,abs:function(){return a(this.n,this.d)},neg:function(){return a(-this.s*this.n,this.d)},add:function(f,g){return u(f,g),a(this.s*this.n*o.d+o.s*this.d*o.n,this.d*o.d)},sub:function(f,g){return u(f,g),a(this.s*this.n*o.d-o.s*this.d*o.n,this.d*o.d)},mul:function(f,g){return u(f,g),a(this.s*o.s*this.n*o.n,this.d*o.d)},div:function(f,g){return u(f,g),a(this.s*o.s*this.n*o.d,this.d*o.n)},clone:function(){return a(this.s*this.n,this.d)},mod:function(f,g){if(isNaN(this.n)||isNaN(this.d))return new m(NaN);if(f===void 0)return a(this.s*this.n%this.d,1);if(u(f,g),o.n===0&&this.d===0)throw w();return a(this.s*(o.d*this.n)%(o.n*this.d),o.d*this.d)},gcd:function(f,g){return u(f,g),a(c(o.n,this.n)*c(o.d,this.d),o.d*this.d)},lcm:function(f,g){return u(f,g),o.n===0&&this.n===0?a(0,1):a(o.n*this.n,c(o.n,this.n)*c(o.d,this.d))},ceil:function(f){return f=Math.pow(10,f||0),isNaN(this.n)||isNaN(this.d)?new m(NaN):a(Math.ceil(f*this.s*this.n/this.d),f)},floor:function(f){return f=Math.pow(10,f||0),isNaN(this.n)||isNaN(this.d)?new m(NaN):a(Math.floor(f*this.s*this.n/this.d),f)},round:function(f){return f=Math.pow(10,f||0),isNaN(this.n)||isNaN(this.d)?new m(NaN):a(Math.round(f*this.s*this.n/this.d),f)},inverse:function(){return a(this.s*this.d,this.n)},pow:function(f,g){if(u(f,g),o.d===1)return o.s<0?a(Math.pow(this.s*this.d,o.n),Math.pow(this.n,o.n)):a(Math.pow(this.s*this.n,o.n),Math.pow(this.d,o.n));if(this.s<0)return null;var h=l(this.n),y=l(this.d),k=1,S=1;for(var E in h)if(E!=="1"){if(E==="0"){k=0;break}if(h[E]*=o.n,h[E]%o.d===0)h[E]/=o.d;else return null;k*=Math.pow(E,h[E])}for(var E in y)if(E!=="1"){if(y[E]*=o.n,y[E]%o.d===0)y[E]/=o.d;else return null;S*=Math.pow(E,y[E])}return o.s<0?a(S,k):a(k,S)},equals:function(f,g){return u(f,g),this.s*this.n*o.d===o.s*o.n*this.d},compare:function(f,g){u(f,g);var h=this.s*this.n*o.d-o.s*o.n*this.d;return(0<h)-(h<0)},simplify:function(f){if(isNaN(this.n)||isNaN(this.d))return this;f=f||.001;for(var g=this.abs(),h=g.toContinued(),y=1;y<h.length;y++){for(var k=a(h[y-1],1),S=y-2;S>=0;S--)k=k.inverse().add(h[S]);if(Math.abs(k.sub(g).valueOf())<f)return k.mul(this.s)}return this},divisible:function(f,g){return u(f,g),!(!(o.n*this.d)||this.n*o.d%(o.n*this.d))},valueOf:function(){return this.s*this.n/this.d},toFraction:function(f){var g,h="",y=this.n,k=this.d;return this.s<0&&(h+="-"),k===1?h+=y:(f&&(g=Math.floor(y/k))>0&&(h+=g,h+=" ",y%=k),h+=y,h+="/",h+=k),h},toLatex:function(f){var g,h="",y=this.n,k=this.d;return this.s<0&&(h+="-"),k===1?h+=y:(f&&(g=Math.floor(y/k))>0&&(h+=g,y%=k),h+="\\frac{",h+=y,h+="}{",h+=k,h+="}"),h},toContinued:function(){var f,g=this.n,h=this.d,y=[];if(isNaN(g)||isNaN(h))return y;do y.push(Math.floor(g/h)),f=g%h,g=h,h=f;while(g!==1);return y},toString:function(f){var g=this.n,h=this.d;if(isNaN(g)||isNaN(h))return"NaN";f=f||15;var y=s(g,h),k=p(g,h,y),S=this.s<0?"-":"";if(S+=g/h|0,g%=h,g*=10,g&&(S+="."),y){for(var E=k;E--;)S+=g/h|0,g%=h,g*=10;S+="(";for(var E=y;E--;)S+=g/h|0,g%=h,g*=10;S+=")"}else for(var E=f;g&&E--;)S+=g/h|0,g%=h,g*=10;return S}},Object.defineProperty(m,"__esModule",{value:!0}),m.default=m,m.Fraction=m,n.exports=m})()})(Ym);var o2=Ym.exports;const Et=Pi(o2);var i2="Fraction",a2=[],l2=xn(i2,a2,()=>(Object.defineProperty(Et,"name",{value:"Fraction"}),Et.prototype.constructor=Et,Et.prototype.type="Fraction",Et.prototype.isFraction=!0,Et.prototype.toJSON=function(){return{mathjs:"Fraction",n:this.s*this.n,d:this.d}},Et.fromJSON=function(n){return new Et(n)},Et),{isClass:!0}),u2="Matrix",p2=[],s2=xn(u2,p2,()=>{function n(){if(!(this instanceof n))throw new SyntaxError("Constructor must be called with the new operator")}return n.prototype.type="Matrix",n.prototype.isMatrix=!0,n.prototype.storage=function(){throw new Error("Cannot invoke storage on a Matrix interface")},n.prototype.datatype=function(){throw new Error("Cannot invoke datatype on a Matrix interface")},n.prototype.create=function(e,t){throw new Error("Cannot invoke create on a Matrix interface")},n.prototype.subset=function(e,t,r){throw new Error("Cannot invoke subset on a Matrix interface")},n.prototype.get=function(e){throw new Error("Cannot invoke get on a Matrix interface")},n.prototype.set=function(e,t,r){throw new Error("Cannot invoke set on a Matrix interface")},n.prototype.resize=function(e,t){throw new Error("Cannot invoke resize on a Matrix interface")},n.prototype.reshape=function(e,t){throw new Error("Cannot invoke reshape on a Matrix interface")},n.prototype.clone=function(){throw new Error("Cannot invoke clone on a Matrix interface")},n.prototype.size=function(){throw new Error("Cannot invoke size on a Matrix interface")},n.prototype.map=function(e,t){throw new Error("Cannot invoke map on a Matrix interface")},n.prototype.forEach=function(e){throw new Error("Cannot invoke forEach on a Matrix interface")},n.prototype[Symbol.iterator]=function(){throw new Error("Cannot iterate a Matrix interface")},n.prototype.toArray=function(){throw new Error("Cannot invoke toArray on a Matrix interface")},n.prototype.valueOf=function(){throw new Error("Cannot invoke valueOf on a Matrix interface")},n.prototype.format=function(e){throw new Error("Cannot invoke format on a Matrix interface")},n.prototype.toString=function(){throw new Error("Cannot invoke toString on a Matrix interface")},n},{isClass:!0});function Km(n){return Object.keys(n.signatures||{}).reduce(function(e,t){var r=(t.match(/,/g)||[]).length+1;return Math.max(e,r)},-1)}var d2="DenseMatrix",c2=["Matrix"],f2=xn(d2,c2,n=>{var{Matrix:e}=n;function t(s,p){if(!(this instanceof t))throw new SyntaxError("Constructor must be called with the new operator");if(p&&!ht(p))throw new Error("Invalid datatype: "+p);if(wt(s))s.type==="DenseMatrix"?(this._data=Gn(s._data),this._size=Gn(s._size),this._datatype=p||s._datatype):(this._data=s.toArray(),this._size=s.size(),this._datatype=p||s._datatype);else if(s&&Bn(s.data)&&Bn(s.size))this._data=s.data,this._size=s.size,kc(this._data,this._size),this._datatype=p||s.datatype;else if(Bn(s))this._data=d(s),this._size=Tt(this._data),kc(this._data,this._size),this._datatype=p;else{if(s)throw new TypeError("Unsupported type of data ("+ri(s)+")");this._data=[],this._size=[0],this._datatype=p}}t.prototype=new e,t.prototype.createDenseMatrix=function(s,p){return new t(s,p)},Object.defineProperty(t,"name",{value:"DenseMatrix"}),t.prototype.constructor=t,t.prototype.type="DenseMatrix",t.prototype.isDenseMatrix=!0,t.prototype.getDataType=function(){return nl(this._data,ri)},t.prototype.storage=function(){return"dense"},t.prototype.datatype=function(){return this._datatype},t.prototype.create=function(s,p){return new t(s,p)},t.prototype.subset=function(s,p,c){switch(arguments.length){case 1:return r(this,s);case 2:case 3:return i(this,s,p,c);default:throw new SyntaxError("Wrong number of arguments")}},t.prototype.get=function(s){if(!Bn(s))throw new TypeError("Array expected");if(s.length!==this._size.length)throw new yn(s.length,this._size.length);for(var p=0;p<s.length;p++)zn(s[p],this._size[p]);for(var c=this._data,m=0,w=s.length;m<w;m++){var b=s[m];zn(b,c.length),c=c[b]}return c},t.prototype.set=function(s,p,c){if(!Bn(s))throw new TypeError("Array expected");if(s.length<this._size.length)throw new yn(s.length,this._size.length,"<");var m,w,b,v=s.map(function(g){return g+1});u(this,v,c);var f=this._data;for(m=0,w=s.length-1;m<w;m++)b=s[m],zn(b,f.length),f=f[b];return b=s[s.length-1],zn(b,f.length),f[b]=p,this};function r(s,p){if(!Bs(p))throw new TypeError("Invalid index");var c=p.isScalar();if(c)return s.get(p.min());var m=p.size();if(m.length!==s._size.length)throw new yn(m.length,s._size.length);for(var w=p.min(),b=p.max(),v=0,f=s._size.length;v<f;v++)zn(w[v],s._size[v]),zn(b[v],s._size[v]);return new t(o(s._data,p,m.length,0),s._datatype)}function o(s,p,c,m){var w=m===c-1,b=p.dimension(m);return w?b.map(function(v){return zn(v,s.length),s[v]}).valueOf():b.map(function(v){zn(v,s.length);var f=s[v];return o(f,p,c,m+1)}).valueOf()}function i(s,p,c,m){if(!p||p.isIndex!==!0)throw new TypeError("Invalid index");var w=p.size(),b=p.isScalar(),v;if(wt(c)?(v=c.size(),c=c.valueOf()):v=Tt(c),b){if(v.length!==0)throw new TypeError("Scalar expected");s.set(p.min(),c,m)}else{if(!go(v,w))try{v.length===0?c=Dc([c],w):c=Dc(c,w),v=Tt(c)}catch{}if(w.length<s._size.length)throw new yn(w.length,s._size.length,"<");if(v.length<w.length){for(var f=0,g=0;w[f]===1&&v[f]===1;)f++;for(;w[f]===1;)g++,f++;c=Nm(c,w.length,g,v)}if(!go(w,v))throw new yn(w,v,">");var h=p.max().map(function(S){return S+1});u(s,h,m);var y=w.length,k=0;a(s._data,p,c,y,k)}return s}function a(s,p,c,m,w){var b=w===m-1,v=p.dimension(w);b?v.forEach(function(f,g){zn(f),s[f]=c[g[0]]}):v.forEach(function(f,g){zn(f),a(s[f],p,c[g[0]],m,w+1)})}t.prototype.resize=function(s,p,c){if(!Ja(s))throw new TypeError("Array or Matrix expected");var m=s.valueOf().map(b=>Array.isArray(b)&&b.length===1?b[0]:b),w=c?this.clone():this;return l(w,m,p)};function l(s,p,c){if(p.length===0){for(var m=s._data;Bn(m);)m=m[0];return m}return s._size=p.slice(0),s._data=Dp(s._data,s._size,c),s}t.prototype.reshape=function(s,p){var c=p?this.clone():this;c._data=Fm(c._data,s);var m=c._size.reduce((w,b)=>w*b);return c._size=zs(s,m),c};function u(s,p,c){for(var m=s._size.slice(0),w=!1;m.length<p.length;)m.push(0),w=!0;for(var b=0,v=p.length;b<v;b++)p[b]>m[b]&&(m[b]=p[b],w=!0);w&&l(s,m,c)}t.prototype.clone=function(){var s=new t({data:Gn(this._data),size:Gn(this._size),datatype:this._datatype});return s},t.prototype.size=function(){return this._size.slice(0)},t.prototype.map=function(s){var p=this,c=Km(s),m=function v(f,g){return Bn(f)?f.map(function(h,y){return v(h,g.concat(y))}):c===1?s(f):c===2?s(f,g):s(f,g,p)},w=m(this._data,[]),b=this._datatype!==void 0?nl(w,ri):void 0;return new t(w,b)},t.prototype.forEach=function(s){var p=this,c=function m(w,b){Bn(w)?w.forEach(function(v,f){m(v,b.concat(f))}):s(w,b,p)};c(this._data,[])},t.prototype[Symbol.iterator]=function*(){var s=function*p(c,m){if(Bn(c))for(var w=0;w<c.length;w++)yield*p(c[w],m.concat(w));else yield{value:c,index:m}};yield*s(this._data,[])},t.prototype.rows=function(){var s=[],p=this.size();if(p.length!==2)throw new TypeError("Rows can only be returned for a 2D matrix.");var c=this._data;for(var m of c)s.push(new t([m],this._datatype));return s},t.prototype.columns=function(){var s=this,p=[],c=this.size();if(c.length!==2)throw new TypeError("Rows can only be returned for a 2D matrix.");for(var m=this._data,w=function(f){var g=m.map(h=>[h[f]]);p.push(new t(g,s._datatype))},b=0;b<c[1];b++)w(b);return p},t.prototype.toArray=function(){return Gn(this._data)},t.prototype.valueOf=function(){return this._data},t.prototype.format=function(s){return _e(this._data,s)},t.prototype.toString=function(){return _e(this._data)},t.prototype.toJSON=function(){return{mathjs:"DenseMatrix",data:this._data,size:this._size,datatype:this._datatype}},t.prototype.diagonal=function(s){if(s){if(Te(s)&&(s=s.toNumber()),!On(s)||!qn(s))throw new TypeError("The parameter k must be an integer number")}else s=0;for(var p=s>0?s:0,c=s<0?-s:0,m=this._size[0],w=this._size[1],b=Math.min(m-c,w-p),v=[],f=0;f<b;f++)v[f]=this._data[f+c][f+p];return new t({data:v,size:[b],datatype:this._datatype})},t.diagonal=function(s,p,c,m){if(!Bn(s))throw new TypeError("Array expected, size parameter");if(s.length!==2)throw new Error("Only two dimensions matrix are supported");if(s=s.map(function(E){if(Te(E)&&(E=E.toNumber()),!On(E)||!qn(E)||E<1)throw new Error("Size values must be positive integers");return E}),c){if(Te(c)&&(c=c.toNumber()),!On(c)||!qn(c))throw new TypeError("The parameter k must be an integer number")}else c=0;var w=c>0?c:0,b=c<0?-c:0,v=s[0],f=s[1],g=Math.min(v-b,f-w),h;if(Bn(p)){if(p.length!==g)throw new Error("Invalid value array length");h=function(A){return p[A]}}else if(wt(p)){var y=p.size();if(y.length!==1||y[0]!==g)throw new Error("Invalid matrix length");h=function(A){return p.get([A])}}else h=function(){return p};m||(m=Te(h(0))?h(0).mul(0):0);var k=[];if(s.length>0){k=Dp(k,s,m);for(var S=0;S<g;S++)k[S+b][S+w]=h(S)}return new t({data:k,size:[v,f]})},t.fromJSON=function(s){return new t(s)},t.prototype.swapRows=function(s,p){if(!On(s)||!qn(s)||!On(p)||!qn(p))throw new Error("Row index must be positive integers");if(this._size.length!==2)throw new Error("Only two dimensional matrix is supported");return zn(s,this._size[0]),zn(p,this._size[0]),t._swapRows(s,p,this._data),this},t._swapRows=function(s,p,c){var m=c[s];c[s]=c[p],c[p]=m};function d(s){return wt(s)?d(s.valueOf()):Bn(s)?s.map(d):s}return t},{isClass:!0});function wo(n,e,t){return n&&typeof n.map=="function"?n.map(function(r){return wo(r,e)}):e(n)}var Ac="isInteger",b2=["typed"],m2=xn(Ac,b2,n=>{var{typed:e}=n;return e(Ac,{number:qn,BigNumber:function(r){return r.isInt()},Fraction:function(r){return r.d===1&&isFinite(r.n)},"Array | Matrix":e.referToSelf(t=>r=>wo(r,t))})});function Fc(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(!qn(e)||e<0||e>15)throw new Error("Number of decimals in function round must be an integer from 0 to 15 inclusive");return parseFloat(Em(n,e))}function Np(n,e,t){if(t==null)return n.eq(e);if(n.eq(e))return!0;if(n.isNaN()||e.isNaN())return!1;if(n.isFinite()&&e.isFinite()){var r=n.minus(e).abs();if(r.isZero())return!0;var o=n.constructor.max(n.abs(),e.abs());return r.lte(o.times(t))}return!1}function g2(n,e,t){return ho(n.re,e.re,t)&&ho(n.im,e.im,t)}var h2=xn("compareUnits",["typed"],n=>{var{typed:e}=n;return{"Unit, Unit":e.referToSelf(t=>(r,o)=>{if(!r.equalBase(o))throw new Error("Cannot compare units with different base");return e.find(t,[r.valueType(),o.valueType()])(r.value,o.value)})}}),il="equalScalar",v2=["typed","config"],w2=xn(il,v2,n=>{var{typed:e,config:t}=n,r=h2({typed:e});return e(il,{"boolean, boolean":function(i,a){return i===a},"number, number":function(i,a){return ho(i,a,t.epsilon)},"BigNumber, BigNumber":function(i,a){return i.eq(a)||Np(i,a,t.epsilon)},"Fraction, Fraction":function(i,a){return i.equals(a)},"Complex, Complex":function(i,a){return g2(i,a,t.epsilon)}},r)});xn(il,["typed","config"],n=>{var{typed:e,config:t}=n;return e(il,{"number, number":function(o,i){return ho(o,i,t.epsilon)}})});var y2="SparseMatrix",x2=["typed","equalScalar","Matrix"],k2=xn(y2,x2,n=>{var{typed:e,equalScalar:t,Matrix:r}=n;function o(b,v){if(!(this instanceof o))throw new SyntaxError("Constructor must be called with the new operator");if(v&&!ht(v))throw new Error("Invalid datatype: "+v);if(wt(b))i(this,b,v);else if(b&&Bn(b.index)&&Bn(b.ptr)&&Bn(b.size))this._values=b.values,this._index=b.index,this._ptr=b.ptr,this._size=b.size,this._datatype=v||b.datatype;else if(Bn(b))a(this,b,v);else{if(b)throw new TypeError("Unsupported type of data ("+ri(b)+")");this._values=[],this._index=[],this._ptr=[0],this._size=[0,0],this._datatype=v}}function i(b,v,f){v.type==="SparseMatrix"?(b._values=v._values?Gn(v._values):void 0,b._index=Gn(v._index),b._ptr=Gn(v._ptr),b._size=Gn(v._size),b._datatype=f||v._datatype):a(b,v.valueOf(),f||v._datatype)}function a(b,v,f){b._values=[],b._index=[],b._ptr=[],b._datatype=f;var g=v.length,h=0,y=t,k=0;if(ht(f)&&(y=e.find(t,[f,f])||t,k=e.convert(0,f)),g>0){var S=0;do{b._ptr.push(b._index.length);for(var E=0;E<g;E++){var A=v[E];if(Bn(A)){if(S===0&&h<A.length&&(h=A.length),S<A.length){var M=A[S];y(M,k)||(b._values.push(M),b._index.push(E))}}else S===0&&h<1&&(h=1),y(A,k)||(b._values.push(A),b._index.push(E))}S++}while(S<h)}b._ptr.push(b._index.length),b._size=[g,h]}o.prototype=new r,o.prototype.createSparseMatrix=function(b,v){return new o(b,v)},Object.defineProperty(o,"name",{value:"SparseMatrix"}),o.prototype.constructor=o,o.prototype.type="SparseMatrix",o.prototype.isSparseMatrix=!0,o.prototype.getDataType=function(){return nl(this._values,ri)},o.prototype.storage=function(){return"sparse"},o.prototype.datatype=function(){return this._datatype},o.prototype.create=function(b,v){return new o(b,v)},o.prototype.density=function(){var b=this._size[0],v=this._size[1];return b!==0&&v!==0?this._index.length/(b*v):0},o.prototype.subset=function(b,v,f){if(!this._values)throw new Error("Cannot invoke subset on a Pattern only matrix");switch(arguments.length){case 1:return l(this,b);case 2:case 3:return u(this,b,v,f);default:throw new SyntaxError("Wrong number of arguments")}};function l(b,v){if(!Bs(v))throw new TypeError("Invalid index");var f=v.isScalar();if(f)return b.get(v.min());var g=v.size();if(g.length!==b._size.length)throw new yn(g.length,b._size.length);var h,y,k,S,E=v.min(),A=v.max();for(h=0,y=b._size.length;h<y;h++)zn(E[h],b._size[h]),zn(A[h],b._size[h]);var M=b._values,B=b._index,O=b._ptr,z=v.dimension(0),K=v.dimension(1),L=[],X=[];z.forEach(function(Q,J){X[Q]=J[0],L[Q]=!0});var $=M?[]:void 0,on=[],U=[];return K.forEach(function(Q){for(U.push(on.length),k=O[Q],S=O[Q+1];k<S;k++)h=B[k],L[h]===!0&&(on.push(X[h]),$&&$.push(M[k]))}),U.push(on.length),new o({values:$,index:on,ptr:U,size:g,datatype:b._datatype})}function u(b,v,f,g){if(!v||v.isIndex!==!0)throw new TypeError("Invalid index");var h=v.size(),y=v.isScalar(),k;if(wt(f)?(k=f.size(),f=f.toArray()):k=Tt(f),y){if(k.length!==0)throw new TypeError("Scalar expected");b.set(v.min(),f,g)}else{if(h.length!==1&&h.length!==2)throw new yn(h.length,b._size.length,"<");if(k.length<h.length){for(var S=0,E=0;h[S]===1&&k[S]===1;)S++;for(;h[S]===1;)E++,S++;f=Nm(f,h.length,E,k)}if(!go(h,k))throw new yn(h,k,">");if(h.length===1){var A=v.dimension(0);A.forEach(function(O,z){zn(O),b.set([O,0],f[z[0]],g)})}else{var M=v.dimension(0),B=v.dimension(1);M.forEach(function(O,z){zn(O),B.forEach(function(K,L){zn(K),b.set([O,K],f[z[0]][L[0]],g)})})}}return b}o.prototype.get=function(b){if(!Bn(b))throw new TypeError("Array expected");if(b.length!==this._size.length)throw new yn(b.length,this._size.length);if(!this._values)throw new Error("Cannot invoke get on a Pattern only matrix");var v=b[0],f=b[1];zn(v,this._size[0]),zn(f,this._size[1]);var g=d(v,this._ptr[f],this._ptr[f+1],this._index);return g<this._ptr[f+1]&&this._index[g]===v?this._values[g]:0},o.prototype.set=function(b,v,f){if(!Bn(b))throw new TypeError("Array expected");if(b.length!==this._size.length)throw new yn(b.length,this._size.length);if(!this._values)throw new Error("Cannot invoke set on a Pattern only matrix");var g=b[0],h=b[1],y=this._size[0],k=this._size[1],S=t,E=0;ht(this._datatype)&&(S=e.find(t,[this._datatype,this._datatype])||t,E=e.convert(0,this._datatype)),(g>y-1||h>k-1)&&(c(this,Math.max(g+1,y),Math.max(h+1,k),f),y=this._size[0],k=this._size[1]),zn(g,y),zn(h,k);var A=d(g,this._ptr[h],this._ptr[h+1],this._index);return A<this._ptr[h+1]&&this._index[A]===g?S(v,E)?s(A,h,this._values,this._index,this._ptr):this._values[A]=v:S(v,E)||p(A,g,h,v,this._values,this._index,this._ptr),this};function d(b,v,f,g){if(f-v===0)return f;for(var h=v;h<f;h++)if(g[h]===b)return h;return v}function s(b,v,f,g,h){f.splice(b,1),g.splice(b,1);for(var y=v+1;y<h.length;y++)h[y]--}function p(b,v,f,g,h,y,k){h.splice(b,0,g),y.splice(b,0,v);for(var S=f+1;S<k.length;S++)k[S]++}o.prototype.resize=function(b,v,f){if(!Ja(b))throw new TypeError("Array or Matrix expected");var g=b.valueOf().map(y=>Array.isArray(y)&&y.length===1?y[0]:y);if(g.length!==2)throw new Error("Only two dimensions matrix are supported");g.forEach(function(y){if(!On(y)||!qn(y)||y<0)throw new TypeError("Invalid size, must contain positive integers (size: "+_e(g)+")")});var h=f?this.clone():this;return c(h,g[0],g[1],v)};function c(b,v,f,g){var h=g||0,y=t,k=0;ht(b._datatype)&&(y=e.find(t,[b._datatype,b._datatype])||t,k=e.convert(0,b._datatype),h=e.convert(h,b._datatype));var S=!y(h,k),E=b._size[0],A=b._size[1],M,B,O;if(f>A){for(B=A;B<f;B++)if(b._ptr[B]=b._values.length,S)for(M=0;M<E;M++)b._values.push(h),b._index.push(M);b._ptr[f]=b._values.length}else f<A&&(b._ptr.splice(f+1,A-f),b._values.splice(b._ptr[f],b._values.length),b._index.splice(b._ptr[f],b._index.length));if(A=f,v>E){if(S){var z=0;for(B=0;B<A;B++){b._ptr[B]=b._ptr[B]+z,O=b._ptr[B+1]+z;var K=0;for(M=E;M<v;M++,K++)b._values.splice(O+K,0,h),b._index.splice(O+K,0,M),z++}b._ptr[A]=b._values.length}}else if(v<E){var L=0;for(B=0;B<A;B++){b._ptr[B]=b._ptr[B]-L;var X=b._ptr[B],$=b._ptr[B+1]-L;for(O=X;O<$;O++)M=b._index[O],M>v-1&&(b._values.splice(O,1),b._index.splice(O,1),L++)}b._ptr[B]=b._values.length}return b._size[0]=v,b._size[1]=f,b}o.prototype.reshape=function(b,v){if(!Bn(b))throw new TypeError("Array expected");if(b.length!==2)throw new Error("Sparse matrices can only be reshaped in two dimensions");b.forEach(function(Q){if(!On(Q)||!qn(Q)||Q<=-2||Q===0)throw new TypeError("Invalid size, must contain positive integers or -1 (size: "+_e(b)+")")});var f=this._size[0]*this._size[1];b=zs(b,f);var g=b[0]*b[1];if(f!==g)throw new Error("Reshaping sparse matrix will result in the wrong number of elements");var h=v?this.clone():this;if(this._size[0]===b[0]&&this._size[1]===b[1])return h;for(var y=[],k=0;k<h._ptr.length;k++)for(var S=0;S<h._ptr[k+1]-h._ptr[k];S++)y.push(k);for(var E=h._values.slice(),A=h._index.slice(),M=0;M<h._index.length;M++){var B=A[M],O=y[M],z=B*h._size[1]+O;y[M]=z%b[1],A[M]=Math.floor(z/b[1])}h._values.length=0,h._index.length=0,h._ptr.length=b[1]+1,h._size=b.slice();for(var K=0;K<h._ptr.length;K++)h._ptr[K]=0;for(var L=0;L<E.length;L++){var X=A[L],$=y[L],on=E[L],U=d(X,h._ptr[$],h._ptr[$+1],h._index);p(U,X,$,on,h._values,h._index,h._ptr)}return h},o.prototype.clone=function(){var b=new o({values:this._values?Gn(this._values):void 0,index:Gn(this._index),ptr:Gn(this._ptr),size:Gn(this._size),datatype:this._datatype});return b},o.prototype.size=function(){return this._size.slice(0)},o.prototype.map=function(b,v){if(!this._values)throw new Error("Cannot invoke map on a Pattern only matrix");var f=this,g=this._size[0],h=this._size[1],y=Km(b),k=function(E,A,M){return y===1?b(E):y===2?b(E,[A,M]):b(E,[A,M],f)};return m(this,0,g-1,0,h-1,k,v)};function m(b,v,f,g,h,y,k){var S=[],E=[],A=[],M=t,B=0;ht(b._datatype)&&(M=e.find(t,[b._datatype,b._datatype])||t,B=e.convert(0,b._datatype));for(var O=function(Y,Sn,An){Y=y(Y,Sn,An),M(Y,B)||(S.push(Y),E.push(Sn))},z=g;z<=h;z++){A.push(S.length);var K=b._ptr[z],L=b._ptr[z+1];if(k)for(var X=K;X<L;X++){var $=b._index[X];$>=v&&$<=f&&O(b._values[X],$-v,z-g)}else{for(var on={},U=K;U<L;U++){var Q=b._index[U];on[Q]=b._values[U]}for(var J=v;J<=f;J++){var un=J in on?on[J]:0;O(un,J-v,z-g)}}}return A.push(S.length),new o({values:S,index:E,ptr:A,size:[f-v+1,h-g+1]})}o.prototype.forEach=function(b,v){if(!this._values)throw new Error("Cannot invoke forEach on a Pattern only matrix");for(var f=this,g=this._size[0],h=this._size[1],y=0;y<h;y++){var k=this._ptr[y],S=this._ptr[y+1];if(v)for(var E=k;E<S;E++){var A=this._index[E];b(this._values[E],[A,y],f)}else{for(var M={},B=k;B<S;B++){var O=this._index[B];M[O]=this._values[B]}for(var z=0;z<g;z++){var K=z in M?M[z]:0;b(K,[z,y],f)}}}},o.prototype[Symbol.iterator]=function*(){if(!this._values)throw new Error("Cannot iterate a Pattern only matrix");for(var b=this._size[1],v=0;v<b;v++)for(var f=this._ptr[v],g=this._ptr[v+1],h=f;h<g;h++){var y=this._index[h];yield{value:this._values[h],index:[y,v]}}},o.prototype.toArray=function(){return w(this._values,this._index,this._ptr,this._size,!0)},o.prototype.valueOf=function(){return w(this._values,this._index,this._ptr,this._size,!1)};function w(b,v,f,g,h){var y=g[0],k=g[1],S=[],E,A;for(E=0;E<y;E++)for(S[E]=[],A=0;A<k;A++)S[E][A]=0;for(A=0;A<k;A++)for(var M=f[A],B=f[A+1],O=M;O<B;O++)E=v[O],S[E][A]=b?h?Gn(b[O]):b[O]:1;return S}return o.prototype.format=function(b){for(var v=this._size[0],f=this._size[1],g=this.density(),h="Sparse Matrix ["+_e(v,b)+" x "+_e(f,b)+"] density: "+_e(g,b)+`
`,y=0;y<f;y++)for(var k=this._ptr[y],S=this._ptr[y+1],E=k;E<S;E++){var A=this._index[E];h+=`
    (`+_e(A,b)+", "+_e(y,b)+") ==> "+(this._values?_e(this._values[E],b):"X")}return h},o.prototype.toString=function(){return _e(this.toArray())},o.prototype.toJSON=function(){return{mathjs:"SparseMatrix",values:this._values,index:this._index,ptr:this._ptr,size:this._size,datatype:this._datatype}},o.prototype.diagonal=function(b){if(b){if(Te(b)&&(b=b.toNumber()),!On(b)||!qn(b))throw new TypeError("The parameter k must be an integer number")}else b=0;var v=b>0?b:0,f=b<0?-b:0,g=this._size[0],h=this._size[1],y=Math.min(g-f,h-v),k=[],S=[],E=[];E[0]=0;for(var A=v;A<h&&k.length<y;A++)for(var M=this._ptr[A],B=this._ptr[A+1],O=M;O<B;O++){var z=this._index[O];if(z===A-v+f){k.push(this._values[O]),S[k.length-1]=z-f;break}}return E.push(k.length),new o({values:k,index:S,ptr:E,size:[y,1]})},o.fromJSON=function(b){return new o(b)},o.diagonal=function(b,v,f,g,h){if(!Bn(b))throw new TypeError("Array expected, size parameter");if(b.length!==2)throw new Error("Only two dimensions matrix are supported");if(b=b.map(function(Q){if(Te(Q)&&(Q=Q.toNumber()),!On(Q)||!qn(Q)||Q<1)throw new Error("Size values must be positive integers");return Q}),f){if(Te(f)&&(f=f.toNumber()),!On(f)||!qn(f))throw new TypeError("The parameter k must be an integer number")}else f=0;var y=t,k=0;ht(h)&&(y=e.find(t,[h,h])||t,k=e.convert(0,h));var S=f>0?f:0,E=f<0?-f:0,A=b[0],M=b[1],B=Math.min(A-E,M-S),O;if(Bn(v)){if(v.length!==B)throw new Error("Invalid value array length");O=function(J){return v[J]}}else if(wt(v)){var z=v.size();if(z.length!==1||z[0]!==B)throw new Error("Invalid matrix length");O=function(J){return v.get([J])}}else O=function(){return v};for(var K=[],L=[],X=[],$=0;$<M;$++){X.push(K.length);var on=$-S;if(on>=0&&on<B){var U=O(on);y(U,k)||(L.push(on+E),K.push(U))}}return X.push(K.length),new o({values:K,index:L,ptr:X,size:[A,M]})},o.prototype.swapRows=function(b,v){if(!On(b)||!qn(b)||!On(v)||!qn(v))throw new Error("Row index must be positive integers");if(this._size.length!==2)throw new Error("Only two dimensional matrix is supported");return zn(b,this._size[0]),zn(v,this._size[0]),o._swapRows(b,v,this._size[1],this._values,this._index,this._ptr),this},o._forEachRow=function(b,v,f,g,h){for(var y=g[b],k=g[b+1],S=y;S<k;S++)h(f[S],v[S])},o._swapRows=function(b,v,f,g,h,y){for(var k=0;k<f;k++){var S=y[k],E=y[k+1],A=d(b,S,E,h),M=d(v,S,E,h);if(A<E&&M<E&&h[A]===b&&h[M]===v){if(g){var B=g[A];g[A]=g[M],g[M]=B}continue}if(A<E&&h[A]===b&&(M>=E||h[M]!==v)){var O=g?g[A]:void 0;h.splice(M,0,v),g&&g.splice(M,0,O),h.splice(M<=A?A+1:A,1),g&&g.splice(M<=A?A+1:A,1);continue}if(M<E&&h[M]===v&&(A>=E||h[A]!==b)){var z=g?g[M]:void 0;h.splice(A,0,b),g&&g.splice(A,0,z),h.splice(A<=M?M+1:M,1),g&&g.splice(A<=M?M+1:M,1)}}},o},{isClass:!0}),_c="matrix",D2=["typed","Matrix","DenseMatrix","SparseMatrix"],E2=xn(_c,D2,n=>{var{typed:e,Matrix:t,DenseMatrix:r,SparseMatrix:o}=n;return e(_c,{"":function(){return i([])},string:function(l){return i([],l)},"string, string":function(l,u){return i([],l,u)},Array:function(l){return i(l)},Matrix:function(l){return i(l,l.storage())},"Array | Matrix, string":i,"Array | Matrix, string, string":i});function i(a,l,u){if(l==="dense"||l==="default"||l===void 0)return new r(a,u);if(l==="sparse")return new o(a,u);throw new TypeError("Unknown matrix type "+JSON.stringify(l)+".")}}),C2="matAlgo11xS0s",S2=["typed","equalScalar"],$s=xn(C2,S2,n=>{var{typed:e,equalScalar:t}=n;return function(o,i,a,l){var u=o._values,d=o._index,s=o._ptr,p=o._size,c=o._datatype;if(!u)throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");var m=p[0],w=p[1],b,v=t,f=0,g=a;typeof c=="string"&&(b=c,v=e.find(t,[b,b]),f=e.convert(0,b),i=e.convert(i,b),g=e.find(a,[b,b]));for(var h=[],y=[],k=[],S=0;S<w;S++){k[S]=y.length;for(var E=s[S],A=s[S+1],M=E;M<A;M++){var B=d[M],O=l?g(i,u[M]):g(u[M],i);v(O,f)||(y.push(B),h.push(O))}}return k[w]=y.length,o.createSparseMatrix({values:h,index:y,ptr:k,size:[m,w],datatype:b})}}),A2="matAlgo12xSfs",F2=["typed","DenseMatrix"],Rs=xn(A2,F2,n=>{var{typed:e,DenseMatrix:t}=n;return function(o,i,a,l){var u=o._values,d=o._index,s=o._ptr,p=o._size,c=o._datatype;if(!u)throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");var m=p[0],w=p[1],b,v=a;typeof c=="string"&&(b=c,i=e.convert(i,b),v=e.find(a,[b,b]));for(var f=[],g=[],h=[],y=0;y<w;y++){for(var k=y+1,S=s[y],E=s[y+1],A=S;A<E;A++){var M=d[A];g[M]=u[A],h[M]=k}for(var B=0;B<m;B++)y===0&&(f[B]=[]),h[B]===k?f[B][y]=l?v(i,g[B]):v(g[B],i):f[B][y]=l?v(i,0):v(0,i)}return new t({data:f,size:[m,w],datatype:b})}}),_2="matAlgo14xDs",N2=["typed"],Ls=xn(_2,N2,n=>{var{typed:e}=n;return function(o,i,a,l){var u=o._data,d=o._size,s=o._datatype,p,c=a;typeof s=="string"&&(p=s,i=e.convert(i,p),c=e.find(a,[p,p]));var m=d.length>0?t(c,0,d,d[0],u,i,l):[];return o.createDenseMatrix({data:m,size:Gn(d),datatype:p})};function t(r,o,i,a,l,u,d){var s=[];if(o===i.length-1)for(var p=0;p<a;p++)s[p]=d?r(u,l[p]):r(l[p],u);else for(var c=0;c<a;c++)s[c]=t(r,o+1,i,i[o+1],l[c],u,d);return s}}),Pp="floor",P2=["typed","config","round","matrix","equalScalar","zeros","DenseMatrix"],T2=xn(Pp,["typed","config","round"],n=>{var{typed:e,config:t,round:r}=n;return e(Pp,{number:function(i){return ho(i,r(i),t.epsilon)?r(i):Math.floor(i)},"number, number":function(i,a){if(ho(i,r(i,a),t.epsilon))return r(i,a);var[l,u]="".concat(i,"e").split("e"),d=Math.floor(Number("".concat(l,"e").concat(Number(u)+a)));return[l,u]="".concat(d,"e").split("e"),Number("".concat(l,"e").concat(Number(u)-a))}})}),O2=xn(Pp,P2,n=>{var{typed:e,config:t,round:r,matrix:o,equalScalar:i,zeros:a,DenseMatrix:l}=n,u=$s({typed:e,equalScalar:i}),d=Rs({typed:e,DenseMatrix:l}),s=Ls({typed:e}),p=T2({typed:e,config:t,round:r});return e("floor",{number:p.signatures.number,"number,number":p.signatures["number,number"],Complex:function(m){return m.floor()},"Complex, number":function(m,w){return m.floor(w)},"Complex, BigNumber":function(m,w){return m.floor(w.toNumber())},BigNumber:function(m){return Np(m,r(m),t.epsilon)?r(m):m.floor()},"BigNumber, BigNumber":function(m,w){return Np(m,r(m,w),t.epsilon)?r(m,w):m.toDecimalPlaces(w.toNumber(),Fr.ROUND_FLOOR)},Fraction:function(m){return m.floor()},"Fraction, number":function(m,w){return m.floor(w)},"Fraction, BigNumber":function(m,w){return m.floor(w.toNumber())},"Array | Matrix":e.referToSelf(c=>m=>wo(m,c)),"Array, number | BigNumber":e.referToSelf(c=>(m,w)=>wo(m,b=>c(b,w))),"SparseMatrix, number | BigNumber":e.referToSelf(c=>(m,w)=>u(m,w,c,!1)),"DenseMatrix, number | BigNumber":e.referToSelf(c=>(m,w)=>s(m,w,c,!1)),"number | Complex | Fraction | BigNumber, Array":e.referToSelf(c=>(m,w)=>s(o(w),m,c,!0).valueOf()),"number | Complex | Fraction | BigNumber, Matrix":e.referToSelf(c=>(m,w)=>i(m,0)?a(w.size(),w.storage()):w.storage()==="dense"?s(w,m,c,!0):d(w,m,c,!0))})}),M2="matAlgo02xDS0",B2=["typed","equalScalar"],z2=xn(M2,B2,n=>{var{typed:e,equalScalar:t}=n;return function(o,i,a,l){var u=o._data,d=o._size,s=o._datatype,p=i._values,c=i._index,m=i._ptr,w=i._size,b=i._datatype;if(d.length!==w.length)throw new yn(d.length,w.length);if(d[0]!==w[0]||d[1]!==w[1])throw new RangeError("Dimension mismatch. Matrix A ("+d+") must match Matrix B ("+w+")");if(!p)throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");var v=d[0],f=d[1],g,h=t,y=0,k=a;typeof s=="string"&&s===b&&(g=s,h=e.find(t,[g,g]),y=e.convert(0,g),k=e.find(a,[g,g]));for(var S=[],E=[],A=[],M=0;M<f;M++){A[M]=E.length;for(var B=m[M],O=m[M+1],z=B;z<O;z++){var K=c[z],L=l?k(p[z],u[K][M]):k(u[K][M],p[z]);h(L,y)||(E.push(K),S.push(L))}}return A[f]=E.length,i.createSparseMatrix({values:S,index:E,ptr:A,size:[v,f],datatype:g})}}),I2="matAlgo03xDSf",$2=["typed"],R2=xn(I2,$2,n=>{var{typed:e}=n;return function(r,o,i,a){var l=r._data,u=r._size,d=r._datatype,s=o._values,p=o._index,c=o._ptr,m=o._size,w=o._datatype;if(u.length!==m.length)throw new yn(u.length,m.length);if(u[0]!==m[0]||u[1]!==m[1])throw new RangeError("Dimension mismatch. Matrix A ("+u+") must match Matrix B ("+m+")");if(!s)throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");var b=u[0],v=u[1],f,g=0,h=i;typeof d=="string"&&d===w&&(f=d,g=e.convert(0,f),h=e.find(i,[f,f]));for(var y=[],k=0;k<b;k++)y[k]=[];for(var S=[],E=[],A=0;A<v;A++){for(var M=A+1,B=c[A],O=c[A+1],z=B;z<O;z++){var K=p[z];S[K]=a?h(s[z],l[K][A]):h(l[K][A],s[z]),E[K]=M}for(var L=0;L<b;L++)E[L]===M?y[L][A]=S[L]:y[L][A]=a?h(g,l[L][A]):h(l[L][A],g)}return r.createDenseMatrix({data:y,size:[b,v],datatype:f})}}),L2="matAlgo05xSfSf",j2=["typed","equalScalar"],q2=xn(L2,j2,n=>{var{typed:e,equalScalar:t}=n;return function(o,i,a){var l=o._values,u=o._index,d=o._ptr,s=o._size,p=o._datatype,c=i._values,m=i._index,w=i._ptr,b=i._size,v=i._datatype;if(s.length!==b.length)throw new yn(s.length,b.length);if(s[0]!==b[0]||s[1]!==b[1])throw new RangeError("Dimension mismatch. Matrix A ("+s+") must match Matrix B ("+b+")");var f=s[0],g=s[1],h,y=t,k=0,S=a;typeof p=="string"&&p===v&&(h=p,y=e.find(t,[h,h]),k=e.convert(0,h),S=e.find(a,[h,h]));var E=l&&c?[]:void 0,A=[],M=[],B=E?[]:void 0,O=E?[]:void 0,z=[],K=[],L,X,$,on;for(X=0;X<g;X++){M[X]=A.length;var U=X+1;for($=d[X],on=d[X+1];$<on;$++)L=u[$],A.push(L),z[L]=U,B&&(B[L]=l[$]);for($=w[X],on=w[X+1];$<on;$++)L=m[$],z[L]!==U&&A.push(L),K[L]=U,O&&(O[L]=c[$]);if(E)for($=M[X];$<A.length;){L=A[$];var Q=z[L],J=K[L];if(Q===U||J===U){var un=Q===U?B[L]:k,dn=J===U?O[L]:k,Y=S(un,dn);y(Y,k)?A.splice($,1):(E.push(Y),$++)}}}return M[g]=A.length,o.createSparseMatrix({values:E,index:A,ptr:M,size:[f,g],datatype:h})}}),U2="matAlgo13xDD",H2=["typed"],W2=xn(U2,H2,n=>{var{typed:e}=n;return function(o,i,a){var l=o._data,u=o._size,d=o._datatype,s=i._data,p=i._size,c=i._datatype,m=[];if(u.length!==p.length)throw new yn(u.length,p.length);for(var w=0;w<u.length;w++){if(u[w]!==p[w])throw new RangeError("Dimension mismatch. Matrix A ("+u+") must match Matrix B ("+p+")");m[w]=u[w]}var b,v=a;typeof d=="string"&&d===c&&(b=d,v=e.find(a,[b,b]));var f=m.length>0?t(v,0,m,m[0],l,s):[];return o.createDenseMatrix({data:f,size:m,datatype:b})};function t(r,o,i,a,l,u){var d=[];if(o===i.length-1)for(var s=0;s<a;s++)d[s]=r(l[s],u[s]);else for(var p=0;p<a;p++)d[p]=t(r,o+1,i,i[o+1],l[p],u[p]);return d}}),V2="broadcast",Z2=["concat"],Q2=xn(V2,Z2,n=>{var{concat:e}=n;return function(o,i){var a=Math.max(o._size.length,i._size.length);if(o._size.length===i._size.length&&o._size.every((w,b)=>w===i._size[b]))return[o,i];for(var l=t(o._size,a,0),u=t(i._size,a,0),d=[],s=0;s<a;s++)d[s]=Math.max(l[s],u[s]);el(l,d),el(u,d);var p=o.clone(),c=i.clone();p._size.length<a?p.reshape(t(p._size,a,1)):c._size.length<a&&c.reshape(t(c._size,a,1));for(var m=0;m<a;m++)p._size[m]<d[m]&&(p=r(p,d[m],m)),c._size[m]<d[m]&&(c=r(c,d[m],m));return[p,c]};function t(o,i,a){return[...Array(i-o.length).fill(a),...o]}function r(o,i,a){return e(...Array(i).fill(o),a)}}),Y2="matrixAlgorithmSuite",K2=["typed","matrix","concat"],Xm=xn(Y2,K2,n=>{var{typed:e,matrix:t,concat:r}=n,o=W2({typed:e}),i=Ls({typed:e}),a=Q2({concat:r});return function(u){var d=u.elop,s=u.SD||u.DS,p;d?(p={"DenseMatrix, DenseMatrix":(b,v)=>o(...a(b,v),d),"Array, Array":(b,v)=>o(...a(t(b),t(v)),d).valueOf(),"Array, DenseMatrix":(b,v)=>o(...a(t(b),v),d),"DenseMatrix, Array":(b,v)=>o(...a(b,t(v)),d)},u.SS&&(p["SparseMatrix, SparseMatrix"]=(b,v)=>u.SS(...a(b,v),d,!1)),u.DS&&(p["DenseMatrix, SparseMatrix"]=(b,v)=>u.DS(...a(b,v),d,!1),p["Array, SparseMatrix"]=(b,v)=>u.DS(...a(t(b),v),d,!1)),s&&(p["SparseMatrix, DenseMatrix"]=(b,v)=>s(...a(v,b),d,!0),p["SparseMatrix, Array"]=(b,v)=>s(...a(t(v),b),d,!0))):(p={"DenseMatrix, DenseMatrix":e.referToSelf(b=>(v,f)=>o(...a(v,f),b)),"Array, Array":e.referToSelf(b=>(v,f)=>o(...a(t(v),t(f)),b).valueOf()),"Array, DenseMatrix":e.referToSelf(b=>(v,f)=>o(...a(t(v),f),b)),"DenseMatrix, Array":e.referToSelf(b=>(v,f)=>o(...a(v,t(f)),b))},u.SS&&(p["SparseMatrix, SparseMatrix"]=e.referToSelf(b=>(v,f)=>u.SS(...a(v,f),b,!1))),u.DS&&(p["DenseMatrix, SparseMatrix"]=e.referToSelf(b=>(v,f)=>u.DS(...a(v,f),b,!1)),p["Array, SparseMatrix"]=e.referToSelf(b=>(v,f)=>u.DS(...a(t(v),f),b,!1))),s&&(p["SparseMatrix, DenseMatrix"]=e.referToSelf(b=>(v,f)=>s(...a(f,v),b,!0)),p["SparseMatrix, Array"]=e.referToSelf(b=>(v,f)=>s(...a(t(f),v),b,!0))));var c=u.scalar||"any",m=u.Ds||u.Ss;m&&(d?(p["DenseMatrix,"+c]=(b,v)=>i(b,v,d,!1),p[c+", DenseMatrix"]=(b,v)=>i(v,b,d,!0),p["Array,"+c]=(b,v)=>i(t(b),v,d,!1).valueOf(),p[c+", Array"]=(b,v)=>i(t(v),b,d,!0).valueOf()):(p["DenseMatrix,"+c]=e.referToSelf(b=>(v,f)=>i(v,f,b,!1)),p[c+", DenseMatrix"]=e.referToSelf(b=>(v,f)=>i(f,v,b,!0)),p["Array,"+c]=e.referToSelf(b=>(v,f)=>i(t(v),f,b,!1).valueOf()),p[c+", Array"]=e.referToSelf(b=>(v,f)=>i(t(f),v,b,!0).valueOf())));var w=u.sS!==void 0?u.sS:u.Ss;return d?(u.Ss&&(p["SparseMatrix,"+c]=(b,v)=>u.Ss(b,v,d,!1)),w&&(p[c+", SparseMatrix"]=(b,v)=>w(v,b,d,!0))):(u.Ss&&(p["SparseMatrix,"+c]=e.referToSelf(b=>(v,f)=>u.Ss(v,f,b,!1))),w&&(p[c+", SparseMatrix"]=e.referToSelf(b=>(v,f)=>w(f,v,b,!0)))),d&&d.signatures&&S1(p,d.signatures),p}}),Nc="mod",X2=["typed","config","round","matrix","equalScalar","zeros","DenseMatrix","concat"],G2=xn(Nc,X2,n=>{var{typed:e,config:t,round:r,matrix:o,equalScalar:i,zeros:a,DenseMatrix:l,concat:u}=n,d=O2({typed:e,config:t,round:r,matrix:o,equalScalar:i,zeros:a,DenseMatrix:l}),s=z2({typed:e,equalScalar:i}),p=R2({typed:e}),c=q2({typed:e,equalScalar:i}),m=$s({typed:e,equalScalar:i}),w=Rs({typed:e,DenseMatrix:l}),b=Xm({typed:e,matrix:o,concat:u});return e(Nc,{"number, number":v,"BigNumber, BigNumber":function(g,h){return h.isZero()?g:g.sub(h.mul(d(g.div(h))))},"Fraction, Fraction":function(g,h){return h.equals(0)?g:g.sub(h.mul(d(g.div(h))))}},b({SS:c,DS:p,SD:s,Ss:m,sS:w}));function v(f,g){return g===0?f:f-g*d(f/g)}}),J2="matAlgo01xDSid",nw=["typed"],ew=xn(J2,nw,n=>{var{typed:e}=n;return function(r,o,i,a){var l=r._data,u=r._size,d=r._datatype,s=o._values,p=o._index,c=o._ptr,m=o._size,w=o._datatype;if(u.length!==m.length)throw new yn(u.length,m.length);if(u[0]!==m[0]||u[1]!==m[1])throw new RangeError("Dimension mismatch. Matrix A ("+u+") must match Matrix B ("+m+")");if(!s)throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");var b=u[0],v=u[1],f=typeof d=="string"&&d===w?d:void 0,g=f?e.find(i,[f,f]):i,h,y,k=[];for(h=0;h<b;h++)k[h]=[];var S=[],E=[];for(y=0;y<v;y++){for(var A=y+1,M=c[y],B=c[y+1],O=M;O<B;O++)h=p[O],S[h]=a?g(s[O],l[h][y]):g(l[h][y],s[O]),E[h]=A;for(h=0;h<b;h++)E[h]===A?k[h][y]=S[h]:k[h][y]=l[h][y]}return r.createDenseMatrix({data:k,size:[b,v],datatype:f})}}),tw="matAlgo04xSidSid",rw=["typed","equalScalar"],ow=xn(tw,rw,n=>{var{typed:e,equalScalar:t}=n;return function(o,i,a){var l=o._values,u=o._index,d=o._ptr,s=o._size,p=o._datatype,c=i._values,m=i._index,w=i._ptr,b=i._size,v=i._datatype;if(s.length!==b.length)throw new yn(s.length,b.length);if(s[0]!==b[0]||s[1]!==b[1])throw new RangeError("Dimension mismatch. Matrix A ("+s+") must match Matrix B ("+b+")");var f=s[0],g=s[1],h,y=t,k=0,S=a;typeof p=="string"&&p===v&&(h=p,y=e.find(t,[h,h]),k=e.convert(0,h),S=e.find(a,[h,h]));var E=l&&c?[]:void 0,A=[],M=[],B=l&&c?[]:void 0,O=l&&c?[]:void 0,z=[],K=[],L,X,$,on,U;for(X=0;X<g;X++){M[X]=A.length;var Q=X+1;for(on=d[X],U=d[X+1],$=on;$<U;$++)L=u[$],A.push(L),z[L]=Q,B&&(B[L]=l[$]);for(on=w[X],U=w[X+1],$=on;$<U;$++)if(L=m[$],z[L]===Q){if(B){var J=S(B[L],c[$]);y(J,k)?z[L]=null:B[L]=J}}else A.push(L),K[L]=Q,O&&(O[L]=c[$]);if(B&&O)for($=M[X];$<A.length;)L=A[$],z[L]===Q?(E[$]=B[L],$++):K[L]===Q?(E[$]=O[L],$++):A.splice($,1)}return M[g]=A.length,o.createSparseMatrix({values:E,index:A,ptr:M,size:[f,g],datatype:h})}}),iw="matAlgo10xSids",aw=["typed","DenseMatrix"],lw=xn(iw,aw,n=>{var{typed:e,DenseMatrix:t}=n;return function(o,i,a,l){var u=o._values,d=o._index,s=o._ptr,p=o._size,c=o._datatype;if(!u)throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");var m=p[0],w=p[1],b,v=a;typeof c=="string"&&(b=c,i=e.convert(i,b),v=e.find(a,[b,b]));for(var f=[],g=[],h=[],y=0;y<w;y++){for(var k=y+1,S=s[y],E=s[y+1],A=S;A<E;A++){var M=d[A];g[M]=u[A],h[M]=k}for(var B=0;B<m;B++)y===0&&(f[B]=[]),h[B]===k?f[B][y]=l?v(i,g[B]):v(g[B],i):f[B][y]=i}return new t({data:f,size:[m,w],datatype:b})}});function Eo(n,e,t,r){if(!(this instanceof Eo))throw new SyntaxError("Constructor must be called with the new operator");this.fn=n,this.count=e,this.min=t,this.max=r,this.message="Wrong number of arguments in function "+n+" ("+e+" provided, "+t+(r!=null?"-"+r:"")+" expected)",this.stack=new Error().stack}Eo.prototype=new Error;Eo.prototype.constructor=Error;Eo.prototype.name="ArgumentsError";Eo.prototype.isArgumentsError=!0;var Pc="gcd",uw=["typed","config","round","matrix","equalScalar","zeros","BigNumber","DenseMatrix","concat"],yu="number | BigNumber | Fraction | Matrix | Array",pw="".concat(yu,", ").concat(yu,", ...").concat(yu);function Tc(n){return!n.some(e=>Array.isArray(e))}var sw=xn(Pc,uw,n=>{var{typed:e,matrix:t,config:r,round:o,equalScalar:i,zeros:a,BigNumber:l,DenseMatrix:u,concat:d}=n,s=G2({typed:e,config:r,round:o,matrix:t,equalScalar:i,zeros:a,DenseMatrix:u,concat:d}),p=ew({typed:e}),c=ow({typed:e,equalScalar:i}),m=lw({typed:e,DenseMatrix:u}),w=Xm({typed:e,matrix:t,concat:d});return e(Pc,{"number, number":b,"BigNumber, BigNumber":v,"Fraction, Fraction":(f,g)=>f.gcd(g)},w({SS:c,DS:p,Ss:m}),{[pw]:e.referToSelf(f=>(g,h,y)=>{for(var k=f(g,h),S=0;S<y.length;S++)k=f(k,y[S]);return k}),Array:e.referToSelf(f=>g=>{if(g.length===1&&Array.isArray(g[0])&&Tc(g[0]))return f(...g[0]);if(Tc(g))return f(...g);throw new Eo("gcd() supports only 1d matrices!")}),Matrix:e.referToSelf(f=>g=>f(g.toArray()))});function b(f,g){if(!qn(f)||!qn(g))throw new Error("Parameters in function gcd must be integer numbers");for(var h;g!==0;)h=s(f,g),f=g,g=h;return f<0?-f:f}function v(f,g){if(!f.isInt()||!g.isInt())throw new Error("Parameters in function gcd must be integer numbers");for(var h=new l(0);!g.isZero();){var y=s(f,g);f=g,g=y}return f.lt(h)?f.neg():f}}),Oc="concat",dw=["typed","matrix","isInteger"],cw=xn(Oc,dw,n=>{var{typed:e,matrix:t,isInteger:r}=n;return e(Oc,{"...Array | Matrix | number | BigNumber":function(i){var a,l=i.length,u=-1,d,s=!1,p=[];for(a=0;a<l;a++){var c=i[a];if(wt(c)&&(s=!0),On(c)||Te(c)){if(a!==l-1)throw new Error("Dimension must be specified as last argument");if(d=u,u=c.valueOf(),!r(u))throw new TypeError("Integer number expected for dimension");if(u<0||a>0&&u>d)throw new Tr(u,d+1)}else{var m=Gn(c).valueOf(),w=Tt(m);if(p[a]=m,d=u,u=w.length-1,a>0&&u!==d)throw new yn(d+1,u+1)}}if(p.length===0)throw new SyntaxError("At least one matrix expected");for(var b=p.shift();p.length;)b=Om(b,p.shift(),u);return s?t(b):b},"...string":function(i){return i.join("")}})}),Mc="zeros",fw=["typed","config","matrix","BigNumber"],bw=xn(Mc,fw,n=>{var{typed:e,config:t,matrix:r,BigNumber:o}=n;return e(Mc,{"":function(){return t.matrix==="Array"?i([]):i([],"default")},"...number | BigNumber | string":function(d){var s=d[d.length-1];if(typeof s=="string"){var p=d.pop();return i(d,p)}else return t.matrix==="Array"?i(d):i(d,"default")},Array:i,Matrix:function(d){var s=d.storage();return i(d.valueOf(),s)},"Array | Matrix, string":function(d,s){return i(d.valueOf(),s)}});function i(u,d){var s=a(u),p=s?new o(0):0;if(l(u),d){var c=r(d);return u.length>0?c.resize(u,p):c}else{var m=[];return u.length>0?Dp(m,u,p):m}}function a(u){var d=!1;return u.forEach(function(s,p,c){Te(s)&&(d=!0,c[p]=s.toNumber())}),d}function l(u){u.forEach(function(d){if(typeof d!="number"||!qn(d)||d<0)throw new Error("Parameters in function zeros must be positive integers")})}}),Ir="Number of decimals in function round must be an integer",Bc="round",mw=["typed","matrix","equalScalar","zeros","BigNumber","DenseMatrix"],gw=xn(Bc,mw,n=>{var{typed:e,matrix:t,equalScalar:r,zeros:o,BigNumber:i,DenseMatrix:a}=n,l=$s({typed:e,equalScalar:r}),u=Rs({typed:e,DenseMatrix:a}),d=Ls({typed:e});return e(Bc,{number:Fc,"number, number":Fc,"number, BigNumber":function(p,c){if(!c.isInteger())throw new TypeError(Ir);return new i(p).toDecimalPlaces(c.toNumber())},Complex:function(p){return p.round()},"Complex, number":function(p,c){if(c%1)throw new TypeError(Ir);return p.round(c)},"Complex, BigNumber":function(p,c){if(!c.isInteger())throw new TypeError(Ir);var m=c.toNumber();return p.round(m)},BigNumber:function(p){return p.toDecimalPlaces(0)},"BigNumber, BigNumber":function(p,c){if(!c.isInteger())throw new TypeError(Ir);return p.toDecimalPlaces(c.toNumber())},Fraction:function(p){return p.round()},"Fraction, number":function(p,c){if(c%1)throw new TypeError(Ir);return p.round(c)},"Fraction, BigNumber":function(p,c){if(!c.isInteger())throw new TypeError(Ir);return p.round(c.toNumber())},"Unit, number, Unit":e.referToSelf(s=>function(p,c,m){var w=p.toNumeric(m);return m.multiply(s(w,c))}),"Unit, BigNumber, Unit":e.referToSelf(s=>(p,c,m)=>s(p,c.toNumber(),m)),"Unit, Unit":e.referToSelf(s=>(p,c)=>s(p,0,c)),"Array | Matrix, number, Unit":e.referToSelf(s=>(p,c,m)=>wo(p,w=>s(w,c,m))),"Array | Matrix, BigNumber, Unit":e.referToSelf(s=>(p,c,m)=>s(p,c.toNumber(),m)),"Array | Matrix, Unit":e.referToSelf(s=>(p,c)=>s(p,0,c)),"Array | Matrix":e.referToSelf(s=>p=>wo(p,s)),"SparseMatrix, number | BigNumber":e.referToSelf(s=>(p,c)=>l(p,c,s,!1)),"DenseMatrix, number | BigNumber":e.referToSelf(s=>(p,c)=>d(p,c,s,!1)),"Array, number | BigNumber":e.referToSelf(s=>(p,c)=>d(t(p),c,s,!1).valueOf()),"number | Complex | BigNumber | Fraction, SparseMatrix":e.referToSelf(s=>(p,c)=>r(p,0)?o(c.size(),c.storage()):u(c,p,s,!0)),"number | Complex | BigNumber | Fraction, DenseMatrix":e.referToSelf(s=>(p,c)=>r(p,0)?o(c.size(),c.storage()):d(c,p,s,!0)),"number | Complex | BigNumber | Fraction, Array":e.referToSelf(s=>(p,c)=>d(t(c),p,s,!0).valueOf())})}),Pl=Jv({config:$i}),hw=r2({}),vw=l2({}),js=s2({}),Tl=f2({Matrix:js}),cr=tv({BigNumber:Pl,Complex:hw,DenseMatrix:Tl,Fraction:vw}),qs=w2({config:$i,typed:cr}),ww=m2({typed:cr}),yw=k2({Matrix:js,equalScalar:qs,typed:cr}),Ol=E2({DenseMatrix:Tl,Matrix:js,SparseMatrix:yw,typed:cr}),Gm=bw({BigNumber:Pl,config:$i,matrix:Ol,typed:cr}),xw=cw({isInteger:ww,matrix:Ol,typed:cr}),kw=gw({BigNumber:Pl,DenseMatrix:Tl,equalScalar:qs,matrix:Ol,typed:cr,zeros:Gm}),Dw=sw({BigNumber:Pl,DenseMatrix:Tl,concat:xw,config:$i,equalScalar:qs,matrix:Ol,round:kw,typed:cr,zeros:Gm});function Ew(n){const e=/\$enddefinitions *\$end/g;e.test(n);let t=n.slice(0,e.lastIndex);return t=Q5(t),{header:t,remaining:n.slice(e.lastIndex)}}function Cw(n,e){return n.parse(e)}function Sw(n){const e=n.search(/\$dumpvars/);if(e<0)return{init:null,body:n};n=n.slice(e+9);const t=n.search(/\$end/);let r=null;return r=Cw(K5,n.slice(0,t)),{init:r,body:n.slice(t+4)}}function Aw(n){n=n.trimStart();let{header:e,remaining:t}=Ew(n),{init:r,body:o}=Sw(t);return o=hm(o),{header:e,init:r,body:o}}function Fw(n,e){let t=Aw(n),r=0,o={};if(t.init!=null){const u=t.init[0];for(let d=0;d<u.rows.length;d++){const s=u.rows[d];o[s.ref]=[{time:0,value:s.value}]}}let i=null;for(let u=0;u<t.body.length;u++){const d=t.body[u];if(r=Math.max(r,d.time),i==null&&d.time>0&&(i=d.time),i!=null)try{i=Dw(i,d.time)}catch(s){throw console.log(i,d.time),s}for(let s=0;s<d.rows.length;s++){const p=d.rows[s];p.ref in o||(o[p.ref]=[]),o[p.ref].push({time:d.time,value:p.value})}}let a={sim_end_time:r,timescale:t.timescale,time_scale:i,signals:[]};console.log("time_scale",a.time_scale);function l(u,d=[]){for(let s=0;s<u.vars.length;s++){let p=u.vars[s];const c=[...d,u.name,p.name];a.signals.push({...p,name:c,waveform:o[p.ref]})}for(let s=0;s<u.scopes.length;s++)l(u.scopes[s],`${d}${u.name}`)}for(let u=0;u<t.header.scopes.length;u++)l(t.header.scopes[u]);return a}function Jm(n,e){if(n==null)return{};var t={},r=Object.keys(n),o,i;for(i=0;i<r.length;i++)o=r[i],!(e.indexOf(o)>=0)&&(t[o]=n[o]);return t}function Tp(n,e){return Tp=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},Tp(n,e)}function n0(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,Tp(n,e)}function _w(n,e){return n.classList?!!e&&n.classList.contains(e):(" "+(n.className.baseVal||n.className)+" ").indexOf(" "+e+" ")!==-1}function Nw(n,e){n.classList?n.classList.add(e):_w(n,e)||(typeof n.className=="string"?n.className=n.className+" "+e:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+e))}function zc(n,e){return n.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function Pw(n,e){n.classList?n.classList.remove(e):typeof n.className=="string"?n.className=zc(n.className,e):n.setAttribute("class",zc(n.className&&n.className.baseVal||"",e))}const Ic={disabled:!1},e0=ee.createContext(null);var t0=function(e){return e.scrollTop},Zo="unmounted",mr="exited",gr="entering",Rr="entered",Op="exiting",$t=function(n){n0(e,n);function e(r,o){var i;i=n.call(this,r,o)||this;var a=o,l=a&&!a.isMounting?r.enter:r.appear,u;return i.appearStatus=null,r.in?l?(u=mr,i.appearStatus=gr):u=Rr:r.unmountOnExit||r.mountOnEnter?u=Zo:u=mr,i.state={status:u},i.nextCallback=null,i}e.getDerivedStateFromProps=function(o,i){var a=o.in;return a&&i.status===Zo?{status:mr}:null};var t=e.prototype;return t.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},t.componentDidUpdate=function(o){var i=null;if(o!==this.props){var a=this.state.status;this.props.in?a!==gr&&a!==Rr&&(i=gr):(a===gr||a===Rr)&&(i=Op)}this.updateStatus(!1,i)},t.componentWillUnmount=function(){this.cancelNextCallback()},t.getTimeouts=function(){var o=this.props.timeout,i,a,l;return i=a=l=o,o!=null&&typeof o!="number"&&(i=o.exit,a=o.enter,l=o.appear!==void 0?o.appear:a),{exit:i,enter:a,appear:l}},t.updateStatus=function(o,i){if(o===void 0&&(o=!1),i!==null)if(this.cancelNextCallback(),i===gr){if(this.props.unmountOnExit||this.props.mountOnEnter){var a=this.props.nodeRef?this.props.nodeRef.current:Uo.findDOMNode(this);a&&t0(a)}this.performEnter(o)}else this.performExit();else this.props.unmountOnExit&&this.state.status===mr&&this.setState({status:Zo})},t.performEnter=function(o){var i=this,a=this.props.enter,l=this.context?this.context.isMounting:o,u=this.props.nodeRef?[l]:[Uo.findDOMNode(this),l],d=u[0],s=u[1],p=this.getTimeouts(),c=l?p.appear:p.enter;if(!o&&!a||Ic.disabled){this.safeSetState({status:Rr},function(){i.props.onEntered(d)});return}this.props.onEnter(d,s),this.safeSetState({status:gr},function(){i.props.onEntering(d,s),i.onTransitionEnd(c,function(){i.safeSetState({status:Rr},function(){i.props.onEntered(d,s)})})})},t.performExit=function(){var o=this,i=this.props.exit,a=this.getTimeouts(),l=this.props.nodeRef?void 0:Uo.findDOMNode(this);if(!i||Ic.disabled){this.safeSetState({status:mr},function(){o.props.onExited(l)});return}this.props.onExit(l),this.safeSetState({status:Op},function(){o.props.onExiting(l),o.onTransitionEnd(a.exit,function(){o.safeSetState({status:mr},function(){o.props.onExited(l)})})})},t.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},t.safeSetState=function(o,i){i=this.setNextCallback(i),this.setState(o,i)},t.setNextCallback=function(o){var i=this,a=!0;return this.nextCallback=function(l){a&&(a=!1,i.nextCallback=null,o(l))},this.nextCallback.cancel=function(){a=!1},this.nextCallback},t.onTransitionEnd=function(o,i){this.setNextCallback(i);var a=this.props.nodeRef?this.props.nodeRef.current:Uo.findDOMNode(this),l=o==null&&!this.props.addEndListener;if(!a||l){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var u=this.props.nodeRef?[this.nextCallback]:[a,this.nextCallback],d=u[0],s=u[1];this.props.addEndListener(d,s)}o!=null&&setTimeout(this.nextCallback,o)},t.render=function(){var o=this.state.status;if(o===Zo)return null;var i=this.props,a=i.children;i.in,i.mountOnEnter,i.unmountOnExit,i.appear,i.enter,i.exit,i.timeout,i.addEndListener,i.onEnter,i.onEntering,i.onEntered,i.onExit,i.onExiting,i.onExited,i.nodeRef;var l=Jm(i,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return ee.createElement(e0.Provider,{value:null},typeof a=="function"?a(o,l):ee.cloneElement(ee.Children.only(a),l))},e}(ee.Component);$t.contextType=e0;$t.propTypes={};function $r(){}$t.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:$r,onEntering:$r,onEntered:$r,onExit:$r,onExiting:$r,onExited:$r};$t.UNMOUNTED=Zo;$t.EXITED=mr;$t.ENTERING=gr;$t.ENTERED=Rr;$t.EXITING=Op;const Tw=$t;var Ow=function(e,t){return e&&t&&t.split(" ").forEach(function(r){return Nw(e,r)})},xu=function(e,t){return e&&t&&t.split(" ").forEach(function(r){return Pw(e,r)})},Us=function(n){n0(e,n);function e(){for(var r,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return r=n.call.apply(n,[this].concat(i))||this,r.appliedClasses={appear:{},enter:{},exit:{}},r.onEnter=function(l,u){var d=r.resolveArguments(l,u),s=d[0],p=d[1];r.removeClasses(s,"exit"),r.addClass(s,p?"appear":"enter","base"),r.props.onEnter&&r.props.onEnter(l,u)},r.onEntering=function(l,u){var d=r.resolveArguments(l,u),s=d[0],p=d[1],c=p?"appear":"enter";r.addClass(s,c,"active"),r.props.onEntering&&r.props.onEntering(l,u)},r.onEntered=function(l,u){var d=r.resolveArguments(l,u),s=d[0],p=d[1],c=p?"appear":"enter";r.removeClasses(s,c),r.addClass(s,c,"done"),r.props.onEntered&&r.props.onEntered(l,u)},r.onExit=function(l){var u=r.resolveArguments(l),d=u[0];r.removeClasses(d,"appear"),r.removeClasses(d,"enter"),r.addClass(d,"exit","base"),r.props.onExit&&r.props.onExit(l)},r.onExiting=function(l){var u=r.resolveArguments(l),d=u[0];r.addClass(d,"exit","active"),r.props.onExiting&&r.props.onExiting(l)},r.onExited=function(l){var u=r.resolveArguments(l),d=u[0];r.removeClasses(d,"exit"),r.addClass(d,"exit","done"),r.props.onExited&&r.props.onExited(l)},r.resolveArguments=function(l,u){return r.props.nodeRef?[r.props.nodeRef.current,l]:[l,u]},r.getClassNames=function(l){var u=r.props.classNames,d=typeof u=="string",s=d&&u?u+"-":"",p=d?""+s+l:u[l],c=d?p+"-active":u[l+"Active"],m=d?p+"-done":u[l+"Done"];return{baseClassName:p,activeClassName:c,doneClassName:m}},r}var t=e.prototype;return t.addClass=function(o,i,a){var l=this.getClassNames(i)[a+"ClassName"],u=this.getClassNames("enter"),d=u.doneClassName;i==="appear"&&a==="done"&&d&&(l+=" "+d),a==="active"&&o&&t0(o),l&&(this.appliedClasses[i][a]=l,Ow(o,l))},t.removeClasses=function(o,i){var a=this.appliedClasses[i],l=a.base,u=a.active,d=a.done;this.appliedClasses[i]={},l&&xu(o,l),u&&xu(o,u),d&&xu(o,d)},t.render=function(){var o=this.props;o.classNames;var i=Jm(o,["classNames"]);return ee.createElement(Tw,Ci({},i,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},e}(ee.Component);Us.defaultProps={classNames:""};Us.propTypes={};const Mw=Us;function Fi(n){"@babel/helpers - typeof";return Fi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Fi(n)}function Bw(n,e){if(Fi(n)!=="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Fi(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function zw(n){var e=Bw(n,"string");return Fi(e)==="symbol"?e:String(e)}function Iw(n,e,t){return e=zw(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Mp={defaultProps:{__TYPE:"CSSTransition",children:void 0},getProps:function(e){return pn.getMergedProps(e,Mp.defaultProps)},getOtherProps:function(e){return pn.getDiffProps(e,Mp.defaultProps)}};function $c(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function ku(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?$c(Object(t),!0).forEach(function(r){Iw(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):$c(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}var Hs=j.forwardRef(function(n,e){var t=Mp.getProps(n),r=j.useContext(Pr),o=t.disabled||t.options&&t.options.disabled||r&&!r.cssTransition||!tt.cssTransition,i=function(b,v){t.onEnter&&t.onEnter(b,v),t.options&&t.options.onEnter&&t.options.onEnter(b,v)},a=function(b,v){t.onEntering&&t.onEntering(b,v),t.options&&t.options.onEntering&&t.options.onEntering(b,v)},l=function(b,v){t.onEntered&&t.onEntered(b,v),t.options&&t.options.onEntered&&t.options.onEntered(b,v)},u=function(b){t.onExit&&t.onExit(b),t.options&&t.options.onExit&&t.options.onExit(b)},d=function(b){t.onExiting&&t.onExiting(b),t.options&&t.options.onExiting&&t.options.onExiting(b)},s=function(b){t.onExited&&t.onExited(b),t.options&&t.options.onExited&&t.options.onExited(b)};if(or(function(){if(o){var w=pn.getRefElement(t.nodeRef);t.in?(i(w,!0),a(w,!0),l(w,!0)):(u(w),d(w),s(w))}},[t.in]),o)return t.in?t.children:null;var p={nodeRef:t.nodeRef,in:t.in,onEnter:i,onEntering:a,onEntered:l,onExit:u,onExiting:d,onExited:s},c={classNames:t.classNames,timeout:t.timeout,unmountOnExit:t.unmountOnExit},m=ku(ku(ku({},c),t.options||{}),p);return j.createElement(Mw,m,t.children)});Hs.displayName="CSSTransition";function $w(n){if(Array.isArray(n))return n}function Rw(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,o,i,a,l=[],u=!0,d=!1;try{if(i=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;u=!1}else for(;!(u=(r=i.call(t)).done)&&(l.push(r.value),l.length!==e);u=!0);}catch(s){d=!0,o=s}finally{try{if(!u&&t.return!=null&&(a=t.return(),Object(a)!==a))return}finally{if(d)throw o}}return l}}function Rc(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function Lw(n,e){if(n){if(typeof n=="string")return Rc(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Rc(n,e)}}function jw(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qw(n,e){return $w(n)||Rw(n,e)||Lw(n,e)||jw()}var Bp={defaultProps:{__TYPE:"Portal",element:null,appendTo:null,visible:!1,onMounted:null,onUnmounted:null,children:void 0},getProps:function(e){return pn.getMergedProps(e,Bp.defaultProps)},getOtherProps:function(e){return pn.getDiffProps(e,Bp.defaultProps)}},r0=j.memo(function(n){var e=Bp.getProps(n),t=j.useContext(Pr),r=j.useState(e.visible&&an.isClient()),o=qw(r,2),i=o[0],a=o[1];Dl(function(){an.isClient()&&!i&&(a(!0),e.onMounted&&e.onMounted())}),or(function(){e.onMounted&&e.onMounted()},[i]),Ii(function(){e.onUnmounted&&e.onUnmounted()});var l=e.element||e.children;if(l&&i){var u=e.appendTo||t&&t.appendTo||tt.appendTo||document.body;return u==="self"?l:Uo.createPortal(l,u)}return null});r0.displayName="Portal";var Sa={defaultProps:{__TYPE:"IconBase",className:null,label:null,spin:!1},getProps:function(e){return pn.getMergedProps(e,Sa.defaultProps)},getOtherProps:function(e){return pn.getDiffProps(e,Sa.defaultProps)},getPTI:function(e){var t=pn.isEmpty(e.label),r=Sa.getOtherProps(e),o={className:pt("p-icon",{"p-icon-spin":e.spin},e.className),role:t?void 0:"img","aria-label":t?void 0:e.label,"aria-hidden":t};return pn.getMergedProps(r,o)}};function zp(){return zp=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},zp.apply(this,arguments)}var o0=j.memo(j.forwardRef(function(n,e){var t=Sa.getPTI(n);return j.createElement("svg",zp({ref:e,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),j.createElement("path",{d:"M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z",fill:"currentColor"}))}));o0.displayName="AngleRightIcon";function Ip(){return Ip=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Ip.apply(this,arguments)}function _i(n){"@babel/helpers - typeof";return _i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_i(n)}function Uw(n,e){if(_i(n)!=="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(_i(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Hw(n){var e=Uw(n,"string");return _i(e)==="symbol"?e:String(e)}function Ww(n,e,t){return e=Hw(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var Vw=`
@layer primereact {
    .p-ripple {
        overflow: hidden;
        position: relative;
    }
    
    .p-ink {
        display: block;
        position: absolute;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 100%;
        transform: scale(0);
    }
    
    .p-ink-active {
        animation: ripple 0.4s linear;
    }
    
    .p-ripple-disabled .p-ink {
        display: none;
    }
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}

`,Zw={root:"p-ink"},Jr=Hn.extend({defaultProps:{__TYPE:"Ripple",children:void 0},css:{styles:Vw,classes:Zw},getProps:function(e){return pn.getMergedProps(e,Jr.defaultProps)},getOtherProps:function(e){return pn.getDiffProps(e,Jr.defaultProps)}});function Lc(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function Qw(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Lc(Object(t),!0).forEach(function(r){Ww(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Lc(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}var i0=j.memo(j.forwardRef(function(n,e){var t=j.useRef(null),r=j.useRef(null),o=j.useContext(Pr),i=Jr.getProps(n,o),a={props:i};Wo(Jr.css.styles,{name:"ripple"});var l=Jr.setMetaData(Qw({},a)),u=l.ptm,d=l.cx,s=function(){return t.current&&t.current.parentElement},p=function(){r.current&&r.current.addEventListener("pointerdown",m)},c=function(){r.current&&r.current.removeEventListener("pointerdown",m)},m=function(h){var y=an.getOffset(r.current),k=h.pageX-y.left+document.body.scrollTop-an.getWidth(t.current)/2,S=h.pageY-y.top+document.body.scrollLeft-an.getHeight(t.current)/2;w(k,S)},w=function(h,y){!t.current||getComputedStyle(t.current,null).display==="none"||(an.removeClass(t.current,"p-ink-active"),v(),t.current.style.top=y+"px",t.current.style.left=h+"px",an.addClass(t.current,"p-ink-active"))},b=function(h){an.removeClass(h.currentTarget,"p-ink-active")},v=function(){if(t.current&&!an.getHeight(t.current)&&!an.getWidth(t.current)){var h=Math.max(an.getOuterWidth(r.current),an.getOuterHeight(r.current));t.current.style.height=h+"px",t.current.style.width=h+"px"}};j.useImperativeHandle(e,function(){return{props:i,getInk:function(){return t.current},getTarget:function(){return r.current}}}),Dl(function(){t.current&&(r.current=s(),v(),p())}),or(function(){t.current&&!r.current&&(r.current=s(),v(),p())}),Ii(function(){t.current&&(r.current=null,c())});var f=ve({"aria-hidden":!0,className:pt(d("root"))},Jr.getOtherProps(i),u("root"));return o&&o.ripple||tt.ripple?j.createElement("span",Ip({role:"presentation",ref:t},f,{onAnimationEnd:b})):null}));i0.displayName="Ripple";function yo(){return yo=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},yo.apply(this,arguments)}function Yw(n){if(Array.isArray(n))return n}function Kw(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,o,i,a,l=[],u=!0,d=!1;try{if(i=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;u=!1}else for(;!(u=(r=i.call(t)).done)&&(l.push(r.value),l.length!==e);u=!0);}catch(s){d=!0,o=s}finally{try{if(!u&&t.return!=null&&(a=t.return(),Object(a)!==a))return}finally{if(d)throw o}}return l}}function jc(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function Xw(n,e){if(n){if(typeof n=="string")return jc(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return jc(n,e)}}function Gw(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ct(n,e){return Yw(n)||Kw(n,e)||Xw(n,e)||Gw()}var Jw=`
@layer primereact {
    .p-contextmenu ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    
    .p-contextmenu .p-submenu-list {
        position: absolute;
        min-width: 100%;
        z-index: 1;
    }
    
    .p-contextmenu .p-menuitem-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
    }
    
    .p-contextmenu .p-menuitem-text {
        line-height: 1;
    }
    
    .p-contextmenu .p-menuitem {
        position: relative;
    }
    
    .p-contextmenu .p-menuitem-link .p-submenu-icon {
        margin-left: auto;
    }
    
    .p-contextmenu-enter {
        opacity: 0;
    }
    
    .p-contextmenu-enter-active {
        opacity: 1;
        transition: opacity 250ms;
    }
}
`,ny={root:function(e){var t=e.context;return pt("p-contextmenu p-component",{"p-input-filled":t&&t.inputStyle==="filled"||tt.inputStyle==="filled","p-ripple-disabled":t&&t.ripple===!1||tt.ripple===!1})},menu:function(e){var t=e.menuProps;return pt({"p-submenu-list":!t.root})},menuitem:function(e){var t=e.item,r=e.active;return pt("p-menuitem",{"p-menuitem-active":r},t.className)},action:function(e){var t=e.item;return pt("p-menuitem-link",{"p-disabled":t.disabled})},icon:"p-menuitem-icon",submenuIcon:"p-submenu-icon",label:"p-menuitem-text",separator:"p-menu-separator",transition:"p-contextmenu",submenuTransition:"p-contextmenusub"},sa=Hn.extend({defaultProps:{__TYPE:"ContextMenu",id:null,model:null,style:null,className:null,global:!1,autoZIndex:!0,baseZIndex:0,breakpoint:void 0,scrollHeight:"400px",appendTo:null,transitionOptions:null,onShow:null,onHide:null,submenuIcon:null,children:void 0},css:{classes:ny,styles:Jw}});function Ni(n){"@babel/helpers - typeof";return Ni=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ni(n)}function ey(n,e){if(Ni(n)!=="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(Ni(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function ty(n){var e=ey(n,"string");return Ni(e)==="symbol"?e:String(e)}function $p(n,e,t){return e=ty(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function qc(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,r)}return t}function Uc(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?qc(Object(t),!0).forEach(function(r){$p(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):qc(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}var Ws=j.memo(function(n){var e=j.useState(null),t=Ct(e,2),r=t[0],o=t[1],i=j.useRef(null),a=n.root||!n.resetMenu,l=n.ptm,u=n.cx,d=function(E,A){return l(A,{hostName:n.hostName,context:{active:r===E}})};n.resetMenu===!0&&r!==null&&o(null);var s=function(E,A){if(A.disabled||n.isMobileMode){E.preventDefault();return}o(A)},p=function(E,A){if(A.disabled){E.preventDefault();return}A.url||E.preventDefault(),A.command&&A.command({originalEvent:E,item:A}),n.isMobileMode&&A.items&&o(r&&A===r?null:A),A.items||n.onLeafClick(E)},c=function(){if(!n.isMobileMode){var E=i.current.parentElement,A=an.getOffset(E),M=an.getViewport(),B=i.current.offsetParent?i.current.offsetWidth:an.getHiddenElementOuterWidth(i.current),O=an.getOuterWidth(E.children[0]),z=parseInt(A.top,10)+i.current.offsetHeight-an.getWindowScrollTop();z>M.height?i.current.style.top=M.height-z+"px":i.current.style.top="0px",parseInt(A.left,10)+O+B>M.width-an.calculateScrollbarWidth()?i.current.style.left=-1*B+"px":i.current.style.left=O+"px"}},m=function(){c()};or(function(){a&&c()});var w=function(E){var A=n.id+"_separator_"+E,M=ve({id:A,key:A,className:u("separator"),role:"separator"},l("separator",{hostName:n.hostName}));return j.createElement("li",M)},b=function(E,A){return E.items?j.createElement(Ws,{id:n.id+"_"+A,hostName:n.hostName,menuProps:n.menuProps,model:E.items,resetMenu:E!==r,onLeafClick:n.onLeafClick,isMobileMode:n.isMobileMode,submenuIcon:n.submenuIcon,ptm:l,cx:u}):null},v=function(E,A){if(E.visible===!1)return null;var M=r===E,B=E.id||n.id+"_"+A,O=ve({className:u("icon")},d(E,"icon")),z=ic.getJSXIcon(E.icon,Uc({},O),{props:n.menuProps}),K=ve({className:u("submenuIcon")},d(E,"submenuIcon")),L=ve({className:u("label")},d(E,"label")),X=E.items&&ic.getJSXIcon(n.submenuIcon||j.createElement(o0,K),Uc({},K),{props:n.menuProps}),$=E.label&&j.createElement("span",L,E.label),on=b(E,A),U=ve({href:E.url||"#",className:u("action",{item:E}),target:E.target,onClick:function(Y){return p(Y,E)},role:"menuitem","aria-haspopup":E.items!=null,"aria-disabled":E.disabled},d(E,"action")),Q=j.createElement("a",U,z,$,X,j.createElement(i0,null));if(E.template){var J={onClick:function(Y){return p(Y,E)},className:"p-menuitem-link",labelClassName:"p-menuitem-text",iconClassName:"p-menuitem-icon",submenuIconClassName:u("submenuIcon"),element:Q,props:n,active:M};Q=pn.getJSXElement(E.template,E,J)}var un=ve($p($p({id:B,key:B,role:"none",className:u("menuitem",{item:E,active:M}),style:E.style},"key",B),"onMouseEnter",function(Y){return s(Y,E)}),d(E,"menuitem"));return j.createElement("li",un,Q,on)},f=function(E,A){return E.separator?w(A):v(E,A)},g=function(){return n.model?n.model.map(f):null},h=g(),y=ve({className:u("menu",{menuProps:n})},l("menu",{hostName:n.hostName})),k=ve({classNames:u("submenuTransition"),in:a,timeout:{enter:0,exit:0},unmountOnExit:!0,onEnter:m},l("menu.transition",{hostName:n.hostName}));return j.createElement(Hs,yo({nodeRef:i},k),j.createElement("ul",yo({ref:i},y),h))});Ws.displayName="ContextMenuSub";var a0=j.memo(j.forwardRef(function(n,e){var t=j.useContext(Pr),r=sa.getProps(n,t),o=j.useState(r.id),i=Ct(o,2),a=i[0],l=i[1],u=j.useState(!1),d=Ct(u,2),s=d[0],p=d[1],c=j.useState(!1),m=Ct(c,2),w=m[0],b=m[1],v=j.useState(!1),f=Ct(v,2),g=f[0],h=f[1],y=j.useState(null),k=Ct(y,2),S=k[0],E=k[1],A=sa.setMetaData({props:r,state:{id:a,visible:s,reshow:w,resetMenu:g,attributeSelector:S}}),M=A.ptm,B=A.cx,O=A.isUnstyled;bm(sa.css.styles,O,{name:"contextmenu"});var z=j.useRef(null),K=j.useRef(null),L=j.useRef(null),X=w5("screen and (max-width: ".concat(r.breakpoint,")"),!!r.breakpoint),$=ki({type:"click",listener:function(x){Ee(x)&&x.button!==2&&(ge(x),h(!0))}}),on=Ct($,2),U=on[0],Q=on[1],J=ki({type:"contextmenu",when:r.global,listener:function(x){me(x)}}),un=Ct(J,1),dn=un[0],Y=y5({listener:function(x){s&&!an.isTouchDevice()&&ge(x)}}),Sn=Ct(Y,2),An=Sn[0],Un=Sn[1],bn=function(){if(!L.current){L.current=an.createInlineStyle(t&&t.nonce||tt.nonce);var x="".concat(S),N=`
@media screen and (max-width: `.concat(r.breakpoint,`) {
    .p-contextmenu[`).concat(x,`] > ul {
        max-height: `).concat(r.scrollHeight,`;
        overflow: `).concat(r.scrollHeight?"auto":"",`;
    }

    .p-contextmenu[`).concat(x,`] .p-submenu-list {
        position: relative;
    }

    .p-contextmenu[`).concat(x,`] .p-menuitem-active > .p-submenu-list {
        left: 0;
        box-shadow: none;
        border-radius: 0;
        padding: 0 0 0 calc(var(--inline-spacing) * 2); /* @todo */
    }

    .p-contextmenu[`).concat(x,`] .p-menuitem-active > .p-menuitem-link > .p-submenu-icon {
        transform: rotate(-180deg);
    }

    .p-contextmenu[`).concat(x,`] .p-submenu-icon:before {
        content: "\\e930";
    }
}
`);L.current.innerHTML=N}},Vn=function(){L.current=an.removeInlineStyle(L.current)},Tn=function(){h(!1)},pe=function(){h(!1)},me=function(x){x.stopPropagation(),x.preventDefault(),K.current=x,s?b(!0):(p(!0),r.onShow&&r.onShow(K.current))},ge=function(x){K.current=x,p(!1),b(!1),r.onHide&&r.onHide(K.current)},$e=function(){an.addStyles(z.current,{position:"absolute"}),r.autoZIndex&&Ho.set("menu",z.current,t&&t.autoZIndex||tt.autoZIndex,r.baseZIndex||t&&t.zIndex.menu||tt.zIndex.menu),Re(K.current),S&&r.breakpoint&&(z.current.setAttribute(S,""),bn())},ke=function(){Ce()},kn=function(){je(),Ho.clear(z.current)},De=function(){Ho.clear(z.current),Vn()},Re=function(x){if(x){var N=x.pageX+1,D=x.pageY+1,F=z.current.offsetParent?z.current.offsetWidth:an.getHiddenElementOuterWidth(z.current),T=z.current.offsetParent?z.current.offsetHeight:an.getHiddenElementOuterHeight(z.current),I=an.getViewport();N+F-document.body.scrollLeft>I.width&&(N-=F),D+T-document.body.scrollTop>I.height&&(D-=T),N<document.body.scrollLeft&&(N=document.body.scrollLeft),D<document.body.scrollTop&&(D=document.body.scrollTop),z.current.style.left=N+"px",z.current.style.top=D+"px"}},Le=function(x){h(!0),ge(x),x.stopPropagation()},Ee=function(x){return z&&z.current&&!(z.current.isSameNode(x.target)||z.current.contains(x.target))},Ce=function(){An(),U()},je=function(){Un(),Q()};Dl(function(){var _=o5();!a&&l(_),r.global&&dn(),r.breakpoint&&!S&&E(_)}),or(function(){r.global&&dn()},[r.global]),or(function(){return S&&z.current&&(z.current.setAttribute(S,""),bn()),function(){Vn()}},[S,r.breakpoint]),or(function(){s?(p(!1),b(!1),h(!0)):!w&&!s&&g&&me(K.current)},[w]),Ii(function(){Ho.clear(z.current)}),j.useImperativeHandle(e,function(){return{props:r,show:me,hide:ge,getElement:function(){return z.current}}});var Ke=function(){var x=ve({id:r.id,className:pt(r.className,B("root",{context:t})),style:r.style,onClick:function(F){return Tn()},onMouseEnter:function(F){return pe()}},sa.getOtherProps(r),M("root")),N=ve({classNames:B("transition"),in:s,timeout:{enter:250,exit:0},options:r.transitionOptions,unmountOnExit:!0,onEnter:$e,onEntered:ke,onExit:kn,onExited:De},M("transition"));return j.createElement(Hs,yo({nodeRef:z},N),j.createElement("div",yo({ref:z},x),j.createElement(Ws,{hostName:"ContextMenu",id:a,menuProps:r,model:r.model,root:!0,resetMenu:g,onLeafClick:Le,isMobileMode:X,submenuIcon:r.submenuIcon,ptm:M,cx:B})))},C=Ke();return j.createElement(r0,{element:C,appendTo:r.appendTo})}));a0.displayName="ContextMenu";function ry(n){let[e,t]=ee.useState(null);const r=j.useRef(null),o=[{label:"Open file",icon:"pi pi-file",command:()=>{V5(".vcd").then(i=>t(Fw(i)))}},{label:"Paste url",icon:"pi pi-link",disabled:!0}];return Cn.jsxs("div",{children:[Cn.jsx(a0,{model:o,ref:r,breakpoint:"767px"}),Cn.jsx("div",{onContextMenu:i=>r.current.show(i),children:Cn.jsx(gm,{data:e,top:10,left:10,height:window.innerHeight-20,width:window.innerWidth-20})})]})}const oy=`:root {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --surface-a:#ffffff;
  --surface-b:#efefef;
  --surface-c:#e9ecef;
  --surface-d:#dee2e6;
  --surface-e:#ffffff;
  --surface-f:#ffffff;
  --text-color:#212529;
  --text-color-secondary:#6c757d;
  --primary-color:#007bff;
  --primary-color-text:#ffffff;
  --surface-0: #ffffff;
  --surface-50: #f9fafb;
  --surface-100: #f8f9fa;
  --surface-200: #e9ecef;
  --surface-300: #dee2e6;
  --surface-400: #ced4da;
  --surface-500: #adb5bd;
  --surface-600: #6c757d;
  --surface-700: #495057;
  --surface-800: #343a40;
  --surface-900: #212529;
  --gray-50: #f9fafb;
  --gray-100: #f8f9fa;
  --gray-200: #e9ecef;
  --gray-300: #dee2e6;
  --gray-400: #ced4da;
  --gray-500: #adb5bd;
  --gray-600: #6c757d;
  --gray-700: #495057;
  --gray-800: #343a40;
  --gray-900: #212529;
  --content-padding:1.25rem;
  --inline-spacing:0.5rem;
  --border-radius:4px;
  --surface-ground:#efefef;
  --surface-section:#ffffff;
  --surface-card:#ffffff;
  --surface-overlay:#ffffff;
  --surface-border:#dee2e6;
  --surface-hover:#e9ecef;
  --focus-ring: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  --maskbg: rgba(0, 0, 0, 0.4);
  --highlight-bg: #007bff;
  --highlight-text-color: #ffffff;
  color-scheme: light;
}

:root {
  --blue-50:#f3f8ff;
  --blue-100:#c5dcff;
  --blue-200:#97c1fe;
  --blue-300:#69a5fe;
  --blue-400:#3b8afd;
  --blue-500:#0d6efd;
  --blue-600:#0b5ed7;
  --blue-700:#094db1;
  --blue-800:#073d8b;
  --blue-900:#052c65;
  --green-50:#f4f9f6;
  --green-100:#c8e2d6;
  --green-200:#9ccbb5;
  --green-300:#70b595;
  --green-400:#459e74;
  --green-500:#198754;
  --green-600:#157347;
  --green-700:#125f3b;
  --green-800:#0e4a2e;
  --green-900:#0a3622;
  --yellow-50:#fffcf3;
  --yellow-100:#fff0c3;
  --yellow-200:#ffe494;
  --yellow-300:#ffd965;
  --yellow-400:#ffcd36;
  --yellow-500:#ffc107;
  --yellow-600:#d9a406;
  --yellow-700:#b38705;
  --yellow-800:#8c6a04;
  --yellow-900:#664d03;
  --cyan-50:#f3fcfe;
  --cyan-100:#c5f2fb;
  --cyan-200:#97e8f9;
  --cyan-300:#69def6;
  --cyan-400:#3bd4f3;
  --cyan-500:#0dcaf0;
  --cyan-600:#0baccc;
  --cyan-700:#098da8;
  --cyan-800:#076f84;
  --cyan-900:#055160;
  --pink-50:#fdf5f9;
  --pink-100:#f5cee1;
  --pink-200:#eda7ca;
  --pink-300:#e681b3;
  --pink-400:#de5a9b;
  --pink-500:#d63384;
  --pink-600:#b62b70;
  --pink-700:#96245c;
  --pink-800:#761c49;
  --pink-900:#561435;
  --indigo-50:#f7f3fe;
  --indigo-100:#dac6fc;
  --indigo-200:#bd98f9;
  --indigo-300:#a06bf7;
  --indigo-400:#833df4;
  --indigo-500:#6610f2;
  --indigo-600:#570ece;
  --indigo-700:#470ba9;
  --indigo-800:#380985;
  --indigo-900:#290661;
  --teal-50:#f4fcfa;
  --teal-100:#c9f2e6;
  --teal-200:#9fe8d2;
  --teal-300:#75debf;
  --teal-400:#4ad3ab;
  --teal-500:#20c997;
  --teal-600:#1bab80;
  --teal-700:#168d6a;
  --teal-800:#126f53;
  --teal-900:#0d503c;
  --orange-50:#fff9f3;
  --orange-100:#ffe0c7;
  --orange-200:#fec89a;
  --orange-300:#feaf6d;
  --orange-400:#fd9741;
  --orange-500:#fd7e14;
  --orange-600:#d76b11;
  --orange-700:#b1580e;
  --orange-800:#8b450b;
  --orange-900:#653208;
  --bluegray-50:#f8f9fb;
  --bluegray-100:#e0e4ea;
  --bluegray-200:#c7ced9;
  --bluegray-300:#aeb9c8;
  --bluegray-400:#95a3b8;
  --bluegray-500:#7c8ea7;
  --bluegray-600:#69798e;
  --bluegray-700:#576375;
  --bluegray-800:#444e5c;
  --bluegray-900:#323943;
  --purple-50:#f8f6fc;
  --purple-100:#dcd2f0;
  --purple-200:#c1aee4;
  --purple-300:#a68ad9;
  --purple-400:#8a66cd;
  --purple-500:#6f42c1;
  --purple-600:#5e38a4;
  --purple-700:#4e2e87;
  --purple-800:#3d246a;
  --purple-900:#2c1a4d;
  --red-50:#fdf5f6;
  --red-100:#f7cfd2;
  --red-200:#f0a8af;
  --red-300:#e9828c;
  --red-400:#e35b68;
  --red-500:#dc3545;
  --red-600:#bb2d3b;
  --red-700:#9a2530;
  --red-800:#791d26;
  --red-900:#58151c;
  --primary-50:#f2f8ff;
  --primary-100:#c2dfff;
  --primary-200:#91c6ff;
  --primary-300:#61adff;
  --primary-400:#3094ff;
  --primary-500:#007bff;
  --primary-600:#0069d9;
  --primary-700:#0056b3;
  --primary-800:#00448c;
  --primary-900:#003166;
}

.p-editor-container .p-editor-toolbar {
  background: #efefef;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
}
.p-editor-container .p-editor-toolbar.ql-snow {
  border: 1px solid #dee2e6;
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-stroke {
  stroke: #6c757d;
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-fill {
  fill: #6c757d;
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label {
  border: 0 none;
  color: #6c757d;
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover {
  color: #212529;
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-stroke {
  stroke: #212529;
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-fill {
  fill: #212529;
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
  color: #212529;
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
  stroke: #212529;
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
  fill: #212529;
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: none;
  border-radius: 4px;
  padding: 0.5rem 0;
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item {
  color: #212529;
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item:hover {
  color: #212529;
  background: #e9ecef;
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded:not(.ql-icon-picker) .ql-picker-item {
  padding: 0.5rem 1.5rem;
}
.p-editor-container .p-editor-content {
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
}
.p-editor-container .p-editor-content.ql-snow {
  border: 1px solid #dee2e6;
}
.p-editor-container .p-editor-content .ql-editor {
  background: #ffffff;
  color: #495057;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
}
.p-editor-container .ql-snow.ql-toolbar button:hover,
.p-editor-container .ql-snow.ql-toolbar button:focus {
  color: #212529;
}
.p-editor-container .ql-snow.ql-toolbar button:hover .ql-stroke,
.p-editor-container .ql-snow.ql-toolbar button:focus .ql-stroke {
  stroke: #212529;
}
.p-editor-container .ql-snow.ql-toolbar button:hover .ql-fill,
.p-editor-container .ql-snow.ql-toolbar button:focus .ql-fill {
  fill: #212529;
}
.p-editor-container .ql-snow.ql-toolbar button.ql-active,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected {
  color: #007bff;
}
.p-editor-container .ql-snow.ql-toolbar button.ql-active .ql-stroke,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke {
  stroke: #007bff;
}
.p-editor-container .ql-snow.ql-toolbar button.ql-active .ql-fill,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill {
  fill: #007bff;
}
.p-editor-container .ql-snow.ql-toolbar button.ql-active .ql-picker-label,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-picker-label,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-picker-label {
  color: #007bff;
}

@layer primereact {
  * {
    box-sizing: border-box;
  }

  .p-component {
    font-family: var(--font-family);
    font-feature-settings: var(--font-feature-settings, normal);
    font-size: 1rem;
    font-weight: normal;
  }

  .p-component-overlay {
    background-color: rgba(0, 0, 0, 0.4);
    transition-duration: 0.15s;
  }

  .p-disabled, .p-component:disabled {
    opacity: 0.65;
  }

  .p-error {
    color: #dc3545;
  }

  .p-text-secondary {
    color: #6c757d;
  }

  .pi {
    font-size: 1rem;
  }

  .p-icon {
    width: 1rem;
    height: 1rem;
  }

  .p-link {
    font-family: var(--font-family);
    font-feature-settings: var(--font-feature-settings, normal);
    font-size: 1rem;
    border-radius: 4px;
  }
  .p-link:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }

  .p-component-overlay-enter {
    animation: p-component-overlay-enter-animation 150ms forwards;
  }

  .p-component-overlay-leave {
    animation: p-component-overlay-leave-animation 150ms forwards;
  }

  @keyframes p-component-overlay-enter-animation {
    from {
      background-color: transparent;
    }
    to {
      background-color: var(--maskbg);
    }
  }
  @keyframes p-component-overlay-leave-animation {
    from {
      background-color: var(--maskbg);
    }
    to {
      background-color: transparent;
    }
  }

  .p-autocomplete .p-autocomplete-loader {
    right: 0.75rem;
  }
  .p-autocomplete.p-autocomplete-dd .p-autocomplete-loader {
    right: 3.107rem;
  }
  .p-autocomplete .p-autocomplete-multiple-container {
    padding: 0.25rem 0.75rem;
    gap: 0.5rem;
  }
  .p-autocomplete .p-autocomplete-multiple-container:not(.p-disabled):hover {
    border-color: #ced4da;
  }
  .p-autocomplete .p-autocomplete-multiple-container:not(.p-disabled).p-focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
    border-color: #007bff;
  }
  .p-autocomplete .p-autocomplete-multiple-container .p-autocomplete-input-token {
    padding: 0.25rem 0;
  }
  .p-autocomplete .p-autocomplete-multiple-container .p-autocomplete-input-token input {
    font-family: var(--font-family);
    font-feature-settings: var(--font-feature-settings, normal);
    font-size: 1rem;
    color: #212529;
    padding: 0;
    margin: 0;
  }
  .p-autocomplete .p-autocomplete-multiple-container .p-autocomplete-token {
    padding: 0.25rem 0.75rem;
    margin-right: 0.5rem;
    background: #007bff;
    color: #ffffff;
    border-radius: 4px;
  }
  .p-autocomplete .p-autocomplete-multiple-container .p-autocomplete-token .p-autocomplete-token-icon {
    margin-left: 0.5rem;
  }
  .p-autocomplete.p-invalid.p-component > .p-inputtext {
    border-color: #dc3545;
  }

  .p-autocomplete-panel {
    background: #ffffff;
    color: #212529;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    box-shadow: none;
  }
  .p-autocomplete-panel .p-autocomplete-items {
    padding: 0.5rem 0;
  }
  .p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item {
    margin: 0;
    padding: 0.5rem 1.5rem;
    border: 0 none;
    color: #212529;
    background: transparent;
    transition: box-shadow 0.15s;
    border-radius: 0;
  }
  .p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item:hover {
    color: #212529;
    background: #e9ecef;
  }
  .p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item.p-highlight {
    color: #ffffff;
    background: #007bff;
  }
  .p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item-group {
    margin: 0;
    padding: 0.75rem 1rem;
    color: #212529;
    background: #ffffff;
    font-weight: 600;
  }

  .p-calendar.p-invalid.p-component > .p-inputtext {
    border-color: #dc3545;
  }

  .p-datepicker {
    padding: 0;
    background: #ffffff;
    color: #212529;
    border: 1px solid #ced4da;
    border-radius: 4px;
  }
  .p-datepicker:not(.p-datepicker-inline) {
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.15);
    box-shadow: none;
  }
  .p-datepicker:not(.p-datepicker-inline) .p-datepicker-header {
    background: #efefef;
  }
  .p-datepicker .p-datepicker-header {
    padding: 0.5rem;
    color: #212529;
    background: #ffffff;
    font-weight: 600;
    margin: 0;
    border-bottom: 1px solid #dee2e6;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }
  .p-datepicker .p-datepicker-header .p-datepicker-prev,
.p-datepicker .p-datepicker-header .p-datepicker-next {
    width: 2rem;
    height: 2rem;
    color: #6c757d;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: box-shadow 0.15s;
  }
  .p-datepicker .p-datepicker-header .p-datepicker-prev:enabled:hover,
.p-datepicker .p-datepicker-header .p-datepicker-next:enabled:hover {
    color: #495057;
    border-color: transparent;
    background: transparent;
  }
  .p-datepicker .p-datepicker-header .p-datepicker-prev:focus-visible,
.p-datepicker .p-datepicker-header .p-datepicker-next:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }
  .p-datepicker .p-datepicker-header .p-datepicker-title {
    line-height: 2rem;
  }
  .p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-year,
.p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-month {
    color: #212529;
    transition: box-shadow 0.15s;
    font-weight: 600;
    padding: 0.5rem;
  }
  .p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-year:enabled:hover,
.p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-month:enabled:hover {
    color: #007bff;
  }
  .p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-month {
    margin-right: 0.5rem;
  }
  .p-datepicker table {
    font-size: 1rem;
    margin: 0.5rem 0;
  }
  .p-datepicker table th {
    padding: 0.5rem;
  }
  .p-datepicker table th > span {
    width: 2.5rem;
    height: 2.5rem;
  }
  .p-datepicker table td {
    padding: 0.5rem;
  }
  .p-datepicker table td > span {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 4px;
    transition: box-shadow 0.15s;
    border: 1px solid transparent;
  }
  .p-datepicker table td > span.p-highlight {
    color: #ffffff;
    background: #007bff;
  }
  .p-datepicker table td > span:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }
  .p-datepicker table td.p-datepicker-today > span {
    background: #ced4da;
    color: #212529;
    border-color: transparent;
  }
  .p-datepicker table td.p-datepicker-today > span.p-highlight {
    color: #ffffff;
    background: #007bff;
  }
  .p-datepicker .p-datepicker-buttonbar {
    padding: 1rem 0;
    border-top: 1px solid #dee2e6;
  }
  .p-datepicker .p-datepicker-buttonbar .p-button {
    width: auto;
  }
  .p-datepicker .p-timepicker {
    border-top: 1px solid #dee2e6;
    padding: 0.5rem;
  }
  .p-datepicker .p-timepicker button {
    width: 2rem;
    height: 2rem;
    color: #6c757d;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: box-shadow 0.15s;
  }
  .p-datepicker .p-timepicker button:enabled:hover {
    color: #495057;
    border-color: transparent;
    background: transparent;
  }
  .p-datepicker .p-timepicker button:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }
  .p-datepicker .p-timepicker button:last-child {
    margin-top: 0.2em;
  }
  .p-datepicker .p-timepicker span {
    font-size: 1.25rem;
  }
  .p-datepicker .p-timepicker > div {
    padding: 0 0.5rem;
  }
  .p-datepicker.p-datepicker-timeonly .p-timepicker {
    border-top: 0 none;
  }
  .p-datepicker .p-monthpicker {
    margin: 0.5rem 0;
  }
  .p-datepicker .p-monthpicker .p-monthpicker-month {
    padding: 0.5rem;
    transition: box-shadow 0.15s;
    border-radius: 4px;
  }
  .p-datepicker .p-monthpicker .p-monthpicker-month.p-highlight {
    color: #ffffff;
    background: #007bff;
  }
  .p-datepicker .p-yearpicker {
    margin: 0.5rem 0;
  }
  .p-datepicker .p-yearpicker .p-yearpicker-year {
    padding: 0.5rem;
    transition: box-shadow 0.15s;
    border-radius: 4px;
  }
  .p-datepicker .p-yearpicker .p-yearpicker-year.p-highlight {
    color: #ffffff;
    background: #007bff;
  }
  .p-datepicker.p-datepicker-multiple-month .p-datepicker-group {
    border-left: 1px solid #dee2e6;
    padding-right: 0;
    padding-left: 0;
    padding-top: 0;
    padding-bottom: 0;
  }
  .p-datepicker.p-datepicker-multiple-month .p-datepicker-group:first-child {
    padding-left: 0;
  }
  .p-datepicker.p-datepicker-multiple-month .p-datepicker-group:last-child {
    padding-right: 0;
    border-left: 0 none;
  }
  .p-datepicker:not(.p-disabled) table td span:not(.p-highlight):not(.p-disabled):hover {
    background: #e9ecef;
  }
  .p-datepicker:not(.p-disabled) table td span:not(.p-highlight):not(.p-disabled):focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }
  .p-datepicker:not(.p-disabled) .p-monthpicker .p-monthpicker-month:not(.p-disabled):not(.p-highlight):hover {
    background: #e9ecef;
  }
  .p-datepicker:not(.p-disabled) .p-monthpicker .p-monthpicker-month:not(.p-disabled):focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }
  .p-datepicker:not(.p-disabled) .p-yearpicker .p-yearpicker-year:not(.p-disabled):not(.p-highlight):hover {
    background: #e9ecef;
  }
  .p-datepicker:not(.p-disabled) .p-yearpicker .p-yearpicker-year:not(.p-disabled):focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }

  @media screen and (max-width: 769px) {
    .p-datepicker table th, .p-datepicker table td {
      padding: 0;
    }
  }
  .p-cascadeselect {
    background: #ffffff;
    border: 1px solid #ced4da;
    transition: background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
    border-radius: 4px;
  }
  .p-cascadeselect:not(.p-disabled):hover {
    border-color: #ced4da;
  }
  .p-cascadeselect:not(.p-disabled).p-focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
    border-color: #007bff;
  }
  .p-cascadeselect .p-cascadeselect-label {
    background: transparent;
    border: 0 none;
    padding: 0.5rem 0.75rem;
  }
  .p-cascadeselect .p-cascadeselect-label.p-placeholder {
    color: #6c757d;
  }
  .p-cascadeselect .p-cascadeselect-label:enabled:focus {
    outline: 0 none;
    box-shadow: none;
  }
  .p-cascadeselect .p-cascadeselect-trigger {
    background: transparent;
    color: #495057;
    width: 2.357rem;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .p-cascadeselect.p-invalid.p-component {
    border-color: #dc3545;
  }

  .p-cascadeselect-panel {
    background: #ffffff;
    color: #212529;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    box-shadow: none;
  }
  .p-cascadeselect-panel .p-cascadeselect-items {
    padding: 0.5rem 0;
  }
  .p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item {
    margin: 0;
    border: 0 none;
    color: #212529;
    background: transparent;
    transition: box-shadow 0.15s;
    border-radius: 0;
  }
  .p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item .p-cascadeselect-item-content {
    padding: 0.5rem 1.5rem;
  }
  .p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item .p-cascadeselect-item-content:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem rgba(38, 143, 255, 0.5);
  }
  .p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item.p-highlight {
    color: #ffffff;
    background: #007bff;
  }
  .p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item:not(.p-highlight):not(.p-disabled):hover {
    color: #212529;
    background: #e9ecef;
  }
  .p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item .p-cascadeselect-group-icon {
    font-size: 0.875rem;
  }
  .p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item .p-cascadeselect-group-icon.p-icon {
    width: 0.875rem;
    height: 0.875rem;
  }

  .p-input-filled .p-cascadeselect {
    background: #efefef;
  }
  .p-input-filled .p-cascadeselect:not(.p-disabled):hover {
    background-color: #efefef;
  }
  .p-input-filled .p-cascadeselect:not(.p-disabled).p-focus {
    background-color: #efefef;
  }

  .p-checkbox {
    width: 20px;
    height: 20px;
  }
  .p-checkbox .p-checkbox-box {
    border: 2px solid #ced4da;
    background: #ffffff;
    width: 20px;
    height: 20px;
    color: #212529;
    border-radius: 4px;
    transition: background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
  }
  .p-checkbox .p-checkbox-box .p-checkbox-icon {
    transition-duration: 0.15s;
    color: #ffffff;
    font-size: 14px;
  }
  .p-checkbox .p-checkbox-box .p-checkbox-icon.p-icon {
    width: 14px;
    height: 14px;
  }
  .p-checkbox .p-checkbox-box.p-highlight {
    border-color: #007bff;
    background: #007bff;
  }
  .p-checkbox .p-checkbox-box.p-highlight:not(.p-disabled):hover {
    border-color: #0062cc;
    background: #0062cc;
    color: #ffffff;
  }
  .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box:hover {
    border-color: #ced4da;
  }
  .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
    border-color: #007bff;
  }
  .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-highlight:hover {
    border-color: #0062cc;
    background: #0062cc;
    color: #ffffff;
  }
  .p-checkbox.p-invalid > .p-checkbox-box {
    border-color: #dc3545;
  }

  .p-input-filled .p-checkbox .p-checkbox-box {
    background-color: #efefef;
  }
  .p-input-filled .p-checkbox .p-checkbox-box.p-highlight {
    background: #007bff;
  }
  .p-input-filled .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box:hover {
    background-color: #efefef;
  }
  .p-input-filled .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-highlight:hover {
    background: #0062cc;
  }

  .p-highlight .p-checkbox .p-checkbox-box {
    border-color: #ffffff;
  }

  .p-chips .p-chips-multiple-container {
    padding: 0.25rem 0.75rem;
    gap: 0.5rem;
  }
  .p-chips .p-chips-multiple-container:not(.p-disabled):hover {
    border-color: #ced4da;
  }
  .p-chips .p-chips-multiple-container:not(.p-disabled).p-focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
    border-color: #007bff;
  }
  .p-chips .p-chips-multiple-container .p-chips-token {
    padding: 0.25rem 0.75rem;
    margin-right: 0.5rem;
    background: #007bff;
    color: #212529;
    border-radius: 16px;
  }
  .p-chips .p-chips-multiple-container .p-chips-token .p-chips-token-icon {
    margin-left: 0.5rem;
  }
  .p-chips .p-chips-multiple-container .p-chips-input-token {
    padding: 0.25rem 0;
  }
  .p-chips .p-chips-multiple-container .p-chips-input-token input {
    font-family: var(--font-family);
    font-feature-settings: var(--font-feature-settings, normal);
    font-size: 1rem;
    color: #212529;
    padding: 0;
    margin: 0;
  }
  .p-chips.p-invalid.p-component > .p-inputtext {
    border-color: #dc3545;
  }

  .p-colorpicker-preview {
    width: 2rem;
    height: 2rem;
  }

  .p-colorpicker-panel {
    background: #212529;
    border: 1px solid #212529;
  }
  .p-colorpicker-panel .p-colorpicker-color-handle,
.p-colorpicker-panel .p-colorpicker-hue-handle {
    border-color: #ffffff;
  }

  .p-colorpicker-overlay-panel {
    box-shadow: none;
  }

  .p-dropdown {
    background: #ffffff;
    border: 1px solid #ced4da;
    transition: background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
    border-radius: 4px;
  }
  .p-dropdown:not(.p-disabled):hover {
    border-color: #ced4da;
  }
  .p-dropdown:not(.p-disabled).p-focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
    border-color: #007bff;
  }
  .p-dropdown.p-dropdown-clearable .p-dropdown-label {
    padding-right: 1.75rem;
  }
  .p-dropdown .p-dropdown-label {
    background: transparent;
    border: 0 none;
  }
  .p-dropdown .p-dropdown-label.p-placeholder {
    color: #6c757d;
  }
  .p-dropdown .p-dropdown-label:enabled:focus {
    outline: 0 none;
    box-shadow: none;
  }
  .p-dropdown .p-dropdown-trigger {
    background: transparent;
    color: #495057;
    width: 2.357rem;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .p-dropdown .p-dropdown-clear-icon {
    color: #495057;
    right: 2.357rem;
  }
  .p-dropdown.p-invalid.p-component {
    border-color: #dc3545;
  }

  .p-dropdown-panel {
    background: #ffffff;
    color: #212529;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    box-shadow: none;
  }
  .p-dropdown-panel .p-dropdown-header {
    padding: 0.75rem 1.5rem;
    border-bottom: 1px solid #dee2e6;
    color: #212529;
    background: #efefef;
    margin: 0;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }
  .p-dropdown-panel .p-dropdown-header .p-dropdown-filter {
    padding-right: 1.75rem;
    margin-right: -1.75rem;
  }
  .p-dropdown-panel .p-dropdown-header .p-dropdown-filter-icon {
    right: 0.75rem;
    color: #495057;
  }
  .p-dropdown-panel .p-dropdown-header .p-dropdown-clearable-filter .p-dropdown-filter {
    padding-right: 3.5rem;
    margin-right: -3.5rem;
  }
  .p-dropdown-panel .p-dropdown-header .p-dropdown-clearable-filter .p-dropdown-filter-clear-icon {
    right: 2.5rem;
  }
  .p-dropdown-panel .p-dropdown-items {
    padding: 0.5rem 0;
  }
  .p-dropdown-panel .p-dropdown-items .p-dropdown-item {
    margin: 0;
    padding: 0.5rem 1.5rem;
    border: 0 none;
    color: #212529;
    background: transparent;
    transition: box-shadow 0.15s;
    border-radius: 0;
  }
  .p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight {
    color: #ffffff;
    background: #007bff;
  }
  .p-dropdown-panel .p-dropdown-items .p-dropdown-item:not(.p-highlight):not(.p-disabled):hover {
    color: #212529;
    background: #e9ecef;
  }
  .p-dropdown-panel .p-dropdown-items .p-dropdown-item-group {
    margin: 0;
    padding: 0.75rem 1rem;
    color: #212529;
    background: #ffffff;
    font-weight: 600;
  }
  .p-dropdown-panel .p-dropdown-items .p-dropdown-empty-message {
    padding: 0.5rem 1.5rem;
    color: #212529;
    background: transparent;
  }

  .p-input-filled .p-dropdown {
    background: #efefef;
  }
  .p-input-filled .p-dropdown:not(.p-disabled):hover {
    background-color: #efefef;
  }
  .p-input-filled .p-dropdown:not(.p-disabled).p-focus {
    background-color: #efefef;
  }
  .p-input-filled .p-dropdown:not(.p-disabled).p-focus .p-inputtext {
    background-color: transparent;
  }

  .p-inputgroup-addon {
    background: #e9ecef;
    color: #495057;
    border-top: 1px solid #ced4da;
    border-left: 1px solid #ced4da;
    border-bottom: 1px solid #ced4da;
    padding: 0.5rem 0.75rem;
    min-width: 2.357rem;
  }
  .p-inputgroup-addon:last-child {
    border-right: 1px solid #ced4da;
  }

  .p-inputgroup > .p-component,
.p-inputgroup > .p-inputwrapper > .p-inputtext,
.p-inputgroup > .p-float-label > .p-component {
    border-radius: 0;
    margin: 0;
  }
  .p-inputgroup > .p-component + .p-inputgroup-addon,
.p-inputgroup > .p-inputwrapper > .p-inputtext + .p-inputgroup-addon,
.p-inputgroup > .p-float-label > .p-component + .p-inputgroup-addon {
    border-left: 0 none;
  }
  .p-inputgroup > .p-component:focus,
.p-inputgroup > .p-inputwrapper > .p-inputtext:focus,
.p-inputgroup > .p-float-label > .p-component:focus {
    z-index: 1;
  }
  .p-inputgroup > .p-component:focus ~ label,
.p-inputgroup > .p-inputwrapper > .p-inputtext:focus ~ label,
.p-inputgroup > .p-float-label > .p-component:focus ~ label {
    z-index: 1;
  }

  .p-inputgroup-addon:first-child,
.p-inputgroup button:first-child,
.p-inputgroup input:first-child,
.p-inputgroup > .p-inputwrapper:first-child,
.p-inputgroup > .p-inputwrapper:first-child > .p-inputtext {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .p-inputgroup .p-float-label:first-child input {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .p-inputgroup-addon:last-child,
.p-inputgroup button:last-child,
.p-inputgroup input:last-child,
.p-inputgroup > .p-inputwrapper:last-child,
.p-inputgroup > .p-inputwrapper:last-child > .p-inputtext {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  .p-inputgroup .p-float-label:last-child input {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  .p-fluid .p-inputgroup .p-button {
    width: auto;
  }
  .p-fluid .p-inputgroup .p-button.p-button-icon-only {
    width: 2.357rem;
  }

  .p-inputnumber.p-invalid.p-component > .p-inputtext {
    border-color: #dc3545;
  }

  .p-inputswitch {
    width: 3rem;
    height: 1.75rem;
  }
  .p-inputswitch .p-inputswitch-slider {
    background: #ced4da;
    transition: background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
    border-radius: 4px;
  }
  .p-inputswitch .p-inputswitch-slider:before {
    background: #ffffff;
    width: 1.25rem;
    height: 1.25rem;
    left: 0.25rem;
    margin-top: -0.625rem;
    border-radius: 4px;
    transition-duration: 0.15s;
  }
  .p-inputswitch.p-inputswitch-checked .p-inputswitch-slider:before {
    transform: translateX(1.25rem);
  }
  .p-inputswitch.p-focus .p-inputswitch-slider {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }
  .p-inputswitch:not(.p-disabled):hover .p-inputswitch-slider {
    background: #ced4da;
  }
  .p-inputswitch.p-inputswitch-checked .p-inputswitch-slider {
    background: #007bff;
  }
  .p-inputswitch.p-inputswitch-checked .p-inputswitch-slider:before {
    background: #ffffff;
  }
  .p-inputswitch.p-inputswitch-checked:not(.p-disabled):hover .p-inputswitch-slider {
    background: #007bff;
  }
  .p-inputswitch.p-invalid .p-inputswitch-slider {
    border-color: #dc3545;
  }

  .p-inputtext {
    font-family: var(--font-family);
    font-feature-settings: var(--font-feature-settings, normal);
    font-size: 1rem;
    color: #495057;
    background: #ffffff;
    padding: 0.5rem 0.75rem;
    border: 1px solid #ced4da;
    transition: background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
    appearance: none;
    border-radius: 4px;
  }
  .p-inputtext:enabled:hover {
    border-color: #ced4da;
  }
  .p-inputtext:enabled:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
    border-color: #007bff;
  }
  .p-inputtext.p-invalid.p-component {
    border-color: #dc3545;
  }
  .p-inputtext.p-inputtext-sm {
    font-size: 0.875rem;
    padding: 0.4375rem 0.65625rem;
  }
  .p-inputtext.p-inputtext-lg {
    font-size: 1.25rem;
    padding: 0.625rem 0.9375rem;
  }

  .p-float-label > label {
    left: 0.75rem;
    color: #6c757d;
    transition-duration: 0.15s;
  }

  .p-float-label > label.p-error {
    color: #dc3545;
  }

  .p-input-icon-left > i:first-of-type,
.p-input-icon-left > svg:first-of-type,
.p-input-icon-left > .p-input-prefix {
    left: 0.75rem;
    color: #495057;
  }

  .p-input-icon-left > .p-inputtext {
    padding-left: 2.5rem;
  }

  .p-input-icon-left.p-float-label > label {
    left: 2.5rem;
  }

  .p-input-icon-right > i:last-of-type,
.p-input-icon-right > svg:last-of-type,
.p-input-icon-right > .p-input-suffix {
    right: 0.75rem;
    color: #495057;
  }

  .p-input-icon-right > .p-inputtext {
    padding-right: 2.5rem;
  }

  ::-webkit-input-placeholder {
    color: #6c757d;
  }

  :-moz-placeholder {
    color: #6c757d;
  }

  ::-moz-placeholder {
    color: #6c757d;
  }

  :-ms-input-placeholder {
    color: #6c757d;
  }

  .p-input-filled .p-inputtext {
    background-color: #efefef;
  }
  .p-input-filled .p-inputtext:enabled:hover {
    background-color: #efefef;
  }
  .p-input-filled .p-inputtext:enabled:focus {
    background-color: #efefef;
  }

  .p-inputtext-sm .p-inputtext {
    font-size: 0.875rem;
    padding: 0.4375rem 0.65625rem;
  }

  .p-inputtext-lg .p-inputtext {
    font-size: 1.25rem;
    padding: 0.625rem 0.9375rem;
  }

  .p-listbox {
    background: #ffffff;
    color: #212529;
    border: 1px solid #ced4da;
    border-radius: 4px;
  }
  .p-listbox .p-listbox-header {
    padding: 0.75rem 1.5rem;
    border-bottom: 1px solid #dee2e6;
    color: #212529;
    background: #efefef;
    margin: 0;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }
  .p-listbox .p-listbox-header .p-listbox-filter {
    padding-right: 1.75rem;
  }
  .p-listbox .p-listbox-header .p-listbox-filter-icon {
    right: 0.75rem;
    color: #495057;
  }
  .p-listbox .p-listbox-list {
    padding: 0.5rem 0;
  }
  .p-listbox .p-listbox-list .p-listbox-item {
    margin: 0;
    padding: 0.5rem 1.5rem;
    border: 0 none;
    color: #212529;
    transition: box-shadow 0.15s;
    border-radius: 0;
  }
  .p-listbox .p-listbox-list .p-listbox-item.p-highlight {
    color: #ffffff;
    background: #007bff;
  }
  .p-listbox .p-listbox-list .p-listbox-item:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem rgba(38, 143, 255, 0.5);
  }
  .p-listbox .p-listbox-list .p-listbox-item-group {
    margin: 0;
    padding: 0.75rem 1rem;
    color: #212529;
    background: #ffffff;
    font-weight: 600;
  }
  .p-listbox .p-listbox-list .p-listbox-empty-message {
    padding: 0.5rem 1.5rem;
    color: #212529;
    background: transparent;
  }
  .p-listbox:not(.p-disabled) .p-listbox-item:not(.p-highlight):not(.p-disabled):hover {
    color: #212529;
    background: #e9ecef;
  }
  .p-listbox.p-invalid {
    border-color: #dc3545;
  }

  .p-mention-panel {
    background: #ffffff;
    color: #212529;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    box-shadow: none;
  }
  .p-mention-panel .p-mention-items {
    padding: 0.5rem 0;
  }
  .p-mention-panel .p-mention-items .p-mention-item {
    margin: 0;
    padding: 0.5rem 1.5rem;
    border: 0 none;
    color: #212529;
    background: transparent;
    transition: box-shadow 0.15s;
    border-radius: 0;
  }
  .p-mention-panel .p-mention-items .p-mention-item:hover {
    color: #212529;
    background: #e9ecef;
  }
  .p-mention-panel .p-mention-items .p-mention-item.p-highlight {
    color: #ffffff;
    background: #007bff;
  }

  .p-multiselect {
    background: #ffffff;
    border: 1px solid #ced4da;
    transition: background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
    border-radius: 4px;
  }
  .p-multiselect:not(.p-disabled):hover {
    border-color: #ced4da;
  }
  .p-multiselect:not(.p-disabled).p-focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
    border-color: #007bff;
  }
  .p-multiselect.p-multiselect-clearable .p-multiselect-label {
    padding-right: 1.75rem;
  }
  .p-multiselect .p-multiselect-label {
    padding: 0.5rem 0.75rem;
    transition: background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
  }
  .p-multiselect .p-multiselect-label.p-placeholder {
    color: #6c757d;
  }
  .p-multiselect.p-multiselect-chip .p-multiselect-token {
    padding: 0.25rem 0.75rem;
    margin-right: 0.5rem;
    background: #dee2e6;
    color: #212529;
    border-radius: 16px;
  }
  .p-multiselect.p-multiselect-chip .p-multiselect-token .p-multiselect-token-icon {
    margin-left: 0.5rem;
  }
  .p-multiselect .p-multiselect-trigger {
    background: transparent;
    color: #495057;
    width: 2.357rem;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .p-multiselect .p-multiselect-clear-icon {
    color: #495057;
    right: 2.357rem;
  }
  .p-multiselect.p-invalid.p-component {
    border-color: #dc3545;
  }

  .p-inputwrapper-filled.p-multiselect.p-multiselect-chip .p-multiselect-label {
    padding: 0.25rem 0.75rem;
  }
  .p-inputwrapper-filled.p-multiselect.p-multiselect-chip .p-multiselect-label.p-multiselect-items-label {
    padding: 0.5rem 0.75rem;
  }
  .p-inputwrapper-filled.p-multiselect.p-multiselect-clearable .p-multiselect-label {
    padding-right: 1.75rem;
  }

  .p-multiselect-panel {
    background: #ffffff;
    color: #212529;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    box-shadow: none;
  }
  .p-multiselect-panel .p-multiselect-header {
    padding: 0.75rem 1.5rem;
    border-bottom: 1px solid #dee2e6;
    color: #212529;
    background: #efefef;
    margin: 0;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }
  .p-multiselect-panel .p-multiselect-header .p-multiselect-filter-container {
    margin: 0 0.5rem;
  }
  .p-multiselect-panel .p-multiselect-header .p-multiselect-filter-container .p-inputtext {
    padding-right: 1.75rem;
  }
  .p-multiselect-panel .p-multiselect-header .p-multiselect-filter-container .p-multiselect-filter-icon {
    right: 0.75rem;
    color: #495057;
  }
  .p-multiselect-panel .p-multiselect-header .p-multiselect-close {
    width: 2rem;
    height: 2rem;
    color: #6c757d;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: box-shadow 0.15s;
  }
  .p-multiselect-panel .p-multiselect-header .p-multiselect-close:enabled:hover {
    color: #495057;
    border-color: transparent;
    background: transparent;
  }
  .p-multiselect-panel .p-multiselect-header .p-multiselect-close:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }
  .p-multiselect-panel .p-multiselect-items {
    padding: 0.5rem 0;
  }
  .p-multiselect-panel .p-multiselect-items .p-multiselect-item {
    margin: 0;
    padding: 0.5rem 1.5rem;
    border: 0 none;
    color: #212529;
    background: transparent;
    transition: box-shadow 0.15s;
    border-radius: 0;
  }
  .p-multiselect-panel .p-multiselect-items .p-multiselect-item.p-highlight {
    color: #ffffff;
    background: #007bff;
  }
  .p-multiselect-panel .p-multiselect-items .p-multiselect-item:not(.p-highlight):not(.p-disabled):hover {
    color: #212529;
    background: #e9ecef;
  }
  .p-multiselect-panel .p-multiselect-items .p-multiselect-item:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem rgba(38, 143, 255, 0.5);
  }
  .p-multiselect-panel .p-multiselect-items .p-multiselect-item .p-checkbox {
    margin-right: 0.5rem;
  }
  .p-multiselect-panel .p-multiselect-items .p-multiselect-item-group {
    margin: 0;
    padding: 0.75rem 1rem;
    color: #212529;
    background: #ffffff;
    font-weight: 600;
  }
  .p-multiselect-panel .p-multiselect-items .p-multiselect-empty-message {
    padding: 0.5rem 1.5rem;
    color: #212529;
    background: transparent;
  }

  .p-input-filled .p-multiselect {
    background: #efefef;
  }
  .p-input-filled .p-multiselect:not(.p-disabled):hover {
    background-color: #efefef;
  }
  .p-input-filled .p-multiselect:not(.p-disabled).p-focus {
    background-color: #efefef;
  }

  .p-password.p-invalid.p-component > .p-inputtext {
    border-color: #dc3545;
  }

  .p-password-panel {
    padding: 1.25rem;
    background: #ffffff;
    color: #212529;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: none;
    border-radius: 4px;
  }
  .p-password-panel .p-password-meter {
    margin-bottom: 0.5rem;
    background: #e9ecef;
  }
  .p-password-panel .p-password-meter .p-password-strength.weak {
    background: #dc3545;
  }
  .p-password-panel .p-password-meter .p-password-strength.medium {
    background: #ffc107;
  }
  .p-password-panel .p-password-meter .p-password-strength.strong {
    background: #28a745;
  }

  .p-radiobutton {
    width: 20px;
    height: 20px;
  }
  .p-radiobutton .p-radiobutton-box {
    border: 2px solid #ced4da;
    background: #ffffff;
    width: 20px;
    height: 20px;
    color: #212529;
    border-radius: 50%;
    transition: background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
  }
  .p-radiobutton .p-radiobutton-box:not(.p-disabled):not(.p-highlight):hover {
    border-color: #ced4da;
  }
  .p-radiobutton .p-radiobutton-box:not(.p-disabled).p-focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
    border-color: #007bff;
  }
  .p-radiobutton .p-radiobutton-box .p-radiobutton-icon {
    width: 12px;
    height: 12px;
    transition-duration: 0.15s;
    background-color: #ffffff;
  }
  .p-radiobutton .p-radiobutton-box.p-highlight {
    border-color: #007bff;
    background: #007bff;
  }
  .p-radiobutton .p-radiobutton-box.p-highlight:not(.p-disabled):hover {
    border-color: #0062cc;
    background: #0062cc;
    color: #ffffff;
  }
  .p-radiobutton.p-invalid > .p-radiobutton-box {
    border-color: #dc3545;
  }
  .p-radiobutton:focus {
    outline: 0 none;
  }

  .p-input-filled .p-radiobutton .p-radiobutton-box {
    background-color: #efefef;
  }
  .p-input-filled .p-radiobutton .p-radiobutton-box:not(.p-disabled):hover {
    background-color: #efefef;
  }
  .p-input-filled .p-radiobutton .p-radiobutton-box.p-highlight {
    background: #007bff;
  }
  .p-input-filled .p-radiobutton .p-radiobutton-box.p-highlight:not(.p-disabled):hover {
    background: #0062cc;
  }

  .p-highlight .p-radiobutton .p-radiobutton-box {
    border-color: #ffffff;
  }

  .p-rating {
    gap: 0.5rem;
  }
  .p-rating .p-rating-item .p-rating-icon {
    color: #495057;
    transition: background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
    font-size: 1.143rem;
  }
  .p-rating .p-rating-item .p-rating-icon.p-icon {
    width: 1.143rem;
    height: 1.143rem;
  }
  .p-rating .p-rating-item .p-rating-icon.p-rating-cancel {
    color: #dc3545;
  }
  .p-rating .p-rating-item:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }
  .p-rating .p-rating-item.p-rating-item-active .p-rating-icon {
    color: #007bff;
  }
  .p-rating:not(.p-disabled):not(.p-readonly) .p-rating-item:hover .p-rating-icon {
    color: #007bff;
  }
  .p-rating:not(.p-disabled):not(.p-readonly) .p-rating-item:hover .p-rating-icon.p-rating-cancel {
    color: #dc3545;
  }

  .p-highlight .p-rating .p-rating-item.p-rating-item-active .p-rating-icon {
    color: #ffffff;
  }

  .p-selectbutton .p-button {
    background: #6c757d;
    border: 1px solid #6c757d;
    color: #ffffff;
    transition: background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
  }
  .p-selectbutton .p-button .p-button-icon-left,
.p-selectbutton .p-button .p-button-icon-right {
    color: #ffffff;
  }
  .p-selectbutton .p-button:not(.p-disabled):not(.p-highlight):hover {
    background: #5a6268;
    border-color: #545b62;
    color: #ffffff;
  }
  .p-selectbutton .p-button:not(.p-disabled):not(.p-highlight):hover .p-button-icon-left,
.p-selectbutton .p-button:not(.p-disabled):not(.p-highlight):hover .p-button-icon-right {
    color: #ffffff;
  }
  .p-selectbutton .p-button.p-highlight {
    background: #545b62;
    border-color: #4e555b;
    color: #ffffff;
  }
  .p-selectbutton .p-button.p-highlight .p-button-icon-left,
.p-selectbutton .p-button.p-highlight .p-button-icon-right {
    color: #ffffff;
  }
  .p-selectbutton .p-button.p-highlight:hover {
    background: #545b62;
    border-color: #4e555b;
    color: #ffffff;
  }
  .p-selectbutton .p-button.p-highlight:hover .p-button-icon-left,
.p-selectbutton .p-button.p-highlight:hover .p-button-icon-right {
    color: #ffffff;
  }
  .p-selectbutton.p-invalid > .p-button {
    border-color: #dc3545;
  }

  .p-slider {
    background: #e9ecef;
    border: 0 none;
    border-radius: 4px;
  }
  .p-slider.p-slider-horizontal {
    height: 0.286rem;
  }
  .p-slider.p-slider-horizontal .p-slider-handle {
    margin-top: -0.5715rem;
    margin-left: -0.5715rem;
  }
  .p-slider.p-slider-vertical {
    width: 0.286rem;
  }
  .p-slider.p-slider-vertical .p-slider-handle {
    margin-left: -0.5715rem;
    margin-bottom: -0.5715rem;
  }
  .p-slider .p-slider-handle {
    height: 1.143rem;
    width: 1.143rem;
    background: #007bff;
    border: 2px solid #007bff;
    border-radius: 4px;
    transition: background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
  }
  .p-slider .p-slider-handle:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }
  .p-slider .p-slider-range {
    background: #007bff;
  }
  .p-slider:not(.p-disabled) .p-slider-handle:hover {
    background: #0069d9;
    border-color: #0069d9;
  }

  .p-treeselect {
    background: #ffffff;
    border: 1px solid #ced4da;
    transition: background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
    border-radius: 4px;
  }
  .p-treeselect:not(.p-disabled):hover {
    border-color: #ced4da;
  }
  .p-treeselect:not(.p-disabled).p-focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
    border-color: #007bff;
  }
  .p-treeselect.p-treeselect-clearable .p-treeselect-label {
    padding-right: 1.75rem;
  }
  .p-treeselect .p-treeselect-label {
    padding: 0.5rem 0.75rem;
    transition: background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
  }
  .p-treeselect .p-treeselect-label.p-placeholder {
    color: #6c757d;
  }
  .p-treeselect.p-treeselect-chip .p-treeselect-token {
    padding: 0.25rem 0.75rem;
    margin-right: 0.5rem;
    background: #dee2e6;
    color: #212529;
    border-radius: 16px;
  }
  .p-treeselect .p-treeselect-trigger {
    background: transparent;
    color: #495057;
    width: 2.357rem;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .p-treeselect .p-treeselect-clear-icon {
    color: #495057;
    right: 2.357rem;
  }
  .p-treeselect.p-invalid.p-component {
    border-color: #dc3545;
  }

  .p-inputwrapper-filled.p-treeselect.p-treeselect-chip .p-treeselect-label {
    padding: 0.25rem 0.75rem;
  }

  .p-treeselect-panel {
    background: #ffffff;
    color: #212529;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    box-shadow: none;
  }
  .p-treeselect-panel .p-treeselect-header {
    padding: 0.75rem 1.5rem;
    border-bottom: 1px solid #dee2e6;
    color: #212529;
    background: #efefef;
    margin: 0;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }
  .p-treeselect-panel .p-treeselect-header .p-treeselect-filter-container {
    margin-right: 0.5rem;
  }
  .p-treeselect-panel .p-treeselect-header .p-treeselect-filter-container .p-treeselect-filter {
    padding-right: 1.75rem;
  }
  .p-treeselect-panel .p-treeselect-header .p-treeselect-filter-container .p-treeselect-filter-icon {
    right: 0.75rem;
    color: #495057;
  }
  .p-treeselect-panel .p-treeselect-header .p-treeselect-filter-container.p-treeselect-clearable-filter .p-treeselect-filter {
    padding-right: 3.5rem;
  }
  .p-treeselect-panel .p-treeselect-header .p-treeselect-filter-container.p-treeselect-clearable-filter .p-treeselect-filter-clear-icon {
    right: 2.5rem;
  }
  .p-treeselect-panel .p-treeselect-header .p-treeselect-close {
    width: 2rem;
    height: 2rem;
    color: #6c757d;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: box-shadow 0.15s;
  }
  .p-treeselect-panel .p-treeselect-header .p-treeselect-close:enabled:hover {
    color: #495057;
    border-color: transparent;
    background: transparent;
  }
  .p-treeselect-panel .p-treeselect-header .p-treeselect-close:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }
  .p-treeselect-panel .p-treeselect-items-wrapper .p-tree {
    border: 0 none;
  }
  .p-treeselect-panel .p-treeselect-items-wrapper .p-treeselect-empty-message {
    padding: 0.5rem 1.5rem;
    color: #212529;
    background: transparent;
  }

  .p-input-filled .p-treeselect {
    background: #efefef;
  }
  .p-input-filled .p-treeselect:not(.p-disabled):hover {
    background-color: #efefef;
  }
  .p-input-filled .p-treeselect:not(.p-disabled).p-focus {
    background-color: #efefef;
  }

  .p-togglebutton.p-button {
    background: #6c757d;
    border: 1px solid #6c757d;
    color: #ffffff;
    transition: background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
  }
  .p-togglebutton.p-button .p-button-icon-left,
.p-togglebutton.p-button .p-button-icon-right {
    color: #ffffff;
  }
  .p-togglebutton.p-button:not(.p-disabled):not(.p-highlight):hover {
    background: #5a6268;
    border-color: #545b62;
    color: #ffffff;
  }
  .p-togglebutton.p-button:not(.p-disabled):not(.p-highlight):hover .p-button-icon-left,
.p-togglebutton.p-button:not(.p-disabled):not(.p-highlight):hover .p-button-icon-right {
    color: #ffffff;
  }
  .p-togglebutton.p-button.p-highlight {
    background: #545b62;
    border-color: #4e555b;
    color: #ffffff;
  }
  .p-togglebutton.p-button.p-highlight .p-button-icon-left,
.p-togglebutton.p-button.p-highlight .p-button-icon-right {
    color: #ffffff;
  }
  .p-togglebutton.p-button.p-highlight:hover {
    background: #545b62;
    border-color: #4e555b;
    color: #ffffff;
  }
  .p-togglebutton.p-button.p-highlight:hover .p-button-icon-left,
.p-togglebutton.p-button.p-highlight:hover .p-button-icon-right {
    color: #ffffff;
  }
  .p-togglebutton.p-button.p-invalid > .p-button {
    border-color: #dc3545;
  }

  .p-button {
    color: #ffffff;
    background: #007bff;
    border: 1px solid #007bff;
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
    transition: background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
    border-radius: 4px;
  }
  .p-button:not(:disabled):hover {
    background: #0069d9;
    color: #ffffff;
    border-color: #0069d9;
  }
  .p-button:not(:disabled):active {
    background: #0062cc;
    color: #ffffff;
    border-color: #0062cc;
  }
  .p-button.p-button-outlined {
    background-color: transparent;
    color: #007bff;
    border: 1px solid;
  }
  .p-button.p-button-outlined:not(:disabled):hover {
    background: rgba(0, 123, 255, 0.04);
    color: #007bff;
    border: 1px solid;
  }
  .p-button.p-button-outlined:not(:disabled):active {
    background: rgba(0, 123, 255, 0.16);
    color: #007bff;
    border: 1px solid;
  }
  .p-button.p-button-outlined.p-button-plain {
    color: #6c757d;
    border-color: #6c757d;
  }
  .p-button.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: #e9ecef;
    color: #6c757d;
  }
  .p-button.p-button-outlined.p-button-plain:not(:disabled):active {
    background: #dee2e6;
    color: #6c757d;
  }
  .p-button.p-button-text {
    background-color: transparent;
    color: #007bff;
    border-color: transparent;
  }
  .p-button.p-button-text:not(:disabled):hover {
    background: rgba(0, 123, 255, 0.04);
    color: #007bff;
    border-color: transparent;
  }
  .p-button.p-button-text:not(:disabled):active {
    background: rgba(0, 123, 255, 0.16);
    color: #007bff;
    border-color: transparent;
  }
  .p-button.p-button-text.p-button-plain {
    color: #6c757d;
  }
  .p-button.p-button-text.p-button-plain:not(:disabled):hover {
    background: #e9ecef;
    color: #6c757d;
  }
  .p-button.p-button-text.p-button-plain:not(:disabled):active {
    background: #dee2e6;
    color: #6c757d;
  }
  .p-button:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }
  .p-button .p-button-label {
    transition-duration: 0.15s;
  }
  .p-button .p-button-icon-left {
    margin-right: 0.5rem;
  }
  .p-button .p-button-icon-right {
    margin-left: 0.5rem;
  }
  .p-button .p-button-icon-bottom {
    margin-top: 0.5rem;
  }
  .p-button .p-button-icon-top {
    margin-bottom: 0.5rem;
  }
  .p-button .p-badge {
    margin-left: 0.5rem;
    min-width: 1rem;
    height: 1rem;
    line-height: 1rem;
    color: #007bff;
    background-color: #ffffff;
  }
  .p-button.p-button-raised {
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }
  .p-button.p-button-rounded {
    border-radius: 2rem;
  }
  .p-button.p-button-icon-only {
    width: 2.357rem;
    padding: 0.5rem 0;
  }
  .p-button.p-button-icon-only .p-button-icon-left,
.p-button.p-button-icon-only .p-button-icon-right {
    margin: 0;
  }
  .p-button.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: 2.357rem;
  }
  .p-button.p-button-sm {
    font-size: 0.875rem;
    padding: 0.4375rem 0.65625rem;
  }
  .p-button.p-button-sm .p-button-icon {
    font-size: 0.875rem;
  }
  .p-button.p-button-lg {
    font-size: 1.25rem;
    padding: 0.625rem 0.9375rem;
  }
  .p-button.p-button-lg .p-button-icon {
    font-size: 1.25rem;
  }
  .p-button.p-button-loading-label-only.p-button-loading-left .p-button-label {
    margin-left: 0.5rem;
  }
  .p-button.p-button-loading-label-only.p-button-loading-right .p-button-label {
    margin-right: 0.5rem;
  }
  .p-button.p-button-loading-label-only.p-button-loading-top .p-button-label {
    margin-top: 0.5rem;
  }
  .p-button.p-button-loading-label-only.p-button-loading-bottom .p-button-label {
    margin-bottom: 0.5rem;
  }
  .p-button.p-button-loading-label-only .p-button-loading-icon {
    margin: 0;
  }

  .p-fluid .p-button {
    width: 100%;
  }
  .p-fluid .p-button-icon-only {
    width: 2.357rem;
  }
  .p-fluid .p-buttonset {
    display: flex;
  }
  .p-fluid .p-buttonset .p-button {
    flex: 1;
  }

  .p-button.p-button-secondary, .p-buttonset.p-button-secondary > .p-button, .p-splitbutton.p-button-secondary > .p-button, .p-fileupload-choose.p-button-secondary {
    color: #ffffff;
    background: #6c757d;
    border: 1px solid #6c757d;
  }
  .p-button.p-button-secondary:not(:disabled):hover, .p-buttonset.p-button-secondary > .p-button:not(:disabled):hover, .p-splitbutton.p-button-secondary > .p-button:not(:disabled):hover, .p-fileupload-choose.p-button-secondary:not(:disabled):hover {
    background: #5a6268;
    color: #ffffff;
    border-color: #5a6268;
  }
  .p-button.p-button-secondary:not(:disabled):focus, .p-buttonset.p-button-secondary > .p-button:not(:disabled):focus, .p-splitbutton.p-button-secondary > .p-button:not(:disabled):focus, .p-fileupload-choose.p-button-secondary:not(:disabled):focus {
    box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5);
  }
  .p-button.p-button-secondary:not(:disabled):active, .p-buttonset.p-button-secondary > .p-button:not(:disabled):active, .p-splitbutton.p-button-secondary > .p-button:not(:disabled):active, .p-fileupload-choose.p-button-secondary:not(:disabled):active {
    background: #545b62;
    color: #ffffff;
    border-color: #4e555b;
  }
  .p-button.p-button-secondary.p-button-outlined, .p-buttonset.p-button-secondary > .p-button.p-button-outlined, .p-splitbutton.p-button-secondary > .p-button.p-button-outlined, .p-fileupload-choose.p-button-secondary.p-button-outlined {
    background-color: transparent;
    color: #6c757d;
    border: 1px solid;
  }
  .p-button.p-button-secondary.p-button-outlined:not(:disabled):hover, .p-buttonset.p-button-secondary > .p-button.p-button-outlined:not(:disabled):hover, .p-splitbutton.p-button-secondary > .p-button.p-button-outlined:not(:disabled):hover, .p-fileupload-choose.p-button-secondary.p-button-outlined:not(:disabled):hover {
    background: rgba(108, 117, 125, 0.04);
    color: #6c757d;
    border: 1px solid;
  }
  .p-button.p-button-secondary.p-button-outlined:not(:disabled):active, .p-buttonset.p-button-secondary > .p-button.p-button-outlined:not(:disabled):active, .p-splitbutton.p-button-secondary > .p-button.p-button-outlined:not(:disabled):active, .p-fileupload-choose.p-button-secondary.p-button-outlined:not(:disabled):active {
    background: rgba(108, 117, 125, 0.16);
    color: #6c757d;
    border: 1px solid;
  }
  .p-button.p-button-secondary.p-button-text, .p-buttonset.p-button-secondary > .p-button.p-button-text, .p-splitbutton.p-button-secondary > .p-button.p-button-text, .p-fileupload-choose.p-button-secondary.p-button-text {
    background-color: transparent;
    color: #6c757d;
    border-color: transparent;
  }
  .p-button.p-button-secondary.p-button-text:not(:disabled):hover, .p-buttonset.p-button-secondary > .p-button.p-button-text:not(:disabled):hover, .p-splitbutton.p-button-secondary > .p-button.p-button-text:not(:disabled):hover, .p-fileupload-choose.p-button-secondary.p-button-text:not(:disabled):hover {
    background: rgba(108, 117, 125, 0.04);
    border-color: transparent;
    color: #6c757d;
  }
  .p-button.p-button-secondary.p-button-text:not(:disabled):active, .p-buttonset.p-button-secondary > .p-button.p-button-text:not(:disabled):active, .p-splitbutton.p-button-secondary > .p-button.p-button-text:not(:disabled):active, .p-fileupload-choose.p-button-secondary.p-button-text:not(:disabled):active {
    background: rgba(108, 117, 125, 0.16);
    border-color: transparent;
    color: #6c757d;
  }

  .p-button.p-button-info, .p-buttonset.p-button-info > .p-button, .p-splitbutton.p-button-info > .p-button, .p-fileupload-choose.p-button-info {
    color: #ffffff;
    background: #17a2b8;
    border: 1px solid #17a2b8;
  }
  .p-button.p-button-info:not(:disabled):hover, .p-buttonset.p-button-info > .p-button:not(:disabled):hover, .p-splitbutton.p-button-info > .p-button:not(:disabled):hover, .p-fileupload-choose.p-button-info:not(:disabled):hover {
    background: #138496;
    color: #ffffff;
    border-color: #117a8b;
  }
  .p-button.p-button-info:not(:disabled):focus, .p-buttonset.p-button-info > .p-button:not(:disabled):focus, .p-splitbutton.p-button-info > .p-button:not(:disabled):focus, .p-fileupload-choose.p-button-info:not(:disabled):focus {
    box-shadow: 0 0 0 0.2rem rgba(58, 176, 195, 0.5);
  }
  .p-button.p-button-info:not(:disabled):active, .p-buttonset.p-button-info > .p-button:not(:disabled):active, .p-splitbutton.p-button-info > .p-button:not(:disabled):active, .p-fileupload-choose.p-button-info:not(:disabled):active {
    background: #138496;
    color: #ffffff;
    border-color: #117a8b;
  }
  .p-button.p-button-info.p-button-outlined, .p-buttonset.p-button-info > .p-button.p-button-outlined, .p-splitbutton.p-button-info > .p-button.p-button-outlined, .p-fileupload-choose.p-button-info.p-button-outlined {
    background-color: transparent;
    color: #17a2b8;
    border: 1px solid;
  }
  .p-button.p-button-info.p-button-outlined:not(:disabled):hover, .p-buttonset.p-button-info > .p-button.p-button-outlined:not(:disabled):hover, .p-splitbutton.p-button-info > .p-button.p-button-outlined:not(:disabled):hover, .p-fileupload-choose.p-button-info.p-button-outlined:not(:disabled):hover {
    background: rgba(23, 162, 184, 0.04);
    color: #17a2b8;
    border: 1px solid;
  }
  .p-button.p-button-info.p-button-outlined:not(:disabled):active, .p-buttonset.p-button-info > .p-button.p-button-outlined:not(:disabled):active, .p-splitbutton.p-button-info > .p-button.p-button-outlined:not(:disabled):active, .p-fileupload-choose.p-button-info.p-button-outlined:not(:disabled):active {
    background: rgba(23, 162, 184, 0.16);
    color: #17a2b8;
    border: 1px solid;
  }
  .p-button.p-button-info.p-button-text, .p-buttonset.p-button-info > .p-button.p-button-text, .p-splitbutton.p-button-info > .p-button.p-button-text, .p-fileupload-choose.p-button-info.p-button-text {
    background-color: transparent;
    color: #17a2b8;
    border-color: transparent;
  }
  .p-button.p-button-info.p-button-text:not(:disabled):hover, .p-buttonset.p-button-info > .p-button.p-button-text:not(:disabled):hover, .p-splitbutton.p-button-info > .p-button.p-button-text:not(:disabled):hover, .p-fileupload-choose.p-button-info.p-button-text:not(:disabled):hover {
    background: rgba(23, 162, 184, 0.04);
    border-color: transparent;
    color: #17a2b8;
  }
  .p-button.p-button-info.p-button-text:not(:disabled):active, .p-buttonset.p-button-info > .p-button.p-button-text:not(:disabled):active, .p-splitbutton.p-button-info > .p-button.p-button-text:not(:disabled):active, .p-fileupload-choose.p-button-info.p-button-text:not(:disabled):active {
    background: rgba(23, 162, 184, 0.16);
    border-color: transparent;
    color: #17a2b8;
  }

  .p-button.p-button-success, .p-buttonset.p-button-success > .p-button, .p-splitbutton.p-button-success > .p-button, .p-fileupload-choose.p-button-success {
    color: #ffffff;
    background: #28a745;
    border: 1px solid #28a745;
  }
  .p-button.p-button-success:not(:disabled):hover, .p-buttonset.p-button-success > .p-button:not(:disabled):hover, .p-splitbutton.p-button-success > .p-button:not(:disabled):hover, .p-fileupload-choose.p-button-success:not(:disabled):hover {
    background: #218838;
    color: #ffffff;
    border-color: #1e7e34;
  }
  .p-button.p-button-success:not(:disabled):focus, .p-buttonset.p-button-success > .p-button:not(:disabled):focus, .p-splitbutton.p-button-success > .p-button:not(:disabled):focus, .p-fileupload-choose.p-button-success:not(:disabled):focus {
    box-shadow: 0 0 0 0.2rem rgba(72, 180, 97, 0.5);
  }
  .p-button.p-button-success:not(:disabled):active, .p-buttonset.p-button-success > .p-button:not(:disabled):active, .p-splitbutton.p-button-success > .p-button:not(:disabled):active, .p-fileupload-choose.p-button-success:not(:disabled):active {
    background: #1e7e34;
    color: #ffffff;
    border-color: #1c7430;
  }
  .p-button.p-button-success.p-button-outlined, .p-buttonset.p-button-success > .p-button.p-button-outlined, .p-splitbutton.p-button-success > .p-button.p-button-outlined, .p-fileupload-choose.p-button-success.p-button-outlined {
    background-color: transparent;
    color: #28a745;
    border: 1px solid;
  }
  .p-button.p-button-success.p-button-outlined:not(:disabled):hover, .p-buttonset.p-button-success > .p-button.p-button-outlined:not(:disabled):hover, .p-splitbutton.p-button-success > .p-button.p-button-outlined:not(:disabled):hover, .p-fileupload-choose.p-button-success.p-button-outlined:not(:disabled):hover {
    background: rgba(40, 167, 69, 0.04);
    color: #28a745;
    border: 1px solid;
  }
  .p-button.p-button-success.p-button-outlined:not(:disabled):active, .p-buttonset.p-button-success > .p-button.p-button-outlined:not(:disabled):active, .p-splitbutton.p-button-success > .p-button.p-button-outlined:not(:disabled):active, .p-fileupload-choose.p-button-success.p-button-outlined:not(:disabled):active {
    background: rgba(40, 167, 69, 0.16);
    color: #28a745;
    border: 1px solid;
  }
  .p-button.p-button-success.p-button-text, .p-buttonset.p-button-success > .p-button.p-button-text, .p-splitbutton.p-button-success > .p-button.p-button-text, .p-fileupload-choose.p-button-success.p-button-text {
    background-color: transparent;
    color: #28a745;
    border-color: transparent;
  }
  .p-button.p-button-success.p-button-text:not(:disabled):hover, .p-buttonset.p-button-success > .p-button.p-button-text:not(:disabled):hover, .p-splitbutton.p-button-success > .p-button.p-button-text:not(:disabled):hover, .p-fileupload-choose.p-button-success.p-button-text:not(:disabled):hover {
    background: rgba(40, 167, 69, 0.04);
    border-color: transparent;
    color: #28a745;
  }
  .p-button.p-button-success.p-button-text:not(:disabled):active, .p-buttonset.p-button-success > .p-button.p-button-text:not(:disabled):active, .p-splitbutton.p-button-success > .p-button.p-button-text:not(:disabled):active, .p-fileupload-choose.p-button-success.p-button-text:not(:disabled):active {
    background: rgba(40, 167, 69, 0.16);
    border-color: transparent;
    color: #28a745;
  }

  .p-button.p-button-warning, .p-buttonset.p-button-warning > .p-button, .p-splitbutton.p-button-warning > .p-button, .p-fileupload-choose.p-button-warning {
    color: #212529;
    background: #ffc107;
    border: 1px solid #ffc107;
  }
  .p-button.p-button-warning:not(:disabled):hover, .p-buttonset.p-button-warning > .p-button:not(:disabled):hover, .p-splitbutton.p-button-warning > .p-button:not(:disabled):hover, .p-fileupload-choose.p-button-warning:not(:disabled):hover {
    background: #e0a800;
    color: #212529;
    border-color: #d39e00;
  }
  .p-button.p-button-warning:not(:disabled):focus, .p-buttonset.p-button-warning > .p-button:not(:disabled):focus, .p-splitbutton.p-button-warning > .p-button:not(:disabled):focus, .p-fileupload-choose.p-button-warning:not(:disabled):focus {
    box-shadow: 0 0 0 0.2rem rgba(222, 170, 12, 0.5);
  }
  .p-button.p-button-warning:not(:disabled):active, .p-buttonset.p-button-warning > .p-button:not(:disabled):active, .p-splitbutton.p-button-warning > .p-button:not(:disabled):active, .p-fileupload-choose.p-button-warning:not(:disabled):active {
    background: #d39e00;
    color: #212529;
    border-color: #c69500;
  }
  .p-button.p-button-warning.p-button-outlined, .p-buttonset.p-button-warning > .p-button.p-button-outlined, .p-splitbutton.p-button-warning > .p-button.p-button-outlined, .p-fileupload-choose.p-button-warning.p-button-outlined {
    background-color: transparent;
    color: #ffc107;
    border: 1px solid;
  }
  .p-button.p-button-warning.p-button-outlined:not(:disabled):hover, .p-buttonset.p-button-warning > .p-button.p-button-outlined:not(:disabled):hover, .p-splitbutton.p-button-warning > .p-button.p-button-outlined:not(:disabled):hover, .p-fileupload-choose.p-button-warning.p-button-outlined:not(:disabled):hover {
    background: rgba(255, 193, 7, 0.04);
    color: #ffc107;
    border: 1px solid;
  }
  .p-button.p-button-warning.p-button-outlined:not(:disabled):active, .p-buttonset.p-button-warning > .p-button.p-button-outlined:not(:disabled):active, .p-splitbutton.p-button-warning > .p-button.p-button-outlined:not(:disabled):active, .p-fileupload-choose.p-button-warning.p-button-outlined:not(:disabled):active {
    background: rgba(255, 193, 7, 0.16);
    color: #ffc107;
    border: 1px solid;
  }
  .p-button.p-button-warning.p-button-text, .p-buttonset.p-button-warning > .p-button.p-button-text, .p-splitbutton.p-button-warning > .p-button.p-button-text, .p-fileupload-choose.p-button-warning.p-button-text {
    background-color: transparent;
    color: #ffc107;
    border-color: transparent;
  }
  .p-button.p-button-warning.p-button-text:not(:disabled):hover, .p-buttonset.p-button-warning > .p-button.p-button-text:not(:disabled):hover, .p-splitbutton.p-button-warning > .p-button.p-button-text:not(:disabled):hover, .p-fileupload-choose.p-button-warning.p-button-text:not(:disabled):hover {
    background: rgba(255, 193, 7, 0.04);
    border-color: transparent;
    color: #ffc107;
  }
  .p-button.p-button-warning.p-button-text:not(:disabled):active, .p-buttonset.p-button-warning > .p-button.p-button-text:not(:disabled):active, .p-splitbutton.p-button-warning > .p-button.p-button-text:not(:disabled):active, .p-fileupload-choose.p-button-warning.p-button-text:not(:disabled):active {
    background: rgba(255, 193, 7, 0.16);
    border-color: transparent;
    color: #ffc107;
  }

  .p-button.p-button-help, .p-buttonset.p-button-help > .p-button, .p-splitbutton.p-button-help > .p-button, .p-fileupload-choose.p-button-help {
    color: #ffffff;
    background: #6f42c1;
    border: 1px solid #6f42c1;
  }
  .p-button.p-button-help:not(:disabled):hover, .p-buttonset.p-button-help > .p-button:not(:disabled):hover, .p-splitbutton.p-button-help > .p-button:not(:disabled):hover, .p-fileupload-choose.p-button-help:not(:disabled):hover {
    background: #633bad;
    color: #ffffff;
    border-color: #58349a;
  }
  .p-button.p-button-help:not(:disabled):focus, .p-buttonset.p-button-help > .p-button:not(:disabled):focus, .p-splitbutton.p-button-help > .p-button:not(:disabled):focus, .p-fileupload-choose.p-button-help:not(:disabled):focus {
    box-shadow: 0 0 0 0.2rem #d3c6ec;
  }
  .p-button.p-button-help:not(:disabled):active, .p-buttonset.p-button-help > .p-button:not(:disabled):active, .p-splitbutton.p-button-help > .p-button:not(:disabled):active, .p-fileupload-choose.p-button-help:not(:disabled):active {
    background: #58349a;
    color: #ffffff;
    border-color: #4d2e87;
  }
  .p-button.p-button-help.p-button-outlined, .p-buttonset.p-button-help > .p-button.p-button-outlined, .p-splitbutton.p-button-help > .p-button.p-button-outlined, .p-fileupload-choose.p-button-help.p-button-outlined {
    background-color: transparent;
    color: #6f42c1;
    border: 1px solid;
  }
  .p-button.p-button-help.p-button-outlined:not(:disabled):hover, .p-buttonset.p-button-help > .p-button.p-button-outlined:not(:disabled):hover, .p-splitbutton.p-button-help > .p-button.p-button-outlined:not(:disabled):hover, .p-fileupload-choose.p-button-help.p-button-outlined:not(:disabled):hover {
    background: rgba(111, 66, 193, 0.04);
    color: #6f42c1;
    border: 1px solid;
  }
  .p-button.p-button-help.p-button-outlined:not(:disabled):active, .p-buttonset.p-button-help > .p-button.p-button-outlined:not(:disabled):active, .p-splitbutton.p-button-help > .p-button.p-button-outlined:not(:disabled):active, .p-fileupload-choose.p-button-help.p-button-outlined:not(:disabled):active {
    background: rgba(111, 66, 193, 0.16);
    color: #6f42c1;
    border: 1px solid;
  }
  .p-button.p-button-help.p-button-text, .p-buttonset.p-button-help > .p-button.p-button-text, .p-splitbutton.p-button-help > .p-button.p-button-text, .p-fileupload-choose.p-button-help.p-button-text {
    background-color: transparent;
    color: #6f42c1;
    border-color: transparent;
  }
  .p-button.p-button-help.p-button-text:not(:disabled):hover, .p-buttonset.p-button-help > .p-button.p-button-text:not(:disabled):hover, .p-splitbutton.p-button-help > .p-button.p-button-text:not(:disabled):hover, .p-fileupload-choose.p-button-help.p-button-text:not(:disabled):hover {
    background: rgba(111, 66, 193, 0.04);
    border-color: transparent;
    color: #6f42c1;
  }
  .p-button.p-button-help.p-button-text:not(:disabled):active, .p-buttonset.p-button-help > .p-button.p-button-text:not(:disabled):active, .p-splitbutton.p-button-help > .p-button.p-button-text:not(:disabled):active, .p-fileupload-choose.p-button-help.p-button-text:not(:disabled):active {
    background: rgba(111, 66, 193, 0.16);
    border-color: transparent;
    color: #6f42c1;
  }

  .p-button.p-button-danger, .p-buttonset.p-button-danger > .p-button, .p-splitbutton.p-button-danger > .p-button, .p-fileupload-choose.p-button-danger {
    color: #ffffff;
    background: #dc3545;
    border: 1px solid #dc3545;
  }
  .p-button.p-button-danger:not(:disabled):hover, .p-buttonset.p-button-danger > .p-button:not(:disabled):hover, .p-splitbutton.p-button-danger > .p-button:not(:disabled):hover, .p-fileupload-choose.p-button-danger:not(:disabled):hover {
    background: #c82333;
    color: #ffffff;
    border-color: #bd2130;
  }
  .p-button.p-button-danger:not(:disabled):focus, .p-buttonset.p-button-danger > .p-button:not(:disabled):focus, .p-splitbutton.p-button-danger > .p-button:not(:disabled):focus, .p-fileupload-choose.p-button-danger:not(:disabled):focus {
    box-shadow: 0 0 0 0.2rem rgba(225, 83, 97, 0.5);
  }
  .p-button.p-button-danger:not(:disabled):active, .p-buttonset.p-button-danger > .p-button:not(:disabled):active, .p-splitbutton.p-button-danger > .p-button:not(:disabled):active, .p-fileupload-choose.p-button-danger:not(:disabled):active {
    background: #bd2130;
    color: #ffffff;
    border-color: #b21f2d;
  }
  .p-button.p-button-danger.p-button-outlined, .p-buttonset.p-button-danger > .p-button.p-button-outlined, .p-splitbutton.p-button-danger > .p-button.p-button-outlined, .p-fileupload-choose.p-button-danger.p-button-outlined {
    background-color: transparent;
    color: #dc3545;
    border: 1px solid;
  }
  .p-button.p-button-danger.p-button-outlined:not(:disabled):hover, .p-buttonset.p-button-danger > .p-button.p-button-outlined:not(:disabled):hover, .p-splitbutton.p-button-danger > .p-button.p-button-outlined:not(:disabled):hover, .p-fileupload-choose.p-button-danger.p-button-outlined:not(:disabled):hover {
    background: rgba(220, 53, 69, 0.04);
    color: #dc3545;
    border: 1px solid;
  }
  .p-button.p-button-danger.p-button-outlined:not(:disabled):active, .p-buttonset.p-button-danger > .p-button.p-button-outlined:not(:disabled):active, .p-splitbutton.p-button-danger > .p-button.p-button-outlined:not(:disabled):active, .p-fileupload-choose.p-button-danger.p-button-outlined:not(:disabled):active {
    background: rgba(220, 53, 69, 0.16);
    color: #dc3545;
    border: 1px solid;
  }
  .p-button.p-button-danger.p-button-text, .p-buttonset.p-button-danger > .p-button.p-button-text, .p-splitbutton.p-button-danger > .p-button.p-button-text, .p-fileupload-choose.p-button-danger.p-button-text {
    background-color: transparent;
    color: #dc3545;
    border-color: transparent;
  }
  .p-button.p-button-danger.p-button-text:not(:disabled):hover, .p-buttonset.p-button-danger > .p-button.p-button-text:not(:disabled):hover, .p-splitbutton.p-button-danger > .p-button.p-button-text:not(:disabled):hover, .p-fileupload-choose.p-button-danger.p-button-text:not(:disabled):hover {
    background: rgba(220, 53, 69, 0.04);
    border-color: transparent;
    color: #dc3545;
  }
  .p-button.p-button-danger.p-button-text:not(:disabled):active, .p-buttonset.p-button-danger > .p-button.p-button-text:not(:disabled):active, .p-splitbutton.p-button-danger > .p-button.p-button-text:not(:disabled):active, .p-fileupload-choose.p-button-danger.p-button-text:not(:disabled):active {
    background: rgba(220, 53, 69, 0.16);
    border-color: transparent;
    color: #dc3545;
  }

  .p-button.p-button-link {
    color: #007bff;
    background: transparent;
    border: transparent;
  }
  .p-button.p-button-link:not(:disabled):hover {
    background: transparent;
    color: #0069d9;
    border-color: transparent;
  }
  .p-button.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
  }
  .p-button.p-button-link:not(:disabled):focus {
    background: transparent;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
    border-color: transparent;
  }
  .p-button.p-button-link:not(:disabled):active {
    background: transparent;
    color: #007bff;
    border-color: transparent;
  }

  .p-splitbutton {
    border-radius: 4px;
  }
  .p-splitbutton.p-button-outlined > .p-button {
    background-color: transparent;
    color: #007bff;
    border: 1px solid;
  }
  .p-splitbutton.p-button-outlined > .p-button:not(:disabled):hover {
    background: rgba(0, 123, 255, 0.04);
    color: #007bff;
  }
  .p-splitbutton.p-button-outlined > .p-button:not(:disabled):active {
    background: rgba(0, 123, 255, 0.16);
    color: #007bff;
  }
  .p-splitbutton.p-button-outlined.p-button-plain > .p-button {
    color: #6c757d;
    border-color: #6c757d;
  }
  .p-splitbutton.p-button-outlined.p-button-plain > .p-button:not(:disabled):hover {
    background: #e9ecef;
    color: #6c757d;
  }
  .p-splitbutton.p-button-outlined.p-button-plain > .p-button:not(:disabled):active {
    background: #dee2e6;
    color: #6c757d;
  }
  .p-splitbutton.p-button-text > .p-button {
    background-color: transparent;
    color: #007bff;
    border-color: transparent;
  }
  .p-splitbutton.p-button-text > .p-button:not(:disabled):hover {
    background: rgba(0, 123, 255, 0.04);
    color: #007bff;
    border-color: transparent;
  }
  .p-splitbutton.p-button-text > .p-button:not(:disabled):active {
    background: rgba(0, 123, 255, 0.16);
    color: #007bff;
    border-color: transparent;
  }
  .p-splitbutton.p-button-text.p-button-plain > .p-button {
    color: #6c757d;
  }
  .p-splitbutton.p-button-text.p-button-plain > .p-button:not(:disabled):hover {
    background: #e9ecef;
    color: #6c757d;
  }
  .p-splitbutton.p-button-text.p-button-plain > .p-button:not(:disabled):active {
    background: #dee2e6;
    color: #6c757d;
  }
  .p-splitbutton.p-button-raised {
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }
  .p-splitbutton.p-button-rounded {
    border-radius: 2rem;
  }
  .p-splitbutton.p-button-rounded > .p-button {
    border-radius: 2rem;
  }
  .p-splitbutton.p-button-sm > .p-button {
    font-size: 0.875rem;
    padding: 0.4375rem 0.65625rem;
  }
  .p-splitbutton.p-button-sm > .p-button .p-button-icon {
    font-size: 0.875rem;
  }
  .p-splitbutton.p-button-lg > .p-button {
    font-size: 1.25rem;
    padding: 0.625rem 0.9375rem;
  }
  .p-splitbutton.p-button-lg > .p-button.p-button-icon-only {
    width: auto;
  }
  .p-splitbutton.p-button-lg > .p-button .p-button-icon {
    font-size: 1.25rem;
  }
  .p-splitbutton .p-splitbutton-menubutton,
.p-splitbutton .p-splitbutton.p-button-rounded > .p-splitbutton-menubutton.p-button,
.p-splitbutton .p-splitbutton.p-button-outlined > .p-splitbutton-menubutton.p-button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .p-splitbutton.p-button-secondary.p-button-outlined > .p-button {
    background-color: transparent;
    color: #6c757d;
    border: 1px solid;
  }
  .p-splitbutton.p-button-secondary.p-button-outlined > .p-button:not(:disabled):hover {
    background: rgba(108, 117, 125, 0.04);
    color: #6c757d;
  }
  .p-splitbutton.p-button-secondary.p-button-outlined > .p-button:not(:disabled):active {
    background: rgba(108, 117, 125, 0.16);
    color: #6c757d;
  }
  .p-splitbutton.p-button-secondary.p-button-text > .p-button {
    background-color: transparent;
    color: #6c757d;
    border-color: transparent;
  }
  .p-splitbutton.p-button-secondary.p-button-text > .p-button:not(:disabled):hover {
    background: rgba(108, 117, 125, 0.04);
    border-color: transparent;
    color: #6c757d;
  }
  .p-splitbutton.p-button-secondary.p-button-text > .p-button:not(:disabled):active {
    background: rgba(108, 117, 125, 0.16);
    border-color: transparent;
    color: #6c757d;
  }

  .p-splitbutton.p-button-info.p-button-outlined > .p-button {
    background-color: transparent;
    color: #17a2b8;
    border: 1px solid;
  }
  .p-splitbutton.p-button-info.p-button-outlined > .p-button:not(:disabled):hover {
    background: rgba(23, 162, 184, 0.04);
    color: #17a2b8;
  }
  .p-splitbutton.p-button-info.p-button-outlined > .p-button:not(:disabled):active {
    background: rgba(23, 162, 184, 0.16);
    color: #17a2b8;
  }
  .p-splitbutton.p-button-info.p-button-text > .p-button {
    background-color: transparent;
    color: #17a2b8;
    border-color: transparent;
  }
  .p-splitbutton.p-button-info.p-button-text > .p-button:not(:disabled):hover {
    background: rgba(23, 162, 184, 0.04);
    border-color: transparent;
    color: #17a2b8;
  }
  .p-splitbutton.p-button-info.p-button-text > .p-button:not(:disabled):active {
    background: rgba(23, 162, 184, 0.16);
    border-color: transparent;
    color: #17a2b8;
  }

  .p-splitbutton.p-button-success.p-button-outlined > .p-button {
    background-color: transparent;
    color: #28a745;
    border: 1px solid;
  }
  .p-splitbutton.p-button-success.p-button-outlined > .p-button:not(:disabled):hover {
    background: rgba(40, 167, 69, 0.04);
    color: #28a745;
  }
  .p-splitbutton.p-button-success.p-button-outlined > .p-button:not(:disabled):active {
    background: rgba(40, 167, 69, 0.16);
    color: #28a745;
  }
  .p-splitbutton.p-button-success.p-button-text > .p-button {
    background-color: transparent;
    color: #28a745;
    border-color: transparent;
  }
  .p-splitbutton.p-button-success.p-button-text > .p-button:not(:disabled):hover {
    background: rgba(40, 167, 69, 0.04);
    border-color: transparent;
    color: #28a745;
  }
  .p-splitbutton.p-button-success.p-button-text > .p-button:not(:disabled):active {
    background: rgba(40, 167, 69, 0.16);
    border-color: transparent;
    color: #28a745;
  }

  .p-splitbutton.p-button-warning.p-button-outlined > .p-button {
    background-color: transparent;
    color: #ffc107;
    border: 1px solid;
  }
  .p-splitbutton.p-button-warning.p-button-outlined > .p-button:not(:disabled):hover {
    background: rgba(255, 193, 7, 0.04);
    color: #ffc107;
  }
  .p-splitbutton.p-button-warning.p-button-outlined > .p-button:not(:disabled):active {
    background: rgba(255, 193, 7, 0.16);
    color: #ffc107;
  }
  .p-splitbutton.p-button-warning.p-button-text > .p-button {
    background-color: transparent;
    color: #ffc107;
    border-color: transparent;
  }
  .p-splitbutton.p-button-warning.p-button-text > .p-button:not(:disabled):hover {
    background: rgba(255, 193, 7, 0.04);
    border-color: transparent;
    color: #ffc107;
  }
  .p-splitbutton.p-button-warning.p-button-text > .p-button:not(:disabled):active {
    background: rgba(255, 193, 7, 0.16);
    border-color: transparent;
    color: #ffc107;
  }

  .p-splitbutton.p-button-help.p-button-outlined > .p-button {
    background-color: transparent;
    color: #6f42c1;
    border: 1px solid;
  }
  .p-splitbutton.p-button-help.p-button-outlined > .p-button:not(:disabled):hover {
    background: rgba(111, 66, 193, 0.04);
    color: #6f42c1;
  }
  .p-splitbutton.p-button-help.p-button-outlined > .p-button:not(:disabled):active {
    background: rgba(111, 66, 193, 0.16);
    color: #6f42c1;
  }
  .p-splitbutton.p-button-help.p-button-text > .p-button {
    background-color: transparent;
    color: #6f42c1;
    border-color: transparent;
  }
  .p-splitbutton.p-button-help.p-button-text > .p-button:not(:disabled):hover {
    background: rgba(111, 66, 193, 0.04);
    border-color: transparent;
    color: #6f42c1;
  }
  .p-splitbutton.p-button-help.p-button-text > .p-button:not(:disabled):active {
    background: rgba(111, 66, 193, 0.16);
    border-color: transparent;
    color: #6f42c1;
  }

  .p-splitbutton.p-button-danger.p-button-outlined > .p-button {
    background-color: transparent;
    color: #dc3545;
    border: 1px solid;
  }
  .p-splitbutton.p-button-danger.p-button-outlined > .p-button:not(:disabled):hover {
    background: rgba(220, 53, 69, 0.04);
    color: #dc3545;
  }
  .p-splitbutton.p-button-danger.p-button-outlined > .p-button:not(:disabled):active {
    background: rgba(220, 53, 69, 0.16);
    color: #dc3545;
  }
  .p-splitbutton.p-button-danger.p-button-text > .p-button {
    background-color: transparent;
    color: #dc3545;
    border-color: transparent;
  }
  .p-splitbutton.p-button-danger.p-button-text > .p-button:not(:disabled):hover {
    background: rgba(220, 53, 69, 0.04);
    border-color: transparent;
    color: #dc3545;
  }
  .p-splitbutton.p-button-danger.p-button-text > .p-button:not(:disabled):active {
    background: rgba(220, 53, 69, 0.16);
    border-color: transparent;
    color: #dc3545;
  }

  .p-speeddial-button.p-button.p-button-icon-only {
    width: 4rem;
    height: 4rem;
  }
  .p-speeddial-button.p-button.p-button-icon-only .p-button-icon {
    font-size: 1.3rem;
  }
  .p-speeddial-button.p-button.p-button-icon-only .p-button-icon.p-icon {
    width: 1.3rem;
    height: 1.3rem;
  }

  .p-speeddial-action {
    width: 3rem;
    height: 3rem;
    background: #495057;
    color: #fff;
  }
  .p-speeddial-action:hover {
    background: #343a40;
    color: #fff;
  }

  .p-speeddial-direction-up .p-speeddial-item {
    margin: 0.25rem;
  }
  .p-speeddial-direction-up .p-speeddial-item:first-child {
    margin-bottom: 0.5rem;
  }

  .p-speeddial-direction-down .p-speeddial-item {
    margin: 0.25rem;
  }
  .p-speeddial-direction-down .p-speeddial-item:first-child {
    margin-top: 0.5rem;
  }

  .p-speeddial-direction-left .p-speeddial-item {
    margin: 0 0.25rem;
  }
  .p-speeddial-direction-left .p-speeddial-item:first-child {
    margin-right: 0.5rem;
  }

  .p-speeddial-direction-right .p-speeddial-item {
    margin: 0 0.25rem;
  }
  .p-speeddial-direction-right .p-speeddial-item:first-child {
    margin-left: 0.5rem;
  }

  .p-speeddial-circle .p-speeddial-item,
.p-speeddial-semi-circle .p-speeddial-item,
.p-speeddial-quarter-circle .p-speeddial-item {
    margin: 0;
  }
  .p-speeddial-circle .p-speeddial-item:first-child, .p-speeddial-circle .p-speeddial-item:last-child,
.p-speeddial-semi-circle .p-speeddial-item:first-child,
.p-speeddial-semi-circle .p-speeddial-item:last-child,
.p-speeddial-quarter-circle .p-speeddial-item:first-child,
.p-speeddial-quarter-circle .p-speeddial-item:last-child {
    margin: 0;
  }

  .p-speeddial-mask {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 4px;
  }

  .p-carousel .p-carousel-content .p-carousel-prev,
.p-carousel .p-carousel-content .p-carousel-next {
    width: 2rem;
    height: 2rem;
    color: #6c757d;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: box-shadow 0.15s;
    margin: 0.5rem;
  }
  .p-carousel .p-carousel-content .p-carousel-prev:enabled:hover,
.p-carousel .p-carousel-content .p-carousel-next:enabled:hover {
    color: #495057;
    border-color: transparent;
    background: transparent;
  }
  .p-carousel .p-carousel-content .p-carousel-prev:focus-visible,
.p-carousel .p-carousel-content .p-carousel-next:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }
  .p-carousel .p-carousel-indicators {
    padding: 1rem;
  }
  .p-carousel .p-carousel-indicators .p-carousel-indicator {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .p-carousel .p-carousel-indicators .p-carousel-indicator button {
    background-color: #e9ecef;
    width: 2rem;
    height: 0.5rem;
    transition: box-shadow 0.15s;
    border-radius: 0;
  }
  .p-carousel .p-carousel-indicators .p-carousel-indicator button:hover {
    background: #dee2e6;
  }
  .p-carousel .p-carousel-indicators .p-carousel-indicator.p-highlight button {
    background: #007bff;
    color: #ffffff;
  }

  .p-datatable .p-paginator-top {
    border-width: 1px 0 0 0;
    border-radius: 0;
  }
  .p-datatable .p-paginator-bottom {
    border-width: 1px 0 0 0;
    border-radius: 0;
  }
  .p-datatable .p-datatable-header {
    background: #efefef;
    color: #212529;
    border: solid #dee2e6;
    border-width: 1px 0 0 0;
    padding: 1rem 1rem;
    font-weight: 600;
  }
  .p-datatable .p-datatable-footer {
    background: #efefef;
    color: #212529;
    border: 1px solid #dee2e6;
    border-width: 1px 0 1px 0;
    padding: 1rem 1rem;
    font-weight: 600;
  }
  .p-datatable .p-datatable-thead > tr > th {
    text-align: left;
    padding: 1rem 1rem;
    border: 1px solid #dee2e6;
    border-width: 1px 0 2px 0;
    font-weight: 600;
    color: #212529;
    background: #ffffff;
    transition: box-shadow 0.15s;
  }
  .p-datatable .p-datatable-tfoot > tr > td {
    text-align: left;
    padding: 1rem 1rem;
    border: 1px solid #dee2e6;
    border-width: 1px 0 1px 0;
    font-weight: 600;
    color: #212529;
    background: #ffffff;
  }
  .p-datatable .p-sortable-column .p-sortable-column-icon {
    color: #6c757d;
    margin-left: 0.5rem;
  }
  .p-datatable .p-sortable-column .p-sortable-column-badge {
    border-radius: 50%;
    height: 1.143rem;
    min-width: 1.143rem;
    line-height: 1.143rem;
    color: #ffffff;
    background: #007bff;
    margin-left: 0.5rem;
  }
  .p-datatable .p-sortable-column:not(.p-highlight):not(.p-sortable-disabled):hover {
    background: #e9ecef;
    color: #212529;
  }
  .p-datatable .p-sortable-column:not(.p-highlight):not(.p-sortable-disabled):hover .p-sortable-column-icon {
    color: #6c757d;
  }
  .p-datatable .p-sortable-column.p-highlight {
    background: #ffffff;
    color: #007bff;
  }
  .p-datatable .p-sortable-column.p-highlight .p-sortable-column-icon {
    color: #007bff;
  }
  .p-datatable .p-sortable-column.p-highlight:not(.p-sortable-disabled):hover {
    background: #e9ecef;
    color: #007bff;
  }
  .p-datatable .p-sortable-column.p-highlight:not(.p-sortable-disabled):hover .p-sortable-column-icon {
    color: #007bff;
  }
  .p-datatable .p-sortable-column:focus-visible {
    box-shadow: inset 0 0 0 0.15rem rgba(38, 143, 255, 0.5);
    outline: 0 none;
  }
  .p-datatable .p-datatable-tbody > tr {
    background: #ffffff;
    color: #212529;
    transition: box-shadow 0.15s;
  }
  .p-datatable .p-datatable-tbody > tr > td {
    text-align: left;
    border: 1px solid #dee2e6;
    border-width: 1px 0 0 0;
    padding: 1rem 1rem;
  }
  .p-datatable .p-datatable-tbody > tr > td .p-row-toggler,
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-init,
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-save,
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-cancel {
    width: 2rem;
    height: 2rem;
    color: #6c757d;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: box-shadow 0.15s;
  }
  .p-datatable .p-datatable-tbody > tr > td .p-row-toggler:enabled:hover,
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-init:enabled:hover,
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-save:enabled:hover,
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-cancel:enabled:hover {
    color: #495057;
    border-color: transparent;
    background: transparent;
  }
  .p-datatable .p-datatable-tbody > tr > td .p-row-toggler:focus-visible,
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-init:focus-visible,
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-save:focus-visible,
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-cancel:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }
  .p-datatable .p-datatable-tbody > tr > td .p-row-editor-save {
    margin-right: 0.5rem;
  }
  .p-datatable .p-datatable-tbody > tr > td > .p-column-title {
    font-weight: 600;
  }
  .p-datatable .p-datatable-tbody > tr > td.p-highlight {
    background: #007bff;
    color: #ffffff;
  }
  .p-datatable .p-datatable-tbody > tr.p-highlight {
    background: #007bff;
    color: #ffffff;
  }
  .p-datatable .p-datatable-tbody > tr.p-highlight-contextmenu {
    outline: 0.15rem solid rgba(38, 143, 255, 0.5);
    outline-offset: -0.15rem;
  }
  .p-datatable .p-datatable-tbody > tr.p-datatable-dragpoint-top > td {
    box-shadow: inset 0 2px 0 0 #007bff;
  }
  .p-datatable .p-datatable-tbody > tr.p-datatable-dragpoint-bottom > td {
    box-shadow: inset 0 -2px 0 0 #007bff;
  }
  .p-datatable.p-datatable-selectable .p-datatable-tbody > tr.p-selectable-row:not(.p-highlight):not(.p-datatable-emptymessage):hover {
    background: #e9ecef;
    color: #212529;
  }
  .p-datatable.p-datatable-selectable .p-datatable-tbody > tr.p-selectable-row:focus-visible {
    outline: 0.15rem solid rgba(38, 143, 255, 0.5);
    outline-offset: -0.15rem;
  }
  .p-datatable.p-datatable-selectable-cell .p-datatable-tbody > tr.p-selectable-row > td.p-selectable-cell:not(.p-highlight):hover {
    background: #e9ecef;
    color: #212529;
  }
  .p-datatable.p-datatable-selectable-cell .p-datatable-tbody > tr.p-selectable-row > td.p-selectable-cell:focus-visible {
    outline: 0.15rem solid rgba(38, 143, 255, 0.5);
    outline-offset: -0.15rem;
  }
  .p-datatable.p-datatable-hoverable-rows .p-datatable-tbody > tr:not(.p-highlight):not(.p-datatable-emptymessage):hover {
    background: #e9ecef;
    color: #212529;
  }
  .p-datatable .p-column-resizer-helper {
    background: #007bff;
  }
  .p-datatable .p-datatable-scrollable-header,
.p-datatable .p-datatable-scrollable-footer {
    background: #efefef;
  }
  .p-datatable.p-datatable-scrollable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-thead,
.p-datatable.p-datatable-scrollable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tfoot, .p-datatable.p-datatable-scrollable > .p-datatable-wrapper > .p-virtualscroller > .p-datatable-table > .p-datatable-thead,
.p-datatable.p-datatable-scrollable > .p-datatable-wrapper > .p-virtualscroller > .p-datatable-table > .p-datatable-tfoot {
    background-color: #ffffff;
  }
  .p-datatable .p-datatable-loading-icon {
    font-size: 2rem;
  }
  .p-datatable .p-datatable-loading-icon.p-icon {
    width: 2rem;
    height: 2rem;
  }
  .p-datatable.p-datatable-gridlines .p-datatable-header {
    border-width: 1px 1px 0 1px;
  }
  .p-datatable.p-datatable-gridlines .p-datatable-footer {
    border-width: 0 1px 1px 1px;
  }
  .p-datatable.p-datatable-gridlines .p-paginator-top {
    border-width: 0 1px 0 1px;
  }
  .p-datatable.p-datatable-gridlines .p-paginator-bottom {
    border-width: 0 1px 1px 1px;
  }
  .p-datatable.p-datatable-gridlines .p-datatable-thead > tr > th {
    border-width: 1px 0 1px 1px;
  }
  .p-datatable.p-datatable-gridlines .p-datatable-thead > tr > th:last-child {
    border-width: 1px;
  }
  .p-datatable.p-datatable-gridlines .p-datatable-tbody > tr > td {
    border-width: 1px 0 0 1px;
  }
  .p-datatable.p-datatable-gridlines .p-datatable-tbody > tr > td:last-child {
    border-width: 1px 1px 0 1px;
  }
  .p-datatable.p-datatable-gridlines .p-datatable-tbody > tr:last-child > td {
    border-width: 1px 0 1px 1px;
  }
  .p-datatable.p-datatable-gridlines .p-datatable-tbody > tr:last-child > td:last-child {
    border-width: 1px;
  }
  .p-datatable.p-datatable-gridlines .p-datatable-tfoot > tr > td {
    border-width: 1px 0 1px 1px;
  }
  .p-datatable.p-datatable-gridlines .p-datatable-tfoot > tr > td:last-child {
    border-width: 1px 1px 1px 1px;
  }
  .p-datatable.p-datatable-gridlines .p-datatable-thead + .p-datatable-tfoot > tr > td {
    border-width: 0 0 1px 1px;
  }
  .p-datatable.p-datatable-gridlines .p-datatable-thead + .p-datatable-tfoot > tr > td:last-child {
    border-width: 0 1px 1px 1px;
  }
  .p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody) .p-datatable-tbody > tr > td {
    border-width: 0 0 1px 1px;
  }
  .p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody) .p-datatable-tbody > tr > td:last-child {
    border-width: 0 1px 1px 1px;
  }
  .p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(.p-datatable-tfoot) .p-datatable-tbody > tr:last-child > td {
    border-width: 0 0 0 1px;
  }
  .p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(.p-datatable-tfoot) .p-datatable-tbody > tr:last-child > td:last-child {
    border-width: 0 1px 0 1px;
  }
  .p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd {
    background: rgba(0, 0, 0, 0.05);
  }
  .p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd.p-highlight {
    background: #007bff;
    color: #ffffff;
  }
  .p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd.p-highlight .p-row-toggler {
    color: #ffffff;
  }
  .p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd.p-highlight .p-row-toggler:hover {
    color: #ffffff;
  }
  .p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd + .p-row-expanded {
    background: rgba(0, 0, 0, 0.05);
  }
  .p-datatable.p-datatable-sm .p-datatable-header {
    padding: 0.5rem 0.5rem;
  }
  .p-datatable.p-datatable-sm .p-datatable-thead > tr > th {
    padding: 0.5rem 0.5rem;
  }
  .p-datatable.p-datatable-sm .p-datatable-tbody > tr > td {
    padding: 0.5rem 0.5rem;
  }
  .p-datatable.p-datatable-sm .p-datatable-tfoot > tr > td {
    padding: 0.5rem 0.5rem;
  }
  .p-datatable.p-datatable-sm .p-datatable-footer {
    padding: 0.5rem 0.5rem;
  }
  .p-datatable.p-datatable-lg .p-datatable-header {
    padding: 1.25rem 1.25rem;
  }
  .p-datatable.p-datatable-lg .p-datatable-thead > tr > th {
    padding: 1.25rem 1.25rem;
  }
  .p-datatable.p-datatable-lg .p-datatable-tbody > tr > td {
    padding: 1.25rem 1.25rem;
  }
  .p-datatable.p-datatable-lg .p-datatable-tfoot > tr > td {
    padding: 1.25rem 1.25rem;
  }
  .p-datatable.p-datatable-lg .p-datatable-footer {
    padding: 1.25rem 1.25rem;
  }

  .p-datatable-drag-selection-helper {
    background: rgba(0, 123, 255, 0.16);
  }

  .p-dataview .p-paginator-top {
    border-width: 1px 0 0 0;
    border-radius: 0;
  }
  .p-dataview .p-paginator-bottom {
    border-width: 1px 0 0 0;
    border-radius: 0;
  }
  .p-dataview .p-dataview-header {
    background: #efefef;
    color: #212529;
    border: solid #dee2e6;
    border-width: 1px 0 0 0;
    padding: 1rem 1rem;
    font-weight: 600;
  }
  .p-dataview .p-dataview-content {
    background: #ffffff;
    color: #212529;
    border: 0 none;
    padding: 0;
  }
  .p-dataview.p-dataview-list .p-dataview-content > .p-grid > div {
    border: 1px solid #dee2e6;
    border-width: 1px 0 0 0;
  }
  .p-dataview .p-dataview-footer {
    background: #efefef;
    color: #212529;
    border: 1px solid #dee2e6;
    border-width: 1px 0 1px 0;
    padding: 1rem 1rem;
    font-weight: 600;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .p-dataview .p-dataview-loading-icon {
    font-size: 2rem;
  }
  .p-dataview .p-dataview-loading-icon.p-icon {
    width: 2rem;
    height: 2rem;
  }

  .p-datascroller .p-paginator-top {
    border-width: 1px 0 0 0;
    border-radius: 0;
  }
  .p-datascroller .p-paginator-bottom {
    border-width: 1px 0 0 0;
    border-radius: 0;
  }
  .p-datascroller .p-datascroller-header {
    background: #efefef;
    color: #212529;
    border: solid #dee2e6;
    border-width: 1px 0 0 0;
    padding: 1rem 1rem;
    font-weight: 600;
  }
  .p-datascroller .p-datascroller-content {
    background: #ffffff;
    color: #212529;
    border: 0 none;
    padding: 0;
  }
  .p-datascroller.p-datascroller-inline .p-datascroller-list > li {
    border: 1px solid #dee2e6;
    border-width: 1px 0 0 0;
  }
  .p-datascroller .p-datascroller-footer {
    background: #efefef;
    color: #212529;
    border: 1px solid #dee2e6;
    border-width: 1px 0 1px 0;
    padding: 1rem 1rem;
    font-weight: 600;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  .p-column-filter-row .p-column-filter-menu-button,
.p-column-filter-row .p-column-filter-clear-button {
    margin-left: 0.5rem;
  }

  .p-column-filter-menu-button {
    width: 2rem;
    height: 2rem;
    color: #6c757d;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: box-shadow 0.15s;
  }
  .p-column-filter-menu-button:hover {
    color: #495057;
    border-color: transparent;
    background: transparent;
  }
  .p-column-filter-menu-button.p-column-filter-menu-button-open, .p-column-filter-menu-button.p-column-filter-menu-button-open:hover {
    background: transparent;
    color: #495057;
  }
  .p-column-filter-menu-button.p-column-filter-menu-button-active, .p-column-filter-menu-button.p-column-filter-menu-button-active:hover {
    background: #007bff;
    color: #ffffff;
  }
  .p-column-filter-menu-button:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }

  .p-column-filter-clear-button {
    width: 2rem;
    height: 2rem;
    color: #6c757d;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: box-shadow 0.15s;
  }
  .p-column-filter-clear-button:hover {
    color: #495057;
    border-color: transparent;
    background: transparent;
  }
  .p-column-filter-clear-button:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }

  .p-column-filter-overlay {
    background: #ffffff;
    color: #212529;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    box-shadow: none;
    min-width: 12.5rem;
  }
  .p-column-filter-overlay .p-column-filter-row-items {
    padding: 0.5rem 0;
  }
  .p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item {
    margin: 0;
    padding: 0.5rem 1.5rem;
    border: 0 none;
    color: #212529;
    background: transparent;
    transition: box-shadow 0.15s;
    border-radius: 0;
  }
  .p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item.p-highlight {
    color: #ffffff;
    background: #007bff;
  }
  .p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item:not(.p-highlight):not(.p-disabled):hover {
    color: #212529;
    background: #e9ecef;
  }
  .p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem rgba(38, 143, 255, 0.5);
  }
  .p-column-filter-overlay .p-column-filter-row-items .p-column-filter-separator {
    border-top: 1px solid #dee2e6;
    margin: 0.5rem 0;
  }

  .p-column-filter-overlay-menu .p-column-filter-operator {
    padding: 0.75rem 1.5rem;
    border-bottom: 1px solid #dee2e6;
    color: #212529;
    background: #efefef;
    margin: 0;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }
  .p-column-filter-overlay-menu .p-column-filter-constraint {
    padding: 1.25rem;
    border-bottom: 1px solid #dee2e6;
  }
  .p-column-filter-overlay-menu .p-column-filter-constraint .p-column-filter-matchmode-dropdown {
    margin-bottom: 0.5rem;
  }
  .p-column-filter-overlay-menu .p-column-filter-constraint .p-column-filter-remove-button {
    margin-top: 0.5rem;
  }
  .p-column-filter-overlay-menu .p-column-filter-constraint:last-child {
    border-bottom: 0 none;
  }
  .p-column-filter-overlay-menu .p-column-filter-add-rule {
    padding: 0.5rem 1.25rem;
  }
  .p-column-filter-overlay-menu .p-column-filter-buttonbar {
    padding: 1.25rem;
  }

  .p-orderlist .p-orderlist-controls {
    padding: 1.25rem;
  }
  .p-orderlist .p-orderlist-controls .p-button {
    margin-bottom: 0.5rem;
  }
  .p-orderlist .p-orderlist-header {
    background: #efefef;
    color: #212529;
    border: 1px solid #dee2e6;
    padding: 1rem 1.25rem;
    font-weight: 600;
    border-bottom: 0 none;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }
  .p-orderlist .p-orderlist-filter-container {
    padding: 1rem 1.25rem;
    background: #ffffff;
    border: 1px solid #dee2e6;
    border-bottom: 0 none;
  }
  .p-orderlist .p-orderlist-filter-container .p-orderlist-filter-input {
    padding-right: 1.75rem;
  }
  .p-orderlist .p-orderlist-filter-container .p-orderlist-filter-icon {
    right: 0.75rem;
    color: #495057;
  }
  .p-orderlist .p-orderlist-list {
    border: 1px solid #dee2e6;
    background: #ffffff;
    color: #212529;
    padding: 0.5rem 0;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .p-orderlist .p-orderlist-list .p-orderlist-item {
    padding: 0.5rem 1.5rem;
    margin: 0;
    border: 0 none;
    color: #212529;
    background: transparent;
    transition: transform 0.15s, box-shadow 0.15s;
  }
  .p-orderlist .p-orderlist-list .p-orderlist-item:not(.p-highlight):hover {
    background: #e9ecef;
    color: #212529;
  }
  .p-orderlist .p-orderlist-list .p-orderlist-item:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem rgba(38, 143, 255, 0.5);
  }
  .p-orderlist .p-orderlist-list .p-orderlist-item.p-highlight {
    color: #ffffff;
    background: #007bff;
  }
  .p-orderlist.p-orderlist-striped .p-orderlist-list .p-orderlist-item:nth-child(even) {
    background: rgba(0, 0, 0, 0.05);
  }
  .p-orderlist.p-orderlist-striped .p-orderlist-list .p-orderlist-item:nth-child(even):hover {
    background: #e9ecef;
  }

  .p-organizationchart .p-organizationchart-node-content.p-organizationchart-selectable-node:not(.p-highlight):hover {
    background: #e9ecef;
    color: #212529;
  }
  .p-organizationchart .p-organizationchart-node-content.p-highlight {
    background: #007bff;
    color: #ffffff;
  }
  .p-organizationchart .p-organizationchart-node-content.p-highlight .p-node-toggler i {
    color: #003e80;
  }
  .p-organizationchart .p-organizationchart-line-down {
    background: #dee2e6;
  }
  .p-organizationchart .p-organizationchart-line-left {
    border-right: 1px solid #dee2e6;
    border-color: #dee2e6;
  }
  .p-organizationchart .p-organizationchart-line-top {
    border-top: 1px solid #dee2e6;
    border-color: #dee2e6;
  }
  .p-organizationchart .p-organizationchart-node-content {
    border: 1px solid #dee2e6;
    background: #ffffff;
    color: #212529;
    padding: 1.25rem;
  }
  .p-organizationchart .p-organizationchart-node-content .p-node-toggler {
    background: inherit;
    color: inherit;
    border-radius: 50%;
  }
  .p-organizationchart .p-organizationchart-node-content .p-node-toggler:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }

  .p-paginator {
    background: #ffffff;
    color: #007bff;
    border: solid #dee2e6;
    border-width: 0;
    padding: 0.75rem;
    border-radius: 4px;
  }
  .p-paginator .p-paginator-first,
.p-paginator .p-paginator-prev,
.p-paginator .p-paginator-next,
.p-paginator .p-paginator-last {
    background-color: #ffffff;
    border: 1px solid #dee2e6;
    color: #007bff;
    min-width: 2.357rem;
    height: 2.357rem;
    margin: 0 0 0 -1px;
    transition: box-shadow 0.15s;
    border-radius: 0;
  }
  .p-paginator .p-paginator-first:not(.p-disabled):not(.p-highlight):hover,
.p-paginator .p-paginator-prev:not(.p-disabled):not(.p-highlight):hover,
.p-paginator .p-paginator-next:not(.p-disabled):not(.p-highlight):hover,
.p-paginator .p-paginator-last:not(.p-disabled):not(.p-highlight):hover {
    background: #e9ecef;
    border-color: #dee2e6;
    color: #007bff;
  }
  .p-paginator .p-paginator-first {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .p-paginator .p-paginator-last {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .p-paginator .p-dropdown {
    margin-left: 0.5rem;
    height: 2.357rem;
  }
  .p-paginator .p-dropdown .p-dropdown-label {
    padding-right: 0;
  }
  .p-paginator .p-paginator-page-input {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  .p-paginator .p-paginator-page-input .p-inputtext {
    max-width: 2.357rem;
  }
  .p-paginator .p-paginator-current {
    background-color: #ffffff;
    border: 1px solid #dee2e6;
    color: #007bff;
    min-width: 2.357rem;
    height: 2.357rem;
    margin: 0 0 0 -1px;
    padding: 0 0.5rem;
  }
  .p-paginator .p-paginator-pages .p-paginator-page {
    background-color: #ffffff;
    border: 1px solid #dee2e6;
    color: #007bff;
    min-width: 2.357rem;
    height: 2.357rem;
    margin: 0 0 0 -1px;
    transition: box-shadow 0.15s;
    border-radius: 0;
  }
  .p-paginator .p-paginator-pages .p-paginator-page.p-highlight {
    background: #007bff;
    border-color: #007bff;
    color: #ffffff;
  }
  .p-paginator .p-paginator-pages .p-paginator-page:not(.p-highlight):hover {
    background: #e9ecef;
    border-color: #dee2e6;
    color: #007bff;
  }

  .p-picklist .p-picklist-buttons {
    padding: 1.25rem;
  }
  .p-picklist .p-picklist-buttons .p-button {
    margin-bottom: 0.5rem;
  }
  .p-picklist .p-picklist-header {
    background: #efefef;
    color: #212529;
    border: 1px solid #dee2e6;
    padding: 1rem 1.25rem;
    font-weight: 600;
    border-bottom: 0 none;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }
  .p-picklist .p-picklist-filter-container {
    padding: 1rem 1.25rem;
    background: #ffffff;
    border: 1px solid #dee2e6;
    border-bottom: 0 none;
  }
  .p-picklist .p-picklist-filter-container .p-picklist-filter-input {
    padding-right: 1.75rem;
  }
  .p-picklist .p-picklist-filter-container .p-picklist-filter-icon {
    right: 0.75rem;
    color: #495057;
  }
  .p-picklist .p-picklist-list {
    border: 1px solid #dee2e6;
    background: #ffffff;
    color: #212529;
    padding: 0.5rem 0;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .p-picklist .p-picklist-list .p-picklist-item {
    padding: 0.5rem 1.5rem;
    margin: 0;
    border: 0 none;
    color: #212529;
    background: transparent;
    transition: transform 0.15s, box-shadow 0.15s;
  }
  .p-picklist .p-picklist-list .p-picklist-item:not(.p-highlight):hover {
    background: #e9ecef;
    color: #212529;
  }
  .p-picklist .p-picklist-list .p-picklist-item:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem rgba(38, 143, 255, 0.5);
  }
  .p-picklist .p-picklist-list .p-picklist-item.p-highlight {
    color: #ffffff;
    background: #007bff;
  }

  .p-tree {
    border: 1px solid #dee2e6;
    background: #ffffff;
    color: #212529;
    padding: 1.25rem;
    border-radius: 4px;
  }
  .p-tree .p-tree-container .p-treenode {
    padding: 0.143rem;
  }
  .p-tree .p-tree-container .p-treenode .p-treenode-content {
    border-radius: 4px;
    transition: box-shadow 0.15s;
    padding: 0.286rem;
  }
  .p-tree .p-tree-container .p-treenode .p-treenode-content .p-tree-toggler {
    margin-right: 0.5rem;
    width: 2rem;
    height: 2rem;
    color: #6c757d;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: box-shadow 0.15s;
  }
  .p-tree .p-tree-container .p-treenode .p-treenode-content .p-tree-toggler:enabled:hover {
    color: #495057;
    border-color: transparent;
    background: transparent;
  }
  .p-tree .p-tree-container .p-treenode .p-treenode-content .p-tree-toggler:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }
  .p-tree .p-tree-container .p-treenode .p-treenode-content .p-treenode-icon {
    margin-right: 0.5rem;
    color: #6c757d;
  }
  .p-tree .p-tree-container .p-treenode .p-treenode-content .p-checkbox {
    margin-right: 0.5rem;
  }
  .p-tree .p-tree-container .p-treenode .p-treenode-content .p-checkbox .p-indeterminate .p-checkbox-icon {
    color: #212529;
  }
  .p-tree .p-tree-container .p-treenode .p-treenode-content:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem rgba(38, 143, 255, 0.5);
  }
  .p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight {
    background: #007bff;
    color: #ffffff;
  }
  .p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight .p-tree-toggler,
.p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight .p-treenode-icon {
    color: #ffffff;
  }
  .p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight .p-tree-toggler:hover,
.p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight .p-treenode-icon:hover {
    color: #ffffff;
  }
  .p-tree .p-tree-container .p-treenode .p-treenode-content.p-treenode-selectable:not(.p-highlight):hover {
    background: #e9ecef;
    color: #212529;
  }
  .p-tree .p-tree-container .p-treenode .p-treenode-content.p-treenode-dragover {
    background: #e9ecef;
    color: #212529;
  }
  .p-tree .p-tree-filter-container {
    margin-bottom: 0.5rem;
  }
  .p-tree .p-tree-filter-container .p-tree-filter {
    width: 100%;
    padding-right: 1.75rem;
  }
  .p-tree .p-tree-filter-container .p-tree-filter-icon {
    right: 0.75rem;
    color: #495057;
  }
  .p-tree .p-treenode-children {
    padding: 0 0 0 1rem;
  }
  .p-tree .p-tree-loading-icon {
    font-size: 2rem;
  }
  .p-tree .p-tree-loading-icon.p-icon {
    width: 2rem;
    height: 2rem;
  }
  .p-tree .p-treenode-droppoint {
    height: 0.5rem;
  }
  .p-tree .p-treenode-droppoint.p-treenode-droppoint-active {
    background: #0062cc;
  }

  .p-treetable .p-paginator-top {
    border-width: 1px 0 0 0;
    border-radius: 0;
  }
  .p-treetable .p-paginator-bottom {
    border-width: 1px 0 0 0;
    border-radius: 0;
  }
  .p-treetable .p-treetable-header {
    background: #efefef;
    color: #212529;
    border: solid #dee2e6;
    border-width: 1px 0 0 0;
    padding: 1rem 1rem;
    font-weight: 600;
  }
  .p-treetable .p-treetable-footer {
    background: #efefef;
    color: #212529;
    border: 1px solid #dee2e6;
    border-width: 1px 0 1px 0;
    padding: 1rem 1rem;
    font-weight: 600;
  }
  .p-treetable .p-treetable-thead > tr > th {
    text-align: left;
    padding: 1rem 1rem;
    border: 1px solid #dee2e6;
    border-width: 1px 0 2px 0;
    font-weight: 600;
    color: #212529;
    background: #ffffff;
    transition: box-shadow 0.15s;
  }
  .p-treetable .p-treetable-tfoot > tr > td {
    text-align: left;
    padding: 1rem 1rem;
    border: 1px solid #dee2e6;
    border-width: 1px 0 1px 0;
    font-weight: 600;
    color: #212529;
    background: #ffffff;
  }
  .p-treetable .p-sortable-column {
    outline-color: rgba(38, 143, 255, 0.5);
  }
  .p-treetable .p-sortable-column .p-sortable-column-icon {
    color: #6c757d;
    margin-left: 0.5rem;
  }
  .p-treetable .p-sortable-column .p-sortable-column-badge {
    border-radius: 50%;
    height: 1.143rem;
    min-width: 1.143rem;
    line-height: 1.143rem;
    color: #ffffff;
    background: #007bff;
    margin-left: 0.5rem;
  }
  .p-treetable .p-sortable-column:not(.p-highlight):hover {
    background: #e9ecef;
    color: #212529;
  }
  .p-treetable .p-sortable-column:not(.p-highlight):hover .p-sortable-column-icon {
    color: #6c757d;
  }
  .p-treetable .p-sortable-column.p-highlight {
    background: #ffffff;
    color: #007bff;
  }
  .p-treetable .p-sortable-column.p-highlight .p-sortable-column-icon {
    color: #007bff;
  }
  .p-treetable .p-treetable-tbody > tr {
    background: #ffffff;
    color: #212529;
    transition: box-shadow 0.15s;
  }
  .p-treetable .p-treetable-tbody > tr > td {
    text-align: left;
    border: 1px solid #dee2e6;
    border-width: 1px 0 0 0;
    padding: 1rem 1rem;
  }
  .p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler {
    width: 2rem;
    height: 2rem;
    color: #6c757d;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: box-shadow 0.15s;
    margin-right: 0.5rem;
  }
  .p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler:enabled:hover {
    color: #495057;
    border-color: transparent;
    background: transparent;
  }
  .p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }
  .p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler + .p-checkbox {
    margin-right: 0.5rem;
  }
  .p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler + .p-checkbox .p-indeterminate .p-checkbox-icon {
    color: #212529;
  }
  .p-treetable .p-treetable-tbody > tr:focus-visible {
    outline: 0.15rem solid rgba(38, 143, 255, 0.5);
    outline-offset: -0.15rem;
  }
  .p-treetable .p-treetable-tbody > tr.p-highlight {
    background: #007bff;
    color: #ffffff;
  }
  .p-treetable .p-treetable-tbody > tr.p-highlight .p-treetable-toggler {
    color: #ffffff;
  }
  .p-treetable .p-treetable-tbody > tr.p-highlight .p-treetable-toggler:hover {
    color: #ffffff;
  }
  .p-treetable.p-treetable-selectable .p-treetable-tbody > tr:not(.p-highlight):hover, .p-treetable.p-treetable-hoverable-rows .p-treetable-tbody > tr:not(.p-highlight):hover {
    background: #e9ecef;
    color: #212529;
  }
  .p-treetable.p-treetable-selectable .p-treetable-tbody > tr:not(.p-highlight):hover .p-treetable-toggler, .p-treetable.p-treetable-hoverable-rows .p-treetable-tbody > tr:not(.p-highlight):hover .p-treetable-toggler {
    color: #212529;
  }
  .p-treetable .p-column-resizer-helper {
    background: #007bff;
  }
  .p-treetable .p-treetable-scrollable-header,
.p-treetable .p-treetable-scrollable-footer {
    background: #efefef;
  }
  .p-treetable .p-treetable-loading-icon {
    font-size: 2rem;
  }
  .p-treetable .p-treetable-loading-icon.p-icon {
    width: 2rem;
    height: 2rem;
  }
  .p-treetable.p-treetable-gridlines .p-treetable-header {
    border-width: 1px 1px 0 1px;
  }
  .p-treetable.p-treetable-gridlines .p-treetable-footer {
    border-width: 0 1px 1px 1px;
  }
  .p-treetable.p-treetable-gridlines .p-treetable-top {
    border-width: 0 1px 0 1px;
  }
  .p-treetable.p-treetable-gridlines .p-treetable-bottom {
    border-width: 0 1px 1px 1px;
  }
  .p-treetable.p-treetable-gridlines .p-treetable-thead > tr > th {
    border-width: 1px;
  }
  .p-treetable.p-treetable-gridlines .p-treetable-tbody > tr > td {
    border-width: 1px;
  }
  .p-treetable.p-treetable-gridlines .p-treetable-tfoot > tr > td {
    border-width: 1px;
  }
  .p-treetable.p-treetable-striped .p-treetable-tbody > tr.p-row-odd {
    background: rgba(0, 0, 0, 0.05);
  }
  .p-treetable.p-treetable-striped .p-treetable-tbody > tr.p-row-odd.p-highlight {
    background: #007bff;
    color: #ffffff;
  }
  .p-treetable.p-treetable-striped .p-treetable-tbody > tr.p-row-odd.p-highlight .p-row-toggler {
    color: #ffffff;
  }
  .p-treetable.p-treetable-striped .p-treetable-tbody > tr.p-row-odd.p-highlight .p-row-toggler:hover {
    color: #ffffff;
  }
  .p-treetable.p-treetable-striped .p-treetable-tbody > tr.p-row-odd + .p-row-expanded {
    background: rgba(0, 0, 0, 0.05);
  }
  .p-treetable.p-treetable-sm .p-treetable-header {
    padding: 0.875rem 0.875rem;
  }
  .p-treetable.p-treetable-sm .p-treetable-thead > tr > th {
    padding: 0.5rem 0.5rem;
  }
  .p-treetable.p-treetable-sm .p-treetable-tbody > tr > td {
    padding: 0.5rem 0.5rem;
  }
  .p-treetable.p-treetable-sm .p-treetable-tfoot > tr > td {
    padding: 0.5rem 0.5rem;
  }
  .p-treetable.p-treetable-sm .p-treetable-footer {
    padding: 0.5rem 0.5rem;
  }
  .p-treetable.p-treetable-lg .p-treetable-header {
    padding: 1.25rem 1.25rem;
  }
  .p-treetable.p-treetable-lg .p-treetable-thead > tr > th {
    padding: 1.25rem 1.25rem;
  }
  .p-treetable.p-treetable-lg .p-treetable-tbody > tr > td {
    padding: 1.25rem 1.25rem;
  }
  .p-treetable.p-treetable-lg .p-treetable-tfoot > tr > td {
    padding: 1.25rem 1.25rem;
  }
  .p-treetable.p-treetable-lg .p-treetable-footer {
    padding: 1.25rem 1.25rem;
  }

  .p-timeline .p-timeline-event-marker {
    border: 0 none;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    background-color: #007bff;
  }
  .p-timeline .p-timeline-event-connector {
    background-color: #dee2e6;
  }
  .p-timeline.p-timeline-vertical .p-timeline-event-opposite,
.p-timeline.p-timeline-vertical .p-timeline-event-content {
    padding: 0 1rem;
  }
  .p-timeline.p-timeline-vertical .p-timeline-event-connector {
    width: 2px;
  }
  .p-timeline.p-timeline-horizontal .p-timeline-event-opposite,
.p-timeline.p-timeline-horizontal .p-timeline-event-content {
    padding: 1rem 0;
  }
  .p-timeline.p-timeline-horizontal .p-timeline-event-connector {
    height: 2px;
  }

  .p-accordion .p-accordion-header .p-accordion-header-link {
    padding: 1rem 1.25rem;
    border: 1px solid #dee2e6;
    color: #212529;
    background: #efefef;
    font-weight: 600;
    border-radius: 4px;
    transition: box-shadow 0.15s;
  }
  .p-accordion .p-accordion-header .p-accordion-header-link .p-accordion-toggle-icon {
    margin-right: 0.5rem;
  }
  .p-accordion .p-accordion-header:not(.p-disabled) .p-accordion-header-link:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }
  .p-accordion .p-accordion-header:not(.p-highlight):not(.p-disabled):hover .p-accordion-header-link {
    background: #e9ecef;
    border-color: #dee2e6;
    color: #212529;
  }
  .p-accordion .p-accordion-header:not(.p-disabled).p-highlight .p-accordion-header-link {
    background: #efefef;
    border-color: #dee2e6;
    color: #212529;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .p-accordion .p-accordion-header:not(.p-disabled).p-highlight:hover .p-accordion-header-link {
    border-color: #dee2e6;
    background: #e9ecef;
    color: #212529;
  }
  .p-accordion .p-accordion-content {
    padding: 1.25rem;
    border: 1px solid #dee2e6;
    background: #ffffff;
    color: #212529;
    border-top: 0;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .p-accordion .p-accordion-tab {
    margin-bottom: 0;
  }
  .p-accordion .p-accordion-tab .p-accordion-header .p-accordion-header-link {
    border-radius: 0;
  }
  .p-accordion .p-accordion-tab .p-accordion-content {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .p-accordion .p-accordion-tab:not(:first-child) .p-accordion-header .p-accordion-header-link {
    border-top: 0 none;
  }
  .p-accordion .p-accordion-tab:not(:first-child) .p-accordion-header:not(.p-highlight):not(.p-disabled):hover .p-accordion-header-link, .p-accordion .p-accordion-tab:not(:first-child) .p-accordion-header:not(.p-disabled).p-highlight:hover .p-accordion-header-link {
    border-top: 0 none;
  }
  .p-accordion .p-accordion-tab:first-child .p-accordion-header .p-accordion-header-link {
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }
  .p-accordion .p-accordion-tab:last-child .p-accordion-header:not(.p-highlight) .p-accordion-header-link {
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .p-accordion .p-accordion-tab:last-child .p-accordion-header:not(.p-highlight) .p-accordion-content {
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .p-card {
    background: #ffffff;
    color: #212529;
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
    border-radius: 4px;
  }
  .p-card .p-card-body {
    padding: 1.5rem;
  }
  .p-card .p-card-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  .p-card .p-card-subtitle {
    font-weight: 400;
    margin-bottom: 0.5rem;
    color: #6c757d;
  }
  .p-card .p-card-content {
    padding: 1rem 0;
  }
  .p-card .p-card-footer {
    padding: 1rem 0 0 0;
  }

  .p-fieldset {
    border: 1px solid #dee2e6;
    background: #ffffff;
    color: #212529;
    border-radius: 4px;
  }
  .p-fieldset .p-fieldset-legend {
    padding: 1rem 1.25rem;
    border: 1px solid #dee2e6;
    color: #212529;
    background: #efefef;
    font-weight: 600;
    border-radius: 4px;
  }
  .p-fieldset.p-fieldset-toggleable .p-fieldset-legend {
    padding: 0;
    transition: box-shadow 0.15s;
  }
  .p-fieldset.p-fieldset-toggleable .p-fieldset-legend a {
    padding: 1rem 1.25rem;
    color: #212529;
    border-radius: 4px;
    transition: box-shadow 0.15s;
  }
  .p-fieldset.p-fieldset-toggleable .p-fieldset-legend a .p-fieldset-toggler {
    margin-right: 0.5rem;
  }
  .p-fieldset.p-fieldset-toggleable .p-fieldset-legend a:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }
  .p-fieldset.p-fieldset-toggleable .p-fieldset-legend:hover {
    background: #e9ecef;
    border-color: #dee2e6;
    color: #212529;
  }
  .p-fieldset .p-fieldset-content {
    padding: 1.25rem;
  }

  .p-divider .p-divider-content {
    background-color: #ffffff;
  }
  .p-divider.p-divider-horizontal {
    margin: 1rem 0;
    padding: 0 1rem;
  }
  .p-divider.p-divider-horizontal:before {
    border-top: 1px #dee2e6;
  }
  .p-divider.p-divider-horizontal .p-divider-content {
    padding: 0 0.5rem;
  }
  .p-divider.p-divider-vertical {
    margin: 0 1rem;
    padding: 1rem 0;
  }
  .p-divider.p-divider-vertical:before {
    border-left: 1px #dee2e6;
  }
  .p-divider.p-divider-vertical .p-divider-content {
    padding: 0.5rem 0;
  }

  .p-panel .p-panel-header {
    border: 1px solid #dee2e6;
    padding: 1rem 1.25rem;
    background: #efefef;
    color: #212529;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }
  .p-panel .p-panel-header .p-panel-title {
    font-weight: 600;
  }
  .p-panel .p-panel-header .p-panel-header-icon {
    width: 2rem;
    height: 2rem;
    color: #6c757d;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: box-shadow 0.15s;
  }
  .p-panel .p-panel-header .p-panel-header-icon:enabled:hover {
    color: #495057;
    border-color: transparent;
    background: transparent;
  }
  .p-panel .p-panel-header .p-panel-header-icon:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }
  .p-panel.p-panel-toggleable .p-panel-header {
    padding: 0.5rem 1.25rem;
  }
  .p-panel .p-panel-content {
    padding: 1.25rem;
    border: 1px solid #dee2e6;
    background: #ffffff;
    color: #212529;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    border-top: 0 none;
  }
  .p-panel .p-panel-footer {
    padding: 0.5rem 1.25rem;
    border: 1px solid #dee2e6;
    background: #ffffff;
    color: #212529;
    border-top: 0 none;
  }

  .p-splitter {
    border: 1px solid #dee2e6;
    background: #ffffff;
    border-radius: 4px;
    color: #212529;
  }
  .p-splitter .p-splitter-gutter {
    transition: box-shadow 0.15s;
    background: #efefef;
  }
  .p-splitter .p-splitter-gutter .p-splitter-gutter-handle {
    background: #dee2e6;
  }
  .p-splitter .p-splitter-gutter-resizing {
    background: #dee2e6;
  }

  .p-scrollpanel .p-scrollpanel-bar {
    background: #efefef;
    border: 0 none;
  }

  .p-tabview .p-tabview-nav {
    background: transparent;
    border: 1px solid #dee2e6;
    border-width: 0 0 1px 0;
  }
  .p-tabview .p-tabview-nav li {
    margin-right: 0;
  }
  .p-tabview .p-tabview-nav li .p-tabview-nav-link {
    border: solid;
    border-width: 1px;
    border-color: #ffffff #ffffff #dee2e6 #ffffff;
    background: #ffffff;
    color: #6c757d;
    padding: 0.75rem 1rem;
    font-weight: 600;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    transition: box-shadow 0.15s;
    margin: 0 0 -1px 0;
  }
  .p-tabview .p-tabview-nav li .p-tabview-nav-link:not(.p-disabled):focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }
  .p-tabview .p-tabview-nav li:not(.p-highlight):not(.p-disabled):hover .p-tabview-nav-link {
    background: #ffffff;
    border-color: #dee2e6;
    color: #6c757d;
  }
  .p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
    background: #ffffff;
    border-color: #dee2e6 #dee2e6 #ffffff #dee2e6;
    color: #495057;
  }
  .p-tabview .p-tabview-close {
    margin-left: 0.5rem;
  }
  .p-tabview .p-tabview-nav-btn.p-link {
    background: #ffffff;
    color: #495057;
    width: 2.357rem;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    border-radius: 0;
  }
  .p-tabview .p-tabview-nav-btn.p-link:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }
  .p-tabview .p-tabview-panels {
    background: #ffffff;
    padding: 1.25rem;
    border: 0 none;
    color: #212529;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .p-toolbar {
    background: #efefef;
    border: 1px solid #dee2e6;
    padding: 1rem 1.25rem;
    border-radius: 4px;
    gap: 0.5rem;
  }
  .p-toolbar .p-toolbar-separator {
    margin: 0 0.5rem;
  }

  .p-confirm-popup {
    background: #ffffff;
    color: #212529;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    box-shadow: none;
  }
  .p-confirm-popup .p-confirm-popup-content {
    padding: 1.25rem;
  }
  .p-confirm-popup .p-confirm-popup-footer {
    text-align: right;
    padding: 0 1.25rem 1.25rem 1.25rem;
  }
  .p-confirm-popup .p-confirm-popup-footer button {
    margin: 0 0.5rem 0 0;
    width: auto;
  }
  .p-confirm-popup .p-confirm-popup-footer button:last-child {
    margin: 0;
  }
  .p-confirm-popup:after {
    border: solid transparent;
    border-color: rgba(255, 255, 255, 0);
    border-bottom-color: #ffffff;
  }
  .p-confirm-popup:before {
    border: solid transparent;
    border-color: rgba(0, 0, 0, 0);
    border-bottom-color: rgba(0, 0, 0, 0.2);
  }
  .p-confirm-popup.p-confirm-popup-flipped:after {
    border-top-color: #ffffff;
  }
  .p-confirm-popup.p-confirm-popup-flipped:before {
    border-top-color: rgba(0, 0, 0, 0.2);
  }
  .p-confirm-popup .p-confirm-popup-icon {
    font-size: 1.5rem;
  }
  .p-confirm-popup .p-confirm-popup-icon.p-icon {
    width: 1.5rem;
    height: 1.5rem;
  }
  .p-confirm-popup .p-confirm-popup-message {
    margin-left: 1rem;
  }

  .p-dialog {
    border-radius: 4px;
    box-shadow: none;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
  .p-dialog .p-dialog-header {
    border-bottom: 1px solid #e9ecef;
    background: #ffffff;
    color: #212529;
    padding: 1rem;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }
  .p-dialog .p-dialog-header .p-dialog-title {
    font-weight: 600;
    font-size: 1.25rem;
  }
  .p-dialog .p-dialog-header .p-dialog-header-icon {
    width: 2rem;
    height: 2rem;
    color: #6c757d;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: box-shadow 0.15s;
    margin-right: 0.5rem;
  }
  .p-dialog .p-dialog-header .p-dialog-header-icon:enabled:hover {
    color: #495057;
    border-color: transparent;
    background: transparent;
  }
  .p-dialog .p-dialog-header .p-dialog-header-icon:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }
  .p-dialog .p-dialog-header .p-dialog-header-icon:last-child {
    margin-right: 0;
  }
  .p-dialog .p-dialog-content {
    background: #ffffff;
    color: #212529;
    padding: 1rem;
  }
  .p-dialog .p-dialog-content:last-of-type {
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .p-dialog .p-dialog-footer {
    border-top: 1px solid #e9ecef;
    background: #ffffff;
    color: #212529;
    padding: 1rem;
    text-align: right;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .p-dialog .p-dialog-footer button {
    margin: 0 0.5rem 0 0;
    width: auto;
  }
  .p-dialog.p-dialog-maximized .p-dialog-header, .p-dialog.p-dialog-maximized .p-dialog-content:last-of-type {
    border-radius: 0;
  }
  .p-dialog.p-confirm-dialog .p-confirm-dialog-icon {
    font-size: 2rem;
  }
  .p-dialog.p-confirm-dialog .p-confirm-dialog-icon.p-icon {
    width: 2rem;
    height: 2rem;
  }
  .p-dialog.p-confirm-dialog .p-confirm-dialog-message {
    margin-left: 1rem;
  }

  .p-overlaypanel {
    background: #ffffff;
    color: #212529;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    box-shadow: none;
  }
  .p-overlaypanel .p-overlaypanel-content {
    padding: 1.25rem;
  }
  .p-overlaypanel .p-overlaypanel-close {
    background: #007bff;
    color: #ffffff;
    width: 2rem;
    height: 2rem;
    transition: box-shadow 0.15s;
    border-radius: 50%;
    position: absolute;
    top: -1rem;
    right: -1rem;
  }
  .p-overlaypanel .p-overlaypanel-close:enabled:hover {
    background: #0069d9;
    color: #ffffff;
  }
  .p-overlaypanel:after {
    border: solid transparent;
    border-color: rgba(255, 255, 255, 0);
    border-bottom-color: #ffffff;
  }
  .p-overlaypanel:before {
    border: solid transparent;
    border-color: rgba(0, 0, 0, 0);
    border-bottom-color: rgba(0, 0, 0, 0.2);
  }
  .p-overlaypanel.p-overlaypanel-flipped:after {
    border-top-color: #ffffff;
  }
  .p-overlaypanel.p-overlaypanel-flipped:before {
    border-top-color: rgba(0, 0, 0, 0.2);
  }

  .p-sidebar {
    background: #ffffff;
    color: #212529;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: none;
  }
  .p-sidebar .p-sidebar-header {
    padding: 1rem 1.25rem;
  }
  .p-sidebar .p-sidebar-header .p-sidebar-close,
.p-sidebar .p-sidebar-header .p-sidebar-icon {
    width: 2rem;
    height: 2rem;
    color: #6c757d;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: box-shadow 0.15s;
  }
  .p-sidebar .p-sidebar-header .p-sidebar-close:enabled:hover,
.p-sidebar .p-sidebar-header .p-sidebar-icon:enabled:hover {
    color: #495057;
    border-color: transparent;
    background: transparent;
  }
  .p-sidebar .p-sidebar-header .p-sidebar-close:focus-visible,
.p-sidebar .p-sidebar-header .p-sidebar-icon:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }
  .p-sidebar .p-sidebar-header + .p-sidebar-content {
    padding-top: 0;
  }
  .p-sidebar .p-sidebar-content {
    padding: 1.25rem;
  }

  .p-tooltip .p-tooltip-text {
    background: #212529;
    color: #ffffff;
    padding: 0.5rem 0.75rem;
    box-shadow: none;
    border-radius: 4px;
  }
  .p-tooltip.p-tooltip-right .p-tooltip-arrow {
    border-right-color: #212529;
  }
  .p-tooltip.p-tooltip-left .p-tooltip-arrow {
    border-left-color: #212529;
  }
  .p-tooltip.p-tooltip-top .p-tooltip-arrow {
    border-top-color: #212529;
  }
  .p-tooltip.p-tooltip-bottom .p-tooltip-arrow {
    border-bottom-color: #212529;
  }

  .p-fileupload .p-fileupload-buttonbar {
    background: #efefef;
    padding: 1rem 1.25rem;
    border: 1px solid #dee2e6;
    color: #212529;
    border-bottom: 0 none;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    gap: 0.5rem;
  }
  .p-fileupload .p-fileupload-buttonbar .p-button {
    margin-right: 0.5rem;
  }
  .p-fileupload .p-fileupload-content {
    background: #ffffff;
    padding: 2rem 1rem;
    border: 1px solid #dee2e6;
    color: #212529;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .p-fileupload .p-progressbar {
    height: 0.25rem;
  }
  .p-fileupload .p-fileupload-row > div {
    padding: 1rem 1rem;
  }
  .p-fileupload.p-fileupload-advanced .p-message {
    margin-top: 0;
  }

  .p-breadcrumb {
    background: #efefef;
    border: 0 none;
    border-radius: 4px;
    padding: 1rem;
  }
  .p-breadcrumb .p-breadcrumb-list li .p-menuitem-link {
    transition: box-shadow 0.15s;
    border-radius: 4px;
  }
  .p-breadcrumb .p-breadcrumb-list li .p-menuitem-link:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }
  .p-breadcrumb .p-breadcrumb-list li .p-menuitem-link .p-menuitem-text {
    color: #007bff;
  }
  .p-breadcrumb .p-breadcrumb-list li .p-menuitem-link .p-menuitem-icon {
    color: #007bff;
  }
  .p-breadcrumb .p-breadcrumb-list li.p-menuitem-separator {
    margin: 0 0.5rem 0 0.5rem;
    color: #6c757d;
  }
  .p-breadcrumb .p-breadcrumb-list li:last-child .p-menuitem-text {
    color: #6c757d;
  }
  .p-breadcrumb .p-breadcrumb-list li:last-child .p-menuitem-icon {
    color: #6c757d;
  }

  .p-contextmenu {
    padding: 0.5rem 0;
    background: #ffffff;
    color: #212529;
    border: 1px solid rgba(0, 0, 0, 0.15);
    box-shadow: none;
    border-radius: 4px;
    width: 12.5rem;
  }
  .p-contextmenu .p-menuitem-link {
    padding: 0.75rem 1rem;
    color: #212529;
    border-radius: 0;
    transition: box-shadow 0.15s;
    user-select: none;
  }
  .p-contextmenu .p-menuitem-link .p-menuitem-text {
    color: #212529;
  }
  .p-contextmenu .p-menuitem-link .p-menuitem-icon {
    color: #212529;
    margin-right: 0.5rem;
  }
  .p-contextmenu .p-menuitem-link .p-submenu-icon {
    color: #212529;
  }
  .p-contextmenu .p-menuitem-link:not(.p-disabled):hover {
    background: #e9ecef;
  }
  .p-contextmenu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {
    color: #212529;
  }
  .p-contextmenu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
    color: #212529;
  }
  .p-contextmenu .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {
    color: #212529;
  }
  .p-contextmenu .p-menuitem-link:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem rgba(38, 143, 255, 0.5);
  }
  .p-contextmenu .p-submenu-list {
    padding: 0.5rem 0;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.15);
    box-shadow: none;
    border-radius: 4px;
  }
  .p-contextmenu .p-menuitem.p-menuitem-active > .p-menuitem-link {
    background: #e9ecef;
  }
  .p-contextmenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-text {
    color: #212529;
  }
  .p-contextmenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-icon, .p-contextmenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-submenu-icon {
    color: #212529;
  }
  .p-contextmenu .p-menu-separator {
    border-top: 1px solid #dee2e6;
    margin: 0.5rem 0;
  }
  .p-contextmenu .p-submenu-icon {
    font-size: 0.875rem;
    transition: transform 0.15s;
  }
  .p-contextmenu .p-submenu-icon.p-icon {
    width: 0.875rem;
    height: 0.875rem;
  }

  .p-dock .p-dock-list {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 0.5rem 0.5rem;
    border-radius: 0.5rem;
  }
  .p-dock .p-dock-item {
    padding: 0.5rem;
  }
  .p-dock .p-dock-action {
    width: 4rem;
    height: 4rem;
  }
  .p-dock.p-dock-magnification.p-dock-top .p-dock-item-second-prev,
.p-dock.p-dock-magnification.p-dock-top .p-dock-item-second-next, .p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-second-prev,
.p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-second-next {
    margin: 0 0.9rem;
  }
  .p-dock.p-dock-magnification.p-dock-top .p-dock-item-prev,
.p-dock.p-dock-magnification.p-dock-top .p-dock-item-next, .p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-prev,
.p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-next {
    margin: 0 1.3rem;
  }
  .p-dock.p-dock-magnification.p-dock-top .p-dock-item-current, .p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-current {
    margin: 0 1.5rem;
  }
  .p-dock.p-dock-magnification.p-dock-left .p-dock-item-second-prev,
.p-dock.p-dock-magnification.p-dock-left .p-dock-item-second-next, .p-dock.p-dock-magnification.p-dock-right .p-dock-item-second-prev,
.p-dock.p-dock-magnification.p-dock-right .p-dock-item-second-next {
    margin: 0.9rem 0;
  }
  .p-dock.p-dock-magnification.p-dock-left .p-dock-item-prev,
.p-dock.p-dock-magnification.p-dock-left .p-dock-item-next, .p-dock.p-dock-magnification.p-dock-right .p-dock-item-prev,
.p-dock.p-dock-magnification.p-dock-right .p-dock-item-next {
    margin: 1.3rem 0;
  }
  .p-dock.p-dock-magnification.p-dock-left .p-dock-item-current, .p-dock.p-dock-magnification.p-dock-right .p-dock-item-current {
    margin: 1.5rem 0;
  }

  @media screen and (max-width: 960px) {
    .p-dock.p-dock-top .p-dock-container, .p-dock.p-dock-bottom .p-dock-container {
      overflow-x: auto;
      width: 100%;
    }
    .p-dock.p-dock-top .p-dock-container .p-dock-list, .p-dock.p-dock-bottom .p-dock-container .p-dock-list {
      margin: 0 auto;
    }
    .p-dock.p-dock-left .p-dock-container, .p-dock.p-dock-right .p-dock-container {
      overflow-y: auto;
      height: 100%;
    }
    .p-dock.p-dock-left .p-dock-container .p-dock-list, .p-dock.p-dock-right .p-dock-container .p-dock-list {
      margin: auto 0;
    }
    .p-dock.p-dock-magnification.p-dock-top .p-dock-item-second-prev,
.p-dock.p-dock-magnification.p-dock-top .p-dock-item-second-next,
.p-dock.p-dock-magnification.p-dock-top .p-dock-item-prev,
.p-dock.p-dock-magnification.p-dock-top .p-dock-item-next,
.p-dock.p-dock-magnification.p-dock-top .p-dock-item-current, .p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-second-prev,
.p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-second-next,
.p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-prev,
.p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-next,
.p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-current, .p-dock.p-dock-magnification.p-dock-left .p-dock-item-second-prev,
.p-dock.p-dock-magnification.p-dock-left .p-dock-item-second-next,
.p-dock.p-dock-magnification.p-dock-left .p-dock-item-prev,
.p-dock.p-dock-magnification.p-dock-left .p-dock-item-next,
.p-dock.p-dock-magnification.p-dock-left .p-dock-item-current, .p-dock.p-dock-magnification.p-dock-right .p-dock-item-second-prev,
.p-dock.p-dock-magnification.p-dock-right .p-dock-item-second-next,
.p-dock.p-dock-magnification.p-dock-right .p-dock-item-prev,
.p-dock.p-dock-magnification.p-dock-right .p-dock-item-next,
.p-dock.p-dock-magnification.p-dock-right .p-dock-item-current {
      transform: none;
      margin: 0;
    }
  }
  .p-megamenu {
    padding: 0.5rem 1rem;
    background: #efefef;
    color: rgba(0, 0, 0, 0.9);
    border: 0 none;
    border-radius: 4px;
  }
  .p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link {
    padding: 1rem;
    color: rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    transition: box-shadow 0.15s;
    user-select: none;
  }
  .p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link .p-menuitem-text {
    color: rgba(0, 0, 0, 0.5);
  }
  .p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link .p-menuitem-icon {
    color: rgba(0, 0, 0, 0.5);
    margin-right: 0.5rem;
  }
  .p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link .p-submenu-icon {
    color: rgba(0, 0, 0, 0.5);
    margin-left: 0.5rem;
  }
  .p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover {
    background: transparent;
  }
  .p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {
    color: rgba(0, 0, 0, 0.7);
  }
  .p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
    color: rgba(0, 0, 0, 0.7);
  }
  .p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {
    color: rgba(0, 0, 0, 0.7);
  }
  .p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem rgba(38, 143, 255, 0.5);
  }
  .p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link > .p-submenu-icon {
    margin-left: auto;
  }
  .p-megamenu .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link,
.p-megamenu .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover {
    background: transparent;
  }
  .p-megamenu .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-text,
.p-megamenu .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {
    color: rgba(0, 0, 0, 0.9);
  }
  .p-megamenu .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-icon,
.p-megamenu .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
    color: rgba(0, 0, 0, 0.9);
  }
  .p-megamenu .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link .p-submenu-icon,
.p-megamenu .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {
    color: rgba(0, 0, 0, 0.9);
  }
  .p-megamenu .p-menuitem-link {
    padding: 0.75rem 1rem;
    color: #212529;
    border-radius: 0;
    transition: box-shadow 0.15s;
    user-select: none;
  }
  .p-megamenu .p-menuitem-link .p-menuitem-text {
    color: #212529;
  }
  .p-megamenu .p-menuitem-link .p-menuitem-icon {
    color: #212529;
    margin-right: 0.5rem;
  }
  .p-megamenu .p-menuitem-link .p-submenu-icon {
    color: #212529;
  }
  .p-megamenu .p-menuitem-link:not(.p-disabled):hover {
    background: #e9ecef;
  }
  .p-megamenu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {
    color: #212529;
  }
  .p-megamenu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
    color: #212529;
  }
  .p-megamenu .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {
    color: #212529;
  }
  .p-megamenu .p-menuitem-link:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem rgba(38, 143, 255, 0.5);
  }
  .p-megamenu .p-megamenu-panel {
    background: #ffffff;
    color: #212529;
    border: 1px solid rgba(0, 0, 0, 0.15);
    box-shadow: none;
  }
  .p-megamenu .p-megamenu-submenu-header {
    margin: 0;
    padding: 0.75rem 1rem;
    color: #212529;
    background: #ffffff;
    font-weight: 600;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }
  .p-megamenu .p-megamenu-submenu {
    padding: 0.5rem 0;
    width: 12.5rem;
  }
  .p-megamenu .p-megamenu-submenu .p-menu-separator {
    border-top: 1px solid #dee2e6;
    margin: 0.5rem 0;
  }
  .p-megamenu .p-menuitem.p-menuitem-active > .p-menuitem-link {
    background: #e9ecef;
  }
  .p-megamenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-text {
    color: #212529;
  }
  .p-megamenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-icon, .p-megamenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-submenu-icon {
    color: #212529;
  }
  .p-megamenu.p-megamenu-vertical {
    width: 12.5rem;
    padding: 0.5rem 0;
  }
  .p-megamenu .p-megamenu-button {
    width: 2rem;
    height: 2rem;
    color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    transition: box-shadow 0.15s;
  }
  .p-megamenu .p-megamenu-button:hover {
    color: rgba(0, 0, 0, 0.7);
    background: transparent;
  }
  .p-megamenu .p-megamenu-button:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }
  .p-megamenu .p-submenu-icon {
    transition: transform 0.15s;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list {
    padding: 0.5rem 0;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.15);
    box-shadow: none;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list .p-menu-separator {
    border-top: 1px solid #dee2e6;
    margin: 0.5rem 0;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list .p-submenu-icon {
    font-size: 0.875rem;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list .p-submenu-icon.p-icon {
    width: 0.875rem;
    height: 0.875rem;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem {
    width: 100%;
    position: static;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link {
    padding: 0.75rem 1rem;
    color: #212529;
    border-radius: 0;
    transition: box-shadow 0.15s;
    user-select: none;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link .p-menuitem-text {
    color: #212529;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link .p-menuitem-icon {
    color: #212529;
    margin-right: 0.5rem;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link .p-submenu-icon {
    color: #212529;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover {
    background: #e9ecef;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {
    color: #212529;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
    color: #212529;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {
    color: #212529;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem rgba(38, 143, 255, 0.5);
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link > .p-submenu-icon {
    margin-left: auto;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link > .p-submenu-icon {
    transform: rotate(-180deg);
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list .p-submenu-list {
    width: 100%;
    position: static;
    box-shadow: none;
    border: 0 none;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list .p-submenu-list .p-submenu-icon {
    transition: transform 0.15s;
    transform: rotate(90deg);
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list .p-submenu-list .p-menuitem-active > .p-menuitem-link > .p-submenu-icon {
    transform: rotate(-90deg);
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list .p-menuitem {
    width: 100%;
    position: static;
  }

  .p-menu {
    padding: 0.5rem 0;
    background: #ffffff;
    color: #212529;
    border: 1px solid #dee2e6;
    border-radius: 4px;
    width: 12.5rem;
  }
  .p-menu .p-menuitem-link {
    padding: 0.75rem 1rem;
    color: #212529;
    border-radius: 0;
    transition: box-shadow 0.15s;
    user-select: none;
  }
  .p-menu .p-menuitem-link .p-menuitem-text {
    color: #212529;
  }
  .p-menu .p-menuitem-link .p-menuitem-icon {
    color: #212529;
    margin-right: 0.5rem;
  }
  .p-menu .p-menuitem-link .p-submenu-icon {
    color: #212529;
  }
  .p-menu .p-menuitem-link:not(.p-disabled):hover {
    background: #e9ecef;
  }
  .p-menu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {
    color: #212529;
  }
  .p-menu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
    color: #212529;
  }
  .p-menu .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {
    color: #212529;
  }
  .p-menu .p-menuitem-link:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem rgba(38, 143, 255, 0.5);
  }
  .p-menu.p-menu-overlay {
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.15);
    box-shadow: none;
  }
  .p-menu .p-submenu-header {
    margin: 0;
    padding: 0.75rem 1rem;
    color: #212529;
    background: #ffffff;
    font-weight: 600;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
  .p-menu .p-menu-separator {
    border-top: 1px solid #dee2e6;
    margin: 0.5rem 0;
  }

  .p-menubar {
    padding: 0.5rem 1rem;
    background: #efefef;
    color: rgba(0, 0, 0, 0.9);
    border: 0 none;
    border-radius: 4px;
  }
  .p-menubar .p-menuitem-link {
    padding: 0.75rem 1rem;
    color: #212529;
    border-radius: 0;
    transition: box-shadow 0.15s;
    user-select: none;
  }
  .p-menubar .p-menuitem-link .p-menuitem-text {
    color: #212529;
  }
  .p-menubar .p-menuitem-link .p-menuitem-icon {
    color: #212529;
    margin-right: 0.5rem;
  }
  .p-menubar .p-menuitem-link .p-submenu-icon {
    color: #212529;
  }
  .p-menubar .p-menuitem-link:not(.p-disabled):hover {
    background: #e9ecef;
  }
  .p-menubar .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {
    color: #212529;
  }
  .p-menubar .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
    color: #212529;
  }
  .p-menubar .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {
    color: #212529;
  }
  .p-menubar .p-menuitem-link:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem rgba(38, 143, 255, 0.5);
  }
  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link {
    padding: 1rem;
    color: rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    transition: box-shadow 0.15s;
    user-select: none;
  }
  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link .p-menuitem-text {
    color: rgba(0, 0, 0, 0.5);
  }
  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link .p-menuitem-icon {
    color: rgba(0, 0, 0, 0.5);
    margin-right: 0.5rem;
  }
  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link .p-submenu-icon {
    color: rgba(0, 0, 0, 0.5);
    margin-left: 0.5rem;
  }
  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover {
    background: transparent;
  }
  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {
    color: rgba(0, 0, 0, 0.7);
  }
  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
    color: rgba(0, 0, 0, 0.7);
  }
  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {
    color: rgba(0, 0, 0, 0.7);
  }
  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem rgba(38, 143, 255, 0.5);
  }
  .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link,
.p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover {
    background: transparent;
  }
  .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-text,
.p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {
    color: rgba(0, 0, 0, 0.9);
  }
  .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-icon,
.p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
    color: rgba(0, 0, 0, 0.9);
  }
  .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link .p-submenu-icon,
.p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {
    color: rgba(0, 0, 0, 0.9);
  }
  .p-menubar .p-submenu-list {
    padding: 0.5rem 0;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.15);
    box-shadow: none;
    width: 12.5rem;
  }
  .p-menubar .p-submenu-list .p-menu-separator {
    border-top: 1px solid #dee2e6;
    margin: 0.5rem 0;
  }
  .p-menubar .p-submenu-list .p-submenu-icon {
    font-size: 0.875rem;
  }
  .p-menubar .p-submenu-list .p-submenu-icon.p-icon {
    width: 0.875rem;
    height: 0.875rem;
  }
  .p-menubar .p-menuitem.p-menuitem-active > .p-menuitem-link {
    background: #e9ecef;
  }
  .p-menubar .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-text {
    color: #212529;
  }
  .p-menubar .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-icon, .p-menubar .p-menuitem.p-menuitem-active > .p-menuitem-link .p-submenu-icon {
    color: #212529;
  }

  @media screen and (max-width: 960px) {
    .p-menubar {
      position: relative;
    }
    .p-menubar .p-menubar-button {
      display: flex;
      width: 2rem;
      height: 2rem;
      color: rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      transition: box-shadow 0.15s;
    }
    .p-menubar .p-menubar-button:hover {
      color: rgba(0, 0, 0, 0.7);
      background: transparent;
    }
    .p-menubar .p-menubar-button:focus {
      outline: 0 none;
      outline-offset: 0;
      box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
    }
    .p-menubar .p-menubar-root-list {
      position: absolute;
      display: none;
      padding: 0.5rem 0;
      background: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.15);
      box-shadow: none;
      width: 100%;
    }
    .p-menubar .p-menubar-root-list .p-menu-separator {
      border-top: 1px solid #dee2e6;
      margin: 0.5rem 0;
    }
    .p-menubar .p-menubar-root-list .p-submenu-icon {
      font-size: 0.875rem;
    }
    .p-menubar .p-menubar-root-list .p-submenu-icon.p-icon {
      width: 0.875rem;
      height: 0.875rem;
    }
    .p-menubar .p-menubar-root-list > .p-menuitem {
      width: 100%;
      position: static;
    }
    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link {
      padding: 0.75rem 1rem;
      color: #212529;
      border-radius: 0;
      transition: box-shadow 0.15s;
      user-select: none;
    }
    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link .p-menuitem-text {
      color: #212529;
    }
    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link .p-menuitem-icon {
      color: #212529;
      margin-right: 0.5rem;
    }
    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link .p-submenu-icon {
      color: #212529;
    }
    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover {
      background: #e9ecef;
    }
    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {
      color: #212529;
    }
    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
      color: #212529;
    }
    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {
      color: #212529;
    }
    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:focus {
      outline: 0 none;
      outline-offset: 0;
      box-shadow: inset 0 0 0 0.15rem rgba(38, 143, 255, 0.5);
    }
    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link > .p-submenu-icon {
      margin-left: auto;
      transition: transform 0.15s;
    }
    .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link > .p-submenu-icon {
      transform: rotate(-180deg);
    }
    .p-menubar .p-menubar-root-list .p-submenu-list {
      width: 100%;
      position: static;
      box-shadow: none;
      border: 0 none;
    }
    .p-menubar .p-menubar-root-list .p-submenu-list .p-submenu-icon {
      transition: transform 0.15s;
      transform: rotate(90deg);
    }
    .p-menubar .p-menubar-root-list .p-submenu-list .p-menuitem-active > .p-menuitem-link > .p-submenu-icon {
      transform: rotate(-90deg);
    }
    .p-menubar .p-menubar-root-list .p-menuitem {
      width: 100%;
      position: static;
    }
    .p-menubar .p-menubar-root-list ul li a {
      padding-left: 2.25rem;
    }
    .p-menubar .p-menubar-root-list ul li ul li a {
      padding-left: 3.75rem;
    }
    .p-menubar .p-menubar-root-list ul li ul li ul li a {
      padding-left: 5.25rem;
    }
    .p-menubar .p-menubar-root-list ul li ul li ul li ul li a {
      padding-left: 6.75rem;
    }
    .p-menubar .p-menubar-root-list ul li ul li ul li ul li ul li a {
      padding-left: 8.25rem;
    }
    .p-menubar.p-menubar-mobile-active .p-menubar-root-list {
      display: flex;
      flex-direction: column;
      top: 100%;
      left: 0;
      z-index: 1;
    }
  }
  .p-panelmenu .p-panelmenu-header > a {
    padding: 1rem 1.25rem;
    border: 1px solid #dee2e6;
    color: #212529;
    background: #efefef;
    font-weight: 600;
    border-radius: 4px;
    transition: box-shadow 0.15s;
  }
  .p-panelmenu .p-panelmenu-header > a .p-panelmenu-icon {
    margin-right: 0.5rem;
  }
  .p-panelmenu .p-panelmenu-header > a .p-menuitem-icon {
    margin-right: 0.5rem;
  }
  .p-panelmenu .p-panelmenu-header > a:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }
  .p-panelmenu .p-panelmenu-header:not(.p-highlight):not(.p-disabled) > a:hover {
    background: #e9ecef;
    border-color: #dee2e6;
    color: #212529;
  }
  .p-panelmenu .p-panelmenu-header.p-highlight {
    margin-bottom: 0;
  }
  .p-panelmenu .p-panelmenu-header.p-highlight > a {
    background: #efefef;
    border-color: #dee2e6;
    color: #212529;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .p-panelmenu .p-panelmenu-header.p-highlight:not(.p-disabled) > a:hover {
    border-color: #dee2e6;
    background: #e9ecef;
    color: #212529;
  }
  .p-panelmenu .p-panelmenu-content {
    padding: 0.5rem 0;
    border: 1px solid #dee2e6;
    background: #ffffff;
    color: #212529;
    border-top: 0;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link {
    padding: 0.75rem 1rem;
    color: #212529;
    border-radius: 0;
    transition: box-shadow 0.15s;
    user-select: none;
  }
  .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link .p-menuitem-text {
    color: #212529;
  }
  .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link .p-menuitem-icon {
    color: #212529;
    margin-right: 0.5rem;
  }
  .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link .p-submenu-icon {
    color: #212529;
  }
  .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link:not(.p-disabled):hover {
    background: #e9ecef;
  }
  .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {
    color: #212529;
  }
  .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
    color: #212529;
  }
  .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {
    color: #212529;
  }
  .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem rgba(38, 143, 255, 0.5);
  }
  .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link .p-panelmenu-icon {
    margin-right: 0.5rem;
  }
  .p-panelmenu .p-panelmenu-content .p-submenu-list:not(.p-panelmenu-root-submenu) {
    padding: 0 0 0 1rem;
  }
  .p-panelmenu .p-panelmenu-panel {
    margin-bottom: 0;
  }
  .p-panelmenu .p-panelmenu-panel .p-panelmenu-header > a {
    border-radius: 0;
  }
  .p-panelmenu .p-panelmenu-panel .p-panelmenu-content {
    border-radius: 0;
  }
  .p-panelmenu .p-panelmenu-panel:not(:first-child) .p-panelmenu-header > a {
    border-top: 0 none;
  }
  .p-panelmenu .p-panelmenu-panel:not(:first-child) .p-panelmenu-header:not(.p-highlight):not(.p-disabled):hover > a, .p-panelmenu .p-panelmenu-panel:not(:first-child) .p-panelmenu-header:not(.p-disabled).p-highlight:hover > a {
    border-top: 0 none;
  }
  .p-panelmenu .p-panelmenu-panel:first-child .p-panelmenu-header > a {
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }
  .p-panelmenu .p-panelmenu-panel:last-child .p-panelmenu-header:not(.p-highlight) > a {
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .p-panelmenu .p-panelmenu-panel:last-child .p-panelmenu-content {
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .p-slidemenu {
    padding: 0.5rem 0;
    background: #ffffff;
    color: #212529;
    border: 1px solid #dee2e6;
    border-radius: 4px;
    width: 12.5rem;
  }
  .p-slidemenu .p-menuitem-link {
    padding: 0.75rem 1rem;
    color: #212529;
    border-radius: 0;
    transition: box-shadow 0.15s;
    user-select: none;
  }
  .p-slidemenu .p-menuitem-link .p-menuitem-text {
    color: #212529;
  }
  .p-slidemenu .p-menuitem-link .p-menuitem-icon {
    color: #212529;
    margin-right: 0.5rem;
  }
  .p-slidemenu .p-menuitem-link .p-submenu-icon {
    color: #212529;
  }
  .p-slidemenu .p-menuitem-link:not(.p-disabled):hover {
    background: #e9ecef;
  }
  .p-slidemenu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {
    color: #212529;
  }
  .p-slidemenu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
    color: #212529;
  }
  .p-slidemenu .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {
    color: #212529;
  }
  .p-slidemenu .p-menuitem-link:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem rgba(38, 143, 255, 0.5);
  }
  .p-slidemenu.p-slidemenu-overlay {
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.15);
    box-shadow: none;
  }
  .p-slidemenu .p-slidemenu-list {
    padding: 0.5rem 0;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.15);
    box-shadow: none;
  }
  .p-slidemenu .p-slidemenu.p-slidemenu-active > .p-slidemenu-link {
    background: #e9ecef;
  }
  .p-slidemenu .p-slidemenu.p-slidemenu-active > .p-slidemenu-link .p-slidemenu-text {
    color: #212529;
  }
  .p-slidemenu .p-slidemenu.p-slidemenu-active > .p-slidemenu-link .p-slidemenu-icon, .p-slidemenu .p-slidemenu.p-slidemenu-active > .p-slidemenu-link .p-slidemenu-icon {
    color: #212529;
  }
  .p-slidemenu .p-slidemenu-separator {
    border-top: 1px solid #dee2e6;
    margin: 0.5rem 0;
  }
  .p-slidemenu .p-slidemenu-icon {
    font-size: 0.875rem;
  }
  .p-slidemenu .p-slidemenu-icon.p-icon {
    width: 0.875rem;
    height: 0.875rem;
  }
  .p-slidemenu .p-slidemenu-backward {
    padding: 0.75rem 1rem;
    color: #212529;
  }

  .p-steps .p-steps-item .p-menuitem-link {
    background: transparent;
    transition: box-shadow 0.15s;
    border-radius: 4px;
    background: transparent;
  }
  .p-steps .p-steps-item .p-menuitem-link .p-steps-number {
    color: #212529;
    border: 1px solid #dee2e6;
    background: transparent;
    min-width: 2rem;
    height: 2rem;
    line-height: 2rem;
    font-size: 1.143rem;
    z-index: 1;
    border-radius: 4px;
  }
  .p-steps .p-steps-item .p-menuitem-link .p-steps-title {
    margin-top: 0.5rem;
    color: #6c757d;
  }
  .p-steps .p-steps-item .p-menuitem-link:not(.p-disabled):focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }
  .p-steps .p-steps-item.p-highlight .p-steps-number {
    background: #007bff;
    color: #ffffff;
  }
  .p-steps .p-steps-item.p-highlight .p-steps-title {
    font-weight: 600;
    color: #212529;
  }
  .p-steps .p-steps-item:before {
    content: " ";
    border-top: 1px solid #dee2e6;
    width: 100%;
    top: 50%;
    left: 0;
    display: block;
    position: absolute;
    margin-top: -1rem;
  }

  .p-tabmenu .p-tabmenu-nav {
    background: transparent;
    border: 1px solid #dee2e6;
    border-width: 0 0 1px 0;
  }
  .p-tabmenu .p-tabmenu-nav .p-tabmenuitem {
    margin-right: 0;
  }
  .p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link {
    border: solid;
    border-width: 1px;
    border-color: #ffffff #ffffff #dee2e6 #ffffff;
    background: #ffffff;
    color: #6c757d;
    padding: 0.75rem 1rem;
    font-weight: 600;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    transition: box-shadow 0.15s;
    margin: 0 0 -1px 0;
    height: calc(100% + 1px);
  }
  .p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link .p-menuitem-icon {
    margin-right: 0.5rem;
  }
  .p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link:not(.p-disabled):focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }
  .p-tabmenu .p-tabmenu-nav .p-tabmenuitem:not(.p-highlight):not(.p-disabled):hover .p-menuitem-link {
    background: #ffffff;
    border-color: #dee2e6;
    color: #6c757d;
  }
  .p-tabmenu .p-tabmenu-nav .p-tabmenuitem.p-highlight .p-menuitem-link {
    background: #ffffff;
    border-color: #dee2e6 #dee2e6 #ffffff #dee2e6;
    color: #495057;
  }

  .p-tieredmenu {
    padding: 0.5rem 0;
    background: #ffffff;
    color: #212529;
    border: 1px solid #dee2e6;
    border-radius: 4px;
    width: 12.5rem;
  }
  .p-tieredmenu .p-menuitem-link {
    padding: 0.75rem 1rem;
    color: #212529;
    border-radius: 0;
    transition: box-shadow 0.15s;
    user-select: none;
  }
  .p-tieredmenu .p-menuitem-link .p-menuitem-text {
    color: #212529;
  }
  .p-tieredmenu .p-menuitem-link .p-menuitem-icon {
    color: #212529;
    margin-right: 0.5rem;
  }
  .p-tieredmenu .p-menuitem-link .p-submenu-icon {
    color: #212529;
  }
  .p-tieredmenu .p-menuitem-link:not(.p-disabled):hover {
    background: #e9ecef;
  }
  .p-tieredmenu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {
    color: #212529;
  }
  .p-tieredmenu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
    color: #212529;
  }
  .p-tieredmenu .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {
    color: #212529;
  }
  .p-tieredmenu .p-menuitem-link:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem rgba(38, 143, 255, 0.5);
  }
  .p-tieredmenu.p-tieredmenu-overlay {
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.15);
    box-shadow: none;
  }
  .p-tieredmenu .p-submenu-list {
    padding: 0.5rem 0;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.15);
    box-shadow: none;
  }
  .p-tieredmenu .p-menuitem.p-menuitem-active > .p-menuitem-link {
    background: #e9ecef;
  }
  .p-tieredmenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-text {
    color: #212529;
  }
  .p-tieredmenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-icon, .p-tieredmenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-submenu-icon {
    color: #212529;
  }
  .p-tieredmenu .p-menu-separator {
    border-top: 1px solid #dee2e6;
    margin: 0.5rem 0;
  }
  .p-tieredmenu .p-submenu-icon {
    font-size: 0.875rem;
    transition: transform 0.15s;
  }
  .p-tieredmenu .p-submenu-icon.p-icon {
    width: 0.875rem;
    height: 0.875rem;
  }

  .p-inline-message {
    padding: 0.5rem 0.75rem;
    margin: 0;
    border-radius: 4px;
  }
  .p-inline-message.p-inline-message-info {
    background: #cce5ff;
    border: solid #b8daff;
    border-width: 0px;
    color: #004085;
  }
  .p-inline-message.p-inline-message-info .p-inline-message-icon {
    color: #004085;
  }
  .p-inline-message.p-inline-message-success {
    background: #d4edda;
    border: solid #c3e6cb;
    border-width: 0px;
    color: #155724;
  }
  .p-inline-message.p-inline-message-success .p-inline-message-icon {
    color: #155724;
  }
  .p-inline-message.p-inline-message-warn {
    background: #fff3cd;
    border: solid #ffeeba;
    border-width: 0px;
    color: #856404;
  }
  .p-inline-message.p-inline-message-warn .p-inline-message-icon {
    color: #856404;
  }
  .p-inline-message.p-inline-message-error {
    background: #f8d7da;
    border: solid #f5c6cb;
    border-width: 0px;
    color: #721c24;
  }
  .p-inline-message.p-inline-message-error .p-inline-message-icon {
    color: #721c24;
  }
  .p-inline-message .p-inline-message-icon {
    font-size: 1rem;
    margin-right: 0.5rem;
  }
  .p-inline-message .p-inline-message-icon.p-icon {
    width: 1rem;
    height: 1rem;
  }
  .p-inline-message .p-inline-message-text {
    font-size: 1rem;
  }
  .p-inline-message.p-inline-message-icon-only .p-inline-message-icon {
    margin-right: 0;
  }

  .p-message {
    margin: 1rem 0;
    border-radius: 4px;
  }
  .p-message .p-message-wrapper {
    padding: 1rem 1.25rem;
  }
  .p-message .p-message-close {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: transparent;
    transition: box-shadow 0.15s;
  }
  .p-message .p-message-close:hover {
    background: rgba(255, 255, 255, 0.5);
  }
  .p-message .p-message-close:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }
  .p-message.p-message-info {
    background: #cce5ff;
    border: solid #b8daff;
    border-width: 1px;
    color: #004085;
  }
  .p-message.p-message-info .p-message-icon {
    color: #004085;
  }
  .p-message.p-message-info .p-message-close {
    color: #004085;
  }
  .p-message.p-message-success {
    background: #d4edda;
    border: solid #c3e6cb;
    border-width: 1px;
    color: #155724;
  }
  .p-message.p-message-success .p-message-icon {
    color: #155724;
  }
  .p-message.p-message-success .p-message-close {
    color: #155724;
  }
  .p-message.p-message-warn {
    background: #fff3cd;
    border: solid #ffeeba;
    border-width: 1px;
    color: #856404;
  }
  .p-message.p-message-warn .p-message-icon {
    color: #856404;
  }
  .p-message.p-message-warn .p-message-close {
    color: #856404;
  }
  .p-message.p-message-error {
    background: #f8d7da;
    border: solid #f5c6cb;
    border-width: 1px;
    color: #721c24;
  }
  .p-message.p-message-error .p-message-icon {
    color: #721c24;
  }
  .p-message.p-message-error .p-message-close {
    color: #721c24;
  }
  .p-message .p-message-text {
    font-size: 1rem;
    font-weight: 500;
  }
  .p-message .p-message-icon {
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }
  .p-message .p-message-icon.p-icon {
    width: 1.5rem;
    height: 1.5rem;
  }
  .p-message .p-message-summary {
    font-weight: 700;
  }
  .p-message .p-message-detail {
    margin-left: 0.5rem;
  }

  .p-toast {
    opacity: 1;
  }
  .p-toast .p-toast-message {
    margin: 0 0 1rem 0;
    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }
  .p-toast .p-toast-message .p-toast-message-content {
    padding: 1rem;
    border-width: 0;
  }
  .p-toast .p-toast-message .p-toast-message-content .p-toast-message-text {
    margin: 0 0 0 1rem;
  }
  .p-toast .p-toast-message .p-toast-message-content .p-toast-message-icon {
    font-size: 2rem;
  }
  .p-toast .p-toast-message .p-toast-message-content .p-toast-message-icon.p-icon {
    width: 2rem;
    height: 2rem;
  }
  .p-toast .p-toast-message .p-toast-message-content .p-toast-summary {
    font-weight: 700;
  }
  .p-toast .p-toast-message .p-toast-message-content .p-toast-detail {
    margin: 0.5rem 0 0 0;
  }
  .p-toast .p-toast-message .p-toast-icon-close {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: transparent;
    transition: box-shadow 0.15s;
  }
  .p-toast .p-toast-message .p-toast-icon-close:hover {
    background: rgba(255, 255, 255, 0.5);
  }
  .p-toast .p-toast-message .p-toast-icon-close:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }
  .p-toast .p-toast-message.p-toast-message-info {
    background: #cce5ff;
    border: solid #b8daff;
    border-width: 1px;
    color: #004085;
  }
  .p-toast .p-toast-message.p-toast-message-info .p-toast-message-icon,
.p-toast .p-toast-message.p-toast-message-info .p-toast-icon-close {
    color: #004085;
  }
  .p-toast .p-toast-message.p-toast-message-success {
    background: #d4edda;
    border: solid #c3e6cb;
    border-width: 1px;
    color: #155724;
  }
  .p-toast .p-toast-message.p-toast-message-success .p-toast-message-icon,
.p-toast .p-toast-message.p-toast-message-success .p-toast-icon-close {
    color: #155724;
  }
  .p-toast .p-toast-message.p-toast-message-warn {
    background: #fff3cd;
    border: solid #ffeeba;
    border-width: 1px;
    color: #856404;
  }
  .p-toast .p-toast-message.p-toast-message-warn .p-toast-message-icon,
.p-toast .p-toast-message.p-toast-message-warn .p-toast-icon-close {
    color: #856404;
  }
  .p-toast .p-toast-message.p-toast-message-error {
    background: #f8d7da;
    border: solid #f5c6cb;
    border-width: 1px;
    color: #721c24;
  }
  .p-toast .p-toast-message.p-toast-message-error .p-toast-message-icon,
.p-toast .p-toast-message.p-toast-message-error .p-toast-icon-close {
    color: #721c24;
  }

  .p-galleria .p-galleria-close {
    margin: 0.5rem;
    background: transparent;
    color: #efefef;
    width: 4rem;
    height: 4rem;
    transition: box-shadow 0.15s;
    border-radius: 4px;
  }
  .p-galleria .p-galleria-close .p-galleria-close-icon {
    font-size: 2rem;
  }
  .p-galleria .p-galleria-close .p-galleria-close-icon.p-icon {
    width: 2rem;
    height: 2rem;
  }
  .p-galleria .p-galleria-close:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #efefef;
  }
  .p-galleria .p-galleria-item-nav {
    background: transparent;
    color: #efefef;
    width: 4rem;
    height: 4rem;
    transition: box-shadow 0.15s;
    border-radius: 4px;
    margin: 0 0.5rem;
  }
  .p-galleria .p-galleria-item-nav .p-galleria-item-prev-icon,
.p-galleria .p-galleria-item-nav .p-galleria-item-next-icon {
    font-size: 2rem;
  }
  .p-galleria .p-galleria-item-nav .p-galleria-item-prev-icon.p-icon,
.p-galleria .p-galleria-item-nav .p-galleria-item-next-icon.p-icon {
    width: 2rem;
    height: 2rem;
  }
  .p-galleria .p-galleria-item-nav:not(.p-disabled):hover {
    background: rgba(255, 255, 255, 0.1);
    color: #efefef;
  }
  .p-galleria .p-galleria-caption {
    background: rgba(0, 0, 0, 0.5);
    color: #efefef;
    padding: 1rem;
  }
  .p-galleria .p-galleria-indicators {
    padding: 1rem;
  }
  .p-galleria .p-galleria-indicators .p-galleria-indicator button {
    background-color: #e9ecef;
    width: 1rem;
    height: 1rem;
    transition: box-shadow 0.15s;
    border-radius: 4px;
  }
  .p-galleria .p-galleria-indicators .p-galleria-indicator button:hover {
    background: #dee2e6;
  }
  .p-galleria .p-galleria-indicators .p-galleria-indicator.p-highlight button {
    background: #007bff;
    color: #ffffff;
  }
  .p-galleria.p-galleria-indicators-bottom .p-galleria-indicator, .p-galleria.p-galleria-indicators-top .p-galleria-indicator {
    margin-right: 0.5rem;
  }
  .p-galleria.p-galleria-indicators-left .p-galleria-indicator, .p-galleria.p-galleria-indicators-right .p-galleria-indicator {
    margin-bottom: 0.5rem;
  }
  .p-galleria.p-galleria-indicator-onitem .p-galleria-indicators {
    background: rgba(0, 0, 0, 0.5);
  }
  .p-galleria.p-galleria-indicator-onitem .p-galleria-indicators .p-galleria-indicator button {
    background: rgba(255, 255, 255, 0.4);
  }
  .p-galleria.p-galleria-indicator-onitem .p-galleria-indicators .p-galleria-indicator button:hover {
    background: rgba(255, 255, 255, 0.6);
  }
  .p-galleria.p-galleria-indicator-onitem .p-galleria-indicators .p-galleria-indicator.p-highlight button {
    background: #007bff;
    color: #ffffff;
  }
  .p-galleria .p-galleria-thumbnail-container {
    background: rgba(0, 0, 0, 0.9);
    padding: 1rem 0.25rem;
  }
  .p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-prev,
.p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-next {
    margin: 0.5rem;
    background-color: transparent;
    color: #efefef;
    width: 2rem;
    height: 2rem;
    transition: box-shadow 0.15s;
    border-radius: 4px;
  }
  .p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-prev:hover,
.p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-next:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #efefef;
  }
  .p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-item-content {
    transition: box-shadow 0.15s;
  }
  .p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-item-content:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }

  .p-galleria-mask {
    --maskbg: rgba(0, 0, 0, 0.9);
  }

  .p-image-mask {
    --maskbg: rgba(0, 0, 0, 0.9);
  }

  .p-image-preview-indicator {
    background-color: transparent;
    color: #f8f9fa;
    transition: box-shadow 0.15s;
  }
  .p-image-preview-indicator .p-icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  .p-image-preview-container:hover > .p-image-preview-indicator {
    background-color: rgba(0, 0, 0, 0.5);
  }

  .p-image-toolbar {
    padding: 1rem;
  }

  .p-image-action.p-link {
    color: #f8f9fa;
    background-color: transparent;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    transition: box-shadow 0.15s;
    margin-right: 0.5rem;
  }
  .p-image-action.p-link:last-child {
    margin-right: 0;
  }
  .p-image-action.p-link:hover {
    color: #f8f9fa;
    background-color: rgba(255, 255, 255, 0.1);
  }
  .p-image-action.p-link span {
    font-size: 1.5rem;
  }
  .p-image-action.p-link .p-icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  .p-avatar {
    background-color: #dee2e6;
    border-radius: 4px;
  }
  .p-avatar.p-avatar-lg {
    width: 3rem;
    height: 3rem;
    font-size: 1.5rem;
  }
  .p-avatar.p-avatar-lg .p-avatar-icon {
    font-size: 1.5rem;
  }
  .p-avatar.p-avatar-xl {
    width: 4rem;
    height: 4rem;
    font-size: 2rem;
  }
  .p-avatar.p-avatar-xl .p-avatar-icon {
    font-size: 2rem;
  }

  .p-avatar-circle {
    border-radius: 50%;
  }

  .p-avatar-group .p-avatar {
    border: 2px solid #ffffff;
  }

  .p-chip {
    background-color: #dee2e6;
    color: #212529;
    border-radius: 16px;
    padding: 0 0.75rem;
  }
  .p-chip .p-chip-text {
    line-height: 1.5;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
  }
  .p-chip .p-chip-icon {
    margin-right: 0.5rem;
  }
  .p-chip img {
    width: 2rem;
    height: 2rem;
    margin-left: -0.75rem;
    margin-right: 0.5rem;
  }
  .p-chip .p-chip-remove-icon {
    border-radius: 4px;
    transition: box-shadow 0.15s;
    margin-left: 0.5rem;
  }
  .p-chip .p-chip-remove-icon:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }
  .p-chip .p-chip-remove-icon:focus {
    outline: 0 none;
  }

  .p-scrolltop {
    width: 3rem;
    height: 3rem;
    border-radius: 4px;
    box-shadow: none;
    transition: box-shadow 0.15s;
  }
  .p-scrolltop.p-link {
    background: rgba(0, 0, 0, 0.7);
  }
  .p-scrolltop.p-link:hover {
    background: rgba(0, 0, 0, 0.8);
  }
  .p-scrolltop .p-scrolltop-icon {
    font-size: 1.5rem;
    color: #efefef;
  }
  .p-scrolltop .p-scrolltop-icon.p-icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  .p-skeleton {
    background-color: #e9ecef;
    border-radius: 4px;
  }
  .p-skeleton:after {
    background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0));
  }

  .p-tag {
    background: #007bff;
    color: #ffffff;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.25rem 0.4rem;
    border-radius: 4px;
  }
  .p-tag.p-tag-success {
    background-color: #28a745;
    color: #ffffff;
  }
  .p-tag.p-tag-info {
    background-color: #17a2b8;
    color: #ffffff;
  }
  .p-tag.p-tag-warning {
    background-color: #ffc107;
    color: #212529;
  }
  .p-tag.p-tag-danger {
    background-color: #dc3545;
    color: #ffffff;
  }
  .p-tag .p-tag-icon {
    margin-right: 0.25rem;
    font-size: 0.75rem;
  }
  .p-tag .p-tag-icon.p-icon {
    width: 0.75rem;
    height: 0.75rem;
  }

  .p-inplace .p-inplace-display {
    padding: 0.5rem 0.75rem;
    border-radius: 4px;
    transition: background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
  }
  .p-inplace .p-inplace-display:not(.p-disabled):hover {
    background: #e9ecef;
    color: #212529;
  }
  .p-inplace .p-inplace-display:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
  }

  .p-progressbar {
    border: 0 none;
    height: 1.5rem;
    background: #e9ecef;
    border-radius: 4px;
  }
  .p-progressbar .p-progressbar-value {
    border: 0 none;
    margin: 0;
    background: #007bff;
  }
  .p-progressbar .p-progressbar-label {
    color: #ffffff;
    line-height: 1.5rem;
  }

  .p-terminal {
    background: #ffffff;
    color: #212529;
    border: 1px solid #dee2e6;
    padding: 1.25rem;
  }
  .p-terminal .p-terminal-input {
    font-family: var(--font-family);
    font-feature-settings: var(--font-feature-settings, normal);
    font-size: 1rem;
  }

  .p-badge {
    background: #007bff;
    color: #ffffff;
    font-size: 0.75rem;
    font-weight: 700;
    min-width: 1.5rem;
    height: 1.5rem;
    line-height: 1.5rem;
  }
  .p-badge.p-badge-secondary {
    background-color: #6c757d;
    color: #ffffff;
  }
  .p-badge.p-badge-success {
    background-color: #28a745;
    color: #ffffff;
  }
  .p-badge.p-badge-info {
    background-color: #17a2b8;
    color: #ffffff;
  }
  .p-badge.p-badge-warning {
    background-color: #ffc107;
    color: #212529;
  }
  .p-badge.p-badge-danger {
    background-color: #dc3545;
    color: #ffffff;
  }
  .p-badge.p-badge-lg {
    font-size: 1.125rem;
    min-width: 2.25rem;
    height: 2.25rem;
    line-height: 2.25rem;
  }
  .p-badge.p-badge-xl {
    font-size: 1.5rem;
    min-width: 3rem;
    height: 3rem;
    line-height: 3rem;
  }

  .p-tag {
    background: #007bff;
    color: #ffffff;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.25rem 0.4rem;
    border-radius: 4px;
  }
  .p-tag.p-tag-success {
    background-color: #28a745;
    color: #ffffff;
  }
  .p-tag.p-tag-info {
    background-color: #17a2b8;
    color: #ffffff;
  }
  .p-tag.p-tag-warning {
    background-color: #ffc107;
    color: #212529;
  }
  .p-tag.p-tag-danger {
    background-color: #dc3545;
    color: #ffffff;
  }
}
/* Vendor extensions to the designer enhanced bootstrap compatibility */
@layer primereact {
  .p-breadcrumb .p-breadcrumb-chevron {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  .p-breadcrumb .p-breadcrumb-chevron:before {
    content: "/";
  }
}
/* Customizations to the designer theme should be defined here */
`,iy=`:root {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  --surface-a:#2a323d;
  --surface-b:#20262e;
  --surface-c:rgba(255, 255, 255, 0.04);
  --surface-d:#3f4b5b;
  --surface-e:#2a323d;
  --surface-f:#2a323d;
  --text-color:rgba(255, 255, 255, 0.87);
  --text-color-secondary:rgba(255, 255, 255, 0.6);
  --primary-color:#8dd0ff;
  --primary-color-text:#151515;
  --surface-0: #20262e;
  --surface-50: #363c43;
  --surface-100: #4d5158;
  --surface-200: #63676d;
  --surface-300: #797d82;
  --surface-400: #909397;
  --surface-500: #a6a8ab;
  --surface-600: #bcbec0;
  --surface-700: #d2d4d5;
  --surface-800: #e9e9ea;
  --surface-900: #ffffff;
  --gray-50:#e9e9ea;
  --gray-100: #d2d4d5;
  --gray-200: #bcbec0;
  --gray-300: #a6a8ab;
  --gray-400: #909397;
  --gray-500: #797d82;
  --gray-600: #63676d;
  --gray-700: #4d5158;
  --gray-800: #363c43;
  --gray-900: #20262e;
  --content-padding:1.25rem;
  --inline-spacing:0.5rem;
  --border-radius:4px;
  --surface-ground:#20262e;
  --surface-section:#20262e;
  --surface-card:#2a323d;
  --surface-overlay:#2a323d;
  --surface-border:#3f4b5b;
  --surface-hover:rgba(255,255,255,.04);
  --focus-ring: 0 0 0 1px #e3f3fe;
  --maskbg: rgba(0, 0, 0, 0.4);
  --highlight-bg: #8dd0ff;
  --highlight-text-color: #151515;
  color-scheme: dark;
}

:root {
  --blue-50:#f3f8ff;
  --blue-100:#c5dcff;
  --blue-200:#97c1fe;
  --blue-300:#69a5fe;
  --blue-400:#3b8afd;
  --blue-500:#0d6efd;
  --blue-600:#0b5ed7;
  --blue-700:#094db1;
  --blue-800:#073d8b;
  --blue-900:#052c65;
  --green-50:#f4f9f6;
  --green-100:#c8e2d6;
  --green-200:#9ccbb5;
  --green-300:#70b595;
  --green-400:#459e74;
  --green-500:#198754;
  --green-600:#157347;
  --green-700:#125f3b;
  --green-800:#0e4a2e;
  --green-900:#0a3622;
  --yellow-50:#fffcf3;
  --yellow-100:#fff0c3;
  --yellow-200:#ffe494;
  --yellow-300:#ffd965;
  --yellow-400:#ffcd36;
  --yellow-500:#ffc107;
  --yellow-600:#d9a406;
  --yellow-700:#b38705;
  --yellow-800:#8c6a04;
  --yellow-900:#664d03;
  --cyan-50:#f3fcfe;
  --cyan-100:#c5f2fb;
  --cyan-200:#97e8f9;
  --cyan-300:#69def6;
  --cyan-400:#3bd4f3;
  --cyan-500:#0dcaf0;
  --cyan-600:#0baccc;
  --cyan-700:#098da8;
  --cyan-800:#076f84;
  --cyan-900:#055160;
  --pink-50:#fdf5f9;
  --pink-100:#f5cee1;
  --pink-200:#eda7ca;
  --pink-300:#e681b3;
  --pink-400:#de5a9b;
  --pink-500:#d63384;
  --pink-600:#b62b70;
  --pink-700:#96245c;
  --pink-800:#761c49;
  --pink-900:#561435;
  --indigo-50:#f7f3fe;
  --indigo-100:#dac6fc;
  --indigo-200:#bd98f9;
  --indigo-300:#a06bf7;
  --indigo-400:#833df4;
  --indigo-500:#6610f2;
  --indigo-600:#570ece;
  --indigo-700:#470ba9;
  --indigo-800:#380985;
  --indigo-900:#290661;
  --teal-50:#f4fcfa;
  --teal-100:#c9f2e6;
  --teal-200:#9fe8d2;
  --teal-300:#75debf;
  --teal-400:#4ad3ab;
  --teal-500:#20c997;
  --teal-600:#1bab80;
  --teal-700:#168d6a;
  --teal-800:#126f53;
  --teal-900:#0d503c;
  --orange-50:#fff9f3;
  --orange-100:#ffe0c7;
  --orange-200:#fec89a;
  --orange-300:#feaf6d;
  --orange-400:#fd9741;
  --orange-500:#fd7e14;
  --orange-600:#d76b11;
  --orange-700:#b1580e;
  --orange-800:#8b450b;
  --orange-900:#653208;
  --bluegray-50:#f8f9fb;
  --bluegray-100:#e0e4ea;
  --bluegray-200:#c7ced9;
  --bluegray-300:#aeb9c8;
  --bluegray-400:#95a3b8;
  --bluegray-500:#7c8ea7;
  --bluegray-600:#69798e;
  --bluegray-700:#576375;
  --bluegray-800:#444e5c;
  --bluegray-900:#323943;
  --purple-50:#f8f6fc;
  --purple-100:#dcd2f0;
  --purple-200:#c1aee4;
  --purple-300:#a68ad9;
  --purple-400:#8a66cd;
  --purple-500:#6f42c1;
  --purple-600:#5e38a4;
  --purple-700:#4e2e87;
  --purple-800:#3d246a;
  --purple-900:#2c1a4d;
  --red-50:#fdf5f6;
  --red-100:#f7cfd2;
  --red-200:#f0a8af;
  --red-300:#e9828c;
  --red-400:#e35b68;
  --red-500:#dc3545;
  --red-600:#bb2d3b;
  --red-700:#9a2530;
  --red-800:#791d26;
  --red-900:#58151c;
  --primary-50:#f9fdff;
  --primary-100:#e4f4ff;
  --primary-200:#ceebff;
  --primary-300:#b8e2ff;
  --primary-400:#a3d9ff;
  --primary-500:#8dd0ff;
  --primary-600:#78b1d9;
  --primary-700:#6392b3;
  --primary-800:#4e728c;
  --primary-900:#385366;
}

.p-editor-container .p-editor-toolbar {
  background: #2a323d;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
}
.p-editor-container .p-editor-toolbar.ql-snow {
  border: 1px solid #3f4b5b;
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-stroke {
  stroke: rgba(255, 255, 255, 0.6);
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-fill {
  fill: rgba(255, 255, 255, 0.6);
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label {
  border: 0 none;
  color: rgba(255, 255, 255, 0.6);
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover {
  color: rgba(255, 255, 255, 0.87);
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-stroke {
  stroke: rgba(255, 255, 255, 0.87);
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-fill {
  fill: rgba(255, 255, 255, 0.87);
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
  color: rgba(255, 255, 255, 0.87);
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
  stroke: rgba(255, 255, 255, 0.87);
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
  fill: rgba(255, 255, 255, 0.87);
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
  background: #2a323d;
  border: 1px solid #3f4b5b;
  box-shadow: none;
  border-radius: 4px;
  padding: 0.5rem 0;
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item {
  color: rgba(255, 255, 255, 0.87);
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item:hover {
  color: rgba(255, 255, 255, 0.87);
  background: rgba(255, 255, 255, 0.04);
}
.p-editor-container .p-editor-toolbar.ql-snow .ql-picker.ql-expanded:not(.ql-icon-picker) .ql-picker-item {
  padding: 0.5rem 1.5rem;
}
.p-editor-container .p-editor-content {
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
}
.p-editor-container .p-editor-content.ql-snow {
  border: 1px solid #3f4b5b;
}
.p-editor-container .p-editor-content .ql-editor {
  background: #20262e;
  color: rgba(255, 255, 255, 0.87);
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
}
.p-editor-container .ql-snow.ql-toolbar button:hover,
.p-editor-container .ql-snow.ql-toolbar button:focus {
  color: rgba(255, 255, 255, 0.87);
}
.p-editor-container .ql-snow.ql-toolbar button:hover .ql-stroke,
.p-editor-container .ql-snow.ql-toolbar button:focus .ql-stroke {
  stroke: rgba(255, 255, 255, 0.87);
}
.p-editor-container .ql-snow.ql-toolbar button:hover .ql-fill,
.p-editor-container .ql-snow.ql-toolbar button:focus .ql-fill {
  fill: rgba(255, 255, 255, 0.87);
}
.p-editor-container .ql-snow.ql-toolbar button.ql-active,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected {
  color: #8dd0ff;
}
.p-editor-container .ql-snow.ql-toolbar button.ql-active .ql-stroke,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke {
  stroke: #8dd0ff;
}
.p-editor-container .ql-snow.ql-toolbar button.ql-active .ql-fill,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill {
  fill: #8dd0ff;
}
.p-editor-container .ql-snow.ql-toolbar button.ql-active .ql-picker-label,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-picker-label,
.p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-picker-label {
  color: #8dd0ff;
}

@layer primereact {
  * {
    box-sizing: border-box;
  }

  .p-component {
    font-family: var(--font-family);
    font-feature-settings: var(--font-feature-settings, normal);
    font-size: 1rem;
    font-weight: normal;
  }

  .p-component-overlay {
    background-color: rgba(0, 0, 0, 0.4);
    transition-duration: 0.15s;
  }

  .p-disabled, .p-component:disabled {
    opacity: 0.65;
  }

  .p-error {
    color: #f19ea6;
  }

  .p-text-secondary {
    color: rgba(255, 255, 255, 0.6);
  }

  .pi {
    font-size: 1rem;
  }

  .p-icon {
    width: 1rem;
    height: 1rem;
  }

  .p-link {
    font-family: var(--font-family);
    font-feature-settings: var(--font-feature-settings, normal);
    font-size: 1rem;
    border-radius: 4px;
  }
  .p-link:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 1px #e3f3fe;
  }

  .p-component-overlay-enter {
    animation: p-component-overlay-enter-animation 150ms forwards;
  }

  .p-component-overlay-leave {
    animation: p-component-overlay-leave-animation 150ms forwards;
  }

  @keyframes p-component-overlay-enter-animation {
    from {
      background-color: transparent;
    }
    to {
      background-color: var(--maskbg);
    }
  }
  @keyframes p-component-overlay-leave-animation {
    from {
      background-color: var(--maskbg);
    }
    to {
      background-color: transparent;
    }
  }

  .p-autocomplete .p-autocomplete-loader {
    right: 0.75rem;
  }
  .p-autocomplete.p-autocomplete-dd .p-autocomplete-loader {
    right: 3.107rem;
  }
  .p-autocomplete .p-autocomplete-multiple-container {
    padding: 0.25rem 0.75rem;
    gap: 0.5rem;
  }
  .p-autocomplete .p-autocomplete-multiple-container:not(.p-disabled):hover {
    border-color: #3f4b5b;
  }
  .p-autocomplete .p-autocomplete-multiple-container:not(.p-disabled).p-focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 1px #e3f3fe;
    border-color: #8dd0ff;
  }
  .p-autocomplete .p-autocomplete-multiple-container .p-autocomplete-input-token {
    padding: 0.25rem 0;
  }
  .p-autocomplete .p-autocomplete-multiple-container .p-autocomplete-input-token input {
    font-family: var(--font-family);
    font-feature-settings: var(--font-feature-settings, normal);
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.87);
    padding: 0;
    margin: 0;
  }
  .p-autocomplete .p-autocomplete-multiple-container .p-autocomplete-token {
    padding: 0.25rem 0.75rem;
    margin-right: 0.5rem;
    background: #8dd0ff;
    color: #151515;
    border-radius: 4px;
  }
  .p-autocomplete .p-autocomplete-multiple-container .p-autocomplete-token .p-autocomplete-token-icon {
    margin-left: 0.5rem;
  }
  .p-autocomplete.p-invalid.p-component > .p-inputtext {
    border-color: #f19ea6;
  }

  .p-autocomplete-panel {
    background: #2a323d;
    color: rgba(255, 255, 255, 0.87);
    border: 1px solid #3f4b5b;
    border-radius: 4px;
    box-shadow: none;
  }
  .p-autocomplete-panel .p-autocomplete-items {
    padding: 0.5rem 0;
  }
  .p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item {
    margin: 0;
    padding: 0.5rem 1.5rem;
    border: 0 none;
    color: rgba(255, 255, 255, 0.87);
    background: transparent;
    transition: box-shadow 0.15s;
    border-radius: 0;
  }
  .p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item:hover {
    color: rgba(255, 255, 255, 0.87);
    background: rgba(255, 255, 255, 0.04);
  }
  .p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item.p-highlight {
    color: #151515;
    background: #8dd0ff;
  }
  .p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item-group {
    margin: 0;
    padding: 0.75rem 1rem;
    color: rgba(255, 255, 255, 0.87);
    background: #2a323d;
    font-weight: 600;
  }

  .p-calendar.p-invalid.p-component > .p-inputtext {
    border-color: #f19ea6;
  }

  .p-datepicker {
    padding: 0;
    background: #2a323d;
    color: rgba(255, 255, 255, 0.87);
    border: 1px solid #3f4b5b;
    border-radius: 4px;
  }
  .p-datepicker:not(.p-datepicker-inline) {
    background: #2a323d;
    border: 1px solid #3f4b5b;
    box-shadow: none;
  }
  .p-datepicker:not(.p-datepicker-inline) .p-datepicker-header {
    background: #2a323d;
  }
  .p-datepicker .p-datepicker-header {
    padding: 0.5rem;
    color: rgba(255, 255, 255, 0.87);
    background: #2a323d;
    font-weight: 600;
    margin: 0;
    border-bottom: 1px solid #3f4b5b;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }
  .p-datepicker .p-datepicker-header .p-datepicker-prev,
.p-datepicker .p-datepicker-header .p-datepicker-next {
    width: 2rem;
    height: 2rem;
    color: rgba(255, 255, 255, 0.6);
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: color 0.15s, box-shadow 0.15s;
  }
  .p-datepicker .p-datepicker-header .p-datepicker-prev:enabled:hover,
.p-datepicker .p-datepicker-header .p-datepicker-next:enabled:hover {
    color: rgba(255, 255, 255, 0.87);
    border-color: transparent;
    background: transparent;
  }
  .p-datepicker .p-datepicker-header .p-datepicker-prev:focus-visible,
.p-datepicker .p-datepicker-header .p-datepicker-next:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 1px #e3f3fe;
  }
  .p-datepicker .p-datepicker-header .p-datepicker-title {
    line-height: 2rem;
  }
  .p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-year,
.p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-month {
    color: rgba(255, 255, 255, 0.87);
    transition: color 0.15s, box-shadow 0.15s;
    font-weight: 600;
    padding: 0.5rem;
  }
  .p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-year:enabled:hover,
.p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-month:enabled:hover {
    color: #8dd0ff;
  }
  .p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-month {
    margin-right: 0.5rem;
  }
  .p-datepicker table {
    font-size: 1rem;
    margin: 0.5rem 0;
  }
  .p-datepicker table th {
    padding: 0.5rem;
  }
  .p-datepicker table th > span {
    width: 2.5rem;
    height: 2.5rem;
  }
  .p-datepicker table td {
    padding: 0.5rem;
  }
  .p-datepicker table td > span {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 4px;
    transition: box-shadow 0.15s;
    border: 1px solid transparent;
  }
  .p-datepicker table td > span.p-highlight {
    color: #151515;
    background: #8dd0ff;
  }
  .p-datepicker table td > span:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 1px #e3f3fe;
  }
  .p-datepicker table td.p-datepicker-today > span {
    background: transparent;
    color: #8dd0ff;
    border-color: transparent;
  }
  .p-datepicker table td.p-datepicker-today > span.p-highlight {
    color: #151515;
    background: #8dd0ff;
  }
  .p-datepicker .p-datepicker-buttonbar {
    padding: 1rem 0;
    border-top: 1px solid #3f4b5b;
  }
  .p-datepicker .p-datepicker-buttonbar .p-button {
    width: auto;
  }
  .p-datepicker .p-timepicker {
    border-top: 1px solid #3f4b5b;
    padding: 0.5rem;
  }
  .p-datepicker .p-timepicker button {
    width: 2rem;
    height: 2rem;
    color: rgba(255, 255, 255, 0.6);
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: color 0.15s, box-shadow 0.15s;
  }
  .p-datepicker .p-timepicker button:enabled:hover {
    color: rgba(255, 255, 255, 0.87);
    border-color: transparent;
    background: transparent;
  }
  .p-datepicker .p-timepicker button:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 1px #e3f3fe;
  }
  .p-datepicker .p-timepicker button:last-child {
    margin-top: 0.2em;
  }
  .p-datepicker .p-timepicker span {
    font-size: 1.25rem;
  }
  .p-datepicker .p-timepicker > div {
    padding: 0 0.5rem;
  }
  .p-datepicker.p-datepicker-timeonly .p-timepicker {
    border-top: 0 none;
  }
  .p-datepicker .p-monthpicker {
    margin: 0.5rem 0;
  }
  .p-datepicker .p-monthpicker .p-monthpicker-month {
    padding: 0.5rem;
    transition: box-shadow 0.15s;
    border-radius: 4px;
  }
  .p-datepicker .p-monthpicker .p-monthpicker-month.p-highlight {
    color: #151515;
    background: #8dd0ff;
  }
  .p-datepicker .p-yearpicker {
    margin: 0.5rem 0;
  }
  .p-datepicker .p-yearpicker .p-yearpicker-year {
    padding: 0.5rem;
    transition: box-shadow 0.15s;
    border-radius: 4px;
  }
  .p-datepicker .p-yearpicker .p-yearpicker-year.p-highlight {
    color: #151515;
    background: #8dd0ff;
  }
  .p-datepicker.p-datepicker-multiple-month .p-datepicker-group {
    border-left: 1px solid #3f4b5b;
    padding-right: 0;
    padding-left: 0;
    padding-top: 0;
    padding-bottom: 0;
  }
  .p-datepicker.p-datepicker-multiple-month .p-datepicker-group:first-child {
    padding-left: 0;
  }
  .p-datepicker.p-datepicker-multiple-month .p-datepicker-group:last-child {
    padding-right: 0;
    border-left: 0 none;
  }
  .p-datepicker:not(.p-disabled) table td span:not(.p-highlight):not(.p-disabled):hover {
    background: rgba(255, 255, 255, 0.04);
  }
  .p-datepicker:not(.p-disabled) table td span:not(.p-highlight):not(.p-disabled):focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 1px #e3f3fe;
  }
  .p-datepicker:not(.p-disabled) .p-monthpicker .p-monthpicker-month:not(.p-disabled):not(.p-highlight):hover {
    background: rgba(255, 255, 255, 0.04);
  }
  .p-datepicker:not(.p-disabled) .p-monthpicker .p-monthpicker-month:not(.p-disabled):focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 1px #e3f3fe;
  }
  .p-datepicker:not(.p-disabled) .p-yearpicker .p-yearpicker-year:not(.p-disabled):not(.p-highlight):hover {
    background: rgba(255, 255, 255, 0.04);
  }
  .p-datepicker:not(.p-disabled) .p-yearpicker .p-yearpicker-year:not(.p-disabled):focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 1px #e3f3fe;
  }

  @media screen and (max-width: 769px) {
    .p-datepicker table th, .p-datepicker table td {
      padding: 0;
    }
  }
  .p-cascadeselect {
    background: #20262e;
    border: 1px solid #3f4b5b;
    transition: background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
    border-radius: 4px;
  }
  .p-cascadeselect:not(.p-disabled):hover {
    border-color: #3f4b5b;
  }
  .p-cascadeselect:not(.p-disabled).p-focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 1px #e3f3fe;
    border-color: #8dd0ff;
  }
  .p-cascadeselect .p-cascadeselect-label {
    background: transparent;
    border: 0 none;
    padding: 0.5rem 0.75rem;
  }
  .p-cascadeselect .p-cascadeselect-label.p-placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  .p-cascadeselect .p-cascadeselect-label:enabled:focus {
    outline: 0 none;
    box-shadow: none;
  }
  .p-cascadeselect .p-cascadeselect-trigger {
    background: transparent;
    color: rgba(255, 255, 255, 0.6);
    width: 2.357rem;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .p-cascadeselect.p-invalid.p-component {
    border-color: #f19ea6;
  }

  .p-cascadeselect-panel {
    background: #2a323d;
    color: rgba(255, 255, 255, 0.87);
    border: 1px solid #3f4b5b;
    border-radius: 4px;
    box-shadow: none;
  }
  .p-cascadeselect-panel .p-cascadeselect-items {
    padding: 0.5rem 0;
  }
  .p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item {
    margin: 0;
    border: 0 none;
    color: rgba(255, 255, 255, 0.87);
    background: transparent;
    transition: box-shadow 0.15s;
    border-radius: 0;
  }
  .p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item .p-cascadeselect-item-content {
    padding: 0.5rem 1.5rem;
  }
  .p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item .p-cascadeselect-item-content:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem #e3f3fe;
  }
  .p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item.p-highlight {
    color: #151515;
    background: #8dd0ff;
  }
  .p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item:not(.p-highlight):not(.p-disabled):hover {
    color: rgba(255, 255, 255, 0.87);
    background: rgba(255, 255, 255, 0.04);
  }
  .p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item .p-cascadeselect-group-icon {
    font-size: 0.875rem;
  }
  .p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item .p-cascadeselect-group-icon.p-icon {
    width: 0.875rem;
    height: 0.875rem;
  }

  .p-input-filled .p-cascadeselect {
    background: #3f4b5b;
  }
  .p-input-filled .p-cascadeselect:not(.p-disabled):hover {
    background-color: #3f4b5b;
  }
  .p-input-filled .p-cascadeselect:not(.p-disabled).p-focus {
    background-color: #3f4b5b;
  }

  .p-checkbox {
    width: 20px;
    height: 20px;
  }
  .p-checkbox .p-checkbox-box {
    border: 1px solid #3f4b5b;
    background: #20262e;
    width: 20px;
    height: 20px;
    color: rgba(255, 255, 255, 0.87);
    border-radius: 4px;
    transition: background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
  }
  .p-checkbox .p-checkbox-box .p-checkbox-icon {
    transition-duration: 0.15s;
    color: #151515;
    font-size: 14px;
  }
  .p-checkbox .p-checkbox-box .p-checkbox-icon.p-icon {
    width: 14px;
    height: 14px;
  }
  .p-checkbox .p-checkbox-box.p-highlight {
    border-color: #8dd0ff;
    background: #8dd0ff;
  }
  .p-checkbox .p-checkbox-box.p-highlight:not(.p-disabled):hover {
    border-color: #1dadff;
    background: #1dadff;
    color: #151515;
  }
  .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box:hover {
    border-color: #3f4b5b;
  }
  .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 1px #e3f3fe;
    border-color: #8dd0ff;
  }
  .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-highlight:hover {
    border-color: #1dadff;
    background: #1dadff;
    color: #151515;
  }
  .p-checkbox.p-invalid > .p-checkbox-box {
    border-color: #f19ea6;
  }

  .p-input-filled .p-checkbox .p-checkbox-box {
    background-color: #3f4b5b;
  }
  .p-input-filled .p-checkbox .p-checkbox-box.p-highlight {
    background: #8dd0ff;
  }
  .p-input-filled .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box:hover {
    background-color: #3f4b5b;
  }
  .p-input-filled .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-highlight:hover {
    background: #1dadff;
  }

  .p-highlight .p-checkbox .p-checkbox-box {
    border-color: #151515;
  }

  .p-chips .p-chips-multiple-container {
    padding: 0.25rem 0.75rem;
    gap: 0.5rem;
  }
  .p-chips .p-chips-multiple-container:not(.p-disabled):hover {
    border-color: #3f4b5b;
  }
  .p-chips .p-chips-multiple-container:not(.p-disabled).p-focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 1px #e3f3fe;
    border-color: #8dd0ff;
  }
  .p-chips .p-chips-multiple-container .p-chips-token {
    padding: 0.25rem 0.75rem;
    margin-right: 0.5rem;
    background: #8dd0ff;
    color: rgba(255, 255, 255, 0.87);
    border-radius: 16px;
  }
  .p-chips .p-chips-multiple-container .p-chips-token .p-chips-token-icon {
    margin-left: 0.5rem;
  }
  .p-chips .p-chips-multiple-container .p-chips-input-token {
    padding: 0.25rem 0;
  }
  .p-chips .p-chips-multiple-container .p-chips-input-token input {
    font-family: var(--font-family);
    font-feature-settings: var(--font-feature-settings, normal);
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.87);
    padding: 0;
    margin: 0;
  }
  .p-chips.p-invalid.p-component > .p-inputtext {
    border-color: #f19ea6;
  }

  .p-colorpicker-preview {
    width: 2rem;
    height: 2rem;
  }

  .p-colorpicker-panel {
    background: #2a323d;
    border: 1px solid #3f4b5b;
  }
  .p-colorpicker-panel .p-colorpicker-color-handle,
.p-colorpicker-panel .p-colorpicker-hue-handle {
    border-color: rgba(255, 255, 255, 0.87);
  }

  .p-colorpicker-overlay-panel {
    box-shadow: none;
  }

  .p-dropdown {
    background: #20262e;
    border: 1px solid #3f4b5b;
    transition: background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
    border-radius: 4px;
  }
  .p-dropdown:not(.p-disabled):hover {
    border-color: #3f4b5b;
  }
  .p-dropdown:not(.p-disabled).p-focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 1px #e3f3fe;
    border-color: #8dd0ff;
  }
  .p-dropdown.p-dropdown-clearable .p-dropdown-label {
    padding-right: 1.75rem;
  }
  .p-dropdown .p-dropdown-label {
    background: transparent;
    border: 0 none;
  }
  .p-dropdown .p-dropdown-label.p-placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  .p-dropdown .p-dropdown-label:enabled:focus {
    outline: 0 none;
    box-shadow: none;
  }
  .p-dropdown .p-dropdown-trigger {
    background: transparent;
    color: rgba(255, 255, 255, 0.6);
    width: 2.357rem;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .p-dropdown .p-dropdown-clear-icon {
    color: rgba(255, 255, 255, 0.6);
    right: 2.357rem;
  }
  .p-dropdown.p-invalid.p-component {
    border-color: #f19ea6;
  }

  .p-dropdown-panel {
    background: #2a323d;
    color: rgba(255, 255, 255, 0.87);
    border: 1px solid #3f4b5b;
    border-radius: 4px;
    box-shadow: none;
  }
  .p-dropdown-panel .p-dropdown-header {
    padding: 0.75rem 1.5rem;
    border-bottom: 1px solid #3f4b5b;
    color: rgba(255, 255, 255, 0.87);
    background: #2a323d;
    margin: 0;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }
  .p-dropdown-panel .p-dropdown-header .p-dropdown-filter {
    padding-right: 1.75rem;
    margin-right: -1.75rem;
  }
  .p-dropdown-panel .p-dropdown-header .p-dropdown-filter-icon {
    right: 0.75rem;
    color: rgba(255, 255, 255, 0.6);
  }
  .p-dropdown-panel .p-dropdown-header .p-dropdown-clearable-filter .p-dropdown-filter {
    padding-right: 3.5rem;
    margin-right: -3.5rem;
  }
  .p-dropdown-panel .p-dropdown-header .p-dropdown-clearable-filter .p-dropdown-filter-clear-icon {
    right: 2.5rem;
  }
  .p-dropdown-panel .p-dropdown-items {
    padding: 0.5rem 0;
  }
  .p-dropdown-panel .p-dropdown-items .p-dropdown-item {
    margin: 0;
    padding: 0.5rem 1.5rem;
    border: 0 none;
    color: rgba(255, 255, 255, 0.87);
    background: transparent;
    transition: box-shadow 0.15s;
    border-radius: 0;
  }
  .p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight {
    color: #151515;
    background: #8dd0ff;
  }
  .p-dropdown-panel .p-dropdown-items .p-dropdown-item:not(.p-highlight):not(.p-disabled):hover {
    color: rgba(255, 255, 255, 0.87);
    background: rgba(255, 255, 255, 0.04);
  }
  .p-dropdown-panel .p-dropdown-items .p-dropdown-item-group {
    margin: 0;
    padding: 0.75rem 1rem;
    color: rgba(255, 255, 255, 0.87);
    background: #2a323d;
    font-weight: 600;
  }
  .p-dropdown-panel .p-dropdown-items .p-dropdown-empty-message {
    padding: 0.5rem 1.5rem;
    color: rgba(255, 255, 255, 0.87);
    background: transparent;
  }

  .p-input-filled .p-dropdown {
    background: #3f4b5b;
  }
  .p-input-filled .p-dropdown:not(.p-disabled):hover {
    background-color: #3f4b5b;
  }
  .p-input-filled .p-dropdown:not(.p-disabled).p-focus {
    background-color: #3f4b5b;
  }
  .p-input-filled .p-dropdown:not(.p-disabled).p-focus .p-inputtext {
    background-color: transparent;
  }

  .p-inputgroup-addon {
    background: #2a323d;
    color: rgba(255, 255, 255, 0.6);
    border-top: 1px solid #3f4b5b;
    border-left: 1px solid #3f4b5b;
    border-bottom: 1px solid #3f4b5b;
    padding: 0.5rem 0.75rem;
    min-width: 2.357rem;
  }
  .p-inputgroup-addon:last-child {
    border-right: 1px solid #3f4b5b;
  }

  .p-inputgroup > .p-component,
.p-inputgroup > .p-inputwrapper > .p-inputtext,
.p-inputgroup > .p-float-label > .p-component {
    border-radius: 0;
    margin: 0;
  }
  .p-inputgroup > .p-component + .p-inputgroup-addon,
.p-inputgroup > .p-inputwrapper > .p-inputtext + .p-inputgroup-addon,
.p-inputgroup > .p-float-label > .p-component + .p-inputgroup-addon {
    border-left: 0 none;
  }
  .p-inputgroup > .p-component:focus,
.p-inputgroup > .p-inputwrapper > .p-inputtext:focus,
.p-inputgroup > .p-float-label > .p-component:focus {
    z-index: 1;
  }
  .p-inputgroup > .p-component:focus ~ label,
.p-inputgroup > .p-inputwrapper > .p-inputtext:focus ~ label,
.p-inputgroup > .p-float-label > .p-component:focus ~ label {
    z-index: 1;
  }

  .p-inputgroup-addon:first-child,
.p-inputgroup button:first-child,
.p-inputgroup input:first-child,
.p-inputgroup > .p-inputwrapper:first-child,
.p-inputgroup > .p-inputwrapper:first-child > .p-inputtext {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .p-inputgroup .p-float-label:first-child input {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .p-inputgroup-addon:last-child,
.p-inputgroup button:last-child,
.p-inputgroup input:last-child,
.p-inputgroup > .p-inputwrapper:last-child,
.p-inputgroup > .p-inputwrapper:last-child > .p-inputtext {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  .p-inputgroup .p-float-label:last-child input {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  .p-fluid .p-inputgroup .p-button {
    width: auto;
  }
  .p-fluid .p-inputgroup .p-button.p-button-icon-only {
    width: 2.357rem;
  }

  .p-inputnumber.p-invalid.p-component > .p-inputtext {
    border-color: #f19ea6;
  }

  .p-inputswitch {
    width: 3rem;
    height: 1.75rem;
  }
  .p-inputswitch .p-inputswitch-slider {
    background: #3f4b5b;
    transition: background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
    border-radius: 4px;
  }
  .p-inputswitch .p-inputswitch-slider:before {
    background: rgba(255, 255, 255, 0.6);
    width: 1.25rem;
    height: 1.25rem;
    left: 0.25rem;
    margin-top: -0.625rem;
    border-radius: 4px;
    transition-duration: 0.15s;
  }
  .p-inputswitch.p-inputswitch-checked .p-inputswitch-slider:before {
    transform: translateX(1.25rem);
  }
  .p-inputswitch.p-focus .p-inputswitch-slider {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 1px #e3f3fe;
  }
  .p-inputswitch:not(.p-disabled):hover .p-inputswitch-slider {
    background: #3f4b5b;
  }
  .p-inputswitch.p-inputswitch-checked .p-inputswitch-slider {
    background: #8dd0ff;
  }
  .p-inputswitch.p-inputswitch-checked .p-inputswitch-slider:before {
    background: #151515;
  }
  .p-inputswitch.p-inputswitch-checked:not(.p-disabled):hover .p-inputswitch-slider {
    background: #8dd0ff;
  }
  .p-inputswitch.p-invalid .p-inputswitch-slider {
    border-color: #f19ea6;
  }

  .p-inputtext {
    font-family: var(--font-family);
    font-feature-settings: var(--font-feature-settings, normal);
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.87);
    background: #20262e;
    padding: 0.5rem 0.75rem;
    border: 1px solid #3f4b5b;
    transition: background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
    appearance: none;
    border-radius: 4px;
  }
  .p-inputtext:enabled:hover {
    border-color: #3f4b5b;
  }
  .p-inputtext:enabled:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 1px #e3f3fe;
    border-color: #8dd0ff;
  }
  .p-inputtext.p-invalid.p-component {
    border-color: #f19ea6;
  }
  .p-inputtext.p-inputtext-sm {
    font-size: 0.875rem;
    padding: 0.4375rem 0.65625rem;
  }
  .p-inputtext.p-inputtext-lg {
    font-size: 1.25rem;
    padding: 0.625rem 0.9375rem;
  }

  .p-float-label > label {
    left: 0.75rem;
    color: rgba(255, 255, 255, 0.6);
    transition-duration: 0.15s;
  }

  .p-float-label > label.p-error {
    color: #f19ea6;
  }

  .p-input-icon-left > i:first-of-type,
.p-input-icon-left > svg:first-of-type,
.p-input-icon-left > .p-input-prefix {
    left: 0.75rem;
    color: rgba(255, 255, 255, 0.6);
  }

  .p-input-icon-left > .p-inputtext {
    padding-left: 2.5rem;
  }

  .p-input-icon-left.p-float-label > label {
    left: 2.5rem;
  }

  .p-input-icon-right > i:last-of-type,
.p-input-icon-right > svg:last-of-type,
.p-input-icon-right > .p-input-suffix {
    right: 0.75rem;
    color: rgba(255, 255, 255, 0.6);
  }

  .p-input-icon-right > .p-inputtext {
    padding-right: 2.5rem;
  }

  ::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  :-moz-placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  ::-moz-placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  :-ms-input-placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  .p-input-filled .p-inputtext {
    background-color: #3f4b5b;
  }
  .p-input-filled .p-inputtext:enabled:hover {
    background-color: #3f4b5b;
  }
  .p-input-filled .p-inputtext:enabled:focus {
    background-color: #3f4b5b;
  }

  .p-inputtext-sm .p-inputtext {
    font-size: 0.875rem;
    padding: 0.4375rem 0.65625rem;
  }

  .p-inputtext-lg .p-inputtext {
    font-size: 1.25rem;
    padding: 0.625rem 0.9375rem;
  }

  .p-listbox {
    background: #2a323d;
    color: rgba(255, 255, 255, 0.87);
    border: 1px solid #3f4b5b;
    border-radius: 4px;
  }
  .p-listbox .p-listbox-header {
    padding: 0.75rem 1.5rem;
    border-bottom: 1px solid #3f4b5b;
    color: rgba(255, 255, 255, 0.87);
    background: #2a323d;
    margin: 0;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }
  .p-listbox .p-listbox-header .p-listbox-filter {
    padding-right: 1.75rem;
  }
  .p-listbox .p-listbox-header .p-listbox-filter-icon {
    right: 0.75rem;
    color: rgba(255, 255, 255, 0.6);
  }
  .p-listbox .p-listbox-list {
    padding: 0.5rem 0;
  }
  .p-listbox .p-listbox-list .p-listbox-item {
    margin: 0;
    padding: 0.5rem 1.5rem;
    border: 0 none;
    color: rgba(255, 255, 255, 0.87);
    transition: box-shadow 0.15s;
    border-radius: 0;
  }
  .p-listbox .p-listbox-list .p-listbox-item.p-highlight {
    color: #151515;
    background: #8dd0ff;
  }
  .p-listbox .p-listbox-list .p-listbox-item:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem #e3f3fe;
  }
  .p-listbox .p-listbox-list .p-listbox-item-group {
    margin: 0;
    padding: 0.75rem 1rem;
    color: rgba(255, 255, 255, 0.87);
    background: #2a323d;
    font-weight: 600;
  }
  .p-listbox .p-listbox-list .p-listbox-empty-message {
    padding: 0.5rem 1.5rem;
    color: rgba(255, 255, 255, 0.87);
    background: transparent;
  }
  .p-listbox:not(.p-disabled) .p-listbox-item:not(.p-highlight):not(.p-disabled):hover {
    color: rgba(255, 255, 255, 0.87);
    background: rgba(255, 255, 255, 0.04);
  }
  .p-listbox.p-invalid {
    border-color: #f19ea6;
  }

  .p-mention-panel {
    background: #2a323d;
    color: rgba(255, 255, 255, 0.87);
    border: 1px solid #3f4b5b;
    border-radius: 4px;
    box-shadow: none;
  }
  .p-mention-panel .p-mention-items {
    padding: 0.5rem 0;
  }
  .p-mention-panel .p-mention-items .p-mention-item {
    margin: 0;
    padding: 0.5rem 1.5rem;
    border: 0 none;
    color: rgba(255, 255, 255, 0.87);
    background: transparent;
    transition: box-shadow 0.15s;
    border-radius: 0;
  }
  .p-mention-panel .p-mention-items .p-mention-item:hover {
    color: rgba(255, 255, 255, 0.87);
    background: rgba(255, 255, 255, 0.04);
  }
  .p-mention-panel .p-mention-items .p-mention-item.p-highlight {
    color: #151515;
    background: #8dd0ff;
  }

  .p-multiselect {
    background: #20262e;
    border: 1px solid #3f4b5b;
    transition: background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
    border-radius: 4px;
  }
  .p-multiselect:not(.p-disabled):hover {
    border-color: #3f4b5b;
  }
  .p-multiselect:not(.p-disabled).p-focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 1px #e3f3fe;
    border-color: #8dd0ff;
  }
  .p-multiselect.p-multiselect-clearable .p-multiselect-label {
    padding-right: 1.75rem;
  }
  .p-multiselect .p-multiselect-label {
    padding: 0.5rem 0.75rem;
    transition: background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
  }
  .p-multiselect .p-multiselect-label.p-placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  .p-multiselect.p-multiselect-chip .p-multiselect-token {
    padding: 0.25rem 0.75rem;
    margin-right: 0.5rem;
    background: #3f4b5b;
    color: rgba(255, 255, 255, 0.87);
    border-radius: 16px;
  }
  .p-multiselect.p-multiselect-chip .p-multiselect-token .p-multiselect-token-icon {
    margin-left: 0.5rem;
  }
  .p-multiselect .p-multiselect-trigger {
    background: transparent;
    color: rgba(255, 255, 255, 0.6);
    width: 2.357rem;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .p-multiselect .p-multiselect-clear-icon {
    color: rgba(255, 255, 255, 0.6);
    right: 2.357rem;
  }
  .p-multiselect.p-invalid.p-component {
    border-color: #f19ea6;
  }

  .p-inputwrapper-filled.p-multiselect.p-multiselect-chip .p-multiselect-label {
    padding: 0.25rem 0.75rem;
  }
  .p-inputwrapper-filled.p-multiselect.p-multiselect-chip .p-multiselect-label.p-multiselect-items-label {
    padding: 0.5rem 0.75rem;
  }
  .p-inputwrapper-filled.p-multiselect.p-multiselect-clearable .p-multiselect-label {
    padding-right: 1.75rem;
  }

  .p-multiselect-panel {
    background: #2a323d;
    color: rgba(255, 255, 255, 0.87);
    border: 1px solid #3f4b5b;
    border-radius: 4px;
    box-shadow: none;
  }
  .p-multiselect-panel .p-multiselect-header {
    padding: 0.75rem 1.5rem;
    border-bottom: 1px solid #3f4b5b;
    color: rgba(255, 255, 255, 0.87);
    background: #2a323d;
    margin: 0;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }
  .p-multiselect-panel .p-multiselect-header .p-multiselect-filter-container {
    margin: 0 0.5rem;
  }
  .p-multiselect-panel .p-multiselect-header .p-multiselect-filter-container .p-inputtext {
    padding-right: 1.75rem;
  }
  .p-multiselect-panel .p-multiselect-header .p-multiselect-filter-container .p-multiselect-filter-icon {
    right: 0.75rem;
    color: rgba(255, 255, 255, 0.6);
  }
  .p-multiselect-panel .p-multiselect-header .p-multiselect-close {
    width: 2rem;
    height: 2rem;
    color: rgba(255, 255, 255, 0.6);
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: color 0.15s, box-shadow 0.15s;
  }
  .p-multiselect-panel .p-multiselect-header .p-multiselect-close:enabled:hover {
    color: rgba(255, 255, 255, 0.87);
    border-color: transparent;
    background: transparent;
  }
  .p-multiselect-panel .p-multiselect-header .p-multiselect-close:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 1px #e3f3fe;
  }
  .p-multiselect-panel .p-multiselect-items {
    padding: 0.5rem 0;
  }
  .p-multiselect-panel .p-multiselect-items .p-multiselect-item {
    margin: 0;
    padding: 0.5rem 1.5rem;
    border: 0 none;
    color: rgba(255, 255, 255, 0.87);
    background: transparent;
    transition: box-shadow 0.15s;
    border-radius: 0;
  }
  .p-multiselect-panel .p-multiselect-items .p-multiselect-item.p-highlight {
    color: #151515;
    background: #8dd0ff;
  }
  .p-multiselect-panel .p-multiselect-items .p-multiselect-item:not(.p-highlight):not(.p-disabled):hover {
    color: rgba(255, 255, 255, 0.87);
    background: rgba(255, 255, 255, 0.04);
  }
  .p-multiselect-panel .p-multiselect-items .p-multiselect-item:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem #e3f3fe;
  }
  .p-multiselect-panel .p-multiselect-items .p-multiselect-item .p-checkbox {
    margin-right: 0.5rem;
  }
  .p-multiselect-panel .p-multiselect-items .p-multiselect-item-group {
    margin: 0;
    padding: 0.75rem 1rem;
    color: rgba(255, 255, 255, 0.87);
    background: #2a323d;
    font-weight: 600;
  }
  .p-multiselect-panel .p-multiselect-items .p-multiselect-empty-message {
    padding: 0.5rem 1.5rem;
    color: rgba(255, 255, 255, 0.87);
    background: transparent;
  }

  .p-input-filled .p-multiselect {
    background: #3f4b5b;
  }
  .p-input-filled .p-multiselect:not(.p-disabled):hover {
    background-color: #3f4b5b;
  }
  .p-input-filled .p-multiselect:not(.p-disabled).p-focus {
    background-color: #3f4b5b;
  }

  .p-password.p-invalid.p-component > .p-inputtext {
    border-color: #f19ea6;
  }

  .p-password-panel {
    padding: 1.25rem;
    background: #2a323d;
    color: rgba(255, 255, 255, 0.87);
    border: 1px solid #3f4b5b;
    box-shadow: none;
    border-radius: 4px;
  }
  .p-password-panel .p-password-meter {
    margin-bottom: 0.5rem;
    background: #3f4b5b;
  }
  .p-password-panel .p-password-meter .p-password-strength.weak {
    background: #f19ea6;
  }
  .p-password-panel .p-password-meter .p-password-strength.medium {
    background: #ffe082;
  }
  .p-password-panel .p-password-meter .p-password-strength.strong {
    background: #9fdaa8;
  }

  .p-radiobutton {
    width: 20px;
    height: 20px;
  }
  .p-radiobutton .p-radiobutton-box {
    border: 1px solid #3f4b5b;
    background: #20262e;
    width: 20px;
    height: 20px;
    color: rgba(255, 255, 255, 0.87);
    border-radius: 50%;
    transition: background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
  }
  .p-radiobutton .p-radiobutton-box:not(.p-disabled):not(.p-highlight):hover {
    border-color: #3f4b5b;
  }
  .p-radiobutton .p-radiobutton-box:not(.p-disabled).p-focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 1px #e3f3fe;
    border-color: #8dd0ff;
  }
  .p-radiobutton .p-radiobutton-box .p-radiobutton-icon {
    width: 12px;
    height: 12px;
    transition-duration: 0.15s;
    background-color: #151515;
  }
  .p-radiobutton .p-radiobutton-box.p-highlight {
    border-color: #8dd0ff;
    background: #8dd0ff;
  }
  .p-radiobutton .p-radiobutton-box.p-highlight:not(.p-disabled):hover {
    border-color: #1dadff;
    background: #1dadff;
    color: #151515;
  }
  .p-radiobutton.p-invalid > .p-radiobutton-box {
    border-color: #f19ea6;
  }
  .p-radiobutton:focus {
    outline: 0 none;
  }

  .p-input-filled .p-radiobutton .p-radiobutton-box {
    background-color: #3f4b5b;
  }
  .p-input-filled .p-radiobutton .p-radiobutton-box:not(.p-disabled):hover {
    background-color: #3f4b5b;
  }
  .p-input-filled .p-radiobutton .p-radiobutton-box.p-highlight {
    background: #8dd0ff;
  }
  .p-input-filled .p-radiobutton .p-radiobutton-box.p-highlight:not(.p-disabled):hover {
    background: #1dadff;
  }

  .p-highlight .p-radiobutton .p-radiobutton-box {
    border-color: #151515;
  }

  .p-rating {
    gap: 0.5rem;
  }
  .p-rating .p-rating-item .p-rating-icon {
    color: rgba(255, 255, 255, 0.87);
    transition: background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
    font-size: 1.143rem;
  }
  .p-rating .p-rating-item .p-rating-icon.p-icon {
    width: 1.143rem;
    height: 1.143rem;
  }
  .p-rating .p-rating-item .p-rating-icon.p-rating-cancel {
    color: #f19ea6;
  }
  .p-rating .p-rating-item:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 1px #e3f3fe;
  }
  .p-rating .p-rating-item.p-rating-item-active .p-rating-icon {
    color: #8dd0ff;
  }
  .p-rating:not(.p-disabled):not(.p-readonly) .p-rating-item:hover .p-rating-icon {
    color: #8dd0ff;
  }
  .p-rating:not(.p-disabled):not(.p-readonly) .p-rating-item:hover .p-rating-icon.p-rating-cancel {
    color: #f19ea6;
  }

  .p-highlight .p-rating .p-rating-item.p-rating-item-active .p-rating-icon {
    color: #151515;
  }

  .p-selectbutton .p-button {
    background: #6c757d;
    border: 1px solid #6c757d;
    color: #ffffff;
    transition: background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
  }
  .p-selectbutton .p-button .p-button-icon-left,
.p-selectbutton .p-button .p-button-icon-right {
    color: #ffffff;
  }
  .p-selectbutton .p-button:not(.p-disabled):not(.p-highlight):hover {
    background: #5a6268;
    border-color: #545b62;
    color: #ffffff;
  }
  .p-selectbutton .p-button:not(.p-disabled):not(.p-highlight):hover .p-button-icon-left,
.p-selectbutton .p-button:not(.p-disabled):not(.p-highlight):hover .p-button-icon-right {
    color: #ffffff;
  }
  .p-selectbutton .p-button.p-highlight {
    background: #545b62;
    border-color: #4e555b;
    color: #ffffff;
  }
  .p-selectbutton .p-button.p-highlight .p-button-icon-left,
.p-selectbutton .p-button.p-highlight .p-button-icon-right {
    color: #ffffff;
  }
  .p-selectbutton .p-button.p-highlight:hover {
    background: #545b62;
    border-color: #4e555b;
    color: #ffffff;
  }
  .p-selectbutton .p-button.p-highlight:hover .p-button-icon-left,
.p-selectbutton .p-button.p-highlight:hover .p-button-icon-right {
    color: #ffffff;
  }
  .p-selectbutton.p-invalid > .p-button {
    border-color: #f19ea6;
  }

  .p-slider {
    background: #3f4b5b;
    border: 0 none;
    border-radius: 4px;
  }
  .p-slider.p-slider-horizontal {
    height: 0.286rem;
  }
  .p-slider.p-slider-horizontal .p-slider-handle {
    margin-top: -0.5715rem;
    margin-left: -0.5715rem;
  }
  .p-slider.p-slider-vertical {
    width: 0.286rem;
  }
  .p-slider.p-slider-vertical .p-slider-handle {
    margin-left: -0.5715rem;
    margin-bottom: -0.5715rem;
  }
  .p-slider .p-slider-handle {
    height: 1.143rem;
    width: 1.143rem;
    background: #8dd0ff;
    border: 2px solid #8dd0ff;
    border-radius: 4px;
    transition: background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
  }
  .p-slider .p-slider-handle:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 1px #e3f3fe;
  }
  .p-slider .p-slider-range {
    background: #8dd0ff;
  }
  .p-slider:not(.p-disabled) .p-slider-handle:hover {
    background: #56bdff;
    border-color: #56bdff;
  }

  .p-treeselect {
    background: #20262e;
    border: 1px solid #3f4b5b;
    transition: background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
    border-radius: 4px;
  }
  .p-treeselect:not(.p-disabled):hover {
    border-color: #3f4b5b;
  }
  .p-treeselect:not(.p-disabled).p-focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 1px #e3f3fe;
    border-color: #8dd0ff;
  }
  .p-treeselect.p-treeselect-clearable .p-treeselect-label {
    padding-right: 1.75rem;
  }
  .p-treeselect .p-treeselect-label {
    padding: 0.5rem 0.75rem;
    transition: background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
  }
  .p-treeselect .p-treeselect-label.p-placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  .p-treeselect.p-treeselect-chip .p-treeselect-token {
    padding: 0.25rem 0.75rem;
    margin-right: 0.5rem;
    background: #3f4b5b;
    color: rgba(255, 255, 255, 0.87);
    border-radius: 16px;
  }
  .p-treeselect .p-treeselect-trigger {
    background: transparent;
    color: rgba(255, 255, 255, 0.6);
    width: 2.357rem;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .p-treeselect .p-treeselect-clear-icon {
    color: rgba(255, 255, 255, 0.6);
    right: 2.357rem;
  }
  .p-treeselect.p-invalid.p-component {
    border-color: #f19ea6;
  }

  .p-inputwrapper-filled.p-treeselect.p-treeselect-chip .p-treeselect-label {
    padding: 0.25rem 0.75rem;
  }

  .p-treeselect-panel {
    background: #2a323d;
    color: rgba(255, 255, 255, 0.87);
    border: 1px solid #3f4b5b;
    border-radius: 4px;
    box-shadow: none;
  }
  .p-treeselect-panel .p-treeselect-header {
    padding: 0.75rem 1.5rem;
    border-bottom: 1px solid #3f4b5b;
    color: rgba(255, 255, 255, 0.87);
    background: #2a323d;
    margin: 0;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }
  .p-treeselect-panel .p-treeselect-header .p-treeselect-filter-container {
    margin-right: 0.5rem;
  }
  .p-treeselect-panel .p-treeselect-header .p-treeselect-filter-container .p-treeselect-filter {
    padding-right: 1.75rem;
  }
  .p-treeselect-panel .p-treeselect-header .p-treeselect-filter-container .p-treeselect-filter-icon {
    right: 0.75rem;
    color: rgba(255, 255, 255, 0.6);
  }
  .p-treeselect-panel .p-treeselect-header .p-treeselect-filter-container.p-treeselect-clearable-filter .p-treeselect-filter {
    padding-right: 3.5rem;
  }
  .p-treeselect-panel .p-treeselect-header .p-treeselect-filter-container.p-treeselect-clearable-filter .p-treeselect-filter-clear-icon {
    right: 2.5rem;
  }
  .p-treeselect-panel .p-treeselect-header .p-treeselect-close {
    width: 2rem;
    height: 2rem;
    color: rgba(255, 255, 255, 0.6);
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: color 0.15s, box-shadow 0.15s;
  }
  .p-treeselect-panel .p-treeselect-header .p-treeselect-close:enabled:hover {
    color: rgba(255, 255, 255, 0.87);
    border-color: transparent;
    background: transparent;
  }
  .p-treeselect-panel .p-treeselect-header .p-treeselect-close:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 1px #e3f3fe;
  }
  .p-treeselect-panel .p-treeselect-items-wrapper .p-tree {
    border: 0 none;
  }
  .p-treeselect-panel .p-treeselect-items-wrapper .p-treeselect-empty-message {
    padding: 0.5rem 1.5rem;
    color: rgba(255, 255, 255, 0.87);
    background: transparent;
  }

  .p-input-filled .p-treeselect {
    background: #3f4b5b;
  }
  .p-input-filled .p-treeselect:not(.p-disabled):hover {
    background-color: #3f4b5b;
  }
  .p-input-filled .p-treeselect:not(.p-disabled).p-focus {
    background-color: #3f4b5b;
  }

  .p-togglebutton.p-button {
    background: #6c757d;
    border: 1px solid #6c757d;
    color: #ffffff;
    transition: background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
  }
  .p-togglebutton.p-button .p-button-icon-left,
.p-togglebutton.p-button .p-button-icon-right {
    color: #ffffff;
  }
  .p-togglebutton.p-button:not(.p-disabled):not(.p-highlight):hover {
    background: #5a6268;
    border-color: #545b62;
    color: #ffffff;
  }
  .p-togglebutton.p-button:not(.p-disabled):not(.p-highlight):hover .p-button-icon-left,
.p-togglebutton.p-button:not(.p-disabled):not(.p-highlight):hover .p-button-icon-right {
    color: #ffffff;
  }
  .p-togglebutton.p-button.p-highlight {
    background: #545b62;
    border-color: #4e555b;
    color: #ffffff;
  }
  .p-togglebutton.p-button.p-highlight .p-button-icon-left,
.p-togglebutton.p-button.p-highlight .p-button-icon-right {
    color: #ffffff;
  }
  .p-togglebutton.p-button.p-highlight:hover {
    background: #545b62;
    border-color: #4e555b;
    color: #ffffff;
  }
  .p-togglebutton.p-button.p-highlight:hover .p-button-icon-left,
.p-togglebutton.p-button.p-highlight:hover .p-button-icon-right {
    color: #ffffff;
  }
  .p-togglebutton.p-button.p-invalid > .p-button {
    border-color: #f19ea6;
  }

  .p-button {
    color: #151515;
    background: #8dd0ff;
    border: 1px solid #8dd0ff;
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
    transition: background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
    border-radius: 4px;
  }
  .p-button:not(:disabled):hover {
    background: #56bdff;
    color: #151515;
    border-color: #56bdff;
  }
  .p-button:not(:disabled):active {
    background: #1dadff;
    color: #151515;
    border-color: #1dadff;
  }
  .p-button.p-button-outlined {
    background-color: transparent;
    color: #8dd0ff;
    border: 1px solid;
  }
  .p-button.p-button-outlined:not(:disabled):hover {
    background: rgba(141, 208, 255, 0.04);
    color: #8dd0ff;
    border: 1px solid;
  }
  .p-button.p-button-outlined:not(:disabled):active {
    background: rgba(141, 208, 255, 0.16);
    color: #8dd0ff;
    border: 1px solid;
  }
  .p-button.p-button-outlined.p-button-plain {
    color: rgba(255, 255, 255, 0.6);
    border-color: rgba(255, 255, 255, 0.6);
  }
  .p-button.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: rgba(255, 255, 255, 0.04);
    color: rgba(255, 255, 255, 0.6);
  }
  .p-button.p-button-outlined.p-button-plain:not(:disabled):active {
    background: rgba(255, 255, 255, 0.16);
    color: rgba(255, 255, 255, 0.6);
  }
  .p-button.p-button-text {
    background-color: transparent;
    color: #8dd0ff;
    border-color: transparent;
  }
  .p-button.p-button-text:not(:disabled):hover {
    background: rgba(141, 208, 255, 0.04);
    color: #8dd0ff;
    border-color: transparent;
  }
  .p-button.p-button-text:not(:disabled):active {
    background: rgba(141, 208, 255, 0.16);
    color: #8dd0ff;
    border-color: transparent;
  }
  .p-button.p-button-text.p-button-plain {
    color: rgba(255, 255, 255, 0.6);
  }
  .p-button.p-button-text.p-button-plain:not(:disabled):hover {
    background: rgba(255, 255, 255, 0.04);
    color: rgba(255, 255, 255, 0.6);
  }
  .p-button.p-button-text.p-button-plain:not(:disabled):active {
    background: rgba(255, 255, 255, 0.16);
    color: rgba(255, 255, 255, 0.6);
  }
  .p-button:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 1px #e3f3fe;
  }
  .p-button .p-button-label {
    transition-duration: 0.15s;
  }
  .p-button .p-button-icon-left {
    margin-right: 0.5rem;
  }
  .p-button .p-button-icon-right {
    margin-left: 0.5rem;
  }
  .p-button .p-button-icon-bottom {
    margin-top: 0.5rem;
  }
  .p-button .p-button-icon-top {
    margin-bottom: 0.5rem;
  }
  .p-button .p-badge {
    margin-left: 0.5rem;
    min-width: 1rem;
    height: 1rem;
    line-height: 1rem;
    color: #8dd0ff;
    background-color: #151515;
  }
  .p-button.p-button-raised {
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }
  .p-button.p-button-rounded {
    border-radius: 2rem;
  }
  .p-button.p-button-icon-only {
    width: 2.357rem;
    padding: 0.5rem 0;
  }
  .p-button.p-button-icon-only .p-button-icon-left,
.p-button.p-button-icon-only .p-button-icon-right {
    margin: 0;
  }
  .p-button.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: 2.357rem;
  }
  .p-button.p-button-sm {
    font-size: 0.875rem;
    padding: 0.4375rem 0.65625rem;
  }
  .p-button.p-button-sm .p-button-icon {
    font-size: 0.875rem;
  }
  .p-button.p-button-lg {
    font-size: 1.25rem;
    padding: 0.625rem 0.9375rem;
  }
  .p-button.p-button-lg .p-button-icon {
    font-size: 1.25rem;
  }
  .p-button.p-button-loading-label-only.p-button-loading-left .p-button-label {
    margin-left: 0.5rem;
  }
  .p-button.p-button-loading-label-only.p-button-loading-right .p-button-label {
    margin-right: 0.5rem;
  }
  .p-button.p-button-loading-label-only.p-button-loading-top .p-button-label {
    margin-top: 0.5rem;
  }
  .p-button.p-button-loading-label-only.p-button-loading-bottom .p-button-label {
    margin-bottom: 0.5rem;
  }
  .p-button.p-button-loading-label-only .p-button-loading-icon {
    margin: 0;
  }

  .p-fluid .p-button {
    width: 100%;
  }
  .p-fluid .p-button-icon-only {
    width: 2.357rem;
  }
  .p-fluid .p-buttonset {
    display: flex;
  }
  .p-fluid .p-buttonset .p-button {
    flex: 1;
  }

  .p-button.p-button-secondary, .p-buttonset.p-button-secondary > .p-button, .p-splitbutton.p-button-secondary > .p-button, .p-fileupload-choose.p-button-secondary {
    color: #ffffff;
    background: #6c757d;
    border: 1px solid #6c757d;
  }
  .p-button.p-button-secondary:not(:disabled):hover, .p-buttonset.p-button-secondary > .p-button:not(:disabled):hover, .p-splitbutton.p-button-secondary > .p-button:not(:disabled):hover, .p-fileupload-choose.p-button-secondary:not(:disabled):hover {
    background: #5a6268;
    color: #ffffff;
    border-color: #5a6268;
  }
  .p-button.p-button-secondary:not(:disabled):focus, .p-buttonset.p-button-secondary > .p-button:not(:disabled):focus, .p-splitbutton.p-button-secondary > .p-button:not(:disabled):focus, .p-fileupload-choose.p-button-secondary:not(:disabled):focus {
    box-shadow: 0 0 0 1px rgba(130, 138, 145, 0.5);
  }
  .p-button.p-button-secondary:not(:disabled):active, .p-buttonset.p-button-secondary > .p-button:not(:disabled):active, .p-splitbutton.p-button-secondary > .p-button:not(:disabled):active, .p-fileupload-choose.p-button-secondary:not(:disabled):active {
    background: #545b62;
    color: #ffffff;
    border-color: #4e555b;
  }
  .p-button.p-button-secondary.p-button-outlined, .p-buttonset.p-button-secondary > .p-button.p-button-outlined, .p-splitbutton.p-button-secondary > .p-button.p-button-outlined, .p-fileupload-choose.p-button-secondary.p-button-outlined {
    background-color: transparent;
    color: #6c757d;
    border: 1px solid;
  }
  .p-button.p-button-secondary.p-button-outlined:not(:disabled):hover, .p-buttonset.p-button-secondary > .p-button.p-button-outlined:not(:disabled):hover, .p-splitbutton.p-button-secondary > .p-button.p-button-outlined:not(:disabled):hover, .p-fileupload-choose.p-button-secondary.p-button-outlined:not(:disabled):hover {
    background: rgba(108, 117, 125, 0.04);
    color: #6c757d;
    border: 1px solid;
  }
  .p-button.p-button-secondary.p-button-outlined:not(:disabled):active, .p-buttonset.p-button-secondary > .p-button.p-button-outlined:not(:disabled):active, .p-splitbutton.p-button-secondary > .p-button.p-button-outlined:not(:disabled):active, .p-fileupload-choose.p-button-secondary.p-button-outlined:not(:disabled):active {
    background: rgba(108, 117, 125, 0.16);
    color: #6c757d;
    border: 1px solid;
  }
  .p-button.p-button-secondary.p-button-text, .p-buttonset.p-button-secondary > .p-button.p-button-text, .p-splitbutton.p-button-secondary > .p-button.p-button-text, .p-fileupload-choose.p-button-secondary.p-button-text {
    background-color: transparent;
    color: #6c757d;
    border-color: transparent;
  }
  .p-button.p-button-secondary.p-button-text:not(:disabled):hover, .p-buttonset.p-button-secondary > .p-button.p-button-text:not(:disabled):hover, .p-splitbutton.p-button-secondary > .p-button.p-button-text:not(:disabled):hover, .p-fileupload-choose.p-button-secondary.p-button-text:not(:disabled):hover {
    background: rgba(108, 117, 125, 0.04);
    border-color: transparent;
    color: #6c757d;
  }
  .p-button.p-button-secondary.p-button-text:not(:disabled):active, .p-buttonset.p-button-secondary > .p-button.p-button-text:not(:disabled):active, .p-splitbutton.p-button-secondary > .p-button.p-button-text:not(:disabled):active, .p-fileupload-choose.p-button-secondary.p-button-text:not(:disabled):active {
    background: rgba(108, 117, 125, 0.16);
    border-color: transparent;
    color: #6c757d;
  }

  .p-button.p-button-info, .p-buttonset.p-button-info > .p-button, .p-splitbutton.p-button-info > .p-button, .p-fileupload-choose.p-button-info {
    color: #151515;
    background: #7fd8e6;
    border: 1px solid #4cc8db;
  }
  .p-button.p-button-info:not(:disabled):hover, .p-buttonset.p-button-info > .p-button:not(:disabled):hover, .p-splitbutton.p-button-info > .p-button:not(:disabled):hover, .p-fileupload-choose.p-button-info:not(:disabled):hover {
    background: #4cc8db;
    color: #151515;
    border-color: #26bdd3;
  }
  .p-button.p-button-info:not(:disabled):focus, .p-buttonset.p-button-info > .p-button:not(:disabled):focus, .p-splitbutton.p-button-info > .p-button:not(:disabled):focus, .p-fileupload-choose.p-button-info:not(:disabled):focus {
    box-shadow: 0 0 0 1px #b1e8f0;
  }
  .p-button.p-button-info:not(:disabled):active, .p-buttonset.p-button-info > .p-button:not(:disabled):active, .p-splitbutton.p-button-info > .p-button:not(:disabled):active, .p-fileupload-choose.p-button-info:not(:disabled):active {
    background: #26bdd3;
    color: #151515;
    border-color: #00b2cc;
  }
  .p-button.p-button-info.p-button-outlined, .p-buttonset.p-button-info > .p-button.p-button-outlined, .p-splitbutton.p-button-info > .p-button.p-button-outlined, .p-fileupload-choose.p-button-info.p-button-outlined {
    background-color: transparent;
    color: #7fd8e6;
    border: 1px solid;
  }
  .p-button.p-button-info.p-button-outlined:not(:disabled):hover, .p-buttonset.p-button-info > .p-button.p-button-outlined:not(:disabled):hover, .p-splitbutton.p-button-info > .p-button.p-button-outlined:not(:disabled):hover, .p-fileupload-choose.p-button-info.p-button-outlined:not(:disabled):hover {
    background: rgba(127, 216, 230, 0.04);
    color: #7fd8e6;
    border: 1px solid;
  }
  .p-button.p-button-info.p-button-outlined:not(:disabled):active, .p-buttonset.p-button-info > .p-button.p-button-outlined:not(:disabled):active, .p-splitbutton.p-button-info > .p-button.p-button-outlined:not(:disabled):active, .p-fileupload-choose.p-button-info.p-button-outlined:not(:disabled):active {
    background: rgba(127, 216, 230, 0.16);
    color: #7fd8e6;
    border: 1px solid;
  }
  .p-button.p-button-info.p-button-text, .p-buttonset.p-button-info > .p-button.p-button-text, .p-splitbutton.p-button-info > .p-button.p-button-text, .p-fileupload-choose.p-button-info.p-button-text {
    background-color: transparent;
    color: #7fd8e6;
    border-color: transparent;
  }
  .p-button.p-button-info.p-button-text:not(:disabled):hover, .p-buttonset.p-button-info > .p-button.p-button-text:not(:disabled):hover, .p-splitbutton.p-button-info > .p-button.p-button-text:not(:disabled):hover, .p-fileupload-choose.p-button-info.p-button-text:not(:disabled):hover {
    background: rgba(127, 216, 230, 0.04);
    border-color: transparent;
    color: #7fd8e6;
  }
  .p-button.p-button-info.p-button-text:not(:disabled):active, .p-buttonset.p-button-info > .p-button.p-button-text:not(:disabled):active, .p-splitbutton.p-button-info > .p-button.p-button-text:not(:disabled):active, .p-fileupload-choose.p-button-info.p-button-text:not(:disabled):active {
    background: rgba(127, 216, 230, 0.16);
    border-color: transparent;
    color: #7fd8e6;
  }

  .p-button.p-button-success, .p-buttonset.p-button-success > .p-button, .p-splitbutton.p-button-success > .p-button, .p-fileupload-choose.p-button-success {
    color: #151515;
    background: #9fdaa8;
    border: 1px solid #78cc86;
  }
  .p-button.p-button-success:not(:disabled):hover, .p-buttonset.p-button-success > .p-button:not(:disabled):hover, .p-splitbutton.p-button-success > .p-button:not(:disabled):hover, .p-fileupload-choose.p-button-success:not(:disabled):hover {
    background: #78cc86;
    color: #151515;
    border-color: #5ac06c;
  }
  .p-button.p-button-success:not(:disabled):focus, .p-buttonset.p-button-success > .p-button:not(:disabled):focus, .p-splitbutton.p-button-success > .p-button:not(:disabled):focus, .p-fileupload-choose.p-button-success:not(:disabled):focus {
    box-shadow: 0 0 0 1px #c5e8ca;
  }
  .p-button.p-button-success:not(:disabled):active, .p-buttonset.p-button-success > .p-button:not(:disabled):active, .p-splitbutton.p-button-success > .p-button:not(:disabled):active, .p-fileupload-choose.p-button-success:not(:disabled):active {
    background: #5ac06c;
    color: #151515;
    border-color: #3cb553;
  }
  .p-button.p-button-success.p-button-outlined, .p-buttonset.p-button-success > .p-button.p-button-outlined, .p-splitbutton.p-button-success > .p-button.p-button-outlined, .p-fileupload-choose.p-button-success.p-button-outlined {
    background-color: transparent;
    color: #9fdaa8;
    border: 1px solid;
  }
  .p-button.p-button-success.p-button-outlined:not(:disabled):hover, .p-buttonset.p-button-success > .p-button.p-button-outlined:not(:disabled):hover, .p-splitbutton.p-button-success > .p-button.p-button-outlined:not(:disabled):hover, .p-fileupload-choose.p-button-success.p-button-outlined:not(:disabled):hover {
    background: rgba(159, 218, 168, 0.04);
    color: #9fdaa8;
    border: 1px solid;
  }
  .p-button.p-button-success.p-button-outlined:not(:disabled):active, .p-buttonset.p-button-success > .p-button.p-button-outlined:not(:disabled):active, .p-splitbutton.p-button-success > .p-button.p-button-outlined:not(:disabled):active, .p-fileupload-choose.p-button-success.p-button-outlined:not(:disabled):active {
    background: rgba(159, 218, 168, 0.16);
    color: #9fdaa8;
    border: 1px solid;
  }
  .p-button.p-button-success.p-button-text, .p-buttonset.p-button-success > .p-button.p-button-text, .p-splitbutton.p-button-success > .p-button.p-button-text, .p-fileupload-choose.p-button-success.p-button-text {
    background-color: transparent;
    color: #9fdaa8;
    border-color: transparent;
  }
  .p-button.p-button-success.p-button-text:not(:disabled):hover, .p-buttonset.p-button-success > .p-button.p-button-text:not(:disabled):hover, .p-splitbutton.p-button-success > .p-button.p-button-text:not(:disabled):hover, .p-fileupload-choose.p-button-success.p-button-text:not(:disabled):hover {
    background: rgba(159, 218, 168, 0.04);
    border-color: transparent;
    color: #9fdaa8;
  }
  .p-button.p-button-success.p-button-text:not(:disabled):active, .p-buttonset.p-button-success > .p-button.p-button-text:not(:disabled):active, .p-splitbutton.p-button-success > .p-button.p-button-text:not(:disabled):active, .p-fileupload-choose.p-button-success.p-button-text:not(:disabled):active {
    background: rgba(159, 218, 168, 0.16);
    border-color: transparent;
    color: #9fdaa8;
  }

  .p-button.p-button-warning, .p-buttonset.p-button-warning > .p-button, .p-splitbutton.p-button-warning > .p-button, .p-fileupload-choose.p-button-warning {
    color: #151515;
    background: #ffe082;
    border: 1px solid #ffd54f;
  }
  .p-button.p-button-warning:not(:disabled):hover, .p-buttonset.p-button-warning > .p-button:not(:disabled):hover, .p-splitbutton.p-button-warning > .p-button:not(:disabled):hover, .p-fileupload-choose.p-button-warning:not(:disabled):hover {
    background: #ffd54f;
    color: #151515;
    border-color: #ffca28;
  }
  .p-button.p-button-warning:not(:disabled):focus, .p-buttonset.p-button-warning > .p-button:not(:disabled):focus, .p-splitbutton.p-button-warning > .p-button:not(:disabled):focus, .p-fileupload-choose.p-button-warning:not(:disabled):focus {
    box-shadow: 0 0 0 1px #ffecb3;
  }
  .p-button.p-button-warning:not(:disabled):active, .p-buttonset.p-button-warning > .p-button:not(:disabled):active, .p-splitbutton.p-button-warning > .p-button:not(:disabled):active, .p-fileupload-choose.p-button-warning:not(:disabled):active {
    background: #ffca28;
    color: #151515;
    border-color: #ffc107;
  }
  .p-button.p-button-warning.p-button-outlined, .p-buttonset.p-button-warning > .p-button.p-button-outlined, .p-splitbutton.p-button-warning > .p-button.p-button-outlined, .p-fileupload-choose.p-button-warning.p-button-outlined {
    background-color: transparent;
    color: #ffe082;
    border: 1px solid;
  }
  .p-button.p-button-warning.p-button-outlined:not(:disabled):hover, .p-buttonset.p-button-warning > .p-button.p-button-outlined:not(:disabled):hover, .p-splitbutton.p-button-warning > .p-button.p-button-outlined:not(:disabled):hover, .p-fileupload-choose.p-button-warning.p-button-outlined:not(:disabled):hover {
    background: rgba(255, 224, 130, 0.04);
    color: #ffe082;
    border: 1px solid;
  }
  .p-button.p-button-warning.p-button-outlined:not(:disabled):active, .p-buttonset.p-button-warning > .p-button.p-button-outlined:not(:disabled):active, .p-splitbutton.p-button-warning > .p-button.p-button-outlined:not(:disabled):active, .p-fileupload-choose.p-button-warning.p-button-outlined:not(:disabled):active {
    background: rgba(255, 224, 130, 0.16);
    color: #ffe082;
    border: 1px solid;
  }
  .p-button.p-button-warning.p-button-text, .p-buttonset.p-button-warning > .p-button.p-button-text, .p-splitbutton.p-button-warning > .p-button.p-button-text, .p-fileupload-choose.p-button-warning.p-button-text {
    background-color: transparent;
    color: #ffe082;
    border-color: transparent;
  }
  .p-button.p-button-warning.p-button-text:not(:disabled):hover, .p-buttonset.p-button-warning > .p-button.p-button-text:not(:disabled):hover, .p-splitbutton.p-button-warning > .p-button.p-button-text:not(:disabled):hover, .p-fileupload-choose.p-button-warning.p-button-text:not(:disabled):hover {
    background: rgba(255, 224, 130, 0.04);
    border-color: transparent;
    color: #ffe082;
  }
  .p-button.p-button-warning.p-button-text:not(:disabled):active, .p-buttonset.p-button-warning > .p-button.p-button-text:not(:disabled):active, .p-splitbutton.p-button-warning > .p-button.p-button-text:not(:disabled):active, .p-fileupload-choose.p-button-warning.p-button-text:not(:disabled):active {
    background: rgba(255, 224, 130, 0.16);
    border-color: transparent;
    color: #ffe082;
  }

  .p-button.p-button-help, .p-buttonset.p-button-help > .p-button, .p-splitbutton.p-button-help > .p-button, .p-fileupload-choose.p-button-help {
    color: #151515;
    background: #b7a2e0;
    border: 1px solid #9a7cd4;
  }
  .p-button.p-button-help:not(:disabled):hover, .p-buttonset.p-button-help > .p-button:not(:disabled):hover, .p-splitbutton.p-button-help > .p-button:not(:disabled):hover, .p-fileupload-choose.p-button-help:not(:disabled):hover {
    background: #9a7cd4;
    color: #151515;
    border-color: #845fca;
  }
  .p-button.p-button-help:not(:disabled):focus, .p-buttonset.p-button-help > .p-button:not(:disabled):focus, .p-splitbutton.p-button-help > .p-button:not(:disabled):focus, .p-fileupload-choose.p-button-help:not(:disabled):focus {
    box-shadow: 0 0 0 1px #d3c7ec;
  }
  .p-button.p-button-help:not(:disabled):active, .p-buttonset.p-button-help > .p-button:not(:disabled):active, .p-splitbutton.p-button-help > .p-button:not(:disabled):active, .p-fileupload-choose.p-button-help:not(:disabled):active {
    background: #845fca;
    color: #151515;
    border-color: #6d43c0;
  }
  .p-button.p-button-help.p-button-outlined, .p-buttonset.p-button-help > .p-button.p-button-outlined, .p-splitbutton.p-button-help > .p-button.p-button-outlined, .p-fileupload-choose.p-button-help.p-button-outlined {
    background-color: transparent;
    color: #b7a2e0;
    border: 1px solid;
  }
  .p-button.p-button-help.p-button-outlined:not(:disabled):hover, .p-buttonset.p-button-help > .p-button.p-button-outlined:not(:disabled):hover, .p-splitbutton.p-button-help > .p-button.p-button-outlined:not(:disabled):hover, .p-fileupload-choose.p-button-help.p-button-outlined:not(:disabled):hover {
    background: rgba(183, 162, 224, 0.04);
    color: #b7a2e0;
    border: 1px solid;
  }
  .p-button.p-button-help.p-button-outlined:not(:disabled):active, .p-buttonset.p-button-help > .p-button.p-button-outlined:not(:disabled):active, .p-splitbutton.p-button-help > .p-button.p-button-outlined:not(:disabled):active, .p-fileupload-choose.p-button-help.p-button-outlined:not(:disabled):active {
    background: rgba(183, 162, 224, 0.16);
    color: #b7a2e0;
    border: 1px solid;
  }
  .p-button.p-button-help.p-button-text, .p-buttonset.p-button-help > .p-button.p-button-text, .p-splitbutton.p-button-help > .p-button.p-button-text, .p-fileupload-choose.p-button-help.p-button-text {
    background-color: transparent;
    color: #b7a2e0;
    border-color: transparent;
  }
  .p-button.p-button-help.p-button-text:not(:disabled):hover, .p-buttonset.p-button-help > .p-button.p-button-text:not(:disabled):hover, .p-splitbutton.p-button-help > .p-button.p-button-text:not(:disabled):hover, .p-fileupload-choose.p-button-help.p-button-text:not(:disabled):hover {
    background: rgba(183, 162, 224, 0.04);
    border-color: transparent;
    color: #b7a2e0;
  }
  .p-button.p-button-help.p-button-text:not(:disabled):active, .p-buttonset.p-button-help > .p-button.p-button-text:not(:disabled):active, .p-splitbutton.p-button-help > .p-button.p-button-text:not(:disabled):active, .p-fileupload-choose.p-button-help.p-button-text:not(:disabled):active {
    background: rgba(183, 162, 224, 0.16);
    border-color: transparent;
    color: #b7a2e0;
  }

  .p-button.p-button-danger, .p-buttonset.p-button-danger > .p-button, .p-splitbutton.p-button-danger > .p-button, .p-fileupload-choose.p-button-danger {
    color: #151515;
    background: #f19ea6;
    border: 1px solid #e97984;
  }
  .p-button.p-button-danger:not(:disabled):hover, .p-buttonset.p-button-danger > .p-button:not(:disabled):hover, .p-splitbutton.p-button-danger > .p-button:not(:disabled):hover, .p-fileupload-choose.p-button-danger:not(:disabled):hover {
    background: #e97984;
    color: #151515;
    border-color: #f75965;
  }
  .p-button.p-button-danger:not(:disabled):focus, .p-buttonset.p-button-danger > .p-button:not(:disabled):focus, .p-splitbutton.p-button-danger > .p-button:not(:disabled):focus, .p-fileupload-choose.p-button-danger:not(:disabled):focus {
    box-shadow: 0 0 0 1px #ffd0d9;
  }
  .p-button.p-button-danger:not(:disabled):active, .p-buttonset.p-button-danger > .p-button:not(:disabled):active, .p-splitbutton.p-button-danger > .p-button:not(:disabled):active, .p-fileupload-choose.p-button-danger:not(:disabled):active {
    background: #f75965;
    color: #151515;
    border-color: #fd464e;
  }
  .p-button.p-button-danger.p-button-outlined, .p-buttonset.p-button-danger > .p-button.p-button-outlined, .p-splitbutton.p-button-danger > .p-button.p-button-outlined, .p-fileupload-choose.p-button-danger.p-button-outlined {
    background-color: transparent;
    color: #f19ea6;
    border: 1px solid;
  }
  .p-button.p-button-danger.p-button-outlined:not(:disabled):hover, .p-buttonset.p-button-danger > .p-button.p-button-outlined:not(:disabled):hover, .p-splitbutton.p-button-danger > .p-button.p-button-outlined:not(:disabled):hover, .p-fileupload-choose.p-button-danger.p-button-outlined:not(:disabled):hover {
    background: rgba(241, 158, 166, 0.04);
    color: #f19ea6;
    border: 1px solid;
  }
  .p-button.p-button-danger.p-button-outlined:not(:disabled):active, .p-buttonset.p-button-danger > .p-button.p-button-outlined:not(:disabled):active, .p-splitbutton.p-button-danger > .p-button.p-button-outlined:not(:disabled):active, .p-fileupload-choose.p-button-danger.p-button-outlined:not(:disabled):active {
    background: rgba(241, 158, 166, 0.16);
    color: #f19ea6;
    border: 1px solid;
  }
  .p-button.p-button-danger.p-button-text, .p-buttonset.p-button-danger > .p-button.p-button-text, .p-splitbutton.p-button-danger > .p-button.p-button-text, .p-fileupload-choose.p-button-danger.p-button-text {
    background-color: transparent;
    color: #f19ea6;
    border-color: transparent;
  }
  .p-button.p-button-danger.p-button-text:not(:disabled):hover, .p-buttonset.p-button-danger > .p-button.p-button-text:not(:disabled):hover, .p-splitbutton.p-button-danger > .p-button.p-button-text:not(:disabled):hover, .p-fileupload-choose.p-button-danger.p-button-text:not(:disabled):hover {
    background: rgba(241, 158, 166, 0.04);
    border-color: transparent;
    color: #f19ea6;
  }
  .p-button.p-button-danger.p-button-text:not(:disabled):active, .p-buttonset.p-button-danger > .p-button.p-button-text:not(:disabled):active, .p-splitbutton.p-button-danger > .p-button.p-button-text:not(:disabled):active, .p-fileupload-choose.p-button-danger.p-button-text:not(:disabled):active {
    background: rgba(241, 158, 166, 0.16);
    border-color: transparent;
    color: #f19ea6;
  }

  .p-button.p-button-link {
    color: #8dd0ff;
    background: transparent;
    border: transparent;
  }
  .p-button.p-button-link:not(:disabled):hover {
    background: transparent;
    color: #56bdff;
    border-color: transparent;
  }
  .p-button.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
  }
  .p-button.p-button-link:not(:disabled):focus {
    background: transparent;
    box-shadow: 0 0 0 1px #e3f3fe;
    border-color: transparent;
  }
  .p-button.p-button-link:not(:disabled):active {
    background: transparent;
    color: #8dd0ff;
    border-color: transparent;
  }

  .p-splitbutton {
    border-radius: 4px;
  }
  .p-splitbutton.p-button-outlined > .p-button {
    background-color: transparent;
    color: #8dd0ff;
    border: 1px solid;
  }
  .p-splitbutton.p-button-outlined > .p-button:not(:disabled):hover {
    background: rgba(141, 208, 255, 0.04);
    color: #8dd0ff;
  }
  .p-splitbutton.p-button-outlined > .p-button:not(:disabled):active {
    background: rgba(141, 208, 255, 0.16);
    color: #8dd0ff;
  }
  .p-splitbutton.p-button-outlined.p-button-plain > .p-button {
    color: rgba(255, 255, 255, 0.6);
    border-color: rgba(255, 255, 255, 0.6);
  }
  .p-splitbutton.p-button-outlined.p-button-plain > .p-button:not(:disabled):hover {
    background: rgba(255, 255, 255, 0.04);
    color: rgba(255, 255, 255, 0.6);
  }
  .p-splitbutton.p-button-outlined.p-button-plain > .p-button:not(:disabled):active {
    background: rgba(255, 255, 255, 0.16);
    color: rgba(255, 255, 255, 0.6);
  }
  .p-splitbutton.p-button-text > .p-button {
    background-color: transparent;
    color: #8dd0ff;
    border-color: transparent;
  }
  .p-splitbutton.p-button-text > .p-button:not(:disabled):hover {
    background: rgba(141, 208, 255, 0.04);
    color: #8dd0ff;
    border-color: transparent;
  }
  .p-splitbutton.p-button-text > .p-button:not(:disabled):active {
    background: rgba(141, 208, 255, 0.16);
    color: #8dd0ff;
    border-color: transparent;
  }
  .p-splitbutton.p-button-text.p-button-plain > .p-button {
    color: rgba(255, 255, 255, 0.6);
  }
  .p-splitbutton.p-button-text.p-button-plain > .p-button:not(:disabled):hover {
    background: rgba(255, 255, 255, 0.04);
    color: rgba(255, 255, 255, 0.6);
  }
  .p-splitbutton.p-button-text.p-button-plain > .p-button:not(:disabled):active {
    background: rgba(255, 255, 255, 0.16);
    color: rgba(255, 255, 255, 0.6);
  }
  .p-splitbutton.p-button-raised {
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }
  .p-splitbutton.p-button-rounded {
    border-radius: 2rem;
  }
  .p-splitbutton.p-button-rounded > .p-button {
    border-radius: 2rem;
  }
  .p-splitbutton.p-button-sm > .p-button {
    font-size: 0.875rem;
    padding: 0.4375rem 0.65625rem;
  }
  .p-splitbutton.p-button-sm > .p-button .p-button-icon {
    font-size: 0.875rem;
  }
  .p-splitbutton.p-button-lg > .p-button {
    font-size: 1.25rem;
    padding: 0.625rem 0.9375rem;
  }
  .p-splitbutton.p-button-lg > .p-button.p-button-icon-only {
    width: auto;
  }
  .p-splitbutton.p-button-lg > .p-button .p-button-icon {
    font-size: 1.25rem;
  }
  .p-splitbutton .p-splitbutton-menubutton,
.p-splitbutton .p-splitbutton.p-button-rounded > .p-splitbutton-menubutton.p-button,
.p-splitbutton .p-splitbutton.p-button-outlined > .p-splitbutton-menubutton.p-button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .p-splitbutton.p-button-secondary.p-button-outlined > .p-button {
    background-color: transparent;
    color: #6c757d;
    border: 1px solid;
  }
  .p-splitbutton.p-button-secondary.p-button-outlined > .p-button:not(:disabled):hover {
    background: rgba(108, 117, 125, 0.04);
    color: #6c757d;
  }
  .p-splitbutton.p-button-secondary.p-button-outlined > .p-button:not(:disabled):active {
    background: rgba(108, 117, 125, 0.16);
    color: #6c757d;
  }
  .p-splitbutton.p-button-secondary.p-button-text > .p-button {
    background-color: transparent;
    color: #6c757d;
    border-color: transparent;
  }
  .p-splitbutton.p-button-secondary.p-button-text > .p-button:not(:disabled):hover {
    background: rgba(108, 117, 125, 0.04);
    border-color: transparent;
    color: #6c757d;
  }
  .p-splitbutton.p-button-secondary.p-button-text > .p-button:not(:disabled):active {
    background: rgba(108, 117, 125, 0.16);
    border-color: transparent;
    color: #6c757d;
  }

  .p-splitbutton.p-button-info.p-button-outlined > .p-button {
    background-color: transparent;
    color: #7fd8e6;
    border: 1px solid;
  }
  .p-splitbutton.p-button-info.p-button-outlined > .p-button:not(:disabled):hover {
    background: rgba(127, 216, 230, 0.04);
    color: #7fd8e6;
  }
  .p-splitbutton.p-button-info.p-button-outlined > .p-button:not(:disabled):active {
    background: rgba(127, 216, 230, 0.16);
    color: #7fd8e6;
  }
  .p-splitbutton.p-button-info.p-button-text > .p-button {
    background-color: transparent;
    color: #7fd8e6;
    border-color: transparent;
  }
  .p-splitbutton.p-button-info.p-button-text > .p-button:not(:disabled):hover {
    background: rgba(127, 216, 230, 0.04);
    border-color: transparent;
    color: #7fd8e6;
  }
  .p-splitbutton.p-button-info.p-button-text > .p-button:not(:disabled):active {
    background: rgba(127, 216, 230, 0.16);
    border-color: transparent;
    color: #7fd8e6;
  }

  .p-splitbutton.p-button-success.p-button-outlined > .p-button {
    background-color: transparent;
    color: #9fdaa8;
    border: 1px solid;
  }
  .p-splitbutton.p-button-success.p-button-outlined > .p-button:not(:disabled):hover {
    background: rgba(159, 218, 168, 0.04);
    color: #9fdaa8;
  }
  .p-splitbutton.p-button-success.p-button-outlined > .p-button:not(:disabled):active {
    background: rgba(159, 218, 168, 0.16);
    color: #9fdaa8;
  }
  .p-splitbutton.p-button-success.p-button-text > .p-button {
    background-color: transparent;
    color: #9fdaa8;
    border-color: transparent;
  }
  .p-splitbutton.p-button-success.p-button-text > .p-button:not(:disabled):hover {
    background: rgba(159, 218, 168, 0.04);
    border-color: transparent;
    color: #9fdaa8;
  }
  .p-splitbutton.p-button-success.p-button-text > .p-button:not(:disabled):active {
    background: rgba(159, 218, 168, 0.16);
    border-color: transparent;
    color: #9fdaa8;
  }

  .p-splitbutton.p-button-warning.p-button-outlined > .p-button {
    background-color: transparent;
    color: #ffe082;
    border: 1px solid;
  }
  .p-splitbutton.p-button-warning.p-button-outlined > .p-button:not(:disabled):hover {
    background: rgba(255, 224, 130, 0.04);
    color: #ffe082;
  }
  .p-splitbutton.p-button-warning.p-button-outlined > .p-button:not(:disabled):active {
    background: rgba(255, 224, 130, 0.16);
    color: #ffe082;
  }
  .p-splitbutton.p-button-warning.p-button-text > .p-button {
    background-color: transparent;
    color: #ffe082;
    border-color: transparent;
  }
  .p-splitbutton.p-button-warning.p-button-text > .p-button:not(:disabled):hover {
    background: rgba(255, 224, 130, 0.04);
    border-color: transparent;
    color: #ffe082;
  }
  .p-splitbutton.p-button-warning.p-button-text > .p-button:not(:disabled):active {
    background: rgba(255, 224, 130, 0.16);
    border-color: transparent;
    color: #ffe082;
  }

  .p-splitbutton.p-button-help.p-button-outlined > .p-button {
    background-color: transparent;
    color: #b7a2e0;
    border: 1px solid;
  }
  .p-splitbutton.p-button-help.p-button-outlined > .p-button:not(:disabled):hover {
    background: rgba(183, 162, 224, 0.04);
    color: #b7a2e0;
  }
  .p-splitbutton.p-button-help.p-button-outlined > .p-button:not(:disabled):active {
    background: rgba(183, 162, 224, 0.16);
    color: #b7a2e0;
  }
  .p-splitbutton.p-button-help.p-button-text > .p-button {
    background-color: transparent;
    color: #b7a2e0;
    border-color: transparent;
  }
  .p-splitbutton.p-button-help.p-button-text > .p-button:not(:disabled):hover {
    background: rgba(183, 162, 224, 0.04);
    border-color: transparent;
    color: #b7a2e0;
  }
  .p-splitbutton.p-button-help.p-button-text > .p-button:not(:disabled):active {
    background: rgba(183, 162, 224, 0.16);
    border-color: transparent;
    color: #b7a2e0;
  }

  .p-splitbutton.p-button-danger.p-button-outlined > .p-button {
    background-color: transparent;
    color: #f19ea6;
    border: 1px solid;
  }
  .p-splitbutton.p-button-danger.p-button-outlined > .p-button:not(:disabled):hover {
    background: rgba(241, 158, 166, 0.04);
    color: #f19ea6;
  }
  .p-splitbutton.p-button-danger.p-button-outlined > .p-button:not(:disabled):active {
    background: rgba(241, 158, 166, 0.16);
    color: #f19ea6;
  }
  .p-splitbutton.p-button-danger.p-button-text > .p-button {
    background-color: transparent;
    color: #f19ea6;
    border-color: transparent;
  }
  .p-splitbutton.p-button-danger.p-button-text > .p-button:not(:disabled):hover {
    background: rgba(241, 158, 166, 0.04);
    border-color: transparent;
    color: #f19ea6;
  }
  .p-splitbutton.p-button-danger.p-button-text > .p-button:not(:disabled):active {
    background: rgba(241, 158, 166, 0.16);
    border-color: transparent;
    color: #f19ea6;
  }

  .p-speeddial-button.p-button.p-button-icon-only {
    width: 4rem;
    height: 4rem;
  }
  .p-speeddial-button.p-button.p-button-icon-only .p-button-icon {
    font-size: 1.3rem;
  }
  .p-speeddial-button.p-button.p-button-icon-only .p-button-icon.p-icon {
    width: 1.3rem;
    height: 1.3rem;
  }

  .p-speeddial-action {
    width: 3rem;
    height: 3rem;
    background: #343e4d;
    color: #fff;
  }
  .p-speeddial-action:hover {
    background: #3f4b5b;
    color: #fff;
  }

  .p-speeddial-direction-up .p-speeddial-item {
    margin: 0.25rem;
  }
  .p-speeddial-direction-up .p-speeddial-item:first-child {
    margin-bottom: 0.5rem;
  }

  .p-speeddial-direction-down .p-speeddial-item {
    margin: 0.25rem;
  }
  .p-speeddial-direction-down .p-speeddial-item:first-child {
    margin-top: 0.5rem;
  }

  .p-speeddial-direction-left .p-speeddial-item {
    margin: 0 0.25rem;
  }
  .p-speeddial-direction-left .p-speeddial-item:first-child {
    margin-right: 0.5rem;
  }

  .p-speeddial-direction-right .p-speeddial-item {
    margin: 0 0.25rem;
  }
  .p-speeddial-direction-right .p-speeddial-item:first-child {
    margin-left: 0.5rem;
  }

  .p-speeddial-circle .p-speeddial-item,
.p-speeddial-semi-circle .p-speeddial-item,
.p-speeddial-quarter-circle .p-speeddial-item {
    margin: 0;
  }
  .p-speeddial-circle .p-speeddial-item:first-child, .p-speeddial-circle .p-speeddial-item:last-child,
.p-speeddial-semi-circle .p-speeddial-item:first-child,
.p-speeddial-semi-circle .p-speeddial-item:last-child,
.p-speeddial-quarter-circle .p-speeddial-item:first-child,
.p-speeddial-quarter-circle .p-speeddial-item:last-child {
    margin: 0;
  }

  .p-speeddial-mask {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 4px;
  }

  .p-carousel .p-carousel-content .p-carousel-prev,
.p-carousel .p-carousel-content .p-carousel-next {
    width: 2rem;
    height: 2rem;
    color: rgba(255, 255, 255, 0.6);
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: color 0.15s, box-shadow 0.15s;
    margin: 0.5rem;
  }
  .p-carousel .p-carousel-content .p-carousel-prev:enabled:hover,
.p-carousel .p-carousel-content .p-carousel-next:enabled:hover {
    color: rgba(255, 255, 255, 0.87);
    border-color: transparent;
    background: transparent;
  }
  .p-carousel .p-carousel-content .p-carousel-prev:focus-visible,
.p-carousel .p-carousel-content .p-carousel-next:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 1px #e3f3fe;
  }
  .p-carousel .p-carousel-indicators {
    padding: 1rem;
  }
  .p-carousel .p-carousel-indicators .p-carousel-indicator {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .p-carousel .p-carousel-indicators .p-carousel-indicator button {
    background-color: #3f4b5b;
    width: 2rem;
    height: 0.5rem;
    transition: color 0.15s, box-shadow 0.15s;
    border-radius: 0;
  }
  .p-carousel .p-carousel-indicators .p-carousel-indicator button:hover {
    background: rgba(255, 255, 255, 0.04);
  }
  .p-carousel .p-carousel-indicators .p-carousel-indicator.p-highlight button {
    background: #8dd0ff;
    color: #151515;
  }

  .p-datatable .p-paginator-top {
    border-width: 0;
    border-radius: 0;
  }
  .p-datatable .p-paginator-bottom {
    border-width: 1px 0 0 0;
    border-radius: 0;
  }
  .p-datatable .p-datatable-header {
    background: #2a323d;
    color: rgba(255, 255, 255, 0.6);
    border: solid #3f4b5b;
    border-width: 1px 0 0 0;
    padding: 1rem 1rem;
    font-weight: 600;
  }
  .p-datatable .p-datatable-footer {
    background: #2a323d;
    color: rgba(255, 255, 255, 0.87);
    border: 1px solid #3f4b5b;
    border-width: 1px 0 1px 0;
    padding: 1rem 1rem;
    font-weight: 600;
  }
  .p-datatable .p-datatable-thead > tr > th {
    text-align: left;
    padding: 1rem 1rem;
    border: 1px solid #3f4b5b;
    border-width: 1px 0 2px 0;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.87);
    background: #2a323d;
    transition: box-shadow 0.15s;
  }
  .p-datatable .p-datatable-tfoot > tr > td {
    text-align: left;
    padding: 1rem 1rem;
    border: 1px solid #3f4b5b;
    border-width: 1px 0 1px 0;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.87);
    background: #2a323d;
  }
  .p-datatable .p-sortable-column .p-sortable-column-icon {
    color: rgba(255, 255, 255, 0.6);
    margin-left: 0.5rem;
  }
  .p-datatable .p-sortable-column .p-sortable-column-badge {
    border-radius: 50%;
    height: 1.143rem;
    min-width: 1.143rem;
    line-height: 1.143rem;
    color: #151515;
    background: #8dd0ff;
    margin-left: 0.5rem;
  }
  .p-datatable .p-sortable-column:not(.p-highlight):not(.p-sortable-disabled):hover {
    background: rgba(255, 255, 255, 0.04);
    color: rgba(255, 255, 255, 0.87);
  }
  .p-datatable .p-sortable-column:not(.p-highlight):not(.p-sortable-disabled):hover .p-sortable-column-icon {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-datatable .p-sortable-column.p-highlight {
    background: #2a323d;
    color: #8dd0ff;
  }
  .p-datatable .p-sortable-column.p-highlight .p-sortable-column-icon {
    color: #8dd0ff;
  }
  .p-datatable .p-sortable-column.p-highlight:not(.p-sortable-disabled):hover {
    background: rgba(255, 255, 255, 0.04);
    color: #8dd0ff;
  }
  .p-datatable .p-sortable-column.p-highlight:not(.p-sortable-disabled):hover .p-sortable-column-icon {
    color: #8dd0ff;
  }
  .p-datatable .p-sortable-column:focus-visible {
    box-shadow: inset 0 0 0 0.15rem #e3f3fe;
    outline: 0 none;
  }
  .p-datatable .p-datatable-tbody > tr {
    background: #2a323d;
    color: rgba(255, 255, 255, 0.87);
    transition: box-shadow 0.15s;
  }
  .p-datatable .p-datatable-tbody > tr > td {
    text-align: left;
    border: 1px solid #3f4b5b;
    border-width: 1px 0 0 0;
    padding: 1rem 1rem;
  }
  .p-datatable .p-datatable-tbody > tr > td .p-row-toggler,
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-init,
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-save,
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-cancel {
    width: 2rem;
    height: 2rem;
    color: rgba(255, 255, 255, 0.6);
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: color 0.15s, box-shadow 0.15s;
  }
  .p-datatable .p-datatable-tbody > tr > td .p-row-toggler:enabled:hover,
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-init:enabled:hover,
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-save:enabled:hover,
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-cancel:enabled:hover {
    color: rgba(255, 255, 255, 0.87);
    border-color: transparent;
    background: transparent;
  }
  .p-datatable .p-datatable-tbody > tr > td .p-row-toggler:focus-visible,
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-init:focus-visible,
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-save:focus-visible,
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-cancel:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 1px #e3f3fe;
  }
  .p-datatable .p-datatable-tbody > tr > td .p-row-editor-save {
    margin-right: 0.5rem;
  }
  .p-datatable .p-datatable-tbody > tr > td > .p-column-title {
    font-weight: 600;
  }
  .p-datatable .p-datatable-tbody > tr > td.p-highlight {
    background: #8dd0ff;
    color: #151515;
  }
  .p-datatable .p-datatable-tbody > tr.p-highlight {
    background: #8dd0ff;
    color: #151515;
  }
  .p-datatable .p-datatable-tbody > tr.p-highlight-contextmenu {
    outline: 0.15rem solid #e3f3fe;
    outline-offset: -0.15rem;
  }
  .p-datatable .p-datatable-tbody > tr.p-datatable-dragpoint-top > td {
    box-shadow: inset 0 2px 0 0 #8dd0ff;
  }
  .p-datatable .p-datatable-tbody > tr.p-datatable-dragpoint-bottom > td {
    box-shadow: inset 0 -2px 0 0 #8dd0ff;
  }
  .p-datatable.p-datatable-selectable .p-datatable-tbody > tr.p-selectable-row:not(.p-highlight):not(.p-datatable-emptymessage):hover {
    background: rgba(255, 255, 255, 0.04);
    color: rgba(255, 255, 255, 0.87);
  }
  .p-datatable.p-datatable-selectable .p-datatable-tbody > tr.p-selectable-row:focus-visible {
    outline: 0.15rem solid #e3f3fe;
    outline-offset: -0.15rem;
  }
  .p-datatable.p-datatable-selectable-cell .p-datatable-tbody > tr.p-selectable-row > td.p-selectable-cell:not(.p-highlight):hover {
    background: rgba(255, 255, 255, 0.04);
    color: rgba(255, 255, 255, 0.87);
  }
  .p-datatable.p-datatable-selectable-cell .p-datatable-tbody > tr.p-selectable-row > td.p-selectable-cell:focus-visible {
    outline: 0.15rem solid #e3f3fe;
    outline-offset: -0.15rem;
  }
  .p-datatable.p-datatable-hoverable-rows .p-datatable-tbody > tr:not(.p-highlight):not(.p-datatable-emptymessage):hover {
    background: rgba(255, 255, 255, 0.04);
    color: rgba(255, 255, 255, 0.87);
  }
  .p-datatable .p-column-resizer-helper {
    background: #8dd0ff;
  }
  .p-datatable .p-datatable-scrollable-header,
.p-datatable .p-datatable-scrollable-footer {
    background: #2a323d;
  }
  .p-datatable.p-datatable-scrollable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-thead,
.p-datatable.p-datatable-scrollable > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tfoot, .p-datatable.p-datatable-scrollable > .p-datatable-wrapper > .p-virtualscroller > .p-datatable-table > .p-datatable-thead,
.p-datatable.p-datatable-scrollable > .p-datatable-wrapper > .p-virtualscroller > .p-datatable-table > .p-datatable-tfoot {
    background-color: #2a323d;
  }
  .p-datatable .p-datatable-loading-icon {
    font-size: 2rem;
  }
  .p-datatable .p-datatable-loading-icon.p-icon {
    width: 2rem;
    height: 2rem;
  }
  .p-datatable.p-datatable-gridlines .p-datatable-header {
    border-width: 1px 1px 0 1px;
  }
  .p-datatable.p-datatable-gridlines .p-datatable-footer {
    border-width: 0 1px 1px 1px;
  }
  .p-datatable.p-datatable-gridlines .p-paginator-top {
    border-width: 0 1px 0 1px;
  }
  .p-datatable.p-datatable-gridlines .p-paginator-bottom {
    border-width: 0 1px 1px 1px;
  }
  .p-datatable.p-datatable-gridlines .p-datatable-thead > tr > th {
    border-width: 1px 0 1px 1px;
  }
  .p-datatable.p-datatable-gridlines .p-datatable-thead > tr > th:last-child {
    border-width: 1px;
  }
  .p-datatable.p-datatable-gridlines .p-datatable-tbody > tr > td {
    border-width: 1px 0 0 1px;
  }
  .p-datatable.p-datatable-gridlines .p-datatable-tbody > tr > td:last-child {
    border-width: 1px 1px 0 1px;
  }
  .p-datatable.p-datatable-gridlines .p-datatable-tbody > tr:last-child > td {
    border-width: 1px 0 1px 1px;
  }
  .p-datatable.p-datatable-gridlines .p-datatable-tbody > tr:last-child > td:last-child {
    border-width: 1px;
  }
  .p-datatable.p-datatable-gridlines .p-datatable-tfoot > tr > td {
    border-width: 1px 0 1px 1px;
  }
  .p-datatable.p-datatable-gridlines .p-datatable-tfoot > tr > td:last-child {
    border-width: 1px 1px 1px 1px;
  }
  .p-datatable.p-datatable-gridlines .p-datatable-thead + .p-datatable-tfoot > tr > td {
    border-width: 0 0 1px 1px;
  }
  .p-datatable.p-datatable-gridlines .p-datatable-thead + .p-datatable-tfoot > tr > td:last-child {
    border-width: 0 1px 1px 1px;
  }
  .p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody) .p-datatable-tbody > tr > td {
    border-width: 0 0 1px 1px;
  }
  .p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody) .p-datatable-tbody > tr > td:last-child {
    border-width: 0 1px 1px 1px;
  }
  .p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(.p-datatable-tfoot) .p-datatable-tbody > tr:last-child > td {
    border-width: 0 0 0 1px;
  }
  .p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(.p-datatable-tfoot) .p-datatable-tbody > tr:last-child > td:last-child {
    border-width: 0 1px 0 1px;
  }
  .p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd {
    background: #2f3641;
  }
  .p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd.p-highlight {
    background: #8dd0ff;
    color: #151515;
  }
  .p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd.p-highlight .p-row-toggler {
    color: #151515;
  }
  .p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd.p-highlight .p-row-toggler:hover {
    color: #151515;
  }
  .p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd + .p-row-expanded {
    background: #2f3641;
  }
  .p-datatable.p-datatable-sm .p-datatable-header {
    padding: 0.5rem 0.5rem;
  }
  .p-datatable.p-datatable-sm .p-datatable-thead > tr > th {
    padding: 0.5rem 0.5rem;
  }
  .p-datatable.p-datatable-sm .p-datatable-tbody > tr > td {
    padding: 0.5rem 0.5rem;
  }
  .p-datatable.p-datatable-sm .p-datatable-tfoot > tr > td {
    padding: 0.5rem 0.5rem;
  }
  .p-datatable.p-datatable-sm .p-datatable-footer {
    padding: 0.5rem 0.5rem;
  }
  .p-datatable.p-datatable-lg .p-datatable-header {
    padding: 1.25rem 1.25rem;
  }
  .p-datatable.p-datatable-lg .p-datatable-thead > tr > th {
    padding: 1.25rem 1.25rem;
  }
  .p-datatable.p-datatable-lg .p-datatable-tbody > tr > td {
    padding: 1.25rem 1.25rem;
  }
  .p-datatable.p-datatable-lg .p-datatable-tfoot > tr > td {
    padding: 1.25rem 1.25rem;
  }
  .p-datatable.p-datatable-lg .p-datatable-footer {
    padding: 1.25rem 1.25rem;
  }

  .p-datatable-drag-selection-helper {
    background: rgba(141, 208, 255, 0.16);
  }

  .p-dataview .p-paginator-top {
    border-width: 0;
    border-radius: 0;
  }
  .p-dataview .p-paginator-bottom {
    border-width: 1px 0 0 0;
    border-radius: 0;
  }
  .p-dataview .p-dataview-header {
    background: #2a323d;
    color: rgba(255, 255, 255, 0.6);
    border: solid #3f4b5b;
    border-width: 1px 0 0 0;
    padding: 1rem 1rem;
    font-weight: 600;
  }
  .p-dataview .p-dataview-content {
    background: #2a323d;
    color: rgba(255, 255, 255, 0.87);
    border: 0 none;
    padding: 0;
  }
  .p-dataview.p-dataview-list .p-dataview-content > .p-grid > div {
    border: 1px solid #3f4b5b;
    border-width: 1px 0 0 0;
  }
  .p-dataview .p-dataview-footer {
    background: #2a323d;
    color: rgba(255, 255, 255, 0.87);
    border: 1px solid #3f4b5b;
    border-width: 1px 0 1px 0;
    padding: 1rem 1rem;
    font-weight: 600;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .p-dataview .p-dataview-loading-icon {
    font-size: 2rem;
  }
  .p-dataview .p-dataview-loading-icon.p-icon {
    width: 2rem;
    height: 2rem;
  }

  .p-datascroller .p-paginator-top {
    border-width: 0;
    border-radius: 0;
  }
  .p-datascroller .p-paginator-bottom {
    border-width: 1px 0 0 0;
    border-radius: 0;
  }
  .p-datascroller .p-datascroller-header {
    background: #2a323d;
    color: rgba(255, 255, 255, 0.6);
    border: solid #3f4b5b;
    border-width: 1px 0 0 0;
    padding: 1rem 1rem;
    font-weight: 600;
  }
  .p-datascroller .p-datascroller-content {
    background: #2a323d;
    color: rgba(255, 255, 255, 0.87);
    border: 0 none;
    padding: 0;
  }
  .p-datascroller.p-datascroller-inline .p-datascroller-list > li {
    border: 1px solid #3f4b5b;
    border-width: 1px 0 0 0;
  }
  .p-datascroller .p-datascroller-footer {
    background: #2a323d;
    color: rgba(255, 255, 255, 0.87);
    border: 1px solid #3f4b5b;
    border-width: 1px 0 1px 0;
    padding: 1rem 1rem;
    font-weight: 600;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  .p-column-filter-row .p-column-filter-menu-button,
.p-column-filter-row .p-column-filter-clear-button {
    margin-left: 0.5rem;
  }

  .p-column-filter-menu-button {
    width: 2rem;
    height: 2rem;
    color: rgba(255, 255, 255, 0.6);
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: color 0.15s, box-shadow 0.15s;
  }
  .p-column-filter-menu-button:hover {
    color: rgba(255, 255, 255, 0.87);
    border-color: transparent;
    background: transparent;
  }
  .p-column-filter-menu-button.p-column-filter-menu-button-open, .p-column-filter-menu-button.p-column-filter-menu-button-open:hover {
    background: transparent;
    color: rgba(255, 255, 255, 0.87);
  }
  .p-column-filter-menu-button.p-column-filter-menu-button-active, .p-column-filter-menu-button.p-column-filter-menu-button-active:hover {
    background: #8dd0ff;
    color: #151515;
  }
  .p-column-filter-menu-button:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 1px #e3f3fe;
  }

  .p-column-filter-clear-button {
    width: 2rem;
    height: 2rem;
    color: rgba(255, 255, 255, 0.6);
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: color 0.15s, box-shadow 0.15s;
  }
  .p-column-filter-clear-button:hover {
    color: rgba(255, 255, 255, 0.87);
    border-color: transparent;
    background: transparent;
  }
  .p-column-filter-clear-button:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 1px #e3f3fe;
  }

  .p-column-filter-overlay {
    background: #2a323d;
    color: rgba(255, 255, 255, 0.87);
    border: 1px solid #3f4b5b;
    border-radius: 4px;
    box-shadow: none;
    min-width: 12.5rem;
  }
  .p-column-filter-overlay .p-column-filter-row-items {
    padding: 0.5rem 0;
  }
  .p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item {
    margin: 0;
    padding: 0.5rem 1.5rem;
    border: 0 none;
    color: rgba(255, 255, 255, 0.87);
    background: transparent;
    transition: box-shadow 0.15s;
    border-radius: 0;
  }
  .p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item.p-highlight {
    color: #151515;
    background: #8dd0ff;
  }
  .p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item:not(.p-highlight):not(.p-disabled):hover {
    color: rgba(255, 255, 255, 0.87);
    background: rgba(255, 255, 255, 0.04);
  }
  .p-column-filter-overlay .p-column-filter-row-items .p-column-filter-row-item:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem #e3f3fe;
  }
  .p-column-filter-overlay .p-column-filter-row-items .p-column-filter-separator {
    border-top: 1px solid #3f4b5b;
    margin: 0.5rem 0;
  }

  .p-column-filter-overlay-menu .p-column-filter-operator {
    padding: 0.75rem 1.5rem;
    border-bottom: 1px solid #3f4b5b;
    color: rgba(255, 255, 255, 0.87);
    background: #2a323d;
    margin: 0;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }
  .p-column-filter-overlay-menu .p-column-filter-constraint {
    padding: 1.25rem;
    border-bottom: 1px solid #3f4b5b;
  }
  .p-column-filter-overlay-menu .p-column-filter-constraint .p-column-filter-matchmode-dropdown {
    margin-bottom: 0.5rem;
  }
  .p-column-filter-overlay-menu .p-column-filter-constraint .p-column-filter-remove-button {
    margin-top: 0.5rem;
  }
  .p-column-filter-overlay-menu .p-column-filter-constraint:last-child {
    border-bottom: 0 none;
  }
  .p-column-filter-overlay-menu .p-column-filter-add-rule {
    padding: 0.5rem 1.25rem;
  }
  .p-column-filter-overlay-menu .p-column-filter-buttonbar {
    padding: 1.25rem;
  }

  .p-orderlist .p-orderlist-controls {
    padding: 1.25rem;
  }
  .p-orderlist .p-orderlist-controls .p-button {
    margin-bottom: 0.5rem;
  }
  .p-orderlist .p-orderlist-header {
    background: #2a323d;
    color: rgba(255, 255, 255, 0.87);
    border: 1px solid #3f4b5b;
    padding: 1rem 1.25rem;
    font-weight: 600;
    border-bottom: 0 none;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }
  .p-orderlist .p-orderlist-filter-container {
    padding: 1rem 1.25rem;
    background: #2a323d;
    border: 1px solid #3f4b5b;
    border-bottom: 0 none;
  }
  .p-orderlist .p-orderlist-filter-container .p-orderlist-filter-input {
    padding-right: 1.75rem;
  }
  .p-orderlist .p-orderlist-filter-container .p-orderlist-filter-icon {
    right: 0.75rem;
    color: rgba(255, 255, 255, 0.6);
  }
  .p-orderlist .p-orderlist-list {
    border: 1px solid #3f4b5b;
    background: #2a323d;
    color: rgba(255, 255, 255, 0.87);
    padding: 0.5rem 0;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .p-orderlist .p-orderlist-list .p-orderlist-item {
    padding: 0.5rem 1.5rem;
    margin: 0;
    border: 0 none;
    color: rgba(255, 255, 255, 0.87);
    background: transparent;
    transition: transform 0.15s, box-shadow 0.15s;
  }
  .p-orderlist .p-orderlist-list .p-orderlist-item:not(.p-highlight):hover {
    background: rgba(255, 255, 255, 0.04);
    color: rgba(255, 255, 255, 0.87);
  }
  .p-orderlist .p-orderlist-list .p-orderlist-item:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem #e3f3fe;
  }
  .p-orderlist .p-orderlist-list .p-orderlist-item.p-highlight {
    color: #151515;
    background: #8dd0ff;
  }
  .p-orderlist.p-orderlist-striped .p-orderlist-list .p-orderlist-item:nth-child(even) {
    background: rgba(255, 255, 255, 0.02);
  }
  .p-orderlist.p-orderlist-striped .p-orderlist-list .p-orderlist-item:nth-child(even):hover {
    background: rgba(255, 255, 255, 0.04);
  }

  .p-organizationchart .p-organizationchart-node-content.p-organizationchart-selectable-node:not(.p-highlight):hover {
    background: rgba(255, 255, 255, 0.04);
    color: rgba(255, 255, 255, 0.87);
  }
  .p-organizationchart .p-organizationchart-node-content.p-highlight {
    background: #8dd0ff;
    color: #151515;
  }
  .p-organizationchart .p-organizationchart-node-content.p-highlight .p-node-toggler i {
    color: #0e9bff;
  }
  .p-organizationchart .p-organizationchart-line-down {
    background: #3f4b5b;
  }
  .p-organizationchart .p-organizationchart-line-left {
    border-right: 1px solid #3f4b5b;
    border-color: #3f4b5b;
  }
  .p-organizationchart .p-organizationchart-line-top {
    border-top: 1px solid #3f4b5b;
    border-color: #3f4b5b;
  }
  .p-organizationchart .p-organizationchart-node-content {
    border: 1px solid #3f4b5b;
    background: #2a323d;
    color: rgba(255, 255, 255, 0.87);
    padding: 1.25rem;
  }
  .p-organizationchart .p-organizationchart-node-content .p-node-toggler {
    background: inherit;
    color: inherit;
    border-radius: 50%;
  }
  .p-organizationchart .p-organizationchart-node-content .p-node-toggler:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 1px #e3f3fe;
  }

  .p-paginator {
    background: #2a323d;
    color: #8dd0ff;
    border: solid #3f4b5b;
    border-width: 0;
    padding: 0.75rem;
    border-radius: 4px;
  }
  .p-paginator .p-paginator-first,
.p-paginator .p-paginator-prev,
.p-paginator .p-paginator-next,
.p-paginator .p-paginator-last {
    background-color: transparent;
    border: 1px solid #3f4b5b;
    color: #8dd0ff;
    min-width: 2.357rem;
    height: 2.357rem;
    margin: 0 0 0 -1px;
    transition: box-shadow 0.15s;
    border-radius: 0;
  }
  .p-paginator .p-paginator-first:not(.p-disabled):not(.p-highlight):hover,
.p-paginator .p-paginator-prev:not(.p-disabled):not(.p-highlight):hover,
.p-paginator .p-paginator-next:not(.p-disabled):not(.p-highlight):hover,
.p-paginator .p-paginator-last:not(.p-disabled):not(.p-highlight):hover {
    background: rgba(255, 255, 255, 0.04);
    border-color: #3f4b5b;
    color: #8dd0ff;
  }
  .p-paginator .p-paginator-first {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .p-paginator .p-paginator-last {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .p-paginator .p-dropdown {
    margin-left: 0.5rem;
    height: 2.357rem;
  }
  .p-paginator .p-dropdown .p-dropdown-label {
    padding-right: 0;
  }
  .p-paginator .p-paginator-page-input {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  .p-paginator .p-paginator-page-input .p-inputtext {
    max-width: 2.357rem;
  }
  .p-paginator .p-paginator-current {
    background-color: transparent;
    border: 1px solid #3f4b5b;
    color: #8dd0ff;
    min-width: 2.357rem;
    height: 2.357rem;
    margin: 0 0 0 -1px;
    padding: 0 0.5rem;
  }
  .p-paginator .p-paginator-pages .p-paginator-page {
    background-color: transparent;
    border: 1px solid #3f4b5b;
    color: #8dd0ff;
    min-width: 2.357rem;
    height: 2.357rem;
    margin: 0 0 0 -1px;
    transition: box-shadow 0.15s;
    border-radius: 0;
  }
  .p-paginator .p-paginator-pages .p-paginator-page.p-highlight {
    background: #8dd0ff;
    border-color: #8dd0ff;
    color: #151515;
  }
  .p-paginator .p-paginator-pages .p-paginator-page:not(.p-highlight):hover {
    background: rgba(255, 255, 255, 0.04);
    border-color: #3f4b5b;
    color: #8dd0ff;
  }

  .p-picklist .p-picklist-buttons {
    padding: 1.25rem;
  }
  .p-picklist .p-picklist-buttons .p-button {
    margin-bottom: 0.5rem;
  }
  .p-picklist .p-picklist-header {
    background: #2a323d;
    color: rgba(255, 255, 255, 0.87);
    border: 1px solid #3f4b5b;
    padding: 1rem 1.25rem;
    font-weight: 600;
    border-bottom: 0 none;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }
  .p-picklist .p-picklist-filter-container {
    padding: 1rem 1.25rem;
    background: #2a323d;
    border: 1px solid #3f4b5b;
    border-bottom: 0 none;
  }
  .p-picklist .p-picklist-filter-container .p-picklist-filter-input {
    padding-right: 1.75rem;
  }
  .p-picklist .p-picklist-filter-container .p-picklist-filter-icon {
    right: 0.75rem;
    color: rgba(255, 255, 255, 0.6);
  }
  .p-picklist .p-picklist-list {
    border: 1px solid #3f4b5b;
    background: #2a323d;
    color: rgba(255, 255, 255, 0.87);
    padding: 0.5rem 0;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .p-picklist .p-picklist-list .p-picklist-item {
    padding: 0.5rem 1.5rem;
    margin: 0;
    border: 0 none;
    color: rgba(255, 255, 255, 0.87);
    background: transparent;
    transition: transform 0.15s, box-shadow 0.15s;
  }
  .p-picklist .p-picklist-list .p-picklist-item:not(.p-highlight):hover {
    background: rgba(255, 255, 255, 0.04);
    color: rgba(255, 255, 255, 0.87);
  }
  .p-picklist .p-picklist-list .p-picklist-item:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem #e3f3fe;
  }
  .p-picklist .p-picklist-list .p-picklist-item.p-highlight {
    color: #151515;
    background: #8dd0ff;
  }

  .p-tree {
    border: 1px solid #3f4b5b;
    background: #2a323d;
    color: rgba(255, 255, 255, 0.87);
    padding: 1.25rem;
    border-radius: 4px;
  }
  .p-tree .p-tree-container .p-treenode {
    padding: 0.143rem;
  }
  .p-tree .p-tree-container .p-treenode .p-treenode-content {
    border-radius: 4px;
    transition: box-shadow 0.15s;
    padding: 0.286rem;
  }
  .p-tree .p-tree-container .p-treenode .p-treenode-content .p-tree-toggler {
    margin-right: 0.5rem;
    width: 2rem;
    height: 2rem;
    color: rgba(255, 255, 255, 0.6);
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: color 0.15s, box-shadow 0.15s;
  }
  .p-tree .p-tree-container .p-treenode .p-treenode-content .p-tree-toggler:enabled:hover {
    color: rgba(255, 255, 255, 0.87);
    border-color: transparent;
    background: transparent;
  }
  .p-tree .p-tree-container .p-treenode .p-treenode-content .p-tree-toggler:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 1px #e3f3fe;
  }
  .p-tree .p-tree-container .p-treenode .p-treenode-content .p-treenode-icon {
    margin-right: 0.5rem;
    color: rgba(255, 255, 255, 0.6);
  }
  .p-tree .p-tree-container .p-treenode .p-treenode-content .p-checkbox {
    margin-right: 0.5rem;
  }
  .p-tree .p-tree-container .p-treenode .p-treenode-content .p-checkbox .p-indeterminate .p-checkbox-icon {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-tree .p-tree-container .p-treenode .p-treenode-content:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem #e3f3fe;
  }
  .p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight {
    background: #8dd0ff;
    color: #151515;
  }
  .p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight .p-tree-toggler,
.p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight .p-treenode-icon {
    color: #151515;
  }
  .p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight .p-tree-toggler:hover,
.p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight .p-treenode-icon:hover {
    color: #151515;
  }
  .p-tree .p-tree-container .p-treenode .p-treenode-content.p-treenode-selectable:not(.p-highlight):hover {
    background: rgba(255, 255, 255, 0.04);
    color: rgba(255, 255, 255, 0.87);
  }
  .p-tree .p-tree-container .p-treenode .p-treenode-content.p-treenode-dragover {
    background: rgba(255, 255, 255, 0.04);
    color: rgba(255, 255, 255, 0.87);
  }
  .p-tree .p-tree-filter-container {
    margin-bottom: 0.5rem;
  }
  .p-tree .p-tree-filter-container .p-tree-filter {
    width: 100%;
    padding-right: 1.75rem;
  }
  .p-tree .p-tree-filter-container .p-tree-filter-icon {
    right: 0.75rem;
    color: rgba(255, 255, 255, 0.6);
  }
  .p-tree .p-treenode-children {
    padding: 0 0 0 1rem;
  }
  .p-tree .p-tree-loading-icon {
    font-size: 2rem;
  }
  .p-tree .p-tree-loading-icon.p-icon {
    width: 2rem;
    height: 2rem;
  }
  .p-tree .p-treenode-droppoint {
    height: 0.5rem;
  }
  .p-tree .p-treenode-droppoint.p-treenode-droppoint-active {
    background: #3eafff;
  }

  .p-treetable .p-paginator-top {
    border-width: 0;
    border-radius: 0;
  }
  .p-treetable .p-paginator-bottom {
    border-width: 1px 0 0 0;
    border-radius: 0;
  }
  .p-treetable .p-treetable-header {
    background: #2a323d;
    color: rgba(255, 255, 255, 0.6);
    border: solid #3f4b5b;
    border-width: 1px 0 0 0;
    padding: 1rem 1rem;
    font-weight: 600;
  }
  .p-treetable .p-treetable-footer {
    background: #2a323d;
    color: rgba(255, 255, 255, 0.87);
    border: 1px solid #3f4b5b;
    border-width: 1px 0 1px 0;
    padding: 1rem 1rem;
    font-weight: 600;
  }
  .p-treetable .p-treetable-thead > tr > th {
    text-align: left;
    padding: 1rem 1rem;
    border: 1px solid #3f4b5b;
    border-width: 1px 0 2px 0;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.87);
    background: #2a323d;
    transition: box-shadow 0.15s;
  }
  .p-treetable .p-treetable-tfoot > tr > td {
    text-align: left;
    padding: 1rem 1rem;
    border: 1px solid #3f4b5b;
    border-width: 1px 0 1px 0;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.87);
    background: #2a323d;
  }
  .p-treetable .p-sortable-column {
    outline-color: #e3f3fe;
  }
  .p-treetable .p-sortable-column .p-sortable-column-icon {
    color: rgba(255, 255, 255, 0.6);
    margin-left: 0.5rem;
  }
  .p-treetable .p-sortable-column .p-sortable-column-badge {
    border-radius: 50%;
    height: 1.143rem;
    min-width: 1.143rem;
    line-height: 1.143rem;
    color: #151515;
    background: #8dd0ff;
    margin-left: 0.5rem;
  }
  .p-treetable .p-sortable-column:not(.p-highlight):hover {
    background: rgba(255, 255, 255, 0.04);
    color: rgba(255, 255, 255, 0.87);
  }
  .p-treetable .p-sortable-column:not(.p-highlight):hover .p-sortable-column-icon {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-treetable .p-sortable-column.p-highlight {
    background: #2a323d;
    color: #8dd0ff;
  }
  .p-treetable .p-sortable-column.p-highlight .p-sortable-column-icon {
    color: #8dd0ff;
  }
  .p-treetable .p-treetable-tbody > tr {
    background: #2a323d;
    color: rgba(255, 255, 255, 0.87);
    transition: box-shadow 0.15s;
  }
  .p-treetable .p-treetable-tbody > tr > td {
    text-align: left;
    border: 1px solid #3f4b5b;
    border-width: 1px 0 0 0;
    padding: 1rem 1rem;
  }
  .p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler {
    width: 2rem;
    height: 2rem;
    color: rgba(255, 255, 255, 0.6);
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: color 0.15s, box-shadow 0.15s;
    margin-right: 0.5rem;
  }
  .p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler:enabled:hover {
    color: rgba(255, 255, 255, 0.87);
    border-color: transparent;
    background: transparent;
  }
  .p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 1px #e3f3fe;
  }
  .p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler + .p-checkbox {
    margin-right: 0.5rem;
  }
  .p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler + .p-checkbox .p-indeterminate .p-checkbox-icon {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-treetable .p-treetable-tbody > tr:focus-visible {
    outline: 0.15rem solid #e3f3fe;
    outline-offset: -0.15rem;
  }
  .p-treetable .p-treetable-tbody > tr.p-highlight {
    background: #8dd0ff;
    color: #151515;
  }
  .p-treetable .p-treetable-tbody > tr.p-highlight .p-treetable-toggler {
    color: #151515;
  }
  .p-treetable .p-treetable-tbody > tr.p-highlight .p-treetable-toggler:hover {
    color: #151515;
  }
  .p-treetable.p-treetable-selectable .p-treetable-tbody > tr:not(.p-highlight):hover, .p-treetable.p-treetable-hoverable-rows .p-treetable-tbody > tr:not(.p-highlight):hover {
    background: rgba(255, 255, 255, 0.04);
    color: rgba(255, 255, 255, 0.87);
  }
  .p-treetable.p-treetable-selectable .p-treetable-tbody > tr:not(.p-highlight):hover .p-treetable-toggler, .p-treetable.p-treetable-hoverable-rows .p-treetable-tbody > tr:not(.p-highlight):hover .p-treetable-toggler {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-treetable .p-column-resizer-helper {
    background: #8dd0ff;
  }
  .p-treetable .p-treetable-scrollable-header,
.p-treetable .p-treetable-scrollable-footer {
    background: #2a323d;
  }
  .p-treetable .p-treetable-loading-icon {
    font-size: 2rem;
  }
  .p-treetable .p-treetable-loading-icon.p-icon {
    width: 2rem;
    height: 2rem;
  }
  .p-treetable.p-treetable-gridlines .p-treetable-header {
    border-width: 1px 1px 0 1px;
  }
  .p-treetable.p-treetable-gridlines .p-treetable-footer {
    border-width: 0 1px 1px 1px;
  }
  .p-treetable.p-treetable-gridlines .p-treetable-top {
    border-width: 0 1px 0 1px;
  }
  .p-treetable.p-treetable-gridlines .p-treetable-bottom {
    border-width: 0 1px 1px 1px;
  }
  .p-treetable.p-treetable-gridlines .p-treetable-thead > tr > th {
    border-width: 1px;
  }
  .p-treetable.p-treetable-gridlines .p-treetable-tbody > tr > td {
    border-width: 1px;
  }
  .p-treetable.p-treetable-gridlines .p-treetable-tfoot > tr > td {
    border-width: 1px;
  }
  .p-treetable.p-treetable-striped .p-treetable-tbody > tr.p-row-odd {
    background: #2f3641;
  }
  .p-treetable.p-treetable-striped .p-treetable-tbody > tr.p-row-odd.p-highlight {
    background: #8dd0ff;
    color: #151515;
  }
  .p-treetable.p-treetable-striped .p-treetable-tbody > tr.p-row-odd.p-highlight .p-row-toggler {
    color: #151515;
  }
  .p-treetable.p-treetable-striped .p-treetable-tbody > tr.p-row-odd.p-highlight .p-row-toggler:hover {
    color: #151515;
  }
  .p-treetable.p-treetable-striped .p-treetable-tbody > tr.p-row-odd + .p-row-expanded {
    background: #2f3641;
  }
  .p-treetable.p-treetable-sm .p-treetable-header {
    padding: 0.875rem 0.875rem;
  }
  .p-treetable.p-treetable-sm .p-treetable-thead > tr > th {
    padding: 0.5rem 0.5rem;
  }
  .p-treetable.p-treetable-sm .p-treetable-tbody > tr > td {
    padding: 0.5rem 0.5rem;
  }
  .p-treetable.p-treetable-sm .p-treetable-tfoot > tr > td {
    padding: 0.5rem 0.5rem;
  }
  .p-treetable.p-treetable-sm .p-treetable-footer {
    padding: 0.5rem 0.5rem;
  }
  .p-treetable.p-treetable-lg .p-treetable-header {
    padding: 1.25rem 1.25rem;
  }
  .p-treetable.p-treetable-lg .p-treetable-thead > tr > th {
    padding: 1.25rem 1.25rem;
  }
  .p-treetable.p-treetable-lg .p-treetable-tbody > tr > td {
    padding: 1.25rem 1.25rem;
  }
  .p-treetable.p-treetable-lg .p-treetable-tfoot > tr > td {
    padding: 1.25rem 1.25rem;
  }
  .p-treetable.p-treetable-lg .p-treetable-footer {
    padding: 1.25rem 1.25rem;
  }

  .p-timeline .p-timeline-event-marker {
    border: 0 none;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    background-color: #8dd0ff;
  }
  .p-timeline .p-timeline-event-connector {
    background-color: #3f4b5b;
  }
  .p-timeline.p-timeline-vertical .p-timeline-event-opposite,
.p-timeline.p-timeline-vertical .p-timeline-event-content {
    padding: 0 1rem;
  }
  .p-timeline.p-timeline-vertical .p-timeline-event-connector {
    width: 2px;
  }
  .p-timeline.p-timeline-horizontal .p-timeline-event-opposite,
.p-timeline.p-timeline-horizontal .p-timeline-event-content {
    padding: 1rem 0;
  }
  .p-timeline.p-timeline-horizontal .p-timeline-event-connector {
    height: 2px;
  }

  .p-accordion .p-accordion-header .p-accordion-header-link {
    padding: 1rem 1.25rem;
    border: 1px solid #3f4b5b;
    color: rgba(255, 255, 255, 0.87);
    background: #2a323d;
    font-weight: 600;
    border-radius: 4px;
    transition: box-shadow 0.15s;
  }
  .p-accordion .p-accordion-header .p-accordion-header-link .p-accordion-toggle-icon {
    margin-right: 0.5rem;
  }
  .p-accordion .p-accordion-header:not(.p-disabled) .p-accordion-header-link:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 1px #e3f3fe;
  }
  .p-accordion .p-accordion-header:not(.p-highlight):not(.p-disabled):hover .p-accordion-header-link {
    background: rgba(255, 255, 255, 0.04);
    border-color: #3f4b5b;
    color: rgba(255, 255, 255, 0.87);
  }
  .p-accordion .p-accordion-header:not(.p-disabled).p-highlight .p-accordion-header-link {
    background: #2a323d;
    border-color: #3f4b5b;
    color: rgba(255, 255, 255, 0.87);
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .p-accordion .p-accordion-header:not(.p-disabled).p-highlight:hover .p-accordion-header-link {
    border-color: #3f4b5b;
    background: rgba(255, 255, 255, 0.04);
    color: rgba(255, 255, 255, 0.87);
  }
  .p-accordion .p-accordion-content {
    padding: 1.25rem;
    border: 1px solid #3f4b5b;
    background: #2a323d;
    color: rgba(255, 255, 255, 0.87);
    border-top: 0;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .p-accordion .p-accordion-tab {
    margin-bottom: 0;
  }
  .p-accordion .p-accordion-tab .p-accordion-header .p-accordion-header-link {
    border-radius: 0;
  }
  .p-accordion .p-accordion-tab .p-accordion-content {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .p-accordion .p-accordion-tab:not(:first-child) .p-accordion-header .p-accordion-header-link {
    border-top: 0 none;
  }
  .p-accordion .p-accordion-tab:not(:first-child) .p-accordion-header:not(.p-highlight):not(.p-disabled):hover .p-accordion-header-link, .p-accordion .p-accordion-tab:not(:first-child) .p-accordion-header:not(.p-disabled).p-highlight:hover .p-accordion-header-link {
    border-top: 0 none;
  }
  .p-accordion .p-accordion-tab:first-child .p-accordion-header .p-accordion-header-link {
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }
  .p-accordion .p-accordion-tab:last-child .p-accordion-header:not(.p-highlight) .p-accordion-header-link {
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .p-accordion .p-accordion-tab:last-child .p-accordion-header:not(.p-highlight) .p-accordion-content {
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .p-card {
    background: #2a323d;
    color: rgba(255, 255, 255, 0.87);
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
    border-radius: 4px;
  }
  .p-card .p-card-body {
    padding: 1.5rem;
  }
  .p-card .p-card-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  .p-card .p-card-subtitle {
    font-weight: 400;
    margin-bottom: 0.5rem;
    color: rgba(255, 255, 255, 0.6);
  }
  .p-card .p-card-content {
    padding: 1rem 0;
  }
  .p-card .p-card-footer {
    padding: 1rem 0 0 0;
  }

  .p-fieldset {
    border: 1px solid #3f4b5b;
    background: #2a323d;
    color: rgba(255, 255, 255, 0.87);
    border-radius: 4px;
  }
  .p-fieldset .p-fieldset-legend {
    padding: 1rem 1.25rem;
    border: 1px solid #3f4b5b;
    color: rgba(255, 255, 255, 0.87);
    background: #2a323d;
    font-weight: 600;
    border-radius: 4px;
  }
  .p-fieldset.p-fieldset-toggleable .p-fieldset-legend {
    padding: 0;
    transition: color 0.15s, box-shadow 0.15s;
  }
  .p-fieldset.p-fieldset-toggleable .p-fieldset-legend a {
    padding: 1rem 1.25rem;
    color: rgba(255, 255, 255, 0.87);
    border-radius: 4px;
    transition: box-shadow 0.15s;
  }
  .p-fieldset.p-fieldset-toggleable .p-fieldset-legend a .p-fieldset-toggler {
    margin-right: 0.5rem;
  }
  .p-fieldset.p-fieldset-toggleable .p-fieldset-legend a:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 1px #e3f3fe;
  }
  .p-fieldset.p-fieldset-toggleable .p-fieldset-legend:hover {
    background: rgba(255, 255, 255, 0.04);
    border-color: #3f4b5b;
    color: rgba(255, 255, 255, 0.87);
  }
  .p-fieldset .p-fieldset-content {
    padding: 1.25rem;
  }

  .p-divider .p-divider-content {
    background-color: #2a323d;
  }
  .p-divider.p-divider-horizontal {
    margin: 1rem 0;
    padding: 0 1rem;
  }
  .p-divider.p-divider-horizontal:before {
    border-top: 1px #3f4b5b;
  }
  .p-divider.p-divider-horizontal .p-divider-content {
    padding: 0 0.5rem;
  }
  .p-divider.p-divider-vertical {
    margin: 0 1rem;
    padding: 1rem 0;
  }
  .p-divider.p-divider-vertical:before {
    border-left: 1px #3f4b5b;
  }
  .p-divider.p-divider-vertical .p-divider-content {
    padding: 0.5rem 0;
  }

  .p-panel .p-panel-header {
    border: 1px solid #3f4b5b;
    padding: 1rem 1.25rem;
    background: #2a323d;
    color: rgba(255, 255, 255, 0.87);
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }
  .p-panel .p-panel-header .p-panel-title {
    font-weight: 600;
  }
  .p-panel .p-panel-header .p-panel-header-icon {
    width: 2rem;
    height: 2rem;
    color: rgba(255, 255, 255, 0.6);
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: color 0.15s, box-shadow 0.15s;
  }
  .p-panel .p-panel-header .p-panel-header-icon:enabled:hover {
    color: rgba(255, 255, 255, 0.87);
    border-color: transparent;
    background: transparent;
  }
  .p-panel .p-panel-header .p-panel-header-icon:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 1px #e3f3fe;
  }
  .p-panel.p-panel-toggleable .p-panel-header {
    padding: 0.5rem 1.25rem;
  }
  .p-panel .p-panel-content {
    padding: 1.25rem;
    border: 1px solid #3f4b5b;
    background: #2a323d;
    color: rgba(255, 255, 255, 0.87);
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    border-top: 0 none;
  }
  .p-panel .p-panel-footer {
    padding: 0.5rem 1.25rem;
    border: 1px solid #3f4b5b;
    background: #2a323d;
    color: rgba(255, 255, 255, 0.87);
    border-top: 0 none;
  }

  .p-splitter {
    border: 1px solid #3f4b5b;
    background: #2a323d;
    border-radius: 4px;
    color: rgba(255, 255, 255, 0.87);
  }
  .p-splitter .p-splitter-gutter {
    transition: color 0.15s, box-shadow 0.15s;
    background: rgba(255, 255, 255, 0.04);
  }
  .p-splitter .p-splitter-gutter .p-splitter-gutter-handle {
    background: #3f4b5b;
  }
  .p-splitter .p-splitter-gutter-resizing {
    background: #3f4b5b;
  }

  .p-scrollpanel .p-scrollpanel-bar {
    background: #3f4b5b;
    border: 0 none;
  }

  .p-tabview .p-tabview-nav {
    background: transparent;
    border: 1px solid #3f4b5b;
    border-width: 0 0 1px 0;
  }
  .p-tabview .p-tabview-nav li {
    margin-right: 0;
  }
  .p-tabview .p-tabview-nav li .p-tabview-nav-link {
    border: solid;
    border-width: 1px;
    border-color: #2a323d #2a323d #3f4b5b #2a323d;
    background: #2a323d;
    color: rgba(255, 255, 255, 0.6);
    padding: 0.75rem 1rem;
    font-weight: 600;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    transition: box-shadow 0.15s;
    margin: 0 0 -1px 0;
  }
  .p-tabview .p-tabview-nav li .p-tabview-nav-link:not(.p-disabled):focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 1px #e3f3fe;
  }
  .p-tabview .p-tabview-nav li:not(.p-highlight):not(.p-disabled):hover .p-tabview-nav-link {
    background: #2a323d;
    border-color: #3f4b5b;
    color: rgba(255, 255, 255, 0.87);
  }
  .p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
    background: #2a323d;
    border-color: #3f4b5b #3f4b5b #2a323d #3f4b5b;
    color: rgba(255, 255, 255, 0.6);
  }
  .p-tabview .p-tabview-close {
    margin-left: 0.5rem;
  }
  .p-tabview .p-tabview-nav-btn.p-link {
    background: #2a323d;
    color: rgba(255, 255, 255, 0.6);
    width: 2.357rem;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    border-radius: 0;
  }
  .p-tabview .p-tabview-nav-btn.p-link:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 1px #e3f3fe;
  }
  .p-tabview .p-tabview-panels {
    background: #2a323d;
    padding: 1.25rem;
    border: 0 none;
    color: rgba(255, 255, 255, 0.87);
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .p-toolbar {
    background: #2a323d;
    border: 1px solid #3f4b5b;
    padding: 1rem 1.25rem;
    border-radius: 4px;
    gap: 0.5rem;
  }
  .p-toolbar .p-toolbar-separator {
    margin: 0 0.5rem;
  }

  .p-confirm-popup {
    background: #2a323d;
    color: rgba(255, 255, 255, 0.87);
    border: 1px solid #3f4b5b;
    border-radius: 4px;
    box-shadow: none;
  }
  .p-confirm-popup .p-confirm-popup-content {
    padding: 1.25rem;
  }
  .p-confirm-popup .p-confirm-popup-footer {
    text-align: right;
    padding: 0 1.25rem 1.25rem 1.25rem;
  }
  .p-confirm-popup .p-confirm-popup-footer button {
    margin: 0 0.5rem 0 0;
    width: auto;
  }
  .p-confirm-popup .p-confirm-popup-footer button:last-child {
    margin: 0;
  }
  .p-confirm-popup:after {
    border: solid transparent;
    border-color: rgba(42, 50, 61, 0);
    border-bottom-color: #2a323d;
  }
  .p-confirm-popup:before {
    border: solid transparent;
    border-color: rgba(63, 75, 91, 0);
    border-bottom-color: #3c4756;
  }
  .p-confirm-popup.p-confirm-popup-flipped:after {
    border-top-color: #2a323d;
  }
  .p-confirm-popup.p-confirm-popup-flipped:before {
    border-top-color: #3f4b5b;
  }
  .p-confirm-popup .p-confirm-popup-icon {
    font-size: 1.5rem;
  }
  .p-confirm-popup .p-confirm-popup-icon.p-icon {
    width: 1.5rem;
    height: 1.5rem;
  }
  .p-confirm-popup .p-confirm-popup-message {
    margin-left: 1rem;
  }

  .p-dialog {
    border-radius: 4px;
    box-shadow: none;
    border: 1px solid #3f4b5b;
  }
  .p-dialog .p-dialog-header {
    border-bottom: 1px solid #3f4b5b;
    background: #2a323d;
    color: rgba(255, 255, 255, 0.87);
    padding: 1rem;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }
  .p-dialog .p-dialog-header .p-dialog-title {
    font-weight: 600;
    font-size: 1.25rem;
  }
  .p-dialog .p-dialog-header .p-dialog-header-icon {
    width: 2rem;
    height: 2rem;
    color: rgba(255, 255, 255, 0.6);
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: color 0.15s, box-shadow 0.15s;
    margin-right: 0.5rem;
  }
  .p-dialog .p-dialog-header .p-dialog-header-icon:enabled:hover {
    color: rgba(255, 255, 255, 0.87);
    border-color: transparent;
    background: transparent;
  }
  .p-dialog .p-dialog-header .p-dialog-header-icon:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 1px #e3f3fe;
  }
  .p-dialog .p-dialog-header .p-dialog-header-icon:last-child {
    margin-right: 0;
  }
  .p-dialog .p-dialog-content {
    background: #2a323d;
    color: rgba(255, 255, 255, 0.87);
    padding: 1rem;
  }
  .p-dialog .p-dialog-content:last-of-type {
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .p-dialog .p-dialog-footer {
    border-top: 1px solid #3f4b5b;
    background: #2a323d;
    color: rgba(255, 255, 255, 0.87);
    padding: 1rem;
    text-align: right;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .p-dialog .p-dialog-footer button {
    margin: 0 0.5rem 0 0;
    width: auto;
  }
  .p-dialog.p-dialog-maximized .p-dialog-header, .p-dialog.p-dialog-maximized .p-dialog-content:last-of-type {
    border-radius: 0;
  }
  .p-dialog.p-confirm-dialog .p-confirm-dialog-icon {
    font-size: 2rem;
  }
  .p-dialog.p-confirm-dialog .p-confirm-dialog-icon.p-icon {
    width: 2rem;
    height: 2rem;
  }
  .p-dialog.p-confirm-dialog .p-confirm-dialog-message {
    margin-left: 1rem;
  }

  .p-overlaypanel {
    background: #2a323d;
    color: rgba(255, 255, 255, 0.87);
    border: 1px solid #3f4b5b;
    border-radius: 4px;
    box-shadow: none;
  }
  .p-overlaypanel .p-overlaypanel-content {
    padding: 1.25rem;
  }
  .p-overlaypanel .p-overlaypanel-close {
    background: #8dd0ff;
    color: #151515;
    width: 2rem;
    height: 2rem;
    transition: color 0.15s, box-shadow 0.15s;
    border-radius: 50%;
    position: absolute;
    top: -1rem;
    right: -1rem;
  }
  .p-overlaypanel .p-overlaypanel-close:enabled:hover {
    background: #56bdff;
    color: #151515;
  }
  .p-overlaypanel:after {
    border: solid transparent;
    border-color: rgba(42, 50, 61, 0);
    border-bottom-color: #2a323d;
  }
  .p-overlaypanel:before {
    border: solid transparent;
    border-color: rgba(63, 75, 91, 0);
    border-bottom-color: #3c4756;
  }
  .p-overlaypanel.p-overlaypanel-flipped:after {
    border-top-color: #2a323d;
  }
  .p-overlaypanel.p-overlaypanel-flipped:before {
    border-top-color: #3f4b5b;
  }

  .p-sidebar {
    background: #2a323d;
    color: rgba(255, 255, 255, 0.87);
    border: 1px solid #3f4b5b;
    box-shadow: none;
  }
  .p-sidebar .p-sidebar-header {
    padding: 1rem 1.25rem;
  }
  .p-sidebar .p-sidebar-header .p-sidebar-close,
.p-sidebar .p-sidebar-header .p-sidebar-icon {
    width: 2rem;
    height: 2rem;
    color: rgba(255, 255, 255, 0.6);
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: color 0.15s, box-shadow 0.15s;
  }
  .p-sidebar .p-sidebar-header .p-sidebar-close:enabled:hover,
.p-sidebar .p-sidebar-header .p-sidebar-icon:enabled:hover {
    color: rgba(255, 255, 255, 0.87);
    border-color: transparent;
    background: transparent;
  }
  .p-sidebar .p-sidebar-header .p-sidebar-close:focus-visible,
.p-sidebar .p-sidebar-header .p-sidebar-icon:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 1px #e3f3fe;
  }
  .p-sidebar .p-sidebar-header + .p-sidebar-content {
    padding-top: 0;
  }
  .p-sidebar .p-sidebar-content {
    padding: 1.25rem;
  }

  .p-tooltip .p-tooltip-text {
    background: #3f4b5b;
    color: rgba(255, 255, 255, 0.87);
    padding: 0.5rem 0.75rem;
    box-shadow: none;
    border-radius: 4px;
  }
  .p-tooltip.p-tooltip-right .p-tooltip-arrow {
    border-right-color: #3f4b5b;
  }
  .p-tooltip.p-tooltip-left .p-tooltip-arrow {
    border-left-color: #3f4b5b;
  }
  .p-tooltip.p-tooltip-top .p-tooltip-arrow {
    border-top-color: #3f4b5b;
  }
  .p-tooltip.p-tooltip-bottom .p-tooltip-arrow {
    border-bottom-color: #3f4b5b;
  }

  .p-fileupload .p-fileupload-buttonbar {
    background: #2a323d;
    padding: 1rem 1.25rem;
    border: 1px solid #3f4b5b;
    color: rgba(255, 255, 255, 0.87);
    border-bottom: 0 none;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    gap: 0.5rem;
  }
  .p-fileupload .p-fileupload-buttonbar .p-button {
    margin-right: 0.5rem;
  }
  .p-fileupload .p-fileupload-content {
    background: #2a323d;
    padding: 2rem 1rem;
    border: 1px solid #3f4b5b;
    color: rgba(255, 255, 255, 0.87);
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .p-fileupload .p-progressbar {
    height: 0.25rem;
  }
  .p-fileupload .p-fileupload-row > div {
    padding: 1rem 1rem;
  }
  .p-fileupload.p-fileupload-advanced .p-message {
    margin-top: 0;
  }

  .p-breadcrumb {
    background: #343e4d;
    border: 0 none;
    border-radius: 4px;
    padding: 1rem;
  }
  .p-breadcrumb .p-breadcrumb-list li .p-menuitem-link {
    transition: box-shadow 0.15s;
    border-radius: 4px;
  }
  .p-breadcrumb .p-breadcrumb-list li .p-menuitem-link:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 1px #e3f3fe;
  }
  .p-breadcrumb .p-breadcrumb-list li .p-menuitem-link .p-menuitem-text {
    color: #8dd0ff;
  }
  .p-breadcrumb .p-breadcrumb-list li .p-menuitem-link .p-menuitem-icon {
    color: #8dd0ff;
  }
  .p-breadcrumb .p-breadcrumb-list li.p-menuitem-separator {
    margin: 0 0.5rem 0 0.5rem;
    color: rgba(255, 255, 255, 0.87);
  }
  .p-breadcrumb .p-breadcrumb-list li:last-child .p-menuitem-text {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-breadcrumb .p-breadcrumb-list li:last-child .p-menuitem-icon {
    color: rgba(255, 255, 255, 0.87);
  }

  .p-contextmenu {
    padding: 0.5rem 0;
    background: #2a323d;
    color: rgba(255, 255, 255, 0.87);
    border: 1px solid #3f4b5b;
    box-shadow: none;
    border-radius: 4px;
    width: 12.5rem;
  }
  .p-contextmenu .p-menuitem-link {
    padding: 0.75rem 1rem;
    color: rgba(255, 255, 255, 0.87);
    border-radius: 0;
    transition: box-shadow 0.15s;
    user-select: none;
  }
  .p-contextmenu .p-menuitem-link .p-menuitem-text {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-contextmenu .p-menuitem-link .p-menuitem-icon {
    color: rgba(255, 255, 255, 0.6);
    margin-right: 0.5rem;
  }
  .p-contextmenu .p-menuitem-link .p-submenu-icon {
    color: rgba(255, 255, 255, 0.6);
  }
  .p-contextmenu .p-menuitem-link:not(.p-disabled):hover {
    background: rgba(255, 255, 255, 0.04);
  }
  .p-contextmenu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-contextmenu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-contextmenu .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-contextmenu .p-menuitem-link:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem #e3f3fe;
  }
  .p-contextmenu .p-submenu-list {
    padding: 0.5rem 0;
    background: #2a323d;
    border: 1px solid #3f4b5b;
    box-shadow: none;
    border-radius: 4px;
  }
  .p-contextmenu .p-menuitem.p-menuitem-active > .p-menuitem-link {
    background: #20262e;
  }
  .p-contextmenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-text {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-contextmenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-icon, .p-contextmenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-submenu-icon {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-contextmenu .p-menu-separator {
    border-top: 1px solid #3f4b5b;
    margin: 0.5rem 0;
  }
  .p-contextmenu .p-submenu-icon {
    font-size: 0.875rem;
    transition: transform 0.15s;
  }
  .p-contextmenu .p-submenu-icon.p-icon {
    width: 0.875rem;
    height: 0.875rem;
  }

  .p-dock .p-dock-list {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 0.5rem 0.5rem;
    border-radius: 0.5rem;
  }
  .p-dock .p-dock-item {
    padding: 0.5rem;
  }
  .p-dock .p-dock-action {
    width: 4rem;
    height: 4rem;
  }
  .p-dock.p-dock-magnification.p-dock-top .p-dock-item-second-prev,
.p-dock.p-dock-magnification.p-dock-top .p-dock-item-second-next, .p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-second-prev,
.p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-second-next {
    margin: 0 0.9rem;
  }
  .p-dock.p-dock-magnification.p-dock-top .p-dock-item-prev,
.p-dock.p-dock-magnification.p-dock-top .p-dock-item-next, .p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-prev,
.p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-next {
    margin: 0 1.3rem;
  }
  .p-dock.p-dock-magnification.p-dock-top .p-dock-item-current, .p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-current {
    margin: 0 1.5rem;
  }
  .p-dock.p-dock-magnification.p-dock-left .p-dock-item-second-prev,
.p-dock.p-dock-magnification.p-dock-left .p-dock-item-second-next, .p-dock.p-dock-magnification.p-dock-right .p-dock-item-second-prev,
.p-dock.p-dock-magnification.p-dock-right .p-dock-item-second-next {
    margin: 0.9rem 0;
  }
  .p-dock.p-dock-magnification.p-dock-left .p-dock-item-prev,
.p-dock.p-dock-magnification.p-dock-left .p-dock-item-next, .p-dock.p-dock-magnification.p-dock-right .p-dock-item-prev,
.p-dock.p-dock-magnification.p-dock-right .p-dock-item-next {
    margin: 1.3rem 0;
  }
  .p-dock.p-dock-magnification.p-dock-left .p-dock-item-current, .p-dock.p-dock-magnification.p-dock-right .p-dock-item-current {
    margin: 1.5rem 0;
  }

  @media screen and (max-width: 960px) {
    .p-dock.p-dock-top .p-dock-container, .p-dock.p-dock-bottom .p-dock-container {
      overflow-x: auto;
      width: 100%;
    }
    .p-dock.p-dock-top .p-dock-container .p-dock-list, .p-dock.p-dock-bottom .p-dock-container .p-dock-list {
      margin: 0 auto;
    }
    .p-dock.p-dock-left .p-dock-container, .p-dock.p-dock-right .p-dock-container {
      overflow-y: auto;
      height: 100%;
    }
    .p-dock.p-dock-left .p-dock-container .p-dock-list, .p-dock.p-dock-right .p-dock-container .p-dock-list {
      margin: auto 0;
    }
    .p-dock.p-dock-magnification.p-dock-top .p-dock-item-second-prev,
.p-dock.p-dock-magnification.p-dock-top .p-dock-item-second-next,
.p-dock.p-dock-magnification.p-dock-top .p-dock-item-prev,
.p-dock.p-dock-magnification.p-dock-top .p-dock-item-next,
.p-dock.p-dock-magnification.p-dock-top .p-dock-item-current, .p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-second-prev,
.p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-second-next,
.p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-prev,
.p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-next,
.p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-current, .p-dock.p-dock-magnification.p-dock-left .p-dock-item-second-prev,
.p-dock.p-dock-magnification.p-dock-left .p-dock-item-second-next,
.p-dock.p-dock-magnification.p-dock-left .p-dock-item-prev,
.p-dock.p-dock-magnification.p-dock-left .p-dock-item-next,
.p-dock.p-dock-magnification.p-dock-left .p-dock-item-current, .p-dock.p-dock-magnification.p-dock-right .p-dock-item-second-prev,
.p-dock.p-dock-magnification.p-dock-right .p-dock-item-second-next,
.p-dock.p-dock-magnification.p-dock-right .p-dock-item-prev,
.p-dock.p-dock-magnification.p-dock-right .p-dock-item-next,
.p-dock.p-dock-magnification.p-dock-right .p-dock-item-current {
      transform: none;
      margin: 0;
    }
  }
  .p-megamenu {
    padding: 0.5rem 1rem;
    background: #343e4d;
    color: rgba(255, 255, 255, 0.6);
    border: 0 none;
    border-radius: 4px;
  }
  .p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link {
    padding: 1rem;
    color: rgba(255, 255, 255, 0.6);
    border-radius: 4px;
    transition: box-shadow 0.15s;
    user-select: none;
  }
  .p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link .p-menuitem-text {
    color: rgba(255, 255, 255, 0.6);
  }
  .p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link .p-menuitem-icon {
    color: rgba(255, 255, 255, 0.6);
    margin-right: 0.5rem;
  }
  .p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link .p-submenu-icon {
    color: rgba(255, 255, 255, 0.6);
    margin-left: 0.5rem;
  }
  .p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover {
    background: transparent;
  }
  .p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem #e3f3fe;
  }
  .p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link > .p-submenu-icon {
    margin-left: auto;
  }
  .p-megamenu .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link,
.p-megamenu .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover {
    background: transparent;
  }
  .p-megamenu .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-text,
.p-megamenu .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-megamenu .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-icon,
.p-megamenu .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-megamenu .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link .p-submenu-icon,
.p-megamenu .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-megamenu .p-menuitem-link {
    padding: 0.75rem 1rem;
    color: rgba(255, 255, 255, 0.87);
    border-radius: 0;
    transition: box-shadow 0.15s;
    user-select: none;
  }
  .p-megamenu .p-menuitem-link .p-menuitem-text {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-megamenu .p-menuitem-link .p-menuitem-icon {
    color: rgba(255, 255, 255, 0.6);
    margin-right: 0.5rem;
  }
  .p-megamenu .p-menuitem-link .p-submenu-icon {
    color: rgba(255, 255, 255, 0.6);
  }
  .p-megamenu .p-menuitem-link:not(.p-disabled):hover {
    background: rgba(255, 255, 255, 0.04);
  }
  .p-megamenu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-megamenu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-megamenu .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-megamenu .p-menuitem-link:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem #e3f3fe;
  }
  .p-megamenu .p-megamenu-panel {
    background: #2a323d;
    color: rgba(255, 255, 255, 0.87);
    border: 1px solid #3f4b5b;
    box-shadow: none;
  }
  .p-megamenu .p-megamenu-submenu-header {
    margin: 0;
    padding: 0.75rem 1rem;
    color: rgba(255, 255, 255, 0.87);
    background: #2a323d;
    font-weight: 600;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }
  .p-megamenu .p-megamenu-submenu {
    padding: 0.5rem 0;
    width: 12.5rem;
  }
  .p-megamenu .p-megamenu-submenu .p-menu-separator {
    border-top: 1px solid #3f4b5b;
    margin: 0.5rem 0;
  }
  .p-megamenu .p-menuitem.p-menuitem-active > .p-menuitem-link {
    background: #20262e;
  }
  .p-megamenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-text {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-megamenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-icon, .p-megamenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-submenu-icon {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-megamenu.p-megamenu-vertical {
    width: 12.5rem;
    padding: 0.5rem 0;
  }
  .p-megamenu .p-megamenu-button {
    width: 2rem;
    height: 2rem;
    color: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    transition: color 0.15s, box-shadow 0.15s;
  }
  .p-megamenu .p-megamenu-button:hover {
    color: rgba(255, 255, 255, 0.87);
    background: transparent;
  }
  .p-megamenu .p-megamenu-button:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 1px #e3f3fe;
  }
  .p-megamenu .p-submenu-icon {
    transition: transform 0.15s;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list {
    padding: 0.5rem 0;
    background: #2a323d;
    border: 1px solid #3f4b5b;
    box-shadow: none;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list .p-menu-separator {
    border-top: 1px solid #3f4b5b;
    margin: 0.5rem 0;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list .p-submenu-icon {
    font-size: 0.875rem;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list .p-submenu-icon.p-icon {
    width: 0.875rem;
    height: 0.875rem;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem {
    width: 100%;
    position: static;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link {
    padding: 0.75rem 1rem;
    color: rgba(255, 255, 255, 0.87);
    border-radius: 0;
    transition: box-shadow 0.15s;
    user-select: none;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link .p-menuitem-text {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link .p-menuitem-icon {
    color: rgba(255, 255, 255, 0.6);
    margin-right: 0.5rem;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link .p-submenu-icon {
    color: rgba(255, 255, 255, 0.6);
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover {
    background: rgba(255, 255, 255, 0.04);
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem #e3f3fe;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem > .p-menuitem-link > .p-submenu-icon {
    margin-left: auto;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link > .p-submenu-icon {
    transform: rotate(-180deg);
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list .p-submenu-list {
    width: 100%;
    position: static;
    box-shadow: none;
    border: 0 none;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list .p-submenu-list .p-submenu-icon {
    transition: transform 0.15s;
    transform: rotate(90deg);
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list .p-submenu-list .p-menuitem-active > .p-menuitem-link > .p-submenu-icon {
    transform: rotate(-90deg);
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list .p-menuitem {
    width: 100%;
    position: static;
  }

  .p-menu {
    padding: 0.5rem 0;
    background: #2a323d;
    color: rgba(255, 255, 255, 0.87);
    border: 1px solid #3f4b5b;
    border-radius: 4px;
    width: 12.5rem;
  }
  .p-menu .p-menuitem-link {
    padding: 0.75rem 1rem;
    color: rgba(255, 255, 255, 0.87);
    border-radius: 0;
    transition: box-shadow 0.15s;
    user-select: none;
  }
  .p-menu .p-menuitem-link .p-menuitem-text {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-menu .p-menuitem-link .p-menuitem-icon {
    color: rgba(255, 255, 255, 0.6);
    margin-right: 0.5rem;
  }
  .p-menu .p-menuitem-link .p-submenu-icon {
    color: rgba(255, 255, 255, 0.6);
  }
  .p-menu .p-menuitem-link:not(.p-disabled):hover {
    background: rgba(255, 255, 255, 0.04);
  }
  .p-menu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-menu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-menu .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-menu .p-menuitem-link:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem #e3f3fe;
  }
  .p-menu.p-menu-overlay {
    background: #2a323d;
    border: 1px solid #3f4b5b;
    box-shadow: none;
  }
  .p-menu .p-submenu-header {
    margin: 0;
    padding: 0.75rem 1rem;
    color: rgba(255, 255, 255, 0.87);
    background: #2a323d;
    font-weight: 600;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
  .p-menu .p-menu-separator {
    border-top: 1px solid #3f4b5b;
    margin: 0.5rem 0;
  }

  .p-menubar {
    padding: 0.5rem 1rem;
    background: #343e4d;
    color: rgba(255, 255, 255, 0.6);
    border: 0 none;
    border-radius: 4px;
  }
  .p-menubar .p-menuitem-link {
    padding: 0.75rem 1rem;
    color: rgba(255, 255, 255, 0.87);
    border-radius: 0;
    transition: box-shadow 0.15s;
    user-select: none;
  }
  .p-menubar .p-menuitem-link .p-menuitem-text {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-menubar .p-menuitem-link .p-menuitem-icon {
    color: rgba(255, 255, 255, 0.6);
    margin-right: 0.5rem;
  }
  .p-menubar .p-menuitem-link .p-submenu-icon {
    color: rgba(255, 255, 255, 0.6);
  }
  .p-menubar .p-menuitem-link:not(.p-disabled):hover {
    background: rgba(255, 255, 255, 0.04);
  }
  .p-menubar .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-menubar .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-menubar .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-menubar .p-menuitem-link:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem #e3f3fe;
  }
  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link {
    padding: 1rem;
    color: rgba(255, 255, 255, 0.6);
    border-radius: 4px;
    transition: box-shadow 0.15s;
    user-select: none;
  }
  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link .p-menuitem-text {
    color: rgba(255, 255, 255, 0.6);
  }
  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link .p-menuitem-icon {
    color: rgba(255, 255, 255, 0.6);
    margin-right: 0.5rem;
  }
  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link .p-submenu-icon {
    color: rgba(255, 255, 255, 0.6);
    margin-left: 0.5rem;
  }
  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover {
    background: transparent;
  }
  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem #e3f3fe;
  }
  .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link,
.p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover {
    background: transparent;
  }
  .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-text,
.p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-icon,
.p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link .p-submenu-icon,
.p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-menubar .p-submenu-list {
    padding: 0.5rem 0;
    background: #2a323d;
    border: 1px solid #3f4b5b;
    box-shadow: none;
    width: 12.5rem;
  }
  .p-menubar .p-submenu-list .p-menu-separator {
    border-top: 1px solid #3f4b5b;
    margin: 0.5rem 0;
  }
  .p-menubar .p-submenu-list .p-submenu-icon {
    font-size: 0.875rem;
  }
  .p-menubar .p-submenu-list .p-submenu-icon.p-icon {
    width: 0.875rem;
    height: 0.875rem;
  }
  .p-menubar .p-menuitem.p-menuitem-active > .p-menuitem-link {
    background: #20262e;
  }
  .p-menubar .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-text {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-menubar .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-icon, .p-menubar .p-menuitem.p-menuitem-active > .p-menuitem-link .p-submenu-icon {
    color: rgba(255, 255, 255, 0.87);
  }

  @media screen and (max-width: 960px) {
    .p-menubar {
      position: relative;
    }
    .p-menubar .p-menubar-button {
      display: flex;
      width: 2rem;
      height: 2rem;
      color: rgba(255, 255, 255, 0.6);
      border-radius: 50%;
      transition: color 0.15s, box-shadow 0.15s;
    }
    .p-menubar .p-menubar-button:hover {
      color: rgba(255, 255, 255, 0.87);
      background: transparent;
    }
    .p-menubar .p-menubar-button:focus {
      outline: 0 none;
      outline-offset: 0;
      box-shadow: 0 0 0 1px #e3f3fe;
    }
    .p-menubar .p-menubar-root-list {
      position: absolute;
      display: none;
      padding: 0.5rem 0;
      background: #2a323d;
      border: 1px solid #3f4b5b;
      box-shadow: none;
      width: 100%;
    }
    .p-menubar .p-menubar-root-list .p-menu-separator {
      border-top: 1px solid #3f4b5b;
      margin: 0.5rem 0;
    }
    .p-menubar .p-menubar-root-list .p-submenu-icon {
      font-size: 0.875rem;
    }
    .p-menubar .p-menubar-root-list .p-submenu-icon.p-icon {
      width: 0.875rem;
      height: 0.875rem;
    }
    .p-menubar .p-menubar-root-list > .p-menuitem {
      width: 100%;
      position: static;
    }
    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link {
      padding: 0.75rem 1rem;
      color: rgba(255, 255, 255, 0.87);
      border-radius: 0;
      transition: box-shadow 0.15s;
      user-select: none;
    }
    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link .p-menuitem-text {
      color: rgba(255, 255, 255, 0.87);
    }
    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link .p-menuitem-icon {
      color: rgba(255, 255, 255, 0.6);
      margin-right: 0.5rem;
    }
    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link .p-submenu-icon {
      color: rgba(255, 255, 255, 0.6);
    }
    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover {
      background: rgba(255, 255, 255, 0.04);
    }
    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {
      color: rgba(255, 255, 255, 0.87);
    }
    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
      color: rgba(255, 255, 255, 0.87);
    }
    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {
      color: rgba(255, 255, 255, 0.87);
    }
    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:focus {
      outline: 0 none;
      outline-offset: 0;
      box-shadow: inset 0 0 0 0.15rem #e3f3fe;
    }
    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link > .p-submenu-icon {
      margin-left: auto;
      transition: transform 0.15s;
    }
    .p-menubar .p-menubar-root-list > .p-menuitem.p-menuitem-active > .p-menuitem-link > .p-submenu-icon {
      transform: rotate(-180deg);
    }
    .p-menubar .p-menubar-root-list .p-submenu-list {
      width: 100%;
      position: static;
      box-shadow: none;
      border: 0 none;
    }
    .p-menubar .p-menubar-root-list .p-submenu-list .p-submenu-icon {
      transition: transform 0.15s;
      transform: rotate(90deg);
    }
    .p-menubar .p-menubar-root-list .p-submenu-list .p-menuitem-active > .p-menuitem-link > .p-submenu-icon {
      transform: rotate(-90deg);
    }
    .p-menubar .p-menubar-root-list .p-menuitem {
      width: 100%;
      position: static;
    }
    .p-menubar .p-menubar-root-list ul li a {
      padding-left: 2.25rem;
    }
    .p-menubar .p-menubar-root-list ul li ul li a {
      padding-left: 3.75rem;
    }
    .p-menubar .p-menubar-root-list ul li ul li ul li a {
      padding-left: 5.25rem;
    }
    .p-menubar .p-menubar-root-list ul li ul li ul li ul li a {
      padding-left: 6.75rem;
    }
    .p-menubar .p-menubar-root-list ul li ul li ul li ul li ul li a {
      padding-left: 8.25rem;
    }
    .p-menubar.p-menubar-mobile-active .p-menubar-root-list {
      display: flex;
      flex-direction: column;
      top: 100%;
      left: 0;
      z-index: 1;
    }
  }
  .p-panelmenu .p-panelmenu-header > a {
    padding: 1rem 1.25rem;
    border: 1px solid #3f4b5b;
    color: rgba(255, 255, 255, 0.87);
    background: #2a323d;
    font-weight: 600;
    border-radius: 4px;
    transition: box-shadow 0.15s;
  }
  .p-panelmenu .p-panelmenu-header > a .p-panelmenu-icon {
    margin-right: 0.5rem;
  }
  .p-panelmenu .p-panelmenu-header > a .p-menuitem-icon {
    margin-right: 0.5rem;
  }
  .p-panelmenu .p-panelmenu-header > a:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 1px #e3f3fe;
  }
  .p-panelmenu .p-panelmenu-header:not(.p-highlight):not(.p-disabled) > a:hover {
    background: rgba(255, 255, 255, 0.04);
    border-color: #3f4b5b;
    color: rgba(255, 255, 255, 0.87);
  }
  .p-panelmenu .p-panelmenu-header.p-highlight {
    margin-bottom: 0;
  }
  .p-panelmenu .p-panelmenu-header.p-highlight > a {
    background: #2a323d;
    border-color: #3f4b5b;
    color: rgba(255, 255, 255, 0.87);
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .p-panelmenu .p-panelmenu-header.p-highlight:not(.p-disabled) > a:hover {
    border-color: #3f4b5b;
    background: rgba(255, 255, 255, 0.04);
    color: rgba(255, 255, 255, 0.87);
  }
  .p-panelmenu .p-panelmenu-content {
    padding: 0.5rem 0;
    border: 1px solid #3f4b5b;
    background: #2a323d;
    color: rgba(255, 255, 255, 0.87);
    border-top: 0;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link {
    padding: 0.75rem 1rem;
    color: rgba(255, 255, 255, 0.87);
    border-radius: 0;
    transition: box-shadow 0.15s;
    user-select: none;
  }
  .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link .p-menuitem-text {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link .p-menuitem-icon {
    color: rgba(255, 255, 255, 0.6);
    margin-right: 0.5rem;
  }
  .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link .p-submenu-icon {
    color: rgba(255, 255, 255, 0.6);
  }
  .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link:not(.p-disabled):hover {
    background: rgba(255, 255, 255, 0.04);
  }
  .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem #e3f3fe;
  }
  .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link .p-panelmenu-icon {
    margin-right: 0.5rem;
  }
  .p-panelmenu .p-panelmenu-content .p-submenu-list:not(.p-panelmenu-root-submenu) {
    padding: 0 0 0 1rem;
  }
  .p-panelmenu .p-panelmenu-panel {
    margin-bottom: 0;
  }
  .p-panelmenu .p-panelmenu-panel .p-panelmenu-header > a {
    border-radius: 0;
  }
  .p-panelmenu .p-panelmenu-panel .p-panelmenu-content {
    border-radius: 0;
  }
  .p-panelmenu .p-panelmenu-panel:not(:first-child) .p-panelmenu-header > a {
    border-top: 0 none;
  }
  .p-panelmenu .p-panelmenu-panel:not(:first-child) .p-panelmenu-header:not(.p-highlight):not(.p-disabled):hover > a, .p-panelmenu .p-panelmenu-panel:not(:first-child) .p-panelmenu-header:not(.p-disabled).p-highlight:hover > a {
    border-top: 0 none;
  }
  .p-panelmenu .p-panelmenu-panel:first-child .p-panelmenu-header > a {
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }
  .p-panelmenu .p-panelmenu-panel:last-child .p-panelmenu-header:not(.p-highlight) > a {
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .p-panelmenu .p-panelmenu-panel:last-child .p-panelmenu-content {
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .p-slidemenu {
    padding: 0.5rem 0;
    background: #2a323d;
    color: rgba(255, 255, 255, 0.87);
    border: 1px solid #3f4b5b;
    border-radius: 4px;
    width: 12.5rem;
  }
  .p-slidemenu .p-menuitem-link {
    padding: 0.75rem 1rem;
    color: rgba(255, 255, 255, 0.87);
    border-radius: 0;
    transition: box-shadow 0.15s;
    user-select: none;
  }
  .p-slidemenu .p-menuitem-link .p-menuitem-text {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-slidemenu .p-menuitem-link .p-menuitem-icon {
    color: rgba(255, 255, 255, 0.6);
    margin-right: 0.5rem;
  }
  .p-slidemenu .p-menuitem-link .p-submenu-icon {
    color: rgba(255, 255, 255, 0.6);
  }
  .p-slidemenu .p-menuitem-link:not(.p-disabled):hover {
    background: rgba(255, 255, 255, 0.04);
  }
  .p-slidemenu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-slidemenu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-slidemenu .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-slidemenu .p-menuitem-link:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem #e3f3fe;
  }
  .p-slidemenu.p-slidemenu-overlay {
    background: #2a323d;
    border: 1px solid #3f4b5b;
    box-shadow: none;
  }
  .p-slidemenu .p-slidemenu-list {
    padding: 0.5rem 0;
    background: #2a323d;
    border: 1px solid #3f4b5b;
    box-shadow: none;
  }
  .p-slidemenu .p-slidemenu.p-slidemenu-active > .p-slidemenu-link {
    background: #20262e;
  }
  .p-slidemenu .p-slidemenu.p-slidemenu-active > .p-slidemenu-link .p-slidemenu-text {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-slidemenu .p-slidemenu.p-slidemenu-active > .p-slidemenu-link .p-slidemenu-icon, .p-slidemenu .p-slidemenu.p-slidemenu-active > .p-slidemenu-link .p-slidemenu-icon {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-slidemenu .p-slidemenu-separator {
    border-top: 1px solid #3f4b5b;
    margin: 0.5rem 0;
  }
  .p-slidemenu .p-slidemenu-icon {
    font-size: 0.875rem;
  }
  .p-slidemenu .p-slidemenu-icon.p-icon {
    width: 0.875rem;
    height: 0.875rem;
  }
  .p-slidemenu .p-slidemenu-backward {
    padding: 0.75rem 1rem;
    color: rgba(255, 255, 255, 0.87);
  }

  .p-steps .p-steps-item .p-menuitem-link {
    background: transparent;
    transition: box-shadow 0.15s;
    border-radius: 4px;
    background: transparent;
  }
  .p-steps .p-steps-item .p-menuitem-link .p-steps-number {
    color: rgba(255, 255, 255, 0.87);
    border: 1px solid #3f4b5b;
    background: transparent;
    min-width: 2rem;
    height: 2rem;
    line-height: 2rem;
    font-size: 1.143rem;
    z-index: 1;
    border-radius: 4px;
  }
  .p-steps .p-steps-item .p-menuitem-link .p-steps-title {
    margin-top: 0.5rem;
    color: rgba(255, 255, 255, 0.6);
  }
  .p-steps .p-steps-item .p-menuitem-link:not(.p-disabled):focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 1px #e3f3fe;
  }
  .p-steps .p-steps-item.p-highlight .p-steps-number {
    background: #8dd0ff;
    color: #151515;
  }
  .p-steps .p-steps-item.p-highlight .p-steps-title {
    font-weight: 600;
    color: rgba(255, 255, 255, 0.87);
  }
  .p-steps .p-steps-item:before {
    content: " ";
    border-top: 1px solid #3f4b5b;
    width: 100%;
    top: 50%;
    left: 0;
    display: block;
    position: absolute;
    margin-top: -1rem;
  }

  .p-tabmenu .p-tabmenu-nav {
    background: transparent;
    border: 1px solid #3f4b5b;
    border-width: 0 0 1px 0;
  }
  .p-tabmenu .p-tabmenu-nav .p-tabmenuitem {
    margin-right: 0;
  }
  .p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link {
    border: solid;
    border-width: 1px;
    border-color: #2a323d #2a323d #3f4b5b #2a323d;
    background: #2a323d;
    color: rgba(255, 255, 255, 0.6);
    padding: 0.75rem 1rem;
    font-weight: 600;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    transition: box-shadow 0.15s;
    margin: 0 0 -1px 0;
    height: calc(100% + 1px);
  }
  .p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link .p-menuitem-icon {
    margin-right: 0.5rem;
  }
  .p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link:not(.p-disabled):focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 1px #e3f3fe;
  }
  .p-tabmenu .p-tabmenu-nav .p-tabmenuitem:not(.p-highlight):not(.p-disabled):hover .p-menuitem-link {
    background: #2a323d;
    border-color: #3f4b5b;
    color: rgba(255, 255, 255, 0.87);
  }
  .p-tabmenu .p-tabmenu-nav .p-tabmenuitem.p-highlight .p-menuitem-link {
    background: #2a323d;
    border-color: #3f4b5b #3f4b5b #2a323d #3f4b5b;
    color: rgba(255, 255, 255, 0.6);
  }

  .p-tieredmenu {
    padding: 0.5rem 0;
    background: #2a323d;
    color: rgba(255, 255, 255, 0.87);
    border: 1px solid #3f4b5b;
    border-radius: 4px;
    width: 12.5rem;
  }
  .p-tieredmenu .p-menuitem-link {
    padding: 0.75rem 1rem;
    color: rgba(255, 255, 255, 0.87);
    border-radius: 0;
    transition: box-shadow 0.15s;
    user-select: none;
  }
  .p-tieredmenu .p-menuitem-link .p-menuitem-text {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-tieredmenu .p-menuitem-link .p-menuitem-icon {
    color: rgba(255, 255, 255, 0.6);
    margin-right: 0.5rem;
  }
  .p-tieredmenu .p-menuitem-link .p-submenu-icon {
    color: rgba(255, 255, 255, 0.6);
  }
  .p-tieredmenu .p-menuitem-link:not(.p-disabled):hover {
    background: rgba(255, 255, 255, 0.04);
  }
  .p-tieredmenu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-tieredmenu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-tieredmenu .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-tieredmenu .p-menuitem-link:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem #e3f3fe;
  }
  .p-tieredmenu.p-tieredmenu-overlay {
    background: #2a323d;
    border: 1px solid #3f4b5b;
    box-shadow: none;
  }
  .p-tieredmenu .p-submenu-list {
    padding: 0.5rem 0;
    background: #2a323d;
    border: 1px solid #3f4b5b;
    box-shadow: none;
  }
  .p-tieredmenu .p-menuitem.p-menuitem-active > .p-menuitem-link {
    background: #20262e;
  }
  .p-tieredmenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-text {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-tieredmenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-icon, .p-tieredmenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-submenu-icon {
    color: rgba(255, 255, 255, 0.87);
  }
  .p-tieredmenu .p-menu-separator {
    border-top: 1px solid #3f4b5b;
    margin: 0.5rem 0;
  }
  .p-tieredmenu .p-submenu-icon {
    font-size: 0.875rem;
    transition: transform 0.15s;
  }
  .p-tieredmenu .p-submenu-icon.p-icon {
    width: 0.875rem;
    height: 0.875rem;
  }

  .p-inline-message {
    padding: 0.5rem 0.75rem;
    margin: 0;
    border-radius: 4px;
  }
  .p-inline-message.p-inline-message-info {
    background: #cce5ff;
    border: solid #b8daff;
    border-width: 0px;
    color: #004085;
  }
  .p-inline-message.p-inline-message-info .p-inline-message-icon {
    color: #004085;
  }
  .p-inline-message.p-inline-message-success {
    background: #d4edda;
    border: solid #c3e6cb;
    border-width: 0px;
    color: #155724;
  }
  .p-inline-message.p-inline-message-success .p-inline-message-icon {
    color: #155724;
  }
  .p-inline-message.p-inline-message-warn {
    background: #fff3cd;
    border: solid #ffeeba;
    border-width: 0px;
    color: #856404;
  }
  .p-inline-message.p-inline-message-warn .p-inline-message-icon {
    color: #856404;
  }
  .p-inline-message.p-inline-message-error {
    background: #f8d7da;
    border: solid #f5c6cb;
    border-width: 0px;
    color: #721c24;
  }
  .p-inline-message.p-inline-message-error .p-inline-message-icon {
    color: #721c24;
  }
  .p-inline-message .p-inline-message-icon {
    font-size: 1rem;
    margin-right: 0.5rem;
  }
  .p-inline-message .p-inline-message-icon.p-icon {
    width: 1rem;
    height: 1rem;
  }
  .p-inline-message .p-inline-message-text {
    font-size: 1rem;
  }
  .p-inline-message.p-inline-message-icon-only .p-inline-message-icon {
    margin-right: 0;
  }

  .p-message {
    margin: 1rem 0;
    border-radius: 4px;
  }
  .p-message .p-message-wrapper {
    padding: 1rem 1.25rem;
  }
  .p-message .p-message-close {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: transparent;
    transition: color 0.15s, box-shadow 0.15s;
  }
  .p-message .p-message-close:hover {
    background: rgba(255, 255, 255, 0.5);
  }
  .p-message .p-message-close:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 1px #e3f3fe;
  }
  .p-message.p-message-info {
    background: #cce5ff;
    border: solid #b8daff;
    border-width: 1px;
    color: #004085;
  }
  .p-message.p-message-info .p-message-icon {
    color: #004085;
  }
  .p-message.p-message-info .p-message-close {
    color: #004085;
  }
  .p-message.p-message-success {
    background: #d4edda;
    border: solid #c3e6cb;
    border-width: 1px;
    color: #155724;
  }
  .p-message.p-message-success .p-message-icon {
    color: #155724;
  }
  .p-message.p-message-success .p-message-close {
    color: #155724;
  }
  .p-message.p-message-warn {
    background: #fff3cd;
    border: solid #ffeeba;
    border-width: 1px;
    color: #856404;
  }
  .p-message.p-message-warn .p-message-icon {
    color: #856404;
  }
  .p-message.p-message-warn .p-message-close {
    color: #856404;
  }
  .p-message.p-message-error {
    background: #f8d7da;
    border: solid #f5c6cb;
    border-width: 1px;
    color: #721c24;
  }
  .p-message.p-message-error .p-message-icon {
    color: #721c24;
  }
  .p-message.p-message-error .p-message-close {
    color: #721c24;
  }
  .p-message .p-message-text {
    font-size: 1rem;
    font-weight: 500;
  }
  .p-message .p-message-icon {
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }
  .p-message .p-message-icon.p-icon {
    width: 1.5rem;
    height: 1.5rem;
  }
  .p-message .p-message-summary {
    font-weight: 700;
  }
  .p-message .p-message-detail {
    margin-left: 0.5rem;
  }

  .p-toast {
    opacity: 1;
  }
  .p-toast .p-toast-message {
    margin: 0 0 1rem 0;
    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);
    border-radius: 4px;
  }
  .p-toast .p-toast-message .p-toast-message-content {
    padding: 1rem;
    border-width: 0;
  }
  .p-toast .p-toast-message .p-toast-message-content .p-toast-message-text {
    margin: 0 0 0 1rem;
  }
  .p-toast .p-toast-message .p-toast-message-content .p-toast-message-icon {
    font-size: 2rem;
  }
  .p-toast .p-toast-message .p-toast-message-content .p-toast-message-icon.p-icon {
    width: 2rem;
    height: 2rem;
  }
  .p-toast .p-toast-message .p-toast-message-content .p-toast-summary {
    font-weight: 700;
  }
  .p-toast .p-toast-message .p-toast-message-content .p-toast-detail {
    margin: 0.5rem 0 0 0;
  }
  .p-toast .p-toast-message .p-toast-icon-close {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: transparent;
    transition: color 0.15s, box-shadow 0.15s;
  }
  .p-toast .p-toast-message .p-toast-icon-close:hover {
    background: rgba(255, 255, 255, 0.5);
  }
  .p-toast .p-toast-message .p-toast-icon-close:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 1px #e3f3fe;
  }
  .p-toast .p-toast-message.p-toast-message-info {
    background: #cce5ff;
    border: solid #b8daff;
    border-width: 1px;
    color: #004085;
  }
  .p-toast .p-toast-message.p-toast-message-info .p-toast-message-icon,
.p-toast .p-toast-message.p-toast-message-info .p-toast-icon-close {
    color: #004085;
  }
  .p-toast .p-toast-message.p-toast-message-success {
    background: #d4edda;
    border: solid #c3e6cb;
    border-width: 1px;
    color: #155724;
  }
  .p-toast .p-toast-message.p-toast-message-success .p-toast-message-icon,
.p-toast .p-toast-message.p-toast-message-success .p-toast-icon-close {
    color: #155724;
  }
  .p-toast .p-toast-message.p-toast-message-warn {
    background: #fff3cd;
    border: solid #ffeeba;
    border-width: 1px;
    color: #856404;
  }
  .p-toast .p-toast-message.p-toast-message-warn .p-toast-message-icon,
.p-toast .p-toast-message.p-toast-message-warn .p-toast-icon-close {
    color: #856404;
  }
  .p-toast .p-toast-message.p-toast-message-error {
    background: #f8d7da;
    border: solid #f5c6cb;
    border-width: 1px;
    color: #721c24;
  }
  .p-toast .p-toast-message.p-toast-message-error .p-toast-message-icon,
.p-toast .p-toast-message.p-toast-message-error .p-toast-icon-close {
    color: #721c24;
  }

  .p-galleria .p-galleria-close {
    margin: 0.5rem;
    background: transparent;
    color: rgba(255, 255, 255, 0.6);
    width: 4rem;
    height: 4rem;
    transition: color 0.15s, box-shadow 0.15s;
    border-radius: 4px;
  }
  .p-galleria .p-galleria-close .p-galleria-close-icon {
    font-size: 2rem;
  }
  .p-galleria .p-galleria-close .p-galleria-close-icon.p-icon {
    width: 2rem;
    height: 2rem;
  }
  .p-galleria .p-galleria-close:hover {
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.87);
  }
  .p-galleria .p-galleria-item-nav {
    background: transparent;
    color: rgba(255, 255, 255, 0.6);
    width: 4rem;
    height: 4rem;
    transition: color 0.15s, box-shadow 0.15s;
    border-radius: 4px;
    margin: 0 0.5rem;
  }
  .p-galleria .p-galleria-item-nav .p-galleria-item-prev-icon,
.p-galleria .p-galleria-item-nav .p-galleria-item-next-icon {
    font-size: 2rem;
  }
  .p-galleria .p-galleria-item-nav .p-galleria-item-prev-icon.p-icon,
.p-galleria .p-galleria-item-nav .p-galleria-item-next-icon.p-icon {
    width: 2rem;
    height: 2rem;
  }
  .p-galleria .p-galleria-item-nav:not(.p-disabled):hover {
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.6);
  }
  .p-galleria .p-galleria-caption {
    background: rgba(0, 0, 0, 0.5);
    color: rgba(255, 255, 255, 0.6);
    padding: 1rem;
  }
  .p-galleria .p-galleria-indicators {
    padding: 1rem;
  }
  .p-galleria .p-galleria-indicators .p-galleria-indicator button {
    background-color: #7789a1;
    width: 1rem;
    height: 1rem;
    transition: color 0.15s, box-shadow 0.15s;
    border-radius: 4px;
  }
  .p-galleria .p-galleria-indicators .p-galleria-indicator button:hover {
    background: #687c97;
  }
  .p-galleria .p-galleria-indicators .p-galleria-indicator.p-highlight button {
    background: #8dd0ff;
    color: #151515;
  }
  .p-galleria.p-galleria-indicators-bottom .p-galleria-indicator, .p-galleria.p-galleria-indicators-top .p-galleria-indicator {
    margin-right: 0.5rem;
  }
  .p-galleria.p-galleria-indicators-left .p-galleria-indicator, .p-galleria.p-galleria-indicators-right .p-galleria-indicator {
    margin-bottom: 0.5rem;
  }
  .p-galleria.p-galleria-indicator-onitem .p-galleria-indicators {
    background: rgba(0, 0, 0, 0.5);
  }
  .p-galleria.p-galleria-indicator-onitem .p-galleria-indicators .p-galleria-indicator button {
    background: rgba(255, 255, 255, 0.4);
  }
  .p-galleria.p-galleria-indicator-onitem .p-galleria-indicators .p-galleria-indicator button:hover {
    background: rgba(255, 255, 255, 0.6);
  }
  .p-galleria.p-galleria-indicator-onitem .p-galleria-indicators .p-galleria-indicator.p-highlight button {
    background: #8dd0ff;
    color: #151515;
  }
  .p-galleria .p-galleria-thumbnail-container {
    background: rgba(0, 0, 0, 0.9);
    padding: 1rem 0.25rem;
  }
  .p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-prev,
.p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-next {
    margin: 0.5rem;
    background-color: transparent;
    color: rgba(255, 255, 255, 0.6);
    width: 2rem;
    height: 2rem;
    transition: color 0.15s, box-shadow 0.15s;
    border-radius: 4px;
  }
  .p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-prev:hover,
.p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-next:hover {
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.6);
  }
  .p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-item-content {
    transition: box-shadow 0.15s;
  }
  .p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-item-content:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 1px #e3f3fe;
  }

  .p-galleria-mask {
    --maskbg: rgba(0, 0, 0, 0.9);
  }

  .p-image-mask {
    --maskbg: rgba(0, 0, 0, 0.9);
  }

  .p-image-preview-indicator {
    background-color: transparent;
    color: #f8f9fa;
    transition: color 0.15s, box-shadow 0.15s;
  }
  .p-image-preview-indicator .p-icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  .p-image-preview-container:hover > .p-image-preview-indicator {
    background-color: rgba(0, 0, 0, 0.5);
  }

  .p-image-toolbar {
    padding: 1rem;
  }

  .p-image-action.p-link {
    color: #f8f9fa;
    background-color: transparent;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    transition: color 0.15s, box-shadow 0.15s;
    margin-right: 0.5rem;
  }
  .p-image-action.p-link:last-child {
    margin-right: 0;
  }
  .p-image-action.p-link:hover {
    color: #f8f9fa;
    background-color: rgba(255, 255, 255, 0.1);
  }
  .p-image-action.p-link span {
    font-size: 1.5rem;
  }
  .p-image-action.p-link .p-icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  .p-avatar {
    background-color: #3f4b5b;
    border-radius: 4px;
  }
  .p-avatar.p-avatar-lg {
    width: 3rem;
    height: 3rem;
    font-size: 1.5rem;
  }
  .p-avatar.p-avatar-lg .p-avatar-icon {
    font-size: 1.5rem;
  }
  .p-avatar.p-avatar-xl {
    width: 4rem;
    height: 4rem;
    font-size: 2rem;
  }
  .p-avatar.p-avatar-xl .p-avatar-icon {
    font-size: 2rem;
  }

  .p-avatar-circle {
    border-radius: 50%;
  }

  .p-avatar-group .p-avatar {
    border: 2px solid #2a323d;
  }

  .p-chip {
    background-color: #3f4b5b;
    color: rgba(255, 255, 255, 0.87);
    border-radius: 16px;
    padding: 0 0.75rem;
  }
  .p-chip .p-chip-text {
    line-height: 1.5;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
  }
  .p-chip .p-chip-icon {
    margin-right: 0.5rem;
  }
  .p-chip img {
    width: 2rem;
    height: 2rem;
    margin-left: -0.75rem;
    margin-right: 0.5rem;
  }
  .p-chip .p-chip-remove-icon {
    border-radius: 4px;
    transition: color 0.15s, box-shadow 0.15s;
    margin-left: 0.5rem;
  }
  .p-chip .p-chip-remove-icon:focus-visible {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 1px #e3f3fe;
  }
  .p-chip .p-chip-remove-icon:focus {
    outline: 0 none;
  }

  .p-scrolltop {
    width: 3rem;
    height: 3rem;
    border-radius: 4px;
    box-shadow: none;
    transition: color 0.15s, box-shadow 0.15s;
  }
  .p-scrolltop.p-link {
    background: #8dd0ff;
  }
  .p-scrolltop.p-link:hover {
    background: #56bdff;
  }
  .p-scrolltop .p-scrolltop-icon {
    font-size: 1.5rem;
    color: #151515;
  }
  .p-scrolltop .p-scrolltop-icon.p-icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  .p-skeleton {
    background-color: rgba(255, 255, 255, 0.06);
    border-radius: 4px;
  }
  .p-skeleton:after {
    background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0));
  }

  .p-tag {
    background: #8dd0ff;
    color: #151515;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.25rem 0.4rem;
    border-radius: 4px;
  }
  .p-tag.p-tag-success {
    background-color: #9fdaa8;
    color: #151515;
  }
  .p-tag.p-tag-info {
    background-color: #7fd8e6;
    color: #151515;
  }
  .p-tag.p-tag-warning {
    background-color: #ffe082;
    color: #151515;
  }
  .p-tag.p-tag-danger {
    background-color: #f19ea6;
    color: #151515;
  }
  .p-tag .p-tag-icon {
    margin-right: 0.25rem;
    font-size: 0.75rem;
  }
  .p-tag .p-tag-icon.p-icon {
    width: 0.75rem;
    height: 0.75rem;
  }

  .p-inplace .p-inplace-display {
    padding: 0.5rem 0.75rem;
    border-radius: 4px;
    transition: background-color 0.15s, border-color 0.15s, box-shadow 0.15s;
  }
  .p-inplace .p-inplace-display:not(.p-disabled):hover {
    background: rgba(255, 255, 255, 0.04);
    color: rgba(255, 255, 255, 0.87);
  }
  .p-inplace .p-inplace-display:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 1px #e3f3fe;
  }

  .p-progressbar {
    border: 0 none;
    height: 1.5rem;
    background: #3f4b5b;
    border-radius: 4px;
  }
  .p-progressbar .p-progressbar-value {
    border: 0 none;
    margin: 0;
    background: #8dd0ff;
  }
  .p-progressbar .p-progressbar-label {
    color: #151515;
    line-height: 1.5rem;
  }

  .p-terminal {
    background: #2a323d;
    color: rgba(255, 255, 255, 0.87);
    border: 1px solid #3f4b5b;
    padding: 1.25rem;
  }
  .p-terminal .p-terminal-input {
    font-family: var(--font-family);
    font-feature-settings: var(--font-feature-settings, normal);
    font-size: 1rem;
  }

  .p-badge {
    background: #8dd0ff;
    color: #151515;
    font-size: 0.75rem;
    font-weight: 700;
    min-width: 1.5rem;
    height: 1.5rem;
    line-height: 1.5rem;
  }
  .p-badge.p-badge-secondary {
    background-color: #6c757d;
    color: #ffffff;
  }
  .p-badge.p-badge-success {
    background-color: #9fdaa8;
    color: #151515;
  }
  .p-badge.p-badge-info {
    background-color: #7fd8e6;
    color: #151515;
  }
  .p-badge.p-badge-warning {
    background-color: #ffe082;
    color: #151515;
  }
  .p-badge.p-badge-danger {
    background-color: #f19ea6;
    color: #151515;
  }
  .p-badge.p-badge-lg {
    font-size: 1.125rem;
    min-width: 2.25rem;
    height: 2.25rem;
    line-height: 2.25rem;
  }
  .p-badge.p-badge-xl {
    font-size: 1.5rem;
    min-width: 3rem;
    height: 3rem;
    line-height: 3rem;
  }

  .p-tag {
    background: #8dd0ff;
    color: #151515;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.25rem 0.4rem;
    border-radius: 4px;
  }
  .p-tag.p-tag-success {
    background-color: #9fdaa8;
    color: #151515;
  }
  .p-tag.p-tag-info {
    background-color: #7fd8e6;
    color: #151515;
  }
  .p-tag.p-tag-warning {
    background-color: #ffe082;
    color: #151515;
  }
  .p-tag.p-tag-danger {
    background-color: #f19ea6;
    color: #151515;
  }
}
/* Vendor extensions to the designer enhanced bootstrap compatibility */
@layer primereact {
  .p-breadcrumb .p-breadcrumb-chevron {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  .p-breadcrumb .p-breadcrumb-chevron:before {
    content: "/";
  }
}
/* Customizations to the designer theme should be defined here */
`;function ay(n){return Cn.jsx("style",{children:oy})}function ly(n){return Cn.jsx("style",{children:iy})}class uy extends ee.Component{constructor(e){super(e);let t="dark";window.matchMedia&&(t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),this.state={theme:t}}componentDidMount(){window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",({matches:e})=>{e?this.setState({theme:"dark"}):this.setState({theme:"light"})})}render(){return Cn.jsxs(Cn.Fragment,{children:[this.state.theme=="light"&&Cn.jsx(ay,{}),this.state.theme=="dark"&&Cn.jsx(ly,{}),this.props.children]})}}function py(){return Cn.jsx(f5,{children:Cn.jsx(uy,{children:Cn.jsx(ry,{})})})}Du.createRoot(document.getElementById("root")).render(Cn.jsx(ee.StrictMode,{children:Cn.jsx(py,{})}));
