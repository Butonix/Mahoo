(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{321:function(t,e,n){},367:function(t,e,n){"use strict";var o=n(321);n.n(o).a},449:function(t,e,n){"use strict";n.r(e);var o={name:"CreateLayout",layout:"web",components:{},props:{},data:function(){return{}},computed:{headers:function(){return[{route:"/create/daily",name:"图文帖",icon:"tee"},{route:"/create/cosplay",name:"cosplay",icon:"cosplay"},{route:"/create/atfield",name:"A.T.Field",icon:"timu"}]}},watch:{},created:function(){},mounted:function(){},methods:{}},c=(n(367),n(26)),component=Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"create-layout"}},[n("el-row",{staticClass:"container"},[n("el-col",{attrs:{span:4}},[n("v-switcher",{attrs:{headers:t.headers,routable:!0,"header-height":44,align:"vertical"}},t._l(t.headers,function(e,o){return n("nuxt-link",{key:o,attrs:{slot:"tab-"+o,to:e.route},slot:"tab-"+o},[n("i",{staticClass:"iconfont",class:"ic-"+e.icon}),t._v(" "),n("span",{domProps:{textContent:t._s(e.name)}})])}),1)],1),t._v(" "),n("el-col",{attrs:{span:15}},[n("nuxt-child",{staticClass:"main-section"})],1),t._v(" "),n("el-col",{attrs:{span:5}},[t._v("\n       \n    ")])],1)],1)},[],!1,null,null,null);e.default=component.exports}}]);