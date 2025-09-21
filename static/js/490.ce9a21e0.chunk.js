"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[490],{490:(e,o,r)=>{r.r(o),r.d(o,{default:()=>s});var t=r(981),n=r(531),a=r(464);const d=a.Ay.nav`
  display: flex;
  align-items: center;

  gap: 20px;
  padding: 10px 20px;
  background-color: #f8f9fa;
  border-bottom: 2px solid #ddd;
`,i=(0,a.Ay)(t.k2)`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  padding: 5px 10px;
  border-radius: 6px;
  transition: color 0.3s ease, background-color 0.3s ease;

  &:hover {
    color: #0056b3;
    background-color: #e9ecef;
  }

  &.active {
    color: #fff;
    background-color: #007bff;
  }
`;var c=r(579);function s(e){let{isAuthenticated:o,setIsAuthenticated:r}=e;const a=(0,t.Zp)();return(0,c.jsxs)(d,{children:[(0,c.jsx)(i,{to:"/",children:"Home"}),o&&(0,c.jsx)(i,{to:"/todo-list",children:"Todo List"}),o&&(0,c.jsx)(i,{to:"/about",children:"About"}),o&&(0,c.jsx)(n.zG,{onClick:()=>{r(!1),localStorage.setItem("isAuthenticated","false"),a("/")},children:"Logout"})]})}},531:(e,o,r)=>{r.d(o,{$n:()=>a,SC:()=>n,zG:()=>d});var t=r(464);const n=t.Ay.button`
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
`,a=n,d=(0,t.Ay)(n)`
  margin-left: auto;
  background: linear-gradient(135deg, #ef4444, #dc2626);
  &:hover {
    background: linear-gradient(135deg, #b91c1c, #991b1b);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`}}]);
//# sourceMappingURL=490.ce9a21e0.chunk.js.map