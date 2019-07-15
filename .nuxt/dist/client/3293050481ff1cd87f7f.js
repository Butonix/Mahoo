(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{363:function(t,e,r){},364:function(t,e,r){},365:function(t,e,r){},452:function(t,e,r){"use strict";r(19);var n=r(2),o=r(77);e.a={beforeMount:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){var e,r,n=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.$store.state.logging){t.next=4;break}e=this.$watch("$store.state.logging",function(){n.$store.state.isAuth?(n.$channel.$fire("user-signed"),e()):(n.$cookie.remove("JWT-TOKEN"),n.$channel.$fire("user-not-sign"))}),t.next=10;break;case 4:return r=Object(o.a)(),this.$store.commit("SET_USER_TOKEN",r),t.next=8,this.$store.dispatch("initAuth");case 8:t.sent?this.$channel.$fire("user-signed"):(this.$cookie.remove("JWT-TOKEN"),this.$channel.$fire("user-not-sign"));case 10:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},460:function(t,e,r){"use strict";r(19);var n=r(2),o=r(29),c={name:"ResetPasswordForm",data:function(){return{form:{access:"",secret:"",authCode:""},rule:{access:[{validator:function(t,e,r){return e?11!==e.length?r(new Error("请填写11位手机号")):void r():r(new Error("请填写手机号"))},trigger:"blur"}],secret:[{validator:function(t,e,r){return""===e?r(new Error("请填写登录密码")):e.length<6?r(new Error("密码不能小于6位")):e.length>16?r(new Error("密码不能大于16位")):void r()},trigger:"blur"}]},step:0,timeout:0}},computed:{submitBtnText:function(){return 0===this.step?"立即重置":1===this.step?"提交中...":2===this.step?"短信已发送":3===this.step?"已重置":"立即重置"},submitBtnLoading:function(){return 1===this.step||3===this.step},submitBtnDisabled:function(){return 0!==this.timeout&&0===this.step||3===this.step}},methods:{submitForm:function(){var t=this;this.$refs.form.validate(function(e){if(!e)return!1;0===t.step&&t.getResetAuthCode(),2===t.step&&t.openConfirmModal()})},getResetAuthCode:function(){var t=this;this.step=1,this.$captcha({success:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(r){var data,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return data=r.data,e.prev=1,e.next=4,Object(o.i)(t,{type:"forgot_password",phone_number:t.form.access,geetest:data});case 4:t.step=2,t.openConfirmModal(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t.$toast.error(e.t0.message),t.step=0;case 12:return e.prev=12,t.timeout=60,n=setInterval(function(){--t.timeout||(t.step=0,clearInterval(n))},1e3),e.finish(12);case 16:case"end":return e.stop()}},e,null,[[1,8,12,16]])}));return function(t){return e.apply(this,arguments)}}(),close:function(){t.step=0}})},openConfirmModal:function(){var t=this;this.$prompt("请输入收到的验证码","短信已发送",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^\d{6}$/,inputErrorMessage:"验证码格式不正确"}).then(function(e){var r=e.value;t.form.authCode=r,t.step=3,t.signReset()}).catch(function(){})},signReset:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(o.h)(this,{access:this.form.access,authCode:this.form.authCode,secret:this.form.secret});case 3:e=t.sent,this.$toast.success(e),this.showLogin(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),this.$toast.error(t.t0.message);case 11:return t.prev=11,this.step=0,t.finish(11);case 14:case"end":return t.stop()}},t,this,[[0,8,11,14]])}));return function(){return t.apply(this,arguments)}}(),showLogin:function(){this.$emit("to-login"),this.$refs.form.resetFields()},showRegister:function(){this.$emit("to-register"),this.$refs.form.resetFields()}}},l=(r(466),r(18)),component=Object(l.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"reset-password-form"},[r("el-form",{ref:"form",attrs:{model:t.form,rules:t.rule}},[r("el-form-item",{attrs:{prop:"access"}},[r("el-input",{attrs:{type:"text",placeholder:"手机号","auto-complete":"off"},model:{value:t.form.access,callback:function(e){t.$set(t.form,"access","string"==typeof e?e.trim():e)},expression:"form.access"}})],1),t._v(" "),r("el-form-item",{attrs:{prop:"secret"}},[r("el-input",{attrs:{type:"text",placeholder:"新密码","auto-complete":"off"},model:{value:t.form.secret,callback:function(e){t.$set(t.form,"secret","string"==typeof e?e.trim():e)},expression:"form.secret"}})],1),t._v(" "),r("el-form-item",[r("el-button",{staticClass:"submit-btn",attrs:{loading:t.submitBtnLoading,disabled:t.submitBtnDisabled,type:"primary",round:""},on:{click:t.submitForm}},[t._v("\n        "+t._s(t.submitBtnText)+"\n        "),t.timeout?[t._v("\n          （"+t._s(t.timeout)+"s 后可重新获取）\n        ")]:t._e()],2)],1)],1),t._v(" "),r("div",{staticClass:"others"},[r("a",{on:{click:t.showLogin}},[t._v("返回登录>")]),t._v(" "),r("a",{on:{click:t.showRegister}},[t._v("点击注册»")])])],1)},[],!1,null,null,null);e.a=component.exports},461:function(t,e,r){"use strict";var n=r(29),o={name:"SignInForm",data:function(){return{form:{access:"",secret:"",remember:!0},rule:{access:[{validator:function(t,e,r){return e?11!==e.length?r(new Error("请填写11位手机号")):void r():r(new Error("请填写手机号"))},trigger:"blur"}],secret:[{validator:function(t,e,r){return""===e?r(new Error("请填写登录密码")):e.length<6?r(new Error("密码不能小于6位")):e.length>16?r(new Error("密码不能大于16位")):void r()},trigger:"blur"}]},loading:!1,showOAuth:!0}},methods:{authQQ:function(){window.location.href="https://api.calibur.tv/callback/oauth2/qq?from=sign&redirect=".concat(this.redirect)},authWechat:function(){window.location.href="https://api.calibur.tv/callback/oauth2/wechat?from=sign&redirect=".concat(this.redirect)},authWeixin:function(){window.location.href="https://api.calibur.tv/callback/oauth2/weixin?from=sign&redirect=".concat(this.redirect)},redirect:function(){return this.$route.query.redirect?this.$route.query.redirect:encodeURIComponent(window.location.href)},submitForm:function(){var t=this;this.$refs.form.validate(function(e){if(!e)return!1;t.login()})},login:function(){var t=this;this.loading||(this.loading=!0,this.$captcha({success:function(e){var data=e.data;Object(n.e)(t,{access:t.form.access,secret:t.form.secret,remember:t.form.remember,geetest:data}).then(function(e){t.$cookie.set("JWT-TOKEN",e,{expires:t.form.remember?365:1}),t.$route.query.redirect?window.location=decodeURIComponent(t.$route.query.redirect):window.location.reload()}).catch(function(e){t.$toast.error(e.message),t.loading=!1})},close:function(){t.loading=!1}}))},showReset:function(){this.$emit("to-reset"),this.$refs.form.resetFields()},showRegister:function(){this.$emit("to-register"),this.$refs.form.resetFields()}}},c=(r(464),r(18)),component=Object(c.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sign-in-form"},[r("el-form",{ref:"form",attrs:{model:t.form,rules:t.rule}},[r("el-form-item",{attrs:{prop:"access"}},[r("el-input",{attrs:{type:"text",placeholder:"手机（填写常用手机号，用于登录）"},model:{value:t.form.access,callback:function(e){t.$set(t.form,"access","string"==typeof e?e.trim():e)},expression:"form.access"}})],1),t._v(" "),r("el-form-item",{attrs:{prop:"secret"}},[r("el-input",{attrs:{type:"password","show-password":"",placeholder:"密码（6-16个字符组成，区分大小写）"},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitForm(e)}},model:{value:t.form.secret,callback:function(e){t.$set(t.form,"secret","string"==typeof e?e.trim():e)},expression:"form.secret"}})],1),t._v(" "),r("el-form-item",{staticClass:"sign-in-opt"},[r("div",{staticClass:"opt-container"},[r("el-checkbox",{model:{value:t.form.remember,callback:function(e){t.$set(t.form,"remember",e)},expression:"form.remember"}},[t._v("\n          记住我\n        ")]),t._v(" "),t.showOAuth?r("ul",{staticClass:"provider"},[r("li",{on:{click:t.authQQ}},[r("i",{staticClass:"iconfont ic-qq"})]),t._v(" "),r("li",{staticClass:"only-pc",on:{click:t.authWechat}},[r("i",{staticClass:"iconfont ic-v-chat"})]),t._v(" "),r("li",{staticClass:"only-h5",on:{click:t.authWeixin}},[r("i",{staticClass:"iconfont ic-v-chat"})])]):r("button",{attrs:{type:"button"},on:{click:function(e){t.showOAuth=!0}}},[t._v("\n          社交账号登录\n        ")])],1)]),t._v(" "),r("el-form-item",[r("el-button",{staticClass:"submit-btn",attrs:{loading:t.loading,type:"primary",round:""},on:{click:t.submitForm}},[t._v("\n        登录\n      ")])],1)],1),t._v(" "),r("div",{staticClass:"others"},[r("a",{on:{click:t.showReset}},[t._v("忘记密码?>")]),t._v(" "),r("a",{on:{click:t.showRegister}},[t._v("点击注册»")])])],1)},[],!1,null,null,null);e.a=component.exports},462:function(t,e,r){"use strict";r(19);var n=r(2),o=(r(35),r(194),r(29)),c={name:"SignUpForm",props:{inviteCode:{type:[String,Number],default:""}},data:function(){return{form:{access:"",secret:"",authCode:"",inviteCode:this.inviteCode},rule:{access:[{validator:function(t,e,r){return e?11!==e.length?r(new Error("请填写11位手机号")):/^(0|86|17951)?(1)[0-9]{10}$/.test(e)?void r():r(new Error("错误的手机号格式")):r(new Error("请填写手机号"))},trigger:"blur"}],secret:[{validator:function(t,e,r){return""===e?r(new Error("请填写登录密码")):e.length<6?r(new Error("密码不能小于6位")):e.length>16?r(new Error("密码不能大于16位")):void r()},trigger:"blur"}]},step:0,timeout:0}},computed:{submitBtnText:function(){return 0===this.step?"注册":1===this.step?"提交中...":2===this.step?"短信已发送":3===this.step?"注册中...":"注册"},submitBtnLoading:function(){return 1===this.step||3===this.step},submitBtnDisabled:function(){return 0!==this.timeout&&0===this.step||3===this.step},query:function(){return this.$route.query},paramsIsOK:function(){return!!(this.query.uid&&/^\d+$/.test(this.query.uid)&&this.query.time&&/^\d+$/.test(this.query.time)&&Date.now()<=1e3*this.query.time&&this.query.key===this.$md5("".concat(this.query.uid,"-the-world-").concat(this.query.time)))}},methods:{addInviteForLink:function(t){var e=t;return this.paramsIsOK?e="".concat(e,"&invite=").concat(this.query.uid):"about-invite-id"===this.$route.name&&(e="".concat(e,"&invite=").concat(this.$route.params.id)),e},qqRegisterLink:function(){window.location.href="".concat(this.addInviteForLink("https://api.calibur.tv/callback/oauth2/qq?from=sign"),"&redirect=").concat(this.redirect)},wechatRegisterLink:function(){window.location.href="".concat(this.addInviteForLink("https://api.calibur.tv/callback/oauth2/wechat?from=sign"),"&redirect=").concat(this.redirect)},weixinRegisterLink:function(){window.location.href="".concat(this.addInviteForLink("https://api.calibur.tv/callback/oauth2/weixin?from=sign"),"&redirect=").concat(this.redirect)},redirect:function(){return this.$route.query.redirect?this.$route.query.redirect:encodeURIComponent(window.location.href)},submitForm:function(){var t=this;this.$refs.form.validate(function(e){if(!e)return!1;0===t.step&&t.getRegisterAuthCode(),2===t.step&&t.openConfirmModal()})},getRegisterAuthCode:function(){var t=this;this.step=1,this.$captcha({success:function(){var e=Object(n.a)(regeneratorRuntime.mark(function e(r){var data,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return data=r.data,e.prev=1,e.next=4,Object(o.i)(t,{type:"sign_up",phone_number:t.form.access,geetest:data});case 4:t.step=2,t.openConfirmModal(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t.$toast.error(e.t0.message),t.step=0;case 12:return e.prev=12,t.timeout=60,n=setInterval(function(){--t.timeout||(t.step=0,clearInterval(n))},1e3),e.finish(12);case 16:case"end":return e.stop()}},e,null,[[1,8,12,16]])}));return function(t){return e.apply(this,arguments)}}(),close:function(){t.step=0}})},openConfirmModal:function(){var t=this;this.$prompt("请输入收到的验证码","短信已发送",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^\d{6}$/,inputErrorMessage:"验证码格式不正确"}).then(function(e){var r=e.value;t.form.authCode=r,t.step=3,t.signUp()}).catch(function(){})},signUp:function(){var t=this;Object(o.g)(this,{access:this.form.access,secret:this.form.secret,authCode:this.form.authCode,inviteCode:this.form.inviteCode}).then(function(e){t.$cookie.set("JWT-TOKEN",e),t.$toast.success("注册成功！").then(function(){t.$route.query.redirect?window.location=decodeURIComponent(t.$route.query.redirect):window.location.reload()})}).catch(function(e){t.step=0,t.$toast.error(e.message)})},showLogin:function(){this.$emit("to-login"),this.$refs.form.resetFields()}}},l=(r(465),r(18)),component=Object(l.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sign-up-form"},[r("el-form",{ref:"form",attrs:{model:t.form,rules:t.rule}},[r("el-form-item",{attrs:{prop:"access"}},[r("el-input",{attrs:{type:"text",placeholder:"手机（填写常用手机号，用于登录）","auto-complete":"off"},model:{value:t.form.access,callback:function(e){t.$set(t.form,"access","string"==typeof e?e.trim():e)},expression:"form.access"}})],1),t._v(" "),r("el-form-item",{attrs:{prop:"secret"}},[r("el-input",{attrs:{type:"password","show-password":"",placeholder:"密码（6-16个字符组成，区分大小写）","auto-complete":"off"},model:{value:t.form.secret,callback:function(e){t.$set(t.form,"secret","string"==typeof e?e.trim():e)},expression:"form.secret"}})],1),t._v(" "),t.inviteCode?t._e():r("el-form-item",[r("el-input",{attrs:{placeholder:"邀请码（可为空）","auto-complete":"off"},model:{value:t.form.inviteCode,callback:function(e){t.$set(t.form,"inviteCode","string"==typeof e?e.trim():e)},expression:"form.inviteCode"}})],1),t._v(" "),r("el-form-item",[r("el-button",{staticClass:"submit-btn",attrs:{loading:t.submitBtnLoading,disabled:t.submitBtnDisabled,type:"primary",round:""},on:{click:t.submitForm}},[t._v("\n        "+t._s(t.submitBtnText)+"\n        "),t.timeout?[t._v("\n          （"+t._s(t.timeout)+"s 后可重新获取）\n        ")]:t._e()],2)],1)],1),t._v(" "),r("div",{staticClass:"others"},[r("ul",{staticClass:"provider"},[r("span",[t._v("社交账号注册")]),t._v(" "),r("li",{on:{click:t.qqRegisterLink}},[r("i",{staticClass:"iconfont ic-qq"})]),t._v(" "),r("li",{staticClass:"only-pc",on:{click:t.wechatRegisterLink}},[r("i",{staticClass:"iconfont ic-v-chat"})]),t._v(" "),r("li",{staticClass:"only-h5",on:{click:t.weixinRegisterLink}},[r("i",{staticClass:"iconfont ic-v-chat"})])]),t._v(" "),t.inviteCode?t._e():r("a",{on:{click:t.showLogin}},[t._v("已有账号»")])])],1)},[],!1,null,null,null);e.a=component.exports},464:function(t,e,r){"use strict";var n=r(363);r.n(n).a},465:function(t,e,r){"use strict";var n=r(364);r.n(n).a},466:function(t,e,r){"use strict";var n=r(365);r.n(n).a}}]);