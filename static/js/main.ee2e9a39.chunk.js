(this["webpackJsonpplanning-poker"]=this["webpackJsonpplanning-poker"]||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(51),c=n.n(o);n(86),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=n(40),u=n(14),s=n(32),f=n(12),l=n(53),p=function(){return a.a.createElement(l.a,{title:"Loading..."})},b=a.a.lazy((function(){return n.e(6).then(n.bind(null,370))})),h=a.a.lazy((function(){return n.e(4).then(n.bind(null,374))})),d=a.a.lazy((function(){return Promise.all([n.e(2),n.e(5)]).then(n.bind(null,376))})),O=function(){var e=Object(s.c)();return a.a.createElement(s.a.Provider,{value:e.user},a.a.createElement(i.a,{basename:"/"},a.a.createElement(a.a.Suspense,{fallback:a.a.createElement(p,null)},a.a.createElement(u.a,{exact:!0,path:f.b,component:b}),a.a.createElement(u.a,{path:f.a,component:d}),a.a.createElement(u.a,{path:f.c,component:h}))))},j=n(17);c.a.render(a.a.createElement(j.a.Provider,{value:new j.b},a.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},12:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return c}));var r="/",a="/home",o="/session/:id",c=function(e){return"/session/".concat(e)}},17:function(e,t,n){"use strict";var r=n(0),a=n.n(r).a.createContext(null),o=n(33),c=n.n(o),i=n(52),u=n(56),s=n(25),f=n.n(s),l=(n(88),n(90),{apiKey:"AIzaSyDF1eF-t1aZ-GL843kh__tzckXTMJuZe0k",authDomain:"planningpokertest-eaa38.firebaseapp.com",databaseURL:"https://planningpokertest-eaa38.firebaseio.com",projectId:"planningpokertest-eaa38",storageBucket:"planningpokertest-eaa38.appspot.com",messagingSenderId:"174221390038",appId:"oz5d7npEf88QMDbGCXiDd3x6FKQuWiRt"}),p=function e(){var t=this;Object(u.a)(this,e),this.doSignIn=Object(i.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new f.a.auth.GithubAuthProvider,e.next=3,t.auth.signInWithPopup(n);case 3:case"end":return e.stop()}}),e)}))),this.doSignOut=function(){return t.auth.signOut()},this.sessions=function(){return t.firestore().collection("sessions")},this.session=function(e){return t.sessions().doc(e)},f.a.initializeApp(l),this.auth=f.a.auth(),this.firestore=f.a.firestore},b=n(27),h=n(11);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var O=function(e){var t=Object(r.useContext)(a),n=Object(r.useState)(!1),o=Object(h.a)(n,2),c=o[0],i=o[1],u=Object(r.useState)(!0),s=Object(h.a)(u,2),f=s[0],l=s[1],p=Object(r.useState)([]),O=Object(h.a)(p,2),j=O[0],m=O[1];return Object(r.useEffect)((function(){var n=t.firestore().collection(e).onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({id:e.id},e.data()))})),l(!1),m(t)}),(function(e){l(!1),i(e)}));return function(){return n()}}),[t,e]),{collection:j,error:c,isLoading:f}};function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var m=function(e){var t=Object(r.useContext)(a),n=Object(r.useState)(!1),o=Object(h.a)(n,2),c=o[0],i=o[1],u=Object(r.useState)(!0),s=Object(h.a)(u,2),f=s[0],l=s[1],p=Object(r.useState)(null),d=Object(h.a)(p,2),O=d[0],m=d[1];return Object(r.useEffect)((function(){var n=t.firestore().doc(e).onSnapshot((function(e){l(!1),m(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({id:e.id},e.data()))}),(function(e){l(!1),i(e)}));return function(){return n()}}),[t,e]),{error:c,isLoading:f,doc:O}};n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return m}));t.b=p},32:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(null),o=n(11),c=n(17),i=function(e){return e.match(/^([^@]*)@/)[1].replace(/\.|-/g," ")},u=function(){var e=Object(r.useContext)(c.a),t=Object(r.useState)((function(){var t=e.auth.currentUser;return{initializing:!t,user:t}})),n=Object(o.a)(t,2),a=n[0],u=n[1];function s(e){e&&(e.planningPokerUsername=i(e.email)),u({initializing:!1,user:e})}return Object(r.useEffect)((function(){var t=e.auth.onAuthStateChanged(s);return function(){return t()}}),[e]),a},s=n(12),f=function(e,t){var n=Object(r.useContext)(c.a);Object(r.useEffect)((function(){var r=n.auth.onAuthStateChanged((function(n){e(n)||t.push(s.b)}));return function(){return r()}}),[n,e])},l={userIsSignedIn:function(e){return!!e}};n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return f})),n.d(t,"b",(function(){return l}))},53:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(104),c=n(49),i=n(105),u=n(106),s=n(103),f=n(14),l=n(12);t.a=Object(f.e)((function(e){var t=e.title,n=e.match,r=e.history,f=e.children,p=n.path!==l.a&&n.path!==l.b;return a.a.createElement(o.a,{full:!0},a.a.createElement(c.a,{fill:!0,overflow:"auto",align:"start",background:"light-4",pad:"small"},a.a.createElement(c.a,{direction:"row",height:{min:"auto"}},p&&a.a.createElement(c.a,{justify:"center",pad:"small"},a.a.createElement(i.a,{onClick:function(){return r.push(l.a)},icon:a.a.createElement(s.a,{color:"accent-2"})})),t&&a.a.createElement(u.a,null,t)),f))}))},81:function(e,t,n){e.exports=n(102)},86:function(e,t,n){}},[[81,1,3]]]);
//# sourceMappingURL=main.ee2e9a39.chunk.js.map