(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{257:function(t,e,n){},258:function(t,e,n){},259:function(t,e,n){t.exports={title:"title_1yLHa","ic-sex":"ic-sex_19eCo",icSex:"ic-sex_19eCo","ic-level":"ic-level_3KuJr",icLevel:"ic-level_3KuJr","ic-title":"ic-title_Uq8in",icTitle:"ic-title_Uq8in"}},260:function(t,e,n){},261:function(t,e,n){"use strict";var l={name:"UserAvatar",props:{user:{type:Object,required:!0},avatar:{type:String,default:""},size:{type:Number,default:40},disabled:{type:Boolean,default:!1}}},r=(n(262),n(18)),component=Object(r.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.disabled?n("div",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"}},[n("img",{staticClass:"avatar",attrs:{src:t.$resize(t.avatar||t.user.avatar,{width:t.size}),alt:t.user.nickname}})]):n("nuxt-link",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"},attrs:{to:t.$alias.user(t.user.slug)}},[n("img",{staticClass:"avatar",attrs:{src:t.$resize(t.avatar||t.user.avatar,{width:t.size}),alt:t.user.nickname}})])},[],!1,null,null,null);e.a=component.exports},262:function(t,e,n){"use strict";var l=n(257);n.n(l).a},263:function(t,e,n){"use strict";var l=n(258);n.n(l).a},264:function(t,e,n){"use strict";var l=n(259),r=n.n(l);e.default=r.a},265:function(t,e,n){"use strict";var l={name:"UserNickname",props:{user:{type:Object,required:!0},sex:{type:Number,default:0},level:{type:Boolean,default:!0},nickname:{type:String,default:""},disabled:{type:Boolean,default:!1}},computed:{sexClass(){switch(this.sex){case-1:return{name:"simi",color:"limegreen"};case 0:return{name:"unknown",color:"gold"};case 1:return{name:"nan",color:"deepskyblue"};case 2:return{name:"nv",color:"hotpink"};default:return{name:"weizhi",color:"gold"}}}}},r=(n(263),n(264)),o=n(18);var component=Object(o.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clearfix"},[t.disabled?n("div",{staticClass:"user-nickname"},[n("div",{staticClass:"nickname"},[n("p",{staticClass:"oneline",domProps:{textContent:t._s(t.nickname||t.user.nickname)}})]),t._v(" "),t.sex?n("span",{class:t.$style.title},[n("i",{staticClass:"iconfont",class:[t.$style["ic-sex"],"ic-"+t.sexClass.name],style:{backgroundColor:t.sexClass.color}})]):t._e(),t._v(" "),t.level?n("span",{class:[t.$style.title,t.$style["ic-level"]],domProps:{textContent:t._s("Lv"+t.user.level)}}):t._e(),t._v(" "),t._l(t.user.roles,function(e,l){return n("span",{key:l,class:[t.$style.title,t.$style["ic-title"]],domProps:{textContent:t._s(e)}})})],2):n("nuxt-link",{staticClass:"user-nickname",attrs:{to:t.$alias.user(t.user.slug)}},[n("div",{staticClass:"nickname"},[n("p",{staticClass:"oneline",domProps:{textContent:t._s(t.nickname||t.user.nickname)}})]),t._v(" "),t.sex?n("span",{class:t.$style.title},[n("i",{staticClass:"iconfont",class:[t.$style["ic-sex"],"ic-"+t.sexClass.name],style:{backgroundColor:t.sexClass.color}})]):t._e(),t._v(" "),t.level?n("span",{class:[t.$style.title,t.$style["ic-level"]],domProps:{textContent:t._s("Lv"+t.user.level)}}):t._e(),t._v(" "),t._l(t.user.title,function(e,l){return n("span",{key:l,class:[t.$style.title,t.$style["ic-title"]],domProps:{textContent:t._s(e)}})})],2)],1)},[],!1,function(t){this.$style=r.default.locals||r.default},null,null);e.a=component.exports},266:function(t,e,n){"use strict";var l={name:"SendMailBtn",props:{slug:{type:String,required:!0}},computed:{isAuth(){return this.$store.state.isAuth},isMine(){return this.$store.getters.isMine(this.slug)}},methods:{toMessage(){if(!this.isAuth)return void this.$channel.$emit("sign-in");if(this.isMine)return void this.$toast.info("不能给自己发消息");const t=window.open();this.$axios.$get("v1/message/get_channel",{params:{type:1,slug:this.slug}}).then(e=>{t.location=this.$alias.user(this.$store.state.user.slug,"message?mailto=".concat(e))}).catch(e=>{this.$toast.error(e.message),t.close()})}}},r=n(18),component=Object(r.a)(l,function(){var t=this.$createElement;return(this._self._c||t)("el-button",{staticClass:"send-mail-btn",on:{click:this.toMessage}},[this._v("\n  发消息\n")])},[],!1,null,null,null);e.a=component.exports},267:function(t,e,n){"use strict";var l={name:"UserFollowBtn",props:{slug:{type:String,required:!0},value:{type:String,default:"unknown",validator:t=>~["unknown","self","friend","follower","following","stranger"].indexOf(t)}},data(){return{loading:!1,action:this.value}},computed:{btnText(){switch(this.action){case"unknown":case"self":return"关注";case"friend":return"互相关注";case"follower":return"关注了我";case"following":return"已关注";case"stranger":default:return"关注"}}},watch:{value(t){this.action=t}},mounted(){this.$channel.$on("user-follow-".concat(this.slug),t=>{this.action=t})},methods:{handleFollowClick(){this.$store.state.isAuth?"unknown"===this.action||this.loading||("self"!==this.action?"follower"!==this.action&&"stranger"!==this.action?this.$confirm("确定要取消关注吗？","提示").then(()=>this.submit()).catch(()=>{}):this.submit():this.$toast.info("不能关注自己")):this.$channel.$emit("sign-in")},submit(){this.loading=!0,this.$axios.$post("v1/user/toggle_follow",{slug:this.slug}).then(t=>{this.$channel.$emit("user-follow-".concat(this.slug),t),this.$emit("change",{relation:t,change:"friend"===t||"following"===t?1:-1}),this.loading=!1}).catch(t=>{this.$toast.error(t.message),this.loading=!1})}}},r=n(18),component=Object(r.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("el-button",{staticClass:"user-fff-btn",attrs:{loading:this.loading},on:{click:this.handleFollowClick}},[e("span",{domProps:{textContent:this._s(this.btnText)}})])},[],!1,null,null,null);e.a=component.exports},271:function(t,e,n){"use strict";var l=n(260);n.n(l).a},272:function(t,e,n){"use strict";var l=n(261),r=n(265),o=n(267),c=n(266),h={name:"UserRelationItem",components:{UserAvatar:l.a,UserNickname:r.a,UserFollowBtn:o.a,SendMailBtn:c.a},props:{user:{type:Object,required:!0},relation:{type:String,required:!0}},data(){return{action:this.relation}},methods:{handleFollowAction(t){let{relation:e}=t;this.action=e}}},d=(n(271),n(18)),component=Object(d.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"user-rel-item clearfix"},[n("div",{staticClass:"avatar"},[n("user-avatar",{attrs:{user:t.user}})],1),t._v(" "),n("div",{staticClass:"control"},["follower"!==t.relation?n("user-follow-btn",{attrs:{slug:t.user.slug},on:{change:t.handleFollowAction},model:{value:t.action,callback:function(e){t.action=e},expression:"action"}}):t._e(),t._v(" "),n("send-mail-btn",{attrs:{slug:t.user.slug}})],1),t._v(" "),n("div",{staticClass:"intro"},[n("user-nickname",{attrs:{user:t.user}})],1)])},[],!1,null,null,null);e.a=component.exports},379:function(t,e,n){"use strict";n.r(e);var l={name:"UserSocialFollowing",components:{UserRelationItem:n(272).a},props:{slug:{type:String,required:!0}},computed:{query(){return{$axios:this.$axios,slug:this.slug,relation:"following"}}}},r=n(18),component=Object(r.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"user-social-following"}},[n("flow-loader",{attrs:{func:"getUserRelation",type:"seenIds",query:t.query},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.flow;return n("ul",{},t._l(l,function(t){return n("user-relation-item",{key:t.slug,attrs:{user:t,relation:"following"}})}),1)}}])})],1)},[],!1,null,null,null);e.default=component.exports}}]);