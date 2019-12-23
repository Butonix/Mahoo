(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{277:function(t,e,n){"use strict";var o=n(33),r=n(45),l=n(7),h=n(162),c=n(279);o(o.P+o.R,"Promise",{finally:function(t){var e=h(this,r.Promise||l.Promise),n="function"==typeof t;return this.then(n?function(n){return c(e,t()).then((function(){return n}))}:t,n?function(n){return c(e,t()).then((function(){throw n}))}:t)}})},279:function(t,e,n){var o=n(5),r=n(15),l=n(280);t.exports=function(t,e){if(o(t),r(e)&&e.constructor===t)return e;var n=l.f(t);return(0,n.resolve)(e),n.promise}},280:function(t,e,n){"use strict";var o=n(80);function r(t){var e,n;this.promise=new t((function(t,o){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=o})),this.resolve=o(e),this.reject=o(n)}t.exports.f=function(t){return new r(t)}},281:function(t,e,n){"use strict";e.a={beforeMount(){this.$channel.$when("user-not-sign",()=>{this.$toast.error("继续操作前请先登录").then(()=>{window.location.href=this.$alias.sign()})})}}},374:function(t,e,n){},513:function(t,e,n){"use strict";var o=n(374);n.n(o).a},623:function(t,e,n){"use strict";n.r(e);n(14),n(277);var o={name:"BangumiJoin",layout:"app",mixins:[n(281).a],data:()=>({showLaunch:!0,showCreate:!1,rule:null,sheet:null,bangumi:null,questions:[],selected:{},loading:!1}),computed:{slug(){return this.$route.query.slug}},watch:{},created(){},mounted(){this.getBangumiInfo(),this.getBangumiRule()},methods:{getBangumiRule(){this.$axios.$get("v1/join/rule/show",{params:{slug:this.slug}}).then(data=>{this.rule=data}).catch(t=>{this.$toast.error(t.message)})},getBangumiInfo(){this.$axios.$get("v1/bangumi/show",{params:{slug:this.slug}}).then(data=>{this.bangumi=data}).catch(t=>{this.$toast.error(t.message)})},handleBegin(){this.$axios.$post("v1/join/begin",{slug:this.slug}).then(t=>{"reject"===t?this.$toast.info("该分区还未开放"):"resolve"===t?this.$toast.info("你已加入该分区"):"no_rule"===t?this.$toast.info("还没有答题规则"):"no_question"===t?(this.$toast.info("分区题目数量不足"),this.showCreate=!0):"pending"===t&&this.getQuestions()}).catch(t=>{this.$toast.error(t.message)})},getQuestions(){this.$axios.$get("v1/join/list",{params:{slug:this.slug}}).then(data=>{this.selected=data.extra.answers||{},this.questions=data.result,this.showLaunch=!1}).catch(t=>{this.$toast.error(t.message)})},handleSelect(t,e){this.$axios.$post("v1/join/vote",{question_id:t,answer_id:e}).then(()=>{this.selected[t]=e}).catch(t=>{this.$toast.error(t.message)})},restart(){this.$confirm("你会获取一套新的试题，确定要重做吗？").then(()=>{this.loading||(this.loading=!0,this.$axios.$post("v1/join/begin",{slug:this.slug,retry:!0}).then(()=>{this.getQuestions()}).catch(t=>{this.$toast.error(t.message)}).finally(()=>{this.loading=!1}))}).catch(()=>{})},submit(){Object.keys(this.selected).length<this.questions.length?this.$toast.info("请先做完所有题目"):this.loading||(this.loading=!0,this.$axios.$post("v1/join/submit",{slug:this.slug}).then(t=>{"pass"===t?this.$toast.success("挑战成功！"):this.$toast.info("挑战失败！")}).catch(t=>{this.$toast.error(t.message)}).finally(()=>{this.loading=!1}))}},head:{title:"答题"}},r=(n(513),n(9)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"bangumi-join"}},[t.showLaunch?n("div",{staticClass:"launch"},[t.bangumi?[n("img",{staticClass:"avatar",attrs:{src:t.$resize(t.bangumi.avatar,{width:150}),alt:""}}),t._v(" "),n("p",[t._v("加入《"+t._s(t.bangumi.name)+"》")])]:t._e(),t._v(" "),t.rule?[n("ul",[n("li",[t._v("该番剧出题："+t._s(t.rule.question_count)+"道")]),t._v(" "),n("li",[t._v("正确率需要："+t._s(t.rule.right_rate)+"%")])])]:t._e(),t._v(" "),n("ElButton",{attrs:{type:"success",round:""},on:{click:t.handleBegin}},[t._v("开始答题")]),t._v(" "),t.showCreate?n("NLink",{attrs:{to:"/app/bangumi/test?slug="+t.slug}},[t._v("出题")]):t._e()],2):[n("ol",{staticClass:"question-list"},t._l(t.questions,(function(e){return n("li",{key:e.id,staticClass:"question-item"},[n("p",{staticClass:"question",domProps:{innerHTML:t._s(e.title)}}),t._v(" "),n("ol",{staticClass:"answers"},t._l(e.answers,(function(o,r){return n("li",{key:r,class:{"is-selected":t.selected[e.id]&&t.selected[e.id]===r},on:{click:function(n){return t.handleSelect(e.id,r)}}},[n("span",{domProps:{innerHTML:t._s(o)}})])})),0),t._v(" "),n("div",{staticClass:"controls"},[n("div",[n("span",[t._v("出题人：")]),t._v(" "),n("span",{domProps:{textContent:t._s(e.user.nickname)}})])])])})),0),t._v(" "),t.questions.length?n("footer",{staticClass:"qa-footer",attrs:{slot:"footer"},slot:"footer"},[n("ElButton",{staticClass:"submit-btn",attrs:{loading:t.loading,type:"success",round:""},on:{click:t.submit}},[t._v("\n        交卷\n      ")])],1):t._e()]],2)}),[],!1,null,null,null);e.default=component.exports}}]);