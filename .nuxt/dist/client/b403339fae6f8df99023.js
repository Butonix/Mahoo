(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{269:function(e,t,r){},270:function(e,t,r){},271:function(e,t,r){},302:function(e,t,r){"use strict";var n=r(269);r.n(n).a},303:function(e,t,r){"use strict";var n=r(270);r.n(n).a},304:function(e,t,r){"use strict";var n=r(271);r.n(n).a},320:function(e,t,r){"use strict";r.r(t);var n=r(59),l={name:"UserAvatar",props:{user:{type:Object,required:!0},avatar:{type:String,default:""},size:{type:Number,default:40}}},c=(r(302),r(17)),o=Object(c.a)(l,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nuxt-link",{staticClass:"user-avatar",style:{width:e.size+"px",height:e.size+"px"},attrs:{to:e.$alias.user(e.user.slug)}},[r("img",{staticClass:"avatar",attrs:{src:e.$resize(e.avatar||e.user.avatar,{width:e.size}),alt:e.user.nickname}})])},[],!1,null,null,null).exports,h={name:"UserNickname",props:{user:{type:Object,required:!0},sex:{type:Number,default:0},level:{type:Boolean,default:!0},badge:{type:Boolean,default:!0},nickname:{type:String,default:""}},computed:{sexClass(){switch(this.sex){case-1:return{name:"simi",color:"limegreen"};case 0:return{name:"weizhi",color:"gold"};case 1:return{name:"nan",color:"deepskyblue"};case 2:return{name:"nv",color:"hotpink"};default:return{name:"weizhi",color:"gold"}}}}},d=(r(303),{layout:"web",components:{UserAvatar:o,UserNickname:Object(c.a)(h,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nuxt-link",{staticClass:"user-nickname",attrs:{to:e.$alias.user(e.user.slug)}},[r("div",{staticClass:"nickname"},[r("p",{staticClass:"oneline",domProps:{textContent:e._s(e.nickname||e.user.nickname)}})]),e._v(" "),e.sex?r("span",{staticClass:"badge"},[r("i",{staticClass:"iconfont ic-sex",class:"ic-"+e.sexClass.name,style:{backgroundColor:e.sexClass.color}})]):e._e(),e._v(" "),e.level?r("span",{staticClass:"badge ic-level",domProps:{textContent:e._s("Lv"+e.user.level)}}):e._e(),e._v(" "),e.badge?e._l(e.user.roles,function(t,n){return r("span",{key:n,staticClass:"badge ic-badge",domProps:{textContent:e._s(t)}})}):e._e()],2)},[],!1,null,null,null).exports},props:{slug:{type:String,required:!0}},data:()=>({user:null}),computed:{isMine(){return!!this.$store.state.isAuth&&this.self.slug===this.slug},self(){return this.$store.state.user},avatar(){return this.isMine?this.self.avatar:this.user.avatar},banner(){return this.isMine?this.self.banner:this.user.banner},nickname(){return this.isMine?this.self.nickname:this.user.nickname},signature(){return this.isMine?this.self.signature:this.user.signature},sex(){return this.isMine?this.self.sex_secret?-1:this.self.sex:this.user.sex},headers(){const e=[{name:"动态",icon:"homepage_fill",color:"#00c091",route:"/user/".concat(this.slug,"/")}];return this.isMine&&e.push({name:"设置",icon:"setup_fill",color:"#23c9ed",route:"/user/".concat(this.slug,"/setting/")}),e}},watch:{},asyncData(e){let{app:t,error:r,params:l}=e;return Object(n.c)(t,{slug:l.slug}).then(e=>({user:e})).catch(r)},created(){},mounted(){},methods:{}}),m=(r(304),Object(c.a)(d,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"user-layout"}},[r("div",{staticClass:"container",attrs:{id:"user-panel"}},[r("div",{staticClass:"banner",style:{backgroundImage:"url("+e.$resize(e.banner,{height:200,mode:2})+")"}},[r("div",{staticClass:"user"},[r("user-avatar",{attrs:{user:e.user,avatar:e.avatar,size:68}}),e._v(" "),r("div",{staticClass:"content"},[r("user-nickname",{attrs:{user:e.user,nickname:e.nickname,sex:e.sex}}),e._v(" "),r("p",{staticClass:"signature oneline",domProps:{textContent:e._s(e.signature)}})],1)],1)]),e._v(" "),r("v-switcher",{attrs:{headers:e.headers,routable:!0,"item-height":66,"anchor-trigger":"hover",align:"start"}},e._l(e.headers,function(t,n){return r("nuxt-link",{key:n,attrs:{slot:"tab-"+n,to:t.route},slot:"tab-"+n},[r("i",{staticClass:"iconfont",class:"ic-"+t.icon,style:{color:t.color}}),e._v(" "),r("span",{domProps:{textContent:e._s(t.name)}})])}),1)],1),e._v(" "),r("nuxt-child")],1)},[],!1,null,null,null));t.default=m.exports}}]);