exports.ids=[7],exports.modules={352:function(t,e,n){"use strict";n.r(e);var o={name:"BangumiJoin",head:{title:"答题"},mixins:[n(90).a],data:()=>({}),computed:{},watch:{},created(){},mounted(){},methods:{}},r=n(1);var component=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"bangumi-join"}},[this._ssrNode("\n  该分区还未出题，请等待出题后再来~\n")])}),[],!1,(function(t){}),null,"d7adfc5c");e.default=component.exports},90:function(t,e,n){"use strict";e.a={beforeMount(){this.$channel.$when("user-not-sign",()=>{this.$toast.error("继续操作前请先登录").then(()=>{window.location.href=this.$alias.sign()})})}}}};