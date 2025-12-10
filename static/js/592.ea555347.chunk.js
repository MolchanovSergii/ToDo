"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[592],{303:(e,t,n)=>{n.d(t,{E2:()=>g,G6:()=>x,Ay:()=>m});var o=n(43),a=n(423),s=n(531),l=n(981),d=n(579);const r=e=>{let{todos:t,onDeleteToDo:n,onToggleCompleted:o}=e;return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("ul",{children:t.map((e=>{let{id:t,title:a,description:r,checked:i}=e;return(0,d.jsxs)("li",{children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{className:i?"todo-item completed":"todo-item",children:a}),(0,d.jsx)("p",{className:i?"todo-item completed":"todo-item",children:r})]}),(0,d.jsx)(s.$n,{type:"button",onClick:()=>n(t),children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 To Do"}),(0,d.jsx)(s.SC,{as:l.N_,to:`/todo-list/${t}`,children:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"}),(0,d.jsx)("label",{htmlFor:`todo-${t}`,children:"\u0412\u0438\u043a\u043e\u043d\u0430\u043d\u043e?"}),(0,d.jsx)("input",{id:`todo-${t}`,type:"checkbox",onChange:()=>o(t),checked:i})]},t)}))})})},i=e=>{let{filter:t,setFilter:n,search:o,setSearch:a}=e;return(0,d.jsxs)("div",{children:[(0,d.jsxs)("label",{className:"label",children:["\u0429\u043e \u043e\u0431\u0438\u0440\u0430\u0454\u0448...?",(0,d.jsxs)("select",{className:"select",value:t,onChange:e=>n(e.target.value),children:[(0,d.jsx)("option",{value:"all",children:"\u0423\u0441\u0456 \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f"}),(0,d.jsx)("option",{value:"active",children:"\u0412 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0456"}),(0,d.jsx)("option",{value:"completed",children:"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u0456"})]})]}),(0,d.jsxs)("label",{className:"label",htmlFor:"search-todo",children:["\u041f\u043e\u0448\u0443\u043a\u0430\u0454\u043c...?",(0,d.jsx)("input",{className:"input",id:"search-todo",type:"search",value:o,placeholder:"\u041f\u0456\u0434\u043a\u0430\u0436\u0438 \u0449\u043e \u043c\u0438 \u0448\u0443\u043a\u0430\u0435\u043c\u043e?",onChange:e=>a(e.target.value)})]})]})};var c=n(502),h=n(726),p=n(3),u=n(627);const x=3,g=50,m=()=>{const[e,t]=(0,o.useState)(""),[n,m]=(0,o.useState)(""),[j,b]=(0,o.useState)("all"),[v,f]=(0,o.useState)(""),[k,y]=(0,o.useState)(!0),C=(0,l.Zp)(),w=(0,p.wA)(),S=(0,p.d4)((e=>e.todos.items)),A=(0,p.d4)((e=>e.todos.loading)),T=(0,p.d4)((e=>e.todos.error));(0,o.useEffect)((()=>{w((0,u.aq)()).unwrap().then((e=>{e&&0!==e.length||y(!1)})).catch((e=>{404===e.status?C("/not-found"):C("/error-page")}))}),[w,C]);const $=()=>{const o=e.trim();o.length<x||o.length>g||(w((0,u.G4)({title:o,description:n,checked:!1})),t(""),m(""),y(!0))},N=e=>{"Enter"===e.key&&$()},D=(0,o.useMemo)((()=>{const e=v.toLowerCase().trim(),t=S.filter((e=>"active"===j?!e.checked:"completed"!==j||e.checked));return e?t.filter((t=>`${t.title} ${t.description}`.toLowerCase().includes(e))):t}),[S,v,j]);return(0,d.jsxs)(a.m,{children:[A&&(0,d.jsx)(c.A,{}),T&&(0,d.jsx)(h.A,{message:T}),!A&&0===S.length&&(0,d.jsx)(s.$n,{type:"button",onClick:()=>y(!0),children:"\u0414\u043e\u0434\u0430\u0442\u0438 Todo"}),k&&(0,d.jsxs)("div",{children:[(0,d.jsx)("label",{htmlFor:"new-todo",children:"New task - "}),(0,d.jsx)("input",{id:"new-todo",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u043e\u0432\u0443 \u0437\u0430\u0434\u0430\u0447\u0443",value:e,onChange:e=>t(e.target.value),onKeyDown:N}),(0,d.jsx)("label",{htmlFor:"new-todo-description",children:"Task description - "}),(0,d.jsx)("input",{id:"new-todo-description",placeholder:"\u041e\u043f\u0438\u0441 \u0437\u0430\u0434\u0430\u0447\u0456",value:n,onChange:e=>m(e.target.value),onKeyDown:N}),(0,d.jsxs)("div",{className:"container",children:[(0,d.jsxs)("p",{children:["Total ToDo's: ",S.length]}),(0,d.jsx)(s.$n,{type:"button",onClick:$,children:"\u0414\u043e\u0434\u0430\u0442\u0438 To Do"})]})]}),(0,d.jsx)(i,{filter:j,setFilter:b,search:v,setSearch:f}),0===D.length&&(0,d.jsx)("p",{children:"\u0423\u043f-\u0441 ... \u0430 \u044f \u043d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u0439\u0448\u043e\u0432"}),(0,d.jsx)(r,{todos:D,onDeleteToDo:e=>{w((0,u.Ye)(e))},onToggleCompleted:e=>{const t=S.find((t=>t.id===e));t&&w((0,u.vy)({id:e,checked:!t.checked}))}})]})}},423:(e,t,n)=>{n.d(t,{m:()=>o});const o=n(464).Ay.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`},531:(e,t,n)=>{n.d(t,{$n:()=>s,SC:()=>a,zG:()=>l});var o=n(464);const a=o.Ay.button`
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
`,s=a,l=(0,o.Ay)(a)`
  margin-left: auto;
  background: linear-gradient(135deg, #ef4444, #dc2626);
  &:hover {
    background: linear-gradient(135deg, #b91c1c, #991b1b);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`},537:(e,t,n)=>{n.d(t,{_:()=>o});const o=n(464).Ay.div`
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
`},592:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});var o=n(43),a=n(981),s=n(479),l=n(531),d=n(537),r=n(303),i=n(726),c=n(579);const h=e=>{let{editingTodo:t,onCancel:n,onSave:a}=e;const[s,h]=(0,o.useState)(""),[p,u]=(0,o.useState)(""),[x,g]=(0,o.useState)(!1),[m,j]=(0,o.useState)("");(0,o.useEffect)((()=>{t&&(h(t.title),u(t.description),g(t.checked))}),[t]);return(0,c.jsxs)(d._,{onKeyDown:e=>{"Escape"===e.key&&n()},tabIndex:0,children:[m&&(0,c.jsx)(i.A,{message:m}),(0,c.jsx)("input",{className:"input",type:"text",value:s,onChange:e=>h(e.target.value)}),(0,c.jsx)("input",{className:"input",type:"text",value:p,onChange:e=>u(e.target.value)}),(0,c.jsx)(l.$n,{type:"button",onClick:()=>{const e=s.trim();""===e||e.length<r.G6?j(`\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u043d\u0435 \u043c\u0435\u043d\u0448\u0435 ${r.G6} \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432`):e.length>r.E2?j(`\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u043d\u0435 \u0431\u0456\u043b\u044c\u0448\u0435 ${r.E2} \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432`):a({...t,title:s,description:p,checked:x})},children:"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438"}),(0,c.jsx)(l.$n,{type:"button",onClick:n,children:"\u0421\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438"}),(0,c.jsx)("label",{htmlFor:"todo-editing-completed",children:"\u0412\u0438\u043a\u043e\u043d\u0430\u043d\u043e?"}),(0,c.jsx)("input",{id:"todo-editing-completed",type:"checkbox",checked:x,onChange:e=>g(e.target.checked)})]})};var p=n(423),u=n(502);function x(){const{id:e}=(0,a.g)(),t=(0,a.Zp)(),[n,l]=(0,o.useState)(null),[d,r]=(0,o.useState)(!0),[x,g]=(0,o.useState)("");(0,o.useEffect)((()=>{(async()=>{let n=!1;try{if(r(!0),g(""),!n){const t=await(0,s.Nr)(e);l(t.data),r(!1)}}catch(a){var o;404===(null===a||void 0===a||null===(o=a.response)||void 0===o?void 0:o.status)?t("/not-found"):t("/error-page")}finally{n||r(!1)}})()}),[e,t]);return(0,c.jsxs)(p.m,{children:[d&&(0,c.jsx)(u.A,{}),x&&(0,c.jsx)(i.A,{message:x}),!d&&!x&&n&&(0,c.jsx)(h,{editingTodo:n,onSave:async e=>{r(!0),g("");try{const n=await(0,s.uy)(e.id,e);l(n.data),t("/todo-list")}catch(x){g("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u043f\u0440\u0438 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u043d\u0456 Todo")}finally{r(!1)}},onCancel:()=>{t("/todo-list")}})]})}},726:(e,t,n)=>{n.d(t,{A:()=>l});var o=n(464),a=n(579);const s=o.Ay.div`
  background-color: #ffe6e6;
  color: #d00;
  padding: 10px 15px;
  border-radius: 8px;
  margin: 10px 0;
  font-size: 14px;
  text-align: center;
`,l=e=>{let{message:t}=e;return t?(0,a.jsx)(s,{children:t}):null}}}]);
//# sourceMappingURL=592.ea555347.chunk.js.map