(this["webpackJsonpdaxx-task"]=this["webpackJsonpdaxx-task"]||[]).push([[5],{45:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(1),o=n(0),c=n.n(o),s=n(2),a=n(20);const i=s.d.section`
    padding-top: 24px;
    padding-bottom: 24px;
`,d=s.d.h2`
  font-size: 36px;
  margin-bottom: 24px;
  ${({visuallyHidden:e})=>e&&Object(a.b)()}
`;function u({children:e}){return Object(r.jsx)(i,{children:e})}var b=c.a.memo(u)},46:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(2),o=n(20);r.d.div`

`;const c=r.d.h1`
  ${({visuallyHidden:e})=>e&&Object(o.b)()}
`},47:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return f}));var r=n(1),o=n(0),c=n.n(o),s=n(2),a=n(21);const i=s.d.form`
  background-color: ${a.a.colors.bg};
  padding: 24px;
  box-shadow: 0 3px 5px 0 ${a.a.colors.shadowBlack};
  border: 2px solid ${a.a.colors.lightGray};
  border-radius: 5px;
`;function d({children:e,onSubmit:t}){return Object(r.jsx)(i,{onSubmit:t,children:e})}var u=c.a.memo(d);const b=s.d.button`
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
`,l=s.d.label`
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
`;function j({children:e}){return Object(r.jsx)(b,{name:"submit",type:"submit",children:e})}var m=c.a.memo(j);function h({type:e,label:t,name:n,errors:o}){return Object(r.jsxs)(l,{children:[Object(r.jsx)(p,{children:t}),Object(r.jsx)("input",{name:n,type:e}),Object(r.jsx)(x,{children:o})]})}var f=c.a.memo(h)},51:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var r=n(1),o=n(0),c=n(3),s=n(47),a=n(45),i=n(22),d=n(46),u=n(11),b=n(12);var l=function(){const{resetPassword:e}=Object(u.b)(),[t,n]=Object(o.useState)(null),[l,p]=Object(o.useState)(!1),{addMessage:x}=Object(b.b)(),j=Object(o.useCallback)((t=>{t.preventDefault();const{username:r}=t.target.elements;e(r.value).then((()=>{x("Your password was successfully reset"),p(r.value)}),(({message:e})=>{n(e)}))}),[e,e]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d.a,{visuallyHidden:!0,children:"Login page"}),Object(r.jsx)(a.a,{children:Object(r.jsxs)(i.a,{children:[Object(r.jsx)(a.b,{children:"Type your username to reset password"}),Object(r.jsxs)(s.a,{onSubmit:j,children:[Object(r.jsx)(s.c,{errors:t,name:"username",label:"Username",type:"text"}),Object(r.jsx)(s.b,{children:"Submit"})]})]})}),l&&Object(r.jsx)(c.a,{to:"/activation/"+l})]})}}}]);
//# sourceMappingURL=5.a723aded.chunk.js.map