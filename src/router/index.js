import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/index.vue'

Vue.use(Router)

import intercomRoutes from './modules/intercom'
import dataRoutes from './modules/data'
import locationRoutes from './modules/location'
import notificationRoutes from './modules/notification'

export const mainRoutes = [
  {
    path: '/test',
    name: 'Test',
    component: Layout
  }
]

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
    ...mainRoutes,
    ...intercomRoutes,
    ...dataRoutes,
    ...locationRoutes,
    ...notificationRoutes
  ]
})

const router = createRouter()

export default router
