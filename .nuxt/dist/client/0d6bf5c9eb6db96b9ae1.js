(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{280:function(t,e,n){"use strict";e.a={props:{item:{type:Object,required:!0},showUser:{type:Boolean,default:!0},showZone:{type:Boolean,default:!0},relationZone:{type:String,default:""},secretLink:{type:String,default:""}},computed:{showTopic(){return!(!this.showZone||!this.item.topic)&&this.item.topic.slug!==this.relationZone},showArea(){return!(!this.showZone||!this.item.area)&&this.item.area.slug!==this.relationZone}}}},281:function(t,e,n){"use strict";e.a={beforeMount(){this.$channel.$when("user-not-sign",()=>{this.$toast.error("继续操作前请先登录").then(()=>{window.location.href=this.$alias.sign()})})}}},282:function(t,e,n){"use strict";var o=n(32),r=n(43),l=n(7),c=n(162),d=n(285);o(o.P+o.R,"Promise",{finally:function(t){var e=c(this,r.Promise||l.Promise),n="function"==typeof t;return this.then(n?function(n){return d(e,t()).then(function(){return n})}:t,n?function(n){return d(e,t()).then(function(){throw n})}:t)}})},285:function(t,e,n){var o=n(5),r=n(14),l=n(286);t.exports=function(t,e){if(o(t),r(e)&&e.constructor===t)return e;var n=l.f(t);return(0,n.resolve)(e),n.promise}},286:function(t,e,n){"use strict";var o=n(80);function r(t){var e,n;this.promise=new t(function(t,o){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=o}),this.resolve=o(e),this.reject=o(n)}t.exports.f=function(t){return new r(t)}},287:function(t,e,n){t.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},n.p="/dist/",n(n.s=97)}({0:function(t,e,n){"use strict";function o(t,e,n,o,r,l,c,d){var h,f="function"==typeof t?t.options:t;if(e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),o&&(f.functional=!0),l&&(f._scopeId="data-v-"+l),c?(h=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c)},f._ssrRegister=h):r&&(h=d?function(){r.call(this,this.$root.$options.shadowRoot)}:r),h)if(f.functional){f._injectStyles=h;var m=f.render;f.render=function(t,e){return h.call(e),m(t,e)}}else{var _=f.beforeCreate;f.beforeCreate=_?[].concat(_,h):[h]}return{exports:t,options:f}}n.d(e,"a",function(){return o})},97:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"el-alert-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"el-alert",class:[t.typeClass,t.center?"is-center":"","is-"+t.effect],attrs:{role:"alert"}},[t.showIcon?n("i",{staticClass:"el-alert__icon",class:[t.iconClass,t.isBigIcon]}):t._e(),n("div",{staticClass:"el-alert__content"},[t.title||t.$slots.title?n("span",{staticClass:"el-alert__title",class:[t.isBoldTitle]},[t._t("title",[t._v(t._s(t.title))])],2):t._e(),t.$slots.default&&!t.description?n("p",{staticClass:"el-alert__description"},[t._t("default")],2):t._e(),t.description&&!t.$slots.default?n("p",{staticClass:"el-alert__description"},[t._v(t._s(t.description))]):t._e(),n("i",{directives:[{name:"show",rawName:"v-show",value:t.closable,expression:"closable"}],staticClass:"el-alert__closebtn",class:{"is-customed":""!==t.closeText,"el-icon-close":""===t.closeText},on:{click:function(e){t.close()}}},[t._v(t._s(t.closeText))])])])])};o._withStripped=!0;var r={success:"el-icon-success",warning:"el-icon-warning",error:"el-icon-error"},l={name:"ElAlert",props:{title:{type:String,default:""},description:{type:String,default:""},type:{type:String,default:"info"},closable:{type:Boolean,default:!0},closeText:{type:String,default:""},showIcon:Boolean,center:Boolean,effect:{type:String,default:"light",validator:function(t){return-1!==["light","dark"].indexOf(t)}}},data:function(){return{visible:!0}},methods:{close:function(){this.visible=!1,this.$emit("close")}},computed:{typeClass:function(){return"el-alert--"+this.type},iconClass:function(){return r[this.type]||"el-icon-info"},isBigIcon:function(){return this.description||this.$slots.default?"is-big":""},isBoldTitle:function(){return this.description||this.$slots.default?"is-bold":""}}},c=n(0),component=Object(c.a)(l,o,[],!1,null,null,null);component.options.__file="packages/alert/src/main.vue";var main=component.exports;main.install=function(t){t.component(main.name,main)};e.default=main}})},303:function(t,e,n){t.exports={"tag-question":"tag-question_35lHX",tagQuestion:"tag-question_35lHX",content:"content_2PlmD",title:"title_3fNiX",selectable:"selectable_3kiyA",meta:"meta_UlNhL","skeleton-loading":"skeleton-loading_2qj6g",skeletonLoading:"skeleton-loading_2qj6g",skeleton:"skeleton_2oUiD"}},356:function(t,e,n){"use strict";var o=n(303),r=n.n(o);e.default=r.a},421:function(t,e,n){},422:function(t,e,n){},441:function(t,e,n){"use strict";n(282);var o={name:"TagQuestion",mixins:[n(280).a],props:{showControl:{type:Boolean,default:!1},number:{type:Number,default:-1}},data:()=>({loading:!1,submitting:!1}),computed:{vote(){return this.item.content?this.item.content.filter(t=>"vote"===t.type)[0]:null},showPass(){return this.$hasRole("trial_qa")},showRemove(){return this.$hasRole("delete_qa")}},methods:{order:t=>["A","B","C","D"][t],handleDelete(){this.$confirm("删除后不可恢复，确认要删除吗？","提示").then(()=>{this.loading||(this.loading=!0,this.$axios.$post("v1/atfield/delete",{slug:this.item.slug}).then(()=>{this.$toast.success("删除成功"),this.$emit("remove")}).catch(t=>{this.$toast.error(t.message),this.loading=!1}))}).catch(()=>{})},handlePass(){this.loading||(this.loading=!0,this.$axios.$post("v1/atfield/recommend",{slug:this.item.slug}).then(()=>{this.$toast.success("入库成功"),this.$emit("remove")}).catch(t=>{this.$toast.error(t.message),this.loading=!1}))},handleSelect(option){this.showControl||this.submitting||(this.submitting=!0,this.$axios.$post("v1/social/vote",{pin_slug:this.item.slug,answer_hash:[option.id]}).then(()=>{this.$emit("select",{id:this.item.slug,result:option.id})}).catch(t=>{this.$toast.error(t.message)}).finally(()=>{this.submitting=!1}))}}},r=n(356),l=n(9);var component=Object(l.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:t.$style["tag-question"]},[n("div",{class:t.$style.content},[n("h2",{class:t.$style.title},[n("p",{domProps:{innerHTML:t._s((t.number>-1?t.number+". ":"")+t.item.title.text)}}),t._v(" "),t.showZone?[t.item.area?n("NLink",{attrs:{to:t.$alias.tag(t.item.area.slug),target:"_blank"}},[n("VImg",{attrs:{src:t.item.area.avatar,width:"24",height:"24",radius:"5px"}})],1):t.item.topic?n("NLink",{attrs:{to:t.$alias.tag(t.item.topic.slug),target:"_blank"}},[n("VImg",{attrs:{src:t.item.topic.avatar,width:"24",height:"24",radius:"5px"}})],1):t._e()]:t._e()],2),t._v(" "),t.vote&&t.vote.data?n("main",t._l(t.vote.data.items,function(option,e){var o;return n("p",{key:option.id,class:(o={},o[t.$style.selectable]=!t.showControl,o),on:{click:function(e){return t.handleSelect(option)}}},[t.item.selected_id&&t.item.selected_id===option.id?n("i",{staticClass:"iconfont ic-right"}):t.vote.data.right_ids&&~t.vote.data.right_ids.indexOf(option.id)?n("i",{staticClass:"iconfont ic-right"}):t._e(),t._v(" "),n("span",[t._v(t._s(t.order(e))+". "+t._s(option.text))])])}),0):t._e(),t._v(" "),n("footer",[n("div",{class:t.$style.meta},[n("span",{staticClass:"only-pc"},[t._v("出题人：")]),t._v(" "),n("NLink",{staticClass:"oneline",attrs:{to:t.$alias.user(t.item.author.slug),target:"_blank"}},[n("VImg",{attrs:{src:t.item.author.avatar,radius:"50%",width:"24",height:"24"}}),t._v("\n           \n          "),n("span",{staticClass:"only-pc",domProps:{innerHTML:t._s(t.item.author.nickname)}})],1),t._v(" "),n("span",[t._v("  ·  ")]),t._v(" "),n("time",{domProps:{textContent:t._s(t.$utils.timeAgo(t.item.created_at))}})],1),t._v(" "),t.showControl?n("div",[t.showRemove?n("ElButton",{attrs:{loading:t.loading,size:"mini",plain:"",round:"",type:"primary"},on:{click:t.handleDelete}},[t._v("\n          删除\n        ")]):t._e(),t._v(" "),!t.item.recommended_at&&t.showPass?n("ElButton",{attrs:{loading:t.loading,size:"mini",plain:"",round:"",type:"success"},on:{click:t.handlePass}},[t._v("\n          通过\n        ")]):t._e()],1):t._e()])])])},[],!1,function(t){this.$style=r.default.locals||r.default},null,null);e.a=component.exports},546:function(t,e,n){"use strict";var o=n(421);n.n(o).a},547:function(t,e,n){"use strict";var o=n(422);n.n(o).a},580:function(t,e,n){"use strict";n.r(e);var o=n(281),r=(n(282),n(287)),l=n.n(r),c={name:"SubmitATFieldForm",components:{TagQuestion:n(441).a,ElAlert:l.a},props:{slug:{type:String,required:!0}},data:()=>({tag:null,loading:!1}),methods:{handleCallback(t){var{data:data}=t;this.tag=data.extra.tag,this.$refs.loader.patch(data.extra.answers)},handleSelect(t){var{id:e,result:n}=t;this.$refs.loader.update({id:e,key:"selected_id",value:n})},restart(){this.$confirm("你会获取一套新的试题，运气不好就得全部重做","确定要刷新试卷吗？").then(()=>{this.loading||(this.loading=!0,this.$axios.$post("v1/atfield/begin",{slug:this.slug,retry:!0}).then(t=>{"reject"===t?this.$toast.info("该分区还未开放"):"resolve"===t?this.$toast.info("你已加入该分区"):"no_rule"===t?this.$toast.info("还没有答题规则"):"no_question"===t?this.$toast.info("分区题目数量不足"):this.$toast.info("刷新成功").then(()=>{window.location.reload()})}).catch(t=>{this.$toast.error(t.message)}).finally(()=>{this.loading=!1}))}).catch(()=>{})},submit(){var t=this.$refs.loader.getResource("result"),e=this.$refs.loader.getResource("total");t.filter(t=>t.selected_id).length<e?this.$toast.info("请先做完所有题目"):this.loading||(this.loading=!0,this.$axios.$post("v1/atfield/submit",{slug:this.slug}).then(t=>{"pass"===t?this.$toast.success("挑战成功！"):this.$toast.info("挑战失败！"),setTimeout(()=>{window.location=this.$alias.tag(this.slug)},1e3)}).catch(t=>{this.$toast.error(t.message),this.loading=!1}))}}},d=(n(546),n(9)),h={name:"TagATField",layout:"web",components:{SubmitATFieldForm:Object(d.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("FlowLoader",{ref:"loader",staticClass:"submit-atfield-form",attrs:{func:"getZoneQuestions",type:"page",query:{$axios:t.$axios,slug:t.slug,changing:"slug"},callback:t.handleCallback},scopedSlots:t._u([{key:"header",fn:function(e){var source=e.source;return n("header",{staticClass:"qa-header"},[n("h1",[t.tag?n("span",[t._v("《"+t._s(t.tag.name)+"》")]):t._e(),n("span",[t._v("共"+t._s(source.total)+"道题")])]),t._v(" "),n("ElAlert",{attrs:{title:"题目都是单选，答完所有题之后只要满足「分区规则」即可加入分区",type:"info",center:"","show-icon":"",closable:!1}})],1)}},{key:"default",fn:function(e){var o=e.flow;return n("ul",{staticClass:"questions"},t._l(o,function(e,o){return n("TagQuestion",{key:e.slug,attrs:{item:e,number:o+1,"show-zone":!1},on:{select:t.handleSelect}})}),1)}}])},[t._v(" "),t._v(" "),n("footer",{staticClass:"qa-footer",attrs:{slot:"footer"},slot:"footer"},[n("ElButton",{staticClass:"submit-btn",attrs:{loading:t.loading,type:"danger",plain:"",round:""},on:{click:t.restart}},[t._v("\n      更新试卷\n    ")]),t._v(" "),n("ElButton",{staticClass:"submit-btn",attrs:{loading:t.loading,type:"success",round:""},on:{click:t.submit}},[t._v("\n      交卷\n    ")])],1)])},[],!1,null,null,null).exports},mixins:[o.a],props:{slug:{type:String,required:!0}}},f=(n(547),Object(d.a)(h,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"tag-atfield"}},[e("ElRow",[e("ElCol",{attrs:{span:6,xs:0}},[e("br")]),this._v(" "),e("ElCol",{attrs:{span:12,xs:24}},[e("SubmitATFieldForm",{attrs:{slug:this.slug}})],1)],1)],1)},[],!1,null,null,null));e.default=f.exports}}]);