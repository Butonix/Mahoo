module.exports=function(e){var t={},n={0:0};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.e=function(t){if(0!==n[t]){var o=require("./"+{1:"3dc59848bba37408f84d",2:"49c2194b1ddd231e73c6",3:"3c7d9a9c00d035a18389",4:"29cd88762193d7bf621e",5:"081ced12fdb78fbd18fe",6:"bd80a67106a526ca1b35",7:"f1d6a0f5739ba64985f9",8:"14e89834b2f08b89662e",9:"f9f93438a3a897ee02d3",10:"b013205dca23f0b1dfd8",11:"3a3d1557103a254e3329",12:"73bf506bc23dc875f2b4",13:"4394334ef6473dadd43b",14:"7646111e9ec08561c1b3",15:"05f5b0aac292161e75ba",16:"1835f7db79096b363c9c",17:"35a2087ab06aab243049",18:"383c7e64900927b336ab",19:"fead8fab998d550728a5",20:"e892da34533d2dfc19f7"}[t]+".js"),r=o.modules,c=o.ids;for(var l in r)e[l]=r[l];for(var i=0;i<c.length;i++)n[c[i]]=0}return Promise.all([])},o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(object,e){return Object.prototype.hasOwnProperty.call(object,e)},o.p="https://file.calibur.tv/web/",o.oe=function(e){process.nextTick(function(){throw e})},o(o.s=28)}([function(e,t){e.exports=require("vue")},function(e,t,n){"use strict";function o(e,t,n,o,r,c,l,d){var h,f="function"==typeof e?e.options:e;if(t&&(f.render=t,f.staticRenderFns=n,f._compiled=!0),o&&(f.functional=!0),c&&(f._scopeId="data-v-"+c),l?(h=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(l)},f._ssrRegister=h):r&&(h=d?function(){r.call(this,this.$root.$options.shadowRoot)}:r),h)if(f.functional){f._injectStyles=h;var m=f.render;f.render=function(e,t){return h.call(t),m(e,t)}}else{var x=f.beforeCreate;f.beforeCreate=x?[].concat(x,h):[h]}return{exports:e,options:f}}n.d(t,"a",function(){return o})},function(e,t){},function(e,t){e.exports=require("vue-mixin-store")},function(e,t){},function(e,t){},function(e,t){e.exports={container:"container_38LTS",header:"header_1m5og",title:"title_20O3t",close:"close_uLA1x",content:"content_37QpV",loading:"loading_32o64","no-more":"no-more_2gF1n",noMore:"no-more_2gF1n",footer:"footer_2bdAt",cancel:"cancel_3BYdT",submit:"submit_1MUgK"}},function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"i",function(){return r}),n.d(t,"c",function(){return c}),n.d(t,"a",function(){return l}),n.d(t,"h",function(){return d}),n.d(t,"f",function(){return h}),n.d(t,"d",function(){return f}),n.d(t,"e",function(){return m}),n.d(t,"g",function(){return x});const o=e=>e.$axios.$post("v1/door/get_user_info"),r=(e,t)=>e.$axios.$post("v1/user/update_info",t),c=(e,{slug:t})=>e.$axios.$get("v1/user/show",{params:{slug:t}}),l=(e,{id:t,phone:n,password:o,authCode:r})=>e.$axios.$post("v1/door/bind_phone",{id:t,phone:n,password:o,authCode:r}),d=(e,{phone_number:t,type:n,geetest:o})=>e.$axios.$post("v1/door/message",{phone_number:t,type:n,geetest:o}),h=(e,{access:t,secret:n,nickname:o,authCode:r,inviteCode:c})=>e.$axios.$post("v1/door/register",{access:t,secret:n,nickname:o,authCode:r,inviteCode:c}),f=(e,{access:t,secret:n,remember:o,geetest:r})=>e.$axios.$post("v1/door/login",{access:t,secret:n,remember:o,geetest:r}),m=e=>e.$axios.$post("v1/door/logout"),x=(e,{method:t,access:n,authCode:o,secret:r})=>e.$axios.$post("door/reset",{method:t,access:n,authCode:o,secret:r})},function(e,t){e.exports=require("vue-router")},function(e,t){e.exports=require("vuex")},function(e,t){e.exports=require("element-ui/lib/dialog")},function(e,t){e.exports=require("element-ui/lib/checkbox")},function(e,t){e.exports=require("element-ui/lib/input")},function(e,t){e.exports=require("element-ui/lib/form-item")},function(e,t){e.exports=require("element-ui/lib/tag")},function(e,t){e.exports=require("element-ui/lib/form")},function(e,t){e.exports=require("element-ui/lib/col")},function(e,t){e.exports=require("element-ui/lib/row")},function(e,t){e.exports=require("element-ui/lib/button")},function(e,t){e.exports=require("v-switcher")},function(e,t,n){"use strict";t.a=e=>{let t="";if("undefined"!=typeof window){let e;try{e=JSON.parse(document.querySelector('script[data-name="page-data"]').textContent)}catch(t){e={authToken:""}}t=e.authToken}else{const n=e.context.req.headers.cookie;n&&n.split("; ").forEach(e=>{e.startsWith("JWT-TOKEN=")&&(t=e.split("JWT-TOKEN=")[1])})}return~["undefined","null"].indexOf(t)?"":t}},function(e,t,n){e.exports=n.p+"img/b07f58f.jpeg"},function(e,t){e.exports=require("querystring")},function(e,t){e.exports=require("consola")},function(e,t){e.exports=require("node-fetch")},function(e,t){e.exports=require("vue-meta")},function(e,t){e.exports=require("vue-no-ssr")},function(e,t){e.exports=require("axios")},function(e,t,n){e.exports=n(40)},function(e,t,n){e.exports=n.p+"img/d465ab1.jpeg"},function(e,t,n){e.exports=n.p+"img/adea640.jpeg"},function(e,t,n){"use strict";n.r(t);var o=n(4),r=n.n(o);for(var c in o)"default"!==c&&function(e){n.d(t,e,function(){return o[e]})}(c);t.default=r.a},function(e,t,n){"use strict";n.r(t);var o=n(5),r=n.n(o);for(var c in o)"default"!==c&&function(e){n.d(t,e,function(){return o[e]})}(c);t.default=r.a},function(e,t){},function(e,t){},function(e,t){},function(e,t,n){"use strict";n.r(t),n.d(t,"state",function(){return l}),n.d(t,"mutations",function(){return d}),n.d(t,"actions",function(){return h}),n.d(t,"getters",function(){return f});var o=n(0),r=n.n(o),c=n(7);const l=()=>({user:{},login:!1,isAuth:!1,logging:!1,socket:{isConnected:!1,message:"",reconnectError:!1}}),d={SET_USER_INFO(e,t){const n=!(!t||!t.slug);e.user=t,e.login=n,e.isAuth=n,e.logging=!1},SET_USER_TOKEN(e,t){e.login=!!t},SET_LOGGING(e){e.logging=!0},UPDATE_USER_INFO(e,{key:t,value:n}){r.a.set(e.user,t,n)},SOCKET_ONOPEN(e,t){e.socket.isConnected=!0},SOCKET_ONCLOSE(e,t){e.socket.isConnected=!1},SOCKET_ONERROR(e,t){},SOCKET_ONMESSAGE(e,t){e.socket.message=t},SOCKET_RECONNECT(e,t){},SOCKET_RECONNECT_ERROR(e){e.socket.reconnectError=!0}},h={async initAuth({state:e,commit:t}){if(!e.login||e.logging)return null;if(e.user.slug)return e.user;try{t("SET_LOGGING");const e=await Object(c.b)(this);return t("SET_USER_INFO",e),e}catch(e){return t("SET_USER_INFO",{}),null}},removeAuth({state:e,commit:t}){e.login&&(Object(c.e)(this),t("SET_USER_INFO",{}))}},f={currentUserKey:e=>t=>e.login&&e.user[t]||""}},function(e,t,n){"use strict";n.r(t),n.d(t,"state",function(){return c}),n.d(t,"mutations",function(){return l}),n.d(t,"actions",function(){return d}),n.d(t,"getters",function(){return h});var o=n(3);const r=n.n(o).a.FlowStore({}),c=r.state,l=r.mutations,d=r.actions,h=r.getters},function(e,t){},function(e,t,n){"use strict";n.r(t);var o=n(6),r=n.n(o);for(var c in o)"default"!==c&&function(e){n.d(t,e,function(){return o[e]})}(c);t.default=r.a},function(e,t,n){"use strict";n.r(t);var o=n(22),r=n(23),c=n.n(r),l=n(0),d=n.n(l),h=n(24),f=n.n(h);var m={};function x(e){return e.then(e=>e.default||e)}function y(e){return e.options&&e._Ctor===e?e:(e.options?(e._Ctor=e,e.extendOptions=e.options):(e=d.a.extend(e))._Ctor=e,!e.options.name&&e.options.__file&&(e.options.name=e.options.__file),e)}function v(e,t=!1){return Array.prototype.concat.apply([],e.matched.map((e,n)=>Object.keys(e.components).map(o=>(t&&t.push(n),e.components[o]))))}function _(e){return Promise.all(function(e,t){return Array.prototype.concat.apply([],e.matched.map((e,n)=>Object.keys(e.components).reduce((o,r)=>(e.components[r]?o.push(t(e.components[r],e.instances[r],e,r,n)):delete e.components[r],o),[])))}(e,async(e,t,n,o)=>("function"!=typeof e||e.options||(e=await e()),n.components[o]=y(e),n.components[o])))}async function w(e){if(e)return await _(e),{...e,meta:v(e).map((t,n)=>({...t.options.meta,...(e.matched[n]||{}).meta}))}}async function C(e,t){e.context||(e.context={isStatic:!1,isDev:!1,isHMR:!1,app:e,store:e.store,payload:t.payload,error:t.error,base:"/",env:{API_URL:"http://localhost/",API_URL_BROWSER:"https://api.calibur.tv/",META_KEYS:"C站,calibur,咔哩吧,ACG,二次元,社区",META_DESC:"咔哩吧是一个二次元社区",SOCKET_HOST:"wss://api.calibur.tv/ws"}},t.req&&(e.context.req=t.req),t.res&&(e.context.res=t.res),t.ssrContext&&(e.context.ssrContext=t.ssrContext),e.context.redirect=(t,path,n)=>{if(!t)return;e.context._redirected=!0;let o=typeof path;"number"==typeof t||"undefined"!==o&&"object"!==o||(n=path||{},o=typeof(path=t),t=302),"object"===o&&(path=e.router.resolve(path).route.fullPath),/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)?e.context.next({path:path,query:n,status:t}):(path=function(e,t){let n;const o=e.indexOf("://");-1!==o?(n=e.substring(0,o),e=e.substring(o+3)):e.startsWith("//")&&(e=e.substring(2));let r,c=e.split("/"),l=(n?n+"://":"//")+c.shift(),path=c.filter(Boolean).join("/");2===(c=path.split("#")).length&&([path,r]=c);l+=path?"/"+path:"",t&&"{}"!==JSON.stringify(t)&&(l+=(2===e.split("?").length?"&":"?")+function(e){return Object.keys(e).sort().map(t=>{const n=e[t];return null==n?"":Array.isArray(n)?n.slice().map(e=>[t,"=",e].join("")).join("&"):t+"="+n}).filter(Boolean).join("&")}(t));return l+=r?"#"+r:""}(path,n),e.context.next({path:path,status:t}))},e.context.beforeNuxtRender=e=>t.beforeRenderFns.push(e));const[n,o]=await Promise.all([w(t.route),w(t.from)]);t.route&&(e.context.route=n),t.from&&(e.context.from=o),e.context.next=t.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=Boolean(t.isHMR),e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{}}function $(e,t){return!e.length||t._redirected||t._errored?Promise.resolve():E(e[0],t).then(()=>$(e.slice(1),t))}function E(e,t){let n;return(n=2===e.length?new Promise(n=>{e(t,function(e,data){e&&t.error(e),n(data=data||{})})}):e(t))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function k(e,t){return function(e){const t=new Array(e.length);for(let i=0;i<e.length;i++)"object"==typeof e[i]&&(t[i]=new RegExp("^(?:"+e[i].pattern+")$"));return function(n,o){let path="";const data=n||{},r=o||{},c=r.pretty?O:encodeURIComponent;for(let i=0;i<e.length;i++){const n=e[i];if("string"==typeof n){path+=n;continue}const o=data[n.name||"pathMatch"];let r;if(null==o){if(n.optional){n.partial&&(path+=n.prefix);continue}throw new TypeError('Expected "'+n.name+'" to be defined')}if(Array.isArray(o)){if(!n.repeat)throw new TypeError('Expected "'+n.name+'" to not repeat, but received `'+JSON.stringify(o)+"`");if(0===o.length){if(n.optional)continue;throw new TypeError('Expected "'+n.name+'" to not be empty')}for(let e=0;e<o.length;e++){if(r=c(o[e]),!t[i].test(r))throw new TypeError('Expected all "'+n.name+'" to match "'+n.pattern+'", but received `'+JSON.stringify(r)+"`");path+=(0===e?n.prefix:n.delimiter)+r}}else{if(r=n.asterisk?encodeURI(o).replace(/[?#]/g,e=>"%"+e.charCodeAt(0).toString(16).toUpperCase()):c(o),!t[i].test(r))throw new TypeError('Expected "'+n.name+'" to match "'+n.pattern+'", but received "'+r+'"');path+=n.prefix+r}}return path}}(function(e,t){const n=[];let o=0,r=0,path="";const c=t&&t.delimiter||"/";let l;for(;null!=(l=S.exec(e));){const t=l[0],d=l[1],h=l.index;if(path+=e.slice(r,h),r=h+t.length,d){path+=d[1];continue}const f=e[r],m=l[2],x=l[3],y=l[4],v=l[5],_=l[6],w=l[7];path&&(n.push(path),path="");const C=null!=m&&null!=f&&f!==m,$="+"===_||"*"===_,E="?"===_||"*"===_,k=l[2]||c,pattern=y||v;n.push({name:x||o++,prefix:m||"",delimiter:k,optional:E,repeat:$,partial:C,asterisk:Boolean(w),pattern:pattern?j(pattern):w?".*":"[^"+T(k)+"]+?"})}r<e.length&&(path+=e.substr(r));path&&n.push(path);return n}(e,t))}const S=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function O(e){return encodeURI(e).replace(/[\/?#]/g,e=>"%"+e.charCodeAt(0).toString(16).toUpperCase())}function T(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function j(e){return e.replace(/([=!:$\/()])/g,"\\$1")}var N=n(25),R=n.n(N),A=n(8),P=n.n(A);const M=()=>x(n.e(6).then(n.bind(null,118))),L=()=>x(n.e(7).then(n.bind(null,113))),I=()=>x(n.e(8).then(n.bind(null,104))),U=()=>x(n.e(9).then(n.bind(null,117))),B=()=>x(n.e(3).then(n.bind(null,116))),D=()=>x(n.e(4).then(n.bind(null,115))),F=()=>x(n.e(5).then(n.bind(null,114))),K=()=>x(n.e(14).then(n.bind(null,112))),V=()=>x(n.e(11).then(n.bind(null,111))),z=()=>x(n.e(13).then(n.bind(null,110))),H=()=>x(n.e(15).then(n.bind(null,102))),G=()=>x(n.e(17).then(n.bind(null,108))),J=()=>x(n.e(16).then(n.bind(null,107))),W=()=>x(n.e(18).then(n.bind(null,101))),X=()=>x(n.e(19).then(n.bind(null,105))),Y=()=>x(n.e(20).then(n.bind(null,103))),Q=()=>x(n.e(12).then(n.bind(null,106))),Z=()=>x(n.e(10).then(n.bind(null,109)));d.a.use(P.a);const ee=function(e,t,n){if(n)return n;let o={x:0,y:0};return e.hash&&(o={selector:e.hash}),o};var te=n(26),ne={...n.n(te).a,name:"NoSsr"},oe={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render(e,{parent:t,data:data,props:n}){data.nuxtChild=!0;const o=t,r=t.$nuxt.nuxt.transitions,c=t.$nuxt.nuxt.defaultTransition;let l=0;for(;t;)t.$vnode&&t.$vnode.data.nuxtChild&&l++,t=t.$parent;data.nuxtChildDepth=l;const d=r[l]||c,h={};re.forEach(e=>{void 0!==d[e]&&(h[e]=d[e])});const f={};se.forEach(e=>{"function"==typeof d[e]&&(f[e]=d[e].bind(o))});const m=f.beforeEnter;f.beforeEnter=e=>{if(window.$nuxt.$nextTick(()=>{window.$nuxt.$emit("triggerScroll")}),m)return m.call(o,e)};let x=[e("router-view",data)];return n.keepAlive&&(x=[e("keep-alive",{props:n.keepAliveProps},x)]),e("transition",{props:h,on:f},x)}};const re=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],se=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"];var ie={name:"nuxt-error",props:{error:{type:Object,default:null}},head:{title:"出错了"},computed:{statusCode(){return"继续操作前请先登录"===this.message?401:"请在APP内打开该页面"===this.message?403:this.error&&this.error.statusCode||404},message(){return this.error&&this.error.message||"您要找的页面不存在"}},methods:{handleLogin(){this.$channel.$emit("sign-in")},toastMessage(){this.$toast.error(this.message)}}},ae=n(1);var ce=Object(ae.a)(ie,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"error-page"}},[e._ssrNode('<div class="error-main">',"</div>",[401===e.statusCode?e._ssrNode('<div id="error-401">',"</div>",[e._ssrNode("<img"+e._ssrAttr("src",n(29))+' alt="error-401"> <h3>请登录后重新访问</h3> <button class="back">\n        登录\n      </button>')],2):403===e.statusCode?e._ssrNode('<div id="error-403"><img'+e._ssrAttr("src",n(21))+' alt="error-403"> <h3>您没有权限访问该页面</h3> <a href="/" class="back">回到首页</a></div>'):404===e.statusCode?e._ssrNode('<div id="error-404">',"</div>",[e._ssrNode("<img"+e._ssrAttr("src",n(30))+' alt="error-404"> <h3>您要找的页面不存在</h3> <div class="subtitle">\n        不存在的，或者正在审核中。\n      </div> '),o("nuxt-link",{staticClass:"back",attrs:{to:"/"}},[e._v("\n        返回首页\n      ")])],2):e.statusCode>=500?e._ssrNode('<div id="error-500">',"</div>",[e._ssrNode("<img"+e._ssrAttr("src",n(21))+' alt="error-500"> <h3>服务器出错了</h3> <div class="subtitle">\n        服务器出了点问题，工程师正在加紧抢修ヽ( ° ▽°)ノ\n      </div> '),o("nuxt-link",{staticClass:"back",attrs:{to:"/"}},[e._v("\n        返回首页\n      ")])],2):e._e()])])},[],!1,function(e){var t=n(31);t.__inject__&&t.__inject__(e)},null,"acdb5c8e").exports,ue={name:"Nuxt",components:{NuxtChild:oe,NuxtError:ce},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},computed:{routerViewKey(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||k(this.$route.matched[0].path)(this.$route.params);const[e]=this.$route.matched,t=e&&e.components.default;if(t&&t.options){const{options:e}=t;if(e.key)return"function"==typeof e.key?e.key(this.$route):e.key}return/\/$/.test(e.path)?this.$route.path:this.$route.path.replace(/\/$/,"")}},beforeCreate(){d.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render(e){return this.nuxt.err?e("NuxtError",{props:{error:this.nuxt.err}}):e("NuxtChild",{key:this.routerViewKey,props:this.$props})}},le={name:"NuxtLoading",data:()=>({percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}),computed:{left(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy(){this.clear()},methods:{clear(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start(){return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(()=>this.startTimer(),this.throttle):this.startTimer(),this},set(e){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(e))),this},get(){return this.percent},increase(e){return this.percent=Math.min(100,Math.floor(this.percent+e)),this},decrease(e){return this.percent=Math.max(0,Math.floor(this.percent-e)),this},pause(){return clearInterval(this._timer),this},resume(){return this.startTimer(),this},finish(){return this.percent=this.reversed?0:100,this.hide(),this},hide(){return this.clear(),setTimeout(()=>{this.show=!1,this.$nextTick(()=>{this.percent=0,this.reversed=!1})},500),this},fail(){return this.canSucceed=!1,this},startTimer(){this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(()=>{this.skipTimerCount>0?this.skipTimerCount--:(this.reversed?this.decrease(this._cut):this.increase(this._cut),this.continuous&&(this.percent>=100?(this.skipTimerCount=1,this.reversed=!this.reversed):this.percent<=0&&(this.skipTimerCount=1,this.reversed=!this.reversed)))},100)}},render(e){let t=e(!1);return this.show&&(t=e("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),t}};var pe=Object(ae.a)(le,void 0,void 0,!1,function(e){var t=n(32);t.__inject__&&t.__inject__(e)},null,"603ac224").exports;n(33),n(34),n(35);const de={_default:()=>n.e(1).then(n.bind(null,119)).then(e=>e.default||e),_web:()=>n.e(2).then(n.bind(null,100)).then(e=>e.default||e)};let he={};var fe={head:{title:"咔哩吧",titleTemplate:function(e){return"咔哩吧"===e?e:`${e} - 咔哩吧`},meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"},{name:"theme-color",content:"#f06595"},{name:"format-detection",content:"telephone=no"},{name:"applicable-device",content:"pc,mobile"},{name:"renderer",content:"webkit|ie-comp|ie-stand"},{name:"force-rendering",content:"webkit"},{"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"},{hid:"description",name:"description",content:"咔哩吧是一个二次元社区"},{hid:"keywords",name:"keywords",content:"C站,calibur,咔哩吧,ACG,二次元,社区"},{hid:"apple-mobile-web-app-title",name:"apple-mobile-web-app-title",content:"咔哩吧"},{hid:"author",name:"author",content:"冰淤"},{hid:"og:type",name:"og:type",property:"og:type",content:"website"},{hid:"og:title",name:"og:title",property:"og:title",content:"咔哩吧"},{hid:"og:site_name",name:"og:site_name",property:"og:site_name",content:"咔哩吧"},{hid:"og:description",name:"og:description",property:"og:description",content:"咔哩吧是一个二次元社区"}],link:[{rel:"dns-prefetch",href:"https://file.calibur.tv"},{rel:"dns-prefetch",href:"https://m1.calibur.tv"},{rel:"preconnect",href:"https://www.calibur.tv"},{rel:"preconnect",href:"https://api.calibur.tv"},{rel:"icon",type:"image/x-icon",href:"https://file.calibur.tv/favicon.ico"},{rel:"manifest",href:"https://file.calibur.tv/web/manifest.8593452c.json"}],bodyAttrs:{id:"calibur"},script:[{innerHTML:'var _hmt=_hmt||[];(function (){var hm=document.createElement("script");hm.src="https://hm.baidu.com/hm.js?c10304a2f70ee2ddf8d2818551d37a4b";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm,s)})();',type:"text/javascript",async:!0},{innerHTML:"(function(){var bp=document.createElement('script');var curProtocol=window.location.protocol.split(':')[0];if(curProtocol==='https'){bp.src='https://zz.bdstatic.com/linksubmit/push.js'}else{bp.src='http://push.zhanzhang.baidu.com/push.js'}var s=document.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(bp,s)})();",type:"text/javascript",async:!0},{innerHTML:"(function(){var iOS=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;var ratio=window.devicePixelRatio||1;var screen={width:window.screen.width*ratio,height:window.screen.height*ratio};if(iOS&&screen.width===1125&&screen.height===2436){document.querySelector('meta[name=viewport]').content=document.querySelector('meta[name=viewport]').content+',viewport-fit=cover'}}());",type:"text/javascript"},{src:"//qzonestyle.gtimg.cn/qzone/qzact/common/share/share.js",type:"text/javascript",async:!0},{src:"//res2.wx.qq.com/open/js/jweixin-1.4.0.js",type:"text/javascript",async:!0}],__dangerouslyDisableSanitizers:"script",style:[],htmlAttrs:{lang:"zh-CN"}},render(e,t){const n=e("NuxtLoading",{ref:"loading"}),o=e(this.layout||"nuxt"),r=e("div",{domProps:{id:"__layout"},key:this.layoutName},[o]),c=e("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter(e){window.$nuxt.$nextTick(()=>{window.$nuxt.$emit("triggerScroll")})}}},[r]);return e("div",{domProps:{id:"__nuxt"}},[n,c])},data:()=>({isOnline:!0,layout:null,layoutName:""}),beforeCreate(){d.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created(){d.a.prototype.$nuxt=this,this.error=this.nuxt.error},mounted(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},computed:{isOffline(){return!this.isOnline}},methods:{refreshOnlineStatus(){0},errorChanged(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout(e){e&&he["_"+e]||(e="default"),this.layoutName=e;let t="_"+e;return this.layout=he[t],this.layout},loadLayout(e){const t=!e,n=!(de["_"+e]||he["_"+e]);let o="_"+(t||n?"default":e);return he[o]?Promise.resolve(he[o]):de[o]().then(e=>(he[o]=e,delete de[o],he[o])).catch(e=>{if(this.$nuxt)return this.$nuxt.error({statusCode:500,message:e.message})})}},components:{NuxtLoading:pe}},me=n(9),ge=n.n(me);d.a.use(ge.a);const xe=console,be=["state","getters","actions","mutations"];let ye={};(ye=function(e,t){if((e=e.default||e).commit)throw new Error(`[nuxt] ${t} should export a method that returns a Vuex instance.`);return"function"!=typeof e&&(e=Object.assign({},e)),_e(e,t)}(n(36),"store/index.js")).modules=ye.modules||{},function(e,t){e=e.default||e;const n=t.replace(/\.(js|mjs|ts)$/,"").split("/");let o=n[n.length-1];const r=`store/${t}`;if(e="state"===o?function(e,t){if("function"!=typeof e){xe.warn(`${t} should export a method that returns an object`);const n=Object.assign({},e);return()=>n}return _e(e,t)}(e,r):_e(e,r),be.includes(o)){const t=o,r=we(ye,n,{isProperty:!0});return void Ce(r,e,t)}"index"===o&&(n.pop(),o=n[n.length-1]);const c=we(ye,n);for(const t of be)Ce(c,e[t],t);!1===e.namespaced&&delete c.namespaced}(n(37),"flow.js");const ve=ye instanceof Function?ye:()=>new ge.a.Store(Object.assign({strict:!1},ye));function _e(e,t){if(e.state&&"function"!=typeof e.state){xe.warn(`'state' should be a method that returns an object in ${t}`);const n=Object.assign({},e.state);e=Object.assign({},e,{state:()=>n})}return e}function we(e,t,{isProperty:n=!1}={}){if(!t.length||n&&1===t.length)return e;const o=t.shift();return e.modules[o]=e.modules[o]||{},e.modules[o].namespaced=!0,e.modules[o].modules=e.modules[o].modules||{},we(e.modules[o],t,{isProperty:n})}function Ce(e,t,n){t&&("state"===n?e.state=t||e.state:e[n]=Object.assign({},e[n],t))}n(2);var $e=n(27),Ee=n.n($e);const ke={setHeader(e,t,n="common"){for(let o of Array.isArray(n)?n:[n]){if(!t)return void delete this.defaults.headers[o][e];this.defaults.headers[o][e]=t}},setToken(e,t,n="common"){const o=e?(t?t+" ":"")+e:null;this.setHeader("Authorization",o,n)},onRequest(e){this.interceptors.request.use(t=>e(t)||t)},onResponse(e){this.interceptors.response.use(t=>e(t)||t)},onRequestError(e){this.interceptors.request.use(void 0,t=>e(t)||Promise.reject(t))},onResponseError(e){this.interceptors.response.use(void 0,t=>e(t)||Promise.reject(t))},onError(e){this.onRequestError(e),this.onResponseError(e)}};for(let e of["request","delete","get","head","options","post","put","patch"])ke["$"+e]=function(){return this[e].apply(this,arguments).then(e=>e&&e.data)};var Se=(e,t)=>{const n={baseURL:process.env._AXIOS_BASE_URL_||"http://localhost:3000/",headers:{common:{Accept:"application/json, text/plain, */*"},delete:{},get:{},head:{},post:{},put:{},patch:{}}};n.headers.common=e.req&&e.req.headers?Object.assign({},e.req.headers):{},delete n.headers.common.accept,delete n.headers.common.host,delete n.headers.common["cf-ray"],delete n.headers.common["cf-connecting-ip"],n.headers.common["accept-encoding"]="gzip, deflate";const o=Ee.a.create(n);(e=>{for(let t in ke)e[t]=ke[t].bind(e)})(o),e.$axios=o,t("axios",o)},Oe=n(20),Te=({$axios:e,app:t})=>{const n="undefined"!=typeof window;e.setToken(Object(Oe.a)(t),"Bearer"),e.onRequest(e=>{e.baseURL=n?"https://api.calibur.tv/":"http://localhost/",e.timeout=1e4}),e.onResponse(e=>e.data),e.onError(e=>{const t=(e=>{const t={};return/timeout of/.test(e.message)?(t.statusCode=504,t.message="网络请求超时，请稍候再试！",t):e.response?(t.statusCode=e.response.status,t.message=e.response.data.message||"发生错误了，请稍后再试！","string"!=typeof t.message&&(t.message="网络错误，请稍后再试！"),t):(t.statusCode=502,t.message="网络错误，请刷新网页重试！",t)})(e);return Promise.reject(t)})},je=n(10),qe=n.n(je),Ne=n(11),Re=n.n(Ne),Ae=n(12),Pe=n.n(Ae),Me=n(13),Le=n.n(Me),Ie=n(14),Ue=n.n(Ie),Be=n(15),De=n.n(Be),Fe=n(16),Ke=n.n(Fe),Ve=n(17),ze=n.n(Ve),He=n(18),Ge=n.n(He),Je=n(19),We=n.n(Je),Xe=(n(38),{name:"VDialog",props:{value:{type:Boolean,default:!1,required:!0},customClass:{type:String,default:""},close:{type:Boolean,default:!0},width:{type:String,default:"620px"},height:{type:String,default:""},title:{type:String,default:"提示"},header:{type:Boolean,default:!0},footer:{type:Boolean,default:!0},submitText:{type:String,default:"确定"},cancelText:{type:String,default:"取消"},scroll:{type:Function,default:null},fullscreen:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},noMore:{type:Boolean,default:!1},clickClose:{type:Boolean,default:!0},theme:{type:String,validator:e=>~["success","danger"].indexOf(e),default:"success"}},data(){return{dialogVisible:this.value}},computed:{computeDialogHeight(){return this.height?{height:this.height}:this.scroll?{height:"600px"}:{height:"auto"}}},mounted(){this.$watch("value",e=>{this.dialogVisible=e,window.__closeImageLazy__=e}),this.$watch("dialogVisible",e=>{this.$emit("input",e),window.__closeImageLazy__=e})},methods:{beforeClose(e){e(),this.$emit("cancel"),this.dialogVisible=!1},cancel(){this.$emit("cancel"),this.dialogVisible=!1},submit(){this.$emit("submit")},handleScroll(e){if(!this.scroll||this.loading||this.noMore)return;if(!this.$refs.ul)return;const main=e.currentTarget||e.target;this.$refs.ul.clientHeight-main.clientHeight-main.scrollTop<30&&this.scroll()}}});var Ye=Object(ae.a)(Xe,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{width:e.width,"custom-class":e.customClass,"append-to-body":!0,"show-close":!1,visible:e.dialogVisible,"before-close":e.beforeClose,fullscreen:e.fullscreen,"close-on-click-modal":e.clickClose,"close-on-press-escape":e.clickClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("section",{class:e.$style.container},[e.header?n("header",{class:e.$style.header,attrs:{slot:"header"},slot:"header"},[e._t("title",[n("h4",{class:e.$style.title,domProps:{textContent:e._s(e.title)}})])],2):e._e(),e._v(" "),!e.clickClose||e.close?n("button",{class:e.$style.close,on:{click:e.cancel}},[e._v("\n      ×\n    ")]):e._e(),e._v(" "),n("main",{class:e.$style.content,style:e.computeDialogHeight,on:{scroll:e.handleScroll}},[e.scroll?[n("ul",{ref:"ul"},[e._t("default")],2),e._v(" "),e.loading?e._t("loading",[n("p",[e._v("加载中...")])]):e.noMore?e._t("nomore",[n("p",[e._v("没有更多了")])]):e._e()]:e._t("default")],2),e._v(" "),e.footer?n("footer",{class:e.$style.footer},[e._t("footer",[e.cancelText?n("button",{class:e.$style.cancel,domProps:{textContent:e._s(e.cancelText)},on:{click:e.cancel}}):e._e(),e._v(" "),n("button",{class:[e.$style.submit,"btn-"+e.theme],attrs:{loading:e.loading},domProps:{textContent:e._s(e.submitText)},on:{click:e.submit}})])],2):e._e()])])},[],!1,function(e){var t=n(39);t.__inject__&&t.__inject__(e),this.$style=t.locals||t},null,"58184d28").exports,Qe=n(3),Ze=n.n(Qe);d.a.component(We.a.name,We.a),d.a.component(Ze.a.FlowLoader.name,Ze.a.FlowLoader),d.a.component(Ge.a.name,Ge.a),d.a.component(ze.a.name,ze.a),d.a.component(Ke.a.name,Ke.a),d.a.component(De.a.name,De.a),d.a.component(Ue.a.name,Ue.a),d.a.component(Le.a.name,Le.a),d.a.component(Pe.a.name,Pe.a),d.a.component(Re.a.name,Re.a),d.a.component(Ye.name,Ye),d.a.component(qe.a.name,qe.a);var et={tag:(e,path="")=>`/tag/${e}/${path}`,user:(e,path="")=>`/user/${e}/${path}`},tt=(e,t={})=>{if(!e)return"";if(/imageMogr2/.test(e))return e;const link=/^http/.test(e)?e:`https://m1.calibur.tv/${e}`,n=void 0===t.mode?1:t.mode;if(1===n&&!t.width||!t.width&&!t.height)return`${link}?imageMogr2/auto-orient/strip`;let o,r;return 1===n?(o=`/w/${2*t.width}`,r=t.height?`/h/${2*t.height}`:`/h/${2*t.width}`):(o=t.width?`/w/${2*t.width}`:"",r=t.height?`/h/${2*t.height}`:""),`${link}?imageMogr2/auto-orient/strip|imageView2/${n}${o}${r}`};d.a.use({install(e){e.prototype.$alias=et,e.prototype.$resize=tt}}),d.a.component(ne.name,ne),d.a.component(oe.name,oe),d.a.component("NChild",oe),d.a.component(ue.name,ue),d.a.use(R.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});const nt={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};async function ot(e){const t=await new P.a({mode:"history",base:decodeURI("/"),linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:ee,routes:[{path:"/create",component:M,props:!1,name:"create",children:[{path:"atfield",component:L,props:!1,name:"create-index-atfield"},{path:"cosplay",component:I,props:!1,name:"create-index-cosplay"},{path:"simple",component:U,props:!1,name:"create-index-simple"}]},{path:"/callback/auth-error",component:B,props:!1,name:"callback-auth-error"},{path:"/callback/auth-redirect",component:D,props:!1,name:"callback-auth-redirect"},{path:"/callback/auth-success",component:F,props:!1,name:"callback-auth-success"},{path:"/tag/tree",component:K,props:!1,name:"tag-tree"},{path:"/pin/:slug?",component:V,props:!0,name:"pin-slug"},{path:"/tag/:slug?",component:z,props:!0,name:"tag-slug"},{path:"/user/:slug?",component:H,props:!0,children:[{path:"",component:G,props:!0,name:"user-slug"},{path:"emotion",component:J,props:!0,name:"user-slug-emotion"},{path:"message",component:W,props:!0,name:"user-slug-message"},{path:"notice",component:X,props:!0,name:"user-slug-notice"},{path:"setting",component:Y,props:!0,name:"user-slug-setting"}]},{path:"/tag/:slug?/edit",component:Q,props:!0,name:"tag-slug-edit"},{path:"/",component:Z,props:!1,name:"index"}],fallback:!1}),n=ve(e);n.$router=t;const o=n.registerModule;n.registerModule=(path,e,t)=>o.call(n,path,e,Object.assign({preserveState:!1},t));const r={router:t,store:n,nuxt:{defaultTransition:nt,transitions:[nt],setTransitions(e){return Array.isArray(e)||(e=[e]),e=e.map(e=>e=e?"string"==typeof e?Object.assign({},nt,{name:e}):Object.assign({},nt,e):nt),this.$options.nuxt.transitions=e,e},err:null,dateErr:null,error(t){t=t||null,r.context._errored=Boolean(t),t=t?function(e){let t;if(e.message||"string"==typeof e)t=e.message||e;else try{t=JSON.stringify(e,null,2)}catch(n){t=`[${e.constructor.name}]`}return{...e,message:t,statusCode:e.statusCode||e.status||e.response&&e.response.status||500}}(t):null;const n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}},...fe};n.app=r;const c=e?e.next:e=>r.router.push(e);let l;if(e)l=t.resolve(e.url).route;else{const path=function(base,e){let path=decodeURI(window.location.pathname);return"hash"===e?window.location.hash.replace(/^#\//,""):(base&&0===path.indexOf(base)&&(path=path.slice(base.length)),(path||"/")+window.location.search+window.location.hash)}(t.options.base);l=t.resolve(path).route}await C(r,{route:l,next:c,error:r.nuxt.error.bind(r),store:n,payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0,ssrContext:e});const h=function(e,t){if(!e)throw new Error("inject(key, value) has no key provided");if(void 0===t)throw new Error("inject(key, value) has no value provided");r[e="$"+e]=t,n[e]=r[e];const o="__nuxt_"+e+"_installed__";d.a[o]||(d.a[o]=!0,d.a.use(()=>{d.a.prototype.hasOwnProperty(e)||Object.defineProperty(d.a.prototype,e,{get(){return this.$root.$options[e]}})}))};return"function"==typeof Se&&await Se(r.context,h),"function"==typeof Te&&await Te(r.context,h),e&&e.url&&await new Promise((n,o)=>{t.push(e.url,n,()=>{const o=t.afterEach(async(t,c,l)=>{e.url=t.fullPath,r.context.route=await w(t),r.context.params=t.params||{},r.context.query=t.query||{},o(),n()})})}),{app:r,store:n,router:t}}var st={name:"NuxtLink",extends:d.a.component("RouterLink"),props:{noPrefetch:{type:Boolean,default:!1}}};d.a.component(st.name,st),d.a.component("NLink",st),global.fetch||(global.fetch=f.a);const it=()=>new d.a({render:e=>e("div")}),at=e=>t=>{if(e.redirected=t,!e.res)return void(e.nuxt.serverRendered=!1);t.query=Object(o.stringify)(t.query),t.path=t.path+(t.query?"?"+t.query:"");t.path.startsWith("http"),t.path!==e.url?(e.res.writeHead(t.status,{Location:t.path}),e.res.end()):e.redirected=!1};t.default=async e=>{e.redirected=!1,e.next=at(e),e.beforeRenderFns=[],e.nuxt={layout:"default",data:[],error:null,state:null,serverRendered:!0};const{app:t,router:n,store:o}=await ot(e),r=new d.a(t);e.meta=r.$meta(),e.asyncData={};const l=async()=>{await Promise.all(e.beforeRenderFns.map(t=>E(t,{Components:x,nuxtState:e.nuxt}))),e.rendered=()=>{e.nuxt.state=o.state}},h=async()=>{const n="function"==typeof ce.layout?ce.layout(t.context):ce.layout;return e.nuxt.layout=n||"default",await r.loadLayout(n),r.setLayout(n),await l(),r},f=()=>(t.context.error({statusCode:404,path:e.url,message:"This page could not be found"}),h()),x=v(n.match(e.url));if(o._actions&&o._actions.nuxtServerInit)try{await o.dispatch("nuxtServerInit",t.context)}catch(e){throw c.a.debug("Error occurred when calling nuxtServerInit: ",e.message),e}if(e.redirected)return it();if(e.nuxt.error)return h();let _=[];if(_=_.map(e=>"function"==typeof e?e:("function"!=typeof m[e]&&t.context.error({statusCode:500,message:"Unknown middleware "+e}),m[e])),await $(_,t.context),e.redirected)return it();if(e.nuxt.error)return h();let w=x.length?x[0].options.layout:ce.layout;if("function"==typeof w&&(w=w(t.context)),await r.loadLayout(w),e.nuxt.error)return h();if(w=r.setLayout(w),e.nuxt.layout=r.layoutName,_=[],(w=y(w)).options.middleware&&(_=_.concat(w.options.middleware)),x.forEach(e=>{e.options.middleware&&(_=_.concat(e.options.middleware))}),_=_.map(e=>"function"==typeof e?e:("function"!=typeof m[e]&&t.context.error({statusCode:500,message:"Unknown middleware "+e}),m[e])),await $(_,t.context),e.redirected)return it();if(e.nuxt.error)return h();let C=!0;try{for(const e of x)if("function"==typeof e.options.validate&&!(C=await e.options.validate(t.context)))break}catch(e){return t.context.error({statusCode:e.statusCode||"500",message:e.message}),h()}if(!C)return e._generate&&(e.nuxt.serverRendered=!1),f();if(!x.length)return f();const k=await Promise.all(x.map(n=>{const o=[];if(n.options.asyncData&&"function"==typeof n.options.asyncData){const r=E(n.options.asyncData,t.context);r.then(t=>(e.asyncData[n.cid]=t,function(e,t){if(!t&&e.options.__hasNuxtData)return;const n=e.options._originDataFn||e.options.data||function(){return{}};e.options._originDataFn=n,e.options.data=function(){const data=n.call(this);return this.$ssrContext&&(t=this.$ssrContext.asyncData[e.cid]),{...data,...t}},e.options.__hasNuxtData=!0,e._Ctor&&e._Ctor.options&&(e._Ctor.options.data=e.options.data)}(n),t)),o.push(r)}else o.push(null);return n.options.fetch?o.push(n.options.fetch(t.context)):o.push(null),Promise.all(o)}));return e.nuxt.data=k.map(e=>e[0]||{}),e.redirected?it():e.nuxt.error?h():(await l(),r)}},function(e,t){e.exports=require("element-ui/lib/upload")},function(e,t){e.exports=require("element-ui/lib/select")},function(e,t){e.exports=require("element-ui/lib/radio-group")},function(e,t){e.exports=require("element-ui/lib/radio")},function(e,t){e.exports=require("element-ui/lib/divider")},function(e,t){e.exports=require("element-ui/lib/option")},function(e,t){e.exports=require("element-ui/lib/cascader")},function(e,t){e.exports=require("element-ui/lib/tree")},function(e,t){e.exports=require("oh-my-chat")},function(e,t){e.exports=require("element-ui/lib/date-picker")},function(e,t){e.exports=require("element-ui/lib/switch")}]);
//# sourceMappingURL=server.js.map