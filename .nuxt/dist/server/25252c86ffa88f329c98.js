exports.ids=[8],exports.modules={51:function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"a",function(){return o});const r=(t,{slug:e})=>t.$axios.get("v1/tag/show",{params:{slug:e}}),o=(t,{name:e,parent_slug:n})=>t.$axios.post("v1/tag/create",{name:e,parent_slug:n})},52:function(t,e){},73:function(t,e){},74:function(t,e,n){"use strict";n.r(e);var r=n(52),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,function(){return r[t]})}(l);e.default=o.a},82:function(t,e,n){"use strict";n.r(e);n(73),n(3);var r=n(47),o=n.n(r),l=n(51),c={name:"",layout:"web",components:{"el-tree":o.a},props:{},data:()=>({props:{label:"name",isLeaf:!0,children:"children"},root:null}),computed:{},watch:{},asyncData:({app:t})=>Object(l.b)(t,{slug:"1e1"}).then(t=>({root:t})),created(){},mounted(){},methods:{async loadTags(t,e){if(0===t.level)return e(this.root.children);await Object(l.b)(this,{slug:t.data.slug}).then(t=>{e(t.children)})}}},d=n(1);var component=Object(d.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tag-tree"}},[n("el-row",{staticClass:"container"},[n("el-col",{attrs:{span:4}},[t._v("\n       \n    ")]),t._v(" "),n("el-col",{attrs:{span:15}},[t.root?n("el-tree",{attrs:{props:t.props,load:t.loadTags,"node-key":"slug",lazy:""},scopedSlots:t._u([{key:"default",fn:function(e){e.node;var data=e.data;return n("div",{staticClass:"tag"},[n("a",{attrs:{href:"/tag/"+data.slug,target:"_blank"}},[n("span",[t._v(t._s(data.name))])])])}}],null,!1,2375366947)}):t._e()],1)],1)],1)},[],!1,function(t){var e=n(74);e.__inject__&&e.__inject__(t)},null,"7d5bbd92");e.default=component.exports}};
//# sourceMappingURL=25252c86ffa88f329c98.js.map