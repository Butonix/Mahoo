exports.ids=[37],exports.modules={100:function(t,e,n){"use strict";var l=n(22),r={name:"CreateTagBtn",props:{title:{type:String,default:"新建分区"},parent:{type:String,required:!0}},methods:{actionCreate(){this.$prompt("请输入名称",this.title,{confirmButtonText:"提交",cancelButtonText:"取消"}).then(({value:t})=>{const e=t.trim();if(e.length>32)return this.$toast.error("名字不能超过32个字");Object(l.b)(this,{name:e,parent_slug:this.parent}).then(data=>{this.$emit("create",data)}).catch(t=>{this.$toast.error(t.message)})}).catch(()=>{})}}},o=n(1),component=Object(o.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("button",{attrs:{type:"button"},on:{click:this.actionCreate}},[this._t("default",[e("i",{staticClass:"el-icon-folder-add"}),this._v(" "),e("span",{domProps:{textContent:this._s(this.title)}})])],2)},[],!1,null,null,"5cda1a3b");e.a=component.exports},104:function(t,e,n){"use strict";n.r(e);var l=n(88),r=n.n(l);for(var o in l)"default"!==o&&function(t){n.d(e,t,function(){return l[t]})}(o);e.default=r.a},106:function(t,e,n){"use strict";var l={name:"SkeletonArticle",components:{},props:{},data:()=>({}),computed:{},watch:{},created(){},mounted(){},methods:{}},r=n(1);var component=Object(r.a)(l,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"skeleton-article"},[this._ssrNode('<div class="only-pc"><div class="header"><div class="title gray"></div> <div class="area gray"></div></div> <div class="content"><div class="image gray"></div> <div class="intro"><div class="text"><div class="text-long gray"></div> <div class="text-shorten gray"></div></div> <div class="metas"><div class="meta gray"></div> <div class="meta gray"></div> <div class="meta gray"></div> <div class="meta gray"></div> <div class="meta gray"></div></div></div></div></div> <div class="only-h5"><div class="header"><div class="avatar gray"></div> <div class="title gray"></div></div> <div class="content"><div class="image gray"></div> <div class="intro"><div class="text"><div class="text-long gray"></div> <div class="text-shorten gray"></div></div></div></div> <div class="footer"><div class="meta gray"></div> <div class="meta gray"></div> <div class="meta gray"></div> <div class="meta gray"></div> <div class="meta gray"></div></div></div>')])},[],!1,function(t){var e=n(104);e.__inject__&&e.__inject__(t)},null,"53cbe552");e.a=component.exports},116:function(t,e,n){"use strict";n.r(e);var l=n(93),r=n.n(l);for(var o in l)"default"!==o&&function(t){n.d(e,t,function(){return l[t]})}(o);e.default=r.a},117:function(t,e,n){"use strict";n.r(e);var l=n(94),r=n.n(l);for(var o in l)"default"!==o&&function(t){n.d(e,t,function(){return l[t]})}(o);e.default=r.a},118:function(t,e,n){"use strict";n.r(e);var l=n(95),r=n.n(l);for(var o in l)"default"!==o&&function(t){n.d(e,t,function(){return l[t]})}(o);e.default=r.a},136:function(t,e,n){"use strict";function l(t,e){const n=e?"scrollTop":"scrollLeft";let l=t[e?"pageYOffset":"pageXOffset"];return"number"!=typeof l&&(l=window.document.documentElement[n]),l}var r={name:"Affix",props:{top:{type:Number,default:0},bottom:{type:Number,default:void 0}},data:()=>({affix:!1,styles:{},slot:!1,slotStyle:{}}),computed:{offsetType(){let t="top";return this.bottom>=0&&(t="bottom"),t},classes(){return[{"v-affix":this.affix}]}},mounted(){if(window.screen.width<789)return;const t=this._getScrollTarget();this.$utils.on(t,"scroll",this.handleScroll),this.$utils.on(t,"resize",this.handleScroll),this.$nextTick(()=>{this.handleScroll({type:"scroll"})})},beforeDestroy(){const t=this._getScrollTarget();this.$utils.off(t,"scroll",this.handleScroll),this.$utils.off(t,"resize",this.handleScroll)},methods:{_getScrollTarget(){let t=this.$el;if(!t)return null;for(;t&&"HTML"!==t.tagName&&"BOYD"!==t.tagName&&1===t.nodeType;){const e=window.getComputedStyle(t).overflowY;if("scroll"===e||"auto"===e)return"HTML"===t.tagName||"BODY"===t.tagName?document:t;t=t.parentNode}return document},handleScroll(t){const e=this.affix,n=l(window,!0),r=function(element){const rect=element.getBoundingClientRect(),t=l(window,!0),e=l(window),n=window.document.body,r=n.clientTop||0,o=n.clientLeft||0;return{top:rect.top+t-r,left:rect.left+e-o}}(this.$el),o=window.innerHeight,c=this.$el.getElementsByTagName("div")[0].offsetHeight,d=!e||"resize"===t.type;r.top-this.top<n&&"top"===this.offsetType&&d?(this.affix=!0,this.slotStyle={width:this.$refs.point.clientWidth+"px",height:this.$refs.point.clientHeight+"px"},this.slot=!0,this.styles={top:`${this.top}px`,left:`${r.left}px`,width:`${this.$el.offsetWidth}px`},this.$emit("on-change",!0)):r.top-this.top>n&&"top"===this.offsetType&&e&&(this.slot=!1,this.slotStyle={},this.affix=!1,this.styles=null,this.$emit("on-change",!1)),r.top+this.bottom+c>n+o&&"bottom"===this.offsetType&&d?(this.affix=!0,this.styles={bottom:`${this.bottom}px`,left:`${r.left}px`,width:`${this.$el.offsetWidth}px`},this.$emit("on-change",!0)):r.top+this.bottom+c<n+o&&"bottom"===this.offsetType&&e&&(this.affix=!1,this.styles=null,this.$emit("on-change",!1))}}},o=n(1);var component=Object(o.a)(r,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._ssrNode("<div"+t._ssrClass(null,t.classes)+t._ssrStyle(null,t.styles,null)+">","</div>",[t._t("default")],2),t._ssrNode(" <div"+t._ssrStyle(null,t.slotStyle,{display:t.slot?"":"none"})+"></div>")],2)},[],!1,function(t){var e=n(116);e.__inject__&&e.__inject__(t)},null,"bae1a548");e.a=component.exports},137:function(t,e,n){"use strict";var l=n(54),r=n.n(l),o=n(53),c=n.n(o),d=n(106),h=n(96),m={name:"PinFlowList",components:{ElSelect:c.a,ElOption:r.a,PinArticle:h.a,SkeletonArticle:d.a},props:{slug:{type:String,required:!0},showArea:{type:Boolean,default:!0}},data:()=>({time:"3-day",sort:"active"}),computed:{sortOpts:()=>[{label:"热门",value:"active"},{label:"最新",value:"newest"},{label:"热榜",value:"hottest"}],timeOpts:()=>[{label:"3天内",value:"3-day"},{label:"7天内",value:"7-day"},{label:"30天内",value:"30-day"},{label:"全部",value:"all"}],query(){return{$axios:this.$axios,slug:this.slug,sort:this.sort,time:this.time,take:10,changing:"slug"}}},methods:{changeSort(t){t!==this.sort&&(this.sort=t,this.$nextTick(()=>{this.$refs.loader.refresh()}))},changeTime(){this.$nextTick(()=>{this.$refs.loader.refresh()})},patchPin({data:data}){this.$axios.$get("v1/pin/batch_patch",{params:{slug:data.result.map(t=>t.slug).join(",")}}).then(t=>{this.$refs.loader.patch(t)}).catch(()=>{})}}},_=n(1);var component=Object(_.a)(m,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"pin-flow-list"},[t._ssrNode('<ul class="sortable">',"</ul>",[t._ssrNode(t._ssrList(t.sortOpts,function(e){return"<li"+t._ssrClass(null,{"is-active":e.value===t.sort})+">"+t._ssrEscape(t._s(e.label))+"</li>"})+" "),"hottest"===t.sort?l("ElSelect",{attrs:{size:"mini"},on:{change:t.changeTime},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}},t._l(t.timeOpts,function(t){return l("ElOption",{key:t.value,attrs:{label:t.label,value:t.value}})}),1):t._e()],2),t._ssrNode(" "),l("FlowLoader",{ref:"loader",attrs:{func:"getTagFlows",type:"newest"===t.sort?"lastId":"seenIds",query:t.query,callback:t.patchPin},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.flow;return l("ul",{staticClass:"flows"},t._l(n,function(e){return l("PinArticle",{key:e.slug,attrs:{"show-area":t.showArea,item:e}})}),1)}}])},[t._v(" "),l("SkeletonArticle",{attrs:{slot:"loading"},slot:"loading"}),t._v(" "),l("template",{slot:"nothing"},[l("img",{attrs:{src:n(97)}}),t._v(" "),l("p",[t._v("这里什么都没有")])]),t._v(" "),l("template",{slot:"error"},[l("img",{attrs:{src:n(98)}}),t._v(" "),l("p",[t._v("遇到错误了，点击重试")])])],2)],2)},[],!1,function(t){var e=n(117);e.__inject__&&e.__inject__(t)},null,"d8539a20");e.a=component.exports},138:function(t,e,n){"use strict";var l=n(100),r=n(57),o=n.n(r),c=n(22),d={name:"TagHotList",components:{RollList:o.a,CreateTagBtn:l.a},props:{slug:{type:String,required:!0},title:{type:String,default:"热门分区"},children:{type:Object,required:!0}},data(){return{allChildren:this.children.result,page:1}},computed:{isAdmin(){return this.$store.getters.isAdmin}},methods:{handleCreate(data){this.allChildren.unshift(data),this.$toast.success("创建成功")},getData(){return Object(c.e)(this,{page:this.page,slug:this.slug}).then(data=>{this.allChildren=this.allChildren.concat(data.result),this.page++}).catch(()=>{})}}},h=n(1);var component=Object(h.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.allChildren.length?n("div",{staticClass:"tag-hot-list"},[t._ssrNode('<h3 class="title only-pc">',"</h3>",[t._ssrNode("<span>"+t._ssrEscape(t._s(t.title))+"</span> "),t.isAdmin?n("CreateTagBtn",{attrs:{parent:t.slug},on:{create:t.handleCreate}},[n("i",{staticClass:"el-icon-plus fade-link"})]):t._e()],2),t._ssrNode(" "),n("RollList",{attrs:{list:t.allChildren,fetch:t.getData,count:10},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.list;return n("ul",{staticClass:"child-node"},t._l(l,function(e){return n("li",{key:e.slug,staticClass:"node clearfix"},[n("NLink",{attrs:{to:"/tag/"+e.slug}},[n("img",{attrs:{src:t.$resize(e.avatar,{width:50}),width:"50",height:"50",alt:e.name}}),t._v(" "),n("span",{staticClass:"oneline",domProps:{textContent:t._s(e.name)}})])],1)}),0)}}],null,!1,2023740796)},[n("i",{staticClass:"el-icon-refresh",attrs:{slot:"icon"},slot:"icon"}),t._v(" "),n("template",{slot:"text"},[t._v("\n       换一换\n    ")])],2)],2):t._e()},[],!1,function(t){var e=n(118);e.__inject__&&e.__inject__(t)},null,"4c31d956");e.a=component.exports},139:function(t,e,n){"use strict";e.a={layout:"web",head(){const{tag:t}=this;return{title:t.name,meta:[{hid:"keywords",name:"keywords",content:t.alias},{hid:"description",name:"description",content:`${t.name},${t.intro}`},{hid:"share-image",name:"share-image",content:t.avatar}]}},data:()=>({tag:null,children:null}),beforeMount(){this.patchTag()},methods:{patchTag(){this.$axios.$get("v1/tag/patch",{params:{slug:this.slug}}).then(data=>{this.tag=this.$set(this,"tag",Object.assign(this.tag,data))}).catch(()=>{})}}}},164:function(t,e){},265:function(t,e,n){"use strict";n.r(e);var l=n(164),r=n.n(l);for(var o in l)"default"!==o&&function(t){n.d(e,t,function(){return l[t]})}(o);e.default=r.a},354:function(t,e,n){"use strict";n.r(e);var l=n(139),r=n(22),o=n(136),c=n(137),d=n(138),h={name:"ZoneBangumi",components:{Affix:o.a,PinFlowList:c.a,TagHotList:d.a},mixins:[l.a],data:()=>({slug:"2he"}),asyncData:({app:t,error:e})=>Promise.all([Object(r.d)(t,{slug:"2he"}),Object(r.e)(t,{slug:"2he"})]).then(data=>({tag:data[0],children:data[1]})).catch(e)},m=n(1);var component=Object(m.a)(h,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"zone-bangumi"}},[e("ElRow",{staticClass:"container"},[e("ElCol",{attrs:{xs:24,span:5}},[e("Affix",{staticClass:"left-aside",attrs:{top:70}},[this.children?e("TagHotList",{attrs:{slug:this.slug,title:"热门动漫",children:this.children}}):this._e()],1)],1),this._v(" "),e("ElCol",{staticClass:"main-wrap",attrs:{xs:24,span:14}},[e("PinFlowList",{attrs:{slug:this.slug}})],1),this._v(" "),e("ElCol",{attrs:{xs:24,span:5}},[e("br")])],1)],1)},[],!1,function(t){var e=n(265);e.__inject__&&e.__inject__(t)},null,"2f7a04fa");e.default=component.exports},85:function(t,e){t.exports={"pin-article-pc-media":"pin-article-pc-media_EdOoY",pinArticlePcMedia:"pin-article-pc-media_EdOoY",desc:"desc_2dZ7I","pin-article-pc":"pin-article-pc_n9l6d",pinArticlePc:"pin-article-pc_n9l6d",title:"title_11AiS",badge:"badge_33AUe",link:"link_2zXb9",area:"area_1BjFz",media:"media_2oWmK",text:"text_2wAMb",music:"music_3Ur6b",video:"video_32S3V","pin-article-h5":"pin-article-h5_2Chnp",pinArticleH5:"pin-article-h5_2Chnp",zone:"zone_1dseY","skeleton-loading":"skeleton-loading_LpB2j",skeletonLoading:"skeleton-loading_LpB2j",skeleton:"skeleton_3OUSt"}},88:function(t,e){},89:function(t,e,n){"use strict";e.a={props:{item:{type:Object,required:!0},showUser:{type:Boolean,default:!0},showArea:{type:Boolean,default:!0},secretLink:{type:String,default:""}}}},92:function(t,e,n){"use strict";n.r(e);var l=n(85),r=n.n(l);for(var o in l)"default"!==o&&function(t){n.d(e,t,function(){return l[t]})}(o);e.default=r.a},93:function(t,e){},94:function(t,e){},95:function(t,e){},96:function(t,e,n){"use strict";var l={name:"PinArticle",mixins:[n(89).a]},r=n(1);var component=Object(r.a)(l,function(){var t,e=this,n=e.$createElement,l=e._self._c||n;return l("li",{class:e.$style["pin-article"]},[l("NLink",{staticClass:"only-h5",class:e.$style["pin-article-h5"],attrs:{to:e.$alias.pin(e.secretLink||e.item.slug)}},[l("header",{staticClass:"oneline"},[e.showUser?l("VImg",{attrs:{src:e.item.author.avatar,radius:"50%",width:"24",height:"24"}}):e._e(),e._v(" "),l("span",{class:e.$style.badge,domProps:{textContent:e._s(e.item.badge)}}),e._v(" "),l("span",{domProps:{innerHTML:e._s(e.item.title.text)}})],1),e._v(" "),l("main",[e.item.media?l("div",{class:e.$style.media},[e.item.media.first_video?l("div",{class:e.$style.video},[e.item.media.banner?l("VImg",{attrs:{src:e.item.media.banner.url,blur:!0,width:"130",height:"90"}}):e._e(),e._v(" "),l("i",{staticClass:"iconfont ic-bilibili",class:e.$style.badge})],1):e.item.media.first_music?l("div",{class:e.$style.music},[e.item.media.banner?l("VImg",{attrs:{src:e.item.media.banner.url,blur:!0,width:"130",height:"90"}}):e._e(),e._v(" "),l("i",{staticClass:"iconfont ic-netease",class:e.$style.badge})],1):l("VImg",{attrs:{src:e.item.media.banner.url,blur:!0,width:"130",height:"90"}})],1):e._e(),e._v(" "),l("p",{domProps:{innerHTML:e._s(e.item.intro)}})]),e._v(" "),l("footer",[e.showArea?l("span",{staticClass:"oneline",class:e.$style.zone},[e._v("\n        "+e._s(e.item.area?e.item.area.name:e.item.topic?e.item.topic.name:"")+"\n      ")]):e._e(),e._v(" "),l("div",[l("i",{staticClass:"iconfont ic-message_fill"}),e._v(" "),l("span",{domProps:{textContent:e._s(e.item.comment_count)}})]),e._v(" "),l("div",[l("i",{staticClass:"iconfont ic-good_fill"}),e._v(" "),l("span",{domProps:{textContent:e._s(e.item.like_count)}})]),e._v(" "),l("div",[l("i",{staticClass:"iconfont ic-mark_fill"}),e._v(" "),l("span",{domProps:{textContent:e._s(e.item.mark_count)}})]),e._v(" "),l("div",[l("i",{staticClass:"iconfont ic-browse_fill"}),e._v(" "),l("span",{domProps:{textContent:e._s(e.item.visit_count)}})])])]),e._ssrNode(" "),e._ssrNode("<div"+e._ssrClass("only-pc",[e.$style["pin-article-pc"],(t={},t[e.$style["pin-article-pc-media"]]=e.item.media,t)])+">","</div>",[e._ssrNode("<h2"+e._ssrClass(null,e.$style.title)+">","</h2>",[e._ssrNode("<span"+e._ssrClass(null,e.$style.badge)+">"+e._ssrEscape(e._s(e.item.badge))+"</span> "),e.showArea?e._ssrNode("<div"+e._ssrClass(null,e.$style.area)+">","</div>",[e.item.area?l("NLink",{attrs:{to:e.$alias.tag(e.item.area.slug),target:"_blank"}},[l("VImg",{attrs:{src:e.item.area.avatar,width:"24",height:"24",radius:"5px"}})],1):e.item.topic?l("NLink",{attrs:{to:e.$alias.tag(e.item.topic.slug),target:"_blank"}},[l("VImg",{attrs:{src:e.item.topic.avatar,width:"24",height:"24",radius:"5px"}})],1):e._e()],1):e._e(),e._ssrNode(" "),e._ssrNode("<p"+e._ssrClass("oneline",e.$style.link)+">","</p>",[l("NLink",{staticClass:"fade-link oneline",attrs:{target:"_blank",to:e.$alias.pin(e.secretLink||e.item.slug)},domProps:{innerHTML:e._s(e.item.title.text)}})],1)],2),e._ssrNode(" "),e._ssrNode("<div"+e._ssrClass("clearfix",e.$style.content)+">","</div>",[e.item.media?l("NLink",{class:e.$style.media,attrs:{to:e.$alias.pin(e.secretLink||e.item.slug),target:"_blank"}},[e.item.media.first_video?l("div",{class:e.$style.video},[e.item.media.banner?l("VImg",{attrs:{src:e.item.media.banner.url,blur:!0,width:"187",height:"105"}}):e._e(),e._v(" "),l("i",{staticClass:"iconfont ic-bilibili",class:e.$style.badge})],1):e.item.media.first_music?l("div",{class:e.$style.music},[e.item.media.banner?l("VImg",{attrs:{src:e.item.media.banner.url,blur:!0,width:"187",height:"105"}}):e._e(),e._v(" "),l("i",{staticClass:"iconfont ic-netease",class:e.$style.badge})],1):l("VImg",{attrs:{src:e.item.media.banner.url,blur:!0,width:"187",height:"105"}}),e._v(" "),l("div",{class:e.$style.text},[l("i",{staticClass:"iconfont ic-video"}),e._v(" "),l("span",{domProps:{textContent:e._s(e.item.media.video_count)}}),e._v(" "),l("i",{staticClass:"iconfont ic-systemprompt"}),e._v(" "),l("span",{domProps:{textContent:e._s(e.item.media.music_count)}}),e._v(" "),l("i",{staticClass:"iconfont ic-camera"}),e._v(" "),l("span",{domProps:{textContent:e._s(e.item.media.image_count)}})])],1):e._e(),e._ssrNode(" "),e._ssrNode("<div"+e._ssrClass(null,e.$style.desc)+">","</div>",[e._ssrNode("<main><p>"+e._s(e.item.intro)+"</p></main> "),e._ssrNode("<footer>","</footer>",[e.showUser?l("NLink",{staticClass:"oneline",attrs:{to:e.$alias.user(e.item.author.slug),target:"_blank"}},[l("VImg",{attrs:{src:e.item.author.avatar,radius:"50%",width:"24",height:"24"}}),e._v("\n             \n            "),l("span",{domProps:{textContent:e._s(e.item.author.nickname)}})],1):e._e(),e._ssrNode(' <div><i class="iconfont ic-message_fill"></i> <span>'+e._ssrEscape(e._s(e.item.comment_count))+'</span></div> <div><i class="iconfont ic-good_fill"></i> <span>'+e._ssrEscape(e._s(e.item.like_count))+'</span></div> <div><i class="iconfont ic-mark_fill"></i> <span>'+e._ssrEscape(e._s(e.item.mark_count))+'</span></div> <div><i class="iconfont ic-browse_fill"></i> <span>'+e._ssrEscape(e._s(e.item.visit_count))+"</span></div>")],2)],2)],2)],2)],2)},[],!1,function(t){var e=n(92);e.__inject__&&e.__inject__(t),this.$style=e.locals||e},null,"4dd47fa2");e.a=component.exports},97:function(t,e,n){t.exports=n.p+"img/aa8b45a.png"},98:function(t,e,n){t.exports=n.p+"img/3251725.png"}};
//# sourceMappingURL=2377f9f03495d0129070.js.map