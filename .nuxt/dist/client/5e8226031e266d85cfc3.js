(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{272:function(t,e,n){"use strict";var o=n(2),l=n(39);e.a={beforeMount(){var t=this;return Object(o.a)(function*(){if(t.$store.state.logging){const e=t.$watch("$store.state.logging",()=>{t.$store.state.isAuth?(t.$channel.$fire("user-signed"),e()):t.$toast.error("继续操作前请先登录").then(()=>{window.location.href=t.$alias.sign()})})}else{const e=Object(l.a)();t.$store.commit("SET_USER_TOKEN",e),(yield t.$store.dispatch("initAuth"))?t.$channel.$fire("user-signed"):t.$toast.error("继续操作前请先登录").then(()=>{window.location.href=t.$alias.sign()})}})()}}},277:function(t,e,n){"use strict";n(38),n(67),n(37);var o=n(2),l=n(111);e.a={data:()=>({uploadHeaders:{key:"",token:""},uploadConfig:{max:5},uploadImageLimit:20,imageUploadAccept:["image/jpeg","image/png","image/jpg"].join(", "),imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv/",getUpTokenTimer:0,uploadPending:0,uploadImageTotal:0,uploadImageList:[]}),computed:{currentUser(){return this.$store.state.user},isAuth(){return this.$store.state.isAuth}},watch:{isAuth(t){t&&this.initUpToken()}},mounted(){this.isAuth&&this.initUpToken()},beforeDestroy(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{initUpToken(){this.getUpToken(),this.getUpTokenTimer=setInterval(()=>{this.getUpToken()},18e5)},getUpToken(){var t=this;return Object(o.a)(function*(){let e=t.$cookie.get("UPLOAD-TOKEN");e?t.uploadHeaders.token=t.$cookie.get("UPLOAD-TOKEN"):(e=yield Object(l.b)(t),t.uploadHeaders.token=e,t.$cookie.set("UPLOAD-TOKEN",e,{expires:new Date((new Date).getTime()+3e6)}))})()},handleImageUploadError(t,e){this.uploadImageList.forEach((n,o)=>{n.uid===e.uid&&(this.uploadPending--,this.uploadImageList.splice(o,1),console.log(t))}),this.$toast.error("图片：".concat(e.name," 上传失败"))},handleImageUploadRemove(t){this.uploadImageList.forEach((e,n)=>{e.uid===t.uid&&(this.uploadImageList.splice(n,1),this.uploadImageTotal--)})},handleImageUploadSuccess(t,e){this.uploadImageList.forEach((n,o)=>{n.uid===e.uid&&(this.uploadImageList[o]=Object.assign(n,{data:t.data,status:"success",url:this.$resize("".concat(this.imagePrefix).concat(t.data.url),{width:100})}))}),this.uploadImageTotal++,this.uploadPending--},handleImageUploadExceed(){this.$toast.info("最多还能上传".concat(this.uploadImageLimit-this.uploadImageTotal,"张图片"))},handleImageUploadBefore(t){if(!this.isAuth)return this.$channel.$emit("sign-in"),!1;if(-1===this.imageUploadAccept.split(", ").indexOf(t.type))return this.$toast.error("仅支持上传".concat(this.imageUploadAccept.replace(/image\//g,"").replace(/, /g,"、"),"格式的图片")),!1;if(this.uploadConfig.max&&this.uploadConfig.max<t.size/1024/1024)return this.$toast.error("图片大小不能超过 ".concat(this.uploadConfig.max,"MB!")),!1;return this.uploadHeaders.key=(t=>{let{slug:e,file:n}=t;return"".concat(e,"/").concat((new Date).getTime(),"-").concat(Math.random().toString(36).substring(3,6),".").concat(n.type.split("/").pop())})({slug:this.currentUser.slug,file:t}),this.uploadImageList.push({name:t.name,percentage:0,raw:t,size:t.size,status:"uploading",errMsg:"",uid:t.uid}),this.uploadPending++,!0}}}},281:function(t,e,n){},286:function(t,e,n){"use strict";var o=n(110),l={name:"CreateTagBtn",props:{text:{type:String,default:"分区"},parent:{type:String,required:!0}},methods:{actionCreate(){this.$prompt("请输入".concat(this.text,"名"),"新建".concat(this.text),{confirmButtonText:"提交",cancelButtonText:"取消"}).then(t=>{let{value:e}=t;const n=e.trim();if(n.length>32)return this.$toast.error("名字不能超过32个字");Object(o.b)(this,{name:n,parent_slug:this.parent}).then(data=>{this.$emit("create",data)}).catch(t=>{this.$toast.error(t.message)})}).catch(()=>{})}}},r=n(7),component=Object(r.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("button",{attrs:{type:"button"},on:{click:this.actionCreate}},[e("i",{staticClass:"el-icon-folder-add"}),this._v(" "),e("span",[this._v("新建"+this._s(this.text))])])},[],!1,null,null,null);e.a=component.exports},294:function(t,e,n){},299:function(t,e,n){"use strict";var o=n(281);n.n(o).a},301:function(t,e,n){},302:function(t,e,n){},342:function(t,e,n){"use strict";var o=n(344),l={name:"AreaPicker",components:{"el-cascader":n.n(o).a},props:{value:{type:String,required:!0},placeholder:{type:String,default:"添加作品分区，如约会大作战"},blocked:{type:String,default:""}},data(){return{selected:this.value}},computed:{options(){let t=this.$store.state.global.myTags.filter(t=>"notebook"!==t.slug);return this.blocked&&(t=t.filter(t=>t.slug!==this.blocked)),t}},watch:{value(t){this.selected=t},selected(t){this.$emit("input",t)}},mounted(){this.$channel.$when("user-signed",()=>{this.$store.dispatch("global/getMyTags")})}},r=(n(299),n(7)),component=Object(r.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"area-picker"},[n("p",{staticClass:"tip"},[t._v("\n    提示：只能选择已解禁的分区\n  ")]),t._v(" "),n("el-cascader",{attrs:{placeholder:t.placeholder,options:t.options,props:{value:"slug",label:"name",emitPath:!1},filterable:""},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.node,data=e.data;return[o.isLeaf?[n("span",[t._v(t._s(data.name))])]:[n("span",[t._v(t._s(data.name))]),t._v(" "),n("span",[t._v(" ("+t._s(data.children.length)+") ")])]]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)},[],!1,null,null,null);e.a=component.exports},354:function(t,e,n){"use strict";var o=n(294);n.n(o).a},359:function(t,e,n){"use strict";var o=n(301);n.n(o).a},360:function(t,e,n){"use strict";var o=n(302);n.n(o).a},420:function(t,e,n){"use strict";n.r(e);var o=n(8),l=n(287),r=n.n(l),c=n(272),d=n(277),h=(n(69),n(111)),m={name:"JsonEditor",mixins:[d.a],props:{value:{required:!0,type:Array},slug:{type:String,default:""},time:{type:String,default:""},autofocus:{type:Boolean,default:!1}},data:()=>({editor:null}),mounted(){this.initEditor()},methods:{initEditor(){Promise.all([n.e(45).then(n.t.bind(null,410,7)),n.e(47).then(n.t.bind(null,411,7)),n.e(50).then(n.t.bind(null,412,7)),n.e(44).then(n.t.bind(null,413,7)),n.e(49).then(n.t.bind(null,414,7)),n.e(48).then(n.t.bind(null,415,7)),n.e(43).then(n.t.bind(null,416,7)),n.e(46).then(n.t.bind(null,417,7))]).then(t=>{const e=this;let data={};if(e.slug){const t=e.$cache.get("editor_local_draft-".concat(e.slug));data=t&&t.time>new Date(e.time).getTime()?t:{blocks:e.value,time:Date.now(),version:e.$cache.get("editor_version","2.14.0")}}else e.$cache.has("editor_local_draft")&&(data=e.$cache.get("editor_local_draft"),e.$emit("input",data.blocks));const[n,o,l,r,c,d,m,f]=t.map(t=>t.default),v=new n({data:data,holder:"codex-editor",placeholder:"请输入内容",autofocus:e.autofocus,tools:{embed:{class:f,inlineToolbar:!0,config:{services:{bilibili:{regex:/https?:\/\/www\.bilibili\.com\/video\/av([^\\?\\&]*)/,embedUrl:"//player.bilibili.com/player.html?aid=<%= remote_id %>",html:"<iframe scrolling='no' border='0' frameborder='no' framespacing='0' allowtransparency='true' allowfullscreen='true'></iframe>"}}}},header:{class:o,shortcut:"CMD+SHIFT+H",inlineToolbar:!0},image:{class:d,shortcut:"CMD+SHIFT+P",types:"image/jpeg, image/png, image/jpg",config:{uploader:{uploadByFile:t=>new Promise((n,o)=>{const l=new FormData;l.append("file",t),l.append("token",e.uploadHeaders.token),Object(h.c)(e,l).then(data=>{data.url="https://m1.calibur.tv/".concat(data.url),n({success:1,file:data})}).catch(o)})}}},link:{class:c,shortcut:"CMD+SHIFT+L",config:{endpoint:"".concat("https://api.calibur.tv/","v1/pin/editor/fetch_site")}},delimiter:r,list:{class:l,shortcut:"CMD+SHIFT+U",inlineToolbar:!0},checklist:{class:m,inlineToolbar:!0}},onChange:()=>{e.handleSave()}});v.isReady.then(()=>{this.editor=v,this.bindSaveEvent()}).catch(t=>{this.$toast.error("编辑器初始化失败：".concat(t))})})},bindSaveEvent(){document.addEventListener("keydown",t=>{83===t.keyCode&&(t.ctrlKey||t.metaKey)&&(t.stopPropagation(),t.preventDefault(),this.handleSave())},!1)},handleSave(){this.editor&&this.editor.save().then(t=>{const e=this.slug?"editor_local_draft-".concat(this.slug):"editor_local_draft";this.$cache.set(e,t),this.$cache.set("editor_version",t.version),this.value&&this.$emit("input",t.blocks),this.$emit("save")}).catch(()=>{this.$toast.error("保存失败")})}}},f=(n(354),n(7)),v=Object(f.a)(m,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"editor-wrap"},[e("div",{staticClass:"mousetrap",attrs:{id:"codex-editor"}})])}],!1,null,null,null).exports,_=n(342),$=n(347),k=n.n($),w=n(300),y=n.n(w),T=n(286),x={name:"NotebookPicker",components:{"el-select":y.a,"el-option":k.a,CreateTagBtn:T.a},props:{value:{type:String,required:!0}},data(){return{selected:this.value,newTags:[]}},computed:{options(){return this.newTags.concat(this.$store.state.global.myTags.filter(t=>"notebook"===t.slug)[0].children)}},watch:{selected(t){this.$emit("input",t)},value(t){this.selected=t},"options.length"(){this.selected||(this.selected=this.options[0].slug)}},mounted(){this.$channel.$when("user-signed",()=>{this.$store.dispatch("global/getMyTags")})},methods:{handleCreate(data){this.newTags.unshift(data),this.selected=data}}},C=(n(359),Object(f.a)(x,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"notebook-picker"},[n("div",{staticClass:"new-btn"},[n("create-tag-btn",{attrs:{text:"专栏",parent:"uh4f"},on:{create:t.handleCreate}})],1),t._v(" "),n("div",{staticClass:"selection"},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},t._l(t.options,function(t){return n("el-option",{key:t.slug,attrs:{label:t.name,value:t.slug}})}),1)],1)])},[],!1,null,null,null).exports),U={name:"Wander",layout:"web",components:{Editor:v,AreaPicker:_.a,NotebookPicker:C,"el-upload":r.a},mixins:[c.a,d.a],data:()=>({slug:"",title:{banner:null,text:""},content:[],notebook:"",area:"ugf6",loading:!1,last_edit_at:"",visit_type:0}),asyncData(t){let{app:e,error:n,query:l}=t;const r=l.slug;if(r)return e.$axios.$get("v1/pin/update/content",{params:{slug:r}}).then(data=>(data.area=data.area.slug,data.notebook=data.notebook.slug,Object(o.a)({},data))).catch(n)},mounted(){this.$cache.has("editor_local_draft_title-".concat(this.slug))&&(this.title=this.$cache.get("editor_local_draft_title-".concat(this.slug)))},methods:{customImageUploadSuccess(t,e){this.handleImageUploadSuccess(t,e);const n=t.data;n.width<960||n.height<540?this.handleImageUploadRemove(e):(this.title.banner=n,this.saveTitle())},onEditorSave(){this.saveTitle()},saveTitle(){this.$cache.set("editor_local_draft_title-".concat(this.slug),this.title)},deleteBanner(){this.title.banner=null,this.saveTitle()},preValidate(){return!!this.loading||(this.title.text?this.content.length?this.area?this.notebook?(this.loading=!0,!1):(this.$toast.info("请选择专栏"),!0):(this.$toast.info("请选择分区"),!0):(this.$toast.info("内容不能为空"),!0):(this.$toast.info("标题不能为空"),!0))},actionCreate(t){this.preValidate()||this.$axios.$post("v1/pin/create/story",{area:this.area,notebook:this.notebook,content:[{type:"title",data:this.title}].concat(this.content),publish:t}).then(t=>{this.$cache.remove("editor_local_draft_title-".concat(this.slug)),this.$cache.remove("editor_local_draft"),window.location=this.$alias.pin(t)}).catch(t=>{this.$toast.error(t.message),this.loading=!1})},actionUpdate(t){if(this.preValidate())return;const{slug:e}=this;this.$axios.$post("v1/pin/update/story",{slug:e,area:this.area,notebook:this.notebook,content:[{type:"title",data:this.title}].concat(this.content),publish:t}).then(t=>{this.$cache.remove("editor_local_draft_title-".concat(e)),this.$cache.remove("editor_local_draft-".concat(e)),window.location=this.$alias.pin(t)}).catch(t=>{this.$toast.error(t.message),this.loading=!1})},actionDelete(){this.slug?this.$confirm("删除后不可恢复，确认要删除吗？","提示").then(()=>{this.loading||(this.loading=!0,this.$axios.$post("v1/pin/delete",{slug:this.slug}).then(()=>{this.$toast.success("删除成功").then(()=>{window.location="/"}).catch(t=>{this.$toast.error(t.message),this.loading=!1})}))}).catch(()=>{}):(this.content.length||this.title.text.length||this.title.banner)&&(this.$cache.remove("editor_local_draft_title-".concat(this.slug)),this.$cache.remove("editor_local_draft"),this.$toast.success("删除成功").then(()=>{window.location.reload()}))}}},I=(n(360),Object(f.a)(U,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"wander"}},[n("div",{staticClass:"wrap"},[n("div",{staticClass:"banner"},[n("el-upload",{staticClass:"uploader",attrs:{drag:"",action:t.imageUploadAction,accept:t.imageUploadAccept,data:t.uploadHeaders,"before-upload":t.handleImageUploadBefore,"on-success":t.customImageUploadSuccess,"on-error":t.handleImageUploadError}},[n("div",{staticClass:"el-upload-tip",attrs:{slot:"tip"},slot:"tip"},[n("i",{staticClass:"el-icon-picture"}),t._v(" "),n("div",[t._v("请添加封面图（选填）")]),t._v(" "),n("p",[t._v("支持8MB内的JPG／JPEG／PNG格式的高清图片"),n("br"),t._v("（建议大于960*540像素）")])])]),t._v(" "),t.title.banner?[n("img",{staticClass:"banner",attrs:{src:t.$resize(t.title.banner.url,{width:660})}}),t._v(" "),n("div",{staticClass:"tool"},[n("i",{staticClass:"el-icon-delete",on:{click:t.deleteBanner}})])]:t._e()],2),t._v(" "),n("div",{staticClass:"title"},[n("el-input",{attrs:{"show-word-limit":!0,autosize:{minRows:1},type:"textarea",resize:"none",placeholder:"请输入标题（建议30字以内）",maxlength:"40"},model:{value:t.title.text,callback:function(e){t.$set(t.title,"text",e)},expression:"title.text"}})],1),t._v(" "),n("editor",{attrs:{slug:t.slug,time:t.last_edit_at},on:{save:t.onEditorSave},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),t._v(" "),n("el-form",{staticClass:"footer",attrs:{"label-position":"top","label-width":"80px"}},[n("el-form-item",{attrs:{label:"选择分区"}},[n("area-picker",{model:{value:t.area,callback:function(e){t.area=e},expression:"area"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"选择专栏"}},[n("notebook-picker",{model:{value:t.notebook,callback:function(e){t.notebook=e},expression:"notebook"}})],1),t._v(" "),n("el-form-item",{staticClass:"button-wrap"},[t.slug?[n("el-button",{attrs:{loading:t.loading,type:"success",round:""},on:{click:function(e){return t.actionUpdate(!0)}}},[t._v("\n            发布更新\n          ")]),t._v(" "),1===t.visit_type?n("el-button",{attrs:{loading:t.loading,round:"",plain:"",type:"warning"},on:{click:function(e){return t.actionUpdate(!1)}}},[t._v("\n            存草稿\n          ")]):t._e(),t._v(" "),n("el-button",{attrs:{loading:t.loading,type:"primary",round:"",plain:""},on:{click:t.actionDelete}},[t._v("\n            删除文章\n          ")])]:[n("el-button",{attrs:{loading:t.loading,type:"success",round:""},on:{click:function(e){return t.actionCreate(!0)}}},[t._v("\n            发表文章\n          ")]),t._v(" "),n("el-button",{attrs:{loading:t.loading,round:"",plain:"",type:"warning"},on:{click:function(e){return t.actionCreate(!1)}}},[t._v("\n            存草稿\n          ")]),t._v(" "),n("el-button",{attrs:{loading:t.loading,type:"primary",round:"",plain:""},on:{click:t.actionDelete}},[t._v("\n            删除文章\n          ")])]],2)],1)],1)])},[],!1,null,null,null));e.default=I.exports}}]);