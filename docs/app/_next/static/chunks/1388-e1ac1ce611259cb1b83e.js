(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1388],{1015:function(e,r,n){"use strict";n.d(r,{S:function(){return d},E:function(){return f}});var t,o,i=n(30168),a=n(4942),c=n(54397),u=n(42535);function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){(0,a.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var d=function(e){var r=e.topic,n=e.entity;return(0,u.h)(p({entity:n}),{topic:r},(function(e){return l(l({},e),{},{data:e.data.storyTopic})}))},p=function(e){var r=e.ENTITY;return(0,c.Ps)(t||(t=(0,i.Z)(["\nquery ","_topic($topic: String!){\n  storyTopic(topic: $topic){\n    year\n    genre\n  }\n}\n"])),r)},f=function(e){var r=e.page,n=e.entity,t=e.genre,o=e.decade;return(0,u.h)(g({ENTITY:n.replace(/-/g,"_")}),{page:r,year:parseInt(o),genre:t},(function(e){return l(l({},e),{},{data:e.data.storyTopics})}))},g=function(e){var r=e.ENTITY;return(0,c.Ps)(o||(o=(0,i.Z)(["\nquery ","_topics($page: Int, $genre: String, $year: Int){\n  storyTopics(page: $page, genre: $genre, year: $year){\n    year\n    genre\n    max\n    min\n    words{\n      n\n      p\n    }\n  }\n}\n"])),r)}},26989:function(e,r,n){"use strict";var t=n(4942),o=n(67294),i=n(26447),a=n(90461),c=n(9573),u=n(38732),s=n(98102),l=n(56011),d=n(3694),p=n(85893);function f(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}r.Z=function(e){var r=e.data,n=e.onExit,g=e.topic,y=(0,o.useState)({}),v=y[0],m=y[1],b=function(e,r){return r?"rgba(0,0,0,0.4)":e%2==0?"rgba(0,0,0,0.1)":"inherit"};return(0,o.useEffect)((function(){if(r.topic.data){var e={},n={};r.topic.data.forEach((function(r){e[r.year]||(e[r.year]={}),n[r.genre]||(n[r.genre]={})}));var o={};Object.keys(n).forEach((function(r){return o[r]=function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?f(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}({},e)})),r.topic.data.forEach((function(e){o[e.genre][e.year]=1})),m(o)}}),[r.topic.data]),(0,p.jsxs)("div",{children:[(0,p.jsxs)(i.Z,{direction:"row",style:{marginBottom:"1rem"},children:[(0,p.jsx)(a.Z,{label:g.replace(/,/g," "),onDelete:n}),(0,p.jsx)("div",{style:{flex:1}})]}),(0,p.jsx)("div",{style:{fontSize:"0.6rem",width:"100%",maxHeight:"400px",overflow:"auto"},children:(0,p.jsxs)(c.Z,{size:"small",stickyHeader:!0,children:[(0,p.jsx)(l.Z,{children:(0,p.jsxs)(d.Z,{children:[(0,p.jsx)(s.Z,{children:"\xa0"}),Object.keys(v).slice(0,1).map((function(e){return Object.keys(v[e]).map((function(e){return(0,p.jsx)(s.Z,{align:"center",children:e},e)}))})),(0,p.jsx)(s.Z,{children:"\xa0"})]})}),(0,p.jsx)(u.Z,{children:Object.keys(v).map((function(r,n){return(0,p.jsxs)(d.Z,{style:{backgroundColor:b(n,!1)},children:[(0,p.jsx)(s.Z,{style:{backgroundColor:b(0,r==e.genre)},children:r}),Object.keys(v[r]).map((function(n){return(0,p.jsx)(s.Z,{style:{backgroundColor:b(0,n==e.year||r==e.genre)},align:"center",children:1==v[r][n]?"\u2713":" "})})),(0,p.jsx)(s.Z,{style:{backgroundColor:b(0,r==e.genre)},children:r})]},n)}))})]})})]})}},23620:function(e,r,n){"use strict";n.d(r,{Z:function(){return O}});var t=n(4942),o=n(67294),i=n(29602),a=n(2734),c=n(97005),u=n(74187),s=n(14308),l=n(28973),d=n(74035),p=n(85893);function f(e){return(0,p.jsx)(d.X,{children:(0,p.jsx)(s.Z,{spacing:1,sx:{padding:"1rem",display:"flex",flexGrow:1},children:(0,p.jsx)(l.Z,{variant:"rectangular",height:150})})})}function g(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function y(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?g(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var v=(0,i.ZP)("span")((function(e){var r=e.fontSize,n=e.color,t=e.backgroundColor;e.theme;return{border:"1px solid rgba(0,0,0,0.2)",padding:"0.5rem",marginRight:"1rem",marginBottom:"0.25rem",fontSize:"".concat(r),color:"".concat(n),backgroundColor:"".concat(t),cursor:"pointer",borderRadius:"5px"}})),m=function(e){e.data;var r=e.direction,n=e.words,t=e.max,o=e.min,i=e.onClick,a=e.wordName,u=e.wordCount;return(0,p.jsx)(c.Z,{gradient:!1,direction:r,pauseOnHover:!0,pauseOnClick:!0,children:n.map((function(e,r){return(0,p.jsx)(v,y(y({},h(u(e),t,o)),{},{fontSize:b(u(e),t,o),onClick:function(){return i(a(e).toLowerCase())},children:a(e).toLowerCase()}),r)}))})},b=function(e,r,n){e+=10;for(var t=[1,2,3,5,8,12,16,21,34,55],o=(r-n)/t[t.length-1],i=Math.floor(e/o),a=0;a<t.length;a++){if(i<t[a]){i=a;break}}return"1em"},h=function(e,r,n){for(var t=(0,a.Z)(),o=[3,5,8,13,21,34,55],i=(r-n)/o[o.length-1],c=Math.floor(e/i),s=0;s<o.length;s++)if(c<=o[s]){c=s;break}return c=o.length-1-(c=c>o.length-1?o.length-1:c),(0,u.$)(t,c)},O=function(e){var r=e.data,n=e.max,t=e.min,i=e.onTopicClick,a=e.loading;if(null==r||a)return(0,p.jsx)(f,{});var c="i-".repeat(3).split("-"),u=Math.floor(r.length/4);return(0,p.jsx)("div",{children:c.map((function(a,c){return(0,o.createElement)(m,y(y({},e),{},{onClick:i,max:n,min:t,key:c,words:r.slice(u*c,u*(c+1)),direction:c%2==0?"left":"right"}))}))})}},11388:function(e,r,n){"use strict";n.d(r,{Z:function(){return G}});var t,o=n(4942),i=n(67294),a=n(55619),c={automata:{name:"stories-remakes"},page:{title:"Remakes",description:"",url:function(e){var r=e.entity;return"/".concat(r,"/stories/remakes")}},banner:{showData:!0,renderer:"marquee"}},u=n(15861),s=n(87757),l=n.n(s),d=n(24268),p=n(80105),f=n(11163),g=n(30168),y=n(54397),v=n(42535),m=n(75679);function b(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function h(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?b(Object(n),!0).forEach((function(r){(0,o.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var O,j=function(e){var r=e.page,n=e.entity,t=e.extended,o=e.limit;return(0,v.h)(w({ENTITY:n.replace(/-/g,"_")}),{page:r,extended:t,limit:o},(function(e){return h(h({},e),{},{data:e.data.storyRemakes})}))},w=function(e){var r=e.ENTITY;return(0,y.Ps)(t||(t=(0,g.Z)(["\n","\nquery ","_remakes($page: Int, $limit: Int, $extended: Boolean){\n  storyRemakes(page: $page, limit : $limit, extended : $extended){\n    name\n    count\n    recs{\n      id: _id\n      releaseYear\n      directed{\n        id{\n          ...PersonTinyFragment\n        } \n      }\n    }\n  }\n}\n"])),m.T4,r)},x=n(1015);function P(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function k(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?P(Object(n),!0).forEach((function(r){(0,o.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var E=c.automata.name,Z=(0,d.hg)("".concat(E,"/fetchTopic"),function(){var e=(0,u.Z)(l().mark((function e(r,n){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,x.S)(r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}()),T=(0,d.hg)("".concat(E,"/fetchData"),function(){var e=(0,u.Z)(l().mark((function e(r,n){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.dispatch(D(r));case 2:return r.extended="banner"!==r.renderer,r.limit="banner"===r.renderer?100:10,e.next=6,j(r);case 6:return t=e.sent,"banner"===r.renderer&&(t.data=[{words:t.data}]),e.abrupt("return",t);case 9:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}()),C=(0,d.oM)({name:E,initialState:{params:{renderer:null,entity:null,page:null},data:null,loading:!0,error:null,topic:{data:null,loading:!0,error:null}},reducers:{setParams:function(e,r){e.params=k(k({},e.params),r.payload),"banner"!=e.params.renderer&&1!=e.params.page&&f.default.push("".concat(c.page.url(e.params),"?page=").concat(e.params.page),null,{shallow:!0})}},extraReducers:(O={},(0,o.Z)(O,T.pending,(function(e,r){e.data=null,e.loading=!0,e.error=""})),(0,o.Z)(O,T.fulfilled,(function(e,r){var n=r.payload,t=n.loading,o=n.error,i=n.data;e.data=i,e.loading=t,e.error=o})),(0,o.Z)(O,T.rejected,(function(e,r){var n=r.error;e.data=[],e.loading=!1,e.error=n})),(0,o.Z)(O,Z.pending,(function(e,r){e.topic.data=null,e.topic.loading=!0,e.topic.error=""})),(0,o.Z)(O,Z.fulfilled,(function(e,r){var n=r.payload,t=n.loading,o=n.error,i=n.data;e.topic.data=i,e.topic.loading=t,e.topic.error=o})),(0,o.Z)(O,Z.rejected,(function(e,r){var n=r.error;e.topic.data=[],e.topic.loading=!1,e.topic.error=n})),O)});p.h.reducerManager.add(E,C.reducer);C.reducer;var D=C.actions.setParams,S=n(43332),I=n(49896),N=(n(59231),n(19888),n(82356)),$=n(85893);function L(e){var r=e.image,n=e.name,t=(e.count,e.recs);return(0,$.jsx)(S.Z,{image:r?r.poster:r,text:(0,$.jsx)("div",{children:t&&t.slice(0,3).map((function(e,r){var n,t,o;return null!==(n=e.directed[0])&&void 0!==n&&n.id?(0,$.jsx)(N.Z,{title:e.releaseYear,value:(0,$.jsx)(R,{id:e.id,children:null===(t=e.directed[0])||void 0===t||null===(o=t.id)||void 0===o?void 0:o.name},r)},r):(0,$.jsx)(N.Z,{title:"\xa0",value:(0,$.jsx)(R,{id:e.id,children:e.releaseYear},r)},r)}))}),title:n})}function R(e){var r=e.id,n=e.children;return r?(0,$.jsx)(I.Z,{id:r,children:(0,$.jsx)("div",{children:n})}):n}var _=n(39704),q=(n(39698),n(74035),n(26989)),z=n(23620);function M(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function Y(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?M(Object(n),!0).forEach((function(r){(0,o.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var H={showLines:!0,showTimeline:!1,topic:""};function B(e,r){var n;switch(r.type){case"INIT":return Y(Y({},e),{},{showLines:!0,showTimeline:!1,topic:""});case"SELECT_WORD":return Y(Y({},e),{},{showLines:!1,showTimeline:!0,topic:r.payload.topic});case"EXIT_TIMELINE":return Y(Y({},e),{},{showLines:!0,showTimeline:!1,topic:""});default:throw new Error("operation ".concat(null===(n=r.type)||void 0===n?void 0:n.toUpperCase()," not implemented"))}}var X=function(e){var r=e.props,n=r.max,t=r.min,o=r.words,a=(r.genre,r.year,(0,i.useReducer)(B,H)),c=a[0],u=a[1];return(0,$.jsxs)("div",{children:[(0,$.jsx)(z.Z,{max:n,min:t,data:o,onTopicClick:function(r){e.onTopicClick&&e.onTopicClick(r),u({type:"SELECT_WORD",payload:{topic:r}})},wordName:function(e){return e.name},wordCount:function(e){return e.count}}),(0,$.jsx)("br",{}),c.topic&&(0,$.jsx)(q.Z,{topic:c.topic,data:e.topicData,onExit:function(e){u({type:"EXIT_TIMELINE"})}})]})},W=function(e){var r=(0,_.I0)(),n=(0,_.v9)((function(e){return e["stories-remakes"]}));e.max,e.min,e.words;return(0,$.jsx)("div",{style:{padding:"1rem",width:"100%"},children:(0,$.jsx)(X,{onTopicClick:function(n){n=n.toLowerCase().replace(/ /g,","),e.onTopicClick&&e.onTopicClick(n),r(Z({entity:"movie",topic:n}))},props:e,topicData:n})})};function F(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function A(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?F(Object(n),!0).forEach((function(r){(0,o.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function G(e){return(0,$.jsx)(a.Z,{params:e,config:c,fetch:function(e){return T(A({},e))},item:function(r){return"banner"===e.render?(0,$.jsx)(W,A({},r)):(0,$.jsx)(L,A({full:!0},r))}})}},19888:function(e,r,n){"use strict";n.d(r,{Rx:function(){return a},T5:function(){return c},et:function(){return u}});var t=n(92077),o=n.n(t),i=n(24417),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0a";return o()(Number(e)).format(r)},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return i.default.toSentenceCase(e)},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return i.default.toHeaderCase(e)}},74187:function(e,r,n){"use strict";n.d(r,{$:function(){return a}});n(67294);var t=n(47036),o=n(6767),i=n.n(o);n(7269);function a(e,r){var n="dark"===e.palette.mode;r=r>9?9:r,r=n?10-r:r;var o=i()(10==r||0==r?n?"black":"white":t.Z[100*r]),a=(n?o.darken(.75):o.lighten(.75)).negate();return{backgroundColor:o.fade(.5).rgb().toString(),color:a.rgb().toString()}}},97005:function(e,r,n){var t=n(67294);function o(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var i=o(t),a=function(){return(a=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var o in r=arguments[n])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e}).apply(this,arguments)};!function(e){if(e&&"undefined"!==typeof window){var r=document.createElement("style");r.setAttribute("type","text/css"),r.innerHTML=e,document.head.appendChild(r)}}('.marquee-container {\n  overflow-x: hidden !important;\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative;\n  width: 100%;\n}\n.marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.overlay::before, .overlay::after {\n  background: linear-gradient(to right, var(--gradient-color));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n}\n.overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.marquee {\n  flex: 0 0 auto;\n  min-width: 100%;\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}');r.Z=function(e){var r,n,o,c,u=e.style,s=void 0===u?{}:u,l=e.className,d=void 0===l?"":l,p=e.play,f=void 0===p||p,g=e.pauseOnHover,y=void 0!==g&&g,v=e.pauseOnClick,m=void 0!==v&&v,b=e.direction,h=void 0===b?"left":b,O=e.speed,j=void 0===O?20:O,w=e.delay,x=void 0===w?0:w,P=e.gradient,k=void 0===P||P,E=e.gradientColor,Z=void 0===E?[255,255,255]:E,T=e.gradientWidth,C=void 0===T?200:T,D=e.children,S=e.loop,I=void 0===S?0:S,N=t.useState(0),$=N[0],L=N[1],R=t.useState(0),_=R[0],q=R[1],z=t.useState(0),M=z[0],Y=z[1],H=t.useState(!1),B=H[0],X=H[1],W=t.useRef(null),F=t.useRef(null),A=function(){F.current&&W.current&&(L(W.current.getBoundingClientRect().width),q(F.current.getBoundingClientRect().width)),Y(_<$?$/j:_/j)};t.useEffect((function(){return A(),window.addEventListener("resize",A),function(){window.removeEventListener("resize",A)}})),t.useEffect((function(){X(!0)}),[]);var G="rgba("+Z[0]+", "+Z[1]+", "+Z[2];return i.default.createElement(t.Fragment,null,B?i.default.createElement("div",{ref:W,style:a(a({},s),(r={},r["--pause-on-hover"]=y?"paused":"running",r["--pause-on-click"]=m?"paused":"running",r)),className:d+" marquee-container"},k&&i.default.createElement("div",{style:(n={},n["--gradient-color"]=G+", 1), "+G+", 0)",n["--gradient-width"]="number"===typeof C?C+"px":C,n),className:"overlay"}),i.default.createElement("div",{ref:F,style:(o={},o["--play"]=f?"running":"paused",o["--direction"]="left"===h?"normal":"reverse",o["--duration"]=M+"s",o["--delay"]=x+"s",o["--iteration-count"]=I?""+I:"infinite",o),className:"marquee"},D),i.default.createElement("div",{style:(c={},c["--play"]=f?"running":"paused",c["--direction"]="left"===h?"normal":"reverse",c["--duration"]=M+"s",c["--delay"]=x+"s",c["--iteration-count"]=I?""+I:"infinite",c),className:"marquee"},D)):null)}}}]);