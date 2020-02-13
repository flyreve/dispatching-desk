import Layout from '../../layout/index'

// 数据中心
const dataRoutes = [
  {
    path: '/task-record',
    meta: { title: '任务记录', icon: 'el-icon-user' },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'analysis',
        name: 'analysis',
        component: () => import('@/views/data-center/task-record/analysis.vue'),
        meta: { title: '分析', icon: 'el-icon-user' }
      },
      {
        path: 'statistics',
        name: 'statistics',
        component: () => import('@/views/data-center/task-record/statistics.vue'),
        meta: { title: '统计', icon: 'el-icon-user' }
      },
      {
        path: 'details',
        name: 'task-details',
        hidden: true,
        component: () => import('@/views/data-center/task-record/task-details.vue'),
        meta: { title: '任务详情', icon: 'el-icon-user', activeMenu: '/task-record/analysis' }
      }
    ]
  },
  {
    path: '/task-assessment',
    meta: { title: '任务考核', icon: 'el-icon-user' },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'index',
        name: 'task-assessment',
        component: () => import('@/views/data-center/task-assessment/index.vue'),
        meta: { title: '任务考核', icon: 'el-icon-user' }
      }
    ]
  },
  {
    path: '/alarm-log',
    meta: { title: '告警记录', icon: 'el-icon-user' },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'fence',
        name: 'fence-record',
        component: () => import('@/views/data-center/alarm-log/fence-record.vue'),
        meta: { title: '围栏', icon: 'el-icon-user' }
      },
      {
        path: 'task',
        name: 'task-record',
        component: () => import('@/views/data-center/alarm-log/task-record.vue'),
        meta: { title: '任务', icon: 'el-icon-user' }
      },
      {
        path: 'event',
        name: 'event-record',
        component: () => import('@/views/data-center/alarm-log/event-record.vue'),
        meta: { title: '任务', icon: 'el-icon-user' }
      }
    ]
  },
  {
    path: '/track',
    meta: { title: '轨迹记录', icon: 'el-icon-user' },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'track',
        name: 'track-record',
        component: () => import('@/views/data-center/track-record/index.vue'),
        meta: { title: '轨迹记录', icon: 'el-icon-user' }
      }
    ]
  },
  {
    path: '/video-record',
    meta: { title: '视频监控', icon: 'el-icon-user' },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'reading',
        name: 'reading',
        component: () => import('@/views/data-center/video-record/reading.vue'),
        meta: { title: '调看', icon: 'el-icon-user' }
      },
      {
        path: 'transmit',
        name: 'transmit',
        component: () => import('@/views/data-center/video-record/transmit.vue'),
        meta: { title: '回传', icon: 'el-icon-user' }
      }
    ]
  },
  {
    path: '/storage',
    meta: { title: '存储空间', icon: 'el-icon-user' },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'space',
        name: 'storage-space',
        component: () => import('@/views/data-center/storage-space/index.vue'),
        meta: { title: '存储空间', icon: 'el-icon-user' }
      }
    ]
  }
]

export default dataRoutes
