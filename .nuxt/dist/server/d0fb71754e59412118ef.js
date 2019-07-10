exports.ids=[10],exports.modules={101:function(t,e,n){"use strict";n.r(e);var o=n(83),l=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e.default=l.a},102:function(t,e,n){"use strict";n.r(e);var o=n(84),l=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e.default=l.a},117:function(t,e,n){"use strict";var o=n(53),l=n.n(o),r=n(52),c=n.n(r),h=n(89),d={name:"PinFlowList",components:{ElSelect:c.a,ElOption:l.a,PinFlowItem:h.a},props:{slug:{type:String,required:!0},loop:{type:Number,default:0}},data:()=>({time:"3-day",sort:"active"}),computed:{sortOpts:()=>[{label:"热门",value:"active"},{label:"最新",value:"newest"},{label:"热榜",value:"hottest"}],timeOpts:()=>[{label:"3天内",value:"3-day"},{label:"7天内",value:"7-day"},{label:"30天内",value:"30-day"},{label:"全部",value:"all"}],query(){return{$axios:this.$axios,slug:this.slug,sort:this.sort,loop:this.loop,time:this.time,take:10,changing:"slug"}}},methods:{changeSort(t){t!==this.sort&&(this.sort=t,this.$refs.loader.refresh())},changeTime(){this.$refs.loader.refresh()},patchPin({data:data}){this.$axios.$get("v1/pin/batch_patch",{params:{slug:data.result.map(t=>t.slug).join(",")}}).then(t=>{this.$refs.loader.patch(t)}).catch(()=>{})}}},m=n(2);var component=Object(m.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pin-flow-list"},[t._ssrNode('<ul class="sortable">',"</ul>",[t._ssrNode(t._ssrList(t.sortOpts,function(e){return"<li"+t._ssrClass(null,{"is-active":e.value===t.sort})+">"+t._ssrEscape(t._s(e.label))+"</li>"})+" "),"hottest"===t.sort?n("ElSelect",{attrs:{size:"mini"},on:{change:t.changeTime},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}},t._l(t.timeOpts,function(t){return n("ElOption",{key:t.value,attrs:{label:t.label,value:t.value}})}),1):t._e()],2),t._ssrNode(" "),n("FlowLoader",{ref:"loader",attrs:{func:"getTagFlows",type:"newest"===t.sort?"lastId":"seenIds",query:t.query,callback:t.patchPin},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.flow;return n("ul",{staticClass:"flows"},t._l(o,function(e){return n("PinFlowItem",{key:e.slug,attrs:{"show-area":!!t.loop,item:e}})}),1)}}])})],2)},[],!1,function(t){var e=n(102);e.__inject__&&e.__inject__(t)},null,"d8539a20");e.a=component.exports},118:function(t,e,n){"use strict";var o=n(23),l={name:"CreateTagBtn",props:{text:{type:String,default:"分区"},parent:{type:String,required:!0}},methods:{actionCreate(){this.$prompt(`请输入${this.text}名`,`新建${this.text}`,{confirmButtonText:"提交",cancelButtonText:"取消"}).then(({value:t})=>{const e=t.trim();if(e.length>32)return this.$toast.error("名字不能超过32个字");Object(o.b)(this,{name:e,parent_slug:this.parent}).then(data=>{this.$emit("create",data)}).catch(t=>{this.$toast.error(t.message)})}).catch(()=>{})}}},r=n(2),component=Object(r.a)(l,function(){var t=this.$createElement;return(this._self._c||t)("button",{attrs:{type:"button"},on:{click:this.actionCreate}},[this._ssrNode('<i class="el-icon-folder-add"></i> <span>'+this._ssrEscape("新建"+this._s(this.text))+"</span>")])},[],!1,null,null,"5cda1a3b");e.a=component.exports},119:function(t,e,n){"use strict";function o(t,e){const n=e?"scrollTop":"scrollLeft";let o=t[e?"pageYOffset":"pageXOffset"];return"number"!=typeof o&&(o=window.document.documentElement[n]),o}var l={name:"Affix",props:{top:{type:Number,default:0},bottom:{type:Number,default:void 0}},data:()=>({affix:!1,styles:{},slot:!1,slotStyle:{}}),computed:{offsetType(){let t="top";return this.bottom>=0&&(t="bottom"),t},classes(){return[{"v-affix":this.affix}]}},mounted(){const t=this._getScrollTarget();this.$utils.on(t,"scroll",this.handleScroll),this.$utils.on(t,"resize",this.handleScroll),this.$nextTick(()=>{this.handleScroll({type:"scroll"})})},beforeDestroy(){const t=this._getScrollTarget();this.$utils.off(t,"scroll",this.handleScroll),this.$utils.off(t,"resize",this.handleScroll)},methods:{_getScrollTarget(){let t=this.$el;if(!t)return null;for(;t&&"HTML"!==t.tagName&&"BOYD"!==t.tagName&&1===t.nodeType;){const e=window.getComputedStyle(t).overflowY;if("scroll"===e||"auto"===e)return"HTML"===t.tagName||"BODY"===t.tagName?document:t;t=t.parentNode}return document},handleScroll(t){const e=this.affix,n=o(window,!0),l=function(element){const rect=element.getBoundingClientRect(),t=o(window,!0),e=o(window),n=window.document.body,l=n.clientTop||0,r=n.clientLeft||0;return{top:rect.top+t-l,left:rect.left+e-r}}(this.$el),r=window.innerHeight,c=this.$el.getElementsByTagName("div")[0].offsetHeight,h=!e||"resize"===t.type;l.top-this.top<n&&"top"===this.offsetType&&h?(this.affix=!0,this.slotStyle={width:this.$refs.point.clientWidth+"px",height:this.$refs.point.clientHeight+"px"},this.slot=!0,this.styles={top:`${this.top}px`,left:`${l.left}px`,width:`${this.$el.offsetWidth}px`},this.$emit("on-change",!0)):l.top-this.top>n&&"top"===this.offsetType&&e&&(this.slot=!1,this.slotStyle={},this.affix=!1,this.styles=null,this.$emit("on-change",!1)),l.top+this.bottom+c>n+r&&"bottom"===this.offsetType&&h?(this.affix=!0,this.styles={bottom:`${this.bottom}px`,left:`${l.left}px`,width:`${this.$el.offsetWidth}px`},this.$emit("on-change",!0)):l.top+this.bottom+c<n+r&&"bottom"===this.offsetType&&e&&(this.affix=!1,this.styles=null,this.$emit("on-change",!1))}}},r=n(2);var component=Object(r.a)(l,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._ssrNode("<div"+t._ssrClass(null,t.classes)+t._ssrStyle(null,t.styles,null)+">","</div>",[t._t("default")],2),t._ssrNode(" <div"+t._ssrStyle(null,t.slotStyle,{display:t.slot?"":"none"})+"></div>")],2)},[],!1,function(t){var e=n(101);e.__inject__&&e.__inject__(t)},null,"bae1a548");e.a=component.exports},163:function(t,e){},223:function(t,e,n){"use strict";n.r(e);var o=n(163),l=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e.default=l.a},256:function(t,e,n){"use strict";n.r(e);var o=n(23),l=n(119),r=n(118),c=n(117),h={name:"TagShow",components:{Affix:l.a,CreateTagBtn:r.a,PinFlowList:c.a},head(){const{tag:t}=this;return{title:t.name,meta:[{hid:"keywords",name:"keywords",content:t.alias},{hid:"description",name:"description",content:`${t.name},${t.intro}`}]}},props:{slug:{type:String,required:!0}},data:()=>({tag:null,parent:null,children:[]}),computed:{},watch:{},asyncData:({app:t,error:e,params:n})=>o.e(t,n).then(data=>({...data})).catch(e),layout:"web",created(){},mounted(){},beforeMount(){this.patchTag()},methods:{patchTag(){this.$axios.$get("v1/tag/patch",{params:{slug:this.slug}}).then(data=>{this.tag=this.$set(this,"tag",Object.assign(this.tag,data))}).catch(()=>{})},handleCreate(data){this.children.push(data),this.$toast.success("标签创建成功")},combineTag(){console.log("combineTag")},deleteTag(){this.$confirm("此操作将永久删除该文件, 是否继续?","删除标签").then(()=>{o.c(this,{slug:this.slug}).then(()=>{this.$toast.success("标签删除成功").then(()=>{window.location.reload()})}).catch(t=>{this.$toast.error(t.message)})}).catch(()=>{})},relinkTag(){this.$prompt("请输入目标父节点id","移动标签",{confirmButtonText:"提交",cancelButtonText:"取消",inputPattern:/^[a-z0-9]+$/i,inputErrorMessage:"格式不正确"}).then(({value:t})=>{o.d(this,{slug:this.slug,target_slug:t}).then(()=>{this.$toast.success("标签移动成功")}).catch(t=>{this.$toast.error(t.message)})}).catch(()=>{})},updateTag(){this.$prompt("请输入标签名","更新标签",{confirmButtonText:"提交",cancelButtonText:"取消"}).then(({value:t})=>{const e=t.trim();if(e.length>32)return this.$toast.error("名字不能超过32个字");o.f(this,{name:e,slug:this.slug,avatar:""}).then(()=>{this.$toast.success("标签更新成功")}).catch(t=>{this.$toast.error(t.message)})}).catch(()=>{})}}},d=n(2);var component=Object(d.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tag-show"}},[n("ElRow",{staticClass:"container"},[n("ElCol",{staticClass:"left-aside",attrs:{span:5}},[n("Affix",{attrs:{top:50}},[t.children.length?n("ul",{staticClass:"child-node"},t._l(t.children.slice(0,10),function(e){return n("li",{key:e.slug,staticClass:"node"},[n("NLink",{attrs:{to:"/tag/"+e.slug}},[n("VImg",{attrs:{src:e.avatar,width:"32",height:"32",alt:e.name}}),t._v(" "),n("span",{domProps:{textContent:t._s(e.name)}})],1)],1)}),0):t._e(),t._v("\n         \n      ")])],1),t._v(" "),n("ElCol",{staticClass:"main-wrap",attrs:{span:14}},[n("PinFlowList",{attrs:{slug:t.slug}}),t._v("\n       \n    ")],1),t._v(" "),n("ElCol",{attrs:{span:5}})],1)],1)},[],!1,function(t){var e=n(223);e.__inject__&&e.__inject__(t)},null,"5d3bcdf8");e.default=component.exports},79:function(t,e){t.exports={"pin-1-pc-media":"pin-1-pc-media_36tsQ",pin1PcMedia:"pin-1-pc-media_36tsQ",desc:"desc_2iLTt","pin-1-pc":"pin-1-pc_2vpWi",pin1Pc:"pin-1-pc_2vpWi",title:"title_yYP3L",media:"media_2aleH",text:"text_36HVK",badge:"badge_dzqRd",music:"music_1zf5N",video:"video_W64Pp"}},83:function(t,e){},84:function(t,e){},86:function(t,e,n){"use strict";n.r(e);var o=n(79),l=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e.default=l.a},89:function(t,e,n){"use strict";var o={props:{item:{type:Object,required:!0},showUser:{type:Boolean,default:!0},showArea:{type:Boolean,default:!0},secretLink:{type:String,default:""}}},l={name:"PinArticle",mixins:[o]},r=n(2);var c={name:"PinFlowItem",components:{Type1:Object(r.a)(l,function(){var t,e=this,n=e.$createElement,o=e._self._c||n;return o("li",{class:e.$style["pin-1"]},[o("NLink",{staticClass:"only-h5",class:e.$style["pin-1-h5"],attrs:{to:e.$alias.pin(e.secretLink||e.item.slug)}},[e._v("\n    "+e._s(e.item.title.text)+"\n  ")]),e._ssrNode(" "),e._ssrNode("<div"+e._ssrClass("only-pc",[e.$style["pin-1-pc"],(t={},t[e.$style["pin-1-pc-media"]]=e.item.media,t)])+">","</div>",[e._ssrNode("<h2"+e._ssrClass(null,e.$style.title)+">","</h2>",[o("NLink",{staticClass:"fade-link",attrs:{target:"_blank",to:e.$alias.pin(e.secretLink||e.item.slug)},domProps:{textContent:e._s(e.item.title.text)}}),e._ssrNode(" "),e.showArea?[e.item.area?o("NLink",{attrs:{to:e.$alias.tag(e.item.area.slug),target:"_blank"}},[o("VImg",{attrs:{src:e.item.area.avatar,width:"24",height:"24",radius:"5px"}})],1):e.item.topic?o("NLink",{attrs:{to:e.$alias.tag(e.item.topic.slug),target:"_blank"}},[o("VImg",{attrs:{src:e.item.topic.avatar,width:"24",height:"24",radius:"5px"}})],1):e._e()]:e._e()],2),e._ssrNode(" "),e._ssrNode("<div"+e._ssrClass("clearfix",e.$style.content)+">","</div>",[e.item.media?o("NLink",{class:e.$style.media,attrs:{to:e.$alias.pin(e.secretLink||e.item.slug),target:"_blank"}},[e.item.media.first_video?o("div",{class:e.$style.video},[e.item.media.banner?o("VImg",{attrs:{src:e.item.media.banner.url,width:"187",height:"105"}}):e._e(),e._v(" "),o("i",{staticClass:"iconfont ic-bilibili",class:e.$style.badge})],1):e.item.media.first_music?o("div",{class:e.$style.music},[e.item.media.banner?o("VImg",{attrs:{src:e.item.media.banner.url,width:"187",height:"105"}}):e._e(),e._v(" "),o("i",{staticClass:"iconfont ic-netease",class:e.$style.badge})],1):o("VImg",{attrs:{src:e.item.media.banner.url,width:"187",height:"105"}}),e._v(" "),o("div",{class:e.$style.text},[o("i",{staticClass:"iconfont ic-video"}),e._v(" "),o("span",{domProps:{textContent:e._s(e.item.media.video_count)}}),e._v(" "),o("i",{staticClass:"iconfont ic-systemprompt"}),e._v(" "),o("span",{domProps:{textContent:e._s(e.item.media.music_count)}}),e._v(" "),o("i",{staticClass:"iconfont ic-camera"}),e._v(" "),o("span",{domProps:{textContent:e._s(e.item.media.image_count)}})])],1):e._e(),e._ssrNode(" "),e._ssrNode("<div"+e._ssrClass(null,e.$style.desc)+">","</div>",[e._ssrNode("<main><p>"+e._ssrEscape(e._s(e.item.intro))+"</p></main> "),e._ssrNode("<footer>","</footer>",[e.showUser?o("NLink",{staticClass:"oneline",attrs:{to:e.$alias.user(e.item.author.slug),target:"_blank"}},[o("VImg",{attrs:{src:e.item.author.avatar,radius:"50%",width:"24",height:"24"}}),e._v("\n             \n            "),o("span",{domProps:{textContent:e._s(e.item.author.nickname)}})],1):e._e(),e._ssrNode(' <div><i class="iconfont ic-message_fill"></i> <span>'+e._ssrEscape(e._s(e.item.comment_count))+'</span></div> <div><i class="iconfont ic-good_fill"></i> <span>'+e._ssrEscape(e._s(e.item.like_count))+'</span></div> <div><i class="iconfont ic-mark_fill"></i> <span>'+e._ssrEscape(e._s(e.item.mark_count))+'</span></div> <div><i class="iconfont ic-browse_fill"></i> <span>'+e._ssrEscape(e._s(e.item.visit_count))+"</span></div>")],2)],2)],2)],2)],2)},[],!1,function(t){var e=n(86);e.__inject__&&e.__inject__(t),this.$style=e.locals||e},null,"1ffbcd38").exports},mixins:[o],data:()=>({}),computed:{},watch:{},created(){},mounted(){},methods:{}},h=Object(r.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return this.item?e("type-"+this.item.content_type,{tag:"component",attrs:{item:this.item,"show-user":this.showUser,"show-area":this.showArea,"secret-link":this.secretLink}}):this._e()},[],!1,null,null,"ec5e8a36");e.a=h.exports}};
//# sourceMappingURL=d0fb71754e59412118ef.js.map