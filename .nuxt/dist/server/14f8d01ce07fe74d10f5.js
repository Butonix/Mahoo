exports.ids=[2],exports.modules={64:function(t,e){},65:function(t,e){},66:function(t,e){},67:function(t,e){},68:function(t,e){},82:function(t,e,r){"use strict";r.r(e);var o=r(64),n=r.n(o);for(var c in o)"default"!==c&&function(t){r.d(e,t,function(){return o[t]})}(c);e.default=n.a},83:function(t,e,r){"use strict";r.r(e);var o=r(65),n=r.n(o);for(var c in o)"default"!==c&&function(t){r.d(e,t,function(){return o[t]})}(c);e.default=n.a},84:function(t,e,r){"use strict";r.r(e);var o=r(66),n=r.n(o);for(var c in o)"default"!==c&&function(t){r.d(e,t,function(){return o[t]})}(c);e.default=n.a},85:function(t,e,r){"use strict";r.r(e);var o=r(67),n=r.n(o);for(var c in o)"default"!==c&&function(t){r.d(e,t,function(){return o[t]})}(c);e.default=n.a},86:function(t,e,r){"use strict";r.r(e);var o=r(68),n=r.n(o);for(var c in o)"default"!==c&&function(t){r.d(e,t,function(){return o[t]})}(c);e.default=n.a},87:function(t,e,r){"use strict";r.r(e);var o={components:{},props:{},data:()=>({headers:[{route:"/",name:"首页"},{route:"/tag/2he",name:"动漫"},{route:"/tag/285",name:"游戏"},{route:"/tag/3p6",name:"话题"}]}),computed:{login(){return this.$store.state.login}},watch:{},created(){},mounted(){},methods:{handleLogout(){this.$store.dispatch("destroyAuth"),this.$cookie.remove("JWT-TOKEN"),window.location="/"},handleSignIn(){this.$channel.$emit("sign-in")}}},n=r(1);var c=Object(n.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{attrs:{id:"page-header"}},[t._ssrNode('<div class="container nav">',"</div>",[t._ssrNode('<nav class="left">',"</nav>",[r("nuxt-link",{staticClass:"logo",attrs:{to:"/"}},[r("img",{attrs:{src:t.$resize("default-poster",{width:64,height:64})}})]),t._ssrNode(" "),r("v-switcher",{attrs:{headers:t.headers,routable:!0,align:"start"}},t._l(t.headers,function(e,o){return r("nuxt-link",{key:o,attrs:{slot:"tab-"+o,to:e.route},slot:"tab-"+o},[r("span",{domProps:{textContent:t._s(e.name)}})])}),1)],2),t._ssrNode(" "),t._ssrNode('<div class="right">',"</div>",[t.login?r("el-button",{attrs:{type:"text"},on:{click:t.handleLogout}},[t._v("\n        退出\n      ")]):r("el-button",{attrs:{type:"text"},on:{click:t.handleSignIn}},[t._v("\n        登录\n      ")]),t._ssrNode("\n        \n      "),r("nuxt-link",{attrs:{to:"/create/cosplay/"}},[r("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-s-promotion"}},[t._v("\n          投稿\n        ")])],1)],2)],2)])},[],!1,function(t){var e=r(82);e.__inject__&&e.__inject__(t)},null,"c73ed79e").exports,l=r(7),h={name:"SignInForm",data:()=>({form:{access:"",secret:"",remember:!0},rule:{access:[{validator:(t,e,r)=>e?11!==e.length?r(new Error("请填写11位手机号")):void r():r(new Error("请填写手机号")),trigger:"blur"}],secret:[{validator:(t,e,r)=>""===e?r(new Error("请填写登录密码")):e.length<6?r(new Error("密码不能小于6位")):e.length>16?r(new Error("密码不能大于16位")):void r(),trigger:"blur"}]},loading:!1,watchPwd:!1,showOAuth:!0}),methods:{submitForm(){this.$refs.form.validate(t=>{if(!t)return!1;this.login()})},login(){this.loading||(this.loading=!0,this.$captcha({ctx:this,success:({data:data})=>{Object(l.b)(this,{access:this.form.access,secret:this.form.secret,remember:this.form.remember,geetest:data}).then(t=>{this.$cookie.set("JWT-TOKEN",t,{expires:this.form.remember?365:1}),window.location.reload()}).catch(t=>{this.$toast.error(t.message),this.loading=!1})},close:()=>{this.loading=!1}}))},showReset(){this.$emit("to-reset"),this.$refs.form.resetFields()},showRegister(){this.$emit("to-register"),this.$refs.form.resetFields()}}};var m=Object(n.a)(h,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sign-in-form"},[r("el-form",{ref:"form",attrs:{model:t.form,rules:t.rule}},[r("el-form-item",{attrs:{prop:"access"}},[r("el-input",{attrs:{type:"text",placeholder:"手机（填写常用手机号，用于登录）"},model:{value:t.form.access,callback:function(e){t.$set(t.form,"access","string"==typeof e?e.trim():e)},expression:"form.access"}})],1),t._v(" "),r("el-form-item",{attrs:{prop:"secret"}},[r("el-input",{attrs:{type:t.watchPwd?"text":"password",placeholder:"密码（6-16个字符组成，区分大小写）"},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitForm(e)}},model:{value:t.form.secret,callback:function(e){t.$set(t.form,"secret","string"==typeof e?e.trim():e)},expression:"form.secret"}}),t._v(" "),t.form.secret.length>5?r("button",{staticClass:"watch-pwd",attrs:{type:"button"},on:{click:function(e){t.watchPwd=!t.watchPwd}}},[r("i",{staticClass:"iconfont icon-ai-eye"})]):t._e()],1),t._v(" "),r("el-form-item",{staticClass:"sign-in-opt"},[r("div",{staticClass:"opt-container"},[r("el-checkbox",{model:{value:t.form.remember,callback:function(e){t.$set(t.form,"remember",e)},expression:"form.remember"}},[t._v("\n          记住我\n        ")]),t._v(" "),t.showOAuth?r("div",{staticClass:"provider"},[r("a",{attrs:{href:"https://api.calibur.tv/callback/oauth2/qq?from=sign"}},[r("i",{staticClass:"iconfont icon-qq"})]),t._v(" "),r("a",{attrs:{href:"https://api.calibur.tv/callback/oauth2/wechat?from=sign"}},[r("i",{staticClass:"iconfont icon-v-chat"})])]):r("button",{attrs:{type:"button"},on:{click:function(e){t.showOAuth=!0}}},[t._v("\n          社交账号登录\n        ")])],1)]),t._v(" "),r("el-form-item",[r("el-button",{staticClass:"submit-btn",attrs:{loading:t.loading,type:"primary"},on:{click:t.submitForm}},[t._v("\n        登录\n      ")])],1)],1),t._ssrNode(' <div class="others"><a>忘记密码?&gt;</a> <a>点击注册»</a></div>')],2)},[],!1,function(t){var e=r(83);e.__inject__&&e.__inject__(t)},null,"121814d1").exports,d={name:"SignUpForm",props:{inviteCode:{type:[String,Number],default:""}},data(){return{watchPwd:!1,form:{access:"",secret:"",nickname:"",authCode:"",inviteCode:this.inviteCode},rule:{nickname:[{validator:(t,e,r)=>{if(""===e)return r(new Error("请先给自己起个名字"));const o=e.replace(/([\u4e00-\u9fa5])/g,"aa").trim().length;return o<2?r(new Error("昵称至少是2个字符")):o>14?r(new Error("昵称不能超过14个字符，1个汉字占2个字符")):/^([\u4e00-\u9fa5]|[a-z0-9])+$/i.test(e)?void r():r(new Error("昵称只能包含：中文、数字、字母"))},trigger:"blur"}],access:[{validator:(t,e,r)=>e?11!==e.length?r(new Error("请填写11位手机号")):/^(0|86|17951)?(1)[0-9]{10}$/.test(e)?void r():r(new Error("错误的手机号格式")):r(new Error("请填写手机号")),trigger:"blur"}],secret:[{validator:(t,e,r)=>""===e?r(new Error("请填写登录密码")):e.length<6?r(new Error("密码不能小于6位")):e.length>16?r(new Error("密码不能大于16位")):void r(),trigger:"blur"}]},step:0,timeout:0}},computed:{submitBtnText(){return 0===this.step?"注册":1===this.step?"提交中...":2===this.step?"短信已发送":3===this.step?"注册中...":"注册"},submitBtnLoading(){return 1===this.step||3===this.step},submitBtnDisabled(){return 0!==this.timeout&&0===this.step||3===this.step},query(){return this.$route.query},paramsIsOK(){return!!(this.query.uid&&/^\d+$/.test(this.query.uid)&&this.query.time&&/^\d+$/.test(this.query.time)&&Date.now()<=1e3*this.query.time&&this.query.key===this.$md5(`${this.query.uid}-the-world-${this.query.time}`))},qqRegisterLink(){let link="https://api.calibur.tv/callback/oauth2/qq?from=sign";return this.paramsIsOK?link=`${link}&invite=${this.query.uid}`:"about-invite-id"===this.$route.name&&(link=`${link}&invite=${this.$route.params.id}`),link},wechatRegisterLink(){let link="https://api.calibur.tv/callback/oauth2/wechat?from=sign";return this.paramsIsOK?link=`${link}&invite=${this.query.uid}`:"about-invite-id"===this.$route.name&&(link=`${link}&invite=${this.$route.params.id}`),link}},methods:{submitForm(){this.$refs.form.validate(t=>{if(!t)return!1;0===this.step&&this.getRegisterAuthCode(),2===this.step&&this.openConfirmModal()})},getRegisterAuthCode(){this.step=1,this.$captcha({ctx:this,success:async({data:data})=>{try{await Object(l.f)(this,{type:"sign_up",phone_number:this.form.access,geetest:data}),this.step=2,this.openConfirmModal()}catch(t){this.step=0}finally{this.timeout=60;const t=setInterval(()=>{--this.timeout||(this.step=0,clearInterval(t))},1e3)}},close:()=>{this.step=0}})},openConfirmModal(){this.$prompt("请输入收到的验证码","短信已发送",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^\d{6}$/,inputErrorMessage:"验证码格式不正确"}).then(({value:t})=>{this.form.authCode=t,this.step=3,this.signUp()}).catch(()=>{})},signUp(){Object(l.d)(this,{access:this.form.access,secret:this.form.secret,nickname:this.form.nickname,authCode:this.form.authCode,inviteCode:this.form.inviteCode}).then(t=>{this.$toast.success("注册成功！"),this.$cookie.set("JWT-TOKEN",t),window.location="/about/hello"}).catch(t=>{this.step=0,this.$toast.error(t)})},showLogin(){this.$emit("to-login"),this.$refs.form.resetFields()}}};var f={name:"ResetPasswordForm",data:()=>({form:{access:"",secret:"",authCode:""},rule:{access:[{validator:(t,e,r)=>e?11!==e.length?r(new Error("请填写11位手机号")):void r():r(new Error("请填写手机号")),trigger:"blur"}],secret:[{validator:(t,e,r)=>""===e?r(new Error("请填写登录密码")):e.length<6?r(new Error("密码不能小于6位")):e.length>16?r(new Error("密码不能大于16位")):void r(),trigger:"blur"}]},step:0,timeout:0}),computed:{submitBtnText(){return 0===this.step?"立即重置":1===this.step?"提交中...":2===this.step?"短信已发送":3===this.step?"已重置":"立即重置"},submitBtnLoading(){return 1===this.step||3===this.step},submitBtnDisabled(){return 0!==this.timeout&&0===this.step||3===this.step}},methods:{submitForm(){this.$refs.form.validate(t=>{if(!t)return!1;0===this.step&&this.getResetAuthCode(),2===this.step&&this.openConfirmModal()})},getResetAuthCode(){this.step=1,this.$captcha({ctx:this,success:async({data:data})=>{try{await Object(l.f)(this,{type:"forgot_password",phone_number:this.form.access,geetest:data}),this.step=2,this.openConfirmModal()}catch(t){this.step=0}finally{this.timeout=60;const t=setInterval(()=>{--this.timeout||(this.step=0,clearInterval(t))},1e3)}},close:()=>{this.step=0}})},openConfirmModal(){this.$prompt("请输入收到的验证码","短信已发送",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^\d{6}$/,inputErrorMessage:"验证码格式不正确"}).then(({value:t})=>{this.form.authCode=t,this.step=3,this.signReset()}).catch(()=>{})},async signReset(){try{const t=await Object(l.e)(this,{access:this.form.access,authCode:this.form.authCode,secret:this.form.secret});this.$toast.success(t),this.showLogin()}catch(t){}finally{this.step=0}},showLogin(){this.$emit("to-login"),this.$refs.form.resetFields()},showRegister(){this.$emit("to-register"),this.$refs.form.resetFields()}}};var v={name:"SignDialog",components:{SignUpForm:Object(n.a)(d,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sign-up-form"},[r("el-form",{ref:"form",attrs:{model:t.form,rules:t.rule,"status-icon":""}},[r("el-form-item",{attrs:{prop:"nickname"}},[r("el-input",{attrs:{type:"text",placeholder:"昵称（2-14个字符组成，1个汉字占2个字符）","auto-complete":"off"},model:{value:t.form.nickname,callback:function(e){t.$set(t.form,"nickname","string"==typeof e?e.trim():e)},expression:"form.nickname"}})],1),t._v(" "),r("el-form-item",{attrs:{prop:"access"}},[r("el-input",{attrs:{type:"text",placeholder:"手机（填写常用手机号，用于登录）","auto-complete":"off"},model:{value:t.form.access,callback:function(e){t.$set(t.form,"access","string"==typeof e?e.trim():e)},expression:"form.access"}})],1),t._v(" "),r("el-form-item",{attrs:{prop:"secret"}},[r("el-input",{attrs:{type:t.watchPwd?"text":"password",placeholder:"密码（6-16个字符组成，区分大小写）","auto-complete":"off"},model:{value:t.form.secret,callback:function(e){t.$set(t.form,"secret","string"==typeof e?e.trim():e)},expression:"form.secret"}}),t._v(" "),t.form.secret.length>5?r("button",{staticClass:"watch-pwd",attrs:{type:"button"},on:{click:function(e){t.watchPwd=!t.watchPwd}}},[r("i",{staticClass:"iconfont icon-ai-eye"})]):t._e()],1),t._v(" "),t.inviteCode?t._e():r("el-form-item",[r("el-input",{attrs:{type:"number",placeholder:"邀请码（可为空）","auto-complete":"off"},model:{value:t.form.inviteCode,callback:function(e){t.$set(t.form,"inviteCode","string"==typeof e?e.trim():e)},expression:"form.inviteCode"}})],1),t._v(" "),r("el-form-item",[r("el-button",{staticClass:"submit-btn",attrs:{loading:t.submitBtnLoading,disabled:t.submitBtnDisabled,type:"primary"},on:{click:t.submitForm}},[t._v("\n        "+t._s(t.submitBtnText)+"\n        "),t.timeout?[t._v("\n          （"+t._s(t.timeout)+"s 后可重新获取）\n        ")]:t._e()],2)],1)],1),t._ssrNode(' <div class="others"><div class="provider"><span>社交账号注册</span> <a'+t._ssrAttr("href",t.qqRegisterLink)+'><i class="iconfont icon-qq"></i></a> <a'+t._ssrAttr("href",t.wechatRegisterLink)+'><i class="iconfont icon-v-chat"></i></a></div> '+(t.inviteCode?"\x3c!----\x3e":"<a>已有账号»</a>")+"</div>")],2)},[],!1,function(t){var e=r(84);e.__inject__&&e.__inject__(t)},null,"a3db7f72").exports,SignInForm:m,ResetPasswordForm:Object(n.a)(f,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"reset-password-form"},[r("el-form",{ref:"form",attrs:{model:t.form,rules:t.rule}},[r("el-form-item",{attrs:{prop:"access"}},[r("el-input",{attrs:{type:"text",placeholder:"手机号","auto-complete":"off"},model:{value:t.form.access,callback:function(e){t.$set(t.form,"access","string"==typeof e?e.trim():e)},expression:"form.access"}})],1),t._v(" "),r("el-form-item",{attrs:{prop:"secret"}},[r("el-input",{attrs:{type:"text",placeholder:"新密码","auto-complete":"off"},model:{value:t.form.secret,callback:function(e){t.$set(t.form,"secret","string"==typeof e?e.trim():e)},expression:"form.secret"}})],1),t._v(" "),r("el-form-item",[r("el-button",{staticClass:"submit-btn",attrs:{loading:t.submitBtnLoading,disabled:t.submitBtnDisabled,type:"primary"},on:{click:t.submitForm}},[t._v("\n        "+t._s(t.submitBtnText)+"\n        "),t.timeout?[t._v("\n          （"+t._s(t.timeout)+"s 后可重新获取）\n        ")]:t._e()],2)],1)],1),t._ssrNode(' <div class="others"><a>返回登录&gt;</a> <a>点击注册»</a></div>')],2)},[],!1,function(t){var e=r(85);e.__inject__&&e.__inject__(t)},null,"07efa0da").exports},data:()=>({canRender:!1,showModal:!1,showSignIn:!1,showSignUp:!1,showReset:!1}),computed:{isGuest(){return!this.$store.state.login}},mounted(){this.canRender=!0,this.$channel.$on("sign-in",()=>{this.showLogin()}),this.$channel.$on("sign-up",()=>{this.showRegister()})},methods:{showLogin(){this.showReset=!1,this.showModal=!0,this.showSignIn=!0,this.showSignUp=!1},showRegister(){this.showModal=!0,this.showSignUp=!0,this.showSignIn=!1},hiddenSign(){this.showModal=!1,this.showSignIn=!1,this.showSignUp=!1,this.showReset=!1}}};var _=Object(n.a)(v,function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.canRender?r("div",{staticClass:"sign-container"},[t.isGuest?t._ssrNode('<div id="space3D"'+t._ssrClass(null,[t.showModal?"space-enter":"space-leave"])+">","</div>",[t._ssrNode('<div class="sign-modal-wrap">',"</div>",[t._ssrNode("<div"+t._ssrClass("sign-modal sign-in-modal",{"sign-in-init":!t.showSignIn&&!t.showSignUp,"sign-in-show":t.showSignIn&&!t.showSignUp,"sign-in-turn":!t.showSignIn&&t.showSignUp})+">","</div>",[t._ssrNode('<div class="form-container"'+t._ssrStyle(null,null,{display:t.showReset?"":"none"})+">","</div>",[r("reset-password-form",{on:{"to-login":function(e){t.showReset=!1},"to-register":t.showRegister}})],1),t._ssrNode(" "),t._ssrNode('<div class="form-container"'+t._ssrStyle(null,null,{display:t.showReset?"none":""})+">","</div>",[r("sign-in-form",{on:{"to-reset":function(e){t.showReset=!0},"to-register":t.showRegister}})],1)],2),t._ssrNode(" "),t._ssrNode("<div"+t._ssrClass("sign-modal sign-up-modal",{"sign-up-init":!t.showSignUp&&!t.showSignIn,"sign-up-show":t.showSignUp&&!t.showSignIn,"sign-up-turn":!t.showSignUp&&t.showSignIn})+">","</div>",[t._ssrNode('<div class="slogan"></div> '),t._ssrNode('<div class="form-container">',"</div>",[r("sign-up-form",{on:{"to-login":t.showLogin}})],1)],2)],2)]):t._e()]):t._e()},[],!1,function(t){var e=r(86);e.__inject__&&e.__inject__(t)},null,"6935e3d5").exports,w=r(19),$={name:"WebLayout",components:{VHeader:c,SignDialog:_},mixins:[{beforeMount(){const t=Object(w.a)();this.$store.commit("SET_USER_TOKEN",t),this.$store.dispatch("initAuth")}}],props:{},data:()=>({}),computed:{},watch:{},created(){},mounted(){},methods:{}};var y=Object(n.a)($,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"layout-web"}},[e("v-header"),this._ssrNode(" "),e("nuxt"),this._ssrNode(" "),e("sign-dialog")],2)},[],!1,function(t){},null,"8d259176");e.default=y.exports}};
//# sourceMappingURL=14f8d01ce07fe74d10f5.js.map