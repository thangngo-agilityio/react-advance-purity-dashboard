import{b,d as S,a as h,u as C,r as x,E as u,S as p,R as E,j as e,V as a,H as A,T as j,A as f,F as R,c as w,B as T}from"./index-CMKr5US7.js";import{u as U}from"./chunk-6RSEZNRH-Gcg4p0UZ.js";const _=({children:d})=>{const{users:t}=b(),{createAccount:r}=S(),m=h(s=>s.setUser),n=C(),i=U(),c=x.useCallback(async s=>{try{if(t==null?void 0:t.records.some(o=>o.fields.email===s.email))i({title:u.CREATE_ACCOUNT,description:u.ACCOUNT_CREATED,status:"error",duration:2e3,isClosable:!0});else{const o=[{fields:{name:s.name,email:s.email,password:s.password}}];await r({records:o}),i({title:p.TITLE_MESSAGE_CREATE("Account"),description:p.ACCOUNT_SUCCESS,status:"success",duration:2e3,isClosable:!0}),n(E.SIGN_IN)}}catch(l){throw l}},[r,n,m,t]),g=x.useCallback(s=>{c(s)},[c]);return e.jsxs(a,{position:"relative",height:"100%",gap:"0px",children:[d,e.jsxs(a,{w:{base:"100%",md:"988px"},h:"100%",pb:"40px",px:{base:"25px",md:"0"},gap:"0",position:"relative",zIndex:2,justifyContent:"space-between",children:[e.jsxs(a,{w:"100%",alignItems:"center",justifyContent:"center",flex:6,children:[e.jsxs(a,{width:"333px",pt:"30px",mb:"66px",children:[e.jsx(A,{size:"xl",variant:"secondary",children:"Welcome!"}),e.jsx(j,{textAlign:"center",variant:"secondary",children:"Use these awesome forms to login or create new account in your project for free."})]}),e.jsx(f,{isRegister:!0,onSubmit:g})]}),e.jsx(R,{w:"100%",flex:1,children:e.jsx(w,{})})]}),e.jsx(T,{position:"absolute",zIndex:1,top:{base:0,md:"24px"},w:{base:"100%",md:"96%"},h:{base:"700px",md:"500px",xl:"320px","2xl":"420px","5xl":520},borderRadius:{base:"unset",md:"lg"},backgroundImage:"/imgs/background-signup.svg",backgroundRepeat:"no-repeat",backgroundSize:"cover",objectFit:"cover"})]})};export{_ as default};
