import{e as m,f as w,g as u,m as i,h as t}from"./index-BUcMkkJH.js";const O=()=>{const o=m(),{data:r,isLoading:d,isFetching:p}=w({queryKey:[t.PROJECT],queryFn:async()=>(await i.get(`${t.PROJECT}?view=Grid%20view`)).data,refetchOnWindowFocus:!1}),y=(r==null?void 0:r.records)||[],{mutateAsync:f}=u({mutationFn:async s=>(await i.post(t.PROJECT,s)).data,onSuccess:s=>{const n=s.records;o.setQueryData([t.PROJECT],e=>({records:[n,...(e==null?void 0:e.records)||[]]}))}}),{mutateAsync:P}=u({mutationFn:async s=>(await i.put(t.PROJECT,s)).data,onSuccess:async(s,n)=>{const e=n.records;o.setQueryData([t.PROJECT],a=>({records:a==null?void 0:a.records.map(c=>c.id===e[0].id?{...c,fields:{...c.fields,projectName:e[0].fields.projectName,avatar:e[0].fields.avatar,budget:e[0].fields.budget,status:e[0].fields.status,completion:e[0].fields.completion,description:e[0].fields.description}}:c)}))}});return{projectData:y,isLoading:d,isFetching:p,createProject:f,updateProject:P}};export{O as u};