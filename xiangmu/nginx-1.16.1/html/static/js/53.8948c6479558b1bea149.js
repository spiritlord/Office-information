webpackJsonp([53],{"5dTY":function(e,t){},vGbW:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("BO1k"),o=r.n(s),i=r("T8Lg"),a={name:"bookOrderDetail",data:function(){return{loading:!1,orderId:"",multipleSelection:[],orderList:"",resourceListId:[],resourceCount:""}},components:{headerTop:r("NCg7").a,loadingTip:i.a},methods:{goback:function(){this.$router.go(-1)},handleSelectionChange:function(e){this.multipleSelection=e,this.resourceListId=[];var t=!0,r=!1,s=void 0;try{for(var i,a=o()(this.multipleSelection);!(t=(i=a.next()).done);t=!0){var l=i.value;this.resourceListId.push(l.id)}}catch(e){r=!0,s=e}finally{try{!t&&a.return&&a.return()}finally{if(r)throw s}}},delOne:function(e){this.resourceListId=[],this.resourceListId.push(e.id),this.delOrder()},lookDetail:function(e){"book"==e.resourceTypeCode?this.$router.push({path:"/index/bookDetail",query:{id:e.id,type:e.resourceTypeCode}}):this.$router.push({path:"/index/frontArticleDetail",query:{id:e.id,type:e.resourceTypeCode}})},resourceFormat:function(e,t,r,s){return"book"==e.resourceTypeCode?"图书":"article"==e.resourceTypeCode?"篇章":void 0},dateFormat:function(e,t,r,s){return r&&""!=r?r.split("-")[0]+"年"+r.split("-")[1]+"月":""},delOrder:function(){var e=this;0!=this.resourceListId.length?e.$http({method:"post",url:"/admin/cms/resourcelist/removeResource",data:{resourceOrderId:e.orderId,resourceIds:e.resourceListId.join(",")},transformRequest:[function(e){var t="";for(var r in e)t+=encodeURIComponent(r)+"="+encodeURIComponent(e[r])+"&";return t}],headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}}).then(function(t){0==t.data.code&&(e.$message.success("删除成功！"),e.getMyOrder())}):e.$message.error("请先选择要删除的资源！")},getMyOrder:function(){var e=this;e.loading=!0,e.$http({method:"get",url:"/admin/cms/resourcelist/info/"+e.orderId,headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(function(t){0==t.data.code&&(e.orderList=t.data.resourceList,e.resourceCount=t.data.resourceList.resourceList?t.data.resourceList.resourceList.length:""),e.loading=!1})},updateDescrip:function(){1==this.orderList.status&&this.$http({method:"post",url:"/admin/cms/resourcelist/updateResource",params:{resourceListId:this.orderId,abstracts:this.orderList.abstracts},headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}}).then(function(e){e.data.code})},submitOrder:function(){var e=this;e.$http({method:"post",url:"/admin/cms/resourcelist/submit",data:[e.orderList.id],headers:{"Content-Type":"application/json;charset=UTF-8"}}).then(function(t){0==t.data.code?(e.$message.success("提交成功！"),e.getMyOrder()):e.$message.error({message:t.data.msg,dangerouslyUseHTMLString:!0})})}},created:function(){this.orderId=this.$route.query.id,this.getMyOrder()}},l={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"crm"},[r("header-top"),e._v(" "),r("div",{staticClass:"order"},[r("div",{staticStyle:{padding:"6px 0"}},[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),e._v(" "),r("el-breadcrumb-item",[r("span",{staticStyle:{cursor:"pointer"},on:{click:function(t){e.goback()}}},[e._v("我的书单")])]),e._v(" "),r("el-breadcrumb-item",[e._v("资源单详情")])],1)],1),e._v(" "),r("loading-tip",{attrs:{"show-load":e.loading}}),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}]},[r("div",{staticClass:"title"},[r("h3",[e._v("资源单详情")]),e._v(" "),r("a",{directives:[{name:"show",rawName:"v-show",value:1==e.orderList.status,expression:"orderList.status==1"}],staticClass:"dlete fr",on:{click:e.submitOrder}},[e._v("提交审核")]),e._v(" "),r("a",{directives:[{name:"show",rawName:"v-show",value:1==e.orderList.status,expression:"orderList.status==1"}],staticClass:"dlete fr",on:{click:e.delOrder}},[e._v("批量删除")]),e._v(" "),r("router-link",{directives:[{name:"show",rawName:"v-show",value:1==e.orderList.status,expression:"orderList.status==1"}],staticClass:"dlete fr",attrs:{to:{path:"/resourceLibrary",query:{title:"",typeNum:0,searchType:0}}}},[e._v("添加资源")])],1),e._v(" "),r("div",{staticClass:"descripe"},[r("ul",[r("li",[r("p",[e._v("创建日期："+e._s(e.orderList.createTime))]),e._v(" "),r("p",[e._v("资源总数："+e._s(e.resourceCount))])]),e._v(" "),r("li",{staticClass:"midle"},[r("p",[e._v("提交日期："+e._s(e.orderList.submitTime))]),e._v(" "),r("p",[e._v("总价："),r("span",[e._v("￥"+e._s(e.orderList.price))])])]),e._v(" "),r("li",{staticClass:"fr",staticStyle:{"min-width":"200px"}},[r("p",[e._v("发布日期："+e._s(e.orderList.publishTime))]),e._v(" "),r("p",[e._v("原总价：￥"+e._s(e.orderList.discountPrice))])])])]),e._v(" "),r("div",{staticClass:"descripe"},[r("p",{staticClass:"resourceMsg"},[e._v("资源单说明")]),e._v(" "),r("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容",readonly:1!=e.orderList.status},on:{blur:e.updateDescrip},model:{value:e.orderList.abstracts,callback:function(t){e.$set(e.orderList,"abstracts",t)},expression:"orderList.abstracts"}})],1),e._v(" "),r("el-table",{ref:"multipleTable",staticClass:"tableWt",staticStyle:{width:"100%"},attrs:{data:e.orderList.resourceList,"tooltip-effect":"dark",border:""},on:{"selection-change":e.handleSelectionChange}},[r("el-table-column",{attrs:{type:"selection",width:"40"}}),e._v(" "),r("el-table-column",{attrs:{prop:"type",label:"类型",width:"78"}}),e._v(" "),r("el-table-column",{attrs:{prop:"title",label:"资源名称","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[r("a",{staticStyle:{color:"#606266"},on:{click:function(r){e.lookDetail(t.row)}}},[e._v(e._s(t.row.title))])]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"seriesTitle",label:"丛书名","show-overflow-tooltip":""}}),e._v(" "),r("el-table-column",{attrs:{prop:"source",label:"所属图书","show-overflow-tooltip":""}}),e._v(" "),r("el-table-column",{attrs:{prop:"authors",label:"作者",width:"160","show-overflow-tooltip":""}}),e._v(" "),r("el-table-column",{attrs:{prop:"isbn",label:"ISBN",width:"160"}}),e._v(" "),r("el-table-column",{attrs:{prop:"discountPrice",label:"单价",width:"66"}}),e._v(" "),r("el-table-column",{attrs:{prop:"publishDate",label:"出版时间",width:"100",formatter:e.dateFormat}}),e._v(" "),1==e.orderList.status?r("el-table-column",{attrs:{label:"操作",width:"80",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("a",{staticStyle:{color:"#409EFF","font-weight":"normal"},on:{click:function(r){e.delOne(t.row)}}},[e._v("删除")])]}}])}):e._e()],1)],1)],1)],1)},staticRenderFns:[]};var n=r("VU/8")(a,l,!1,function(e){r("5dTY")},"data-v-1c9931f9",null);t.default=n.exports}});