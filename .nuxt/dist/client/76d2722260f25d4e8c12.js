(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{299:function(t,e,n){},300:function(t,e,n){},301:function(t,e,n){t.exports={title:"title_1yLHa","ic-sex":"ic-sex_19eCo",icSex:"ic-sex_19eCo","ic-level":"ic-level_3KuJr",icLevel:"ic-level_3KuJr","ic-title":"ic-title_Uq8in",icTitle:"ic-title_Uq8in"}},302:function(t,e,n){"use strict";var r=n(4),l=n(20),o=n(29),c=n(185),f=n(84),d=n(12),h=n(85).f,v=n(128).f,m=n(13).f,_=n(303).trim,$=r.Number,x=$,y=$.prototype,C="Number"==o(n(127)(y)),k="trim"in String.prototype,w=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var n,r,l,o=(e=k?e.trim():_(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:r=2,l=49;break;case 79:case 111:r=8,l=55;break;default:return+e}for(var code,c=e.slice(2),i=0,d=c.length;i<d;i++)if((code=c.charCodeAt(i))<48||code>l)return NaN;return parseInt(c,r)}}return+e};if(!$(" 0o1")||!$("0b1")||$("+0x1")){$=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof $&&(C?d(function(){y.valueOf.call(n)}):"Number"!=o(n))?c(new x(w(e)),n,$):w(e)};for(var N,I=n(7)?h(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;I.length>E;E++)l(x,N=I[E])&&!l($,N)&&m($,N,v(x,N));$.prototype=y,y.constructor=$,n(14)(r,"Number",$)}},303:function(t,e,n){var r=n(10),l=n(28),o=n(12),c=n(304),f="["+c+"]",d=RegExp("^"+f+f+"*"),h=RegExp(f+f+"*$"),v=function(t,e,n){var l={},f=o(function(){return!!c[t]()||"​"!="​"[t]()}),d=l[t]=f?e(m):c[t];n&&(l[n]=d),r(r.P+r.F*f,"String",l)},m=v.trim=function(t,e){return t=String(l(t)),1&e&&(t=t.replace(d,"")),2&e&&(t=t.replace(h,"")),t};t.exports=v},304:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},305:function(t,e,n){},306:function(t,e,n){"use strict";n(302);var r={name:"UserAvatar",props:{user:{type:Object,required:!0},avatar:{type:String,default:""},size:{type:Number,default:40},disabled:{type:Boolean,default:!1}}},l=(n(307),n(26)),component=Object(l.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.disabled?n("div",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"}},[n("img",{staticClass:"avatar",attrs:{src:t.$resize(t.avatar||t.user.avatar,{width:t.size}),alt:t.user.nickname}})]):n("nuxt-link",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"},attrs:{to:t.$alias.user(t.user.slug),target:"_blank"}},[n("img",{staticClass:"avatar",attrs:{src:t.$resize(t.avatar||t.user.avatar,{width:t.size}),alt:t.user.nickname}})])},[],!1,null,null,null);e.a=component.exports},307:function(t,e,n){"use strict";var r=n(299);n.n(r).a},308:function(t,e,n){"use strict";var r=n(300);n.n(r).a},309:function(t,e,n){"use strict";var r=n(301),l=n.n(r);e.default=l.a},310:function(t,e,n){"use strict";n(302);var r={name:"UserNickname",props:{user:{type:Object,required:!0},sex:{type:Number,default:0},level:{type:Boolean,default:!0},nickname:{type:String,default:""},disabled:{type:Boolean,default:!1}},computed:{sexClass:function(){switch(this.sex){case-1:return{name:"simi",color:"limegreen"};case 0:return{name:"unknown",color:"gold"};case 1:return{name:"nan",color:"deepskyblue"};case 2:return{name:"nv",color:"hotpink"};default:return{name:"weizhi",color:"gold"}}}}},l=(n(308),n(309)),o=n(26);var component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clearfix"},[t.disabled?n("div",{staticClass:"user-nickname"},[n("div",{staticClass:"nickname"},[n("p",{staticClass:"oneline",domProps:{textContent:t._s(t.nickname||t.user.nickname)}})]),t._v(" "),t.sex?n("span",{class:t.$style.title},[n("i",{staticClass:"iconfont",class:[t.$style["ic-sex"],"ic-"+t.sexClass.name],style:{backgroundColor:t.sexClass.color}})]):t._e(),t._v(" "),t.level?n("span",{class:[t.$style.title,t.$style["ic-level"]],domProps:{textContent:t._s("Lv"+t.user.level)}}):t._e(),t._v(" "),t._l(t.user.roles,function(e,r){return n("span",{key:r,class:[t.$style.title,t.$style["ic-title"]],domProps:{textContent:t._s(e)}})})],2):n("nuxt-link",{staticClass:"user-nickname",attrs:{to:t.$alias.user(t.user.slug),target:"_blank"}},[n("div",{staticClass:"nickname"},[n("p",{staticClass:"oneline",domProps:{textContent:t._s(t.nickname||t.user.nickname)}})]),t._v(" "),t.sex?n("span",{class:t.$style.title},[n("i",{staticClass:"iconfont",class:[t.$style["ic-sex"],"ic-"+t.sexClass.name],style:{backgroundColor:t.sexClass.color}})]):t._e(),t._v(" "),t.level?n("span",{class:[t.$style.title,t.$style["ic-level"]],domProps:{textContent:t._s("Lv"+t.user.level)}}):t._e(),t._v(" "),t._l(t.user.title,function(e,r){return n("span",{key:r,class:[t.$style.title,t.$style["ic-title"]],domProps:{textContent:t._s(e)}})})],2)],1)},[],!1,function(t){this.$style=l.default.locals||l.default},null,null);e.a=component.exports},311:function(t,e,n){"use strict";var r={name:"SendMailBtn",props:{slug:{type:String,required:!0}},computed:{isAuth:function(){return this.$store.state.isAuth},isMine:function(){return this.$store.getters.isMine(this.slug)}},methods:{toMessage:function(){var t=this;if(this.isAuth)if(this.isMine)this.$toast.info("不能给自己发消息");else{var e=window.open();this.$axios.$get("v1/message/get_channel",{params:{type:1,slug:this.slug}}).then(function(n){e.location=t.$alias.user(t.$store.state.user.slug,"message?mailto=".concat(n))}).catch(function(n){t.$toast.error(n.message),e.close()})}else this.$channel.$emit("sign-in")}}},l=n(26),component=Object(l.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("el-button",{staticClass:"send-mail-btn",attrs:{type:"info",round:"",plain:""},on:{click:this.toMessage}},[this._v("\n  发消息\n")])},[],!1,null,null,null);e.a=component.exports},312:function(t,e,n){"use strict";var r={name:"UserFollowBtn",props:{slug:{type:String,required:!0},value:{type:String,default:"unknown",validator:function(t){return~["unknown","self","friend","follower","following","stranger"].indexOf(t)}}},data:function(){return{loading:!1,action:this.value}},computed:{btnText:function(){switch(this.action){case"unknown":return"关注";case"self":return"自己";case"friend":return"互相关注";case"follower":return"关注了我";case"following":return"已关注";case"stranger":default:return"关注"}}},watch:{value:function(t){this.action=t}},mounted:function(){var t=this;this.$channel.$on("user-follow-".concat(this.slug),function(e){t.action=e})},methods:{handleFollowClick:function(){var t=this;this.$store.state.isAuth?"unknown"===this.action||this.loading||("self"!==this.action?"follower"!==this.action&&"stranger"!==this.action?this.$confirm("确定要取消关注吗？","提示").then(function(){return t.submit()}).catch(function(){}):this.submit():this.$toast.info("不能关注自己")):this.$channel.$emit("sign-in")},submit:function(){var t=this;this.loading=!0,this.$axios.$post("v1/user/toggle_follow",{slug:this.slug}).then(function(e){t.$channel.$emit("user-follow-".concat(t.slug),e),t.$emit("change",{relation:e,change:"friend"===e||"following"===e?1:-1}),t.loading=!1}).catch(function(e){t.$toast.error(e.message),t.loading=!1})}}},l=n(26),component=Object(l.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("el-button",{staticClass:"user-fff-btn",attrs:{loading:this.loading,round:"",type:"primary",plain:"stranger"!==this.action},on:{click:this.handleFollowClick}},[e("span",{domProps:{textContent:this._s(this.btnText)}})])},[],!1,null,null,null);e.a=component.exports},316:function(t,e,n){"use strict";var r=n(305);n.n(r).a},317:function(t,e,n){"use strict";var r=n(306),l=n(310),o=n(312),c=n(311),f={name:"UserRelationItem",components:{UserAvatar:r.a,UserNickname:l.a,UserFollowBtn:o.a,SendMailBtn:c.a},props:{user:{type:Object,required:!0}}},d=(n(316),n(26)),component=Object(d.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"user-rel-item clearfix"},[n("div",{staticClass:"avatar"},[n("user-avatar",{attrs:{user:t.user,size:60}})],1),t._v(" "),n("div",{staticClass:"intro"},[n("user-nickname",{attrs:{user:t.user}}),t._v(" "),n("p",{staticClass:"oneline intro",domProps:{textContent:t._s(t.user.signature)}})],1),t._v(" "),n("div",{staticClass:"control"},[n("user-follow-btn",{attrs:{slug:t.user.slug},model:{value:t.user.relation,callback:function(e){t.$set(t.user,"relation",e)},expression:"user.relation"}}),t._v(" "),n("send-mail-btn",{attrs:{slug:t.user.slug}})],1)])},[],!1,null,null,null);e.a=component.exports},423:function(t,e,n){"use strict";n.r(e);n(56),n(9),n(130);var r={name:"UserSocialFriends",components:{UserRelationItem:n(317).a},props:{slug:{type:String,required:!0}},computed:{query:function(){return{$axios:this.$axios,slug:this.slug,relation:"friend",changing:"slug"}}},methods:{detectUserRelation:function(t){var e=this,n=t.data.result;n.length&&this.$axios.$get("v1/user/detect_relation",{params:{type:"user",targets:n.map(function(t){return t.slug}).join(",")}}).then(function(data){var t=[];Object.keys(data).forEach(function(e){t.push({slug:e,relation:data[e]})}),e.$refs.loader.patch(t)}).catch(function(){})}}},l=n(26),component=Object(l.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"user-social-friends"}},[n("flow-loader",{ref:"loader",attrs:{func:"getUserRelation",type:"seenIds",query:t.query,callback:t.detectUserRelation},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.flow;return n("ul",{},t._l(r,function(t){return n("user-relation-item",{key:t.slug,attrs:{user:t}})}),1)}}])})],1)},[],!1,null,null,null);e.default=component.exports}}]);