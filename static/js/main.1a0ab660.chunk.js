(window["webpackJsonpplanning-poker"]=window["webpackJsonpplanning-poker"]||[]).push([[0],{178:function(e,t,n){e.exports=n(331)},183:function(e,t,n){},331:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),i=n.n(o);n(183),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=n(95),l=n(24),s=Object(a.createContext)(null),u=n(11),m=r.a.createContext(null),p=n(21),d=n.n(p),f=n(33),b=n(59),g=n(44),h=n.n(g),v=(n(185),n(187),{apiKey:"AIzaSyDF1eF-t1aZ-GL843kh__tzckXTMJuZe0k",authDomain:"planningpokertest-eaa38.firebaseapp.com",databaseURL:"https://planningpokertest-eaa38.firebaseio.com",projectId:"planningpokertest-eaa38",storageBucket:"planningpokertest-eaa38.appspot.com",messagingSenderId:"174221390038",appId:"1:174221390038:web:bc91675229150b140fd977"}),E=function e(){var t=this;Object(b.a)(this,e),this.doSignIn=Object(f.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new h.a.auth.GithubAuthProvider,e.next=3,t.auth.signInWithPopup(n);case 3:case"end":return e.stop()}}),e)}))),this.doSignOut=function(){return t.auth.signOut()},this.sessions=function(){return t.firestore().collection("sessions")},this.session=function(e){return t.sessions().doc(e)},h.a.initializeApp(v),this.auth=h.a.auth(),this.firestore=h.a.firestore},O=n(29);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var k=function(e){var t=Object(a.useContext)(m),n=Object(a.useState)(!1),r=Object(u.a)(n,2),o=r[0],i=r[1],c=Object(a.useState)(!0),l=Object(u.a)(c,2),s=l[0],p=l[1],d=Object(a.useState)([]),f=Object(u.a)(d,2),b=f[0],g=f[1];return Object(a.useEffect)((function(){var n=t.firestore().collection(e).onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(n,!0).forEach((function(t){Object(O.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({id:e.id},e.data()))})),p(!1),g(t)}),(function(e){p(!1),i(e)}));return function(){return n()}}),[t,e]),{collection:b,error:o,isLoading:s}};function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var w=function(e){var t=Object(a.useContext)(m),n=Object(a.useState)(!1),r=Object(u.a)(n,2),o=r[0],i=r[1],c=Object(a.useState)(!0),l=Object(u.a)(c,2),s=l[0],p=l[1],d=Object(a.useState)(null),f=Object(u.a)(d,2),b=f[0],g=f[1];return Object(a.useEffect)((function(){var n=t.firestore().doc(e).onSnapshot((function(e){p(!1),g(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach((function(t){Object(O.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({id:e.id},e.data()))}),(function(e){p(!1),i(e)}));return function(){return n()}}),[t,e]),{error:o,isLoading:s,doc:b}},C=E,x=function(e){return e.match(/^([^@]*)@/)[1].replace(/\.|-/g," ")},P=function(){var e=Object(a.useContext)(m),t=Object(a.useState)((function(){var t=e.auth.currentUser;return{initializing:!t,user:t}})),n=Object(u.a)(t,2),r=n[0],o=n[1];function i(e){e&&(e.planningPokerUsername=x(e.email)),o({initializing:!1,user:e})}return Object(a.useEffect)((function(){var t=e.auth.onAuthStateChanged(i);return function(){return t()}}),[e]),r},S="/home",z=function(e){return"/session/".concat(e)},D=function(e,t){var n=Object(a.useContext)(m);Object(a.useEffect)((function(){var a=n.auth.onAuthStateChanged((function(n){e(n)||t.push("/")}));return function(){return a()}}),[n,e])},I={userIsSignedIn:function(e){return!!e}},U=n(350),A=n(349),F=n(346),L=n(347),T=n(339),_=Object(l.e)((function(e){var t=e.title,n=e.match,a=e.history,o=e.children,i=n.path!==S&&"/"!==n.path;return r.a.createElement(F.a,{full:!0},r.a.createElement(L.a,{fill:!0,align:"start",background:"light-4",pad:"small"},r.a.createElement(L.a,{direction:"row"},i&&r.a.createElement(L.a,{justify:"center",pad:"small"},r.a.createElement(A.a,{onClick:function(){return a.push(S)},icon:r.a.createElement(T.a,{color:"accent-2"})})),r.a.createElement(U.a,null,t)),o))})),B=function(){var e=Object(f.a)(d.a.mark((function e(t,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.doSignIn();case 2:n.push(S);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),H=function(e){e.push(S)},J=function(e){var t=e.history,n=Object(a.useContext)(s),o=Object(a.useContext)(m);return r.a.createElement(_,null,r.a.createElement(U.a,null,"Welcome to planning poker"," ",n?n.planningPokerUsername:""),n&&r.a.createElement(A.a,{primary:!0,label:"Start",onClick:H.bind(void 0,t)}),!n&&r.a.createElement(A.a,{primary:!0,label:"Sign in",onClick:B.bind(void 0,o,t)}))},W=n(351),R=n(352),V=n(340),Y=n(341),N=[1,2,3,5,8,13];var G=function(e){var t=e.session,n=Object(a.useContext)(m),o=Object(a.useContext)(s),i=t.users&&t.users.includes(o.planningPokerUsername),c=t.votes&&t.votes[o.planningPokerUsername];return r.a.createElement(L.a,{align:"start",gap:"small",background:"neutral-3",pad:"small"},r.a.createElement(U.a,{level:"2",margin:"none",size:"small"},"Your vote"),i&&!c&&r.a.createElement(W.a,null,"You have not voted on this issue yet. Please do so by clicking one of the estimates below"),i&&c&&r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{align:"center"},r.a.createElement(R.a,{color:"accent-1",size:"80px",weight:"bold"},c)),r.a.createElement(W.a,null,"You may change your vote by clicking another estimate below")),i&&r.a.createElement(L.a,{gap:"xxsmall",direction:"row"},N.map((function(e){return r.a.createElement(A.a,{key:"estimate_".concat(e),label:e,disabled:c===e,onClick:function(){return a=e,void n.session(t.id).update(Object(O.a)({},"votes.".concat(o.planningPokerUsername),a));var a}})}))),i?r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,{size:"small"},"To remove your vote and leave the session click below"),r.a.createElement(A.a,{color:"accent-3",label:"Leave",onClick:function(){n.session(t.id).update(Object(O.a)({users:n.firestore.FieldValue.arrayRemove(o.planningPokerUsername)},"votes.".concat(o.planningPokerUsername),n.firestore.FieldValue.delete()))},icon:r.a.createElement(V.a,null)})):r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,null,"You need to join the session before you may cast a vote. Join by clicking below"),r.a.createElement(A.a,{primary:!0,label:"Join",onClick:function(){n.session(t.id).update({users:n.firestore.FieldValue.arrayUnion(o.planningPokerUsername)})},icon:r.a.createElement(Y.a,null)})))},M=n(353);var Z=function(e){var t=e.session,n=Object(a.useContext)(m),o=Object(a.useContext)(s);return r.a.createElement(L.a,{align:"start",gap:"small",background:"neutral-4",pad:"small"},r.a.createElement(U.a,{level:"2",margin:"none",size:"small"},"Results"),r.a.createElement(W.a,null,"Voting results will appear below for each user"),r.a.createElement(M.a,{checked:t.reveal,label:"Reveal results",onChange:function(e){var a=e.target.checked;n.session(t.id).update({reveal:a})}}),r.a.createElement(L.a,{direction:"row",gap:"small",wrap:!0},t.users&&t.users.map((function(e){var n=function(e){return t.votes&&t.votes[e]}(e),a=e===o.planningPokerUsername?{color:"accent-3",size:"xsmall"}:{size:"xsmall"};return r.a.createElement(L.a,{key:"session_user_".concat(e),direction:"row",border:a,margin:{bottom:"small"}},r.a.createElement(L.a,{pad:"xsmall"},r.a.createElement(R.a,{size:"large"},e)),r.a.createElement(L.a,{pad:"xxsmall",justify:"center",width:"xxsmall",align:"center"},r.a.createElement(R.a,{size:"large",weight:"bold",color:"status-warning"},n&&t.reveal&&n,n&&!t.reveal&&r.a.createElement("span",{role:"img","aria-label":"waiting"},"\ud83e\udd10"),!n&&r.a.createElement("span",{role:"img","aria-label":"waiting"},"\ud83e\udd37"))))}))))},K=function(e){var t=e.history,n=e.match.params.id;D(I.userIsSignedIn,t);var a=w("sessions/".concat(n)),o=a.doc,i=a.isLoading,c=a.error,l=o?o.title:i?"Loading...":c?"Error":"";return r.a.createElement(_,{title:l},o&&r.a.createElement(L.a,{fill:"horizontal",direction:"row",gap:"small"},r.a.createElement(L.a,{width:{min:"400px"}},r.a.createElement(G,{session:o})),r.a.createElement(L.a,null,r.a.createElement(Z,{session:o}))))},X=n(354),$=n(343),q=n(344),Q=n(171),ee=n.n(Q),te=n(345),ne=n(172),ae=n(173),re=n(175),oe=n(61),ie=n(174),ce=n(348),le=function(e){function t(){return Object(b.a)(this,t),Object(re.a)(this,Object(oe.a)(t).apply(this,arguments))}return Object(ie.a)(t,e),Object(ae.a)(t,[{key:"componentDidMount",value:function(){this.startAutoHideTimeout()}},{key:"componentWillUnmount",value:function(){this.timeoutAutoHide&&clearTimeout(this.timeoutAutoHide)}},{key:"startAutoHideTimeout",value:function(){var e=this.props,t=e.duration,n=e.onClose;t&&(this.timeoutAutoHide=setTimeout((function(){n()}),1e3*t))}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.modal,a=e.position,o=e.full,i=Object(ne.a)(e,["children","modal","position","full"]);return r.a.createElement(ce.a,Object.assign({position:a||"top",full:o,modal:n,margin:"none",responsive:!0,plain:!n},i),t)}}]),t}(a.Component),se=function(e){var t=e.onClose,n=Object(a.useState)(""),o=Object(u.a)(n,2),i=o[0],c=o[1],l=Object(a.useContext)(m),p=Object(a.useContext)(s);function b(){return(b=Object(f.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.sessions().add({title:i,createdBy:p.planningPokerUsername,dateCreated:new Date});case 2:t();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(le,{position:"center",modal:!0},r.a.createElement(L.a,{align:"center"},r.a.createElement(L.a,{width:"medium",pad:"small",round:!1},r.a.createElement(U.a,{level:"4",margin:"small"},"Please enter a title"),r.a.createElement(te.a,{autoFocus:!0,placeholder:"type here",value:i,onChange:function(e){return c(e.target.value)}})),r.a.createElement(L.a,{width:"medium",margin:"none",direction:"row"},r.a.createElement(L.a,{basis:"1/2"},r.a.createElement(A.a,{plain:!0,color:"dark-1",onClick:function(){return b.apply(this,arguments)}},r.a.createElement(L.a,{pad:"small",align:"center",background:"status-ok"},"Ok"))),r.a.createElement(L.a,{basis:"1/2"},r.a.createElement(A.a,{plain:!0,color:"dark-1",onClick:t},r.a.createElement(L.a,{pad:"small",align:"center",background:"status-error"},"Cancel"))))))},ue=function(e){var t=e.onNavigateToSession,n=Object(a.useState)(!1),o=Object(u.a)(n,2),i=o[0],c=o[1],l=k("sessions"),s=l.collection,m=l.error;if(l.isLoading)return r.a.createElement(U.a,{level:"4"},"Loading...");if(m)return r.a.createElement(U.a,{level:"4"},"Error loading sessions");var p=ee()("title")(s);return r.a.createElement(X.a,{align:"start",gap:"small"},r.a.createElement(L.a,{align:"start"},r.a.createElement(A.a,{icon:r.a.createElement($.a,null),label:"Create New Session",onClick:function(){return c(!0)},color:"accent-4",primary:!0})),r.a.createElement(L.a,{wrap:!0,gap:"small",direction:"row"},p.map((function(e){return r.a.createElement(L.a,{key:"sessionlist_".concat(e.id),background:"neutral-2",pad:"small",margin:{bottom:"small"},onClick:function(){return t(e.id)}},r.a.createElement(U.a,{level:"3",margin:"none"},e.title),r.a.createElement(R.a,{size:"xsmall"},"Created by ",e.createdBy," ",e.dateCreated&&"".concat(Object(q.a)(e.dateCreated.toDate(),new Date)," ago")))}))),i&&r.a.createElement(se,{onClose:function(){return c(!1)}}))},me=function(e){var t=e.history;return D(I.userIsSignedIn,t),r.a.createElement(_,{title:"All Sessions"},r.a.createElement(ue,{onNavigateToSession:function(e){t.push(z(e))}}))},pe=function(){var e=P();return r.a.createElement(s.Provider,{value:e.user},r.a.createElement(c.a,{basename:"/"},r.a.createElement(l.a,{exact:!0,path:"/",component:J}),r.a.createElement(l.a,{path:S,component:me}),r.a.createElement(l.a,{path:"/session/:id",component:K})))};i.a.render(r.a.createElement(m.Provider,{value:new C},r.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[178,1,2]]]);
//# sourceMappingURL=main.1a0ab660.chunk.js.map