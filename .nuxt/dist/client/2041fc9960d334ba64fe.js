(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{416:function(t,n,e){},552:function(t,n,e){"use strict";var o=e(416);e.n(o).a},645:function(t,n,e){"use strict";e.r(n);var o={name:"EditBangumi",layout:"app",asyncData:function(t){var n=t.app,e=t.error,o=t.query.slug;if(o)return n.$axios.$get("v1/bangumi/show",{params:{slug:o}}).then((function(t){return{bangumi:t}})).catch(e)},data:function(){return{bangumi:null}},computed:{isAdmin:function(){return this.$store.getters.isAdmin},showEdit:function(){return this.$hasRole("update_bangumi")},showRelation:function(){return this.$hasRole("update_bangumi")},changeTagRule:function(){return this.$hasRole("change_tag_rule")}},head:{title:"番剧介绍"}},r=(e(552),e(16)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.bangumi?e("div",{attrs:{id:"edit-bangumi"}},[e("img",{staticClass:"avatar",attrs:{src:t.$resize(t.bangumi.avatar,{width:150})}}),t._v(" "),e("p",{staticClass:"title oneline",domProps:{textContent:t._s(t.bangumi.name)}}),t._v(" "),e("p",{staticClass:"intro",domProps:{innerHTML:t._s(t.bangumi.intro)}}),t._v(" "),t.isAdmin?[e("hr"),t._v(" "),e("div",{staticClass:"controls"},[e("div",[e("span",[t._v("番剧ID：")]),t._v(" "),e("span",{domProps:{textContent:t._s(t.bangumi.slug)}})])])]:t._e(),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"controls"},[t.showEdit?e("NLink",{attrs:{to:"/app/bangumi/profile?slug="+t.bangumi.slug}},[e("i",{staticClass:"el-icon-setting"}),t._v(" "),e("span",[t._v("编辑番剧")])]):t._e(),t._v(" "),t.showRelation?e("NLink",{attrs:{to:"/app/bangumi/relation?slug="+t.bangumi.slug}},[e("i",{staticClass:"el-icon-connection"}),t._v(" "),e("span",[t._v("相关番剧")])]):t._e(),t._v(" "),t.changeTagRule?e("NLink",{attrs:{to:"/app/bangumi/rule?slug="+t.bangumi.slug}},[e("i",{staticClass:"el-icon-s-operation"}),t._v(" "),e("span",[t._v("入圈规则")])]):t._e(),t._v(" "),e("NLink",{attrs:{to:"/app/bangumi/test?slug="+t.bangumi.slug}},[e("i",{staticClass:"el-icon-edit"}),t._v(" "),e("span",[t._v("添加题目")])])],1)],2):t._e()}),[],!1,null,null,null);n.default=component.exports}}]);