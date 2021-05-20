(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[3],{14:function(e,t,n){"use strict";n.d(t,"b",(function(){return x})),n.d(t,"a",(function(){return U})),n.d(t,"c",(function(){return R}));var r,c,a,s=n(2),u=Object(s.b)("auth/registerRequest"),o=Object(s.b)("auth/registerSuccess"),i=Object(s.b)("auth/registerError"),l=Object(s.b)("auth/loginRequest"),b=Object(s.b)("auth/loginSuccess"),j=Object(s.b)("auth/loginError"),h={registerRequest:u,registerSuccess:o,registerError:i,logoutRequest:Object(s.b)("auth/logoutRequest"),logoutSuccess:Object(s.b)("auth/logoutSuccess"),logoutError:Object(s.b)("auth/logoutError"),loginRequest:l,loginSuccess:b,loginError:j,getCurrentUserRequest:Object(s.b)("auth/getCurrentUserRequest"),getCurrentUserSuccess:Object(s.b)("auth/getCurrentUserSuccess"),getCurrentUserError:Object(s.b)("auth/getCurrentUserError")},d=n(5),f=n(6),p={name:null,email:null},O=Object(s.c)(p,(r={},Object(d.a)(r,h.registerSuccess,(function(e,t){return t.payload.user})),Object(d.a)(r,h.loginSuccess,(function(e,t){return t.payload.user})),Object(d.a)(r,h.logoutSuccess,(function(){return p})),Object(d.a)(r,h.getCurrentUserSuccess,(function(e,t){return t.payload})),r)),g=Object(s.c)(null,(c={},Object(d.a)(c,h.registerSuccess,(function(e,t){return t.payload.token})),Object(d.a)(c,h.loginSuccess,(function(e,t){return t.payload.token})),Object(d.a)(c,h.logoutSuccess,(function(){return null})),c)),v=function(e,t){return t.payload},m=Object(s.c)(null,(a={},Object(d.a)(a,h.registerError,v),Object(d.a)(a,h.loginError,v),Object(d.a)(a,h.logoutError,v),Object(d.a)(a,h.getCurrentUserError,v),a)),x=Object(f.b)({user:O,token:g,error:m}),k=n(7),C=n.n(k),_=n(16),y=n(12),S=n.n(y);S.a.defaults.baseURL="https://connections-api.herokuapp.com";var w=function(e){S.a.defaults.headers.common.Authorization="Bearer ".concat(e)},E=function(){S.a.defaults.headers.common.Authorization=""},U={register:function(e){return function(){var t=Object(_.a)(C.a.mark((function t(n){var r;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(h.registerRequest()),t.prev=1,t.next=4,S.a.post("/users/signup",e);case 4:r=t.sent,w(r.data.token),n(h.registerSuccess(r.data)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(h.registerError(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},logIn:function(e){return function(){var t=Object(_.a)(C.a.mark((function t(n){var r;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(h.loginRequest()),t.prev=1,t.next=4,S.a.post("/users/login",e);case 4:r=t.sent,w(r.data.token),n(h.loginSuccess(r.data)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(h.loginError(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},logOut:function(){return function(){var e=Object(_.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(h.logoutRequest()),e.prev=1,e.next=4,S.a.post("/users/logout");case 4:E(),t(h.logoutSuccess()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(h.logoutError(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var e=Object(_.a)(C.a.mark((function e(t,n){var r,c,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n(),c=r.auth.token){e.next=3;break}return e.abrupt("return");case 3:return w(c),t(h.getCurrentUserRequest()),e.prev=5,e.next=8,S.a.get("/users/current");case 8:a=e.sent,t(h.getCurrentUserSuccess(a.data)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),t(h.getCurrentUserError(e.t0.message));case 15:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t,n){return e.apply(this,arguments)}}()}},R={getIsAuthenticated:function(e){return Boolean(e.auth.token)},getUserEmail:function(e){return e.auth.user.email}}},29:function(e,t,n){e.exports={email:"UserMenu_email__2lcZk",btn:"UserMenu_btn__1uY27"}},30:function(e,t,n){"use strict";n.d(t,"b",(function(){return m})),n.d(t,"d",(function(){return _})),n.d(t,"a",(function(){return g})),n.d(t,"c",(function(){return R}));var r=n(7),c=n.n(r),a=n(16),s=n(12),u=n.n(s),o=n(2),i=Object(o.b)("contacts/fetchContactRequest"),l=Object(o.b)("contacts/fetchContactSuccess"),b=Object(o.b)("contacts/fetchContactError"),j=Object(o.b)("contacts/addContactRequest"),h=Object(o.b)("contacts/addContactSuccess"),d=Object(o.b)("contacts/addContactError"),f=Object(o.b)("contacts/deleteContactRequest"),p=Object(o.b)("contacts/deleteContactSuccess"),O=Object(o.b)("contacts/deleteContactError"),g=Object(o.b)("contacts/filter");u.a.defaults.baseURL="https://connections-api.herokuapp.com";var v,m={fetchContacts:function(){return function(){var e=Object(a.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(i()),e.prev=1,e.next=4,u.a.get("/contacts");case 4:n=e.sent,r=n.data,t(l(r)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(b(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},addContact:function(e){var t=e.name,n=e.number;return function(){var e=Object(a.a)(c.a.mark((function e(r){var a,s,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={name:t,number:n},r(j()),e.prev=2,e.next=5,u.a.post("/contacts",a);case 5:s=e.sent,o=s.data,r(h(o)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),r(d(e.t0));case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()},deleteContact:function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(f()),t.prev=1,t.next=4,u.a.delete("/contacts/".concat(e));case 4:n(p(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),n(O(t.t0));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()}},x=n(22),k=function(e){return e.contacts.filter},C=function(e){return e.contacts.items},_={getFilter:k,getContacts:C,getVisibleContacts:Object(x.a)([C,k],(function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))}))},y=n(5),S=n(23),w=n(6),E=Object(o.c)([],(v={},Object(y.a)(v,h,(function(e,t){var n=t.payload;return[].concat(Object(S.a)(e),[n])})),Object(y.a)(v,p,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),Object(y.a)(v,l,(function(e,t){return t.payload})),v)),U=Object(o.c)("",Object(y.a)({},g,(function(e,t){return t.payload}))),R=Object(w.b)({items:E,filter:U})},35:function(e,t,n){},47:function(e,t,n){e.exports={header:"AppBar_header__2F-LS"}},48:function(e,t,n){e.exports={container:"Container_container__3Snq1"}},86:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(21),s=n.n(a),u=n(18),o=n(15),i=n(46),l=n(31),b=n(32),j=n(34),h=n(33),d=n(4),f={home:"/",register:"/register",login:"/login",contacts:"/contacts"},p=(n(35),n(1)),O=function(){return Object(p.jsxs)("nav",{children:[Object(p.jsx)(o.b,{className:"header__link",activeClassName:"header__link-active",exact:!0,to:f.home,children:"\u0413\u043e\u043b\u043e\u0432\u043d\u0430"}),Object(p.jsx)(o.b,{className:"header__link",activeClassName:"header__link-active",to:f.contacts,children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438"})]})},g=n(29),v=n.n(g),m=n(14),x={onLogout:m.a.logOut},k=Object(u.b)((function(e){return{email:m.c.getUserEmail(e)}}),x)((function(e){var t=e.email,n=e.onLogout;return Object(p.jsxs)("div",{children:[Object(p.jsx)("span",{class:v.a.email,children:t}),Object(p.jsx)("button",{type:"button",class:v.a.btn,onClick:n,children:"\u0412\u0438\u0439\u0442\u0438"})]})})),C=function(e){return Object(p.jsxs)("nav",{children:[Object(p.jsx)(o.b,{className:"header__link",activeClassName:"header__link-active",exact:!0,to:f.register,children:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f"}),Object(p.jsx)(o.b,{className:"header__link",activeClassName:"header__link-active",to:f.login,children:"\u0412\u0445\u0456\u0434"})]})},_=n(47),y=n.n(_),S=Object(u.b)((function(e){return{isAuthenticated:m.c.getIsAuthenticated(e)}}))((function(e){var t=e.isAuthenticated;return Object(p.jsxs)("header",{className:y.a.header,children:[Object(p.jsx)(O,{}),t?Object(p.jsx)(k,{}):Object(p.jsx)(C,{})]})})),w=n(48),E=n.n(w),U=function(e){var t=e.children;return Object(p.jsx)("div",{className:E.a.container,children:t})},R=Object(r.lazy)((function(){return n.e(1).then(n.bind(null,91))})),q=Object(r.lazy)((function(){return n.e(0).then(n.bind(null,94))})),N=Object(r.lazy)((function(){return n.e(2).then(n.bind(null,92))})),A=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,93))})),z=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.onGetCurretnUser()}},{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(U,{children:[Object(p.jsx)(S,{}),Object(p.jsx)(r.Suspense,{fallback:Object(p.jsx)("h1",{children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f..."}),children:Object(p.jsxs)(d.d,{children:[Object(p.jsx)(d.b,{exact:!0,path:f.home,component:R}),Object(p.jsx)(d.b,{path:f.contacts,component:q}),Object(p.jsx)(d.b,{path:f.login,component:N}),Object(p.jsx)(d.b,{path:f.register,component:A}),Object(p.jsx)(d.a,{to:f.home})]})})]})})}}]),n}(r.Component),L={onGetCurretnUser:m.a.getCurrentUser},B=Object(u.b)(null,L)(z),I=n(23),M=n(2),F=n(30),G=(n(82),n(17)),J=n(49),D=n.n(J),T=Object(I.a)(Object(M.d)({serializableCheck:{ignoredActions:[G.a,G.f,G.b,G.c,G.d,G.e]}})),V={key:"auth",storage:D.a,whitelist:["token"]},Y=Object(M.a)({reducer:{auth:Object(G.g)(V,m.b),contacts:F.c},middleware:T,devTools:!1}),Z={store:Y,persistor:Object(G.h)(Y)};n(85);s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(u.a,{store:Z.store,children:Object(p.jsx)(i.a,{loading:null,persistor:Z.persistor,children:Object(p.jsx)(o.a,{children:Object(p.jsx)(B,{})})})})}),document.getElementById("root"))}},[[86,5,6]]]);
//# sourceMappingURL=main.4fe21a49.chunk.js.map