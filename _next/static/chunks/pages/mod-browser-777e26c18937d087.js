(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[128],{2075:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mod-browser",function(){return n(3614)}])},4425:function(e,t,n){"use strict";n.d(t,{VO:function(){return z},Lp:function(){return I},ZP:function(){return W},wN:function(){return T}});var a=n(5893),s=n(7294),r=JSON.parse('{"blons":"Blons","cargo":"Cargo","geared":"Geared","high-finance":"HighFinance","logs":"Logs","monkey-meadow":"MonkeyMeadow","ouch":"Ouch","town-centre":"TownCentre","underground":"Underground","workshop":"Workshop"}'),l=n(4021);let i=(0,s.createContext)(["workshop",e=>{}]),o=(e,t)=>{let{clientHeight:n,clientWidth:a,scrollHeight:s,scrollWidth:r,top:l}=e,i=t.style;if(s/n<=1){i.backgroundPositionY="center";return}let o=(9*a/16-n)*(l-.5);a/n<16/9?i.backgroundPositionY="".concat(o,"px"):i.backgroundPositionY="".concat(-o,"px")},c=(0,s.forwardRef)((e,t)=>{let{children:n}=e;(0,s.useContext)(I);let[o,c]=(0,s.useState)("workshop");return(0,s.useEffect)(()=>{c(localStorage.getItem("map")||"workshop")},[]),(0,l.Z)(()=>{localStorage.setItem("map",o)},[o]),(0,a.jsxs)(i.Provider,{value:[o,c],children:[(0,a.jsx)("div",{ref:t,className:"dynamic-background",style:{position:"fixed",left:0,right:0,zIndex:-1,backgroundImage:"url(".concat("/BTD-Mod-Helper","/images/BTD6/Maps/").concat(r[o],".png)"),filter:"blur(5px)",transform:"scale(1.1)",height:"100%",width:"100%"}}),n]})});var d=n(6658),u=n(6409),h=n(1244),A=n(5792),g=n(682),p=n(1680),m=n(5001),b=n(5005),x=n(169),f=n(1664),w=n.n(f),v=n(5675),j=n.n(v),N={src:"/BTD-Mod-Helper//_next/static/media/ModsBtn.b2997d2b.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAflBMVEVMaXG7hCHLhwmdpoK9p4TdthSngVbxmwXNcgqrl4LEmia8nmS3XVuRcjV/Qj9zVVXLnj7Usn/UlxKid05oqXijpUDWly/osACUdSzIjSfOplO4kV7/oQAvpKfGlky5rYeviR+TXxx7nWuGt2VaoXC0dRKPkjbKlyFXvpPQxxtqnmY1AAAAIHRSTlMA/v3+aHn9NU8skZGke6wh/Tzpcf74/Pv+/P53+/ryhJZ2BQQAAAAJcEhZcwAADsIAAA7CARUoSoAAAABHSURBVHicFctFFoAgAEDBLyrY3Qm297+gz9kPkK+OD+DY9pCF4C9a9J2MGC0pjGUSyru99HTGpMU7N8fmgVc/1R78Tbmugg+BywPMW/TImwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},R=n(5747),y=n(1163),S=n(191),k=n(7704),Z=n(2977),D=n(4486),M=n(9100),B=n(516),E=n(2133);let C=e=>{let{path:t,title:n,href:s,disabled:r,children:l,...i}=e;return(0,a.jsx)(h.Z,{"data-toggle":"tooltip",title:n,children:(0,a.jsx)(A.Z,{as:w(),href:s,disabled:r,active:!r&&("/"===s?s===t:t.startsWith(s)),className:"text-outline-black fs-3 py-0",...i,children:l})})},V=()=>{var e;let t=(0,y.useRouter)(),n=null!==(e=null==t?void 0:t.asPath)&&void 0!==e?e:"",s="undefined"!=typeof document?document.documentElement.getAttribute("data-theme")||"light":"undefined"!=typeof localStorage&&localStorage.getItem("theme")||"light",r=(0,Z.Z)();return(0,a.jsx)(g.Z,{fluid:T,className:"p-0 my-".concat(T,"-4"),children:(0,a.jsxs)(p.Z,{variant:"dark",expand:"md",className:"luckiest-guy d-flex main-panel btd6-panel blue",children:[(0,a.jsx)(m.Z,{href:"/BTD-Mod-Helper/",className:"py-0",children:(0,a.jsx)(j(),{src:N,alt:"Mod Helper logo",width:50,height:50,loading:"eager"})}),(0,a.jsx)(m.Z,{href:"/BTD-Mod-Helper/",className:"text-outline-black text-white fs-3 py-0 me-auto",children:"BTD Mod Helper"}),(0,a.jsx)("div",{className:"ms-auto me-4",children:(0,a.jsx)(k.p,{className:"dark-mode-switch",checked:"dark"===s,sunColor:"rgba(255,255,255,.75)",moonColor:"rgba(255,255,255,.75)",onChange:()=>{let e="dark"===s?"light":"dark";localStorage.setItem("theme",e),document.documentElement.setAttribute("data-theme",e),r()},size:"2rem"})}),(0,a.jsx)(S.Z,{label:"toggle",className:"btd6-button blue p-2",children:(0,a.jsx)(E.Z,{size:"2rem",className:"text-white"})}),(0,a.jsx)(R.Z,{className:"flex-grow-0",children:(0,a.jsxs)("div",{className:"navbar-nav ms-auto text-center",children:[(0,a.jsx)(C,{path:n,href:"/",children:"Home"}),(0,a.jsx)(C,{path:n,href:"/wiki",children:"Wiki"}),(0,a.jsx)(C,{path:n,href:"/docs",children:"Docs"}),(0,a.jsx)(C,{path:n,href:"/mod-browser",children:"Mod Browser"})]})})]})})},U=e=>{let{backToTop:t}=e,n=(0,s.useContext)(I),[l,o]=(0,s.useContext)(i);return(0,a.jsxs)(g.Z,{fluid:T,className:"main-panel my-".concat(T,"-4 btd6-panel blue d-flex justify-content-between"),children:[!1!==t&&(0,a.jsx)(b.Z,{variant:"outline-light",onClick:()=>null==n?void 0:n.scrollTop(0),className:"btd6-button blue long",children:"Back to Top"}),(0,a.jsxs)(x.Z,{drop:"up",align:"end",className:"text-end ms-auto",children:[(0,a.jsx)(D.Z,{className:"btd6-panel blue-insert-round",variant:"outline-light",children:"Background"}),(0,a.jsx)(M.Z,{className:"non-main-panel bg-black btd6-panel blue-insert pe-0",children:(0,a.jsx)(z,{children:Object.keys(r).map(e=>(0,a.jsx)(B.Z,{active:e===l,className:"p-0 me-3 w-auto text-white",onClick:()=>o(e),children:r[e]},e))})})]})]})};var H=n(1419),O=n(4184),P=n.n(O);let T="lg",I=(0,s.createContext)(null),z=(0,s.forwardRef)((e,t)=>{let{children:n,...s}=e;return(0,a.jsx)(d.$B,{ref:t,universal:!0,autoHeight:!0,autoHide:!0,autoHideTimeout:1e3,autoHideDuration:200,renderTrackVertical:e=>{let{style:t,...n}=e;return(0,a.jsx)("div",{...n,style:{...t,width:10,top:2,bottom:2,borderRadius:3,right:2,backgroundColor:"rgba(255, 255, 255, 0.2)"}})},renderThumbVertical:e=>{let{style:t,...n}=e;return(0,a.jsx)("div",{...n,style:{...t,borderRadius:3,backgroundColor:"rgba(255, 255, 255, 0.5)"}})},...s,children:n})}),F=e=>{var t;let{children:n,className:r,style:l,backToTop:i,...d}=e,h=null!==(t=(0,u.g)())&&void 0!==t?t:1e3,A=(0,s.useRef)(null),g=(0,s.useRef)(null);return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(z,{ref:A,autoHeightMax:h,onUpdate:e=>o(e,g.current),children:(0,a.jsx)(I.Provider,{value:A.current,children:(0,a.jsxs)("div",{className:P()("d-flex flex-column",r),style:{minHeight:h,...l},...d,children:[(0,a.jsx)(H.Z,{}),(0,a.jsxs)(c,{ref:g,children:[(0,a.jsx)(V,{}),n,(0,a.jsx)(U,{backToTop:i})]})]})})})})};var W=F},2178:function(e,t,n){"use strict";n.d(t,{c:function(){return j},v:function(){return N}});var a=n(5893),s=n(5402),r=n(3301),l=n(2398),i=n(3398),o=n(4912),c=n(983),d=n(2935),u=n(1810),h=n(3570),A=n(6100),g=n(6861),p=n(7685),m=n(7294),b=n(1664),x=n.n(b),f=n(9523);let w=(e,t)=>(e.startsWith("https://github.com/gurrenm3/BTD-Mod-Helper/wiki")&&(e=e.replace("https://github.com/gurrenm3/BTD-Mod-Helper","")),!t||e.startsWith("http")||(e.startsWith("/")||(e="/"+e),t.endsWith("/")&&(t=t.substring(0,t.length-1)),e.startsWith(t)||(e=t+e)),e.startsWith("http")||(e=e.replace(/\.md/,"")),e),v=(e,t)=>({rewrite:n=>{var a,s,r,l;if("element"===n.type&&n.properties){if("code"===n.tagName&&(n.properties.className=[...new Set([...null!==(l=n.properties.className)&&void 0!==l?l:[],"hljs"])]),"a"===n.tagName&&(null===(a=n.properties)||void 0===a?void 0:a.href)){let t=n.properties.href;n.properties.href=w(t,e)}if("img"===n.tagName&&(null===(s=n.properties)||void 0===s?void 0:s.src)){let e=n.properties.src;n.properties.src=w(e,t)}"img"===n.tagName&&(null===(r=n.properties)||void 0===r?void 0:r.src)==="https://raw.githubusercontent.com/gurrenm3/BTD-Mod-Helper/master/banner.png"&&(n.tagName="div")}}}),j=(e,t)=>(0,s.j)().use(r.Z).use(l.Z,{allowDangerousHtml:!0}).use(i.Z).use(o.Z,{detect:!0,ignoreMissing:!0,aliases:{json:"json5"}}).use(c.Z).use(d.Z,{properties:{"aria-hidden":"true",tabIndex:-1,className:[""]}}).use(u.Z,v(e,t)).use(h.Z),N=e=>(0,A.a)().use(g.Z,{fragment:!0}).use(e?f.Z:()=>{}).use(p.Z,{createElement:m.createElement,Fragment:m.Fragment,components:{a:e=>e.href?(0,a.jsx)(x(),{...e}):(0,a.jsx)("a",{...e})}})},1419:function(e,t,n){"use strict";n.d(t,{w:function(){return l}});var a=n(5893),s=n(1664),r=n.n(s);n(7294),t.Z=()=>(0,a.jsx)(r(),{href:"#main-content",className:"position-absolute visually-hidden-focusable",onClick:()=>{var e;return null===(e=document.getElementById("main-content"))||void 0===e?void 0:e.focus()},children:"Skip to Main Content"});let l=()=>(0,a.jsx)("a",{id:"main-content",tabIndex:-1})},3614:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ex}});var a,s,r,l=n(5893),i=n(4425),o=n(7294),c=n(682),d=n(4051),u=n(1555),h=n(1211),A=n(4716),g=n(5005),p=n(169),m=n(6968),b=n(6518),x=n(1479),f=n(6212),w=n(147),v=n(3539),j=n(5386);let N=e=>"string"==typeof e&&"true"==e.toLowerCase()||parseInt(e)>0,R=async e=>{try{let t=await fetch(e,{cache:"force-cache"});if(!(null==t?void 0:t.ok))return Promise.reject();return await t.text()}catch(e){return Promise.reject()}};var y=n(8057),S=n.n(y);let k=function(e,t,n){let a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=new RegExp(n,a?"mg":"").exec(t);if(s){let t=a?s.slice(1).join(""):s["1"];if("string"===e)return t;if("boolean"===e)return N(t)}},Z=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];e.Name=k("string",t,'\\bName\\s*=\\s*"(.+)";?[\n\r]+'),e.Description=k("string",t,'\\bDescription\\s*=(?:[\\s+]*"(.+)")(?:[\\s+]*"(.+)")?(?:[\\s+]*"(.+)")?(?:[\\s+]*"(.+)")?(?:[\\s+]*"(.+)")?(?:[\\s+]*"(.+)")?(?:[\\s+]*"(.+)")?;?[\n\r]+',!0),e.Icon=k("string",t,'\\bIcon\\s*=\\s*"(.+\\.png)";?[\n\r]+'),e.DllName=k("string",t,'\\bDllName\\s*=\\s*"(.+\\.dll)";?[\n\r]+'),e.ManualDownload=k("boolean",t,"\\bManualDownload\\s*=\\s*(false|true);?[\n\r]+"),e.ZipName=k("string",t,'\\bZipName\\s*=\\s*"(.+\\.zip)";?[\n\r]+'),e.Author=k("string",t,'\\bAuthor\\s*=\\s*"(.+)";?[\n\r]+'),e.SubPath=k("string",t,'\\bSubPath\\s*=\\s*"(.+)";?[\n\r]+'),n&&(e.RepoName=k("string",t,'\\bRepoName\\s*=\\s*"(.+)";?[\n\r]+'),e.RepoOwner=k("string",t,'\\bRepoOwner\\s*=\\s*"(.+)";?[\n\r]+')),e.SquareIcon=k("boolean",t,"\\SquareIcon\\s*=\\s*(false|true);?[\n\r]+"),e.ExtraTopics=k("string",t,'\\bExtraTopics\\s*=\\s*"(.+)";?[\n\r]+'),e.WorksOnVersion=k("string",t,'\\bWorksOnVersion\\s*=\\s*"(.+)";?[\n\r]+'),e.Dependencies=k("string",t,'\\bDependencies\\s*=\\s*"(.+)";?[\n\r]+'),e.Version=k("string",t,'\\bVersion\\s*=\\s*"(.*)";?[\n\r]+')},D=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=JSON.parse(t)||{};for(let t in a)(n||"RepoName"!==t&&"RepoValue"!==t)&&(e[t]=a[t])},M=e=>(null==e?void 0:e.Name)||(null==e?void 0:e.RepoName)||"",B=e=>(null==e?void 0:e.Author)||(null==e?void 0:e.RepoOwner)||"",E=e=>e?((null==e?void 0:e.Version.toLowerCase().startsWith("v"))?"":"v")+(null==e?void 0:e.Version):"",C=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:34;return(null!==(s=null===(t=S().coerce(null==e?void 0:e.WorksOnVersion))||void 0===t?void 0:t.major)&&void 0!==s?s:0)<n},V=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return!e.SubPath||e.SubPath.endsWith(".txt")||e.SubPath.endsWith(".json")||(t=e.SubPath+"/"+t),"https://github.com/".concat(e.RepoOwner,"/").concat(e.RepoName,"/tree/").concat(e.Branch,"/").concat(t)},U=e=>{var t;return S().valid(null!==(t=e.Version)&&void 0!==t?t:"")?e.RepoName?e.RepoOwner?!e.SubPath||e.DllName||e.ZipName?null:"SubPath used without DllName/ZipName":"RepoOwner is null/empty":"RepoName is null/empty":"".concat(e.Version," is not a valid SemVer")},H=(e,t)=>{let n=t?encodeURIComponent(t):"";return!e.SubPath||e.SubPath.endsWith(".json")||e.SubPath.endsWith(".cs")||e.SubPath.endsWith(".txt")||(n="".concat(e.SubPath,"/").concat(n)),"".concat("https://raw.githubusercontent.com","/").concat(e.RepoOwner,"/").concat(e.RepoName,"/").concat(e.Branch,"/").concat(n)},O=e=>H(e,e.Icon||"Icon.png"),P=async(e,t)=>{var n,a;let s;let r={RepoName:e.name,RepoOwner:e.owner.login,Repository:e,SubPath:t,Branch:e.default_branch},l=k("string",null!==(n=e.description)&&void 0!==n?n:"",'Mod\\s+Browser\\s+Branch\\s*:\\s*"([a-zA-Z0-9\\.\\-_\\/]+)"');l&&(r.Branch=l);let i=k("string",null!==(a=e.description)&&void 0!==a?a:"",'Mod\\s*Helper\\s*Data\\s*:\\s*"([a-zA-Z0-9\\.\\-_\\/ ]+)"');i&&(r.DataPath=i),r.SubPath&&(r.SubPath.endsWith(".txt")||r.SubPath.endsWith(".json")||r.SubPath.endsWith(".cs"))?s=await R(H(r,r.SubPath)):r.DataPath&&(s=await R(H(r,r.DataPath)));try{s=await Promise.any([R(H(r,"ModHelperData.cs")),R(H(r,"ModHelperData.json")),R(H(r,"ModHelperData.txt"))])}catch(e){}if(!s){console.warn("Didn't find any ModHelperData for ".concat(r.RepoName));return}let o=s.trimStart().startsWith("{");o?D(r,s):Z(r,s);let c=U(r);if(c){console.warn(c),console.warn(r);return}return r.Topics=[...e.topics,...r.ExtraTopics?r.ExtraTopics.split(","):[]],r.Identifier="".concat(r.RepoOwner,"/").concat(r.RepoName)+(r.SubPath?"/"+r.SubPath:""),r};var T=n(4183);let I="btd6-mod",z="https://raw.githubusercontent.com/".concat("gurrenm3","/").concat("BTD-Mod-Helper","/").concat("master","/modders.json"),F=async()=>await fetch(z).then(e=>e.json()),W=async e=>{let t=new T.vd,[n,a]=e.split("/"),s=await t.rest.repos.get({owner:n,repo:a});if(s.data)return await P(s.data)},L=async(e,t)=>{let n=new T.vd,a=0,s=0,r=1;Date.now();let l=n.rest.search.repos({q:"topic:".concat(I),per_page:100,page:r}),i=(await l).data;for(t(i.total_count);i.items&&i.items.length>0;){await Promise.all(i.items.map(async n=>{let r=await P(n);r?(e(r),a++):(s++,t(i.total_count-s))})),r++;let l=await n.rest.search.repos({q:"topic:".concat(I),per_page:100,page:r});console.log(l.headers),console.log(l.status),i=l.data}t(a)};var G=n(6486);let X=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",a=e.query[t],s=(0,G.isArray)(a)?a.join(n):a;return[s,n=>e.replace({query:{...e.query,[t]:n}},void 0,{scroll:!1})]},q=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=e.query[t];return[null!=a?"true"==a:n,n=>e.replace({query:{...e.query,[t]:String(n)}},void 0,{scroll:!1})]},Q=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=e.query[t];return[(0,G.isNaN)(a)||(0,G.isNaN)(parseInt(String(a)))?n:parseInt(String(a)),n=>e.replace({query:{...e.query,[t]:String(n)}},void 0,{scroll:!1})]};var Y=n(1163),_=n(4486),J=n(9100),K=n(516),$=n(6409),ee=n(9632),et=n(4184),en=n.n(et);let ea=e=>{switch(e){case"doombubbles":return"rgba(200, 0, 255, 255)";case"gurrenm3":return"rgba(200, 150, 255, 255)";default:return"white"}};var es=n(5675),er=n.n(es),el={src:"/BTD-Mod-Helper//_next/static/media/Star.8cfad2d5.png",height:219,width:220,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAVFBMVEXqt4bevk/BlTjZrkSxgzP/3UTswD5GOBzNqED/4Ez/5Vndv0/311rHnD2qdyOyfRzYtVnt2lf93Trozl/jzHj/1jX//Wb/7FT/93f/8YX/91P//55swkG+AAAAFXRSTlMBzn/Ob/71B7T9/eP9kFJdyPL99tRx6xUFAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAQElEQVR4nAXBhQHAIBAAscP6OFSAyv57NkEQ7wUB7FwW0Gp/xmY06XVjHDNRNxfCOiv4GOLdQdSd83cJFNNaL/xVpgKfOJZy4wAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},ei={src:"/BTD-Mod-Helper//_next/static/media/HomeBtn.f5b81f60.png",height:346,width:346,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAWlBMVEVNttpNp9QB2PhmutlxqMp8vdutztmi5fVgrdFioslYqtRUpdGS6PWux9Vst9VO1fh45PU+0/pin8aDpsC0uroDt/0B3f8Axf4N1vqu6/a97vYA0/7///804v/UBUbuAAAAFXRSTlPw7/74pe9X/cS999z+SbP6/PiziimCt0wmAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAQ0lEQVR4nB3BBxLAIAgEwNOoQHoFW/7/zcxkFykOAJAQX81ZdcWovhavDNfm3vfGcFaokjEm24gOE/DzC1hEzhCu+wN52wORnCGqSgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},eo={src:"/BTD-Mod-Helper//_next/static/media/InfoBtn.e90cb0d0.png",height:130,width:130,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAYFBMVEVMaXF2nbVznbei6vYA0v+EorT///8A4f9lkrKjrbmarbuUqbr///z/9utgk7G4vcX///////8Axv8lx+shvuUAwfAGqOQaqNY60Oqz6fZu4fYIkdQAteoils0urtgPjs3FM0G3AAAAF3RSTlMA2ej+/c0V/NiToawqOfKFDxv6/f7//uod2MMAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABGSURBVHicDcvHAYAgEATAJd4BgpFo6r9Lnf8Aa5DCTYA1z37UFOEqDUXFQ2ZqjTJDXLornRnzvfWhz4DFvKWcKQLWM//9A3RtA1hopZ57AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},ec={src:"/BTD-Mod-Helper//_next/static/media/ArrowHideBtn.b535f10a.png",height:166,width:166,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAYFBMVEX///99p8F+psJ0pMEf4f2pt8Suu8lMaXGbscVsnr368u4AqvEAy/9Q3Pdi2fjJztOYssX//+93pcJYn8D/+/QQzvba9/nZ+PsGtuj+/v4MltkDwPM03/gmmtMcst8kuuaUw8QSAAAAGHRSTlMf3+fy+6GvALftQv74/v6T1DL9+kf+/v7vSScUAAAACXBIWXMAAA7CAAAOwgEVKEqAAAAARUlEQVR4nAXBBwKAIAwEsENG2W5tAfX/vzQBwW/KrgSoz5y8R9jXjGHYQ/MtcvWAiYtI6QHzk2vNzQNLS6mFAwSnlYv0A37vA3qbtXAzAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},ed={src:"/BTD-Mod-Helper//_next/static/media/VerifiedIcon.c6f0b4b6.png",height:90,width:90,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEUAHlsJF1Lu8vf9/v9MaXG/y9higKFZeJxXdptVdJve5OuhtMvZ4OhQcZYiS3oVu5Z9AAAAC3RSTlM7Dv7+AP3RxcTD/dk4Ms4AAAAJcEhZcwAADsMAAA7DAcdvqGQAAAA5SURBVHicRcuxAYAwDMRA2R8nDg/sPy5QUevECFYTg5jO9AywVGXoPM6rtNnybWV/qVLmxyPo9e4PLl8BRzqMGSwAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},eu={src:"/BTD-Mod-Helper//_next/static/media/DownloadBtn.b6a3119b.png",height:346,width:346,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAbFBMVEVs5wRpuVC666DG7qFsu1BxxUJ4xVF2ul1A2gFxr2RQ3QZ9tnCLynG707CYyoSEx2Szz6qr5od1vWKyzq6Fw2rX87yBtHS0urqKsYEvzwJz4Rb///9d3QL1+vBn7AA01gCL7jTg8tg60Apz5RBgNSMkAAAAIHRSTlP+4/389fPtwv65/KnrXvP4Uf7ISbP7nSmK//7//////uPYYtYAAAAJcEhZcwAADsIAAA7CARUoSoAAAABFSURBVHicBcGFAcAgEASwQx+pO96y/5BNME6zUlovGF7EiHpAIn8lVoLMa0kCBGZ4SsIRWDP8dIawhRZ66B67tdZfz/0DhiMD6d2UNgkAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},eh=n(2178);let eA=e=>{var t;let{mod:n,data:a,selectMod:s,showRelease:r}=e,i=n.SquareIcon?49:60,c=n.SquareIcon?"-.75rem":"-1rem",[h,A]=(0,o.useState)(!1),p=(0,o.useMemo)(()=>(0,eh.v)().processSync((null!==(t=n.Description)&&void 0!==t?t:"").replaceAll("\\n","<br/>")).result,[n.Description]),m=async()=>{if(!n.LatestRelease){let e=new T.vd;n.LatestRelease=e.rest.repos.getLatestRelease({owner:n.RepoOwner,repo:n.RepoName}).then(e=>e.data).catch(()=>null)}let e=await n.LatestRelease;if(e){e.mod=n,r(e);return}if(!n.DllName)return;let t=n.DllName;!n.SubPath||n.SubPath.endsWith(".json")||n.SubPath.endsWith(".txt")||(t=n.SubPath+t),window.open(H(n,t),"_blank")};return(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"d-flex",children:[(0,l.jsxs)(d.Z,{className:en()("non-main-panel bg-black bg-opacity-50 btd6-panel blue","user-select-none","flex-fill mx-0 p-md-0 gap-3 gap-md-0 gx-0 gx-md-3","align-items-center align-content-around justify-content-around","luckiest-guy lh-1 fs-5","flex-wrap flex-md-nowrap"),children:[(0,l.jsx)(u.Z,{id:"icon",xs:"auto",style:{margin:"-1rem 0 -1rem ".concat(c)},className:"d-lg-block",children:(0,l.jsx)("div",{style:{height:60,width:60},children:(0,l.jsx)("img",{alt:"",src:O(n),onError:e=>{let t=e.target;t.style.height="0",t.style.width="0",t.parentElement.parentElement.classList.add("d-none")},height:i,width:i})})}),(0,l.jsx)(u.Z,{id:"name",xs:8,sm:"auto",md:3,className:"text-outline-black",style:{overflowWrap:"break-word"},children:M(n)}),(0,l.jsx)(u.Z,{id:"author",xs:8,sm:"auto",md:4,className:"text-center",children:(0,l.jsxs)("a",{className:"text-outline-black text-decoration-none",href:"https://github.com/".concat(n.RepoOwner),style:{color:ea(n.RepoOwner)},target:"_blank",children:[B(n),a.verified.includes(n.RepoOwner)&&(0,l.jsx)(er(),{src:ed,height:20,width:20,alt:"VerifiedIcon",className:"ms-1 user-select-none",draggable:!1})]})}),(0,l.jsx)(u.Z,{id:"version",xs:"auto",className:"text-outline-black",children:E(n)}),(0,l.jsxs)(u.Z,{xs:"auto",id:"stars",className:"mx-md-auto text-outline-black",children:[(0,l.jsx)("a",{href:"https://github.com/".concat(n.RepoOwner,"/").concat(n.RepoName,"/stargazers"),className:"btn btd6-button p-0 border-0",target:"_blank",children:(0,l.jsx)(er(),{src:el,height:25,width:25,alt:"Star",className:"mb-1 me-1 user-select-none",draggable:!1})}),n.Repository.stargazers_count]}),(0,l.jsx)(u.Z,{id:"info",xs:"auto",children:(0,l.jsx)(er(),{src:eo,alt:"More Info",className:"btn btd6-button m-0 p-0 border-0",height:35,draggable:!1,onClick:()=>s(n)})}),(0,l.jsx)(u.Z,{id:"description",xs:"auto",children:(0,l.jsx)(er(),{src:ec,alt:"Description",className:"btn btd6-button m-0 p-0 border-0",height:35,draggable:!1,onClick:()=>A(!h)})})]},n.Identifier),(0,l.jsxs)("div",{className:"flex-shrink-0 d-flex gap-3 ms-3 flex-column flex-md-row justify-content-around",children:[(0,l.jsx)("a",{href:V(n,"#readme"),target:"_blank",children:(0,l.jsx)(er(),{src:ei,alt:"Homepage",className:"btn btd6-button m-0 p-0 border-0",height:50,width:50,loading:"eager",draggable:!1})}),(0,l.jsx)(g.Z,{className:"p-0 bg-transparent border-0",onClick:m,children:(0,l.jsx)(er(),{src:eu,alt:"Download",className:"btn btd6-button m-0 p-0 border-0",height:50,width:50,draggable:!1,loading:"eager"})})]})]}),(0,l.jsx)(b.Z,{in:h,children:(0,l.jsx)("div",{children:(0,l.jsx)("div",{className:"mt-2 btd6-panel blue-insert text-white",children:p})})})]})};var eg={src:"/BTD-Mod-Helper//_next/static/media/WarningSign.d9bde8f8.png",height:235,width:256,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAKlBMVEVMaXG6Lhe6Lha5LRe6Lhe7LxW5Lhe5Lha8Lhe5LRe4LRe8MBa7MxbGMRi9G0SZAAAADXRSTlMAZMOZpjjdnbfy7kUtjLYCbAAAAAlwSFlzAAAOwwAADsMBx2+oZAAAADNJREFUeJwdiMkNADAIwxKgF232X7cCf2wZAHyheXOOjk1aeYjUraEVMoCSh0RYHo+T9gEXuwD9gvGrMAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:7},ep=n(1419);(a=r||(r={})).RecentlyUpdated="Recently Updated",a.Popularity="Popularity",a.Alphabetical="Alphabetical",a.New="New",a.Old="Old";let em=e=>t=>{let n=new Date(t.Repository.created_at).getTime(),a=new Date(t.Repository.pushed_at||t.Repository.created_at).getTime();switch(e){case r.Popularity:return-t.Repository.stargazers_count;case r.Alphabetical:return M(t);case r.Old:return n;case r.New:return-n;case r.RecentlyUpdated:default:return-a}},eb="Filter Topic";var ex=()=>{var e;let t=(0,Y.useRouter)(),n=null!==(e=(0,$.g)())&&void 0!==e?e:1e3,[a,s]=(0,o.useState)({forceVerifiedOnly:!1,verified:[],banned:[],bannedMods:[],topics:[]}),[N,{upsert:R,reset:y}]=(0,w.Z)([]),[S,{set:k,reset:Z}]=(0,v.Z)({}),[D]=(0,o.useState)(()=>new ee.Z([],{keys:["Name","RepoName","RepoOwner","Author"]})),B=e=>{!e||a.banned.includes(e.RepoOwner)||a.bannedMods.includes(e.Identifier)||(R(t=>t.Identifier===e.Identifier,e),D.add(e),k(e.Identifier,e))},[U,O]=(0,o.useState)(100),P=()=>{y(),Z(),D.remove(()=>!0),L(B,O).then(()=>console.log("Finished populating mods"))};(0,o.useEffect)(()=>{F().then(s).then(()=>console.log("Got modders data")),P()},[]);let[T,I]=X(t,"selected-mod"),[z,et]=X(t,"topic"),[ea,es]=X(t,"search"),[el,ei]=(0,o.useState)(""),[eo,ec]=q(t,"unverified"),[eu,ex]=Q(t,"old",34);(0,j.Z)(()=>es(el),500,[el]),(0,o.useEffect)(()=>{!T||T in S||W(T).then(B)},[T]);let[ef,ew]=X(t,"sort"),ev=(0,o.useMemo)(()=>(0,G.chain)(ea?D.search(ea).map(e=>e.item):N).filter(e=>!C(e,eu)).filter(e=>eo&&!a.forceVerifiedOnly||a.verified.includes(e.RepoOwner)).filter(e=>!z||z===eb||e.Topics.includes(z)).sortBy(em(ef||r.RecentlyUpdated)).value(),[N,ef,z,ea,eo,eu]),[ej,eN]=(0,o.useState)(void 0),eR=(0,o.useMemo)(()=>{if(!(null==ej?void 0:ej.body))return(0,l.jsx)(l.Fragment,{});let e=ej.body.split(/<!--Mod Browser Message Start-->[\r\n\s]*/).findLast(e=>!!e),t=(0,eh.c)(H(ej.mod)).processSync(e);if(!t)return(0,l.jsx)(l.Fragment,{});let n=(0,eh.v)(!0).processSync(t.toString()).result;return n},[ej]),[ey,eS]=(0,o.useState)((0,l.jsx)(l.Fragment,{}));return(0,o.useEffect)(()=>{if(!T||!(T in S)){eS((0,l.jsx)(l.Fragment,{}));return}let e=S[T],t=H(e,"README.md");fetch(t,{cache:"force-cache"}).then(async t=>{let n=t?await t.text():"This mod has no README.md";n&&n.trim()||(n="This mod has an empty README.md");let a=await (0,eh.c)(V(e),H(e)).process(n),s=await (0,eh.v)(!0).process(a.toString());eS(s.result)})},[T,S[T]]),(0,l.jsxs)(i.ZP,{style:{height:n},backToTop:!1,children:[(0,l.jsxs)(c.Z,{fluid:i.wN,className:"d-flex flex-column main-panel btd6-panel blue flex-1",children:[(0,l.jsxs)(d.Z,{className:"mb-3 g-3 justify-content-between",children:[(0,l.jsx)(u.Z,{xs:7,lg:5,className:"flex-grow-1",children:(0,l.jsx)(h.Z,{onSubmit:e=>{e.preventDefault(),es(el)},children:(0,l.jsx)(A.Z,{value:el,className:"btd6-panel blue-insert-round text-white",placeholder:"Search...",onChange:e=>ei(e.target.value)})})}),!a.forceVerifiedOnly&&(0,l.jsx)(u.Z,{xs:"auto",className:"order-lg-last",children:(0,l.jsx)(g.Z,{variant:"outline-light",className:en()("btd6-button",eo?"yellow":"blue"),onClick:()=>ec(!eo),children:eo?(0,l.jsx)(er(),{src:eg,alt:"Unverified",height:20,width:20,className:"p-0",draggable:!1}):(0,l.jsx)(er(),{src:ed,alt:"Verified",height:20,width:20,className:"p-0",draggable:!1})})}),(0,l.jsx)(u.Z,{xs:5,lg:2,className:"order-lg-first",children:(0,l.jsxs)(p.Z,{children:[(0,l.jsx)(_.Z,{variant:"outline-light",className:"btd6-panel blue-insert-round w-100",children:ef||r.RecentlyUpdated}),(0,l.jsx)(J.Z,{className:"non-main-panel bg-black btd6-panel blue-insert",children:Object.entries(r).map(e=>{let[t,n]=e;return(0,l.jsx)(K.Z,{active:ef===n,onClick:()=>ew(n),className:"text-white",children:n},t)})})]})}),(0,l.jsx)(u.Z,{xs:4,lg:2,children:(0,l.jsxs)(p.Z,{children:[(0,l.jsx)(_.Z,{variant:"outline-light",className:"btd6-panel blue-insert-round w-100",children:z||eb}),(0,l.jsxs)(J.Z,{className:"non-main-panel bg-black btd6-panel blue-insert",children:[(0,l.jsx)(K.Z,{onClick:()=>et(eb),className:"text-white",active:z===eb,children:"Any"}),a.topics.map(e=>(0,l.jsx)(K.Z,{onClick:()=>et(e),className:"text-white",active:z===e,children:e},e))]})]})}),(0,l.jsx)(u.Z,{xs:3,lg:2,children:(0,l.jsxs)(p.Z,{children:[(0,l.jsx)(_.Z,{variant:"outline-light",className:"btd6-panel blue-insert-round w-100",children:0===eu?"All":"BTD6 v".concat(eu,"+")}),(0,l.jsxs)(J.Z,{className:"non-main-panel bg-black btd6-panel blue-insert",children:[(0,G.rangeRight)(34,37).map(e=>(0,l.jsx)(K.Z,{onClick:()=>ex(e),className:"text-white",active:eu===e,children:"BTD6 v".concat(e,"+")},e)),(0,l.jsx)(K.Z,{onClick:()=>ex(0),className:"text-white",active:0===eu,children:"All"})]})]})})]}),(0,l.jsx)(ep.w,{}),(0,l.jsxs)("div",{className:"flex-grow-1 position-relative btd6-panel blue-insert-round overflow-hidden p-0 mb-1",children:[0===N.length&&(0,l.jsx)("div",{className:"position-absolute top-50 start-50 translate-middle",children:(0,l.jsx)(m.Z,{})}),(0,l.jsx)(i.VO,{className:"position-absolute h-100",autoHeightMin:"100%",autoHeightMax:"100%",children:(0,l.jsx)("div",{className:"d-flex flex-column gap-3 p-3",children:ev.map(e=>(0,l.jsx)(eA,{mod:e,data:a,selectMod:e=>I(e.Identifier),showRelease:eN},e.Identifier))})})]}),(0,l.jsx)(b.Z,{in:N.length<U,children:(0,l.jsx)(x.Z,{max:U,now:N.length,animated:!0,className:"mt-2"})})]}),(0,l.jsxs)(f.Z,{id:"release",show:!!ej,onHide:()=>eN(void 0),dialogClassName:en()("main-panel btd6-panel blue"),contentClassName:en()("main-panel btd6-panel blue-insert-round pb-0 shadow-none"),children:[(0,l.jsx)(f.Z.Header,{closeButton:!0,closeVariant:"white",children:(0,l.jsxs)(f.Z.Title,{className:"luckiest-guy text-outline-black",children:[M(null==ej?void 0:ej.mod)," ",E(null==ej?void 0:ej.mod)]})}),(0,l.jsx)(f.Z.Body,{children:eR}),(0,l.jsxs)(f.Z.Footer,{className:"p-0 luckiest-guy d-flex justify-content-between",children:[(0,l.jsx)(g.Z,{variant:"outline-light",className:"btd6-button red long fs-5 pb-2 text-outline-black",style:{height:45},onClick:()=>eN(void 0),children:"Cancel"}),(0,l.jsx)(g.Z,{variant:"outline-light",className:"btd6-button blue long fs-5 pb-2 text-outline-black",style:{height:45},onClick:()=>window.open("https://github.com/".concat(null==ej?void 0:ej.mod.RepoOwner,"/").concat(null==ej?void 0:ej.mod.RepoName,"/releases")),children:"Releases"}),(0,l.jsx)(g.Z,{variant:"outline-light",className:"btd6-button green long fs-5 pb-2 text-outline-black",style:{height:45},onClick:()=>{var e;if(!ej)return;let t=ej.mod,n=null!==(e=ej.assets.find(e=>e.name===t.DllName||e.name===t.ZipName))&&void 0!==e?e:ej.assets[0];window.open(n.url,"_blank")},children:"Download"})]})]}),(0,l.jsxs)(f.Z,{id:"selectedMod",show:!!T&&T in S,size:"xl",onHide:()=>I(""),dialogClassName:en()("main-panel btd6-panel blue"),contentClassName:en()("main-panel btd6-panel blue-insert-round pb-0 shadow-none"),children:[(0,l.jsxs)(f.Z.Header,{closeButton:!0,closeVariant:"white",children:["README.md for ",M(S[T])]}),(0,l.jsx)(f.Z.Body,{children:ey})]})]})}},5696:function(){}},function(e){e.O(0,[662,664,46,427,774,888,179],function(){return e(e.s=2075)}),_N_E=e.O()}]);