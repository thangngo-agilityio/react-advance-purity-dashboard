import{v as ne,Z as le,U as ie,j as t,t as ce,i as de,_ as xe,r as n,$ as pe,a0 as w,a1 as v,a2 as ue,a3 as me,a4 as S,F as J,V as O,H as K,T as C,a5 as fe,B as he,a6 as je,a7 as Y,S as y,a8 as $,a9 as D,aa as be,R as ge,ab as G,ac as ye,ad as Ae}from"./index-DlbICa1t.js";import{A as Se,u as Ce}from"./useProject-CI94uc7s.js";import{I as Te}from"./index-DuYJdcc0.js";import{u as we,a as Q,m as P,A}from"./mainHttpService-CkpYfCQA.js";import{u as ve}from"./chunk-6RSEZNRH-BmA5Dnad.js";var Z=ne(function(a,r){const o=le("Badge",a),{className:c,...l}=ie(a);return t.jsx(ce.span,{ref:r,className:de("chakra-badge",a.className),...l,__css:{display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle",...o}})});Z.displayName="Badge";const Oe=(s,a,r,o,c,l)=>[{title:"AUTHOR",key:"author",renderHead:s,renderBody:a},{title:"FUNCTION",key:"function",renderHead:s,renderBody:r},{title:"STATUS",key:"status",renderHead:s,renderBody:o},{title:"EMPLOYED",key:"employed",renderHead:s,renderBody:c},{title:"",key:"action",renderBody:l,renderHead:s}],Ee=(s,a,r,o,c,l)=>[{title:"COMPANIES",key:"companies",renderHead:s,renderBody:a},{title:"BUDGET",key:"budget",renderHead:s,renderBody:r},{title:"STATUS",key:"status",renderHead:s,renderBody:o},{title:"COMPLETION",key:"completion",renderHead:s,renderBody:c},{title:"",key:"action",renderBody:l,renderHead:s}];var X=(s=>(s.ONLINE="Online",s.OFFLINE="Offline",s))(X||{});const ke=s=>{const a=xe(),{name:r}=Object.assign({name:""},s),o={params:r},{data:c,isLoading:l,isFetching:u}=we({queryKey:[A.AUTHOR,r],queryFn:async()=>(await P.get(`${A.AUTHOR}?view=Grid%20view`,o,"")).data,refetchOnWindowFocus:!1}),f=(c==null?void 0:c.records)||[],h=n.useMemo(()=>{const d=x=>(x||"").trim().toLowerCase().includes(r);return f.filter(({fields:{name:x}})=>d(`${x}`))},[f,r]),{mutateAsync:m}=Q({mutationFn:async d=>(await P.post(A.AUTHOR,d)).data,onSuccess:d=>{const x=d.records;a.setQueryData([A.AUTHOR,r],p=>({records:[...x,...(p==null?void 0:p.records)||[]]}))}}),{mutateAsync:j}=Q({mutationFn:async d=>(await P.put(A.AUTHOR,d)).data,onSuccess:async(d,x)=>{const p=x.records;a.setQueryData([A.AUTHOR,r],g=>{var T;return{records:(T=g==null?void 0:g.records)==null?void 0:T.map(b=>b.id===p[0].id?{...b,fields:{...b.fields,name:p[0].fields.name,email:p[0].fields.email,avatar:p[0].fields.avatar,role:p[0].fields.role,job:p[0].fields.job,employed:p[0].fields.employed}}:b)}})}});return{authorData:f,authors:h,isLoading:l,isFetching:u,createAuthor:m,updateAuthor:j}},Pe=(s,a)=>{const r=n.useRef(null);return n.useCallback((...o)=>{r.current&&clearTimeout(r.current),r.current=setTimeout(()=>{s(...o)},pe)},a)},Ue=(s=[])=>s.map(a=>{const{id:r,fields:o,createdTime:c}=a||{},{_id:l,name:u,email:f,avatar:h,role:m,job:j,status:d,employed:x}=o||{};return{id:r,createdTime:c,fields:{_id:l,name:u,email:f,avatar:h||"/imgs/avatar-default.svg",role:m,job:j,status:d,employed:w(x).format(v)},name:u,email:f,avatar:h||"/imgs/avatar-default.svg",role:m,job:j,authorStatus:d||X.OFFLINE,employed:w(x).format(v)}}),Me=(s=[])=>s.map(a=>{const{id:r,fields:o,createdTime:c}=a||{},{_id:l,projectName:u,avatar:f,budget:h,status:m,completion:j,description:d,image:x}=o||{};return{id:r,createdTime:c,fields:{_id:l,projectName:u,avatar:f||"/imgs/avatar-default.svg",budget:h,status:m,projectStatus:m,completion:j,description:d,image:x||"imgs/image-project-default.jpg"},projectName:u,avatar:f||"/imgs/avatar-default.svg",budget:`$${ue(h)}`,status:m,projectStatus:m,completion:j,description:d,image:x||"imgs/image-project-default.jpg"}}),Ne=s=>{const a={};return Object.entries(s).forEach(([r,o])=>{["",null,void 0].includes(o)||(a[r]=`${o}`)}),a},Le=s=>{const[a,r]=me(s||{}),o=n.useMemo(()=>{let l={};return Object.keys(s).forEach(u=>{l={...l,[u]:a.get(u)||""}}),l},[s,a]),c=n.useCallback((l,u)=>r(Ne({...o,[l]:u})),[o,r]);return{searchParam:o,defaultQuery:a,setSearchParam:c}},q=({image:s,name:a,email:r})=>t.jsx(S,{px:0,w:{base:"200px",xl:"220px","3xl":"450px","6xl":"450px"},children:t.jsxs(J,{alignItems:"center",pr:"20px",children:[t.jsx(Se,{src:`${s}`,alt:`${a}`}),t.jsxs(O,{ml:"15px",alignItems:"flex-start",gap:0,children:[t.jsx(K,{size:"md",textOverflow:"ellipsis",overflow:"hidden",w:{base:"200px",xl:"220px","3xl":"450px","6xl":"450px"},children:a}),t.jsx(C,{w:{base:"200px",xl:"220px","3xl":"450px","6xl":"450px"},variant:"tertiary",textOverflow:"ellipsis",overflow:"hidden",children:r})]})]})}),Be=({completion:s})=>t.jsx(S,{px:0,w:{base:"200px",xl:"220px","3xl":"250px","6xl":"350px"},children:t.jsxs(O,{alignItems:"flex-start",children:[t.jsxs(C,{color:"#38A169",fontWeight:"bold",children:[s,"%"]}),t.jsx(fe,{w:"125px",borderRadius:"md",value:s,size:"xs",colorScheme:"green"})]})}),Ie=({job:s,role:a})=>t.jsx(S,{px:0,w:{base:"200px",xl:"220px","3xl":"250px","6xl":"350px"},children:t.jsxs(O,{gap:0,alignItems:"flex-start",pr:"20px",children:[t.jsx(K,{size:"md",textOverflow:"ellipsis",overflow:"hidden",w:{base:"200px",xl:"220px","3xl":"250px","6xl":"350px"},children:a}),t.jsx(C,{variant:"tertiary",textOverflow:"ellipsis",overflow:"hidden",w:{base:"200px",xl:"220px","3xl":"250px","6xl":"350px"},children:s})]})}),_e=({text:s="",isAuthor:a,...r})=>t.jsx(S,{py:"5px",px:0,fontSize:"md",w:{base:"200px",xl:"220px","3xl":"250px","6xl":"350px"},children:t.jsx(he,{w:{base:"200px",xl:"220px","3xl":"250px","6xl":"350px"},children:t.jsx(je,{minW:"max-content",placement:"bottom",label:s,children:t.jsx(Z,{...r,maxW:a?"65px":"100px",whiteSpace:"break-spaces",noOfLines:1,textAlign:a?"center":"left",fontSize:"md",fontWeight:"bold",textTransform:"unset",children:s})})})}),V=_e,Fe=({title:s})=>t.jsx(Y,{py:"12px",px:0,sx:{minW:{base:170,md:"unset"}},children:t.jsx(J,{alignItems:"center",gap:2,children:t.jsx(C,{textTransform:"none",fontSize:"xs",fontWeight:"bold",whiteSpace:"break-spaces",maxW:"200px",noOfLines:1,title:s,children:s})})},s),He=Fe,Ge=()=>{var R,z;const[s,a]=n.useState(!1),r=ve(),{searchParam:o,setSearchParam:c}=Le({name:""}),{authors:l,isLoading:u,isFetching:f,createAuthor:h,updateAuthor:m}=ke({name:(R=o==null?void 0:o.name)==null?void 0:R.toLowerCase()}),{projectData:j,isLoading:d,isFetching:x,updateProject:p}=Ce(),g=()=>{a(e=>!e)},T=n.useCallback(async e=>{try{const i={records:[{fields:{name:e.fields.name,email:e.fields.email,avatar:e.fields.avatar,role:e.fields.role,job:e.fields.job,employed:w(e.fields.employed).format(v)}}]};await h(i),r({title:y.TITLE_MESSAGE_CREATE("Author"),description:y.AUTHOR_SUCCESS,status:"success",duration:2e3,isClosable:!0})}catch(i){throw i}},[h]),b=n.useCallback(async e=>{try{const i={records:[{id:e.id,fields:{name:e.fields.name,email:e.fields.email,avatar:e.fields.avatar,role:e.fields.role,job:e.fields.job,employed:w(e.fields.employed).format(v)}}]};await m(i),r({title:y.TITLE_MESSAGE_UPDATE("Author"),description:y.AUTHOR_UPDATE,status:"success",duration:2e3,isClosable:!0})}catch(i){throw i}},[m]),ee=n.useCallback(async e=>{try{const i={records:[{id:e.id,fields:{projectName:e.fields.projectName,avatar:e.fields.avatar,budget:Number(e.fields.budget),status:e.fields.status,completion:Number(e.fields.completion),description:e.fields.description,image:e.fields.image}}]};await p(i),r({title:y.TITLE_MESSAGE_UPDATE("Project"),description:y.PROJECT_UPDATE,status:"success",duration:2e3,isClosable:!0})}catch(i){throw i}},[p]),se=n.useCallback(e=>{e.id?b(e):T(e)},[T,b]),te=Pe(e=>{c("name",e)},[]),E=n.useCallback((e,i)=>e?t.jsx(He,{title:e},i):t.jsx(Y,{w:50,maxW:50}),[]),U=n.useCallback(({id:e,name:i,avatar:k,email:oe})=>t.jsx(q,{id:e,name:i,image:k,email:oe},e),[]),M=n.useCallback(({role:e,job:i})=>t.jsx(Ie,{role:e,job:i}),[]),N=n.useCallback(({authorStatus:e})=>t.jsx(V,{isAuthor:!0,variant:$[`${e}`],text:e}),[]),L=n.useCallback(({projectStatus:e})=>t.jsx(V,{variant:$[`${e}`],text:e}),[]),B=n.useCallback(({employed:e})=>t.jsx(S,{py:"5px",pr:"5px",pl:0,fontSize:"md",textAlign:"left",w:{base:"100px",md:"220px"},children:t.jsx(C,{fontSize:"md",whiteSpace:"break-spaces",noOfLines:1,w:{base:"100px","3xl":"150px","5xl":"200px"},flex:1,color:"text.200",fontWeight:"bold",children:w(e).format(v)})}),[]),I=n.useCallback(e=>t.jsx(D,{isAuthor:!0,data:e,onUpdateAuthor:b}),[b]),_=n.useCallback(e=>t.jsx(D,{dataProject:e,isOpenOption:!0,onUpdateProject:ee}),[]),F=n.useCallback(({id:e,avatar:i,projectName:k})=>t.jsx(q,{id:e,name:k,image:i},e),[]),H=n.useCallback(({budget:e})=>t.jsx(S,{py:"5px",pr:"5px",pl:0,fontSize:"md",textAlign:"left",w:{base:"200px",xl:"220px","3xl":"250px","6xl":"350px"},children:t.jsx(C,{flex:1,w:{base:"200px",xl:"220px","3xl":"250px","6xl":"350px"},noOfLines:1,color:"text.primary",fontWeight:"bold",fontSize:"md",whiteSpace:"break-spaces",children:e})}),[]),W=n.useCallback(({completion:e})=>t.jsx(Be,{completion:e}),[]),ae=n.useMemo(()=>Oe(E,U,M,N,B,I),[E,U,M,N,B,I]),re=n.useMemo(()=>Ee(E,F,H,L,W,_),[E,F,H,L,W,_]);return t.jsx(Te,{isOpen:u&&d,children:t.jsxs(O,{alignItems:"flex-start",children:[t.jsx(be,{name:"Tables",path:ge.TABLES,onSearch:te,searchValue:(z=o==null?void 0:o.name)==null?void 0:z.toLowerCase()}),t.jsxs(O,{gap:"24px",w:"100%",children:[t.jsx(G,{isAuthor:!0,title:"Authors Table",columns:ae,dataSource:Ue(l),onClickAdd:g,isFetching:f}),t.jsx(G,{title:"Projects",columns:re,dataSource:Me(j),isFetching:x})]}),s&&t.jsx(ye,{isOpen:s,onClose:g,title:"Add Author",haveCloseButton:!0,body:t.jsx(Ae,{onCloseModal:g,onSubmit:se})})]})})};export{Ge as default};