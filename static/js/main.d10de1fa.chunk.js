(this["webpackJsonplearn-mouse"]=this["webpackJsonplearn-mouse"]||[]).push([[0],{10:function(t,e,n){},11:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(1),i=n.n(a),s=n(4),o=n.n(s),r=(n(10),n(2)),j=(n(11),n.p+"static/media/dragon.6db7f34f.gif"),b=n.p+"static/media/dragonEgg.148d89e9.png",d=n.p+"static/media/baby-dragon.7e0810c7.jpg",u=function(t){var e=t.xy,n=t.movement[0]>0?-1:1,a={top:"".concat(e[1]-140,"px"),left:"".concat(e[0]-100,"px"),transform:"rotate(".concat(0,"deg) scaleX(").concat(n,")")};return Object(c.jsx)("div",{className:"Element",style:a,children:Object(c.jsx)("img",{src:j,alt:j})})},m=function(t){var e=t.position,n={top:"".concat(e[1]-50,"px"),left:"".concat(e[0]-50,"px")};return Object(c.jsx)("div",{className:"Element",style:n,children:Object(c.jsx)("img",{src:b,alt:b,width:100,heigth:100})})},l=function(){var t=Object(a.useState)(0),e=Object(r.a)(t,2),n=e[0],i=e[1],s=Object(a.useState)(0),o=Object(r.a)(s,2),j=o[0],b=o[1],l=Object(a.useState)([0,0]),p=Object(r.a)(l,2),O=p[0],f=p[1],g=Object(a.useState)([0,0]),h=Object(r.a)(g,2),x=h[0],v=h[1];Object(a.useEffect)((function(){var t=window,e=t.innerWidth,n=t.innerHeight;i(e),b(n)}),[]);var M=Object(a.useMemo)((function(){return[Math.random()*n*.9,Math.random()*j*.9]}),[j,n]);return Math.abs(O[0]-M[0]<20)&&Math.abs(O[1]-M[1])<20?Object(c.jsx)("div",{className:"App",children:Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:d,alt:d})})}):Object(c.jsxs)("div",{className:"App",onMouseMove:function(t){v([t.movementX,t.movementY]),f([t.clientX,t.clientY])},children:[Object(c.jsx)(u,{xy:O,movement:x}),Object(c.jsx)(m,{position:M})]})},p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),c(t),a(t),i(t),s(t)}))};o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(l,{})}),document.getElementById("root")),p()}},[[12,1,2]]]);
//# sourceMappingURL=main.d10de1fa.chunk.js.map