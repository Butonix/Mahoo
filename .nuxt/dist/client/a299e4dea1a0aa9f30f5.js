(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{259:function(t,n,o){},288:function(t,n,o){"use strict";var e=o(259);o.n(e).a},333:function(t,n,o){"use strict";o.r(n);var e={layout:"web",data:()=>({pageInfo:"123"}),methods:{openAlertModal(){this.$captcha(()=>{this.$toast.success("ok")})},openConfirmModal(){this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{this.$toast.success("删除成功!")}).catch(()=>{this.$toast.error("已取消删除")})},openPromptModal(){this.$prompt("请输入邮箱","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/[\w!#$%&'*+\/=?^_`{|}~-]+(?:\.[\w!#$%&'*+\/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,inputErrorMessage:"邮箱格式不正确"}).then(t=>{let n=t.value;this.$toast.success("你的邮箱是: "+n)}).catch(()=>{this.$toast.error("取消输入")})},showMessage(){this.$toast.success("hello world")},throwError(){throw new Error("2333")}}},r=(o(288),o(7)),component=Object(r.a)(e,function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[o("el-button",[t._v("默认按钮")]),t._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:t.openAlertModal}},[t._v("\n    主要按钮\n  ")]),t._v(" "),o("el-button",{attrs:{type:"success"},on:{click:t.openConfirmModal}},[t._v("\n    成功按钮\n  ")]),t._v(" "),o("el-button",{attrs:{type:"info"},on:{click:t.openPromptModal}},[t._v("\n    信息按钮\n  ")]),t._v(" "),o("el-button",{attrs:{type:"warning"},on:{click:t.showMessage}},[t._v("\n    警告按钮\n  ")]),t._v(" "),o("el-button",{attrs:{type:"danger"},on:{click:t.throwError}},[t._v("\n    危险按钮\n  ")])],1)},[],!1,null,null,null);n.default=component.exports}}]);