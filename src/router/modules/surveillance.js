import Layout from '../../layout/index'

// 视频监控

const surveillanceRoutes = [
  {
    path: '/video',
    meta: { title: '视频监控', icon: 'el-icon-user' },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'surveillance',
        name: 'video-surveillance',
        hidden: true,
        component: () => import('@/views/video-surveillance/index.vue'),
        meta: { title: '视频监控', icon: 'el-icon-user' }
      },
      {
        path: 'surveillance1',
        name: 'video-surveillance1',
        hidden: false,
        component: () => import('@/views/video-surveillance/index.vue'),
        meta: { title: '视频监控1', icon: 'el-icon-user' }
      }
    ]
  }
]

export default surveillanceRoutes
