(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[128],{2075:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mod-browser",function(){return a(7423)}])},2178:function(e,t,a){"use strict";a.d(t,{c8:function(){return j},vn:function(){return N}});var n=a(5893),s=a(5402),l=a(3301),i=a(2398),r=a(3398),o=a(4912),d=a(983),c=a(2935),A=a(1810),u=a(3570),h=a(6100),g=a(6861),m=a(7685),p=a(7294),b=a(1664),x=a.n(b),f=a(9523);a(6362);let w=(e,t)=>(e.startsWith("https://github.com/gurrenm3/BTD-Mod-Helper/wiki")&&(e=e.replace("https://github.com/gurrenm3/BTD-Mod-Helper","")),!t||e.startsWith("http")||(e.startsWith("/")||(e="/"+e),t.endsWith("/")&&(t=t.substring(0,t.length-1)),e.startsWith(t)||(e=t+e)),e.startsWith("http")||(e=e.replace(/\.md/,"")),e),v=(e,t)=>({rewrite:a=>{var n,s,l,i;if("element"===a.type&&a.properties){if("code"===a.tagName&&(a.properties.className=[...new Set([...null!==(i=a.properties.className)&&void 0!==i?i:[],"hljs"])]),"a"===a.tagName&&(null===(n=a.properties)||void 0===n?void 0:n.href)){let t=a.properties.href;a.properties.href=w(t,e)}if("img"===a.tagName&&(null===(s=a.properties)||void 0===s?void 0:s.src)){let e=a.properties.src;a.properties.src=w(e,t)}"img"===a.tagName&&(null===(l=a.properties)||void 0===l?void 0:l.src)==="https://raw.githubusercontent.com/gurrenm3/BTD-Mod-Helper/master/banner.png"&&(a.tagName="div")}}}),j=(e,t)=>(0,s.j)().use(l.Z).use(i.Z,{allowDangerousHtml:!0}).use(r.Z).use(o.Z,{detect:!0,ignoreMissing:!0,aliases:{json:"json5"}}).use(d.Z).use(c.Z,{properties:{"aria-hidden":"true",tabIndex:-1,className:[""]}}).use(A.Z,v(e,t)).use(u.Z),N=e=>(0,h.a)().use(g.Z,{fragment:!0}).use(e?f.Z:()=>{}).use(m.Z,{createElement:p.createElement,Fragment:p.Fragment,components:{a:e=>e.href?(0,n.jsx)(x(),{...e}):(0,n.jsx)("a",{...e})}})},7423:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return ei}});var n,s,l=a(5893),i=a(7544),r=a(7294),o=a(682),d=a(4051),c=a(1555),A=a(1211),u=a(4716),h=a(5005),g=a(169),m=a(6968),p=a(6518),b=a(1479),x=a(6212),f=a(147),w=a(3539),v=a(5386),j=a(8948),N=a(4183);let R="btd6-mod",M="https://raw.githubusercontent.com/".concat(j.Ib,"/").concat(j.BS,"/").concat(j.So,"/modders.json"),y=async()=>await fetch(M).then(e=>e.json()),Z=async e=>{let t=new N.vd,[a,n,s]=e.split("/"),l=await t.rest.repos.get({owner:a,repo:n});if(l.data)return await (0,j.sB)(l.data,s)},D=async(e,t)=>{let a=new N.vd,n=0,s=0,l=1;Date.now();let i=a.rest.search.repos({q:"topic:".concat(R),per_page:100,page:l}),r=(await i).data;for(t(r.total_count);r.items&&r.items.length>0;){await Promise.all(r.items.map(async t=>{let a=await (0,j.sB)(t);a?(e(a),n++):s++})),l++;let t=await a.rest.search.repos({q:"topic:".concat(R),per_page:100,page:l});console.log(t.headers),console.log(t.status),r=t.data}let o=(await a.rest.search.repos({q:"topic:".concat("btd6-mods"),per_page:100})).data;if(o.items&&o.items.length>0)for(let a of o.items){let s=await (0,j.hO)(a);for(let a of(t(r.total_count+o.total_count+s.length),s))a&&(e(a),n++)}t(n)},B=async(e,t,a)=>{if(!e.LatestRelease){let t=new N.vd;e.LatestRelease=t.rest.repos.getLatestRelease({owner:e.RepoOwner,repo:e.RepoName}).then(e=>e.data).catch(()=>null)}let n=await e.LatestRelease;if(n){n.mod=e,t?t(n):(S(n),e.Dependencies&&a&&a(e));return}e.DllName&&(window.open((0,j.Vw)(e,e.DllName),"_blank"),e.Dependencies&&a&&a(e))},S=e=>{var t;if(!e)return;let a=e.mod,n=null!==(t=e.assets.find(e=>e.name===a.DllName||e.name===a.ZipName))&&void 0!==t?t:e.assets[0];window.open(n.browser_download_url,"_blank")};var E=a(6486);let k=function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",n=e.query[t],s=(0,E.isArray)(n)?n.join(a):n;return[s,a=>e.replace({query:{...e.query,[t]:a}},void 0,{scroll:!1})]},C=function(e,t){let a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=e.query[t];return[null!=n?"true"==n:a,a=>e.replace({query:{...e.query,[t]:String(a)}},void 0,{scroll:!1})]},U=function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=e.query[t];return[(0,E.isNaN)(n)||(0,E.isNaN)(parseInt(String(n)))?a:parseInt(String(n)),a=>e.replace({query:{...e.query,[t]:String(a)}},void 0,{scroll:!1})]};var V=a(1163),O=a(4486),H=a(9100),T=a(516),F=a(6409),I=a(9632),z=a(6563),L=a(4184),q=a.n(L);let G=e=>{switch(e){case"doombubbles":return"rgba(200, 0, 255, 255)";case"gurrenm3":return"rgba(200, 150, 255, 255)";default:return"white"}};var X=a(5675),_=a.n(X),W={src:"/BTD-Mod-Helper//_next/static/media/Star.8cfad2d5.png",height:219,width:220,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAVFBMVEXqt4bevk/BlTjZrkSxgzP/3UTswD5GOBzNqED/4Ez/5Vndv0/311rHnD2qdyOyfRzYtVnt2lf93Trozl/jzHj/1jX//Wb/7FT/93f/8YX/91P//55swkG+AAAAFXRSTlMBzn/Ob/71B7T9/eP9kFJdyPL99tRx6xUFAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAQElEQVR4nAXBhQHAIBAAscP6OFSAyv57NkEQ7wUB7FwW0Gp/xmY06XVjHDNRNxfCOiv4GOLdQdSd83cJFNNaL/xVpgKfOJZy4wAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},P={src:"/BTD-Mod-Helper//_next/static/media/HomeBtn.f5b81f60.png",height:346,width:346,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAWlBMVEVNttpNp9QB2PhmutlxqMp8vdutztmi5fVgrdFioslYqtRUpdGS6PWux9Vst9VO1fh45PU+0/pin8aDpsC0uroDt/0B3f8Axf4N1vqu6/a97vYA0/7///804v/UBUbuAAAAFXRSTlPw7/74pe9X/cS999z+SbP6/PiziimCt0wmAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAQ0lEQVR4nB3BBxLAIAgEwNOoQHoFW/7/zcxkFykOAJAQX81ZdcWovhavDNfm3vfGcFaokjEm24gOE/DzC1hEzhCu+wN52wORnCGqSgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},Q={src:"/BTD-Mod-Helper//_next/static/media/InfoBtn.e90cb0d0.png",height:130,width:130,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAYFBMVEVMaXF2nbVznbei6vYA0v+EorT///8A4f9lkrKjrbmarbuUqbr///z/9utgk7G4vcX///////8Axv8lx+shvuUAwfAGqOQaqNY60Oqz6fZu4fYIkdQAteoils0urtgPjs3FM0G3AAAAF3RSTlMA2ej+/c0V/NiToawqOfKFDxv6/f7//uod2MMAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABGSURBVHicDcvHAYAgEATAJd4BgpFo6r9Lnf8Aa5DCTYA1z37UFOEqDUXFQ2ZqjTJDXLornRnzvfWhz4DFvKWcKQLWM//9A3RtA1hopZ57AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},Y={src:"/BTD-Mod-Helper//_next/static/media/ArrowHideBtn.b535f10a.png",height:166,width:166,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAYFBMVEX///99p8F+psJ0pMEf4f2pt8Suu8lMaXGbscVsnr368u4AqvEAy/9Q3Pdi2fjJztOYssX//+93pcJYn8D/+/QQzvba9/nZ+PsGtuj+/v4MltkDwPM03/gmmtMcst8kuuaUw8QSAAAAGHRSTlMf3+fy+6GvALftQv74/v6T1DL9+kf+/v7vSScUAAAACXBIWXMAAA7CAAAOwgEVKEqAAAAARUlEQVR4nAXBBwKAIAwEsENG2W5tAfX/vzQBwW/KrgSoz5y8R9jXjGHYQ/MtcvWAiYtI6QHzk2vNzQNLS6mFAwSnlYv0A37vA3qbtXAzAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},J={src:"/BTD-Mod-Helper//_next/static/media/VerifiedIcon.c6f0b4b6.png",height:90,width:90,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEUAHlsJF1Lu8vf9/v9MaXG/y9higKFZeJxXdptVdJve5OuhtMvZ4OhQcZYiS3oVu5Z9AAAAC3RSTlM7Dv7+AP3RxcTD/dk4Ms4AAAAJcEhZcwAADsMAAA7DAcdvqGQAAAA5SURBVHicRcuxAYAwDMRA2R8nDg/sPy5QUevECFYTg5jO9AywVGXoPM6rtNnybWV/qVLmxyPo9e4PLl8BRzqMGSwAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},K={src:"/BTD-Mod-Helper//_next/static/media/DownloadBtn.b6a3119b.png",height:346,width:346,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAbFBMVEVs5wRpuVC666DG7qFsu1BxxUJ4xVF2ul1A2gFxr2RQ3QZ9tnCLynG707CYyoSEx2Szz6qr5od1vWKyzq6Fw2rX87yBtHS0urqKsYEvzwJz4Rb///9d3QL1+vBn7AA01gCL7jTg8tg60Apz5RBgNSMkAAAAIHRSTlP+4/389fPtwv65/KnrXvP4Uf7ISbP7nSmK//7//////uPYYtYAAAAJcEhZcwAADsIAAA7CARUoSoAAAABFSURBVHicBcGFAcAgEASwQx+pO96y/5BNME6zUlovGF7EiHpAIn8lVoLMa0kCBGZ4SsIRWDP8dIawhRZ66B67tdZfz/0DhiMD6d2UNgkAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},$=a(2178);let ee=e=>{var t;let{mod:a,data:n,selectMod:s,showRelease:i,mini:o,style:A}=e,u=a.SquareIcon?50:60,g=a.SquareIcon?"-.75rem":"-1rem",[m,p]=(0,r.useState)(!1),b=(0,r.useMemo)(()=>(0,$.vn)(!0).processSync((a.Description||"No Description Provided").replaceAll("\\n","<br/>")).result,[a.Description]),x=(0,r.useRef)(null),f=(0,r.useRef)(null);return(0,l.jsxs)("div",{style:A,ref:x,children:[(0,l.jsxs)("div",{className:"d-flex",children:[(0,l.jsxs)(d.Z,{ref:f,className:q()("non-main-panel bg-black bg-opacity-50 btd6-panel blue","user-select-none","flex-fill mx-0 p-md-0 gap-3 gap-md-0 gx-0 gx-md-3","align-items-center align-content-around","luckiest-guy lh-1 fs-5","flex-wrap flex-md-nowrap",o?"justify-content-between":"justify-content-around"),children:[(0,l.jsx)(c.Z,{id:"icon",xs:"auto",style:{margin:"-1rem 0 -1rem ".concat(g)},className:"d-lg-block",children:(0,l.jsx)("div",{style:{height:60,width:60},className:"d-flex",children:(0,l.jsx)("img",{alt:"",src:(0,j.m_)(a),onError:e=>{let t=e.target;t.style.height="0",t.style.width="0",t.parentElement.parentElement.classList.add("d-none")},height:u,width:u,className:"m-auto"})})}),(0,l.jsx)(c.Z,{id:"name",xs:8,sm:"auto",md:3,className:"text-outline-black",style:{overflowWrap:"break-word"},children:(0,j.jC)(a)}),(0,l.jsx)(c.Z,{id:"author",xs:8,sm:"auto",md:4,className:"text-center",children:(0,l.jsxs)("a",{className:"text-outline-black text-decoration-none",href:"https://github.com/".concat(a.RepoOwner),style:{color:G(a.RepoOwner)},target:"_blank",children:[(0,j.uf)(a),n.verified.includes(a.RepoOwner)&&(0,l.jsx)(_(),{src:J,height:20,width:20,alt:"VerifiedIcon",className:"ms-1 user-select-none",draggable:!1})]})}),!o&&(0,l.jsx)(c.Z,{id:"version",xs:"auto",className:"text-outline-black",style:{minWidth:"5rem"},children:(0,j.c$)(a)}),!o&&(0,l.jsxs)(c.Z,{xs:"auto",id:"stars",className:"mx-md-auto text-outline-black",children:[(0,l.jsx)("a",{href:(0,j.Lg)(a),className:"btn btd6-button p-0 border-0",target:"_blank",children:(0,l.jsx)(_(),{src:W,height:25,width:25,alt:"Star",className:"mb-1 me-1 user-select-none",draggable:!1})}),(0,j.IJ)(a),a.CountOfMonoRepo?"+":" "]}),s&&(0,l.jsx)(c.Z,{id:"info",xs:"auto",children:(0,l.jsx)(_(),{src:Q,alt:"More Info",className:"btn btd6-button m-0 p-0 border-0",height:35,draggable:!1,onClick:()=>s(a)})}),(0,l.jsx)(c.Z,{id:"description",xs:"auto",children:(0,l.jsx)(_(),{src:Y,alt:"Description",className:"btn btd6-button m-0 p-0 border-0",height:35,draggable:!1,onClick:()=>p(!m)})})]},a.Identifier),(0,l.jsxs)("div",{className:"flex-shrink-0 d-flex gap-3 ms-3 flex-column flex-md-row justify-content-around",children:[(0,l.jsx)("a",{href:(0,j.S_)(a,"#readme"),target:"_blank",children:(0,l.jsx)(_(),{src:P,alt:"Homepage",className:"btn btd6-button m-0 p-0 border-0",height:50,width:50,loading:"eager",draggable:!1})}),(0,l.jsx)(h.Z,{className:"p-0 bg-transparent border-0",onClick:()=>B(a,i,o?void 0:s),children:(0,l.jsx)(_(),{src:K,alt:"Download",className:"btn btd6-button m-0 p-0 border-0",height:50,width:50,draggable:!1,loading:"eager"})})]})]}),(0,l.jsx)(z.Z,{target:f.current,container:x.current,show:m,placement:"bottom",rootClose:!0,onHide:()=>p(!1),children:(0,l.jsx)("div",{style:{width:null===(t=f.current)||void 0===t?void 0:t.clientWidth},className:"main-panel non-main-panel bg-black btd6-panel blue-insert text-white",children:b})})]})};var et={src:"/BTD-Mod-Helper//_next/static/media/WarningSign.d9bde8f8.png",height:235,width:256,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAKlBMVEVMaXG6Lhe6Lha5LRe6Lhe7LxW5Lhe5Lha8Lhe5LRe4LRe8MBa7MxbGMRi9G0SZAAAADXRSTlMAZMOZpjjdnbfy7kUtjLYCbAAAAAlwSFlzAAAOwwAADsMBx2+oZAAAADNJREFUeJwdiMkNADAIwxKgF232X7cCf2wZAHyheXOOjk1aeYjUraEVMoCSh0RYHo+T9gEXuwD9gvGrMAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:7},ea=a(1419),en=a(2242);(n=s||(s={})).RecentlyUpdated="Recently Updated",n.Popularity="Popularity",n.Alphabetical="Alphabetical",n.New="New",n.Old="Old";let es=e=>t=>{var a,n;let l=new Date(t.Repository.created_at).getTime(),i=new Date(t.Repository.pushed_at||t.Repository.created_at).getTime();if((null!==(a=t.CountOfMonoRepo)&&void 0!==a?a:1)>1){let e=Math.floor(Math.sqrt(null!==(n=t.CountOfMonoRepo)&&void 0!==n?n:1)),a=Date.now()-i;i-=a*e}switch(e){case s.Popularity:return-(0,j.IJ)(t);case s.Alphabetical:return(0,j.jC)(t);case s.Old:return l;case s.New:return-l;case s.RecentlyUpdated:default:return-i}},el="Filter Topic";var ei=()=>{var e;let t=(0,V.useRouter)(),a=null!==(e=(0,F.g)())&&void 0!==e?e:1e3,[n,N]=(0,r.useState)({forceVerifiedOnly:!1,verified:[],banned:[],bannedMods:[],topics:[]}),[R,{upsert:M,reset:B}]=(0,f.Z)([]),[z,{set:L,reset:G}]=(0,w.Z)({}),[X]=(0,r.useState)(()=>new I.Z([],{keys:["Name","RepoName","RepoOwner","Author"]})),W=e=>{!e||n.banned.includes(e.RepoOwner)||n.bannedMods.includes(e.Identifier)||(M(t=>t.Identifier===e.Identifier,e),X.add(e),L(e.Identifier,e))},[P,Q]=(0,r.useState)(100),Y=()=>{B(),G(),X.remove(()=>!0),D(W,e=>{Q(e),console.log("Setting count to ".concat(e))}).then(()=>console.log("Finished populating mods"))};(0,r.useEffect)(()=>{y().then(N).then(()=>console.log("Got modders data")),Y()},[]);let[K,ei]=k(t,"selected-mod"),[er,eo]=k(t,"topic"),[ed,ec]=k(t,"search"),[eA,eu]=(0,r.useState)(""),[eh,eg]=C(t,"unverified"),[em,ep]=U(t,"old",j.ph);(0,v.Z)(()=>ec(eA),500,[eA]),(0,r.useEffect)(()=>eu(ed),[ed]),(0,r.useEffect)(()=>{!K||K in z||Z(K).then(W)},[K]);let[eb,ex]=k(t,"sort"),ef=(0,r.useMemo)(()=>(0,E.chain)(ed?X.search(ed).map(e=>e.item):R).filter(e=>!(0,j.vy)(e,em)).filter(e=>eh&&!n.forceVerifiedOnly||n.verified.includes(e.RepoOwner)).filter(e=>!er||er===el||e.Topics.includes(er)).sortBy(es(eb||s.RecentlyUpdated)).value(),[R,eb,er,ed,eh,em]),[ew,ev]=(0,r.useState)(void 0),ej=(0,r.useMemo)(()=>{if(!(null==ew?void 0:ew.body))return(0,l.jsx)(l.Fragment,{});let e=ew.body.split(/<!--Mod Browser Message Start-->[\r\n\s]*/).findLast(e=>!!e),t=(0,$.c8)((0,j.Vw)(ew.mod)).processSync(e);if(!t)return(0,l.jsx)(l.Fragment,{});let a=(0,$.vn)(!0).processSync(t.toString()).result;return a},[ew]),[eN,eR]=(0,r.useState)((0,l.jsx)(l.Fragment,{}));(0,r.useEffect)(()=>{if(!K||!(K in z)){eR((0,l.jsx)(l.Fragment,{}));return}let e=z[K],t=(0,j.Vw)(e,"README.md");fetch(t).then(async t=>{let a=t?await t.text():"This mod has no README.md";a&&a.trim()||(a="This mod has an empty README.md");let n=await (0,$.c8)((0,j.S_)(e),(0,j.Vw)(e)).process(a),s=await (0,$.vn)(!0).process(n.toString());eR(s.result)})},[K,z[K]]);let eM=(0,r.useMemo)(()=>K&&K in z?(0,j.Ev)(z[K],z).filter(e=>e!==K):[],[K,z]),ey=(0,r.useRef)(null);return(0,l.jsxs)(i.ZP,{style:{height:a},backToTop:()=>{var e;return null===(e=ey.current)||void 0===e?void 0:e.scrollTop(0)},footerClassName:"d-none d-".concat(i.wN,"-flex"),children:[(0,l.jsx)(en.Z,{title:"BTD6 Mod Browser",description:"Browse, search and download mods for BloonsTD6 using BTD Mod Helper."}),(0,l.jsxs)(o.Z,{fluid:i.wN,className:"d-flex flex-column main-panel btd6-panel blue flex-1 gap-2",children:[(0,l.jsxs)(d.Z,{className:"g-3 justify-content-between",children:[(0,l.jsx)(c.Z,{xs:7,lg:5,className:"flex-grow-1",children:(0,l.jsx)(A.Z,{onSubmit:e=>{e.preventDefault(),ec(eA)},children:(0,l.jsx)(u.Z,{value:eA,className:"btd6-panel blue-insert-round text-white",placeholder:"Search...",onChange:e=>eu(e.target.value)})})}),!n.forceVerifiedOnly&&(0,l.jsx)(c.Z,{xs:"auto",className:"order-lg-last",children:(0,l.jsx)(h.Z,{variant:"outline-light",className:q()("btd6-button",eh?"yellow":"blue"),onClick:()=>eg(!eh),children:eh?(0,l.jsx)(_(),{src:et,alt:"Unverified",height:20,width:20,className:"p-0",draggable:!1}):(0,l.jsx)(_(),{src:J,alt:"Verified",height:20,width:20,className:"p-0",draggable:!1})})}),(0,l.jsx)(c.Z,{xs:5,lg:2,className:"order-lg-first",children:(0,l.jsxs)(g.Z,{children:[(0,l.jsx)(O.Z,{variant:"outline-light",className:"btd6-panel blue-insert-round w-100",children:eb||s.RecentlyUpdated}),(0,l.jsx)(H.Z,{className:"non-main-panel bg-black btd6-panel blue-insert",children:Object.entries(s).map(e=>{let[t,a]=e;return(0,l.jsx)(T.Z,{active:eb===a,onClick:()=>ex(a),className:"text-white",children:a},t)})})]})}),(0,l.jsx)(c.Z,{xs:4,lg:2,children:(0,l.jsxs)(g.Z,{children:[(0,l.jsx)(O.Z,{variant:"outline-light",className:"btd6-panel blue-insert-round w-100",children:er||el}),(0,l.jsxs)(H.Z,{className:"non-main-panel bg-black btd6-panel blue-insert",children:[(0,l.jsx)(T.Z,{onClick:()=>eo(el),className:"text-white",active:er===el,children:"Any"}),n.topics.map(e=>(0,l.jsx)(T.Z,{onClick:()=>eo(e),className:"text-white",active:er===e,children:e},e))]})]})}),(0,l.jsx)(c.Z,{xs:3,lg:2,children:(0,l.jsxs)(g.Z,{children:[(0,l.jsx)(O.Z,{variant:"outline-light",className:"btd6-panel blue-insert-round w-100",children:0===em?"All":"BTD6 v".concat(em,"+")}),(0,l.jsxs)(H.Z,{className:"non-main-panel bg-black btd6-panel blue-insert",children:[(0,E.rangeRight)(j.ph,j.fI+1).map(e=>(0,l.jsx)(T.Z,{onClick:()=>ep(e),className:"text-white",active:em===e,children:"BTD6 v".concat(e,"+")},e)),(0,l.jsx)(T.Z,{onClick:()=>ep(0),className:"text-white",active:0===em,children:"All"})]})]})})]}),(0,l.jsx)(ea.w,{}),(0,l.jsxs)("div",{className:"flex-grow-1 position-relative btd6-panel blue-insert-round overflow-hidden p-0",children:[0===R.length&&(0,l.jsx)("div",{className:"position-absolute top-50 start-50 translate-middle",children:(0,l.jsx)(m.Z,{})}),(0,l.jsx)(i.VO,{ref:ey,className:"position-absolute h-100",autoHeightMin:"100%",autoHeightMax:"100%",children:(0,l.jsx)("div",{className:"d-flex flex-column gap-3 p-3",children:ef.map(e=>(0,l.jsx)(ee,{mod:e,data:n,selectMod:e=>ei(e.Identifier),showRelease:ev},e.Identifier))})})]}),(0,l.jsx)(p.Z,{in:R.length<P,children:(0,l.jsx)(b.Z,{max:P,now:R.length,animated:!0,className:"mt-1"})})]}),(0,l.jsxs)(x.Z,{id:"release",show:!!ew,onHide:()=>ev(void 0),dialogClassName:q()("main-panel btd6-panel blue"),contentClassName:q()("main-panel btd6-panel blue-insert-round pb-0 shadow-none"),children:[(0,l.jsx)(x.Z.Header,{closeButton:!0,closeVariant:"white",children:(0,l.jsxs)(x.Z.Title,{className:"luckiest-guy text-outline-black",children:[(0,j.jC)(null==ew?void 0:ew.mod)," ",(0,j.c$)(null==ew?void 0:ew.mod)]})}),(0,l.jsx)(x.Z.Body,{children:ej}),(0,l.jsxs)(x.Z.Footer,{className:"p-0 luckiest-guy d-flex justify-content-between",children:[(0,l.jsx)(h.Z,{variant:"outline-light",className:"btd6-button red long fs-5 pb-2 text-outline-black",style:{height:45},onClick:()=>ev(void 0),children:"Cancel"}),(0,l.jsx)(h.Z,{variant:"outline-light",className:"btd6-button blue long fs-5 pb-2 text-outline-black",style:{height:45},onClick:()=>window.open("https://github.com/".concat(null==ew?void 0:ew.mod.RepoOwner,"/").concat(null==ew?void 0:ew.mod.RepoName,"/releases")),children:"More"}),(0,l.jsx)(h.Z,{variant:"outline-light",className:"btd6-button green long fs-5 pb-2 text-outline-black",style:{height:45},onClick:()=>{S(ew),(null==ew?void 0:ew.mod.Dependencies)&&ei(ew.mod.Identifier),ev(void 0)},children:"Download"})]})]}),(0,l.jsxs)(x.Z,{id:"selectedMod",show:!!K&&K in z,size:"xl",onHide:()=>ei(""),dialogClassName:q()("main-panel btd6-panel blue"),contentClassName:q()("main-panel btd6-panel blue-insert-round pb-0 shadow-none"),children:[(0,l.jsxs)(x.Z.Header,{closeButton:!0,closeVariant:"white",children:["README.md for ",(0,j.jC)(z[K])]}),(0,l.jsx)(x.Z.Body,{children:eN}),eM.length>0&&(0,l.jsxs)(x.Z.Footer,{className:"flex-column",children:[(0,l.jsx)("div",{className:"fs-2 m-0",children:"Dependencies"}),(0,l.jsx)("div",{children:"This mod has the following dependencies. It may not function properly if you don't download them as well."}),(0,l.jsx)("div",{className:"w-100 d-flex flex-column gap-3",children:eM.map(e=>{let t=z[e];return t?(0,l.jsx)(ee,{mod:t,data:n,mini:!0}):(0,l.jsx)("div",{className:"w-100 text-center",children:e})})})]})]})]})}},5696:function(){}},function(e){e.O(0,[662,350,588,774,888,179],function(){return e(e.s=2075)}),_N_E=e.O()}]);