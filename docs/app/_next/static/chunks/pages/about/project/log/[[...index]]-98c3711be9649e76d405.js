(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6179],{47635:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(4942),o=(n(67294),n(11163)),i=n(55619),a={automata:{name:"about-project-blog"},page:{title:"the Log",description:"some lessons learned while programming this project",url:function(){return"/about/project/log"}},banner:{showData:!0}},c=(n(43332),n(89260)),s=n(58862),l=n(85893);function u(e){e.id;var t=e.title,n=(e.thumbnail,e.description,e.slug),r=e.sprint,o=e.day;return(0,l.jsx)(c.Z,{box:!0,href:"/about/project/log/posts/".concat(n),children:(0,l.jsxs)(s.Zh,{children:[(0,l.jsx)(s.x4,{children:"sprint ".concat(r," - day ").concat(o).toUpperCase()}),(0,l.jsx)(s.nv,{children:t})]})})}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e){var t=(0,o.useRouter)();return(0,l.jsx)(i.Z,{config:a,data:e.data,item:function(e){return(0,l.jsx)(u,p({},e))},params:p(p({},e),{},{loading:!1}),fetch:function(n){"banner"!==e.render&&t.push("".concat(a.page.url(),"/").concat(n.page))}})}},50789:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(4942),o=n(67294),i=n(52651),a=n(23275),c=n(36501),s=n(14308),l=n(28973),u=n(62448),d=n(50367),p=n(12666),f=n(85893);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j={transition:"opacity ".concat(1300,"ms ease-in-out"),opacity:0},m={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}};function h(e){var t=e.animations,n=void 0===t||t,r=e.data,c=e.loading,s=e.url,l=e.skeleton,g=e.item,h=e.onPageChange,O=e.page,y=e.pageSize,x=e.xs,w=void 0===x?12:x,P=e.sm,Z=void 0===P?6:P,D=e.md,E=void 0===D?6:D,C=e.lg,k=void 0===C?4:C,S=e.noPaging,_=void 0!==S&&S,T=e.noPadding,R=(0,o.useRef)(null);r=r&&r.length>0?r:[1,2,3,4,5,6];var A=function(e){return T?e:(0,f.jsx)(d.ck,{children:e})},I=function(e){return n?(0,f.jsx)(p.ZP,{in:!0,timeout:1300,children:function(t){return(0,f.jsx)("div",{style:v(v(v({},j),m[t]),{},{width:"100%"}),children:e})}}):e},N=function(e){return(0,f.jsx)(a.Z,{xs:w,sm:Z,md:E,lg:k,children:A(c?l||(0,f.jsx)(b,{}):g?I(g(e.data)):null)})},L=(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{ref:R}),(0,f.jsx)(i.Z,{spacing:2,justify:"center",fill:!0,style:{width:"100%"},children:r.map((function(t,n){return(0,f.jsx)(o.Fragment,{children:(0,f.jsx)(N,{data:t,params:e})},n)}))})]});return _||(L=(0,f.jsx)(u.Z,{pageSize:y,data:r,url:s,onPageChange:function(e){R.current.scrollIntoView(!1),h&&h(e)},page:O,loading:c,children:L})),(0,f.jsx)(d.RQ,{children:L})}function b(){return(0,f.jsx)(c.Z,{style:{backgroundColor:"transparent",flexGrow:1,padding:"0.5rem"},children:(0,f.jsxs)(s.Z,{spacing:1,children:[(0,f.jsx)(l.Z,{variant:"text",width:"80%"}),(0,f.jsx)(l.Z,{variant:"rectangular",height:100}),(0,f.jsx)(l.Z,{variant:"text",width:"50%"}),(0,f.jsx)(l.Z,{variant:"text",width:"40%"}),(0,f.jsx)(l.Z,{variant:"text",width:"70%"})]})})}},62448:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});n(67294);var r=n(14308),o=n(72642),i=n(50367),a=n(58862),c=n(85893);function s(e){var t=e||{},n=t.children,s=t.loading,l=t.data,u=t.url,d=t.skeleton,p=t.onPageChange,f=t.page,g=t.pageSize,v=void 0===g?10:g,j=f?parseInt(f):1,m=function(e){if(p&&p(e),u){var t="".concat(u,"/").concat(e);router.push(t)}},h=l&&l.length<v,b=1==j;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(i.RQ,{children:l&&l.length>0?(0,c.jsxs)(r.Z,{spacing:2,children:[n,(0,c.jsxs)(r.Z,{direction:"row",spacing:2,justifyContent:"center",children:[(0,c.jsx)(o.Z,{variant:"outlined",disabled:b,onClick:function(){return m(j-1)},children:"Back"}),(0,c.jsx)(o.Z,{variant:"outlined",disabled:h,onClick:function(){return m(j+1)},children:"Next"})]})]}):(0,c.jsx)(a.Dx,{children:s?d||"loading":"No results"})})})}},43332:function(e,t,n){"use strict";n(67294);var r=n(65295),o=n(18515),i=n(42643),a=n(54962),c=n(49161),s=n(2658),l=n(360),u=n(9092),d=n(14563),p=n(44290),f=n(85893),g=(0,p.Z)((function(e){return{headerContent:{width:"100%"},headerRoot:{width:"100%"}}})),v="".concat(u.Z.APP.BASE_PATH).concat(u.Z.DEFAULTS.IMAGE_PLACEHOLDER),j=function(e){return e.target.src=v};t.Z=function(e){var t,n=g(),p=e.title,v=e.subtitle,m=e.text,h=e.image,b=e.imageHeight,O=void 0===b?180:b,y=e.noImage,x=e.actions,w=0;v=v||"";return y=!!y,h=h||u.Z.DEFAULTS.IMAGE_PLACEHOLDER,(0,f.jsxs)(r.Z,{style:{flexGrow:1,width:"100%"},children:[(0,f.jsx)(o.Z,{sx:{width:"100%"},classes:{content:n.headerContent,root:n.headerRoot},title:(0,f.jsx)(d.Z,{title:p||"",placement:"bottom-start",children:(0,f.jsx)("div",{style:{display:"inline-block",width:"100%"},children:(0,f.jsx)(s.Z,{noWrap:!0,variant:"subtitle",style:{display:"inline-block",width:"100%"},children:p})})}),subheader:v}),!y&&(0,f.jsx)(a.Z,{height:O||null,image:null!==(t=h)&&void 0!==t&&t.startsWith("/")?"".concat(u.Z.APP.BASE_PATH).concat(h):h,component:"img",onError:j}),m&&(0,f.jsx)(i.Z,{children:(0,l.HD)(m)?(0,f.jsx)(s.Z,{variant:"body2",color:"text.secondary",component:"div",children:m}):m}),x&&x.length>0&&(0,f.jsx)(c.Z,{children:x.map((function(e){return(0,f.jsx)("div",{children:e},w++)}))})]})}},55619:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(4942),o=n(67294),i=n(11163),a=n(39704),c=n(19016),s=n(25810),l=n(14763),u=n(50789),d=(n(14308),n(529)),p=n(85893);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e){var t,n,r,l,u,d,f,v,m=(0,a.I0)(),h=(0,i.useRouter)(),b=e.config,O=(0,o.useState)(""),y=O[0],x=O[1],w=(0,a.v9)((function(e){return e[b.automata.name]})),P=null!==(t=e.params.render)&&void 0!==t?t:null,Z=g(g({},e.params),{},{renderer:null!==(n=e.params.renderer)&&void 0!==n?n:P});w=e.data?{data:e.data,params:{page:e.params.page}}:w;(0,o.useEffect)((function(){w&&!e.data&&m((0,c.K4)({status:w.loading,sender:b.automata.name}))}),[w]),(0,o.useEffect)((function(){Z.breadcrumbs&&m((0,c.YA)({breadcrumbs:"function"===typeof Z.breadcrumbs?Z.breadcrumbs(w):Z.breadcrumbs}))}),[Z.breadcrumbs,w]);var D=function(t){e.fetch&&(e.data?e.fetch(g(g({},w.params),t)):m(e.fetch(g({},t))))};return(0,o.useEffect)((function(){null!==h&&void 0!==h&&h.isReady&&("banner"!==P||b.banner.showData)&&(e.data||D(Z))}),[null===h||void 0===h?void 0:h.isReady,Z.id]),P&&"grid"!=P?((0,o.useEffect)((function(){""!=y&&m((0,c.PV)({message:y}))}),[y]),(0,p.jsx)(j,{config:e.config,render:P,state:w,loading:!(null!==h&&void 0!==h&&h.isReady)||!w||null===w||(null===(r=w)||void 0===r?void 0:r.loading),forceLoading:"detail"===P&&0==(null===(l=w)||void 0===l||null===(u=l.data)||void 0===u?void 0:u.length)||"list"==P&&0===(null===(d=w)||void 0===d||null===(f=d.data)||void 0===f?void 0:f.length)||(null===(v=w)||void 0===v?void 0:v.error),setErrorMessage:x,fetch:D,item:e.item,customDescription:e.customDescription,customTitle:e.customTitle,mainCol:e.mainCol||e.dashboard||e.detail,skeleton:e.skeleton,params:Z})):(0,p.jsx)(s.C,{from:b.page.title,data:"render property wasn't set"})}function j(e){(0,a.I0)();var t,n,r=e.config,o=e.item,i=e.mainCol,c=e.state,u=e.render,d=e.params,f=e.fetch,v=e.setErrorMessage,j=e.loading||e.forceLoading,b=r.page.title;if(0==e.loading&&c){var O,y;if("detail"===u)null!==c.data&&0!=(null===(O=c.data)||void 0===O?void 0:O.length)||(v("this is a demo version, this record was filtered out to reduce the database size"),j=!0);if("list"===u)0===(null===(y=c.data)||void 0===y?void 0:y.length)&&(v("data not found"),j=!0);c.error&&(v(c.error.message),j=!0)}var x=(0,p.jsx)(m,g({},e));return(0,p.jsxs)(p.Fragment,{children:[c&&c.error&&(0,p.jsx)(s.C,{from:b,data:c.error.message}),"banner"===u&&x,"list"===u&&(0,p.jsx)(l.Z,g(g({},e),{},{id:r.automata.name,banner:x,mainCol:j&&e.skeleton?e.skeleton:(0,p.jsx)(h,g({},e))})),"page"===u&&(0,p.jsx)(l.Z,g(g({},e),{},{id:r.automata.name,banner:x,mainCol:i?(0,p.jsx)(p.Fragment,{children:j&&e.skeleton?e.skeleton:i({data:null!==(t=null===c||void 0===c?void 0:c.data)&&void 0!==t?t:null,loading:j,params:d,fetch:f,item:o})}):(0,p.jsx)(s.C,{from:b,data:"main component missing, not found in mainCol or detail prop"})})),"detail"===u&&(0,p.jsx)(l.Z,g(g({},e),{},{id:r.automata.name,mainCol:i?(0,p.jsx)(p.Fragment,{children:j&&e.skeleton?e.skeleton:i({data:null!==(n=null===c||void 0===c?void 0:c.data)&&void 0!==n?n:null,loading:j})}):(0,p.jsx)(s.C,{from:b,data:"main component missing, not found in mainCol or detail prop"})}))]})}function m(e){var t,n,r,o,i,a,c,s,l,u,f=e.config,g=e.state,v=null!==(t=null===(n=f.banner)||void 0===n?void 0:n.showData)&&void 0!==t&&t,j=e.customTitle?"function"===typeof e.customTitle?g?e.customTitle(null!==(r=null===g||void 0===g?void 0:g.params)&&void 0!==r?r:{}):"":e.customTitle:null!==(o=null===(i=f.page)||void 0===i?void 0:i.title)&&void 0!==o?o:"NO TITLE",m=e.customDescription?"function"===typeof e.customDescription?g?e.customDescription(null!==(a=null===g||void 0===g?void 0:g.params)&&void 0!==a?a:{}):"":e.customDescription:null!==(c=null===(s=f.page)||void 0===s?void 0:s.description)&&void 0!==c?c:"NO DESCRIPTION",h=null===(l=f.page)||void 0===l?void 0:l.url;return(0,p.jsx)(d.Z,{showData:v,loading:e.loading,title:j,description:m,data:null===g||void 0===g?void 0:g.data,item:e.item,actions:[{url:h(null!==(u=null===g||void 0===g?void 0:g.params)&&void 0!==u?u:{}),title:"See all"}],hero:"banner"!==e.render})}function h(e){var t,n,r=e.loading,o=e.state,i=e.fetch,a=e.item;return(0,p.jsx)(u.Z,{loading:r,page:null!==(t=null===o||void 0===o?void 0:o.params.page)&&void 0!==t?t:null,data:null!==(n=null===o||void 0===o?void 0:o.data)&&void 0!==n?n:null,onPageChange:function(e){return i({page:e})},item:a})}},24324:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return f},default:function(){return g}});var r=n(4942),o=n(70885),i=(n(67294),n(47635)),a=n(85893);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=function(e){return(0,a.jsx)(i.Z,s(s({},e),{},{render:"list"}))},u=n(11163);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=!0,g=function(e){var t=(0,u.useRouter)(),n=t&&t.query&&t.query.index?t.query.index:[],r=(0,o.Z)(n,1)[0];return r=r?parseInt(r):1,(0,a.jsx)(l,p(p({},e),{},{page:r,breadcrumbs:"/about/project/log"}))}},96507:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about/project/log/[[...index]]",function(){return n(24324)}])}},function(e){e.O(0,[7146,4290,8493,4197,9774,2888,179],(function(){return t=96507,e(e.s=t);var t}));var t=e.O();_N_E=t}]);