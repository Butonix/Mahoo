(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{200:function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"a",function(){return l});const r=(t,e)=>{let n=e.slug;return t.$axios.get("v1/tag/show",{params:{slug:n}})},l=(t,e)=>{let n=e.name,r=e.parent_slug;return t.$axios.post("v1/tag/create",{name:n,parent_slug:r})}},201:function(t,e,n){},288:function(t,e,n){},292:function(t,e,n){"use strict";var r=n(201);n.n(r).a},302:function(t,e,n){"use strict";n.r(e);var r=n(5),l=(n(288),n(12),n(289)),o=n.n(l),c=n(200),d={name:"",layout:"web",components:{"el-tree":o.a},props:{},data:()=>({props:{label:"name",isLeaf:!0,children:"children"},root:null}),computed:{},watch:{},asyncData(t){let e=t.app;return Object(c.b)(e,{slug:"1e1"}).then(t=>({root:t}))},created(){},mounted(){},methods:{loadTags(t,e){var n=this;return Object(r.a)(function*(){if(0===t.level)return e(n.root.children);yield Object(c.b)(n,{slug:t.data.slug}).then(t=>{e(t.children)})})()}}},f=(n(292),n(13)),component=Object(f.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tag-tree"}},[n("el-row",{staticClass:"container"},[n("el-col",{attrs:{span:4}},[t._v("\n       \n    ")]),t._v(" "),n("el-col",{attrs:{span:15}},[t.root?n("el-tree",{attrs:{props:t.props,load:t.loadTags,"node-key":"slug",lazy:""},scopedSlots:t._u([{key:"default",fn:function(e){e.node;var data=e.data;return n("div",{staticClass:"tag"},[n("a",{attrs:{href:"/tag/"+data.slug,target:"_blank"}},[n("span",[t._v(t._s(data.name))])])])}}],null,!1,2375366947)}):t._e()],1)],1)],1)},[],!1,null,null,null);e.default=component.exports}}]);