(this.webpackJsonpmemorygame=this.webpackJsonpmemorygame||[]).push([[0],{14:function(e,c,t){},15:function(e,c,t){"use strict";t.r(c);var a=t(0),s=t(1),n=t.n(s),r=t(6),i=t.n(r),d=t(2),j=t.p+"static/media/starwars.636b863d.png",o=function(){return Object(a.jsx)("div",{className:"ui internally celled centered grid",children:Object(a.jsxs)("h2",{className:"ui icon centered header",id:"headerTop",children:[Object(a.jsx)("img",{src:j,id:"headerLogo"}),Object(a.jsx)("div",{className:"content",children:"Memory Game"})]})})},b=function(e){var c=e.score,t=e.bestScore;return Object(a.jsxs)("div",{className:"ui centered grid",children:[Object(a.jsx)("div",{}),Object(a.jsx)("div",{children:Object(a.jsxs)("h3",{children:["Score: ",c]})}),Object(a.jsx)("div",{children:Object(a.jsxs)("h3",{children:["Best Score: ",t]})})]})},l=t(8),u=t(7),O=t.p+"static/media/bb8.317321ff.png",m=t.p+"static/media/ren.1e0db0d7.png",h=t.p+"static/media/stormtrooper.b0404485.png",p=t.p+"static/media/leia.a13d3abc.png",f=t.p+"static/media/chewbacca.d3504964.png",x=t.p+"static/media/r2d2.b73e16dc.png",g=t.p+"static/media/c3po.d81a815c.png",v=t.p+"static/media/obiwan.5402d34e.png",S=function(e){var c=e.score,t=e.setScore,n=e.bestScore,r=e.setBestScore,i=Object(s.useState)([0,1,2,3,4,5,6,7]),j=Object(d.a)(i,2),o=j[0],b=j[1],l=Object(s.useState)(!1),S=Object(d.a)(l,2),N=S[0],y=S[1],w=Object(s.useState)(["BB-8","KyloRen","Stormtrooper","Leia","Chewbacca","R2D2","C3PO","ObiWan"]),B=Object(d.a)(w,2),M=B[0],k=(B[1],Object(s.useState)([O,m,h,p,f,x,g,v])),C=Object(d.a)(k,2),E=C[0],J=(C[1],Object(s.useState)([!1,!1,!1,!1,!1,!1,!1,!1])),L=Object(d.a)(J,2),R=L[0],A=L[1],D=[],G=[!1,!1,!1,!1,!1,!1,!1,!1],I=function(){D=[];var e=[0,0,0,0,0,0,0,0];e.map((function(c,t){for(var a=Math.floor(8*Math.random()+0);D.includes(a);)a=Math.floor(8*Math.random()+0);return e[t]=a,D.push(e[t]),a})),b(D)};Object(s.useEffect)((function(){N||(I(),y(!0))}));var K=function(e){I(),R[e]?(n<c&&r(c),t(0),G=G.map((function(e){return!1})),A(G)):(t(c+1),(G=Object(u.a)(R))[e]=!0,A(G))};return o.map((function(e){return Object(a.jsx)("div",{className:"column",children:Object(a.jsxs)("div",{className:"ui fluid card",children:[Object(a.jsx)("div",{className:"image",children:Object(a.jsx)("img",{src:E[e],id:M[e],onClick:function(c){K(e)}})}),Object(a.jsx)("div",{className:"content",children:Object(a.jsx)("a",{className:"header ui centered",id:M[e],onClick:function(c){K(e)},children:M[e]})})]})})}))},N=function(e){return Object(a.jsx)("div",{className:"ui four column internally celled grid",children:Object(a.jsx)(S,Object(l.a)({},e))})},y=(t(14),function(){var e=Object(s.useState)(0),c=Object(d.a)(e,2),t=c[0],n=c[1],r=Object(s.useState)(0),i=Object(d.a)(r,2),j=i[0],l=i[1];return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(o,{}),Object(a.jsx)(b,{score:t,bestScore:j}),Object(a.jsx)(N,{score:t,setScore:n,bestScore:j,setBestScore:l})]})});i.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.283f0785.chunk.js.map