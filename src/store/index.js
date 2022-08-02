import { createStore } from 'vuex'

export default createStore({
  state: {
    isShow: true
  },
  getters: {
  },
  mutations: {
    show(state) {
      state.isShow = true
    },
    hide(state) {
      state.isShow = false
    },
  },
  actions: {
  },
  modules: {
  }
})
