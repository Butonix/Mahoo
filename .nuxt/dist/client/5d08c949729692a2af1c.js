(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{312:function(t,e,o){"use strict";var n=o(15),l=o(32),r=o(189),d=o(5),c=o(41),h=o(124),m=o(190),f=o(23);n({target:"Promise",proto:!0,real:!0,forced:!!r&&d((function(){r.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(t){var e=h(this,c("Promise")),o="function"==typeof t;return this.then(o?function(o){return m(e,t()).then((function(){return o}))}:t,o?function(o){return m(e,t()).then((function(){throw o}))}:t)}}),l||"function"!=typeof r||r.prototype.finally||f(r.prototype,"finally",c("Promise").prototype.finally)},314:function(t,e,o){"use strict";e.a={beforeMount(){this.$channel.$when("user-not-sign",()=>{this.$toast.error("继续操作前请先登录").then(()=>{window.location.href=this.$alias.sign()})})}}},316:function(t,e,o){"use strict";o(31),o(51),o(55),o(52),o(54);var n=o(2),l=o(317);e.a={data:()=>({uploadHeaders:{key:"",token:""},uploadConfig:{max:5},uploadImageLimit:20,imageUploadAccept:["image/jpeg","image/png","image/jpg"].join(", "),imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv/",getUpTokenTimer:0,uploadPending:0,uploadImageTotal:0,uploadImageList:[]}),computed:{currentUser(){return this.$store.state.user},isAuth(){return this.$store.state.isAuth}},mounted(){this.isAuth?this.initUpToken():this.$channel.$when("user-signed",()=>{this.initUpToken()})},beforeDestroy(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{initUpToken(){this.getUpToken(),this.getUpTokenTimer=setInterval(()=>{this.getUpToken()},18e5)},getUpToken(){var t=this;return Object(n.a)((function*(){var e=t.$cookie.get("UPLOAD-TOKEN");e?t.uploadHeaders.token=t.$cookie.get("UPLOAD-TOKEN"):(e=yield Object(l.a)(t),t.uploadHeaders.token=e,t.$cookie.set("UPLOAD-TOKEN",e,{expires:new Date((new Date).getTime()+3e6)}))}))()},handleImageUploadError(t,e){this.uploadImageList.forEach((o,n)=>{o.uid===e.uid&&(this.uploadPending--,this.uploadImageList.splice(n,1),console.log(t))}),this.$toast.error("图片：".concat(e.name," 上传失败"))},handleImageUploadRemove(t){this.uploadImageList.forEach((e,o)=>{e.uid===t.uid&&(this.uploadImageList.splice(o,1),this.uploadImageTotal--)})},handleImageUploadSuccess(t,e){this.uploadImageList.forEach((o,n)=>{o.uid===e.uid&&(this.uploadImageList[n]=Object.assign(o,{data:t.data,status:"success",url:this.$resize("".concat(this.imagePrefix).concat(t.data.url),{width:100})}))}),this.uploadImageTotal++,this.uploadPending--},handleImageUploadExceed(){this.$toast.info("最多还能上传".concat(this.uploadImageLimit-this.uploadImageTotal,"张图片"))},handleImageUploadBefore(t){if(!this.isAuth)return this.$channel.$emit("sign-in"),!1;if(!this.imageUploadAccept.split(", ").includes(t.type))return this.$toast.error("仅支持上传".concat(this.imageUploadAccept.replace(/image\//g,"").replace(/, /g,"、"),"格式的图片")),!1;if(this.uploadConfig.max&&this.uploadConfig.max<t.size/1024/1024)return this.$toast.error("图片大小不能超过 ".concat(this.uploadConfig.max,"MB!")),!1;return this.uploadHeaders.key=(t=>{var{slug:e,file:o}=t;return"".concat(e,"/").concat((new Date).getTime(),"-").concat(Math.random().toString(36).substring(3,6),".").concat(o.type.split("/").pop())})({slug:this.currentUser.slug,file:t}),this.uploadImageList.push({name:t.name,percentage:0,raw:t,size:t.size,status:"uploading",errMsg:"",uid:t.uid}),this.uploadPending++,!0},resetUploaderStatus(){this.uploadImageList=[],this.uploadImageTotal=0,this.uploadPending=0}}}},317:function(t,e,o){"use strict";o.d(e,"a",(function(){return n})),o.d(e,"b",(function(){return l}));o(51);var n=t=>t.$axios.$get("v1/image/uptoken"),l=(t,e)=>t.$axios.$post("https://up.qbox.me",e,{"Content-Type":"multipart/form-data"})},409:function(t,e,o){},542:function(t,e,o){"use strict";var n=o(409);o.n(n).a},659:function(t,e,o){"use strict";o.r(e);o(9),o(312);var n=o(324),l=o.n(n),r=o(327),d=o.n(r),c=o(314),h=o(316),m={name:"EditBangumi",layout:"app",components:{ElUpload:d.a,ElSelect:l.a},mixins:[c.a,h.a],asyncData(t){var{app:e,error:o,query:n}=t,l=n.slug;if(l)return e.$axios.$get("v1/idol/show",{params:{slug:l}}).then(t=>({idol:t})).catch(o)},data:()=>({idol:null,loading:!1}),methods:{avatarUploadSuccess(t,e){this.handleImageUploadSuccess(t,e),this.idol.avatar=t.data.url},handleSubmit(){this.loading||(this.loading=!0,this.$axios.$post("v1/idol/update",this.idol).then(()=>{this.$toast.success("修改成功")}).catch(t=>{this.$toast.error(t.message)}).finally(()=>{this.loading=!1}))}},head:{title:"编辑偶像"}},f=(o(542),o(11)),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.idol?o("div",{attrs:{id:"edit-idol"}},[o("el-form",{ref:"form",attrs:{"label-position":"top","label-width":"80px"}},[o("ElFormItem",{attrs:{label:"名称"}},[o("ElInput",{attrs:{disabled:""},model:{value:t.idol.name,callback:function(e){t.$set(t.idol,"name",e)},expression:"idol.name"}})],1),t._v(" "),o("ElFormItem",{attrs:{label:"头像"}},[o("div",{staticClass:"avatar-field"},[o("img",{staticClass:"avatar",attrs:{src:t.$resize(t.idol.avatar,{width:100})}}),t._v(" "),o("ElUpload",{attrs:{"show-file-list":!1,action:t.imageUploadAction,limit:t.uploadImageLimit,data:t.uploadHeaders,accept:t.imageUploadAccept,"before-upload":t.handleImageUploadBefore,"on-success":t.avatarUploadSuccess,"on-error":t.handleImageUploadError}},[o("ElButton",{attrs:{loading:!!t.uploadPending,type:"success",plain:"",round:"",size:"mini"}},[t._v("\n            "+t._s(t.uploadPending?"图片上传中...":"点击上传头像")+"\n          ")])],1)],1)]),t._v(" "),o("ElFormItem",{attrs:{label:"别名"}},[o("ElSelect",{staticClass:"hidden-select-input",attrs:{multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:"请输入番剧别名","popper-class":"hidden-select-options"},model:{value:t.idol.alias,callback:function(e){t.$set(t.idol,"alias",e)},expression:"idol.alias"}})],1),t._v(" "),o("ElFormItem",{attrs:{label:"简介"}},[o("ElInput",{attrs:{type:"textarea",rows:"4",resize:"vertical"},model:{value:t.idol.intro,callback:function(e){t.$set(t.idol,"intro",e)},expression:"idol.intro"}})],1),t._v(" "),o("ElFormItem",[o("ElButton",{on:{click:t.handleSubmit}},[t._v("提交")])],1)],1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);