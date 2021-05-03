import { createStore } from 'vuex'

export default createStore({
  state: {
    signup: false,
    login: false
  },
  mutations: {
    signUpModal (state, newState){
      state.signup = newState
    },
    loginModal (state, newState){
      state.login = newState
    }
  },
  actions: {
  },
  modules: {
  }
})