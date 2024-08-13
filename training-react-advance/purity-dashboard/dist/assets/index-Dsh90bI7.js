import{a as X,r,j as s,S as H,R as Z}from"./index-wWx4XwpN.js";import{d as j}from"./dayjs.min-Cu52KV-G.js";import{u as ee,e as D,m as S,f as y,S as h,T as I,V as B}from"./mainHttpService-B_G59amq.js";import{D as N,f as te,T as E,H as se,a as ae,A as R,F as oe,b as z,c as G,d as $,C as re,I as le,e as ne,M as Q,g as ie,h as ce}from"./index-BNESABkJ.js";import{u as de}from"./useProject-BSFAaNW4.js";import{u as ue}from"./chunk-6RSEZNRH-D2wvNWox.js";import"./auth-BaupH3zB.js";const me=(t,n,i,d,u,m)=>[{title:"AUTHOR",key:"author",renderHead:t,renderBody:n},{title:"FUNCTION",key:"function",renderHead:t,renderBody:i},{title:"STATUS",key:"status",renderHead:t,renderBody:d},{title:"EMPLOYED",key:"employed",renderHead:t,renderBody:u},{title:"",key:"action",renderBody:m,renderHead:t}],pe=(t,n,i,d,u,m)=>[{title:"COMPANIES",key:"companies",renderHead:t,renderBody:n},{title:"BUDGET",key:"budget",renderHead:t,renderBody:i},{title:"STATUS",key:"status",renderHead:t,renderBody:d},{title:"COMPLETION",key:"completion",renderHead:t,renderBody:u},{title:"",key:"action",renderBody:m,renderHead:t}];var W=(t=>(t.ONLINE="Online",t.OFFLINE="Offline",t))(W||{});const fe=()=>{const t=X(),{data:n,isLoading:i,isFetching:d}=ee({queryKey:[y.AUTHOR],queryFn:async()=>(await S.get(`${y.AUTHOR}?view=Grid%20view`)).data,refetchOnWindowFocus:!1}),u=(n==null?void 0:n.records)||[],{mutateAsync:m}=D({mutationFn:async l=>(await S.post(y.AUTHOR,l)).data,onSuccess:l=>{const p=l.records;t.setQueryData([y.AUTHOR],a=>({records:[...p,...a.records]}))}}),{mutateAsync:x}=D({mutationFn:async l=>(await S.put(y.AUTHOR,l)).data,onSuccess:async(l,p)=>{const a=p.records.map(f=>f);t.setQueryData([y.AUTHOR],f=>({records:f.records.map(c=>c.id===a[0].id?{...c,fields:{...c.fields,name:a[0].fields.name,email:a[0].fields.email,avatar:a[0].fields.avatar,role:a[0].fields.role,job:a[0].fields.job,employed:a[0].fields.employed}}:c)}))}});return{authorData:u,isLoading:i,isFetching:d,createAuthor:m,updateAuthor:x}},xe=(t=[])=>t.map(n=>{const{id:i,fields:d,createdTime:u}=n||{},{_id:m,name:x,email:l,avatar:p,role:a,job:f,status:c,employed:A}=d||{};return{id:i,createdTime:u,fields:{_id:m,name:x,email:l,avatar:p||"/imgs/avatar-default.svg",role:a,job:f,status:c,employed:j(A).format(N)},name:x,email:l,avatar:p||"/imgs/avatar-default.svg",role:a,job:f,authorStatus:c||W.OFFLINE,employed:j(A).format(N)}}),Ae=(t=[])=>t.map(n=>{const{id:i,fields:d,createdTime:u}=n||{},{_id:m,projectName:x,avatar:l,budget:p,status:a,completion:f,description:c,image:A}=d||{};return{id:i,createdTime:u,fields:{_id:m,projectName:x,avatar:l,budget:p,status:a,projectStatus:a,completion:f,description:c,image:A},projectName:x,avatar:l,budget:`$${te(p)}`,status:a,projectStatus:a,completion:f,description:c,image:A}}),Ee=()=>{const[t,n]=r.useState(!1),i=ue(),{authorData:d,isLoading:u,isFetching:m,createAuthor:x,updateAuthor:l}=fe(),{projectData:p,isLoading:a,isFetching:f,updateProject:c}=de(),A=()=>{n(e=>!e)},O=r.useCallback(async e=>{try{const o={records:[{fields:{name:e.fields.name,email:e.fields.email,avatar:e.fields.avatar,role:e.fields.role,job:e.fields.job,employed:j(e.fields.employed).format(E)}}]};await x(o),i({title:h.TITLE_MESSAGE_CREATE("Author"),description:h.AUTHOR_SUCCESS,status:"success",duration:2e3,isClosable:!0})}catch(o){throw o}},[x]),T=r.useCallback(async e=>{try{const o={records:[{id:e.id,fields:{name:e.fields.name,email:e.fields.email,avatar:e.fields.avatar,role:e.fields.role,job:e.fields.job,employed:j(e.fields.employed).format(E)}}]};await l(o),i({title:h.TITLE_MESSAGE_UPDATE("Author"),description:h.AUTHOR_UPDATE,status:"success",duration:2e3,isClosable:!0})}catch(o){throw o}},[l]),q=r.useCallback(async e=>{try{const o={records:[{id:e.id,fields:{projectName:e.fields.projectName,avatar:e.fields.avatar,budget:e.fields.budget,status:e.fields.status,completion:e.fields.completion,description:e.fields.description}}]};await c(o),i({title:h.TITLE_MESSAGE_UPDATE("Project"),description:h.PROJECT_UPDATE,status:"success",duration:2e3,isClosable:!0})}catch(o){throw o}},[c]),J=r.useCallback(e=>{e.id?T(e):O(e)},[O,T]),C=r.useCallback((e,o)=>e?s.jsx(se,{title:e},o):s.jsx(ae,{w:50,maxW:50}),[]),g=r.useCallback(({id:e,name:o,avatar:b,email:Y})=>s.jsx(R,{id:e,name:o,image:b,email:Y},e),[]),k=r.useCallback(({role:e,job:o})=>s.jsx(oe,{role:e,job:o}),[]),U=r.useCallback(({authorStatus:e})=>s.jsx(z,{isAuthor:!0,variant:H[`${e}`],text:e}),[]),P=r.useCallback(({projectStatus:e})=>s.jsx(z,{variant:H[`${e}`],text:e}),[]),M=r.useCallback(({employed:e})=>s.jsx(G,{py:"5px",pr:"5px",pl:0,fontSize:"md",textAlign:"left",w:{base:"100px",md:"220px"},children:s.jsx(I,{fontSize:"md",whiteSpace:"break-spaces",noOfLines:1,w:{base:"100px","3xl":"150px","5xl":"200px"},flex:1,color:"text.200",fontWeight:"bold",children:j(e).format(E)})}),[]),v=r.useCallback(e=>s.jsx($,{isAuthor:!0,data:e,onUpdateAuthor:T}),[T]),w=r.useCallback(e=>s.jsx($,{dataProject:e,isOpenOption:!0,onUpdateProject:q}),[]),F=r.useCallback(({id:e,avatar:o,projectName:b})=>s.jsx(R,{id:e,name:b,image:o},e),[]),L=r.useCallback(({budget:e})=>s.jsx(G,{py:"5px",pr:"5px",pl:0,fontSize:"md",textAlign:"left",w:{base:"200px",xl:"220px","3xl":"250px","6xl":"350px"},children:s.jsx(I,{flex:1,w:{base:"100px","3xl":"150px","5xl":"200px"},noOfLines:1,color:"text.primary",fontWeight:"bold",fontSize:"md",whiteSpace:"break-spaces",children:e})}),[]),_=r.useCallback(({completion:e})=>s.jsx(re,{completion:e}),[]),V=r.useMemo(()=>me(C,g,k,U,M,v),[C,g,k,U,M,v]),K=r.useMemo(()=>pe(C,F,L,P,_,w),[C,F,L,P,_,w]);return s.jsx(le,{isOpen:u&&a,children:s.jsxs(B,{alignItems:"flex-start",children:[s.jsx(ne,{name:"Tables",path:Z.TABLES}),s.jsxs(B,{gap:"24px",w:"100%",children:[s.jsx(Q,{isAuthor:!0,title:"Authors Table",columns:V,dataSource:xe(d),onClickAdd:A,isFetching:m}),s.jsx(Q,{title:"Projects",columns:K,dataSource:Ae(p),isFetching:f})]}),t&&s.jsx(ie,{isOpen:t,onClose:A,title:"Add Author",haveCloseButton:!0,body:s.jsx(ce,{onCloseModal:A,onSubmit:J})})]})})};export{Ee as default};
