import { createRouter, createWebHistory, RouteRecordRaw, NavigationGuard } from 'vue-router'
import Details from '@/views/Details.vue'
import Auction from '@/views/Auction.vue'
import Leaderboards from '@/views/Leaderboards.vue'
import { projectAuth } from '@/firebase/config'

// auth guard
const requireAuth: NavigationGuard = (to, from, next) => {
  const user = projectAuth.currentUser
  if (!user) {
    next({ name: 'Auth' })
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
  // {
  //   path: '/auth',
  //   name: 'Auth',
  //   component: Details,
  //   beforeEnter: requireNoAuth
  // },
  {
    path: '/',
    redirect: '/details'
  },
  {
    path: '/auction',
    name: 'Auction',
    component: Auction,
  },
  {
    path: '/details',
    name: 'Details',
    component: Details,
  },
  {
    path: '/leaderboards',
    name: 'Leaderboards',
    component: Leaderboards
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
