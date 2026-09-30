(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var t={},n=[],r=()=>{},i=()=>!1,a=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),o=e=>e.startsWith(`onUpdate:`),s=Object.assign,c=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},l=Object.prototype.hasOwnProperty,u=(e,t)=>l.call(e,t),d=Array.isArray,f=e=>x(e)===`[object Map]`,p=e=>x(e)===`[object Set]`,m=e=>x(e)===`[object Date]`,h=e=>typeof e==`function`,g=e=>typeof e==`string`,_=e=>typeof e==`symbol`,v=e=>typeof e==`object`&&!!e,y=e=>(v(e)||h(e))&&h(e.then)&&h(e.catch),b=Object.prototype.toString,x=e=>b.call(e),S=e=>x(e).slice(8,-1),C=e=>x(e)===`[object Object]`,w=e=>g(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,T=e(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),ee=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},te=/-\w/g,E=ee(e=>e.replace(te,e=>e.slice(1).toUpperCase())),ne=/\B([A-Z])/g,D=ee(e=>e.replace(ne,`-$1`).toLowerCase()),re=ee(e=>e.charAt(0).toUpperCase()+e.slice(1)),ie=ee(e=>e?`on${re(e)}`:``),O=(e,t)=>!Object.is(e,t),ae=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},k=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},oe=e=>{let t=parseFloat(e);return isNaN(t)?e:t},se,ce=()=>se||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function le(e){if(d(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=g(r)?pe(r):le(r);if(i)for(let e in i)t[e]=i[e]}return t}if(g(e)||v(e))return e}var ue=/;(?![^(]*\))/g,de=/:([^]+)/,fe=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function pe(e){let t={};return e.replace(fe,e=>e.startsWith(`/*`)?``:e).split(ue).forEach(e=>{if(e){let n=e.split(de);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function A(e){let t=``;if(g(e))t=e;else if(d(e))for(let n=0;n<e.length;n++){let r=A(e[n]);r&&(t+=r+` `)}else if(v(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var me=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,he=e(me);me+``;function ge(e){return!!e||e===``}function _e(e,t,n){if(e.length!==t.length)return!1;let r=!0;for(let i=0;r&&i<e.length;i++)r=xe(e[i],t[i],n);return r}function ve(e,t,n){if(e.size!==t.size)return!1;let r=Array.from(t),i=new Uint8Array(r.length);for(let t of e){let e=-1;for(let a=0;a<r.length;a++)if(!i[a]&&xe(t,r[a],n)){e=a;break}if(e<0)return!1;i[e]=1}return!0}function ye(e,t,n){let r=f(e),i=f(t);if(r||i||(r=p(e),i=p(t),r||i))return r&&i?ve(e,t,n):!1;if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let r in e){let i=e.hasOwnProperty(r),a=t.hasOwnProperty(r);if(i&&!a||!i&&a||!xe(e[r],t[r],n))return!1}return String(e)===String(t)}function be(e,t,n,r){n||=[new Map,new Map];let[i,a]=n;if(i.has(e)||a.has(t))return i.get(e)===t&&a.get(t)===e;i.set(e,t),a.set(t,e);let o=r(e,t,n);return i.delete(e),a.delete(t),o}function xe(e,t,n){if(e===t)return!0;let r=m(e),i=m(t);return r||i?r&&i?e.getTime()===t.getTime():!1:(r=_(e),i=_(t),r||i?e===t:(r=d(e),i=d(t),r||i?r&&i?be(e,t,n,_e):!1:(r=v(e),i=v(t),r||i?!r||!i?!1:be(e,t,n,ye):String(e)===String(t))))}var Se=e=>!!(e&&e.__v_isRef===!0),Ce=e=>g(e)?e:e==null?``:d(e)||v(e)&&(e.toString===b||!h(e.toString))?Se(e)?Ce(e.value):JSON.stringify(e,we,2):String(e),we=(e,t)=>Se(t)?we(e,t.value):f(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[Te(t,r)+` =>`]=n,e),{})}:p(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Te(e))}:_(t)?Te(t):v(t)&&!d(t)&&!C(t)?String(t):t,Te=(e,t=``)=>_(e)?`Symbol(${e.description??t})`:e,j,Ee=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&j&&(j.active?(this.parent=j,this.index=(j.scopes||(j.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}let n=this.effects.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}}run(e){if(this._active){let t=j;try{return j=this,e()}finally{j=t}}}on(){++this._on===1&&(this.prevScope=j,j=this)}off(){if(this._on>0&&--this._on===0){if(j===this)j=this.prevScope;else{let e=j;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){let e=this.scopes.slice();for(t=0,n=e.length;t<n;t++)e[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function De(){return j}var M,Oe=new WeakSet,ke=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,j&&(j.active?j.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Oe.has(this)&&(Oe.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ne(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ke(this),Ie(this);let e=M,t=He;M=this,He=!0;try{return this.fn()}finally{Le(this),M=e,He=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Be(e);this.deps=this.depsTail=void 0,Ke(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Oe.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Re(this)&&this.run()}get dirty(){return Re(this)}},Ae=0,je,Me;function Ne(e,t=!1){if(e.flags|=8,t){e.next=Me,Me=e;return}e.next=je,je=e}function Pe(){Ae++}function Fe(){if(--Ae>0)return;if(Me){let e=Me;for(Me=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;je;){let t=je;for(je=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function Ie(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Le(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),Be(r),Ve(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function Re(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(ze(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function ze(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===qe)||(e.globalVersion=qe,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Re(e))))return;e.flags|=2;let t=e.dep,n=M,r=He;M=e,He=!0;try{Ie(e);let n=e.fn(e._value);(t.version===0||O(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{M=n,He=r,Le(e),e.flags&=-3}}function Be(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)Be(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ve(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var He=!0,Ue=[];function We(){Ue.push(He),He=!1}function Ge(){let e=Ue.pop();He=e===void 0||e}function Ke(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=M;M=void 0;try{t()}finally{M=e}}}var qe=0,Je=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},Ye=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!M||!He||M===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==M)t=this.activeLink=new Je(M,this),M.deps?(t.prevDep=M.depsTail,M.depsTail.nextDep=t,M.depsTail=t):M.deps=M.depsTail=t,Xe(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=M.depsTail,t.nextDep=void 0,M.depsTail.nextDep=t,M.depsTail=t,M.deps===t&&(M.deps=e)}return t}trigger(e){this.version++,qe++,this.notify(e)}notify(e){Pe();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Fe()}}};function Xe(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)Xe(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var Ze=new WeakMap,Qe=Symbol(``),$e=Symbol(``),et=Symbol(``);function N(e,t,n){if(He&&M){let t=Ze.get(e);t||Ze.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new Ye),r.map=t,r.key=n),r.track()}}function tt(e,t,n,r,i,a){let o=Ze.get(e);if(!o){qe++;return}let s=e=>{e&&e.trigger()};if(Pe(),t===`clear`)o.forEach(s);else{let i=d(e),a=i&&w(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===et||!_(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(et)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(Qe)),f(e)&&s(o.get($e)));break;case`delete`:i||(s(o.get(Qe)),f(e)&&s(o.get($e)));break;case`set`:f(e)&&s(o.get(Qe))}}Fe()}function nt(e){let t=F(e);return t===e||(N(t,`iterate`,et),P(e))?t:Bt(e)?zt(e)?t.map(e=>Ut(I(e))):t.map(Ut):t.map(I)}function rt(e){return N(e=F(e),`iterate`,et),e}function it(e,t){return Bt(e)?Ut(zt(e)?I(t):t):I(t)}var at={__proto__:null,[Symbol.iterator](){return ot(this,Symbol.iterator,e=>it(this,e))},concat(...e){return nt(this).concat(...e.map(e=>d(e)?nt(e):e))},entries(){return ot(this,`entries`,e=>(e[1]=it(this,e[1]),e))},every(e,t){return ct(this,`every`,e,t,void 0,arguments)},filter(e,t){return ct(this,`filter`,e,t,e=>e.map(e=>it(this,e)),arguments)},find(e,t){return ct(this,`find`,e,t,e=>it(this,e),arguments)},findIndex(e,t){return ct(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return ct(this,`findLast`,e,t,e=>it(this,e),arguments)},findLastIndex(e,t){return ct(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return ct(this,`forEach`,e,t,void 0,arguments)},includes(...e){return ut(this,`includes`,e)},indexOf(...e){return ut(this,`indexOf`,e)},join(e){return nt(this).join(e)},lastIndexOf(...e){return ut(this,`lastIndexOf`,e)},map(e,t){return ct(this,`map`,e,t,void 0,arguments)},pop(){return dt(this,`pop`)},push(...e){return dt(this,`push`,e)},reduce(e,...t){return lt(this,`reduce`,e,t)},reduceRight(e,...t){return lt(this,`reduceRight`,e,t)},shift(){return dt(this,`shift`)},some(e,t){return ct(this,`some`,e,t,void 0,arguments)},splice(...e){return dt(this,`splice`,e)},toReversed(){return nt(this).toReversed()},toSorted(e){return nt(this).toSorted(e)},toSpliced(...e){return nt(this).toSpliced(...e)},unshift(...e){return dt(this,`unshift`,e)},values(){return ot(this,`values`,e=>it(this,e))}};function ot(e,t,n){let r=rt(e),i=r[t]();return r!==e&&!P(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var st=Array.prototype;function ct(e,t,n,r,i,a){let o=rt(e),s=o!==e&&!P(e),c=o[t];if(c!==st[t]){let t=c.apply(e,a);return s?I(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,it(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function lt(e,t,n,r){let i=rt(e),a=i!==e&&!P(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=it(e,t)),n.call(this,t,it(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?it(e,c):c}function ut(e,t,n){let r=F(e);N(r,`iterate`,et);let i=r[t](...n);return(i===-1||i===!1)&&Vt(n[0])?(n[0]=F(n[0]),r[t](...n)):i}function dt(e,t,n=[]){We(),Pe();let r=F(e)[t].apply(e,n);return Fe(),Ge(),r}var ft=e(`__proto__,__v_isRef,__isVue`),pt=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(_));function mt(e){_(e)||(e=String(e));let t=F(this);return N(t,`has`,e),t.hasOwnProperty(e)}var ht=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?Nt:Mt:i?jt:At).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=d(e);if(!r){let e;if(a&&(e=at[t]))return e;if(t===`hasOwnProperty`)return mt}let o=Reflect.get(e,t,L(e)?e:n);if((_(t)?pt.has(t):ft(t))||(r||N(e,`get`,t),i))return o;if(L(o)){let e=a&&w(t)?o:o.value;return r&&v(e)?Lt(e):e}return v(o)?r?Lt(o):Ft(o):o}},gt=class extends ht{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=d(e)&&w(t);if(!this._isShallow){let e=Bt(i);if(!P(n)&&!Bt(n)&&(i=F(i),n=F(n)),!a&&L(i)&&!L(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:u(e,t),s=Reflect.set(e,t,n,L(e)?e:r);return e===F(r)&&s&&(o?O(n,i)&&tt(e,`set`,t,n,i):tt(e,`add`,t,n)),s}deleteProperty(e,t){let n=u(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&tt(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!_(t)||!pt.has(t))&&N(e,`has`,t),n}ownKeys(e){return N(e,`iterate`,d(e)?`length`:Qe),Reflect.ownKeys(e)}},_t=class extends ht{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},vt=new gt,yt=new _t,bt=new gt(!0),xt=e=>e,St=e=>Reflect.getPrototypeOf(e);function Ct(e,t,n){return function(...r){let i=this.__v_raw,a=F(i),o=f(a),c=e===`entries`||e===Symbol.iterator&&o,l=e===`keys`&&o,u=i[e](...r),d=n?xt:t?Ut:I;return!t&&N(a,`iterate`,l?$e:Qe),s(Object.create(u),{next(){let{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[d(e[0]),d(e[1])]:d(e),done:t}}})}}function wt(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function Tt(e,t){let n={get(n){let r=this.__v_raw,i=F(r),a=F(n);e||(O(n,a)&&N(i,`get`,n),N(i,`get`,a));let{has:o}=St(i),s=t?xt:e?Ut:I;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&N(F(t),`iterate`,Qe),t.size},has(t){let n=this.__v_raw,r=F(n),i=F(t);return e||(O(t,i)&&N(r,`has`,t),N(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=F(a),s=t?xt:e?Ut:I;return!e&&N(o,`iterate`,Qe),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return s(n,e?{add:wt(`add`),set:wt(`set`),delete:wt(`delete`),clear:wt(`clear`)}:{add(e){let n=F(this),r=St(n),i=F(e),a=!t&&!P(e)&&!Bt(e)?i:e;return r.has.call(n,a)||O(e,a)&&r.has.call(n,e)||O(i,a)&&r.has.call(n,i)||(n.add(a),tt(n,`add`,a,a)),this},set(e,n){!t&&!P(n)&&!Bt(n)&&(n=F(n));let r=F(this),{has:i,get:a}=St(r),o=i.call(r,e);o||=(e=F(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?O(n,s)&&tt(r,`set`,e,n,s):tt(r,`add`,e,n),this},delete(e){let t=F(this),{has:n,get:r}=St(t),i=n.call(t,e);i||=(e=F(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&tt(t,`delete`,e,void 0,a),o},clear(){let e=F(this),t=e.size!==0,n=e.clear();return t&&tt(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=Ct(r,e,t)}),n}function Et(e,t){let n=Tt(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(u(n,r)&&r in t?n:t,r,i)}var Dt={get:Et(!1,!1)},Ot={get:Et(!1,!0)},kt={get:Et(!0,!1)},At=new WeakMap,jt=new WeakMap,Mt=new WeakMap,Nt=new WeakMap;function Pt(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function Ft(e){return Bt(e)?e:Rt(e,!1,vt,Dt,At)}function It(e){return Rt(e,!1,bt,Ot,jt)}function Lt(e){return Rt(e,!0,yt,kt,Mt)}function Rt(e,t,n,r,i){if(!v(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;let a=i.get(e);if(a)return a;let o=Pt(S(e));if(o===0)return e;let s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function zt(e){return Bt(e)?zt(e.__v_raw):!!(e&&e.__v_isReactive)}function Bt(e){return!!(e&&e.__v_isReadonly)}function P(e){return!!(e&&e.__v_isShallow)}function Vt(e){return e?!!e.__v_raw:!1}function F(e){let t=e&&e.__v_raw;return t?F(t):e}function Ht(e){return!u(e,`__v_skip`)&&Object.isExtensible(e)&&k(e,`__v_skip`,!0),e}var I=e=>v(e)?Ft(e):e,Ut=e=>v(e)?Lt(e):e;function L(e){return e?e.__v_isRef===!0:!1}function Wt(e){return Kt(e,!1)}function Gt(e){return Kt(e,!0)}function Kt(e,t){return L(e)?e:new qt(e,t)}var qt=class{constructor(e,t){this.dep=new Ye,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:F(e),this._value=t?e:I(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||P(e)||Bt(e);e=n?e:F(e),O(e,t)&&(this._rawValue=e,this._value=n?e:I(e),this.dep.trigger())}};function Jt(e){return L(e)?e.value:e}var Yt={get:(e,t,n)=>t===`__v_raw`?e:Jt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return L(i)&&!L(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Xt(e){return zt(e)?e:new Proxy(e,Yt)}var Zt=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Ye(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=qe-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&M!==this)return Ne(this,!0),!0}get value(){let e=this.dep.track();return ze(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function Qt(e,t,n=!1){let r,i;return h(e)?r=e:(r=e.get,i=e.set),new Zt(r,i,n)}var $t={},en=new WeakMap,tn=void 0;function nn(e,t=!1,n=tn){if(n){let t=en.get(n);t||en.set(n,t=[]),t.push(e)}}function rn(e,n,i=t){let{immediate:a,deep:o,once:s,scheduler:l,augmentJob:u,call:f}=i,p=e=>o?e:P(e)||o===!1||o===0?an(e,1):an(e),m,g,_,v,y=!1,b=!1;if(L(e)?(g=()=>e.value,y=P(e)):zt(e)?(g=()=>p(e),y=!0):d(e)?(b=!0,y=e.some(e=>zt(e)||P(e)),g=()=>e.map(e=>{if(L(e))return e.value;if(zt(e))return p(e);if(h(e))return f?f(e,2):e()})):g=h(e)?n?f?()=>f(e,2):e:()=>{if(_){We();try{_()}finally{Ge()}}let t=tn;tn=m;try{return f?f(e,3,[v]):e(v)}finally{tn=t}}:r,n&&o){let e=g,t=o===!0?1/0:o;g=()=>an(e(),t)}let x=De(),S=()=>{m.stop(),x&&x.active&&c(x.effects,m)};if(s&&n){let e=n;n=(...t)=>{let n=e(...t);return S(),n}}let C=b?Array(e.length).fill($t):$t,w=e=>{if(m.flags&1&&(m.dirty||e)){if(n){let t=m.run();if(e||o||y||(b?t.some((e,t)=>O(e,C[t])):O(t,C))){_&&_();let e=tn;tn=m;try{let e=[t,C===$t?void 0:b&&C[0]===$t?[]:C,v];C=t,f?f(n,3,e):n(...e)}finally{tn=e}}}else m.run()}};return u&&u(w),m=new ke(g),m.scheduler=l?()=>l(w,!1):w,v=e=>nn(e,!1,m),_=m.onStop=()=>{let e=en.get(m);if(e){if(f)f(e,4);else for(let t of e)t();en.delete(m)}},n?a?w(!0):C=m.run():l?l(w.bind(null,!0),!0):m.run(),S.pause=m.pause.bind(m),S.resume=m.resume.bind(m),S.stop=S,S}function an(e,t=1/0,n){if(t<=0||!v(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,L(e))an(e.value,t,n);else if(d(e))for(let r=0;r<e.length;r++)an(e[r],t,n);else if(p(e)||f(e))e.forEach(e=>{an(e,t,n)});else if(C(e)){for(let r in e)an(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&an(e[r],t,n)}return e}function on(e,t,n,r){try{return r?e(...r):e()}catch(e){cn(e,t,n)}}function sn(e,t,n,r){if(h(e)){let i=on(e,t,n,r);return i&&y(i)&&i.catch(e=>{cn(e,t,n)}),i}if(d(e)){let i=[];for(let a=0;a<e.length;a++)i.push(sn(e[a],t,n,r));return i}}function cn(e,n,r,i=!0){let a=n?n.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=n&&n.appContext.config||t;if(n){let t=n.parent,i=n.proxy,a=`https://vuejs.org/error-reference/#runtime-${r}`;for(;t;){let n=t.ec;if(n){for(let t=0;t<n.length;t++)if(n[t](e,i,a)===!1)return}t=t.parent}if(o){We(),on(o,null,10,[e,i,a]),Ge();return}}ln(e,r,a,i,s)}function ln(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var R=[],un=-1,dn=[],fn=null,pn=0,mn=Promise.resolve(),hn=null;function gn(e){let t=hn||mn;return e?t.then(this?e.bind(this):e):t}function _n(e){let t=un+1,n=R.length;for(;t<n;){let r=t+n>>>1,i=R[r],a=Cn(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function vn(e){if(!(e.flags&1)){let t=Cn(e),n=R[R.length-1];!n||!(e.flags&2)&&t>=Cn(n)?R.push(e):R.splice(_n(t),0,e),e.flags|=1,yn()}}function yn(){hn||=mn.then(wn)}function bn(e){if(!d(e))fn&&e.id===-1?fn.splice(pn+1,0,e):e.flags&1||(dn.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)dn.push(e[t]);yn()}function xn(e,t,n=un+1){for(;n<R.length;n++){let t=R[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;R.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function Sn(e){if(dn.length){let e=[...new Set(dn)].sort((e,t)=>Cn(e)-Cn(t));if(dn.length=0,fn){for(let t=0;t<e.length;t++)fn.push(e[t]);return}for(fn=e,pn=0;pn<fn.length;pn++){let e=fn[pn];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}fn=null,pn=0}}var Cn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function wn(e){try{for(un=0;un<R.length;un++){let e=R[un];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),on(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;un<R.length;un++){let e=R[un];e&&(e.flags&=-2)}un=-1,R.length=0,Sn(e),hn=null,(R.length||dn.length)&&wn(e)}}var z=null,Tn=null;function En(e){let t=z;return z=e,Tn=e&&e.type.__scopeId||null,t}function Dn(e,t=z,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&Ri(-1);let i=En(t),a=Pi.length,o;try{o=e(...n)}finally{for(let e=Pi.length;e>a;e--)Ii();En(i),r._d&&Ri(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function On(e,n){if(z===null)return e;let r=_a(z),i=e.dirs||=[];for(let e=0;e<n.length;e++){let[a,o,s,c=t]=n[e];a&&(h(a)&&(a={mounted:a,updated:a}),a.deep&&an(o),i.push({dir:a,instance:r,value:o,oldValue:void 0,arg:s,modifiers:c}))}return e}function kn(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(We(),sn(c,n,8,[e.el,s,e,t]),Ge())}}function An(e,t){if(K){let n=K.provides,r=K.parent&&K.parent.provides;r===n&&(n=K.provides=Object.create(r)),n[e]=t}}function jn(e,t,n=!1){let r=ia();if(r||Hr){let i=Hr?Hr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&h(t)?t.call(r&&r.proxy):t}}var Mn=Symbol.for(`v-scx`),Nn=()=>jn(Mn);function Pn(e,t,n){return Fn(e,t,n)}function Fn(e,n,i=t){let{immediate:a,deep:o,flush:c,once:l}=i,u=s({},i),d=n&&a||!n&&c!==`post`,f;if(ua){if(c===`sync`){let e=Nn();f=e.__watcherHandles||=[]}else if(!d){let e=()=>{};return e.stop=r,e.resume=r,e.pause=r,e}}let p=K;u.call=(e,t,n)=>sn(e,p,t,n);let m=!1;c===`post`?u.scheduler=e=>{V(e,p&&p.suspense)}:c!==`sync`&&(m=!0,u.scheduler=(e,t)=>{t?e():vn(e)}),u.augmentJob=e=>{n&&(e.flags|=4),m&&(e.flags|=2,p&&(e.id=p.uid,e.i=p))};let h=rn(e,n,u);return ua&&(f?f.push(h):d&&h()),h}function In(e,t,n){let r=this.proxy,i=g(e)?e.includes(`.`)?Ln(r,e):()=>r[e]:e.bind(r,r),a;h(t)?a=t:(a=t.handler,n=t);let o=sa(this),s=Fn(i,a.bind(r),n);return o(),s}function Ln(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var Rn=Symbol(`_vte`),zn=e=>e.__isTeleport,Bn=Symbol(`_leaveCb`);function Vn(e){let t=e[0];if(e.length>1){for(let n of e)if(n.type!==Mi){t=n;break}}return t}function Hn(e){if(!Zn(e))return zn(e.type)&&e.children?Vn(e.children):e;if(e.component)return e.component.subTree;let{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&h(n.default))return n.default()}}function Un(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;let n=e.component.subTree;Un(zn(n.type)&&Hn(n)||n,t)}else e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Wn(e,t){return h(e)?s({name:e.name},t,{setup:e}):e}function Gn(e){e.ids=[e.ids[0]+e.ids[2]+++`-`,0,0]}function Kn(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var qn=new WeakMap;function Jn(e,n,r,a,o=!1){if(d(e)){e.forEach((e,t)=>Jn(e,n&&(d(n)?n[t]:n),r,a,o));return}if(Xn(a)&&!o){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&Jn(e,n,r,a.component.subTree);return}let s=a.shapeFlag&4?_a(a.component):a.el,l=o?null:s,{i:f,r:p}=e,m=n&&n.r,_=f.refs===t?f.refs={}:f.refs,v=f.setupState,y=F(v),b=v===t?i:e=>!Kn(_,e)&&u(y,e),x=(e,t)=>!(t&&Kn(_,t));if(m!=null&&m!==p){if(Yn(n),g(m))_[m]=null,b(m)&&(v[m]=null);else if(L(m)){let e=n;x(m,e.k)&&(m.value=null),e.k&&(_[e.k]=null)}}if(h(p))on(p,f,12,[l,_]);else{let t=g(p),n=L(p);if(t||n){let i=()=>{if(e.f){let n=t?b(p)?v[p]:_[p]:x(p)||!e.k?p.value:_[e.k];if(o)d(n)&&c(n,s);else if(d(n))n.includes(s)||n.push(s);else if(t)_[p]=[s],b(p)&&(v[p]=_[p]);else{let t=[s];x(p,e.k)&&(p.value=t),e.k&&(_[e.k]=t)}}else t?(_[p]=l,b(p)&&(v[p]=l)):n&&(x(p,e.k)&&(p.value=l),e.k&&(_[e.k]=l))};if(l){let t=()=>{i(),qn.delete(e)};t.id=-1,qn.set(e,t),V(t,r)}else Yn(e),i()}}}function Yn(e){let t=qn.get(e);t&&(t.flags|=8,qn.delete(e))}ce().requestIdleCallback,ce().cancelIdleCallback;var Xn=e=>!!e.type.__asyncLoader,Zn=e=>e.type.__isKeepAlive;function Qn(e,t){er(e,`a`,t)}function $n(e,t){er(e,`da`,t)}function er(e,t,n=K){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(nr(t,r,n),n){let e=n.parent;for(;e&&e.parent;)Zn(e.parent.vnode)&&tr(r,t,n,e),e=e.parent}}function tr(e,t,n,r){let i=nr(t,e,r,!0);lr(()=>{c(r[t],i)},n)}function nr(e,t,n=K,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{We();let i=sa(n),a=sn(t,n,e,r);return i(),Ge(),a};return r?i.unshift(a):i.push(a),a}}var rr=e=>(t,n=K)=>{(!ua||e===`sp`)&&nr(e,(...e)=>t(...e),n)},ir=rr(`bm`),ar=rr(`m`),or=rr(`bu`),sr=rr(`u`),cr=rr(`bum`),lr=rr(`um`),ur=rr(`sp`),dr=rr(`rtg`),fr=rr(`rtc`);function pr(e,t=K){nr(`ec`,e,t)}var mr=`components`;function hr(e,t){return _r(mr,e,!0,t)||e}var gr=Symbol.for(`v-ndc`);function _r(e,t,n=!0,r=!1){let i=z||K;if(i){let n=i.type;if(e===mr){let e=va(n,!1);if(e&&(e===t||e===E(t)||e===re(E(t))))return n}let a=vr(i[e]||n[e],t)||vr(i.appContext[e],t);return!a&&r?n:a}}function vr(e,t){return e&&(e[t]||e[E(t)]||e[re(E(t))])}function yr(e,t,n,r){let i,a=n&&n[r],o=d(e);if(o||g(e)){let n=o&&zt(e),r=!1,s=!1;n&&(r=!P(e),s=Bt(e),e=rt(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?Ut(I(e[n])):I(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if(v(e)){if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}}else i=[];return n&&(n[r]=i),i}var br=e=>e?la(e)?_a(e):br(e.parent):null,xr=s(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>br(e.parent),$root:e=>br(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ar(e),$forceUpdate:e=>e.f||=()=>{vn(e.update)},$nextTick:e=>e.n||=gn.bind(e.proxy),$watch:e=>In.bind(e)}),Sr=(e,n)=>e!==t&&!e.__isScriptSetup&&u(e,n),Cr={get({_:e},n){if(n===`__v_skip`)return!0;let{ctx:r,setupState:i,data:a,props:o,accessCache:s,type:c,appContext:l}=e;if(n[0]!==`$`){let e=s[n];if(e!==void 0)switch(e){case 1:return i[n];case 2:return a[n];case 4:return r[n];case 3:return o[n]}else if(Sr(i,n))return s[n]=1,i[n];else if(a!==t&&u(a,n))return s[n]=2,a[n];else if(u(o,n))return s[n]=3,o[n];else if(r!==t&&u(r,n))return s[n]=4,r[n];else Tr&&(s[n]=0)}let d=xr[n],f,p;if(d)return n===`$attrs`&&N(e.attrs,`get`,``),d(e);if((f=c.__cssModules)&&(f=f[n]))return f;if(r!==t&&u(r,n))return s[n]=4,r[n];if(p=l.config.globalProperties,u(p,n))return p[n]},set({_:e},n,r){let{data:i,setupState:a,ctx:o}=e;return Sr(a,n)?(a[n]=r,!0):i!==t&&u(i,n)?(i[n]=r,!0):u(e.props,n)||n[0]===`$`&&n.slice(1)in e?!1:(o[n]=r,!0)},has({_:{data:e,setupState:n,accessCache:r,ctx:i,appContext:a,props:o,type:s}},c){let l;return!!(r[c]||e!==t&&c[0]!==`$`&&u(e,c)||Sr(n,c)||u(o,c)||u(i,c)||u(xr,c)||u(a.config.globalProperties,c)||(l=s.__cssModules)&&l[c])},defineProperty(e,t,n){return n.get==null?u(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function wr(e){return d(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}var Tr=!0;function Er(e){let t=Ar(e),n=e.proxy,i=e.ctx;Tr=!1,t.beforeCreate&&Or(t.beforeCreate,e,`bc`);let{data:a,computed:o,methods:s,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:g,updated:_,activated:y,deactivated:b,beforeDestroy:x,beforeUnmount:S,destroyed:C,unmounted:w,render:T,renderTracked:ee,renderTriggered:te,errorCaptured:E,serverPrefetch:ne,expose:D,inheritAttrs:re,components:ie,directives:O,filters:ae}=t;if(u&&Dr(u,i,null),s)for(let e in s){let t=s[e];h(t)&&(i[e]=t.bind(n))}if(a){let t=a.call(n,n);v(t)&&(e.data=Ft(t))}if(Tr=!0,o)for(let e in o){let t=o[e],a=q({get:h(t)?t.bind(n,n):h(t.get)?t.get.bind(n,n):r,set:!h(t)&&h(t.set)?t.set.bind(n):r});Object.defineProperty(i,e,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(let e in c)kr(c[e],i,n,e);if(l){let e=h(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{An(t,e[t])})}f&&Or(f,e,`c`);function k(e,t){d(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(k(ir,p),k(ar,m),k(or,g),k(sr,_),k(Qn,y),k($n,b),k(pr,E),k(fr,ee),k(dr,te),k(cr,S),k(lr,w),k(ur,ne),d(D)){if(D.length){let t=e.exposed||={};D.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={}}T&&e.render===r&&(e.render=T),re!=null&&(e.inheritAttrs=re),ie&&(e.components=ie),O&&(e.directives=O),ne&&Gn(e)}function Dr(e,t,n=r){d(e)&&(e=Fr(e));for(let n in e){let r=e[n],i;i=v(r)?`default`in r?jn(r.from||n,r.default,!0):jn(r.from||n):jn(r),L(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function Or(e,t,n){sn(d(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function kr(e,t,n,r){let i=r.includes(`.`)?Ln(n,r):()=>n[r];if(g(e)){let n=t[e];h(n)&&Pn(i,n)}else if(h(e))Pn(i,e.bind(n));else if(v(e)){if(d(e))e.forEach(e=>kr(e,t,n,r));else{let r=h(e.handler)?e.handler.bind(n):t[e.handler];h(r)&&Pn(i,r,e)}}}function Ar(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>jr(c,e,o,!0)),jr(c,t,o)),v(t)&&a.set(t,c),c}function jr(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&jr(e,a,n,!0),i&&i.forEach(t=>jr(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=Mr[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var Mr={data:Nr,props:Lr,emits:Lr,methods:Ir,computed:Ir,beforeCreate:B,created:B,beforeMount:B,mounted:B,beforeUpdate:B,updated:B,beforeDestroy:B,beforeUnmount:B,destroyed:B,unmounted:B,activated:B,deactivated:B,errorCaptured:B,serverPrefetch:B,components:Ir,directives:Ir,watch:Rr,provide:Nr,inject:Pr};function Nr(e,t){return t?e?function(){return s(h(e)?e.call(this,this):e,h(t)?t.call(this,this):t)}:t:e}function Pr(e,t){return Ir(Fr(e),Fr(t))}function Fr(e){if(d(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function B(e,t){return e?[...new Set([].concat(e,t))]:t}function Ir(e,t){return e?s(Object.create(null),e,t):t}function Lr(e,t){return e?d(e)&&d(t)?[...new Set([...e,...t])]:s(Object.create(null),wr(e),wr(t??{})):t}function Rr(e,t){if(!e)return t;if(!t)return e;let n=s(Object.create(null),e);for(let r in t)n[r]=B(e[r],t[r]);return n}function zr(){return{app:null,config:{isNativeTag:i,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var Br=0;function Vr(e,t){return function(n,r=null){h(n)||(n=s({},n)),r!=null&&!v(r)&&(r=null);let i=zr(),a=new WeakSet,o=[],c=!1,l=i.app={_uid:Br++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:xa,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&h(e.install)?(a.add(e),e.install(l,...t)):h(e)&&(a.add(e),e(l,...t))),l},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),l},component(e,t){return t?(i.components[e]=t,l):i.components[e]},directive(e,t){return t?(i.directives[e]=t,l):i.directives[e]},mount(a,o,s){if(!c){let u=l._ceVNode||G(n,r);return u.appContext=i,s===!0?s=`svg`:s===!1&&(s=void 0),o&&t?t(u,a):e(u,a,s),c=!0,l._container=a,a.__vue_app__=l,_a(u.component)}},onUnmount(e){o.push(e)},unmount(){c&&(sn(o,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return i.provides[e]=t,l},runWithContext(e){let t=Hr;Hr=l;try{return e()}finally{Hr=t}}};return l}}var Hr=null,Ur=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${E(t)}Modifiers`]||e[`${D(t)}Modifiers`];function Wr(e,n,...r){if(e.isUnmounted)return;let i=e.vnode.props||t,a=r,o=n.startsWith(`update:`),s=o&&Ur(i,n.slice(7));s&&(s.trim&&(a=r.map(e=>g(e)?e.trim():e)),s.number&&(a=a.map(oe)));let c,l=i[c=ie(n)]||i[c=ie(E(n))];!l&&o&&(l=i[c=ie(D(n))]),l&&sn(l,e,6,a);let u=i[c+`Once`];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,sn(u,e,6,a)}}var Gr=new WeakMap;function Kr(e,t,n=!1){let r=n?Gr:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},c=!1;if(!h(e)){let r=e=>{let n=Kr(e,t,!0);n&&(c=!0,s(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!c?(v(e)&&r.set(e,null),null):(d(a)?a.forEach(e=>o[e]=null):s(o,a),v(e)&&r.set(e,o),o)}function qr(e,t){return!e||!a(t)?!1:(t=t.slice(2),t=t===`Once`?t:t.replace(/Once$/,``),u(e,t[0].toLowerCase()+t.slice(1))||u(e,D(t))||u(e,t))}function Jr(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:s,attrs:c,emit:l,render:u,renderCache:d,props:f,data:p,setupState:m,ctx:h,inheritAttrs:g}=e,_=En(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=Xi(u.call(t,e,d,f,m,p,h)),y=c}else{let e=t;v=Xi(e.length>1?e(f,{attrs:c,slots:s,emit:l}):e(f,null)),y=t.props?c:Yr(c)}}catch(t){Pi.length=0,cn(t,e,1),v=G(Mi)}let b=v;if(y&&g!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(o)&&(y=Xr(y,a)),b=Ji(b,y,!1,!0))}return n.dirs&&(b=Ji(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&Un(zn(b.type)&&Hn(b)||b,n.transition),v=b,En(_),v}var Yr=e=>{let t;for(let n in e)(n===`class`||n===`style`||a(n))&&((t||={})[n]=e[n]);return t},Xr=(e,t)=>{let n={};for(let r in e)(!o(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Zr(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Qr(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if($r(o,r,n)&&!qr(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?!o||Qr(r,o,l):!!o;return!1}function Qr(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if($r(t,e,a)&&!qr(n,a))return!0}return!1}function $r(e,t,n){let r=e[n],i=t[n];return n===`style`&&v(r)&&v(i)?!xe(r,i):r!==i}function ei({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var ti={},ni=()=>Object.create(ti),ri=e=>Object.getPrototypeOf(e)===ti;function ii(e,t,n,r=!1){let i={},a=ni();e.propsDefaults=Object.create(null),oi(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);e.props=n?r?i:It(i):e.type.props?i:a,e.attrs=a}function ai(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=F(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(qr(e.emitsOptions,o))continue;let d=t[o];if(c){if(u(a,o))d!==a[o]&&(a[o]=d,l=!0);else{let t=E(o);i[t]=si(c,s,t,d,e,!1)}}else d!==a[o]&&(a[o]=d,l=!0)}}}else{oi(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!u(t,a)&&((r=D(a))===a||!u(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=si(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!u(t,e))&&(delete a[e],l=!0)}l&&tt(e.attrs,`set`,``)}function oi(e,n,r,i){let[a,o]=e.propsOptions,s=!1,c;if(n)for(let t in n){if(T(t))continue;let l=n[t],d;a&&u(a,d=E(t))?!o||!o.includes(d)?r[d]=l:(c||={})[d]=l:qr(e.emitsOptions,t)||(!(t in i)||l!==i[t])&&(i[t]=l,s=!0)}if(o){let n=F(r),i=c||t;for(let t=0;t<o.length;t++){let s=o[t];r[s]=si(a,n,s,i[s],e,!u(i,s))}}return s}function si(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=u(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&h(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=sa(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===D(n))&&(r=!0))}return r}var ci=new WeakMap;function li(e,r,i=!1){let a=i?ci:r.propsCache,o=a.get(e);if(o)return o;let c=e.props,l={},f=[],p=!1;if(!h(e)){let t=e=>{p=!0;let[t,n]=li(e,r,!0);s(l,t),n&&f.push(...n)};!i&&r.mixins.length&&r.mixins.forEach(t),e.extends&&t(e.extends),e.mixins&&e.mixins.forEach(t)}if(!c&&!p)return v(e)&&a.set(e,n),n;if(d(c))for(let e=0;e<c.length;e++){let n=E(c[e]);ui(n)&&(l[n]=t)}else if(c)for(let e in c){let t=E(e);if(ui(t)){let n=c[e],r=l[t]=d(n)||h(n)?{type:n}:s({},n),i=r.type,a=!1,o=!0;if(d(i))for(let e=0;e<i.length;++e){let t=i[e],n=h(t)&&t.name;if(n===`Boolean`){a=!0;break}n===`String`&&(o=!1)}else a=h(i)&&i.name===`Boolean`;r[0]=a,r[1]=o,(a||u(r,`default`))&&f.push(t)}}let m=[l,f];return v(e)&&a.set(e,m),m}function ui(e){return e[0]!==`$`&&!T(e)}var di=e=>e===`_`||e===`_ctx`||e===`$stable`,fi=e=>d(e)?e.map(Xi):[Xi(e)],pi=(e,t,n)=>{if(t._n)return t;let r=Dn((...e)=>fi(t(...e)),n);return r._c=!1,r},mi=(e,t,n)=>{let r=e._ctx;for(let n in e){if(di(n))continue;let i=e[n];if(h(i))t[n]=pi(n,i,r);else if(i!=null){let e=fi(i);t[n]=()=>e}}},hi=(e,t)=>{let n=fi(t);e.slots.default=()=>n},gi=(e,t,n)=>{for(let r in t)(n||!di(r))&&(e[r]=t[r])},_i=(e,t,n)=>{let r=e.slots=ni();if(e.vnode.shapeFlag&32){let e=t._;e?(gi(r,t,n),n&&k(r,`_`,e,!0)):mi(t,r)}else t&&hi(e,t)},vi=(e,n,r)=>{let{vnode:i,slots:a}=e,o=!0,s=t;if(i.shapeFlag&32){let e=n._;e?r&&e===1?o=!1:gi(a,n,r):(o=!n.$stable,mi(n,a)),s=n}else n&&(hi(e,n),s={default:1});if(o)for(let e in a)!di(e)&&s[e]==null&&delete a[e]},V=Ai;function yi(e){return bi(e)}function bi(e,i){let a=ce();a.__VUE__=!0;let{insert:o,remove:s,patchProp:c,createElement:l,createText:u,createComment:d,setText:f,setElementText:p,parentNode:m,nextSibling:h,setScopeId:g=r,insertStaticContent:_}=e,v=(e,t,r,i=null,a=null,o=null,s=void 0,c=null,l=!!t.dynamicChildren)=>{if(e===t)return;e&&!Ui(e,t)&&(i=ve(e),A(e,a,o,!0),e=null),t.patchFlag===-2&&(l=!1,t.dynamicChildren=null),t.dynamicChildren&&e&&e.dynamicChildren&&e.dynamicChildren.hasOnce&&(t.dynamicChildren===n&&(t.dynamicChildren=[]),t.dynamicChildren.hasOnce=!0);let{type:u,ref:d,shapeFlag:f}=t;switch(u){case ji:y(e,t,r,i);break;case Mi:b(e,t,r,i);break;case Ni:e??x(t,r,i,s);break;case H:ie(e,t,r,i,a,o,s,c,l);break;default:f&1?w(e,t,r,i,a,o,s,c,l):f&6?O(e,t,r,i,a,o,s,c,l):(f&64||f&128)&&u.process(e,t,r,i,a,o,s,c,l,xe)}d!=null&&a?Jn(d,e&&e.ref,o,t||e,!t):d==null&&e&&e.ref!=null&&Jn(e.ref,null,o,e,!0)},y=(e,t,n,r)=>{if(e==null)o(t.el=u(t.children),n,r);else{let n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},b=(e,t,n,r)=>{e==null?o(t.el=d(t.children||``),n,r):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,r)=>{let i;for(;e&&e!==t;)i=h(e),o(e,n,r),e=i;o(t,n,r)},C=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),s(e),e=n;s(t)},w=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)ee(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),ne(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},ee=(e,t,n,r,i,a,s,u)=>{let d,f,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(d=e.el=l(e.type,a,m&&m.is,m),h&8?p(d,e.children):h&16&&E(e.children,d,null,r,i,xi(e,a),s,u),_&&kn(e,null,r,`created`),te(d,e,e.scopeId,s,r),m){for(let e in m)e!==`value`&&!T(e)&&c(d,e,null,m[e],a,r);`value`in m&&c(d,`value`,null,m.value,a),(f=m.onVnodeBeforeMount)&&ea(f,r,e)}_&&kn(e,null,r,`beforeMount`);let v=Ci(i,g);v&&g.beforeEnter(d),o(d,t,n),((f=m&&m.onVnodeMounted)||v||_)&&V(()=>{try{f&&ea(f,r,e),v&&g.enter(d),_&&kn(e,null,r,`mounted`)}finally{}},i)},te=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){let n=i.subTree;if(t===n||ki(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;te(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},E=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++){let c=e[l]=s?Zi(e[l]):Xi(e[l]);v(null,c,t,n,r,i,a,o,s)}},ne=(e,n,r,i,a,o,s)=>{let l=n.el=e.el,{patchFlag:u,dynamicChildren:d,dirs:f}=n;u|=e.patchFlag&16;let m=e.props||t,h=n.props||t,g;if(r&&Si(r,!1),(g=h.onVnodeBeforeUpdate)&&ea(g,r,n,e),f&&kn(n,e,r,`beforeUpdate`),r&&Si(r,!0),d&&(!e.dynamicChildren||e.dynamicChildren.length!==d.length)&&(u=0,s=!1,d=null),(m.innerHTML&&h.innerHTML==null||m.textContent&&h.textContent==null)&&p(l,``),d?D(e.dynamicChildren,d,l,r,i,xi(n,a),o):s||ue(e,n,l,null,r,i,xi(n,a),o,!1),u>0){if(u&16)re(l,m,h,r,a);else if(u&2&&m.class!==h.class&&c(l,`class`,null,h.class,a),u&4&&c(l,`style`,m.style,h.style,a),u&8){let e=n.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t],i=m[n],o=h[n];(o!==i||n===`value`)&&c(l,n,i,o,a,r)}}u&1&&e.children!==n.children&&p(l,n.children)}else!s&&d==null&&re(l,m,h,r,a);((g=h.onVnodeUpdated)||f)&&V(()=>{g&&ea(g,r,n,e),f&&kn(n,e,r,`updated`)},i)},D=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s],u=c.el&&(c.type===H||!Ui(c,l)||c.shapeFlag&198)?m(c.el):n;v(c,l,u,null,r,i,a,o,!0)}},re=(e,n,r,i,a)=>{if(n!==r){if(n!==t)for(let t in n)!T(t)&&!(t in r)&&c(e,t,n[t],null,a,i);for(let t in r){if(T(t))continue;let o=r[t],s=n[t];o!==s&&t!==`value`&&c(e,t,s,o,a,i)}`value`in r&&c(e,`value`,n.value,r.value,a)}},ie=(e,t,n,r,i,a,s,c,l)=>{let d=t.el=e?e.el:u(``),f=t.anchor=e?e.anchor:u(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(c=c?c.concat(h):h),e==null?(o(d,n,r),o(f,n,r),E(t.children||[],n,f,i,a,s,c,l)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(D(e.dynamicChildren,m,n,i,a,s,c),(t.key!=null||i&&t===i.subTree)&&wi(e,t,!0)):ue(e,t,n,f,i,a,s,c,l)},O=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):k(t,n,r,i,a,o,c):oe(e,t,c)},k=(e,t,n,r,i,a,o)=>{let s=e.component=ra(e,r,i);if(Zn(e)&&(s.ctx.renderer=xe),da(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,se,o),!e.el){let r=s.subTree=G(Mi);b(null,r,t,n),e.placeholder=r.el}}else se(s,e,t,n,i,a,o)},oe=(e,t,n)=>{let r=t.component=e.component;if(Zr(e,t,n)){if(r.asyncDep&&!r.asyncResolved){t.el=e.el,le(r,t,n);return}r.next=t,r.update()}else t.el=e.el,r.vnode=t},se=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=Ei(e);if(n){t&&(t.el=c.el,le(e,t,o)),n.asyncDep.then(()=>{V(()=>{e.isUnmounted||l()},i)});return}}let u=t,d;Si(e,!1),t?(t.el=c.el,le(e,t,o)):t=c,n&&ae(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&ea(d,s,t,c),Si(e,!0);let f=Jr(e),p=e.subTree;e.subTree=f,v(p,f,m(p.el),ve(p),e,i,a),t.el=f.el,u===null&&ei(e,f.el),r&&V(r,i),(d=t.props&&t.props.onVnodeUpdated)&&V(()=>ea(d,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=Xn(t);if(Si(e,!1),l&&ae(l),!m&&(o=c&&c.onVnodeBeforeMount)&&ea(o,d,t),Si(e,!0),s&&Ce){let t=()=>{e.subTree=Jr(e),Ce(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=Jr(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&V(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;V(()=>ea(o,d,e),i)}(t.shapeFlag&256||d&&Xn(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&V(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new ke(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>vn(u),Si(e,!0),l()},le=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,ai(e,t.props,r,n),vi(e,t.children,n),We(),xn(e),Ge()},ue=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:m}=t;if(f>0){if(f&128){fe(l,d,n,r,i,a,o,s,c);return}if(f&256){de(l,d,n,r,i,a,o,s,c);return}}m&8?(u&16&&_e(l,i,a),d!==l&&p(n,d)):u&16?m&16?fe(l,d,n,r,i,a,o,s,c):_e(l,i,a,!0):(u&8&&p(n,``),m&16&&E(d,n,r,i,a,o,s,c))},de=(e,t,r,i,a,o,s,c,l)=>{e||=n,t||=n;let u=e.length,d=t.length,f=Math.min(u,d),p=0;for(;p<f;p++){let n=t[p]=l?Zi(t[p]):Xi(t[p]);v(e[p],n,r,null,a,o,s,c,l)}u>d?_e(e,a,o,!0,!1,f):E(t,r,i,a,o,s,c,l,f)},fe=(e,t,r,i,a,o,s,c,l)=>{let u=0,d=t.length,f=e.length-1,p=d-1;for(;u<=f&&u<=p;){let n=e[u],i=t[u]=l?Zi(t[u]):Xi(t[u]);if(Ui(n,i))v(n,i,r,null,a,o,s,c,l);else break;u++}for(;u<=f&&u<=p;){let n=e[f],i=t[p]=l?Zi(t[p]):Xi(t[p]);if(Ui(n,i))v(n,i,r,null,a,o,s,c,l);else break;f--,p--}if(u>f){if(u<=p){let e=p+1,n=e<d?t[e].el:i;for(;u<=p;)v(null,t[u]=l?Zi(t[u]):Xi(t[u]),r,n,a,o,s,c,l),u++}}else if(u>p)for(;u<=f;)A(e[u],a,o,!0),u++;else{let m=u,h=u,g=new Map;for(u=h;u<=p;u++){let e=t[u]=l?Zi(t[u]):Xi(t[u]);e.key!=null&&g.set(e.key,u)}let _,y=0,b=p-h+1,x=!1,S=0,C=Array(b);for(u=0;u<b;u++)C[u]=0;for(u=m;u<=f;u++){let n=e[u];if(y>=b){A(n,a,o,!0);continue}let i;if(n.key!=null)i=g.get(n.key);else for(_=h;_<=p;_++)if(C[_-h]===0&&Ui(n,t[_])){i=_;break}i===void 0?A(n,a,o,!0):(C[i-h]=u+1,i>=S?S=i:x=!0,v(n,t[i],r,null,a,o,s,c,l),y++)}let w=x?Ti(C):n;for(_=w.length-1,u=b-1;u>=0;u--){let e=h+u,n=t[e],f=t[e+1],p=e+1<d?f.el||Oi(f):i;C[u]===0?v(null,n,r,p,a,o,s,c,l):x&&(_<0||u!==w[_]?pe(n,r,p,2):_--)}}},pe=(e,t,n,r,i=null)=>{let{el:a,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){pe(e.component.subTree,t,n,r);return}if(d&128){e.suspense.move(t,n,r);return}if(d&64){c.move(e,t,n,xe);return}if(c===H){o(a,t,n);for(let e=0;e<u.length;e++)pe(u[e],t,n,r);o(e.anchor,t,n);return}if(c===Ni){S(e,t,n);return}if(r!==2&&d&1&&l){if(r===0)l.persisted&&!a[Bn]?o(a,t,n):(l.beforeEnter(a),o(a,t,n),V(()=>l.enter(a),i));else{let{leave:r,delayLeave:i,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?s(a):o(a,t,n)},d=()=>{let e=a._isLeaving||!!a[Bn];a._isLeaving&&a[Bn](!0),l.persisted&&!e?u():r(a,()=>{u(),c&&c()})};i?i(a,u,d):d()}}else o(a,t,n)},A=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if((d===-2||l&&l.hasOnce)&&(i=!1),s!=null&&(We(),Jn(s,null,n,e,!0),Ge()),p!=null&&(!e.ctx||e.ctx===t)&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let h=u&1&&f,g=!Xn(e),_;if(g&&(_=o&&o.onVnodeBeforeUnmount)&&ea(_,t,e),u&6)ge(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&kn(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,xe,r):l&&!l.hasOnce&&(a!==H||d>0&&d&64)?_e(l,t,n,!1,!0):(a===H&&d&384||!i&&u&16)&&_e(c,t,n),r&&me(e)}let v=m!=null&&p==null;(g&&(_=o&&o.onVnodeUnmounted)||h||v)&&V(()=>{_&&ea(_,t,e),h&&kn(e,null,t,`unmounted`),v&&(e.el=null)},n)},me=e=>{let{type:t,el:n,anchor:r,transition:i}=e;if(t===H){he(n,r);return}if(t===Ni){C(e),i&&!i.persisted&&i.afterLeave&&i.afterLeave();return}let a=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(e.shapeFlag&1&&i&&!i.persisted){let{leave:t,delayLeave:r}=i,o=()=>t(n,a);r?r(e.el,a,o):o()}else a()},he=(e,t)=>{let n;for(;e!==t;)n=h(e),s(e),e=n;s(t)},ge=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;Di(c),Di(l),r&&ae(r),i.stop(),a?(a.flags|=8,A(o,e,t,n)):e.vnode.el&&o&&(o.transition=e.vnode.transition,A(o,e,t,n)),s&&V(s,t),V(()=>{e.isUnmounted=!0},t)},_e=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)A(e[o],t,n,r,i)},ve=e=>{if(e.shapeFlag&6)return ve(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[Rn];return n?h(n):t},ye=!1,be=(e,t,n)=>{let r;e==null?t._vnode&&(A(t._vnode,null,null,!0),r=t._vnode.component):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,ye||=(ye=!0,xn(r),Sn(),!1)},xe={p:v,um:A,m:pe,r:me,mt:k,mc:E,pc:ue,pbc:D,n:ve,o:e},Se,Ce;return i&&([Se,Ce]=i(xe)),{render:be,hydrate:Se,createApp:Vr(be,Se)}}function xi({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function Si({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Ci(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function wi(e,t,n=!1){let r=e.children,i=t.children;if(d(r)&&d(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=Zi(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&wi(t,a)),a.type===ji&&(a.patchFlag===-1&&(a=i[e]=Zi(a)),a.el=t.el),a.type===Mi&&!a.el&&(a.el=t.el)}}function Ti(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-->0;)n[a]=o,o=t[o];return n}function Ei(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ei(t)}function Di(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Oi(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?Oi(t.subTree):null}var ki=e=>e.__isSuspense;function Ai(e,t){t&&t.pendingBranch?d(e)?t.effects.push(...e):t.effects.push(e):bn(e)}var H=Symbol.for(`v-fgt`),ji=Symbol.for(`v-txt`),Mi=Symbol.for(`v-cmt`),Ni=Symbol.for(`v-stc`),Pi=[],U=null;function Fi(e=!1){Pi.push(U=e?null:[])}function Ii(){Pi.pop(),U=Pi[Pi.length-1]||null}var Li=1;function Ri(e,t=!1){Li+=e,e<0&&U&&t&&(U.hasOnce=!0)}function zi(e){return e.dynamicChildren=Li>0?U||n:null,Ii(),Li>0&&U&&U.push(e),e}function Bi(e,t,n,r,i,a){return zi(W(e,t,n,r,i,a,!0))}function Vi(e,t,n,r,i){return zi(G(e,t,n,r,i,!0))}function Hi(e){return e?e.__v_isVNode===!0:!1}function Ui(e,t){return e.type===t.type&&e.key===t.key}var Wi=({key:e})=>e??null,Gi=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:g(e)||L(e)||h(e)?{i:z,r:e,k:t,f:!!n}:e);function W(e,t=null,n=null,r=0,i=null,a=e===H?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Wi(t),ref:t&&Gi(t),scopeId:Tn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:z};return s?(Qi(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=g(n)?8:16),Li>0&&!o&&U&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&U.push(c),c}var G=Ki;function Ki(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===gr)&&(e=Mi),Hi(e)){let r=Ji(e,t,!0);return n&&Qi(r,n),Li>0&&!a&&U&&(r.shapeFlag&6?U[U.indexOf(e)]=r:U.push(r)),r.patchFlag=-2,r}if(ya(e)&&(e=e.__vccOpts),t){t=qi(t);let{class:e,style:n}=t;e&&!g(e)&&(t.class=A(e)),v(n)&&(Vt(n)&&!d(n)&&(n=s({},n)),t.style=le(n))}let o=g(e)?1:ki(e)?128:zn(e)?64:v(e)?4:h(e)?2:0;return W(e,t,n,r,i,o,a,!0)}function qi(e){return e?Vt(e)||ri(e)?s({},e):e:null}function Ji(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?$i(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Wi(l),ref:t&&t.ref?n&&a?d(a)?a.concat(Gi(t)):[a,Gi(t)]:Gi(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==H?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ji(e.ssContent),ssFallback:e.ssFallback&&Ji(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return c&&r&&Un(u,c.clone(u)),u}function Yi(e=` `,t=0){return G(ji,null,e,t)}function Xi(e){return e==null||typeof e==`boolean`?G(Mi):d(e)?G(H,null,e.slice()):Hi(e)?Zi(e):G(ji,null,String(e))}function Zi(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ji(e)}function Qi(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(d(t))n=16;else if(typeof t==`object`){if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),Qi(e,n()),n._c&&(n._d=!0));return}{n=32;let r=t._;!r&&!ri(t)?t._ctx=z:r===3&&z&&(z.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}}else if(h(t)){if(r&65){Qi(e,{default:t});return}t={default:t,_ctx:z},n=32}else t=String(t),r&64?(n=16,t=[Yi(t)]):n=8;e.children=t,e.shapeFlag|=n}function $i(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=A([t.class,r.class]));else if(e===`style`)t.style=le([t.style,r.style]);else if(a(e)){let n=t[e],i=r[e];i&&n!==i&&!(d(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!o(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function ea(e,t,n,r=null){sn(e,t,7,[n,r])}var ta=zr(),na=0;function ra(e,n,r){let i=e.type,a=(n?n.appContext:e.appContext)||ta,o={uid:na++,vnode:e,type:i,parent:n,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ee(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(a.provides),ids:n?n.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:li(i,a),emitsOptions:Kr(i,a),emit:null,emitted:null,propsDefaults:t,inheritAttrs:i.inheritAttrs,ctx:t,data:t,props:t,attrs:t,slots:t,refs:t,setupState:t,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=Wr.bind(null,o),e.ce&&e.ce(o),o}var K=null,ia=()=>K||z,aa,oa;{let e=ce(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};aa=t(`__VUE_INSTANCE_SETTERS__`,e=>K=e),oa=t(`__VUE_SSR_SETTERS__`,e=>ua=e)}var sa=e=>{let t=K;return aa(e),e.scope.on(),()=>{e.scope.off(),aa(t)}},ca=()=>{K&&K.scope.off(),aa(null)};function la(e){return e.vnode.shapeFlag&4}var ua=!1;function da(e,t=!1,n=!1){t&&oa(t);let{props:r,children:i}=e.vnode,a=la(e);ii(e,r,a,t),_i(e,i,n||t);let o=a?fa(e,t):void 0;return t&&oa(!1),o}function fa(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Cr);let{setup:r}=n;if(r){We();let n=e.setupContext=r.length>1?ga(e):null,i=sa(e),a=on(r,e,0,[e.props,n]),o=y(a);if(Ge(),i(),(o||e.sp)&&!Xn(e)&&Gn(e),o){if(a.then(ca,ca),t)return a.then(n=>{oa(!0);try{pa(e,n,t)}finally{oa(!1)}}).catch(t=>{cn(t,e,0)});e.asyncDep=a}else pa(e,a,t)}else ma(e,t)}function pa(e,t,n){h(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:v(t)&&(e.setupState=Xt(t)),ma(e,n)}function ma(e,t,n){let i=e.type;e.render||=i.render||r;{let t=sa(e);We();try{Er(e)}finally{Ge(),t()}}}var ha={get(e,t){return N(e,`get`,``),e[t]}};function ga(e){return{attrs:new Proxy(e.attrs,ha),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function _a(e){return e.exposed?e.exposeProxy||=new Proxy(Xt(Ht(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in xr)return xr[n](e)},has(e,t){return t in e||t in xr}}):e.proxy}function va(e,t=!0){return h(e)?e.displayName||e.name:e.name||t&&e.__name}function ya(e){return h(e)&&`__vccOpts`in e}var q=(e,t)=>Qt(e,t,ua);function ba(e,t,n){try{Ri(-1);let r=arguments.length;return r===2?v(t)&&!d(t)?Hi(t)?G(e,null,[t]):G(e,t):G(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Hi(n)&&(n=[n]),G(e,t,n))}finally{Ri(1)}}var xa=`3.5.43`,Sa=void 0,Ca=typeof window<`u`&&window.trustedTypes;if(Ca)try{Sa=Ca.createPolicy(`vue`,{createHTML:e=>e})}catch{}var wa=Sa?e=>Sa.createHTML(e):e=>e,Ta=`http://www.w3.org/2000/svg`,Ea=`http://www.w3.org/1998/Math/MathML`,Da=typeof document<`u`?document:null,Oa=Da&&Da.createElement(`template`),ka={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?Da.createElementNS(Ta,e):t===`mathml`?Da.createElementNS(Ea,e):n?Da.createElement(e,{is:n}):Da.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>Da.createTextNode(e),createComment:e=>Da.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Da.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),i!==a&&(i=i.nextSibling););else{Oa.innerHTML=wa(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=Oa.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Aa=Symbol(`_vtc`);function ja(e,t,n){let r=e[Aa];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var Ma=Symbol(`_vod`),Na=Symbol(`_vsh`),Pa={name:`show`,beforeMount(e,{value:t},{transition:n}){e[Ma]=e.style.display===`none`?``:e.style.display,n&&t?n.beforeEnter(e):Fa(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Fa(e,!0),r.enter(e)):r.leave(e,()=>{Fa(e,!1)}):Fa(e,t))},beforeUnmount(e,{value:t}){Fa(e,t)}};function Fa(e,t){e.style.display=t?e[Ma]:`none`,e[Na]=!t}var Ia=Symbol(``),La=/(?:^|;)\s*display\s*:/;function Ra(e,t,n){let r=e.style,i=g(n),a=!1;if(n&&!i){if(t){if(g(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??Ba(r,t,``)}else for(let e in t)n[e]??Ba(r,e,``)}for(let i in n){i===`display`&&(a=!0);let o=n[i];o==null?Ba(r,i,``):Wa(e,i,!g(t)&&t?t[i]:void 0,o)||Ba(r,i,o)}}else if(i){if(t!==n){let e=r[Ia];e&&(n+=`;`+e),r.cssText=n,a=La.test(n)}}else t&&e.removeAttribute(`style`);Ma in e&&(e[Ma]=a?r.display:``,e[Na]&&(r.display=`none`))}var za=/\s*!important$/;function Ba(e,t,n){if(d(n))n.forEach(n=>Ba(e,t,n));else if(n??=``,t.startsWith(`--`))za.test(n)?e.setProperty(t,n.replace(za,``),`important`):e.setProperty(t,n);else{let r=Ua(e,t);za.test(n)?e.setProperty(D(r),n.replace(za,``),`important`):e[r]=n}}var Va=[`Webkit`,`Moz`,`ms`],Ha={};function Ua(e,t){let n=Ha[t];if(n)return n;let r=E(t);if(r!==`filter`&&r in e)return Ha[t]=r;r=re(r);for(let n=0;n<Va.length;n++){let i=Va[n]+r;if(i in e)return Ha[t]=i}return t}function Wa(e,t,n,r){return e.tagName===`TEXTAREA`&&(t===`width`||t===`height`)&&g(r)&&n===r}var Ga=`http://www.w3.org/1999/xlink`;function Ka(e,t,n,r,i,a=he(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(Ga,t.slice(6,t.length)):e.setAttributeNS(Ga,t,n):n==null||a&&!ge(n)?e.removeAttribute(t):e.setAttribute(t,a?``:_(n)?String(n):n)}function qa(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?wa(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=ge(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function Ja(e,t,n,r){e.addEventListener(t,n,r)}function Ya(e,t,n,r){e.removeEventListener(t,n,r)}var Xa=Symbol(`_vei`);function Za(e,t,n,r,i=null){let a=e[Xa]||(e[Xa]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=eo(t);r?Ja(e,n,a[t]=io(r,i),s):o&&(Ya(e,n,o,s),a[t]=void 0)}}var Qa=/(Once|Passive|Capture)$/,$a=/^on:?(?:Once|Passive|Capture)$/;function eo(e){let t,n;for(;(n=e.match(Qa))&&!$a.test(e);)t||={},e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===`:`?e.slice(3):D(e.slice(2)),t]}var to=0,no=Promise.resolve(),ro=()=>to||=(no.then(()=>to=0),Date.now());function io(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;let r=n.value;if(d(r)){let n=e.stopImmediatePropagation;e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0};let i=r.slice(),a=[e];for(let n=0;n<i.length&&!e._stopped;n++){let e=i[n];e&&sn(e,t,5,a)}}else sn(r,t,5,[e])};return n.value=e,n.attached=ro(),n}var ao=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,oo=(e,t,n,r,i,s)=>{let c=i===`svg`;t===`class`?ja(e,r,c):t===`style`?Ra(e,n,r):a(t)?o(t)||Za(e,t,n,r,s):(t[0]===`.`?(t=t.slice(1),1):t[0]===`^`?(t=t.slice(1),0):so(e,t,r,c))?(qa(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&Ka(e,t,r,c,s,t!==`value`)):e._isVueCE&&(co(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!g(r)))?qa(e,E(t),r,s,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),Ka(e,t,r,c))};function so(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&ao(t)&&h(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return ao(t)&&g(n)?!1:t in e}function co(e,t){let n=e._def.props;if(!n)return!1;let r=E(t);return Array.isArray(n)?n.some(e=>E(e)===r):Object.keys(n).some(e=>E(e)===r)}var lo=[`ctrl`,`shift`,`alt`,`meta`],uo={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>`button`in e&&e.button!==0,middle:e=>`button`in e&&e.button!==1,right:e=>`button`in e&&e.button!==2,exact:(e,t)=>lo.some(n=>e[`${n}Key`]&&!t.includes(n))},fo=(e,t)=>{if(!e)return e;let n=e._withMods||={},r=t.join(`.`);return n[r]||(n[r]=((n,...r)=>{for(let e=0;e<t.length;e++){let r=uo[t[e]];if(r&&r(n,t))return}return e(n,...r)}))},po=s({patchProp:oo},ka),mo;function ho(){return mo||=yi(po)}var go=((...e)=>{let t=ho().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=vo(e);if(!r)return;let i=t._component;!h(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,_o(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function _o(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function vo(e){return g(e)?document.querySelector(e):e}var yo=e=>e.startsWith(`/`);function bo(e){return typeof e==`object`||`displayName`in e||`props`in e||`__vccOpts`in e}function xo(e){return e.__esModule||e[Symbol.toStringTag]===`Module`||e.default&&bo(e.default)}var J=Object.assign;function So(e,t){let n={};for(let r in t){let i=t[r];n[r]=Y(i)?i.map(e):e(i)}return n}var Co=()=>{},Y=Array.isArray;function wo(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}var To=Symbol(``);function Eo(e,t){return J(Error(),{type:e,[To]:!0},t)}function Do(e,t){return e instanceof Error&&To in e&&(t==null||!!(e.type&t))}var Oo=Symbol(``),ko=Symbol(``),Ao=Symbol(``),jo=Symbol(``),Mo=Symbol(``);function No(e){return jn(jo)}var Po=typeof document<`u`,Fo=/#/g,Io=/&/g,Lo=/\//g,Ro=/=/g,zo=/\?/g,Bo=/\+/g,Vo=/%5B/g,Ho=/%5D/g,Uo=/%5E/g,Wo=/%60/g,Go=/%7B/g,Ko=/%7C/g,qo=/%7D/g,Jo=/%20/g;function Yo(e){return e==null?``:encodeURI(``+e).replace(Ko,`|`).replace(Vo,`[`).replace(Ho,`]`)}function Xo(e){return Yo(e).replace(Go,`{`).replace(qo,`}`).replace(Uo,`^`)}function Zo(e){return Yo(e).replace(Bo,`%2B`).replace(Jo,`+`).replace(Fo,`%23`).replace(Io,`%26`).replace(Wo,"`").replace(Go,`{`).replace(qo,`}`).replace(Uo,`^`)}function Qo(e){return Zo(e).replace(Ro,`%3D`)}function $o(e){return Yo(e).replace(Fo,`%23`).replace(zo,`%3F`)}function es(e){return $o(e).replace(Lo,`%2F`)}function ts(e){if(e==null)return null;try{return decodeURIComponent(``+e)}catch{}return``+e}var ns=/\/$/,rs=e=>e.replace(ns,``);function is(e,t,n=`/`){let r,i={},a=``,o=``,s=t.indexOf(`#`),c=t.indexOf(`?`);return c=s>=0&&c>s?-1:c,c>=0&&(r=t.slice(0,c),a=t.slice(c,s>0?s:t.length),i=e(a.slice(1))),s>=0&&(r||=t.slice(0,s),o=t.slice(s,t.length)),r=fs(r??t,n),{fullPath:r+a+o,path:r,query:i,hash:ts(o)}}function as(e,t){let n=t.query?e(t.query):``;return t.path+(n&&`?`)+n+(t.hash||``)}function os(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||`/`}function ss(e,t,n){let r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&cs(t.matched[r],n.matched[i])&&ls(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function cs(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ls(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!us(e[n],t[n]))return!1;return!0}function us(e,t){return Y(e)?ds(e,t):Y(t)?ds(t,e):(e&&e.valueOf())===(t&&t.valueOf())}function ds(e,t){return Y(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):e.length===1&&e[0]===t}function fs(e,t){if(yo(e))return e;if(!e)return t;let n=t.split(`/`),r=e.split(`/`),i=r[r.length-1];(i===`..`||i===`.`)&&r.push(``);let a=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==`.`){if(s===`..`)a>1&&a--;else break}return n.slice(0,a).join(`/`)+`/`+r.slice(o).join(`/`)}var ps={path:`/`,name:void 0,params:{},query:{},hash:``,fullPath:`/`,matched:[],meta:{},redirectedFrom:void 0};function ms(e){if(!e){if(Po){let t=document.querySelector(`base`);e=t&&t.getAttribute(`href`)||`/`,e=e.replace(/^\w+:\/\/[^/]+/,``)}else e=`/`}return e[0]!==`/`&&e[0]!==`#`&&(e=`/`+e),rs(e)}var hs=/^[^#]+#/;function gs(e,t){return e.replace(hs,`#`)+t}function _s(e,t){let n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}var vs=()=>history.scrollRestoration===`manual`?{left:window.scrollX,top:window.scrollY}:null;function ys(e){let t;if(`el`in e){let n=e.el,r=typeof n==`string`&&n.startsWith(`#`),i=typeof n==`string`?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=_s(i,e)}else t=e;`scrollBehavior`in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left==null?window.scrollX:t.left,t.top==null?window.scrollY:t.top)}function bs(e,t){return(history.state?history.state.position-t:-1)+e}var xs=new Map;function Ss(e){xs.set(e,vs())}function Cs(e){let t=xs.get(e);return xs.delete(e),t}function ws(e){return typeof e==`string`||e&&typeof e==`object`}function Ts(e){return typeof e==`string`||typeof e==`symbol`}function Es(e){let t={};if(e===``||e===`?`)return t;let n=(e[0]===`?`?e.slice(1):e).split(`&`);for(let e=0;e<n.length;++e){let r=n[e].replace(Bo,` `),i=r.indexOf(`=`),a=ts(i<0?r:r.slice(0,i)),o=i<0?null:ts(r.slice(i+1));if(a in t){let e=t[a];Y(e)||(e=t[a]=[e]),e.push(o)}else t[a]=o}return t}function Ds(e){let t=``;for(let n in e){let r=e[n];if(n=Qo(n),r==null){r!==void 0&&(t+=(t.length?`&`:``)+n);continue}(Y(r)?r.map(e=>e&&Zo(e)):[r&&Zo(r)]).forEach(e=>{e!==void 0&&(t+=(t.length?`&`:``)+n,e!=null&&(t+=`=`+e))})}return t}function Os(e){let t={};for(let n in e){let r=e[n];r!==void 0&&(t[n]=Y(r)?r.map(e=>e==null?null:``+e):r==null?r:``+r)}return t}function ks(){let e=[];function t(t){return e.push(t),()=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function As(e,t,n,r,i,a=e=>e()){let o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,c)=>{let l=e=>{e===!1?c(Eo(4,{from:n,to:t})):e instanceof Error?c(e):ws(e)?c(Eo(2,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&typeof e==`function`&&o.push(e),s())},u=a(()=>e.call(r&&r.instances[i],t,n,l)),d=Promise.resolve(u);e.length<3&&(d=d.then(l)),d.catch(e=>c(e))})}function js(e,t,n,r,i=e=>e()){let a=[];for(let o of e)for(let e in o.components){let s=o.components[e];if(t===`beforeRouteEnter`||o.instances[e]){if(bo(s)){let c=(s.__vccOpts||s)[t];c&&a.push(As(c,n,r,o,e,i))}else{let c=s();a.push(()=>c.then(a=>{if(!a)throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);let s=xo(a)?a.default:a;o.mods[e]=a,o.components[e]=s;let c=(s.__vccOpts||s)[t];return c&&As(c,n,r,o,e,i)()}))}}}return a}function Ms(e,t){let n=[],r=[],i=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){let a=t.matched[o];a&&(e.matched.find(e=>cs(e,a))?r.push(a):n.push(a));let s=e.matched[o];s&&(t.matched.find(e=>cs(e,s))||i.push(s))}return[n,r,i]}var Ns=()=>location.protocol+`//`+location.host;function Ps(e,t){let{pathname:n,search:r,hash:i}=t,a=e.indexOf(`#`);if(a>-1){let t=i.includes(e.slice(a))?e.slice(a).length:1,n=i.slice(t);return n[0]!==`/`&&(n=`/`+n),os(n,``)}return os(n,e)+r+i}function Fs(e,t,n,r){let i=[],a=[],o=null,s=({state:a})=>{let s=Ps(e,location),c=n.value,l=t.value,u=0;if(a){if(n.value=s,t.value=a,o&&o===c){o=null;return}u=l?a.position-l.position:0}else r(s);i.forEach(e=>{e(n.value,c,{delta:u,type:`pop`,direction:u?u>0?`forward`:`back`:``})})};function c(){o=n.value}function l(e){i.push(e);let t=()=>{let t=i.indexOf(e);t>-1&&i.splice(t,1)};return a.push(t),t}function u(){let{history:e}=window;e.state&&e.replaceState(J({},e.state,{scroll:vs()}),``)}function d(){for(let e of a)e();a=[],window.removeEventListener(`popstate`,s),window.removeEventListener(`pagehide`,u)}return window.addEventListener(`popstate`,s),window.addEventListener(`pagehide`,u),{pauseListeners:c,listen:l,destroy:d}}function Is(e,t,n,r=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:null}}function Ls(e){let{history:t,location:n}=window,r={value:Ps(e,n)},i={value:t.state};i.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(r,a,o){let s=e.indexOf(`#`),c=s>-1?(n.host&&document.querySelector(`base`)?e:e.slice(s))+r:Ns()+e+r;try{t[o?`replaceState`:`pushState`](a,``,c),i.value=a}catch(e){console.error(e),n[o?`replace`:`assign`](c)}}function o(e,n){a(e,J({},t.state,Is(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}function s(e,n){let o=J({},i.value,t.state,{forward:e,scroll:vs()});a(o.current,o,!0),a(e,J({},Is(r.value,e,null),{position:o.position+1},n),!1),r.value=e}return{location:r,state:i,push:s,replace:o}}function Rs(e){e=ms(e);let t=Ls(e),n=Fs(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}let i=J({location:``,base:e,go:r,createHref:gs.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function zs(e){return e=location.host?e||location.pathname+location.search:``,e.includes(`#`)||(e+=`#`),Rs(e)}var Bs={type:0,value:``},Vs=/[a-zA-Z0-9_]/;function Hs(e){if(!e)return[[]];if(e===`/`)return[[Bs]];if(!yo(e))throw Error(`Invalid path "${e}"`);function t(e){throw Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n,i=[],a;function o(){a&&i.push(a),a=[]}let s=0,c,l=``,u=``;function d(){l&&=(n===0?a.push({type:0,value:l}):n===1||n===2||n===3?(a.length>1&&(c===`*`||c===`+`)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:l,regexp:u,repeatable:c===`*`||c===`+`,optional:c===`*`||c===`?`})):t(`Invalid state to consume buffer`),``)}function f(){l+=c}for(;s<e.length;)switch(c=e[s++],n){case 0:c===`\\`?(r=n,n=4):c===`/`?(l&&d(),o()):c===`:`?(d(),n=1):f();break;case 4:f(),n=r;break;case 1:c===`(`?n=2:Vs.test(c)?f():(d(),n=0,c!==`*`&&c!==`?`&&c!==`+`&&s--);break;case 2:c===`)`?u[u.length-1]==`\\`?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!==`*`&&c!==`?`&&c!==`+`&&s--,u=``;break;default:t(`Unknown state`)}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),i}var Us=`[^/]+?`,Ws={sensitive:!1,strict:!1,start:!0,end:!0},Gs=/[.+*?^${}()[\]/\\]/g;function Ks(e,t){let n=J({},Ws,t),r=[],i=n.start?`^`:``,a=[];for(let t of e){let e=t.length?[]:[90];n.strict&&!t.length&&(i+=`/`);for(let r=0;r<t.length;r++){let o=t[r],s=40+(n.sensitive?.25:0);if(o.type===0)r||(i+=`/`),i+=o.value.replace(Gs,`\\$&`),s+=40;else if(o.type===1){let{value:e,repeatable:n,optional:c,regexp:l}=o;a.push({name:e,repeatable:n,optional:c});let u=l||Us;if(u!==Us){s+=10;try{RegExp(`(${u})`)}catch(t){throw Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(d=c&&t.length<2?`(?:/${d})`:`/`+d),c&&(d+=`?`),i+=d,s+=20,c&&(s+=-8),n&&(s+=-20),u===`.*`&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){let e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+=`/?`),n.end?i+=`$`:n.strict&&!i.endsWith(`/`)&&(i+=`(?:/|$)`);let o=new RegExp(i,n.sensitive?``:`i`);function s(e){let t=e.match(o),n={};if(!t)return null;for(let e=1;e<t.length;e++){let r=t[e]||``,i=a[e-1];n[i.name]=r&&i.repeatable?r.split(`/`):r}return n}function c(t){let n=``,r=!1;for(let i of e){(!r||!n.endsWith(`/`))&&(n+=`/`),r=!1;for(let e of i)if(e.type===0)n+=e.value;else if(e.type===1){let{value:a,repeatable:o,optional:s}=e,c=a in t?t[a]:``;if(Y(c)&&!o)throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);let l=Y(c)?c.join(`/`):c;if(!l){if(s)i.length<2&&(n.endsWith(`/`)?n=n.slice(0,-1):r=!0);else throw Error(`Missing required param "${a}"`)}n+=l}}return n||`/`}return{re:o,score:r,keys:a,parse:s,stringify:c}}function qs(e,t){let n=0;for(;n<e.length&&n<t.length;){let r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Js(e,t){let n=0,r=e.score,i=t.score;for(;n<r.length&&n<i.length;){let e=qs(r[n],i[n]);if(e)return e;n++}if(Math.abs(i.length-r.length)===1){if(Ys(r))return 1;if(Ys(i))return-1}return i.length-r.length}function Ys(e){let t=e[e.length-1];return e.length>0&&t[t.length-1]<0}var Xs={strict:!1,end:!0,sensitive:!1};function Zs(e,t,n){let r=J(Ks(Hs(e.path),n),{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Qs(e,t){let n=[],r=new Map;t=wo(Xs,t);function i(e){return r.get(e)}function a(e,n,r){let i=!r,s=ec(e);s.aliasOf=r&&r.record;let l=wo(t,e),u=[s];if(`alias`in e){let t=typeof e.alias==`string`?[e.alias]:e.alias;for(let e of t)u.push(ec(J({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s})))}let d,f;for(let t of u){let{path:u}=t;if(n&&!yo(u)){let e=n.record.path,r=e[e.length-1]===`/`?``:`/`;t.path=n.record.path+(u&&r+u)}if(d=Zs(t,n,l),r?r.alias.push(d):(f||=d,f!==d&&f.alias.push(d),i&&e.name&&!nc(d)&&o(e.name)),oc(d)&&c(d),s.children){let e=s.children;for(let t=0;t<e.length;t++)a(e[t],d,r&&r.children[t])}r||=d}return f?()=>{o(f)}:Co}function o(e){if(Ts(e)){let t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function s(){return n}function c(e){let t=ic(e,n);n.splice(t,0,e),e.record.name&&!nc(e)&&r.set(e.record.name,e)}function l(e,t){let i,a={},o,s;if(`name`in e&&e.name){if(i=r.get(e.name),!i)throw Eo(1,{location:e});s=i.record.name,a=J($s(t.params,i.keys.filter(e=>!e.optional).concat(i.parent?i.parent.keys.filter(e=>e.optional):[]).map(e=>e.name)),e.params&&$s(e.params,i.keys.map(e=>e.name))),o=i.stringify(a)}else if(e.path!=null)o=e.path,i=n.find(e=>e.re.test(o)),i&&(a=i.parse(o),s=i.record.name,i.keys.forEach(e=>{e.optional&&!a[e.name]&&delete a[e.name]}));else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw Eo(1,{location:e,currentLocation:t});s=i.record.name,a=J({},t.params,e.params),o=i.stringify(a)}let c=[],l=i;for(;l;)c.unshift(l.record),l=l.parent;return{name:s,path:o,params:a,matched:c,meta:rc(c)}}e.forEach(e=>a(e));function u(){n.length=0,r.clear()}return{addRoute:a,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:s,getRecordMatcher:i}}function $s(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function ec(e){let t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:tc(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:`components`in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function tc(e){let t={},n=e.props||!1;if(`component`in e)t.default=n;else for(let r in e.components)t[r]=typeof n==`object`?n[r]:n;return t}function nc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function rc(e){return e.reduce((e,t)=>J(e,t.meta),{})}function ic(e,t){let n=0,r=t.length;for(;n!==r;){let i=n+r>>1;Js(e,t[i])<0?r=i:n=i+1}let i=ac(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function ac(e){let t=e;for(;t=t.parent;)if(oc(t)&&Js(e,t)===0)return t}function oc({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function sc(e){let t=jn(Ao),n=jn(jo),r=q(()=>{let n=Jt(e.to);return t.resolve(n)}),i=q(()=>{let{matched:e}=r.value,{length:t}=e,i=e[t-1],a=n.matched;if(!i||!a.length)return-1;let o=a.findIndex(cs.bind(null,i));if(o>-1)return o;let s=fc(e[t-2]);return t>1&&fc(i)===s&&a[a.length-1].path!==s?a.findIndex(cs.bind(null,e[t-2])):o}),a=q(()=>i.value>-1&&dc(n.params,r.value.params)),o=q(()=>i.value>-1&&i.value===n.matched.length-1&&ls(n.params,r.value.params));function s(n={}){if(uc(n)){let n=t[Jt(e.replace)?`replace`:`push`](Jt(e.to)).catch(Co);return e.viewTransition&&typeof document<`u`&&`startViewTransition`in document&&document.startViewTransition(()=>n),n}return Promise.resolve()}return{route:r,href:q(()=>r.value.href),isActive:a,isExactActive:o,navigate:s}}function cc(e){return e.length===1?e[0]:e}var lc=Wn({name:`RouterLink`,compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:`page`},viewTransition:Boolean},useLink:sc,setup(e,{slots:t}){let n=Ft(sc(e)),{options:r}=jn(Ao),i=q(()=>({[pc(e.activeClass,r.linkActiveClass,`router-link-active`)]:n.isActive,[pc(e.exactActiveClass,r.linkExactActiveClass,`router-link-exact-active`)]:n.isExactActive}));return()=>{let r=t.default&&cc(t.default(n));return e.custom?r:ba(`a`,{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}});function uc(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(e.button===void 0||e.button===0)){if(e.currentTarget&&e.currentTarget.getAttribute){let t=e.currentTarget.getAttribute(`target`);if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function dc(e,t){for(let n in t){let r=t[n],i=e[n];if(Y(r)){if(!Y(i)||i.length!==r.length||r.some((e,t)=>e.valueOf()!==i[t].valueOf()))return!1}else if(r!==i)return!1}return!0}function fc(e){return e?e.aliasOf?e.aliasOf.path:e.path:``}var pc=(e,t,n)=>e??t??n,mc=Wn({name:`RouterView`,inheritAttrs:!1,props:{name:{type:String,default:`default`},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){let r=jn(Mo),i=q(()=>e.route||r.value),a=jn(ko,0),o=q(()=>{let e=Jt(a),{matched:t}=i.value,n;for(;(n=t[e])&&!n.components;)e++;return e}),s=q(()=>i.value.matched[o.value]);An(ko,q(()=>o.value+1)),An(Oo,s),An(Mo,i);let c=Wt();return Pn(()=>[c.value,s.value,e.name],([e,t,n],[r,i,a])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),e&&t&&(!i||!cs(t,i)||!r)&&(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:`post`}),()=>{let r=i.value,a=e.name,o=s.value,l=o&&o.components[a];if(!l)return hc(n.default,{Component:l,route:r});let u=o.props[a],d=ba(l,J({},u?u===!0?r.params:typeof u==`function`?u(r):u:null,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(o.instances[a]=null)},ref:c}));return hc(n.default,{Component:d,route:r})||d}}});function hc(e,t){if(!e)return null;let n=e(t);return n.length===1?n[0]:n}var gc=mc;function _c(e){let t=Qs(e.routes,e),n=e.parseQuery||Es,r=e.stringifyQuery||Ds,i=e.history,a=ks(),o=ks(),s=ks(),c=Gt(ps),l=Gt(0),u=ps;Po&&e.scrollBehavior&&`scrollRestoration`in history&&(history.scrollRestoration=`manual`);let d=So.bind(null,e=>``+e),f=So.bind(null,es),p=So.bind(null,ts);function m(e,n){let r,i;Ts(e)?(r=t.getRecordMatcher(e),i=n):i=e;let a=t.addRoute(i,r);return l.value++,()=>{a(),l.value++}}function h(e){let n=t.getRecordMatcher(e);n&&(t.removeRoute(n),l.value++)}function g(){t.clearRoutes(),l.value++}function _(){return t.getRoutes().map(e=>e.record)}function v(e){return!!t.getRecordMatcher(e)}function y(e,a){if(l.value,typeof e==`string`){a||=e.startsWith(`/`)?ps:c.value;let r=is(n,e,a.path),o=t.resolve({path:r.path},a),s=i.createHref(r.fullPath);return J(r,o,{params:p(o.params),redirectedFrom:void 0,href:s})}a=J({},a||(e.path!=null&&e.path.startsWith(`/`)&&!(`name`in e&&e.name)?ps:c.value));let o;if(e.path!=null)o=J({},e,{path:is(n,e.path,a.path).path});else{let t=J({},e.params);for(let e in t)t[e]??delete t[e];o=J({},e,{params:f(t)}),a.params=f(a.params)}let s=t.resolve(o,a),u=e.hash||``;s.params=d(p(s.params));let m=as(r,J({},e,{hash:Xo(u),path:s.path})),h=i.createHref(m);return J({fullPath:m,hash:u,query:r===Ds?Os(e.query):e.query||{}},s,{redirectedFrom:void 0,href:h})}function b(e){return typeof e==`string`?is(n,e,c.value.path):J({},e)}function x(e,t){if(u!==e)return Eo(8,{from:t,to:e})}function S(e){return T(e)}function C(e){return S(J(b(e),{replace:!0}))}function w(e,t){let n=e.matched[e.matched.length-1];if(n&&n.redirect){let{redirect:r}=n,i=typeof r==`function`?r(e,t):r;return typeof i==`string`&&(i=i.includes(`?`)||i.includes(`#`)?i=b(i):{path:i},i.params={}),J({query:e.query,hash:e.hash,params:i.path==null?e.params:{}},i)}}function T(e,t){let n=u=y(e),i=c.value,a=e.state,o=e.force,s=e.replace===!0,l=w(n,i);if(l)return T(J(b(l),{state:typeof l==`object`?J({},a,l.state):a,force:o,replace:s}),t||n);let d=n;d.redirectedFrom=t;let f;return!o&&ss(r,i,n)&&(f=Eo(16,{to:d,from:i}),le(i,i,!0,!1)),(f?Promise.resolve(f):E(d,i)).catch(e=>Do(e)?Do(e,2)?e:ce(e):oe(e,d,i)).then(e=>{if(e){if(Do(e,2))return T(J({replace:s},b(e.to),{state:typeof e.to==`object`?J({},a,e.to.state):a,force:o}),t||d)}else e=D(d,i,!0,s,a);return ne(d,i,e),e})}function ee(e,t){let n=x(e,t);return n?Promise.reject(n):Promise.resolve()}function te(e){let t=fe.values().next().value;return t&&typeof t.runWithContext==`function`?t.runWithContext(e):e()}function E(e,t){let n,[r,i,s]=Ms(e,t);n=js(r.reverse(),`beforeRouteLeave`,e,t);for(let i of r)i.leaveGuards.forEach(r=>{n.push(As(r,e,t))});let c=ee.bind(null,e,t);return n.push(c),A(n).then(()=>{n=[];for(let r of a.list())n.push(As(r,e,t));return n.push(c),A(n)}).then(()=>{n=js(i,`beforeRouteUpdate`,e,t);for(let r of i)r.updateGuards.forEach(r=>{n.push(As(r,e,t))});return n.push(c),A(n)}).then(()=>{n=[];for(let r of s)if(r.beforeEnter){if(Y(r.beforeEnter))for(let i of r.beforeEnter)n.push(As(i,e,t));else n.push(As(r.beforeEnter,e,t))}return n.push(c),A(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=js(s,`beforeRouteEnter`,e,t,te),n.push(c),A(n))).then(()=>{n=[];for(let r of o.list())n.push(As(r,e,t));return n.push(c),A(n)}).catch(e=>Do(e,8)?e:Promise.reject(e))}function ne(e,t,n){s.list().forEach(r=>te(()=>r(e,t,n)))}function D(e,t,n,r,a){let o=x(e,t);if(o)return o;let s=t===ps,l=Po?history.state:{};n&&(r||s?i.replace(e.fullPath,J({scroll:s&&l&&l.scroll},a)):i.push(e.fullPath,a)),c.value=e,le(e,t,n,s),ce()}let re;function ie(){re||=i.listen((e,t,n)=>{if(!pe.listening)return;let r=y(e),a=w(r,pe.currentRoute.value);if(a){T(J(a,{replace:!0,force:!0}),r).catch(Co);return}u=r;let o=c.value;Po&&n.delta&&Ss(bs(o.fullPath,n.delta)),E(r,o).catch(e=>Do(e,12)?e:Do(e,2)?(T(J(b(e.to),{force:!0}),r).then(e=>{Do(e,20)&&!n.delta&&n.type===`pop`&&i.go(-1,!1)}).catch(Co),Promise.reject()):(n.delta&&i.go(-n.delta,!1),oe(e,r,o))).then(e=>{e||=D(r,o,!1),e&&(n.delta&&!Do(e,8)?i.go(-n.delta,!1):n.type===`pop`&&Do(e,20)&&i.go(-1,!1)),ne(r,o,e)}).catch(Co)})}let O=ks(),ae=ks(),k;function oe(e,t,n){ce(e);let r=ae.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function se(){return k&&c.value!==ps?Promise.resolve():new Promise((e,t)=>{O.add([e,t])})}function ce(e){return k||(k=!e,ie(),O.list().forEach(([t,n])=>e?n(e):t()),O.reset()),e}function le(t,n,r,i){let{scrollBehavior:a}=e;if(!Po||!a)return Promise.resolve();let o=!r&&Cs(bs(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return gn().then(()=>a(t,n,o)).then(e=>t===c.value&&e&&ys(e)).catch(e=>t===c.value&&oe(e,t,n))}let ue=e=>i.go(e),de,fe=new Set,pe={currentRoute:c,listening:!0,addRoute:m,removeRoute:h,clearRoutes:g,hasRoute:v,getRoutes:_,resolve:y,options:e,push:S,replace:C,go:ue,back:()=>ue(-1),forward:()=>ue(1),beforeEach:a.add,beforeResolve:o.add,afterEach:s.add,onError:ae.add,isReady:se,install(e){e.component(`RouterLink`,lc),e.component(`RouterView`,gc),e.config.globalProperties.$router=pe,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>Jt(c)}),Po&&!de&&c.value===ps&&(de=!0,S(i.location).catch(e=>{}));let t={};for(let e in ps)Object.defineProperty(t,e,{get:()=>c.value[e],enumerable:!0});e.provide(Ao,pe),e.provide(jo,It(t)),e.provide(Mo,c);let n=e.unmount;fe.add(e),e.unmount=function(){fe.delete(e),fe.size<1&&(u=ps,re&&re(),re=null,c.value=ps,de=!1,k=!1),n()}}};function A(e){return e.reduce((e,t)=>e.then(()=>te(t)),Promise.resolve())}return pe}var vc=[{id:1,judul:`Transformer Models`,poin:[{slug:`introduction`,judul:`Pendahuluan`},{slug:`nlp-llm`,judul:`Natural Language Processing dan Large Language Models`},{slug:`what-can-they-do`,judul:`Apa yang dapat dilakukan Transformers?`},{slug:`how-transformers-work`,judul:`Bagaimana Transformers bekerja?`},{slug:`solve-tasks`,judul:`Bagaimana Transformer menyelesaikan masalah`},{slug:`architectures`,judul:`Arsitektur Transformer`},{slug:`inference`,judul:`Inference dengan LLMs`},{slug:`bias-limitations`,judul:`Bias dan limitations`},{slug:`summary`,judul:`Rangkuman`}]},{id:2,judul:`Penggunaan Transformers`,poin:[{slug:`poin1`,judul:`Pendahuluan`},{slug:`poin2`,judul:`Behind the Pipeline — Model dan API Transformers`},{slug:`poin3`,judul:`Model Inputs dan Model Outputs`},{slug:`poin4`,judul:`Tokenizer`},{slug:`poin5`,judul:`Handling Multiple Sequences — PyTorch`},{slug:`poin6`,judul:`Putting It All Together`},{slug:`poin7`,judul:`Optimized Inference`},{slug:`poin8`,judul:`Kesimpulan Chapter 2`}]},{id:3,judul:`Fine-Tuning a Pretrained Model`,poin:[{slug:`poin1`,judul:`Pendahuluan`},{slug:`poin2`,judul:`Menyiapkan Dataset untuk Fine-Tuning`},{slug:`poin3`,judul:`Fine-Tuning dengan Trainer API`},{slug:`poin4`,judul:`Full Training Loop`},{slug:`poin5`,judul:`Understanding Learning Curves`},{slug:`poin6`,judul:`Fine-Tuning`},{slug:`poin7`,judul:`Kesimpulan`}]},{id:4,judul:`Building a model card`,poin:[{slug:`poin1`,judul:`The Hugging Face Hub`},{slug:`poin2`,judul:`Using pretrained models`},{slug:`poin3`,judul:`Sharing pretrained models`},{slug:`poin4`,judul:`Building a model card`},{slug:`poin5`,judul:`Kesimpulan`}]},{id:5,judul:`Datasets Library`,poin:[{slug:`poin1`,judul:`Introduction`},{slug:`poin2`,judul:`What if my dataset isnt on the Hub?`},{slug:`poin3`,judul:`Time to slice and dice`},{slug:`poin4`,judul:`Big data Datasets to the rescue!`},{slug:`poin5`,judul:`Membuat dataset sendiri`},{slug:`poin6`,judul:`Semantic search with FAISS`},{slug:`poin7`,judul:`Kesimpulan`}]},{id:6,judul:`Tokenizers`,poin:[{slug:`poin1`,judul:`Introduction`},{slug:`poin2`,judul:`Training a New Tokenizer from an Old One`},{slug:`poin3`,judul:`Fast Tokenizers Special Powers`},{slug:`poin4`,judul:`Fast Tokenizers in the QA Pipeline`},{slug:`poin5`,judul:`Normalization and Pre-tokenization`},{slug:`poin6`,judul:`Byte-Pair Encoding Tokenization`},{slug:`poin7`,judul:`WordPiece Tokenization`},{slug:`poin8`,judul:`Unigram Tokenization`},{slug:`poin9`,judul:`Building a Tokenizer, Block by Block`}]},{id:7,judul:`Main NLP Tasks`,poin:[{slug:`poin1`,judul:`Introduction`},{slug:`poin2`,judul:`Token Classification`},{slug:`poin3`,judul:`Fine-Tuning a Masked Language Model`},{slug:`poin4`,judul:`Translation`},{slug:`poin5`,judul:`Summarization`},{slug:`poin6`,judul:`Training a Causal Language Model from Scratch`},{slug:`poin7`,judul:`Question Answering`},{slug:`poin8`,judul:`Mastering LLMs`},{slug:`poin9`,judul:`Kesimpulan`}]},{id:8,judul:`Introduction to Gradio Blocks`,poin:[{slug:`poin1`,judul:`Pengenalan Gradio Blocks`},{slug:`poin2`,judul:`Demo dengan Blocks`},{slug:`poin3`,judul:`Layout dengan Blocks`},{slug:`poin4`,judul:`Demo dengan Row dan Tabs`},{slug:`poin5`,judul:`Events dan State`},{slug:`poin6`,judul:`Input dan Output Bisa Menggunakan Komponen yang Sama`},{slug:`poin7`,judul:`Membuat Demo Multi-Step`},{slug:`poin8`,judul:`Mengubah Properties Komponen`},{slug:`poin9`,judul:`Ringkasan`}]},{id:10,judul:`Supervised Fine-Tuning`,poin:[{slug:`poin1`,judul:`Chat Templates`},{slug:`poin2`,judul:`Supervised Fine-Tuning`},{slug:`poin3`,judul:`LoRA (Low-Rank Adaptation)`},{slug:`poin4`,judul:`Evaluation`},{slug:`poin5`,judul:`Kesimpulan`}]}],yc={class:`layout`},bc={class:`sidebar`},xc=[`onClick`],Sc={class:`main`},Cc={__name:`App`,setup(e){let t=No(),n=Wt([]);function r(e){n.value=n.value.includes(e)?n.value.filter(t=>t!==e):[...n.value,e]}return Pn(()=>t.params.id,e=>{let t=Number(e);t&&!n.value.includes(t)&&n.value.push(t)},{immediate:!0}),(e,t)=>{let i=hr(`RouterLink`),a=hr(`RouterView`);return Fi(),Bi(H,null,[t[0]||=W(`header`,{class:`topbar`},`Materi LLM`,-1),W(`div`,yc,[W(`nav`,bc,[(Fi(!0),Bi(H,null,yr(Jt(vc),e=>(Fi(),Bi(`div`,{key:e.id,class:`chapter`},[W(`button`,{class:`chapter-btn`,onClick:t=>r(e.id)},[W(`span`,null,Ce(e.id)+`. `+Ce(e.judul),1),W(`span`,null,Ce(n.value.includes(e.id)?`▾`:`▸`),1)],8,xc),On(W(`div`,null,[(Fi(!0),Bi(H,null,yr(e.poin,t=>(Fi(),Vi(i,{key:t.slug,to:`/chapter/`+e.id+`/`+t.slug,class:`link`},{default:Dn(()=>[Yi(Ce(t.judul),1)]),_:2},1032,[`to`]))),128))],512),[[Pa,n.value.includes(e.id)]])]))),128))]),W(`main`,Sc,[G(a)])])],64)}}},wc=`# 6. Transformer Architecture\r
\r
Chapter menjelaskan tiga jenis arsitektur utama.\r
\r
## 6.1 Encoder-only\r
\r
Encoder-only model hanya menggunakan bagian encoder.\r
\r
Contoh:\r
\r
* BERT;\r
* RoBERTa.\r
\r
Arsitektur ini cocok untuk tugas yang membutuhkan pemahaman terhadap input.\r
\r
Contohnya:\r
\r
* text classification;\r
* sentiment analysis;\r
* NER;\r
* extractive question answering.\r
\r
Karena encoder dapat melihat konteks dari kedua arah, model dapat menggunakan informasi sebelum dan sesudah token yang sedang diproses.\r
\r
---\r
\r
## 6.2 Decoder-only\r
\r
Decoder-only model menggunakan bagian decoder.\r
\r
Contoh:\r
\r
* GPT;\r
* LLaMA.\r
\r
Model jenis ini sangat cocok untuk **text generation**.\r
\r
Cara kerjanya:\r
\r
\`\`\`text\r
Token 1\r
  ↓\r
Prediksi Token 2\r
  ↓\r
Prediksi Token 3\r
  ↓\r
Prediksi Token 4\r
  ↓\r
...\r
\`\`\`\r
\r
Model hanya menggunakan token sebelumnya untuk memprediksi token berikutnya.\r
\r
Pendekatan ini disebut **causal language modeling (CLM)**.\r
\r
---\r
\r
## 6.3 Encoder-decoder\r
\r
Encoder-decoder menggunakan kedua bagian:\r
\r
\`\`\`text\r
Input\r
 ↓\r
Encoder\r
 ↓\r
Representation\r
 ↓\r
Decoder\r
 ↓\r
Output\r
\`\`\`\r
\r
Model ini cocok ketika input perlu diubah menjadi output lain.\r
\r
Contoh:\r
\r
* translation;\r
* summarization;\r
* sequence-to-sequence tasks.\r
\r
Contoh model:\r
\r
* BART;\r
* T5;\r
* mBART;\r
* Marian.\r
\r
---\r
\r
## 6.4 Masked Language Modeling\r
\r
Model encoder seperti BERT dapat dilatih menggunakan **Masked Language Modeling (MLM)**.\r
\r
Contoh:\r
\r
\`\`\`text\r
I love [MASK].\r
\`\`\`\r
\r
Model harus memprediksi kata yang hilang.\r
\r
Model menggunakan informasi dari sisi kiri dan kanan.\r
\r
\`\`\`text\r
I love [MASK] very much\r
      ↑\r
  melihat konteks\r
  kiri + kanan\r
\`\`\`\r
\r
Tujuannya adalah membuat model memahami konteks secara bidirectional.\r
\r
---\r
\r
## 6.5 Causal Language Modeling\r
\r
Model decoder seperti GPT menggunakan **Causal Language Modeling (CLM)**.\r
\r
Contoh:\r
\r
\`\`\`text\r
I love\r
\`\`\`\r
\r
Model memprediksi:\r
\r
\`\`\`text\r
NLP\r
\`\`\`\r
\r
Kemudian:\r
\r
\`\`\`text\r
I love NLP\r
\`\`\`\r
\r
Model memprediksi token berikutnya.\r
\r
Model tidak boleh menggunakan token masa depan ketika memprediksi token saat ini.\r
\r
---\r
\r
## 6.6 Pretraining → Fine-tuning\r
\r
Salah satu konsep penting dari Transformer adalah model dapat dipretrain terlebih dahulu.\r
\r
Kemudian model yang sudah memiliki pengetahuan umum tersebut dapat digunakan untuk task tertentu.\r
\r
Contohnya:\r
\r
\`\`\`text\r
Large Dataset\r
     ↓\r
Pretraining\r
     ↓\r
Pretrained Model\r
     ↓\r
Fine-tuning\r
     ↓\r
Specific Task\r
\`\`\`\r
\r
Hal ini membuat pengembangan model untuk task tertentu menjadi jauh lebih efisien dibandingkan melatih model dari awal.\r
\r
---\r
\r
## 6.7 Arsitektur dan task\r
\r
Secara sederhana:\r
\r
| Arsitektur      | Cocok untuk                   | Contoh        |\r
| --------------- | ----------------------------- | ------------- |\r
| Encoder-only    | Memahami/menganalisis input   | BERT, RoBERTa |\r
| Decoder-only    | Menghasilkan teks             | GPT, LLaMA    |\r
| Encoder-decoder | Mengubah input menjadi output | T5, BART      |\r
\r
Contoh pemetaan:\r
\r
* Sentiment → Encoder\r
* NER → Encoder\r
* Extractive QA → Encoder\r
* Text Generation → Decoder\r
* Translation → Encoder-decoder\r
* Summarization → Encoder-decoder\r
* Conversational AI → Decoder\r
\r
Pemilihan arsitektur bergantung pada karakteristik task: apakah kita perlu **memahami input**, **menghasilkan teks**, atau **mengubah satu sequence menjadi sequence lainnya**.\r
\r
---\r
`,Tc=`# 8. Bias and Limitations\r
\r
Walaupun Transformer dan LLM memiliki kemampuan besar, model tetap memiliki keterbatasan.\r
\r
## 8.1 Bias\r
\r
Model belajar dari data yang digunakan selama training.\r
\r
Jika terdapat bias dalam data, model dapat mempelajari dan mereproduksi bias tersebut.\r
\r
Karena itu, output model tidak selalu bebas dari bias.\r
\r
Bias dapat muncul dalam berbagai bentuk, misalnya asosiasi tertentu antara kata, kelompok, atau karakteristik tertentu.\r
\r
---\r
\r
## 8.2 Fine-tuning tidak otomatis menghilangkan bias\r
\r
Fine-tuning dapat membuat model lebih sesuai dengan task tertentu.\r
\r
Namun fine-tuning tidak berarti seluruh bias yang sudah dipelajari model akan otomatis hilang.\r
\r
Model tetap membawa pengetahuan dan pola yang diperoleh selama pretraining.\r
\r
Karena itu, evaluasi terhadap model tetap diperlukan setelah fine-tuning.\r
\r
---\r
\r
## 8.3 Hallucination\r
\r
LLM dapat menghasilkan informasi yang terdengar benar tetapi sebenarnya tidak sesuai dengan fakta atau context yang tersedia.\r
\r
Hal ini dikenal sebagai **hallucination**.\r
\r
Karena model pada dasarnya melakukan prediksi token berdasarkan pola yang dipelajari, output yang terlihat meyakinkan tidak selalu berarti informasi tersebut benar.\r
\r
---\r
\r
## 8.4 Context limitation\r
\r
Model memiliki batas context.\r
\r
Semakin panjang context yang diberikan:\r
\r
* semakin banyak informasi yang harus diproses;\r
* kebutuhan memory meningkat;\r
* processing dapat menjadi lebih mahal.\r
\r
Materi inference menekankan bahwa peningkatan context length memiliki konsekuensi terhadap memory dan processing performance.\r
\r
---\r
\r
## 8.5 Computational Cost\r
\r
LLM membutuhkan resource besar terutama pada:\r
\r
* training;\r
* inference;\r
* memory;\r
* GPU/VRAM.\r
\r
Pretraining membutuhkan dataset besar dan dapat memerlukan waktu yang sangat lama.\r
\r
Fine-tuning lebih murah dibandingkan pretraining, tetapi inference tetap dapat membutuhkan resource yang signifikan tergantung ukuran model dan workload.\r
\r
---\r
`,Ec=`# 4. Bagaimana Transformer bekerja?\r
\r
## 4.1 Attentiom\r
\r
Salah satu komponen terpenting adalah melalui dengan **attention mechanism**.\r
\r
Ide sederhananya:\r
\r
> Model tidak memberikan perhatian yang sama kepada semua kata ketika memproses suatu kata.\r
\r
Model akan memperhatikan kata-kata yang paling relevan dengan konteks yang sedang diproses.\r
\r
Contoh:\r
\r
> "You like this course."\r
\r
ketika menerjemahkan kata **like**, model perlu memperhatikan kata **you** karena subject memengaruhi bentuk kata kerja dalam bahasa tujuan.\r
\r
Ketika menerjemahkan **this**, model juga perlu memperhatikan **course**, karena kata tersebut dapat memengaruhi bentuk terjemahannya.\r
\r
Jadi makna suatu kata tidak hanya bergantung pada kata itu sendiri, tetapi juga pada kata-kata lain di sekitarnya.\r
\r
---`,Dc=`# 7. Deep Dive into Text Generation / LLM Inference\r
\r
Bagian ini berfokus pada bagaimana LLM menghasilkan teks ketika model sudah selesai dilatih.\r
\r
## 7.1 Apa itu inference?\r
\r
**Inference** adalah proses menggunakan model yang sudah dilatih untuk menghasilkan output berdasarkan input.\r
\r
Contoh:\r
\r
\`\`\`text\r
Prompt\r
 ↓\r
LLM\r
 ↓\r
Prediksi token\r
 ↓\r
Output\r
\`\`\`\r
\r
LLM tidak langsung menghasilkan seluruh jawaban sekaligus.\r
\r
Model menghasilkan token secara bertahap.\r
\r
---\r
\r
## 7.2 Attention dalam inference\r
\r
Attention membantu model menentukan informasi mana yang relevan ketika memprediksi token berikutnya.\r
\r
Misalnya:\r
\r
> "The capital of France is ..."\r
\r
Model perlu memperhatikan kata:\r
\r
* capital;\r
* France.\r
\r
Informasi tersebut membantu model memprediksi:\r
\r
> Paris\r
\r
Jadi attention membantu model mempertahankan konteks ketika menghasilkan teks.\r
\r
---\r
\r
## 7.3 Context Length\r
\r
LLM bekerja dengan **context** yang memiliki batas tertentu.\r
\r
Context dapat berisi:\r
\r
* prompt;\r
* percakapan sebelumnya;\r
* dokumen;\r
* token-token yang sudah dihasilkan.\r
\r
Semakin panjang context, semakin besar informasi yang harus diproses oleh model.\r
\r
Namun context yang lebih panjang juga memiliki konsekuensi terhadap:\r
\r
* memory usage;\r
* processing time;\r
* kebutuhan VRAM.\r
\r
---\r
\r
## 7.4 Dua tahap utama inference\r
\r
Proses inference dibagi menjadi:\r
\r
1. **Prefill**\r
2. **Decode**\r
\r
### Prefill\r
\r
Prefill merupakan tahap ketika model memproses seluruh input awal.\r
\r
Secara sederhana:\r
\r
\`\`\`text\r
Prompt\r
 ↓\r
Tokenization\r
 ↓\r
Embedding\r
 ↓\r
Transformer processing\r
 ↓\r
Context representation\r
\`\`\`\r
\r
Tahap ini memproses token input sebelum model mulai menghasilkan output.\r
\r
### Decode\r
\r
Setelah prefill selesai, model mulai menghasilkan output.\r
\r
Token dihasilkan satu per satu:\r
\r
\`\`\`text\r
Token 1\r
 ↓\r
Token 2\r
 ↓\r
Token 3\r
 ↓\r
Token 4\r
 ↓\r
...\r
\`\`\`\r
\r
Setiap token baru bergantung pada token-token sebelumnya.\r
\r
Inilah yang disebut proses **autoregressive**.\r
\r
---\r
\r
## 7.5 Token Selection\r
\r
Ketika model ingin menghasilkan token berikutnya, model menghasilkan nilai probabilitas/logits untuk token-token yang tersedia dalam vocabulary.\r
\r
Secara sederhana:\r
\r
\`\`\`text\r
Model\r
 ↓\r
Probabilities\r
 ↓\r
Token Selection\r
 ↓\r
Next Token\r
\`\`\`\r
\r
Misalnya model memperkirakan:\r
\r
\`\`\`text\r
"Paris"     70%\r
"London"    10%\r
"Berlin"     5%\r
"Rome"       3%\r
...\r
\`\`\`\r
\r
Sistem kemudian menentukan token mana yang akan dipilih berdasarkan strategi decoding/sampling yang digunakan.\r
\r
---\r
\r
## 7.6 Sampling Strategies\r
\r
Strategi sampling digunakan untuk mengontrol bagaimana token berikutnya dipilih.\r
\r
Beberapa konsep yang dibahas:\r
\r
### Temperature\r
\r
Temperature memengaruhi tingkat variasi dalam pemilihan token.\r
\r
Secara konseptual:\r
\r
* temperature rendah → output cenderung lebih deterministik;\r
* temperature lebih tinggi → pilihan token lebih beragam.\r
\r
---\r
\r
### Top-k\r
\r
Top-k membatasi pilihan token hanya pada sejumlah kandidat dengan probabilitas tertinggi.\r
\r
Contoh:\r
\r
\`\`\`text\r
Vocabulary = 50.000 token\r
\r
Top-k = 10\r
\`\`\`\r
\r
Maka pemilihan hanya dilakukan dari 10 kandidat teratas.\r
\r
---\r
\r
### Top-p\r
\r
Top-p menggunakan probabilitas kumulatif untuk menentukan kumpulan token kandidat.\r
\r
Dengan demikian, jumlah kandidat dapat berubah tergantung distribusi probabilitas.\r
\r
---\r
\r
## 7.7 Mengontrol Repetition\r
\r
LLM dapat mengalami pengulangan kata atau frasa.\r
\r
Materi juga membahas:\r
\r
### Presence Penalty\r
\r
Memberikan penalty terhadap token yang sudah pernah muncul.\r
\r
Tujuannya mengurangi kecenderungan model menggunakan token yang sama.\r
\r
### Frequency Penalty\r
\r
Penalty dipengaruhi oleh seberapa sering token tersebut sudah digunakan.\r
\r
Semakin sering token muncul, semakin besar penalti yang diberikan.\r
\r
Keduanya digunakan untuk mendorong output agar tidak terlalu repetitif.\r
\r
---\r
\r
## 7.8 Mengontrol panjang output\r
\r
Panjang output dapat dikontrol menggunakan:\r
\r
### Token limits\r
\r
Menentukan batas minimum atau maksimum token.\r
\r
### Stop sequences\r
\r
Menentukan pola tertentu yang menyebabkan generation berhenti.\r
\r
### End-of-sequence (EOS)\r
\r
Model dapat berhenti ketika menghasilkan token khusus yang menandakan akhir sequence.\r
\r
---\r
\r
## 7.9 Beam Search\r
\r
Selain sampling, materi juga membahas **beam search**.\r
\r
Alih-alih hanya memilih satu kemungkinan token, beam search mempertahankan beberapa kandidat sequence sekaligus.\r
\r
Secara sederhana:\r
\r
\`\`\`text\r
             ┌─ Candidate A\r
Input ───────┼─ Candidate B\r
             ├─ Candidate C\r
             └─ Candidate D\r
                    ↓\r
             pilih kandidat\r
             paling menjanjikan\r
\`\`\`\r
\r
Proses tersebut dilakukan berulang kali sampai menghasilkan sequence akhir.\r
\r
Keuntungannya adalah dapat mempertimbangkan beberapa kemungkinan sequence sekaligus, tetapi membutuhkan resource komputasi lebih besar dibandingkan strategi yang lebih sederhana.\r
\r
---\r
\r
## 7.10 Performance Metrics\r
\r
Untuk deployment LLM, beberapa metrik penting adalah:\r
\r
### Time to First Token (TTFT)\r
\r
Waktu yang dibutuhkan sampai token pertama muncul.\r
\r
Metrik ini berkaitan erat dengan pengalaman pengguna dan dipengaruhi oleh proses prefill.\r
\r
### Time Per Output Token (TPOT)\r
\r
Waktu yang diperlukan untuk menghasilkan token-token berikutnya.\r
\r
### Throughput\r
\r
Jumlah request yang dapat diproses dalam periode tertentu.\r
\r
Throughput penting untuk sistem yang melayani banyak pengguna.\r
\r
### VRAM Usage\r
\r
Jumlah memory GPU yang dibutuhkan.\r
\r
VRAM dapat menjadi salah satu batasan utama ketika menjalankan LLM.\r
\r
---\r
\r
## 7.11 KV Cache\r
\r
Salah satu optimisasi penting dalam inference adalah **KV Cache**.\r
\r
Tanpa caching, model harus melakukan perhitungan yang berulang terhadap informasi sebelumnya.\r
\r
KV Cache menyimpan hasil perhitungan tertentu sehingga dapat digunakan kembali.\r
\r
Manfaatnya:\r
\r
* mengurangi perhitungan berulang;\r
* meningkatkan kecepatan generation;\r
* membantu membuat long-context generation lebih praktis.\r
\r
Trade-off-nya adalah penggunaan memory tambahan.\r
\r
---\r
`,Oc=`## Introduction\r
### 1.1 Apa yang dimaksud dengan NLP?\r
Natural Language Processing (NLP) adalah bidang yang berfokus pada bagaimana komputer dapat memahami, memproses, serta menghasilkan bahasa yang serupa seperti manusia.\r
\r
Dari keragaman bahasa manusia memiliki banyak sekali karakteristik yang kompleks karena satu kata atau kalimat dapat memiliki makna yang berbeda tergantung konteks dan kondisinya.\r
\r
contoh ketika ketika menyebutkan\r
> "I went to the bank"\r
\r
kata **bank** dapat bermakna sebagai sarana keuangan atau tempat di tepi sungai. Oleh karena itu NLP Harus memahami konteks untuk menentukan makna yang tepat.\r
\r
NLP seringkali digunakan dalam berbagai aplikasi seperti:\r
* klasifikasi teks\r
* analisis sentimen\r
* penerjemahan bahasa\r
* summarization\r
* question answering\r
* named entity recognition\r
* text generation\r
* chatbot\r
* speech recognition\r
\r
### 1.2 NLP kearah Large Language Models\r
\r
Perkembangan NLP menghasilkan model bahasa dengan kemampuan yang semakib besar.\r
\r
**Large Language Model (LLM)** merupakan model bahasa berukuran besar yang dilatih menggunakan data dalam jumlah besar untuk mempelajar pola bahasa.\r
\r
Model tersebut mempelajari hubungan statistik anatara token-token dalam teks sehingga dapat digunakan untuk:\r
\r
* Memahami teks\r
* Memprediksi token berikutnya\r
* Menghasilkan teks\r
* Menjawab pertanyaan\r
* Melakukan berbagai tugas bahasa\r
\r
Salah satu perkembangan penting dalam LLM adalah penggunaan arsitektur **Transformer**.\r
\r
### 1.3 Mengapa Transformer penting?\r
\r
Transformer awalnya diperkenalkan untuk tugas **Machine Translation**, tetapi kemudian digunakan untuk berbagai macam tugas AI.\r
\r
Transformer menjadi dasar bagi banyak model terkenal seperti:\r
\r
* BERT\r
* GPT\r
* GPT-2\r
* BART\r
* T5\r
* dan berbagai model Transformer lainnya.\r
\r
Hugging Face menyediakan library **Transformers** untuk menggunakan model-model tersebut.\r
\r
Selain itu, **Model Hub** yang menyediakan berbagai model pretrained yang dapat digunakan kembali.\r
\r
### 1.4 Pretraining dan Fine-tuning\r
\r
Konsep ini merupakan bagian dari konsep **transfer learning**.\r
\r
Terdapat dua tahapan penting:\r
\r
**Pretraining**\r
\r
Model dilatih dari awal menggunakan dataset yang sangat besar dengan tujuan membuat model mempelajari pola umum dari data.\r
\r
Pretraining membutuhkan:\r
\r
* Data yang sangat besar\r
* Waktu komputasi yang besar\r
* Sumber daya yang besar\r
* Biaya yang besar\r
\r
**Fine-Tuning**\r
\r
Setelah model pretrained tersedia, model dapat dilatih kembali menggunakan dataset yang lebih spesifik sesuai kebutuhan.\r
\r
Sebagai contoh:\r
\r
> Model pretrained bahasa Inggris -> Fine-Tuning menggunakan dataset artikel ilmiah -> model menjadi lebih sesuai untuk domain ilmiah.\r
\r
Keuntungan fine-tuning:\r
* Membutuhkan data lebih sedikit dibandingkan dengan pretraining\r
* Waktu training lebih singkat\r
* Biaya lebih rendah\r
* Kebutuhan komputasi lebih rendah\r
* Dapat menghasilkan model yang lebih sesuai dengan tugas tertentu\r
\r
Dengan demikian, daripada selalu membuat model dari awal kita dapat menggunakan model pretrained kemudian menyesuaikan dengan kebutuhan.`,kc=`# 2. Natural Language Processing and Large Language Models\r
\r
## 2.1 Berbagai tugas NLP\r
\r
Transformer dapat digunakan untuk banyak tugas NLP.\r
\r
### Text Classification\r
\r
Model memberikan kategori terhadap sebuah teks.\r
\r
Contoh:\r
\r
> "OMG i love programming"\r
\r
Pada output akhir model memberikan:\r
\r
> POSITIVE\r
\r
Contoh penggunaan:\r
\r
* Sentiment Analysis;\r
* Klasifikasi Topik;\r
* Spam detection\r
\r
---\r
\r
### Token Classification\r
\r
Berbeda dari yang sebelumnya dengan text classification, **Token Classification memberikan label terhadap setiap token**.\r
\r
Salah satu contohnya adalah **Named Entity Recognition (NER)**.\r
\r
Contohnya:\r
\r
> "My cat working as programmer in Indonesia".\r
\r
Model dapat mengidentifikasi sebagai:\r
\r
* Cat -> Tokoh utama/Person/Animal\r
* Programmer -> Profesion/Pekerjaan\r
* Indonesia -> Location\r
\r
Model juga dapat melakukan proses grouping terhadap beberapa token yang sebenarnya merupakan satu entity.\r
\r
Misalnya:\r
\r
> Hugging + Face\r
\r
Digabung menjadi:\r
\r
> Hugging Face -> ORG\r
\r
Hal ini berkaitan dengan proses tokenization karena satu kata dapat dipecah menjadi beberapa token.\r
\r
---\r
\r
### Question Answering\r
\r
Question Answering dapat digunakan untuk menemukan jawaban dari sebuah pertanyaan berdasarkan **context** tertentu.\r
\r
Contoh:\r
\r
**Question:**\r
\r
> Where do I work?\r
\r
**Context:**\r
\r
> My cat working as programmer in Indonesia.\r
\r
Output:\r
\r
> Indonesia\r
\r
Oleh karena itu model question ini akan menjawab berdasarkan context dan bukan membuat dengan jawaban yang baru.\r
\r
---\r
\r
### Summarization\r
\r
Proses merubah teks panjang menjadi teks yang lebih pendek dengan tetapp mempertahankan informasi penting.\r
\r
Tujuan utamanya adalah bukan hanya memotong jumlah kata, tetapi mempertahankan informasi penting dari teks asli.\r
\r
---\r
\r
### Translation\r
\r
Transformer juga dapat digunakan untuk menerjemahkan teks dari suatu bahasa ke bahasa yang lainnya.\r
\r
Contoh:\r
\r
> "I just recopy material LLM from Hugging Face just to be understand material with typing"\r
\r
menjadi:\r
\r
> "Saya hanya melakukan ketik ulang materi dari Hugging Face hanya untuk memahami materi dengan mengetik"\r
\r
---\r
\r
### Text Generation\r
\r
Merupakan proses menghasilkan teks berdasarkan input yang diberikan.\r
\r
Example:\r
\r
> "I will make ... cake tommorrow"\r
\r
Model dapat melanjutkan kalimat tersebut sebagai:\r
\r
> "I will make a strawberry cake tommorrow"\r
\r
Intinya adalah model akan melanjutkan kalimat tersebut dengan memprediksi tokenn berikutnya secara berurutan.\r
\r
---\r
\r
## 2.2 Transformer tidak hanya untuk teks\r
\r
Transformer dapat digunakan untuk untuk\r
\r
### Computer Vision\r
\r
Contohnya:\r
\r
* Image classification\r
* Object detection\r
* Image segmentation\r
* Depth estimation\r
\r
Contoh model\r
* ViT\r
* DETR\r
* Mask2Former\r
* GLPN\r
\r
### Speech dan Audio\r
\r
Transformer juga dapat digunakan untuk:\r
\r
* Speech Recognition\r
* Audio Procesing\r
\r
Salah satuu contoh model yang ditujukan adalah **Whisper** untuk automatic speech recognition.\r
\r
Dengan demikian transformer merupakan arsitektur yang dapat diterapkan pada berbagai jenis data atau **modalities** bukan hanya teks.\r
\r
---\r
`,Ac=`# 5. How Transformers Slove Tasks\r
\r
Transformer tidak langsung menghasilkan semua jenis output dengan cara yang sama.\r
\r
Arsitektur dasar dapat digunakan kemudian ditambahkan komponen khusus sesuai task.\r
\r
## 5.1 Text Classification\r
Untuk text classification model seperti BERT dapat menggunakan **classification head**.\r
\r
Alurnya:\r
\r
\`\`\`text\r
Input text\r
    ↓\r
Tokenizer\r
    ↓\r
BERT\r
    ↓\r
Hidden states\r
    ↓\r
Classification head\r
    ↓\r
Logits\r
    ↓\r
Class\r
\`\`\`\r
\r
Classification head merupakan layer tambahan yang menggunakan hidden states dari BERT untuk menghasilan prediksi kategori.\r
\r
---\r
\r
## 5.2 Token Classification\r
\r
Untuk token classification, setiap token membutuhkan prediksi masing-masing.\r
\r
Contoh pada NER:\r
\r
\`\`\`text\r
John works at Hugging Face\r
 ↓\r
PER  O      O   ORG\r
\`\`\`\r
\r
Model menggunakan **token classification head** untuk menghasilkan label untuk setiap token.\r
\r
---\r
\r
## 5.3 Question Answering\r
\r
Pada extractive question answeing, model mencari posisi awal dan akhir jawaban dalam context.\r
\r
Secara sederhana:\r
\r
\`\`\`text\r
Context\r
   ↓\r
Transformer\r
   ↓\r
Start position\r
+\r
End position\r
   ↓\r
Answer span\r
\`\`\`\r
\r
Jadi model tidak harus menghasilkan kalimat baru.\r
\r
Model menentukan bagian mana dari context yang merupakan jawaban.\r
\r
---\r
\r
## 5.4 Summarization\r
\r
Summarization memiliki pola:\r
\r
\`\`\`text\r
Long input\r
    ↓\r
Encoder\r
    ↓\r
Representation\r
    ↓\r
Decoder\r
    ↓\r
Shorter output\r
\`\`\`\r
\r
Model seperti **BART** dan **T5** dapat digunakan untuk pola sequence-to-sequence seperti summarization.\r
\r
---\r
\r
## 5.5 Text Generation\r
\r
Pada text generation, model menghasilkan token secara bertahap.\r
\r
Misalnya:\r
\r
\`\`\`text\r
Input:\r
"I like"\r
\r
Prediction:\r
"I like NLP"\r
\r
Next:\r
"I like NLP because..."\r
\r
Next:\r
"I like NLP because it..."\r
\`\`\`\r
\r
Model terus memprediksi token berikutnya berdasarkan token-token sebelumnya.\r
\r
Pola ini disebut **autoregressive generation**.\r
\r
---\r
\r
`,jc=`# 9. Summary\r
\r
Chapter 1 memberikan dasar untuk memahami hubungan antara **NLP, Transformer, dan LLM**.\r
\r
Urutan konsep yang dapat digunakan untuk memahami chapter ini adalah:\r
\r
\`\`\`text\r
Natural Language Processing\r
          ↓\r
Language Models\r
          ↓\r
Transformer\r
          ↓\r
Attention\r
          ↓\r
Transformer Architecture\r
          ↓\r
Pretraining\r
          ↓\r
Fine-tuning\r
          ↓\r
Task-specific Model\r
          ↓\r
Inference\r
          ↓\r
Text Generation\r
\`\`\`\r
\r
## Hal-hal utama yang perlu diingat\r
\r
### 1. NLP\r
\r
NLP memungkinkan komputer memproses bahasa manusia dan mencakup berbagai task seperti classification, NER, question answering, summarization, translation, dan generation.\r
\r
### 2. Transformer\r
\r
Transformer merupakan arsitektur yang menggunakan attention untuk memproses hubungan antar-token dan konteks.\r
\r
### 3. Attention\r
\r
Attention memungkinkan model memberikan perhatian lebih terhadap bagian input yang relevan ketika memproses suatu token.\r
\r
### 4. Tiga arsitektur utama\r
\r
\`\`\`text\r
Encoder-only\r
→ memahami/menganalisis input\r
\r
Decoder-only\r
→ menghasilkan teks\r
\r
Encoder-decoder\r
→ mengubah input menjadi output\r
\`\`\`\r
\r
### 5. Pretraining dan Fine-tuning\r
\r
Model dapat dipretrain menggunakan data dalam jumlah besar kemudian disesuaikan dengan task tertentu menggunakan fine-tuning.\r
\r
### 6. Inference\r
\r
Inference adalah proses menggunakan model yang telah dilatih untuk menghasilkan output.\r
\r
Pada LLM generatif, proses utamanya dapat dipahami melalui:\r
\r
\`\`\`text\r
Prefill → Decode → Token Selection → Output\r
\`\`\`\r
\r
### 7. Generation\r
\r
LLM menghasilkan teks secara autoregressive, yaitu memprediksi token berikutnya berdasarkan token-token yang telah tersedia.\r
\r
### 8. Optimization\r
\r
Inference dapat dioptimalkan menggunakan teknik seperti **KV Cache**, sedangkan performanya dapat dievaluasi menggunakan:\r
\r
* TTFT;\r
* TPOT;\r
* throughput;\r
* VRAM usage.\r
\r
### 9. Limitations\r
\r
LLM tetap memiliki keterbatasan seperti:\r
\r
* bias;\r
* hallucination;\r
* context limitation;\r
* computational cost;\r
* kebutuhan memory dan resource.\r
\r
---\r
\r
## Kesimpulan\r
\r
Chapter 1 pada dasarnya membangun pemahaman dari level paling dasar sampai proses LLM menghasilkan teks.\r
\r
Kita mulai dari **NLP dan task yang dapat dilakukan**, kemudian memahami bahwa banyak task tersebut dapat diselesaikan menggunakan **Transformer**.\r
\r
Transformer menggunakan **attention** untuk memahami hubungan antar-token. Dari sini muncul tiga bentuk arsitektur utama, yaitu **encoder-only, decoder-only, dan encoder-decoder**, yang masing-masing memiliki karakteristik dan penggunaan berbeda.\r
\r
Model kemudian dapat melalui proses **pretraining** untuk memperoleh pengetahuan umum dan **fine-tuning** untuk menyesuaikan model dengan task tertentu.\r
\r
Untuk LLM generatif, proses penggunaan model disebut **inference**, yang secara sederhana terdiri dari **prefill dan decode**. Pada tahap decode, model menghasilkan token satu per satu dengan menggunakan berbagai strategi seperti temperature, top-k, top-p, penalties, dan beam search.\r
\r
Namun, kemampuan tersebut tetap memiliki batas. Model dapat membawa **bias**, menghasilkan **hallucination**, memiliki keterbatasan **context**, serta membutuhkan resource komputasi yang besar.\r
\r
Dengan memahami konsep-konsep tersebut, kita memiliki dasar untuk mempelajari bagian berikutnya dari Hugging Face LLM Course, terutama mengenai bagaimana input teks diproses lebih detail melalui **tokenization**, bagaimana model direpresentasikan, dan bagaimana Transformer bekerja pada level yang lebih dalam.\r
`,Mc=`# 3. Apa saja yang bisa dilakukan?\r
\r
## 3.1 \`pipeline()\`\r
\r
Hugging Face menyediakan fungsi \`pipeline()\` untuk mempermudah penggunaan pretrained Transformer.\r
\r
Secara sederhana:\r
\r
\`\`\`text\r
Input\r
↓\r
Preprocessing\r
↓\r
Transformer Model\r
↓\r
Post-processing\r
↓\r
Output\r
\`\`\`\r
\r
\`pipeline()\` menggabungkan proses-proses teserbut sehingga pengguna tidak harus menangani setiap bagian secara manual.\r
\r
Contohnya:\r
\r
\`\`\`python\r
from transformers import pipeline\r
\r
classifier = pipeline("sentiment-analysis")\r
\r
classifier("I've been waiting for a HuggingFace course my whole life.")\r
\r
Model akan menghasilkan prediksi seperti:\r
\`\`\`text\r
POSITIVE\r
\`\`\`\r
\r
Dengan 'pipeline()', pengguna dapat langsung mencoba model pretrained untuk berbagai task.\r
\r
---\r
\r
## 3.2 Tiga proses utama dalam pipeline\r
\r
Ketika sebuah input diberikan kepada pipeline, terdapat tiga tahap utama:\r
\r
### 1. Preprocessing\r
\r
Input diubah menjadi format yang dapat dipahami model.\r
\r
Untuk teks, proses ini mencakup tokenization.\r
\r
Contoh:\r
\`\`\`text\r
"I love NLP"\r
\`\`\`\r
\r
diubah menjadi representasi token.\r
\r
### 2. Model Processing\r
\r
Token yang telah diproses diberikan kepada Transformer.\r
\r
Model kemudian menghasilkan representasi atau prediksi.\r
\r
### 3. Post-processing\r
\r
Output mentah dari model diubah menjadi format yang lebih mudah dipahami manusia.\r
\r
Contohnya:\r
\r
\`\`\`text\r
label = POSITIVE\r
score = 0.95\r
\`\`\`\r
\r
Jadi pipeline berfungsi sebgaai penghubung antara input manusia dengan proses internal model.\r
\r
---\r
\r
## 3.3 Contoh kemampuan Transformer\r
\r
Chapter memberikan beberapa contoh kemampuan Transformer:\r
\r
| Task                 | Fungsi                          |\r
| -------------------- | ------------------------------- |\r
| Sentiment Analysis   | Menentukan sentimen teks        |\r
| Text Classification  | Mengklasifikasikan teks         |\r
| Fill Mask            | Mengisi bagian teks yang kosong |\r
| NER                  | Menemukan entity dalam teks     |\r
| Question Answering   | Menemukan jawaban dari context  |\r
| Summarization        | Membuat ringkasan               |\r
| Translation          | Menerjemahkan teks              |\r
| Text Generation      | Menghasilkan teks               |\r
| Image Classification | Mengklasifikasikan gambar       |\r
| Speech Recognition   | Mengubah suara menjadi teks     |\r
\r
Jadi satu arsitektur Transformer dapat digunakan untuk berbagai macam kebutuhan dengan model dan konfigurasi yang berbeda.\r
\r
---\r
\r
`,Nc=`Supervised Fine-Tuning (SFT) merupakan metode untuk melakukan fine-tuning language model pada berbagai tugas secara bersamaan. Berbeda dengan fine-tuning yang hanya berfokus pada satu tugas, SFT memungkinkan model menjadi lebih fleksibel untuk menangani berbagai kebutuhan.\r
\r
---\r
\r
\r
## 1.1 Introduction\r
\r
Chat template digunakan untuk mengatur struktur interaksi antara pengguna dan language model.\r
\r
Chat template penting untuk:\r
\r
* Menjaga struktur percakapan tetap konsisten.\r
* Memastikan setiap pesan memiliki role yang tepat.\r
* Mengelola konteks percakapan dalam beberapa turn.\r
* Mendukung fitur seperti tool use dan function calling.\r
\r
Struktur pesan umumnya menggunakan role seperti:\r
\r
* \`system\`\r
* \`user\`\r
* \`assistant\`\r
* \`tool\`\r
\r
---\r
\r
## 1.2 Base Model vs Instruct Model\r
\r
**Base model** dilatih menggunakan data teks untuk memprediksi token berikutnya.\r
\r
Sementara itu, **instruct model** telah melalui fine-tuning agar dapat mengikuti instruksi dan berinteraksi dalam percakapan.\r
\r
Contohnya:\r
\r
\`\`\`text\r
SmolLM2-135M\r
\`\`\`\r
\r
merupakan base model, sedangkan:\r
\r
\`\`\`text\r
SmolLM2-135M-Instruct\r
\`\`\`\r
\r
merupakan versi yang telah di-instruction-tune.\r
\r
Agar base model dapat digunakan dalam format percakapan, prompt harus disusun menggunakan struktur yang konsisten. Salah satu format yang digunakan adalah **ChatML**.\r
\r
---\r
\r
## 1.3 Contoh Struktur Pesan\r
\r
Contoh percakapan dalam bentuk list Python:\r
\r
\`\`\`python\r
messages = [\r
    {"role": "system", "content": "You are a helpful assistant."},\r
    {"role": "user", "content": "Hello!"},\r
    {"role": "assistant", "content": "Hi! How can I help you today?"},\r
    {"role": "user", "content": "What's the weather?"},\r
]\r
\`\`\`\r
\r
Struktur tersebut kemudian dapat diubah menjadi format yang sesuai dengan chat template model.\r
\r
---\r
\r
## 1.4 Perbedaan Format Chat Template\r
\r
Setiap model dapat menggunakan format template yang berbeda.\r
\r
Contoh format ChatML:\r
\r
\`\`\`text\r
<|im_start|>system\r
You are a helpful assistant.<|im_end|>\r
<|im_start|>user\r
Hello!<|im_end|>\r
<|im_start|>assistant\r
Hi! How can I help you today?<|im_end|>\r
<|im_start|>user\r
What's the weather?<|im_start|>assistant\r
\`\`\`\r
\r
Sedangkan Mistral menggunakan format seperti:\r
\r
\`\`\`text\r
<s>[INST] You are a helpful assistant. [/INST]\r
Hi! How can I help you today?</s>\r
[INST] Hello! [/INST]\r
\`\`\`\r
\r
Perbedaan template dapat meliputi:\r
\r
* Cara system message ditulis.\r
* Penanda awal dan akhir pesan.\r
* Special tokens yang digunakan.\r
* Struktur role dalam percakapan.\r
\r
Karena setiap model dapat memiliki format berbeda, penggunaan template yang salah dapat menyebabkan performa model menjadi buruk atau menghasilkan perilaku yang tidak sesuai.\r
\r
---\r
\r
## 1.5 Menggunakan \`apply_chat_template()\`\r
\r
Library Transformers dapat menangani perbedaan template tersebut melalui tokenizer.\r
\r
\`\`\`python\r
from transformers import AutoTokenizer\r
\r
# These will use different templates automatically\r
mistral_tokenizer = AutoTokenizer.from_pretrained(\r
    "mistralai/Mistral-7B-Instruct-v0.1"\r
)\r
qwen_tokenizer = AutoTokenizer.from_pretrained(\r
    "Qwen/Qwen-7B-Chat"\r
)\r
smol_tokenizer = AutoTokenizer.from_pretrained(\r
    "HuggingFaceTB/SmolLM2-135M-Instruct"\r
)\r
\r
messages = [\r
    {"role": "system", "content": "You are a helpful assistant."},\r
    {"role": "user", "content": "Hello!"},\r
]\r
\r
# Each will format according to its model's template\r
mistral_chat = mistral_tokenizer.apply_chat_template(\r
    messages,\r
    tokenize=False\r
)\r
qwen_chat = qwen_tokenizer.apply_chat_template(\r
    messages,\r
    tokenize=False\r
)\r
smol_chat = smol_tokenizer.apply_chat_template(\r
    messages,\r
    tokenize=False\r
)\r
\`\`\`\r
\r
Dengan \`apply_chat_template()\`, percakapan akan diformat sesuai template yang digunakan tokenizer model.\r
\r
---\r
\r
## 1.6 Advanced Features\r
\r
Chat templates tidak hanya digunakan untuk percakapan sederhana. Template juga dapat digunakan untuk:\r
\r
1. **Tool Use**\r
\r
   * Model berinteraksi dengan tools atau API eksternal.\r
\r
2. **Multimodal Inputs**\r
\r
   * Percakapan dapat berisi gambar, audio, atau media lainnya.\r
\r
3. **Function Calling**\r
\r
   * Model menghasilkan struktur untuk menjalankan fungsi tertentu.\r
\r
4. **Multi-turn Context**\r
\r
   * Model mempertahankan riwayat percakapan.\r
\r
Contoh percakapan multimodal:\r
\r
\`\`\`python\r
messages = [\r
    {\r
        "role": "system",\r
        "content": "You are a helpful vision assistant that can analyze images.",\r
    },\r
    {\r
        "role": "user",\r
        "content": [\r
            {"type": "text", "text": "What's in this image?"},\r
            {\r
                "type": "image",\r
                "image_url": "https://example.com/image.jpg",\r
            },\r
        ],\r
    },\r
]\r
\`\`\`\r
\r
Contoh penggunaan tool:\r
\r
\`\`\`python\r
messages = [\r
    {\r
        "role": "system",\r
        "content": "You are an AI assistant that can use tools. Available tools: calculator, weather_api",\r
    },\r
    {\r
        "role": "user",\r
        "content": "What's 123 * 456 and is it raining in Paris?",\r
    },\r
    {\r
        "role": "assistant",\r
        "content": "Let me help you with that.",\r
        "tool_calls": [\r
            {\r
                "tool": "calculator",\r
                "parameters": {\r
                    "operation": "multiply",\r
                    "x": 123,\r
                    "y": 456,\r
                },\r
            },\r
            {\r
                "tool": "weather_api",\r
                "parameters": {\r
                    "city": "Paris",\r
                    "country": "France",\r
                },\r
            },\r
        ],\r
    },\r
    {\r
        "role": "tool",\r
        "tool_name": "calculator",\r
        "content": "56088",\r
    },\r
    {\r
        "role": "tool",\r
        "tool_name": "weather_api",\r
        "content": "{'condition': 'rain', 'temperature': 15}",\r
    },\r
]\r
\`\`\`\r
\r
---\r
\r
## 1.7 Best Practices Chat Templates\r
\r
Beberapa praktik yang perlu diperhatikan:\r
\r
1. Gunakan format template yang konsisten.\r
2. Tentukan role dengan jelas.\r
3. Perhatikan batas token ketika mempertahankan conversation history.\r
4. Gunakan error handling untuk tool calls dan multimodal input.\r
5. Validasi struktur pesan sebelum dikirim ke model.\r
\r
Hal yang perlu dihindari:\r
\r
* Mencampur beberapa format template.\r
* Melebihi token limit karena conversation history terlalu panjang.\r
* Tidak menangani special characters dengan benar.\r
* Tidak melakukan validasi struktur pesan.\r
* Mengabaikan kebutuhan template yang spesifik terhadap model.\r
\r
---\r
\r
## 1.8 Hands-on Exercise\r
\r
Materi memberikan latihan untuk mengubah dataset \`HuggingFaceTB/smoltalk\` menjadi format ChatML.\r
\r
### 1. Load dataset\r
\r
\`\`\`python\r
from datasets import load_dataset\r
\r
dataset = load_dataset("HuggingFaceTB/smoltalk")\r
\`\`\`\r
\r
### 2. Membuat fungsi konversi\r
\r
\`\`\`python\r
def convert_to_chatml(example):\r
    return {\r
        "messages": [\r
            {"role": "user", "content": example["input"]},\r
            {"role": "assistant", "content": example["output"]},\r
        ]\r
    }\r
\`\`\`\r
\r
### 3. Terapkan chat template\r
\r
Setelah struktur \`messages\` dibuat, chat template dapat diterapkan menggunakan tokenizer model yang dipilih.\r
\r
Hal penting yang perlu diperhatikan adalah memastikan format output sesuai dengan kebutuhan model target.\r
\r
---\r
`,Pc=`Supervised Fine-Tuning digunakan untuk mengadaptasi pretrained language model menggunakan dataset yang memiliki contoh atau label tertentu.\r
\r
Pada file sumber, bagian ini hanya disebutkan sebagai salah satu bagian utama Chapter 10 dan diarahkan ke dokumentasi \`SFTTrainer\`. Detail implementasi SFT tidak diberikan dalam materi yang disediakan.\r
\r
Karena itu, bagian ini tidak saya tambahkan dengan materi di luar sumber.\r
\r
---\r
`,Fc=`## 3.1 Pengertian LoRA\r
\r
Fine-tuning LLM berukuran besar membutuhkan resource yang besar.\r
\r
**LoRA (Low-Rank Adaptation)** merupakan teknik parameter-efficient fine-tuning yang memungkinkan kita melakukan fine-tuning dengan jumlah parameter yang lebih sedikit.\r
\r
Konsep utamanya adalah:\r
\r
* Bobot pretrained model tetap dibekukan.\r
* Matriks kecil yang dapat dilatih ditambahkan ke layer model.\r
* Update bobot direpresentasikan menggunakan low-rank matrices.\r
* Jumlah parameter yang harus dilatih menjadi jauh lebih kecil.\r
\r
LoRA biasanya diterapkan pada attention weights.\r
\r
---\r
\r
## 3.2 Cara Kerja LoRA\r
\r
Daripada melakukan update terhadap seluruh parameter model, LoRA menggunakan matriks berukuran lebih kecil untuk merepresentasikan perubahan bobot.\r
\r
Secara sederhana:\r
\r
\`\`\`text\r
Pretrained Model\r
      |\r
      |-- Frozen Weights\r
      |\r
      |-- LoRA Adapter\r
             |\r
             +-- Trainable Parameters\r
\`\`\`\r
\r
Dengan pendekatan tersebut, model dasar tidak perlu dilatih ulang sepenuhnya.\r
\r
Pada saat inference, adapter dapat digabungkan kembali dengan base model sehingga tidak menghasilkan tambahan latency akibat adapter terpisah.\r
\r
---\r
\r
## 3.3 Keuntungan LoRA\r
\r
### Memory Efficiency\r
\r
* Hanya parameter adapter yang perlu dilatih.\r
* Bobot base model tetap frozen.\r
* Base model dapat dimuat menggunakan precision yang lebih rendah.\r
* Fine-tuning model besar dapat dilakukan pada hardware yang lebih terbatas.\r
\r
### Training\r
\r
PEFT/LoRA dapat diintegrasikan dengan mudah.\r
\r
Selain LoRA, tersedia juga **QLoRA**, yang menggunakan quantization untuk mengurangi kebutuhan memory lebih jauh.\r
\r
### Adapter Management\r
\r
Adapter dapat:\r
\r
* Disimpan dalam checkpoint.\r
* Diganti dengan adapter lain.\r
* Digabungkan kembali ke base model.\r
\r
---\r
\r
## 3.4 Loading LoRA Adapter dengan PEFT\r
\r
PEFT menyediakan interface untuk menggunakan berbagai parameter-efficient fine-tuning method, termasuk LoRA.\r
\r
Contoh memuat adapter:\r
\r
\`\`\`python\r
from peft import PeftModel, PeftConfig\r
\r
config = PeftConfig.from_pretrained(\r
    "ybelkada/opt-350m-lora"\r
)\r
\r
model = AutoModelForCausalLM.from_pretrained(\r
    config.base_model_name_or_path\r
)\r
\r
lora_model = PeftModel.from_pretrained(\r
    model,\r
    "ybelkada/opt-350m-lora"\r
)\r
\`\`\`\r
\r
Adapter dapat digunakan tanpa menggabungkannya langsung dengan base model.\r
\r
---\r
\r
## 3.5 LoRA dengan \`SFTTrainer\`\r
\r
\`SFTTrainer\` dari TRL dapat dikombinasikan dengan PEFT untuk melakukan supervised fine-tuning menggunakan LoRA.\r
\r
Alur dasarnya:\r
\r
1. Membuat konfigurasi LoRA.\r
2. Membuat \`SFTTrainer\`.\r
3. Melakukan training.\r
4. Menyimpan adapter.\r
\r
---\r
\r
## 3.6 LoRA Configuration\r
\r
Beberapa parameter penting dalam \`LoraConfig\`:\r
\r
| Parameter        | Fungsi                                  |\r
| ---------------- | --------------------------------------- |\r
| \`r\`              | Rank dari low-rank matrices             |\r
| \`lora_alpha\`     | Scaling factor untuk LoRA               |\r
| \`lora_dropout\`   | Dropout pada LoRA layers                |\r
| \`bias\`           | Menentukan bagaimana bias diperlakukan  |\r
| \`target_modules\` | Menentukan module yang menggunakan LoRA |\r
\r
Contoh konfigurasi:\r
\r
\`\`\`python\r
from peft import LoraConfig\r
\r
# TODO: Configure LoRA parameters\r
# r: rank dimension for LoRA update matrices (smaller = more compression)\r
rank_dimension = 6\r
\r
# lora_alpha: scaling factor for LoRA layers (higher = stronger adaptation)\r
lora_alpha = 8\r
\r
# lora_dropout: dropout probability for LoRA layers (helps prevent overfitting)\r
lora_dropout = 0.05\r
\r
peft_config = LoraConfig(\r
    r=rank_dimension,\r
    lora_alpha=lora_alpha,\r
    lora_dropout=lora_dropout,\r
    bias="none",\r
    target_modules="all-linear",\r
    task_type="CAUSAL_LM",\r
)\r
\`\`\`\r
\r
\`r\` menentukan dimensi low-rank matrices.\r
\r
Semakin kecil rank, semakin sedikit parameter yang perlu dilatih, tetapi kemampuan adapter untuk merepresentasikan perubahan juga dapat berkurang.\r
\r
---\r
\r
## 3.7 Menggunakan \`SFTTrainer\` dengan LoRA\r
\r
Setelah \`LoraConfig\` dibuat, konfigurasi tersebut dapat diberikan kepada \`SFTTrainer\`.\r
\r
\`\`\`python\r
# Create SFTTrainer with LoRA configuration\r
trainer = SFTTrainer(\r
    model=model,\r
    args=args,\r
    train_dataset=dataset["train"],\r
    peft_config=peft_config,\r
    max_seq_length=max_seq_length,\r
    processing_class=tokenizer,\r
)\r
\`\`\`\r
\r
Dengan pendekatan tersebut, training tetap menggunakan SFT tetapi hanya parameter LoRA yang dilatih.\r
\r
---\r
\r
## 3.8 Merging LoRA Adapter\r
\r
Setelah training selesai, adapter dapat digabungkan kembali dengan base model.\r
\r
Tujuannya adalah menghasilkan satu model yang sudah memiliki bobot hasil adaptasi sehingga saat deployment adapter tidak perlu dimuat secara terpisah.\r
\r
Contoh:\r
\r
\`\`\`python\r
import torch\r
from transformers import AutoModelForCausalLM\r
from peft import PeftModel\r
\r
# 1. Load the base model\r
base_model = AutoModelForCausalLM.from_pretrained(\r
    "base_model_name",\r
    torch_dtype=torch.float16,\r
    device_map="auto"\r
)\r
\r
# 2. Load the PEFT model with adapter\r
peft_model = PeftModel.from_pretrained(\r
    base_model,\r
    "path/to/adapter",\r
    torch_dtype=torch.float16\r
)\r
\r
# 3. Merge adapter weights with base model\r
merged_model = peft_model.merge_and_unload()\r
\`\`\`\r
\r
Jika menyimpan model hasil merge, tokenizer juga perlu disimpan:\r
\r
\`\`\`python\r
# Save both model and tokenizer\r
tokenizer = AutoTokenizer.from_pretrained("base_model_name")\r
\r
merged_model.save_pretrained(\r
    "path/to/save/merged_model"\r
)\r
\r
tokenizer.save_pretrained(\r
    "path/to/save/merged_model"\r
)\r
\`\`\`\r
\r
---\r
\r
`,Ic=`Setelah model selesai di-fine-tune menggunakan SFT atau LoRA, model perlu dievaluasi.\r
\r
Evaluasi digunakan untuk mengetahui seberapa baik model bekerja pada tugas yang ditargetkan.\r
\r
Benchmark otomatis dapat digunakan sebagai salah satu cara evaluasi, tetapi hasil benchmark tidak selalu menggambarkan performa model pada penggunaan nyata.\r
\r
---\r
\r
## 4.1 Automatic Benchmarks\r
\r
Automatic benchmark merupakan dataset dan evaluasi terstandarisasi yang memiliki tugas serta metric tertentu.\r
\r
Keuntungannya:\r
\r
* Hasil dapat dibandingkan secara konsisten.\r
* Evaluasi dapat direproduksi.\r
* Kemampuan model dapat diukur pada berbagai tugas.\r
\r
Namun, benchmark tidak selalu merepresentasikan kebutuhan dunia nyata.\r
\r
Model yang mendapatkan hasil baik pada benchmark akademik belum tentu bekerja dengan baik pada domain aplikasi tertentu.\r
\r
---\r
\r
## 4.2 General Knowledge Benchmarks\r
\r
Beberapa benchmark yang digunakan untuk menguji pengetahuan umum:\r
\r
### MMLU\r
\r
**MMLU (Massive Multitask Language Understanding)** menguji pengetahuan pada 57 bidang.\r
\r
### TruthfulQA\r
\r
TruthfulQA digunakan untuk mengevaluasi kecenderungan model dalam menghasilkan jawaban yang benar dan tidak sekadar mengulang miskonsepsi umum.\r
\r
---\r
\r
## 4.3 Reasoning Benchmarks\r
\r
### BBH\r
\r
**Big Bench Hard (BBH)** digunakan untuk tugas yang membutuhkan reasoning dan logical thinking.\r
\r
### GSM8K\r
\r
**GSM8K** berfokus pada kemampuan menyelesaikan persoalan matematika.\r
\r
Keduanya membantu mengukur kemampuan reasoning, tetapi belum tentu mencerminkan semua bentuk reasoning yang dibutuhkan dalam aplikasi nyata.\r
\r
---\r
\r
## 4.4 Language Understanding\r
\r
**HELM** merupakan framework evaluasi yang mencakup berbagai aspek kemampuan language model, seperti:\r
\r
* Commonsense.\r
* World knowledge.\r
* Reasoning.\r
* Language processing.\r
\r
Namun, benchmark seperti ini tetap memiliki keterbatasan ketika digunakan untuk merepresentasikan percakapan alami atau domain tertentu.\r
\r
---\r
\r
## 4.5 Domain-Specific Benchmarks\r
\r
Beberapa benchmark dibuat khusus untuk domain tertentu.\r
\r
### MATH\r
\r
MATH berisi 12.500 masalah matematika yang berasal dari berbagai kompetisi matematika.\r
\r
Materinya mencakup:\r
\r
* Algebra.\r
* Geometry.\r
* Number theory.\r
* Counting.\r
* Probability.\r
\r
Benchmark ini membutuhkan multi-step reasoning dan kemampuan memahami notasi matematika.\r
\r
### HumanEval\r
\r
HumanEval merupakan benchmark untuk kemampuan menghasilkan kode Python.\r
\r
Terdapat 164 programming problems yang menguji apakah kode yang dihasilkan benar-benar dapat menyelesaikan tugas berdasarkan test case.\r
\r
### Alpaca Eval\r
\r
Alpaca Eval digunakan untuk mengevaluasi kualitas instruction-following model.\r
\r
Framework ini menggunakan model lain sebagai judge untuk mengevaluasi output.\r
\r
---\r
\r
# 4.6 Alternative Evaluation Approaches\r
\r
## LLM-as-Judge\r
\r
Satu language model digunakan untuk mengevaluasi output language model lainnya.\r
\r
Pendekatan ini dapat memberikan feedback yang lebih fleksibel dibandingkan metric tradisional, tetapi tetap memiliki bias dan keterbatasan.\r
\r
## Evaluation Arenas\r
\r
Contohnya adalah Chatbot Arena.\r
\r
Pengguna membandingkan output dua model secara anonim dan memberikan preferensi berdasarkan jawaban yang mereka lihat.\r
\r
Pendekatan ini dapat menangkap pola penggunaan nyata, tetapi hasilnya juga dapat dipengaruhi oleh karakteristik pengguna dan distribusi prompt.\r
\r
## Custom Benchmark Suites\r
\r
Organisasi juga dapat membuat benchmark internal yang sesuai dengan kebutuhan mereka sendiri.\r
\r
Contohnya:\r
\r
* Domain-specific knowledge.\r
* Kasus penggunaan nyata.\r
* Edge cases.\r
* Skenario deployment.\r
\r
---\r
\r
# 4.7 Custom Evaluation\r
\r
Benchmark standar sebaiknya bukan satu-satunya metode evaluasi.\r
\r
Pendekatan yang dapat digunakan:\r
\r
1. Mulai dengan benchmark standar sebagai baseline.\r
2. Identifikasi kebutuhan spesifik aplikasi.\r
3. Buat dataset evaluasi yang merepresentasikan penggunaan sebenarnya.\r
4. Gunakan evaluasi berlapis.\r
\r
Evaluasi berlapis dapat terdiri dari:\r
\r
* Automated metrics.\r
* Human evaluation.\r
* Domain expert review.\r
* A/B testing dalam lingkungan terkontrol.\r
\r
---\r
\r
# 4.8 Evaluasi dengan Lighteval\r
\r
\`lighteval\` dapat digunakan untuk mengevaluasi model pada berbagai benchmark.\r
\r
Format task Lighteval:\r
\r
\`\`\`text\r
{suite}|{task}|{num_few_shot}|{auto_reduce}\r
\`\`\`\r
\r
Parameter:\r
\r
| Parameter      | Fungsi                                                 |\r
| -------------- | ------------------------------------------------------ |\r
| \`suite\`        | Benchmark suite, misalnya \`mmlu\` atau \`truthfulqa\`     |\r
| \`task\`         | Task tertentu dalam suite                              |\r
| \`num_few_shot\` | Jumlah contoh yang dimasukkan ke prompt                |\r
| \`auto_reduce\`  | Mengurangi contoh few-shot jika prompt terlalu panjang |\r
\r
Contoh:\r
\r
\`\`\`text\r
mmlu|abstract_algebra|0|0\r
\`\`\`\r
\r
Artinya model dievaluasi pada task \`abstract_algebra\` dari MMLU menggunakan zero-shot.\r
\r
---\r
\r
## 4.9 Contoh Evaluation Pipeline\r
\r
Contoh evaluasi model pada beberapa task yang berhubungan dengan bidang medis:\r
\r
\`\`\`bash\r
lighteval accelerate \\\r
    "pretrained=your-model-name" \\\r
    "mmlu|anatomy|0|0" \\\r
    "mmlu|high_school_biology|0|0" \\\r
    "mmlu|high_school_chemistry|0|0" \\\r
    "mmlu|professional_medicine|0|0" \\\r
    --max_samples 40 \\\r
    --batch_size 1 \\\r
    --output_path "./results" \\\r
    --save_generations true\r
\`\`\`\r
\r
Hasil evaluasi ditampilkan dalam bentuk tabel yang berisi task, metric, value, dan standard error.\r
\r
Contoh:\r
\r
\`\`\`text\r
|                  Task                  |Version|Metric|Value |   |Stderr|\r
|----------------------------------------|------:|------|-----:|---|-----:|\r
|all                                     |       |acc   |0.3333|±  |0.1169|\r
|leaderboard:mmlu:_average:5             |       |acc   |0.3400|±  |0.1121|\r
|leaderboard:mmlu:anatomy:5              |      0|acc   |0.4500|±  |0.1141|\r
|leaderboard:mmlu:high_school_biology:5  |      0|acc   |0.1500|±  |0.0819|\r
\`\`\`\r
\r
Lighteval juga menyediakan Python API untuk melakukan evaluasi yang lebih fleksibel.\r
\r
---\r
`,Lc=`Chapter ini membahas empat komponen utama dalam fine-tuning language model:\r
\r
1. **Chat Templates**\r
\r
   * Mengatur struktur interaksi antara user dan model.\r
   * Memastikan format percakapan sesuai dengan model yang digunakan.\r
\r
2. **Supervised Fine-Tuning**\r
\r
   * Mengadaptasi pretrained model menggunakan dataset yang sesuai dengan tugas tertentu.\r
\r
3. **LoRA**\r
\r
   * Mengurangi jumlah parameter yang perlu dilatih.\r
   * Menghemat memory ketika melakukan fine-tuning model berukuran besar.\r
\r
4. **Evaluation**\r
\r
   * Mengukur kemampuan model setelah fine-tuning.\r
   * Dapat menggunakan benchmark standar maupun benchmark yang dibuat khusus untuk kebutuhan aplikasi.\r
\r
Keempat konsep tersebut saling berkaitan dalam proses membangun model yang telah disesuaikan dengan kebutuhan tertentu.\r
`,Rc=`# Chapter 2 — Penggunaan Transformers\r
\r
## 1. Pendahuluan\r
\r
Pada Chapter 1, kita sudah diperkenalkan dengan Transformer dan penggunaan fungsi \`pipeline()\` untuk menjalankan berbagai tugas NLP.\r
\r
Namun, \`pipeline()\` sebenarnya menyembunyikan banyak proses yang terjadi di belakangnya.\r
\r
Ketika kita menjalankan:\r
\r
\`\`\`python\r
from transformers import pipeline\r
\r
classifier = pipeline("sentiment-analysis")\r
classifier("I love this course!")\r
\`\`\`\r
\r
terlihat sangat sederhana.\r
\r
Tetapi di balik proses tersebut terdapat beberapa tahapan:\r
\r
\`\`\`text\r
Text\r
 ↓\r
Tokenizer\r
 ↓\r
Numerical Inputs\r
 ↓\r
Transformer Model\r
 ↓\r
Model Output\r
 ↓\r
Post-processing\r
 ↓\r
Prediction\r
\`\`\`\r
\r
Chapter 2 bertujuan untuk membuka proses tersebut dan memahami bagaimana setiap komponennya bekerja.\r
\r
---\r
\r
### 1.1 Masalah yang ingin diselesaikan Transformers\r
\r
Model Transformer biasanya berukuran besar dan memiliki jutaan hingga miliaran parameter.\r
\r
Masalahnya:\r
\r
* model memiliki ukuran besar;\r
* setiap model dapat memiliki implementasi yang berbeda;\r
* proses training membutuhkan resource besar;\r
* deployment model tidak sederhana;\r
* mencoba banyak model satu per satu dapat menjadi sulit.\r
\r
Library **🤗 Transformers** dibuat untuk memberikan API yang seragam sehingga berbagai model Transformer dapat digunakan dengan cara yang relatif konsisten.\r
\r
---\r
\r
### 1.2 Tiga karakteristik utama Transformers\r
\r
Chapter menjelaskan tiga keunggulan utama library Transformers:\r
\r
#### Ease of use\r
\r
Pengguna dapat:\r
\r
* download model;\r
* load model;\r
* melakukan inference;\r
\r
dengan kode yang relatif sederhana.\r
\r
Hal ini membuat pengguna tidak harus memahami seluruh implementasi internal model hanya untuk menjalankannya.\r
\r
---\r
\r
#### Flexibility\r
\r
Model Transformers pada dasarnya dapat digunakan sebagai model dalam framework machine learning seperti PyTorch.\r
\r
Dengan demikian, model dapat diperlakukan seperti model \`nn.Module\` biasa.\r
\r
Artinya, pengguna tetap dapat melakukan berbagai operasi machine learning terhadap model tersebut.\r
\r
---\r
\r
#### Simplicity\r
\r
Transformers berusaha menjaga implementasi model agar relatif mudah dipahami.\r
\r
Salah satu konsepnya adalah **"All in one file"**.\r
\r
Implementasi forward pass dari suatu model didefinisikan dalam file model tersebut sehingga pengguna dapat lebih mudah membaca, memahami, dan memodifikasi kode.\r
\r
Hal ini juga memungkinkan eksperimen pada satu model tanpa harus mengubah implementasi model lain.\r
\r
---\r
\r
### 1.3 Tujuan Chapter 2\r
\r
Chapter 2 akan membongkar proses yang sebelumnya disembunyikan oleh \`pipeline()\`.\r
\r
Urutannya:\r
\r
\`\`\`text\r
pipeline()\r
   ↓\r
Model + Tokenizer\r
   ↓\r
Tokenizer\r
   ↓\r
Numerical Inputs\r
   ↓\r
Transformer Model\r
   ↓\r
Predictions\r
\`\`\`\r
\r
Materi kemudian membahas:\r
\r
* model API;\r
* configuration;\r
* loading model;\r
* tokenizer;\r
* tokenization;\r
* input IDs;\r
* attention mask;\r
* padding;\r
* truncation;\r
* batching;\r
* tensor PyTorch;\r
* model output;\r
* penggunaan tokenizer secara langsung;\r
* optimized inference.\r
\r
Dengan memahami bagian-bagian tersebut, kita tidak lagi hanya menggunakan \`pipeline()\`, tetapi mulai memahami apa yang terjadi di baliknya.\r
\r
---`,zc=`# 2. Behind the Pipeline — Model dan API Transformers\r
\r
Bagian ini mulai membongkar apa yang dilakukan \`pipeline()\`.\r
\r
Jika \`pipeline()\` digunakan untuk mempermudah inference, maka secara manual kita perlu menangani setidaknya:\r
\r
\`\`\`text\r
Tokenizer\r
   ↓\r
Model\r
   ↓\r
Output\r
\`\`\`\r
\r
---\r
\r
## 2.1 Model checkpoint\r
\r
Ketika menggunakan model Transformers, biasanya kita menentukan sebuah **checkpoint**.\r
\r
Contoh:\r
\r
\`\`\`python\r
checkpoint = "distilbert-base-uncased-finetuned-sst-2-english"\r
\`\`\`\r
\r
Checkpoint merepresentasikan model yang sudah tersedia dan dapat dimuat.\r
\r
Dengan checkpoint tersebut, library dapat mengetahui model apa yang harus digunakan beserta parameter yang telah dilatih.\r
\r
---\r
\r
## 2.2 \`from_pretrained()\`\r
\r
Salah satu API penting dalam Transformers adalah:\r
\r
\`\`\`python\r
from_pretrained()\r
\`\`\`\r
\r
Fungsinya adalah memuat komponen yang sudah tersedia dari sebuah checkpoint.\r
\r
Contohnya:\r
\r
\`\`\`python\r
from transformers import AutoModel\r
\r
model = AutoModel.from_pretrained("bert-base-cased")\r
\`\`\`\r
\r
Dengan pendekatan ini, kita tidak perlu membuat arsitektur model dan menginisialisasi seluruh parameter dari awal.\r
\r
Model yang sudah pretrained dapat langsung digunakan.\r
\r
---\r
\r
## 2.3 \`AutoModel\`\r
\r
Transformers menyediakan berbagai class model.\r
\r
Daripada menentukan class secara manual, kita dapat menggunakan keluarga class **Auto**.\r
\r
Contohnya:\r
\r
\`\`\`python\r
from transformers import AutoModel\r
\r
model = AutoModel.from_pretrained(checkpoint)\r
\`\`\`\r
\r
\`AutoModel\` akan menentukan jenis model yang sesuai berdasarkan checkpoint yang diberikan.\r
\r
Hal ini membuat kode lebih fleksibel karena pengguna tidak harus mengetahui secara manual class model yang digunakan.\r
\r
---\r
\r
## 2.4 Model bukan hanya weights\r
\r
Ketika menggunakan pretrained model, ada beberapa komponen penting yang perlu dibedakan:\r
\r
* architecture;\r
* configuration;\r
* weights;\r
* tokenizer.\r
\r
Secara sederhana:\r
\r
\`\`\`text\r
Architecture\r
    +\r
Configuration\r
    +\r
Weights\r
    ↓\r
Pretrained Model\r
\`\`\`\r
\r
### Architecture\r
\r
Menentukan struktur model.\r
\r
Misalnya:\r
\r
* jumlah layer;\r
* jenis layer;\r
* hidden size;\r
* attention;\r
* dan komponen lainnya.\r
\r
### Configuration\r
\r
Berisi informasi mengenai bagaimana model harus dibangun dan dijalankan.\r
\r
### Weights\r
\r
Berisi parameter hasil training.\r
\r
Weights inilah yang menyimpan informasi yang telah dipelajari model selama training.\r
\r
---\r
\r
## 2.5 Model menghasilkan numerical output\r
\r
Transformer tidak menerima kalimat mentah secara langsung.\r
\r
Model menerima input dalam bentuk angka.\r
\r
Alurnya:\r
\r
\`\`\`text\r
"I love this course"\r
        ↓\r
    Tokenizer\r
        ↓\r
[101, ..., 102]\r
        ↓\r
Transformer Model\r
        ↓\r
Numerical Output\r
\`\`\`\r
\r
Output model juga pada awalnya berupa angka.\r
\r
Untuk classification, misalnya, model menghasilkan **logits**.\r
\r
Kemudian logits tersebut diproses menjadi prediksi yang lebih mudah dipahami.\r
\r
---`,Bc=`# 3. Model Inputs dan Model Outputs\r
\r
Setelah memahami bahwa model menerima angka, kita perlu memahami bentuk input dan output tersebut.\r
\r
---\r
\r
## 3.1 Input IDs\r
\r
**Input IDs** merupakan representasi numerik dari token.\r
\r
Misalnya teks:\r
\r
\`\`\`text\r
"I love NLP"\r
\`\`\`\r
\r
akan melalui tokenizer dan setiap token akan dikonversi menjadi ID.\r
\r
Secara sederhana:\r
\r
\`\`\`text\r
Text\r
 ↓\r
Tokens\r
 ↓\r
Token IDs\r
\`\`\`\r
\r
Contoh:\r
\r
\`\`\`text\r
["I", "love", "NLP"]\r
\`\`\`\r
\r
dapat menjadi:\r
\r
\`\`\`text\r
[101, 1045, 2293, ...]\r
\`\`\`\r
\r
Angka tersebut kemudian diberikan kepada model.\r
\r
---\r
\r
## 3.2 Tensor\r
\r
Model machine learning tidak bekerja dengan list Python biasa secara langsung dalam sebagian besar kasus.\r
\r
Input biasanya perlu dikonversi menjadi **tensor**.\r
\r
Contoh dengan PyTorch:\r
\r
\`\`\`python\r
import torch\r
\r
input_ids = torch.tensor([[101, 1045, 2293, 102]])\r
\`\`\`\r
\r
Tensor tersebut kemudian dapat diberikan kepada model.\r
\r
---\r
\r
## 3.3 Logits\r
\r
Output model untuk classification biasanya berupa **logits**.\r
\r
Misalnya:\r
\r
\`\`\`text\r
[-2.72, 2.87]\r
\`\`\`\r
\r
Angka tersebut belum secara langsung berarti:\r
\r
\`\`\`text\r
positive\r
negative\r
\`\`\`\r
\r
Logits perlu diproses lebih lanjut untuk mendapatkan probabilitas atau label.\r
\r
Untuk classification, nilai logits dapat digunakan untuk menentukan kelas dengan nilai yang paling tinggi.\r
\r
---\r
\r
## 3.4 Dari logits menjadi prediction\r
\r
Secara sederhana:\r
\r
\`\`\`text\r
Input IDs\r
    ↓\r
Transformer\r
    ↓\r
Logits\r
    ↓\r
Probability / Class\r
    ↓\r
Prediction\r
\`\`\`\r
\r
Misalnya:\r
\r
\`\`\`text\r
NEGATIVE = -2.72\r
POSITIVE =  2.87\r
\`\`\`\r
\r
maka kelas dengan nilai lebih tinggi adalah:\r
\r
\`\`\`text\r
POSITIVE\r
\`\`\`\r
\r
Inilah salah satu proses yang sebelumnya ditangani secara otomatis oleh \`pipeline()\`.\r
\r
---\r
`,Vc=`# 4. Tokenizer\r
\r
Tokenizer merupakan salah satu bagian terpenting dalam pipeline NLP.\r
\r
Model hanya dapat memproses angka, sedangkan pengguna memberikan input dalam bentuk teks.\r
\r
Karena itu diperlukan tokenizer sebagai penghubung:\r
\r
\`\`\`text\r
Human-readable text\r
        ↓\r
     Tokenizer\r
        ↓\r
Numerical representation\r
        ↓\r
       Model\r
\`\`\`\r
\r
File Chapter 2 menjelaskan bahwa tujuan tokenizer adalah mengubah teks menjadi data yang dapat diproses model.\r
\r
---\r
\r
## 4.1 Mengapa tokenizer dibutuhkan?\r
\r
Misalnya kita memiliki:\r
\r
\`\`\`text\r
Jim Henson was a puppeteer\r
\`\`\`\r
\r
Model tidak dapat menerima kalimat tersebut secara langsung.\r
\r
Tokenizer mengubahnya menjadi token, kemudian token tersebut menjadi angka.\r
\r
\`\`\`text\r
Jim Henson was a puppeteer\r
            ↓\r
["Jim", "Henson", "was", "a", "puppeteer"]\r
            ↓\r
[Token IDs]\r
\`\`\`\r
\r
---\r
\r
# 4.2 Word-based tokenization\r
\r
Cara paling sederhana adalah memecah teks berdasarkan kata.\r
\r
Contoh:\r
\r
\`\`\`text\r
Jim Henson was a puppeteer\r
\`\`\`\r
\r
menjadi:\r
\r
\`\`\`text\r
["Jim", "Henson", "was", "a", "puppeteer"]\r
\`\`\`\r
\r
Setiap kata kemudian memiliki ID dalam vocabulary.\r
\r
### Kelebihan\r
\r
* mudah dipahami;\r
* implementasinya sederhana;\r
* satu kata biasanya menjadi satu token.\r
\r
### Kekurangan\r
\r
Vocabulary dapat menjadi sangat besar.\r
\r
Selain itu, kata yang memiliki bentuk berbeda dapat dianggap sebagai token yang berbeda.\r
\r
Contoh:\r
\r
\`\`\`text\r
dog\r
dogs\r
\`\`\`\r
\r
atau:\r
\r
\`\`\`text\r
run\r
running\r
\`\`\`\r
\r
Tokenizer berbasis kata tidak secara otomatis memahami bahwa kata-kata tersebut memiliki hubungan.\r
\r
Masalah lainnya adalah kata yang tidak terdapat dalam vocabulary dapat menghasilkan:\r
\r
\`\`\`text\r
[UNK]\r
\`\`\`\r
\r
atau **unknown token**.\r
\r
Materi menjelaskan bahwa terlalu banyak \`[UNK]\` menunjukkan tokenizer kehilangan informasi karena tidak menemukan representasi yang sesuai.\r
\r
---\r
\r
# 4.3 Character-based tokenization\r
\r
Pendekatan berikutnya adalah memecah teks berdasarkan karakter.\r
\r
Contoh:\r
\r
\`\`\`text\r
hello\r
\`\`\`\r
\r
menjadi:\r
\r
\`\`\`text\r
h e l l o\r
\`\`\`\r
\r
### Kelebihan\r
\r
* vocabulary lebih kecil;\r
* hampir tidak ada unknown token;\r
* kata baru tetap dapat direpresentasikan karena tersusun dari karakter.\r
\r
### Kekurangan\r
\r
Representasi menjadi lebih panjang.\r
\r
Satu kata yang sebelumnya hanya membutuhkan satu token dapat berubah menjadi banyak token.\r
\r
Selain itu, satu karakter biasanya memiliki makna yang lebih sedikit dibandingkan sebuah kata atau subword.\r
\r
Karena itu character-based tokenization juga bukan solusi sempurna.\r
\r
---\r
\r
# 4.4 Subword tokenization\r
\r
Subword tokenization mencoba menggabungkan kelebihan word-based dan character-based tokenization.\r
\r
Prinsipnya:\r
\r
> Kata yang sering digunakan dapat dipertahankan sebagai token, sedangkan kata yang lebih jarang dapat dipecah menjadi subword yang lebih kecil.\r
\r
Contohnya:\r
\r
\`\`\`text\r
annoyingly\r
\`\`\`\r
\r
dapat dipecah menjadi:\r
\r
\`\`\`text\r
annoying + ly\r
\`\`\`\r
\r
Contoh lainnya:\r
\r
\`\`\`text\r
tokenization\r
\`\`\`\r
\r
dapat direpresentasikan sebagai:\r
\r
\`\`\`text\r
token + ization\r
\`\`\`\r
\r
Keuntungannya:\r
\r
* vocabulary tidak terlalu besar;\r
* unknown token dapat diminimalkan;\r
* kata yang panjang dapat direpresentasikan secara efisien;\r
* subword masih dapat membawa informasi makna.\r
\r
Subword tokenization juga sangat berguna untuk bahasa yang memiliki kata kompleks dan panjang.\r
\r
---\r
\r
# 4.5 Jenis tokenizer yang umum\r
\r
Chapter menyebut beberapa teknik:\r
\r
* **Byte-level BPE** → digunakan oleh GPT-2;\r
* **WordPiece** → digunakan oleh BERT;\r
* **SentencePiece / Unigram** → digunakan oleh beberapa model multilingual.\r
\r
Jadi tidak semua model menggunakan algoritma tokenizer yang sama.\r
\r
---\r
\r
# 4.6 Loading tokenizer\r
\r
Tokenizer dapat dimuat menggunakan:\r
\r
\`\`\`python\r
from transformers import AutoTokenizer\r
\r
tokenizer = AutoTokenizer.from_pretrained("bert-base-cased")\r
\`\`\`\r
\r
\`AutoTokenizer\` akan memilih class tokenizer yang sesuai berdasarkan checkpoint.\r
\r
Tokenizer juga dapat disimpan dengan:\r
\r
\`\`\`python\r
tokenizer.save_pretrained("directory_on_my_computer")\r
\`\`\`\r
\r
Jadi tokenizer dapat disimpan dan digunakan kembali.\r
\r
---\r
\r
# 4.7 Output tokenizer\r
\r
Ketika kita menjalankan:\r
\r
\`\`\`python\r
tokenizer("Using a Transformer network is simple")\r
\`\`\`\r
\r
tokenizer dapat menghasilkan beberapa jenis informasi, seperti:\r
\r
\`\`\`text\r
input_ids\r
token_type_ids\r
attention_mask\r
\`\`\`\r
\r
Contoh:\r
\r
\`\`\`text\r
{\r
    "input_ids": [...],\r
    "token_type_ids": [...],\r
    "attention_mask": [...]\r
}\r
\`\`\`\r
\r
Ketiganya memiliki fungsi yang berbeda.\r
\r
---\r
\r
## 4.8 Special Tokens\r
\r
Tokenizer dapat menambahkan **special tokens** yang diperlukan oleh model.\r
\r
Contoh pada BERT:\r
\r
\`\`\`text\r
[CLS] sentence [SEP]\r
\`\`\`\r
\r
\`[CLS]\` ditambahkan di awal sequence.\r
\r
\`[SEP]\` ditambahkan di akhir sequence.\r
\r
Contohnya:\r
\r
\`\`\`text\r
Input:\r
I've been waiting for a HuggingFace course.\r
\r
↓ tokenizer\r
\r
[CLS] i've been waiting for a huggingface course. [SEP]\r
\`\`\`\r
\r
Special tokens tersebut bukan sekadar tambahan kosmetik.\r
\r
Model memang dipretrain menggunakan token-token tersebut sehingga tokenizer perlu menambahkannya ketika melakukan inference.\r
\r
---\r
`,Hc=`# 5. Handling Multiple Sequences — PyTorch\r
\r
Setelah memahami tokenizer, masalah berikutnya adalah bagaimana memasukkan lebih dari satu sequence ke model.\r
\r
---\r
\r
## 5.1 Model mengharapkan batch\r
\r
Transformer biasanya bekerja menggunakan input dalam bentuk **batch**.\r
\r
Jika hanya memiliki satu sequence, kita tetap dapat membuat batch yang berisi satu sequence.\r
\r
Misalnya:\r
\r
\`\`\`text\r
1 sequence\r
↓\r
Batch size = 1\r
\`\`\`\r
\r
Secara bentuk:\r
\r
\`\`\`text\r
[sequence]\r
\`\`\`\r
\r
bukan hanya:\r
\r
\`\`\`text\r
sequence\r
\`\`\`\r
\r
Materi menunjukkan bahwa memberikan sequence secara langsung tanpa dimensi batch dapat menyebabkan error.\r
\r
---\r
\r
## 5.2 Apa itu batching?\r
\r
**Batching** adalah proses memasukkan beberapa sequence ke model sekaligus.\r
\r
Contoh:\r
\r
\`\`\`text\r
Sentence 1\r
Sentence 2\r
Sentence 3\r
\`\`\`\r
\r
menjadi:\r
\r
\`\`\`text\r
Batch\r
├── Sentence 1\r
├── Sentence 2\r
└── Sentence 3\r
\`\`\`\r
\r
Keuntungannya adalah beberapa input dapat diproses bersama.\r
\r
---\r
\r
# 5.3 Masalah sequence dengan panjang berbeda\r
\r
Misalnya kita memiliki:\r
\r
\`\`\`text\r
Sentence A → 3 tokens\r
Sentence B → 5 tokens\r
\`\`\`\r
\r
Kita tidak dapat langsung membuat tensor rectangular dari:\r
\r
\`\`\`text\r
[1, 2, 3]\r
[4, 5, 6, 7, 8]\r
\`\`\`\r
\r
Karena panjangnya berbeda.\r
\r
Tensor membutuhkan bentuk yang konsisten.\r
\r
Solusinya adalah **padding**.\r
\r
---\r
\r
# 5.4 Padding\r
\r
Padding berarti menambahkan token khusus ke sequence yang lebih pendek.\r
\r
Misalnya:\r
\r
\`\`\`text\r
Sentence A:\r
[200, 200, 200]\r
\r
Sentence B:\r
[200, 200]\r
\`\`\`\r
\r
setelah padding:\r
\r
\`\`\`text\r
Sentence A:\r
[200, 200, 200]\r
\r
Sentence B:\r
[200, 200, PAD]\r
\`\`\`\r
\r
Sekarang keduanya memiliki panjang yang sama.\r
\r
Padding memungkinkan sequence dengan panjang berbeda dimasukkan ke dalam satu tensor.\r
\r
---\r
\r
# 5.5 Padding tidak boleh dianggap sebagai informasi\r
\r
Masalahnya:\r
\r
Transformer menggunakan attention.\r
\r
Jika padding token ikut diperhatikan oleh attention, maka hasil model dapat berubah.\r
\r
Materi menunjukkan bahwa sequence yang diproses sendiri dapat menghasilkan logits berbeda ketika dimasukkan ke batch dengan padding.\r
\r
Karena itu kita membutuhkan **attention mask**.\r
\r
---\r
\r
# 5.6 Attention Mask\r
\r
Attention mask memberi tahu model token mana yang boleh diperhatikan.\r
\r
Nilai:\r
\r
\`\`\`text\r
1 → token diperhatikan\r
0 → token diabaikan\r
\`\`\`\r
\r
Contoh:\r
\r
\`\`\`text\r
Input:\r
[200, 200, 200]\r
[200, 200, PAD]\r
\r
Attention mask:\r
[1, 1, 1]\r
[1, 1, 0]\r
\`\`\`\r
\r
Pada sequence kedua, padding diberi nilai \`0\`.\r
\r
Artinya attention layer tidak boleh menggunakan padding tersebut sebagai informasi.\r
\r
Dengan attention mask, hasil sequence kedua ketika diproses bersama batch dapat kembali konsisten dengan hasil ketika diproses sendiri.\r
\r
---\r
\r
# 5.7 Truncation\r
\r
Masalah lainnya adalah sequence yang terlalu panjang.\r
\r
Setiap model memiliki batas panjang input.\r
\r
Jika sequence melebihi batas tersebut, kita dapat menggunakan **truncation**.\r
\r
Contoh:\r
\r
\`\`\`python\r
tokenizer(\r
    sequence,\r
    truncation=True\r
)\r
\`\`\`\r
\r
Tokenizer akan memotong sequence yang terlalu panjang.\r
\r
Kita juga dapat menentukan panjang tertentu:\r
\r
\`\`\`python\r
tokenizer(\r
    sequence,\r
    max_length=8,\r
    truncation=True\r
)\r
\`\`\`\r
\r
Artinya sequence akan dipotong agar tidak melebihi 8 token.\r
\r
---\r
\r
# 5.8 Padding dan Truncation secara bersamaan\r
\r
Dalam penggunaan nyata, kita sering menggunakan:\r
\r
\`\`\`python\r
tokenizer(\r
    sequences,\r
    padding=True,\r
    truncation=True\r
)\r
\`\`\`\r
\r
Artinya:\r
\r
* sequence yang terlalu panjang akan dipotong;\r
* sequence yang lebih pendek akan diberi padding.\r
\r
Ini sangat berguna ketika memproses batch dengan sequence yang panjangnya berbeda-beda.\r
\r
---\r
`,Uc=`# 6. Putting It All Together\r
\r
Setelah memahami semua komponen secara terpisah, kita dapat menggabungkan semuanya.\r
\r
Proses lengkapnya:\r
\r
\`\`\`text\r
Raw Text\r
   ↓\r
Tokenizer\r
   ↓\r
Tokenization\r
   ↓\r
Input IDs\r
   ↓\r
Padding / Truncation\r
   ↓\r
Attention Mask\r
   ↓\r
PyTorch Tensor\r
   ↓\r
Transformer Model\r
   ↓\r
Logits / Model Output\r
   ↓\r
Prediction\r
\`\`\`\r
\r
---\r
\r
## 6.1 Menggunakan tokenizer secara langsung\r
\r
Kita tidak perlu lagi melakukan setiap proses secara manual.\r
\r
Contohnya:\r
\r
\`\`\`python\r
from transformers import AutoTokenizer\r
\r
checkpoint = "distilbert-base-uncased-finetuned-sst-2-english"\r
\r
tokenizer = AutoTokenizer.from_pretrained(checkpoint)\r
\r
sequence = "I've been waiting for a HuggingFace course my whole life."\r
\r
model_inputs = tokenizer(sequence)\r
\`\`\`\r
\r
Variabel:\r
\r
\`\`\`python\r
model_inputs\r
\`\`\`\r
\r
berisi input yang dibutuhkan model.\r
\r
Untuk DistilBERT, misalnya, terdapat \`input_ids\` dan \`attention_mask\`.\r
\r
---\r
\r
# 6.2 Memproses beberapa sequence\r
\r
Tokenizer juga dapat menerima beberapa sequence sekaligus.\r
\r
\`\`\`python\r
sequences = [\r
    "I've been waiting for a HuggingFace course my whole life.",\r
    "So have I!"\r
]\r
\r
model_inputs = tokenizer(sequences)\r
\`\`\`\r
\r
API-nya tetap sama.\r
\r
Perbedaannya adalah input sekarang berupa list sequence.\r
\r
---\r
\r
# 6.3 Padding\r
\r
Kita dapat meminta tokenizer melakukan padding.\r
\r
### Padding sampai sequence terpanjang\r
\r
\`\`\`python\r
tokenizer(\r
    sequences,\r
    padding="longest"\r
)\r
\`\`\`\r
\r
Semua sequence akan disesuaikan dengan panjang sequence terpanjang dalam batch.\r
\r
---\r
\r
### Padding sampai panjang maksimum model\r
\r
\`\`\`python\r
tokenizer(\r
    sequences,\r
    padding="max_length"\r
)\r
\`\`\`\r
\r
Padding dilakukan sampai maximum length yang ditentukan model.\r
\r
---\r
\r
### Padding sampai panjang tertentu\r
\r
\`\`\`python\r
tokenizer(\r
    sequences,\r
    padding="max_length",\r
    max_length=8\r
)\r
\`\`\`\r
\r
Semua sequence dibuat memiliki panjang 8 token.\r
\r
---\r
\r
# 6.4 Truncation\r
\r
Tokenizer juga dapat melakukan truncation:\r
\r
\`\`\`python\r
tokenizer(\r
    sequences,\r
    truncation=True\r
)\r
\`\`\`\r
\r
atau:\r
\r
\`\`\`python\r
tokenizer(\r
    sequences,\r
    max_length=8,\r
    truncation=True\r
)\r
\`\`\`\r
\r
Dengan demikian tokenizer dapat sekaligus mengatur:\r
\r
\`\`\`text\r
Different lengths\r
       ↓\r
Padding\r
       +\r
Truncation\r
       ↓\r
Uniform batch\r
\`\`\`\r
\r
---\r
\r
# 6.5 Menghasilkan tensor\r
\r
Tokenizer juga dapat langsung menghasilkan tensor untuk framework tertentu.\r
\r
Contoh PyTorch:\r
\r
\`\`\`python\r
tokenizer(\r
    sequences,\r
    padding=True,\r
    return_tensors="pt"\r
)\r
\`\`\`\r
\r
\`"pt"\` berarti output dikembalikan sebagai **PyTorch tensors**.\r
\r
Untuk NumPy:\r
\r
\`\`\`python\r
tokenizer(\r
    sequences,\r
    padding=True,\r
    return_tensors="np"\r
)\r
\`\`\`\r
\r
Dengan begitu kita tidak perlu melakukan konversi tensor secara manual.\r
\r
---\r
\r
# 6.6 Dari tokenizer langsung ke model\r
\r
Pada akhirnya proses dapat dibuat sangat ringkas:\r
\r
\`\`\`python\r
import torch\r
from transformers import AutoTokenizer, AutoModelForSequenceClassification\r
\r
checkpoint = "distilbert-base-uncased-finetuned-sst-2-english"\r
\r
tokenizer = AutoTokenizer.from_pretrained(checkpoint)\r
model = AutoModelForSequenceClassification.from_pretrained(checkpoint)\r
\r
sequences = [\r
    "I've been waiting for a HuggingFace course my whole life.",\r
    "So have I!"\r
]\r
\r
tokens = tokenizer(\r
    sequences,\r
    padding=True,\r
    truncation=True,\r
    return_tensors="pt"\r
)\r
\r
output = model(**tokens)\r
\`\`\`\r
\r
Di sini:\r
\r
\`\`\`text\r
sequences\r
   ↓\r
tokenizer()\r
   ↓\r
input_ids + attention_mask\r
   ↓\r
PyTorch tensors\r
   ↓\r
model(**tokens)\r
   ↓\r
output\r
\`\`\`\r
\r
Inilah inti dari bagaimana \`pipeline()\` sebenarnya bekerja di belakang layar.\r
\r
---\r
`,Wc=`# 7. Optimized Inference\r
\r
Setelah memahami inference menggunakan model secara langsung, Chapter 2 kemudian masuk ke masalah yang lebih praktis:\r
\r
> Bagaimana menjalankan LLM secara efisien dalam production?\r
\r
Menjalankan model secara sederhana belum tentu cukup ketika:\r
\r
* model berukuran besar;\r
* jumlah pengguna banyak;\r
* request datang secara bersamaan;\r
* GPU memory terbatas;\r
* latency perlu rendah;\r
* throughput perlu tinggi.\r
\r
Karena itu terdapat framework khusus untuk **optimized inference deployment**.\r
\r
Materi membahas tiga framework:\r
\r
1. **Text Generation Inference (TGI)**\r
2. **vLLM**\r
3. **llama.cpp**\r
\r
Ketiganya memiliki tujuan yang sama secara umum, yaitu membantu menjalankan dan melayani LLM secara lebih efisien, tetapi pendekatan dan target penggunaannya berbeda.\r
\r
---\r
\r
# 7.1 Text Generation Inference — TGI\r
\r
**Text Generation Inference (TGI)** dirancang untuk deployment LLM dalam production.\r
\r
Salah satu fokus TGI adalah membuat penggunaan memory dan inference lebih efisien dan konsisten.\r
\r
TGI menggunakan beberapa teknik, termasuk:\r
\r
* Flash Attention 2;\r
* continuous batching;\r
* optimasi penggunaan GPU;\r
* pemindahan sebagian model antara CPU dan GPU jika diperlukan.\r
\r
---\r
\r
## 7.2 Flash Attention\r
\r
Attention pada Transformer dapat menjadi mahal terutama ketika sequence semakin panjang.\r
\r
Flash Attention mengoptimalkan bagaimana operasi attention menggunakan memory.\r
\r
Masalah yang ingin dikurangi adalah bottleneck pada perpindahan data antara memory GPU yang berbeda.\r
\r
Secara sederhana:\r
\r
\`\`\`text\r
Traditional Attention\r
→ banyak memory transfer\r
→ memory bottleneck\r
\r
Flash Attention\r
→ memory access lebih efisien\r
→ attention lebih efisien\r
\`\`\`\r
\r
Hal ini dapat membantu mengurangi penggunaan VRAM dan meningkatkan efisiensi inference.\r
\r
---\r
\r
# 7.3 Continuous Batching\r
\r
Pada sistem production, request tidak selalu datang bersamaan.\r
\r
Misalnya:\r
\r
\`\`\`text\r
Request A → datang\r
Request B → datang\r
Request C → datang beberapa saat kemudian\r
\`\`\`\r
\r
Continuous batching memungkinkan sistem mengatur request yang masuk secara dinamis sehingga GPU dapat terus diberi pekerjaan.\r
\r
Tujuannya adalah meningkatkan penggunaan resource dan throughput dibandingkan hanya memproses batch statis.\r
\r
TGI menggunakan continuous batching sebagai salah satu mekanisme optimasinya.\r
\r
---\r
\r
# 7.4 vLLM\r
\r
vLLM menggunakan pendekatan berbeda melalui **PagedAttention**.\r
\r
Masalah yang ingin ditangani adalah penggunaan memory untuk **KV Cache**.\r
\r
KV Cache dapat menjadi sangat besar terutama ketika:\r
\r
* sequence panjang;\r
* banyak request diproses bersamaan.\r
\r
vLLM membagi memory tersebut ke dalam blok atau "pages".\r
\r
Secara sederhana:\r
\r
\`\`\`text\r
KV Cache\r
   ↓\r
Dibagi menjadi pages\r
   ↓\r
Page management\r
   ↓\r
Memory lebih fleksibel\r
\`\`\`\r
\r
Pendekatan ini membantu mengurangi memory fragmentation dan memungkinkan penggunaan memory yang lebih fleksibel.\r
\r
---\r
\r
# 7.5 PagedAttention\r
\r
PagedAttention memiliki beberapa karakteristik:\r
\r
1. KV cache dibagi menjadi blok/page;\r
2. page tidak harus berada secara contiguous di memory;\r
3. terdapat mekanisme page table untuk melacak page;\r
4. page tertentu dapat digunakan bersama dalam skenario tertentu.\r
\r
Tujuan akhirnya adalah membuat penggunaan KV cache lebih efisien.\r
\r
Materi menyebutkan bahwa pendekatan PagedAttention dapat menghasilkan peningkatan throughput yang sangat besar dibandingkan pendekatan tradisional dalam kondisi tertentu.\r
\r
---\r
\r
# 7.6 llama.cpp\r
\r
Berbeda dengan TGI dan vLLM, **llama.cpp** berfokus pada implementasi yang ringan dan efisien menggunakan C/C++.\r
\r
Salah satu tujuan utamanya adalah memungkinkan model besar dijalankan pada hardware dengan resource terbatas.\r
\r
llama.cpp mendukung:\r
\r
* CPU inference;\r
* optional GPU acceleration;\r
* quantization;\r
* optimasi hardware;\r
* KV cache management.\r
\r
---\r
\r
# 7.7 Quantization\r
\r
Quantization merupakan salah satu teknik penting dalam llama.cpp.\r
\r
Model biasanya memiliki weights dengan precision tertentu, misalnya:\r
\r
\`\`\`text\r
FP32\r
FP16\r
\`\`\`\r
\r
Quantization mengubah representasi tersebut menjadi precision yang lebih rendah, misalnya:\r
\r
\`\`\`text\r
INT8\r
4-bit\r
3-bit\r
2-bit\r
\`\`\`\r
\r
Tujuannya adalah:\r
\r
* mengurangi ukuran model;\r
* mengurangi penggunaan memory;\r
* memungkinkan model lebih besar dijalankan pada hardware yang lebih terbatas;\r
* meningkatkan efisiensi inference.\r
\r
Tentunya terdapat trade-off karena pengurangan precision dapat memengaruhi kualitas model.\r
\r
---\r
\r
# 7.8 Perbedaan TGI, vLLM, dan llama.cpp\r
\r
Secara sederhana:\r
\r
| Framework | Fokus utama                          | Teknik utama                         |\r
| --------- | ------------------------------------ | ------------------------------------ |\r
| TGI       | Production deployment                | Flash Attention, continuous batching |\r
| vLLM      | High-performance serving             | PagedAttention                       |\r
| llama.cpp | Local/resource-constrained inference | Quantization, optimized C/C++        |\r
\r
### TGI\r
\r
Lebih berorientasi pada deployment production dan integrasi sistem.\r
\r
Materi menyebut fitur seperti:\r
\r
* Kubernetes;\r
* monitoring;\r
* Prometheus;\r
* Grafana;\r
* autoscaling;\r
* logging;\r
* rate limiting;\r
* content filtering.\r
\r
### vLLM\r
\r
Lebih berorientasi pada:\r
\r
* performance;\r
* fleksibilitas;\r
* Python;\r
* API compatibility;\r
* deployment dengan cluster.\r
\r
### llama.cpp\r
\r
Lebih berorientasi pada:\r
\r
* portability;\r
* simplicity;\r
* local deployment;\r
* CPU;\r
* hardware dengan resource terbatas.\r
\r
---\r
\r
# 7.9 Hubungan Chapter 2 secara keseluruhan\r
\r
Chapter 2 sebenarnya memiliki alur pembelajaran yang cukup jelas:\r
\r
\`\`\`text\r
Chapter 1\r
Memahami Transformer dan pipeline\r
          ↓\r
Chapter 2\r
Membongkar isi pipeline\r
          ↓\r
Tokenizer\r
          ↓\r
Token IDs\r
          ↓\r
Tensor\r
          ↓\r
Model\r
          ↓\r
Logits\r
          ↓\r
Prediction\r
\`\`\`\r
\r
Kemudian masalah yang lebih kompleks:\r
\r
\`\`\`text\r
Single Sequence\r
      ↓\r
Multiple Sequences\r
      ↓\r
Batching\r
      ↓\r
Different Lengths\r
      ↓\r
Padding\r
      ↓\r
Attention Mask\r
      ↓\r
Truncation\r
\`\`\`\r
\r
Setelah memahami penggunaan model:\r
\r
\`\`\`text\r
Model Inference\r
      ↓\r
Production Inference\r
      ↓\r
Optimization\r
      ↓\r
TGI / vLLM / llama.cpp\r
\`\`\`\r
\r
---\r
\r
`,Gc=`# Kesimpulan Chapter 2\r
\r
Chapter 2 menjelaskan apa yang sebenarnya terjadi di balik fungsi \`pipeline()\` pada Hugging Face Transformers.\r
\r
Konsep terpentingnya adalah bahwa **model Transformer tidak menerima teks secara langsung**. Teks terlebih dahulu diproses oleh **tokenizer**, kemudian diubah menjadi representasi numerik seperti \`input_ids\` dan \`attention_mask\`.\r
\r
Input tersebut kemudian diubah menjadi tensor dan diberikan kepada model.\r
\r
\`\`\`text\r
Text\r
 ↓\r
Tokenizer\r
 ↓\r
Input IDs + Attention Mask\r
 ↓\r
Tensor\r
 ↓\r
Transformer\r
 ↓\r
Logits\r
 ↓\r
Prediction\r
\`\`\`\r
\r
Tokenizer sendiri memiliki berbagai strategi tokenization, mulai dari:\r
\r
* word-based;\r
* character-based;\r
* subword.\r
\r
Subword menjadi pendekatan penting karena dapat memberikan keseimbangan antara ukuran vocabulary, jumlah token, dan kemampuan merepresentasikan kata yang jarang.\r
\r
Chapter ini juga menjelaskan bagaimana model menangani banyak sequence melalui **batching**. Karena setiap sequence dapat memiliki panjang berbeda, digunakan **padding** agar bentuk tensor seragam. Namun padding tidak boleh dianggap sebagai informasi sehingga digunakan **attention mask** untuk memberitahu model token mana yang harus diperhatikan dan mana yang harus diabaikan.\r
\r
Untuk sequence yang terlalu panjang, digunakan **truncation**.\r
\r
Pada akhirnya, seluruh proses tersebut dapat dilakukan secara praktis melalui:\r
\r
\`\`\`python\r
tokens = tokenizer(\r
    sequences,\r
    padding=True,\r
    truncation=True,\r
    return_tensors="pt"\r
)\r
\r
output = model(**tokens)\r
\`\`\`\r
\r
Setelah memahami inference dasar, Chapter 2 memperkenalkan optimasi deployment menggunakan **TGI, vLLM, dan llama.cpp**.\r
\r
* **TGI** berfokus pada production serving dengan teknik seperti Flash Attention dan continuous batching.\r
* **vLLM** menggunakan PagedAttention untuk mengelola KV Cache secara lebih efisien.\r
* **llama.cpp** berfokus pada inference yang ringan dan portable, termasuk melalui quantization.\r
\r
Dengan demikian, Chapter 2 membawa pemahaman dari:\r
\r
> **"Bagaimana menggunakan Transformer?"**\r
\r
menjadi:\r
\r
> **"Apa yang sebenarnya terjadi di balik pipeline dan bagaimana model tersebut dijalankan secara efisien?"**\r
`,Kc=`# Chapter 3 — Fine-Tuning a Pretrained Model\r
\r
## 1. Introduction\r
\r
Pada Chapter 2, kita sudah mempelajari bagaimana menggunakan **pretrained model** dan tokenizer untuk menghasilkan prediksi. Pada Chapter 3, pembahasannya berkembang ke tahap berikutnya, yaitu **fine-tuning**.\r
\r
Fine-tuning adalah proses melatih kembali model yang sebelumnya sudah pretrained menggunakan dataset yang lebih spesifik terhadap tugas tertentu.\r
\r
Secara umum, alur yang dipelajari dalam chapter ini adalah:\r
\r
**Pretrained Model → Dataset → Preprocessing → Fine-tuning → Evaluation → Optimization**\r
\r
Chapter ini memperkenalkan beberapa library dalam ekosistem Hugging Face:\r
\r
* **🤗 Datasets** → mengambil, menyimpan, dan memproses dataset.\r
* **🤗 Transformers** → menyediakan pretrained model dan API untuk training.\r
* **🤗 Tokenizers** → melakukan tokenisasi teks secara efisien.\r
* **🤗 Evaluate** → menghitung metrik evaluasi.\r
* **🤗 Accelerate** → membantu menjalankan training pada berbagai hardware, termasuk beberapa GPU atau TPU.\r
\r
Chapter ini berfokus pada **PyTorch** sebagai framework deep learning yang digunakan dalam proses training.\r
\r
Ada tiga pendekatan utama yang dipelajari:\r
\r
1. **Preprocessing dataset** secara efisien.\r
2. Fine-tuning menggunakan **\`Trainer\` API**.\r
3. Membuat **training loop sendiri menggunakan PyTorch**, kemudian menggunakan **Accelerate** untuk distributed training.\r
\r
Pada akhir chapter, kita memahami bagaimana melakukan fine-tuning model BERT untuk tugas **text classification** dan bagaimana menerapkan konsep tersebut pada dataset atau task lain.\r
\r
---\r
`,qc=`# 2. Continuing — Menyiapkan Dataset untuk Fine-Tuning\r
\r
Setelah memahami konsep fine-tuning, langkah berikutnya adalah menyiapkan dataset yang akan digunakan.\r
\r
Sebagai contoh, digunakan dataset **MRPC (Microsoft Research Paraphrase Corpus)**.\r
\r
Dataset ini berisi pasangan kalimat dan label yang menunjukkan apakah kedua kalimat tersebut memiliki makna yang ekuivalen atau merupakan paraphrase.\r
\r
Dataset MRPC terdiri dari:\r
\r
* **3.668** data training\r
* **408** data validation\r
* **1.725** data test\r
\r
Dataset tersebut tersedia melalui Hugging Face Hub dan dapat dimuat menggunakan library \`datasets\`:\r
\r
\`\`\`python\r
from datasets import load_dataset\r
\r
raw_datasets = load_dataset("glue", "mrpc")\r
\`\`\`\r
\r
Hasilnya berupa \`DatasetDict\` yang berisi beberapa split:\r
\r
\`\`\`text\r
train\r
validation\r
test\r
\`\`\`\r
\r
Setiap data memiliki beberapa kolom, antara lain:\r
\r
* \`sentence1\`\r
* \`sentence2\`\r
* \`label\`\r
* \`idx\`\r
\r
Label MRPC terdiri dari dua kelas:\r
\r
\`\`\`text\r
0 → not_equivalent\r
1 → equivalent\r
\`\`\`\r
\r
Dataset yang sudah tersedia di Hugging Face Hub dapat langsung digunakan sebagai dasar preprocessing dan training.\r
\r
### Preprocessing Dataset\r
\r
Model Transformer tidak menerima teks mentah secara langsung. Teks harus diubah menjadi representasi numerik menggunakan tokenizer.\r
\r
Contohnya:\r
\r
\`\`\`python\r
from transformers import AutoTokenizer\r
\r
checkpoint = "bert-base-uncased"\r
tokenizer = AutoTokenizer.from_pretrained(checkpoint)\r
\r
tokenized_sentences_1 = tokenizer(raw_datasets["train"]["sentence1"])\r
tokenized_sentences_2 = tokenizer(raw_datasets["train"]["sentence2"])\r
\`\`\`\r
\r
Namun, karena MRPC merupakan tugas yang membandingkan **dua kalimat**, kedua kalimat harus diberikan sebagai pasangan kepada tokenizer.\r
\r
\`\`\`python\r
inputs = tokenizer(\r
    "This is the first sentence.",\r
    "This is the second one."\r
)\r
\`\`\`\r
\r
Untuk model BERT, hasilnya dapat memiliki:\r
\r
* \`input_ids\`\r
* \`token_type_ids\`\r
* \`attention_mask\`\r
\r
### \`token_type_ids\`\r
\r
\`token_type_ids\` digunakan untuk menunjukkan bagian mana yang berasal dari kalimat pertama dan bagian mana yang berasal dari kalimat kedua.\r
\r
Strukturnya kira-kira:\r
\r
\`\`\`text\r
[CLS] sentence1 [SEP] sentence2 [SEP]\r
  0       0        0       1        1\r
\`\`\`\r
\r
Dengan demikian, model dapat membedakan dua bagian input tersebut.\r
\r
Perlu diperhatikan bahwa **tidak semua model menggunakan \`token_type_ids\`**. Misalnya, pada DistilBERT field tersebut tidak dikembalikan. Tokenizer akan menyesuaikan input berdasarkan checkpoint/model yang digunakan.\r
\r
### Tokenisasi seluruh dataset\r
\r
Daripada melakukan tokenisasi satu data setiap kali, kita dapat menggunakan \`Dataset.map()\`.\r
\r
\`\`\`python\r
def tokenize_function(example):\r
    return tokenizer(\r
        example["sentence1"],\r
        example["sentence2"],\r
        truncation=True\r
    )\r
\r
tokenized_datasets = raw_datasets.map(\r
    tokenize_function,\r
    batched=True\r
)\r
\`\`\`\r
\r
\`batched=True\` membuat preprocessing dilakukan terhadap beberapa data sekaligus sehingga proses tokenisasi menjadi lebih cepat. Library 🤗 Tokenizers sendiri menggunakan implementasi Rust untuk melakukan tokenisasi secara cepat.\r
\r
### Mengapa Padding Tidak Dilakukan Saat Tokenisasi?\r
\r
Pada tahap ini, \`padding\` sengaja tidak langsung diberikan.\r
\r
Alasannya adalah efisiensi.\r
\r
Misalnya dalam satu dataset terdapat kalimat sepanjang:\r
\r
\`\`\`text\r
32 token\r
50 token\r
67 token\r
100 token\r
\`\`\`\r
\r
Jika semuanya langsung dipadding ke panjang maksimum dataset, banyak token tambahan yang sebenarnya tidak diperlukan.\r
\r
Karena itu digunakan konsep **dynamic padding**.\r
\r
### Dynamic Padding\r
\r
Dynamic padding berarti padding dilakukan **ketika data akan dibuat menjadi batch**, sehingga setiap batch hanya dipadding sampai panjang maksimum yang ada pada batch tersebut.\r
\r
Untuk melakukan hal ini digunakan:\r
\r
\`\`\`python\r
from transformers import DataCollatorWithPadding\r
\r
data_collator = DataCollatorWithPadding(\r
    tokenizer=tokenizer\r
)\r
\`\`\`\r
\r
Misalnya satu batch memiliki panjang:\r
\r
\`\`\`text\r
50, 59, 47, 67, 59, 50, 62, 32\r
\`\`\`\r
\r
Maka seluruh data dalam batch tersebut cukup dipadding sampai:\r
\r
\`\`\`text\r
67 token\r
\`\`\`\r
\r
bukan sampai panjang maksimum seluruh dataset.\r
\r
Hal ini dapat mengurangi padding yang tidak diperlukan dan membuat proses training lebih efisien.\r
\r
---\r
`,Jc=`# 3. Fine-Tuning dengan \`Trainer\` API\r
\r
Setelah dataset selesai diproses, langkah berikutnya adalah melakukan fine-tuning.\r
\r
Hugging Face menyediakan class **\`Trainer\`** yang menangani banyak bagian dari proses training secara otomatis.\r
\r
Alur sederhananya:\r
\r
\`\`\`text\r
Dataset\r
   ↓\r
Tokenizer\r
   ↓\r
Tokenized Dataset\r
   ↓\r
Data Collator\r
   ↓\r
Trainer\r
   ↓\r
Training\r
   ↓\r
Evaluation\r
\`\`\`\r
\r
\`Trainer\` dapat digunakan untuk melakukan fine-tuning pretrained model tanpa harus menulis seluruh training loop secara manual.\r
\r
### \`TrainingArguments\`\r
\r
Sebelum membuat \`Trainer\`, kita perlu menentukan konfigurasi training menggunakan \`TrainingArguments\`.\r
\r
\`\`\`python\r
from transformers import TrainingArguments\r
\r
training_args = TrainingArguments(\r
    "test-trainer"\r
)\r
\`\`\`\r
\r
Parameter tersebut digunakan untuk menentukan berbagai konfigurasi training, seperti:\r
\r
* lokasi penyimpanan model,\r
* checkpoint,\r
* batch size,\r
* learning rate,\r
* jumlah epoch,\r
* strategi evaluasi,\r
* dan berbagai konfigurasi training lainnya.\r
\r
### Membuat Model\r
\r
Model dapat dibuat menggunakan:\r
\r
\`\`\`python\r
from transformers import AutoModelForSequenceClassification\r
\r
model = AutoModelForSequenceClassification.from_pretrained(\r
    checkpoint,\r
    num_labels=2\r
)\r
\`\`\`\r
\r
Karena BERT pada awalnya bukan pretrained khusus untuk klasifikasi pasangan kalimat MRPC, classification head yang sesuai akan ditambahkan.\r
\r
Dengan kata lain:\r
\r
\`\`\`text\r
Pretrained BERT\r
      ↓\r
Transformer representation\r
      ↓\r
Classification Head\r
      ↓\r
2 kelas output\r
\`\`\`\r
\r
Beberapa weight berasal dari pretrained model, sedangkan bagian classification head yang baru perlu dilatih menggunakan dataset task tersebut.\r
\r
### Membuat \`Trainer\`\r
\r
\`\`\`python\r
from transformers import Trainer\r
\r
trainer = Trainer(\r
    model,\r
    training_args,\r
    train_dataset=tokenized_datasets["train"],\r
    eval_dataset=tokenized_datasets["validation"],\r
    data_collator=data_collator,\r
    processing_class=tokenizer,\r
)\r
\`\`\`\r
\r
\`Trainer\` kemudian dapat menjalankan fine-tuning dengan:\r
\r
\`\`\`python\r
trainer.train()\r
\`\`\`\r
\r
Namun, training saja belum cukup. Kita juga perlu mengetahui apakah model memiliki performa yang baik.\r
\r
### Evaluation\r
\r
Untuk melakukan evaluasi, \`Trainer\` perlu mengetahui:\r
\r
1. kapan evaluasi dilakukan;\r
2. metric apa yang harus dihitung.\r
\r
Contohnya:\r
\r
\`\`\`python\r
training_args = TrainingArguments(\r
    "test-trainer",\r
    eval_strategy="epoch"\r
)\r
\`\`\`\r
\r
Kemudian kita dapat menggunakan \`Trainer.predict()\` untuk mendapatkan prediction.\r
\r
Output model berupa **logits**. Untuk mendapatkan kelas prediksi, digunakan nilai dengan skor terbesar:\r
\r
\`\`\`python\r
preds = np.argmax(\r
    predictions.predictions,\r
    axis=-1\r
)\r
\`\`\`\r
\r
Untuk MRPC, metric yang digunakan adalah:\r
\r
* **Accuracy**\r
* **F1 score**\r
\r
Library 🤗 Evaluate dapat digunakan untuk menghitung metric tersebut:\r
\r
\`\`\`python\r
import evaluate\r
\r
metric = evaluate.load("glue", "mrpc")\r
\r
metric.compute(\r
    predictions=preds,\r
    references=predictions.label_ids\r
)\r
\`\`\`\r
\r
Dengan \`compute_metrics()\`, metric tersebut dapat diintegrasikan langsung ke dalam \`Trainer\`.\r
\r
### Advanced Training Features\r
\r
\`Trainer\` juga menyediakan beberapa fitur untuk meningkatkan efisiensi training.\r
\r
#### Mixed Precision\r
\r
\`\`\`python\r
TrainingArguments(\r
    "test-trainer",\r
    eval_strategy="epoch",\r
    fp16=True\r
)\r
\`\`\`\r
\r
Mixed precision menggunakan representasi floating point dengan precision yang lebih rendah pada bagian tertentu sehingga training dapat menjadi lebih cepat dan menggunakan lebih sedikit memory.\r
\r
#### Gradient Accumulation\r
\r
Jika GPU memiliki keterbatasan memory, gradient accumulation dapat digunakan untuk memperoleh **effective batch size** yang lebih besar.\r
\r
Contohnya:\r
\r
\`\`\`python\r
per_device_train_batch_size=4\r
gradient_accumulation_steps=4\r
\`\`\`\r
\r
Effective batch size menjadi:\r
\r
\`\`\`text\r
4 × 4 = 16\r
\`\`\`\r
\r
#### Learning Rate Scheduling\r
\r
Learning rate dapat diatur menggunakan scheduler tertentu.\r
\r
Contohnya:\r
\r
\`\`\`python\r
learning_rate=2e-5\r
lr_scheduler_type="cosine"\r
\`\`\`\r
\r
\`Trainer\` juga mendukung training pada beberapa GPU atau TPU dan menyediakan berbagai konfigurasi distributed training.\r
\r
---`,Yc=`# 4. Full Training Loop\r
\r
Walaupun \`Trainer\` sangat membantu, terkadang kita membutuhkan kontrol penuh terhadap proses training.\r
\r
Karena itu, chapter ini juga menunjukkan bagaimana membuat **training loop menggunakan PyTorch secara manual**.\r
\r
Jika menggunakan \`Trainer\`, banyak proses dilakukan secara otomatis.\r
\r
Dengan training loop manual, kita harus menangani sendiri:\r
\r
* DataLoader\r
* model\r
* optimizer\r
* learning rate scheduler\r
* device\r
* forward pass\r
* loss\r
* backward pass\r
* optimizer step\r
* evaluation\r
\r
### Persiapan Dataset\r
\r
Sebelum membuat DataLoader, dataset perlu disesuaikan dengan input yang diharapkan model.\r
\r
Beberapa langkah yang dilakukan:\r
\r
\`\`\`python\r
tokenized_datasets = tokenized_datasets.remove_columns(\r
    ["sentence1", "sentence2", "idx"]\r
)\r
\r
tokenized_datasets = tokenized_datasets.rename_column(\r
    "label",\r
    "labels"\r
)\r
\r
tokenized_datasets.set_format("torch")\r
\`\`\`\r
\r
Kemudian dibuat DataLoader:\r
\r
\`\`\`python\r
from torch.utils.data import DataLoader\r
\r
train_dataloader = DataLoader(\r
    tokenized_datasets["train"],\r
    shuffle=True,\r
    batch_size=8,\r
    collate_fn=data_collator\r
)\r
\r
eval_dataloader = DataLoader(\r
    tokenized_datasets["validation"],\r
    batch_size=8,\r
    collate_fn=data_collator\r
)\r
\`\`\`\r
\r
\`DataLoader\` bertugas menyediakan data dalam bentuk batch yang dapat digunakan model.\r
\r
### Model dan Loss\r
\r
Model dibuat seperti sebelumnya:\r
\r
\`\`\`python\r
model = AutoModelForSequenceClassification.from_pretrained(\r
    checkpoint,\r
    num_labels=2\r
)\r
\`\`\`\r
\r
Jika batch memiliki \`labels\`, model dapat mengembalikan \`loss\` sekaligus \`logits\`:\r
\r
\`\`\`python\r
outputs = model(**batch)\r
\r
loss = outputs.loss\r
logits = outputs.logits\r
\`\`\`\r
\r
Contohnya, untuk batch berisi 8 data dan 2 kelas:\r
\r
\`\`\`text\r
logits.shape = [8, 2]\r
\`\`\`\r
\r
### Optimizer\r
\r
Training loop membutuhkan optimizer.\r
\r
Chapter ini menggunakan:\r
\r
\`\`\`python\r
from torch.optim import AdamW\r
\r
optimizer = AdamW(\r
    model.parameters(),\r
    lr=5e-5\r
)\r
\`\`\`\r
\r
\`AdamW\` merupakan optimizer yang digunakan oleh \`Trainer\` dalam contoh tersebut. AdamW juga menerapkan weight decay secara terpisah dari update gradient.\r
\r
### Learning Rate Scheduler\r
\r
Learning rate tidak harus selalu konstan sepanjang training.\r
\r
Dalam contoh ini digunakan linear decay:\r
\r
\`\`\`python\r
from transformers import get_scheduler\r
\r
num_epochs = 3\r
num_training_steps = num_epochs * len(train_dataloader)\r
\r
lr_scheduler = get_scheduler(\r
    "linear",\r
    optimizer=optimizer,\r
    num_warmup_steps=0,\r
    num_training_steps=num_training_steps,\r
)\r
\`\`\`\r
\r
Learning rate secara bertahap dikurangi selama proses training.\r
\r
### Training Loop\r
\r
Setelah semua komponen siap, inti training loop dapat ditulis seperti:\r
\r
\`\`\`python\r
model.train()\r
\r
for epoch in range(num_epochs):\r
    for batch in train_dataloader:\r
\r
        batch = {\r
            k: v.to(device)\r
            for k, v in batch.items()\r
        }\r
\r
        outputs = model(**batch)\r
        loss = outputs.loss\r
\r
        loss.backward()\r
\r
        optimizer.step()\r
        lr_scheduler.step()\r
        optimizer.zero_grad()\r
\`\`\`\r
\r
Urutan pentingnya adalah:\r
\r
\`\`\`text\r
Batch\r
 ↓\r
Model / Forward Pass\r
 ↓\r
Loss\r
 ↓\r
Backward Pass\r
 ↓\r
Gradient\r
 ↓\r
Optimizer Step\r
 ↓\r
Learning Rate Scheduler\r
 ↓\r
Reset Gradient\r
\`\`\`\r
\r
### Evaluation Loop\r
\r
Training loop tidak otomatis memberi tahu seberapa baik model bekerja.\r
\r
Karena itu dibuat evaluation loop terpisah:\r
\r
\`\`\`python\r
model.eval()\r
\r
for batch in eval_dataloader:\r
\r
    batch = {\r
        k: v.to(device)\r
        for k, v in batch.items()\r
    }\r
\r
    with torch.no_grad():\r
        outputs = model(**batch)\r
\r
    logits = outputs.logits\r
    predictions = torch.argmax(\r
        logits,\r
        dim=-1\r
    )\r
\r
    metric.add_batch(\r
        predictions=predictions,\r
        references=batch["labels"]\r
    )\r
\`\`\`\r
\r
Setelah semua batch selesai:\r
\r
\`\`\`python\r
metric.compute()\r
\`\`\`\r
\r
Dengan cara tersebut, metric dapat dihitung berdasarkan seluruh data evaluasi.\r
\r
---\r
`,Xc=`# 5. Understanding Learning Curves\r
\r
Setelah memahami proses fine-tuning, kita juga harus memahami bagaimana mengetahui apakah training berjalan dengan baik.\r
\r
Salah satu cara penting adalah menggunakan **learning curves**.\r
\r
Learning curve merupakan visualisasi perubahan metric selama proses training.\r
\r
Dua kurva yang penting adalah:\r
\r
### Loss Curve\r
\r
Menunjukkan bagaimana nilai **loss/error** berubah selama training.\r
\r
Pada training yang berjalan dengan baik, secara umum:\r
\r
\`\`\`text\r
Loss\r
 ↑\r
 │\\\r
 │ \\\r
 │  \\\r
 │   \\____\r
 │\r
 └──────────→ Training\r
\`\`\`\r
\r
Karakteristik yang diperhatikan:\r
\r
* loss awal relatif tinggi;\r
* loss menurun selama training;\r
* akhirnya loss cenderung stabil atau konvergen.\r
\r
### Accuracy Curve\r
\r
Accuracy menunjukkan persentase prediksi yang benar.\r
\r
Secara umum:\r
\r
* accuracy dimulai lebih rendah;\r
* meningkat ketika model belajar;\r
* dapat mengalami plateau;\r
* peningkatannya tidak selalu mulus.\r
\r
Hal ini karena accuracy didasarkan pada prediksi benar/salah, sedangkan loss dapat berubah secara kontinu meskipun prediksi akhirnya masih salah.\r
\r
### Convergence\r
\r
**Convergence** terjadi ketika performa model mulai stabil dan kurva loss serta accuracy tidak mengalami perubahan besar.\r
\r
Secara sederhana:\r
\r
\`\`\`text\r
Training\r
   ↓\r
Loss turun\r
   ↓\r
Accuracy naik\r
   ↓\r
Perubahan semakin kecil\r
   ↓\r
Convergence\r
\`\`\`\r
\r
Konvergensi menunjukkan bahwa model sudah mempelajari pola tertentu dari data training.\r
\r
---\r
\r
## Masalah yang Dapat Terlihat dari Learning Curves\r
\r
### A. Overfitting\r
\r
Overfitting terjadi ketika model terlalu banyak mempelajari pola dari data training sehingga kemampuan generalisasinya terhadap validation data menjadi buruk.\r
\r
Ciri-cirinya:\r
\r
* training loss terus menurun;\r
* validation loss meningkat atau berhenti membaik;\r
* training accuracy jauh lebih tinggi daripada validation accuracy.\r
\r
Beberapa pendekatan yang disebutkan untuk mengatasi overfitting:\r
\r
* regularization;\r
* early stopping;\r
* data augmentation;\r
* mengurangi kompleksitas model.\r
\r
Early stopping dapat digunakan untuk menghentikan training ketika validation performance tidak lagi membaik.\r
\r
### B. Underfitting\r
\r
Underfitting terjadi ketika model belum mampu menangkap pola penting dari dataset.\r
\r
Penyebab yang disebutkan antara lain:\r
\r
* model terlalu kecil;\r
* learning rate terlalu rendah;\r
* dataset terlalu kecil atau tidak representatif;\r
* regularisasi yang kurang tepat.\r
\r
Ciri-cirinya:\r
\r
* training loss tetap tinggi;\r
* validation loss juga tinggi;\r
* performa berhenti meningkat terlalu cepat.\r
\r
Beberapa pendekatan:\r
\r
* meningkatkan kapasitas model;\r
* training lebih lama;\r
* menyesuaikan learning rate;\r
* memeriksa kualitas preprocessing dataset.\r
\r
### C. Erratic Learning Curves\r
\r
Kurva yang tidak stabil dapat menunjukkan training yang tidak berjalan dengan baik.\r
\r
Penyebab yang disebutkan:\r
\r
* learning rate terlalu tinggi;\r
* batch size terlalu kecil;\r
* regularisasi tidak tepat;\r
* preprocessing dataset bermasalah.\r
\r
Gejalanya dapat berupa:\r
\r
* loss sering naik-turun;\r
* accuracy tidak stabil;\r
* performa berosilasi tanpa pola yang jelas.\r
\r
Beberapa pendekatan:\r
\r
* menyesuaikan learning rate;\r
* meningkatkan batch size;\r
* menggunakan gradient clipping;\r
* memperbaiki preprocessing data.\r
\r
---\r
`,Zc=`# 6. Fine-Tuning, Check!\r
\r
Setelah menyelesaikan bagian-bagian sebelumnya, proses fine-tuning secara keseluruhan dapat dirangkum menjadi:\r
\r
\`\`\`text\r
1. Pilih pretrained model\r
        ↓\r
2. Pilih dataset\r
        ↓\r
3. Load dataset\r
        ↓\r
4. Preprocess / tokenize\r
        ↓\r
5. Dynamic padding\r
        ↓\r
6. Siapkan model\r
        ↓\r
7. Fine-tuning\r
        ↓\r
8. Evaluation\r
        ↓\r
9. Analisis learning curves\r
        ↓\r
10. Optimasi / perbaikan\r
\`\`\`\r
\r
Chapter ini memperkenalkan dua cara utama untuk melakukan training:\r
\r
### Menggunakan \`Trainer\`\r
\r
\`\`\`text\r
Dataset\r
 ↓\r
Preprocessing\r
 ↓\r
Trainer\r
 ↓\r
Training\r
 ↓\r
Evaluation\r
\`\`\`\r
\r
Kelebihannya adalah banyak detail training ditangani secara otomatis.\r
\r
### Menggunakan Custom Training Loop\r
\r
\`\`\`text\r
Dataset\r
 ↓\r
DataLoader\r
 ↓\r
Model\r
 ↓\r
Loss\r
 ↓\r
Backward\r
 ↓\r
Optimizer\r
 ↓\r
Scheduler\r
 ↓\r
Evaluation\r
\`\`\`\r
\r
Pendekatan ini memberikan kontrol yang lebih besar terhadap setiap tahap training.\r
\r
---\r
\r
## 🤗 Accelerate untuk Distributed Training\r
\r
Training loop manual pada satu CPU/GPU dapat dikembangkan menggunakan **🤗 Accelerate**.\r
\r
Accelerate membantu menangani:\r
\r
* device placement;\r
* distributed training;\r
* multiple GPU;\r
* TPU;\r
* mixed precision.\r
\r
Contoh inisialisasi:\r
\r
\`\`\`python\r
from accelerate import Accelerator\r
\r
accelerator = Accelerator()\r
\`\`\`\r
\r
Kemudian model, optimizer, dan dataloader dipersiapkan:\r
\r
\`\`\`python\r
train_dl, eval_dl, model, optimizer = accelerator.prepare(\r
    train_dataloader,\r
    eval_dataloader,\r
    model,\r
    optimizer\r
)\r
\`\`\`\r
\r
Pada backward pass:\r
\r
\`\`\`python\r
accelerator.backward(loss)\r
\`\`\`\r
\r
Dengan perubahan tersebut, training loop yang sebelumnya dibuat untuk satu device dapat disiapkan untuk distributed setup.\r
\r
Untuk menjalankannya, Accelerate menyediakan:\r
\r
\`\`\`bash\r
accelerate config\r
\`\`\`\r
\r
untuk konfigurasi environment, kemudian:\r
\r
\`\`\`bash\r
accelerate launch train.py\r
\`\`\`\r
\r
untuk menjalankan training.\r
\r
---\r
`,Qc=`# 7. Kesimpulan\r
\r
Chapter 3 membawa pembelajaran dari sekadar **menggunakan pretrained model** menjadi **melatih model tersebut agar sesuai dengan task tertentu**.\r
\r
Hal-hal utama yang dipelajari:\r
\r
* Dataset dapat diambil langsung dari Hugging Face Hub menggunakan 🤗 Datasets.\r
* Dataset perlu diproses sebelum dapat digunakan oleh model.\r
* Tokenizer mengubah teks menjadi input numerik.\r
* Untuk pasangan kalimat, tokenizer dapat menangani kedua sequence sekaligus.\r
* \`token_type_ids\` dapat digunakan untuk membedakan bagian input pertama dan kedua pada model yang mendukungnya.\r
* \`Dataset.map()\` membantu melakukan preprocessing secara efisien.\r
* \`batched=True\` dapat mempercepat proses preprocessing.\r
* Padding sebaiknya dapat dilakukan secara dinamis ketika batch dibuat.\r
* \`DataCollatorWithPadding\` membantu melakukan dynamic padding.\r
* \`Trainer\` menyediakan API tingkat tinggi untuk fine-tuning.\r
* \`TrainingArguments\` digunakan untuk mengatur konfigurasi training.\r
* Evaluation membutuhkan metric agar performa model dapat dianalisis dengan lebih jelas.\r
* \`Evaluate\` dapat digunakan untuk menghitung metric seperti accuracy dan F1.\r
* Custom PyTorch training loop memberikan kontrol lebih besar terhadap proses training.\r
* Komponen penting training loop meliputi model, loss, backward pass, optimizer, scheduler, dan evaluation.\r
* 🤗 Accelerate dapat membantu menjalankan training pada beberapa GPU atau TPU.\r
* Learning curves membantu memahami apakah model belajar dengan baik.\r
* Overfitting, underfitting, dan training yang tidak stabil dapat dikenali melalui pola learning curves.\r
\r
**Inti Chapter 3:**\r
\r
> **Pretrained model tidak harus digunakan apa adanya. Dengan dataset yang sesuai, model dapat di-fine-tune untuk tugas tertentu. Hugging Face menyediakan beberapa tingkat abstraksi, mulai dari \`Trainer\` yang sederhana hingga custom training loop dengan PyTorch dan Accelerate untuk kontrol serta distributed training yang lebih besar.**\r
\r
Dengan demikian, setelah Chapter 3 kita sudah memiliki alur yang cukup lengkap:\r
\r
\`\`\`text\r
Understand Model\r
      ↓\r
Tokenizer\r
      ↓\r
Dataset\r
      ↓\r
Preprocessing\r
      ↓\r
Fine-Tuning\r
      ↓\r
Evaluation\r
      ↓\r
Learning Curves\r
      ↓\r
Optimization\r
\`\`\`\r
\r
Ini menjadi fondasi penting sebelum masuk ke tahap berikutnya dalam ekosistem Hugging Face, yaitu **menyimpan, membagikan, dan menggunakan model yang telah dilatih melalui Hugging Face Hub**.\r
`,$c=`**Hugging Face Hub** adalah platform utama untuk menemukan, menggunakan, dan berkontribusi terhadap model dan dataset.\r
\r
Hub menyediakan tempat terpusat bagi komunitas untuk:\r
\r
* menemukan model dan dataset;\r
* menggunakan model yang sudah dilatih;\r
* membagikan model hasil training atau fine-tuning;\r
* melakukan versioning terhadap model;\r
* membuat hasil eksperimen lebih reproducible.\r
\r
Model yang tersedia di Hub tidak hanya berasal dari 🤗 Transformers atau NLP. Terdapat pula model dari berbagai library dan bidang, misalnya:\r
\r
* **Flair** dan **AllenNLP** untuk NLP;\r
* **Asteroid** dan **pyannote** untuk speech;\r
* **timm** untuk computer vision.\r
\r
Setiap model di Hub di-host sebagai **Git repository**. Hal ini memungkinkan model memiliki versioning sehingga perubahan terhadap model dapat dilacak dan hasilnya lebih mudah direproduksi.\r
\r
## Keuntungan membagikan model ke Hub\r
\r
Dengan membagikan model ke Hub:\r
\r
* model dapat digunakan oleh komunitas;\r
* pengguna lain tidak perlu melatih model dari awal;\r
* waktu dan resource komputasi dapat dihemat;\r
* model hasil training dapat digunakan kembali;\r
* model dapat dibagikan dan dikembangkan lebih lanjut oleh pengguna lain.\r
\r
Selain itu, ketika sebuah model dibagikan ke Hub, tersedia **hosted Inference API** untuk model tersebut. Pengguna dapat mencoba model secara langsung dari halaman model menggunakan input yang sesuai.\r
\r
Model publik di Hub dapat digunakan dan dibagikan secara gratis. Hugging Face juga menyediakan paket berbayar untuk kebutuhan seperti berbagi model secara privat.\r
\r
---\r
`,el=`Model Hub mempermudah proses pemilihan pretrained model yang sesuai dengan kebutuhan.\r
\r
Sebagai contoh, kita ingin menggunakan model berbahasa Prancis untuk melakukan **mask filling**.\r
\r
Model yang digunakan adalah:\r
\r
\`\`\`text\r
camembert-base\r
\`\`\`\r
\r
Model tersebut dapat digunakan melalui \`pipeline()\`:\r
\r
\`\`\`python\r
from transformers import pipeline\r
\r
camembert_fill_mask = pipeline("fill-mask", model="camembert-base")\r
results = camembert_fill_mask("Le camembert est <mask> :)")\r
\`\`\`\r
\r
Outputnya berisi beberapa kemungkinan kata untuk menggantikan \`<mask>\`, lengkap dengan \`score\`:\r
\r
\`\`\`python\r
[\r
  {\r
    'sequence': 'Le camembert est délicieux :)',\r
    'score': 0.490910053173253,\r
    'token': 7200,\r
    'token_str': 'délicieux'\r
  },\r
  {\r
    'sequence': 'Le camembert est excellent :)',\r
    'score': 0.1055697426199913,\r
    'token': 2183,\r
    'token_str': 'excellent'\r
  }\r
]\r
\`\`\`\r
\r
Hal penting yang perlu diperhatikan adalah **checkpoint yang digunakan harus sesuai dengan task**.\r
\r
Contohnya:\r
\r
\`\`\`python\r
pipeline("fill-mask", model="camembert-base")\r
\`\`\`\r
\r
sesuai karena \`camembert-base\` dapat digunakan untuk masked language modeling.\r
\r
Sebaliknya, menggunakan checkpoint tersebut pada:\r
\r
\`\`\`python\r
pipeline("text-classification", model="camembert-base")\r
\`\`\`\r
\r
tidak sesuai karena model head yang digunakan tidak ditujukan untuk task tersebut.\r
\r
Karena itu, Hugging Face menyarankan penggunaan **task selector** pada Hub untuk membantu memilih checkpoint yang sesuai.\r
\r
## Menggunakan model architecture secara langsung\r
\r
Checkpoint juga dapat digunakan secara langsung melalui architecture-specific classes:\r
\r
\`\`\`python\r
from transformers import CamembertTokenizer, CamembertForMaskedLM\r
\r
tokenizer = CamembertTokenizer.from_pretrained("camembert-base")\r
model = CamembertForMaskedLM.from_pretrained("camembert-base")\r
\`\`\`\r
\r
Namun, Hugging Face merekomendasikan penggunaan **\`Auto*\` classes** karena bersifat architecture-agnostic.\r
\r
Contohnya:\r
\r
\`\`\`python\r
from transformers import AutoTokenizer, AutoModelForMaskedLM\r
\r
tokenizer = AutoTokenizer.from_pretrained("camembert-base")\r
model = AutoModelForMaskedLM.from_pretrained("camembert-base")\r
\`\`\`\r
\r
Keuntungan pendekatan ini adalah kode tidak terlalu bergantung pada arsitektur tertentu. Jika checkpoint diganti, kode tetap dapat digunakan dengan lebih mudah.\r
\r
## Hal yang perlu diperiksa sebelum menggunakan pretrained model\r
\r
Sebelum menggunakan sebuah pretrained model, kita perlu memeriksa:\r
\r
* bagaimana model tersebut dilatih;\r
* dataset yang digunakan untuk training;\r
* keterbatasan model;\r
* bias yang mungkin terdapat pada model.\r
\r
Informasi tersebut seharusnya tersedia pada **model card** model yang bersangkutan.\r
\r
> **Ketika menggunakan pretrained model, jangan hanya melihat performanya. Periksa juga bagaimana model tersebut dilatih, dataset yang digunakan, keterbatasan, dan biasnya melalui model card.**\r
\r
---\r
`,tl=`Hugging Face mendorong pengguna yang telah melatih model untuk membagikannya kepada komunitas.\r
\r
Model yang dibagikan, termasuk model yang dilatih menggunakan dataset yang sangat spesifik, tetap dapat bermanfaat bagi pengguna lain karena:\r
\r
* menghemat waktu training;\r
* menghemat resource komputasi;\r
* menyediakan trained artifact yang dapat digunakan kembali;\r
* memungkinkan komunitas memanfaatkan hasil pekerjaan yang sudah dilakukan.\r
\r
Ada **tiga cara utama** untuk membuat model repository baru:\r
\r
* menggunakan \`push_to_hub\` API;\r
* menggunakan library \`huggingface_hub\`;\r
* menggunakan web interface.\r
\r
Setelah repository dibuat, file dapat di-upload menggunakan Git dan Git LFS.\r
\r
## Menggunakan \`push_to_hub\` API\r
\r
Cara sederhana untuk meng-upload model ke Hub adalah menggunakan \`push_to_hub\`.\r
\r
Sebelum melakukan upload, diperlukan authentication token agar API mengetahui identitas pengguna dan namespace yang memiliki izin untuk ditulis.\r
\r
Pada notebook:\r
\r
\`\`\`python\r
from huggingface_hub import notebook_login\r
\r
notebook_login()\r
\`\`\`\r
\r
Atau melalui terminal:\r
\r
\`\`\`bash\r
huggingface-cli login\r
\`\`\`\r
\r
### Upload menggunakan \`Trainer\`\r
\r
Jika menggunakan \`Trainer\`, model dapat otomatis di-upload ke Hub dengan mengatur:\r
\r
\`\`\`python\r
from transformers import TrainingArguments\r
\r
training_args = TrainingArguments(\r
    "bert-finetuned-mrpc",\r
    save_strategy="epoch",\r
    push_to_hub=True\r
)\r
\`\`\`\r
\r
Ketika:\r
\r
\`\`\`python\r
trainer.train()\r
\`\`\`\r
\r
dijalankan, \`Trainer\` akan meng-upload model ke Hub setiap kali model disimpan.\r
\r
Setelah training selesai, versi terakhir model dapat di-upload menggunakan:\r
\r
\`\`\`python\r
trainer.push_to_hub()\r
\`\`\`\r
\r
Proses ini juga menghasilkan **model card** dengan metadata yang relevan, termasuk hyperparameters dan evaluation results.\r
\r
### Upload model dan tokenizer secara langsung\r
\r
Model dan tokenizer juga memiliki method \`push_to_hub()\`.\r
\r
Contohnya:\r
\r
\`\`\`python\r
from transformers import AutoModelForMaskedLM, AutoTokenizer\r
\r
checkpoint = "camembert-base"\r
\r
model = AutoModelForMaskedLM.from_pretrained(checkpoint)\r
tokenizer = AutoTokenizer.from_pretrained(checkpoint)\r
\`\`\`\r
\r
Setelah model siap:\r
\r
\`\`\`python\r
model.push_to_hub("dummy-model")\r
\`\`\`\r
\r
Kemudian tokenizer juga di-upload:\r
\r
\`\`\`python\r
tokenizer.push_to_hub("dummy-model")\r
\`\`\`\r
\r
Jika repository berada pada organization tertentu:\r
\r
\`\`\`python\r
tokenizer.push_to_hub(\r
    "dummy-model",\r
    organization="huggingface"\r
)\r
\`\`\`\r
\r
Dengan demikian, repository dapat berisi file model sekaligus tokenizer.\r
\r
---\r
\r
## Menggunakan \`huggingface_hub\` Python library\r
\r
Library \`huggingface_hub\` menyediakan tools dan API untuk berinteraksi dengan Hugging Face Hub.\r
\r
Library ini dapat digunakan untuk:\r
\r
* mengelola repository;\r
* membuat repository;\r
* menghapus repository;\r
* mengubah visibility repository;\r
* mengambil informasi repository;\r
* melakukan upload file;\r
* mengelola model dan dataset.\r
\r
Contoh import:\r
\r
\`\`\`python\r
from huggingface_hub import (\r
    login,\r
    logout,\r
    whoami,\r
\r
    create_repo,\r
    delete_repo,\r
    update_repo_visibility,\r
\r
    list_models,\r
    list_datasets,\r
    list_metrics,\r
    list_repo_files,\r
    upload_file,\r
    delete_file,\r
)\r
\`\`\`\r
\r
Repository dapat dibuat dengan:\r
\r
\`\`\`python\r
from huggingface_hub import create_repo\r
\r
create_repo("dummy-model")\r
\`\`\`\r
\r
Repository juga dapat dibuat pada organization:\r
\r
\`\`\`python\r
from huggingface_hub import create_repo\r
\r
create_repo(\r
    "dummy-model",\r
    organization="huggingface"\r
)\r
\`\`\`\r
\r
Beberapa parameter yang dapat digunakan antara lain:\r
\r
* \`private\` → menentukan apakah repository bersifat private;\r
* \`token\` → menggunakan token tertentu;\r
* \`repo_type\` → menentukan tipe repository seperti \`"dataset"\` atau \`"space"\`.\r
\r
---\r
\r
## Menggunakan web interface\r
\r
Repository juga dapat dibuat langsung melalui web interface Hugging Face Hub.\r
\r
Melalui interface tersebut, pengguna dapat:\r
\r
* membuat repository;\r
* menambahkan file;\r
* meng-upload file berukuran besar;\r
* melihat model;\r
* melihat perubahan atau diff;\r
* mengelola repository.\r
\r
Saat membuat repository, pengguna dapat menentukan:\r
\r
* owner repository;\r
* nama model;\r
* apakah model public atau private.\r
\r
Repository kemudian dapat diisi dengan \`README.md\`.\r
\r
File \`README.md\` menggunakan Markdown dan menjadi tempat penting untuk mendokumentasikan model.\r
\r
---\r
\r
## Uploading model files\r
\r
Sistem pengelolaan file pada Hugging Face Hub menggunakan:\r
\r
* **Git** untuk regular files;\r
* **Git LFS (Git Large File Storage)** untuk file berukuran besar.\r
\r
Ada beberapa pendekatan untuk meng-upload file.\r
\r
### \`upload_file\`\r
\r
Pendekatan \`upload_file\` tidak membutuhkan Git dan Git LFS secara langsung.\r
\r
Contohnya:\r
\r
\`\`\`python\r
from huggingface_hub import upload_file\r
\r
upload_file(\r
    "<path_to_file>/config.json",\r
    path_in_repo="config.json",\r
    repo_id="<namespace>/dummy-model",\r
)\r
\`\`\`\r
\r
Pendekatan ini memiliki keterbatasan untuk file berukuran lebih dari **5 GB**.\r
\r
---\r
\r
## \`Repository\` class\r
\r
\`Repository\` class digunakan untuk mengelola local repository dengan pendekatan seperti Git.\r
\r
Contohnya:\r
\r
\`\`\`python\r
from huggingface_hub import Repository\r
\r
repo = Repository(\r
    "<path_to_dummy_folder>",\r
    clone_from="<namespace>/dummy-model"\r
)\r
\`\`\`\r
\r
Setelah repository di-clone, tersedia beberapa method seperti:\r
\r
\`\`\`python\r
repo.git_pull()\r
repo.git_add()\r
repo.git_commit()\r
repo.git_push()\r
repo.git_tag()\r
\`\`\`\r
\r
Model dan tokenizer dapat disimpan ke folder repository:\r
\r
\`\`\`python\r
model.save_pretrained("<path_to_dummy_folder>")\r
tokenizer.save_pretrained("<path_to_dummy_folder>")\r
\`\`\`\r
\r
Kemudian file dapat di-stage, commit, dan push:\r
\r
\`\`\`python\r
repo.git_add()\r
repo.git_commit("Add model and tokenizer files")\r
repo.git_push()\r
\`\`\`\r
\r
---\r
\r
## Git-based approach\r
\r
Pendekatan paling langsung adalah menggunakan Git dan Git LFS.\r
\r
Pertama, Git LFS perlu diinisialisasi:\r
\r
\`\`\`bash\r
git lfs install\r
\`\`\`\r
\r
Kemudian repository dapat di-clone:\r
\r
\`\`\`bash\r
git clone https://huggingface.co/<namespace>/<your-model-id>\r
\`\`\`\r
\r
Masuk ke repository:\r
\r
\`\`\`bash\r
cd dummy && ls\r
\`\`\`\r
\r
Setelah model dan tokenizer disimpan ke repository, file dapat terlihat seperti:\r
\r
\`\`\`text\r
config.json\r
pytorch_model.bin\r
README.md\r
sentencepiece.bpe.model\r
special_tokens_map.json\r
tokenizer_config.json\r
tokenizer.json\r
\`\`\`\r
\r
File model yang besar akan ditangani menggunakan Git LFS.\r
\r
File kemudian dapat ditambahkan:\r
\r
\`\`\`bash\r
git add .\r
\`\`\`\r
\r
Status Git dapat diperiksa:\r
\r
\`\`\`bash\r
git status\r
\`\`\`\r
\r
Status Git LFS juga dapat diperiksa:\r
\r
\`\`\`bash\r
git lfs status\r
\`\`\`\r
\r
Setelah itu lakukan commit:\r
\r
\`\`\`bash\r
git commit -m "First model version"\r
\`\`\`\r
\r
Dan upload ke Hub:\r
\r
\`\`\`bash\r
git push\r
\`\`\`\r
\r
Dengan demikian, file model dan tokenizer akan tersedia di model repository pada Hugging Face Hub.\r
\r
---`,nl=`**Model card** adalah file yang sangat penting dalam sebuah model repository.\r
\r
Fungsinya adalah memberikan informasi mengenai model sehingga pengguna lain dapat:\r
\r
* memahami tujuan model;\r
* memahami bagaimana model dilatih;\r
* mengetahui dataset yang digunakan;\r
* mengetahui cara menggunakan model;\r
* memahami keterbatasan dan bias;\r
* mereproduksi hasil training dan evaluasi;\r
* menggunakan model secara lebih tepat.\r
\r
Model card juga membantu membuat model lebih **reusable** dan **reproducible**.\r
\r
Model card dibuat melalui file:\r
\r
\`\`\`text\r
README.md\r
\`\`\`\r
\r
File tersebut menggunakan format **Markdown**.\r
\r
## Struktur model card\r
\r
Model card biasanya dimulai dengan overview singkat mengenai model, kemudian diikuti beberapa bagian:\r
\r
* Model description\r
* Intended uses & limitations\r
* How to use\r
* Limitations and bias\r
* Training data\r
* Training procedure\r
* Evaluation results\r
\r
---\r
\r
## Model description\r
\r
Bagian ini berisi informasi dasar mengenai model.\r
\r
Informasi yang dapat dicantumkan antara lain:\r
\r
* architecture;\r
* version;\r
* paper yang memperkenalkan model, jika ada;\r
* original implementation, jika tersedia;\r
* author;\r
* informasi umum mengenai model;\r
* copyright;\r
* informasi mengenai training;\r
* jumlah parameter;\r
* disclaimer penting.\r
\r
Tujuannya adalah memberikan gambaran dasar mengenai model kepada pengguna.\r
\r
---\r
\r
## Intended uses & limitations\r
\r
Bagian ini menjelaskan **untuk apa model tersebut digunakan** dan **di mana model tersebut tidak ditujukan untuk digunakan**.\r
\r
Informasi yang dapat dicantumkan antara lain:\r
\r
* use cases;\r
* bahasa yang didukung;\r
* bidang atau domain penggunaan;\r
* kondisi penggunaan;\r
* area yang berada di luar cakupan model;\r
* kondisi ketika model diperkirakan memiliki performa yang kurang baik.\r
\r
Bagian ini membantu pengguna menentukan apakah model sesuai dengan kebutuhan mereka.\r
\r
---\r
\r
## How to use\r
\r
Bagian ini memberikan contoh bagaimana model digunakan.\r
\r
Contohnya dapat berupa penggunaan:\r
\r
* \`pipeline()\`;\r
* model class;\r
* tokenizer class;\r
* kode lain yang diperlukan untuk menggunakan model.\r
\r
Contoh kode penggunaan sebaiknya dibuat cukup jelas sehingga pengguna lain dapat langsung memahami cara menggunakan model.\r
\r
---\r
\r
## Training data\r
\r
Bagian ini menjelaskan **dataset yang digunakan untuk melatih model**.\r
\r
Informasi yang dapat diberikan:\r
\r
* nama dataset;\r
* deskripsi singkat dataset;\r
* informasi relevan mengenai data training.\r
\r
Tujuannya agar pengguna mengetahui sumber data yang digunakan dalam proses training.\r
\r
---\r
\r
## Training procedure\r
\r
Bagian ini menjelaskan aspek-aspek training yang penting untuk **reproducibility**.\r
\r
Informasi yang dapat dicantumkan antara lain:\r
\r
* preprocessing;\r
* postprocessing;\r
* jumlah epoch;\r
* batch size;\r
* learning rate;\r
* konfigurasi training lainnya yang relevan.\r
\r
Dengan informasi tersebut, pengguna lain memiliki gambaran yang lebih jelas mengenai bagaimana model dilatih.\r
\r
---\r
\r
## Variable and metrics\r
\r
Bagian ini menjelaskan **metric yang digunakan untuk evaluasi** dan faktor-faktor yang diukur.\r
\r
Informasi yang perlu dijelaskan meliputi:\r
\r
* metric yang digunakan;\r
* dataset yang digunakan;\r
* dataset split yang digunakan;\r
* faktor yang diukur.\r
\r
Metric sebaiknya disesuaikan dengan intended users dan intended use cases yang telah dijelaskan sebelumnya.\r
\r
---\r
\r
## Evaluation results\r
\r
Bagian ini memberikan informasi mengenai performa model pada evaluation dataset.\r
\r
Jika model menggunakan **decision threshold**, model card sebaiknya mencantumkan:\r
\r
* threshold yang digunakan ketika evaluasi; atau\r
* hasil evaluasi pada beberapa threshold yang berbeda.\r
\r
Hal ini membantu pengguna memahami performa model dalam konteks penggunaan yang dimaksud.\r
\r
---\r
\r
## Model card metadata\r
\r
Selain isi README, model card juga dapat memiliki **metadata**.\r
\r
Metadata digunakan oleh Hugging Face Hub untuk mengategorikan model sehingga model dapat difilter berdasarkan informasi tertentu seperti:\r
\r
* task;\r
* language;\r
* library;\r
* license;\r
* dataset;\r
* metrics.\r
\r
Contoh metadata pada model card:\r
\r
\`\`\`yaml\r
language: fr\r
license: mit\r
datasets:\r
- oscar\r
\`\`\`\r
\r
Metadata tersebut menunjukkan bahwa model:\r
\r
* menggunakan bahasa Prancis (\`fr\`);\r
* menggunakan lisensi MIT;\r
* dilatih menggunakan dataset Oscar.\r
\r
Metadata kemudian dibaca oleh Hugging Face Hub untuk membantu mengidentifikasi dan mengategorikan model.\r
\r
---`,rl=`**penggunaan, sharing, dan dokumentasi pretrained model** Face Hub, Alur besarnya dapat digambarkan sebagai:\r
\r
\`\`\`text\r
Pretrained Model\r
       ↓\r
Hugging Face Hub\r
       ↓\r
Select Appropriate Checkpoint\r
       ↓\r
Use with pipeline() / Auto* Classes\r
       ↓\r
Fine-tune / Modify Model\r
       ↓\r
Share to Hub\r
       ↓\r
Create Model Card\r
       ↓\r
Document Model\r
\`\`\`\r
\r
Hal-hal utama yang perlu dipahami:\r
\r
1. **Hugging Face Hub** merupakan tempat untuk menemukan, menggunakan, dan membagikan model serta dataset.\r
2. Model di Hub menggunakan repository sehingga versioning dan reproducibility dapat dilakukan.\r
3. Saat menggunakan pretrained model, **checkpoint harus sesuai dengan task**.\r
4. \`pipeline()\` menyediakan cara sederhana untuk menggunakan model.\r
5. \`Auto*\` classes membuat penggunaan model lebih fleksibel terhadap architecture.\r
6. Model dapat dibagikan menggunakan:\r
\r
   * \`push_to_hub\`;\r
   * \`huggingface_hub\`;\r
   * web interface;\r
   * Git dan Git LFS.\r
7. **Model card** merupakan bagian penting untuk menjelaskan model kepada pengguna lain.\r
8. Model card mendokumentasikan penggunaan, dataset, training procedure, evaluasi, keterbatasan, dan informasi lain yang diperlukan untuk reproducibility.\r
9. Metadata pada model card membantu Hugging Face Hub mengategorikan dan memfilter model.\r
\r
Dengan demikian, Chapter 4 tidak hanya mengajarkan **cara menggunakan pretrained model**, tetapi juga bagaimana **membagikan model agar dapat digunakan kembali oleh komunitas secara jelas dan reproducible**.\r
`,il=`Chapter 5 membahas beberapa pertanyaan penting:\r
\r
* Bagaimana jika dataset tidak tersedia di Hugging Face Hub?\r
* Bagaimana melakukan slicing, filtering, dan manipulasi dataset?\r
* Bagaimana menggunakan Pandas bersama 🤗 Datasets?\r
* Bagaimana menangani dataset yang sangat besar?\r
* Apa itu **memory mapping** dan **Apache Arrow**?\r
* Bagaimana membuat dataset sendiri?\r
* Bagaimana meng-upload dataset ke Hugging Face Hub?\r
* Bagaimana menggunakan dataset untuk membuat **semantic search** dengan FAISS?\r
\r
Dengan demikian, Chapter 5 lebih berfokus pada **data preparation dan data management** sebelum dataset digunakan untuk training model.\r
\r
---\r
\r
# 1. Introduction\r
\r
Pada Chapter 3, 🤗 Datasets digunakan dalam proses fine-tuning model.\r
\r
Alur sederhananya:\r
\r
\`\`\`text\r
Load Dataset\r
     ↓\r
Dataset.map()\r
     ↓\r
Preprocessing\r
     ↓\r
Training\r
     ↓\r
Evaluation\r
\`\`\`\r
\r
Pada Chapter 5, pembahasannya diperluas.\r
\r
🤗 Datasets dapat digunakan untuk:\r
\r
* memuat dataset dari berbagai sumber;\r
* membersihkan dataset;\r
* memfilter data;\r
* memilih sebagian data;\r
* mengubah format data;\r
* bekerja dengan Pandas;\r
* menangani dataset berukuran sangat besar;\r
* membuat dataset sendiri;\r
* menyimpan dataset;\r
* meng-upload dataset ke Hugging Face Hub;\r
* membuat semantic search menggunakan embeddings dan FAISS.\r
\r
Jadi, fokus utama chapter ini bukan lagi hanya **menggunakan dataset untuk training**, tetapi memahami bagaimana dataset dikelola dari awal sampai siap digunakan.\r
\r
---`,al=`Tidak semua dataset tersedia di Hugging Face Hub.\r
\r
Dataset yang kita butuhkan bisa saja berada:\r
\r
* di laptop;\r
* di desktop;\r
* di server perusahaan;\r
* di remote server;\r
* dalam bentuk file lokal;\r
* dalam URL tertentu.\r
\r
🤗 Datasets menyediakan \`load_dataset()\` untuk memuat berbagai format data tersebut.\r
\r
## Working with local and remote datasets\r
\r
Beberapa format data yang umum didukung:\r
\r
| **Data format**    | **Loading script** | **Example**                                             |\r
| ------------------ | ------------------ | ------------------------------------------------------- |\r
| CSV & TSV          | \`csv\`              | \`load_dataset("csv", data_files="my_file.csv")\`         |\r
| Text files         | \`text\`             | \`load_dataset("text", data_files="my_file.txt")\`        |\r
| JSON & JSON Lines  | \`json\`             | \`load_dataset("json", data_files="my_file.jsonl")\`      |\r
| Pickled DataFrames | \`pandas\`           | \`load_dataset("pandas", data_files="my_dataframe.pkl")\` |\r
\r
Pada dasarnya kita menentukan:\r
\r
1. format dataset;\r
2. lokasi file melalui \`data_files\`.\r
\r
Contohnya:\r
\r
\`\`\`python\r
from datasets import load_dataset\r
\r
dataset = load_dataset(\r
    "csv",\r
    data_files="my_file.csv"\r
)\r
\`\`\`\r
\r
---\r
\r
## Loading a local dataset\r
\r
Sebagai contoh, digunakan **SQuAD-it**, yaitu dataset question answering berbahasa Italia.\r
\r
File dataset dapat di-download terlebih dahulu:\r
\r
\`\`\`bash\r
!wget https://github.com/crux82/squad-it/raw/master/SQuAD_it-train.json.gz\r
!wget https://github.com/crux82/squad-it/raw/master/SQuAD_it-test.json.gz\r
\`\`\`\r
\r
Kemudian file \`.gz\` dapat didekompresi:\r
\r
\`\`\`bash\r
!gzip -dkv SQuAD_it-*.json.gz\r
\`\`\`\r
\r
Setelah file menjadi JSON, dataset dapat dimuat menggunakan:\r
\r
\`\`\`python\r
from datasets import load_dataset\r
\r
squad_it_dataset = load_dataset(\r
    "json",\r
    data_files="SQuAD_it-train.json",\r
    field="data"\r
)\r
\`\`\`\r
\r
Hasilnya berupa \`DatasetDict\`:\r
\r
\`\`\`text\r
DatasetDict({\r
    train: Dataset({\r
        features: ['title', 'paragraphs'],\r
        num_rows: 442\r
    })\r
})\r
\`\`\`\r
\r
Artinya dataset memiliki:\r
\r
* split \`train\`;\r
* 442 rows;\r
* kolom \`title\`;\r
* kolom \`paragraphs\`.\r
\r
Contoh data dapat dilihat menggunakan:\r
\r
\`\`\`python\r
squad_it_dataset["train"][0]\r
\`\`\`\r
\r
---\r
\r
## Loading multiple splits\r
\r
Kita juga dapat menentukan beberapa file sekaligus menggunakan dictionary pada \`data_files\`.\r
\r
\`\`\`python\r
data_files = {\r
    "train": "SQuAD_it-train.json",\r
    "test": "SQuAD_it-test.json"\r
}\r
\r
squad_it_dataset = load_dataset(\r
    "json",\r
    data_files=data_files,\r
    field="data"\r
)\r
\r
squad_it_dataset\r
\`\`\`\r
\r
Hasilnya:\r
\r
\`\`\`text\r
DatasetDict({\r
    train: Dataset({\r
        features: ['title', 'paragraphs'],\r
        num_rows: 442\r
    })\r
    test: Dataset({\r
        features: ['title', 'paragraphs'],\r
        num_rows: 48\r
    })\r
})\r
\`\`\`\r
\r
Dengan cara ini, kita dapat memiliki \`train\` dan \`test\` dalam satu \`DatasetDict\`.\r
\r
---\r
\r
## \`data_files\` cukup fleksibel\r
\r
\`data_files\` dapat berupa:\r
\r
* satu file;\r
* list file;\r
* dictionary yang memetakan nama split ke file;\r
* pattern menggunakan wildcard/glob.\r
\r
Contohnya:\r
\r
\`\`\`python\r
data_files = "data/*.json"\r
\`\`\`\r
\r
Artinya seluruh file JSON yang sesuai pattern akan digunakan sebagai dataset.\r
\r
🤗 Datasets juga dapat melakukan dekompresi otomatis untuk format umum seperti:\r
\r
* GZIP;\r
* ZIP;\r
* TAR.\r
\r
Sehingga kita dapat langsung memberikan file terkompresi:\r
\r
\`\`\`python\r
data_files = {\r
    "train": "SQuAD_it-train.json.gz",\r
    "test": "SQuAD_it-test.json.gz"\r
}\r
\r
squad_it_dataset = load_dataset(\r
    "json",\r
    data_files=data_files,\r
    field="data"\r
)\r
\`\`\`\r
\r
---\r
\r
## Loading a remote dataset\r
\r
Dataset juga tidak harus di-download secara manual terlebih dahulu.\r
\r
Jika file tersedia pada remote server atau URL, URL tersebut dapat langsung diberikan ke \`data_files\`.\r
\r
Contohnya:\r
\r
\`\`\`python\r
url = "https://github.com/crux82/squad-it/raw/master/"\r
\r
data_files = {\r
    "train": url + "SQuAD_it-train.json.gz",\r
    "test": url + "SQuAD_it-test.json.gz",\r
}\r
\r
squad_it_dataset = load_dataset(\r
    "json",\r
    data_files=data_files,\r
    field="data"\r
)\r
\`\`\`\r
\r
Dengan demikian:\r
\r
\`\`\`text\r
Remote File\r
     ↓\r
load_dataset()\r
     ↓\r
Dataset / DatasetDict\r
\`\`\`\r
\r
Tidak diperlukan proses download dan dekompresi secara manual.\r
\r
---\r
`,ol=`Dataset yang kita dapatkan biasanya belum langsung siap digunakan.\r
\r
Sering kali kita perlu:\r
\r
* membersihkan data;\r
* menghapus data yang tidak valid;\r
* membuat kolom baru;\r
* mengubah nilai kolom;\r
* melakukan filtering;\r
* melakukan sorting;\r
* memilih subset data;\r
* mengubah format dataset.\r
\r
🤗 Datasets menyediakan berbagai fungsi untuk melakukan data manipulation.\r
\r
Contoh dataset yang digunakan pada bagian ini adalah **Drug Review Dataset**, yang berisi review pasien mengenai obat, kondisi yang ditangani, serta rating kepuasan.\r
\r
---\r
\r
## \`Dataset.map()\`\r
\r
\`map()\` digunakan untuk menerapkan fungsi terhadap data.\r
\r
Contoh membuat fungsi untuk mengubah \`condition\` menjadi lowercase:\r
\r
\`\`\`python\r
def lowercase_condition(example):\r
    return {"condition": example["condition"].lower()}\r
\`\`\`\r
\r
Kemudian:\r
\r
\`\`\`python\r
drug_dataset.map(lowercase_condition)\r
\`\`\`\r
\r
Namun, apabila terdapat nilai \`None\`, kode tersebut akan menghasilkan error karena \`None\` tidak memiliki method \`.lower()\`.\r
\r
Karena itu, data perlu dibersihkan terlebih dahulu menggunakan \`filter()\`.\r
\r
---\r
\r
## \`Dataset.filter()\`\r
\r
\`filter()\` digunakan untuk mempertahankan data yang memenuhi kondisi tertentu.\r
\r
Contohnya:\r
\r
\`\`\`python\r
drug_dataset = drug_dataset.filter(\r
    lambda x: x["condition"] is not None\r
)\r
\`\`\`\r
\r
Atau menggunakan function:\r
\r
\`\`\`python\r
def filter_nones(x):\r
    return x["condition"] is not None\r
\r
drug_dataset = drug_dataset.filter(filter_nones)\r
\`\`\`\r
\r
Dengan demikian, data yang memiliki \`condition = None\` dapat dihapus.\r
\r
---\r
\r
## Creating new columns\r
\r
Kita juga dapat membuat kolom baru menggunakan \`map()\`.\r
\r
Contohnya menghitung jumlah kata dalam setiap review:\r
\r
\`\`\`python\r
def compute_review_length(example):\r
    return {\r
        "review_length": len(example["review"].split())\r
    }\r
\`\`\`\r
\r
Kemudian:\r
\r
\`\`\`python\r
drug_dataset = drug_dataset.map(compute_review_length)\r
\`\`\`\r
\r
Kolom baru:\r
\r
\`\`\`text\r
review_length\r
\`\`\`\r
\r
akan ditambahkan ke dataset.\r
\r
Alternatif lainnya adalah \`Dataset.add_column()\`.\r
\r
---\r
\r
## Filtering berdasarkan kolom baru\r
\r
Setelah \`review_length\` dibuat, kita dapat membuang review yang terlalu pendek:\r
\r
\`\`\`python\r
drug_dataset = drug_dataset.filter(\r
    lambda x: x["review_length"] > 30\r
)\r
\`\`\`\r
\r
Artinya hanya review dengan jumlah kata lebih dari 30 yang dipertahankan.\r
\r
---\r
\r
## Membersihkan HTML characters\r
\r
Dataset yang berasal dari web dapat memiliki HTML character codes.\r
\r
Contoh:\r
\r
\`\`\`python\r
import html\r
\r
text = "I&#039;m a transformer called BERT"\r
\r
html.unescape(text)\r
\`\`\`\r
\r
Output:\r
\r
\`\`\`text\r
"I'm a transformer called BERT"\r
\`\`\`\r
\r
Untuk menerapkannya ke seluruh dataset:\r
\r
\`\`\`python\r
drug_dataset = drug_dataset.map(\r
    lambda x: {"review": html.unescape(x["review"])}\r
)\r
\`\`\`\r
\r
---\r
\r
## \`batched=True\`\r
\r
\`Dataset.map()\` memiliki parameter \`batched\`.\r
\r
Jika:\r
\r
\`\`\`python\r
batched=False\r
\`\`\`\r
\r
fungsi dipanggil terhadap satu contoh pada satu waktu.\r
\r
Sedangkan:\r
\r
\`\`\`python\r
batched=True\r
\`\`\`\r
\r
fungsi menerima beberapa contoh sekaligus.\r
\r
Contohnya:\r
\r
\`\`\`python\r
new_drug_dataset = drug_dataset.map(\r
    lambda x: {\r
        "review": [html.unescape(o) for o in x["review"]]\r
    },\r
    batched=True\r
)\r
\`\`\`\r
\r
Pendekatan ini dapat mempercepat processing karena beberapa data diproses sekaligus.\r
\r
\`batched=True\` juga sangat penting ketika menggunakan **fast tokenizer**, karena tokenizer tersebut dirancang untuk memproses banyak input sekaligus.\r
\r
---\r
\r
## \`num_proc\`\r
\r
Untuk preprocessing tertentu, kita juga dapat menggunakan multiprocessing:\r
\r
\`\`\`python\r
tokenized_dataset = drug_dataset.map(\r
    tokenize_function,\r
    batched=True,\r
    num_proc=8\r
)\r
\`\`\`\r
\r
Namun, penggunaan \`num_proc\` perlu disesuaikan dengan proses yang digunakan. Untuk fast tokenizer dengan \`batched=True\`, multiprocessing Python tidak selalu memberikan keuntungan tambahan.\r
\r
---\r
\r
## Mengubah jumlah data dengan \`map()\`\r
\r
\`map()\` dengan \`batched=True\` juga dapat digunakan ketika satu contoh menghasilkan beberapa feature.\r
\r
Untuk contoh tokenisasi teks panjang:\r
\r
\`\`\`python\r
def tokenize_and_split(examples):\r
    return tokenizer(\r
        examples["review"],\r
        truncation=True,\r
        max_length=128,\r
        return_overflowing_tokens=True,\r
    )\r
\`\`\`\r
\r
Parameter:\r
\r
\`\`\`python\r
return_overflowing_tokens=True\r
\`\`\`\r
\r
memungkinkan teks panjang dipecah menjadi beberapa bagian.\r
\r
---\r
\r
## Dataset → Pandas\r
\r
🤗 Datasets juga dapat digunakan bersama Pandas.\r
\r
Untuk mengubah format output menjadi Pandas:\r
\r
\`\`\`python\r
drug_dataset.set_format("pandas")\r
\`\`\`\r
\r
Kemudian:\r
\r
\`\`\`python\r
drug_dataset["train"][:3]\r
\`\`\`\r
\r
dapat menghasilkan \`pandas.DataFrame\`.\r
\r
Jika ingin mengambil seluruh training set:\r
\r
\`\`\`python\r
train_df = drug_dataset["train"][:]\r
\`\`\`\r
\r
Setelah menjadi DataFrame, kita dapat menggunakan operasi Pandas.\r
\r
Contohnya menghitung distribusi \`condition\`:\r
\r
\`\`\`python\r
frequencies = (\r
    train_df["condition"]\r
    .value_counts()\r
    .to_frame()\r
    .reset_index()\r
    .rename(\r
        columns={\r
            "index": "condition",\r
            "count": "frequency"\r
        }\r
    )\r
)\r
\r
frequencies.head()\r
\`\`\`\r
\r
---\r
\r
## Pandas → Dataset\r
\r
Setelah selesai melakukan analisis menggunakan Pandas, kita dapat mengubah DataFrame kembali menjadi Dataset:\r
\r
\`\`\`python\r
from datasets import Dataset\r
\r
freq_dataset = Dataset.from_pandas(frequencies)\r
\r
freq_dataset\r
\`\`\`\r
\r
Hasilnya merupakan objek \`Dataset\`.\r
\r
Jadi alurnya:\r
\r
\`\`\`text\r
🤗 Dataset\r
     ↓\r
set_format("pandas")\r
     ↓\r
Pandas DataFrame\r
     ↓\r
Analisis / Manipulasi\r
     ↓\r
Dataset.from_pandas()\r
     ↓\r
🤗 Dataset\r
\`\`\`\r
\r
---\r
\r
## Membuat validation set\r
\r
Dataset biasanya memiliki \`train\` dan \`test\`.\r
\r
Namun selama development, sebaiknya test set tidak digunakan terus-menerus untuk evaluasi.\r
\r
Kita dapat membuat validation set dari training data menggunakan:\r
\r
\`\`\`python\r
drug_dataset_clean = drug_dataset["train"].train_test_split(\r
    train_size=0.8,\r
    seed=42\r
)\r
\`\`\`\r
\r
Kemudian mengubah split \`test\` menjadi \`validation\`:\r
\r
\`\`\`python\r
drug_dataset_clean["validation"] = drug_dataset_clean.pop("test")\r
\`\`\`\r
\r
Dan menambahkan test set asli:\r
\r
\`\`\`python\r
drug_dataset_clean["test"] = drug_dataset["test"]\r
\`\`\`\r
\r
Hasil akhirnya:\r
\r
\`\`\`text\r
DatasetDict({\r
    train: ...\r
    validation: ...\r
    test: ...\r
})\r
\`\`\`\r
\r
Dengan struktur:\r
\r
\`\`\`text\r
Original train\r
     ↓\r
train_test_split()\r
     ├── train\r
     └── validation\r
\r
Original test\r
     ↓\r
test\r
\`\`\`\r
\r
---\r
\r
## Saving a dataset\r
\r
🤗 Datasets menyediakan beberapa cara untuk menyimpan dataset:\r
\r
| **Data format** | **Function**             |\r
| --------------- | ------------------------ |\r
| Arrow           | \`Dataset.save_to_disk()\` |\r
| CSV             | \`Dataset.to_csv()\`       |\r
| JSON            | \`Dataset.to_json()\`      |\r
\r
Contoh menyimpan dalam format Arrow:\r
\r
\`\`\`python\r
drug_dataset_clean.save_to_disk("drug-reviews")\r
\`\`\`\r
\r
Dataset tersebut kemudian dapat dimuat kembali:\r
\r
\`\`\`python\r
from datasets import load_from_disk\r
\r
drug_dataset_reloaded = load_from_disk("drug-reviews")\r
\`\`\`\r
\r
Format Arrow dirancang untuk pemrosesan dataset berperforma tinggi.\r
\r
---`,sl=`# 4. Big data? Datasets to the rescue!\r
\r
Dataset machine learning dapat memiliki ukuran yang sangat besar.\r
\r
Contohnya, corpus dapat berukuran:\r
\r
\`\`\`text\r
GB → puluhan GB → ratusan GB → TB\r
\`\`\`\r
\r
Jika dataset terlalu besar untuk RAM atau bahkan hard drive lokal, pendekatan biasa akan menjadi masalah.\r
\r
Datasets menyediakan dua konsep penting untuk mengatasi masalah ini:\r
\r
1. **Memory mapping**\r
2. **Streaming**\r
\r
---\r
\r
## Memory mapping\r
\r
🤗 Datasets menggunakan **memory-mapped files**.\r
\r
Secara sederhana, memory mapping memungkinkan dataset tetap berada pada filesystem dan hanya bagian data yang diperlukan yang diakses ke memory.\r
\r
Jadi bukan:\r
\r
\`\`\`text\r
Dataset besar\r
     ↓\r
Load semuanya\r
     ↓\r
RAM\r
\`\`\`\r
\r
melainkan lebih seperti:\r
\r
\`\`\`text\r
Dataset di filesystem\r
        ↓\r
Memory mapping\r
        ↓\r
Ambil bagian yang dibutuhkan\r
        ↓\r
RAM\r
\`\`\`\r
\r
Memory mapping merupakan mapping antara RAM dan filesystem storage.\r
\r
Keuntungannya adalah aplikasi tidak harus memasukkan seluruh file besar ke RAM untuk mengakses sebagian data.\r
\r
Di balik mekanisme tersebut digunakan **Apache Arrow** dan \`pyarrow\`.\r
\r
---\r
\r
## Mengukur penggunaan RAM\r
\r
Library \`psutil\` dapat digunakan untuk melihat penggunaan RAM:\r
\r
\`\`\`python\r
!pip install psutil\r
\`\`\`\r
\r
Kemudian:\r
\r
\`\`\`python\r
import psutil\r
\r
print(\r
    f"RAM used: "\r
    f"{psutil.Process().memory_info().rss / (1024 * 1024):.2f} MB"\r
)\r
\`\`\`\r
\r
Ukuran dataset pada disk dapat dilihat melalui:\r
\r
\`\`\`python\r
print(f"Dataset size in bytes: {pubmed_dataset.dataset_size}")\r
\r
size_gb = pubmed_dataset.dataset_size / (1024**3)\r
\r
print(\r
    f"Dataset size (cache file): "\r
    f"{size_gb:.2f} GB"\r
)\r
\`\`\`\r
\r
Dengan memory mapping, dataset yang ukurannya jauh lebih besar daripada RAM tetap dapat diakses tanpa harus memuat seluruh dataset ke memory sekaligus.\r
\r
---\r
\r
## Streaming datasets\r
\r
Memory mapping membantu ketika dataset masih dapat disimpan pada disk.\r
\r
Namun, bagaimana jika dataset bahkan terlalu besar untuk disimpan di hard drive?\r
\r
Gunakan **streaming**.\r
\r
Streaming dapat diaktifkan dengan:\r
\r
\`\`\`python\r
pubmed_dataset_streamed = load_dataset(\r
    "json",\r
    data_files=data_files,\r
    split="train",\r
    streaming=True\r
)\r
\`\`\`\r
\r
Ketika menggunakan:\r
\r
\`\`\`python\r
streaming=True\r
\`\`\`\r
\r
hasilnya bukan \`Dataset\`, tetapi:\r
\r
\`\`\`text\r
IterableDataset\r
\`\`\`\r
\r
Data kemudian diakses dengan melakukan iteration.\r
\r
Contohnya:\r
\r
\`\`\`python\r
next(iter(pubmed_dataset_streamed))\r
\`\`\`\r
\r
Data tidak perlu di-download seluruhnya terlebih dahulu. Data diakses secara bertahap ketika dibutuhkan.\r
\r
---\r
\r
## Processing streamed dataset\r
\r
\`IterableDataset\` tetap dapat diproses menggunakan \`map()\`.\r
\r
Contohnya tokenisasi:\r
\r
\`\`\`python\r
from transformers import AutoTokenizer\r
\r
tokenizer = AutoTokenizer.from_pretrained(\r
    "distilbert-base-uncased"\r
)\r
\r
tokenized_dataset = pubmed_dataset_streamed.map(\r
    lambda x: tokenizer(x["text"])\r
)\r
\r
next(iter(tokenized_dataset))\r
\`\`\`\r
\r
Kita juga dapat menggunakan:\r
\r
\`\`\`python\r
batched=True\r
\`\`\`\r
\r
untuk memproses data secara batch:\r
\r
\`\`\`python\r
tokenized_dataset = pubmed_dataset_streamed.map(\r
    lambda x: tokenizer(x["text"]),\r
    batched=True\r
)\r
\`\`\`\r
\r
---\r
\r
## Shuffle pada streaming dataset\r
\r
Streaming dataset dapat di-shuffle:\r
\r
\`\`\`python\r
shuffled_dataset = pubmed_dataset_streamed.shuffle(\r
    buffer_size=10_000,\r
    seed=42\r
)\r
\`\`\`\r
\r
Perbedaannya dengan \`Dataset.shuffle()\` adalah streaming dataset menggunakan **buffer**.\r
\r
---\r
\r
## \`take()\` dan \`skip()\`\r
\r
Untuk mengambil sebagian data dari streamed dataset:\r
\r
\`\`\`python\r
dataset_head = pubmed_dataset_streamed.take(5)\r
\r
list(dataset_head)\r
\`\`\`\r
\r
Untuk melewati sejumlah data:\r
\r
\`\`\`python\r
train_dataset = shuffled_dataset.skip(1000)\r
validation_dataset = shuffled_dataset.take(1000)\r
\`\`\`\r
\r
Dengan demikian:\r
\r
\`\`\`text\r
Streamed Dataset\r
       ↓\r
shuffle()\r
       ↓\r
       ├── take(1000) → validation\r
       └── skip(1000) → training\r
\`\`\`\r
\r
Teknik ini berguna ketika dataset terlalu besar untuk di-download atau disimpan seluruhnya secara lokal.\r
\r
---\r
`,cl=`# 5. Creating your own dataset\r
\r
Tidak semua kebutuhan NLP memiliki dataset yang sudah tersedia.\r
\r
Jika dataset yang dibutuhkan belum tersedia, kita dapat **membuat dataset sendiri**.\r
\r
Pada Chapter 5 digunakan contoh dataset berupa **GitHub issues** dari repository 🤗 Datasets.\r
\r
Dataset tersebut dapat digunakan untuk berbagai kebutuhan, misalnya:\r
\r
* menganalisis issue;\r
* membuat classifier;\r
* mengelompokkan issue berdasarkan label;\r
* membuat semantic search engine.\r
\r
---\r
\r
## Getting the data\r
\r
Data GitHub issues dapat diperoleh menggunakan GitHub REST API.\r
\r
Library \`requests\` dapat digunakan untuk melakukan HTTP request:\r
\r
\`\`\`python\r
!pip install requests\r
\`\`\`\r
\r
Kemudian:\r
\r
\`\`\`python\r
import requests\r
\`\`\`\r
\r
Data yang diperoleh dari API dapat diproses menjadi dataset menggunakan 🤗 Datasets.\r
\r
Intinya:\r
\r
\`\`\`text\r
GitHub API\r
    ↓\r
JSON data\r
    ↓\r
Data processing\r
    ↓\r
🤗 Dataset\r
\`\`\`\r
\r
---\r
\r
## Uploading the dataset to the Hub\r
\r
Setelah dataset selesai dibuat dan diproses, dataset dapat dibagikan ke Hugging Face Hub.\r
\r
Pertama lakukan login:\r
\r
\`\`\`python\r
from huggingface_hub import notebook_login\r
\r
notebook_login()\r
\`\`\`\r
\r
Atau melalui terminal:\r
\r
\`\`\`bash\r
huggingface-cli login\r
\`\`\`\r
\r
Kemudian dataset dapat di-upload menggunakan:\r
\r
\`\`\`python\r
issues_with_comments_dataset.push_to_hub(\r
    "github-issues"\r
)\r
\`\`\`\r
\r
Setelah dataset di-upload, pengguna lain dapat mengambilnya menggunakan:\r
\r
\`\`\`python\r
from datasets import load_dataset\r
\r
remote_dataset = load_dataset(\r
    "lewtun/github-issues",\r
    split="train"\r
)\r
\r
remote_dataset\r
\`\`\`\r
\r
Dengan demikian, dataset yang kita buat sendiri dapat digunakan kembali oleh komunitas.\r
\r
---\r
\r
## Creating a dataset card\r
\r
Selain dataset, dokumentasi juga penting.\r
\r
Dataset yang dibagikan sebaiknya memiliki **dataset card**.\r
\r
Dataset card membantu pengguna memahami:\r
\r
* bagaimana dataset dibuat;\r
* isi dataset;\r
* intended use;\r
* task yang sesuai;\r
* kemungkinan bias;\r
* risiko penggunaan dataset;\r
* informasi lain yang relevan.\r
\r
Dataset card disimpan pada:\r
\r
\`\`\`text\r
README.md\r
\`\`\`\r
\r
di repository dataset pada Hugging Face Hub.\r
\r
Dataset card juga dapat memiliki metadata agar dataset lebih mudah ditemukan dan dikategorikan pada Hub.\r
\r
---`,ll=`Pada bagian sebelumnya kita telah membuat dataset GitHub issues.\r
\r
Sekarang dataset tersebut digunakan untuk membuat **semantic search engine**.\r
\r
Tujuannya adalah memungkinkan pengguna mencari informasi berdasarkan **makna** query, bukan hanya kecocokan kata secara literal.\r
\r
---\r
\r
## Apa itu semantic search?\r
\r
Semantic search menggunakan representasi numerik berupa **embedding** untuk mencari dokumen yang memiliki makna yang mirip dengan query.\r
\r
Alurnya:\r
\r
\`\`\`text\r
Document\r
   ↓\r
Tokenizer / Transformer\r
   ↓\r
Embedding Vector\r
   ↓\r
FAISS Index\r
\`\`\`\r
\r
Ketika pengguna memasukkan query:\r
\r
\`\`\`text\r
"How can I load a dataset offline?"\r
\`\`\`\r
\r
query tersebut juga diubah menjadi embedding:\r
\r
\`\`\`text\r
Query\r
  ↓\r
Embedding Vector\r
  ↓\r
Compare with document embeddings\r
  ↓\r
Nearest documents\r
\`\`\`\r
\r
Konsep ini berbeda dari keyword search yang terutama mencari kecocokan kata.\r
\r
Transformer dapat menghasilkan embedding untuk token, kemudian embedding tersebut dapat digunakan sebagai representasi dari keseluruhan teks.\r
\r
---\r
\r
## Loading the dataset\r
\r
Dataset GitHub issues dapat dimuat:\r
\r
\`\`\`python\r
from datasets import load_dataset\r
\r
issues_dataset = load_dataset(\r
    "lewtun/github-issues",\r
    split="train"\r
)\r
\r
issues_dataset\r
\`\`\`\r
\r
Dataset tersebut kemudian dibersihkan.\r
\r
Misalnya pull request dan issue tanpa komentar dihapus:\r
\r
\`\`\`python\r
issues_dataset = issues_dataset.filter(\r
    lambda x: (\r
        x["is_pull_request"] == False\r
        and len(x["comments"]) > 0\r
    )\r
)\r
\`\`\`\r
\r
Kemudian hanya kolom yang relevan yang dipertahankan:\r
\r
\`\`\`python\r
columns = issues_dataset.column_names\r
\r
columns_to_keep = [\r
    "title",\r
    "body",\r
    "html_url",\r
    "comments"\r
]\r
\r
columns_to_remove = set(\r
    columns_to_keep\r
).symmetric_difference(columns)\r
\r
issues_dataset = issues_dataset.remove_columns(\r
    columns_to_remove\r
)\r
\`\`\`\r
\r
---\r
\r
## Mengubah comments menjadi baris terpisah\r
\r
Karena satu issue dapat memiliki banyak comments, kita ingin setiap comment menjadi satu row.\r
\r
Dataset terlebih dahulu diubah ke Pandas:\r
\r
\`\`\`python\r
issues_dataset.set_format("pandas")\r
\r
df = issues_dataset[:]\r
\`\`\`\r
\r
Kemudian gunakan \`explode()\`:\r
\r
\`\`\`python\r
comments_df = df.explode(\r
    "comments",\r
    ignore_index=True\r
)\r
\`\`\`\r
\r
Setelah selesai dengan Pandas, dataset dibuat kembali:\r
\r
\`\`\`python\r
from datasets import Dataset\r
\r
comments_dataset = Dataset.from_pandas(\r
    comments_df\r
)\r
\`\`\`\r
\r
Sekarang satu row merepresentasikan satu comment.\r
\r
---\r
\r
## Membersihkan comments\r
\r
Kita dapat menghitung panjang comment:\r
\r
\`\`\`python\r
comments_dataset = comments_dataset.map(\r
    lambda x: {\r
        "comment_length": len(\r
            x["comments"].split()\r
        )\r
    }\r
)\r
\`\`\`\r
\r
Kemudian comment yang terlalu pendek dapat dihapus:\r
\r
\`\`\`python\r
comments_dataset = comments_dataset.filter(\r
    lambda x: x["comment_length"] > 15\r
)\r
\`\`\`\r
\r
Selanjutnya informasi issue digabung dengan comment:\r
\r
\`\`\`python\r
def concatenate_text(examples):\r
    return {\r
        "text": examples["title"]\r
        + " \\n "\r
        + examples["body"]\r
        + " \\n "\r
        + examples["comments"]\r
    }\r
\r
comments_dataset = comments_dataset.map(\r
    concatenate_text\r
)\r
\`\`\`\r
\r
Sekarang setiap row memiliki:\r
\r
\`\`\`text\r
title\r
   +\r
body\r
   +\r
comment\r
   ↓\r
text\r
\`\`\`\r
\r
---\r
\r
# Creating text embeddings\r
\r
Untuk membuat embedding, digunakan model dari \`sentence-transformers\`.\r
\r
Checkpoint yang digunakan pada contoh:\r
\r
\`\`\`python\r
model_ckpt = (\r
    "sentence-transformers/"\r
    "multi-qa-mpnet-base-dot-v1"\r
)\r
\`\`\`\r
\r
Model dan tokenizer dimuat:\r
\r
\`\`\`python\r
from transformers import AutoTokenizer, AutoModel\r
\r
tokenizer = AutoTokenizer.from_pretrained(\r
    model_ckpt\r
)\r
\r
model = AutoModel.from_pretrained(\r
    model_ckpt\r
)\r
\`\`\`\r
\r
Model dapat ditempatkan pada GPU:\r
\r
\`\`\`python\r
import torch\r
\r
device = torch.device("cuda")\r
\r
model.to(device)\r
\`\`\`\r
\r
---\r
\r
## CLS pooling\r
\r
Model menghasilkan embedding untuk setiap token.\r
\r
Kita membutuhkan satu vector untuk merepresentasikan seluruh teks.\r
\r
Salah satu pendekatannya adalah **CLS pooling**:\r
\r
\`\`\`python\r
def cls_pooling(model_output):\r
    return model_output.last_hidden_state[:, 0]\r
\`\`\`\r
\r
Artinya kita mengambil representasi token \`[CLS]\`.\r
\r
---\r
\r
## Membuat fungsi embedding\r
\r
\`\`\`python\r
def get_embeddings(text_list):\r
    encoded_input = tokenizer(\r
        text_list,\r
        padding=True,\r
        truncation=True,\r
        return_tensors="pt"\r
    )\r
\r
    encoded_input = {\r
        k: v.to(device)\r
        for k, v in encoded_input.items()\r
    }\r
\r
    model_output = model(**encoded_input)\r
\r
    return cls_pooling(model_output)\r
\`\`\`\r
\r
Dengan fungsi tersebut, teks dapat diubah menjadi embedding vector.\r
\r
---\r
\r
# Using FAISS for efficient similarity search\r
\r
Setelah dataset memiliki embedding, kita membutuhkan mekanisme untuk mencari embedding yang paling dekat.\r
\r
Untuk itu digunakan **FAISS**.\r
\r
FAISS menyediakan struktur data dan algoritma untuk melakukan similarity search terhadap embedding vectors.\r
\r
Pada 🤗 Datasets, FAISS index dapat dibuat menggunakan:\r
\r
\`\`\`python\r
embeddings_dataset.add_faiss_index(\r
    column="embeddings"\r
)\r
\`\`\`\r
\r
Setelah index dibuat, kita dapat mencari nearest examples menggunakan:\r
\r
\`\`\`python\r
scores, samples = (\r
    embeddings_dataset.get_nearest_examples(\r
        "embeddings",\r
        question_embedding,\r
        k=5\r
    )\r
)\r
\`\`\`\r
\r
---\r
\r
## Membuat embedding untuk query\r
\r
Contoh query:\r
\r
\`\`\`python\r
question = (\r
    "How can I load a dataset offline?"\r
)\r
\r
question_embedding = (\r
    get_embeddings([question])\r
    .cpu()\r
    .detach()\r
    .numpy()\r
)\r
\r
question_embedding.shape\r
\`\`\`\r
\r
Hasilnya berupa vector dengan dimensi sesuai model embedding.\r
\r
Kemudian query tersebut digunakan untuk mencari dokumen yang paling dekat:\r
\r
\`\`\`python\r
scores, samples = (\r
    embeddings_dataset.get_nearest_examples(\r
        "embeddings",\r
        question_embedding,\r
        k=5\r
    )\r
)\r
\`\`\`\r
\r
Parameter:\r
\r
\`\`\`text\r
"embeddings"\r
\`\`\`\r
\r
menunjukkan index/kolom embedding yang digunakan.\r
\r
Sedangkan:\r
\r
\`\`\`text\r
k=5\r
\`\`\`\r
\r
berarti kita meminta 5 nearest examples.\r
\r
\`get_nearest_examples()\` mengembalikan:\r
\r
\`\`\`text\r
scores\r
samples\r
\`\`\`\r
\r
yaitu skor retrieval dan data yang ditemukan.\r
\r
---\r
\r
## Hasil semantic search\r
\r
Hasil pencarian dapat diubah menjadi DataFrame:\r
\r
\`\`\`python\r
import pandas as pd\r
\r
samples_df = pd.DataFrame.from_dict(\r
    samples\r
)\r
\r
samples_df["scores"] = scores\r
\r
samples_df.sort_values(\r
    "scores",\r
    ascending=False,\r
    inplace=True\r
)\r
\`\`\`\r
\r
Kemudian hasil dapat ditampilkan:\r
\r
\`\`\`python\r
for _, row in samples_df.iterrows():\r
    print(\r
        f"Score: {row['scores']:.4f}"\r
    )\r
    print(\r
        f"Title: {row['title']}"\r
    )\r
    print(\r
        f"URL: {row['html_url']}"\r
    )\r
    print()\r
\`\`\`\r
\r
Dengan demikian, sistem dapat mengembalikan issue/comment yang paling dekat dengan makna query.\r
\r
---\r
\r
# Alur lengkap Chapter 5\r
\r
Secara keseluruhan, Chapter 5 dapat dirangkum menjadi:\r
\r
\`\`\`text\r
Dataset Source\r
      ↓\r
┌─────────────────────────────┐\r
│ Hugging Face Hub            │\r
│ Local Files                 │\r
│ Remote Files                │\r
└─────────────────────────────┘\r
      ↓\r
load_dataset()\r
      ↓\r
Data Cleaning\r
      ↓\r
map()\r
filter()\r
select()\r
      ↓\r
Data Analysis\r
      ↓\r
Pandas / NumPy\r
      ↓\r
Train / Validation / Test\r
      ↓\r
Large Dataset?\r
      ↓\r
Memory Mapping / Streaming\r
      ↓\r
Create Own Dataset\r
      ↓\r
push_to_hub()\r
      ↓\r
Dataset Card\r
      ↓\r
Embeddings\r
      ↓\r
FAISS\r
      ↓\r
Semantic Search\r
\`\`\`\r
\r
---\r
`,ul=`# Kesimpulan Chapter 5\r
\r
Chapter 5 memperluas pemahaman mengenai **🤗 Datasets** dari sekadar library untuk mengambil dataset menjadi sebuah tools untuk mengelola seluruh lifecycle dataset.\r
\r
Hal-hal utama yang perlu dipahami:\r
\r
1. Dataset tidak harus berasal dari Hugging Face Hub.\r
2. \`load_dataset()\` dapat digunakan untuk local maupun remote files.\r
3. Dataset dapat dibersihkan dan dimanipulasi menggunakan \`map()\` dan \`filter()\`.\r
4. \`batched=True\` dapat mempercepat preprocessing.\r
5. Dataset dapat dikonversi ke Pandas menggunakan \`set_format("pandas")\`.\r
6. Pandas DataFrame dapat dikembalikan menjadi Dataset menggunakan \`Dataset.from_pandas()\`.\r
7. \`train_test_split()\` dapat digunakan untuk membuat validation set.\r
8. Dataset besar dapat ditangani dengan **memory mapping** berbasis Apache Arrow.\r
9. Dataset yang terlalu besar untuk disimpan secara lokal dapat diproses menggunakan **streaming**.\r
10. Dataset sendiri dapat dibuat dan dibagikan menggunakan \`push_to_hub()\`.\r
11. Dataset yang dibagikan sebaiknya dilengkapi **dataset card**.\r
12. Embeddings dapat digunakan untuk membangun **semantic search**.\r
13. **FAISS** digunakan untuk melakukan similarity search secara efisien terhadap embedding vectors.\r
14. \`add_faiss_index()\` digunakan untuk membuat FAISS index.\r
15. \`get_nearest_examples()\` digunakan untuk mengambil contoh yang paling dekat dengan query.\r
\r
Inti Chapter 5 dapat disederhanakan menjadi:\r
\r
\`\`\`text\r
Load\r
 ↓\r
Clean\r
 ↓\r
Transform\r
 ↓\r
Analyze\r
 ↓\r
Scale\r
 ↓\r
Create\r
 ↓\r
Share\r
 ↓\r
Embed\r
 ↓\r
Search\r
\`\`\`\r
\r
Dengan memahami chapter ini, kita tidak hanya tahu bagaimana **menggunakan dataset**, tetapi juga bagaimana **menyiapkan, membersihkan, menyimpan, membagikan, dan memanfaatkan dataset untuk aplikasi berbasis Transformer**.\r
`,dl=`Pada Chapter 3, kita mempelajari cara melakukan fine-tuning model untuk suatu task. Dalam proses tersebut, kita menggunakan tokenizer yang sama dengan tokenizer yang digunakan ketika model pretrained.\r
\r
Namun, bagaimana jika kita ingin **melatih model dari awal**?\r
\r
Dalam kondisi tersebut, menggunakan tokenizer yang sudah dilatih pada domain atau bahasa lain biasanya kurang optimal. Contohnya, tokenizer yang dilatih menggunakan corpus bahasa Inggris dapat bekerja kurang baik pada bahasa Jepang karena struktur penggunaan spasi dan tanda bacanya berbeda.\r
\r
Karena itu, Chapter 6 membahas cara:\r
\r
* Melatih tokenizer baru dari corpus teks.\r
* Menggunakan tokenizer tersebut untuk pretraining language model.\r
* Memahami kemampuan khusus fast tokenizer.\r
* Memahami perbedaan tiga algoritma subword tokenization:\r
\r
  * Byte-Pair Encoding (BPE)\r
  * WordPiece\r
  * Unigram\r
* Membangun tokenizer dari awal menggunakan library \`tokenizers\`.\r
\r
Tokenizer training berbeda dengan model training. Training model menggunakan stochastic gradient descent dan bersifat random/stochastic, sedangkan training tokenizer merupakan proses statistik untuk menentukan subword yang sesuai berdasarkan corpus dan bersifat deterministik untuk algoritma serta corpus yang sama.\r
\r
---\r
`,fl=`## 2. Training a New Tokenizer from an Old One\r
\r
Jika bahasa atau domain data kita berbeda jauh dari model yang tersedia, kita dapat melatih tokenizer baru dengan karakteristik yang mirip dengan tokenizer lama.\r
\r
Hugging Face menyediakan API:\r
\r
\`\`\`python\r
AutoTokenizer.train_new_from_iterator()\r
\`\`\`\r
\r
Contoh pada materi menggunakan dataset **CodeSearchNet** bagian Python sebagai corpus karena targetnya adalah membuat tokenizer yang lebih cocok untuk kode Python. Dataset tersebut berisi jutaan fungsi dari berbagai library open source.\r
\r
### Menyiapkan corpus\r
\r
Dataset dapat dimuat menggunakan:\r
\r
\`\`\`python\r
from datasets import load_dataset\r
\r
# This can take a few minutes to load, so grab a coffee or tea while you wait!\r
raw_datasets = load_dataset("code_search_net", "python")\r
\`\`\`\r
\r
Kita dapat melihat struktur dataset:\r
\r
\`\`\`python\r
raw_datasets["train"]\r
\`\`\`\r
\r
Contoh hasilnya:\r
\r
\`\`\`python\r
Dataset({\r
    features: ['repository_name', 'func_path_in_repository', 'func_name', 'whole_func_string', 'language', \r
      'func_code_string', 'func_code_tokens', 'func_documentation_string', 'func_documentation_tokens', 'split_name', \r
      'func_code_url'\r
    ],\r
    num_rows: 412178\r
})\r
\`\`\`\r
\r
Untuk training tokenizer, materi menggunakan kolom:\r
\r
\`\`\`text\r
whole_func_string\r
\`\`\`\r
\r
Contoh isi data:\r
\r
\`\`\`python\r
print(raw_datasets["train"][123456]["whole_func_string"])\r
\`\`\`\r
\r
yang berisi kode Python beserta dokumentasinya.\r
\r
### Membuat training corpus\r
\r
Karena dataset cukup besar, corpus diberikan kepada tokenizer dalam bentuk batch menggunakan iterator:\r
\r
\`\`\`python\r
training_corpus = (\r
    raw_datasets["train"][i : i + 1000]["whole_func_string"]\r
    for i in range(0, len(raw_datasets["train"]), 1000)\r
)\r
\`\`\`\r
\r
Alternatif yang lebih fleksibel adalah generator:\r
\r
\`\`\`python\r
def get_training_corpus():\r
    dataset = raw_datasets["train"]\r
    for start_idx in range(0, len(dataset), 1000):\r
        samples = dataset[start_idx : start_idx + 1000]\r
        yield samples["whole_func_string"]\r
\`\`\`\r
\r
Pendekatan iterator/generator membantu menghindari penyimpanan seluruh corpus dalam memory sekaligus.\r
\r
### Melatih tokenizer baru\r
\r
Pertama, kita memuat tokenizer lama:\r
\r
\`\`\`python\r
from transformers import AutoTokenizer\r
\r
old_tokenizer = AutoTokenizer.from_pretrained("gpt2")\r
\`\`\`\r
\r
Kemudian tokenizer baru dilatih berdasarkan corpus:\r
\r
\`\`\`python\r
tokenizer = old_tokenizer.train_new_from_iterator(training_corpus, 52000)\r
\`\`\`\r
\r
Angka \`52000\` merupakan ukuran vocabulary tokenizer baru.\r
\r
Sebagai contoh, tokenizer GPT-2 lama dapat memecah kode:\r
\r
\`\`\`python\r
example = '''def add_numbers(a, b):\r
    """Add the two numbers \`a\` and \`b\`."""\r
    return a + b'''\r
\r
tokens = old_tokenizer.tokenize(example)\r
tokens\r
\`\`\`\r
\r
Hasilnya masih memecah \`numbers\` menjadi beberapa bagian:\r
\r
\`\`\`python\r
['def', 'Ġadd', '_', 'n', 'umbers', '(', 'a', ',', 'Ġb', '):', 'Ċ', 'Ġ', 'Ġ', 'Ġ', 'Ġ"""', 'Add', 'Ġthe', 'Ġtwo',\r
 'Ġnumbers', 'Ġ\`', 'a', '\`', 'Ġand', 'Ġ\`', 'b', '\`', '."', '""', 'Ċ', 'Ġ', 'Ġ', 'Ġreturn', 'Ġa', 'Ġ+', 'Ġb']\r
\`\`\`\r
\r
Setelah tokenizer baru dilatih:\r
\r
\`\`\`python\r
tokens = tokenizer.tokenize(example)\r
tokens\r
\`\`\`\r
\r
Hasilnya menjadi lebih sesuai dengan corpus Python yang digunakan, misalnya:\r
\r
\`\`\`python\r
['def', 'Ġadd', '_', 'numbers', '(', 'a', ',', 'Ġb', '):', 'ĊĠĠĠ', 'Ġ"""', 'Add', 'Ġthe', 'Ġtwo', 'Ġnumbers', 'Ġ\`',\r
 'a', '\`', 'Ġand', 'Ġ\`', 'b', '\`."""', 'ĊĠĠĠ', 'Ġreturn', 'Ġa', 'Ġ+', 'Ġb']\r
\`\`\`\r
\r
Jumlah token turun dari 36 menjadi 27 pada contoh tersebut.\r
\r
Tokenizer yang sudah dibuat juga dapat disimpan:\r
\r
\`\`\`python\r
tokenizer.save_pretrained("code-search-net-tokenizer")\r
\`\`\`\r
\r
Kemudian dapat di-upload ke Hugging Face Hub:\r
\r
\`\`\`python\r
from huggingface_hub import notebook_login\r
\r
notebook_login()\r
\`\`\`\r
\r
atau:\r
\r
\`\`\`bash\r
huggingface-cli login\r
\`\`\`\r
\r
Lalu:\r
\r
\`\`\`python\r
tokenizer.push_to_hub("code-search-net-tokenizer")\r
\`\`\`\r
\r
Dan dapat digunakan kembali dengan:\r
\r
\`\`\`python\r
tokenizer = AutoTokenizer.from_pretrained("huggingface-course/code-search-net-tokenizer")\r
\`\`\`\r
\r
---\r
`,pl=`## 3. Fast Tokenizers' Special Powers\r
\r
Fast tokenizer merupakan tokenizer yang menggunakan library \`Tokenizers\` dan diimplementasikan dalam **Rust**, sedangkan slow tokenizer ditulis dalam Python.\r
\r
Perbedaan kecepatannya terutama terlihat ketika memproses banyak teks sekaligus menggunakan batching. Materi menunjukkan contoh perbandingan:\r
\r
| Pengaturan      | Fast tokenizer | Slow tokenizer |\r
| --------------- | -------------: | -------------: |\r
| \`batched=True\`  |          10.8s |        4min41s |\r
| \`batched=False\` |          59.2s |         5min3s |\r
\r
Fast tokenizer juga memiliki kemampuan tambahan yang sangat penting, yaitu mempertahankan hubungan antara token dengan posisi token tersebut pada teks asli.\r
\r
### BatchEncoding\r
\r
Ketika melakukan tokenisasi:\r
\r
\`\`\`python\r
from transformers import AutoTokenizer\r
\r
tokenizer = AutoTokenizer.from_pretrained("bert-base-cased")\r
example = "My name is Sylvain and I work at Hugging Face in Brooklyn."\r
encoding = tokenizer(example)\r
print(type(encoding))\r
\`\`\`\r
\r
Hasilnya adalah:\r
\r
\`\`\`python\r
<class 'transformers.tokenization_utils_base.BatchEncoding'>\r
\`\`\`\r
\r
Kita dapat mengecek apakah tokenizer merupakan fast tokenizer:\r
\r
\`\`\`python\r
tokenizer.is_fast\r
\`\`\`\r
\r
atau:\r
\r
\`\`\`python\r
encoding.is_fast\r
\`\`\`\r
\r
Keduanya akan menghasilkan:\r
\r
\`\`\`python\r
True\r
\`\`\`\r
\r
### Mengakses token\r
\r
Fast tokenizer memungkinkan kita mendapatkan token secara langsung:\r
\r
\`\`\`python\r
encoding.tokens()\r
\`\`\`\r
\r
Contohnya:\r
\r
\`\`\`python\r
['[CLS]', 'My', 'name', 'is', 'S', '##yl', '##va', '##in', 'and', 'I', 'work', 'at', 'Hu', '##gging', 'Face', 'in',\r
 'Brooklyn', '.', '[SEP]']\r
\`\`\`\r
\r
### Menghubungkan token dengan kata\r
\r
Kita dapat mengetahui token berasal dari kata keberapa menggunakan:\r
\r
\`\`\`python\r
encoding.word_ids()\r
\`\`\`\r
\r
Contohnya:\r
\r
\`\`\`python\r
[None, 0, 1, 2, 3, 3, 3, 3, 4, 5, 6, 7, 8, 8, 9, 10, 11, 12, None]\r
\`\`\`\r
\r
Fast tokenizer juga dapat mengubah indeks kata menjadi posisi karakter:\r
\r
\`\`\`python\r
start, end = encoding.word_to_chars(3)\r
example[start:end]\r
\`\`\`\r
\r
Hasil:\r
\r
\`\`\`text\r
Sylvain\r
\`\`\`\r
\r
Kemampuan ini disebut **offset mapping** dan sangat penting untuk task seperti Named Entity Recognition (NER) dan Question Answering.\r
\r
### Fast tokenizer pada token classification\r
\r
Pipeline dapat langsung digunakan:\r
\r
\`\`\`python\r
from transformers import pipeline\r
\r
token_classifier = pipeline("token-classification")\r
token_classifier("My name is Sylvain and I work at Hugging Face in Brooklyn.")\r
\`\`\`\r
\r
Karena sebuah kata dapat dipecah menjadi beberapa subword, output awal dapat berisi beberapa token untuk satu entity.\r
\r
Fast tokenizer menggunakan offset mapping untuk mengetahui posisi setiap token pada teks asli, kemudian token-token tersebut dapat digabung kembali menjadi entity utuh.\r
\r
Contohnya:\r
\r
\`\`\`python\r
from transformers import pipeline\r
\r
token_classifier = pipeline("token-classification", aggregation_strategy="simple")\r
token_classifier("My name is Sylvain and I work at Hugging Face in Brooklyn.")\r
\`\`\`\r
\r
Hasilnya dapat berupa entity seperti:\r
\r
\`\`\`text\r
Sylvain\r
Hugging Face\r
Brooklyn\r
\`\`\`\r
\r
Jadi, salah satu kekuatan utama fast tokenizer adalah kemampuannya menjaga hubungan antara **token, kata, dan posisi karakter pada teks asli**.\r
\r
---\r
`,ml=`## 4. Fast Tokenizers in the QA Pipeline\r
\r
Fast tokenizer juga sangat berguna untuk **Question Answering**.\r
\r
Pipeline dasar:\r
\r
\`\`\`python\r
from transformers import pipeline\r
\r
question_answerer = pipeline("question-answering")\r
context = """\r
 Transformers is backed by the three most popular deep learning libraries — Jax, PyTorch, and TensorFlow — with a seamless integration\r
between them. It's straightforward to train your models with one before loading them for inference with the other.\r
"""\r
question = "Which deep learning libraries back Transformers?"\r
question_answerer(question=question, context=context)\r
\`\`\`\r
\r
Contoh hasil:\r
\r
\`\`\`python\r
{'score': 0.97773,\r
 'start': 78,\r
 'end': 105,\r
 'answer': 'Jax, PyTorch and TensorFlow'}\r
\`\`\`\r
\r
Pipeline Question Answering mencari jawaban **di dalam context yang diberikan**, bukan membuat jawaban baru.\r
\r
### Cara kerjanya\r
\r
Kita juga dapat menggunakan model secara langsung:\r
\r
\`\`\`python\r
from transformers import AutoTokenizer, AutoModelForQuestionAnswering\r
\r
model_checkpoint = "distilbert-base-cased-distilled-squad"\r
tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)\r
model = AutoModelForQuestionAnswering.from_pretrained(model_checkpoint)\r
\r
inputs = tokenizer(question, context, return_tensors="pt")\r
outputs = model(**inputs)\r
\`\`\`\r
\r
Model menghasilkan dua jenis logits:\r
\r
\`\`\`python\r
start_logits = outputs.start_logits\r
end_logits = outputs.end_logits\r
print(start_logits.shape, end_logits.shape)\r
\`\`\`\r
\r
Hasil:\r
\r
\`\`\`text\r
torch.Size([1, 66]) torch.Size([1, 66])\r
\`\`\`\r
\r
\`start_logits\` menunjukkan kemungkinan posisi awal jawaban, sedangkan \`end_logits\` menunjukkan kemungkinan posisi akhir jawaban.\r
\r
Kemudian probabilitas dihitung:\r
\r
\`\`\`python\r
start_probabilities = torch.nn.functional.softmax(start_logits, dim=-1)[0]\r
end_probabilities = torch.nn.functional.softmax(end_logits, dim=-1)[0]\r
\`\`\`\r
\r
Semua kombinasi posisi awal dan akhir dapat dihitung:\r
\r
\`\`\`python\r
scores = start_probabilities[:, None] * end_probabilities[None, :]\r
\`\`\`\r
\r
Agar posisi akhir tidak berada sebelum posisi awal:\r
\r
\`\`\`python\r
scores = torch.triu(scores)\r
\`\`\`\r
\r
Kemudian pasangan dengan score terbesar dipilih:\r
\r
\`\`\`python\r
max_index = scores.argmax().item()\r
start_index = max_index // scores.shape[1]\r
end_index = max_index % scores.shape[1]\r
print(scores[start_index, end_index])\r
\`\`\`\r
\r
Untuk mendapatkan teks sebenarnya dari posisi tersebut, fast tokenizer menyediakan offset mapping:\r
\r
\`\`\`python\r
inputs_with_offsets = tokenizer(question, context, return_offsets_mapping=True)\r
offsets = inputs_with_offsets["offset_mapping"]\r
\r
start_char, _ = offsets[start_index]\r
_, end_char = offsets[end_index]\r
answer = context[start_char:end_char]\r
\`\`\`\r
\r
Hasil akhirnya:\r
\r
\`\`\`python\r
result = {\r
    "answer": answer,\r
    "start": start_char,\r
    "end": end_char,\r
    "score": scores[start_index, end_index],\r
}\r
print(result)\r
\`\`\`\r
\r
### Menangani context yang panjang\r
\r
Jika context terlalu panjang, tokenizer dapat melakukan truncation. Contohnya:\r
\r
\`\`\`python\r
inputs = tokenizer(question, long_context, max_length=384, truncation="only_second")\r
\`\`\`\r
\r
\`"only_second"\` digunakan agar truncation diterapkan pada bagian kedua dari pasangan input, yaitu context. Materi kemudian membahas bagaimana Question Answering pipeline menangani context yang lebih panjang dari maximum length model dengan membuat beberapa bagian dan mencari jawaban di antaranya.\r
\r
---\r
`,hl=`## 5. Normalization and Pre-tokenization\r
\r
Sebelum teks diproses oleh algoritma subword seperti BPE, WordPiece, atau Unigram, tokenizer melakukan beberapa tahap preprocessing.\r
\r
Secara umum:\r
\r
\`\`\`text\r
Text\r
  ↓\r
Normalization\r
  ↓\r
Pre-tokenization\r
  ↓\r
Subword Tokenization\r
  ↓\r
Post-processing\r
\`\`\`\r
\r
### Normalization\r
\r
Normalization merupakan tahap pembersihan teks, misalnya:\r
\r
* Menghapus whitespace yang tidak diperlukan.\r
* Mengubah huruf menjadi lowercase.\r
* Menghapus accent.\r
* Melakukan Unicode normalization.\r
\r
Kita dapat melihat normalizer yang digunakan tokenizer:\r
\r
\`\`\`python\r
from transformers import AutoTokenizer\r
\r
tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")\r
print(type(tokenizer.backend_tokenizer))\r
\`\`\`\r
\r
Kemudian:\r
\r
\`\`\`python\r
print(tokenizer.backend_tokenizer.normalizer.normalize_str("Héllò hôw are ü?"))\r
\`\`\`\r
\r
Hasil:\r
\r
\`\`\`python\r
'hello how are u?'\r
\`\`\`\r
\r
Artinya tokenizer \`bert-base-uncased\` melakukan lowercase dan menghapus accent.\r
\r
### Pre-tokenization\r
\r
Setelah normalization, teks dipecah menjadi unit awal seperti kata dan tanda baca.\r
\r
Contoh:\r
\r
\`\`\`python\r
tokenizer.backend_tokenizer.pre_tokenizer.pre_tokenize_str("Hello, how are  you?")\r
\`\`\`\r
\r
Hasil:\r
\r
\`\`\`python\r
[('Hello', (0, 5)), (',', (5, 6)), ('how', (7, 10)), ('are', (11, 14)), ('you', (16, 19)), ('?', (19, 20))]\r
\`\`\`\r
\r
Selain menghasilkan potongan teks, tokenizer juga menyimpan **offset** posisi masing-masing bagian pada teks asli.\r
\r
Jenis tokenizer dapat mempunyai aturan pre-tokenization yang berbeda.\r
\r
GPT-2 misalnya:\r
\r
\`\`\`python\r
tokenizer = AutoTokenizer.from_pretrained("gpt2")\r
tokenizer.backend_tokenizer.pre_tokenizer.pre_tokenize_str("Hello, how are  you?")\r
\`\`\`\r
\r
menghasilkan representasi dengan simbol \`Ġ\` untuk mempertahankan informasi spasi:\r
\r
\`\`\`python\r
[('Hello', (0, 5)), (',', (5, 6)), ('Ġhow', (6, 10)), ('Ġare', (10, 14)), ('Ġ', (14, 15)), ('Ġyou', (15, 19)),\r
 ('?', (19, 20))]\r
\`\`\`\r
\r
SentencePiece menggunakan pendekatan berbeda, misalnya simbol \`▁\` untuk merepresentasikan batas spasi.\r
\r
---\r
`,gl=`## 6. Byte-Pair Encoding Tokenization\r
\r
**Byte-Pair Encoding (BPE)** awalnya dikembangkan sebagai algoritma kompresi teks. Kemudian algoritma ini digunakan OpenAI untuk tokenisasi GPT dan digunakan oleh berbagai model Transformer seperti GPT, GPT-2, RoBERTa, BART, dan DeBERTa.\r
\r
### Training algorithm\r
\r
BPE memulai training dengan:\r
\r
1. Mengambil semua kata unik dari corpus setelah normalization dan pre-tokenization.\r
2. Membuat vocabulary awal dari karakter-karakter yang muncul.\r
3. Menghitung pasangan token yang paling sering muncul.\r
4. Menggabungkan pasangan tersebut menjadi token baru.\r
5. Mengulangi proses sampai ukuran vocabulary yang diinginkan tercapai.\r
\r
Contoh corpus:\r
\r
\`\`\`python\r
"hug", "pug", "pun", "bun", "hugs"\r
\`\`\`\r
\r
Dengan frekuensi:\r
\r
\`\`\`python\r
("hug", 10), ("pug", 5), ("pun", 12), ("bun", 4), ("hugs", 5)\r
\`\`\`\r
\r
Awalnya setiap kata dipecah menjadi karakter:\r
\r
\`\`\`python\r
("h" "u" "g", 10), ("p" "u" "g", 5), ("p" "u" "n", 12), ("b" "u" "n", 4), ("h" "u" "g" "s", 5)\r
\`\`\`\r
\r
Kemudian dihitung pasangan karakter yang paling sering.\r
\r
Pasangan:\r
\r
\`\`\`text\r
("u", "g")\r
\`\`\`\r
\r
muncul paling banyak, sehingga digabung menjadi:\r
\r
\`\`\`text\r
("u", "g") -> "ug"\r
\`\`\`\r
\r
Vocabulary menjadi:\r
\r
\`\`\`python\r
Vocabulary: ["b", "g", "h", "n", "p", "s", "u", "ug"]\r
Corpus: ("h" "ug", 10), ("p" "ug", 5), ("p" "u" "n", 12), ("b" "u" "n", 4), ("h" "ug" "s", 5)\r
\`\`\`\r
\r
Kemudian proses dilanjutkan dengan pasangan yang paling sering berikutnya:\r
\r
\`\`\`python\r
("u", "n") -> "un"\r
("h", "ug") -> "hug"\r
\`\`\`\r
\r
Dengan demikian, BPE secara bertahap membangun subword yang sering muncul dalam corpus.\r
\r
### Tokenization algorithm\r
\r
Saat digunakan untuk melakukan tokenisasi, BPE menerapkan merge rules yang telah dipelajari ketika training.\r
\r
Jadi secara sederhana:\r
\r
\`\`\`text\r
Corpus\r
  ↓\r
Hitung frekuensi pasangan\r
  ↓\r
Pilih pasangan paling sering\r
  ↓\r
Merge\r
  ↓\r
Vocabulary baru\r
  ↓\r
Ulangi\r
\`\`\`\r
\r
Salah satu keunggulan pendekatan ini adalah kata yang sering muncul dapat direpresentasikan sebagai satu atau beberapa subword besar, sedangkan kata yang lebih jarang masih dapat dipecah menjadi bagian-bagian yang tersedia dalam vocabulary.\r
\r
---`,_l=`## 7. WordPiece Tokenization\r
\r
**WordPiece** dikembangkan Google untuk pretraining BERT dan kemudian digunakan oleh berbagai model berbasis BERT seperti DistilBERT, MobileBERT, Funnel Transformers, dan MPNET.\r
\r
WordPiece mirip dengan BPE dalam proses training, tetapi mempunyai cara berbeda dalam memilih pasangan token yang akan digabungkan.\r
\r
### Training algorithm\r
\r
WordPiece menggunakan prefix \`##\` untuk menandai subword yang berada di dalam sebuah kata.\r
\r
Misalnya:\r
\r
\`\`\`text\r
word\r
\`\`\`\r
\r
awalnya menjadi:\r
\r
\`\`\`text\r
w ##o ##r ##d\r
\`\`\`\r
\r
Berbeda dengan BPE yang memilih pasangan berdasarkan frekuensi tertinggi, WordPiece menghitung **score** untuk setiap pasangan:\r
\r
\`\`\`math\r
score=(freq_of_pair)/(freq_of_first_element×freq_of_second_element)\r
\`\`\`\r
\r
Pasangan dengan score paling tinggi dipilih untuk digabungkan.\r
\r
Contoh corpus:\r
\r
\`\`\`python\r
("hug", 10), ("pug", 5), ("pun", 12), ("bun", 4), ("hugs", 5)\r
\`\`\`\r
\r
Representasinya:\r
\r
\`\`\`python\r
("h" "##u" "##g", 10), ("p" "##u" "##g", 5), ("p" "##u" "##n", 12), ("b" "##u" "##n", 4), ("h" "##u" "##g" "##s", 5)\r
\`\`\`\r
\r
Setelah pasangan tertentu digabung, vocabulary dapat berkembang menjadi:\r
\r
\`\`\`python\r
Vocabulary: ["b", "h", "p", "##g", "##n", "##s", "##u", "##gs"]\r
Corpus: ("h" "##u" "##g", 10), ("p" "##u" "##g", 5), ("p" "##u" "##n", 12), ("b" "##u" "##n", 4), ("h" "##u" "##gs", 5)\r
\`\`\`\r
\r
Kemudian merge berikutnya dapat menghasilkan:\r
\r
\`\`\`python\r
Vocabulary: ["b", "h", "p", "##g", "##n", "##s", "##u", "##gs", "hu"]\r
Corpus: ("hu" "##g", 10), ("p" "##u" "##g", 5), ("p" "##u" "##n", 12), ("b" "##u" "##n", 4), ("hu" "##gs", 5)\r
\`\`\`\r
\r
dan akhirnya:\r
\r
\`\`\`python\r
Vocabulary: ["b", "h", "p", "##g", "##n", "##s", "##u", "##gs", "hu", "hug"]\r
Corpus: ("hug", 10), ("p" "##u" "##g", 5), ("p" "##u" "##n", 12), ("b" "##u" "##n", 4), ("hu" "##gs", 5)\r
\`\`\`\r
\r
### Perbedaan utama BPE dan WordPiece\r
\r
| BPE                                          | WordPiece                                    |\r
| -------------------------------------------- | -------------------------------------------- |\r
| Memilih pasangan dengan frekuensi tertinggi  | Memilih pasangan dengan score tertinggi      |\r
| Merge berdasarkan frekuensi                  | Merge berdasarkan rasio frekuensi            |\r
| Tidak menggunakan \`##\` sebagai penanda utama | Menggunakan \`##\` untuk subword di dalam kata |\r
\r
Perlu diperhatikan bahwa materi juga menyebut bahwa implementasi training WordPiece milik Google tidak bersifat open-source, sehingga algoritma yang dijelaskan merupakan rekonstruksi berdasarkan literatur dan tidak dijamin 100% identik dengan implementasi aslinya.\r
\r
---\r
`,vl=`## 8. Unigram Tokenization\r
\r
Unigram digunakan bersama **SentencePiece** dan digunakan oleh model seperti ALBERT, T5, mBART, BigBird, dan XLNet.\r
\r
SentencePiece mempunyai karakteristik penting: input dapat diproses sebagai **raw input stream**, sehingga pendekatan ini tidak bergantung pada spasi sebagai pemisah kata. Hal tersebut berguna untuk bahasa yang tidak selalu menggunakan spasi sebagai pemisah kata.\r
\r
### Perbedaan arah training\r
\r
BPE dan WordPiece pada dasarnya mulai dari vocabulary kecil lalu **menambahkan token**.\r
\r
Unigram melakukan kebalikannya:\r
\r
\`\`\`text\r
Vocabulary besar\r
      ↓\r
Menghitung loss\r
      ↓\r
Menghapus token yang paling tidak penting\r
      ↓\r
Vocabulary semakin kecil\r
      ↓\r
Ukuran vocabulary target\r
\`\`\`\r
\r
Pada setiap langkah, Unigram menghitung loss corpus berdasarkan vocabulary saat ini. Kemudian dihitung perubahan loss jika setiap token dihapus.\r
\r
Token yang penghapusannya memberikan peningkatan loss paling kecil dianggap paling tidak diperlukan dan menjadi kandidat untuk dihapus.\r
\r
Unigram tidak menghapus karakter dasar agar setiap kata tetap dapat ditokenisasi.\r
\r
### Cara tokenisasi\r
\r
Unigram menggunakan probabilitas token.\r
\r
Misalnya vocabulary awal:\r
\r
\`\`\`python\r
["h", "u", "g", "hu", "ug", "p", "pu", "n", "un", "b", "bu", "s", "hug", "gs", "ugs"]\r
\`\`\`\r
\r
Frekuensi subword dapat dihitung:\r
\r
\`\`\`python\r
("h", 15) ("u", 36) ("g", 20) ("hu", 15) ("ug", 20) ("p", 17) ("pu", 17) ("n", 16)\r
("un", 16) ("b", 4) ("bu", 4) ("s", 5) ("hug", 15) ("gs", 5) ("ugs", 5)\r
\`\`\`\r
\r
Probabilitas sebuah token ditentukan berdasarkan frekuensinya terhadap total frekuensi token.\r
\r
Satu kata dapat mempunyai beberapa kemungkinan segmentasi.\r
\r
Contoh:\r
\r
\`\`\`python\r
["p", "u", "g"] : 0.000389\r
["p", "ug"] : 0.0022676\r
["pu", "g"] : 0.0022676\r
\`\`\`\r
\r
Segmentasi dengan probabilitas lebih tinggi lebih disukai.\r
\r
Dengan demikian, Unigram dapat dipahami sebagai pendekatan yang mencari segmentasi berdasarkan **probabilitas subword**, bukan sekadar melakukan merge secara berurutan seperti BPE atau WordPiece.\r
\r
---\r
`,yl=`## 9. Building a Tokenizer, Block by Block\r
\r
Bagian terakhir menunjukkan bagaimana membuat tokenizer dari awal menggunakan library \`tokenizers\`.\r
\r
Pipeline tokenizer terdiri dari beberapa tahap:\r
\r
\`\`\`text\r
Normalization\r
↓\r
Pre-tokenization\r
↓\r
Model\r
↓\r
Post-processing\r
\`\`\`\r
\r
Tahapan tersebut dapat dikombinasikan menggunakan berbagai komponen dari library Tokenizers.\r
\r
Library menyediakan beberapa komponen utama:\r
\r
* \`normalizers\`\r
* \`pre_tokenizers\`\r
* \`models\`\r
* \`trainers\`\r
* \`post_processors\`\r
* \`decoders\`\r
\r
### Menyiapkan corpus\r
\r
Materi menggunakan WikiText-2:\r
\r
\`\`\`python\r
from datasets import load_dataset\r
\r
dataset = load_dataset("wikitext", name="wikitext-2-raw-v1", split="train")\r
\r
\r
def get_training_corpus():\r
    for i in range(0, len(dataset), 1000):\r
        yield dataset[i : i + 1000]["text"]\r
\`\`\`\r
\r
Kita juga dapat menyimpan corpus menjadi file:\r
\r
\`\`\`python\r
with open("wikitext-2.txt", "w", encoding="utf-8") as f:\r
    for i in range(len(dataset)):\r
        f.write(dataset[i]["text"] + "\\n")\r
\`\`\`\r
\r
Generator tersebut menghasilkan batch berisi 1.000 teks yang kemudian digunakan untuk training tokenizer.\r
\r
### Membuat WordPiece tokenizer\r
\r
Pertama, import komponen yang dibutuhkan:\r
\r
\`\`\`python\r
from tokenizers import (\r
    decoders,\r
    models,\r
    normalizers,\r
    pre_tokenizers,\r
    processors,\r
    trainers,\r
    Tokenizer,\r
)\r
\`\`\`\r
\r
Buat model WordPiece:\r
\r
\`\`\`python\r
tokenizer = Tokenizer(models.WordPiece(unk_token="[UNK]"))\r
\`\`\`\r
\r
Kemudian tentukan normalizer:\r
\r
\`\`\`python\r
tokenizer.normalizer = normalizers.BertNormalizer(lowercase=True)\r
\`\`\`\r
\r
Atau menggunakan kombinasi normalizer:\r
\r
\`\`\`python\r
tokenizer.normalizer = normalizers.Sequence(\r
    [normalizers.NFD(), normalizers.Lowercase(), normalizers.StripAccents()]\r
)\r
\`\`\`\r
\r
Pre-tokenizer dapat menggunakan:\r
\r
\`\`\`python\r
tokenizer.pre_tokenizer = pre_tokenizers.BertPreTokenizer()\r
\`\`\`\r
\r
atau:\r
\r
\`\`\`python\r
tokenizer.pre_tokenizer = pre_tokenizers.Whitespace()\r
\`\`\`\r
\r
Kita dapat menguji hasilnya:\r
\r
\`\`\`python\r
tokenizer.pre_tokenizer.pre_tokenize_str("Let's test my pre-tokenizer.")\r
\`\`\`\r
\r
Contoh hasil:\r
\r
\`\`\`python\r
[('Let', (0, 3)), ("'", (3, 4)), ('s', (4, 5)), ('test', (6, 10)), ('my', (11, 13)), ('pre', (14, 17)),\r
 ('-', (17, 18)), ('t\r
\`\`\`\r
`,bl=`## 1. Introduction\r
\r
Pada Chapter 3, kita sudah mempelajari cara melakukan fine-tuning model untuk **text classification**. Pada Chapter 7, kita akan menerapkan pengetahuan tersebut ke beberapa task bahasa yang umum digunakan dalam NLP dan LLM.\r
\r
Task yang dibahas adalah:\r
\r
1. **Token classification**\r
2. **Masked language modeling**\r
3. **Translation**\r
4. **Summarization**\r
5. **Causal language modeling**\r
6. **Question answering**\r
\r
Setiap bagian dapat dipelajari secara terpisah. Kita dapat menggunakan \`Trainer\` API untuk training yang lebih praktis, atau membuat training loop sendiri menggunakan \`Accelerate\` jika membutuhkan kontrol yang lebih besar.\r
\r
Secara sederhana:\r
\r
\`\`\`text\r
Dataset\r
   ↓\r
Tokenizer\r
   ↓\r
Preprocessing\r
   ↓\r
Model\r
   ↓\r
Training\r
   ↓\r
Evaluation\r
   ↓\r
Upload ke Hub\r
\`\`\`\r
\r
Chapter ini menunjukkan bagaimana komponen-komponen tersebut digunakan bersama untuk menyelesaikan berbagai task NLP.\r
\r
---`,xl=`## 2. Token Classification\r
\r
**Token classification** adalah task ketika model memberikan sebuah label kepada setiap token dalam suatu sequence.\r
\r
Salah satu contoh paling terkenal adalah **Named Entity Recognition (NER)**.\r
\r
Misalnya:\r
\r
\`\`\`text\r
My name is Sylvain and I work at Hugging Face in Brooklyn.\r
\`\`\`\r
\r
Model dapat memberikan label:\r
\r
\`\`\`text\r
Sylvain      → PER\r
Hugging Face → ORG\r
Brooklyn     → LOC\r
\`\`\`\r
\r
Contoh sederhana menggunakan pipeline:\r
\r
\`\`\`python\r
from transformers import pipeline\r
\r
ner = pipeline("ner", grouped_entities=True)\r
\r
ner("My name is Sylvain and I work at Hugging Face in Brooklyn.")\r
\`\`\`\r
\r
Contoh hasil:\r
\r
\`\`\`python\r
[\r
    {\r
        'entity_group': 'PER',\r
        'score': 0.99816,\r
        'word': 'Sylvain',\r
        'start': 11,\r
        'end': 18\r
    },\r
    {\r
        'entity_group': 'ORG',\r
        'score': 0.97991,\r
        'word': 'Hugging Face',\r
        'start': 33,\r
        'end': 45\r
    },\r
    {\r
        'entity_group': 'LOC',\r
        'score': 0.99321,\r
        'word': 'Brooklyn',\r
        'start': 49,\r
        'end': 57\r
    }\r
]\r
\`\`\`\r
\r
### Hubungan token dengan label\r
\r
Masalah utama dalam token classification adalah satu kata dapat dipecah menjadi beberapa token.\r
\r
Misalnya:\r
\r
\`\`\`text\r
Sylvain\r
\`\`\`\r
\r
dapat menjadi:\r
\r
\`\`\`text\r
S\r
##yl\r
##va\r
##in\r
\`\`\`\r
\r
Jika label untuk kata tersebut adalah \`PER\`, maka label tersebut perlu dikaitkan dengan token-token yang membentuk kata tersebut.\r
\r
Fast tokenizer yang dipelajari pada Chapter 6 membantu proses ini karena menyediakan informasi seperti:\r
\r
\`\`\`python\r
encoding.word_ids()\r
\`\`\`\r
\r
Dengan \`word_ids()\`, kita dapat mengetahui token tertentu berasal dari kata yang mana.\r
\r
Ini sangat berguna untuk menyesuaikan label dataset dengan token hasil tokenisasi.\r
\r
### Fine-tuning model untuk token classification\r
\r
Model seperti BERT dapat diberikan classification head pada setiap token.\r
\r
Secara konsep:\r
\r
\`\`\`text\r
Input tokens\r
     ↓\r
BERT\r
     ↓\r
Hidden states\r
     ↓\r
Token classification head\r
     ↓\r
Label untuk setiap token\r
\`\`\`\r
\r
Loss kemudian dihitung antara prediksi model dan label sebenarnya untuk setiap token.\r
\r
Task seperti NER dan POS tagging termasuk dalam kategori ini.\r
\r
---\r
`,Sl=`**Masked Language Modeling (MLM)** merupakan objective yang digunakan oleh model seperti BERT.\r
\r
Ide dasarnya adalah sebagian token pada kalimat disembunyikan, kemudian model diminta memprediksi token yang hilang.\r
\r
Contoh:\r
\r
\`\`\`text\r
The cat is sitting on the [MASK].\r
\`\`\`\r
\r
Model harus memprediksi:\r
\r
\`\`\`text\r
mat\r
\`\`\`\r
\r
atau token lain yang paling sesuai dengan konteks.\r
\r
Berbeda dengan causal language modeling, MLM memungkinkan model melihat konteks dari **sebelum dan sesudah token**.\r
\r
Secara sederhana:\r
\r
\`\`\`text\r
Causal LM:\r
\r
The cat is sitting on the ...\r
                      ↑\r
              memprediksi berikutnya\r
\r
\r
Masked LM:\r
\r
The cat is [MASK] on the mat.\r
          ↑\r
   melihat konteks kiri dan kanan\r
\`\`\`\r
\r
### Data collator\r
\r
Karena token yang akan dimasking dapat dipilih secara dinamis ketika batch dibuat, kita dapat menggunakan:\r
\r
\`\`\`python\r
from transformers import DataCollatorForLanguageModeling\r
\r
data_collator = DataCollatorForLanguageModeling(\r
    tokenizer=tokenizer,\r
    mlm_probability=0.15\r
)\r
\`\`\`\r
\r
\`mlm_probability=0.15\` berarti sekitar 15% token dipilih untuk objective masked language modeling.\r
\r
### Training\r
\r
Setelah dataset ditokenisasi, model dapat dilatih menggunakan \`Trainer\`.\r
\r
Secara umum:\r
\r
\`\`\`python\r
from transformers import Trainer\r
\r
trainer = Trainer(\r
    model=model,\r
    args=training_args,\r
    train_dataset=tokenized_datasets["train"],\r
    eval_dataset=tokenized_datasets["validation"],\r
    data_collator=data_collator,\r
)\r
\r
trainer.train()\r
\`\`\`\r
\r
Dengan pendekatan ini, kita dapat melakukan continued pretraining atau fine-tuning model menggunakan corpus yang sesuai dengan domain tertentu.\r
\r
Contohnya, jika model awal dilatih menggunakan corpus umum, kita dapat melatihnya lagi menggunakan corpus yang lebih spesifik seperti:\r
\r
\`\`\`text\r
dokumen medis\r
dokumen hukum\r
dokumentasi teknis\r
artikel ilmiah\r
\`\`\`\r
\r
Tujuannya adalah membuat representasi model lebih sesuai dengan domain tersebut.\r
\r
---`,Cl=`**Machine translation** adalah task untuk mengubah teks dari satu bahasa ke bahasa lain.\r
\r
Contoh:\r
\r
\`\`\`text\r
English:\r
This course is produced by Hugging Face.\r
\r
Spanish:\r
Este curso es producido por Hugging Face.\r
\`\`\`\r
\r
Translation biasanya menggunakan arsitektur **encoder-decoder**.\r
\r
Secara sederhana:\r
\r
\`\`\`text\r
Source sentence\r
       ↓\r
    Encoder\r
       ↓\r
Representation\r
       ↓\r
    Decoder\r
       ↓\r
Target sentence\r
\`\`\`\r
\r
Model seperti T5 dan BART dapat digunakan untuk task sequence-to-sequence seperti translation.\r
\r
### Dataset\r
\r
Dataset translation biasanya mempunyai pasangan:\r
\r
\`\`\`text\r
source → target\r
\`\`\`\r
\r
Misalnya:\r
\r
\`\`\`python\r
{\r
    "translation": {\r
        "en": "Hello",\r
        "fr": "Bonjour"\r
    }\r
}\r
\`\`\`\r
\r
Kemudian tokenizer digunakan untuk memproses source dan target.\r
\r
Contoh konsep tokenisasi:\r
\r
\`\`\`python\r
inputs = tokenizer(\r
    examples["source"],\r
    max_length=128,\r
    truncation=True\r
)\r
\`\`\`\r
\r
Untuk target:\r
\r
\`\`\`python\r
labels = tokenizer(\r
    text_target=examples["target"],\r
    max_length=128,\r
    truncation=True\r
)\r
\`\`\`\r
\r
### Data collator\r
\r
Untuk sequence-to-sequence task, dapat digunakan:\r
\r
\`\`\`python\r
from transformers import DataCollatorForSeq2Seq\r
\r
data_collator = DataCollatorForSeq2Seq(\r
    tokenizer=tokenizer,\r
    model=model\r
)\r
\`\`\`\r
\r
Kemudian model dapat dilatih menggunakan \`Seq2SeqTrainer\`.\r
\r
\`\`\`python\r
from transformers import Seq2SeqTrainer\r
\r
trainer = Seq2SeqTrainer(\r
    model=model,\r
    args=training_args,\r
    train_dataset=tokenized_datasets["train"],\r
    eval_dataset=tokenized_datasets["validation"],\r
    data_collator=data_collator,\r
)\r
\r
trainer.train()\r
\`\`\`\r
\r
### Evaluasi\r
\r
Translation biasanya dievaluasi menggunakan metric seperti **BLEU**.\r
\r
BLEU membandingkan hasil terjemahan model dengan reference translation.\r
\r
Namun, BLEU tidak sempurna. Dua terjemahan yang berbeda tetapi sama-sama benar dapat memperoleh score berbeda karena metric bekerja berdasarkan kesamaan dengan reference.\r
\r
---`,wl=`**Summarization** adalah task untuk mengubah teks panjang menjadi teks yang lebih pendek dengan mempertahankan informasi penting.\r
\r
Contoh:\r
\r
\`\`\`text\r
Input:\r
Teks artikel yang panjang...\r
\r
Output:\r
Ringkasan singkat dari artikel tersebut.\r
\`\`\`\r
\r
Summarization umumnya menggunakan arsitektur **encoder-decoder**, misalnya:\r
\r
\`\`\`text\r
BART\r
T5\r
\`\`\`\r
\r
### Sequence-to-sequence\r
\r
Model menerima dokumen sebagai input:\r
\r
\`\`\`text\r
Long document\r
     ↓\r
  Encoder\r
     ↓\r
  Decoder\r
     ↓\r
Short summary\r
\`\`\`\r
\r
Berbeda dengan extractive summarization yang memilih bagian dari teks asli, model sequence-to-sequence dapat **menghasilkan teks ringkasan baru**.\r
\r
### Tokenisasi\r
\r
Input dapat diproses:\r
\r
\`\`\`python\r
inputs = tokenizer(\r
    examples["text"],\r
    max_length=1024,\r
    truncation=True\r
)\r
\`\`\`\r
\r
Target berupa summary:\r
\r
\`\`\`python\r
labels = tokenizer(\r
    text_target=examples["summary"],\r
    max_length=128,\r
    truncation=True\r
)\r
\`\`\`\r
\r
### Data collator\r
\r
Karena summarization merupakan sequence-to-sequence task:\r
\r
\`\`\`python\r
from transformers import DataCollatorForSeq2Seq\r
\r
data_collator = DataCollatorForSeq2Seq(\r
    tokenizer=tokenizer,\r
    model=model\r
)\r
\`\`\`\r
\r
Training dapat dilakukan menggunakan:\r
\r
\`\`\`python\r
from transformers import Seq2SeqTrainer\r
\r
trainer = Seq2SeqTrainer(\r
    model=model,\r
    args=training_args,\r
    train_dataset=tokenized_datasets["train"],\r
    eval_dataset=tokenized_datasets["validation"],\r
    data_collator=data_collator,\r
)\r
\r
trainer.train()\r
\`\`\`\r
\r
### Evaluasi dengan ROUGE\r
\r
Metric yang umum digunakan adalah **ROUGE**.\r
\r
ROUGE membandingkan summary yang dihasilkan model dengan reference summary.\r
\r
Beberapa varian yang umum:\r
\r
\`\`\`text\r
ROUGE-1\r
ROUGE-2\r
ROUGE-L\r
\`\`\`\r
\r
ROUGE-1 melihat overlap unigram, ROUGE-2 melihat bigram, sedangkan ROUGE-L menggunakan longest common subsequence.\r
\r
Seperti BLEU, ROUGE memiliki keterbatasan karena kualitas ringkasan tidak selalu dapat direpresentasikan sepenuhnya hanya dengan overlap antara prediction dan reference.\r
\r
---\r
`,Tl=`Sampai bagian sebelumnya, kita banyak menggunakan pretrained model dan melakukan fine-tuning.\r
\r
Pada bagian ini pendekatannya berbeda: **model baru dilatih dari awal**.\r
\r
Pendekatan ini dapat masuk akal ketika:\r
\r
* Memiliki dataset yang sangat banyak.\r
* Dataset sangat berbeda dari data pretraining model yang tersedia.\r
* Domain datanya sangat khusus.\r
\r
Contohnya:\r
\r
\`\`\`text\r
Musical notes\r
DNA sequences\r
Programming languages\r
\`\`\`\r
\r
Untuk code generation, model causal/autoregressive seperti GPT-2 cocok digunakan karena model memprediksi token berdasarkan token-token sebelumnya.\r
\r
### Menyiapkan dataset\r
\r
Materi menggunakan dataset \`codeparrot\` yang berisi source code Python.\r
\r
Karena dataset sangat besar, kita tidak ingin mendownload semuanya. Dataset diproses menggunakan \`streaming=True\`.\r
\r
Contoh filtering:\r
\r
\`\`\`python\r
def any_keyword_in_string(string, keywords):\r
    for keyword in keywords:\r
        if keyword in string:\r
            return True\r
    return False\r
\`\`\`\r
\r
Keyword yang digunakan:\r
\r
\`\`\`python\r
filters = ["pandas", "sklearn", "matplotlib", "seaborn"]\r
\`\`\`\r
\r
Kemudian dataset di-stream:\r
\r
\`\`\`python\r
from datasets import load_dataset\r
\r
split = "train"\r
filters = ["pandas", "sklearn", "matplotlib", "seaborn"]\r
\r
data = load_dataset(\r
    f"transformersbook/codeparrot-{split}",\r
    split=split,\r
    streaming=True\r
)\r
\`\`\`\r
\r
Setelah filtering, materi menghasilkan dataset khusus yang berkaitan dengan Python data science.\r
\r
### Dataset hasil filtering\r
\r
Dataset yang sudah tersedia di Hub dapat dimuat dengan:\r
\r
\`\`\`python\r
from datasets import load_dataset, DatasetDict\r
\r
ds_train = load_dataset(\r
    "huggingface-course/codeparrot-ds-train",\r
    split="train"\r
)\r
\r
ds_valid = load_dataset(\r
    "huggingface-course/codeparrot-ds-valid",\r
    split="validation"\r
)\r
\r
raw_datasets = DatasetDict(\r
    {\r
        "train": ds_train,\r
        "valid": ds_valid,\r
    }\r
)\r
\`\`\`\r
\r
Dataset tersebut memiliki sekitar 606 ribu contoh training dan 3.322 contoh validation dalam materi.\r
\r
### Tokenisasi\r
\r
Pada Chapter 6 kita sudah membuat tokenizer khusus Python.\r
\r
Tokenizer tersebut kemudian digunakan untuk mengubah source code menjadi token:\r
\r
\`\`\`text\r
Python source code\r
        ↓\r
Python tokenizer\r
        ↓\r
input_ids\r
        ↓\r
Causal language model\r
\`\`\`\r
\r
### Causal language modeling\r
\r
Pada causal language modeling, model belajar memprediksi token berikutnya.\r
\r
Contoh:\r
\r
\`\`\`text\r
Input:\r
import pandas as\r
\r
Target:\r
pd\r
\`\`\`\r
\r
Kemudian:\r
\r
\`\`\`text\r
Input:\r
import pandas as pd\r
\r
Target:\r
df\r
\`\`\`\r
\r
dan seterusnya.\r
\r
Secara sederhana:\r
\r
\`\`\`text\r
Token 1 → Token 2 → Token 3 → Token 4\r
                    ↓\r
              prediksi Token 5\r
\`\`\`\r
\r
Model tidak boleh menggunakan informasi dari token masa depan ketika memprediksi token saat ini. Karena itu digunakan **causal attention mask**.\r
\r
### Training\r
\r
Setelah tokenizer dan dataset siap, model GPT-2 dapat dibuat dan dilatih menggunakan \`Trainer\` atau training loop dengan \`Accelerate\`.\r
\r
Pendekatan ini jauh lebih mahal dibandingkan fine-tuning model yang sudah pretrained karena seluruh parameter model harus dipelajari dari awal.\r
\r
Materi juga menekankan bahwa pretraining model dari scratch membutuhkan resource komputasi yang jauh lebih besar dibandingkan fine-tuning model yang sudah tersedia.\r
\r
---\r
`,El=`**Question Answering (QA)** merupakan task untuk menjawab pertanyaan berdasarkan suatu context.\r
\r
Chapter ini berfokus pada **extractive question answering**.\r
\r
Artinya, jawaban diambil sebagai span teks dari context yang diberikan.\r
\r
Contoh:\r
\r
\`\`\`text\r
Context:\r
Transformers is backed by Jax, PyTorch, and TensorFlow.\r
\r
Question:\r
Which deep learning libraries back Transformers?\r
\r
Answer:\r
Jax, PyTorch, and TensorFlow\r
\`\`\`\r
\r
Berbeda dengan generative question answering, model extractive QA tidak membuat jawaban baru di luar context.\r
\r
### Dataset SQuAD\r
\r
Dataset yang digunakan adalah **SQuAD (Stanford Question Answering Dataset)**.\r
\r
Dataset dapat dimuat dengan:\r
\r
\`\`\`python\r
from datasets import load_dataset\r
\r
raw_datasets = load_dataset("squad")\r
\`\`\`\r
\r
Struktur dataset:\r
\r
\`\`\`text\r
DatasetDict({\r
    train: Dataset({\r
        features: ['id', 'title', 'context', 'question', 'answers'],\r
        ...\r
    })\r
    validation: Dataset({\r
        features: ['id', 'title', 'context', 'question', 'answers'],\r
        ...\r
    })\r
})\r
\`\`\`\r
\r
Tiga bagian terpenting adalah:\r
\r
\`\`\`text\r
context\r
question\r
answers\r
\`\`\`\r
\r
\`answers\` berisi:\r
\r
\`\`\`python\r
{\r
    "text": ["Saint Bernadette Soubirous"],\r
    "answer_start": [515]\r
}\r
\`\`\`\r
\r
\`answer_start\` menunjukkan posisi karakter awal jawaban di dalam context.\r
\r
### Tokenisasi Question Answering\r
\r
Question dan context diberikan sebagai pasangan:\r
\r
\`\`\`python\r
tokenizer(\r
    questions,\r
    contexts,\r
    truncation="only_second",\r
    max_length=384,\r
)\r
\`\`\`\r
\r
\`"only_second"\` berarti ketika input terlalu panjang, truncation diterapkan pada bagian kedua, yaitu context.\r
\r
Masalah utama adalah satu context dapat lebih panjang daripada maximum sequence length model.\r
\r
Karena itu context dapat dibagi menjadi beberapa bagian menggunakan:\r
\r
\`\`\`python\r
return_overflowing_tokens=True\r
\`\`\`\r
\r
Kemudian kita perlu mengetahui bagian context mana yang menghasilkan setiap feature.\r
\r
Fast tokenizer menyediakan informasi:\r
\r
\`\`\`python\r
overflow_to_sample_mapping\r
\`\`\`\r
\r
dan:\r
\r
\`\`\`python\r
offset_mapping\r
\`\`\`\r
\r
Keduanya digunakan untuk menghubungkan hasil tokenisasi dengan context asli.\r
\r
### Menentukan posisi jawaban\r
\r
Model Question Answering menghasilkan dua output utama:\r
\r
\`\`\`text\r
start_logits\r
end_logits\r
\`\`\`\r
\r
\`start_logits\` digunakan untuk menentukan posisi awal jawaban.\r
\r
\`end_logits\` digunakan untuk menentukan posisi akhir jawaban.\r
\r
Secara konsep:\r
\r
\`\`\`text\r
Context:\r
The Transformer architecture was introduced in 2017.\r
\r
          ↓\r
\r
start_logits → posisi "2017"\r
end_logits   → posisi akhir "2017"\r
\`\`\`\r
\r
Kemudian span dengan kombinasi score terbaik dipilih sebagai jawaban.\r
\r
### Fine-tuning\r
\r
Model seperti BERT atau DistilBERT dapat di-fine-tune menggunakan dataset SQuAD.\r
\r
Secara umum:\r
\r
\`\`\`text\r
Question + Context\r
        ↓\r
      BERT\r
        ↓\r
Start logits + End logits\r
        ↓\r
Answer span\r
\`\`\`\r
\r
Model yang telah dilatih dapat digunakan melalui pipeline:\r
\r
\`\`\`python\r
from transformers import pipeline\r
\r
question_answerer = pipeline("question-answering")\r
\r
question_answerer(\r
    question="Where do I work?",\r
    context="My name is Sylvain and I work at Hugging Face in Brooklyn",\r
)\r
\`\`\`\r
\r
Hasilnya berupa informasi seperti:\r
\r
\`\`\`python\r
{\r
    'score': ...,\r
    'start': 33,\r
    'end': 45,\r
    'answer': 'Hugging Face'\r
}\r
\`\`\`\r
\r
Perlu dibedakan antara **extractive QA** dan **generative QA**. Model encoder-only seperti BERT cocok untuk mengambil jawaban faktual dari context, sedangkan pertanyaan terbuka yang membutuhkan sintesis informasi lebih cocok ditangani oleh model encoder-decoder seperti T5 atau BART.\r
\r
---\r
`,Dl=`Setelah menyelesaikan Chapter 7, kita sudah mempelajari berbagai task fundamental NLP dan bagaimana task tersebut berhubungan dengan LLM.\r
\r
Task yang telah dibahas mencakup:\r
\r
\`\`\`text\r
Token Classification\r
        ↓\r
Masked Language Modeling\r
        ↓\r
Translation\r
        ↓\r
Summarization\r
        ↓\r
Causal Language Modeling\r
        ↓\r
Question Answering\r
\`\`\`\r
\r
### Dari NLP ke LLM\r
\r
LLM memperluas kemampuan pendekatan NLP tradisional.\r
\r
LLM dapat digunakan untuk berbagai task tanpa harus selalu membuat model khusus untuk setiap task.\r
\r
Contohnya:\r
\r
\`\`\`text\r
Text generation\r
Question answering\r
Summarization\r
Translation\r
Classification\r
Code generation\r
\`\`\`\r
\r
Namun, pemahaman mengenai NLP dasar tetap penting.\r
\r
Konsep seperti:\r
\r
* Tokenization\r
* Model architecture\r
* Pretraining\r
* Fine-tuning\r
* Evaluation\r
* Data processing\r
\r
tetap menjadi fondasi dalam memahami dan menggunakan LLM.\r
\r
### Arsitektur dan task\r
\r
Salah satu hal penting yang perlu dipahami adalah hubungan antara arsitektur Transformer dan task:\r
\r
| Arsitektur      | Contoh penggunaan                                   |\r
| --------------- | --------------------------------------------------- |\r
| Encoder-only    | Classification, token classification, extractive QA |\r
| Decoder-only    | Text generation, causal language modeling           |\r
| Encoder-decoder | Translation, summarization                          |\r
\r
Pemilihan arsitektur bergantung pada bentuk input dan output yang dibutuhkan oleh task.\r
\r
### Pretraining vs Fine-tuning\r
\r
Perbedaan penting:\r
\r
\`\`\`text\r
PRETRAINING\r
Data besar\r
   ↓\r
Model belajar pola bahasa umum\r
   ↓\r
Pretrained model\r
\r
\r
FINE-TUNING\r
Pretrained model\r
   ↓\r
Dataset task tertentu\r
   ↓\r
Model khusus task\r
\`\`\`\r
\r
Pretraining biasanya membutuhkan dataset dan resource komputasi yang jauh lebih besar.\r
\r
Fine-tuning memanfaatkan pengetahuan yang sudah diperoleh model sehingga biasanya membutuhkan resource lebih sedikit.\r
\r
### Evaluation\r
\r
Setiap task juga memiliki metric yang berbeda.\r
\r
Contohnya:\r
\r
\`\`\`text\r
Translation\r
→ BLEU\r
\r
Summarization\r
→ ROUGE\r
\r
Classification\r
→ Accuracy / F1\r
\r
Question Answering\r
→ Exact Match / F1\r
\`\`\`\r
\r
Metric membantu mengukur performa model, tetapi setiap metric memiliki keterbatasan dan tidak selalu sepenuhnya menggambarkan kualitas sebenarnya.\r
\r
### Menggunakan model yang sudah dilatih\r
\r
Setelah model selesai di-fine-tune, model dapat di-upload ke Hugging Face Hub dan digunakan kembali dengan \`from_pretrained()\` atau melalui \`pipeline()\`.\r
\r
Contoh:\r
\r
\`\`\`python\r
from transformers import AutoModel\r
\r
model = AutoModel.from_pretrained(\r
    "your-username/my-awesome-model"\r
)\r
\`\`\`\r
\r
Atau untuk inference menggunakan pipeline:\r
\r
\`\`\`python\r
from transformers import pipeline\r
\r
classifier = pipeline(\r
    "text-classification",\r
    model="your-username/my-awesome-model"\r
)\r
\`\`\`\r
\r
Dengan demikian, model yang sudah dilatih dapat digunakan kembali tanpa harus melakukan training dari awal.\r
\r
---`,Ol=`Hal-hal utama yang perlu dipahami:\r
\r
1. **Token classification** memberikan label pada setiap token, misalnya untuk NER.\r
2. **Masked language modeling** melatih model untuk memprediksi token yang sengaja dimasking.\r
3. **Translation** mengubah teks dari satu bahasa ke bahasa lain dan umumnya menggunakan encoder-decoder.\r
4. **Summarization** menghasilkan versi lebih singkat dari suatu teks sambil mempertahankan informasi penting.\r
5. **Causal language modeling** memprediksi token berikutnya berdasarkan token-token sebelumnya dan merupakan dasar model seperti GPT.\r
6. **Question answering** dapat menggunakan extractive approach untuk mengambil jawaban langsung dari context.\r
7. \`Trainer\` API mempermudah proses training, sedangkan \`Accelerate\` memberikan kontrol lebih besar terhadap training loop dan distributed training.\r
8. \`Datasets\` digunakan untuk mengelola dan memproses data.\r
9. \`Tokenizers\` digunakan untuk melakukan tokenisasi secara efisien.\r
10. Model yang sudah dilatih dapat dibagikan melalui Hugging Face Hub.\r
\r
Secara keseluruhan, Chapter 7 menunjukkan bagaimana pengetahuan dari Chapter 3 sampai Chapter 6 dapat digabungkan untuk membangun, melatih, mengevaluasi, dan menggunakan model Transformer pada berbagai task NLP.\r
`,kl=`Pada bagian sebelumnya, kita telah menggunakan \`Interface\` untuk membuat demo machine learning. Pada bagian ini diperkenalkan API tingkat rendah dari Gradio, yaitu \`gr.Blocks\`.\r
\r
Perbedaan utama antara \`Interface\` dan \`Blocks\` adalah tingkat fleksibilitasnya:\r
\r
* \`Interface\` merupakan API tingkat tinggi yang memungkinkan pembuatan demo machine learning dengan mudah hanya dengan menentukan input dan output.\r
* \`Blocks\` merupakan API tingkat rendah yang memberikan kontrol lebih besar terhadap **alur data** dan **layout** aplikasi.\r
\r
Dengan \`Blocks\`, kita dapat membuat aplikasi yang lebih kompleks dan memiliki beberapa tahapan.\r
\r
Beberapa hal yang dapat dilakukan menggunakan \`Blocks\` antara lain:\r
\r
* Mengelompokkan beberapa demo ke dalam beberapa tab.\r
* Mengatur posisi input dan output.\r
* Membuat aplikasi multi-step, yaitu output dari satu model menjadi input untuk model berikutnya.\r
* Mengubah properti komponen berdasarkan input pengguna, seperti pilihan pada dropdown atau visibility suatu komponen.\r
\r
---\r
`,Al=`Setelah Gradio terpasang, kode berikut dapat dijalankan sebagai Python script, Jupyter Notebook, maupun Google Colab.\r
\r
\`\`\`python\r
import gradio as gr\r
\r
\r
def flip_text(x):\r
    return x[::-1]\r
\r
\r
demo = gr.Blocks()\r
\r
with demo:\r
    gr.Markdown(\r
        """\r
    # Flip Text!\r
    Start typing below to see the output.\r
    """\r
    )\r
    input = gr.Textbox(placeholder="Flip this text")\r
    output = gr.Textbox()\r
\r
    input.change(fn=flip_text, inputs=input, outputs=output)\r
\r
demo.launch()\r
\`\`\`\r
\r
Pada contoh tersebut, fungsi \`flip_text()\` digunakan untuk membalik teks:\r
\r
\`\`\`python\r
def flip_text(x):\r
    return x[::-1]\r
\`\`\`\r
\r
Kemudian dibuat aplikasi menggunakan:\r
\r
\`\`\`python\r
demo = gr.Blocks()\r
\`\`\`\r
\r
Komponen-komponen aplikasi dibuat di dalam konteks:\r
\r
\`\`\`python\r
with demo:\r
\`\`\`\r
\r
Terdapat \`Markdown\` untuk menampilkan judul dan penjelasan:\r
\r
\`\`\`python\r
gr.Markdown(\r
    """\r
# Flip Text!\r
Start typing below to see the output.\r
"""\r
)\r
\`\`\`\r
\r
Kemudian dibuat dua \`Textbox\`:\r
\r
\`\`\`python\r
input = gr.Textbox(placeholder="Flip this text")\r
output = gr.Textbox()\r
\`\`\`\r
\r
Event \`change()\` digunakan agar fungsi \`flip_text()\` dijalankan ketika nilai pada \`input\` berubah:\r
\r
\`\`\`python\r
input.change(fn=flip_text, inputs=input, outputs=output)\r
\`\`\`\r
\r
Terakhir, aplikasi dijalankan dengan:\r
\r
\`\`\`python\r
demo.launch()\r
\`\`\`\r
\r
### Konsep utama dari Blocks\r
\r
Contoh sederhana tersebut memperkenalkan beberapa konsep dasar \`Blocks\`:\r
\r
1. \`Blocks\` memungkinkan kita membuat aplikasi web yang menggabungkan Markdown, HTML, tombol, dan komponen interaktif dengan membuat objek Python di dalam konteks \`gr.Blocks\`.\r
\r
2. Kita dapat menggunakan fungsi Python biasa sebagai fungsi pemrosesan input pengguna.\r
\r
   Fungsi tersebut tidak harus sederhana seperti membalik teks. Fungsi Python juga dapat digunakan untuk melakukan perhitungan atau memproses hasil prediksi model machine learning.\r
\r
3. Setiap komponen \`Blocks\` dapat diberikan event.\r
\r
   Event menentukan kapan suatu fungsi dijalankan, misalnya ketika komponen diklik atau ketika nilainya berubah.\r
\r
   Event menerima tiga parameter utama:\r
\r
   * \`fn\`: fungsi yang akan dijalankan.\r
   * \`inputs\`: komponen input yang nilainya diberikan kepada fungsi.\r
   * \`outputs\`: komponen yang nilainya akan diperbarui berdasarkan hasil fungsi.\r
\r
4. \`Blocks\` dapat menentukan apakah sebuah komponen bersifat interaktif berdasarkan event yang digunakan.\r
\r
   Jika diperlukan, perilaku tersebut dapat diubah secara manual menggunakan parameter \`interactive\`.\r
\r
Contohnya:\r
\r
\`\`\`python\r
gr.Textbox(\r
    placeholder="Flip this text",\r
    interactive=True\r
)\r
\`\`\`\r
\r
---\r
\r
`,jl='Secara default, komponen yang dibuat menggunakan `Blocks` akan ditampilkan secara vertikal dalam satu kolom.\r\n\r\nKita dapat mengubah layout tersebut menggunakan:\r\n\r\n```python\r\nwith gr.Column():\r\n```\r\n\r\natau:\r\n\r\n```python\r\nwith gr.Row():\r\n```\r\n\r\nKomponen di dalam `Column` akan disusun secara vertikal, sedangkan komponen di dalam `Row` akan disusun secara horizontal.\r\n\r\nSelain `Row` dan `Column`, kita juga dapat menggunakan `Tabs` untuk membuat beberapa tab dalam satu aplikasi.\r\n\r\nStrukturnya dapat dibuat seperti berikut:\r\n\r\n```python\r\nwith gr.Tabs():\r\n    with gr.TabItem("Nama Tab"):\r\n        ...\r\n```\r\n\r\nSemua komponen yang dibuat di dalam `TabItem` akan muncul pada tab tersebut.\r\n\r\n---\r\n\r\n',Ml=`Berikut contoh aplikasi yang memiliki dua tab: satu untuk membalik teks dan satu untuk membalik gambar.\r
\r
\`\`\`python\r
import numpy as np\r
import gradio as gr\r
\r
demo = gr.Blocks()\r
\r
\r
def flip_text(x):\r
    return x[::-1]\r
\r
\r
def flip_image(x):\r
    return np.fliplr(x)\r
\r
\r
with demo:\r
    gr.Markdown("Flip text or image files using this demo.")\r
    with gr.Tabs():\r
        with gr.TabItem("Flip Text"):\r
            with gr.Row():\r
                text_input = gr.Textbox()\r
                text_output = gr.Textbox()\r
            text_button = gr.Button("Flip")\r
        with gr.TabItem("Flip Image"):\r
            with gr.Row():\r
                image_input = gr.Image()\r
                image_output = gr.Image()\r
            image_button = gr.Button("Flip")\r
\r
    text_button.click(flip_text, inputs=text_input, outputs=text_output)\r
    image_button.click(flip_image, inputs=image_input, outputs=image_output)\r
\r
demo.launch()\r
\`\`\`\r
\r
Pada contoh tersebut terdapat dua tab:\r
\r
\`\`\`python\r
with gr.TabItem("Flip Text"):\r
\`\`\`\r
\r
dan:\r
\r
\`\`\`python\r
with gr.TabItem("Flip Image"):\r
\`\`\`\r
\r
Tab pertama digunakan untuk teks, sedangkan tab kedua digunakan untuk gambar.\r
\r
Komponen yang berada di dalam:\r
\r
\`\`\`python\r
with gr.Row():\r
\`\`\`\r
\r
akan disusun secara horizontal.\r
\r
Aplikasi juga menggunakan \`Button\` untuk menjalankan fungsi:\r
\r
\`\`\`python\r
text_button.click(flip_text, inputs=text_input, outputs=text_output)\r
\`\`\`\r
\r
dan:\r
\r
\`\`\`python\r
image_button.click(flip_image, inputs=image_input, outputs=image_output)\r
\`\`\`\r
\r
Artinya, fungsi baru dijalankan ketika tombol masing-masing diklik.\r
\r
---\r
`,Nl=`\r
Selain mengatur layout, \`Blocks\` memberikan kontrol terhadap event yang dapat memicu suatu fungsi.\r
\r
Setiap komponen memiliki event tertentu. Misalnya, \`Textbox\` memiliki event:\r
\r
\`\`\`python\r
change()\r
\`\`\`\r
\r
yang dijalankan ketika nilai textbox berubah.\r
\r
Textbox juga memiliki:\r
\r
\`\`\`python\r
submit()\r
\`\`\`\r
\r
yang dijalankan ketika pengguna menekan tombol Enter saat textbox sedang aktif.\r
\r
Komponen lain dapat memiliki lebih banyak event. Misalnya, \`Audio\` dapat memiliki event yang berhubungan dengan audio yang diputar, dihapus, dijeda, dan sebagainya.\r
\r
Event dibuat dengan memanggil nama event pada instance komponen:\r
\r
\`\`\`python\r
textbox.change(...)\r
\`\`\`\r
\r
atau:\r
\r
\`\`\`python\r
btn.click(...)\r
\`\`\`\r
\r
Event tersebut menggunakan tiga parameter utama:\r
\r
\`\`\`python\r
fn\r
inputs\r
outputs\r
\`\`\`\r
\r
### \`fn\`\r
\r
Menentukan fungsi yang akan dijalankan.\r
\r
\`\`\`python\r
fn=flip_text\r
\`\`\`\r
\r
### \`inputs\`\r
\r
Menentukan komponen yang nilainya akan diberikan kepada fungsi.\r
\r
\`\`\`python\r
inputs=input\r
\`\`\`\r
\r
Jika terdapat beberapa input, komponen dapat diberikan sebagai list.\r
\r
\`\`\`python\r
inputs=[input1, input2]\r
\`\`\`\r
\r
Nilai dari setiap komponen akan diberikan kepada parameter fungsi sesuai urutannya.\r
\r
### \`outputs\`\r
\r
Menentukan komponen yang akan diperbarui berdasarkan hasil fungsi.\r
\r
\`\`\`python\r
outputs=output\r
\`\`\`\r
\r
Jika terdapat beberapa output, dapat menggunakan list:\r
\r
\`\`\`python\r
outputs=[output1, output2]\r
\`\`\`\r
\r
Nilai hasil fungsi akan digunakan untuk memperbarui komponen sesuai urutannya.\r
\r
---\r
`,Pl=`Komponen yang digunakan sebagai input dan output tidak harus berbeda.\r
\r
Contohnya, sebuah textbox dapat menerima teks dan kemudian diperbarui dengan hasil dari fungsi yang dijalankan.\r
\r
\`\`\`python\r
import gradio as gr\r
\r
api = gr.Interface.load("huggingface/EleutherAI/gpt-j-6B")\r
\r
\r
def complete_with_gpt(text):\r
    # Use the last 50 characters of the text as context\r
    return text[:-50] + api(text[-50:])\r
\r
\r
with gr.Blocks() as demo:\r
    textbox = gr.Textbox(\r
        placeholder="Type here and press enter...",\r
        lines=4\r
    )\r
    btn = gr.Button("Generate")\r
\r
    btn.click(complete_with_gpt, textbox, textbox)\r
\r
demo.launch()\r
\`\`\`\r
\r
Pada bagian:\r
\r
\`\`\`python\r
btn.click(complete_with_gpt, textbox, textbox)\r
\`\`\`\r
\r
\`textbox\` digunakan sebagai input sekaligus output.\r
\r
Artinya, nilai dari textbox diberikan kepada fungsi \`complete_with_gpt()\`, kemudian hasil fungsi tersebut digunakan kembali untuk memperbarui textbox yang sama.\r
\r
---\r
`,Fl=`Salah satu kemampuan penting \`Blocks\` adalah membuat aplikasi dengan beberapa tahap pemrosesan.\r
\r
Output dari satu fungsi dapat digunakan sebagai input untuk fungsi lainnya.\r
\r
Sebagai contoh, sebuah audio dapat diproses menggunakan model speech-to-text. Hasil teksnya kemudian digunakan sebagai input untuk model sentiment analysis.\r
\r
\`\`\`python\r
from transformers import pipeline\r
\r
import gradio as gr\r
\r
asr = pipeline(\r
    "automatic-speech-recognition",\r
    "facebook/wav2vec2-base-960h"\r
)\r
classifier = pipeline("text-classification")\r
\r
\r
def speech_to_text(speech):\r
    text = asr(speech)["text"]\r
    return text\r
\r
\r
def text_to_sentiment(text):\r
    return classifier(text)[0]["label"]\r
\r
\r
demo = gr.Blocks()\r
\r
with demo:\r
    audio_file = gr.Audio(type="filepath")\r
    text = gr.Textbox()\r
    label = gr.Label()\r
\r
    b1 = gr.Button("Recognize Speech")\r
    b2 = gr.Button("Classify Sentiment")\r
\r
    b1.click(\r
        speech_to_text,\r
        inputs=audio_file,\r
        outputs=text\r
    )\r
    b2.click(\r
        text_to_sentiment,\r
        inputs=text,\r
        outputs=label\r
    )\r
\r
demo.launch()\r
\`\`\`\r
\r
Alur aplikasinya adalah:\r
\r
\`\`\`text\r
Audio\r
  ↓\r
Speech-to-Text\r
  ↓\r
Text\r
  ↓\r
Sentiment Analysis\r
  ↓\r
Label\r
\`\`\`\r
\r
Pertama, audio diberikan kepada:\r
\r
\`\`\`python\r
speech_to_text()\r
\`\`\`\r
\r
Fungsi tersebut menghasilkan teks:\r
\r
\`\`\`python\r
text = asr(speech)["text"]\r
\`\`\`\r
\r
Hasilnya kemudian dimasukkan ke komponen:\r
\r
\`\`\`python\r
text = gr.Textbox()\r
\`\`\`\r
\r
Textbox tersebut selanjutnya digunakan sebagai input untuk fungsi:\r
\r
\`\`\`python\r
text_to_sentiment()\r
\`\`\`\r
\r
Sehingga satu komponen dapat menjadi output dari satu proses sekaligus input untuk proses berikutnya.\r
\r
---\r
\r
`,Il=`\`Blocks\` tidak hanya dapat digunakan untuk mengubah nilai suatu komponen. Kita juga dapat mengubah properties komponen berdasarkan input pengguna.\r
\r
Contohnya:\r
\r
* Mengubah visibility.\r
* Mengubah jumlah baris pada textbox.\r
* Mengubah pilihan pada komponen tertentu.\r
\r
Salah satu caranya adalah dengan mengembalikan \`update()\` dari fungsi.\r
\r
Contohnya:\r
\r
\`\`\`python\r
import gradio as gr\r
\r
\r
def change_textbox(choice):\r
    if choice == "short":\r
        return gr.Textbox.update(lines=2, visible=True)\r
    elif choice == "long":\r
        return gr.Textbox.update(lines=8, visible=True)\r
    else:\r
        return gr.Textbox.update(visible=False)\r
\r
\r
with gr.Blocks() as block:\r
    radio = gr.Radio(\r
        ["short", "long", "none"],\r
        label="What kind of essay would you like to write?"\r
    )\r
    text = gr.Textbox(lines=2, interactive=True)\r
\r
    radio.change(\r
        fn=change_textbox,\r
        inputs=radio,\r
        outputs=text\r
    )\r
\r
    block.launch()\r
\`\`\`\r
\r
Pada contoh tersebut terdapat \`Radio\` yang memiliki tiga pilihan:\r
\r
\`\`\`python\r
["short", "long", "none"]\r
\`\`\`\r
\r
Ketika pengguna memilih \`"short"\`, textbox akan memiliki dua baris:\r
\r
\`\`\`python\r
return gr.Textbox.update(lines=2, visible=True)\r
\`\`\`\r
\r
Ketika memilih \`"long"\`, textbox akan memiliki delapan baris:\r
\r
\`\`\`python\r
return gr.Textbox.update(lines=8, visible=True)\r
\`\`\`\r
\r
Sedangkan ketika memilih \`"none"\`, textbox disembunyikan:\r
\r
\`\`\`python\r
return gr.Textbox.update(visible=False)\r
\`\`\`\r
\r
Event yang menghubungkan pilihan \`Radio\` dengan perubahan textbox adalah:\r
\r
\`\`\`python\r
radio.change(\r
    fn=change_textbox,\r
    inputs=radio,\r
    outputs=text\r
)\r
\`\`\`\r
\r
Dengan demikian, perubahan pada satu komponen dapat digunakan untuk mengubah properties komponen lainnya.\r
\r
---\r
`,Ll="`gr.Blocks` memberikan kontrol yang lebih besar dibandingkan `Interface` dalam membangun aplikasi Gradio.\r\n\r\nKonsep penting yang perlu dipahami:\r\n\r\n1. **Komponen**\r\n\r\n   * Membuat elemen aplikasi seperti `Textbox`, `Image`, `Button`, `Audio`, dan `Label`.\r\n\r\n2. **Layout**\r\n\r\n   * `Row` untuk menyusun komponen secara horizontal.\r\n   * `Column` untuk menyusun komponen secara vertikal.\r\n   * `Tabs` dan `TabItem` untuk membuat beberapa tab.\r\n\r\n3. **Events**\r\n\r\n   * Menentukan kapan suatu fungsi dijalankan.\r\n   * Contohnya `click()`, `change()`, dan `submit()`.\r\n\r\n4. **Data flow**\r\n\r\n   * Output suatu fungsi dapat menjadi input fungsi berikutnya.\r\n   * Hal ini memungkinkan pembuatan aplikasi multi-step.\r\n\r\n5. **Component properties**\r\n\r\n   * Properties komponen dapat diubah berdasarkan input pengguna.\r\n   * Contohnya `visible` dan `lines`.\r\n\r\nDengan konsep tersebut, `Blocks` dapat digunakan untuk membuat aplikasi machine learning yang lebih kompleks dan fleksibel dibandingkan demo sederhana menggunakan `Interface`.\r\n";function Rl(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var zl=Rl();function Bl(e){zl=e}var Vl={exec:()=>null};function Hl(e){let t=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),i=t[r];return i||(i=e(r),t[r]=i),i}}function X(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(Z.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var Ul=((e=``)=>{try{return!!RegExp(`(?<=1)(?<!1)`+e)}catch{return!1}})(),Z={codeRemoveIndent:/^(?: {0,3}\t| {1,4})/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,endingSpaceTabChar:/[ \t]$/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,leadingSpaceTab:/^[ \t]+/,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,numericCharacterReference:/&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));/g,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:Hl(e=>RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:Hl(e=>RegExp(`^ {0,${e}}((?:-[ 	]*){3,}|(?:_[ 	]*){3,}|(?:\\*[ 	]*){3,})(?:\\n+|$)`)),fencesBeginRegex:Hl(e=>RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),headingBeginRegex:Hl(e=>RegExp(`^ {0,${e}}#`)),htmlBeginRegex:Hl(e=>RegExp(`^ {0,${e}}(?:</?(?:${iu})(?: +|$|/?>)|<(?:script|pre|style|textarea|!--))`,`i`)),blockquoteBeginRegex:Hl(e=>RegExp(`^ {0,${e}}>`))},Wl=/^(?:[ \t]*(?:\n|$))+/,Gl=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Kl=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,ql=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Jl=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Yl=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Xl=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |fences|blockquote|heading|hr|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Zl=X(Xl).replace(/bull/g,Yl).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),Ql=X(Xl).replace(/bull/g,Yl).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),$l=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,eu=/^[^\n]+/,tu=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,nu=X(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,tu).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),ru=X(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,Yl).getRegex(),iu=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,au=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,ou=X(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,au).replace(`tag`,iu).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),su=e=>X($l).replace(`hr`,ql).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,e).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,iu).getRegex(),cu=su(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),lu=su(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),uu={blockquote:X(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,lu).getRegex(),code:Gl,def:nu,fences:Kl,heading:Jl,hr:ql,html:ou,lheading:Zl,list:ru,newline:Wl,paragraph:cu,table:Vl,text:eu},du=X(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,ql).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,iu).getRegex(),fu={...uu,lheading:Ql,table:du,paragraph:X($l).replace(`hr`,ql).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,du).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,iu).getRegex()},pu={...uu,html:X(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,au).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Vl,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:X($l).replace(`hr`,ql).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,Zl).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},mu=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,hu=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,gu=/^( {2,}|\\)\n(?!\s*$)[ \t]*/,_u=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,vu=/[\p{P}\p{S}]/u,yu=/[\s\p{P}\p{S}]/u,bu=/[^\s\p{P}\p{S}]/u,xu=X(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,yu).getRegex(),Su=/[\p{Pi}\p{Ps}"']/u,Cu=/(?!~)[\p{P}\p{S}]/u,wu=/(?!~)[\s\p{P}\p{S}]/u,Tu=/(?:[^\s\p{P}\p{S}]|~)/u,Eu=X(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,Ul?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),Du=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,Ou=X(Du,`u`).replace(/punct/g,vu).getRegex(),ku=X(Du,`u`).replace(/punct/g,Cu).getRegex(),Au=X(/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,`u`).replace(/openQuote/g,Su).replace(/punct/g,vu).getRegex(),ju=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,Mu=X(ju,`gu`).replace(/notPunctSpace/g,bu).replace(/punctSpace/g,yu).replace(/punct/g,vu).getRegex(),Nu=X(ju,`gu`).replace(/notPunctSpace/g,Tu).replace(/punctSpace/g,wu).replace(/punct/g,Cu).getRegex(),Pu=X(`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,bu).replace(/punctSpace/g,yu).replace(/punct/g,vu).getRegex(),Fu=X(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,bu).replace(/punctSpace/g,yu).replace(/punct/g,vu).getRegex(),Iu=X(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,bu).replace(/punctSpace/g,yu).replace(/punct/g,vu).getRegex(),Lu=X(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,vu).getRegex(),Ru=X(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,bu).replace(/punctSpace/g,yu).replace(/punct/g,vu).getRegex(),zu=X(/\\(punct)/,`gu`).replace(/punct/g,vu).getRegex(),Bu=X(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Vu=X(au).replace(`(?:-->|$)`,`-->`).getRegex(),Hu=X(`^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,Vu).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Uu=/\[(?:\\[\s\S]|[^\[\]\\])*\]/,Wu=X(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace(`brackets`,Uu).getRegex(),Gu=X(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace(`label`,Wu).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Ku=X(/^!?\[(label)\]\[(ref)\]/).replace(`label`,Wu).replace(`ref`,tu).getRegex(),qu=X(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,tu).getRegex(),Ju=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\]){1,999}/,Yu=X(/(?:[^\[\]\\`]*(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\]))){0,999}?[^\[\]\\`]*?/).replace(`brackets`,Uu).getRegex(),Xu=X(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,X(/^!?\[(label)\]\[(ref)\]/).replace(`label`,Yu).replace(`ref`,Ju).getRegex()).replace(`nolink`,X(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,Ju).getRegex()).getRegex(),Zu=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Qu=X(/(?:mailto:email|xmpp:email(?:\/[A-Za-z0-9@.]+)?)/).replace(/email/g,/[A-Za-z0-9._+-]+@[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),$u={_backpedal:Vl,anyPunctuation:zu,autolink:Bu,blockSkip:Eu,br:gu,code:hu,del:Vl,delLDelim:Vl,delRDelim:Vl,emStrongLDelim:Ou,emStrongRDelimAst:Mu,emStrongRDelimUnd:Fu,escape:mu,link:Gu,nolink:qu,punctuation:xu,reflink:Ku,reflinkSearch:Xu,tag:Hu,text:_u,url:Vl},ed={...$u,emStrongLDelim:Au,emStrongRDelimAst:Pu,emStrongRDelimUnd:Iu,link:X(/^!?\[(label)\]\((.*?)\)/).replace(`label`,Wu).getRegex(),reflink:X(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,Wu).getRegex()},td={...$u,emStrongRDelimAst:Nu,emStrongLDelim:ku,delLDelim:Lu,delRDelim:Ru,url:X(/^emailProtocol|^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`emailProtocol`,Qu).replace(`protocol`,Zu).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:X(/^(?:[^a-zA-Z0-9](?=emailProtocol)|(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9](?=emailProtocol)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))))/).replace(`protocol`,Zu).replace(/emailProtocol/g,/(?:mailto|xmpp):/).getRegex()},nd={...td,br:X(gu).replace(`{2,}`,`*`).getRegex(),text:X(td.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},rd={normal:uu,gfm:fu,pedantic:pu},id={normal:$u,gfm:td,breaks:nd,pedantic:ed},ad={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},od=e=>ad[e];function Q(e,t){if(t){if(Z.escapeTest.test(e))return e.replace(Z.escapeReplace,od)}else if(Z.escapeTestNoEncode.test(e))return e.replace(Z.escapeReplaceNoEncode,od);return e}function sd(e){return e.replace(Z.numericCharacterReference,(e,t,n)=>{let r=t===void 0?Number.parseInt(n,16):Number.parseInt(t,10);return r===0||r>1114111||r>=55296&&r<=57343?`�`:String.fromCodePoint(r)})}function cd(e){try{e=encodeURI(e).replace(Z.percentDecode,`%`)}catch{return null}return e}function ld(e,t){let n=e.replace(Z.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(Z.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t){if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``)}for(;r<n.length;r++)n[r]=n[r].trim().replace(Z.slashPipe,`|`);return n}function ud(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function dd(e){let t=e.split(`
`),n=t.length-1;for(;n>=0&&Z.blankLine.test(t[n]);)n--;return t.length-n<=2?e:t.slice(0,n+1).join(`
`)}function fd(e){return e.trim().toLowerCase().toUpperCase().toLowerCase()}function pd(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function md(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function hd(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`),c=e[0].charAt(0)===`!`;r.state.inLink=!0;let l=r.state.linkEmitted,u=r.state.inRawBlock;r.state.linkEmitted=!1;let d=r.inlineTokens(s),f=r.state.linkEmitted;if(r.state.linkEmitted=l,r.state.inLink=!1,!c){if(f){r.state.inRawBlock=u;return}r.state.linkEmitted=!0}return{type:c?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:d}}function gd(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return e.slice(Math.min(r.length,i.length))}).join(`
`)}function _d(e,t,n,r){if(!t.includes(`<`))return!1;for(let i=0;i<t.length;i++){if(t[i]===`\\`){i++;continue}if(t[i]==="`"){let e=r.inline.code.exec(t.slice(i));if(e){i+=e[0].length-1;continue}}if(t[i]!==`<`)continue;let a=e.slice(n+i),o=r.inline.tag.exec(a)||r.inline.autolink.exec(a);if(o){if(o[0].length>t.length-i)return!0;i+=o[0].length-1}}return!1}var vd=class{options;rules;lexer;constructor(e){this.options=e||zl}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=this.options.pedantic?t[0]:dd(t[0]);return{type:`code`,raw:e,codeBlockStyle:`indented`,text:e.replace(this.rules.other.codeRemoveIndent,``)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=gd(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=ud(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceTabChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:ud(t[0],`
`),depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:ud(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=ud(t[0],`
`).split(`
`),n=``,r=``,i=[];for(;e.length>0;){let t=!1,a=[],o=0;for(;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))a.push(e[o]),t=!0;else if(!t)a.push(e[o]);else break;e=e.slice(o);let s=a.join(`
`),c=s.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,``);n=n?`${n}
${s}`:s,r=r?`${r}
${c}`:c;let l=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=l,e.length===0)break;let u=i.at(-1);if(u?.type===`code`)break;if(u?.type===`blockquote`){let t=u,a=e.join(`
`),o=t.raw+`
`+a.replace(this.rules.other.blockquoteSetextReplace2,``),s=this.blockquote(o);i[i.length-1]=s;let c=o.substring(s.raw.length).replace(/^\n/,``),l=c?c.split(`
`).length:0,d=l?e.slice(0,-l):e;d.length>0&&(n=`${n}
${d.join(`
`)}`),r=r.substring(0,r.length-t.text.length)+s.text;break}if(u?.type===`list`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.list(a);i[i.length-1]=o,n=n.substring(0,n.length-u.raw.length)+o.raw,r=r.substring(0,r.length-t.raw.length)+o.raw,e=a.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:`list`,raw:``,ordered:r,start:r?+n.slice(0,-1):``,loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:`[*+-]`);let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let n=!1,r=``,s=``;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let c=t[2].split(`
`,1)[0],l=t[1].length,u=this.options.pedantic?md(c,l):c.replace(this.rules.other.leadingSpaceTab,e=>md(e,l)),d=e.split(`
`,1)[0],f=!u.trim(),p=0;if(this.options.pedantic?(p=2,s=u.trimStart()):f?p=l+1:(p=u.search(this.rules.other.nonSpaceChar),p=p>4?1:p,s=u.slice(p),p+=l),f&&this.rules.other.blankLine.test(d)&&(r+=d+`
`,e=e.substring(d.length+1),n=!0),!n){let t=this.rules.other.nextBulletRegex(p),n=this.rules.other.hrRegex(p),i=this.rules.other.fencesBeginRegex(p),a=this.rules.other.headingBeginRegex(p),o=this.rules.other.htmlBeginRegex(p),c=this.rules.other.blockquoteBeginRegex(p);for(;e;){let l=e.split(`
`,1)[0],m;if(d=l,this.options.pedantic?(d=d.replace(this.rules.other.listReplaceNesting,`  `),m=d):m=d.replace(this.rules.other.leadingSpaceTab,e=>e.replace(this.rules.other.tabCharGlobal,`    `)),i.test(d)||a.test(d)||o.test(d)||c.test(d)||t.test(d)||n.test(d))break;if(m.search(this.rules.other.nonSpaceChar)>=p||!d.trim())s+=`
`+m.slice(p);else{if(f||u.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||i.test(u)||a.test(u)||n.test(u))break;s+=`
`+d}f=!d.trim(),r+=l+`
`,e=e.substring(l.length+1),u=m.slice(p)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(o=!0)),i.items.push({type:`list_item`,raw:r,task:!!this.options.gfm&&this.rules.other.listIsTask.test(s),loose:!1,text:s,tokens:[]}),i.raw+=r}let s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let e of i.items)if(this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]),!i.loose){let t=e.tokens.filter(e=>e.type===`space`);i.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}for(let e of i.items){let t=e.tokens[0];if(e.task&&(t?.type===`text`||t?.type===`paragraph`)){e.text=e.text.replace(this.rules.other.listReplaceTask,``),t.raw=t.raw.replace(this.rules.other.listReplaceTask,``),t.text=t.text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}let n=this.rules.other.listTaskCheckbox.exec(e.raw);if(n){let t={type:`checkbox`,raw:n[0]+` `,checked:n[0]!==`[ ]`};e.checked=t.checked,i.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=t.raw+e.tokens[0].raw,e.tokens[0].text=t.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(t)):e.tokens.unshift({type:`paragraph`,raw:t.raw,text:t.raw,tokens:[t]}):e.tokens.unshift(t)}}else e.task&&=!1}if(i.loose)for(let e of i.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return i}}html(e){let t=this.rules.block.html.exec(e);if(t){let e=dd(t[0]);return{type:`html`,block:!0,raw:e,pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:e}}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=fd(t[1]).replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:ud(t[0],`
`),href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=ld(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:ud(t[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(ld(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:ud(t[0],`
`),depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let n=t[0].charAt(0)===`!`?2:1;if(!this.options.pedantic&&_d(e,t[1],n,this.rules))return;let r=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(r)){if(!this.rules.other.endAngleBracket.test(r))return;let e=ud(r.slice(0,-1),`\\`);if((r.length-e.length)%2==0)return}else{let e=pd(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let i=t[2],a=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(i);e&&(i=e[1],a=e[3])}else a=t[3]?t[3].slice(1,-1):``;return i=i.trim(),this.rules.other.startAngleBracket.test(i)&&(i=this.options.pedantic&&!this.rules.other.endAngleBracket.test(r)?i.slice(1):i.slice(1,-1)),hd(t,{href:i&&i.replace(this.rules.inline.anyPunctuation,`$1`),title:a&&a.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let r=n[0].charAt(0)===`!`?2:1;if(!this.options.pedantic&&_d(e,n[1],r,this.rules))return;let i=t[fd((n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `))];if(!i){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return hd(n,i,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let i=[...r[0]].length-1,a,o,s=i,c=0,l=r[0][0],u=n===l,d=l===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,t=t.slice(-1*e.length+i);(r=d.exec(t))!==null;){if(a=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!a)continue;if(o=[...a].length,r[3]||r[4]){s+=o;continue}if(r[5]||r[6]){if(i%3&&!((i+o)%3)){c+=o;continue}if(u)break}if(s-=o,s>0)continue;o=Math.min(o,o+s+c);let t=[...r[0]][0].length,n=e.slice(0,i+r.index+t+o);if(Math.min(i,o)%2){let e=n.slice(1,-1);return{type:`em`,raw:n,text:e,tokens:this.lexer.inlineTokens(e)}}let l=n.slice(2,-2);return{type:`strong`,raw:n,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,autolink:!0,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,autolink:!0,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:e?t[0]:sd(t[0]),escaped:e}}}},yd=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||zl,this.options.tokenizer=this.options.tokenizer||new vd,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,linkEmitted:!1,top:!0};let t={other:Z,block:rd.normal,inline:id.normal};this.options.pedantic?(t.block=rd.pedantic,t.inline=id.pedantic):this.options.gfm&&(t.block=rd.gfm,t.inline=this.options.breaks?id.breaks:id.gfm),this.tokenizer.rules=t}static get rules(){return{block:rd,inline:id}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(Z.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(Z.tabCharGlobal,`    `).replace(Z.spaceLine,``));let r=1/0;for(;e;){if(e.length<r)r=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(n=>(i=n.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let n=t.at(-1);i.raw.length===1&&n!==void 0?n.raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.raw,this.inlineQueue.at(-1).src=n.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},t.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}let a=e;if(this.options.extensions?.startBlock){let t=1/0,n=e.slice(1),r;this.options.extensions.startBlock.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(a=e.substring(0,t+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){let r=t.at(-1);n&&r?.type===`paragraph`?(r.raw+=(r.raw.endsWith(`
`)?``:`
`)+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=r.text):t.push(i),n=a.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}linkInText(e){if(!e.includes(`[`))return!1;let t=this.tokenizer.rules.inline.link;for(let n of e.matchAll(this.tokenizer.rules.inline.blockSkip))if(t.test(n[0])&&e.charAt(n.index-1)!==`!`)return!0;for(let t of e.matchAll(this.tokenizer.rules.inline.reflinkSearch)){let e=t[0],n=e.lastIndexOf(`[`);if(e.charAt(0)!==`!`&&Object.hasOwn(this.tokens.links,fd(e.slice(n+1,-1)))&&!(n>1&&this.linkInText(e.slice(1,n-1))))return!0}return!1}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=e;if(this.tokens.links&&e.includes(`[`)){let e=this.tokenizer.rules.inline.reflinkSearch,t=n=>{let r=n.lastIndexOf(`[`);if(!Object.hasOwn(this.tokens.links,fd(n.slice(r+1,-1))))return n;if(r>1&&n.charAt(0)!==`!`){let i=n.slice(1,r-1);if(this.linkInText(i))return`[`+i.replace(e,t)+`][`+`a`.repeat(n.length-r-2)+`]`}return`[`+`a`.repeat(n.length-2)+`]`};n=n.replace(e,t)}n=n.replace(this.tokenizer.rules.inline.anyPunctuation,e=>`+`.repeat(e.length)),n=n.replace(this.tokenizer.rules.inline.blockSkip,(e,t,n)=>{let r=n?n.length:0;return e.slice(0,r)+`[`+`a`.repeat(e.length-r-2)+`]`}),n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let r=!1,i=``,a=1/0;for(;e;){if(e.length<a)a=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}r||(i=``),r=!1;let o;if(this.options.extensions?.inline?.some(n=>(o=n.call({lexer:this},e,t))?(e=e.substring(o.raw.length),t.push(o),!0):!1))continue;if(o=this.tokenizer.escape(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.tag(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.link(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(o.raw.length);let n=t.at(-1);o.type===`text`&&n?.type===`text`?(n.raw+=o.raw,n.text+=o.text):t.push(o);continue}if(o=this.tokenizer.emStrong(e,n,i)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.codespan(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.br(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.del(e,n,i)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.autolink(e)){e=e.substring(o.raw.length),t.push(o);continue}if(!this.state.inLink&&(o=this.tokenizer.url(e))){e=e.substring(o.raw.length),t.push(o);continue}let s=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(s=e.substring(0,t+1))}if(o=this.tokenizer.inlineText(s)){e=e.substring(o.raw.length),o.raw.slice(-1)!==`_`&&(i=o.raw.slice(-1)),r=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=o.raw,n.text+=o.text):t.push(o);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}infiniteLoopError(e){let t=`Infinite loop on byte: `+e;if(this.options.silent)console.error(t);else throw Error(t)}},bd=class{options;parser;constructor(e){this.options=e||zl}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(Z.notSpaceStart)?.[0],i=e?e.replace(Z.endingNewline,``)+`
`:``;return r?`<pre><code class="language-`+Q(r)+`">`+(n?i:Q(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:Q(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return``}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,r=``;for(let t=0;t<e.items.length;t++){let n=e.items[t];r+=this.listitem(n)}let i=t?`ol`:`ul`,a=t&&n!==1?` start="`+n+`"`:``;return`<`+i+a+`>
`+r+`</`+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return`<input `+(e?`checked="" `:``)+`disabled="" type="checkbox"> `}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t=``,n=``;for(let t=0;t<e.header.length;t++)n+=this.tablecell(e.header[t]);t+=this.tablerow({text:n});let r=``;for(let t=0;t<e.rows.length;t++){let i=e.rows[t];n=``;for(let e=0;e<i.length;e++)n+=this.tablecell(i[e]);r+=this.tablerow({text:n})}return r&&=`<tbody>${r}</tbody>`,`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?`th`:`td`;return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Q(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,text:n,tokens:r,autolink:i}){let a=i?Q(n,!0):this.parser.parseInline(r),o=cd(e);if(o===null)return a;e=Q(o,i);let s=`<a href="`+e+`"`;return t&&(s+=` title="`+Q(t)+`"`),s+=`>`+a+`</a>`,s}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=cd(e);if(i===null)return Q(n);e=i;let a=`<img src="${Q(e)}" alt="${Q(n)}"`;return t&&(a+=` title="${Q(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:Q(e.text)}},xd=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}checkbox({raw:e}){return e}},Sd=class e{options;renderer;textRenderer;constructor(e){this.options=e||zl,this.options.renderer=this.options.renderer||new bd,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new xd}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`checkbox`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`checkbox`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},Cd=class{options;block;constructor(e){this.options=e||zl}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?yd.lex:yd.lexInline}provideParser(e=this.block){return e?Sd.parse:Sd.parseInline}},wd=new class{defaults=Rl();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Sd;Renderer=bd;TextRenderer=xd;Lexer=yd;Tokenizer=vd;Hooks=Cd;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case`list`:{let e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);n=n.concat(this.walkTokens(i,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new bd(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new vd(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new Cd;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];t[r]=Cd.passThroughHooks.has(n)?e=>{if(this.defaults.async&&Cd.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:(...e)=>{if(this.defaults.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return yd.lex(e,t??this.defaults)}parser(e,t){return Sd.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer(e):e?yd.lex:yd.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser(e):e?Sd.parse:Sd.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer(e):e?yd.lex:yd.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser(e):e?Sd.parse:Sd.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+Q(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function $(e,t){return wd.parse(e,t)}$.options=$.setOptions=function(e){return wd.setOptions(e),$.defaults=wd.defaults,Bl($.defaults),$},$.getDefaults=Rl,$.defaults=zl;function Td(...e){return wd.use(...e),$.defaults=wd.defaults,Bl($.defaults),$}$.use=Td,$.walkTokens=function(e,t){return wd.walkTokens(e,t)},$.parseInline=wd.parseInline,$.Parser=Sd,$.parser=Sd.parse,$.Renderer=bd,$.TextRenderer=xd,$.Lexer=yd,$.lexer=yd.lex,$.Tokenizer=vd,$.Hooks=Cd,$.parse=$,$.options,$.setOptions,$.walkTokens,$.parseInline,Sd.parse,yd.lex;var Ed={key:0,class:`page`},Dd=[`innerHTML`],Od={class:`toc`},kd=[`onClick`],Ad={key:1,class:`content`},jd=_c({history:zs(`/ModuleLLM-HF/`),routes:[{path:`/`,redirect:`/chapter/1/introduction`},{path:`/chapter/:id/:slug`,component:{__name:`ChapterView`,setup(e){let t=Object.assign({"../content/chapter1/architectures.md":wc,"../content/chapter1/bias-limitations.md":Tc,"../content/chapter1/how-transformers-work.md":Ec,"../content/chapter1/inference.md":Dc,"../content/chapter1/introduction.md":Oc,"../content/chapter1/nlp-llm.md":kc,"../content/chapter1/solve-tasks.md":Ac,"../content/chapter1/summary.md":jc,"../content/chapter1/what-can-they-do.md":Mc,"../content/chapter10/poin1.md":Nc,"../content/chapter10/poin2.md":Pc,"../content/chapter10/poin3.md":Fc,"../content/chapter10/poin4.md":Ic,"../content/chapter10/poin5.md":Lc,"../content/chapter2/poin1.md":Rc,"../content/chapter2/poin2.md":zc,"../content/chapter2/poin3.md":Bc,"../content/chapter2/poin4.md":Vc,"../content/chapter2/poin5.md":Hc,"../content/chapter2/poin6.md":Uc,"../content/chapter2/poin7.md":Wc,"../content/chapter2/poin8.md":Gc,"../content/chapter3/poin1.md":Kc,"../content/chapter3/poin2.md":qc,"../content/chapter3/poin3.md":Jc,"../content/chapter3/poin4.md":Yc,"../content/chapter3/poin5.md":Xc,"../content/chapter3/poin6.md":Zc,"../content/chapter3/poin7.md":Qc,"../content/chapter4/poin1.md":$c,"../content/chapter4/poin2.md":el,"../content/chapter4/poin3.md":tl,"../content/chapter4/poin4.md":nl,"../content/chapter4/poin5.md":rl,"../content/chapter5/poin1.md":il,"../content/chapter5/poin2.md":al,"../content/chapter5/poin3.md":ol,"../content/chapter5/poin4.md":sl,"../content/chapter5/poin5.md":cl,"../content/chapter5/poin6.md":ll,"../content/chapter5/poin7.md":ul,"../content/chapter6/poin1.md":dl,"../content/chapter6/poin2.md":fl,"../content/chapter6/poin3.md":pl,"../content/chapter6/poin4.md":ml,"../content/chapter6/poin5.md":hl,"../content/chapter6/poin6.md":gl,"../content/chapter6/poin7.md":_l,"../content/chapter6/poin8.md":vl,"../content/chapter6/poin9.md":yl,"../content/chapter7/poin1.md":bl,"../content/chapter7/poin2.md":xl,"../content/chapter7/poin3.md":Sl,"../content/chapter7/poin4.md":Cl,"../content/chapter7/poin5.md":wl,"../content/chapter7/poin6.md":Tl,"../content/chapter7/poin7.md":El,"../content/chapter7/poin8.md":Dl,"../content/chapter7/poin9.md":Ol,"../content/chapter8/poin1.md":kl,"../content/chapter8/poin2.md":Al,"../content/chapter8/poin3.md":jl,"../content/chapter8/poin4.md":Ml,"../content/chapter8/poin5.md":Nl,"../content/chapter8/poin6.md":Pl,"../content/chapter8/poin7.md":Fl,"../content/chapter8/poin8.md":Il,"../content/chapter8/poin9.md":Ll}),n=No(),r=q(()=>{let e=t[`../content/chapter`+n.params.id+`/`+n.params.slug+`.md`];if(!e)return null;let r=new DOMParser().parseFromString($.parse(e),`text/html`),i=[];return r.querySelectorAll(`h2, h3`).forEach((e,t)=>{e.id=`h-`+t,i.push({id:e.id,text:e.textContent,level:e.tagName})}),{html:r.body.innerHTML,toc:i}});function i(e){document.getElementById(e)?.scrollIntoView({behavior:`smooth`})}return(e,t)=>r.value?(Fi(),Bi(`div`,Ed,[W(`article`,{class:`content`,innerHTML:r.value.html},null,8,Dd),W(`aside`,Od,[t[0]||=W(`div`,{class:`toc-title`},`Di halaman ini`,-1),(Fi(!0),Bi(H,null,yr(r.value.toc,e=>(Fi(),Bi(`a`,{key:e.id,href:`#`,class:A(e.level),onClick:fo(t=>i(e.id),[`prevent`])},Ce(e.text),11,kd))),128))])])):(Fi(),Bi(`p`,Ad,`Catatan belum dibuat.`))}}}],scrollBehavior(){return{top:0}}});go(Cc).use(jd).mount(`#app`);