(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{384:function(e,t,r){},385:function(e,t,r){},523:function(e,t,r){"use strict";var n=r(384);r.n(n).a},524:function(e,t,r){"use strict";var n=r(385);r.n(n).a},605:function(e,t,r){"use strict";r.r(t);var n={name:"UserItem",props:{user:{type:Object,required:!0}},methods:{goUser(){(/qq/.test(window.navigator.userAgent.toLowerCase())?window.qq:window.wx).miniProgram.navigateTo({url:"/pages/user/show/index?slug=".concat(this.user.slug)})}}},o=(r(523),r(9)),l={name:"UserList",layout:"app",components:{UserItem:Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",{staticClass:"user-item",on:{click:e.goUser}},[r("div",{staticClass:"avatar"},[r("img",{attrs:{src:e.$resize(e.user.avatar,{width:80})}})]),e._v(" "),r("div",{staticClass:"content"},[r("p",{staticClass:"nickname oneline",domProps:{innerHTML:e._s(e.user.nickname)}}),e._v(" "),r("p",{staticClass:"intro oneline",domProps:{textContent:e._s(e.user.signature)}})])])}),[],!1,null,null,null).exports},props:{},data:()=>({}),computed:{query(){return this.$route.query},headers(){var{query:e}=this;return"idol_fans"===e.type?[{name:"最近入股",func:"getIdolFans",type:"page",query:{$axios:this.$axios,take:20,slug:e.slug,sort:"news"}},{name:"最多入股",func:"getIdolFans",type:"page",query:{$axios:this.$axios,take:20,slug:e.slug,sort:"hots"}}]:[]}},watch:{},created(){},mounted(){},methods:{handleChange(e){this.$refs.loader[e].initData()}},head:{title:"用户列表"}},c=(r(524),Object(o.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"user-list"}},[e.headers.length?[r("VSwitcher",{attrs:{headers:e.headers,align:"center"},on:{change:e.handleChange}},e._l(e.headers,(function(t,n){return r("FlowLoader",{key:n,ref:"loader",refInFor:!0,attrs:{slot:""+n,func:t.func,type:t.type,query:t.query},slot:""+n,scopedSlots:e._u([{key:"default",fn:function(t){var n=t.flow;return r("ul",{},e._l(n,(function(e){return r("UserItem",{key:e.slug,attrs:{user:e}})})),1)}}],null,!0)})})),1)]:r("FlowLoader",{attrs:{func:e.query.func,type:e.query.type,query:Object.assign({},{$axios:e.$axios},e.query)},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.flow;return r("ul",{},e._l(n,(function(e){return r("UserItem",{key:e.slug,attrs:{user:e}})})),1)}}])})],2)}),[],!1,null,null,null));t.default=c.exports}}]);