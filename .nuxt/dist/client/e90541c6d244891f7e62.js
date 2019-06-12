(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{256:function(t,e,o){"use strict";o(63),o(61),o(36);var n=o(2),r=o(106);e.a={data:()=>({uploadHeaders:{key:"",token:""},uploadConfig:{max:5},uploadImageLimit:20,imageUploadAccept:["image/jpeg","image/png","image/jpg"].join(", "),imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv/",getUpTokenTimer:0,uploadPending:0,uploadImageTotal:0,uploadImageList:[]}),computed:{currentUser(){return this.$store.state.user},isAuth(){return this.$store.state.isAuth}},watch:{isAuth(t){t&&this.initUpToken()}},mounted(){this.isAuth&&this.initUpToken()},beforeDestroy(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{initUpToken(){this.getUpToken(),this.getUpTokenTimer=setInterval(()=>{this.getUpToken()},18e5)},getUpToken(){var t=this;return Object(n.a)(function*(){let e=t.$cookie.get("UPLOAD-TOKEN");e?t.uploadHeaders.token=t.$cookie.get("UPLOAD-TOKEN"):(e=yield Object(r.b)(t),t.uploadHeaders.token=e,t.$cookie.set("UPLOAD-TOKEN",e,{expires:new Date((new Date).getTime()+3e6)}))})()},handleImageUploadError(t,e){this.uploadImageList.forEach((o,n)=>{o.uid===e.uid&&(this.uploadPending--,this.uploadImageList.splice(n,1),console.log(t))}),this.$toast.error("图片：".concat(e.name," 上传失败"))},handleImageUploadRemove(t){this.uploadImageList.forEach((e,o)=>{e.uid===t.uid&&(this.uploadImageList.splice(o,1),this.uploadImageTotal--)})},handleImageUploadSuccess(t,e){this.uploadImageList.forEach((o,n)=>{o.uid===e.uid&&(this.uploadImageList[n]=Object.assign(o,{data:t.data,status:"success",url:this.$resize("".concat(this.imagePrefix).concat(t.data.url),{width:100})}))}),this.uploadImageTotal++,this.uploadPending--},handleImageUploadExceed(){this.$toast.info("最多还能上传".concat(this.uploadImageLimit-this.uploadImageTotal,"张图片"))},handleImageUploadBefore(t){if(!this.isAuth)return this.$channel.$emit("sign-in"),!1;if(-1===this.imageUploadAccept.split(", ").indexOf(t.type))return this.$toast.error("仅支持上传".concat(this.imageUploadAccept.replace(/image\//g,"").replace(/, /g,"、"),"格式的图片")),!1;if(this.uploadConfig.max&&this.uploadConfig.max<t.size/1024/1024)return this.$toast.error("图片大小不能超过 ".concat(this.uploadConfig.max,"MB!")),!1;return this.uploadHeaders.key=(t=>{let{slug:e,file:o}=t;return"".concat(e,"/").concat((new Date).getTime(),"-").concat(Math.random().toString(36).substring(3,6),".").concat(o.type.split("/").pop())})({slug:this.currentUser.slug,file:t}),this.uploadImageList.push({name:t.name,percentage:0,raw:t,size:t.size,status:"uploading",errMsg:"",uid:t.uid}),this.uploadPending++,!0}}}},257:function(t,e,o){"use strict";o.d(e,"d",function(){return n}),o.d(e,"a",function(){return r}),o.d(e,"e",function(){return l}),o.d(e,"c",function(){return c}),o.d(e,"b",function(){return d});const n=(t,e)=>{let{slug:o}=e;return t.$axios.$get("v1/tag/show",{params:{slug:o}})},r=(t,e)=>{let{name:o,parent_slug:n}=e;return t.$axios.$post("v1/tag/create",{name:o,parent_slug:n})},l=(t,e)=>{let{name:o,slug:n,avatar:r,alias:l,intro:c}=e;return t.$axios.$post("v1/tag/update",{name:o,slug:n,avatar:r,alias:l,intro:c})},c=(t,e)=>{let{slug:o,target_slug:n}=e;return t.$axios.$post("v1/tag/relink",{slug:o,target_slug:n})},d=(t,e)=>{let{slug:o}=e;return t.$axios.$post("v1/tag/delete",{slug:o})}},258:function(t,e,o){"use strict";var n=o(2),r=o(37);e.a={beforeMount(){var t=this;return Object(n.a)(function*(){if(t.$store.state.logging){const e=t.$watch("$store.state.logging",()=>{t.$store.state.isAuth?e():t.$toast.error("继续操作前请先登录").then(()=>{window.location.href="/"})})}else{const e=Object(r.a)();t.$store.commit("SET_USER_TOKEN",e),(yield t.$store.dispatch("initAuth"))||t.$toast.error("继续操作前请先登录").then(()=>{window.location.href="/"})}})()}}},295:function(t,e,o){},353:function(t,e,o){"use strict";var n=o(295);o.n(n).a},390:function(t,e,o){"use strict";o.r(e);o(36);var n=o(303),r=o.n(n),l=o(267),c=o.n(l),d=o(257),m=o(256),h=o(258),f={name:"TagEdit",layout:"web",components:{"el-upload":c.a,"el-select":r.a},mixins:[m.a,h.a],props:{slug:{type:String,required:!0}},data(){return{tag:null,rules:{alias:[{validator:(t,e,o)=>{e&&e.length||o(new Error("别名不能为空")),~e.indexOf(this.tag.name)||o(new Error("别名中必须包含名称")),e.some(t=>/,/.test(t))&&o(new Error("别名不能包含英文逗号")),e.join("").length>100&&o(new Error("别名最多100个字符")),o()},trigger:"submit"}]},submitting:!1}},asyncData(t){let{app:e,error:o,params:n}=t;return Object(d.d)(e,{slug:n.slug}).then(data=>{const{tag:t}=data;return t.alias=t.alias.split(","),{tag:t}}).catch(o)},methods:{avatarUploadSuccess(t,e){this.handleImageUploadSuccess(t,e),this.tag.avatar=t.data.url},submit(){this.$refs.form.validate(t=>{t&&(this.submitting=!0,Object(d.e)(this,{slug:this.tag.slug,name:this.tag.name,avatar:this.tag.avatar,alias:this.tag.alias.join(","),intro:this.tag.intro}).then(()=>{this.$toast.success("修改成功").then(()=>{window.location.reload()})}).catch(t=>{this.$toast.error(t.message),this.submitting=!1}))})}}},v=(o(353),o(18)),component=Object(v.a)(f,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"tag-edit"}},[o("el-row",[o("el-col",{attrs:{span:12,offset:6}},[o("el-form",{ref:"form",attrs:{model:t.tag,rules:t.rules,disabled:t.submitting,"label-position":"top"}},[o("el-form-item",{attrs:{label:"头像"}},[o("div",{staticClass:"avatar-field"},[o("img",{staticClass:"avatar",attrs:{src:t.$resize(t.tag.avatar,{width:100})}}),t._v(" "),o("el-upload",{attrs:{"show-file-list":!1,action:t.imageUploadAction,limit:t.uploadImageLimit,data:t.uploadHeaders,accept:t.imageUploadAccept,"before-upload":t.handleImageUploadBefore,"on-success":t.avatarUploadSuccess,"on-error":t.handleImageUploadError}},[o("el-button",{attrs:{loading:!!t.uploadPending,type:"success",plain:"",round:"",size:"mini"}},[t._v("\n                "+t._s(t.uploadPending?"图片上传中...":"上传标签封面")+"\n              ")])],1)],1)]),t._v(" "),o("el-form-item",{attrs:{label:"名称"}},[o("el-input",{model:{value:t.tag.name,callback:function(e){t.$set(t.tag,"name",e)},expression:"tag.name"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"别名",prop:"alias"}},[o("p",{staticClass:"form-tip"},[t._v("\n            提示：按回车键生效\n          ")]),t._v(" "),o("el-select",{staticClass:"hidden-select-input",attrs:{multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:"请输入标签别名","popper-class":"hidden-select-options"},model:{value:t.tag.alias,callback:function(e){t.$set(t.tag,"alias",e)},expression:"tag.alias"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"简介"}},[o("el-input",{attrs:{type:"textarea","show-word-limit":!0,rows:8,maxlength:"233",resize:"none",placeholder:"请输入板块介绍"},model:{value:t.tag.intro,callback:function(e){t.$set(t.tag,"intro",e)},expression:"tag.intro"}})],1),t._v(" "),o("el-form-item",[o("el-button",{attrs:{loading:t.submitting,type:"success",round:""},on:{click:t.submit}},[t._v("\n            保存更改\n          ")])],1)],1)],1)],1)],1)},[],!1,null,null,null);e.default=component.exports}}]);