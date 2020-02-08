import Layout from '../../layout/index'

// 通知中心

const notificationRoutes = [
  {
    path: '/voice',
    meta: { title: '语音通知', icon: 'el-icon-user' },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'notification',
        name: 'voice-notification',
        component: () => import('@/views/notification-center/voice-notification.vue'),
        meta: { title: '语音通知', icon: 'el-icon-user' }
      }
    ]
  },
  {
    path: '/graphic',
    meta: { title: '图文通知', icon: 'el-icon-user' },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'notification',
        name: 'graphic-notification',
        component: () => import('@/views/notification-center/graphic-notification.vue'),
        meta: { title: '图文通知', icon: 'el-icon-user' }
      }
    ]
  },
  {
    path: '/document',
    meta: { title: '文档下发', icon: 'el-icon-user' },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'issuance',
        name: 'document-issuance',
        component: () => import('@/views/notification-center/document-issuance.vue'),
        meta: { title: '文档下发', icon: 'el-icon-user' }
      }
    ]
  }
]

export default notificationRoutes
