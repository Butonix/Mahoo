(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{348:function(e,t,n){},421:function(e,t,n){e.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(object,e){return Object.prototype.hasOwnProperty.call(object,e)},n.p="/dist/",n(n.s=67)}({0:function(e,t,n){"use strict";function o(e,t,n,o,r,l,c,d){var v,f="function"==typeof e?e.options:e;if(t&&(f.render=t,f.staticRenderFns=n,f._compiled=!0),o&&(f.functional=!0),l&&(f._scopeId="data-v-"+l),c?(v=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(c)},f._ssrRegister=v):r&&(v=d?function(){r.call(this,this.$root.$options.shadowRoot)}:r),v)if(f.functional){f._injectStyles=v;var _=f.render;f.render=function(e,t){return v.call(t),_(e,t)}}else{var m=f.beforeCreate;f.beforeCreate=m?[].concat(m,v):[v]}return{exports:e,options:f}}n.d(t,"a",function(){return o})},14:function(e,t){e.exports=n(142)},2:function(e,t){e.exports=n(103)},40:function(e,t){e.exports=n(422)},67:function(e,t,n){"use strict";n.r(t);var o=n(7),r=n.n(o),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"el-loading-fade"},on:{"after-leave":e.handleAfterLeave}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"el-loading-mask",class:[e.customClass,{"is-fullscreen":e.fullscreen}],style:{backgroundColor:e.background||""}},[n("div",{staticClass:"el-loading-spinner"},[e.spinner?n("i",{class:e.spinner}):n("svg",{staticClass:"circular",attrs:{viewBox:"25 25 50 50"}},[n("circle",{staticClass:"path",attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})]),e.text?n("p",{staticClass:"el-loading-text"},[e._v(e._s(e.text))]):e._e()])])])};l._withStripped=!0;var c={data:function(){return{text:null,spinner:null,background:null,fullscreen:!0,visible:!1,customClass:""}},methods:{handleAfterLeave:function(){this.$emit("after-leave")},setText:function(text){this.text=text}}},d=n(0),component=Object(d.a)(c,l,[],!1,null,null,null);component.options.__file="packages/loading/src/loading.vue";var v=component.exports,f=n(2),_=n(14),m=n(40),h=n.n(m),y=r.a.extend(v),x={install:function(e){if(!e.prototype.$isServer){var t=function(t,o){o.value?e.nextTick(function(){o.modifiers.fullscreen?(t.originalPosition=Object(f.getStyle)(document.body,"position"),t.originalOverflow=Object(f.getStyle)(document.body,"overflow"),t.maskStyle.zIndex=_.PopupManager.nextZIndex(),Object(f.addClass)(t.mask,"is-fullscreen"),n(document.body,t,o)):(Object(f.removeClass)(t.mask,"is-fullscreen"),o.modifiers.body?(t.originalPosition=Object(f.getStyle)(document.body,"position"),["top","left"].forEach(function(e){var n="top"===e?"scrollTop":"scrollLeft";t.maskStyle[e]=t.getBoundingClientRect()[e]+document.body[n]+document.documentElement[n]-parseInt(Object(f.getStyle)(document.body,"margin-"+e),10)+"px"}),["height","width"].forEach(function(e){t.maskStyle[e]=t.getBoundingClientRect()[e]+"px"}),n(document.body,t,o)):(t.originalPosition=Object(f.getStyle)(t,"position"),n(t,t,o)))}):(h()(t.instance,function(e){if(t.instance.hiding){t.domVisible=!1;var n=o.modifiers.fullscreen||o.modifiers.body?document.body:t;Object(f.removeClass)(n,"el-loading-parent--relative"),Object(f.removeClass)(n,"el-loading-parent--hidden"),t.instance.hiding=!1}},300,!0),t.instance.visible=!1,t.instance.hiding=!0)},n=function(t,n,o){n.domVisible||"none"===Object(f.getStyle)(n,"display")||"hidden"===Object(f.getStyle)(n,"visibility")?n.domVisible&&!0===n.instance.hiding&&(n.instance.visible=!0,n.instance.hiding=!1):(Object.keys(n.maskStyle).forEach(function(e){n.mask.style[e]=n.maskStyle[e]}),"absolute"!==n.originalPosition&&"fixed"!==n.originalPosition&&Object(f.addClass)(t,"el-loading-parent--relative"),o.modifiers.fullscreen&&o.modifiers.lock&&Object(f.addClass)(t,"el-loading-parent--hidden"),n.domVisible=!0,t.appendChild(n.mask),e.nextTick(function(){n.instance.hiding?n.instance.$emit("after-leave"):n.instance.visible=!0}),n.domInserted=!0)};e.directive("loading",{bind:function(e,n,o){var r=e.getAttribute("element-loading-text"),l=e.getAttribute("element-loading-spinner"),c=e.getAttribute("element-loading-background"),d=e.getAttribute("element-loading-custom-class"),v=o.context,mask=new y({el:document.createElement("div"),data:{text:v&&v[r]||r,spinner:v&&v[l]||l,background:v&&v[c]||c,customClass:v&&v[d]||d,fullscreen:!!n.modifiers.fullscreen}});e.instance=mask,e.mask=mask.$el,e.maskStyle={},n.value&&t(e,n)},update:function(e,n){e.instance.setText(e.getAttribute("element-loading-text")),n.oldValue!==n.value&&t(e,n)},unbind:function(e,n){e.domInserted&&(e.mask&&e.mask.parentNode&&e.mask.parentNode.removeChild(e.mask),t(e,{value:!1,modifiers:n.modifiers})),e.instance&&e.instance.$destroy()}})}}},C=x,k=n(9),S=n.n(k),$=r.a.extend(v),O={text:null,fullscreen:!0,body:!1,lock:!1,customClass:""},j=void 0;$.prototype.originalPosition="",$.prototype.originalOverflow="",$.prototype.close=function(){var e=this;this.fullscreen&&(j=void 0),h()(this,function(t){var n=e.fullscreen||e.body?document.body:e.target;Object(f.removeClass)(n,"el-loading-parent--relative"),Object(f.removeClass)(n,"el-loading-parent--hidden"),e.$el&&e.$el.parentNode&&e.$el.parentNode.removeChild(e.$el),e.$destroy()},300),this.visible=!1};var w=function(e,t,n){var o={};e.fullscreen?(n.originalPosition=Object(f.getStyle)(document.body,"position"),n.originalOverflow=Object(f.getStyle)(document.body,"overflow"),o.zIndex=_.PopupManager.nextZIndex()):e.body?(n.originalPosition=Object(f.getStyle)(document.body,"position"),["top","left"].forEach(function(t){var n="top"===t?"scrollTop":"scrollLeft";o[t]=e.target.getBoundingClientRect()[t]+document.body[n]+document.documentElement[n]+"px"}),["height","width"].forEach(function(t){o[t]=e.target.getBoundingClientRect()[t]+"px"})):n.originalPosition=Object(f.getStyle)(t,"position"),Object.keys(o).forEach(function(e){n.$el.style[e]=o[e]})},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!r.a.prototype.$isServer){if("string"==typeof(e=S()({},O,e)).target&&(e.target=document.querySelector(e.target)),e.target=e.target||document.body,e.target!==document.body?e.fullscreen=!1:e.body=!0,e.fullscreen&&j)return j;var t=e.body?document.body:e.target,n=new $({el:document.createElement("div"),data:e});return w(e,t,n),"absolute"!==n.originalPosition&&"fixed"!==n.originalPosition&&Object(f.addClass)(t,"el-loading-parent--relative"),e.fullscreen&&e.lock&&Object(f.addClass)(t,"el-loading-parent--hidden"),t.appendChild(n.$el),r.a.nextTick(function(){n.visible=!0}),e.fullscreen&&(j=n),n}};t.default={install:function(e){e.use(C),e.prototype.$loading=E},directive:C,service:E}},7:function(e,t){e.exports=n(0)},9:function(e,t){e.exports=n(50)}})},422:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(!e||!t)throw new Error("instance & callback is required");var r=!1,l=function(){r||(r=!0,t&&t.apply(null,arguments))};o?e.$once("after-leave",l):e.$on("after-leave",l),setTimeout(function(){l()},n+100)}},423:function(e,t,n){"use strict";var o=n(348);n.n(o).a},424:function(e,t,n){},521:function(e,t,n){"use strict";var o,r,l=n(421),c=n.n(l),d=(n(16),n(2)),v=n(149),f={name:"MessageMenu",props:{slug:{type:String,required:!0}},data:function(){return{menuWatcher:null,timeWatcher:null,friends:[]}},computed:{menu:function(){return this.$store.state.messageMenu.list}},mounted:function(){var e=this;this.menuWatcher=this.$watch("$store.state.mailbox.unread_message_total",function(t,n){t>n&&!e.$store.state.socket.isConnected&&e.$store.dispatch("getMessageMenu")}),this.timeWatcher=this.$watch("$store.state.messageMenu.time",function(){e.$store.dispatch("updateMessageMenu")}),this.$store.dispatch("updateMessageMenu"),this.menu.length&&this.$store.state.socket.isConnected||this.initChatRoom()},beforeDestroy:function(){this.menuWatcher&&this.menuWatcher(),this.timeWatcher&&this.timeWatcher()},methods:{initChatRoom:(r=Object(d.a)(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.a.service({target:this.$el}),e.next=3,this.getUserFriends();case 3:return e.next=5,this.$store.dispatch("getMessageMenu");case 5:t.close();case 6:case"end":return e.stop()}},e,this)})),function(){return r.apply(this,arguments)}),getUserFriends:(o=Object(d.a)(regeneratorRuntime.mark(function e(){var t,n,o,r=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=function(){Object(v.getUserRelation)({$axios:r.$axios,slug:r.slug,relation:"friend"}).then(function(data){data.result.forEach(function(e){return r.$cache.setUserSessionStore(e)}),r.friends=data.result,sessionStorage.setItem("user-friends-list",JSON.stringify(data.result))})},e.prev=1,n=sessionStorage.getItem("user-friends-list")){e.next=7;break}return e.next=6,t();case 6:return e.abrupt("return");case 7:(o=JSON.parse(n)).forEach(function(e){return r.$cache.setUserSessionStore(e)}),this.friends=o,e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(1),e.next=16,t();case 16:case"end":return e.stop()}},e,this,[[1,12]])})),function(){return o.apply(this,arguments)}),deleteChannel:function(e){var t=this;this.$axios.$post("v1/message/delete_channel",{channel:e.channel}).then(function(){t.$store.commit("DELETE_MESSAGE_MENU",e.channel)}).catch(function(){})},emitClick:function(e){this.$emit("open",e)}}},_=(n(423),n(15)),component=Object(_.a)(f,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"message-menu"},e._l(e.menu,function(t){return n("li",{key:t.channel},[n("div",{staticClass:"room-item clearfix",on:{click:function(n){return e.emitClick(t)}}},[t.user.avatar?n("VImg",{attrs:{src:t.user.avatar,width:"42",height:"42",radius:"50%",alt:t.user.nickname}}):e._e(),e._v(" "),n("div",{staticClass:"content"},[n("p",{staticClass:"nickname oneline",domProps:{innerHTML:e._s(t.user.nickname)}}),e._v(" "),n("div",{staticClass:"footer"},[t.count?n("div",{staticClass:"read-badge",domProps:{textContent:e._s(t.count)}}):e._e()])])],1),e._v(" "),n("div",{staticClass:"close",on:{click:function(n){return e.deleteChannel(t)}}},[e._v("\n      ×\n    ")])])}),0)},[],!1,null,null,null);t.a=component.exports},558:function(e,t,n){"use strict";var o=n(424);n.n(o).a},694:function(e,t,n){"use strict";n.r(t);var o={name:"AppNotice",layout:"app",components:{MessageMenu:n(521).a},props:{},data:function(){return{}},computed:{slug:function(){return this.$store.state.user.slug}},watch:{},created:function(){},mounted:function(){},methods:{}},r=(n(558),n(15)),component=Object(r.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app-notice"}},[n("VSwitcher",{attrs:{headers:["消息","聊天","通知"],align:"center",sticky:"","disabled-swipe":"",swipe:"","fixed-top":0,"anchor-padding":10}},[n("VScroller",{attrs:{slot:"0",throttle:-1},slot:"0"},[n("p",[e._v("start")]),e._v(" "),n("p",[e._v("消息")]),e._v(" "),n("p",[e._v("消息")]),e._v(" "),n("p",[e._v("消息")]),e._v(" "),n("p",[e._v("消息")]),e._v(" "),n("p",[e._v("消息")]),e._v(" "),n("p",[e._v("消息")]),e._v(" "),n("p",[e._v("消息")]),e._v(" "),n("p",[e._v("消息")]),e._v(" "),n("p",[e._v("消息")]),e._v(" "),n("p",[e._v("消息")]),e._v(" "),n("p",[e._v("消息")]),e._v(" "),n("p",[e._v("消息")]),e._v(" "),n("p",[e._v("消息")]),e._v(" "),n("p",[e._v("消息")]),e._v(" "),n("p",[e._v("消息")]),e._v(" "),n("p",[e._v("消息")]),e._v(" "),n("p",[e._v("消息")]),e._v(" "),n("p",[e._v("消息")]),e._v(" "),n("p",[e._v("消息")]),e._v(" "),n("p",[e._v("消息")]),e._v(" "),n("p",[e._v("消息")]),e._v(" "),n("p",[e._v("消息")]),e._v(" "),n("p",[e._v("消息")]),e._v(" "),n("p",[e._v("消息")]),e._v(" "),n("p",[e._v("消息")]),e._v(" "),n("p",[e._v("消息")]),e._v(" "),n("p",[e._v("消息")]),e._v(" "),n("p",[e._v("消息")]),e._v(" "),n("p",[e._v("消息")]),e._v(" "),n("p",[e._v("消息")]),e._v(" "),n("p",[e._v("end")])]),e._v(" "),n("VScroller",{attrs:{slot:"1",throttle:-1},slot:"1"},[e.slug?n("MessageMenu",{attrs:{slug:e.slug}}):e._e()],1),e._v(" "),n("VScroller",{attrs:{slot:"2",throttle:-1},slot:"2"},[n("p",[e._v("start")]),e._v(" "),n("p",[e._v("通知")]),e._v(" "),n("p",[e._v("通知")]),e._v(" "),n("p",[e._v("通知")]),e._v(" "),n("p",[e._v("通知")]),e._v(" "),n("p",[e._v("通知")]),e._v(" "),n("p",[e._v("通知")]),e._v(" "),n("p",[e._v("通知")]),e._v(" "),n("p",[e._v("通知")]),e._v(" "),n("p",[e._v("通知")]),e._v(" "),n("p",[e._v("通知")]),e._v(" "),n("p",[e._v("通知")]),e._v(" "),n("p",[e._v("通知")]),e._v(" "),n("p",[e._v("通知")]),e._v(" "),n("p",[e._v("通知")]),e._v(" "),n("p",[e._v("通知")]),e._v(" "),n("p",[e._v("通知")]),e._v(" "),n("p",[e._v("通知")]),e._v(" "),n("p",[e._v("通知")]),e._v(" "),n("p",[e._v("通知")]),e._v(" "),n("p",[e._v("通知")]),e._v(" "),n("p",[e._v("通知")]),e._v(" "),n("p",[e._v("通知")]),e._v(" "),n("p",[e._v("通知")]),e._v(" "),n("p",[e._v("通知")]),e._v(" "),n("p",[e._v("通知")]),e._v(" "),n("p",[e._v("通知")]),e._v(" "),n("p",[e._v("通知")]),e._v(" "),n("p",[e._v("通知")]),e._v(" "),n("p",[e._v("通知")]),e._v(" "),n("p",[e._v("通知")]),e._v(" "),n("p",[e._v("end")])])],1)],1)},[],!1,null,null,null);t.default=component.exports}}]);