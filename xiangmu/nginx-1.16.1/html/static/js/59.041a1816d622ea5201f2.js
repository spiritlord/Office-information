webpackJsonp([59],{"9i5f":function(t,e){},"jMW/":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("BO1k"),i=s.n(a),n={name:"userManage",data:function(){return{loading:!1,isSynchronous:!1,isRestPwd:!1,activeName:"first",userList:[],multipleSelection:[],idList:[],curPage:1,total:1,limit:14,dialogVisible:!1,searchdate:[],sidx:"createTime",order:"desc",userObj:{roleIdList:[]},checkList:[],radio:1,roleList:"",isAddUser:!0,tipTitle:"",accountNum:"",accountName:"",pwd:"",newpwd:""}},components:{loadingTip:s("T8Lg").a},methods:{handleSelectionChange:function(t){this.multipleSelection=t,this.idList=[];var e=!0,s=!1,a=void 0;try{for(var n,l=i()(this.multipleSelection);!(e=(n=l.next()).done);e=!0){var r=n.value;this.idList.push(r.userId)}}catch(t){s=!0,a=t}finally{try{!e&&l.return&&l.return()}finally{if(s)throw a}}},handleCurrentChange:function(t){this.curPage=t,this.getUserList()},statusFormat:function(t,e,s,a){return 0==+s?"禁用":"正常"},addNew:function(){this.tipTitle="新增用户",this.isAddUser=!0,this.userObj={roleIdList:[]},this.dialogVisible=!0},updateTimeFormat:function(t,e,s,a){if(s)return s.split(" ")[0]},sureAddUser:function(){var t,e=this;t=e.isAddUser?"/admin/sys/user/save":"/admin/sys/user/update",e.$http({method:"post",url:t,data:e.userObj,headers:{"Content-Type":"application/json;charset=UTF-8"}}).then(function(t){0==t.data.code?(e.dialogVisible=!0,e.$message({message:e.isAddUser?"新增成功！":"修改成功！",type:"success"}),e.dialogVisible=!1,e.getUserList()):e.$message.error(t.data.msg)})},delteUser:function(){var t=this;0==t.idList.length&&t.$message.error("请先选择数据！"),t.$http({method:"post",url:"/admin/sys/user/delete",data:t.idList,headers:{"Content-Type":"application/json;charset=UTF-8"}}).then(function(e){0==e.data.code&&(t.$message.success("删除成功！"),t.getUserList())})},editeUser:function(){0==this.multipleSelection.length||this.multipleSelection.length>1?this.$message.error("请先选择一条数据！"):(this.tipTitle="用户信息修改",this.isAddUser=!1,this.dialogVisible=!0,this.userObj=this.multipleSelection[0],this.userObj.status=this.userObj.status+"")},getRoleList:function(){var t=this;t.$http({method:"get",url:"/admin/sys/role/select",headers:{"Content-Type":"application/json;charset=UTF-8"}}).then(function(e){0==e.data.code&&(t.roleList=e.data.list)})},synchronous:function(){var t=this;t.isSynchronous=!0,t.$http({method:"get",url:"/admin/cms/weboa/getUpdatedElements",headers:{"Content-Type":"application/json;charset=UTF-8"}}).then(function(e){0==e.data.code&&t.getUserList(),t.isSynchronous=!1})},reset:function(){this.accountName="",this.accountNum="",this.search()},search:function(){this.curPage=1,this.getUserList()},getUserList:function(){var t=this;t.loading=!0,t.$http({method:"get",url:"/admin/sys/user/list",params:{page:t.curPage,limit:t.limit,username:t.accountNum,name:t.accountName,sidx:t.sidx,order:t.order},headers:{"Content-Type":"application/json;charset=UTF-8"}}).then(function(e){0==e.data.code&&(t.userList=e.data.page.list,t.total=e.data.page.totalCount),t.loading=!1})},restPwd:function(){1==this.multipleSelection.length?(this.newpwd="",this.pwd="",this.isRestPwd=!0):this.$message.error("请先选择要重置密码的用户！")},updatePassword:function(){var t=this;return""==t.newpwd.trim()||""==t.pwd.trim()?t.$message.error("密码不能为空！"):t.newpwd.trim()!=t.pwd.trim()?t.$message.error("两次密码不一致，请重新输入！"):void t.$http({method:"post",url:"/admin/sys/user/reset",data:{userId:t.multipleSelection[0].userId,password:t.newpwd},transformRequest:[function(t){var e="";for(var s in t)e+=encodeURIComponent(s)+"="+encodeURIComponent(t[s])+"&";return e}],headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}}).then(function(e){0==e.data.code?(t.$message.success(e.data.msg),t.isRestPwd=!1):t.$message.error(e.data.msg)})}},created:function(){this.getUserList(),this.getRoleList()}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"rt_cont"},[s("div",{staticStyle:{padding:"8px 0",background:"#F0F2F5"}},[s("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[s("el-breadcrumb-item",{attrs:{to:{path:"/main/adminManageHome"}}},[t._v("首页")]),t._v(" "),s("el-breadcrumb-item",[t._v("系统设置")])],1)],1),t._v(" "),s("div",{staticClass:"nrgl"},[s("div",{staticClass:"btnhandle"},[s("h5",{staticClass:"pagett"},[t._v("用户管理\n            "),s("div",{staticClass:"fr",staticStyle:{"font-weight":"normal"}},[s("el-input",{staticStyle:{width:"180px"},attrs:{size:"mini",placeholder:"请输入账号"},model:{value:t.accountNum,callback:function(e){t.accountNum=e},expression:"accountNum"}}),t._v(" "),s("el-input",{staticStyle:{width:"180px"},attrs:{size:"mini",placeholder:"请输入姓名"},model:{value:t.accountName,callback:function(e){t.accountName=e},expression:"accountName"}}),t._v(" "),s("a",{staticClass:"aBtn",on:{click:t.search}},[t._v("搜索")]),t._v(" "),s("a",{staticClass:"aBtn aBtnCancle",on:{click:t.reset}},[t._v("重置")])],1)]),t._v(" "),s("el-button-group",{staticClass:"btbg"},[s("a",{staticClass:"fl aBtn addbtn",on:{click:t.addNew}},[t._v("新增")]),t._v(" "),s("el-button",{staticClass:"updatebtn",attrs:{type:"primary",plain:""},on:{click:t.editeUser}},[t._v("修改")]),t._v(" "),s("el-button",{attrs:{type:"primary",plain:""},on:{click:t.delteUser}},[t._v("删除")]),t._v(" "),s("el-button",{attrs:{type:"primary",plain:""},on:{click:t.restPwd}},[t._v("重置密码")]),t._v(" "),t.isSynchronous?s("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-loading"}}):s("el-button",{attrs:{type:"primary",plain:""},on:{click:t.synchronous}},[t._v("同步")])],1),t._v(" "),s("loading-tip",{attrs:{"show-load":t.loading}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.loading,expression:"!loading"}],staticClass:"table"},[s("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.userList,"tooltip-effect":"dark"},on:{"selection-change":t.handleSelectionChange}},[s("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),s("el-table-column",{attrs:{type:"index",width:"100",label:"序号"}}),t._v(" "),s("el-table-column",{attrs:{prop:"username",label:"账号"}}),t._v(" "),s("el-table-column",{attrs:{prop:"name",label:"姓名"}}),t._v(" "),s("el-table-column",{attrs:{prop:"status",label:"状态",formatter:t.statusFormat}}),t._v(" "),s("el-table-column",{attrs:{prop:"createTime",label:"创建时间",formatter:t.updateTimeFormat}}),t._v(" "),s("el-table-column",{attrs:{prop:"notes",label:"备注"}})],1),t._v(" "),s("div",{staticClass:"page"},[s("div",{staticClass:"fr"},[s("el-pagination",{attrs:{background:"","current-page":t.curPage,"page-size":t.limit,layout:"total, prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.curPage=e}}})],1)])],1),t._v(" "),s("el-dialog",{attrs:{title:t.tipTitle,visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[s("div",{staticClass:"pop",staticStyle:{"margin-top":"-22px"}},[s("p",{directives:[{name:"show",rawName:"v-show",value:t.isAddUser,expression:"isAddUser"}]},[s("span",[t._v("账号")]),s("el-input",{staticClass:"inputWidth",attrs:{placeholder:"请输入用户名",size:"small"},model:{value:t.userObj.username,callback:function(e){t.$set(t.userObj,"username",e)},expression:"userObj.username"}})],1),t._v(" "),s("p",[s("span",[t._v("用户名")]),s("el-input",{staticClass:"inputWidth",attrs:{placeholder:"请输入用户名",size:"small"},model:{value:t.userObj.name,callback:function(e){t.$set(t.userObj,"name",e)},expression:"userObj.name"}})],1),t._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:t.isAddUser,expression:"isAddUser"}]},[s("span",[t._v("密码")]),s("el-input",{staticClass:"inputWidth",attrs:{type:"password",placeholder:"请输入密码",size:"small"},model:{value:t.userObj.password,callback:function(e){t.$set(t.userObj,"password",e)},expression:"userObj.password"}})],1),t._v(" "),s("p",[s("span",[t._v("角色")]),t._v(" "),s("el-checkbox-group",{staticStyle:{display:"inline-block"},model:{value:t.userObj.roleIdList,callback:function(e){t.$set(t.userObj,"roleIdList",e)},expression:"userObj.roleIdList"}},t._l(t.roleList,function(e){return s("el-checkbox",{key:e.roleId,attrs:{label:e.roleId}},[t._v(t._s(e.roleName))])}))],1),t._v(" "),s("p",[s("span",[t._v("状态")]),t._v(" "),s("el-radio",{attrs:{label:"0"},model:{value:t.userObj.status,callback:function(e){t.$set(t.userObj,"status",e)},expression:"userObj.status"}},[t._v("禁用")]),t._v(" "),s("el-radio",{attrs:{label:"1"},model:{value:t.userObj.status,callback:function(e){t.$set(t.userObj,"status",e)},expression:"userObj.status"}},[t._v("正常")])],1),t._v(" "),s("p",[s("span",{staticStyle:{"vertical-align":"top"}},[t._v("描述")]),s("el-input",{staticClass:"inputWidth",attrs:{type:"textarea",autosize:{minRows:3,maxRows:3},placeholder:"请输入内容"},model:{value:t.userObj.notes,callback:function(e){t.$set(t.userObj,"notes",e)},expression:"userObj.notes"}})],1)]),t._v(" "),s("span",{staticClass:"dialog-footer"},[s("a",{staticClass:"aBtn aBtnCancle",on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),s("a",{staticClass:"aBtn",on:{click:t.sureAddUser}},[t._v("确 定")])])]),t._v(" "),s("el-dialog",{attrs:{title:"重置密码",visible:t.isRestPwd,width:"30%"},on:{"update:visible":function(e){t.isRestPwd=e}}},[s("div",{staticClass:"pop",staticStyle:{"margin-top":"-22px"}},[s("el-row",{staticClass:"rowMargin",attrs:{gutter:20}},[s("el-col",{staticClass:"labName",attrs:{span:6}},[t._v(" 新密码 ")]),t._v(" "),s("el-col",{attrs:{span:14}},[s("el-input",{attrs:{size:"small",type:"password",placeholder:"请输入密码"},model:{value:t.pwd,callback:function(e){t.pwd=e},expression:"pwd"}})],1)],1),t._v(" "),s("el-row",{staticClass:"rowMargin",attrs:{gutter:20}},[s("el-col",{staticClass:"labName",attrs:{span:6}},[t._v("  确认密码 ")]),t._v(" "),s("el-col",{attrs:{span:14}},[s("el-input",{attrs:{size:"small",type:"password",placeholder:"请输入密码"},model:{value:t.newpwd,callback:function(e){t.newpwd=e},expression:"newpwd"}})],1)],1)],1),t._v(" "),s("span",{staticClass:"dialog-footer"},[s("a",{staticClass:"aBtn aBtnCancle",on:{click:function(e){t.isRestPwd=!1}}},[t._v("取 消")]),t._v(" "),s("a",{staticClass:"aBtn",on:{click:t.updatePassword}},[t._v("重 置")])])])],1)])])},staticRenderFns:[]};var r=s("VU/8")(n,l,!1,function(t){s("9i5f")},"data-v-029a63b4",null);e.default=r.exports}});