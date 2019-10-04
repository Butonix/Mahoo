exports.ids=[19],exports.modules={107:function(t,e){},108:function(t,e){},109:function(t,e){},115:function(t,e,r){"use strict";var o=r(26);e.a={async beforeMount(){if(this.$store.state.logging){const t=this.$watch("$store.state.logging",()=>{this.$store.state.isAuth?(this.$channel.$fire("user-signed"),t()):(this.$cookie.remove("JWT-TOKEN"),this.$channel.$fire("user-not-sign"))})}else{const t=Object(o.a)();this.$store.commit("SET_USER_TOKEN",t),await this.$store.dispatch("initAuth")?(this.$channel.$fire("user-signed"),this.$store.dispatch("getUserRoles")):(this.$cookie.remove("JWT-TOKEN"),this.$channel.$fire("user-not-sign"))}}}},147:function(t,e,r){"use strict";r.r(e);var o=r(107),n=r.n(o);for(var c in o)"default"!==c&&function(t){r.d(e,t,(function(){return o[t]}))}(c);e.default=n.a},148:function(t,e,r){"use strict";r.r(e);var o=r(108),n=r.n(o);for(var c in o)"default"!==c&&function(t){r.d(e,t,(function(){return o[t]}))}(c);e.default=n.a},149:function(t,e,r){"use strict";r.r(e);var o=r(109),n=r.n(o);for(var c in o)"default"!==c&&function(t){r.d(e,t,(function(){return o[t]}))}(c);e.default=n.a},155:function(t,e,r){"use strict";var o=r(3),n={name:"SignUpForm",props:{inviteCode:{type:[String,Number],default:""}},data(){return{form:{access:"",secret:"",authCode:"",inviteCode:this.inviteCode},rule:{access:[{validator:(t,e,r)=>e?11!==e.length?r(new Error("请填写11位手机号")):/^(0|86|17951)?(1)[0-9]{10}$/.test(e)?void r():r(new Error("错误的手机号格式")):r(new Error("请填写手机号")),trigger:"blur"}],secret:[{validator:(t,e,r)=>""===e?r(new Error("请填写登录密码")):e.length<6?r(new Error("密码不能小于6位")):e.length>16?r(new Error("密码不能大于16位")):void r(),trigger:"blur"}]},step:0,timeout:0}},computed:{submitBtnText(){return 0===this.step?"注册":1===this.step?"提交中...":2===this.step?"短信已发送":3===this.step?"注册中...":"注册"},submitBtnLoading(){return 1===this.step||3===this.step},submitBtnDisabled(){return 0!==this.timeout&&0===this.step||3===this.step},query(){return this.$route.query},paramsIsOK(){return!!(this.query.uid&&/^\d+$/.test(this.query.uid)&&this.query.time&&/^\d+$/.test(this.query.time)&&Date.now()<=1e3*this.query.time&&this.query.key===this.$md5(`${this.query.uid}-the-world-${this.query.time}`))}},methods:{addInviteForLink(t){let e=t;return this.paramsIsOK?e=`${e}&invite=${this.query.uid}`:"about-invite-id"===this.$route.name&&(e=`${e}&invite=${this.$route.params.id}`),e},qqRegisterLink(){window.location.href=`${this.addInviteForLink("https://api.calibur.tv/callback/oauth2/qq?from=sign")}&redirect=${this.redirect}`},wechatRegisterLink(){window.location.href=`${this.addInviteForLink("https://api.calibur.tv/callback/oauth2/wechat?from=sign")}&redirect=${this.redirect}`},weixinRegisterLink(){window.location.href=`${this.addInviteForLink("https://api.calibur.tv/callback/oauth2/weixin?from=sign")}&redirect=${this.redirect}`},redirect(){return this.$route.query.redirect?this.$route.query.redirect:encodeURIComponent(window.location.href)},submitForm(){this.$refs.form.validate(t=>{if(!t)return!1;0===this.step&&this.getRegisterAuthCode(),2===this.step&&this.openConfirmModal()})},async getRegisterAuthCode(){this.step=1;try{await Object(o.i)(this,{type:"sign_up",phone_number:this.form.access}),this.step=2,this.openConfirmModal()}catch(t){this.$toast.error(t.message),this.step=0}finally{this.timeout=60;const t=setInterval(()=>{--this.timeout||(this.step=0,clearInterval(t))},1e3)}},openConfirmModal(){this.$prompt("请输入收到的验证码","短信已发送",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^\d{6}$/,inputErrorMessage:"验证码格式不正确"}).then(({value:t})=>{this.form.authCode=t,this.step=3,this.signUp()}).catch(()=>{})},signUp(){Object(o.g)(this,{access:this.form.access,secret:this.form.secret,authCode:this.form.authCode,inviteCode:this.form.inviteCode}).then(t=>{this.$cookie.set("JWT-TOKEN",t),this.$toast.success("注册成功！").then(()=>{this.$route.query.redirect?window.location=decodeURIComponent(this.$route.query.redirect):window.location.reload()})}).catch(t=>{this.step=0,this.$toast.error(t.message)})},showLogin(){this.$emit("to-login"),this.$refs.form.resetFields()}}},c=r(1);var component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sign-up-form"},[r("ElForm",{ref:"form",attrs:{model:t.form,rules:t.rule}},[r("ElFormItem",{attrs:{prop:"access"}},[r("ElInput",{attrs:{type:"text",placeholder:"手机（填写常用手机号，用于登录）","auto-complete":"off"},model:{value:t.form.access,callback:function(e){t.$set(t.form,"access","string"==typeof e?e.trim():e)},expression:"form.access"}})],1),t._v(" "),r("ElFormItem",{attrs:{prop:"secret"}},[r("ElInput",{attrs:{type:"password","show-password":"",placeholder:"密码（6-16个字符组成，区分大小写）","auto-complete":"off"},model:{value:t.form.secret,callback:function(e){t.$set(t.form,"secret","string"==typeof e?e.trim():e)},expression:"form.secret"}})],1),t._v(" "),t.inviteCode?t._e():r("ElFormItem",[r("ElInput",{attrs:{placeholder:"邀请码（可为空）","auto-complete":"off"},model:{value:t.form.inviteCode,callback:function(e){t.$set(t.form,"inviteCode","string"==typeof e?e.trim():e)},expression:"form.inviteCode"}})],1),t._v(" "),r("ElFormItem",[r("ElButton",{staticClass:"submit-btn",attrs:{loading:t.submitBtnLoading,disabled:t.submitBtnDisabled,type:"primary",round:""},on:{click:t.submitForm}},[t._v("\n        "+t._s(t.submitBtnText)+"\n        "),t.timeout?[t._v("\n          （"+t._s(t.timeout)+"s 后可重新获取）\n        ")]:t._e()],2)],1)],1),t._ssrNode(' <div class="others"><ul class="provider"><span>社交账号注册</span> <li><i class="iconfont ic-qq"></i></li> <li class="only-pc"><i class="iconfont ic-v-chat"></i></li> <li class="only-h5"><i class="iconfont ic-v-chat"></i></li></ul> '+(t.inviteCode?"\x3c!----\x3e":"<a>已有账号»</a>")+"</div>")],2)}),[],!1,(function(t){var e=r(148);e.__inject__&&e.__inject__(t)}),null,"a3db7f72");e.a=component.exports},156:function(t,e,r){"use strict";var o=r(60),n=r.n(o),c=r(3),l={name:"SignInForm",components:{ElCheckbox:n.a},data:()=>({form:{access:"",secret:"",remember:!0},rule:{access:[{validator:(t,e,r)=>e?11!==e.length?r(new Error("请填写11位手机号")):void r():r(new Error("请填写手机号")),trigger:"blur"}],secret:[{validator:(t,e,r)=>""===e?r(new Error("请填写登录密码")):e.length<6?r(new Error("密码不能小于6位")):e.length>16?r(new Error("密码不能大于16位")):void r(),trigger:"blur"}]},loading:!1,showOAuth:!0}),methods:{authQQ(){window.location.href=`https://api.calibur.tv/callback/oauth2/qq?from=sign&redirect=${this.redirect}`},authWechat(){window.location.href=`https://api.calibur.tv/callback/oauth2/wechat?from=sign&redirect=${this.redirect}`},authWeixin(){window.location.href=`https://api.calibur.tv/callback/oauth2/weixin?from=sign&redirect=${this.redirect}`},redirect(){return this.$route.query.redirect?this.$route.query.redirect:encodeURIComponent(window.location.href)},submitForm(){this.$refs.form.validate(t=>{if(!t)return!1;this.login()})},login(){this.loading||(this.loading=!0,Object(c.e)(this,{access:this.form.access,secret:this.form.secret,remember:this.form.remember}).then(t=>{this.$cookie.set("JWT-TOKEN",t,{expires:this.form.remember?365:1}),this.$route.query.redirect?window.location=decodeURIComponent(this.$route.query.redirect):window.location.reload()}).catch(t=>{this.$toast.error(t.message),this.loading=!1}))},showReset(){this.$emit("to-reset"),this.$refs.form.resetFields()},showRegister(){this.$emit("to-register"),this.$refs.form.resetFields()}}},h=r(1);var component=Object(h.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sign-in-form"},[r("ElForm",{ref:"form",attrs:{model:t.form,rules:t.rule}},[r("ElFormItem",{attrs:{prop:"access"}},[r("ElInput",{attrs:{type:"text",placeholder:"手机（填写常用手机号，用于登录）"},model:{value:t.form.access,callback:function(e){t.$set(t.form,"access","string"==typeof e?e.trim():e)},expression:"form.access"}})],1),t._v(" "),r("ElFormItem",{attrs:{prop:"secret"}},[r("ElInput",{attrs:{type:"password","show-password":"",placeholder:"密码（6-16个字符组成，区分大小写）"},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitForm(e)}},model:{value:t.form.secret,callback:function(e){t.$set(t.form,"secret","string"==typeof e?e.trim():e)},expression:"form.secret"}})],1),t._v(" "),r("ElFormItem",{staticClass:"sign-in-opt"},[r("div",{staticClass:"opt-container"},[r("ElCheckbox",{model:{value:t.form.remember,callback:function(e){t.$set(t.form,"remember",e)},expression:"form.remember"}},[t._v("\n          记住我\n        ")]),t._v(" "),t.showOAuth?r("ul",{staticClass:"provider"},[r("li",{on:{click:t.authQQ}},[r("i",{staticClass:"iconfont ic-qq"})]),t._v(" "),r("li",{staticClass:"only-pc",on:{click:t.authWechat}},[r("i",{staticClass:"iconfont ic-v-chat"})]),t._v(" "),r("li",{staticClass:"only-h5",on:{click:t.authWeixin}},[r("i",{staticClass:"iconfont ic-v-chat"})])]):r("button",{attrs:{type:"button"},on:{click:function(e){t.showOAuth=!0}}},[t._v("\n          社交账号登录\n        ")])],1)]),t._v(" "),r("ElFormItem",[r("ElButton",{staticClass:"submit-btn",attrs:{loading:t.loading,type:"primary",round:""},on:{click:t.submitForm}},[t._v("\n        登录\n      ")])],1)],1),t._ssrNode(' <div class="others"><a>忘记密码?&gt;</a> <a>点击注册»</a></div>')],2)}),[],!1,(function(t){var e=r(147);e.__inject__&&e.__inject__(t)}),null,"121814d1");e.a=component.exports},160:function(t,e,r){"use strict";var o=r(3),n={name:"ResetPasswordForm",data:()=>({form:{access:"",secret:"",authCode:""},rule:{access:[{validator:(t,e,r)=>e?11!==e.length?r(new Error("请填写11位手机号")):void r():r(new Error("请填写手机号")),trigger:"blur"}],secret:[{validator:(t,e,r)=>""===e?r(new Error("请填写登录密码")):e.length<6?r(new Error("密码不能小于6位")):e.length>16?r(new Error("密码不能大于16位")):void r(),trigger:"blur"}]},step:0,timeout:0}),computed:{submitBtnText(){return 0===this.step?"立即重置":1===this.step?"提交中...":2===this.step?"短信已发送":3===this.step?"已重置":"立即重置"},submitBtnLoading(){return 1===this.step||3===this.step},submitBtnDisabled(){return 0!==this.timeout&&0===this.step||3===this.step}},methods:{submitForm(){this.$refs.form.validate(t=>{if(!t)return!1;0===this.step&&this.getResetAuthCode(),2===this.step&&this.openConfirmModal()})},async getResetAuthCode(){this.step=1;try{await Object(o.i)(this,{type:"forgot_password",phone_number:this.form.access}),this.step=2,this.openConfirmModal()}catch(t){this.$toast.error(t.message),this.step=0}finally{this.timeout=60;const t=setInterval(()=>{--this.timeout||(this.step=0,clearInterval(t))},1e3)}},openConfirmModal(){this.$prompt("请输入收到的验证码","短信已发送",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^\d{6}$/,inputErrorMessage:"验证码格式不正确"}).then(({value:t})=>{this.form.authCode=t,this.step=3,this.signReset()}).catch(()=>{})},async signReset(){try{const t=await Object(o.h)(this,{access:this.form.access,authCode:this.form.authCode,secret:this.form.secret});this.$toast.success(t),this.showLogin()}catch(t){this.$toast.error(t.message)}finally{this.step=0}},showLogin(){this.$emit("to-login"),this.$refs.form.resetFields()},showRegister(){this.$emit("to-register"),this.$refs.form.resetFields()}}},c=r(1);var component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"reset-password-form"},[r("el-form",{ref:"form",attrs:{model:t.form,rules:t.rule}},[r("el-form-item",{attrs:{prop:"access"}},[r("el-input",{attrs:{type:"text",placeholder:"手机号","auto-complete":"off"},model:{value:t.form.access,callback:function(e){t.$set(t.form,"access","string"==typeof e?e.trim():e)},expression:"form.access"}})],1),t._v(" "),r("el-form-item",{attrs:{prop:"secret"}},[r("el-input",{attrs:{type:"text",placeholder:"新密码","auto-complete":"off"},model:{value:t.form.secret,callback:function(e){t.$set(t.form,"secret","string"==typeof e?e.trim():e)},expression:"form.secret"}})],1),t._v(" "),r("el-form-item",[r("el-button",{staticClass:"submit-btn",attrs:{loading:t.submitBtnLoading,disabled:t.submitBtnDisabled,type:"primary",round:""},on:{click:t.submitForm}},[t._v("\n        "+t._s(t.submitBtnText)+"\n        "),t.timeout?[t._v("\n          （"+t._s(t.timeout)+"s 后可重新获取）\n        ")]:t._e()],2)],1)],1),t._ssrNode(' <div class="others"><a>返回登录&gt;</a> <a>点击注册»</a></div>')],2)}),[],!1,(function(t){var e=r(149);e.__inject__&&e.__inject__(t)}),null,"07efa0da");e.a=component.exports},167:function(t,e,r){t.exports=r.p+"img/175085e.png"},168:function(t,e){},280:function(t,e,r){"use strict";r.r(e);var o=r(168),n=r.n(o);for(var c in o)"default"!==c&&function(t){r.d(e,t,(function(){return o[t]}))}(c);e.default=n.a},376:function(t,e,r){"use strict";r.r(e);var o=r(156),n=r(155),c=r(160),l=r(115),h={name:"Sign",components:{SignUpForm:n.a,SignInForm:o.a,ResetPasswordForm:c.a},mixins:[l.a],data:()=>({showReset:!1}),computed:{headers:()=>["登录","注册"]},beforeMount(){this.$channel.$when("user-signed",()=>{this.$route.query.redirect?window.location=encodeURIComponent(window.location.href):window.location="/"})},methods:{prev(){this.$refs.switcher.prev()},next(){this.$refs.switcher.next()}}},m=r(1);var component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"sign"}},[o("ElCol",{staticClass:"sign-wrap",attrs:{span:6,xs:24}},[o("div",{staticClass:"bg"},[o("img",{attrs:{src:r(167),alt:"calibur"}})]),t._v(" "),o("VSwitcher",{ref:"switcher",attrs:{headers:t.headers,swipe:!0,"anchor-padding":10,"disabled-swipe":!0,align:"center"}},[o("template",{slot:"0"},[t.showReset?o("ResetPasswordForm",{on:{"to-login":function(e){t.showReset=!1},"to-register":t.next}}):o("SignInForm",{on:{"to-register":t.next,"to-reset":function(e){t.showReset=!0}}})],1),t._v(" "),o("template",{slot:"1"},[o("SignUpForm",{on:{"to-login":t.prev}})],1)],2)],1)],1)}),[],!1,(function(t){var e=r(280);e.__inject__&&e.__inject__(t)}),null,"6e2b69fe");e.default=component.exports}};