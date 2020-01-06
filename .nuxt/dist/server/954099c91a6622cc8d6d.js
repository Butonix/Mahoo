exports.ids=[23],exports.modules={101:function(t,e,n){"use strict";var r={name:"PinArticle",mixins:[n(91).a]},o=n(1);var component=Object(o.a)(r,(function(){var t,e=this,n=e.$createElement,r=e._self._c||n;return r("li",{class:e.$style["pin-article"]},[r("NLink",{staticClass:"only-h5",class:e.$style["pin-article-h5"],attrs:{to:e.$alias.pin(e.secretLink||e.item.slug)}},[e.item.media&&e.item.media.banner?r("header",{style:{paddingTop:e.item.media.banner.height/e.item.media.banner.width*100+"%"}},[r("img",{attrs:{src:e.$resize(e.item.media.banner.url,{width:400,mode:2})}})]):e._e(),e._v(" "),r("main",[r("div",{class:e.$style.user},[e.showUser?r("VImg",{attrs:{src:e.item.author.avatar,radius:"50%",width:"24",height:"24"}}):e._e(),e._v(" "),r("span",{domProps:{innerHTML:e._s(e.item.author.nickname)}})],1),e._v(" "),r("span",{class:e.$style.title,domProps:{innerHTML:e._s(e.item.title.text)}})]),e._v(" "),e.item.intro?r("footer",[r("p",{class:e.$style.intro,domProps:{innerHTML:e._s(e.item.intro)}})]):e._e()]),e._ssrNode(" "),e._ssrNode("<div"+e._ssrClass("only-pc",[e.$style["pin-article-pc"],(t={},t[e.$style["pin-article-pc-media"]]=e.item.media,t)])+">","</div>",[e._ssrNode("<h2"+e._ssrClass(null,e.$style.title)+">","</h2>",[e._ssrNode("<span"+e._ssrClass(null,e.$style.badge)+">"+e._ssrEscape(e._s(e.item.badge))+"</span> "),e.showZone?e._ssrNode("<div"+e._ssrClass(null,e.$style.area)+">","</div>",[e.item.area?r("NLink",{attrs:{to:e.$alias.tag(e.item.area.slug),target:"_blank"}},[r("VImg",{attrs:{src:e.item.area.avatar,width:"24",height:"24",radius:"5px"}})],1):e.item.topic?r("NLink",{attrs:{to:e.$alias.tag(e.item.topic.slug),target:"_blank"}},[r("VImg",{attrs:{src:e.item.topic.avatar,width:"24",height:"24",radius:"5px"}})],1):e._e()],1):e._e(),e._ssrNode(" "),e._ssrNode("<p"+e._ssrClass("oneline",e.$style.link)+">","</p>",[r("NLink",{staticClass:"fade-link oneline",attrs:{target:"_blank",to:e.$alias.pin(e.secretLink||e.item.slug)},domProps:{innerHTML:e._s(e.item.title.text)}})],1)],2),e._ssrNode(" "),e._ssrNode("<div"+e._ssrClass("clearfix",e.$style.content)+">","</div>",[e.item.media?r("NLink",{class:e.$style.media,attrs:{to:e.$alias.pin(e.secretLink||e.item.slug),target:"_blank"}},[e.item.media.first_video?r("div",{class:e.$style.video},[e.item.media.banner?r("VImg",{attrs:{src:e.item.media.banner.url,blur:!0,width:"187",height:"105"}}):e._e(),e._v(" "),r("i",{staticClass:"iconfont ic-bilibili",class:e.$style.badge})],1):e.item.media.first_music?r("div",{class:e.$style.music},[e.item.media.banner?r("VImg",{attrs:{src:e.item.media.banner.url,blur:!0,width:"187",height:"105"}}):e._e(),e._v(" "),r("i",{staticClass:"iconfont ic-netease",class:e.$style.badge})],1):r("VImg",{attrs:{src:e.item.media.banner.url,blur:!0,width:"187",height:"105"}}),e._v(" "),r("div",{class:e.$style.text},[r("i",{staticClass:"iconfont ic-video"}),e._v(" "),r("span",{domProps:{textContent:e._s(e.item.media.video_count)}}),e._v(" "),r("i",{staticClass:"iconfont ic-systemprompt"}),e._v(" "),r("span",{domProps:{textContent:e._s(e.item.media.music_count)}}),e._v(" "),r("i",{staticClass:"iconfont ic-camera"}),e._v(" "),r("span",{domProps:{textContent:e._s(e.item.media.image_count)}})])],1):e._e(),e._ssrNode(" "),e._ssrNode("<div"+e._ssrClass(null,e.$style.desc)+">","</div>",[e._ssrNode("<main><p>"+e._s(e.item.intro)+"</p></main> "),e._ssrNode("<footer>","</footer>",[e.showUser?r("NLink",{staticClass:"oneline",attrs:{to:e.$alias.user(e.item.author.slug),target:"_blank"}},[r("VImg",{attrs:{src:e.item.author.avatar,radius:"50%",width:"24",height:"24"}}),e._v("\n             \n            "),r("span",{domProps:{innerHTML:e._s(e.item.author.nickname)}})],1):e._e(),e._ssrNode(' <div><i class="iconfont ic-message_fill"></i> <span>'+e._ssrEscape(e._s(e.item.comment_count))+'</span></div> <div><i class="iconfont ic-good_fill"></i> <span>'+e._ssrEscape(e._s(e.item.like_count))+'</span></div> <div><i class="iconfont ic-mark_fill"></i> <span>'+e._ssrEscape(e._s(e.item.mark_count))+'</span></div> <div><i class="iconfont ic-browse_fill"></i> <span>'+e._ssrEscape(e._s(e.item.visit_count))+"</span></div>")],2)],2)],2)],2)],2)}),[],!1,(function(t){var e=n(97);e.__inject__&&e.__inject__(t),this.$style=e.locals||e}),null,"4dd47fa2");e.a=component.exports},102:function(t,e,n){t.exports=n.p+"img/aa8b45a.png"},103:function(t,e,n){t.exports=n.p+"img/3251725.png"},240:function(t,e){t.exports={undefined:void 0}},334:function(t,e,n){"use strict";n.r(e);var r=n(240),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,(function(){return r[t]}))}(l);e.default=o.a},390:function(t,e,n){"use strict";n.r(e);var r={name:"Homepage",layout:"web",components:{PinArticle:n(101).a},async asyncData({store:t,app:e}){await t.dispatch("flow/initData",{func:"getFlowRecommendedIndex",type:"seenIds",query:{$axios:e.$axios,changing:"slug"}})},methods:{handlePatch({data:data}){this.$axios.$get("v1/pin/batch_patch",{params:{slug:data.result.map(t=>t.slug).join(",")}}).then(t=>{this.$refs.loader.patch(t)}).catch(()=>{})}}},o=n(1);var component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"homepage"}},[t._ssrNode('<div class="container">',"</div>",[r("FlowLoader",{ref:"loader",attrs:{func:"getFlowRecommendedIndex",type:"seenIds",query:{$axios:t.$axios,changing:"slug"},callback:t.handlePatch},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.flow;return r("ul",{staticClass:"pin-list"},t._l(n,(function(t){return r("PinArticle",{key:t.slug,attrs:{item:t}})})),1)}}])},[t._v(" "),r("template",{slot:"nothing"},[r("img",{attrs:{src:n(102)}}),t._v(" "),r("p",[t._v("这里什么都没有")])]),t._v(" "),r("template",{slot:"error"},[r("img",{attrs:{src:n(103)}}),t._v(" "),r("p",[t._v("遇到错误了，点击重试")])])],2)],1),t._ssrNode(' <p class="beian"><a href="http://www.beian.miit.gov.cn/" target="_blank">互联网 ICP 备案：沪 ICP 备 17050785 号 - 1</a></p>')],2)}),[],!1,(function(t){var e=n(334);e.__inject__&&e.__inject__(t)}),null,"32073284");e.default=component.exports},87:function(t,e){t.exports={"pin-article-pc-media":"pin-article-pc-media_EdOoY",pinArticlePcMedia:"pin-article-pc-media_EdOoY",desc:"desc_2dZ7I","pin-article-pc":"pin-article-pc_n9l6d",pinArticlePc:"pin-article-pc_n9l6d",title:"title_11AiS",badge:"badge_33AUe",link:"link_2zXb9",area:"area_1BjFz",media:"media_2oWmK",text:"text_2wAMb",music:"music_3Ur6b",video:"video_32S3V","pin-article-h5":"pin-article-h5_2Chnp",pinArticleH5:"pin-article-h5_2Chnp",user:"user_1ugeY",intro:"intro_3P9uJ","skeleton-loading":"skeleton-loading_LpB2j",skeletonLoading:"skeleton-loading_LpB2j",skeleton:"skeleton_3OUSt"}},91:function(t,e,n){"use strict";e.a={props:{item:{type:Object,required:!0},showUser:{type:Boolean,default:!0},showZone:{type:Boolean,default:!0},relationZone:{type:String,default:""},secretLink:{type:String,default:""}},computed:{showTopic(){return!(!this.showZone||!this.item.topic)&&this.item.topic.slug!==this.relationZone},showArea(){return!(!this.showZone||!this.item.area)&&this.item.area.slug!==this.relationZone}}}},97:function(t,e,n){"use strict";n.r(e);var r=n(87),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,(function(){return r[t]}))}(l);e.default=o.a}};