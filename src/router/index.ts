import { createRouter, createWebHistory, RouteRecordRaw, NavigationGuard } from 'vue-router'
import Welcome from '@/views/Welcome.vue'
import Chatroom from '@/views/Chatroom.vue'
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
    next({ name: 'Chatroom' })
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
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
