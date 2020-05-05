import { SET_TAGS, SET_LOCATION } from '../constants'

const state = {
  appliedTags: [],
  appliedLocation: null
}

const getters = {
  appliedTags: () => state.appliedTags,
  appliedLocation: () => state.appliedLocation
}

const actions = {
  setTags: ({ commit }, tags) => {
    commit(SET_TAGS, tags)
  },
  setLocation: ({ commit }, location) => {
    commit(SET_LOCATION, location)
  }
}

const mutations = {
  [SET_TAGS]: (state, tags) => {
    state.appliedTags = tags
  },
  [SET_LOCATION]: (state, location) => {
    state.appliedLocation = location
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
