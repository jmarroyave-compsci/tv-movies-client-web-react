/*! For license information please see 2293.js.LICENSE.txt */
(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[2293,8534,4493],{95318:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},20862:(e,t,r)=>{var n=r(50008).default;function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(o=function(e){return e?r:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=o(t);if(r&&r.has(e))return r.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var l=i?Object.getOwnPropertyDescriptor(e,c):null;l&&(l.get||l.set)?Object.defineProperty(a,c,l):a[c]=e[c]}return a.default=e,r&&r.set(e,a),a},e.exports.default=e.exports,e.exports.__esModule=!0},50008:e=>{function t(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=t=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),t(r)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},17812:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(87462),o=r(45987),a=r(67294),i=(r(45697),r(86010)),c=r(14670),l=r(59693),s=r(54720),u=r(93871),d=a.forwardRef((function(e,t){var r=e.edge,c=void 0!==r&&r,l=e.children,d=e.classes,p=e.className,f=e.color,m=void 0===f?"default":f,y=e.disabled,h=void 0!==y&&y,v=e.disableFocusRipple,g=void 0!==v&&v,b=e.size,Z=void 0===b?"medium":b,x=(0,o.Z)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return a.createElement(s.Z,(0,n.Z)({className:(0,i.Z)(d.root,p,"default"!==m&&d["color".concat((0,u.Z)(m))],h&&d.disabled,"small"===Z&&d["size".concat((0,u.Z)(Z))],{start:d.edgeStart,end:d.edgeEnd}[c]),centerRipple:!0,focusRipple:!g,disabled:h,ref:t},x),a.createElement("span",{className:d.label},l))}));const p=(0,c.Z)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:(0,l.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,l.Fq)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,l.Fq)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(d)},92863:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(87462),o=r(45987),a=r(67294),i=(r(45697),r(86010)),c=r(14670),l=r(93871),s=a.forwardRef((function(e,t){var r=e.classes,c=e.className,s=e.color,u=void 0===s?"inherit":s,d=e.component,p=void 0===d?"span":d,f=e.fontSize,m=void 0===f?"medium":f,y=(0,o.Z)(e,["classes","className","color","component","fontSize"]);return a.createElement(p,(0,n.Z)({className:(0,i.Z)("material-icons",r.root,c,"inherit"!==u&&r["color".concat((0,l.Z)(u))],"default"!==m&&"medium"!==m&&r["fontSize".concat((0,l.Z)(m))]),"aria-hidden":!0,ref:t},y))}));s.muiName="Icon";const u=(0,c.Z)((function(e){return{root:{userSelect:"none",fontSize:e.typography.pxToRem(24),width:"1em",height:"1em",overflow:"hidden",flexShrink:0},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(36)}}}),{name:"MuiIcon"})(s)},79895:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(45987),o=r(87462),a=r(67294),i=(r(45697),r(86010)),c=r(14670),l=a.forwardRef((function(e,t){var r=e.classes,c=e.className,l=e.component,s=void 0===l?"div":l,u=e.square,d=void 0!==u&&u,p=e.elevation,f=void 0===p?1:p,m=e.variant,y=void 0===m?"elevation":m,h=(0,n.Z)(e,["classes","className","component","square","elevation","variant"]);return a.createElement(s,(0,o.Z)({className:(0,i.Z)(r.root,c,"outlined"===y?r.outlined:r["elevation".concat(f)],!d&&r.rounded),ref:t},h))}));const s=(0,c.Z)((function(e){var t={};return e.shadows.forEach((function(e,r){t["elevation".concat(r)]={boxShadow:e}})),(0,o.Z)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},t)}),{name:"MuiPaper"})(l)},22318:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var n=r(87462),o=r(45987),a=r(67294),i=(r(45697),r(86010)),c=r(14670),l=r(93871),s={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},u=a.forwardRef((function(e,t){var r=e.align,c=void 0===r?"inherit":r,u=e.classes,d=e.className,p=e.color,f=void 0===p?"initial":p,m=e.component,y=e.display,h=void 0===y?"initial":y,v=e.gutterBottom,g=void 0!==v&&v,b=e.noWrap,Z=void 0!==b&&b,x=e.paragraph,S=void 0!==x&&x,E=e.variant,R=void 0===E?"body1":E,w=e.variantMapping,C=void 0===w?s:w,_=(0,o.Z)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),$=m||(S?"p":C[R]||s[R])||"span";return a.createElement($,(0,n.Z)({className:(0,i.Z)(u.root,d,"inherit"!==R&&u[R],"initial"!==f&&u["color".concat((0,l.Z)(f))],Z&&u.noWrap,g&&u.gutterBottom,S&&u.paragraph,"inherit"!==c&&u["align".concat((0,l.Z)(c))],"initial"!==h&&u["display".concat((0,l.Z)(h))]),ref:t},_))}));const d=(0,c.Z)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(u)},41120:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(87462),o=r(30115),a=r(99700);const i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,o.Z)(e,(0,n.Z)({defaultTheme:a.Z},t))}},82568:(e,t,r)=>{"use strict";function n(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.reduce((function(e,t){return null==t?e:function(){for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];e.apply(this,n),t.apply(this,n)}}),(function(){}))}r.d(t,{Z:()=>n})},79437:(e,t,r)=>{"use strict";function n(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function n(){for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];var i=this,c=function(){e.apply(i,o)};clearTimeout(t),t=setTimeout(c,r)}return n.clear=function(){clearTimeout(t)},n}r.d(t,{Z:()=>n})},58731:(e,t,r)=>{"use strict";r.r(t),r.d(t,{capitalize:()=>n.Z,createChainedFunction:()=>o.Z,createSvgIcon:()=>a.Z,debounce:()=>i.Z,deprecatedPropType:()=>c,isMuiElement:()=>l.Z,ownerDocument:()=>s.Z,ownerWindow:()=>u.Z,requirePropFactory:()=>d,setRef:()=>p.Z,unstable_useId:()=>g,unsupportedProp:()=>f,useControlled:()=>m.Z,useEventCallback:()=>y.Z,useForkRef:()=>h.Z,useIsFocusVisible:()=>b.Z});var n=r(93871),o=r(82568),a=r(25209),i=r(79437);function c(e,t){return function(){return null}}var l=r(83711),s=r(30626),u=r(80713);function d(e){return function(){return null}}var p=r(34236);function f(e,t,r,n,o){return null}var m=r(22775),y=r(55192),h=r(17294),v=r(67294);function g(e){var t=v.useState(e),r=t[0],n=t[1],o=e||r;return v.useEffect((function(){null==r&&n("mui-".concat(Math.round(1e5*Math.random())))}),[r]),o}var b=r(24896)},83711:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(67294);function o(e,t){return n.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}},30626:(e,t,r)=>{"use strict";function n(e){return e&&e.ownerDocument||document}r.d(t,{Z:()=>n})},80713:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(30626);function o(e){return(0,n.Z)(e).defaultView||window}},22775:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(67294);function o(e){var t=e.controlled,r=e.default,o=(e.name,e.state,n.useRef(void 0!==t).current),a=n.useState(r),i=a[0],c=a[1];return[o?t:i,n.useCallback((function(e){o||c(e)}),[])]}},48884:(e,t,r)=>{"use strict";var n=r(95318),o=r(20862);t.Z=void 0;var a=o(r(67294)),i=(0,n(r(2108)).default)(a.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");t.Z=i},88995:(e,t,r)=>{"use strict";var n=r(95318),o=r(20862);t.Z=void 0;var a=o(r(67294)),i=(0,n(r(2108)).default)(a.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.Z=i},2108:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.createSvgIcon}});var n=r(58731)},91534:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(67294),o=r(83347),a=r(86688),i=r(72797);class c extends n.Component{render(){var{className:e,cover:t,padding:r,children:a,hero:i,rounded:c}=this.props,l=!0===t?"100vh":"inherit";return c=!0===c,n.createElement(o.Z,{xs:this.renderSection(a,e,l,"1.5rem 0.25rem 2rem 0.25rem",c),sm:this.renderSection(a,e,l,"2rem 1rem 2.5rem 1rem",c),md:this.renderSection(a,e,l,"3rem 2.5rem 3.5rem 2.5rem",c)})}renderSection(e,t,r,o,a){return n.createElement(i.Z,{from:"/core/ui/section"},n.createElement("div",{className:"com-layout-section"},n.createElement("div",{className:`${t}`,style:{boxSizing:"border-box",width:"100%",height:r,padding:o,borderRadius:a?"0.5rem 0.5rem 0 0":0}},e)))}}const l=(0,a.Z)(c)},18319:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});const n=r(39398).default},76249:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var n=r(67294),o=r(87558);const a=function(e){const{id:t,entity:r,children:a}=e;return n.createElement(o.Z,{border:!1,to:`/movie/${t}/${encodeURIComponent(r)}`},a)}},20766:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var n=r(67294),o=r(87558);const a=function(e){const{id:t,entity:r,children:a}=e;return n.createElement(o.Z,{border:!1,to:`/person/${t}/${encodeURIComponent(r)}`},a)}},74931:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var n=r(67294),o=r(87558);const a=function(e){const{id:t,entity:r,children:a}=e;return n.createElement(o.Z,{border:!1,to:`/podcast/${t}/${encodeURIComponent(r)}`},a)}},9223:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});const n=r(13654).default},8445:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var n=r(67294),o=(r(91534),r(80383)),a=r(81648),i=r(79601);const c=function(e){const{qry:t}=e;return n.createElement(o.Z,{className:"page-module",fill:!0},n.createElement(a.Z,{xs:12,sm:12,md:12},n.createElement("h1",null,"Search results for: ",t)),n.createElement(a.Z,{fill:!0},n.createElement(i.default,e)))}},13654:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(67294),o=r(83347),a=r(8445);function i(e){return n.createElement(o.Z,{xs:n.createElement(a.default,e)})}},79601:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var n=r(67294),o=r(80383),a=r(81648),i=r(20766),c=r(76249),l=r(74931);function s(e){const{r:t}=e;switch(t.type){case"movie":return n.createElement(c.default,{id:t.entityId,entity:t.entity},n.createElement("h3",null,t.entity));case"person":return n.createElement(i.default,{id:t.entityId,entity:t.entity},n.createElement("h3",null,t.entity));case"podcast":return n.createElement(l.default,{id:t.entityId,entity:t.entity},n.createElement("h3",null,t.entity))}return`ERROR: type ${t.type}`}const u=function(e){const{data:t,loading:r}=e;return n.createElement(o.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},t&&t.map(((e,t)=>n.createElement(a.Z,{key:t,xs:12,sm:12,md:12},n.createElement(s,{r:e})))))}},56405:(e,t,r)=>{"use strict";r.r(t),r.d(t,{QRY_RESULTS:()=>u,default:()=>d});var n=r(67294),o=r(18319),a=r(9223),i=r(5977),c=(r(2311),r(54397)),l=r(70846);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}const u=c.Ps`
query getResults($qry:String) {
  searchResults(qry: $qry){
    entity
    entityId
    type
  }
}
`;function d(e){const t=(0,i.UO)(),{qry:r}=t,{loading:c,error:d,data:p}=(0,l.a)(u,{variables:{qry:r}}),f={loading:c,error:d,data:p,route:t};return f.data=f.data?f.data.searchResults:null,f.breadcrumbs=[{name:"search"}],n.createElement(o.default,f,n.createElement(a.default,s({qry:decodeURIComponent(r)},f)))}},94184:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&e.push(i)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var c in r)n.call(r,c)&&r[c]&&e.push(c);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},69921:(e,t)=>{"use strict";var r=60103,n=60106,o=60107,a=60108,i=60114,c=60109,l=60110,s=60112,u=60113,d=60120,p=60115,f=60116,m=60121,y=60122,h=60117,v=60129,g=60131;if("function"==typeof Symbol&&Symbol.for){var b=Symbol.for;r=b("react.element"),n=b("react.portal"),o=b("react.fragment"),a=b("react.strict_mode"),i=b("react.profiler"),c=b("react.provider"),l=b("react.context"),s=b("react.forward_ref"),u=b("react.suspense"),d=b("react.suspense_list"),p=b("react.memo"),f=b("react.lazy"),m=b("react.block"),y=b("react.server.block"),h=b("react.fundamental"),v=b("react.debug_trace_mode"),g=b("react.legacy_hidden")}var Z=s,x=p;t.ForwardRef=Z,t.Memo=x,t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===i||e===v||e===a||e===u||e===d||e===g||"object"==typeof e&&null!==e&&(e.$$typeof===f||e.$$typeof===p||e.$$typeof===c||e.$$typeof===l||e.$$typeof===s||e.$$typeof===h||e.$$typeof===m||e[0]===y)},t.typeOf=function(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case o:case i:case a:case u:case d:return e;default:switch(e=e&&e.$$typeof){case l:case s:case f:case p:case c:return e;default:return t}}case n:return t}}}},59864:(e,t,r)=>{"use strict";e.exports=r(69921)},73727:(e,t,r)=>{"use strict";r.d(t,{OL:()=>v});var n=r(5977),o=(r(51721),r(67294)),a=r(37531),i=(r(45697),r(87462)),c=r(63366),l=r(2177);o.Component,o.Component;var s=function(e,t){return"function"==typeof e?e(t):e},u=function(e,t){return"string"==typeof e?(0,a.ob)(e,null,null,t):e},d=function(e){return e},p=o.forwardRef;void 0===p&&(p=d);var f=p((function(e,t){var r=e.innerRef,n=e.navigate,a=e.onClick,l=(0,c.Z)(e,["innerRef","navigate","onClick"]),s=l.target,u=(0,i.Z)({},l,{onClick:function(e){try{a&&a(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||s&&"_self"!==s||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),n())}});return u.ref=d!==p&&t||r,o.createElement("a",u)})),m=p((function(e,t){var r=e.component,m=void 0===r?f:r,y=e.replace,h=e.to,v=e.innerRef,g=(0,c.Z)(e,["component","replace","to","innerRef"]);return o.createElement(n.s6.Consumer,null,(function(e){e||(0,l.Z)(!1);var r=e.history,n=u(s(h,e.location),e.location),c=n?r.createHref(n):"",f=(0,i.Z)({},g,{href:c,navigate:function(){var t=s(h,e.location),n=(0,a.Ep)(e.location)===(0,a.Ep)(u(t));(y||n?r.replace:r.push)(t)}});return d!==p?f.ref=t||v:f.innerRef=v,o.createElement(m,f)}))})),y=function(e){return e},h=o.forwardRef;void 0===h&&(h=y);var v=h((function(e,t){var r=e["aria-current"],a=void 0===r?"page":r,d=e.activeClassName,p=void 0===d?"active":d,f=e.activeStyle,v=e.className,g=e.exact,b=e.isActive,Z=e.location,x=e.sensitive,S=e.strict,E=e.style,R=e.to,w=e.innerRef,C=(0,c.Z)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return o.createElement(n.s6.Consumer,null,(function(e){e||(0,l.Z)(!1);var r=Z||e.location,c=u(s(R,r),r),d=c.pathname,_=d&&d.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),$=_?(0,n.LX)(r.pathname,{path:_,exact:g,sensitive:x,strict:S}):null,k=!!(b?b($,r):$),z="function"==typeof v?v(k):v,O="function"==typeof E?E(k):E;k&&(z=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((function(e){return e})).join(" ")}(z,p),O=(0,i.Z)({},O,f));var N=(0,i.Z)({"aria-current":k&&a||null,className:z,style:O,to:c},C);return y!==h?N.ref=t||w:N.innerRef=w,o.createElement(m,N)}))}))},2311:e=>{"use strict";e.exports=JSON.parse('[{"entity":"people","text":"Julia Roberts","ref":"nm0000210","score":1.5},{"_id":"614e68d826855d0e6413274e","entity":"podcast","text":"Dispatches from CBC Radio","ref":"0002da5f-49a2-31ba-b44c-cdeabdf113cb","score":1.5},{"_id":"614e6a3e26855d0e646d2aa7","entity":"movie","text":"Rocky","ref":"tt0541007","score":1.5},{"_id":"614e690726855d0e641fa974","entity":"people","text":"John Johns","ref":"614a920e2fefdc11ebc592a9","score":1.5},{"_id":"614e689226855d0e6405aab5","entity":"people","text":"John John","ref":"614a8ff02fefdc11ebab933f","score":1.5},{"_id":"614e6a5e26855d0e64748229","entity":"people","text":"John-John","ref":"614a98b52fefdc11eb1a6d8b","score":1.5},{"_id":"614e689f26855d0e640844fa","entity":"people","text":"John-John","ref":"614a90222fefdc11ebae2d95","score":1.5},{"_id":"614e67b426855d0e64d38f17","entity":"people","text":"John Johns","ref":"614a8ba42fefdc11eb797659","score":1.5},{"_id":"614e685326855d0e64f68e78","entity":"people","text":"John John","ref":"614a8ecb2fefdc11eb9c769f","score":1.5},{"_id":"614e690d26855d0e642034a1","entity":"people","text":"John Johns","ref":"614a92192fefdc11ebc61dd9","score":1.5}]')}}]);