import Vue from 'vue'
import VueRouter from 'vue-router'
import { firebase } from '@firebase/app'
import '@firebase/auth'

import Main from '../pages/Main.vue'
import About from '../pages/About.vue'
import Submit from '../pages/Submit.vue'
import Admin from '../pages/admin/Index.vue'
import AdminLogin from '../pages/admin/Login.vue'
import AdminDashboard from '../pages/admin/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Main },
  { path: '/about', component: About },
  { path: '/submit', component: Submit },
  {
    path: '/admin',
    redirect: '/admin/login',
    component: Admin,
    children: [
      {
        path: 'login',
        component: AdminLogin,
        meta: {
          requiresGuest: true
        }
      },
      {
        path: 'dashboard',
        component: AdminDashboard,
        meta: {
          requiresAuth: true
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  // Check for requiresAuth guard
  console.log(to)
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if NO logged user
    if (!firebase.auth().currentUser) {
      // Go to login
      next({
        path: '/admin/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      // Proceed to route
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    // Check if NO logged user
    if (firebase.auth().currentUser) {
      // Go to login
      next({
        path: '/admin/dashboard',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      // Proceed to route
      next()
    }
  } else {
    // Proceed to route
    next()
  }
})

export default router
