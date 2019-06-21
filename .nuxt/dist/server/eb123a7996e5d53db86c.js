exports.ids=[7],exports.modules={125:function(e,t,o){"use strict";o.r(t);var r=o(89),n=o.n(r);for(var l in r)"default"!==l&&function(e){o.d(t,e,function(){return r[e]})}(l);t.default=n.a},165:function(e,t,o){"use strict";o.r(t);var r=o(76),n=o(73),l={name:"JsonEditor",mixins:[r.a],props:{source:{type:Object,default:null},autofocus:{type:Boolean,default:!1}},data:()=>({editor:null}),mounted(){this.initEditor()},methods:{initEditor(){Promise.all([Promise.resolve().then(o.t.bind(null,61,7)),Promise.resolve().then(o.t.bind(null,62,7)),Promise.resolve().then(o.t.bind(null,63,7)),Promise.resolve().then(o.t.bind(null,64,7)),Promise.resolve().then(o.t.bind(null,65,7)),Promise.resolve().then(o.t.bind(null,66,7)),Promise.resolve().then(o.t.bind(null,67,7)),Promise.resolve().then(o.t.bind(null,68,7))]).then(e=>{const t=this;let data={};t.source?data=t.source:t.$cache.has("editor_local_draft")&&(data=t.$cache.get("editor_local_draft"));const[o,r,l,d,c,h,m,f]=e.map(e=>e.default),v=new o({data:data,holder:"codex-editor",placeholder:"请输入内容",autofocus:t.autofocus,tools:{header:{class:r,shortcut:"CMD+SHIFT+H",inlineToolbar:!0},image:{class:h,shortcut:"CMD+SHIFT+P",types:"image/jpeg, image/png, image/jpg",config:{uploader:{uploadByFile:e=>new Promise((o,r)=>{const l=new FormData;l.append("file",e),l.append("token",t.uploadHeaders.token),Object(n.b)(t,l).then(data=>{data.url=`https://m1.calibur.tv/${data.url}`,o({success:1,file:data})}).catch(r)})}}},linkTool:{class:c,shortcut:"CMD+SHIFT+L",config:{endpoint:"https://api.calibur.tv/v1/pin/editor/fetch_site"}},delimiter:d,list:{class:l,shortcut:"CMD+SHIFT+U",inlineToolbar:!0},embed:{class:f,inlineToolbar:!0,config:{services:{bilibili:{regex:/https:\/\/www.bilibili.com\/video\/av(\d+)/,embedUrl:"//player.bilibili.com/player.html?aid=<%= remote_id %>",html:"<iframe scrolling='no' border='0' frameborder='no' framespacing='0' allowtransparency='true' allowfullscreen='true'></iframe>"}}}},checklist:{class:m,inlineToolbar:!0}},onChange:()=>{t.handleSave()}});v.isReady.then(()=>{this.editor=v,this.bindSaveEvent()}).catch(e=>{this.$toast.error(`编辑器初始化失败：${e}`)})})},bindSaveEvent(){document.addEventListener("keydown",e=>{83===e.keyCode&&(e.ctrlKey||e.metaKey)&&(e.stopPropagation(),e.preventDefault(),this.handleSave())},!1)},handleSave(){this.editor&&this.editor.save().then(e=>{this.$cache.set("editor_local_draft",e)}).catch(()=>{this.$toast.error("保存失败")})}}},d=o(2);var c={name:"CreateATField",components:{Editor:Object(d.a)(l,function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"editor-wrap"},[this._ssrNode('<div id="codex-editor" class="mousetrap"></div>')])},[],!1,function(e){var t=o(125);t.__inject__&&t.__inject__(e)},null,"57dddf00").exports},props:{tags:{type:Array,required:!0}},computed:{},watch:{},created(){}};var h=Object(d.a)(c,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"create-atfield"}},[t("editor")],1)},[],!1,function(e){},null,"334af64a");t.default=h.exports},73:function(e,t,o){"use strict";o.d(t,"a",function(){return r}),o.d(t,"b",function(){return n});const r=e=>e.$axios.$get("v1/image/uptoken"),n=(e,t)=>e.$axios.$post("https://up.qbox.me",t,{"Content-Type":"multipart/form-data"})},76:function(e,t,o){"use strict";var r=o(73);t.a={data:()=>({uploadHeaders:{key:"",token:""},uploadConfig:{max:5},uploadImageLimit:20,imageUploadAccept:["image/jpeg","image/png","image/jpg"].join(", "),imageUploadAction:"https://upload.qiniup.com",imagePrefix:"https://m1.calibur.tv/",getUpTokenTimer:0,uploadPending:0,uploadImageTotal:0,uploadImageList:[]}),computed:{currentUser(){return this.$store.state.user},isAuth(){return this.$store.state.isAuth}},watch:{isAuth(e){e&&this.initUpToken()}},mounted(){this.isAuth&&this.initUpToken()},beforeDestroy(){this.getUpTokenTimer&&clearInterval(this.getUpTokenTimer)},methods:{initUpToken(){this.getUpToken(),this.getUpTokenTimer=setInterval(()=>{this.getUpToken()},18e5)},async getUpToken(){let e=this.$cookie.get("UPLOAD-TOKEN");e?this.uploadHeaders.token=this.$cookie.get("UPLOAD-TOKEN"):(e=await Object(r.a)(this),this.uploadHeaders.token=e,this.$cookie.set("UPLOAD-TOKEN",e,{expires:new Date((new Date).getTime()+3e6)}))},handleImageUploadError(e,t){this.uploadImageList.forEach((o,r)=>{o.uid===t.uid&&(this.uploadPending--,this.uploadImageList.splice(r,1),console.log(e))}),this.$toast.error(`图片：${t.name} 上传失败`)},handleImageUploadRemove(e){this.uploadImageList.forEach((t,o)=>{t.uid===e.uid&&(this.uploadImageList.splice(o,1),this.uploadImageTotal--)})},handleImageUploadSuccess(e,t){this.uploadImageList.forEach((o,r)=>{o.uid===t.uid&&(this.uploadImageList[r]=Object.assign(o,{data:e.data,status:"success",url:this.$resize(`${this.imagePrefix}${e.data.url}`,{width:100})}))}),this.uploadImageTotal++,this.uploadPending--},handleImageUploadExceed(){this.$toast.info(`最多还能上传${this.uploadImageLimit-this.uploadImageTotal}张图片`)},handleImageUploadBefore(e){if(!this.isAuth)return this.$channel.$emit("sign-in"),!1;if(-1===this.imageUploadAccept.split(", ").indexOf(e.type))return this.$toast.error(`仅支持上传${this.imageUploadAccept.replace(/image\//g,"").replace(/, /g,"、")}格式的图片`),!1;if(this.uploadConfig.max&&this.uploadConfig.max<e.size/1024/1024)return this.$toast.error(`图片大小不能超过 ${this.uploadConfig.max}MB!`),!1;return this.uploadHeaders.key=(({slug:e,file:t})=>`${e}/${(new Date).getTime()}-${Math.random().toString(36).substring(3,6)}.${t.type.split("/").pop()}`)({slug:this.currentUser.slug,file:e}),this.uploadImageList.push({name:e.name,percentage:0,raw:e,size:e.size,status:"uploading",errMsg:"",uid:e.uid}),this.uploadPending++,!0}}}},89:function(e,t){}};
//# sourceMappingURL=eb123a7996e5d53db86c.js.map