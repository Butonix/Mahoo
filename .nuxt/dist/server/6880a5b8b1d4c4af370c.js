exports.ids=[13],exports.modules={175:function(n,t){n.exports={undefined:void 0}},289:function(n,t,e){"use strict";e.r(t);var r=e(175),o=e.n(r);for(var l in r)"default"!==l&&function(n){e.d(t,n,(function(){return r[n]}))}(l);t.default=o.a},380:function(n,t,e){"use strict";e.r(t);var r=e(27),o={name:"EditBangumi",layout:"app",components:{ElSwitch:e.n(r).a},asyncData({app:n,error:t,query:e}){const r=e.slug;if(r)return n.$axios.$get("v1/bangumi/show",{params:{slug:r}}).then(n=>({bangumi:n})).catch(t)},data:()=>({bangumi:null}),methods:{handleParentChange(n){this.$axios.$post("v1/bangumi/update/set_parent",{bangumi_slug:this.bangumi.slug,result:n})},handleSetParent(){this.$axios.$post("v1/bangumi/update/set_parent",{child_slug:this.bangumi.slug,parent_slug:this.bangumi.parent_slug}).then(()=>{this.$toast.info("设置成功")}).catch(n=>{this.$toast.error(n.message)})}},head:{title:"番剧关系"}},l=e(1);var component=Object(l.a)(o,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.bangumi?e("div",{attrs:{id:"relation-bangumi"}},[n._ssrNode("<p>","</p>",[n._ssrNode("<span>作为父节点：</span> "),e("ElSwitch",{on:{change:n.handleParentChange},model:{value:n.bangumi.is_parent,callback:function(t){n.$set(n.bangumi,"is_parent",t)},expression:"bangumi.is_parent"}})],2),n._ssrNode(" "),n._ssrNode("<p>","</p>",[n._ssrNode("<span>设置父节点：</span> "),e("ElInput",{model:{value:n.bangumi.parent_slug,callback:function(t){n.$set(n.bangumi,"parent_slug",t)},expression:"bangumi.parent_slug"}}),n._ssrNode(" <button>确认</button>")],2)],2):n._e()}),[],!1,(function(n){var t=e(289);t.__inject__&&t.__inject__(n)}),null,"3ceb44b8");t.default=component.exports}};