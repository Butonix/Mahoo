(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{200:function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"a",function(){return o});const r=(t,e)=>{let n=e.slug;return t.$axios.get("v1/tag/show",{params:{slug:n}})},o=(t,e)=>{let n=e.name,r=e.parent_slug;return t.$axios.post("v1/tag/create",{name:n,parent_slug:r})}},304:function(t,e,n){"use strict";n.r(e);var r=n(6),o=n(200),c={name:"TagTree",components:{},props:{slug:{type:String,required:!0}},data:()=>({tag:null,parent:null,children:[]}),computed:{},watch:{},asyncData(t){let e=t.app,n=t.error,c=t.params;return Object(o.b)(e,{slug:c.slug}).then(data=>Object(r.a)({},data)).catch(n)},layout:"web",created(){},mounted(){},methods:{createTag(){this.$prompt("请输入标签名","创建标签",{confirmButtonText:"提交",cancelButtonText:"取消"}).then(t=>{const e=t.value.trim();if(e.length>32)return this.$toast.error("名字不能超过32个字");Object(o.a)(this,{name:e,parent_slug:this.slug}).then(data=>{this.children.push(data),this.$toast.success("标签创建成功")}).catch(t=>{this.$toast.error(t.message)})}).catch(()=>{})},combineTag(){console.log("combineTag")},removeTag(){console.log("removeTag")},redirectTag(){console.log("redirectTag")},updateTag(){console.log("updateTag")}}},l=n(13),component=Object(l.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tag-show"}},[n("el-row",{staticClass:"container"},[n("el-col",{attrs:{span:4}},[n("div",{staticClass:"panel"},[t.parent?[n("p",[t._v("父标签")]),t._v(" "),n("nuxt-link",{attrs:{to:"/tag/"+t.parent.slug}},[t._v("\n            "+t._s(t.parent.name)+"\n          ")])]:t._e(),t._v(" "),t.children.length?[n("p",[t._v("子标签")]),t._v(" "),t._l(t.children,function(e){return n("nuxt-link",{key:e.slug,attrs:{to:"/tag/"+e.slug}},[t._v("\n            "+t._s(e.name)+"\n          ")])})]:t._e()],2)]),t._v(" "),n("el-col",{attrs:{span:15}},[n("p",[t._v("当前标签")]),t._v("\n      "+t._s(t.tag.name)+"\n    ")]),t._v(" "),n("el-col",{attrs:{span:5}},[n("div",{staticClass:"panel"},[t._v("\n        当前标签活跃用户\n      ")]),t._v(" "),n("div",{staticClass:"panel"},[n("button",{on:{click:t.createTag}},[t._v("\n          添加子标签\n        ")]),t._v(" "),n("button",{on:{click:t.combineTag}},[t._v("\n          合并标签\n        ")]),t._v(" "),n("button",{on:{click:t.removeTag}},[t._v("\n          删除标签\n        ")]),t._v(" "),n("button",{on:{click:t.redirectTag}},[t._v("\n          重定向标签\n        ")]),t._v(" "),n("button",{on:{click:t.updateTag}},[t._v("\n          更新标签\n        ")])])])],1)],1)},[],!1,null,null,null);e.default=component.exports}}]);