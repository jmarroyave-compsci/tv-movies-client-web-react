"use strict";(globalThis.webpackChunkreact=globalThis.webpackChunkreact||[]).push([[4457,5070,4990],{86688:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(72797);n.Component;const l=e=>class extends n.Component{render(){const t="title"in this.props?this.props.title:null,a="placeholder"in this.props?this.props.placeholder:{};return a.width&&a.width,a.height&&a.height,n.createElement(r.Z,{from:t,style:{width:"100%"}},n.createElement(e,this.props))}}},19976:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=(a(45697),a(19119)),l=a(34902);class s extends n.Component{getDate(e){try{if(!e||null==e||""===e||0==e.length)return new Date;if(e instanceof Date)return new Date(e);const t=Number(e);return Number.isInteger(t)?new Date(t):new Date(e)}catch(e){return new Date}}_format(e,t,a){switch(a){case"ago":return(0,r.Z)(t,new Date);case"DD/MM/YYYY":return(0,l.Z)(t,"dd/MM/yy");default:return(0,l.Z)(t,a)}}render(){var{lang:e,value:t,className:a}=this.props;e=e||"en";const r=this.props.format?this.props.format:"ago",l=this.getDate(t),s=this._format(e,l,r);return n.createElement("span",{className:a},s)}}const i=s},93013:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}class l extends n.Component{render(){var{src:e,width:t,height:a,style:l,notFound:s}=this.props,i={};return s&&(i.ref=e=>this.img=e,i.onError=()=>s&&this.img.src!=s?this.img.src=s:null),n.createElement("img",r({},i,{style:l,width:t,height:a,src:e}))}}const s=l},80383:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86688),l=a(41749);class s extends n.Component{render(){var{direction:e,spacing:t,className:a,justify:r,alignItems:s,style:i,flex:c}=this.props,t=t||0;return i=i||{},c&&(i.display="flex"),n.createElement(l.Z,{container:!0,direction:e,justifyContent:r,alignItems:s,className:a,spacing:t,style:i},this.props.children)}}const i=(0,r.Z)(s)},81648:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86688),l=a(41749);class s extends n.Component{render(){var{visible:e,className:t,xs:a,sm:r,md:s,style:i,fill:c,flex:o,center:m}=this.props;e=e||!0;var d={...i};return(d=d||{textAlign:"inherit"}).textAlign=m?"center":d.textAlign,c&&(d.width="100%"),o&&(d.flex=1),e&&n.createElement(l.Z,{className:t,item:!0,xs:a,sm:r,md:s,style:d},this.props.children)}}const i=(0,r.Z)(s)},83347:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(12613),l=a(86688);class s extends n.Component{render(){var{xs:e,sm:t,md:a,lg:l,xl:s}=this.props;return e=e||null,t=t||e,a=a||t,l=l||a,s=s||l,n.createElement("div",{style:{width:"100%"}},n.createElement(r.Z,{only:["sm","md","lg","xl"]},e),n.createElement(r.Z,{only:["xs","md","lg","xl"]},t),n.createElement(r.Z,{only:["xs","sm","lg","xl"]},a),n.createElement(r.Z,{only:["xs","sm","md","xl"]},l),n.createElement(r.Z,{only:["xs","sm","md","lg"]},s))}}const i=(0,l.Z)(s)},91534:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(67294),r=a(83347),l=a(86688),s=a(72797);class i extends n.Component{render(){const{className:e,cover:t,padding:a,children:l,hero:s}=this.props,i=!0===t?"100vh":"inherit";return n.createElement(r.Z,{xs:this.renderSection(l,e,i,"2rem 0rem"),sm:this.renderSection(l,e,i,"3rem 0rem"),md:this.renderSection(l,e,i,"4rem 2.5rem")})}renderSection(e,t,a,r){return n.createElement(s.Z,{from:"/core/ui/section"},n.createElement("div",{className:"com-layout-section"},n.createElement("div",{className:`${t}`,style:{boxSizing:"border-box",width:"100%",height:a,padding:r}},e)))}}const c=(0,l.Z)(i)},43178:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(1565),l=a(71267);function s({text:e,onClick:t}){return n.createElement(i,null,n.createElement(l.Z,{variant:"outlined",size:"small",label:e,onClick:t}))}s.defaultProps={onClick:null,text:""};const i=r.ZP.div`
	display: inline-block;
	margin: 0;
	margin-right: 0.25rem;
	margin-bottom: 0.25rem;
`},70227:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294);function r(e){const{label:t,value:a}=e;return n.createElement("div",null,t&&n.createElement("span",{style:{fontWeight:"bold"}},t,":"),n.createElement("span",null,a))}},80607:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var n=a(67294),r=a(80383),l=a(81648),s=a(70227);const i=function(e){const{data:t,loading:a,route:i}=e;return t?n.createElement(r.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},n.createElement("h4",null,"Awards"),t&&t.length>0&&t.map((e=>n.createElement(l.Z,{xs:12,sm:12,md:12},e.year&&n.createElement(s.Z,{label:"Year",value:e.year}),e.name&&n.createElement(s.Z,{label:"Name",value:e.name}),e.category&&n.createElement(s.Z,{label:"Category",value:e.category}),e.won&&n.createElement(s.Z,{label:"Won",value:e.won}))))):null}},91293:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var n=a(67294),r=a(80383),l=a(81648),s=a(93013),i=a(92863);function c({data:e}){return e&&e.image?n.createElement(s.Z,{src:e.image,width:"150",height:"150"}):n.createElement(o,null)}function o(){return n.createElement("div",{style:{width:"8rem",height:"8rem",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#efefef"}},n.createElement(i.Z,null,"broken_image"))}const m=function(e){const{data:t,loading:a}=e;return n.createElement(r.Z,{fill:!0,style:{width:"100%",backgroundColor:"#333"}},n.createElement(l.Z,{xs:12,sm:12,md:12},n.createElement(c,{data:t})))}},71065:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var n=a(67294),r=a(80383),l=a(81648),s=a(43178);const i=function(e){const{data:t,loading:a,route:i}=e;return n.createElement(r.Z,null,n.createElement(l.Z,{xs:12,sm:12,md:12},n.createElement("h4",null,"More information")),n.createElement(l.Z,{xs:12,sm:12,md:12},t&&t.imdb&&n.createElement("a",{href:t.imdb},n.createElement(s.Z,{text:"IMDB"})),t&&t.imdb&&n.createElement("a",{href:t.imdb},n.createElement(s.Z,{text:"IMDB"})),t&&t.imdb&&n.createElement("a",{href:t.imdb},n.createElement(s.Z,{text:"IMDB"}))))}},93374:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var n=a(67294),r=a(80383),l=a(81648),s=a(77053);const i=function(e){const{data:t,loading:a}=e;return n.createElement(r.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},n.createElement(l.Z,{xs:12,sm:12,md:12},n.createElement(s.default,{data:t})))}},77053:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var n=a(67294),r=a(80383),l=a(81648),s=a(71065),i=a(80607),c=a(19976),o=a(43178),m=a(91293);const d=function(e){var{data:t,loading:a}=e;return t=t||{},n.createElement(r.Z,{justifyContent:"center",fill:!0,style:{width:"100%"}},n.createElement(l.Z,{xs:12,sm:12,md:12},n.createElement("h1",null,t.name),t&&t.profession&&t.profession.length>0&&n.createElement("span",null,t.profession.map((e=>n.createElement(o.Z,{text:e}))))),n.createElement(l.Z,{xs:12,sm:12,md:12},n.createElement(m.default,{data:t})),n.createElement(l.Z,{xs:12,sm:12,md:12},n.createElement(s.default,{data:t?t.references:null})),n.createElement(l.Z,{xs:12,sm:12,md:12},n.createElement("h4",null,"General information"),t&&t.birthDate&&n.createElement("span",null,"Birth date: ",n.createElement(c.Z,{value:t.birthDate}))),n.createElement(l.Z,{xs:12,sm:12,md:12},t&&t.directed&&t.directed.length>0&&n.createElement("span",null,"Directed: ",t.directed.map((e=>`${e} `)))),n.createElement(l.Z,{xs:12,sm:12,md:12},t&&t.acted&&t.acted.length>0&&n.createElement("span",null,"Acted: ",t.acted.map((e=>`${e} `)))),n.createElement(l.Z,{xs:12,sm:12,md:12},n.createElement(i.default,{data:t?t.awards:null})))}},34990:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var n=a(67294),r=a(91534),l=a(80383),s=a(81648),i=a(93374);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c.apply(this,arguments)}const o=function(e){const{data:t}=e;return n.createElement(l.Z,{className:"page-module",fill:!0},n.createElement(s.Z,{fill:!0},n.createElement(r.Z,{className:"section-0"},n.createElement(i.default,c({data:t?t.dashboard:null},e)))))}},55070:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});var n=a(67294),r=a(83347),l=a(34990);function s(e){return n.createElement(r.Z,{xs:n.createElement(l.default,e)})}},4457:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l,Controls:()=>i,Loading:()=>c});var n=a(55070),r=a(7046);const l={title:"Project/Pages/Person/Page"},s=e=>React.createElement(n.default,e),i=s.bind({});i.args={data:r};const c=s.bind({});c.args={loading:!0}},7046:e=>{e.exports=JSON.parse('{"dashboard":{"actors":32600,"countries":{"brazil":88,"mexico":154,"singapore":39,"unitedStates":3297,"turkey":108,"egypt":110,"india":990,"poland":36,"thailand":65,"nigeria":76,"norway":29,"iceland":9,"unitedKingdom":723,"japan":287,"southKorea":212,"italy":90,"canada":412,"indonesia":80,"romania":12,"spain":215,"southAfrica":54,"france":349,"portugal":4,"hongKong":102,"china":147,"germany":199,"argentina":82,"serbia":7,"denmark":44,"kenya":5,"newZealand":28,"pakistan":24,"australia":144,"taiwan":85,"netherlands":45,"philippines":78,"unitedArabEmirates":34,"iran":4,"belgium":85,"israel":26,"uruguay":14,"bulgaria":9,"chile":26,"russia":27,"mauritius":1,"lebanon":26,"colombia":45,"algeria":2,"sovietUnion":3,"sweden":39,"malaysia":26,"ireland":40,"luxembourg":11,"finland":11,"austria":11,"peru":10,"senegal":3,"switzerland":17,"ghana":4,"saudiArabia":10,"armenia":1,"jordan":8,"mongolia":1,"namibia":2,"qatar":7,"vietnam":5,"syria":1,"kuwait":7,"malta":3,"czechRepublic":20,"bahamas":1,"sriLanka":1,"caymanIslands":2,"bangladesh":3,"zimbabwe":3,"hungary":9,"latvia":1,"liechtenstein":1,"venezuela":3,"morocco":6,"cambodia":5,"albania":1,"cuba":1,"nicaragua":1,"greece":10,"croatia":4,"guatemala":2,"westGermany":5,"slovenia":3,"dominicanRepublic":1,"nepal":2,"samoa":1,"azerbaijan":1,"bermuda":1,"ecuador":1,"georgia":2,"botswana":1,"puertoRico":1,"iraq":2,"vaticanCity":1,"angola":1,"ukraine":3,"jamaica":1,"belarus":1,"cyprus":1,"kazakhstan":1,"malawi":1,"slovakia":1,"lithuania":1,"afghanistan":1,"paraguay":1,"somalia":1,"sudan":1,"panama":1,"uganda":1,"eastGermany":1,"montenegro":1},"directors":4324,"genres":{"international":3636,"dramas":2810,"sciFiFantasy":294,"horror":381,"actionAdventure":871,"independent":673,"mysteries":90,"thrillers":541,"crime":427,"documentaries":1139,"sports":196,"comedies":1996,"anime":205,"realityTv":222,"romantic":864,"scienceNature":85,"british":232,"korean":150,"musicals":321,"lgbtq":90,"faithSpirituality":57,"childrenFamily":946,"spanish":147,"classicCult":189,"standUpComedyTalkShows":381,"teen":60},"lastUpdate":"2021-09-15T15:01:49.939Z","movies":7787,"people":36924,"types":{"tvShow":2410,"movie":5377},"yearsAdded":{"_2003":2,"_2008":3,"_2009":2,"_2010":2,"_2011":13,"_2012":4,"_2013":12,"_2014":25,"_2015":90,"_2016":444,"_2017":1225,"_2018":1686,"_2019":2153,"_2020":2009,"_2021":117},"yearsReleased":{"_1925":1,"_1942":2,"_1943":3,"_1944":3,"_1945":3,"_1946":2,"_1947":1,"_1954":2,"_1955":3,"_1956":2,"_1958":3,"_1959":1,"_1960":4,"_1962":3,"_1963":2,"_1964":1,"_1965":2,"_1966":1,"_1967":5,"_1968":5,"_1969":2,"_1970":2,"_1971":5,"_1972":4,"_1973":10,"_1974":7,"_1975":6,"_1976":9,"_1977":7,"_1978":6,"_1979":11,"_1980":9,"_1981":9,"_1982":15,"_1983":9,"_1984":9,"_1985":9,"_1986":10,"_1987":7,"_1988":16,"_1989":13,"_1990":20,"_1991":17,"_1992":18,"_1993":22,"_1994":16,"_1995":19,"_1996":19,"_1997":30,"_1998":31,"_1999":33,"_2000":34,"_2001":36,"_2002":45,"_2003":49,"_2004":59,"_2005":73,"_2006":85,"_2007":85,"_2008":125,"_2009":137,"_2010":173,"_2011":166,"_2012":219,"_2013":267,"_2014":334,"_2015":541,"_2016":882,"_2017":1012,"_2018":1121,"_2019":996,"_2020":868,"_2021":31}}}')}}]);