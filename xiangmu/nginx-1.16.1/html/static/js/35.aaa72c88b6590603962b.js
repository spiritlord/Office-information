webpackJsonp([35],{"1jnq":function(t,e){},HHBq:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("BO1k"),s=a.n(i),r=a("5g4Q"),o={name:"bookManage",data:function(){return{loading:!1,isbn:"",seriesTitle:"",dialog:!1,resourceTip:!1,multipleSelection:[],curPage:1,limit:14,filteList:[{text:"已发布",value:"6"},{text:"取消发布",value:"7"}],startDate:"",endDate:"",isshow:!1,fileList:[],total:0,bookList:[],statusList:[],searchWord:"",author:"",sourceType:"",sidx:"",order:"desc",ids:[],userInfo:"",editorList:[],editor:"",roler:"all",resourceList:[],resourceOrderId:"",permision:"",isNewCreate:!1,newOrder:{},popTitle:"加入书单"}},components:{loadingTip:a("T8Lg").a},mixins:[r.b],methods:{handleClick:function(t,e){this.curPage=1,this.getBookList()},search:function(){this.isshow=!this.isshow},showBorder:function(){return this.permision.indexOf("cms:bookresource:update")>-1&&this.permision.indexOf("cms:bookcatalogresource:join")>-1},clear:function(){this.searchWord="",this.seriesTitle="",this.startDate="",this.endDate="",this.isbn="",this.curPage=1,this.getBookList()},filterTag:function(t,e){return!0},filterStatus:function(t){this.statusList=t.status,this.getBookList()},statusformat:function(t,e,a,i){var r=!0,o=!1,n=void 0;try{for(var l,c=s()(this.filteList);!(r=(l=c.next()).done);r=!0){var u=l.value;if(u.value==a)return u.text}}catch(t){o=!0,n=t}finally{try{!r&&c.return&&c.return()}finally{if(o)throw n}}},authorFormat:function(t,e,a,i){var r=[],o=!0,n=!1,l=void 0;try{for(var c,u=s()(t.authorList);!(o=(c=u.next()).done);o=!0){var d=c.value;"著"==d.role&&r.push(d.name)}}catch(t){n=!0,l=t}finally{try{!o&&u.return&&u.return()}finally{if(n)throw l}}return r.join(" ")},dateFormat2:function(t,e,a,i){if(a)return a.split(" ")[0]},dateFormat:function(t,e,a,i){if(a)return a.split("-")[0]+"年"+a.split("-")[1]+"月"},updateTimeFormat:function(t,e,a,i){if(a)return a.split(" ")[0]},handleSelectionChange:function(t){if(this.multipleSelection=t,this.ids=[],this.multipleSelection.length>0){var e=!0,a=!1,i=void 0;try{for(var r,o=s()(this.multipleSelection);!(e=(r=o.next()).done);e=!0){var n=r.value;this.ids.push(n.id)}}catch(t){a=!0,i=t}finally{try{!e&&o.return&&o.return()}finally{if(a)throw i}}}},handleCurrentChange:function(t){this.curPage=t,this.getBookList()},myPageChange:function(t){this.curPage=t,this.getBookList()},lookDetail:function(t){this.$router.push({path:"/main/bookManage/lookDetail",query:{id:t.id}})},publishBook:function(t){var e=this.multipleSelection;if(0!=e.length){var a=!0,i=!1,r=void 0;try{for(var o,n=s()(e);!(a=(o=n.next()).done);a=!0){if(7!=+o.value.status)return void this.$message.error("该书已发布，不可重复发布")}}catch(t){i=!0,r=t}finally{try{!a&&n.return&&n.return()}finally{if(i)throw r}}var l=this;l.$http({method:"post",url:"/admin/cms/bookresource/publish",data:l.ids,headers:{"Content-Type":"application/json;charset=UTF-8"}}).then(function(t){0==t.data.code&&(l.$message.success("发布成功！"),l.getBookList())})}else this.$message.error("请先选择数据！")},cancelPublish:function(){var t=this.multipleSelection;if(0!=t.length){var e=!0,a=!1,i=void 0;try{for(var r,o=s()(t);!(e=(r=o.next()).done);e=!0){if(6!=r.value.status)return void this.$message.error("请选择状态为已发布的数据！")}}catch(t){a=!0,i=t}finally{try{!e&&o.return&&o.return()}finally{if(a)throw i}}var n=this;n.$http({method:"post",url:"/admin/cms/bookresource/exitpub",data:n.ids,headers:{"Content-Type":"application/json;charset=UTF-8"}}).then(function(t){0==t.data.code&&(n.$message.success("取消发布成功！"),n.getBookList())})}else this.$message.error("请先选择数据！")},reviewBook:function(){var t=this.multipleSelection;if(0!=t.length){var e=!0,a=!1,i=void 0;try{for(var r,o=s()(t);!(e=(r=o.next()).done);e=!0){var n=r.value;if(2!=n.status&&3!=n.status)return void this.$message.error("请选择状态为编辑中/退回编辑的数据！");if(n.editUserId!=this.userInfo.userId)return void this.$message.error("请选择状态为编辑中的数据！")}}catch(t){a=!0,i=t}finally{try{!e&&o.return&&o.return()}finally{if(a)throw i}}var l=this;l.$http({method:"post",url:"/admin/cms/bookresource/submit",data:l.ids,headers:{"Content-Type":"application/json;charset=UTF-8"}}).then(function(t){0==t.data.code&&(l.$message.success("提交审核成功！"),l.getBookList())})}else this.$message.error("请先选择数据！")},bookPass:function(){var t=this.multipleSelection;if(0!=t.length){var e=!0,a=!1,i=void 0;try{for(var r,o=s()(t);!(e=(r=o.next()).done);e=!0){if(4!=r.value.status)return void this.$message.error("请选择状态为编辑中的数据！")}}catch(t){a=!0,i=t}finally{try{!e&&o.return&&o.return()}finally{if(a)throw i}}var n=this;n.$http({method:"post",url:"/admin/cms/bookresource/pass",data:n.ids,headers:{"Content-Type":"application/json;charset=UTF-8"}}).then(function(t){0==t.data.code&&(n.$message.success("审核通过！"),n.getBookList())})}else this.$message.error("请先选择数据！")},returnEditor:function(){var t=this.multipleSelection;if(0!=t.length){var e=!0,a=!1,i=void 0;try{for(var r,o=s()(t);!(e=(r=o.next()).done);e=!0){if(4!=r.value.status)return void this.$message.error("请选择状态为审核中的数据！")}}catch(t){a=!0,i=t}finally{try{!e&&o.return&&o.return()}finally{if(a)throw i}}var n=this;n.$http({method:"post",url:"/admin/cms/bookresource/nopass",data:n.ids,headers:{"Content-Type":"application/json;charset=UTF-8"}}).then(function(t){0==t.data.code&&(n.$message.success("退回编辑通过！"),n.getBookList())})}else this.$message.error("请先选择数据！")},bookAllocation:function(){if(""!=this.editor){var t=this;t.$http({method:"post",url:"/admin/cms/bookresource/allocation",data:{ids:t.ids,userID:t.editor},transformRequest:[function(t){var e="";for(var a in t)e+=encodeURIComponent(a)+"="+encodeURIComponent(t[a])+"&";return e}],headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){0==e.data.code&&(t.dialog=!1,t.$message.success("分配成功！"),t.getBookList())})}},allocationData:function(){var t=this.multipleSelection;if(0!=t.length){var e=!0,a=!1,i=void 0;try{for(var r,o=s()(t);!(e=(r=o.next()).done);e=!0){if(1!=r.value.status)return void this.$message.error("请选择初稿分配！")}}catch(t){a=!0,i=t}finally{try{!e&&o.return&&o.return()}finally{if(a)throw i}}this.dialog=!0}else this.$message.error("请先选择数据！")},update:function(t){this.$router.push({path:"/main/bookManage/addResource",query:{addOredite:"1",type:"book",id:t.id}})},sortbydate:function(t,e,a){this.sidx=t.prop,this.order="ascending"==t.order?"asc":"desc",this.getBookList()},getBookList:function(t){var e=this;e.loading=!0,t&&(e.curPage=1),e.$http({method:"get",url:"/admin/cms/bookresource/list",params:{page:e.curPage,limit:e.limit,resourceTypeCodeList:"book",statusList:e.statusList.join(","),title:e.searchWord,isbn:e.isbn,author:e.author,type:e.sourceType,startDate:e.startDate,endDate:e.endDate,sidx:e.sidx,order:e.order,editor:e.roler},headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}}).then(function(t){0==t.data.code&&(e.total=t.data.page.totalCount,e.bookList=t.data.page.list),e.loading=!1})},getUserMsg:function(){var t=this;t.$http({method:"get",url:"/admin/sys/user/info?_"+(new Date).getTime(),headers:{"Content-Type":"application/json;charset=UTF-8"}}).then(function(e){t.userInfo=e.data.user})},getEditorList:function(){var t=this;t.$http({method:"get",url:"/admin/cms/bookresource/editors",headers:{"Content-Type":"application/json;charset=UTF-8"}}).then(function(e){t.editorList=e.data.users})}},created:function(){this.permision=sessionStorage.getItem("permission"),this.getBookList(),this.getUserMsg(),this.getEditorList(),this.getResourceOrderList()}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"rt_cont"},[a("div",{staticStyle:{padding:"10px 0",background:"#F0F2F5"}},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/main/adminManageHome"}}},[t._v("首页")]),t._v(" "),a("el-breadcrumb-item",[t._v("图书管理")])],1)],1),t._v(" "),a("div",{staticClass:"nrgl"},[a("div",{staticClass:"btnhandle"},[a("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.roler,callback:function(e){t.roler=e},expression:"roler"}},[a("el-tab-pane",{attrs:{name:"all"}},[a("span",{staticStyle:{"font-size":"16px","font-weight":"600"},attrs:{slot:"label"},slot:"label"},[t._v("全部")]),t._v(" "),a("div",{staticClass:"handle"},[a("el-button-group",{staticClass:"btbg"},[a("el-button",{attrs:{type:"primary",plain:""},on:{click:t.publishBook}},[t._v("上架")]),t._v(" "),a("el-button",{attrs:{type:"primary",plain:""},on:{click:t.cancelPublish}},[t._v("下架")]),t._v(" "),a("el-button",{attrs:{type:"primary",plain:""},on:{click:t.isAddResource}},[t._v("加入资源单")])],1)],1),t._v(" "),a("loading-tip",{attrs:{"show-load":t.loading}}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"table"},[a("el-table",{ref:"multipleTable",staticStyle:{"min-width":"1200"},attrs:{data:t.bookList,"tooltip-effect":"dark"},on:{"filter-change":t.filterStatus,"sort-change":t.sortbydate,"selection-change":t.handleSelectionChange}},[a("el-table-column",{staticClass:"tableCheck",attrs:{type:"selection",width:"30"}}),t._v(" "),a("el-table-column",{attrs:{type:"index",label:"序号",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{prop:"title",label:"书名",size:"medium","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("router-link",{staticClass:"hover_color",attrs:{to:{path:"/main/bookManage/bookMsg",query:{addOredite:"1",type:"book1",id:e.row.id}}}},[t._v(t._s(e.row.title))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"seriesTitle",label:"丛书",width:"210","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{staticClass:"filttb",attrs:{prop:"status",label:"状态",filters:t.filteList,"column-key":"status","filter-method":t.filterTag,formatter:t.statusformat,width:"80"}}),t._v(" "),a("el-table-column",{attrs:{prop:"isbn",label:"ISBN",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"入库日期",formatter:t.dateFormat2,width:"90"}}),t._v(" "),a("el-table-column",{attrs:{prop:"publishDate",label:"出版日期",formatter:t.dateFormat,width:"90"}}),t._v(" "),a("el-table-column",{attrs:{prop:"updateTime",label:"更新时间",formatter:t.updateTimeFormat,sortable:!0,width:"100"}}),t._v(" "),a("el-table-column",{attrs:{prop:"lastEditor",label:"最后编辑人",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"130px"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("a",{staticStyle:{color:"#409EFF"},on:{click:function(a){t.update(e.row)}}},[t._v("修改")]),t._v(" "),a("span",[t._v("|")]),t._v(" "),a("a",{staticStyle:{color:"#409EFF"},on:{click:function(a){t.lookDetail(e.row)}}},[t._v("篇章管理")])]}}])})],1),t._v(" "),a("div",{staticClass:"page"},[a("div",{staticClass:"fr"},[a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper","page-size":t.limit,"current-page":t.curPage,total:t.total},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.curPage=e}}})],1)])],1)],1)],1),t._v(" "),a("div",{staticClass:"upldbtn"},[a("el-input",{staticClass:"inputsc bknameInput",attrs:{size:"mini",placeholder:"请输入图书名"},model:{value:t.searchWord,callback:function(e){t.searchWord=e},expression:"searchWord"}}),t._v(" "),a("el-input",{staticClass:"inputsc",attrs:{size:"mini",placeholder:"请输入ISBN"},model:{value:t.isbn,callback:function(e){t.isbn=e},expression:"isbn"}}),t._v(" "),a("el-date-picker",{staticClass:"inputsc",attrs:{size:"mini",type:"date",placeholder:"出版日期",format:"yyyy年MM月dd日","value-format":"yyyy-MM-dd"},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}}),t._v(" "),a("span",[t._v("至")]),t._v(" "),a("el-date-picker",{staticClass:"inputsc",attrs:{size:"mini",type:"date",placeholder:"出版日期",format:"yyyy年MM月dd日","value-format":"yyyy-MM-dd"},model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}}),t._v(" "),a("a",{staticClass:" aBtn",on:{click:function(e){t.getBookList(1)}}},[t._v("搜索")]),t._v(" "),a("a",{staticClass:" aBtn aBtnCancle ",on:{click:t.clear}},[t._v("重置")])],1),t._v(" "),a("el-dialog",{attrs:{title:"提示",visible:t.dialog,width:"30%"},on:{"update:visible":function(e){t.dialog=e}}},[a("span",[t._v("请选择编辑：")]),t._v(" "),a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.editor,callback:function(e){t.editor=e},expression:"editor"}},t._l(t.editorList,function(t){return a("el-option",{key:t.userId,attrs:{label:t.username,value:t.userId}})})),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialog=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.bookAllocation}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:t.popTitle,visible:t.resourceTip,width:"30%"},on:{"update:visible":function(e){t.resourceTip=e}}},[a("div",{staticClass:"add",staticStyle:{"margin-top":"-30px"}},[a("p",{staticStyle:{margin:"15px 0"}},[t._v(" 书单名称: "),a("a",{directives:[{name:"show",rawName:"v-show",value:!t.isNewCreate,expression:"!isNewCreate"}],staticClass:"newOrder fr",on:{click:function(e){t.isNewCreate=!0}}},[t._v("新建书单")]),a("a",{directives:[{name:"show",rawName:"v-show",value:t.isNewCreate,expression:"isNewCreate"}],staticClass:"newOrder fr",on:{click:function(e){t.isNewCreate=!1}}},[t._v("取消")])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isNewCreate,expression:"!isNewCreate"}]},[a("el-select",{staticStyle:{width:"100%"},attrs:{size:"mini",placeholder:"请选择"},model:{value:t.resourceOrderId,callback:function(e){t.resourceOrderId=e},expression:"resourceOrderId"}},t._l(t.resourceList,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isNewCreate,expression:"isNewCreate"}]},[a("el-input",{attrs:{size:"mini",placeholder:"请输入内容"},model:{value:t.newOrder.name,callback:function(e){t.$set(t.newOrder,"name",e)},expression:"newOrder.name"}}),t._v(" "),a("p",{staticStyle:{margin:"10px 0"}},[t._v("书单说明：")]),t._v(" "),a("el-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入内容"},model:{value:t.newOrder.abstracts,callback:function(e){t.$set(t.newOrder,"abstracts",e)},expression:"newOrder.abstracts"}})],1)]),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("div",{staticStyle:{"text-align":"center"}},[a("a",{staticClass:"aBtn aBtnCancle",on:{click:function(e){t.resourceTip=!1}}},[t._v("取 消")]),t._v(" "),a("a",{staticClass:"aBtn",on:{click:t.saveOrAdd}},[t._v("确 定")])])])])],1)])])},staticRenderFns:[]};var l=a("VU/8")(o,n,!1,function(t){a("1jnq")},"data-v-7040a0ac",null);e.default=l.exports}});