exports.ids=[26],exports.modules={112:function(t,e,r){"use strict";r.r(e);var n=r(79),o=r.n(n);for(var c in n)"default"!==c&&function(t){r.d(e,t,function(){return n[t]})}(c);e.default=o.a},131:function(t,e,r){"use strict";r.r(e);var n=r(53),o=r(55),c={name:"UserSettingLayout",mixins:[n.a,o.a],props:{slug:{type:String,required:!0}},computed:{headers(){return[{name:"基础设置",route:`/user/${this.slug}/setting/basic/`},{name:"认证设置",route:`/user/${this.slug}/setting/oauth2/`}]}}},h=r(1);var component=Object(h.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"user-setting-layout"}},[r("el-row",{staticClass:"column-wrap"},[r("el-col",{attrs:{span:6}},[r("v-switcher",{attrs:{headers:t.headers,routable:!0,"item-height":44,align:"vertical"}},t._l(t.headers,function(e,n){return r("nuxt-link",{key:n,attrs:{slot:"tab-"+n,to:e.route},slot:"tab-"+n},[r("span",{domProps:{textContent:t._s(e.name)}})])}),1)],1),t._v(" "),r("el-col",{attrs:{span:18}},[r("nuxt-child")],1)],1)],1)},[],!1,function(t){var e=r(112);e.__inject__&&e.__inject__(t)},null,"4654b0cb");e.default=component.exports},53:function(t,e,r){"use strict";var n=r(19);e.a={beforeMount(){if(this.$store.state.isAuth)return;if(!Object(n.a)())return void this.$toast.error("继续操作前请先登录").then(()=>{window.location.href="/"});const t=this.$watch("$store.state.logging",e=>{e||(t(),this.$store.state.isAuth||(this.$cookie.remove("JWT-TOKEN"),this.$toast.error("继续操作前请先登录").then(()=>{window.location.href="/"})))});this.$store.state.logging||(this.$store.commit("SET_LOGGING"),this.$channel.socketConnect())}}},55:function(t,e,r){"use strict";e.a={beforeMount(){const t=this.$watch("isAuth",e=>{e&&(this.$store.getters.isMine(this.$route.params.slug)||this.$router.replace({name:this.$route.name,params:{slug:this.$store.state.user.slug}}),t())})}}},79:function(t,e){}};
//# sourceMappingURL=99c727a06625c486a44e.js.map