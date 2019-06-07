(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{250:function(t,e,n){"use strict";n.d(e,"h",function(){return r}),n.d(e,"b",function(){return o}),n.d(e,"a",function(){return l}),n.d(e,"g",function(){return c}),n.d(e,"e",function(){return h}),n.d(e,"c",function(){return d}),n.d(e,"d",function(){return m}),n.d(e,"f",function(){return v});const r=(t,e)=>t.$axios.$post("v1/user/update_info",e),o=(t,e)=>{let{slug:n}=e;return t.$axios.$get("v1/user/show",{params:{slug:n}})},l=(t,e)=>{let{id:n,phone:r,password:o,authCode:l}=e;return t.$axios.$post("v1/door/bind_phone",{id:n,phone:r,password:o,authCode:l})},c=(t,e)=>{let{phone_number:n,type:r,geetest:o}=e;return t.$axios.$post("v1/door/message",{phone_number:n,type:r,geetest:o})},h=(t,e)=>{let{access:n,secret:r,nickname:o,authCode:l,inviteCode:c}=e;return t.$axios.$post("v1/door/register",{access:n,secret:r,nickname:o,authCode:l,inviteCode:c})},d=(t,e)=>{let{access:n,secret:r,remember:o,geetest:l}=e;return t.$axios.$post("v1/door/login",{access:n,secret:r,remember:o,geetest:l})},m=t=>t.$axios.$post("v1/door/logout"),v=(t,e)=>{let{method:n,access:r,authCode:o,secret:l}=e;return t.$axios.$post("v1/door/reset_password",{method:n,access:r,authCode:o,secret:l})}},251:function(t,e,n){},252:function(t,e,n){},259:function(t,e,n){"use strict";var r={name:"UserAvatar",props:{user:{type:Object,required:!0},avatar:{type:String,default:""},size:{type:Number,default:40},disabled:{type:Boolean,default:!1}}},o=(n(272),n(17)),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.disabled?n("div",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"}},[n("img",{staticClass:"avatar",attrs:{src:t.$resize(t.avatar||t.user.avatar,{width:t.size}),alt:t.user.nickname}})]):n("nuxt-link",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"},attrs:{to:t.$alias.user(t.user.slug)}},[n("img",{staticClass:"avatar",attrs:{src:t.$resize(t.avatar||t.user.avatar,{width:t.size}),alt:t.user.nickname}})])},[],!1,null,null,null);e.a=component.exports},272:function(t,e,n){"use strict";var r=n(251);n.n(r).a},273:function(t,e,n){"use strict";var r=n(252);n.n(r).a},274:function(t,e,n){},299:function(t,e,n){"use strict";var r={name:"UserNickname",props:{user:{type:Object,required:!0},sex:{type:Number,default:0},level:{type:Boolean,default:!0},nickname:{type:String,default:""},disabled:{type:Boolean,default:!1}},computed:{sexClass(){switch(this.sex){case-1:return{name:"simi",color:"limegreen"};case 0:return{name:"unknown",color:"gold"};case 1:return{name:"nan",color:"deepskyblue"};case 2:return{name:"nv",color:"hotpink"};default:return{name:"weizhi",color:"gold"}}}}},o=(n(273),n(17)),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clearfix"},[t.disabled?n("div",{staticClass:"user-nickname"},[n("div",{staticClass:"nickname"},[n("p",{staticClass:"oneline",domProps:{textContent:t._s(t.nickname||t.user.nickname)}})]),t._v(" "),t.sex?n("span",{staticClass:"title"},[n("i",{staticClass:"iconfont ic-sex",class:"ic-"+t.sexClass.name,style:{backgroundColor:t.sexClass.color}})]):t._e(),t._v(" "),t.level?n("span",{staticClass:"title ic-level",domProps:{textContent:t._s("Lv"+t.user.level)}}):t._e(),t._v(" "),t._l(t.user.roles,function(e,r){return n("span",{key:r,staticClass:"title ic-title",domProps:{textContent:t._s(e)}})})],2):n("nuxt-link",{staticClass:"user-nickname",attrs:{to:t.$alias.user(t.user.slug)}},[n("div",{staticClass:"nickname"},[n("p",{staticClass:"oneline",domProps:{textContent:t._s(t.nickname||t.user.nickname)}})]),t._v(" "),t.sex?n("span",{staticClass:"title"},[n("i",{staticClass:"iconfont ic-sex",class:"ic-"+t.sexClass.name,style:{backgroundColor:t.sexClass.color}})]):t._e(),t._v(" "),t.level?n("span",{staticClass:"title ic-level",domProps:{textContent:t._s("Lv"+t.user.level)}}):t._e(),t._v(" "),t._l(t.user.title,function(e,r){return n("span",{key:r,staticClass:"title ic-title",domProps:{textContent:t._s(e)}})})],2)],1)},[],!1,null,null,null);e.a=component.exports},321:function(t,e,n){"use strict";var r=n(274);n.n(r).a},355:function(t,e,n){"use strict";n.r(e);var r=n(250),o=n(259),l=n(299),c={name:"DailySignBtn",props:{value:{type:Object,required:!0}},data:()=>({loading:!1}),computed:{isMine(){return this.$store.getters.isMine(this.value.slug)}},methods:{handleSign(){this.isMine?this.loading||(this.value.sign.daily_signed?this.$toast.info("今天已签过到"):(this.loading=!0,this.$axios.$post("v1/user/daily_sign").then(data=>{this.value.sign.daily_signed=!0,this.value.sign.continuous_sign_count=data.continuous_sign_count,this.value.sign.latest_signed_at=data.sign_at,this.value.sign.total_sign_count++,this.value.balance.coin+=data.add_coin_count,this.$toast.success(data.message),this.loading=!1}).catch(t=>{this.$toast.error(t.message),this.loading=!1}))):this.$toast.info("不能替别人签到")}}},h=n(17),d=Object(h.a)(c,function(){var t=this.$createElement;return(this._self._c||t)("el-button",{staticClass:"daily-sign-btn",attrs:{loading:this.loading},on:{click:this.handleSign}},[this._v("\n  "+this._s(this.value.sign.daily_signed?"已签到":"未签到")+"\n")])},[],!1,null,null,null).exports,m={name:"UserFollowBtn",props:{slug:{type:String,required:!0},value:{type:String,default:"unknown",validator:t=>~["unknown","self","friends","followed","following","stranger"].indexOf(t)}},data(){return{loading:!1,action:this.value}},computed:{btnText(){switch(this.action){case"unknown":return"";case"self":return"关注";case"friends":return"互相关注";case"followed":return"关注了我";case"following":return"已关注";case"stranger":default:return"关注"}}},watch:{value(t){this.action=t}},mounted(){this.$channel.$on("user-follow-".concat(this.slug),t=>{this.action=t})},methods:{handleFollowClick(){"unknown"===this.action||this.loading||("self"!==this.action?"followed"!==this.action&&"stranger"!==this.action?this.$confirm("确定要取消关注吗？","提示").then(()=>this.submit()).catch(()=>{}):this.submit():this.$toast.info("不能关注自己"))},submit(){this.loading=!0,this.$axios.$post("v1/user/toggle_follow",{slug:this.slug}).then(t=>{this.$channel.$emit("user-follow-".concat(this.slug),t),this.$emit("change",{relation:t,change:"friends"===t||"following"===t?1:-1}),this.loading=!1}).catch(t=>{this.$toast.error(t.message),this.loading=!1})}}},v=Object(h.a)(m,function(){var t=this.$createElement,e=this._self._c||t;return e("el-button",{staticClass:"user-fff-btn",attrs:{loading:this.loading||"unknown"===this.action},on:{click:this.handleFollowClick}},[e("span",{domProps:{textContent:this._s(this.btnText)}})])},[],!1,null,null,null).exports,f={name:"SendMailBtn",props:{slug:{type:String,required:!0}},computed:{isAuth(){return this.$store.state.isAuth},isMine(){return this.$store.getters.isMine(this.slug)}},methods:{toMessage(){this.isAuth?this.isMine?this.$toast.info("不能给自己发消息"):window.open(this.$alias.user(this.self.slug,"message/?mailto=".concat(this.slug))):this.$channel.$emit("sign-in")}}},_=Object(h.a)(f,function(){var t=this.$createElement;return(this._self._c||t)("el-button",{staticClass:"send-mail-btn",on:{click:this.toMessage}},[this._v("\n  发消息\n")])},[],!1,null,null,null).exports,C={name:"UserLayout",layout:"web",components:{UserAvatar:o.a,UserNickname:l.a,DailySignBtn:d,UserFollowBtn:v,SendMailBtn:_},props:{slug:{type:String,required:!0}},head(){const{user:t}=this;return{title:t.nickname,meta:[{hid:"description",name:"description",content:"".concat(t.nickname,",").concat(t.signature,",").concat("咔哩吧是一个二次元社区")}]}},data:()=>({user:null}),computed:{isAuth(){return this.$store.state.isAuth},isMine(){return!!this.isAuth&&this.self.slug===this.slug},self(){return this.$store.state.user},avatar(){return this.isMine?this.self.avatar:this.user.avatar},banner(){return this.isMine?this.self.banner:this.user.banner},nickname(){return this.isMine?this.self.nickname:this.user.nickname},signature(){return this.isMine?this.self.signature:this.user.signature},sex(){return this.isMine?this.self.sex_secret?-1:this.self.sex:this.user.sex},headers(){let t=[{name:"动态",icon:"homepage_fill",color:"#00c091",route:"/user/".concat(this.slug,"/timeline")},{name:"爱好",icon:"like_fill",color:"#fb7299",route:"/user/".concat(this.slug,"/emotion")},{name:"圈子",icon:"group_fill",color:"#02b5da",route:"/user/".concat(this.slug,"/social")}];return this.isMine&&(t=t.concat([{name:"消息",icon:"message_fill",color:"#23c9ed",route:"/user/".concat(this.slug,"/message")},{name:"通知",icon:"remind_fill",color:"#ff5d47",route:"/user/".concat(this.slug,"/notice")},{name:"设置",icon:"setup_fill",color:"#23c9ed",route:"/user/".concat(this.slug,"/setting")}])),t}},asyncData(t){let{app:e,error:n,params:o}=t;return Object(r.b)(e,{slug:o.slug}).then(t=>({user:t})).catch(n)},mounted(){this.patchUser()},methods:{patchUser(){this.$axios.$get("v1/user/patch",{params:{slug:this.slug}}).then(data=>{this.user.social=data}).catch(()=>{})},handleFollowAction(t){let{change:e}=t;this.user.social.followers_count+=e}}},x=(n(321),Object(h.a)(C,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"user-layout"}},[n("div",{staticClass:"container",attrs:{id:"user-panel"}},[n("div",{staticClass:"banner",style:{backgroundImage:"url("+t.$resize(t.banner,{height:200,mode:2})+")"}},[n("div",{staticClass:"user"},[n("user-avatar",{attrs:{user:t.user,avatar:t.avatar,size:68}}),t._v(" "),n("div",{staticClass:"content"},[n("user-nickname",{attrs:{user:t.user,nickname:t.nickname,sex:t.sex}}),t._v(" "),n("p",{staticClass:"signature oneline",domProps:{textContent:t._s(t.signature)}})],1)],1),t._v(" "),t.user?n("div",{staticClass:"actions"},[n("daily-sign-btn",{model:{value:t.user,callback:function(e){t.user=e},expression:"user"}}),t._v(" "),n("user-follow-btn",{attrs:{slug:t.slug},on:{change:t.handleFollowAction},model:{value:t.user.social.relation,callback:function(e){t.$set(t.user.social,"relation",e)},expression:"user.social.relation"}}),t._v(" "),n("send-mail-btn",{attrs:{slug:t.slug}})],1):t._e()]),t._v(" "),n("v-switcher",{attrs:{headers:t.headers,routable:!0,"item-height":66,"anchor-trigger":"hover",align:"start"}},[t._l(t.headers,function(e,r){return n("nuxt-link",{key:r,attrs:{slot:"tab-"+r,to:e.route},slot:"tab-"+r},[n("i",{staticClass:"iconfont",class:"ic-"+e.icon,style:{color:e.color}}),t._v(" "),n("span",{domProps:{textContent:t._s(e.name)}})])}),t._v(" "),n("ul",{staticClass:"user-meta",attrs:{slot:"header-after"},slot:"header-after"},[n("li",[n("div",{staticClass:"label"},[t._v("\n            关注数\n          ")]),t._v(" "),n("span",{staticClass:"value",domProps:{textContent:t._s(t.user.social.following_count)}})]),t._v(" "),n("li",[n("div",{staticClass:"label"},[t._v("\n            粉丝数\n          ")]),t._v(" "),n("span",{staticClass:"value",domProps:{textContent:t._s(t.user.social.followers_count)}})])])],2)],1),t._v(" "),n("div",{staticClass:"container"},[n("el-row",{attrs:{gutter:10}},[n("el-col",{attrs:{span:18}},[n("section",{staticClass:"user-section"},[n("nuxt-child",{attrs:{user:t.user}})],1)]),t._v(" "),n("el-col",{attrs:{span:6}},[n("aside",{staticClass:"user-section"},[t._v("\n          6\n        ")])])],1)],1)])},[],!1,null,null,null));e.default=x.exports}}]);