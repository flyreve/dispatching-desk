import Layout from '../../layout/index'

// 通知中心

const notificationRoutes = [
  {
    path: '/voice',
    meta: { title: '语音通知', icon: 'icon-microphone' },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'notification',
        name: 'voice-notification',
        component: () => import('@/views/notification-center/voice-notification.vue'),
        meta: { title: '语音通知', icon: 'icon-microphone' }
      }
    ]
  },
  {
    path: '/graphic',
    meta: { title: '图文通知', icon: 'icon-shuffling-banner' },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'notification',
        name: 'graphic-notification',
        component: () => import('@/views/notification-center/graphic-notification.vue'),
        meta: { title: '图文通知', icon: 'icon-shuffling-banner' }
      }
    ]
  },
  {
    path: '/document',
    meta: { title: '文档下发', icon: 'icon-folder' },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'issuance',
        name: 'document-issuance',
        component: () => import('@/views/notification-center/document-issuance.vue'),
        meta: { title: '文档下发', icon: 'icon-folder' }
      }
    ]
  }
]

export default notificationRoutes
