(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{314:function(t,e,n){},318:function(t,e,n){"use strict";n(193);var r={name:"UserAvatar",props:{user:{type:Object,required:!0},avatar:{type:String,default:""},size:{type:Number,default:40},disabled:{type:Boolean,default:!1}}},o=(n(322),n(15)),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.disabled?n("div",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"}},[n("VImg",{attrs:{radius:"50%",src:t.avatar||t.user.avatar,width:t.size,height:t.size,alt:t.user.nickname}})],1):n("NLink",{staticClass:"user-avatar",style:{width:t.size+"px",height:t.size+"px"},attrs:{to:t.$alias.user(t.user.slug),target:"_blank"}},[n("VImg",{attrs:{radius:"50%",src:t.avatar||t.user.avatar,width:t.size,height:t.size,alt:t.user.nickname}})],1)},[],!1,null,null,null);e.a=component.exports},322:function(t,e,n){"use strict";var r=n(314);n.n(r).a},357:function(t,e,n){t.exports={h1:"h1_17sSx",h2:"h2_29h8C",h3:"h3_pcROM",h4:"h4_-wXkD",h5:"h5_3RgCW",h6:"h6_1UKhu"}},358:function(t,e,n){t.exports={image:"image_2HoYb",border:"border_fvHwL",bg:"bg_OU_Qk"}},359:function(t,e,n){t.exports={paragraph:"paragraph_1OWG2"}},360:function(t,e,n){t.exports={list:"list_rxwoA"}},361:function(t,e,n){t.exports={delimiter:"delimiter_3ksS5"}},362:function(t,e,n){t.exports={checklist:"checklist_35Trq"}},363:function(t,e,n){t.exports={link:"link_1cdqF",content:"content_31mUQ",logo:"logo_3t3p1"}},364:function(t,e,n){t.exports={video:"video_1Ktgc",wrap:"wrap_3iFmj"}},365:function(t,e,n){t.exports={music:"music_1aU_y"}},396:function(t,e,n){"use strict";var r={name:"JsonHeader",props:{item:{type:Object,required:!0}},render:function(t){var e=this.item.data.level;return t("h"+this.item.data.level,{class:this.$style["h".concat(e)],domProps:{innerHTML:this.item.data.text}})}},o=n(434),l=n(15);var header=Object(l.a)(r,void 0,void 0,!1,function(t){this.$style=o.default.locals||o.default},null,null).exports,c={name:"JsonImage",props:{item:{type:Object,required:!0}}},d=n(435);var m=Object(l.a)(c,function(){var t,e,n=this,r=n.$createElement,o=n._self._c||r;return o("div",{class:n.$style.image},[o("div",{class:[(t={},t[n.$style.border]=n.item.data.withBorder,t),(e={},e[n.$style.bg]=n.item.data.withBackground,e)]},[o("div",[o("VImg",{attrs:{src:n.item.data.file.url,stretched:n.item.data.stretched,width:n.item.data.file.width,height:n.item.data.file.height}})],1)]),n._v(" "),n.item.data.caption?o("p",{domProps:{textContent:n._s(n.item.data.caption)}}):n._e()])},[],!1,function(t){this.$style=d.default.locals||d.default},null,null).exports,h={name:"JsonParagraph",props:{item:{type:Object,required:!0}}},f=n(436);var v=Object(l.a)(h,function(){var t=this.$createElement;return(this._self._c||t)("p",{class:this.$style.paragraph,domProps:{innerHTML:this._s(this.item.data.text.replace(/\n/g,"<br>"))}})},[],!1,function(t){this.$style=f.default.locals||f.default},null,null).exports,y={name:"JsonList",props:{item:{type:Object,required:!0}}},_=n(437);var x=Object(l.a)(y,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.list},["ordered"===t.item.data.style?n("ol",t._l(t.item.data.items,function(li,e){return n("li",{key:e,domProps:{textContent:t._s(li)}})}),0):n("ul",t._l(t.item.data.items,function(li,e){return n("li",{key:e,domProps:{textContent:t._s(li)}})}),0)])},[],!1,function(t){this.$style=_.default.locals||_.default},null,null).exports,k={name:"JsonDelimiter",props:{item:{type:Object,required:!0}}},w=n(438);var $=Object(l.a)(k,function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.$style.delimiter})},[],!1,function(t){this.$style=w.default.locals||w.default},null,null).exports,C={name:"JsonChecklist",props:{item:{type:Object,required:!0}}},j=n(439);var O=Object(l.a)(C,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{class:t.$style.checklist},t._l(t.item.data.items,function(option,e){return n("li",{key:e},[option.checked?n("i"):n("em"),t._v(" "),n("div",{domProps:{textContent:t._s(option.text)}})])}),0)},[],!1,function(t){this.$style=j.default.locals||j.default},null,null).exports,L={name:"JsonLink",props:{item:{type:Object,required:!0}}},E=n(440);var H=Object(l.a)(L,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.link},[n("a",{attrs:{target:"_blank",href:t.item.data.link}},[t.item.data.meta.image&&t.item.data.meta.image.url?n("img",{class:t.$style.logo,attrs:{src:t.item.data.meta.image.url,width:"65",height:"65"}}):t._e(),t._v(" "),n("div",{class:t.$style.content},[n("h3",{domProps:{textContent:t._s(t.item.data.meta.title)}}),t._v(" "),n("p",{staticClass:"oneline",domProps:{textContent:t._s(t.item.data.meta.description)}}),t._v(" "),n("span",{domProps:{textContent:t._s(t.item.data.link.replace(/https?:\/\//,""))}})])])])},[],!1,function(t){this.$style=E.default.locals||E.default},null,null).exports,P={name:"JsonVideo",props:{item:{type:Object,required:!0}}},T=n(441);var video=Object(l.a)(P,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.video},[n("div",{class:t.$style.wrap},[n("iframe",{attrs:{src:t.item.data.embed,scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowtransparency:"true",allowfullscreen:"true"}})]),t._v(" "),t.item.data.caption?n("p",{domProps:{textContent:t._s(t.item.data.caption)}}):t._e()])},[],!1,function(t){this.$style=T.default.locals||T.default},null,null).exports,M={name:"JsonMusic",props:{item:{type:Object,required:!0}}},J=n(442);var S=Object(l.a)(M,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:this.$style.music},[e("iframe",{attrs:{src:this.item.data.embed,scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowtransparency:"true",allowfullscreen:"true",width:"330",height:"86"}}),this._v(" "),this.item.data.caption?e("p",{domProps:{textContent:this._s(this.item.data.caption)}}):this._e()])},[],!1,function(t){this.$style=J.default.locals||J.default},null,null).exports,D=(n(404),n(57),n(58),n(6),n(56),n(146)),z=n(147),R=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.minLength,r=e.shareLink;Object(D.a)(this,t),this.config={org:"calibur",appendStr:"文章著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。",minLength:n||140,shareLink:r||window.location.href.split("?")[0]},this.prefix={org:"来源",link:"链接",author:"作者"}}return Object(z.a)(t,[{key:"bind",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.minLength,o=n.authorNickname,l=n.shareLink,c=n.appendStr;t.addEventListener("copy",function(t){var n=r||e.config.minLength,d=l||e.config.shareLink,m=c||e.config.appendStr,h=window.getSelection().getRangeAt(0),f=e.getHTMLParser("");f&&f.appendChild(h.cloneContents());var v=h.toString().trim(),y=f?f.innerHTML:e.getRangeHtml(h);if(document.createElement("div").innerHTML=y,v.length>=n){var _=e.getCopyHtml(y,d,o,m),x=e.getCopyText(v,d,o,m);void 0===t.clipboardData&&e.hack(_,h);try{t.clipboardData.setData("text/plain",x),t.clipboardData.setData("text/html",_),t.preventDefault()}catch(t){e.hack(_,h)}}})}},{key:"abort",value:function(t){t.addEventListener("copy",function(t){return t.stopPropagation(),t.preventDefault(),t.cancelBubble=!1,!1})}},{key:"hack",value:function(text,t){var e=document.createElement("div");e.innerHTML=text,e.style.position="fixed",e.style.left="-9999px",document.body.appendChild(e),window.getSelection().selectAllChildren(e),setTimeout(function(){try{window.getSelection().removeAllRanges(),window.getSelection().addRange(t)}catch(t){}document.body.removeChild(e)},0)}},{key:"getCopyHtml",value:function(html,t,e,n){var r=this.getExtraCopyright(t,e,n).join("<br>");return"<div><div>".concat(html,"</div>").concat(r,"</div>")}},{key:"getCopyText",value:function(text,t,e,n){return text+this.getExtraCopyright(t,e,n).join("\n")}},{key:"getExtraCopyright",value:function(t,e,n){return e?["","","".concat(this.prefix.author,"：").concat(e),"".concat(this.prefix.link,"：").concat(t),"".concat(this.prefix.org,"：").concat(this.config.org),n]:["","","".concat(this.prefix.link,"：").concat(t),"".concat(this.prefix.org,"：").concat(this.config.org),n]}},{key:"getRangeHtml",value:function(text){var div=document.createElement("div");return div.appendChild(text.cloneContents()),div.outerHTML}},{key:"getHTMLParser",value:function(t){try{return(new window.DOMParser).parseFromString(t,"text/html").body}catch(n){var e=document.implementation.createHTMLDocument("");return e.body.innerHTML=t,e.body}}}]),t}(),A={name:"JsonContent",components:{"v-header":header,"v-image":m,"v-paragraph":v,"v-list":x,"v-delimiter":$,"v-checklist":O,"v-link":H,"v-video":video,"v-music":S},props:{content:{required:!0,type:Array}},mounted:function(){(new R).bind(this.$el)}},U=Object(l.a)(A,function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"json-content"},this._l(this.content,function(t,n){return e("v-"+t.type,{key:n,tag:"component",attrs:{item:t}})}),1)},[],!1,null,null,null);e.a=U.exports},405:function(t,e,n){t.exports=n.p+"img/e82d3e7.png"},434:function(t,e,n){"use strict";var r=n(357),o=n.n(r);e.default=o.a},435:function(t,e,n){"use strict";var r=n(358),o=n.n(r);e.default=o.a},436:function(t,e,n){"use strict";var r=n(359),o=n.n(r);e.default=o.a},437:function(t,e,n){"use strict";var r=n(360),o=n.n(r);e.default=o.a},438:function(t,e,n){"use strict";var r=n(361),o=n.n(r);e.default=o.a},439:function(t,e,n){"use strict";var r=n(362),o=n.n(r);e.default=o.a},440:function(t,e,n){"use strict";var r=n(363),o=n.n(r);e.default=o.a},441:function(t,e,n){"use strict";var r=n(364),o=n.n(r);e.default=o.a},442:function(t,e,n){"use strict";var r=n(365),o=n.n(r);e.default=o.a}}]);