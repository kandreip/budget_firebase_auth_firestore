(this["webpackJsonplogin-firebase"]=this["webpackJsonplogin-firebase"]||[]).push([[0],{190:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n.n(c),s=n(69),r=n.n(s),i=n(10),o=(n(79),n(73).a.initializeApp({apiKey:"AIzaSyCMiUUPftUKnSN0nLjYSKFg0tJmVMYZQ6w",authDomain:"login-4c63e.firebaseapp.com",projectId:"login-4c63e",storageBucket:"login-4c63e.appspot.com",messagingSenderId:"174267879071",appId:"1:174267879071:web:a9058c421450fdbe4adcaa"})),l=n(2),u=function(e){var t=e.email,n=e.setEmail,c=e.password,a=e.setPassword,s=e.handleLogin,r=e.handleSignup,i=e.hasAccount,o=e.setHasAccount,u=e.emailError,d=e.passwordError;return Object(l.jsx)("section",{className:"login",children:Object(l.jsxs)("div",{className:"loginContainer",children:[Object(l.jsx)("label",{children:"User Name"}),Object(l.jsx)("input",{type:"text",required:!0,value:t,onChange:function(e){return n(e.target.value)}}),Object(l.jsx)("p",{className:"errorMsg",children:u}),Object(l.jsx)("label",{children:"Password"}),Object(l.jsx)("input",{type:"password",required:!0,value:c,onChange:function(e){return a(e.target.value)}}),Object(l.jsx)("p",{className:"errorMsg",children:d}),Object(l.jsx)("div",{className:"btnContainer",children:i?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{className:"signin",onClick:s,children:"Sign in"}),Object(l.jsxs)("p",{children:["Don't have an account ?"," ",Object(l.jsx)("span",{onClick:function(){return o(!i)},children:"Sign up"})]})]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{className:"signin",onClick:r,children:"Sign up"}),Object(l.jsxs)("p",{children:["Have an account ?"," ",Object(l.jsx)("span",{onClick:function(){return o(!i)},children:"Sign in"})]})]})})]})})},d=n(17),j=function(e){var t=e.onSave,n=Object(c.useState)(""),a=Object(i.a)(n,2),s=a[0],r=a[1],o=Object(c.useState)(""),u=Object(i.a)(o,2),d=u[0],j=u[1],b=Object(c.useState)("income"),h=Object(i.a)(b,2),O=h[0],m=h[1];return Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),isNaN(d)?alert("Cost value must be a number :)"):s.trim().length>0&&(t(s,d,O),r(""),j(""),m("income"))},children:[Object(l.jsxs)("div",{className:"add-transaction",children:[Object(l.jsxs)("div",{className:"add-label",children:[Object(l.jsx)("label",{children:"Name:"}),Object(l.jsx)("input",{className:"label-input",type:"text",placeholder:"type to add name...",value:s,onChange:function(e){return r(e.currentTarget.value)}})]}),Object(l.jsxs)("div",{className:"add-label",children:[Object(l.jsx)("label",{children:"Cost:"}),Object(l.jsx)("input",{className:"label-input",type:"text",placeholder:"type to add cost...",value:d,onChange:function(e){return j(e.target.value)}})]}),Object(l.jsxs)("div",{className:"add-label",children:[Object(l.jsx)("label",{children:"Type:"}),Object(l.jsxs)("select",{className:"label-select",value:O,onChange:function(e){var t=e.target.value;m(t)},children:[Object(l.jsx)("option",{value:"expense",children:"expense"}),Object(l.jsx)("option",{value:"income",children:"income"})]})]})]}),Object(l.jsx)("button",{className:"save",type:"submit",children:"Add Transaction"})]})},b=n(74),h=function(e){var t=e.transaction,n=e.onTime;return Object(l.jsx)("div",{className:"transactions",children:t.map((function(e){return Object(l.jsxs)("div",{className:e.type,children:[Object(l.jsxs)("div",{className:"transaction-name",children:[" ",e.name]}),Object(l.jsxs)("div",{className:"transaction-cost",children:["\xa3 ",e.cost,Object(l.jsx)(b.a,{className:"delete",onClick:function(){return n(e.id)}})]})]},e.id)}))})},O=function(e){var t=e.handleSearchText;return Object(l.jsx)("div",{className:"search",children:Object(l.jsx)("input",{onChange:function(e){return t(e.target.value)},type:"text",placeholder:"type to search..."})})},m=n(72),p=function(e){var t=e.remainingCalc,n=e.spentCalc;return Object(l.jsx)("div",{children:Object(l.jsx)(m.a,{data:{labels:["Remaining","Spent so far"],datasets:[{data:[t(),n()],backgroundColor:["rgb(218, 201, 110)","rgb(207, 46, 18)"],borderColor:["rgb(218, 201, 110)","rgb(207, 46, 18)"],borderWidth:1}]},height:400,width:600})})},x=function(e){var t=e.budgetCalc;return Object(l.jsxs)("div",{className:"budget",children:["Budget: \xa3",t()]})},f=function(e){var t=e.spentCalc;return Object(l.jsxs)("div",{className:"spent",children:["Spent so far: \xa3",t()]})},g=function(e){var t=e.remainingCalc;return Object(l.jsxs)("div",{className:"remaining",children:["Remaining: \xa3",t()]})},v=function(e){var t=e.handleLogout,n=Object(c.useState)([]),a=Object(i.a)(n,2),s=a[0],r=a[1],u=Object(c.useState)(""),b=Object(i.a)(u,2),m=b[0],v=b[1];Object(c.useEffect)((function(){var e=o.firestore().collection("users").doc(o.auth().currentUser.uid).collection("transactionsList").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(d.a)({id:e.id},e.data())}));r(t)}));return function(){return e()}}),[]);var N=function(){if(s)return s.map((function(e){return e.cost})).reduce((function(e,t){return e+t}),0)},C=function(){if(s)return s.filter((function(e){return"expense"===e.type})).map((function(e){return e.cost})).reduce((function(e,t){return e-t}),0)},S=o.auth().currentUser.email,w=S.substring(0,S.indexOf("@")),y=w.charAt(0).toUpperCase()+w.slice(1);return Object(l.jsxs)("section",{className:"hero",children:[Object(l.jsxs)("nav",{children:[Object(l.jsxs)("h2",{children:["Welcome ",y]}),Object(l.jsx)("button",{className:"logout",onClick:t,children:"Logout"})]}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("div",{className:"header",children:Object(l.jsx)("div",{className:"title",children:Object(l.jsx)("h1",{children:"My budget monitor"})})}),Object(l.jsxs)("div",{className:"status",children:[Object(l.jsx)(x,{budgetCalc:function(){if(s)return s.filter((function(e){return"income"===e.type})).map((function(e){return e.cost})).reduce((function(e,t){return e+t}),0)}}),Object(l.jsx)(g,{remainingCalc:N}),Object(l.jsx)(f,{spentCalc:C})]}),Object(l.jsx)("div",{className:"chart",children:Object(l.jsx)(p,{remainingCalc:N,spentCalc:C})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{className:"title",children:"Transactions"}),Object(l.jsx)(O,{handleSearchText:v}),Object(l.jsx)(h,{transaction:s.filter((function(e){return e.name.toLocaleLowerCase().includes(m)})),onTime:function(e){o.firestore().collection("users").doc(o.auth().currentUser.uid).collection("transactionsList").doc(e).delete()}})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{className:"title",children:"Add Transaction"}),Object(l.jsx)(j,{onSave:function(e,t,n){var c;"expense"===n?c=-parseInt(t):"income"===n&&(c=parseInt(t)),o.firestore().collection("users").doc(o.auth().currentUser.uid).collection("transactionsList").add({name:e,cost:c,type:n})}})]})]})]})};var N=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(i.a)(s,2),d=r[0],j=r[1],b=Object(c.useState)(""),h=Object(i.a)(b,2),O=h[0],m=h[1],p=Object(c.useState)(""),x=Object(i.a)(p,2),f=x[0],g=x[1],N=Object(c.useState)(""),C=Object(i.a)(N,2),S=C[0],w=C[1],y=Object(c.useState)(!1),k=Object(i.a)(y,2),A=k[0],E=k[1],L=function(){g(""),w("")},U=function(){o.auth().onAuthStateChanged((function(e){e?(j(""),m(""),a(e)):a("")}))};return Object(c.useEffect)((function(){U()}),[]),Object(l.jsx)("div",{children:n?Object(l.jsx)(v,{handleLogout:function(){o.auth().signOut()}}):Object(l.jsx)(u,{email:d,setEmail:j,password:O,setPassword:m,handleLogin:function(){L(),o.auth().signInWithEmailAndPassword(d,O).catch((function(e){switch(e.code){case"auth/invalid-email":case"auth/user-disabled":case"auth/user-not-found":g(e.message);break;case"auth/wrong-password":w(e.message)}}))},handleSignup:function(){L(),o.auth().createUserWithEmailAndPassword(d,O).catch((function(e){switch(e.code){case"auth/email-already-in-use":case"auth/invalid-email":g(e.message);break;case"auth/weak-password":w(e.message)}}))},hasAccount:A,em:!0,setHasAccount:E,emailError:f,passwordError:S})})};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root"))},79:function(e,t,n){}},[[190,1,2]]]);
//# sourceMappingURL=main.d0ad7a4a.chunk.js.map