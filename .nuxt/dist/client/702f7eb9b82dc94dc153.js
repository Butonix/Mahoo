(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{352:function(t,e,n){},484:function(t,e,n){"use strict";var r=n(352);n.n(r).a},589:function(t,e,n){"use strict";n.r(e);n(40);var r={name:"AppLaunch",components:{},props:{},data:()=>({time:2}),computed:{},watch:{},created(){},mounted(){this.redirect()},methods:{redirect(){var t=setInterval(()=>{if(!this.time)return clearInterval(t),void this.$router.replace("/app/found");this.time--},1e3)}}},c=(n(484),n(9)),component=Object(c.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"app-launch"}},[this._v("开屏，倒计时（"+this._s(this.time+1)+"s）")])},[],!1,null,null,null);e.default=component.exports}}]);