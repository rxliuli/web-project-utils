var e=Object.defineProperty,t=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(t,l,a)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[l]=a,o=(e,t)=>{for(var l in t||(t={}))n.call(t,l)&&r(e,l,t[l]);if(a)for(var l of a(t))s.call(t,l)&&r(e,l,t[l]);return e},u=(e,a)=>t(e,l(a));import{e as i,h as c,i as v,j as d,k as p,l as h,m as b,r as m,g,o as k,n as f,w as y,p as x,d as w,t as L,q as $,c as C,s as M,v as T,x as O,y as R,z as P,A as j,a as B,F as z,B as E,b as D,C as _,D as H,E as N,f as S,G as A,H as F,I as G,J as I,K as W,T as q,L as U,M as V,N as X,O as Y,P as J,u as K,Q,R as Z,S as ee,U as te,V as le,W as ae,X as ne}from"./app.67cc822e.js";const se=["href","rel","target","aria-label"],re=i({inheritAttrs:!1});var oe=i(u(o({},re),{props:{item:{type:Object,required:!0}},setup(e){const t=e,l=c(),a=T(),{item:n}=v(t),s=d((()=>p(n.value.link))),r=d((()=>h(n.value.link)||b(n.value.link))),o=d((()=>{if(!r.value)return n.value.target?n.value.target:s.value?"_blank":void 0})),u=d((()=>"_blank"===o.value)),i=d((()=>!s.value&&!r.value&&!u.value)),O=d((()=>{if(!r.value)return n.value.rel?n.value.rel:u.value?"noopener noreferrer":void 0})),R=d((()=>n.value.ariaLabel||n.value.text)),P=d((()=>{const e=Object.keys(a.value.locales);return e.length?!e.some((e=>e===n.value.link)):"/"!==n.value.link})),j=d((()=>!!P.value&&l.path.startsWith(n.value.link))),B=d((()=>!!i.value&&(n.value.activeMatch?new RegExp(n.value.activeMatch).test(l.path):j.value)));return(e,t)=>{const l=m("RouterLink"),a=m("OutboundLink");return g(i)?(k(),f(l,$({key:0,class:["nav-link",{"router-link-active":g(B)}],to:g(n).link,"aria-label":g(R)},e.$attrs),{default:y((()=>[x(e.$slots,"before"),w(" "+L(g(n).text)+" ",1),x(e.$slots,"after")])),_:3},16,["class","to","aria-label"])):(k(),C("a",$({key:1,class:"nav-link external",href:g(n).link,rel:g(O),target:g(o),"aria-label":g(R)},e.$attrs),[x(e.$slots,"before"),w(" "+L(g(n).text)+" ",1),g(u)?(k(),f(a,{key:0})):M("",!0),x(e.$slots,"after")],16,se))}}}));const ue=["aria-labelledby"],ie={class:"hero"},ce=["src","alt"],ve={key:1,id:"main-title"},de={key:2,class:"description"},pe={key:3,class:"actions"},he={key:0,class:"features"},be={class:"theme-default-content custom"},me=["innerHTML"],ge=["textContent"];var ke=i({setup(e){const t=O(),l=R(),a=d((()=>t.value.heroImage?P(t.value.heroImage):null)),n=d((()=>null===t.value.heroText?null:t.value.heroText||l.value.title||"Hello")),s=d((()=>t.value.heroAlt||n.value||"hero")),r=d((()=>null===t.value.tagline?null:t.value.tagline||l.value.description||"Welcome to your VuePress site")),o=d((()=>j(t.value.actions)?t.value.actions.map((({text:e,link:t,type:l="primary"})=>({text:e,link:t,type:l}))):[])),u=d((()=>j(t.value.features)?t.value.features:[])),i=d((()=>t.value.footer)),c=d((()=>t.value.footerHtml));return(e,t)=>{const l=m("Content");return k(),C("main",{class:"home","aria-labelledby":g(n)?"main-title":void 0},[B("header",ie,[g(a)?(k(),C("img",{key:0,src:g(a),alt:g(s)},null,8,ce)):M("",!0),g(n)?(k(),C("h1",ve,L(g(n)),1)):M("",!0),g(r)?(k(),C("p",de,L(g(r)),1)):M("",!0),g(o).length?(k(),C("p",pe,[(k(!0),C(z,null,E(g(o),(e=>(k(),f(oe,{key:e.text,class:_(["action-button",[e.type]]),item:e},null,8,["class","item"])))),128))])):M("",!0)]),g(u).length?(k(),C("div",he,[(k(!0),C(z,null,E(g(u),(e=>(k(),C("div",{key:e.title,class:"feature"},[B("h2",null,L(e.title),1),B("p",null,L(e.details),1)])))),128))])):M("",!0),B("div",be,[D(l)]),g(i)?(k(),C(z,{key:1},[g(c)?(k(),C("div",{key:0,class:"footer",innerHTML:g(i)},null,8,me)):(k(),C("div",{key:1,class:"footer",textContent:L(g(i))},null,8,ge))],64)):M("",!0)],8,ue)}}});const fe=e=>!p(e)||/github\.com/.test(e)?"GitHub":/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":/gitee\.com/.test(e)?"Gitee":null,ye={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},xe={class:"page-meta"},we={key:0,class:"meta-item edit-link"},Le={key:1,class:"meta-item last-updated"},$e={class:"meta-item-label"},Ce={class:"meta-item-info"},Me={key:2,class:"meta-item contributors"},Te={class:"meta-item-label"},Oe={class:"meta-item-info"},Re=["title"],Pe=w(", ");var je=i({setup(e){const t=S(),l=(()=>{const e=S(),t=A(),l=O();return d((()=>{var a,n;if(!(null==(n=null!=(a=l.value.editLink)?a:e.value.editLink)||n))return null;const{repo:s,docsRepo:r=s,docsBranch:o="main",docsDir:u="",editLinkText:i}=e.value;if(!r)return null;const c=(({docsRepo:e,docsBranch:t,docsDir:l,filePathRelative:a,editLinkPattern:n})=>{const s=fe(e);let r;return n?r=n:null!==s&&(r=ye[s]),r?r.replace(/:repo/,p(e)?e:`https://github.com/${e}`).replace(/:branch/,t).replace(/:path/,H(`${N(l)}/${a}`)):null})({docsRepo:r,docsBranch:o,docsDir:u,filePathRelative:t.value.filePathRelative,editLinkPattern:e.value.editLinkPattern});return c?{text:null!=i?i:"Edit this page",link:c}:null}))})(),a=(()=>{const e=R(),t=S(),l=A(),a=O();return d((()=>{var n,s,r,o;if(!(null==(s=null!=(n=a.value.lastUpdated)?n:t.value.lastUpdated)||s))return null;if(!(null==(r=l.value.git)?void 0:r.updatedTime))return null;return new Date(null==(o=l.value.git)?void 0:o.updatedTime).toLocaleString(e.value.lang)}))})(),n=(()=>{const e=S(),t=A(),l=O();return d((()=>{var a,n,s,r;return(null==(n=null!=(a=l.value.contributors)?a:e.value.contributors)||n)&&null!=(r=null==(s=t.value.git)?void 0:s.contributors)?r:null}))})();return(e,s)=>(k(),C("footer",xe,[g(l)?(k(),C("div",we,[D(oe,{class:"meta-item-label",item:g(l)},null,8,["item"])])):M("",!0),g(a)?(k(),C("div",Le,[B("span",$e,L(g(t).lastUpdatedText)+": ",1),B("span",Ce,L(g(a)),1)])):M("",!0),g(n)&&g(n).length?(k(),C("div",Me,[B("span",Te,L(g(t).contributorsText)+": ",1),B("span",Oe,[(k(!0),C(z,null,E(g(n),((e,t)=>(k(),C(z,{key:t},[B("span",{class:"contributor",title:`email: ${e.email}`},L(e.name),9,Re),t!==g(n).length-1?(k(),C(z,{key:0},[Pe],64)):M("",!0)],64)))),128))])])):M("",!0)]))}});const Be={key:0,class:"page-nav"},ze={class:"inner"},Ee={key:0,class:"prev"},De=w(" ← "),_e={key:1,class:"next"},He=w(" → ");var Ne=i({setup(e){const t=e=>!1===e?null:G(e)?I(e):!!W(e)&&e,l=(e,t,a)=>{const n=e.findIndex((e=>e.link===t));if(-1!==n){const t=e[n+a];return(null==t?void 0:t.link)?t:null}for(const s of e)if(s.children){const e=l(s.children,t,a);if(e)return e}return null},a=O(),n=F(),s=c(),r=d((()=>{const e=t(a.value.prev);return!1!==e?e:l(n.value,s.path,-1)})),o=d((()=>{const e=t(a.value.next);return!1!==e?e:l(n.value,s.path,1)}));return(e,t)=>g(r)||g(o)?(k(),C("nav",Be,[B("p",ze,[g(r)?(k(),C("span",Ee,[De,D(oe,{item:g(r)},null,8,["item"])])):M("",!0),g(o)?(k(),C("span",_e,[D(oe,{item:g(o)},null,8,["item"]),He])):M("",!0)])])):M("",!0)}});const Se={class:"page"},Ae={class:"theme-default-content"};var Fe=i({setup:e=>(e,t)=>{const l=m("Content");return k(),C("main",Se,[x(e.$slots,"top"),B("div",Ae,[D(l)]),D(je),D(Ne),x(e.$slots,"bottom")])}}),Ge=i({setup(e){const t=e=>{e.style.height=e.scrollHeight+"px"},l=e=>{e.style.height=""};return(e,a)=>(k(),f(q,{name:"dropdown",onEnter:t,onAfterEnter:l,onBeforeLeave:t},{default:y((()=>[x(e.$slots,"default")])),_:3}))}});const Ie=["aria-label"],We={class:"title"},qe=B("span",{class:"arrow down"},null,-1),Ue=["aria-label"],Ve={class:"title"},Xe={class:"nav-dropdown"},Ye={class:"dropdown-subtitle"},Je={key:1},Ke={class:"dropdown-subitem-wrapper"};var Qe=i({props:{item:{type:Object,required:!0}},setup(e){const t=e,{item:l}=v(t),a=d((()=>l.value.ariaLabel||l.value.text)),n=U(!1),s=c();V((()=>s.path),(()=>{n.value=!1}));const r=e=>{const t=0===e.detail;n.value=!!t&&!n.value},o=(e,t)=>t[t.length-1]===e;return(e,t)=>(k(),C("div",{class:_(["dropdown-wrapper",{open:n.value}])},[B("button",{class:"dropdown-title",type:"button","aria-label":g(a),onClick:r},[B("span",We,L(g(l).text),1),qe],8,Ie),B("button",{class:"mobile-dropdown-title",type:"button","aria-label":g(a),onClick:t[0]||(t[0]=e=>n.value=!n.value)},[B("span",Ve,L(g(l).text),1),B("span",{class:_(["arrow",n.value?"down":"right"])},null,2)],8,Ue),D(Ge,null,{default:y((()=>[X(B("ul",Xe,[(k(!0),C(z,null,E(g(l).children,((e,t)=>(k(),C("li",{key:e.link||t,class:"dropdown-item"},[e.children?(k(),C(z,{key:0},[B("h4",Ye,[e.link?(k(),f(oe,{key:0,item:e,onFocusout:t=>o(e,g(l).children)&&0===e.children.length&&(n.value=!1)},null,8,["item","onFocusout"])):(k(),C("span",Je,L(e.text),1))]),B("ul",Ke,[(k(!0),C(z,null,E(e.children,(t=>(k(),C("li",{key:t.link,class:"dropdown-subitem"},[D(oe,{item:t,onFocusout:a=>o(t,e.children)&&o(e,g(l).children)&&(n.value=!1)},null,8,["item","onFocusout"])])))),128))])],64)):(k(),f(oe,{key:1,item:e,onFocusout:t=>o(e,g(l).children)&&(n.value=!1)},null,8,["item","onFocusout"]))])))),128))],512),[[Y,n.value]])])),_:1})],2))}});const Ze={key:0,class:"navbar-links"};var et=i({setup(e){const t=e=>G(e)?I(e):e.children?u(o({},e),{children:e.children.map(t)}):e,l=(()=>{const e=S();return d((()=>(e.value.navbar||[]).map(t)))})(),a=(()=>{const e=J(),t=K(),l=R(),a=S();return d((()=>{var n,s;const r=Object.keys(l.value.locales);if(r.length<2)return[];const o=e.currentRoute.value.path,u=e.currentRoute.value.fullPath;return[{text:null!=(n=a.value.selectLanguageText)?n:"unkown language",ariaLabel:null!=(s=a.value.selectLanguageAriaLabel)?s:"unkown language",children:r.map((n=>{var s,r,i,c,v,d;const p=null!=(r=null==(s=l.value.locales)?void 0:s[n])?r:{},h=null!=(c=null==(i=a.value.locales)?void 0:i[n])?c:{},b=`${p.lang}`,m=null!=(v=h.selectLanguageName)?v:b;let g;if(b===l.value.lang)g=u;else{const l=o.replace(t.value,n);g=e.getRoutes().some((e=>e.path===l))?l:null!=(d=h.home)?d:n}return{text:m,link:g}}))}]}))})(),n=(()=>{const e=S(),t=d((()=>e.value.repo)),l=d((()=>t.value?fe(t.value):null)),a=d((()=>t.value&&!p(t.value)?`https://github.com/${t.value}`:t.value)),n=d((()=>a.value?e.value.repoLabel?e.value.repoLabel:null===l.value?"Source":l.value:null));return d((()=>a.value&&n.value?[{text:n.value,link:a.value}]:[]))})(),s=d((()=>[...l.value,...a.value,...n.value]));return(e,t)=>g(s).length?(k(),C("nav",Ze,[(k(!0),C(z,null,E(g(s),(e=>(k(),C("div",{key:e.text,class:"navbar-links-item"},[e.children?(k(),f(Qe,{key:0,item:e},null,8,["item"])):(k(),f(oe,{key:1,item:e},null,8,["item"]))])))),128))])):M("",!0)}});const tt=["title"],lt={class:"icon",focusable:"false",viewBox:"0 0 32 32"},at=[Z('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9)],nt={class:"icon",focusable:"false",viewBox:"0 0 32 32"},st=[B("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1)];var rt=i({setup(e){const t=S(),l=Q(),a=()=>{l.value=!l.value};return(e,n)=>(k(),C("button",{class:"toggle-dark-button",title:g(t).toggleDarkMode,onClick:a},[X((k(),C("svg",lt,at,512)),[[Y,!g(l)]]),X((k(),C("svg",nt,st,512)),[[Y,g(l)]])],8,tt))}});const ot=["title"],ut=[B("div",{class:"icon","aria-hidden":"true"},[B("span"),B("span"),B("span")],-1)];var it=i({emits:["toggle"],setup(e){const t=S();return(e,l)=>(k(),C("div",{class:"toggle-sidebar-button",title:g(t).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:l[0]||(l[0]=t=>e.$emit("toggle"))},ut,8,ot))}});const ct=["src","alt"];var vt=i({emits:["toggle-sidebar"],setup(e){const t=K(),l=R(),a=S(),n=Q(),s=U(null),r=U(null),o=d((()=>a.value.home||t.value)),u=d((()=>n.value&&void 0!==a.value.logoDark?a.value.logoDark:a.value.logo)),i=d((()=>l.value.title)),c=U(0),v=d((()=>c.value?{maxWidth:c.value+"px"}:{})),p=d((()=>a.value.darkMode));function h(e,t){var l,a,n;const s=null==(n=null==(a=null==(l=null==e?void 0:e.ownerDocument)?void 0:l.defaultView)?void 0:a.getComputedStyle(e,null))?void 0:n[t],r=Number.parseInt(s,10);return Number.isNaN(r)?0:r}return ee((()=>{const e=h(s.value,"paddingLeft")+h(s.value,"paddingRight"),t=()=>{var t;window.innerWidth<=719?c.value=0:c.value=s.value.offsetWidth-e-((null==(t=r.value)?void 0:t.offsetWidth)||0)};t(),window.addEventListener("resize",t,!1),window.addEventListener("orientationchange",t,!1)})),(e,t)=>{const l=m("RouterLink"),a=m("NavbarSearch");return k(),C("header",{ref:s,class:"navbar"},[D(it,{onToggle:t[0]||(t[0]=t=>e.$emit("toggle-sidebar"))}),B("span",{ref:r},[D(l,{to:g(o)},{default:y((()=>[g(u)?(k(),C("img",{key:0,class:"logo",src:g(P)(g(u)),alt:g(i)},null,8,ct)):M("",!0),g(i)?(k(),C("span",{key:1,class:_(["site-name",{"can-hide":g(u)}])},L(g(i)),3)):M("",!0)])),_:1},8,["to"])],512),B("div",{class:"navbar-links-wrapper",style:te(g(v))},[x(e.$slots,"before"),D(et,{class:"can-hide"}),x(e.$slots,"after"),g(p)?(k(),f(rt,{key:0})):M("",!0),D(a)],4)],512)}}});const dt=e=>decodeURI(e).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),pt=(e,t)=>!!((e,t)=>void 0!==t&&(e.hash===t||dt(e.path)===dt(t)))(e,t.link)||!!t.children&&t.children.some((t=>pt(e,t))),ht=(e,t)=>e.link?le(oe,u(o({},t),{item:e})):le("p",t,e.text),bt=(e,t)=>{var l;return(null===(l=e.children)||void 0===l?void 0:l.length)?le("ul",{class:{"sidebar-sub-items":t>0}},e.children.map((e=>le("li",le(mt,{item:e,depth:t+1}))))):null},mt=({item:e,depth:t=0})=>{const l=c(),a=pt(l,e);return[ht(e,{class:{"sidebar-heading":0===t,"sidebar-item":!0,active:a}}),bt(e,t)]};mt.displayName="SidebarChild",mt.props={item:{type:Object,required:!0},depth:{type:Number,required:!1}};const gt={class:"sidebar"},kt={class:"sidebar-links"};var ft=i({setup(e){const t=F();return(e,l)=>(k(),C("aside",gt,[D(et),x(e.$slots,"top"),B("ul",kt,[(k(!0),C(z,null,E(g(t),(e=>(k(),f(g(mt),{key:e.link||e.text,item:e},null,8,["item"])))),128))]),x(e.$slots,"bottom")]))}}),yt=i({setup(e){const t=A(),l=O(),a=S(),n=d((()=>!1!==l.value.navbar&&!1!==a.value.navbar)),s=F(),r=U(!1),o=e=>{r.value="boolean"==typeof e?e:!r.value},u={x:0,y:0},i=e=>{u.x=e.changedTouches[0].clientX,u.y=e.changedTouches[0].clientY},c=e=>{const t=e.changedTouches[0].clientX-u.x,l=e.changedTouches[0].clientY-u.y;Math.abs(t)>Math.abs(l)&&Math.abs(t)>40&&(t>0&&u.x<=80?o(!0):o(!1))},v=d((()=>[{"no-navbar":!n.value,"no-sidebar":!s.value.length,"sidebar-open":r.value},l.value.pageClass]));let p;ee((()=>{const e=J();p=e.afterEach((()=>{o(!1)}))})),ae((()=>{p()}));const h=ne(),b=h.resolve,m=h.pending;return(e,a)=>(k(),C("div",{class:_(["theme-container",g(v)]),onTouchstart:i,onTouchend:c},[g(n)?(k(),f(vt,{key:0,onToggleSidebar:o},{before:y((()=>[x(e.$slots,"navbar-before")])),after:y((()=>[x(e.$slots,"navbar-after")])),_:3})):M("",!0),B("div",{class:"sidebar-mask",onClick:a[0]||(a[0]=e=>o(!1))}),D(ft,null,{top:y((()=>[x(e.$slots,"sidebar-top")])),bottom:y((()=>[x(e.$slots,"sidebar-bottom")])),_:3}),x(e.$slots,"page",{},(()=>[g(l).home?(k(),f(ke,{key:0})):(k(),f(q,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:g(b),onBeforeLeave:g(m)},{default:y((()=>[D(Fe,{key:g(t).path},{top:y((()=>[x(e.$slots,"page-top")])),bottom:y((()=>[x(e.$slots,"page-bottom")])),_:3})])),_:3},8,["onBeforeEnter","onBeforeLeave"]))]))],34))}});export{yt as default};
