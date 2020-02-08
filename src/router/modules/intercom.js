import Layout from '@/layout/index.vue'

// 和对讲

const intercomRoutes  =  [
  {
    path: '/department',
    meta: { title: '部门成员', icon: 'el-icon-user' },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'manage',
        name: 'department-manage',
        component: () => import('@/views/intercom-center/department-manage.vue'),
        meta: {  title: '部门成员', icon: 'el-icon-user' }
      }
    ]
  },
  {
    path: '/group',
    meta: { title: '群组会话', icon: 'el-icon-user' },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'intercom',
        name: 'group-intercom',
        component: () => import('@/views/intercom-center/group-intercom.vue'),
        meta: {  title: '群组会话', icon: 'el-icon-user' }
      }
    ]
  },
  {
    path: '/video',
    meta: { title: '视频对讲', icon: 'el-icon-user' },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'intercom',
        name: 'video-intercom',
        component: () => import('@/views/intercom-center/video-intercom.vue'),
        meta: {  title: '视频对讲', icon: 'el-icon-user' }
      }
    ]
  }
]

export default intercomRoutes

// export default intercomRoutes