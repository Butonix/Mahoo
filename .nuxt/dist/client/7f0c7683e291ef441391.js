(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{266:function(t,e,o){},267:function(t,e,o){},268:function(t,e,o){},269:function(t,e,o){},270:function(t,e,o){},309:function(t,e,o){"use strict";var r=o(266);o.n(r).a},310:function(t,e,o){"use strict";var r=o(267);o.n(r).a},311:function(t,e,o){"use strict";var r=o(268);o.n(r).a},312:function(t,e,o){"use strict";var r=o(269);o.n(r).a},313:function(t,e,o){"use strict";var r=o(270);o.n(r).a},315:function(t,e,o){"use strict";o.r(e);var r={components:{},props:{},data:()=>({headers:[{route:"/",name:"首页"},{route:"/tag/2he",name:"动漫"},{route:"/tag/285",name:"游戏"},{route:"/tag/3p6",name:"话题"}]}),computed:{login(){return this.$store.state.login}},watch:{},created(){},mounted(){},methods:{handleLogout(){this.$store.dispatch("destroyAuth"),this.$cookie.remove("JWT-TOKEN"),window.location="/"},handleSignIn(){this.$channel.$emit("sign-in")}}},n=(o(309),o(8)),c=Object(n.a)(r,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{attrs:{id:"page-header"}},[o("div",{staticClass:"container nav"},[o("nav",{staticClass:"left"},[o("nuxt-link",{staticClass:"logo",attrs:{to:"/"}},[o("img",{attrs:{src:t.$resize("default-poster",{width:64,height:64})}})]),t._v(" "),o("v-switcher",{attrs:{headers:t.headers,routable:!0,align:"start"}},t._l(t.headers,function(e,r){return o("nuxt-link",{key:r,attrs:{slot:"tab-"+r,to:e.route},slot:"tab-"+r},[o("span",{domProps:{textContent:t._s(e.name)}})])}),1)],1),t._v(" "),o("div",{staticClass:"right"},[t.login?o("el-button",{attrs:{type:"text"},on:{click:t.handleLogout}},[t._v("\n        退出\n      ")]):o("el-button",{attrs:{type:"text"},on:{click:t.handleSignIn}},[t._v("\n        登录\n      ")]),t._v("\n        \n      "),o("nuxt-link",{attrs:{to:"/create/cosplay/"}},[o("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-s-promotion"}},[t._v("\n          投稿\n        ")])],1)],1)])])},[],!1,null,null,null).exports,l=o(59),h={name:"SignInForm",data:()=>({form:{access:"",secret:"",remember:!0},rule:{access:[{validator:(t,e,o)=>e?11!==e.length?o(new Error("请填写11位手机号")):void o():o(new Error("请填写手机号")),trigger:"blur"}],secret:[{validator:(t,e,o)=>""===e?o(new Error("请填写登录密码")):e.length<6?o(new Error("密码不能小于6位")):e.length>16?o(new Error("密码不能大于16位")):void o(),trigger:"blur"}]},loading:!1,watchPwd:!1,showOAuth:!0}),methods:{submitForm(){this.$refs.form.validate(t=>{if(!t)return!1;this.login()})},login(){this.loading||(this.loading=!0,this.$captcha({ctx:this,success:t=>{let data=t.data;Object(l.b)(this,{access:this.form.access,secret:this.form.secret,remember:this.form.remember,geetest:data}).then(t=>{this.$cookie.set("JWT-TOKEN",t,{expires:this.form.remember?365:1}),window.location.reload()}).catch(t=>{this.$toast.error(t.message),this.loading=!1})},close:()=>{this.loading=!1}}))},showReset(){this.$emit("to-reset"),this.$refs.form.resetFields()},showRegister(){this.$emit("to-register"),this.$refs.form.resetFields()}}},m=(o(310),Object(n.a)(h,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"sign-in-form"},[o("el-form",{ref:"form",attrs:{model:t.form,rules:t.rule}},[o("el-form-item",{attrs:{prop:"access"}},[o("el-input",{attrs:{type:"text",placeholder:"手机（填写常用手机号，用于登录）"},model:{value:t.form.access,callback:function(e){t.$set(t.form,"access","string"==typeof e?e.trim():e)},expression:"form.access"}})],1),t._v(" "),o("el-form-item",{attrs:{prop:"secret"}},[o("el-input",{attrs:{type:t.watchPwd?"text":"password",placeholder:"密码（6-16个字符组成，区分大小写）"},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitForm(e)}},model:{value:t.form.secret,callback:function(e){t.$set(t.form,"secret","string"==typeof e?e.trim():e)},expression:"form.secret"}}),t._v(" "),t.form.secret.length>5?o("button",{staticClass:"watch-pwd",attrs:{type:"button"},on:{click:function(e){t.watchPwd=!t.watchPwd}}},[o("i",{staticClass:"iconfont icon-ai-eye"})]):t._e()],1),t._v(" "),o("el-form-item",{staticClass:"sign-in-opt"},[o("div",{staticClass:"opt-container"},[o("el-checkbox",{model:{value:t.form.remember,callback:function(e){t.$set(t.form,"remember",e)},expression:"form.remember"}},[t._v("\n          记住我\n        ")]),t._v(" "),t.showOAuth?o("div",{staticClass:"provider"},[o("a",{attrs:{href:"https://api.calibur.tv/callback/oauth2/qq?from=sign"}},[o("i",{staticClass:"iconfont icon-qq"})]),t._v(" "),o("a",{attrs:{href:"https://api.calibur.tv/callback/oauth2/wechat?from=sign"}},[o("i",{staticClass:"iconfont icon-v-chat"})])]):o("button",{attrs:{type:"button"},on:{click:function(e){t.showOAuth=!0}}},[t._v("\n          社交账号登录\n        ")])],1)]),t._v(" "),o("el-form-item",[o("el-button",{staticClass:"submit-btn",attrs:{loading:t.loading,type:"primary"},on:{click:t.submitForm}},[t._v("\n        登录\n      ")])],1)],1),t._v(" "),o("div",{staticClass:"others"},[o("a",{on:{click:t.showReset}},[t._v("忘记密码?>")]),t._v(" "),o("a",{on:{click:t.showRegister}},[t._v("点击注册»")])])],1)},[],!1,null,null,null).exports),d=o(2),f=(o(57),{name:"SignUpForm",props:{inviteCode:{type:[String,Number],default:""}},data(){return{watchPwd:!1,form:{access:"",secret:"",nickname:"",authCode:"",inviteCode:this.inviteCode},rule:{nickname:[{validator:(t,e,o)=>{if(""===e)return o(new Error("请先给自己起个名字"));const r=e.replace(/([\u4e00-\u9fa5])/g,"aa").trim().length;return r<2?o(new Error("昵称至少是2个字符")):r>14?o(new Error("昵称不能超过14个字符，1个汉字占2个字符")):/^([\u4e00-\u9fa5]|[a-z0-9])+$/i.test(e)?void o():o(new Error("昵称只能包含：中文、数字、字母"))},trigger:"blur"}],access:[{validator:(t,e,o)=>e?11!==e.length?o(new Error("请填写11位手机号")):/^(0|86|17951)?(1)[0-9]{10}$/.test(e)?void o():o(new Error("错误的手机号格式")):o(new Error("请填写手机号")),trigger:"blur"}],secret:[{validator:(t,e,o)=>""===e?o(new Error("请填写登录密码")):e.length<6?o(new Error("密码不能小于6位")):e.length>16?o(new Error("密码不能大于16位")):void o(),trigger:"blur"}]},step:0,timeout:0}},computed:{submitBtnText(){return 0===this.step?"注册":1===this.step?"提交中...":2===this.step?"短信已发送":3===this.step?"注册中...":"注册"},submitBtnLoading(){return 1===this.step||3===this.step},submitBtnDisabled(){return 0!==this.timeout&&0===this.step||3===this.step},query(){return this.$route.query},paramsIsOK(){return!!(this.query.uid&&/^\d+$/.test(this.query.uid)&&this.query.time&&/^\d+$/.test(this.query.time)&&Date.now()<=1e3*this.query.time&&this.query.key===this.$md5("".concat(this.query.uid,"-the-world-").concat(this.query.time)))},qqRegisterLink(){let link="https://api.calibur.tv/callback/oauth2/qq?from=sign";return this.paramsIsOK?link="".concat(link,"&invite=").concat(this.query.uid):"about-invite-id"===this.$route.name&&(link="".concat(link,"&invite=").concat(this.$route.params.id)),link},wechatRegisterLink(){let link="https://api.calibur.tv/callback/oauth2/wechat?from=sign";return this.paramsIsOK?link="".concat(link,"&invite=").concat(this.query.uid):"about-invite-id"===this.$route.name&&(link="".concat(link,"&invite=").concat(this.$route.params.id)),link}},methods:{submitForm(){this.$refs.form.validate(t=>{if(!t)return!1;0===this.step&&this.getRegisterAuthCode(),2===this.step&&this.openConfirmModal()})},getRegisterAuthCode(){var t=this;this.step=1,this.$captcha({ctx:this,success:function(){var e=Object(d.a)(function*(e){let data=e.data;try{yield Object(l.f)(t,{type:"sign_up",phone_number:t.form.access,geetest:data}),t.step=2,t.openConfirmModal()}catch(e){t.step=0}finally{t.timeout=60;const e=setInterval(()=>{--t.timeout||(t.step=0,clearInterval(e))},1e3)}});return function(t){return e.apply(this,arguments)}}(),close:()=>{this.step=0}})},openConfirmModal(){this.$prompt("请输入收到的验证码","短信已发送",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^\d{6}$/,inputErrorMessage:"验证码格式不正确"}).then(t=>{let e=t.value;this.form.authCode=e,this.step=3,this.signUp()}).catch(()=>{})},signUp(){Object(l.d)(this,{access:this.form.access,secret:this.form.secret,nickname:this.form.nickname,authCode:this.form.authCode,inviteCode:this.form.inviteCode}).then(t=>{this.$toast.success("注册成功！"),this.$cookie.set("JWT-TOKEN",t),window.location="/about/hello"}).catch(t=>{this.step=0,this.$toast.error(t)})},showLogin(){this.$emit("to-login"),this.$refs.form.resetFields()}}}),v=(o(311),Object(n.a)(f,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"sign-up-form"},[o("el-form",{ref:"form",attrs:{model:t.form,rules:t.rule,"status-icon":""}},[o("el-form-item",{attrs:{prop:"nickname"}},[o("el-input",{attrs:{type:"text",placeholder:"昵称（2-14个字符组成，1个汉字占2个字符）","auto-complete":"off"},model:{value:t.form.nickname,callback:function(e){t.$set(t.form,"nickname","string"==typeof e?e.trim():e)},expression:"form.nickname"}})],1),t._v(" "),o("el-form-item",{attrs:{prop:"access"}},[o("el-input",{attrs:{type:"text",placeholder:"手机（填写常用手机号，用于登录）","auto-complete":"off"},model:{value:t.form.access,callback:function(e){t.$set(t.form,"access","string"==typeof e?e.trim():e)},expression:"form.access"}})],1),t._v(" "),o("el-form-item",{attrs:{prop:"secret"}},[o("el-input",{attrs:{type:t.watchPwd?"text":"password",placeholder:"密码（6-16个字符组成，区分大小写）","auto-complete":"off"},model:{value:t.form.secret,callback:function(e){t.$set(t.form,"secret","string"==typeof e?e.trim():e)},expression:"form.secret"}}),t._v(" "),t.form.secret.length>5?o("button",{staticClass:"watch-pwd",attrs:{type:"button"},on:{click:function(e){t.watchPwd=!t.watchPwd}}},[o("i",{staticClass:"iconfont icon-ai-eye"})]):t._e()],1),t._v(" "),t.inviteCode?t._e():o("el-form-item",[o("el-input",{attrs:{type:"number",placeholder:"邀请码（可为空）","auto-complete":"off"},model:{value:t.form.inviteCode,callback:function(e){t.$set(t.form,"inviteCode","string"==typeof e?e.trim():e)},expression:"form.inviteCode"}})],1),t._v(" "),o("el-form-item",[o("el-button",{staticClass:"submit-btn",attrs:{loading:t.submitBtnLoading,disabled:t.submitBtnDisabled,type:"primary"},on:{click:t.submitForm}},[t._v("\n        "+t._s(t.submitBtnText)+"\n        "),t.timeout?[t._v("\n          （"+t._s(t.timeout)+"s 后可重新获取）\n        ")]:t._e()],2)],1)],1),t._v(" "),o("div",{staticClass:"others"},[o("div",{staticClass:"provider"},[o("span",[t._v("社交账号注册")]),t._v(" "),o("a",{attrs:{href:t.qqRegisterLink}},[o("i",{staticClass:"iconfont icon-qq"})]),t._v(" "),o("a",{attrs:{href:t.wechatRegisterLink}},[o("i",{staticClass:"iconfont icon-v-chat"})])]),t._v(" "),t.inviteCode?t._e():o("a",{on:{click:t.showLogin}},[t._v("已有账号»")])])],1)},[],!1,null,null,null).exports),w={name:"ResetPasswordForm",data:()=>({form:{access:"",secret:"",authCode:""},rule:{access:[{validator:(t,e,o)=>e?11!==e.length?o(new Error("请填写11位手机号")):void o():o(new Error("请填写手机号")),trigger:"blur"}],secret:[{validator:(t,e,o)=>""===e?o(new Error("请填写登录密码")):e.length<6?o(new Error("密码不能小于6位")):e.length>16?o(new Error("密码不能大于16位")):void o(),trigger:"blur"}]},step:0,timeout:0}),computed:{submitBtnText(){return 0===this.step?"立即重置":1===this.step?"提交中...":2===this.step?"短信已发送":3===this.step?"已重置":"立即重置"},submitBtnLoading(){return 1===this.step||3===this.step},submitBtnDisabled(){return 0!==this.timeout&&0===this.step||3===this.step}},methods:{submitForm(){this.$refs.form.validate(t=>{if(!t)return!1;0===this.step&&this.getResetAuthCode(),2===this.step&&this.openConfirmModal()})},getResetAuthCode(){var t=this;this.step=1,this.$captcha({ctx:this,success:function(){var e=Object(d.a)(function*(e){let data=e.data;try{yield Object(l.f)(t,{type:"forgot_password",phone_number:t.form.access,geetest:data}),t.step=2,t.openConfirmModal()}catch(e){t.step=0}finally{t.timeout=60;const e=setInterval(()=>{--t.timeout||(t.step=0,clearInterval(e))},1e3)}});return function(t){return e.apply(this,arguments)}}(),close:()=>{this.step=0}})},openConfirmModal(){this.$prompt("请输入收到的验证码","短信已发送",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^\d{6}$/,inputErrorMessage:"验证码格式不正确"}).then(t=>{let e=t.value;this.form.authCode=e,this.step=3,this.signReset()}).catch(()=>{})},signReset(){var t=this;return Object(d.a)(function*(){try{const e=yield Object(l.e)(t,{access:t.form.access,authCode:t.form.authCode,secret:t.form.secret});t.$toast.success(e),t.showLogin()}catch(t){}finally{t.step=0}})()},showLogin(){this.$emit("to-login"),this.$refs.form.resetFields()},showRegister(){this.$emit("to-register"),this.$refs.form.resetFields()}}},_=(o(312),{name:"SignDialog",components:{SignUpForm:v,SignInForm:m,ResetPasswordForm:Object(n.a)(w,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"reset-password-form"},[o("el-form",{ref:"form",attrs:{model:t.form,rules:t.rule}},[o("el-form-item",{attrs:{prop:"access"}},[o("el-input",{attrs:{type:"text",placeholder:"手机号","auto-complete":"off"},model:{value:t.form.access,callback:function(e){t.$set(t.form,"access","string"==typeof e?e.trim():e)},expression:"form.access"}})],1),t._v(" "),o("el-form-item",{attrs:{prop:"secret"}},[o("el-input",{attrs:{type:"text",placeholder:"新密码","auto-complete":"off"},model:{value:t.form.secret,callback:function(e){t.$set(t.form,"secret","string"==typeof e?e.trim():e)},expression:"form.secret"}})],1),t._v(" "),o("el-form-item",[o("el-button",{staticClass:"submit-btn",attrs:{loading:t.submitBtnLoading,disabled:t.submitBtnDisabled,type:"primary"},on:{click:t.submitForm}},[t._v("\n        "+t._s(t.submitBtnText)+"\n        "),t.timeout?[t._v("\n          （"+t._s(t.timeout)+"s 后可重新获取）\n        ")]:t._e()],2)],1)],1),t._v(" "),o("div",{staticClass:"others"},[o("a",{on:{click:t.showLogin}},[t._v("返回登录>")]),t._v(" "),o("a",{on:{click:t.showRegister}},[t._v("点击注册»")])])],1)},[],!1,null,null,null).exports},data:()=>({canRender:!1,showModal:!1,showSignIn:!1,showSignUp:!1,showReset:!1}),computed:{isGuest(){return!this.$store.state.login}},mounted(){this.canRender=!0,this.$channel.$on("sign-in",()=>{this.showLogin()}),this.$channel.$on("sign-up",()=>{this.showRegister()})},methods:{showLogin(){this.showReset=!1,this.showModal=!0,this.showSignIn=!0,this.showSignUp=!1},showRegister(){this.showModal=!0,this.showSignUp=!0,this.showSignIn=!1},hiddenSign(){this.showModal=!1,this.showSignIn=!1,this.showSignUp=!1,this.showReset=!1}}}),y=(o(313),Object(n.a)(_,function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.canRender?o("div",{staticClass:"sign-container"},[t.isGuest?o("div",{class:[t.showModal?"space-enter":"space-leave"],attrs:{id:"space3D"},on:{click:t.hiddenSign}},[o("div",{ref:"wrap",staticClass:"sign-modal-wrap"},[o("div",{staticClass:"sign-modal sign-in-modal",class:{"sign-in-init":!t.showSignIn&&!t.showSignUp,"sign-in-show":t.showSignIn&&!t.showSignUp,"sign-in-turn":!t.showSignIn&&t.showSignUp},on:{click:function(t){t.stopPropagation()}}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.showReset,expression:"showReset"}],staticClass:"form-container"},[o("reset-password-form",{on:{"to-login":function(e){t.showReset=!1},"to-register":t.showRegister}})],1),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:!t.showReset,expression:"!showReset"}],staticClass:"form-container"},[o("sign-in-form",{on:{"to-reset":function(e){t.showReset=!0},"to-register":t.showRegister}})],1)]),t._v(" "),o("div",{staticClass:"sign-modal sign-up-modal",class:{"sign-up-init":!t.showSignUp&&!t.showSignIn,"sign-up-show":t.showSignUp&&!t.showSignIn,"sign-up-turn":!t.showSignUp&&t.showSignIn},on:{click:function(t){t.stopPropagation()}}},[o("div",{staticClass:"slogan"}),t._v(" "),o("div",{staticClass:"form-container"},[o("sign-up-form",{on:{"to-login":t.showLogin}})],1)])])]):t._e()]):t._e()},[],!1,null,null,null).exports),$=o(121),C={name:"WebLayout",components:{VHeader:c,SignDialog:y},mixins:[{beforeMount(){const t=Object($.a)();this.$store.commit("SET_USER_TOKEN",t),this.$store.dispatch("initAuth")}}],props:{},data:()=>({}),computed:{},watch:{},created(){},mounted(){},methods:{}},k=Object(n.a)(C,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"layout-web"}},[e("v-header"),this._v(" "),e("nuxt"),this._v(" "),e("sign-dialog")],1)},[],!1,null,null,null);e.default=k.exports}}]);