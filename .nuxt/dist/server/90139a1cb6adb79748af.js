exports.ids=[35],exports.modules={100:function(t,e,n){t.exports=n.p+"img/aa8b45a.png"},101:function(t,e,n){t.exports=n.p+"img/3251725.png"},102:function(t,e,n){"use strict";n.r(e);var l=n(81),o=n.n(l);for(var r in l)"default"!==r&&function(t){n.d(e,t,function(){return l[t]})}(r);e.default=o.a},103:function(t,e,n){"use strict";n.r(e);var l=n(82),o=n.n(l);for(var r in l)"default"!==r&&function(t){n.d(e,t,function(){return l[t]})}(r);e.default=o.a},119:function(t,e,n){"use strict";var l=n(55),o=n.n(l),r=n(54),c=n.n(r),d=n(87),m={name:"SkeletonArticle",components:{},props:{},data:()=>({}),computed:{},watch:{},created(){},mounted(){},methods:{}},h=n(2);var f=Object(h.a)(m,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"skeleton-article"},[this._ssrNode('<div class="header"><div class="title gray"></div> <div class="area gray"></div></div> <div class="content"><div class="image gray"></div> <div class="intro"><div class="text"><div class="text-long gray"></div> <div class="text-shorten gray"></div></div> <div class="metas"><div class="meta gray"></div> <div class="meta gray"></div> <div class="meta gray"></div> <div class="meta gray"></div> <div class="meta gray"></div></div></div></div>')])},[],!1,function(t){var e=n(102);e.__inject__&&e.__inject__(t)},null,"53cbe552").exports,_={name:"PinFlowList",components:{ElSelect:c.a,ElOption:o.a,PinFlowItem:d.a,SkeletonArticle:f},props:{slug:{type:String,required:!0},showArea:{type:Boolean,default:!0}},data:()=>({time:"3-day",sort:"active"}),computed:{sortOpts:()=>[{label:"热门",value:"active"},{label:"最新",value:"newest"},{label:"热榜",value:"hottest"}],timeOpts:()=>[{label:"3天内",value:"3-day"},{label:"7天内",value:"7-day"},{label:"30天内",value:"30-day"},{label:"全部",value:"all"}],query(){return{$axios:this.$axios,slug:this.slug,sort:this.sort,time:this.time,take:10,changing:"slug"}}},methods:{changeSort(t){t!==this.sort&&(this.sort=t,this.$nextTick(()=>{this.$refs.loader.refresh()}))},changeTime(){this.$nextTick(()=>{this.$refs.loader.refresh()})},patchPin({data:data}){this.$axios.$get("v1/pin/batch_patch",{params:{slug:data.result.map(t=>t.slug).join(",")}}).then(t=>{this.$refs.loader.patch(t)}).catch(()=>{})}}};var v=Object(h.a)(_,function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"pin-flow-list"},[t._ssrNode('<ul class="sortable">',"</ul>",[t._ssrNode(t._ssrList(t.sortOpts,function(e){return"<li"+t._ssrClass(null,{"is-active":e.value===t.sort})+">"+t._ssrEscape(t._s(e.label))+"</li>"})+" "),"hottest"===t.sort?l("ElSelect",{attrs:{size:"mini"},on:{change:t.changeTime},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}},t._l(t.timeOpts,function(t){return l("ElOption",{key:t.value,attrs:{label:t.label,value:t.value}})}),1):t._e()],2),t._ssrNode(" "),l("FlowLoader",{ref:"loader",attrs:{func:"getTagFlows",type:"newest"===t.sort?"lastId":"seenIds",query:t.query,callback:t.patchPin},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.flow;return l("ul",{staticClass:"flows"},t._l(n,function(e){return l("PinFlowItem",{key:e.slug,attrs:{"show-area":t.showArea,item:e}})}),1)}}])},[t._v(" "),l("SkeletonArticle",{attrs:{slot:"loading"},slot:"loading"}),t._v(" "),l("template",{slot:"nothing"},[l("img",{attrs:{src:n(100)}}),t._v(" "),l("p",[t._v("这里什么都没有")])]),t._v(" "),l("template",{slot:"error"},[l("img",{attrs:{src:n(101)}}),t._v(" "),l("p",[t._v("遇到错误了，点击重试")])])],2)],2)},[],!1,function(t){var e=n(103);e.__inject__&&e.__inject__(t)},null,"d8539a20");e.a=v.exports},122:function(t,e,n){"use strict";function l(t,e){const n=e?"scrollTop":"scrollLeft";let l=t[e?"pageYOffset":"pageXOffset"];return"number"!=typeof l&&(l=window.document.documentElement[n]),l}var o={name:"Affix",props:{top:{type:Number,default:0},bottom:{type:Number,default:void 0}},data:()=>({affix:!1,styles:{},slot:!1,slotStyle:{}}),computed:{offsetType(){let t="top";return this.bottom>=0&&(t="bottom"),t},classes(){return[{"v-affix":this.affix}]}},mounted(){const t=this._getScrollTarget();this.$utils.on(t,"scroll",this.handleScroll),this.$utils.on(t,"resize",this.handleScroll),this.$nextTick(()=>{this.handleScroll({type:"scroll"})})},beforeDestroy(){const t=this._getScrollTarget();this.$utils.off(t,"scroll",this.handleScroll),this.$utils.off(t,"resize",this.handleScroll)},methods:{_getScrollTarget(){let t=this.$el;if(!t)return null;for(;t&&"HTML"!==t.tagName&&"BOYD"!==t.tagName&&1===t.nodeType;){const e=window.getComputedStyle(t).overflowY;if("scroll"===e||"auto"===e)return"HTML"===t.tagName||"BODY"===t.tagName?document:t;t=t.parentNode}return document},handleScroll(t){const e=this.affix,n=l(window,!0),o=function(element){const rect=element.getBoundingClientRect(),t=l(window,!0),e=l(window),n=window.document.body,o=n.clientTop||0,r=n.clientLeft||0;return{top:rect.top+t-o,left:rect.left+e-r}}(this.$el),r=window.innerHeight,c=this.$el.getElementsByTagName("div")[0].offsetHeight,d=!e||"resize"===t.type;o.top-this.top<n&&"top"===this.offsetType&&d?(this.affix=!0,this.slotStyle={width:this.$refs.point.clientWidth+"px",height:this.$refs.point.clientHeight+"px"},this.slot=!0,this.styles={top:`${this.top}px`,left:`${o.left}px`,width:`${this.$el.offsetWidth}px`},this.$emit("on-change",!0)):o.top-this.top>n&&"top"===this.offsetType&&e&&(this.slot=!1,this.slotStyle={},this.affix=!1,this.styles=null,this.$emit("on-change",!1)),o.top+this.bottom+c>n+r&&"bottom"===this.offsetType&&d?(this.affix=!0,this.styles={bottom:`${this.bottom}px`,left:`${o.left}px`,width:`${this.$el.offsetWidth}px`},this.$emit("on-change",!0)):o.top+this.bottom+c<n+r&&"bottom"===this.offsetType&&e&&(this.affix=!1,this.styles=null,this.$emit("on-change",!1))}}},r=n(2);var component=Object(r.a)(o,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._ssrNode("<div"+t._ssrClass(null,t.classes)+t._ssrStyle(null,t.styles,null)+">","</div>",[t._t("default")],2),t._ssrNode(" <div"+t._ssrStyle(null,t.slotStyle,{display:t.slot?"":"none"})+"></div>")],2)},[],!1,function(t){var e=n(99);e.__inject__&&e.__inject__(t)},null,"bae1a548");e.a=component.exports},123:function(t,e,n){"use strict";e.a={layout:"web",head(){const{tag:t}=this;return{title:t.name,meta:[{hid:"keywords",name:"keywords",content:t.alias},{hid:"description",name:"description",content:`${t.name},${t.intro}`}]}},data:()=>({tag:null,parent:null,children:[]}),beforeMount(){this.patchTag()},methods:{patchTag(){this.$axios.$get("v1/tag/patch",{params:{slug:this.slug}}).then(data=>{this.tag=this.$set(this,"tag",Object.assign(this.tag,data))}).catch(()=>{})}}}},144:function(t,e){},225:function(t,e,n){"use strict";n.r(e);var l=n(144),o=n.n(l);for(var r in l)"default"!==r&&function(t){n.d(e,t,function(){return l[t]})}(r);e.default=o.a},300:function(t,e,n){"use strict";n.r(e);var l=n(123),o=n(23),r=n(122),c=n(119),d={name:"ZoneGame",components:{Affix:r.a,PinFlowList:c.a},mixins:[l.a],data:()=>({slug:"285"}),asyncData:({app:t,error:e})=>Object(o.e)(t,{slug:"285"}).then(data=>({...data})).catch(e),created(){},mounted(){},methods:{}},m=n(2);var component=Object(m.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"zone-game"}},[n("ElRow",{staticClass:"container"},[n("ElCol",{attrs:{span:5}},[n("Affix",{staticClass:"left-aside",attrs:{top:50}},[n("h3",{staticClass:"title"},[t._v("\n          热门游戏\n        ")]),t._v(" "),t.children.length?n("ul",{staticClass:"child-node"},t._l(t.children.slice(0,10),function(e){return n("li",{key:e.slug,staticClass:"node"},[n("NLink",{attrs:{to:"/tag/"+e.slug}},[n("VImg",{attrs:{src:e.avatar,width:"32",height:"32",alt:e.name}}),t._v(" "),n("span",{domProps:{textContent:t._s(e.name)}})],1)],1)}),0):t._e()])],1),t._v(" "),n("ElCol",{staticClass:"main-wrap",attrs:{span:14}},[n("PinFlowList",{attrs:{slug:t.slug}})],1),t._v(" "),n("ElCol",{attrs:{span:5}})],1)],1)},[],!1,function(t){var e=n(225);e.__inject__&&e.__inject__(t)},null,"5561623e");e.default=component.exports},76:function(t,e){t.exports={"pin-1-pc-media":"pin-1-pc-media_36tsQ",pin1PcMedia:"pin-1-pc-media_36tsQ",desc:"desc_2iLTt","pin-1-pc":"pin-1-pc_2vpWi",pin1Pc:"pin-1-pc_2vpWi",title:"title_yYP3L",media:"media_2aleH",text:"text_36HVK",badge:"badge_dzqRd",music:"music_1zf5N",video:"video_W64Pp","skeleton-loading":"skeleton-loading_h2GMS",skeletonLoading:"skeleton-loading_h2GMS",skeleton:"skeleton_3xDfV"}},80:function(t,e){},81:function(t,e){},82:function(t,e){},84:function(t,e,n){"use strict";n.r(e);var l=n(76),o=n.n(l);for(var r in l)"default"!==r&&function(t){n.d(e,t,function(){return l[t]})}(r);e.default=o.a},87:function(t,e,n){"use strict";var l={props:{item:{type:Object,required:!0},showUser:{type:Boolean,default:!0},showArea:{type:Boolean,default:!0},secretLink:{type:String,default:""}}},o={name:"PinArticle",mixins:[l]},r=n(2);var c={name:"PinFlowItem",components:{Type1:Object(r.a)(o,function(){var t,e=this,n=e.$createElement,l=e._self._c||n;return l("li",{class:e.$style["pin-1"]},[l("NLink",{staticClass:"only-h5",class:e.$style["pin-1-h5"],attrs:{to:e.$alias.pin(e.secretLink||e.item.slug)}},[e._v("\n    "+e._s(e.item.title.text)+"\n  ")]),e._ssrNode(" "),e._ssrNode("<div"+e._ssrClass("only-pc",[e.$style["pin-1-pc"],(t={},t[e.$style["pin-1-pc-media"]]=e.item.media,t)])+">","</div>",[e._ssrNode("<h2"+e._ssrClass(null,e.$style.title)+">","</h2>",[l("NLink",{staticClass:"fade-link",attrs:{target:"_blank",to:e.$alias.pin(e.secretLink||e.item.slug)},domProps:{textContent:e._s(e.item.title.text)}}),e._ssrNode(" "),e.showArea?[e.item.area?l("NLink",{attrs:{to:e.$alias.tag(e.item.area.slug),target:"_blank"}},[l("VImg",{attrs:{src:e.item.area.avatar,width:"24",height:"24",radius:"5px"}})],1):e.item.topic?l("NLink",{attrs:{to:e.$alias.tag(e.item.topic.slug),target:"_blank"}},[l("VImg",{attrs:{src:e.item.topic.avatar,width:"24",height:"24",radius:"5px"}})],1):e._e()]:e._e()],2),e._ssrNode(" "),e._ssrNode("<div"+e._ssrClass("clearfix",e.$style.content)+">","</div>",[e.item.media?l("NLink",{class:e.$style.media,attrs:{to:e.$alias.pin(e.secretLink||e.item.slug),target:"_blank"}},[e.item.media.first_video?l("div",{class:e.$style.video},[e.item.media.banner?l("VImg",{attrs:{src:e.item.media.banner.url,blur:!0,width:"187",height:"105"}}):e._e(),e._v(" "),l("i",{staticClass:"iconfont ic-bilibili",class:e.$style.badge})],1):e.item.media.first_music?l("div",{class:e.$style.music},[e.item.media.banner?l("VImg",{attrs:{src:e.item.media.banner.url,blur:!0,width:"187",height:"105"}}):e._e(),e._v(" "),l("i",{staticClass:"iconfont ic-netease",class:e.$style.badge})],1):l("VImg",{attrs:{src:e.item.media.banner.url,blur:!0,width:"187",height:"105"}}),e._v(" "),l("div",{class:e.$style.text},[l("i",{staticClass:"iconfont ic-video"}),e._v(" "),l("span",{domProps:{textContent:e._s(e.item.media.video_count)}}),e._v(" "),l("i",{staticClass:"iconfont ic-systemprompt"}),e._v(" "),l("span",{domProps:{textContent:e._s(e.item.media.music_count)}}),e._v(" "),l("i",{staticClass:"iconfont ic-camera"}),e._v(" "),l("span",{domProps:{textContent:e._s(e.item.media.image_count)}})])],1):e._e(),e._ssrNode(" "),e._ssrNode("<div"+e._ssrClass(null,e.$style.desc)+">","</div>",[e._ssrNode("<main><p>"+e._s(e.item.intro)+"</p></main> "),e._ssrNode("<footer>","</footer>",[e.showUser?l("NLink",{staticClass:"oneline",attrs:{to:e.$alias.user(e.item.author.slug),target:"_blank"}},[l("VImg",{attrs:{src:e.item.author.avatar,radius:"50%",width:"24",height:"24"}}),e._v("\n             \n            "),l("span",{domProps:{textContent:e._s(e.item.author.nickname)}})],1):e._e(),e._ssrNode(' <div><i class="iconfont ic-message_fill"></i> <span>'+e._ssrEscape(e._s(e.item.comment_count))+'</span></div> <div><i class="iconfont ic-good_fill"></i> <span>'+e._ssrEscape(e._s(e.item.like_count))+'</span></div> <div><i class="iconfont ic-mark_fill"></i> <span>'+e._ssrEscape(e._s(e.item.mark_count))+'</span></div> <div><i class="iconfont ic-browse_fill"></i> <span>'+e._ssrEscape(e._s(e.item.visit_count))+"</span></div>")],2)],2)],2)],2)],2)},[],!1,function(t){var e=n(84);e.__inject__&&e.__inject__(t),this.$style=e.locals||e},null,"1ffbcd38").exports},mixins:[l],data:()=>({}),computed:{},watch:{},created(){},mounted(){},methods:{}},d=Object(r.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return this.item?e("type-"+this.item.content_type,{tag:"component",attrs:{item:this.item,"show-user":this.showUser,"show-area":this.showArea,"secret-link":this.secretLink}}):this._e()},[],!1,null,null,"ec5e8a36");e.a=d.exports},99:function(t,e,n){"use strict";n.r(e);var l=n(80),o=n.n(l);for(var r in l)"default"!==r&&function(t){n.d(e,t,function(){return l[t]})}(r);e.default=o.a}};
//# sourceMappingURL=90139a1cb6adb79748af.js.map