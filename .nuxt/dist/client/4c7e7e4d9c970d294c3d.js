(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{316:function(t,e,o){},317:function(t,e,o){},318:function(t,e,o){},319:function(t,e,o){},320:function(t,e,o){},373:function(t,e,o){t.exports=function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},o.p="/dist/",o(o.s=76)}({0:function(t,e,o){"use strict";function n(t,e,o,n,r,c,l,h){var d,m="function"==typeof t?t.options:t;if(e&&(m.render=e,m.staticRenderFns=o,m._compiled=!0),n&&(m.functional=!0),c&&(m._scopeId="data-v-"+c),l?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(l)},m._ssrRegister=d):r&&(d=h?function(){r.call(this,this.$root.$options.shadowRoot)}:r),d)if(m.functional){m._injectStyles=d;var f=m.render;m.render=function(t,e){return d.call(e),f(t,e)}}else{var v=m.beforeCreate;m.beforeCreate=v?[].concat(v,d):[d]}return{exports:t,options:m}}o.d(e,"a",function(){return n})},76:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"el-badge"},[t._t("default"),o("transition",{attrs:{name:"el-zoom-in-center"}},[o("sup",{directives:[{name:"show",rawName:"v-show",value:!t.hidden&&(t.content||0===t.content||t.isDot),expression:"!hidden && (content || content === 0 || isDot)"}],staticClass:"el-badge__content",class:["el-badge__content--"+t.type,{"is-fixed":t.$slots.default,"is-dot":t.isDot}],domProps:{textContent:t._s(t.content)}})])],2)};n._withStripped=!0;var r={name:"ElBadge",props:{value:{},max:Number,isDot:Boolean,hidden:Boolean,type:{type:String,validator:function(t){return["primary","success","warning","info","danger"].indexOf(t)>-1}}},computed:{content:function(){if(!this.isDot){var t=this.value,e=this.max;return"number"==typeof t&&"number"==typeof e&&e<t?e+"+":t}}}},c=o(0),component=Object(c.a)(r,n,[],!1,null,null,null);component.options.__file="packages/badge/src/main.vue";var main=component.exports;main.install=function(t){t.component(main.name,main)};e.default=main}})},374:function(t,e,o){"use strict";var n=o(316);o.n(n).a},375:function(t,e,o){"use strict";var n=o(317);o.n(n).a},376:function(t,e,o){"use strict";var n=o(318);o.n(n).a},377:function(t,e,o){"use strict";var n=o(319);o.n(n).a},378:function(t,e,o){"use strict";var n=o(320);o.n(n).a},389:function(t,e,o){"use strict";o.r(e);var n=o(373),r=o.n(n),c=o(27);function l(t,e,o,n){var r,c=!1,l=0;function h(){r&&clearTimeout(r)}function d(){var d=this,m=Date.now()-l,f=arguments;function v(){l=Date.now(),o.apply(d,f)}c||(n&&!r&&v(),h(),void 0===n&&m>t?v():!0!==e&&(r=setTimeout(n?function(){r=void 0}:v,void 0===n?t-m:t)))}return"boolean"!=typeof e&&(n=o,o=e,e=void 0),d.cancel=function(){h(),c=!0},d}var h={components:{"el-badge":r.a},data:()=>({headers:[{route:"/",name:"首页"},{route:"/tag/2he",name:"动漫"},{route:"/tag/285",name:"游戏"},{route:"/tag/3p6",name:"话题"}]}),computed:{isAuth(){return this.$store.state.isAuth},user(){return this.$store.state.user},mailbox(){return this.$store.state.mailbox}},beforeMount(){this.$watch("isAuth",t=>{t&&this.getUnreadMessageCount()})},methods:{handleLogout(){Object(c.f)(this),this.$cookie.remove("JWT-TOKEN"),this.$channel.socketDisconnect(),window.location="/"},handleSignIn(){this.$channel.$emit("sign-in")},getUnreadMessageCount(){this.$store.dispatch("refreshMailbox");let t=Date.now(),e=!0;window.addEventListener("mousemove",l(3e3,()=>{t=Date.now()})),document.addEventListener("visibilitychange",()=>{e="visible"===document.visibilityState}),setInterval(()=>{e&&Date.now()-t<3e4&&this.$store.dispatch("refreshMailbox")},1e4)}}},d=(o(374),o(18)),m=Object(d.a)(h,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{attrs:{id:"page-header"}},[o("div",{staticClass:"header-fixed"},[o("div",{staticClass:"container nav"},[o("nav",{staticClass:"left"},[o("nuxt-link",{staticClass:"logo",attrs:{to:"/"}},[o("img",{attrs:{src:t.$resize("default-poster",{width:32}),alt:"calibur"}})]),t._v(" "),o("v-switcher",{attrs:{headers:t.headers,routable:!0,align:"start"}},t._l(t.headers,function(e,n){return o("nuxt-link",{key:n,attrs:{slot:"tab-"+n,to:e.route},slot:"tab-"+n},[o("span",{domProps:{textContent:t._s(e.name)}})])}),1)],1),t._v(" "),o("div",{staticClass:"right"},[t.isAuth?[o("div",{staticClass:"user-panel icon-link"},[o("nuxt-link",{staticClass:"avatar",attrs:{to:t.$alias.user(t.user.slug)}},[o("img",{attrs:{src:t.$resize(t.user.avatar,{width:64}),alt:t.user.nickname}})]),t._v(" "),o("div",{staticClass:"user-popover"},[o("div",{staticClass:"bottom"},[o("button",{on:{click:t.handleLogout}},[t._v("\n                  退出\n                ")])])])],1),t._v(" "),o("nuxt-link",{staticClass:"icon-link",attrs:{to:t.$alias.user(t.user.slug,"message")}},[o("el-badge",{attrs:{value:t.mailbox.unread_message_total,hidden:!t.mailbox.unread_message_total}},[o("i",{staticClass:"iconfont ic-message"})])],1),t._v(" "),o("nuxt-link",{staticClass:"icon-link",attrs:{to:t.$alias.user(t.user.slug,"message")}},[o("el-badge",{attrs:{value:t.mailbox.unread_notice_total,hidden:!t.mailbox.unread_notice_total}},[o("i",{staticClass:"iconfont ic-remind"})])],1)]:[o("el-button",{attrs:{type:"text"},on:{click:t.handleSignIn}},[t._v("\n            登录\n          ")])],t._v(" "),o("div",{staticClass:"creator-wrap"},[o("nuxt-link",{attrs:{to:"/create/daily/"}},[o("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-s-promotion"}},[t._v("\n              投稿\n            ")])],1)],1)],2)])]),t._v(" "),o("div",{staticClass:"header-shim"})])},[],!1,null,null,null).exports,f={name:"SignInForm",data:()=>({form:{access:"",secret:"",remember:!0},rule:{access:[{validator:(t,e,o)=>e?11!==e.length?o(new Error("请填写11位手机号")):void o():o(new Error("请填写手机号")),trigger:"blur"}],secret:[{validator:(t,e,o)=>""===e?o(new Error("请填写登录密码")):e.length<6?o(new Error("密码不能小于6位")):e.length>16?o(new Error("密码不能大于16位")):void o(),trigger:"blur"}]},loading:!1,watchPwd:!1,showOAuth:!0}),methods:{authQQ(){const t=this.$route.query.redirect?this.$route.query.redirect:encodeURIComponent(window.location.href);window.location.href="https://api.calibur.tv/callback/oauth2/qq?from=sign&redirect=".concat(t)},authWechat(){const t=this.$route.query.redirect?this.$route.query.redirect:encodeURIComponent(window.location.href);window.location.href="https://api.calibur.tv/callback/oauth2/wechat?from=sign&redirect=".concat(t)},submitForm(){this.$refs.form.validate(t=>{if(!t)return!1;this.login()})},login(){this.loading||(this.loading=!0,this.$captcha({success:t=>{let{data:data}=t;Object(c.e)(this,{access:this.form.access,secret:this.form.secret,remember:this.form.remember,geetest:data}).then(t=>{this.$cookie.set("JWT-TOKEN",t,{expires:this.form.remember?365:1}),window.location.reload()}).catch(t=>{this.$toast.error(t.message),this.loading=!1})},close:()=>{this.loading=!1}}))},showReset(){this.$emit("to-reset"),this.$refs.form.resetFields()},showRegister(){this.$emit("to-register"),this.$refs.form.resetFields()}}},v=(o(375),Object(d.a)(f,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"sign-in-form"},[o("el-form",{ref:"form",attrs:{model:t.form,rules:t.rule}},[o("el-form-item",{attrs:{prop:"access"}},[o("el-input",{attrs:{type:"text",placeholder:"手机（填写常用手机号，用于登录）"},model:{value:t.form.access,callback:function(e){t.$set(t.form,"access","string"==typeof e?e.trim():e)},expression:"form.access"}})],1),t._v(" "),o("el-form-item",{attrs:{prop:"secret"}},[o("el-input",{attrs:{type:t.watchPwd?"text":"password",placeholder:"密码（6-16个字符组成，区分大小写）"},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitForm(e)}},model:{value:t.form.secret,callback:function(e){t.$set(t.form,"secret","string"==typeof e?e.trim():e)},expression:"form.secret"}}),t._v(" "),t.form.secret.length>5?o("button",{staticClass:"watch-pwd",attrs:{type:"button"},on:{click:function(e){t.watchPwd=!t.watchPwd}}},[o("i",{staticClass:"iconfont ic-ai-eye"})]):t._e()],1),t._v(" "),o("el-form-item",{staticClass:"sign-in-opt"},[o("div",{staticClass:"opt-container"},[o("el-checkbox",{model:{value:t.form.remember,callback:function(e){t.$set(t.form,"remember",e)},expression:"form.remember"}},[t._v("\n          记住我\n        ")]),t._v(" "),t.showOAuth?o("ul",{staticClass:"provider"},[o("li",{on:{click:t.authQQ}},[o("i",{staticClass:"iconfont ic-qq"})]),t._v(" "),o("li",{on:{click:t.authWechat}},[o("i",{staticClass:"iconfont ic-v-chat"})])]):o("button",{attrs:{type:"button"},on:{click:function(e){t.showOAuth=!0}}},[t._v("\n          社交账号登录\n        ")])],1)]),t._v(" "),o("el-form-item",[o("el-button",{staticClass:"submit-btn",attrs:{loading:t.loading,type:"primary"},on:{click:t.submitForm}},[t._v("\n        登录\n      ")])],1)],1),t._v(" "),o("div",{staticClass:"others"},[o("a",{on:{click:t.showReset}},[t._v("忘记密码?>")]),t._v(" "),o("a",{on:{click:t.showRegister}},[t._v("点击注册»")])])],1)},[],!1,null,null,null).exports),w=o(2),_=(o(63),{name:"SignUpForm",props:{inviteCode:{type:[String,Number],default:""}},data(){return{watchPwd:!1,form:{access:"",secret:"",nickname:"",authCode:"",inviteCode:this.inviteCode},rule:{nickname:[{validator:(t,e,o)=>{if(""===e)return o(new Error("请先给自己起个名字"));const n=e.replace(/([\u4e00-\u9fa5])/g,"aa").trim().length;return n<2?o(new Error("昵称至少是2个字符")):n>14?o(new Error("昵称不能超过14个字符，1个汉字占2个字符")):/^([\u4e00-\u9fa5]|[a-z0-9])+$/i.test(e)?void o():o(new Error("昵称只能包含：中文、数字、字母"))},trigger:"blur"}],access:[{validator:(t,e,o)=>e?11!==e.length?o(new Error("请填写11位手机号")):/^(0|86|17951)?(1)[0-9]{10}$/.test(e)?void o():o(new Error("错误的手机号格式")):o(new Error("请填写手机号")),trigger:"blur"}],secret:[{validator:(t,e,o)=>""===e?o(new Error("请填写登录密码")):e.length<6?o(new Error("密码不能小于6位")):e.length>16?o(new Error("密码不能大于16位")):void o(),trigger:"blur"}]},step:0,timeout:0}},computed:{submitBtnText(){return 0===this.step?"注册":1===this.step?"提交中...":2===this.step?"短信已发送":3===this.step?"注册中...":"注册"},submitBtnLoading(){return 1===this.step||3===this.step},submitBtnDisabled(){return 0!==this.timeout&&0===this.step||3===this.step},query(){return this.$route.query},paramsIsOK(){return!!(this.query.uid&&/^\d+$/.test(this.query.uid)&&this.query.time&&/^\d+$/.test(this.query.time)&&Date.now()<=1e3*this.query.time&&this.query.key===this.$md5("".concat(this.query.uid,"-the-world-").concat(this.query.time)))}},methods:{qqRegisterLink(){let link="https://api.calibur.tv/callback/oauth2/qq?from=sign";this.paramsIsOK?link="".concat(link,"&invite=").concat(this.query.uid):"about-invite-id"===this.$route.name&&(link="".concat(link,"&invite=").concat(this.$route.params.id));const t=this.$route.query.redirect?this.$route.query.redirect:encodeURIComponent(window.location.href);window.location.href="".concat(link,"&redirect=").concat(t)},wechatRegisterLink(){let link="https://api.calibur.tv/callback/oauth2/wechat?from=sign";this.paramsIsOK?link="".concat(link,"&invite=").concat(this.query.uid):"about-invite-id"===this.$route.name&&(link="".concat(link,"&invite=").concat(this.$route.params.id));const t=this.$route.query.redirect?this.$route.query.redirect:encodeURIComponent(window.location.href);window.location.href="".concat(link,"&redirect=").concat(t)},submitForm(){this.$refs.form.validate(t=>{if(!t)return!1;0===this.step&&this.getRegisterAuthCode(),2===this.step&&this.openConfirmModal()})},getRegisterAuthCode(){var t=this;this.step=1,this.$captcha({success:function(){var e=Object(w.a)(function*(e){let{data:data}=e;try{yield Object(c.i)(t,{type:"sign_up",phone_number:t.form.access,geetest:data}),t.step=2,t.openConfirmModal()}catch(e){t.$toast.error(e.message),t.step=0}finally{t.timeout=60;const e=setInterval(()=>{--t.timeout||(t.step=0,clearInterval(e))},1e3)}});return function(t){return e.apply(this,arguments)}}(),close:()=>{this.step=0}})},openConfirmModal(){this.$prompt("请输入收到的验证码","短信已发送",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^\d{6}$/,inputErrorMessage:"验证码格式不正确"}).then(t=>{let{value:e}=t;this.form.authCode=e,this.step=3,this.signUp()}).catch(()=>{})},signUp(){Object(c.g)(this,{access:this.form.access,secret:this.form.secret,nickname:this.form.nickname,authCode:this.form.authCode,inviteCode:this.form.inviteCode}).then(t=>{this.$cookie.set("JWT-TOKEN",t),this.$toast.success("注册成功！").then(()=>{window.location.reload()})}).catch(t=>{this.step=0,this.$toast.error(t.message)})},showLogin(){this.$emit("to-login"),this.$refs.form.resetFields()}}}),y=(o(376),Object(d.a)(_,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"sign-up-form"},[o("el-form",{ref:"form",attrs:{model:t.form,rules:t.rule,"status-icon":""}},[o("el-form-item",{attrs:{prop:"nickname"}},[o("el-input",{attrs:{type:"text",placeholder:"昵称（2-14个字符组成，1个汉字占2个字符）","auto-complete":"off"},model:{value:t.form.nickname,callback:function(e){t.$set(t.form,"nickname","string"==typeof e?e.trim():e)},expression:"form.nickname"}})],1),t._v(" "),o("el-form-item",{attrs:{prop:"access"}},[o("el-input",{attrs:{type:"text",placeholder:"手机（填写常用手机号，用于登录）","auto-complete":"off"},model:{value:t.form.access,callback:function(e){t.$set(t.form,"access","string"==typeof e?e.trim():e)},expression:"form.access"}})],1),t._v(" "),o("el-form-item",{attrs:{prop:"secret"}},[o("el-input",{attrs:{type:t.watchPwd?"text":"password",placeholder:"密码（6-16个字符组成，区分大小写）","auto-complete":"off"},model:{value:t.form.secret,callback:function(e){t.$set(t.form,"secret","string"==typeof e?e.trim():e)},expression:"form.secret"}}),t._v(" "),t.form.secret.length>5?o("button",{staticClass:"watch-pwd",attrs:{type:"button"},on:{click:function(e){t.watchPwd=!t.watchPwd}}},[o("i",{staticClass:"iconfont ic-ai-eye"})]):t._e()],1),t._v(" "),t.inviteCode?t._e():o("el-form-item",[o("el-input",{attrs:{type:"number",placeholder:"邀请码（可为空）","auto-complete":"off"},model:{value:t.form.inviteCode,callback:function(e){t.$set(t.form,"inviteCode","string"==typeof e?e.trim():e)},expression:"form.inviteCode"}})],1),t._v(" "),o("el-form-item",[o("el-button",{staticClass:"submit-btn",attrs:{loading:t.submitBtnLoading,disabled:t.submitBtnDisabled,type:"primary"},on:{click:t.submitForm}},[t._v("\n        "+t._s(t.submitBtnText)+"\n        "),t.timeout?[t._v("\n          （"+t._s(t.timeout)+"s 后可重新获取）\n        ")]:t._e()],2)],1)],1),t._v(" "),o("div",{staticClass:"others"},[o("ul",{staticClass:"provider"},[o("span",[t._v("社交账号注册")]),t._v(" "),o("li",{on:{click:t.qqRegisterLink}},[o("i",{staticClass:"iconfont ic-qq"})]),t._v(" "),o("li",{on:{click:t.wechatRegisterLink}},[o("i",{staticClass:"iconfont ic-v-chat"})])]),t._v(" "),t.inviteCode?t._e():o("a",{on:{click:t.showLogin}},[t._v("已有账号»")])])],1)},[],!1,null,null,null).exports),$={name:"ResetPasswordForm",data:()=>({form:{access:"",secret:"",authCode:""},rule:{access:[{validator:(t,e,o)=>e?11!==e.length?o(new Error("请填写11位手机号")):void o():o(new Error("请填写手机号")),trigger:"blur"}],secret:[{validator:(t,e,o)=>""===e?o(new Error("请填写登录密码")):e.length<6?o(new Error("密码不能小于6位")):e.length>16?o(new Error("密码不能大于16位")):void o(),trigger:"blur"}]},step:0,timeout:0}),computed:{submitBtnText(){return 0===this.step?"立即重置":1===this.step?"提交中...":2===this.step?"短信已发送":3===this.step?"已重置":"立即重置"},submitBtnLoading(){return 1===this.step||3===this.step},submitBtnDisabled(){return 0!==this.timeout&&0===this.step||3===this.step}},methods:{submitForm(){this.$refs.form.validate(t=>{if(!t)return!1;0===this.step&&this.getResetAuthCode(),2===this.step&&this.openConfirmModal()})},getResetAuthCode(){var t=this;this.step=1,this.$captcha({success:function(){var e=Object(w.a)(function*(e){let{data:data}=e;try{yield Object(c.i)(t,{type:"forgot_password",phone_number:t.form.access,geetest:data}),t.step=2,t.openConfirmModal()}catch(e){t.$toast.error(e.message),t.step=0}finally{t.timeout=60;const e=setInterval(()=>{--t.timeout||(t.step=0,clearInterval(e))},1e3)}});return function(t){return e.apply(this,arguments)}}(),close:()=>{this.step=0}})},openConfirmModal(){this.$prompt("请输入收到的验证码","短信已发送",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^\d{6}$/,inputErrorMessage:"验证码格式不正确"}).then(t=>{let{value:e}=t;this.form.authCode=e,this.step=3,this.signReset()}).catch(()=>{})},signReset(){var t=this;return Object(w.a)(function*(){try{const e=yield Object(c.h)(t,{access:t.form.access,authCode:t.form.authCode,secret:t.form.secret});t.$toast.success(e),t.showLogin()}catch(e){t.$toast.error(e.message)}finally{t.step=0}})()},showLogin(){this.$emit("to-login"),this.$refs.form.resetFields()},showRegister(){this.$emit("to-register"),this.$refs.form.resetFields()}}},C=(o(377),{name:"SignDialog",components:{SignUpForm:y,SignInForm:v,ResetPasswordForm:Object(d.a)($,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"reset-password-form"},[o("el-form",{ref:"form",attrs:{model:t.form,rules:t.rule}},[o("el-form-item",{attrs:{prop:"access"}},[o("el-input",{attrs:{type:"text",placeholder:"手机号","auto-complete":"off"},model:{value:t.form.access,callback:function(e){t.$set(t.form,"access","string"==typeof e?e.trim():e)},expression:"form.access"}})],1),t._v(" "),o("el-form-item",{attrs:{prop:"secret"}},[o("el-input",{attrs:{type:"text",placeholder:"新密码","auto-complete":"off"},model:{value:t.form.secret,callback:function(e){t.$set(t.form,"secret","string"==typeof e?e.trim():e)},expression:"form.secret"}})],1),t._v(" "),o("el-form-item",[o("el-button",{staticClass:"submit-btn",attrs:{loading:t.submitBtnLoading,disabled:t.submitBtnDisabled,type:"primary"},on:{click:t.submitForm}},[t._v("\n        "+t._s(t.submitBtnText)+"\n        "),t.timeout?[t._v("\n          （"+t._s(t.timeout)+"s 后可重新获取）\n        ")]:t._e()],2)],1)],1),t._v(" "),o("div",{staticClass:"others"},[o("a",{on:{click:t.showLogin}},[t._v("返回登录>")]),t._v(" "),o("a",{on:{click:t.showRegister}},[t._v("点击注册»")])])],1)},[],!1,null,null,null).exports},data:()=>({canRender:!1,showModal:!1,showSignIn:!1,showSignUp:!1,showReset:!1}),computed:{isGuest(){return!this.$store.state.isAuth}},mounted(){this.canRender=!0,this.$channel.$on("sign-in",()=>{this.showLogin()}),this.$channel.$on("sign-up",()=>{this.showRegister()})},methods:{showLogin(){this.showReset=!1,this.showModal=!0,this.showSignIn=!0,this.showSignUp=!1},showRegister(){this.showModal=!0,this.showSignUp=!0,this.showSignIn=!1},hiddenSign(){this.showModal=!1,this.showSignIn=!1,this.showSignUp=!1,this.showReset=!1}}}),k=(o(378),Object(d.a)(C,function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.canRender?o("div",{staticClass:"sign-container"},[t.isGuest?o("div",{class:[t.showModal?"space-enter":"space-leave"],attrs:{id:"space3D"},on:{click:t.hiddenSign}},[o("div",{ref:"wrap",staticClass:"sign-modal-wrap"},[o("div",{staticClass:"sign-modal sign-in-modal",class:{"sign-in-init":!t.showSignIn&&!t.showSignUp,"sign-in-show":t.showSignIn&&!t.showSignUp,"sign-in-turn":!t.showSignIn&&t.showSignUp},on:{click:function(t){t.stopPropagation()}}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.showReset,expression:"showReset"}],staticClass:"form-container"},[o("reset-password-form",{on:{"to-login":function(e){t.showReset=!1},"to-register":t.showRegister}})],1),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:!t.showReset,expression:"!showReset"}],staticClass:"form-container"},[o("sign-in-form",{on:{"to-reset":function(e){t.showReset=!0},"to-register":t.showRegister}})],1)]),t._v(" "),o("div",{staticClass:"sign-modal sign-up-modal",class:{"sign-up-init":!t.showSignUp&&!t.showSignIn,"sign-up-show":t.showSignUp&&!t.showSignIn,"sign-up-turn":!t.showSignUp&&t.showSignIn},on:{click:function(t){t.stopPropagation()}}},[o("div",{staticClass:"slogan"}),t._v(" "),o("div",{staticClass:"form-container"},[o("sign-up-form",{on:{"to-login":t.showLogin}})],1)])])]):t._e()]):t._e()},[],!1,null,null,null).exports),x=o(38),S={name:"WebLayout",components:{VHeader:m,SignDialog:k},mixins:[{beforeMount(){var t=this;return Object(w.a)(function*(){if(t.$store.state.logging){const e=t.$watch("$store.state.logging",()=>{t.$store.state.isAuth?(t.userSigned&&t.userSigned(),e()):t.$cookie.remove("JWT-TOKEN")})}else{const e=Object(x.a)();t.$store.commit("SET_USER_TOKEN",e),(yield t.$store.dispatch("initAuth"))?t.userSigned&&t.userSigned():t.$cookie.remove("JWT-TOKEN")}})()}}],props:{},data:()=>({}),computed:{},watch:{},created(){},mounted(){},methods:{}},E=Object(d.a)(S,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"layout-web"}},[e("v-header"),this._v(" "),e("nuxt"),this._v(" "),e("sign-dialog")],1)},[],!1,null,null,null);e.default=E.exports}}]);