const defaultState = () => ({
  firstName: '',
  lastName: ''
})

export default {
  namespaced: true,
  state: { ...defaultState() },
  actions: {
    setName({ commit }, payload) {
      if (payload) {
        commit('setName', payload)
      }
    }
  },
  mutations: {
    setName(state, payload) {
      state = [...state, ...payload]
    },
    resetTodos(state) {
      state = [...state, ...defaultState()]
    }
  },
  getters: {}
}
