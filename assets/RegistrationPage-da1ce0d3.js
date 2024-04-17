import{r as b,c as E,n as $,b as y,o as T,j as e,k as o,L as q,p as P,B as x,q as k}from"./index-e493702e.js";import{S as C,R as F,B,F as I,a as O,M as U,L as d,b as l,I as c,c as p,d as u,E as n,e as z,P as M,f as W}from"./RegistrationPage.styled-a83a49d2.js";const N=/^[a-z0-9._-]+@[a-z0-9.-]+.[a-z]{2,4}$/,D=()=>{const[a,g]=b.useState(!1),j=E($),h=y(),{register:t,formState:{errors:s,isValid:w},handleSubmit:f,reset:R,watch:v}=T({mode:"onChange"}),m=r=>{g(i=>({...i,[r]:!i[r]}))},L=async({email:r,password:i})=>{try{await h(P({email:r,password:i})).unwrap(),x.success("Registration successful. Welcome aboard!"),await h(k()).unwrap(),R()}catch(S){x.error(S)}};return e.jsxs(C,{className:"background",children:[e.jsx(F,{children:e.jsx(B,{children:e.jsx(I,{children:e.jsxs(O,{onSubmit:f(L),children:[e.jsx(U,{children:"Sign Up"}),e.jsxs(d,{children:[e.jsx(l,{id:"email",$errors:s.email,children:"Enter your email"}),e.jsx(c,{className:s.email?"error":"",id:"email",type:"email",placeholder:"E-mail",...t("email",{required:"This field is required!",minLength:{value:8,message:"Too short!"},maxLength:{value:64,message:"Too long!"},pattern:{value:N,message:"Enter a correct email, example@gmail.com"}}),$errors:s.email}),e.jsx("div",{children:s.email&&e.jsx(p,{children:s.email.message||"Error!"})})]}),e.jsxs(d,{children:[e.jsx(l,{id:"password",$errors:s.password,children:"Enter your password"}),e.jsxs(u,{children:[e.jsx(c,{placeholder:"Password",id:"password",type:a.password?"text":"password",...t("password",{required:"This field is required!",minLength:{value:3,message:"To short!"},maxLength:{value:64,message:"To long!"}}),$errors:s.password}),e.jsx("div",{onClick:()=>m("password"),children:a.password?e.jsx(n,{children:e.jsx("use",{href:`${o}#icon-outlineOn`})}):e.jsx(n,{children:e.jsx("use",{href:`${o}#icon-outlineOff`})})})]}),e.jsx("div",{style:{position:"relative"},children:s.password&&e.jsx(p,{children:s.password.message||"Error!"})})]}),e.jsxs(d,{children:[e.jsxs(l,{id:"email",$errors:s.passwordRepeat,children:["Repeat password"," "]}),e.jsxs(u,{children:[e.jsx(c,{id:"passwordRepeat",type:a.passwordRepeat?"text":"password",placeholder:"Repeat password",...t("passwordRepeat",{required:"This field is required!",minLength:{value:3,message:"To short!"},maxLength:{value:64,message:"To long!"},validate:r=>{if(v("password")!=r)return"Your passwords do no match"}}),$errors:s.passwordRepeat}),e.jsx("div",{onClick:()=>m("passwordRepeat"),children:a.passwordRepeat?e.jsx(n,{children:e.jsx("use",{href:`${o}#icon-outlineOn`})}):e.jsx(n,{children:e.jsx("use",{href:`${o}#icon-outlineOff`})})})]}),e.jsx("div",{children:s.passwordRepeat&&e.jsx(p,{children:s.passwordRepeat.message||"Error!"})})]}),e.jsx(z,{type:"submit",disabled:!w,value:"Sign Up",children:"Sign Up"}),e.jsx(M,{to:"/login",children:"Sign in"})]})})})}),j&&e.jsx(W,{children:e.jsx(q,{})})]})};export{D as default};