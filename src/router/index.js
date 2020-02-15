import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/index.vue'

Vue.use(Router)

import intercomRoutes from './modules/intercom'
import dataRoutes from './modules/data'
import locationRoutes from './modules/location'
import notificationRoutes from './modules/notification'
import taskRoutes from './modules/task'
import alarmRoutes from './modules/alarm'
import surveillanceRoutes from './modules/surveillance'
import systemRoutes from './modules/system'

const createRouter = () => new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/start/login')
    },
    {
      path: '/systemic-selection',
      name: 'SystemicSelection',
      component: () => import('@/views/start/systemic-selection')
    },
    ...intercomRoutes,
    ...dataRoutes,
    ...locationRoutes,
    ...notificationRoutes,
    ...taskRoutes,
    ...alarmRoutes,
    ...surveillanceRoutes,
    ...systemRoutes
  ]
})

const router = createRouter()

export default router
