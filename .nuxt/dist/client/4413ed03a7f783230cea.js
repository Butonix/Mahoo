(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{277:function(e,t,v){},279:function(e,t,v){},280:function(e,t,v){e.exports={title:"title_1yLHa","ic-sex":"ic-sex_19eCo",icSex:"ic-sex_19eCo","ic-level":"ic-level_3KuJr",icLevel:"ic-level_3KuJr","ic-title":"ic-title_Uq8in",icTitle:"ic-title_Uq8in","skeleton-loading":"skeleton-loading_12Xrd",skeletonLoading:"skeleton-loading_12Xrd",skeleton:"skeleton_2qRlz"}},281:function(e,t,v){"use strict";var _={name:"UserAvatar",props:{user:{type:Object,required:!0},avatar:{type:String,default:""},size:{type:Number,default:40},disabled:{type:Boolean,default:!1}}},r=(v(282),v(9)),component=Object(r.a)(_,(function(){var e=this,t=e.$createElement,v=e._self._c||t;return e.disabled?v("div",{staticClass:"user-avatar",style:{width:e.size+"px",height:e.size+"px"}},[v("VImg",{attrs:{radius:"50%",src:e.avatar||e.user.avatar,width:e.size,height:e.size,alt:e.user.nickname}})],1):v("NLink",{staticClass:"user-avatar",style:{width:e.size+"px",height:e.size+"px"},attrs:{to:e.$alias.user(e.user.slug),target:"_blank"}},[v("VImg",{attrs:{radius:"50%",src:e.avatar||e.user.avatar,width:e.size,height:e.size,alt:e.user.nickname}})],1)}),[],!1,null,null,null);t.a=component.exports},282:function(e,t,v){"use strict";var _=v(277);v.n(_).a},294:function(e,t,v){"use strict";var _={name:"UserNickname",props:{user:{type:Object,required:!0},sex:{type:Number,default:0},level:{type:Boolean,default:!0},nickname:{type:String,default:""},disabled:{type:Boolean,default:!1}},computed:{sexClass(){switch(this.sex){case-1:return{name:"simi",color:"limegreen"};case 0:return{name:"unknown",color:"gold"};case 1:return{name:"nan",color:"deepskyblue"};case 2:return{name:"nv",color:"hotpink"};default:return{name:"weizhi",color:"gold"}}}}},r=(v(297),v(298)),n=v(9);var component=Object(n.a)(_,(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("div",{staticClass:"clearfix oneline"},[e.disabled?v("div",{staticClass:"user-nickname"},[v("div",{staticClass:"nickname"},[v("p",{staticClass:"oneline",domProps:{innerHTML:e._s(e.nickname||e.user.nickname)}})]),e._v(" "),e.sex?v("span",{class:e.$style.title},[v("i",{staticClass:"iconfont",class:[e.$style["ic-sex"],"ic-"+e.sexClass.name],style:{backgroundColor:e.sexClass.color}})]):e._e(),e._v(" "),e.level?v("span",{class:[e.$style.title,e.$style["ic-level"]],domProps:{textContent:e._s("Lv"+e.user.level)}}):e._e(),e._v(" "),e._l(e.user.title,(function(t,_){return v("span",{key:_,class:[e.$style.title,e.$style["ic-title"]],domProps:{textContent:e._s(t)}})}))],2):v("NLink",{staticClass:"user-nickname active",attrs:{to:e.$alias.user(e.user.slug),target:"_blank"}},[v("div",{staticClass:"nickname"},[v("p",{staticClass:"oneline",domProps:{innerHTML:e._s(e.nickname||e.user.nickname)}})]),e._v(" "),e.sex?v("span",{class:e.$style.title},[v("i",{staticClass:"iconfont",class:[e.$style["ic-sex"],"ic-"+e.sexClass.name],style:{backgroundColor:e.sexClass.color}})]):e._e(),e._v(" "),e.level?v("span",{class:[e.$style.title,e.$style["ic-level"]],domProps:{textContent:e._s("Lv"+e.user.level)}}):e._e(),e._v(" "),e._l(e.user.title,(function(t,_){return v("span",{key:_,class:[e.$style.title,e.$style["ic-title"]],domProps:{textContent:e._s(t)}})}))],2)],1)}),[],!1,(function(e){this.$style=r.default.locals||r.default}),null,null);t.a=component.exports},297:function(e,t,v){"use strict";var _=v(279);v.n(_).a},298:function(e,t,v){"use strict";var _=v(280),r=v.n(_);t.default=r.a},372:function(e,t,v){},373:function(e,t,v){},374:function(e,t,v){},503:function(e,t,v){"use strict";var _=v(372);v.n(_).a},504:function(e,t,v){"use strict";var _=v(373);v.n(_).a},505:function(e,t,v){"use strict";var _=v(374);v.n(_).a},611:function(e,t,v){"use strict";v.r(t);var _=v(281),r=v(294),n={name:"PinRecommendedItem",components:{UserAvatar:_.a,UserNickname:r.a},props:{item:{type:Object,required:!0}},data:()=>({}),computed:{},watch:{},created(){},mounted(){},methods:{}},l=(v(503),v(9)),o=Object(l.a)(n,(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("div",{staticClass:"pin-rec-item"},[v("div",{staticClass:"header"},[v("UserAvatar",{attrs:{disabled:"",user:e.item.author,size:30}}),e._v(" "),v("UserNickname",{attrs:{disabled:"",user:e.item.author}})],1),e._v(" "),v("div",{staticClass:"content"},[v("div",{staticClass:"text",domProps:{innerHTML:e._s(e.item.intro)}}),e._v(" "),e.item.media?v("div",{staticClass:"media"},[e.item.media.image_count?[1===e.item.media.image_count?v("div",{staticClass:"image-1"},[v("div",{staticClass:"img",style:{backgroundImage:"url("+e.$resize(e.item.media.images[0].url,{width:200,mode:2})+")"}})]):2===e.item.media.image_count?v("div",{staticClass:"image-2"},[v("div",{staticClass:"wrap"},[v("div",{staticClass:"img",style:{backgroundImage:"url("+e.$resize(e.item.media.images[0].url,{width:200,mode:2})+")"}}),e._v(" "),v("div",{staticClass:"img",style:{backgroundImage:"url("+e.$resize(e.item.media.images[1].url,{width:200,mode:2})+")"}})])]):v("div",{staticClass:"image-3"},[v("div",{staticClass:"wrap"},[v("div",{staticClass:"img big",style:{backgroundImage:"url("+e.$resize(e.item.media.images[0].url,{width:300,mode:2})+")"}}),e._v(" "),v("div",{staticClass:"small"},[v("div",{staticClass:"img",style:{backgroundImage:"url("+e.$resize(e.item.media.images[1].url,{width:150,mode:2})+")"}}),e._v(" "),v("div",{staticClass:"img",style:{backgroundImage:"url("+e.$resize(e.item.media.images[2].url,{width:150,mode:2})+")"}})])])])]:e._e()],2):e._e(),e._v(" "),v("div",{staticClass:"zone oneline"},[e.item.area?v("span",{domProps:{textContent:e._s(e.item.area.name)}}):e._e(),e._v(" "),e.item.topic?v("span",{domProps:{textContent:e._s(e.item.topic.name)}}):e._e(),e._v(" "),e.item.notebook?v("span",{domProps:{textContent:e._s(e.item.notebook.name)}}):e._e()])]),e._v(" "),v("div",{staticClass:"footer"},[v("div",[v("i",{staticClass:"iconfont ic-browse"}),e._v(" "),v("span",{domProps:{textContent:e._s(e.item.visit_count)}})]),e._v(" "),v("div",[v("i",{staticClass:"iconfont ic-message"}),e._v(" "),v("span",{domProps:{textContent:e._s(e.item.comment_count)}})]),e._v(" "),v("div",[v("i",{staticClass:"iconfont ic-good"}),e._v(" "),v("span",{domProps:{textContent:e._s(e.item.like_count)}})])])])}),[],!1,null,null,null).exports,c={name:"Refresher",data:()=>({height:0,translate:!1,refreshing:!1}),computed:{style(){return{height:"".concat(Math.min(this.height,200),"px")}}},methods:{start(e){this.translate=!1,this.height=e},next(){this.translate=!0,this.height<100?this.height=0:(this.height=100,this.refreshing=!0,this.$emit("refresh"))},end(){this.height=0,setTimeout(()=>{this.refreshing=!1},500)},refresh(){this.refreshing=!0,this.translate=!0,this.height=100,this.$emit("refresh")}}},d=(v(504),{name:"AppHome",layout:"app",components:{PinRecommendedItem:o,Refresher:Object(l.a)(c,(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("div",{staticClass:"refresher",class:{translate:e.translate,refreshing:e.refreshing},style:e.style},[e.refreshing?e._e():[v("br"),e._v(" "),v("i",{staticClass:"el-icon-bottom",class:{rotate:e.height>=100}}),e._v(" "),v("p",{domProps:{textContent:e._s(e.height<100?"下拉刷新":"松开刷新")}})]],2)}),[],!1,null,null,null).exports},data:()=>({activeIndex:1}),mounted(){this.watchRefresh()},methods:{handleSwitch(e){this.activeIndex=e},watchRefresh(){this.$channel.$on("main-tab-refresh",e=>{0===e&&1===this.activeIndex&&this.$refs.refresher.refresh()})},refreshMove(e){var{offset:t}=e;this.$refs.refresher.start(t)},refreshEnd(){this.$refs.refresher.next()},handleRefresh(){this.$refs.recommended.refresh(!0)},handleCallback(e){var{refresh:t}=e;setTimeout(()=>{t&&this.$refs.refresher.end()},1e3)}}}),m=(v(505),Object(l.a)(d,(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("div",{attrs:{id:"app-found"}},[v("VSwitcher",{attrs:{headers:["关注","推荐","漫友圈"],sticky:"",swipe:"",animated:"","fixed-top":0,"default-index":e.activeIndex,"anchor-padding":10},on:{change:e.handleSwitch}},[v("VScroller",{attrs:{slot:"0"},slot:"0"},[v("p",[e._v("start")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("关注")]),e._v(" "),v("p",[e._v("end")])]),e._v(" "),v("VScroller",{attrs:{slot:"1"},on:{refresh:e.refreshMove,"refresh-end":e.refreshEnd},slot:"1"},[v("Refresher",{ref:"refresher",on:{refresh:e.handleRefresh}}),e._v(" "),v("FlowLoader",{ref:"recommended",attrs:{func:"getFlowRecommendedIndex",type:"seenIds",query:{$axios:e.$axios,changing:"slug"},callback:e.handleCallback},scopedSlots:e._u([{key:"default",fn:function(t){var _=t.flow;return v("ul",{},e._l(_,(function(e){return v("PinRecommendedItem",{key:e.slug,attrs:{item:e}})})),1)}}])})],1),e._v(" "),v("VScroller",{attrs:{slot:"2"},slot:"2"},[v("p",[e._v("start")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("漫友圈")]),e._v(" "),v("p",[e._v("end")])]),e._v(" "),v("template",{slot:"header-after"},[v("NLink",{attrs:{to:"/app/search"}},[v("i",{staticClass:"iconfont ic-search"})])],1)],2)],1)}),[],!1,null,null,null));t.default=m.exports}}]);