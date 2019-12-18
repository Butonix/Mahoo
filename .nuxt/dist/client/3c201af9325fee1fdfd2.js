(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{325:function(t,e,n){"use strict";e.a={props:{item:{type:Object,required:!0},showUser:{type:Boolean,default:!0},showZone:{type:Boolean,default:!0},relationZone:{type:String,default:""},secretLink:{type:String,default:""}},computed:{showTopic:function(){return!(!this.showZone||!this.item.topic)&&this.item.topic.slug!==this.relationZone},showArea:function(){return!(!this.showZone||!this.item.area)&&this.item.area.slug!==this.relationZone}}}},338:function(t,e,n){t.exports=n.p+"img/aa8b45a.png"},339:function(t,e,n){t.exports=n.p+"img/3251725.png"},345:function(t,e,n){},346:function(t,e,n){t.exports={"tag-question":"tag-question_35lHX",tagQuestion:"tag-question_35lHX",content:"content_2PlmD",title:"title_3fNiX",selectable:"selectable_3kiyA",meta:"meta_UlNhL","skeleton-loading":"skeleton-loading_2qj6g",skeletonLoading:"skeleton-loading_2qj6g",skeleton:"skeleton_2oUiD"}},407:function(t,e,n){"use strict";var o=n(345);n.n(o).a},408:function(t,e,n){"use strict";var o=n(346),l=n.n(o);e.default=l.a},409:function(t,e,n){},502:function(t,e,n){"use strict";var o={name:"SkeletonArticle",components:{},props:{},data:function(){return{}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},l=(n(407),n(16)),component=Object(l.a)(o,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"skeleton-article"},[n("div",{staticClass:"only-pc"},[n("div",{staticClass:"header"},[n("div",{staticClass:"title gray"}),t._v(" "),n("div",{staticClass:"area gray"})]),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"image gray"}),t._v(" "),n("div",{staticClass:"intro"},[n("div",{staticClass:"text"},[n("div",{staticClass:"text-long gray"}),t._v(" "),n("div",{staticClass:"text-shorten gray"})]),t._v(" "),n("div",{staticClass:"metas"},[n("div",{staticClass:"meta gray"}),t._v(" "),n("div",{staticClass:"meta gray"}),t._v(" "),n("div",{staticClass:"meta gray"}),t._v(" "),n("div",{staticClass:"meta gray"}),t._v(" "),n("div",{staticClass:"meta gray"})])])])]),t._v(" "),n("div",{staticClass:"only-h5"},[n("div",{staticClass:"header"},[n("div",{staticClass:"avatar gray"}),t._v(" "),n("div",{staticClass:"title gray"})]),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"image gray"}),t._v(" "),n("div",{staticClass:"intro"},[n("div",{staticClass:"text"},[n("div",{staticClass:"text-long gray"}),t._v(" "),n("div",{staticClass:"text-shorten gray"})])])]),t._v(" "),n("div",{staticClass:"footer"},[n("div",{staticClass:"meta gray"}),t._v(" "),n("div",{staticClass:"meta gray"}),t._v(" "),n("div",{staticClass:"meta gray"}),t._v(" "),n("div",{staticClass:"meta gray"}),t._v(" "),n("div",{staticClass:"meta gray"})])])])}],!1,null,null,null);e.a=component.exports},503:function(t,e,n){"use strict";n(5),n(193);var o={name:"TagQuestion",mixins:[n(325).a],props:{showControl:{type:Boolean,default:!1},number:{type:Number,default:-1}},data:function(){return{loading:!1,submitting:!1}},computed:{vote:function(){return this.item.content?this.item.content.filter((function(t){return"vote"===t.type}))[0]:null},showPass:function(){return this.$hasRole("trial_qa")},showRemove:function(){return this.$hasRole("delete_qa")}},methods:{order:function(t){return["A","B","C","D"][t]},handleDelete:function(){var t=this;this.$confirm("删除后不可恢复，确认要删除吗？","提示").then((function(){t.loading||(t.loading=!0,t.$axios.$post("v1/atfield/delete",{slug:t.item.slug}).then((function(){t.$toast.success("删除成功"),t.$emit("remove")})).catch((function(e){t.$toast.error(e.message),t.loading=!1})))})).catch((function(){}))},handlePass:function(){var t=this;this.loading||(this.loading=!0,this.$axios.$post("v1/atfield/recommend",{slug:this.item.slug}).then((function(){t.$toast.success("入库成功"),t.$emit("remove")})).catch((function(e){t.$toast.error(e.message),t.loading=!1})))},handleSelect:function(option){var t=this;this.showControl||this.submitting||(this.submitting=!0,this.$axios.$post("v1/social/vote",{pin_slug:this.item.slug,answer_hash:[option.id]}).then((function(){t.$emit("select",{id:t.item.slug,result:option.id})})).catch((function(e){t.$toast.error(e.message)})).finally((function(){t.submitting=!1})))}}},l=n(408),r=n(16);var component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:t.$style["tag-question"]},[n("div",{class:t.$style.content},[n("h2",{class:t.$style.title},[n("p",{domProps:{innerHTML:t._s((t.number>-1?t.number+". ":"")+t.item.title.text)}}),t._v(" "),t.showZone?[t.item.area?n("NLink",{attrs:{to:t.$alias.tag(t.item.area.slug),target:"_blank"}},[n("VImg",{attrs:{src:t.item.area.avatar,width:"24",height:"24",radius:"5px"}})],1):t.item.topic?n("NLink",{attrs:{to:t.$alias.tag(t.item.topic.slug),target:"_blank"}},[n("VImg",{attrs:{src:t.item.topic.avatar,width:"24",height:"24",radius:"5px"}})],1):t._e()]:t._e()],2),t._v(" "),t.vote&&t.vote.data?n("main",t._l(t.vote.data.items,(function(option,e){var o;return n("p",{key:option.id,class:(o={},o[t.$style.selectable]=!t.showControl,o),on:{click:function(e){return t.handleSelect(option)}}},[t.item.selected_id&&t.item.selected_id===option.id?n("i",{staticClass:"iconfont ic-right"}):t.vote.data.right_ids&&~t.vote.data.right_ids.indexOf(option.id)?n("i",{staticClass:"iconfont ic-right"}):t._e(),t._v(" "),n("span",[t._v(t._s(t.order(e))+". "+t._s(option.text))])])})),0):t._e(),t._v(" "),n("footer",[n("div",{class:t.$style.meta},[n("span",{staticClass:"only-pc"},[t._v("出题人：")]),t._v(" "),n("NLink",{staticClass:"oneline",attrs:{to:t.$alias.user(t.item.author.slug),target:"_blank"}},[n("VImg",{attrs:{src:t.item.author.avatar,radius:"50%",width:"24",height:"24"}}),t._v("\n           \n          "),n("span",{staticClass:"only-pc",domProps:{innerHTML:t._s(t.item.author.nickname)}})],1),t._v(" "),n("span",[t._v("  ·  ")]),t._v(" "),n("time",{domProps:{textContent:t._s(t.$utils.timeAgo(t.item.created_at))}})],1),t._v(" "),t.showControl?n("div",[t.showRemove?n("ElButton",{attrs:{loading:t.loading,size:"mini",plain:"",round:"",type:"primary"},on:{click:t.handleDelete}},[t._v("\n          删除\n        ")]):t._e(),t._v(" "),!t.item.recommended_at&&t.showPass?n("ElButton",{attrs:{loading:t.loading,size:"mini",plain:"",round:"",type:"success"},on:{click:t.handlePass}},[t._v("\n          通过\n        ")]):t._e()],1):t._e()])])])}),[],!1,(function(t){this.$style=l.default.locals||l.default}),null,null);e.a=component.exports},548:function(t,e,n){"use strict";var o=n(409);n.n(o).a},658:function(t,e,n){"use strict";n.r(e);var o=n(502),l={name:"ATField",layout:"web",components:{TagQuestion:n(503).a,SkeletonArticle:o.a},data:function(){return{sort:"newest"}},computed:{sortOpts:function(){return[{label:"待入库",value:"newest"},{label:"最多赞",value:"like_desc"},{label:"最多踩",value:"like_asc"}]},query:function(){return{$axios:this.$axios,slug:this.slug,sort:this.sort,count:10,changing:"slug"}},slug:function(){return this.$route.query.slug}},methods:{changeSort:function(t){var e=this;t!==this.sort&&(this.sort=t,this.$nextTick((function(){e.$refs.loader.refresh()})))},handleRemove:function(t){this.$refs.loader.delete(t)}}},r=(n(548),n(16)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"atfield"}},[o("ElRow",{staticClass:"container"},[o("ElCol",{staticClass:"only-pc",attrs:{span:5}},[o("br")]),t._v(" "),o("ElCol",{staticClass:"main-wrap",attrs:{xs:24,span:14}},[o("ul",{staticClass:"sortable"},t._l(t.sortOpts,(function(e){return o("li",{key:e.value,class:{"is-active":e.value===t.sort},domProps:{textContent:t._s(e.label)},on:{click:function(n){return t.changeSort(e.value)}}})})),0),t._v(" "),o("FlowLoader",{ref:"loader",attrs:{func:"getATField",type:"page",query:t.query},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.flow;return o("ul",{staticClass:"flows"},t._l(n,(function(e){return o("TagQuestion",{key:e.slug,attrs:{"show-zone":!t.slug,"show-control":!0,item:e},on:{remove:function(n){return t.handleRemove(e.slug)}}})})),1)}}])},[t._v(" "),o("SkeletonArticle",{attrs:{slot:"loading"},slot:"loading"}),t._v(" "),o("template",{slot:"nothing"},[o("img",{attrs:{src:n(338)}}),t._v(" "),o("p",[t._v("这里什么都没有")])]),t._v(" "),o("template",{slot:"error"},[o("img",{attrs:{src:n(339)}}),t._v(" "),o("p",[t._v("遇到错误了，点击重试")])])],2)],1),t._v(" "),o("ElCol",{staticClass:"only-pc",attrs:{span:5}},[o("br")])],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);