(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{268:function(t,e,n){},269:function(t,e,n){t.exports={title:"title_1yLHa","ic-sex":"ic-sex_19eCo",icSex:"ic-sex_19eCo","ic-level":"ic-level_3KuJr",icLevel:"ic-level_3KuJr","ic-title":"ic-title_Uq8in",icTitle:"ic-title_Uq8in"}},272:function(t,e,n){"use strict";n(38),n(68),n(37);var o=n(2),l=n(111);e.a={data:()=>({uploadHeaders:{key:"",token:""},uploadConfig:{max:5},uploadImageLimit:20,imageUploadAccept:["image/jpeg","image/png","image/jpg"].join(", "),imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv/",getUpTokenTimer:0,uploadPending:0,uploadImageTotal:0,uploadImageList:[]}),computed:{currentUser(){return this.$store.state.user},isAuth(){return this.$store.state.isAuth}},mounted(){this.$channel.$when("user-signed",()=>{this.initUpToken()})},beforeDestroy(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{initUpToken(){this.getUpToken(),this.getUpTokenTimer=setInterval(()=>{this.getUpToken()},18e5)},getUpToken(){var t=this;return Object(o.a)(function*(){let e=t.$cookie.get("UPLOAD-TOKEN");e?t.uploadHeaders.token=t.$cookie.get("UPLOAD-TOKEN"):(e=yield Object(l.b)(t),t.uploadHeaders.token=e,t.$cookie.set("UPLOAD-TOKEN",e,{expires:new Date((new Date).getTime()+3e6)}))})()},handleImageUploadError(t,e){this.uploadImageList.forEach((n,o)=>{n.uid===e.uid&&(this.uploadPending--,this.uploadImageList.splice(o,1),console.log(t))}),this.$toast.error("图片：".concat(e.name," 上传失败"))},handleImageUploadRemove(t){this.uploadImageList.forEach((e,n)=>{e.uid===t.uid&&(this.uploadImageList.splice(n,1),this.uploadImageTotal--)})},handleImageUploadSuccess(t,e){this.uploadImageList.forEach((n,o)=>{n.uid===e.uid&&(this.uploadImageList[o]=Object.assign(n,{data:t.data,status:"success",url:this.$resize("".concat(this.imagePrefix).concat(t.data.url),{width:100})}))}),this.uploadImageTotal++,this.uploadPending--},handleImageUploadExceed(){this.$toast.info("最多还能上传".concat(this.uploadImageLimit-this.uploadImageTotal,"张图片"))},handleImageUploadBefore(t){if(!this.isAuth)return this.$channel.$emit("sign-in"),!1;if(-1===this.imageUploadAccept.split(", ").indexOf(t.type))return this.$toast.error("仅支持上传".concat(this.imageUploadAccept.replace(/image\//g,"").replace(/, /g,"、"),"格式的图片")),!1;if(this.uploadConfig.max&&this.uploadConfig.max<t.size/1024/1024)return this.$toast.error("图片大小不能超过 ".concat(this.uploadConfig.max,"MB!")),!1;return this.uploadHeaders.key=(t=>{let{slug:e,file:n}=t;return"".concat(e,"/").concat((new Date).getTime(),"-").concat(Math.random().toString(36).substring(3,6),".").concat(n.type.split("/").pop())})({slug:this.currentUser.slug,file:t}),this.uploadImageList.push({name:t.name,percentage:0,raw:t,size:t.size,status:"uploading",errMsg:"",uid:t.uid}),this.uploadPending++,!0},resetUploaderStatus(){this.uploadImageList=[],this.uploadImageTotal=0,this.uploadPending=0}}}},273:function(t,e,n){"use strict";var o={name:"UserNickname",props:{user:{type:Object,required:!0},sex:{type:Number,default:0},level:{type:Boolean,default:!0},nickname:{type:String,default:""},disabled:{type:Boolean,default:!1}},computed:{sexClass(){switch(this.sex){case-1:return{name:"simi",color:"limegreen"};case 0:return{name:"unknown",color:"gold"};case 1:return{name:"nan",color:"deepskyblue"};case 2:return{name:"nv",color:"hotpink"};default:return{name:"weizhi",color:"gold"}}}}},l=(n(276),n(277)),r=n(7);var component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clearfix"},[t.disabled?n("div",{staticClass:"user-nickname"},[n("div",{staticClass:"nickname"},[n("p",{staticClass:"oneline",domProps:{textContent:t._s(t.nickname||t.user.nickname)}})]),t._v(" "),t.sex?n("span",{class:t.$style.title},[n("i",{staticClass:"iconfont",class:[t.$style["ic-sex"],"ic-"+t.sexClass.name],style:{backgroundColor:t.sexClass.color}})]):t._e(),t._v(" "),t.level?n("span",{class:[t.$style.title,t.$style["ic-level"]],domProps:{textContent:t._s("Lv"+t.user.level)}}):t._e(),t._v(" "),t._l(t.user.roles,function(e,o){return n("span",{key:o,class:[t.$style.title,t.$style["ic-title"]],domProps:{textContent:t._s(e)}})})],2):n("NLink",{staticClass:"user-nickname",attrs:{to:t.$alias.user(t.user.slug),target:"_blank"}},[n("div",{staticClass:"nickname"},[n("p",{staticClass:"oneline",domProps:{textContent:t._s(t.nickname||t.user.nickname)}})]),t._v(" "),t.sex?n("span",{class:t.$style.title},[n("i",{staticClass:"iconfont",class:[t.$style["ic-sex"],"ic-"+t.sexClass.name],style:{backgroundColor:t.sexClass.color}})]):t._e(),t._v(" "),t.level?n("span",{class:[t.$style.title,t.$style["ic-level"]],domProps:{textContent:t._s("Lv"+t.user.level)}}):t._e(),t._v(" "),t._l(t.user.title,function(e,o){return n("span",{key:o,class:[t.$style.title,t.$style["ic-title"]],domProps:{textContent:t._s(e)}})})],2)],1)},[],!1,function(t){this.$style=l.default.locals||l.default},null,null);e.a=component.exports},276:function(t,e,n){"use strict";var o=n(268);n.n(o).a},277:function(t,e,n){"use strict";var o=n(269),l=n.n(o);e.default=l.a},278:function(t,e,n){"use strict";var o=n(2),l={name:"UserFollowBtn",props:{slug:{type:String,required:!0}},computed:{state(){return this.$store.getters["social/get"]("user-follow",this.slug)},isAuth(){return this.$store.state.isAuth},isMine(){return this.$store.getters.isMine(this.slug)},btnText(){return this.isAuth&&this.state?this.isMine?"自己":this.state.is_following&&this.state.is_followed_by?"互相关注":this.state.is_following?"已关注":this.state.is_followed_by?"关注了我":"关注":"关注"}},methods:{handleFollowClick(){this.isAuth?this.isMine?this.$toast.info("不能关注自己"):this.state&&!this.state.is_following_loading&&("关注了我"!==this.btnText&&"关注"!==this.btnText?this.$confirm("确定要取消关注吗？","提示").then(()=>this.submit()).catch(()=>{}):this.submit()):this.$channel.$emit("sign-in")},submit(){var t=this;return Object(o.a)(function*(){const data=yield t.$store.dispatch("social/toggle",{type:"user-follow",slug:t.slug,action:"is_following",params:{target_slug:t.slug,action_slug:t.$store.state.user.slug,target_type:"user",action_type:"user",method_type:"follow"}});data.success&&t.$emit("change",data.result)})()}}},r=n(7),component=Object(r.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return this.state?e("el-button",{staticClass:"user-fff-btn",attrs:{loading:this.state.is_following_loading,round:"",type:"primary",plain:"关注"!==this.btnText},on:{click:this.handleFollowClick}},[e("span",{domProps:{textContent:this._s(this.btnText)}})]):this._e()},[],!1,null,null,null);e.a=component.exports},324:function(t,e,n){},325:function(t,e,n){},326:function(t,e,n){},327:function(t,e,n){},328:function(t,e,n){},329:function(t,e,n){},392:function(t,e,n){"use strict";var o=n(324);n.n(o).a},394:function(t,e,n){"use strict";var o=n(325);n.n(o).a},395:function(t,e,n){"use strict";var o=n(326);n.n(o).a},396:function(t,e,n){"use strict";var o=n(327);n.n(o).a},397:function(t,e,n){"use strict";var o=n(328);n.n(o).a},398:function(t,e,n){"use strict";var o=n(329);n.n(o).a},443:function(t,e,n){"use strict";n.r(e);n(41);var o=n(8),l=n(382),r=n.n(l),c=n(352),d=n(271),h=n(273),m=n(278),_={name:"ContentAuthor",components:{UserAvatar:d.a,UserNickname:h.a,UserFollowBtn:m.a},props:{user:{type:Object,required:!0},size:{type:Number,default:40},relation:{type:String,default:"unknown"}},computed:{isMine(){return this.$store.getters.isMine(this.user.slug)}}},v=(n(392),n(7)),f=Object(v.a)(_,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-author clearfix"},[n("div",{staticClass:"avatar-area"},[n("UserAvatar",{attrs:{user:t.user,size:t.size}})],1),t._v(" "),n("div",{staticClass:"content-area"},[n("UserNickname",{attrs:{user:t.user}}),t._v(" "),n("div",{staticClass:"content-meta oneline"},[t._t("intro")],2)],1),t._v(" "),n("div",{staticClass:"tail-area"},[t.isMine?t._t("mine"):n("UserFollowBtn",{attrs:{slug:t.user.slug},model:{value:t.relation,callback:function(e){t.relation=e},expression:"relation"}})],2)])},[],!1,null,null,null).exports,$=(n(157),n(393)),C=n.n($),k=n(285),y=n.n(k),x=n(272),w={name:"CreateCommentForm",components:{ElUpload:y.a},mixins:[x.a],props:{pinSlug:{type:String,required:!0},commentId:{type:[String,Number],default:""},showAvatar:{type:Boolean,default:!0},autofocus:{type:Boolean,default:!1},placeholder:{type:String,default:"请自觉遵守互联网相关的政策法规，严禁发布色情、暴力、反动的言论"}},data:()=>({content:"",loading:!1}),computed:{avatar(){return this.$store.state.user.avatar||"default-avatar"}},methods:{submit(){this.$store.state.isAuth||this.$channel.$emit("sign-in"),this.content.trim().length<2?this.$toast.error("内容至少要两个字"):this.loading||(this.loading=!0,this.$axios.$post("v1/comment/create",{content:this.content.trim(),images:this.uploadImageList.map(t=>t.data),pin_slug:this.pinSlug,comment_id:this.commentId}).then(data=>{this.$emit("submit",data),this.content="",this.resetUploaderStatus(),this.$toast.success("评论成功"),this.loading=!1}).catch(t=>{this.$toast.error(t.message),this.loading=!1}))}}},U=(n(394),Object(v.a)(w,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"create-comment-form"},[t.showAvatar?n("div",{staticClass:"avatar"},[n("VImg",{attrs:{src:t.avatar,radius:"50%",width:"40",height:"40"}})],1):t._e(),t._v(" "),n("button",{staticClass:"submit-btn",on:{click:t.submit}},[t._v("\n    点击"),n("br"),t._v("发送\n  ")]),t._v(" "),n("div",{staticClass:"input-wrap"},[n("ElInput",{attrs:{type:"textarea",autosize:{minRows:3},autofocus:t.autofocus,"show-word-limit":!0,maxlength:1e3,placeholder:t.placeholder},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.metaKey?(e.preventDefault(),t.submit(e)):null}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),t._v(" "),n("ElUpload",{attrs:{multiple:"","list-type":"picture-card",action:t.imageUploadAction,limit:9,data:t.uploadHeaders,"file-list":t.uploadImageList,accept:t.imageUploadAccept,"before-upload":t.handleImageUploadBefore,"on-success":t.handleImageUploadSuccess,"on-error":t.handleImageUploadError,"on-remove":t.handleImageUploadRemove,"on-exceed":t.handleImageUploadExceed}},[n("i",{staticClass:"el-icon-picture-outline-round"})])],1)])},[],!1,null,null,null).exports),P=(n(38),{name:"CommentItem",components:{UserAvatar:d.a,UserNickname:h.a,JsonContent:c.a,CreateCommentForm:U},props:{item:{type:Object,required:!0}},data:()=>({showCreate:!1,deleting:!1,loading:!1}),computed:{isMine(){return this.$store.getters.isMine(this.item.author.slug)}},methods:{handleCreate(t){this.$emit("create",{id:this.item.id,value:t}),this.showCreate=!1},clickAgree(){this.$store.state.isAuth||this.$channel.$emit("sign-in"),this.isMine?this.$toast.info("不能给自己点赞"):this.loading||(this.loading=!0,this.$axios.$post("v1/social/toggle",{target_slug:this.item.id.toString(),target_type:"comment",action_slug:this.$store.state.user.slug,action_type:"user",method_type:"up_vote"}).then(t=>{this.loading=!1,this.$emit("agree",{id:this.item.id,count:t?this.item.like_count- -1:this.item.like_count-1,result:t})}).catch(t=>{this.$toast.error(t.message),this.loading=!1}))},deleteComment(){this.$confirm("删除后不可恢复，确认要删除吗？","提示").then(()=>{this.deleting||(this.deleting=!0,this.$axios.$post("v1/comment/delete",{comment_id:this.item.id}).then(()=>{this.$toast.success("删除成功"),this.$emit("delete",this.item.id)}).catch(t=>{this.$toast.error(t.message),this.deleting=!1}))}).catch(()=>{})}}}),I=(n(395),{name:"CommentMain",components:{CreateCommentForm:U,CommentItem:Object(v.a)(P,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"comment-item"},[n("aside",[n("UserAvatar",{attrs:{user:t.item.author}})],1),t._v(" "),n("main",[n("header",[n("UserNickname",{attrs:{user:t.item.author}}),t._v(" "),n("div",{staticClass:"desc"},[n("time",{domProps:{textContent:t._s(t.$utils.timeAgo(t.item.created_at))}}),t._v(" "),t.item.getter?[n("span",[t._v("回复 ")]),t._v(" "),n("NLink",{staticClass:"fade-link",attrs:{to:t.$alias.user(t.item.getter.slug),target:"_blank"},domProps:{textContent:t._s(t.item.getter.nickname)}})]:t._e()],2)],1),t._v(" "),n("JsonContent",{attrs:{content:t.item.content}}),t._v(" "),n("footer",[n("button",{on:{click:function(e){t.showCreate=!t.showCreate}}},[n("i",{staticClass:"iconfont ic-talk"})]),t._v(" "),t.isMine?n("button",{on:{click:t.deleteComment}},[n("i",{staticClass:"iconfont ic-trash"})]):t._e(),t._v(" "),n("button",{on:{click:t.clickAgree}},[n("i",{staticClass:"iconfont",class:[t.item.up_vote_status?"ic-good_fill":"ic-good"]}),t._v(" "),t.item.like_count?n("span",{domProps:{textContent:t._s(t.item.like_count)}}):t._e()])]),t._v(" "),t.showCreate?n("CreateCommentForm",{attrs:{"show-avatar":!1,"pin-slug":t.item.pin_slug,"comment-id":t.item.id,autofocus:!0,placeholder:"回复 @"+t.item.author.nickname+"："},on:{submit:t.handleCreate}}):t._e()],1)])},[],!1,null,null,null).exports,ElPagination:C.a},props:{slug:{type:String,required:!0}},data:()=>({sort:"time_asc",currentPage:1}),computed:{query(){return{$axios:this.$axios,slug:this.slug,sort:this.sort,count:10,mode:"jump"}},sorts:()=>[{label:"按热度排序",value:"hottest"},{label:"按时间升序",value:"time_asc"},{label:"按时间降序",value:"time_desc"}]},methods:{createTop(data){this.$refs.loader.prepend(data)},createBottom(data){this.$refs.loader.append(data)},createInner(data){this.$refs.loader.insertAfter(data)},handleAgree(t){let{id:e,result:n,count:o}=t;this.$refs.loader.update({id:e,value:n,key:"up_vote_status"}),this.$refs.loader.update({id:e,value:o,key:"like_count"})},changeCommentSort(t){this.sort=t,this.currentPage=1,this.$nextTick(()=>{this.$refs.loader.refresh()})},handleDelete(t){this.$refs.loader.delete(t)},handleJump(t){this.$refs.loader.jump(t),this.currentPage=t},handlePatch(t){let{data:data}=t;const{result:e}=data;e.length&&this.$axios.$get("v1/comment/patch",{params:{comment_ids:e.map(t=>t.id).join(",")}}).then(data=>{this.$refs.loader.patch(data)}).catch(()=>{})}}}),A=(n(396),Object(v.a)(I,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"comment-main"},[o("FlowLoader",{ref:"loader",attrs:{func:"getPinComments",type:"jump",query:t.query,callback:t.handlePatch},scopedSlots:t._u([{key:"header",fn:function(e){var source=e.source;return o("header",{staticClass:"comment-header"},[o("h2",{staticClass:"total"},[t._v("\n        "+t._s(source.total)+" 评论\n      ")]),t._v(" "),o("div",{staticClass:"sort-jump"},[o("ul",{staticClass:"sortable"},t._l(t.sorts,function(e,n){return o("li",{key:n,class:{"is-selected":e.value===t.sort},domProps:{textContent:t._s(e.label)},on:{click:function(n){return t.changeCommentSort(e.value)}}})}),0),t._v(" "),o("ElPagination",{attrs:{layout:"prev, pager, next",total:source.total,"page-size":10,small:!0,"hide-on-single-page":!0,"current-page":t.currentPage,"prev-text":"上一页","next-text":"下一页"},on:{"current-change":t.handleJump}})],1),t._v(" "),o("CreateCommentForm",{attrs:{"pin-slug":t.slug},on:{submit:t.createTop}})],1)}},{key:"default",fn:function(e){var n=e.flow;return o("ul",{},t._l(n,function(e){return o("CommentItem",{key:e.id,attrs:{item:e},on:{create:t.createInner,delete:t.handleDelete,agree:t.handleAgree}})}),1)}},{key:"footer",fn:function(e){var source=e.source;return source.total>=10?o("footer",{staticClass:"comment-footer"},[o("ElPagination",{attrs:{layout:"prev, pager, next, jumper",total:source.total,"page-size":10,background:!0,"hide-on-single-page":!0,"current-page":t.currentPage,"prev-text":"上一页","next-text":"下一页"},on:{"current-change":t.handleJump}}),t._v(" "),o("CreateCommentForm",{attrs:{"pin-slug":t.slug},on:{submit:t.createBottom}})],1):t._e()}}],null,!0)},[t._v(" "),t._v(" "),o("template",{slot:"nothing"},[o("img",{attrs:{src:n(363)}}),t._v(" "),o("p",[t._v("还没有评论，快来抢沙发吧！")])])],2)],1)},[],!1,null,null,null).exports),T=n(2),E={name:"PinVoteBtn",props:{value:{type:[String,Number],required:!0},pinSlug:{type:String,required:!0},userSlug:{type:String,required:!0}},data(){return{count:+this.value}},computed:{state(){return this.$store.getters["social/get"]("pin",this.pinSlug)},isMine(){return this.$store.getters.isMine(this.userSlug)}},watch:{value(t){this.count=+t},count(t){this.$emit("input",t)}},methods:{upvote(){var t=this;return Object(T.a)(function*(){if(!t.$store.state.isAuth)return void t.$channel.$emit("sign-in");if(t.isMine)return void t.$toast.info("不能给自己点赞");if(t.state.up_vote_status_loading)return;const data=yield t.$store.dispatch("social/toggle",{type:"pin",slug:t.pinSlug,action:"up_vote_status",params:{target_type:"pin",target_slug:t.pinSlug,action_type:"user",action_slug:t.$store.state.user.slug,method_type:"up_vote"}});data.success&&(data.result?t.count++:t.count--)})()}}},S=(n(397),Object(v.a)(E,function(){var t=this.$createElement,e=this._self._c||t;return this.state?e("div",{staticClass:"pin-vote-btn"},[e("button",{staticClass:"up-vote-btn",class:{"is-active":this.state.up_vote_status},on:{click:this.upvote}},[e("i",{staticClass:"iconfont ic-good_fill"}),this._v(" "),e("span",{domProps:{textContent:this._s(this.count)}})])]):this._e()},[],!1,null,null,null).exports),j={name:"PinShow",layout:"web",components:{JsonContent:c.a,ContentAuthor:f,CommentMain:A,ElTooltip:r.a,PinVoteBtn:S},head(){return{title:this.title.text,meta:[{hid:"description",name:"description",content:this.intro}]}},data:()=>({slug:"",intro:"",title:null,author:null,content:[],area:null,notebook:null,visit_type:0,trial_type:0,content_type:0,comment_type:0,last_top_at:0,recommended_at:0,created_at:"",updated_at:"",last_edit_at:"",deleted_at:null,deleting:!1,like_count:0,visit_count:0,mark_count:0,comment_count:0,reward_count:0}),asyncData(t){let{app:e,error:n,params:l,query:r}=t;return e.$axios.$get("v1/pin/show",{params:Object.assign({},l,r)}).then(data=>Object(o.a)({},data)).catch(n)},beforeMount(){this.patchPin(),this.patchUser()},methods:{deletePin(){this.$confirm("删除后不可恢复，确认要删除吗？","提示").then(()=>{this.deleting||(this.deleting=!0,this.$axios.$post("v1/pin/delete",{slug:this.slug}).then(()=>{this.$toast.success("删除成功").then(()=>{window.location="/"})}).catch(t=>{this.$toast.error(t.message),this.deleting=!1}))}).catch(()=>{})},patchPin(){this.$axios.$get("v1/pin/patch",{params:{slug:this.slug}}).then(data=>{Object.keys(data).forEach(t=>{this[t]=data[t]}),this.$store.commit("social/set",{type:"pin",slug:this.slug,data:{down_vote_status:data.down_vote_status,up_vote_status:data.up_vote_status,mark_status:data.mark_status,reward_status:data.reward_status}})}).catch(()=>{})},patchUser(){this.$axios.$get("v1/user/patch",{params:{slug:this.author.slug}}).then(data=>{this.$set(this,"author",Object.assign(this.author,data)),this.$store.commit("social/set",{type:"user-follow",slug:this.author.slug,data:{is_following:data.is_following,is_followed_by:data.is_followed_by}})}).catch(()=>{})}}},O=(n(398),Object(v.a)(j,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"pin-show"}},[t.title&&t.title.banner&&t.title.banner.width>=2e3?n("div",{staticClass:"banner full-size",style:{backgroundImage:"url("+t.$resize(t.title.banner.url,{width:2e3})+")"}}):t._e(),t._v(" "),n("div",{staticClass:"content"},[t.title?[t.title.banner&&t.title.banner.width<2e3?n("div",{staticClass:"banner",style:{backgroundImage:"url("+t.$resize(t.title.banner.url,{width:660})+")"}}):t._e(),t._v(" "),n("h1",{staticClass:"title",domProps:{textContent:t._s(t.title.text)}})]:t._e(),t._v(" "),n("ContentAuthor",{attrs:{user:t.author},scopedSlots:t._u([{key:"mine",fn:function(){return[n("ElButton",{attrs:{round:"",plain:"",type:"danger"},on:{click:t.deletePin}},[t._v("\n          删除\n        ")]),t._v("\n         \n        "),n("NLink",{attrs:{to:t.$alias.create(t.slug)}},[n("ElButton",{attrs:{round:"",plain:"",type:"info"}},[t._v("\n            编辑\n          ")])],1)]},proxy:!0}])},[n("div",{staticClass:"metas",attrs:{slot:"intro"},slot:"intro"},[t.area?n("div",[n("i",{staticClass:"iconfont ic-coordinates"}),t._v(" "),n("NLink",{attrs:{target:"_blank",to:t.$alias.tag(t.area.slug)},domProps:{textContent:t._s(t.area.name)}})],1):t._e(),t._v(" "),n("div",[n("i",{staticClass:"iconfont ic-time"}),t._v(" "),n("ElTooltip",{attrs:{effect:"dark",placement:"bottom",content:"发表于："+t.$utils.timeAgo(t.created_at),disabled:t.created_at===t.last_edit_at}},[n("time",{domProps:{textContent:t._s(t.$utils.timeAgo(t.last_edit_at))}})])],1),t._v(" "),n("div",[n("i",{staticClass:"iconfont ic-browse"}),t._v(" "),n("span",{domProps:{textContent:t._s(t.visit_count)}})])])]),t._v(" "),n("JsonContent",{attrs:{content:t.content}}),t._v(" "),n("div",{staticClass:"footer"},[n("div",{staticClass:"social-panel"},[n("PinVoteBtn",{attrs:{"pin-slug":t.slug,"user-slug":t.author.slug},model:{value:t.like_count,callback:function(e){t.like_count=e},expression:"like_count"}})],1)]),t._v(" "),n("CommentMain",{attrs:{slug:t.slug}}),t._v(" "),t.notebook?n("div",{staticClass:"notebook"},[n("p",[t._v("文章被以下专栏收录")]),t._v(" "),n("NLink",{attrs:{target:"_blank",to:t.$alias.tag(t.notebook.slug)}},[n("VImg",{attrs:{src:t.notebook.avatar,width:"32",height:"32"}}),t._v(" "),n("span",{staticClass:"name",domProps:{textContent:t._s(t.notebook.name)}})],1)],1):t._e()],2)])},[],!1,null,null,null));e.default=O.exports}}]);