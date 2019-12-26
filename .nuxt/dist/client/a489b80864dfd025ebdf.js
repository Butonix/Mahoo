(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{283:function(t,e,o){"use strict";o(42),o(43),o(45);var r=o(2),n=o(284);e.a={data:()=>({uploadHeaders:{key:"",token:""},uploadConfig:{max:5},uploadImageLimit:20,imageUploadAccept:["image/jpeg","image/png","image/jpg"].join(", "),imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv/",getUpTokenTimer:0,uploadPending:0,uploadImageTotal:0,uploadImageList:[]}),computed:{currentUser(){return this.$store.state.user},isAuth(){return this.$store.state.isAuth}},mounted(){this.isAuth?this.initUpToken():this.$channel.$when("user-signed",()=>{this.initUpToken()})},beforeDestroy(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{initUpToken(){this.getUpToken(),this.getUpTokenTimer=setInterval(()=>{this.getUpToken()},18e5)},getUpToken(){var t=this;return Object(r.a)((function*(){var e=t.$cookie.get("UPLOAD-TOKEN");e?t.uploadHeaders.token=t.$cookie.get("UPLOAD-TOKEN"):(e=yield Object(n.a)(t),t.uploadHeaders.token=e,t.$cookie.set("UPLOAD-TOKEN",e,{expires:new Date((new Date).getTime()+3e6)}))}))()},handleImageUploadError(t,e){this.uploadImageList.forEach((o,r)=>{o.uid===e.uid&&(this.uploadPending--,this.uploadImageList.splice(r,1),console.log(t))}),this.$toast.error("图片：".concat(e.name," 上传失败"))},handleImageUploadRemove(t){this.uploadImageList.forEach((e,o)=>{e.uid===t.uid&&(this.uploadImageList.splice(o,1),this.uploadImageTotal--)})},handleImageUploadSuccess(t,e){this.uploadImageList.forEach((o,r)=>{o.uid===e.uid&&(this.uploadImageList[r]=Object.assign(o,{data:t.data,status:"success",url:this.$resize("".concat(this.imagePrefix).concat(t.data.url),{width:100})}))}),this.uploadImageTotal++,this.uploadPending--},handleImageUploadExceed(){this.$toast.info("最多还能上传".concat(this.uploadImageLimit-this.uploadImageTotal,"张图片"))},handleImageUploadBefore(t){if(!this.isAuth)return this.$channel.$emit("sign-in"),!1;if(!this.imageUploadAccept.split(", ").includes(t.type))return this.$toast.error("仅支持上传".concat(this.imageUploadAccept.replace(/image\//g,"").replace(/, /g,"、"),"格式的图片")),!1;if(this.uploadConfig.max&&this.uploadConfig.max<t.size/1024/1024)return this.$toast.error("图片大小不能超过 ".concat(this.uploadConfig.max,"MB!")),!1;return this.uploadHeaders.key=(t=>{var{slug:e,file:o}=t;return"".concat(e,"/").concat((new Date).getTime(),"-").concat(Math.random().toString(36).substring(3,6),".").concat(o.type.split("/").pop())})({slug:this.currentUser.slug,file:t}),this.uploadImageList.push({name:t.name,percentage:0,raw:t,size:t.size,status:"uploading",errMsg:"",uid:t.uid}),this.uploadPending++,!0},resetUploaderStatus(){this.uploadImageList=[],this.uploadImageTotal=0,this.uploadPending=0}}}},284:function(t,e,o){"use strict";o.d(e,"a",(function(){return r})),o.d(e,"b",(function(){return n}));o(42);var r=t=>t.$axios.$get("v1/image/uptoken"),n=(t,e)=>t.$axios.$post("https://up.qbox.me",e,{"Content-Type":"multipart/form-data"})},373:function(t,e,o){},514:function(t,e,o){"use strict";var r=o(373);o.n(r).a},624:function(t,e,o){"use strict";o.r(e);o(116),o(14);var r=o(48),n=o(292),l=o.n(n),c=o(296),d=o.n(c),m=o(283);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={name:"CreateIdol",components:{ElUpload:d.a,ElSelect:l.a},mixins:[m.a],data(){return{tag:{id:"",avatar:"",name:"",alias:[],intro:""},rules:{alias:[{validator:(t,e,o)=>{e&&e.length||o(new Error("别名不能为空")),~e.indexOf(this.tag.name)||o(new Error("别名中必须包含名称")),e.some(t=>/,/.test(t))&&o(new Error("别名不能包含英文逗号")),e.join("").length>100&&o(new Error("别名最多100个字符")),o()},trigger:"submit"}]},submitting:!1}},methods:{avatarUploadSuccess(t,e){this.handleImageUploadSuccess(t,e),this.tag.avatar=t.data.url},fetch(){this.tag.id&&this.$axios.$get("v1/bangumi/fetch",{params:{source_id:this.tag.id}}).then(t=>{t&&t.name&&(this.tag=f({},this.tag,{},t))}).catch(t=>{if(400!==t.statusCode)return this.$toast.error(t.message)})},submit(){this.$refs.form.validate(t=>{t&&(this.submitting=!0,this.$axios.$post("v1/idol/create",f({},this.tag,{alias:[this.tag.name,...this.tag.alias],bangumi_slug:this.$route.query.slug})).then(t=>{console.log(t)}).catch(t=>{this.$toast.error(t.message),this.submitting=!1}))})}}},I=(o(514),o(9)),component=Object(I.a)(v,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"create-idol"}},[o("ElForm",{ref:"form",staticClass:"edit-tag-info-form",attrs:{model:t.tag,rules:t.rules,disabled:t.submitting,"label-position":"top"}},[o("ElFormItem",{attrs:{label:"来源",required:""}},[o("ElInput",{attrs:{placeholder:"去 bgm.tv 寻找那个偶像吧！"},model:{value:t.tag.id,callback:function(e){t.$set(t.tag,"id",e)},expression:"tag.id"}})],1),t._v(" "),o("ElFormItem",[o("ElButton",{attrs:{loading:t.submitting,type:"success",round:""},on:{click:t.fetch}},[t._v("\n        抓取资源\n      ")])],1),t._v(" "),o("ElFormItem",{attrs:{label:"头像",required:""}},[o("div",{staticClass:"avatar-field"},[t.tag.avatar?o("img",{staticClass:"avatar",attrs:{src:t.$resize(t.tag.avatar,{width:100})}}):t._e(),t._v(" "),o("ElUpload",{attrs:{"show-file-list":!1,action:t.imageUploadAction,limit:t.uploadImageLimit,data:t.uploadHeaders,accept:t.imageUploadAccept,"before-upload":t.handleImageUploadBefore,"on-success":t.avatarUploadSuccess,"on-error":t.handleImageUploadError}},[o("ElButton",{attrs:{loading:!!t.uploadPending,type:"success",plain:"",round:"",size:"mini"}},[t._v("\n            "+t._s(t.uploadPending?"图片上传中...":"点击上传封面")+"\n          ")])],1)],1)]),t._v(" "),o("ElFormItem",{attrs:{label:"名称",required:""}},[o("ElInput",{model:{value:t.tag.name,callback:function(e){t.$set(t.tag,"name",e)},expression:"tag.name"}})],1),t._v(" "),o("ElFormItem",{attrs:{label:"别名",prop:"alias",required:""}},[o("p",{staticClass:"form-tip"},[t._v("\n        提示：按回车键生效\n      ")]),t._v(" "),o("ElSelect",{staticClass:"hidden-select-input",attrs:{multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:"请输入标签别名","popper-class":"hidden-select-options"},model:{value:t.tag.alias,callback:function(e){t.$set(t.tag,"alias",e)},expression:"tag.alias"}})],1),t._v(" "),o("ElFormItem",{attrs:{label:"简介",required:""}},[o("ElInput",{attrs:{type:"textarea","show-word-limit":!0,rows:8,maxlength:"233",resize:"none",placeholder:"请输入板块介绍"},model:{value:t.tag.intro,callback:function(e){t.$set(t.tag,"intro",e)},expression:"tag.intro"}})],1),t._v(" "),o("ElFormItem",[o("ElButton",{attrs:{loading:t.submitting,type:"success",round:""},on:{click:t.submit}},[t._v("\n        保存更改\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);