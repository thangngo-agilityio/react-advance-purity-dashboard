import{u as h,r as u,R as S,j as e}from"./index-wWx4XwpN.js";import{F as C}from"./index-Cl6TU8z9.js";import{E as p,S as x,V as o,H as E,T as f,A,F as b,B as j}from"./mainHttpService-B_G59amq.js";import{u as R,a as w}from"./useAuth-DX7vqZX6.js";import{a as T}from"./auth-BaupH3zB.js";import{u as U}from"./chunk-6RSEZNRH-D2wvNWox.js";const N=({children:d})=>{const{users:t}=R(),{createAccount:a}=w(),m=T(s=>s.setUser),i=h(),n=U(),c=u.useCallback(async s=>{try{if(t==null?void 0:t.records.some(r=>r.fields.email===s.email))n({title:p.CREATE_ACCOUNT,description:p.ACCOUNT_CREATED,status:"error",duration:2e3,isClosable:!0});else{const r=[{fields:{name:s.name,email:s.email,password:s.password}}];await a({records:r}),n({title:x.TITLE_MESSAGE_CREATE("Account"),description:x.ACCOUNT_SUCCESS,status:"success",duration:2e3,isClosable:!0}),i(S.SIGN_IN)}}catch(l){throw l}},[a,i,m,t]),g=u.useCallback(s=>{c(s)},[c]);return e.jsxs(o,{position:"relative",height:"100%",gap:"0px",children:[d,e.jsxs(o,{w:"988px",h:"100%",pb:"40px",gap:"0",position:"relative",zIndex:2,justifyContent:"space-between",children:[e.jsxs(o,{w:"100%",h:"100%",alignItems:"center",justifyContent:"center",flex:6,children:[e.jsxs(o,{width:"333px",mb:"66px",children:[e.jsx(E,{size:"xl",variant:"secondary",children:"Welcome!"}),e.jsx(f,{textAlign:"center",variant:"secondary",children:"Use these awesome forms to login or create new account in your project for free."})]}),e.jsx(A,{isRegister:!0,onSubmit:g})]}),e.jsx(b,{w:"100%",h:"100%",flex:1,children:e.jsx(C,{})})]}),e.jsx(j,{position:"absolute",zIndex:1,top:"24px",w:"98%",h:{base:100,md:220,xl:320,"2xl":420,"5xl":520},borderRadius:"lg",backgroundImage:"/imgs/background-signup.svg",backgroundRepeat:"no-repeat",backgroundSize:"100%",objectFit:"cover"})]})};export{N as default};
