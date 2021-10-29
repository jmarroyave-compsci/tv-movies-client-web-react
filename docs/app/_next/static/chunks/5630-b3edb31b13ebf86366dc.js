"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5630],{71267:function(e,t,r){r.d(t,{Z:function(){return f}});var a=r(87462),o=r(45987),n=r(67294),i=(r(45697),r(86010)),l=(0,r(25209).Z)(n.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),c=r(14670),s=r(59693),d=r(17294),u=r(93871),p=r(32467);function h(e){return"Backspace"===e.key||"Delete"===e.key}var m=n.forwardRef((function(e,t){var r=e.avatar,c=e.classes,s=e.className,m=e.clickable,f=e.color,g=void 0===f?"default":f,y=e.component,b=e.deleteIcon,v=e.disabled,x=void 0!==v&&v,k=e.icon,w=e.label,j=e.onClick,Z=e.onDelete,C=e.onKeyDown,S=e.onKeyUp,O=e.size,P=void 0===O?"medium":O,D=e.variant,R=void 0===D?"default":D,T=(0,o.Z)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),I=n.useRef(null),E=(0,d.Z)(I,t),$=function(e){e.stopPropagation(),Z&&Z(e)},N=!(!1===m||!j)||m,Y="small"===P,z=y||(N?p.Z:"div"),_=z===p.Z?{component:"div"}:{},F=null;if(Z){var L=(0,i.Z)("default"!==g&&("default"===R?c["deleteIconColor".concat((0,u.Z)(g))]:c["deleteIconOutlinedColor".concat((0,u.Z)(g))]),Y&&c.deleteIconSmall);F=b&&n.isValidElement(b)?n.cloneElement(b,{className:(0,i.Z)(b.props.className,c.deleteIcon,L),onClick:$}):n.createElement(l,{className:(0,i.Z)(c.deleteIcon,L),onClick:$})}var M=null;r&&n.isValidElement(r)&&(M=n.cloneElement(r,{className:(0,i.Z)(c.avatar,r.props.className,Y&&c.avatarSmall,"default"!==g&&c["avatarColor".concat((0,u.Z)(g))])}));var q=null;return k&&n.isValidElement(k)&&(q=n.cloneElement(k,{className:(0,i.Z)(c.icon,k.props.className,Y&&c.iconSmall,"default"!==g&&c["iconColor".concat((0,u.Z)(g))])})),n.createElement(z,(0,a.Z)({role:N||Z?"button":void 0,className:(0,i.Z)(c.root,s,"default"!==g&&[c["color".concat((0,u.Z)(g))],N&&c["clickableColor".concat((0,u.Z)(g))],Z&&c["deletableColor".concat((0,u.Z)(g))]],"default"!==R&&[c.outlined,{primary:c.outlinedPrimary,secondary:c.outlinedSecondary}[g]],x&&c.disabled,Y&&c.sizeSmall,N&&c.clickable,Z&&c.deletable),"aria-disabled":!!x||void 0,tabIndex:N||Z?0:void 0,onClick:j,onKeyDown:function(e){e.currentTarget===e.target&&h(e)&&e.preventDefault(),C&&C(e)},onKeyUp:function(e){e.currentTarget===e.target&&(Z&&h(e)?Z(e):"Escape"===e.key&&I.current&&I.current.blur()),S&&S(e)},ref:E},_,T),M||q,n.createElement("span",{className:(0,i.Z)(c.label,Y&&c.labelSmall)},w),F)})),f=(0,c.Z)((function(e){var t="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],r=(0,s.Fq)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(t),backgroundColor:t,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:(0,s._4)(t,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:(0,s._4)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:(0,s._4)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:(0,s._4)(t,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:(0,s._4)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:(0,s._4)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:(0,s.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:(0,s.Fq)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:(0,s.Fq)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:r,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:(0,s.Fq)(r,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:(0,s.Fq)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:(0,s.Fq)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:(0,s.Fq)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:(0,s.Fq)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}}),{name:"MuiChip"})(m)},82356:function(e,t,r){r(67294);var a=r(58862),o=r(27159),n=r(85893);t.Z=function(e){var t=e.data,r=e.value,i=e.title,l=e.format,c=e.sufix;if(!(t=t||r)||null==t||0==t.length)return null;switch(r=t,l){case"date":r=(0,n.jsx)(o.Z,{value:t,format:"DD/MM/YYYY"});break;case"year":r=(0,n.jsx)(o.Z,{value:t,format:"YYYY"})}return(0,n.jsxs)("div",{children:[(0,n.jsx)(a.Qy,{children:i}),(0,n.jsxs)(a.GH,{children:[r," ",c]})]})}},12868:function(e,t,r){var a=r(4942),o=(r(67294),r(52651),r(23275),r(7945)),n=r(92863),i=r(50367),l=r(85893);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){var t=e.src,r=e.height;e.width;return t?(0,l.jsx)(o.Z,{layout:"fill",src:t,height:r}):(0,l.jsx)(d,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e))}function d(e){var t=e.height,r=e.width;return(0,l.jsx)("div",{style:{width:"".concat(r,"px"),height:"".concat(t,"px"),display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#888"},children:(0,l.jsx)(n.Z,{children:"broken_image"})})}t.Z=function(e){var t=e.src;return e.loading,(0,l.jsx)(i.RQ,{children:(0,l.jsx)("div",{style:{height:300,width:"100%",backgroundColor:"#333"},children:(0,l.jsx)(s,{src:t,height:300,width:250})})})}},28388:function(e,t,r){r.d(t,{Z:function(){return c}});r(67294);var a=r(14308),o=r(48724),n=r(50367),i=r(58862),l=r(85893);function c(e){var t=e.data,r=e.website;return t&&(r||t.id.startsWith("tt")||t.id.startsWith("nm")||t.wikiTopic)?(0,l.jsxs)(n.RQ,{children:[(0,l.jsx)(i.DK,{children:"More information"}),(0,l.jsxs)(a.Z,{direction:"row",children:[r&&(0,l.jsx)("a",{href:r,children:(0,l.jsx)(o.Z,{text:"website"})}),t.id&&t.id.startsWith("tt")&&(0,l.jsx)("a",{href:"https://www.imdb.com/title/".concat(t.id,"/"),children:(0,l.jsx)(o.Z,{text:"IMDB"})}),t.id&&t.id.startsWith("nm")&&(0,l.jsx)("a",{href:"https://www.imdb.com/name/".concat(t.id,"/"),children:(0,l.jsx)(o.Z,{text:"IMDB"})}),t.wikiTopic&&(0,l.jsx)("a",{href:"https://wikipedia.com/wiki/".concat(t.wikiTopic.replace(/ /g,"_")),children:(0,l.jsx)(o.Z,{text:"wikipedia"})})]})]}):(0,l.jsx)("div",{})}},86809:function(e,t,r){r.d(t,{Z:function(){return s}});r(67294);var a=r(50367),o=r(29602),n=r(85893),i=(0,o.ZP)("h2")({fontSize:"2.5rem",lineHeight:"2.75rem",padding:"0",margin:"0"}),l=(0,o.ZP)("div")({margin:0,padding:0,fontSize:"0.9rem",lineHeight:"1.3rem"}),c=(0,o.ZP)("div")({margin:0,padding:0,fontSize:"0.8rem",lineHeight:"1.2rem",fontWeight:500});function s(e){var t=e.text,r=e.subText1,o=e.subText2,s=e.subText,d=e.link;s=s||r;var u=(0,n.jsx)(i,{children:t});return d&&(u=(0,n.jsx)("a",{href:d,children:u})),(0,n.jsxs)(a.RQ,{children:[u,s&&(0,n.jsx)(l,{children:s}),o&&(0,n.jsxs)(c,{children:["by ",o]})]})}},27159:function(e,t,r){var a=r(15671),o=r(43144),n=r(60136),i=r(82963),l=r(61120),c=r(67294),s=r(53651),d=r(65710),u=r(85893);function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=(0,l.Z)(e);if(t){var o=(0,l.Z)(this).constructor;r=Reflect.construct(a,arguments,o)}else r=a.apply(this,arguments);return(0,i.Z)(this,r)}}var h=function(e){(0,n.Z)(r,e);var t=p(r);function r(){return(0,a.Z)(this,r),t.apply(this,arguments)}return(0,o.Z)(r,[{key:"getDate",value:function(e){if(!e||null==e||""===e||0==e.length)return null;if(e instanceof Date)return e;try{var t=Number(e);return Number.isInteger(t)?new Date(t):new Date(e)}catch(r){return null}}},{key:"toString",value:function(e,t,r){switch(r){case"ago":return(0,s.Z)(t,new Date);case"DD/MM/YYYY":return(0,d.Z)(t,"dd/MM/yyyy");case"YYYY":return t.getFullYear();default:return(0,d.Z)(t,r)}}},{key:"render",value:function(){var e=this.props,t=e.lang,r=e.value,a=e.className,o=e.format;t=t||"en",o=o||"ago";var n=this.getDate(r);if(null==n)return(0,u.jsx)("span",{});var i=this.toString(t,n,o);return(0,u.jsx)("span",{className:a,children:i})}}]),r}(c.Component);t.Z=h},7945:function(e,t,r){var a=r(4942),o=(r(67294),r(1216)),n=r(29602),i=r(22854),l=r(85893),c=void 0;function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=(0,n.ZP)("div")({position:"relative",overflow:"hidden",backgroundColor:"#efefef",backgroundImage:"url('".concat(i.Z.APP.BASE_PATH,"/img/ph.svg')"),backgroundRepeat:"no-repeat",backgroundPosition:"center center",width:"auto",height:"auto"});t.Z=function(e){var t,r=e.src,a=e.lazy,n=e.preload,s=e.width,p=e.height,h=e.style,m=e.notFound,f=e.layout;r=null!==(t=r)&&void 0!==t&&t.startsWith("/")?"".concat(i.Z.APP.BASE_PATH).concat(r):r,""==p&&""==s&&(s="100%");var g={};m&&(g.ref=function(e){return c.img=e},g.onError=function(){return m&&c.img.src!=m?c.img.src=m:null});var y=(0,l.jsx)("img",d(d({},g),{},{src:r,layout:f,width:s,height:p,style:d(d({},h),{},{position:"absolute",top:0,left:0,margin:"0px",padding:"0px",border:"0px"})}));return a&&(y=(0,l.jsx)(o.ZP,{only:!0,children:y})),(0,l.jsxs)(u,{children:[(0,l.jsx)("img",{src:n,width:s,height:p,style:{opacity:"1",margin:"0px",padding:"0px",border:"0px"}}),y]})}},48724:function(e,t,r){r.d(t,{Z:function(){return i}});r(67294);var a=r(29602),o=r(71267),n=r(85893);function i(e){var t=e.text,r=e.color,a=e.variant,i=e.onClick;return(0,n.jsx)(l,{children:(0,n.jsx)(o.Z,{variant:a,color:r,size:"small",label:t,onClick:i})})}i.defaultProps={onClick:null,text:"",color:"primary",variant:"default"};var l=(0,a.ZP)("div")({display:"inline-block",margin:"0",marginRight:"0.25rem",marginBottom:"0.25rem"})}}]);