export default {
  namespaced: true,
  state: {
    isAppAsideOpen: false,
  },
  mutations: {
    setAppAsideOpen(state, value) {
      state.isAppAsideOpen = value
    },
  },
}
