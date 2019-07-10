(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{264:function(t,e,n){},267:function(t,e,n){"use strict";var o={name:"UserAvatar",props:{user:{type:Object,required:!0},avatar:{type:String,default:""},size:{type:Number,default:40},disabled:{type:Boolean,default:!1}}},r=(n(269),n(11)),component=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.disabled?n("div",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"}},[n("VImg",{attrs:{radius:"50%",src:t.avatar||t.user.avatar,width:t.size,height:t.size,alt:t.user.nickname}})],1):n("NLink",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"},attrs:{to:t.$alias.user(t.user.slug),target:"_blank"}},[n("VImg",{attrs:{radius:"50%",src:t.avatar||t.user.avatar,width:t.size,height:t.size,alt:t.user.nickname}})],1)},[],!1,null,null,null);e.a=component.exports},269:function(t,e,n){"use strict";var o=n(264);n.n(o).a},273:function(t,e,n){"use strict";var o=n(2),r=n(39);e.a={beforeMount(){var t=this;return Object(o.a)(function*(){if(t.$store.state.logging){const e=t.$watch("$store.state.logging",()=>{t.$store.state.isAuth?(t.$channel.$fire("user-signed"),e()):t.$toast.error("继续操作前请先登录").then(()=>{window.location.href=t.$alias.sign()})})}else{const e=Object(r.a)();t.$store.commit("SET_USER_TOKEN",e),(yield t.$store.dispatch("initAuth"))?t.$channel.$fire("user-signed"):t.$toast.error("继续操作前请先登录").then(()=>{window.location.href=t.$alias.sign()})}})()}}},279:function(t,e,n){t.exports={h1:"h1_17sSx",h2:"h2_29h8C",h3:"h3_pcROM",h4:"h4_-wXkD",h5:"h5_3RgCW",h6:"h6_1UKhu","skeleton-loading":"skeleton-loading_3wvbo",skeletonLoading:"skeleton-loading_3wvbo",skeleton:"skeleton_3yQuF"}},280:function(t,e,n){t.exports={image:"image_2HoYb",border:"border_fvHwL",bg:"bg_OU_Qk","skeleton-loading":"skeleton-loading_W_WF0",skeletonLoading:"skeleton-loading_W_WF0",skeleton:"skeleton_3dcSj"}},281:function(t,e,n){t.exports={paragraph:"paragraph_1OWG2","skeleton-loading":"skeleton-loading_3Hgsp",skeletonLoading:"skeleton-loading_3Hgsp",skeleton:"skeleton_2H5RA"}},282:function(t,e,n){t.exports={list:"list_rxwoA","skeleton-loading":"skeleton-loading_hADmg",skeletonLoading:"skeleton-loading_hADmg",skeleton:"skeleton_3a9b2"}},283:function(t,e,n){t.exports={delimiter:"delimiter_3ksS5","skeleton-loading":"skeleton-loading_1lzJ0",skeletonLoading:"skeleton-loading_1lzJ0",skeleton:"skeleton_jIhh3"}},284:function(t,e,n){t.exports={checklist:"checklist_35Trq","skeleton-loading":"skeleton-loading_2NnRn",skeletonLoading:"skeleton-loading_2NnRn",skeleton:"skeleton_RKAJg"}},285:function(t,e,n){t.exports={link:"link_1cdqF",content:"content_31mUQ",logo:"logo_3t3p1","skeleton-loading":"skeleton-loading_Q1SbS",skeletonLoading:"skeleton-loading_Q1SbS",skeleton:"skeleton_13H0b"}},286:function(t,e,n){t.exports={video:"video_1Ktgc",wrap:"wrap_3iFmj","skeleton-loading":"skeleton-loading_DCN-u",skeletonLoading:"skeleton-loading_DCN-u",skeleton:"skeleton_1YNsK"}},287:function(t,e,n){t.exports={music:"music_1aU_y","skeleton-loading":"skeleton-loading_3yST_",skeletonLoading:"skeleton-loading_3yST_",skeleton:"skeleton_3Zagh"}},299:function(t,e,n){"use strict";n(67);e.a={beforeMount(){const t=()=>{this.$store.getters.isMine(this.$route.params.slug)||this.$router.replace({name:this.$route.name,params:{slug:this.$store.state.user.slug}})};if(this.$store.state.isAuth)return void t();const e=this.$watch("$store.state.isAuth",n=>{n&&(t(),e())})}}},306:function(t,e,n){"use strict";var o={name:"JsonHeader",props:{item:{type:Object,required:!0}},render(t){const e=this.item.data.level;return t("h"+this.item.data.level,{class:this.$style["h".concat(e)],domProps:{innerHTML:this.item.data.text}})}},r=n(334),l=n(11);var header=Object(l.a)(o,void 0,void 0,!1,function(t){this.$style=r.default.locals||r.default},null,null).exports,c={name:"JsonImage",props:{item:{type:Object,required:!0}}},h=n(335);var d=Object(l.a)(c,function(){var t,e,n=this,o=n.$createElement,r=n._self._c||o;return r("div",{class:n.$style.image},[r("div",{class:[(t={},t[n.$style.border]=n.item.data.withBorder,t),(e={},e[n.$style.bg]=n.item.data.withBackground,e)]},[r("div",[r("VImg",{attrs:{src:n.item.data.file.url,stretched:n.item.data.stretched,width:n.item.data.file.width,height:n.item.data.file.height}})],1)]),n._v(" "),n.item.data.caption?r("p",{domProps:{textContent:n._s(n.item.data.caption)}}):n._e()])},[],!1,function(t){this.$style=h.default.locals||h.default},null,null).exports,m={name:"JsonParagraph",props:{item:{type:Object,required:!0}}},f=n(336);var v=Object(l.a)(m,function(){var t=this.$createElement;return(this._self._c||t)("p",{class:this.$style.paragraph,domProps:{innerHTML:this._s(this.item.data.text.replace(/\n/g,"<br>"))}})},[],!1,function(t){this.$style=f.default.locals||f.default},null,null).exports,_={name:"JsonList",props:{item:{type:Object,required:!0}}},y=n(337);var $=Object(l.a)(_,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.list},["ordered"===t.item.data.style?n("ol",t._l(t.item.data.items,function(li,e){return n("li",{key:e,domProps:{textContent:t._s(li)}})}),0):n("ul",t._l(t.item.data.items,function(li,e){return n("li",{key:e,domProps:{textContent:t._s(li)}})}),0)])},[],!1,function(t){this.$style=y.default.locals||y.default},null,null).exports,k={name:"JsonDelimiter",props:{item:{type:Object,required:!0}}},x=n(338);var C=Object(l.a)(k,function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.$style.delimiter})},[],!1,function(t){this.$style=x.default.locals||x.default},null,null).exports,w={name:"JsonChecklist",props:{item:{type:Object,required:!0}}},M=n(339);var S=Object(l.a)(w,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{class:t.$style.checklist},t._l(t.item.data.items,function(option,e){return n("li",{key:e},[option.checked?n("i"):n("em"),t._v(" "),n("div",{domProps:{textContent:t._s(option.text)}})])}),0)},[],!1,function(t){this.$style=M.default.locals||M.default},null,null).exports,E={name:"JsonLink",props:{item:{type:Object,required:!0}}},O=n(340);var L=Object(l.a)(E,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.link},[n("a",{attrs:{target:"_blank",href:t.item.data.link}},[t.item.data.meta.image&&t.item.data.meta.image.url?n("img",{class:t.$style.logo,attrs:{src:t.item.data.meta.image.url,width:"65",height:"65"}}):t._e(),t._v(" "),n("div",{class:t.$style.content},[n("h3",{domProps:{textContent:t._s(t.item.data.meta.title)}}),t._v(" "),n("p",{staticClass:"oneline",domProps:{textContent:t._s(t.item.data.meta.description)}}),t._v(" "),n("span",{domProps:{textContent:t._s(t.item.data.link.replace(/https?:\/\//,""))}})])])])},[],!1,function(t){this.$style=O.default.locals||O.default},null,null).exports,j={name:"JsonVideo",props:{item:{type:Object,required:!0}}},T=n(341);var video=Object(l.a)(j,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.video},[n("div",{class:t.$style.wrap},[n("iframe",{attrs:{src:t.item.data.embed,scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowtransparency:"true",allowfullscreen:"true"}})]),t._v(" "),t.item.data.caption?n("p",{domProps:{textContent:t._s(t.item.data.caption)}}):t._e()])},[],!1,function(t){this.$style=T.default.locals||T.default},null,null).exports,H={name:"JsonMusic",props:{item:{type:Object,required:!0}}},R=n(342);var A=Object(l.a)(H,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:this.$style.music},[e("iframe",{attrs:{src:this.item.data.embed,scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowtransparency:"true",allowfullscreen:"true",width:"330",height:"86"}}),this._v(" "),this.item.data.caption?e("p",{domProps:{textContent:this._s(this.item.data.caption)}}):this._e()])},[],!1,function(t){this.$style=R.default.locals||R.default},null,null).exports;n(343),n(37),n(36);class D{constructor(){let{minLength:t,shareLink:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.config={org:"calibur",appendStr:"文章著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。",minLength:t||140,shareLink:e||window.location.href.split("?")[0]},this.prefix={org:"来源",link:"链接",author:"作者"}}bind(t){let{minLength:e,authorNickname:n,shareLink:o,appendStr:r}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.addEventListener("copy",t=>{const l=e||this.config.minLength,c=o||this.config.shareLink,h=r||this.config.appendStr,d=window.getSelection().getRangeAt(0),m=this.getHTMLParser("");m&&m.appendChild(d.cloneContents());const f=d.toString().trim(),v=m?m.innerHTML:this.getRangeHtml(d);if(document.createElement("div").innerHTML=v,f.length>=l){const e=this.getCopyHtml(v,c,n,h),o=this.getCopyText(f,c,n,h);void 0===t.clipboardData&&this.hack(e,d);try{t.clipboardData.setData("text/plain",o),t.clipboardData.setData("text/html",e),t.preventDefault()}catch(t){this.hack(e,d)}}})}abort(t){t.addEventListener("copy",t=>(t.stopPropagation(),t.preventDefault(),t.cancelBubble=!1,!1))}hack(text,t){const e=document.createElement("div");e.innerHTML=text,e.style.position="fixed",e.style.left="-9999px",document.body.appendChild(e),window.getSelection().selectAllChildren(e),setTimeout(()=>{try{window.getSelection().removeAllRanges(),window.getSelection().addRange(t)}catch(t){}document.body.removeChild(e)},0)}getCopyHtml(html,t,e,n){const o=this.getExtraCopyright(t,e,n).join("<br>");return"<div><div>".concat(html,"</div>").concat(o,"</div>")}getCopyText(text,t,e,n){return text+this.getExtraCopyright(t,e,n).join("\n")}getExtraCopyright(t,e,n){return e?["","","".concat(this.prefix.author,"：").concat(e),"".concat(this.prefix.link,"：").concat(t),"".concat(this.prefix.org,"：").concat(this.config.org),n]:["","","".concat(this.prefix.link,"：").concat(t),"".concat(this.prefix.org,"：").concat(this.config.org),n]}getRangeHtml(text){const div=document.createElement("div");return div.appendChild(text.cloneContents()),div.outerHTML}getHTMLParser(t){try{return(new window.DOMParser).parseFromString(t,"text/html").body}catch(e){const n=document.implementation.createHTMLDocument("");return n.body.innerHTML=t,n.body}}}var P={name:"JsonContent",components:{"v-header":header,"v-image":d,"v-paragraph":v,"v-list":$,"v-delimiter":C,"v-checklist":S,"v-link":L,"v-video":video,"v-music":A},props:{content:{required:!0,type:Array}},mounted(){(new D).bind(this.$el)}},U=Object(l.a)(P,function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"json-content"},this._l(this.content,function(t,n){return e("v-"+t.type,{key:n,tag:"component",attrs:{item:t}})}),1)},[],!1,null,null,null);e.a=U.exports},334:function(t,e,n){"use strict";var o=n(279),r=n.n(o);e.default=r.a},335:function(t,e,n){"use strict";var o=n(280),r=n.n(o);e.default=r.a},336:function(t,e,n){"use strict";var o=n(281),r=n.n(o);e.default=r.a},337:function(t,e,n){"use strict";var o=n(282),r=n.n(o);e.default=r.a},338:function(t,e,n){"use strict";var o=n(283),r=n.n(o);e.default=r.a},339:function(t,e,n){"use strict";var o=n(284),r=n.n(o);e.default=r.a},340:function(t,e,n){"use strict";var o=n(285),r=n.n(o);e.default=r.a},341:function(t,e,n){"use strict";var o=n(286),r=n.n(o);e.default=r.a},342:function(t,e,n){"use strict";var o=n(287),r=n.n(o);e.default=r.a},346:function(t,e,n){t.exports=n.p+"img/e82d3e7.png"},364:function(t,e,n){},365:function(t,e,n){},366:function(t,e,n){},367:function(t,e,n){},368:function(t,e,n){},369:function(t,e,n){},443:function(t,e,n){"use strict";var o=n(364);n.n(o).a},446:function(t,e,n){"use strict";var o=n(365);n.n(o).a},447:function(t,e,n){"use strict";var o=n(366);n.n(o).a},450:function(t,e,n){"use strict";var o=n(367);n.n(o).a},451:function(t,e,n){"use strict";var o=n(368);n.n(o).a},452:function(t,e,n){"use strict";var o=n(369);n.n(o).a},485:function(t,e,n){"use strict";n.r(e);var o=n(441),r=n.n(o),l=n(2),c=n(121),h={name:"MessageMenu",props:{slug:{type:String,required:!0}},data:()=>({menuWatcher:null,timeWatcher:null,friends:[]}),computed:{menu(){return this.$store.state.messageMenu.list}},mounted(){this.menuWatcher=this.$watch("$store.state.mailbox.unread_message_total",(t,e)=>{t>e&&!this.$store.state.socket.isConnected&&this.$store.dispatch("getMessageMenu")}),this.timeWatcher=this.$watch("$store.state.messageMenu.time",()=>{this.$store.dispatch("updateMessageMenu")}),this.$store.dispatch("updateMessageMenu"),this.menu.length&&this.$store.state.socket.isConnected||this.initChatRoom()},beforeDestroy(){this.menuWatcher&&this.menuWatcher(),this.timeWatcher&&this.timeWatcher()},methods:{initChatRoom(){var t=this;return Object(l.a)(function*(){const e=r.a.service({target:t.$el});yield t.getUserFriends(),yield t.$store.dispatch("getMessageMenu"),e.close()})()},getUserFriends(){var t=this;return Object(l.a)(function*(){const e=()=>{Object(c.getUserRelation)({$axios:t.$axios,slug:t.slug,relation:"friend"}).then(data=>{data.result.forEach(e=>t.$cache.setUserSessionStore(e)),t.friends=data.result,sessionStorage.setItem("user-friends-list",JSON.stringify(data.result))})};try{const n=sessionStorage.getItem("user-friends-list");if(!n)return void(yield e());const o=JSON.parse(n);o.forEach(e=>t.$cache.setUserSessionStore(e)),t.friends=o}catch(t){yield e()}})()},deleteChannel(t){this.$axios.$post("v1/message/delete_channel",{channel:t.channel}).then(()=>{this.$store.commit("DELETE_MESSAGE_MENU",t.channel)}).catch(()=>{})}}},d=(n(443),n(11)),m=Object(d.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"message-menu"},t._l(t.menu,function(e){return n("li",{key:e.channel},[n("NLink",{staticClass:"room-item clearfix",attrs:{to:t.$alias.user(t.$route.params.slug,"message/?mailto="+e.channel+"&name="+e.user.nickname)}},[e.user.avatar?n("VImg",{attrs:{src:e.user.avatar,width:"42",height:"42",radius:"50%",alt:e.user.nickname}}):t._e(),t._v(" "),n("div",{staticClass:"content"},[n("p",{staticClass:"nickname oneline",domProps:{textContent:t._s(e.user.nickname)}}),t._v(" "),n("div",{staticClass:"footer"},[e.count?n("div",{staticClass:"read-badge",domProps:{textContent:t._s(e.count)}}):t._e()])])],1),t._v(" "),n("div",{staticClass:"close",on:{click:function(n){return t.deleteChannel(e)}}},[t._v("\n      ×\n    ")])],1)}),0)},[],!1,null,null,null).exports,f=(n(37),n(444)),v=n.n(f),_=(n(445),{name:"ChatAvatar",components:{UserAvatar:n(267).a},props:{item:{type:Object,required:!0}},computed:{isMine(){return this.$store.state.user.slug===this.item.slug}}}),y=(n(446),Object(d.a)(_,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"chat-avatar",class:[this.isMine?"chat-avatar-mine":"chat-avatar-other"]},[e("UserAvatar",{attrs:{user:this.item,size:36}})],1)},[],!1,null,null,null).exports),$={name:"ChatMessage",components:{JsonContent:n(306).a},props:{item:{type:Object,required:!0}}},k=(n(447),Object(d.a)($,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"chat-message"},[e("JsonContent",{attrs:{content:this.item.content}})],1)},[],!1,null,null,null).exports),x=n(448),C=n(449),w={name:"VScroll",props:{probeType:{type:Number,default:1},click:{type:Boolean,default:!0},data:{type:Array,default:null},scrollX:{type:Boolean,default:!1}},watch:{data(){this.refresh()}},mounted(){setTimeout(()=>{this._initScroll()},20)},beforeDestroy(){this.scroll&&this.scroll.destroy()},methods:{_initScroll(){this.$refs.wrapper&&(x.a.use(C.a),this.scroll=new x.a(this.$refs.wrapper,{probeType:this.probeType,click:this.click,fade:!0,scrollX:this.scrollX,scrollY:!this.scrollX,mouseWheel:{invert:!1,speed:30,easeTime:300}}),this.scroll.on("scrollEnd",()=>{this.scroll.y>-50&&this.$emit("top"),this.scroll.y<=this.scroll.maxScrollY+50&&this.$emit("bottom")}))},enable(){this.scroll&&this.scroll.enable()},disable(){this.scroll&&this.scroll.disable()},refresh(){return new Promise(t=>{this.$nextTick(()=>{setTimeout(()=>{this.scroll&&this.scroll.refresh(),this.$nextTick(()=>{t()})},20)})})},scrollTo(){setTimeout(()=>{this.scroll&&this.scroll.scrollTo.apply(this.scroll,arguments)},0)},scrollToElement(){setTimeout(()=>{this.scroll&&this.scroll.scrollToElement.apply(this.scroll,arguments)},0)}}},M=(n(450),{name:"MessageRoom",components:{Scroll:Object(d.a)(w,function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"wrapper",staticClass:"scroll-warp"},[this._t("default")],2)},[],!1,null,null,null).exports,ChatRoom:v.a},props:{mailto:{type:String,required:!0},name:{type:String,required:!0},slug:{type:String,required:!0}},data:()=>({message:"",target:null,chatsHeight:0,stopWatcher:null,noMore:!1}),computed:{query(){return{channel:this.mailto,$axios:this.$axios}},avatarComp:()=>y,messageComps:()=>({message:k}),computeHelperTxt:()=>"undefined"==typeof window?"":/windows/.test(window.navigator.userAgent.toLocaleLowerCase())?"按下Ctrl+Enter换行":"按下Cmd+Enter换行"},watch:{$route(){this.initRoom()}},beforeMount(){this.$store.state.messageRoom[this.mailto]||this.$store.commit("INIT_MESSAGE_ROOM",this.mailto)},mounted(){this.initRoom()},methods:{initRoom(){var t=this;this.$nextTick(Object(l.a)(function*(){t.$refs.room&&t.$refs.room.clearMessage(),yield t.$refs.loader.initData(),yield t.$refs.loader.loadMore({force:!0}),t.clearUnreadCount(),t.watchMessageLoop()}))},clearUnreadCount(){const menu=this.$store.state.messageMenu.list.filter(t=>t.channel===this.mailto)[0];!menu||menu.count<=0||(this.$axios.$post("v1/message/clear_channel",{channel:this.mailto}),this.$store.commit("CLEAR_NOTIFICATION",{channel:this.mailto,count:menu.count}))},watchMessageLoop(){this.stopWatcher&&this.stopWatcher();const t=this,e=t.mailto;this.stopWatcher=this.$watch(function(){return t.$store.state.messageRoom[t.mailto].time},function(){if(e!==t.mailto)return void this.stopWatcher();const n=t.$store.state.messageRoom[t.mailto].data;t.$store.state.socket.isConnected&&n?t.appendMessage(n):t.$refs.loader.loadMore({force:!0}),t.screenScroll(),t.clearUnreadCount()})},handleScrollUp(){this.noMore||this.$refs.loader.loadBefore({force:!0})},handleMessageLoad(t){let{data:data,args:e}=t;0!==e.is_up||data.result.length||(this.noMore=!0),this.$nextTick(()=>{1===e.is_up?(data.result.map(t=>t).reverse().map(t=>{this.appendMessage(t,!1)}),this.screenScroll(!1)):(data.result.map(t=>{this.appendMessage(t)}),this.screenScroll())})},screenScroll(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$refs.scroll&&this.$refs.scroll.refresh().then(()=>{const e=this.$refs.room.$el.clientHeight,n=this.$refs.wrap.clientHeight;e<n||(this.lastChatsHeight&&!t?this.$refs.scroll.scrollTo(0,this.lastChatsHeight-e):this.$refs.scroll.scrollTo(0,n-e),this.lastChatsHeight=e)})},appendMessage(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.$refs.room.addMessage({id:t.id,type:"message",float:t.user.slug===this.slug?"right":"left",color:2===t.user.sex?{bg:"#ff6881",text:"#fff"}:{bg:"#12b7f5",text:"#fff"},data:t},e)},handleAddBubble(){if(!this.message.trim())return;const t=[{type:"paragraph",data:{text:this.message.trim()}}],e=Math.random().toString(10).substring(3,6);this.appendMessage({id:e,user:this.$store.state.user,content:t,created_at:Date.now()}),this.screenScroll(),this.message="",this.$axios.$post("v1/message/send",{channel:this.mailto,content:t}).then(t=>{this.$refs.room.updateMessage(e,{id:t.id}),this.$refs.loader.append(t)}).catch(()=>{this.$refs.room.updateMessage(e,{status:"error"})})},handleNewLine(){this.message&&(this.message+="\n")}}}),S=(n(451),Object(d.a)(M,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"room"},[n("div",{staticClass:"room-header"},[t._v("\n    "+t._s(t.name)+"\n  ")]),t._v(" "),n("no-ssr",[n("FlowLoader",{ref:"loader",staticClass:"room-body",attrs:{func:"getUserMessage",type:"sinceId",sort:"asc",query:t.query,callback:t.handleMessageLoad,"cache-timeout":86400,auto:0},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.flow;return n("div",{ref:"wrap",staticClass:"room-chats"},[n("Scroll",{ref:"scroll",attrs:{data:o},on:{top:t.handleScrollUp}},[n("ChatRoom",{ref:"room",attrs:{"avatar-component":t.avatarComp,"message-components":t.messageComps}})],1)],1)}}])})],1),t._v(" "),n("div",{staticClass:"room-footer"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{maxlength:"500",placeholder:"say it..."},domProps:{value:t.message},on:{keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.handleAddBubble(e))},function(e){return e.ctrlKey?e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.handleAddBubble(e)):null},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.metaKey?(e.preventDefault(),t.handleNewLine(e)):null}],input:function(e){e.target.composing||(t.message=e.target.value)}}}),t._v(" "),n("div",{staticClass:"helper"},[n("span",{domProps:{textContent:t._s(t.computeHelperTxt)}}),t._v(" "),n("button",{on:{click:t.handleAddBubble}},[t._v("\n        发送\n      ")])])])],1)},[],!1,null,null,null).exports),E=n(299),O={name:"UserMessage",components:{MessageMenu:m,MessageRoom:S},mixins:[n(273).a,E.a],props:{slug:{type:String,required:!0}},computed:{mailto(){return this.$route.query.mailto},name(){return this.$route.query.name}}},L=(n(452),Object(d.a)(O,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"user-message"}},[o("ElRow",{staticClass:"column-wrap"},[o("ElCol",{attrs:{span:6}},[o("MessageMenu",{attrs:{slug:t.slug}}),t._v("\n       \n    ")],1),t._v(" "),o("ElCol",{attrs:{span:18}},[o("div",{staticClass:"room-adjust"},[t.mailto?o("MessageRoom",{attrs:{mailto:t.mailto,name:t.name,slug:t.slug}}):o("div",{staticClass:"need-pick"},[o("img",{attrs:{src:n(346)}}),t._v(" "),o("p",[t._v("未选择聊天")])])],1)])],1)],1)},[],!1,null,null,null));e.default=L.exports}}]);