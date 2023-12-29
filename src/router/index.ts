// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
    name: 'Home'
  },
  {
    path: '/hello',
    component: () => import('@/components/HelloWorld.vue'),
    name: 'Hello',
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
