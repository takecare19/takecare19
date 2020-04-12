import Vuex from 'vuex'
import Vue from 'vue'
import categories from './modules/categories'
import resources from './modules/resources'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    categories,
    resources
  }
})
