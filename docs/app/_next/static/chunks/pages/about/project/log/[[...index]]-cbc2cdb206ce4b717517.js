(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6179],{2093:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(4942),o=(r(67294),r(11163)),c=r(55619),i={automata:{name:"about-project-blog"},page:{title:"the Log",description:"some lessons learned while programming this project",url:"/about/project/log"},banner:{showData:!0}},u=(r(43332),r(89260)),a=r(58862),s=r(85893);function p(e){e.id;var t=e.title,r=(e.thumbnail,e.description,e.slug),n=e.sprint,o=e.day;return(0,s.jsx)(u.Z,{box:!0,href:"".concat(i.page.url,"/posts/").concat(r),children:(0,s.jsxs)(a.Zh,{children:[(0,s.jsx)(a.x4,{children:"srpint ".concat(n," - day ").concat(o).toUpperCase()}),(0,s.jsx)(a.nv,{children:t})]})})}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){var t=(0,o.useRouter)();return(0,s.jsx)(c.Z,{config:i,type:e.render,data:e.data,item:function(e){return(0,s.jsx)(p,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e))},breadcrumbs:e.breadcrumbs,params:e.route?e.route:{page:1},onPageChange:function(e){return t.push("".concat(i.page.url,"/").concat(e))}})}},43332:function(e,t,r){"use strict";var n=r(15671),o=r(43144),c=r(60136),i=r(82963),u=r(61120),a=r(67294),s=r(65295),p=r(18515),f=r(42643),l=r(54962),b=r(49161),O=r(2658),j=r(360),y=r(22854),h=r(85893);function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,u.Z)(e);if(t){var o=(0,u.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,i.Z)(this,r)}}var g=function(e){(0,c.Z)(r,e);var t=d(r);function r(){return(0,n.Z)(this,r),t.apply(this,arguments)}return(0,o.Z)(r,[{key:"render",value:function(){var e=this.props,t=e.title,r=e.subtitle,n=e.text,o=e.image,c=e.imageHeight,i=e.noImage,u=e.actions,a=0;r=r||"";return i=!!i,o=o||y.Z.DEFAULTS.IMAGE_PLACEHOLDER,(0,h.jsxs)(s.Z,{style:{flexGrow:1},children:[(0,h.jsx)(p.Z,{title:(0,j.HD)(t)?(0,h.jsx)(O.Z,{noWrap:!1,children:t}):t,subheader:r}),!i&&(0,h.jsx)(l.Z,{style:{height:0,paddingTop:"56.25%",backgroundColor:"#efefef"},height:c||null,image:o}),n&&(0,h.jsx)(f.Z,{children:(0,j.HD)(n)?(0,h.jsx)(O.Z,{variant:"body2",color:"text.secondary",component:"div",children:n}):n}),u&&u.length>0&&(0,h.jsx)(b.Z,{children:u.map((function(e){return(0,h.jsx)("div",{children:e},a++)}))})]})}}]),r}(a.Component);t.Z=g},24324:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return b},default:function(){return O}});var n=r(4942),o=r(70885),c=(r(67294),r(2093)),i=r(85893);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=function(e){return(0,i.jsx)(c.Z,a(a({},e),{},{render:"list"}))},p=r(11163);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=!0,O=function(e){var t=(0,p.useRouter)(),r=t&&t.query&&t.query.index?t.query.index:[],n=(0,o.Z)(r,1)[0],c={page:n=n?parseInt(n):1},u=l(l({},e),{},{route:c});return(0,i.jsx)(s,l(l({},u),{},{breadcrumbs:"/about/project/log"}))}},96507:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about/project/log/[[...index]]",function(){return r(24324)}])}},function(e){e.O(0,[6499,5685,519,5619,9774,2888,179],(function(){return t=96507,e(e.s=t);var t}));var t=e.O();_N_E=t}]);