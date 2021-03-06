import { db } from '../../firebase/init'
import {
  FETCH_CATEGORIES,
  SET_SELECTED_CATEGORY,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE
} from '../constants'
import router from '../../router'

const state = {
  categories: [],
  selectedCategory: { id: 'All' },
  isLoading: false,
  error: false
}

const getters = {
  allCategories: () => state.categories,
  isLoadingCategories: () => state.isLoading,
  selectedCategory: () => state.selectedCategory,
  categoriesError: () => state.error
}

const actions = {
  fetchCategories: ({ commit }) => {
    commit(FETCH_CATEGORIES)
    db.collection('categories')
      .orderBy('order', 'asc')
      .get()
      .then(snapshot => {
        const categories = []

        snapshot.forEach(doc => {
          categories.push({ id: doc.ref.id, ...doc.data() })
        })
        commit(FETCH_CATEGORIES_SUCCESS, categories)
      })
      .catch(error => commit(FETCH_CATEGORIES_FAILURE, error))
  },
  selectCategory: ({ commit, dispatch, rootState }, categoryId) => {
    commit(SET_SELECTED_CATEGORY, categoryId)
    dispatch('fetchResources', {
      categoryId,
      tags: rootState.filters.appliedTags,
      location: rootState.filters.appliedLocation
    })
  }
}

const mutations = {
  [FETCH_CATEGORIES]: state => {
    state.isLoading = true
    state.error = null
  },

  [FETCH_CATEGORIES_SUCCESS]: (state, categories) => {
    state.categories = categories
    state.isLoading = false
  },

  [FETCH_CATEGORIES_FAILURE]: (state, error) => {
    state.isLoading = false
    console.error(error)
    router.push('/error')
    state.error = error
  },

  [SET_SELECTED_CATEGORY]: (state, categoryId) => {
    state.selectedCategory = state.categories.find(category => category.id === categoryId)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
