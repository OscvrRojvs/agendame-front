import Vue from 'vue'
import VueRouter from 'vue-router'
import MainLayout from '../layout/MainLayout.vue'
import { Auth } from '../auth/router'

Vue.use(VueRouter)

const routes = [
  ...Auth,
  {
    path: '/main-layout',
    name: 'MainLayout',
    component: MainLayout,
    children: [
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
