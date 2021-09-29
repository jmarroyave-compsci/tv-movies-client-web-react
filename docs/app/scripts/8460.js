"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[8460,598],{86688:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(72797);a.Component;const l=e=>class extends a.Component{render(){const t="title"in this.props?this.props.title:null,n="placeholder"in this.props?this.props.placeholder:{};return n.width&&n.width,n.height&&n.height,a.createElement(r.Z,{from:t,style:{width:"100%"}},a.createElement(e,this.props))}}},19976:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),r=(n(45697),n(19119)),l=n(34902);class s extends a.Component{getDate(e){try{if(!e||null==e||""===e||0==e.length)return new Date;if(e instanceof Date)return new Date(e);const t=Number(e);return Number.isInteger(t)?new Date(t):new Date(e)}catch(e){return new Date}}_format(e,t,n){switch(n){case"ago":return(0,r.Z)(t,new Date);case"DD/MM/YYYY":return(0,l.Z)(t,"dd/MM/yy");default:return(0,l.Z)(t,n)}}render(){var{lang:e,value:t,className:n}=this.props;e=e||"en";const r=this.props.format?this.props.format:"ago",l=this.getDate(t),s=this._format(e,l,r);return a.createElement("span",{className:n},s)}}const c=s},93013:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}class l extends a.Component{render(){var{src:e,width:t,height:n,style:l,notFound:s}=this.props,c={};return s&&(c.ref=e=>this.img=e,c.onError=()=>s&&this.img.src!=s?this.img.src=s:null),a.createElement("img",r({},c,{style:l,width:t,height:n,src:e}))}}const s=l},80383:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),r=n(86688),l=n(41749);class s extends a.Component{render(){var{direction:e,spacing:t,className:n,justify:r,alignItems:s,style:c,flex:m}=this.props,t=t||0;return c=c||{},m&&(c.display="flex"),a.createElement(l.Z,{container:!0,direction:e,justifyContent:r,alignItems:s,className:n,spacing:t,style:c},this.props.children)}}const c=(0,r.Z)(s)},81648:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),r=n(86688),l=n(41749);class s extends a.Component{render(){var{visible:e,className:t,xs:n,sm:r,md:s,style:c,fill:m,flex:i,center:d}=this.props;e=e||!0;var o={...c};return(o=o||{textAlign:"inherit"}).textAlign=d?"center":o.textAlign,m&&(o.width="100%"),i&&(o.flex=1),e&&a.createElement(l.Z,{className:t,item:!0,xs:n,sm:r,md:s,style:o},this.props.children)}}const c=(0,r.Z)(s)},83347:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),r=n(12613),l=n(86688);class s extends a.Component{render(){var{xs:e,sm:t,md:n,lg:l,xl:s}=this.props;return e=e||null,t=t||e,n=n||t,l=l||n,s=s||l,a.createElement("div",{style:{width:"100%"}},a.createElement(r.Z,{only:["sm","md","lg","xl"]},e),a.createElement(r.Z,{only:["xs","md","lg","xl"]},t),a.createElement(r.Z,{only:["xs","sm","lg","xl"]},n),a.createElement(r.Z,{only:["xs","sm","md","xl"]},l),a.createElement(r.Z,{only:["xs","sm","md","lg"]},s))}}const c=(0,l.Z)(s)},91534:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(67294),r=n(83347),l=n(86688),s=n(72797);class c extends a.Component{render(){const{className:e,cover:t,padding:n,children:l,hero:s}=this.props,c=!0===t?"100vh":"inherit";return a.createElement(r.Z,{xs:this.renderSection(l,e,c,"2rem 0rem"),sm:this.renderSection(l,e,c,"3rem 0rem"),md:this.renderSection(l,e,c,"4rem 2.5rem")})}renderSection(e,t,n,r){return a.createElement(s.Z,{from:"/core/ui/section"},a.createElement("div",{className:"com-layout-section"},a.createElement("div",{className:`${t}`,style:{boxSizing:"border-box",width:"100%",height:n,padding:r}},e)))}}const m=(0,l.Z)(c)},43178:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294),r=n(1565),l=n(71267);function s({text:e,onClick:t}){return a.createElement(c,null,a.createElement(l.Z,{variant:"outlined",size:"small",label:e,onClick:t}))}s.defaultProps={onClick:null,text:""};const c=r.ZP.div`
	display: inline-block;
	margin: 0;
	margin-right: 0.25rem;
	margin-bottom: 0.25rem;
