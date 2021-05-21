(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[3],{30:function(t,e,n){t.exports={email:"UserMenu_email__2lcZk",btn:"UserMenu_btn__1uY27"}},31:function(t,e,n){"use strict";n.d(e,"b",(function(){return m})),n.d(e,"d",(function(){return S})),n.d(e,"a",(function(){return g})),n.d(e,"c",(function(){return A}));var r=n(8),c=n.n(r),a=n(18),u=n(14),s=n.n(u),o=n(2),i=Object(o.b)("contacts/fetchContactRequest"),b=Object(o.b)("contacts/fetchContactSuccess"),l=Object(o.b)("contacts/fetchContactError"),j=Object(o.b)("contacts/addContactRequest"),d=Object(o.b)("contacts/addContactSuccess"),h=Object(o.b)("contacts/addContactError"),O=Object(o.b)("contacts/deleteContactRequest"),f=Object(o.b)("contacts/deleteContactSuccess"),p=Object(o.b)("contacts/deleteContactError"),g=Object(o.b)("contacts/filter");s.a.defaults.baseURL="https://connections-api.herokuapp.com";var v,m={fetchContacts:function(){return function(){var t=Object(a.a)(c.a.mark((function t(e){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(i()),t.prev=1,t.next=4,s.a.get("/contacts");case 4:n=t.sent,r=n.data,e(b(r)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(l(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},addContact:function(t){var e=t.name,n=t.number;return function(){var t=Object(a.a)(c.a.mark((function t(r){var a,u,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={name:e,number:n},r(j()),t.prev=2,t.next=5,s.a.post("/contacts",a);case 5:u=t.sent,o=u.data,r(d(o)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),r(h(t.t0));case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()},deleteContact:function(t){return function(){var e=Object(a.a)(c.a.mark((function e(n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(O()),e.prev=1,e.next=4,s.a.delete("/contacts/".concat(t));case 4:n(f(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(p(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()}},x=n(23),k=function(t){return t.contacts.filter},C=function(t){return t.contacts.items},S={getFilter:k,getContacts:C,getVisibleContacts:Object(x.a)([C,k],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}))},_=n(4),y=n(25),E=n(6),U=Object(o.c)([],(v={},Object(_.a)(v,d,(function(t,e){var n=e.payload;return[].concat(Object(y.a)(t),[n])})),Object(_.a)(v,f,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),Object(_.a)(v,b,(function(t,e){return e.payload})),v)),w=Object(o.c)("",Object(_.a)({},g,(function(t,e){return e.payload}))),A=Object(E.b)({items:U,filter:w})},36:function(t,e,n){},48:function(t,e,n){t.exports={header:"AppBar_header__2F-LS"}},49:function(t,e,n){t.exports={container:"Container_container__3Snq1"}},87:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(22),u=n.n(a),s=n(10),o=n(16),i=n(47),b=n(32),l=n(33),j=n(35),d=n(34),h=n(5),O={home:"/",register:"/register",login:"/login",contacts:"/contacts"},f=(n(36),n(9)),p=n(1),g=Object(s.b)((function(t){return{isAuthenticated:f.c.getIsAuthenticated(t)}}))((function(t){var e=t.isAuthenticated;return Object(p.jsxs)("nav",{children:[Object(p.jsx)(o.b,{className:"header__link",activeClassName:"header__link-active",exact:!0,to:O.home,children:"\u0413\u043e\u043b\u043e\u0432\u043d\u0430"}),e&&Object(p.jsx)(o.b,{className:"header__link",activeClassName:"header__link-active",to:O.contacts,children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438"})]})})),v=n(30),m=n.n(v),x={onLogout:f.a.logOut},k=Object(s.b)((function(t){return{email:f.c.getUserEmail(t)}}),x)((function(t){var e=t.email,n=t.onLogout;return Object(p.jsxs)("div",{children:[Object(p.jsx)("span",{className:m.a.email,children:e}),Object(p.jsx)("button",{type:"button",className:m.a.btn,onClick:n,children:"\u0412\u0438\u0439\u0442\u0438"})]})})),C=function(t){return Object(p.jsxs)("nav",{children:[Object(p.jsx)(o.b,{className:"header__link",activeClassName:"header__link-active",exact:!0,to:O.register,children:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f"}),Object(p.jsx)(o.b,{className:"header__link",activeClassName:"header__link-active",to:O.login,children:"\u0412\u0445\u0456\u0434"})]})},S=n(48),_=n.n(S),y=Object(s.b)((function(t){return{isAuthenticated:f.c.getIsAuthenticated(t)}}))((function(t){var e=t.isAuthenticated;return Object(p.jsxs)("header",{className:_.a.header,children:[Object(p.jsx)(g,{}),e?Object(p.jsx)(k,{}):Object(p.jsx)(C,{})]})})),E=n(49),U=n.n(E),w=function(t){var e=t.children;return Object(p.jsx)("div",{className:U.a.container,children:e})},A=n(17),R=n(24),q=Object(s.b)((function(t){return{isAuthenticated:f.c.getIsAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,r=t.redirectTo,c=Object(R.a)(t,["component","isAuthenticated","redirectTo"]);return Object(p.jsx)(h.b,Object(A.a)(Object(A.a)({},c),{},{render:function(t){return n?Object(p.jsx)(e,Object(A.a)({},t)):Object(p.jsx)(h.a,{to:r})}}))})),N=Object(s.b)((function(t){return{isAuthenticated:f.c.getIsAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,r=t.redirectTo,c=Object(R.a)(t,["component","isAuthenticated","redirectTo"]);return Object(p.jsx)(h.b,Object(A.a)(Object(A.a)({},c),{},{render:function(t){return n&&c.restricted?Object(p.jsx)(h.a,{to:r}):Object(p.jsx)(e,Object(A.a)({},t))}}))})),T=Object(r.lazy)((function(){return n.e(1).then(n.bind(null,92))})),z=Object(r.lazy)((function(){return n.e(0).then(n.bind(null,95))})),I=Object(r.lazy)((function(){return n.e(2).then(n.bind(null,93))})),L=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,94))})),M=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){return Object(b.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.onGetCurretnUser()}},{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(w,{children:[Object(p.jsx)(y,{}),Object(p.jsx)(r.Suspense,{fallback:Object(p.jsx)("h1",{children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f..."}),children:Object(p.jsxs)(h.d,{children:[Object(p.jsx)(N,{exact:!0,path:O.home,component:T}),Object(p.jsx)(N,{path:O.login,restricted:!0,redirectTo:O.contacts,component:I}),Object(p.jsx)(N,{path:O.register,restricted:!0,redirectTo:O.contacts,component:L}),Object(p.jsx)(q,{path:O.contacts,redirectTo:O.login,component:z})]})})]})})}}]),n}(r.Component),B={onGetCurretnUser:f.a.getCurrentUser},F=Object(s.b)(null,B)(M),G=n(25),J=n(2),D=n(31),V=n(50),Y=n.n(V),Z=n(19),H=n(51),K=n.n(H),P=[].concat(Object(G.a)(Object(J.d)({serializableCheck:{ignoredActions:[Z.a,Z.f,Z.b,Z.c,Z.d,Z.e]}})),[Y.a]),Q={key:"auth",storage:K.a,whitelist:["token"]},W=Object(J.a)({reducer:{auth:Object(Z.g)(Q,f.b),contacts:D.c},middleware:P,devTools:!1}),X={store:W,persistor:Object(Z.h)(W)};n(86);u.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(s.a,{store:X.store,children:Object(p.jsx)(i.a,{loading:null,persistor:X.persistor,children:Object(p.jsx)(o.a,{children:Object(p.jsx)(F,{})})})})}),document.getElementById("root"))},9:function(t,e,n){"use strict";n.d(e,"b",(function(){return C})),n.d(e,"a",(function(){return R})),n.d(e,"c",(function(){return q}));var r,c,a,u,s=n(2),o=Object(s.b)("auth/registerRequest"),i=Object(s.b)("auth/registerSuccess"),b=Object(s.b)("auth/registerError"),l=Object(s.b)("auth/loginRequest"),j=Object(s.b)("auth/loginSuccess"),d=Object(s.b)("auth/loginError"),h={registerRequest:o,registerSuccess:i,registerError:b,logoutRequest:Object(s.b)("auth/logoutRequest"),logoutSuccess:Object(s.b)("auth/logoutSuccess"),logoutError:Object(s.b)("auth/logoutError"),loginRequest:l,loginSuccess:j,loginError:d,getCurrentUserRequest:Object(s.b)("auth/getCurrentUserRequest"),getCurrentUserSuccess:Object(s.b)("auth/getCurrentUserSuccess"),getCurrentUserError:Object(s.b)("auth/getCurrentUserError")},O=n(4),f=n(6),p={name:null,email:null},g=Object(s.c)(p,(r={},Object(O.a)(r,h.registerSuccess,(function(t,e){return e.payload.user})),Object(O.a)(r,h.loginSuccess,(function(t,e){return e.payload.user})),Object(O.a)(r,h.logoutSuccess,(function(){return p})),Object(O.a)(r,h.getCurrentUserSuccess,(function(t,e){return e.payload})),r)),v=Object(s.c)(null,(c={},Object(O.a)(c,h.registerSuccess,(function(t,e){return e.payload.token})),Object(O.a)(c,h.loginSuccess,(function(t,e){return e.payload.token})),Object(O.a)(c,h.logoutSuccess,(function(){return null})),c)),m=function(t,e){return e.payload},x=Object(s.c)(null,(a={},Object(O.a)(a,h.registerError,m),Object(O.a)(a,h.loginError,m),Object(O.a)(a,h.logoutError,m),Object(O.a)(a,h.getCurrentUserError,m),a)),k=Object(s.c)(!1,(u={},Object(O.a)(u,h.registerSuccess,(function(){return!0})),Object(O.a)(u,h.loginSuccess,(function(){return!0})),Object(O.a)(u,h.getCurrentUserSuccess,(function(){return!0})),Object(O.a)(u,h.registerError,(function(){return!1})),Object(O.a)(u,h.loginError,(function(){return!1})),Object(O.a)(u,h.getCurrentUserError,(function(){return!1})),Object(O.a)(u,h.logoutSuccess,(function(){return!1})),u)),C=Object(f.b)({user:g,isAuthenticated:k,token:v,error:x}),S=n(8),_=n.n(S),y=n(18),E=n(14),U=n.n(E);U.a.defaults.baseURL="https://connections-api.herokuapp.com";var w=function(t){U.a.defaults.headers.common.Authorization="Bearer ".concat(t)},A=function(){U.a.defaults.headers.common.Authorization=""},R={register:function(t){return function(){var e=Object(y.a)(_.a.mark((function e(n){var r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(h.registerRequest()),e.prev=1,e.next=4,U.a.post("/users/signup",t);case 4:r=e.sent,w(r.data.token),n(h.registerSuccess(r.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(h.registerError(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},logIn:function(t){return function(){var e=Object(y.a)(_.a.mark((function e(n){var r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(h.loginRequest()),e.prev=1,e.next=4,U.a.post("/users/login",t);case 4:r=e.sent,w(r.data.token),n(h.loginSuccess(r.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(h.loginError(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},logOut:function(){return function(){var t=Object(y.a)(_.a.mark((function t(e){return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(h.logoutRequest()),t.prev=1,t.next=4,U.a.post("/users/logout");case 4:A(),e(h.logoutSuccess()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(h.logoutError(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var t=Object(y.a)(_.a.mark((function t(e,n){var r,c,a;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n(),c=r.auth.token){t.next=3;break}return t.abrupt("return");case 3:return w(c),e(h.getCurrentUserRequest()),t.prev=5,t.next=8,U.a.get("/users/current");case 8:a=t.sent,e(h.getCurrentUserSuccess(a.data)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),e(h.getCurrentUserError(t.t0.message));case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e,n){return t.apply(this,arguments)}}()}},q={getIsAuthenticated:function(t){return t.auth.isAuthenticated},getUserEmail:function(t){return t.auth.user.email}}}},[[87,5,6]]]);
//# sourceMappingURL=main.5b3393be.chunk.js.map