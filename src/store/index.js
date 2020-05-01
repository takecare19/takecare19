import Vuex from 'vuex'
import Vue from 'vue'
import categories from './modules/categories'
import resources from './modules/resources'
import user from './modules/user'
import tags from './modules/tags'
import locations from './modules/locations'
import filters from './modules/filters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    categories,
    resources,
    user,
    tags,
    locations,
    filters
  }
})
