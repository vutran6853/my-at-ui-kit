(function(e){function t(t){for(var a,s,o=t[0],l=t[1],u=t[2],f=0,m=[];f<o.length;f++)s=o[f],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&m.push(r[s][0]),r[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);c&&c(t);while(m.length)m.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var l=n[o];0!==r[l]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},i=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("router-view")],1)},i=[],s=n("2877"),o={},l=Object(s["a"])(o,r,i,!1,null,null,null),u=l.exports,c=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home-container"},[e.state.isAtDefaultView?n("form",{staticClass:"home-email-container"},[n("h3",[e._v("Enter your Email")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.state.userEmail,expression:"state.userEmail"}],attrs:{placeholder:"Please enter email",type:"email"},domProps:{value:e.state.userEmail},on:{input:function(t){t.target.composing||e.$set(e.state,"userEmail",t.target.value)}}}),n("at-button",{on:{click:e.enableShareEmailView}},[e._v("Start new Session")])],1):e.state.isAtShareEmailView?n("div",{staticClass:"home-share-container"},[n("form",{staticClass:"home-share-email-container"},[n("p",[e._v("Share link")]),n("a",[e._v(e._s(e.state.userEmail))])]),n("at-button",{attrs:{type:"primary"},on:{click:e.enableEntryView}},[e._v("Next")])],1):e.state.isAtEntryPinView?n("div",{staticClass:"home-entry-container"},[n("form",{staticClass:"home-entry-pin-container"},[n("h3",[e._v("Set entry Pin")]),n("at-input",{attrs:{placeholder:"Please enter new PIN"},model:{value:e.state.userPin,callback:function(t){e.$set(e.state,"userPin",t)},expression:"state.userPin"}}),n("p",[e._v("This will make sure only who should join is able to join.")])],1),n("at-button",{attrs:{type:"primary"},on:{click:e.routeToChatRoom}},[e._v("Next")])],1):e._e()])},m=[],h=(n("caad"),n("2532"),{name:"Home",data:function(){return{state:{userEmail:"",userPin:"",isAtDefaultView:!0,isAtShareEmailView:!1,isAtEntryPinView:!1}}},methods:{enableShareEmailView:function(){""!==this.state.userEmail&&this.state.userEmail.includes("@")?(this.state.isAtShareEmailView=!0,this.state.isAtDefaultView=!1):this.$Notify({title:"Warning",message:"Please enter vaild email"})},enableEntryView:function(){this.state.isAtShareEmailView=!1,this.state.isAtEntryPinView=!0},routeToChatRoom:function(){""!==this.state.userPin?this.$router.push({path:"/chatroom"}):this.$Notify({title:"Warning",message:"Please enter new PIN."})}}}),p=h,v=(n("8b71"),Object(s["a"])(p,f,m,!1,null,null,null)),d=v.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"chat-room-container"},[e._m(0),n("at-button",{attrs:{type:"success"},on:{click:e.routeTo}},[e._v("Start testing")])],1)},y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"chat-room-inner-container"},[n("div",{staticClass:"chat-room-inner-left-container"},[n("p",[e._v("User 1")]),n("p",[e._v("User 2")])]),n("div",[n("p",[e._v("Live Text by all Attendees")])])])}],_={name:"Chatroom",methods:{routeTo:function(){this.$router.push({path:"/finalScreen"})}}},w=_,E=(n("6028"),Object(s["a"])(w,b,y,!1,null,null,null)),g=E.exports,P=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},S=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"finalscreen-container"},[a("span",{staticClass:"outer-icon"},[a("img",{attrs:{src:n("f222"),alt:"check"}})]),a("div",[a("h6",[e._v("Great session")]),a("p",[e._v("The notes have new been send to everyone.")])])])}],x={name:"FinalScreen",mounted:function(){var e=this;setTimeout((function(){e.$router.push({path:"/"})}),5e3)}},j=x,C=(n("d984"),Object(s["a"])(j,P,S,!1,null,null,null)),O=C.exports;a["default"].use(c["a"]);var V=[{path:"/",name:"Home",component:d},{path:"/chatroom",name:"ChatRoom",component:g},{path:"/finalScreen",name:"FinalScreen",component:O}],$=new c["a"]({mode:"history",base:"/",routes:V}),k=$,A=n("44e4"),T=n.n(A);n("c58f");a["default"].use(T.a),a["default"].config.productionTip=!1,new a["default"]({router:k,render:function(e){return e(u)}}).$mount("#app")},6028:function(e,t,n){"use strict";var a=n("c5ee"),r=n.n(a);r.a},"88d7":function(e,t,n){},"8b71":function(e,t,n){"use strict";var a=n("88d7"),r=n.n(a);r.a},b7f0:function(e,t,n){},c5ee:function(e,t,n){},d984:function(e,t,n){"use strict";var a=n("b7f0"),r=n.n(a);r.a},f222:function(e,t,n){e.exports=n.p+"img/check.10a5b071.svg"}});
//# sourceMappingURL=app.5bbe1ca8.js.map