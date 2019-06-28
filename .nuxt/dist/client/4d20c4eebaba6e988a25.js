(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{277:function(t,e,r){},278:function(t,e,r){},279:function(t,e,r){},289:function(t,e,r){"use strict";var o=r(277);r.n(o).a},290:function(t,e,r){"use strict";var o=r(278);r.n(o).a},291:function(t,e,r){"use strict";var o=r(279);r.n(o).a},292:function(t,e,r){},339:function(t,e,r){"use strict";var o=r(2),n=r(14),c={name:"ResetPasswordForm",data:()=>({form:{access:"",secret:"",authCode:""},rule:{access:[{validator:(t,e,r)=>e?11!==e.length?r(new Error("请填写11位手机号")):void r():r(new Error("请填写手机号")),trigger:"blur"}],secret:[{validator:(t,e,r)=>""===e?r(new Error("请填写登录密码")):e.length<6?r(new Error("密码不能小于6位")):e.length>16?r(new Error("密码不能大于16位")):void r(),trigger:"blur"}]},step:0,timeout:0}),computed:{submitBtnText(){return 0===this.step?"立即重置":1===this.step?"提交中...":2===this.step?"短信已发送":3===this.step?"已重置":"立即重置"},submitBtnLoading(){return 1===this.step||3===this.step},submitBtnDisabled(){return 0!==this.timeout&&0===this.step||3===this.step}},methods:{submitForm(){this.$refs.form.validate(t=>{if(!t)return!1;0===this.step&&this.getResetAuthCode(),2===this.step&&this.openConfirmModal()})},getResetAuthCode(){var t=this;this.step=1,this.$captcha({success:function(){var e=Object(o.a)(function*(e){let{data:data}=e;try{yield Object(n.i)(t,{type:"forgot_password",phone_number:t.form.access,geetest:data}),t.step=2,t.openConfirmModal()}catch(e){t.$toast.error(e.message),t.step=0}finally{t.timeout=60;const e=setInterval(()=>{--t.timeout||(t.step=0,clearInterval(e))},1e3)}});return function(t){return e.apply(this,arguments)}}(),close:()=>{this.step=0}})},openConfirmModal(){this.$prompt("请输入收到的验证码","短信已发送",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^\d{6}$/,inputErrorMessage:"验证码格式不正确"}).then(t=>{let{value:e}=t;this.form.authCode=e,this.step=3,this.signReset()}).catch(()=>{})},signReset(){var t=this;return Object(o.a)(function*(){try{const e=yield Object(n.h)(t,{access:t.form.access,authCode:t.form.authCode,secret:t.form.secret});t.$toast.success(e),t.showLogin()}catch(e){t.$toast.error(e.message)}finally{t.step=0}})()},showLogin(){this.$emit("to-login"),this.$refs.form.resetFields()},showRegister(){this.$emit("to-register"),this.$refs.form.resetFields()}}},l=(r(291),r(7)),component=Object(l.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"reset-password-form"},[r("el-form",{ref:"form",attrs:{model:t.form,rules:t.rule}},[r("el-form-item",{attrs:{prop:"access"}},[r("el-input",{attrs:{type:"text",placeholder:"手机号","auto-complete":"off"},model:{value:t.form.access,callback:function(e){t.$set(t.form,"access","string"==typeof e?e.trim():e)},expression:"form.access"}})],1),t._v(" "),r("el-form-item",{attrs:{prop:"secret"}},[r("el-input",{attrs:{type:"text",placeholder:"新密码","auto-complete":"off"},model:{value:t.form.secret,callback:function(e){t.$set(t.form,"secret","string"==typeof e?e.trim():e)},expression:"form.secret"}})],1),t._v(" "),r("el-form-item",[r("el-button",{staticClass:"submit-btn",attrs:{loading:t.submitBtnLoading,disabled:t.submitBtnDisabled,type:"primary",round:""},on:{click:t.submitForm}},[t._v("\n        "+t._s(t.submitBtnText)+"\n        "),t.timeout?[t._v("\n          （"+t._s(t.timeout)+"s 后可重新获取）\n        ")]:t._e()],2)],1)],1),t._v(" "),r("div",{staticClass:"others"},[r("a",{on:{click:t.showLogin}},[t._v("返回登录>")]),t._v(" "),r("a",{on:{click:t.showRegister}},[t._v("点击注册»")])])],1)},[],!1,null,null,null);e.a=component.exports},341:function(t,e,r){"use strict";var o=r(2),n=r(14),c={name:"SignUpForm",props:{inviteCode:{type:[String,Number],default:""}},data(){return{form:{access:"",secret:"",authCode:"",inviteCode:this.inviteCode},rule:{access:[{validator:(t,e,r)=>e?11!==e.length?r(new Error("请填写11位手机号")):/^(0|86|17951)?(1)[0-9]{10}$/.test(e)?void r():r(new Error("错误的手机号格式")):r(new Error("请填写手机号")),trigger:"blur"}],secret:[{validator:(t,e,r)=>""===e?r(new Error("请填写登录密码")):e.length<6?r(new Error("密码不能小于6位")):e.length>16?r(new Error("密码不能大于16位")):void r(),trigger:"blur"}]},step:0,timeout:0}},computed:{submitBtnText(){return 0===this.step?"注册":1===this.step?"提交中...":2===this.step?"短信已发送":3===this.step?"注册中...":"注册"},submitBtnLoading(){return 1===this.step||3===this.step},submitBtnDisabled(){return 0!==this.timeout&&0===this.step||3===this.step},query(){return this.$route.query},paramsIsOK(){return!!(this.query.uid&&/^\d+$/.test(this.query.uid)&&this.query.time&&/^\d+$/.test(this.query.time)&&Date.now()<=1e3*this.query.time&&this.query.key===this.$md5("".concat(this.query.uid,"-the-world-").concat(this.query.time)))}},methods:{qqRegisterLink(){let link="https://api.calibur.tv/callback/oauth2/qq?from=sign";this.paramsIsOK?link="".concat(link,"&invite=").concat(this.query.uid):"about-invite-id"===this.$route.name&&(link="".concat(link,"&invite=").concat(this.$route.params.id));const t=this.$route.query.redirect?this.$route.query.redirect:encodeURIComponent(window.location.href);window.location.href="".concat(link,"&redirect=").concat(t)},wechatRegisterLink(){let link="https://api.calibur.tv/callback/oauth2/wechat?from=sign";this.paramsIsOK?link="".concat(link,"&invite=").concat(this.query.uid):"about-invite-id"===this.$route.name&&(link="".concat(link,"&invite=").concat(this.$route.params.id));const t=this.$route.query.redirect?this.$route.query.redirect:encodeURIComponent(window.location.href);window.location.href="".concat(link,"&redirect=").concat(t)},submitForm(){this.$refs.form.validate(t=>{if(!t)return!1;0===this.step&&this.getRegisterAuthCode(),2===this.step&&this.openConfirmModal()})},getRegisterAuthCode(){var t=this;this.step=1,this.$captcha({success:function(){var e=Object(o.a)(function*(e){let{data:data}=e;try{yield Object(n.i)(t,{type:"sign_up",phone_number:t.form.access,geetest:data}),t.step=2,t.openConfirmModal()}catch(e){t.$toast.error(e.message),t.step=0}finally{t.timeout=60;const e=setInterval(()=>{--t.timeout||(t.step=0,clearInterval(e))},1e3)}});return function(t){return e.apply(this,arguments)}}(),close:()=>{this.step=0}})},openConfirmModal(){this.$prompt("请输入收到的验证码","短信已发送",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^\d{6}$/,inputErrorMessage:"验证码格式不正确"}).then(t=>{let{value:e}=t;this.form.authCode=e,this.step=3,this.signUp()}).catch(()=>{})},signUp(){Object(n.g)(this,{access:this.form.access,secret:this.form.secret,authCode:this.form.authCode,inviteCode:this.form.inviteCode}).then(t=>{this.$cookie.set("JWT-TOKEN",t),this.$toast.success("注册成功！").then(()=>{this.$route.query.redirect?window.location=decodeURIComponent(this.$route.query.redirect):window.location.reload()})}).catch(t=>{this.step=0,this.$toast.error(t.message)})},showLogin(){this.$emit("to-login"),this.$refs.form.resetFields()}}},l=(r(290),r(7)),component=Object(l.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sign-up-form"},[r("el-form",{ref:"form",attrs:{model:t.form,rules:t.rule}},[r("el-form-item",{attrs:{prop:"access"}},[r("el-input",{attrs:{type:"text",placeholder:"手机（填写常用手机号，用于登录）","auto-complete":"off"},model:{value:t.form.access,callback:function(e){t.$set(t.form,"access","string"==typeof e?e.trim():e)},expression:"form.access"}})],1),t._v(" "),r("el-form-item",{attrs:{prop:"secret"}},[r("el-input",{attrs:{type:"password","show-password":"",placeholder:"密码（6-16个字符组成，区分大小写）","auto-complete":"off"},model:{value:t.form.secret,callback:function(e){t.$set(t.form,"secret","string"==typeof e?e.trim():e)},expression:"form.secret"}})],1),t._v(" "),t.inviteCode?t._e():r("el-form-item",[r("el-input",{attrs:{type:"number",placeholder:"邀请码（可为空）","auto-complete":"off"},model:{value:t.form.inviteCode,callback:function(e){t.$set(t.form,"inviteCode","string"==typeof e?e.trim():e)},expression:"form.inviteCode"}})],1),t._v(" "),r("el-form-item",[r("el-button",{staticClass:"submit-btn",attrs:{loading:t.submitBtnLoading,disabled:t.submitBtnDisabled,type:"primary",round:""},on:{click:t.submitForm}},[t._v("\n        "+t._s(t.submitBtnText)+"\n        "),t.timeout?[t._v("\n          （"+t._s(t.timeout)+"s 后可重新获取）\n        ")]:t._e()],2)],1)],1),t._v(" "),r("div",{staticClass:"others"},[r("ul",{staticClass:"provider"},[r("span",[t._v("社交账号注册")]),t._v(" "),r("li",{on:{click:t.qqRegisterLink}},[r("i",{staticClass:"iconfont ic-qq"})]),t._v(" "),r("li",{on:{click:t.wechatRegisterLink}},[r("i",{staticClass:"iconfont ic-v-chat"})])]),t._v(" "),t.inviteCode?t._e():r("a",{on:{click:t.showLogin}},[t._v("已有账号»")])])],1)},[],!1,null,null,null);e.a=component.exports},342:function(t,e,r){"use strict";var o=r(14),n={name:"SignInForm",data:()=>({form:{access:"",secret:"",remember:!0},rule:{access:[{validator:(t,e,r)=>e?11!==e.length?r(new Error("请填写11位手机号")):void r():r(new Error("请填写手机号")),trigger:"blur"}],secret:[{validator:(t,e,r)=>""===e?r(new Error("请填写登录密码")):e.length<6?r(new Error("密码不能小于6位")):e.length>16?r(new Error("密码不能大于16位")):void r(),trigger:"blur"}]},loading:!1,showOAuth:!0}),methods:{authQQ(){const t=this.$route.query.redirect?this.$route.query.redirect:encodeURIComponent(window.location.href);window.location.href="https://api.calibur.tv/callback/oauth2/qq?from=sign&redirect=".concat(t)},authWechat(){const t=this.$route.query.redirect?this.$route.query.redirect:encodeURIComponent(window.location.href);window.location.href="https://api.calibur.tv/callback/oauth2/wechat?from=sign&redirect=".concat(t)},submitForm(){this.$refs.form.validate(t=>{if(!t)return!1;this.login()})},login(){this.loading||(this.loading=!0,this.$captcha({success:t=>{let{data:data}=t;Object(o.e)(this,{access:this.form.access,secret:this.form.secret,remember:this.form.remember,geetest:data}).then(t=>{this.$cookie.set("JWT-TOKEN",t,{expires:this.form.remember?365:1}),this.$route.query.redirect?window.location=decodeURIComponent(this.$route.query.redirect):window.location.reload()}).catch(t=>{this.$toast.error(t.message),this.loading=!1})},close:()=>{this.loading=!1}}))},showReset(){this.$emit("to-reset"),this.$refs.form.resetFields()},showRegister(){this.$emit("to-register"),this.$refs.form.resetFields()}}},c=(r(289),r(7)),component=Object(c.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sign-in-form"},[r("el-form",{ref:"form",attrs:{model:t.form,rules:t.rule}},[r("el-form-item",{attrs:{prop:"access"}},[r("el-input",{attrs:{type:"text",placeholder:"手机（填写常用手机号，用于登录）"},model:{value:t.form.access,callback:function(e){t.$set(t.form,"access","string"==typeof e?e.trim():e)},expression:"form.access"}})],1),t._v(" "),r("el-form-item",{attrs:{prop:"secret"}},[r("el-input",{attrs:{type:"password","show-password":"",placeholder:"密码（6-16个字符组成，区分大小写）"},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitForm(e)}},model:{value:t.form.secret,callback:function(e){t.$set(t.form,"secret","string"==typeof e?e.trim():e)},expression:"form.secret"}})],1),t._v(" "),r("el-form-item",{staticClass:"sign-in-opt"},[r("div",{staticClass:"opt-container"},[r("el-checkbox",{model:{value:t.form.remember,callback:function(e){t.$set(t.form,"remember",e)},expression:"form.remember"}},[t._v("\n          记住我\n        ")]),t._v(" "),t.showOAuth?r("ul",{staticClass:"provider"},[r("li",{on:{click:t.authQQ}},[r("i",{staticClass:"iconfont ic-qq"})]),t._v(" "),r("li",{on:{click:t.authWechat}},[r("i",{staticClass:"iconfont ic-v-chat"})])]):r("button",{attrs:{type:"button"},on:{click:function(e){t.showOAuth=!0}}},[t._v("\n          社交账号登录\n        ")])],1)]),t._v(" "),r("el-form-item",[r("el-button",{staticClass:"submit-btn",attrs:{loading:t.loading,type:"primary",round:""},on:{click:t.submitForm}},[t._v("\n        登录\n      ")])],1)],1),t._v(" "),r("div",{staticClass:"others"},[r("a",{on:{click:t.showReset}},[t._v("忘记密码?>")]),t._v(" "),r("a",{on:{click:t.showRegister}},[t._v("点击注册»")])])],1)},[],!1,null,null,null);e.a=component.exports},349:function(t,e,r){t.exports=r.p+"img/175085e.png"},350:function(t,e,r){"use strict";var o=r(292);r.n(o).a},436:function(t,e,r){"use strict";r.r(e);var o=r(342),n=r(341),c=r(339),l={name:"Sign",components:{SignUpForm:n.a,SignInForm:o.a,ResetPasswordForm:c.a},props:{},data:()=>({showReset:!1}),computed:{headers:()=>["登录","注册"]},watch:{},created(){},mounted(){},methods:{prev(){this.$refs.switcher.prev()},next(){this.$refs.switcher.next()}}},m=(r(350),r(7)),component=Object(m.a)(l,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"sign"}},[o("el-col",{staticClass:"sign-wrap",attrs:{span:6,xs:24}},[o("div",{staticClass:"bg"},[o("img",{attrs:{src:r(349),alt:"calibur"}})]),t._v(" "),o("v-switcher",{ref:"switcher",attrs:{headers:t.headers,swipe:!0,align:"center","anchor-padding":10}},[o("template",{slot:"0"},[t.showReset?o("reset-password-form",{on:{"to-login":function(e){t.showReset=!1},"to-register":t.next}}):o("sign-in-form",{on:{"to-register":t.next,"to-reset":function(e){t.showReset=!0}}})],1),t._v(" "),o("template",{slot:"1"},[o("sign-up-form",{on:{"to-login":t.prev}})],1)],2)],1)],1)},[],!1,null,null,null);e.default=component.exports}}]);