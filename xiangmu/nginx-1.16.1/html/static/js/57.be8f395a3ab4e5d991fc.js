webpackJsonp([57],{YFLZ:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("BO1k"),i=s.n(a),l={name:"rightManage",data:function(){return{activeName:"first",userList:[],multipleSelection:[],idList:[],curPage:1,total:1,dialogVisible:!1,searchdate:[],sidx:"createTime",order:"desc",userObj:{roleIdList:[]},checkList:[],radio:1,roleList:"",isAddUser:!0}},methods:{indexMethod:function(e){return e+1+12*(this.curPage-1)},handleSelectionChange:function(e){this.multipleSelection=e,this.idList=[];var t=!0,s=!1,a=void 0;try{for(var l,r=i()(this.multipleSelection);!(t=(l=r.next()).done);t=!0){var n=l.value;this.idList.push(n.userId)}}catch(e){s=!0,a=e}finally{try{!t&&r.return&&r.return()}finally{if(s)throw a}}},handleCurrentChange:function(e){this.curPage=e,this.getClassic()},statusFormat:function(e,t,s,a){return 0==+s?"禁用":"正常"},addNew:function(){this.isAddUser=!0,this.userObj={roleIdList:[]},this.dialogVisible=!0},sureAddUser:function(){var e,t=this;e=t.isAddUser?"/admin/sys/user/save":"/admin/sys/user/update",t.$http({method:"post",url:e,data:t.userObj,headers:{"Content-Type":"application/json;charset=UTF-8"}}).then(function(e){0==e.data.code?(t.dialogVisible=!0,t.$message({message:t.isAddUser?"新增成功！":"修改成功！",type:"success"}),t.dialogVisible=!1,t.getUserList()):t.$message({message:e.data.msg,type:"error"})})},getRoleList:function(){var e=this;e.$http({method:"get",url:"/admin/sys/role/select",headers:{"Content-Type":"application/json;charset=UTF-8"}}).then(function(t){0==t.data.code&&(e.roleList=t.data.list)})},getUserList:function(){var e=this;e.$http({method:"get",url:"/admin/sys/user/list",params:{page:e.curPage,limit:12,sidx:e.sidx,order:e.order},headers:{"Content-Type":"application/json;charset=UTF-8"}}).then(function(t){0==t.data.code&&(e.userList=t.data.page.list,e.total=t.data.page.totalCount)})}},created:function(){this.getUserList(),this.getRoleList()}},r={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"rt_cont"},[s("div",{staticStyle:{padding:"10px 0",background:"#F0F2F5"}},[s("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[s("el-breadcrumb-item",{attrs:{to:{path:"/main/adminManageHome"}}},[e._v("首页")]),e._v(" "),s("el-breadcrumb-item",[e._v("系统设置")])],1)],1),e._v(" "),s("div",{staticClass:"nrgl"},[s("div",{staticClass:"btnhandle"},[s("h5",{staticClass:"pagett"},[e._v("权限管理")]),e._v(" "),s("el-button-group",{staticClass:"btbg"},[s("el-button",{staticClass:"addbtn",attrs:{size:"medium",type:"primary"},on:{click:e.addNew}},[e._v("权限设置")])],1),e._v(" "),s("div",{staticClass:"table"},[s("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.userList,"tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[s("el-table-column",{attrs:{label:"序号",type:"selection",width:"55"}}),e._v(" "),s("el-table-column",{attrs:{type:"index",width:"50",index:e.indexMethod}}),e._v(" "),s("el-table-column",{attrs:{prop:"username",label:"账号"}}),e._v(" "),s("el-table-column",{attrs:{prop:"name",label:"姓名"}}),e._v(" "),s("el-table-column",{attrs:{prop:"status",label:"状态",formatter:e.statusFormat}}),e._v(" "),s("el-table-column",{attrs:{prop:"createTime",label:"创建时间"}}),e._v(" "),s("el-table-column",{attrs:{prop:"notes",label:"备注"}})],1),e._v(" "),s("div",{staticClass:"page"},[s("div",{staticClass:"fr"},[s("el-pagination",{attrs:{background:"","current-page":e.curPage,"page-size":12,layout:"total, prev, pager, next, jumper",total:e.total},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.curPage=t}}})],1)])],1),e._v(" "),s("el-dialog",{attrs:{title:"提示",visible:e.dialogVisible,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[s("div",{staticClass:"pop",staticStyle:{"margin-top":"-22px"}},[s("p",{directives:[{name:"show",rawName:"v-show",value:e.isAddUser,expression:"isAddUser"}]},[s("span",[e._v("账号")]),s("el-input",{staticClass:"inputWidth",attrs:{placeholder:"请输入用户名",size:"small"},model:{value:e.userObj.username,callback:function(t){e.$set(e.userObj,"username",t)},expression:"userObj.username"}})],1),e._v(" "),s("p",[s("span",[e._v("用户名")]),s("el-input",{staticClass:"inputWidth",attrs:{placeholder:"请输入用户名",size:"small"},model:{value:e.userObj.name,callback:function(t){e.$set(e.userObj,"name",t)},expression:"userObj.name"}})],1),e._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:e.isAddUser,expression:"isAddUser"}]},[s("span",[e._v("密码")]),s("el-input",{staticClass:"inputWidth",attrs:{type:"password",placeholder:"请输入密码",size:"small"},model:{value:e.userObj.password,callback:function(t){e.$set(e.userObj,"password",t)},expression:"userObj.password"}})],1),e._v(" "),s("p",[s("span",[e._v("角色")]),e._v(" "),s("el-checkbox-group",{staticStyle:{display:"inline-block"},model:{value:e.userObj.roleIdList,callback:function(t){e.$set(e.userObj,"roleIdList",t)},expression:"userObj.roleIdList"}},e._l(e.roleList,function(t){return s("el-checkbox",{key:t.roleId,attrs:{label:t.roleId}},[e._v(e._s(t.roleName))])}))],1),e._v(" "),s("p",[s("span",[e._v("状态")]),e._v(" "),s("el-radio",{attrs:{label:"0"},model:{value:e.userObj.status,callback:function(t){e.$set(e.userObj,"status",t)},expression:"userObj.status"}},[e._v("禁用")]),e._v(" "),s("el-radio",{attrs:{label:"1"},model:{value:e.userObj.status,callback:function(t){e.$set(e.userObj,"status",t)},expression:"userObj.status"}},[e._v("正常")])],1),e._v(" "),s("p",[s("span",{staticStyle:{"vertical-align":"top"}},[e._v("描述")]),s("el-input",{staticClass:"inputWidth",attrs:{type:"textarea",autosize:{minRows:3,maxRows:3},placeholder:"请输入内容"},model:{value:e.userObj.notes,callback:function(t){e.$set(e.userObj,"notes",t)},expression:"userObj.notes"}})],1)]),e._v(" "),s("span",{staticClass:"dialog-footer",staticStyle:{display:"block","text-align":"center"},attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:e.sureAddUser}},[e._v("确 定")])],1)])],1)])])},staticRenderFns:[]};var n=s("VU/8")(l,r,!1,function(e){s("iu0I")},"data-v-09982f10",null);t.default=n.exports},iu0I:function(e,t){}});