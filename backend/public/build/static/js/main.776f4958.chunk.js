(this.webpackJsonpcandyshop=this.webpackJsonpcandyshop||[]).push([[0],{48:function(e,t,a){},50:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(19),r=a.n(s),i=(a(48),a(2)),o=a(4),l=a.n(o),d=a(10),j=a(5),u=(a(50),a(17)),h=a.n(u),b=a(14),p=a(1);function m(e){var t=e.loggedInUser,a=e.handleLogin,n=function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("".concat(c,"user/logout"),t);case 2:window.localStorage.clear(),a(null);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c="/api/";return Object(p.jsx)("div",{className:"app-header full ",children:Object(p.jsxs)("div",{className:"nav-links main-layout",children:[Object(p.jsxs)(b.a,{children:[Object(p.jsx)(b.b,{className:"nav-link-item",exact:!0,to:"/",activeClassName:"active-nav",children:"Home"}),Object(p.jsx)(b.b,{className:"nav-link-item",exact:!0,to:"/CandyPage",activeClassName:"active-nav",children:"CandyPage"}),Object(p.jsx)(b.b,{className:"nav-link-item",to:"/Contact",activeClassName:"active-nav",children:"Contact"}),t&&t.isAdmin&&Object(p.jsx)(b.b,{className:"nav-link-item",to:"/Admin",activeClassName:"active-nav",children:"Admin"}),Object(p.jsx)(b.b,{className:"nav-link-item",to:"/Map",activeClassName:"active-nav",children:"Map"}),Object(p.jsx)(b.b,{className:"nav-link-item",to:"/Readme",activeClassName:"active-nav",children:"Readme"}),!t&&Object(p.jsx)(b.b,{className:"signup-link nav-link-item",exact:!0,to:"/Signup",activeClassName:"active-nav",children:"Signup"}),t&&Object(p.jsx)("a",{onClick:n,className:"signup-link nav-link-item",children:"Signout"}),Object(p.jsx)(b.b,{className:"cart-link nav-link-item",exact:!0,to:"/Cart",activeClassName:"active-nav",children:"\ud83d\uded2"})]}),t&&Object(p.jsxs)("div",{className:"hello-msg",children:[" Hello ",t.userName]})]})})}function O(){return Object(p.jsx)("div",{className:"full",children:Object(p.jsx)("section",{className:"footer-container",children:Object(p.jsx)("div",{className:"footer-content",children:Object(p.jsx)("span",{children:"\xa9 2021 Inbal & Liron"})})})})}var x=a(25),g=a(78),f=a(79);function v(e){var t=e.candy,a=e.userCart,n=e.setUserCart;return Object(p.jsx)("div",{className:"candy-card",children:Object(p.jsxs)(g.a,{children:[Object(p.jsx)(g.a.Img,{variant:"top",src:t.url}),Object(p.jsxs)(g.a.Body,{children:[Object(p.jsx)(g.a.Title,{children:t.name}),Object(p.jsx)(g.a.Text,{children:Object(p.jsxs)("span",{className:"candy-price",children:[" ",t.price,"$ "]})})]}),Object(p.jsx)(f.a,{onClick:function(){!function(e){Array.from(a),n((function(t){return[].concat(Object(x.a)(t),[e])}))}(t)},title:"".concat(t.inStock?"In stack":"Out of Stock"),className:"".concat(t.inStock),variant:"outline-success",children:"".concat(t.inStock?"Add to cart":"Out of Stock")})]})})}function C(e){var t=e.candies,a=e.setUserCart,c=e.userCart,s=Object(n.useState)({term:""}),r=Object(j.a)(s,2),i=r[0],o=r[1],l=Object(n.useState)(Object(x.a)(t)),d=Object(j.a)(l,2),u=d[0],h=d[1];return Object(n.useEffect)((function(){var e=t.filter((function(e){return e.name.toLowerCase().includes(i.term.toLowerCase())}));h(e)}),[i]),Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{className:"title",children:" OUR CANDIES "}),Object(p.jsx)("input",{className:"search",placeholder:"Search",type:"Search",id:"Search",name:"Search",value:i.term,onChange:function(e){var t=e.target,a="number"===t.type?+t.value:t.value;o({term:a})}}),Object(p.jsx)("div",{className:"candy-container",children:u.map((function(e){return Object(p.jsx)(v,{setUserCart:a,userCart:c,candy:e},e._id)}))})]})}function N(){return Object(p.jsxs)("div",{className:"home-container",children:[Object(p.jsx)("h1",{children:" Our Story"}),Object(p.jsx)("p",{className:"bold",children:" IL CandyShop\u2019s is recognized as a leader in the confectionery market of la la land, offering a large selection of products in more than 30 countries around the world. During 30 years of CandyShop\u2019s\u2019s existence, it has become known as one of the most innovative and creative companies. CandyShop\u2019s is the pioneer in jellies and has launched brands in technically challenging categories such as pure chocolates, lollipops and marshmallows."}),Object(p.jsx)("iframe",{width:"853",height:"480",src:"https://www.youtube.com/embed/SRcnnId15BA",frameBorder:"0",allowFullScreen:!0})]})}var w=a(26),y={width:"600px",height:"500px"},S={lat:32.14996,lng:34.883881};function k(){var e=Object(w.c)({id:"google-map-script",googleMapsApiKey:"AIzaSyCq69s-N1C8sggOeWFqhQWXNlxCtLjHNzs"}).isLoaded,t=c.a.useState(null),a=Object(j.a)(t,2),n=(a[0],a[1]),s=c.a.useCallback((function(e){var t=new window.google.maps.LatLngBounds;e.fitBounds(t),n(e)}),[]),r=c.a.useCallback((function(e){n(null)}),[]);return e?Object(p.jsxs)(w.a,{mapContainerStyle:y,center:S,onLoad:s,onUnmount:r,children:[Object(p.jsx)(w.b,{position:{lat:32.14996,lng:34.883881}}),Object(p.jsx)(p.Fragment,{})]}):Object(p.jsx)(p.Fragment,{})}var I=c.a.memo(k),L=a(23),U=a(24),P=a(43),A=a(42),R=function(e){Object(P.a)(a,e);var t=Object(A.a)(a);function a(){return Object(L.a)(this,a),t.apply(this,arguments)}return Object(U.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"readme-container",children:[Object(p.jsxs)("div",{className:"inbal-section",children:[Object(p.jsx)("h1",{children:"Inbal Carasso-lev"}),Object(p.jsx)("p",{children:" IL CandyShop\u2019s"}),Object(p.jsx)("p",{children:"we are Candy sellers"}),Object(p.jsx)("p",{children:"Our additional pages are Contact Information page that includes the address and the phone of the store we also added a home page with the use of the iframe tag. In addition we have added an indication of whether the item is in stock or not we also added map using the google maps api showing the location of the store (Hod Hasharon)"}),Object(p.jsx)("p",{children:"All the work was challenging, especially the whole learning process, but the hardest thing to accomplish was passing PROPS through The private route in react-router. After searching the internet we found the solution to this (using util function)"}),Object(p.jsx)("p",{children:'My partner is Liron Cohen , ID: 312478175 At first, we did everything together, so that one could help the other in the parts he was less powerful in and also we wanted to be in sync with the architecture of the site. I then took over the part of the pages "Admin" and "Home" and Liron took over the pages "Logs" and "Contact"'}),Object(p.jsxs)("div",{className:"route-info",children:[Object(p.jsx)("span",{children:"SITE ROUTES:"}),Object(p.jsx)("span",{children:" Home page: '/'"}),Object(p.jsx)("span",{children:" CandyPage: '/CandyPage'"}),Object(p.jsx)("span",{children:" Contact: '/Contact'"}),Object(p.jsx)("span",{children:" Map: '/Map'"}),Object(p.jsx)("span",{children:"Readme: '/Readme'"}),Object(p.jsx)("span",{children:" Admin: '/Admin'"}),Object(p.jsx)("span",{children:"Signup: '/Signup'"}),Object(p.jsx)("span",{children:" Cart: '/Cart'"})]})]}),Object(p.jsxs)("div",{className:"liron-section",children:[Object(p.jsx)("h1",{children:"Liron Cohen"}),Object(p.jsx)("p",{children:" IL CandyShop\u2019s"}),Object(p.jsx)("p",{children:"we are selling Candies"}),Object(p.jsx)("p",{children:"Our additional pages are Contact Information page that includes the address and the phone of the store we also added a home page with the use of the iframe tag. In addition we have added an indication of whether the item is in stock or not. we also added map using the google maps api showing the location of the store (Hod Hasharon)"}),Object(p.jsx)("p",{children:"My learning process of React was very challenging and interesting, Luckily the documentation of React is great. In addition, the Internet is full of Videos on React. I am very happy that I started learning React only after I felt I was good enough in java script."}),Object(p.jsx)("p",{children:'My partner was Inbal Carasso-lev, ID: 204694111 I then took over the part of the pages "Logs" and "Contact" and inbal took over the pages "Home" and "Admin"'}),Object(p.jsxs)("div",{className:"route-info",children:[Object(p.jsx)("span",{children:"SITE ROUTES:"}),Object(p.jsx)("span",{children:" Home page: '/'"}),Object(p.jsx)("span",{children:" CandyPage: '/CandyPage'"}),Object(p.jsx)("span",{children:" Contact: '/Contact'"}),Object(p.jsx)("span",{children:" Map: '/Map'"}),Object(p.jsx)("span",{children:"Readme: '/Readme'"}),Object(p.jsx)("span",{children:" Admin: '/Admin'"}),Object(p.jsx)("span",{children:"Signup: '/Signup'"}),Object(p.jsx)("span",{children:" Cart: '/Cart'"})]})]})]})}}]),a}(n.Component);function F(){return Object(p.jsxs)("div",{className:"contact-container",children:[Object(p.jsx)("h1",{children:"Contact Information"}),Object(p.jsx)("h3",{children:"Head Office"}),Object(p.jsx)("p",{children:"Neve neeman Industries Limited 17, Banglore Town, Main Sharah-e- Faisal, Karachi-75350, la la land"}),Object(p.jsx)("p",{children:"Tel: (+92 21) 34311172 \u2013 76 Fax: (+92 21) 34547843, 34541094"}),Object(p.jsx)("h3",{children:" Factory"}),Object(p.jsx)("p",{children:"Ismail Industries Limited C-230, Hub Industrial Trading Estate, Balochistan, la la land"})]})}function M(e){var t="/api/",a=Object(n.useState)({userName:"",password:"",email:""}),c=Object(j.a)(a,2),s=c[0],r=c[1],o=Object(n.useState)({userName:"",password:""}),u=Object(j.a)(o,2),b=u[0],m=u[1],O=Object(n.useState)(!0),x=Object(j.a)(O,2),g=x[0],f=x[1],v=function(e){var t=e.target,a=t.name,n=t.value,c=Object(i.a)({},s);c[a]=n,r(Object(i.a)({},c))},C=function(e){var t=e.target,a=t.name,n=t.value,c=Object(i.a)({},b);c[a]=n,m(Object(i.a)({},c))},N=function(){var a=Object(d.a)(l.a.mark((function a(){var n;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,h.a.post("".concat(t,"user/signup"),s);case 3:return n=a.sent,a.next=6,e.location.handleLogin(n.data);case 6:e.history.push("/CandyPage"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),alert("Sorry, please try again later");case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(){return a.apply(this,arguments)}}(),w=function(){var a=Object(d.a)(l.a.mark((function a(){var n;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,h.a.post("".concat(t,"user/login"),b);case 3:return n=a.sent,a.next=6,e.location.handleLogin(n.data);case 6:g&&localStorage.setItem("user",JSON.stringify(n.data)),e.history.push("/CandyPage"),a.next=14;break;case 10:a.prev=10,a.t0=a.catch(0),console.log(a.t0),alert("Wrong Username/Password");case 14:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(){return a.apply(this,arguments)}}();return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{className:"center",children:" Sign up"}),Object(p.jsxs)("form",{className:"login-container",onSubmit:function(e){return e.preventDefault()},children:[Object(p.jsx)("label",{className:"labal",htmlFor:"email",children:"email"}),Object(p.jsx)("input",{placeholder:"email",type:"email",id:"email",name:"email",value:s.email,onChange:v}),Object(p.jsx)("label",{className:"labal",htmlFor:"userName",children:"userName"}),Object(p.jsx)("input",{placeholder:"UserName",type:"text",id:"userName",name:"userName",value:s.userName,onChange:v}),Object(p.jsx)("label",{className:"labal",htmlFor:"password",children:"Password"}),Object(p.jsx)("input",{placeholder:"Password",type:"password",id:"Password",name:"password",value:s.password,onChange:v}),Object(p.jsx)("button",{onClick:N,className:"special-btn btn login-btn",children:"Signup"})]}),Object(p.jsxs)("div",{className:"middle-page flex",children:[Object(p.jsx)("div",{className:"login-signup-supperline",children:Object(p.jsx)("hr",{})}),Object(p.jsx)("h3",{children:"OR"}),Object(p.jsx)("div",{className:"login-signup-supperline",children:Object(p.jsx)("hr",{})})]}),Object(p.jsxs)("form",{className:"login-container",onSubmit:function(e){return e.preventDefault()},children:[Object(p.jsx)("label",{className:"labal",htmlFor:"userName",children:"userName"}),Object(p.jsx)("input",{placeholder:"UserName",type:"text",id:"userName",name:"userName",value:b.userName,onChange:C}),Object(p.jsx)("label",{className:"labal",htmlFor:"password",children:"Password"}),Object(p.jsx)("input",{placeholder:"Password",type:"password",id:"Password",name:"password",value:b.password,onChange:C}),Object(p.jsx)("button",{onClick:w,className:"special-btn btn login-btn",children:"Login"}),Object(p.jsx)("input",{checked:g,onChange:function(){return f(!g)},className:"checkmark",type:"checkbox",id:"remeber",name:"remeber"}),Object(p.jsx)("label",{className:"checkmark-lable",htmlFor:"remeber",children:"Remeber Me"})]})]})}function T(e){var t=e.userCart,a=e.loggedInUser,c=e.setUserCart,s=Object(n.useState)(0),r=Object(j.a)(s,2),i=r[0],o=r[1],u=function(){return parseInt(1.17*i-i)},b=function(){var e=Object(d.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={loggedInUser:a,userCart:t},e.next=3,h.a.post("".concat("/api/","user/submitCart"),n);case 3:c([]),alert("success!");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){var e=t.reduce((function(e,t){return e+parseInt(t.price)}),0);o(e)}),[t]),Object(p.jsxs)("div",{className:"cart-container",children:[Object(p.jsx)("h1",{children:"\ud83d\uded2 MY CART \ud83d\uded2"}),Object(p.jsxs)("tr",{className:"main-row-cart",children:[Object(p.jsx)("th",{children:" Image"}),Object(p.jsx)("th",{children:" Product"}),Object(p.jsx)("th",{children:" Price"})]}),t.length?t.map((function(e,t){return Object(p.jsxs)("tr",{children:[Object(p.jsxs)("td",{children:["  ",Object(p.jsx)("img",{className:"item-in-cart-image",src:e.url}),"  "]}),Object(p.jsxs)("td",{children:[" ",e.name," "]}),Object(p.jsxs)("td",{children:[" ",e.price," $ "]})]},t)})):Object(p.jsx)("h2",{children:" No items yet"}),Object(p.jsxs)("div",{className:"sum-section",children:[Object(p.jsxs)("span",{children:["  Subtotal  ",Object(p.jsxs)("span",{className:"sum-item",children:[" ",i," $ "]}),"   "]}),Object(p.jsxs)("span",{children:[" Tax ",Object(p.jsxs)("span",{className:"sum-item",children:["  ",u()," $ "]})," "]}),Object(p.jsxs)("span",{children:[" Total ",Object(p.jsxs)("span",{className:"sum-item",children:[" ",u()+i," $ "]}),"  "]}),Object(p.jsx)("button",{onClick:b,className:"special-btn cart-btn pay-btn",children:" Buy"})]})]})}function E(){var e=Object(n.useState)(null),t=Object(j.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)({term:""}),r=Object(j.a)(s,2),i=r[0],o=r[1],u=Object(n.useState)(a),h=Object(j.a)(u,2),b=h[0],m=h[1];Object(n.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.useEffect)((function(){if(a){var e=a.filter((function(e){return e.toLowerCase().includes(i.term.toLowerCase())}));m(e)}}),[i]);var O=function(){var e=Object(d.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("/api/","log"));case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{className:"logs-title",children:" LOGS"}),Object(p.jsx)("input",{className:"search",placeholder:"Search by key word",type:"Search",id:"Search",name:"Search",value:i.term,onChange:function(e){var t=e.target,a="number"===t.type?+t.value:t.value;o({term:a})}}),Object(p.jsx)("div",{className:"logs-container",children:b&&b.map((function(e,t){return Object(p.jsxs)("div",{children:[" ",t!==a.length-1?t+1+")":""," ",e," "]},t)}))})]})}a(75);var H=a(3);var B=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(null),r=Object(j.a)(s,2),o=r[0],u=r[1],h=Object(n.useState)([]),x=Object(j.a)(h,2),g=x[0],f=x[1];Object(n.useEffect)((function(){console.log("here");var e=localStorage.getItem("user");e&&u(JSON.parse(e))}),[]),Object(n.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var v=function(){var e=Object(d.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("/api/","candy"));case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(e){return e.loggedInUser?Object(p.jsx)(H.b,Object(i.a)(Object(i.a)({},e),{},{component:e.component,path:e.path})):Object(p.jsx)(H.a,{to:{pathname:"/Signup",state:{loggedInUser:e.loggedInUser},handleLogin:u}})};return Object(p.jsx)("div",{className:"App main-layout",children:Object(p.jsxs)(b.a,{children:[Object(p.jsx)(m,{loggedInUser:o,handleLogin:u}),Object(p.jsxs)(H.d,{children:[Object(p.jsx)(w,{loggedInUser:o,exact:!0,component:N,path:"/"}),Object(p.jsx)(w,{loggedInUser:o,exact:!0,component:F,path:"/Contact"}),Object(p.jsx)(w,{loggedInUser:o,exact:!0,component:I,path:"/Map"}),Object(p.jsx)(w,{loggedInUser:o,exact:!0,component:R,path:"/Readme"}),Object(p.jsx)(H.b,{path:"/Cart",render:function(e){return Object(p.jsx)(T,Object(i.a)({userCart:g,loggedInUser:o,setUserCart:f},e))}}),Object(p.jsx)(H.b,{exact:!0,component:M,path:"/Signup"}),Object(p.jsx)(H.b,{exact:!0,component:E,path:"/Admin"}),Object(p.jsx)(w,{loggedInUser:o,path:"/CandyPage",render:function(e){return Object(p.jsx)(C,Object(i.a)({setUserCart:f,userCart:g,candies:a},e))},exact:!0})]}),Object(p.jsx)(O,{})]})})},D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,80)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(B,{})}),document.getElementById("root")),D()}},[[76,1,2]]]);
//# sourceMappingURL=main.776f4958.chunk.js.map