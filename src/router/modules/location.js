import Layout from '../../layout/index'

// 位置管理

const locationRoutes = [
  {
    path: '/monitor',
    meta: { title: '监控成员', icon: 'icon-browse' },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'member',
        name: 'monitor-member',
        component: () => import('@/views/location-manage/monitor-member.vue'),
        meta: { title: '监控成员', icon: 'icon-browse' }
      }
    ]
  },
  {
    path: '/track',
    meta: { title: '轨迹回放', icon: 'icon-salescenter' },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'playback',
        name: 'track-playback',
        component: () => import('@/views/location-manage/track-playback.vue'),
        meta: { title: '轨迹回放', icon: 'icon-salescenter' }
      }
    ]
  },
  {
    path: '/electronic',
    meta: { title: '电子围栏', icon: 'icon-stop' },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'fence',
        name: 'electronic-fence',
        component: () => import('@/views/location-manage/electronic-fence.vue'),
        meta: { title: '电子围栏', icon: 'icon-stop' }
      }
    ]
  },
   {
    path: '/task',
    meta: { title: '任务区域', icon: 'icon-viewgallery' },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'area',
        name: 'task-area',
        component: () => import('@/views/location-manage/task-area.vue'),
        meta: { title: '任务区域', icon: 'icon-viewgallery' }
      }
    ]
  },
   {
    path: '/map',
    meta: { title: '地图图层', icon: 'icon-integral1' },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'layer',
        name: 'map-layer',
        component: () => import('@/views/location-manage/map-layer.vue'),
        meta: { title: '地图图层', icon: 'icon-integral1' }
      }
    ]
  },

]

export default locationRoutes