`},70227:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);function r(e){const{label:t,value:n}=e;return a.createElement("div",null,t&&a.createElement("span",{style:{fontWeight:"bold"}},t,":"),a.createElement("span",null,n))}},80607:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(67294),r=n(80383),l=n(81648),s=n(70227);const c=function(e){const{data:t,loading:n,route:c}=e;return t?a.createElement(r.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},a.createElement("h4",null,"Awards"),t&&t.length>0&&t.map((e=>a.createElement(l.Z,{xs:12,sm:12,md:12},e.year&&a.createElement(s.Z,{label:"Year",value:e.year}),e.name&&a.createElement(s.Z,{label:"Name",value:e.name}),e.category&&a.createElement(s.Z,{label:"Category",value:e.category}),e.won&&a.createElement(s.Z,{label:"Won",value:e.won}))))):null}},91293:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var a=n(67294),r=n(80383),l=n(81648),s=n(93013),c=n(92863);function m({data:e}){return e&&e.image?a.createElement(s.Z,{src:e.image,width:"150",height:"150"}):a.createElement(i,null)}function i(){return a.createElement("div",{style:{width:"8rem",height:"8rem",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#efefef"}},a.createElement(c.Z,null,"broken_image"))}const d=function(e){const{data:t,loading:n}=e;return a.createElement(r.Z,{fill:!0,style:{width:"100%",backgroundColor:"#333"}},a.createElement(l.Z,{xs:12,sm:12,md:12},a.createElement(m,{data:t})))}},92124:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var a=n(67294),r=n(80383),l=n(81648);const s=function(e){const{data:t,loading:n,type:s}=e;return a.createElement(r.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},t&&t.length>0&&a.createElement("h2",null,s),t&&t.length>0&&t.map((e=>a.createElement(l.Z,{xs:12,sm:12,md:12},e.id&&a.createElement("div",null,"ID: ",e.id)))))}},56519:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var a=n(67294),r=n(80383),l=n(81648);const s=function(e){const{data:t,loading:n,route:s}=e;return a.createElement(r.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},t&&t.length>0&&t.map((e=>a.createElement(l.Z,{xs:12,sm:12,md:12},e.name&&a.createElement("div",null,"By: ",e.name),e.averageRating&&a.createElement("div",null,"Rating: ",e.averageRating),e.votes&&a.createElement("div",null,"Votes: ",e.votes)))))}},71065:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(67294),r=n(80383),l=n(81648),s=n(43178);const c=function(e){const{data:t,loading:n,route:c}=e;return a.createElement(r.Z,null,a.createElement(l.Z,{xs:12,sm:12,md:12},a.createElement("h4",null,"More information")),a.createElement(l.Z,{xs:12,sm:12,md:12},t&&t.imdb&&a.createElement("a",{href:t.imdb},a.createElement(s.Z,{text:"IMDB"})),t&&t.imdb&&a.createElement("a",{href:t.imdb},a.createElement(s.Z,{text:"IMDB"})),t&&t.imdb&&a.createElement("a",{href:t.imdb},a.createElement(s.Z,{text:"IMDB"}))))}},7210:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var a=n(67294),r=n(80383),l=n(81648);const s=function(e){const{data:t,loading:n,route:s}=e;return a.createElement(r.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},t&&t.length>0&&t.map((e=>a.createElement(l.Z,{xs:12,sm:12,md:12},e.name&&a.createElement("div",null,"Name: ",e.name),e.yearAdded&&a.createElement("div",null,"Year added: ",e.yearAdded)))))}},62947:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(67294),r=n(80383),l=n(81648),s=n(30324);const c=function(e){const{data:t,loading:n}=e;return a.createElement(r.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},a.createElement(l.Z,{xs:12,sm:12,md:12},a.createElement(s.default,{data:t})))}},30324:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var a=n(67294),r=n(80383),l=n(81648),s=n(71065),c=n(7210),m=n(56519),i=n(92124),d=n(80607),o=n(19976),u=n(43178),E=n(91293),h=n(70227);const f=function(e){var{data:t,loading:n}=e;return t=t||{},console.log(t),a.createElement(r.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},a.createElement(l.Z,{xs:12,sm:12,md:12},a.createElement("h1",null,t.title),t&&t.profession&&t.profession.length>0&&a.createElement("span",null,t.profession.map((e=>a.createElement(u.Z,{text:e}))))),a.createElement(l.Z,{xs:12,sm:12,md:12},a.createElement(E.default,{data:t})),a.createElement(l.Z,{xs:12,sm:12,md:12},a.createElement(s.default,{data:t?t.references:null})),a.createElement(l.Z,{xs:12,sm:12,md:12},a.createElement("h4",null,"General information"),t&&t.country&&t.country.length>0&&a.createElement(h.Z,{label:"Country",value:t.country.reduce((_item,tot),tot+`${_item} `,"")}),t&&t.type&&t.type.length>0&&a.createElement(h.Z,{label:"Type",value:t.type}),t&&t.genre&&t.genre.length>0&&a.createElement(h.Z,{label:"Genre",value:t.genre.map((e=>a.createElement(u.Z,{text:e})))}),t&&t.duration&&a.createElement(h.Z,{label:"Duration",value:t.duration}),t&&t.releasedDate>0&&a.createElement(h.Z,{label:"Released date",value:a.createElement(o.Z,{value:t.releasedDate})}),t&&t.endedDate>0&&a.createElement(h.Z,{label:"Ended date",value:a.createElement(o.Z,{value:t.endedDate})})),a.createElement(l.Z,{xs:12,sm:12,md:12},a.createElement(c.default,{data:t?t.streamBy:null})),a.createElement(l.Z,{xs:12,sm:12,md:12},a.createElement(m.default,{data:t?t.rating:null})),a.createElement(l.Z,{xs:12,sm:12,md:12},a.createElement(i.default,{type:"directors",data:t?t.director:null})),a.createElement(l.Z,{xs:12,sm:12,md:12},a.createElement(i.default,{type:"writers",data:t?t.writer:null})),a.createElement(l.Z,{xs:12,sm:12,md:12},a.createElement(i.default,{type:"cast",data:t?t.cast:null})),a.createElement(l.Z,{xs:12,sm:12,md:12},a.createElement(d.default,{data:t?t.awards:null})))}},30598:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(67294),r=n(91534),l=n(80383),s=n(81648),c=n(62947);function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(this,arguments)}const i=function(e){const{data:t,loading:n}=e;return a.createElement(l.Z,{className:"page-module",fill:!0},a.createElement(s.Z,{fill:!0},a.createElement(r.Z,{className:"section-0"},a.createElement(c.default,m({data:t?t.dashboard:null},e)))))}},8460:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var a=n(67294),r=n(83347),l=n(30598);function s(e){return a.createElement(r.Z,{xs:a.createElement(l.default,e)})}}}]);