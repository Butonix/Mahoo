(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{367:function(n,t,e){},501:function(n,t,e){"use strict";var l=e(367);e.n(l).a},610:function(n,t,e){"use strict";e.r(t);var l=e(120),r={name:"EditBangumi",layout:"app",components:{ElSwitch:e.n(l).a},asyncData(n){var{app:t,error:e,query:l}=n,r=l.slug;if(r)return t.$axios.$get("v1/bangumi/show",{params:{slug:r}}).then(n=>({bangumi:n})).catch(e)},data:()=>({bangumi:null}),methods:{handleParentChange(n){this.$axios.$post("v1/bangumi/update/set_parent",{bangumi_slug:this.bangumi.slug,result:n})},handleSetParent(){this.$axios.$post("v1/bangumi/update/set_parent",{child_slug:this.bangumi.slug,parent_slug:this.bangumi.parent_slug}).then(()=>{this.$toast.info("设置成功")}).catch(n=>{this.$toast.error(n.message)})}},head:{title:"番剧关系"}},o=(e(501),e(9)),component=Object(o.a)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.bangumi?e("div",{attrs:{id:"relation-bangumi"}},[e("p",[e("span",[n._v("作为父节点：")]),n._v(" "),e("ElSwitch",{on:{change:n.handleParentChange},model:{value:n.bangumi.is_parent,callback:function(t){n.$set(n.bangumi,"is_parent",t)},expression:"bangumi.is_parent"}})],1),n._v(" "),e("p",[e("span",[n._v("设置父节点：")]),n._v(" "),e("ElInput",{model:{value:n.bangumi.parent_slug,callback:function(t){n.$set(n.bangumi,"parent_slug",t)},expression:"bangumi.parent_slug"}}),n._v(" "),e("button",{on:{click:n.handleSetParent}},[n._v("确认")])],1)]):n._e()}),[],!1,null,null,null);t.default=component.exports}}]);