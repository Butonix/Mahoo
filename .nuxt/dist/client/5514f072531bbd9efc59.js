(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{319:function(t,e,n){"use strict";n(23);var r=n(2),o=n(59);e.a={beforeMount:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){var e,n,r=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.$store.state.logging){t.next=4;break}e=this.$watch("$store.state.logging",function(){r.$store.state.isAuth?(r.$channel.$fire("user-signed"),e()):r.$toast.error("继续操作前请先登录").then(function(){window.location.href=r.$alias.sign()})}),t.next=10;break;case 4:return n=Object(o.a)(),this.$store.commit("SET_USER_TOKEN",n),t.next=8,this.$store.dispatch("initAuth");case 8:t.sent?this.$channel.$fire("user-signed"):this.$toast.error("继续操作前请先登录").then(function(){window.location.href=r.$alias.sign()});case 10:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},327:function(t,e,n){"use strict";n(32),n(91);e.a={beforeMount:function(){var t=this,e=function(){t.$store.getters.isMine(t.$route.params.slug)||t.$router.replace({name:t.$route.name,params:{slug:t.$store.state.user.slug}})};if(this.$store.state.isAuth)e();else var n=this.$watch("$store.state.isAuth",function(t){t&&(e(),n())})}}},490:function(t,e,n){"use strict";n.r(e);var r=n(327),o={name:"UserDraft",mixins:[n(319).a,r.a],props:{slug:{type:String,required:!0}}},c=n(15),component=Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"user-draft"}},[n("flow-loader",{attrs:{func:"getUserDrafts",type:"page",query:{count:10,$axios:t.$axios}},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.flow,o=e.extra;return n("ul",{},t._l(r,function(e,r){return n("li",{key:e.slug},[n("nuxt-link",{attrs:{target:"_blank",to:t.$alias.pin(o[r])}},[t._v("\n          "+t._s(e.title.text)+"\n        ")])],1)}),0)}}])})],1)},[],!1,null,null,null);e.default=component.exports}}]);