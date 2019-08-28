import { 
  novoLiquidoGQL,
  consultarLiquidosGQL,
  consultarLiquidosAtivosGQL,
  deletarLiquidoAtivosGQL
} from '../graphql/liquidos'

export default {
  state: {
    liquidos: []
  },
  getters: {
      getTodosLiquidosAtivos: state => state.liquidos,
      getTodosLiquidos: state => state.liquidos
  },
  actions: {
    async criarLiquido({commit}, input){
      await novoLiquidoGQL(input)
    },

    async deletarLiquido({commit}, input) {
      await deletarLiquidoAtivosGQL(input)
    },

    async consultarLiquidosAtivos({commit}) {
        await consultarLiquidosAtivosGQL().then(liquidos => commit('setLiquidos', liquidos))
    },

    async consultarLiquidos({commit}, input) {
      await consultarLiquidosGQL().then(liquidos => commit('setLiquidos', liquidos))
    },
  },
  mutations: {
      setLiquidos(state, liquidos) {
          state.liquidos = liquidos
      },

  }
}