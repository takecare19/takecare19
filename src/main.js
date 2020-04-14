import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import router from './router'
import store from './store'
import { SET_USER } from './store/constants'

import { firebase } from '@firebase/app'
import '@firebase/auth'

let app
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    store.commit(SET_USER, user)
  }
  if (!app) {
    app = new Vue({
      router,
      vuetify,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
