import { get, post } from '@net/http'

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

      ctx.commit('setAuthChecked')

      if (!data.id) {
        return
      }

      ctx.commit('setUser', data)
    },
    async logIn(ctx, { name, password }) {
      const params = { body: { name, password } }

      const [error, data] = await post('auth/log-in', params)

      if (error) {
        console.error(error)

        return
      }

      ctx.commit('setUser', data)
    },
    async reg(ctx, { name, password }) {
      const params = { body: { name, password } }

      const [error, data] = await post('auth/reg', params)

      if (error) {
        console.error(error)

        return
      }

      ctx.commit('setUser', data)
    },
  },
}
