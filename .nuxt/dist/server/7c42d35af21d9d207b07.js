exports.ids=[27],exports.modules={143:function(t,e,r){"use strict";e.a={beforeMount(){const t=()=>{this.$store.getters.isMine(this.$route.params.slug)||this.$router.replace({name:this.$route.name,params:{slug:this.$store.state.user.slug}})};if(this.$store.state.isAuth)return void t();const e=this.$watch("$store.state.isAuth",r=>{r&&(t(),e())})}}},211:function(t,e){},298:function(t,e,r){"use strict";r.r(e);var n=r(211),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,(function(){return n[t]}))}(l);e.default=o.a},353:function(t,e,r){"use strict";r.r(e);var n=r(92),o=r(143),l={name:"UserSettingLayout",mixins:[n.a,o.a],props:{slug:{type:String,required:!0}},computed:{headers(){return[{name:"基础设置",route:`/user/${this.slug}/setting/basic`},{name:"认证设置",route:`/user/${this.slug}/setting/oauth2`}]}}},c=r(1);var component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"user-setting-layout"}},[r("ElRow",{staticClass:"column-wrap"},[r("ElCol",{attrs:{span:6}},[r("VSwitcher",{attrs:{headers:t.headers,routable:!0,align:"vertical"}},t._l(t.headers,(function(e,n){return r("NLink",{key:n,attrs:{slot:"tab-"+n,to:e.route},slot:"tab-"+n},[r("span",{domProps:{textContent:t._s(e.name)}})])})),1)],1),t._v(" "),r("ElCol",{attrs:{span:18}},[r("NuxtChild")],1)],1)],1)}),[],!1,(function(t){var e=r(298);e.__inject__&&e.__inject__(t)}),null,"4654b0cb");e.default=component.exports},92:function(t,e,r){"use strict";e.a={beforeMount(){this.$channel.$when("user-not-sign",()=>{this.$toast.error("继续操作前请先登录").then(()=>{window.location.href=this.$alias.sign()})})}}}};