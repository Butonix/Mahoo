(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{264:function(t,e,r){},301:function(t,e,r){"use strict";var n=r(264);r.n(n).a},340:function(t,e,r){"use strict";r.r(e);var n={name:"AuthRedirect",data:()=>({timer:5}),computed:{message(){return this.$route.query.message},redirect(){return this.$route.query.redirect}},mounted(){this.$cookie.set("JWT-TOKEN",this.$route.query.token,{expires:365}),setInterval(()=>{1===this.timer?window.location=this.redirect?decodeURIComponent(this.redirect):"https://www.calibur.tv":this.timer--},1e3)}},o=(r(301),r(17)),component=Object(o.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"auth-redirect"}},[e("p",[this._v(this._s(this.message)+",（"+this._s(this.timer)+"s后自动跳转）")]),this._v(" "),e("a",{attrs:{href:"/"}},[this._v("点击返回首页")])])},[],!1,null,null,null);e.default=component.exports}}]);