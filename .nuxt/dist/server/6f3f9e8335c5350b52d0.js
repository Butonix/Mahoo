exports.ids=[32],exports.modules={101:function(t,e){},121:function(t,e,o){"use strict";var n=o(23),r={name:"CreateTagBtn",props:{text:{type:String,default:"分区"},parent:{type:String,required:!0}},methods:{actionCreate(){this.$prompt(`请输入${this.text}名`,`新建${this.text}`,{confirmButtonText:"提交",cancelButtonText:"取消"}).then(({value:t})=>{const e=t.trim();if(e.length>32)return this.$toast.error("名字不能超过32个字");Object(n.b)(this,{name:e,parent_slug:this.parent}).then(data=>{this.$emit("create",data)}).catch(t=>{this.$toast.error(t.message)})}).catch(()=>{})}}},l=o(2),component=Object(l.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("button",{attrs:{type:"button"},on:{click:this.actionCreate}},[this._ssrNode('<i class="el-icon-folder-add"></i> <span>'+this._ssrEscape("新建"+this._s(this.text))+"</span>")])},[],!1,null,null,"5cda1a3b");e.a=component.exports},134:function(t,e){},135:function(t,e,o){"use strict";o.r(e);var n=o(101),r=o.n(n);for(var l in n)"default"!==l&&function(t){o.d(e,t,function(){return n[t]})}(l);e.default=r.a},136:function(t,e){},137:function(t,e){},138:function(t,e){},203:function(t,e,o){"use strict";var n=o(55),r={name:"AreaPicker",components:{ElCascader:o.n(n).a},props:{value:{type:String,required:!0},placeholder:{type:String,default:"选择作品分区，如约会大作战"}},data(){return{selected:this.value}},computed:{options(){return this.$store.state.global.myTags.filter(t=>!~["notebook","topic"].indexOf(t.slug))}},watch:{value(t){this.selected=t},selected(t){this.$emit("input",t)}},mounted(){this.$channel.$when("user-signed",()=>{this.$store.dispatch("global/getMyTags")})}},l=o(2);var component=Object(l.a)(r,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"area-picker"},[t._ssrNode('<p class="tip">\n    提示：只展示已解禁的分区（可选项，发表后不可修改）\n  </p> '),o("ElCascader",{attrs:{placeholder:t.placeholder,options:t.options,props:{value:"slug",label:"name",emitPath:!1},filterable:""},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.node,data=e.data;return[n.isLeaf?[o("span",[t._v(t._s(data.name))])]:[o("span",[t._v(t._s(data.name))]),t._v(" "),o("span",[t._v(" ("+t._s(data.children.length)+") ")])]]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],2)},[],!1,function(t){var e=o(135);e.__inject__&&e.__inject__(t)},null,"d07163b4");e.a=component.exports},207:function(t,e){},208:function(t,e,o){"use strict";o.r(e);var n=o(134),r=o.n(n);for(var l in n)"default"!==l&&function(t){o.d(e,t,function(){return n[t]})}(l);e.default=r.a},209:function(t,e,o){"use strict";o.r(e);var n=o(136),r=o.n(n);for(var l in n)"default"!==l&&function(t){o.d(e,t,function(){return n[t]})}(l);e.default=r.a},210:function(t,e,o){"use strict";o.r(e);var n=o(137),r=o.n(n);for(var l in n)"default"!==l&&function(t){o.d(e,t,function(){return n[t]})}(l);e.default=r.a},211:function(t,e,o){"use strict";o.r(e);var n=o(138),r=o.n(n);for(var l in n)"default"!==l&&function(t){o.d(e,t,function(){return n[t]})}(l);e.default=r.a},258:function(t,e,o){"use strict";o.r(e);var n=o(54),r=o.n(n),l=o(94),c=o(91),d=o(92);o(207);class h{constructor({data:data}){this.data=data}static get toolbox(){return{title:"百度云",icon:'<svg width="20px" height="16px" viewBox="0 0 256 206" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">\n  <g>\n    <path d="M170.2517,56.8186 L192.5047,34.5656 L193.9877,25.1956 C153.4367,-11.6774 88.9757,-7.4964 52.4207,33.9196 C42.2667,45.4226 34.7337,59.7636 30.7167,74.5726 L38.6867,73.4496 L83.1917,66.1106 L86.6277,62.5966 C106.4247,40.8546 139.8977,37.9296 162.7557,56.4286 L170.2517,56.8186 Z"></path>\n    <path d="M224.2048,73.9182 C219.0898,55.0822 208.5888,38.1492 193.9878,25.1962 L162.7558,56.4282 C175.9438,67.2042 183.4568,83.4382 183.1348,100.4652 L183.1348,106.0092 C198.4858,106.0092 210.9318,118.4542 210.9318,133.8052 C210.9318,149.1572 198.4858,161.2902 183.1348,161.2902 L127.4638,161.2902 L121.9978,167.2242 L121.9978,200.5642 L127.4638,205.7952 L183.1348,205.7952 C223.0648,206.1062 255.6868,174.3012 255.9978,134.3712 C256.1858,110.1682 244.2528,87.4782 224.2048,73.9182"></path>\n    <path d="M71.8704,205.7957 L127.4634,205.7957 L127.4634,161.2897 L71.8704,161.2897 C67.9094,161.2887 64.0734,160.4377 60.4714,158.7917 L52.5844,161.2117 L30.1754,183.4647 L28.2234,191.0387 C40.7904,200.5277 56.1234,205.8637 71.8704,205.7957"></path>\n    <path d="M71.8704,61.4255 C31.9394,61.6635 -0.2366,94.2275 0.0014,134.1575 C0.1344,156.4555 10.5484,177.4455 28.2234,191.0385 L60.4714,158.7915 C46.4804,152.4705 40.2634,136.0055 46.5844,122.0155 C52.9044,108.0255 69.3704,101.8085 83.3594,108.1285 C89.5244,110.9135 94.4614,115.8515 97.2464,122.0155 L129.4944,89.7685 C115.7734,71.8315 94.4534,61.3445 71.8704,61.4255"></path>\n  </g>\n</svg>'}}render(){const t=document.createElement("div");t.classList.add("baidu-resource");const e=document.createElement("i");e.classList.add("iconfont","ic-baidu-cloud","baidu-resource-icon"),t.appendChild(e);const o=document.createElement("div");o.classList.add("baidu-resource-wrap"),t.appendChild(o);const n=document.createElement("input");n.classList.add("baidu-resource-url"),n.placeholder="粘贴资源链接到这里",n.type="text",n.value=this.data&&this.data.url?this.data.url:"",o.appendChild(n);const r=document.createElement("input");r.classList.add("baidu-resource-password"),r.placeholder="填写资源的密码",r.type="text",r.value=this.data&&this.data.password?this.data.password:"",o.appendChild(r);const l=document.createElement("div");l.classList.add("baidu-resource-role-wrap");const c=`${Math.random().toString(36).substring(3,6)}`,d=this.data&&this.data.visit_type?this.data.visit_type:0,h=document.createElement("span");h.textContent="是否需要投食才能看到密码：",l.appendChild(h);const m=document.createElement("input");m.classList.add("baidu-resource-role-public"),m.id=`baidu-resource-role-public-${c}`,m.name=c,m.type="radio",m.value=0,m.checked=0===d,l.appendChild(m);const v=document.createElement("label");v.setAttribute("for",`baidu-resource-role-public-${c}`),v.textContent="否",v.classList.add("baidu-resource-label"),l.appendChild(v);const f=document.createElement("input");f.classList.add("baidu-resource-role-private"),f.id=`baidu-resource-role-private-${c}`,f.type="radio",f.name=c,f.value=1,f.checked=1===d,l.appendChild(f);const _=document.createElement("label");return _.setAttribute("for",`baidu-resource-role-private-${c}`),_.textContent="是",_.classList.add("baidu-resource-label"),l.appendChild(_),o.appendChild(l),t}save(t){const e=t.querySelector(".baidu-resource-url"),o=t.querySelector(".baidu-resource-password"),n=t.querySelector(".baidu-resource-role-public");return{url:e.value.trim(),password:o.value.trim(),visit_type:n.checked?0:1}}validate(t){return!(!t.url||!t.password)&&!(!/https?:\/\/pan\.baidu\.com\/s\/([\w\W]+)/.test(t.url)||!/^[\w|\W]{4,6}$/.test(t.password))}}var m={name:"JsonEditor",mixins:[c.a],props:{value:{required:!0,type:Array},slug:{type:String,default:""},time:{type:[String,Number],default:""},autofocus:{type:Boolean,default:!1}},data:()=>({editor:null}),mounted(){this.initEditor()},methods:{initEditor(){Promise.all([Promise.resolve().then(o.t.bind(null,71,7)),Promise.resolve().then(o.t.bind(null,72,7)),Promise.resolve().then(o.t.bind(null,73,7)),Promise.resolve().then(o.t.bind(null,74,7)),Promise.resolve().then(o.t.bind(null,75,7)),Promise.resolve().then(o.t.bind(null,76,7)),Promise.resolve().then(o.t.bind(null,77,7)),Promise.resolve().then(o.t.bind(null,78,7))]).then(t=>{const e=this;let data={};e.slug?data={blocks:e.value,time:Date.now(),version:e.$cache.get("editor_version","2.15.0")}:e.$cache.has("editor_local_draft")&&(data=e.$cache.get("editor_local_draft"),e.$emit("input",data.blocks));const[o,n,r,l,c,m,v,f]=t.map(t=>t.default),_=new o({data:e.decodeData(data||{}),holder:"codex-editor",placeholder:"请输入内容",autofocus:e.autofocus,tools:{video:{class:f,inlineToolbar:!0,config:{services:{bilibili:{regex:/https?:\/\/www\.bilibili\.com\/video\/av([\w\W]+)/,embedUrl:"//player.bilibili.com/player.html?aid=<%= remote_id %>",html:"<iframe width='100%' height='350' scrolling='no' border='0' frameborder='no' framespacing='0' allowtransparency='true' allowfullscreen='true'></iframe>",id:t=>t[0].split("/")[0].split("?")[0]},bilih5:{regex:/https?:\/\/m\.bilibili\.com\/video\/av([\w\W]+)/,embedUrl:"//player.bilibili.com/player.html?aid=<%= remote_id %>",html:"<iframe width='100%' height='350' scrolling='no' border='0' frameborder='no' framespacing='0' allowtransparency='true' allowfullscreen='true'></iframe>",id:t=>t[0].split(".")[0].split("?")[0]},netease:{regex:/https?:\/\/music\.163\.com\/#\/song\?id=([\w\W]+)/,embedUrl:"//music.163.com/outchain/player?type=2&height=66&id=<%= remote_id %>",html:"<iframe frameborder='no' border='0' marginwidth='0' marginheight='0' width='330' height='86'></iframe>",id:t=>t[0].split("/")[0].split("?")[0]},neteaseh5:{regex:/https?:\/\/music\.163\.com\/m\/song\?id=([\w\W]+)/,embedUrl:"//music.163.com/outchain/player?type=2&height=66&id=<%= remote_id %>",html:"<iframe frameborder='no' border='0' marginwidth='0' marginheight='0' width='330' height='86'></iframe>",id:t=>t[0].split("/")[0].split("?")[0]}}}},header:{class:n,shortcut:"CMD+SHIFT+H",inlineToolbar:!0},image:{class:m,shortcut:"CMD+SHIFT+P",types:"image/jpeg, image/png, image/jpg",config:{uploader:{uploadByFile:t=>new Promise((o,n)=>{const r=new FormData;r.append("file",t),r.append("token",e.uploadHeaders.token),Object(d.b)(e,r).then(data=>{data.url=`https://m1.calibur.tv/${data.url}`,o({success:1,file:data})}).catch(n)})}}},link:{class:c,shortcut:"CMD+SHIFT+L",config:{endpoint:"https://api.calibur.tv/v1/pin/editor/fetch_site"}},delimiter:l,list:{class:r,shortcut:"CMD+SHIFT+U",inlineToolbar:!0},checklist:{class:v,inlineToolbar:!0},baidu:h},onChange:()=>{e.handleSave()}});_.isReady.then(()=>{this.editor=_,this.bindSaveEvent(),this.handleSave()}).catch(t=>{this.$toast.error(`编辑器初始化失败：${t}`)})})},bindSaveEvent(){document.addEventListener("keydown",t=>{83===t.keyCode&&(t.ctrlKey||t.metaKey)&&(t.stopPropagation(),t.preventDefault(),this.handleSave())},!1)},handleSave(){this.editor&&this.editor.save().then(t=>{const e=this.encodeData(t),o=this.slug?`editor_local_draft-${this.slug}`:"editor_local_draft";this.$cache.set(o,e),this.$cache.set("editor_version",e.version),this.value&&this.$emit("input",e.blocks),this.$emit("save")}).catch(()=>{this.$toast.error("保存失败")})},decodeData:({version:t,blocks:e,time:time})=>e?(e.forEach((t,o)=>{"music"===t.type&&(e[o].type="video")}),{version:t,blocks:e,time:time}):null,encodeData:({version:t,blocks:e,time:time})=>(e.forEach((t,o)=>{"video"===t.type&&t.data.service.startsWith("netease")&&(e[o].type="music",e[o].data.embed=e[o].data.embed.replace(/&amp;/g,"&"))}),{version:t,blocks:e,time:time})}},v=o(2);var f=Object(v.a)(m,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"editor-wrap"},[this._ssrNode('<div id="codex-editor" class="mousetrap"></div>')])},[],!1,function(t){var e=o(208);e.__inject__&&e.__inject__(t)},null,"57dddf00").exports,_=o(203),$=o(53),w=o.n($),k=o(52),y=o.n(k),x={name:"TopicPicker",components:{ElSelect:y.a,ElOption:w.a},props:{value:{type:String,required:!0},placeholder:{type:String,default:"选择作品话题，如 cosplay"}},data(){return{selected:this.value}},computed:{options(){return this.$store.state.global.myTags.filter(t=>"topic"===t.slug)[0].children}},watch:{value(t){this.selected=t},selected(t){this.$emit("input",t)}},mounted(){this.$channel.$when("user-signed",()=>{this.$store.dispatch("global/getMyTags")})}};var E=Object(v.a)(x,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"topic-picker"},[t._ssrNode('<p class="tip">\n    提示：只展示已关注的话题（必选项，填写后不可修改）\n  </p> '),o("ElSelect",{attrs:{filterable:"","default-first-option":"",placeholder:"请选择"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},t._l(t.options,function(t){return o("ElOption",{key:t.slug,attrs:{label:t.name,value:t.slug}})}),1)],2)},[],!1,function(t){var e=o(209);e.__inject__&&e.__inject__(t)},null,"7b32c782").exports,C=o(121),T={name:"NotebookPicker",components:{ElSelect:y.a,ElOption:w.a,CreateTagBtn:C.a},props:{value:{type:String,required:!0}},data(){return{selected:this.value,newTags:[]}},computed:{options(){return this.newTags.concat(this.$store.state.global.myTags.filter(t=>"notebook"===t.slug)[0].children)}},watch:{selected(t){this.$emit("input",t)},value(t){this.selected=t},"options.length"(){this.selected||(this.selected=this.options[0].slug)}},mounted(){this.$channel.$when("user-signed",()=>{this.$store.dispatch("global/getMyTags")})},methods:{handleCreate(data){this.newTags.unshift(data),this.selected=data.slug}}};var L=Object(v.a)(T,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"notebook-picker"},[t._ssrNode('<div class="new-btn">',"</div>",[o("CreateTagBtn",{attrs:{text:"专栏",parent:"uh4f"},on:{create:t.handleCreate}})],1),t._ssrNode(" "),t._ssrNode('<div class="selection">',"</div>",[o("ElSelect",{attrs:{filterable:"","default-first-option":"",placeholder:"请选择"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},t._l(t.options,function(t){return o("ElOption",{key:t.slug,attrs:{label:t.name,value:t.slug}})}),1)],1)],2)},[],!1,function(t){var e=o(210);e.__inject__&&e.__inject__(t)},null,"07b65474").exports,U={name:"Wander",layout:"web",components:{Editor:f,AreaPicker:_.a,TopicPicker:E,NotebookPicker:L,ElUpload:r.a},mixins:[l.a,c.a],head:{title:"创作中心"},data:()=>({slug:"",title:{banner:null,text:""},content:[],notebook:"",area:"",topic:"ugf6",last_edit_at:"",visit_type:0,loading:!1}),asyncData({app:t,error:e,query:o}){const n=o.slug;if(n)return t.$axios.$get("v1/pin/update/content",{params:{slug:n}}).then(data=>(data.area=data.area?data.area.slug:"",data.topic=data.topic?data.topic.slug:"",data.notebook=data.notebook?data.notebook.slug:"",{...data})).catch(e)},mounted(){this.$cache.has(`editor_local_draft_title-${this.slug}`)&&(this.title=this.$cache.get(`editor_local_draft_title-${this.slug}`))},methods:{customImageUploadSuccess(t,e){this.handleImageUploadSuccess(t,e);const o=t.data;if(o.width<960||o.height<540)return this.handleImageUploadRemove(e),void this.$toast.info("图片尺寸不符合要求");this.title.banner=o,this.saveTitle()},onEditorSave(){this.saveTitle()},saveTitle(){this.$cache.set(`editor_local_draft_title-${this.slug}`,this.title)},deleteBanner(){this.title.banner=null,this.saveTitle()},preValidate(){return!!this.loading||(this.title.text?this.content.length?this.topic?this.notebook?(this.loading=!0,!1):(this.$toast.info("请选择专栏"),!0):(this.$toast.info("请选择话题"),!0):(this.$toast.info("内容不能为空"),!0):(this.$toast.info("标题不能为空"),!0))},actionCreate(t){this.preValidate()||this.$axios.$post("v1/pin/create/story",{area:this.area,topic:this.topic,notebook:this.notebook,content:[{type:"title",data:this.title}].concat(this.content),publish:t}).then(t=>{this.$cache.remove(`editor_local_draft_title-${this.slug}`),this.$cache.remove("editor_local_draft"),window.location=this.$alias.pin(t)}).catch(t=>{this.$toast.error(t.message),this.loading=!1})},actionUpdate(t){if(this.preValidate())return;const{slug:e}=this;this.$axios.$post("v1/pin/update/story",{slug:e,area:this.area,topic:this.topic,notebook:this.notebook,content:[{type:"title",data:this.title}].concat(this.content),publish:t}).then(t=>{this.$cache.remove(`editor_local_draft_title-${e}`),this.$cache.remove(`editor_local_draft-${e}`),window.location=this.$alias.pin(t)}).catch(t=>{this.$toast.error(t.message),this.loading=!1})},actionRedo(){(this.content.length||this.title.text.length||this.title.banner)&&(this.$cache.remove(`editor_local_draft_title-${this.slug}`),this.$cache.remove(`editor_local_draft-${this.slug}`),this.$toast.success("删除成功").then(()=>{window.location.reload()}))}}};var I=Object(v.a)(U,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"wander"}},[t._ssrNode('<div class="wrap">',"</div>",[t._ssrNode('<div class="banner">',"</div>",[o("ElUpload",{staticClass:"uploader",attrs:{drag:"",action:t.imageUploadAction,accept:t.imageUploadAccept,data:t.uploadHeaders,"before-upload":t.handleImageUploadBefore,"on-success":t.customImageUploadSuccess,"on-error":t.handleImageUploadError}},[o("div",{staticClass:"el-upload-tip",attrs:{slot:"tip"},slot:"tip"},[o("i",{staticClass:"el-icon-picture"}),t._v(" "),o("div",[t._v("请添加封面图（选填）")]),t._v(" "),o("p",[t._v("支持8MB内的JPG／JPEG／PNG格式的高清图片"),o("br"),t._v("（建议大于960*540像素）")])])]),t._ssrNode(" "+(t.title&&t.title.banner?'<div class="image"'+t._ssrStyle(null,{backgroundImage:"url("+t.$resize(t.title.banner.url,{width:660})},null)+'></div> <div class="tool"><i class="el-icon-delete"></i></div>':"\x3c!----\x3e"))],2),t._ssrNode(" "),t._ssrNode('<div class="title">',"</div>",[o("ElInput",{attrs:{"show-word-limit":!0,autosize:{minRows:1,maxRows:2},type:"textarea",resize:"none",placeholder:"请输入标题（建议30字以内）",maxlength:"40"},model:{value:t.title.text,callback:function(e){t.$set(t.title,"text",e)},expression:"title.text"}})],1),t._ssrNode(" "),o("Editor",{attrs:{slug:t.slug,time:t.last_edit_at},on:{save:t.onEditorSave},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),t._ssrNode(" "),o("ElForm",{staticClass:"footer",attrs:{"label-position":"top","label-width":"80px"}},[o("ElFormItem",{attrs:{label:"选择分区"}},[o("AreaPicker",{model:{value:t.area,callback:function(e){t.area=e},expression:"area"}})],1),t._v(" "),o("ElFormItem",{attrs:{label:"选择话题"}},[o("TopicPicker",{model:{value:t.topic,callback:function(e){t.topic=e},expression:"topic"}})],1),t._v(" "),o("ElFormItem",{attrs:{label:"选择专栏"}},[o("NotebookPicker",{model:{value:t.notebook,callback:function(e){t.notebook=e},expression:"notebook"}})],1),t._v(" "),o("ElFormItem",{staticClass:"button-wrap"},[t.slug?[o("ElButton",{attrs:{loading:t.loading,type:"success",round:""},on:{click:function(e){return t.actionUpdate(!0)}}},[t._v("\n            发布更新\n          ")]),t._v(" "),1===t.visit_type?o("ElButton",{attrs:{loading:t.loading,round:"",plain:"",type:"warning"},on:{click:function(e){return t.actionUpdate(!1)}}},[t._v("\n            存草稿\n          ")]):t._e(),t._v(" "),o("ElButton",{attrs:{loading:t.loading,type:"primary",round:"",plain:""},on:{click:t.actionRedo}},[t._v("\n            撤销修改\n          ")])]:[o("ElButton",{attrs:{loading:t.loading,type:"success",round:""},on:{click:function(e){return t.actionCreate(!0)}}},[t._v("\n            发表文章\n          ")]),t._v(" "),o("ElButton",{attrs:{loading:t.loading,round:"",plain:"",type:"warning"},on:{click:function(e){return t.actionCreate(!1)}}},[t._v("\n            存草稿\n          ")]),t._v(" "),o("ElButton",{attrs:{loading:t.loading,type:"primary",round:"",plain:""},on:{click:t.actionRedo}},[t._v("\n            删除文章\n          ")])]],2)],1)],2)])},[],!1,function(t){var e=o(211);e.__inject__&&e.__inject__(t)},null,"4b6246b4");e.default=I.exports},91:function(t,e,o){"use strict";var n=o(92);e.a={data:()=>({uploadHeaders:{key:"",token:""},uploadConfig:{max:5},uploadImageLimit:20,imageUploadAccept:["image/jpeg","image/png","image/jpg"].join(", "),imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv/",getUpTokenTimer:0,uploadPending:0,uploadImageTotal:0,uploadImageList:[]}),computed:{currentUser(){return this.$store.state.user},isAuth(){return this.$store.state.isAuth}},mounted(){this.$channel.$when("user-signed",()=>{this.initUpToken()})},beforeDestroy(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{initUpToken(){this.getUpToken(),this.getUpTokenTimer=setInterval(()=>{this.getUpToken()},18e5)},async getUpToken(){let t=this.$cookie.get("UPLOAD-TOKEN");t?this.uploadHeaders.token=this.$cookie.get("UPLOAD-TOKEN"):(t=await Object(n.a)(this),this.uploadHeaders.token=t,this.$cookie.set("UPLOAD-TOKEN",t,{expires:new Date((new Date).getTime()+3e6)}))},handleImageUploadError(t,e){this.uploadImageList.forEach((o,n)=>{o.uid===e.uid&&(this.uploadPending--,this.uploadImageList.splice(n,1),console.log(t))}),this.$toast.error(`图片：${e.name} 上传失败`)},handleImageUploadRemove(t){this.uploadImageList.forEach((e,o)=>{e.uid===t.uid&&(this.uploadImageList.splice(o,1),this.uploadImageTotal--)})},handleImageUploadSuccess(t,e){this.uploadImageList.forEach((o,n)=>{o.uid===e.uid&&(this.uploadImageList[n]=Object.assign(o,{data:t.data,status:"success",url:this.$resize(`${this.imagePrefix}${t.data.url}`,{width:100})}))}),this.uploadImageTotal++,this.uploadPending--},handleImageUploadExceed(){this.$toast.info(`最多还能上传${this.uploadImageLimit-this.uploadImageTotal}张图片`)},handleImageUploadBefore(t){if(!this.isAuth)return this.$channel.$emit("sign-in"),!1;if(!this.imageUploadAccept.split(", ").includes(t.type))return this.$toast.error(`仅支持上传${this.imageUploadAccept.replace(/image\//g,"").replace(/, /g,"、")}格式的图片`),!1;if(this.uploadConfig.max&&this.uploadConfig.max<t.size/1024/1024)return this.$toast.error(`图片大小不能超过 ${this.uploadConfig.max}MB!`),!1;return this.uploadHeaders.key=(({slug:t,file:e})=>`${t}/${(new Date).getTime()}-${Math.random().toString(36).substring(3,6)}.${e.type.split("/").pop()}`)({slug:this.currentUser.slug,file:t}),this.uploadImageList.push({name:t.name,percentage:0,raw:t,size:t.size,status:"uploading",errMsg:"",uid:t.uid}),this.uploadPending++,!0},resetUploaderStatus(){this.uploadImageList=[],this.uploadImageTotal=0,this.uploadPending=0}}}},92:function(t,e,o){"use strict";o.d(e,"a",function(){return n}),o.d(e,"b",function(){return r});const n=t=>t.$axios.$get("v1/image/uptoken"),r=(t,e)=>t.$axios.$post("https://up.qbox.me",e,{"Content-Type":"multipart/form-data"})},94:function(t,e,o){"use strict";var n=o(24);e.a={async beforeMount(){if(this.$store.state.logging){const t=this.$watch("$store.state.logging",()=>{this.$store.state.isAuth?(this.$channel.$fire("user-signed"),t()):this.$toast.error("继续操作前请先登录").then(()=>{window.location.href=this.$alias.sign()})})}else{const t=Object(n.a)();this.$store.commit("SET_USER_TOKEN",t),await this.$store.dispatch("initAuth")?this.$channel.$fire("user-signed"):this.$toast.error("继续操作前请先登录").then(()=>{window.location.href=this.$alias.sign()})}}}}};
//# sourceMappingURL=6f3f9e8335c5350b52d0.js.map