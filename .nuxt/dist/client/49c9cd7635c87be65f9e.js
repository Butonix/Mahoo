(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{303:function(t,n,e){"use strict";e.d(n,"d",function(){return r}),e.d(n,"a",function(){return o}),e.d(n,"e",function(){return l}),e.d(n,"c",function(){return c}),e.d(n,"b",function(){return d});e(28);var r=function(t,n){var e=n.slug;return t.$axios.get("v1/tag/show",{params:{slug:e}})},o=function(t,n){var e=n.name,r=n.parent_slug;return t.$axios.post("v1/tag/create",{name:e,parent_slug:r})},l=function(t,n){var e=n.name,r=n.slug,o=n.avatar,l=n.alias,c=n.intro;return t.$axios.post("v1/tag/update",{name:e,slug:r,avatar:o,alias:l,intro:c})},c=function(t,n){var e=n.slug,r=n.target_slug;return t.$axios.post("v1/tag/relink",{slug:e,target_slug:r})},d=function(t,n){var e=n.slug;return t.$axios.post("v1/tag/delete",{slug:e})}},306:function(t,n,e){},351:function(t,n,e){},354:function(t,n,e){"use strict";var r=e(306);e.n(r).a},370:function(t,n,e){"use strict";e.r(n);e(38);var r=e(2),o=(e(351),e(14),e(352)),l=e.n(o),c=e(303),d={name:"",layout:"web",components:{"el-tree":l.a},props:{},data:function(){return{props:{label:"name",isLeaf:!0,children:"children"},root:null}},computed:{},watch:{},asyncData:function(t){var n=t.app,e=t.error;return Object(c.d)(n,{slug:"1e1"}).then(function(t){return{root:t}}).catch(e)},methods:{loadTags:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(n,e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==n.level){t.next=2;break}return t.abrupt("return",e(this.root.children));case 2:return t.next=4,Object(c.d)(this,{slug:n.data.slug}).then(function(t){e(t.children)});case 4:case"end":return t.stop()}},t,this)}));return function(n,e){return t.apply(this,arguments)}}()}},f=(e(354),e(13)),component=Object(f.a)(d,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"tag-tree"}},[e("el-row",{staticClass:"container"},[e("el-col",{attrs:{span:4}},[t._v("\n       \n    ")]),t._v(" "),e("el-col",{attrs:{span:15}},[t.root?e("el-tree",{attrs:{props:t.props,load:t.loadTags,"node-key":"slug",lazy:""},scopedSlots:t._u([{key:"default",fn:function(n){n.node;var data=n.data;return e("div",{staticClass:"tag"},[e("a",{attrs:{href:"/tag/"+data.slug,target:"_blank"}},[e("span",[t._v(t._s(data.name))])])])}}],null,!1,2375366947)}):t._e()],1)],1)],1)},[],!1,null,null,null);n.default=component.exports}}]);