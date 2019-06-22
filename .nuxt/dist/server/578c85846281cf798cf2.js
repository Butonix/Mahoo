exports.ids=[29],exports.modules={183:function(e,t,n){"use strict";n.r(t);var r={name:"UserSocialFriends",components:{UserRelationItem:n(96).a},props:{slug:{type:String,required:!0}},computed:{query(){return{$axios:this.$axios,slug:this.slug,relation:"friend",changing:"slug"}}},methods:{detectUserRelation({data:data}){const{result:e}=data;e.length&&this.$axios.$get("v1/user/detect_relation",{params:{type:"user",targets:e.map(e=>e.slug).join(",")}}).then(data=>{const e=[];Object.keys(data).forEach(t=>{e.push({slug:t,relation:data[t]})}),this.$refs.loader.patch(e)}).catch(()=>{})}}},l=n(2),component=Object(l.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"user-social-friends"}},[n("flow-loader",{ref:"loader",attrs:{func:"getUserRelation",type:"seenIds",query:e.query,callback:e.detectUserRelation},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.flow;return n("ul",{},e._l(r,function(e){return n("user-relation-item",{key:e.slug,attrs:{user:e}})}),1)}}])})],1)},[],!1,null,null,"601b9670");t.default=component.exports},71:function(e,t){},72:function(e,t){},73:function(e,t){e.exports={title:"title_1yLHa","ic-sex":"ic-sex_19eCo",icSex:"ic-sex_19eCo","ic-level":"ic-level_3KuJr",icLevel:"ic-level_3KuJr","ic-title":"ic-title_Uq8in",icTitle:"ic-title_Uq8in"}},74:function(e,t){},76:function(e,t,n){"use strict";var r={name:"UserAvatar",props:{user:{type:Object,required:!0},avatar:{type:String,default:""},size:{type:Number,default:40},disabled:{type:Boolean,default:!1}}},l=n(2);var component=Object(l.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.disabled?n("div",{staticClass:"user-avatar",style:{width:e.size+"px",height:e.size+"px"}},[n("v-img",{attrs:{radius:"50%",src:e.avatar||e.user.avatar,width:e.size,height:e.size,alt:e.user.nickname}})],1):n("nuxt-link",{staticClass:"user-avatar",style:{width:e.size+"px",height:e.size+"px"},attrs:{to:e.$alias.user(e.user.slug),target:"_blank"}},[n("v-img",{attrs:{radius:"50%",src:e.avatar||e.user.avatar,width:e.size,height:e.size,alt:e.user.nickname}})],1)},[],!1,function(e){var t=n(79);t.__inject__&&t.__inject__(e)},null,"8c0ebd70");t.a=component.exports},79:function(e,t,n){"use strict";n.r(t);var r=n(71),l=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);t.default=l.a},80:function(e,t,n){"use strict";n.r(t);var r=n(72),l=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);t.default=l.a},81:function(e,t,n){"use strict";n.r(t);var r=n(73),l=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);t.default=l.a},82:function(e,t,n){"use strict";var r={name:"UserNickname",props:{user:{type:Object,required:!0},sex:{type:Number,default:0},level:{type:Boolean,default:!0},nickname:{type:String,default:""},disabled:{type:Boolean,default:!1}},computed:{sexClass(){switch(this.sex){case-1:return{name:"simi",color:"limegreen"};case 0:return{name:"unknown",color:"gold"};case 1:return{name:"nan",color:"deepskyblue"};case 2:return{name:"nv",color:"hotpink"};default:return{name:"weizhi",color:"gold"}}}}},l=n(2);var component=Object(l.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"clearfix"},[e.disabled?e._ssrNode('<div class="user-nickname">',"</div>",[e._ssrNode('<div class="nickname"><p class="oneline">'+e._ssrEscape(e._s(e.nickname||e.user.nickname))+"</p></div> "+(e.sex?"<span"+e._ssrClass(null,e.$style.title)+"><i"+e._ssrClass("iconfont",[e.$style["ic-sex"],"ic-"+e.sexClass.name])+e._ssrStyle(null,{backgroundColor:e.sexClass.color},null)+"></i></span>":"\x3c!----\x3e")+" "+(e.level?"<span"+e._ssrClass(null,[e.$style.title,e.$style["ic-level"]])+">"+e._ssrEscape(e._s("Lv"+e.user.level))+"</span>":"\x3c!----\x3e")+" "+e._ssrList(e.user.roles,function(t,n){return"<span"+e._ssrClass(null,[e.$style.title,e.$style["ic-title"]])+">"+e._ssrEscape(e._s(t))+"</span>"}))],2):n("nuxt-link",{staticClass:"user-nickname",attrs:{to:e.$alias.user(e.user.slug),target:"_blank"}},[n("div",{staticClass:"nickname"},[n("p",{staticClass:"oneline",domProps:{textContent:e._s(e.nickname||e.user.nickname)}})]),e._v(" "),e.sex?n("span",{class:e.$style.title},[n("i",{staticClass:"iconfont",class:[e.$style["ic-sex"],"ic-"+e.sexClass.name],style:{backgroundColor:e.sexClass.color}})]):e._e(),e._v(" "),e.level?n("span",{class:[e.$style.title,e.$style["ic-level"]],domProps:{textContent:e._s("Lv"+e.user.level)}}):e._e(),e._v(" "),e._l(e.user.title,function(t,r){return n("span",{key:r,class:[e.$style.title,e.$style["ic-title"]],domProps:{textContent:e._s(t)}})})],2)],1)},[],!1,function(e){var t=n(80);t.__inject__&&t.__inject__(e);var r=n(81);r.__inject__&&r.__inject__(e),this.$style=r.locals||r},null,"5b0047c6");t.a=component.exports},93:function(e,t,n){"use strict";var r={name:"UserFollowBtn",props:{slug:{type:String,required:!0},value:{type:String,default:"unknown",validator:e=>~["unknown","self","friend","follower","following","stranger"].indexOf(e)}},data(){return{loading:!1,action:this.value}},computed:{btnText(){switch(this.action){case"unknown":return"关注";case"self":return"自己";case"friend":return"互相关注";case"follower":return"关注了我";case"following":return"已关注";case"stranger":default:return"关注"}}},watch:{value(e){this.action=e}},mounted(){this.$channel.$on(`user-follow-${this.slug}`,e=>{this.action=e})},methods:{handleFollowClick(){this.$store.state.isAuth?"unknown"===this.action||this.loading||("self"!==this.action?"follower"!==this.action&&"stranger"!==this.action?this.$confirm("确定要取消关注吗？","提示").then(()=>this.submit()).catch(()=>{}):this.submit():this.$toast.info("不能关注自己")):this.$channel.$emit("sign-in")},submit(){this.loading=!0,this.$axios.$post("v1/user/toggle_follow",{slug:this.slug}).then(e=>{this.$channel.$emit(`user-follow-${this.slug}`,e),this.$emit("change",{relation:e,change:"friend"===e||"following"===e?1:-1}),this.loading=!1}).catch(e=>{this.$toast.error(e.message),this.loading=!1})}}},l=n(2),component=Object(l.a)(r,function(){var e=this.$createElement,t=this._self._c||e;return t("el-button",{staticClass:"user-fff-btn",attrs:{loading:this.loading,round:"",type:"primary",plain:"stranger"!==this.action},on:{click:this.handleFollowClick}},[t("span",{domProps:{textContent:this._s(this.btnText)}})])},[],!1,null,null,"e3dd3b1a");t.a=component.exports},94:function(e,t,n){"use strict";var r={name:"SendMailBtn",props:{slug:{type:String,required:!0}},computed:{isAuth(){return this.$store.state.isAuth},isMine(){return this.$store.getters.isMine(this.slug)}},methods:{toMessage(){if(!this.isAuth)return void this.$channel.$emit("sign-in");if(this.isMine)return void this.$toast.info("不能给自己发消息");const e=window.open();this.$axios.$get("v1/message/get_channel",{params:{type:1,slug:this.slug}}).then(t=>{e.location=this.$alias.user(this.$store.state.user.slug,`message?mailto=${t}`)}).catch(t=>{this.$toast.error(t.message),e.close()})}}},l=n(2);var component=Object(l.a)(r,function(){var e=this.$createElement;return(this._self._c||e)("el-button",{staticClass:"send-mail-btn",attrs:{type:"info",round:"",plain:""},on:{click:this.toMessage}},[this._v("\n  发消息\n")])},[],!1,function(e){},null,"383c15d0");t.a=component.exports},95:function(e,t,n){"use strict";n.r(t);var r=n(74),l=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);t.default=l.a},96:function(e,t,n){"use strict";var r=n(76),l=n(82),o=n(93),c=n(94),d={name:"UserRelationItem",components:{UserAvatar:r.a,UserNickname:l.a,UserFollowBtn:o.a,SendMailBtn:c.a},props:{user:{type:Object,required:!0}}},f=n(2);var component=Object(f.a)(d,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"user-rel-item clearfix"},[e._ssrNode('<div class="avatar">',"</div>",[n("user-avatar",{attrs:{user:e.user,size:60}})],1),e._ssrNode(" "),e._ssrNode('<div class="intro">',"</div>",[n("user-nickname",{attrs:{user:e.user}}),e._ssrNode(' <p class="oneline intro">'+e._ssrEscape(e._s(e.user.signature))+"</p>")],2),e._ssrNode(" "),e._ssrNode('<div class="control">',"</div>",[n("user-follow-btn",{attrs:{slug:e.user.slug},model:{value:e.user.relation,callback:function(t){e.$set(e.user,"relation",t)},expression:"user.relation"}}),e._ssrNode(" "),n("send-mail-btn",{attrs:{slug:e.user.slug}})],2)],2)},[],!1,function(e){var t=n(95);t.__inject__&&t.__inject__(e)},null,"886cda44");t.a=component.exports}};
//# sourceMappingURL=578c85846281cf798cf2.js.map