import{e as m,f as P,g as u,m as n,h as s}from"./index-D9fj5dMq.js";const C=()=>{const i=m(),{data:c,isLoading:d,isFetching:f}=P({queryKey:[s.PROJECT],queryFn:async()=>(await n.get(`${s.PROJECT}?view=Grid%20view`)).data,refetchOnWindowFocus:!1}),p=(c==null?void 0:c.records)||[],{mutateAsync:y}=u({mutationFn:async t=>(await n.post(s.PROJECT,t)).data,onSuccess:t=>{const o=t.records;i.setQueryData([s.PROJECT],e=>({records:[...o,...e.records],offset:e.offset}))}}),{mutateAsync:l}=u({mutationFn:async t=>(await n.put(s.PROJECT,t)).data,onSuccess:async(t,o)=>{const e=o.records.map(r=>r);i.setQueryData([s.PROJECT],r=>({records:r.records.map(a=>a.id===e[0].id?{...a,fields:{...a.fields,projectName:e[0].fields.projectName,avatar:e[0].fields.avatar,budget:e[0].fields.budget,status:e[0].fields.status,completion:e[0].fields.completion,description:e[0].fields.description}}:a)}))}});return{projectData:p,isLoading:d,isFetching:f,createProject:y,updateProject:l}};export{C as u};
