import{s as $,e as g,t as m,a as q,c as _,d as y,f as d,g as u,h as E,i as S,w as x,j as b,k as h,m as v,n as C,x as j}from"../chunks/scheduler.BFbjQpLA.js";import{S as k,i as z}from"../chunks/index.DZfq2G-4.js";import{s as H}from"../chunks/entry.CtyJBdYi.js";const U=()=>{const s=H;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},w={subscribe(s){return U().page.subscribe(s)}};function L(s){let e,n=s[0].status+"",o,i,l=s[0].error.message.toUpperCase()+"",c,p,r,f=`La página no está disponible, seguramente porque no hayas lanzado el backend,
  por favor, comprueba que está lanzado en el puerto 13300.`;return{c(){e=g("h1"),o=m(n),i=m(" -> "),c=m(l),p=q(),r=g("h3"),r.textContent=f,this.h()},l(t){e=_(t,"H1",{class:!0});var a=y(e);o=d(a,n),i=d(a," -> "),c=d(a,l),a.forEach(u),p=E(t),r=_(t,"H3",{class:!0,"data-svelte-h":!0}),S(r)!=="svelte-1h7ud6e"&&(r.textContent=f),this.h()},h(){x(e,"class","underline text-center text-3xl bg-red-500 font-semibold"),x(r,"class","text-justify text-xl")},m(t,a){b(t,e,a),h(e,o),h(e,i),h(e,c),b(t,p,a),b(t,r,a)},p(t,[a]){a&1&&n!==(n=t[0].status+"")&&v(o,n),a&1&&l!==(l=t[0].error.message.toUpperCase()+"")&&v(c,l)},i:C,o:C,d(t){t&&(u(e),u(p),u(r))}}}function A(s,e,n){let o;return j(s,w,i=>n(0,o=i)),[o]}let G=class extends k{constructor(e){super(),z(this,e,A,L,$,{})}};export{G as component};