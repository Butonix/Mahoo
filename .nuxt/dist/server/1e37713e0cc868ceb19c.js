exports.ids=[16],exports.modules={178:function(e,t){},179:function(e,t){},290:function(e,t,r){"use strict";r.r(t);var n=r(178),o=r.n(n);for(var c in n)"default"!==c&&function(e){r.d(t,e,(function(){return n[e]}))}(c);t.default=o.a},291:function(e,t,r){"use strict";r.r(t);var n=r(179),o=r.n(n);for(var c in n)"default"!==c&&function(e){r.d(t,e,(function(){return n[e]}))}(c);t.default=o.a},355:function(e,t,r){"use strict";r.r(t);var n={name:"UserItem",props:{user:{type:Object,required:!0}},methods:{goUser(){(/qq/.test(window.navigator.userAgent.toLowerCase())?window.qq:window.wx).miniProgram.navigateTo({url:`/pages/user/show/index?slug=${this.user.slug}`})}}},o=r(1);var c={name:"UserList",layout:"app",components:{UserItem:Object(o.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("li",{staticClass:"user-item",on:{click:e.goUser}},[e._ssrNode('<div class="avatar"><img'+e._ssrAttr("src",e.$resize(e.user.avatar,{width:80}))+'></div> <div class="content"><p class="nickname oneline">'+e._s(e.user.nickname)+'</p> <p class="intro oneline">'+e._ssrEscape(e._s(e.user.signature))+"</p></div>")])}),[],!1,(function(e){var t=r(290);t.__inject__&&t.__inject__(e)}),null,"3ccf369c").exports},props:{},data:()=>({}),computed:{query(){return this.$route.query},headers(){const{query:e}=this;return"idol_fans"===e.type?[{name:"最近入股",func:"getIdolFans",type:"page",query:{$axios:this.$axios,take:20,slug:e.slug,sort:"news"}},{name:"最多入股",func:"getIdolFans",type:"page",query:{$axios:this.$axios,take:20,slug:e.slug,sort:"hots"}}]:[]}},watch:{},created(){},mounted(){},methods:{},head:{title:"用户列表"}};var l=Object(o.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"user-list"}},[e.headers.length?[r("VSwitcher",{attrs:{headers:e.headers,align:"center"}},e._l(e.headers,(function(t,n){return r("FlowLoader",{key:n,attrs:{slot:""+n,func:t.func,type:t.type,query:t.query},slot:""+n,scopedSlots:e._u([{key:"default",fn:function(t){var n=t.flow;return r("ul",{},e._l(n,(function(e){return r("UserItem",{key:e.slug,attrs:{user:e}})})),1)}}],null,!0)})})),1)]:r("FlowLoader",{attrs:{func:e.query.func,type:e.query.type,query:Object.assign({},{$axios:e.$axios},e.query)},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.flow;return r("ul",{},e._l(n,(function(e){return r("UserItem",{key:e.slug,attrs:{user:e}})})),1)}}])})],2)}),[],!1,(function(e){var t=r(291);t.__inject__&&t.__inject__(e)}),null,"4b526240");t.default=l.exports}};