(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5461],{49896:function(t,e,r){"use strict";r(67294);var n=r(89260),o=r(85893);e.Z=function(t){var e=t.id,r=(t.entity,t.children),i=t.box;return(0,o.jsx)(n.Z,{box:i,border:!1,to:"/movies/".concat(e),children:r})}},55476:function(t,e,r){"use strict";r(67294);var n=r(89260),o=r(85893);e.Z=function(t){var e=t.id,r=(t.entity,t.children),i=t.box;return(0,o.jsx)(n.Z,{box:i,border:!1,to:"/people/".concat(e),children:r})}},43332:function(t,e,r){"use strict";r(67294);var n=r(65295),o=r(18515),i=r(42643),c=r(54962),a=r(49161),u=r(2658),s=r(360),l=r(22854),f=r(47386),d=r(27054),h=r(85893),p=(0,d.Z)((function(t){return{headerContent:{width:"100%"},headerRoot:{width:"100%"}}})),v="".concat(l.Z.APP.BASE_PATH).concat(l.Z.DEFAULTS.IMAGE_PLACEHOLDER),y=function(t){return t.target.src=v};e.Z=function(t){var e,r=p(),d=t.title,v=t.subtitle,b=t.text,Z=t.image,g=t.imageHeight,j=void 0===g?180:g,m=t.noImage,w=t.actions,x=0;v=v||"";return m=!!m,Z=Z||l.Z.DEFAULTS.IMAGE_PLACEHOLDER,(0,h.jsxs)(n.Z,{style:{flexGrow:1,width:"100%"},children:[(0,h.jsx)(o.Z,{sx:{width:"100%"},classes:{content:r.headerContent,root:r.headerRoot},title:(0,h.jsx)(f.ZP,{title:d,placement:"bottom-start",children:(0,h.jsx)("div",{style:{display:"inline-block",width:"100%"},children:(0,h.jsx)(u.Z,{noWrap:!0,variant:"subtitle",style:{display:"inline-block",width:"100%"},children:d})})}),subheader:v}),!m&&(0,h.jsx)(c.Z,{height:j||null,image:null!==(e=Z)&&void 0!==e&&e.startsWith("/")?"".concat(l.Z.APP.BASE_PATH).concat(Z):Z,component:"img",onError:y}),b&&(0,h.jsx)(i.Z,{children:(0,s.HD)(b)?(0,h.jsx)(u.Z,{variant:"body2",color:"text.secondary",component:"div",children:b}):b}),w&&w.length>0&&(0,h.jsx)(a.Z,{children:w.map((function(t){return(0,h.jsx)("div",{children:t},x++)}))})]})}},27159:function(t,e,r){"use strict";var n=r(15671),o=r(43144),i=r(60136),c=r(82963),a=r(61120),u=r(67294),s=r(53651),l=r(65710),f=r(85893);function d(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=(0,a.Z)(t);if(e){var o=(0,a.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,c.Z)(this,r)}}var h=function(t){(0,i.Z)(r,t);var e=d(r);function r(){return(0,n.Z)(this,r),e.apply(this,arguments)}return(0,o.Z)(r,[{key:"getDate",value:function(t){if(!t||null==t||""===t||0==t.length)return null;if(t instanceof Date)return t;try{var e=Number(t);return Number.isInteger(e)?new Date(e):new Date(t)}catch(r){return null}}},{key:"toString",value:function(t,e,r){switch(r){case"ago":return(0,s.Z)(e,new Date);case"DD/MM/YYYY":return(0,l.Z)(e,"dd/MM/yyyy");case"YYYY":return e.getFullYear();default:return(0,l.Z)(e,r)}}},{key:"render",value:function(){var t=this.props,e=t.lang,r=t.value,n=t.className,o=t.format;e=e||"en",o=o||"ago";var i=this.getDate(r);if(null==i)return(0,f.jsx)("span",{});var c=this.toString(e,i,o);return(0,f.jsx)("span",{className:n,children:c})}}]),r}(u.Component);e.Z=h},49631:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return l}});r(67294);var n=r(11163),o=r(4942),i=r(5398),c=r(85893);function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){(0,o.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var s=function(t){return(0,c.jsx)(i.Z,u(u({},t),{},{render:"page"}))},l=function(t){var e=(0,n.useRouter)(),r=e.query?e.query:{},o=r.year,i=r.page;return i=i?parseInt(i):1,o=o||2017,(0,c.jsx)(s,{breadcrumbs:"/movies/stories/awards",year:o,entity:"movies",page:i})}},37e3:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/movies/stories/awards",function(){return r(49631)}])}},function(t){t.O(0,[6499,5685,5218,4193,5619,5398,9774,2888,179],(function(){return e=37e3,t(t.s=e);var e}));var e=t.O();_N_E=e}]);