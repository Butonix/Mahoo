(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{312:function(t,e,n){"use strict";n(87),n(88),n(8),n(83),n(55),n(38),n(27);var o=n(2),r=n(132);e.a={data:function(){return{uploadHeaders:{key:"",token:""},uploadConfig:{max:5},uploadImageLimit:20,imageUploadAccept:["image/jpeg","image/png","image/jpg"].join(", "),imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv/",getUpTokenTimer:0,uploadPending:0,uploadImageTotal:0,uploadImageList:[]}},computed:{currentUser:function(){return this.$store.state.user},isAuth:function(){return this.$store.state.isAuth}},watch:{isAuth:function(t){t&&this.initUpToken()}},mounted:function(){this.isAuth&&this.initUpToken()},beforeDestroy:function(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{initUpToken:function(){var t=this;this.getUpToken(),this.getUpTokenTimer=setInterval(function(){t.getUpToken()},18e5)},getUpToken:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=this.$cookie.get("UPLOAD-TOKEN"))){t.next=4;break}return this.uploadHeaders.token=this.$cookie.get("UPLOAD-TOKEN"),t.abrupt("return");case 4:return t.next=6,Object(r.b)(this);case 6:e=t.sent,this.uploadHeaders.token=e,this.$cookie.set("UPLOAD-TOKEN",e,{expires:new Date((new Date).getTime()+3e6)});case 9:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),handleImageUploadError:function(t,e){var n=this;this.uploadImageList.forEach(function(o,r){o.uid===e.uid&&(n.uploadPending--,n.uploadImageList.splice(r,1),console.log(t))}),this.$toast.error("图片：".concat(e.name," 上传失败"))},handleImageUploadRemove:function(t){var e=this;this.uploadImageList.forEach(function(n,o){n.uid===t.uid&&(e.uploadImageList.splice(o,1),e.uploadImageTotal--)})},handleImageUploadSuccess:function(t,e){var n=this;this.uploadImageList.forEach(function(o,r){o.uid===e.uid&&(n.uploadImageList[r]=Object.assign(o,{data:t.data,status:"success",url:n.$resize("".concat(n.imagePrefix).concat(t.data.url),{width:100})}))}),this.uploadImageTotal++,this.uploadPending--},handleImageUploadExceed:function(){this.$toast.info("最多还能上传".concat(this.uploadImageLimit-this.uploadImageTotal,"张图片"))},handleImageUploadBefore:function(t){if(!this.isAuth)return this.$channel.$emit("sign-in"),!1;if(-1===this.imageUploadAccept.split(", ").indexOf(t.type))return this.$toast.error("仅支持上传".concat(this.imageUploadAccept.replace(/image\//g,"").replace(/, /g,"、"),"格式的图片")),!1;if(this.uploadConfig.max&&this.uploadConfig.max<t.size/1024/1024)return this.$toast.error("图片大小不能超过 ".concat(this.uploadConfig.max,"MB!")),!1;return this.uploadHeaders.key=function(t){var e=t.slug,n=t.file;return"".concat(e,"/").concat((new Date).getTime(),"-").concat(Math.random().toString(36).substring(3,6),".").concat(n.type.split("/").pop())}({slug:this.currentUser.slug,file:t}),this.uploadImageList.push({name:t.name,percentage:0,raw:t,size:t.size,status:"uploading",errMsg:"",uid:t.uid}),this.uploadPending++,!0}}}},333:function(t,e,n){},381:function(t,e,n){"use strict";var o=n(333);n.n(o).a},443:function(t,e,n){"use strict";n.r(e);n(55);var o=n(368),r=n.n(o),l=n(324),c=n.n(l),d=n(312),m={name:"CreateTalkForm",components:{"el-upload":c.a,"el-cascader":r.a},mixins:[d.a],props:{tag:{type:String,default:""}},data:function(){return{uploadImageLimit:9,title:"",content:"",area:this.tag?this.tag.split("-"):["topic","ugf6"],loading:!1}},computed:{options:function(){return this.$store.state.share.contributionTags.data}},mounted:function(){this.$store.dispatch("share/getUserContributionTags")},methods:{customImageUploadSuccess:function(t,e){this.handleImageUploadSuccess(t,e),this.uploadImageList=this.uploadImageList.filter(function(t){return"success"===t.status&&t.data.width>=420&&t.data.height>=420||"success"!==t.status}),this.uploadImageTotal=this.uploadImageList.length},submit:function(){var t=this;this.loading||(this.loading=!0,this.$axios.$post("v1/pin/create/daily",{title:this.title,content:this.content,images:this.uploadImageList.map(function(t){return t.data}),area:this.area[1]}).then(function(data){t.loading=!1}).catch(function(e){t.$toast.error(e.message),t.loading=!1}))}}},h=(n(381),n(26)),f={name:"CreateDaily",components:{CreateTalkForm:Object(h.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-form",{staticClass:"create-talk-form",attrs:{"label-position":"top"}},[t.tag?t._e():[n("el-form-item",{attrs:{label:"标题"}},[n("el-input",{attrs:{placeholder:"请输入标题（建议30字以内）",maxlength:"30"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"分区"}},[n("el-cascader",{attrs:{placeholder:"选择分区，如约会大作战",options:t.options,filterable:""},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.node,data=e.data;return[o.isLeaf?[n("span",[t._v(t._s(data.label))])]:[n("span",[t._v(t._s(data.label))]),t._v(" "),n("span",[t._v(" ("+t._s(data.children.length)+") ")])]]}}],null,!1,4151453342),model:{value:t.area,callback:function(e){t.area=e},expression:"area"}})],1)],t._v(" "),n("el-form-item",{attrs:{label:t.tag?"":"正文"}},[n("div",{staticClass:"content-wrap"},[t.tag?n("button",{staticClass:"submit-btn",on:{click:t.submit}},[t._v("\n        点击"),n("br"),t._v("发送\n      ")]):t._e(),t._v(" "),n("div",{staticClass:"input-wrap"},[n("el-input",{attrs:{type:"textarea",autosize:t.tag?{minRows:3}:{minRows:8},"show-word-limit":!0,maxlength:t.tag?1e3:1e4,placeholder:"请自觉遵守互联网相关的政策法规，严禁发布色情、暴力、反动的言论"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)])]),t._v(" "),n("el-form-item",[n("el-upload",{attrs:{multiple:"","list-type":"picture-card",action:t.imageUploadAction,limit:t.uploadImageLimit,data:t.uploadHeaders,"file-list":t.uploadImageList,accept:t.imageUploadAccept,"before-upload":t.handleImageUploadBefore,"on-success":t.customImageUploadSuccess,"on-error":t.handleImageUploadError,"on-remove":t.handleImageUploadRemove,"on-exceed":t.handleImageUploadExceed}},[n("i",{staticClass:"el-icon-plus"})])],1),t._v(" "),t.tag?t._e():n("el-form-item",[n("div",{staticClass:"bottom-btn"},[n("el-button",{attrs:{type:"primary",round:"",loading:t.loading},on:{click:t.submit}},[t._v("\n        点击发送\n      ")])],1)])],2)},[],!1,null,null,null).exports},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},v=Object(h.a)(f,function(){var t=this.$createElement;return(this._self._c||t)("create-talk-form")},[],!1,null,null,null);e.default=v.exports}}]);