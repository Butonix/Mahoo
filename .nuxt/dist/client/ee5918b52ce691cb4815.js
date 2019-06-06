(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{297:function(e,t,l){"use strict";l(82),l(83),l(12),l(79),l(80),l(36),l(50);var r=l(5),o=l(128);t.a={data:function(){return{uploadHeaders:{key:"",token:""},uploadConfig:{max:5},uploadImageLimit:20,imageUploadAccept:["image/jpeg","image/png","image/jpg"].join(", "),imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv/",getUpTokenTimer:0,uploadPending:0,uploadImageTotal:0,uploadImageList:[]}},computed:{currentUser:function(){return this.$store.state.user},isAuth:function(){return this.$store.state.isAuth}},watch:{isAuth:function(e){e&&this.initUpToken()}},mounted:function(){this.isAuth&&this.initUpToken()},beforeDestroy:function(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{initUpToken:function(){var e=this;this.getUpToken(),this.getUpTokenTimer=setInterval(function(){e.getUpToken()},18e5)},getUpToken:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=this.$cookie.get("UPLOAD-TOKEN"))){e.next=4;break}return this.uploadHeaders.token=this.$cookie.get("UPLOAD-TOKEN"),e.abrupt("return");case 4:return e.next=6,Object(o.b)(this);case 6:t=e.sent,this.uploadHeaders.token=t,this.$cookie.set("UPLOAD-TOKEN",t,{expires:new Date((new Date).getTime()+3e6)});case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),handleImageUploadError:function(e,t){var l=this;this.uploadImageList.forEach(function(r,o){r.uid===t.uid&&(l.uploadPending--,l.uploadImageList.splice(o,1),console.log(e))}),this.$toast.error("图片：".concat(t.name," 上传失败"))},handleImageUploadRemove:function(e){var t=this;this.uploadImageList.forEach(function(l,r){l.uid===e.uid&&(t.uploadImageList.splice(r,1),t.uploadImageTotal--)})},handleImageUploadSuccess:function(e,t){var l=this;this.uploadImageList.forEach(function(r,o){r.uid===t.uid&&(l.uploadImageList[o]=Object.assign(r,{data:e.data,status:"success",url:l.$resize("".concat(l.imagePrefix).concat(e.data.url),{width:100})}))}),this.uploadImageTotal++,this.uploadPending--},handleImageUploadExceed:function(){this.$toast.info("最多还能上传".concat(this.uploadImageLimit-this.uploadImageTotal,"张图片"))},handleImageUploadBefore:function(e){if(!this.isAuth)return this.$channel.$emit("sign-in"),!1;if(-1===this.imageUploadAccept.split(", ").indexOf(e.type))return this.$toast.error("仅支持上传".concat(this.imageUploadAccept.replace(/image\//g,"").replace(/, /g,"、"),"格式的图片")),!1;if(this.uploadConfig.max&&this.uploadConfig.max<e.size/1024/1024)return this.$toast.error("图片大小不能超过 ".concat(this.uploadConfig.max,"MB!")),!1;return this.uploadHeaders.key=function(e){var t=e.slug,l=e.file;return"".concat(t,"/").concat((new Date).getTime(),"-").concat(Math.random().toString(36).substring(3,6),".").concat(l.type.split("/").pop())}({slug:this.currentUser.slug,file:e}),this.uploadImageList.push({name:e.name,percentage:0,raw:e,size:e.size,status:"uploading",errMsg:"",uid:e.uid}),this.uploadPending++,!0}}}},310:function(e,t,l){},355:function(e,t,l){"use strict";var r=l(310);l.n(r).a},406:function(e,t,l){"use strict";l.r(t);var r=l(347),o=l.n(r),n=l(348),c=l.n(n),d=l(342),m=l.n(d),f=l(352),h=l.n(f),v=l(308),I=l.n(v),_=l(302),k=l.n(_),w=l(309),x=l.n(w),y=l(297),U={name:"CreateCosplay",layout:"web",components:{"el-upload":x.a,"el-radio":k.a,"el-radio-group":I.a,"el-cascader":h.a,"el-select":m.a,"el-option":c.a,"el-divider":o.a},mixins:[y.a],props:{},data:function(){return{contentType:1,users:{coser:[],dresser:[],worker:[],ender:[],weapon:[]},formItem:{title:"",is_secret:0,textarea:"",area:[],tags:[]},cityList:[{value:"New York",label:"New York"},{value:"London",label:"London"},{value:"Sydney",label:"Sydney"},{value:"Ottawa",label:"Ottawa"},{value:"Paris",label:"Paris"},{value:"Canberra",label:"Canberra"}],areaList:[{value:"beijing",label:"北京",children:[{value:"gugong",label:"故宫"},{value:"tiantan",label:"天坛"},{value:"wangfujing",label:"王府井"}]},{value:"jiangsu",label:"江苏",children:[{value:"nanjing",label:"南京",children:[{value:"fuzimiao",label:"夫子庙"}]},{value:"suzhou",label:"苏州",children:[{value:"zhuozhengyuan",label:"拙政园"},{value:"shizilin",label:"狮子林"}]}]}]}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{handleSubmit:function(){},customImageUploadSuccess:function(e,t){this.handleImageUploadSuccess(e,t),this.uploadImageList=this.uploadImageList.filter(function(e){return"success"===e.status&&e.data.width>=420&&e.data.height>=420||"success"!==e.status}),this.uploadImageTotal=this.uploadImageList.length}}},L=(l(355),l(25)),component=Object(L.a)(U,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{attrs:{id:"create-cosplay"}},[l("div",{staticClass:"panel main-panel"},[l("el-form",{ref:"form",attrs:{model:e.formItem,"label-position":"right","label-width":"80px"}},[l("p",{staticClass:"form-tip"},[e._v("\n        提示：标记 "),l("span",[e._v("*")]),e._v(" 为必填项，否则无法发布哦\n      ")]),e._v(" "),l("el-form-item",{attrs:{label:"上传图片",required:""}}),e._v(" "),l("div",{staticClass:"uploader",class:"uploader-count-"+(e.uploadImageTotal+e.uploadPending)},[l("el-upload",{attrs:{multiple:"",drag:"","list-type":"picture-card",action:e.imageUploadAction,limit:e.uploadImageLimit,data:e.uploadHeaders,"file-list":e.uploadImageList,accept:e.imageUploadAccept,"before-upload":e.handleImageUploadBefore,"on-success":e.customImageUploadSuccess,"on-error":e.handleImageUploadError,"on-remove":e.handleImageUploadRemove,"on-exceed":e.handleImageUploadExceed}}),e._v(" "),l("p",{staticClass:"uploader-info"},[e._v("\n          最多可上传20张哦 (支持格式 jpg、png，宽高尺寸须大于420像素)\n        ")])],1),e._v(" "),l("el-form-item",{attrs:{label:"分区",required:""}},[l("el-col",{attrs:{span:16}},[l("el-cascader",{attrs:{placeholder:"添加作品分区，如约会大作战",options:e.areaList,filterable:""},model:{value:e.formItem.area,callback:function(t){e.$set(e.formItem,"area",t)},expression:"formItem.area"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"标题",required:""}},[l("el-col",{attrs:{span:16}},[l("el-input",{attrs:{placeholder:"请输入标题","show-word-limit":!0,maxlength:"20"},model:{value:e.formItem.title,callback:function(t){e.$set(e.formItem,"title",t)},expression:"formItem.title"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"简介"}},[l("el-input",{attrs:{type:"textarea","show-word-limit":!0,rows:8,maxlength:"233",resize:"none",placeholder:"请输入作品介绍，临摹作品请一定要注明作品的出处来源"},model:{value:e.formItem.textarea,callback:function(t){e.$set(e.formItem,"textarea",t)},expression:"formItem.textarea"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"标签"}},[l("el-col",{attrs:{span:16}},[l("el-select",{attrs:{placeholder:"添加标签，方便分享",filterable:"",multiple:"","allow-create":""},model:{value:e.formItem.tags,callback:function(t){e.$set(e.formItem,"tags",t)},expression:"formItem.tags"}},e._l(e.cityList,function(t){return l("el-option",{key:t.value,attrs:{value:t.value}},[e._v("\n              "+e._s(t.label)+"\n            ")])}),1)],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"访问权限"}},[l("el-radio-group",{model:{value:e.formItem.is_secret,callback:function(t){e.$set(e.formItem,"is_secret",t)},expression:"formItem.is_secret"}},[l("el-radio",{attrs:{label:0}},[e._v("\n            公开\n          ")]),e._v(" "),l("el-radio",{attrs:{label:1}},[e._v("\n            私密\n          ")])],1)],1),e._v(" "),l("br"),e._v(" "),l("el-divider",[e._v("创作者信息")]),e._v(" "),l("br"),e._v(" "),l("br"),e._v(" "),l("el-form-item",{attrs:{label:"出镜"}},[l("el-col",{attrs:{span:16}},[l("el-select",{attrs:{placeholder:"coser的昵称",filterable:"",multiple:"","allow-create":""},model:{value:e.users.coser,callback:function(t){e.$set(e.users,"coser",t)},expression:"users.coser"}},e._l(e.cityList,function(t){return l("el-option",{key:t.value,attrs:{value:t.value}},[e._v("\n              "+e._s(t.label)+"\n            ")])}),1)],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"化妆"}},[l("el-col",{attrs:{span:16}},[l("el-select",{attrs:{placeholder:"化妆师的昵称",filterable:"",multiple:"","allow-create":""},model:{value:e.users.dresser,callback:function(t){e.$set(e.users,"dresser",t)},expression:"users.dresser"}},e._l(e.cityList,function(t){return l("el-option",{key:t.value,attrs:{value:t.value}},[e._v("\n              "+e._s(t.label)+"\n            ")])}),1)],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"道具"}},[l("el-col",{attrs:{span:16}},[l("el-select",{attrs:{placeholder:"道具师的昵称",filterable:"",multiple:"","allow-create":""},model:{value:e.users.weapon,callback:function(t){e.$set(e.users,"weapon",t)},expression:"users.weapon"}},e._l(e.cityList,function(t){return l("el-option",{key:t.value,attrs:{value:t.value}},[e._v("\n              "+e._s(t.label)+"\n            ")])}),1)],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"摄影"}},[l("el-col",{attrs:{span:16}},[l("el-select",{attrs:{placeholder:"摄影师的昵称",filterable:"",multiple:"","allow-create":""},model:{value:e.users.worker,callback:function(t){e.$set(e.users,"worker",t)},expression:"users.worker"}},e._l(e.cityList,function(t){return l("el-option",{key:t.value,attrs:{value:t.value}},[e._v("\n              "+e._s(t.label)+"\n            ")])}),1)],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"后期"}},[l("el-col",{attrs:{span:16}},[l("el-select",{attrs:{placeholder:"后期君的昵称",filterable:"",multiple:"","allow-create":""},model:{value:e.users.ender,callback:function(t){e.$set(e.users,"ender",t)},expression:"users.ender"}},e._l(e.cityList,function(t){return l("el-option",{key:t.value,attrs:{value:t.value}},[e._v("\n              "+e._s(t.label)+"\n            ")])}),1)],1)],1)],1),e._v(" "),l("el-row",[l("el-col",{attrs:{span:10,push:7}},[l("br"),e._v(" "),l("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",shape:"circle",size:"large"},on:{click:e.handleSubmit}},[e._v("\n          提交发布\n        ")])],1)],1)],1)])},[],!1,null,null,null);t.default=component.exports}}]);