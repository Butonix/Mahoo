/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{294:function(t,e,n){},295:function(t,e,n){"use strict";var r=n(3),o=n(20),l=n(27),c=n(181),d=n(80),f=n(10),m=n(81).f,h=n(127).f,v=n(11).f,_=n(298).trim,y=r.Number,C=y,x=y.prototype,w="Number"==l(n(126)(x)),E="trim"in String.prototype,O=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,l=(e=E?e.trim():_(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,c=e.slice(2),i=0,f=c.length;i<f;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,r)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof y&&(w?f(function(){x.valueOf.call(n)}):"Number"!=l(n))?c(new C(O(e)),n,y):O(e)};for(var N,S=n(7)?m(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),M=0;S.length>M;M++)o(C,N=S[M])&&!o(y,N)&&v(y,N,h(C,N));y.prototype=x,x.constructor=y,n(12)(r,"Number",y)}},298:function(t,e,n){var r=n(9),o=n(26),l=n(10),c=n(299),d="["+c+"]",f=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),h=function(t,e,n){var o={},d=l(function(){return!!c[t]()||"​"!="​"[t]()}),f=o[t]=d?e(v):c[t];n&&(o[n]=f),r(r.P+r.F*d,"String",o)},v=h.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(m,"")),t};t.exports=h},299:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},314:function(t,e,n){"use strict";var r=n(294);n.n(r).a},319:function(t,e,n){},320:function(t,e,n){},331:function(t,e,n){"use strict";n(295);var r={name:"UserAvatar",props:{user:{type:Object,required:!0},avatar:{type:String,default:""},size:{type:Number,default:40}}},o=(n(314),n(25)),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nuxt-link",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"},attrs:{to:t.$alias.user(t.user.slug)}},[n("img",{staticClass:"avatar",attrs:{src:t.$resize(t.avatar||t.user.avatar,{width:t.size}),alt:t.user.nickname}})])},[],!1,null,null,null);e.a=component.exports},357:function(t,e,n){"undefined"!=typeof self&&self,t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="fb15")}({"09b1":function(t,e,n){"use strict";var r=n("b242"),i=n.n(r);i.a},5870:function(t,e,n){},"7f7f":function(t,e,n){"use strict";var r=n("5870"),i=n.n(r);i.a},9520:function(t,e,n){"use strict";var r=n("da2c"),i=n.n(r);i.a},b242:function(t,e,n){},da2c:function(t,e,n){},f6fd:function(t,e){!function(t){var e="currentScript",n=t.getElementsByTagName("script");e in t||Object.defineProperty(t,e,{get:function(){try{throw new Error}catch(r){var t,e=(/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(r.stack)||[!1])[1];for(t in n)if(n[t].src==e||"interactive"==n[t].readyState)return n[t];return null}}})}(document)},fb15:function(t,e,n){"use strict";var r;n.r(e),"undefined"!=typeof window&&(n("f6fd"),(r=window.document.currentScript)&&(r=r.src.match(/(.+\/)[^\/]+\.js(\?.*)?$/))&&(n.p=r[1]));var o={name:"LoadingMsg"};function l(t,e,n,r,i,s,o,a){var l,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=l):i&&(l=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(t,e){return l.call(e),c(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:u}}n("7f7f");var p=l(o,function(){var t=this;return t.$createElement,t._self._c,t._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loading-msg"},[e("i",{staticClass:"dot"}),e("i",{staticClass:"dot"}),e("i",{staticClass:"dot"})])}],!1,null,null,null),c=p.exports,g={name:"MsgBubble",components:{LoadingMsg:c},props:{color:{type:Object,required:!0},float:{type:String,required:!0,validator:function(t){return~["left","right"].indexOf(t)}},loading:{type:Boolean,required:!0}},computed:{wrapperStyle:function(){return{backgroundColor:this.color.bg,color:this.color.text}}}},d=g,f=(n("9520"),l(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"msg-box",class:"msg-box-"+t.float},[n("div",{staticClass:"msg-avatar"},[t._t("avatar")],2),n("div",{staticClass:"msg-body"},[t._t("header"),n("div",{staticClass:"msg-bubble",style:t.wrapperStyle},[t.loading?t._t("loading",[n("loading-msg")]):t._e(),n("span",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}]},[t._t("default")],2)],2),t._t("footer")],2)])},[],!1,null,null,null)),m=f.exports,h={name:"TextMsg",props:{item:{type:Object,required:!0}}},v=h,_=l(v,function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"text-msg",domProps:{innerHTML:t._s(t.item.content)}})},[],!1,null,null,null),y=_.exports,C={name:"ChatRoom",components:{Bubble:m},props:{avatarComponent:{type:Object,default:null},loadingComponent:{type:Object,default:null},messageComponents:{type:Object,default:function(){}},widgetComponents:{type:Object,default:function(){}},headerComponents:{type:Object,default:function(){}},footerComponents:{type:Object,default:function(){}},colors:{type:Array,default:function(){return[{bg:"#12b7f5",text:"#fff"},{bg:"#ff8eb3",text:"#fff"}]}}},data:function(){return{list:[],last_pending_id:0,resolver:null}},computed:{msgTypes:function(){return Object.assign({"text-msg":y},this.messageComponents)}},methods:{addMessage:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=t.type||"text-msg",r=t.id||Math.random().toString(10).substring(3,6),i=t.footer||"",s=t.header||"",o=t.loading||!1,a=t.pending||!1,l={id:r,isBubble:!0,message:this.msgTypes[n],header:s?this.headerComponents[s]:null,footer:i?this.footerComponents[i]:null,float:t.float||"left",color:this._computeBubbleColor(t),loading:o,item:t.data,next:null};e?this.list.push(l):this.list.unshift(l),o||a||this._handleResolve(t.data),a&&(this.last_pending_id=r,this._setResolve())},addWidget:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=t.type||"divide-line",r=t.id||Math.random().toString(10).substring(3,6),i={id:r,isBubble:!1,message:this.widgetComponents[n],item:t.data};e?this.list.push(i):this.list.unshift(i)},_setResolve:function(){var t=this;setTimeout(function(){t.last_pending_id&&t.list.forEach(function(e,n){e.id===t.last_pending_id&&(t.list[n].next=new Promise(function(e){t.resolver=e}))})},0)},_handleResolve:function(t){this.last_pending_id&&(this.resolver(t),this._setResolve())},_handleMsgLoaded:function(t){this.list[t].loading=!1,this.list[t].next||this._handleResolve(this.list[t].item)},_handleMsgResolve:function(t){this.last_pending_id===t&&(this.last_pending_id=0,this.resolver=null)},_computeBubbleColor:function(t){return t.color?t.color:t.data&&t.data.user&&t.data.user.id?this.colors[t.data.user.id%this.colors.length]:this.colors[t.id%this.colors.length]}}},x=C,w=(n("09b1"),l(x,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition-group",{staticClass:"chat-room",attrs:{tag:"div",name:"msg-fade"}},[t._l(t.list,function(e,r){return[e.isBubble?n("Bubble",{key:r+"-"+e.id,attrs:{color:e.color,loading:e.loading,float:e.float}},[t.avatarComponent&&e.item.user?n(t.avatarComponent,{tag:"component",attrs:{slot:"avatar",item:e.item.user},slot:"avatar"}):t._e(),e.header&&e.item.user?n(e.header,{tag:"component",attrs:{slot:"header",item:e.item.user},slot:"header"}):t._e(),t.loadingComponent?n(t.loadingComponent,{tag:"component",attrs:{slot:"loading"},slot:"loading"}):t._e(),n(e.message,{key:e.id,tag:"component",attrs:{item:e.item,next:e.next},on:{loaded:function(e){return t._handleMsgLoaded(r)},resolve:function(n){return t._handleMsgResolve(e.id)}}}),e.footer?n(e.footer,{tag:"component",attrs:{slot:"footer",item:e.item},slot:"footer"}):t._e()],1):n(e.message,{key:e.id,tag:"component",attrs:{item:e.item}})]})],2)},[],!1,null,null,null)),E=w.exports;e.default=E}}).default},358:function(t,e,n){},359:function(t,e,n){"use strict";var r=n(319);n.n(r).a},360:function(t,e,n){"use strict";var r=n(320);n.n(r).a},376:function(t,e,n){"use strict";n.r(e);n(77),n(123),n(124),n(16);var r=n(357),o=n.n(r),l=(n(358),{name:"ChatAvatar",components:{UserAvatar:n(331).a},props:{item:{type:Object,required:!0}},computed:{isMine:function(){return this.$store.state.user.slug===this.item.slug}}}),c=(n(359),n(25)),d=Object(c.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"chat-avatar",class:[this.isMine?"chat-avatar-mine":"chat-avatar-other"]},[e("user-avatar",{attrs:{user:this.item,size:36}})],1)},[],!1,null,null,null).exports,f={name:"UserMessage",components:{ChatRoom:o.a},props:{},data:function(){return{message:""}},computed:{avatarComp:function(){return d}},watch:{},created:function(){},mounted:function(){},methods:{handleAddBubble:function(){if(this.message.trim()){var t=this.$store.state.user;this.$refs.room.addMessage({type:"text-msg",float:"right",id:Math.random().toString(10).substring(3,6),color:2===t.sex?{bg:"#ff6881",text:"#fff"}:{bg:"#00a1d6",text:"#fff"},data:{content:this.message.trim().replace(/\r?\n/g,"<br>"),created_at:Date.now(),user:t}}),this.message=""}},handleNewLine:function(){this.message&&(this.message+="\n")}}},m=(n(360),Object(c.a)(f,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",attrs:{id:"user-message"}},[n("el-row",[n("el-col",{attrs:{span:6}},[t._v("\n \n      ")]),t._v(" "),n("el-col",{attrs:{span:12}},[n("ChatRoom",{ref:"room",attrs:{"avatar-component":t.avatarComp}}),t._v(" "),n("div",[n("el-input",{attrs:{type:"textarea",rows:5,resize:"none",maxlength:"500",placeholder:"say it..."},nativeOn:{keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.handleAddBubble(e))},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.metaKey?(e.preventDefault(),t.handleNewLine(e)):null}]},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1)],1),t._v(" "),n("el-col",{attrs:{span:6}},[t._v("\n \n      ")])],1)],1)},[],!1,null,null,null));e.default=m.exports}}]);