(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{316:function(t,e,n){t.exports={notebook:"notebook_BLT0n",avatar:"avatar_1B6Ki",content:"content_GRaaJ","note-title":"note-title_322ba",noteTitle:"note-title_322ba",desc:"desc_2LjUO",meta:"meta_YNWVA","skeleton-loading":"skeleton-loading_3BHwz",skeletonLoading:"skeleton-loading_3BHwz",skeleton:"skeleton_21Nd2"}},317:function(t,e,n){t.exports={bangumi:"bangumi_27LZB",avatar:"avatar_1pux0",content:"content_3LQoH",name:"name_1kYyu",desc:"desc_ygyPf","skeleton-loading":"skeleton-loading_1aI5z",skeletonLoading:"skeleton-loading_1aI5z",skeleton:"skeleton_gzCKp"}},318:function(t,e,n){t.exports={game:"game_3Zz4J",name:"name_3l0-N","skeleton-loading":"skeleton-loading_3URmW",skeletonLoading:"skeleton-loading_3URmW",skeleton:"skeleton_1pKMc"}},319:function(t,e,n){t.exports={topic:"topic_-gkYU",name:"name_3XaYR","skeleton-loading":"skeleton-loading_23JMb",skeletonLoading:"skeleton-loading_23JMb",skeleton:"skeleton_RElLn"}},320:function(t,e,n){"use strict";var l=n(114),o={name:"CreateTagBtn",props:{title:{type:String,default:"新建分区"},parent:{type:String,required:!0}},methods:{actionCreate(){this.$prompt("请输入名称",this.title,{confirmButtonText:"提交",cancelButtonText:"取消"}).then(t=>{var{value:e}=t,n=e.trim();if(n.length>32)return this.$toast.error("名字不能超过32个字");Object(l.b)(this,{name:n,parent_slug:this.parent}).then(data=>{this.$emit("create",data)}).catch(t=>{this.$toast.error(t.message)})}).catch(()=>{})}}},r=n(9),component=Object(r.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("button",{attrs:{type:"button"},on:{click:this.actionCreate}},[this._t("default",[e("i",{staticClass:"el-icon-folder-add"}),this._v(" "),e("span",{domProps:{textContent:this._s(this.title)}})])],2)},[],!1,null,null,null);e.a=component.exports},397:function(t,e,n){"use strict";var l=n(316),o=n.n(l);e.default=o.a},398:function(t,e,n){"use strict";var l=n(317),o=n.n(l);e.default=o.a},399:function(t,e,n){"use strict";var l=n(318),o=n.n(l);e.default=o.a},400:function(t,e,n){"use strict";var l=n(319),o=n.n(l);e.default=o.a},401:function(t,e,n){},436:function(t,e,n){"use strict";var l={name:"BangumiItem",props:{item:{type:Object,required:!0}}},o=n(398),r=n(9);var component=Object(r.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:t.$style.bangumi},[n("NLink",{class:t.$style.avatar,attrs:{target:"_blank",to:t.$alias.tag(t.item.slug)}},[n("VImg",{attrs:{src:t.item.avatar,width:"110",height:"144",alt:t.item.name}})],1),t._v(" "),n("div",{class:t.$style.content},[n("div",{staticClass:"oneline"},[n("NLink",{staticClass:"fade-link",class:t.$style.name,attrs:{target:"_blank",to:t.$alias.tag(t.item.slug)},domProps:{innerHTML:t._s(t.item.name)}})],1),t._v(" "),n("p",{class:t.$style.desc,domProps:{textContent:t._s(t.item.intro)}})])],1)},[],!1,function(t){this.$style=o.default.locals||o.default},null,null);e.a=component.exports},438:function(t,e,n){"use strict";var l={name:"NotebookItem",props:{item:{type:Object,required:!0}}},o=n(397),r=n(9);var component=Object(r.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:t.$style.notebook},[n("NLink",{class:t.$style.avatar,attrs:{target:"_blank",to:t.$alias.tag(t.item.slug)}},[n("VImg",{attrs:{src:t.item.avatar,width:"117",height:"88",alt:t.item.name}})],1),t._v(" "),n("div",{class:t.$style.content},[n("div",{staticClass:"note-title oneline"},[n("NLink",{staticClass:"fade-link",class:t.$style.name,attrs:{target:"_blank",to:t.$alias.tag(t.item.slug)},domProps:{innerHTML:t._s(t.item.name)}})],1),t._v(" "),n("p",{staticClass:"oneline",class:t.$style.desc,attrs:{title:t.item.intro},domProps:{textContent:t._s(t.item.intro||"暂无简介")}}),t._v(" "),n("div",{class:t.$style.meta},[n("div",[n("i",{staticClass:"iconfont ic-order_fill"}),t._v(" "),n("span",[t._v("文章数："+t._s(t.item.pin_count||0))])])])])],1)},[],!1,function(t){this.$style=o.default.locals||o.default},null,null);e.a=component.exports},439:function(t,e,n){"use strict";var l={name:"GameItem",props:{item:{type:Object,required:!0}}},o=n(399),r=n(9);var component=Object(r.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:t.$style.game},[n("NLink",{attrs:{target:"_blank",to:t.$alias.tag(t.item.slug)}},[n("VImg",{attrs:{src:t.item.avatar,width:"150",height:"150",alt:t.item.name}}),t._v(" "),n("p",{staticClass:"oneline fade-link",class:t.$style.name,domProps:{innerHTML:t._s(t.item.name)}})],1)],1)},[],!1,function(t){this.$style=o.default.locals||o.default},null,null);e.a=component.exports},440:function(t,e,n){"use strict";var l={name:"TopicItem",props:{item:{type:Object,required:!0}}},o=n(400),r=n(9);var component=Object(r.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:t.$style.topic},[n("NLink",{staticClass:"avatar",attrs:{target:"_blank",to:t.$alias.tag(t.item.slug)}},[n("VImg",{attrs:{src:t.item.avatar,width:"40",height:"40",alt:t.item.name}})],1),t._v(" "),n("p",{staticClass:"oneline",class:t.$style.name},[n("NLink",{staticClass:"fade-link",attrs:{target:"_blank",to:t.$alias.tag(t.item.slug)},domProps:{innerHTML:t._s(t.item.name)}})],1)],1)},[],!1,function(t){this.$style=o.default.locals||o.default},null,null);e.a=component.exports},517:function(t,e,n){"use strict";var l=n(401);n.n(l).a},582:function(t,e,n){"use strict";n.r(e);n(13);var l=n(114),o=n(320),r=n(438),c=n(436),m=n(439),_=n(440),d={name:"UserEmotion",components:{CreateTagBtn:o.a,NotebookItem:r.a,BangumiItem:c.a,GameItem:m.a,TopicItem:_.a},props:{user:{type:Object,required:!0}},data:()=>({tags:null}),computed:{isMine(){return this.$store.getters.isMine(this.user.slug)},TA(){return this.$utils.convertTA(this.user.sex,this.isMine)}},asyncData(t){var{app:e,error:n,params:o}=t;return Object(l.a)(e,o).then(t=>({tags:t})).catch(n)},beforeMount(){this.batchPatch()},methods:{handleCreateNotebook(data){this.tags.notebook.unshift(data)},batchPatch(){var t=[],e=[4,5,12,4];Object.keys(this.tags).forEach((n,l)=>{t=t.concat(this.tags[n].map(t=>t.slug).slice(0,e[l]))}),this.$axios.$get("v1/tag/batch_patch",{params:{slug:t.join(",")}}).then(data=>{Object.keys(this.tags).forEach(t=>{this.tags[t].forEach((e,n)=>{Object.keys(data).forEach(l=>{e.slug===l&&(this.$set(this.tags[t],n,Object.assign(e,data[l])),this.$refs[t][n].$forceUpdate())})})})}).catch(()=>{})}}},h=(n(517),n(9)),component=Object(h.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.tags?n("div",{attrs:{id:"user-emotion"}},[n("div",{staticClass:"block"},[n("div",{staticClass:"block-title"},[n("NLink",{staticClass:"text",attrs:{to:"category/bangumi",append:""}},[n("span",{staticClass:"fade-link"},[t._v("看过的动漫")]),t._v(" "),t.tags.bangumi.length?n("i",{staticClass:"count",domProps:{textContent:t._s(t.tags.bangumi.length)}}):t._e()]),t._v(" "),t.tags.bangumi.length>4?n("NLink",{staticClass:"more fade-link",attrs:{to:"category/bangumi",append:""}},[n("span",[t._v("更多")]),t._v(" "),n("i",{staticClass:"el-icon-arrow-right"})]):t.tags.bangumi.length?t._e():[n("p",{staticClass:"empty"},[t._v(t._s(t.TA)+"还不是一个动漫迷~")]),t._v(" "),n("span")]],2),t._v(" "),t.tags.bangumi.length?n("ul",{staticClass:"bangumis clearfix"},t._l(t.tags.bangumi.slice(0,4),function(t){return n("BangumiItem",{key:t.slug,ref:"bangumi",refInFor:!0,attrs:{item:t}})}),1):t._e()]),t._v(" "),n("div",{staticClass:"block"},[n("div",{staticClass:"block-title"},[n("NLink",{staticClass:"text",attrs:{to:"category/game",append:""}},[n("span",{staticClass:"fade-link"},[t._v("玩过的游戏")]),t._v(" "),t.tags.game.length?n("i",{staticClass:"count",domProps:{textContent:t._s(t.tags.game.length)}}):t._e()]),t._v(" "),t.tags.game.length>5?n("NLink",{staticClass:"more fade-link",attrs:{to:"category/game",append:""}},[n("span",[t._v("更多")]),t._v(" "),n("i",{staticClass:"el-icon-arrow-right"})]):t.tags.game.length?t._e():[n("p",{staticClass:"empty"},[t._v(t._s(t.TA)+"从来不玩游戏~")]),t._v(" "),n("span")]],2),t._v(" "),t.tags.game.length?n("ul",{staticClass:"games clearfix"},t._l(t.tags.game.slice(0,5),function(t){return n("GameItem",{key:t.slug,ref:"game",refInFor:!0,attrs:{item:t}})}),1):t._e()]),t._v(" "),n("div",{staticClass:"block"},[n("div",{staticClass:"block-title"},[n("NLink",{staticClass:"text",attrs:{to:"category/topic",append:""}},[n("span",{staticClass:"fade-link"},[t._v("参与的话题")]),t._v(" "),t.tags.topic.length?n("i",{staticClass:"count",domProps:{textContent:t._s(t.tags.topic.length)}}):t._e()]),t._v(" "),t.tags.topic.length>12?n("NLink",{staticClass:"more fade-link",attrs:{to:"category/topic",append:""}},[n("span",[t._v("更多")]),t._v(" "),n("i",{staticClass:"el-icon-arrow-right"})]):t.tags.topic.length?t._e():[n("p",{staticClass:"empty"},[t._v(t._s(t.TA)+"不喜欢参与任何话题~")]),t._v(" "),n("span")]],2),t._v(" "),t.tags.topic.length?n("ul",{staticClass:"topics clearfix"},t._l(t.tags.topic.slice(0,12),function(t){return n("TopicItem",{key:t.slug,ref:"topic",refInFor:!0,attrs:{item:t}})}),1):t._e()]),t._v(" "),n("div",{staticClass:"block"},[n("div",{staticClass:"block-title"},[n("NLink",{staticClass:"text",attrs:{to:"category/notebook",append:""}},[n("span",{staticClass:"fade-link"},[t._v("发表的专栏")]),t._v(" "),t.tags.notebook.length?n("i",{staticClass:"count",domProps:{textContent:t._s(t.tags.notebook.length)}}):t._e()]),t._v(" "),t.tags.notebook.length?n("div",[t.isMine?n("CreateTagBtn",{staticClass:"create-btn fade-link",attrs:{title:"新建专栏",parent:"uh4f"},on:{create:t.handleCreateNotebook}}):n("span"),t._v(" "),t.tags.notebook.length>4?n("NLink",{staticClass:"more fade-link",attrs:{to:"category/notebook",append:""}},[n("span",[t._v("更多")]),t._v(" "),n("i",{staticClass:"el-icon-arrow-right"})]):t._e()],1):[n("p",{staticClass:"empty"},[t._v(t._s(t.TA)+"还没写过文章~")]),t._v(" "),t.isMine?n("CreateTagBtn",{staticClass:"create-btn fade-link",attrs:{title:"新建专栏",parent:"uh4f"},on:{create:t.handleCreateNotebook}}):n("span")]],2),t._v(" "),t.tags.notebook.length?n("ul",{staticClass:"notebooks"},t._l(t.tags.notebook.slice(0,4),function(t){return n("NotebookItem",{key:t.slug,ref:"notebook",refInFor:!0,attrs:{item:t}})}),1):t._e()])]):t._e()},[],!1,null,null,null);e.default=component.exports}}]);