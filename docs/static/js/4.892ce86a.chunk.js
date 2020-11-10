(this["webpackJsonpdaxx-task"]=this["webpackJsonpdaxx-task"]||[]).push([[4],{45:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var o=n(1),r=n(0),c=n.n(r),a=n(2),s=n(20);const i=a.d.section`
    padding-top: 24px;
    padding-bottom: 24px;
`,d=a.d.h2`
  font-size: 36px;
  margin-bottom: 24px;
  ${({visuallyHidden:e})=>e&&Object(s.b)()}
`;function l({children:e}){return Object(o.jsx)(i,{children:e})}var b=c.a.memo(l)},46:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n(2),r=n(20);o.d.div`

`;const c=o.d.h1`
  ${({visuallyHidden:e})=>e&&Object(r.b)()}
`},47:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return O}));var o=n(1),r=n(0),c=n.n(r),a=n(2),s=n(21);const i=a.d.form`
  background-color: ${s.a.colors.bg};
  padding: 24px;
  box-shadow: 0 3px 5px 0 ${s.a.colors.shadowBlack};
  border: 2px solid ${s.a.colors.lightGray};
  border-radius: 5px;
`;function d({children:e,onSubmit:t}){return Object(o.jsx)(i,{onSubmit:t,children:e})}var l=c.a.memo(d);const b=a.d.button`
  border: none;
  border-radius: 3px;
  padding: 4px 16px;
  cursor: pointer;
  margin-top: 12px;
  color: ${s.a.colors.white};
  background-color: ${s.a.colors.accent};
  transition: 100ms ease-out background-color;
  
  &:hover,
  &:focus {
    background-color: ${s.a.colors.accentInteraction};
  }
`,u=a.d.label`
  display: block;
  margin-bottom: 24px;
`,p=a.d.div`
  font-size: 16px;
  max-width: 200px;
  margin-bottom: 2px;
`,x=a.d.p`
  position: absolute;
  color: ${s.a.colors.red};
  font-size: 11px;
  margin-top: 2px;
`;function j({children:e}){return Object(o.jsx)(b,{name:"submit",type:"submit",children:e})}var m=c.a.memo(j);function h({type:e,label:t,name:n,errors:r}){return Object(o.jsxs)(u,{children:[Object(o.jsx)(p,{children:t}),Object(o.jsx)("input",{name:n,type:e}),Object(o.jsx)(x,{children:r})]})}var O=c.a.memo(h)},49:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var o=n(1),r=n(0),c=n(45),a=n(22),s=n(46),i=n(47),d=n(11),l=n(3),b=n(23);var u=function(){const{login:e,user:t}=Object(d.b)(),[n,u]=Object(r.useState)(null),p=Object(r.useCallback)((t=>{t.preventDefault();const{username:n,password:o}=t.target.elements;e(n.value,o.value).then((()=>{u("")}),(({message:e})=>{u(e)}))}),[e]);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(s.a,{visuallyHidden:!0,children:"Login page"}),Object(o.jsx)(c.a,{children:Object(o.jsxs)(a.a,{children:[Object(o.jsx)(c.b,{children:"Welcome! Please log in"}),Object(o.jsxs)(i.a,{onSubmit:p,children:[Object(o.jsx)(i.c,{errors:n,name:"username",label:"Username",type:"text"}),Object(o.jsx)(i.c,{name:"password",label:"Password",type:"password"}),Object(o.jsx)("p",{children:Object(o.jsx)(b.b,{to:"/reset",children:"Reset your password"})}),Object(o.jsx)(i.b,{children:"Submit"})]}),Object(o.jsx)(b.b,{style:{display:"block",marginTop:"20px"},to:"/activation/test",children:"Go to activation page"})]})}),t&&Object(o.jsx)(l.a,{to:"/dashboard"})]})}}}]);
//# sourceMappingURL=4.892ce86a.chunk.js.map