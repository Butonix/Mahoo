exports.ids=[6],exports.modules={169:function(t,n){},274:function(t,n,e){"use strict";e.r(n);var r=e(169),o=e.n(r);for(var c in r)"default"!==c&&function(t){e.d(n,t,(function(){return r[t]}))}(c);n.default=o.a},353:function(t,n,e){"use strict";e.r(n);var r={name:"EditBangumi",layout:"app",asyncData({app:t,error:n,query:e}){const r=e.slug;if(r)return t.$axios.$get("v1/bangumi/show",{params:{slug:r}}).then(t=>({bangumi:t})).catch(n)},data:()=>({bangumi:null}),computed:{showEdit(){return this.$hasRole("edit_bangumi")}},head:{title:""}},o=e(1);var component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.bangumi?e("div",{attrs:{id:"edit-bangumi"}},[t._ssrNode("<img"+t._ssrAttr("src",t.$resize(t.bangumi.avatar,{width:150}))+' class="avatar"> <p class="title oneline">'+t._ssrEscape(t._s(t.bangumi.name))+'</p> <p class="intro">'+t._s(t.bangumi.intro)+"</p> <hr> "),t._ssrNode('<div class="controls">',"</div>",[t.showEdit?e("NLink",{attrs:{to:"/app/bangumi/profile?slug="+t.bangumi.slug}},[e("i",{staticClass:"el-icon-setting"}),t._v(" "),e("span",[t._v("编辑番剧")])]):t._e()],1)],2):t._e()}),[],!1,(function(t){var n=e(274);n.__inject__&&n.__inject__(t)}),null,"473322b2");n.default=component.exports}};