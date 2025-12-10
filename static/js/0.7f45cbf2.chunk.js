"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[0],{0:(e,t,o)=>{o.r(t),o.d(t,{default:()=>s});var n=o(303),r=o(579);function s(){return(0,r.jsx)(n.Ay,{})}},303:(e,t,o)=>{o.d(t,{E2:()=>g,G6:()=>u,Ay:()=>m});var n=o(43),r=o(423),s=o(531),l=o(981),a=o(579);const d=e=>{let{todos:t,onDeleteToDo:o,onToggleCompleted:n}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("ul",{children:t.map((e=>{let{id:t,title:r,description:d,checked:i}=e;return(0,a.jsxs)("li",{children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:i?"todo-item completed":"todo-item",children:r}),(0,a.jsx)("p",{className:i?"todo-item completed":"todo-item",children:d})]}),(0,a.jsx)(s.$n,{type:"button",onClick:()=>o(t),children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438 To Do"}),(0,a.jsx)(s.SC,{as:l.N_,to:`/todo-list/${t}`,children:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"}),(0,a.jsx)("label",{htmlFor:`todo-${t}`,children:"\u0412\u0438\u043a\u043e\u043d\u0430\u043d\u043e?"}),(0,a.jsx)("input",{id:`todo-${t}`,type:"checkbox",onChange:()=>n(t),checked:i})]},t)}))})})},i=e=>{let{filter:t,setFilter:o,search:n,setSearch:r}=e;return(0,a.jsxs)("div",{children:[(0,a.jsxs)("label",{className:"label",children:["\u0429\u043e \u043e\u0431\u0438\u0440\u0430\u0454\u0448...?",(0,a.jsxs)("select",{className:"select",value:t,onChange:e=>o(e.target.value),children:[(0,a.jsx)("option",{value:"all",children:"\u0423\u0441\u0456 \u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f"}),(0,a.jsx)("option",{value:"active",children:"\u0412 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0456"}),(0,a.jsx)("option",{value:"completed",children:"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u0456"})]})]}),(0,a.jsxs)("label",{className:"label",htmlFor:"search-todo",children:["\u041f\u043e\u0448\u0443\u043a\u0430\u0454\u043c...?",(0,a.jsx)("input",{className:"input",id:"search-todo",type:"search",value:n,placeholder:"\u041f\u0456\u0434\u043a\u0430\u0436\u0438 \u0449\u043e \u043c\u0438 \u0448\u0443\u043a\u0430\u0435\u043c\u043e?",onChange:e=>r(e.target.value)})]})]})};var c=o(502),h=o(726),p=o(3),x=o(627);const u=3,g=50,m=()=>{const[e,t]=(0,n.useState)(""),[o,m]=(0,n.useState)(""),[j,b]=(0,n.useState)("all"),[v,f]=(0,n.useState)(""),[k,y]=(0,n.useState)(!0),w=(0,l.Zp)(),C=(0,p.wA)(),A=(0,p.d4)((e=>e.todos.items)),T=(0,p.d4)((e=>e.todos.loading)),D=(0,p.d4)((e=>e.todos.error));(0,n.useEffect)((()=>{C((0,x.aq)()).unwrap().then((e=>{e&&0!==e.length||y(!1)})).catch((e=>{404===e.status?w("/not-found"):w("/error-page")}))}),[C,w]);const N=()=>{const n=e.trim();n.length<u||n.length>g||(C((0,x.G4)({title:n,description:o,checked:!1})),t(""),m(""),y(!0))},S=e=>{"Enter"===e.key&&N()},$=(0,n.useMemo)((()=>{const e=v.toLowerCase().trim(),t=A.filter((e=>"active"===j?!e.checked:"completed"!==j||e.checked));return e?t.filter((t=>`${t.title} ${t.description}`.toLowerCase().includes(e))):t}),[A,v,j]);return(0,a.jsxs)(r.m,{children:[T&&(0,a.jsx)(c.A,{}),D&&(0,a.jsx)(h.A,{message:D}),!T&&0===A.length&&(0,a.jsx)(s.$n,{type:"button",onClick:()=>y(!0),children:"\u0414\u043e\u0434\u0430\u0442\u0438 Todo"}),k&&(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"new-todo",children:"New task - "}),(0,a.jsx)("input",{id:"new-todo",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u043e\u0432\u0443 \u0437\u0430\u0434\u0430\u0447\u0443",value:e,onChange:e=>t(e.target.value),onKeyDown:S}),(0,a.jsx)("label",{htmlFor:"new-todo-description",children:"Task description - "}),(0,a.jsx)("input",{id:"new-todo-description",placeholder:"\u041e\u043f\u0438\u0441 \u0437\u0430\u0434\u0430\u0447\u0456",value:o,onChange:e=>m(e.target.value),onKeyDown:S}),(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("p",{children:["Total ToDo's: ",A.length]}),(0,a.jsx)(s.$n,{type:"button",onClick:N,children:"\u0414\u043e\u0434\u0430\u0442\u0438 To Do"})]})]}),(0,a.jsx)(i,{filter:j,setFilter:b,search:v,setSearch:f}),0===$.length&&(0,a.jsx)("p",{children:"\u0423\u043f-\u0441 ... \u0430 \u044f \u043d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u0439\u0448\u043e\u0432"}),(0,a.jsx)(d,{todos:$,onDeleteToDo:e=>{C((0,x.Ye)(e))},onToggleCompleted:e=>{const t=A.find((t=>t.id===e));t&&C((0,x.vy)({id:e,checked:!t.checked}))}})]})}},423:(e,t,o)=>{o.d(t,{m:()=>n});const n=o(464).Ay.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`},531:(e,t,o)=>{o.d(t,{$n:()=>s,SC:()=>r,zG:()=>l});var n=o(464);const r=n.Ay.button`
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
`,s=r,l=(0,n.Ay)(r)`
  margin-left: auto;
  background: linear-gradient(135deg, #ef4444, #dc2626);
  &:hover {
    background: linear-gradient(135deg, #b91c1c, #991b1b);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`},726:(e,t,o)=>{o.d(t,{A:()=>l});var n=o(464),r=o(579);const s=n.Ay.div`
  background-color: #ffe6e6;
  color: #d00;
  padding: 10px 15px;
  border-radius: 8px;
  margin: 10px 0;
  font-size: 14px;
  text-align: center;
`,l=e=>{let{message:t}=e;return t?(0,r.jsx)(s,{children:t}):null}}}]);
//# sourceMappingURL=0.7f45cbf2.chunk.js.map