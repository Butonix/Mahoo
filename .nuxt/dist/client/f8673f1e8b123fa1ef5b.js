(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{297:function(t,e,n){"use strict";var r=n(52);e.a={beforeMount:function(){var t=this;if(!this.$store.state.isAuth)if(Object(r.a)()){var e=this.$watch("$store.state.logging",function(n){n||(e(),t.$store.state.isAuth||(t.$cookie.remove("JWT-TOKEN"),t.$toast.error("继续操作前请先登录").then(function(){window.location.href="/"})))});this.$store.state.logging||(this.$store.commit("SET_LOGGING"),this.$channel.socketConnect())}else this.$toast.error("继续操作前请先登录").then(function(){window.location.href="/"})}}},302:function(t,e,n){"use strict";n(36),n(79);e.a={beforeMount:function(){var t=this,e=this.$watch("isAuth",function(n){n&&(t.$store.getters.isMine(t.$route.params.slug)||t.$router.replace({name:t.$route.name,params:{slug:t.$store.state.user.slug}}),e())})}}},333:function(t,e,n){},382:function(t,e,n){"use strict";var r=n(333);n.n(r).a},413:function(t,e,n){"use strict";n.r(e);var r=n(297),o=n(302),c={name:"UserSettingLayout",mixins:[r.a,o.a],props:{slug:{type:String,required:!0}},computed:{headers:function(){return[{name:"基础设置",route:"/user/".concat(this.slug,"/setting/basic/")},{name:"认证设置",route:"/user/".concat(this.slug,"/setting/oauth2/")}]}}},l=(n(382),n(25)),component=Object(l.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"user-setting-layout"}},[n("el-row",{staticClass:"column-wrap"},[n("el-col",{attrs:{span:6}},[n("v-switcher",{attrs:{headers:t.headers,routable:!0,"item-height":44,align:"vertical"}},t._l(t.headers,function(e,r){return n("nuxt-link",{key:r,attrs:{slot:"tab-"+r,to:e.route},slot:"tab-"+r},[n("span",{domProps:{textContent:t._s(e.name)}})])}),1)],1),t._v(" "),n("el-col",{attrs:{span:18}},[n("nuxt-child")],1)],1)],1)},[],!1,null,null,null);e.default=component.exports}}]);