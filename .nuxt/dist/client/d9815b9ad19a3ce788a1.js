(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{298:function(t,e,n){t.exports={h1:"h1_17sSx",h2:"h2_29h8C",h3:"h3_pcROM",h4:"h4_-wXkD",h5:"h5_3RgCW",h6:"h6_1UKhu"}},299:function(t,e,n){t.exports={image:"image_2HoYb",border:"border_fvHwL",bg:"bg_OU_Qk"}},300:function(t,e,n){t.exports={paragraph:"paragraph_1OWG2"}},301:function(t,e,n){t.exports={list:"list_rxwoA"}},302:function(t,e,n){t.exports={delimiter:"delimiter_3ksS5"}},303:function(t,e,n){t.exports={checklist:"checklist_35Trq"}},304:function(t,e,n){t.exports={link:"link_1cdqF",content:"content_31mUQ",logo:"logo_3t3p1"}},305:function(t,e,n){},334:function(t,e,n){"use strict";n(333),n(37),n(36);class r{constructor(){let{minLength:t,shareLink:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.config={org:"calibur",appendStr:"文章著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。",minLength:t||140,shareLink:e||window.location.href.split("?")[0]},this.prefix={org:"来源",link:"链接",author:"作者"}}bind(t){let{minLength:e,authorNickname:n,shareLink:r,appendStr:o}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.addEventListener("copy",t=>{const l=e||this.config.minLength,c=r||this.config.shareLink,d=o||this.config.appendStr,h=window.getSelection().getRangeAt(0),m=this.getHTMLParser("");m&&m.appendChild(h.cloneContents());const f=h.toString().trim(),v=m?m.innerHTML:this.getRangeHtml(h);if(document.createElement("div").innerHTML=v,f.length>=l){const e=this.getCopyHtml(v,c,n,d),r=this.getCopyText(f,c,n,d);void 0===t.clipboardData&&this.hack(e,h);try{t.clipboardData.setData("text/plain",r),t.clipboardData.setData("text/html",e),t.preventDefault()}catch(t){this.hack(e,h)}}})}abort(t){t.addEventListener("copy",t=>(t.stopPropagation(),t.preventDefault(),t.cancelBubble=!1,!1))}hack(text,t){const e=document.createElement("div");e.innerHTML=text,e.style.position="fixed",e.style.left="-9999px",document.body.appendChild(e),window.getSelection().selectAllChildren(e),setTimeout(()=>{try{window.getSelection().removeAllRanges(),window.getSelection().addRange(t)}catch(t){}document.body.removeChild(e)},0)}getCopyHtml(html,t,e,n){const r=this.getExtraCopyright(t,e,n).join("<br>");return"<div><div>".concat(html,"</div>").concat(r,"</div>")}getCopyText(text,t,e,n){return text+this.getExtraCopyright(t,e,n).join("\n")}getExtraCopyright(t,e,n){return e?["","","".concat(this.prefix.author,"：").concat(e),"".concat(this.prefix.link,"：").concat(t),"".concat(this.prefix.org,"：").concat(this.config.org),n]:["","","".concat(this.prefix.link,"：").concat(t),"".concat(this.prefix.org,"：").concat(this.config.org),n]}getRangeHtml(text){const div=document.createElement("div");return div.appendChild(text.cloneContents()),div.outerHTML}getHTMLParser(t){try{return(new window.DOMParser).parseFromString(t,"text/html").body}catch(e){const n=document.implementation.createHTMLDocument("");return n.body.innerHTML=t,n.body}}}var o={name:"JsonHeader",props:{item:{type:Object,required:!0}},render:function(t){const e=this.item.data.level;return t("h"+this.item.data.level,{class:this.$style["h".concat(e)],domProps:{innerHTML:this.item.data.text}})}},l=n(351),c=n(11);var header=Object(c.a)(o,void 0,void 0,!1,function(t){this.$style=l.default.locals||l.default},null,null).exports,d={name:"JsonImage",props:{item:{type:Object,required:!0}}},h=n(352);var m=Object(c.a)(d,function(){var t,e,n=this,r=n.$createElement,o=n._self._c||r;return o("div",{class:n.$style.image},[o("div",{class:[(t={},t[n.$style.border]=n.item.data.withBorder,t),(e={},e[n.$style.bg]=n.item.data.withBackground,e)]},[o("div",[o("v-img",{attrs:{src:n.item.data.file.url,stretched:n.item.data.stretched,width:n.item.data.file.width,height:n.item.data.file.height}})],1)]),n._v(" "),n.item.data.caption?o("p",{domProps:{textContent:n._s(n.item.data.caption)}}):n._e()])},[],!1,function(t){this.$style=h.default.locals||h.default},null,null).exports,f={name:"JsonParagraph",props:{item:{type:Object,required:!0}}},v=n(353);var y=Object(c.a)(f,function(){var t=this.$createElement;return(this._self._c||t)("p",{class:this.$style.paragraph,domProps:{innerHTML:this._s(this.item.data.text)}})},[],!1,function(t){this.$style=v.default.locals||v.default},null,null).exports,_={name:"JsonList",props:{item:{type:Object,required:!0}}},x=n(354);var k=Object(c.a)(_,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.list},["ordered"===t.item.data.style?n("ol",t._l(t.item.data.items,function(li,e){return n("li",{key:e,domProps:{textContent:t._s(li)}})}),0):n("ul",t._l(t.item.data.items,function(li,e){return n("li",{key:e,domProps:{textContent:t._s(li)}})}),0)])},[],!1,function(t){this.$style=x.default.locals||x.default},null,null).exports,$={name:"JsonDelimiter",props:{item:{type:Object,required:!0}}},w=n(355);var C=Object(c.a)($,function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.$style.delimiter})},[],!1,function(t){this.$style=w.default.locals||w.default},null,null).exports,L={name:"JsonChecklist",props:{item:{type:Object,required:!0}}},O=n(356);var j=Object(c.a)(L,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{class:t.$style.checklist},t._l(t.item.data.items,function(option,e){return n("li",{key:e},[option.checked?n("i"):n("em"),t._v(" "),n("div",{domProps:{textContent:t._s(option.text)}})])}),0)},[],!1,function(t){this.$style=O.default.locals||O.default},null,null).exports,E={name:"JsonLink",props:{item:{type:Object,required:!0}}},H=n(357);var P=Object(c.a)(E,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{class:t.$style.link,attrs:{target:"_blank",href:t.item.data.link}},[t.item.data.meta.image&&t.item.data.meta.image.url?n("img",{class:t.$style.logo,attrs:{src:t.item.data.meta.image.url,width:"65",height:"65"}}):t._e(),t._v(" "),n("div",{class:t.$style.content},[n("h3",{domProps:{textContent:t._s(t.item.data.meta.title)}}),t._v(" "),n("p",{staticClass:"oneline",domProps:{textContent:t._s(t.item.data.meta.description)}}),t._v(" "),n("span",{domProps:{textContent:t._s(t.item.data.link.replace(/https?:\/\//,""))}})])])},[],!1,function(t){this.$style=H.default.locals||H.default},null,null).exports,T={name:"JsonEmbed",props:{item:{type:Object,required:!0}}},M=n(358);var D={name:"JsonContent",components:{"v-header":header,"v-image":m,"v-paragraph":y,"v-list":k,"v-delimiter":C,"v-checklist":j,"v-link":P,"v-embed":Object(c.a)(T,function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.$style.embed})},[],!1,function(t){this.$style=M.default.locals||M.default},null,null).exports},props:{content:{required:!0,type:Array}},mounted(){(new r).bind(this.$el)}},J=Object(c.a)(D,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"json-content"},this._l(this.content,function(t,n){return e("v-"+t.type,{key:n,tag:"component",attrs:{item:t}})}),1)},[],!1,null,null,null);e.a=J.exports},351:function(t,e,n){"use strict";var r=n(298),o=n.n(r);e.default=o.a},352:function(t,e,n){"use strict";var r=n(299),o=n.n(r);e.default=o.a},353:function(t,e,n){"use strict";var r=n(300),o=n.n(r);e.default=o.a},354:function(t,e,n){"use strict";var r=n(301),o=n.n(r);e.default=o.a},355:function(t,e,n){"use strict";var r=n(302),o=n.n(r);e.default=o.a},356:function(t,e,n){"use strict";var r=n(303),o=n.n(r);e.default=o.a},357:function(t,e,n){"use strict";var r=n(304),o=n.n(r);e.default=o.a},358:function(t,e,n){"use strict";var r=n(305),o=n.n(r);e.default=o.a}}]);