"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[6319,1969,977,614],{86688:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(72797);n.Component;const l=e=>class extends n.Component{render(){const t="title"in this.props?this.props.title:null,r="placeholder"in this.props?this.props.placeholder:{};return r.width&&r.width,r.height&&r.height,n.createElement(a.Z,{from:t,style:{width:"100%"}},n.createElement(e,this.props))}}},36776:(e,t,r)=>{r.d(t,{Z:()=>n});const n={links_disabled:!1}},24186:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(67294),a=r(14670),l=r(18463),s=r(51907),i=r(79912),c=r(951),o=r(94697),d=r(22318);class m extends n.Component{render(){var{classes:e,title:t,text:r,image:a,className:m,style:h,actions:u,imageHeight:p}=this.props,g=0;return(h=h||{}).display="flex",h.flexDirection="column",a=a||"https://dummyimage.com/${(imageHeight) ? imageHeight : 300}",n.createElement(l.Z,{className:m,style:h},n.createElement(o.Z,{title:n.createElement(d.Z,{noWrap:!0,variant:"h6",component:"h4"},t),style:{display:"block",overflow:"hidden"}}),n.createElement(c.Z,{className:e.media,height:p||null,image:a}),r&&""!==r.trim&&n.createElement(i.Z,{style:{flex:1}},r),n.createElement(s.Z,null,u&&u.map((e=>n.createElement("div",{key:g++},e)))))}}const h=(0,a.Z)((e=>({media:{height:0,paddingTop:"56.25%",backgroundColor:"#efefef"}})))(m)},80383:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(86688),l=r(41749);class s extends n.Component{render(){var{direction:e,spacing:t,className:r,justify:a,alignItems:s,style:i,flex:c}=this.props,t=t||0;return i=i||{},c&&(i.display="flex"),n.createElement(l.Z,{container:!0,direction:e,justifyContent:a,alignItems:s,className:r,spacing:t,style:i},this.props.children)}}const i=(0,a.Z)(s)},81648:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(86688),l=r(41749);class s extends n.Component{render(){var{visible:e,className:t,xs:r,sm:a,md:s,style:i,fill:c,flex:o,center:d}=this.props;e=e||!0;var m={...i};return(m=m||{textAlign:"inherit"}).textAlign=d?"center":m.textAlign,c&&(m.width="100%"),o&&(m.flex=1),e&&n.createElement(l.Z,{className:t,item:!0,xs:r,sm:a,md:s,style:m},this.props.children)}}const i=(0,a.Z)(s)},83347:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(12613),l=r(86688);class s extends n.Component{render(){var{xs:e,sm:t,md:r,lg:l,xl:s}=this.props;return e=e||null,t=t||e,r=r||t,l=l||r,s=s||l,n.createElement("div",{style:{width:"100%"}},n.createElement(a.Z,{only:["sm","md","lg","xl"]},e),n.createElement(a.Z,{only:["xs","md","lg","xl"]},t),n.createElement(a.Z,{only:["xs","sm","lg","xl"]},r),n.createElement(a.Z,{only:["xs","sm","md","xl"]},l),n.createElement(a.Z,{only:["xs","sm","md","lg"]},s))}}const i=(0,l.Z)(s)},91534:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(67294),a=r(83347),l=r(86688),s=r(72797);class i extends n.Component{render(){const{className:e,cover:t,padding:r,children:l,hero:s}=this.props,i=!0===t?"100vh":"inherit";return n.createElement(a.Z,{xs:this.renderSection(l,e,i,"2rem 0rem"),sm:this.renderSection(l,e,i,"3rem 0rem"),md:this.renderSection(l,e,i,"4rem 2.5rem")})}renderSection(e,t,r,a){return n.createElement(s.Z,{from:"/core/ui/section"},n.createElement("div",{className:"com-layout-section"},n.createElement("div",{className:`${t}`,style:{boxSizing:"border-box",width:"100%",height:r,padding:a}},e)))}}const c=(0,l.Z)(i)},87558:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(73727),l=r(36776);class s extends n.Component{render(){var{children:e,className:t,to:r,href:s,style:i,external:c}=this.props;if(e=(r=(r=r||s)||"http://localhost")?e:"NO LINK DEFINED",i=i||{},r&&"string"!=typeof r)return"INVALID URL";const o=!((c=!0===c)||r&&0===r.indexOf("http")),d=o?"_self":"_blank";return 0==(0===r.indexOf("#"))&&1==o&&0==l.Z.links_disabled?n.createElement(a.OL,{className:t,to:r,style:i},e):n.createElement("a",{className:t,href:r,style:i,target:d},e)}}const i=s},25091:(e,t,r)=>{var n=r(67294),a=r(45697),l=r.n(a),s=r(24561);class i extends n.Component{render(){var{data:e,type:t,grow:r}=this.props;switch(t){case"title":case"=":case"+":e=[[["="]]];break;case"text-1-line":e=[[["=="]]];break;case"square":e=[[["-","100","100"]]];break;case"rect4:3":e=[[["-","100","75"]]]}e=this.renderPlaceholders(e);const a=r?{}:{width:e.width,height:e.height};return n.createElement(s.ZP,{style:a,height:e.height,width:e.width,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#bcbcbc"},e.phs.map((e=>e)))}renderPlaceholders(e){for(var t,r,a=0,l=[],s=0,i=0,c=0;c<e.length;c++){for(var o=e[c],d=0,m=0,h=0,u=0;u<o.length;u++){switch((t=o[u])[1]=parseInt(t[1]),t[2]=parseInt(t[2]),t[0]){case"o":r=n.createElement("rect",{key:i++,x:d,y:s,rx:"0",ry:"0",width:t[1],height:t[2]}),d+=t[1]+(c+1<e.length&&c>0?4:0),m=t[2];break;case"=":case"==":r=n.createElement("rect",{key:i++,x:d,y:s,rx:"0",ry:"0",width:100*t[0].length,height:20}),d+=100*t[0].length+(c+1<e.length&&c>0?4:0),m=20;break;default:r=n.createElement("rect",{key:i++,x:d,y:s,rx:"0",ry:"0",width:t[1],height:t[2]}),d+=t[1]+(c+1<e.length&&c>0?4:0),m=t[2]}a=d>a?d:a,h=m>h?m:h,l.push(r)}s+=h+(u+1<o.length&&u>0?4:0)}return{height:s,width:a,phs:l}}}i.propTypes={data:l().array,type:l().string,grow:l().bool},i.defaultProps={type:"custom",grow:!0}},97236:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),a=r(87558);r(36776);class l extends n.Component{render(){var{children:e,className:t,to:r,href:l,border:s,style:i,external:c}=this.props;return e=(r=(r=r||l)||"http://localhost")?e:"NO LINK DEFINED",s=!0===s||"true"===s?"text-link":"",(i=i||{}).padding=i.padding?i.padding:"0.5rem 0.75rem",t=`${s} ${t||""}`,c=!0===c,n.createElement(a.Z,{className:t,to:r,style:i,external:c},e)}}const s=l},76249:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var n=r(67294),a=r(87558);const l=function(e){const{id:t,entity:r,children:l}=e;return n.createElement(a.Z,{border:!1,to:`/movie/${t}/${encodeURIComponent(r)}`},l)}},74931:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var n=r(67294),a=r(87558);const l=function(e){const{id:t,entity:r,children:l}=e;return n.createElement(a.Z,{border:!1,to:`/podcast/${t}/${encodeURIComponent(r)}`},l)}},99140:(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});var n=r(67294),a=r(91534),l=r(80383),s=r(81648),i=r(63560),c=r(91891);const o=function(e){const{data:t}=e;return n.createElement(l.Z,{className:"page-module",fill:!0},n.createElement(s.Z,{fill:!0},n.createElement(a.Z,{className:"section-0"},n.createElement(i.default,null))),n.createElement(s.Z,{fill:!0},n.createElement(a.Z,{className:"section-0"},n.createElement(c.default,null))))}},38157:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var n=r(67294),a=r(70614),l=r(76249),s=r(24186);function i(e){const{data:t,loading:r}=e,{}=t||{};return n.createElement(a.default,{data:t,renderItem:c})}function c(e){const{id:t,description:r,title:a,image:i,link:c}=e;return n.createElement(l.default,{id:t,entity:a},n.createElement("div",{style:{padding:"0.5rem"}},n.createElement(s.Z,{image:i,imageWidth:100,text:e.awards[0].category,title:a})))}},91891:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var n=r(67294),a=r(80383),l=r(81648),s=(r(25091),r(87125),r(93775),r(97236)),i=r(38157);const c=(0,r(51969).default)((function(e){const{data:t,loading:r}=e;return n.createElement("div",{style:{width:"100%"}},n.createElement(a.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},n.createElement(l.Z,{xs:12,sm:12,md:12},n.createElement("h1",null,"Movies Awards")),n.createElement(l.Z,{xs:12,sm:12,md:12},n.createElement(i.default,{data:t})),n.createElement(l.Z,{xs:12,sm:12,md:12},n.createElement(s.Z,{href:"/movies/stories/awards"}," See all"))))}))},51969:(e,t,r)=>{r.r(t),r.d(t,{QRY:()=>i,default:()=>c});var n=r(67294),a=r(54397),l=r(70846);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}const i=a.Ps`
  query getStory
{
  storiesMovieAwards {
    id
    title
    image
    link
    awards {
      category
      name
      won
      year
    }
  }
}
`,c=e=>function(t){var r=(0,l.a)(i);return r.data=r.data?r.data.storiesMovieAwards:{},n.createElement(e,s({},t,r))}},12864:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var n=r(67294),a=r(70614),l=r(74931),s=r(24186);function i(e){const{data:t,loading:r}=e,{}=t||{};return n.createElement(a.default,{data:t,renderItem:c})}function c(e){const{id:t,description:r,title:a,image:i,link:c}=e;return n.createElement(l.default,{id:t,entity:a},n.createElement("div",{style:{padding:"0.5rem"}},n.createElement(s.Z,{image:i,imageHeight:100,text:r,title:a})))}},63560:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var n=r(67294),a=r(80383),l=r(81648),s=(r(25091),r(87125),r(93775),r(97236)),i=r(12864);const c=(0,r(30977).default)((function(e){const{data:t,loading:r}=e;return console.log(e),n.createElement("div",{style:{width:"100%"}},n.createElement(a.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},n.createElement(l.Z,{xs:12,sm:12,md:12},n.createElement("h1",null,"Music Podcasts")),n.createElement(l.Z,{xs:12,sm:12,md:12},n.createElement(i.default,{data:t})),n.createElement(l.Z,{xs:12,sm:12,md:12},n.createElement(s.Z,{href:"/podcasts/stories/music"}," See all"))))}))},30977:(e,t,r)=>{r.r(t),r.d(t,{QRY:()=>i,default:()=>c});var n=r(67294),a=r(54397),l=r(70846);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}const i=a.Ps`
  query getStory
{
  storiesPodcastMusic {
    id
    title
    link
    image
  }
}
`,c=e=>function(t){var r=(0,l.a)(i);return r.data=r.data?r.data.storiesPodcastMusic:{},n.createElement(e,s({},t,r))}},70614:(e,t,r)=>{r.r(t),r.d(t,{default:()=>l});var n=r(67294),a=r(86529);function l(e){const{data:t,loading:r}=e,{}=t||{};return n.createElement(a.default,{additionalTransfrom:0,arrows:!0,autoPlaySpeed:3e3,centerMode:!1,className:"",containerClass:"container-with-dots",dotListClass:"",draggable:!0,focusOnSelect:!1,infinite:!0,itemClass:"",keyBoardControl:!0,minimumTouchDrag:80,renderButtonGroupOutside:!1,renderDotsOutside:!1,responsive:{desktop:{breakpoint:{max:3e3,min:1024},items:3,partialVisibilityGutter:40},mobile:{breakpoint:{max:464,min:0},items:1,partialVisibilityGutter:30},tablet:{breakpoint:{max:1024,min:464},items:2,partialVisibilityGutter:30}},showDots:!1,sliderClass:"",slidesToSlide:1,swipeable:!0},t&&t.length>0&&t.map(((t,r)=>n.createElement("div",{key:r},e.renderItem?e.renderItem(t):function(e){const{id:t,description:r,title:a,image:l,link:s}=e;return n.createElement("div",null,n.createElement("h1",null,a),n.createElement("span",null,r))}(t)))))}}}]);