(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2954],{60181:function(e,n,t){"use strict";var r=t(64119);n.Z=void 0;var i=r(t(64938)),o=t(85893),a=(0,i.default)((0,o.jsx)("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");n.Z=a},23508:function(e,n,t){"use strict";var r=t(64119);n.Z=void 0;var i=r(t(64938)),o=t(85893),a=(0,i.default)((0,o.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");n.Z=a},1015:function(e,n,t){"use strict";t.d(n,{S:function(){return d},E:function(){return p}});var r,i,o=t(30168),a=t(4942),c=t(54397),l=t(42535);function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var d=function(e){var n=e.topic,t=e.entity;return(0,l.h)(f({entity:t}),{topic:n},(function(e){return s(s({},e),{},{data:e.data.storyTopic})}))},f=function(e){var n=e.ENTITY;return(0,c.Ps)(r||(r=(0,o.Z)(["\nquery ","_topic($topic: String!){\n  storyTopic(topic: $topic){\n    year\n    genre\n  }\n}\n"])),n)},p=function(e){var n=e.page,t=e.entity,r=e.genre,i=e.decade;return(0,l.h)(g({ENTITY:t.replace(/-/g,"_")}),{page:n,year:parseInt(i),genre:r},(function(e){return s(s({},e),{},{data:e.data.storyTopics})}))},g=function(e){var n=e.ENTITY;return(0,c.Ps)(i||(i=(0,o.Z)(["\nquery ","_topics($page: Int, $genre: String, $year: Int){\n  storyTopics(page: $page, genre: $genre, year: $year){\n    year\n    genre\n    max\n    min\n    words{\n      n\n      p\n    }\n  }\n}\n"])),n)}},26989:function(e,n,t){"use strict";var r=t(4942),i=t(67294),o=t(26447),a=t(90461),c=t(9573),l=t(38732),u=t(98102),s=t(56011),d=t(3694),f=t(85893);function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}n.Z=function(e){var n=e.data,t=e.onExit,g=e.topic,m=(0,i.useState)({}),v=m[0],h=m[1],y=function(e,n){return n?"rgba(0,0,0,0.4)":e%2==0?"rgba(0,0,0,0.1)":"inherit"};return(0,i.useEffect)((function(){if(n.topic.data){var e={},t={};n.topic.data.forEach((function(n){e[n.year]||(e[n.year]={}),t[n.genre]||(t[n.genre]={})}));var i={};Object.keys(t).forEach((function(n){return i[n]=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e)})),n.topic.data.forEach((function(e){i[e.genre][e.year]=1})),h(i)}}),[n.topic.data]),(0,f.jsxs)("div",{children:[(0,f.jsxs)(o.Z,{direction:"row",style:{marginBottom:"1rem"},children:[(0,f.jsx)(a.Z,{label:g.replace(/,/g," "),onDelete:t}),(0,f.jsx)("div",{style:{flex:1}})]}),(0,f.jsx)("div",{style:{fontSize:"0.6rem",width:"100%",maxHeight:"400px",overflow:"auto"},children:(0,f.jsxs)(c.Z,{size:"small",stickyHeader:!0,children:[(0,f.jsx)(s.Z,{children:(0,f.jsxs)(d.Z,{children:[(0,f.jsx)(u.Z,{children:"\xa0"}),Object.keys(v).slice(0,1).map((function(e){return Object.keys(v[e]).map((function(e){return(0,f.jsx)(u.Z,{align:"center",children:e},e)}))})),(0,f.jsx)(u.Z,{children:"\xa0"})]})}),(0,f.jsx)(l.Z,{children:Object.keys(v).map((function(n,t){return(0,f.jsxs)(d.Z,{style:{backgroundColor:y(t,!1)},children:[(0,f.jsx)(u.Z,{style:{backgroundColor:y(0,n==e.genre)},children:n}),Object.keys(v[n]).map((function(t){return(0,f.jsx)(u.Z,{style:{backgroundColor:y(0,t==e.year||n==e.genre)},align:"center",children:1==v[n][t]?"\u2713":" "})})),(0,f.jsx)(u.Z,{style:{backgroundColor:y(0,n==e.genre)},children:n})]},t)}))})]})})]})}},23620:function(e,n,t){"use strict";t.d(n,{Z:function(){return j}});var r=t(4942),i=t(67294),o=t(29602),a=t(2734),c=t(97005),l=t(74187),u=t(14308),s=t(28973),d=t(74035),f=t(85893);function p(e){return(0,f.jsx)(d.X,{children:(0,f.jsx)(u.Z,{spacing:1,sx:{padding:"1rem",display:"flex",flexGrow:1},children:(0,f.jsx)(s.Z,{variant:"rectangular",height:150})})})}function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var v=(0,o.ZP)("span")((function(e){var n=e.fontSize,t=e.color,r=e.backgroundColor;e.theme;return{border:"1px solid rgba(0,0,0,0.2)",padding:"0.5rem",marginRight:"1rem",marginBottom:"0.25rem",fontSize:"".concat(n),color:"".concat(t),backgroundColor:"".concat(r),cursor:"pointer",borderRadius:"5px"}})),h=function(e){e.data;var n=e.direction,t=e.words,r=e.max,i=e.min,o=e.onClick,a=e.wordName,l=e.wordCount;return(0,f.jsx)(c.Z,{gradient:!1,direction:n,pauseOnHover:!0,pauseOnClick:!0,children:t.map((function(e,n){return(0,f.jsx)(v,m(m({},b(l(e),r,i)),{},{fontSize:y(l(e),r,i),onClick:function(){return o(a(e).toLowerCase())},children:a(e).toLowerCase()}),n)}))})},y=function(e,n,t){e+=10;for(var r=[1,2,3,5,8,12,16,21,34,55],i=(n-t)/r[r.length-1],o=Math.floor(e/i),a=0;a<r.length;a++){if(o<r[a]){o=a;break}}return"1em"},b=function(e,n,t){for(var r=(0,a.Z)(),i=[3,5,8,13,21,34,55],o=(n-t)/i[i.length-1],c=Math.floor(e/o),u=0;u<i.length;u++)if(c<=i[u]){c=u;break}return c=i.length-1-(c=c>i.length-1?i.length-1:c),(0,l.$)(r,c)},j=function(e){var n=e.data,t=e.max,r=e.min,o=e.onTopicClick,a=e.loading;if(null==n||a)return(0,f.jsx)(p,{});var c="i-".repeat(3).split("-"),l=Math.floor(n.length/4);return(0,f.jsx)("div",{children:c.map((function(a,c){return(0,i.createElement)(h,m(m({},e),{},{onClick:o,max:t,min:r,key:c,words:n.slice(l*c,l*(c+1)),direction:c%2==0?"left":"right"}))}))})}},50789:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});t(4942);var r=t(67294),i=t(52651),o=t(23275),a=t(36501),c=t(14308),l=t(28973),u=t(62448),s=t(74035),d=(t(12666),t(85893));"opacity ".concat(1300,"ms ease-in-out");function f(e){e.animations;var n=e.data,t=e.loading,a=e.url,c=e.skeleton,l=e.item,f=e.onPageChange,g=e.page,m=e.pageSize,v=e.xs,h=void 0===v?12:v,y=e.sm,b=void 0===y?6:y,j=e.md,x=void 0===j?6:j,O=e.lg,w=void 0===O?4:O,Z=e.noPaging,P=void 0!==Z&&Z,k=e.noPadding,C=(0,r.useRef)(null);n=n&&n.length>0?n:[1,2,3,4,5,6];var E=function(e){return k?e:(0,d.jsx)(s.ck,{children:e})},S=function(e){return(0,d.jsx)(o.Z,{xs:h,sm:b,md:x,lg:w,children:E(t?c||(0,d.jsx)(p,{}):l?l(e.data):null)})},D=(0,r.useMemo)((function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{ref:C}),(0,d.jsx)(i.Z,{spacing:2,justify:"center",fill:!0,style:{width:"100%"},children:n.map((function(n,t){return(0,d.jsx)(r.Fragment,{children:(0,d.jsx)(S,{data:n,params:e},t)},t)}))})]})}),[n]);return P||(D=(0,d.jsx)(u.Z,{pageSize:m,data:n,url:a,onPageChange:function(e){C.current.scrollIntoView(!1),f&&f(e)},page:g,loading:t,children:D})),(0,d.jsx)(s.RQ,{children:D})}function p(){return(0,d.jsx)(a.Z,{style:{backgroundColor:"transparent",flexGrow:1,padding:"0.5rem"},children:(0,d.jsxs)(c.Z,{spacing:1,children:[(0,d.jsx)(l.Z,{variant:"text",width:"80%"}),(0,d.jsx)(l.Z,{variant:"rectangular",height:100}),(0,d.jsx)(l.Z,{variant:"text",width:"50%"}),(0,d.jsx)(l.Z,{variant:"text",width:"40%"}),(0,d.jsx)(l.Z,{variant:"text",width:"70%"})]})})}},62448:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});t(67294);var r=t(14308),i=t(72642),o=t(74035),a=t(58862),c=t(85893);function l(e){var n=e||{},t=n.children,l=n.loading,u=n.data,s=n.url,d=n.skeleton,f=n.onPageChange,p=n.page,g=n.pageSize,m=void 0===g?10:g,v=p?parseInt(p):1,h=function(e){if(f&&f(e),s){var n="".concat(s,"/").concat(e);router.push(n)}},y=u&&u.length<m,b=1==v;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(o.RQ,{children:u&&u.length>0?(0,c.jsxs)(r.Z,{spacing:2,children:[t,(0,c.jsxs)(r.Z,{direction:"row",spacing:2,justifyContent:"center",children:[(0,c.jsx)(i.Z,{variant:"outlined",disabled:b,onClick:function(){return h(v-1)},children:"Back"}),(0,c.jsx)(i.Z,{variant:"outlined",disabled:y,onClick:function(){return h(v+1)},children:"Next"})]})]}):(0,c.jsx)(a.Dx,{children:l?d||"loading":"No results"})})})}},24463:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var r=t(67294),i=(t(74035),t(58862),t(72642)),o=t(71508),a=t(60181),c=t(23508),l=t(62318),u=t(85893);function s(e){var n=e.filters,t=(0,r.useState)(!1),s=t[0],d=t[1];var f=function(e){d(e)};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i.Z,{onClick:function(){return f(!s)},endIcon:s?(0,u.jsx)(a.Z,{}):(0,u.jsx)(c.Z,{}),children:"Filter"}),(0,u.jsx)(l.ZP,{anchor:"top",open:s,onClose:function(){return f(!1)},children:(0,u.jsx)(o.Z,{sx:{padding:"2rem 2rem 0rem 2rem",backgroundColor:"background.paper"},children:n({onChange:function(n){e.onChange&&e.onChange(n),f(!1)}})})})]})}},55619:function(e,n,t){"use strict";t.d(n,{Z:function(){return m}});var r=t(4942),i=t(67294),o=t(11163),a=t(39704),c=t(19016),l=t(25810),u=t(14763),s=t(50789),d=(t(14308),t(529)),f=t(85893);function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e){var n,t,r,u,s,d,p,m,h=(0,a.I0)(),y=(0,o.useRouter)(),b=e.config,j=(0,i.useState)(""),x=j[0],O=j[1],w=(0,a.v9)((function(e){return e[b.automata.name]})),Z=null!==(n=e.params.render)&&void 0!==n?n:null,P=g(g({},e.params),{},{renderer:null!==(t=e.params.renderer)&&void 0!==t?t:Z});w=e.data?{data:e.data,params:{page:e.params.page}}:w;(0,i.useEffect)((function(){w&&!e.data&&h((0,c.K4)({status:w.loading,sender:b.automata.name}))}),[w]),(0,i.useEffect)((function(){P.breadcrumbs&&h((0,c.YA)({breadcrumbs:"function"===typeof P.breadcrumbs?P.breadcrumbs(w):P.breadcrumbs}))}),[P.breadcrumbs,w]);var k=function(n){e.fetch&&(w&&(n=g(g({},w.params),n)),e.data?e.fetch(n):h(e.fetch(n)))};return(0,i.useEffect)((function(){null!==y&&void 0!==y&&y.isReady&&("banner"!==Z||b.banner.showData)&&(e.data||k(P))}),[null===y||void 0===y?void 0:y.isReady,P.id]),Z&&"grid"!=Z?((0,i.useEffect)((function(){""!=x&&h((0,c.PV)({message:x}))}),[x]),(0,f.jsx)(v,{config:e.config,render:Z,state:w,loading:!(null!==y&&void 0!==y&&y.isReady)||!w||null===w||(null===(r=w)||void 0===r?void 0:r.loading),forceLoading:"detail"===Z&&0==(null===(u=w)||void 0===u||null===(s=u.data)||void 0===s?void 0:s.length)||"list"==Z&&0===(null===(d=w)||void 0===d||null===(p=d.data)||void 0===p?void 0:p.length)||null!=(null===(m=w)||void 0===m?void 0:m.error),setErrorMessage:O,fetch:k,item:e.item,customDescription:e.customDescription,customTitle:e.customTitle,mainCol:e.mainCol||e.dashboard||e.detail,skeleton:e.skeleton,params:P})):(0,f.jsx)(l.C,{from:b.page.title,data:"render property wasn't set"})}function v(e){(0,a.I0)();var n,t,r=e.config,i=e.item,o=e.mainCol,c=e.state,s=e.render,d=e.params,p=e.fetch,m=e.setErrorMessage,v=e.loading||e.forceLoading;v=!1!==v;var b=r.page.title;if(0==e.loading&&c){var j,x;if("detail"===s)null!==c.data&&0!=(null===(j=c.data)||void 0===j?void 0:j.length)||(m("this is a demo version, this record was filtered out to reduce the database size"),v=!0);if("list"===s)0===(null===(x=c.data)||void 0===x?void 0:x.length)&&(m("data not found"),v=!0);c.error&&(m(c.error.message),v=!0)}var O=(0,f.jsx)(h,g(g({},e),{},{loading:v}));return(0,f.jsxs)(f.Fragment,{children:[c&&c.error&&(0,f.jsx)(l.C,{from:b,data:c.error.message}),"banner"===s&&O,"list"===s&&(0,f.jsx)(u.Z,g(g({},e),{},{id:r.automata.name,banner:O,mainCol:v&&e.skeleton?e.skeleton:(0,f.jsx)(y,g({},e))})),"page"===s&&(0,f.jsx)(u.Z,g(g({},e),{},{id:r.automata.name,banner:O,mainCol:o?(0,f.jsx)(f.Fragment,{children:v&&e.skeleton?e.skeleton:o({data:null!==(n=null===c||void 0===c?void 0:c.data)&&void 0!==n?n:null,loading:v,params:d,fetch:p,item:i})}):(0,f.jsx)(l.C,{from:b,data:"main component missing, not found in mainCol or detail prop"})})),"detail"===s&&(0,f.jsx)(u.Z,g(g({},e),{},{id:r.automata.name,mainCol:o?(0,f.jsx)(f.Fragment,{children:v&&e.skeleton?e.skeleton:o({data:null!==(t=null===c||void 0===c?void 0:c.data)&&void 0!==t?t:null,loading:v})}):(0,f.jsx)(l.C,{from:b,data:"main component missing, not found in mainCol or detail prop"})}))]})}function h(e){var n,t,r,i,o,a,c,l,u,s,p=e.config,g=e.state,m=e.loading,v=null!==(n=null===(t=p.banner)||void 0===t?void 0:t.showData)&&void 0!==n&&n,h=e.customTitle?"function"===typeof e.customTitle?g?e.customTitle(null!==(r=null===g||void 0===g?void 0:g.params)&&void 0!==r?r:{}):"":e.customTitle:null!==(i=null===(o=p.page)||void 0===o?void 0:o.title)&&void 0!==i?i:"NO TITLE",y=e.customDescription?"function"===typeof e.customDescription?g?e.customDescription(null!==(a=null===g||void 0===g?void 0:g.params)&&void 0!==a?a:{}):"":e.customDescription:null!==(c=null===(l=p.page)||void 0===l?void 0:l.description)&&void 0!==c?c:"NO DESCRIPTION",b=null===(u=p.page)||void 0===u?void 0:u.url;return(0,f.jsx)(d.Z,{renderer:p.banner.renderer?p.banner.renderer:"carousel",showData:v,loading:m,title:h,description:y,data:null===g||void 0===g?void 0:g.data,item:e.item,actions:[{url:b(null!==(s=null===g||void 0===g?void 0:g.params)&&void 0!==s?s:{}),title:"See all"}],hero:"banner"!==e.render})}function y(e){var n,t,r=e.loading,i=e.state,o=e.fetch,a=e.item;return(0,f.jsx)(s.Z,{loading:r,page:null!==(n=null===i||void 0===i?void 0:i.params.page)&&void 0!==n?n:null,data:null!==(t=null===i||void 0===i?void 0:i.data)&&void 0!==t?t:null,onPageChange:function(e){return o({page:e})},item:a})}},74187:function(e,n,t){"use strict";t.d(n,{$:function(){return a}});t(67294);var r=t(47036),i=t(6767),o=t.n(i);t(7269);function a(e,n){var t="dark"===e.palette.mode;n=n>9?9:n,n=t?10-n:n;var i=o()(10==n||0==n?t?"black":"white":r.Z[100*n]),a=(t?i.darken(.75):i.lighten(.75)).negate();return{backgroundColor:i.fade(.5).rgb().toString(),color:a.rgb().toString()}}},39698:function(e,n,t){"use strict";t.d(n,{Ct:function(){return v},xs:function(){return b},x4:function(){return x},Dx:function(){return j},u:function(){return m}});var r=t(67294),i=t(29602),o=t(15671),a=t(43144),c=t(60136),l=t(6215),u=t(61120),s=t(36501),d=t(85893);function f(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,u.Z)(e);if(n){var i=(0,u.Z)(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return(0,l.Z)(this,t)}}r.Component;var p=t(32583),g=t(14563),m=function(e){var n=e.children,t=e.content;return t&&null!=t&&"?"!==t?(0,d.jsx)(g.Z,{title:t,placement:"bottom-start",children:n}):n},v=function(e){var n=e.children,t=e.content;return t&&null!=t&&0!=t?(0,d.jsx)(p.Z,{badgeContent:t,color:"primary",children:n}):n},h=(0,i.ZP)("div")((function(e){var n=e.theme,t=e.width,r=e.height;return{backgroundColor:n.palette.action.selected,margin:"0 1rem 1rem 0",padding:0,display:"flex",color:n.palette.text.primary,alignItems:"center",minWidth:t,maxWidth:"100%",minHeight:r,maxHeight:r,borderRadius:"5px"}})),y=(0,i.ZP)("div")((function(e){var n=e.theme;e.width;return{backgroundColor:"transparent",color:n.palette.text.primary,padding:"0.7rem",display:"block",flexGrow:1,margin:"0.1rem",width:"100%"}})),b=function(e){var n=e.width,t=void 0===n?"300px":n,r=e.height,i=void 0===r?"300px":r;return(0,d.jsx)(h,{width:t,height:i,children:(0,d.jsx)(y,{children:e.children})})},j=(0,i.ZP)("h2")({fontSize:"1.3rem",lineHeight:"1.5rem",padding:0,margin:0,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"}),x=((0,i.ZP)("h3")({fontSize:"1.1rem",lineHeight:"1.3rem",textTransform:"lowercase",padding:"0",paddingBottom:"0.25rem",margin:"0 0 0.5rem 0",borderBottom:"2px solid #888"}),(0,i.ZP)("div")({margin:0,marginBottom:"1rem"}),(0,i.ZP)("span")({fontSize:"0.7rem",lineHeight:"0.75rem",margin:0}));(0,i.ZP)("span")({fontSize:"0.6rem",lineHeight:"0.75rem",fontStyle:"italic",margin:0}),(0,i.ZP)("div")({fontSize:"1rem",lineHeight:"1.25rem",margin:0})},52871:function(e,n,t){"use strict";t.d(n,{J:function(){return r}});var r=function(){return["all","Action","Adult","Adventure","Animation","Biography","Comedy","Crime","Documentary","Drama","Family","Fantasy","Film-Noir","Game-Show","History","Horror","Music","Musical","Mystery","News","Reality-TV","Romance","Sci-Fi","Short","Sport","Talk-Show","Thriller","War","Western"].map((function(e){return e.toLowerCase()}))}},77189:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s}});t(67294);var r=t(11163),i=t(4942),o=t(70515),a=t(85893);function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var u=function(e){return(0,a.jsx)(o.Z,l(l({},e),{},{render:"page"}))},s=function(e){var n=(0,r.useRouter)(),t=n&&n.query?n.query:{},i=t.page,o=t.decade,c=t.genre;return o=o||(new Date).getFullYear().toString().slice(0,3)+"0",c=c||"action",i=i?parseInt(i):1,(0,a.jsx)(u,{entity:"movies",page:i,decade:o,genre:c,breadcrumbs:"/movies/stories/topics/".concat(o,"/").concat(c)})}},92849:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/movies/stories/topics",function(){return t(77189)}])},97005:function(e,n,t){var r=t(67294);function i(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var o=i(r),a=function(){return(a=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var i in n=arguments[t])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}).apply(this,arguments)};!function(e){if(e&&"undefined"!==typeof window){var n=document.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=e,document.head.appendChild(n)}}('.marquee-container {\n  overflow-x: hidden !important;\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative;\n  width: 100%;\n}\n.marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.overlay::before, .overlay::after {\n  background: linear-gradient(to right, var(--gradient-color));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n}\n.overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.marquee {\n  flex: 0 0 auto;\n  min-width: 100%;\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}');n.Z=function(e){var n,t,i,c,l=e.style,u=void 0===l?{}:l,s=e.className,d=void 0===s?"":s,f=e.play,p=void 0===f||f,g=e.pauseOnHover,m=void 0!==g&&g,v=e.pauseOnClick,h=void 0!==v&&v,y=e.direction,b=void 0===y?"left":y,j=e.speed,x=void 0===j?20:j,O=e.delay,w=void 0===O?0:O,Z=e.gradient,P=void 0===Z||Z,k=e.gradientColor,C=void 0===k?[255,255,255]:k,E=e.gradientWidth,S=void 0===E?200:E,D=e.children,T=e.loop,R=void 0===T?0:T,N=r.useState(0),z=N[0],I=N[1],_=r.useState(0),F=_[0],H=_[1],L=r.useState(0),M=L[0],q=L[1],B=r.useState(!1),$=B[0],A=B[1],W=r.useRef(null),X=r.useRef(null),Y=function(){X.current&&W.current&&(I(W.current.getBoundingClientRect().width),H(X.current.getBoundingClientRect().width)),q(F<z?z/x:F/x)};r.useEffect((function(){return Y(),window.addEventListener("resize",Y),function(){window.removeEventListener("resize",Y)}})),r.useEffect((function(){A(!0)}),[]);var G="rgba("+C[0]+", "+C[1]+", "+C[2];return o.default.createElement(r.Fragment,null,$?o.default.createElement("div",{ref:W,style:a(a({},u),(n={},n["--pause-on-hover"]=m?"paused":"running",n["--pause-on-click"]=h?"paused":"running",n)),className:d+" marquee-container"},P&&o.default.createElement("div",{style:(t={},t["--gradient-color"]=G+", 1), "+G+", 0)",t["--gradient-width"]="number"===typeof S?S+"px":S,t),className:"overlay"}),o.default.createElement("div",{ref:X,style:(i={},i["--play"]=p?"running":"paused",i["--direction"]="left"===b?"normal":"reverse",i["--duration"]=M+"s",i["--delay"]=w+"s",i["--iteration-count"]=R?""+R:"infinite",i),className:"marquee"},D),o.default.createElement("div",{style:(c={},c["--play"]=p?"running":"paused",c["--direction"]="left"===b?"normal":"reverse",c["--duration"]=M+"s",c["--delay"]=w+"s",c["--iteration-count"]=R?""+R:"infinite",c),className:"marquee"},D)):null)}}},function(e){e.O(0,[7146,4563,525,9581,4197,5688,515,9774,2888,179],(function(){return n=92849,e(e.s=n);var n}));var n=e.O();_N_E=n}]);