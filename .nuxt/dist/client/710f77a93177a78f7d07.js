(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{266:function(t,e,n){},267:function(t,e,n){},268:function(t,e,n){t.exports={title:"title_1yLHa","ic-sex":"ic-sex_19eCo",icSex:"ic-sex_19eCo","ic-level":"ic-level_3KuJr",icLevel:"ic-level_3KuJr","ic-title":"ic-title_Uq8in",icTitle:"ic-title_Uq8in"}},270:function(t,e,n){"use strict";var l={name:"UserAvatar",props:{user:{type:Object,required:!0},avatar:{type:String,default:""},size:{type:Number,default:40},disabled:{type:Boolean,default:!1}}},r=(n(273),n(7)),component=Object(r.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.disabled?n("div",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"}},[n("v-img",{attrs:{radius:"50%",src:t.avatar||t.user.avatar,width:t.size,height:t.size,alt:t.user.nickname}})],1):n("nuxt-link",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"},attrs:{to:t.$alias.user(t.user.slug),target:"_blank"}},[n("v-img",{attrs:{radius:"50%",src:t.avatar||t.user.avatar,width:t.size,height:t.size,alt:t.user.nickname}})],1)},[],!1,null,null,null);e.a=component.exports},271:function(t,e,n){"use strict";var l={name:"UserNickname",props:{user:{type:Object,required:!0},sex:{type:Number,default:0},level:{type:Boolean,default:!0},nickname:{type:String,default:""},disabled:{type:Boolean,default:!1}},computed:{sexClass(){switch(this.sex){case-1:return{name:"simi",color:"limegreen"};case 0:return{name:"unknown",color:"gold"};case 1:return{name:"nan",color:"deepskyblue"};case 2:return{name:"nv",color:"hotpink"};default:return{name:"weizhi",color:"gold"}}}}},r=(n(274),n(275)),o=n(7);var component=Object(o.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clearfix"},[t.disabled?n("div",{staticClass:"user-nickname"},[n("div",{staticClass:"nickname"},[n("p",{staticClass:"oneline",domProps:{textContent:t._s(t.nickname||t.user.nickname)}})]),t._v(" "),t.sex?n("span",{class:t.$style.title},[n("i",{staticClass:"iconfont",class:[t.$style["ic-sex"],"ic-"+t.sexClass.name],style:{backgroundColor:t.sexClass.color}})]):t._e(),t._v(" "),t.level?n("span",{class:[t.$style.title,t.$style["ic-level"]],domProps:{textContent:t._s("Lv"+t.user.level)}}):t._e(),t._v(" "),t._l(t.user.roles,function(e,l){return n("span",{key:l,class:[t.$style.title,t.$style["ic-title"]],domProps:{textContent:t._s(e)}})})],2):n("nuxt-link",{staticClass:"user-nickname",attrs:{to:t.$alias.user(t.user.slug),target:"_blank"}},[n("div",{staticClass:"nickname"},[n("p",{staticClass:"oneline",domProps:{textContent:t._s(t.nickname||t.user.nickname)}})]),t._v(" "),t.sex?n("span",{class:t.$style.title},[n("i",{staticClass:"iconfont",class:[t.$style["ic-sex"],"ic-"+t.sexClass.name],style:{backgroundColor:t.sexClass.color}})]):t._e(),t._v(" "),t.level?n("span",{class:[t.$style.title,t.$style["ic-level"]],domProps:{textContent:t._s("Lv"+t.user.level)}}):t._e(),t._v(" "),t._l(t.user.title,function(e,l){return n("span",{key:l,class:[t.$style.title,t.$style["ic-title"]],domProps:{textContent:t._s(e)}})})],2)],1)},[],!1,function(t){this.$style=r.default.locals||r.default},null,null);e.a=component.exports},273:function(t,e,n){"use strict";var l=n(266);n.n(l).a},274:function(t,e,n){"use strict";var l=n(267);n.n(l).a},275:function(t,e,n){"use strict";var l=n(268),r=n.n(l);e.default=r.a},309:function(t,e,n){t.exports={h1:"h1_17sSx",h2:"h2_29h8C",h3:"h3_pcROM",h4:"h4_-wXkD",h5:"h5_3RgCW",h6:"h6_1UKhu"}},310:function(t,e,n){t.exports={image:"image_2HoYb",border:"border_fvHwL",bg:"bg_OU_Qk"}},311:function(t,e,n){t.exports={paragraph:"paragraph_1OWG2"}},312:function(t,e,n){t.exports={list:"list_rxwoA"}},313:function(t,e,n){t.exports={delimiter:"delimiter_3ksS5"}},314:function(t,e,n){t.exports={checklist:"checklist_35Trq"}},315:function(t,e,n){t.exports={link:"link_1cdqF",content:"content_31mUQ",logo:"logo_3t3p1"}},316:function(t,e,n){},350:function(t,e,n){"use strict";var l={name:"JsonHeader",props:{item:{type:Object,required:!0}},render:function(t){const e=this.item.data.level;return t("h"+this.item.data.level,{class:this.$style["h".concat(e)],domProps:{innerHTML:this.item.data.text}})}},r=n(369),o=n(7);var header=Object(o.a)(l,void 0,void 0,!1,function(t){this.$style=r.default.locals||r.default},null,null).exports,c={name:"JsonImage",props:{item:{type:Object,required:!0}}},d=n(370);var m=Object(o.a)(c,function(){var t,e,n=this,l=n.$createElement,r=n._self._c||l;return r("div",{class:n.$style.image},[r("div",{class:[(t={},t[n.$style.border]=n.item.data.withBorder,t),(e={},e[n.$style.bg]=n.item.data.withBackground,e)]},[r("div",[r("v-img",{attrs:{src:n.item.data.file.url,stretched:n.item.data.stretched,width:n.item.data.file.width,height:n.item.data.file.height}})],1)]),n._v(" "),n.item.data.caption?r("p",{domProps:{textContent:n._s(n.item.data.caption)}}):n._e()])},[],!1,function(t){this.$style=d.default.locals||d.default},null,null).exports,h={name:"JsonParagraph",props:{item:{type:Object,required:!0}}},f=n(371);var v=Object(o.a)(h,function(){var t=this.$createElement;return(this._self._c||t)("p",{class:this.$style.paragraph,domProps:{innerHTML:this._s(this.item.data.text)}})},[],!1,function(t){this.$style=f.default.locals||f.default},null,null).exports,y={name:"JsonList",props:{item:{type:Object,required:!0}}},_=n(372);var x=Object(o.a)(y,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.list},["ordered"===t.item.data.style?n("ol",t._l(t.item.data.items,function(li,e){return n("li",{key:e,domProps:{textContent:t._s(li)}})}),0):n("ul",t._l(t.item.data.items,function(li,e){return n("li",{key:e,domProps:{textContent:t._s(li)}})}),0)])},[],!1,function(t){this.$style=_.default.locals||_.default},null,null).exports,k={name:"JsonDelimiter",props:{item:{type:Object,required:!0}}},C=n(373);var $=Object(o.a)(k,function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.$style.delimiter})},[],!1,function(t){this.$style=C.default.locals||C.default},null,null).exports,w={name:"JsonChecklist",props:{item:{type:Object,required:!0}}},L=n(374);var O=Object(o.a)(w,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{class:t.$style.checklist},t._l(t.item.data.items,function(option,e){return n("li",{key:e},[option.checked?n("i"):n("em"),t._v(" "),n("div",{domProps:{textContent:t._s(option.text)}})])}),0)},[],!1,function(t){this.$style=L.default.locals||L.default},null,null).exports,j={name:"JsonLink",props:{item:{type:Object,required:!0}}},P=n(375);var E=Object(o.a)(j,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.link},[n("a",{attrs:{target:"_blank",href:t.item.data.link}},[t.item.data.meta.image&&t.item.data.meta.image.url?n("img",{class:t.$style.logo,attrs:{src:t.item.data.meta.image.url,width:"65",height:"65"}}):t._e(),t._v(" "),n("div",{class:t.$style.content},[n("h3",{domProps:{textContent:t._s(t.item.data.meta.title)}}),t._v(" "),n("p",{staticClass:"oneline",domProps:{textContent:t._s(t.item.data.meta.description)}}),t._v(" "),n("span",{domProps:{textContent:t._s(t.item.data.link.replace(/https?:\/\//,""))}})])])])},[],!1,function(t){this.$style=P.default.locals||P.default},null,null).exports,H={name:"JsonEmbed",props:{item:{type:Object,required:!0}}},T=n(376);var S=Object(o.a)(H,function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.$style.embed})},[],!1,function(t){this.$style=T.default.locals||T.default},null,null).exports;n(349),n(38),n(37);class J{constructor(){let{minLength:t,shareLink:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.config={org:"calibur",appendStr:"文章著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。",minLength:t||140,shareLink:e||window.location.href.split("?")[0]},this.prefix={org:"来源",link:"链接",author:"作者"}}bind(t){let{minLength:e,authorNickname:n,shareLink:l,appendStr:r}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.addEventListener("copy",t=>{const o=e||this.config.minLength,c=l||this.config.shareLink,d=r||this.config.appendStr,m=window.getSelection().getRangeAt(0),h=this.getHTMLParser("");h&&h.appendChild(m.cloneContents());const f=m.toString().trim(),v=h?h.innerHTML:this.getRangeHtml(m);if(document.createElement("div").innerHTML=v,f.length>=o){const e=this.getCopyHtml(v,c,n,d),l=this.getCopyText(f,c,n,d);void 0===t.clipboardData&&this.hack(e,m);try{t.clipboardData.setData("text/plain",l),t.clipboardData.setData("text/html",e),t.preventDefault()}catch(t){this.hack(e,m)}}})}abort(t){t.addEventListener("copy",t=>(t.stopPropagation(),t.preventDefault(),t.cancelBubble=!1,!1))}hack(text,t){const e=document.createElement("div");e.innerHTML=text,e.style.position="fixed",e.style.left="-9999px",document.body.appendChild(e),window.getSelection().selectAllChildren(e),setTimeout(()=>{try{window.getSelection().removeAllRanges(),window.getSelection().addRange(t)}catch(t){}document.body.removeChild(e)},0)}getCopyHtml(html,t,e,n){const l=this.getExtraCopyright(t,e,n).join("<br>");return"<div><div>".concat(html,"</div>").concat(l,"</div>")}getCopyText(text,t,e,n){return text+this.getExtraCopyright(t,e,n).join("\n")}getExtraCopyright(t,e,n){return e?["","","".concat(this.prefix.author,"：").concat(e),"".concat(this.prefix.link,"：").concat(t),"".concat(this.prefix.org,"：").concat(this.config.org),n]:["","","".concat(this.prefix.link,"：").concat(t),"".concat(this.prefix.org,"：").concat(this.config.org),n]}getRangeHtml(text){const div=document.createElement("div");return div.appendChild(text.cloneContents()),div.outerHTML}getHTMLParser(t){try{return(new window.DOMParser).parseFromString(t,"text/html").body}catch(e){const n=document.implementation.createHTMLDocument("");return n.body.innerHTML=t,n.body}}}var M={name:"JsonContent",components:{"v-header":header,"v-image":m,"v-paragraph":v,"v-list":x,"v-delimiter":$,"v-checklist":O,"v-link":E,"v-embed":S},props:{content:{required:!0,type:Array}},mounted(){(new J).bind(this.$el)}},D=Object(o.a)(M,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"json-content"},this._l(this.content,function(t,n){return e("v-"+t.type,{key:n,tag:"component",attrs:{item:t}})}),1)},[],!1,null,null,null);e.a=D.exports},369:function(t,e,n){"use strict";var l=n(309),r=n.n(l);e.default=r.a},370:function(t,e,n){"use strict";var l=n(310),r=n.n(l);e.default=r.a},371:function(t,e,n){"use strict";var l=n(311),r=n.n(l);e.default=r.a},372:function(t,e,n){"use strict";var l=n(312),r=n.n(l);e.default=r.a},373:function(t,e,n){"use strict";var l=n(313),r=n.n(l);e.default=r.a},374:function(t,e,n){"use strict";var l=n(314),r=n.n(l);e.default=r.a},375:function(t,e,n){"use strict";var l=n(315),r=n.n(l);e.default=r.a},376:function(t,e,n){"use strict";var l=n(316),r=n.n(l);e.default=r.a}}]);