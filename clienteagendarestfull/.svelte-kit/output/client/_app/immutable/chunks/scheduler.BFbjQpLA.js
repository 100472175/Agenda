function N(){}function P(t,n){for(const e in n)t[e]=n[e];return t}function D(t){return t()}function Z(){return Object.create(null)}function T(t){t.forEach(D)}function B(t){return typeof t=="function"}function $(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function tt(t){return Object.keys(t).length===0}function L(t,...n){if(t==null){for(const i of n)i(void 0);return N}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function nt(t,n,e){t.$$.on_destroy.push(L(n,e))}function et(t,n,e,i){if(t){const c=j(t,n,e,i);return t[0](c)}}function j(t,n,e,i){return t[1]&&i?P(e.ctx.slice(),t[1](i(n))):e.ctx}function it(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const o=[],r=Math.max(n.dirty.length,c.length);for(let s=0;s<r;s+=1)o[s]=n.dirty[s]|c[s];return o}return n.dirty|c}return n.dirty}function ct(t,n,e,i,c,o){if(c){const r=j(n,e,i,o);t.p(r,c)}}function rt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function lt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function st(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}function ot(t){const n={};for(const e in t)n[e]=!0;return n}function ut(t){return t&&B(t.destroy)?t.destroy:N}let p=!1;function at(){p=!0}function ft(){p=!1}function M(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<n.length;u++){const a=n[u];a.claim_order!==void 0&&l.push(a)}n=l}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let l=0;l<n.length;l++){const u=n[l].claim_order,a=(c>0&&n[e[c]].claim_order<=u?c+1:M(1,c,S=>n[e[S]].claim_order,u))-1;i[l]=e[a]+1;const k=a+1;e[k]=l,c=Math.max(k,c)}const o=[],r=[];let s=n.length-1;for(let l=e[c]+1;l!=0;l=i[l-1]){for(o.push(n[l-1]);s>=l;s--)r.push(n[s]);s--}for(;s>=0;s--)r.push(n[s]);o.reverse(),r.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<r.length;l++){for(;u<o.length&&r[l].claim_order>=o[u].claim_order;)u++;const a=u<o.length?o[u]:null;t.insertBefore(r[l],a)}}function H(t,n){if(p){for(q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function _t(t,n,e){p&&!e?H(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function dt(t){t.parentNode&&t.parentNode.removeChild(t)}function ht(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function I(t){return document.createElement(t)}function z(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function w(t){return document.createTextNode(t)}function mt(){return w(" ")}function pt(){return w("")}function yt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function bt(t){return function(n){return n.preventDefault(),t.call(this,n)}}function gt(t){return function(n){return n.stopPropagation(),t.call(this,n)}}function v(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}const F=["width","height"];function U(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in n)n[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=n[i]:i==="__value"?t.value=t[i]=n[i]:e[i]&&e[i].set&&F.indexOf(i)===-1?t[i]=n[i]:v(t,i,n[i])}function xt(t,n){for(const e in n)v(t,e,n[e])}function W(t,n){Object.keys(n).forEach(e=>{G(t,e,n[e])})}function G(t,n,e){const i=n.toLowerCase();i in t?t[i]=typeof t[i]=="boolean"&&e===""?!0:e:n in t?t[n]=typeof t[n]=="boolean"&&e===""?!0:e:v(t,n,e)}function wt(t){return/-/.test(t)?W:U}function vt(t){return t.dataset.svelteH}function kt(t){return Array.from(t.childNodes)}function J(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function A(t,n,e,i,c=!1){J(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const s=t[r];if(n(s)){const l=e(s);return l===void 0?t.splice(r,1):t[r]=l,c||(t.claim_info.last_index=r),s}}for(let r=t.claim_info.last_index-1;r>=0;r--){const s=t[r];if(n(s)){const l=e(s);return l===void 0?t.splice(r,1):t[r]=l,c?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,s}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function C(t,n,e,i){return A(t,c=>c.nodeName===n,c=>{const o=[];for(let r=0;r<c.attributes.length;r++){const s=c.attributes[r];e[s.name]||o.push(s.name)}o.forEach(r=>c.removeAttribute(r))},()=>i(n))}function Et(t,n,e){return C(t,n,e,I)}function Nt(t,n,e){return C(t,n,e,z)}function K(t,n){return A(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>w(n),!0)}function jt(t){return K(t," ")}function At(t,n){n=""+n,t.data!==n&&(t.data=n)}function Ct(t,n){t.value=n??""}function Ot(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Q(t,n,{bubbles:e=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:i})}function St(t,n){return new t(n)}let m;function y(t){m=t}function h(){if(!m)throw new Error("Function called outside component initialization");return m}function Pt(t){h().$$.on_mount.push(t)}function Dt(t){h().$$.after_update.push(t)}function Tt(){const t=h();return(n,e,{cancelable:i=!1}={})=>{const c=t.$$.callbacks[n];if(c){const o=Q(n,e,{cancelable:i});return c.slice().forEach(r=>{r.call(t,o)}),!o.defaultPrevented}return!0}}function Bt(t,n){return h().$$.context.set(t,n),n}function Lt(t){return h().$$.context.get(t)}function Mt(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const d=[],E=[];let _=[];const g=[],O=Promise.resolve();let x=!1;function R(){x||(x=!0,O.then(X))}function qt(){return R(),O}function V(t){_.push(t)}function Ht(t){g.push(t)}const b=new Set;let f=0;function X(){if(f!==0)return;const t=m;do{try{for(;f<d.length;){const n=d[f];f++,y(n),Y(n.$$)}}catch(n){throw d.length=0,f=0,n}for(y(null),d.length=0,f=0;E.length;)E.pop()();for(let n=0;n<_.length;n+=1){const e=_[n];b.has(e)||(b.add(e),e())}_.length=0}while(d.length);for(;g.length;)g.pop()();x=!1,b.clear(),y(t)}function Y(t){if(t.fragment!==null){t.update(),T(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(V)}}function It(t){const n=[],e=[];_.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),_=n}export{Nt as $,Ot as A,E as B,St as C,qt as D,Z as E,X as F,B as G,tt as H,V as I,It as J,m as K,y as L,D as M,d as N,R as O,at as P,ft as Q,st as R,Bt as S,P as T,lt as U,wt as V,ut as W,Mt as X,Lt as Y,U as Z,z as _,mt as a,ot as a0,Ct as a1,Tt as a2,bt as a3,gt as a4,xt as a5,Ht as a6,pt as b,Et as c,kt as d,I as e,K as f,dt as g,jt as h,vt as i,_t as j,H as k,yt as l,At as m,N as n,ht as o,et as p,rt as q,T as r,$ as s,w as t,ct as u,it as v,v as w,nt as x,Dt as y,Pt as z};