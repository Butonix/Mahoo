(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{322:function(t,n,e){"use strict";n.a={layout:"web",head(){var{tag:t}=this;return{title:t.name,meta:[{hid:"keywords",name:"keywords",content:t.alias},{hid:"description",name:"description",content:"".concat(t.name,",").concat(t.intro)},{hid:"share-image",name:"share-image",content:t.avatar}]}},data:()=>({tag:null,children:null}),beforeMount(){this.patchTag()},methods:{patchTag(){this.$axios.$get("v1/tag/patch",{params:{slug:this.slug}}).then(data=>{this.tag=this.$set(this,"tag",Object.assign(this.tag,data))}).catch(()=>{})}}}},364:function(t,n,e){},495:function(t,n,e){"use strict";var l=e(364);e.n(l).a},592:function(t,n,e){"use strict";e.r(n);e(13);var l=e(322),r=e(114),c=e(334),o=e(333),h=e(332),d={name:"ZoneTopic",components:{PinFlowList:o.a,TagHotList:h.a,Affix:c.a},mixins:[l.a],data:()=>({slug:"3p6"}),asyncData(t){var{app:n,error:e}=t;return Promise.all([Object(r.d)(n,{slug:"3p6"}),Object(r.e)(n,{slug:"3p6"})]).then(data=>({tag:data[0],children:data[1]})).catch(e)}},m=(e(495),e(9)),component=Object(m.a)(d,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"zone-topic"}},[n("ElRow",{staticClass:"container"},[n("ElCol",{attrs:{xs:24,span:5}},[n("Affix",{staticClass:"left-aside",attrs:{top:70}},[this.children?n("TagHotList",{attrs:{slug:this.slug,title:"热门话题",children:this.children}}):this._e()],1)],1),this._v(" "),n("ElCol",{staticClass:"main-wrap",attrs:{xs:24,span:14}},[n("PinFlowList",{attrs:{slug:this.slug}})],1),this._v(" "),n("ElCol",{attrs:{xs:24,span:5}},[n("br")])],1)],1)},[],!1,null,null,null);n.default=component.exports}}]);