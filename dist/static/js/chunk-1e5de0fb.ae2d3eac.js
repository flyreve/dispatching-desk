(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e5de0fb"],{4494:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"group-intercom page"},[s("el-card",{staticClass:"main-1-card"},[s("div",{attrs:{slot:"header"},slot:"header"},[s("span",{staticClass:"fz-16"},[t._v("群组会话")])]),s("div",{staticClass:"flex",staticStyle:{"justify-content":"space-around"}},[s("el-button",{staticClass:"mini-btn",attrs:{round:"",type:0===t.filterKey?"primary":""},on:{click:function(e){t.filterKey=0}}},[t._v("全部")]),s("el-divider",{attrs:{direction:"vertical"}}),s("el-button",{staticClass:"mini-btn",attrs:{round:"",type:1===t.filterKey?"primary":""},on:{click:function(e){t.filterKey=1}}},[t._v("群组")]),s("el-divider",{attrs:{direction:"vertical"}}),s("el-button",{staticClass:"mini-btn",attrs:{round:"",type:2===t.filterKey?"primary":""},on:{click:function(e){t.filterKey=2}}},[t._v("会话")])],1),s("div",{staticClass:"card-body mt-10"},[s("div",{staticClass:"group-list"},t._l(t.filterGroup,(function(e,i){return s("div",{key:i+"s",staticClass:"group-item flex",on:{click:function(e){t.visibleCall=!0}}},[s("div",[s("div",{staticClass:"fz-10"},[t._v("XXXXX（固定群组名称）")]),"group"===e.type?s("el-rate",{model:{value:t.levelValue,callback:function(e){t.levelValue=e},expression:"levelValue"}}):t._e()],1),s("div",{staticClass:"flex"},[s("i",{staticClass:"el-icon-user pointer fz-14 pl-5",on:{click:function(e){e.stopPropagation(),t.visibleList=!0}}}),s("i",{staticClass:"el-icon-headset pointer fz-14 pl-5",on:{click:function(e){e.stopPropagation(),t.visibleMonitor=!0}}}),s("i",{staticClass:"el-icon-lock pointer fz-14 pl-5",on:{click:function(e){e.stopPropagation(),t.visibleMember=!0}}}),s("i",{staticClass:"el-icon-setting pointer fz-14 pl-5",on:{click:function(s){return s.stopPropagation(),t.openEdit(e)}}})])])})),0)]),s("div",{staticClass:"card-footer flex mt-10",staticStyle:{"justify-content":"space-around"}},[s("el-button",{staticClass:"mini-btn",attrs:{round:""},on:{click:function(e){t.visibleGroupAdd=!0}}},[t._v("创建群组")]),s("el-divider",{attrs:{direction:"vertical"}}),s("el-button",{staticClass:"mini-btn",attrs:{round:""},on:{click:function(e){t.visibleSessionAdd=!0}}},[t._v("创建会话")])],1)]),t.visibleList?s("el-card",{staticClass:"main-2-card"},[s("div",{attrs:{slot:"header"},slot:"header"},[s("span",{staticClass:"fz-16"},[t._v("成员列表")]),s("el-button",{staticClass:"close-btn",attrs:{type:"text"},on:{click:function(e){t.visibleList=!1}}},[s("i",{staticClass:"el-icon-close"})])],1),s("div",{staticClass:"flex",staticStyle:{"justify-content":"left"}},[s("el-link",{on:{click:function(e){t.visibleMemberAdd=!0}}},[s("i",{staticClass:"el-icon-plus"})]),s("span",{staticClass:"pl-5 fz-14"},[t._v("编辑成员列表")])],1),s("el-input",{staticClass:"mt-5",attrs:{placeholder:"搜索",size:"mini"},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}},[s("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})]),s("div",{staticClass:"person-list"},t._l(4,(function(e,i){return s("div",{key:i+"123",staticClass:"person-item"},[s("div",{staticClass:"flex"},[s("i",{staticClass:"el-icon-user fz-16",staticStyle:{"margin-left":"5px"}}),s("div",[t._v("（备注名/账号）")])]),s("div",{staticClass:"flex"},[s("i",{staticClass:"el-icon-chat-line-round pointer fz-14 pl-5"}),s("i",{staticClass:"el-icon-setting pointer fz-14 pl-5",on:{click:function(e){t.visibleMemberEdit=!0}}}),s("i",{staticClass:"el-icon-video-camera pointer fz-14 pl-5"})])])})),0)],1):t._e(),t.visibleMemberEdit?s("el-card",{staticClass:"dialog-3-card"},[s("div",{attrs:{slot:"header"},slot:"header"},[s("span",{staticClass:"fz-16"},[t._v("成员列表")]),s("el-button",{staticClass:"close-btn",attrs:{type:"text"},on:{click:function(e){t.visibleMemberEdit=!1}}},[s("i",{staticClass:"el-icon-close"})])],1),s("el-form",[s("el-form-item",[s("el-select",{attrs:{placeholder:"发言时长"},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}},[s("el-option",{attrs:{label:1,value:"1"}})],1)],1),s("el-form-item",[s("el-select",{attrs:{placeholder:"优先级"},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}},[s("el-option",{attrs:{label:1,value:"2"}})],1)],1)],1),s("div",{attrs:{align:"center"}},[s("el-button",{staticClass:"save-btn",attrs:{type:"primary",round:""}},[t._v("保存")])],1)],1):t._e(),t.visibleMemberAdd?s("el-card",{staticClass:"main-2-card"},[s("div",{attrs:{slot:"header"},slot:"header"},[s("span",{staticClass:"fz-16"},[t._v("添加成员")]),s("el-button",{staticClass:"close-btn",attrs:{type:"text"},on:{click:function(e){t.visibleMemberAdd=!1}}},[s("i",{staticClass:"el-icon-close"})])],1),s("el-input",{attrs:{placeholder:"搜索",size:"mini"},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}},[s("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})]),s("div",{staticClass:"filter"},[s("el-button",{attrs:{round:"",size:"mini",type:t.visitAll?"primary":""},on:{click:function(e){t.visitAll=!0}}},[t._v("全部")]),s("el-divider",{attrs:{direction:"vertical"}}),s("el-button",{attrs:{round:"",type:t.visitAll?"":"primary"},on:{click:function(e){t.visitAll=!1}}},[t._v("按部门显示")])],1),t.visitAll?s("div",{staticClass:"member-list"},[s("el-checkbox-group",{on:{change:t.handleCheckedChange},model:{value:t.checkedPerson,callback:function(e){t.checkedPerson=e},expression:"checkedPerson"}},t._l(t.members,(function(e,i){return s("div",{key:i+"123",staticClass:"member-item"},[s("div",{staticClass:"flex"},[s("el-checkbox",{staticClass:"inlineBlock"}),s("i",{staticClass:"el-icon-user fz-16",staticStyle:{"margin-left":"5px"}}),s("div",[t._v("（备注名/账号）")])],1),s("div",{staticClass:"flex"},[s("i",{staticClass:"el-icon-chat-line-round pointer fz-14 pl-5"}),s("i",{staticClass:"el-icon-setting pointer fz-14 pl-5",on:{click:function(e){t.visibleMember=!0}}}),s("i",{staticClass:"el-icon-video-camera pointer fz-14 pl-5"})])])})),0)],1):s("el-tree",{staticClass:"member-list",attrs:{data:t.data,"show-checkbox":"","node-key":"id","default-expand-all":"","expand-on-click-node":!1},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.node,l=e.data;return s("div",{staticStyle:{width:"100%"}},[l.hasOwnProperty("name")?s("div",{staticClass:"member-item",staticStyle:{"border-bottom":"unset","padding-left":"0"}},[s("div",{staticClass:"flex"},[s("i",{staticClass:"el-icon-user fz-16",staticStyle:{"margin-left":"5px"}}),s("div",[t._v("（备注名/账号）")])]),s("div",{staticClass:"flex"},[s("i",{staticClass:"el-icon-chat-line-round pointer fz-14 pl-5"}),s("i",{staticClass:"el-icon-setting pointer fz-14 pl-5",on:{click:function(e){t.visibleMember=!0}}}),s("i",{staticClass:"el-icon-video-camera pointer fz-14 pl-5"})])]):s("div",{staticClass:"flex",staticStyle:{width:"100%"}},[s("div",[t._v(t._s(i.label))]),s("div",[s("el-link",{on:{click:function(e){t.visibleAdd=!0}}},[s("i",{staticClass:"el-icon-plus"})]),s("el-link",{on:{click:function(e){t.visibleEdit=!0}}},[s("i",{staticClass:"el-icon-edit"})]),s("el-link",{on:{click:function(e){t.visibleSort=!0}}},[s("i",{staticClass:"el-icon-sort"})])],1)])])}}],null,!1,1698371208)}),s("div",{staticClass:"flex mt-5"},[s("el-checkbox",{attrs:{indeterminate:t.isIndeterminate},on:{change:t.handleCheckAllChange},model:{value:t.checkAll,callback:function(e){t.checkAll=e},expression:"checkAll"}},[t._v("全选")]),t._v(" 共选择"+t._s(t.checkedPerson.length)+"人 ")],1),s("div",{staticClass:"flex mt-5",staticStyle:{"justify-content":"space-around"},attrs:{align:"center"}},[s("el-button",{staticStyle:{padding:"5px 8px"},attrs:{round:""},on:{click:function(e){t.visibleMemberAdd=!1}}},[t._v("上一步")]),s("el-button",{staticStyle:{padding:"5px 8px"},attrs:{round:""}},[t._v("完成添加")])],1)],1):t._e(),t.visibleMonitor?s("el-card",{staticClass:"main-2-card"},[s("div",{attrs:{slot:"header"},slot:"header"},[s("span",{staticClass:"fz-16"},[t._v("部门监听")]),s("el-button",{staticClass:"close-btn",attrs:{type:"text"},on:{click:function(e){t.visibleMonitor=!1}}},[s("i",{staticClass:"el-icon-close"})])],1)]):t._e(),t.visibleGroupEdit?s("el-card",{staticClass:"main-2-card"},[s("div",{attrs:{slot:"header"},slot:"header"},[s("span",{staticClass:"fz-16"},[t._v("编辑群组信息")]),s("el-button",{staticClass:"close-btn",attrs:{type:"text"},on:{click:function(e){t.visibleGroupEdit=!1}}},[s("i",{staticClass:"el-icon-close"})]),s("el-button",{staticClass:"close-btn",attrs:{type:"text"},on:{click:t.handleDissolveGroup}},[s("i",{staticClass:"el-icon-delete"})])],1),s("el-form",[s("el-form-item",[s("el-input",{attrs:{placeholder:"群组名称"}})],1),s("el-form-item",[s("el-input",{attrs:{type:"textarea",autosize:{minRows:3,maxRows:6},placeholder:"群组描述"}})],1),s("el-form-item",[s("el-input",{attrs:{placeholder:"排队人数"}})],1),s("el-form-item",[s("el-input",{attrs:{placeholder:"发言时长"}})],1),s("el-form-item",[s("el-input",{attrs:{placeholder:"数组对讲权限"}})],1)],1),s("div",{attrs:{align:"center"}},[s("el-button",{staticClass:"save-btn",attrs:{type:"primary"}},[t._v(" 保存 ")])],1)],1):t._e(),t.visibleCall?s("el-card",{staticClass:"main-2-card msg-call-card"},[s("div",{attrs:{slot:"header"},slot:"header"},[s("span",{staticClass:"fz-16"},[t._v("xxxx(固定群组名称)")]),s("el-button",{staticClass:"close-btn",attrs:{type:"text"},on:{click:function(e){t.visibleCall=!1}}},[s("i",{staticClass:"el-icon-close"})])],1)]):t._e(),t.visibleGroupAdd?s("el-card",{staticClass:"main-2-card"},[1===t.step?s("div",{attrs:{slot:"header"},slot:"header"},[s("span",{staticClass:"remarks"},[t._v("已选中的成员")]),s("el-button",{staticClass:"close-btn",attrs:{type:"text"},on:{click:function(e){t.visibleGroupAdd=!1}}},[s("i",{staticClass:"el-icon-close"})])],1):t._e(),1===t.step?s("div",t._l(3,(function(e,i){return s("div",{key:i+"s",staticClass:"flex",staticStyle:{"border-bottom":"1px dashed #ccc",padding:"10px 0"}},[s("span",[t._v("xxx(备注名/账号)")]),s("div",{staticClass:"flex"},[s("el-select",{staticStyle:{width:"80px"},attrs:{placeholder:"优先级"},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}},[s("el-option",{attrs:{label:"低",value:"低"}}),s("el-option",{attrs:{label:"高",value:"高"}})],1)],1)])})),0):t._e(),1===t.step?s("div",{staticStyle:{width:"250px",position:"absolute",bottom:"14px",left:"0"},attrs:{align:"center"}},[s("el-button",{on:{click:function(e){t.step=2}}},[t._v("下一步")])],1):t._e(),2===t.step?s("div",{attrs:{slot:"header"},slot:"header"},[s("span",{staticClass:"fz-16"},[t._v("编辑群组名称")]),s("el-button",{staticClass:"close-btn",attrs:{type:"text"},on:{click:function(e){t.visibleGroupAdd=!1}}},[s("i",{staticClass:"el-icon-close"})])],1):t._e(),2===t.step?s("div",{staticClass:"form"},[s("el-input",{attrs:{placeholder:"群组名称"}}),s("el-input",{staticClass:"mt-20",attrs:{placeholder:"群组描述",type:"textarea",rows:"8"}}),s("el-input",{staticClass:"mt-20",attrs:{placeholder:"排队人员"}}),s("el-input",{staticClass:"mt-20",attrs:{placeholder:"发言时长"}}),s("el-input",{staticClass:"mt-20",attrs:{placeholder:"优先级"}})],1):t._e(),2===t.step?s("div",{staticClass:"flex",staticStyle:{width:"250px",position:"absolute",bottom:"14px",left:"0","justify-content":"space-around"},attrs:{align:"center"}},[s("el-button",{on:{click:function(e){t.step=1}}},[t._v("上一步")]),s("el-button",[t._v("完成创建")])],1):t._e()]):t._e(),t.visibleSessionAdd?s("el-card",{staticClass:"main-2-card"},[1===t.step?s("div",{attrs:{slot:"header"},slot:"header"},[s("span",{staticClass:"remarks"},[t._v("已选中的成员")]),s("el-button",{staticClass:"close-btn",attrs:{type:"text"},on:{click:function(e){t.visibleSessionAdd=!1}}},[s("i",{staticClass:"el-icon-close"})])],1):t._e(),1===t.step?s("div",t._l(1,(function(e,i){return s("div",{key:i+"s",staticClass:"flex",staticStyle:{"border-bottom":"1px dashed #ccc",padding:"10px 0"}},[s("span",[t._v("xxx(备注名/账号)")]),s("div",{staticClass:"flex"},[s("i",{staticClass:"el-icon-setting"})])])})),0):t._e(),1===t.step?s("div",{staticStyle:{width:"250px",position:"absolute",bottom:"14px",left:"0"},attrs:{align:"center"}},[s("el-button",{on:{click:function(e){t.step=2}}},[t._v("下一步")])],1):t._e(),2===t.step?s("div",{attrs:{slot:"header"},slot:"header"},[s("span",{staticClass:"fz-16"},[t._v("编辑会话名称")]),s("el-button",{staticClass:"close-btn",attrs:{type:"text"},on:{click:function(e){t.visibleSessionAdd=!1}}},[s("i",{staticClass:"el-icon-close"})])],1):t._e(),2===t.step?s("div",{staticClass:"form"},[s("el-input",{attrs:{placeholder:"会话名称"}})],1):t._e(),2===t.step?s("div",{staticClass:"flex",staticStyle:{width:"250px",position:"absolute",bottom:"14px",left:"0","justify-content":"space-around"},attrs:{align:"center"}},[s("el-button",{on:{click:function(e){t.step=1}}},[t._v("上一步")]),s("el-button",[t._v("完成创建")])],1):t._e()]):t._e()],1)},l=[],a=(s("4de4"),{name:"GroupIntercom",data:function(){var t=["1","2","3","4"],e=[{id:1,label:"测试组 1",children:[{id:4,label:"测试组 1-1",children:[{name:"1",id:9,label:"测试组 1-1-1"},{name:"2",id:10,label:"测试组 1-1-2"}]}]},{id:2,label:"测试组 2",children:[{id:5,label:"测试组 2-1"},{id:6,label:"测试组 2-2"}]},{id:3,label:"测试组 3",children:[{id:7,label:"测试组 3-1"},{id:8,label:"测试组 3-2"}]}];return{step:1,levelValue:3,searchKey:"",value1:"",value2:"",filterKey:0,visibleList:!1,visibleMemberEdit:!1,visibleMemberAdd:!1,visibleMonitor:!1,visibleGroupEdit:!1,visibleGroupAdd:!1,visibleSessionAdd:!1,visibleCall:!1,groupData:[{type:"group"},{type:"group"},{type:"conversation"},{type:"conversation"},{type:"group"},{type:"group"}],checkAll:!1,visitAll:!0,data:JSON.parse(JSON.stringify(e)),checkedPerson:["1","2"],members:t,isIndeterminate:!0}},computed:{filterGroup:function(){switch(this.filterKey){case 0:return this.groupData;case 1:return this.groupData.filter((function(t){return"group"===t.type}));case 2:return this.groupData.filter((function(t){return"conversation"===t.type}));default:return[]}}},mounted:function(){},methods:{handleCheckAllChange:function(t){this.checkedPerson=t?this.members:[],this.isIndeterminate=!1},handleCheckedChange:function(t){var e=t.length;this.checkAll=e===this.members.length,this.isIndeterminate=e>0&&e<this.members.length},openEdit:function(t){"group"===t.type&&(this.visibleGroupEdit=!0)},handleDissolveGroup:function(){var t=this;this.$confirm("确认解散?",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$message({type:"success",message:"解散成功!"})})).catch((function(){t.$message({type:"info",message:"已取消解散"})}))}}}),n=a,c=(s("4c01"),s("2877")),o=Object(c["a"])(n,i,l,!1,null,"2f7fed24",null);e["default"]=o.exports},"4c01":function(t,e,s){"use strict";var i=s("ff96"),l=s.n(i);l.a},ff96:function(t,e,s){}}]);
//# sourceMappingURL=chunk-1e5de0fb.ae2d3eac.js.map