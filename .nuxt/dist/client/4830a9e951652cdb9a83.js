(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{353:function(t,e,n){t.exports=JSON.parse('{"pin-article-pc-media":"pin-article-pc-media_EdOoY","pinArticlePcMedia":"pin-article-pc-media_EdOoY","desc":"desc_2dZ7I","pin-article-pc":"pin-article-pc_n9l6d","pinArticlePc":"pin-article-pc_n9l6d","title":"title_11AiS","badge":"badge_33AUe","link":"link_2zXb9","area":"area_1BjFz","media":"media_2oWmK","text":"text_2wAMb","music":"music_3Ur6b","video":"video_32S3V","pin-article-h5":"pin-article-h5_2Chnp","pinArticleH5":"pin-article-h5_2Chnp","user":"user_1ugeY","intro":"intro_3P9uJ","skeleton-loading":"skeleton-loading_LpB2j","skeletonLoading":"skeleton-loading_LpB2j","skeleton":"skeleton_3OUSt"}')},357:function(t,e,n){"use strict";e.a={props:{item:{type:Object,required:!0},showUser:{type:Boolean,default:!0},showZone:{type:Boolean,default:!0},relationZone:{type:String,default:""},secretLink:{type:String,default:""}},computed:{showTopic:function(){return!(!this.showZone||!this.item.topic)&&this.item.topic.slug!==this.relationZone},showArea:function(){return!(!this.showZone||!this.item.area)&&this.item.area.slug!==this.relationZone}}}},368:function(t,e,n){"use strict";var r=n(353),o=n.n(r);e.default=o.a},370:function(t,e,n){"use strict";var r={name:"PinArticle",mixins:[n(357).a]},o=n(368),l=n(19);var component=Object(l.a)(r,(function(){var t,e=this,n=e.$createElement,r=e._self._c||n;return r("li",{class:e.$style["pin-article"]},[r("NLink",{staticClass:"only-h5",class:e.$style["pin-article-h5"],attrs:{to:e.$alias.pin(e.secretLink||e.item.slug)}},[e.item.media&&e.item.media.banner?r("header",{style:{paddingTop:e.item.media.banner.height/e.item.media.banner.width*100+"%"}},[r("img",{attrs:{src:e.$resize(e.item.media.banner.url,{width:400,mode:2})}})]):e._e(),e._v(" "),r("main",[r("div",{class:e.$style.user},[e.showUser?r("VImg",{attrs:{src:e.item.author.avatar,radius:"50%",width:"24",height:"24"}}):e._e(),e._v(" "),r("span",{domProps:{innerHTML:e._s(e.item.author.nickname)}})],1),e._v(" "),r("span",{class:e.$style.title,domProps:{innerHTML:e._s(e.item.title.text)}})]),e._v(" "),e.item.intro?r("footer",[r("p",{class:e.$style.intro,domProps:{innerHTML:e._s(e.item.intro)}})]):e._e()]),e._v(" "),r("div",{staticClass:"only-pc",class:[e.$style["pin-article-pc"],(t={},t[e.$style["pin-article-pc-media"]]=e.item.media,t)]},[r("h2",{class:e.$style.title},[r("span",{class:e.$style.badge,domProps:{textContent:e._s(e.item.badge)}}),e._v(" "),e.showZone?r("div",{class:e.$style.area},[e.item.area?r("NLink",{attrs:{to:e.$alias.tag(e.item.area.slug),target:"_blank"}},[r("VImg",{attrs:{src:e.item.area.avatar,width:"24",height:"24",radius:"5px"}})],1):e.item.topic?r("NLink",{attrs:{to:e.$alias.tag(e.item.topic.slug),target:"_blank"}},[r("VImg",{attrs:{src:e.item.topic.avatar,width:"24",height:"24",radius:"5px"}})],1):e._e()],1):e._e(),e._v(" "),r("p",{staticClass:"oneline",class:e.$style.link},[r("NLink",{staticClass:"fade-link oneline",attrs:{target:"_blank",to:e.$alias.pin(e.secretLink||e.item.slug)},domProps:{innerHTML:e._s(e.item.title.text)}})],1)]),e._v(" "),r("div",{staticClass:"clearfix",class:e.$style.content},[e.item.media?r("NLink",{class:e.$style.media,attrs:{to:e.$alias.pin(e.secretLink||e.item.slug),target:"_blank"}},[e.item.media.first_video?r("div",{class:e.$style.video},[e.item.media.banner?r("VImg",{attrs:{src:e.item.media.banner.url,blur:!0,width:"187",height:"105"}}):e._e(),e._v(" "),r("i",{staticClass:"iconfont ic-bilibili",class:e.$style.badge})],1):e.item.media.first_music?r("div",{class:e.$style.music},[e.item.media.banner?r("VImg",{attrs:{src:e.item.media.banner.url,blur:!0,width:"187",height:"105"}}):e._e(),e._v(" "),r("i",{staticClass:"iconfont ic-netease",class:e.$style.badge})],1):r("VImg",{attrs:{src:e.item.media.banner.url,blur:!0,width:"187",height:"105"}}),e._v(" "),r("div",{class:e.$style.text},[r("i",{staticClass:"iconfont ic-video"}),e._v(" "),r("span",{domProps:{textContent:e._s(e.item.media.video_count)}}),e._v(" "),r("i",{staticClass:"iconfont ic-systemprompt"}),e._v(" "),r("span",{domProps:{textContent:e._s(e.item.media.music_count)}}),e._v(" "),r("i",{staticClass:"iconfont ic-camera"}),e._v(" "),r("span",{domProps:{textContent:e._s(e.item.media.image_count)}})])],1):e._e(),e._v(" "),r("div",{class:e.$style.desc},[r("main",[r("p",{domProps:{innerHTML:e._s(e.item.intro)}})]),e._v(" "),r("footer",[e.showUser?r("NLink",{staticClass:"oneline",attrs:{to:e.$alias.user(e.item.author.slug),target:"_blank"}},[r("VImg",{attrs:{src:e.item.author.avatar,radius:"50%",width:"24",height:"24"}}),e._v("\n             \n            "),r("span",{domProps:{innerHTML:e._s(e.item.author.nickname)}})],1):e._e(),e._v(" "),r("div",[r("i",{staticClass:"iconfont ic-message_fill"}),e._v(" "),r("span",{domProps:{textContent:e._s(e.item.comment_count)}})]),e._v(" "),r("div",[r("i",{staticClass:"iconfont ic-good_fill"}),e._v(" "),r("span",{domProps:{textContent:e._s(e.item.like_count)}})]),e._v(" "),r("div",[r("i",{staticClass:"iconfont ic-mark_fill"}),e._v(" "),r("span",{domProps:{textContent:e._s(e.item.mark_count)}})]),e._v(" "),r("div",[r("i",{staticClass:"iconfont ic-browse_fill"}),e._v(" "),r("span",{domProps:{textContent:e._s(e.item.visit_count)}})])],1)])],1)])],1)}),[],!1,(function(t){this.$style=o.default.locals||o.default}),null,null);e.a=component.exports},373:function(t,e,n){t.exports=n.p+"img/aa8b45a.png"},374:function(t,e,n){t.exports=n.p+"img/3251725.png"},529:function(t,e,n){},661:function(t,e,n){"use strict";var r=n(529);n.n(r).a},724:function(t,e,n){"use strict";n.r(e);n(161),n(34),n(29);var r,o=n(2),l={name:"Homepage",layout:"web",components:{PinArticle:n(370).a},asyncData:(r=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.store,r=e.app,t.next=3,n.dispatch("flow/initData",{func:"getFlowRecommendedIndex",type:"seenIds",query:{$axios:r.$axios,changing:"slug"}});case 3:case"end":return t.stop()}}),t)}))),function(t){return r.apply(this,arguments)}),methods:{handlePatch:function(t){var e=this,data=t.data;this.$axios.$get("v1/pin/batch_patch",{params:{slug:data.result.map((function(t){return t.slug})).join(",")}}).then((function(t){e.$refs.loader.patch(t)})).catch((function(){}))}}},c=(n(661),n(19)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"homepage"}},[r("div",{staticClass:"container"},[r("FlowLoader",{ref:"loader",attrs:{func:"getFlowRecommendedIndex",type:"seenIds",query:{$axios:t.$axios,changing:"slug"},callback:t.handlePatch},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.flow;return r("ul",{staticClass:"pin-list"},t._l(n,(function(t){return r("PinArticle",{key:t.slug,attrs:{item:t}})})),1)}}])},[t._v(" "),r("template",{slot:"nothing"},[r("img",{attrs:{src:n(373)}}),t._v(" "),r("p",[t._v("这里什么都没有")])]),t._v(" "),r("template",{slot:"error"},[r("img",{attrs:{src:n(374)}}),t._v(" "),r("p",[t._v("遇到错误了，点击重试")])])],2)],1),t._v(" "),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"beian"},[e("a",{attrs:{href:"http://www.beian.miit.gov.cn/",target:"_blank"}},[this._v("互联网 ICP 备案：沪 ICP 备 17050785 号 - 1")])])}],!1,null,null,null);e.default=component.exports}}]);