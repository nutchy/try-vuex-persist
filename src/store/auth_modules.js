import { doLogin, calculateExpiredAt } from "../utils"

const defaultState = () => ({
  accessToken: '',
  refreshToken: '',
  expiresAt: ''
})

export default {
  namespaced: true,
  state: {...defaultState()},
  actions: {
    async login({ commit }) {
      const { accessToken, refreshToken, expiredIn } = await doLogin()
      const expiresAt = calculateExpiredAt(expiredIn)
      console.log( { accessToken, refreshToken, expiresAt });
      commit('setState', { accessToken, refreshToken, expiresAt })
    }
  },
  mutations: {
    setState(state, payload) {
      for(const key in payload) {
        if (payload.hasOwnProperty(key)) {
          state[key] = payload[key]
        }
      }
    }
  },
  getters: {
    isLoggedIn({ expiresAt }) {
      const expiredAtStr = expiresAt + ''
      if (!expiredAtStr) return false
      return new Date().getTime() < expiresAt
    }
  }
}