exports.ids=[12],exports.modules={107:function(t,e,n){"use strict";var r={name:"SendMailBtn",props:{slug:{type:String,required:!0}},computed:{isAuth(){return this.$store.state.isAuth},isMine(){return this.$store.getters.isMine(this.slug)}},methods:{toMessage(){if(!this.isAuth)return void this.$channel.$emit("sign-in");if(this.isMine)return void this.$toast.info("不能给自己发消息");const t=window.open();this.$axios.$get("v1/message/get_channel",{params:{type:1,slug:this.slug}}).then(e=>{t.location=this.$alias.user(this.$store.state.user.slug,`message?mailto=${e}`)}).catch(e=>{this.$toast.error(e.message),t.close()})}}},l=n(2);var component=Object(l.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("el-button",{staticClass:"send-mail-btn",attrs:{type:"info",round:"",plain:""},on:{click:this.toMessage}},[this._v("\n  发消息\n")])},[],!1,function(t){},null,"383c15d0");e.a=component.exports},149:function(t,e){},196:function(t,e,n){"use strict";n.r(e);var r=n(149),l=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e.default=l.a},221:function(t,e,n){"use strict";n.r(e);var r=n(3),l=n(82),o=n(87),c={name:"DailySignBtn",props:{value:{type:Object,required:!0}},data:()=>({loading:!1}),computed:{isMine(){return this.$store.getters.isMine(this.value.slug)}},methods:{handleSign(){this.$store.state.isAuth?this.isMine?this.loading||(this.value.daily_signed?this.$toast.info("今天已签过到"):(this.loading=!0,this.$axios.$post("v1/user/daily_sign").then(data=>{this.value.daily_signed=!0,this.value.sign.continuous_sign_count=data.continuous_sign_count,this.value.sign.latest_signed_at=data.sign_at,this.value.sign.total_sign_count++,this.value.wallet.coin+=data.add_coin_count,this.$toast.success(data.message),this.loading=!1}).catch(t=>{this.$toast.error(t.message),this.loading=!1}))):this.$toast.info("不能替别人签到"):this.$channel.$emit("sign-in")}}},h=n(2);var _=Object(h.a)(c,function(){var t=this.$createElement;return(this._self._c||t)("el-button",{staticClass:"daily-sign-btn",attrs:{loading:this.loading},on:{click:this.handleSign}},[this._v("\n  "+this._s(this.value.daily_signed?"已签到":"未签到")+"\n")])},[],!1,function(t){},null,"171f1cc3").exports,d=n(91),v=n(107),f={name:"UserLayout",layout:"web",components:{UserAvatar:l.a,UserNickname:o.a,DailySignBtn:_,UserFollowBtn:d.a,SendMailBtn:v.a},props:{slug:{type:String,required:!0}},head(){const{user:t}=this;return{title:`${t.nickname}的个人空间`,meta:[{hid:"keywords",name:"keywords",content:t.nickname},{hid:"description",name:"description",content:`${t.nickname},${t.signature}`}]}},data:()=>({user:null}),computed:{isMine(){return this.$store.getters.isMine(this.slug)},self(){return this.$store.state.user},avatar(){return this.isMine?this.self.avatar:this.user.avatar},banner(){return this.isMine?this.self.banner:this.user.banner},nickname(){return this.isMine?this.self.nickname:this.user.nickname},signature(){return this.isMine?this.self.signature:this.user.signature},sex(){return this.isMine?this.self.sex_secret?-1:this.self.sex:this.user.sex},headers(){let t=[{name:"动态",icon:"homepage_fill",color:"#00c091",route:`/user/${this.slug}/timeline`},{name:"爱好",icon:"like_fill",color:"#fb7299",route:`/user/${this.slug}/emotion`},{name:"圈子",icon:"group_fill",color:"#02b5da",route:`/user/${this.slug}/social`}];return this.isMine&&(t=t.concat([{name:"草稿",icon:"document_fill",color:"#f3a034",route:`/user/${this.slug}/draft`},{name:"消息",icon:"remind_fill",color:"#ff5d47",route:`/user/${this.slug}/message`},{name:"设置",icon:"setup_fill",color:"#23c9ed",route:`/user/${this.slug}/setting`}])),t}},asyncData:({app:t,error:e,params:n})=>Object(r.d)(t,n).then(t=>({user:t})).catch(e),beforeMount(){this.patchUser(),this.$channel.$when("user-signed",()=>{this.connectSocket()})},beforeDestroy(){this.isMine&&this.$store.state.socket.isConnected&&this.$channel.socketDisconnect()},methods:{patchUser(){this.$axios.$get("v1/user/patch",{params:{slug:this.slug}}).then(data=>{this.user=Object.assign(this.user,data),this.$store.commit("social/set",{type:"user-follow",slug:this.slug,data:{is_following:data.is_following,is_followed_by:data.is_followed_by}})}).catch(()=>{})},handleFollowAction(t){this.user.followers_count-=-t},connectSocket(){this.isMine&&!this.$store.state.socket.isConnected&&this.$channel.socketConnect()}}};var m=Object(h.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"user-layout"}},[t._ssrNode('<div id="user-panel" class="container">',"</div>",[t._ssrNode('<div class="banner"'+t._ssrStyle(null,{backgroundImage:"url("+t.$resize(t.banner,{height:200,mode:2})+")"},null)+">","</div>",[t._ssrNode('<div class="user">',"</div>",[n("UserAvatar",{attrs:{user:t.user,avatar:t.avatar,size:68}}),t._ssrNode(" "),t._ssrNode('<div class="content">',"</div>",[n("UserNickname",{attrs:{user:t.user,nickname:t.nickname,sex:t.sex}}),t._ssrNode(' <p class="signature oneline">'+t._ssrEscape(t._s(t.signature))+"</p>")],2)],2),t._ssrNode(" "),t.user?t._ssrNode('<div class="actions">',"</div>",[n("UserFollowBtn",{attrs:{slug:t.slug},on:{change:t.handleFollowAction}}),t._ssrNode(" "),n("SendMailBtn",{attrs:{slug:t.slug}})],2):t._e()],2),t._ssrNode(" "),n("VSwitcher",{attrs:{headers:t.headers,routable:!0,"header-height":66,"fixed-top":50,"anchor-trigger":"hover",align:"start"}},[t._l(t.headers,function(e,r){return n("NLink",{key:r,attrs:{slot:"tab-"+r,to:e.route},slot:"tab-"+r},[n("i",{staticClass:"iconfont",class:"ic-"+e.icon,style:{color:e.color}}),t._v(" "),n("span",{domProps:{textContent:t._s(e.name)}})])}),t._v(" "),n("ul",{staticClass:"user-meta",attrs:{slot:"header-after"},slot:"header-after"},[n("li",[n("div",{staticClass:"label"},[t._v("\n            访问数\n          ")]),t._v(" "),n("span",{staticClass:"value",domProps:{textContent:t._s(t.user.visit_count)}})]),t._v(" "),n("li",[n("div",{staticClass:"label"},[t._v("\n            关注数\n          ")]),t._v(" "),n("span",{staticClass:"value",domProps:{textContent:t._s(t.user.following_count)}})]),t._v(" "),n("li",[n("div",{staticClass:"label"},[t._v("\n            粉丝数\n          ")]),t._v(" "),n("span",{staticClass:"value",domProps:{textContent:t._s(t.user.followers_count)}})]),t._v(" "),n("li",[n("div",{staticClass:"label"},[t._v("\n            活跃度\n          ")]),t._v(" "),n("span",{staticClass:"value",domProps:{textContent:t._s(t.user.stat.activity)}})]),t._v(" "),n("li",[n("div",{staticClass:"label"},[t._v("\n            曝光度\n          ")]),t._v(" "),n("span",{staticClass:"value",domProps:{textContent:t._s(t.user.stat.exposure)}})])])],2)],2),t._ssrNode(" "),t._ssrNode('<div class="container">',"</div>",[n("ElRow",{attrs:{gutter:10}},[n("ElCol",{attrs:{span:17}},[n("section",{staticClass:"user-section"},[n("NuxtChild",{attrs:{user:t.user}})],1)]),t._v(" "),t.user?n("ElCol",{attrs:{span:7}},[n("aside",{staticClass:"user-section"},[n("h3",{staticClass:"title"},[t._v("\n            签到\n          ")]),t._v(" "),n("DailySignBtn",{model:{value:t.user,callback:function(e){t.user=e},expression:"user"}}),t._v(" "),[n("p",[t._v("总签到次数："+t._s(t.user.sign.total_sign_count)+"次")]),t._v(" "),n("p",[t._v("连续签到数："+t._s(t.user.sign.continuous_sign_count)+"次")]),t._v(" "),n("p",[t._v("最后签到于："+t._s(t.user.sign.latest_signed_at?t.$utils.timeAgo(t.user.sign.latest_signed_at):"未签到"))])]],2),t._v(" "),t.isMine?n("aside",{staticClass:"user-section"},[n("h3",{staticClass:"title"},[t._v("\n            钱包\n          ")]),t._v(" "),[n("p",[t._v("团子："+t._s(parseFloat(t.self.wallet.coin).toFixed(2)))]),t._v(" "),n("p",[t._v("光玉："+t._s(parseFloat(t.self.wallet.money).toFixed(2)))])]],2):t._e()]):t._e()],1)],1)],2)},[],!1,function(t){var e=n(196);e.__inject__&&e.__inject__(t)},null,"04cb800a");e.default=m.exports},79:function(t,e){},80:function(t,e){},81:function(t,e){t.exports={title:"title_1yLHa","ic-sex":"ic-sex_19eCo",icSex:"ic-sex_19eCo","ic-level":"ic-level_3KuJr",icLevel:"ic-level_3KuJr","ic-title":"ic-title_Uq8in",icTitle:"ic-title_Uq8in"}},82:function(t,e,n){"use strict";var r={name:"UserAvatar",props:{user:{type:Object,required:!0},avatar:{type:String,default:""},size:{type:Number,default:40},disabled:{type:Boolean,default:!1}}},l=n(2);var component=Object(l.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.disabled?n("div",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"}},[n("VImg",{attrs:{radius:"50%",src:t.avatar||t.user.avatar,width:t.size,height:t.size,alt:t.user.nickname}})],1):n("NLink",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"},attrs:{to:t.$alias.user(t.user.slug),target:"_blank"}},[n("VImg",{attrs:{radius:"50%",src:t.avatar||t.user.avatar,width:t.size,height:t.size,alt:t.user.nickname}})],1)},[],!1,function(t){var e=n(83);e.__inject__&&e.__inject__(t)},null,"8c0ebd70");e.a=component.exports},83:function(t,e,n){"use strict";n.r(e);var r=n(79),l=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e.default=l.a},87:function(t,e,n){"use strict";var r={name:"UserNickname",props:{user:{type:Object,required:!0},sex:{type:Number,default:0},level:{type:Boolean,default:!0},nickname:{type:String,default:""},disabled:{type:Boolean,default:!1}},computed:{sexClass(){switch(this.sex){case-1:return{name:"simi",color:"limegreen"};case 0:return{name:"unknown",color:"gold"};case 1:return{name:"nan",color:"deepskyblue"};case 2:return{name:"nv",color:"hotpink"};default:return{name:"weizhi",color:"gold"}}}}},l=n(2);var component=Object(l.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clearfix"},[t.disabled?t._ssrNode('<div class="user-nickname">',"</div>",[t._ssrNode('<div class="nickname"><p class="oneline">'+t._ssrEscape(t._s(t.nickname||t.user.nickname))+"</p></div> "+(t.sex?"<span"+t._ssrClass(null,t.$style.title)+"><i"+t._ssrClass("iconfont",[t.$style["ic-sex"],"ic-"+t.sexClass.name])+t._ssrStyle(null,{backgroundColor:t.sexClass.color},null)+"></i></span>":"\x3c!----\x3e")+" "+(t.level?"<span"+t._ssrClass(null,[t.$style.title,t.$style["ic-level"]])+">"+t._ssrEscape(t._s("Lv"+t.user.level))+"</span>":"\x3c!----\x3e")+" "+t._ssrList(t.user.roles,function(e,n){return"<span"+t._ssrClass(null,[t.$style.title,t.$style["ic-title"]])+">"+t._ssrEscape(t._s(e))+"</span>"}))],2):n("NLink",{staticClass:"user-nickname",attrs:{to:t.$alias.user(t.user.slug),target:"_blank"}},[n("div",{staticClass:"nickname"},[n("p",{staticClass:"oneline",domProps:{textContent:t._s(t.nickname||t.user.nickname)}})]),t._v(" "),t.sex?n("span",{class:t.$style.title},[n("i",{staticClass:"iconfont",class:[t.$style["ic-sex"],"ic-"+t.sexClass.name],style:{backgroundColor:t.sexClass.color}})]):t._e(),t._v(" "),t.level?n("span",{class:[t.$style.title,t.$style["ic-level"]],domProps:{textContent:t._s("Lv"+t.user.level)}}):t._e(),t._v(" "),t._l(t.user.title,function(e,r){return n("span",{key:r,class:[t.$style.title,t.$style["ic-title"]],domProps:{textContent:t._s(e)}})})],2)],1)},[],!1,function(t){var e=n(89);e.__inject__&&e.__inject__(t);var r=n(90);r.__inject__&&r.__inject__(t),this.$style=r.locals||r},null,"5b0047c6");e.a=component.exports},89:function(t,e,n){"use strict";n.r(e);var r=n(80),l=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e.default=l.a},90:function(t,e,n){"use strict";n.r(e);var r=n(81),l=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e.default=l.a},91:function(t,e,n){"use strict";var r={name:"UserFollowBtn",props:{slug:{type:String,required:!0}},computed:{state(){return this.$store.getters["social/get"]("user-follow",this.slug)},isAuth(){return this.$store.state.isAuth},isMine(){return this.$store.getters.isMine(this.slug)},btnText(){return this.isAuth&&this.state?this.isMine?"自己":this.state.is_following&&this.state.is_followed_by?"互相关注":this.state.is_following?"已关注":this.state.is_followed_by?"关注了我":"关注":"关注"}},methods:{handleFollowClick(){this.isAuth?this.isMine?this.$toast.info("不能关注自己"):this.state&&!this.state.is_following_loading&&("关注了我"!==this.btnText&&"关注"!==this.btnText?this.$confirm("确定要取消关注吗？","提示").then(()=>this.submit()).catch(()=>{}):this.submit()):this.$channel.$emit("sign-in")},async submit(){const data=await this.$store.dispatch("social/toggle",{type:"user-follow",slug:this.slug,action:"is_following",params:{target_slug:this.slug,target_type:"user",method_type:"follow"}});data.success&&this.$emit("change",data.result)}}},l=n(2),component=Object(l.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return this.state?e("el-button",{staticClass:"user-fff-btn",attrs:{loading:this.state.is_following_loading,round:"",type:"primary",plain:"关注"!==this.btnText},on:{click:this.handleFollowClick}},[e("span",{domProps:{textContent:this._s(this.btnText)}})]):this._e()},[],!1,null,null,"e3dd3b1a");e.a=component.exports}};
//# sourceMappingURL=e2156bbcd3d9ace43705.js.map