"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[592],{303:(e,t,a)=>{a.d(t,{E2:()=>x,G6:()=>u,Ay:()=>g});var n=a(43),o=a(931),s=a(579);const l=e=>{let{filter:t,setFilter:a,search:n,setSearch:o}=e;return(0,s.jsxs)("div",{children:[(0,s.jsxs)("label",{className:"label",children:["\u0429\u043e \u043e\u0431\u0438\u0440\u0430\u0454\u0448...?",(0,s.jsxs)("select",{className:"select",value:t,onChange:e=>a(e.target.value),children:[(0,s.jsx)("option",{value:"all",children:"\u0423\u0441\u0456 \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f"}),(0,s.jsx)("option",{value:"active",children:"\u0412 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0456"}),(0,s.jsx)("option",{value:"completed",children:"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u0456"})]})]}),(0,s.jsxs)("label",{className:"label",htmlFor:"search-todo",children:["\u041f\u043e\u0448\u0443\u043a\u0430\u0454\u043c...?",(0,s.jsx)("input",{className:"input",id:"search-todo",type:"search",value:n,placeholder:"\u041f\u0456\u0434\u043a\u0430\u0436\u0438 \u0449\u043e \u043c\u0438 \u0448\u0443\u043a\u0430\u0435\u043c\u043e?",onChange:e=>o(e.target.value)})]})]})};var i=a(423),d=a(531),r=a(981);const c=e=>{let{todos:t,onDeleteToDo:a,onToggleCompleted:n}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("ul",{children:t.map((e=>{let{id:t,title:o,description:l,checked:i}=e;return(0,s.jsxs)("li",{children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:i?"todo-item completed":"todo-item",children:o}),(0,s.jsx)("p",{className:i?"todo-item completed":"todo-item",children:l})]}),(0,s.jsx)(d.$n,{type:"button",onClick:()=>a(t),children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 To Do"}),(0,s.jsx)(d.SC,{as:r.N_,to:`/todo-list/${t}`,children:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"}),(0,s.jsx)("label",{htmlFor:`todo-${t}`,children:"\u0412\u0438\u043a\u043e\u043d\u0430\u043d\u043e?"}),(0,s.jsx)("input",{id:`todo-${t}`,type:"checkbox",onChange:()=>n(t),checked:i})]},t)}))})})};var h=a(502),p=a(726);const u=3,x=50,g=()=>{const[e,t]=(0,n.useState)([]),[a,g]=(0,n.useState)(""),[m,j]=(0,n.useState)(""),[y,v]=(0,n.useState)("all"),[f,b]=(0,n.useState)(""),[k,w]=(0,n.useState)(""),[C,S]=(0,n.useState)(!1),[$,N]=(0,n.useState)(!0),T=(0,r.Zp)();(0,n.useEffect)((()=>{S(!0),w("");(async()=>{try{var e;const a=await(0,o.Gg)();t(null!==(e=a.data)&&void 0!==e?e:[]),0===a.data.length&&N(!1)}catch(n){var a;404===(null===n||void 0===n||null===(a=n.response)||void 0===a?void 0:a.status)?T("/not-found"):T("/error-page")}finally{S(!1)}})()}),[T]);const A=async()=>{const e=a.trim();if(""===e||e.length<u)w(`\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u043d\u0435 \u043c\u0435\u043d\u0448\u0435 ${u} \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432`);else if(e.length>x)w(`\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u043d\u0435 \u0431\u0456\u043b\u044c\u0448\u0435 ${x} \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432`);else{S(!0),w("");try{const e={title:a,description:m,checked:!1},n=await(0,o.eW)(e);t((e=>[...e,n.data])),g(""),j("")}catch(k){w("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0434\u0430\u0432\u0430\u043d\u043d\u0456 Todo \ud83d\ude22")}finally{S(!1)}}},D=e=>{"Enter"===e.key&&A()},E=(0,n.useMemo)((()=>{const t=f.toLowerCase().trim(),a=e.filter((e=>"active"===y?!e.checked:"completed"!==y||e.checked));return t?a.filter((e=>`${e.title} ${e.description}`.toLowerCase().includes(t))):a}),[e,f,y]);return(0,s.jsxs)(i.m,{children:[C&&(0,s.jsx)(h.A,{}),k&&(0,s.jsx)(p.A,{message:k}),!C&&!k&&0===e.length&&(0,s.jsx)("div",{children:(0,s.jsx)(d.$n,{type:"button",onClick:()=>N(!0),children:"\u0414\u043e\u0434\u0430\u0442\u0438 Todo"})}),$&&(0,s.jsxs)("div",{children:[(0,s.jsxs)("label",{className:"label",htmlFor:"new-todo",children:["New task -"," "]}),(0,s.jsx)("input",{className:"input",id:"new-todo",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u043e\u0432\u0430 \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f",value:a,onChange:e=>g(e.target.value),onKeyDown:D}),(0,s.jsxs)("label",{className:"label",htmlFor:"new-todo-description",children:["Task description-"," "]}),(0,s.jsx)("input",{className:"input",id:"new-todo-description",placeholder:"\u0417\u0440\u043e\u0431\u0438\u0442\u044c \u043e\u043f\u0438\u0441 \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f",value:m,onChange:e=>j(e.target.value),onKeyDown:D}),(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)("p",{children:["Total ToDo's: ",e.length]}),(0,s.jsx)(d.$n,{type:"button",onClick:A,children:"\u0414\u043e\u0434\u0430\u0442\u0438 To Do"})]})]}),(0,s.jsx)(l,{filter:y,setFilter:v,search:f,setSearch:b}),0===E.length&&(0,s.jsx)("p",{children:"\u0423\u043f-\u0441 ... \u0430 \u044f \u043d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u0439\u0448\u043e\u0432"}),(0,s.jsx)(c,{todos:E,onDeleteToDo:async e=>{S(!0),w("");try{await(0,o.Ys)(e),t((t=>t.filter((t=>t.id!==e))))}catch(k){w("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043d\u0456 Todo")}finally{S(!1)}},onToggleCompleted:async a=>{const n=e.find((e=>e.id===a));if(n){S(!0),w("");try{const e=await(0,o.uy)(a,{...n,checked:!n.checked});t((t=>t.map((t=>t.id===a?e.data:t))))}catch(k){w("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u0456 \u0441\u0442\u0430\u0442\u0443\u0441\u0443 Todo")}finally{S(!1)}}}})]})}},423:(e,t,a)=>{a.d(t,{m:()=>n});const n=a(464).Ay.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`},531:(e,t,a)=>{a.d(t,{$n:()=>s,SC:()=>o,zG:()=>l});var n=a(464);const o=n.Ay.button`
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
`,s=o,l=(0,n.Ay)(o)`
  margin-left: auto;
  background: linear-gradient(135deg, #ef4444, #dc2626);
  &:hover {
    background: linear-gradient(135deg, #b91c1c, #991b1b);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`},537:(e,t,a)=>{a.d(t,{_:()=>n});const n=a(464).Ay.div`
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
`},592:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var n=a(43),o=a(981),s=a(931),l=a(531),i=a(537),d=a(303),r=a(726),c=a(579);const h=e=>{let{editingTodo:t,onCancel:a,onSave:o}=e;const[s,h]=(0,n.useState)(""),[p,u]=(0,n.useState)(""),[x,g]=(0,n.useState)(!1),[m,j]=(0,n.useState)("");(0,n.useEffect)((()=>{t&&(h(t.title),u(t.description),g(t.checked))}),[t]);return(0,c.jsxs)(i._,{onKeyDown:e=>{"Escape"===e.key&&a()},tabIndex:0,children:[m&&(0,c.jsx)(r.A,{message:m}),(0,c.jsx)("input",{className:"input",type:"text",value:s,onChange:e=>h(e.target.value)}),(0,c.jsx)("input",{className:"input",type:"text",value:p,onChange:e=>u(e.target.value)}),(0,c.jsx)(l.$n,{type:"button",onClick:()=>{const e=s.trim();""===e||e.length<d.G6?j(`\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u043d\u0435 \u043c\u0435\u043d\u0448\u0435 ${d.G6} \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432`):e.length>d.E2?j(`\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u043d\u0435 \u0431\u0456\u043b\u044c\u0448\u0435 ${d.E2} \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432`):o({...t,title:s,description:p,checked:x})},children:"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438"}),(0,c.jsx)(l.$n,{type:"button",onClick:a,children:"\u0421\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438"}),(0,c.jsx)("label",{htmlFor:"todo-editing-completed",children:"\u0412\u0438\u043a\u043e\u043d\u0430\u043d\u043e?"}),(0,c.jsx)("input",{id:"todo-editing-completed",type:"checkbox",checked:x,onChange:e=>g(e.target.checked)})]})};var p=a(423),u=a(502);function x(){const{id:e}=(0,o.g)(),t=(0,o.Zp)(),[a,l]=(0,n.useState)(null),[i,d]=(0,n.useState)(!0),[x,g]=(0,n.useState)("");(0,n.useEffect)((()=>{(async()=>{let a=!1;try{if(d(!0),g(""),!a){const t=await(0,s.Nr)(e);l(t.data),d(!1)}}catch(o){var n;404===(null===o||void 0===o||null===(n=o.response)||void 0===n?void 0:n.status)?t("/not-found"):t("/error-page")}finally{a||d(!1)}})()}),[e,t]);return(0,c.jsxs)(p.m,{children:[i&&(0,c.jsx)(u.A,{}),x&&(0,c.jsx)(r.A,{message:x}),!i&&!x&&a&&(0,c.jsx)(h,{editingTodo:a,onSave:async e=>{d(!0),g("");try{const a=await(0,s.uy)(e.id,e);l(a.data),t("/todo-list")}catch(x){g("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u043d\u0456 Todo")}finally{d(!1)}},onCancel:()=>{t("/todo-list")}})]})}},726:(e,t,a)=>{a.d(t,{A:()=>l});var n=a(464),o=a(579);const s=n.Ay.div`
  background-color: #ffe6e6;
  color: #d00;
  padding: 10px 15px;
  border-radius: 8px;
  margin: 10px 0;
  font-size: 14px;
  text-align: center;
`,l=e=>{let{message:t}=e;return t?(0,o.jsx)(s,{children:t}):null}},931:(e,t,a)=>{a.d(t,{Gg:()=>o,Lx:()=>r,Nr:()=>s,Ys:()=>d,eW:()=>l,uy:()=>i});const n=a(213).A.create({baseURL:"http://localhost:3030",timeout:3e3,headers:{"Content-Type":"application/json"}}),o=()=>n.get("/todos"),s=e=>n.get(`/todos/${e}`),l=e=>n.post("/todos",e),i=(e,t)=>n.put(`/todos/${e}`,t),d=e=>n.delete(`/todos/${e}`),r=async e=>{let{username:t,password:a}=e;try{const e=await n.get("/auth",{params:{username:t,password:a}});return e.data.length>0?e.data[0]:null}catch(o){throw o}}}}]);
//# sourceMappingURL=592.b51baf6c.chunk.js.map