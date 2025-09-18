"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[0],{0:(e,t,o)=>{o.r(t),o.d(t,{default:()=>n});var s=o(303),a=o(579);function n(){return(0,a.jsx)(s.Ay,{})}},303:(e,t,o)=>{o.d(t,{E2:()=>x,G6:()=>u,Ay:()=>m});var s=o(43),a=o(931),n=o(579);const l=e=>{let{filter:t,setFilter:o,search:s,setSearch:a}=e;return(0,n.jsxs)("div",{children:[(0,n.jsxs)("label",{className:"label",children:["\u0429\u043e \u043e\u0431\u0438\u0440\u0430\u0454\u0448...?",(0,n.jsxs)("select",{className:"select",value:t,onChange:e=>o(e.target.value),children:[(0,n.jsx)("option",{value:"all",children:"\u0423\u0441\u0456 \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f"}),(0,n.jsx)("option",{value:"active",children:"\u0412 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0456"}),(0,n.jsx)("option",{value:"completed",children:"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u0456"})]})]}),(0,n.jsxs)("label",{className:"label",htmlFor:"search-todo",children:["\u041f\u043e\u0448\u0443\u043a\u0430\u0454\u043c...?",(0,n.jsx)("input",{className:"input",id:"search-todo",type:"search",value:s,placeholder:"\u041f\u0456\u0434\u043a\u0430\u0436\u0438 \u0449\u043e \u043c\u0438 \u0448\u0443\u043a\u0430\u0435\u043c\u043e?",onChange:e=>a(e.target.value)})]})]})};var i=o(423),c=o(531),d=o(981);const r=e=>{let{todos:t,onDeleteToDo:o,onToggleCompleted:s}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("ul",{children:t.map((e=>{let{id:t,title:a,description:l,checked:i}=e;return(0,n.jsxs)("li",{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:i?"todo-item completed":"todo-item",children:a}),(0,n.jsx)("p",{className:i?"todo-item completed":"todo-item",children:l})]}),(0,n.jsx)(c.$,{type:"button",onClick:()=>o(t),children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 To Do"}),(0,n.jsx)(c.S,{as:d.N_,to:`/todo-list/${t}`,children:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"}),(0,n.jsx)("label",{htmlFor:`todo-${t}`,children:"\u0412\u0438\u043a\u043e\u043d\u0430\u043d\u043e?"}),(0,n.jsx)("input",{id:`todo-${t}`,type:"checkbox",onChange:()=>s(t),checked:i})]},t)}))})})};var h=o(502),p=o(726);const u=3,x=50,m=()=>{const[e,t]=(0,s.useState)([]),[o,d]=(0,s.useState)(""),[m,g]=(0,s.useState)(""),[j,f]=(0,s.useState)("all"),[y,v]=(0,s.useState)(""),[b,k]=(0,s.useState)(""),[w,C]=(0,s.useState)(!1),[T,N]=(0,s.useState)(!0);(0,s.useEffect)((()=>{C(!0),k("");(async()=>{try{var e;const o=await(0,a.Gg)();t(null!==(e=o.data)&&void 0!==e?e:[]),0===o.data.length&&N(!1)}catch(o){k("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u043e\u0442\u0440\u0438\u043c\u0430\u043d\u043d\u0456 Todo")}finally{C(!1)}})()}),[]);const $=async()=>{const e=o.trim();if(""===e||e.length<u)k(`\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u043d\u0435 \u043c\u0435\u043d\u0448\u0435 ${u} \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432`);else if(e.length>x)k(`\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u043d\u0435 \u0431\u0456\u043b\u044c\u0448\u0435 ${x} \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432`);else{C(!0),k("");try{const e={title:o,description:m,checked:!1},s=await(0,a.eW)(e);t((e=>[...e,s.data])),d(""),g("")}catch(b){k("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u0456 Todo \ud83d\ude22")}finally{C(!1)}}},S=e=>{"Enter"===e.key&&$()},A=(0,s.useMemo)((()=>{const t=y.toLowerCase().trim(),o=e.filter((e=>"active"===j?!e.checked:"completed"!==j||e.checked));return t?o.filter((e=>`${e.title} ${e.description}`.toLowerCase().includes(t))):o}),[e,y,j]);return(0,n.jsxs)(i.m,{children:[w&&(0,n.jsx)(h.A,{}),b&&(0,n.jsx)(p.A,{message:b}),!w&&!b&&0===e.length&&(0,n.jsx)("div",{children:(0,n.jsx)(c.$,{type:"button",onClick:()=>N(!0),children:"\u0414\u043e\u0434\u0430\u0442\u0438 Todo"})}),T&&(0,n.jsxs)("div",{children:[(0,n.jsxs)("label",{className:"label",htmlFor:"new-todo",children:["New task -"," "]}),(0,n.jsx)("input",{className:"input",id:"new-todo",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u043e\u0432\u0430 \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f",value:o,onChange:e=>d(e.target.value),onKeyDown:S}),(0,n.jsxs)("label",{className:"label",htmlFor:"new-todo-description",children:["Task description-"," "]}),(0,n.jsx)("input",{className:"input",id:"new-todo-description",placeholder:"\u0417\u0440\u043e\u0431\u0438\u0442\u044c \u043e\u043f\u0438\u0441 \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f",value:m,onChange:e=>g(e.target.value),onKeyDown:S}),(0,n.jsxs)("div",{className:"container",children:[(0,n.jsxs)("p",{children:["Total ToDo's: ",e.length]}),(0,n.jsx)(c.$,{type:"button",onClick:$,children:"\u0414\u043e\u0434\u0430\u0442\u0438 To Do"})]})]}),(0,n.jsx)(l,{filter:j,setFilter:f,search:y,setSearch:v}),0===A.length&&(0,n.jsx)("p",{children:"\u0423\u043f-\u0441 ... \u0430 \u044f \u043d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u0439\u0448\u043e\u0432"}),(0,n.jsx)(r,{todos:A,onDeleteToDo:async e=>{C(!0),k("");try{await(0,a.Ys)(e),t((t=>t.filter((t=>t.id!==e))))}catch(b){k("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043d\u0456 Todo")}finally{C(!1)}},onToggleCompleted:async o=>{const s=e.find((e=>e.id===o));if(s){C(!0),k("");try{const e=await(0,a.uy)(o,{...s,checked:!s.checked});t((t=>t.map((t=>t.id===o?e.data:t))))}catch(b){k("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u0456 \u0441\u0442\u0430\u0442\u0443\u0441\u0443 Todo")}finally{C(!1)}}}})]})}},423:(e,t,o)=>{o.d(t,{m:()=>s});const s=o(464).Ay.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`},531:(e,t,o)=>{o.d(t,{$:()=>a,S:()=>s});const s=o(464).Ay.button`
  border: none;
  border-radius: 30px;
  background: linear-gradient(135deg, #4f46e5, #3b82f6);
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
  text-decoration: none;
  display: inline-block;
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #4338ca, #2563eb);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    text-decoration: none;
  }

  &:active {
    transform: scale(0.98);
  }
`,a=s},726:(e,t,o)=>{o.d(t,{A:()=>l});var s=o(464),a=o(579);const n=s.Ay.div`
  background-color: #ffe6e6;
  color: #d00;
  padding: 10px 15px;
  border-radius: 8px;
  margin: 10px 0;
  font-size: 14px;
  text-align: center;
`,l=e=>{let{message:t}=e;return t?(0,a.jsx)(n,{children:t}):null}},931:(e,t,o)=>{o.d(t,{Gg:()=>a,Nr:()=>n,Ys:()=>c,eW:()=>l,uy:()=>i});const s=o(213).A.create({baseURL:"http://localhost:3030",timeout:3e3,headers:{"Content-Type":"application/json"}}),a=()=>s.get("/todos"),n=e=>s.get(`/todos/${e}`),l=e=>s.post("/todos",e),i=(e,t)=>s.put(`/todos/${e}`,t),c=e=>s.delete(`/todos/${e}`)}}]);
//# sourceMappingURL=0.a2e77fba.chunk.js.map