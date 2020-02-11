import Vue from 'vue'
import Vuex from 'vuex'
import todos from './todos_module'
import user from './user_modules'
import auth from './auth_modules'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ['auth']
})

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    todos, user, auth
  },
  plugins: [vuexLocal.plugin]
})
