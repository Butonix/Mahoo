(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{278:function(t,e,n){},283:function(t,e,n){},284:function(t,e,n){t.exports=JSON.parse('{"title":"title_1yLHa","ic-sex":"ic-sex_19eCo","icSex":"ic-sex_19eCo","ic-level":"ic-level_3KuJr","icLevel":"ic-level_3KuJr","ic-title":"ic-title_Uq8in","icTitle":"ic-title_Uq8in","skeleton-loading":"skeleton-loading_12Xrd","skeletonLoading":"skeleton-loading_12Xrd","skeleton":"skeleton_2qRlz"}')},285:function(t,e,n){t.exports=function(t){var e={};function n(l){if(e[l])return e[l].exports;var r=e[l]={i:l,l:!1,exports:{}};return t[l].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,l){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:l})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(l,r,function(e){return t[e]}.bind(null,r));return l},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},n.p="/dist/",n(n.s=100)}({0:function(t,e,n){"use strict";function l(t,e,n,l,r,o,c,d){var h,_="function"==typeof t?t.options:t;if(e&&(_.render=e,_.staticRenderFns=n,_._compiled=!0),l&&(_.functional=!0),o&&(_._scopeId="data-v-"+o),c?(h=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c)},_._ssrRegister=h):r&&(h=d?function(){r.call(this,this.$root.$options.shadowRoot)}:r),h)if(_.functional){_._injectStyles=h;var v=_.render;_.render=function(t,e){return h.call(e),v(t,e)}}else{var f=_.beforeCreate;_.beforeCreate=f?[].concat(f,h):[h]}return{exports:t,options:_}}n.d(e,"a",(function(){return l}))},100:function(t,e,n){"use strict";n.r(e);var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"el-alert-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"el-alert",class:[t.typeClass,t.center?"is-center":"","is-"+t.effect],attrs:{role:"alert"}},[t.showIcon?n("i",{staticClass:"el-alert__icon",class:[t.iconClass,t.isBigIcon]}):t._e(),n("div",{staticClass:"el-alert__content"},[t.title||t.$slots.title?n("span",{staticClass:"el-alert__title",class:[t.isBoldTitle]},[t._t("title",[t._v(t._s(t.title))])],2):t._e(),t.$slots.default&&!t.description?n("p",{staticClass:"el-alert__description"},[t._t("default")],2):t._e(),t.description&&!t.$slots.default?n("p",{staticClass:"el-alert__description"},[t._v(t._s(t.description))]):t._e(),n("i",{directives:[{name:"show",rawName:"v-show",value:t.closable,expression:"closable"}],staticClass:"el-alert__closebtn",class:{"is-customed":""!==t.closeText,"el-icon-close":""===t.closeText},on:{click:function(e){t.close()}}},[t._v(t._s(t.closeText))])])])])};l._withStripped=!0;var r={success:"el-icon-success",warning:"el-icon-warning",error:"el-icon-error"},o={name:"ElAlert",props:{title:{type:String,default:""},description:{type:String,default:""},type:{type:String,default:"info"},closable:{type:Boolean,default:!0},closeText:{type:String,default:""},showIcon:Boolean,center:Boolean,effect:{type:String,default:"light",validator:function(t){return-1!==["light","dark"].indexOf(t)}}},data:function(){return{visible:!0}},methods:{close:function(){this.visible=!1,this.$emit("close")}},computed:{typeClass:function(){return"el-alert--"+this.type},iconClass:function(){return r[this.type]||"el-icon-info"},isBigIcon:function(){return this.description||this.$slots.default?"is-big":""},isBoldTitle:function(){return this.description||this.$slots.default?"is-bold":""}}},c=n(0),component=Object(c.a)(o,l,[],!1,null,null,null);component.options.__file="packages/alert/src/main.vue";var main=component.exports;main.install=function(t){t.component(main.name,main)};e.default=main}})},290:function(t,e,n){"use strict";var l={name:"UserAvatar",props:{user:{type:Object,required:!0},avatar:{type:String,default:""},size:{type:Number,default:40},disabled:{type:Boolean,default:!1}}},r=(n(291),n(9)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.disabled?n("div",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"}},[n("VImg",{attrs:{radius:"50%",src:t.avatar||t.user.avatar,width:t.size,height:t.size,alt:t.user.nickname}})],1):n("NLink",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"},attrs:{to:t.$alias.user(t.user.slug),target:"_blank"}},[n("VImg",{attrs:{radius:"50%",src:t.avatar||t.user.avatar,width:t.size,height:t.size,alt:t.user.nickname}})],1)}),[],!1,null,null,null);e.a=component.exports},291:function(t,e,n){"use strict";var l=n(278);n.n(l).a},300:function(t,e,n){"use strict";var l={name:"UserNickname",props:{user:{type:Object,required:!0},sex:{type:Number,default:0},level:{type:Boolean,default:!0},nickname:{type:String,default:""},disabled:{type:Boolean,default:!1}},computed:{sexClass(){switch(this.sex){case-1:return{name:"simi",color:"limegreen"};case 0:return{name:"unknown",color:"gold"};case 1:return{name:"nan",color:"deepskyblue"};case 2:return{name:"nv",color:"hotpink"};default:return{name:"weizhi",color:"gold"}}}}},r=(n(302),n(303)),o=n(9);var component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clearfix oneline"},[t.disabled?n("div",{staticClass:"user-nickname"},[n("div",{staticClass:"nickname"},[n("p",{staticClass:"oneline",domProps:{innerHTML:t._s(t.nickname||t.user.nickname)}})]),t._v(" "),t.sex?n("span",{class:t.$style.title},[n("i",{staticClass:"iconfont",class:[t.$style["ic-sex"],"ic-"+t.sexClass.name],style:{backgroundColor:t.sexClass.color}})]):t._e(),t._v(" "),t.level?n("span",{class:[t.$style.title,t.$style["ic-level"]],domProps:{textContent:t._s("Lv"+t.user.level)}}):t._e(),t._v(" "),t._l(t.user.title,(function(e,l){return n("span",{key:l,class:[t.$style.title,t.$style["ic-title"]],domProps:{textContent:t._s(e)}})}))],2):n("NLink",{staticClass:"user-nickname active",attrs:{to:t.$alias.user(t.user.slug),target:"_blank"}},[n("div",{staticClass:"nickname"},[n("p",{staticClass:"oneline",domProps:{innerHTML:t._s(t.nickname||t.user.nickname)}})]),t._v(" "),t.sex?n("span",{class:t.$style.title},[n("i",{staticClass:"iconfont",class:[t.$style["ic-sex"],"ic-"+t.sexClass.name],style:{backgroundColor:t.sexClass.color}})]):t._e(),t._v(" "),t.level?n("span",{class:[t.$style.title,t.$style["ic-level"]],domProps:{textContent:t._s("Lv"+t.user.level)}}):t._e(),t._v(" "),t._l(t.user.title,(function(e,l){return n("span",{key:l,class:[t.$style.title,t.$style["ic-title"]],domProps:{textContent:t._s(e)}})}))],2)],1)}),[],!1,(function(t){this.$style=r.default.locals||r.default}),null,null);e.a=component.exports},302:function(t,e,n){"use strict";var l=n(283);n.n(l).a},303:function(t,e,n){"use strict";var l=n(284),r=n.n(l);e.default=r.a},333:function(t,e,n){"use strict";var l=n(2),r={name:"UserFollowBtn",props:{slug:{type:String,required:!0}},computed:{state(){return this.$store.getters["social/get"]("user-follow",this.slug)},isAuth(){return this.$store.state.isAuth},isMine(){return this.$store.getters.isMine(this.slug)},btnText(){return this.isAuth&&this.state?this.isMine?"自己":this.state.is_following&&this.state.is_followed_by?"互相关注":this.state.is_following?"已关注":this.state.is_followed_by?"关注了我":"关注":"关注"}},methods:{handleFollowClick(){this.isAuth?this.isMine?this.$toast.info("不能关注自己"):this.state&&!this.state.is_following_loading&&("关注了我"!==this.btnText&&"关注"!==this.btnText?this.$confirm("确定要取消关注吗？","提示").then(()=>this.submit()).catch(()=>{}):this.submit()):this.$channel.$emit("sign-in")},submit(){var t=this;return Object(l.a)((function*(){var data=yield t.$store.dispatch("social/toggle",{type:"user-follow",slug:t.slug,action:"is_following",params:{target_slug:t.slug,target_type:"user",method_type:"follow"}});data.success&&t.$emit("change",data.result)}))()}}},o=n(9),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return this.state?e("el-button",{staticClass:"user-fff-btn",attrs:{loading:this.state.is_following_loading,round:"",type:"primary",plain:"关注"!==this.btnText},on:{click:this.handleFollowClick}},[e("span",{domProps:{textContent:this._s(this.btnText)}})]):this._e()}),[],!1,null,null,null);e.a=component.exports},416:function(t,e,n){},461:function(t,e,n){"use strict";var l={name:"SendMailBtn",props:{slug:{type:String,required:!0},nickname:{type:String,required:!0}},computed:{isAuth(){return this.$store.state.isAuth},isMine(){return this.$store.getters.isMine(this.slug)}},methods:{toMessage(){if(this.isAuth)if(this.isMine)this.$toast.info("不能给自己发消息");else{var t=window.open();this.$axios.$get("v1/message/get_channel",{params:{type:1,slug:this.slug}}).then(e=>{t.location=this.$alias.user(this.$store.state.user.slug,"message?mailto=".concat(e,"&name=").concat(this.nickname))}).catch(e=>{this.$toast.error(e.message),t.close()})}else this.$channel.$emit("sign-in")}}},r=n(9),component=Object(r.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("el-button",{staticClass:"send-mail-btn",attrs:{type:"info",round:"",plain:""},on:{click:this.toMessage}},[this._v("\n  发消息\n")])}),[],!1,null,null,null);e.a=component.exports},547:function(t,e,n){"use strict";var l=n(416);n.n(l).a},606:function(t,e,n){"use strict";n.r(e);var l=n(285),r=n.n(l),o=n(18),c=n(290),d=n(300),h={name:"DailySignBtn",props:{value:{type:Object,required:!0}},data:()=>({loading:!1}),computed:{isMine(){return this.$store.getters.isMine(this.value.slug)}},methods:{handleSign(){this.$store.state.isAuth?this.isMine?this.loading||(this.value.daily_signed?this.$toast.info("今天已签过到"):(this.loading=!0,this.$axios.$post("v1/user/daily_sign").then(data=>{this.value.daily_signed=!0,this.$toast.success(data.message),this.loading=!1;try{this.value.sign.continuous_sign_count=data.continuous_sign_count,this.value.sign.latest_signed_at=data.sign_at,this.value.sign.total_sign_count++,this.$store.commit("UPDATE_USER_INFO",{key:"wallet_coin",value:this.$store.state.user.wallet_coin+1})}catch(t){}}).catch(t=>{this.$toast.error(t.message),this.loading=!1}))):this.$toast.info("不能替别人签到"):this.$channel.$emit("sign-in")}}},_=n(9),v=Object(_.a)(h,(function(){var t=this.$createElement;return(this._self._c||t)("ElButton",{staticClass:"daily-sign-btn",attrs:{loading:this.loading},on:{click:this.handleSign}},[this._v("\n  "+this._s(this.value.daily_signed?"已签到":"未签到")+"\n")])}),[],!1,null,null,null).exports,f=n(333),m=n(461),y={name:"UserLayout",layout:"web",components:{ElAlert:r.a,UserAvatar:c.a,UserNickname:d.a,DailySignBtn:v,UserFollowBtn:f.a,SendMailBtn:m.a},props:{slug:{type:String,required:!0}},asyncData(t){var{app:e,error:n,params:l}=t;return Object(o.d)(e,l).then(t=>({user:t})).catch(n)},data:()=>({user:null}),computed:{showBirthday(){var t=Date.now();return t>=15711552e5&&t<=1571241599e3&&"cc-a18jd"===this.slug},isMine(){return this.$store.getters.isMine(this.slug)},self(){return this.$store.state.user},avatar(){return this.isMine?this.self.avatar:this.user.avatar},banner(){return this.isMine?this.self.banner:this.user.banner},nickname(){return this.isMine?this.self.nickname:this.user.nickname},signature(){return this.isMine?this.self.signature:this.user.signature},sex(){return this.isMine?this.self.sex_secret?-1:this.self.sex:this.user.sex},headers(){var t=[{name:"动态",icon:"homepage_fill",color:"#00c091",route:"/user/".concat(this.slug,"/timeline")},{name:"爱好",icon:"like_fill",color:"#fb7299",route:"/user/".concat(this.slug,"/emotion")},{name:"圈子",icon:"group_fill",color:"#02b5da",route:"/user/".concat(this.slug,"/social")}];return this.isMine&&(t=t.concat([{name:"草稿",icon:"document_fill",color:"#f3a034",route:"/user/".concat(this.slug,"/draft")},{name:"消息",icon:"remind_fill",color:"#ff5d47",route:"/user/".concat(this.slug,"/message")},{name:"设置",icon:"setup_fill",color:"#23c9ed",route:"/user/".concat(this.slug,"/setting")}])),t}},beforeMount(){this.patchUser()},methods:{patchUser(){this.$axios.$get("v1/user/patch",{params:{slug:this.slug}}).then(data=>{this.user=this.$set(this,"user",Object.assign(this.user,data)),this.$store.commit("social/set",{type:"user-follow",slug:this.slug,data:{is_following:data.is_following,is_followed_by:data.is_followed_by}})}).catch(()=>{})},handleFollowAction(t){this.user.followers_count-=-t}},head(){var{user:t}=this;return{title:"".concat(t.nickname,"的个人空间"),meta:[{hid:"keywords",name:"keywords",content:t.nickname},{hid:"description",name:"description",content:"".concat(t.nickname,",").concat(t.signature)},{hid:"share-image",name:"share-image",content:t.avatar}]}}},C=(n(547),Object(_.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"user-layout"}},[n("div",{staticClass:"container",attrs:{id:"user-panel"}},[n("div",{staticClass:"banner",style:{backgroundImage:"url("+t.$resize(t.banner,{height:200,mode:2})+")"}},[n("div",{staticClass:"user"},[n("UserAvatar",{attrs:{user:t.user,avatar:t.avatar,size:68}}),t._v(" "),t.user?n("div",{staticClass:"actions only-pc"},[n("UserFollowBtn",{attrs:{slug:t.slug},on:{change:t.handleFollowAction}}),t._v(" "),n("SendMailBtn",{attrs:{slug:t.slug,nickname:t.nickname}})],1):t._e(),t._v(" "),n("div",{staticClass:"content"},[n("UserNickname",{attrs:{user:t.user,nickname:t.nickname,sex:t.sex}}),t._v(" "),n("p",{staticClass:"signature oneline",domProps:{textContent:t._s(t.signature)}})],1)],1)]),t._v(" "),n("VSwitcher",{attrs:{headers:t.headers,routable:!0,"header-height":66,"anchor-trigger":"hover",align:"start"}},[t._l(t.headers,(function(e,l){return n("NLink",{key:l,staticClass:"only-pc",attrs:{slot:"tab-"+l,to:e.route},slot:"tab-"+l},[n("i",{staticClass:"iconfont",class:"ic-"+e.icon,style:{color:e.color}}),t._v(" "),n("span",{domProps:{textContent:t._s(e.name)}})])})),t._v(" "),n("ul",{staticClass:"user-meta",attrs:{slot:"header-after"},slot:"header-after"},[n("li",[n("div",{staticClass:"label"},[t._v("\n            访问数\n          ")]),t._v(" "),n("span",{staticClass:"value",domProps:{textContent:t._s(t.user.visit_count)}})]),t._v(" "),n("li",[n("div",{staticClass:"label"},[t._v("\n            关注数\n          ")]),t._v(" "),n("span",{staticClass:"value",domProps:{textContent:t._s(t.user.following_count)}})]),t._v(" "),n("li",[n("div",{staticClass:"label"},[t._v("\n            粉丝数\n          ")]),t._v(" "),n("span",{staticClass:"value",domProps:{textContent:t._s(t.user.followers_count)}})]),t._v(" "),n("li",[n("div",{staticClass:"label"},[t._v("\n            活跃度\n          ")]),t._v(" "),n("span",{staticClass:"value",domProps:{textContent:t._s(t.user.stat.activity)}})]),t._v(" "),n("li",[n("div",{staticClass:"label"},[t._v("\n            曝光度\n          ")]),t._v(" "),n("span",{staticClass:"value",domProps:{textContent:t._s(t.user.stat.exposure)}})])])],2)],1),t._v(" "),n("div",{staticClass:"container"},[t.showBirthday?[n("br"),t._v(" "),n("ElAlert",{attrs:{title:"祝这位不愿透露姓名的御坂妹妹生日快乐~！",type:"success"}}),t._v(" "),n("br")]:t._e(),t._v(" "),n("ElRow",{staticClass:"h5-no-margin",attrs:{gutter:10}},[n("ElCol",{staticClass:"h5-no-margin",attrs:{span:17,xs:24}},[n("section",{staticClass:"user-section"},[n("NuxtChild",{attrs:{user:t.user}})],1)]),t._v(" "),t.user?n("ElCol",{attrs:{xs:0,span:7}},[n("aside",{staticClass:"user-section"},[n("h3",{staticClass:"title"},[t._v("\n            签到\n          ")]),t._v(" "),n("DailySignBtn",{model:{value:t.user,callback:function(e){t.user=e},expression:"user"}}),t._v(" "),[n("p",[t._v("总签到次数："+t._s(t.user.sign.total_sign_count)+"次")]),t._v(" "),n("p",[t._v("连续签到数："+t._s(t.user.sign.continuous_sign_count)+"次")]),t._v(" "),n("p",[t._v("最后签到于："+t._s(t.user.sign.latest_signed_at?t.$utils.timeAgo(t.user.sign.latest_signed_at):"未签到"))])]],2),t._v(" "),t.isMine?n("aside",{staticClass:"user-section"},[n("h3",{staticClass:"title"},[t._v("\n            钱包\n          ")]),t._v(" "),[n("p",[t._v("团子："+t._s(parseFloat(t.self.wallet_coin).toFixed(2)))]),t._v(" "),n("p",[t._v("光玉："+t._s(parseFloat(t.self.wallet_money).toFixed(2)))])]],2):t._e()]):t._e()],1)],2)])}),[],!1,null,null,null));e.default=C.exports}}]);