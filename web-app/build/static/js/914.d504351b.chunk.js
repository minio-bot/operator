"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[914],{76914:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var r=a(72791),o=a(57689),i=a(81207),n=a(25787),s=a(11135),l=a(62666),c=a(35527),d=a(61889),g=a(20890),p=a(75952),h=a(15146),m=a(80184);const u=(0,n.Z)((e=>(0,s.Z)({paper:{borderRadius:8,display:"flex",flexDirection:"column",alignItems:"center",width:800,height:424,margin:"auto",position:"absolute",top:"50%",left:"50%",marginLeft:-400,marginTop:-212,"&.MuiPaper-root":{borderRadius:8}},mainContainer:{position:"relative",height:424},theOcean:{borderTopLeftRadius:8,borderBottomLeftRadius:8,background:"transparent linear-gradient(to bottom, #073052 0%,#05122b 100%); 0% 0% no-repeat padding-box;"},oceanBg:{backgroundImage:"url(/images/BG_Illustration.svg)",backgroundRepeat:"no-repeat",backgroundPosition:"bottom left",height:"100%",width:324},theLogin:{padding:"40px 45px 20px 45px"},extraDetailsContainer:{fontStyle:"italic",color:"#9C9C9C",transition:"all .2s ease-in-out",padding:"0 5px",marginTop:5,overflow:"auto"},errorLabel:{color:"#000",fontSize:18,fontWeight:500,marginLeft:5},simpleError:{marginTop:5,padding:"2px 5px",fontSize:16,color:"#000"},messageIcon:{color:"#C72C48",display:"flex","& svg":{width:32,height:32}},errorTitle:{display:"flex",alignItems:"center"}})))((e=>{let{classes:t}=e;const a=(0,o.s0)(),[n,s]=(0,r.useState)(""),[u,x]=(0,r.useState)(""),[f,b]=(0,r.useState)(!0);return(0,r.useEffect)((()=>{if(f){const e=window.location.search,t=new URLSearchParams(e),r=t.get("code"),o=t.get("state"),n=t.get("error"),l=t.get("errorDescription");n||l?(s(n||""),x(l||""),b(!1)):i.Z.invoke("POST","/api/v1/login/oauth2/auth",{code:r,state:o}).then((()=>{let e="/";localStorage.getItem("redirect-path")&&""!==localStorage.getItem("redirect-path")&&(e="".concat(localStorage.getItem("redirect-path")),localStorage.setItem("redirect-path","")),o&&localStorage.setItem("auth-state",o),b(!1),a(e)})).catch((e=>{s(e.errorMessage),x(e.detailedError),b(!1)}))}}),[f,a]),""!==n||""!==u?(0,m.jsx)(r.Fragment,{children:(0,m.jsx)(c.Z,{className:t.paper,children:(0,m.jsxs)(d.ZP,{container:!0,className:t.mainContainer,children:[(0,m.jsx)(d.ZP,{item:!0,xs:7,className:t.theOcean,children:(0,m.jsx)("div",{className:t.oceanBg})}),(0,m.jsxs)(d.ZP,{item:!0,xs:5,className:t.theLogin,children:[(0,m.jsxs)("div",{className:t.errorTitle,children:[(0,m.jsx)("span",{className:t.messageIcon,children:(0,m.jsx)(h.Z,{})}),(0,m.jsx)("span",{className:t.errorLabel,children:"Error from IDP"})]}),(0,m.jsx)("div",{className:t.simpleError,children:n}),(0,m.jsx)(g.Z,{variant:"body1",gutterBottom:!0,component:"div",className:t.extraDetailsContainer,children:u}),(0,m.jsx)(p.zxk,{id:"back-to-login",onClick:()=>{window.location.href="".concat(l.F,"login")},type:"submit",variant:"callAction",fullWidth:!0,children:"Back to Login"})]})]})})}):null}))},15146:(e,t,a)=>{var r=a(64836);t.Z=void 0;var o=r(a(45649)),i=a(80184),n=(0,o.default)((0,i.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline");t.Z=n}}]);
//# sourceMappingURL=914.d504351b.chunk.js.map