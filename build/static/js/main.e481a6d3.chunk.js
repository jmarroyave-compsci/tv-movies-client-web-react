(this["webpackJsonptest-graphql"]=this["webpackJsonptest-graphql"]||[]).push([[0],{52:function(e,t,n){},53:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var c,r=n(9),s=n.n(r),i=n(40),a=n.n(i),j=(n(52),n.p+"static/media/logo.6ce24c58.svg"),l=(n(53),n(41)),o=n(68),d=n(69),h=n(7),p=Object(o.a)(c||(c=Object(l.a)(["\n  query getMovies{ \n    movies(limit:2) {\n      title\n      description\n      country\n      genre\n    }\n  }\n"])));var b=function(){var e=Object(d.a)(p),t=e.loading,n=e.error,c=e.data;return t?Object(h.jsx)("p",{children:"Loading..."}):n?Object(h.jsxs)("p",{children:["Error ",n.toString()]}):c.movies.map((function(e,t){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:e.title}),Object(h.jsx)("p",{children:e.description}),Object(h.jsxs)("p",{children:[" Country",Object(h.jsx)("ul",{children:e.country.map((function(e,t){return Object(h.jsxs)("li",{children:[" ",e," "]},t)}))})]}),Object(h.jsxs)("p",{children:[" Genre",Object(h.jsx)("ul",{children:e.genre.map((function(e,t){return Object(h.jsxs)("li",{children:[" ",e," "]},t)}))})]})]},t)}))};var u=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)("img",{src:j,className:"App-logo",alt:"logo"}),Object(h.jsxs)("p",{children:["Edit ",Object(h.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(h.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]}),Object(h.jsx)(b,{})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))},g=n(66),x=n(67),m=n(65),f=new g.a({uri:"http://localhost:8080/graphql",cache:new x.a});a.a.render(Object(h.jsxs)(m.a,{client:f,children:[Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(u,{})}),","]}),document.getElementById("root")),O()}},[[56,1,2]]]);
//# sourceMappingURL=main.e481a6d3.chunk.js.map