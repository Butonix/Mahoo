(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{352:function(t,n,o){},408:function(t,n,o){"use strict";var e=o(352);o.n(e).a},475:function(t,n,o){"use strict";o.r(n);var e={name:"PinShow",components:{JsonContent:o(383).a},props:{},data:function(){return{show:!1,content:[]}},computed:{},watch:{},created:function(){},mounted:function(){this.initTest()},methods:{initTest:function(){this.content=this.$cache.get("editor_local_draft").blocks,this.show=!0}}},c=(o(408),o(18)),component=Object(c.a)(e,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"pin-show"}},[n("div",{staticClass:"content"},[this.show?n("json-content",{attrs:{content:this.content}}):this._e()],1)])},[],!1,null,null,null);n.default=component.exports}}]);