import { db } from '../../firebase/init'
import { FETCH_TAGS, FETCH_TAGS_SUCCESS, FETCH_TAGS_FAILURE } from '../constants'

const state = {
  tags: [],
  isLoading: false,
  error: false
}

const getters = {
  allTags: () => state.tags,
  isLoadingTags: () => state.isLoading,
  tagsError: () => state.error
}

const actions = {
  fetchTags: ({ commit }) => {
    commit(FETCH_TAGS)
    db.collection('tags')
      .orderBy('order', 'asc')
      .get()
      .then(snapshot => {
        const categories = []

        snapshot.forEach(doc => {
          categories.push({ id: doc.ref.id, ...doc.data() })
        })
        commit(FETCH_TAGS_SUCCESS, categories)
      })
      .catch(error => commit(FETCH_TAGS_FAILURE, error))
  }
}

const mutations = {
  [FETCH_TAGS]: state => {
    state.isLoading = true
    state.error = null
  },

  [FETCH_TAGS_SUCCESS]: (state, categories) => {
    state.tags = categories
    state.isLoading = false
  },

  [FETCH_TAGS_FAILURE]: (state, error) => {
    state.tags = false
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
