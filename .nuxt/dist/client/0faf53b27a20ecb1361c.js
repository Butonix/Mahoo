(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{289:function(t,e,o){},342:function(t,e,o){"use strict";var n=o(289);o.n(n).a},365:function(t,e,o){"use strict";o.r(e);var n=o(2),r=o(59),c=o(34),d={name:"UserAuthSetting",data:()=>({phone:"",password:"",authCode:"",timeout:0,showInfoForm:!1,loadingBindPhone:!1}),computed:{isAuth(){return this.$store.state.isAuth},user(){return this.$store.state.user}},methods:{bindUserQQ(){this.user.providers.bind_qq||(window.location.href="https://api.calibur.tv/callback/oauth2/qq?from=bind&token=".concat(Object(c.a)(),"&redirect=").concat(encodeURIComponent(window.location.href)))},bindUserWechat(){this.user.providers.bind_wechat||(window.location.href="https://api.calibur.tv/callback/oauth2/wechat?from=bind&token=".concat(Object(c.a)(),"&redirect=").concat(encodeURIComponent(window.location.href)))},bindUserPhone(){var t=this;this.user.providers.bind_phone||(this.timeout?this.showInfoForm=!0:this.$prompt("请输入要绑定的手机号（11位）","绑定手机",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^(0|86|17951)?(1)[0-9]{10}$/,inputErrorMessage:"请输入正确的手机号码"}).then(e=>{let{value:o}=e;this.phone=o,this.$captcha({success:function(){var e=Object(n.a)(function*(e){let{data:data}=e;try{yield Object(r.i)(t,{type:"bind_phone",phone_number:o,geetest:data}),t.showInfoForm=!0}catch(e){t.$toast.error(e.message)}finally{t.timeout=60;const e=setInterval(()=>{--t.timeout||clearInterval(e)},1e3)}});return function(t){return e.apply(this,arguments)}}()})}).catch(()=>{}))},submitBindPhone(){var t=this;return Object(n.a)(function*(){if(!t.user.providers.bind_phone){if(6!==t.authCode.length)return t.$toast.warn("请输入正确的短信验证码");if(t.password.length<6)return t.$toast.warn("密码不能小于6位");if(t.password.length>16)return t.$toast.warn("密码不能大于16位");if(!t.loadingBindPhone){t.loadingBindPhone=!0;try{yield Object(r.a)(t,{id:t.user.id,phone:t.phone,password:t.password,authCode:t.authCode}),t.$toast.success("手机号绑定成功").then(()=>{t.showInfoForm=!1,window.location.reload()})}catch(e){t.$toast.error(e.message)}finally{t.loadingBindPhone=!1}}}})()}}},h=(o(342),o(17)),component=Object(h.a)(d,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"user-auth-setting"}},[t.isAuth?o("ul",{staticClass:"providers"},[o("li",{on:{click:t.bindUserQQ}},[o("i",{staticClass:"iconfont ic-qq",class:{"is-bind":t.user.providers.bind_qq}})]),t._v(" "),o("li",{on:{click:t.bindUserWechat}},[o("i",{staticClass:"iconfont ic-v-chat",class:{"is-bind":t.user.providers.bind_wechat}})]),t._v(" "),o("li",{on:{click:t.bindUserPhone}},[o("i",{staticClass:"iconfont ic-phone",class:{"is-bind":t.user.providers.bind_phone}})])]):t._e(),t._v(" "),o("v-dialog",{attrs:{width:"400px",title:"填写信息"},on:{submit:t.submitBindPhone},model:{value:t.showInfoForm,callback:function(e){t.showInfoForm=e},expression:"showInfoForm"}},[o("el-input",{attrs:{type:"number",placeholder:"短信验证码","auto-complete":"off"},model:{value:t.authCode,callback:function(e){t.authCode="string"==typeof e?e.trim():e},expression:"authCode"}}),t._v(" "),o("br"),t._v(" "),o("br"),t._v(" "),o("el-input",{attrs:{type:"text",placeholder:"密码（6-16个字符组成，区分大小写）","auto-complete":"off"},model:{value:t.password,callback:function(e){t.password="string"==typeof e?e.trim():e},expression:"password"}})],1)],1)},[],!1,null,null,null);e.default=component.exports}}]);