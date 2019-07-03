(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{321:function(t,e,n){"use strict";n(19);var o=n(2),r=n(59);e.a={beforeMount:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(){var e,n,o=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.$store.state.logging){t.next=4;break}e=this.$watch("$store.state.logging",function(){o.$store.state.isAuth?(o.$channel.$fire("user-signed"),e()):o.$toast.error("继续操作前请先登录").then(function(){window.location.href=o.$alias.sign()})}),t.next=10;break;case 4:return n=Object(r.a)(),this.$store.commit("SET_USER_TOKEN",n),t.next=8,this.$store.dispatch("initAuth");case 8:t.sent?this.$channel.$fire("user-signed"):this.$toast.error("继续操作前请先登录").then(function(){window.location.href=o.$alias.sign()});case 10:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},326:function(t,e,n){"use strict";n(57),n(58),n(6),n(92),n(55),n(32),n(19);var o=n(2),r=n(138);e.a={data:function(){return{uploadHeaders:{key:"",token:""},uploadConfig:{max:5},uploadImageLimit:20,imageUploadAccept:["image/jpeg","image/png","image/jpg"].join(", "),imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv/",getUpTokenTimer:0,uploadPending:0,uploadImageTotal:0,uploadImageList:[]}},computed:{currentUser:function(){return this.$store.state.user},isAuth:function(){return this.$store.state.isAuth}},mounted:function(){var t=this;this.$channel.$when("user-signed",function(){t.initUpToken()})},beforeDestroy:function(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{initUpToken:function(){var t=this;this.getUpToken(),this.getUpTokenTimer=setInterval(function(){t.getUpToken()},18e5)},getUpToken:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=this.$cookie.get("UPLOAD-TOKEN"))){t.next=4;break}return this.uploadHeaders.token=this.$cookie.get("UPLOAD-TOKEN"),t.abrupt("return");case 4:return t.next=6,Object(r.b)(this);case 6:e=t.sent,this.uploadHeaders.token=e,this.$cookie.set("UPLOAD-TOKEN",e,{expires:new Date((new Date).getTime()+3e6)});case 9:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),handleImageUploadError:function(t,e){var n=this;this.uploadImageList.forEach(function(o,r){o.uid===e.uid&&(n.uploadPending--,n.uploadImageList.splice(r,1),console.log(t))}),this.$toast.error("图片：".concat(e.name," 上传失败"))},handleImageUploadRemove:function(t){var e=this;this.uploadImageList.forEach(function(n,o){n.uid===t.uid&&(e.uploadImageList.splice(o,1),e.uploadImageTotal--)})},handleImageUploadSuccess:function(t,e){var n=this;this.uploadImageList.forEach(function(o,r){o.uid===e.uid&&(n.uploadImageList[r]=Object.assign(o,{data:t.data,status:"success",url:n.$resize("".concat(n.imagePrefix).concat(t.data.url),{width:100})}))}),this.uploadImageTotal++,this.uploadPending--},handleImageUploadExceed:function(){this.$toast.info("最多还能上传".concat(this.uploadImageLimit-this.uploadImageTotal,"张图片"))},handleImageUploadBefore:function(t){if(!this.isAuth)return this.$channel.$emit("sign-in"),!1;if(-1===this.imageUploadAccept.split(", ").indexOf(t.type))return this.$toast.error("仅支持上传".concat(this.imageUploadAccept.replace(/image\//g,"").replace(/, /g,"、"),"格式的图片")),!1;if(this.uploadConfig.max&&this.uploadConfig.max<t.size/1024/1024)return this.$toast.error("图片大小不能超过 ".concat(this.uploadConfig.max,"MB!")),!1;return this.uploadHeaders.key=function(t){var e=t.slug,n=t.file;return"".concat(e,"/").concat((new Date).getTime(),"-").concat(Math.random().toString(36).substring(3,6),".").concat(n.type.split("/").pop())}({slug:this.currentUser.slug,file:t}),this.uploadImageList.push({name:t.name,percentage:0,raw:t,size:t.size,status:"uploading",errMsg:"",uid:t.uid}),this.uploadPending++,!0}}}},327:function(t,e,n){},333:function(t,e,n){"use strict";var o=n(137),r={name:"CreateTagBtn",props:{text:{type:String,default:"分区"},parent:{type:String,required:!0}},methods:{actionCreate:function(){var t=this;this.$prompt("请输入".concat(this.text,"名"),"新建".concat(this.text),{confirmButtonText:"提交",cancelButtonText:"取消"}).then(function(e){var n=e.value.trim();if(n.length>32)return t.$toast.error("名字不能超过32个字");Object(o.b)(t,{name:n,parent_slug:t.parent}).then(function(data){t.$emit("create",data)}).catch(function(e){t.$toast.error(e.message)})}).catch(function(){})}}},c=n(15),component=Object(c.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("button",{attrs:{type:"button"},on:{click:this.actionCreate}},[e("i",{staticClass:"el-icon-folder-add"}),this._v(" "),e("span",[this._v("新建"+this._s(this.text))])])},[],!1,null,null,null);e.a=component.exports},341:function(t,e,n){},346:function(t,e,n){"use strict";var o=n(327);n.n(o).a},348:function(t,e,n){},349:function(t,e,n){},392:function(t,e,n){"use strict";var o=n(394),r={name:"AreaPicker",components:{"el-cascader":n.n(o).a},props:{value:{type:String,required:!0},placeholder:{type:String,default:"添加作品分区，如约会大作战"},blocked:{type:String,default:""}},data:function(){return{selected:this.value}},computed:{options:function(){var t=this,e=this.$store.state.global.myTags.filter(function(t){return"notebook"!==t.slug});return this.blocked&&(e=e.filter(function(e){return e.slug!==t.blocked})),e}},watch:{value:function(t){this.selected=t},selected:function(t){this.$emit("input",t)}},mounted:function(){var t=this;this.$channel.$when("user-signed",function(){t.$store.dispatch("global/getMyTags")})}},c=(n(346),n(15)),component=Object(c.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"area-picker"},[n("p",{staticClass:"tip"},[t._v("\n    提示：只能选择已解禁的分区\n  ")]),t._v(" "),n("el-cascader",{attrs:{placeholder:t.placeholder,options:t.options,props:{value:"slug",label:"name",emitPath:!1},filterable:""},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.node,data=e.data;return[o.isLeaf?[n("span",[t._v(t._s(data.name))])]:[n("span",[t._v(t._s(data.name))]),t._v(" "),n("span",[t._v(" ("+t._s(data.children.length)+") ")])]]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)},[],!1,null,null,null);e.a=component.exports},413:function(t,e,n){"use strict";var o=n(341);n.n(o).a},418:function(t,e,n){"use strict";var o=n(348);n.n(o).a},419:function(t,e,n){"use strict";var o=n(349);n.n(o).a},493:function(t,e,n){"use strict";n.r(e);var o=n(17),r=n(334),c=n.n(r),l=n(321),d=n(326),h=(n(92),n(146),n(55),n(52)),f=(n(33),n(6),n(141),n(138)),m={name:"JsonEditor",mixins:[d.a],props:{value:{required:!0,type:Array},slug:{type:String,default:""},time:{type:String,default:""},autofocus:{type:Boolean,default:!1}},data:function(){return{editor:null}},mounted:function(){this.initEditor()},methods:{initEditor:function(){var t=this;Promise.all([n.e(47).then(n.t.bind(null,482,7)),n.e(49).then(n.t.bind(null,483,7)),n.e(52).then(n.t.bind(null,484,7)),n.e(46).then(n.t.bind(null,485,7)),n.e(51).then(n.t.bind(null,486,7)),n.e(50).then(n.t.bind(null,487,7)),n.e(45).then(n.t.bind(null,488,7)),n.e(48).then(n.t.bind(null,489,7))]).then(function(e){var n=t,data={};if(n.slug){var o=n.$cache.get("editor_local_draft-".concat(n.slug));data=o&&o.time>new Date(n.time).getTime()?o:{blocks:n.value,time:Date.now(),version:n.$cache.get("editor_version","2.14.0")}}else n.$cache.has("editor_local_draft")&&(data=n.$cache.get("editor_local_draft"),n.$emit("input",data.blocks));var r=e.map(function(t){return t.default}),c=Object(h.a)(r,8),l=c[0],d=c[1],m=c[2],v=c[3],_=c[4],$=c[5],k=c[6],w=c[7],y=new l({data:n.decodeData(data||{}),holder:"codex-editor",placeholder:"请输入内容",autofocus:n.autofocus,tools:{video:{class:w,inlineToolbar:!0,config:{services:{bilibili:{regex:/https?:\/\/www\.bilibili\.com\/video\/av([\w\W]*)/,embedUrl:"//player.bilibili.com/player.html?aid=<%= remote_id %>",html:"<iframe width='100%' height='350' scrolling='no' border='0' frameborder='no' framespacing='0' allowtransparency='true' allowfullscreen='true'></iframe>",id:function(t){return t[0].split("/")[0]}},bilih5:{regex:/https?:\/\/m\.bilibili\.com\/video\/av([\w\W]*)/,embedUrl:"//player.bilibili.com/player.html?aid=<%= remote_id %>",html:"<iframe width='100%' height='350' scrolling='no' border='0' frameborder='no' framespacing='0' allowtransparency='true' allowfullscreen='true'></iframe>",id:function(t){return t[0].split(".")[0]}},netease:{regex:/https?:\/\/music\.163\.com\/#\/song\?id=([\w\W]*)/,embedUrl:"//music.163.com/outchain/player?type=2&height=66&id=<%= remote_id %>",html:"<iframe frameborder='no' border='0' marginwidth='0' marginheight='0' width='330' height='86'></iframe>",id:function(t){return t[0].split("/")[0]}},neteaseh5:{regex:/https?:\/\/music\.163\.com\/m\/song\?id=([\w\W]*)/,embedUrl:"//music.163.com/outchain/player?type=2&height=66&id=<%= remote_id %>",html:"<iframe frameborder='no' border='0' marginwidth='0' marginheight='0' width='330' height='86'></iframe>",id:function(t){return t[0].split("/")[0]}}}}},header:{class:d,shortcut:"CMD+SHIFT+H",inlineToolbar:!0},image:{class:$,shortcut:"CMD+SHIFT+P",types:"image/jpeg, image/png, image/jpg",config:{uploader:{uploadByFile:function(t){return new Promise(function(e,o){var r=new FormData;r.append("file",t),r.append("token",n.uploadHeaders.token),Object(f.c)(n,r).then(function(data){data.url="https://m1.calibur.tv/".concat(data.url),e({success:1,file:data})}).catch(o)})}}}},link:{class:_,shortcut:"CMD+SHIFT+L",config:{endpoint:"".concat("https://api.calibur.tv/","v1/pin/editor/fetch_site")}},delimiter:v,list:{class:m,shortcut:"CMD+SHIFT+U",inlineToolbar:!0},checklist:{class:k,inlineToolbar:!0}},onChange:function(){n.handleSave()}});y.isReady.then(function(){t.editor=y,t.bindSaveEvent()}).catch(function(e){t.$toast.error("编辑器初始化失败：".concat(e))})})},bindSaveEvent:function(){var t=this;document.addEventListener("keydown",function(e){83===e.keyCode&&(e.ctrlKey||e.metaKey)&&(e.stopPropagation(),e.preventDefault(),t.handleSave())},!1)},handleSave:function(){var t=this;this.editor&&this.editor.save().then(function(e){var n=t.encodeData(e),o=t.slug?"editor_local_draft-".concat(t.slug):"editor_local_draft";t.$cache.set(o,n),t.$cache.set("editor_version",n.version),t.value&&t.$emit("input",n.blocks),t.$emit("save")}).catch(function(){t.$toast.error("保存失败")})},decodeData:function(t){var e=t.version,n=t.blocks,time=t.time;return n?(n.forEach(function(t,e){"music"===t.type&&(n[e].type="video")}),{version:e,blocks:n,time:time}):null},encodeData:function(t){var e=t.version,n=t.blocks,time=t.time;return n.forEach(function(t,e){"video"===t.type&&t.data.service.startsWith("netease")&&(n[e].type="music",n[e].data.embed=n[e].data.embed.replace(/&amp;/g,"&"))}),{version:e,blocks:n,time:time}}}},v=(n(413),n(15)),_=Object(v.a)(m,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"editor-wrap"},[e("div",{staticClass:"mousetrap",attrs:{id:"codex-editor"}})])}],!1,null,null,null).exports,$=n(392),k=n(397),w=n.n(k),y=n(347),x=n.n(y),T=n(333),U={name:"NotebookPicker",components:{"el-select":x.a,"el-option":w.a,CreateTagBtn:T.a},props:{value:{type:String,required:!0}},data:function(){return{selected:this.value,newTags:[]}},computed:{options:function(){return this.newTags.concat(this.$store.state.global.myTags.filter(function(t){return"notebook"===t.slug})[0].children)}},watch:{selected:function(t){this.$emit("input",t)},value:function(t){this.selected=t},"options.length":function(){this.selected||(this.selected=this.options[0].slug)}},mounted:function(){var t=this;this.$channel.$when("user-signed",function(){t.$store.dispatch("global/getMyTags")})},methods:{handleCreate:function(data){this.newTags.unshift(data),this.selected=data}}},C=(n(418),Object(v.a)(U,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"notebook-picker"},[n("div",{staticClass:"new-btn"},[n("create-tag-btn",{attrs:{text:"专栏",parent:"uh4f"},on:{create:t.handleCreate}})],1),t._v(" "),n("div",{staticClass:"selection"},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},t._l(t.options,function(t){return n("el-option",{key:t.slug,attrs:{label:t.name,value:t.slug}})}),1)],1)])},[],!1,null,null,null).exports),I={name:"Wander",layout:"web",components:{Editor:_,AreaPicker:$.a,NotebookPicker:C,"el-upload":c.a},mixins:[l.a,d.a],data:function(){return{slug:"",title:{banner:null,text:""},content:[],notebook:"",area:"ugf6",loading:!1,last_edit_at:"",visit_type:0}},asyncData:function(t){var e=t.app,n=t.error,r=t.query.slug;if(r)return e.$axios.$get("v1/pin/update/content",{params:{slug:r}}).then(function(data){return data.area=data.area.slug,data.notebook=data.notebook.slug,Object(o.a)({},data)}).catch(n)},mounted:function(){this.$cache.has("editor_local_draft_title-".concat(this.slug))&&(this.title=this.$cache.get("editor_local_draft_title-".concat(this.slug)))},methods:{customImageUploadSuccess:function(t,e){this.handleImageUploadSuccess(t,e);var n=t.data;n.width<960||n.height<540?this.handleImageUploadRemove(e):(this.title.banner=n,this.saveTitle())},onEditorSave:function(){this.saveTitle()},saveTitle:function(){this.$cache.set("editor_local_draft_title-".concat(this.slug),this.title)},deleteBanner:function(){this.title.banner=null,this.saveTitle()},preValidate:function(){return!!this.loading||(this.title.text?this.content.length?this.area?this.notebook?(this.loading=!0,!1):(this.$toast.info("请选择专栏"),!0):(this.$toast.info("请选择分区"),!0):(this.$toast.info("内容不能为空"),!0):(this.$toast.info("标题不能为空"),!0))},actionCreate:function(t){var e=this;this.preValidate()||this.$axios.$post("v1/pin/create/story",{area:this.area,notebook:this.notebook,content:[{type:"title",data:this.title}].concat(this.content),publish:t}).then(function(t){e.$cache.remove("editor_local_draft_title-".concat(e.slug)),e.$cache.remove("editor_local_draft"),window.location=e.$alias.pin(t)}).catch(function(t){e.$toast.error(t.message),e.loading=!1})},actionUpdate:function(t){var e=this;if(!this.preValidate()){var n=this.slug;this.$axios.$post("v1/pin/update/story",{slug:n,area:this.area,notebook:this.notebook,content:[{type:"title",data:this.title}].concat(this.content),publish:t}).then(function(t){e.$cache.remove("editor_local_draft_title-".concat(n)),e.$cache.remove("editor_local_draft-".concat(n)),window.location=e.$alias.pin(t)}).catch(function(t){e.$toast.error(t.message),e.loading=!1})}},actionDelete:function(){var t=this,e=function(){(t.content.length||t.title.text.length||t.title.banner)&&(t.$cache.remove("editor_local_draft_title-".concat(t.slug)),t.$cache.remove("editor_local_draft"),t.$toast.success("删除成功").then(function(){window.location.reload()}))};this.slug?this.$confirm("删除后不可恢复，确认要删除吗？","提示").then(function(){t.loading||(t.loading=!0,t.$axios.$post("v1/pin/delete",{slug:t.slug}).then(function(){t.$toast.success("删除成功").then(function(){e(),window.location="/"})}).catch(function(e){t.$toast.error(e.message),t.loading=!1}))}).catch(function(){}):e()}}},E=(n(419),Object(v.a)(I,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"wander"}},[n("div",{staticClass:"wrap"},[n("div",{staticClass:"banner"},[n("el-upload",{staticClass:"uploader",attrs:{drag:"",action:t.imageUploadAction,accept:t.imageUploadAccept,data:t.uploadHeaders,"before-upload":t.handleImageUploadBefore,"on-success":t.customImageUploadSuccess,"on-error":t.handleImageUploadError}},[n("div",{staticClass:"el-upload-tip",attrs:{slot:"tip"},slot:"tip"},[n("i",{staticClass:"el-icon-picture"}),t._v(" "),n("div",[t._v("请添加封面图（选填）")]),t._v(" "),n("p",[t._v("支持8MB内的JPG／JPEG／PNG格式的高清图片"),n("br"),t._v("（建议大于960*540像素）")])])]),t._v(" "),t.title.banner?[n("img",{staticClass:"banner",attrs:{src:t.$resize(t.title.banner.url,{width:660})}}),t._v(" "),n("div",{staticClass:"tool"},[n("i",{staticClass:"el-icon-delete",on:{click:t.deleteBanner}})])]:t._e()],2),t._v(" "),n("div",{staticClass:"title"},[n("el-input",{attrs:{"show-word-limit":!0,autosize:{minRows:1},type:"textarea",resize:"none",placeholder:"请输入标题（建议30字以内）",maxlength:"40"},model:{value:t.title.text,callback:function(e){t.$set(t.title,"text",e)},expression:"title.text"}})],1),t._v(" "),n("editor",{attrs:{slug:t.slug,time:t.last_edit_at},on:{save:t.onEditorSave},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),t._v(" "),n("el-form",{staticClass:"footer",attrs:{"label-position":"top","label-width":"80px"}},[n("el-form-item",{attrs:{label:"选择分区"}},[n("area-picker",{model:{value:t.area,callback:function(e){t.area=e},expression:"area"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"选择专栏"}},[n("notebook-picker",{model:{value:t.notebook,callback:function(e){t.notebook=e},expression:"notebook"}})],1),t._v(" "),n("el-form-item",{staticClass:"button-wrap"},[t.slug?[n("el-button",{attrs:{loading:t.loading,type:"success",round:""},on:{click:function(e){return t.actionUpdate(!0)}}},[t._v("\n            发布更新\n          ")]),t._v(" "),1===t.visit_type?n("el-button",{attrs:{loading:t.loading,round:"",plain:"",type:"warning"},on:{click:function(e){return t.actionUpdate(!1)}}},[t._v("\n            存草稿\n          ")]):t._e(),t._v(" "),n("el-button",{attrs:{loading:t.loading,type:"primary",round:"",plain:""},on:{click:t.actionDelete}},[t._v("\n            删除文章\n          ")])]:[n("el-button",{attrs:{loading:t.loading,type:"success",round:""},on:{click:function(e){return t.actionCreate(!0)}}},[t._v("\n            发表文章\n          ")]),t._v(" "),n("el-button",{attrs:{loading:t.loading,round:"",plain:"",type:"warning"},on:{click:function(e){return t.actionCreate(!1)}}},[t._v("\n            存草稿\n          ")]),t._v(" "),n("el-button",{attrs:{loading:t.loading,type:"primary",round:"",plain:""},on:{click:t.actionDelete}},[t._v("\n            删除文章\n          ")])]],2)],1)],1)])},[],!1,null,null,null));e.default=E.exports}}]);