const defaultState = () => ({
  todos: []
})

export default {
  namespaced: true,
  state: { ...defaultState() },
  actions: {
    addTodo({ commit }, payload) {
      if (payload) {
        commit('addTodo', payload)
      }
    }
  },
  mutations: {
    addTodo(state, payload) {
      state.todos = [...state.todos, payload]
    },
    resetTodos(state) {
      state = [...state, ...defaultState()]
    }
  },
  getters: {}
}
