exports.ids=[13],exports.modules={102:function(t,e,r){"use strict";e.a={beforeMount(){const t=()=>{this.$store.getters.isMine(this.$route.params.slug)||this.$router.replace({name:this.$route.name,params:{slug:this.$store.state.user.slug}})};if(this.$store.state.isAuth)return void t();const e=this.$watch("$store.state.isAuth",r=>{r&&(t(),e())})}}},202:function(t,e,r){"use strict";r.r(e);var n=r(102),o={name:"UserDraft",mixins:[r(85).a,n.a],props:{slug:{type:String,required:!0}}},l=r(1),component=Object(l.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"user-draft"}},[r("flow-loader",{attrs:{func:"getUserDrafts",type:"page",query:{count:10,$axios:t.$axios}},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.flow,o=e.extra;return r("ul",{},t._l(n,function(e,n){return r("li",{key:e.slug},[r("nuxt-link",{attrs:{target:"_blank",to:t.$alias.pin(o[n])}},[t._v("\n          "+t._s(e.title.text)+"\n        ")])],1)}),0)}}])})],1)},[],!1,null,null,"5feea85c");e.default=component.exports},85:function(t,e,r){"use strict";var n=r(26);e.a={async beforeMount(){if(this.$store.state.logging){const t=this.$watch("$store.state.logging",()=>{this.$store.state.isAuth?(this.$channel.$fire("user-signed"),t()):this.$toast.error("继续操作前请先登录").then(()=>{window.location.href=this.$alias.sign()})})}else{const t=Object(n.a)();this.$store.commit("SET_USER_TOKEN",t),await this.$store.dispatch("initAuth")?this.$channel.$fire("user-signed"):this.$toast.error("继续操作前请先登录").then(()=>{window.location.href=this.$alias.sign()})}}}}};
//# sourceMappingURL=41a26960f1e2732c029f.js.map