import { logarGQL, consultarUsuariosGQL } from "../graphql/usuarios";

export default {
  state: {
    usuarioLogado: {},
    usuario: {},
    usuarios: []
  },

  getters: {
    getLogado: state => state.usuarioLogado,
    getTodosUsuarios: state => state.usuarios
  },

  actions: {
    async fazerLogin({ commit }, input) {
      return logarGQL(input).then(sucesso => {
        switch (sucesso.erro) {
          case 1:
            return sucesso.erro;
          case 2:
            return sucesso.erro;
          case 3:
            return sucesso.erro;
          default:
            commit("setToken", sucesso);
            break;
        }
      });
    },

    async consultarUsuarios({ commit }) {
      await consultarUsuariosGQL().then(usuarios => {
        commit("setUsuarios", usuarios);
      });
    }
  },

  mutations: {
    async setToken(state, dados) {
      await localStorage.setItem("token", dados.token);
      state.usuarioLogado = dados;
    },

    setUsuarios(state, usuarios) {
      state.usuarios = usuarios;
    }
  }
};
