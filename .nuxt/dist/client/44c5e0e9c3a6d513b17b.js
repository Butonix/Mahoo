(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{341:function(t,n,e){"use strict";var c=e(134),o={name:"CreateTagBtn",props:{text:{type:String,default:"分区"},parent:{type:String,required:!0}},methods:{actionCreate:function(){var t=this;this.$prompt("请输入".concat(this.text,"名"),"新建".concat(this.text),{confirmButtonText:"提交",cancelButtonText:"取消"}).then(function(n){var e=n.value.trim();if(e.length>32)return t.$toast.error("名字不能超过32个字");Object(c.b)(t,{name:e,parent_slug:t.parent}).then(function(data){t.$emit("create",data)}).catch(function(n){t.$toast.error(n.message)})}).catch(function(){})}}},r=e(18),component=Object(r.a)(o,function(){var t=this.$createElement,n=this._self._c||t;return n("button",{attrs:{type:"button"},on:{click:this.actionCreate}},[n("i",{staticClass:"el-icon-folder-add"}),this._v(" "),n("span",[this._v("新建"+this._s(this.text))])])},[],!1,null,null,null);n.a=component.exports},402:function(t,n,e){},486:function(t,n,e){"use strict";var c=e(402);e.n(c).a},572:function(t,n,e){"use strict";e.r(n);var c=e(16),o=(e(33),e(134)),r=e(354),l=e(341),h=e(355),f={name:"TagShow",components:{Affix:r.a,CreateTagBtn:l.a,PinFlowList:h.a},head:function(){var t=this.tag;return{title:t.name,meta:[{hid:"keywords",name:"keywords",content:t.alias},{hid:"description",name:"description",content:"".concat(t.name,",").concat(t.intro)}]}},props:{slug:{type:String,required:!0}},data:function(){return{tag:null,parent:null,children:[]}},computed:{},watch:{},asyncData:function(t){var n=t.app,e=t.error,r=t.params;return o.e(n,r).then(function(data){return Object(c.a)({},data)}).catch(e)},layout:"web",created:function(){},mounted:function(){},beforeMount:function(){this.patchTag()},methods:{patchTag:function(){var t=this;this.$axios.$get("v1/tag/patch",{params:{slug:this.slug}}).then(function(data){t.tag=t.$set(t,"tag",Object.assign(t.tag,data))}).catch(function(){})},handleCreate:function(data){this.children.push(data),this.$toast.success("标签创建成功")},combineTag:function(){console.log("combineTag")},deleteTag:function(){var t=this;this.$confirm("此操作将永久删除该文件, 是否继续?","删除标签").then(function(){o.c(t,{slug:t.slug}).then(function(){t.$toast.success("标签删除成功").then(function(){window.location.reload()})}).catch(function(n){t.$toast.error(n.message)})}).catch(function(){})},relinkTag:function(){var t=this;this.$prompt("请输入目标父节点id","移动标签",{confirmButtonText:"提交",cancelButtonText:"取消",inputPattern:/^[a-z0-9]+$/i,inputErrorMessage:"格式不正确"}).then(function(n){var e=n.value;o.d(t,{slug:t.slug,target_slug:e}).then(function(){t.$toast.success("标签移动成功")}).catch(function(n){t.$toast.error(n.message)})}).catch(function(){})},updateTag:function(){var t=this;this.$prompt("请输入标签名","更新标签",{confirmButtonText:"提交",cancelButtonText:"取消"}).then(function(n){var e=n.value.trim();if(e.length>32)return t.$toast.error("名字不能超过32个字");o.f(t,{name:e,slug:t.slug,avatar:""}).then(function(){t.$toast.success("标签更新成功")}).catch(function(n){t.$toast.error(n.message)})}).catch(function(){})}}},d=(e(486),e(18)),component=Object(d.a)(f,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"tag-show"}},[e("ElRow",{staticClass:"container"},[e("ElCol",{staticClass:"left-aside",attrs:{span:5}},[e("Affix",{attrs:{top:50}},[t.children.length?e("ul",{staticClass:"child-node"},t._l(t.children.slice(0,10),function(n){return e("li",{key:n.slug,staticClass:"node"},[e("NLink",{attrs:{to:"/tag/"+n.slug}},[e("VImg",{attrs:{src:n.avatar,width:"32",height:"32",alt:n.name}}),t._v(" "),e("span",{domProps:{textContent:t._s(n.name)}})],1)],1)}),0):t._e(),t._v("\n         \n      ")])],1),t._v(" "),e("ElCol",{staticClass:"main-wrap",attrs:{span:14}},[e("PinFlowList",{attrs:{slug:t.slug}}),t._v("\n       \n    ")],1),t._v(" "),e("ElCol",{attrs:{span:5}})],1)],1)},[],!1,null,null,null);n.default=component.exports}}]);