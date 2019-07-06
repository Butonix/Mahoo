(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{320:function(t,e,n){"use strict";n(57),n(58),n(6),n(92),n(56),n(33),n(19);var o=n(2),r=n(137);e.a={data:function(){return{uploadHeaders:{key:"",token:""},uploadConfig:{max:5},uploadImageLimit:20,imageUploadAccept:["image/jpeg","image/png","image/jpg"].join(", "),imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv/",getUpTokenTimer:0,uploadPending:0,uploadImageTotal:0,uploadImageList:[]}},computed:{currentUser:function(){return this.$store.state.user},isAuth:function(){return this.$store.state.isAuth}},mounted:function(){var t=this;this.$channel.$when("user-signed",function(){t.initUpToken()})},beforeDestroy:function(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{initUpToken:function(){var t=this;this.getUpToken(),this.getUpTokenTimer=setInterval(function(){t.getUpToken()},18e5)},getUpToken:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=this.$cookie.get("UPLOAD-TOKEN"))){t.next=4;break}return this.uploadHeaders.token=this.$cookie.get("UPLOAD-TOKEN"),t.abrupt("return");case 4:return t.next=6,Object(r.b)(this);case 6:e=t.sent,this.uploadHeaders.token=e,this.$cookie.set("UPLOAD-TOKEN",e,{expires:new Date((new Date).getTime()+3e6)});case 9:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),handleImageUploadError:function(t,e){var n=this;this.uploadImageList.forEach(function(o,r){o.uid===e.uid&&(n.uploadPending--,n.uploadImageList.splice(r,1),console.log(t))}),this.$toast.error("图片：".concat(e.name," 上传失败"))},handleImageUploadRemove:function(t){var e=this;this.uploadImageList.forEach(function(n,o){n.uid===t.uid&&(e.uploadImageList.splice(o,1),e.uploadImageTotal--)})},handleImageUploadSuccess:function(t,e){var n=this;this.uploadImageList.forEach(function(o,r){o.uid===e.uid&&(n.uploadImageList[r]=Object.assign(o,{data:t.data,status:"success",url:n.$resize("".concat(n.imagePrefix).concat(t.data.url),{width:100})}))}),this.uploadImageTotal++,this.uploadPending--},handleImageUploadExceed:function(){this.$toast.info("最多还能上传".concat(this.uploadImageLimit-this.uploadImageTotal,"张图片"))},handleImageUploadBefore:function(t){if(!this.isAuth)return this.$channel.$emit("sign-in"),!1;if(-1===this.imageUploadAccept.split(", ").indexOf(t.type))return this.$toast.error("仅支持上传".concat(this.imageUploadAccept.replace(/image\//g,"").replace(/, /g,"、"),"格式的图片")),!1;if(this.uploadConfig.max&&this.uploadConfig.max<t.size/1024/1024)return this.$toast.error("图片大小不能超过 ".concat(this.uploadConfig.max,"MB!")),!1;return this.uploadHeaders.key=function(t){var e=t.slug,n=t.file;return"".concat(e,"/").concat((new Date).getTime(),"-").concat(Math.random().toString(36).substring(3,6),".").concat(n.type.split("/").pop())}({slug:this.currentUser.slug,file:t}),this.uploadImageList.push({name:t.name,percentage:0,raw:t,size:t.size,status:"uploading",errMsg:"",uid:t.uid}),this.uploadPending++,!0},resetUploaderStatus:function(){this.uploadImageList=[],this.uploadImageTotal=0,this.uploadPending=0}}}},325:function(t,e,n){"use strict";n(19);var o=n(2),r={name:"UserFollowBtn",props:{slug:{type:String,required:!0}},computed:{state:function(){return this.$store.getters["social/get"]("user-follow",this.slug)},isAuth:function(){return this.$store.state.isAuth},isMine:function(){return this.$store.getters.isMine(this.slug)},btnText:function(){return this.isAuth&&this.state?this.isMine?"自己":this.state.is_following&&this.state.is_followed_by?"互相关注":this.state.is_following?"已关注":this.state.is_followed_by?"关注了我":"关注":"关注"}},methods:{handleFollowClick:function(){var t=this;this.isAuth?this.isMine?this.$toast.info("不能关注自己"):this.state&&!this.state.is_following_loading&&("关注了我"!==this.btnText&&"关注"!==this.btnText?this.$confirm("确定要取消关注吗？","提示").then(function(){return t.submit()}).catch(function(){}):this.submit()):this.$channel.$emit("sign-in")},submit:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(){var data;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("social/toggle",{type:"user-follow",slug:this.slug,action:"is_following",params:{target_slug:this.slug,action_slug:this.$store.state.user.slug,target_type:"user",action_type:"user",method_type:"follow"}});case 2:(data=t.sent).success&&this.$emit("change",data.result);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},l=n(15),component=Object(l.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return this.state?e("el-button",{staticClass:"user-fff-btn",attrs:{loading:this.state.is_following_loading,round:"",type:"primary",plain:"关注"!==this.btnText},on:{click:this.handleFollowClick}},[e("span",{domProps:{textContent:this._s(this.btnText)}})]):this._e()},[],!1,null,null,null);e.a=component.exports},366:function(t,e,n){},367:function(t,e,n){},368:function(t,e,n){},369:function(t,e,n){},370:function(t,e,n){},441:function(t,e,n){"use strict";var o=n(366);n.n(o).a},443:function(t,e,n){"use strict";var o=n(367);n.n(o).a},444:function(t,e,n){"use strict";var o=n(368);n.n(o).a},445:function(t,e,n){"use strict";var o=n(369);n.n(o).a},446:function(t,e,n){"use strict";var o=n(370);n.n(o).a},500:function(t,e,n){"use strict";n.r(e);n(34),n(6),n(60);var o=n(17),r=n(394),l=(n(193),n(317)),c=n(319),m=n(325),d={name:"ContentAuthor",components:{UserAvatar:l.a,UserNickname:c.a,UserFollowBtn:m.a},props:{user:{type:Object,required:!0},size:{type:Number,default:40},relation:{type:String,default:"unknown"}},computed:{isMine:function(){return this.$store.getters.isMine(this.user.slug)}}},h=(n(441),n(15)),f=Object(h.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-author clearfix"},[n("div",{staticClass:"avatar-area"},[n("UserAvatar",{attrs:{user:t.user,size:t.size}})],1),t._v(" "),n("div",{staticClass:"content-area"},[n("UserNickname",{attrs:{user:t.user}}),t._v(" "),n("div",{staticClass:"content-meta oneline"},[t._t("intro")],2)],1),t._v(" "),n("div",{staticClass:"tail-area"},[t.isMine?t._t("mine"):n("UserFollowBtn",{attrs:{slug:t.user.slug},model:{value:t.relation,callback:function(e){t.relation=e},expression:"relation"}})],2)])},[],!1,null,null,null).exports,v=n(442),_=n.n(v),C=n(329),$=n.n(C),k=n(320),x={name:"CreateCommentForm",components:{ElUpload:$.a},mixins:[k.a],props:{pinSlug:{type:String,required:!0},commentId:{type:[String,Number],default:""},showAvatar:{type:Boolean,default:!0},autofocus:{type:Boolean,default:!1},placeholder:{type:String,default:"请自觉遵守互联网相关的政策法规，严禁发布色情、暴力、反动的言论"}},data:function(){return{content:"",loading:!1}},computed:{avatar:function(){return this.$store.state.user.avatar||"default-avatar"}},methods:{submit:function(){var t=this;this.$store.state.isAuth||this.$channel.$emit("sign-in"),this.content.trim().length<2?this.$toast.error("内容至少要两个字"):this.loading||(this.loading=!0,this.$axios.$post("v1/comment/create",{content:this.content.trim(),images:this.uploadImageList.map(function(t){return t.data}),pin_slug:this.pinSlug,comment_id:this.commentId}).then(function(data){t.$emit("submit",data),t.content="",t.resetUploaderStatus(),t.$toast.success("评论成功"),t.loading=!1}).catch(function(e){t.$toast.error(e.message),t.loading=!1}))}}},w=(n(443),Object(h.a)(x,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"create-comment-form"},[t.showAvatar?n("div",{staticClass:"avatar"},[n("VImg",{attrs:{src:t.avatar,radius:"50%",width:"40",height:"40"}})],1):t._e(),t._v(" "),n("button",{staticClass:"submit-btn",on:{click:t.submit}},[t._v("\n    点击"),n("br"),t._v("发送\n  ")]),t._v(" "),n("div",{staticClass:"input-wrap"},[n("ElInput",{attrs:{type:"textarea",autosize:{minRows:3},autofocus:t.autofocus,"show-word-limit":!0,maxlength:1e3,placeholder:t.placeholder},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.metaKey?(e.preventDefault(),t.submit(e)):null}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),t._v(" "),n("ElUpload",{attrs:{multiple:"","list-type":"picture-card",action:t.imageUploadAction,limit:9,data:t.uploadHeaders,"file-list":t.uploadImageList,accept:t.imageUploadAccept,"before-upload":t.handleImageUploadBefore,"on-success":t.handleImageUploadSuccess,"on-error":t.handleImageUploadError,"on-remove":t.handleImageUploadRemove,"on-exceed":t.handleImageUploadExceed}},[n("i",{staticClass:"el-icon-picture-outline-round"})])],1)])},[],!1,null,null,null).exports),y={name:"CommentItem",components:{UserAvatar:l.a,UserNickname:c.a,JsonContent:r.a,CreateCommentForm:w},props:{item:{type:Object,required:!0}},data:function(){return{showCreate:!1,deleting:!1}},computed:{isMine:function(){return this.$store.getters.isMine(this.item.author.slug)}},methods:{handleCreate:function(t){this.$emit("create",{id:this.item.id,value:t}),this.showCreate=!1},deleteComment:function(){var t=this;this.$confirm("删除后不可恢复，确认要删除吗？","提示").then(function(){t.deleting||(t.deleting=!0,t.$axios.$post("v1/comment/delete",{comment_id:t.item.id}).then(function(){t.$toast.success("删除成功"),t.$emit("delete",t.item.id)}).catch(function(e){t.$toast.error(e.message),t.deleting=!1}))}).catch(function(){})}}},U=(n(444),{name:"CommentMain",components:{CreateCommentForm:w,CommentItem:Object(h.a)(y,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"comment-item"},[n("aside",[n("UserAvatar",{attrs:{user:t.item.author}})],1),t._v(" "),n("main",[n("header",[n("UserNickname",{attrs:{user:t.item.author}}),t._v(" "),n("div",{staticClass:"desc"},[n("time",{domProps:{textContent:t._s(t.$utils.timeAgo(t.item.created_at))}}),t._v(" "),t.item.getter?[n("span",[t._v("回复 ")]),t._v(" "),n("NLink",{staticClass:"fade-link",attrs:{to:t.$alias.user(t.item.getter.slug),target:"_blank"},domProps:{textContent:t._s(t.item.getter.nickname)}})]:t._e()],2)],1),t._v(" "),n("JsonContent",{attrs:{content:t.item.content}}),t._v(" "),n("footer",[n("button",{on:{click:function(e){t.showCreate=!t.showCreate}}},[n("i",{staticClass:"iconfont ic-talk"})]),t._v(" "),t.isMine?n("button",{on:{click:t.deleteComment}},[n("i",{staticClass:"iconfont ic-trash"})]):t._e()]),t._v(" "),t.showCreate?n("CreateCommentForm",{attrs:{"show-avatar":!1,"pin-slug":t.item.pin_slug,"comment-id":t.item.id,autofocus:!0,placeholder:"回复 @"+t.item.author.nickname+"："},on:{submit:t.handleCreate}}):t._e()],1)])},[],!1,null,null,null).exports,ElPagination:_.a},props:{slug:{type:String,required:!0}},data:function(){return{sort:"time_asc",currentPage:1}},computed:{query:function(){return{$axios:this.$axios,slug:this.slug,sort:this.sort,count:10,mode:"jump"}},sorts:function(){return[{label:"按热度排序",value:"hottest"},{label:"按时间升序",value:"time_asc"},{label:"按时间降序",value:"time_desc"}]}},methods:{createTop:function(data){this.$refs.loader.prepend(data)},createBottom:function(data){this.$refs.loader.append(data)},createInner:function(data){this.$refs.loader.insertAfter(data)},changeCommentSort:function(t){var e=this;this.sort=t,this.currentPage=1,this.$nextTick(function(){e.$refs.loader.refresh()})},handleDelete:function(t){this.$refs.loader.delete(t)},handleJump:function(t){this.$refs.loader.jump(t),this.currentPage=t}}}),I=(n(445),Object(h.a)(U,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"comment-main"},[o("FlowLoader",{ref:"loader",attrs:{func:"getPinComments",type:"jump",query:t.query},scopedSlots:t._u([{key:"header",fn:function(e){var source=e.source;return o("header",{staticClass:"comment-header"},[o("h2",{staticClass:"total"},[t._v("\n        "+t._s(source.total)+" 评论\n      ")]),t._v(" "),o("div",{staticClass:"sort-jump"},[o("ul",{staticClass:"sortable"},t._l(t.sorts,function(e,n){return o("li",{key:n,class:{"is-selected":e.value===t.sort},domProps:{textContent:t._s(e.label)},on:{click:function(n){return t.changeCommentSort(e.value)}}})}),0),t._v(" "),o("ElPagination",{attrs:{layout:"prev, pager, next",total:source.total,"page-size":10,small:!0,"hide-on-single-page":!0,"current-page":t.currentPage,"prev-text":"上一页","next-text":"下一页"},on:{"current-change":t.handleJump}})],1),t._v(" "),o("CreateCommentForm",{attrs:{"pin-slug":t.slug},on:{submit:t.createTop}})],1)}},{key:"default",fn:function(e){var n=e.flow;return o("ul",{},t._l(n,function(e){return o("CommentItem",{key:e.id,attrs:{item:e},on:{create:t.createInner,delete:t.handleDelete}})}),1)}},{key:"footer",fn:function(e){var source=e.source;return source.total>=10?o("footer",{staticClass:"comment-footer"},[o("ElPagination",{attrs:{layout:"prev, pager, next, jumper",total:source.total,"page-size":10,background:!0,"hide-on-single-page":!0,"current-page":t.currentPage,"prev-text":"上一页","next-text":"下一页"},on:{"current-change":t.handleJump}}),t._v(" "),o("CreateCommentForm",{attrs:{"pin-slug":t.slug},on:{submit:t.createBottom}})],1):t._e()}}],null,!0)},[t._v(" "),t._v(" "),o("template",{slot:"nothing"},[o("img",{attrs:{src:n(404)}}),t._v(" "),o("p",[t._v("还没有评论，快来抢沙发吧！")])])],2)],1)},[],!1,null,null,null).exports),P={name:"PinShow",layout:"web",components:{JsonContent:r.a,ContentAuthor:f,CommentMain:I},head:function(){return{title:this.title.text,meta:[{hid:"description",name:"description",content:this.intro}]}},data:function(){return{slug:"",intro:"",title:null,author:null,content:[],area:null,notebook:null,visit_type:0,trial_type:0,content_type:0,comment_type:0,last_top_at:0,recommended_at:0,created_at:"",updated_at:"",deleted_at:null,deleting:!1,like_count:0,visit_count:0,mark_count:0,comment_count:0,reward_count:0}},asyncData:function(t){var e=t.app,n=t.error,r=t.params,l=t.query;return e.$axios.$get("v1/pin/show",{params:Object.assign({},r,l)}).then(function(data){return Object(o.a)({},data)}).catch(n)},beforeMount:function(){this.patchPin()},methods:{deletePin:function(){var t=this;this.$confirm("删除后不可恢复，确认要删除吗？","提示").then(function(){t.deleting||(t.deleting=!0,t.$axios.$post("v1/pin/delete",{slug:t.slug}).then(function(){t.$toast.success("删除成功").then(function(){window.location="/"})}).catch(function(e){t.$toast.error(e.message),t.deleting=!1}))}).catch(function(){})},patchPin:function(){var t=this;this.$axios.$get("v1/pin/patch",{params:{slug:this.slug}}).then(function(data){Object.keys(data).forEach(function(e){t[e]=data[e]})}).catch(function(){})}}},T=(n(446),Object(h.a)(P,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"pin-show"}},[t.title&&t.title.banner&&t.title.banner.width>=1400?n("div",{staticClass:"banner full-size",style:{backgroundImage:"url("+t.$resize(t.title.banner.url,{width:2e3})+")"}}):t._e(),t._v(" "),n("div",{staticClass:"content"},[t.title?[t.title.banner&&t.title.banner.width<1400?n("img",{staticClass:"banner",attrs:{src:t.$resize(t.title.banner.url,{width:660}),alt:t.title.text}}):t._e(),t._v(" "),n("h1",{staticClass:"title",domProps:{textContent:t._s(t.title.text)}})]:t._e(),t._v(" "),n("ContentAuthor",{attrs:{user:t.author},scopedSlots:t._u([{key:"mine",fn:function(){return[n("ElButton",{attrs:{round:"",plain:"",type:"danger"},on:{click:t.deletePin}},[t._v("\n          删除\n        ")]),t._v("\n         \n        "),n("NLink",{attrs:{to:t.$alias.create(t.slug)}},[n("ElButton",{attrs:{round:"",plain:"",type:"info"}},[t._v("\n            编辑\n          ")])],1)]},proxy:!0}])},[n("div",{staticClass:"metas",attrs:{slot:"intro"},slot:"intro"},[t.area?n("div",[n("i",{staticClass:"iconfont ic-coordinates"}),t._v(" "),n("NLink",{attrs:{target:"_blank",to:t.$alias.tag(t.area.slug)},domProps:{textContent:t._s(t.area.name)}})],1):t._e(),t._v(" "),n("div",[n("i",{staticClass:"iconfont ic-time"}),t._v(" "),n("time",{domProps:{textContent:t._s(t.$utils.timeAgo(t.created_at))}})]),t._v(" "),n("div",[n("i",{staticClass:"iconfont ic-browse"}),t._v(" "),n("span",{domProps:{textContent:t._s(t.visit_count)}})])])]),t._v(" "),n("JsonContent",{attrs:{content:t.content}}),t._v(" "),n("div",{staticClass:"footer"},[n("div",{staticClass:"social-panel"}),t._v(" "),t.notebook?n("div",{staticClass:"notebook"},[n("p",[t._v("文章被以下专栏收录")]),t._v(" "),n("NLink",{attrs:{target:"_blank",to:t.$alias.tag(t.notebook.slug)}},[n("VImg",{attrs:{src:t.notebook.avatar,width:"32",height:"32"}}),t._v(" "),n("span",{staticClass:"name",domProps:{textContent:t._s(t.notebook.name)}})],1)],1):t._e()]),t._v(" "),n("CommentMain",{attrs:{slug:t.slug}})],2)])},[],!1,null,null,null));e.default=T.exports}}]);