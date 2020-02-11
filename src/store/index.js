import Vue from 'vue'
import Vuex from 'vuex'
import Todos from './todos_module'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Todos
  },
  plugins: [vuexLocal.plugin]
})
