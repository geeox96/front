import Vue from 'vue'
import Vuex from 'vuex'
import fabricantes from './modules/fabricantes'
import usuarios from './modules/usuarios'

Vue.use(Vuex)

export default new Vuex.Store({
  
  modules: {
    fabricantes,
    usuarios
  },

  state: {
    drawer: true,
    token: null

  },

  mutations: {
    abrirDrawer() {
      this.state.drawer = !this.state.drawer
    }
  },

  actions : {

  }
})
