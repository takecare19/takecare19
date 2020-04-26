import { db } from '../../firebase/init'
import {
  FETCH_RESOURCES,
  FETCH_RESOURCES_SUCCESS,
  FETCH_RESOURCES_FAILURE,
  POST_RESOURCE,
  POST_RESOURCE_SUCCESS,
  POST_RESOURCE_FAILURE,
  DELETE_RESOURCE,
  DELETE_RESOURCE_SUCCESS,
  DELETE_RESOURCE_FAILURE,
  UPDATE_RESOURCE,
  UPDATE_RESOURCE_SUCCESS,
  UPDATE_RESOURCE_FAILURE,
  PAGE_SIZE
} from '../constants'
import router from '../../router'

const state = {
  resources: [],
  isLoading: false,
  error: false,
  lastResource: false
}

const getters = {
  allResources: () => state.resources,
  singleResource: () => id => {
    return state.resources.find(resource => resource.id === id)
  },
  isLoadingResources: () => state.isLoading,
  resourcesError: () => state.error
}

const actions = {
  fetchResources: ({ commit }, categoryId) => {
    commit(FETCH_RESOURCES)
    let request

    console.log(state.lastResource)

    if (categoryId && categoryId !== 'All') {
      request = db
        .collection('resources')
        .where('approved', '==', true)
        .where('categoryId', '==', categoryId)
        .orderBy('created_at', 'desc')
        .limit(PAGE_SIZE)
        .get()
    } else {
      request = db
        .collection('resources')
        .where('approved', '==', true)
        .orderBy('created_at', 'desc')
        .limit(PAGE_SIZE)
        .get()
    }

    request
      .then(snapshot => {
        const lastVisible = snapshot.docs[snapshot.docs.length - 1]

        const resources = []
        snapshot.forEach(doc => {
          resources.push({ id: doc.ref.id, ...doc.data() })
        })
        commit(FETCH_RESOURCES_SUCCESS, { resources, lastVisible })
      })
      .catch(error => commit(FETCH_RESOURCES_FAILURE, error))
  },
  fetchMore: ({ commit }, categoryId) => {
    db.collection('resources')
      .where('approved', '==', true)
      .where('categoryId', '==', categoryId)
      .orderBy('created_at', 'desc')
      .limit(PAGE_SIZE)
      .startAfter(state.lastResource)
      .get()
      .then(snapshot => {
        const lastVisible = snapshot.docs[snapshot.docs.length - 1]

        const resources = []
        snapshot.forEach(doc => {
          resources.push({ id: doc.ref.id, ...doc.data() })
        })
        commit('FETCH_MORE_SUCCESS', { resources, lastVisible })
      })
      .catch(error => commit(FETCH_RESOURCES_FAILURE, error))
  },
  postResource: ({ commit }, resource) => {
    commit(POST_RESOURCE)
    db.collection('resources')
      .add(resource)
      .then(res => commit(POST_RESOURCE_SUCCESS, res))
      .catch(err => commit(POST_RESOURCE_FAILURE, err))
  },
  deleteResource: ({ commit, dispatch }, resource) => {
    commit(DELETE_RESOURCE)
    db.collection('resources')
      .doc(resource)
      .delete()
      .then(() => {
        commit(DELETE_RESOURCE_SUCCESS, resource)
        dispatch('fetchResources')
      })
      .catch(err => commit(DELETE_RESOURCE_FAILURE, err))
  },
  updateResource: ({ commit, dispatch }, { id, resource }) => {
    commit(UPDATE_RESOURCE)
    db.collection('resources')
      .doc(id)
      .set(resource, { merge: true })
      .then(() => {
        commit(UPDATE_RESOURCE_SUCCESS, id)
        dispatch('fetchResources')
      })
      .catch(err => commit(UPDATE_RESOURCE_FAILURE, err))
  }
}

const mutations = {
  [FETCH_RESOURCES]: state => {
    state.lastResource = null
    state.isLoading = true
    state.error = null
  },

  [FETCH_RESOURCES_SUCCESS]: (state, { resources, lastVisible }) => {
    state.isLoading = false
    state.resources = resources
    state.lastResource = lastVisible
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
    router.push('/admin/dashboard')
  },

  [POST_RESOURCE_FAILURE]: (state, error) => {
    state.isLoading = false
    state.error = error
    console.error(error)
  },

  [DELETE_RESOURCE]: state => {
    state.isLoading = true
    state.error = null
  },

  [DELETE_RESOURCE_SUCCESS]: (state, resource) => {
    state.isLoading = false
    console.log('Resource successfully deleted with id ' + resource.id)
  },

  [DELETE_RESOURCE_FAILURE]: (state, error) => {
    state.isLoading = false
    state.error = error
    console.error(error)
  },

  [UPDATE_RESOURCE]: state => {
    state.isLoading = true
    state.error = null
  },

  [UPDATE_RESOURCE_SUCCESS]: (state, resource) => {
    state.isLoading = false
    console.log('Resource successfully update with id ' + resource)
    router.push('/admin/dashboard')
  },

  [UPDATE_RESOURCE_FAILURE]: (state, error) => {
    state.isLoading = false
    state.error = error
    console.error(error)
  },

  RESET_PAGINATION: state => {
    state.lastResource = null
  },

  FETCH_MORE_SUCCESS: (state, { resources, lastVisible }) => {
    state.isLoading = false
    state.resources = state.resources.concat(resources)
    state.lastResource = lastVisible
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
