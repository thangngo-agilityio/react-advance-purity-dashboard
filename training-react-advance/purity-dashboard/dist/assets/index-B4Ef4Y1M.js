import{e as ee,f as te,g as H,m as k,h as C,r as a,D as se,i as g,k as T,l as ae,S as b,j as s,n as re,o as oe,p as I,q as ne,s as R,t as D,v as z,T as G,w as $,C as le,I as ie,V as q,x as ce,R as de,M as Q,y as ue,z as me}from"./index-6Eh7msSk.js";import{u as pe}from"./useProject-CfzxI83z.js";import{u as fe}from"./chunk-6RSEZNRH-BULwgrKf.js";const xe=(t,l,r,d,i,m)=>[{title:"AUTHOR",key:"author",renderHead:t,renderBody:l},{title:"FUNCTION",key:"function",renderHead:t,renderBody:r},{title:"STATUS",key:"status",renderHead:t,renderBody:d},{title:"EMPLOYED",key:"employed",renderHead:t,renderBody:i},{title:"",key:"action",renderBody:m,renderHead:t}],he=(t,l,r,d,i,m)=>[{title:"COMPANIES",key:"companies",renderHead:t,renderBody:l},{title:"BUDGET",key:"budget",renderHead:t,renderBody:r},{title:"STATUS",key:"status",renderHead:t,renderBody:d},{title:"COMPLETION",key:"completion",renderHead:t,renderBody:i},{title:"",key:"action",renderBody:m,renderHead:t}];var V=(t=>(t.ONLINE="Online",t.OFFLINE="Offline",t))(V||{});const ye=t=>{const l=ee(),{name:r}=Object.assign({name:""},t),d={params:r},{data:i,isLoading:m,isFetching:x}=te({queryKey:[C.AUTHOR,r],queryFn:async()=>(await k.get(`${C.AUTHOR}?view=Grid%20view`,d)).data,refetchOnWindowFocus:!1}),h=(i==null?void 0:i.records)||[],{mutateAsync:f}=H({mutationFn:async c=>(await k.post(C.AUTHOR,c)).data,onSuccess:c=>{const p=c.records;l.setQueryData([C.AUTHOR,r],o=>({records:[...p,...(o==null?void 0:o.records)||[]]}))}}),{mutateAsync:u}=H({mutationFn:async c=>(await k.put(C.AUTHOR,c)).data,onSuccess:async(c,p)=>{const o=p.records;l.setQueryData([C.AUTHOR,r],A=>{var j;return{records:(j=A==null?void 0:A.records)==null?void 0:j.map(y=>y.id===o[0].id?{...y,fields:{...y.fields,name:o[0].fields.name,email:o[0].fields.email,avatar:o[0].fields.avatar,role:o[0].fields.role,job:o[0].fields.job,employed:o[0].fields.employed}}:y)}})}});return{authorData:h,isLoading:m,isFetching:x,createAuthor:f,updateAuthor:u}},Ae=(t,l)=>{const r=a.useRef(null);return a.useCallback((...d)=>{r.current&&clearTimeout(r.current),r.current=setTimeout(()=>{t(...d)},se)},l)},je=(t=[])=>t.map(l=>{const{id:r,fields:d,createdTime:i}=l||{},{_id:m,name:x,email:h,avatar:f,role:u,job:c,status:p,employed:o}=d||{};return{id:r,createdTime:i,fields:{_id:m,name:x,email:h,avatar:f||"/imgs/avatar-default.svg",role:u,job:c,status:p,employed:g(o).format(T)},name:x,email:h,avatar:f||"/imgs/avatar-default.svg",role:u,job:c,authorStatus:p||V.OFFLINE,employed:g(o).format(T)}}),Ce=(t=[])=>t.map(l=>{const{id:r,fields:d,createdTime:i}=l||{},{_id:m,projectName:x,avatar:h,budget:f,status:u,completion:c,description:p,image:o}=d||{};return{id:r,createdTime:i,fields:{_id:m,projectName:x,avatar:h||"/imgs/avatar-default.svg",budget:f,status:u,projectStatus:u,completion:c,description:p,image:o||"imgs/image-project-default.jpg"},projectName:x,avatar:h||"/imgs/avatar-default.svg",budget:`$${ae(f)}`,status:u,projectStatus:u,completion:c,description:p,image:o||"imgs/image-project-default.jpg"}}),Se=()=>{const[t,l]=a.useState(""),[r,d]=a.useState(!1),i=fe(),{authorData:m,isLoading:x,isFetching:h,createAuthor:f,updateAuthor:u}=ye({name:t}),{projectData:c,isLoading:p,isFetching:o,updateProject:A}=pe(),j=()=>{d(e=>!e)},y=a.useCallback(async e=>{try{const n={records:[{fields:{name:e.fields.name,email:e.fields.email,avatar:e.fields.avatar,role:e.fields.role,job:e.fields.job,employed:g(e.fields.employed).format(T)}}]};await f(n),i({title:b.TITLE_MESSAGE_CREATE("Author"),description:b.AUTHOR_SUCCESS,status:"success",duration:2e3,isClosable:!0})}catch(n){throw n}},[f]),S=a.useCallback(async e=>{try{const n={records:[{id:e.id,fields:{name:e.fields.name,email:e.fields.email,avatar:e.fields.avatar,role:e.fields.role,job:e.fields.job,employed:g(e.fields.employed).format(T)}}]};await u(n),i({title:b.TITLE_MESSAGE_UPDATE("Author"),description:b.AUTHOR_UPDATE,status:"success",duration:2e3,isClosable:!0})}catch(n){throw n}},[u]),W=a.useCallback(async e=>{try{const n={records:[{id:e.id,fields:{projectName:e.fields.projectName,avatar:e.fields.avatar,budget:Number(e.fields.budget),status:e.fields.status,completion:Number(e.fields.completion),description:e.fields.description,image:e.fields.image}}]};await A(n),i({title:b.TITLE_MESSAGE_UPDATE("Project"),description:b.PROJECT_UPDATE,status:"success",duration:2e3,isClosable:!0})}catch(n){throw n}},[A]),J=a.useCallback(e=>{e.id?S(e):y(e)},[y,S]),K=Ae(e=>{l(e)},[l]),E=a.useCallback((e,n)=>e?s.jsx(re,{title:e},n):s.jsx(oe,{w:50,maxW:50}),[]),v=a.useCallback(({id:e,name:n,avatar:O,email:Z})=>s.jsx(I,{id:e,name:n,image:O,email:Z},e),[]),U=a.useCallback(({role:e,job:n})=>s.jsx(ne,{role:e,job:n}),[]),P=a.useCallback(({authorStatus:e})=>s.jsx(R,{isAuthor:!0,variant:D[`${e}`],text:e}),[]),w=a.useCallback(({projectStatus:e})=>s.jsx(R,{variant:D[`${e}`],text:e}),[]),M=a.useCallback(({employed:e})=>s.jsx(z,{py:"5px",pr:"5px",pl:0,fontSize:"md",textAlign:"left",w:{base:"100px",md:"220px"},children:s.jsx(G,{fontSize:"md",whiteSpace:"break-spaces",noOfLines:1,w:{base:"100px","3xl":"150px","5xl":"200px"},flex:1,color:"text.200",fontWeight:"bold",children:g(e).format(T)})}),[]),L=a.useCallback(e=>s.jsx($,{isAuthor:!0,data:e,onUpdateAuthor:S}),[S]),N=a.useCallback(e=>s.jsx($,{dataProject:e,isOpenOption:!0,onUpdateProject:W}),[]),_=a.useCallback(({id:e,avatar:n,projectName:O})=>s.jsx(I,{id:e,name:O,image:n},e),[]),F=a.useCallback(({budget:e})=>s.jsx(z,{py:"5px",pr:"5px",pl:0,fontSize:"md",textAlign:"left",w:{base:"200px",xl:"220px","3xl":"250px","6xl":"350px"},children:s.jsx(G,{flex:1,w:{base:"200px",xl:"220px","3xl":"250px","6xl":"350px"},noOfLines:1,color:"text.primary",fontWeight:"bold",fontSize:"md",whiteSpace:"break-spaces",children:e})}),[]),B=a.useCallback(({completion:e})=>s.jsx(le,{completion:e}),[]),Y=a.useMemo(()=>xe(E,v,U,P,M,L),[E,v,U,P,M,L]),X=a.useMemo(()=>he(E,_,F,w,B,N),[E,_,F,w,B,N]);return s.jsx(ie,{isOpen:x&&p,children:s.jsxs(q,{alignItems:"flex-start",children:[s.jsx(ce,{name:"Tables",path:de.TABLES,onSearch:K,searchValue:t}),s.jsxs(q,{gap:"24px",w:"100%",children:[s.jsx(Q,{isAuthor:!0,title:"Authors Table",columns:Y,dataSource:je(m),onClickAdd:j,isFetching:h}),s.jsx(Q,{title:"Projects",columns:X,dataSource:Ce(c),isFetching:o})]}),r&&s.jsx(ue,{isOpen:r,onClose:j,title:"Add Author",haveCloseButton:!0,body:s.jsx(me,{onCloseModal:j,onSubmit:J})})]})})};export{Se as default};
