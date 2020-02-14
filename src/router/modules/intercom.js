import Layout from '../../layout/index'

// 和对讲

const intercomRoutes = [
  {
    path: '/department',
    meta: { title: '部门成员', icon: 'icon-bumenchengyuan' },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'manage',
        name: 'department-manage',
        component: () => import('@/views/intercom-center/department-manage.vue'),
        meta: { title: '部门成员', icon: 'icon-bumenchengyuan' }
      }
    ]
  },
  {
    path: '/group',
    meta: { title: '群组会话', icon: 'icon-comments' },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'intercom',
        name: 'group-intercom',
        component: () => import('@/views/intercom-center/group-intercom.vue'),
        meta: { title: '群组会话', icon: 'icon-comments' }
      }
    ]
  },
  {
    path: '/video',
    meta: { title: '可视对讲', icon: 'icon-process' },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'intercom',
        name: 'video-intercom',
        component: () => import('@/views/intercom-center/video-intercom.vue'),
        meta: { title: '可视对讲', icon: 'icon-process' }
      }
    ]
  }
]

export default intercomRoutes

// export default intercomRoutes
