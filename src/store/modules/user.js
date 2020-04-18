import { firebase } from '@firebase/app'
import '@firebase/auth'

import {
  LOGIN_USER,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
  LOGOUT_USER_SUCCESS
} from '../constants'
import router from '../../router'

let currentUser

const state = {
  user: currentUser,
  isLoading: false,
  error: false
}

const getters = {
  user: () => state.user,
  isLoadingUser: () => state.isLoading,
  userError: () => state.error
}

const actions = {
  login: ({ commit }, { email, password }) => {
    commit(LOGIN_USER)
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        commit(LOGIN_USER_SUCCESS, user)
      })
      .catch(err => {
        commit(LOGIN_USER_FAILURE, err)
      })
  },
  logout: ({ commit }) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        commit(LOGOUT_USER_SUCCESS)
        this.$router.push('/admin/login')
      })
  }
}

const mutations = {
  [LOGIN_USER]: state => {
    state.isLoading = true
    state.error = null
  },

  SET_USER: (state, user) => (state.user = user),

  [LOGIN_USER_SUCCESS]: (state, user) => {
    state.user = user
    state.isLoading = false
    router.go({ path: router.path })
  },

  [LOGIN_USER_FAILURE]: (state, error) => {
    state.isLoading = false
    console.error(error)
    state.error = error
  },

  [LOGOUT_USER_SUCCESS]: state => {
    state.isLoading = false
    state.user = null
    router.go({ path: '/admin/login' })
  },

  [LOGOUT_USER_FAILURE]: (state, error) => {
    state.isLoading = false
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
