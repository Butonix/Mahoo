exports.ids=[21],exports.modules={100:function(t,e,n){"use strict";n.r(e);var r=n(68),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},101:function(t,e){},102:function(t,e,n){"use strict";n.r(e);var r=n(69),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},103:function(t,e,n){"use strict";n.r(e);var r=n(70),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},104:function(t,e,n){"use strict";n.r(e);var r=n(71),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},105:function(t,e,n){"use strict";n.r(e);var r=n(72),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},106:function(t,e,n){"use strict";n.r(e);var r=n(73),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},107:function(t,e,n){"use strict";n.r(e);var r=n(74),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},108:function(t,e,n){"use strict";n.r(e);var r=n(75),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},109:function(t,e,n){"use strict";n.r(e);var r=n(76),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},110:function(t,e,n){"use strict";n.r(e);var r=n(77),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},124:function(t,e,n){"use strict";n.r(e);var r={name:"MessageMenu",props:{},data:()=>({menu:[]}),computed:{},watch:{},created(){},mounted(){this.getMessageMenu()},methods:{getMessageMenu(){this.$axios.$get("v1/message/menu").then(data=>{this.menu=data})}}},o=n(1);var c=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"message-menu"},t._l(t.menu,function(e){return t._ssrNode("<li>","</li>",[n("nuxt-link",{staticClass:"room-item clearfix",attrs:{to:t.$alias.user(t.$route.params.slug,"message/?mailto="+e.user.slug)}},[n("img",{staticClass:"avatar",attrs:{src:t.$resize(e.user.avatar,{width:40}),alt:e.user.nickname}}),t._v(" "),n("div",{staticClass:"content"},[n("p",{staticClass:"oneline",domProps:{textContent:t._s(e.user.nickname)}}),t._v(" "),n("div",{staticClass:"read-badge"},[t._v("\n          "+t._s(e.count>99?"99+":e.count)+"\n        ")])])])],1)}),0)},[],!1,function(t){var e=n(100);e.__inject__&&e.__inject__(t)},null,"04b91794").exports,l=n(47),d=n.n(l),f=(n(101),n(50)),_=n(57),m={name:"ChatAvatar",components:{UserAvatar:_.a},props:{item:{type:Object,required:!0}},computed:{isMine(){return this.$store.state.user.slug===this.item.slug}}};var h=Object(o.a)(m,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"chat-avatar",class:[this.isMine?"chat-avatar-mine":"chat-avatar-other"]},[e("user-avatar",{attrs:{user:this.item,size:36}})],1)},[],!1,function(t){var e=n(102);e.__inject__&&e.__inject__(t)},null,"630a9f70").exports,v={name:"JsonContentTxtParser",props:{item:{type:Object,required:!0}}};var x=Object(o.a)(v,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"json-content-txt-parser"},[this._ssrNode("<p>"+this._s(this.item.content)+"</p>")])},[],!1,function(t){var e=n(103);e.__inject__&&e.__inject__(t)},null,"a8aa203e").exports,$={name:"JsonContentImgParser",props:{item:{type:Object,required:!0}}};var C=Object(o.a)($,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"json-content-img-parser"},[t._ssrNode("<img"+t._ssrAttr("src",t.$resize(t.item.url))+t._ssrAttr("width",t.item.width)+t._ssrAttr("height",t.item.height)+t._ssrAttr("alt",t.item.text)+"> "+(t.item.text?'<p class="img-tip">'+t._ssrEscape(t._s(t.item.text))+"</p>":"\x3c!----\x3e"))])},[],!1,function(t){var e=n(104);e.__inject__&&e.__inject__(t)},null,"f06b0d18").exports,j={name:"JsonContentTxtParser",props:{item:{type:Object,required:!0}}};var y=Object(o.a)(j,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"json-content-txt-parser"},[this._ssrNode("<blockquote>"+this._s(this.item.text)+"</blockquote>")])},[],!1,function(t){var e=n(105);e.__inject__&&e.__inject__(t)},null,"8b617b90").exports,k={name:"JsonContentTxtParser",props:{item:{type:Object,required:!0}}};var w=Object(o.a)(k,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"json-content-txt-parser"},[this._ssrNode(this.item.text?"<h3>"+this._ssrEscape(this._s(this.item.text))+"</h3>":"\x3c!----\x3e")])},[],!1,function(t){var e=n(106);e.__inject__&&e.__inject__(t)},null,"55f76f49").exports,O={name:"JsonContentListParser",props:{item:{type:Object,required:!0}},computed:{list(){let t=this.item.text;if(!t)return[];for(;/\n\n/.test(t);)t=t.replace(/\n\n/g,"\n");return t.split("\n")}}};var E={name:"JsonContent",components:{TitleParser:w,TxtParser:x,ImgParser:C,UseParser:y,ListParser:Object(o.a)(O,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"json-content-list-parser"},[t._ssrNode("1"===t.item.sort?"<ol>"+t._ssrList(t.list,function(li,e){return"<li>"+t._ssrEscape(t._s(li))+"</li>"})+"</ol>":"<ul>"+t._ssrList(t.list,function(li,e){return"<li>"+t._ssrEscape(t._s(li))+"</li>"})+"</ul>")])},[],!1,function(t){var e=n(107);e.__inject__&&e.__inject__(t)},null,"0247939b").exports},props:{content:{required:!0,type:Array},show:{type:Boolean,default:!0}}},M={name:"ChatMessage",components:{JsonContent:Object(o.a)(E,function(){var t=this.$createElement,e=this._self._c||t;return this.show?e("div",{staticClass:"json-content"},this._l(this.content,function(t,n){return e(t.type+"-parser",{key:n,tag:"component",attrs:{item:t}})}),1):this._e()},[],!1,null,null,"db874c02").exports},props:{item:{type:Object,required:!0}}};var N=Object(o.a)(M,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"chat-message"},[e("json-content",{attrs:{content:this.item.content}})],1)},[],!1,function(t){var e=n(108);e.__inject__&&e.__inject__(t)},null,"959e5200").exports,A=n(19),z=n(91),P={name:"MessageRoom",components:{ChatRoom:d.a,UserAvatar:_.a,UserNickname:z.a},props:{mailto:{type:String,required:!0}},data:()=>({message:"",target:null}),computed:{avatarComp:()=>h,messageComps:()=>({message:N}),status(){return this.$store.state.socket.reconnectError?"error":this.$store.state.socket.isConnected?"ok":"warn"}},watch:{"$store.state.socket.lastGetAt"(){this.appendMessage(this.$store.state.socket.message)}},created(){},mounted(){this.getMailtoUser()},methods:{getMailtoUser(){this.mailto&&Object(f.b)(this,{slug:this.mailto}).then(t=>{this.target=t}).catch(t=>{this.$toast.error(t.message)})},appendMessage(t){this.$refs.room.addMessage({type:"message",float:"left",id:Math.random().toString(10).substring(3,6),color:2===t.from_user.sex?{bg:"#ff6881",text:"#fff"}:{bg:"#12b7f5",text:"#fff"},data:{content:t.content,created_at:t.created_at,user:t.from_user}})},handleAddBubble(){if("warn"===this.status)return void this.$toast.info("正在连接服务器");if("error"===this.status)return void this.$toast.error("请稍候再试");if(!this.message.trim())return;const t=this.$store.state.user,e=[{type:"txt",content:this.message.trim().replace(/\r?\n/g,"<br>")}];this.$refs.room.addMessage({type:"message",float:"right",id:Math.random().toString(10).substring(3,6),color:2===t.sex?{bg:"#ff6881",text:"#fff"}:{bg:"#12b7f5",text:"#fff"},data:{content:e,created_at:Date.now(),user:t}}),this.message="",this.$channel.send({message_type:1,to_user_slug:this.mailto,from_user_token:Object(A.a)(),content:e})},handleNewLine(){this.message&&(this.message+="\n")}}};var L=Object(o.a)(P,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"message-room"},[t._ssrNode('<div class="message-header">',"</div>",[t.target?n("user-avatar",{attrs:{user:t.target}}):t._e(),t._ssrNode(" <div"+t._ssrClass("status","status-"+t.status)+"></div> "),t.target?n("user-nickname",{staticClass:"nickname-wrap",attrs:{user:t.target}}):t._e()],2),t._ssrNode(" "),n("ChatRoom",{ref:"room",attrs:{"avatar-component":t.avatarComp,"message-components":t.messageComps}}),t._ssrNode(" "),t._ssrNode("<div>","</div>",[n("el-input",{attrs:{type:"textarea",rows:5,resize:"none",maxlength:"500",placeholder:"say it..."},nativeOn:{keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.handleAddBubble(e))},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.metaKey?(e.preventDefault(),t.handleNewLine(e)):null}]},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1)],2)},[],!1,function(t){var e=n(109);e.__inject__&&e.__inject__(t)},null,"174bc1b2").exports,U=n(55),J={name:"UserMessage",components:{MessageMenu:c,MessageRoom:L},mixins:[n(53).a,U.a],computed:{mailto(){return this.$route.query.mailto}}};var T=Object(o.a)(J,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"user-message"}},[e("el-row",{attrs:{gutter:20}},[e("el-col",{attrs:{span:6}},[this._v("\n       \n      "),e("message-menu")],1),this._v(" "),e("el-col",{attrs:{span:18}},[this.mailto?e("message-room",{attrs:{mailto:this.mailto}}):[this._v("\n        ... chat\n      ")]],2)],1)],1)},[],!1,function(t){var e=n(110);e.__inject__&&e.__inject__(t)},null,"1992ef02");e.default=T.exports},50:function(t,e,n){"use strict";n.d(e,"h",function(){return r}),n.d(e,"b",function(){return o}),n.d(e,"a",function(){return c}),n.d(e,"g",function(){return l}),n.d(e,"e",function(){return d}),n.d(e,"c",function(){return f}),n.d(e,"d",function(){return _}),n.d(e,"f",function(){return m});const r=(t,e)=>t.$axios.$post("v1/user/update_info",e),o=(t,{slug:e})=>t.$axios.$get("v1/user/show",{params:{slug:e}}),c=(t,{id:e,phone:n,password:r,authCode:o})=>t.$axios.$post("v1/door/bind_phone",{id:e,phone:n,password:r,authCode:o}),l=(t,{phone_number:e,type:n,geetest:r})=>t.$axios.$post("v1/door/message",{phone_number:e,type:n,geetest:r}),d=(t,{access:e,secret:n,nickname:r,authCode:o,inviteCode:c})=>t.$axios.$post("v1/door/register",{access:e,secret:n,nickname:r,authCode:o,inviteCode:c}),f=(t,{access:e,secret:n,remember:r,geetest:o})=>t.$axios.$post("v1/door/login",{access:e,secret:n,remember:r,geetest:o}),_=t=>t.$axios.$post("v1/door/logout"),m=(t,{method:e,access:n,authCode:r,secret:o})=>t.$axios.$post("v1/door/reset_password",{method:e,access:n,authCode:r,secret:o})},51:function(t,e){},52:function(t,e){},53:function(t,e,n){"use strict";var r=n(19);e.a={beforeMount(){if(this.$store.state.isAuth)return;if(!Object(r.a)())return void this.$toast.error("继续操作前请先登录").then(()=>{window.location.href="/"});const t=this.$watch("$store.state.logging",e=>{e||(t(),this.$store.state.isAuth||(this.$cookie.remove("JWT-TOKEN"),this.$toast.error("继续操作前请先登录").then(()=>{window.location.href="/"})))});this.$store.state.logging||(this.$store.commit("SET_LOGGING"),this.$channel.socketConnect())}}},55:function(t,e,n){"use strict";e.a={beforeMount(){const t=this.$watch("isAuth",e=>{e&&(this.$store.getters.isMine(this.$route.params.slug)||this.$router.replace({name:this.$route.name,params:{slug:this.$store.state.user.slug}}),t())})}}},57:function(t,e,n){"use strict";var r={name:"UserAvatar",props:{user:{type:Object,required:!0},avatar:{type:String,default:""},size:{type:Number,default:40},disabled:{type:Boolean,default:!1}}},o=n(1);var component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.disabled?n("div",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"}},[t._ssrNode("<img"+t._ssrAttr("src",t.$resize(t.avatar||t.user.avatar,{width:t.size}))+t._ssrAttr("alt",t.user.nickname)+' class="avatar">')],2):n("nuxt-link",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"},attrs:{to:t.$alias.user(t.user.slug)}},[n("img",{staticClass:"avatar",attrs:{src:t.$resize(t.avatar||t.user.avatar,{width:t.size}),alt:t.user.nickname}})])},[],!1,function(t){var e=n(64);e.__inject__&&e.__inject__(t)},null,"8c0ebd70");e.a=component.exports},64:function(t,e,n){"use strict";n.r(e);var r=n(51),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},65:function(t,e,n){"use strict";n.r(e);var r=n(52),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},68:function(t,e){},69:function(t,e){},70:function(t,e){},71:function(t,e){},72:function(t,e){},73:function(t,e){},74:function(t,e){},75:function(t,e){},76:function(t,e){},77:function(t,e){},91:function(t,e,n){"use strict";var r={name:"UserNickname",props:{user:{type:Object,required:!0},sex:{type:Number,default:0},level:{type:Boolean,default:!0},nickname:{type:String,default:""},disabled:{type:Boolean,default:!1}},computed:{sexClass(){switch(this.sex){case-1:return{name:"simi",color:"limegreen"};case 0:return{name:"unknown",color:"gold"};case 1:return{name:"nan",color:"deepskyblue"};case 2:return{name:"nv",color:"hotpink"};default:return{name:"weizhi",color:"gold"}}}}},o=n(1);var component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clearfix"},[t.disabled?t._ssrNode('<div class="user-nickname">',"</div>",[t._ssrNode('<div class="nickname"><p class="oneline">'+t._ssrEscape(t._s(t.nickname||t.user.nickname))+"</p></div> "+(t.sex?'<span class="title"><i'+t._ssrClass("iconfont ic-sex","ic-"+t.sexClass.name)+t._ssrStyle(null,{backgroundColor:t.sexClass.color},null)+"></i></span>":"\x3c!----\x3e")+" "+(t.level?'<span class="title ic-level">'+t._ssrEscape(t._s("Lv"+t.user.level))+"</span>":"\x3c!----\x3e")+" "+t._ssrList(t.user.roles,function(e,n){return'<span class="title ic-title">'+t._ssrEscape(t._s(e))+"</span>"}))],2):n("nuxt-link",{staticClass:"user-nickname",attrs:{to:t.$alias.user(t.user.slug)}},[n("div",{staticClass:"nickname"},[n("p",{staticClass:"oneline",domProps:{textContent:t._s(t.nickname||t.user.nickname)}})]),t._v(" "),t.sex?n("span",{staticClass:"title"},[n("i",{staticClass:"iconfont ic-sex",class:"ic-"+t.sexClass.name,style:{backgroundColor:t.sexClass.color}})]):t._e(),t._v(" "),t.level?n("span",{staticClass:"title ic-level",domProps:{textContent:t._s("Lv"+t.user.level)}}):t._e(),t._v(" "),t._l(t.user.title,function(e,r){return n("span",{key:r,staticClass:"title ic-title",domProps:{textContent:t._s(e)}})})],2)],1)},[],!1,function(t){var e=n(65);e.__inject__&&e.__inject__(t)},null,"5b0047c6");e.a=component.exports}};
//# sourceMappingURL=ae393bfcd13990a7c679.js.map