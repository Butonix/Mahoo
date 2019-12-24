exports.ids=[16],exports.modules={178:function(t,e){t.exports={undefined:void 0}},292:function(t,e,n){"use strict";n.r(e);var r=n(178),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},383:function(t,e,n){"use strict";n.r(e);var r={name:"BangumiTrial",layout:"app",data:()=>({loading:!1}),computed:{query(){return{...this.$route.query,$axios:this.$axios,status:0}}},methods:{handleDelete(t){this.$confirm("删除后不可恢复，确认要删除吗？","提示").then(()=>{this.loading||(this.loading=!0,this.$axios.$post("v1/join/delete",{id:t}).then(()=>{this.$toast.success("删除成功"),this.$refs.loader.delete(t)}).catch(t=>{this.$toast.error(t.message)}).finally(()=>{this.loading=!1}))}).catch(()=>{})},handlePass(t){this.loading||(this.loading=!0,this.$axios.$post("v1/join/recommend",{id:t}).then(()=>{this.$toast.success("入库成功"),this.$refs.loader.delete(t)}).catch(t=>{this.$toast.error(t.message)}).finally(()=>{this.loading=!1}))},checkIsSelected(t,e,n){const r=t.answers||{};let o=!1;return Object.keys(r).forEach(t=>{t.toString()!==n.toString()||o||(o=r[t]===e)}),o}},head:{title:"审核题目"}},o=n(1);var component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"bangumi-trial"}},[n("FlowLoader",{ref:"loader",attrs:{func:"getBangumiQuestionTrials",type:"page",query:t.query},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.flow,o=e.extra;return n("div",{},t._l(r,(function(e){return n("div",{key:e.id,staticClass:"trial-item"},[n("p",{staticClass:"question",domProps:{innerHTML:t._s(e.title)}}),t._v(" "),n("ol",{staticClass:"answers"},t._l(e.answers,(function(r,c){return n("li",{key:c,class:{"is-selected":t.checkIsSelected(o,c,e.id)}},[n("span",{domProps:{innerHTML:t._s(r)}})])})),0),t._v(" "),n("div",{staticClass:"controls"},[n("div",[n("span",[t._v("用户：")]),t._v(" "),n("span",{domProps:{textContent:t._s(e.user.nickname)}})]),t._v(" "),n("div",[n("button",{on:{click:function(n){return t.handleDelete(e.id)}}},[t._v("拒绝")]),t._v(" "),n("button",{on:{click:function(n){return t.handlePass(e.id)}}},[t._v("通过")])])])])})),0)}},{key:"error",fn:function(e){var n=e.error;return[t._v("\n      "+t._s(n.message)+"\n    ")]}}])})],1)}),[],!1,(function(t){var e=n(292);e.__inject__&&e.__inject__(t)}),null,"3f3ddcc4");e.default=component.exports}};