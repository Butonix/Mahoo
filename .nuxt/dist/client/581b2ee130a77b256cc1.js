(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{421:function(t,e,n){},555:function(t,e,n){"use strict";var o=n(421);n.n(o).a},658:function(t,e,n){"use strict";n.r(e);n(5);var o=n(330),r=n.n(o),l=n(323),c=n.n(l),m=n(419),f={name:"EditTagRuleForm",components:{ElSlider:n.n(m).a,ElRadio:c.a,ElRadioGroup:r.a},data:function(){return{rule:{question_count:30,right_rate:100,qa_minutes:30,rule_type:0,result_type:0},submitting:!1}},computed:{slug:function(){return this.$route.query.slug}},mounted:function(){this.getRule()},methods:{formatQuestionCount:function(t){return"".concat(t,"个")},formatRightRate:function(t){return"".concat(t,"%")},formatQAMinutes:function(t){return"".concat(t,"分钟")},updateRule:function(){var t=this;this.submitting||(this.submitting=!0,this.$axios.$post("v1/join/rule/update",this.rule).then((function(){t.$toast.success("更新成功")})).catch((function(e){t.$toast.error(e.message)})).finally((function(){t.submitting=!1})))},getRule:function(){var t=this;this.$axios.$get("v1/join/rule/show",{params:{slug:this.tag.slug}}).then((function(data){t.$set(t,"rule",data)})).catch((function(e){t.$toast.error(e.message)}))}}},_=(n(555),n(16)),component=Object(_.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ElForm",{ref:"form",attrs:{id:"bangumi-rule","label-position":"top"}},[n("ElFormItem",{attrs:{label:"出题数"}},[n("p",{staticClass:"form-tip"},[t._v("\n      如果题库数量不足，则能出几题出几题，如果题库数量超过设定值，则随机出指定题目数\n    ")]),t._v(" "),n("ElSlider",{attrs:{min:5,max:100,"format-tooltip":t.formatQuestionCount},model:{value:t.rule.question_count,callback:function(e){t.$set(t.rule,"question_count",e)},expression:"rule.question_count"}})],1),t._v(" "),n("ElFormItem",{attrs:{label:"正确率"}},[n("p",{staticClass:"form-tip"},[t._v("\n      答题的正确率不低于该值才能通过\n    ")]),t._v(" "),n("ElSlider",{attrs:{min:50,max:100,"format-tooltip":t.formatRightRate},model:{value:t.rule.right_rate,callback:function(e){t.$set(t.rule,"right_rate",e)},expression:"rule.right_rate"}})],1),t._v(" "),n("ElFormItem",{attrs:{label:"加入方式"}},[n("ElRadioGroup",{model:{value:t.rule.rule_type,callback:function(e){t.$set(t.rule,"rule_type",e)},expression:"rule.rule_type"}},[n("ElRadio",{attrs:{label:0}},[t._v("\n        需要答题或管理邀请\n      ")]),t._v(" "),n("ElRadio",{attrs:{label:1}},[t._v("\n        只能管理邀请\n      ")]),t._v(" "),n("ElRadio",{attrs:{label:2}},[t._v("\n        只能答题加入\n      ")])],1),t._v(" "),n("p",{staticClass:"form-tip"},[t._v("\n      加入方式更改之后不会影响「正在答题」和「已经加入」的人\n    ")])],1),t._v(" "),n("ElFormItem",[n("ElButton",{attrs:{loading:t.submitting,type:"success",round:""},on:{click:t.updateRule}},[t._v("\n      保存更改\n    ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);