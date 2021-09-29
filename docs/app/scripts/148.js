/*! For license information please see 148.js.LICENSE.txt */
(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[148],{95318:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},20862:(e,t,r)=>{var n=r(50008).default;function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(a=function(e){return e?r:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=a(t);if(r&&r.has(e))return r.get(e);var o={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=l?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(o,i,s):o[i]=e[i]}return o.default=e,r&&r.set(e,o),o},e.exports.default=e.exports,e.exports.__esModule=!0},50008:e=>{function t(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=t=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),t(r)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},17812:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(87462),a=r(45987),o=r(67294),l=(r(45697),r(86010)),i=r(14670),s=r(59693),c=r(54720),u=r(93871),d=o.forwardRef((function(e,t){var r=e.edge,i=void 0!==r&&r,s=e.children,d=e.classes,m=e.className,f=e.color,p=void 0===f?"default":f,h=e.disabled,v=void 0!==h&&h,g=e.disableFocusRipple,y=void 0!==g&&g,b=e.size,Z=void 0===b?"medium":b,E=(0,a.Z)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return o.createElement(c.Z,(0,n.Z)({className:(0,l.Z)(d.root,m,"default"!==p&&d["color".concat((0,u.Z)(p))],v&&d.disabled,"small"===Z&&d["size".concat((0,u.Z)(Z))],{start:d.edgeStart,end:d.edgeEnd}[i]),centerRipple:!0,focusRipple:!y,disabled:v,ref:t},E),o.createElement("span",{className:d.label},s))}));const m=(0,i.Z)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:(0,s.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,s.Fq)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,s.Fq)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(d)},41120:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(87462),a=r(30115),o=r(99700);const l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,a.Z)(e,(0,n.Z)({defaultTheme:o.Z},t))}},82568:(e,t,r)=>{"use strict";function n(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.reduce((function(e,t){return null==t?e:function(){for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];e.apply(this,n),t.apply(this,n)}}),(function(){}))}r.d(t,{Z:()=>n})},79437:(e,t,r)=>{"use strict";function n(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function n(){for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];var l=this,i=function(){e.apply(l,a)};clearTimeout(t),t=setTimeout(i,r)}return n.clear=function(){clearTimeout(t)},n}r.d(t,{Z:()=>n})},58731:(e,t,r)=>{"use strict";r.r(t),r.d(t,{capitalize:()=>n.Z,createChainedFunction:()=>a.Z,createSvgIcon:()=>o.Z,debounce:()=>l.Z,deprecatedPropType:()=>i,isMuiElement:()=>s.Z,ownerDocument:()=>c.Z,ownerWindow:()=>u.Z,requirePropFactory:()=>d,setRef:()=>m.Z,unstable_useId:()=>y,unsupportedProp:()=>f,useControlled:()=>p.Z,useEventCallback:()=>h.Z,useForkRef:()=>v.Z,useIsFocusVisible:()=>b.Z});var n=r(93871),a=r(82568),o=r(25209),l=r(79437);function i(e,t){return function(){return null}}var s=r(83711),c=r(30626),u=r(80713);function d(e){return function(){return null}}var m=r(34236);function f(e,t,r,n,a){return null}var p=r(22775),h=r(55192),v=r(17294),g=r(67294);function y(e){var t=g.useState(e),r=t[0],n=t[1],a=e||r;return g.useEffect((function(){null==r&&n("mui-".concat(Math.round(1e5*Math.random())))}),[r]),a}var b=r(24896)},83711:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(67294);function a(e,t){return n.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}},30626:(e,t,r)=>{"use strict";function n(e){return e&&e.ownerDocument||document}r.d(t,{Z:()=>n})},80713:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(30626);function a(e){return(0,n.Z)(e).defaultView||window}},22775:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(67294);function a(e){var t=e.controlled,r=e.default,a=(e.name,e.state,n.useRef(void 0!==t).current),o=n.useState(r),l=o[0],i=o[1];return[a?t:l,n.useCallback((function(e){a||i(e)}),[])]}},48884:(e,t,r)=>{"use strict";var n=r(95318),a=r(20862);t.Z=void 0;var o=a(r(67294)),l=(0,n(r(2108)).default)(o.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");t.Z=l},88995:(e,t,r)=>{"use strict";var n=r(95318),a=r(20862);t.Z=void 0;var o=a(r(67294)),l=(0,n(r(2108)).default)(o.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.Z=l},2108:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.createSvgIcon}});var n=r(58731)},19976:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(67294),a=(r(45697),r(19119)),o=r(34902);class l extends n.Component{getDate(e){try{if(!e||null==e||""===e||0==e.length)return new Date;if(e instanceof Date)return new Date(e);const t=Number(e);return Number.isInteger(t)?new Date(t):new Date(e)}catch(e){return new Date}}_format(e,t,r){switch(r){case"ago":return(0,a.Z)(t,new Date);case"DD/MM/YYYY":return(0,o.Z)(t,"dd/MM/yy");default:return(0,o.Z)(t,r)}}render(){var{lang:e,value:t,className:r}=this.props;e=e||"en";const a=this.props.format?this.props.format:"ago",o=this.getDate(t),l=this._format(e,o,a);return n.createElement("span",{className:r},l)}}const i=l},93013:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(67294);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}class o extends n.Component{render(){var{src:e,width:t,height:r,style:o,notFound:l}=this.props,i={};return l&&(i.ref=e=>this.img=e,i.onError=()=>l&&this.img.src!=l?this.img.src=l:null),n.createElement("img",a({},i,{style:o,width:t,height:r,src:e}))}}const l=o},91534:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(67294),a=r(83347),o=r(86688),l=r(72797);class i extends n.Component{render(){const{className:e,cover:t,padding:r,children:o,hero:l}=this.props,i=!0===t?"100vh":"inherit";return n.createElement(a.Z,{xs:this.renderSection(o,e,i,"2rem 0rem"),sm:this.renderSection(o,e,i,"3rem 0rem"),md:this.renderSection(o,e,i,"4rem 2.5rem")})}renderSection(e,t,r,a){return n.createElement(l.Z,{from:"/core/ui/section"},n.createElement("div",{className:"com-layout-section"},n.createElement("div",{className:`${t}`,style:{boxSizing:"border-box",width:"100%",height:r,padding:a}},e)))}}const s=(0,o.Z)(i)},43178:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(67294),a=r(1565),o=r(71267);function l({text:e,onClick:t}){return n.createElement(i,null,n.createElement(o.Z,{variant:"outlined",size:"small",label:e,onClick:t}))}l.defaultProps={onClick:null,text:""};const i=a.ZP.div`
	display: inline-block;
	margin: 0;
	margin-right: 0.25rem;
	margin-bottom: 0.25rem;
`},70227:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(67294);function a(e){const{label:t,value:r}=e;return n.createElement("div",null,t&&n.createElement("span",{style:{fontWeight:"bold"}},t,":"),n.createElement("span",null,r))}},18319:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});const n=r(39398).default},80607:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(67294),a=r(80383),o=r(81648),l=r(70227);const i=function(e){const{data:t,loading:r,route:i}=e;return t?n.createElement(a.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},n.createElement("h4",null,"Awards"),t&&t.length>0&&t.map((e=>n.createElement(o.Z,{xs:12,sm:12,md:12},e.year&&n.createElement(l.Z,{label:"Year",value:e.year}),e.name&&n.createElement(l.Z,{label:"Name",value:e.name}),e.category&&n.createElement(l.Z,{label:"Category",value:e.category}),e.won&&n.createElement(l.Z,{label:"Won",value:e.won}))))):null}},91293:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var n=r(67294),a=r(80383),o=r(81648),l=r(93013),i=r(92863);function s({data:e}){return e&&e.image?n.createElement(l.Z,{src:e.image,width:"150",height:"150"}):n.createElement(c,null)}function c(){return n.createElement("div",{style:{width:"8rem",height:"8rem",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#efefef"}},n.createElement(i.Z,null,"broken_image"))}const u=function(e){const{data:t,loading:r}=e;return n.createElement(a.Z,{fill:!0,style:{width:"100%",backgroundColor:"#333"}},n.createElement(o.Z,{xs:12,sm:12,md:12},n.createElement(s,{data:t})))}},71065:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(67294),a=r(80383),o=r(81648),l=r(43178);const i=function(e){const{data:t,loading:r,route:i}=e;return n.createElement(a.Z,null,n.createElement(o.Z,{xs:12,sm:12,md:12},n.createElement("h4",null,"More information")),n.createElement(o.Z,{xs:12,sm:12,md:12},t&&t.imdb&&n.createElement("a",{href:t.imdb},n.createElement(l.Z,{text:"IMDB"})),t&&t.imdb&&n.createElement("a",{href:t.imdb},n.createElement(l.Z,{text:"IMDB"})),t&&t.imdb&&n.createElement("a",{href:t.imdb},n.createElement(l.Z,{text:"IMDB"}))))}},93374:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(67294),a=r(80383),o=r(81648),l=r(77053);const i=function(e){const{data:t,loading:r}=e;return n.createElement(a.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},n.createElement(o.Z,{xs:12,sm:12,md:12},n.createElement(l.default,{data:t})))}},77053:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var n=r(67294),a=r(80383),o=r(81648),l=r(71065),i=r(80607),s=r(19976),c=r(43178),u=r(91293);const d=function(e){var{data:t,loading:r}=e;return t=t||{},n.createElement(a.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},n.createElement(o.Z,{xs:12,sm:12,md:12},n.createElement("h1",null,t.name),t&&t.profession&&t.profession.length>0&&n.createElement("span",null,t.profession.map((e=>n.createElement(c.Z,{text:e}))))),n.createElement(o.Z,{xs:12,sm:12,md:12},n.createElement(u.default,{data:t})),n.createElement(o.Z,{xs:12,sm:12,md:12},n.createElement(l.default,{data:t?t.references:null})),n.createElement(o.Z,{xs:12,sm:12,md:12},n.createElement("h4",null,"General information"),t&&t.birthDate&&n.createElement("span",null,"Birth date: ",n.createElement(s.Z,{value:t.birthDate}))),n.createElement(o.Z,{xs:12,sm:12,md:12},t&&t.directed&&t.directed.length>0&&n.createElement("span",null,"Directed: ",t.directed.map((e=>`${e} `)))),n.createElement(o.Z,{xs:12,sm:12,md:12},t&&t.acted&&t.acted.length>0&&n.createElement("span",null,"Acted: ",t.acted.map((e=>`${e} `)))),n.createElement(o.Z,{xs:12,sm:12,md:12},n.createElement(i.default,{data:t?t.awards:null})))}},82139:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});const n=r(55070).default},34990:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var n=r(67294),a=r(91534),o=r(80383),l=r(81648),i=r(93374);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}const c=function(e){const{data:t}=e;return n.createElement(o.Z,{className:"page-module",fill:!0},n.createElement(l.Z,{fill:!0},n.createElement(a.Z,{className:"section-0"},n.createElement(i.default,s({data:t?t.dashboard:null},e)))))}},55070:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var n=r(67294),a=r(83347),o=r(34990);function l(e){return n.createElement(a.Z,{xs:n.createElement(o.default,e)})}},7434:(e,t,r)=>{"use strict";r.r(t),r.d(t,{QRY:()=>c,default:()=>u});var n=r(67294),a=r(18319),o=r(82139),l=r(5977),i=r(54397),s=r(70846);const c=i.Ps`
query getPerson($id:String!) {
  person(id: $id){
    id
    name
    birthDate
    profession
    awards {
      category
      name
      won
      year
    }
    references {
      imdb
    }
  }
}
`;function u(e){var t=(0,l.UO)();t.name=decodeURIComponent(t.name);const{loading:r,error:i,data:u}=(0,s.a)(c,{variables:{id:t.id}}),d={loading:r,error:i,data:u,route:t};return d.data=d.data?d.data.person:null,d.breadcrumbs=[{name:"people",url:"/people"},{name:t.name.toLowerCase()}],n.createElement(a.default,d,n.createElement(o.default,d))}},94184:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var l=a.apply(null,r);l&&e.push(l)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var i in r)n.call(r,i)&&r[i]&&e.push(i);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()}}]);