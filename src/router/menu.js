import intercomRoutes from './modules/intercom'
import dataRoutes from './modules/data'
import locationRoutes from './modules/location'
import notificationRoutes from './modules/notification'
import taskRoutes from './modules/task'
import alarmRoutes from './modules/alarm'
import surveillanceRoutes from './modules/surveillance'

// 卡控履职
export const cardControlPerformance = [{
    icon: 'data_center_@2x',
    activeIcon: 'data_center_active_@2x',
    name: '数据中心',
    routers: dataRoutes
}, {
    icon: 'task_@2x',
    activeIcon: 'task_active@2x',
    name: '任务管理',
    routers: taskRoutes
}, {
    icon: 'alarm_@2x',
    activeIcon: 'alarm_active_@2x',
    name: '告警中心',
    routers: alarmRoutes
}, {
    icon: 'msg_@2x',
    activeIcon: 'msg_active_@2x',
    name: '通知中心',
    routers: notificationRoutes
}, {
    icon: 'position_@2x',
    activeIcon: 'position_active_@2x',
    name: '位置管理',
    routers: locationRoutes
}, {
    icon: 'call+_@2x',
    activeIcon: 'call+_active@2x',
    name: '和对讲',
    routers: intercomRoutes
}]

// 作业监控
export const jobMonitoring = [{
    icon: 'call+_@2x',
    activeIcon: 'call+_active@2x',
    name: '和对讲',
    routers: intercomRoutes
}, {
    icon: 'video_monitor_@2x',
    activeIcon: 'video_monitor_active@2x',
    name: '视频监控',
    routers: surveillanceRoutes
}, {
    icon: 'data_center_@2x',
    activeIcon: 'data_center_active_@2x',
    name: '数据中心',
    routers: dataRoutes
}, {
    icon: 'alarm_@2x',
    activeIcon: 'alarm_active_@2x',
    name: '告警中心',
    routers: alarmRoutes
},{
    icon: 'position_@2x',
    activeIcon: 'position_active_@2x',
    name: '位置管理',
    routers: locationRoutes
}]