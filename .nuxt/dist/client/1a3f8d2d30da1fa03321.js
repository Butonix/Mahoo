(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{293:function(t,e,n){"use strict";n.d(e,"h",function(){return r}),n.d(e,"b",function(){return o}),n.d(e,"a",function(){return c}),n.d(e,"g",function(){return l}),n.d(e,"e",function(){return d}),n.d(e,"c",function(){return v}),n.d(e,"d",function(){return f}),n.d(e,"f",function(){return h});var r=function(t,e){return t.$axios.$post("v1/user/update_info",e)},o=function(t,e){var n=e.slug;return t.$axios.$get("v1/user/show",{params:{slug:n}})},c=function(t,e){var n=e.id,r=e.phone,o=e.password,c=e.authCode;return t.$axios.$post("v1/door/bind_phone",{id:n,phone:r,password:o,authCode:c})},l=function(t,e){var n=e.phone_number,r=e.type,o=e.geetest;return t.$axios.$post("v1/door/message",{phone_number:n,type:r,geetest:o})},d=function(t,e){var n=e.access,r=e.secret,o=e.nickname,c=e.authCode,l=e.inviteCode;return t.$axios.$post("v1/door/register",{access:n,secret:r,nickname:o,authCode:c,inviteCode:l})},v=function(t,e){var n=e.access,r=e.secret,o=e.remember,c=e.geetest;return t.$axios.$post("v1/door/login",{access:n,secret:r,remember:o,geetest:c})},f=function(t){return t.$axios.$post("v1/door/logout")},h=function(t,e){var n=e.method,r=e.access,o=e.authCode,c=e.secret;return t.$axios.$post("v1/door/reset_password",{method:n,access:r,authCode:o,secret:c})}},294:function(t,e,n){"use strict";var r=n(3),o=n(20),c=n(27),l=n(180),d=n(84),v=n(11),f=n(85).f,h=n(126).f,m=n(13).f,_=n(299).trim,C=r.Number,x=C,k=C.prototype,y="Number"==c(n(125)(k)),$="trim"in String.prototype,N=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,c=(e=$?e.trim():_(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,v=l.length;i<v;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,r)}}return+e};if(!C(" 0o1")||!C("0b1")||C("+0x1")){C=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof C&&(y?v(function(){k.valueOf.call(n)}):"Number"!=c(n))?l(new x(N(e)),n,C):N(e)};for(var w,I=n(7)?f(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;I.length>E;E++)o(x,w=I[E])&&!o(C,w)&&m(C,w,h(x,w));C.prototype=k,k.constructor=C,n(14)(r,"Number",C)}},295:function(t,e,n){},296:function(t,e,n){},299:function(t,e,n){var r=n(9),o=n(26),c=n(11),l=n(300),d="["+l+"]",v=RegExp("^"+d+d+"*"),f=RegExp(d+d+"*$"),h=function(t,e,n){var o={},d=c(function(){return!!l[t]()||"​"!="​"[t]()}),v=o[t]=d?e(m):l[t];n&&(o[n]=v),r(r.P+r.F*d,"String",o)},m=h.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(v,"")),2&e&&(t=t.replace(f,"")),t};t.exports=h},300:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},303:function(t,e,n){"use strict";n(294);var r={name:"UserAvatar",props:{user:{type:Object,required:!0},avatar:{type:String,default:""},size:{type:Number,default:40},disabled:{type:Boolean,default:!1}}},o=(n(316),n(25)),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.disabled?n("div",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"}},[n("img",{staticClass:"avatar",attrs:{src:t.$resize(t.avatar||t.user.avatar,{width:t.size}),alt:t.user.nickname}})]):n("nuxt-link",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"},attrs:{to:t.$alias.user(t.user.slug)}},[n("img",{staticClass:"avatar",attrs:{src:t.$resize(t.avatar||t.user.avatar,{width:t.size}),alt:t.user.nickname}})])},[],!1,null,null,null);e.a=component.exports},316:function(t,e,n){"use strict";var r=n(295);n.n(r).a},317:function(t,e,n){"use strict";var r=n(296);n.n(r).a},318:function(t,e,n){},341:function(t,e,n){"use strict";n(294);var r={name:"UserNickname",props:{user:{type:Object,required:!0},sex:{type:Number,default:0},level:{type:Boolean,default:!0},nickname:{type:String,default:""},disabled:{type:Boolean,default:!1}},computed:{sexClass:function(){switch(this.sex){case-1:return{name:"simi",color:"limegreen"};case 0:return{name:"unknown",color:"gold"};case 1:return{name:"nan",color:"deepskyblue"};case 2:return{name:"nv",color:"hotpink"};default:return{name:"weizhi",color:"gold"}}}}},o=(n(317),n(25)),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clearfix"},[t.disabled?n("div",{staticClass:"user-nickname"},[n("div",{staticClass:"nickname"},[n("p",{staticClass:"oneline",domProps:{textContent:t._s(t.nickname||t.user.nickname)}})]),t._v(" "),t.sex?n("span",{staticClass:"title"},[n("i",{staticClass:"iconfont ic-sex",class:"ic-"+t.sexClass.name,style:{backgroundColor:t.sexClass.color}})]):t._e(),t._v(" "),t.level?n("span",{staticClass:"title ic-level",domProps:{textContent:t._s("Lv"+t.user.level)}}):t._e(),t._v(" "),t._l(t.user.roles,function(e,r){return n("span",{key:r,staticClass:"title ic-title",domProps:{textContent:t._s(e)}})})],2):n("nuxt-link",{staticClass:"user-nickname",attrs:{to:t.$alias.user(t.user.slug)}},[n("div",{staticClass:"nickname"},[n("p",{staticClass:"oneline",domProps:{textContent:t._s(t.nickname||t.user.nickname)}})]),t._v(" "),t.sex?n("span",{staticClass:"title"},[n("i",{staticClass:"iconfont ic-sex",class:"ic-"+t.sexClass.name,style:{backgroundColor:t.sexClass.color}})]):t._e(),t._v(" "),t.level?n("span",{staticClass:"title ic-level",domProps:{textContent:t._s("Lv"+t.user.level)}}):t._e(),t._v(" "),t._l(t.user.title,function(e,r){return n("span",{key:r,staticClass:"title ic-title",domProps:{textContent:t._s(e)}})})],2)],1)},[],!1,null,null,null);e.a=component.exports},363:function(t,e,n){"use strict";var r=n(318);n.n(r).a},394:function(t,e,n){"use strict";n.r(e);var r=n(293),o=n(303),c=n(341),l={name:"DailySignBtn",props:{value:{type:Object,required:!0}},data:function(){return{signing:!1}},computed:{isMine:function(){return this.$store.getters.isMine(this.value.slug)}},methods:{handleSign:function(){var t=this;this.isMine&&!this.signing&&(this.value.sign.daily_signed||(this.signing=!0,this.$axios.$post("v1/user/daily_sign").then(function(data){t.value.sign.daily_signed=!0,t.value.sign.continuous_sign_count=data.continuous_sign_count,t.value.sign.latest_signed_at=data.sign_at,t.value.sign.total_sign_count++,t.value.balance.coin+=data.add_coin_count,t.$toast.success(data.message),t.signing=!1}).catch(function(e){t.$toast.error(e.message),t.signing=!1})))}}},d=n(25),v=Object(d.a)(l,function(){var t=this.$createElement;return(this._self._c||t)("el-button",{attrs:{loading:this.signing},on:{click:this.handleSign}},[this._v("\n  "+this._s(this.value.sign.daily_signed?"已签到":"签到")+"\n")])},[],!1,null,null,null).exports,f={name:"UserLayout",layout:"web",components:{UserAvatar:o.a,UserNickname:c.a,DailySignBtn:v},props:{slug:{type:String,required:!0}},head:function(){var t=this.user;return{title:t.nickname,meta:[{hid:"description",name:"description",content:"".concat(t.nickname,",").concat(t.signature,",").concat("咔哩吧是一个二次元社区")}]}},data:function(){return{user:null}},computed:{isAuth:function(){return this.$store.state.isAuth},isMine:function(){return!!this.isAuth&&this.self.slug===this.slug},self:function(){return this.$store.state.user},avatar:function(){return this.isMine?this.self.avatar:this.user.avatar},banner:function(){return this.isMine?this.self.banner:this.user.banner},nickname:function(){return this.isMine?this.self.nickname:this.user.nickname},signature:function(){return this.isMine?this.self.signature:this.user.signature},sex:function(){return this.isMine?this.self.sex_secret?-1:this.self.sex:this.user.sex},headers:function(){var t=[{name:"动态",icon:"homepage_fill",color:"#00c091",route:"/user/".concat(this.slug,"/")},{name:"喜好",icon:"like_fill",color:"#fb7299",route:"/user/".concat(this.slug,"/emotion/")}];return this.isMine&&(t=t.concat([{name:"消息",icon:"message_fill",color:"#02b5da",route:"/user/".concat(this.slug,"/message/")},{name:"通知",icon:"remind_fill",color:"#ff5d47",route:"/user/".concat(this.slug,"/notice/")},{name:"设置",icon:"setup_fill",color:"#23c9ed",route:"/user/".concat(this.slug,"/setting/")}])),t}},asyncData:function(t){var e=t.app,n=t.error,o=t.params;return Object(r.b)(e,{slug:o.slug}).then(function(t){return{user:t}}).catch(n)},methods:{toMessage:function(){this.isAuth?this.isMine||window.open(this.$alias.user(this.self.slug,"message/?mailto=".concat(this.slug))):this.$channel.$emit("sign-in")}}},h=(n(363),Object(d.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"user-layout"}},[n("div",{staticClass:"container",attrs:{id:"user-panel"}},[n("div",{staticClass:"banner",style:{backgroundImage:"url("+t.$resize(t.banner,{height:200,mode:2})+")"}},[n("div",{staticClass:"user"},[n("user-avatar",{attrs:{user:t.user,avatar:t.avatar,size:68}}),t._v(" "),n("div",{staticClass:"content"},[n("user-nickname",{attrs:{user:t.user,nickname:t.nickname,sex:t.sex}}),t._v(" "),n("p",{staticClass:"signature oneline",domProps:{textContent:t._s(t.signature)}})],1)],1),t._v(" "),n("div",{staticClass:"actions"},[n("daily-sign-btn",{model:{value:t.user,callback:function(e){t.user=e},expression:"user"}}),t._v(" "),n("el-button",{attrs:{type:"primary",size:"small"}},[t._v("\n          关注\n        ")]),t._v(" "),n("el-button",{attrs:{type:"info",size:"small"},on:{click:t.toMessage}},[t._v("\n          发消息\n        ")])],1)]),t._v(" "),n("v-switcher",{attrs:{headers:t.headers,routable:!0,"item-height":66,"anchor-trigger":"hover",align:"start"}},[t._l(t.headers,function(e,r){return n("nuxt-link",{key:r,attrs:{slot:"tab-"+r,to:e.route},slot:"tab-"+r},[n("i",{staticClass:"iconfont",class:"ic-"+e.icon,style:{color:e.color}}),t._v(" "),n("span",{domProps:{textContent:t._s(e.name)}})])}),t._v(" "),n("ul",{staticClass:"user-meta",attrs:{slot:"header-after"},slot:"header-after"},[n("li",[n("div",{staticClass:"label"},[t._v("\n            关注数\n          ")]),t._v(" "),n("span",{staticClass:"value"},[t._v("0")])]),t._v(" "),n("li",[n("div",{staticClass:"label"},[t._v("\n            粉丝数\n          ")]),t._v(" "),n("span",{staticClass:"value"},[t._v("0")])]),t._v(" "),n("li",[n("div",{staticClass:"label"},[t._v("\n            曝光度\n          ")]),t._v(" "),n("span",{staticClass:"value"},[t._v("0")])]),t._v(" "),n("li",[n("div",{staticClass:"label"},[t._v("\n            活跃度\n          ")]),t._v(" "),n("span",{staticClass:"value"},[t._v("0")])])])],2)],1),t._v(" "),n("nuxt-child")],1)},[],!1,null,null,null));e.default=h.exports}}]);