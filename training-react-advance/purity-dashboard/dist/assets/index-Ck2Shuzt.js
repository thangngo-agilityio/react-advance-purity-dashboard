import{e as te,f as se,g as H,m as O,h as j,r as a,D as ae,i as b,k as N,l as re,n as k,S as C,j as s,o as oe,p as ne,q as R,s as le,t as D,v as z,w as G,T as $,x as q,C as ie,I as ce,V as Q,y as de,R as ue,M as V,z as me,G as pe}from"./index-CMKr5US7.js";import{u as fe}from"./useProject-XnVKF5qC.js";import{u as he}from"./chunk-6RSEZNRH-Gcg4p0UZ.js";const xe=(t,l,n,d,i,m)=>[{title:"AUTHOR",key:"author",renderHead:t,renderBody:l},{title:"FUNCTION",key:"function",renderHead:t,renderBody:n},{title:"STATUS",key:"status",renderHead:t,renderBody:d},{title:"EMPLOYED",key:"employed",renderHead:t,renderBody:i},{title:"",key:"action",renderBody:m,renderHead:t}],ye=(t,l,n,d,i,m)=>[{title:"COMPANIES",key:"companies",renderHead:t,renderBody:l},{title:"BUDGET",key:"budget",renderHead:t,renderBody:n},{title:"STATUS",key:"status",renderHead:t,renderBody:d},{title:"COMPLETION",key:"completion",renderHead:t,renderBody:i},{title:"",key:"action",renderBody:m,renderHead:t}];var W=(t=>(t.ONLINE="Online",t.OFFLINE="Offline",t))(W||{});const Ae=t=>{const l=te(),{name:n}=Object.assign({name:""},t),d={params:n},{data:i,isLoading:m,isFetching:h}=se({queryKey:[j.AUTHOR,n],queryFn:async()=>(await O.get(`${j.AUTHOR}?view=Grid%20view`,d)).data,refetchOnWindowFocus:!1}),x=(i==null?void 0:i.records)||[],{mutateAsync:f}=H({mutationFn:async c=>(await O.post(j.AUTHOR,c)).data,onSuccess:c=>{const p=c.records;l.setQueryData([j.AUTHOR],r=>({records:[...p,...(r==null?void 0:r.records)||[]]}))}}),{mutateAsync:u}=H({mutationFn:async c=>(await O.put(j.AUTHOR,c)).data,onSuccess:async(c,p)=>{const r=p.records;l.setQueryData([j.AUTHOR,n],A=>{var T;return{records:(T=A==null?void 0:A.records)==null?void 0:T.map(y=>y.id===r[0].id?{...y,fields:{...y.fields,name:r[0].fields.name,email:r[0].fields.email,avatar:r[0].fields.avatar,role:r[0].fields.role,job:r[0].fields.job,employed:r[0].fields.employed}}:y)}})}});return{authorData:x,isLoading:m,isFetching:h,createAuthor:f,updateAuthor:u}},Te=(t,l)=>{const n=a.useRef(null);return a.useCallback((...d)=>{n.current&&clearTimeout(n.current),n.current=setTimeout(()=>{t(...d)},ae)},l)},je=(t=[])=>t.map(l=>{const{id:n,fields:d,createdTime:i}=l||{},{_id:m,name:h,email:x,avatar:f,role:u,job:c,status:p,employed:r}=d||{};return{id:n,createdTime:i,fields:{_id:m,name:h,email:x,avatar:f||"/imgs/avatar-default.svg",role:u,job:c,status:p,employed:b(r).format(N)},name:h,email:x,avatar:f||"/imgs/avatar-default.svg",role:u,job:c,authorStatus:p||W.OFFLINE,employed:b(r).format(N)}}),Ce=(t=[])=>t.map(l=>{const{id:n,fields:d,createdTime:i}=l||{},{_id:m,projectName:h,avatar:x,budget:f,status:u,completion:c,description:p,image:r}=d||{};return{id:n,createdTime:i,fields:{_id:m,projectName:h,avatar:x,budget:f,status:u,projectStatus:u,completion:c,description:p,image:r},projectName:h,avatar:x,budget:`$${re(f)}`,status:u,projectStatus:u,completion:c,description:p,image:r}}),ge=()=>{const[t,l]=a.useState(""),[n,d]=a.useState(!1),i=he(),{authorData:m,isLoading:h,isFetching:x,createAuthor:f,updateAuthor:u}=Ae({name:t}),{projectData:c,isLoading:p,isFetching:r,updateProject:A}=fe(),T=()=>{d(e=>!e)},y=a.useCallback(async e=>{try{const o={records:[{fields:{name:e.fields.name,email:e.fields.email,avatar:e.fields.avatar,role:e.fields.role,job:e.fields.job,employed:b(e.fields.employed).format(k)}}]};await f(o),i({title:C.TITLE_MESSAGE_CREATE("Author"),description:C.AUTHOR_SUCCESS,status:"success",duration:2e3,isClosable:!0})}catch(o){throw o}},[f]),S=a.useCallback(async e=>{try{const o={records:[{id:e.id,fields:{name:e.fields.name,email:e.fields.email,avatar:e.fields.avatar,role:e.fields.role,job:e.fields.job,employed:b(e.fields.employed).format(k)}}]};await u(o),i({title:C.TITLE_MESSAGE_UPDATE("Author"),description:C.AUTHOR_UPDATE,status:"success",duration:2e3,isClosable:!0})}catch(o){throw o}},[u]),J=a.useCallback(async e=>{try{const o={records:[{id:e.id,fields:{projectName:e.fields.projectName,avatar:e.fields.avatar,budget:e.fields.budget,status:e.fields.status,completion:e.fields.completion,description:e.fields.description,image:e.fields.image}}]};await A(o),i({title:C.TITLE_MESSAGE_UPDATE("Project"),description:C.PROJECT_UPDATE,status:"success",duration:2e3,isClosable:!0})}catch(o){throw o}},[A]),K=a.useCallback(e=>{e.id?S(e):y(e)},[y,S]),Y=Te(e=>{l(e)},[l]),E=a.useCallback((e,o)=>e?s.jsx(oe,{title:e},o):s.jsx(ne,{w:50,maxW:50}),[]),U=a.useCallback(({id:e,name:o,avatar:g,email:ee})=>s.jsx(R,{id:e,name:o,image:g,email:ee},e),[]),M=a.useCallback(({role:e,job:o})=>s.jsx(le,{role:e,job:o}),[]),P=a.useCallback(({authorStatus:e})=>s.jsx(D,{isAuthor:!0,variant:z[`${e}`],text:e}),[]),v=a.useCallback(({projectStatus:e})=>s.jsx(D,{variant:z[`${e}`],text:e}),[]),w=a.useCallback(({employed:e})=>s.jsx(G,{py:"5px",pr:"5px",pl:0,fontSize:"md",textAlign:"left",w:{base:"100px",md:"220px"},children:s.jsx($,{fontSize:"md",whiteSpace:"break-spaces",noOfLines:1,w:{base:"100px","3xl":"150px","5xl":"200px"},flex:1,color:"text.200",fontWeight:"bold",children:b(e).format(k)})}),[]),_=a.useCallback(e=>s.jsx(q,{isAuthor:!0,data:e,onUpdateAuthor:S}),[S]),F=a.useCallback(e=>s.jsx(q,{dataProject:e,isOpenOption:!0,onUpdateProject:J}),[]),L=a.useCallback(({id:e,avatar:o,projectName:g})=>s.jsx(R,{id:e,name:g,image:o},e),[]),I=a.useCallback(({budget:e})=>s.jsx(G,{py:"5px",pr:"5px",pl:0,fontSize:"md",textAlign:"left",w:{base:"200px",xl:"220px","3xl":"250px","6xl":"350px"},children:s.jsx($,{flex:1,w:{base:"100px","3xl":"150px","5xl":"200px"},noOfLines:1,color:"text.primary",fontWeight:"bold",fontSize:"md",whiteSpace:"break-spaces",children:e})}),[]),B=a.useCallback(({completion:e})=>s.jsx(ie,{completion:e}),[]),X=a.useMemo(()=>xe(E,U,M,P,w,_),[E,U,M,P,w,_]),Z=a.useMemo(()=>ye(E,L,I,v,B,F),[E,L,I,v,B,F]);return s.jsx(ce,{isOpen:h&&p,children:s.jsxs(Q,{alignItems:"flex-start",children:[s.jsx(de,{name:"Tables",path:ue.TABLES,onSearch:Y,searchValue:t}),s.jsxs(Q,{gap:"24px",w:"100%",children:[s.jsx(V,{isAuthor:!0,title:"Authors Table",columns:X,dataSource:je(m),onClickAdd:T,isFetching:x}),s.jsx(V,{title:"Projects",columns:Z,dataSource:Ce(c),isFetching:r})]}),n&&s.jsx(me,{isOpen:n,onClose:T,title:"Add Author",haveCloseButton:!0,body:s.jsx(pe,{onCloseModal:T,onSubmit:K})})]})})};export{ge as default};
