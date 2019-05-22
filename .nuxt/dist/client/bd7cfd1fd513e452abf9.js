(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{186:function(t,e,r){"use strict";r.d(e,"d",function(){return l}),r.d(e,"a",function(){return n}),r.d(e,"e",function(){return o}),r.d(e,"c",function(){return c}),r.d(e,"b",function(){return d});const l=(t,e)=>{let r=e.slug;return t.$axios.get("v1/tag/show",{params:{slug:r}})},n=(t,e)=>{let r=e.name,l=e.parent_slug;return t.$axios.post("v1/tag/create",{name:r,parent_slug:l})},o=(t,e)=>{let r=e.name,l=e.slug,n=e.avatar,o=e.alias,c=e.intro;return t.$axios.post("v1/tag/update",{name:r,slug:l,avatar:n,alias:o,intro:c})},c=(t,e)=>{let r=e.slug,l=e.target_slug;return t.$axios.post("v1/tag/relink",{slug:r,target_slug:l})},d=(t,e)=>{let r=e.slug;return t.$axios.post("v1/tag/delete",{slug:r})}},209:function(t,e,r){},302:function(t,e,r){"use strict";var l=r(209);r.n(l).a},318:function(t,e,r){"use strict";r.r(e);r(19),r(227),r(13);var l=r(228),n=r.n(l),o=(r(218),r(219)),c=r.n(o),d=(r(240),r(241)),m=r.n(d),f=(r(242),r(94)),h=r.n(f),v=(r(243),r(244)),w=r.n(v),_=r(245),x=r(186),$={name:"",layout:"web",components:{"el-upload":w.a,"el-input":h.a,"el-form":m.a,"el-select":c.a,"el-form-item":n.a},mixins:[_.a],props:{slug:{type:String,required:!0}},data(){return{tag:null,rules:{alias:[{validator:(t,e,r)=>{e&&e.length||r(new Error("别名不能为空")),~e.indexOf(this.tag.name)||r(new Error("别名中必须包含名称")),e.some(t=>/,/.test(t))&&r(new Error("别名不能包含英文逗号")),e.join("").length>100&&r(new Error("别名最多100个字符")),r()},trigger:"submit"}]},submitting:!1}},asyncData(t){let e=t.app,r=t.error,l=t.params;return Object(x.d)(e,{slug:l.slug}).then(data=>{const t=data.tag;return t.alias=t.alias.split(","),{tag:t}}).catch(r)},methods:{avatarUploadSuccess(t){this.tag.avatar=t.data.url},submit(){this.$refs.form.validate(t=>{t&&(this.submitting=!0,Object(x.e)(this,{slug:this.tag.slug,name:this.tag.name,avatar:this.tag.avatar,alias:this.tag.alias.join(","),intro:this.tag.intro}).then(()=>{this.$toast.success("修改成功").then(()=>{window.location.reload()})}).catch(t=>{this.$toast.error(t.message),this.submitting=!1}))})}}},k=(r(302),r(6)),component=Object(k.a)($,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"tag-edit"}},[r("el-row",[r("el-col",{attrs:{span:12,offset:6}},[r("el-form",{ref:"form",attrs:{model:t.tag,rules:t.rules,disabled:t.submitting,"label-position":"top"}},[r("el-form-item",{attrs:{label:"头像"}},[r("div",{staticClass:"avatar-field"},[r("img",{staticClass:"avatar",attrs:{src:t.$resize(t.tag.avatar,{width:200,height:200})}}),t._v(" "),r("el-upload",{attrs:{"show-file-list":!1,action:t.imageUploadAction,limit:t.uploadImageLimit,data:t.uploadHeaders,accept:t.imageUploadAccept,"before-upload":t.handleImageUploadBefore,"on-success":t.avatarUploadSuccess,"on-error":t.handleImageUploadError}},[r("el-button",{attrs:{type:"success",plain:"",round:"",size:"mini"}},[t._v("\n                上传标签封面\n              ")])],1)],1)]),t._v(" "),r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{attrs:{disabled:""},model:{value:t.tag.name,callback:function(e){t.$set(t.tag,"name",e)},expression:"tag.name"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"别名",prop:"alias"}},[r("p",{staticClass:"form-tip"},[t._v("\n            提示：按回车键生效\n          ")]),t._v(" "),r("el-select",{staticClass:"hidden-select-input",attrs:{multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:"请输入标签别名","popper-class":"hidden-select-options"},model:{value:t.tag.alias,callback:function(e){t.$set(t.tag,"alias",e)},expression:"tag.alias"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"简介"}},[r("el-input",{attrs:{type:"textarea","show-word-limit":!0,rows:8,maxlength:"233",resize:"none",placeholder:"请输入板块介绍"},model:{value:t.tag.intro,callback:function(e){t.$set(t.tag,"intro",e)},expression:"tag.intro"}})],1),t._v(" "),r("el-form-item",[r("el-button",{attrs:{loading:t.submitting,type:"success",round:""},on:{click:t.submit}},[t._v("\n            保存更改\n          ")])],1)],1)],1)],1)],1)},[],!1,null,null,null);e.default=component.exports}}]);