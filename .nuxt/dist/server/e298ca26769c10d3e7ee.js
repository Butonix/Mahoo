exports.ids=[34],exports.modules={135:function(t,e){t.exports={bangumi:"bangumi_27LZB",avatar:"avatar_1pux0",content:"content_3LQoH",name:"name_1kYyu",desc:"desc_ygyPf","skeleton-loading":"skeleton-loading_1aI5z",skeletonLoading:"skeleton-loading_1aI5z",skeleton:"skeleton_gzCKp"}},213:function(t,e,n){"use strict";n.r(e);var r=n(135),l=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=l.a},232:function(t,e){t.exports={undefined:void 0}},256:function(t,e,n){"use strict";var r={name:"BangumiItem",props:{item:{type:Object,required:!0}}},l=n(1);var component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:t.$style.bangumi},[n("NLink",{class:t.$style.avatar,attrs:{target:"_blank",to:t.$alias.tag(t.item.slug)}},[n("VImg",{attrs:{src:t.item.avatar,width:"110",height:"144",alt:t.item.name}})],1),t._ssrNode(" "),t._ssrNode("<div"+t._ssrClass(null,t.$style.content)+">","</div>",[t._ssrNode('<div class="oneline">',"</div>",[n("NLink",{staticClass:"fade-link",class:t.$style.name,attrs:{target:"_blank",to:t.$alias.tag(t.item.slug)},domProps:{innerHTML:t._s(t.item.name)}})],1),t._ssrNode(" <p"+t._ssrClass(null,t.$style.desc)+">"+t._ssrEscape(t._s(t.item.intro))+"</p>")],2)],2)}),[],!1,(function(t){var e=n(213);e.__inject__&&e.__inject__(t),this.$style=e.locals||e}),null,"72fb77ca");e.a=component.exports},330:function(t,e,n){"use strict";n.r(e);var r=n(232),l=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=l.a},398:function(t,e,n){"use strict";n.r(e);var r=n(256),l=n(25),c={name:"UserBangumi",components:{BangumiItem:r.a},asyncData:({app:t,error:e,params:n})=>Object(l.a)(t,n).then(t=>({list:t.bangumi})).catch(e),data:()=>({list:[]}),beforeMount(){this.batchPatch()},methods:{batchPatch(){this.$axios.$get("v1/tag/batch_patch",{params:{slug:this.list.map(t=>t.slug).join(",")}}).then(data=>{this.list.forEach((t,e)=>{Object.keys(data).forEach(n=>{t.slug===n&&(this.$set(this.list,e,Object.assign(t,data[n])),this.$refs.list[e].$forceUpdate())})})}).catch(()=>{})}}},o=n(1);var component=Object(o.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"user-bangumi"}},[this._ssrNode("<ul>","</ul>",this._l(this.list,(function(t){return e("BangumiItem",{key:t.slug,ref:"list",refInFor:!0,attrs:{item:t}})})),1)])}),[],!1,(function(t){var e=n(330);e.__inject__&&e.__inject__(t)}),null,"13115c5e");e.default=component.exports}};