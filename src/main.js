import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import router from './router'
import store from './store'

import firebase from 'firebase'

let app
firebase.auth().onAuthStateChanged(function () {
  if (!app) {
    app = new Vue({
      router,
      vuetify,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
