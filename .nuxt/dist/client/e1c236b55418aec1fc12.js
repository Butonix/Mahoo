(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{300:function(t,e,n){},301:function(t,e,n){},302:function(t,e,n){t.exports={title:"title_1yLHa","ic-sex":"ic-sex_19eCo",icSex:"ic-sex_19eCo","ic-level":"ic-level_3KuJr",icLevel:"ic-level_3KuJr","ic-title":"ic-title_Uq8in",icTitle:"ic-title_Uq8in"}},306:function(t,e,n){"use strict";n(299);var r={name:"UserAvatar",props:{user:{type:Object,required:!0},avatar:{type:String,default:""},size:{type:Number,default:40},disabled:{type:Boolean,default:!1}}},o=(n(307),n(26)),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.disabled?n("div",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"}},[n("img",{staticClass:"avatar",attrs:{src:t.$resize(t.avatar||t.user.avatar,{width:t.size}),alt:t.user.nickname}})]):n("nuxt-link",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"},attrs:{to:t.$alias.user(t.user.slug),target:"_blank"}},[n("img",{staticClass:"avatar",attrs:{src:t.$resize(t.avatar||t.user.avatar,{width:t.size}),alt:t.user.nickname}})])},[],!1,null,null,null);e.a=component.exports},307:function(t,e,n){"use strict";var r=n(300);n.n(r).a},308:function(t,e,n){"use strict";var r=n(301);n.n(r).a},309:function(t,e,n){"use strict";var r=n(302),o=n.n(r);e.default=o.a},310:function(t,e,n){"use strict";n(299);var r={name:"UserNickname",props:{user:{type:Object,required:!0},sex:{type:Number,default:0},level:{type:Boolean,default:!0},nickname:{type:String,default:""},disabled:{type:Boolean,default:!1}},computed:{sexClass:function(){switch(this.sex){case-1:return{name:"simi",color:"limegreen"};case 0:return{name:"unknown",color:"gold"};case 1:return{name:"nan",color:"deepskyblue"};case 2:return{name:"nv",color:"hotpink"};default:return{name:"weizhi",color:"gold"}}}}},o=(n(308),n(309)),l=n(26);var component=Object(l.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clearfix"},[t.disabled?n("div",{staticClass:"user-nickname"},[n("div",{staticClass:"nickname"},[n("p",{staticClass:"oneline",domProps:{textContent:t._s(t.nickname||t.user.nickname)}})]),t._v(" "),t.sex?n("span",{class:t.$style.title},[n("i",{staticClass:"iconfont",class:[t.$style["ic-sex"],"ic-"+t.sexClass.name],style:{backgroundColor:t.sexClass.color}})]):t._e(),t._v(" "),t.level?n("span",{class:[t.$style.title,t.$style["ic-level"]],domProps:{textContent:t._s("Lv"+t.user.level)}}):t._e(),t._v(" "),t._l(t.user.roles,function(e,r){return n("span",{key:r,class:[t.$style.title,t.$style["ic-title"]],domProps:{textContent:t._s(e)}})})],2):n("nuxt-link",{staticClass:"user-nickname",attrs:{to:t.$alias.user(t.user.slug),target:"_blank"}},[n("div",{staticClass:"nickname"},[n("p",{staticClass:"oneline",domProps:{textContent:t._s(t.nickname||t.user.nickname)}})]),t._v(" "),t.sex?n("span",{class:t.$style.title},[n("i",{staticClass:"iconfont",class:[t.$style["ic-sex"],"ic-"+t.sexClass.name],style:{backgroundColor:t.sexClass.color}})]):t._e(),t._v(" "),t.level?n("span",{class:[t.$style.title,t.$style["ic-level"]],domProps:{textContent:t._s("Lv"+t.user.level)}}):t._e(),t._v(" "),t._l(t.user.title,function(e,r){return n("span",{key:r,class:[t.$style.title,t.$style["ic-title"]],domProps:{textContent:t._s(e)}})})],2)],1)},[],!1,function(t){this.$style=o.default.locals||o.default},null,null);e.a=component.exports},315:function(t,e,n){"use strict";n(27);var r=n(2),o=n(57);e.a={beforeMount:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){var e,n,r=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.$store.state.logging){t.next=4;break}e=this.$watch("$store.state.logging",function(){r.$store.state.isAuth?e():r.$toast.error("继续操作前请先登录").then(function(){window.location.href="/"})}),t.next=10;break;case 4:return n=Object(o.a)(),this.$store.commit("SET_USER_TOKEN",n),t.next=8,this.$store.dispatch("initAuth");case 8:t.sent||this.$toast.error("继续操作前请先登录").then(function(){window.location.href="/"});case 10:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},339:function(t,e,n){},340:function(t,e,n){},341:function(t,e,n){},342:function(t,e,n){},343:function(t,e,n){},344:function(t,e,n){},345:function(t,e,n){},346:function(t,e,n){},347:function(t,e,n){},348:function(t,e,n){},349:function(t,e,n){"use strict";n(38),n(83);e.a={beforeMount:function(){var t=this,e=this.$watch("isAuth",function(n){n&&(t.$store.getters.isMine(t.$route.params.slug)||t.$router.replace({name:t.$route.name,params:{slug:t.$store.state.user.slug}}),e())})}}},350:function(t,e,n){},387:function(t,e,n){t.exports=n.p+"img/e82d3e7.png"},390:function(t,e,n){"use strict";var r=n(339);n.n(r).a},393:function(t,e,n){"use strict";var r=n(340);n.n(r).a},394:function(t,e,n){"use strict";var r=n(341);n.n(r).a},395:function(t,e,n){"use strict";var r=n(342);n.n(r).a},396:function(t,e,n){"use strict";var r=n(343);n.n(r).a},397:function(t,e,n){"use strict";var r=n(344);n.n(r).a},398:function(t,e,n){"use strict";var r=n(345);n.n(r).a},399:function(t,e,n){"use strict";var r=n(346);n.n(r).a},402:function(t,e,n){"use strict";var r=n(347);n.n(r).a},403:function(t,e,n){"use strict";var r=n(348);n.n(r).a},404:function(t,e,n){"use strict";var r=n(350);n.n(r).a},423:function(t,e,n){"use strict";n.r(e);var r=n(388),o=n.n(r),l=(n(27),n(2)),c=n(156),m=n(155),h={name:"MessageMenu",props:{slug:{type:String,required:!0}},data:function(){return{menuWatcher:null,timeWatcher:null,friends:[]}},computed:{menu:function(){return this.$store.state.messageMenu.list}},mounted:function(){var t=this;this.menuWatcher=this.$watch("$store.state.mailbox.unread_message_total",function(e,n){e>n&&!t.$store.state.socket.isConnected&&t.$store.dispatch("getMessageMenu")}),this.timeWatcher=this.$watch("$store.state.messageMenu.time",function(){t.$store.dispatch("updateMessageMenu")}),this.$store.dispatch("updateMessageMenu"),this.menu.length&&this.$store.state.socket.isConnected||this.initChatRoom()},beforeDestroy:function(){this.menuWatcher&&this.menuWatcher(),this.timeWatcher&&this.timeWatcher()},methods:{initChatRoom:function(){var t=Object(l.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=o.a.service({target:this.$el}),t.next=3,this.getUserFriends();case 3:return t.next=5,this.$store.dispatch("getMessageMenu");case 5:e.close();case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),getUserFriends:function(){var t=Object(l.a)(regeneratorRuntime.mark(function t(){var e,n,r,o=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=function(){Object(c.getUserRelation)({$axios:o.$axios,slug:o.slug,relation:"friend"}).then(function(data){data.result.forEach(function(t){return Object(m.b)(t)}),o.friends=data.result,sessionStorage.setItem("user-friends-list",JSON.stringify(data.result))})},t.prev=1,n=sessionStorage.getItem("user-friends-list")){t.next=7;break}return t.next=6,e();case 6:return t.abrupt("return");case 7:(r=JSON.parse(n)).forEach(function(t){return Object(m.b)(t)}),this.friends=r,t.next=16;break;case 12:return t.prev=12,t.t0=t.catch(1),t.next=16,e();case 16:case"end":return t.stop()}},t,this,[[1,12]])}));return function(){return t.apply(this,arguments)}}(),deleteChannel:function(t){var e=this;this.$axios.$post("v1/message/delete_channel",{channel:t.channel}).then(function(){e.$store.commit("DELETE_MESSAGE_MENU",t.channel)}).catch(function(){})}}},f=(n(390),n(26)),d=Object(f.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"message-menu"},t._l(t.menu,function(e){return n("li",{key:e.channel},[n("nuxt-link",{staticClass:"room-item clearfix",attrs:{to:t.$alias.user(t.$route.params.slug,"message/?mailto="+e.channel)}},[n("img",{staticClass:"avatar",attrs:{src:t.$resize(e.user.avatar,{width:42}),alt:e.user.nickname}}),t._v(" "),n("div",{staticClass:"content"},[n("p",{staticClass:"nickname oneline",domProps:{textContent:t._s(e.user.nickname)}}),t._v(" "),n("div",{staticClass:"footer"},[e.count?n("div",{staticClass:"read-badge",domProps:{textContent:t._s(e.count)}}):t._e()])])]),t._v(" "),n("div",{staticClass:"close",on:{click:function(n){return t.deleteChannel(e)}}},[t._v("\n      ×\n    ")])],1)}),0)},[],!1,null,null,null).exports,v=(n(87),n(88),n(9),n(391)),$=n.n(v),_=(n(392),n(306)),x={name:"ChatAvatar",components:{UserAvatar:_.a},props:{item:{type:Object,required:!0}},computed:{isMine:function(){return this.$store.state.user.slug===this.item.slug}}},y=(n(393),Object(f.a)(x,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"chat-avatar",class:[this.isMine?"chat-avatar-mine":"chat-avatar-other"]},[e("user-avatar",{attrs:{user:this.item,size:36}})],1)},[],!1,null,null,null).exports),C={name:"JsonContentTxtParser",props:{item:{type:Object,required:!0}}},k=(n(394),Object(f.a)(C,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"json-content-txt-parser"},[e("p",{domProps:{innerHTML:this._s(this.item.content.replace(/\r?\n/g,"<br>"))}})])},[],!1,null,null,null).exports),w={name:"JsonContentImgParser",props:{item:{type:Object,required:!0}}},M=(n(395),Object(f.a)(w,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"json-content-img-parser"},[n("img",{attrs:{src:t.$resize(t.item.url),width:t.item.width,height:t.item.height,alt:t.item.text}}),t._v(" "),t.item.text?n("p",{staticClass:"img-tip",domProps:{textContent:t._s(t.item.text)}}):t._e()])},[],!1,null,null,null).exports),O={name:"JsonContentTxtParser",props:{item:{type:Object,required:!0}}},j=(n(396),Object(f.a)(O,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"json-content-txt-parser"},[e("blockquote",{domProps:{innerHTML:this._s(this.item.text)}})])},[],!1,null,null,null).exports),E={name:"JsonContentTxtParser",props:{item:{type:Object,required:!0}}},T=(n(397),Object(f.a)(E,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"json-content-txt-parser"},[this.item.text?e("h3",{domProps:{textContent:this._s(this.item.text)}}):this._e()])},[],!1,null,null,null).exports),S=(n(55),n(83),{name:"JsonContentListParser",props:{item:{type:Object,required:!0}},computed:{list:function(){var t=this.item.text;if(!t)return[];for(;/\n\n/.test(t);)t=t.replace(/\n\n/g,"\n");return t.split("\n")}}}),P=(n(398),{name:"JsonContent",components:{TitleParser:T,TxtParser:k,ImgParser:M,UseParser:j,ListParser:Object(f.a)(S,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"json-content-list-parser"},["1"===t.item.sort?n("ol",t._l(t.list,function(li,e){return n("li",{key:e,domProps:{textContent:t._s(li)}})}),0):n("ul",t._l(t.list,function(li,e){return n("li",{key:e,domProps:{textContent:t._s(li)}})}),0)])},[],!1,null,null,null).exports},props:{content:{required:!0,type:Array},show:{type:Boolean,default:!0}}}),R={name:"ChatMessage",components:{JsonContent:Object(f.a)(P,function(){var t=this.$createElement,e=this._self._c||t;return this.show?e("div",{staticClass:"json-content"},this._l(this.content,function(t,n){return e(t.type+"-parser",{key:n,tag:"component",attrs:{item:t}})}),1):this._e()},[],!1,null,null,null).exports},props:{item:{type:Object,required:!0}}},U=(n(399),Object(f.a)(R,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"chat-message"},[e("json-content",{attrs:{content:this.item.content}})],1)},[],!1,null,null,null).exports),A=n(310),L=(n(299),n(400)),N=n(401),z={name:"VScroll",props:{probeType:{type:Number,default:1},click:{type:Boolean,default:!0},data:{type:Array,default:null},scrollX:{type:Boolean,default:!1}},watch:{data:function(){this.refresh()}},mounted:function(){var t=this;setTimeout(function(){t._initScroll()},20)},beforeDestroy:function(){this.scroll&&this.scroll.destroy()},methods:{_initScroll:function(){var t=this;this.$refs.wrapper&&(L.a.use(N.a),this.scroll=new L.a(this.$refs.wrapper,{probeType:this.probeType,click:this.click,fade:!0,scrollX:this.scrollX,scrollY:!this.scrollX,mouseWheel:{invert:!1,speed:30,easeTime:300}}),this.scroll.on("scrollEnd",function(){t.scroll.y>-50&&t.$emit("top"),t.scroll.y<=t.scroll.maxScrollY+50&&t.$emit("bottom")}))},enable:function(){this.scroll&&this.scroll.enable()},disable:function(){this.scroll&&this.scroll.disable()},refresh:function(){var t=this;return new Promise(function(e){t.$nextTick(function(){setTimeout(function(){t.scroll&&t.scroll.refresh(),t.$nextTick(function(){e()})},20)})})},scrollTo:function(){var t=this,e=arguments;setTimeout(function(){t.scroll&&t.scroll.scrollTo.apply(t.scroll,e)},0)},scrollToElement:function(){var t=this,e=arguments;setTimeout(function(){t.scroll&&t.scroll.scrollToElement.apply(t.scroll,e)},0)}}},J=(n(402),{name:"MessageRoom",components:{Scroll:Object(f.a)(z,function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"wrapper",staticClass:"scroll-warp"},[this._t("default")],2)},[],!1,null,null,null).exports,ChatRoom:$.a,UserAvatar:_.a,UserNickname:A.a},props:{mailto:{type:String,required:!0},slug:{type:String,required:!0}},data:function(){return{message:"",target:null,chatsHeight:0,stopWatcher:null}},computed:{query:function(){return{channel:this.mailto,$axios:this.$axios}},avatarComp:function(){return y},messageComps:function(){return{message:U}},computeHelperTxt:function(){return"undefined"==typeof window?"":/windows/.test(window.navigator.userAgent.toLocaleLowerCase())?"按下Ctrl+Enter换行":"按下Cmd+Enter换行"}},beforeMount:function(){this.$store.state.messageRoom[this.mailto]||this.$store.commit("INIT_MESSAGE_ROOM",this.mailto)},mounted:function(){this.initRoom()},methods:{initRoom:function(){var t=this;this.$nextTick(Object(l.a)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.$refs.room&&t.$refs.room.clearMessage(),e.next=3,t.$refs.loader.initData();case 3:return e.next=5,t.$refs.loader.loadMore({force:!0});case 5:t.clearUnreadCount(),t.watchMessageLoop();case 7:case"end":return e.stop()}},e)})))},clearUnreadCount:function(){var t=this,menu=this.$store.state.messageMenu.list.filter(function(e){return e.channel===t.mailto})[0];!menu||menu.count<=0||(this.$axios.$post("v1/message/clear_channel",{channel:this.mailto}),this.$store.commit("CLEAR_NOTIFICATION",{channel:this.mailto,count:menu.count}))},switchRoom:function(){this.stopWatcher(),this.initRoom()},watchMessageLoop:function(){var t=this,e=t.mailto;this.stopWatcher=this.$watch(function(){return t.$store.state.messageRoom[t.mailto].time},function(){if(e===t.mailto){var n=t.$store.state.messageRoom[t.mailto].data;t.$store.state.socket.isConnected&&n?t.appendMessage(n):t.$refs.loader.loadMore({force:!0}),t.screenScroll(),t.clearUnreadCount()}else this.switchRoom()})},handleScrollUp:function(){this.$refs.loader.loadBefore({force:!0})},handleMessageLoad:function(t){var e=this,data=t.data,n=t.args;this.$nextTick(function(){1===n.is_up?(data.result.map(function(t){return t}).reverse().map(function(t){e.appendMessage(t,!1)}),e.screenScroll(!1)):(data.result.map(function(t){e.appendMessage(t)}),e.screenScroll())})},screenScroll:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$refs.scroll&&this.$refs.scroll.refresh().then(function(){var n=t.$refs.room.$el.clientHeight;t.lastChatsHeight&&!e?t.$refs.scroll.scrollTo(0,t.lastChatsHeight-n):t.$refs.scroll.scrollTo(0,t.$refs.wrap.clientHeight-n),t.lastChatsHeight=n})},appendMessage:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.$refs.room.addMessage({id:t.id,type:"message",float:t.user.slug===this.slug?"right":"left",color:2===t.user.sex?{bg:"#ff6881",text:"#fff"}:{bg:"#12b7f5",text:"#fff"},data:t},e)},handleAddBubble:function(){var t=this;if(this.message.trim()){var e=[{type:"txt",content:this.message.trim()}],n=Math.random().toString(10).substring(3,6);this.appendMessage({id:n,user:this.$store.state.user,content:e,created_at:Date.now()}),this.message="",this.$axios.$post("v1/message/send",{channel:this.mailto,content:e}).then(function(e){t.$refs.room.updateMessage(n,{id:e.id}),t.$refs.loader.append(e),t.screenScroll()}).catch(function(){t.$refs.room.updateMessage(n,{status:"error"}),t.screenScroll()})}},handleNewLine:function(){this.message&&(this.message+="\n")}}}),K=(n(403),Object(f.a)(J,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"room"},[n("div",{staticClass:"room-header"},[t.target?n("user-avatar",{attrs:{user:t.target,size:36}}):t._e(),t._v(" "),t.target?n("user-nickname",{staticClass:"nickname-wrap",attrs:{user:t.target}}):t._e()],1),t._v(" "),n("no-ssr",[n("flow-loader",{ref:"loader",staticClass:"room-body",attrs:{func:"getUserMessage",type:"sinceId",sort:"asc",query:t.query,callback:t.handleMessageLoad,"cache-timeout":864e5,auto:0},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.flow;return n("div",{ref:"wrap",staticClass:"room-chats"},[n("scroll",{ref:"scroll",attrs:{data:r},on:{top:t.handleScrollUp}},[n("chat-room",{ref:"room",attrs:{"avatar-component":t.avatarComp,"message-components":t.messageComps}})],1)],1)}}])})],1),t._v(" "),n("div",{staticClass:"room-footer"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{maxlength:"500",placeholder:"say it..."},domProps:{value:t.message},on:{keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.handleAddBubble(e))},function(e){return e.ctrlKey?e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.handleAddBubble(e)):null},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.metaKey?(e.preventDefault(),t.handleNewLine(e)):null}],input:function(e){e.target.composing||(t.message=e.target.value)}}}),t._v(" "),n("div",{staticClass:"helper"},[n("span",{domProps:{textContent:t._s(t.computeHelperTxt)}}),t._v(" "),n("button",{on:{click:t.handleAddBubble}},[t._v("\n        发送\n      ")])])])],1)},[],!1,null,null,null).exports),W=n(349),B={name:"UserMessage",components:{MessageMenu:d,MessageRoom:K},mixins:[n(315).a,W.a],props:{slug:{type:String,required:!0}},computed:{mailto:function(){return this.$route.query.mailto}}},H=(n(404),Object(f.a)(B,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"user-message"}},[r("el-row",{staticClass:"column-wrap"},[r("el-col",{attrs:{span:6}},[r("message-menu",{attrs:{slug:t.slug}}),t._v("\n       \n    ")],1),t._v(" "),r("el-col",{attrs:{span:18}},[r("div",{staticClass:"room-adjust"},[t.mailto?r("message-room",{attrs:{mailto:t.mailto,slug:t.slug}}):r("div",{staticClass:"need-pick"},[r("img",{attrs:{src:n(387)}}),t._v(" "),r("p",[t._v("未选择聊天")])])],1)])],1)],1)},[],!1,null,null,null));e.default=H.exports}}]);