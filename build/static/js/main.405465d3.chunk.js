(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{44:function(e,t,n){e.exports=n(78)},76:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(18),o=n.n(c),u=n(6),l=n(19),i=n(39),s=n(40),m=n(17),p=0,f=1,h="BLOGS_FETCH",v="BLOG_CREATE",d="BLOG_UPDATE",b="BLOG_DELETE",g="USERS_FETCH",E="COMMENTS_FETCH",O="COMMENT_CREATE",w="  AUTH_LOGIN",y="  AUTH_LOGOUT",j="NOTIFICATION_SHOW",k="  NOTIFICATION_CLEAR",N={token:null,name:null,username:null},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(m.a)({},e,t.data);case y:return N;default:return e}},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return t.data;case v:return e.concat(t.data);case d:return e.filter(function(e){return e.id!==t.data.id}).concat(t.data);case b:return e.filter(function(e){return e.id!==t.data.id});default:return e}},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return t.data;default:return e}},z={show:!1,message:null,notificationType:null},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(m.a)({},t.data,{show:!0});case k:return z;default:return e}},H=n(20),M=n(43),S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return t.data;case O:var n=Object(M.a)(Object.entries(t.data)[0],2),a=n[0],r=n[1];return Object(m.a)({},e,Object(H.a)({},a,e[a]?e[a].concat(r):[r]));default:return e}},L=Object(l.combineReducers)({auth:x,blogs:A,users:C,notification:T,comments:S}),I=Object(l.createStore)(L,Object(i.composeWithDevTools)(Object(l.applyMiddleware)(s.a))),B=n(9),P=n(10),V=n(12),_=n(11),D=n(13),F=n(81),R=n(79),U=n(82),G=n(4),J=n(74),W=n(80),q=n(3),K=n.n(q),Q=n(5),X=n(16),Y=n.n(X),Z={login:function(){var e=Object(Q.a)(K.a.mark(function e(t){var n;return K.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},$=function(e,t){return window.localStorage.setItem(e,JSON.stringify(t))},ee=function(e){return window.localStorage.getItem(e)},te=function(e){return window.localStorage.removeItem(e)},ne=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5;return function(){var a=Object(Q.a)(K.a.mark(function a(r){return K.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:r(ae(e,t)),setTimeout(function(){r(re())},1e3*n);case 2:case"end":return a.stop()}},a,this)}));return function(e){return a.apply(this,arguments)}}()},ae=function(e,t){return{type:j,data:{message:e,notificationType:t}}},re=function(){return{type:k}},ce=function(){return function(){var e=Object(Q.a)(K.a.mark(function e(t){return K.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t({type:y}),te("user"),t(ne("Successfully logged out",p));case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()};function oe(){return(oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var ue=r.a.createElement("path",{d:"M6 4H5a1 1 0 1 1 0-2h11V1a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V5a1 1 0 0 0-1-1h-7v8l-2-2-2 2V4z"}),le=function(e){return r.a.createElement("svg",oe({viewBox:"0 0 20 20"},e),ue)},ie=(n.p,function(e){var t=e.children;return r.a.createElement("h4",{className:"app-title reveal-down-1 smaller"},t,r.a.createElement(le,{width:"22",height:"22",className:"svg-icon"}))}),se=function(e){var t=e.title,n=void 0===t?"BlogHold":t;return r.a.createElement(ie,null,n)},me=function(){return r.a.createElement("div",{className:"nav-items"},r.a.createElement(W.a,{className:"nav-item",activeClassName:"active",exact:!0,to:"/"},"Blogs"),"\xa0 | ",r.a.createElement(W.a,{className:"nav-item",activeClassName:"active",to:"/users"},"Users"),"\xa0")},pe={logout:ce},fe=Object(u.b)(function(e){return{user:e.auth}},pe)(function(e){var t=e.user,n=e.logout;return r.a.createElement("div",{className:"nav-menu"},r.a.createElement(J.a,{to:"/"},r.a.createElement(se,null)),r.a.createElement("div",{className:"reveal-down-1"},r.a.createElement(me,null),r.a.createElement("p",{className:"inline-block"},r.a.createElement("b",null,t.name)," logged in ",r.a.createElement(G.b,{outline:!0,color:"secondary",onClick:n},"Log out")),r.a.createElement(J.a,{to:"/blogs/new",tag:"button"},r.a.createElement(G.b,{outline:!0,color:"primary"},"Create new blog"))))}),he={login:function(e){return function(){var t=Object(Q.a)(K.a.mark(function t(n){var a;return K.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Z.login(e);case 3:a=t.sent,n({type:w,data:a}),$("user",a),n(ne("".concat(a.name," successfully logged in"),p)),t.next=14;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0),n(ne("Could not log in",f)),te("user");case 14:case"end":return t.stop()}},t,this,[[0,9]])}));return function(e){return t.apply(this,arguments)}}()}},ve=Object(u.b)(null,he)(function(e){var t=e.login;return r.a.createElement(G.h,null,r.a.createElement(G.c,{sm:"12",md:{size:6,offset:3}},r.a.createElement(se,{isSmall:!0}),r.a.createElement("div",{className:"login-container reveal-1"},r.a.createElement("h3",{className:"header"},"Log in to learn and share"),r.a.createElement(G.e,{onSubmit:function(e){e.preventDefault();var n={username:e.target.username.value,password:e.target.password.value};t(n),e.target.username.value="",e.target.password.value=""}},r.a.createElement(G.f,null,r.a.createElement(G.g,{className:"form-input",placeholder:"Username",name:"username"})),r.a.createElement(G.f,null,r.a.createElement(G.g,{className:"form-input",placeholder:"password",type:"password",name:"password"})),r.a.createElement(G.b,{outline:!0,color:"primary",type:"submit"},"Log in")))))});function de(){return(de=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var be=r.a.createElement("path",{d:"M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 5h2v6H9V5zm0 8h2v2H9v-2z"}),ge=function(e){return r.a.createElement("svg",de({viewBox:"0 0 20 20"},e),be)};n.p;function Ee(){return(Ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var Oe=r.a.createElement("path",{d:"M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z"}),we=function(e){return r.a.createElement("svg",Ee({viewBox:"0 0 20 20"},e),Oe)},ye=(n.p,Object(u.b)(function(e){var t=e.notification;return{message:t.message,notificationType:t.notificationType,show:t.show}})(function(e){var t=e.message,n=e.show,a=e.notificationType;if(!n)return null;var c=a===p,o=c?"":" error",u=c?we:ge;return r.a.createElement("div",{className:"notification reveal-down-1 ".concat(o)},r.a.createElement(u,{width:"22",height:"22",className:"svg-icon"})," ",t)})),je=function(e){function t(){return Object(B.a)(this,t),Object(V.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(D.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){var e=this.props.blog;return r.a.createElement("div",{className:"list-item",onClick:this.onClick},r.a.createElement(J.a,{to:"/blogs/".concat(e.id)},e.title," ",e.author))}}]),t}(a.PureComponent),ke={getAll:function(){var e=Object(Q.a)(K.a.mark(function e(t){var n,a;return K.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:"bearer ".concat(t)}},e.next=3,Y.a.get("/api/blogs",n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),createNew:function(){var e=Object(Q.a)(K.a.mark(function e(t,n){var a,r;return K.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:"bearer ".concat(n)}},e.next=3,Y.a.post("/api/blogs",t,a);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),update:function(){var e=Object(Q.a)(K.a.mark(function e(t,n){var a,r;return K.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:"bearer ".concat(n)}},e.next=3,Y.a.put("".concat("/api/blogs","/").concat(t.id),t,a);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),remove:function(){var e=Object(Q.a)(K.a.mark(function e(t,n){var a,r;return K.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:"bearer ".concat(n)}},e.next=3,Y.a.delete("".concat("/api/blogs","/").concat(t.id),a);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()},Ne=function(e,t){return function(){var n=Object(Q.a)(K.a.mark(function n(a,r){var c,o;return K.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,c=r().auth.token,n.next=4,ke.update(e,c);case 4:o=n.sent,a(ne(t||"New blog ".concat(o.title," created"),p)),a({type:d,data:o}),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),console.error(n.t0),a(ne("Error updating blog ".concat(e.title),f));case 13:case"end":return n.stop()}},n,this,[[0,9]])}));return function(e,t){return n.apply(this,arguments)}}()},xe=function(e){function t(){var e,n;Object(B.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(V.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){n.props.fetchAll()},n}return Object(D.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){var e=this.props.blogs;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"reveal-down-1"},"Blogs"),r.a.createElement("div",{className:"reveal-1 reveal-delay"},e.map(function(e){return r.a.createElement(je,{key:e.id,blog:e})})))}}]),t}(a.PureComponent),Ae={fetchAll:function(){return function(){var e=Object(Q.a)(K.a.mark(function e(t,n){var a,r;return K.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=n().auth.token,e.next=4,ke.getAll(a);case 4:r=e.sent,t({type:h,data:r}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),t(ne("Error fetching blogs",f));case 12:case"end":return e.stop()}},e,this,[[0,8]])}));return function(t,n){return e.apply(this,arguments)}}()}},Ce=function(e){return e.sort(function(e,t){return t.likes-e.likes})},ze=Object(u.b)(function(e){return{blogs:Ce(e.blogs)}},Ae)(xe);function Te(){return(Te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var He=r.a.createElement("path",{d:"M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"}),Me=function(e){return r.a.createElement("svg",Te({viewBox:"0 0 20 20"},e),He)},Se=(n.p,function(e){function t(){var e,n;Object(B.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(V.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){e.preventDefault();var t={title:e.target.title.value,author:e.target.author.value,url:e.target.url.value};n.props.create(t),e.target.title.value="",e.target.author.value="",e.target.url.value=""},n}return Object(D.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){return r.a.createElement(G.h,{className:"reveal-1"},r.a.createElement(G.c,{className:"block",sm:"12",md:{size:6,offset:3}},r.a.createElement("h2",null,r.a.createElement(Me,{width:"22",height:"22",className:"svg-icon"})," Add new blog"),r.a.createElement(G.e,{onSubmit:this.onSubmit},r.a.createElement(G.f,null,r.a.createElement(G.g,{className:"form-input",placeholder:"Title",name:"title"})),r.a.createElement(G.f,null,r.a.createElement(G.g,{className:"form-input",placeholder:"Author",name:"author"})),r.a.createElement(G.f,null,r.a.createElement(G.g,{className:"form-input",placeholder:"URL",name:"url"})),r.a.createElement(G.b,{outline:!0,color:"primary",type:"submit"},"Save"))))}}]),t}(a.PureComponent)),Le={create:function(e){return function(){var t=Object(Q.a)(K.a.mark(function t(n,a){var r,c;return K.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=a().auth.token,t.next=4,ke.createNew(e,r);case 4:c=t.sent,n(ne("New blog ".concat(c.title," created"),p)),n({type:v,data:c}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0),n(ne('Error creating blog "'.concat(e.title,'"'),f));case 13:case"end":return t.stop()}},t,this,[[0,9]])}));return function(e,n){return t.apply(this,arguments)}}()}},Ie=Object(u.b)(null,Le)(Se),Be=function(e){return"".concat("/api/blogs/","/").concat(e.id,"/comments")},Pe={getAll:function(){var e=Object(Q.a)(K.a.mark(function e(t,n){var a,r;return K.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{Authorization:"bearer ".concat(n)}},e.next=3,Y.a.get(Be(t),a);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),createNew:function(){var e=Object(Q.a)(K.a.mark(function e(t,n,a){var r,c;return K.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{Authorization:"bearer ".concat(a)}},e.next=3,Y.a.post(Be(t),n,r);case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}},e,this)}));return function(t,n,a){return e.apply(this,arguments)}}()},Ve=function(e){function t(){var e,n;Object(B.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(V.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){n.props.fetchAll()},n.componentDidUpdate=function(e){e.blog.id!==n.props.blog.id&&n.props.fetchAll()},n}return Object(D.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){return r.a.createElement(G.h,{className:"mt-4"},r.a.createElement(G.c,null,r.a.createElement("h3",null,"Comments"),r.a.createElement("ul",null,this.props.comments.map(function(e){return r.a.createElement("li",{key:e.id},e.content)}))))}}]),t}(a.PureComponent),_e=Object(u.b)(function(e,t){var n=t.blog;return{comments:e.comments[n.id]||[]}},function(e,t){var n=t.blog;return{fetchAll:function(){return e(function(e){return function(){var t=Object(Q.a)(K.a.mark(function t(n,a){var r,c;return K.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=a().auth.token,t.next=4,Pe.getAll(e,r);case 4:c=t.sent,n({type:E,data:c}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0),n(ne("Error fetching comments",f));case 12:case"end":return t.stop()}},t,this,[[0,8]])}));return function(e,n){return t.apply(this,arguments)}}()}(n))}}})(Ve),De=function(e){function t(){var e,n;Object(B.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(V.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){e.preventDefault();var t=e.target.comment.value;n.props.create({content:t}),e.target.comment.value=""},n}return Object(D.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){return r.a.createElement(G.h,null,r.a.createElement(G.c,null,r.a.createElement(G.e,{onSubmit:this.onSubmit},r.a.createElement(G.f,null,r.a.createElement(G.g,{className:"form-input",name:"comment",placeholder:"Comment"})),r.a.createElement(G.b,{outline:!0,color:"primary",type:"submit"},"Add"))))}}]),t}(a.PureComponent),Fe=Object(u.b)(null,function(e,t){var n=t.blog;return{create:function(t){return e(function(e,t){return function(){var n=Object(Q.a)(K.a.mark(function n(a,r){var c,o;return K.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,c=r().auth.token,n.next=4,Pe.createNew(e,t,c);case 4:o=n.sent,a(ne('New comment "'.concat(o[e.id].content,'" for blog "').concat(e.title,'" created'),p)),a({type:O,data:o}),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),console.error(n.t0),a(ne('Error creating comment "'.concat(t.content,'"'),f));case 13:case"end":return n.stop()}},n,this,[[0,9]])}));return function(e,t){return n.apply(this,arguments)}}()}(n,t))}}})(De);function Re(){return(Re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var Ue=r.a.createElement("path",{d:"M9.26 13a2 2 0 0 1 .01-2.01A3 3 0 0 0 9 5H5a3 3 0 0 0 0 6h.08a6.06 6.06 0 0 0 0 2H5A5 5 0 0 1 5 3h4a5 5 0 0 1 .26 10zm1.48-6a2 2 0 0 1-.01 2.01A3 3 0 0 0 11 15h4a3 3 0 0 0 0-6h-.08a6.06 6.06 0 0 0 0-2H15a5 5 0 0 1 0 10h-4a5 5 0 0 1-.26-10z"}),Ge=function(e){return r.a.createElement("svg",Re({viewBox:"0 0 20 20"},e),Ue)};n.p;function Je(){return(Je=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var We=r.a.createElement("path",{d:"M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z"}),qe=function(e){return r.a.createElement("svg",Je({viewBox:"0 0 20 20"},e),We)},Ke=(n.p,function(e){var t=e.onClick,n=e.likes,a=void 0===n?0:n;return r.a.createElement("div",{className:"blog-button like",onClick:t},r.a.createElement("b",null,a)," ",r.a.createElement(qe,{width:"22",height:"22",className:"svg-icon"}))});function Qe(){return(Qe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var Xe=r.a.createElement("path",{d:"M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"}),Ye=function(e){return r.a.createElement("svg",Qe({viewBox:"0 0 20 20"},e),Xe)},Ze=(n.p,function(e){var t=e.onClick;return r.a.createElement("div",{className:"blog-button remove",onClick:t},r.a.createElement(Ye,{width:"22",height:"22",className:"svg-icon"})," Remove")});var $e={addLike:function(e){return function(){var t=Object(Q.a)(K.a.mark(function t(n){var a;return K.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:try{a=Object(m.a)({},e,{likes:e.likes+1}),n(Ne(a,'Like added to "'.concat(e.title,'"')))}catch(r){console.error(r),n(ne('Error adding like to a blog "'.concat(e.title,'"'),f))}case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},addComment:function(e,t){return function(){var n=Object(Q.a)(K.a.mark(function n(a){var r;return K.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,t.length){n.next=3;break}return n.abrupt("return",a(ne("Please write some comment first",f)));case 3:r=Object(m.a)({},e,{comments:e.comments.concat(t)}),a(Ne(r,'Comment "'.concat(t,'" added to ').concat(e.title))),n.next=11;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0),a(ne('Error adding comment to a blog "'.concat(e.title,'"'),f));case 11:case"end":return n.stop()}},n,this,[[0,7]])}));return function(e){return n.apply(this,arguments)}}()},remove:function(e){return function(){var t=Object(Q.a)(K.a.mark(function t(n,a){var r;return K.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=a().auth.token,t.next=4,ke.remove(e,r);case 4:n(ne("Blog ".concat(e.title," removed"),p)),n({type:b,data:e}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0),n(ne("Error removing blog ".concat(e.title),f));case 12:case"end":return t.stop()}},t,this,[[0,8]])}));return function(e,n){return t.apply(this,arguments)}}()}},et=Object(u.b)(function(e,t){var n=t.blogId,a=e.blogs.find(function(e){return e.id===n}),r=e.auth.username;return{blog:a,showRemove:a&&a.user&&a.user.username===r}},$e)(function(e){var t=e.blog,n=e.addLike,a=(e.addComment,e.remove),c=e.showRemove;return r.a.createElement(G.h,{className:"reveal-1"},r.a.createElement(G.c,{className:"block",sm:"12",md:{size:6,offset:3}},t?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,r.a.createElement(le,{width:"22",height:"22",className:"svg-icon"})," ",t.title),r.a.createElement("div",{className:"blog-details"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:t.url},"Read the blog ",r.a.createElement(Ge,{width:"22",height:"22",className:"svg-icon"})),r.a.createElement("p",null,t.user&&"Added by ".concat(t.user.name)),r.a.createElement("div",null,r.a.createElement(Ke,{likes:t.likes,onClick:function(){return n(t)}}),c&&r.a.createElement(Ze,{onClick:function(){return a(t)}},"Remove"))),r.a.createElement(_e,{blog:t}),r.a.createElement(Fe,{blog:t})):r.a.createElement("p",{className:"reveal-1"},"Blog not found")))}),tt=function(e){function t(){return Object(B.a)(this,t),Object(V.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(D.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){var e=this.props.user;return r.a.createElement("div",{className:"list-item",onClick:this.onClick},r.a.createElement(J.a,{to:"/users/".concat(e.id)},e.name," ",r.a.createElement(G.a,{pill:!0}," ",e.blogs.length)))}}]),t}(a.PureComponent),nt={getAll:function(){var e=Object(Q.a)(K.a.mark(function e(t){var n,a;return K.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:"bearer ".concat(t)}},e.next=3,Y.a.get("/api/users",n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},at=function(e){function t(){var e,n;Object(B.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(V.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){n.props.fetchAll()},n}return Object(D.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){var e=this.props.users;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"reveal-down-1"},"Users"),r.a.createElement("div",{className:"reveal-1 reveal-delay"},e.map(function(e){return r.a.createElement(tt,{key:e.id,user:e})})))}}]),t}(a.PureComponent),rt={fetchAll:function(){return function(){var e=Object(Q.a)(K.a.mark(function e(t,n){var a,r;return K.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=n().auth.token,e.next=4,nt.getAll(a);case 4:r=e.sent,t({type:g,data:r}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),t(ne("Error fetching users",f));case 12:case"end":return e.stop()}},e,this,[[0,8]])}));return function(t,n){return e.apply(this,arguments)}}()}},ct=function(e){return e.sort(function(e,t){return t.blogs.length-e.blogs.length})},ot=Object(u.b)(function(e){return{users:ct(e.users)}},rt)(at);function ut(){return(ut=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var lt=r.a.createElement("path",{d:"M5 5a5 5 0 0 1 10 0v2A5 5 0 0 1 5 7V5zM0 16.68A19.9 19.9 0 0 1 10 14c3.64 0 7.06.97 10 2.68V20H0v-3.32z"}),it=function(e){return r.a.createElement("svg",ut({viewBox:"0 0 20 20"},e),lt)};n.p;var st=Object(u.b)(function(e,t){var n=t.userId;return{user:e.users.find(function(e){return e.id===n})}})(function(e){var t=e.user;return r.a.createElement(G.h,{className:"reveal-1"},r.a.createElement(G.c,{className:"block",sm:"12",md:{size:6,offset:3}},t?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,r.a.createElement(it,{width:"22",height:"22",className:"svg-icon"})," ",t.name),r.a.createElement("h3",null,"Added blogs"),r.a.createElement("ul",null,t.blogs.map(function(e){return r.a.createElement("li",{key:e._id},e.title)}))):r.a.createElement("p",null,"User not found")))}),mt=(n(76),function(e){function t(){var e,n;Object(B.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(V.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){n.props.checkAuth()},n.handleLogOut=function(){n.props.logout()},n}return Object(D.a)(t,e),Object(P.a)(t,[{key:"render",value:function(){var e=this.props.user;return r.a.createElement(G.d,{className:"base"},r.a.createElement(ye,null),null==e.token?r.a.createElement(ve,null):r.a.createElement(F.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(fe,null),r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{path:"/",exact:!0,component:ze}),r.a.createElement(U.a,null,r.a.createElement(R.a,{path:"/blogs/new",exact:!0,component:Ie}),r.a.createElement(R.a,{path:"/blogs/:blogId",render:function(e){var t=e.match;return r.a.createElement(et,{blogId:t.params.blogId})}})),r.a.createElement(R.a,{path:"/blogs",component:ze}),r.a.createElement(R.a,{path:"/users/:userId",render:function(e){var t=e.match;return r.a.createElement(st,{userId:t.params.userId})}}),r.a.createElement(R.a,{path:"/users",component:ot})))))}}]),t}(r.a.Component)),pt={logout:ce,checkAuth:function(){return function(e){var t=ee("user");if(t){var n=JSON.parse(t);e({type:w,data:n})}}}},ft=Object(u.b)(function(e){return{user:e.auth}},pt)(mt);o.a.render(r.a.createElement(u.a,{store:I},r.a.createElement(ft,null)),document.getElementById("root"))}},[[44,2,1]]]);
//# sourceMappingURL=main.405465d3.chunk.js.map