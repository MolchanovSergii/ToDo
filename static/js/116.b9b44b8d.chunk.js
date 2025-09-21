"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[116],{116:(e,a,t)=>{t.r(a),t.d(a,{default:()=>c});var n=t(43),r=t(531),s=t(423),o=t(981),d=t(726),i=t(931),l=t(537),p=t(579);function c(e){let{login:a}=e;const[t,c]=(0,n.useState)(""),[u,x]=(0,n.useState)(""),[g,h]=(0,n.useState)(null),m=(0,o.Zp)();return(0,p.jsx)(s.m,{children:(0,p.jsxs)(l._,{children:[(0,p.jsx)("h2",{children:"Login Page"}),g&&(0,p.jsx)(d.A,{message:g}),(0,p.jsxs)("form",{onSubmit:async e=>{if(e.preventDefault(),h(null),t.trim()&&u.trim())try{await(0,i.Lx)({username:t,password:u})?(a(),m("/todo-list")):h("\u041d\u0435\u0432\u0456\u0440\u043d\u0438\u0439 \u043b\u043e\u0433\u0456\u043d \u0430\u0431\u043e \u043f\u0430\u0440\u043e\u043b\u044c")}catch(n){h("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430")}else h("\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044c \u0456\u043c'\u044f \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u0442\u0430 \u043f\u0430\u0440\u043e\u043b\u044c")},children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("label",{htmlFor:"login",children:" Username: "}),(0,p.jsx)("input",{id:"login",className:"input",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0456\u043c'\u044f",value:t,onChange:e=>c(e.target.value)})]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("label",{htmlFor:"password",children:"Password: "}),(0,p.jsx)("input",{id:"password",className:"input",type:"password",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c",value:u,onChange:e=>x(e.target.value)})]}),(0,p.jsx)(r.$n,{type:"submit",children:"Login"})]})]})})}},423:(e,a,t)=>{t.d(a,{m:()=>n});const n=t(464).Ay.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`},531:(e,a,t)=>{t.d(a,{$n:()=>s,SC:()=>r,zG:()=>o});var n=t(464);const r=n.Ay.button`
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
`,s=r,o=(0,n.Ay)(r)`
  margin-left: auto;
  background: linear-gradient(135deg, #ef4444, #dc2626);
  &:hover {
    background: linear-gradient(135deg, #b91c1c, #991b1b);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`},537:(e,a,t)=>{t.d(a,{_:()=>n});const n=t(464).Ay.div`
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
`},726:(e,a,t)=>{t.d(a,{A:()=>o});var n=t(464),r=t(579);const s=n.Ay.div`
  background-color: #ffe6e6;
  color: #d00;
  padding: 10px 15px;
  border-radius: 8px;
  margin: 10px 0;
  font-size: 14px;
  text-align: center;
`,o=e=>{let{message:a}=e;return a?(0,r.jsx)(s,{children:a}):null}},931:(e,a,t)=>{t.d(a,{Gg:()=>r,Lx:()=>l,Nr:()=>s,Ys:()=>i,eW:()=>o,uy:()=>d});const n=t(213).A.create({baseURL:"http://localhost:3030",timeout:3e3,headers:{"Content-Type":"application/json"}}),r=()=>n.get("/todos"),s=e=>n.get(`/todos/${e}`),o=e=>n.post("/todos",e),d=(e,a)=>n.put(`/todos/${e}`,a),i=e=>n.delete(`/todos/${e}`),l=async e=>{let{username:a,password:t}=e;try{const e=await n.get("/auth",{params:{username:a,password:t}});return e.data.length>0?e.data[0]:null}catch(r){throw r}}}}]);
//# sourceMappingURL=116.b9b44b8d.chunk.js.map