(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{293:function(t,e,n){"use strict";n.d(e,"h",function(){return r}),n.d(e,"b",function(){return o}),n.d(e,"a",function(){return l}),n.d(e,"g",function(){return c}),n.d(e,"e",function(){return h}),n.d(e,"c",function(){return d}),n.d(e,"d",function(){return f}),n.d(e,"f",function(){return v});var r=function(t,e){return t.$axios.$post("v1/user/update_info",e)},o=function(t,e){var n=e.slug;return t.$axios.$get("v1/user/show",{params:{slug:n}})},l=function(t,e){var n=e.id,r=e.phone,o=e.password,l=e.authCode;return t.$axios.$post("v1/door/bind_phone",{id:n,phone:r,password:o,authCode:l})},c=function(t,e){var n=e.phone_number,r=e.type,o=e.geetest;return t.$axios.$post("v1/door/message",{phone_number:n,type:r,geetest:o})},h=function(t,e){var n=e.access,r=e.secret,o=e.nickname,l=e.authCode,c=e.inviteCode;return t.$axios.$post("v1/door/register",{access:n,secret:r,nickname:o,authCode:l,inviteCode:c})},d=function(t,e){var n=e.access,r=e.secret,o=e.remember,l=e.geetest;return t.$axios.$post("v1/door/login",{access:n,secret:r,remember:o,geetest:l})},f=function(t){return t.$axios.$post("v1/door/logout")},v=function(t,e){var n=e.method,r=e.access,o=e.authCode,l=e.secret;return t.$axios.$post("v1/door/reset_password",{method:n,access:r,authCode:o,secret:l})}},294:function(t,e,n){"use strict";var r=n(3),o=n(20),l=n(27),c=n(180),h=n(84),d=n(11),f=n(85).f,v=n(126).f,m=n(13).f,_=n(300).trim,C=r.Number,x=C,$=C.prototype,k="Number"==l(n(125)($)),w="trim"in String.prototype,y=function(t){var e=h(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,l=(e=w?e.trim():_(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,c=e.slice(2),i=0,d=c.length;i<d;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,r)}}return+e};if(!C(" 0o1")||!C("0b1")||C("+0x1")){C=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof C&&(k?d(function(){$.valueOf.call(n)}):"Number"!=l(n))?c(new x(y(e)),n,C):y(e)};for(var N,M=n(7)?f(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;M.length>E;E++)o(x,N=M[E])&&!o(C,N)&&m(C,N,v(x,N));C.prototype=$,$.constructor=C,n(14)(r,"Number",C)}},295:function(t,e,n){},296:function(t,e,n){},300:function(t,e,n){var r=n(9),o=n(26),l=n(11),c=n(301),h="["+c+"]",d=RegExp("^"+h+h+"*"),f=RegExp(h+h+"*$"),v=function(t,e,n){var o={},h=l(function(){return!!c[t]()||"​"!="​"[t]()}),d=o[t]=h?e(m):c[t];n&&(o[n]=d),r(r.P+r.F*h,"String",o)},m=v.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(d,"")),2&e&&(t=t.replace(f,"")),t};t.exports=v},301:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},305:function(t,e,n){"use strict";n(294);var r={name:"UserAvatar",props:{user:{type:Object,required:!0},avatar:{type:String,default:""},size:{type:Number,default:40},disabled:{type:Boolean,default:!1}}},o=(n(318),n(25)),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.disabled?n("div",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"}},[n("img",{staticClass:"avatar",attrs:{src:t.$resize(t.avatar||t.user.avatar,{width:t.size}),alt:t.user.nickname}})]):n("nuxt-link",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"},attrs:{to:t.$alias.user(t.user.slug)}},[n("img",{staticClass:"avatar",attrs:{src:t.$resize(t.avatar||t.user.avatar,{width:t.size}),alt:t.user.nickname}})])},[],!1,null,null,null);e.a=component.exports},318:function(t,e,n){"use strict";var r=n(295);n.n(r).a},319:function(t,e,n){"use strict";var r=n(296);n.n(r).a},320:function(t,e,n){},345:function(t,e,n){"use strict";n(294);var r={name:"UserNickname",props:{user:{type:Object,required:!0},sex:{type:Number,default:0},level:{type:Boolean,default:!0},nickname:{type:String,default:""},disabled:{type:Boolean,default:!1}},computed:{sexClass:function(){switch(this.sex){case-1:return{name:"simi",color:"limegreen"};case 0:return{name:"unknown",color:"gold"};case 1:return{name:"nan",color:"deepskyblue"};case 2:return{name:"nv",color:"hotpink"};default:return{name:"weizhi",color:"gold"}}}}},o=(n(319),n(25)),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clearfix"},[t.disabled?n("div",{staticClass:"user-nickname"},[n("div",{staticClass:"nickname"},[n("p",{staticClass:"oneline",domProps:{textContent:t._s(t.nickname||t.user.nickname)}})]),t._v(" "),t.sex?n("span",{staticClass:"title"},[n("i",{staticClass:"iconfont ic-sex",class:"ic-"+t.sexClass.name,style:{backgroundColor:t.sexClass.color}})]):t._e(),t._v(" "),t.level?n("span",{staticClass:"title ic-level",domProps:{textContent:t._s("Lv"+t.user.level)}}):t._e(),t._v(" "),t._l(t.user.roles,function(e,r){return n("span",{key:r,staticClass:"title ic-title",domProps:{textContent:t._s(e)}})})],2):n("nuxt-link",{staticClass:"user-nickname",attrs:{to:t.$alias.user(t.user.slug)}},[n("div",{staticClass:"nickname"},[n("p",{staticClass:"oneline",domProps:{textContent:t._s(t.nickname||t.user.nickname)}})]),t._v(" "),t.sex?n("span",{staticClass:"title"},[n("i",{staticClass:"iconfont ic-sex",class:"ic-"+t.sexClass.name,style:{backgroundColor:t.sexClass.color}})]):t._e(),t._v(" "),t.level?n("span",{staticClass:"title ic-level",domProps:{textContent:t._s("Lv"+t.user.level)}}):t._e(),t._v(" "),t._l(t.user.title,function(e,r){return n("span",{key:r,staticClass:"title ic-title",domProps:{textContent:t._s(e)}})})],2)],1)},[],!1,null,null,null);e.a=component.exports},367:function(t,e,n){"use strict";var r=n(320);n.n(r).a},401:function(t,e,n){"use strict";n.r(e);var r=n(293),o=n(305),l=n(345),c={name:"DailySignBtn",props:{value:{type:Object,required:!0}},data:function(){return{loading:!1}},computed:{isMine:function(){return this.$store.getters.isMine(this.value.slug)}},methods:{handleSign:function(){var t=this;this.isMine&&!this.loading&&(this.value.sign.daily_signed?this.$toast.info("今天已签过到"):(this.loading=!0,this.$axios.$post("v1/user/daily_sign").then(function(data){t.value.sign.daily_signed=!0,t.value.sign.continuous_sign_count=data.continuous_sign_count,t.value.sign.latest_signed_at=data.sign_at,t.value.sign.total_sign_count++,t.value.balance.coin+=data.add_coin_count,t.$toast.success(data.message),t.loading=!1}).catch(function(e){t.$toast.error(e.message),t.loading=!1})))}}},h=n(25),d=Object(h.a)(c,function(){var t=this.$createElement;return(this._self._c||t)("el-button",{staticClass:"daily-sign-btn",attrs:{loading:this.loading},on:{click:this.handleSign}},[this._v("\n  "+this._s(this.value.sign.daily_signed?"已签到":"签到")+"\n")])},[],!1,null,null,null).exports,f={name:"UserFollowBtn",props:{slug:{type:String,required:!0},value:{type:String,default:"unknown",validator:function(t){return~["unknown","self","friends","followed","following","stranger"].indexOf(t)}}},data:function(){return{loading:!1,action:this.value}},computed:{btnText:function(){switch(this.action){case"unknown":return"";case"self":return"关注";case"friends":return"互相关注";case"followed":return"关注了我";case"following":return"已关注";case"stranger":default:return"关注"}}},watch:{value:function(t){this.action=t}},mounted:function(){var t=this;this.$channel.$on("user-follow-".concat(this.slug),function(e){t.action=e})},methods:{handleFollowClick:function(){var t=this;"unknown"===this.action||this.loading||("self"!==this.action?("followed"!==this.action&&"stranger"!==this.action||this.submit(),this.$confirm("确定要取消关注吗？").then(function(){return t.submit()}).catch(function(){})):this.$toast.info("不能关注自己"))},submit:function(){var t=this;this.loading=!0,this.$axios.post("v1/user/toggle_follow",{slug:this.slug}).then(function(e){t.$channel.$emit("user-follow-".concat(t.slug),e),t.$emit("change",e),t.loading=!1}).catch(function(e){t.$toast.error(e.message),t.loading=!1})}}},v=Object(h.a)(f,function(){var t=this.$createElement,e=this._self._c||t;return e("el-button",{staticClass:"user-fff-btn",attrs:{loading:this.loading||"unknown"===this.action},on:{click:this.handleFollowClick}},[e("span",{domProps:{textContent:this._s(this.btnText)}})])},[],!1,null,null,null).exports,m={name:"SendMailBtn",props:{slug:{type:String,required:!0}},computed:{isAuth:function(){return this.$store.state.isAuth},isMine:function(){return this.$store.getters.isMine(this.slug)}},methods:{toMessage:function(){this.isAuth?this.isMine?this.$toast.info("不能给自己发消息"):window.open(this.$alias.user(this.self.slug,"message/?mailto=".concat(this.slug))):this.$channel.$emit("sign-in")}}},_=Object(h.a)(m,function(){var t=this.$createElement;return(this._self._c||t)("el-button",{staticClass:"send-mail-btn",on:{click:this.toMessage}},[this._v("\n  发消息\n")])},[],!1,null,null,null).exports,C={name:"UserLayout",layout:"web",components:{UserAvatar:o.a,UserNickname:l.a,DailySignBtn:d,UserFollowBtn:v,SendMailBtn:_},props:{slug:{type:String,required:!0}},head:function(){var t=this.user;return{title:t.nickname,meta:[{hid:"description",name:"description",content:"".concat(t.nickname,",").concat(t.signature,",").concat("咔哩吧是一个二次元社区")}]}},data:function(){return{user:null}},computed:{isAuth:function(){return this.$store.state.isAuth},isMine:function(){return!!this.isAuth&&this.self.slug===this.slug},self:function(){return this.$store.state.user},avatar:function(){return this.isMine?this.self.avatar:this.user.avatar},banner:function(){return this.isMine?this.self.banner:this.user.banner},nickname:function(){return this.isMine?this.self.nickname:this.user.nickname},signature:function(){return this.isMine?this.self.signature:this.user.signature},sex:function(){return this.isMine?this.self.sex_secret?-1:this.self.sex:this.user.sex},headers:function(){var t=[{name:"动态",icon:"homepage_fill",color:"#00c091",route:"/user/".concat(this.slug,"/timeline/")},{name:"爱好",icon:"like_fill",color:"#fb7299",route:"/user/".concat(this.slug,"/emotion/")},{name:"圈子",icon:"group_fill",color:"#02b5da",route:"/user/".concat(this.slug,"/social/")}];return this.isMine&&(t=t.concat([{name:"消息",icon:"message_fill",color:"#23c9ed",route:"/user/".concat(this.slug,"/message/")},{name:"通知",icon:"remind_fill",color:"#ff5d47",route:"/user/".concat(this.slug,"/notice/")},{name:"设置",icon:"setup_fill",color:"#23c9ed",route:"/user/".concat(this.slug,"/setting/")}])),t}},asyncData:function(t){var e=t.app,n=t.error,o=t.params;return Object(r.b)(e,{slug:o.slug}).then(function(t){return{user:t}}).catch(n)},mounted:function(){this.patchUser()},methods:{patchUser:function(){var t=this;this.$axios.$get("v1/user/patch",{params:{slug:this.slug}}).then(function(data){t.user.social=data}).catch(function(){})}}},x=(n(367),Object(h.a)(C,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"user-layout"}},[n("div",{staticClass:"container",attrs:{id:"user-panel"}},[n("div",{staticClass:"banner",style:{backgroundImage:"url("+t.$resize(t.banner,{height:200,mode:2})+")"}},[n("div",{staticClass:"user"},[n("user-avatar",{attrs:{user:t.user,avatar:t.avatar,size:68}}),t._v(" "),n("div",{staticClass:"content"},[n("user-nickname",{attrs:{user:t.user,nickname:t.nickname,sex:t.sex}}),t._v(" "),n("p",{staticClass:"signature oneline",domProps:{textContent:t._s(t.signature)}})],1)],1),t._v(" "),t.user?n("div",{staticClass:"actions"},[n("daily-sign-btn",{model:{value:t.user,callback:function(e){t.user=e},expression:"user"}}),t._v(" "),n("user-follow-btn",{attrs:{slug:t.slug},model:{value:t.user.social.relation,callback:function(e){t.$set(t.user.social,"relation",e)},expression:"user.social.relation"}}),t._v(" "),n("send-mail-btn",{attrs:{slug:t.slug}})],1):t._e()]),t._v(" "),n("v-switcher",{attrs:{headers:t.headers,routable:!0,"item-height":66,"anchor-trigger":"hover",align:"start"}},[t._l(t.headers,function(e,r){return n("nuxt-link",{key:r,attrs:{slot:"tab-"+r,to:e.route},slot:"tab-"+r},[n("i",{staticClass:"iconfont",class:"ic-"+e.icon,style:{color:e.color}}),t._v(" "),n("span",{domProps:{textContent:t._s(e.name)}})])}),t._v(" "),n("ul",{staticClass:"user-meta",attrs:{slot:"header-after"},slot:"header-after"},[n("li",[n("div",{staticClass:"label"},[t._v("\n            关注数\n          ")]),t._v(" "),n("span",{staticClass:"value",domProps:{textContent:t._s(t.user.social.following_count)}})]),t._v(" "),n("li",[n("div",{staticClass:"label"},[t._v("\n            粉丝数\n          ")]),t._v(" "),n("span",{staticClass:"value",domProps:{textContent:t._s(t.user.social.followers_count)}})])])],2)],1),t._v(" "),n("div",{staticClass:"container"},[n("el-row",{attrs:{gutter:10}},[n("el-col",{attrs:{span:18}},[n("section",{staticClass:"user-section"},[n("nuxt-child",{attrs:{user:t.user}})],1)]),t._v(" "),n("el-col",{attrs:{span:6}},[n("aside",{staticClass:"user-section"},[t._v("\n          6\n        ")])])],1)],1)])},[],!1,null,null,null));e.default=x.exports}}]);