(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{330:function(t,n,e){"use strict";var l=e(136),o={name:"CreateTagBtn",props:{text:{type:String,default:"分区"},parent:{type:String,required:!0}},methods:{actionCreate:function(){var t=this;this.$prompt("请输入".concat(this.text,"名"),"新建".concat(this.text),{confirmButtonText:"提交",cancelButtonText:"取消"}).then(function(n){var e=n.value.trim();if(e.length>32)return t.$toast.error("名字不能超过32个字");Object(l.b)(t,{name:e,parent_slug:t.parent}).then(function(data){t.$emit("create",data)}).catch(function(n){t.$toast.error(n.message)})}).catch(function(){})}}},r=e(15),component=Object(r.a)(o,function(){var t=this.$createElement,n=this._self._c||t;return n("button",{attrs:{type:"button"},on:{click:this.actionCreate}},[n("i",{staticClass:"el-icon-folder-add"}),this._v(" "),n("span",[this._v("新建"+this._s(this.text))])])},[],!1,null,null,null);n.a=component.exports},368:function(t,n,e){},434:function(t,n,e){"use strict";var l=e(368);e.n(l).a},489:function(t,n,e){"use strict";e.r(n);var l=e(136),o={name:"UserEmotion",components:{CreateTagBtn:e(330).a},props:{user:{type:Object,required:!0}},data:function(){return{tags:null}},computed:{isMine:function(){return this.$store.getters.isMine(this.user.slug)},TA:function(){return this.$utils.convertTA(this.user.sex,this.isMine)}},asyncData:function(t){var n=t.app,e=t.error,o=t.params;return Object(l.a)(n,o).then(function(t){return{tags:t}}).catch(e)},methods:{handleCreateNotebook:function(data){this.tags.notebook.unshift(data)}}},r=(e(434),e(15)),component=Object(r.a)(o,function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.tags?e("div",{attrs:{id:"user-emotion"}},[e("div",{staticClass:"block"},[e("div",{staticClass:"block-title"},[e("nuxt-link",{staticClass:"text",attrs:{to:"bangumi",append:""}},[e("span",{staticClass:"fade-link"},[t._v("看过的动漫")]),t._v(" "),t.tags.bangumi.length?e("i",{staticClass:"count",domProps:{textContent:t._s(t.tags.bangumi.length)}}):t._e()]),t._v(" "),t.tags.bangumi.length>4?e("nuxt-link",{staticClass:"more fade-link",attrs:{to:"bangumi",append:""}},[e("span",[t._v("更多")]),t._v(" "),e("i",{staticClass:"el-icon-arrow-right"})]):t.tags.bangumi.length?t._e():[e("p",{staticClass:"empty"},[t._v("\n          "+t._s(t.TA)+"还不是一个动漫迷~\n        ")]),t._v(" "),e("span")]],2),t._v(" "),t.tags.bangumi.length?e("ul",{staticClass:"bangumis clearfix"},t._l(t.tags.bangumi.slice(0,4),function(n){return e("li",{key:n.slug},[e("nuxt-link",{staticClass:"avatar",attrs:{target:"_blank",to:t.$alias.tag(n.slug)}},[e("v-img",{attrs:{src:n.avatar,width:"110",height:"114",alt:n.name}})],1),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"oneline"},[e("nuxt-link",{staticClass:"name fade-link",attrs:{target:"_blank",to:t.$alias.tag(n.slug)},domProps:{textContent:t._s(n.name)}})],1),t._v(" "),e("p",{staticClass:"desc",domProps:{textContent:t._s(n.intro)}})])],1)}),0):t._e()]),t._v(" "),e("div",{staticClass:"block"},[e("div",{staticClass:"block-title"},[e("nuxt-link",{staticClass:"text",attrs:{to:"game",append:""}},[e("span",{staticClass:"fade-link"},[t._v("玩过的游戏")]),t._v(" "),t.tags.game.length?e("i",{staticClass:"count",domProps:{textContent:t._s(t.tags.game.length)}}):t._e()]),t._v(" "),t.tags.game.length>5?e("nuxt-link",{staticClass:"more fade-link",attrs:{to:"game",append:""}},[e("span",[t._v("更多")]),t._v(" "),e("i",{staticClass:"el-icon-arrow-right"})]):t.tags.game.length?t._e():[e("p",{staticClass:"empty"},[t._v("\n          "+t._s(t.TA)+"从来不玩游戏~\n        ")]),t._v(" "),e("span")]],2),t._v(" "),t.tags.game.length?e("ul",{staticClass:"games clearfix"},t._l(t.tags.game.slice(0,5),function(n){return e("li",{key:n.slug},[e("nuxt-link",{attrs:{target:"_blank",to:t.$alias.tag(n.slug)}},[e("v-img",{attrs:{src:n.avatar,width:"150",height:"150",alt:n.name}}),t._v(" "),e("p",{staticClass:"oneline fade-link",domProps:{textContent:t._s(n.name)}})],1)],1)}),0):t._e()]),t._v(" "),e("div",{staticClass:"block"},[e("div",{staticClass:"block-title"},[e("nuxt-link",{staticClass:"text",attrs:{to:"topic",append:""}},[e("span",{staticClass:"fade-link"},[t._v("参与的话题")]),t._v(" "),t.tags.topic.length?e("i",{staticClass:"count",domProps:{textContent:t._s(t.tags.topic.length)}}):t._e()]),t._v(" "),t.tags.topic.length>12?e("nuxt-link",{staticClass:"more fade-link",attrs:{to:"topic",append:""}},[e("span",[t._v("更多")]),t._v(" "),e("i",{staticClass:"el-icon-arrow-right"})]):t.tags.topic.length?t._e():[e("p",{staticClass:"empty"},[t._v("\n          "+t._s(t.TA)+"不喜欢参与任何话题~\n        ")]),t._v(" "),e("span")]],2),t._v(" "),t.tags.topic.length?e("ul",{staticClass:"topics clearfix"},t._l(t.tags.topic.slice(0,12),function(n){return e("li",{key:n.slug},[e("nuxt-link",{staticClass:"avatar",attrs:{target:"_blank",to:t.$alias.tag(n.slug)}},[e("v-img",{attrs:{src:n.avatar,width:"40",height:"40",alt:n.name}})],1),t._v(" "),e("div",{staticClass:"name oneline"},[e("nuxt-link",{staticClass:"fade-link",attrs:{target:"_blank",to:t.$alias.tag(n.slug)},domProps:{textContent:t._s(n.name)}})],1)],1)}),0):t._e()]),t._v(" "),e("div",{staticClass:"block"},[e("div",{staticClass:"block-title"},[e("nuxt-link",{staticClass:"text",attrs:{to:"notebook",append:""}},[e("span",{staticClass:"fade-link"},[t._v("发表的专栏")]),t._v(" "),t.tags.notebook.length?e("i",{staticClass:"count",domProps:{textContent:t._s(t.tags.notebook.length)}}):t._e()]),t._v(" "),t.tags.notebook.length?e("div",[t.isMine?e("create-tag-btn",{staticClass:"create-btn fade-link",attrs:{text:"专栏",parent:"uh4f"},on:{create:t.handleCreateNotebook}}):e("span"),t._v(" "),t.tags.notebook.length>4?e("nuxt-link",{staticClass:"more fade-link",attrs:{to:"notebook",append:""}},[e("span",[t._v("更多")]),t._v(" "),e("i",{staticClass:"el-icon-arrow-right"})]):t._e()],1):[e("p",{staticClass:"empty"},[t._v("\n          "+t._s(t.TA)+"还没写过文章~\n        ")]),t._v(" "),t.isMine?e("create-tag-btn",{staticClass:"create-btn fade-link",attrs:{text:"专栏",parent:"uh4f"},on:{create:t.handleCreateNotebook}}):e("span")]],2),t._v(" "),t.tags.notebook.length?e("ul",{staticClass:"notebooks clearfix"},t._l(t.tags.notebook.slice(0,4),function(n){return e("li",{key:n.slug},[e("nuxt-link",{staticClass:"avatar",attrs:{target:"_blank",to:t.$alias.tag(n.slug)}},[e("v-img",{attrs:{src:n.avatar,width:"117",height:"88",alt:n.name}})],1),t._v(" "),e("div",{staticClass:"content clearfix"},[e("div",{staticClass:"note-title oneline"},[e("nuxt-link",{staticClass:"name fade-link",attrs:{target:"_blank",to:t.$alias.tag(n.slug)},domProps:{textContent:t._s(n.name)}})],1),t._v(" "),e("p",{staticClass:"desc oneline",attrs:{title:n.intro},domProps:{textContent:t._s(n.intro||"暂无简介")}}),t._v(" "),e("div",{staticClass:"meta oneline"},[t._v("\n            -\n          ")])])],1)}),0):t._e()])]):t._e()},[],!1,null,null,null);n.default=component.exports}}]);