import Layout from '../../layout/index'

// 系统管理

const systemRoutes = [
  {
    path: '/privilege',
    meta: { title: '权限管理', icon: 'icon-unlock' },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'management',
        name: 'privilege-management',
        component: () => import('@/views/system-setting/privilege-management.vue'),
        meta: { title: '权限管理', icon: 'icon-unlock' }
      }
    ]
  },
  {
    path: '/device',
    meta: { title: '设备管理', icon: 'icon-manage-order' },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'management',
        name: 'device-management',
        component: () => import('@/views/system-setting/device-management.vue'),
        meta: { title: '设备管理', icon: 'icon-manage-order' }
      }
    ]
  }
]

export default systemRoutes
