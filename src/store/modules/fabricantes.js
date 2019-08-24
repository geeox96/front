import { consultarFabricantesAtivosGQL } from '../graphql/fabricantes'

export default {
    state: {
        fabricantes: []
    },
    getters: {
        getTodosFabricantesAtivos: state => state.fabricantes
    },
    actions: {
        async consultarFabricantesAtivos({commit}) {
            await consultarFabricantesAtivosGQL().then(fabricantes => commit('setFabricantes', fabricantes))
        }
    },
    mutations: {
        setFabricantes(state, fabricantes) {
            state.fabricantes = fabricantes
        }
    }
}