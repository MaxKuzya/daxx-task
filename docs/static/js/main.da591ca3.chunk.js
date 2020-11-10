(this["webpackJsonpdaxx-task"]=this["webpackJsonpdaxx-task"]||[]).push([[0],{11:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return l}));var r=n(1),o=n(0),a=n(15);class c{static async login(t,e){const n=window.localStorage.getItem(t);if(n&&e===n)return{user:{username:t}};throw new Error("No such user found")}static async logout(){}}const s=Object(o.createContext)();function i({children:t}){const e=function(){const[t,e]=Object(o.useState)(null);return{user:t,login:(t,n)=>c.login(t,n).then((t=>(e(t.user),t.user))),signup:(t,e)=>a.a.createUser(t,e).then((t=>t.user)),logout:()=>c.logout().then((()=>{e(!1)})),resetPassword:t=>a.a.resetPassword(t).then((()=>!0))}}();return Object(r.jsx)(s.Provider,{value:e,children:t})}const l=()=>Object(o.useContext)(s)},12:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return s}));var r=n(1),o=n(0);const a=Object(o.createContext)();function c({children:t}){const e=i();return Object(r.jsx)(a.Provider,{value:e,children:t})}const s=()=>Object(o.useContext)(a),i=()=>{const[t,e]=Object(o.useState)("");return Object(o.useEffect)((()=>{t&&setTimeout((()=>{e("")}),3e3)}),[t]),{message:t,addMessage:e}}},15:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));class r{static async isUserExist(t){const e=window.localStorage.getItem(t);return Boolean(e)}static async createUser(t,e){return window.localStorage.setItem(t,e),{user:{username:t}}}static async resetPassword(t){if(!window.localStorage.getItem(t))throw new Error("No such user found");window.localStorage.removeItem(t)}}},20:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return a}));var r=n(2);const o=()=>r.c`
  ${r.c`
  display: flex;
  flex: 1 0 auto;
`};
  flex-direction: column;
`,a=()=>r.c`
  position: absolute !important;
  clip: rect(1px, 1px, 1px, 1px);
  padding:0 !important;
  border:0 !important;
  height: 1px !important; 
  width: 1px !important; 
  overflow: hidden;
`},21:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));const r="#ec246b",o={font:{primary:"Roboto, sans-serif",light:"300",regular:"400",medium:"500",bold:"700"},colors:Object.freeze({accent:r,accentInteraction:"#9f083e",black:"#000000",red:r,white:"#FFFFFF",bg:"#F5F5F5",shadowBlack:"rgba(0, 0, 0, 0.1)",lightGray:"#e0e0e0"}),breakpoints:{xxl:1600,xl:1200,lg:992,md:768,sm:576,xs:575,zero:0}}},22:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(1),o=n(0),a=n.n(o);const c=n(2).d.div`
    padding: 0 12px;
    max-width: 960px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`;function s({children:t}){return Object(r.jsx)(c,{children:t})}var i=a.a.memo(s)},44:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(0),a=n.n(o),c=n(24),s=n.n(c),i=n(28),l=n(23),d=n(3),u=n(2),b=n(20);const h=u.d.main`
  ${Object(b.a)()};
`,j=Object(u.b)((({theme:t})=>u.c`
    /** --- RESET STYLES --- **/
    ${u.c`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  font,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td {
    margin: 0;
    padding: 0;
    border: 0;
    font-weight: inherit;
    font-style: inherit;
    font-size: 100%;
    font-family: inherit;
    vertical-align: baseline;
  }
`};
    /** --- BASE STYLES --- **/
    ${(({font:t})=>u.c`
  *,
  :after,
  :before {
    box-sizing: border-box;
  }

  html,
  body,
  main,
  #root {
    width: 100%;
    height: 100%;
  }
  

  body {
    display: flex;
    flex-direction: column;
    font-family: ${t.primary};
    
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
  }
`)(t)};
  `));function x({children:t}){return Object(r.jsxs)(h,{children:[Object(r.jsx)(j,{}),t]})}var f=a.a.memo(x);u.d.header((({theme:{colors:t}})=>u.c`
    background: ${t.primary1};
  `));var m=function(){return Object(r.jsx)("div",{children:"Loading..."})};var p=function({error:t}){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{children:"There was an error..."}),Object(r.jsx)("pre",{style:{maxWidth:700},children:JSON.stringify(t,null,2)})]})},g=n(11);var O=function({children:t,...e}){let{user:n}=Object(g.b)();return Object(r.jsx)(d.b,{...e,render:({location:e})=>n?t:Object(r.jsx)(d.a,{to:{pathname:"/login",state:{from:e}}})})},w=n(12);const y=u.e`
  from {
    opacity: 0;
    transform: translate(-50%, -16px);
  } 
  to {
    opacity: 1;
    transform: translate(-50%);
  }
`,v=u.d.div`
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(170,221,255, 0.9);
  padding: 12px 24px;
  border-radius: 5px;
  animation: ${y} 300ms ease;
`;var k=n(22);function S(){const{message:t}=Object(w.b)();return t?Object(r.jsx)(v,{children:Object(r.jsx)(k.a,{children:t})}):null}var E=a.a.memo(S),F=n(21);const z=a.a.lazy((()=>n.e(4).then(n.bind(null,49)))),I=a.a.lazy((()=>n.e(3).then(n.bind(null,48)))),$=a.a.lazy((()=>n.e(6).then(n.bind(null,50)))),B=a.a.lazy((()=>n.e(5).then(n.bind(null,51))));function C(){return Object(r.jsx)(g.a,{children:Object(r.jsx)(w.a,{children:Object(r.jsx)(l.a,{basename:"/daxx-task",children:Object(r.jsx)(u.a,{theme:F.a,children:Object(r.jsx)(i.ErrorBoundary,{FallbackComponent:p,children:Object(r.jsx)(o.Suspense,{fallback:Object(r.jsx)(m,{}),children:Object(r.jsxs)(f,{children:[Object(r.jsxs)(d.d,{children:[Object(r.jsx)(d.b,{path:"/activation/:username",children:Object(r.jsx)(I,{})}),Object(r.jsx)(O,{path:"/dashboard",children:Object(r.jsx)($,{})}),Object(r.jsx)(d.b,{path:"/login",exact:!0,children:Object(r.jsx)(z,{})}),Object(r.jsx)(d.b,{path:"/reset",exact:!0,children:Object(r.jsx)(B,{})}),Object(r.jsx)(d.a,{to:"/login"})]}),Object(r.jsx)(E,{})]})})})})})})})}s.a.render(Object(r.jsx)(C,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.da591ca3.chunk.js.map