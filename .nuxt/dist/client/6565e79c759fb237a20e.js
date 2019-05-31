(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{253:function(t,e,r){"use strict";r(59),r(33),r(58);var o=r(2),n=r(105);e.a={data:()=>({uploadHeaders:{key:"",token:""},uploadConfig:{max:5},uploadImageLimit:20,imageUploadAccept:["image/jpeg","image/png","image/jpg"].join(", "),imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv/",getUpTokenTimer:0,uploadPending:0,uploadImageTotal:0,uploadImageList:[]}),computed:{currentUser(){return this.$store.state.user},login(){return this.$store.state.login}},watch:{login(t){t&&this.initUpToken()}},mounted(){this.login&&this.initUpToken()},beforeDestroy(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{initUpToken(){this.getUpToken(),this.getUpTokenTimer=setInterval(()=>{this.getUpToken()},18e5)},getUpToken(){var t=this;return Object(o.a)(function*(){t.uploadHeaders.token=yield Object(n.b)(t)})()},handleImageUploadError(t,e){this.uploadImageList.forEach((r,o)=>{r.uid===e.uid&&(this.uploadPending--,this.uploadImageList.splice(o,1),console.log(t))}),this.$toast.error("图片：".concat(e.name," 上传失败"))},handleImageUploadRemove(t){this.uploadImageList.forEach((e,r)=>{e.uid===t.uid&&(this.uploadImageList.splice(r,1),this.uploadImageTotal--)})},handleImageUploadSuccess(t,e){this.uploadImageList.forEach((r,o)=>{r.uid===e.uid&&(this.uploadImageList[o]=Object.assign(r,{data:t.data,status:"success",url:this.$resize("".concat(this.imagePrefix).concat(t.data.url),{width:100})}))}),this.uploadImageTotal++,this.uploadPending--},handleImageUploadExceed(){this.$toast.info("最多还能上传".concat(this.uploadImageLimit-this.uploadImageTotal,"张图片"))},handleImageUploadBefore(t){if(!this.login)return this.$channel.$emit("sign-in"),!1;if(-1===this.imageUploadAccept.split(", ").indexOf(t.type))return this.$toast.error("仅支持上传".concat(this.imageUploadAccept.replace(/image\//g,"").replace(/, /g,"、"),"格式的图片")),!1;if(this.uploadConfig.max&&this.uploadConfig.max<t.size/1024/1024)return this.$toast.error("图片大小不能超过 ".concat(this.uploadConfig.max,"MB!")),!1;return this.uploadHeaders.key=(t=>{let{slug:e,file:r}=t;return"".concat(e,"/").concat((new Date).getTime(),"-").concat(Math.random().toString(36).substring(3,6),".").concat(r.type.split("/").pop())})({slug:this.currentUser.slug,file:t}),this.uploadImageList.push({name:t.name,percentage:0,raw:t,size:t.size,status:"uploading",errMsg:"",uid:t.uid}),this.uploadPending++,!0}}}},274:function(t,e,r){"use strict";var o=r(2),n=r(34);e.a={beforeMount(){var t=this;return Object(o.a)(function*(){if(t.$store.state.logging){const e=t.$watch("$store.state.logging",()=>{t.$store.state.isAuth?e():t.$toast.error("继续操作前请先登录").then(()=>{window.location.href="/"})})}else{const e=Object(n.a)();t.$store.commit("SET_USER_TOKEN",e),(yield t.$store.dispatch("initAuth"))||t.$toast.error("继续操作前请先登录").then(()=>{window.location.href="/"})}})()}}},275:function(t,e,r){},312:function(t,e,r){"use strict";var o=r(275);r.n(o).a},329:function(t,e,r){"use strict";r.r(e);var o=r(2),n=(r(33),r(267)),l=r.n(n),c=r(307),d=r.n(c),h=r(310),m=r.n(h),f=r(266),v=r.n(f),w=r(257),_=r.n(w),k=r(311),y=r.n(k),U=r(60),x=r(253),I=r(274),$=r(34),E={components:{"el-switch":y.a,"el-radio":_.a,"el-radio-group":v.a,"el-tooltip":m.a,"el-date-picker":d.a,"el-upload":l.a},mixins:[x.a,I.a],data:()=>({submitting:!1,rule:{nickname:[{validator:(t,e,r)=>{const o=e.replace(/([\u4e00-\u9fa5])/g,"aa").trim().length;o?o<2?r(new Error("昵称至少为2个字符")):o>14&&r(new Error("昵称不能超过14个字符")):r(new Error("昵称不能为空")),r()},trigger:"submit"}],signature:[{validator:(t,e,r)=>{e.length>150&&r(new Error("签名最多 150 个字")),r()},trigger:"submit"}],birthday:[{validator:(t,e,r)=>{const o=new Date(e).getTime(),n=Date.now();o>=n?r(new Error("。。。")):n-o<31536e7?r(new Error("你应该大于10岁了吧...?")):n-o>126144e7&&r(new Error("你应该小于40岁的吧...?")),r()},trigger:"submit"}]},phone:"",password:"",authCode:"",timeout:0,showInfoForm:!1,loadingBindPhone:!1}),computed:{isAuth(){return this.$store.state.isAuth},user(){return this.$store.state.user},isMine(){return this.user.slug===this.$route.params.slug},nickname:{get(){return this.user.nickname},set(t){this.$store.commit("UPDATE_USER_INFO",{key:"nickname",value:t})}},birthday:{get(){return this.user.birthday},set(t){this.$store.commit("UPDATE_USER_INFO",{key:"birthday",value:t})}},birthSecret:{get(){return this.user.birth_secret},set(t){this.$store.commit("UPDATE_USER_INFO",{key:"birth_secret",value:t})}},sex:{get(){return this.user.sex},set(t){this.$store.commit("UPDATE_USER_INFO",{key:"sex",value:t})}},sexSecret:{get(){return this.user.sex_secret},set(t){this.$store.commit("UPDATE_USER_INFO",{key:"sex_secret",value:t})}},signature:{get(){return this.user.signature},set(t){this.$store.commit("UPDATE_USER_INFO",{key:"signature",value:t.trim()})}}},watch:{},created(){},mounted(){const t=this.$watch("isAuth",e=>{e&&(this.isMine||(window.location.href=this.$alias.user(this.user.slug,"setting")),t())})},methods:{avatarUploadSuccess(t,e){this.handleImageUploadSuccess(t,e),this.$store.commit("UPDATE_USER_INFO",{key:"avatar",value:t.data.url})},submit(){var t=this;this.$refs.form.validate(function(){var e=Object(o.a)(function*(e){if(!e)return!1;if(!t.submitting){t.submitting=!0;try{yield Object(U.i)(t,{nickname:t.nickname,signature:t.signature,birthday:new Date(t.birthday).getTime()/1e3,birth_secret:t.birthSecret,sex_secret:t.sexSecret,sex:t.sex,avatar:t.user.avatar,banner:t.user.banner}),t.$toast.success("设置成功")}catch(e){t.$toast.error(e.message)}finally{t.submitting=!1}}});return function(t){return e.apply(this,arguments)}}())},bindUserQQ(){this.user.providers.bind_qq||(window.location.href="https://api.calibur.tv/callback/oauth2/qq?from=bind&token=".concat(Object($.a)(),"&redirect=").concat(encodeURIComponent(window.location.href)))},bindUserWechat(){this.user.providers.bind_wechat||(window.location.href="https://api.calibur.tv/callback/oauth2/wechat?from=bind&token=".concat(Object($.a)(),"&redirect=").concat(encodeURIComponent(window.location.href)))},bindUserPhone(){var t=this;this.user.providers.bind_phone||(this.timeout?this.showInfoForm=!0:this.$prompt("请输入要绑定的手机号（11位）","绑定手机",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^(0|86|17951)?(1)[0-9]{10}$/,inputErrorMessage:"请输入正确的手机号码"}).then(e=>{let{value:r}=e;this.phone=r,this.$captcha({success:function(){var e=Object(o.a)(function*(e){let{data:data}=e;try{yield Object(U.h)(t,{type:"bind_phone",phone_number:r,geetest:data}),t.showInfoForm=!0}catch(e){t.$toast.error(e.message)}finally{t.timeout=60;const e=setInterval(()=>{--t.timeout||clearInterval(e)},1e3)}});return function(t){return e.apply(this,arguments)}}()})}).catch(()=>{}))},submitBindPhone(){var t=this;return Object(o.a)(function*(){if(!t.user.providers.bind_phone){if(6!==t.authCode.length)return t.$toast.warn("请输入正确的短信验证码");if(t.password.length<6)return t.$toast.warn("密码不能小于6位");if(t.password.length>16)return t.$toast.warn("密码不能大于16位");if(!t.loadingBindPhone){t.loadingBindPhone=!0;try{yield Object(U.a)(t,{id:t.user.id,phone:t.phone,password:t.password,authCode:t.authCode}),t.$toast.success("手机号绑定成功").then(()=>{t.showInfoForm=!1,window.location.reload()})}catch(e){t.$toast.error(e.message)}finally{t.loadingBindPhone=!1}}}})()}}},T=(r(312),r(7)),component=Object(T.a)(E,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container",attrs:{id:"user-setting"}},[r("el-row",[r("el-col",{attrs:{span:12,offset:6}},[t.isAuth?r("el-form",{ref:"form",attrs:{disabled:t.submitting,model:t.user,rules:t.rule,"label-position":"top"}},[r("el-form-item",{attrs:{label:"头像"}},[r("div",{staticClass:"avatar-field"},[r("img",{staticClass:"avatar",attrs:{src:t.$resize(t.user.avatar,{width:100})}}),t._v(" "),r("el-upload",{attrs:{"show-file-list":!1,action:t.imageUploadAction,limit:t.uploadImageLimit,data:t.uploadHeaders,accept:t.imageUploadAccept,"before-upload":t.handleImageUploadBefore,"on-success":t.avatarUploadSuccess,"on-error":t.handleImageUploadError}},[r("el-button",{attrs:{loading:!!t.uploadPending,type:"success",plain:"",round:"",size:"mini"}},[t._v("\n                "+t._s(t.uploadPending?"图片上传中...":"点击更换头像")+"\n              ")])],1)],1)]),t._v(" "),r("el-form-item",{attrs:{label:"昵称",prop:"nickname"}},[r("el-input",{model:{value:t.nickname,callback:function(e){t.nickname="string"==typeof e?e.trim():e},expression:"nickname"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"生日",prop:"birthday"}},[r("el-date-picker",{attrs:{editable:!1,clearable:!1,type:"date",format:"yyyy 年 M 月 d 日","value-format":"yyyy-MM-dd",placeholder:"选择生日"},model:{value:t.birthday,callback:function(e){t.birthday=e},expression:"birthday"}}),t._v(" "),r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"设置为私密后将不对外公开",placement:"top"}},[r("i",{staticClass:"el-icon-question"})]),t._v(" "),r("el-switch",{attrs:{"active-text":"私密","inactive-text":"公开"},model:{value:t.birthSecret,callback:function(e){t.birthSecret=e},expression:"birthSecret"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"性别"}},[r("el-radio-group",{model:{value:t.sex,callback:function(e){t.sex=e},expression:"sex"}},[r("el-radio",{attrs:{label:1}},[t._v("\n              男\n            ")]),t._v(" "),r("el-radio",{attrs:{label:2}},[t._v("\n              女\n            ")]),t._v(" "),r("el-radio",{attrs:{label:3}},[t._v("\n              伪娘\n            ")]),t._v(" "),r("el-radio",{attrs:{label:4}},[t._v("\n              药娘\n            ")]),t._v(" "),r("el-radio",{attrs:{label:5}},[t._v("\n              扶她\n            ")])],1),t._v(" "),r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"设置为私密后将不对外公开",placement:"top"}},[r("i",{staticClass:"el-icon-question"})]),t._v(" "),r("el-switch",{attrs:{"active-text":"私密","inactive-text":"公开"},model:{value:t.sexSecret,callback:function(e){t.sexSecret=e},expression:"sexSecret"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"签名",prop:"signature"}},[r("el-input",{attrs:{rows:5,type:"textarea",placeholder:"用简单的言语，表达深刻的心"},model:{value:t.signature,callback:function(e){t.signature=e},expression:"signature"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"绑定"}},[r("ul",{staticClass:"providers"},[r("li",{on:{click:t.bindUserQQ}},[r("i",{staticClass:"iconfont icon-qq",class:{"is-bind":t.user.providers.bind_qq}})]),t._v(" "),r("li",{on:{click:t.bindUserWechat}},[r("i",{staticClass:"iconfont icon-v-chat",class:{"is-bind":t.user.providers.bind_wechat}})]),t._v(" "),r("li",{on:{click:t.bindUserPhone}},[r("i",{staticClass:"iconfont icon-phone",class:{"is-bind":t.user.providers.bind_phone}})])])]),t._v(" "),r("el-form-item",[r("el-button",{attrs:{loading:t.submitting,type:"primary"},on:{click:t.submit}},[t._v("\n            提交\n          ")])],1)],1):t._e()],1)],1),t._v(" "),r("v-dialog",{attrs:{width:"400px",title:"填写信息"},on:{submit:t.submitBindPhone},model:{value:t.showInfoForm,callback:function(e){t.showInfoForm=e},expression:"showInfoForm"}},[r("el-input",{attrs:{type:"number",placeholder:"短信验证码","auto-complete":"off"},model:{value:t.authCode,callback:function(e){t.authCode="string"==typeof e?e.trim():e},expression:"authCode"}}),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("el-input",{attrs:{type:"text",placeholder:"密码（6-16个字符组成，区分大小写）","auto-complete":"off"},model:{value:t.password,callback:function(e){t.password="string"==typeof e?e.trim():e},expression:"password"}})],1)],1)},[],!1,null,null,null);e.default=component.exports}}]);