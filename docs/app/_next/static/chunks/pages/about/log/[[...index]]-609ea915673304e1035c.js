(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[769],{1734:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return Z},default:function(){return D}});var n=t(4942),o=t(70885),i=(t(67294),t(64419)),c=t(7090),u=t(2637),s=t(70310),a=t(26447),l=t(45528),f=t(33259),p=t(85893);function O(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function j(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?O(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function b(e){return(0,p.jsx)(a.Z,{children:(0,p.jsx)(l.Z,j(j({},e),{},{url:"/about/log",item:function(e){return(0,p.jsx)(f.Z,j({full:!0},e))}}))})}function g(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?g(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function h(e){return(0,p.jsx)(u.Z,{banner:(0,p.jsx)(s.Z,{hero:!0}),mainCol:(0,p.jsx)(b,d({},e))})}function y(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?y(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var P=function(e){return(0,p.jsx)(c.Z,{xs:(0,p.jsx)(h,m({},e))})},w=t(11163);function v(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function x(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?v(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var Z=!0,D=function(e){var r=(0,w.useRouter)(),t=r&&r.query&&r.query.index?r.query.index:[],n=(0,o.Z)(t,1)[0],c={page:n=n?parseInt(n):1},u=x(x({},e),{},{route:c});return u.breadcrumbs=[{name:"about",url:"/about"},{name:"log"}],(0,p.jsx)(i.Z,x(x({},u),{},{children:(0,p.jsx)(P,x({},u))}))}},8498:function(e,r,t){"use strict";t.d(r,{Z:function(){return b}});t(67294);var n=t(29602),o=(t(76085),t(92275),t(31189),t(85893)),i=(0,n.ZP)("div")({marginTop:"1rem"}),c=(0,n.ZP)("div")({}),u=(0,n.ZP)("div")({marginTop:"0rem",minHeight:"3rem"}),s=(0,n.ZP)("div")({width:"100%",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",fontSize:"0.8rem",lineHeight:"1rem"}),a=(0,n.ZP)("span")({fontSize:"0.75rem",lineHeight:"0.85rem",padding:0,paddingTop:"0.5rem",float:"right"}),l=(0,n.ZP)("h4")({margin:0}),f=(0,n.ZP)("div")({margin:"1rem 0 0 0",padding:"0",fontSize:"1rem",lineHeight:"1rem"}),p=(0,n.ZP)("div")({textTransform:"uppercase",margin:"1rem 0 0 0",padding:"0",fontSize:"0.9rem",lineHeight:"1rem",fontWeight:400}),O=(0,n.ZP)("div")({fontSize:"0.85rem",lineHeight:"0.95rem"}),j=(0,n.ZP)("div")({fontSize:"0.5rem",lineHeight:"0.6rem",textTransform:"uppercase",paddingTop:"0.5rem"});function b(e){var r=e.data;return r&&0!=r.length?!0===e.mini?function(e,r){var t=e.year,n=e.all,i=n?r.length:2;t=parseInt(t);var c=function(e){return!t||e.year==t};return(0,o.jsxs)(u,{children:[r&&r.length>0&&r.slice(0,i).map((function(e,r){return c(e)&&(0,o.jsx)("div",{children:(0,o.jsxs)(s,{children:[e.year," - ",e.name.toUpperCase()," - ","false"===e.won||!1===e.won?"[N]":"[W]"," ",e.category]})},r)})),!n&&r&&r.length>i&&(0,o.jsx)(s,{children:(0,o.jsx)(s,{children:(0,o.jsxs)(a,{children:["and ",r.length-i," more"]})})})]})}(e,r):function(e,r){var t=null,n=null,u=(e.year,function(e){return t&&t==e.year?null:(t=e.year,n=null,(0,o.jsx)(f,{children:e.year}))}),s=function(e){return n&&n==e.name?null:(n=e.name,(0,o.jsx)(p,{children:e.name}))};return(0,o.jsxs)(i,{children:[(0,o.jsx)(l,{children:"awards"}),r&&r.length>0&&r.map((function(e,r){return(0,o.jsxs)("div",{children:[u(e),s(e),(0,o.jsxs)(c,{children:[(0,o.jsx)(j,{children:"false"===e.won||!1===e.won?"nominee":"winner"}),(0,o.jsx)(O,{children:e.category})]})]},r)}))]})}(e,r):null}},70310:function(e,r,t){"use strict";var n=t(4942),o=(t(67294),t(96035)),i=t(515),c=t(32478),u=t(33259),s=t(85893);function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}r.Z=function(e){var r=e.data;e.loading,e.hero;return(0,s.jsx)(o.Z,l(l({},e),{},{title:"Latest posts",description:"some lessons learned while programming this project",carousel:(0,s.jsx)(c.Z,{data:r,renderItem:function(e){return(0,s.jsx)(u.Z,l({},e))}}),footer:(0,s.jsx)(i.Z,{border:!0,href:"/about/log",children:" See more"})}))}},33259:function(e,r,t){"use strict";t.d(r,{Z:function(){return c}});t(67294);var n=t(92498),o=t(515),i=(t(8498),t(85893));function c(e){e.id;var r=e.title,t=e.thumbnail,c=e.description,u=e.slug;return(0,i.jsx)(n.Z,{image:t,imageHeight:100,text:c,title:r,actions:[(0,i.jsx)(o.Z,{href:"/about/log/posts/".concat(u),children:"Go"})]})}},31189:function(e,r,t){"use strict";t(67294),t(85893)},36693:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about/log/[[...index]]",function(){return t(1734)}])}},function(e){e.O(0,[34,891,419,456,774,888,179],(function(){return r=36693,e(e.s=r);var r}));var r=e.O();_N_E=r}]);