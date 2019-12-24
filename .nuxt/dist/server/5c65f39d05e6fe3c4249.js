exports.ids=[25],exports.modules={100:function(e,t,n){"use strict";var r={name:"PinArticle",mixins:[n(92).a]},l=n(1);var component=Object(l.a)(r,(function(){var e,t=this,n=t.$createElement,r=t._self._c||n;return r("li",{class:t.$style["pin-article"]},[r("NLink",{staticClass:"only-h5",class:t.$style["pin-article-h5"],attrs:{to:t.$alias.pin(t.secretLink||t.item.slug)}},[t.item.media&&t.item.media.banner?r("header",{style:{paddingTop:t.item.media.banner.height/t.item.media.banner.width*100+"%"}},[r("img",{attrs:{src:t.$resize(t.item.media.banner.url,{width:400,mode:2})}})]):t._e(),t._v(" "),r("main",[r("div",{class:t.$style.user},[t.showUser?r("VImg",{attrs:{src:t.item.author.avatar,radius:"50%",width:"24",height:"24"}}):t._e(),t._v(" "),r("span",{domProps:{innerHTML:t._s(t.item.author.nickname)}})],1),t._v(" "),r("span",{class:t.$style.title,domProps:{innerHTML:t._s(t.item.title.text)}})]),t._v(" "),t.item.intro?r("footer",[r("p",{class:t.$style.intro,domProps:{innerHTML:t._s(t.item.intro)}})]):t._e()]),t._ssrNode(" "),t._ssrNode("<div"+t._ssrClass("only-pc",[t.$style["pin-article-pc"],(e={},e[t.$style["pin-article-pc-media"]]=t.item.media,e)])+">","</div>",[t._ssrNode("<h2"+t._ssrClass(null,t.$style.title)+">","</h2>",[t._ssrNode("<span"+t._ssrClass(null,t.$style.badge)+">"+t._ssrEscape(t._s(t.item.badge))+"</span> "),t.showZone?t._ssrNode("<div"+t._ssrClass(null,t.$style.area)+">","</div>",[t.item.area?r("NLink",{attrs:{to:t.$alias.tag(t.item.area.slug),target:"_blank"}},[r("VImg",{attrs:{src:t.item.area.avatar,width:"24",height:"24",radius:"5px"}})],1):t.item.topic?r("NLink",{attrs:{to:t.$alias.tag(t.item.topic.slug),target:"_blank"}},[r("VImg",{attrs:{src:t.item.topic.avatar,width:"24",height:"24",radius:"5px"}})],1):t._e()],1):t._e(),t._ssrNode(" "),t._ssrNode("<p"+t._ssrClass("oneline",t.$style.link)+">","</p>",[r("NLink",{staticClass:"fade-link oneline",attrs:{target:"_blank",to:t.$alias.pin(t.secretLink||t.item.slug)},domProps:{innerHTML:t._s(t.item.title.text)}})],1)],2),t._ssrNode(" "),t._ssrNode("<div"+t._ssrClass("clearfix",t.$style.content)+">","</div>",[t.item.media?r("NLink",{class:t.$style.media,attrs:{to:t.$alias.pin(t.secretLink||t.item.slug),target:"_blank"}},[t.item.media.first_video?r("div",{class:t.$style.video},[t.item.media.banner?r("VImg",{attrs:{src:t.item.media.banner.url,blur:!0,width:"187",height:"105"}}):t._e(),t._v(" "),r("i",{staticClass:"iconfont ic-bilibili",class:t.$style.badge})],1):t.item.media.first_music?r("div",{class:t.$style.music},[t.item.media.banner?r("VImg",{attrs:{src:t.item.media.banner.url,blur:!0,width:"187",height:"105"}}):t._e(),t._v(" "),r("i",{staticClass:"iconfont ic-netease",class:t.$style.badge})],1):r("VImg",{attrs:{src:t.item.media.banner.url,blur:!0,width:"187",height:"105"}}),t._v(" "),r("div",{class:t.$style.text},[r("i",{staticClass:"iconfont ic-video"}),t._v(" "),r("span",{domProps:{textContent:t._s(t.item.media.video_count)}}),t._v(" "),r("i",{staticClass:"iconfont ic-systemprompt"}),t._v(" "),r("span",{domProps:{textContent:t._s(t.item.media.music_count)}}),t._v(" "),r("i",{staticClass:"iconfont ic-camera"}),t._v(" "),r("span",{domProps:{textContent:t._s(t.item.media.image_count)}})])],1):t._e(),t._ssrNode(" "),t._ssrNode("<div"+t._ssrClass(null,t.$style.desc)+">","</div>",[t._ssrNode("<main><p>"+t._s(t.item.intro)+"</p></main> "),t._ssrNode("<footer>","</footer>",[t.showUser?r("NLink",{staticClass:"oneline",attrs:{to:t.$alias.user(t.item.author.slug),target:"_blank"}},[r("VImg",{attrs:{src:t.item.author.avatar,radius:"50%",width:"24",height:"24"}}),t._v("\n             \n            "),r("span",{domProps:{innerHTML:t._s(t.item.author.nickname)}})],1):t._e(),t._ssrNode(' <div><i class="iconfont ic-message_fill"></i> <span>'+t._ssrEscape(t._s(t.item.comment_count))+'</span></div> <div><i class="iconfont ic-good_fill"></i> <span>'+t._ssrEscape(t._s(t.item.like_count))+'</span></div> <div><i class="iconfont ic-mark_fill"></i> <span>'+t._ssrEscape(t._s(t.item.mark_count))+'</span></div> <div><i class="iconfont ic-browse_fill"></i> <span>'+t._ssrEscape(t._s(t.item.visit_count))+"</span></div>")],2)],2)],2)],2)],2)}),[],!1,(function(e){var t=n(96);t.__inject__&&t.__inject__(e),this.$style=t.locals||t}),null,"4dd47fa2");t.a=component.exports},101:function(e,t,n){e.exports=n.p+"img/aa8b45a.png"},102:function(e,t,n){e.exports=n.p+"img/3251725.png"},106:function(e,t,n){"use strict";var r={name:"UserNickname",props:{user:{type:Object,required:!0},sex:{type:Number,default:0},level:{type:Boolean,default:!0},nickname:{type:String,default:""},disabled:{type:Boolean,default:!1}},computed:{sexClass(){switch(this.sex){case-1:return{name:"simi",color:"limegreen"};case 0:return{name:"unknown",color:"gold"};case 1:return{name:"nan",color:"deepskyblue"};case 2:return{name:"nv",color:"hotpink"};default:return{name:"weizhi",color:"gold"}}}}},l=n(1);var component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"clearfix oneline"},[e.disabled?e._ssrNode('<div class="user-nickname">',"</div>",[e._ssrNode('<div class="nickname"><p class="oneline">'+e._s(e.nickname||e.user.nickname)+"</p></div> "+(e.sex?"<span"+e._ssrClass(null,e.$style.title)+"><i"+e._ssrClass("iconfont",[e.$style["ic-sex"],"ic-"+e.sexClass.name])+e._ssrStyle(null,{backgroundColor:e.sexClass.color},null)+"></i></span>":"\x3c!----\x3e")+" "+(e.level?"<span"+e._ssrClass(null,[e.$style.title,e.$style["ic-level"]])+">"+e._ssrEscape(e._s("Lv"+e.user.level))+"</span>":"\x3c!----\x3e")+" "+e._ssrList(e.user.title,(function(t,n){return"<span"+e._ssrClass(null,[e.$style.title,e.$style["ic-title"]])+">"+e._ssrEscape(e._s(t))+"</span>"})))],2):n("NLink",{staticClass:"user-nickname active",attrs:{to:e.$alias.user(e.user.slug),target:"_blank"}},[n("div",{staticClass:"nickname"},[n("p",{staticClass:"oneline",domProps:{innerHTML:e._s(e.nickname||e.user.nickname)}})]),e._v(" "),e.sex?n("span",{class:e.$style.title},[n("i",{staticClass:"iconfont",class:[e.$style["ic-sex"],"ic-"+e.sexClass.name],style:{backgroundColor:e.sexClass.color}})]):e._e(),e._v(" "),e.level?n("span",{class:[e.$style.title,e.$style["ic-level"]],domProps:{textContent:e._s("Lv"+e.user.level)}}):e._e(),e._v(" "),e._l(e.user.title,(function(t,r){return n("span",{key:r,class:[e.$style.title,e.$style["ic-title"]],domProps:{textContent:e._s(t)}})}))],2)],1)}),[],!1,(function(e){var t=n(107);t.__inject__&&t.__inject__(e);var r=n(108);r.__inject__&&r.__inject__(e),this.$style=r.locals||r}),null,"5b0047c6");t.a=component.exports},107:function(e,t,n){"use strict";n.r(t);var r=n(89),l=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t.default=l.a},108:function(e,t,n){"use strict";n.r(t);var r=n(90),l=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t.default=l.a},150:function(e,t){e.exports={"tag-search-item-pc":"tag-search-item-pc_27u_h",tagSearchItemPc:"tag-search-item-pc_27u_h",poster:"poster_3Y-JX",content:"content_3Wm6c",title:"title_I7vrW",intro:"intro_19T3p","tag-search-item-h5":"tag-search-item-h5_Wq3Nu",tagSearchItemH5:"tag-search-item-h5_Wq3Nu","skeleton-loading":"skeleton-loading_3fbDj",skeletonLoading:"skeleton-loading_3fbDj",skeleton:"skeleton_1B5BV"}},151:function(e,t){e.exports={"user-search-item-pc":"user-search-item-pc_26Tuc",userSearchItemPc:"user-search-item-pc_26Tuc",poster:"poster_GQrUb",content:"content_2b0D0",title:"title_2czgk",badge:"badge_2aCNk",intro:"intro_1OUEs","user-search-item-h5":"user-search-item-h5_3qxE0",userSearchItemH5:"user-search-item-h5_3qxE0","skeleton-loading":"skeleton-loading_3TDI_",skeletonLoading:"skeleton-loading_3TDI_",skeleton:"skeleton_37PC-"}},152:function(e,t){e.exports={undefined:void 0}},260:function(e,t,n){"use strict";n.r(t);var r=n(150),l=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t.default=l.a},261:function(e,t,n){"use strict";n.r(t);var r=n(151),l=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t.default=l.a},262:function(e,t,n){"use strict";n.r(t);var r=n(152),l=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t.default=l.a},356:function(e,t,n){"use strict";n.r(t);var r=n(62),l=n.n(r),o=n(31),c=n(100),_={name:"TagSearchItem",props:{item:{type:Object,required:!0}}},d=n(1);var m=Object(d.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{class:e.$style["tag-search-item"]},[e._ssrNode("<div"+e._ssrClass("only-pc",e.$style["tag-search-item-pc"])+">","</div>",[n("NLink",{class:e.$style.poster,attrs:{to:e.$alias.tag(e.item.slug),target:"_blank"}},[n("VImg",{attrs:{src:e.item.avatar,width:105,height:105,radius:"5px"}})],1),e._ssrNode(" "),e._ssrNode("<div"+e._ssrClass(null,e.$style.content)+">","</div>",[e._ssrNode("<h3"+e._ssrClass(null,e.$style.title)+">","</h3>",[e._ssrNode("<span>分区</span> "),n("NLink",{staticClass:"fade-link oneline",attrs:{to:e.$alias.tag(e.item.slug),target:"_blank"},domProps:{innerHTML:e._s(e.item.name)}})],2),e._ssrNode(" <p"+e._ssrClass(null,e.$style.intro)+">"+e._ssrEscape(e._s(e.item.intro))+"</p> <footer><span>"+e._ssrEscape("帖子数："+e._s(e.item.pin_count||0))+"</span> <span>"+e._ssrEscape("关注数："+e._s(e.item.seen_user_count||0))+"</span></footer>")],2)],2),e._ssrNode(" "),n("NLink",{staticClass:"only-h5",class:e.$style["tag-search-item-h5"],attrs:{to:e.$alias.tag(e.item.slug)}},[n("VImg",{class:e.$style.poster,attrs:{src:e.item.avatar,width:80,height:80,radius:"5px"}}),e._v(" "),n("div",{class:e.$style.content},[n("h3",{class:e.$style.title},[n("span",[e._v("分区")]),e._v(" "),n("p",{staticClass:"oneline",domProps:{innerHTML:e._s(e.item.name)}})]),e._v(" "),n("p",{class:e.$style.intro,domProps:{textContent:e._s(e.item.intro)}}),e._v(" "),n("footer",[n("span",[e._v("帖子数："+e._s(e.item.pin_count||0))]),e._v(" "),n("span",[e._v("关注数："+e._s(e.item.seen_user_count||0))])])])],1)],2)}),[],!1,(function(e){var t=n(260);t.__inject__&&t.__inject__(e),this.$style=t.locals||t}),null,"074c7ba4").exports,v=n(94),h=n(106),f={name:"UserSearchItem",components:{UserAvatar:v.a,UserNickname:h.a},props:{item:{type:Object,required:!0}}};var y=Object(d.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{class:e.$style["user-search-item"]},[e._ssrNode("<div"+e._ssrClass("only-pc",e.$style["user-search-item-pc"])+">","</div>",[n("UserAvatar",{class:e.$style.poster,attrs:{size:105,user:e.item}}),e._ssrNode(" "),e._ssrNode("<div"+e._ssrClass(null,e.$style.content)+">","</div>",[e._ssrNode("<h3"+e._ssrClass(null,e.$style.title)+">","</h3>",[e._ssrNode("<span"+e._ssrClass(null,e.$style.badge)+">用户</span> "),n("UserNickname",{attrs:{user:e.item}})],2),e._ssrNode(" <p"+e._ssrClass(null,e.$style.intro)+">"+e._ssrEscape(e._s(e.item.signature))+"</p> <footer><span>"+e._ssrEscape("粉丝数："+e._s(e.item.followers_count||0))+"</span> <span>"+e._ssrEscape("关注数："+e._s(e.item.followers_count||0))+"</span></footer>")],2)],2),e._ssrNode(" "),n("NLink",{staticClass:"only-h5",class:e.$style["user-search-item-h5"],attrs:{to:e.$alias.user(e.item.slug)}},[n("UserAvatar",{class:e.$style.poster,attrs:{size:80,user:e.item}}),e._v(" "),n("div",{class:e.$style.content},[n("h3",{class:e.$style.title},[n("span",{class:e.$style.badge},[e._v("用户")]),e._v(" "),n("UserNickname",{attrs:{user:e.item}})],1),e._v(" "),n("p",{class:e.$style.intro,domProps:{textContent:e._s(e.item.signature)}}),e._v(" "),n("footer",[n("span",[e._v("粉丝数："+e._s(e.item.followers_count||0))]),e._v(" "),n("span",[e._v("关注数："+e._s(e.item.followers_count||0))])])])],1)],2)}),[],!1,(function(e){var t=n(261);t.__inject__&&t.__inject__(e),this.$style=t.locals||t}),null,"4b787e07").exports,k={name:"Search",layout:"web",components:{ElPagination:l.a,VSearch:o.a,PinItem:c.a,TagItem:m,UserItem:y},data(){return{selectedType:this.$route.query.type||"all",words:this.$route.query.q}},computed:{query(){return{$axios:this.$axios,type:this.selectedType,q:this.words}}},watch:{$route(){this.$refs.loader&&this.$refs.loader.initData()}},methods:{handleJump(e){this.$refs.loader.jump(e)}}};var $=Object(d.a)(k,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"search"}},[r("ElRow",{staticClass:"container"},[r("div",{staticClass:"search-panel"},[r("div",{staticClass:"before only-pc"},[r("img",{attrs:{src:"https://file.calibur.tv/logo.png",alt:"logo"}}),e._v(" "),r("span",[e._v("搜索")])]),e._v(" "),r("div",{staticClass:"v-search"},[r("VSearch",{attrs:{type:e.selectedType},model:{value:e.words,callback:function(t){e.words=t},expression:"words"}},[r("template",{slot:"submit-btn"},[r("i",{staticClass:"iconfont ic-search"}),e._v(" "),r("span",{staticClass:"only-pc"},[e._v("搜索")])])],2)],1)])]),e._ssrNode(" "),r("ElRow",[r("ElCol",{staticClass:"only-pc",attrs:{span:6}},[r("br")]),e._v(" "),r("ElCol",{attrs:{span:12,xs:24}},[r("FlowLoader",{ref:"loader",attrs:{func:"getMixinSearch",type:"page",query:e.query},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.flow;return r("ul",{staticClass:"flow-list"},e._l(n,(function(e){return r(e.type+"-item",{key:e.data.slug,tag:"component",attrs:{item:e.data}})})),1)}},{key:"footer",fn:function(t){var source=t.source;return r("footer",{},[r("ElPagination",{attrs:{layout:"prev, pager, next, jumper",total:source.total,"page-size":10,background:!0,"current-page":source.page,"hide-on-single-page":!0,"prev-text":"上一页","next-text":"下一页"},on:{"current-change":e.handleJump}})],1)}}])},[e._v(" "),r("template",{slot:"nothing"},[r("img",{attrs:{src:n(101)}}),e._v(" "),r("p",[e._v("这里什么都没有")])]),e._v(" "),r("template",{slot:"error"},[r("img",{attrs:{src:n(102)}}),e._v(" "),r("p",[e._v("遇到错误了，点击重试")])])],2)],1),e._v(" "),r("ElCol",{staticClass:"only-pc",attrs:{span:6}},[r("br")])],1)],2)}),[],!1,(function(e){var t=n(262);t.__inject__&&t.__inject__(e)}),null,"b7616b28");t.default=$.exports},87:function(e,t){e.exports={undefined:void 0}},88:function(e,t){e.exports={"pin-article-pc-media":"pin-article-pc-media_EdOoY",pinArticlePcMedia:"pin-article-pc-media_EdOoY",desc:"desc_2dZ7I","pin-article-pc":"pin-article-pc_n9l6d",pinArticlePc:"pin-article-pc_n9l6d",title:"title_11AiS",badge:"badge_33AUe",link:"link_2zXb9",area:"area_1BjFz",media:"media_2oWmK",text:"text_2wAMb",music:"music_3Ur6b",video:"video_32S3V","pin-article-h5":"pin-article-h5_2Chnp",pinArticleH5:"pin-article-h5_2Chnp",user:"user_1ugeY",intro:"intro_3P9uJ","skeleton-loading":"skeleton-loading_LpB2j",skeletonLoading:"skeleton-loading_LpB2j",skeleton:"skeleton_3OUSt"}},89:function(e,t){e.exports={undefined:void 0}},90:function(e,t){e.exports={title:"title_1yLHa","ic-sex":"ic-sex_19eCo",icSex:"ic-sex_19eCo","ic-level":"ic-level_3KuJr",icLevel:"ic-level_3KuJr","ic-title":"ic-title_Uq8in",icTitle:"ic-title_Uq8in","skeleton-loading":"skeleton-loading_12Xrd",skeletonLoading:"skeleton-loading_12Xrd",skeleton:"skeleton_2qRlz"}},92:function(e,t,n){"use strict";t.a={props:{item:{type:Object,required:!0},showUser:{type:Boolean,default:!0},showZone:{type:Boolean,default:!0},relationZone:{type:String,default:""},secretLink:{type:String,default:""}},computed:{showTopic(){return!(!this.showZone||!this.item.topic)&&this.item.topic.slug!==this.relationZone},showArea(){return!(!this.showZone||!this.item.area)&&this.item.area.slug!==this.relationZone}}}},94:function(e,t,n){"use strict";var r={name:"UserAvatar",props:{user:{type:Object,required:!0},avatar:{type:String,default:""},size:{type:Number,default:40},disabled:{type:Boolean,default:!1}}},l=n(1);var component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.disabled?n("div",{staticClass:"user-avatar",style:{width:e.size+"px",height:e.size+"px"}},[n("VImg",{attrs:{radius:"50%",src:e.avatar||e.user.avatar,width:e.size,height:e.size,alt:e.user.nickname}})],1):n("NLink",{staticClass:"user-avatar",style:{width:e.size+"px",height:e.size+"px"},attrs:{to:e.$alias.user(e.user.slug),target:"_blank"}},[n("VImg",{attrs:{radius:"50%",src:e.avatar||e.user.avatar,width:e.size,height:e.size,alt:e.user.nickname}})],1)}),[],!1,(function(e){var t=n(95);t.__inject__&&t.__inject__(e)}),null,"8c0ebd70");t.a=component.exports},95:function(e,t,n){"use strict";n.r(t);var r=n(87),l=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t.default=l.a},96:function(e,t,n){"use strict";n.r(t);var r=n(88),l=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t.default=l.a}};