(this["webpackJsonpdaxx-task"]=this["webpackJsonpdaxx-task"]||[]).push([[3],{45:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(1),s=n(0),o=n.n(s),a=n(2),c=n(20);const i=a.d.section`
    padding-top: 24px;
    padding-bottom: 24px;
`,d=a.d.h2`
  font-size: 36px;
  margin-bottom: 24px;
  ${({visuallyHidden:e})=>e&&Object(c.b)()}
`;function u({children:e}){return Object(r.jsx)(i,{children:e})}var l=o.a.memo(u)},46:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(2),s=n(20);r.d.div`

`;const o=r.d.h1`
  ${({visuallyHidden:e})=>e&&Object(s.b)()}
`},47:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return f}));var r=n(1),s=n(0),o=n.n(s),a=n(2),c=n(21);const i=a.d.form`
  background-color: ${c.a.colors.bg};
  padding: 24px;
  box-shadow: 0 3px 5px 0 ${c.a.colors.shadowBlack};
  border: 2px solid ${c.a.colors.lightGray};
  border-radius: 5px;
`;function d({children:e,onSubmit:t}){return Object(r.jsx)(i,{onSubmit:t,children:e})}var u=o.a.memo(d);const l=a.d.button`
  border: none;
  border-radius: 3px;
  padding: 4px 16px;
  cursor: pointer;
  margin-top: 12px;
  color: ${c.a.colors.white};
  background-color: ${c.a.colors.accent};
  transition: 100ms ease-out background-color;
  
  &:hover,
  &:focus {
    background-color: ${c.a.colors.accentInteraction};
  }
`,b=a.d.label`
  display: block;
  margin-bottom: 24px;
`,p=a.d.div`
  font-size: 16px;
  max-width: 200px;
  margin-bottom: 2px;
`,j=a.d.p`
  position: absolute;
  color: ${c.a.colors.red};
  font-size: 11px;
  margin-top: 2px;
`;function x({children:e}){return Object(r.jsx)(l,{name:"submit",type:"submit",children:e})}var m=o.a.memo(x);function h({type:e,label:t,name:n,errors:s}){return Object(r.jsxs)(b,{children:[Object(r.jsx)(p,{children:t}),Object(r.jsx)("input",{name:n,type:e}),Object(r.jsx)(j,{children:s})]})}var f=o.a.memo(h)},48:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var r=n(1),s=n(0),o=n.n(s),a=n(15);var c=n(3),i=n(47),d=n(22),u=n(45),l=n(46),b=n(11),p=n(12);var j=function({username:e}){const{signup:t}=Object(b.b)(),[n,o]=Object(s.useState)(null),[a,j]=Object(s.useState)(!1),{addMessage:x}=Object(p.b)(),m=Object(s.useCallback)((n=>{n.preventDefault();const{password:r,"password-confirm":s}=n.target.elements,a=class{static validate(e,t=""){return t&&e!==t?["Passwords don't match"]:this.checkComplexity(e)}static checkComplexity(e){return e.length>3?[]:["Password is too easy to hack!"]}}.validate(r.value,s.value);a.length?o(a):(o(null),t(e,r.value),x(`User ${e} signed up successfully!`),j(!0))}),[o,t,e,x]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l.a,{visuallyHidden:!0,children:"Activation page"}),Object(r.jsx)(u.a,{children:Object(r.jsxs)(d.a,{children:[Object(r.jsxs)(u.b,{children:["Please set password for your account, ",e]}),Object(r.jsxs)(i.a,{onSubmit:m,children:[Object(r.jsx)(i.c,{errors:n,name:"password",label:"Create your password",type:"password"}),Object(r.jsx)(i.c,{name:"password-confirm",label:"Confirm your password",type:"password"}),Object(r.jsx)(i.b,{children:"Submit"})]})]})}),a&&Object(r.jsx)(c.a,{to:"/login"})]})};function x(){const{username:e}=Object(c.g)(),{isUserExist:t}=(e=>{const[t,n]=Object(s.useState)(null);return Object(s.useEffect)((()=>{a.a.isUserExist(e).then((e=>{n(e)}))}),[n,e]),{isUserExist:t}})(e),{addMessage:n}=Object(p.b)();return Object(s.useEffect)((()=>{t&&n("User already exist!")}),[t,n]),t?Object(r.jsx)(c.a,{to:{pathname:"/login"}}):Object(r.jsx)(j,{username:e})}var m=o.a.memo(x)}}]);
//# sourceMappingURL=3.2dfda041.chunk.js.map