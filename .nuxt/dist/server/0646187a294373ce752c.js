exports.ids=[19],exports.modules={112:function(t,e,r){"use strict";r.r(e);var o=r(80),n=r.n(o);for(var c in o)"default"!==c&&function(t){r.d(e,t,function(){return o[t]})}(c);e.default=n.a},139:function(t,e,r){"use strict";r.r(e);var o=r(56),n={name:"UserNotice",components:{},mixins:[r(54).a,o.a],props:{},data:()=>({}),computed:{},watch:{},created(){},mounted(){},methods:{}},c=r(1);var component=Object(c.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"user-notice"}},[this._ssrNode("\n  通知\n")])},[],!1,function(t){var e=r(112);e.__inject__&&e.__inject__(t)},null,"b37705a6");e.default=component.exports},54:function(t,e,r){"use strict";var o=r(19);e.a={beforeMount(){if(this.$store.state.isAuth)return;if(!Object(o.a)())return void this.$toast.error("继续操作前请先登录").then(()=>{window.location.href="/"});const t=this.$watch("$store.state.logging",e=>{e||(t(),this.$store.state.isAuth||(this.$cookie.remove("JWT-TOKEN"),this.$toast.error("继续操作前请先登录").then(()=>{window.location.href="/"})))});this.$store.state.logging||(this.$store.commit("SET_LOGGING"),this.$channel.socketConnect())}}},56:function(t,e,r){"use strict";e.a={beforeMount(){const t=this.$watch("isAuth",e=>{e&&(this.$store.getters.isMine(this.$route.params.slug)||this.$router.replace({name:this.$route.name,params:{slug:this.$store.state.user.slug}}),t())})}}},80:function(t,e){}};
//# sourceMappingURL=0646187a294373ce752c.js.map