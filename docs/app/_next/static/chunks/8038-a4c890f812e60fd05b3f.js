"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8038],{78038:function(e,r,t){t.d(r,{Z:function(){return pe}});var n,o=t(4942),c=t(67294),i=t(55619),a={automata:{name:"story-genre-timeline"},page:{title:"Genre timeline",description:"",url:function(e){var r=e.entity,t=e.genre,n=e.page;return"/".concat(r,"/stories/genre-timeline?genre=").concat(t,"&page=").concat(n)}},banner:{showData:!0,renderer:"marquee"}},u=t(15861),s=t(87757),l=t.n(s),p=t(24268),f=t(80105),d=t(11163),g=t(1015);function y(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function j(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?y(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var O=a.automata.name,b=(0,p.hg)("".concat(O,"/fetchTopic"),function(){var e=(0,u.Z)(l().mark((function e(r,t){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,g.S)(r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()),h=(0,p.hg)("".concat(O,"/fetchData"),function(){var e=(0,u.Z)(l().mark((function e(r,t){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.dispatch(v(r)),r.decade=0,e.next=4,(0,g.E)(r);case 4:return(n=e.sent).data=[{timeline:n.data}],e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}()),m=(0,p.oM)({name:O,initialState:{params:{renderer:null,entity:null,page:null,genre:null},data:null,loading:!0,error:null,topic:{data:null,loading:!0,error:null}},reducers:{setParams:function(e,r){e.params=j(j({},e.params),r.payload),"banner"!=e.params.renderer&&d.default.push("".concat(a.page.url(e.params)),null,{shallow:!0})}},extraReducers:(n={},(0,o.Z)(n,h.pending,(function(e,r){e.data=null,e.loading=!0,e.error=""})),(0,o.Z)(n,h.fulfilled,(function(e,r){var t=r.payload,n=t.loading,o=t.error,c=t.data;e.data=c,e.loading=n,e.error=o})),(0,o.Z)(n,h.rejected,(function(e,r){var t=r.error;e.data=[],e.loading=!1,e.error=t})),(0,o.Z)(n,b.pending,(function(e,r){e.topic.data=null,e.topic.loading=!0,e.topic.error=""})),(0,o.Z)(n,b.fulfilled,(function(e,r){var t=r.payload,n=t.loading,o=t.error,c=t.data;e.topic.data=c,e.topic.loading=n,e.topic.error=o})),(0,o.Z)(n,b.rejected,(function(e,r){var t=r.error;e.topic.data=[],e.topic.loading=!1,e.topic.error=t})),n)});f.h.reducerManager.add(O,m.reducer);m.reducer;var v=m.actions.setParams,w=t(2535),P=t(74035),x=t(39704),E=t(26989),Z=t(2734),D=t(74187),C=t(9573),S=t(38732),k=t(98102),T=t(56011),I=t(3694),N=t(85893);function R(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function _(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?R(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):R(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var L=function(e){var r=(0,Z.Z)(),t=e.data,n=e.topic,o=(0,c.useState)({}),i=o[0],a=o[1];return(0,c.useEffect)((function(){if(t){var e={};t.forEach((function(r){e[r.year]||(e[r.year]={})}));var r={};Object.keys(e).forEach((function(e){return r[e]={}})),t.forEach((function(e){r[e.year]={words:e.words}})),a(r)}}),[t]),(0,N.jsx)("div",{children:(0,N.jsx)("div",{style:{fontSize:"0.6rem",width:"100%",maxHeight:"400px",overflow:"auto"},children:(0,N.jsxs)(C.Z,{size:"small",stickyHeader:!0,children:[(0,N.jsx)(T.Z,{children:(0,N.jsx)(I.Z,{children:Object.keys(i).map((function(e){return(0,N.jsx)(k.Z,{align:"center",children:e},e)}))})}),(0,N.jsx)(S.Z,{children:[0,1,2,3,4,5,6,7,8,9].map((function(t){return(0,N.jsx)(I.Z,{children:Object.keys(i).map((function(o,c){var a;return(0,N.jsx)(k.Z,{onClick:function(){var r;return function(r){e.onTopicClick&&e.onTopicClick(r)}(null===(r=i[o].words[t])||void 0===r?void 0:r.p)},style:_({fontWeight:n===(null===(a=i[o].words[t])||void 0===a?void 0:a.p)?"bold":"inherit"},(0,D.$)(r,t)),align:"center",children:i[o].words[t]?i[o].words[t].p.replace(/,/g," "):"-"},c)}))},t)}))})]})})})},G=t(14308),M=t(28973);function F(e){return(0,N.jsx)(P.X,{children:(0,N.jsx)(G.Z,{spacing:1,sx:{padding:"1rem",display:"flex",flexGrow:1},children:(0,N.jsx)(M.Z,{variant:"rectangular",height:300})})})}function A(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function H(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?A(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var W={showLines:!0,showTimeline:!1,topic:""};function U(e,r){var t;switch(r.type){case"INIT":return H(H({},e),{},{showLines:!0,showTimeline:!1,topic:""});case"SELECT_WORD":return H(H({},e),{},{showLines:!1,showTimeline:!0,topic:r.payload.topic});case"EXIT_TIMELINE":return H(H({},e),{},{showLines:!0,showTimeline:!1,topic:""});default:throw new Error("operation ".concat(null===(t=r.type)||void 0===t?void 0:t.toUpperCase()," not implemented"))}}var Q=function(e){var r=(0,x.I0)(),t=(0,x.v9)((function(e){return e["story-genre-timeline"]})),n=e.data,o=e.genre,i=e.year,a=e.loading,u=(0,c.useReducer)(U,W),s=u[0],l=u[1];return null==n||a?(0,N.jsx)(F,{}):(0,N.jsxs)("div",{children:[(0,N.jsx)(L,H(H({},e),{},{topic:s.topic,data:n,onTopicClick:function(e){l({type:"SELECT_WORD",payload:{topic:e}}),r(b({entity:"movie",topic:e}))}})),(0,N.jsx)("br",{}),s.showTimeline&&(0,N.jsx)(E.Z,H(H({},e),{},{topic:s.topic,genre:o,year:i,data:t,onExit:function(e){l({type:"EXIT_TIMELINE"})}}))]})};function X(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function z(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?X(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):X(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var J=function(e){var r=e.genre,t=e.header,n=void 0===t||t;return(0,N.jsxs)("div",{style:{padding:"1rem",width:"100%"},children:[n&&(0,N.jsx)(P.RQ,{children:(0,N.jsx)(w.Dx,{children:r.toUpperCase()})}),(0,N.jsx)(Q,z(z({},e),{},{data:e.timeline}))]})},q=t(45688),B=t(24463),V=t(31843),$=t(86547),K=t(15121),Y=t(52871),ee=t(72642);function re(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function te(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?re(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):re(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var ne={genre:null};function oe(e,r){var t;switch(r.type){case"INIT":return te(te({},e),{},{genre:r.payload.genre?r.payload.genre:e.genre});case"GENRE_CHANGE":return te(te({},e),{},{genre:r.payload});default:throw new Error("operation ".concat(null===(t=r.type)||void 0===t?void 0:t.toUpperCase()," not implemented"))}}function ce(e){var r=(0,c.useState)(!1),t=(r[0],r[1],(0,c.useReducer)(oe,ne)),n=t[0],o=t[1],i=e.params,a=e.onChange,u=(0,c.useMemo)((function(){return(0,Y.J)().map((function(e){return{label:e,id:e}}))}),[]);(0,c.useEffect)((function(){o({type:"INIT",payload:{genre:u.find((function(e){return e.id==i.genre}))}})}),[i]);return n.genre?(0,N.jsx)(P.RQ,{children:(0,N.jsxs)(G.Z,{spacing:2,children:[(0,N.jsx)(K.Z,{id:"genre",disableClearable:!0,options:u,value:n.genre,onChange:function(e,r){return o({type:"GENRE_CHANGE",payload:r})},sx:{width:300},renderInput:function(e){return(0,N.jsx)($.Z,te(te({},e),{},{label:"Genre"}))}}),(0,N.jsx)(P.RQ,{children:(0,N.jsx)(ee.Z,{variant:"outlined",onClick:function(){!function(){var e={genre:n.genre.id};a&&a(e)}()},children:"Filter"})})]})}):null}function ie(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function ae(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ie(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ie(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var ue=function(e){var r=e.data,t=e.loading,n=e.fetch,o=e.params;return e.item,(0,N.jsxs)(G.Z,{children:[(0,N.jsx)(B.Z,{onChange:function(e){n(ae(ae({},e),{},{page:1}))},filters:function(e){var r=e.onChange;return(0,N.jsx)(ce,{onChange:r,params:o})}}),(0,N.jsx)(V.Z,{sx:{padding:"1rem"},children:(0,N.jsx)(Q,{loading:t,data:r?r[0].timeline:null})})]})};function se(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function le(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?se(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):se(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function pe(e){return(0,N.jsx)(i.Z,{params:e,config:a,fetch:function(e){return h(e)},item:function(r){return(0,N.jsx)(J,le(le({type:e.type},r),{},{header:"banner"!=e.render}))},mainCol:function(e){return(0,N.jsx)(ue,le({},e))},customTitle:function(e){return"".concat(a.page.title,": ").concat(e.genre)},customDescription:function(e){return e.genre?(0,N.jsx)(q.C,{tag:e.genre}):""},customUrl:function(e){return a.page.url(e)}})}},24463:function(e,r,t){t.d(r,{Z:function(){return l}});var n=t(67294),o=(t(74035),t(58862),t(72642)),c=t(71508),i=t(60181),a=t(23508),u=t(62318),s=t(85893);function l(e){var r=e.filters,t=(0,n.useState)(!1),l=t[0],p=t[1];var f=function(e){p(e)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Z,{onClick:function(){return f(!l)},endIcon:l?(0,s.jsx)(i.Z,{}):(0,s.jsx)(a.Z,{}),children:"Filter"}),(0,s.jsx)(u.ZP,{anchor:"top",open:l,onClose:function(){return f(!1)},children:(0,s.jsx)(c.Z,{sx:{padding:"2rem 2rem 0rem 2rem",backgroundColor:"background.paper"},children:r({onChange:function(r){e.onChange&&e.onChange(r),f(!1)}})})})]})}},52871:function(e,r,t){t.d(r,{J:function(){return n}});var n=function(e){var r=e.all,t=void 0===r||r,n=["all","Action","Adult","Adventure","Animation","Biography","Comedy","Crime","Documentary","Drama","Family","Fantasy","Film-Noir","Game-Show","History","Horror","Music","Musical","Mystery","News","Reality-TV","Romance","Sci-Fi","Short","Sport","Talk-Show","Thriller","War","Western"].map((function(e){return e.toLowerCase()}));return t||(n=n.filter((function(e){return"all"!=e}))),n}}}]);