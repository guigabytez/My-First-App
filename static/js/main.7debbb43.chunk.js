(this["webpackJsonplearning-react"]=this["webpackJsonplearning-react"]||[]).push([[0],{126:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),a=c(26),r=c.n(a),j=c(36),i=(c(96),c(97),c(98),c(42)),o=c(128),l=c(130),b=c(131),d=c(132),u=c(133),O=c(6),x=o.a.Sider,h=function(e){return Object(O.jsxs)(x,{trigger:null,collapsible:!0,collapsed:e.isCollapsed,children:[Object(O.jsx)("div",{className:"logo"}),Object(O.jsxs)(l.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["/"],children:[Object(O.jsxs)(l.a.Item,{icon:Object(O.jsx)(b.a,{}),children:["Dashboard",Object(O.jsx)(j.b,{to:"/"})]},"/"),Object(O.jsxs)(l.a.Item,{icon:Object(O.jsx)(d.a,{}),children:["Post",Object(O.jsx)(j.b,{to:"/post"})]},"/post"),Object(O.jsxs)(l.a.Item,{icon:Object(O.jsx)(u.a,{}),children:["Result",Object(O.jsx)(j.b,{to:"/result"})]},"/result")]})]})},p=c(134),g=c(135),m=o.a.Header,f=function(e){var t=e.isCollapsed,c=e.onCallBackToggle,s=Object(n.useState)(t),a=Object(i.a)(s,2),r=a[0],j=a[1];return Object(O.jsx)(m,{className:"site-layout-background",style:{padding:0},children:Object(O.jsx)("span",{className:"trigger",onClick:function(){j(!t),c(!t)},children:r?Object(O.jsx)(p.a,{}):Object(O.jsx)(g.a,{})})})},v=function(){return Object(O.jsx)("div",{children:Object(O.jsx)("h2",{children:"Dashboard"})})},k=c(67),y=c.n(k),C=c(86),S=c(87),w=c.n(S),N=c(129),I=c(45),B=c(29),D=N.a.Meta,E=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],s=t[1];console.log("postData: ",c),Object(n.useEffect)((function(){a()}),[]);var a=function(){var e=Object(C.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w()({method:"get",url:"https://api.github.com/users"});case 2:t=e.sent,s(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsx)("div",{className:"post-card",children:Object(O.jsx)(I.a,{children:c.map((function(e){var t=e.login,c=e.id,n=e.avatar_url;return console.log("login: ",t),Object(O.jsx)(B.a,{span:6,children:Object(O.jsx)(N.a,{hoverable:!0,style:{width:240},cover:Object(O.jsx)("img",{alt:"example",src:n}),children:Object(O.jsx)(D,{title:t,description:n})},c)})}))})})},H=function(){return Object(O.jsx)("div",{children:Object(O.jsx)("h2",{children:"Result Page"})})},J=c(11),M=o.a.Content,P=function(){return Object(O.jsx)(M,{className:"site-layout-background",style:{margin:"24px 16px",padding:24,minHeight:"auto"},children:Object(O.jsxs)(J.c,{children:[Object(O.jsx)(J.a,{path:"/",component:v,exact:!0}),Object(O.jsx)(J.a,{path:"/post",component:E}),Object(O.jsx)(J.a,{path:"/result",component:H})]})})},R=function(){var e=Object(n.useState)(),t=Object(i.a)(e,2),c=t[0],s=t[1];return Object(O.jsxs)(o.a,{children:[Object(O.jsx)(h,{isCollapsed:c}),Object(O.jsxs)(o.a,{children:[Object(O.jsx)(f,{isCollapsed:c,onCallBackToggle:function(e){s(e)}}),Object(O.jsx)(P,{})]})]})};r.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(j.a,{children:Object(O.jsx)(R,{})})}),document.getElementById("root"))},96:function(e,t,c){},98:function(e,t,c){}},[[126,1,2]]]);
//# sourceMappingURL=main.7debbb43.chunk.js.map