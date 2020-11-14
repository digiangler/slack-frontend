(this["webpackJsonpslack-react"]=this["webpackJsonpslack-react"]||[]).push([[0],{65:function(e,a,t){e.exports=t(94)},70:function(e,a,t){},71:function(e,a,t){},82:function(e,a,t){},83:function(e,a,t){},88:function(e,a,t){},90:function(e,a,t){},91:function(e,a,t){},92:function(e,a,t){},93:function(e,a,t){},94:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(24),r=t.n(l),o=t(13),s=t(32),i=t(5),m=(t(70),t(108)),u=t(109),d=(t(71),t(26)),E=t.n(d),h=(t(82),Object(n.createContext)()),p=function(e){var a=e.reducer,t=e.initialState,l=e.children;return c.a.createElement(h.Provider,{value:Object(n.useReducer)(a,t)},l)},f=function(){return Object(n.useContext)(h)},v=E.a.initializeApp({apiKey:"AIzaSyCzoxARW5b9mNyfqpjtwTGxogazTz3u3TI",authDomain:"slack-clone-front-end.firebaseapp.com",databaseURL:"https://slack-clone-front-end.firebaseio.com",projectId:"slack-clone-front-end",storageBucket:"slack-clone-front-end.appspot.com",messagingSenderId:"1051497611471",appId:"1:1051497611471:web:ebecb83fde5091fe2137ba",measurementId:"G-545049JVPN"}).firestore(),g=E.a.auth(),b=new E.a.auth.GoogleAuthProvider,_=v;var N=function(e){var a=e.channelName,t=e.channelId,l=Object(n.useState)(""),r=Object(o.a)(l,2),s=r[0],i=r[1],m=f(),u=Object(o.a)(m,1)[0].user;return c.a.createElement("div",{className:"chatInput"},c.a.createElement("form",null,c.a.createElement("input",{value:s,onChange:function(e){return i(e.target.value)},placeholder:"Message #".concat(null===a||void 0===a?void 0:a.toLowerCase())}),c.a.createElement("button",{type:"sumbit",onClick:function(e){e.preventDefault(),t&&_.collection("rooms").doc(t).collection("messages").add({message:s,timestamp:E.a.firestore.FieldValue.serverTimestamp(),user:u.displayName,userImage:u.photoURL}),i("")}},"SEND")))};t(83);var I=function(e){var a=e.message,t=e.timestamp,n=e.user,l=e.userImage;return c.a.createElement("div",{className:"message"},c.a.createElement("img",{src:l,alt:""}),c.a.createElement("div",{className:"message__info"},c.a.createElement("h4",null,n," ",c.a.createElement("span",{className:"message__timestamp"},new Date(null===t||void 0===t?void 0:t.toDate()).toUTCString())),c.a.createElement("p",null,a)))},O=function(){var e=Object(i.g)().roomId,a=Object(n.useState)(null),t=Object(o.a)(a,2),l=t[0],r=t[1],s=Object(n.useState)([]),d=Object(o.a)(s,2),E=d[0],h=d[1];return Object(n.useEffect)((function(){e&&_.collection("rooms").doc(e).onSnapshot((function(e){return r(e.data())})),_.collection("rooms").doc(e).collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){return h(e.docs.map((function(e){return e.data()})))}))}),[e]),c.a.createElement("div",{className:"chat"},c.a.createElement("div",{className:"chat__header"},c.a.createElement("div",{className:"chat__headerLeft"},c.a.createElement("h4",{className:"chat__channelName"},c.a.createElement("strong",null," #",null===l||void 0===l?void 0:l.name," "),c.a.createElement(m.a,null))),c.a.createElement("div",{className:"chat__headerRight"},c.a.createElement("p",null,c.a.createElement(u.a,null)," Details"))),c.a.createElement("div",{className:"chat__messages"},E.map((function(e){var a=e.message,t=e.timestamp,n=e.user,l=e.userImage;return c.a.createElement(I,{message:a,timestamp:t,user:n,userImage:l})}))),c.a.createElement(N,{channelName:null===l||void 0===l?void 0:l.name,channelId:e}))},j=t(111),S=t(48),k=t.n(S),w=t(49),C=t.n(w),y=t(50),R=t.n(y),T=(t(88),function(){var e=f(),a=Object(o.a)(e,1)[0].user;return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"header__left"},c.a.createElement(j.a,{className:"header__avatar",src:null===a||void 0===a?void 0:a.photoURL,alt:null===a||void 0===a?void 0:a.displayName}),c.a.createElement(k.a,null)),c.a.createElement("div",{className:"header__search"},c.a.createElement(C.a,null),c.a.createElement("input",{placeholder:"Search me"})),c.a.createElement("div",{className:"header__right"},c.a.createElement(R.a,null)))}),A=t(110),D=(t(90),t(40)),P="SET_USER",z=function(e,a){switch(console.log(a),a.type){case P:return Object(D.a)(Object(D.a)({},e),{},{user:a.user});default:return e}},x=function(){var e=f(),a=Object(o.a)(e,2),t=(a[0],a[1]);return c.a.createElement("div",{className:"login"},c.a.createElement("div",{className:"login__container"},c.a.createElement("img",{src:"https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png",alt:""}),c.a.createElement("h1",null,"Sign in to Clever Programmer"),c.a.createElement("p",null,"digi-angler.slack.com"),c.a.createElement(A.a,{onClick:function(){g.signInWithPopup(b).then((function(e){t({type:P,user:e.user})})).catch((function(e){alert(e.message)}))}},"Sign in with Google")))},L=t(51),U=t.n(L),W=t(52),B=t.n(W),G=t(53),F=t.n(G),J=t(54),M=t.n(J),V=t(55),q=t.n(V),K=t(56),Q=t.n(K),Y=t(57),$=t.n(Y),H=t(58),X=t.n(H),Z=t(59),ee=t.n(Z),ae=t(60),te=t.n(ae),ne=t(61),ce=t.n(ne),le=t(62),re=t.n(le),oe=(t(91),t(92),function(e){var a=e.Icon,t=e.id,n=e.addChannelOption,l=e.title,r=Object(i.f)();return c.a.createElement("div",{className:"sidebarOption",onClick:n?function(){var e=prompt("Please enter the channel name");e&&_.collection("rooms").add({name:e})}:function(){t?r.push("/room/".concat(t)):r.push(l)}},a&&c.a.createElement(a,{className:"sidebarOption__icon"}),a?c.a.createElement("h3",null,l):c.a.createElement("h3",{className:"sidebarOption__channel"},c.a.createElement("span",{className:"sidebarOption__hash"}," # ")," ",l))}),se=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){_.collection("rooms").onSnapshot((function(e){l(e.docs.map((function(e){return{id:e.id,name:e.data().name}})))}))}),[]),c.a.createElement("div",{className:"sidebar"},c.a.createElement("div",{className:"sidebar__header"},c.a.createElement("div",{className:"sidebar__info"},c.a.createElement("h2",null,"Digi-Angler"),c.a.createElement("h3",null,c.a.createElement(U.a,null),"Rafeh Qazi")),c.a.createElement(B.a,null)),c.a.createElement(oe,{Icon:F.a,title:"Threads"}),c.a.createElement(oe,{Icon:M.a,title:"Mentions & reactions"}),c.a.createElement(oe,{Icon:q.a,title:"Saved items"}),c.a.createElement(oe,{Icon:Q.a,title:"Channel browser"}),c.a.createElement(oe,{Icon:$.a,title:"People & user groups"}),c.a.createElement(oe,{Icon:X.a,title:"Apps"}),c.a.createElement(oe,{Icon:ee.a,title:"File browser"}),c.a.createElement(oe,{Icon:te.a,title:"Show less"}),c.a.createElement(oe,{title:"YouTube"}),c.a.createElement("hr",null),c.a.createElement(oe,{Icon:ce.a,title:"Channels"}),c.a.createElement("hr",null),c.a.createElement(oe,{Icon:re.a,addChannelOption:!0,title:"Add Channel"}),t.map((function(e){return c.a.createElement(oe,{title:e.name,id:e.id})})))};var ie=function(){var e=f(),a=Object(o.a)(e,2),t=a[0].user;return a[1],console.log(t),c.a.createElement("div",{className:"app"},c.a.createElement(s.a,null,t?c.a.createElement(c.a.Fragment,null,c.a.createElement(T,null),c.a.createElement("div",{className:"app__body"},c.a.createElement(se,null),c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/room/:roomId"},c.a.createElement(O,null)),c.a.createElement(i.a,{path:"/"},c.a.createElement("h1",null,"Welcome"))))):c.a.createElement(x,null)))};t(93),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,{initialState:{user:null},reducer:z},c.a.createElement(ie,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[65,1,2]]]);
//# sourceMappingURL=main.00ba5599.chunk.js.map