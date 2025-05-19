import { createRouter, createWebHashHistory } from 'vue-router'

import Layout from '@/layout/index.vue'

const routes = [
  {
    path: '/',
    redirect: 'welcome'
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: () => import('@/views/welcome/index.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: Layout,
    redirect: 'repeat',
    children: [
      {
        path: '/repeat',
        name: 'repeat',
        component: () => import('@/views/repeat/index.vue')
      },
      {
        path: '/empty',
        name: 'empty',
        component: () => import('@/views/empty/index.vue')
      },
      {
        path: '/score',
        name: 'score',
        component: () => import('@/views/score/index.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/about/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
