(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{276:function(t,e,o){},277:function(t,e,o){},278:function(t,e,o){},293:function(t,e,o){"use strict";var r=o(276);o.n(r).a},294:function(t,e,o){"use strict";var r=o(277);o.n(r).a},295:function(t,e,o){"use strict";var r=o(278);o.n(r).a},296:function(t,e,o){"use strict";var r=o(2),n=o(38);e.a={beforeMount(){var t=this;return Object(r.a)(function*(){if(t.$store.state.logging){const e=t.$watch("$store.state.logging",()=>{t.$store.state.isAuth?(t.$channel.$fire("user-signed"),e()):t.$cookie.remove("JWT-TOKEN")})}else{const e=Object(n.a)();t.$store.commit("SET_USER_TOKEN",e),(yield t.$store.dispatch("initAuth"))?t.$channel.$fire("user-signed"):t.$cookie.remove("JWT-TOKEN")}})()}}},354:function(t,e,o){},359:function(t,e,o){"use strict";var r=o(15),n={name:"SignInForm",data:()=>({form:{access:"",secret:"",remember:!0},rule:{access:[{validator:(t,e,o)=>e?11!==e.length?o(new Error("请填写11位手机号")):void o():o(new Error("请填写手机号")),trigger:"blur"}],secret:[{validator:(t,e,o)=>""===e?o(new Error("请填写登录密码")):e.length<6?o(new Error("密码不能小于6位")):e.length>16?o(new Error("密码不能大于16位")):void o(),trigger:"blur"}]},loading:!1,showOAuth:!0}),methods:{authQQ(){const t=this.$route.query.redirect?this.$route.query.redirect:encodeURIComponent(window.location.href);window.location.href="https://api.calibur.tv/callback/oauth2/qq?from=sign&redirect=".concat(t)},authWechat(){const t=this.$route.query.redirect?this.$route.query.redirect:encodeURIComponent(window.location.href),e=this.$h5?"weixin":"wechat";window.location.href="https://api.calibur.tv/callback/oauth2/".concat(e,"?from=sign&redirect=").concat(t)},submitForm(){this.$refs.form.validate(t=>{if(!t)return!1;this.login()})},login(){this.loading||(this.loading=!0,this.$captcha({success:t=>{let{data:data}=t;Object(r.e)(this,{access:this.form.access,secret:this.form.secret,remember:this.form.remember,geetest:data}).then(t=>{this.$cookie.set("JWT-TOKEN",t,{expires:this.form.remember?365:1}),this.$route.query.redirect?window.location=decodeURIComponent(this.$route.query.redirect):window.location.reload()}).catch(t=>{this.$toast.error(t.message),this.loading=!1})},close:()=>{this.loading=!1}}))},showReset(){this.$emit("to-reset"),this.$refs.form.resetFields()},showRegister(){this.$emit("to-register"),this.$refs.form.resetFields()}}},c=(o(293),o(11)),component=Object(c.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"sign-in-form"},[o("el-form",{ref:"form",attrs:{model:t.form,rules:t.rule}},[o("el-form-item",{attrs:{prop:"access"}},[o("el-input",{attrs:{type:"text",placeholder:"手机（填写常用手机号，用于登录）"},model:{value:t.form.access,callback:function(e){t.$set(t.form,"access","string"==typeof e?e.trim():e)},expression:"form.access"}})],1),t._v(" "),o("el-form-item",{attrs:{prop:"secret"}},[o("el-input",{attrs:{type:"password","show-password":"",placeholder:"密码（6-16个字符组成，区分大小写）"},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitForm(e)}},model:{value:t.form.secret,callback:function(e){t.$set(t.form,"secret","string"==typeof e?e.trim():e)},expression:"form.secret"}})],1),t._v(" "),o("el-form-item",{staticClass:"sign-in-opt"},[o("div",{staticClass:"opt-container"},[o("el-checkbox",{model:{value:t.form.remember,callback:function(e){t.$set(t.form,"remember",e)},expression:"form.remember"}},[t._v("\n          记住我\n        ")]),t._v(" "),t.showOAuth?o("ul",{staticClass:"provider"},[o("li",{on:{click:t.authQQ}},[o("i",{staticClass:"iconfont ic-qq"})]),t._v(" "),o("li",{on:{click:t.authWechat}},[o("i",{staticClass:"iconfont ic-v-chat"})])]):o("button",{attrs:{type:"button"},on:{click:function(e){t.showOAuth=!0}}},[t._v("\n          社交账号登录\n        ")])],1)]),t._v(" "),o("el-form-item",[o("el-button",{staticClass:"submit-btn",attrs:{loading:t.loading,type:"primary",round:""},on:{click:t.submitForm}},[t._v("\n        登录\n      ")])],1)],1),t._v(" "),o("div",{staticClass:"others"},[o("a",{on:{click:t.showReset}},[t._v("忘记密码?>")]),t._v(" "),o("a",{on:{click:t.showRegister}},[t._v("点击注册»")])])],1)},[],!1,null,null,null);e.a=component.exports},360:function(t,e,o){"use strict";var r=o(2),n=o(15),c={name:"SignUpForm",props:{inviteCode:{type:[String,Number],default:""}},data(){return{form:{access:"",secret:"",authCode:"",inviteCode:this.inviteCode},rule:{access:[{validator:(t,e,o)=>e?11!==e.length?o(new Error("请填写11位手机号")):/^(0|86|17951)?(1)[0-9]{10}$/.test(e)?void o():o(new Error("错误的手机号格式")):o(new Error("请填写手机号")),trigger:"blur"}],secret:[{validator:(t,e,o)=>""===e?o(new Error("请填写登录密码")):e.length<6?o(new Error("密码不能小于6位")):e.length>16?o(new Error("密码不能大于16位")):void o(),trigger:"blur"}]},step:0,timeout:0}},computed:{submitBtnText(){return 0===this.step?"注册":1===this.step?"提交中...":2===this.step?"短信已发送":3===this.step?"注册中...":"注册"},submitBtnLoading(){return 1===this.step||3===this.step},submitBtnDisabled(){return 0!==this.timeout&&0===this.step||3===this.step},query(){return this.$route.query},paramsIsOK(){return!!(this.query.uid&&/^\d+$/.test(this.query.uid)&&this.query.time&&/^\d+$/.test(this.query.time)&&Date.now()<=1e3*this.query.time&&this.query.key===this.$md5("".concat(this.query.uid,"-the-world-").concat(this.query.time)))}},methods:{qqRegisterLink(){let link="https://api.calibur.tv/callback/oauth2/qq?from=sign";this.paramsIsOK?link="".concat(link,"&invite=").concat(this.query.uid):"about-invite-id"===this.$route.name&&(link="".concat(link,"&invite=").concat(this.$route.params.id));const t=this.$route.query.redirect?this.$route.query.redirect:encodeURIComponent(window.location.href);window.location.href="".concat(link,"&redirect=").concat(t)},wechatRegisterLink(){const t=this.$h5?"weixin":"wechat";let link="https://api.calibur.tv/callback/oauth2/".concat(t,"?from=sign");this.paramsIsOK?link="".concat(link,"&invite=").concat(this.query.uid):"about-invite-id"===this.$route.name&&(link="".concat(link,"&invite=").concat(this.$route.params.id));const e=this.$route.query.redirect?this.$route.query.redirect:encodeURIComponent(window.location.href);window.location.href="".concat(link,"&redirect=").concat(e)},submitForm(){this.$refs.form.validate(t=>{if(!t)return!1;0===this.step&&this.getRegisterAuthCode(),2===this.step&&this.openConfirmModal()})},getRegisterAuthCode(){var t=this;this.step=1,this.$captcha({success:function(){var e=Object(r.a)(function*(e){let{data:data}=e;try{yield Object(n.i)(t,{type:"sign_up",phone_number:t.form.access,geetest:data}),t.step=2,t.openConfirmModal()}catch(e){t.$toast.error(e.message),t.step=0}finally{t.timeout=60;const e=setInterval(()=>{--t.timeout||(t.step=0,clearInterval(e))},1e3)}});return function(t){return e.apply(this,arguments)}}(),close:()=>{this.step=0}})},openConfirmModal(){this.$prompt("请输入收到的验证码","短信已发送",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^\d{6}$/,inputErrorMessage:"验证码格式不正确"}).then(t=>{let{value:e}=t;this.form.authCode=e,this.step=3,this.signUp()}).catch(()=>{})},signUp(){Object(n.g)(this,{access:this.form.access,secret:this.form.secret,authCode:this.form.authCode,inviteCode:this.form.inviteCode}).then(t=>{this.$cookie.set("JWT-TOKEN",t),this.$toast.success("注册成功！").then(()=>{this.$route.query.redirect?window.location=decodeURIComponent(this.$route.query.redirect):window.location.reload()})}).catch(t=>{this.step=0,this.$toast.error(t.message)})},showLogin(){this.$emit("to-login"),this.$refs.form.resetFields()}}},l=(o(294),o(11)),component=Object(l.a)(c,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"sign-up-form"},[o("el-form",{ref:"form",attrs:{model:t.form,rules:t.rule}},[o("el-form-item",{attrs:{prop:"access"}},[o("el-input",{attrs:{type:"text",placeholder:"手机（填写常用手机号，用于登录）","auto-complete":"off"},model:{value:t.form.access,callback:function(e){t.$set(t.form,"access","string"==typeof e?e.trim():e)},expression:"form.access"}})],1),t._v(" "),o("el-form-item",{attrs:{prop:"secret"}},[o("el-input",{attrs:{type:"password","show-password":"",placeholder:"密码（6-16个字符组成，区分大小写）","auto-complete":"off"},model:{value:t.form.secret,callback:function(e){t.$set(t.form,"secret","string"==typeof e?e.trim():e)},expression:"form.secret"}})],1),t._v(" "),t.inviteCode?t._e():o("el-form-item",[o("el-input",{attrs:{placeholder:"邀请码（可为空）","auto-complete":"off"},model:{value:t.form.inviteCode,callback:function(e){t.$set(t.form,"inviteCode","string"==typeof e?e.trim():e)},expression:"form.inviteCode"}})],1),t._v(" "),o("el-form-item",[o("el-button",{staticClass:"submit-btn",attrs:{loading:t.submitBtnLoading,disabled:t.submitBtnDisabled,type:"primary",round:""},on:{click:t.submitForm}},[t._v("\n        "+t._s(t.submitBtnText)+"\n        "),t.timeout?[t._v("\n          （"+t._s(t.timeout)+"s 后可重新获取）\n        ")]:t._e()],2)],1)],1),t._v(" "),o("div",{staticClass:"others"},[o("ul",{staticClass:"provider"},[o("span",[t._v("社交账号注册")]),t._v(" "),o("li",{on:{click:t.qqRegisterLink}},[o("i",{staticClass:"iconfont ic-qq"})]),t._v(" "),o("li",{on:{click:t.wechatRegisterLink}},[o("i",{staticClass:"iconfont ic-v-chat"})])]),t._v(" "),t.inviteCode?t._e():o("a",{on:{click:t.showLogin}},[t._v("已有账号»")])])],1)},[],!1,null,null,null);e.a=component.exports},361:function(t,e,o){"use strict";var r=o(2),n=o(15),c={name:"ResetPasswordForm",data:()=>({form:{access:"",secret:"",authCode:""},rule:{access:[{validator:(t,e,o)=>e?11!==e.length?o(new Error("请填写11位手机号")):void o():o(new Error("请填写手机号")),trigger:"blur"}],secret:[{validator:(t,e,o)=>""===e?o(new Error("请填写登录密码")):e.length<6?o(new Error("密码不能小于6位")):e.length>16?o(new Error("密码不能大于16位")):void o(),trigger:"blur"}]},step:0,timeout:0}),computed:{submitBtnText(){return 0===this.step?"立即重置":1===this.step?"提交中...":2===this.step?"短信已发送":3===this.step?"已重置":"立即重置"},submitBtnLoading(){return 1===this.step||3===this.step},submitBtnDisabled(){return 0!==this.timeout&&0===this.step||3===this.step}},methods:{submitForm(){this.$refs.form.validate(t=>{if(!t)return!1;0===this.step&&this.getResetAuthCode(),2===this.step&&this.openConfirmModal()})},getResetAuthCode(){var t=this;this.step=1,this.$captcha({success:function(){var e=Object(r.a)(function*(e){let{data:data}=e;try{yield Object(n.i)(t,{type:"forgot_password",phone_number:t.form.access,geetest:data}),t.step=2,t.openConfirmModal()}catch(e){t.$toast.error(e.message),t.step=0}finally{t.timeout=60;const e=setInterval(()=>{--t.timeout||(t.step=0,clearInterval(e))},1e3)}});return function(t){return e.apply(this,arguments)}}(),close:()=>{this.step=0}})},openConfirmModal(){this.$prompt("请输入收到的验证码","短信已发送",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^\d{6}$/,inputErrorMessage:"验证码格式不正确"}).then(t=>{let{value:e}=t;this.form.authCode=e,this.step=3,this.signReset()}).catch(()=>{})},signReset(){var t=this;return Object(r.a)(function*(){try{const e=yield Object(n.h)(t,{access:t.form.access,authCode:t.form.authCode,secret:t.form.secret});t.$toast.success(e),t.showLogin()}catch(e){t.$toast.error(e.message)}finally{t.step=0}})()},showLogin(){this.$emit("to-login"),this.$refs.form.resetFields()},showRegister(){this.$emit("to-register"),this.$refs.form.resetFields()}}},l=(o(295),o(11)),component=Object(l.a)(c,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"reset-password-form"},[o("el-form",{ref:"form",attrs:{model:t.form,rules:t.rule}},[o("el-form-item",{attrs:{prop:"access"}},[o("el-input",{attrs:{type:"text",placeholder:"手机号","auto-complete":"off"},model:{value:t.form.access,callback:function(e){t.$set(t.form,"access","string"==typeof e?e.trim():e)},expression:"form.access"}})],1),t._v(" "),o("el-form-item",{attrs:{prop:"secret"}},[o("el-input",{attrs:{type:"text",placeholder:"新密码","auto-complete":"off"},model:{value:t.form.secret,callback:function(e){t.$set(t.form,"secret","string"==typeof e?e.trim():e)},expression:"form.secret"}})],1),t._v(" "),o("el-form-item",[o("el-button",{staticClass:"submit-btn",attrs:{loading:t.submitBtnLoading,disabled:t.submitBtnDisabled,type:"primary",round:""},on:{click:t.submitForm}},[t._v("\n        "+t._s(t.submitBtnText)+"\n        "),t.timeout?[t._v("\n          （"+t._s(t.timeout)+"s 后可重新获取）\n        ")]:t._e()],2)],1)],1),t._v(" "),o("div",{staticClass:"others"},[o("a",{on:{click:t.showLogin}},[t._v("返回登录>")]),t._v(" "),o("a",{on:{click:t.showRegister}},[t._v("点击注册»")])])],1)},[],!1,null,null,null);e.a=component.exports},438:function(t,e,o){"use strict";var r=o(354);o.n(r).a},453:function(t,e,o){"use strict";o.r(e);var r=o(140),n=o(359),c=o(360),l=o(361),h={name:"SignDialog",components:{SignUpForm:c.a,SignInForm:n.a,ResetPasswordForm:l.a},data:()=>({canRender:!1,showModal:!1,showSignIn:!1,showSignUp:!1,showReset:!1}),computed:{isGuest(){return!this.$store.state.isAuth}},mounted(){this.canRender=!0,this.$channel.$on("sign-in",()=>{this.showLogin()}),this.$channel.$on("sign-up",()=>{this.showRegister()})},methods:{showLogin(){this.showReset=!1,this.showModal=!0,this.showSignIn=!0,this.showSignUp=!1},showRegister(){this.showModal=!0,this.showSignUp=!0,this.showSignIn=!1},hiddenSign(){this.showModal=!1,this.showSignIn=!1,this.showSignUp=!1,this.showReset=!1}}},m=(o(438),o(11)),d=Object(m.a)(h,function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.canRender?o("div",{staticClass:"sign-container"},[t.isGuest?o("div",{class:[t.showModal?"space-enter":"space-leave"],attrs:{id:"space3D"},on:{click:t.hiddenSign}},[o("div",{ref:"wrap",staticClass:"sign-modal-wrap"},[o("div",{staticClass:"sign-modal sign-in-modal",class:{"sign-in-init":!t.showSignIn&&!t.showSignUp,"sign-in-show":t.showSignIn&&!t.showSignUp,"sign-in-turn":!t.showSignIn&&t.showSignUp},on:{click:function(t){t.stopPropagation()}}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.showReset,expression:"showReset"}],staticClass:"form-container"},[o("ResetPasswordForm",{on:{"to-login":function(e){t.showReset=!1},"to-register":t.showRegister}})],1),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:!t.showReset,expression:"!showReset"}],staticClass:"form-container"},[o("SignInForm",{on:{"to-reset":function(e){t.showReset=!0},"to-register":t.showRegister}})],1)]),t._v(" "),o("div",{staticClass:"sign-modal sign-up-modal",class:{"sign-up-init":!t.showSignUp&&!t.showSignIn,"sign-up-show":t.showSignUp&&!t.showSignIn,"sign-up-turn":!t.showSignUp&&t.showSignIn},on:{click:function(t){t.stopPropagation()}}},[o("div",{staticClass:"slogan"}),t._v(" "),o("div",{staticClass:"form-container"},[o("SignUpForm",{on:{"to-login":t.showLogin}})],1)])])]):t._e()]):t._e()},[],!1,null,null,null).exports,f=o(296),v={name:"WebLayout",components:{VHeader:r.a,SignDialog:d},mixins:[f.a]},w=Object(m.a)(v,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"layout-web"}},[e("VHeader"),this._v(" "),e("nuxt"),this._v(" "),e("SignDialog")],1)},[],!1,null,null,null);e.default=w.exports}}]);