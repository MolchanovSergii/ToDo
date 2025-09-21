"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[0],{0:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});var o=a(303),n=a(579);function s(){return(0,n.jsx)(o.Ay,{})}},303:(e,t,a)=>{a.d(t,{E2:()=>x,G6:()=>u,Ay:()=>g});var o=a(43),n=a(931),s=a(579);const l=e=>{let{filter:t,setFilter:a,search:o,setSearch:n}=e;return(0,s.jsxs)("div",{children:[(0,s.jsxs)("label",{className:"label",children:["\u0429\u043e \u043e\u0431\u0438\u0440\u0430\u0454\u0448...?",(0,s.jsxs)("select",{className:"select",value:t,onChange:e=>a(e.target.value),children:[(0,s.jsx)("option",{value:"all",children:"\u0423\u0441\u0456 \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f"}),(0,s.jsx)("option",{value:"active",children:"\u0412 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0456"}),(0,s.jsx)("option",{value:"completed",children:"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u0456"})]})]}),(0,s.jsxs)("label",{className:"label",htmlFor:"search-todo",children:["\u041f\u043e\u0448\u0443\u043a\u0430\u0454\u043c...?",(0,s.jsx)("input",{className:"input",id:"search-todo",type:"search",value:o,placeholder:"\u041f\u0456\u0434\u043a\u0430\u0436\u0438 \u0449\u043e \u043c\u0438 \u0448\u0443\u043a\u0430\u0435\u043c\u043e?",onChange:e=>n(e.target.value)})]})]})};var r=a(423),d=a(531),i=a(981);const c=e=>{let{todos:t,onDeleteToDo:a,onToggleCompleted:o}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("ul",{children:t.map((e=>{let{id:t,title:n,description:l,checked:r}=e;return(0,s.jsxs)("li",{children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:r?"todo-item completed":"todo-item",children:n}),(0,s.jsx)("p",{className:r?"todo-item completed":"todo-item",children:l})]}),(0,s.jsx)(d.$n,{type:"button",onClick:()=>a(t),children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 To Do"}),(0,s.jsx)(d.SC,{as:i.N_,to:`/todo-list/${t}`,children:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"}),(0,s.jsx)("label",{htmlFor:`todo-${t}`,children:"\u0412\u0438\u043a\u043e\u043d\u0430\u043d\u043e?"}),(0,s.jsx)("input",{id:`todo-${t}`,type:"checkbox",onChange:()=>o(t),checked:r})]},t)}))})})};var h=a(502),p=a(726);const u=3,x=50,g=()=>{const[e,t]=(0,o.useState)([]),[a,g]=(0,o.useState)(""),[m,j]=(0,o.useState)(""),[b,f]=(0,o.useState)("all"),[v,y]=(0,o.useState)(""),[k,w]=(0,o.useState)(""),[C,N]=(0,o.useState)(!1),[T,$]=(0,o.useState)(!0),S=(0,i.Zp)();(0,o.useEffect)((()=>{N(!0),w("");(async()=>{try{var e;const a=await(0,n.Gg)();t(null!==(e=a.data)&&void 0!==e?e:[]),0===a.data.length&&$(!1)}catch(o){var a;404===(null===o||void 0===o||null===(a=o.response)||void 0===a?void 0:a.status)?S("/not-found"):S("/error-page")}finally{N(!1)}})()}),[S]);const A=async()=>{const e=a.trim();if(""===e||e.length<u)w(`\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u043d\u0435 \u043c\u0435\u043d\u0448\u0435 ${u} \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432`);else if(e.length>x)w(`\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u043d\u0435 \u0431\u0456\u043b\u044c\u0448\u0435 ${x} \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432`);else{N(!0),w("");try{const e={title:a,description:m,checked:!1},o=await(0,n.eW)(e);t((e=>[...e,o.data])),g(""),j("")}catch(k){w("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u0456 Todo \ud83d\ude22")}finally{N(!1)}}},D=e=>{"Enter"===e.key&&A()},F=(0,o.useMemo)((()=>{const t=v.toLowerCase().trim(),a=e.filter((e=>"active"===b?!e.checked:"completed"!==b||e.checked));return t?a.filter((e=>`${e.title} ${e.description}`.toLowerCase().includes(t))):a}),[e,v,b]);return(0,s.jsxs)(r.m,{children:[C&&(0,s.jsx)(h.A,{}),k&&(0,s.jsx)(p.A,{message:k}),!C&&!k&&0===e.length&&(0,s.jsx)("div",{children:(0,s.jsx)(d.$n,{type:"button",onClick:()=>$(!0),children:"\u0414\u043e\u0434\u0430\u0442\u0438 Todo"})}),T&&(0,s.jsxs)("div",{children:[(0,s.jsxs)("label",{className:"label",htmlFor:"new-todo",children:["New task -"," "]}),(0,s.jsx)("input",{className:"input",id:"new-todo",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u043e\u0432\u0430 \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f",value:a,onChange:e=>g(e.target.value),onKeyDown:D}),(0,s.jsxs)("label",{className:"label",htmlFor:"new-todo-description",children:["Task description-"," "]}),(0,s.jsx)("input",{className:"input",id:"new-todo-description",placeholder:"\u0417\u0440\u043e\u0431\u0438\u0442\u044c \u043e\u043f\u0438\u0441 \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f",value:m,onChange:e=>j(e.target.value),onKeyDown:D}),(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)("p",{children:["Total ToDo's: ",e.length]}),(0,s.jsx)(d.$n,{type:"button",onClick:A,children:"\u0414\u043e\u0434\u0430\u0442\u0438 To Do"})]})]}),(0,s.jsx)(l,{filter:b,setFilter:f,search:v,setSearch:y}),0===F.length&&(0,s.jsx)("p",{children:"\u0423\u043f-\u0441 ... \u0430 \u044f \u043d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u0439\u0448\u043e\u0432"}),(0,s.jsx)(c,{todos:F,onDeleteToDo:async e=>{N(!0),w("");try{await(0,n.Ys)(e),t((t=>t.filter((t=>t.id!==e))))}catch(k){w("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043d\u0456 Todo")}finally{N(!1)}},onToggleCompleted:async a=>{const o=e.find((e=>e.id===a));if(o){N(!0),w("");try{const e=await(0,n.uy)(a,{...o,checked:!o.checked});t((t=>t.map((t=>t.id===a?e.data:t))))}catch(k){w("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u0456 \u0441\u0442\u0430\u0442\u0443\u0441\u0443 Todo")}finally{N(!1)}}}})]})}},423:(e,t,a)=>{a.d(t,{m:()=>o});const o=a(464).Ay.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`},531:(e,t,a)=>{a.d(t,{$n:()=>s,SC:()=>n,zG:()=>l});var o=a(464);const n=o.Ay.button`
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
`,s=n,l=(0,o.Ay)(n)`
  margin-left: auto;
  background: linear-gradient(135deg, #ef4444, #dc2626);
  &:hover {
    background: linear-gradient(135deg, #b91c1c, #991b1b);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`},726:(e,t,a)=>{a.d(t,{A:()=>l});var o=a(464),n=a(579);const s=o.Ay.div`
  background-color: #ffe6e6;
  color: #d00;
  padding: 10px 15px;
  border-radius: 8px;
  margin: 10px 0;
  font-size: 14px;
  text-align: center;
`,l=e=>{let{message:t}=e;return t?(0,n.jsx)(s,{children:t}):null}},931:(e,t,a)=>{a.d(t,{Gg:()=>n,Lx:()=>i,Nr:()=>s,Ys:()=>d,eW:()=>l,uy:()=>r});const o=a(213).A.create({baseURL:"http://localhost:3030",timeout:3e3,headers:{"Content-Type":"application/json"}}),n=()=>o.get("/todos"),s=e=>o.get(`/todos/${e}`),l=e=>o.post("/todos",e),r=(e,t)=>o.put(`/todos/${e}`,t),d=e=>o.delete(`/todos/${e}`),i=async e=>{let{username:t,password:a}=e;try{const e=await o.get("/auth",{params:{username:t,password:a}});return e.data.length>0?e.data[0]:null}catch(n){throw n}}}}]);
//# sourceMappingURL=0.70917a9c.chunk.js.map