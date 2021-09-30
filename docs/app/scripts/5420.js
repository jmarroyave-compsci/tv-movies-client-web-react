/*! For license information please see 5420.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[5420],{79895:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(45987),n=r(87462),o=r(67294),i=(r(45697),r(86010)),l=r(14670),c=o.forwardRef((function(e,t){var r=e.classes,l=e.className,c=e.component,s=void 0===c?"div":c,d=e.square,p=void 0!==d&&d,u=e.elevation,f=void 0===u?1:u,m=e.variant,y=void 0===m?"elevation":m,h=(0,a.Z)(e,["classes","className","component","square","elevation","variant"]);return o.createElement(s,(0,n.Z)({className:(0,i.Z)(r.root,l,"outlined"===y?r.outlined:r["elevation".concat(f)],!p&&r.rounded),ref:t},h))}));const s=(0,l.Z)((function(e){var t={};return e.shadows.forEach((function(e,r){t["elevation".concat(r)]={boxShadow:e}})),(0,n.Z)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},t)}),{name:"MuiPaper"})(c)},22318:(e,t,r)=>{r.d(t,{Z:()=>p});var a=r(87462),n=r(45987),o=r(67294),i=(r(45697),r(86010)),l=r(14670),c=r(93871),s={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},d=o.forwardRef((function(e,t){var r=e.align,l=void 0===r?"inherit":r,d=e.classes,p=e.className,u=e.color,f=void 0===u?"initial":u,m=e.component,y=e.display,h=void 0===y?"initial":y,v=e.gutterBottom,g=void 0!==v&&v,b=e.noWrap,Z=void 0!==b&&b,E=e.paragraph,x=void 0!==E&&E,w=e.variant,R=void 0===w?"body1":w,$=e.variantMapping,C=void 0===$?s:$,N=(0,n.Z)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),S=m||(x?"p":C[R]||s[R])||"span";return o.createElement(S,(0,a.Z)({className:(0,i.Z)(d.root,p,"inherit"!==R&&d[R],"initial"!==f&&d["color".concat((0,c.Z)(f))],Z&&d.noWrap,g&&d.gutterBottom,x&&d.paragraph,"inherit"!==l&&d["align".concat((0,c.Z)(l))],"initial"!==h&&d["display".concat((0,c.Z)(h))]),ref:t},N))}));const p=(0,l.Z)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(d)},91534:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(67294),n=r(83347),o=r(86688),i=r(72797);class l extends a.Component{render(){var{className:e,cover:t,padding:r,children:o,hero:i,rounded:l}=this.props,c=!0===t?"100vh":"inherit";return l=!0===l,a.createElement(n.Z,{xs:this.renderSection(o,e,c,"1.5rem 0.25rem 2rem 0.25rem",l),sm:this.renderSection(o,e,c,"2rem 1rem 2.5rem 1rem",l),md:this.renderSection(o,e,c,"3rem 2.5rem 3.5rem 2.5rem",l)})}renderSection(e,t,r,n,o){return a.createElement(i.Z,{from:"/core/ui/section"},a.createElement("div",{className:"com-layout-section"},a.createElement("div",{className:`${t}`,style:{boxSizing:"border-box",width:"100%",height:r,padding:n,borderRadius:o?"0.5rem 0.5rem 0 0":0}},e)))}}const c=(0,o.Z)(l)},18319:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});const a=r(39398).default},59221:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var a=r(67294),n=r(80383),o=r(81648),i=r(87125),l=r(93775);const c=function(e){const{data:t,loading:r,route:c}=e,{total:s,profession:d,yearBirth:p}=t,u=(e,t,r)=>a.createElement(o.Z,{xs:12,sm:6,md:6,lg:6,style:{paddingRight:"1rem"}},a.createElement(l.default,{title:e,data:t||{},ranges:r}));return a.createElement("div",{style:{width:"100%"}},a.createElement(n.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},a.createElement(o.Z,{xs:12,sm:12,md:12},a.createElement(n.Z,{justifyContent:"center",fill:!0},((e,t,r)=>a.createElement(o.Z,{xs:12,sm:6,md:4,lg:3,style:{paddingRight:"1rem"}},a.createElement(i.default,{title:"people",data:t?t.toString():t,icon:"people"})))(0,s))),a.createElement(o.Z,{xs:12,sm:12,md:12},a.createElement(n.Z,{justifyContent:"center",fill:!0},u("profession",d,[]),u("birth year",p,[])))))}},281:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});const a=r(33238).default},2075:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var a=r(67294),n=r(91534),o=r(80383),i=r(81648),l=r(59221);const c=function(e){return a.createElement(o.Z,{className:"page-module",fill:!0},a.createElement(i.Z,{fill:!0},a.createElement(n.Z,{className:"section-0"},a.createElement(l.default,e))))}},33238:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var a=r(67294),n=r(83347),o=r(2075);function i(e){return a.createElement(n.Z,{xs:a.createElement(o.default,e)})}},41423:(e,t,r)=>{r.r(t),r.d(t,{QRY_DASHBOARD:()=>c,default:()=>s});var a=r(67294),n=r(18319),o=r(281),i=r(54397),l=r(70846);const c=i.Ps`
  query getDashboard 
{
  dashboardPeople {
    alive
    profession
    total
    yearBirth
  }
}
  `;function s(e){var{loading:t,error:r,data:i}=(0,l.a)(c);const s={loading:t,error:r,data:i=i?i.dashboardPeople:{},breadcrumbs:[{name:"people"}]};return a.createElement(n.default,s,a.createElement(o.default,s))}},69921:(e,t)=>{var r=60103,a=60106,n=60107,o=60108,i=60114,l=60109,c=60110,s=60112,d=60113,p=60120,u=60115,f=60116,m=60121,y=60122,h=60117,v=60129,g=60131;if("function"==typeof Symbol&&Symbol.for){var b=Symbol.for;r=b("react.element"),a=b("react.portal"),n=b("react.fragment"),o=b("react.strict_mode"),i=b("react.profiler"),l=b("react.provider"),c=b("react.context"),s=b("react.forward_ref"),d=b("react.suspense"),p=b("react.suspense_list"),u=b("react.memo"),f=b("react.lazy"),m=b("react.block"),y=b("react.server.block"),h=b("react.fundamental"),v=b("react.debug_trace_mode"),g=b("react.legacy_hidden")}var Z=s,E=u;t.ForwardRef=Z,t.Memo=E,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===i||e===v||e===o||e===d||e===p||e===g||"object"==typeof e&&null!==e&&(e.$$typeof===f||e.$$typeof===u||e.$$typeof===l||e.$$typeof===c||e.$$typeof===s||e.$$typeof===h||e.$$typeof===m||e[0]===y)},t.typeOf=function(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case n:case i:case o:case d:case p:return e;default:switch(e=e&&e.$$typeof){case c:case s:case f:case u:case l:return e;default:return t}}case a:return t}}}},59864:(e,t,r)=>{e.exports=r(69921)},73727:(e,t,r)=>{r.d(t,{OL:()=>v});var a=r(5977),n=(r(51721),r(67294)),o=r(37531),i=(r(45697),r(87462)),l=r(63366),c=r(2177);n.Component,n.Component;var s=function(e,t){return"function"==typeof e?e(t):e},d=function(e,t){return"string"==typeof e?(0,o.ob)(e,null,null,t):e},p=function(e){return e},u=n.forwardRef;void 0===u&&(u=p);var f=u((function(e,t){var r=e.innerRef,a=e.navigate,o=e.onClick,c=(0,l.Z)(e,["innerRef","navigate","onClick"]),s=c.target,d=(0,i.Z)({},c,{onClick:function(e){try{o&&o(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||s&&"_self"!==s||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),a())}});return d.ref=p!==u&&t||r,n.createElement("a",d)})),m=u((function(e,t){var r=e.component,m=void 0===r?f:r,y=e.replace,h=e.to,v=e.innerRef,g=(0,l.Z)(e,["component","replace","to","innerRef"]);return n.createElement(a.s6.Consumer,null,(function(e){e||(0,c.Z)(!1);var r=e.history,a=d(s(h,e.location),e.location),l=a?r.createHref(a):"",f=(0,i.Z)({},g,{href:l,navigate:function(){var t=s(h,e.location),a=(0,o.Ep)(e.location)===(0,o.Ep)(d(t));(y||a?r.replace:r.push)(t)}});return p!==u?f.ref=t||v:f.innerRef=v,n.createElement(m,f)}))})),y=function(e){return e},h=n.forwardRef;void 0===h&&(h=y);var v=h((function(e,t){var r=e["aria-current"],o=void 0===r?"page":r,p=e.activeClassName,u=void 0===p?"active":p,f=e.activeStyle,v=e.className,g=e.exact,b=e.isActive,Z=e.location,E=e.sensitive,x=e.strict,w=e.style,R=e.to,$=e.innerRef,C=(0,l.Z)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return n.createElement(a.s6.Consumer,null,(function(e){e||(0,c.Z)(!1);var r=Z||e.location,l=d(s(R,r),r),p=l.pathname,N=p&&p.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),S=N?(0,a.LX)(r.pathname,{path:N,exact:g,sensitive:E,strict:x}):null,k=!!(b?b(S,r):S),B="function"==typeof v?v(k):v,A="function"==typeof w?w(k):w;k&&(B=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((function(e){return e})).join(" ")}(B,u),A=(0,i.Z)({},A,f));var _=(0,i.Z)({"aria-current":k&&o||null,className:B,style:A,to:l},C);return y!==h?_.ref=t||$:_.innerRef=$,n.createElement(m,_)}))}))}}]);