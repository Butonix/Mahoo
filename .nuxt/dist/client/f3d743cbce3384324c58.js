(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{312:function(t,e,n){"use strict";var r=n(3),o=n(20),c=n(26),l=n(181),h=n(81),f=n(10),m=n(82).f,d=n(127).f,v=n(11).f,w=n(313).trim,_=r.Number,$=_,k=_.prototype,C="Number"==c(n(126)(k)),y="trim"in String.prototype,x=function(t){var e=h(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,c=(e=y?e.trim():w(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,f=l.length;i<f;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,r)}}return+e};if(!_(" 0o1")||!_("0b1")||_("+0x1")){_=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof _&&(C?f(function(){k.valueOf.call(n)}):"Number"!=c(n))?l(new $(x(e)),n,_):x(e)};for(var E,R=n(9)?m($):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;R.length>I;I++)o($,E=R[I])&&!o(_,E)&&v(_,E,d($,E));_.prototype=k,k.constructor=_,n(12)(r,"Number",_)}},313:function(t,e,n){var r=n(8),o=n(25),c=n(10),l=n(314),h="["+l+"]",f=RegExp("^"+h+h+"*"),m=RegExp(h+h+"*$"),d=function(t,e,n){var o={},h=c(function(){return!!l[t]()||"​"!="​"[t]()}),f=o[t]=h?e(v):l[t];n&&(o[n]=f),r(r.P+r.F*h,"String",o)},v=d.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(m,"")),t};t.exports=d},314:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},322:function(t,e,n){},323:function(t,e,n){},324:function(t,e,n){},325:function(t,e,n){},326:function(t,e,n){},359:function(t,e,n){"use strict";var r=n(322);n.n(r).a},360:function(t,e,n){"use strict";var r=n(323);n.n(r).a},361:function(t,e,n){"use strict";var r=n(324);n.n(r).a},362:function(t,e,n){"use strict";var r=n(325);n.n(r).a},363:function(t,e,n){"use strict";var r=n(326);n.n(r).a},365:function(t,e,n){"use strict";n.r(e);var r={components:{},props:{},data:function(){return{headers:[{route:"/",name:"首页"},{route:"/tag/2he",name:"动漫"},{route:"/tag/285",name:"游戏"},{route:"/tag/3p6",name:"话题"}]}},computed:{login:function(){return this.$store.state.login},user:function(){return this.$store.state.user}},watch:{},created:function(){},mounted:function(){},methods:{handleLogout:function(){this.$store.dispatch("removeAuth"),this.$cookie.remove("JWT-TOKEN"),this.$channel.socketDisconnect(),window.location="/"},handleSignIn:function(){this.$channel.$emit("sign-in")}}},o=(n(359),n(24)),c=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{attrs:{id:"page-header"}},[n("div",{staticClass:"header-fixed"},[n("div",{staticClass:"container nav"},[n("nav",{staticClass:"left"},[n("nuxt-link",{staticClass:"logo",attrs:{to:"/"}},[n("img",{attrs:{src:t.$resize("default-poster",{width:32}),alt:"calibur"}})]),t._v(" "),n("v-switcher",{attrs:{headers:t.headers,routable:!0,align:"start"}},t._l(t.headers,function(e,r){return n("nuxt-link",{key:r,attrs:{slot:"tab-"+r,to:e.route},slot:"tab-"+r},[n("span",{domProps:{textContent:t._s(e.name)}})])}),1)],1),t._v(" "),n("div",{staticClass:"right"},[n("no-ssr",[t.login?n("div",{staticClass:"user-panel"},[n("nuxt-link",{staticClass:"avatar",attrs:{to:t.$alias.user(t.user.slug)}},[n("img",{attrs:{src:t.$resize(t.user.avatar,{width:32}),alt:t.user.nickname}})])],1):t._e()]),t._v("\n          \n        "),t.login?n("el-button",{attrs:{type:"text"},on:{click:t.handleLogout}},[t._v("\n          退出\n        ")]):n("el-button",{attrs:{type:"text"},on:{click:t.handleSignIn}},[t._v("\n          登录\n        ")]),t._v("\n          \n        "),n("nuxt-link",{attrs:{to:"/create/cosplay/"}},[n("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-s-promotion"}},[t._v("\n            投稿\n          ")])],1)],1)])]),t._v(" "),n("div",{staticClass:"header-shim"})])},[],!1,null,null,null).exports,l=n(80),h={name:"SignInForm",data:function(){return{form:{access:"",secret:"",remember:!0},rule:{access:[{validator:function(t,e,n){return e?11!==e.length?n(new Error("请填写11位手机号")):void n():n(new Error("请填写手机号"))},trigger:"blur"}],secret:[{validator:function(t,e,n){return""===e?n(new Error("请填写登录密码")):e.length<6?n(new Error("密码不能小于6位")):e.length>16?n(new Error("密码不能大于16位")):void n()},trigger:"blur"}]},loading:!1,watchPwd:!1,showOAuth:!0}},methods:{authQQ:function(){var t=this.$route.query.redirect?this.$route.query.redirect:encodeURIComponent(window.location.href);window.location.href="https://api.calibur.tv/callback/oauth2/qq?from=sign&redirect=".concat(t)},authWechat:function(){var t=this.$route.query.redirect?this.$route.query.redirect:encodeURIComponent(window.location.href);window.location.href="https://api.calibur.tv/callback/oauth2/wechat?from=sign&redirect=".concat(t)},submitForm:function(){var t=this;this.$refs.form.validate(function(e){if(!e)return!1;t.login()})},login:function(){var t=this;this.loading||(this.loading=!0,this.$captcha({success:function(e){var data=e.data;Object(l.d)(t,{access:t.form.access,secret:t.form.secret,remember:t.form.remember,geetest:data}).then(function(e){t.$cookie.set("JWT-TOKEN",e,{expires:t.form.remember?365:1}),window.location.reload()}).catch(function(e){t.$toast.error(e.message),t.loading=!1})},close:function(){t.loading=!1}}))},showReset:function(){this.$emit("to-reset"),this.$refs.form.resetFields()},showRegister:function(){this.$emit("to-register"),this.$refs.form.resetFields()}}},f=(n(360),Object(o.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sign-in-form"},[n("el-form",{ref:"form",attrs:{model:t.form,rules:t.rule}},[n("el-form-item",{attrs:{prop:"access"}},[n("el-input",{attrs:{type:"text",placeholder:"手机（填写常用手机号，用于登录）"},model:{value:t.form.access,callback:function(e){t.$set(t.form,"access","string"==typeof e?e.trim():e)},expression:"form.access"}})],1),t._v(" "),n("el-form-item",{attrs:{prop:"secret"}},[n("el-input",{attrs:{type:t.watchPwd?"text":"password",placeholder:"密码（6-16个字符组成，区分大小写）"},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitForm(e)}},model:{value:t.form.secret,callback:function(e){t.$set(t.form,"secret","string"==typeof e?e.trim():e)},expression:"form.secret"}}),t._v(" "),t.form.secret.length>5?n("button",{staticClass:"watch-pwd",attrs:{type:"button"},on:{click:function(e){t.watchPwd=!t.watchPwd}}},[n("i",{staticClass:"iconfont icon-ai-eye"})]):t._e()],1),t._v(" "),n("el-form-item",{staticClass:"sign-in-opt"},[n("div",{staticClass:"opt-container"},[n("el-checkbox",{model:{value:t.form.remember,callback:function(e){t.$set(t.form,"remember",e)},expression:"form.remember"}},[t._v("\n          记住我\n        ")]),t._v(" "),t.showOAuth?n("ul",{staticClass:"provider"},[n("li",{on:{click:t.authQQ}},[n("i",{staticClass:"iconfont icon-qq"})]),t._v(" "),n("li",{on:{click:t.authWechat}},[n("i",{staticClass:"iconfont icon-v-chat"})])]):n("button",{attrs:{type:"button"},on:{click:function(e){t.showOAuth=!0}}},[t._v("\n          社交账号登录\n        ")])],1)]),t._v(" "),n("el-form-item",[n("el-button",{staticClass:"submit-btn",attrs:{loading:t.loading,type:"primary"},on:{click:t.submitForm}},[t._v("\n        登录\n      ")])],1)],1),t._v(" "),n("div",{staticClass:"others"},[n("a",{on:{click:t.showReset}},[t._v("忘记密码?>")]),t._v(" "),n("a",{on:{click:t.showRegister}},[t._v("点击注册»")])])],1)},[],!1,null,null,null).exports),m=(n(36),n(4)),d=(n(37),n(78),n(312),{name:"SignUpForm",props:{inviteCode:{type:[String,Number],default:""}},data:function(){return{watchPwd:!1,form:{access:"",secret:"",nickname:"",authCode:"",inviteCode:this.inviteCode},rule:{nickname:[{validator:function(t,e,n){if(""===e)return n(new Error("请先给自己起个名字"));var r=e.replace(/([\u4e00-\u9fa5])/g,"aa").trim().length;return r<2?n(new Error("昵称至少是2个字符")):r>14?n(new Error("昵称不能超过14个字符，1个汉字占2个字符")):/^([\u4e00-\u9fa5]|[a-z0-9])+$/i.test(e)?void n():n(new Error("昵称只能包含：中文、数字、字母"))},trigger:"blur"}],access:[{validator:function(t,e,n){return e?11!==e.length?n(new Error("请填写11位手机号")):/^(0|86|17951)?(1)[0-9]{10}$/.test(e)?void n():n(new Error("错误的手机号格式")):n(new Error("请填写手机号"))},trigger:"blur"}],secret:[{validator:function(t,e,n){return""===e?n(new Error("请填写登录密码")):e.length<6?n(new Error("密码不能小于6位")):e.length>16?n(new Error("密码不能大于16位")):void n()},trigger:"blur"}]},step:0,timeout:0}},computed:{submitBtnText:function(){return 0===this.step?"注册":1===this.step?"提交中...":2===this.step?"短信已发送":3===this.step?"注册中...":"注册"},submitBtnLoading:function(){return 1===this.step||3===this.step},submitBtnDisabled:function(){return 0!==this.timeout&&0===this.step||3===this.step},query:function(){return this.$route.query},paramsIsOK:function(){return!!(this.query.uid&&/^\d+$/.test(this.query.uid)&&this.query.time&&/^\d+$/.test(this.query.time)&&Date.now()<=1e3*this.query.time&&this.query.key===this.$md5("".concat(this.query.uid,"-the-world-").concat(this.query.time)))}},methods:{qqRegisterLink:function(){var link="https://api.calibur.tv/callback/oauth2/qq?from=sign";this.paramsIsOK?link="".concat(link,"&invite=").concat(this.query.uid):"about-invite-id"===this.$route.name&&(link="".concat(link,"&invite=").concat(this.$route.params.id));var t=this.$route.query.redirect?this.$route.query.redirect:encodeURIComponent(window.location.href);window.location.href="".concat(link,"&redirect=").concat(t)},wechatRegisterLink:function(){var link="https://api.calibur.tv/callback/oauth2/wechat?from=sign";this.paramsIsOK?link="".concat(link,"&invite=").concat(this.query.uid):"about-invite-id"===this.$route.name&&(link="".concat(link,"&invite=").concat(this.$route.params.id));var t=this.$route.query.redirect?this.$route.query.redirect:encodeURIComponent(window.location.href);window.location.href="".concat(link,"&redirect=").concat(t)},submitForm:function(){var t=this;this.$refs.form.validate(function(e){if(!e)return!1;0===t.step&&t.getRegisterAuthCode(),2===t.step&&t.openConfirmModal()})},getRegisterAuthCode:function(){var t=this;this.step=1,this.$captcha({success:function(){var e=Object(m.a)(regeneratorRuntime.mark(function e(n){var data,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return data=n.data,e.prev=1,e.next=4,Object(l.h)(t,{type:"sign_up",phone_number:t.form.access,geetest:data});case 4:t.step=2,t.openConfirmModal(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t.$toast.error(e.t0.message),t.step=0;case 12:return e.prev=12,t.timeout=60,r=setInterval(function(){--t.timeout||(t.step=0,clearInterval(r))},1e3),e.finish(12);case 16:case"end":return e.stop()}},e,null,[[1,8,12,16]])}));return function(t){return e.apply(this,arguments)}}(),close:function(){t.step=0}})},openConfirmModal:function(){var t=this;this.$prompt("请输入收到的验证码","短信已发送",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^\d{6}$/,inputErrorMessage:"验证码格式不正确"}).then(function(e){var n=e.value;t.form.authCode=n,t.step=3,t.signUp()}).catch(function(){})},signUp:function(){var t=this;Object(l.f)(this,{access:this.form.access,secret:this.form.secret,nickname:this.form.nickname,authCode:this.form.authCode,inviteCode:this.form.inviteCode}).then(function(e){t.$toast.success("注册成功！"),t.$cookie.set("JWT-TOKEN",e),window.location.reload()}).catch(function(e){t.step=0,t.$toast.error(e.message)})},showLogin:function(){this.$emit("to-login"),this.$refs.form.resetFields()}}}),v=(n(361),Object(o.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sign-up-form"},[n("el-form",{ref:"form",attrs:{model:t.form,rules:t.rule,"status-icon":""}},[n("el-form-item",{attrs:{prop:"nickname"}},[n("el-input",{attrs:{type:"text",placeholder:"昵称（2-14个字符组成，1个汉字占2个字符）","auto-complete":"off"},model:{value:t.form.nickname,callback:function(e){t.$set(t.form,"nickname","string"==typeof e?e.trim():e)},expression:"form.nickname"}})],1),t._v(" "),n("el-form-item",{attrs:{prop:"access"}},[n("el-input",{attrs:{type:"text",placeholder:"手机（填写常用手机号，用于登录）","auto-complete":"off"},model:{value:t.form.access,callback:function(e){t.$set(t.form,"access","string"==typeof e?e.trim():e)},expression:"form.access"}})],1),t._v(" "),n("el-form-item",{attrs:{prop:"secret"}},[n("el-input",{attrs:{type:t.watchPwd?"text":"password",placeholder:"密码（6-16个字符组成，区分大小写）","auto-complete":"off"},model:{value:t.form.secret,callback:function(e){t.$set(t.form,"secret","string"==typeof e?e.trim():e)},expression:"form.secret"}}),t._v(" "),t.form.secret.length>5?n("button",{staticClass:"watch-pwd",attrs:{type:"button"},on:{click:function(e){t.watchPwd=!t.watchPwd}}},[n("i",{staticClass:"iconfont icon-ai-eye"})]):t._e()],1),t._v(" "),t.inviteCode?t._e():n("el-form-item",[n("el-input",{attrs:{type:"number",placeholder:"邀请码（可为空）","auto-complete":"off"},model:{value:t.form.inviteCode,callback:function(e){t.$set(t.form,"inviteCode","string"==typeof e?e.trim():e)},expression:"form.inviteCode"}})],1),t._v(" "),n("el-form-item",[n("el-button",{staticClass:"submit-btn",attrs:{loading:t.submitBtnLoading,disabled:t.submitBtnDisabled,type:"primary"},on:{click:t.submitForm}},[t._v("\n        "+t._s(t.submitBtnText)+"\n        "),t.timeout?[t._v("\n          （"+t._s(t.timeout)+"s 后可重新获取）\n        ")]:t._e()],2)],1)],1),t._v(" "),n("div",{staticClass:"others"},[n("span",[t._v("社交账号注册")]),t._v(" "),n("ul",{staticClass:"provider"},[n("li",{on:{click:t.qqRegisterLink}},[n("i",{staticClass:"iconfont icon-qq"})]),t._v(" "),n("li",{on:{click:t.wechatRegisterLink}},[n("i",{staticClass:"iconfont icon-v-chat"})])]),t._v(" "),t.inviteCode?t._e():n("a",{on:{click:t.showLogin}},[t._v("已有账号»")])])],1)},[],!1,null,null,null).exports),w={name:"ResetPasswordForm",data:function(){return{form:{access:"",secret:"",authCode:""},rule:{access:[{validator:function(t,e,n){return e?11!==e.length?n(new Error("请填写11位手机号")):void n():n(new Error("请填写手机号"))},trigger:"blur"}],secret:[{validator:function(t,e,n){return""===e?n(new Error("请填写登录密码")):e.length<6?n(new Error("密码不能小于6位")):e.length>16?n(new Error("密码不能大于16位")):void n()},trigger:"blur"}]},step:0,timeout:0}},computed:{submitBtnText:function(){return 0===this.step?"立即重置":1===this.step?"提交中...":2===this.step?"短信已发送":3===this.step?"已重置":"立即重置"},submitBtnLoading:function(){return 1===this.step||3===this.step},submitBtnDisabled:function(){return 0!==this.timeout&&0===this.step||3===this.step}},methods:{submitForm:function(){var t=this;this.$refs.form.validate(function(e){if(!e)return!1;0===t.step&&t.getResetAuthCode(),2===t.step&&t.openConfirmModal()})},getResetAuthCode:function(){var t=this;this.step=1,this.$captcha({success:function(){var e=Object(m.a)(regeneratorRuntime.mark(function e(n){var data,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return data=n.data,e.prev=1,e.next=4,Object(l.h)(t,{type:"forgot_password",phone_number:t.form.access,geetest:data});case 4:t.step=2,t.openConfirmModal(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t.$toast.error(e.t0.message),t.step=0;case 12:return e.prev=12,t.timeout=60,r=setInterval(function(){--t.timeout||(t.step=0,clearInterval(r))},1e3),e.finish(12);case 16:case"end":return e.stop()}},e,null,[[1,8,12,16]])}));return function(t){return e.apply(this,arguments)}}(),close:function(){t.step=0}})},openConfirmModal:function(){var t=this;this.$prompt("请输入收到的验证码","短信已发送",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^\d{6}$/,inputErrorMessage:"验证码格式不正确"}).then(function(e){var n=e.value;t.form.authCode=n,t.step=3,t.signReset()}).catch(function(){})},signReset:function(){var t=Object(m.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(l.g)(this,{access:this.form.access,authCode:this.form.authCode,secret:this.form.secret});case 3:e=t.sent,this.$toast.success(e),this.showLogin(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),this.$toast.error(t.t0.message);case 11:return t.prev=11,this.step=0,t.finish(11);case 14:case"end":return t.stop()}},t,this,[[0,8,11,14]])}));return function(){return t.apply(this,arguments)}}(),showLogin:function(){this.$emit("to-login"),this.$refs.form.resetFields()},showRegister:function(){this.$emit("to-register"),this.$refs.form.resetFields()}}},_=(n(362),{name:"SignDialog",components:{SignUpForm:v,SignInForm:f,ResetPasswordForm:Object(o.a)(w,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"reset-password-form"},[n("el-form",{ref:"form",attrs:{model:t.form,rules:t.rule}},[n("el-form-item",{attrs:{prop:"access"}},[n("el-input",{attrs:{type:"text",placeholder:"手机号","auto-complete":"off"},model:{value:t.form.access,callback:function(e){t.$set(t.form,"access","string"==typeof e?e.trim():e)},expression:"form.access"}})],1),t._v(" "),n("el-form-item",{attrs:{prop:"secret"}},[n("el-input",{attrs:{type:"text",placeholder:"新密码","auto-complete":"off"},model:{value:t.form.secret,callback:function(e){t.$set(t.form,"secret","string"==typeof e?e.trim():e)},expression:"form.secret"}})],1),t._v(" "),n("el-form-item",[n("el-button",{staticClass:"submit-btn",attrs:{loading:t.submitBtnLoading,disabled:t.submitBtnDisabled,type:"primary"},on:{click:t.submitForm}},[t._v("\n        "+t._s(t.submitBtnText)+"\n        "),t.timeout?[t._v("\n          （"+t._s(t.timeout)+"s 后可重新获取）\n        ")]:t._e()],2)],1)],1),t._v(" "),n("div",{staticClass:"others"},[n("a",{on:{click:t.showLogin}},[t._v("返回登录>")]),t._v(" "),n("a",{on:{click:t.showRegister}},[t._v("点击注册»")])])],1)},[],!1,null,null,null).exports},data:function(){return{canRender:!1,showModal:!1,showSignIn:!1,showSignUp:!1,showReset:!1}},computed:{isGuest:function(){return!this.$store.state.login}},mounted:function(){var t=this;this.canRender=!0,this.$channel.$on("sign-in",function(){t.showLogin()}),this.$channel.$on("sign-up",function(){t.showRegister()})},methods:{showLogin:function(){this.showReset=!1,this.showModal=!0,this.showSignIn=!0,this.showSignUp=!1},showRegister:function(){this.showModal=!0,this.showSignUp=!0,this.showSignIn=!1},hiddenSign:function(){this.showModal=!1,this.showSignIn=!1,this.showSignUp=!1,this.showReset=!1}}}),$=(n(363),Object(o.a)(_,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.canRender?n("div",{staticClass:"sign-container"},[t.isGuest?n("div",{class:[t.showModal?"space-enter":"space-leave"],attrs:{id:"space3D"},on:{click:t.hiddenSign}},[n("div",{ref:"wrap",staticClass:"sign-modal-wrap"},[n("div",{staticClass:"sign-modal sign-in-modal",class:{"sign-in-init":!t.showSignIn&&!t.showSignUp,"sign-in-show":t.showSignIn&&!t.showSignUp,"sign-in-turn":!t.showSignIn&&t.showSignUp},on:{click:function(t){t.stopPropagation()}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showReset,expression:"showReset"}],staticClass:"form-container"},[n("reset-password-form",{on:{"to-login":function(e){t.showReset=!1},"to-register":t.showRegister}})],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.showReset,expression:"!showReset"}],staticClass:"form-container"},[n("sign-in-form",{on:{"to-reset":function(e){t.showReset=!0},"to-register":t.showRegister}})],1)]),t._v(" "),n("div",{staticClass:"sign-modal sign-up-modal",class:{"sign-up-init":!t.showSignUp&&!t.showSignIn,"sign-up-show":t.showSignUp&&!t.showSignIn,"sign-up-turn":!t.showSignUp&&t.showSignIn},on:{click:function(t){t.stopPropagation()}}},[n("div",{staticClass:"slogan"}),t._v(" "),n("div",{staticClass:"form-container"},[n("sign-up-form",{on:{"to-login":t.showLogin}})],1)])])]):t._e()]):t._e()},[],!1,null,null,null).exports),k=n(51),C={name:"WebLayout",components:{VHeader:c,SignDialog:$},mixins:[{beforeMount:function(){var t=Object(m.a)(regeneratorRuntime.mark(function t(){var e,n,r=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.$store.state.logging){t.next=4;break}e=this.$watch("$store.state.logging",function(){r.$store.state.isAuth?(r.$channel.socketConnect(),e()):r.$cookie.remove("JWT-TOKEN")}),t.next=10;break;case 4:return n=Object(k.a)(),this.$store.commit("SET_USER_TOKEN",n),t.next=8,this.$store.dispatch("initAuth");case 8:t.sent?this.$channel.socketConnect():this.$cookie.remove("JWT-TOKEN");case 10:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}],props:{},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},y=Object(o.a)(C,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"layout-web"}},[e("v-header"),this._v(" "),e("nuxt"),this._v(" "),e("sign-dialog")],1)},[],!1,null,null,null);e.default=y.exports}}]);