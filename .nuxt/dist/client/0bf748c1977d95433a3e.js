(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{311:function(t,e,n){},314:function(t,e,n){"use strict";n(189);var r={name:"UserAvatar",props:{user:{type:Object,required:!0},avatar:{type:String,default:""},size:{type:Number,default:40},disabled:{type:Boolean,default:!1}}},o=(n(316),n(18)),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.disabled?n("div",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"}},[n("VImg",{attrs:{radius:"50%",src:t.avatar||t.user.avatar,width:t.size,height:t.size,alt:t.user.nickname}})],1):n("NLink",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"},attrs:{to:t.$alias.user(t.user.slug),target:"_blank"}},[n("VImg",{attrs:{radius:"50%",src:t.avatar||t.user.avatar,width:t.size,height:t.size,alt:t.user.nickname}})],1)},[],!1,null,null,null);e.a=component.exports},316:function(t,e,n){"use strict";var r=n(311);n.n(r).a},320:function(t,e,n){"use strict";n(19);var r=n(2),o=n(60);e.a={beforeMount:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){var e,n,r=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.$store.state.logging){t.next=4;break}e=this.$watch("$store.state.logging",function(){r.$store.state.isAuth?(r.$channel.$fire("user-signed"),e()):r.$toast.error("继续操作前请先登录").then(function(){window.location.href=r.$alias.sign()})}),t.next=10;break;case 4:return n=Object(o.a)(),this.$store.commit("SET_USER_TOKEN",n),t.next=8,this.$store.dispatch("initAuth");case 8:t.sent?this.$channel.$fire("user-signed"):this.$toast.error("继续操作前请先登录").then(function(){window.location.href=r.$alias.sign()});case 10:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},326:function(t,e,n){t.exports={h1:"h1_17sSx",h2:"h2_29h8C",h3:"h3_pcROM",h4:"h4_-wXkD",h5:"h5_3RgCW",h6:"h6_1UKhu"}},327:function(t,e,n){t.exports={image:"image_2HoYb",border:"border_fvHwL",bg:"bg_OU_Qk"}},328:function(t,e,n){t.exports={paragraph:"paragraph_1OWG2"}},329:function(t,e,n){t.exports={list:"list_rxwoA"}},330:function(t,e,n){t.exports={delimiter:"delimiter_3ksS5"}},331:function(t,e,n){t.exports={checklist:"checklist_35Trq"}},332:function(t,e,n){t.exports={link:"link_1cdqF",content:"content_31mUQ",logo:"logo_3t3p1"}},333:function(t,e,n){t.exports={video:"video_1Ktgc",wrap:"wrap_3iFmj"}},334:function(t,e,n){t.exports={music:"music_1aU_y"}},346:function(t,e,n){"use strict";n(33),n(93);e.a={beforeMount:function(){var t=this,e=function(){t.$store.getters.isMine(t.$route.params.slug)||t.$router.replace({name:t.$route.name,params:{slug:t.$store.state.user.slug}})};if(this.$store.state.isAuth)e();else var n=this.$watch("$store.state.isAuth",function(t){t&&(e(),n())})}}},353:function(t,e,n){"use strict";var r={name:"JsonHeader",props:{item:{type:Object,required:!0}},render:function(t){var e=this.item.data.level;return t("h"+this.item.data.level,{class:this.$style["h".concat(e)],domProps:{innerHTML:this.item.data.text}})}},o=n(380),l=n(18);var header=Object(l.a)(r,void 0,void 0,!1,function(t){this.$style=o.default.locals||o.default},null,null).exports,c={name:"JsonImage",props:{item:{type:Object,required:!0}}},h=n(381);var d=Object(l.a)(c,function(){var t,e,n=this,r=n.$createElement,o=n._self._c||r;return o("div",{class:n.$style.image},[o("div",{class:[(t={},t[n.$style.border]=n.item.data.withBorder,t),(e={},e[n.$style.bg]=n.item.data.withBackground,e)]},[o("div",[o("VImg",{attrs:{src:n.item.data.file.url,stretched:n.item.data.stretched,width:n.item.data.file.width,height:n.item.data.file.height}})],1)]),n._v(" "),n.item.data.caption?o("p",{domProps:{textContent:n._s(n.item.data.caption)}}):n._e()])},[],!1,function(t){this.$style=h.default.locals||h.default},null,null).exports,m={name:"JsonParagraph",props:{item:{type:Object,required:!0}}},f=n(382);var v=Object(l.a)(m,function(){var t=this.$createElement;return(this._self._c||t)("p",{class:this.$style.paragraph,domProps:{innerHTML:this._s(this.item.data.text.replace(/\n/g,"<br>"))}})},[],!1,function(t){this.$style=f.default.locals||f.default},null,null).exports,y={name:"JsonList",props:{item:{type:Object,required:!0}}},$=n(383);var _=Object(l.a)(y,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.list},["ordered"===t.item.data.style?n("ol",t._l(t.item.data.items,function(li,e){return n("li",{key:e,domProps:{textContent:t._s(li)}})}),0):n("ul",t._l(t.item.data.items,function(li,e){return n("li",{key:e,domProps:{textContent:t._s(li)}})}),0)])},[],!1,function(t){this.$style=$.default.locals||$.default},null,null).exports,x={name:"JsonDelimiter",props:{item:{type:Object,required:!0}}},w=n(384);var k=Object(l.a)(x,function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.$style.delimiter})},[],!1,function(t){this.$style=w.default.locals||w.default},null,null).exports,C={name:"JsonChecklist",props:{item:{type:Object,required:!0}}},M=n(385);var O=Object(l.a)(C,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{class:t.$style.checklist},t._l(t.item.data.items,function(option,e){return n("li",{key:e},[option.checked?n("i"):n("em"),t._v(" "),n("div",{domProps:{textContent:t._s(option.text)}})])}),0)},[],!1,function(t){this.$style=M.default.locals||M.default},null,null).exports,E={name:"JsonLink",props:{item:{type:Object,required:!0}}},S=n(386);var j=Object(l.a)(E,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.link},[n("a",{attrs:{target:"_blank",href:t.item.data.link}},[t.item.data.meta.image&&t.item.data.meta.image.url?n("img",{class:t.$style.logo,attrs:{src:t.item.data.meta.image.url,width:"65",height:"65"}}):t._e(),t._v(" "),n("div",{class:t.$style.content},[n("h3",{domProps:{textContent:t._s(t.item.data.meta.title)}}),t._v(" "),n("p",{staticClass:"oneline",domProps:{textContent:t._s(t.item.data.meta.description)}}),t._v(" "),n("span",{domProps:{textContent:t._s(t.item.data.link.replace(/https?:\/\//,""))}})])])])},[],!1,function(t){this.$style=S.default.locals||S.default},null,null).exports,T={name:"JsonVideo",props:{item:{type:Object,required:!0}}},L=n(387);var video=Object(l.a)(T,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.video},[n("div",{class:t.$style.wrap},[n("iframe",{attrs:{src:t.item.data.embed,scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowtransparency:"true",allowfullscreen:"true"}})]),t._v(" "),t.item.data.caption?n("p",{domProps:{textContent:t._s(t.item.data.caption)}}):t._e()])},[],!1,function(t){this.$style=L.default.locals||L.default},null,null).exports,R={name:"JsonMusic",props:{item:{type:Object,required:!0}}},H=n(388);var A=Object(l.a)(R,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:this.$style.music},[e("iframe",{attrs:{src:this.item.data.embed,scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowtransparency:"true",allowfullscreen:"true",width:"330",height:"86"}}),this._v(" "),this.item.data.caption?e("p",{domProps:{textContent:this._s(this.item.data.caption)}}):this._e()])},[],!1,function(t){this.$style=H.default.locals||H.default},null,null).exports,P=(n(389),n(56),n(57),n(6),n(55),n(138)),U=n(139),D=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.minLength,r=e.shareLink;Object(P.a)(this,t),this.config={org:"calibur",appendStr:"文章著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。",minLength:n||140,shareLink:r||window.location.href.split("?")[0]},this.prefix={org:"来源",link:"链接",author:"作者"}}return Object(U.a)(t,[{key:"bind",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.minLength,o=n.authorNickname,l=n.shareLink,c=n.appendStr;t.addEventListener("copy",function(t){var n=r||e.config.minLength,h=l||e.config.shareLink,d=c||e.config.appendStr,m=window.getSelection().getRangeAt(0),f=e.getHTMLParser("");f&&f.appendChild(m.cloneContents());var v=m.toString().trim(),y=f?f.innerHTML:e.getRangeHtml(m);if(document.createElement("div").innerHTML=y,v.length>=n){var $=e.getCopyHtml(y,h,o,d),_=e.getCopyText(v,h,o,d);void 0===t.clipboardData&&e.hack($,m);try{t.clipboardData.setData("text/plain",_),t.clipboardData.setData("text/html",$),t.preventDefault()}catch(t){e.hack($,m)}}})}},{key:"abort",value:function(t){t.addEventListener("copy",function(t){return t.stopPropagation(),t.preventDefault(),t.cancelBubble=!1,!1})}},{key:"hack",value:function(text,t){var e=document.createElement("div");e.innerHTML=text,e.style.position="fixed",e.style.left="-9999px",document.body.appendChild(e),window.getSelection().selectAllChildren(e),setTimeout(function(){try{window.getSelection().removeAllRanges(),window.getSelection().addRange(t)}catch(t){}document.body.removeChild(e)},0)}},{key:"getCopyHtml",value:function(html,t,e,n){var r=this.getExtraCopyright(t,e,n).join("<br>");return"<div><div>".concat(html,"</div>").concat(r,"</div>")}},{key:"getCopyText",value:function(text,t,e,n){return text+this.getExtraCopyright(t,e,n).join("\n")}},{key:"getExtraCopyright",value:function(t,e,n){return e?["","","".concat(this.prefix.author,"：").concat(e),"".concat(this.prefix.link,"：").concat(t),"".concat(this.prefix.org,"：").concat(this.config.org),n]:["","","".concat(this.prefix.link,"：").concat(t),"".concat(this.prefix.org,"：").concat(this.config.org),n]}},{key:"getRangeHtml",value:function(text){var div=document.createElement("div");return div.appendChild(text.cloneContents()),div.outerHTML}},{key:"getHTMLParser",value:function(t){try{return(new window.DOMParser).parseFromString(t,"text/html").body}catch(n){var e=document.implementation.createHTMLDocument("");return e.body.innerHTML=t,e.body}}}]),t}(),J={name:"JsonContent",components:{"v-header":header,"v-image":d,"v-paragraph":v,"v-list":_,"v-delimiter":k,"v-checklist":O,"v-link":j,"v-video":video,"v-music":A},props:{content:{required:!0,type:Array}},mounted:function(){(new D).bind(this.$el)}},W=Object(l.a)(J,function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"json-content"},this._l(this.content,function(t,n){return e("v-"+t.type,{key:n,tag:"component",attrs:{item:t}})}),1)},[],!1,null,null,null);e.a=W.exports},380:function(t,e,n){"use strict";var r=n(326),o=n.n(r);e.default=o.a},381:function(t,e,n){"use strict";var r=n(327),o=n.n(r);e.default=o.a},382:function(t,e,n){"use strict";var r=n(328),o=n.n(r);e.default=o.a},383:function(t,e,n){"use strict";var r=n(329),o=n.n(r);e.default=o.a},384:function(t,e,n){"use strict";var r=n(330),o=n.n(r);e.default=o.a},385:function(t,e,n){"use strict";var r=n(331),o=n.n(r);e.default=o.a},386:function(t,e,n){"use strict";var r=n(332),o=n.n(r);e.default=o.a},387:function(t,e,n){"use strict";var r=n(333),o=n.n(r);e.default=o.a},388:function(t,e,n){"use strict";var r=n(334),o=n.n(r);e.default=o.a},392:function(t,e,n){t.exports=n.p+"img/e82d3e7.png"},410:function(t,e,n){},411:function(t,e,n){},412:function(t,e,n){},413:function(t,e,n){},414:function(t,e,n){},415:function(t,e,n){},492:function(t,e,n){"use strict";var r=n(410);n.n(r).a},495:function(t,e,n){"use strict";var r=n(411);n.n(r).a},496:function(t,e,n){"use strict";var r=n(412);n.n(r).a},499:function(t,e,n){"use strict";var r=n(413);n.n(r).a},500:function(t,e,n){"use strict";var r=n(414);n.n(r).a},501:function(t,e,n){"use strict";var r=n(415);n.n(r).a},542:function(t,e,n){"use strict";n.r(e);n(33);var r=n(490),o=n.n(r),l=(n(19),n(2)),c=n(159),h={name:"MessageMenu",props:{slug:{type:String,required:!0}},data:function(){return{menuWatcher:null,timeWatcher:null,friends:[]}},computed:{menu:function(){return this.$store.state.messageMenu.list}},mounted:function(){var t=this;this.menuWatcher=this.$watch("$store.state.mailbox.unread_message_total",function(e,n){e>n&&!t.$store.state.socket.isConnected&&t.$store.dispatch("getMessageMenu")}),this.timeWatcher=this.$watch("$store.state.messageMenu.time",function(){t.$store.dispatch("updateMessageMenu")}),this.$store.dispatch("updateMessageMenu"),this.menu.length&&this.$store.state.socket.isConnected||this.initChatRoom()},beforeDestroy:function(){this.menuWatcher&&this.menuWatcher(),this.timeWatcher&&this.timeWatcher()},methods:{initChatRoom:function(){var t=Object(l.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=o.a.service({target:this.$el}),t.next=3,this.getUserFriends();case 3:return t.next=5,this.$store.dispatch("getMessageMenu");case 5:e.close();case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),getUserFriends:function(){var t=Object(l.a)(regeneratorRuntime.mark(function t(){var e,n,r,o=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=function(){Object(c.getUserRelation)({$axios:o.$axios,slug:o.slug,relation:"friend"}).then(function(data){data.result.forEach(function(t){return o.$cache.setUserSessionStore(t)}),o.friends=data.result,sessionStorage.setItem("user-friends-list",JSON.stringify(data.result))})},t.prev=1,n=sessionStorage.getItem("user-friends-list")){t.next=7;break}return t.next=6,e();case 6:return t.abrupt("return");case 7:(r=JSON.parse(n)).forEach(function(t){return o.$cache.setUserSessionStore(t)}),this.friends=r,t.next=16;break;case 12:return t.prev=12,t.t0=t.catch(1),t.next=16,e();case 16:case"end":return t.stop()}},t,this,[[1,12]])}));return function(){return t.apply(this,arguments)}}(),deleteChannel:function(t){var e=this;this.$axios.$post("v1/message/delete_channel",{channel:t.channel}).then(function(){e.$store.commit("DELETE_MESSAGE_MENU",t.channel)}).catch(function(){})}}},d=(n(492),n(18)),m=Object(d.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"message-menu"},t._l(t.menu,function(e){return n("li",{key:e.channel},[n("NLink",{staticClass:"room-item clearfix",attrs:{to:t.$alias.user(t.$route.params.slug,"message/?mailto="+e.channel+"&name="+e.user.nickname)}},[e.user.avatar?n("VImg",{attrs:{src:e.user.avatar,width:"42",height:"42",radius:"50%",alt:e.user.nickname}}):t._e(),t._v(" "),n("div",{staticClass:"content"},[n("p",{staticClass:"nickname oneline",domProps:{textContent:t._s(e.user.nickname)}}),t._v(" "),n("div",{staticClass:"footer"},[e.count?n("div",{staticClass:"read-badge",domProps:{textContent:t._s(e.count)}}):t._e()])])],1),t._v(" "),n("div",{staticClass:"close",on:{click:function(n){return t.deleteChannel(e)}}},[t._v("\n      ×\n    ")])],1)}),0)},[],!1,null,null,null).exports,f=(n(56),n(57),n(6),n(493)),v=n.n(f),y=(n(494),{name:"ChatAvatar",components:{UserAvatar:n(314).a},props:{item:{type:Object,required:!0}},computed:{isMine:function(){return this.$store.state.user.slug===this.item.slug}}}),$=(n(495),Object(d.a)(y,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"chat-avatar",class:[this.isMine?"chat-avatar-mine":"chat-avatar-other"]},[e("UserAvatar",{attrs:{user:this.item,size:36}})],1)},[],!1,null,null,null).exports),_={name:"ChatMessage",components:{JsonContent:n(353).a},props:{item:{type:Object,required:!0}}},x=(n(496),Object(d.a)(_,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"chat-message"},[e("JsonContent",{attrs:{content:this.item.content}})],1)},[],!1,null,null,null).exports),w=(n(189),n(497)),k=n(498),C={name:"VScroll",props:{probeType:{type:Number,default:1},click:{type:Boolean,default:!0},data:{type:Array,default:null},scrollX:{type:Boolean,default:!1}},watch:{data:function(){this.refresh()}},mounted:function(){var t=this;setTimeout(function(){t._initScroll()},20)},beforeDestroy:function(){this.scroll&&this.scroll.destroy()},methods:{_initScroll:function(){var t=this;this.$refs.wrapper&&(w.a.use(k.a),this.scroll=new w.a(this.$refs.wrapper,{probeType:this.probeType,click:this.click,fade:!0,scrollX:this.scrollX,scrollY:!this.scrollX,mouseWheel:{invert:!1,speed:30,easeTime:300}}),this.scroll.on("scrollEnd",function(){t.scroll.y>-50&&t.$emit("top"),t.scroll.y<=t.scroll.maxScrollY+50&&t.$emit("bottom")}))},enable:function(){this.scroll&&this.scroll.enable()},disable:function(){this.scroll&&this.scroll.disable()},refresh:function(){var t=this;return new Promise(function(e){t.$nextTick(function(){setTimeout(function(){t.scroll&&t.scroll.refresh(),t.$nextTick(function(){e()})},20)})})},scrollTo:function(){var t=this,e=arguments;setTimeout(function(){t.scroll&&t.scroll.scrollTo.apply(t.scroll,e)},0)},scrollToElement:function(){var t=this,e=arguments;setTimeout(function(){t.scroll&&t.scroll.scrollToElement.apply(t.scroll,e)},0)}}},M=(n(499),{name:"MessageRoom",components:{Scroll:Object(d.a)(C,function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"wrapper",staticClass:"scroll-warp"},[this._t("default")],2)},[],!1,null,null,null).exports,ChatRoom:v.a},props:{mailto:{type:String,required:!0},name:{type:String,required:!0},slug:{type:String,required:!0}},data:function(){return{message:"",target:null,chatsHeight:0,stopWatcher:null,noMore:!1}},computed:{query:function(){return{channel:this.mailto,$axios:this.$axios}},avatarComp:function(){return $},messageComps:function(){return{message:x}},computeHelperTxt:function(){return"undefined"==typeof window?"":/windows/.test(window.navigator.userAgent.toLocaleLowerCase())?"按下Ctrl+Enter换行":"按下Cmd+Enter换行"}},watch:{$route:function(){this.initRoom()}},beforeMount:function(){this.$store.state.messageRoom[this.mailto]||this.$store.commit("INIT_MESSAGE_ROOM",this.mailto)},mounted:function(){this.initRoom()},methods:{initRoom:function(){var t=this;this.$nextTick(Object(l.a)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.$refs.room&&t.$refs.room.clearMessage(),e.next=3,t.$refs.loader.initData();case 3:return e.next=5,t.$refs.loader.loadMore({force:!0});case 5:t.clearUnreadCount(),t.watchMessageLoop();case 7:case"end":return e.stop()}},e)})))},clearUnreadCount:function(){var t=this,menu=this.$store.state.messageMenu.list.filter(function(e){return e.channel===t.mailto})[0];!menu||menu.count<=0||(this.$axios.$post("v1/message/clear_channel",{channel:this.mailto}),this.$store.commit("CLEAR_NOTIFICATION",{channel:this.mailto,count:menu.count}))},watchMessageLoop:function(){this.stopWatcher&&this.stopWatcher();var t=this,e=t.mailto;this.stopWatcher=this.$watch(function(){return t.$store.state.messageRoom[t.mailto].time},function(){if(e===t.mailto){var n=t.$store.state.messageRoom[t.mailto].data;t.$store.state.socket.isConnected&&n?t.appendMessage(n):t.$refs.loader.loadMore({force:!0}),t.screenScroll(),t.clearUnreadCount()}else this.stopWatcher()})},handleScrollUp:function(){this.noMore||this.$refs.loader.loadBefore({force:!0})},handleMessageLoad:function(t){var e=this,data=t.data,n=t.args;0!==n.is_up||data.result.length||(this.noMore=!0),this.$nextTick(function(){1===n.is_up?(data.result.map(function(t){return t}).reverse().map(function(t){e.appendMessage(t,!1)}),e.screenScroll(!1)):(data.result.map(function(t){e.appendMessage(t)}),e.screenScroll())})},screenScroll:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$refs.scroll&&this.$refs.scroll.refresh().then(function(){var n=t.$refs.room.$el.clientHeight,r=t.$refs.wrap.clientHeight;n<r||(t.lastChatsHeight&&!e?t.$refs.scroll.scrollTo(0,t.lastChatsHeight-n):t.$refs.scroll.scrollTo(0,r-n),t.lastChatsHeight=n)})},appendMessage:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.$refs.room.addMessage({id:t.id,type:"message",float:t.user.slug===this.slug?"right":"left",color:2===t.user.sex?{bg:"#ff6881",text:"#fff"}:{bg:"#12b7f5",text:"#fff"},data:t},e)},handleAddBubble:function(){var t=this;if(this.message.trim()){var e=[{type:"paragraph",data:{text:this.message.trim()}}],n=Math.random().toString(10).substring(3,6);this.appendMessage({id:n,user:this.$store.state.user,content:e,created_at:Date.now()}),this.screenScroll(),this.message="",this.$axios.$post("v1/message/send",{channel:this.mailto,content:e}).then(function(e){t.$refs.room.updateMessage(n,{id:e.id}),t.$refs.loader.append(e)}).catch(function(){t.$refs.room.updateMessage(n,{status:"error"})})}},handleNewLine:function(){this.message&&(this.message+="\n")}}}),O=(n(500),Object(d.a)(M,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"room"},[n("div",{staticClass:"room-header"},[t._v("\n    "+t._s(t.name)+"\n  ")]),t._v(" "),n("no-ssr",[n("FlowLoader",{ref:"loader",staticClass:"room-body",attrs:{func:"getUserMessage",type:"sinceId",sort:"asc",query:t.query,callback:t.handleMessageLoad,"cache-timeout":86400,auto:0},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.flow;return n("div",{ref:"wrap",staticClass:"room-chats"},[n("Scroll",{ref:"scroll",attrs:{data:r},on:{top:t.handleScrollUp}},[n("ChatRoom",{ref:"room",attrs:{"avatar-component":t.avatarComp,"message-components":t.messageComps}})],1)],1)}}])})],1),t._v(" "),n("div",{staticClass:"room-footer"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{maxlength:"500",placeholder:"say it..."},domProps:{value:t.message},on:{keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.handleAddBubble(e))},function(e){return e.ctrlKey?e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.handleAddBubble(e)):null},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.metaKey?(e.preventDefault(),t.handleNewLine(e)):null}],input:function(e){e.target.composing||(t.message=e.target.value)}}}),t._v(" "),n("div",{staticClass:"helper"},[n("span",{domProps:{textContent:t._s(t.computeHelperTxt)}}),t._v(" "),n("button",{on:{click:t.handleAddBubble}},[t._v("\n        发送\n      ")])])])],1)},[],!1,null,null,null).exports),E=n(346),S={name:"UserMessage",components:{MessageMenu:m,MessageRoom:O},mixins:[n(320).a,E.a],props:{slug:{type:String,required:!0}},computed:{mailto:function(){return this.$route.query.mailto},name:function(){return this.$route.query.name}}},j=(n(501),Object(d.a)(S,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"user-message"}},[r("ElRow",{staticClass:"column-wrap"},[r("ElCol",{attrs:{span:6}},[r("MessageMenu",{attrs:{slug:t.slug}}),t._v("\n       \n    ")],1),t._v(" "),r("ElCol",{attrs:{span:18}},[r("div",{staticClass:"room-adjust"},[t.mailto?r("MessageRoom",{attrs:{mailto:t.mailto,name:t.name,slug:t.slug}}):r("div",{staticClass:"need-pick"},[r("img",{attrs:{src:n(392)}}),t._v(" "),r("p",[t._v("未选择聊天")])])],1)])],1)],1)},[],!1,null,null,null));e.default=j.exports}}]);