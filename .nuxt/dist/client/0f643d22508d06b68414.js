(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{320:function(e,t,n){"use strict";n(60),n(61),n(5),n(58),n(62),n(63),n(97),n(35),n(19);var r=n(2),o=n(138);t.a={data:function(){return{uploadHeaders:{key:"",token:""},uploadConfig:{max:5},uploadImageLimit:20,imageUploadAccept:["image/jpeg","image/png","image/jpg"].join(", "),imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv/",getUpTokenTimer:0,uploadPending:0,uploadImageTotal:0,uploadImageList:[]}},computed:{currentUser:function(){return this.$store.state.user},isAuth:function(){return this.$store.state.isAuth}},mounted:function(){var e=this;this.isAuth?this.initUpToken():this.$channel.$when("user-signed",function(){e.initUpToken()})},beforeDestroy:function(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{initUpToken:function(){var e=this;this.getUpToken(),this.getUpTokenTimer=setInterval(function(){e.getUpToken()},18e5)},getUpToken:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=this.$cookie.get("UPLOAD-TOKEN"))){e.next=4;break}return this.uploadHeaders.token=this.$cookie.get("UPLOAD-TOKEN"),e.abrupt("return");case 4:return e.next=6,Object(o.b)(this);case 6:t=e.sent,this.uploadHeaders.token=t,this.$cookie.set("UPLOAD-TOKEN",t,{expires:new Date((new Date).getTime()+3e6)});case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),handleImageUploadError:function(e,t){var n=this;this.uploadImageList.forEach(function(r,o){r.uid===t.uid&&(n.uploadPending--,n.uploadImageList.splice(o,1),console.log(e))}),this.$toast.error("图片：".concat(t.name," 上传失败"))},handleImageUploadRemove:function(e){var t=this;this.uploadImageList.forEach(function(n,r){n.uid===e.uid&&(t.uploadImageList.splice(r,1),t.uploadImageTotal--)})},handleImageUploadSuccess:function(e,t){var n=this;this.uploadImageList.forEach(function(r,o){r.uid===t.uid&&(n.uploadImageList[o]=Object.assign(r,{data:e.data,status:"success",url:n.$resize("".concat(n.imagePrefix).concat(e.data.url),{width:100})}))}),this.uploadImageTotal++,this.uploadPending--},handleImageUploadExceed:function(){this.$toast.info("最多还能上传".concat(this.uploadImageLimit-this.uploadImageTotal,"张图片"))},handleImageUploadBefore:function(e){if(!this.isAuth)return this.$channel.$emit("sign-in"),!1;if(!this.imageUploadAccept.split(", ").includes(e.type))return this.$toast.error("仅支持上传".concat(this.imageUploadAccept.replace(/image\//g,"").replace(/, /g,"、"),"格式的图片")),!1;if(this.uploadConfig.max&&this.uploadConfig.max<e.size/1024/1024)return this.$toast.error("图片大小不能超过 ".concat(this.uploadConfig.max,"MB!")),!1;return this.uploadHeaders.key=function(e){var t=e.slug,n=e.file;return"".concat(t,"/").concat((new Date).getTime(),"-").concat(Math.random().toString(36).substring(3,6),".").concat(n.type.split("/").pop())}({slug:this.currentUser.slug,file:e}),this.uploadImageList.push({name:e.name,percentage:0,raw:e,size:e.size,status:"uploading",errMsg:"",uid:e.uid}),this.uploadPending++,!0},resetUploaderStatus:function(){this.uploadImageList=[],this.uploadImageTotal=0,this.uploadPending=0}}}},429:function(e,t,n){},540:function(e,t,n){"use strict";var r=n(429);n.n(r).a},583:function(e,t,n){"use strict";n.r(t);n(19);var r=n(2),o=(n(58),n(344)),c=n.n(o),l=n(537),d=n.n(l),m=n(346),h=n.n(m),f=n(341),v=n.n(f),E=n(162),U=n.n(E),k=n(29),I=n(320),x={name:"UserBasicSetting",components:{ElSwitch:U.a,ElRadio:v.a,ElRadioGroup:h.a,ElDatePicker:d.a,ElUpload:c.a},mixins:[I.a],data:function(){return{submitting:!1,rule:{nickname:[{validator:function(e,t,n){var r=t.replace(/([\u4E00-\u9FA5])/g,"aa").trim().length;r?r<2?n(new Error("昵称至少为2个字符")):r>14&&n(new Error("昵称不能超过14个字符")):n(new Error("昵称不能为空")),n()},trigger:"submit"}],signature:[{validator:function(e,t,n){t.length>150&&n(new Error("签名最多 150 个字")),n()},trigger:"submit"}],birthday:[{validator:function(e,t,n){if(!t)return n();var r=new Date(t).getTime(),o=Date.now();r>=o?n(new Error("。。。")):o-r<31536e7?n(new Error("你应该大于10岁了吧...?")):o-r>126144e7&&n(new Error("你应该小于40岁的吧...?")),n()},trigger:"submit"}]}}},computed:{isAuth:function(){return this.$store.state.isAuth},user:function(){return this.$store.state.user},nickname:{get:function(){return this.user.nickname},set:function(e){this.$store.commit("UPDATE_USER_INFO",{key:"nickname",value:e})}},birthday:{get:function(){return this.user.birthday},set:function(e){this.$store.commit("UPDATE_USER_INFO",{key:"birthday",value:e})}},birthSecret:{get:function(){return this.user.birth_secret},set:function(e){this.$store.commit("UPDATE_USER_INFO",{key:"birth_secret",value:e})}},sex:{get:function(){return this.user.sex},set:function(e){this.$store.commit("UPDATE_USER_INFO",{key:"sex",value:e})}},sexSecret:{get:function(){return this.user.sex_secret},set:function(e){this.$store.commit("UPDATE_USER_INFO",{key:"sex_secret",value:e})}},signature:{get:function(){return this.user.signature},set:function(e){this.$store.commit("UPDATE_USER_INFO",{key:"signature",value:e.trim()})}}},methods:{avatarUploadSuccess:function(e,t){this.handleImageUploadSuccess(e,t),this.$store.commit("UPDATE_USER_INFO",{key:"avatar",value:e.data.url})},bannerUploadSuccess:function(e,t){this.handleImageUploadSuccess(e,t),this.$store.commit("UPDATE_USER_INFO",{key:"banner",value:e.data.url})},submit:function(){var e=this;this.$refs.form.validate(function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=18;break}if(!e.submitting){t.next=3;break}return t.abrupt("return");case 3:return e.submitting=!0,t.prev=4,t.next=7,Object(k.j)(e,{nickname:e.nickname,signature:e.signature,birthday:new Date(e.birthday).getTime()/1e3,birth_secret:e.birthSecret,sex_secret:e.sexSecret,sex:e.sex,avatar:e.user.avatar,banner:e.user.banner});case 7:e.$toast.success("设置成功"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(4),e.$toast.error(t.t0.message);case 13:return t.prev=13,e.submitting=!1,t.finish(13);case 16:t.next=19;break;case 18:return t.abrupt("return",!1);case 19:case"end":return t.stop()}},t,null,[[4,10,13,16]])}));return function(e){return t.apply(this,arguments)}}())}}},_=(n(540),n(18)),component=Object(_.a)(x,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"user-basic-setting"}},[e.isAuth?n("ElForm",{ref:"form",attrs:{disabled:e.submitting,model:e.user,rules:e.rule,"label-position":"top"}},[n("ElFormItem",{attrs:{label:"头像"}},[n("div",{staticClass:"avatar-field"},[n("img",{staticClass:"avatar",attrs:{src:e.$resize(e.user.avatar,{width:100})}}),e._v(" "),n("ElUpload",{attrs:{"show-file-list":!1,action:e.imageUploadAction,limit:e.uploadImageLimit,data:e.uploadHeaders,accept:e.imageUploadAccept,"before-upload":e.handleImageUploadBefore,"on-success":e.avatarUploadSuccess,"on-error":e.handleImageUploadError}},[n("ElButton",{attrs:{loading:!!e.uploadPending,type:"success",plain:"",round:"",size:"mini"}},[e._v("\n            "+e._s(e.uploadPending?"图片上传中...":"点击更换头像")+"\n          ")])],1)],1)]),e._v(" "),n("ElFormItem",{attrs:{label:"背景"}},[n("div",{staticClass:"banner-field"},[n("div",{staticClass:"banner-wrap"},[n("img",{staticClass:"banner",attrs:{src:e.$resize(e.user.banner,{height:100,mode:2})}})]),e._v(" "),n("ElUpload",{attrs:{"show-file-list":!1,action:e.imageUploadAction,limit:e.uploadImageLimit,data:e.uploadHeaders,accept:e.imageUploadAccept,"before-upload":e.handleImageUploadBefore,"on-success":e.bannerUploadSuccess,"on-error":e.handleImageUploadError}},[n("ElButton",{attrs:{loading:!!e.uploadPending,type:"success",plain:"",round:"",size:"mini"}},[e._v("\n            "+e._s(e.uploadPending?"图片上传中...":"点击更换背景")+"\n          ")])],1)],1)]),e._v(" "),n("ElFormItem",{attrs:{label:"昵称",prop:"nickname"}},[n("ElInput",{model:{value:e.nickname,callback:function(t){e.nickname="string"==typeof t?t.trim():t},expression:"nickname"}})],1),e._v(" "),n("ElFormItem",{attrs:{label:"生日",prop:"birthday"}},[n("ElDatePicker",{attrs:{editable:!1,clearable:!1,type:"date",format:"yyyy 年 M 月 d 日","value-format":"yyyy-MM-dd",placeholder:"选择生日"},model:{value:e.birthday,callback:function(t){e.birthday=t},expression:"birthday"}}),e._v(" "),n("ElSwitch",{attrs:{"active-text":"私密","inactive-text":"公开"},model:{value:e.birthSecret,callback:function(t){e.birthSecret=t},expression:"birthSecret"}})],1),e._v(" "),n("ElFormItem",{attrs:{label:"性别"}},[n("ElRadioGroup",{model:{value:e.sex,callback:function(t){e.sex=t},expression:"sex"}},[n("ElRadio",{attrs:{label:1}},[e._v("\n          男\n        ")]),e._v(" "),n("ElRadio",{attrs:{label:2}},[e._v("\n          女\n        ")])],1),e._v(" "),n("ElSwitch",{attrs:{"active-text":"私密","inactive-text":"公开"},model:{value:e.sexSecret,callback:function(t){e.sexSecret=t},expression:"sexSecret"}})],1),e._v(" "),n("ElFormItem",{attrs:{label:"签名",prop:"signature"}},[n("ElInput",{attrs:{rows:5,type:"textarea",placeholder:"留下自己想说的话",maxlength:"60","show-word-limit":"",resize:"none"},model:{value:e.signature,callback:function(t){e.signature=t},expression:"signature"}})],1),e._v(" "),n("ElFormItem",[n("ElButton",{attrs:{loading:e.submitting,type:"primary"},on:{click:e.submit}},[e._v("\n        提交\n      ")])],1)],1):e._e()],1)},[],!1,null,null,null);t.default=component.exports}}]);