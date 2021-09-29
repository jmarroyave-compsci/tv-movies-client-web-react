"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[1499,6599],{93871:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(60288);function s(e){if("string"!=typeof e)throw new Error((0,n.Z)(7));return e.charAt(0).toUpperCase()+e.slice(1)}},86688:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),s=r(72797);n.Component;const l=e=>class extends n.Component{render(){const t="title"in this.props?this.props.title:null,r="placeholder"in this.props?this.props.placeholder:{};return r.width&&r.width,r.height&&r.height,n.createElement(s.Z,{from:t,style:{width:"100%"}},n.createElement(e,this.props))}}},80383:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),s=r(86688),l=r(41749);class a extends n.Component{render(){var{direction:e,spacing:t,className:r,justify:s,alignItems:a,style:i,flex:o}=this.props,t=t||0;return i=i||{},o&&(i.display="flex"),n.createElement(l.Z,{container:!0,direction:e,justifyContent:s,alignItems:a,className:r,spacing:t,style:i},this.props.children)}}const i=(0,s.Z)(a)},81648:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),s=r(86688),l=r(41749);class a extends n.Component{render(){var{visible:e,className:t,xs:r,sm:s,md:a,style:i,fill:o,flex:c,center:m}=this.props;e=e||!0;var d={...i};return(d=d||{textAlign:"inherit"}).textAlign=m?"center":d.textAlign,o&&(d.width="100%"),c&&(d.flex=1),e&&n.createElement(l.Z,{className:t,item:!0,xs:r,sm:s,md:a,style:d},this.props.children)}}const i=(0,s.Z)(a)},83347:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),s=r(12613),l=r(86688);class a extends n.Component{render(){var{xs:e,sm:t,md:r,lg:l,xl:a}=this.props;return e=e||null,t=t||e,r=r||t,l=l||r,a=a||l,n.createElement("div",{style:{width:"100%"}},n.createElement(s.Z,{only:["sm","md","lg","xl"]},e),n.createElement(s.Z,{only:["xs","md","lg","xl"]},t),n.createElement(s.Z,{only:["xs","sm","lg","xl"]},r),n.createElement(s.Z,{only:["xs","sm","md","xl"]},l),n.createElement(s.Z,{only:["xs","sm","md","lg"]},a))}}const i=(0,l.Z)(a)},91534:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),s=r(83347),l=r(86688),a=r(72797);class i extends n.Component{render(){var{className:e,cover:t,padding:r,children:l,hero:a,rounded:i}=this.props,o=!0===t?"100vh":"inherit";return i=!0===i,n.createElement(s.Z,{xs:this.renderSection(l,e,o,"1.5rem 0.25rem 2rem 0.25rem",i),sm:this.renderSection(l,e,o,"2rem 1rem 2.5rem 1rem",i),md:this.renderSection(l,e,o,"3rem 2.5rem 3.5rem 2.5rem",i)})}renderSection(e,t,r,s,l){return n.createElement(a.Z,{from:"/core/ui/section"},n.createElement("div",{className:"com-layout-section"},n.createElement("div",{className:`${t}`,style:{boxSizing:"border-box",width:"100%",height:r,padding:s,borderRadius:l?"0.5rem 0.5rem 0 0":0}},e)))}}const o=(0,l.Z)(i)},94603:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var n=r(67294),s=r(80383),l=r(81648);class a extends n.Component{render(){const{data:e,loading:t}=this.props,{}=e||{};return n.createElement(s.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},n.createElement(l.Z,{xs:12,sm:12,md:12},n.createElement(s.Z,{justifyContent:"center",fill:!0})))}}const i=a},37338:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var n=r(67294),s=r(91534),l=r(80383),a=r(81648),i=r(94603);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}const c=function(e){const{data:t,loading:r}=e;return n.createElement(l.Z,{className:"page-module",fill:!0},n.createElement(a.Z,{fill:!0},n.createElement(s.Z,{className:"section-0"},n.createElement(i.default,o({},e,{data:t||[]})))))}},59411:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});var n=r(67294),s=r(83347),l=r(37338);function a(e){return n.createElement(s.Z,{xs:n.createElement(l.default,e)})}},86010:(e,t,r)=>{function n(e){var t,r,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(s&&(s+=" "),s+=r);else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}function s(){for(var e,t,r=0,s="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(s&&(s+=" "),s+=t);return s}r.d(t,{Z:()=>s})}}]);