exports.ids=[11],exports.modules={100:function(t,e,n){"use strict";n.r(e);var o=n(79),r=n.n(o);for(var l in o)"default"!==l&&function(t){n.d(e,t,function(){return o[t]})}(l);e.default=r.a},101:function(t,e,n){"use strict";n.r(e);var o=n(80),r=n.n(o);for(var l in o)"default"!==l&&function(t){n.d(e,t,function(){return o[t]})}(l);e.default=r.a},117:function(t,e,n){"use strict";var o=n(53),r=n.n(o),l=n(52),c=n.n(l),d=n(85),h={name:"SkeletonArticle",components:{},props:{},data:()=>({}),computed:{},watch:{},created(){},mounted(){},methods:{}},m=n(2);var f=Object(m.a)(h,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"skeleton-article"},[this._ssrNode('<div class="header"><div class="title gray"></div> <div class="area gray"></div></div> <div class="content"><div class="image gray"></div> <div class="intro"><div class="text"><div class="text-long gray"></div> <div class="text-shorten gray"></div></div> <div class="metas"><div class="meta gray"></div> <div class="meta gray"></div> <div class="meta gray"></div> <div class="meta gray"></div> <div class="meta gray"></div></div></div></div>')])},[],!1,function(t){var e=n(100);e.__inject__&&e.__inject__(t)},null,"53cbe552").exports,_={name:"PinFlowList",components:{ElSelect:c.a,ElOption:r.a,PinFlowItem:d.a,SkeletonArticle:f},props:{slug:{type:String,required:!0},showArea:{type:Boolean,default:!0}},data:()=>({time:"3-day",sort:"active"}),computed:{sortOpts:()=>[{label:"热门",value:"active"},{label:"最新",value:"newest"},{label:"热榜",value:"hottest"}],timeOpts:()=>[{label:"3天内",value:"3-day"},{label:"7天内",value:"7-day"},{label:"30天内",value:"30-day"},{label:"全部",value:"all"}],query(){return{$axios:this.$axios,slug:this.slug,sort:this.sort,time:this.time,take:10,changing:"slug"}}},methods:{changeSort(t){t!==this.sort&&(this.sort=t,this.$nextTick(()=>{this.$refs.loader.refresh()}))},changeTime(){this.$nextTick(()=>{this.$refs.loader.refresh()})},patchPin({data:data}){this.$axios.$get("v1/pin/batch_patch",{params:{slug:data.result.map(t=>t.slug).join(",")}}).then(t=>{this.$refs.loader.patch(t)}).catch(()=>{})}}};var v=Object(m.a)(_,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"pin-flow-list"},[t._ssrNode('<ul class="sortable">',"</ul>",[t._ssrNode(t._ssrList(t.sortOpts,function(e){return"<li"+t._ssrClass(null,{"is-active":e.value===t.sort})+">"+t._ssrEscape(t._s(e.label))+"</li>"})+" "),"hottest"===t.sort?o("ElSelect",{attrs:{size:"mini"},on:{change:t.changeTime},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}},t._l(t.timeOpts,function(t){return o("ElOption",{key:t.value,attrs:{label:t.label,value:t.value}})}),1):t._e()],2),t._ssrNode(" "),o("FlowLoader",{ref:"loader",attrs:{func:"getTagFlows",type:"newest"===t.sort?"lastId":"seenIds",query:t.query,callback:t.patchPin},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.flow;return o("ul",{staticClass:"flows"},t._l(n,function(e){return o("PinFlowItem",{key:e.slug,attrs:{"show-area":t.showArea,item:e}})}),1)}}])},[t._v(" "),o("SkeletonArticle",{attrs:{slot:"loading"},slot:"loading"}),t._v(" "),o("template",{slot:"nothing"},[o("img",{attrs:{src:n(98)}}),t._v(" "),o("p",[t._v("这里什么都没有")])]),t._v(" "),o("template",{slot:"error"},[o("img",{attrs:{src:n(99)}}),t._v(" "),o("p",[t._v("遇到错误了，点击重试")])])],2)],2)},[],!1,function(t){var e=n(101);e.__inject__&&e.__inject__(t)},null,"d8539a20");e.a=v.exports},118:function(t,e,n){"use strict";function o(t,e){const n=e?"scrollTop":"scrollLeft";let o=t[e?"pageYOffset":"pageXOffset"];return"number"!=typeof o&&(o=window.document.documentElement[n]),o}var r={name:"Affix",props:{top:{type:Number,default:0},bottom:{type:Number,default:void 0}},data:()=>({affix:!1,styles:{},slot:!1,slotStyle:{}}),computed:{offsetType(){let t="top";return this.bottom>=0&&(t="bottom"),t},classes(){return[{"v-affix":this.affix}]}},mounted(){const t=this._getScrollTarget();this.$utils.on(t,"scroll",this.handleScroll),this.$utils.on(t,"resize",this.handleScroll),this.$nextTick(()=>{this.handleScroll({type:"scroll"})})},beforeDestroy(){const t=this._getScrollTarget();this.$utils.off(t,"scroll",this.handleScroll),this.$utils.off(t,"resize",this.handleScroll)},methods:{_getScrollTarget(){let t=this.$el;if(!t)return null;for(;t&&"HTML"!==t.tagName&&"BOYD"!==t.tagName&&1===t.nodeType;){const e=window.getComputedStyle(t).overflowY;if("scroll"===e||"auto"===e)return"HTML"===t.tagName||"BODY"===t.tagName?document:t;t=t.parentNode}return document},handleScroll(t){const e=this.affix,n=o(window,!0),r=function(element){const rect=element.getBoundingClientRect(),t=o(window,!0),e=o(window),n=window.document.body,r=n.clientTop||0,l=n.clientLeft||0;return{top:rect.top+t-r,left:rect.left+e-l}}(this.$el),l=window.innerHeight,c=this.$el.getElementsByTagName("div")[0].offsetHeight,d=!e||"resize"===t.type;r.top-this.top<n&&"top"===this.offsetType&&d?(this.affix=!0,this.slotStyle={width:this.$refs.point.clientWidth+"px",height:this.$refs.point.clientHeight+"px"},this.slot=!0,this.styles={top:`${this.top}px`,left:`${r.left}px`,width:`${this.$el.offsetWidth}px`},this.$emit("on-change",!0)):r.top-this.top>n&&"top"===this.offsetType&&e&&(this.slot=!1,this.slotStyle={},this.affix=!1,this.styles=null,this.$emit("on-change",!1)),r.top+this.bottom+c>n+l&&"bottom"===this.offsetType&&d?(this.affix=!0,this.styles={bottom:`${this.bottom}px`,left:`${r.left}px`,width:`${this.$el.offsetWidth}px`},this.$emit("on-change",!0)):r.top+this.bottom+c<n+l&&"bottom"===this.offsetType&&e&&(this.affix=!1,this.styles=null,this.$emit("on-change",!1))}}},l=n(2);var component=Object(l.a)(r,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._ssrNode("<div"+t._ssrClass(null,t.classes)+t._ssrStyle(null,t.styles,null)+">","</div>",[t._t("default")],2),t._ssrNode(" <div"+t._ssrStyle(null,t.slotStyle,{display:t.slot?"":"none"})+"></div>")],2)},[],!1,function(t){var e=n(97);e.__inject__&&e.__inject__(t)},null,"bae1a548");e.a=component.exports},119:function(t,e,n){"use strict";var o=n(23),r={name:"CreateTagBtn",props:{text:{type:String,default:"分区"},parent:{type:String,required:!0}},methods:{actionCreate(){this.$prompt(`请输入${this.text}名`,`新建${this.text}`,{confirmButtonText:"提交",cancelButtonText:"取消"}).then(({value:t})=>{const e=t.trim();if(e.length>32)return this.$toast.error("名字不能超过32个字");Object(o.b)(this,{name:e,parent_slug:this.parent}).then(data=>{this.$emit("create",data)}).catch(t=>{this.$toast.error(t.message)})}).catch(()=>{})}}},l=n(2),component=Object(l.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("button",{attrs:{type:"button"},on:{click:this.actionCreate}},[this._ssrNode('<i class="el-icon-folder-add"></i> <span>'+this._ssrEscape("新建"+this._s(this.text))+"</span>")])},[],!1,null,null,"5cda1a3b");e.a=component.exports},164:function(t,e){},165:function(t,e){},232:function(t,e,n){"use strict";n.r(e);var o=n(164),r=n.n(o);for(var l in o)"default"!==l&&function(t){n.d(e,t,function(){return o[t]})}(l);e.default=r.a},233:function(t,e,n){"use strict";n.r(e);var o=n(165),r=n.n(o);for(var l in o)"default"!==l&&function(t){n.d(e,t,function(){return o[t]})}(l);e.default=r.a},268:function(t,e,n){"use strict";n.r(e);var o=n(23),r=n(118),l=n(119),c=n(117),d={name:"JoinCard",props:{tag:{type:Object,required:!0}},data:()=>({}),computed:{},watch:{},created(){},mounted(){},methods:{}},h=n(2);var m=Object(h.a)(d,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"join-card"},[e("VImg",{staticClass:"poster",attrs:{src:this.tag.avatar,width:"250",height:"150"}})],1)},[],!1,function(t){var e=n(232);e.__inject__&&e.__inject__(t)},null,"4d61e57f").exports,f={name:"TagShow",components:{Affix:r.a,joinCard:m,CreateTagBtn:l.a,PinFlowList:c.a},head(){const{tag:t}=this;return{title:t.name,meta:[{hid:"keywords",name:"keywords",content:t.alias},{hid:"description",name:"description",content:`${t.name},${t.intro}`}]}},props:{slug:{type:String,required:!0}},data:()=>({tag:null,parent:null,children:[]}),computed:{},watch:{},asyncData:({app:t,error:e,params:n})=>o.e(t,n).then(data=>({...data})).catch(e),layout:"web",created(){},mounted(){},beforeMount(){this.patchTag()},methods:{patchTag(){this.$axios.$get("v1/tag/patch",{params:{slug:this.slug}}).then(data=>{this.tag=this.$set(this,"tag",Object.assign(this.tag,data))}).catch(()=>{})},handleCreate(data){this.children.push(data),this.$toast.success("标签创建成功")},combineTag(){console.log("combineTag")},deleteTag(){this.$confirm("此操作将永久删除该文件, 是否继续?","删除标签").then(()=>{o.c(this,{slug:this.slug}).then(()=>{this.$toast.success("标签删除成功").then(()=>{window.location.reload()})}).catch(t=>{this.$toast.error(t.message)})}).catch(()=>{})},relinkTag(){this.$prompt("请输入目标父节点id","移动标签",{confirmButtonText:"提交",cancelButtonText:"取消",inputPattern:/^[a-z0-9]+$/i,inputErrorMessage:"格式不正确"}).then(({value:t})=>{o.d(this,{slug:this.slug,target_slug:t}).then(()=>{this.$toast.success("标签移动成功")}).catch(t=>{this.$toast.error(t.message)})}).catch(()=>{})},updateTag(){this.$prompt("请输入标签名","更新标签",{confirmButtonText:"提交",cancelButtonText:"取消"}).then(({value:t})=>{const e=t.trim();if(e.length>32)return this.$toast.error("名字不能超过32个字");o.f(this,{name:e,slug:this.slug,avatar:""}).then(()=>{this.$toast.success("标签更新成功")}).catch(t=>{this.$toast.error(t.message)})}).catch(()=>{})}}};var _=Object(h.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tag-show"}},[n("ElRow",{staticClass:"container"},[n("ElCol",{attrs:{span:5}},[n("Affix",{staticClass:"left-aside",attrs:{top:50}},[n("joinCard",{attrs:{tag:t.tag}}),t._v(" "),t.children.length?n("ul",{staticClass:"child-node"},t._l(t.children.slice(0,10),function(e){return n("li",{key:e.slug,staticClass:"node"},[n("NLink",{attrs:{to:"/tag/"+e.slug}},[n("VImg",{attrs:{src:e.avatar,width:"32",height:"32",alt:e.name}}),t._v(" "),n("span",{domProps:{textContent:t._s(e.name)}})],1)],1)}),0):t._e()],1)],1),t._v(" "),n("ElCol",{staticClass:"main-wrap",attrs:{span:14}},[n("PinFlowList",{attrs:{slug:t.slug,"show-area":!1}})],1),t._v(" "),n("ElCol",{attrs:{span:5}})],1)],1)},[],!1,function(t){var e=n(233);e.__inject__&&e.__inject__(t)},null,"5d3bcdf8");e.default=_.exports},74:function(t,e){t.exports={"pin-1-pc-media":"pin-1-pc-media_36tsQ",pin1PcMedia:"pin-1-pc-media_36tsQ",desc:"desc_2iLTt","pin-1-pc":"pin-1-pc_2vpWi",pin1Pc:"pin-1-pc_2vpWi",title:"title_yYP3L",media:"media_2aleH",text:"text_36HVK",badge:"badge_dzqRd",music:"music_1zf5N",video:"video_W64Pp","skeleton-loading":"skeleton-loading_h2GMS",skeletonLoading:"skeleton-loading_h2GMS",skeleton:"skeleton_3xDfV"}},78:function(t,e){},79:function(t,e){},80:function(t,e){},82:function(t,e,n){"use strict";n.r(e);var o=n(74),r=n.n(o);for(var l in o)"default"!==l&&function(t){n.d(e,t,function(){return o[t]})}(l);e.default=r.a},85:function(t,e,n){"use strict";var o={props:{item:{type:Object,required:!0},showUser:{type:Boolean,default:!0},showArea:{type:Boolean,default:!0},secretLink:{type:String,default:""}}},r={name:"PinArticle",mixins:[o]},l=n(2);var c={name:"PinFlowItem",components:{Type1:Object(l.a)(r,function(){var t,e=this,n=e.$createElement,o=e._self._c||n;return o("li",{class:e.$style["pin-1"]},[o("NLink",{staticClass:"only-h5",class:e.$style["pin-1-h5"],attrs:{to:e.$alias.pin(e.secretLink||e.item.slug)}},[e._v("\n    "+e._s(e.item.title.text)+"\n  ")]),e._ssrNode(" "),e._ssrNode("<div"+e._ssrClass("only-pc",[e.$style["pin-1-pc"],(t={},t[e.$style["pin-1-pc-media"]]=e.item.media,t)])+">","</div>",[e._ssrNode("<h2"+e._ssrClass(null,e.$style.title)+">","</h2>",[o("NLink",{staticClass:"fade-link",attrs:{target:"_blank",to:e.$alias.pin(e.secretLink||e.item.slug)},domProps:{textContent:e._s(e.item.title.text)}}),e._ssrNode(" "),e.showArea?[e.item.area?o("NLink",{attrs:{to:e.$alias.tag(e.item.area.slug),target:"_blank"}},[o("VImg",{attrs:{src:e.item.area.avatar,width:"24",height:"24",radius:"5px"}})],1):e.item.topic?o("NLink",{attrs:{to:e.$alias.tag(e.item.topic.slug),target:"_blank"}},[o("VImg",{attrs:{src:e.item.topic.avatar,width:"24",height:"24",radius:"5px"}})],1):e._e()]:e._e()],2),e._ssrNode(" "),e._ssrNode("<div"+e._ssrClass("clearfix",e.$style.content)+">","</div>",[e.item.media?o("NLink",{class:e.$style.media,attrs:{to:e.$alias.pin(e.secretLink||e.item.slug),target:"_blank"}},[e.item.media.first_video?o("div",{class:e.$style.video},[e.item.media.banner?o("VImg",{attrs:{src:e.item.media.banner.url,width:"187",height:"105"}}):e._e(),e._v(" "),o("i",{staticClass:"iconfont ic-bilibili",class:e.$style.badge})],1):e.item.media.first_music?o("div",{class:e.$style.music},[e.item.media.banner?o("VImg",{attrs:{src:e.item.media.banner.url,width:"187",height:"105"}}):e._e(),e._v(" "),o("i",{staticClass:"iconfont ic-netease",class:e.$style.badge})],1):o("VImg",{attrs:{src:e.item.media.banner.url,width:"187",height:"105"}}),e._v(" "),o("div",{class:e.$style.text},[o("i",{staticClass:"iconfont ic-video"}),e._v(" "),o("span",{domProps:{textContent:e._s(e.item.media.video_count)}}),e._v(" "),o("i",{staticClass:"iconfont ic-systemprompt"}),e._v(" "),o("span",{domProps:{textContent:e._s(e.item.media.music_count)}}),e._v(" "),o("i",{staticClass:"iconfont ic-camera"}),e._v(" "),o("span",{domProps:{textContent:e._s(e.item.media.image_count)}})])],1):e._e(),e._ssrNode(" "),e._ssrNode("<div"+e._ssrClass(null,e.$style.desc)+">","</div>",[e._ssrNode("<main><p>"+e._s(e.item.intro)+"</p></main> "),e._ssrNode("<footer>","</footer>",[e.showUser?o("NLink",{staticClass:"oneline",attrs:{to:e.$alias.user(e.item.author.slug),target:"_blank"}},[o("VImg",{attrs:{src:e.item.author.avatar,radius:"50%",width:"24",height:"24"}}),e._v("\n             \n            "),o("span",{domProps:{textContent:e._s(e.item.author.nickname)}})],1):e._e(),e._ssrNode(' <div><i class="iconfont ic-message_fill"></i> <span>'+e._ssrEscape(e._s(e.item.comment_count))+'</span></div> <div><i class="iconfont ic-good_fill"></i> <span>'+e._ssrEscape(e._s(e.item.like_count))+'</span></div> <div><i class="iconfont ic-mark_fill"></i> <span>'+e._ssrEscape(e._s(e.item.mark_count))+'</span></div> <div><i class="iconfont ic-browse_fill"></i> <span>'+e._ssrEscape(e._s(e.item.visit_count))+"</span></div>")],2)],2)],2)],2)],2)},[],!1,function(t){var e=n(82);e.__inject__&&e.__inject__(t),this.$style=e.locals||e},null,"1ffbcd38").exports},mixins:[o],data:()=>({}),computed:{},watch:{},created(){},mounted(){},methods:{}},d=Object(l.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return this.item?e("type-"+this.item.content_type,{tag:"component",attrs:{item:this.item,"show-user":this.showUser,"show-area":this.showArea,"secret-link":this.secretLink}}):this._e()},[],!1,null,null,"ec5e8a36");e.a=d.exports},97:function(t,e,n){"use strict";n.r(e);var o=n(78),r=n.n(o);for(var l in o)"default"!==l&&function(t){n.d(e,t,function(){return o[t]})}(l);e.default=r.a},98:function(t,e,n){t.exports=n.p+"img/aa8b45a.png"},99:function(t,e,n){t.exports=n.p+"img/3251725.png"}};
//# sourceMappingURL=f851c29354510a88932b.js.map