(this["webpackJsonpdata-breach"]=this["webpackJsonpdata-breach"]||[]).push([[0],{36:function(e,t,a){e.exports=a(66)},41:function(e,t,a){},42:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(32),s=a.n(r),i=(a(41),a(42),a(4)),l=a.n(i),o=a(7),u=a(14),m=a(33),f=a.n(m).a.create({withCredentials:!0,headers:{"X-Best-Pokemon":"Pikachu","Access-Control-Allow-Origin":"*"}}),h={getBreaches:function(){return d.apply(this,arguments)}};function d(){return(d=Object(o.a)(l.a.mark((function e(){var t,a,n,c,r=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:0,e.next=3,f.get("https://guard.io/v2/hiring/fe/breaches?offset=".concat(t));case 3:return a=e.sent,n=a.data,c=n.items,e.abrupt("return",Object(u.a)(c));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p=a(8),b=a(9);function E(e){var t=e.breach;return c.a.createElement(b.b,{className:"card flex column align-center ",to:"/breach/".concat(t.PwnCount)},c.a.createElement("div",null,"  ",c.a.createElement("img",{className:"card-image",src:t.LogoPath,alt:""})),c.a.createElement("div",{className:"card-info"},c.a.createElement("div",{className:"flex justify-center"},c.a.createElement("p",{className:"domain",id:"title"},t.Domain||t.Name,"  ")),c.a.createElement("div",{className:"flex justify-center"},c.a.createElement("p",{className:"date"},t.BreachDate," "))))}var v=a(11),g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"SET_BREACHES":return Object(v.a)(Object(v.a)({},e),{},{breaches:[].concat(Object(u.a)(e.breaches),Object(u.a)(t.breachesItems))});case"INC_OFFSET":return Object(v.a)(Object(v.a)({},e),{},{offset:e.offset+11});case"SET_LOAD":return Object(v.a)(Object(v.a)({},e),{},{isLoad:!e.isLoad});default:return e}},w=Object(n.createContext)(),O=function(e){var t=Object(n.useReducer)(g,{breaches:[],offset:0,isLoad:!0}),a=Object(p.a)(t,2),r=a[0],s=r.breaches,i=r.offset,l=r.isLoad,o=a[1];return c.a.createElement(w.Provider,{value:{breaches:s,offset:i,isLoad:l,dispatch:o}},e.children)};function x(e){var t=Object(n.useContext)(w),a=(t.breaches,t.offset,t.dispatch),r=Object(n.useState)(""),s=Object(p.a)(r,2),i=s[0],l=s[1],o=Object(n.useRef)(new IntersectionObserver((function(e){e[0].isIntersecting&&a({type:"INC_OFFSET"})})),{thershold:1});return Object(n.useEffect)((function(){var e=i,t=o.current;return e&&t.observe(e),function(){e&&t.unobserve(e)}}),[i]),c.a.createElement("ul",{className:"list"},e.breaches.map((function(e){return c.a.createElement("div",{ref:l,key:e.PwnCount,className:"item"},c.a.createElement(E,{breach:e}))})))}function N(){var e=Object(n.useContext)(w),t=e.breaches,a=e.isLoad,r=e.offset,s=e.dispatch;function i(){return(i=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s({type:"SET_LOAD"}),e.next=4,h.getBreaches(r);case 4:t=e.sent,s({type:"SET_BREACHES",breachesItems:t}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(" err in breaches",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){(0===r||a)&&(s({type:"SET_LOAD"}),function(){i.apply(this,arguments)}())}),[r]),c.a.createElement("div",{className:"flex1 container top-padding"},t.length>0&&c.a.createElement(x,{breaches:t}))}var j={query:y,save:k,post:function(e,t){return S.apply(this,arguments)},get:function(e,t){return C.apply(this,arguments)}};function y(e){return JSON.parse(localStorage.getItem(e))}function k(e,t){localStorage.setItem(e,JSON.stringify(t))}function S(){return(S=Object(o.a)(l.a.mark((function e(t,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(t);case 2:if(!(n=e.sent)){e.next=11;break}if(!n.find((function(e){return e.PwnCount===a.PwnCount}))){e.next=7;break}return e.abrupt("return");case 7:n.push(a),k(t,n),e.next=12;break;case 11:k(t,[a]);case 12:return e.abrupt("return",a);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=Object(o.a)(l.a.mark((function e(t,a){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(t);case 2:return n=e.sent,c=n.find((function(e){return e.PwnCount===a})),e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e){var t=Object(n.useContext)(w),a=t.breaches,r=t.dispatch,s=Object(n.useState)(null),i=Object(p.a)(s,2),u=i[0],m=i[1];function f(){var t=+e.match.params.id,n=a.find((function(e){return e.PwnCount===t}));n?(m(n),j.post("items",n)):function(e){h.apply(this,arguments)}(t)}function h(){return(h=Object(o.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.get("items",t);case 2:a=e.sent,m(a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){return r({type:"SET_LOAD"}),f(),function(){r({type:"SET_LOAD"})}}),[]),c.a.createElement("div",{className:"flex column flex1 container top-padding details"},u?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"flex item-title-wrapper"},c.a.createElement("img",{className:"item-image",src:u.LogoPath,alt:""}),c.a.createElement("h3",{className:"item-title"},u.Domain||u.Name)),c.a.createElement("hr",null),c.a.createElement("div",{className:"item-date"},"Breach Date: ",u.BreachDate),c.a.createElement("p",{className:"item-description flex1",dangerouslySetInnerHTML:{__html:u.Description}}),c.a.createElement("div",{className:"data-classes"}," Impacted data classes :",u.DataClasses.map((function(e,t){return c.a.createElement("p",{key:t,className:"item"},e)})))):c.a.createElement("div",null,"No Details To show"))}var A=a(2),D=a(35);function _(){var e=Object(n.useState)(!1),t=Object(p.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){!function(){var e="dark"===document.documentElement.getAttribute("data-theme");r(e)}()}),[]),c.a.createElement("div",{className:"nav-bar container flex"},c.a.createElement("div",{className:"center-side-nav flex column align-center "},c.a.createElement(b.c,{className:"section selected",to:"/breach",exact:!0},c.a.createElement("li",null,"Home")),c.a.createElement(b.c,{className:"section selected",to:"/breach",exact:!0},c.a.createElement("li",null,"Breaches")),c.a.createElement(b.c,{className:"section selected",to:"/breach",exact:!0},c.a.createElement("li",null,"FAQ"))),c.a.createElement("div",{className:"right-side-nav flex align-center "},c.a.createElement("div",{className:"main-search flex"},c.a.createElement("label",{id:"theme-switch",className:"theme-switch",htmlFor:"checkbox_theme"},c.a.createElement("input",{onChange:function(){r(!a),document.documentElement.setAttribute("data-theme",a?"light":"dark"),j.save("theme",a?"light":"dark")},type:"checkbox",id:"checkbox_theme",checked:a})))))}var B=a(19);function I(){return c.a.createElement("div",{className:"footer"},c.a.createElement("div",{className:"footer-wrapper flex space-between"},c.a.createElement("div",{className:"rights"},"All rights reserved"),c.a.createElement("div",{className:"icons flex "},c.a.createElement("a",{href:"https://www.facebook.com"},"  ",c.a.createElement(B.a,{className:"icon fa"})),c.a.createElement("a",{href:"https://www.instagram.com"}," ",c.a.createElement(B.b,{className:"icon in"})),c.a.createElement("a",{href:"https://www.linkedin.com/in/roy-amar-9b848224/"},c.a.createElement(B.c,{className:"icon fa"})))))}var P=Object(D.a)();var T=function(){return c.a.createElement(b.a,{history:P},c.a.createElement(_,null),c.a.createElement(O,null,c.a.createElement(A.c,null,c.a.createElement(A.a,{path:"/breach",component:N,exact:!0}),c.a.createElement(A.a,{path:"/breach/:id",component:L,exact:!0}))),c.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.f42c3de9.chunk.js.map