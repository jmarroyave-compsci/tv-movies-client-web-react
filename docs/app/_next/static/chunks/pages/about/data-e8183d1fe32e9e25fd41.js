(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2920],{74263:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var n=r(4942),a=(r(67294),r(55619)),o={automata:{name:"about/data"},page:{title:"Data?",description:"source of the data used in this project",url:function(){return"/about/data"}},banner:{showData:!1}},i=r(40915),c=r(14308),l=r(2348),s=r(34532),u=JSON.parse('[{"_id":"615b3193243c3886a019fa34","added":"01-01","name":"Kaggle: netflix show","url":"https://www.kaggle.com/shivamb/netflix-shows"},{"_id":"615b3194243c3886a019fa35","added":"01-01","name":"IMDB","url":"https://www.imdb.com/interfaces/"},{"_id":"615b3194243c3886a019fa36","added":"03-01","name":"Oscar awards","url":"https://datahub.io/rufuspollock/oscars-nominees-and-winners"},{"_id":"615b3194243c3886a019fa37","added":"03-02","name":"Golden Globes awards","url":"https://www.kaggle.com/unanimad/golden-globe-awards"},{"_id":"615b3194243c3886a019fa38","added":"03-02","name":"Emmy awards","url":"https://www.kaggle.com/unanimad/emmy-awards"},{"_id":"615b3194243c3886a019fa39","added":"03-02","name":"Podcasts","url":"https://data.world/brandon-telle/podcasts-dataset"},{"_id":"615b3194243c3886a019fa39","added":"08-06","name":"Quotes","url":"https://quotestats.com/"}]'),d=r(85893);function p(e){var t=u;return(0,d.jsxs)(c.Z,{children:[(0,d.jsx)(s.Dx,{children:"Sources"}),(0,d.jsx)(l.Z,{tableData:t,tableDataExclude:[0],showHeader:!1})]})}var b=JSON.parse('[{"added":"2021-10-20","name":"Festivals","url":"https://jmarroyave-data-server-01.herokuapp.com/repos/festivals.zip"}]');function f(e){var t=b;return(0,d.jsxs)(c.Z,{children:[(0,d.jsx)(s.Dx,{children:"Repositories"}),(0,d.jsx)(l.Z,{tableData:t,tableDataExclude:[0],showHeader:!1})]})}var g=function(e){return(0,d.jsxs)(c.Z,{children:[(0,d.jsx)(i.Z,{children:(0,d.jsx)(p,{})}),(0,d.jsx)(i.Z,{children:(0,d.jsx)(f,{})})]})};function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){return(0,d.jsx)(a.Z,{params:e,config:o,mainCol:function(e){return(0,d.jsx)(g,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e))}})}},2348:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var n=r(4942),a=(r(67294),r(29602)),o=r(41120),i=r(9573),c=r(38732),l=r(98102),s=r(89755),u=r(56011),d=r(3694),p=r(13874);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=function(e){return{warningTableHeader:{color:p.MA[0]},primaryTableHeader:{color:p.lr[0]},dangerTableHeader:{color:p.E7[0]},successTableHeader:{color:p.nq[0]},infoTableHeader:{color:p.bE[0]},roseTableHeader:{color:p.An[0]},grayTableHeader:{color:p.X_[0]},table:{marginBottom:"0",width:"100%",maxWidth:"100%",backgroundColor:"transparent",borderSpacing:"0",borderCollapse:"collapse"},tableHeadCell:f(f({color:"inherit"},p.Df),{},{"&, &$tableCell":{fontSize:"1em"}}),tableCell:f(f({},p.Df),{},{lineHeight:"1.42857143",padding:"12px 8px",verticalAlign:"middle",fontSize:"0.8125rem"}),tableResponsive:{width:"100%",marginBottom:e.spacing(2),overflowX:"auto"},tableHeadRow:{height:"56px",color:"inherit",display:"table-row",outline:"none",verticalAlign:"middle"},tableBodyRow:{height:"48px",color:"inherit",display:"table-row",outline:"none",verticalAlign:"middle"}}},m=r(360),h=r(85893),x=(0,o.Z)(g),w=(0,a.ZP)(l.Z)((function(e){var t,r=e.theme;return t={},(0,n.Z)(t,"&.".concat(s.Z.head),{backgroundColor:r.palette.common.black,color:r.palette.common.white}),(0,n.Z)(t,"&.".concat(s.Z.body),{fontSize:"0.75rem"}),t})),O=(0,a.ZP)(d.Z)((function(e){return{"&:nth-of-type(odd)":{backgroundColor:e.theme.palette.action.hover},"&:last-child td, &:last-child th":{border:0}}})),j=function(e){var t=x(),r=e.tableHead,n=e.tableHeader,a=e.tableData,o=e.tableHeaderColor,l=e.showHeader,s=e.tableDataExclude;return r=r||n,!0===l&&!r||!a?"No Data":(0,h.jsx)("div",{className:t.tableResponsive,children:(0,h.jsxs)(i.Z,{className:t.table,children:[void 0!==r&&l?(0,h.jsx)(u.Z,{className:t[o+"TableHeader"],children:(0,h.jsx)(O,{className:t.tableHeadRow,children:r.map((function(e,r){return(0,h.jsx)(w,{className:t.tableCell+" "+t.tableHeadCell,children:e},r)}))})}):null,(0,h.jsx)(c.Z,{children:(0,m.Yu)(a,(function(e,r){return(0,h.jsx)(O,{className:t.tableBodyRow,children:(0,m.Yu)(e,(function(e,r){if(!s||!s.includes(r))return(0,h.jsx)(w,{className:t.tableCell,children:e},r)}))},r)}))})]})})};j.defaultProps={tableHeaderColor:"gray",showHeader:!0};var y=j},13874:function(e,t,r){"use strict";r.d(t,{FT:function(){return h},yF:function(){return T},E7:function(){return b},Df:function(){return O},X_:function(){return m},oo:function(){return w},Yi:function(){return S},bE:function(){return f},hF:function(){return E},lr:function(){return s},Bp:function(){return _},An:function(){return g},aT:function(){return H},nq:function(){return p},rt:function(){return k},MA:function(){return d},zQ:function(){return x}});var n=r(4942),a=(r(67294),r(57850));function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var c,l=(0,r(59753).g)("light"),s=[(c=l.palette.primary).main,c.light,c.dark,c.contrastText],u=[(c=l.palette.secondary).main,c.light,c.dark,c.contrastText],d=[(c=l.palette.warning).main,c.light,c.dark,c.contrastText],p=[(c=l.palette.success).main,c.light,c.dark,c.contrastText],b=[(c=l.palette.error).main,c.light,c.dark,c.contrastText],f=[(c=l.palette.info).main,c.light,c.dark,c.contrastText],g=["#e91e63","#ec407a","#d81b60","#eb3573"],m=["#999","#777","#3C4858","#AAAAAA","#D2D2D2","#DDD","#b4b4b4","#555555","#333","#a9afbb","#eee","#e7e7e7"],h="#000",x="#FFF",w=((0,a.Z)({palette:{primary:{main:s[0]},secondary:{main:u[0]}}}),function(e){e=(e+="").replace("#","");if(!/[0-9A-Fa-f]/g.test(e)||3!==e.length&&6!==e.length)throw new Error("input is not a valid hex color.");if(3===e.length){var t=e[0],r=e[1],n=e[2];e=t+t+r+r+n+n}var a=(e=e.toUpperCase())[0]+e[1],o=e[2]+e[3],i=e[4]+e[5];return parseInt(a,16)+", "+parseInt(o,16)+", "+parseInt(i,16)}),O={fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:"300",lineHeight:"1.5em"},j=(w(h),w(h),w(h),{boxShadow:"0 4px 20px 0 rgba("+w(h)+",.14), 0 7px 10px -5px rgba("+w(s[0])+",.4)"}),y={boxShadow:"0 4px 20px 0 rgba("+w(h)+",.14), 0 7px 10px -5px rgba("+w(f[0])+",.4)"},v={boxShadow:"0 4px 20px 0 rgba("+w(h)+",.14), 0 7px 10px -5px rgba("+w(p[0])+",.4)"},P={boxShadow:"0 4px 20px 0 rgba("+w(h)+",.14), 0 7px 10px -5px rgba("+w(d[0])+",.4)"},D={boxShadow:"0 4px 20px 0 rgba("+w(h)+",.14), 0 7px 10px -5px rgba("+w(b[0])+",.4)"},Z={boxShadow:"0 4px 20px 0 rgba("+w(h)+",.14), 0 7px 10px -5px rgba("+w(g[0])+",.4)"},k=i({background:"linear-gradient(60deg, "+d[1]+", "+d[2]+")"},P),H=i({background:"linear-gradient(60deg, "+p[1]+", "+p[2]+")"},v),T=i({background:"linear-gradient(60deg, "+b[1]+", "+b[2]+")"},D),S=i({background:"linear-gradient(60deg, "+f[1]+", "+f[2]+")"},y),E=i({background:"linear-gradient(60deg, "+s[1]+", "+s[2]+")"},j),_=i({background:"linear-gradient(60deg, "+g[1]+", "+g[2]+")"},Z),C=(i({margin:"0 20px 10px",paddingTop:"10px",borderTop:"1px solid "+m[10],height:"auto"},O),w(h),w(h),w(h),w(h),w(h),{color:m[2],textDecoration:"none",fontWeight:"300",marginTop:"30px",marginBottom:"25px",minHeight:"32px",fontFamily:"'Roboto', 'Helvetica', 'Arial', sans-serif","& small":{color:m[1],fontWeight:"400",lineHeight:"1"}});i(i({},C),{},{marginTop:"0",marginBottom:"3px",minHeight:"auto","& a":i(i({},C),{},{marginTop:".625rem",marginBottom:"0.75rem",minHeight:"auto"})})},34532:function(e,t,r){"use strict";r.d(t,{Dx:function(){return a},DK:function(){return o}});r(67294);var n=r(29602),a=(r(85893),(0,n.ZP)("h2")({padding:"0",margin:"1rem 0 0.5rem 0",textTransform:"lowercase",fontSize:"2.5rem"})),o=(0,n.ZP)("h3")({marginTop:"1rem",marginBottom:"0rem"});(0,n.ZP)("div")({fontSize:"0.9rem",lineHeight:"1rem",marginBottom:"0.5rem"})},96136:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});r(67294);var n=r(4942),a=r(74263),o=r(85893);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=function(e){return(0,o.jsx)(a.Z,c(c({},e),{},{render:"page"}))},s=function(e){return(0,o.jsx)(l,{breadcrumbs:"/about/data"})}},72077:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about/data",function(){return r(96136)}])}},function(e){e.O(0,[6499,5685,4467,5619,9774,2888,179],(function(){return t=72077,e(e.s=t);var t}));var t=e.O();_N_E=t}]);