(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{282:function(t,e,n){"use strict";var v=n(106),o={name:"CreateTagBtn",props:{text:{type:String,default:"分区"},parent:{type:String,required:!0}},methods:{actionCreate(){this.$prompt("请输入".concat(this.text,"名"),"新建".concat(this.text),{confirmButtonText:"提交",cancelButtonText:"取消"}).then(t=>{let{value:e}=t;const n=e.trim();if(n.length>32)return this.$toast.error("名字不能超过32个字");Object(v.b)(this,{name:n,parent_slug:this.parent}).then(data=>{this.$emit("create",data)}).catch(t=>{this.$toast.error(t.message)})}).catch(()=>{})}}},_=n(11),component=Object(_.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("button",{attrs:{type:"button"},on:{click:this.actionCreate}},[e("i",{staticClass:"el-icon-folder-add"}),this._v(" "),e("span",[this._v("新建"+this._s(this.text))])])},[],!1,null,null,null);e.a=component.exports},333:function(t,e,n){},334:function(t,e,n){},406:function(t,e,n){"use strict";var v=n(333);n.n(v).a},407:function(t,e,n){"use strict";var v=n(334);n.n(v).a},455:function(t,e,n){"use strict";n.r(e);var v=n(7),o=n(106);function _(t,e){const n=e?"scrollTop":"scrollLeft";let v=t[e?"pageYOffset":"pageXOffset"];return"number"!=typeof v&&(v=window.document.documentElement[n]),v}var l={name:"Affix",props:{top:{type:Number,default:0},bottom:{type:Number,default:void 0}},data:()=>({affix:!1,styles:{},slot:!1,slotStyle:{}}),computed:{offsetType(){let t="top";return this.bottom>=0&&(t="bottom"),t},classes(){return[{"v-affix":this.affix}]}},mounted(){const t=this._getScrollTarget();this.$utils.on(t,"scroll",this.handleScroll),this.$utils.on(t,"resize",this.handleScroll),this.$nextTick(()=>{this.handleScroll({type:"scroll"})})},beforeDestroy(){const t=this._getScrollTarget();this.$utils.off(t,"scroll",this.handleScroll),this.$utils.off(t,"resize",this.handleScroll)},methods:{_getScrollTarget(){let t=this.$el;if(!t)return null;for(;t&&"HTML"!==t.tagName&&"BOYD"!==t.tagName&&1===t.nodeType;){const e=window.getComputedStyle(t).overflowY;if("scroll"===e||"auto"===e)return"HTML"===t.tagName||"BODY"===t.tagName?document:t;t=t.parentNode}return document},handleScroll(t){const e=this.affix,n=_(window,!0),v=function(element){const rect=element.getBoundingClientRect(),t=_(window,!0),e=_(window),n=window.document.body,v=n.clientTop||0,o=n.clientLeft||0;return{top:rect.top+t-v,left:rect.left+e-o}}(this.$el),o=window.innerHeight,l=this.$el.getElementsByTagName("div")[0].offsetHeight,r=!e||"resize"===t.type;v.top-this.top<n&&"top"===this.offsetType&&r?(this.affix=!0,this.slotStyle={width:this.$refs.point.clientWidth+"px",height:this.$refs.point.clientHeight+"px"},this.slot=!0,this.styles={top:"".concat(this.top,"px"),left:"".concat(v.left,"px"),width:"".concat(this.$el.offsetWidth,"px")},this.$emit("on-change",!0)):v.top-this.top>n&&"top"===this.offsetType&&e&&(this.slot=!1,this.slotStyle={},this.affix=!1,this.styles=null,this.$emit("on-change",!1)),v.top+this.bottom+l>n+o&&"bottom"===this.offsetType&&r?(this.affix=!0,this.styles={bottom:"".concat(this.bottom,"px"),left:"".concat(v.left,"px"),width:"".concat(this.$el.offsetWidth,"px")},this.$emit("on-change",!0)):v.top+this.bottom+l<n+o&&"bottom"===this.offsetType&&e&&(this.affix=!1,this.styles=null,this.$emit("on-change",!1))}}},r=(n(406),n(11)),c={name:"TagShow",components:{Affix:Object(r.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{ref:"point",class:this.classes,style:this.styles},[this._t("default")],2),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:this.slot,expression:"slot"}],style:this.slotStyle})])},[],!1,null,null,null).exports,CreateTagBtn:n(282).a},head(){const{tag:t}=this;return{title:t.name,meta:[{hid:"keywords",name:"keywords",content:t.alias},{hid:"description",name:"description",content:"".concat(t.name,",").concat(t.intro)}]}},props:{slug:{type:String,required:!0}},data:()=>({tag:null,parent:null,children:[]}),computed:{},watch:{},asyncData(t){let{app:e,error:n,params:_}=t;return o.e(e,_).then(data=>Object(v.a)({},data)).catch(n)},layout:"web",created(){},mounted(){},beforeMount(){this.patchTag()},methods:{patchTag(){this.$axios.$get("v1/tag/patch",{params:{slug:this.slug}}).then(data=>{this.tag=Object.assign(this.tag,data)}).catch(()=>{})},handleCreate(data){this.children.push(data),this.$toast.success("标签创建成功")},combineTag(){console.log("combineTag")},deleteTag(){this.$confirm("此操作将永久删除该文件, 是否继续?","删除标签").then(()=>{o.c(this,{slug:this.slug}).then(()=>{this.$toast.success("标签删除成功").then(()=>{window.location.reload()})}).catch(t=>{this.$toast.error(t.message)})}).catch(()=>{})},relinkTag(){this.$prompt("请输入目标父节点id","移动标签",{confirmButtonText:"提交",cancelButtonText:"取消",inputPattern:/^[a-z0-9]+$/i,inputErrorMessage:"格式不正确"}).then(t=>{let{value:e}=t;o.d(this,{slug:this.slug,target_slug:e}).then(()=>{this.$toast.success("标签移动成功")}).catch(t=>{this.$toast.error(t.message)})}).catch(()=>{})},updateTag(){this.$prompt("请输入标签名","更新标签",{confirmButtonText:"提交",cancelButtonText:"取消"}).then(t=>{let{value:e}=t;const n=e.trim();if(n.length>32)return this.$toast.error("名字不能超过32个字");o.f(this,{name:n,slug:this.slug,avatar:""}).then(()=>{this.$toast.success("标签更新成功")}).catch(t=>{this.$toast.error(t.message)})}).catch(()=>{})}}},h=(n(407),Object(r.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tag-show"}},[n("ElRow",{staticClass:"container"},[n("ElCol",{staticClass:"left-aside",attrs:{span:5}},[n("Affix",{attrs:{top:50}},[t.children.length?n("ul",{staticClass:"child-node"},t._l(t.children.slice(0,10),function(e){return n("li",{key:e.slug,staticClass:"node"},[n("NLink",{attrs:{to:"/tag/"+e.slug}},[n("VImg",{attrs:{src:e.avatar,width:"32",height:"32",alt:e.name}}),t._v(" "),n("span",{domProps:{textContent:t._s(e.name)}})],1)],1)}),0):t._e(),t._v("\n         \n      ")])],1),t._v(" "),n("ElCol",{staticClass:"main-wrap",attrs:{span:14}},[n("p",[t._v("当前标签")]),t._v("\n      "+t._s(t.tag.name)+"\n      "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")]),t._v(" "),n("p",[t._v("123")])]),t._v(" "),n("ElCol",{attrs:{span:5}},[n("Affix",{attrs:{top:50}},[n("div",[t._v("\n          当前标签活跃用户\n        ")]),t._v(" "),n("div",[n("CreateTagBtn",{attrs:{parent:t.slug,text:"分区"},on:{create:t.handleCreate}}),t._v(" "),n("button",{on:{click:t.combineTag}},[t._v("\n            合并标签\n          ")]),t._v(" "),n("button",{on:{click:t.deleteTag}},[t._v("\n            删除标签\n          ")]),t._v(" "),n("button",{on:{click:t.relinkTag}},[t._v("\n            修改父节点\n          ")]),t._v(" "),n("NLink",{attrs:{to:t.$alias.tag(t.slug,"edit")}},[n("button",[t._v("\n              更新标签\n            ")])])],1)])],1)],1)],1)},[],!1,null,null,null));e.default=h.exports}}]);