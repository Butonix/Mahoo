exports.ids=[30],exports.modules={115:function(t,e,r){"use strict";r.r(e);var n=r(82),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},143:function(t,e,r){"use strict";r.r(e);var n={name:"UserSocialLayout",props:{user:{type:Object,required:!0},slug:{type:String,required:!0}},computed:{headers(){const t=this.$utils.convertTA(this.user.sex,this.$store.getters.isMine(this.slug));return[{name:`${t}的关注`,route:`/user/${this.slug}/social/following`},{name:`${t}的粉丝`,route:`/user/${this.slug}/social/followers`},{name:`${t}的朋友`,route:`/user/${this.slug}/social/friends`}]}}},o=r(1);var component=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"user-social-layout"}},[r("el-row",{staticClass:"column-wrap"},[r("el-col",{attrs:{span:6}},[r("v-switcher",{attrs:{headers:t.headers,routable:!0,"item-height":44,align:"vertical"}},t._l(t.headers,function(e,n){return r("nuxt-link",{key:n,attrs:{slot:"tab-"+n,to:e.route},slot:"tab-"+n},[r("span",{domProps:{textContent:t._s(e.name)}})])}),1)],1),t._v(" "),r("el-col",{attrs:{span:18}},[r("nuxt-child")],1)],1)],1)},[],!1,function(t){var e=r(115);e.__inject__&&e.__inject__(t)},null,"fa8ea97c");e.default=component.exports},82:function(t,e){}};
//# sourceMappingURL=a2b246f0e01301ce067f.js.map