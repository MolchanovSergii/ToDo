"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[116],{116:(e,a,n)=>{n.r(a),n.d(a,{default:()=>u});var r=n(43),t=n(531),s=n(423),i=n(981),d=n(726),o=n(479),l=n(537),p=n(937),c=n(3),x=n(579);function u(){const[e,a]=(0,r.useState)(""),[n,u]=(0,r.useState)(""),[g,h]=(0,r.useState)(null),b=(0,i.Zp)(),m=(0,c.wA)();return(0,x.jsx)(s.m,{children:(0,x.jsxs)(l._,{children:[(0,x.jsx)("h2",{children:"Login Page"}),g&&(0,x.jsx)(d.A,{message:g}),(0,x.jsxs)("form",{onSubmit:async a=>{if(a.preventDefault(),h(null),e.trim()&&n.trim())try{await(0,o.Lx)({username:e,password:n})?(m((0,p.iD)({username:e,password:n})),b("/todo-list")):h("\u041d\u0435\u0432\u0456\u0440\u043d\u0438\u0439 \u043b\u043e\u0433\u0456\u043d \u0430\u0431\u043e \u043f\u0430\u0440\u043e\u043b\u044c")}catch(r){h("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430")}else h("\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044c \u0456\u043c'\u044f \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u0442\u0430 \u043f\u0430\u0440\u043e\u043b\u044c")},children:[(0,x.jsxs)("div",{children:[(0,x.jsx)("label",{htmlFor:"login",children:" Username: "}),(0,x.jsx)("input",{id:"login",className:"input",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0456\u043c'\u044f",value:e,onChange:e=>a(e.target.value)})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("label",{htmlFor:"password",children:"Password: "}),(0,x.jsx)("input",{id:"password",className:"input",type:"password",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c",value:n,onChange:e=>u(e.target.value)})]}),(0,x.jsx)(t.$n,{type:"submit",children:"Login"})]})]})})}},423:(e,a,n)=>{n.d(a,{m:()=>r});const r=n(464).Ay.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`},531:(e,a,n)=>{n.d(a,{$n:()=>s,SC:()=>t,zG:()=>i});var r=n(464);const t=r.Ay.button`
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
`,s=t,i=(0,r.Ay)(t)`
  margin-left: auto;
  background: linear-gradient(135deg, #ef4444, #dc2626);
  &:hover {
    background: linear-gradient(135deg, #b91c1c, #991b1b);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`},537:(e,a,n)=>{n.d(a,{_:()=>r});const r=n(464).Ay.div`
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
`},726:(e,a,n)=>{n.d(a,{A:()=>i});var r=n(464),t=n(579);const s=r.Ay.div`
  background-color: #ffe6e6;
  color: #d00;
  padding: 10px 15px;
  border-radius: 8px;
  margin: 10px 0;
  font-size: 14px;
  text-align: center;
`,i=e=>{let{message:a}=e;return a?(0,t.jsx)(s,{children:a}):null}}}]);
//# sourceMappingURL=116.e1576a67.chunk.js.map