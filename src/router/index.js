import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../pages/Main.vue'
import About from '../pages/About.vue'
import Submit from '../pages/Submit.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Main },
  { path: '/About', component: About },
  { path: '/Submit', component: Submit }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
