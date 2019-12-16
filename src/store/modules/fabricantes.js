import {
  consultarFabricantesAtivosGQL,
  consultarFabricantesGQL,
  novoFabricanteGQL,
  editarFabricanteAdminGQL
} from "../graphql/fabricantes";

export default {
  state: {
    fabricantes: []
  },
  getters: {
    getTodosFabricantesAtivos: state => state.fabricantes,
    getTodosFabricantes: state => state.fabricantes
  },
  actions: {
    async consultarFabricantesAtivos({ commit }) {
      await consultarFabricantesAtivosGQL().then(fabricantes =>
        commit("setFabricantes", fabricantes)
      );
    },

    async consultarFabricantes({ commit }) {
      await consultarFabricantesGQL().then(fabricantes =>
        commit("setFabricantes", fabricantes)
      );
    },

    async criarFabricante({ commit }, dados) {
      return novoFabricanteGQL(dados);
    },

    async editarFabricanteAdmin({ commit }, dados) {
      return editarFabricanteAdminGQL(dados);
    },

    async editarFabricante({ commit }, dados) {
      return editarFabricanteGQL(dados);
    }
  },
  mutations: {
    setFabricantes(state, fabricantes) {
      state.fabricantes = fabricantes;
    }
  }
};
