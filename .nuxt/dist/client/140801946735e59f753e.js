(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{402:function(t,e,n){},536:function(t,e,n){"use strict";var r=n(402);n.n(r).a},643:function(t,e,n){"use strict";n.r(e);var r={name:"AuthSuccess",data:function(){return{timer:5}},computed:{message:function(){return this.$route.query.message},redirect:function(){return this.$route.query.redirect}},mounted:function(){var t=this;this.$cookie.set("JWT-TOKEN",this.$route.query.token,{expires:365}),setInterval((function(){1===t.timer?window.location="/":t.timer--}),1e3)}},c=(n(536),n(16)),component=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"auth-success"}},[e("p",[this._v(this._s(this.message)+",（"+this._s(this.timer)+"s后自动跳转）")]),this._v(" "),e("a",{attrs:{href:"/"}},[this._v("点击返回首页")])])}),[],!1,null,null,null);e.default=component.exports}}]);