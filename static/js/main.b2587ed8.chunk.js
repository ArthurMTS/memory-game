(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{26:function(e,t,r){},28:function(e,t,r){},30:function(e,t,r){},49:function(e,t,r){},50:function(e,t,r){},51:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),a=r(20),s=r.n(a),i=r.p+"static/media/github.3bc258f2.svg",o=(r(26),r(0));function j(){return Object(o.jsxs)("footer",{id:"main-footer",children:[Object(o.jsx)("p",{children:"Made with \u2764\ufe0f by ArthurMTS"}),Object(o.jsx)("a",{href:"https://github.com/ArthurMTS/memory-game",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("img",{src:i,alt:"github icon"})})]})}var u=r(3),d=Object(n.createContext)({});function f(e){var t=e.children,r=Object(n.useState)(0),c=Object(u.a)(r,2),a=c[0],s=c[1],i=Object(n.useState)(0),j=Object(u.a)(i,2),f=j[0],l=j[1];return Object(n.useEffect)((function(){if(!f&&localStorage.getItem("best")){var e=JSON.parse(localStorage.getItem("best")||"0");l(e)}f>0&&localStorage.setItem("best",JSON.stringify(f))}),[f]),Object(n.useEffect)((function(){a>0&&a>f&&l(a)}),[a,f]),Object(o.jsx)(d.Provider,{value:{current:a,setCurrent:s,best:f,setBest:l},children:t})}var l="data:image/png;base64,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";r(28);function A(){var e=Object(n.useContext)(d),t=e.current,r=e.best;return Object(o.jsxs)("header",{id:"main-header",children:[Object(o.jsxs)("div",{id:"title",children:[Object(o.jsx)("img",{src:l,alt:"pokeball icon"}),Object(o.jsxs)("h1",{children:[Object(o.jsx)("span",{children:"Pok\xe9"}),"Mem"]})]}),Object(o.jsxs)("div",{id:"scoreboard",children:[Object(o.jsxs)("p",{id:"current",children:["Current: ",t]}),Object(o.jsxs)("p",{id:"best",children:["Best: ",r]})]})]})}var b=r(11),O=r(5),h=r.n(O),p=r(10);r(30);function m(e){var t=e.index,r=e.name,n=e.sprite,c=e.handler;return Object(o.jsxs)("div",{className:"card",onClick:function(){return c(t)},children:[Object(o.jsx)("img",{className:"sprite",src:n,alt:r}),Object(o.jsx)("strong",{className:"pokemon-name",children:r})]})}var v=r(21),x=r.n(v).a.create({baseURL:"https://pokeapi.co/api/v2/pokemon-form"});function g(e,t){for(var r=[];r.length<t;){var n=Math.floor(Math.random()*e);-1===r.indexOf(n)&&r.push(n)}return r}r(49);function y(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)(12),s=Object(u.a)(a,2),i=s[0],j=s[1],f=Object(n.useContext)(d),A=f.current,O=f.setCurrent;function v(){var e=function(e){for(var t,r=e.length;0!==r;){t=Math.floor(Math.random()*r),r--;var n=[e[t],e[r]];e[r]=n[0],e[t]=n[1]}return e}(Object(b.a)(r));c(e)}function y(e){r[e].clicked?window.location.reload():(O(A+1),Object(b.a)(r)[e].clicked=!0,v(),r.every((function(e){return e.clicked}))&&(c([]),j(i+2)))}return Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(h.a.mark((function e(){var t,r,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=g(898,i),r=t.map(function(){var e=Object(p.a)(h.a.mark((function e(t){var r,n,c,a,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("".concat(t));case 2:return r=e.sent,n=r.data,c=n.name,a=n.sprites.front_default,s={name:c,sprite:a,clicked:!1},e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=4,Promise.all(r);case 4:n=e.sent,c(n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[i]),Object(o.jsxs)("div",{id:"cardboard",children:[Object(o.jsx)("h2",{children:"Choose your pok\xe9mons"}),Object(o.jsx)("div",{id:"cards",children:r.length>0?r.map((function(e,t){var r=e.name,n=e.sprite;return Object(o.jsx)(m,{index:t,name:r,sprite:n,handler:y},t)})):Object(o.jsxs)("div",{id:"loading",children:[Object(o.jsx)("img",{src:l,alt:"pokeball icon"}),"Loading..."]})})]})}r(50);function k(){return Object(o.jsxs)(f,{children:[Object(o.jsx)(A,{}),Object(o.jsx)(y,{}),Object(o.jsx)(j,{})]})}s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(k,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.b2587ed8.chunk.js.map