(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{322:function(t,e,n){"use strict";e.a={layout:"web",head(){var{tag:t}=this;return{title:t.name,meta:[{hid:"keywords",name:"keywords",content:t.alias},{hid:"description",name:"description",content:"".concat(t.name,",").concat(t.intro)},{hid:"share-image",name:"share-image",content:t.avatar}]}},data:()=>({tag:null,children:null}),beforeMount(){this.patchTag()},methods:{patchTag(){this.$axios.$get("v1/tag/patch",{params:{slug:this.slug}}).then(data=>{this.tag=this.$set(this,"tag",Object.assign(this.tag,data))}).catch(()=>{})}}}},361:function(t,e,n){},490:function(t,e,n){"use strict";var l=n(361);n.n(l).a},589:function(t,e,n){"use strict";n.r(e);n(13);var l=n(322),r=n(114),c=n(335),o=n(334),h=n(333),d={name:"ZoneBangumi",components:{Affix:c.a,PinFlowList:o.a,TagHotList:h.a},mixins:[l.a],data:()=>({slug:"2he"}),asyncData(t){var{app:e,error:n}=t;return Promise.all([Object(r.d)(e,{slug:"2he"}),Object(r.e)(e,{slug:"2he"})]).then(data=>({tag:data[0],children:data[1]})).catch(n)}},m=(n(490),n(9)),component=Object(m.a)(d,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"zone-bangumi"}},[e("ElRow",{staticClass:"container"},[e("ElCol",{attrs:{xs:24,span:5}},[e("Affix",{staticClass:"left-aside",attrs:{top:70}},[this.children?e("TagHotList",{attrs:{slug:this.slug,title:"热门动漫",children:this.children}}):this._e()],1)],1),this._v(" "),e("ElCol",{staticClass:"main-wrap",attrs:{xs:24,span:14}},[e("PinFlowList",{attrs:{slug:this.slug}})],1),this._v(" "),e("ElCol",{attrs:{xs:24,span:5}},[e("br")])],1)],1)},[],!1,null,null,null);e.default=component.exports}}]);