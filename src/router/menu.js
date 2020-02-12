import intercomRoutes from './modules/intercom'
import dataRoutes from './modules/data'
import locationRoutes from './modules/location'
import notificationRoutes from './modules/notification'
import taskRoutes from './modules/task'
import alarmRoutes from './modules/alarm'
import surveillanceRoutes from './modules/surveillance'

// 卡控履职
export const cardControlPerformance = [{
    icon: 'el-icon-s-help',
    name: '数据中心',
    routers: dataRoutes
}, {
    icon: 'el-icon-s-help',
    name: '任务管理',
    routers: taskRoutes
}, {
    icon: 'el-icon-s-help',
    name: '告警中心',
    routers: alarmRoutes
}, {
    icon: 'el-icon-s-help',
    name: '通知中心',
    routers: notificationRoutes
}, {
    icon: 'el-icon-s-help',
    name: '位置管理',
    routers: locationRoutes
}, {
    icon: 'el-icon-s-help',
    name: '和对讲',
    routers: intercomRoutes
}]

// 作业监控
export const jobMonitoring = [{
    icon: 'el-icon-s-help',
    name: '和对讲',
    routers: intercomRoutes
}, {
  icon: 'el-icon-s-help',
  name: '视频监控',
  routers: surveillanceRoutes
}, {
    icon: 'el-icon-s-help',
    name: '数据中心',
    routers: dataRoutes
}, {
    icon: 'el-icon-s-help',
    name: '告警中心',
    routers: alarmRoutes
},{
    icon: 'el-icon-s-help',
    name: '位置管理',
    routers: locationRoutes
}]