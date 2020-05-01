import { SET_TAGS } from '../constants'

const state = {
  appliedTags: []
}

const getters = {
  appliedTags: () => state.appliedTags
}

const actions = {
  setTags: ({ commit }, tags) => {
    commit(SET_TAGS, tags)
  }
}

const mutations = {
  [SET_TAGS]: (state, tags) => {
    state.appliedTags = tags
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
