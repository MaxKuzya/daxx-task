(this["webpackJsonpdaxx-task"]=this["webpackJsonpdaxx-task"]||[]).push([[3],{45:function(e,t,s){"use strict";s.d(t,"a",(function(){return l})),s.d(t,"b",(function(){return d}));var n=s(1),r=s(0),o=s.n(r),c=s(2),a=s(20);const i=c.d.section`
    padding-top: 24px;
    padding-bottom: 24px;
`,d=c.d.h2`
  font-size: 36px;
  margin-bottom: 24px;
  ${({visuallyHidden:e})=>e&&Object(a.b)()}
`;function u({children:e}){return Object(n.jsx)(i,{children:e})}var l=o.a.memo(u)},46:function(e,t,s){"use strict";s.d(t,"a",(function(){return o}));var n=s(2),r=s(20);n.d.div`

`;const o=n.d.h1`
  ${({visuallyHidden:e})=>e&&Object(r.b)()}
`},47:function(e,t,s){"use strict";s.d(t,"a",(function(){return u})),s.d(t,"b",(function(){return m})),s.d(t,"c",(function(){return f}));var n=s(1),r=s(0),o=s.n(r),c=s(2),a=s(21);const i=c.d.form`
  background-color: ${a.a.colors.bg};
  padding: 24px;
  box-shadow: 0 3px 5px 0 ${a.a.colors.shadowBlack};
  border: 2px solid ${a.a.colors.lightGray};
  border-radius: 5px;
`;function d({children:e,onSubmit:t}){return Object(n.jsx)(i,{onSubmit:t,children:e})}var u=o.a.memo(d);const l=c.d.button`
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
`,b=c.d.label`
  display: block;
  margin-bottom: 24px;
`,p=c.d.div`
  font-size: 12px;
  max-width: 200px;
  margin-bottom: 4px;
`,j=c.d.p`
  position: absolute;
  color: ${a.a.colors.red};
  font-size: 8px;
`;function x({children:e}){return Object(n.jsx)(l,{name:"submit",type:"submit",children:e})}var m=o.a.memo(x);function h({type:e,label:t,name:s,errors:r}){return Object(n.jsxs)(b,{children:[Object(n.jsx)(p,{children:t}),Object(n.jsx)("input",{name:s,type:e}),Object(n.jsx)(j,{children:r})]})}var f=o.a.memo(h)},48:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return m}));var n=s(1),r=s(0),o=s.n(r),c=s(15);var a=s(3),i=s(47),d=s(22),u=s(45),l=s(46),b=s(11),p=s(12);var j=function({username:e}){const{signup:t}=Object(b.b)(),[s,o]=Object(r.useState)(null),[c,j]=Object(r.useState)(!1),{addMessage:x}=Object(p.b)(),m=Object(r.useCallback)((s=>{s.preventDefault();const{password:n,"password-confirm":r}=s.target.elements,c=class{static validate(e,t=""){return t&&e!==t?["Passwords don't match"]:this.checkComplexity(e)}static checkComplexity(e){return e.length>3?[]:["Password is too easy to hack!"]}}.validate(n.value,r.value);c.length?o(c):(o(null),t(e,n.value),x(`User ${e} signed up successfully!`),j(!0))}),[o,t,e,x]);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(l.a,{visuallyHidden:!0,children:"Activation page"}),Object(n.jsx)(u.a,{children:Object(n.jsxs)(d.a,{children:[Object(n.jsxs)(u.b,{children:["Please set password for your account, ",e]}),Object(n.jsxs)(i.a,{onSubmit:m,children:[Object(n.jsx)(i.c,{errors:s,name:"password",label:"Create your password",type:"password"}),Object(n.jsx)(i.c,{name:"password-confirm",label:"Confirm your password",type:"password"}),Object(n.jsx)(i.b,{children:"Submit"})]})]})}),c&&Object(n.jsx)(a.a,{to:"/login"})]})};function x(){const{username:e}=Object(a.g)(),{isUserExist:t}=(e=>{const[t,s]=Object(r.useState)(null);return Object(r.useEffect)((()=>{console.log(e),c.a.isUserExist(e).then((e=>{s(e)}))}),[s,e]),{isUserExist:t}})(e),{addMessage:s}=Object(p.b)();return console.log("isUserExist",t),Object(r.useEffect)((()=>{t&&s("User already exist!")}),[t,s]),t?Object(n.jsx)(a.a,{to:{pathname:"/login"}}):Object(n.jsx)(j,{username:e})}var m=o.a.memo(x)}}]);
//# sourceMappingURL=3.12bd63a7.chunk.js.map