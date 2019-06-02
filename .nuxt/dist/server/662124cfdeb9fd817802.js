exports.ids=[16],exports.modules={61:function(e,t){},62:function(e,t){},63:function(e,t){},80:function(e,t,r){"use strict";r.r(t);var n=r(61),c=r.n(n);for(var l in n)"default"!==l&&function(e){r.d(t,e,function(){return n[e]})}(l);t.default=c.a},81:function(e,t,r){"use strict";r.r(t);var n=r(62),c=r.n(n);for(var l in n)"default"!==l&&function(e){r.d(t,e,function(){return n[e]})}(l);t.default=c.a},82:function(e,t,r){"use strict";r.r(t);var n=r(63),c=r.n(n);for(var l in n)"default"!==l&&function(e){r.d(t,e,function(){return n[e]})}(l);t.default=c.a},92:function(e,t,r){"use strict";r.r(t);var n=r(7),c={name:"UserAvatar",props:{user:{type:Object,required:!0},avatar:{type:String,default:""},size:{type:Number,default:40}}},l=r(1);var o=Object(l.a)(c,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nuxt-link",{staticClass:"user-avatar",style:{width:e.size+"px",height:e.size+"px"},attrs:{to:e.$alias.user(e.user.slug)}},[r("img",{staticClass:"avatar",attrs:{src:e.$resize(e.avatar||e.user.avatar,{width:e.size}),alt:e.user.nickname}})])},[],!1,function(e){var t=r(80);t.__inject__&&t.__inject__(e)},null,"8c0ebd70").exports,d={name:"UserNickname",props:{user:{type:Object,required:!0},sex:{type:Number,default:0},level:{type:Boolean,default:!0},badge:{type:Boolean,default:!0},nickname:{type:String,default:""}},computed:{sexClass(){switch(this.sex){case-1:return{name:"simi",color:"limegreen"};case 0:return{name:"weizhi",color:"gold"};case 1:return{name:"nan",color:"deepskyblue"};case 2:return{name:"nv",color:"hotpink"};default:return{name:"weizhi",color:"gold"}}}}};var _={layout:"web",components:{UserAvatar:o,UserNickname:Object(l.a)(d,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nuxt-link",{staticClass:"user-nickname",attrs:{to:e.$alias.user(e.user.slug)}},[r("div",{staticClass:"nickname"},[r("p",{staticClass:"oneline",domProps:{textContent:e._s(e.nickname||e.user.nickname)}})]),e._v(" "),e.sex?r("span",{staticClass:"badge"},[r("i",{staticClass:"iconfont ic-sex",class:"ic-"+e.sexClass.name,style:{backgroundColor:e.sexClass.color}})]):e._e(),e._v(" "),e.level?r("span",{staticClass:"badge ic-level",domProps:{textContent:e._s("Lv"+e.user.level)}}):e._e(),e._v(" "),e.badge?e._l(e.user.roles,function(t,n){return r("span",{key:n,staticClass:"badge ic-badge",domProps:{textContent:e._s(t)}})}):e._e()],2)},[],!1,function(e){var t=r(81);t.__inject__&&t.__inject__(e)},null,"5b0047c6").exports},props:{slug:{type:String,required:!0}},data:()=>({user:null}),computed:{isMine(){return!!this.$store.state.isAuth&&this.self.slug===this.slug},self(){return this.$store.state.user},avatar(){return this.isMine?this.self.avatar:this.user.avatar},banner(){return this.isMine?this.self.banner:this.user.banner},nickname(){return this.isMine?this.self.nickname:this.user.nickname},signature(){return this.isMine?this.self.signature:this.user.signature},sex(){return this.isMine?this.self.sex_secret?-1:this.self.sex:this.user.sex},headers(){const e=[{name:"动态",icon:"homepage_fill",color:"#00c091",route:`/user/${this.slug}/`}];return this.isMine&&e.push({name:"设置",icon:"setup_fill",color:"#23c9ed",route:`/user/${this.slug}/setting/`}),e}},watch:{},asyncData:({app:e,error:t,params:r})=>Object(n.c)(e,{slug:r.slug}).then(e=>({user:e})).catch(t),created(){},mounted(){},methods:{}};var h=Object(l.a)(_,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"user-layout"}},[e._ssrNode('<div id="user-panel" class="container">',"</div>",[e._ssrNode('<div class="banner"'+e._ssrStyle(null,{backgroundImage:"url("+e.$resize(e.banner,{height:200,mode:2})+")"},null)+">","</div>",[e._ssrNode('<div class="user">',"</div>",[r("user-avatar",{attrs:{user:e.user,avatar:e.avatar,size:68}}),e._ssrNode(" "),e._ssrNode('<div class="content">',"</div>",[r("user-nickname",{attrs:{user:e.user,nickname:e.nickname,sex:e.sex}}),e._ssrNode(' <p class="signature oneline">'+e._ssrEscape(e._s(e.signature))+"</p>")],2)],2)]),e._ssrNode(" "),r("v-switcher",{attrs:{headers:e.headers,routable:!0,"item-height":66,"anchor-trigger":"hover",align:"start"}},e._l(e.headers,function(t,n){return r("nuxt-link",{key:n,attrs:{slot:"tab-"+n,to:t.route},slot:"tab-"+n},[r("i",{staticClass:"iconfont",class:"ic-"+t.icon,style:{color:t.color}}),e._v(" "),r("span",{domProps:{textContent:e._s(t.name)}})])}),1)],2),e._ssrNode(" "),r("nuxt-child")],2)},[],!1,function(e){var t=r(82);t.__inject__&&t.__inject__(e)},null,"04cb800a");t.default=h.exports}};
//# sourceMappingURL=662124cfdeb9fd817802.js.map