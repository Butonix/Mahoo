(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{311:function(t,n,e){"use strict";e.d(n,"e",function(){return l}),e.d(n,"b",function(){return r}),e.d(n,"f",function(){return o}),e.d(n,"d",function(){return c}),e.d(n,"c",function(){return v}),e.d(n,"a",function(){return _});e(38);var l=function(t,n){var e=n.slug;return t.$axios.$get("v1/tag/show",{params:{slug:e}})},r=function(t,n){var e=n.name,l=n.parent_slug;return t.$axios.$post("v1/tag/create",{name:e,parent_slug:l})},o=function(t,n){var e=n.name,l=n.slug,r=n.avatar,o=n.alias,c=n.intro;return t.$axios.$post("v1/tag/update",{name:e,slug:l,avatar:r,alias:o,intro:c})},c=function(t,n){var e=n.slug,l=n.target_slug;return t.$axios.$post("v1/tag/relink",{slug:e,target_slug:l})},v=function(t,n){var e=n.slug;return t.$axios.$post("v1/tag/delete",{slug:e})},_=function(t,n){var e=n.slug;return t.$axios.$get("v1/tag/bookmarks",{params:{slug:e}})}},355:function(t,n,e){},411:function(t,n,e){"use strict";var l=e(355);e.n(l).a},478:function(t,n,e){"use strict";e.r(n);var l=e(311),r={name:"UserEmotion",components:{},props:{},data:function(){return{tags:null}},computed:{},watch:{},asyncData:function(t){var n=t.app,e=t.error,r=t.params;return Object(l.a)(n,{slug:r.slug}).then(function(t){return{tags:t}}).catch(e)},created:function(){},mounted:function(){},methods:{}},o=(e(411),e(18)),component=Object(o.a)(r,function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.tags?e("div",{attrs:{id:"user-emotion"}},[e("div",{staticClass:"block"},[e("div",{staticClass:"block-title"},[e("nuxt-link",{staticClass:"text",attrs:{to:"bangumi",append:""}},[e("span",{staticClass:"fade-link"},[t._v("看过的动漫")]),t._v(" "),t.tags.bangumi.length?e("i",{staticClass:"count",domProps:{textContent:t._s(t.tags.bangumi.length)}}):t._e()]),t._v(" "),t.tags.bangumi.length>4?e("nuxt-link",{staticClass:"more fade-link",attrs:{to:"bangumi",append:""}},[e("span",[t._v("更多")]),t._v(" "),e("i",{staticClass:"el-icon-arrow-right"})]):t.tags.bangumi.length?t._e():[e("p",{staticClass:"empty"},[t._v("\n          TA还不是一个动漫迷~\n        ")]),t._v(" "),e("span")]],2),t._v(" "),t.tags.bangumi?e("ul",{staticClass:"bangumis clearfix"},t._l(t.tags.bangumi.slice(0,4),function(n){return e("li",{key:n.slug},[e("nuxt-link",{staticClass:"avatar",attrs:{target:"_blank",to:t.$alias.tag(n.slug)}},[e("v-img",{attrs:{src:n.avatar,width:"110",height:"114",alt:n.name}})],1),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"oneline"},[e("nuxt-link",{staticClass:"name fade-link",attrs:{target:"_blank",to:t.$alias.tag(n.slug)},domProps:{textContent:t._s(n.name)}})],1),t._v(" "),e("p",{staticClass:"desc",domProps:{textContent:t._s(n.extra.intro)}})])],1)}),0):t._e()]),t._v(" "),e("div",{staticClass:"block"},[e("div",{staticClass:"block-title"},[e("nuxt-link",{staticClass:"text",attrs:{to:"game",append:""}},[e("span",{staticClass:"fade-link"},[t._v("玩过的游戏")]),t._v(" "),t.tags.game.length?e("i",{staticClass:"count",domProps:{textContent:t._s(t.tags.game.length)}}):t._e()]),t._v(" "),t.tags.game.length>5?e("nuxt-link",{staticClass:"more fade-link",attrs:{to:"game",append:""}},[e("span",[t._v("更多")]),t._v(" "),e("i",{staticClass:"el-icon-arrow-right"})]):t.tags.game.length?t._e():[e("p",{staticClass:"empty"},[t._v("\n          TA从来不玩游戏~\n        ")]),t._v(" "),e("span")]],2),t._v(" "),t.tags.game?e("ul",{staticClass:"games clearfix"},t._l(t.tags.game.slice(0,5),function(n){return e("li",{key:n.slug},[e("nuxt-link",{attrs:{target:"_blank",to:t.$alias.tag(n.slug)}},[e("v-img",{attrs:{src:n.avatar,width:"150",height:"150",alt:n.name}}),t._v(" "),e("p",{staticClass:"oneline fade-link",domProps:{textContent:t._s(n.name)}})],1)],1)}),0):t._e()]),t._v(" "),e("div",{staticClass:"block"},[e("div",{staticClass:"block-title"},[e("nuxt-link",{staticClass:"text",attrs:{to:"topic",append:""}},[e("span",{staticClass:"fade-link"},[t._v("参与的话题")]),t._v(" "),t.tags.topic.length?e("i",{staticClass:"count",domProps:{textContent:t._s(t.tags.topic.length)}}):t._e()]),t._v(" "),t.tags.topic.length>12?e("nuxt-link",{staticClass:"more fade-link",attrs:{to:"topic",append:""}},[e("span",[t._v("更多")]),t._v(" "),e("i",{staticClass:"el-icon-arrow-right"})]):t.tags.topic.length?t._e():[e("p",{staticClass:"empty"},[t._v("\n          TA不喜欢参与任何话题~\n        ")]),t._v(" "),e("span")]],2),t._v(" "),t.tags.topic?e("ul",{staticClass:"topics clearfix"},t._l(t.tags.topic.slice(0,12),function(n){return e("li",{key:n.slug},[e("nuxt-link",{staticClass:"avatar",attrs:{target:"_blank",to:t.$alias.tag(n.slug)}},[e("v-img",{attrs:{src:n.avatar,width:"40",height:"40",alt:n.name}})],1),t._v(" "),e("div",{staticClass:"name oneline"},[e("nuxt-link",{staticClass:"fade-link",attrs:{target:"_blank",to:t.$alias.tag(n.slug)},domProps:{textContent:t._s(n.name)}})],1)],1)}),0):t._e()])]):t._e()},[],!1,null,null,null);n.default=component.exports}}]);