(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{250:function(e,t,r){"use strict";r.d(t,"h",function(){return o}),r.d(t,"b",function(){return n}),r.d(t,"a",function(){return l}),r.d(t,"g",function(){return c}),r.d(t,"e",function(){return d}),r.d(t,"c",function(){return h}),r.d(t,"d",function(){return m}),r.d(t,"f",function(){return f});const o=(e,t)=>e.$axios.$post("v1/user/update_info",t),n=(e,t)=>{let{slug:r}=t;return e.$axios.$get("v1/user/show",{params:{slug:r}})},l=(e,t)=>{let{id:r,phone:o,password:n,authCode:l}=t;return e.$axios.$post("v1/door/bind_phone",{id:r,phone:o,password:n,authCode:l})},c=(e,t)=>{let{phone_number:r,type:o,geetest:n}=t;return e.$axios.$post("v1/door/message",{phone_number:r,type:o,geetest:n})},d=(e,t)=>{let{access:r,secret:o,nickname:n,authCode:l,inviteCode:c}=t;return e.$axios.$post("v1/door/register",{access:r,secret:o,nickname:n,authCode:l,inviteCode:c})},h=(e,t)=>{let{access:r,secret:o,remember:n,geetest:l}=t;return e.$axios.$post("v1/door/login",{access:r,secret:o,remember:n,geetest:l})},m=e=>e.$axios.$post("v1/door/logout"),f=(e,t)=>{let{method:r,access:o,authCode:n,secret:l}=t;return e.$axios.$post("v1/door/reset_password",{method:r,access:o,authCode:n,secret:l})}},253:function(e,t,r){"use strict";r(61),r(58),r(59);var o=r(3),n=r(104);t.a={data:()=>({uploadHeaders:{key:"",token:""},uploadConfig:{max:5},uploadImageLimit:20,imageUploadAccept:["image/jpeg","image/png","image/jpg"].join(", "),imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv/",getUpTokenTimer:0,uploadPending:0,uploadImageTotal:0,uploadImageList:[]}),computed:{currentUser(){return this.$store.state.user},isAuth(){return this.$store.state.isAuth}},watch:{isAuth(e){e&&this.initUpToken()}},mounted(){this.isAuth&&this.initUpToken()},beforeDestroy(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{initUpToken(){this.getUpToken(),this.getUpTokenTimer=setInterval(()=>{this.getUpToken()},18e5)},getUpToken(){var e=this;return Object(o.a)(function*(){let t=e.$cookie.get("UPLOAD-TOKEN");t?e.uploadHeaders.token=e.$cookie.get("UPLOAD-TOKEN"):(t=yield Object(n.b)(e),e.uploadHeaders.token=t,e.$cookie.set("UPLOAD-TOKEN",t,{expires:new Date((new Date).getTime()+3e6)}))})()},handleImageUploadError(e,t){this.uploadImageList.forEach((r,o)=>{r.uid===t.uid&&(this.uploadPending--,this.uploadImageList.splice(o,1),console.log(e))}),this.$toast.error("图片：".concat(t.name," 上传失败"))},handleImageUploadRemove(e){this.uploadImageList.forEach((t,r)=>{t.uid===e.uid&&(this.uploadImageList.splice(r,1),this.uploadImageTotal--)})},handleImageUploadSuccess(e,t){this.uploadImageList.forEach((r,o)=>{r.uid===t.uid&&(this.uploadImageList[o]=Object.assign(r,{data:e.data,status:"success",url:this.$resize("".concat(this.imagePrefix).concat(e.data.url),{width:100})}))}),this.uploadImageTotal++,this.uploadPending--},handleImageUploadExceed(){this.$toast.info("最多还能上传".concat(this.uploadImageLimit-this.uploadImageTotal,"张图片"))},handleImageUploadBefore(e){if(!this.isAuth)return this.$channel.$emit("sign-in"),!1;if(-1===this.imageUploadAccept.split(", ").indexOf(e.type))return this.$toast.error("仅支持上传".concat(this.imageUploadAccept.replace(/image\//g,"").replace(/, /g,"、"),"格式的图片")),!1;if(this.uploadConfig.max&&this.uploadConfig.max<e.size/1024/1024)return this.$toast.error("图片大小不能超过 ".concat(this.uploadConfig.max,"MB!")),!1;return this.uploadHeaders.key=(e=>{let{slug:t,file:r}=e;return"".concat(t,"/").concat((new Date).getTime(),"-").concat(Math.random().toString(36).substring(3,6),".").concat(r.type.split("/").pop())})({slug:this.currentUser.slug,file:e}),this.uploadImageList.push({name:e.name,percentage:0,raw:e,size:e.size,status:"uploading",errMsg:"",uid:e.uid}),this.uploadPending++,!0}}}},286:function(e,t,r){"use strict";var o=r(34);t.a={beforeMount(){if(this.$store.state.isAuth)return;if(!Object(o.a)())return void this.$toast.error("继续操作前请先登录").then(()=>{window.location.href="/"});const e=this.$watch("$store.state.logging",t=>{t||(e(),this.$store.state.isAuth||(this.$cookie.remove("JWT-TOKEN"),this.$toast.error("继续操作前请先登录").then(()=>{window.location.href="/"})))});this.$store.state.logging||(this.$store.commit("SET_LOGGING"),this.$channel.socketConnect())}}},287:function(e,t,r){},337:function(e,t,r){"use strict";var o=r(287);r.n(o).a},348:function(e,t,r){"use strict";r.r(t);var o=r(3),n=(r(58),r(263)),l=r.n(n),c=r(333),d=r.n(c),h=r(262),m=r.n(h),f=r(256),v=r.n(f),w=r(336),$=r.n(w),_=r(250),U=r(253),k=r(286),y=r(34),x={name:"UserSetting",components:{"el-switch":$.a,"el-radio":v.a,"el-radio-group":m.a,"el-date-picker":d.a,"el-upload":l.a},mixins:[U.a,k.a],data:()=>({submitting:!1,rule:{nickname:[{validator:(e,t,r)=>{const o=t.replace(/([\u4e00-\u9fa5])/g,"aa").trim().length;o?o<2?r(new Error("昵称至少为2个字符")):o>14&&r(new Error("昵称不能超过14个字符")):r(new Error("昵称不能为空")),r()},trigger:"submit"}],signature:[{validator:(e,t,r)=>{t.length>150&&r(new Error("签名最多 150 个字")),r()},trigger:"submit"}],birthday:[{validator:(e,t,r)=>{const o=new Date(t).getTime(),n=Date.now();o>=n?r(new Error("。。。")):n-o<31536e7?r(new Error("你应该大于10岁了吧...?")):n-o>126144e7&&r(new Error("你应该小于40岁的吧...?")),r()},trigger:"submit"}]},phone:"",password:"",authCode:"",timeout:0,showInfoForm:!1,loadingBindPhone:!1}),computed:{isAuth(){return this.$store.state.isAuth},user(){return this.$store.state.user},isMine(){return this.user.slug===this.$route.params.slug},nickname:{get(){return this.user.nickname},set(e){this.$store.commit("UPDATE_USER_INFO",{key:"nickname",value:e})}},birthday:{get(){return this.user.birthday},set(e){this.$store.commit("UPDATE_USER_INFO",{key:"birthday",value:e})}},birthSecret:{get(){return this.user.birth_secret},set(e){this.$store.commit("UPDATE_USER_INFO",{key:"birth_secret",value:e})}},sex:{get(){return this.user.sex},set(e){this.$store.commit("UPDATE_USER_INFO",{key:"sex",value:e})}},sexSecret:{get(){return this.user.sex_secret},set(e){this.$store.commit("UPDATE_USER_INFO",{key:"sex_secret",value:e})}},signature:{get(){return this.user.signature},set(e){this.$store.commit("UPDATE_USER_INFO",{key:"signature",value:e.trim()})}}},watch:{},created(){},mounted(){const e=this.$watch("isAuth",t=>{t&&(this.isMine||(window.location.href=this.$alias.user(this.user.slug,"setting")),e())})},methods:{avatarUploadSuccess(e,t){this.handleImageUploadSuccess(e,t),this.$store.commit("UPDATE_USER_INFO",{key:"avatar",value:e.data.url})},bannerUploadSuccess(e,t){this.handleImageUploadSuccess(e,t),this.$store.commit("UPDATE_USER_INFO",{key:"banner",value:e.data.url})},submit(){var e=this;this.$refs.form.validate(function(){var t=Object(o.a)(function*(t){if(!t)return!1;if(!e.submitting){e.submitting=!0;try{yield Object(_.h)(e,{nickname:e.nickname,signature:e.signature,birthday:new Date(e.birthday).getTime()/1e3,birth_secret:e.birthSecret,sex_secret:e.sexSecret,sex:e.sex,avatar:e.user.avatar,banner:e.user.banner}),e.$toast.success("设置成功")}catch(t){e.$toast.error(t.message)}finally{e.submitting=!1}}});return function(e){return t.apply(this,arguments)}}())},bindUserQQ(){this.user.providers.bind_qq||(window.location.href="https://api.calibur.tv/callback/oauth2/qq?from=bind&token=".concat(Object(y.a)(),"&redirect=").concat(encodeURIComponent(window.location.href)))},bindUserWechat(){this.user.providers.bind_wechat||(window.location.href="https://api.calibur.tv/callback/oauth2/wechat?from=bind&token=".concat(Object(y.a)(),"&redirect=").concat(encodeURIComponent(window.location.href)))},bindUserPhone(){var e=this;this.user.providers.bind_phone||(this.timeout?this.showInfoForm=!0:this.$prompt("请输入要绑定的手机号（11位）","绑定手机",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^(0|86|17951)?(1)[0-9]{10}$/,inputErrorMessage:"请输入正确的手机号码"}).then(t=>{let{value:r}=t;this.phone=r,this.$captcha({success:function(){var t=Object(o.a)(function*(t){let{data:data}=t;try{yield Object(_.g)(e,{type:"bind_phone",phone_number:r,geetest:data}),e.showInfoForm=!0}catch(t){e.$toast.error(t.message)}finally{e.timeout=60;const t=setInterval(()=>{--e.timeout||clearInterval(t)},1e3)}});return function(e){return t.apply(this,arguments)}}()})}).catch(()=>{}))},submitBindPhone(){var e=this;return Object(o.a)(function*(){if(!e.user.providers.bind_phone){if(6!==e.authCode.length)return e.$toast.warn("请输入正确的短信验证码");if(e.password.length<6)return e.$toast.warn("密码不能小于6位");if(e.password.length>16)return e.$toast.warn("密码不能大于16位");if(!e.loadingBindPhone){e.loadingBindPhone=!0;try{yield Object(_.a)(e,{id:e.user.id,phone:e.phone,password:e.password,authCode:e.authCode}),e.$toast.success("手机号绑定成功").then(()=>{e.showInfoForm=!1,window.location.reload()})}catch(t){e.$toast.error(t.message)}finally{e.loadingBindPhone=!1}}}})()}}},I=(r(337),r(17)),component=Object(I.a)(x,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container",attrs:{id:"user-setting"}},[r("el-row",[r("el-col",{attrs:{span:12,offset:6}},[e.isAuth?r("el-form",{ref:"form",attrs:{disabled:e.submitting,model:e.user,rules:e.rule,"label-position":"top"}},[r("el-form-item",{attrs:{label:"头像"}},[r("div",{staticClass:"avatar-field"},[r("img",{staticClass:"avatar",attrs:{src:e.$resize(e.user.avatar,{width:100})}}),e._v(" "),r("el-upload",{attrs:{"show-file-list":!1,action:e.imageUploadAction,limit:e.uploadImageLimit,data:e.uploadHeaders,accept:e.imageUploadAccept,"before-upload":e.handleImageUploadBefore,"on-success":e.avatarUploadSuccess,"on-error":e.handleImageUploadError}},[r("el-button",{attrs:{loading:!!e.uploadPending,type:"success",plain:"",round:"",size:"mini"}},[e._v("\n                "+e._s(e.uploadPending?"图片上传中...":"点击更换头像")+"\n              ")])],1)],1)]),e._v(" "),r("el-form-item",{attrs:{label:"背景"}},[r("div",{staticClass:"banner-field"},[r("img",{staticClass:"banner",attrs:{src:e.$resize(e.user.banner,{height:100,mode:2})}}),e._v(" "),r("el-upload",{attrs:{"show-file-list":!1,action:e.imageUploadAction,limit:e.uploadImageLimit,data:e.uploadHeaders,accept:e.imageUploadAccept,"before-upload":e.handleImageUploadBefore,"on-success":e.bannerUploadSuccess,"on-error":e.handleImageUploadError}},[r("el-button",{attrs:{loading:!!e.uploadPending,type:"success",plain:"",round:"",size:"mini"}},[e._v("\n                "+e._s(e.uploadPending?"图片上传中...":"点击更换背景")+"\n              ")])],1)],1)]),e._v(" "),r("el-form-item",{attrs:{label:"昵称",prop:"nickname"}},[r("el-input",{model:{value:e.nickname,callback:function(t){e.nickname="string"==typeof t?t.trim():t},expression:"nickname"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"生日",prop:"birthday"}},[r("el-date-picker",{attrs:{editable:!1,clearable:!1,type:"date",format:"yyyy 年 M 月 d 日","value-format":"yyyy-MM-dd",placeholder:"选择生日"},model:{value:e.birthday,callback:function(t){e.birthday=t},expression:"birthday"}}),e._v(" "),r("el-switch",{attrs:{"active-text":"私密","inactive-text":"公开"},model:{value:e.birthSecret,callback:function(t){e.birthSecret=t},expression:"birthSecret"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"性别"}},[r("el-radio-group",{model:{value:e.sex,callback:function(t){e.sex=t},expression:"sex"}},[r("el-radio",{attrs:{label:1}},[e._v("\n              男\n            ")]),e._v(" "),r("el-radio",{attrs:{label:2}},[e._v("\n              女\n            ")])],1),e._v(" "),r("el-switch",{attrs:{"active-text":"私密","inactive-text":"公开"},model:{value:e.sexSecret,callback:function(t){e.sexSecret=t},expression:"sexSecret"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"签名",prop:"signature"}},[r("el-input",{attrs:{rows:5,type:"textarea",placeholder:"留下自己想说的话",maxlength:"60","show-word-limit":"",resize:"none"},model:{value:e.signature,callback:function(t){e.signature=t},expression:"signature"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"绑定"}},[r("ul",{staticClass:"providers"},[r("li",{on:{click:e.bindUserQQ}},[r("i",{staticClass:"iconfont ic-qq",class:{"is-bind":e.user.providers.bind_qq}})]),e._v(" "),r("li",{on:{click:e.bindUserWechat}},[r("i",{staticClass:"iconfont ic-v-chat",class:{"is-bind":e.user.providers.bind_wechat}})]),e._v(" "),r("li",{on:{click:e.bindUserPhone}},[r("i",{staticClass:"iconfont ic-phone",class:{"is-bind":e.user.providers.bind_phone}})])])]),e._v(" "),r("el-form-item",[r("el-button",{attrs:{loading:e.submitting,type:"primary"},on:{click:e.submit}},[e._v("\n            提交\n          ")])],1)],1):e._e()],1)],1),e._v(" "),r("v-dialog",{attrs:{width:"400px",title:"填写信息"},on:{submit:e.submitBindPhone},model:{value:e.showInfoForm,callback:function(t){e.showInfoForm=t},expression:"showInfoForm"}},[r("el-input",{attrs:{type:"number",placeholder:"短信验证码","auto-complete":"off"},model:{value:e.authCode,callback:function(t){e.authCode="string"==typeof t?t.trim():t},expression:"authCode"}}),e._v(" "),r("br"),e._v(" "),r("br"),e._v(" "),r("el-input",{attrs:{type:"text",placeholder:"密码（6-16个字符组成，区分大小写）","auto-complete":"off"},model:{value:e.password,callback:function(t){e.password="string"==typeof t?t.trim():t},expression:"password"}})],1)],1)},[],!1,null,null,null);t.default=component.exports}}]);