exports.ids=[42],exports.modules={105:function(e,t,n){"use strict";var r={name:"UserNickname",props:{user:{type:Object,required:!0},sex:{type:Number,default:0},level:{type:Boolean,default:!0},nickname:{type:String,default:""},disabled:{type:Boolean,default:!1}},computed:{sexClass(){switch(this.sex){case-1:return{name:"simi",color:"limegreen"};case 0:return{name:"unknown",color:"gold"};case 1:return{name:"nan",color:"deepskyblue"};case 2:return{name:"nv",color:"hotpink"};default:return{name:"weizhi",color:"gold"}}}}},l=n(1);var component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"clearfix oneline"},[e.disabled?e._ssrNode('<div class="user-nickname">',"</div>",[e._ssrNode('<div class="nickname"><p class="oneline">'+e._s(e.nickname||e.user.nickname)+"</p></div> "+(e.sex?"<span"+e._ssrClass(null,e.$style.title)+"><i"+e._ssrClass("iconfont",[e.$style["ic-sex"],"ic-"+e.sexClass.name])+e._ssrStyle(null,{backgroundColor:e.sexClass.color},null)+"></i></span>":"\x3c!----\x3e")+" "+(e.level?"<span"+e._ssrClass(null,[e.$style.title,e.$style["ic-level"]])+">"+e._ssrEscape(e._s("Lv"+e.user.level))+"</span>":"\x3c!----\x3e")+" "+e._ssrList(e.user.title,(function(t,n){return"<span"+e._ssrClass(null,[e.$style.title,e.$style["ic-title"]])+">"+e._ssrEscape(e._s(t))+"</span>"})))],2):n("NLink",{staticClass:"user-nickname active",attrs:{to:e.$alias.user(e.user.slug),target:"_blank"}},[n("div",{staticClass:"nickname"},[n("p",{staticClass:"oneline",domProps:{innerHTML:e._s(e.nickname||e.user.nickname)}})]),e._v(" "),e.sex?n("span",{class:e.$style.title},[n("i",{staticClass:"iconfont",class:[e.$style["ic-sex"],"ic-"+e.sexClass.name],style:{backgroundColor:e.sexClass.color}})]):e._e(),e._v(" "),e.level?n("span",{class:[e.$style.title,e.$style["ic-level"]],domProps:{textContent:e._s("Lv"+e.user.level)}}):e._e(),e._v(" "),e._l(e.user.title,(function(t,r){return n("span",{key:r,class:[e.$style.title,e.$style["ic-title"]],domProps:{textContent:e._s(t)}})}))],2)],1)}),[],!1,(function(e){var t=n(106);t.__inject__&&t.__inject__(e);var r=n(107);r.__inject__&&r.__inject__(e),this.$style=r.locals||r}),null,"e928f846");t.a=component.exports},106:function(e,t,n){"use strict";n.r(t);var r=n(88),l=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t.default=l.a},107:function(e,t,n){"use strict";n.r(t);var r=n(89),l=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t.default=l.a},108:function(e,t){},110:function(e,t,n){"use strict";var r={name:"UserFollowBtn",props:{slug:{type:String,required:!0}},computed:{state(){return this.$store.getters["social/get"]("user-follow",this.slug)},isAuth(){return this.$store.state.isAuth},isMine(){return this.$store.getters.isMine(this.slug)},btnText(){return this.isAuth&&this.state?this.isMine?"自己":this.state.is_following&&this.state.is_followed_by?"互相关注":this.state.is_following?"已关注":this.state.is_followed_by?"关注了我":"关注":"关注"}},methods:{handleFollowClick(){this.isAuth?this.isMine?this.$toast.info("不能关注自己"):this.state&&!this.state.is_following_loading&&("关注了我"!==this.btnText&&"关注"!==this.btnText?this.$confirm("确定要取消关注吗？","提示").then(()=>this.submit()).catch(()=>{}):this.submit()):this.$channel.$emit("sign-in")},async submit(){const data=await this.$store.dispatch("social/toggle",{type:"user-follow",slug:this.slug,action:"is_following",params:{target_slug:this.slug,target_type:"user",method_type:"follow"}});data.success&&this.$emit("change",data.result)}}},l=n(1),component=Object(l.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return this.state?t("el-button",{staticClass:"user-fff-btn",attrs:{loading:this.state.is_following_loading,round:"",type:"primary",plain:"关注"!==this.btnText},on:{click:this.handleFollowClick}},[t("span",{domProps:{textContent:this._s(this.btnText)}})]):this._e()}),[],!1,null,null,"14f0ba9a");t.a=component.exports},140:function(e,t,n){"use strict";var r={name:"SendMailBtn",props:{slug:{type:String,required:!0},nickname:{type:String,required:!0}},computed:{isAuth(){return this.$store.state.isAuth},isMine(){return this.$store.getters.isMine(this.slug)}},methods:{toMessage(){if(!this.isAuth)return void this.$channel.$emit("sign-in");if(this.isMine)return void this.$toast.info("不能给自己发消息");const e=window.open();this.$axios.$get("v1/message/get_channel",{params:{type:1,slug:this.slug}}).then(t=>{e.location=this.$alias.user(this.$store.state.user.slug,`message?mailto=${t}&name=${this.nickname}`)}).catch(t=>{this.$toast.error(t.message),e.close()})}}},l=n(1);var component=Object(l.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("el-button",{staticClass:"send-mail-btn",attrs:{type:"info",round:"",plain:""},on:{click:this.toMessage}},[this._v("\n  发消息\n")])}),[],!1,(function(e){}),null,"c67533e0");t.a=component.exports},144:function(e,t,n){"use strict";n.r(t);var r=n(108),l=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t.default=l.a},145:function(e,t,n){"use strict";var r=n(93),l=n(105),o=n(110),c=n(140),d={name:"UserRelationItem",components:{UserAvatar:r.a,UserNickname:l.a,UserFollowBtn:o.a,SendMailBtn:c.a},props:{user:{type:Object,required:!0}}},_=n(1);var component=Object(_.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"user-rel-item clearfix"},[e._ssrNode('<div class="avatar">',"</div>",[n("UserAvatar",{attrs:{user:e.user,size:60}})],1),e._ssrNode(" "),e._ssrNode('<div class="intro">',"</div>",[n("UserNickname",{attrs:{user:e.user}}),e._ssrNode(' <p class="oneline intro">'+e._ssrEscape(e._s(e.user.signature))+"</p>")],2),e._ssrNode(" "),e._ssrNode('<div class="control">',"</div>",[n("UserFollowBtn",{attrs:{slug:e.user.slug}}),e._ssrNode(" "),n("SendMailBtn",{attrs:{slug:e.user.slug,nickname:e.user.nickname}})],2)],2)}),[],!1,(function(e){var t=n(144);t.__inject__&&t.__inject__(e)}),null,"431b5a9e");t.a=component.exports},387:function(e,t,n){"use strict";n.r(t);var r=n(55),l=n.n(r),o={name:"UserSocialFollowing",components:{UserRelationItem:n(145).a,ElAlert:l.a},props:{slug:{type:String,required:!0}},computed:{query(){return{$axios:this.$axios,slug:this.slug,relation:"following",changing:"slug"}},isMine(){return this.$store.getters.isMine(this.slug)}},methods:{detectUserRelation({data:data}){const{result:e}=data;e.length&&this.$axios.$get("v1/user/detect_relation",{params:{type:"user",targets:e.map(e=>e.slug).join(",")}}).then(data=>{this.$store.commit("social/set",{type:"user-follow",data:data}),this.$refs.loader.patch(data)}).catch(()=>{})}}},c=n(1),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"user-social-following"}},[e.isMine?n("ElAlert",{attrs:{title:"如果你并不关注TA，那么就取关吧",type:"success"}}):e._e(),e._ssrNode(" "),n("FlowLoader",{ref:"loader",attrs:{func:"getUserRelation",type:"seenIds",query:e.query,callback:e.detectUserRelation},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.flow;return n("ul",{},e._l(r,(function(e){return n("UserRelationItem",{key:e.slug,attrs:{user:e}})})),1)}}])})],2)}),[],!1,null,null,"0c0c5578");t.default=component.exports},86:function(e,t){},88:function(e,t){},89:function(e,t){e.exports={title:"title_1yLHa","ic-sex":"ic-sex_19eCo",icSex:"ic-sex_19eCo","ic-level":"ic-level_3KuJr",icLevel:"ic-level_3KuJr","ic-title":"ic-title_Uq8in",icTitle:"ic-title_Uq8in","skeleton-loading":"skeleton-loading_12Xrd",skeletonLoading:"skeleton-loading_12Xrd",skeleton:"skeleton_2qRlz"}},93:function(e,t,n){"use strict";var r={name:"UserAvatar",props:{user:{type:Object,required:!0},avatar:{type:String,default:""},size:{type:Number,default:40},disabled:{type:Boolean,default:!1}}},l=n(1);var component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.disabled?n("div",{staticClass:"user-avatar",style:{width:e.size+"px",height:e.size+"px"}},[n("VImg",{attrs:{radius:"50%",src:e.avatar||e.user.avatar,width:e.size,height:e.size,alt:e.user.nickname}})],1):n("NLink",{staticClass:"user-avatar",style:{width:e.size+"px",height:e.size+"px"},attrs:{to:e.$alias.user(e.user.slug),target:"_blank"}},[n("VImg",{attrs:{radius:"50%",src:e.avatar||e.user.avatar,width:e.size,height:e.size,alt:e.user.nickname}})],1)}),[],!1,(function(e){var t=n(94);t.__inject__&&t.__inject__(e)}),null,"752b3908");t.a=component.exports},94:function(e,t,n){"use strict";n.r(t);var r=n(86),l=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t.default=l.a}};