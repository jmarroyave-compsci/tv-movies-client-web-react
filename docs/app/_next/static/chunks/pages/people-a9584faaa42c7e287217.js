(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7563],{70889:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return U}});var n,a=t(67294),o=t(4942),i=t(94219),c=t(93942),s={automata:{name:"stories_tv_shows"},page:{title:"People",description:"a dashboard with information from over ??? people, their professions and age distribution",url:function(){return"/people"}},banner:{showData:!1}},u=t(15861),p=t(87757),l=t.n(p),d=t(24268),f=t(16161),b=t(11163),g=t(30168),O=t(54397),j=t(8300);function h(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function y(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?h(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var m,v=(0,O.Ps)(n||(n=(0,g.Z)(["\n  query GetData\n  {\n    dashboardPeople {\n      alive\n      profession\n      total\n      yearBirth\n    }\n  }\n"]))),P=s.automata.name,w=(0,d.hg)("".concat(P,"/fetchData"),function(){var e=(0,u.Z)(l().mark((function e(r,t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.dispatch(D(r)),"banner"===r.renderer){e.next=7;break}return e.next=4,(0,j.h)(v,{},(function(e){return y(y({},e),{},{data:e.data.dashboardPeople})}));case 4:e.t0=e.sent,e.next=8;break;case 7:e.t0={data:null,loading:!1,error:null};case 8:return e.abrupt("return",e.t0);case 9:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()),x=(0,d.oM)({name:P,initialState:{params:{renderer:null},data:null,loading:!0,error:null},reducers:{setParams:function(e,r){e.params=r.payload,"banner"!==e.params.renderer&&e.params.page>1&&b.default.push("".concat(s.page.url(),"/?page=").concat(e.params.page),null,{shallow:!0})}},extraReducers:(m={},(0,o.Z)(m,w.pending,(function(e,r){e.data=null,e.loading=!0,e.error=""})),(0,o.Z)(m,w.fulfilled,(function(e,r){var t=r.payload,n=t.loading,a=t.error,o=t.data;e.data=o,e.loading=n,e.error=a})),(0,o.Z)(m,w.rejected,(function(e,r){var t=r.error;e.data=[],e.loading=!1,e.error=t})),m)});f.h.reducerManager.add(P,x.reducer);x.reducer;var D=x.actions.setParams,Z=t(52651),_=t(23275),E=t(92401),k=t(8956),S=t(14308),C=t(34532),N=t(85893);var R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.data,t=e.loading,n=(e.route,r||{}),a=n.total,o=n.profession,i=n.yearBirth,c=function(e,r,n){return(0,N.jsx)(_.Z,{xs:12,sm:6,md:6,lg:3,style:{paddingRight:"1rem"},children:(0,N.jsx)(E.Z,{loading:t,title:e,data:r?r.toString():r,icon:n})})},s=function(e,r,n){return(0,N.jsx)(_.Z,{xs:12,sm:6,md:6,lg:6,style:{paddingRight:"1rem"},children:(0,N.jsx)(k.Z,{loading:t,title:e,data:r||{},ranges:n})})};return(0,N.jsxs)(S.Z,{spacing:2,children:[(0,N.jsx)(C.Dx,{children:"general"}),(0,N.jsx)(Z.Z,{justifyContent:"center",fill:!0,children:c("people",a,"people")}),(0,N.jsx)(C.Dx,{children:"segments"}),(0,N.jsxs)(Z.Z,{justifyContent:"center",fill:!0,children:[s("profession",o,[1e3,5e4,1e5]),s("birth year",i,[50,100,1e3,2500,5e3,6e3,7e3])]})]})},B=t(19888);function M(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function T(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?M(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function X(e){var r=(0,c.I0)();(0,a.useEffect)((function(){r(w({renderer:e.render}))}),[]);var t=(0,c.v9)((function(e){return e[s.automata.name]}));if(!t)return(0,N.jsx)("div",{});if(t.data){var n=t.data.total?(0,B.Rx)(t.data.total,"0.0a").toUpperCase():"?";s.page.description=s.page.description.replace("???",n)}return(0,N.jsx)(i.Z,{config:s,type:e.render,url:s.page.url(t.params.entity),data:t.data,dashboard:function(e){return(0,N.jsx)(R,{data:t.data,loading:t.loading})},loading:t.loading,params:T({},t.params),breadcrumbs:e.breadcrumbs})}function q(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function G(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?q(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):q(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var I=function(e){return(0,N.jsx)(X,G(G({},e),{},{render:"page"}))},U=function(e){return(0,N.jsx)(I,{breadcrumbs:"/people"})}},51677:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/people",function(){return t(70889)}])}},function(e){e.O(0,[6499,5685,5218,1216,2328,4467,8969,5650,4219,9709,7798,9774,2888,179],(function(){return r=51677,e(e.s=r);var r}));var r=e.O();_N_E=r}]);