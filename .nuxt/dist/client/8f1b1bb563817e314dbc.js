(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{351:function(t,n,e){"use strict";e(35);n.a={layout:"web",head:function(){var t=this.tag;return{title:t.name,meta:[{hid:"keywords",name:"keywords",content:t.alias},{hid:"description",name:"description",content:"".concat(t.name,",").concat(t.intro)}]}},data:function(){return{tag:null,parent:null,children:[]}},beforeMount:function(){this.patchTag()},methods:{patchTag:function(){var t=this;this.$axios.$get("v1/tag/patch",{params:{slug:this.slug}}).then(function(data){t.tag=t.$set(t,"tag",Object.assign(t.tag,data))}).catch(function(){})}}}},390:function(t,n,e){},502:function(t,n,e){"use strict";var c=e(390);e.n(c).a},572:function(t,n,e){"use strict";e.r(n);var c=e(16),o=e(351),r=e(138),l=e(361),h=e(360),d={name:"ZoneGame",components:{Affix:l.a,PinFlowList:h.a},mixins:[o.a],data:function(){return{slug:"285"}},asyncData:function(t){var n=t.app,e=t.error;return Object(r.e)(n,{slug:"285"}).then(function(data){return Object(c.a)({},data)}).catch(e)},created:function(){},mounted:function(){},methods:{}},f=(e(502),e(18)),component=Object(f.a)(d,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"zone-game"}},[e("ElRow",{staticClass:"container"},[e("ElCol",{attrs:{span:5}},[e("Affix",{staticClass:"left-aside",attrs:{top:50}},[e("h3",{staticClass:"title"},[t._v("\n          热门游戏\n        ")]),t._v(" "),t.children.length?e("ul",{staticClass:"child-node"},t._l(t.children.slice(0,10),function(n){return e("li",{key:n.slug,staticClass:"node"},[e("NLink",{attrs:{to:"/tag/"+n.slug}},[e("VImg",{attrs:{src:n.avatar,width:"32",height:"32",alt:n.name}}),t._v(" "),e("span",{domProps:{textContent:t._s(n.name)}})],1)],1)}),0):t._e()])],1),t._v(" "),e("ElCol",{staticClass:"main-wrap",attrs:{span:14}},[e("PinFlowList",{attrs:{slug:t.slug}})],1),t._v(" "),e("ElCol",{attrs:{span:5}})],1)],1)},[],!1,null,null,null);n.default=component.exports}}]);