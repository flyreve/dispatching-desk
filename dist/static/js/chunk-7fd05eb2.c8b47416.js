(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7fd05eb2"],{"175e":function(e,t,l){"use strict";l.r(t);var s=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"task-assessment width-page"},[l("div",{staticClass:"page-header"},[e._v("任务记录统计")]),l("div",{staticClass:"data-type"},[l("div",{staticClass:"type-item"},[e._v("图片：9999")]),l("div",{staticClass:"type-item"},[e._v("视频：9999")]),2===e.viewType?l("div",{staticClass:"type-item"},[e._v("实时视频：999")]):l("div",{staticClass:"type-item"},[e._v("文档：9999")])]),l("div",{staticClass:"filter-content"},[l("div",{staticClass:"flex"},[l("el-input",{staticStyle:{width:"120px","margin-right":"10px"},attrs:{placeholder:"搜索",size:"mini"},model:{value:e.searchKey,callback:function(t){e.searchKey=t},expression:"searchKey"}},[l("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})]),l("el-date-picker",{staticStyle:{width:"90px",margin:"0 5px"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),e._v(" -- "),l("el-date-picker",{staticStyle:{width:"90px",margin:"0 5px"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),l("el-button",{staticClass:"ml-10",attrs:{type:"primary",round:"",icon:"el-icon-check"}},[e._v("检索")])],1),l("div",{staticClass:"flex"},[l("el-popover",{attrs:{placement:"bottom",width:"20",trigger:"click"},model:{value:e.visiblePopover,callback:function(t){e.visiblePopover=t},expression:"visiblePopover"}},[l("el-link",{staticClass:"block fz-16",attrs:{underline:!1},on:{click:function(t){return e.handleChangeMode(1)}}},[l("i",{staticClass:"el-icon-s-data"}),l("span",{staticClass:"ml-10"},[e._v("列表显示")])]),l("el-divider"),l("el-link",{staticClass:"block fz-16",attrs:{underline:!1},on:{click:function(t){return e.handleChangeMode(0)}}},[l("i",{staticClass:"el-icon-menu"}),l("span",{staticClass:"ml-10"},[e._v("视图显示")])]),l("el-divider"),l("el-link",{staticClass:"block fz-16",attrs:{underline:!1},on:{click:function(t){return e.handleChangeMode(2)}}},[l("i",{staticClass:"el-icon-s-operation"}),l("span",{staticClass:"ml-10"},[e._v("详情显示")])]),l("el-link",{attrs:{slot:"reference",underline:!1},slot:"reference"},[0===e.viewType?l("i",{staticClass:"el-icon-menu fz-22"}):e._e(),1===e.viewType?l("i",{staticClass:"el-icon-s-data fz-22"}):e._e(),2===e.viewType?l("i",{staticClass:"el-icon-s-operation fz-22"}):e._e()])],1),0===e.viewType?l("el-checkbox",{staticClass:"ml-10",model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("全选")]):e._e(),l("el-button",{staticClass:"ml-10",attrs:{type:"danger",round:"",icon:"el-icon-delete"}},[e._v("删除")]),l("el-button",{attrs:{type:"danger",round:"",icon:"el-icon-download"}},[e._v("下载")]),l("el-button",{attrs:{type:"text",icon:"el-icon-upload2"}},[e._v("导出数据")])],1)]),0===e.viewType?l("div",{staticClass:"data-content"},[l("div",{staticClass:"video-box"},e._l(7,(function(t,s){return l("div",{key:s+"k",staticClass:"video-item",on:{click:function(t){e.visibleInfo=!0}}},[l("div",[l("el-progress",{attrs:{type:"circle",percentage:75}})],1),l("el-checkbox",{staticClass:"ml-10 mt-10",model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("行车安全")]),e._m(0,!0)],1)})),0),l("el-pagination",{staticClass:"mt-10 fr",attrs:{background:"","current-page":e.currentPage1,"page-size":100,layout:"total, prev, pager, next",total:1e3},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage1=t},"update:current-page":function(t){e.currentPage1=t}}})],1):e._e(),1===e.viewType?l("div",{staticClass:"data-content"},[l("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData},on:{"row-click":e.toDetail}},[l("el-table-column",{attrs:{align:"center",type:"selection",width:"45"}}),l("el-table-column",{attrs:{align:"center",prop:"k1",width:"90"}},[l("el-popover",{attrs:{slot:"header",placement:"bottom",width:"150",trigger:"click"},slot:"header"},[l("div",{staticClass:"popover-box"},[l("div",{staticClass:"fz-16"},[e._v("选择部门")]),l("el-input",{staticClass:"mt-10",attrs:{placeholder:"搜索",size:"mini"},model:{value:e.searchKey,callback:function(t){e.searchKey=t},expression:"searchKey"}},[l("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})]),l("div",{staticClass:"filter"},[l("el-button",{attrs:{round:"",size:"mini",type:e.visitAll?"":"primary"},on:{click:function(t){e.visitAll=!0}}},[e._v("全部")]),l("el-divider",{attrs:{direction:"vertical"}}),l("el-button",{attrs:{round:"",type:e.visitAll?"primary":""},on:{click:function(t){e.visitAll=!1}}},[e._v("按部门显示")])],1),e.visitAll?l("el-tree",{staticClass:"person-list",attrs:{data:e.data,"show-checkbox":"","node-key":"id","default-expand-all":"","expand-on-click-node":!1},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.node;t.data;return l("div",{staticStyle:{width:"100%"}},[l("div",{staticClass:"flex",staticStyle:{width:"100%"}},[l("div",[e._v(e._s(s.label))])])])}}],null,!1,3687553272)}):l("div",{staticClass:"person-list"},[l("el-checkbox-group",{model:{value:e.checkedPerson,callback:function(t){e.checkedPerson=t},expression:"checkedPerson"}},e._l(e.members,(function(t,s){return l("div",{key:s+"123",staticClass:"person-item"},[l("div",{staticClass:"flex"},[l("el-checkbox",{staticClass:"inlineBlock"}),l("i",{staticClass:"el-icon-user fz-16",staticStyle:{"margin-left":"5px"}}),l("div",[e._v("（备注名/账号）")])],1)])})),0)],1),l("div",{staticClass:"flex mt-10"},[l("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全选")]),e._v(" 共选择"+e._s(e.checkedPerson.length)+"人 ")],1),l("div",{staticClass:"mt-10",attrs:{align:"center"}},[l("el-button",[e._v("确认")])],1)],1),l("el-link",{attrs:{slot:"reference",underline:!1},slot:"reference"},[e._v(" 部门 "),l("i",{staticClass:"el-icon-arrow-down fz-10"})])],1)],1),l("el-table-column",{attrs:{align:"center",prop:"k2",width:"90"}},[l("el-popover",{attrs:{slot:"header",placement:"bottom",width:"150",trigger:"click"},slot:"header"},[l("div",{staticClass:"popover-box"},[l("div",{staticClass:"fz-16"},[e._v("选择成员")]),l("el-input",{staticClass:"mt-10",attrs:{placeholder:"搜索",size:"mini"},model:{value:e.searchKey,callback:function(t){e.searchKey=t},expression:"searchKey"}},[l("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})]),l("div",{staticClass:"filter"},[l("el-button",{attrs:{round:"",size:"mini",type:e.visitAll?"primary":""},on:{click:function(t){e.visitAll=!0}}},[e._v("全部")]),l("el-divider",{attrs:{direction:"vertical"}}),l("el-button",{attrs:{round:"",type:e.visitAll?"":"primary"},on:{click:function(t){e.visitAll=!1}}},[e._v("按部门显示")])],1),e.visitAll?l("div",{staticClass:"person-list"},[l("el-checkbox-group",{model:{value:e.checkedPerson,callback:function(t){e.checkedPerson=t},expression:"checkedPerson"}},e._l(e.members,(function(t,s){return l("div",{key:s+"123",staticClass:"person-item"},[l("div",{staticClass:"flex"},[l("el-checkbox",{staticClass:"inlineBlock"}),l("i",{staticClass:"el-icon-user fz-16",staticStyle:{"margin-left":"5px"}}),l("div",[e._v("（备注名/账号）")])],1)])})),0)],1):l("el-tree",{staticClass:"person-list",attrs:{data:e.data,"show-checkbox":"","node-key":"id","default-expand-all":"","expand-on-click-node":!1},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.node;t.data;return l("div",{staticStyle:{width:"100%"}},[l("div",{staticClass:"flex",staticStyle:{width:"100%"}},[l("div",[e._v(e._s(s.label))])])])}}],null,!1,3687553272)}),l("div",{staticClass:"flex mt-10"},[l("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全选")]),e._v(" 共选择"+e._s(e.checkedPerson.length)+"人 ")],1),l("div",{staticClass:"mt-10",attrs:{align:"center"}},[l("el-button",[e._v("确认")])],1)],1),l("el-link",{attrs:{slot:"reference",underline:!1},slot:"reference"},[e._v(" 上报人 "),l("i",{staticClass:"el-icon-arrow-down fz-10"})])],1)],1),l("el-table-column",{attrs:{align:"center",prop:"k3"}},[l("el-popover",{attrs:{slot:"header",placement:"bottom",width:"150",trigger:"click"},slot:"header"},[l("div",{staticClass:"popover-box"},[l("div",{staticClass:"fz-16"},[e._v("选择任务")]),l("el-input",{staticClass:"mt-10",attrs:{placeholder:"搜索",size:"mini"},model:{value:e.searchKey,callback:function(t){e.searchKey=t},expression:"searchKey"}},[l("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})]),l("div",{staticClass:"person-list"},[l("el-checkbox-group",{model:{value:e.checkedPerson,callback:function(t){e.checkedPerson=t},expression:"checkedPerson"}},e._l(e.members,(function(t,s){return l("div",{key:s+"123",staticClass:"person-item"},[l("div",{staticClass:"flex"},[l("el-checkbox",{staticClass:"inlineBlock"}),l("div",{staticClass:"pl-5"},[e._v("xxx（任务名称）")])],1)])})),0)],1),l("div",{staticClass:"flex mt-10"},[l("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全选")]),e._v(" 共选择"+e._s(e.checkedPerson.length)+"人 ")],1),l("div",{staticClass:"mt-10",attrs:{align:"center"}},[l("el-button",[e._v("确认")])],1)],1),l("el-link",{attrs:{slot:"reference",underline:!1},slot:"reference"},[e._v(" 任务 "),l("i",{staticClass:"el-icon-arrow-down fz-10"})])],1)],1),l("el-table-column",{attrs:{align:"center",prop:"k4"}},[l("el-popover",{attrs:{slot:"header",placement:"bottom",width:"150",trigger:"click"},slot:"header"},[l("div",{staticClass:"popover-box"},[l("div",{staticClass:"fz-16"},[e._v("选择任务区域")]),l("el-input",{staticClass:"mt-10",attrs:{placeholder:"搜索",size:"mini"},model:{value:e.searchKey,callback:function(t){e.searchKey=t},expression:"searchKey"}},[l("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})]),l("div",{staticClass:"person-list"},[l("el-checkbox-group",{model:{value:e.checkedPerson,callback:function(t){e.checkedPerson=t},expression:"checkedPerson"}},e._l(e.members,(function(t,s){return l("div",{key:s+"123",staticClass:"person-item"},[l("div",{staticClass:"flex"},[l("el-checkbox",{staticClass:"inlineBlock"}),l("div",{staticClass:"pl-5"},[e._v("xxx（任务名称）")])],1)])})),0)],1),l("div",{staticClass:"flex mt-10"},[l("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全选")]),e._v(" 共选择"+e._s(e.checkedPerson.length)+"人 ")],1),l("div",{staticClass:"mt-10",attrs:{align:"center"}},[l("el-button",[e._v("确认")])],1)],1),l("el-link",{attrs:{slot:"reference",underline:!1},slot:"reference"},[e._v(" 区域 "),l("i",{staticClass:"el-icon-arrow-down fz-10"})])],1)],1),l("el-table-column",{attrs:{align:"center",prop:"k5"}},[l("el-popover",{attrs:{slot:"header",placement:"bottom",width:"150",trigger:"click"},slot:"header"},[l("div",{staticClass:"popover-box"},[l("div",{staticClass:"fz-16"},[e._v("选择任务标签")]),l("el-input",{staticClass:"mt-10",attrs:{placeholder:"搜索",size:"mini"},model:{value:e.searchKey,callback:function(t){e.searchKey=t},expression:"searchKey"}},[l("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})]),l("div",{staticClass:"person-list"},[l("el-checkbox-group",{model:{value:e.checkedPerson,callback:function(t){e.checkedPerson=t},expression:"checkedPerson"}},e._l(e.members,(function(t,s){return l("div",{key:s+"123",staticClass:"person-item"},[l("div",{staticClass:"flex"},[l("el-checkbox",{staticClass:"inlineBlock"}),l("div",{staticClass:"pl-5"},[e._v("xxx（任务标签名称）")])],1)])})),0)],1),l("div",{staticClass:"flex mt-10"},[l("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全选")]),e._v(" 共选择"+e._s(e.checkedPerson.length)+"人 ")],1),l("div",{staticClass:"mt-10",attrs:{align:"center"}},[l("el-button",[e._v("确认")])],1)],1),l("el-link",{attrs:{slot:"reference",underline:!1},slot:"reference"},[e._v(" 标签 "),l("i",{staticClass:"el-icon-arrow-down fz-10"})])],1)],1),l("el-table-column",{attrs:{align:"center",prop:"k6",label:"状态",width:"120",filters:[{text:"已完成",value:"已完成"},{text:"未完成",value:"未完成"}],"filter-method":e.filterHandler}}),l("el-table-column",{attrs:{align:"center",prop:"k7",label:"图片"}}),l("el-table-column",{attrs:{align:"center",prop:"k8",label:"视频"}}),l("el-table-column",{attrs:{align:"center",prop:"k9",label:"文档"}})],1),l("el-pagination",{staticClass:"mt-10 fr",attrs:{background:"","current-page":e.currentPage1,"page-size":100,layout:"total, prev, pager, next",total:1e3},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage1=t},"update:current-page":function(t){e.currentPage1=t}}})],1):e._e(),2===e.viewType?l("div",{staticClass:"data-content"},[l("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData},on:{"row-click":e.toDetail}},[l("el-table-column",{attrs:{align:"center",type:"selection",width:"45"}}),l("el-table-column",{attrs:{align:"center",prop:"k1",width:"90"}},[l("el-popover",{attrs:{slot:"header",placement:"bottom",width:"150",trigger:"click"},slot:"header"},[l("div",{staticClass:"popover-box"},[l("div",{staticClass:"fz-16"},[e._v("选择部门")]),l("el-input",{staticClass:"mt-10",attrs:{placeholder:"搜索",size:"mini"},model:{value:e.searchKey,callback:function(t){e.searchKey=t},expression:"searchKey"}},[l("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})]),l("div",{staticClass:"filter"},[l("el-button",{attrs:{round:"",size:"mini",type:e.visitAll?"":"primary"},on:{click:function(t){e.visitAll=!0}}},[e._v("全部")]),l("el-divider",{attrs:{direction:"vertical"}}),l("el-button",{attrs:{round:"",type:e.visitAll?"primary":""},on:{click:function(t){e.visitAll=!1}}},[e._v("按部门显示")])],1),e.visitAll?l("el-tree",{staticClass:"person-list",attrs:{data:e.data,"show-checkbox":"","node-key":"id","default-expand-all":"","expand-on-click-node":!1},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.node;t.data;return l("div",{staticStyle:{width:"100%"}},[l("div",{staticClass:"flex",staticStyle:{width:"100%"}},[l("div",[e._v(e._s(s.label))])])])}}],null,!1,3687553272)}):l("div",{staticClass:"person-list"},[l("el-checkbox-group",{model:{value:e.checkedPerson,callback:function(t){e.checkedPerson=t},expression:"checkedPerson"}},e._l(e.members,(function(t,s){return l("div",{key:s+"123",staticClass:"person-item"},[l("div",{staticClass:"flex"},[l("el-checkbox",{staticClass:"inlineBlock"}),l("i",{staticClass:"el-icon-user fz-16",staticStyle:{"margin-left":"5px"}}),l("div",[e._v("（备注名/账号）")])],1)])})),0)],1),l("div",{staticClass:"flex mt-10"},[l("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全选")]),e._v(" 共选择"+e._s(e.checkedPerson.length)+"人 ")],1),l("div",{staticClass:"mt-10",attrs:{align:"center"}},[l("el-button",[e._v("确认")])],1)],1),l("el-link",{attrs:{slot:"reference",underline:!1},slot:"reference"},[e._v(" 部门 "),l("i",{staticClass:"el-icon-arrow-down fz-10"})])],1)],1),l("el-table-column",{attrs:{align:"center",prop:"k2",width:"90"}},[l("el-popover",{attrs:{slot:"header",placement:"bottom",width:"150",trigger:"click"},slot:"header"},[l("div",{staticClass:"popover-box"},[l("div",{staticClass:"fz-16"},[e._v("选择成员")]),l("el-input",{staticClass:"mt-10",attrs:{placeholder:"搜索",size:"mini"},model:{value:e.searchKey,callback:function(t){e.searchKey=t},expression:"searchKey"}},[l("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})]),l("div",{staticClass:"filter"},[l("el-button",{attrs:{round:"",size:"mini",type:e.visitAll?"primary":""},on:{click:function(t){e.visitAll=!0}}},[e._v("全部")]),l("el-divider",{attrs:{direction:"vertical"}}),l("el-button",{attrs:{round:"",type:e.visitAll?"":"primary"},on:{click:function(t){e.visitAll=!1}}},[e._v("按部门显示")])],1),e.visitAll?l("div",{staticClass:"person-list"},[l("el-checkbox-group",{model:{value:e.checkedPerson,callback:function(t){e.checkedPerson=t},expression:"checkedPerson"}},e._l(e.members,(function(t,s){return l("div",{key:s+"123",staticClass:"person-item"},[l("div",{staticClass:"flex"},[l("el-checkbox",{staticClass:"inlineBlock"}),l("i",{staticClass:"el-icon-user fz-16",staticStyle:{"margin-left":"5px"}}),l("div",[e._v("（备注名/账号）")])],1)])})),0)],1):l("el-tree",{staticClass:"person-list",attrs:{data:e.data,"show-checkbox":"","node-key":"id","default-expand-all":"","expand-on-click-node":!1},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.node;t.data;return l("div",{staticStyle:{width:"100%"}},[l("div",{staticClass:"flex",staticStyle:{width:"100%"}},[l("div",[e._v(e._s(s.label))])])])}}],null,!1,3687553272)}),l("div",{staticClass:"flex mt-10"},[l("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全选")]),e._v(" 共选择"+e._s(e.checkedPerson.length)+"人 ")],1),l("div",{staticClass:"mt-10",attrs:{align:"center"}},[l("el-button",[e._v("确认")])],1)],1),l("el-link",{attrs:{slot:"reference",underline:!1},slot:"reference"},[e._v(" 上报人 "),l("i",{staticClass:"el-icon-arrow-down fz-10"})])],1)],1),l("el-table-column",{attrs:{align:"center",prop:"k3"}},[l("el-popover",{attrs:{slot:"header",placement:"bottom",width:"150",trigger:"click"},slot:"header"},[l("div",{staticClass:"popover-box"},[l("div",{staticClass:"fz-16"},[e._v("选择任务")]),l("el-input",{staticClass:"mt-10",attrs:{placeholder:"搜索",size:"mini"},model:{value:e.searchKey,callback:function(t){e.searchKey=t},expression:"searchKey"}},[l("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})]),l("div",{staticClass:"person-list"},[l("el-checkbox-group",{model:{value:e.checkedPerson,callback:function(t){e.checkedPerson=t},expression:"checkedPerson"}},e._l(e.members,(function(t,s){return l("div",{key:s+"123",staticClass:"person-item"},[l("div",{staticClass:"flex"},[l("el-checkbox",{staticClass:"inlineBlock"}),l("div",{staticClass:"pl-5"},[e._v("xxx（任务名称）")])],1)])})),0)],1),l("div",{staticClass:"flex mt-10"},[l("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全选")]),e._v(" 共选择"+e._s(e.checkedPerson.length)+"人 ")],1),l("div",{staticClass:"mt-10",attrs:{align:"center"}},[l("el-button",[e._v("确认")])],1)],1),l("el-link",{attrs:{slot:"reference",underline:!1},slot:"reference"},[e._v(" 任务 "),l("i",{staticClass:"el-icon-arrow-down fz-10"})])],1)],1),l("el-table-column",{attrs:{align:"center",prop:"k4"}},[l("el-popover",{attrs:{slot:"header",placement:"bottom",width:"150",trigger:"click"},slot:"header"},[l("div",{staticClass:"popover-box"},[l("div",{staticClass:"fz-16"},[e._v("选择任务区域")]),l("el-input",{staticClass:"mt-10",attrs:{placeholder:"搜索",size:"mini"},model:{value:e.searchKey,callback:function(t){e.searchKey=t},expression:"searchKey"}},[l("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})]),l("div",{staticClass:"person-list"},[l("el-checkbox-group",{model:{value:e.checkedPerson,callback:function(t){e.checkedPerson=t},expression:"checkedPerson"}},e._l(e.members,(function(t,s){return l("div",{key:s+"123",staticClass:"person-item"},[l("div",{staticClass:"flex"},[l("el-checkbox",{staticClass:"inlineBlock"}),l("div",{staticClass:"pl-5"},[e._v("xxx（任务名称）")])],1)])})),0)],1),l("div",{staticClass:"flex mt-10"},[l("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全选")]),e._v(" 共选择"+e._s(e.checkedPerson.length)+"人 ")],1),l("div",{staticClass:"mt-10",attrs:{align:"center"}},[l("el-button",[e._v("确认")])],1)],1),l("el-link",{attrs:{slot:"reference",underline:!1},slot:"reference"},[e._v(" 区域 "),l("i",{staticClass:"el-icon-arrow-down fz-10"})])],1)],1),l("el-table-column",{attrs:{align:"center",prop:"k5"}},[l("el-popover",{attrs:{slot:"header",placement:"bottom",width:"150",trigger:"click"},slot:"header"},[l("div",{staticClass:"popover-box"},[l("div",{staticClass:"fz-16"},[e._v("选择任务标签")]),l("el-input",{staticClass:"mt-10",attrs:{placeholder:"搜索",size:"mini"},model:{value:e.searchKey,callback:function(t){e.searchKey=t},expression:"searchKey"}},[l("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})]),l("div",{staticClass:"person-list"},[l("el-checkbox-group",{model:{value:e.checkedPerson,callback:function(t){e.checkedPerson=t},expression:"checkedPerson"}},e._l(e.members,(function(t,s){return l("div",{key:s+"123",staticClass:"person-item"},[l("div",{staticClass:"flex"},[l("el-checkbox",{staticClass:"inlineBlock"}),l("div",{staticClass:"pl-5"},[e._v("xxx（任务标签名称）")])],1)])})),0)],1),l("div",{staticClass:"flex mt-10"},[l("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全选")]),e._v(" 共选择"+e._s(e.checkedPerson.length)+"人 ")],1),l("div",{staticClass:"mt-10",attrs:{align:"center"}},[l("el-button",[e._v("确认")])],1)],1),l("el-link",{attrs:{slot:"reference",underline:!1},slot:"reference"},[e._v(" 标签 "),l("i",{staticClass:"el-icon-arrow-down fz-10"})])],1)],1),l("el-table-column",{attrs:{align:"center",prop:"k6",label:"状态",width:"120",filters:[{text:"已完成",value:"已完成"},{text:"未完成",value:"未完成"}],"filter-method":e.filterHandler}}),l("el-table-column",{attrs:{align:"center",prop:"k7",width:"120"}},[l("el-popover",{attrs:{slot:"header",placement:"bottom",width:"150",trigger:"click"},slot:"header"},[l("div",{staticClass:"popover-box"},[l("div",{staticClass:"fz-16"},[e._v("选择上报地点")]),l("el-input",{staticClass:"mt-10",attrs:{placeholder:"搜索",size:"mini"},model:{value:e.searchKey,callback:function(t){e.searchKey=t},expression:"searchKey"}},[l("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})]),l("div",{staticClass:"person-list"},[l("el-checkbox-group",{model:{value:e.checkedPerson,callback:function(t){e.checkedPerson=t},expression:"checkedPerson"}},e._l(e.members,(function(t,s){return l("div",{key:s+"123",staticClass:"person-item"},[l("div",{staticClass:"flex"},[l("el-checkbox",{staticClass:"inlineBlock"}),l("div",{staticClass:"pl-5"},[e._v("xxx（地点名称）")])],1)])})),0)],1),l("div",{staticClass:"flex mt-10"},[l("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全选")]),e._v(" 共选择"+e._s(e.checkedPerson.length)+"人 ")],1),l("div",{staticClass:"mt-10",attrs:{align:"center"}},[l("el-button",[e._v("确认")])],1)],1),l("el-link",{attrs:{slot:"reference",underline:!1},slot:"reference"},[e._v(" 上报地点 "),l("i",{staticClass:"el-icon-arrow-down fz-10"})])],1)],1),l("el-table-column",{attrs:{align:"center",prop:"k1",label:"文件类型",filters:[{text:"图片",value:"图片"},{text:"视频",value:"视频"},{text:"实时视频",value:"实时视频"}],"filter-method":e.filterHandler},scopedSlots:e._u([{key:"default",fn:function(e){e.row;return[l("el-link",{attrs:{underline:!1}},[l("i",{staticClass:"el-icon-video-play fz-22"})])]}}],null,!1,3562749155)}),l("el-table-column",{attrs:{align:"center",prop:"k2",label:"文档",filters:[{text:"语音",value:"语音"},{text:"文字",value:"文字"}],"filter-method":e.filterHandler}})],1),l("el-pagination",{staticClass:"mt-10 fr",attrs:{background:"","current-page":e.currentPage1,"page-size":100,layout:"total, prev, pager, next",total:1e3},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage1=t},"update:current-page":function(t){e.currentPage1=t}}})],1):e._e(),l("el-dialog",{attrs:{title:"任务记录详情",visible:e.visibleInfo,width:"60%",top:"25vh"},on:{"update:visible":function(t){e.visibleInfo=t}}},[l("div",{staticClass:"flex record-info"},[l("div",[l("p",{staticClass:"text"},[e._v("上报人 ：xxx(成员备注名)")]),l("p",{staticClass:"text"},[e._v("所属部门 ：xxx(部门名称)")])]),l("el-divider",{attrs:{direction:"vertical"}}),l("div",[l("p",{staticClass:"text"},[e._v("上报人：xxx(成员备注名)")]),l("p",{staticClass:"text"},[e._v("所属部门：xxx(部门名称)")])]),l("el-divider",{attrs:{direction:"vertical"}}),l("div",[l("p",{staticClass:"text"},[e._v("上报人：xxx(成员备注名)")]),l("p",{staticClass:"text"},[e._v("所属部门：xxx(部门名称)")])])],1),l("div",{staticClass:"el-dialog__title",staticStyle:{"padding-top":"20px"}},[e._v("任务记录统计")]),l("div",{staticClass:"data-type"},[l("div",{staticClass:"type-item"},[e._v("图片：9")]),l("div",{staticClass:"type-item"},[e._v("视频：9")]),l("div",{staticClass:"type-item"},[e._v("视频：9")])]),l("div",{staticClass:"pic-list"},e._l(8,(function(t,s){return l("div",{key:s+"p",staticClass:"pic-item"},[l("div",{staticClass:"wrap"},[l("div",{staticClass:"pic"}),l("div",{staticClass:"fz-10 text"},[e._v("2019年11月21日17:20")]),l("div",{staticClass:"fz-12 text text-omit"},[e._v("上报地点：盘龙区白塔路星耀大厦")])])])})),0)])],1)},a=[function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"remarks"},[l("span",[e._v("图片：66")]),l("span",{staticClass:"ml-10"},[e._v("视频：15")])])}],i={name:"task-assessment",data:function(){var e=["1","2","3","4"],t=[{id:1,label:"测试组 1",children:[{id:4,label:"测试组 1-1",children:[{name:"1",id:9,label:"测试组 1-1-1"},{name:"2",id:10,label:"测试组 1-1-2"}]}]},{id:2,label:"测试组 2",children:[{id:5,label:"测试组 2-1"},{id:6,label:"测试组 2-2"}]},{id:3,label:"测试组 3",children:[{id:7,label:"测试组 3-1"},{id:8,label:"测试组 3-2"}]}];return{currentPage1:5,tableData:[{k1:"部门名称",k2:"成员名称",k3:"任务名称",k4:"区域名称",k5:"标签名称",k6:"已完成/未完成",k7:"99",k8:"99",k9:"文档"},{k1:"部门名称",k2:"成员名称",k3:"任务名称",k4:"区域名称",k5:"标签名称",k6:"已完成/未完成",k7:"99",k8:"99",k9:"文档"},{k1:"部门名称",k2:"成员名称",k3:"任务名称",k4:"区域名称",k5:"标签名称",k6:"已完成/未完成",k7:"99",k8:"99",k9:"文档"},{k1:"部门名称",k2:"成员名称",k3:"任务名称",k4:"区域名称",k5:"标签名称",k6:"已完成/未完成",k7:"99",k8:"99",k9:"文档"},{k1:"部门名称",k2:"成员名称",k3:"任务名称",k4:"区域名称",k5:"标签名称",k6:"已完成/未完成",k7:"99",k8:"99",k9:"文档"},{k1:"部门名称",k2:"成员名称",k3:"任务名称",k4:"区域名称",k5:"标签名称",k6:"已完成/未完成",k7:"99",k8:"99",k9:"文档"},{k1:"部门名称",k2:"成员名称",k3:"任务名称",k4:"区域名称",k5:"标签名称",k6:"已完成/未完成",k7:"99",k8:"99",k9:"文档"},{k1:"部门名称",k2:"成员名称",k3:"任务名称",k4:"区域名称",k5:"标签名称",k6:"已完成/未完成",k7:"99",k8:"99",k9:"文档"},{k1:"部门名称",k2:"成员名称",k3:"任务名称",k4:"区域名称",k5:"标签名称",k6:"已完成/未完成",k7:"99",k8:"99",k9:"文档"},{k1:"部门名称",k2:"成员名称",k3:"任务名称",k4:"区域名称",k5:"标签名称",k6:"已完成/未完成",k7:"99",k8:"99",k9:"文档"},{k1:"部门名称",k2:"成员名称",k3:"任务名称",k4:"区域名称",k5:"标签名称",k6:"已完成/未完成",k7:"99",k8:"99",k9:"文档"}],searchKey:"",value:"",checked:"",visibleInfo:!1,visiblePopover:!1,viewType:1,visitAll:!0,checkedPerson:["1","2"],data:JSON.parse(JSON.stringify(t)),members:e,checkAll:!1,isIndeterminate:!0}},mounted:function(){},methods:{handleChangeMode:function(e){this.viewType=e,this.visiblePopover=!1},filterHandler:function(e,t,l){var s=l["property"];return t[s]===e},handleSizeChange:function(e){console.log("每页 ".concat(e," 条"))},handleCurrentChange:function(e){console.log("当前页: ".concat(e))},toDetail:function(){this.$router.push({name:"assessment-details"})}}},c=i,n=(l("1b88"),l("a283"),l("2877")),r=Object(n["a"])(c,s,a,!1,null,"6c7757b7",null);t["default"]=r.exports},"1b88":function(e,t,l){"use strict";var s=l("9baf"),a=l.n(s);a.a},"9baf":function(e,t,l){},a283:function(e,t,l){"use strict";var s=l("a791"),a=l.n(s);a.a},a791:function(e,t,l){}}]);
//# sourceMappingURL=chunk-7fd05eb2.c8b47416.js.map