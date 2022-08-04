import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import('../views/AboutView.vue')
    }
  },
  {
    path: '/1',
    name: '1',
    component: function () {
      return import('../views/1.vue')
    }
  },
  {
    path: '/2',
    name: '2',
    component: function () {
      return import('../views/2.vue')
    }
  },
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import('../views/login.vue')
    }
  },
  {
    path: '/teamManagement',
    name: 'teamManagement',
    meta: { isRouterAuth: true },
    component: function () {
      return import('../views/teamManagement.vue')
    }
  },
  {
    path: '/invite',
    name: 'invite',
    component: function () {
      return import('../views/invite.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
