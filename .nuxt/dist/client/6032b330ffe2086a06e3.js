(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{357:function(t,n,e){"use strict";e(18);n.a={layout:"web",head:function(){var t=this.tag;return{title:t.name,meta:[{hid:"keywords",name:"keywords",content:t.alias},{hid:"description",name:"description",content:"".concat(t.name,",").concat(t.intro)},{hid:"share-image",name:"share-image",content:t.avatar}]}},data:function(){return{tag:null,children:null}},beforeMount:function(){this.patchTag()},methods:{patchTag:function(){var t=this;this.$axios.$get("v1/tag/patch",{params:{slug:this.slug}}).then(function(data){t.tag=t.$set(t,"tag",Object.assign(t.tag,data))}).catch(function(){})}}}},399:function(t,n,e){},535:function(t,n,e){"use strict";var r=e(399);e.n(r).a},641:function(t,n,e){"use strict";e.r(n);e(21),e(5),e(99);var r=e(357),c=e(137),o=e(371),l=e(370),h=e(368),d={name:"ZoneGame",components:{Affix:o.a,TagHotList:h.a,PinFlowList:l.a},mixins:[r.a],data:function(){return{slug:"285"}},asyncData:function(t){var n=t.app,e=t.error;return Promise.all([Object(c.d)(n,{slug:"285"}),Object(c.e)(n,{slug:"285"})]).then(function(data){return{tag:data[0],children:data[1]}}).catch(e)}},f=(e(535),e(15)),component=Object(f.a)(d,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"zone-game"}},[n("ElRow",{staticClass:"container"},[n("ElCol",{attrs:{xs:24,span:5}},[n("Affix",{staticClass:"left-aside",attrs:{top:70}},[this.children?n("TagHotList",{attrs:{slug:this.slug,title:"热门游戏",children:this.children}}):this._e()],1)],1),this._v(" "),n("ElCol",{staticClass:"main-wrap",attrs:{xs:24,span:14}},[n("PinFlowList",{attrs:{slug:this.slug}})],1),this._v(" "),n("ElCol",{attrs:{xs:24,span:5}},[n("br")])],1)],1)},[],!1,null,null,null);n.default=component.exports}}]);