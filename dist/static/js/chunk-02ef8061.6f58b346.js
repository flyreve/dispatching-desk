(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02ef8061"],{"2e3d":function(t,e,s){"use strict";var i=s("6466"),a=s.n(i);a.a},3544:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"task-alarm page"},[s("el-card",{staticClass:"main-1-card"},[s("div",{attrs:{slot:"header"},slot:"header"},[s("span",{staticClass:"fz-16"},[t._v("任务告警")])]),s("el-input",{attrs:{placeholder:"搜索",size:"mini"},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}},[s("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})]),s("div",{staticClass:"flex mt-5"},[s("el-date-picker",{staticStyle:{width:"45%"},attrs:{type:"date",placeholder:"开始"}}),t._v(" - "),s("el-date-picker",{staticStyle:{width:"45%"},attrs:{type:"date",placeholder:"结束"}})],1),s("div",{staticClass:"info-list mt-5"},[s("el-checkbox-group",{on:{change:t.handleCheckedChange},model:{value:t.checkedPerson,callback:function(e){t.checkedPerson=e},expression:"checkedPerson"}},t._l(5,(function(e,i){return s("div",{key:i+"1",staticClass:"info-item",on:{click:function(e){t.visibleInfo=!0}}},[s("div",{staticClass:"flex"},[s("el-checkbox",{staticClass:"inlineBlock"}),s("div",{staticClass:"pl-5"},[s("strong",[t._v("防溜检查")]),s("p",{staticClass:"fz-10 text-omit"},[t._v("告警类型：任务告警")]),s("p",{staticClass:"fz-10 text-omit"},[t._v("创建时间：2019年6月20日22:17:14")]),s("p",{staticClass:"fz-10 text-omit"},[t._v("告警原因：任务超时/任务未完成/离开任务区域")])])],1)])})),0)],1),s("div",{staticClass:"flex"},[s("el-checkbox",{attrs:{indeterminate:t.isIndeterminate},on:{change:t.handleCheckAllChange},model:{value:t.checkAll,callback:function(e){t.checkAll=e},expression:"checkAll"}},[t._v("全选")]),t._v(" 共选择"+t._s(t.checkedPerson.length)+"人 ")],1),s("div",{staticClass:"flex mt-10",staticStyle:{"justify-content":"space-around"},attrs:{align:"center"}},[s("el-button",{staticStyle:{padding:"5px 8px"}},[t._v("标为已读")])],1)],1),t.visibleInfo?s("el-card",{staticClass:"dialog-2-card"},[s("div",{staticClass:"fz-16",attrs:{slot:"header"},slot:"header"},[t._v(" 告警详情 "),s("el-button",{staticClass:"close-btn",attrs:{type:"text"},on:{click:function(e){t.visibleInfo=!1}}},[s("i",{staticClass:"el-icon-close"})])],1),s("div",{staticClass:"mt-5 flex",staticStyle:{color:"#0650C6"}},[s("div",[t._v("防溜检查")]),s("div",{staticClass:"fz-22 pointer",on:{click:function(e){t.visiblePosition=!0}}},[s("i",{staticClass:"el-icon-location-outline"})])]),s("div",{staticClass:"mt-25",staticStyle:{"margin-bottom":"20px","line-height":"17px"}},[s("p",[t._v("告警类型：任务告警")]),s("p",[t._v("告警时间：2019年6月20日22:17:14")]),s("p",[t._v("告警原因：1，张三任务超时")])])]):t._e()],1)},a=[],c={name:"task-alarm",data:function(){var t=["1","2","3","4"];return{searchKey:"",visitAll:!0,visibleInfo:!1,checkedPerson:["1","2"],members:t,checkAll:!1,isIndeterminate:!0}},mounted:function(){},methods:{handleCheckAllChange:function(t){this.checkedPerson=t?this.members:[],this.isIndeterminate=!1},handleCheckedChange:function(t){var e=t.length;this.checkAll=e===this.members.length,this.isIndeterminate=e>0&&e<this.members.length}}},l=c,n=(s("2e3d"),s("2877")),o=Object(n["a"])(l,i,a,!1,null,"cc34c740",null);e["default"]=o.exports},6466:function(t,e,s){}}]);
//# sourceMappingURL=chunk-02ef8061.6f58b346.js.map