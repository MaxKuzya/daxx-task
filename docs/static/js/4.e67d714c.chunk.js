(this["webpackJsonpdaxx-task"]=this["webpackJsonpdaxx-task"]||[]).push([[4],{45:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(1),o=n(0),c=n.n(o),s=n(2),a=n(20);const i=s.d.section`
    padding-top: 24px;
    padding-bottom: 24px;
`,d=s.d.h2`
  font-size: 36px;
  margin-bottom: 24px;
  ${({visuallyHidden:e})=>e&&Object(a.b)()}
`;function u({children:e}){return Object(r.jsx)(i,{children:e})}var l=c.a.memo(u)},46:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(2),o=n(20);r.d.div`

`;const c=r.d.h1`
  ${({visuallyHidden:e})=>e&&Object(o.b)()}
`},47:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return O}));var r=n(1),o=n(0),c=n.n(o),s=n(2),a=n(21);const i=s.d.form`
  background-color: ${a.a.colors.bg};
  padding: 24px;
  box-shadow: 0 3px 5px 0 ${a.a.colors.shadowBlack};
  border: 2px solid ${a.a.colors.lightGray};
  border-radius: 5px;
`;function d({children:e,onSubmit:t}){return Object(r.jsx)(i,{onSubmit:t,children:e})}var u=c.a.memo(d);const l=s.d.button`
  border: none;
  border-radius: 3px;
  padding: 4px 16px;
  cursor: pointer;
  margin-top: 12px;
  color: ${a.a.colors.white};
  background-color: ${a.a.colors.accent};
  transition: 100ms ease-out background-color;
  
  &:hover,
  &:focus {
    background-color: ${a.a.colors.accentInteraction};
  }
`,b=s.d.label`
  display: block;
  margin-bottom: 24px;
`,p=s.d.div`
  font-size: 12px;
  max-width: 200px;
  margin-bottom: 4px;
`,x=s.d.p`
  position: absolute;
  color: ${a.a.colors.red};
  font-size: 8px;
`;function j({children:e}){return Object(r.jsx)(l,{name:"submit",type:"submit",children:e})}var m=c.a.memo(j);function h({type:e,label:t,name:n,errors:o}){return Object(r.jsxs)(b,{children:[Object(r.jsx)(p,{children:t}),Object(r.jsx)("input",{name:n,type:e}),Object(r.jsx)(x,{children:o})]})}var O=c.a.memo(h)},49:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var r=n(1),o=n(0),c=n(45),s=n(22),a=n(46),i=n(47),d=n(11),u=n(3),l=n(23);var b=function(){const{login:e,user:t}=Object(d.b)(),[n,b]=Object(o.useState)(null),p=Object(o.useCallback)((t=>{t.preventDefault();const{username:n,password:r}=t.target.elements;e(n.value,r.value).then((()=>{b("")}),(({message:e})=>{b(e)}))}),[e]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(a.a,{visuallyHidden:!0,children:"Login page"}),Object(r.jsx)(c.a,{children:Object(r.jsxs)(s.a,{children:[Object(r.jsx)(c.b,{children:"Welcome! Please log in"}),Object(r.jsxs)(i.a,{onSubmit:p,children:[Object(r.jsx)(i.c,{errors:n,name:"username",label:"Username",type:"text"}),Object(r.jsx)(i.c,{name:"password",label:"Password",type:"password"}),Object(r.jsx)("p",{children:Object(r.jsx)(l.b,{to:"/reset",children:"Reset your password"})}),Object(r.jsx)(i.b,{children:"Submit"})]})]})}),t&&Object(r.jsx)(u.a,{to:"/dashboard"})]})}}}]);
//# sourceMappingURL=4.e67d714c.chunk.js.map