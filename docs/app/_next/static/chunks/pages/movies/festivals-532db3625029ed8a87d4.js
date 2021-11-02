(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4537],{42341:function(e,r,t){"use strict";t(67294);var n=t(89260),a=t(85893);r.Z=function(e){var r=e.id,t=e.children,o=e.box;return(0,a.jsx)(n.Z,{box:o,to:"/movies/festivals/".concat(r),children:t})}},43332:function(e,r,t){"use strict";t(67294);var n=t(65295),a=t(18515),o=t(42643),i=t(54962),c=t(49161),s=t(2658),u=t(360),l=t(9092),p=t(47386),d=t(27054),f=t(85893),b=(0,d.Z)((function(e){return{headerContent:{width:"100%"},headerRoot:{width:"100%"}}})),g="".concat(l.Z.APP.BASE_PATH).concat(l.Z.DEFAULTS.IMAGE_PLACEHOLDER),h=function(e){return e.target.src=g};r.Z=function(e){var r,t=b(),d=e.title,g=e.subtitle,v=e.text,O=e.image,j=e.imageHeight,m=void 0===j?180:j,y=e.noImage,P=e.actions,w=0;g=g||"";return y=!!y,O=O||l.Z.DEFAULTS.IMAGE_PLACEHOLDER,(0,f.jsxs)(n.Z,{style:{flexGrow:1,width:"100%"},children:[(0,f.jsx)(a.Z,{sx:{width:"100%"},classes:{content:t.headerContent,root:t.headerRoot},title:(0,f.jsx)(p.ZP,{title:d,placement:"bottom-start",children:(0,f.jsx)("div",{style:{display:"inline-block",width:"100%"},children:(0,f.jsx)(s.Z,{noWrap:!0,variant:"subtitle",style:{display:"inline-block",width:"100%"},children:d})})}),subheader:g}),!y&&(0,f.jsx)(i.Z,{height:m||null,image:null!==(r=O)&&void 0!==r&&r.startsWith("/")?"".concat(l.Z.APP.BASE_PATH).concat(O):O,component:"img",onError:h}),v&&(0,f.jsx)(o.Z,{children:(0,u.HD)(v)?(0,f.jsx)(s.Z,{variant:"body2",color:"text.secondary",component:"div",children:v}):v}),P&&P.length>0&&(0,f.jsx)(c.Z,{children:P.map((function(e){return(0,f.jsx)("div",{children:e},w++)}))})]})}},48804:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return L}});var n,a=t(67294),o=t(11163),i=t(4942),c=(t(2885),t(55619)),s=t(93942),u={automata:{name:"page_movies_festivals"},page:{title:"Movie Festivals",description:"",url:function(){return"/movies/festivals"}},banner:{showData:!0}},l=t(15861),p=t(87757),d=t.n(p),f=t(24268),b=t(16161),g=t(30168),h=t(54397),v=t(8300);function O(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function j(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?O(Object(t),!0).forEach((function(r){(0,i.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var m,y=(0,h.Ps)(n||(n=(0,g.Z)(["\n  query GetData($page: Int)\n  {\n    movieFestivals(page: $page) {\n      id\n      name\n      wikiTopic\n      established\n      country\n      continent\n    }\n  }\n"]))),P=u.automata.name,w=(0,f.hg)("".concat(P,"/fetchData"),function(){var e=(0,l.Z)(d().mark((function e(r,t){var n;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dispatch(Z(r)),e.next=3,a=r.page,(0,v.h)(y,{page:a},(function(e){return j(j({},e),{},{data:e.data.movieFestivals})}));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}var a}),e)})));return function(r,t){return e.apply(this,arguments)}}()),x=(0,f.oM)({name:P,initialState:{params:{renderer:null,page:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,r){e.params=r.payload,"banner"!==e.params.renderer&&e.params.page>1&&o.default.push("".concat(u.page.url(),"/?page=").concat(e.params.page),null,{shallow:!0})}},extraReducers:(m={},(0,i.Z)(m,w.pending,(function(e,r){e.data=null,e.loading=!0,e.error=""})),(0,i.Z)(m,w.fulfilled,(function(e,r){var t=r.payload,n=t.loading,a=t.error,o=t.data;e.data=o,e.loading=n,e.error=a})),(0,i.Z)(m,w.rejected,(function(e,r){var t=r.error;e.data=[],e.loading=!1,e.error=t})),m)});b.h.reducerManager.add(P,x.reducer);x.reducer;var Z=x.actions.setParams,E=t(43332),D=t(42341),_=t(85893);function A(e){var r=e.id,t=e.name;e.box;return(0,_.jsx)(D.Z,{box:!0,id:r,entity:t,children:(0,_.jsx)(E.Z,{title:t})})}function k(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function S(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?k(Object(t),!0).forEach((function(r){(0,i.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function C(e){var r=(0,s.I0)(),t=(0,s.v9)((function(e){return e[u.automata.name]}));return(0,a.useEffect)((function(){null==t&&r(w({renderer:e.render,page:e.page}))}),[]),t?(0,_.jsx)(c.Z,{config:u,type:t.params.renderer,url:u.page.url(t.params.entity),data:t.data,loading:t.loading,error:t.error,onPageChange:function(e){return r(w(S(S({},t.params),{},{page:e})))},item:function(e){return(0,_.jsx)(A,S({full:!0},e))},params:S({},t.params),breadcrumbs:e.breadcrumbs}):(0,_.jsx)("div",{})}function T(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function H(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?T(Object(t),!0).forEach((function(r){(0,i.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var I=function(e){return(0,_.jsx)(C,H(H({},e),{},{render:"list"}))},L=function(e){var r=(0,o.useRouter)(),t=(r.query?r.query:{}).page;return t=t?parseInt(t):1,(0,_.jsx)(I,{breadcrumbs:"/movies/stories/awards",page:t})}},9849:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/movies/festivals",function(){return t(48804)}])}},function(e){e.O(0,[6499,5685,4193,5619,9774,2888,179],(function(){return r=9849,e(e.s=r);var r}));var r=e.O();_N_E=r}]);