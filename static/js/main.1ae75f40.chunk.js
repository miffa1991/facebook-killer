(this["webpackJsonpfacebook-killer"]=this["webpackJsonpfacebook-killer"]||[]).push([[1],{13:function(e,t,a){"use strict";a.d(t,"c",(function(){return c})),a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return i}));var n=a(85),r=n.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"d2f5b007-0ccf-4ac0-acee-b03a552a8ba4"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},getProfile:function(e){return console.warn("old function/ please update"),o.getProfile(e)},getFollow:function(e){return r.post("follow/".concat(e))},getUnFollow:function(e){return r.delete("follow/".concat(e))}},o={getProfile:function(e){return r.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return r.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return r.put("profile/status/",{status:e})}},i={me:function(){return r.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("/auth/login",{email:e,password:t,rememberMe:a}).then((function(e){return e.data}))},logout:function(){return r.delete("/auth/login")}}},137:function(e,t,a){e.exports=a(228)},142:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){e.exports={wrapper:"Content_wrapper__2mQx4"}},228:function(e,t,a){"use strict";a.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=a(0),r=a.n(n),c=a(45),o=a.n(c),i=(a(142),a(143),a(33)),l=a(34),s=a(36),u=a(35),m=a(37),d=(a(144),a(145),a(47)),f=a.n(d),p=a(21),E=a(23),g=r.a.lazy((function(){return a.e(5).then(a.bind(null,303))})),h=r.a.lazy((function(){return Promise.all([a.e(0),a.e(7)]).then(a.bind(null,304))})),v=r.a.lazy((function(){return Promise.all([a.e(0),a.e(4)]).then(a.bind(null,302))})),b=r.a.lazy((function(){return Promise.all([a.e(0),a.e(6)]).then(a.bind(null,301))})),_=function(e){return r.a.createElement("div",{id:f.a["content-wrapper"]},r.a.createElement("div",{className:"".concat(f.a["container-fluid"]," ").concat(f.a["pb-0"])},r.a.createElement(p.b,{path:"/users",render:function(){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(E.a,null)}," ",r.a.createElement(g,null),"  ")}}),r.a.createElement(p.b,{path:"/dialogs",render:function(){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(E.a,null)}," ",r.a.createElement(b,null),"   ")}}),r.a.createElement(p.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(E.a,null)}," ",r.a.createElement(v,null),"  ")}}),r.a.createElement(p.b,{path:"/login",render:function(){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(E.a,null)}," ",r.a.createElement(h,null),"  ")}})))},w=a(6),N=a.n(w),y=a(10),O=function(){return r.a.createElement("ul",{className:"".concat(N.a.sidebar," ").concat(N.a["navbar-nav"])},r.a.createElement("li",{className:"".concat(N.a["nav-item"]," ").concat(N.a.active)},r.a.createElement(y.b,{to:"/profile"},r.a.createElement("div",{className:N.a.fos,id:"foo"}," Home "))),r.a.createElement("li",{className:"".concat(N.a["nav-item"]," ").concat(N.a.active)},r.a.createElement(y.b,{to:"/users"},r.a.createElement("div",{className:N.a.fos,id:"foo"}," Users "))),r.a.createElement("li",{className:N.a["nav-item"]},r.a.createElement(y.b,{to:"/dialogs"},r.a.createElement("div",{className:N.a.fos,id:"foo3"}," Messages "))),r.a.createElement("li",{className:"dropdown-divider"}),r.a.createElement("li",{className:N.a["nav-item"]},r.a.createElement(y.b,{to:"/login"},r.a.createElement("div",{className:N.a.fos,id:"foo8"}," Login"))),r.a.createElement("li",{className:N.a["nav-item"]},r.a.createElement(y.b,{to:"setting.html"},r.a.createElement("div",{className:N.a.fos,id:"foo9"}," Setting"))),r.a.createElement("li",{className:N.a["nav-item"]},r.a.createElement(y.b,{to:"feedback.html"},r.a.createElement("div",{className:N.a.fos,id:"foo10"}," Send Feedback "))))},S=function(e){return r.a.createElement("div",{className:"full-width"},r.a.createElement("div",{id:"wrapper"},r.a.createElement(O,null),r.a.createElement(_,null)))},j=a(24),x=a.n(j),P=function(){return r.a.createElement("footer",{className:x.a["sticky-footer"]},r.a.createElement("div",{className:"container my-auto"},r.a.createElement("div",{className:"".concat(x.a.copyright," ").concat(x.a["text-center"]," ").concat(x.a["my-auto"])},r.a.createElement("div",{className:x.a["footer-info"]},r.a.createElement("a",{href:"#"},"About ")," |",r.a.createElement("a",{href:"#"},"Faq\u2019s ")," |",r.a.createElement("a",{href:"#"},"Privacy")," |",r.a.createElement("a",{href:"#"}," Advertise"),"  |",r.a.createElement("a",{href:"#"},"Term & Conditions ")," |",r.a.createElement("a",{href:"#"},"Sitemap  "),"|",r.a.createElement("a",{href:"#"},"Tags  "),"|",r.a.createElement("a",{href:"#"},"Blog")),r.a.createElement("div",{className:x.a["copy-right"]},"\xa9 Copyright 2019 by Gambol. All Rights Reserved."))))},T=a(84),k=a.n(T),I=a(7),C=a.n(I),L=function(e){return r.a.createElement("div",{className:"".concat(C.a.navbar," ").concat(C.a["navbar-expand-md"]," ").concat(C.a["navbar-light"]," ").concat(C.a["sticky-top"]," ").concat(C.a["nav-menu"])},r.a.createElement("div",{className:"row full-width"},r.a.createElement("div",{className:"col-md-2 col-xs-12 p-left p-right"},r.a.createElement("div",{className:"btn btn-link btn-sm text-white order-1 order-sm-0",id:"sidebarToggle"},r.a.createElement("div",{className:"menu-bar-icon"})),r.a.createElement("div",{className:C.a.logo},r.a.createElement("a",{href:"index_1.html"},r.a.createElement("img",{src:k.a,alt:"logo"})," FaceBookKiller"))),r.a.createElement("div",{className:"col-md-5 col-xs-12 p-left p-right"},r.a.createElement("div",{className:C.a.searching},r.a.createElement("div",null,r.a.createElement("button",{type:"submit"}),r.a.createElement("input",{type:"text",name:"search",placeholder:"Search Places, Events, House, Shop, Bike, Car, Mobile etc..."})))),r.a.createElement("div",{className:"col-md-5 col-xs-12 p-left p-right"},r.a.createElement("div",{className:C.a["add-listing"]},r.a.createElement("a",{href:"#"},"Add Listing")),r.a.createElement("div",{className:C.a.home},r.a.createElement("ul",null,r.a.createElement("li",{className:C.a.active},r.a.createElement("a",{href:"index_1.html"},r.a.createElement("span",{className:"circle"}))),r.a.createElement("li",{className:"popup dropdown"},r.a.createElement("span",null,"3"),r.a.createElement("div",{className:"".concat(C.a["dropdown-menu"]," ").concat(C.a["msg-noti-dropdown"])})),r.a.createElement("li",{className:"popup dropdown"},r.a.createElement("span",null,"3"),r.a.createElement("div",{className:"dropdown-menu msg-noti-dropdown"},r.a.createElement("ul",null,r.a.createElement("li",{className:"notfication-details"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-left"},r.a.createElement("a",{href:"#"},r.a.createElement("img",{src:"images/messages/msg-1.png",alt:""}))),r.a.createElement("div",{className:"media-body"},r.a.createElement("h4",{className:"media-heading color-primary"},"John Doe"),r.a.createElement("p",null,"comment on your listing"),r.a.createElement("p",{className:"comment-date"},"10 min ago")))),r.a.createElement("li",{className:"notfication-details"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-left"},r.a.createElement("a",{href:"#"})),r.a.createElement("div",{className:"media-body"},r.a.createElement("h4",{className:"media-heading color-primary"},"John Doe"),r.a.createElement("p",null,"saved your listing"),r.a.createElement("p",{className:"comment-date"},"10 min ago")))),r.a.createElement("li",{className:"notfication-details"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-left"},r.a.createElement("a",{href:"#"},"1")),r.a.createElement("div",{className:"media-body"},r.a.createElement("h4",{className:"media-heading color-primary"},"John Doe"),r.a.createElement("p",null,"Follow you"),r.a.createElement("p",{className:"comment-date"},"10 min ago")))),r.a.createElement("li",null,r.a.createElement("div",{className:"dropdown-btn-mn"},r.a.createElement("button",null,"View All Notifications")))))))),r.a.createElement("div",{className:"".concat(C.a.dropdown," ").concat(C.a.login)},r.a.createElement("div",{className:"".concat(C.a["account-dt"]," ").concat(C.a["dropdown-toggle-no-caret"]),"data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",role:"main"},r.a.createElement("i",{className:"fas fa-user-circle"}),r.a.createElement("span",null,e.isAutorizate?r.a.createElement("div",null," ",e.login," ",r.a.createElement("button",{onClick:e.logout},"logout")):r.a.createElement(y.b,{to:"/login"},"Login")))))))},F=a(28),U=a(25),R=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(L,this.props)}}]),t}(r.a.Component),M=Object(U.b)((function(e){return{isAutorizate:e.loginReducer.isAutorizate,login:e.loginReducer.login}}),{logout:F.d})(R),A=a(4),G={initialized:!1},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(A.a)({},e,{initialized:!0});default:return Object(A.a)({},e)}},H=a(18),W=a(87),D=a(73),B=a(74),J=a(75),K=a(81),Z=Object(H.c)({postItems:D.a,messageItems:B.a,usersPage:J.b,loginReducer:F.a,app:z,form:K.a}),Q=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||H.d,V=Object(H.e)(Z,Q(Object(H.a)(W.a)));window.store=V;var X=V,q=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"App"},r.a.createElement(M,null),r.a.createElement(S,null),r.a.createElement(P,null)):r.a.createElement(E.a,null)}}]),t}(n.Component),Y=Object(H.d)(p.f,Object(U.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Object(F.b)());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(q),$=function(e){return r.a.createElement(y.a,null,r.a.createElement(U.a,{store:X},r.a.createElement(Y,null)))};o.a.render(r.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},23:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(82),o=a.n(c);t.a=function(e){return r.a.createElement("img",{src:o.a})}},24:function(e,t,a){e.exports={"sticky-footer":"Footer_sticky-footer__WsKeZ",copyright:"Footer_copyright__39yUF","footer-info":"Footer_footer-info__2WMBO","copy-right":"Footer_copy-right__1X7vP"}},28:function(e,t,a){"use strict";a.d(t,"b",(function(){return m})),a.d(t,"c",(function(){return d})),a.d(t,"d",(function(){return f}));var n=a(5),r=a.n(n),c=a(12),o=a(4),i=a(13),l=a(49),s={id:null,email:null,login:null,isAutorizate:!1},u=function(e,t,a,n){return{type:"SET_LOGIN_USER",payLoad:{id:e,email:t,login:a,isAutorizate:n}}},m=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){var a,n,c,o,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.me();case 2:0===(a=e.sent).resultCode&&(n=a.data,c=n.id,o=n.login,l=n.email,t(u(c,l,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},d=function(e,t,a,n){return function(){var o=Object(c.a)(r.a.mark((function c(o){var s,u;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.a.login(e,t,a,n);case 2:0===(s=r.sent).resultCode?o(m()):(u=s.messages.length>0?s.messages[0]:"Some error",o(Object(l.a)("login",{_error:u})));case 4:case"end":return r.stop()}}),c)})));return function(e){return o.apply(this,arguments)}}()},f=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.logout();case 2:0===e.sent.data.resultCode&&t(u(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOGIN_USER":return Object(o.a)({},e,{},t.payLoad);default:return Object(o.a)({},e)}}},47:function(e,t,a){e.exports={"content-wrapper":"ContentMain_content-wrapper__1fE24","container-fluid":"ContentMain_container-fluid__1qanY","pb-0":"ContentMain_pb-0__M4FtB"}},6:function(e,t,a){e.exports={sidebar:"Sidebar_sidebar__36MMa","navbar-nav":"Sidebar_navbar-nav__TeZdo","dropdown-divider":"Sidebar_dropdown-divider__13Lp4",fos:"Sidebar_fos__3z9jx"}},7:function(e,t,a){e.exports={navbar:"Header_navbar__3DGyp","sticky-top":"Header_sticky-top__-clBQ","fixed-header":"Header_fixed-header__2Rg3j",logo:"Header_logo__xzisH",searching:"Header_searching__Czr9Q","add-listing":"Header_add-listing__2c2kL",home:"Header_home__1lInC","account-dt":"Header_account-dt__3BJF5",login:"Header_login__3J7c9"}},73:function(e,t,a){"use strict";a.d(t,"d",(function(){return u})),a.d(t,"b",(function(){return d})),a.d(t,"c",(function(){return f})),a.d(t,"e",(function(){return p}));var n=a(5),r=a.n(n),c=a(12),o=a(46),i=a(4),l=a(13),s={postItem:[{id:1,name:"Rock William",lastMessage:"Hi what are you doing?",date:"Today, 02.00PM"},{id:2,name:"Stasik William",lastMessage:"Hi",date:"Today, 03.00PM"},{id:3,name:"Lola Lola",lastMessage:"Hi what are you do?",date:"Today, 04.00PM"}],profilePage:null,status:""},u=function(e){return{type:"NEW-POST",newPostText:e}},m=function(e){return{type:"STATUS_PROFILE",status:e}},d=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.c.getProfile(e);case 2:n=t.sent,a({type:"PROFILE_PAGE",profilePage:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.b.getStatus(e);case 2:n=t.sent,a(m(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&a(m(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW-POST":var a={id:4,name:"Stasik",lastMessage:t.newPostText,date:"11 August"};return Object(i.a)({},e,{postItem:[].concat(Object(o.a)(e.postItem),[a]),newPostText:""});case"PROFILE_PAGE":return Object(i.a)({},e,{profilePage:t.profilePage});case"DELETE_POST":return Object(i.a)({},e,{postItem:e.postItem.filter((function(e){return e.id!=t.postId}))});case"STATUS_PROFILE":return Object(i.a)({},e,{status:t.status});default:return Object(i.a)({},e)}}},74:function(e,t,a){"use strict";a.d(t,"b",(function(){return c}));var n=a(4),r={messageItem:[{id:1,name:"Rock William",lastMessage:"REACT IT-Kamasutra",date:"Today, 02.00PM"},{id:2,name:"Stasik William",lastMessage:"VUE vs React epic battle",date:"Today, 03.00PM"},{id:3,name:"Lola Lola",lastMessage:"WordPress it is future",date:"Today, 04.00PM"}]},c=function(e){return{type:"NEW-MESSAGE",text:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW-MESSAGE":var a={id:4,name:"Stasik",lastMessage:t.text,date:"11 August"};return e.messageItem.push(a),Object(n.a)({},e);default:return Object(n.a)({},e)}}},75:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"e",(function(){return p})),a.d(t,"d",(function(){return E})),a.d(t,"c",(function(){return g})),a.d(t,"f",(function(){return h}));var n=a(5),r=a.n(n),c=a(12),o=a(46),i=a(4),l=a(13),s={users:[],pageUserCount:0,pageLimit:10,pageCurrent:1,isFetching:!0,followingInProgress:[]},u=function(e){return{type:"FOLLOW",userId:e}},m=function(e){return{type:"UNFULLOW",userId:e}},d=function(e){return{type:"SET_CURRENT_PAGE",pageCurrent:e}},f=function(e){return{type:"TOGGLE_FETCHING",isFetching:e}},p=function(e,t){return{type:"TOGGLE_PROGRESS",isFetching:e,userId:t}},E=function(e,t){return function(){var a=Object(c.a)(r.a.mark((function a(n){var c;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(f(!0)),a.next=3,l.c.getUsers(e,t);case 3:c=a.sent,n(f(!1)),n({type:"SET_USERS",users:c.items}),n({type:"SET_USER_COUNT",pageUserCount:c.totalCount});case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(p(!0,e)),t.next=3,l.c.getFollow(e);case 3:0===t.sent.data.resultCode&&a(u(e)),a(p(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(p(!0,e)),t.next=3,l.c.getUnFollow(e);case 3:0===t.sent.data.resultCode&&a(m(e)),a(p(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(i.a)({},e,{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)({},e,{followed:!0}):e}))});case"UNFULLOW":return Object(i.a)({},e,{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)({},e,{followed:!1}):e}))});case"SET_USERS":return Object(i.a)({},e,{users:t.users});case"SET_CURRENT_PAGE":return Object(i.a)({},e,{pageCurrent:t.pageCurrent});case"SET_USER_COUNT":return Object(i.a)({},e,{pageUserCount:t.pageUserCount});case"TOGGLE_FETCHING":return Object(i.a)({},e,{isFetching:t.isFetching});case"TOGGLE_PROGRESS":return Object(i.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(o.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}}},82:function(e,t,a){e.exports=a.p+"static/media/preloader.468c5121.svg"},84:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"}},[[137,2,3]]]);
//# sourceMappingURL=main.1ae75f40.chunk.js.map