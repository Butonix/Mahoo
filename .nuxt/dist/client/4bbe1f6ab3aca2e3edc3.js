(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{423:function(t,n,e){},424:function(t,n,e){},425:function(t,n,e){},531:function(t,n,e){"use strict";var o=e(423);e.n(o).a},532:function(t,n,e){"use strict";var o=e(424);e.n(o).a},533:function(t,n,e){"use strict";var o=e(425);e.n(o).a},591:function(t,n,e){"use strict";e.r(n);var o=e(16),r=(e(27),e(137)),l=e(365),c=e(363),h=(e(5),{name:"JoinZoneBtn",props:{slug:{type:String,required:!0}},data:function(){return{loading:!1}},computed:{state:function(){return this.$store.getters["social/get"]("tag",this.slug)}},methods:{handleClick:function(){var t=this;this.$store.state.isAuth?this.state.is_marked?this.$toast.info("暂不支持退出"):this.loading||(this.loading=!0,this.$axios.$post("v1/atfield/begin",{slug:this.slug}).then(function(n){"reject"===n?t.$toast.info("该分区还未开放"):"resolve"===n?t.$toast.info("你已加入该分区"):t.getQuestions()}).catch(function(n){t.$toast.error(n.message)}).finally(function(){t.loading=!1})):this.$channel.$emit("sign-in")},getQuestions:function(){this.$toast.info("开发中")}}}),d=e(18),f={name:"JoinCard",components:{JoinZoneBtn:Object(d.a)(h,function(){var t=this.$createElement,n=this._self._c||t;return this.state?n("button",{staticClass:"join-zone-btn",class:{"is-active":this.state.is_marked},on:{click:this.handleClick}},[this._v("\n  "+this._s(this.state.is_marked?"已加入":"加入")+"\n")]):this._e()},[],!1,null,null,null).exports},props:{tag:{type:Object,required:!0}}},m=(e(531),Object(d.a)(f,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"join-card"},[e("div",{staticClass:"bg"},[e("VImg",{staticClass:"poster",attrs:{src:t.tag.avatar,width:"250",height:"150"}})],1),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"name oneline",domProps:{textContent:t._s(t.tag.name)}}),t._v(" "),e("p",{staticClass:"desc",domProps:{textContent:t._s(t.tag.intro||"暂无简介")}}),t._v(" "),e("JoinZoneBtn",{attrs:{slug:t.tag.slug}})],1),t._v(" "),e("div",{staticClass:"footer"},[e("span",[t._v("成员数："+t._s(t.tag.seen_user_count)+"人")])])])},[],!1,null,null,null).exports),v=e(364),_={name:"TagControlPanel",props:{slug:{type:String,required:!0},parentSlug:{type:String,required:!0}},computed:{showQA:function(){return"uh4f"!==this.parentSlug},isAdmin:function(){return this.$store.getters.isAdmin},state:function(){return this.$store.getters["social/get"]("tag",this.slug)}},methods:{deleteTag:function(){var t=this;this.$confirm("真的要这么做吗?","删除标签").then(function(){Object(r.c)(t,{slug:t.slug}).then(function(){t.$toast.success("标签删除成功").then(function(){window.location.reload()})}).catch(function(n){t.$toast.error(n.message)})}).catch(function(){})}}},C=(e(532),Object(d.a)(_,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"tag-control-panel"},[e("h3",[t._v("控制台")]),t._v(" "),t.isAdmin?[e("NLink",{attrs:{to:t.$alias.tag(t.slug,"edit")}},[e("ElButton",{attrs:{icon:"el-icon-edit",size:"mini",round:""}},[t._v("\n        编辑\n      ")])],1),t._v(" "),e("ElButton",{attrs:{icon:"el-icon-delete",size:"mini",round:""},on:{click:t.deleteTag}},[t._v("\n      删除\n    ")])]:t._e(),t._v(" "),t.showQA&&t.state&&t.state.is_marked?e("NLink",{attrs:{to:t.$alias.tag(t.slug,"qa")}},[e("ElButton",{attrs:{icon:"el-icon-guide",size:"mini",round:""}},[t._v("\n      出题\n    ")])],1):t._e()],2)},[],!1,null,null,null).exports),$={name:"TagShow",layout:"web",components:{Affix:l.a,joinCard:m,PinFlowList:c.a,TagHotList:v.a,TagControlPanel:C},head:function(){var t=this.tag;return{title:t.name,meta:[{hid:"keywords",name:"keywords",content:t.alias},{hid:"description",name:"description",content:"".concat(t.name,",").concat(t.intro)}]}},props:{slug:{type:String,required:!0}},data:function(){return{tag:null,children:[]}},asyncData:function(t){var n=t.app,e=t.error,l=t.params;return Object(r.d)(n,l).then(function(data){return Object(o.a)({},data)}).catch(e)},beforeMount:function(){this.patchTag()},methods:{patchTag:function(){var t=this;this.$axios.$get("v1/tag/patch",{params:{slug:this.slug}}).then(function(data){t.tag=t.$set(t,"tag",Object.assign(t.tag,data)),t.$store.commit("social/set",{type:"tag",slug:t.slug,data:{is_marked:data.is_marked}})}).catch(function(){})}}},w=(e(533),Object(d.a)($,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"tag-show"}},[e("ElRow",{staticClass:"container"},[e("ElCol",{attrs:{span:5}},[e("div",{staticClass:"left-aside"},[e("joinCard",{attrs:{tag:t.tag}}),t._v(" "),e("Affix",{attrs:{top:60}},[e("TagHotList",{attrs:{slug:t.slug,list:t.children}})],1)],1)]),t._v(" "),e("ElCol",{staticClass:"main-wrap",attrs:{span:14}},[e("PinFlowList",{attrs:{slug:t.slug,"show-area":!1}})],1),t._v(" "),e("ElCol",{attrs:{span:5}},[e("div",{staticClass:"right-aside"},[e("TagControlPanel",{attrs:{slug:t.slug,"parent-slug":t.tag.parent_slug}})],1)])],1)],1)},[],!1,null,null,null));n.default=w.exports}}]);