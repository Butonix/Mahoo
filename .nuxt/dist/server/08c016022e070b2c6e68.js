exports.ids=[20],exports.modules={100:function(t,e){t.exports={list:"list_rxwoA"}},101:function(t,e){t.exports={delimiter:"delimiter_3ksS5"}},102:function(t,e){t.exports={checklist:"checklist_35Trq"}},103:function(t,e){t.exports={link:"link_1cdqF",content:"content_31mUQ",logo:"logo_3t3p1"}},104:function(t,e){t.exports={video:"video_1Ktgc",wrap:"wrap_3iFmj"}},105:function(t,e){t.exports={music:"music_1aU_y"}},108:function(t,e,r){"use strict";e.a={beforeMount(){const t=()=>{this.$store.getters.isMine(this.$route.params.slug)||this.$router.replace({name:this.$route.name,params:{slug:this.$store.state.user.slug}})};if(this.$store.state.isAuth)return void t();const e=this.$watch("$store.state.isAuth",r=>{r&&(t(),e())})}}},125:function(t,e,r){"use strict";r.r(e);var n=r(97),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},126:function(t,e,r){"use strict";r.r(e);var n=r(98),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},127:function(t,e,r){"use strict";r.r(e);var n=r(99),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},128:function(t,e,r){"use strict";r.r(e);var n=r(100),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},129:function(t,e,r){"use strict";r.r(e);var n=r(101),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},130:function(t,e,r){"use strict";r.r(e);var n=r(102),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},131:function(t,e,r){"use strict";r.r(e);var n=r(103),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},132:function(t,e,r){"use strict";r.r(e);var n=r(104),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},133:function(t,e,r){"use strict";r.r(e);var n=r(105),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},141:function(t,e){},142:function(t,e){},143:function(t,e){},144:function(t,e){},145:function(t,e){},146:function(t,e){},158:function(t,e,r){"use strict";var n={name:"JsonHeader",props:{item:{type:Object,required:!0}},render:function(t){const e=this.item.data.level;return t("h"+this.item.data.level,{class:this.$style[`h${e}`],domProps:{innerHTML:this.item.data.text}})}},o=r(1);var header=Object(o.a)(n,void 0,void 0,!1,function(t){var e=r(125);e.__inject__&&e.__inject__(t),this.$style=e.locals||e},null,"0447caaa").exports,l={name:"JsonImage",props:{item:{type:Object,required:!0}}};var c=Object(o.a)(l,function(){var t,e,r=this,n=r.$createElement,o=r._self._c||n;return o("div",{class:r.$style.image},[r._ssrNode("<div"+r._ssrClass(null,[(t={},t[r.$style.border]=r.item.data.withBorder,t),(e={},e[r.$style.bg]=r.item.data.withBackground,e)])+">","</div>",[r._ssrNode("<div>","</div>",[o("v-img",{attrs:{src:r.item.data.file.url,stretched:r.item.data.stretched,width:r.item.data.file.width,height:r.item.data.file.height}})],1)]),r._ssrNode(" "+(r.item.data.caption?"<p>"+r._ssrEscape(r._s(r.item.data.caption))+"</p>":"\x3c!----\x3e"))],2)},[],!1,function(t){var e=r(126);e.__inject__&&e.__inject__(t),this.$style=e.locals||e},null,"1df9eca6").exports,d={name:"JsonParagraph",props:{item:{type:Object,required:!0}}};var h=Object(o.a)(d,function(){var t=this.$createElement;return(this._self._c||t)("p",{class:this.$style.paragraph,domProps:{innerHTML:this._s(this.item.data.text)}},[])},[],!1,function(t){var e=r(127);e.__inject__&&e.__inject__(t),this.$style=e.locals||e},null,"18788980").exports,m={name:"JsonList",props:{item:{type:Object,required:!0}}};var f=Object(o.a)(m,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.$style.list},[t._ssrNode("ordered"===t.item.data.style?"<ol>"+t._ssrList(t.item.data.items,function(li,e){return"<li>"+t._ssrEscape(t._s(li))+"</li>"})+"</ol>":"<ul>"+t._ssrList(t.item.data.items,function(li,e){return"<li>"+t._ssrEscape(t._s(li))+"</li>"})+"</ul>")])},[],!1,function(t){var e=r(128);e.__inject__&&e.__inject__(t),this.$style=e.locals||e},null,"86987c88").exports,_={name:"JsonDelimiter",props:{item:{type:Object,required:!0}}};var v=Object(o.a)(_,function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.$style.delimiter},[])},[],!1,function(t){var e=r(129);e.__inject__&&e.__inject__(t),this.$style=e.locals||e},null,"9239394e").exports,$={name:"JsonChecklist",props:{item:{type:Object,required:!0}}};var y=Object(o.a)($,function(){var t=this,e=t.$createElement;return(t._self._c||e)("ul",{class:t.$style.checklist},[t._ssrNode(t._ssrList(t.item.data.items,function(option,e){return"<li>"+(option.checked?"<i></i>":"<em></em>")+" <div>"+t._ssrEscape(t._s(option.text))+"</div></li>"}))])},[],!1,function(t){var e=r(130);e.__inject__&&e.__inject__(t),this.$style=e.locals||e},null,"169c3110").exports,x={name:"JsonLink",props:{item:{type:Object,required:!0}}};var C=Object(o.a)(x,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.$style.link},[t._ssrNode('<a target="_blank"'+t._ssrAttr("href",t.item.data.link)+">"+(t.item.data.meta.image&&t.item.data.meta.image.url?"<img"+t._ssrAttr("src",t.item.data.meta.image.url)+' width="65" height="65"'+t._ssrClass(null,t.$style.logo)+">":"\x3c!----\x3e")+" <div"+t._ssrClass(null,t.$style.content)+"><h3>"+t._ssrEscape(t._s(t.item.data.meta.title))+'</h3> <p class="oneline">'+t._ssrEscape(t._s(t.item.data.meta.description))+"</p> <span>"+t._ssrEscape(t._s(t.item.data.link.replace(/https?:\/\//,"")))+"</span></div></a>")])},[],!1,function(t){var e=r(131);e.__inject__&&e.__inject__(t),this.$style=e.locals||e},null,"98a699d0").exports,w={name:"JsonVideo",props:{item:{type:Object,required:!0}}};var video=Object(o.a)(w,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.$style.video},[t._ssrNode("<div"+t._ssrClass(null,t.$style.wrap)+"><iframe"+t._ssrAttr("src",t.item.data.embed)+' scrolling="no" border="0" frameborder="no" framespacing="0" allowtransparency="true" allowfullscreen="allowfullscreen"></iframe></div> '+(t.item.data.caption?"<p>"+t._ssrEscape(t._s(t.item.data.caption))+"</p>":"\x3c!----\x3e"))])},[],!1,function(t){var e=r(132);e.__inject__&&e.__inject__(t),this.$style=e.locals||e},null,"74cde4cd").exports,j={name:"JsonMusic",props:{item:{type:Object,required:!0}}};class k{constructor({minLength:t,shareLink:e}={}){this.config={org:"calibur",appendStr:"文章著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。",minLength:t||140,shareLink:e||window.location.href.split("?")[0]},this.prefix={org:"来源",link:"链接",author:"作者"}}bind(t,{minLength:e,authorNickname:r,shareLink:n,appendStr:o}={}){t.addEventListener("copy",t=>{const l=e||this.config.minLength,c=n||this.config.shareLink,d=o||this.config.appendStr,h=window.getSelection().getRangeAt(0),m=this.getHTMLParser("");m&&m.appendChild(h.cloneContents());const f=h.toString().trim(),_=m?m.innerHTML:this.getRangeHtml(h);if(document.createElement("div").innerHTML=_,f.length>=l){const e=this.getCopyHtml(_,c,r,d),n=this.getCopyText(f,c,r,d);void 0===t.clipboardData&&this.hack(e,h);try{t.clipboardData.setData("text/plain",n),t.clipboardData.setData("text/html",e),t.preventDefault()}catch(t){this.hack(e,h)}}})}abort(t){t.addEventListener("copy",t=>(t.stopPropagation(),t.preventDefault(),t.cancelBubble=!1,!1))}hack(text,t){const e=document.createElement("div");e.innerHTML=text,e.style.position="fixed",e.style.left="-9999px",document.body.appendChild(e),window.getSelection().selectAllChildren(e),setTimeout(()=>{try{window.getSelection().removeAllRanges(),window.getSelection().addRange(t)}catch(t){}document.body.removeChild(e)},0)}getCopyHtml(html,t,e,r){return`<div><div>${html}</div>${this.getExtraCopyright(t,e,r).join("<br>")}</div>`}getCopyText(text,t,e,r){return text+this.getExtraCopyright(t,e,r).join("\n")}getExtraCopyright(t,e,r){return e?["","",`${this.prefix.author}：${e}`,`${this.prefix.link}：${t}`,`${this.prefix.org}：${this.config.org}`,r]:["","",`${this.prefix.link}：${t}`,`${this.prefix.org}：${this.config.org}`,r]}getRangeHtml(text){const div=document.createElement("div");return div.appendChild(text.cloneContents()),div.outerHTML}getHTMLParser(t){try{return(new window.DOMParser).parseFromString(t,"text/html").body}catch(e){const r=document.implementation.createHTMLDocument("");return r.body.innerHTML=t,r.body}}}var M={name:"JsonContent",components:{"v-header":header,"v-image":c,"v-paragraph":h,"v-list":f,"v-delimiter":v,"v-checklist":y,"v-link":C,"v-video":video,"v-music":Object(o.a)(j,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.$style.music},[t._ssrNode("<iframe"+t._ssrAttr("src",t.item.data.embed)+' scrolling="no" border="0" frameborder="no" framespacing="0" allowtransparency="true" allowfullscreen="allowfullscreen" width="330" height="86"></iframe> '+(t.item.data.caption?"<p>"+t._ssrEscape(t._s(t.item.data.caption))+"</p>":"\x3c!----\x3e"))])},[],!1,function(t){var e=r(133);e.__inject__&&e.__inject__(t),this.$style=e.locals||e},null,"3c9bd977").exports},props:{content:{required:!0,type:Array}},mounted(){(new k).bind(this.$el)}},E=Object(o.a)(M,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"json-content"},this._l(this.content,function(t,r){return e("v-"+t.type,{key:r,tag:"component",attrs:{item:t}})}),1)},[],!1,null,null,"db874c02");e.a=E.exports},180:function(t,e,r){t.exports=r.p+"img/e82d3e7.png"},181:function(t,e,r){"use strict";r.r(e);var n=r(141),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},182:function(t,e){},183:function(t,e,r){"use strict";r.r(e);var n=r(142),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},184:function(t,e,r){"use strict";r.r(e);var n=r(143),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},185:function(t,e,r){"use strict";r.r(e);var n=r(144),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},186:function(t,e,r){"use strict";r.r(e);var n=r(145),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},187:function(t,e,r){"use strict";r.r(e);var n=r(146),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},200:function(t,e,r){"use strict";r.r(e);var n=r(64),o=r.n(n),l=r(29),c={name:"MessageMenu",props:{slug:{type:String,required:!0}},data:()=>({menuWatcher:null,timeWatcher:null,friends:[]}),computed:{menu(){return this.$store.state.messageMenu.list}},mounted(){this.menuWatcher=this.$watch("$store.state.mailbox.unread_message_total",(t,e)=>{t>e&&!this.$store.state.socket.isConnected&&this.$store.dispatch("getMessageMenu")}),this.timeWatcher=this.$watch("$store.state.messageMenu.time",()=>{this.$store.dispatch("updateMessageMenu")}),this.$store.dispatch("updateMessageMenu"),this.menu.length&&this.$store.state.socket.isConnected||this.initChatRoom()},beforeDestroy(){this.menuWatcher&&this.menuWatcher(),this.timeWatcher&&this.timeWatcher()},methods:{async initChatRoom(){const t=o.a.service({target:this.$el});await this.getUserFriends(),await this.$store.dispatch("getMessageMenu"),t.close()},async getUserFriends(){const t=()=>{Object(l.getUserRelation)({$axios:this.$axios,slug:this.slug,relation:"friend"}).then(data=>{data.result.forEach(t=>this.$cache.setUserSessionStore(t)),this.friends=data.result,sessionStorage.setItem("user-friends-list",JSON.stringify(data.result))})};try{const e=sessionStorage.getItem("user-friends-list");if(!e)return void await t();const r=JSON.parse(e);r.forEach(t=>this.$cache.setUserSessionStore(t)),this.friends=r}catch(e){await t()}},deleteChannel(t){this.$axios.$post("v1/message/delete_channel",{channel:t.channel}).then(()=>{this.$store.commit("DELETE_MESSAGE_MENU",t.channel)}).catch(()=>{})}}},d=r(1);var h=Object(d.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"message-menu"},t._l(t.menu,function(e){return t._ssrNode("<li>","</li>",[r("nuxt-link",{staticClass:"room-item clearfix",attrs:{to:t.$alias.user(t.$route.params.slug,"message/?mailto="+e.channel)}},[e.user.avatar?r("v-img",{attrs:{src:e.user.avatar,width:"42",height:"42",radius:"50%",alt:e.user.nickname}}):t._e(),t._v(" "),r("div",{staticClass:"content"},[r("p",{staticClass:"nickname oneline",domProps:{textContent:t._s(e.user.nickname)}}),t._v(" "),r("div",{staticClass:"footer"},[e.count?r("div",{staticClass:"read-badge",domProps:{textContent:t._s(e.count)}}):t._e()])])],1),t._ssrNode(' <div class="close">\n      ×\n    </div>')],2)}),0)},[],!1,function(t){var e=r(181);e.__inject__&&e.__inject__(t)},null,"04b91794").exports,m=r(65),f=r.n(m),_=(r(182),r(83)),v={name:"ChatAvatar",components:{UserAvatar:_.a},props:{item:{type:Object,required:!0}},computed:{isMine(){return this.$store.state.user.slug===this.item.slug}}};var $=Object(d.a)(v,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"chat-avatar",class:[this.isMine?"chat-avatar-mine":"chat-avatar-other"]},[e("user-avatar",{attrs:{user:this.item,size:36}})],1)},[],!1,function(t){var e=r(183);e.__inject__&&e.__inject__(t)},null,"630a9f70").exports,y={name:"ChatMessage",components:{JsonContent:r(158).a},props:{item:{type:Object,required:!0}}};var x=Object(d.a)(y,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"chat-message"},[e("json-content",{attrs:{content:this.item.content}})],1)},[],!1,function(t){var e=r(184);e.__inject__&&e.__inject__(t)},null,"959e5200").exports,C=r(88),w=r(66),j=r.n(w),k=r(67),M=r.n(k),E={name:"VScroll",props:{probeType:{type:Number,default:1},click:{type:Boolean,default:!0},data:{type:Array,default:null},scrollX:{type:Boolean,default:!1}},watch:{data(){this.refresh()}},mounted(){setTimeout(()=>{this._initScroll()},20)},beforeDestroy(){this.scroll&&this.scroll.destroy()},methods:{_initScroll(){this.$refs.wrapper&&(j.a.use(M.a),this.scroll=new j.a(this.$refs.wrapper,{probeType:this.probeType,click:this.click,fade:!0,scrollX:this.scrollX,scrollY:!this.scrollX,mouseWheel:{invert:!1,speed:30,easeTime:300}}),this.scroll.on("scrollEnd",()=>{this.scroll.y>-50&&this.$emit("top"),this.scroll.y<=this.scroll.maxScrollY+50&&this.$emit("bottom")}))},enable(){this.scroll&&this.scroll.enable()},disable(){this.scroll&&this.scroll.disable()},refresh(){return new Promise(t=>{this.$nextTick(()=>{setTimeout(()=>{this.scroll&&this.scroll.refresh(),this.$nextTick(()=>{t()})},20)})})},scrollTo(){setTimeout(()=>{this.scroll&&this.scroll.scrollTo.apply(this.scroll,arguments)},0)},scrollToElement(){setTimeout(()=>{this.scroll&&this.scroll.scrollToElement.apply(this.scroll,arguments)},0)}}};var S={name:"MessageRoom",components:{Scroll:Object(d.a)(E,function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"wrapper",staticClass:"scroll-warp"},[this._t("default")],2)},[],!1,function(t){var e=r(185);e.__inject__&&e.__inject__(t)},null,"2a757871").exports,ChatRoom:f.a,UserAvatar:_.a,UserNickname:C.a},props:{mailto:{type:String,required:!0},slug:{type:String,required:!0}},data:()=>({message:"",target:null,chatsHeight:0,stopWatcher:null,noMore:!1}),computed:{query(){return{channel:this.mailto,$axios:this.$axios}},avatarComp:()=>$,messageComps:()=>({message:x}),computeHelperTxt:()=>"undefined"==typeof window?"":/windows/.test(window.navigator.userAgent.toLocaleLowerCase())?"按下Ctrl+Enter换行":"按下Cmd+Enter换行"},beforeMount(){this.$store.state.messageRoom[this.mailto]||this.$store.commit("INIT_MESSAGE_ROOM",this.mailto)},mounted(){this.initRoom()},methods:{initRoom(){this.$nextTick(async()=>{this.$refs.room&&this.$refs.room.clearMessage(),await this.$refs.loader.initData(),await this.$refs.loader.loadMore({force:!0}),this.clearUnreadCount(),this.watchMessageLoop()})},clearUnreadCount(){const menu=this.$store.state.messageMenu.list.filter(t=>t.channel===this.mailto)[0];!menu||menu.count<=0||(this.$axios.$post("v1/message/clear_channel",{channel:this.mailto}),this.$store.commit("CLEAR_NOTIFICATION",{channel:this.mailto,count:menu.count}))},switchRoom(){this.stopWatcher(),this.initRoom()},watchMessageLoop(){const t=this,e=t.mailto;this.stopWatcher=this.$watch(function(){return t.$store.state.messageRoom[t.mailto].time},function(){if(e!==t.mailto)return void this.switchRoom();const r=t.$store.state.messageRoom[t.mailto].data;t.$store.state.socket.isConnected&&r?t.appendMessage(r):t.$refs.loader.loadMore({force:!0}),t.screenScroll(),t.clearUnreadCount()})},handleScrollUp(){this.noMore||this.$refs.loader.loadBefore({force:!0})},handleMessageLoad({data:data,args:t}){0!==t.is_up||data.result.length||(this.noMore=!0),this.$nextTick(()=>{1===t.is_up?(data.result.map(t=>t).reverse().map(t=>{this.appendMessage(t,!1)}),this.screenScroll(!1)):(data.result.map(t=>{this.appendMessage(t)}),this.screenScroll())})},screenScroll(t=!0){this.$refs.scroll&&this.$refs.scroll.refresh().then(()=>{const e=this.$refs.room.$el.clientHeight,r=this.$refs.wrap.clientHeight;e<r||(this.lastChatsHeight&&!t?this.$refs.scroll.scrollTo(0,this.lastChatsHeight-e):this.$refs.scroll.scrollTo(0,r-e),this.lastChatsHeight=e)})},appendMessage(t,e=!0){this.$refs.room.addMessage({id:t.id,type:"message",float:t.user.slug===this.slug?"right":"left",color:2===t.user.sex?{bg:"#ff6881",text:"#fff"}:{bg:"#12b7f5",text:"#fff"},data:t},e)},handleAddBubble(){if(!this.message.trim())return;const t=[{type:"paragraph",data:{text:this.message.trim()}}],e=Math.random().toString(10).substring(3,6);this.appendMessage({id:e,user:this.$store.state.user,content:t,created_at:Date.now()}),this.screenScroll(),this.message="",this.$axios.$post("v1/message/send",{channel:this.mailto,content:t}).then(t=>{this.$refs.room.updateMessage(e,{id:t.id}),this.$refs.loader.append(t)}).catch(()=>{this.$refs.room.updateMessage(e,{status:"error"})})},handleNewLine(){this.message&&(this.message+="\n")}}};var O=Object(d.a)(S,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"room"},[t._ssrNode('<div class="room-header">',"</div>",[t.target?r("user-avatar",{attrs:{user:t.target,size:36}}):t._e(),t._ssrNode(" "),t.target?r("user-nickname",{staticClass:"nickname-wrap",attrs:{user:t.target}}):t._e()],2),t._ssrNode(" "),r("no-ssr",[r("flow-loader",{ref:"loader",staticClass:"room-body",attrs:{func:"getUserMessage",type:"sinceId",sort:"asc",query:t.query,callback:t.handleMessageLoad,"cache-timeout":864e5,auto:0},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.flow;return r("div",{ref:"wrap",staticClass:"room-chats"},[r("scroll",{ref:"scroll",attrs:{data:n},on:{top:t.handleScrollUp}},[r("chat-room",{ref:"room",attrs:{"avatar-component":t.avatarComp,"message-components":t.messageComps}})],1)],1)}}])})],1),t._ssrNode(' <div class="room-footer"><textarea maxlength="500" placeholder="say it...">'+t._ssrEscape(t._s(t.message))+'</textarea> <div class="helper"><span>'+t._ssrEscape(t._s(t.computeHelperTxt))+"</span> <button>\n        发送\n      </button></div></div>")],2)},[],!1,function(t){var e=r(186);e.__inject__&&e.__inject__(t)},null,"174bc1b2").exports,T=r(108),L={name:"UserMessage",components:{MessageMenu:h,MessageRoom:O},mixins:[r(89).a,T.a],props:{slug:{type:String,required:!0}},computed:{mailto(){return this.$route.query.mailto}}};var N=Object(d.a)(L,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"user-message"}},[n("el-row",{staticClass:"column-wrap"},[n("el-col",{attrs:{span:6}},[n("message-menu",{attrs:{slug:t.slug}}),t._v("\n       \n    ")],1),t._v(" "),n("el-col",{attrs:{span:18}},[n("div",{staticClass:"room-adjust"},[t.mailto?n("message-room",{attrs:{mailto:t.mailto,slug:t.slug}}):n("div",{staticClass:"need-pick"},[n("img",{attrs:{src:r(180)}}),t._v(" "),n("p",[t._v("未选择聊天")])])],1)])],1)],1)},[],!1,function(t){var e=r(187);e.__inject__&&e.__inject__(t)},null,"1992ef02");e.default=N.exports},80:function(t,e){},81:function(t,e){},82:function(t,e){t.exports={title:"title_1yLHa","ic-sex":"ic-sex_19eCo",icSex:"ic-sex_19eCo","ic-level":"ic-level_3KuJr",icLevel:"ic-level_3KuJr","ic-title":"ic-title_Uq8in",icTitle:"ic-title_Uq8in"}},83:function(t,e,r){"use strict";var n={name:"UserAvatar",props:{user:{type:Object,required:!0},avatar:{type:String,default:""},size:{type:Number,default:40},disabled:{type:Boolean,default:!1}}},o=r(1);var component=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.disabled?r("div",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"}},[r("v-img",{attrs:{radius:"50%",src:t.avatar||t.user.avatar,width:t.size,height:t.size,alt:t.user.nickname}})],1):r("nuxt-link",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"},attrs:{to:t.$alias.user(t.user.slug),target:"_blank"}},[r("v-img",{attrs:{radius:"50%",src:t.avatar||t.user.avatar,width:t.size,height:t.size,alt:t.user.nickname}})],1)},[],!1,function(t){var e=r(84);e.__inject__&&e.__inject__(t)},null,"8c0ebd70");e.a=component.exports},84:function(t,e,r){"use strict";r.r(e);var n=r(80),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},85:function(t,e,r){"use strict";r.r(e);var n=r(81),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},86:function(t,e,r){"use strict";r.r(e);var n=r(82),o=r.n(n);for(var l in n)"default"!==l&&function(t){r.d(e,t,function(){return n[t]})}(l);e.default=o.a},88:function(t,e,r){"use strict";var n={name:"UserNickname",props:{user:{type:Object,required:!0},sex:{type:Number,default:0},level:{type:Boolean,default:!0},nickname:{type:String,default:""},disabled:{type:Boolean,default:!1}},computed:{sexClass(){switch(this.sex){case-1:return{name:"simi",color:"limegreen"};case 0:return{name:"unknown",color:"gold"};case 1:return{name:"nan",color:"deepskyblue"};case 2:return{name:"nv",color:"hotpink"};default:return{name:"weizhi",color:"gold"}}}}},o=r(1);var component=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"clearfix"},[t.disabled?t._ssrNode('<div class="user-nickname">',"</div>",[t._ssrNode('<div class="nickname"><p class="oneline">'+t._ssrEscape(t._s(t.nickname||t.user.nickname))+"</p></div> "+(t.sex?"<span"+t._ssrClass(null,t.$style.title)+"><i"+t._ssrClass("iconfont",[t.$style["ic-sex"],"ic-"+t.sexClass.name])+t._ssrStyle(null,{backgroundColor:t.sexClass.color},null)+"></i></span>":"\x3c!----\x3e")+" "+(t.level?"<span"+t._ssrClass(null,[t.$style.title,t.$style["ic-level"]])+">"+t._ssrEscape(t._s("Lv"+t.user.level))+"</span>":"\x3c!----\x3e")+" "+t._ssrList(t.user.roles,function(e,r){return"<span"+t._ssrClass(null,[t.$style.title,t.$style["ic-title"]])+">"+t._ssrEscape(t._s(e))+"</span>"}))],2):r("nuxt-link",{staticClass:"user-nickname",attrs:{to:t.$alias.user(t.user.slug),target:"_blank"}},[r("div",{staticClass:"nickname"},[r("p",{staticClass:"oneline",domProps:{textContent:t._s(t.nickname||t.user.nickname)}})]),t._v(" "),t.sex?r("span",{class:t.$style.title},[r("i",{staticClass:"iconfont",class:[t.$style["ic-sex"],"ic-"+t.sexClass.name],style:{backgroundColor:t.sexClass.color}})]):t._e(),t._v(" "),t.level?r("span",{class:[t.$style.title,t.$style["ic-level"]],domProps:{textContent:t._s("Lv"+t.user.level)}}):t._e(),t._v(" "),t._l(t.user.title,function(e,n){return r("span",{key:n,class:[t.$style.title,t.$style["ic-title"]],domProps:{textContent:t._s(e)}})})],2)],1)},[],!1,function(t){var e=r(85);e.__inject__&&e.__inject__(t);var n=r(86);n.__inject__&&n.__inject__(t),this.$style=n.locals||n},null,"5b0047c6");e.a=component.exports},89:function(t,e,r){"use strict";var n=r(27);e.a={async beforeMount(){if(this.$store.state.logging){const t=this.$watch("$store.state.logging",()=>{this.$store.state.isAuth?(this.$channel.$fire("user-signed"),t()):this.$toast.error("继续操作前请先登录").then(()=>{window.location.href=this.$alias.sign()})})}else{const t=Object(n.a)();this.$store.commit("SET_USER_TOKEN",t),await this.$store.dispatch("initAuth")?this.$channel.$fire("user-signed"):this.$toast.error("继续操作前请先登录").then(()=>{window.location.href=this.$alias.sign()})}}}},97:function(t,e){t.exports={h1:"h1_17sSx",h2:"h2_29h8C",h3:"h3_pcROM",h4:"h4_-wXkD",h5:"h5_3RgCW",h6:"h6_1UKhu"}},98:function(t,e){t.exports={image:"image_2HoYb",border:"border_fvHwL",bg:"bg_OU_Qk"}},99:function(t,e){t.exports={paragraph:"paragraph_1OWG2"}}};
//# sourceMappingURL=08c016022e070b2c6e68.js.map