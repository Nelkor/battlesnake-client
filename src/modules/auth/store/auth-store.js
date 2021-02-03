import { get } from '@net/http'

export default {
  namespaced: true,
  state: {
    isAuthChecked: false,
    id: null,
    name: null,
  },
  mutations: {
    setAuthChecked(state) {
      state.isAuthChecked = true
    },
    setUser(state, { id, name }) {
      state.id = id
      state.name = name
    },
  },
  actions: {
    async checkAuth(ctx) {
      const [error, data] = await get('auth/whoami')

      if (error) {
        console.error(error)

        return
      }

      const { id, name } = data

      ctx.commit('setAuthChecked')

      if (!id) {
        return
      }

      ctx.commit('setUser', { id, name })
    },
  },
}
