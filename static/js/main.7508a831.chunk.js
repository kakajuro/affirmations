(this.webpackJsonpaffirmative=this.webpackJsonpaffirmative||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},37:function(t,e,n){"use strict";n.r(e);var c=n(1),s=n(0),a=n.n(s),i=n(6),o=n.n(i),r=(n(14),n(5)),u=(n(15),n(7)),h=n.n(u);n(4);var f=function(){return Object(c.jsx)(h.a,{type:"Oval",color:"#5196f0",height:50,width:50,className:"spinner"})};var j=function(t){var e=t.loadedQuote;return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{className:"affirmation",children:e})})},l=n(8);var d=function(){return Object(c.jsx)("div",{className:"icon-div",children:Object(c.jsx)(l.a,{className:"gitIcon",size:40,onClick:function(){window.open("https://github.com/swishyDev/affirmations")}})})};var b=function(){var t=Object(s.useState)(""),e=Object(r.a)(t,2),n=e[0],a=e[1],i=Object(s.useState)(),o=Object(r.a)(i,2),u=o[0],h=o[1];Object(s.useEffect)((function(){h(!0);fetch("https://fathomless-brushlands-29705.herokuapp.com/https://zenquotes.io/api/today").then((function(t){return t.json()})).then((function(t){return a("Daily Quote: "+t[0].q)})).then((function(){return h(!1)}))}),[]);var l=function(){h(!0);var t,e,n="https://fathomless-brushlands-29705.herokuapp.com/",c="";1===(t=1,e=2,t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t)?(c="https://affirmations.dev",fetch(n+c).then((function(t){return t.json()})).then((function(t){return a(t.affirmation)})).then((function(){return h(!1)})).catch((function(t){h(!1),a("Unable to access quote."),console.log(t)}))):(h(!0),c="https://zenquotes.io/api/random",fetch(n+c).then((function(t){return t.json()})).then((function(t){return a(t[0].q)})).then((function(){return h(!1)})).catch((function(t){a("Unable to access quote."),console.log(t)})))};return Object(c.jsxs)("div",{children:[Object(c.jsx)("header",{className:"heading",children:Object(c.jsx)(d,{})}),Object(c.jsxs)("div",{className:"main-window",children:[Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("div",{className:"quote",children:u?Object(c.jsx)(f,{}):Object(c.jsx)(j,{loadedQuote:n})}),Object(c.jsx)("button",{className:"btn",onClick:function(){return l()},children:"Generate"})]}),Object(c.jsx)("div",{className:"credits",children:Object(c.jsxs)("p",{children:["Inspirational quotes provided by ",Object(c.jsx)("a",{href:"https://zenquotes.io/",target:"_blank",children:" ZenQuotes API"})," and ",Object(c.jsx)("a",{href:"https://github.com/annthurium/affirmations/",children:"affirmations.dev"})]})})]})]})};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(b,{})}),document.getElementById("root"))},4:function(t,e,n){}},[[37,1,2]]]);
//# sourceMappingURL=main.7508a831.chunk.js.map