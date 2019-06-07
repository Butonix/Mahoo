exports.ids=[15],exports.modules={120:function(e,t,n){"use strict";n.r(t);var r=n(51),o=n(56),l=n(88),c={name:"DailySignBtn",props:{value:{type:Object,required:!0}},data:()=>({signing:!1}),computed:{isMine(){return this.$store.getters.isMine(this.value.slug)}},methods:{handleSign(){this.isMine&&!this.signing&&(this.value.sign.daily_signed||(this.signing=!0,this.$axios.$post("v1/user/daily_sign").then(data=>{this.value.sign.daily_signed=!0,this.value.sign.continuous_sign_count=data.continuous_sign_count,this.value.sign.latest_signed_at=data.sign_at,this.value.sign.total_sign_count++,this.value.balance.coin+=data.add_coin_count,this.$toast.success(data.message),this.signing=!1}).catch(e=>{this.$toast.error(e.message),this.signing=!1})))}}},d=n(1);var v=Object(d.a)(c,function(){var e=this.$createElement;return(this._self._c||e)("el-button",{attrs:{loading:this.signing},on:{click:this.handleSign}},[this._v("\n  "+this._s(this.value.sign.daily_signed?"已签到":"签到")+"\n")])},[],!1,function(e){},null,"171f1cc3").exports,_={name:"UserLayout",layout:"web",components:{UserAvatar:o.a,UserNickname:l.a,DailySignBtn:v},props:{slug:{type:String,required:!0}},head(){const{user:e}=this;return{title:e.nickname,meta:[{hid:"description",name:"description",content:`${e.nickname},${e.signature},咔哩吧是一个二次元社区`}]}},data:()=>({user:null}),computed:{isAuth(){return this.$store.state.isAuth},isMine(){return!!this.isAuth&&this.self.slug===this.slug},self(){return this.$store.state.user},avatar(){return this.isMine?this.self.avatar:this.user.avatar},banner(){return this.isMine?this.self.banner:this.user.banner},nickname(){return this.isMine?this.self.nickname:this.user.nickname},signature(){return this.isMine?this.self.signature:this.user.signature},sex(){return this.isMine?this.self.sex_secret?-1:this.self.sex:this.user.sex},headers(){let e=[{name:"动态",icon:"homepage_fill",color:"#00c091",route:`/user/${this.slug}/`},{name:"喜好",icon:"like_fill",color:"#fb7299",route:`/user/${this.slug}/emotion/`}];return this.isMine&&(e=e.concat([{name:"消息",icon:"message_fill",color:"#02b5da",route:`/user/${this.slug}/message/`},{name:"通知",icon:"remind_fill",color:"#ff5d47",route:`/user/${this.slug}/notice/`},{name:"设置",icon:"setup_fill",color:"#23c9ed",route:`/user/${this.slug}/setting/`}])),e}},asyncData:({app:e,error:t,params:n})=>Object(r.b)(e,{slug:n.slug}).then(e=>({user:e})).catch(t),methods:{toMessage(){this.isAuth?this.isMine||window.open(this.$alias.user(this.self.slug,`message/?mailto=${this.slug}`)):this.$channel.$emit("sign-in")}}};var h=Object(d.a)(_,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"user-layout"}},[e._ssrNode('<div id="user-panel" class="container">',"</div>",[e._ssrNode('<div class="banner"'+e._ssrStyle(null,{backgroundImage:"url("+e.$resize(e.banner,{height:200,mode:2})+")"},null)+">","</div>",[e._ssrNode('<div class="user">',"</div>",[n("user-avatar",{attrs:{user:e.user,avatar:e.avatar,size:68}}),e._ssrNode(" "),e._ssrNode('<div class="content">',"</div>",[n("user-nickname",{attrs:{user:e.user,nickname:e.nickname,sex:e.sex}}),e._ssrNode(' <p class="signature oneline">'+e._ssrEscape(e._s(e.signature))+"</p>")],2)],2),e._ssrNode(" "),e._ssrNode('<div class="actions">',"</div>",[n("daily-sign-btn",{model:{value:e.user,callback:function(t){e.user=t},expression:"user"}}),e._ssrNode(" "),n("el-button",{attrs:{type:"primary",size:"small"}},[e._v("\n          关注\n        ")]),e._ssrNode(" "),n("el-button",{attrs:{type:"info",size:"small"},on:{click:e.toMessage}},[e._v("\n          发消息\n        ")])],2)],2),e._ssrNode(" "),n("v-switcher",{attrs:{headers:e.headers,routable:!0,"item-height":66,"anchor-trigger":"hover",align:"start"}},[e._l(e.headers,function(t,r){return n("nuxt-link",{key:r,attrs:{slot:"tab-"+r,to:t.route},slot:"tab-"+r},[n("i",{staticClass:"iconfont",class:"ic-"+t.icon,style:{color:t.color}}),e._v(" "),n("span",{domProps:{textContent:e._s(t.name)}})])}),e._v(" "),n("ul",{staticClass:"user-meta",attrs:{slot:"header-after"},slot:"header-after"},[n("li",[n("div",{staticClass:"label"},[e._v("\n            关注数\n          ")]),e._v(" "),n("span",{staticClass:"value"},[e._v("0")])]),e._v(" "),n("li",[n("div",{staticClass:"label"},[e._v("\n            粉丝数\n          ")]),e._v(" "),n("span",{staticClass:"value"},[e._v("0")])]),e._v(" "),n("li",[n("div",{staticClass:"label"},[e._v("\n            曝光度\n          ")]),e._v(" "),n("span",{staticClass:"value"},[e._v("0")])]),e._v(" "),n("li",[n("div",{staticClass:"label"},[e._v("\n            活跃度\n          ")]),e._v(" "),n("span",{staticClass:"value"},[e._v("0")])])])],2)],2),e._ssrNode(" "),n("nuxt-child")],2)},[],!1,function(e){var t=n(95);t.__inject__&&t.__inject__(e)},null,"04cb800a");t.default=h.exports},51:function(e,t,n){"use strict";n.d(t,"h",function(){return r}),n.d(t,"b",function(){return o}),n.d(t,"a",function(){return l}),n.d(t,"g",function(){return c}),n.d(t,"e",function(){return d}),n.d(t,"c",function(){return v}),n.d(t,"d",function(){return _}),n.d(t,"f",function(){return h});const r=(e,t)=>e.$axios.$post("v1/user/update_info",t),o=(e,{slug:t})=>e.$axios.$get("v1/user/show",{params:{slug:t}}),l=(e,{id:t,phone:n,password:r,authCode:o})=>e.$axios.$post("v1/door/bind_phone",{id:t,phone:n,password:r,authCode:o}),c=(e,{phone_number:t,type:n,geetest:r})=>e.$axios.$post("v1/door/message",{phone_number:t,type:n,geetest:r}),d=(e,{access:t,secret:n,nickname:r,authCode:o,inviteCode:l})=>e.$axios.$post("v1/door/register",{access:t,secret:n,nickname:r,authCode:o,inviteCode:l}),v=(e,{access:t,secret:n,remember:r,geetest:o})=>e.$axios.$post("v1/door/login",{access:t,secret:n,remember:r,geetest:o}),_=e=>e.$axios.$post("v1/door/logout"),h=(e,{method:t,access:n,authCode:r,secret:o})=>e.$axios.$post("v1/door/reset_password",{method:t,access:n,authCode:r,secret:o})},52:function(e,t){},53:function(e,t){},56:function(e,t,n){"use strict";var r={name:"UserAvatar",props:{user:{type:Object,required:!0},avatar:{type:String,default:""},size:{type:Number,default:40},disabled:{type:Boolean,default:!1}}},o=n(1);var component=Object(o.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.disabled?n("div",{staticClass:"user-avatar",style:{width:e.size+"px",height:e.size+"px"}},[e._ssrNode("<img"+e._ssrAttr("src",e.$resize(e.avatar||e.user.avatar,{width:e.size}))+e._ssrAttr("alt",e.user.nickname)+' class="avatar">')],2):n("nuxt-link",{staticClass:"user-avatar",style:{width:e.size+"px",height:e.size+"px"},attrs:{to:e.$alias.user(e.user.slug)}},[n("img",{staticClass:"avatar",attrs:{src:e.$resize(e.avatar||e.user.avatar,{width:e.size}),alt:e.user.nickname}})])},[],!1,function(e){var t=n(63);t.__inject__&&t.__inject__(e)},null,"8c0ebd70");t.a=component.exports},63:function(e,t,n){"use strict";n.r(t);var r=n(52),o=n.n(r);for(var l in r)"default"!==l&&function(e){n.d(t,e,function(){return r[e]})}(l);t.default=o.a},64:function(e,t,n){"use strict";n.r(t);var r=n(53),o=n.n(r);for(var l in r)"default"!==l&&function(e){n.d(t,e,function(){return r[e]})}(l);t.default=o.a},65:function(e,t){},88:function(e,t,n){"use strict";var r={name:"UserNickname",props:{user:{type:Object,required:!0},sex:{type:Number,default:0},level:{type:Boolean,default:!0},nickname:{type:String,default:""},disabled:{type:Boolean,default:!1}},computed:{sexClass(){switch(this.sex){case-1:return{name:"simi",color:"limegreen"};case 0:return{name:"unknown",color:"gold"};case 1:return{name:"nan",color:"deepskyblue"};case 2:return{name:"nv",color:"hotpink"};default:return{name:"weizhi",color:"gold"}}}}},o=n(1);var component=Object(o.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"clearfix"},[e.disabled?e._ssrNode('<div class="user-nickname">',"</div>",[e._ssrNode('<div class="nickname"><p class="oneline">'+e._ssrEscape(e._s(e.nickname||e.user.nickname))+"</p></div> "+(e.sex?'<span class="title"><i'+e._ssrClass("iconfont ic-sex","ic-"+e.sexClass.name)+e._ssrStyle(null,{backgroundColor:e.sexClass.color},null)+"></i></span>":"\x3c!----\x3e")+" "+(e.level?'<span class="title ic-level">'+e._ssrEscape(e._s("Lv"+e.user.level))+"</span>":"\x3c!----\x3e")+" "+e._ssrList(e.user.roles,function(t,n){return'<span class="title ic-title">'+e._ssrEscape(e._s(t))+"</span>"}))],2):n("nuxt-link",{staticClass:"user-nickname",attrs:{to:e.$alias.user(e.user.slug)}},[n("div",{staticClass:"nickname"},[n("p",{staticClass:"oneline",domProps:{textContent:e._s(e.nickname||e.user.nickname)}})]),e._v(" "),e.sex?n("span",{staticClass:"title"},[n("i",{staticClass:"iconfont ic-sex",class:"ic-"+e.sexClass.name,style:{backgroundColor:e.sexClass.color}})]):e._e(),e._v(" "),e.level?n("span",{staticClass:"title ic-level",domProps:{textContent:e._s("Lv"+e.user.level)}}):e._e(),e._v(" "),e._l(e.user.title,function(t,r){return n("span",{key:r,staticClass:"title ic-title",domProps:{textContent:e._s(t)}})})],2)],1)},[],!1,function(e){var t=n(64);t.__inject__&&t.__inject__(e)},null,"5b0047c6");t.a=component.exports},95:function(e,t,n){"use strict";n.r(t);var r=n(65),o=n.n(r);for(var l in r)"default"!==l&&function(e){n.d(t,e,function(){return r[e]})}(l);t.default=o.a}};
//# sourceMappingURL=34a59b087346034a0e5a.js.map