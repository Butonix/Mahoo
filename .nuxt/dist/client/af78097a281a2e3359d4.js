(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{322:function(t,e,n){"use strict";n(64),n(65),n(5),n(66),n(68),n(48),n(69),n(21),n(20);var r,o=n(2),l=n(323);e.a={data:function(){return{uploadHeaders:{key:"",token:""},uploadConfig:{max:5},uploadImageLimit:20,imageUploadAccept:["image/jpeg","image/png","image/jpg"].join(", "),imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv/",getUpTokenTimer:0,uploadPending:0,uploadImageTotal:0,uploadImageList:[]}},computed:{currentUser:function(){return this.$store.state.user},isAuth:function(){return this.$store.state.isAuth}},mounted:function(){var t=this;this.isAuth?this.initUpToken():this.$channel.$when("user-signed",(function(){t.initUpToken()}))},beforeDestroy:function(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{initUpToken:function(){var t=this;this.getUpToken(),this.getUpTokenTimer=setInterval((function(){t.getUpToken()}),18e5)},getUpToken:(r=Object(o.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=this.$cookie.get("UPLOAD-TOKEN"))){t.next=4;break}return this.uploadHeaders.token=this.$cookie.get("UPLOAD-TOKEN"),t.abrupt("return");case 4:return t.next=6,Object(l.a)(this);case 6:e=t.sent,this.uploadHeaders.token=e,this.$cookie.set("UPLOAD-TOKEN",e,{expires:new Date((new Date).getTime()+3e6)});case 9:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)}),handleImageUploadError:function(t,e){var n=this;this.uploadImageList.forEach((function(r,o){r.uid===e.uid&&(n.uploadPending--,n.uploadImageList.splice(o,1),console.log(t))})),this.$toast.error("图片：".concat(e.name," 上传失败"))},handleImageUploadRemove:function(t){var e=this;this.uploadImageList.forEach((function(n,r){n.uid===t.uid&&(e.uploadImageList.splice(r,1),e.uploadImageTotal--)}))},handleImageUploadSuccess:function(t,e){var n=this;this.uploadImageList.forEach((function(r,o){r.uid===e.uid&&(n.uploadImageList[o]=Object.assign(r,{data:t.data,status:"success",url:n.$resize("".concat(n.imagePrefix).concat(t.data.url),{width:100})}))})),this.uploadImageTotal++,this.uploadPending--},handleImageUploadExceed:function(){this.$toast.info("最多还能上传".concat(this.uploadImageLimit-this.uploadImageTotal,"张图片"))},handleImageUploadBefore:function(t){if(!this.isAuth)return this.$channel.$emit("sign-in"),!1;if(!this.imageUploadAccept.split(", ").includes(t.type))return this.$toast.error("仅支持上传".concat(this.imageUploadAccept.replace(/image\//g,"").replace(/, /g,"、"),"格式的图片")),!1;if(this.uploadConfig.max&&this.uploadConfig.max<t.size/1024/1024)return this.$toast.error("图片大小不能超过 ".concat(this.uploadConfig.max,"MB!")),!1;return this.uploadHeaders.key=function(t){var e=t.slug,n=t.file;return"".concat(e,"/").concat((new Date).getTime(),"-").concat(Math.random().toString(36).substring(3,6),".").concat(n.type.split("/").pop())}({slug:this.currentUser.slug,file:t}),this.uploadImageList.push({name:t.name,percentage:0,raw:t,size:t.size,status:"uploading",errMsg:"",uid:t.uid}),this.uploadPending++,!0},resetUploaderStatus:function(){this.uploadImageList=[],this.uploadImageTotal=0,this.uploadPending=0}}}},323:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));n(64),n(65),n(5);var r=function(t){return t.$axios.$get("v1/image/uptoken")},o=function(t,e){return t.$axios.$post("https://up.qbox.me",e,{"Content-Type":"multipart/form-data"})}},328:function(t,e,n){"use strict";function r(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(e,"a",(function(){return r}))},419:function(t,e,n){},563:function(t,e,n){"use strict";var r=n(419);n.n(r).a},672:function(t,e,n){"use strict";n.r(e);n(141),n(37),n(14),n(5),n(34);var r=n(328),o=n(73),l=(n(21),n(329)),c=n.n(l),d=n(337),m=n.n(d),h=n(322);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var I={name:"CreateIdol",components:{ElUpload:m.a,ElSelect:c.a},mixins:[h.a],data:function(){var t=this;return{tag:{id:"",avatar:"",name:"",alias:[],intro:""},rules:{alias:[{validator:function(e,n,r){n&&n.length||r(new Error("别名不能为空")),~n.indexOf(t.tag.name)||r(new Error("别名中必须包含名称")),n.some((function(t){return/,/.test(t)}))&&r(new Error("别名不能包含英文逗号")),n.join("").length>100&&r(new Error("别名最多100个字符")),r()},trigger:"submit"}]},submitting:!1}},methods:{avatarUploadSuccess:function(t,e){this.handleImageUploadSuccess(t,e),this.tag.avatar=t.data.url},fetch:function(){var t=this;this.tag.id&&this.$axios.$get("v1/bangumi/fetch",{params:{source_id:this.tag.id}}).then((function(e){e&&e.name&&(t.tag=v({},t.tag,{},e))})).catch((function(e){if(400!==e.statusCode)return t.$toast.error(e.message)}))},submit:function(){var t=this;this.$refs.form.validate((function(e){e&&(t.submitting=!0,t.$axios.$post("v1/idol/create",v({},t.tag,{alias:[t.tag.name].concat(Object(r.a)(t.tag.alias)),bangumi_slug:t.$route.query.slug})).then((function(t){console.log(t)})).catch((function(e){t.$toast.error(e.message),t.submitting=!1})))}))}}},E=(n(563),n(16)),component=Object(E.a)(I,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"create-idol"}},[n("ElForm",{ref:"form",staticClass:"edit-tag-info-form",attrs:{model:t.tag,rules:t.rules,disabled:t.submitting,"label-position":"top"}},[n("ElFormItem",{attrs:{label:"来源",required:""}},[n("ElInput",{attrs:{placeholder:"去 bgm.tv 寻找那个偶像吧！"},model:{value:t.tag.id,callback:function(e){t.$set(t.tag,"id",e)},expression:"tag.id"}})],1),t._v(" "),n("ElFormItem",[n("ElButton",{attrs:{loading:t.submitting,type:"success",round:""},on:{click:t.fetch}},[t._v("\n        抓取资源\n      ")])],1),t._v(" "),n("ElFormItem",{attrs:{label:"头像",required:""}},[n("div",{staticClass:"avatar-field"},[t.tag.avatar?n("img",{staticClass:"avatar",attrs:{src:t.$resize(t.tag.avatar,{width:100})}}):t._e(),t._v(" "),n("ElUpload",{attrs:{"show-file-list":!1,action:t.imageUploadAction,limit:t.uploadImageLimit,data:t.uploadHeaders,accept:t.imageUploadAccept,"before-upload":t.handleImageUploadBefore,"on-success":t.avatarUploadSuccess,"on-error":t.handleImageUploadError}},[n("ElButton",{attrs:{loading:!!t.uploadPending,type:"success",plain:"",round:"",size:"mini"}},[t._v("\n            "+t._s(t.uploadPending?"图片上传中...":"点击上传封面")+"\n          ")])],1)],1)]),t._v(" "),n("ElFormItem",{attrs:{label:"名称",required:""}},[n("ElInput",{model:{value:t.tag.name,callback:function(e){t.$set(t.tag,"name",e)},expression:"tag.name"}})],1),t._v(" "),n("ElFormItem",{attrs:{label:"别名",prop:"alias",required:""}},[n("p",{staticClass:"form-tip"},[t._v("\n        提示：按回车键生效\n      ")]),t._v(" "),n("ElSelect",{staticClass:"hidden-select-input",attrs:{multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:"请输入标签别名","popper-class":"hidden-select-options"},model:{value:t.tag.alias,callback:function(e){t.$set(t.tag,"alias",e)},expression:"tag.alias"}})],1),t._v(" "),n("ElFormItem",{attrs:{label:"简介",required:""}},[n("ElInput",{attrs:{type:"textarea","show-word-limit":!0,rows:8,maxlength:"233",resize:"none",placeholder:"请输入板块介绍"},model:{value:t.tag.intro,callback:function(e){t.$set(t.tag,"intro",e)},expression:"tag.intro"}})],1),t._v(" "),n("ElFormItem",[n("ElButton",{attrs:{loading:t.submitting,type:"success",round:""},on:{click:t.submit}},[t._v("\n        保存更改\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);