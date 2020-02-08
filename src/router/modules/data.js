import Layout from '@/layout/index'

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
        meta: {  title: '分析', icon: 'el-icon-user' }
      },
      {
        path: 'statistics',
        name: 'statistics',
        component: () => import('@/views/data-center/task-record/statistics.vue'),
        meta: {  title: '统计', icon: 'el-icon-user' }
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
        component: () => import('@/views/data-center/task-assessment.vue'),
        meta: {  title: '任务考核', icon: 'el-icon-user' }
      }
    ]
  }
]

export default dataRoutes