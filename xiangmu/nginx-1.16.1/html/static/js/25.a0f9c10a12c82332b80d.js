webpackJsonp([25],{"1DPB":function(t,e){},buyh:function(t,e,o){"use strict";(function(t){o.d(e,"a",function(){return s});var i=o("pFYg"),n=o.n(i),s={methods:{setLable:function(){setTimeout(function(){for(var e=document.getElementsByClassName("note"),o=0;o<e.length;o++)e[o].innerHTML='<font style="color:red">'+(o+1)+"</font>";window.tip={Tips:function(t){return"object"==(void 0===t?"undefined":n()(t))?t:"string"==typeof t||"number"==typeof t?document.getElementById(t.toString()):null},mousePos:function(t){return{x:(t=t||window.event).clientX+document.body.scrollLeft+document.documentElement.scrollLeft,y:t.clientY+document.body.scrollTop+document.documentElement.scrollTop}},start:function(e){var o=this,i=o.Tips("mjs_tip");e.onmousemove=function(n){var s,a=o.mousePos(n),c=a.x+10,r=a.y+10;i.style.left=c+"px",i.style.top=r+"px",i.innerHTML="注：",s=e.getAttribute("tips"),i.appendChild(document.createElement("div")).innerHTML=s,i.style.display="";var l=r+i.clientHeight-t(window).height()-t(window).scrollTop(),d=c+i.clientWidth-t(window).width()-t(window).scrollLeft();l>0&&(r=r-l-2,i.style.top=r+"px"),d>0&&(c=c-d-2,i.style.left=c+"px")},e.onmouseout=function(){i.style.display="none"}}}},500)}}}}).call(e,o("7t+N"))},kB81:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o("NCg7"),n=(o("7t+N"),o("buyh")),s=o("T8Lg"),a={name:"catelogDetail",data:function(){return{loading:!0,pdfshow:!1,pdfHeight:"",iframSrc:"",cont:"",catloge:[],props:{label:"title",children:"children"},bookResourceId:"",catlogId:"",parentId:"0",bookCatalogResource:"",content:"",count:0,text:"",winHeight:"",bookheight:"",wordText:"",bookMsg:"",pdfFileSrc:"",copySource:""}},components:{headerTop:i.a,loadingTip:s.a},mixins:[n.a],filters:{publishDateFtt:function(t){return t?(t=t.toString()).split("-")[0]+"年"+t.split("-")[1]+"月":""}},methods:{backtop:function(){document.getElementById("neirong").scrollTop=0,document.getElementById("iframPdf").contentWindow.document.getElementById("viewerContainer").scrollTop=0},goback:function(){this.$router.go(-1)},viewPdf:function(t){this.pdfshow=!0,this.iframSrc="../../../static/pdf/web/viewer.html?file="+t},getBookMsg:function(){var t=this;t.$http({method:"get",url:"/admin/cms/bookresource/info/"+t.bookResourceId,headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(function(e){0==e.data.code&&(t.bookMsg=e.data.bookResource,setTimeout(function(){document.body.clientHeight&&(t.bookheight=document.body.clientHeight-185+40,t.pdfHeight=document.body.clientHeight-76,t.winHeight=document.body.clientHeight-document.getElementById("bookMsg").clientHeight-185)},500))})},resetText:function(){this.text="",this.getCont()},openPdf:function(){window.open("../../../static/pdf/web/viewer.html?file="+this.pdfFileSrc)},getCont:function(){var t=this;t.loading=!0,t.$http({method:"get",url:"/admin/cms/bookcatalogresource/info",params:{id:t.catlogId,q:t.text},headers:{"Content-Type":"application/json;charset=UTF-8"}}).then(function(e){t.bookCatalogResource=e.data.bookCatalogResource,t.content=e.data.articleResource,t.pdfFileSrc=e.data.pdfFileSrc,t.setLable(),t.loading=!1})},handleNodeClick:function(t){this.catlogId=t.id,this.copySource=t.title,this.getCont()},loadNode:function(t,e){var o=this;t.data&&(o.parentId=t.data.id),o.$http({method:"get",url:"/admin/cms/bookresource/catalog",params:{resourceId:o.bookResourceId,parentId:o.parentId},headers:{"Content-Type":"application/json;charset=UTF-8"}}).then(function(t){e(t.data.list),0==o.count&&(o.count=1,o.handleNodeClick(t.data.list[0]))})},getCatalog:function(){var t=this;t.$http({method:"get",url:"/admin/cms/bookcatalogresource/catalog",params:{bookId:t.bookResourceId,articleXmlId:""},headers:{"Content-Type":"application/json;charset=UTF-8"}}).then(function(e){t.catloge=e.data.catalog,t.handleNodeClick(e.data.catalog[0])})},filterNode:function(t,e){return!t||-1!==e.title.indexOf(t)}},mounted:function(){},created:function(){this.bookResourceId=this.$route.query.bookResourceId,this.text=this.$route.query.text,this.getBookMsg(),this.getCatalog()}},c={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"crm"},[o("header-top"),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:!t.pdfshow,expression:"!pdfshow"}],staticClass:"logCont"},[o("div",{staticStyle:{padding:"10px 0 5px 0"}},[o("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[o("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[t._v("首页")]),t._v(" "),o("el-breadcrumb-item",[o("span",{staticStyle:{cursor:"pointer"},on:{click:function(e){t.goback()}}},[t._v("图书预览")])]),t._v(" "),o("el-breadcrumb-item",[t._v("图书阅读")])],1)],1),t._v(" "),o("h3",[t._v("图书阅读\n            "),o("div",{staticClass:"searchBox fr"},[o("el-input",{staticClass:"inputWidth",attrs:{size:"small",placeholder:"请输入关键词"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.getCont(e):null}},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),t._v(" "),o("i",{staticClass:"clear el-icon-error",on:{click:function(e){t.resetText()}}}),t._v(" "),o("a",{staticClass:"aBtn",attrs:{size:"small",type:"primary"},on:{click:t.getCont}},[t._v("搜索")])],1)]),t._v(" "),o("div",{staticClass:"readFix"},[t.pdfFileSrc?o("a",{staticClass:"apdf",on:{click:function(e){t.viewPdf(t.pdfFileSrc)}}}):o("span",{staticClass:"adft"}),t._v(" "),t.bookMsg.pdfFileSrc?o("a",{staticClass:"bpdf",on:{click:function(e){t.viewPdf(t.bookMsg.pdfFileSrc)}}}):o("span",{staticClass:"bdft"}),t._v(" "),o("span",{staticClass:"book_top",on:{click:t.backtop}})]),t._v(" "),o("el-row",[o("el-col",{attrs:{span:8}},[o("div",[o("el-row",{staticStyle:{"padding-bottom":"10px"},attrs:{id:"bookMsg",gutter:20}},[o("el-col",{attrs:{span:15}},[o("div",{staticClass:"bookMsg"},[o("h5",[t._v(t._s(t.bookMsg.title))]),t._v(" "),o("p",[t._v("丛书名："+t._s(t.bookMsg.seriesTitle))]),t._v(" "),o("p",[t._v("ISBN："+t._s(t.bookMsg.isbn))]),t._v(" "),o("p",[t._v("出版时间："+t._s(t._f("publishDateFtt")(t.bookMsg.publishDate)))]),t._v(" "),o("p",[t._v("作者：\n                                    "),t._l(t.bookMsg.authorList,function(e){return o("span",{key:e.id,staticClass:"authorName"},[e.ssapId?o("a",{attrs:{href:"https://id.ssap.com.cn/"+e.ssapId,target:"_blank"}},[t._v(t._s(e.name))]):o("span",[t._v(t._s(e.name))])])})],2)])]),t._v(" "),o("el-col",{attrs:{span:9}},[o("img",{staticClass:"bookImg",attrs:{src:t.bookMsg.coverSrc,alt:""}})])],1),t._v(" "),o("div",{staticClass:"treeLog"},[o("div",{staticClass:"ml"},[t._v("图书目录")]),t._v(" "),o("div",{staticClass:"catelogTree",style:{height:t.winHeight+"px"},attrs:{id:"catelogTree"}},[o("el-tree",{ref:"catelogTree",attrs:{data:t.catloge,props:t.props,"check-strictly":!0,"highlight-current":!0,"filter-node-method":t.filterNode},on:{"node-click":t.handleNodeClick},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.node;return e.data,o("span",{staticClass:"custom-tree-node"},[o("span",{domProps:{innerHTML:t._s(i.label)}})])}}])})],1)])],1)]),t._v(" "),o("el-col",{attrs:{span:16}},[o("div",{staticClass:"neirong",style:{height:t.bookheight+"px"},attrs:{id:"neirong"}},[o("loading-tip",{attrs:{"show-load":t.loading}}),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],attrs:{id:"contidid"}},t._l(t.content,function(e){return o("div",[o("h5",{domProps:{innerHTML:t._s(e.title)}},[t._v(t._s(e.title))]),t._v(" "),o("div",{domProps:{innerHTML:t._s(e.content)}})])}))],1)])],1),t._v(" "),o("p",{staticStyle:{display:"none"},attrs:{id:"citationInfo"}},[t._v(t._s(t.bookMsg.title)+";"+t._s(t.copySource)+";")]),t._v(" "),o("div",{staticClass:"tip",staticStyle:{position:"absolute",left:"0",top:"0",display:"none","word-break":"break-all",width:"400px"},attrs:{id:"mjs_tip"}})],1),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.pdfshow,expression:"pdfshow"}],staticClass:"wid12"},[o("div",{staticClass:"readFix"},[o("a",{staticClass:"rdline",on:{click:function(e){t.pdfshow=!1}}}),t._v(" "),o("span",{staticClass:"book_top",on:{click:t.backtop}})]),t._v(" "),o("iframe",{staticClass:"iframPdf",style:{height:t.pdfHeight+"px"},attrs:{id:"iframPdf",src:t.iframSrc}})])],1)},staticRenderFns:[]};var r=o("VU/8")(a,c,!1,function(t){o("1DPB")},"data-v-fc0ed358",null);e.default=r.exports}});