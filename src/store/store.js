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
    snackbar: false,
    textoSnack: "",
    cor: "",
    tempo: 3000,
    token: null

  },

  mutations: {
    abrirDrawer() {
      this.state.drawer = !this.state.drawer
    },

    snackbar(state, dados) {
      const { texto, cor, tempo } = dados

      state.snackbar = true
      state.textoSnack = texto
      state.cor = cor
      state.tempo = tempo
    }
  },
  actions : {
    async chamarSnack({ commit }, dados) {
      commit('snackbar', dados)
    }
  }
})
