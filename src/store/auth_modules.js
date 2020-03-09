import { doLogin, calculateExpiredAt } from "../utils"

const defaultState = () => ({
  accessToken: '',
  refreshToken: '',
  expiresAt: '',
  email: ''
})

export default {
  namespaced: true,
  state: {...defaultState()},
  actions: {
    async login({ commit }, { email }) {
      // const { accessToken, refreshToken, expiredIn } = await doLogin()
      // const expiresAt = calculateExpiredAt(expiredIn)
      // console.log( { accessToken, refreshToken, expiresAt });
      // commit('setState', { accessToken, refreshToken, expiresAt })
      commit('setState', { email })
    }
  },
  mutations: {
    setState(state, payload) {
      for(const key in payload) {
        if (payload.hasOwnProperty(key)) {
          state[key] = payload[key]
        }
      }
    },
    setEmail(state, payload) {
      state.email = payload;
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