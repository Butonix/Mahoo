exports.ids=[8],exports.modules={112:function(t,e,n){t.exports=n.p+"img/9fd1565.png"},162:function(t,e){},268:function(t,e,n){t.exports=n.p+"img/00ba3d9.png"},269:function(t,e,n){t.exports=n.p+"img/0a11aff.png"},270:function(t,e,n){t.exports=n.p+"img/c5e8c0a.png"},271:function(t,e,n){t.exports=n.p+"img/be03a89.png"},272:function(t,e,n){t.exports=n.p+"img/7a42efa.png"},273:function(t,e,n){t.exports=n.p+"img/7bef62a.png"},274:function(t,e,n){t.exports=n.p+"img/518c6b4.png"},275:function(t,e,n){"use strict";n.r(e);var c=n(162),r=n.n(c);for(var l in c)"default"!==l&&function(t){n.d(e,t,function(){return c[t]})}(l);e.default=r.a},377:function(t,e,n){"use strict";n.r(e);var c=n(3),r={name:"AppHome",layout:"app",components:{},props:{},data:()=>({}),computed:{self(){return this.$store.state.user}},watch:{},created(){},mounted(){},methods:{handleLogout(){Object(c.f)(this),this.$cookie.remove("JWT-TOKEN"),this.$channel.socketDisconnect(),window.location="/app/found"}}},l=n(1);var component=Object(l.a)(r,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{attrs:{id:"app-home"}},[t._ssrNode('<div class="panel"><header><img'+t._ssrAttr("src",t.$resize(t.self.avatar,{width:130}))+' class="avatar"> <img'+t._ssrAttr("src",n(112))+' class="link"> <div class="content"><div class="nickname-wrap"><div class="nickname"><p class="oneline">'+t._ssrEscape(t._s(t.self.nickname))+'</p></div> <div class="badge level">'+t._ssrEscape("LV"+t._s(t.self.level))+'</div></div> <p class="intro">'+t._ssrEscape("邀请码 "+t._s(t.self.slug))+'</p></div></header> <main><div class="meta"><div class="item"><p class="oneline">'+t._ssrEscape(t._s(t.$utils.shortenNumber(t.self.stat_activity+t.self.stat_exposure)))+'</p> <span>战斗力</span></div> <div class="item"><p class="oneline">'+t._ssrEscape(t._s(t.$utils.shortenNumber(t.self.wallet_coin)))+'</p> <span>团子</span></div> <div class="item"><p class="oneline">'+t._ssrEscape(t._s(t.$utils.shortenNumber(t.self.wallet_money)))+'</p> <span>光玉</span></div></div></main></div> <div class="shim"></div> <div class="hr"></div> <div class="main-menu"><div class="item"><img'+t._ssrAttr("src",n(268))+' class="icon"> <div class="tail"><img'+t._ssrAttr("src",n(112))+'></div> <p class="text oneline">我的主页</p></div> <div class="item"><img'+t._ssrAttr("src",n(269))+' class="icon"> <div class="tail"><img'+t._ssrAttr("src",n(112))+'></div> <p class="text oneline">交易记录</p></div> <div class="item"><img'+t._ssrAttr("src",n(270))+' class="icon"> <div class="tail"><img'+t._ssrAttr("src",n(112))+'></div> <p class="text oneline">我的收藏</p></div> <div class="item"><img'+t._ssrAttr("src",n(271))+' class="icon"> <div class="tail"><span>邀请送团子</span> <img'+t._ssrAttr("src",n(112))+'></div> <p class="text oneline">我的邀请码</p></div> <div class="item"><img'+t._ssrAttr("src",n(272))+' class="icon"> <div class="tail"><span>玩转C站</span> <img'+t._ssrAttr("src",n(112))+'></div> <p class="text oneline">帮助</p></div> <div class="item"><img'+t._ssrAttr("src",n(273))+' class="icon"> <div class="tail"><img'+t._ssrAttr("src",n(112))+'></div> <p class="text oneline">意见反馈</p></div> <div class="item"><img'+t._ssrAttr("src",n(274))+' class="icon"> <div class="tail"><img'+t._ssrAttr("src",n(112))+'></div> <p class="text oneline">设置</p></div> <div class="logout-btn"><button>退出登录</button></div></div>')])},[],!1,function(t){var e=n(275);e.__inject__&&e.__inject__(t)},null,"0f844751");e.default=component.exports}};
//# sourceMappingURL=9a84553db172db5b83db.js.map