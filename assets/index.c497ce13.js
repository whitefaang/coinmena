var J=Object.defineProperty,G=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var H=(t,r,s)=>r in t?J(t,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[r]=s,p=(t,r)=>{for(var s in r||(r={}))Y.call(r,s)&&H(t,s,r[s]);if(U)for(var s of U(r))ee.call(r,s)&&H(t,s,r[s]);return t},x=(t,r)=>G(t,X(r));import{c as te,j as M,a as v,r as h,R as A,u as re,b as ae,L as le,d as se,e as z,f as oe,g as W,N as ne,Q as ie,h as ce,H as de,i as me,k as I,l as ue}from"./vendor.585b8dfc.js";const he=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function s(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(i){if(i.ep)return;i.ep=!0;const n=s(i);fetch(i.href,n)}};he();const P=te(t=>({selectedCoin:null,user:null,selectCoin:r=>t(s=>x(p({},s),{selectedCoin:r})),setUser:r=>t(s=>x(p({},s),{user:r}))})),e=M.exports.jsx,l=M.exports.jsxs,j=M.exports.Fragment;function S(t){return e("button",x(p({},t),{className:v({"bg-primary text-surface":!t.ghost,"text-primary hover:text-surface bg-opacity-10 hover:bg-primary":t.ghost,"opacity-30 cursor-not-allowed":t.disabled},"px-3 lg:px-6 py-2 transition-all relative active:top-0.5 rounded-3xl",t.className),children:t.children}))}function B(t){return l("div",{children:[e("label",{htmlFor:t.id||t.label,className:"font-semibold",children:t.label}),e("input",x(p({},t),{id:t.id||t.label,className:v("w-full shadow-sm rounded-3xl focus:outline-none border border-primary-muted focus:border-2 p-4",t.className)})),e("small",{className:"text-red-500",children:t.error})]})}function $({onSuccess:t}){const[r,s]=h.exports.useState({email:"",password:""}),a=P(o=>o.setUser),[i,n]=h.exports.useState({}),d=o=>{let m={};return o.email.trim()?/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(o.email)||(m.email="Please enter a valid email"):m.email="Email is required",o.password||(m.password="Password is required"),m},g=o=>{s(m=>x(p({},m),{[o.target.name]:o.target.value}))};return l("form",{className:"grid gap-6",onSubmit:o=>{o.preventDefault();const m=d(r);if(m.email||m.password){n(m);return}a(r),t&&t()},noValidate:!0,children:[e("div",{className:"text-4xl font-bold",children:"Hi, Welcome Back!"}),e("p",{className:"text-color-muted mb-5",children:"Start trading now!"}),e(B,{label:"Email",type:"email",name:"email",value:r.email,onChange:g,error:i.email}),e(B,{label:"Password",type:"password",name:"password",value:r.password,onChange:g,error:i.password}),e(S,{className:"text-xl w-full  mx-auto mt-5 !py-4",children:"Login"})]})}const K=A.createContext(null);function R(t){const{onChange:r,children:s,header:a}=t,[i,n]=h.exports.useState(!1),d=()=>{n(!1)};return e(K.Provider,{value:{onChange:r,closeDropDown:d},children:l("div",x(p({},t),{className:`relative flex items-center justify-between px-3 focus:outline outline-primary-muted rounded-lg ${t.className}`,tabIndex:0,onBlur:()=>n(!1),onClick:()=>n(!0),children:[e("div",{className:"mr-2 cursor-pointer",children:a}),e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-chevron-down",viewBox:"0 0 16 16",children:e("path",{fillRule:"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"})}),e("ul",{onClick:g=>g.stopPropagation(),className:`${v("overflow-y-auto bg-surface shadow-md absolute top-full right-0 z-20",{"h-auto ":i,"h-0":!i})}`,children:s})]}))})}R.Option=({children:t,value:r,info:s})=>{const a=A.useContext(K);return e("li",{onClick:()=>{a.onChange({value:r}),a.closeDropDown()},className:`${v("list-none p-2 lg:px-3 lg:py-4 cursor-pointer",{"hover:bg-primary-muted":!s})}`,children:t})};function E(t){let r=re(t.to),s=ae({path:r.pathname,end:!0});return e(le,x(p({},t),{className:v("font-semibold hover:text-gray-500",t.className,{"!text-primary":s})}))}function fe(){return e("div",{className:"text-xl font-bold !text-primary",children:"CoinMENA"})}function F({children:t,className:r,show:s,onOverlayClick:a}){const i=h.exports.useRef(document.getElementById("modals")),n=h.exports.useRef(null);return h.exports.useEffect(()=>{s&&n&&setTimeout(()=>{const d=n.current;d&&d.classList.remove("opacity-0","-top-10")},200)},[s]),s?se.exports.createPortal(e("div",{ref:n,className:v("w-full h-full fixed left-0 bg-gray-900 bg-opacity-30 transition-all opacity-0 top-0 z-50","flex flex-col items-center justify-center",r),onClick:d=>{d.target===n.current&&a&&a()},children:t}),i.current):e(j,{})}function pe(){const[t,r]=h.exports.useState(!1),[s,a]=h.exports.useState(!1),i=[{name:"Home",path:"/"},{name:"Trade",path:"/trade"}],{user:n,setUser:d,selectCoin:g}=P(o=>o),C=()=>{d(null)};return l(j,{children:[e(F,{show:s,onOverlayClick:()=>a(!1),children:e("div",{className:"w-10/12 lg:w-1/2 2xl:w-1/3 bg-surface rounded-lg shadow-lg p-8",children:e($,{onSuccess:()=>a(!1)})})}),l("nav",{className:"flex gap-x-2 relative justify-end  lg:justify-between p-5 shadow-sm items-center bg-surface",children:[e(E,{to:"/",className:"lg:order-1 flex-1 lg:flex-none",children:e(fe,{})}),n?l(R,{header:l("div",{className:"flex items-center gap-3 py-1",children:[e("div",{className:"overflow-hidden w-8 md:w-12 h-8 md:h-12 bg-center bg-cover rounded-full border-2 border-primary",style:{backgroundImage:"url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.6TmaQB-RHMc1PtloLIyDagHaEK%26pid%3DApi&f=1)"}}),e("span",{className:"hidden lg:text-sm",children:n.email.split("@")[0]})]}),className:"lg:order-3",onChange:C,children:[e(R.Option,{value:"welcome",info:!0,children:e(j,{children:l("p",{className:"text-xs font-bold",children:["Welcome, ",n.email]})})}),e(R.Option,{value:"logout",children:l("div",{className:"flex items-center text-sm text-red-500 font-bold",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})}),e("span",{className:"ml-2",children:"Logout"})]})})]}):e(S,{className:"rounded-[30px] lg:order-3",onClick:()=>a(!0),children:"Login"}),e(S,{className:"lg:hidden",title:"More..","aria-label":"More..",ghost:!0,onClick:()=>r(!t),children:e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",className:"bi bi-list",viewBox:"0 0 16 16",children:e("path",{fillRule:"evenodd",d:"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"})})}),e("div",{className:v("flex-1 hidden absolute lg:relative lg:flex lg:order-2 px-16 gap-10",{"!grid top-full bg-surface w-full left-0 shadow-md pb-3 z-10":t}),children:i.map(o=>e(E,{to:o.path,onClick:()=>r(!1),children:o.name},o.name))})]})]})}const ge=(t,r=10)=>{const s=new Headers;return s.set("x-messari-api-key","ca822321-9a64-4e4b-bfb8-c33fae94d5f0"),fetch(`https://data.messari.io/api/v2/assets?page=${t}&limit=${r}&fields=id,slug,symbol,name,metrics/market_data/price_usd,profile/general/background/issuing_organizations`,{headers:s}).then(a=>a.json())},xe=()=>fetch("https://api.exchangerate.host/symbols").then(t=>t.json()),ve=(t,r)=>fetch(`https://api.exchangerate.host/convert?from=USD&to=${t}&amount=${r}`).then(s=>s.json());function _(t=10){var D;const[r,s]=h.exports.useState(1),[a,i]=h.exports.useState("Price desc"),n=(f=0)=>ge(f,t),d=z(["crypto/assets",r],()=>n(r),{keepPreviousData:!0,refetchOnWindowFocus:!1}),g=()=>{s(f=>f+1)},C=()=>{s(f=>f-1)},[o,m]=a.split(" "),N=(f,b)=>{f!==o&&s(1),i(`${f} ${b}`)};return{page:r,next:g,prev:C,lastUpdated:new Date(d.dataUpdatedAt).toLocaleString(),sortKey:a,sortBy:N,loading:d.isLoading,isRefetching:d.isRefetching,error:d.error,data:d.data?(D=d.data.data)==null?void 0:D.map(f=>{var b,w;return{Name:f.name,Price:f.metrics.market_data.price_usd.toFixed(3),ID:f.id,Symbol:f.symbol,Logo:((w=(b=f.profile.general.background.issuing_organizations)==null?void 0:b[0])==null?void 0:w.logo)||"dollar.jfif"}}).sort((f,b)=>{if(o==="Name"){const w=f[o].toLowerCase(),y=b[o].toLowerCase();return m==="desc"?w<y?1:w>y?-1:0:w<y?-1:w>y?1:0}else if(o==="Price"){const w=f[o],y=b[o];return m==="desc"?y-w:w-y}}):[]}}function q(){return e("div",{className:"h-full w-full bg-surface flex flex-col justify-center items-center shadow-lg",children:l("div",{className:"text-center",children:[e("p",{className:"mb-4 text-red-500",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-16 w-16 mx-auto",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})})}),e("p",{className:"font-semibold text-3xl",children:"Some Error Occured"})]})})}function we(){const t=_(),{selectedCoin:r,selectCoin:s}=P(o=>o),a=o=>{var N;if(r&&r.ID===o.ID)return;s(o);const m=document.getElementById("buySell");m&&((N=document.getElementById("content"))==null||N.scrollTo({top:m.offsetTop,behavior:"smooth"}))},[i,n]=t.sortKey.split(" "),d=o=>{i===o?t.sortBy(o,n==="desc"?"asc":"desc"):t.sortBy(o,"desc")},g=["Name","Price"];if(t.error)return e(q,{});const C=()=>t.loading?Array(10).fill(0).map((o,m)=>e("tr",{className:"bg-white border-gray-200",children:Array(2).fill(0).map((N,D)=>e("td",{className:"pl-3 py-5 gap-4",children:e("div",{className:"h-6 w-1/3 bg-gray-200 rounded-lg animate-pulse"})},D))},m)):t.data.map(o=>h.exports.useMemo(()=>l("tr",{className:v("bg-white hover:bg-primary-muted border-b border-gray-200 text-sm cursor-pointer font-semibold",{"!bg-primary":r&&r.ID===o.ID}),onClick:()=>a(o),children:[l("td",{className:"flex items-center gap-4 px-5 py-3",children:[e("img",{src:o.Logo,alt:o.Name,className:"w-10 h-10 rounded-full shadow-md"}),e("span",{children:o.Name})]}),e("td",{children:`$${o.Price}`})]},o.ID),[o.ID]));return l(A.Fragment,{children:[l("div",{className:"flex bg-surface flex-wrap",children:[l("div",{className:"p-5 flex-1 text-sm font-bold",children:["Last updated on ",t.lastUpdated]}),l("div",{className:"",children:[e(S,{onClick:t.prev,ghost:!0,"aria-label":"Previous Page",title:"Previous Page",className:"h-full !rounded-none",disabled:t.page===1||t.loading||t.isRefetching,children:e("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 19l-7-7 7-7"})})}),e(S,{onClick:t.next,ghost:!0,"aria-label":"Next Page",title:"Next Page",className:"h-full !rounded-none",disabled:t.loading||t.isRefetching,children:e("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 5l7 7-7 7"})})})]})]}),l("table",{className:"min-w-full xl:h-full leading-normal bg-surface rounded-lg shadow-sm overflow-hidden",children:[e("thead",{children:e("tr",{className:"border-gray-200 border-2",children:g.map(o=>e("th",{className:"w-1/2 px-4 py-5 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider",children:l("span",{className:"cursor-pointer flex hover:text-primary",onClick:()=>d(o),children:[o,i===o&&(n==="desc"?e("svg",{className:"w-4 h-4 ml-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 14l-7 7m0 0l-7-7m7 7V3"})}):e("svg",{className:"w-4 h-4 ml-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M8 7l4-4m0 0l4 4m-4-4v18"})}))]})},o))})}),e("tbody",{className:"h-full",children:e(C,{})})]})]})}const O=A.createContext(null);function L(t){const[r,s]=h.exports.useState(),a=(i,n)=>{s(n),t.onChange&&t.onChange(i,n)};return e(O.Provider,{value:{selected:r,onChange:a},children:e("div",{className:"rounded-md bg-surface shadow-sm",children:t.children})})}L.Tabs=({children:t})=>e("div",{className:"flex items-center justify-evenly",children:t});L.Item=({children:t,value:r,id:s,default:a})=>{const{onChange:i,selected:n}=h.exports.useContext(O);return h.exports.useEffect(()=>{!n&&a&&i(r,s)},[]),e("div",{onClick:()=>i(r,s),className:v({"text-primary border-b-primary":s===n},"p-4 flex-1 text-center cursor-pointer hover:text-primary font-bold text-lg","border-b-2 border-r-2 border-gray-200 last:border-r-0"),children:t})};L.Detail=({children:t})=>{const r=a=>t(a),{selected:s}=h.exports.useContext(O);return e("div",{className:"p-3",children:r(s)})};function be(){const{selectedCoin:t}=P(r=>r);return l("div",{className:"flex flex-wrap",children:[e("div",{className:"w-full xl:w-3/4 xl:px-4",children:e(we,{})}),e("div",{className:"mt-4 xl:mt-0 w-full xl:w-1/4 xl:px-4",children:l(L,{children:[l(L.Tabs,{children:[e(L.Item,{value:{text:"awesome!"},id:"Buy",default:!0,children:"Buy"}),e(L.Item,{value:{text:"not awesome"},id:"Sell",children:"Sell"})]}),e(L.Detail,{children:r=>t?l("div",{className:"p-2",children:[l("div",{className:"mb-4",children:[l("div",{className:"flex items-center gap-4 text-xl font-bold",children:[e("img",{src:t.Logo,alt:t.Name,className:"w-14 h-14 rounded-full shadow-md"}),l("div",{children:[e("span",{className:"ml-2",children:t.Name}),l("span",{className:"ml-2",children:["(",t.Symbol,")"]})]})]}),l("div",{className:"flex items-center",children:[l("div",{className:"flex-1",children:[l("div",{className:"my-5",children:[e("p",{className:"text-3xl sm:text-4xl 2xl:text-6xl font-light truncate",children:"1"}),l("p",{className:"font-bold ml-2",children:["1 ",t.Name," (",t.Symbol,") for"]})]}),l("div",{className:"my-5",children:[e("p",{className:"text-3xl sm:text-4xl 2xl:text-6xl font-light truncate",title:`$${t.Price}`,children:t.Price}),e("p",{className:"font-bold ml-2",children:"USD($)"})]})]}),e("div",{className:"mb-12",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",fill:"var(--primary)",viewBox:"0 0 16 16",children:e("path",{fillRule:"evenodd",d:"M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"})})})]})]}),e(E,{className:"w-full",to:`/trade?base=${t.Symbol}`,children:l(S,{id:"buySell",className:"w-full",children:["Proceed to ",r]})})]}):e("div",{id:"buySell",className:"min-h-[300px] flex items-center justify-center text-3xl",children:l("div",{className:"mb-5 text-center",children:[e("p",{className:"text-5xl mb-4",children:"$"}),e("p",{children:"No Asset selected"})]})})})]})})]})}function ye(){const t=["Built with TailwindCSS + ViteJS for smaller and faster builds","Custom components like Select, Switcher etc","Zustand used for state management","3 routes available home, trade and login","Includes custom hooks for debounce and transforming api responses from react-query","Responsive layout"],r=oe(),s=W().search;return P(n=>n.user)?e(ne,{to:"/"}):l("div",{className:"px-3 py-6 rounded-2xl flex flex-wrap justify-evenly",children:[e("div",{className:"md:w-1/3 md:order-2 mb-10",children:e($,{onSuccess:()=>{const d=new URLSearchParams(s).get("next");r(d?`/${d}`:"/")}})}),e("div",{className:"md:w-1/3 grid md:order-1",children:t.map(n=>l("div",{className:"flex gap-x-5 text-lg md:text-2xl",children:[e("div",{className:"w-8 mb-16",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"})})}),e("span",{children:n})]},n))}),l("svg",{id:"clouds",className:"fixed bottom-[-160px] left-[-230px] w-screen -z-10",xmlns:"http://www.w3.org/2000/svg",width:"2611.084",height:"485.677",viewBox:"0 0 2611.084 485.677",children:[e("title",{children:"Gray Clouds Background"}),e("path",{id:"Path_39","data-name":"Path 39",d:"M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z",transform:"translate(142.69 -634.312)",fill:"#eee"})]})]})}function Q(t,r=700){const[s,a]=h.exports.useState(t);return h.exports.useEffect(()=>{setTimeout(()=>{a(t)},r)},[t]),s}function Ne({availableCryptos:t,availableFiats:r,initialCrypto:s}){var V,T;const[a,i]=h.exports.useState({fiat:{code:"USD",description:"United Stated Dollar"},crypto:s,fiatAmount:1,cryptoAmount:1,conversionDir:"ftc",modal:null}),n=Q(a.cryptoAmount),d=Q(a.fiatAmount),g=z("fiat/exchange",()=>ve(a.fiat.code,a.cryptoAmount),{initialData:{rates:{}},keepPreviousData:!0,refetchOnWindowFocus:!1});h.exports.useEffect(()=>{g.refetch()},[a.fiat.code]),h.exports.useEffect(()=>{var c;((c=g.data)==null?void 0:c.info)&&i(u=>{var k;return p(p({},u),u.conversionDir==="ctf"?{fiatAmount:g.data.info.rate*(u.cryptoAmount*u.crypto.Price)}:{cryptoAmount:((k=g.data)==null?void 0:k.info.rate)*u.fiatAmount/u.crypto.Price})})},[(T=(V=g.data)==null?void 0:V.info)==null?void 0:T.rate,a.crypto.ID,d,n]);const C=c=>{i(u=>x(p({},u),{crypto:c,modal:null}))},o=c=>{i(u=>x(p({},u),{fiat:c,modal:null}))},[m,N]=h.exports.useState(""),D=()=>l("div",{className:"relative h-full",children:[e(B,{name:"searchKey",placeholder:"Search ..",className:"shadow-md sticky top-0 left-0 z-10 my-4",value:m,onChange:c=>N(c.target.value)}),e("div",{className:"grid lg:grid-cols-2 2xl:grid-cols-3 gap-4 p-4",children:t.map(c=>JSON.stringify(Object.values(c)).match(new RegExp(m,"i"))?l("div",{className:"px-3 py-4 border flex gap-7 shadow-sm cursor-pointer hover:shadow-md rounded-md",onClick:()=>C(c),children:[e("img",{src:c.Logo,alt:c.Name,className:"w-12 h-12"}),l("div",{className:"flex-1 font-semibold",children:[e("p",{children:c.Name}),l("p",{className:"font-semibold",children:["$",c.Price]})]})]},c.ID):"")})]}),f=()=>l("div",{children:[e(B,{name:"searchKey",className:"shadow-md sticky",placeholder:"Search ..",value:m,onChange:c=>N(c.target.value)}),e("div",{className:"grid lg:grid-cols-2 2xl:grid-cols-3 gap-4 p-4",children:Object.entries(r.symbols).map(c=>{const[u,k]=c;return JSON.stringify(Object.values(k)).match(new RegExp(m,"i"))?l("div",{className:"px-3 py-4 border flex items-center gap-7 shadow-sm cursor-pointer hover:shadow-md rounded-md",onClick:()=>o(k),children:[e("div",{className:`w-12 h-8 shadow-lg currency-flag currency-flag-${u.toLowerCase()}`}),l("div",{className:"flex-1 font-semibold",children:[e("p",{children:u}),e("p",{className:"font-semibold",children:k.description})]})]},u):""})})]}),b=c=>{i(u=>x(p({},u),{modal:c}))},w=()=>{i(c=>x(p({},c),{modal:null})),N("")},y=c=>{if(c.target.value&&!/^-?\d+\.?\d*$/.exec(c.target.value))return;let u=(c.target.value?c.target.value:0).toString();for(;u.startsWith("0")&&u.length>1;)u=u.slice(1);i(k=>x(p({},k),{[c.target.name]:u}))},Z=()=>{i(c=>x(p({},c),{conversionDir:c.conversionDir==="ctf"?"ftc":"ctf"}))};return l(j,{children:[e(F,{show:!!a.modal,onOverlayClick:w,children:e("div",{className:"bg-surface w-11/12 2xl:w-2/3 h-3/4 overflow-y-auto rounded-lg shadow-lg p-3",children:a.modal==="crypto"?e(D,{}):e(f,{})})}),l("div",{className:"w-full flex flex-wrap bg-surface h-full rounded-lg p-4 shadow-md justify-between",children:[l("div",{className:v("w-full md:w-1/3 flex flex-col gap-4",{"order-3":a.conversionDir==="ftc"}),children:[l("div",{className:"flex justify-between items-center px-5 border shadow-sm cursor-pointer hover:shadow-md rounded-md",onClick:()=>b("crypto"),children:[l("div",{className:"pr-3 py-4 flex gap-7",children:[e("img",{src:a.crypto.Logo,alt:a.crypto.Name,className:"w-12 h-12"}),l("div",{className:"flex-1 font-semibold",children:[e("p",{children:a.crypto.Name}),l("p",{className:"font-semibold",children:["$",a.crypto.Price]})]})]}),e("span",{children:e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"var(--primary)",viewBox:"0 0 16 16",children:e("path",{fillRule:"evenodd",d:"M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"})})})]}),e("div",{className:"flex-1 w-full",children:e("textarea",{name:"cryptoAmount",disabled:a.conversionDir==="ftc",onChange:y,value:a.cryptoAmount,className:"shadow-md h-full w-full rounded-lg focus:outline-none border border-primary-muted focus:border-2 focus:rounded-xl resize-none md:text-5xl p-4"})})]}),l("div",{className:v("w-full md:w-1/3 text-xl sm:text-3xl lg:text-4xl 2xl:text-6xl flex flex-col items-center justify-center gap-5 md:gap-y-10",{"order-2":a.conversionDir==="ftc"}),children:[e("div",{className:v("transform transition-all cursor-pointer hover:scale-125",{"md:rotate-90":a.conversionDir==="ctf","md:-rotate-90 rotate-180":a.conversionDir==="ftc"}),onClick:Z,children:e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",fill:"var(--primary)",viewBox:"0 0 16 16",children:e("path",{fillRule:"evenodd",d:"M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"})})}),l("div",{children:["x",e("span",{className:"ml-3 font-semibold",children:a.crypto.Price})]}),e(S,{className:"!py-3 hidden md:block md:text-lg font-semibold rounded-md",type:"button",children:"Connect Wallet"})]}),l("div",{className:v("w-full md:w-1/3 flex flex-col gap-4",{"order-1":a.conversionDir==="ftc"}),children:[l("div",{className:"px-3 py-4 border flex items-center gap-7 shadow-sm cursor-pointer hover:shadow-md rounded-md",onClick:()=>b("fiat"),children:[e("div",{className:`w-12 h-8 shadow-lg currency-flag currency-flag-${a.fiat.code.toLowerCase()}`}),l("div",{className:"flex-1 font-semibold",children:[e("p",{children:a.fiat.code}),e("p",{className:"font-semibold",children:a.fiat.description})]}),e("span",{children:e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"var(--primary)",viewBox:"0 0 16 16",children:e("path",{fillRule:"evenodd",d:"M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"})})})]}),e("div",{className:"flex-1 w-full",children:e("textarea",{name:"fiatAmount",onChange:y,disabled:a.conversionDir==="ctf",value:a.fiatAmount,className:"shadow-md h-full w-full rounded-lg focus:outline-none border border-primary-muted focus:border-2 focus:rounded-xl resize-none md:text-5xl p-4"})})]})]})]})}function Ce({}){const t=P(n=>n.user),r=_(50),s=W().search,a=z("fiat/currencies",()=>xe(),{initialData:{symbols:{}}});if(r.loading||a.isLoading)return e("p",{children:"'Loading .. '"});if(r.error||a.error)return e(q,{});const i=new URLSearchParams(s).get("base");return l(j,{children:[e(F,{show:!t,children:e("div",{className:"bg-surface w-10/12 lg:w-6/12 2xl:w-1/3 p-12 rounded-lg shadow-md",children:e($,{})})}),e(Ne,{initialCrypto:i?r.data.find(n=>n.Symbol===i):r.data[0],availableCryptos:r.data,availableFiats:a.data})]})}const ke=new ie;function Le(){return e(ce,{client:ke,children:e(de,{children:l("main",{className:"flex flex-col h-screen",children:[e(pe,{}),e("section",{id:"content",className:"flex-1 overflow-y-auto p-6",children:l(me,{children:[e(I,{index:!0,element:e(be,{})}),e(I,{path:"/trade",element:e(Ce,{})}),e(I,{path:"/login",element:e(ye,{})})]})})]})})})}ue.render(e(A.StrictMode,{children:e(Le,{})}),document.getElementById("root"));
