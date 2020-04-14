import { firebase } from '@firebase/app'
import '@firebase/auth'

import { LOGIN_USER, SET_USER, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS } from '../constants'
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
    console.log(email, password)
    commit(LOGIN_USER)
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(user => {
            commit(LOGIN_USER_SUCCESS, user)
          })
          .catch(err => {
            commit(LOGIN_USER_FAILURE, err)
          })
      })
  },
  setUser: ({ commit }) => {
    commit(LOGIN_USER)
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        commit(LOGIN_USER_SUCCESS, user)
      }
    })
  }
}

const mutations = {
  [LOGIN_USER]: state => (state.isLoading = true),

  [SET_USER]: (state, user) => (state.user = user),

  [LOGIN_USER_SUCCESS]: (state, user) => {
    state.user = user
    state.isLoading = false
    router.push('/dashboard')
  },

  [LOGIN_USER_FAILURE]: (state, error) => {
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
