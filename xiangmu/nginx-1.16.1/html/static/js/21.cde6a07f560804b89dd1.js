webpackJsonp([21],{"1Ek1":function(t,e){},"6+aJ":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={name:"mainCont",data:function(){return{contText:"",codeImg:"",userInfo:"",permission:"",isCollapse:!0,navList:[],defActive:""}},methods:{getUserInfo:function(){var t=this;t.$http({method:"get",url:"/admin/sys/user/info?_"+(new Date).getTime(),headers:{"Content-Type":"application/json;charset=UTF-8"}}).then(function(e){0==e.data.code?t.userInfo=e.data.user:(window.sessionStorage.setItem("fromUrl",window.location.href),t.$router.push({path:"/index"}))})},getPermission:function(){var t=this;t.$http({method:"get",url:"/admin/sysRoleMenu/userPermission",headers:{"Content-Type":"application/json;charset=UTF-8"}}).then(function(e){t.permission=e.data.join(","),sessionStorage.setItem("permission",e.data.join(","))})},logOut:function(){var t=this;t.$http({method:"get",url:"/admin/logoff",headers:{"Content-Type":"application/json;charset=UTF-8"}}).then(function(e){window.sessionStorage.removeItem("fromUrl"),t.$router.push({path:"/index"})})},getNavList:function(){var t=this;t.$http({method:"get",url:"/admin/sys/menu/navFront",headers:{"Content-Type":"application/json;charset=UTF-8"}}).then(function(e){0==e.data.code&&(t.navList=e.data.menuList,t.defActive=e.data.menuList[0].menuId)})}},created:function(){this.getUserInfo(),this.getNavList(),this.getPermission()}},n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main_cont"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isCollapse,expression:"isCollapse"}],staticClass:"nav_lt"},[a("div",{staticStyle:{height:"100%"}},[a("div",{staticClass:"logo"},[a("router-link",{attrs:{target:"_blank",to:{path:"/home"}}},[a("img",{attrs:{src:s("Yx5L")}})])],1),t._v(" "),a("el-scrollbar",{staticStyle:{height:"100%"}},[a("el-menu",{staticClass:"removePadding",attrs:{"default-active":t.defActive,"unique-opened":!0,"background-color":"#599296","text-color":"#fff","active-text-color":"#3DA7F4"}},t._l(t.navList,function(e){return a("div",{key:e.menuId},[0==e.children.length?a("el-menu-item",{staticClass:"dropNoMenu",attrs:{index:e.menuId}},[a("template",{slot:"title"},[a("span",{staticStyle:{"font-size":"16px"}},[a("router-link",{staticClass:"nav_iterm",attrs:{activeClass:"active",to:{path:e.url}}},[t._v(t._s(e.name))])],1)])],2):a("el-submenu",{staticClass:"dropTitle",attrs:{index:e.menuId}},[a("template",{slot:"title"},[a("span",{staticStyle:{"font-size":"16px"}},[t._v(t._s(e.name)+" ")])]),t._v(" "),a("el-menu-item-group",{staticClass:"dropMenu"},t._l(e.children,function(s){return a("el-menu-item",{key:s.menuId,attrs:{index:e.menuId+"-"+s.menuId}},[a("router-link",{staticClass:"nav_iterm",attrs:{activeClass:"active",to:{path:s.url}}},[t._v("•"+t._s(s.name))])],1)}))],2)],1)}))],1)],1)]),t._v(" "),a("div",{staticClass:"header"},[a("div",{staticClass:"menu"},[a("router-link",{attrs:{target:"_blank",to:{path:"/home"}}},[t._v("首页")]),t._v(" "),a("router-link",{attrs:{target:"_blank",to:{path:"/resourceLibrary",query:{title:"",typeNum:0,searchType:0}}}},[t._v("资源检索")]),t._v(" "),a("router-link",{attrs:{to:{path:"/main/adminManageHome"},"active-class":"active"}},[t._v("管理入口")])],1),t._v(" "),a("div",{staticClass:"fr"},[t._v("\n          "+t._s(t.userInfo.username)+"\n          "),a("el-button",{staticClass:"exitOut",attrs:{type:"text"},on:{click:t.logOut}},[t._v("退出系统")])],1)]),t._v(" "),a("div",{staticClass:"nav_rg",class:{mar:!t.isCollapse}},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.isCollapse,expression:"isCollapse"}],staticClass:"collapse el-icon-d-arrow-left",on:{click:function(e){t.isCollapse=!1}}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:!t.isCollapse,expression:"!isCollapse"}],staticClass:"collapse1 el-icon-d-arrow-right",on:{click:function(e){t.isCollapse=!0}}}),t._v(" "),a("div",{staticClass:"contain"},[a("router-view")],1)])])},staticRenderFns:[]};var i=s("VU/8")(a,n,!1,function(t){s("1Ek1")},"data-v-84cf745c",null);e.default=i.exports},Yx5L:function(t,e,s){t.exports=s.p+"static/img/logo_admin.7d7d9dd.png"}});