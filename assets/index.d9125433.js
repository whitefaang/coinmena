var J=Object.defineProperty,G=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var W=(t,r,a)=>r in t?J(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,g=(t,r)=>{for(var a in r||(r={}))Y.call(r,a)&&W(t,a,r[a]);if(U)for(var a of U(r))ee.call(r,a)&&W(t,a,r[a]);return t},x=(t,r)=>G(t,X(r));import{c as te,j as R,a as w,r as u,R as A,u as re,b as le,L as ae,d as se,e as $,f as oe,g as H,N as ne,Q as ie,h as ce,H as de,i as me,k as z,l as ue}from"./vendor.585b8dfc.js";const he=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function a(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(l){if(l.ep)return;l.ep=!0;const o=a(l);fetch(l.href,o)}};he();const P=te(t=>({selectedCoin:null,user:null,selectCoin:r=>t(a=>x(g({},a),{selectedCoin:r})),setUser:r=>t(a=>x(g({},a),{user:r}))})),e=R.exports.jsx,s=R.exports.jsxs,B=R.exports.Fragment;function D(t){return e("button",x(g({},t),{className:w({"bg-primary text-surface":!t.ghost,"text-primary hover:text-surface bg-opacity-10 hover:bg-primary":t.ghost,"opacity-30 cursor-not-allowed":t.disabled},"px-3 lg:px-6 py-2 transition-all relative active:top-0.5 rounded-3xl",t.className),children:t.children}))}function I(t){return s("div",{children:[e("label",{htmlFor:t.id||t.label,className:"font-semibold",children:t.label}),e("input",x(g({},t),{id:t.id||t.label,className:w("w-full shadow-sm rounded-3xl focus:outline-none border border-primary-muted focus:border-2 text-sm p-3 lg:p-4",t.className)})),e("small",{className:"text-red-500",children:t.error})]})}function E({onSuccess:t}){const[r,a]=u.exports.useState({email:"",password:""}),i=P(n=>n.setUser),[l,o]=u.exports.useState({}),c=n=>{let h={};return n.email.trim()?/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(n.email)||(h.email="Please enter a valid email"):h.email="Email is required",n.password||(h.password="Password is required"),h},v=n=>{a(h=>x(g({},h),{[n.target.name]:n.target.value}))};return s("form",{className:"grid gap-6",onSubmit:n=>{n.preventDefault();const h=c(r);if(h.email||h.password){o(h);return}i(r),t&&t()},noValidate:!0,children:[e("div",{className:"text-2xl lg:text-4xl font-bold",children:"Hi, Welcome Back!"}),e("p",{className:"text-color-muted mb-5",children:"Start trading now!"}),e(I,{label:"Email",type:"email",name:"email",value:r.email,onChange:v,error:l.email}),e(I,{label:"Password",type:"password",name:"password",value:r.password,onChange:v,error:l.password}),e(D,{className:"text-xl w-full  mx-auto mt-5 !py-4",children:"Login"})]})}const K=A.createContext(null);function j(t){const{onChange:r,children:a,header:i}=t,[l,o]=u.exports.useState(!1),c=()=>{o(!1)};return e(K.Provider,{value:{onChange:r,closeDropDown:c},children:s("div",x(g({},t),{className:`relative flex items-center justify-between px-3 focus:outline outline-primary-muted rounded-lg ${t.className}`,tabIndex:0,onBlur:()=>o(!1),onClick:()=>o(!0),children:[e("div",{className:"mr-2 cursor-pointer",children:i}),e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-chevron-down",viewBox:"0 0 16 16",children:e("path",{fillRule:"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"})}),e("ul",{onClick:v=>v.stopPropagation(),className:`${w("overflow-y-auto bg-surface shadow-md absolute top-full right-0 z-20",{"h-auto ":l,"h-0":!l})}`,children:a})]}))})}j.Option=({children:t,value:r,info:a})=>{const i=A.useContext(K);return e("li",{onClick:()=>{i.onChange({value:r}),i.closeDropDown()},className:`${w("list-none p-2 lg:px-3 lg:py-4 cursor-pointer",{"hover:bg-primary-muted":!a})}`,children:t})};function F(t){let r=re(t.to),a=le({path:r.pathname,end:!0});return e(ae,x(g({},t),{className:w("font-semibold hover:text-gray-500",t.className,{"!text-primary":a})}))}function fe(){return e("div",{className:"text-xl font-bold !text-primary",children:"CoinMENA"})}function O({children:t,className:r,show:a,onOverlayClick:i}){const l=u.exports.useRef(document.getElementById("modals")),o=u.exports.useRef(null);return u.exports.useEffect(()=>{a&&o&&setTimeout(()=>{const c=o.current;c&&c.classList.remove("opacity-0","-top-10")},200)},[a]),a?se.exports.createPortal(e("div",{ref:o,className:w("w-full h-full fixed left-0 bg-gray-900 bg-opacity-30 transition-all opacity-0 top-0 z-50","flex flex-col items-center justify-center",r),onClick:c=>{c.target===o.current&&i&&i()},children:t}),l.current):e(B,{})}function pe(){const[t,r]=u.exports.useState(!1),[a,i]=u.exports.useState(!1),l=[{name:"Home",path:"/"},{name:"Trade",path:"/trade"}],{user:o,setUser:c,selectCoin:v}=P(n=>n),p=()=>{c(null)};return s(B,{children:[e(O,{show:a,onOverlayClick:()=>i(!1),children:e("div",{className:"bg-surface w-10/12 lg:w-6/12 2xl:w-1/3 px-6 py-10 lg:p-12 rounded-lg shadow-md",children:e(E,{onSuccess:()=>i(!1)})})}),s("nav",{className:"flex gap-x-2 relative justify-end  lg:justify-between p-5 shadow-sm items-center bg-surface",children:[e(F,{to:"/",className:"lg:order-1 flex-1 lg:flex-none",children:e(fe,{})}),o?s(j,{header:s("div",{className:"flex items-center gap-3 py-1",children:[e("div",{className:"overflow-hidden w-8 md:w-12 h-8 md:h-12 bg-center bg-cover rounded-full border-2 border-primary",style:{backgroundImage:"url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.6TmaQB-RHMc1PtloLIyDagHaEK%26pid%3DApi&f=1)"}}),e("span",{className:"hidden lg:text-sm",children:o.email.split("@")[0]})]}),className:"lg:order-3",onChange:p,children:[e(j.Option,{value:"welcome",info:!0,children:e(B,{children:s("p",{className:"text-xs font-bold",children:["Welcome, ",o.email]})})}),e(j.Option,{value:"logout",children:s("div",{className:"flex items-center text-sm text-red-500 font-bold",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})}),e("span",{className:"ml-2",children:"Logout"})]})})]}):e(D,{className:"rounded-[30px] lg:order-3",onClick:()=>i(!0),children:"Login"}),e(D,{className:"lg:hidden",title:"More..","aria-label":"More..",ghost:!0,onClick:()=>r(!t),children:e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",className:"bi bi-list",viewBox:"0 0 16 16",children:e("path",{fillRule:"evenodd",d:"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"})})}),e("div",{className:w("flex-1 hidden absolute lg:relative lg:flex lg:order-2 px-16 gap-10",{"!grid top-full bg-surface w-full left-0 shadow-md pb-3 z-10":t}),children:l.map(n=>e(F,{to:n.path,onClick:()=>r(!1),children:n.name},n.name))})]})]})}const ge=(t,r=10)=>{const a=new Headers;return a.set("x-messari-api-key","ca822321-9a64-4e4b-bfb8-c33fae94d5f0"),fetch(`https://data.messari.io/api/v2/assets?page=${t}&limit=${r}&fields=id,slug,symbol,name,metrics/market_data/price_usd,profile/general/background/issuing_organizations`,{headers:a}).then(i=>i.json())},xe=()=>fetch("https://api.exchangerate.host/symbols").then(t=>t.json()),ve=(t,r)=>fetch(`https://api.exchangerate.host/convert?from=USD&to=${t}&amount=${r}`).then(a=>a.json());function _(t=10){var S;const[r,a]=u.exports.useState(1),[i,l]=u.exports.useState("Price desc"),o=(f=0)=>ge(f,t),c=$(["crypto/assets",r],()=>o(r),{keepPreviousData:!0,refetchOnWindowFocus:!1}),v=()=>{a(f=>f+1)},p=()=>{a(f=>f-1)},[n,h]=i.split(" "),L=(f,y)=>{f!==n&&a(1),l(`${f} ${y}`)};return{page:r,next:v,prev:p,lastUpdated:new Date(c.dataUpdatedAt).toLocaleString(),sortKey:i,sortBy:L,loading:c.isLoading,isRefetching:c.isRefetching,error:c.error,data:c.data?(S=c.data.data)==null?void 0:S.map(f=>{var y,b;return{Name:f.name,Price:f.metrics.market_data.price_usd.toFixed(3),ID:f.id,Symbol:f.symbol,Logo:((b=(y=f.profile.general.background.issuing_organizations)==null?void 0:y[0])==null?void 0:b.logo)||"dollar.jfif"}}).sort((f,y)=>{if(n==="Name"){const b=f[n].toLowerCase(),N=y[n].toLowerCase();return h==="desc"?b<N?1:b>N?-1:0:b<N?-1:b>N?1:0}else if(n==="Price"){const b=f[n],N=y[n];return h==="desc"?N-b:b-N}}):[]}}function q(){return e("div",{className:"h-full w-full bg-surface flex flex-col justify-center items-center shadow-lg",children:s("div",{className:"text-center",children:[e("p",{className:"mb-4 text-red-500",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-16 w-16 mx-auto",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})})}),e("p",{className:"font-semibold text-3xl",children:"Some Error Occured"})]})})}function we(){const t=_(),{selectedCoin:r,selectCoin:a}=P(n=>n),i=n=>{var L;if(r&&r.ID===n.ID)return;a(n);const h=document.getElementById("buySell");h&&((L=document.getElementById("content"))==null||L.scrollTo({top:h.offsetTop,behavior:"smooth"}))},[l,o]=t.sortKey.split(" "),c=n=>{l===n?t.sortBy(n,o==="desc"?"asc":"desc"):t.sortBy(n,"desc")},v=["Name","Price"];if(t.error)return e(q,{});const p=()=>t.loading?Array(10).fill(0).map((n,h)=>e("tr",{className:"bg-white border-gray-200",children:Array(2).fill(0).map((L,S)=>e("td",{className:"pl-3 py-5 gap-4",children:e("div",{className:"h-6 w-1/3 bg-gray-200 rounded-lg animate-pulse"})},S))},h)):t.data.map(n=>u.exports.useMemo(()=>s("tr",{className:w("bg-white hover:bg-primary-muted border-b border-gray-200 text-sm cursor-pointer font-semibold",{"!bg-primary":r&&r.ID===n.ID}),onClick:()=>i(n),children:[s("td",{className:"flex items-center gap-4 px-5 py-3",children:[e("img",{src:n.Logo,alt:n.Name,className:"w-10 h-10 rounded-full shadow-md"}),e("span",{children:n.Name})]}),e("td",{children:`$${n.Price}`})]},n.ID),[n.ID]));return s(A.Fragment,{children:[s("div",{className:"flex bg-surface flex-wrap",children:[s("div",{className:"p-5 flex-1 text-sm font-bold",children:["Last updated on ",t.lastUpdated]}),s("div",{className:"",children:[e(D,{onClick:t.prev,ghost:!0,"aria-label":"Previous Page",title:"Previous Page",className:"h-full !rounded-none",disabled:t.page===1||t.loading||t.isRefetching,children:e("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 19l-7-7 7-7"})})}),e(D,{onClick:t.next,ghost:!0,"aria-label":"Next Page",title:"Next Page",className:"h-full !rounded-none",disabled:t.loading||t.isRefetching,children:e("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 5l7 7-7 7"})})})]})]}),s("table",{className:"min-w-full xl:h-full leading-normal bg-surface rounded-lg shadow-sm overflow-hidden",children:[e("thead",{children:e("tr",{className:"border-gray-200 border-2",children:v.map(n=>e("th",{className:"w-1/2 px-4 py-5 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider",children:s("span",{className:"cursor-pointer flex hover:text-primary",onClick:()=>c(n),children:[n,l===n&&(o==="desc"?e("svg",{className:"w-4 h-4 ml-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 14l-7 7m0 0l-7-7m7 7V3"})}):e("svg",{className:"w-4 h-4 ml-2",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M8 7l4-4m0 0l4 4m-4-4v18"})}))]})},n))})}),e("tbody",{className:"h-full",children:e(p,{})})]})]})}const V=A.createContext(null);function k(t){const[r,a]=u.exports.useState(),i=(l,o)=>{a(o),t.onChange&&t.onChange(l,o)};return e(V.Provider,{value:{selected:r,onChange:i},children:e("div",{className:"rounded-md bg-surface shadow-sm",children:t.children})})}k.Tabs=({children:t})=>e("div",{className:"flex items-center justify-evenly",children:t});k.Item=({children:t,value:r,id:a,default:i})=>{const{onChange:l,selected:o}=u.exports.useContext(V);return u.exports.useEffect(()=>{!o&&i&&l(r,a)},[]),e("div",{onClick:()=>l(r,a),className:w({"text-primary border-b-primary":a===o},"p-4 flex-1 text-center cursor-pointer hover:text-primary font-bold text-lg","border-b-2 border-r-2 border-gray-200 last:border-r-0"),children:t})};k.Detail=({children:t})=>{const r=i=>t(i),{selected:a}=u.exports.useContext(V);return e("div",{className:"p-3",children:r(a)})};function be(){const{selectedCoin:t}=P(r=>r);return s("div",{className:"flex flex-wrap",children:[e("div",{className:"w-full xl:w-3/4 xl:px-4",children:e(we,{})}),e("div",{className:"mt-4 xl:mt-0 w-full xl:w-1/4 xl:px-4",children:s(k,{children:[s(k.Tabs,{children:[e(k.Item,{value:{text:"awesome!"},id:"Buy",default:!0,children:"Buy"}),e(k.Item,{value:{text:"not awesome"},id:"Sell",children:"Sell"})]}),e(k.Detail,{children:r=>t?s("div",{className:"p-2",children:[s("div",{className:"mb-4",children:[s("div",{className:"flex items-center gap-4 text-xl font-bold",children:[e("img",{src:t.Logo,alt:t.Name,className:"w-14 h-14 rounded-full shadow-md"}),s("div",{children:[e("span",{className:"ml-2",children:t.Name}),s("span",{className:"ml-2",children:["(",t.Symbol,")"]})]})]}),s("div",{className:"flex items-center",children:[s("div",{className:"flex-1",children:[s("div",{className:"my-5",children:[e("p",{className:"text-3xl sm:text-4xl 2xl:text-6xl font-light truncate",children:"1"}),s("p",{className:"font-bold ml-2",children:["1 ",t.Name," (",t.Symbol,") for"]})]}),s("div",{className:"my-5",children:[e("p",{className:"text-3xl sm:text-4xl 2xl:text-6xl font-light truncate",title:`$${t.Price}`,children:t.Price}),e("p",{className:"font-bold ml-2",children:"USD($)"})]})]}),e("div",{className:"mb-12",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",fill:"var(--primary)",viewBox:"0 0 16 16",children:e("path",{fillRule:"evenodd",d:"M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"})})})]})]}),e(F,{className:"w-full",to:`/trade?base=${t.Symbol}&dir=${r}`,children:s(D,{id:"buySell",className:"w-full",children:["Proceed to ",r]})})]}):e("div",{id:"buySell",className:"min-h-[300px] flex items-center justify-center text-3xl",children:s("div",{className:"mb-5 text-center",children:[e("p",{className:"text-5xl mb-4",children:"$"}),e("p",{children:"No Asset selected"})]})})})]})})]})}function ye(){const t=["Built with TailwindCSS + ViteJS for smaller and faster builds","Custom components like Select, Switcher etc","Zustand used for state management","3 routes available home, trade and login","Includes custom hooks for debounce and transforming api responses from react-query","Responsive layout"],r=oe(),a=H().search;return P(o=>o.user)?e(ne,{to:"/"}):s("div",{className:"px-3 py-6 rounded-2xl flex flex-wrap justify-evenly",children:[e("div",{className:"md:w-1/3 md:order-2 mb-10",children:e(E,{onSuccess:()=>{const c=new URLSearchParams(a).get("next");r(c?`/${c}`:"/")}})}),e("div",{className:"md:w-1/3 grid md:order-1",children:t.map(o=>s("div",{className:"flex gap-x-5 text-lg md:text-2xl",children:[e("div",{className:"w-8 mb-16",children:e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"})})}),e("span",{children:o})]},o))}),s("svg",{id:"clouds",className:"fixed bottom-[-160px] left-[-230px] w-screen -z-10",xmlns:"http://www.w3.org/2000/svg",width:"2611.084",height:"485.677",viewBox:"0 0 2611.084 485.677",children:[e("title",{children:"Gray Clouds Background"}),e("path",{id:"Path_39","data-name":"Path 39",d:"M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z",transform:"translate(142.69 -634.312)",fill:"#eee"})]})]})}function Q(t,r=700){const[a,i]=u.exports.useState(t);return u.exports.useEffect(()=>{setTimeout(()=>{i(t)},r)},[t]),a}const Ne={ctf:"ctf",ftc:"ftc"},Z=({children:t})=>{const[r,a]=u.exports.useState("");return s("div",{children:[e(I,{name:"searchKey",className:"shadow-md sticky",placeholder:"Search ..",value:r,onChange:l=>a(l.target.value)}),(()=>t(r,a))()]})};function Ce({availableCryptos:t,availableFiats:r,initialCrypto:a,initialDirection:i}){var N,T;const[l,o]=u.exports.useState({fiat:{code:"USD",description:"United Stated Dollar"},crypto:a,fiatAmount:1,cryptoAmount:1,conversionDir:i&&Ne[i]||"ctf",modal:null}),c=Q(l.cryptoAmount),v=Q(l.fiatAmount),p=$("fiat/exchange",()=>ve(l.fiat.code,l.cryptoAmount),{initialData:{rates:{}},keepPreviousData:!0,refetchOnWindowFocus:!1});u.exports.useEffect(()=>{p.refetch()},[l.fiat.code]),u.exports.useEffect(()=>{var m;((m=p.data)==null?void 0:m.info)&&o(d=>{var C;return g(g({},d),d.conversionDir==="ctf"?{fiatAmount:p.data.info.rate*(d.cryptoAmount*d.crypto.Price)}:{cryptoAmount:((C=p.data)==null?void 0:C.info.rate)*d.fiatAmount/d.crypto.Price})})},[(T=(N=p.data)==null?void 0:N.info)==null?void 0:T.rate,l.crypto.ID,v,c]);const n=m=>{o(d=>x(g({},d),{crypto:m,modal:null}))},h=m=>{o(d=>x(g({},d),{fiat:m,modal:null}))},L=()=>e(Z,{children:m=>e("div",{className:"grid lg:grid-cols-2 2xl:grid-cols-3 gap-4 p-4",children:Object.entries(r.symbols).map(d=>{const[C,M]=d;return JSON.stringify(Object.values(M)).match(new RegExp(m,"i"))?s("div",{className:"px-3 py-4 border flex items-center gap-7 shadow-sm cursor-pointer hover:shadow-md rounded-md",onClick:()=>h(M),children:[e("div",{className:`w-12 h-8 shadow-lg currency-flag currency-flag-${C.toLowerCase()}`}),s("div",{className:"flex-1 font-semibold",children:[e("p",{children:C}),e("p",{className:"font-semibold",children:M.description})]})]},C):""})})}),S=m=>{o(d=>x(g({},d),{modal:m}))},f=()=>{o(m=>x(g({},m),{modal:null}))},y=m=>{if(m.target.value&&!/^-?\d+\.?\d*$/.exec(m.target.value))return;let d=(m.target.value?m.target.value:0).toString();for(;d.startsWith("0")&&d.length>1;)d=d.slice(1);o(C=>x(g({},C),{[m.target.name]:d}))},b=()=>{o(m=>x(g({},m),{conversionDir:m.conversionDir==="ctf"?"ftc":"ctf"}))};return s(B,{children:[e(O,{show:!!l.modal,onOverlayClick:f,children:e("div",{className:"bg-surface w-11/12 2xl:w-2/3 h-3/4 overflow-y-auto rounded-lg shadow-lg p-3",children:e("div",{className:"relative h-full",children:l.modal==="crypto"?e(Z,{children:m=>e("div",{className:"grid lg:grid-cols-2 2xl:grid-cols-3 gap-4 p-4",children:t.map(d=>JSON.stringify(Object.values(d)).match(new RegExp(m,"i"))?s("div",{className:"px-3 py-4 border flex gap-7 shadow-sm cursor-pointer hover:shadow-md rounded-md",onClick:()=>n(d),children:[e("img",{src:d.Logo,alt:d.Name,className:"w-12 h-12"}),s("div",{className:"flex-1 font-semibold",children:[e("p",{children:d.Name}),s("p",{className:"font-semibold",children:["$",d.Price]})]})]},d.ID):"")})}):e(L,{})})})}),s("div",{className:"w-full flex flex-wrap bg-surface h-full rounded-lg p-4 shadow-md justify-between",children:[s("div",{className:w("w-full md:w-1/3 flex flex-col gap-4",{"order-3":l.conversionDir==="ftc"}),children:[s("div",{className:"flex justify-between items-center px-5 border shadow-sm cursor-pointer hover:shadow-md rounded-md",onClick:()=>S("crypto"),children:[s("div",{className:"pr-3 py-4 flex gap-7",children:[e("img",{src:l.crypto.Logo,alt:l.crypto.Name,className:"w-12 h-12"}),s("div",{className:"flex-1 font-semibold",children:[e("p",{children:l.crypto.Name}),s("p",{className:"font-semibold",children:["$",l.crypto.Price]})]})]}),e("span",{children:e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"var(--primary)",viewBox:"0 0 16 16",children:e("path",{fillRule:"evenodd",d:"M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"})})})]}),e("div",{className:"flex-1 w-full",children:e("textarea",{name:"cryptoAmount",disabled:l.conversionDir==="ftc",onChange:y,value:l.cryptoAmount,className:"shadow-md h-full w-full rounded-lg focus:outline-none border border-primary-muted focus:border-2 focus:rounded-xl resize-none md:text-5xl p-4"})})]}),s("div",{className:w("w-full md:w-1/3 text-xl sm:text-3xl lg:text-4xl 2xl:text-6xl flex flex-col items-center justify-center gap-5 md:gap-y-10",{"order-2":l.conversionDir==="ftc"}),children:[e("div",{className:w("transform transition-all cursor-pointer hover:scale-125",{"md:rotate-90":l.conversionDir==="ctf","md:-rotate-90 rotate-180":l.conversionDir==="ftc"}),onClick:b,children:e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",fill:"var(--primary)",viewBox:"0 0 16 16",children:e("path",{fillRule:"evenodd",d:"M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"})})}),s("div",{children:["x",e("span",{className:"ml-3 font-semibold",children:l.crypto.Price})]}),e(D,{className:"!py-3 hidden md:block md:text-lg font-semibold rounded-md",type:"button",children:"Connect Wallet"})]}),s("div",{className:w("w-full md:w-1/3 flex flex-col gap-4",{"order-1":l.conversionDir==="ftc"}),children:[s("div",{className:"px-3 py-4 border flex items-center gap-7 shadow-sm cursor-pointer hover:shadow-md rounded-md",onClick:()=>S("fiat"),children:[e("div",{className:`w-12 h-8 shadow-lg currency-flag currency-flag-${l.fiat.code.toLowerCase()}`}),s("div",{className:"flex-1 font-semibold",children:[e("p",{children:l.fiat.code}),e("p",{className:"font-semibold",children:l.fiat.description})]}),e("span",{children:e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"var(--primary)",viewBox:"0 0 16 16",children:e("path",{fillRule:"evenodd",d:"M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"})})})]}),e("div",{className:"flex-1 w-full",children:e("textarea",{name:"fiatAmount",onChange:y,disabled:l.conversionDir==="ctf",value:l.fiatAmount,className:"shadow-md h-full w-full rounded-lg focus:outline-none border border-primary-muted focus:border-2 focus:rounded-xl resize-none md:text-5xl p-4"})})]})]})]})}function ke({}){const t=P(p=>p.user),r=_(50),a=H().search,i=$("fiat/currencies",()=>xe(),{initialData:{symbols:{}}});if(r.loading||i.isLoading)return e("p",{children:"'Loading .. '"});if(r.error||i.error)return e(q,{});const l=new URLSearchParams(a),o=l.get("base"),c=l.get("dir")||"Buy",v={Buy:"ftc",Sell:"ctf"};return s(B,{children:[e(O,{show:!t,children:e("div",{className:"bg-surface w-10/12 lg:w-6/12 2xl:w-1/3 px-6 py-10 lg:p-12 rounded-lg shadow-md",children:e(E,{})})}),e(Ce,{initialCrypto:o?r.data.find(p=>p.Symbol===o):r.data[0],initialDirection:v[c],availableCryptos:r.data,availableFiats:i.data})]})}const Le=new ie;function Se(){return e(ce,{client:Le,children:e(de,{children:s("main",{className:"flex flex-col h-screen",children:[e(pe,{}),e("section",{id:"content",className:"flex-1 overflow-y-auto p-6",children:s(me,{children:[e(z,{index:!0,element:e(be,{})}),e(z,{path:"/trade",element:e(ke,{})}),e(z,{path:"/login",element:e(ye,{})})]})})]})})})}ue.render(e(A.StrictMode,{children:e(Se,{})}),document.getElementById("root"));
