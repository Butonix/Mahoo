exports.ids=[12],exports.modules={176:function(t,e){t.exports={undefined:void 0}},292:function(t,e,o){"use strict";o.r(e);var n=o(176),l=o.n(n);for(var r in n)"default"!==r&&function(t){o.d(e,t,(function(){return n[t]}))}(r);e.default=l.a},383:function(t,e,o){"use strict";o.r(e);var n=o(55),l=o.n(n),r=o(56),d=o.n(r),m=o(91),c=o(94),h={name:"ProfileBangumi",layout:"app",components:{ElUpload:d.a,ElSelect:l.a},mixins:[m.a,c.a],asyncData({app:t,error:e,query:o}){const n=o.slug;if(n)return t.$axios.$get("v1/bangumi/show",{params:{slug:n}}).then(t=>({bangumi:t})).catch(e)},data:()=>({bangumi:null,loading:!1}),methods:{avatarUploadSuccess(t,e){this.handleImageUploadSuccess(t,e),this.bangumi.avatar=t.data.url},handleSubmit(){this.loading||(this.loading=!0,this.$axios.$post("v1/bangumi/update/profile",this.bangumi).then(()=>{this.$toast.success("修改成功")}).catch(t=>{this.$toast.error(t.message)}).finally(()=>{this.loading=!1}))}},head:{title:"编辑番剧"}},f=o(1);var component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.bangumi?o("div",{attrs:{id:"profile-bangumi"}},[o("el-form",{ref:"form",attrs:{"label-position":"top","label-width":"80px"}},[o("ElFormItem",{attrs:{label:"名称"}},[o("ElInput",{attrs:{disabled:""},model:{value:t.bangumi.name,callback:function(e){t.$set(t.bangumi,"name",e)},expression:"bangumi.name"}})],1),t._v(" "),o("ElFormItem",{attrs:{label:"头像"}},[o("div",{staticClass:"avatar-field"},[o("img",{staticClass:"avatar",attrs:{src:t.$resize(t.bangumi.avatar,{width:100})}}),t._v(" "),o("ElUpload",{attrs:{"show-file-list":!1,action:t.imageUploadAction,limit:t.uploadImageLimit,data:t.uploadHeaders,accept:t.imageUploadAccept,"before-upload":t.handleImageUploadBefore,"on-success":t.avatarUploadSuccess,"on-error":t.handleImageUploadError}},[o("ElButton",{attrs:{loading:!!t.uploadPending,type:"success",plain:"",round:"",size:"mini"}},[t._v("\n            "+t._s(t.uploadPending?"图片上传中...":"点击上传头像")+"\n          ")])],1)],1)]),t._v(" "),o("ElFormItem",{attrs:{label:"别名"}},[o("ElSelect",{staticClass:"hidden-select-input",attrs:{multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:"请输入番剧别名","popper-class":"hidden-select-options"},model:{value:t.bangumi.alias,callback:function(e){t.$set(t.bangumi,"alias",e)},expression:"bangumi.alias"}})],1),t._v(" "),o("ElFormItem",{attrs:{label:"简介"}},[o("ElInput",{attrs:{type:"textarea",rows:"4",resize:"vertical"},model:{value:t.bangumi.intro,callback:function(e){t.$set(t.bangumi,"intro",e)},expression:"bangumi.intro"}})],1),t._v(" "),o("ElFormItem",[o("ElButton",{attrs:{type:"success",round:""},on:{click:t.handleSubmit}},[t._v("提交")])],1)],1)],1):t._e()}),[],!1,(function(t){var e=o(292);e.__inject__&&e.__inject__(t)}),null,"43db0eb1");e.default=component.exports},91:function(t,e,o){"use strict";e.a={beforeMount(){this.$channel.$when("user-not-sign",()=>{this.$toast.error("继续操作前请先登录").then(()=>{window.location.href=this.$alias.sign()})})}}},94:function(t,e,o){"use strict";var n=o(95);e.a={data:()=>({uploadHeaders:{key:"",token:""},uploadConfig:{max:5},uploadImageLimit:20,imageUploadAccept:["image/jpeg","image/png","image/jpg"].join(", "),imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv/",getUpTokenTimer:0,uploadPending:0,uploadImageTotal:0,uploadImageList:[]}),computed:{currentUser(){return this.$store.state.user},isAuth(){return this.$store.state.isAuth}},mounted(){this.isAuth?this.initUpToken():this.$channel.$when("user-signed",()=>{this.initUpToken()})},beforeDestroy(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{initUpToken(){this.getUpToken(),this.getUpTokenTimer=setInterval(()=>{this.getUpToken()},18e5)},async getUpToken(){let t=this.$cookie.get("UPLOAD-TOKEN");t?this.uploadHeaders.token=this.$cookie.get("UPLOAD-TOKEN"):(t=await Object(n.a)(this),this.uploadHeaders.token=t,this.$cookie.set("UPLOAD-TOKEN",t,{expires:new Date((new Date).getTime()+3e6)}))},handleImageUploadError(t,e){this.uploadImageList.forEach((o,n)=>{o.uid===e.uid&&(this.uploadPending--,this.uploadImageList.splice(n,1),console.log(t))}),this.$toast.error(`图片：${e.name} 上传失败`)},handleImageUploadRemove(t){this.uploadImageList.forEach((e,o)=>{e.uid===t.uid&&(this.uploadImageList.splice(o,1),this.uploadImageTotal--)})},handleImageUploadSuccess(t,e){this.uploadImageList.forEach((o,n)=>{o.uid===e.uid&&(this.uploadImageList[n]=Object.assign(o,{data:t.data,status:"success",url:this.$resize(`${this.imagePrefix}${t.data.url}`,{width:100})}))}),this.uploadImageTotal++,this.uploadPending--},handleImageUploadExceed(){this.$toast.info(`最多还能上传${this.uploadImageLimit-this.uploadImageTotal}张图片`)},handleImageUploadBefore(t){if(!this.isAuth)return this.$channel.$emit("sign-in"),!1;if(!this.imageUploadAccept.split(", ").includes(t.type))return this.$toast.error(`仅支持上传${this.imageUploadAccept.replace(/image\//g,"").replace(/, /g,"、")}格式的图片`),!1;if(this.uploadConfig.max&&this.uploadConfig.max<t.size/1024/1024)return this.$toast.error(`图片大小不能超过 ${this.uploadConfig.max}MB!`),!1;return this.uploadHeaders.key=(({slug:t,file:e})=>`${t}/${(new Date).getTime()}-${Math.random().toString(36).substring(3,6)}.${e.type.split("/").pop()}`)({slug:this.currentUser.slug,file:t}),this.uploadImageList.push({name:t.name,percentage:0,raw:t,size:t.size,status:"uploading",errMsg:"",uid:t.uid}),this.uploadPending++,!0},resetUploaderStatus(){this.uploadImageList=[],this.uploadImageTotal=0,this.uploadPending=0}}}},95:function(t,e,o){"use strict";o.d(e,"a",(function(){return n})),o.d(e,"b",(function(){return l}));const n=t=>t.$axios.$get("v1/image/uptoken"),l=(t,e)=>t.$axios.$post("https://up.qbox.me",e,{"Content-Type":"multipart/form-data"})}};