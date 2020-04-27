import { db } from '../../firebase/init'
import { FETCH_LOCATIONS, FETCH_LOCATIONS_SUCCESS, FETCH_LOCATIONS_FAILURE } from '../constants'
import router from '../../router'

const state = {
  locations: [],
  isLoading: false,
  error: false
}

const getters = {
  allLocations: () => state.locations,
  isLoadingLocations: () => state.isLoading,
  loactionsError: () => state.error
}

const actions = {
  fetchLocations: ({ commit }) => {
    commit(FETCH_LOCATIONS)
    db.collection('locations')
      .orderBy('order', 'asc')
      .get()
      .then(snapshot => {
        const locations = []

        snapshot.forEach(doc => {
          locations.push({ id: doc.ref.id, ...doc.data() })
        })
        commit(FETCH_LOCATIONS_SUCCESS, locations)
      })
      .catch(error => commit(FETCH_LOCATIONS_FAILURE, error))
  }
}

const mutations = {
  [FETCH_LOCATIONS]: state => {
    state.isLoading = true
    state.error = null
  },

  [FETCH_LOCATIONS_SUCCESS]: (state, locations) => {
    state.locations = locations
    state.isLoading = false
  },

  [FETCH_LOCATIONS_FAILURE]: (state, error) => {
    state.locations = null
    router.push('/error')
    console.error(error)
    state.error = error
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
