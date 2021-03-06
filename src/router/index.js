import Vue from 'vue'
import VueRouter from 'vue-router'
import { firebase } from '@firebase/app'
import '@firebase/auth'

import Main from '../pages/Main.vue'
import About from '../pages/About.vue'
import ErrorPage from '../pages/Error.vue'
import Admin from '../pages/admin/Index.vue'
import AdminLogin from '../pages/admin/Login.vue'
import AdminDashboard from '../pages/admin/Dashboard.vue'
import NewResource from '../pages/admin/NewResource.vue'
import EditResource from '../pages/admin/EditResource.vue'
import Page404 from '../pages/404.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Main },
  { path: '/about', component: About },
  { path: '/error', component: ErrorPage },
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
      },
      {
        path: 'new',
        component: NewResource,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'edit/:id',
        component: EditResource,
        meta: {
          requiresAuth: true
        }
      }
    ]
  },
  {
    path: '*',
    component: Page404
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!firebase.auth().currentUser) {
      next({
        path: '/admin/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (firebase.auth().currentUser) {
      next({
        path: '/admin/dashboard',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
