(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{320:function(t,e,n){"use strict";e.a={beforeMount:function(){var t=this;this.$channel.$when("user-not-sign",(function(){t.$toast.error("继续操作前请先登录").then((function(){window.location.href=t.$alias.sign()}))}))}}},323:function(t,e,n){"use strict";n(63),n(64),n(5),n(65),n(67),n(48),n(68),n(20),n(19);var o,r=n(2),l=n(324);e.a={data:function(){return{uploadHeaders:{key:"",token:""},uploadConfig:{max:5},uploadImageLimit:20,imageUploadAccept:["image/jpeg","image/png","image/jpg"].join(", "),imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv/",getUpTokenTimer:0,uploadPending:0,uploadImageTotal:0,uploadImageList:[]}},computed:{currentUser:function(){return this.$store.state.user},isAuth:function(){return this.$store.state.isAuth}},mounted:function(){var t=this;this.isAuth?this.initUpToken():this.$channel.$when("user-signed",(function(){t.initUpToken()}))},beforeDestroy:function(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{initUpToken:function(){var t=this;this.getUpToken(),this.getUpTokenTimer=setInterval((function(){t.getUpToken()}),18e5)},getUpToken:(o=Object(r.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=this.$cookie.get("UPLOAD-TOKEN"))){t.next=4;break}return this.uploadHeaders.token=this.$cookie.get("UPLOAD-TOKEN"),t.abrupt("return");case 4:return t.next=6,Object(l.a)(this);case 6:e=t.sent,this.uploadHeaders.token=e,this.$cookie.set("UPLOAD-TOKEN",e,{expires:new Date((new Date).getTime()+3e6)});case 9:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)}),handleImageUploadError:function(t,e){var n=this;this.uploadImageList.forEach((function(o,r){o.uid===e.uid&&(n.uploadPending--,n.uploadImageList.splice(r,1),console.log(t))})),this.$toast.error("图片：".concat(e.name," 上传失败"))},handleImageUploadRemove:function(t){var e=this;this.uploadImageList.forEach((function(n,o){n.uid===t.uid&&(e.uploadImageList.splice(o,1),e.uploadImageTotal--)}))},handleImageUploadSuccess:function(t,e){var n=this;this.uploadImageList.forEach((function(o,r){o.uid===e.uid&&(n.uploadImageList[r]=Object.assign(o,{data:t.data,status:"success",url:n.$resize("".concat(n.imagePrefix).concat(t.data.url),{width:100})}))})),this.uploadImageTotal++,this.uploadPending--},handleImageUploadExceed:function(){this.$toast.info("最多还能上传".concat(this.uploadImageLimit-this.uploadImageTotal,"张图片"))},handleImageUploadBefore:function(t){if(!this.isAuth)return this.$channel.$emit("sign-in"),!1;if(!this.imageUploadAccept.split(", ").includes(t.type))return this.$toast.error("仅支持上传".concat(this.imageUploadAccept.replace(/image\//g,"").replace(/, /g,"、"),"格式的图片")),!1;if(this.uploadConfig.max&&this.uploadConfig.max<t.size/1024/1024)return this.$toast.error("图片大小不能超过 ".concat(this.uploadConfig.max,"MB!")),!1;return this.uploadHeaders.key=function(t){var e=t.slug,n=t.file;return"".concat(e,"/").concat((new Date).getTime(),"-").concat(Math.random().toString(36).substring(3,6),".").concat(n.type.split("/").pop())}({slug:this.currentUser.slug,file:t}),this.uploadImageList.push({name:t.name,percentage:0,raw:t,size:t.size,status:"uploading",errMsg:"",uid:t.uid}),this.uploadPending++,!0},resetUploaderStatus:function(){this.uploadImageList=[],this.uploadImageTotal=0,this.uploadPending=0}}}},324:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));n(63),n(64),n(5);var o=function(t){return t.$axios.$get("v1/image/uptoken")},r=function(t,e){return t.$axios.$post("https://up.qbox.me",e,{"Content-Type":"multipart/form-data"})}},361:function(t,e,n){"use strict";n(19);var o,r=n(2),l=n(72);e.a={beforeMount:(o=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,o=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.$store.state.logging){t.next=4;break}e=this.$watch("$store.state.logging",(function(){o.$store.state.isAuth?(o.$channel.$fire("user-signed"),e()):(o.$cookie.remove("JWT-TOKEN"),o.$channel.$fire("user-not-sign"))})),t.next=10;break;case 4:return n=Object(l.a)(),this.$store.commit("SET_USER_TOKEN",n),t.next=8,this.$store.dispatch("initAuth");case 8:t.sent?(this.$channel.$fire("user-signed"),this.$store.dispatch("getUserRoles")):(this.$cookie.remove("JWT-TOKEN"),this.$channel.$fire("user-not-sign"));case 10:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)})}},412:function(t,e,n){},545:function(t,e,n){"use strict";var o=n(412);n.n(o).a},643:function(t,e,n){"use strict";n.r(e);n(5);var o=n(330),r=n.n(o),l=n(362),c=n.n(l),d=n(361),h=n(320),m=n(323),f={name:"EditBangumi",components:{ElUpload:c.a,ElSelect:r.a},mixins:[d.a,h.a,m.a],props:{},asyncData:function(t){var e=t.app,n=t.error,o=t.query.slug;if(o)return e.$axios.$get("v1/idol/show",{params:{slug:o}}).then((function(t){return{idol:t}})).catch(n)},data:function(){return{idol:null,loading:!1}},methods:{avatarUploadSuccess:function(t,e){this.handleImageUploadSuccess(t,e),this.idol.avatar=t.data.url},handleSubmit:function(){var t=this;this.loading||(this.loading=!0,this.$axios.$post("v1/idol/update",this.idol).then((function(){t.$toast.success("修改成功")})).catch((function(e){t.$toast.error(e.message)})).finally((function(){t.loading=!1})))}}},$=(n(545),n(16)),component=Object($.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.idol?n("div",{attrs:{id:"edit-idol"}},[n("el-form",{ref:"form",attrs:{"label-position":"top","label-width":"80px"}},[n("ElFormItem",{attrs:{label:"名称"}},[n("ElInput",{model:{value:t.idol.name,callback:function(e){t.$set(t.idol,"name",e)},expression:"idol.name"}})],1),t._v(" "),n("ElFormItem",{attrs:{label:"头像"}},[n("div",{staticClass:"avatar-field"},[n("img",{staticClass:"avatar",attrs:{src:t.$resize(t.idol.avatar,{width:100})}}),t._v(" "),n("ElUpload",{attrs:{"show-file-list":!1,action:t.imageUploadAction,limit:t.uploadImageLimit,data:t.uploadHeaders,accept:t.imageUploadAccept,"before-upload":t.handleImageUploadBefore,"on-success":t.avatarUploadSuccess,"on-error":t.handleImageUploadError}},[n("ElButton",{attrs:{loading:!!t.uploadPending,type:"success",plain:"",round:"",size:"mini"}},[t._v("\n            "+t._s(t.uploadPending?"图片上传中...":"点击上传头像")+"\n          ")])],1)],1)]),t._v(" "),n("ElFormItem",{attrs:{label:"别名"}},[n("ElSelect",{staticClass:"hidden-select-input",attrs:{multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:"请输入番剧别名","popper-class":"hidden-select-options"},model:{value:t.idol.alias,callback:function(e){t.$set(t.idol,"alias",e)},expression:"idol.alias"}})],1),t._v(" "),n("ElFormItem",{attrs:{label:"简介"}},[n("ElInput",{attrs:{type:"textarea",rows:"4",resize:"vertical"},model:{value:t.idol.intro,callback:function(e){t.$set(t.idol,"intro",e)},expression:"idol.intro"}})],1),t._v(" "),n("ElFormItem",[n("ElButton",{on:{click:t.handleSubmit}},[t._v("提交")])],1)],1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);