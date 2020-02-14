import Layout from '../../layout/index'

// 任务管理

const taskRoutes = [
  {
    path: '/create',
    meta: { title: '创建任务', icon: 'icon-nav-list' },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'daily-tasks',
        name: 'create-daily-tasks',
        component: () => import('@/views/task-management/create-tasks/create-daily-tasks.vue'),
        meta: { title: '创建日常任务' }
      },
      {
        path: 'temporary-task',
        name: 'create-temporary-task',
        component: () => import('@/views/task-management/create-tasks/create-temporary-task.vue'),
        meta: { title: '创建临时任务' }
      }
    ]
  },
  {
    path: '/list',
    meta: { title: '任务列表', icon: 'icon-category' },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'daily-tasks',
        name: 'list-daily-tasks',
        component: () => import('@/views/task-management/task-list/daily-tasks.vue'),
        meta: { title: '日常任务' }
      },
      {
        path: 'temporary-task',
        name: 'list-temporary-task',
        component: () => import('@/views/task-management/task-list/temporary-task.vue'),
        meta: { title: '临时任务' }
      }
    ]
  },
  {
    path: '/assignment',
    meta: { title: '任务指派', icon: 'icon-aviation' },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'task-template-library',
        name: 'task-template-library',
        component: () => import('@/views/task-management/task-assignment/task-template-library.vue'),
        meta: { title: '任务模板库' }
      },
      {
        path: 'create-task-template',
        name: 'create-task-template',
        component: () => import('@/views/task-management/task-assignment/create-task-template.vue'),
        meta: { title: '创建任务模板' }
      }
    ]
  },
  {
    path: '/watermark',
    meta: { title: '水印管理', icon: 'icon-text' },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: 'management',
        name: 'watermark-management',
        component: () => import('@/views/task-management/watermark-management.vue'),
        meta: { title: '水印管理' }
      }
    ]
  },
]

export default taskRoutes
