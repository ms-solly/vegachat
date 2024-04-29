(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const ot="modulepreload",st=function(e){return"/"+e},Le={},xe=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){const s=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),l=i?.nonce||i?.getAttribute("nonce");o=Promise.all(n.map(a=>{if(a=st(a),a in Le)return;Le[a]=!0;const c=a.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(!!r)for(let m=s.length-1;m>=0;m--){const f=s[m];if(f.href===a&&(!c||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${u}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":ot,c||(d.as="script",d.crossOrigin=""),d.href=a,l&&d.setAttribute("nonce",l),document.head.appendChild(d),c)return new Promise((m,f)=>{d.addEventListener("load",m),d.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${a}`)))})}))}return o.then(()=>t()).catch(s=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=s,window.dispatchEvent(i),!i.defaultPrevented)throw s})},v={context:void 0,registry:void 0};function Q(e){v.context=e}const it=(e,t)=>e===t,ye=Symbol("solid-proxy"),ee={equals:it};let je=qe;const I=1,te=2,Me={owned:null,cleanups:null,context:null,owner:null},de={};var y=null;let he=null,lt=null,b=null,R=null,M=null,se=0;function Be(e,t){const n=b,r=y,o=e.length===0,s=t===void 0?r:t,i=o?Me:{owned:null,cleanups:null,context:s?s.context:null,owner:s},l=o?e:()=>e(()=>_(()=>le(i)));y=i,b=null;try{return B(l,!0)}finally{b=n,y=r}}function j(e,t){t=t?Object.assign({},ee,t):ee;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=o=>(typeof o=="function"&&(o=o(n.value)),Ve(n,o));return[ze.bind(n),r]}function Re(e,t,n){const r=ie(e,t,!0,I);W(r)}function K(e,t,n){const r=ie(e,t,!1,I);W(r)}function at(e,t,n){je=yt;const r=ie(e,t,!1,I);(!n||!n.render)&&(r.user=!0),M?M.push(r):W(r)}function L(e,t,n){n=n?Object.assign({},ee,n):ee;const r=ie(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,W(r),ze.bind(r)}function ct(e){return e&&typeof e=="object"&&"then"in e}function ut(e,t,n){let r,o,s;arguments.length===2&&typeof t=="object"||arguments.length===1?(r=!0,o=e,s=t||{}):(r=e,o=t,s=n||{});let i=null,l=de,a=null,c=!1,u="initialValue"in s,h=typeof r=="function"&&L(r);const d=new Set,[m,f]=(s.storage||j)(s.initialValue),[g,w]=j(void 0),[x,F]=j(void 0,{equals:!1}),[O,T]=j(u?"ready":"unresolved");if(v.context){a=`${v.context.id}${v.context.count++}`;let k;s.ssrLoadFrom==="initial"?l=s.initialValue:v.load&&(k=v.load(a))&&(l=k)}function $(k,S,P,p){return i===k&&(i=null,p!==void 0&&(u=!0),(k===l||S===l)&&s.onHydrated&&queueMicrotask(()=>s.onHydrated(p,{value:S})),l=de,ce(S,P)),S}function ce(k,S){B(()=>{S===void 0&&f(()=>k),T(S!==void 0?"errored":u?"ready":"unresolved"),w(S);for(const P of d.keys())P.decrement();d.clear()},!1)}function V(){const k=gt,S=m(),P=g();if(P!==void 0&&!i)throw P;return b&&!b.user&&k&&Re(()=>{x(),i&&(k.resolved||d.has(k)||(k.increment(),d.add(k)))}),S}function X(k=!0){if(k!==!1&&c)return;c=!1;const S=h?h():r;if(S==null||S===!1){$(i,_(m));return}const P=l!==de?l:_(()=>o(S,{value:m(),refetching:k}));return ct(P)?(i=P,"value"in P?(P.status==="success"?$(i,P.value,void 0,S):$(i,void 0,void 0,S),P):(c=!0,queueMicrotask(()=>c=!1),B(()=>{T(u?"refreshing":"pending"),F()},!1),P.then(p=>$(P,p,void 0,S),p=>$(P,void 0,Ke(p),S)))):($(i,P,void 0,S),P)}return Object.defineProperties(V,{state:{get:()=>O()},error:{get:()=>g()},loading:{get(){const k=O();return k==="pending"||k==="refreshing"}},latest:{get(){if(!u)return V();const k=g();if(k&&!i)throw k;return m()}}}),h?Re(()=>X(!1)):X(!1),[V,{refetch:X,mutate:f}]}function _(e){if(b===null)return e();const t=b;b=null;try{return e()}finally{b=t}}function Ie(e,t,n){const r=Array.isArray(e);let o,s=n&&n.defer;return i=>{let l;if(r){l=Array(e.length);for(let c=0;c<e.length;c++)l[c]=e[c]()}else l=e();if(s)return s=!1,i;const a=_(()=>t(l,o,i));return o=l,a}}function ft(e){at(()=>_(e))}function ke(e){return y===null||(y.cleanups===null?y.cleanups=[e]:y.cleanups.push(e)),e}function Ue(){return y}function De(e,t){const n=y,r=b;y=e,b=null;try{return B(t,!0)}catch(o){Se(o)}finally{y=n,b=r}}function dt(e){const t=b,n=y;return Promise.resolve().then(()=>{b=t,y=n;let r;return B(e,!1),b=y=null,r?r.done:void 0})}function Fe(e,t){const n=Symbol("context");return{id:n,Provider:wt(n),defaultValue:e}}function ht(e){return y&&y.context&&y.context[e.id]!==void 0?y.context[e.id]:e.defaultValue}function Ae(e){const t=L(e),n=L(()=>we(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}let gt;function ze(){if(this.sources&&this.state)if(this.state===I)W(this);else{const e=R;R=null,B(()=>re(this),!1),R=e}if(b){const e=this.observers?this.observers.length:0;b.sources?(b.sources.push(this),b.sourceSlots.push(e)):(b.sources=[this],b.sourceSlots=[e]),this.observers?(this.observers.push(b),this.observerSlots.push(b.sources.length-1)):(this.observers=[b],this.observerSlots=[b.sources.length-1])}return this.value}function Ve(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&B(()=>{for(let o=0;o<e.observers.length;o+=1){const s=e.observers[o],i=he&&he.running;i&&he.disposed.has(s),(i?!s.tState:!s.state)&&(s.pure?R.push(s):M.push(s),s.observers&&He(s)),i||(s.state=I)}if(R.length>1e6)throw R=[],new Error},!1)),t}function W(e){if(!e.fn)return;le(e);const t=se;pt(e,e.value,t)}function pt(e,t,n){let r;const o=y,s=b;b=y=e;try{r=e.fn(t)}catch(i){return e.pure&&(e.state=I,e.owned&&e.owned.forEach(le),e.owned=null),e.updatedAt=n+1,Se(i)}finally{b=s,y=o}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Ve(e,r):e.value=r,e.updatedAt=n)}function ie(e,t,n,r=I,o){const s={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:y,context:y?y.context:null,pure:n};return y===null||y!==Me&&(y.owned?y.owned.push(s):y.owned=[s]),s}function ne(e){if(e.state===0)return;if(e.state===te)return re(e);if(e.suspense&&_(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<se);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===I)W(e);else if(e.state===te){const r=R;R=null,B(()=>re(e,t[0]),!1),R=r}}function B(e,t){if(R)return e();let n=!1;t||(R=[]),M?n=!0:M=[],se++;try{const r=e();return mt(n),r}catch(r){n||(M=null),R=null,Se(r)}}function mt(e){if(R&&(qe(R),R=null),e)return;const t=M;M=null,t.length&&B(()=>je(t),!1)}function qe(e){for(let t=0;t<e.length;t++)ne(e[t])}function yt(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:ne(r)}if(v.context){if(v.count){v.effects||(v.effects=[]),v.effects.push(...e.slice(0,n));return}else v.effects&&(e=[...v.effects,...e],n+=v.effects.length,delete v.effects);Q()}for(t=0;t<n;t++)ne(e[t])}function re(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const o=r.state;o===I?r!==t&&(!r.updatedAt||r.updatedAt<se)&&ne(r):o===te&&re(r,t)}}}function He(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=te,n.pure?R.push(n):M.push(n),n.observers&&He(n))}}function le(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){const s=o.pop(),i=n.observerSlots.pop();r<o.length&&(s.sourceSlots[i]=r,o[r]=s,n.observerSlots[r]=i)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)le(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function Ke(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Se(e,t=y){throw Ke(e)}function we(e){if(typeof e=="function"&&!e.length)return we(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=we(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function wt(e,t){return function(r){let o;return K(()=>o=_(()=>(y.context={...y.context,[e]:r.value},Ae(()=>r.children))),void 0),o}}function C(e,t){return _(()=>e(t||{}))}function J(){return!0}const bt={get(e,t,n){return t===ye?n:e.get(t)},has(e,t){return t===ye?!0:e.has(t)},set:J,deleteProperty:J,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:J,deleteProperty:J}},ownKeys(e){return e.keys()}};function ge(e){return(e=typeof e=="function"?e():e)?e:{}}function vt(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function xt(...e){let t=!1;for(let i=0;i<e.length;i++){const l=e[i];t=t||!!l&&ye in l,e[i]=typeof l=="function"?(t=!0,L(l)):l}if(t)return new Proxy({get(i){for(let l=e.length-1;l>=0;l--){const a=ge(e[l])[i];if(a!==void 0)return a}},has(i){for(let l=e.length-1;l>=0;l--)if(i in ge(e[l]))return!0;return!1},keys(){const i=[];for(let l=0;l<e.length;l++)i.push(...Object.keys(ge(e[l])));return[...new Set(i)]}},bt);const n={},r=Object.create(null);for(let i=e.length-1;i>=0;i--){const l=e[i];if(!l)continue;const a=Object.getOwnPropertyNames(l);for(let c=a.length-1;c>=0;c--){const u=a[c];if(u==="__proto__"||u==="constructor")continue;const h=Object.getOwnPropertyDescriptor(l,u);if(!r[u])r[u]=h.get?{enumerable:!0,configurable:!0,get:vt.bind(n[u]=[h.get.bind(l)])}:h.value!==void 0?h:void 0;else{const d=n[u];d&&(h.get?d.push(h.get.bind(l)):h.value!==void 0&&d.push(()=>h.value))}}}const o={},s=Object.keys(r);for(let i=s.length-1;i>=0;i--){const l=s[i],a=r[l];a&&a.get?Object.defineProperty(o,l,a):o[l]=a?a.value:void 0}return o}function Ee(e){let t,n;const r=o=>{const s=v.context;if(s){const[l,a]=j();v.count||(v.count=0),v.count++,(n||(n=e())).then(c=>{Q(s),v.count--,a(()=>c.default),Q()}),t=l}else if(!t){const[l]=ut(()=>(n||(n=e())).then(a=>a.default));t=l}let i;return L(()=>(i=t())&&_(()=>{if(!s)return i(o);const l=v.context;Q(s);const a=i(o);return Q(l),a}))};return r.preload=()=>n||((n=e()).then(o=>t=()=>o.default),n),r}const kt=e=>`Stale read from <${e}>.`;function We(e){const t=e.keyed,n=L(()=>e.when,void 0,{equals:(r,o)=>t?r===o:!r==!o});return L(()=>{const r=n();if(r){const o=e.children;return typeof o=="function"&&o.length>0?_(()=>o(t?r:()=>{if(!_(n))throw kt("Show");return e.when})):o}return e.fallback},void 0,void 0)}function At(e,t,n){let r=n.length,o=t.length,s=r,i=0,l=0,a=t[o-1].nextSibling,c=null;for(;i<o||l<s;){if(t[i]===n[l]){i++,l++;continue}for(;t[o-1]===n[s-1];)o--,s--;if(o===i){const u=s<r?l?n[l-1].nextSibling:n[s-l]:a;for(;l<s;)e.insertBefore(n[l++],u)}else if(s===l)for(;i<o;)(!c||!c.has(t[i]))&&t[i].remove(),i++;else if(t[i]===n[s-1]&&n[l]===t[o-1]){const u=t[--o].nextSibling;e.insertBefore(n[l++],t[i++].nextSibling),e.insertBefore(n[--s],u),t[o]=n[s]}else{if(!c){c=new Map;let h=l;for(;h<s;)c.set(n[h],h++)}const u=c.get(t[i]);if(u!=null)if(l<u&&u<s){let h=i,d=1,m;for(;++h<o&&h<s&&!((m=c.get(t[h]))==null||m!==u+d);)d++;if(d>u-l){const f=t[i];for(;l<u;)e.insertBefore(n[l++],f)}else e.replaceChild(n[l++],t[i++])}else i++;else t[i++].remove()}}}const _e="_$DX_DELEGATE";function St(e,t,n,r={}){let o;return Be(s=>{o=s,t===document?e():z(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{o(),t.textContent=""}}function ae(e,t,n){let r;const o=()=>{const i=document.createElement("template");return i.innerHTML=e,n?i.content.firstChild.firstChild:i.content.firstChild},s=t?()=>_(()=>document.importNode(r||(r=o()),!0)):()=>(r||(r=o())).cloneNode(!0);return s.cloneNode=s,s}function Xe(e,t=window.document){const n=t[_e]||(t[_e]=new Set);for(let r=0,o=e.length;r<o;r++){const s=e[r];n.has(s)||(n.add(s),t.addEventListener(s,Pt))}}function Oe(e,t,n){v.context&&e.isConnected||(n==null?e.removeAttribute(t):e.setAttribute(t,n))}function Et(e,t){v.context&&e.isConnected||(t==null?e.removeAttribute("class"):e.className=t)}function z(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return oe(e,t,r,n);K(o=>oe(e,t(),o,n),r)}function Pt(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),v.registry&&!v.done&&(v.done=_$HY.done=!0);n;){const r=n[t];if(r&&!n.disabled){const o=n[`${t}Data`];if(o!==void 0?r.call(n,o,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function oe(e,t,n,r,o){const s=!!v.context&&e.isConnected;if(s){!n&&(n=[...e.childNodes]);let a=[];for(let c=0;c<n.length;c++){const u=n[c];u.nodeType===8&&u.data.slice(0,2)==="!$"?u.remove():a.push(u)}n=a}for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,l=r!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(s)return n;if(i==="number"&&(t=t.toString()),l){let a=n[0];a&&a.nodeType===3?a.data!==t&&(a.data=t):a=document.createTextNode(t),n=H(e,n,r,a)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean"){if(s)return n;n=H(e,n,r)}else{if(i==="function")return K(()=>{let a=t();for(;typeof a=="function";)a=a();n=oe(e,a,n,r)}),()=>n;if(Array.isArray(t)){const a=[],c=n&&Array.isArray(n);if(be(a,t,n,o))return K(()=>n=oe(e,a,n,r,!0)),()=>n;if(s){if(!a.length)return n;if(r===void 0)return[...e.childNodes];let u=a[0],h=[u];for(;(u=u.nextSibling)!==r;)h.push(u);return n=h}if(a.length===0){if(n=H(e,n,r),l)return n}else c?n.length===0?$e(e,a,r):At(e,n,a):(n&&H(e),$e(e,a));n=a}else if(t.nodeType){if(s&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=H(e,n,r,t);H(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function be(e,t,n,r){let o=!1;for(let s=0,i=t.length;s<i;s++){let l=t[s],a=n&&n[e.length],c;if(!(l==null||l===!0||l===!1))if((c=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))o=be(e,l,a)||o;else if(c==="function")if(r){for(;typeof l=="function";)l=l();o=be(e,Array.isArray(l)?l:[l],Array.isArray(a)?a:[a])||o}else e.push(l),o=!0;else{const u=String(l);a&&a.nodeType===3&&a.data===u?e.push(a):e.push(document.createTextNode(u))}}return o}function $e(e,t,n=null){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function H(e,t,n,r){if(n===void 0)return e.textContent="";const o=r||document.createTextNode("");if(t.length){let s=!1;for(let i=t.length-1;i>=0;i--){const l=t[i];if(o!==l){const a=l.parentNode===e;!s&&!i?a?e.replaceChild(o,l):e.insertBefore(o,n):a&&l.remove()}else s=!0}}else e.insertBefore(o,n);return[o]}const Ct=!1;function Ge(){let e=new Set;function t(o){return e.add(o),()=>e.delete(o)}let n=!1;function r(o,s){if(n)return!(n=!1);const i={to:o,options:s,defaultPrevented:!1,preventDefault:()=>i.defaultPrevented=!0};for(const l of e)l.listener({...i,from:l.location,retry:a=>{a&&(n=!0),l.navigate(o,{...s,resolve:!1})}});return!i.defaultPrevented}return{subscribe:t,confirm:r}}let ve;function Pe(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),ve=window.history.state._depth}Pe();function Lt(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function Rt(e,t){let n=!1;return()=>{const r=ve;Pe();const o=r==null?null:ve-r;if(n){n=!1;return}o&&t(o)?(n=!0,window.history.go(-o)):e()}}const _t=/^(?:[a-z0-9]+:)?\/\//i,Ot=/^\/+|(\/)\/+$/g,Qe="http://sr";function Y(e,t=!1){const n=e.replace(Ot,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function Z(e,t,n){if(_t.test(t))return;const r=Y(e),o=n&&Y(n);let s="";return!o||t.startsWith("/")?s=r:o.toLowerCase().indexOf(r.toLowerCase())!==0?s=r+o:s=o,(s||"/")+Y(t,!s)}function $t(e,t){return Y(e).replace(/\/*(\*.*)?$/g,"")+Y(t)}function Ye(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function Tt(e,t,n){const[r,o]=e.split("/*",2),s=r.split("/").filter(Boolean),i=s.length;return l=>{const a=l.split("/").filter(Boolean),c=a.length-i;if(c<0||c>0&&o===void 0&&!t)return null;const u={path:i?"":"/",params:{}},h=d=>n===void 0?void 0:n[d];for(let d=0;d<i;d++){const m=s[d],f=a[d],g=m[0]===":",w=g?m.slice(1):m;if(g&&pe(f,h(w)))u.params[w]=f;else if(g||!pe(f,m))return null;u.path+=`/${f}`}if(o){const d=c?a.slice(-c).join("/"):"";if(pe(d,h(o)))u.params[o]=d;else return null}return u}}function pe(e,t){const n=r=>r.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function Nt(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((o,s)=>o+(s.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function Je(e){const t=new Map,n=Ue();return new Proxy({},{get(r,o){return t.has(o)||De(n,()=>t.set(o,L(()=>e()[o]))),t.get(o)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function Ze(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const o=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)o.push(n+=t[1]),r=r.slice(t[0].length);return Ze(r).reduce((s,i)=>[...s,...o.map(l=>l+i)],[])}const jt=100,Mt=Fe(),et=Fe();function Bt(e,t=""){const{component:n,load:r,children:o,info:s}=e,i=!o||Array.isArray(o)&&!o.length,l={key:e,component:n,load:r,info:s};return tt(e.path).reduce((a,c)=>{for(const u of Ze(c)){const h=$t(t,u);let d=i?h:h.split("/*",1)[0];d=d.split("/").map(m=>m.startsWith(":")||m.startsWith("*")?m:encodeURIComponent(m)).join("/"),a.push({...l,originalPath:c,pattern:d,matcher:Tt(d,!i,e.matchFilters)})}return a},[])}function It(e,t=0){return{routes:e,score:Nt(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let o=e.length-1;o>=0;o--){const s=e[o],i=s.matcher(n);if(!i)return null;r.unshift({...i,route:s})}return r}}}function tt(e){return Array.isArray(e)?e:[e]}function nt(e,t="",n=[],r=[]){const o=tt(e);for(let s=0,i=o.length;s<i;s++){const l=o[s];if(l&&typeof l=="object"){l.hasOwnProperty("path")||(l.path="");const a=Bt(l,t);for(const c of a){n.push(c);const u=Array.isArray(l.children)&&l.children.length===0;if(l.children&&!u)nt(l.children,c.pattern,n,r);else{const h=It([...n],r.length);r.push(h)}n.pop()}}}return n.length?r:r.sort((s,i)=>i.score-s.score)}function Te(e,t){for(let n=0,r=e.length;n<r;n++){const o=e[n].matcher(t);if(o)return o}return[]}function Ut(e,t){const n=new URL(Qe),r=L(a=>{const c=e();try{return new URL(c,n)}catch{return console.error(`Invalid path ${c}`),a}},n,{equals:(a,c)=>a.href===c.href}),o=L(()=>r().pathname),s=L(()=>r().search,!0),i=L(()=>r().hash),l=()=>"";return{get pathname(){return o()},get search(){return s()},get hash(){return i()},get state(){return t()},get key(){return l()},query:Je(Ie(s,()=>Ye(r())))}}let D;function Dt(e,t,n,r={}){const{signal:[o,s],utils:i={}}=e,l=i.parsePath||(p=>p),a=i.renderPath||(p=>p),c=i.beforeLeave||Ge(),u=Z("",r.base||"");if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!o().value&&s({value:u,replace:!0,scroll:!1});const[h,d]=j(!1),m=async p=>{d(!0);try{await dt(p)}finally{d(!1)}},[f,g]=j(o().value),[w,x]=j(o().state),F=Ut(f,w),O=[],T=j([]),$=L(()=>Te(t(),F.pathname)),ce=Je(()=>{const p=$(),E={};for(let N=0;N<p.length;N++)Object.assign(E,p[N].params);return E}),V={pattern:u,path:()=>u,outlet:()=>null,resolvePath(p){return Z(u,p)}};return K(()=>{const{value:p,state:E}=o();_(()=>{p!==f()&&m(()=>{D="native",g(p),x(E),T[1]([])}).then(()=>{D=void 0})})}),{base:V,location:F,params:ce,isRouting:h,renderPath:a,parsePath:l,navigatorFactory:k,matches:$,beforeLeave:c,preloadRoute:P,singleFlight:r.singleFlight===void 0?!0:r.singleFlight,submissions:T};function X(p,E,N){_(()=>{if(typeof E=="number"){E&&(i.go?i.go(E):console.warn("Router integration does not support relative routing"));return}const{replace:ue,resolve:fe,scroll:q,state:G}={replace:!1,resolve:!0,scroll:!0,...N},U=fe?p.resolvePath(E):Z("",E);if(U===void 0)throw new Error(`Path '${E}' is not a routable path`);if(O.length>=jt)throw new Error("Too many redirects");const Ce=f();if((U!==Ce||G!==w())&&!Ct){if(c.confirm(U,N)){const rt=O.push({value:Ce,replace:ue,scroll:q,state:w()});m(()=>{D="navigate",g(U),x(G),T[1]([])}).then(()=>{O.length===rt&&(D=void 0,S({value:U,state:G}))})}}})}function k(p){return p=p||ht(et)||V,(E,N)=>X(p,E,N)}function S(p){const E=O[0];E&&((p.value!==E.value||p.state!==E.state)&&s({...p,replace:E.replace,scroll:E.scroll}),O.length=0)}function P(p,E){const N=Te(t(),p.pathname),ue=D;D="preload";for(let fe in N){const{route:q,params:G}=N[fe];q.component&&q.component.preload&&q.component.preload();const{load:U}=q;E&&U&&De(n(),()=>U({params:G,location:{pathname:p.pathname,search:p.search,hash:p.hash,query:Ye(p),state:null,key:""},intent:"preload"}))}D=ue}}function Ft(e,t,n,r){const{base:o,location:s,params:i}=e,{pattern:l,component:a,load:c}=r().route,u=L(()=>r().path);a&&a.preload&&a.preload();const h=c?c({params:i,location:s,intent:D||"initial"}):void 0;return{parent:t,pattern:l,path:u,outlet:()=>a?C(a,{params:i,location:s,data:h,get children(){return n()}}):n(),resolvePath(m){return Z(o.path(),m,u())}}}const zt=e=>t=>{const{base:n}=t,r=Ae(()=>t.children),o=L(()=>nt(r(),t.base||""));let s;const i=Dt(e,o,()=>s,{base:n,singleFlight:t.singleFlight});return e.create&&e.create(i),C(Mt.Provider,{value:i,get children(){return C(Vt,{routerState:i,get root(){return t.root},get load(){return t.rootLoad},get children(){return[L(()=>(s=Ue())&&null),C(qt,{routerState:i,get branches(){return o()}})]}})}})};function Vt(e){const t=e.routerState.location,n=e.routerState.params,r=L(()=>e.load&&_(()=>e.load({params:n,location:t,intent:"preload"})));return C(We,{get when(){return e.root},keyed:!0,get fallback(){return e.children},children:o=>C(o,{params:n,location:t,get data(){return r()},get children(){return e.children}})})}function qt(e){const t=[];let n;const r=L(Ie(e.routerState.matches,(o,s,i)=>{let l=s&&o.length===s.length;const a=[];for(let c=0,u=o.length;c<u;c++){const h=s&&s[c],d=o[c];i&&h&&d.route.key===h.route.key?a[c]=i[c]:(l=!1,t[c]&&t[c](),Be(m=>{t[c]=m,a[c]=Ft(e.routerState,a[c-1]||e.routerState.base,Ne(()=>r()[c+1]),()=>e.routerState.matches()[c])}))}return t.splice(o.length).forEach(c=>c()),i&&l?i:(n=a[0],a)}));return Ne(()=>r()&&n)()}const Ne=e=>()=>C(We,{get when(){return e()},keyed:!0,children:t=>C(et.Provider,{value:t,get children(){return t.outlet()}})}),me=e=>{const t=Ae(()=>e.children);return xt(e,{get children(){return t()}})};function Ht([e,t],n,r){return[n?()=>n(e()):e,r?o=>t(r(o)):t]}function Kt(e){if(e==="#")return null;try{return document.querySelector(e)}catch{return null}}function Wt(e){let t=!1;const n=o=>typeof o=="string"?{value:o}:o,r=Ht(j(n(e.get()),{equals:(o,s)=>o.value===s.value}),void 0,o=>(!t&&e.set(o),o));return e.init&&ke(e.init((o=e.get())=>{t=!0,r[1](n(o)),t=!1})),zt({signal:r,create:e.create,utils:e.utils})}function Xt(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Gt(e,t){const n=Kt(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}const Qt=new Map;function Yt(e=!0,t=!1,n="/_server"){return r=>{const o=r.base.path(),s=r.navigatorFactory(r.base);let i={};function l(f){return f.namespaceURI==="http://www.w3.org/2000/svg"}function a(f){if(f.defaultPrevented||f.button!==0||f.metaKey||f.altKey||f.ctrlKey||f.shiftKey)return;const g=f.composedPath().find($=>$ instanceof Node&&$.nodeName.toUpperCase()==="A");if(!g||t&&!g.hasAttribute("link"))return;const w=l(g),x=w?g.href.baseVal:g.href;if((w?g.target.baseVal:g.target)||!x&&!g.hasAttribute("state"))return;const O=(g.getAttribute("rel")||"").split(/\s+/);if(g.hasAttribute("download")||O&&O.includes("external"))return;const T=w?new URL(x,document.baseURI):new URL(x);if(!(T.origin!==window.location.origin||o&&T.pathname&&!T.pathname.toLowerCase().startsWith(o.toLowerCase())))return[g,T]}function c(f){const g=a(f);if(!g)return;const[w,x]=g,F=r.parsePath(x.pathname+x.search+x.hash),O=w.getAttribute("state");f.preventDefault(),s(F,{resolve:!1,replace:w.hasAttribute("replace"),scroll:!w.hasAttribute("noscroll"),state:O&&JSON.parse(O)})}function u(f){const g=a(f);if(!g)return;const[w,x]=g;i[x.pathname]||r.preloadRoute(x,w.getAttribute("preload")!=="false")}function h(f){const g=a(f);if(!g)return;const[w,x]=g;i[x.pathname]||(i[x.pathname]=setTimeout(()=>{r.preloadRoute(x,w.getAttribute("preload")!=="false"),delete i[x.pathname]},200))}function d(f){const g=a(f);if(!g)return;const[,w]=g;i[w.pathname]&&(clearTimeout(i[w.pathname]),delete i[w.pathname])}function m(f){if(f.defaultPrevented)return;let g=f.submitter&&f.submitter.hasAttribute("formaction")?f.submitter.getAttribute("formaction"):f.target.getAttribute("action");if(!g)return;if(!g.startsWith("https://action/")){const x=new URL(g,Qe);if(g=r.parsePath(x.pathname+x.search),!g.startsWith(n))return}if(f.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const w=Qt.get(g);if(w){f.preventDefault();const x=new FormData(f.target);f.submitter&&f.submitter.name&&x.append(f.submitter.name,f.submitter.value),w.call({r,f:f.target},x)}}Xe(["click","submit"]),document.addEventListener("click",c),e&&(document.addEventListener("mouseover",h),document.addEventListener("mouseout",d),document.addEventListener("focusin",u),document.addEventListener("touchstart",u)),document.addEventListener("submit",m),ke(()=>{document.removeEventListener("click",c),e&&(document.removeEventListener("mouseover",h),document.removeEventListener("mouseout",d),document.removeEventListener("focusin",u),document.removeEventListener("touchstart",u)),document.removeEventListener("submit",m)})}}function Jt(e){const t=()=>({value:window.location.pathname+window.location.search+window.location.hash,state:window.history.state}),n=Ge();return Wt({get:t,set({value:r,replace:o,scroll:s,state:i}){o?window.history.replaceState(Lt(i),"",r):window.history.pushState(i,"",r),Gt(window.location.hash.slice(1),s),Pe()},init:r=>Xt(window,"popstate",Rt(r,o=>{if(o&&o<0)return!n.confirm(o);{const s=t();return!n.confirm(s.value,{state:s.state})}})),create:Yt(e.preload,e.explicitLinks,e.actionBase),utils:{go:r=>window.history.go(r),beforeLeave:n}})(e)}const Zt="/assets/logo-BHl3PMIN.webp";var en=ae('<img class=" h-8 select-none "alt="Vegachat Logo">'),tn=ae('<span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Vegachat'),nn=ae('<div class="fixed w-full z-20"><nav class="bg-white border-gray-200 dark:bg-gray-900 fixed w-full "><div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 "><button type=button class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"aria-controls=navbar-default><span class=sr-only>Open main menu</span><svg class="w-5 h-5"aria-hidden=true xmlns=http://www.w3.org/2000/svg fill=none viewBox="0 0 17 14"><path stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M1 1h15M1 7h15M1 13h15"></path></svg></button><div id=navbar-default><ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"><li></li><li></li><li></li><li></li><li></li></ul></div></div></nav><div class=h-96>');const rn=()=>{const[e,t]=j(!1);ke(()=>{t(!1)}),ft(()=>{t(!1)});const n=()=>{t(!e())};return(()=>{var r=nn(),o=r.firstChild,s=o.firstChild,i=s.firstChild,l=i.nextSibling,a=l.firstChild,c=a.firstChild,u=c.nextSibling,h=u.nextSibling,d=h.nextSibling,m=d.nextSibling;return z(s,C(A,{href:"/",class:"flex items-center space-x-3 rtl:space-x-reverse",get children(){return[(()=>{var f=en();return Oe(f,"src",Zt),f})(),tn()]}}),i),i.$$click=n,z(c,C(A,{href:"/",class:"block py-2 px-3 text-white bg-pink-700 rounded md:bg-transparent md:text-pink-700 md:p-0 dark:text-white md:dark:text-pink-500","aria-current":"page",children:"Home"})),z(u,C(A,{href:"/about",class:"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",children:"About"})),z(h,C(A,{href:"/services",class:"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",children:"Services"})),z(d,C(A,{href:"/pricing",class:"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",children:"Pricing"})),z(m,C(A,{href:"/pricing",class:"block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0 dark:text-white md:dark:hover:text-pink-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent",children:"Contact"})),K(f=>{var g=e()?"true":"false",w=`${e()?"block":"hidden"} w-full md:block md:w-auto`;return g!==f.e&&Oe(i,"aria-expanded",f.e=g),w!==f.t&&Et(l,f.t=w),f},{e:void 0,t:void 0}),r})()};Xe(["click"]);var on=ae('<footer class="bg-gray-900 text-white py-8"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><div><h2 class="text-xl font-semibold mb-4">Stay Connected</h2><p>Follow us on social media to stay updated on the latest news, events, and community highlights.</p><div class="flex space-x-4 mt-4"><a href=# class="text-gray-300 hover:text-white"><svg xmlns=http://www.w3.org/2000/svg x=0px y=0px width=20 height=20 viewBox=0,0,256,256 style=fill:#000000;><g fill=#ffffff fill-rule=nonzero stroke=none stroke-width=1 stroke-linecap=butt stroke-linejoin=miter stroke-miterlimit=10 stroke-dasharray=""stroke-dashoffset=0 font-family=none font-weight=none font-size=none text-anchor=none style=mix-blend-mode:normal><g transform=scale(5.12,5.12)><path d="M16,3c-7.17,0 -13,5.83 -13,13v18c0,7.17 5.83,13 13,13h18c7.17,0 13,-5.83 13,-13v-18c0,-7.17 -5.83,-13 -13,-13zM37,11c1.1,0 2,0.9 2,2c0,1.1 -0.9,2 -2,2c-1.1,0 -2,-0.9 -2,-2c0,-1.1 0.9,-2 2,-2zM25,14c6.07,0 11,4.93 11,11c0,6.07 -4.93,11 -11,11c-6.07,0 -11,-4.93 -11,-11c0,-6.07 4.93,-11 11,-11zM25,16c-4.96,0 -9,4.04 -9,9c0,4.96 4.04,9 9,9c4.96,0 9,-4.04 9,-9c0,-4.96 -4.04,-9 -9,-9z"></path></g></g></svg></a><a href=# class="text-gray-300 hover:text-white"><svg xmlns=http://www.w3.org/2000/svg x=0px y=0px width=20 height=20 viewBox=0,0,256,256 style=fill:#000000;><g fill=#ffffff fill-rule=nonzero stroke=none stroke-width=1 stroke-linecap=butt stroke-linejoin=miter stroke-miterlimit=10 stroke-dasharray=""stroke-dashoffset=0 font-family=none font-weight=none font-size=none text-anchor=none style=mix-blend-mode:normal><g transform=scale(5.12,5.12)><path d="M11,4c-3.866,0 -7,3.134 -7,7v28c0,3.866 3.134,7 7,7h28c3.866,0 7,-3.134 7,-7v-28c0,-3.866 -3.134,-7 -7,-7zM13.08594,13h7.9375l5.63672,8.00977l6.83984,-8.00977h2.5l-8.21094,9.61328l10.125,14.38672h-7.93555l-6.54102,-9.29297l-7.9375,9.29297h-2.5l9.30859,-10.89648zM16.91406,15l14.10742,20h3.06445l-14.10742,-20z"></path></g></g></svg></a><a href=# class="text-gray-300 hover:text-white"><svg xmlns=http://www.w3.org/2000/svg x=0px y=0px width=20 height=20 viewBox=0,0,255.99609,255.99609 style=fill:#000000;><g fill=#ffffff fill-rule=nonzero stroke=none stroke-width=1 stroke-linecap=butt stroke-linejoin=miter stroke-miterlimit=10 stroke-dasharray=""stroke-dashoffset=0 font-family=none font-weight=none font-size=none text-anchor=none style=mix-blend-mode:normal><g transform=scale(10.66667,10.66667)><path d="M19.98,5.69c-1.68,-1.34 -4.08,-1.71 -5.12,-1.82h-0.04c-0.16,0 -0.31,0.09 -0.36,0.24c-0.09,0.23 0.05,0.48 0.28,0.52c1.17,0.24 2.52,0.66 3.75,1.43c0.25,0.15 0.31,0.49 0.11,0.72c-0.16,0.18 -0.43,0.2 -0.64,0.08c-2.4,-1.48 -5.38,-1.56 -5.96,-1.56c-0.58,0 -3.56,0.08 -5.96,1.56c-0.21,0.12 -0.48,0.1 -0.64,-0.08c-0.2,-0.23 -0.14,-0.57 0.11,-0.72c1.23,-0.77 2.58,-1.19 3.75,-1.43c0.23,-0.04 0.37,-0.29 0.28,-0.52c-0.05,-0.15 -0.2,-0.24 -0.36,-0.24h-0.04c-1.04,0.11 -3.44,0.48 -5.12,1.82c-0.98,0.91 -2.93,6.14 -3.02,10.77c0,0.31 0.08,0.62 0.26,0.87c1.17,1.65 3.71,2.64 5.63,2.78c0.29,0.02 0.57,-0.11 0.74,-0.35c0.01,0 0.01,-0.01 0.02,-0.02c0.35,-0.48 0.14,-1.16 -0.42,-1.37c-1.6,-0.59 -2.42,-1.29 -2.47,-1.34c-0.2,-0.18 -0.22,-0.48 -0.05,-0.68c0.18,-0.2 0.48,-0.22 0.68,-0.04c0.03,0.02 2.25,1.91 6.61,1.91c4.36,0 6.58,-1.89 6.61,-1.91c0.2,-0.18 0.5,-0.16 0.68,0.04c0.17,0.2 0.15,0.5 -0.05,0.68c-0.05,0.05 -0.87,0.75 -2.47,1.34c-0.56,0.21 -0.77,0.89 -0.42,1.37c0.01,0.01 0.01,0.02 0.02,0.02c0.17,0.24 0.45,0.37 0.74,0.35c1.92,-0.14 4.46,-1.13 5.63,-2.78c0.18,-0.25 0.26,-0.56 0.26,-0.87c-0.09,-4.63 -2.04,-9.86 -3.02,-10.77zM8.89,14.87c-0.92,0 -1.67,-0.86 -1.67,-1.91c0,-1.06 0.75,-1.92 1.67,-1.92c0.93,0 1.67,0.86 1.67,1.92c0,1.05 -0.74,1.91 -1.67,1.91zM15.11,14.87c-0.93,0 -1.67,-0.86 -1.67,-1.91c0,-1.06 0.74,-1.92 1.67,-1.92c0.92,0 1.67,0.86 1.67,1.92c0,1.05 -0.75,1.91 -1.67,1.91z"></path></g></g></svg></a></div></div><div><h2 class="text-xl font-semibold mb-4">Quick Links</h2><ul class=space-y-2><li><a href=/about class="text-gray-300 hover:text-white">About Us</a></li><li><a href=/contact class="text-gray-300 hover:text-white">Contact Us</a></li><li><a href=# class="text-gray-300 hover:text-white">Terms of Service</a></li><li><a href=# class="text-gray-300 hover:text-white">Privacy Policy</a></li></ul></div><div><h2 class="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h2><p>Stay updated on the latest news, events, and special offers by subscribing to our newsletter.</p><form class="mt-4 flex"><input type=email class="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring focus:ring-gray-500"placeholder="Enter your email address"><button type=submit class="bg-gray-800 text-white px-6 py-2 rounded-r-md hover:bg-gray-700 transition duration-300">Subscribe</button></form></div></div><hr class="mt-8 border-t border-gray-700"><p class="text-center text-gray-300 mt-4">&copy; 2024 Vegachat. All rights reserved.');const sn=()=>on(),ln=Ee(()=>xe(()=>import("./services-yN4LQahm.js"),[])),an=Ee(()=>xe(()=>import("./home-7OIlg_Mt.js"),[])),cn=Ee(()=>xe(()=>import("./pricing-BoCO2H-y.js"),[])),un=e=>[C(rn,{}),L(()=>e.children),C(sn,{})];St(()=>C(Jt,{root:un,get children(){return[C(me,{path:"/services",component:ln}),C(me,{path:"/pricing",component:cn}),C(me,{path:"/",component:an})]}}),document.getElementById("root"));export{sn as F,at as a,K as b,j as c,L as d,Xe as e,C as f,z as i,Oe as s,ae as t};