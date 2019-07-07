exports.ids=[31],exports.modules={120:function(e,t,l){"use strict";l.r(t);var r=l(97),o=l.n(r);for(var n in r)"default"!==n&&function(e){l.d(t,e,function(){return r[e]})}(n);t.default=o.a},128:function(e,t){},169:function(e,t,l){"use strict";var r=l(58),o={name:"AreaPicker",components:{ElCascader:l.n(r).a},props:{value:{type:String,required:!0},placeholder:{type:String,default:"选择作品分区，如约会大作战"}},data(){return{selected:this.value}},computed:{options(){return this.$store.state.global.myTags.filter(e=>!~["notebook","topic"].indexOf(e.slug))}},watch:{value(e){this.selected=e},selected(e){this.$emit("input",e)}},mounted(){this.$channel.$when("user-signed",()=>{this.$store.dispatch("global/getMyTags")})}},n=l(1);var component=Object(n.a)(o,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"area-picker"},[e._ssrNode('<p class="tip">\n    提示：只展示已解禁的分区（必选项，填写后不可修改）\n  </p> '),l("ElCascader",{attrs:{placeholder:e.placeholder,options:e.options,props:{value:"slug",label:"name",emitPath:!1},filterable:""},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.node,data=t.data;return[r.isLeaf?[l("span",[e._v(e._s(data.name))])]:[l("span",[e._v(e._s(data.name))]),e._v(" "),l("span",[e._v(" ("+e._s(data.children.length)+") ")])]]}}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],2)},[],!1,function(e){var t=l(120);t.__inject__&&t.__inject__(e)},null,"d07163b4");t.a=component.exports},183:function(e,t,l){"use strict";l.r(t);var r=l(128),o=l.n(r);for(var n in r)"default"!==n&&function(e){l.d(t,e,function(){return r[e]})}(n);t.default=o.a},235:function(e,t,l){"use strict";l.r(t);var r=l(62),o=l.n(r),n=l(57),c=l.n(n),d=l(56),m=l.n(d),h=l(59),f=l.n(h),v=l(60),_=l.n(v),I=l(55),E=l.n(I),k=l(87),$={name:"CreateCosplay",layout:"web",components:{AreaPicker:l(169).a,ElUpload:E.a,ElRadio:_.a,ElRadioGroup:f.a,ElSelect:m.a,ElOption:c.a,ElDivider:o.a},mixins:[k.a],data:()=>({contentType:1,users:{coser:[],dresser:[],worker:[],ender:[],weapon:[]},formItem:{title:"",is_secret:0,textarea:"",area:[],tags:[]},cityList:[{value:"New York",label:"New York"},{value:"London",label:"London"},{value:"Sydney",label:"Sydney"},{value:"Ottawa",label:"Ottawa"},{value:"Paris",label:"Paris"},{value:"Canberra",label:"Canberra"}]}),methods:{handleSubmit(){},customImageUploadSuccess(e,t){this.handleImageUploadSuccess(e,t),this.uploadImageList=this.uploadImageList.filter(e=>"success"===e.status&&e.data.width>=420&&e.data.height>=420||"success"!==e.status),this.uploadImageTotal=this.uploadImageList.length}}},x=l(1);var component=Object(x.a)($,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{attrs:{id:"create-cosplay"}},[l("ElForm",{ref:"form",attrs:{model:e.formItem,"label-position":"right","label-width":"80px"}},[l("p",{staticClass:"form-tip"},[e._v("\n      提示：标记 "),l("span",[e._v("*")]),e._v(" 为必填项，否则无法发布哦\n    ")]),e._v(" "),l("ElFormItem",{attrs:{label:"上传图片",required:""}}),e._v(" "),l("div",{staticClass:"uploader",class:"uploader-count-"+(e.uploadImageTotal+e.uploadPending)},[l("ElUpload",{attrs:{multiple:"",drag:"","list-type":"picture-card",action:e.imageUploadAction,limit:e.uploadImageLimit,data:e.uploadHeaders,"file-list":e.uploadImageList,accept:e.imageUploadAccept,"before-upload":e.handleImageUploadBefore,"on-success":e.customImageUploadSuccess,"on-error":e.handleImageUploadError,"on-remove":e.handleImageUploadRemove,"on-exceed":e.handleImageUploadExceed}}),e._v(" "),l("p",{staticClass:"uploader-info"},[e._v("\n        最多可上传20张哦 (支持格式 jpg、png，宽高尺寸须大于420像素)\n      ")])],1),e._v(" "),l("ElFormItem",{attrs:{label:"分区",required:""}},[l("ElCol",{attrs:{span:16}},[l("AreaPicker",{model:{value:e.formItem.area,callback:function(t){e.$set(e.formItem,"area",t)},expression:"formItem.area"}})],1)],1),e._v(" "),l("ElFormItem",{attrs:{label:"标题",required:""}},[l("ElCol",{attrs:{span:16}},[l("ElInput",{attrs:{placeholder:"请输入标题","show-word-limit":!0,maxlength:"20"},model:{value:e.formItem.title,callback:function(t){e.$set(e.formItem,"title",t)},expression:"formItem.title"}})],1)],1),e._v(" "),l("ElFormItem",{attrs:{label:"简介"}},[l("ElInput",{attrs:{type:"textarea","show-word-limit":!0,rows:8,maxlength:"233",resize:"none",placeholder:"请输入作品介绍，临摹作品请一定要注明作品的出处来源"},model:{value:e.formItem.textarea,callback:function(t){e.$set(e.formItem,"textarea",t)},expression:"formItem.textarea"}})],1),e._v(" "),l("ElFormItem",{attrs:{label:"标签"}},[l("ElCol",{attrs:{span:16}},[l("ElSelect",{attrs:{placeholder:"添加标签，方便分享",filterable:"",multiple:"","allow-create":""},model:{value:e.formItem.tags,callback:function(t){e.$set(e.formItem,"tags",t)},expression:"formItem.tags"}},e._l(e.cityList,function(t){return l("ElOption",{key:t.value,attrs:{value:t.value}},[e._v("\n            "+e._s(t.label)+"\n          ")])}),1)],1)],1),e._v(" "),l("ElFormItem",{attrs:{label:"访问权限"}},[l("ElRadioGroup",{model:{value:e.formItem.is_secret,callback:function(t){e.$set(e.formItem,"is_secret",t)},expression:"formItem.is_secret"}},[l("ElRadio",{attrs:{label:0}},[e._v("\n          公开\n        ")]),e._v(" "),l("ElRadio",{attrs:{label:1}},[e._v("\n          私密\n        ")])],1)],1),e._v(" "),l("br"),e._v(" "),l("ElDivider",[e._v("创作者信息")]),e._v(" "),l("br"),e._v(" "),l("br"),e._v(" "),l("ElFormItem",{attrs:{label:"出镜"}},[l("ElCol",{attrs:{span:16}},[l("ElSelect",{attrs:{placeholder:"coser的昵称",filterable:"",multiple:"","allow-create":""},model:{value:e.users.coser,callback:function(t){e.$set(e.users,"coser",t)},expression:"users.coser"}},e._l(e.cityList,function(t){return l("ElOption",{key:t.value,attrs:{value:t.value}},[e._v("\n            "+e._s(t.label)+"\n          ")])}),1)],1)],1),e._v(" "),l("ElFormItem",{attrs:{label:"化妆"}},[l("ElCol",{attrs:{span:16}},[l("ElSelect",{attrs:{placeholder:"化妆师的昵称",filterable:"",multiple:"","allow-create":""},model:{value:e.users.dresser,callback:function(t){e.$set(e.users,"dresser",t)},expression:"users.dresser"}},e._l(e.cityList,function(t){return l("ElOption",{key:t.value,attrs:{value:t.value}},[e._v("\n            "+e._s(t.label)+"\n          ")])}),1)],1)],1),e._v(" "),l("ElFormItem",{attrs:{label:"道具"}},[l("ElCol",{attrs:{span:16}},[l("ElSelect",{attrs:{placeholder:"道具师的昵称",filterable:"",multiple:"","allow-create":""},model:{value:e.users.weapon,callback:function(t){e.$set(e.users,"weapon",t)},expression:"users.weapon"}},e._l(e.cityList,function(t){return l("ElOption",{key:t.value,attrs:{value:t.value}},[e._v("\n            "+e._s(t.label)+"\n          ")])}),1)],1)],1),e._v(" "),l("ElFormItem",{attrs:{label:"摄影"}},[l("ElCol",{attrs:{span:16}},[l("ElSelect",{attrs:{placeholder:"摄影师的昵称",filterable:"",multiple:"","allow-create":""},model:{value:e.users.worker,callback:function(t){e.$set(e.users,"worker",t)},expression:"users.worker"}},e._l(e.cityList,function(t){return l("ElOption",{key:t.value,attrs:{value:t.value}},[e._v("\n            "+e._s(t.label)+"\n          ")])}),1)],1)],1),e._v(" "),l("ElFormItem",{attrs:{label:"后期"}},[l("ElCol",{attrs:{span:16}},[l("ElSelect",{attrs:{placeholder:"后期君的昵称",filterable:"",multiple:"","allow-create":""},model:{value:e.users.ender,callback:function(t){e.$set(e.users,"ender",t)},expression:"users.ender"}},e._l(e.cityList,function(t){return l("ElOption",{key:t.value,attrs:{value:t.value}},[e._v("\n            "+e._s(t.label)+"\n          ")])}),1)],1)],1)],1),e._ssrNode(" "),l("ElRow",[l("ElCol",{attrs:{span:10,push:7}},[l("br"),e._v(" "),l("ElButton",{staticStyle:{width:"100%"},attrs:{type:"primary",shape:"circle",size:"large"},on:{click:e.handleSubmit}},[e._v("\n        提交发布\n      ")])],1)],1)],2)},[],!1,function(e){var t=l(183);t.__inject__&&t.__inject__(e)},null,"75cec81d");t.default=component.exports},87:function(e,t,l){"use strict";var r=l(88);t.a={data:()=>({uploadHeaders:{key:"",token:""},uploadConfig:{max:5},uploadImageLimit:20,imageUploadAccept:["image/jpeg","image/png","image/jpg"].join(", "),imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv/",getUpTokenTimer:0,uploadPending:0,uploadImageTotal:0,uploadImageList:[]}),computed:{currentUser(){return this.$store.state.user},isAuth(){return this.$store.state.isAuth}},mounted(){this.$channel.$when("user-signed",()=>{this.initUpToken()})},beforeDestroy(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{initUpToken(){this.getUpToken(),this.getUpTokenTimer=setInterval(()=>{this.getUpToken()},18e5)},async getUpToken(){let e=this.$cookie.get("UPLOAD-TOKEN");e?this.uploadHeaders.token=this.$cookie.get("UPLOAD-TOKEN"):(e=await Object(r.a)(this),this.uploadHeaders.token=e,this.$cookie.set("UPLOAD-TOKEN",e,{expires:new Date((new Date).getTime()+3e6)}))},handleImageUploadError(e,t){this.uploadImageList.forEach((l,r)=>{l.uid===t.uid&&(this.uploadPending--,this.uploadImageList.splice(r,1),console.log(e))}),this.$toast.error(`图片：${t.name} 上传失败`)},handleImageUploadRemove(e){this.uploadImageList.forEach((t,l)=>{t.uid===e.uid&&(this.uploadImageList.splice(l,1),this.uploadImageTotal--)})},handleImageUploadSuccess(e,t){this.uploadImageList.forEach((l,r)=>{l.uid===t.uid&&(this.uploadImageList[r]=Object.assign(l,{data:e.data,status:"success",url:this.$resize(`${this.imagePrefix}${e.data.url}`,{width:100})}))}),this.uploadImageTotal++,this.uploadPending--},handleImageUploadExceed(){this.$toast.info(`最多还能上传${this.uploadImageLimit-this.uploadImageTotal}张图片`)},handleImageUploadBefore(e){if(!this.isAuth)return this.$channel.$emit("sign-in"),!1;if(-1===this.imageUploadAccept.split(", ").indexOf(e.type))return this.$toast.error(`仅支持上传${this.imageUploadAccept.replace(/image\//g,"").replace(/, /g,"、")}格式的图片`),!1;if(this.uploadConfig.max&&this.uploadConfig.max<e.size/1024/1024)return this.$toast.error(`图片大小不能超过 ${this.uploadConfig.max}MB!`),!1;return this.uploadHeaders.key=(({slug:e,file:t})=>`${e}/${(new Date).getTime()}-${Math.random().toString(36).substring(3,6)}.${t.type.split("/").pop()}`)({slug:this.currentUser.slug,file:e}),this.uploadImageList.push({name:e.name,percentage:0,raw:e,size:e.size,status:"uploading",errMsg:"",uid:e.uid}),this.uploadPending++,!0},resetUploaderStatus(){this.uploadImageList=[],this.uploadImageTotal=0,this.uploadPending=0}}}},88:function(e,t,l){"use strict";l.d(t,"a",function(){return r}),l.d(t,"b",function(){return o});const r=e=>e.$axios.$get("v1/image/uptoken"),o=(e,t)=>e.$axios.$post("https://up.qbox.me",t,{"Content-Type":"multipart/form-data"})},97:function(e,t){}};
//# sourceMappingURL=112f89f4c5905dbc8cf4.js.map