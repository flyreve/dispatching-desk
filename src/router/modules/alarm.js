import Layout from '../../layout/index'

// 告警中心

const alarmRoutes = [
  {
    path: '/fence',
    meta: { title: '围栏告警', icon: 'el-icon-user' },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'alarm',
        name: 'fence-alarm',
        component: () => import('@/views/alarm-center/fence-alarm.vue'),
        meta: { title: '围栏告警', icon: 'el-icon-user' }
      }
    ]
  },
  {
    path: '/task',
    meta: { title: '任务告警', icon: 'el-icon-user' },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'alarm',
        name: 'task-alarm',
        component: () => import('@/views/alarm-center/task-alarm.vue'),
        meta: { title: '任务告警', icon: 'el-icon-user' }
      }
    ]
  },
  {
    path: '/event',
    meta: { title: '事件告警', icon: 'el-icon-user' },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'alarm',
        name: 'event-alarm',
        component: () => import('@/views/alarm-center/event-alarm.vue'),
        meta: { title: '事件告警', icon: 'el-icon-user' }
      }
    ]
  },
  {
    path: '/sedentary',
    meta: { title: '久坐告警', icon: 'el-icon-user' },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'alarm',
        name: 'sedentary-alarm',
        component: () => import('@/views/alarm-center/sedentary-alarm.vue'),
        meta: { title: '久坐告警', icon: 'el-icon-user' }
      }
    ]
  },
  {
    path: '/rate',
    meta: { title: '测速告警', icon: 'el-icon-user' },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'alarm',
        name: 'rate-alarm',
        component: () => import('@/views/alarm-center/rate-alarm.vue'),
        meta: { title: '测速告警', icon: 'el-icon-user' }
      }
    ]
  }
]

export default alarmRoutes
