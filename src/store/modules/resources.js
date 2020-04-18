import { db } from '../../firebase/init'
import {
  FETCH_RESOURCES,
  FETCH_RESOURCES_SUCCESS,
  FETCH_RESOURCES_FAILURE,
  POST_RESOURCE,
  POST_RESOURCE_SUCCESS,
  POST_RESOURCE_FAILURE
} from '../constants'

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
  },
  postResource: ({ commit }, resource) => {
    commit(POST_RESOURCE)
    db.collection('resources')
      .add(resource)
      .then(res => commit(POST_RESOURCE_SUCCESS, res))
      .catch(err => commit(POST_RESOURCE_FAILURE, err))
  }
}

const mutations = {
  [FETCH_RESOURCES]: state => {
    state.isLoading = true
    state.error = null
  },

  [FETCH_RESOURCES_SUCCESS]: (state, resources) => {
    state.isLoading = false
    state.resources = resources
  },

  [FETCH_RESOURCES_FAILURE]: (state, error) => {
    state.isLoading = false
    state.error = error
    console.error(error)
  },

  [POST_RESOURCE]: state => {
    state.isLoading = true
    state.error = null
  },

  [POST_RESOURCE_SUCCESS]: (state, resource) => {
    state.isLoading = false
    console.log('Resource successfully submitted with id ' + resource.id)
  },

  [POST_RESOURCE_FAILURE]: (state, error) => {
    state.isLoading = false
    state.error = error
    console.error(error)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
