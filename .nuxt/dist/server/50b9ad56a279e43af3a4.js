exports.ids=[14],exports.modules={105:function(t,e){},146:function(t,e,n){"use strict";n.r(e);var r=n(105),o=n.n(r);for(var l in r)"default"!==l&&function(t){n.d(e,t,function(){return r[t]})}(l);e.default=o.a},193:function(t,e,n){"use strict";n.r(e);var r=n(55),o=n.n(r),l=n(77),c={name:"TagTree",layout:"web",components:{"el-tree":o.a},props:{},data:()=>({props:{label:"name",isLeaf:!0,children:"children"},root:null}),computed:{},watch:{},asyncData:({app:t,error:e})=>Object(l.e)(t,{slug:"1e1"}).then(t=>({root:t})).catch(e),methods:{async loadTags(t,e){if(0===t.level)return e(this.root.children);await Object(l.e)(this,{slug:t.data.slug}).then(t=>{e(t.children)})}}},d=n(2);var component=Object(d.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tag-tree"}},[n("el-row",{staticClass:"container"},[n("el-col",{attrs:{span:4}},[t._v("\n       \n    ")]),t._v(" "),n("el-col",{attrs:{span:15}},[t.root?n("el-tree",{attrs:{props:t.props,load:t.loadTags,"node-key":"slug",lazy:""},scopedSlots:t._u([{key:"default",fn:function(e){e.node;var data=e.data;return n("div",{staticClass:"tag"},[n("a",{attrs:{href:"/tag/"+data.slug,target:"_blank"}},[n("span",[t._v(t._s(data.name))])])])}}],null,!1,2375366947)}):t._e()],1)],1)],1)},[],!1,function(t){var e=n(146);e.__inject__&&e.__inject__(t)},null,"7d5bbd92");e.default=component.exports},77:function(t,e,n){"use strict";n.d(e,"e",function(){return r}),n.d(e,"b",function(){return o}),n.d(e,"f",function(){return l}),n.d(e,"d",function(){return c}),n.d(e,"c",function(){return d}),n.d(e,"a",function(){return f});const r=(t,{slug:e})=>t.$axios.$get("v1/tag/show",{params:{slug:e}}),o=(t,{name:e,parent_slug:n})=>t.$axios.$post("v1/tag/create",{name:e,parent_slug:n}),l=(t,{name:e,slug:n,avatar:r,alias:o,intro:l})=>t.$axios.$post("v1/tag/update",{name:e,slug:n,avatar:r,alias:o,intro:l}),c=(t,{slug:e,target_slug:n})=>t.$axios.$post("v1/tag/relink",{slug:e,target_slug:n}),d=(t,{slug:e})=>t.$axios.$post("v1/tag/delete",{slug:e}),f=(t,{slug:e})=>t.$axios.$get("v1/tag/bookmarks",{params:{slug:e}})}};
//# sourceMappingURL=50b9ad56a279e43af3a4.js.map