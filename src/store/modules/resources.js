import db from '../../firebase/init'
import { FETCH_RESOURCES, FETCH_RESOURCES_SUCCESS, FETCH_RESOURCES_FAILURE } from '../constants'

const state = {
  resources: [],
  isLoading: false,
  error: false
}

const getters = {
  allResources: () => state.resources,
  isLoadingResources: () => state.isLoading,
  resourcesError: () => state.error
}

const actions = {
  fetchResources: ({ commit }) => {
    commit(FETCH_RESOURCES)
    db.collection('resources')
      .where('approved', '==', true)
      .orderBy('created_at', 'desc')
      .get()
      .then(snapshot => {
        const resources = []
        snapshot.forEach(doc => {
          resources.push({ id: doc.ref.id, ...doc.data() })
        })
        commit(FETCH_RESOURCES_SUCCESS, resources)
      })
      .catch(error => commit(FETCH_RESOURCES_FAILURE, error))
  }
}

const mutations = {
  [FETCH_RESOURCES]: state => (state.isLoading = true),

  [FETCH_RESOURCES_SUCCESS]: (state, resources) => {
    state.resources = resources
    state.isLoadingResources = false
  },

  [FETCH_RESOURCES_FAILURE]: (state, error) => {
    state.isLoadingResources = false
    console.error(error)
    state.resourcesError = error
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
