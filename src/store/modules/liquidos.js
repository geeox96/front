import { 

} from '../graphql/liquidos'

export default {
  state: {
      liquidos: []
  },
  getters: {
      getTodosLiquidosAtivos: state => state.liquidos,
      getTodosFabricantes: state => state.liquidos
  },
  actions: {
      async consultarFabricantesAtivos({commit}) {
          await consultarFabricantesAtivosGQL().then(liquidos => commit('setLiquidos', liquidos))
      },

      async consultarFabricantesAtivos({commit}, input) {
        await consultarFabricantesAtivosGQL().then(liquidos => commit('setLiquidos', liquidos))
    },
  },
  mutations: {
      setLiquidos(state, liquidos) {
          state.liquidos = liquidos
      },

  }
}