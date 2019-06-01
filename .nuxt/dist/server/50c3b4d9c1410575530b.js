exports.ids=[13],exports.modules={102:function(t,v,_){"use strict";_.r(v);var e=_(52),n={name:"TagTree",components:{},head(){const{tag:t}=this;return{title:`${t.name} - 咔哩吧`,meta:[{hid:"keywords",name:"keywords",content:`${t.alias},C站,calibur,咔哩吧,ACG,二次元,社区`}]}},props:{slug:{type:String,required:!0}},data:()=>({tag:null,parent:null,children:[]}),computed:{},watch:{},asyncData:({app:t,error:v,params:_})=>e.d(t,{slug:_.slug}).then(data=>({...data})).catch(v),layout:"web",created(){},mounted(){},methods:{createTag(){this.$prompt("请输入标签名","创建标签",{confirmButtonText:"提交",cancelButtonText:"取消"}).then(({value:t})=>{const v=t.trim();if(v.length>32)return this.$toast.error("名字不能超过32个字");e.a(this,{name:v,parent_slug:this.slug}).then(data=>{this.children.push(data),this.$toast.success("标签创建成功")}).catch(t=>{this.$toast.error(t.message)})}).catch(()=>{})},combineTag(){console.log("combineTag")},deleteTag(){this.$confirm("此操作将永久删除该文件, 是否继续?","删除标签",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{e.b(this,{slug:this.slug}).then(()=>{this.$toast.success("标签删除成功").then(()=>{window.location.reload()})}).catch(t=>{this.$toast.error(t.message)})}).catch(()=>{})},relinkTag(){this.$prompt("请输入目标父节点id","移动标签",{confirmButtonText:"提交",cancelButtonText:"取消",inputPattern:/^[a-z0-9]+$/i,inputErrorMessage:"格式不正确"}).then(({value:t})=>{e.c(this,{slug:this.slug,target_slug:t}).then(()=>{this.$toast.success("标签移动成功")}).catch(t=>{this.$toast.error(t.message)})}).catch(()=>{})},updateTag(){this.$prompt("请输入标签名","更新标签",{confirmButtonText:"提交",cancelButtonText:"取消"}).then(({value:t})=>{const v=t.trim();if(v.length>32)return this.$toast.error("名字不能超过32个字");e.e(this,{name:v,slug:this.slug,avatar:""}).then(()=>{this.$toast.success("标签更新成功")}).catch(t=>{this.$toast.error(t.message)})}).catch(()=>{})}}},r=_(1);var component=Object(r.a)(n,function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("div",{attrs:{id:"tag-show"}},[_("el-row",{staticClass:"container"},[_("el-col",{staticClass:"left-aside",attrs:{span:5}},[t.parent?_("ul",{staticClass:"parent-node"},[_("li",{staticClass:"node"},[_("nuxt-link",{attrs:{to:"/tag/"+t.parent.slug}},[_("img",{attrs:{src:t.$resize(t.parent.avatar,{width:32}),alt:t.parent.name}}),t._v(" "),_("span",{domProps:{textContent:t._s(t.parent.name)}})])],1)]):t._e(),t._v(" "),t.children.length?_("ul",{staticClass:"child-node"},t._l(t.children.slice(0,10),function(v){return _("li",{key:v.slug,staticClass:"node"},[_("nuxt-link",{attrs:{to:"/tag/"+v.slug}},[_("img",{attrs:{src:t.$resize(v.avatar,{width:32}),alt:v.name}}),t._v(" "),_("span",{domProps:{textContent:t._s(v.name)}})])],1)}),0):t._e()]),t._v(" "),_("el-col",{staticClass:"main-wrap",attrs:{span:14}},[_("p",[t._v("当前标签")]),t._v("\n      "+t._s(t.tag.name)+"\n      "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")]),t._v(" "),_("p",[t._v("123")])]),t._v(" "),_("el-col",{attrs:{span:5}},[_("div",{staticClass:"panel"},[t._v("\n        当前标签活跃用户\n      ")]),t._v(" "),_("div",{staticClass:"panel"},[_("button",{on:{click:t.createTag}},[t._v("\n          添加子标签\n        ")]),t._v(" "),_("button",{on:{click:t.combineTag}},[t._v("\n          合并标签\n        ")]),t._v(" "),_("button",{on:{click:t.deleteTag}},[t._v("\n          删除标签\n        ")]),t._v(" "),_("button",{on:{click:t.relinkTag}},[t._v("\n          修改父节点\n        ")]),t._v(" "),_("nuxt-link",{attrs:{to:t.$alias.tag(t.slug,"edit")}},[_("button",[t._v("\n            更新标签\n          ")])])],1)])],1)],1)},[],!1,function(t){var v=_(79);v.__inject__&&v.__inject__(t)},null,"5d3bcdf8");v.default=component.exports},52:function(t,v,_){"use strict";_.d(v,"d",function(){return e}),_.d(v,"a",function(){return n}),_.d(v,"e",function(){return r}),_.d(v,"c",function(){return o}),_.d(v,"b",function(){return c});const e=(t,{slug:v})=>t.$axios.$get("v1/tag/show",{params:{slug:v}}),n=(t,{name:v,parent_slug:_})=>t.$axios.$post("v1/tag/create",{name:v,parent_slug:_}),r=(t,{name:v,slug:_,avatar:e,alias:n,intro:r})=>t.$axios.$post("v1/tag/update",{name:v,slug:_,avatar:e,alias:n,intro:r}),o=(t,{slug:v,target_slug:_})=>t.$axios.$post("v1/tag/relink",{slug:v,target_slug:_}),c=(t,{slug:v})=>t.$axios.$post("v1/tag/delete",{slug:v})},60:function(t,v){},79:function(t,v,_){"use strict";_.r(v);var e=_(60),n=_.n(e);for(var r in e)"default"!==r&&function(t){_.d(v,t,function(){return e[t]})}(r);v.default=n.a}};
//# sourceMappingURL=50c3b4d9c1410575530b.js.map