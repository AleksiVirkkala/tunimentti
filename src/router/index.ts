import { createRouter, createWebHistory, RouteRecordRaw, NavigationGuard } from 'vue-router'
import Welcome from '@/views/Welcome.vue'
import Auction from '@/views/Auction.vue'
import { projectAuth } from '@/firebase/config'

// auth guard
const requireAuth: NavigationGuard = (to, from, next) => {
  const user = projectAuth.currentUser
  if (!user) {
    next({ name: 'Welcome' })
  }
  next()
}

const requireNoAuth: NavigationGuard = (to, from, next) => {
  const user = projectAuth.currentUser
  if (user) {
    next({ name: 'Auction' })
  }
  next()
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: requireNoAuth
  },
  {
    path: '/Auction',
    name: 'Auction',
    component: Auction,
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
