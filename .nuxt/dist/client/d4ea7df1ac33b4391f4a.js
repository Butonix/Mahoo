(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{405:function(t,n,e){},548:function(t,n,e){"use strict";var o=e(405);e.n(o).a},659:function(t,n,e){"use strict";e.r(n);var o={name:"AppAdmin",layout:"app",components:{},props:{},data:function(){return{trialInfo:null}},computed:{},watch:{},created:function(){},mounted:function(){this.getTrialInfo()},methods:{getTrialInfo:function(){var t=this;this.$axios.$get("v1/bangumi/atfield").then((function(data){t.trialInfo=data})).catch()}},head:{title:"控制台"}},r=(e(548),e(16)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app-admin"}},[e("NLink",{attrs:{to:"/app/admin/trial"}},[e("i",{staticClass:"el-icon-edit"}),t._v(" "),e("span",[t._v("审核题目")]),t._v(" "),t.trialInfo?e("span",[t._v("（待审："+t._s(t.trialInfo.trial)+"，库存："+t._s(t.trialInfo.pass)+"）")]):t._e()])],1)}),[],!1,null,null,null);n.default=component.exports}}]);