(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{423:function(t,e,o){var content=o(444);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(34).default)("1c1dcc63",content,!0,{sourceMap:!1})},443:function(t,e,o){"use strict";o(423)},444:function(t,e,o){var n=o(33)((function(i){return i[1]}));n.push([t.i,".b4-hello[data-v-29d2905d]{padding-top:50px;text-align:center}.b3-hello[data-v-29d2905d]{padding:30px}.b2-hello h1[data-v-29d2905d]{font-size:22px;font-weight:700}.b2-hello p[data-v-29d2905d]{color:#bbb;font-size:16px;font-weight:600;margin-top:16px}.body-o-2[data-v-29d2905d]{height:16vh}.body-o-1[data-v-29d2905d],.body-o-2[data-v-29d2905d]{padding:13px;text-align:center}.body-o-1[data-v-29d2905d]{align-items:center;display:flex;font-size:14px;height:30vh;justify-content:center}.body-o-1 h1[data-v-29d2905d]{font-size:22px;font-weight:700}.body-o-1 p[data-v-29d2905d]{color:#bbb;font-size:16px;font-weight:600;margin-top:16px}.header-out[data-v-29d2905d]{height:54vh;padding:13px}.header-box[data-v-29d2905d]{background:url(/back1.png);background-position:50%;background-size:cover;border-radius:16px;height:100%;overflow:hidden;width:100%}",""]),n.locals={},t.exports=n},503:function(t,e,o){"use strict";o.r(e);var n=o(205),r=o(417),l=o(10),c=(o(51),o(1)),d=o(257),v=o(22),f=o(23),h=o(48),m=function(){function t(){Object(v.a)(this,t)}var e;return Object(f.a)(t,null,[{key:"signUp",value:(e=Object(l.a)(regeneratorRuntime.mark((function t(){var e,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new h.a,t.next=3,Object(h.f)(Object(h.c)(),e);case 3:o=t.sent,console.log(o);case 5:case"end":return t.stop()}}),t)}))),function(){return e.apply(this,arguments)})}]),t}(),_=c.a.extend({data:function(){return{view:"landing",email:"",password:"",displayName:"",confirmPassword:"",loading:!1}},methods:{signUpGoogle:function(){return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:m.signUp();case 1:case"end":return t.stop()}}),t)})))()},signIn:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.loading=!0,o=new d.a,e.next=5,o.signIn(t.email,t.password);case 5:t.$store.commit("setUserHasLoggedIn",!0),t.$router.push("/"),t.loading=!1,e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),t.loading=!1,alert(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))()},signUp:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.password!=t.confirmPassword){e.next=17;break}return o=new d.a,e.next=4,o.signUp(t.email,t.password,t.displayName);case 4:if(!(n=e.sent)){e.next=15;break}return e.prev=6,e.next=9,o.updateProfile(n,t.displayName);case 9:t.$router.push("/"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(6),alert(e.t0);case 15:e.next=18;break;case 17:alert("not matching");case 18:case"end":return e.stop()}}),e,null,[[6,12]])})))()}}}),x=(o(443),o(60)),component=Object(x.a)(_,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticStyle:{position:"relative"}},["landing"==t.view?e("section",[t._m(0),t._v(" "),e("section",{staticClass:"body-out"},[t._m(1),t._v(" "),e("div",{staticClass:"body-o-2"},[e(n.a,{on:{click:function(e){t.view="register"}}},[t._v("\n        Register\n      ")]),t._v(" "),e(n.a,{staticClass:"ml-2 black--text",attrs:{color:"primary"},on:{click:function(e){t.view="login"}}},[t._v("\n        Sign in\n      ")])],1)])]):t._e(),t._v(" "),"login"==t.view?e("section",{staticStyle:{height:"100vh",display:"flex","align-items":"center","justify-content":"center"}},[e("section",{staticStyle:{width:"100%"}},[t._m(2),t._v(" "),e("div",{staticClass:"b3-hello"},[e(r.a,{staticClass:"mb-0 pb-0",attrs:{label:"Enter Email",solo:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),e(r.a,{staticStyle:{"margin-top":"-10px"},attrs:{label:"Password",solo:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),t._m(3),t._v(" "),e(n.a,{staticClass:"black--text",attrs:{loading:t.loading,block:"",color:"primary"},on:{click:t.signIn}},[t._v("Sign in")])],1),t._v(" "),t._m(4),t._v(" "),e("div",{staticStyle:{"text-align":"center","padding-top":"10px"}},[e("img",{staticClass:"mr-5",attrs:{height:"33",src:"https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png",alt:"",srcset:""},on:{click:function(e){return t.signUpGoogle()}}}),t._v(" "),e("img",{attrs:{height:"33",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/1724px-Apple_logo_white.svg.png",alt:""}})]),t._v(" "),e("img",{staticStyle:{position:"absolute",top:"58px",height:"100px",transform:"rotate(90deg)"},attrs:{src:"/logo1.png"}})])]):t._e(),t._v(" "),"register"==t.view?e("section",{staticStyle:{height:"100vh",display:"flex","align-items":"center","justify-content":"center"}},[e("section",{staticStyle:{width:"100%"}},[t._m(5),t._v(" "),e("div",{staticClass:"b3-hello"},[e(r.a,{staticClass:"mb-0 pb-0",attrs:{label:"Display Name",solo:""},model:{value:t.displayName,callback:function(e){t.displayName=e},expression:"displayName"}}),t._v(" "),e(r.a,{staticClass:"mb-0 pb-0",attrs:{label:"Enter Email",solo:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),e(r.a,{staticStyle:{"margin-top":"-10px"},attrs:{label:"Password",solo:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),e(r.a,{staticStyle:{"margin-top":"-10px"},attrs:{label:"Confirm Password",solo:""},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}}),t._v(" "),t._m(6),t._v(" "),e(n.a,{staticClass:"black--text",attrs:{block:"",color:"primary",loading:t.loading},on:{click:t.signUp}},[t._v("Sign Up")])],1),t._v(" "),e("div",{staticClass:"b4-hello"},[e("p",{staticStyle:{"margin-top":"-10px",display:"inherit",color:"#999","font-size":"13px"},on:{click:function(e){t.view="register"}}},[t._v("Sign in now")])]),t._v(" "),e("img",{staticStyle:{position:"absolute",bottom:"0px",height:"100px",left:"20px",transform:"rotate(0deg)"},attrs:{src:"/logo1.png"}})])]):t._e()])}),[function(){var t=this._self._c;this._self._setupProxy;return t("section",{staticClass:"header-out"},[t("div",{staticClass:"header-box"})])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"body-o-1"},[e("div",[e("h1",[t._v("Discover Your "),e("br"),t._v("Dream Tasks Here")]),t._v(" "),e("p",[t._v("Explore all the most existing tasks"),e("br"),t._v(" based on what are you trying to do.")])])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"b2-hello"},[e("div",{staticStyle:{"text-align":"center"}},[e("h1",[t._v("Hello Again!")]),t._v(" "),e("p",[t._v("Cool Welcome back you've"),e("br"),t._v(" been missed!")])])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticStyle:{"text-align":"right"}},[e("p",{staticStyle:{"margin-top":"-10px",display:"inherit",color:"#999","font-size":"13px"}},[t._v("Recovery Password")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"b4-hello"},[e("p",{staticStyle:{"margin-top":"-10px",display:"inherit",color:"#999","font-size":"13px"}},[t._v("Or Continue With")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"b2-hello"},[e("div",{staticStyle:{"text-align":"center"}},[e("h1",[t._v("Sign Up Now!")]),t._v(" "),e("p",[t._v("WooHoo let's get start to "),e("br"),t._v("create some tasks!")])])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticStyle:{"text-align":"right"}},[e("p",{staticStyle:{"margin-top":"-10px",display:"inherit",color:"#999","font-size":"13px"}},[t._v("Recovery Password")])])}],!1,null,"29d2905d",null);e.default=component.exports}}]);