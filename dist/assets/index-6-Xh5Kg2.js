const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-DXA8gRz8.js","assets/ui-DAU4k1b6.js","assets/vendor-DT0XRDtV.js","assets/PropertyCard-DvC_jjFk.js","assets/sampleProperties-j9elrmJq.js","assets/firebase-Bxb2gaWh.js","assets/PropertyListing-SkJdOghT.js","assets/propertyStore-Cs35kvID.js","assets/PropertyDetail-DPI1nMFQ.js","assets/userActivityStore-Cgm3UK6s.js","assets/Login-BsD0nIsr.js","assets/index-TdgoUJzE.js","assets/Register-CM93etGO.js","assets/BuyerDashboard-DC4AbZBs.js","assets/SellerDashboard-CZugvObT.js","assets/BrokerDashboard-Bo-CVykt.js","assets/BuilderDashboard-CrMW0qcK.js","assets/AdminDashboard-BMJwXTBu.js","assets/projectStore-dPSda5W_.js","assets/AddProperty-Kzmn3nR2.js","assets/EditProperty-Bb9wjLXY.js","assets/ChatPage-d2M1cRLV.js","assets/SavedProperties-j-1RpO9Y.js","assets/Profile-DU-mNsMQ.js","assets/Notifications-10wxEBoZ.js","assets/Projects-zXHtqAYy.js","assets/Blog-BLbNmArK.js","assets/Resources-CuBDiU1x.js","assets/About-C6UfJYxG.js","assets/HomeLoan-YiBxgF7I.js","assets/PropertyValuation-C1_uiD6H.js","assets/jspdf.es.min-XGFFavYl.js","assets/RentalAgreement-Bsqz1eQX.js"])))=>i.map(i=>d[i]);
var Qt=Object.defineProperty;var Zt=(e,t,a)=>t in e?Qt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var W=(e,t,a)=>Zt(e,typeof t!="symbol"?t+"":t,a);import{G as u,j as r,z as Y,F as ea}from"./ui-DAU4k1b6.js";import{r as ta,d as c,R as oe,L as R,N as Le,b as aa,a as k,B as ra}from"./vendor-DT0XRDtV.js";import{O as me,a as ge,C as ve,_ as Fe,E as vt,D as Ue,F as na,h as Re,r as Ke,k as ia,a3 as sa,w as oa,c as ca,v as la,l as da,q as ua,s as ha,m as pa,G as fa,P as ma,z as ga,j as D,n as He,$ as X,S as $,U as ae,W as va,R as wa,Q as ya,Y as ba,X as xa,V as ka,g as Ra,a0 as Ta,M as F,A as Oe,B as Sa,H as nt,a4 as q,x as Te,Z as Ea,K as Se,f as de,o as Ee,d as Ca,t as Ce,e as ja,i as Aa,N as Pa,a1 as Ia,p as _a,b as Na,L as Ma,y as La,I as Ha,J as Oa,T as ue}from"./firebase-Bxb2gaWh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=a(i);fetch(i.href,s)}})();var De={},it=ta;De.createRoot=it.createRoot,De.hydrateRoot=it.hydrateRoot;var wt=(e=>(e.BASE="base",e.BODY="body",e.HEAD="head",e.HTML="html",e.LINK="link",e.META="meta",e.NOSCRIPT="noscript",e.SCRIPT="script",e.STYLE="style",e.TITLE="title",e.FRAGMENT="Symbol(react.fragment)",e))(wt||{}),je={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}};Object.values(wt);var qe={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"};Object.entries(qe).reduce((e,[t,a])=>(e[a]=t,e),{});var ne="data-rh",Da=e=>Array.isArray(e)?e.join(""):e,za=(e,t)=>{const a=Object.keys(e);for(let n=0;n<a.length;n+=1)if(t[a[n]]&&t[a[n]].includes(e[a[n]]))return!0;return!1},Ae=(e,t)=>Array.isArray(e)?e.reduce((a,n)=>(za(n,t)?a.priority.push(n):a.default.push(n),a),{priority:[],default:[]}):{default:e,priority:[]},Ba=["noscript","script","style"],ze=(e,t=!0)=>t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),yt=e=>Object.keys(e).reduce((t,a)=>{const n=typeof e[a]<"u"?`${a}="${e[a]}"`:`${a}`;return t?`${t} ${n}`:n},""),Va=(e,t,a,n)=>{const i=yt(a),s=Da(t);return i?`<${e} ${ne}="true" ${i}>${ze(s,n)}</${e}>`:`<${e} ${ne}="true">${ze(s,n)}</${e}>`},$a=(e,t,a=!0)=>t.reduce((n,i)=>{const s=i,o=Object.keys(s).filter(g=>!(g==="innerHTML"||g==="cssText")).reduce((g,l)=>{const h=typeof s[l]>"u"?l:`${l}="${ze(s[l],a)}"`;return g?`${g} ${h}`:h},""),d=s.innerHTML||s.cssText||"",v=Ba.indexOf(e)===-1;return`${n}<${e} ${ne}="true" ${o}${v?"/>":`>${d}</${e}>`}`},""),bt=(e,t={})=>Object.keys(e).reduce((a,n)=>{const i=qe[n];return a[i||n]=e[n],a},t),Fa=(e,t,a)=>{const n={key:t,[ne]:!0},i=bt(a,n);return[oe.createElement("title",i,t)]},pe=(e,t)=>t.map((a,n)=>{const i={key:n,[ne]:!0};return Object.keys(a).forEach(s=>{const d=qe[s]||s;if(d==="innerHTML"||d==="cssText"){const v=a.innerHTML||a.cssText;i.dangerouslySetInnerHTML={__html:v}}else i[d]=a[s]}),oe.createElement(e,i)}),V=(e,t,a=!0)=>{switch(e){case"title":return{toComponent:()=>Fa(e,t.title,t.titleAttributes),toString:()=>Va(e,t.title,t.titleAttributes,a)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>bt(t),toString:()=>yt(t)};default:return{toComponent:()=>pe(e,t),toString:()=>$a(e,t,a)}}},Ua=({metaTags:e,linkTags:t,scriptTags:a,encode:n})=>{const i=Ae(e,je.meta),s=Ae(t,je.link),o=Ae(a,je.script);return{priorityMethods:{toComponent:()=>[...pe("meta",i.priority),...pe("link",s.priority),...pe("script",o.priority)],toString:()=>`${V("meta",i.priority,n)} ${V("link",s.priority,n)} ${V("script",o.priority,n)}`},metaTags:i.default,linkTags:s.default,scriptTags:o.default}},Ka=e=>{const{baseTag:t,bodyAttributes:a,encode:n=!0,htmlAttributes:i,noscriptTags:s,styleTags:o,title:d="",titleAttributes:v,prioritizeSeoTags:g}=e;let{linkTags:l,metaTags:h,scriptTags:b}=e,S={toComponent:()=>{},toString:()=>""};return g&&({priorityMethods:S,linkTags:l,metaTags:h,scriptTags:b}=Ua(e)),{priority:S,base:V("base",t,n),bodyAttributes:V("bodyAttributes",a,n),htmlAttributes:V("htmlAttributes",i,n),link:V("link",l,n),meta:V("meta",h,n),noscript:V("noscript",s,n),script:V("script",b,n),style:V("style",o,n),title:V("title",{title:d,titleAttributes:v},n)}},qa=Ka,he=[],xt=!!(typeof window<"u"&&window.document&&window.document.createElement),Ga=class{constructor(e,t){W(this,"instances",[]);W(this,"canUseDOM",xt);W(this,"context");W(this,"value",{setHelmet:e=>{this.context.helmet=e},helmetInstances:{get:()=>this.canUseDOM?he:this.instances,add:e=>{(this.canUseDOM?he:this.instances).push(e)},remove:e=>{const t=(this.canUseDOM?he:this.instances).indexOf(e);(this.canUseDOM?he:this.instances).splice(t,1)}}});this.context=e,this.canUseDOM=t||!1,t||(e.helmet=qa({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},Wa={},Ya=oe.createContext(Wa),Z,Ja=(Z=class extends c.Component{constructor(a){super(a);W(this,"helmetData");this.helmetData=new Ga(this.props.context||{},Z.canUseDOM)}render(){return oe.createElement(Ya.Provider,{value:this.helmetData.value},this.props.children)}},W(Z,"canUseDOM",xt),Z);const Xa="modulepreload",Qa=function(e){return"/"+e},st={},T=function(t,a,n){let i=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),d=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(a.map(v=>{if(v=Qa(v),v in st)return;st[v]=!0;const g=v.endsWith(".css"),l=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${v}"]${l}`))return;const h=document.createElement("link");if(h.rel=g?"stylesheet":Xa,g||(h.as="script"),h.crossOrigin="",h.href=v,d&&h.setAttribute("nonce",d),document.head.appendChild(h),g)return new Promise((b,S)=>{h.addEventListener("load",b),h.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${v}`)))})}))}function s(o){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=o,window.dispatchEvent(d),!d.defaultPrevented)throw o}return i.then(o=>{for(const d of o||[])d.status==="rejected"&&s(d.reason);return t().catch(s)})};function Za(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"},child:[]}]})(e)}function Ii(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"},child:[]}]})(e)}function _i(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"},child:[]}]})(e)}function Ni(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"},child:[]}]})(e)}function Mi(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"},child:[]}]})(e)}function Li(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"},child:[]}]})(e)}function Hi(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z",clipRule:"evenodd"},child:[]}]})(e)}function Oi(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z",clipRule:"evenodd"},child:[]}]})(e)}function Di(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"},child:[]}]})(e)}function er(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"},child:[]}]})(e)}function zi(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"},child:[]}]})(e)}function Bi(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"},child:[]}]})(e)}function Vi(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"},child:[]}]})(e)}function $i(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"},child:[]}]})(e)}function Fi(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z",clipRule:"evenodd"},child:[]}]})(e)}function tr(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z",clipRule:"evenodd"},child:[]}]})(e)}function ar(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"},child:[]}]})(e)}function Ui(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"},child:[]}]})(e)}function Ki(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"},child:[]}]})(e)}function rr(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"},child:[]}]})(e)}function nr(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"},child:[]}]})(e)}function ir(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"},child:[]},{tag:"path",attr:{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"},child:[]}]})(e)}function sr(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z",clipRule:"evenodd"},child:[]}]})(e)}function qi(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",clipRule:"evenodd"},child:[]}]})(e)}function or(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",clipRule:"evenodd"},child:[]}]})(e)}function Gi(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z",clipRule:"evenodd"},child:[]}]})(e)}function Wi(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"},child:[]}]})(e)}function Yi(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",clipRule:"evenodd"},child:[]}]})(e)}function Ji(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z",clipRule:"evenodd"},child:[]}]})(e)}function Xi(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"},child:[]},{tag:"path",attr:{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",clipRule:"evenodd"},child:[]}]})(e)}function Qi(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",clipRule:"evenodd"},child:[]}]})(e)}function Zi(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z",clipRule:"evenodd"},child:[]}]})(e)}function es(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z",clipRule:"evenodd"},child:[]}]})(e)}function ts(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"},child:[]},{tag:"path",attr:{d:"M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"},child:[]},{tag:"path",attr:{d:"M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"},child:[]}]})(e)}function as(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM7 5a1 1 0 100 2h1a2 2 0 011.732 1H7a1 1 0 100 2h2.732A2 2 0 018 11H7a1 1 0 00-.707 1.707l3 3a1 1 0 001.414-1.414l-1.483-1.484A4.008 4.008 0 0011.874 10H13a1 1 0 100-2h-1.126a3.976 3.976 0 00-.41-1H13a1 1 0 100-2H7z",clipRule:"evenodd"},child:[]}]})(e)}function rs(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"},child:[]},{tag:"path",attr:{fillRule:"evenodd",d:"M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z",clipRule:"evenodd"},child:[]}]})(e)}function ns(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"},child:[]}]})(e)}function is(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"},child:[]}]})(e)}function ss(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"},child:[]}]})(e)}function os(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",clipRule:"evenodd"},child:[]}]})(e)}function cs(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"},child:[]}]})(e)}function ls(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"},child:[]}]})(e)}function ds(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",clipRule:"evenodd"},child:[]}]})(e)}function us(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z",clipRule:"evenodd"},child:[]}]})(e)}function cr(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"},child:[]}]})(e)}function hs(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z",clipRule:"evenodd"},child:[]}]})(e)}function ps(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",clipRule:"evenodd"},child:[]}]})(e)}function fs(e){return u({attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"},child:[]}]})(e)}const kt="@firebase/installations",Ge="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt=1e4,Tt=`w:${Ge}`,St="FIS_v2",lr="https://firebaseinstallations.googleapis.com/v1",dr=60*60*1e3,ur="installations",hr="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ee=new vt(ur,hr,pr);function Et(e){return e instanceof na&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct({projectId:e}){return`${lr}/projects/${e}/installations`}function jt(e){return{token:e.token,requestStatus:2,expiresIn:mr(e.expiresIn),creationTime:Date.now()}}async function At(e,t){const n=(await t.json()).error;return ee.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Pt({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function fr(e,{refreshToken:t}){const a=Pt(e);return a.append("Authorization",gr(t)),a}async function It(e){const t=await e();return t.status>=500&&t.status<600?e():t}function mr(e){return Number(e.replace("s","000"))}function gr(e){return`${St} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vr({appConfig:e,heartbeatServiceProvider:t},{fid:a}){const n=Ct(e),i=Pt(e),s=t.getImmediate({optional:!0});if(s){const g=await s.getHeartbeatsHeader();g&&i.append("x-firebase-client",g)}const o={fid:a,authVersion:St,appId:e.appId,sdkVersion:Tt},d={method:"POST",headers:i,body:JSON.stringify(o)},v=await It(()=>fetch(n,d));if(v.ok){const g=await v.json();return{fid:g.fid||a,registrationStatus:2,refreshToken:g.refreshToken,authToken:jt(g.authToken)}}else throw await At("Create Installation",v)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr=/^[cdef][\w-]{21}$/,Be="";function br(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const a=xr(e);return yr.test(a)?a:Be}catch{return Be}}function xr(e){return wr(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt=new Map;function Mt(e,t){const a=ye(e);Lt(a,t),kr(a,t)}function Lt(e,t){const a=Nt.get(e);if(a)for(const n of a)n(t)}function kr(e,t){const a=Rr();a&&a.postMessage({key:e,fid:t}),Tr()}let Q=null;function Rr(){return!Q&&"BroadcastChannel"in self&&(Q=new BroadcastChannel("[Firebase] FID Change"),Q.onmessage=e=>{Lt(e.data.key,e.data.fid)}),Q}function Tr(){Nt.size===0&&Q&&(Q.close(),Q=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr="firebase-installations-database",Er=1,te="firebase-installations-store";let Pe=null;function We(){return Pe||(Pe=Ue(Sr,Er,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(te)}}})),Pe}async function we(e,t){const a=ye(e),i=(await We()).transaction(te,"readwrite"),s=i.objectStore(te),o=await s.get(a);return await s.put(t,a),await i.done,(!o||o.fid!==t.fid)&&Mt(e,t.fid),t}async function Ht(e){const t=ye(e),n=(await We()).transaction(te,"readwrite");await n.objectStore(te).delete(t),await n.done}async function be(e,t){const a=ye(e),i=(await We()).transaction(te,"readwrite"),s=i.objectStore(te),o=await s.get(a),d=t(o);return d===void 0?await s.delete(a):await s.put(d,a),await i.done,d&&(!o||o.fid!==d.fid)&&Mt(e,d.fid),d}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ye(e){let t;const a=await be(e.appConfig,n=>{const i=Cr(n),s=jr(e,i);return t=s.registrationPromise,s.installationEntry});return a.fid===Be?{installationEntry:await t}:{installationEntry:a,registrationPromise:t}}function Cr(e){const t=e||{fid:br(),registrationStatus:0};return Ot(t)}function jr(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ee.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const a={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},n=Ar(e,a);return{installationEntry:a,registrationPromise:n}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Pr(e)}:{installationEntry:t}}async function Ar(e,t){try{const a=await vr(e,t);return we(e.appConfig,a)}catch(a){throw Et(a)&&a.customData.serverCode===409?await Ht(e.appConfig):await we(e.appConfig,{fid:t.fid,registrationStatus:0}),a}}async function Pr(e){let t=await ot(e.appConfig);for(;t.registrationStatus===1;)await _t(100),t=await ot(e.appConfig);if(t.registrationStatus===0){const{installationEntry:a,registrationPromise:n}=await Ye(e);return n||a}return t}function ot(e){return be(e,t=>{if(!t)throw ee.create("installation-not-found");return Ot(t)})}function Ot(e){return Ir(e)?{fid:e.fid,registrationStatus:0}:e}function Ir(e){return e.registrationStatus===1&&e.registrationTime+Rt<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _r({appConfig:e,heartbeatServiceProvider:t},a){const n=Nr(e,a),i=fr(e,a),s=t.getImmediate({optional:!0});if(s){const g=await s.getHeartbeatsHeader();g&&i.append("x-firebase-client",g)}const o={installation:{sdkVersion:Tt,appId:e.appId}},d={method:"POST",headers:i,body:JSON.stringify(o)},v=await It(()=>fetch(n,d));if(v.ok){const g=await v.json();return jt(g)}else throw await At("Generate Auth Token",v)}function Nr(e,{fid:t}){return`${Ct(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Je(e,t=!1){let a;const n=await be(e.appConfig,s=>{if(!Dt(s))throw ee.create("not-registered");const o=s.authToken;if(!t&&Hr(o))return s;if(o.requestStatus===1)return a=Mr(e,t),s;{if(!navigator.onLine)throw ee.create("app-offline");const d=Dr(s);return a=Lr(e,d),d}});return a?await a:n.authToken}async function Mr(e,t){let a=await ct(e.appConfig);for(;a.authToken.requestStatus===1;)await _t(100),a=await ct(e.appConfig);const n=a.authToken;return n.requestStatus===0?Je(e,t):n}function ct(e){return be(e,t=>{if(!Dt(t))throw ee.create("not-registered");const a=t.authToken;return zr(a)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Lr(e,t){try{const a=await _r(e,t),n=Object.assign(Object.assign({},t),{authToken:a});return await we(e.appConfig,n),a}catch(a){if(Et(a)&&(a.customData.serverCode===401||a.customData.serverCode===404))await Ht(e.appConfig);else{const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await we(e.appConfig,n)}throw a}}function Dt(e){return e!==void 0&&e.registrationStatus===2}function Hr(e){return e.requestStatus===2&&!Or(e)}function Or(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+dr}function Dr(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function zr(e){return e.requestStatus===1&&e.requestTime+Rt<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Br(e){const t=e,{installationEntry:a,registrationPromise:n}=await Ye(t);return n?n.catch(console.error):Je(t).catch(console.error),a.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vr(e,t=!1){const a=e;return await $r(a),(await Je(a,t)).token}async function $r(e){const{registrationPromise:t}=await Ye(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(e){if(!e||!e.options)throw Ie("App Configuration");if(!e.name)throw Ie("App Name");const t=["projectId","apiKey","appId"];for(const a of t)if(!e.options[a])throw Ie(a);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Ie(e){return ee.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt="installations",Ur="installations-internal",Kr=e=>{const t=e.getProvider("app").getImmediate(),a=Fr(t),n=Fe(t,"heartbeat");return{app:t,appConfig:a,heartbeatServiceProvider:n,_delete:()=>Promise.resolve()}},qr=e=>{const t=e.getProvider("app").getImmediate(),a=Fe(t,zt).getImmediate();return{getId:()=>Br(a),getToken:i=>Vr(a,i)}};function Gr(){ge(new ve(zt,Kr,"PUBLIC")),ge(new ve(Ur,qr,"PRIVATE"))}Gr();me(kt,Ge);me(kt,Ge,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr="/firebase-messaging-sw.js",Yr="/firebase-cloud-messaging-push-scope",Bt="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Jr="https://fcmregistrations.googleapis.com/v1",Vt="google.c.a.c_id",Xr="google.c.a.c_l",Qr="google.c.a.ts",Zr="google.c.a.e";var lt;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(lt||(lt={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var ie;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(ie||(ie={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function en(e){const t="=".repeat((4-e.length%4)%4),a=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(a),i=new Uint8Array(n.length);for(let s=0;s<n.length;++s)i[s]=n.charCodeAt(s);return i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e="fcm_token_details_db",tn=5,dt="fcm_token_object_Store";async function an(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(_e))return null;let t=null;return(await Ue(_e,tn,{upgrade:async(n,i,s,o)=>{var d;if(i<2||!n.objectStoreNames.contains(dt))return;const v=o.objectStore(dt),g=await v.index("fcmSenderId").get(e);if(await v.clear(),!!g){if(i===2){const l=g;if(!l.auth||!l.p256dh||!l.endpoint)return;t={token:l.fcmToken,createTime:(d=l.createTime)!==null&&d!==void 0?d:Date.now(),subscriptionOptions:{auth:l.auth,p256dh:l.p256dh,endpoint:l.endpoint,swScope:l.swScope,vapidKey:typeof l.vapidKey=="string"?l.vapidKey:K(l.vapidKey)}}}else if(i===3){const l=g;t={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:K(l.auth),p256dh:K(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:K(l.vapidKey)}}}else if(i===4){const l=g;t={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:K(l.auth),p256dh:K(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:K(l.vapidKey)}}}}}})).close(),await Re(_e),await Re("fcm_vapid_details_db"),await Re("undefined"),rn(t)?t:null}function rn(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn="firebase-messaging-database",sn=1,se="firebase-messaging-store";let Ne=null;function $t(){return Ne||(Ne=Ue(nn,sn,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(se)}}})),Ne}async function on(e){const t=Ft(e),n=await(await $t()).transaction(se).objectStore(se).get(t);if(n)return n;{const i=await an(e.appConfig.senderId);if(i)return await Xe(e,i),i}}async function Xe(e,t){const a=Ft(e),i=(await $t()).transaction(se,"readwrite");return await i.objectStore(se).put(t,a),await i.done,t}function Ft({appConfig:e}){return e.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},_=new vt("messaging","Messaging",cn);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ln(e,t){const a=await Ze(e),n=Ut(t),i={method:"POST",headers:a,body:JSON.stringify(n)};let s;try{s=await(await fetch(Qe(e.appConfig),i)).json()}catch(o){throw _.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw _.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw _.create("token-subscribe-no-token");return s.token}async function dn(e,t){const a=await Ze(e),n=Ut(t.subscriptionOptions),i={method:"PATCH",headers:a,body:JSON.stringify(n)};let s;try{s=await(await fetch(`${Qe(e.appConfig)}/${t.token}`,i)).json()}catch(o){throw _.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw _.create("token-update-failed",{errorInfo:o})}if(!s.token)throw _.create("token-update-no-token");return s.token}async function un(e,t){const n={method:"DELETE",headers:await Ze(e)};try{const s=await(await fetch(`${Qe(e.appConfig)}/${t}`,n)).json();if(s.error){const o=s.error.message;throw _.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw _.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function Qe({projectId:e}){return`${Jr}/projects/${e}/registrations`}async function Ze({appConfig:e,installations:t}){const a=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${a}`})}function Ut({p256dh:e,auth:t,endpoint:a,vapidKey:n}){const i={web:{endpoint:a,auth:t,p256dh:e}};return n!==Bt&&(i.web.applicationPubKey=n),i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=7*24*60*60*1e3;async function pn(e){const t=await mn(e.swRegistration,e.vapidKey),a={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:K(t.getKey("auth")),p256dh:K(t.getKey("p256dh"))},n=await on(e.firebaseDependencies);if(n){if(gn(n.subscriptionOptions,a))return Date.now()>=n.createTime+hn?fn(e,{token:n.token,createTime:Date.now(),subscriptionOptions:a}):n.token;try{await un(e.firebaseDependencies,n.token)}catch(i){console.warn(i)}return ut(e.firebaseDependencies,a)}else return ut(e.firebaseDependencies,a)}async function fn(e,t){try{const a=await dn(e.firebaseDependencies,t),n=Object.assign(Object.assign({},t),{token:a,createTime:Date.now()});return await Xe(e.firebaseDependencies,n),a}catch(a){throw a}}async function ut(e,t){const n={token:await ln(e,t),createTime:Date.now(),subscriptionOptions:t};return await Xe(e,n),n.token}async function mn(e,t){const a=await e.pushManager.getSubscription();return a||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:en(t)})}function gn(e,t){const a=t.vapidKey===e.vapidKey,n=t.endpoint===e.endpoint,i=t.auth===e.auth,s=t.p256dh===e.p256dh;return a&&n&&i&&s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return vn(t,e),wn(t,e),yn(t,e),t}function vn(e,t){if(!t.notification)return;e.notification={};const a=t.notification.title;a&&(e.notification.title=a);const n=t.notification.body;n&&(e.notification.body=n);const i=t.notification.image;i&&(e.notification.image=i);const s=t.notification.icon;s&&(e.notification.icon=s)}function wn(e,t){t.data&&(e.data=t.data)}function yn(e,t){var a,n,i,s,o;if(!t.fcmOptions&&!(!((a=t.notification)===null||a===void 0)&&a.click_action))return;e.fcmOptions={};const d=(i=(n=t.fcmOptions)===null||n===void 0?void 0:n.link)!==null&&i!==void 0?i:(s=t.notification)===null||s===void 0?void 0:s.click_action;d&&(e.fcmOptions.link=d);const v=(o=t.fcmOptions)===null||o===void 0?void 0:o.analytics_label;v&&(e.fcmOptions.analyticsLabel=v)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(e){return typeof e=="object"&&!!e&&Vt in e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(e){if(!e||!e.options)throw Me("App Configuration Object");if(!e.name)throw Me("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:a}=e;for(const n of t)if(!a[n])throw Me(n);return{appName:e.name,projectId:a.projectId,apiKey:a.apiKey,appId:a.appId,senderId:a.messagingSenderId}}function Me(e){return _.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(t,a,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=xn(t);this.firebaseDependencies={app:t,appConfig:i,installations:a,analyticsProvider:n}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rn(e){try{e.swRegistration=await navigator.serviceWorker.register(Wr,{scope:Yr}),e.swRegistration.update().catch(()=>{})}catch(t){throw _.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tn(e,t){if(!t&&!e.swRegistration&&await Rn(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw _.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sn(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=Bt)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kt(e,t){if(!navigator)throw _.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw _.create("permission-blocked");return await Sn(e,t==null?void 0:t.vapidKey),await Tn(e,t==null?void 0:t.serviceWorkerRegistration),pn(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function En(e,t,a){const n=Cn(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(n,{message_id:a[Vt],message_name:a[Xr],message_time:a[Qr],message_device_time:Math.floor(Date.now()/1e3)})}function Cn(e){switch(e){case ie.NOTIFICATION_CLICKED:return"notification_open";case ie.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jn(e,t){const a=t.data;if(!a.isFirebaseMessaging)return;e.onMessageHandler&&a.messageType===ie.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(ht(a)):e.onMessageHandler.next(ht(a)));const n=a.data;bn(n)&&n[Zr]==="1"&&await En(e,a.messageType,n)}const pt="@firebase/messaging",ft="0.12.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=e=>{const t=new kn(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",a=>jn(t,a)),t},Pn=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:n=>Kt(t,n)}};function In(){ge(new ve("messaging",An,"PUBLIC")),ge(new ve("messaging-internal",Pn,"PRIVATE")),me(pt,ft),me(pt,ft,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _n(){try{await sa()}catch{return!1}return typeof window<"u"&&oa()&&ca()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(e,t){if(!navigator)throw _.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(e=ia()){return _n().then(t=>{if(!t)throw _.create("unsupported-browser")},t=>{throw _.create("indexed-db-unsupported")}),Fe(Ke(e),"messaging").getImmediate()}async function Ln(e,t){return e=Ke(e),Kt(e,t)}function Hn(e,t){return e=Ke(e),Nn(e,t)}In();const On={apiKey:"AIzaSyClgZMRUtPywHinq9t37Bm8641jEzOox2A",authDomain:"realstate-339cf.firebaseapp.com",projectId:"realstate-339cf",storageBucket:"realstate-339cf.firebasestorage.app",messagingSenderId:"432127506832",appId:"1:432127506832:web:df10e3227f644c0cf71b15",measurementId:"G-F1H6P35W4W",databaseURL:"https://realstate-339cf-default-rtdb.firebaseio.com"},ce=la(On),H=da(ce),j=ua(ce),Dn=ha(ce),U=pa(ce);let Ve=null;try{Ve=Mn(ce)}catch(e){console.warn("Firebase Messaging not available:",e.message)}const mt=new fa;new ma(H);const J={BUYER:"buyer",SELLER:"seller",BROKER:"broker",BUILDER:"builder",ADMIN:"super_admin"},ms={FLAT:"Flat",VILLA:"Villa",PLOT:"Plot",COMMERCIAL:"Commercial",OFFICE:"Office",SHOP:"Shop",PG:"PG",RENT:"Rent",HOSTEL:"Hostel",AGRICULTURE:"Agriculture",PAGRI:"Pagri"},gs={FURNISHED:"Fully Furnished",SEMI:"Semi Furnished",UNFURNISHED:"Unfurnished"},vs=["Swimming Pool","Gym","Park","Club House","Security","Power Backup","Lift","Rain Water Harvesting","Jogging Track","Children Play Area","Community Hall","Indoor Games","Tennis Court","Badminton Court","Yoga Center","Spa","Sauna","Jacuzzi","CCTV","Intercom","Visitor Parking","24x7 Water","Gas Pipeline","Vaastu Compliant"],ws=["East","West","North","South","North-East","North-West","South-East","South-West"],ys=["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal","Andaman and Nicobar","Chandigarh","Dadra and Nagar Haveli","Daman and Diu","Delhi","Jammu and Kashmir","Ladakh","Lakshadweep","Puducherry"],zn=[{state:"Maharashtra",cities:["Mumbai","Pune","Nagpur","Thane","Navi Mumbai","Aurangabad","Nashik","Solapur","Kolhapur","Amravati"]},{state:"Delhi NCR",cities:["Delhi","Noida","Gurgaon","Faridabad","Ghaziabad"]},{state:"Karnataka",cities:["Bangalore","Mysore","Hubli","Mangalore","Belgaum"]},{state:"Telangana",cities:["Hyderabad","Warangal","Karimnagar"]},{state:"Tamil Nadu",cities:["Chennai","Coimbatore","Madurai","Tiruchirappalli","Salem"]},{state:"West Bengal",cities:["Kolkata","Howrah","Durgapur","Asansol","Siliguri"]},{state:"Gujarat",cities:["Ahmedabad","Surat","Vadodara","Rajkot","Bhavnagar","Jamnagar"]},{state:"Rajasthan",cities:["Jaipur","Jodhpur","Udaipur","Kota","Bikaner","Ajmer"]},{state:"Uttar Pradesh",cities:["Lucknow","Agra","Varanasi","Kanpur","Prayagraj","Meerut","Bareilly"]},{state:"Punjab",cities:["Chandigarh","Ludhiana","Amritsar","Jalandhar","Patiala"]},{state:"Madhya Pradesh",cities:["Indore","Bhopal","Gwalior","Jabalpur","Ujjain"]},{state:"Bihar",cities:["Patna","Gaya","Bhagalpur","Muzaffarpur"]},{state:"Odisha",cities:["Bhubaneswar","Cuttack","Rourkela"]},{state:"Chhattisgarh",cities:["Raipur","Bilaspur","Korba"]},{state:"Jharkhand",cities:["Ranchi","Jamshedpur","Dhanbad"]},{state:"Kerala",cities:["Kochi","Thiruvananthapuram","Kozhikode","Thrissur"]},{state:"Haryana",cities:["Panchkula","Ambala","Karnal","Hisar"]},{state:"Uttarakhand",cities:["Dehradun","Haridwar","Rishikesh","Haldwani"]}],bs=zn.flatMap(e=>e.cities),xs=["1 RK","1 BHK","2 BHK","3 BHK","4 BHK","5+ BHK"],A={USERS:"users",PROPERTIES:"properties",CHATS:"chats",MESSAGES:"messages",VISITS:"visits",REVIEWS:"reviews",SUBSCRIPTIONS:"subscriptions",TRANSACTIONS:"transactions",NOTIFICATIONS:"notifications",BANNERS:"banners",BLOG:"blog",LEADS:"leads",REPORTS:"reports",SAVED_PROPERTIES:"saved_properties"},re="₹",qt=c.createContext();function Bn({children:e}){const[t,a]=c.useState(null),[n,i]=c.useState(null),[s,o]=c.useState(!0);c.useEffect(()=>{const f=ga(H,async p=>{a(p),p?await d(p.uid):i(null),o(!1)});return()=>f()},[]);const d=async f=>{var p,x,L,I,le;try{const y=D(j,A.USERS,f),m=await He(y);if(m.exists()){const w=m.data(),E=((p=H.currentUser)==null?void 0:p.email)||"";(E==="admin@rstate.in"||E==="punjabfoodsrte@gmail.com")&&w.role!==J.ADMIN&&(await X(y,{role:J.ADMIN}),w.role=J.ADMIN),i({id:f,...w})}else{const w=((x=H.currentUser)==null?void 0:x.email)||"",E=w==="admin@rstate.in"||w==="punjabfoodsrte@gmail.com",O={uid:f,email:w,displayName:((L=H.currentUser)==null?void 0:L.displayName)||"",phone:((I=H.currentUser)==null?void 0:I.phoneNumber)||"",photoURL:((le=H.currentUser)==null?void 0:le.photoURL)||"",role:E?J.ADMIN:J.BUYER,createdAt:$(),lastLogin:$(),isVerified:!1,isActive:!0,subscription:"basic",preferences:{},savedProperties:[]};await ae(y,O),i({id:f,...O})}}catch(y){console.error("Error fetching profile:",y)}},M={user:t,userProfile:n,loading:s,register:async(f,p,x,L=J.BUYER)=>{const I=await Ra(H,f,p);return await Ta(I.user,{displayName:x}),await ae(D(j,A.USERS,I.user.uid),{uid:I.user.uid,email:f,displayName:x,phone:"",photoURL:"",role:L,createdAt:$(),lastLogin:$(),isVerified:!1,isActive:!0,subscription:"basic",preferences:{}}),i({id:I.user.uid,email:f,displayName:x,phone:"",photoURL:"",role:L,isVerified:!1,isActive:!0,subscription:"basic",preferences:{}}),I.user},login:async(f,p)=>{const x=await ka(H,f,p);return await d(x.user.uid),x.user},loginWithGoogle:async(f=J.BUYER)=>{mt.setCustomParameters({prompt:"select_account"});const p=await xa(H,mt);return(await He(D(j,A.USERS,p.user.uid))).exists()?await ae(D(j,A.USERS,p.user.uid),{lastLogin:$()},{merge:!0}):await ae(D(j,A.USERS,p.user.uid),{uid:p.user.uid,email:p.user.email,displayName:p.user.displayName,phone:p.user.phoneNumber||"",photoURL:p.user.photoURL||"",role:f,createdAt:$(),lastLogin:$(),isVerified:!0,isActive:!0,subscription:"basic",preferences:{}}),await d(p.user.uid),p.user},logout:async()=>{await ba(H),a(null),i(null)},resetPassword:async f=>{await ya(H,f)},setupRecaptcha:f=>(window.recaptchaVerifier=new wa(H,f,{size:"invisible",callback:()=>{}}),window.recaptchaVerifier),sendOTP:async(f,p)=>await va(H,f,p),verifyOTP:async(f,p)=>(await f.confirm(p)).user,updateUserRole:async(f,p)=>{await ae(D(j,A.USERS,f),{role:p},{merge:!0}),i(x=>({...x,role:p}))},updateUserProfile:async f=>{await ae(D(j,A.USERS,t.uid),f,{merge:!0}),i(p=>({...p,...f}))},fetchUserProfile:d};return r.jsx(qt.Provider,{value:M,children:e})}const xe=()=>{const e=c.useContext(qt);if(!e)throw new Error("useAuth must be used within AuthProvider");return e},Gt=c.createContext();function Vn({children:e}){const[t,a]=c.useState(()=>{const i=localStorage.getItem("theme");return i?i==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches});c.useEffect(()=>{const i=document.documentElement;t?(i.classList.add("dark"),localStorage.setItem("theme","dark")):(i.classList.remove("dark"),localStorage.setItem("theme","light"))},[t]);const n=()=>a(i=>!i);return r.jsx(Gt.Provider,{value:{darkMode:t,toggleTheme:n},children:e})}const $n=()=>{const e=c.useContext(Gt);if(!e)throw new Error("useTheme must be used within ThemeProvider");return e},Wt=c.createContext();function Fn({children:e}){const{user:t}=xe(),[a,n]=c.useState([]),[i,s]=c.useState(0),[o,d]=c.useState(null);c.useEffect(()=>{if(!t)return;const l=F(U,`notifications/${t.uid}`),h=Oe(l,b=>{const S={id:b.key,...b.val()};n(P=>[S,...P]),S.read||s(P=>P+1)});return()=>h()},[t]),c.useEffect(()=>{if(!t)return;const l=F(U,`notifications/${t.uid}`),h=Sa(l,b=>{const S={id:b.key,...b.val()};n(P=>P.map(z=>z.id===S.id?S:z))});return()=>h()},[t]),c.useEffect(()=>{if(!t)return;(async()=>{try{if(await Notification.requestPermission()!=="granted")return;try{const b=await Ln(Ve,{vapidKey:""});d(b)}catch{console.warn("Firebase messaging unavailable (no service worker)")}}catch{console.warn("Notification permission denied")}})();try{const h=Hn(Ve,b=>{n(S=>{var P,z;return[{id:Date.now(),title:(P=b.notification)==null?void 0:P.title,message:(z=b.notification)==null?void 0:z.body,timestamp:Date.now(),read:!1},...S]})});return()=>h()}catch{console.warn("Firebase onMessage not available")}},[t]);const v=async l=>{const{ref:h,update:b}=await T(async()=>{const{ref:S,update:P}=await import("./firebase-Bxb2gaWh.js").then(z=>z.u);return{ref:S,update:P}},[]);await b(F(U,`notifications/${t.uid}/${l}`),{read:!0}),s(S=>Math.max(0,S-1))},g=()=>{n([]),s(0)};return r.jsx(Wt.Provider,{value:{notifications:a,unreadCount:i,fcmToken:o,markAsRead:v,clearNotifications:g},children:e})}const Un=()=>{const e=c.useContext(Wt);if(!e)throw new Error("useNotifications must be used within NotificationProvider");return e},ks=e=>e?e>=1e7?`${re}${(e/1e7).toFixed(2)} Cr`:e>=1e5?`${re}${(e/1e5).toFixed(2)} L`:e>=1e3?`${re}${(e/1e3).toFixed(1)}K`:`${re}${e.toLocaleString("en-IN")}`:`${re}0`,Rs=e=>`${e.toLocaleString("en-IN")} sq.ft`,Kn=e=>e?(e.toDate?e.toDate():new Date(e)).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):"",Ts=e=>{if(!e)return"";const t=e.toDate?e.toDate():new Date(e),n=new Date-t,i=Math.floor(n/6e4),s=Math.floor(n/36e5),o=Math.floor(n/864e5);return i<1?"Just now":i<60?`${i} min ago`:s<24?`${s} hour${s>1?"s":""} ago`:o<7?`${o} day${o>1?"s":""} ago`:Kn(e)},Ss=e=>({Flat:"🏢",Villa:"🏡",Plot:"🗺️",Commercial:"🏬",Office:"🏢",Shop:"🏪",PG:"🏠",Rent:"🔑",Hostel:"🏨"})[e]||"🏠",Es=(e,t,a)=>{const n=t/1200,i=a*12,s=e*n*Math.pow(1+n,i)/(Math.pow(1+n,i)-1);return Math.round(s)},qn=e=>e?e.split(" ").map(t=>t[0]).join("").toUpperCase().slice(0,2):"U";function Gn(){const[e,t]=c.useState(!1),[a,n]=c.useState(!1),{user:i,userProfile:s,logout:o}=xe(),{darkMode:d,toggleTheme:v}=$n(),{unreadCount:g}=Un(),l=c.useRef();return c.useEffect(()=>{const h=b=>{l.current&&!l.current.contains(b.target)&&n(!1)};return document.addEventListener("mousedown",h),()=>document.removeEventListener("mousedown",h)},[]),r.jsxs("nav",{className:"fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-dark-900/95 backdrop-blur-md border-b border-dark-100 dark:border-dark-800",children:[r.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:r.jsxs("div",{className:"flex items-center justify-between h-16",children:[r.jsxs(R,{to:"/",className:"flex items-center gap-2",children:[r.jsx("div",{className:"w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center",children:r.jsx("span",{className:"text-white font-bold text-sm",children:"R"})}),r.jsx("span",{className:"text-xl font-bold font-heading gradient-text",children:"Rstate"})]}),r.jsxs("div",{className:"flex items-center gap-3",children:[i&&["seller","broker","builder","super_admin"].includes(s==null?void 0:s.role)&&r.jsxs(R,{to:"/add-property",className:"hidden md:flex btn-primary text-sm px-4 py-2 items-center gap-1.5",children:[r.jsx(tr,{className:"w-4 h-4"})," Post Property"]}),r.jsx("button",{onClick:v,className:"p-2 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors",children:d?r.jsx(er,{className:"w-5 h-5"}):r.jsx(rr,{className:"w-5 h-5"})}),i?r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsxs(R,{to:"/notifications",className:"relative p-2 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors",children:[r.jsx(cr,{className:"w-5 h-5"}),g>0&&r.jsx("span",{className:"absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center",children:g>9?"9+":g})]}),r.jsxs("div",{className:"relative",ref:l,children:[r.jsx("button",{onClick:()=>n(!a),className:"flex items-center gap-2 p-1.5 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors",children:s!=null&&s.photoURL?r.jsx("img",{src:s.photoURL,alt:"",className:"w-8 h-8 rounded-full object-cover"}):r.jsx("div",{className:"w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-medium",children:qn(s==null?void 0:s.displayName)})}),a&&r.jsxs("div",{className:"absolute right-0 mt-2 w-64 bg-white dark:bg-dark-800 rounded-xl shadow-xl border border-dark-100 dark:border-dark-700 z-20 py-2",children:[r.jsxs("div",{className:"px-4 py-3 border-b border-dark-100 dark:border-dark-700",children:[r.jsx("p",{className:"font-semibold text-sm",children:(s==null?void 0:s.displayName)||"User"}),r.jsx("p",{className:"text-xs text-dark-500",children:i.email}),r.jsx("span",{className:"inline-block mt-1 text-xs font-medium px-2 py-0.5 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 capitalize",children:s==null?void 0:s.role})]}),r.jsx(R,{to:`/dashboard/${(s==null?void 0:s.role)==="super_admin"?"admin":s==null?void 0:s.role}`,className:"block px-4 py-2.5 text-sm hover:bg-dark-50 dark:hover:bg-dark-700 transition-colors",onClick:()=>n(!1),children:"Dashboard"}),(s==null?void 0:s.role)==="super_admin"&&r.jsx(R,{to:"/dashboard/admin",className:"block px-4 py-2.5 text-sm text-primary-600 font-semibold hover:bg-dark-50 dark:hover:bg-dark-700 transition-colors",onClick:()=>n(!1),children:"⚡ Admin Panel"}),r.jsx(R,{to:"/profile",className:"block px-4 py-2.5 text-sm hover:bg-dark-50 dark:hover:bg-dark-700 transition-colors",onClick:()=>n(!1),children:"My Profile"}),r.jsx(R,{to:"/saved-properties",className:"block px-4 py-2.5 text-sm hover:bg-dark-50 dark:hover:bg-dark-700 transition-colors",onClick:()=>n(!1),children:"Saved Properties"}),r.jsx("hr",{className:"my-1 border-dark-100 dark:border-dark-700"}),r.jsxs("button",{onClick:()=>{o(),n(!1)},className:"w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors flex items-center gap-2",children:[r.jsx(sr,{className:"w-4 h-4"})," Sign Out"]})]})]})]}):r.jsxs("div",{className:"flex items-center gap-2",children:[r.jsx(R,{to:"/login",className:"btn-secondary text-sm px-4 py-2",children:"Login"}),r.jsx(R,{to:"/register",className:"btn-primary text-sm px-4 py-2",children:"Register"})]}),r.jsx("button",{onClick:()=>t(!e),className:"lg:hidden p-2 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-800",children:e?r.jsx(Za,{className:"w-6 h-6"}):r.jsx(nr,{className:"w-6 h-6"})})]})]})}),e&&r.jsxs("div",{className:"lg:hidden border-t border-dark-100 dark:border-dark-800 bg-white dark:bg-dark-900 px-4 pb-3 pt-2 space-y-1",children:[r.jsx(R,{to:"/properties?category=buy",onClick:()=>t(!1),className:"block px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-dark-50 dark:hover:bg-dark-800",children:"Buy"}),r.jsx(R,{to:"/properties?category=rent",onClick:()=>t(!1),className:"block px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-dark-50 dark:hover:bg-dark-800",children:"Rent"}),r.jsx(R,{to:"/properties?type=PG",onClick:()=>t(!1),className:"block px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-dark-50 dark:hover:bg-dark-800",children:"PG"}),r.jsx(R,{to:"/properties?type=Commercial",onClick:()=>t(!1),className:"block px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-dark-50 dark:hover:bg-dark-800",children:"Commercial"}),r.jsx(R,{to:"/projects",onClick:()=>t(!1),className:"block px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-dark-50 dark:hover:bg-dark-800",children:"Projects"})]})]})}function Wn(e){return u({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(e)}function Yn(e){return u({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"},child:[]}]})(e)}function Jn(e){return u({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function Xn(e){return u({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(e)}let fe={socialLinks:[{label:"FB",name:"Facebook",url:"https://facebook.com/rstate",icon:"FaFacebookF"},{label:"TW",name:"Twitter",url:"https://twitter.com/rstate",icon:"FaTwitter"},{label:"IG",name:"Instagram",url:"https://instagram.com/rstate",icon:"FaInstagram"},{label:"LN",name:"LinkedIn",url:"https://linkedin.com/company/rstate",icon:"FaLinkedinIn"}]};const $e=new Set;function Qn(){return fe}function Cs(e){fe={...fe,socialLinks:e},$e.forEach(t=>t(fe))}function Zn(e){return $e.add(e),()=>$e.delete(e)}const ei={FaFacebookF:Xn,FaTwitter:Wn,FaInstagram:Jn,FaLinkedinIn:Yn};function ti(){const[e,t]=c.useState(Qn().socialLinks);return c.useEffect(()=>Zn(a=>t(a.socialLinks)),[]),r.jsx("footer",{className:"bg-dark-900 dark:bg-dark-950 text-dark-300 border-t border-dark-800",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[r.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:[r.jsxs("div",{children:[r.jsxs(R,{to:"/",className:"flex items-center gap-2 mb-4",children:[r.jsx("div",{className:"w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center",children:r.jsx("span",{className:"text-white font-bold text-sm",children:"R"})}),r.jsx("span",{className:"text-xl font-bold text-white",children:"Rstate"})]}),r.jsx("p",{className:"text-sm text-dark-400 mb-4",children:"India's most trusted real estate platform. Find your perfect home with AI-powered search and verified listings."}),r.jsx("div",{className:"flex gap-3",children:e.map(a=>{const n=ei[a.icon];return r.jsx("a",{href:a.url,target:"_blank",rel:"noopener noreferrer",className:"w-9 h-9 bg-dark-800 rounded-lg flex items-center justify-center text-dark-400 hover:bg-primary-600 hover:text-white transition-colors",children:n?r.jsx(n,{}):a.label},a.label)})})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-white font-semibold mb-4",children:"Quick Links"}),r.jsx("ul",{className:"space-y-2.5",children:[{name:"Buy Property",path:"/properties?category=buy"},{name:"Rent Property",path:"/properties?category=rent"},{name:"Sell Property",path:"/add-property"},{name:"PG / Hostel",path:"/properties?type=PG"},{name:"Commercial",path:"/properties?type=Commercial"},{name:"New Projects",path:"/projects"}].map(a=>r.jsx("li",{children:r.jsx(R,{to:a.path,className:"text-sm hover:text-primary-400 transition-colors",children:a.name})},a.name))})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-white font-semibold mb-4",children:"Resources"}),r.jsxs("ul",{className:"space-y-2.5",children:[r.jsx("li",{children:r.jsx(R,{to:"/home-loan",className:"text-sm hover:text-primary-400 transition-colors",children:"Home Loan Calculator"})}),r.jsx("li",{children:r.jsx(R,{to:"/property-valuation",className:"text-sm hover:text-primary-400 transition-colors",children:"Property Valuation"})}),r.jsx("li",{children:r.jsx(R,{to:"/rental-agreement",className:"text-sm hover:text-primary-400 transition-colors",children:"Rental Agreement"})}),r.jsx("li",{children:r.jsx(R,{to:"/blog",className:"text-sm hover:text-primary-400 transition-colors",children:"Blog & News"})}),r.jsx("li",{children:r.jsx(R,{to:"/resources",className:"text-sm hover:text-primary-400 transition-colors",children:"Market Trends"})}),r.jsx("li",{children:r.jsx(R,{to:"/resources",className:"text-sm hover:text-primary-400 transition-colors",children:"Real Estate Guide"})})]})]}),r.jsxs("div",{children:[r.jsx("h3",{className:"text-white font-semibold mb-4",children:"Contact"}),r.jsxs("div",{className:"space-y-3",children:[r.jsxs("div",{className:"flex items-start gap-3",children:[r.jsx(or,{className:"w-5 h-5 text-primary-400 mt-0.5 shrink-0"}),r.jsx("span",{className:"text-sm",children:"91 Springboard, Sector 1, Noida, Uttar Pradesh 201301"})]}),r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx(ar,{className:"w-5 h-5 text-primary-400 shrink-0"}),r.jsx("span",{className:"text-sm",children:"1800-123-4567"})]}),r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx(ir,{className:"w-5 h-5 text-primary-400 shrink-0"}),r.jsx("span",{className:"text-sm",children:"support@rstate.in"})]})]})]})]}),r.jsxs("div",{className:"mt-10 pt-8 border-t border-dark-800 flex flex-col md:flex-row justify-between items-center gap-4",children:[r.jsx("p",{className:"text-sm text-dark-500",children:"© 2026 Rstate. All rights reserved."}),r.jsxs("div",{className:"flex gap-6 text-sm text-dark-500",children:[r.jsx(R,{to:"/privacy",className:"hover:text-primary-400",children:"Privacy Policy"}),r.jsx(R,{to:"/terms",className:"hover:text-primary-400",children:"Terms of Service"}),r.jsx(R,{to:"/sitemap",className:"hover:text-primary-400",children:"Sitemap"})]})]})]})})}function Yt(){return r.jsx("div",{className:"min-h-[60vh] flex items-center justify-center",children:r.jsxs("div",{className:"text-center",children:[r.jsx("div",{className:"w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-4"}),r.jsx("p",{className:"text-dark-500",children:"Loading..."})]})})}function B({children:e,allowedRoles:t}){const{user:a,userProfile:n,loading:i}=xe();return i?r.jsx(Yt,{}):a?t&&n&&!t.includes(n.role)?r.jsx(Le,{to:"/",replace:!0}):e:r.jsx(Le,{to:"/login",replace:!0})}const ai=c.lazy(()=>T(()=>import("./Home-DXA8gRz8.js"),__vite__mapDeps([0,1,2,3,4,5]))),ri=c.lazy(()=>T(()=>import("./PropertyListing-SkJdOghT.js"),__vite__mapDeps([6,1,2,3,7,4,5]))),ni=c.lazy(()=>T(()=>import("./PropertyDetail-DPI1nMFQ.js"),__vite__mapDeps([8,1,2,3,7,4,9,5]))),ii=c.lazy(()=>T(()=>import("./Login-BsD0nIsr.js"),__vite__mapDeps([10,1,2,11,5]))),si=c.lazy(()=>T(()=>import("./Register-CM93etGO.js"),__vite__mapDeps([12,1,2,11,5]))),oi=c.lazy(()=>T(()=>import("./BuyerDashboard-DC4AbZBs.js"),__vite__mapDeps([13,1,2,7,4,9,5]))),ci=c.lazy(()=>T(()=>import("./SellerDashboard-CZugvObT.js"),__vite__mapDeps([14,1,2,7,4,5]))),li=c.lazy(()=>T(()=>import("./BrokerDashboard-Bo-CVykt.js"),__vite__mapDeps([15,1,2,5]))),di=c.lazy(()=>T(()=>import("./BuilderDashboard-CrMW0qcK.js"),__vite__mapDeps([16,1,2,5]))),ui=c.lazy(()=>T(()=>import("./AdminDashboard-BMJwXTBu.js"),__vite__mapDeps([17,1,2,5,18]))),hi=c.lazy(()=>T(()=>import("./AddProperty-Kzmn3nR2.js"),__vite__mapDeps([19,1,2,7,4,5]))),pi=c.lazy(()=>T(()=>import("./EditProperty-Bb9wjLXY.js"),__vite__mapDeps([20,1,2,7,4,5]))),gt=c.lazy(()=>T(()=>import("./ChatPage-d2M1cRLV.js"),__vite__mapDeps([21,1,2,5]))),fi=c.lazy(()=>T(()=>import("./SavedProperties-j-1RpO9Y.js"),__vite__mapDeps([22,1,2,3,7,4,9,5]))),mi=c.lazy(()=>T(()=>import("./Profile-DU-mNsMQ.js"),__vite__mapDeps([23,1,2,5]))),gi=c.lazy(()=>T(()=>import("./Notifications-10wxEBoZ.js"),__vite__mapDeps([24,1,2,5]))),vi=c.lazy(()=>T(()=>import("./Projects-zXHtqAYy.js"),__vite__mapDeps([25,1,2,18,5]))),wi=c.lazy(()=>T(()=>import("./Blog-BLbNmArK.js"),__vite__mapDeps([26,1,2]))),yi=c.lazy(()=>T(()=>import("./Resources-CuBDiU1x.js"),__vite__mapDeps([27,1,2]))),bi=c.lazy(()=>T(()=>import("./About-C6UfJYxG.js"),__vite__mapDeps([28,1,2]))),xi=c.lazy(()=>T(()=>import("./HomeLoan-YiBxgF7I.js"),__vite__mapDeps([29,1,2,5]))),ki=c.lazy(()=>T(()=>import("./PropertyValuation-C1_uiD6H.js"),__vite__mapDeps([30,1,2,31,5]))),Ri=c.lazy(()=>T(()=>import("./RentalAgreement-Bsqz1eQX.js"),__vite__mapDeps([32,1,2,31,5])));function Ti(){return r.jsxs("div",{className:"min-h-screen flex flex-col",children:[r.jsx(Gn,{}),r.jsx("main",{className:"flex-1 pt-16",children:r.jsx(c.Suspense,{fallback:r.jsx(Yt,{}),children:r.jsxs(aa,{children:[r.jsx(k,{path:"/",element:r.jsx(ai,{})}),r.jsx(k,{path:"/properties",element:r.jsx(ri,{})}),r.jsx(k,{path:"/property/:id",element:r.jsx(ni,{})}),r.jsx(k,{path:"/projects",element:r.jsx(vi,{})}),r.jsx(k,{path:"/blog",element:r.jsx(wi,{})}),r.jsx(k,{path:"/about",element:r.jsx(bi,{})}),r.jsx(k,{path:"/resources",element:r.jsx(yi,{})}),r.jsx(k,{path:"/home-loan",element:r.jsx(xi,{})}),r.jsx(k,{path:"/property-valuation",element:r.jsx(ki,{})}),r.jsx(k,{path:"/rental-agreement",element:r.jsx(Ri,{})}),r.jsx(k,{path:"/login",element:r.jsx(ii,{})}),r.jsx(k,{path:"/register",element:r.jsx(si,{})}),r.jsx(k,{path:"/chat",element:r.jsx(B,{children:r.jsx(gt,{})})}),r.jsx(k,{path:"/chat/:chatId",element:r.jsx(B,{children:r.jsx(gt,{})})}),r.jsx(k,{path:"/saved-properties",element:r.jsx(B,{children:r.jsx(fi,{})})}),r.jsx(k,{path:"/profile",element:r.jsx(B,{children:r.jsx(mi,{})})}),r.jsx(k,{path:"/notifications",element:r.jsx(B,{children:r.jsx(gi,{})})}),r.jsx(k,{path:"/add-property",element:r.jsx(B,{children:r.jsx(hi,{})})}),r.jsx(k,{path:"/edit-property/:id",element:r.jsx(B,{children:r.jsx(pi,{})})}),r.jsx(k,{path:"/dashboard/buyer",element:r.jsx(B,{allowedRoles:["buyer"],children:r.jsx(oi,{})})}),r.jsx(k,{path:"/dashboard/seller",element:r.jsx(B,{allowedRoles:["seller","broker","builder","super_admin"],children:r.jsx(ci,{})})}),r.jsx(k,{path:"/dashboard/broker",element:r.jsx(B,{allowedRoles:["broker","super_admin"],children:r.jsx(li,{})})}),r.jsx(k,{path:"/dashboard/builder",element:r.jsx(B,{allowedRoles:["builder","super_admin"],children:r.jsx(di,{})})}),r.jsx(k,{path:"/dashboard/admin",element:r.jsx(B,{allowedRoles:["super_admin"],children:r.jsx(ui,{})})}),r.jsx(k,{path:"*",element:r.jsx(Le,{to:"/",replace:!0})})]})})}),r.jsx(ti,{})]})}const Jt=c.createContext();function Si({children:e}){const[t,a]=c.useState([]),[n,i]=c.useState([]),[s,o]=c.useState(!1),[d,v]=c.useState(0),[g,l]=c.useState(null),[h,b]=c.useState({type:"",category:"",minPrice:"",maxPrice:"",bedrooms:"",furnishing:"",city:"",locality:"",listingType:"",status:"",sortBy:"newest",search:""}),S=12,P=c.useCallback(async(y=!0)=>{o(!0);try{let m=[nt("createdAt","desc")];if(h.type&&m.push(q("propertyType","==",h.type)),h.city&&m.push(q("city","==",h.city)),h.furnishing&&m.push(q("furnishing","==",h.furnishing)),h.listingType&&m.push(q("listingType","==",h.listingType)),h.status&&m.push(q("status","==",h.status)),h.bedrooms){const C=parseInt(h.bedrooms);m.push(q("bedrooms","==",C))}h.category&&m.push(q("category","==",h.category)),m.push(Te(S)),!y&&g&&m.push(Ea(g));const w=Se(de(j,A.PROPERTIES),...m),E=await Ee(w),O=E.docs.map(C=>{var G;return{id:C.id,...C.data(),createdAt:((G=C.data().createdAt)==null?void 0:G.toDate())||new Date}});a(y?O:C=>[...C,...O]),l(E.docs[E.docs.length-1]||null),v(E.size)}catch(m){console.error("Error fetching properties:",m),Y.error("Failed to load properties")}finally{o(!1)}},[h,g]),z=c.useCallback(async()=>{try{const y=Se(de(j,A.PROPERTIES),q("isFeatured","==",!0),Te(6)),w=(await Ee(y)).docs.map(E=>({id:E.id,...E.data()}));w.length>0&&i(w)}catch{}},[]),le={properties:t,featuredProperties:n,loading:s,totalCount:d,filters:h,fetchProperties:P,fetchFeaturedProperties:z,fetchPropertyById:async y=>{try{const m=D(j,A.PROPERTIES,y),w=await He(m);return w.exists()?(await X(m,{views:Ce(1)}),{id:w.id,...w.data()}):null}catch(m){return console.error("Error fetching property:",m),null}},addProperty:async(y,m=[])=>{o(!0);try{let w=[];for(const O of m){const C=Pa(Dn,`properties/${Date.now()}_${O.name}`);await Ia(C,O);const G=await _a(C);w.push(G)}const E=await Na(de(j,A.PROPERTIES),{...y,images:w,videos:[],brochures:[],views:0,leads:0,saves:0,isFeatured:!1,isVerified:!1,isActive:!0,createdAt:$(),updatedAt:$()});return Y.success("Property listed successfully!"),{id:E.id,...y,images:w}}catch(w){throw console.error("Error adding property:",w),Y.error("Failed to list property"),w}finally{o(!1)}},updateProperty:async(y,m)=>{try{await X(D(j,A.PROPERTIES,y),{...m,updatedAt:$()}),Y.success("Property updated successfully!")}catch(w){throw Y.error("Failed to update property"),w}},deleteProperty:async y=>{try{await Aa(D(j,A.PROPERTIES,y)),a(m=>m.filter(w=>w.id!==y)),Y.success("Property deleted")}catch{Y.error("Failed to delete property")}},toggleSaveProperty:async(y,m,w)=>{try{const E=D(j,A.USERS,y);if(w){await X(E,{savedProperties:Ca(m)});try{await X(D(j,A.PROPERTIES,m),{saves:Ce(-1)})}catch{}}else{await X(E,{savedProperties:ja(m)});try{await X(D(j,A.PROPERTIES,m),{saves:Ce(1)})}catch{}}}catch(E){console.error("Error toggling save:",E)}},searchProperties:async y=>{if(!y.trim()){P(!0);return}o(!0);try{const m=y.toLowerCase(),w=Se(de(j,A.PROPERTIES),nt("createdAt","desc"),Te(20)),O=(await Ee(w)).docs.map(C=>({id:C.id,...C.data()})).filter(C=>{var G,et,tt,at,rt;return((G=C.title)==null?void 0:G.toLowerCase().includes(m))||((et=C.city)==null?void 0:et.toLowerCase().includes(m))||((tt=C.locality)==null?void 0:tt.toLowerCase().includes(m))||((at=C.description)==null?void 0:at.toLowerCase().includes(m))||((rt=C.propertyType)==null?void 0:rt.toLowerCase().includes(m))});a(O)}catch(m){console.error("Search error:",m)}finally{o(!1)}},updateFilters:y=>{b(m=>({...m,...y}))},resetFilters:()=>{b({type:"",category:"",minPrice:"",maxPrice:"",bedrooms:"",furnishing:"",city:"",locality:"",listingType:"",status:"",sortBy:"newest",search:""})},setLoading:o};return r.jsx(Jt.Provider,{value:le,children:e})}const js=()=>{const e=c.useContext(Jt);if(!e)throw new Error("useProperties must be used within PropertyProvider");return e},Xt=c.createContext();function Ei({children:e}){const{user:t,userProfile:a}=xe(),[n,i]=c.useState([]),[s,o]=c.useState(null),[d,v]=c.useState([]),[g,l]=c.useState(0),[h,b]=c.useState(!1);c.useEffect(()=>{if(!t){i([]),v([]);return}const N=F(U,`userChats/${t.uid}`),M=Oe(N,f=>{const p=f.val();p&&i(x=>{const L=x.findIndex(I=>I.id===f.key);if(L>=0){const I=[...x];return I[L]={id:f.key,...p},I}return[{id:f.key,...p},...x]})});return()=>M()},[t]);const S=async(N,M)=>{if(!t)return null;try{const f=[t.uid,N].sort().join("_"),p=F(U,`chats/${f}`);await ue(p,{participants:[t.uid,N],propertyId:M||"",createdAt:Date.now(),lastMessage:"",lastMessageTime:Date.now(),lastSender:t.uid});const x=F(U,`userChats/${t.uid}/${f}`);await ue(x,{participantId:N,propertyId:M||"",lastMessage:"",lastMessageTime:Date.now()});const L=F(U,`userChats/${N}/${f}`);return await ue(L,{participantId:t.uid,propertyId:M||"",lastMessage:"",lastMessageTime:Date.now()}),f}catch(f){return console.error("Error creating chat:",f),null}},P=async(N,M,f="text")=>{if(!(!t||!N||!M.trim()))try{const p=F(U,`messages/${N}`),x={senderId:t.uid,senderName:(a==null?void 0:a.displayName)||"User",text:M.trim(),type:f,timestamp:Date.now(),read:!1};await Oa(p,x);const L=F(U,`chats/${N}`);await ue(L,{lastMessage:M.trim(),lastMessageTime:Date.now(),lastSender:t.uid})}catch(p){console.error("Error sending message:",p)}},z=c.useCallback(N=>{if(!N)return;b(!0);const M=Ma(F(U,`messages/${N}`),Ha("timestamp"),La(50));return Oe(M,p=>{v(x=>x.findIndex(I=>I.id===p.key)>=0?x:[...x,{id:p.key,...p.val()}]),b(!1)})},[]),ke={chats:n,activeChat:s,messages:d,unreadCount:g,loading:h,setActiveChat:o,createChat:S,sendMessage:P,loadMessages:z};return r.jsx(Xt.Provider,{value:ke,children:e})}const As=()=>{const e=c.useContext(Xt);if(!e)throw new Error("useChat must be used within ChatProvider");return e};De.createRoot(document.getElementById("root")).render(r.jsx(oe.StrictMode,{children:r.jsx(ra,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:r.jsx(Ja,{children:r.jsx(Vn,{children:r.jsx(Bn,{children:r.jsx(Si,{children:r.jsx(Ei,{children:r.jsxs(Fn,{children:[r.jsx(Ti,{}),r.jsx(ea,{position:"top-right",toastOptions:{duration:3e3,style:{background:"#1e293b",color:"#f8fafc",borderRadius:"12px"}}})]})})})})})})})}));export{Ii as $,bs as A,xs as B,zn as C,Yi as D,Wi as E,ws as F,Gi as G,fs as H,or as I,qi as J,ir as K,Ki as L,Ui as M,ar as N,tr as O,Fi as P,$i as Q,Vi as R,Bi as S,zi as T,Di as U,Oi as V,Hi as W,Mi as X,Li as Y,Ni as Z,_i as _,vs as a,Za as a0,ys as a1,ms as a2,J as a3,T as a4,Es as a5,j as a6,Rs as a7,Kn as a8,ks as a9,Ts as aa,qn as ab,Ss as ac,Qn as ad,Dn as ae,Cs as af,xe as ag,As as ah,Un as ai,js as aj,A as b,gs as c,Xn as d,Jn as e,Yn as f,Wn as g,ps as h,hs as i,cr as j,us as k,ds as l,ls as m,cs as n,os as o,is as p,ss as q,ns as r,rs as s,as as t,ts as u,es as v,Zi as w,Qi as x,Xi as y,Ji as z};
